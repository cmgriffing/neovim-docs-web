---
title:  Insert
layout: ../../layouts/MainLayout.astro
---

  <a name="insert.txt"></a><a name="Insert"></a><h1> Insert</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/insert.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para"> <a name="Insert-mode"></a><code class="help-tag">Insert-mode</code>
Inserting and replacing text				<a name="mode-ins-repl"></a><code class="help-tag-right">mode-ins-repl</code></div>
<div class="old-help-para">Most of this file is about Insert and Replace mode.  At the end are a few
commands for inserting text in other ways.</div>
<div class="old-help-para">An overview of the most often used commands can be found in chapter 24 of the
user manual <a href="/neovim-docs-web/en/usr_24#usr_24.txt">usr_24.txt</a>.</div>
<div class="old-help-para">Also see <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a>, for moving the cursor to positions where there is no
character.  Useful for editing a table.</div>
<div class="old-help-para"><h2 class="help-heading">1. Special keys<span class="help-heading-tags">						<a name="ins-special-keys"></a><span class="help-tag">ins-special-keys</span></span></h2></div>
<div class="old-help-para">In Insert and Replace mode, the following characters have a special meaning;
other characters are inserted directly.  To insert one of these special
characters into the buffer, precede it with <code>CTRL-V</code>.  To insert a <code>&lt;Nul&gt;</code>
character use "CTRL-V <code>CTRL-@</code>" or "CTRL-V 000".  On some systems, you have to
use "CTRL-V 003" to insert a <code>CTRL-C</code>.  Note: When <code>CTRL-V</code> is mapped you can
often use <code>CTRL-Q</code> instead <a href="/neovim-docs-web/en/insert#i_CTRL-Q">i_CTRL-Q</a>.</div>
<div class="old-help-para">If you are working in a special language mode when inserting text, see the
<a href="/neovim-docs-web/en/options#'langmap'">'langmap'</a> option, <a href="/neovim-docs-web/en/options#'langmap'">'langmap'</a>, on how to avoid switching this mode on and off
all the time.</div>
<div class="old-help-para"><div class="help-column_heading">char		action</div><h3 class="help-heading"><span class="help-heading-tags">						<a name="i_CTRL-%5B"></a><span class="help-tag">i_CTRL-[</span> <a name="i_%3CEsc%3E"></a><span class="help-tag">i_&lt;Esc&gt;</span></span></h3><code>&lt;Esc&gt;</code> or <code>CTRL-[</code>	End insert or Replace mode, go back to Normal mode.  Finish
		abbreviation.
		Note: If your <code>&lt;Esc&gt;</code> key is hard to hit, try <code>CTRL-[</code> instead.
						<a name="i_META"></a><code class="help-tag-right">i_META</code> <a name="i_ALT"></a><code class="help-tag">i_ALT</code>
		ALT (<a href="/neovim-docs-web/en/intro#META">META</a>) may act like <code>&lt;Esc&gt;</code> if the chord is not mapped.
		For example <code>&lt;A-x&gt;</code> acts like <code>&lt;Esc&gt;</code>x if <code>&lt;A-x&gt;</code> does not have an
		insert-mode mapping.
						<a name="i_CTRL-C"></a><code class="help-tag-right">i_CTRL-C</code>
CTRL-C		Quit insert mode, go back to Normal mode.  Do not check for
		abbreviations.  Does not trigger the <a href="/neovim-docs-web/en/autocmd#InsertLeave">InsertLeave</a> autocommand
		event.</div>
<div class="old-help-para">						<a name="i_CTRL-%40"></a><code class="help-tag-right">i_CTRL-@</code>
<code>CTRL-@</code>		Insert previously inserted text and stop insert.</div>
<div class="old-help-para">						<a name="i_CTRL-A"></a><code class="help-tag-right">i_CTRL-A</code>
CTRL-A		Insert previously inserted text.</div>
<div class="old-help-para">						<a name="i_CTRL-H"></a><code class="help-tag-right">i_CTRL-H</code> <a name="i_%3CBS%3E"></a><code class="help-tag">i_&lt;BS&gt;</code> <a name="i_BS"></a><code class="help-tag">i_BS</code>
<code>&lt;BS&gt;</code> or <code>CTRL-H</code>	Delete the character before the cursor (see <a href="/neovim-docs-web/en/insert#i_backspacing">i_backspacing</a>
		about joining lines).
						<a name="i_%3CDel%3E"></a><code class="help-tag-right">i_&lt;Del&gt;</code> <a name="i_DEL"></a><code class="help-tag">i_DEL</code>
<code>&lt;Del&gt;</code>		Delete the character under the cursor.  If the cursor is at
		the end of the line, and the <a href="/neovim-docs-web/en/options#'backspace'">'backspace'</a> option includes
		"eol" (the default), delete the <code>&lt;EOL&gt;</code>; the next line is
		appended after the current one.
						<a name="i_CTRL-W"></a><code class="help-tag-right">i_CTRL-W</code>
CTRL-W		Delete the word before the cursor (see <a href="/neovim-docs-web/en/insert#i_backspacing">i_backspacing</a> about
		joining lines).  See the section "word motions",
		<a href="/neovim-docs-web/en/motion#word-motions">word-motions</a>, for the definition of a word.
						<a name="i_CTRL-W-default"></a><code class="help-tag-right">i_CTRL-W-default</code>
		By default, sets a new undo point before deleting.
		<a href="/neovim-docs-web/en/vim_diff#default-mappings">default-mappings</a>
						<a name="i_CTRL-U"></a><code class="help-tag-right">i_CTRL-U</code>
CTRL-U		Delete all entered characters before the cursor in the current
		line.  If there are no newly entered characters and
		<a href="/neovim-docs-web/en/options#'backspace'">'backspace'</a> is not empty, delete all characters before the
		cursor in the current line.
		If C-indenting is enabled the indent will be adjusted if the
		line becomes blank.
		See <a href="/neovim-docs-web/en/insert#i_backspacing">i_backspacing</a> about joining lines.
						<a name="i_CTRL-U-default"></a><code class="help-tag-right">i_CTRL-U-default</code>
		By default, sets a new undo point before deleting.
		<a href="/neovim-docs-web/en/vim_diff#default-mappings">default-mappings</a>
						<a name="i_CTRL-I"></a><code class="help-tag-right">i_CTRL-I</code> <a name="i_%3CTab%3E"></a><code class="help-tag">i_&lt;Tab&gt;</code> <a name="i_Tab"></a><code class="help-tag">i_Tab</code>
<code>&lt;Tab&gt;</code> or <code>CTRL-I</code> Insert a tab.  If the <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> option is on, the
		equivalent number of spaces is inserted (use <code>CTRL-V</code> <code>&lt;Tab&gt;</code> to
		avoid the expansion; use <code>CTRL-Q</code> <code>&lt;Tab&gt;</code> if <code>CTRL-V</code> is mapped
		<a href="/neovim-docs-web/en/insert#i_CTRL-Q">i_CTRL-Q</a>).  See also the <a href="/neovim-docs-web/en/options#'smarttab'">'smarttab'</a> option and
		<a href="/neovim-docs-web/en/insert#ins-expandtab">ins-expandtab</a>.
						<a name="i_CTRL-J"></a><code class="help-tag-right">i_CTRL-J</code> <a name="i_%3CNL%3E"></a><code class="help-tag">i_&lt;NL&gt;</code>
<code>&lt;NL&gt;</code> or <code>CTRL-J</code>	Begin new line.
						<a name="i_CTRL-M"></a><code class="help-tag-right">i_CTRL-M</code> <a name="i_%3CCR%3E"></a><code class="help-tag">i_&lt;CR&gt;</code>
<code>&lt;CR&gt;</code> or <code>CTRL-M</code>	Begin new line.
						<a name="i_CTRL-K"></a><code class="help-tag-right">i_CTRL-K</code>
CTRL-K <code>{char1}</code> [char2]
		Enter digraph (see <a href="/neovim-docs-web/en/digraph#digraphs">digraphs</a>).  When <code>{char1}</code> is a special
		key, the code for that key is inserted in &lt;&gt; form.  For
		example, the string "&lt;S-Space&gt;" can be entered by typing
		<code>&lt;C-K&gt;</code><code>&lt;S-Space&gt;</code> (two keys).  Neither char is considered for
		mapping.</div>
<div class="old-help-para">CTRL-N		Find next keyword (see <a href="/neovim-docs-web/en/insert#i_CTRL-N">i_CTRL-N</a>).
CTRL-P		Find previous keyword (see <a href="/neovim-docs-web/en/insert#i_CTRL-P">i_CTRL-P</a>).</div>
<div class="old-help-para">CTRL-R <code>{register}</code>				<a name="i_CTRL-R"></a><code class="help-tag-right">i_CTRL-R</code>
		Insert the contents of a register.  Between typing <code>CTRL-R</code> and
		the second character, '"' will be displayed to indicate that
		you are expected to enter the name of a register.
		The text is inserted as if you typed it, but mappings and
		abbreviations are not used.  If you have options like
		<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>, <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a>, or <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> set, this will
		influence what will be inserted.  This is different from what
		happens with the "p" command and pasting with the mouse.
		Special registers:
			'"'	the unnamed register, containing the text of
				the last delete or yank
			'%'	the current file name
			'#'	the alternate file name
			''	the clipboard contents (X11: primary selection)
			'+'	the clipboard contents
			'/'	the last search pattern
			':'	the last command-line
			'.'	the last inserted text
			'-'	the last small (less than a line) delete
							<a name="i_CTRL-R_%3D"></a><code class="help-tag-right">i_CTRL-R_=</code>
			'='	the expression register: you are prompted to
				enter an expression (see <a href="/neovim-docs-web/en/eval#expression">expression</a>)
				Note that 0x80 (128 decimal) is used for
				special keys.  E.g., you can use this to move
				the cursor up:
					<code>CTRL-R</code> ="\&lt;Up&gt;"
				Use <code>CTRL-R</code> <code>CTRL-R</code> to insert text literally.
				When the result is a <a href="/neovim-docs-web/en/eval#List">List</a> the items are used
				as lines.  They can have line breaks inside
				too.
				When the result is a Float it's automatically
				converted to a String.
				When append() or setline() is invoked the undo
				sequence will be broken.
		See <a href="/neovim-docs-web/en/change#registers">registers</a> about registers.</div>
<div class="old-help-para">CTRL-R <code>CTRL-R</code> <code>{register}</code>			<a name="i_CTRL-R_CTRL-R"></a><code class="help-tag-right">i_CTRL-R_CTRL-R</code>
		Insert the contents of a register.  Works like using a single
		<code>CTRL-R</code>, but the text is inserted literally, not as if typed.
		This differs when the register contains characters like <code>&lt;BS&gt;</code>.
		Example, where register a contains "ab^Hc":<pre>CTRL-R a                results in "ac".
CTRL-R CTRL-R a                results in "ab^Hc".</pre></div>
<div class="old-help-para">		Options <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>, <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a>, etc. still apply.  If
		you also want to avoid these, use <code>CTRL-R</code> <code>CTRL-O</code>, see below.
		The '.' register (last inserted text) is still inserted as
		typed.
		After this command, the '.' register contains the text from
		the register as if it was inserted by typing it.</div>
<div class="old-help-para">CTRL-R <code>CTRL-O</code> <code>{register}</code>			<a name="i_CTRL-R_CTRL-O"></a><code class="help-tag-right">i_CTRL-R_CTRL-O</code>
		Insert the contents of a register literally and don't
		auto-indent.  Does the same as pasting with the mouse
		<a href="/neovim-docs-web/en/change#%3CMiddleMouse%3E">&lt;MiddleMouse&gt;</a>. When the register is linewise this will
		insert the text above the current line, like with <code>P</code>.
		Does not replace characters!
		The '.' register (last inserted text) is still inserted as
		typed.
		After this command, the '.' register contains the command
		typed and not the text. I.e., the literals "^R^O" and not the
		text from the register.</div>
<div class="old-help-para">CTRL-R <code>CTRL-P</code> <code>{register}</code>			<a name="i_CTRL-R_CTRL-P"></a><code class="help-tag-right">i_CTRL-R_CTRL-P</code>
		Insert the contents of a register literally and fix the
		indent, like <a href="/neovim-docs-web/en/change#%5B%3CMiddleMouse%3E">[&lt;MiddleMouse&gt;</a>.
		Does not replace characters!
		The '.' register (last inserted text) is still inserted as
		typed.
		After this command, the '.' register contains the command
		typed and not the text. I.e., the literals "^R^P" and not the
		text from the register.</div>
<div class="old-help-para">						<a name="i_CTRL-T"></a><code class="help-tag-right">i_CTRL-T</code>
CTRL-T		Insert one shiftwidth of indent at the start of the current
		line.  The indent is always rounded to a <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>.
						<a name="i_CTRL-D"></a><code class="help-tag-right">i_CTRL-D</code>
CTRL-D		Delete one shiftwidth of indent at the start of the current
		line.  The indent is always rounded to a <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>.</div>
<div class="old-help-para">						<a name="i_0_CTRL-D"></a><code class="help-tag-right">i_0_CTRL-D</code>
0 <code>CTRL-D</code>	Delete all indent in the current line.</div>
<div class="old-help-para">						<a name="i_%5E_CTRL-D"></a><code class="help-tag-right">i_^_CTRL-D</code>
^ <code>CTRL-D</code>	Delete all indent in the current line.  The indent is
		restored in the next line.  This is useful when inserting a
		label.</div>
<div class="old-help-para">						<a name="i_CTRL-V"></a><code class="help-tag-right">i_CTRL-V</code>
CTRL-V		Insert next non-digit literally.  It's also possible to enter
		the decimal, octal or hexadecimal value of a character
		<a href="/neovim-docs-web/en/insert#i_CTRL-V_digit">i_CTRL-V_digit</a>.
		The characters typed right after <code>CTRL-V</code> are not considered for
		mapping.
		For special keys, the CTRL modifier may be included into the
		key to produce a control character.  If there is no control
		character for the key then its <a href="/neovim-docs-web/en/intro#key-notation">key-notation</a> is inserted.
		Note: When <code>CTRL-V</code> is mapped (e.g., to paste text) you can
		often use <code>CTRL-Q</code> instead <a href="/neovim-docs-web/en/insert#i_CTRL-Q">i_CTRL-Q</a>.</div>
<div class="old-help-para">						<a name="i_CTRL-Q"></a><code class="help-tag-right">i_CTRL-Q</code>
CTRL-Q		Same as <code>CTRL-V</code>.
		Note: Some terminal connections may eat <code>CTRL-Q</code>, it doesn't
		work then.  It does work in the GUI.</div>
<div class="old-help-para"><h3 class="help-heading">CTRL-SHIFT-V<span class="help-heading-tags">				<a name="i_CTRL-SHIFT-V"></a><span class="help-tag">i_CTRL-SHIFT-V</span> <a name="i_CTRL-SHIFT-Q"></a><span class="help-tag">i_CTRL-SHIFT-Q</span></span></h3>CTRL-SHIFT-Q	Works just like <code>CTRL-V</code>, but do not try to include the CTRL
		modifier into the key.</div>
<div class="old-help-para">CTRL-X		Enter <code>CTRL-X</code> mode.  This is a sub-mode where commands can
		be given to complete words or scroll the window.  See
		<a href="/neovim-docs-web/en/insert#i_CTRL-X">i_CTRL-X</a> and <a href="/neovim-docs-web/en/insert#ins-completion">ins-completion</a>.</div>
<div class="old-help-para">						<a name="i_CTRL-E"></a><code class="help-tag-right">i_CTRL-E</code>
CTRL-E		Insert the character which is below the cursor.
						<a name="i_CTRL-Y"></a><code class="help-tag-right">i_CTRL-Y</code>
CTRL-Y		Insert the character which is above the cursor.
		Note that for <code>CTRL-E</code> and <code>CTRL-Y</code> <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is not used, to be
		able to copy characters from a long line.</div>
<div class="old-help-para">						<a name="i_CTRL-_"></a><code class="help-tag-right">i_CTRL-_</code>
CTRL-_		Switch between languages, as follows:
<div class="help-li" style="">  When in a rightleft window, revins and nohkmap are toggled,
		   since English will likely be inserted in this case.
</div><div class="help-li" style="">  When in a norightleft window, revins and hkmap are toggled,
		   since Hebrew will likely be inserted in this case.
</div></div>
<div class="old-help-para">		<code>CTRL-_</code> moves the cursor to the end of the typed text.</div>
<div class="old-help-para">		This command is only available when the <a href="/neovim-docs-web/en/options#'allowrevins'">'allowrevins'</a> option
		is set.
		Please refer to <a href="/neovim-docs-web/en/rileft#rileft.txt">rileft.txt</a> for more information about
		right-to-left mode.</div>
<div class="old-help-para">						<a name="i_CTRL-%5E"></a><code class="help-tag-right">i_CTRL-^</code>
<code>CTRL-^</code>		Toggle the use of typing language characters.
		When language <a href="/neovim-docs-web/en/map#%3Almap">:lmap</a> mappings are defined:
<div class="help-li" style=""> If <a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a> is 1 (langmap mappings used) it becomes 0 (no
		  langmap mappings used).
</div><div class="help-li" style=""> If <a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a> has another value it becomes 1, thus langmap
		  mappings are enabled.
		When no language mappings are defined:
</div><div class="help-li" style=""> If <a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a> is 2 (Input Method used) it becomes 0 (no
		  Input Method used).
</div><div class="help-li" style=""> If <a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a> has another value it becomes 2, thus the Input
		  Method is enabled.
		When set to 1, the value of the "b:keymap_name" variable, the
		<a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> option or "&lt;lang&gt;" appears in the status line.
		The language mappings are normally used to type characters
		that are different from what the keyboard produces.  The
		<a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> option can be used to install a whole number of them.
</div></div>
<div class="old-help-para">						<a name="i_CTRL-%5D"></a><code class="help-tag-right">i_CTRL-]</code>
<code>CTRL-]</code>		Trigger abbreviation, without inserting a character.</div>
<div class="old-help-para">						<a name="i_%3CInsert%3E"></a><code class="help-tag-right">i_&lt;Insert&gt;</code>
<code>&lt;Insert&gt;</code>	Toggle between Insert and Replace mode.
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+insert.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/insert.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%09%09%09%09%09%2Ai_%3CInsert%3E%2A%0A%3CInsert%3E%09Toggle%20between%20Insert%20and%20Replace%20mode.%0A-----------------------------------------------------------------------%0A%0A%09%09%09%09%09%09%2Ai_backspacing%2A%0AThe%20effect%20of%20the%20%3CBS%3E%2C%20CTRL-W%2C%20and%20CTRL-U%20depend%20on%20the%20'backspace'%20option%0A(unless%20'revins'%20is%20set).%20%20This%20is%20a%20comma-separated%20list%20of%20items%3A%0D%60%60%60">-----------------------------------------------------------------------</a></div>
<div class="old-help-para">						<a name="i_backspacing"></a><code class="help-tag-right">i_backspacing</code>
The effect of the <code>&lt;BS&gt;</code>, <code>CTRL-W</code>, and <code>CTRL-U</code> depend on the <a href="/neovim-docs-web/en/options#'backspace'">'backspace'</a> option
(unless <a href="/neovim-docs-web/en/options#'revins'">'revins'</a> is set).  This is a comma-separated list of items:</div>
<div class="old-help-para"><div class="help-column_heading">item	    action</div>indent	    allow backspacing over autoindent
eol	    allow backspacing over end-of-line (join lines)
start	    allow backspacing over the start position of insert; <code>CTRL-W</code> and
	    <code>CTRL-U</code> stop once at the start position</div>
<div class="old-help-para">When <a href="/neovim-docs-web/en/options#'backspace'">'backspace'</a> is empty, Vi compatible backspacing is used.  You cannot
backspace over autoindent, before column 1 or before where insert started.</div>
<div class="old-help-para">For backwards compatibility the values "0", "1", "2" and "3" are also allowed,
see <a href="/neovim-docs-web/en/options#'backspace'">'backspace'</a>.</div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'backspace'">'backspace'</a> option does contain "eol" and the cursor is in column 1
when one of the three keys is used, the current line is joined with the
previous line.  This effectively deletes the <code>&lt;EOL&gt;</code> in front of the cursor.</div>
<div class="old-help-para">						<a name="i_CTRL-V_digit"></a><code class="help-tag-right">i_CTRL-V_digit</code>
With <code>CTRL-V</code> the decimal, octal or hexadecimal value of a character can be
entered directly.  This way you can enter any character, except a line break
(<code>&lt;NL&gt;</code>, value 10).  There are five ways to enter the character value:</div>
<div class="old-help-para"><div class="help-column_heading">first char	mode	     max nr of chars   max value</div>(none)		decimal		   3		255
o or O		octal		   3		377	 (255)
x or X		hexadecimal	   2		ff	 (255)
u		hexadecimal	   4		ffff	 (65535)
U		hexadecimal	   8		7fffffff (2147483647)</div>
<div class="old-help-para">Normally you would type the maximum number of characters.  Thus to enter a
space (value 32) you would type <code>&lt;C-V&gt;</code>032.  You can omit the leading zero, in
which case the character typed after the number must be a non-digit.  This
happens for the other modes as well: As soon as you type a character that is
invalid for the mode, the value before it will be used and the "invalid"
character is dealt with in the normal way.</div>
<div class="old-help-para">If you enter a value of 10, it will end up in the file as a 0.  The 10 is a
<code>&lt;NL&gt;</code>, which is used internally to represent the <code>&lt;Nul&gt;</code> character.  When writing
the buffer to a file, the <code>&lt;NL&gt;</code> character is translated into <code>&lt;Nul&gt;</code>.  The <code>&lt;NL&gt;</code>
character is written at the end of each line.  Thus if you want to insert a
<code>&lt;NL&gt;</code> character in a file you will have to make a line break.
Also see <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>.</div>
<div class="old-help-para">						<a name="i_CTRL-X"></a><code class="help-tag-right">i_CTRL-X</code> <a name="insert_expand"></a><code class="help-tag">insert_expand</code>
CTRL-X enters a sub-mode where several commands can be used.  Most of these
commands do keyword completion; see <a href="/neovim-docs-web/en/insert#ins-completion">ins-completion</a>.</div>
<div class="old-help-para">Two commands can be used to scroll the window up or down, without exiting
insert mode:</div>
<div class="old-help-para">						<a name="i_CTRL-X_CTRL-E"></a><code class="help-tag-right">i_CTRL-X_CTRL-E</code>
CTRL-X <code>CTRL-E</code>		scroll window one line up.
			When doing completion look here: <a href="/neovim-docs-web/en/insert#complete_CTRL-E">complete_CTRL-E</a></div>
<div class="old-help-para">						<a name="i_CTRL-X_CTRL-Y"></a><code class="help-tag-right">i_CTRL-X_CTRL-Y</code>
CTRL-X <code>CTRL-Y</code>		scroll window one line down.
			When doing completion look here: <a href="/neovim-docs-web/en/insert#complete_CTRL-Y">complete_CTRL-Y</a></div>
<div class="old-help-para">After <code>CTRL-X</code> is pressed, each <code>CTRL-E</code> (<code>CTRL-Y</code>) scrolls the window up (down) by
one line unless that would cause the cursor to move from its current position
in the file.  As soon as another key is pressed, <code>CTRL-X</code> mode is exited and
that key is interpreted as in Insert mode.</div>
<div class="old-help-para"><h2 class="help-heading">2. Special special keys<span class="help-heading-tags">				<a name="ins-special-special"></a><span class="help-tag">ins-special-special</span></span></h2></div>
<div class="old-help-para">The following keys are special.  They stop the current insert, do something,
and then restart insertion.  This means you can do something without getting
out of Insert mode.  This is very handy if you prefer to use the Insert mode
all the time, just like editors that don't have a separate Normal mode. You
can use <code>CTRL-O</code> if you want to map a function key to a command.</div>
<div class="old-help-para">The changes (inserted or deleted characters) before and after these keys can
be undone separately.  Only the last change can be redone and always behaves
like an "i" command.</div>
<div class="old-help-para"><div class="help-column_heading">char		action</div><h3 class="help-heading"><code>&lt;Up&gt;</code>		cursor one line up<span class="help-heading-tags">			     <a name="i_%3CUp%3E"></a><span class="help-tag">i_&lt;Up&gt;</span></span></h3><code>&lt;Down&gt;</code>		cursor one line down			     <a name="i_%3CDown%3E"></a><code class="help-tag-right">i_&lt;Down&gt;</code>
CTRL-G <code>&lt;Up&gt;</code>	cursor one line up, insert start column	     <a name="i_CTRL-G_%3CUp%3E"></a><code class="help-tag-right">i_CTRL-G_&lt;Up&gt;</code>
CTRL-G k	cursor one line up, insert start column	     <a name="i_CTRL-G_k"></a><code class="help-tag-right">i_CTRL-G_k</code>
CTRL-G <code>CTRL-K</code>	cursor one line up, insert start column	     <a name="i_CTRL-G_CTRL-K"></a><code class="help-tag-right">i_CTRL-G_CTRL-K</code>
CTRL-G <code>&lt;Down&gt;</code>	cursor one line down, insert start column    <a name="i_CTRL-G_%3CDown%3E"></a><code class="help-tag">i_CTRL-G_&lt;Down&gt;</code>
CTRL-G j	cursor one line down, insert start column    <a name="i_CTRL-G_j"></a><code class="help-tag">i_CTRL-G_j</code>
CTRL-G <code>CTRL-J</code>	cursor one line down, insert start column    <a name="i_CTRL-G_CTRL-J"></a><code class="help-tag">i_CTRL-G_CTRL-J</code>
<code>&lt;Left&gt;</code>		cursor one character left		     <a name="i_%3CLeft%3E"></a><code class="help-tag-right">i_&lt;Left&gt;</code>
<code>&lt;Right&gt;</code>		cursor one character right		     <a name="i_%3CRight%3E"></a><code class="help-tag-right">i_&lt;Right&gt;</code>
<code>&lt;S-Left&gt;</code>	cursor one word back (like "b" command)	     <a name="i_%3CS-Left%3E"></a><code class="help-tag-right">i_&lt;S-Left&gt;</code>
<code>&lt;C-Left&gt;</code>	cursor one word back (like "b" command)	     <a name="i_%3CC-Left%3E"></a><code class="help-tag-right">i_&lt;C-Left&gt;</code>
<code>&lt;S-Right&gt;</code>	cursor one word forward (like "w" command)   <a name="i_%3CS-Right%3E"></a><code class="help-tag">i_&lt;S-Right&gt;</code>
<code>&lt;C-Right&gt;</code>	cursor one word forward (like "w" command)   <a name="i_%3CC-Right%3E"></a><code class="help-tag">i_&lt;C-Right&gt;</code>
<code>&lt;Home&gt;</code>		cursor to first char in the line	     <a name="i_%3CHome%3E"></a><code class="help-tag-right">i_&lt;Home&gt;</code>
<code>&lt;End&gt;</code>		cursor to after last char in the line	     <a name="i_%3CEnd%3E"></a><code class="help-tag-right">i_&lt;End&gt;</code>
<code>&lt;C-Home&gt;</code>	cursor to first char in the file	     <a name="i_%3CC-Home%3E"></a><code class="help-tag-right">i_&lt;C-Home&gt;</code>
<code>&lt;C-End&gt;</code>		cursor to after last char in the file	     <a name="i_%3CC-End%3E"></a><code class="help-tag-right">i_&lt;C-End&gt;</code>
<code>&lt;LeftMouse&gt;</code>	cursor to position of mouse click	     <a name="i_%3CLeftMouse%3E"></a><code class="help-tag-right">i_&lt;LeftMouse&gt;</code>
<code>&lt;S-Up&gt;</code>		move window one page up			     <a name="i_%3CS-Up%3E"></a><code class="help-tag-right">i_&lt;S-Up&gt;</code>
<code>&lt;PageUp&gt;</code>	move window one page up			     <a name="i_%3CPageUp%3E"></a><code class="help-tag-right">i_&lt;PageUp&gt;</code>
<code>&lt;S-Down&gt;</code>	move window one page down		     <a name="i_%3CS-Down%3E"></a><code class="help-tag-right">i_&lt;S-Down&gt;</code>
<code>&lt;PageDown&gt;</code>	move window one page down		     <a name="i_%3CPageDown%3E"></a><code class="help-tag-right">i_&lt;PageDown&gt;</code>
<code>&lt;ScrollWheelDown&gt;</code>    move window three lines down	<a name="i_%3CScrollWheelDown%3E"></a><code class="help-tag">i_&lt;ScrollWheelDown&gt;</code>
<code>&lt;S-ScrollWheelDown&gt;</code>  move window one page down		<a name="i_%3CS-ScrollWheelDown%3E"></a><code class="help-tag-right">i_&lt;S-ScrollWheelDown&gt;</code>
<code>&lt;ScrollWheelUp&gt;</code>      move window three lines up		<a name="i_%3CScrollWheelUp%3E"></a><code class="help-tag-right">i_&lt;ScrollWheelUp&gt;</code>
<code>&lt;S-ScrollWheelUp&gt;</code>    move window one page up		<a name="i_%3CS-ScrollWheelUp%3E"></a><code class="help-tag-right">i_&lt;S-ScrollWheelUp&gt;</code>
<code>&lt;ScrollWheelLeft&gt;</code>    move window six columns left	<a name="i_%3CScrollWheelLeft%3E"></a><code class="help-tag">i_&lt;ScrollWheelLeft&gt;</code>
<code>&lt;S-ScrollWheelLeft&gt;</code>  move window one page left		<a name="i_%3CS-ScrollWheelLeft%3E"></a><code class="help-tag-right">i_&lt;S-ScrollWheelLeft&gt;</code>
<code>&lt;ScrollWheelRight&gt;</code>   move window six columns right	<a name="i_%3CScrollWheelRight%3E"></a><code class="help-tag">i_&lt;ScrollWheelRight&gt;</code>
<code>&lt;S-ScrollWheelRight&gt;</code> move window one page right		<a name="i_%3CS-ScrollWheelRight%3E"></a><code class="help-tag-right">i_&lt;S-ScrollWheelRight&gt;</code>
CTRL-O		execute one command, return to Insert mode   <a name="i_CTRL-O"></a><code class="help-tag">i_CTRL-O</code>
<code>CTRL-\</code> <code>CTRL-O</code>	like <code>CTRL-O</code> but don't move the cursor	     <a name="i_CTRL-%5C_CTRL-O"></a><code class="help-tag-right">i_CTRL-\_CTRL-O</code>
CTRL-G u	close undo sequence, start new change	     <a name="i_CTRL-G_u"></a><code class="help-tag-right">i_CTRL-G_u</code>
CTRL-G U	don't start a new undo block with the next   <a name="i_CTRL-G_U"></a><code class="help-tag">i_CTRL-G_U</code>
		left/right cursor movement, if the cursor
		stays within the same line
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+insert.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/insert.html%0D%0DContext%3A%0D%0D%60%60%60%0DCTRL-G%20U%09don't%20start%20a%20new%20undo%20block%20with%20the%20next%20%20%20%2Ai_CTRL-G_U%2A%0A%09%09left%2Fright%20cursor%20movement%2C%20if%20the%20cursor%0A%09%09stays%20within%20the%20same%20line%0A-----------------------------------------------------------------------%0A%0AThe%20CTRL-O%20command%20sometimes%20has%20a%20side%20effect%3A%20If%20the%20cursor%20was%20beyond%20the%0Aend%20of%20the%20line%2C%20it%20will%20be%20put%20on%20the%20last%20character%20in%20the%20line.%20%20In%0Amappings%20it's%20often%20better%20to%20use%20%3CEsc%3E%20(first%20put%20an%20%22x%22%20in%20the%20text%2C%20%3CEsc%3E%0D%60%60%60">-----------------------------------------------------------------------</a></div>
<div class="old-help-para">The <code>CTRL-O</code> command sometimes has a side effect: If the cursor was beyond the
end of the line, it will be put on the last character in the line.  In
mappings it's often better to use <code>&lt;Esc&gt;</code> (first put an "x" in the text, <code>&lt;Esc&gt;</code>
will then always put the cursor on it).  Or use <code>CTRL-\</code> <code>CTRL-O</code>, but then
beware of the cursor possibly being beyond the end of the line.  Note that the
command following <code>CTRL-\</code> <code>CTRL-O</code> can still move the cursor, it is not restored
to its original position.</div>
<div class="old-help-para">The <code>CTRL-O</code> command takes you to Normal mode.  If you then use a command enter
Insert mode again it normally doesn't nest.  Thus when typing "a&lt;C-O&gt;a" and
then <code>&lt;Esc&gt;</code> takes you back to Normal mode, you do not need to type <code>&lt;Esc&gt;</code> twice.
An exception is when not typing the command, e.g. when executing a mapping or
sourcing a script.  This makes mappings work that briefly switch to Insert
mode.</div>
<div class="old-help-para">The shifted cursor keys are not available on all terminals.</div>
<div class="old-help-para">Another side effect is that a count specified before the "i" or "a" command is
ignored.  That is because repeating the effect of the command after <code>CTRL-O</code> is
too complicated.</div>
<div class="old-help-para">An example for using <code>CTRL-G</code> u:<pre>:inoremap &lt;C-H&gt; &lt;C-G&gt;u&lt;C-H&gt;</pre>
This redefines the backspace key to start a new undo sequence.  You can now
undo the effect of the backspace key, without changing what you typed before
that, with <code>CTRL-O</code> u.  Another example:<pre>:inoremap &lt;CR&gt; &lt;C-]&gt;&lt;C-G&gt;u&lt;CR&gt;</pre>
This starts a new undo block at each line break.  It also expands
abbreviations before this.</div>
<div class="old-help-para">An example for using <code>CTRL-G</code> U:<pre>inoremap &lt;Left&gt;  &lt;C-G&gt;U&lt;Left&gt;
inoremap &lt;Right&gt; &lt;C-G&gt;U&lt;Right&gt;
inoremap &lt;expr&gt; &lt;Home&gt; col('.') == match(getline('.'), '\S') + 1 ?
 \ repeat('&lt;C-G&gt;U&lt;Left&gt;', col('.') - 1) :
 \ (col('.') &lt; match(getline('.'), '\S') ?
 \     repeat('&lt;C-G&gt;U&lt;Right&gt;', match(getline('.'), '\S') + 0) :
 \     repeat('&lt;C-G&gt;U&lt;Left&gt;', col('.') - 1 - match(getline('.'), '\S')))
inoremap &lt;expr&gt; &lt;End&gt; repeat('&lt;C-G&gt;U&lt;Right&gt;', col('$') - col('.'))
inoremap ( ()&lt;C-G&gt;U&lt;Left&gt;</pre>
This makes it possible to use the cursor keys in Insert mode, without starting
a new undo block and therefore using <a href="/neovim-docs-web/en/repeat#.">.</a> (redo) will work as expected.  Also
entering a text like (with the "(" mapping from above):</div>
<div class="old-help-para">   Lorem ipsum (dolor</div>
<div class="old-help-para">will be repeatable by using <a href="/neovim-docs-web/en/repeat#.">.</a> to the expected</div>
<div class="old-help-para">   Lorem ipsum (dolor)</div>
<div class="old-help-para">Using <code>CTRL-O</code> splits undo: the text typed before and after it is undone
separately.  If you want to avoid this (e.g., in a mapping) you might be able
to use <code>CTRL-R</code> = <a href="/neovim-docs-web/en/insert#i_CTRL-R">i_CTRL-R</a>.  E.g., to call a function:<pre>:imap &lt;F2&gt; &lt;C-R&gt;=MyFunc()&lt;CR&gt;</pre>
When the <a href="/neovim-docs-web/en/options#'whichwrap'">'whichwrap'</a> option is set appropriately, the <code>&lt;Left&gt;</code> and <code>&lt;Right&gt;</code>
keys on the first/last character in the line make the cursor wrap to the
previous/next line.</div>
<div class="old-help-para">The <code>CTRL-G</code> j and <code>CTRL-G</code> k commands can be used to insert text in front of a
column.  Example:<pre>int i;
int j;</pre>
Position the cursor on the first "int", type "istatic <code>&lt;C-G&gt;</code>j       ".  The
result is:<pre>static int i;
       int j;</pre>
When inserting the same text in front of the column in every line, use the
Visual blockwise command "I" <a href="/neovim-docs-web/en/visual#v_b_I">v_b_I</a>.</div>
<div class="old-help-para"><h2 class="help-heading">3. <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> and <a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a> options<span class="help-heading-tags">			<a name="ins-textwidth"></a><span class="help-tag">ins-textwidth</span></span></h2></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> option can be used to automatically break a line before it
gets too long.  Set the <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> option to the desired maximum line
length.  If you then type more characters (not spaces or tabs), the
last word will be put on a new line (unless it is the only word on the
line).  If you set <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> to 0, this feature is disabled.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a> option does almost the same.  The difference is that
<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> has a fixed width while <a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a> depends on the width of the
screen.  When using <a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a> this is equal to using <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> with a
value equal to (columns - <a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a>), where columns is the width of the
screen.</div>
<div class="old-help-para">When <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> and <a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a> are both set, <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is used.</div>
<div class="old-help-para">If you don't really want to break the line, but view the line wrapped at a
convenient place, see the <a href="/neovim-docs-web/en/options#'linebreak'">'linebreak'</a> option.</div>
<div class="old-help-para">The line is only broken automatically when using Insert mode, or when
appending to a line.  When in replace mode and the line length is not
changed, the line will not be broken.</div>
<div class="old-help-para">Long lines are broken if you enter a non-white character after the margin.
The situations where a line will be broken can be restricted by adding
characters to the <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> option:
"l"  Only break a line if it was not longer than <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> when the insert
     started.
"v"  Only break at a white character that has been entered during the
     current insert command.  This is mostly Vi-compatible.
"lv" Only break if the line was not longer than <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> when the insert
     started and only at a white character that has been entered during the
     current insert command.  Only differs from "l" when entering non-white
     characters while crossing the <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> boundary.</div>
<div class="old-help-para">Normally an internal function will be used to decide where to break the line.
If you want to do it in a different way set the <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> option to an
expression that will take care of the line break.</div>
<div class="old-help-para">If you want to format a block of text, you can use the "gq" operator.  Type
"gq" and a movement command to move the cursor to the end of the block.  In
many cases, the command "gq}" will do what you want (format until the end of
paragraph).  Alternatively, you can use "gqap", which will format the whole
paragraph, no matter where the cursor currently is.  Or you can use Visual
mode: hit "v", move to the end of the block, and type "gq".  See also <a href="/neovim-docs-web/en/change#gq">gq</a>.</div>
<div class="old-help-para"><h2 class="help-heading">4. <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a>, <a href="/neovim-docs-web/en/options#'smarttab'">'smarttab'</a> and <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> options<span class="help-heading-tags">	<a name="ins-expandtab"></a><span class="help-tag">ins-expandtab</span></span></h2></div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> option is on, spaces will be used to fill the amount of
whitespace of the tab.  If you want to enter a real <code>&lt;Tab&gt;</code>, type <code>CTRL-V</code> first
(use <code>CTRL-Q</code> when <code>CTRL-V</code> is mapped <a href="/neovim-docs-web/en/insert#i_CTRL-Q">i_CTRL-Q</a>).
The <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> option is off by default.  Note that in Replace mode, a single
character is replaced with several spaces.  The result of this is that the
number of characters in the line increases.  Backspacing will delete one
space at a time.  The original character will be put back for only one space
that you backspace over (the last one).</div>
<div class="old-help-para">							<a name="ins-smarttab"></a><code class="help-tag-right">ins-smarttab</code>
When the <a href="/neovim-docs-web/en/options#'smarttab'">'smarttab'</a> option is on, a <code>&lt;Tab&gt;</code> inserts <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> positions at
the beginning of a line and <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> positions in other places.  This means
that often spaces instead of a <code>&lt;Tab&gt;</code> character are inserted.  When <a href="/neovim-docs-web/en/options#'smarttab'">'smarttab'</a>
is off, a <code>&lt;Tab&gt;</code> always inserts <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> positions, and <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> is only
used for "&gt;&gt;" and the like.</div>
<div class="old-help-para">							<a name="ins-softtabstop"></a><code class="help-tag-right">ins-softtabstop</code>
When the <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> option is non-zero, a <code>&lt;Tab&gt;</code> inserts <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a>
positions, and a <code>&lt;BS&gt;</code> used to delete white space, will delete <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a>
positions.  This feels like <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> was set to <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a>, but a real
<code>&lt;Tab&gt;</code> character still takes <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> positions, so your file will still look
correct when used by other applications.</div>
<div class="old-help-para">If <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> is non-zero, a <code>&lt;BS&gt;</code> will try to delete as much white space to
move to the previous <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> position, except when the previously
inserted character is a space, then it will only delete the character before
the cursor.  Otherwise you cannot always delete a single character before the
cursor.  You will have to delete <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> characters first, and then type
extra spaces to get where you want to be.</div>
<div class="old-help-para"><h2 class="help-heading">5. Replace mode<span class="help-heading-tags">				<a name="Replace"></a><span class="help-tag">Replace</span> <a name="Replace-mode"></a><span class="help-tag">Replace-mode</span> <a name="mode-replace"></a><span class="help-tag">mode-replace</span></span></h2></div>
<div class="old-help-para">Enter Replace mode with the "R" command in normal mode.</div>
<div class="old-help-para">In Replace mode, one character in the line is deleted for every character you
type.  If there is no character to delete (at the end of the line), the
typed character is appended (as in Insert mode).  Thus the number of
characters in a line stays the same until you get to the end of the line.
If a <code>&lt;NL&gt;</code> is typed, a line break is inserted and no character is deleted.</div>
<div class="old-help-para">Be careful with <code>&lt;Tab&gt;</code> characters.  If you type a normal printing character in
its place, the number of characters is still the same, but the number of
columns will become smaller.</div>
<div class="old-help-para">If you delete characters in Replace mode (with <code>&lt;BS&gt;</code>, <code>CTRL-W</code>, or <code>CTRL-U</code>), what
happens is that you delete the changes.  The characters that were replaced
are restored.  If you had typed past the existing text, the characters you
added are deleted.  This is effectively a character-at-a-time undo.</div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> option is on, a <code>&lt;Tab&gt;</code> will replace one character with
several spaces.  The result of this is that the number of characters in the
line increases.  Backspacing will delete one space at a time.  The original
character will be put back for only one space that you backspace over (the
last one).</div>
<div class="old-help-para"><h2 class="help-heading">6. Virtual Replace mode<span class="help-heading-tags">		<a name="vreplace-mode"></a><span class="help-tag">vreplace-mode</span> <a name="Virtual-Replace-mode"></a><span class="help-tag">Virtual-Replace-mode</span></span></h2></div>
<div class="old-help-para">Enter Virtual Replace mode with the "gR" command in normal mode.</div>
<div class="old-help-para">Virtual Replace mode is similar to Replace mode, but instead of replacing
actual characters in the file, you are replacing screen real estate, so that
characters further on in the file never appear to move.</div>
<div class="old-help-para">So if you type a <code>&lt;Tab&gt;</code> it may replace several normal characters, and if you
type a letter on top of a <code>&lt;Tab&gt;</code> it may not replace anything at all, since the
<code>&lt;Tab&gt;</code> will still line up to the same place as before.</div>
<div class="old-help-para">Typing a <code>&lt;NL&gt;</code> still doesn't cause characters later in the file to appear to
move.  The rest of the current line will be replaced by the <code>&lt;NL&gt;</code> (that is,
they are deleted), and replacing continues on the next line.  A new line is
NOT inserted unless you go past the end of the file.</div>
<div class="old-help-para">Interesting effects are seen when using <code>CTRL-T</code> and <code>CTRL-D</code>.  The characters
before the cursor are shifted sideways as normal, but characters later in the
line still remain still.  <code>CTRL-T</code> will hide some of the old line under the
shifted characters, but <code>CTRL-D</code> will reveal them again.</div>
<div class="old-help-para">As with Replace mode, using <code>&lt;BS&gt;</code> etc will bring back the characters that were
replaced.  This still works in conjunction with <a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a>, <code>CTRL-T</code> and
CTRL-D, <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a>, <a href="/neovim-docs-web/en/options#'smarttab'">'smarttab'</a>, <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a>, etc.</div>
<div class="old-help-para">In <a href="/neovim-docs-web/en/options#'list'">'list'</a> mode, Virtual Replace mode acts as if it was not in <a href="/neovim-docs-web/en/options#'list'">'list'</a> mode,
unless "L" is in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.</div>
<div class="old-help-para">Note that the only situations for which characters beyond the cursor should
appear to move are in List mode <a href="/neovim-docs-web/en/options#'list'">'list'</a>, and occasionally when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is set
(and the line changes length to become shorter or wider than the width of the
screen).  In other cases spaces may be inserted to avoid following characters
to move.</div>
<div class="old-help-para">This mode is very useful for editing <code>&lt;Tab&gt;</code> separated columns in tables, for
entering new data while keeping all the columns aligned.</div>
<div class="old-help-para"><h2 class="help-heading">7. Insert mode completion<span class="help-heading-tags">				<a name="ins-completion"></a><span class="help-tag">ins-completion</span></span></h2></div>
<div class="old-help-para">In Insert and Replace mode, there are several commands to complete part of a
keyword or line that has been typed.  This is useful if you are using
complicated keywords (e.g., function names with capitals and underscores).</div>
<div class="old-help-para">Completion can be done for:</div>
<div class="old-help-para">1. Whole lines						<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-L">i_CTRL-X_CTRL-L</a>
2. keywords in the current file				<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-N">i_CTRL-X_CTRL-N</a>
3. keywords in <a href="/neovim-docs-web/en/options#'dictionary'">'dictionary'</a>				<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-K">i_CTRL-X_CTRL-K</a>
4. keywords in <a href="/neovim-docs-web/en/options#'thesaurus'">'thesaurus'</a>, thesaurus-style		<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-T">i_CTRL-X_CTRL-T</a>
5. keywords in the current and included files		<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-I">i_CTRL-X_CTRL-I</a>
6. tags							<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-%5D">i_CTRL-X_CTRL-]</a>
7. file names						<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-F">i_CTRL-X_CTRL-F</a>
8. definitions or macros				<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-D">i_CTRL-X_CTRL-D</a>
9. Vim command-line					<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-V">i_CTRL-X_CTRL-V</a>
10. User defined completion				<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-U">i_CTRL-X_CTRL-U</a>
11. omni completion					<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-O">i_CTRL-X_CTRL-O</a>
12. Spelling suggestions				<a href="/neovim-docs-web/en/insert#i_CTRL-X_s">i_CTRL-X_s</a>
13. keywords in <a href="/neovim-docs-web/en/options#'complete'">'complete'</a>				<a href="/neovim-docs-web/en/insert#i_CTRL-N">i_CTRL-N</a> <a href="/neovim-docs-web/en/insert#i_CTRL-P">i_CTRL-P</a></div>
<div class="old-help-para">Additionally, <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-Z">i_CTRL-X_CTRL-Z</a> stops completion without changing the text.</div>
<div class="old-help-para">All these, except <code>CTRL-N</code> and <code>CTRL-P</code>, are done in <code>CTRL-X</code> mode.  This is a
sub-mode of Insert and Replace modes.  You enter <code>CTRL-X</code> mode by typing <code>CTRL-X</code>
and one of the <code>CTRL-X</code> commands.  You exit <code>CTRL-X</code> mode by typing a key that is
not a valid <code>CTRL-X</code> mode command.  Valid keys are the <code>CTRL-X</code> command itself,
CTRL-N (next), and <code>CTRL-P</code> (previous).</div>
<div class="old-help-para">To get the current completion information, <a href="/neovim-docs-web/en/builtin#complete_info()">complete_info()</a> can be used.
Also see the <a href="/neovim-docs-web/en/options#'infercase'">'infercase'</a> option if you want to adjust the case of the match.</div>
<div class="old-help-para">							<a name="complete_CTRL-E"></a><code class="help-tag-right">complete_CTRL-E</code>
When completion is active you can use <code>CTRL-E</code> to stop it and go back to the
originally typed text.  The <code>CTRL-E</code> will not be inserted.</div>
<div class="old-help-para">							<a name="complete_CTRL-Y"></a><code class="help-tag-right">complete_CTRL-Y</code>
When the popup menu is displayed you can use <code>CTRL-Y</code> to stop completion and
accept the currently selected entry.  The <code>CTRL-Y</code> is not inserted.  Typing a
space, Enter, or some other unprintable character will leave completion mode
and insert that typed character.</div>
<div class="old-help-para">When the popup menu is displayed there are a few more special keys, see
<a href="/neovim-docs-web/en/insert#popupmenu-keys">popupmenu-keys</a>.</div>
<div class="old-help-para">Note: The keys that are valid in <code>CTRL-X</code> mode are not mapped.  This allows for
<code>:map &lt;C-F&gt; &lt;C-X&gt;&lt;C-F&gt;</code> to work.  The key that ends <code>CTRL-X</code> mode (any key that
is not a valid <code>CTRL-X</code> mode command) is mapped. Also, when doing completion
with <a href="/neovim-docs-web/en/options#'complete'">'complete'</a> mappings apply as usual.</div>
<div class="old-help-para">								<a name="E565"></a><code class="help-tag-right">E565</code>
Note: While completion is active Insert mode can't be used recursively and
buffer text cannot be changed.  Mappings that somehow invoke ":normal i.."
will generate an E565 error.</div>
<div class="old-help-para">The following mappings are suggested to make typing the completion commands
a bit easier (although they will hide other commands):<pre>:inoremap &lt;C-]&gt; &lt;C-X&gt;&lt;C-]&gt;
:inoremap &lt;C-F&gt; &lt;C-X&gt;&lt;C-F&gt;
:inoremap &lt;C-D&gt; &lt;C-X&gt;&lt;C-D&gt;
:inoremap &lt;C-L&gt; &lt;C-X&gt;&lt;C-L&gt;</pre>
As a special case, typing <code>CTRL-R</code> to perform register insertion (see
<a href="/neovim-docs-web/en/insert#i_CTRL-R">i_CTRL-R</a>) will not exit <code>CTRL-X</code> mode.  This is primarily to allow the use of
the '=' register to call some function to determine the next operation.  If
the contents of the register (or result of the '=' register evaluation) are
not valid <code>CTRL-X</code> mode keys, then <code>CTRL-X</code> mode will be exited as if those keys
had been typed.</div>
<div class="old-help-para">For example, the following will map <code>&lt;Tab&gt;</code> to either actually insert a <code>&lt;Tab&gt;</code> if
the current line is currently only whitespace, or start/continue a <code>CTRL-N</code>
completion operation:<pre>function! CleverTab()
   if strpart( getline('.'), 0, col('.')-1 ) =~ '^\s*$'
      return "\&lt;Tab&gt;"
   else
      return "\&lt;C-N&gt;"
   endif
endfunction
inoremap &lt;Tab&gt; &lt;C-R&gt;=CleverTab()&lt;CR&gt;</pre>
Completing whole lines					<a name="compl-whole-line"></a><code class="help-tag-right">compl-whole-line</code></div>
<div class="old-help-para">							<a name="i_CTRL-X_CTRL-L"></a><code class="help-tag-right">i_CTRL-X_CTRL-L</code>
CTRL-X <code>CTRL-L</code>		Search backwards for a line that starts with the
			same characters as those in the current line before
			the cursor.  Indent is ignored.  The matching line is
			inserted in front of the cursor.
			The <a href="/neovim-docs-web/en/options#'complete'">'complete'</a> option is used to decide which buffers
			are searched for a match.  Both loaded and unloaded
			buffers are used.
	<code>CTRL-L</code>	or
	<code>CTRL-P</code>		Search backwards for next matching line.  This line
			replaces the previous matching line.</div>
<div class="old-help-para">	<code>CTRL-N</code>		Search forward for next matching line.  This line
			replaces the previous matching line.</div>
<div class="old-help-para">	<code>CTRL-X</code> <code>CTRL-L</code>	After expanding a line you can additionally get the
			line next to it by typing <code>CTRL-X</code> <code>CTRL-L</code> again, unless
			a double <code>CTRL-X</code> is used.  Only works for loaded
			buffers.</div>
<div class="old-help-para">Completing keywords in current file			<a name="compl-current"></a><code class="help-tag-right">compl-current</code></div>
<div class="old-help-para">							<a name="i_CTRL-X_CTRL-P"></a><code class="help-tag-right">i_CTRL-X_CTRL-P</code>
							<a name="i_CTRL-X_CTRL-N"></a><code class="help-tag-right">i_CTRL-X_CTRL-N</code>
CTRL-X <code>CTRL-N</code>		Search forwards for words that start with the keyword
			in front of the cursor.  The found keyword is inserted
			in front of the cursor.</div>
<div class="old-help-para">CTRL-X <code>CTRL-P</code>		Search backwards for words that start with the keyword
			in front of the cursor.  The found keyword is inserted
			in front of the cursor.</div>
<div class="old-help-para">	<code>CTRL-N</code>		Search forward for next matching keyword.  This
			keyword replaces the previous matching keyword.</div>
<div class="old-help-para">	<code>CTRL-P</code>		Search backwards for next matching keyword.  This
			keyword replaces the previous matching keyword.</div>
<div class="old-help-para">	<code>CTRL-X</code> <code>CTRL-N</code> or
	<code>CTRL-X</code> <code>CTRL-P</code>	Further use of <code>CTRL-X</code> <code>CTRL-N</code> or <code>CTRL-X</code> <code>CTRL-P</code> will
			copy the words following the previous expansion in
			other contexts unless a double <code>CTRL-X</code> is used.</div>
<div class="old-help-para">If there is a keyword in front of the cursor (a name made out of alphabetic
characters and characters in <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a>), it is used as the search pattern,
with "\&lt;" prepended (meaning: start of a word).  Otherwise "\&lt;\k\k" is used
as search pattern (start of any keyword of at least two characters).</div>
<div class="old-help-para">In Replace mode, the number of characters that are replaced depends on the
length of the matched string.  This works like typing the characters of the
matched string in Replace mode.</div>
<div class="old-help-para">If there is not a valid keyword character before the cursor, any keyword of
at least two characters is matched.
	e.g., to get:
	    printf("(%g, %g, %g)", vector[0], vector[1], vector[2]);
	just type:
	    printf("(%g, %g, %g)", vector[0], ^P[1], ^P[2]);</div>
<div class="old-help-para">The search wraps around the end of the file, the value of <a href="/neovim-docs-web/en/options#'wrapscan'">'wrapscan'</a> is not
used here.</div>
<div class="old-help-para">Multiple repeats of the same completion are skipped; thus a different match
will be inserted at each <code>CTRL-N</code> and <code>CTRL-P</code> (unless there is only one
matching keyword).</div>
<div class="old-help-para">Single character matches are never included, as they usually just get in
the way of what you were really after.
	e.g., to get:
		printf("name = %s\n", name);
	just type:
		printf("name = %s\n", n^P);
	or even:
		printf("name = %s\n", ^P);
The 'n' in '\n' is skipped.</div>
<div class="old-help-para">After expanding a word, you can use <code>CTRL-X</code> <code>CTRL-P</code> or <code>CTRL-X</code> <code>CTRL-N</code> to get the
word following the expansion in other contexts.  These sequences search for
the text just expanded and further expand by getting an extra word.  This is
useful if you need to repeat a sequence of complicated words.  Although <code>CTRL-P</code>
and <code>CTRL-N</code> look just for strings of at least two characters, <code>CTRL-X</code> <code>CTRL-P</code> and
CTRL-X <code>CTRL-N</code> can be used to expand words of just one character.
	e.g., to get:
		M&amp;eacute;xico
	you can type:
		M^N^P^X^P^X^P
CTRL-N starts the expansion and then <code>CTRL-P</code> takes back the single character
"M", the next two <code>CTRL-X</code> <code>CTRL-P</code>'s get the words "&amp;eacute" and ";xico".</div>
<div class="old-help-para">If the previous expansion was split, because it got longer than <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>,
then just the text in the current line will be used.</div>
<div class="old-help-para">If the match found is at the end of a line, then the first word in the next
line will be inserted and the message "Word from other line" displayed, if
this word is accepted the next <code>CTRL-X</code> <code>CTRL-P</code> or <code>CTRL-X</code> <code>CTRL-N</code> will search
for those lines starting with this word.</div>
<div class="old-help-para">Completing keywords in <a href="/neovim-docs-web/en/options#'dictionary'">'dictionary'</a>			<a name="compl-dictionary"></a><code class="help-tag-right">compl-dictionary</code></div>
<div class="old-help-para">							<a name="i_CTRL-X_CTRL-K"></a><code class="help-tag-right">i_CTRL-X_CTRL-K</code>
CTRL-X <code>CTRL-K</code>		Search the files given with the <a href="/neovim-docs-web/en/options#'dictionary'">'dictionary'</a> option
			for words that start with the keyword in front of the
			cursor.  This is like <code>CTRL-N</code>, but only the dictionary
			files are searched, not the current file.  The found
			keyword is inserted in front of the cursor.  This
			could potentially be pretty slow, since all matches
			are found before the first match is used.  By default,
			the <a href="/neovim-docs-web/en/options#'dictionary'">'dictionary'</a> option is empty.
			For suggestions where to find a list of words, see the
			<a href="/neovim-docs-web/en/options#'dictionary'">'dictionary'</a> option.
			<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a>, <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> and <a href="/neovim-docs-web/en/options#'infercase'">'infercase'</a> apply.</div>
<div class="old-help-para">	<code>CTRL-K</code>	or
	<code>CTRL-N</code>		Search forward for next matching keyword.  This
			keyword replaces the previous matching keyword.</div>
<div class="old-help-para">	<code>CTRL-P</code>		Search backwards for next matching keyword.  This
			keyword replaces the previous matching keyword.</div>
<div class="old-help-para">Completing words in <a href="/neovim-docs-web/en/options#'thesaurus'">'thesaurus'</a>				<a name="compl-thesaurus"></a><code class="help-tag-right">compl-thesaurus</code></div>
<div class="old-help-para">							<a name="i_CTRL-X_CTRL-T"></a><code class="help-tag-right">i_CTRL-X_CTRL-T</code>
CTRL-X <code>CTRL-T</code>		Works as <code>CTRL-X</code> <code>CTRL-K</code>, but in a special way.  It uses
			the <a href="/neovim-docs-web/en/options#'thesaurus'">'thesaurus'</a> option instead of <a href="/neovim-docs-web/en/options#'dictionary'">'dictionary'</a>.  If a
			match is found in the thesaurus file, all the
			remaining words on the same line are included as
			matches, even though they don't complete the word.
			Thus a word can be completely replaced.</div>
<div class="old-help-para">	<code>CTRL-T</code>	or
	<code>CTRL-N</code>		Search forward for next matching keyword.  This
			keyword replaces the previous matching keyword.</div>
<div class="old-help-para">	<code>CTRL-P</code>		Search backwards for next matching keyword.  This
			keyword replaces the previous matching keyword.</div>
<div class="old-help-para">In the file used by the <a href="/neovim-docs-web/en/options#'thesaurus'">'thesaurus'</a> option each line in the file should
contain words with similar meaning, separated by non-keyword characters (white
space is preferred).  Maximum line length is 510 bytes.</div>
<div class="old-help-para">For an example, imagine the <a href="/neovim-docs-web/en/options#'thesaurus'">'thesaurus'</a> file has a line like this:<pre>angry furious mad enraged</pre>
Placing the cursor after the letters "ang" and typing <code>CTRL-X</code> <code>CTRL-T</code> would
complete the word "angry"; subsequent presses would change the word to
"furious", "mad" etc.</div>
<div class="old-help-para">Other uses include translation between two languages, or grouping API
functions by keyword.</div>
<div class="old-help-para">An English word list was added to this github issue:
<a href="https://github.com/vim/vim/issues/629#issuecomment-443293282">https://github.com/vim/vim/issues/629#issuecomment-443293282</a>
Unpack thesaurus_pkg.zip, put the thesaurus.txt file somewhere, e.g.
~/.vim/thesaurus/english.txt, and the <a href="/neovim-docs-web/en/options#'thesaurus'">'thesaurus'</a> option to this file name.</div>
<div class="old-help-para">Completing keywords with <a href="/neovim-docs-web/en/options#'thesaurusfunc'">'thesaurusfunc'</a>		<a name="compl-thesaurusfunc"></a><code class="help-tag-right">compl-thesaurusfunc</code></div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'thesaurusfunc'">'thesaurusfunc'</a> option is set, then the user specified function is
invoked to get the list of completion matches and the <a href="/neovim-docs-web/en/options#'thesaurus'">'thesaurus'</a> option is
not used. See <a href="/neovim-docs-web/en/insert#complete-functions">complete-functions</a> for an explanation of how the function is
invoked and what it should return.</div>
<div class="old-help-para">Here is an example that uses the "aiksaurus" command (provided by Magnus
Groß):<pre>func Thesaur(findstart, base)
    if a:findstart
        let line = getline('.')
        let start = col('.') - 1
        while start &gt; 0 &amp;&amp; line[start - 1] =~ '\a'
           let start -= 1
        endwhile
        return start
    else
        let res = []
        let h = ''
        for l in split(system('aiksaurus ' .. shellescape(a:base)), '\n')
            if l[:3] == '=== '
                    let h = substitute(l[4:], ' =*$', '', '')
            elseif l[0] =~ '\a'
                call extend(res, map(split(l, ', '), {_, val -&gt; {'word': val, 'menu': '('.h.')'}}))
            endif
        endfor
        return res
    endif
endfunc

set thesaurusfunc=Thesaur</pre>
Completing keywords in the current and included files	<a name="compl-keyword"></a><code class="help-tag">compl-keyword</code></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'include'">'include'</a> option is used to specify a line that contains an include file
name.  The <a href="/neovim-docs-web/en/options#'path'">'path'</a> option is used to search for include files.</div>
<div class="old-help-para">							<a name="i_CTRL-X_CTRL-I"></a><code class="help-tag-right">i_CTRL-X_CTRL-I</code>
CTRL-X <code>CTRL-I</code>		Search for the first keyword in the current and
			included files that starts with the same characters
			as those before the cursor.  The matched keyword is
			inserted in front of the cursor.</div>
<div class="old-help-para">	<code>CTRL-N</code>		Search forwards for next matching keyword.  This
			keyword replaces the previous matching keyword.
			Note: <code>CTRL-I</code> is the same as <code>&lt;Tab&gt;</code>, which is likely to
			be typed after a successful completion, therefore
			<code>CTRL-I</code> is not used for searching for the next match.</div>
<div class="old-help-para">	<code>CTRL-P</code>		Search backward for previous matching keyword.  This
			keyword replaces the previous matching keyword.</div>
<div class="old-help-para">	<code>CTRL-X</code> <code>CTRL-I</code>	Further use of <code>CTRL-X</code> <code>CTRL-I</code> will copy the words
			following the previous expansion in other contexts
			unless a double <code>CTRL-X</code> is used.</div>
<div class="old-help-para">Completing tags						<a name="compl-tag"></a><code class="help-tag-right">compl-tag</code>
							<a name="i_CTRL-X_CTRL-%5D"></a><code class="help-tag-right">i_CTRL-X_CTRL-]</code>
