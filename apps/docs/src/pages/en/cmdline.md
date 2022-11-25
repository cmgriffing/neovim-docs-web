---
title:  Cmdline
layout: ../../layouts/MainLayout.astro
---

  <a name="cmdline.txt"></a><a name="Cmdline-mode"></a><h1> Cmdline</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/cmdline.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para"> <a name="Command-line-mode"></a><code class="help-tag">Command-line-mode</code> <a name="Cmdline"></a><code class="help-tag">Cmdline</code>
Command-line mode		<a name="cmdline"></a><code class="help-tag-right">cmdline</code> <a name="Command-line"></a><code class="help-tag">Command-line</code> <a name="mode-cmdline"></a><code class="help-tag">mode-cmdline</code> <a name="%3A"></a><code class="help-tag">:</code></div>
<div class="old-help-para">Command-line mode is used to enter Ex commands (":"), search patterns
("/" and "?"), and filter commands ("!").</div>
<div class="old-help-para">Basic command line editing is explained in chapter 20 of the user manual
<a href="/neovim-docs-web/en/usr_20#usr_20.txt">usr_20.txt</a>.</div>
<div class="old-help-para"><h2 class="help-heading">1. Command-line editing<span class="help-heading-tags">					<a name="cmdline-editing"></a><span class="help-tag">cmdline-editing</span></span></h2></div>
<div class="old-help-para">Normally characters are inserted in front of the cursor position.  You can
move around in the command-line with the left and right cursor keys.  With the
<code>&lt;Insert&gt;</code> key, you can toggle between inserting and overstriking characters.</div>
<div class="old-help-para">Note that if your keyboard does not have working cursor keys or any of the
other special keys, you can use ":cnoremap" to define another key for them.
For example, to define tcsh style editing keys:		<a name="tcsh-style"></a><code class="help-tag-right">tcsh-style</code><pre>:cnoremap &lt;C-A&gt; &lt;Home&gt;
:cnoremap &lt;C-F&gt; &lt;Right&gt;
:cnoremap &lt;C-B&gt; &lt;Left&gt;
:cnoremap &lt;Esc&gt;b &lt;S-Left&gt;
:cnoremap &lt;Esc&gt;f &lt;S-Right&gt;</pre>
(&lt;&gt; notation <a href="/neovim-docs-web/en/intro#%3C%3E">&lt;&gt;</a>; type all this literally)</div>
<div class="old-help-para">							<a name="cmdline-too-long"></a><code class="help-tag-right">cmdline-too-long</code>
When the command line is getting longer than what fits on the screen, only the
part that fits will be shown.  The cursor can only move in this visible part,
thus you cannot edit beyond that.</div>
<div class="old-help-para">						<a name="cmdline-history"></a><code class="help-tag-right">cmdline-history</code> <a name="history"></a><code class="help-tag">history</code>
The command-lines that you enter are remembered in a history table.  You can
recall them with the up and down cursor keys.  There are actually five
history tables:
<div class="help-li" style=""> one for ':' commands
</div><div class="help-li" style=""> one for search strings
</div><div class="help-li" style=""> one for expressions
</div><div class="help-li" style=""> one for input lines, typed for the <a href="/neovim-docs-web/en/builtin#input()">input()</a> function.
</div><div class="help-li" style=""> one for debug mode commands
These are completely separate.  Each history can only be accessed when
entering the same type of line.
Use the <a href="/neovim-docs-web/en/options#'history'">'history'</a> option to set the number of lines that are remembered.
Notes:
</div><div class="help-li" style=""> When you enter a command-line that is exactly the same as an older one, the
  old one is removed (to avoid repeated commands moving older commands out of
  the history).
</div><div class="help-li" style=""> Only commands that are typed are remembered.  Ones that completely come from
  mappings are not put in the history.
</div><div class="help-li" style=""> All searches are put in the search history, including the ones that come
  from commands like "*" and "#".  But for a mapping, only the last search is
  remembered (to avoid that long mappings trash the history).
</div></div>
<div class="old-help-para">There is an automatic completion of names on the command-line; see
<a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a>.</div>
<div class="old-help-para">							<a name="c_CTRL-V"></a><code class="help-tag-right">c_CTRL-V</code>
CTRL-V		Insert next non-digit literally.  Up to three digits form the
		decimal value of a single byte.  The non-digit and the three
		digits are not considered for mapping.  This works the same
		way as in Insert mode (see above, <a href="/neovim-docs-web/en/insert#i_CTRL-V">i_CTRL-V</a>).
		For special keys, the CTRL modifier may be included into the
		key to produce a control character.  If there is no control
		character for the key then its <a href="/neovim-docs-web/en/intro#key-notation">key-notation</a> is inserted.
		Note: Under Windows <code>CTRL-V</code> is often mapped to paste text.
		Use <code>CTRL-Q</code> instead then.
							<a name="c_CTRL-Q"></a><code class="help-tag-right">c_CTRL-Q</code>
CTRL-Q		Same as <code>CTRL-V</code>.  But with some terminals it is used for
		control flow, it doesn't work then.</div>
<div class="old-help-para"><h3 class="help-heading">CTRL-SHIFT-V<span class="help-heading-tags">				<a name="c_CTRL-SHIFT-V"></a><span class="help-tag">c_CTRL-SHIFT-V</span> <a name="c_CTRL-SHIFT-Q"></a><span class="help-tag">c_CTRL-SHIFT-Q</span></span></h3>CTRL-SHIFT-Q	Works just like <code>CTRL-V</code>, but do not try to include the CTRL
		modifier into the key.</div>
<div class="old-help-para">							<a name="c_%3CLeft%3E"></a><code class="help-tag-right">c_&lt;Left&gt;</code> <a name="c_Left"></a><code class="help-tag">c_Left</code>
<code>&lt;Left&gt;</code>		cursor left
							<a name="c_%3CRight%3E"></a><code class="help-tag-right">c_&lt;Right&gt;</code> <a name="c_Right"></a><code class="help-tag">c_Right</code>
<code>&lt;Right&gt;</code>		cursor right
							<a name="c_%3CS-Left%3E"></a><code class="help-tag-right">c_&lt;S-Left&gt;</code>
<code>&lt;S-Left&gt;</code> or <code>&lt;C-Left&gt;</code>					<a name="c_%3CC-Left%3E"></a><code class="help-tag-right">c_&lt;C-Left&gt;</code>
		cursor one WORD left
							<a name="c_%3CS-Right%3E"></a><code class="help-tag-right">c_&lt;S-Right&gt;</code>
<code>&lt;S-Right&gt;</code> or <code>&lt;C-Right&gt;</code>					<a name="c_%3CC-Right%3E"></a><code class="help-tag-right">c_&lt;C-Right&gt;</code>
		cursor one WORD right
CTRL-B or <code>&lt;Home&gt;</code>				<a name="c_CTRL-B"></a><code class="help-tag-right">c_CTRL-B</code> <a name="c_%3CHome%3E"></a><code class="help-tag">c_&lt;Home&gt;</code> <a name="c_Home"></a><code class="help-tag">c_Home</code>
		cursor to beginning of command-line
CTRL-E or <code>&lt;End&gt;</code>					<a name="c_CTRL-E"></a><code class="help-tag-right">c_CTRL-E</code> <a name="c_%3CEnd%3E"></a><code class="help-tag">c_&lt;End&gt;</code> <a name="c_End"></a><code class="help-tag">c_End</code>
		cursor to end of command-line</div>
<div class="old-help-para">							<a name="c_%3CLeftMouse%3E"></a><code class="help-tag-right">c_&lt;LeftMouse&gt;</code>
<code>&lt;LeftMouse&gt;</code>	Move the cursor to the position of the mouse click.</div>
<div class="old-help-para">							<a name="c_%3CMiddleMouse%3E"></a><code class="help-tag-right">c_&lt;MiddleMouse&gt;</code>
<code>&lt;MiddleMouse&gt;</code>	Paste the contents of the clipboard (for X11 the primary
		selection).  This is similar to using <code>CTRL-R</code>, but no CR
		characters are inserted between lines.</div>
<div class="old-help-para"><h3 class="help-heading">CTRL-H<span class="help-heading-tags">						<a name="c_%3CBS%3E"></a><span class="help-tag">c_&lt;BS&gt;</span> <a name="c_CTRL-H"></a><span class="help-tag">c_CTRL-H</span> <a name="c_BS"></a><span class="help-tag">c_BS</span></span></h3><code>&lt;BS&gt;</code>		Delete the character in front of the cursor.
							<a name="c_%3CDel%3E"></a><code class="help-tag-right">c_&lt;Del&gt;</code> <a name="c_Del"></a><code class="help-tag">c_Del</code>
<code>&lt;Del&gt;</code>		Delete the character under the cursor (at end of line:
		character before the cursor).
							<a name="c_CTRL-W"></a><code class="help-tag-right">c_CTRL-W</code>
CTRL-W		Delete the <a href="/neovim-docs-web/en/motion#word">word</a> before the cursor.  This depends on the
		<a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> option.
							<a name="c_CTRL-U"></a><code class="help-tag-right">c_CTRL-U</code>
CTRL-U		Remove all characters between the cursor position and
		the beginning of the line.  Previous versions of vim
		deleted all characters on the line.  If that is the
		preferred behavior, add the following to your vimrc:<pre>:cnoremap &lt;C-U&gt; &lt;C-E&gt;&lt;C-U&gt;</pre></div>
<div class="old-help-para">						<a name="c_%3CInsert%3E"></a><code class="help-tag-right">c_&lt;Insert&gt;</code> <a name="c_Insert"></a><code class="help-tag">c_Insert</code>
<code>&lt;Insert&gt;</code>	Toggle between insert and overstrike.</div>
<div class="old-help-para"><code>{char1}</code> <code>&lt;BS&gt;</code> <code>{char2}</code>	or				<a name="c_digraph"></a><code class="help-tag-right">c_digraph</code>
CTRL-K <code>{char1}</code> <code>{char2}</code>					<a name="c_CTRL-K"></a><code class="help-tag-right">c_CTRL-K</code>
		enter digraph (see <a href="/neovim-docs-web/en/digraph#digraphs">digraphs</a>).  When <code>{char1}</code> is a special
		key, the code for that key is inserted in &lt;&gt; form.</div>
<div class="old-help-para">CTRL-R <code>{register}</code>					<a name="c_CTRL-R"></a><code class="help-tag-right">c_CTRL-R</code> <a name="c_%3CC-R%3E"></a><code class="help-tag">c_&lt;C-R&gt;</code>
		Insert the contents of a numbered or named register.  Between
		typing <code>CTRL-R</code> and the second character '"' will be displayed
		to indicate that you are expected to enter the name of a
		register.
		The text is inserted as if you typed it, but mappings and
		abbreviations are not used.  Command-line completion through
		<a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> is not triggered though.  And characters that end
		the command line are inserted literally (<code>&lt;Esc&gt;</code>, <code>&lt;CR&gt;</code>, <code>&lt;NL&gt;</code>,
		<code>&lt;C-C&gt;</code>).  A <code>&lt;BS&gt;</code> or <code>CTRL-W</code> could still end the command line
		though, and remaining characters will then be interpreted in
		another mode, which might not be what you intended.
		Special registers:
			'"'	the unnamed register, containing the text of
				the last delete or yank
			'%'	the current file name
			'#'	the alternate file name
			''	the clipboard contents (X11: primary selection)
			'+'	the clipboard contents
			'/'	the last search pattern
			':'	the last command-line
			'-'	the last small (less than a line) delete
			'.'	the last inserted text
							<a name="c_CTRL-R_%3D"></a><code class="help-tag-right">c_CTRL-R_=</code>
			'='	the expression register: you are prompted to
				enter an expression (see <a href="/neovim-docs-web/en/eval#expression">expression</a>)
				(doesn't work at the expression prompt; some
				things such as changing the buffer or current
				window are not allowed to avoid side effects)
				When the result is a <a href="/neovim-docs-web/en/eval#List">List</a> the items are used
				as lines.  They can have line breaks inside
				too.
				When the result is a Float it's automatically
				converted to a String.
				Note that when you only want to move the
				cursor and not insert anything, you must make
				sure the expression evaluates to an empty
				string.  E.g.:<pre>&lt;C-R&gt;&lt;C-R&gt;=setcmdpos(2)[-1]&lt;CR&gt;</pre></div>
<div class="old-help-para">		See <a href="/neovim-docs-web/en/change#registers">registers</a> about registers.
		Implementation detail: When using the <a href="/neovim-docs-web/en/eval#expression">expression</a> register
		and invoking setcmdpos(), this sets the position before
		inserting the resulting string.  Use <code>CTRL-R</code> <code>CTRL-R</code> to set the
		position afterwards.</div>
<div class="old-help-para">CTRL-R <code>CTRL-F</code>				<a name="c_CTRL-R_CTRL-F"></a><code class="help-tag-right">c_CTRL-R_CTRL-F</code> <a name="c_%3CC-R%3E_%3CC-F%3E"></a><code class="help-tag">c_&lt;C-R&gt;_&lt;C-F&gt;</code>
CTRL-R <code>CTRL-P</code>				<a name="c_CTRL-R_CTRL-P"></a><code class="help-tag-right">c_CTRL-R_CTRL-P</code> <a name="c_%3CC-R%3E_%3CC-P%3E"></a><code class="help-tag">c_&lt;C-R&gt;_&lt;C-P&gt;</code>
CTRL-R <code>CTRL-W</code>				<a name="c_CTRL-R_CTRL-W"></a><code class="help-tag-right">c_CTRL-R_CTRL-W</code> <a name="c_%3CC-R%3E_%3CC-W%3E"></a><code class="help-tag">c_&lt;C-R&gt;_&lt;C-W&gt;</code>
CTRL-R <code>CTRL-A</code>				<a name="c_CTRL-R_CTRL-A"></a><code class="help-tag-right">c_CTRL-R_CTRL-A</code> <a name="c_%3CC-R%3E_%3CC-A%3E"></a><code class="help-tag">c_&lt;C-R&gt;_&lt;C-A&gt;</code>
CTRL-R <code>CTRL-L</code>				<a name="c_CTRL-R_CTRL-L"></a><code class="help-tag-right">c_CTRL-R_CTRL-L</code> <a name="c_%3CC-R%3E_%3CC-L%3E"></a><code class="help-tag">c_&lt;C-R&gt;_&lt;C-L&gt;</code>
		Insert the object under the cursor:
			<code>CTRL-F</code>	the Filename under the cursor
			<code>CTRL-P</code>	the Filename under the cursor, expanded with
				<a href="/neovim-docs-web/en/options#'path'">'path'</a> as in <a href="/neovim-docs-web/en/editing#gf">gf</a>
			<code>CTRL-W</code>	the Word under the cursor
			<code>CTRL-A</code>	the WORD under the cursor; see <a href="/neovim-docs-web/en/motion#WORD">WORD</a>
			<code>CTRL-L</code>	the line under the cursor</div>
<div class="old-help-para">		When <a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a> is set the cursor position at the end of the
		currently displayed match is used.  With <code>CTRL-W</code> the part of
		the word that was already typed is not inserted again.</div>
<div class="old-help-para">					<a name="c_CTRL-R_CTRL-R"></a><code class="help-tag-right">c_CTRL-R_CTRL-R</code> <a name="c_%3CC-R%3E_%3CC-R%3E"></a><code class="help-tag">c_&lt;C-R&gt;_&lt;C-R&gt;</code>
					<a name="c_CTRL-R_CTRL-O"></a><code class="help-tag-right">c_CTRL-R_CTRL-O</code> <a name="c_%3CC-R%3E_%3CC-O%3E"></a><code class="help-tag">c_&lt;C-R&gt;_&lt;C-O&gt;</code>
CTRL-R <code>CTRL-R</code> <code>{register CTRL-F CTRL-P CTRL-W CTRL-A CTRL-L}</code>
CTRL-R <code>CTRL-O</code> <code>{register CTRL-F CTRL-P CTRL-W CTRL-A CTRL-L}</code>
		Insert register or object under the cursor.  Works like
		<a href="/neovim-docs-web/en/cmdline#c_CTRL-R">c_CTRL-R</a> but inserts the text literally.  For example, if
		register a contains "xy^Hz" (where ^H is a backspace),
		"CTRL-R a" will insert "xz" while "CTRL-R <code>CTRL-R</code> a" will
		insert "xy^Hz".</div>
<div class="old-help-para"><code>CTRL-\</code> e <code>{expr}</code>						<a name="c_CTRL-%5C_e"></a><code class="help-tag-right">c_CTRL-\_e</code>
		Evaluate <code>{expr}</code> and replace the whole command line with the
		result.  You will be prompted for the expression, type <code>&lt;Enter&gt;</code>
		to finish it.  It's most useful in mappings though.  See
		<a href="/neovim-docs-web/en/eval#expression">expression</a>.
		See <a href="/neovim-docs-web/en/cmdline#c_CTRL-R_%3D">c_CTRL-R_=</a> for inserting the result of an expression.
		Useful functions are <a href="/neovim-docs-web/en/builtin#getcmdtype()">getcmdtype()</a>, <a href="/neovim-docs-web/en/builtin#getcmdline()">getcmdline()</a> and
		<a href="/neovim-docs-web/en/builtin#getcmdpos()">getcmdpos()</a>.
		The cursor position is unchanged, except when the cursor was
		at the end of the line, then it stays at the end.
		<a href="/neovim-docs-web/en/builtin#setcmdpos()">setcmdpos()</a> can be used to set the cursor position.
		The <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a> is used for evaluating the expression to avoid
		nasty side effects.
		Example:<pre>:cmap &lt;F7&gt; &lt;C-\&gt;eAppendSome()&lt;CR&gt;
:func AppendSome()
   :let cmd = getcmdline() .. " Some()"
   :" place the cursor on the )
   :call setcmdpos(strlen(cmd))
   :return cmd
:endfunc</pre></div>
<div class="old-help-para">		This doesn't work recursively, thus not when already editing
		an expression.  But it is possible to use in a mapping.</div>
<div class="old-help-para">							<a name="c_CTRL-Y"></a><code class="help-tag-right">c_CTRL-Y</code>
CTRL-Y		When there is a modeless selection, copy the selection into
		the clipboard.
		If there is no selection <code>CTRL-Y</code> is inserted as a character.</div>