CTRL-X <code>CTRL-]</code>		Search for the first tag that starts with the same
			characters as before the cursor.  The matching tag is
			inserted in front of the cursor.  Alphabetic
			characters and characters in <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> are used
			to decide which characters are included in the tag
			name (same as for a keyword).  See also <a href="/neovim-docs-web/en/tagsrch#CTRL-%5D">CTRL-]</a>.
			The <a href="/neovim-docs-web/en/options#'showfulltag'">'showfulltag'</a> option can be used to add context
			from around the tag definition.
	<code>CTRL-]</code>	or
	<code>CTRL-N</code>		Search forwards for next matching tag.  This tag
			replaces the previous matching tag.</div>
<div class="old-help-para">	<code>CTRL-P</code>		Search backward for previous matching tag.  This tag
			replaces the previous matching tag.</div>
<div class="old-help-para">Completing file names					<a name="compl-filename"></a><code class="help-tag-right">compl-filename</code>
							<a name="i_CTRL-X_CTRL-F"></a><code class="help-tag-right">i_CTRL-X_CTRL-F</code>
CTRL-X <code>CTRL-F</code>		Search for the first file name that starts with the
			same characters as before the cursor.  The matching
			file name is inserted in front of the cursor.
			Alphabetic characters and characters in <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a>
			are used to decide which characters are included in
			the file name.  Note: the <a href="/neovim-docs-web/en/options#'path'">'path'</a> option is not used
			here (yet).
	<code>CTRL-F</code>	or
	<code>CTRL-N</code>		Search forwards for next matching file name.  This
			file name replaces the previous matching file name.</div>
<div class="old-help-para">	<code>CTRL-P</code>		Search backward for previous matching file name.
			This file name replaces the previous matching file
			name.</div>
<div class="old-help-para">Completing definitions or macros			<a name="compl-define"></a><code class="help-tag-right">compl-define</code></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'define'">'define'</a> option is used to specify a line that contains a definition.
The <a href="/neovim-docs-web/en/options#'include'">'include'</a> option is used to specify a line that contains an include file
name.  The <a href="/neovim-docs-web/en/options#'path'">'path'</a> option is used to search for include files.</div>
<div class="old-help-para">							<a name="i_CTRL-X_CTRL-D"></a><code class="help-tag-right">i_CTRL-X_CTRL-D</code>
CTRL-X <code>CTRL-D</code>		Search in the current and included files for the
			first definition (or macro) name that starts with
			the same characters as before the cursor.  The found
			definition name is inserted in front of the cursor.
	<code>CTRL-D</code>	or
	<code>CTRL-N</code>		Search forwards for next matching macro name.  This
			macro name replaces the previous matching macro
			name.</div>
<div class="old-help-para">	<code>CTRL-P</code>		Search backward for previous matching macro name.
			This macro name replaces the previous matching macro
			name.</div>
<div class="old-help-para">	<code>CTRL-X</code> <code>CTRL-D</code>	Further use of <code>CTRL-X</code> <code>CTRL-D</code> will copy the words
			following the previous expansion in other contexts
			unless a double <code>CTRL-X</code> is used.</div>