<div class="old-help-para">							<a name="c_CTRL-Z"></a><code class="help-tag-right">c_CTRL-Z</code>
CTRL-Z		Trigger <a href="/neovim-docs-web/en/options#'wildmode'">'wildmode'</a>. Same as <a href="/neovim-docs-web/en/options#'wildcharm'">'wildcharm'</a>, but always available.</div>
<div class="old-help-para">CTRL-M or <code>CTRL-J</code>		<a name="c_CTRL-M"></a><code class="help-tag-right">c_CTRL-M</code> <a name="c_CTRL-J"></a><code class="help-tag">c_CTRL-J</code> <a name="c_%3CNL%3E"></a><code class="help-tag">c_&lt;NL&gt;</code> <a name="c_%3CCR%3E"></a><code class="help-tag">c_&lt;CR&gt;</code> <a name="c_CR"></a><code class="help-tag">c_CR</code>
<code>&lt;CR&gt;</code> or <code>&lt;NL&gt;</code>	start entered command</div>
<div class="old-help-para"><code>CTRL-[</code>						<a name="c_CTRL-%5B"></a><code class="help-tag-right">c_CTRL-[</code> <a name="c_%3CEsc%3E"></a><code class="help-tag">c_&lt;Esc&gt;</code> <a name="c_Esc"></a><code class="help-tag">c_Esc</code>
<code>&lt;Esc&gt;</code>		When typed and 'x' not present in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>, quit
		Command-line mode without executing.  In macros or when 'x'
		present in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>, start entered command.
		Note: If your <code>&lt;Esc&gt;</code> key is hard to hit on your keyboard, train
		yourself to use <code>CTRL-[</code>.
						<a name="c_META"></a><code class="help-tag-right">c_META</code> <a name="c_ALT"></a><code class="help-tag">c_ALT</code>
		ALT (<a href="/neovim-docs-web/en/intro#META">META</a>) may act like <code>&lt;Esc&gt;</code> if the chord is not mapped.
		For example <code>&lt;A-x&gt;</code> acts like <code>&lt;Esc&gt;</code>x if <code>&lt;A-x&gt;</code> does not have a
		command-line mode mapping.
							<a name="c_CTRL-C"></a><code class="help-tag-right">c_CTRL-C</code>
CTRL-C		quit command-line without executing</div>
<div class="old-help-para">							<a name="c_%3CUp%3E"></a><code class="help-tag-right">c_&lt;Up&gt;</code> <a name="c_Up"></a><code class="help-tag">c_Up</code>
<code>&lt;Up&gt;</code>		recall older command-line from history, whose beginning
		matches the current command-line (see below).
							<a name="c_%3CDown%3E"></a><code class="help-tag-right">c_&lt;Down&gt;</code> <a name="c_Down"></a><code class="help-tag">c_Down</code>
<code>&lt;Down&gt;</code>		recall more recent command-line from history, whose beginning
		matches the current command-line (see below).</div>
<div class="old-help-para">							<a name="c_%3CS-Up%3E"></a><code class="help-tag-right">c_&lt;S-Up&gt;</code> <a name="c_%3CPageUp%3E"></a><code class="help-tag">c_&lt;PageUp&gt;</code>
<code>&lt;S-Up&gt;</code> or <code>&lt;PageUp&gt;</code>
		recall older command-line from history
						<a name="c_%3CS-Down%3E"></a><code class="help-tag-right">c_&lt;S-Down&gt;</code> <a name="c_%3CPageDown%3E"></a><code class="help-tag">c_&lt;PageDown&gt;</code>
<code>&lt;S-Down&gt;</code> or <code>&lt;PageDown&gt;</code>
		recall more recent command-line from history</div>
<div class="old-help-para">CTRL-D		command-line completion (see <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a>)
<a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> option
		command-line completion (see <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a>)
CTRL-N		command-line completion (see <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a>)
CTRL-P		command-line completion (see <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a>)
CTRL-A		command-line completion (see <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a>)
CTRL-L		command-line completion (see <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a>)</div>
<div class="old-help-para">							<a name="c_CTRL-_"></a><code class="help-tag-right">c_CTRL-_</code>
CTRL-_		Switch between Hebrew and English keyboard mode, which is
		private to the command-line and not related to hkmap.
		This is useful when Hebrew text entry is required in the
		command-line, searches, abbreviations, etc.  Applies only if
		the <a href="/neovim-docs-web/en/options#'allowrevins'">'allowrevins'</a> option is set.
		See <a href="/neovim-docs-web/en/rileft#rileft.txt">rileft.txt</a>.</div>
<div class="old-help-para">							<a name="c_CTRL-%5E"></a><code class="help-tag-right">c_CTRL-^</code>
<code>CTRL-^</code>		Toggle the use of language <a href="/neovim-docs-web/en/map#%3Almap">:lmap</a> mappings and/or Input
		Method.
		When typing a pattern for a search command and <a href="/neovim-docs-web/en/options#'imsearch'">'imsearch'</a> is
		not -1, VAL is the value of <a href="/neovim-docs-web/en/options#'imsearch'">'imsearch'</a>, otherwise VAL is the
		value of <a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a>.
		When language mappings are defined:
<div class="help-li" style=""> If VAL is 1 (langmap mappings used) it becomes 0 (no langmap
		  mappings used).
</div><div class="help-li" style=""> If VAL was not 1 it becomes 1, thus langmap mappings are
		  enabled.
		When no language mappings are defined:
</div><div class="help-li" style=""> If VAL is 2 (Input Method is used) it becomes 0 (no input
		  method used)
</div><div class="help-li" style=""> If VAL has another value it becomes 2, thus the Input Method
		  is enabled.
		These language mappings are normally used to type characters
		that are different from what the keyboard produces.  The
		<a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> option can be used to install a whole number of them.
		When entering a command line, langmap mappings are switched
		off, since you are expected to type a command.  After
		switching it on with <code>CTRL-^</code>, the new state is not used again
		for the next command or Search pattern.
</div></div>
<div class="old-help-para">						<a name="c_CTRL-%5D"></a><code class="help-tag-right">c_CTRL-]</code>
<code>CTRL-]</code>		Trigger abbreviation, without inserting a character.</div>
<div class="old-help-para">For Emacs-style editing on the command-line see <a href="/neovim-docs-web/en/tips#emacs-keys">emacs-keys</a>.</div>
<div class="old-help-para">The <code>&lt;Up&gt;</code> and <code>&lt;Down&gt;</code> keys take the current command-line as a search string.
The beginning of the next/previous command-lines are compared with this
string.  The first line that matches is the new command-line.  When typing
these two keys repeatedly, the same string is used again.  For example, this
can be used to find the previous substitute command: Type ":s" and then <code>&lt;Up&gt;</code>.
The same could be done by typing <code>&lt;S-Up&gt;</code> a number of times until the desired
command-line is shown.  (Note: the shifted arrow keys do not work on all
terminals)</div>
<div class="old-help-para">							<a name="%3Ahis"></a><code class="help-tag-right">:his</code> <a name="%3Ahistory"></a><code class="help-tag">:history</code>
:his[tory]	Print the history of last entered commands.</div>
<div class="old-help-para">:his[tory] [{name}] [{first}][, [{last}]]
		List the contents of history <code>{name}</code> which can be:
		c[md]	 or :		command-line history
		s[earch] or / or ?	search string history
		e[xpr]	 or =		expression register history
		i[nput]	 or @		input line history
		d[ebug]	 or &gt;		debug command history
		a[ll]			all of the above</div>
<div class="old-help-para">		If the numbers <code>{first}</code> and/or <code>{last}</code> are given, the respective
		range of entries from a history is listed.  These numbers can
		be specified in the following form:
							<a name="%3Ahistory-indexing"></a><code class="help-tag-right">:history-indexing</code>
		A positive number represents the absolute index of an entry
		as it is given in the first column of a :history listing.
		This number remains fixed even if other entries are deleted.</div>
<div class="old-help-para">		A negative number means the relative position of an entry,
		counted from the newest entry (which has index -1) backwards.</div>
<div class="old-help-para">		Examples:
		List entries 6 to 12 from the search history:<pre>:history / 6,12</pre></div>
<div class="old-help-para">		List the penultimate entry from all histories:<pre>:history all -2</pre></div>
<div class="old-help-para">		List the most recent two entries from all histories:<pre>:history all -2,</pre>
:keepp[atterns] <code>{command}</code>			<a name="%3Akeepp"></a><code class="help-tag-right">:keepp</code> <a name="%3Akeeppatterns"></a><code class="help-tag">:keeppatterns</code>
		Execute <code>{command}</code>, without adding anything to the search
		history</div>
<div class="old-help-para"><h2 class="help-heading">2. Command-line completion<span class="help-heading-tags">				<a name="cmdline-completion"></a><span class="help-tag">cmdline-completion</span></span></h2></div>
<div class="old-help-para">When editing the command-line, a few commands can be used to complete the
word before the cursor.  This is available for:</div>
<div class="old-help-para"><div class="help-li" style=""> Command names: At the start of the command-line.
</div><div class="help-li" style=""> Tags: Only after the ":tag" command.
</div><div class="help-li" style=""> File names: Only after a command that accepts a file name or a setting for
  an option that can be set to a file name.  This is called file name
  completion.
</div><div class="help-li" style=""> Shell command names: After ":!cmd", ":r !cmd" and ":w !cmd".  $PATH is used.
</div><div class="help-li" style=""> Options: Only after the ":set" command.
</div><div class="help-li" style=""> Mappings: Only after a ":map" or similar command.
</div><div class="help-li" style=""> Variable and function names: Only after a ":if", ":call" or similar command.
</div></div>
<div class="old-help-para">The number of help item matches is limited (currently to 300) to avoid a long
delay when there are very many matches.</div>
<div class="old-help-para">These are the commands that can be used:</div>
<div class="old-help-para">							<a name="c_CTRL-D"></a><code class="help-tag-right">c_CTRL-D</code>
CTRL-D		List names that match the pattern in front of the cursor.
		When showing file names, directories are highlighted (see
		<a href="/neovim-docs-web/en/syntax#highlight-groups">highlight-groups</a>).  Names where <a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> matches are moved
		to the end.
		The <a href="/neovim-docs-web/en/options#'wildoptions'">'wildoptions'</a> option can be set to "tagfile" to list the
		file of matching tags.
					<a name="c_CTRL-I"></a><code class="help-tag-right">c_CTRL-I</code> <a name="c_wildchar"></a><code class="help-tag">c_wildchar</code> <a name="c_%3CTab%3E"></a><code class="help-tag">c_&lt;Tab&gt;</code>
<a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> option
		A match is done on the pattern in front of the cursor.  The
		match (if there are several, the first match) is inserted
		in place of the pattern.  (Note: does not work inside a
		macro, because <code>&lt;Tab&gt;</code> or <code>&lt;Esc&gt;</code> are mostly used as <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a>,
		and these have a special meaning in some macros.) When typed
		again and there were multiple matches, the next
		match is inserted.  After the last match, the first is used
		again (wrap around).
		The behavior can be changed with the <a href="/neovim-docs-web/en/options#'wildmode'">'wildmode'</a> option.
							<a name="c_%3CS-Tab%3E"></a><code class="help-tag-right">c_&lt;S-Tab&gt;</code>
<code>&lt;S-Tab&gt;</code>		Like <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> or <code>&lt;Tab&gt;</code>, but begin with the last match and
		then go to the previous match.
							<a name="c_CTRL-N"></a><code class="help-tag-right">c_CTRL-N</code>
CTRL-N		After using <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> which got multiple matches, go to next
		match.  Otherwise recall more recent command-line from history.
							<a name="c_CTRL-P"></a><code class="help-tag-right">c_CTRL-P</code>
CTRL-P		After using <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> which got multiple matches, go to
		previous match.  Otherwise recall older command-line from
		history.
							<a name="c_CTRL-A"></a><code class="help-tag-right">c_CTRL-A</code>
CTRL-A		All names that match the pattern in front of the cursor are
		inserted.
							<a name="c_CTRL-L"></a><code class="help-tag-right">c_CTRL-L</code>
CTRL-L		A match is done on the pattern in front of the cursor.  If
		there is one match, it is inserted in place of the pattern.
		If there are multiple matches the longest common part is
		inserted in place of the pattern.  If the result is shorter
		than the pattern, no completion is done.
							<a name="%2F_CTRL-L"></a><code class="help-tag-right">/_CTRL-L</code>
		When <a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a> is set, entering a search pattern for "/" or
		"?" and the current match is displayed then <code>CTRL-L</code> will add
		one character from the end of the current match.  If
		<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> and <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> are set and the command line has
		no uppercase characters, the added character is converted to
		lowercase.
	                                            <a name="c_CTRL-G"></a><code class="help-tag-right">c_CTRL-G</code> <a name="%2F_CTRL-G"></a><code class="help-tag">/_CTRL-G</code>
CTRL-G		When <a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a> is set, entering a search pattern for "/" or
		"?" and the current match is displayed then <code>CTRL-G</code> will move
		to the next match (does not take <a href="/neovim-docs-web/en/pattern#search-offset">search-offset</a> into account)
		Use <code>CTRL-T</code> to move to the previous match.  Hint: on a regular
		keyboard T is above G.
	                                            <a name="c_CTRL-T"></a><code class="help-tag-right">c_CTRL-T</code> <a name="%2F_CTRL-T"></a><code class="help-tag">/_CTRL-T</code>
CTRL-T		When <a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a> is set, entering a search pattern for "/" or
		"?" and the current match is displayed then <code>CTRL-T</code> will move
		to the previous match (does not take <a href="/neovim-docs-web/en/pattern#search-offset">search-offset</a> into
		account).
		Use <code>CTRL-G</code> to move to the next match.  Hint: on a regular
		keyboard T is above G.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> option defaults to <code>&lt;Tab&gt;</code> (<code>CTRL-E</code> when in Vi compatible mode; in
a previous version <code>&lt;Esc&gt;</code> was used).  In the pattern standard wildcards '' and
'?' are accepted when matching file names.  '' matches any string, '?'
matches exactly one character.</div>
<div class="old-help-para">When repeating <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> or <code>CTRL-N</code> you cycle through the matches, eventually
ending up back to what was typed.  If the first match is not what you wanted,
you can use <code>&lt;S-Tab&gt;</code> or <code>CTRL-P</code> to go straight back to what you typed.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'wildignorecase'">'wildignorecase'</a> option can be set to ignore case in filenames.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'wildmenu'">'wildmenu'</a> option can be set to show the matches just above the command
line.</div>
<div class="old-help-para">If you like tcsh's autolist completion, you can use this mapping:
	:cnoremap X <code>&lt;C-L&gt;</code><code>&lt;C-D&gt;</code>
(Where X is the command key to use, <code>&lt;C-L&gt;</code> is <code>CTRL-L</code> and <code>&lt;C-D&gt;</code> is <code>CTRL-D</code>)
This will find the longest match and then list all matching files.</div>
<div class="old-help-para">If you like tcsh's autolist completion, you can use the <a href="/neovim-docs-web/en/options#'wildmode'">'wildmode'</a> option to
emulate it.  For example, this mimics autolist=ambiguous:
	:set wildmode=longest,list
This will find the longest match with the first <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a>, then list all
matching files with the next.</div>
<div class="old-help-para">					<a name="complete-script-local-functions"></a><code class="help-tag-right">complete-script-local-functions</code>
When completing user function names, prepend "s:" to find script-local
functions.</div>
<div class="old-help-para">							<a name="suffixes"></a><code class="help-tag-right">suffixes</code>
For file name completion you can use the <a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> option to set a priority
between files with almost the same name.  If there are multiple matches,
those files with an extension that is in the <a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> option are ignored.
The default is ".bak,~,.o,.h,.info,.swp,.obj", which means that files ending
in ".bak", "~", ".o", ".h", ".info", ".swp" and ".obj" are sometimes ignored.</div>
<div class="old-help-para">An empty entry, two consecutive commas, match a file name that does not
contain a ".", thus has no suffix.  This is useful to ignore "prog" and prefer
"prog.c".</div>
<div class="old-help-para">Examples:</div>
<div class="old-help-para"><div class="help-column_heading">  pattern:	files:				match:</div>   test*	test.c test.h test.o		test.c
   test*	test.h test.o			test.h and test.o
   test*	test.i test.h test.c		test.i and test.c</div>
<div class="old-help-para">It is impossible to ignore suffixes with two dots.</div>
<div class="old-help-para">If there is more than one matching file (after ignoring the ones matching
the <a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> option) the first file name is inserted.  You can see that
there is only one match when you type <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> twice and the completed
match stays the same.  You can get to the other matches by entering
<a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a>, <code>CTRL-N</code> or <code>CTRL-P</code>.  All files are included, also the ones with
extensions matching the <a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> option.</div>
<div class="old-help-para">To completely ignore files with some extension use <a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a>.</div>
<div class="old-help-para">To match only files that end at the end of the typed text append a "$".  For
example, to match only files that end in ".c":<pre>:e *.c$</pre>
This will not match a file ending in ".cpp".  Without the "$" it does match.</div>
<div class="old-help-para">The old value of an option can be obtained by hitting <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> just after
the '='.  For example, typing <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> after ":set dir=" will insert the
current value of <a href="/neovim-docs-web/en/options#'dir'">'dir'</a>.  This overrules file name completion for the options
that take a file name.</div>
<div class="old-help-para">If you would like using <code>&lt;S-Tab&gt;</code> for <code>CTRL-P</code> in an xterm, put this command in
your .cshrc:<pre>xmodmap -e "keysym Tab = Tab Find"</pre>
And this in your vimrc:<pre>:cmap &lt;Esc&gt;[1~ &lt;C-P&gt;</pre>
<h2 class="help-heading">3. Ex command-lines<span class="help-heading-tags">					<a name="cmdline-lines"></a><span class="help-tag">cmdline-lines</span></span></h2></div>
<div class="old-help-para">The Ex commands have a few specialties:</div>
<div class="old-help-para">							<a name="%3Aquote"></a><code class="help-tag-right">:quote</code> <a name="%3Acomment"></a><code class="help-tag">:comment</code>
'"' at the start of a line causes the whole line to be ignored.  '"'
after a command causes the rest of the line to be ignored.  This can be used
to add comments.  Example:<pre>:set ai                "set 'autoindent' option</pre>
It is not possible to add a comment to a shell command ":!cmd" or to the
":map" command and a few others (mainly commands that expect expressions)
that see the '"' as part of their argument:</div>
<div class="old-help-para">    :argdo
    :autocmd
    :bufdo
    :cexpr (and the like)
    :cdo (and the like)
    :command
    :debug
    :display
    :echo (and the like)
    :elseif
    :execute
    :folddoopen
    :folddoclosed
    :for
    :grep (and the like)
    :help (and the like)
    :if
    :let
    :make
    :map (and the like including :abbrev commands)
    :menu (and the like)
    :mkspell
    :normal
    :ownsyntax
    :popup
    :registers
    :return
    :sort
    :syntax
    :tabdo
    :tearoff
    :vimgrep (and the like)
    :while
    :windo</div>
<div class="old-help-para">							<a name="%3Abar"></a><code class="help-tag-right">:bar</code> <a name="%3A%5Cbar"></a><code class="help-tag">:\bar</code>
'|' can be used to separate commands, so you can give multiple commands in one
line.  If you want to use '|' in an argument, precede it with '\'.</div>
<div class="old-help-para">These commands see the '|' as their argument, and can therefore not be
followed by another Vim command:
    :argdo
    :autocmd
    :bufdo
    :cdo
    :cfdo
    :command
    :debug
    :eval
    :folddoopen
    :folddoclosed
    :function
    :global
    :help
    :helpgrep
    :ldo
    :lfdo
    :lhelpgrep
    :make
    :normal
    :perlfile
    :pyfile
    :python
    :registers
    :read !
    :sign
    :terminal
    :vglobal
    :windo
    :write !
    :[range]!
    a user defined command without the "-bar" argument <a href="/neovim-docs-web/en/map#%3Acommand">:command</a></div>
<div class="old-help-para">Note that this is confusing (inherited from Vi): With ":g" the '|' is included
in the command, with ":s" it is not.</div>
<div class="old-help-para">To be able to use another command anyway, use the ":execute" command.
Example (append the output of "ls" and jump to the first line):<pre>:execute 'r !ls' | '[</pre>
There is one exception: When the 'b' flag is present in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>, with the
":map" and ":abbr" commands and friends <code>CTRL-V</code> needs to be used instead of
'\'.  You can also use "&lt;Bar&gt;" instead.  See also <a href="/neovim-docs-web/en/map#map_bar">map_bar</a>.</div>
<div class="old-help-para">Examples:<pre>:!ls | wc                view the output of two commands
:r !ls | wc                insert the same output in the text
:%g/foo/p|&gt;                moves all matching lines one shiftwidth
:%s/foo/bar/|&gt;                moves one line one shiftwidth
:map q 10^V|                map "q" to "10|"
:map q 10\| map \ l        map "q" to "10\" and map "\" to "l"
                                (when 'b' is present in 'cpoptions')</pre>
You can also use <code>&lt;NL&gt;</code> to separate commands in the same way as with '|'.  To
insert a <code>&lt;NL&gt;</code> use <code>CTRL-V</code> <code>CTRL-J</code>.  "^@" will be shown.  Using '|' is the
preferred method.  But for external commands a <code>&lt;NL&gt;</code> must be used, because a
'|' is included in the external command.  To avoid the special meaning of <code>&lt;NL&gt;</code>
it must be preceded with a backslash.  Example:<pre>:r !date&lt;NL&gt;-join</pre>
This reads the current date into the file and joins it with the previous line.</div>
<div class="old-help-para">Note that when the command before the '|' generates an error, the following
commands will not be executed.</div>
<div class="old-help-para">Because of Vi compatibility the following strange commands are supported:<pre>:|                        print current line (like ":p")
:3|                        print line 3 (like ":3p")
:3                        goto line 3</pre>
A colon is allowed between the range and the command name.  It is ignored
(this is Vi compatible).  For example:<pre>:1,$:s/pat/string</pre>
When the character '%' or '#' is used where a file name is expected, they are
expanded to the current and alternate file name (see the chapter "editing
files" <a href="/neovim-docs-web/en/cmdline#%3A_%25">:_%</a> <a href="/neovim-docs-web/en/cmdline#%3A_%23">:_#</a>).</div>
<div class="old-help-para">Trailing spaces in filenames will be ignored, unless escaped with a backslash
or <code>CTRL-V</code>.  Note that the ":next" command uses spaces to separate file names.
Escape the spaces to include them in a file name.  Example:<pre>:next foo\ bar goes\ to school\</pre>
starts editing the three files "foo bar", "goes to" and "school ".</div>
<div class="old-help-para">When you want to use the special characters '"' or '|' in a command, or want
to use '%' or '#' in a file name, precede them with a backslash.  The
backslash is not required in a range and in the ":substitute" command.
See also <a href="/neovim-docs-web/en/editing#%60%3D">`=</a>.</div>
<div class="old-help-para">							<a name="%3A_%21"></a><code class="help-tag-right">:_!</code>
The '!' (bang) character after an Ex command makes the command behave in a
different way.  The '!' should be placed immediately after the command, without
any blanks in between.  If you insert blanks the '!' will be seen as an
argument for the command, which has a different meaning.  For example:
	:w! name	write the current buffer to file "name", overwriting
			any existing file
	:w !name	send the current buffer as standard input to command
			"name"</div>
<div class="old-help-para"><h2 class="help-heading">4. Ex command-line ranges<span class="help-heading-tags">	<a name="cmdline-ranges"></a><span class="help-tag">cmdline-ranges</span> <a name="%5Brange%5D"></a><span class="help-tag">[range]</span> <a name="E16"></a><span class="help-tag">E16</span></span></h2></div>
<div class="old-help-para">Some Ex commands accept a line range in front of them.  This is noted as
[range].  It consists of one or more line specifiers, separated with ',' or
';'.</div>
<div class="old-help-para">The basics are explained in section <a href="/neovim-docs-web/en/usr_10#10.3">10.3</a> of the user manual.</div>
<div class="old-help-para">						<a name="%3A%2C"></a><code class="help-tag-right">:,</code> <a name="%3A%3B"></a><code class="help-tag">:;</code>
When separated with ';' the cursor position will be set to that line
before interpreting the next line specifier.  This doesn't happen for ','.
Examples:<pre>4,/this line/</pre></div>
<div class="old-help-para">	from line 4 till match with "this line" after the cursor line.<pre>5;/that line/</pre></div>
<div class="old-help-para">	from line 5 till match with "that line" after line 5.</div>
<div class="old-help-para">The default line specifier for most commands is the cursor position, but the
commands ":write" and ":global" have the whole file (1,$) as default.</div>
<div class="old-help-para">If more line specifiers are given than required for the command, the first
one(s) will be ignored.</div>
<div class="old-help-para">Line numbers may be specified with:		<a name="%3Arange"></a><code class="help-tag-right">:range</code> <a name="%7Baddress%7D"></a><code class="help-tag">{address}</code>
	<code>{number}</code>	an absolute line number  <a name="E1247"></a><code class="help-tag">E1247</code>
	.		the current line			  <a name="%3A."></a><code class="help-tag-right">:.</code>
	$		the last line in the file		  <a name="%3A%24"></a><code class="help-tag-right">:$</code>
	%		equal to 1,$ (the entire file)		  <a name="%3A%25"></a><code class="help-tag-right">:%</code>
	't		position of mark t (lowercase)		  <a name="%3A'"></a><code class="help-tag-right">:'</code>
	'T		position of mark T (uppercase); when the mark is in
			another file it cannot be used in a range
	/{pattern}[/]	the next line where <code>{pattern}</code> matches	  <a name="%3A%2F"></a><code class="help-tag-right">:/</code>
				also see <a href="/neovim-docs-web/en/cmdline#%3Arange-pattern">:range-pattern</a> below
	?{pattern}[?]	the previous line where <code>{pattern}</code> matches <a name="%3A%3F"></a><code class="help-tag">:?</code>
				also see <a href="/neovim-docs-web/en/cmdline#%3Arange-pattern">:range-pattern</a> below
	\/		the next line where the previously used search
			pattern matches
	\?		the previous line where the previously used search
			pattern matches
	\&amp;		the next line where the previously used substitute
			pattern matches</div>
<div class="old-help-para">						<a name="%3Arange-offset"></a><code class="help-tag-right">:range-offset</code>
Each may be followed (several times) by '+' or '-' and an optional number.
This number is added or subtracted from the preceding line number.  If the
number is omitted, 1 is used.  If there is nothing before the '+' or '-' then
the current line is used.
						<a name="%3Arange-closed-fold"></a><code class="help-tag-right">:range-closed-fold</code>
When a line number after the comma is in a closed fold it is adjusted to the
last line of the fold, thus the whole fold is included.</div>
<div class="old-help-para">When a number is added this is done after the adjustment to the last line of
the fold.  This means these lines are additionally included in the range.  For
example:<pre>:3,4+2print</pre>
On this text:
<div class="help-column_heading">	1 one</div><div class="help-column_heading">	2 two</div><div class="help-column_heading">	3 three</div><div class="help-column_heading">	4 four FOLDED</div><div class="help-column_heading">	5 five FOLDED</div><div class="help-column_heading">	6 six</div><div class="help-column_heading">	7 seven</div><div class="help-column_heading">	8 eight</div>Where lines four and five are a closed fold, ends up printing lines 3 to 7.
The 7 comes from the "4" in the range, which is adjusted to the end of the
closed fold, which is 5, and then the offset 2 is added.</div>
<div class="old-help-para">An example for subtracting (which isn't very useful):<pre>:2,4-1print</pre>
On this text:
<div class="help-column_heading">	1 one</div><div class="help-column_heading">	2 two</div>	3 three FOLDED~
<div class="help-column_heading">	4 four FOLDED</div><div class="help-column_heading">	5 five FOLDED</div><div class="help-column_heading">	6 six FOLDED</div><div class="help-column_heading">	7 seven</div><div class="help-column_heading">	8 eight</div>Where lines three to six are a closed fold, ends up printing lines 2 to 6.
The 6 comes from the "4" in the range, which is adjusted to the end of the
closed fold, which is 6, and then 1 is subtracted, then this is still in the
closed fold and the last line of that fold is used, which is 6.</div>
<div class="old-help-para">							<a name="%3Arange-pattern"></a><code class="help-tag-right">:range-pattern</code>
The "/" and "?" after <code>{pattern}</code> are required to separate the pattern from
anything that follows.</div>
<div class="old-help-para">The "/" and "?" may be preceded with another address.  The search starts from
there.  The difference from using ';' is that the cursor isn't moved.
Examples:<pre>/pat1//pat2/        Find line containing "pat2" after line containing
                "pat1", without moving the cursor.
7;/pat2/        Find line containing "pat2", after line 7, leaving
                the cursor in line 7.</pre>
The <code>{number}</code> must be between 0 and the number of lines in the file.  When
using a 0 (zero) this is interpreted as a 1 by most commands.  Commands that
use it as a count do use it as a zero (<a href="/neovim-docs-web/en/tagsrch#%3Atag">:tag</a>, <a href="/neovim-docs-web/en/tagsrch#%3Apop">:pop</a>, etc).  Some commands
interpret the zero as "before the first line" (<a href="/neovim-docs-web/en/insert#%3Aread">:read</a>, search pattern, etc).</div>
<div class="old-help-para">Examples:<pre>.+3                three lines below the cursor
/that/+1        the line below the next line containing "that"
.,$                from current line until end of file
0;/that                the first line containing "that", also matches in the
                first line.
1;/that                the first line after line 1 containing "that"</pre>
Some commands allow for a count after the command.  This count is used as the
number of lines to be used, starting with the line given in the last line
specifier (the default is the cursor line).  The commands that accept a count
are the ones that use a range but do not have a file name argument (because
a file name can also be a number).  The count cannot be negative.</div>
<div class="old-help-para">Examples:<pre>:s/x/X/g 5        substitute 'x' by 'X' in the current line and four
                following lines
:23d 4                delete lines 23, 24, 25 and 26</pre>
Folds and Range</div>
<div class="old-help-para">When folds are active the line numbers are rounded off to include the whole
closed fold.  See <a href="/neovim-docs-web/en/fold#fold-behavior">fold-behavior</a>.</div>
<div class="old-help-para">Reverse Range						<a name="E493"></a><code class="help-tag-right">E493</code></div>
<div class="old-help-para">A range should have the lower line number first.  If this is not the case, Vim
will ask you if it should swap the line numbers.
<div class="help-column_heading">	Backwards range given, OK to swap</div>This is not done within the global command ":g".</div>
<div class="old-help-para">You can use ":silent" before a command to avoid the question, the range will
always be swapped then.</div>
<div class="old-help-para">Count and Range						<a name="N%3A"></a><code class="help-tag-right">N:</code></div>
<div class="old-help-para">When giving a count before entering ":", this is translated into:<pre>:.,.+(count - 1)</pre>
In words: The "count" lines at and after the cursor.  Example: To delete
three lines:<pre>3:d&lt;CR&gt;                is translated into: .,.+2d&lt;CR&gt;</pre></div>
<div class="old-help-para">Visual Mode and Range
							<a name="v_%3A"></a><code class="help-tag-right">v_:</code>
<code>{Visual}</code>:	Starts a command-line with the Visual selected lines as a
		range.  The code <code>:'&lt;,'&gt;</code> is used for this range, which makes
		it possible to select a similar line from the command-line
		history for repeating a command on different Visually selected
		lines.</div>
<div class="old-help-para">:*						<a name="%3Astar"></a><code class="help-tag-right">:star</code> <a name="%3Astar-visual-range"></a><code class="help-tag">:star-visual-range</code>
		When Visual mode was already ended, a short way to use the
		Visual area for a range is <code>:*</code>.</div>
<div class="old-help-para"><h2 class="help-heading">5. Ex command-line flags<span class="help-heading-tags">				<a name="ex-flags"></a><span class="help-tag">ex-flags</span></span></h2></div>
<div class="old-help-para">These flags are supported by a selection of Ex commands.  They print the line
that the cursor ends up after executing the command:</div>
<div class="old-help-para">	l	output like for <a href="/neovim-docs-web/en/various#%3Alist">:list</a>
	#	add line number
	p	output like for <a href="/neovim-docs-web/en/various#%3Aprint">:print</a></div>
<div class="old-help-para">The flags can be combined, thus "l#" uses both a line number and <a href="/neovim-docs-web/en/various#%3Alist">:list</a> style
output.</div>
<div class="old-help-para"><h2 class="help-heading">6. Ex special characters<span class="help-heading-tags">				<a name="cmdline-special"></a><span class="help-tag">cmdline-special</span></span></h2></div>
<div class="old-help-para">Note: These are special characters in the executed command line.  If you want
to insert special things while typing you can use the <code>CTRL-R</code> command.  For
example, "%" stands for the current file name, while <code>CTRL-R</code> % inserts the
current file name right away.  See <a href="/neovim-docs-web/en/cmdline#c_CTRL-R">c_CTRL-R</a>.</div>
<div class="old-help-para">Note:  If you want to avoid the effects of special characters in a Vim script
you may want to use <a href="/neovim-docs-web/en/builtin#fnameescape()">fnameescape()</a>.  Also see <a href="/neovim-docs-web/en/editing#%60%3D">`=</a>.</div>
<div class="old-help-para">In Ex commands, at places where a file name can be used, the following
characters have a special meaning.  These can also be used in the expression
function <a href="/neovim-docs-web/en/builtin#expand()">expand()</a>.
	%	Is replaced with the current file name.		  <a name="%3A_%25"></a><code class="help-tag-right">:_%</code> <a name="c_%25"></a><code class="help-tag">c_%</code>
	#	Is replaced with the alternate file name.	  <a name="%3A_%23"></a><code class="help-tag-right">:_#</code> <a name="c_%23"></a><code class="help-tag">c_#</code>
		This is remembered for every window.
	#n	(where n is a number) is replaced with		  <a name="%3A_%230"></a><code class="help-tag-right">:_#0</code> <a name="%3A_%23n"></a><code class="help-tag">:_#n</code>
		the file name of buffer n.  "#0" is the same as "#".     <a name="c_%23n"></a><code class="help-tag">c_#n</code>
	##	Is replaced with all names in the argument list	  <a name="%3A_%23%23"></a><code class="help-tag-right">:_##</code> <a name="c_%23%23"></a><code class="help-tag">c_##</code>
		concatenated, separated by spaces.  Each space in a name
		is preceded with a backslash.
	#&lt;n	(where n is a number &gt; 0) is replaced with old	  <a name="%3A_%23%3C"></a><code class="help-tag-right">:_#&lt;</code> <a name="c_%23%3C"></a><code class="help-tag">c_#&lt;</code>
		file name n.  See <a href="/neovim-docs-web/en/starting#%3Aoldfiles">:oldfiles</a> or <a href="/neovim-docs-web/en/eval#v%3Aoldfiles">v:oldfiles</a> to get the
		number.							<a name="E809"></a><code class="help-tag-right">E809</code></div>
<div class="old-help-para">Note that these, except "#&lt;n", give the file name as it was typed.  If an
absolute path is needed (when using the file name from a different directory),
you need to add ":p".  See <a href="/neovim-docs-web/en/cmdline#filename-modifiers">filename-modifiers</a>.</div>
<div class="old-help-para">The "#&lt;n" item returns an absolute path, but it will start with "~/" for files
below your home directory.</div>
<div class="old-help-para">Note that backslashes are inserted before spaces, so that the command will
correctly interpret the file name.  But this doesn't happen for shell
commands.  For those you probably have to use quotes (this fails for files
that contain a quote and wildcards):<pre>:!ls "%"
:r !spell "%"</pre>
To avoid the special meaning of '%' and '#' insert a backslash before it.
Detail: The special meaning is always escaped when there is a backslash before
it, no matter how many backslashes.
<div class="help-column_heading">	you type:		result</div>	   #			alternate.file
	   \#			#
	   \\#			\#
Also see <a href="/neovim-docs-web/en/editing#%60%3D">`=</a>.</div>
<div class="old-help-para">							<a name="E499"></a><code class="help-tag-right">E499</code> <a name="E500"></a><code class="help-tag">E500</code>
Note: these are typed literally, they are not special keys!
							<a name="%3A%3Ccword%3E"></a><code class="help-tag-right">:&lt;cword&gt;</code> <a name="%3Ccword%3E"></a><code class="help-tag">&lt;cword&gt;</code>
	<code>&lt;cword&gt;</code>    is replaced with the word under the cursor (like <a href="/neovim-docs-web/en/pattern#star">star</a>)
							<a name="%3A%3CcWORD%3E"></a><code class="help-tag-right">:&lt;cWORD&gt;</code> <a name="%3CcWORD%3E"></a><code class="help-tag">&lt;cWORD&gt;</code>
	<code>&lt;cWORD&gt;</code>    is replaced with the WORD under the cursor (see <a href="/neovim-docs-web/en/motion#WORD">WORD</a>)
							<a name="%3A%3Ccexpr%3E"></a><code class="help-tag-right">:&lt;cexpr&gt;</code> <a name="%3Ccexpr%3E"></a><code class="help-tag">&lt;cexpr&gt;</code>
	<code>&lt;cexpr&gt;</code>    is replaced with the word under the cursor, including more
		   to form a C expression.  E.g., when the cursor is on "arg"
		   of "ptr-&gt;arg" then the result is "ptr-&gt;arg"; when the
		   cursor is on "]" of "list[idx]" then the result is
		   "list[idx]".  This is used for <a href="/neovim-docs-web/en/eval#v%3Abeval_text">v:beval_text</a>.
							<a name="%3A%3Ccfile%3E"></a><code class="help-tag-right">:&lt;cfile&gt;</code> <a name="%3Ccfile%3E"></a><code class="help-tag">&lt;cfile&gt;</code>
	<code>&lt;cfile&gt;</code>    is replaced with the path name under the cursor (like what
		   <a href="/neovim-docs-web/en/editing#gf">gf</a> uses)
							<a name="%3A%3Cafile%3E"></a><code class="help-tag-right">:&lt;afile&gt;</code> <a name="%3Cafile%3E"></a><code class="help-tag">&lt;afile&gt;</code>
	<code>&lt;afile&gt;</code>    When executing autocommands, is replaced with the file name
		   of the buffer being manipulated, or the file for a read or
		   write.  <a name="E495"></a><code class="help-tag">E495</code>
							<a name="%3A%3Cabuf%3E"></a><code class="help-tag-right">:&lt;abuf&gt;</code> <a name="%3Cabuf%3E"></a><code class="help-tag">&lt;abuf&gt;</code>
	<code>&lt;abuf&gt;</code>     When executing autocommands, is replaced with the currently
		   effective buffer number (for ":r file" and ":so file" it is
		   the current buffer, the file being read/sourced is not in a
		   buffer).  <a name="E496"></a><code class="help-tag">E496</code>
							<a name="%3A%3Camatch%3E"></a><code class="help-tag-right">:&lt;amatch&gt;</code> <a name="%3Camatch%3E"></a><code class="help-tag">&lt;amatch&gt;</code>
	<code>&lt;amatch&gt;</code>   When executing autocommands, is replaced with the match for
		   which this autocommand was executed.  <a name="E497"></a><code class="help-tag">E497</code>
		   It differs from <code>&lt;afile&gt;</code> when the file name isn't used to
		   match with (for FileType, Syntax and SpellFileMissing
		   events).
		   When the match is with a file name, it is expanded to the
		   full path.
							<a name="%3A%3Csfile%3E"></a><code class="help-tag-right">:&lt;sfile&gt;</code> <a name="%3Csfile%3E"></a><code class="help-tag">&lt;sfile&gt;</code>
	<code>&lt;sfile&gt;</code>    When executing a <code>:source</code> command, is replaced with the
		   file name of the sourced file.  <a name="E498"></a><code class="help-tag">E498</code>
		   When executing a function, is replaced with the call stack,
		   as with <code>&lt;stack&gt;</code> (this is for backwards compatibility, using
		   <code>&lt;stack&gt;</code> or <code>&lt;script&gt;</code> is preferred).
		   Note that filename-modifiers are useless when <code>&lt;sfile&gt;</code> is
		   not used inside a script.
							<a name="%3A%3Cstack%3E"></a><code class="help-tag-right">:&lt;stack&gt;</code> <a name="%3Cstack%3E"></a><code class="help-tag">&lt;stack&gt;</code>
	<code>&lt;stack&gt;</code>	   is replaced with the call stack, using
		   "function <code>{function-name}</code>[{lnum}]" for a function line
		   and "script <code>{file-name}</code>[{lnum}]" for a script line, and
		   ".." in between items.  E.g.:
		   "function <code>{function-name1}</code>[{lnum}]..{function-name2}[{lnum}]"
		   If there is no call stack you get error <a name="E489"></a><code class="help-tag">E489</code> .
							<a name="%3A%3Cscript%3E"></a><code class="help-tag-right">:&lt;script&gt;</code> <a name="%3Cscript%3E"></a><code class="help-tag">&lt;script&gt;</code>
	<code>&lt;script&gt;</code>   When executing a <code>:source</code> command, is replaced with the file
		   name of the sourced file.  When executing a function, is
		   replaced with the file name of the script where it is
		   defined.
		   If the file name cannot be determined you get error <a name="E1274"></a><code class="help-tag">E1274</code> .
							<a name="%3A%3Cslnum%3E"></a><code class="help-tag-right">:&lt;slnum&gt;</code> <a name="%3Cslnum%3E"></a><code class="help-tag">&lt;slnum&gt;</code>
	<code>&lt;slnum&gt;</code>	   When executing a <code>:source</code> command, is replaced with the
		   line number.  <a name="E842"></a><code class="help-tag">E842</code>
		   When executing a function it's the line number relative to
		   the start of the function.
							<a name="%3A%3Csflnum%3E"></a><code class="help-tag-right">:&lt;sflnum&gt;</code> <a name="%3Csflnum%3E"></a><code class="help-tag">&lt;sflnum&gt;</code>
	<code>&lt;sflnum&gt;</code>   When executing a script, is replaced with the line number.
		   It differs from <code>&lt;slnum&gt;</code> in that <code>&lt;sflnum&gt;</code> is replaced with
		   the script line number in any situation.  <a name="E961"></a><code class="help-tag">E961</code></div>
<div class="old-help-para">							 <a name="filename-modifiers"></a><code class="help-tag-right">filename-modifiers</code>
<a name="%3A_%25%3A"></a><code class="help-tag">:_%:</code> <a name="%3A%3A8"></a><code class="help-tag">::8</code> <a name="%3A%3Ap"></a><code class="help-tag">::p</code> <a name="%3A%3A."></a><code class="help-tag">::.</code> <a name="%3A%3A~"></a><code class="help-tag">::~</code> <a name="%3A%3Ah"></a><code class="help-tag">::h</code> <a name="%3A%3At"></a><code class="help-tag">::t</code> <a name="%3A%3Ar"></a><code class="help-tag">::r</code> <a name="%3A%3Ae"></a><code class="help-tag">::e</code> <a name="%3A%3As"></a><code class="help-tag">::s</code> <a name="%3A%3Ags"></a><code class="help-tag">::gs</code> <a name="%3A%3AS"></a><code class="help-tag">::S</code>
     <a name="%25%3A8"></a><code class="help-tag">%:8</code> <a name="%25%3Ap"></a><code class="help-tag">%:p</code> <a name="%25%3A."></a><code class="help-tag">%:.</code> <a name="%25%3A~"></a><code class="help-tag">%:~</code> <a name="%25%3Ah"></a><code class="help-tag">%:h</code> <a name="%25%3At"></a><code class="help-tag">%:t</code> <a name="%25%3Ar"></a><code class="help-tag">%:r</code> <a name="%25%3Ae"></a><code class="help-tag">%:e</code> <a name="%25%3As"></a><code class="help-tag">%:s</code> <a name="%25%3Ags"></a><code class="help-tag">%:gs</code> <a name="%25%3AS"></a><code class="help-tag">%:S</code>
The file name modifiers can be used after "%", "#", "#n", "&lt;cfile&gt;", "&lt;sfile&gt;",
"&lt;afile&gt;" or "&lt;abuf&gt;".  They are also used with the <a href="/neovim-docs-web/en/builtin#fnamemodify()">fnamemodify()</a> function.
These modifiers can be given, in this order:
	:p	Make file name a full path.  Must be the first modifier.  Also
		changes "~/" (and "~user/" for Unix) to the path for the home
		directory.  If the name is a directory a path separator is
		added at the end.  For a file name that does not exist and
		does not have an absolute path the result is unpredictable.
		On MS-Windows an 8.3 filename is expanded to the long name.
	:8	Converts the path to 8.3 short format (currently only on
		MS-Windows).  Will act on as much of a path that is an
		existing path.
	:~	Reduce file name to be relative to the home directory, if
		possible.  File name is unmodified if it is not below the home
		directory.
	:.	Reduce file name to be relative to current directory, if
		possible.  File name is unmodified if it is not below the
		current directory.
		For maximum shortness, use ":~:.".
	:h	Head of the file name (the last component and any separators
		removed).  Cannot be used with :e, :r or :t.
		Can be repeated to remove several components at the end.
		When the file name ends in a path separator, only the path
		separator is removed.  Thus ":p:h" on a directory name results
		on the directory name itself (without trailing slash).
		When the file name is an absolute path (starts with "/" for
		Unix; "x:\" for Win32), that part is not removed.
		When there is no head (path is relative to current directory)
		the result is empty.
	:t	Tail of the file name (last component of the name).  Must
		precede any :r or :e.
	:r	Root of the file name (the last extension removed).  When
		there is only an extension (file name that starts with '.',
		e.g., ".nvimrc"), it is not removed.  Can be repeated to
		remove several extensions (last one first).
	:e	Extension of the file name.  Only makes sense when used alone.
		When there is no extension the result is empty.
		When there is only an extension (file name that starts with
		'.'), the result is empty.  Can be repeated to include more
		extensions.  If there are not enough extensions (but at least
		one) as much as possible are included.
	:s?pat?sub?
		Substitute the first occurrence of "pat" with "sub".  This
		works like the <a href="/neovim-docs-web/en/change#%3As">:s</a> command.  "pat" is a regular expression.
		Any character can be used for '?', but it must not occur in
		"pat" or "sub".
		After this, the previous modifiers can be used again.  For
		example ":p", to make a full path after the substitution.
	:gs?pat?sub?
		Substitute all occurrences of "pat" with "sub".  Otherwise
		this works like ":s".
	:S	Escape special characters for use with a shell command (see
		<a href="/neovim-docs-web/en/builtin#shellescape()">shellescape()</a>). Must be the last one. Examples:<pre>:!dir &lt;cfile&gt;:S
:call system('chmod +w -- ' . expand('%:S'))</pre>
Examples, when the file name is "src/version.c", current dir
"/home/mool/vim":<pre>:p                        /home/mool/vim/src/version.c
:p:.                                       src/version.c
:p:~                                 ~/vim/src/version.c
:h                                       src
:p:h                        /home/mool/vim/src
:p:h:h                /home/mool/vim
:t                                           version.c
:p:t                                           version.c
:r                                       src/version
:p:r                        /home/mool/vim/src/version
:t:r                                           version
:e                                                   c
:s?version?main?                       src/main.c
:s?version?main?:p        /home/mool/vim/src/main.c
:p:gs?/?\\?                \home\mool\vim\src\version.c</pre>
Examples, when the file name is "src/version.c.gz":<pre>:p                        /home/mool/vim/src/version.c.gz
:e                                                     gz
:e:e                                                   c.gz
:e:e:e                                           c.gz
:e:e:r                                           c
:r                                       src/version.c
:r:e                                                   c
:r:r                                       src/version
:r:r:r                               src/version</pre></div>
<div class="old-help-para">					<a name="extension-removal"></a><code class="help-tag-right">extension-removal</code> <a name="%3A_%25%3C"></a><code class="help-tag">:_%&lt;</code>
If a "&lt;" is appended to "%", "#", "#n" or "CTRL-V p" the extension of the file
name is removed (everything after and including the last '.' in the file
name).  This is included for backwards compatibility with version 3.0, the
":r" form is preferred.  Examples:<pre>%                current file name
%&lt;                current file name without extension
#                alternate file name for current window
#&lt;                idem, without extension
#31                alternate file number 31
#31&lt;                idem, without extension
&lt;cword&gt;                word under the cursor
&lt;cWORD&gt;                WORD under the cursor (see |WORD|)
&lt;cfile&gt;                path name under the cursor
&lt;cfile&gt;&lt;        idem, without extension</pre>
Note: Where a file name is expected wildcards expansion is done.  On Unix the
shell is used for this, unless it can be done internally (for speed).
Backticks work also, like in<pre>:n `echo *.c`</pre>
But expansion is only done if there are any wildcards before expanding the
'%', '#', etc..  This avoids expanding wildcards inside a file name.  If you
want to expand the result of <code>&lt;cfile&gt;</code>, add a wildcard character to it.
Examples: (alternate file name is "?readme?")
<div class="help-column_heading">	command		expands to</div>	:e #		:e ?readme?
	:e <code>ls #</code>  	:e <code>{files matching "?readme?"}</code>
	:e #.*		:e <code>{files matching "?readme?.*"}</code>
	:cd <code>&lt;cfile&gt;</code>	:cd <code>{file name under cursor}</code>
	:cd <code>&lt;cfile&gt;</code>*	:cd <code>{file name under cursor plus "*" and then expanded}</code>
Also see <a href="/neovim-docs-web/en/editing#%60%3D">`=</a>.</div>
<div class="old-help-para">When the expanded argument contains a "!" and it is used for a shell command
(":!cmd", ":r !cmd" or ":w !cmd"), the "!" is escaped with a backslash to
avoid it being expanded into a previously used command.  When the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a>
option contains "sh", this is done twice, to avoid the shell trying to expand
the "!".</div>
<div class="old-help-para">							<a name="filename-backslash"></a><code class="help-tag-right">filename-backslash</code>
For filesystems that use a backslash as directory separator (Windows
filesystems), it's a bit difficult to recognize a backslash that is used
to escape the special meaning of the next character.  The general rule is: If
the backslash is followed by a normal file name character, it does not have a
special meaning.  Therefore "\file\foo" is a valid file name, you don't have
to type the backslash twice.</div>
<div class="old-help-para">An exception is the '$' sign.  It is a valid character in a file name.  But
to avoid a file name like "$home" to be interpreted as an environment variable,
it needs to be preceded by a backslash.  Therefore you need to use "/\$home"
for the file "$home" in the root directory.  A few examples:</div>
<div class="old-help-para"><div class="help-column_heading">	FILE NAME	INTERPRETED AS</div>	$home		expanded to value of environment var $home
	\$home		file "$home" in current directory
	/\$home		file "$home" in root directory
	\\$home		file "\\", followed by expanded $home</div>
<div class="old-help-para">Also see <a href="/neovim-docs-web/en/editing#%60%3D">`=</a>.</div>
<div class="old-help-para"><h2 class="help-heading">7. Command-line window<span class="help-heading-tags">				<a name="cmdline-window"></a><span class="help-tag">cmdline-window</span> <a name="cmdwin"></a><span class="help-tag">cmdwin</span></span></h2>							<a name="command-line-window"></a><code class="help-tag-right">command-line-window</code>
In the command-line window the command line can be edited just like editing
text in any window.  It is a special kind of window, because you cannot leave
it in a normal way.</div>
<div class="old-help-para"><h3 class="help-heading">OPEN<span class="help-heading-tags">						<a name="c_CTRL-F"></a><span class="help-tag">c_CTRL-F</span> <a name="q%3A"></a><span class="help-tag">q:</span> <a name="q%2F"></a><span class="help-tag">q/</span> <a name="q%3F"></a><span class="help-tag">q?</span></span></h3></div>
<div class="old-help-para">There are two ways to open the command-line window:
1. From Command-line mode, use the key specified with the <a href="/neovim-docs-web/en/options#'cedit'">'cedit'</a> option.
2. From Normal mode, use the "q:", "q/" or "q?" command.
   This starts editing an Ex command-line ("q:") or search string ("q/" or
   "q?").  Note that this is not possible while recording is in progress (the
   "q" stops recording then).</div>
<div class="old-help-para">When the window opens it is filled with the command-line history.  The last
line contains the command as typed so far.  The left column will show a
character that indicates the type of command-line being edited, see
<a href="/neovim-docs-web/en/cmdline#cmdwin-char">cmdwin-char</a>.</div>
<div class="old-help-para">Vim will be in Normal mode when the editor is opened.</div>
<div class="old-help-para">The height of the window is specified with <a href="/neovim-docs-web/en/options#'cmdwinheight'">'cmdwinheight'</a> (or smaller if there
is no room).  The window is always full width and is positioned just above the
command-line.</div>
<div class="old-help-para"><a name="_edit"></a><h3 class="help-heading">EDIT</h3></div>
<div class="old-help-para">You can now use commands to move around and edit the text in the window.  Both
in Normal mode and Insert mode.</div>
<div class="old-help-para">It is possible to use ":", "/" and other commands that use the command-line,
but it's not possible to open another command-line window then.  There is no
nesting.
							<a name="E11"></a><code class="help-tag-right">E11</code> <a name="E1188"></a><code class="help-tag">E1188</code>
The command-line window is not a normal window.  It is not possible to move to
another window or edit another buffer.  All commands that would do this are
disabled in the command-line window.  Of course it _is_ possible to execute
any command that you entered in the command-line window.  Other text edits are
discarded when closing the window.</div>
<div class="old-help-para"><h3 class="help-heading">CLOSE<span class="help-heading-tags">							<a name="E199"></a><span class="help-tag">E199</span></span></h3></div>
<div class="old-help-para">There are several ways to leave the command-line window:</div>
<div class="old-help-para"><code>&lt;CR&gt;</code>		Execute the command-line under the cursor.  Works both in
		Insert and in Normal mode.
CTRL-C		Continue in Command-line mode.  The command-line under the
		cursor is used as the command-line.  Works both in Insert and
		in Normal mode.  There is no redraw, thus the window will
		remain visible.
:quit		Discard the command line and go back to Normal mode.
		":close", <code>CTRL-W</code> c, ":exit", ":xit" and <code>CTRL-\</code> <code>CTRL-N</code> also
		work.
:qall		Quit Vim, unless there are changes in some buffer.
:qall!		Quit Vim, discarding changes to any buffer.</div>
<div class="old-help-para">Once the command-line window is closed the old window sizes are restored.  The
executed command applies to the window and buffer where the command-line was
started from.  This works as if the command-line window was not there, except
that there will be an extra screen redraw.
The buffer used for the command-line window is deleted.  Any changes to lines
other than the one that is executed with <code>&lt;CR&gt;</code> are lost.</div>
<div class="old-help-para">If you would like to execute the command under the cursor and then have the
command-line window open again, you may find this mapping useful:<pre>:autocmd CmdwinEnter * map &lt;buffer&gt; &lt;F5&gt; &lt;CR&gt;q:</pre>
<a name="_various"></a><h3 class="help-heading">VARIOUS</h3></div>
<div class="old-help-para">The command-line window cannot be used when there already is a command-line
window (no nesting).</div>
<div class="old-help-para">Some options are set when the command-line window is opened:
<a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a>	"vim", when editing an Ex command-line; this starts Vim syntax
		highlighting if it was enabled
<a href="/neovim-docs-web/en/options#'rightleft'">'rightleft'</a>	off
<a href="/neovim-docs-web/en/options#'modifiable'">'modifiable'</a>	on
<a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a>	"nofile"
<a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a>	off</div>
<div class="old-help-para">It is allowed to write the buffer contents to a file.  This is an easy way to
save the command-line history and read it back later.</div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> option is set to <code>&lt;Tab&gt;</code>, and the command-line window is used
for an Ex command, then two mappings will be added to use <code>&lt;Tab&gt;</code> for completion
in the command-line window, like this:<pre>:inoremap &lt;buffer&gt; &lt;Tab&gt; &lt;C-X&gt;&lt;C-V&gt;
:nnoremap &lt;buffer&gt; &lt;Tab&gt; a&lt;C-X&gt;&lt;C-V&gt;</pre>
Note that hitting <code>&lt;Tab&gt;</code> in Normal mode will do completion on the next
character.  That way it works at the end of the line.
If you don't want these mappings, disable them with:<pre>au CmdwinEnter [:&gt;] iunmap &lt;buffer&gt; &lt;Tab&gt;
au CmdwinEnter [:&gt;] nunmap &lt;buffer&gt; &lt;Tab&gt;</pre>
You could put these lines in your vimrc file.</div>
<div class="old-help-para">While in the command-line window you cannot use the mouse to put the cursor in
another window, or drag statuslines of other windows.  You can drag the
statusline of the command-line window itself and the statusline above it.
Thus you can resize the command-line window, but not others.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/builtin#getcmdwintype()">getcmdwintype()</a> function returns the type of the command-line being
edited as described in <a href="/neovim-docs-web/en/cmdline#cmdwin-char">cmdwin-char</a>.</div>
<div class="old-help-para">Nvim defines this default CmdWinEnter autocmd in the "nvim_cmdwin" group:<pre>autocmd CmdWinEnter [:&gt;] syntax sync minlines=1 maxlines=1</pre></div>
<div class="old-help-para">You can disable this in your config with "autocmd! nvim_cmdwin". <a href="/neovim-docs-web/en/vim_diff#default-autocmds">default-autocmds</a></div>
<div class="old-help-para"><a name="_autocommands"></a><h3 class="help-heading">AUTOCOMMANDS</h3></div>
<div class="old-help-para">Two autocommand events are used: <a href="/neovim-docs-web/en/autocmd#CmdwinEnter">CmdwinEnter</a> and <a href="/neovim-docs-web/en/autocmd#CmdwinLeave">CmdwinLeave</a>.  You can use
the Cmdwin events to do settings specifically for the command-line window.
Be careful not to cause side effects!
Example:<pre>:au CmdwinEnter :  let b:cpt_save = &amp;cpt | set cpt=.
:au CmdwinLeave :  let &amp;cpt = b:cpt_save</pre>
This sets <a href="/neovim-docs-web/en/options#'complete'">'complete'</a> to use completion in the current window for <a href="/neovim-docs-web/en/insert#i_CTRL-N">i_CTRL-N</a>.
Another example:<pre>:au CmdwinEnter [/?]  startinsert</pre>
This will make Vim start in Insert mode in the command-line window.</div>
<div class="old-help-para">					<a name="cmdline-char"></a><code class="help-tag-right">cmdline-char</code> <a name="cmdwin-char"></a><code class="help-tag">cmdwin-char</code>
The character used for the pattern indicates the type of command-line:
	:	normal Ex command
	&gt;	debug mode command <a href="/neovim-docs-web/en/repeat#debug-mode">debug-mode</a>
	/	forward search string
	?	backward search string
	=	expression for "= <a href="/neovim-docs-web/en/eval#expr-register">expr-register</a>
	@	string for <a href="/neovim-docs-web/en/builtin#input()">input()</a>
	-		text for <a href="/neovim-docs-web/en/insert#%3Ainsert">:insert</a> or <a href="/neovim-docs-web/en/insert#%3Aappend">:append</a></div>

  
  