<div class="old-help-para">Completing Vim commands					<a name="compl-vim"></a><code class="help-tag-right">compl-vim</code></div>
<div class="old-help-para">Completion is context-sensitive.  It works like on the Command-line.  It
completes an Ex command as well as its arguments.  This is useful when writing
a Vim script.</div>
<div class="old-help-para">							<a name="i_CTRL-X_CTRL-V"></a><code class="help-tag-right">i_CTRL-X_CTRL-V</code>
CTRL-X <code>CTRL-V</code>		Guess what kind of item is in front of the cursor and
			find the first match for it.
			Note: When <code>CTRL-V</code> is mapped you can often use <code>CTRL-Q</code>
			instead of <a href="/neovim-docs-web/en/insert#i_CTRL-Q">i_CTRL-Q</a>.
	<code>CTRL-V</code>	or
	<code>CTRL-N</code>		Search forwards for next match.  This match replaces
			the previous one.</div>
<div class="old-help-para">	<code>CTRL-P</code>		Search backwards for previous match.  This match
			replaces the previous one.</div>
<div class="old-help-para">	<code>CTRL-X</code> <code>CTRL-V</code>	Further use of <code>CTRL-X</code> <code>CTRL-V</code> will do the same as
			<code>CTRL-V</code>.  This allows mapping a key to do Vim command
			completion, for example:<pre>:imap &lt;Tab&gt; &lt;C-X&gt;&lt;C-V&gt;</pre>
User defined completion					<a name="compl-function"></a><code class="help-tag-right">compl-function</code></div>
<div class="old-help-para">Completion is done by a function that can be defined by the user with the
<a href="/neovim-docs-web/en/options#'completefunc'">'completefunc'</a> option.  See below for how the function is called and an
example <a href="/neovim-docs-web/en/insert#complete-functions">complete-functions</a>.</div>
<div class="old-help-para">							<a name="i_CTRL-X_CTRL-U"></a><code class="help-tag-right">i_CTRL-X_CTRL-U</code>
CTRL-X <code>CTRL-U</code>		Guess what kind of item is in front of the cursor and
			find the first match for it.
	<code>CTRL-U</code>	or
	<code>CTRL-N</code>		Use the next match.  This match replaces the previous
			one.</div>
<div class="old-help-para">	<code>CTRL-P</code>		Use the previous match.  This match replaces the
			previous one.</div>
<div class="old-help-para">Omni completion						<a name="compl-omni"></a><code class="help-tag-right">compl-omni</code></div>
<div class="old-help-para">Completion is done by a function that can be defined by the user with the
<a href="/neovim-docs-web/en/options#'omnifunc'">'omnifunc'</a> option.  This is to be used for filetype-specific completion.</div>
<div class="old-help-para">See below for how the function is called and an example <a href="/neovim-docs-web/en/insert#complete-functions">complete-functions</a>.
For remarks about specific filetypes see <a href="/neovim-docs-web/en/insert#compl-omni-filetypes">compl-omni-filetypes</a>.
More completion scripts will appear, check www.vim.org.  Currently there is a
first version for C++.</div>
<div class="old-help-para">							<a name="i_CTRL-X_CTRL-O"></a><code class="help-tag-right">i_CTRL-X_CTRL-O</code>
CTRL-X <code>CTRL-O</code>		Guess what kind of item is in front of the cursor and
			find the first match for it.
	<code>CTRL-O</code>	or
	<code>CTRL-N</code>		Use the next match.  This match replaces the previous
			one.</div>
<div class="old-help-para">	<code>CTRL-P</code>		Use the previous match.  This match replaces the
			previous one.</div>
<div class="old-help-para">Spelling suggestions					<a name="compl-spelling"></a><code class="help-tag-right">compl-spelling</code></div>
<div class="old-help-para">A word before or at the cursor is located and correctly spelled words are
suggested to replace it.  If there is a badly spelled word in the line, before
or under the cursor, the cursor is moved to after it.  Otherwise the word just
before the cursor is used for suggestions, even though it isn't badly spelled.</div>
<div class="old-help-para">NOTE: <code>CTRL-S</code> suspends display in many Unix terminals.  Use 's' instead.  Type
CTRL-Q to resume displaying.</div>
<div class="old-help-para">						<a name="i_CTRL-X_CTRL-S"></a><code class="help-tag-right">i_CTRL-X_CTRL-S</code> <a name="i_CTRL-X_s"></a><code class="help-tag">i_CTRL-X_s</code>
CTRL-X <code>CTRL-S</code>   or
CTRL-X s		Locate the word in front of the cursor and find the
			first spell suggestion for it.
	<code>CTRL-S</code>	or
	<code>CTRL-N</code>		Use the next suggestion.  This replaces the previous
			one.  Note that you can't use 's' here.</div>
<div class="old-help-para">	<code>CTRL-P</code>		Use the previous suggestion.  This replaces the
			previous one.</div>
<div class="old-help-para">Completing keywords from different sources		<a name="compl-generic"></a><code class="help-tag-right">compl-generic</code></div>
<div class="old-help-para">							<a name="i_CTRL-N"></a><code class="help-tag-right">i_CTRL-N</code>
CTRL-N			Find next match for words that start with the
			keyword in front of the cursor, looking in places
			specified with the <a href="/neovim-docs-web/en/options#'complete'">'complete'</a> option.  The found
			keyword is inserted in front of the cursor.</div>
<div class="old-help-para">							<a name="i_CTRL-P"></a><code class="help-tag-right">i_CTRL-P</code>
CTRL-P			Find previous match for words that start with the
			keyword in front of the cursor, looking in places
			specified with the <a href="/neovim-docs-web/en/options#'complete'">'complete'</a> option.  The found
			keyword is inserted in front of the cursor.</div>
<div class="old-help-para">	<code>CTRL-N</code>		Search forward for next matching keyword.  This
			keyword replaces the previous matching keyword.</div>
<div class="old-help-para">	<code>CTRL-P</code>		Search backwards for next matching keyword.  This
			keyword replaces the previous matching keyword.</div>
<div class="old-help-para">	<code>CTRL-X</code> <code>CTRL-N</code> or
	<code>CTRL-X</code> <code>CTRL-P</code>	Further use of <code>CTRL-X</code> <code>CTRL-N</code> or <code>CTRL-X</code> <code>CTRL-P</code> will
			copy the words following the previous expansion in
			other contexts unless a double <code>CTRL-X</code> is used.</div>
<div class="old-help-para">Stop completion						<a name="compl-stop"></a><code class="help-tag-right">compl-stop</code></div>
<div class="old-help-para">							<a name="i_CTRL-X_CTRL-Z"></a><code class="help-tag-right">i_CTRL-X_CTRL-Z</code>
CTRL-X <code>CTRL-Z</code>		Stop completion without changing the text.</div>
<div class="old-help-para"><h3 class="help-heading">FUNCTIONS FOR FINDING COMPLETIONS<span class="help-heading-tags">			<a name="complete-functions"></a><span class="help-tag">complete-functions</span></span></h3></div>
<div class="old-help-para">This applies to <a href="/neovim-docs-web/en/options#'completefunc'">'completefunc'</a>, <a href="/neovim-docs-web/en/options#'thesaurusfunc'">'thesaurusfunc'</a> and <a href="/neovim-docs-web/en/options#'omnifunc'">'omnifunc'</a>.</div>
<div class="old-help-para">The function is called in two different ways:
<div class="help-li" style=""> First the function is called to find the start of the text to be completed.
</div><div class="help-li" style=""> Later the function is called to actually find the matches.
</div></div>
<div class="old-help-para">On the first invocation the arguments are:
   a:findstart  1
   a:base	empty</div>
<div class="old-help-para">The function must return the column where the completion starts.  It must be a
number between zero and the cursor column "col('.')".  This involves looking
at the characters just before the cursor and including those characters that
could be part of the completed item.  The text between this column and the
cursor column will be replaced with the matches.  If the returned value is
larger than the cursor column, the cursor column is used.</div>
<div class="old-help-para">Negative return values:
   -2 	To cancel silently and stay in completion mode.
   -3 	To cancel silently and leave completion mode.
   Another negative value: completion starts at the cursor column</div>
<div class="old-help-para">On the second invocation the arguments are:
   a:findstart  0
   a:base	the text with which matches should match; the text that was
		located in the first call (can be empty)</div>
<div class="old-help-para">The function must return a List with the matching words.  These matches
usually include the "a:base" text.  When there are no matches return an empty
List.  Note that the cursor may have moved since the first invocation, the
text may have been changed.</div>
<div class="old-help-para">In order to return more information than the matching words, return a Dict
that contains the List.  The Dict can have these items:
	words		The List of matching words (mandatory).
	refresh		A string to control re-invocation of the function
			(optional).
			The only value currently recognized is "always", the
			effect is that the function is called whenever the
			leading text is changed.
Other items are ignored.</div>
<div class="old-help-para">For acting upon end of completion, see the <a href="/neovim-docs-web/en/autocmd#CompleteDonePre">CompleteDonePre</a> and
<a href="/neovim-docs-web/en/autocmd#CompleteDone">CompleteDone</a> autocommand event.</div>
<div class="old-help-para">For example, the function can contain this:<pre>let matches = ... list of words ...
return {'words': matches, 'refresh': 'always'}</pre></div>
<div class="old-help-para">						<a name="complete-items"></a><code class="help-tag-right">complete-items</code>
Each list item can either be a string or a Dictionary.  When it is a string it
is used as the completion.  When it is a Dictionary it can contain these
items:
	word		the text that will be inserted, mandatory
	abbr		abbreviation of "word"; when not empty it is used in
			the menu instead of "word"
	menu		extra text for the popup menu, displayed after "word"
			or "abbr"
	info		more information about the item, can be displayed in a
			preview window
	kind		single letter indicating the type of completion
	icase		when non-zero case is to be ignored when comparing
			items to be equal; when omitted zero is used, thus
			items that only differ in case are added
	equal		when non-zero, always treat this item to be equal when
			comparing. Which means, "equal=1" disables filtering
			of this item.
	dup		when non-zero this match will be added even when an
			item with the same word is already present.
	empty		when non-zero this match will be added even when it is
			an empty string
	user_data 	custom data which is associated with the item and
			available in <a href="/neovim-docs-web/en/eval#v%3Acompleted_item">v:completed_item</a>; it can be any type;
			defaults to an empty string</div>
<div class="old-help-para">All of these except "icase", "equal", "dup" and "empty" must be a string.  If
an item does not meet these requirements then an error message is given and
further items in the list are not used.  You can mix string and Dictionary
items in the returned list.</div>
<div class="old-help-para">The "menu" item is used in the popup menu and may be truncated, thus it should
be relatively short.  The "info" item can be longer, it will  be displayed in
the preview window when "preview" appears in <a href="/neovim-docs-web/en/options#'completeopt'">'completeopt'</a>.  The "info" item
will also remain displayed after the popup menu has been removed.  This is
useful for function arguments.  Use a single space for "info" to remove
existing text in the preview window.  The size of the preview window is three
lines, but <a href="/neovim-docs-web/en/options#'previewheight'">'previewheight'</a> is used when it has a value of 1 or 2.</div>
<div class="old-help-para">The "kind" item uses a single letter to indicate the kind of completion.  This
may be used to show the completion differently (different color or icon).
Currently these types can be used:
	v	variable
	f	function or method
	m	member of a struct or class
	t	typedef
	d	#define or macro</div>
<div class="old-help-para">When searching for matches takes some time call <a href="/neovim-docs-web/en/builtin#complete_add()">complete_add()</a> to add each
match to the total list.  These matches should then not appear in the returned
list!  Call <a href="/neovim-docs-web/en/builtin#complete_check()">complete_check()</a> now and then to allow the user to press a key
while still searching for matches.  Stop searching when it returns non-zero.</div>
<div class="old-help-para">							<a name="E840"></a><code class="help-tag-right">E840</code>
The function is allowed to move the cursor, it is restored afterwards.
The function is not allowed to move to another window or delete text.</div>
<div class="old-help-para">An example that completes the names of the months:<pre>fun! CompleteMonths(findstart, base)
  if a:findstart
    " locate the start of the word
    let line = getline('.')
    let start = col('.') - 1
    while start &gt; 0 &amp;&amp; line[start - 1] =~ '\a'
      let start -= 1
    endwhile
    return start
  else
    " find months matching with "a:base"
    let res = []
    for m in split("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec")
      if m =~ '^' .. a:base
        call add(res, m)
      endif
    endfor
    return res
  endif
endfun
set completefunc=CompleteMonths</pre></div>
<div class="old-help-para">The same, but now pretending searching for matches is slow:<pre>fun! CompleteMonths(findstart, base)
  if a:findstart
    " locate the start of the word
    let line = getline('.')
    let start = col('.') - 1
    while start &gt; 0 &amp;&amp; line[start - 1] =~ '\a'
      let start -= 1
    endwhile
    return start
  else
    " find months matching with "a:base"
    for m in split("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec")
      if m =~ '^' .. a:base
        call complete_add(m)
      endif
      sleep 300m        " simulate searching for next match
      if complete_check()
        break
      endif
    endfor
    return []
  endif
endfun
set completefunc=CompleteMonths</pre></div>
<div class="old-help-para"><h3 class="help-heading">INSERT COMPLETION POPUP MENU<span class="help-heading-tags">				<a name="ins-completion-menu"></a><span class="help-tag">ins-completion-menu</span></span></h3>							<a name="popupmenu-completion"></a><code class="help-tag-right">popupmenu-completion</code>
Vim can display the matches in a simplistic popup menu.</div>
<div class="old-help-para">The menu is used when:
<div class="help-li" style=""> The <a href="/neovim-docs-web/en/options#'completeopt'">'completeopt'</a> option contains "menu" or "menuone".
</div><div class="help-li" style=""> The terminal supports at least 8 colors.
</div><div class="help-li" style=""> There are at least two matches.  One if "menuone" is used.
</div></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'pumheight'">'pumheight'</a> option can be used to set a maximum height.  The default is to
use all space available.
The <a href="/neovim-docs-web/en/options#'pumwidth'">'pumwidth'</a> option can be used to set a minimum width.  The default is 15
characters.</div>
<div class="old-help-para">There are three states:
1. A complete match has been inserted, e.g., after using <code>CTRL-N</code> or <code>CTRL-P</code>.
2. A cursor key has been used to select another match.  The match was not
   inserted then, only the entry in the popup menu is highlighted.
3. Only part of a match has been inserted and characters were typed or the
   backspace key was used.  The list of matches was then adjusted for what is
   in front of the cursor.</div>
<div class="old-help-para">You normally start in the first state, with the first match being inserted.
When "longest" is in <a href="/neovim-docs-web/en/options#'completeopt'">'completeopt'</a> and there is more than one match you start
in the third state.</div>
<div class="old-help-para">If you select another match, e.g., with <code>CTRL-N</code> or <code>CTRL-P</code>, you go to the first
state.  This doesn't change the list of matches.</div>
<div class="old-help-para">When you are back at the original text then you are in the third state.  To
get there right away you can use a mapping that uses <code>CTRL-P</code> right after
starting the completion:<pre>:imap &lt;F7&gt; &lt;C-N&gt;&lt;C-P&gt;</pre></div>
<div class="old-help-para">						<a name="popupmenu-keys"></a><code class="help-tag-right">popupmenu-keys</code>
In the first state these keys have a special meaning:
<code>&lt;BS&gt;</code> and <code>CTRL-H</code>   Delete one character, find the matches for the word before
		  the cursor.  This reduces the list of matches, often to one
		  entry, and switches to the second state.
Any non-special character:
		  Stop completion without changing the match and insert the
		  typed character.</div>
<div class="old-help-para">In the second and third state these keys have a special meaning:
<code>&lt;BS&gt;</code> and <code>CTRL-H</code>   Delete one character, find the matches for the shorter word
		  before the cursor.  This may find more matches.
CTRL-L		  Add one character from the current match, may reduce the
		  number of matches.
any printable, non-white character:
		  Add this character and reduce the number of matches.</div>
<div class="old-help-para">In all three states these can be used:
CTRL-Y		  Yes: Accept the currently selected match and stop completion.
CTRL-E		  End completion, go back to what was there before selecting a
		  match (what was typed or longest common string).
<code>&lt;PageUp&gt;</code>	  Select a match several entries back, but don't insert it.
<code>&lt;PageDown&gt;</code>	  Select a match several entries further, but don't insert it.
<code>&lt;Up&gt;</code>		  Select the previous match, as if <code>CTRL-P</code> was used, but don't
		  insert it.
<code>&lt;Down&gt;</code>		  Select the next match, as if <code>CTRL-N</code> was used, but don't
		  insert it.
<code>&lt;Space&gt;</code> or <code>&lt;Tab&gt;</code>  Stop completion without changing the match and insert the
		  typed character.</div>
<div class="old-help-para">The behavior of the <code>&lt;Enter&gt;</code> key depends on the state you are in:
first state:	  Use the text as it is and insert a line break.
second state:	  Insert the currently selected match.
third state:	  Use the text as it is and insert a line break.</div>
<div class="old-help-para">In other words: If you used the cursor keys to select another entry in the
list of matches then the <code>&lt;Enter&gt;</code> key inserts that match.  If you typed
something else then <code>&lt;Enter&gt;</code> inserts a line break.</div>
<div class="old-help-para">The colors of the menu can be changed with these highlight groups:
Pmenu		normal item  <a href="/neovim-docs-web/en/syntax#hl-Pmenu">hl-Pmenu</a>
PmenuSel	selected item  <a href="/neovim-docs-web/en/syntax#hl-PmenuSel">hl-PmenuSel</a>
PmenuSbar	scrollbar  <a href="/neovim-docs-web/en/syntax#hl-PmenuSbar">hl-PmenuSbar</a>
PmenuThumb	thumb of the scrollbar  <a href="/neovim-docs-web/en/syntax#hl-PmenuThumb">hl-PmenuThumb</a></div>
<div class="old-help-para">There are no special mappings for when the popup menu is visible.  However,
you can use an Insert mode mapping that checks the <a href="/neovim-docs-web/en/builtin#pumvisible()">pumvisible()</a> function to
do something different.  Example:<pre>:inoremap &lt;Down&gt; &lt;C-R&gt;=pumvisible() ? "\&lt;lt&gt;C-N&gt;" : "\&lt;lt&gt;Down&gt;"&lt;CR&gt;</pre>
You can use of <code>&lt;expr&gt;</code> in mapping to have the popup menu used when typing a
character and some condition is met.  For example, for typing a dot:<pre>inoremap &lt;expr&gt; . MayComplete()
func MayComplete()
    if (can complete)
      return ".\&lt;C-X&gt;\&lt;C-O&gt;"
    endif
    return '.'
endfunc</pre>
See <a href="/neovim-docs-web/en/map#%3Amap-%3Cexpr%3E">:map-&lt;expr&gt;</a> for more info.</div>
<div class="old-help-para"><h3 class="help-heading">FILETYPE-SPECIFIC REMARKS FOR OMNI COMPLETION<span class="help-heading-tags">	    <a name="compl-omni-filetypes"></a><span class="help-tag">compl-omni-filetypes</span></span></h3></div>
<div class="old-help-para">The file used for <code>{filetype}</code> should be autoload/{filetype}complete.vim
in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  Thus for "java" it is autoload/javacomplete.vim.</div>
<div class="old-help-para">C							<a name="ft-c-omni"></a><code class="help-tag-right">ft-c-omni</code></div>
<div class="old-help-para">Completion of C code requires a tags file.  You should use Universal/
Exuberant ctags, because it adds extra information that is needed for
completion.  You can find it here:
	Universal Ctags: <a href="https://ctags.io">https://ctags.io</a></div>
<div class="old-help-para">Universal Ctags is preferred, Exuberant Ctags is no longer maintained.</div>
<div class="old-help-para">If you want to complete system functions you can do something like this.  Use
ctags to generate a tags file for all the system header files:<pre>% ctags -R -f ~/.config/nvim/systags /usr/include /usr/local/include</pre>
In your vimrc file add this tags file to the <a href="/neovim-docs-web/en/options#'tags'">'tags'</a> option:<pre>set tags+=~/.config/nvim/systags</pre>
When using <code>CTRL-X</code> <code>CTRL-O</code> after a name without any "." or "-&gt;" it is completed
from the tags file directly.  This works for any identifier, also function
names.  If you want to complete a local variable name, which does not appear
in the tags file, use <code>CTRL-P</code> instead.</div>
<div class="old-help-para">When using <code>CTRL-X</code> <code>CTRL-O</code> after something that has "." or "-&gt;" Vim will attempt
to recognize the type of the variable and figure out what members it has.
This means only members valid for the variable will be listed.</div>
<div class="old-help-para">When a member name already was complete, <code>CTRL-X</code> <code>CTRL-O</code> will add a "." or
"-&gt;" for composite types.</div>
<div class="old-help-para">Vim doesn't include a C compiler, only the most obviously formatted
declarations are recognized.  Preprocessor stuff may cause confusion.
When the same structure name appears in multiple places all possible members
are included.</div>
<div class="old-help-para"><h3 class="help-heading">CSS<span class="help-heading-tags">							<a name="ft-css-omni"></a><span class="help-tag">ft-css-omni</span></span></h3></div>
<div class="old-help-para">Complete properties and their appropriate values according to CSS 2.1
specification.</div>
<div class="old-help-para"><h3 class="help-heading">HTML<span class="help-heading-tags">							<a name="ft-html-omni"></a><span class="help-tag">ft-html-omni</span></span></h3><h3 class="help-heading">XHTML<span class="help-heading-tags">							<a name="ft-xhtml-omni"></a><span class="help-tag">ft-xhtml-omni</span></span></h3></div>
<div class="old-help-para">CTRL-X <code>CTRL-O</code> provides completion of various elements of (X)HTML files.  It is
designed to support writing of XHTML 1.0 Strict files but will also work for
other versions of HTML. Features:</div>
<div class="old-help-para"><div class="help-li" style=""> after "&lt;" complete tag name depending on context (no div suggestion inside
  of an a tag); '/&gt;' indicates empty tags
</div><div class="help-li" style=""> inside of tag complete proper attributes (no width attribute for an a tag);
  show also type of attribute; '' indicates required attributes
</div><div class="help-li" style=""> when attribute has limited number of possible values help to complete them
</div><div class="help-li" style=""> complete names of entities
</div><div class="help-li" style=""> complete values of "class" and "id" attributes with data obtained from
  <code>&lt;style&gt;</code> tag and included CSS files
</div><div class="help-li" style=""> when completing value of "style" attribute or working inside of "style" tag
  switch to <a href="/neovim-docs-web/en/insert#ft-css-omni">ft-css-omni</a> completion
</div><div class="help-li" style=""> when completing values of events attributes or working inside of "script"
  tag switch to <a href="/neovim-docs-web/en/insert#ft-javascript-omni">ft-javascript-omni</a> completion
</div><div class="help-li" style=""> when used after "&lt;/" <code>CTRL-X</code> <code>CTRL-O</code> will close the last opened tag
</div></div>
<div class="old-help-para">Note: When used first time completion menu will be shown with little delay
<div class="help-li" style=""> this is time needed for loading of data file.
Note: Completion may fail in badly formatted documents. In such case try to
run <a href="/neovim-docs-web/en/quickfix#%3Amake">:make</a> command to detect formatting problems.
</div></div>
<div class="old-help-para">HTML flavor						<a name="html-flavor"></a><code class="help-tag-right">html-flavor</code></div>
<div class="old-help-para">The default HTML completion depends on the filetype.  For HTML files it is
HTML 4.01 Transitional (<a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> is "html"), for XHTML it is XHTML 1.0
Strict (<a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> is "xhtml").</div>
<div class="old-help-para">When doing completion outside of any other tag you will have possibility to
choose DOCTYPE and the appropriate data file will be loaded and used for all
next completions.</div>
<div class="old-help-para">More about format of data file in <a href="/neovim-docs-web/en/insert#xml-omni-datafile">xml-omni-datafile</a>. Some of the data files
may be found on the Vim website (<a href="/neovim-docs-web/en/intro#www">www</a>).</div>
<div class="old-help-para">Note that b:html_omni_flavor may point to a file with any XML data.  This
makes possible to mix PHP (<a href="/neovim-docs-web/en/insert#ft-php-omni">ft-php-omni</a>) completion with any XML dialect
(assuming you have data file for it).  Without setting that variable XHTML 1.0
Strict will be used.</div>
<div class="old-help-para"><h3 class="help-heading">JAVASCRIPT<span class="help-heading-tags">					       <a name="ft-javascript-omni"></a><span class="help-tag">ft-javascript-omni</span></span></h3></div>
<div class="old-help-para">Completion of most elements of JavaScript language and DOM elements.</div>
<div class="old-help-para">Complete:</div>
<div class="old-help-para"><div class="help-li" style=""> variables
</div><div class="help-li" style=""> function name; show function arguments
</div><div class="help-li" style=""> function arguments
</div><div class="help-li" style=""> properties of variables trying to detect type of variable
</div><div class="help-li" style=""> complete DOM objects and properties depending on context
</div><div class="help-li" style=""> keywords of language
</div></div>
<div class="old-help-para">Completion works in separate JavaScript files (&amp;ft==javascript), inside of
<code>&lt;script&gt;</code> tag of (X)HTML and in values of event attributes (including scanning
of external files).</div>
<div class="old-help-para">DOM compatibility</div>
<div class="old-help-para">At the moment (beginning of 2006) there are two main browsers - MS Internet
Explorer and Mozilla Firefox. These two applications are covering over 90% of
market. Theoretically standards are created by W3C organisation
(<a href="https://www.w3.org/">https://www.w3.org/</a>) but they are not always followed/implemented.</div>
<div class="old-help-para"><div class="help-column_heading">		IE	FF	W3C  Omni completion</div><div class="help-column_heading">		+/-	+/-	+    +</div><a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+insert.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/insert.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%09IE%09FF%09W3C%20%20Omni%20completion%20~%0A%09%09%2B%2F-%09%2B%2F-%09%2B%20%20%20%20%2B%09%09%20%20%20%20%20~%0A%09%09%2B%09%2B%09-%20%20%20%20%2B%09%09%20%20%20%20%20~%0A%09%09%2B%09-%09-%20%20%20%20-%09%09%20%20%20%20%20~%0A%09%09-%09%2B%09-%20%20%20%20-%09%09%20%20%20%20%20~%0A%0D%60%60%60">+	+	-    +</a>		     ~
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+insert.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/insert.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09IE%09FF%09W3C%20%20Omni%20completion%20~%0A%09%09%2B%2F-%09%2B%2F-%09%2B%20%20%20%20%2B%09%09%20%20%20%20%20~%0A%09%09%2B%09%2B%09-%20%20%20%20%2B%09%09%20%20%20%20%20~%0A%09%09%2B%09-%09-%20%20%20%20-%09%09%20%20%20%20%20~%0A%09%09-%09%2B%09-%20%20%20%20-%09%09%20%20%20%20%20~%0A%0ARegardless%20from%20state%20of%20implementation%20in%20browsers%20but%20if%20element%20is%20defined%0D%60%60%60">+</a><div class="help-column_heading">	-		-    -	</div><div class="help-column_heading">		-		+	-    -	</div></div>
<div class="old-help-para">Regardless from state of implementation in browsers but if element is defined
in standards, completion plugin will place element in suggestion list. When
both major engines implemented element, even if this is not in standards it
will be suggested. All other elements are not placed in suggestion list.</div>
<div class="old-help-para"><h3 class="help-heading">PHP<span class="help-heading-tags">							<a name="ft-php-omni"></a><span class="help-tag">ft-php-omni</span></span></h3></div>
<div class="old-help-para">Completion of PHP code requires a tags file for completion of data from
external files and for class aware completion. You should use Universal/
Exuberant ctags version 5.5.4 or newer. You can find it here:</div>
<div class="old-help-para">	Universal Ctags: <a href="https://ctags.io">https://ctags.io</a></div>
<div class="old-help-para">Script completes:</div>
<div class="old-help-para"><div class="help-li" style=""> after $ variables name
</div><div class="help-li" style="margin-left: 3rem;"> if variable was declared as object add "-&gt;", if tags file is available show
    name of class
</div><div class="help-li" style="margin-left: 3rem;"> after "-&gt;" complete only function and variable names specific for given
    class. To find class location and contents tags file is required. Because
    PHP isn't strongly typed language user can use @var tag to declare class:<pre>/* @var $myVar myClass */
$myVar-&gt;</pre>
</div></div>
<div class="old-help-para">    Still, to find myClass contents tags file is required.</div>
<div class="old-help-para"><div class="help-li" style=""> function names with additional info:
</div><div class="help-li" style="margin-left: 3rem;"> in case of built-in functions list of possible arguments and after | type
    data returned by function
</div><div class="help-li" style="margin-left: 3rem;"> in case of user function arguments and name of file where function was
    defined (if it is not current file)
</div></div>
<div class="old-help-para"><div class="help-li" style=""> constants names
</div><div class="help-li" style=""> class names after "new" declaration
</div></div>
<div class="old-help-para">Note: when doing completion first time Vim will load all necessary data into
memory. It may take several seconds. After next use of completion delay
should not be noticeable.</div>
<div class="old-help-para">Script detects if cursor is inside &lt;?php ?&gt; tags. If it is outside it will
automatically switch to HTML/CSS/JavaScript completion. Note: contrary to
original HTML files completion of tags (and only tags) isn't context aware.</div>
<div class="old-help-para"><h3 class="help-heading">RUBY<span class="help-heading-tags">						 <a name="ft-ruby-omni"></a><span class="help-tag">ft-ruby-omni</span></span></h3></div>
<div class="old-help-para">NOTE: <a href="/neovim-docs-web/en/insert#compl-omni">compl-omni</a> for Ruby code requires <a href="/neovim-docs-web/en/provider#provider-ruby">provider-ruby</a> to be installed.</div>
<div class="old-help-para">Ruby completion will parse your buffer on demand in order to provide a list of
completions.  These completions will be drawn from modules loaded by "require"
and modules defined in the current buffer.</div>
<div class="old-help-para">The completions provided by <code>CTRL-X</code> <code>CTRL-O</code> are sensitive to the context:</div>
<div class="old-help-para"><div class="help-column_heading">	  CONTEXT			   COMPLETIONS PROVIDED</div></div>
<div class="old-help-para"> 1. Not inside a class definition    Classes, constants and globals</div>
<div class="old-help-para"> 2. Inside a class definition	     Methods or constants defined in the class</div>
<div class="old-help-para"> 3. After '.', '::' or ':'	     Methods applicable to the object being
				       dereferenced</div>
<div class="old-help-para"> 4. After ':' or ':foo'		     Symbol name (beginning with "foo")</div>
<div class="old-help-para">Notes:
<div class="help-li" style=""> Vim will load/evaluate code in order to provide completions.  This may
   cause some code execution, which may be a concern. This is no longer
   enabled by default, to enable this feature add<pre>let g:rubycomplete_buffer_loading = 1</pre>
&lt;- In context 1 above, Vim can parse the entire buffer to add a list of
   classes to the completion results. This feature is turned off by default,
   to enable it add<pre>let g:rubycomplete_classes_in_global = 1</pre>
</div></div>
<div class="old-help-para">  to your vimrc
<div class="help-li" style=""> In context 2 above, anonymous classes are not supported.
</div><div class="help-li" style=""> In context 3 above, Vim will attempt to determine the methods supported by
   the object.
</div><div class="help-li" style=""> Vim can detect and load the Rails environment for files within a rails
   project. The feature is disabled by default, to enable it add<pre>let g:rubycomplete_rails = 1</pre>
</div></div>
<div class="old-help-para">  to your vimrc</div>
<div class="old-help-para"><h3 class="help-heading">SYNTAX<span class="help-heading-tags">							<a name="ft-syntax-omni"></a><span class="help-tag">ft-syntax-omni</span></span></h3></div>
<div class="old-help-para">Vim has the ability to color syntax highlight nearly 500 languages.  Part of
this highlighting includes knowing what keywords are part of a language.  Many
filetypes already have custom completion scripts written for them, the
syntaxcomplete plugin provides basic completion for all other filetypes.  It
does this by populating the omni completion list with the text Vim already
knows how to color highlight.  It can be used for any filetype and provides a
minimal language-sensitive completion.</div>
<div class="old-help-para">To enable syntax code completion you can run:<pre>setlocal omnifunc=syntaxcomplete#Complete</pre>
You can automate this by placing the following in your <a href="/neovim-docs-web/en/starting#init.vim">init.vim</a> (after any
":filetype" command):<pre>if has("autocmd") &amp;&amp; exists("+omnifunc")
    autocmd Filetype *
                \        if &amp;omnifunc == "" |
                \                setlocal omnifunc=syntaxcomplete#Complete |
                \        endif
endif</pre>
The above will set completion to this script only if a specific plugin does
not already exist for that filetype.</div>
<div class="old-help-para">Each filetype can have a wide range of syntax items.  The plugin allows you to
customize which syntax groups to include or exclude from the list.  Let's have
a look at the PHP filetype to see how this works.</div>
<div class="old-help-para">If you edit a file called, index.php, run the following command:<pre>syntax list</pre>
The first thing you will notice is that there are many different syntax groups.
The PHP language can include elements from different languages like HTML,
JavaScript and many more.  The syntax plugin will only include syntax groups
that begin with the filetype, "php", in this case.  For example these syntax
groups are included by default with the PHP: phpEnvVar, phpIntVar,
phpFunctions.</div>
<div class="old-help-para">If you wish non-filetype syntax items to also be included, you can use a
regular expression syntax (added in version 13.0 of
autoload/syntaxcomplete.vim) to add items.  Looking at the output from
":syntax list" while editing a PHP file I can see some of these entries:<pre>htmlArg,htmlTag,htmlTagName,javaScriptStatement,javaScriptGlobalObjects</pre>
To pick up any JavaScript and HTML keyword syntax groups while editing a PHP
file, you can use 3 different regexs, one for each language.  Or you can
simply restrict the include groups to a particular value, without using
a regex string:<pre>let g:omni_syntax_group_include_php = 'php\w\+,javaScript\w\+,html\w\+'
let g:omni_syntax_group_include_php = 'phpFunctions,phpMethods'</pre></div>
<div class="old-help-para">The basic form of this variable is:<pre>let g:omni_syntax_group_include_{filetype} = 'regex,comma,separated'</pre>
The PHP language has an enormous number of items which it knows how to syntax
highlight.  These items will be available within the omni completion list.</div>
<div class="old-help-para">Some people may find this list unwieldy or are only interested in certain
items.  There are two ways to prune this list (if necessary).  If you find
certain syntax groups you do not wish displayed you can use two different
methods to identify these groups.  The first specifically lists the syntax
groups by name.  The second uses a regular expression to identify both
syntax groups.  Simply add one the following to your vimrc:<pre>let g:omni_syntax_group_exclude_php = 'phpCoreConstant,phpConstant'
let g:omni_syntax_group_exclude_php = 'php\w*Constant'</pre>
Add as many syntax groups to this list by comma separating them.  The basic
form of this variable is:<pre>let g:omni_syntax_group_exclude_{filetype} = 'regex,comma,separated'</pre>
You can create as many of these variables as you need, varying only the
filetype at the end of the variable name.</div>
<div class="old-help-para">The plugin uses the isKeyword option to determine where word boundaries are
for the syntax items.  For example, in the Scheme language completion should
include the "-", call-with-output-file.  Depending on your filetype, this may
not provide the words you are expecting.  Setting the
g:omni_syntax_use_iskeyword option to 0 will force the syntax plugin to break
on word characters.   This can be controlled adding the following to your
vimrc:<pre>let g:omni_syntax_use_iskeyword = 0</pre>
For plugin developers, the plugin exposes a public function OmniSyntaxList.
This function can be used to request a List of syntax items.  When editing a
SQL file (:e syntax.sql) you can use the ":syntax list" command to see the
various groups and syntax items.  For example:<pre>syntax list</pre>
Yields data similar to this:
<div class="help-column_heading">    sqlOperator    xxx some prior all like and any escape exists in is not</div><div class="help-column_heading">                       or intersect minus between distinct</div><div class="help-column_heading">                       links to Operator</div><div class="help-column_heading">    sqlType        xxx varbit varchar nvarchar bigint int uniqueidentifier</div><div class="help-column_heading">                       date money long tinyint unsigned xml text smalldate</div><div class="help-column_heading">                       double datetime nchar smallint numeric time bit char</div><div class="help-column_heading">                       varbinary binary smallmoney</div><div class="help-column_heading">                       image float integer timestamp real decimal</div></div>
<div class="old-help-para">There are two syntax groups listed here: sqlOperator and sqlType.  To retrieve
a List of syntax items you can call OmniSyntaxList a number of different
ways.  To retrieve all syntax items regardless of syntax group:<pre>echo OmniSyntaxList( [] )</pre>
To retrieve only the syntax items for the sqlOperator syntax group:<pre>echo OmniSyntaxList( ['sqlOperator'] )</pre>
To retrieve all syntax items for both the sqlOperator and sqlType groups:<pre>echo OmniSyntaxList( ['sqlOperator', 'sqlType'] )</pre>
A regular expression can also be used:<pre>echo OmniSyntaxList( ['sql\w\+'] )</pre>
From within a plugin, you would typically assign the output to a List:<pre>let myKeywords = []
let myKeywords = OmniSyntaxList( ['sqlKeyword'] )</pre>
<h3 class="help-heading">SQL<span class="help-heading-tags">							<a name="ft-sql-omni"></a><span class="help-tag">ft-sql-omni</span></span></h3></div>
<div class="old-help-para">Completion for the SQL language includes statements, functions, keywords.
It will also dynamically complete tables, procedures, views and column lists
with data pulled directly from within a database.  For detailed instructions
and a tutorial see <a href="/neovim-docs-web/en/ft_sql#omni-sql-completion">omni-sql-completion</a>.</div>
<div class="old-help-para">The SQL completion plugin can be used in conjunction with other completion
plugins.  For example, the PHP filetype has its own completion plugin.
Since PHP is often used to generate dynamic website by accessing a database,
the SQL completion plugin can also be enabled.  This allows you to complete
PHP code and SQL code at the same time.</div>
<div class="old-help-para"><h3 class="help-heading">XML<span class="help-heading-tags">							<a name="ft-xml-omni"></a><span class="help-tag">ft-xml-omni</span></span></h3></div>
<div class="old-help-para">Vim 7 provides a mechanism for context aware completion of XML files.  It
depends on a special <a href="/neovim-docs-web/en/insert#xml-omni-datafile">xml-omni-datafile</a> and two commands: <a href="/neovim-docs-web/en/insert#%3AXMLns">:XMLns</a> and
<a href="/neovim-docs-web/en/insert#%3AXMLent">:XMLent</a>.  Features are:</div>
<div class="old-help-para"><div class="help-li" style=""> after "&lt;" complete the tag name, depending on context
</div><div class="help-li" style=""> inside of a tag complete proper attributes
</div><div class="help-li" style=""> when an attribute has a limited number of possible values help to complete
  them
</div><div class="help-li" style=""> complete names of entities (defined in <a href="/neovim-docs-web/en/insert#xml-omni-datafile">xml-omni-datafile</a> and in the
  current file with "&lt;!ENTITY" declarations)
</div><div class="help-li" style=""> when used after "&lt;/" <code>CTRL-X</code> <code>CTRL-O</code> will close the last opened tag
</div></div>
<div class="old-help-para">Format of XML data file					<a name="xml-omni-datafile"></a><code class="help-tag-right">xml-omni-datafile</code></div>
<div class="old-help-para">XML data files are stored in the "autoload/xml" directory in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.
Vim distribution provides examples of data files in the
"$VIMRUNTIME/autoload/xml" directory.  They have a meaningful name which will
be used in commands.  It should be a unique name which will not create
conflicts.  For example, the name xhtml10s.vim means it is the data file for
XHTML 1.0 Strict.</div>
<div class="old-help-para">Each file contains a variable with a name like g:xmldata_xhtml10s . It is
a compound from two parts:</div>
<div class="old-help-para">1. "g:xmldata_"  general prefix, constant for all data files
2. "xhtml10s"    the name of the file and the name of the described XML
		 dialect; it will be used as an argument for the <a href="/neovim-docs-web/en/insert#%3AXMLns">:XMLns</a>
		 command</div>
<div class="old-help-para">Part two must be exactly the same as name of file.</div>
<div class="old-help-para">The variable is a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.  Keys are tag names and each value is a two
element <a href="/neovim-docs-web/en/eval#List">List</a>.  The first element of the List is also a List with the names
of possible children.  The second element is a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> with the names of
attributes as keys and the possible values of attributes as values.  Example:<pre>let g:xmldata_crippled = {
\ "vimxmlentities": ["amp", "lt", "gt", "apos", "quot"],
\ 'vimxmlroot': ['tag1'],
\ 'tag1':
\ [ ['childoftag1a', 'childoftag1b'], {'attroftag1a': [],
\ 'attroftag1b': ['valueofattr1', 'valueofattr2']}],
\ 'childoftag1a':
\ [ [], {'attrofchild': ['attrofchild']}],
\ 'childoftag1b':
\ [ ['childoftag1a'], {'attrofchild': []}],
\ "vimxmltaginfo": {
\ 'tag1': ['Menu info', 'Long information visible in preview window']},
\ 'vimxmlattrinfo': {
\ 'attrofchild': ['Menu info', 'Long information visible in preview window']}}</pre>
This example would be put in the "autoload/xml/crippled.vim" file and could
help to write this file:<pre>&lt;tag1 attroftag1b="valueofattr1"&gt;
    &lt;childoftag1a attrofchild&gt;
            &amp;amp; &amp;lt;
    &lt;/childoftag1a&gt;
    &lt;childoftag1b attrofchild="5"&gt;
        &lt;childoftag1a&gt;
            &amp;gt; &amp;apos; &amp;quot;
        &lt;/childoftag1a&gt;
    &lt;/childoftag1b&gt;
&lt;/tag1&gt;</pre>
In the example four special elements are visible:</div>
<div class="old-help-para">1. "vimxmlentities" - a special key with List containing entities of this XML
   dialect.
2. If the list containing possible values of attributes has one element and
   this element is equal to the name of the attribute this attribute will be
   treated as boolean and inserted as "attrname" and not as 'attrname="'
3. "vimxmltaginfo" - a special key with a Dictionary containing tag
   names as keys and two element List as values, for additional menu info and
   the long description.
4. "vimxmlattrinfo" - special key with Dictionary containing attribute names
   as keys and two element List as values, for additional menu info and long
   description.</div>
<div class="old-help-para">Note: Tag names in the data file MUST not contain a namespace description.
Check xsl.vim for an example.
Note: All data and functions are publicly available as global
variables/functions and can be used for personal editing functions.</div>
<div class="old-help-para">DTD -&gt; Vim							<a name="dtd2vim"></a><code class="help-tag-right">dtd2vim</code></div>
<div class="old-help-para">On <a href="/neovim-docs-web/en/intro#www">www</a> is the script <a href="/neovim-docs-web/en/insert#dtd2vim">dtd2vim</a> which parses DTD and creates an XML data file
for Vim XML omni completion.</div>
<div class="old-help-para">    dtd2vim: <a href="https://www.vim.org/scripts/script.php?script_id=1462">https://www.vim.org/scripts/script.php?script_id=1462</a></div>
<div class="old-help-para">Check the beginning of that file for usage details.
The script requires perl and:</div>
<div class="old-help-para">    perlSGML: <a href="https://savannah.nongnu.org/projects/perlsgml">https://savannah.nongnu.org/projects/perlsgml</a></div>
<div class="old-help-para">Commands</div>
<div class="old-help-para">:XMLns <code>{name}</code> [{namespace}]					<a name="%3AXMLns"></a><code class="help-tag-right">:XMLns</code></div>
<div class="old-help-para">Vim has to know which data file should be used and with which namespace.  For
loading of the data file and connecting data with the proper namespace use
<a href="/neovim-docs-web/en/insert#%3AXMLns">:XMLns</a> command.  The first (obligatory) argument is the name of the data
(xhtml10s, xsl).  The second argument is the code of namespace (h, xsl).  When
used without a second argument the dialect will be used as default - without
namespace declaration.  For example to use XML completion in .xsl files:<pre>:XMLns xhtml10s
:XMLns xsl xsl</pre>
:XMLent <code>{name}</code>							<a name="%3AXMLent"></a><code class="help-tag-right">:XMLent</code></div>
<div class="old-help-para">By default entities will be completed from the data file of the default
namespace.  The XMLent command should be used in case when there is no default
namespace:<pre>:XMLent xhtml10s</pre>
Usage</div>
<div class="old-help-para">While used in this situation (after declarations from previous part, | is
cursor position):<pre>&lt;|</pre>
Will complete to an appropriate XHTML tag, and in this situation:<pre>&lt;xsl:|</pre>
Will complete to an appropriate XSL tag.</div>
<div class="old-help-para">The script xmlcomplete.vim, provided through the <a href="/neovim-docs-web/en/userfunc#autoload">autoload</a> mechanism,
has the xmlcomplete#GetLastOpenTag() function which can be used in XML files
to get the name of the last open tag (b:unaryTagsStack has to be defined):<pre>:echo xmlcomplete#GetLastOpenTag("b:unaryTagsStack")</pre>
<h2 class="help-heading">8. Insert mode commands<span class="help-heading-tags">					<a name="inserting"></a><span class="help-tag">inserting</span></span></h2></div>
<div class="old-help-para">The following commands can be used to insert new text into the buffer.  They
can all be undone and repeated with the "." command.</div>
<div class="old-help-para">							<a name="a"></a><code class="help-tag-right">a</code>
a			Append text after the cursor [count] times.  If the
			cursor is in the first column of an empty line Insert
			starts there.  But not when <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> is set!</div>
<div class="old-help-para">							<a name="A"></a><code class="help-tag-right">A</code>
A			Append text at the end of the line [count] times.
			For using "A" in Visual block mode see <a href="/neovim-docs-web/en/visual#v_b_A">v_b_A</a>.</div>
<div class="old-help-para"><code>&lt;insert&gt;</code>	or				<a name="i"></a><code class="help-tag-right">i</code> <a name="insert"></a><code class="help-tag">insert</code> <a name="%3CInsert%3E"></a><code class="help-tag">&lt;Insert&gt;</code>
i			Insert text before the cursor [count] times.
			When using <code>CTRL-O</code> in Insert mode <a href="/neovim-docs-web/en/insert#i_CTRL-O">i_CTRL-O</a> the count
			is not supported.</div>
<div class="old-help-para">							<a name="I"></a><code class="help-tag-right">I</code>
I			Insert text before the first non-blank in the line
			[count] times.
			When the 'H' flag is present in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> and the
			line only contains blanks, insert start just before
			the last blank.
			For using "I" in Visual block mode see <a href="/neovim-docs-web/en/visual#v_b_I">v_b_I</a>.</div>
<div class="old-help-para">							<a name="gI"></a><code class="help-tag-right">gI</code>
gI			Insert text in column 1 [count] times.</div>
<div class="old-help-para">							<a name="gi"></a><code class="help-tag-right">gi</code>
gi			Insert text in the same position as where Insert mode
			was stopped last time in the current buffer.
			This uses the <a href="/neovim-docs-web/en/motion#'%5E">'^</a> mark.  It's different from "`^i"
			when the mark is past the end of the line.
			The position is corrected for inserted/deleted lines,
			but NOT for inserted/deleted characters.
			When the <a href="/neovim-docs-web/en/motion#%3Akeepjumps">:keepjumps</a> command modifier is used the <a href="/neovim-docs-web/en/motion#'%5E">'^</a>
			mark won't be changed.</div>
<div class="old-help-para">							<a name="o"></a><code class="help-tag-right">o</code>
o			Begin a new line below the cursor and insert text,
			repeat [count] times.</div>
<div class="old-help-para">							<a name="O"></a><code class="help-tag-right">O</code>
O			Begin a new line above the cursor and insert text,
			repeat [count] times.</div>
<div class="old-help-para">These commands are used to start inserting text.  You can end insert mode with
<code>&lt;Esc&gt;</code>.  See <a href="/neovim-docs-web/en/insert#mode-ins-repl">mode-ins-repl</a> for the other special characters in Insert mode.
The effect of [count] takes place after Insert mode is exited.</div>
<div class="old-help-para">When <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> is on, the indent for a new line is obtained from the
previous line.  When <a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a> or <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> is on, the indent for a line
is automatically adjusted for C programs.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> can be set to copy the comment leader when opening a new
line.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> can be set to the maximum width for a line.  When a line becomes
too long when appending characters a line break is automatically inserted.</div>
<div class="old-help-para"><h2 class="help-heading">9. Ex insert commands<span class="help-heading-tags">					<a name="inserting-ex"></a><span class="help-tag">inserting-ex</span></span></h2></div>
<div class="old-help-para">							<a name="%3Aa"></a><code class="help-tag-right">:a</code> <a name="%3Aappend"></a><code class="help-tag">:append</code>
:{range}a[ppend][!]	Insert several lines of text below the specified
			line.  If the <code>{range}</code> is missing, the text will be
			inserted after the current line.
			Adding [!] toggles <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> for the time this
			command is executed.</div>
<div class="old-help-para">							<a name="%3Ai"></a><code class="help-tag-right">:i</code> <a name="%3Ain"></a><code class="help-tag">:in</code> <a name="%3Ainsert"></a><code class="help-tag">:insert</code>
:{range}i[nsert][!]	Insert several lines of text above the specified
			line.  If the <code>{range}</code> is missing, the text will be
			inserted before the current line.
			Adding [!] toggles <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> for the time this
			command is executed.</div>
<div class="old-help-para">These two commands will keep on asking for lines, until you type a line
containing only a ".".  Watch out for lines starting with a backslash, see
<a href="/neovim-docs-web/en/repeat#line-continuation">line-continuation</a>.</div>
<div class="old-help-para">When in Ex mode (see <a href="/neovim-docs-web/en/starting#-e">-e</a>) a backslash at the end of the line can be used to
insert a NUL character.  To be able to have a line ending in a backslash use
two backslashes.  This means that the number of backslashes is halved, but
only at the end of the line.</div>
<div class="old-help-para">NOTE: These commands cannot be used with <a href="/neovim-docs-web/en/repeat#%3Aglobal">:global</a> or <a href="/neovim-docs-web/en/repeat#%3Avglobal">:vglobal</a>.
":append" and ":insert" don't work properly in between ":if" and
":endif", ":for" and ":endfor", ":while" and ":endwhile".</div>
<div class="old-help-para">							<a name="%3Astart"></a><code class="help-tag-right">:start</code> <a name="%3Astartinsert"></a><code class="help-tag">:startinsert</code>
:star[tinsert][!]	Start Insert mode (or <a href="/neovim-docs-web/en/intro#Terminal-mode">Terminal-mode</a> in a <a href="/neovim-docs-web/en/nvim_terminal_emulator#terminal">terminal</a>
			buffer) just after executing this command.
			Works like typing "i" in Normal mode.  When the ! is
			included it works like "A", append to the line.
			Otherwise insertion starts at the cursor position.
			Note that when using this command in a function or
			script, the insertion only starts after the function
			or script is finished.
			This command does not work from <a href="/neovim-docs-web/en/various#%3Anormal">:normal</a>.</div>
<div class="old-help-para">							<a name="%3Astopi"></a><code class="help-tag-right">:stopi</code> <a name="%3Astopinsert"></a><code class="help-tag">:stopinsert</code>
:stopi[nsert]		Stop Insert mode or <a href="/neovim-docs-web/en/intro#Terminal-mode">Terminal-mode</a> as soon as
			possible.  Works like typing <code>&lt;Esc&gt;</code> in Insert mode.
			Can be used in an autocommand, example:<pre>:au BufEnter scratch stopinsert</pre></div>
<div class="old-help-para">					<a name="replacing-ex"></a><code class="help-tag-right">replacing-ex</code> <a name="%3Astartreplace"></a><code class="help-tag">:startreplace</code>
:startr[eplace][!]	Start Replace mode just after executing this command.
			Works just like typing "R" in Normal mode.  When the
			! is included it acts just like "$R" had been typed
			(ie. begin replace mode at the end-of-line).  Other-
			wise replacement begins at the cursor position.
			Note that when using this command in a function or
			script that the replacement will only start after
			the function or script is finished.</div>
<div class="old-help-para">							<a name="%3Astartgreplace"></a><code class="help-tag-right">:startgreplace</code>
:startg[replace][!]	Just like <a href="/neovim-docs-web/en/insert#%3Astartreplace">:startreplace</a>, but use Virtual Replace
			mode, like with <a href="/neovim-docs-web/en/change#gR">gR</a>.</div>
<div class="old-help-para"><h2 class="help-heading">10. Inserting a file<span class="help-heading-tags">					<a name="inserting-file"></a><span class="help-tag">inserting-file</span></span></h2></div>
<div class="old-help-para">							<a name="%3Ar"></a><code class="help-tag-right">:r</code> <a name="%3Are"></a><code class="help-tag">:re</code> <a name="%3Aread"></a><code class="help-tag">:read</code>
:r[ead] [++opt] [name]
			Insert the file [name] (default: current file) below
			the cursor.
			See <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> for the possible values of [++opt].</div>
<div class="old-help-para">:{range}r[ead] [++opt] [name]
			Insert the file [name] (default: current file) below
			the specified line.
			See <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> for the possible values of [++opt].</div>
<div class="old-help-para">							<a name="%3Ar%21"></a><code class="help-tag-right">:r!</code> <a name="%3Aread%21"></a><code class="help-tag">:read!</code>
:[range]r[ead] [++opt] !{cmd}
			Execute <code>{cmd}</code> and insert its standard output below
			the cursor or the specified line.  A temporary file is
			used to store the output of the command which is then
			read into the buffer.  <a href="/neovim-docs-web/en/options#'shellredir'">'shellredir'</a> is used to save
			the output of the command, which can be set to include
			stderr or not.  <code>{cmd}</code> is executed like with ":!{cmd}",
			any '!' is replaced with the previous command <a href="/neovim-docs-web/en/various#%3A%21">:!</a>.
			See <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> for the possible values of [++opt].</div>
<div class="old-help-para">These commands insert the contents of a file, or the output of a command,
into the buffer.  They can be undone.  They cannot be repeated with the "."
command.  They work on a line basis, insertion starts below the line in which
the cursor is, or below the specified line.  To insert text above the first
line use the command ":0r <code>{name}</code>".</div>
<div class="old-help-para">After the ":read" command, the cursor is left on the first non-blank in the
first new line.  Unless in Ex mode, then the cursor is left on the last new
line (sorry, this is Vi compatible).</div>
<div class="old-help-para">If a file name is given with ":r", it becomes the alternate file.  This can be
used, for example, when you want to edit that file instead: ":e! #".  This can
be switched off by removing the 'a' flag from the <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> option.</div>
<div class="old-help-para">Of the [++opt] arguments one is specifically for ":read", the ++edit argument.
This is useful when the ":read" command is actually used to read a file into
the buffer as if editing that file.  Use this command in an empty buffer:<pre>:read ++edit filename</pre>
The effect is that the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>, <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a>, <a href="/neovim-docs-web/en/options#'bomb'">'bomb'</a>, etc. options are
set to what has been detected for "filename".  Note that a single empty line
remains, you may want to delete it.</div>
<div class="old-help-para">							<a name="file-read"></a><code class="help-tag-right">file-read</code>
The <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> option sets the <code>&lt;EOL&gt;</code> style for a file:
<div class="help-column_heading"><a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>    characters	   name</div>  "dos"		<code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> or <code>&lt;NL&gt;</code>   DOS format
  "unix"	<code>&lt;NL&gt;</code>		   Unix format
  "mac"		<code>&lt;CR&gt;</code>		   Mac format</div>
<div class="old-help-para">If <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is "dos", a <code>&lt;CR&gt;</code> in front of an <code>&lt;NL&gt;</code> is ignored and a <code>CTRL-Z</code>
at the end of the file is ignored.</div>
<div class="old-help-para">If <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is "mac", a <code>&lt;NL&gt;</code> in the file is internally represented by a
<code>&lt;CR&gt;</code>.  This is to avoid confusion with a <code>&lt;NL&gt;</code> which is used to represent a
<code>&lt;NUL&gt;</code>.  See <a href="/neovim-docs-web/en/pattern#CR-used-for-NL">CR-used-for-NL</a>.</div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> option is not empty Vim tries to recognize the type of
<code>&lt;EOL&gt;</code> (see <a href="/neovim-docs-web/en/editing#file-formats">file-formats</a>).  However, the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> option will not be
changed, the detected format is only used while reading the file.
A similar thing happens with <a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a>.</div>
<div class="old-help-para">On non-Win32 systems the message "[dos format]" is shown if a file is read in
DOS format, to remind you that something unusual is done.
On Macintosh and Win32 the message "[unix format]" is shown if a file is read
in Unix format.
On non-Macintosh systems, the message "[mac format]" is shown if a file is
read in Mac format.</div>
<div class="old-help-para">An example on how to use ":r !":<pre>:r !uuencode binfile binfile</pre>
This command reads "binfile", uuencodes it and reads it into the current
buffer.  Useful when you are editing e-mail and want to include a binary
file.</div>
<div class="old-help-para">							<a name="read-messages"></a><code class="help-tag-right">read-messages</code>
When reading a file Vim will display a message with information about the read
file.  In the table is an explanation for some of the items.  The others are
self explanatory.  Using the long or the short version depends on the
<a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a> option.</div>
<div class="old-help-para"><div class="help-column_heading">	long		short		meaning</div>	[readonly]	<code>{RO}</code>		the file is write protected
	[fifo/socket]			using a stream
	[fifo]				using a fifo stream
	[socket]			using a socket stream
	[CR missing]			reading with "dos" <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> and a
					NL without a preceding CR was found.
	[NL found]			reading with "mac" <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> and a
					NL was found (could be "unix" format)
	[long lines split]		at least one line was split in two
	[NOT converted]			conversion from <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> to
					<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> was desired but not
					possible
	[converted]			conversion from <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> to
					<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> done
	[READ ERRORS]			not all of the file could be read</div>

  
  