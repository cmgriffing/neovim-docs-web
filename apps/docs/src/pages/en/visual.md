---
title:  Visual
layout: ../../layouts/MainLayout.astro
---

  <a name="visual.txt"></a><a name="Visual"></a><h1> Visual</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/visual.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Visual mode <a name="Visual-mode"></a><code class="help-tag">Visual-mode</code> <a name="visual-mode"></a><code class="help-tag">visual-mode</code></div>
<div class="old-help-para">Visual mode is a flexible and easy way to select a piece of text for an
operator.  It is the only way to select a block of text.</div>
<div class="old-help-para">This is introduced in section <a href="/neovim-docs-web/en/usr_04#04.4">04.4</a> of the user manual.</div>
<div class="old-help-para"><h2 class="help-heading">1. Using Visual mode<span class="help-heading-tags">					<a name="visual-use"></a><span class="help-tag">visual-use</span></span></h2></div>
<div class="old-help-para">Using Visual mode consists of three parts:
1. Mark the start of the text with "v", "V" or <code>CTRL-V</code>.
   The character under the cursor will be used as the start.
2. Move to the end of the text.
   The text from the start of the Visual mode up to and including the
   character under the cursor is highlighted.
3. Type an operator command.
   The highlighted characters will be operated upon.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/syntax#hl-Visual">hl-Visual</a> group determines the highlighting of the visual selection.
The <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> option can be used to allow positioning the cursor to
positions where there is no actual character.</div>
<div class="old-help-para">The highlighted text normally includes the character under the cursor.
However, when the <a href="/neovim-docs-web/en/options#'selection'">'selection'</a> option is set to "exclusive" and the cursor is
after the Visual area, the character under the cursor is not included.</div>
<div class="old-help-para">With "v" the text before the start position and after the end position will
not be highlighted.  However, all uppercase and non-alpha operators, except
"~" and "U", will work on whole lines anyway.  See the list of operators
below.</div>
<div class="old-help-para">							<a name="visual-block"></a><code class="help-tag-right">visual-block</code>
With <code>CTRL-V</code> (blockwise Visual mode) the highlighted text will be a rectangle
between start position and the cursor.  However, some operators work on whole
lines anyway (see the list below).  The change and substitute operators will
delete the highlighted text and then start insertion at the top left
position.</div>
<div class="old-help-para"><h2 class="help-heading">2. Starting and stopping Visual mode<span class="help-heading-tags">			<a name="visual-start"></a><span class="help-tag">visual-start</span></span></h2></div>
<div class="old-help-para">						<a name="v"></a><code class="help-tag-right">v</code> <a name="charwise-visual"></a><code class="help-tag">charwise-visual</code>
[count]v		Start Visual mode per character.
			With [count] select the same number of characters or
			lines as used for the last Visual operation, but at
			the current cursor position, multiplied by [count].
			When the previous Visual operation was on a block both
			the width and height of the block are multiplied by
			[count].
			When there was no previous Visual operation [count]
			characters are selected.  This is like moving the
			cursor right N * [count] characters.  One less when
			<a href="/neovim-docs-web/en/options#'selection'">'selection'</a> is not "exclusive".</div>
<div class="old-help-para">						<a name="V"></a><code class="help-tag-right">V</code> <a name="linewise-visual"></a><code class="help-tag">linewise-visual</code>
[count]V		Start Visual mode linewise.
			With [count] select the same number of lines as used
			for the last Visual operation, but at the current
			cursor position, multiplied by [count].  When there
			was no previous Visual operation [count] lines are
			selected.</div>
<div class="old-help-para">						<a name="CTRL-V"></a><code class="help-tag-right">CTRL-V</code> <a name="blockwise-visual"></a><code class="help-tag">blockwise-visual</code>
[count]CTRL-V		Start Visual mode blockwise.</div>
<div class="old-help-para">If you use <code>&lt;Esc&gt;</code>, click the left mouse button or use any command that
does a jump to another buffer while in Visual mode, the highlighting stops
and no text is affected.  Also when you hit "v" in charwise Visual mode,
"CTRL-V" in blockwise Visual mode or "V" in linewise Visual mode.  If you hit
CTRL-Z the highlighting stops and the editor is suspended or a new shell is
started <a href="/neovim-docs-web/en/starting#CTRL-Z">CTRL-Z</a>.</div>
<div class="old-help-para">	      new mode after typing:		<a name="v_v"></a><code class="help-tag-right">v_v</code> <a name="v_CTRL-V"></a><code class="help-tag">v_CTRL-V</code> <a name="v_V"></a><code class="help-tag">v_V</code>
<div class="help-column_heading">old mode	     "v"	      "CTRL-V"		     "V"</div></div>
<div class="old-help-para">Normal		    Visual	   blockwise Visual	  linewise Visual
Visual		    Normal	   blockwise Visual	  linewise Visual
blockwise Visual    Visual	   Normal		  linewise Visual
linewise Visual     Visual	   blockwise Visual	  Normal</div>
<div class="old-help-para">						<a name="gv"></a><code class="help-tag-right">gv</code> <a name="v_gv"></a><code class="help-tag">v_gv</code> <a name="reselect-Visual"></a><code class="help-tag">reselect-Visual</code>
gv			Start Visual mode with the same area as the previous
			area and the same mode.
			In Visual mode the current and the previous Visual
			area are exchanged.
			After using "p" or "P" in Visual mode the text that
			was put will be selected.</div>
<div class="old-help-para">								<a name="gn"></a><code class="help-tag-right">gn</code> <a name="v_gn"></a><code class="help-tag">v_gn</code>
gn			Search forward for the last used search pattern, like
			with <code>n</code>, and start Visual mode to select the match.
			If the cursor is on the match, visually selects it.
			If an operator is pending, operates on the match.
			E.g., "dgn" deletes the text of the next match.
			If Visual mode is active, extends the selection
			until the end of the next match.
			<a href="/neovim-docs-web/en/options#'wrapscan'">'wrapscan'</a> applies.
			Note: Unlike <code>n</code> the search direction does not depend
			on the previous search command.</div>
<div class="old-help-para">								<a name="gN"></a><code class="help-tag-right">gN</code> <a name="v_gN"></a><code class="help-tag">v_gN</code>
gN			Like <a href="/neovim-docs-web/en/visual#gn">gn</a> but searches backward, like with <code>N</code>.</div>
<div class="old-help-para">							<a name="%3CLeftMouse%3E"></a><code class="help-tag-right">&lt;LeftMouse&gt;</code>
<code>&lt;LeftMouse&gt;</code>		Set the current cursor position.  If Visual mode is
			active it is stopped.  Only when <a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a> option
			contains 'n' or 'a'.  If the position is within <a href="/neovim-docs-web/en/options#'so'">'so'</a>
			lines from the last line on the screen the text is
			scrolled up.  If the position is within <a href="/neovim-docs-web/en/options#'so'">'so'</a> lines from
			the first line on the screen the text is scrolled
			down.</div>
<div class="old-help-para">							<a name="%3CRightMouse%3E"></a><code class="help-tag-right">&lt;RightMouse&gt;</code>
<code>&lt;RightMouse&gt;</code>		Start Visual mode if it is not active.  The text from
			the cursor position to the position of the click is
			highlighted.  If Visual mode was already active move
			the start or end of the highlighted text, whichever
			is closest, to the position of the click.  Only when
			<a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a> option contains 'n' or 'a'.</div>
<div class="old-help-para">			Note: when <a href="/neovim-docs-web/en/options#'mousemodel'">'mousemodel'</a> is set to "popup",
			<code>&lt;S-LeftMouse&gt;</code> has to be used instead of <code>&lt;RightMouse&gt;</code>.</div>
<div class="old-help-para">							<a name="%3CLeftRelease%3E"></a><code class="help-tag-right">&lt;LeftRelease&gt;</code>
<code>&lt;LeftRelease&gt;</code>		This works like a <code>&lt;LeftMouse&gt;</code>, if it is not at
			the same position as <code>&lt;LeftMouse&gt;</code>.  In an older version
			of xterm you won't see the selected area until the
			button is released, unless there is access to the
			display where the xterm is running (via the DISPLAY
			environment variable or the -display argument).  Only
			when <a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a> option contains 'n' or 'a'.</div>
<div class="old-help-para">If Visual mode is not active and the "v", "V" or <code>CTRL-V</code> is preceded with a
count, the size of the previously highlighted area is used for a start.  You
can then move the end of the highlighted area and give an operator.  The type
of the old area is used (character, line or blockwise).
<div class="help-li" style=""> Linewise Visual mode: The number of lines is multiplied with the count.
</div><div class="help-li" style=""> Blockwise Visual mode: The number of lines and columns is multiplied with
  the count.
</div><div class="help-li" style=""> Normal Visual mode within one line: The number of characters is multiplied
  with the count.
</div><div class="help-li" style=""> Normal Visual mode with several lines: The number of lines is multiplied
  with the count, in the last line the same number of characters is used as
  in the last line in the previously highlighted area.
The start of the text is the Cursor position.  If the "$" command was used as
one of the last commands to extend the highlighted text, the area will be
extended to the rightmost column of the longest line.
</div></div>
<div class="old-help-para">If you want to highlight exactly the same area as the last time, you can use
"gv" <a href="/neovim-docs-web/en/visual#gv">gv</a> <a href="/neovim-docs-web/en/visual#v_gv">v_gv</a>.</div>
<div class="old-help-para">							<a name="v_%3CEsc%3E"></a><code class="help-tag-right">v_&lt;Esc&gt;</code>
<code>&lt;Esc&gt;</code>			In Visual mode: Stop Visual mode.
						<a name="v_META"></a><code class="help-tag-right">v_META</code> <a name="v_ALT"></a><code class="help-tag">v_ALT</code>
		ALT (<a href="/neovim-docs-web/en/intro#META">META</a>) may act like <code>&lt;Esc&gt;</code> if the chord is not mapped.
		For example <code>&lt;A-x&gt;</code> acts like <code>&lt;Esc&gt;</code>x if <code>&lt;A-x&gt;</code> does not have a
		visual-mode mapping.</div>
<div class="old-help-para">							<a name="v_CTRL-C"></a><code class="help-tag-right">v_CTRL-C</code>
CTRL-C			In Visual mode: Stop Visual mode.  When insert mode is
			pending (the mode message shows
			"-- (insert) VISUAL --"), it is also stopped.</div>
<div class="old-help-para"><h2 class="help-heading">3. Changing the Visual area<span class="help-heading-tags">				<a name="visual-change"></a><span class="help-tag">visual-change</span></span></h2></div>
<div class="old-help-para">							<a name="v_o"></a><code class="help-tag-right">v_o</code>
o			Go to Other end of highlighted text: The current
			cursor position becomes the start of the highlighted
			text and the cursor is moved to the other end of the
			highlighted text.  The highlighted area remains the
			same.</div>
<div class="old-help-para">							<a name="v_O"></a><code class="help-tag-right">v_O</code>
O			Go to Other end of highlighted text.  This is like
			"o", but in Visual block mode the cursor moves to the
			other corner in the same line.  When the corner is at
			a character that occupies more than one position on
			the screen (e.g., a <code>&lt;Tab&gt;</code>), the highlighted text may
			change.</div>
<div class="old-help-para">							<a name="v_%24"></a><code class="help-tag-right">v_$</code>
When the "$" command is used with blockwise Visual mode, the right end of the
highlighted text will be determined by the longest highlighted line.  This
stops when a motion command is used that does not move straight up or down.</div>
<div class="old-help-para">For moving the end of the block many commands can be used, but you cannot
use Ex commands, commands that make changes or abandon the file.  Commands
(starting with) ".", "&amp;", <code>CTRL-^</code>, "Z", <code>CTRL-]</code>, <code>CTRL-T</code>, <code>CTRL-R</code>, <code>CTRL-I</code>
and <code>CTRL-O</code> cause a beep and Visual mode continues.</div>
<div class="old-help-para">When switching to another window on the same buffer, the cursor position in
that window is adjusted, so that the same Visual area is still selected.  This
is especially useful to view the start of the Visual area in one window, and
the end in another.  You can then use <code>&lt;RightMouse&gt;</code> (or <code>&lt;S-LeftMouse&gt;</code> when
<a href="/neovim-docs-web/en/options#'mousemodel'">'mousemodel'</a> is "popup") to drag either end of the Visual area.</div>
<div class="old-help-para"><h2 class="help-heading">4. Operating on the Visual area<span class="help-heading-tags">				<a name="visual-operators"></a><span class="help-tag">visual-operators</span></span></h2></div>
<div class="old-help-para">The operators that can be used are:
	~	switch case					<a href="/neovim-docs-web/en/change#v_~">v_~</a>
	d	delete						<a href="/neovim-docs-web/en/change#v_d">v_d</a>
	c	change (4)					<a href="/neovim-docs-web/en/change#v_c">v_c</a>
	y	yank						<a href="/neovim-docs-web/en/change#v_y">v_y</a>
	&gt;	shift right (4)					<a href="/neovim-docs-web/en/change#v_%3E">v_&gt;</a>
	&lt;	shift left (4)					<a href="/neovim-docs-web/en/change#v_%3C">v_&lt;</a>
	!	filter through external command (1)		<a href="/neovim-docs-web/en/change#v_%21">v_!</a>
	=	filter through <a href="/neovim-docs-web/en/options#'equalprg'">'equalprg'</a> option command (1)	<a href="/neovim-docs-web/en/change#v_%3D">v_=</a>
	gq	format lines to <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> length (1)		<a href="/neovim-docs-web/en/change#v_gq">v_gq</a></div>
<div class="old-help-para">The objects that can be used are:
	aw	a word (with white space)			<a href="/neovim-docs-web/en/motion#v_aw">v_aw</a>
	iw	inner word					<a href="/neovim-docs-web/en/motion#v_iw">v_iw</a>
	aW	a WORD (with white space)			<a href="/neovim-docs-web/en/motion#v_aW">v_aW</a>
	iW	inner WORD					<a href="/neovim-docs-web/en/motion#v_iW">v_iW</a>
	as	a sentence (with white space)			<a href="/neovim-docs-web/en/motion#v_as">v_as</a>
	is	inner sentence					<a href="/neovim-docs-web/en/motion#v_is">v_is</a>
	ap	a paragraph (with white space)			<a href="/neovim-docs-web/en/motion#v_ap">v_ap</a>
	ip	inner paragraph					<a href="/neovim-docs-web/en/motion#v_ip">v_ip</a>
	ab	a () block (with parentheses)			<a href="/neovim-docs-web/en/motion#v_ab">v_ab</a>
	ib	inner () block					<a href="/neovim-docs-web/en/motion#v_ib">v_ib</a>
	aB	a {} block (with braces)			<a href="/neovim-docs-web/en/motion#v_aB">v_aB</a>
	iB	inner {} block					<a href="/neovim-docs-web/en/motion#v_iB">v_iB</a>
	at	a <code>&lt;tag&gt;</code> &lt;/tag&gt; block (with tags)		<a href="/neovim-docs-web/en/motion#v_at">v_at</a>
	it	inner <code>&lt;tag&gt;</code> &lt;/tag&gt; block			<a href="/neovim-docs-web/en/motion#v_it">v_it</a>
	a&lt;	a &lt;&gt; block (with &lt;&gt;)				<a href="/neovim-docs-web/en/motion#v_a%3C">v_a&lt;</a>
	i&lt;	inner &lt;&gt; block					<a href="/neovim-docs-web/en/motion#v_i%3C">v_i&lt;</a>
	a[	a [] block (with [])				<a href="/neovim-docs-web/en/motion#v_a%5B">v_a[</a>
	i[	inner [] block					<a href="/neovim-docs-web/en/motion#v_i%5B">v_i[</a>
	a"	a double quoted string (with quotes)		<a href="/neovim-docs-web/en/motion#v_aquote">v_aquote</a>
	i"	inner double quoted string			<a href="/neovim-docs-web/en/motion#v_iquote">v_iquote</a>
	a'	a single quoted string (with quotes)		<a href="/neovim-docs-web/en/motion#v_a'">v_a'</a>
	i'	inner simple quoted string			<a href="/neovim-docs-web/en/motion#v_i'">v_i'</a>
	a`	a string in backticks (with backticks)		<a href="/neovim-docs-web/en/motion#v_a%60">v_a`</a>
	i`	inner string in backticks			<a href="/neovim-docs-web/en/motion#v_i%60">v_i`</a></div>
<div class="old-help-para">Additionally the following commands can be used:
	:	start Ex command for highlighted lines (1)	<a href="/neovim-docs-web/en/cmdline#v_%3A">v_:</a>
	r	change (4)					<a href="/neovim-docs-web/en/change#v_r">v_r</a>
	s	change						<a href="/neovim-docs-web/en/change#v_s">v_s</a>
	C	change (2)(4)					<a href="/neovim-docs-web/en/change#v_C">v_C</a>
	S	change (2)					<a href="/neovim-docs-web/en/change#v_S">v_S</a>
	R	change (2)					<a href="/neovim-docs-web/en/change#v_R">v_R</a>
	x	delete						<a href="/neovim-docs-web/en/change#v_x">v_x</a>
	D	delete (3)					<a href="/neovim-docs-web/en/change#v_D">v_D</a>
	X	delete (2)					<a href="/neovim-docs-web/en/change#v_X">v_X</a>
	Y	yank (2)					<a href="/neovim-docs-web/en/change#v_Y">v_Y</a>
	p	put						<a href="/neovim-docs-web/en/change#v_p">v_p</a>
	P	put without overwriting registers		<a href="/neovim-docs-web/en/change#v_P">v_P</a>
	J	join (1)					<a href="/neovim-docs-web/en/change#v_J">v_J</a>
	U	make uppercase					<a href="/neovim-docs-web/en/change#v_U">v_U</a>
	u	make lowercase					<a href="/neovim-docs-web/en/change#v_u">v_u</a>
	^]	find tag					<a href="/neovim-docs-web/en/tagsrch#v_CTRL-%5D">v_CTRL-]</a>
	I	block insert					<a href="/neovim-docs-web/en/visual#v_b_I">v_b_I</a>
	A	block append					<a href="/neovim-docs-web/en/visual#v_b_A">v_b_A</a></div>
<div class="old-help-para">(1): Always whole lines, see <a href="/neovim-docs-web/en/visual#%3Avisual_example">:visual_example</a>.
(2): Whole lines when not using <code>CTRL-V</code>.
(3): Whole lines when not using <code>CTRL-V</code>, delete until the end of the line when
     using <code>CTRL-V</code>.
(4): When using <code>CTRL-V</code> operates on the block only.</div>
<div class="old-help-para">Note that the ":vmap" command can be used to specifically map keys in Visual
mode.  For example, if you would like the "/" command not to extend the Visual
area, but instead take the highlighted text and search for that:<pre>:vmap / y/&lt;C-R&gt;"&lt;CR&gt;</pre>
(In the &lt;&gt; notation <a href="/neovim-docs-web/en/intro#%3C%3E">&lt;&gt;</a>, when typing it you should type it literally; you
need to remove the 'B' flag from <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.)</div>
<div class="old-help-para">If you want to give a register name using the """ command, do this just before
typing the operator character: "v{move-around}"xd".</div>
<div class="old-help-para">If you want to give a count to the command, do this just before typing the
operator character: "v{move-around}3&gt;" (move lines 3 indents to the right).</div>
<div class="old-help-para">							<a name="%7Bmove-around%7D"></a><code class="help-tag-right">{move-around}</code>
The <code>{move-around}</code> is any sequence of movement commands.  Note the difference
with <code>{motion}</code>, which is only ONE movement command.</div>
<div class="old-help-para">Another way to operate on the Visual area is using the <a href="/neovim-docs-web/en/pattern#%2F%5C%25V">/\%V</a> item in a
pattern.  For example, to replace all '(' in the Visual area with '#':<pre>:'&lt;,'&gt;s/\%V(/#/g</pre>
Note that the "'&lt;,'&gt;" will appear automatically when you press ":" in Visual
mode.</div>
<div class="old-help-para"><h2 class="help-heading">5. Blockwise operators<span class="help-heading-tags">					<a name="blockwise-operators"></a><span class="help-tag">blockwise-operators</span></span></h2></div>
<div class="old-help-para">Reminder: Use <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> to be able to select blocks that start or end
after the end of a line or halfway through a tab.</div>
<div class="old-help-para">Visual-block Insert						<a name="v_b_I"></a><code class="help-tag-right">v_b_I</code>
With a blockwise selection, I{string}&lt;ESC&gt; will insert <code>{string}</code> at the start
of block on every line of the block, provided that the line extends into the
block.  Thus lines that are short will remain unmodified.  TABs are split to
retain visual columns.  Works only for adding text to a line, not for
deletions.  See <a href="/neovim-docs-web/en/visual#v_b_I_example">v_b_I_example</a>.</div>
<div class="old-help-para">Visual-block Append						<a name="v_b_A"></a><code class="help-tag-right">v_b_A</code>
With a blockwise selection, A{string}&lt;ESC&gt; will append <code>{string}</code> to the end of
block on every line of the block.  There is some differing behavior where the
block RHS is not straight, due to different line lengths:</div>
<div class="old-help-para">1. Block was created with <code>&lt;C-v&gt;</code>$
    In this case the string is appended to the end of each line.
2. Block was created with <code>&lt;C-v&gt;</code><code>{move-around}</code>
    In this case the string is appended to the end of the block on each line,
    and whitespace is inserted to pad to the end-of-block column.
See <a href="/neovim-docs-web/en/visual#v_b_A_example">v_b_A_example</a>.
Note: "I" and "A" behave differently for lines that don't extend into the
selected block.  This was done intentionally, so that you can do it the way
you want.
Works only for adding text to a line, not for deletions.</div>
<div class="old-help-para">Visual-block change						<a name="v_b_c"></a><code class="help-tag-right">v_b_c</code>
All selected text in the block will be replaced by the same text string.  When
using "c" the selected text is deleted and Insert mode started.  You can then
enter text (without a line break).  When you hit <code>&lt;Esc&gt;</code>, the same string is
inserted in all previously selected lines.</div>
<div class="old-help-para">Visual-block Change						<a name="v_b_C"></a><code class="help-tag-right">v_b_C</code>
Like using "c", but the selection is extended until the end of the line for
all lines.</div>
<div class="old-help-para">								<a name="v_b_%3C"></a><code class="help-tag-right">v_b_&lt;</code>
Visual-block Shift						<a name="v_b_%3E"></a><code class="help-tag-right">v_b_&gt;</code>
The block is shifted by <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>.  The RHS of the block is irrelevant.  The
LHS of the block determines the point from which to apply a right shift, and
padding includes TABs optimally according to <a href="/neovim-docs-web/en/options#'ts'">'ts'</a> and <a href="/neovim-docs-web/en/options#'et'">'et'</a>.  The LHS of the
block determines the point up to which to shift left.
See <a href="/neovim-docs-web/en/visual#v_b_%3E_example">v_b_&gt;_example</a>.
See <a href="/neovim-docs-web/en/visual#v_b_%3C_example">v_b_&lt;_example</a>.</div>
<div class="old-help-para">Visual-block Replace						<a name="v_b_r"></a><code class="help-tag-right">v_b_r</code>
Every screen char in the highlighted region is replaced with the same char, ie
TABs are split and the virtual whitespace is replaced, maintaining screen
layout.
See <a href="/neovim-docs-web/en/visual#v_b_r_example">v_b_r_example</a>.</div>
<div class="old-help-para"><h2 class="help-heading">6. Repeating<span class="help-heading-tags">						<a name="visual-repeat"></a><span class="help-tag">visual-repeat</span></span></h2></div>
<div class="old-help-para">When repeating a Visual mode operator, the operator will be applied to the
same amount of text as the last time:
<div class="help-li" style=""> Linewise Visual mode: The same number of lines.
</div><div class="help-li" style=""> Blockwise Visual mode: The same number of lines and columns.
</div><div class="help-li" style=""> Normal Visual mode within one line: The same number of characters.
</div><div class="help-li" style=""> Normal Visual mode with several lines: The same number of lines, in the
  last line the same number of characters as in the last line the last time.
The start of the text is the Cursor position.  If the "$" command was used as
one of the last commands to extend the highlighted text, the repeating will
be applied up to the rightmost column of the longest line.  Any count passed
to the <code>.</code> command is not used.
</div></div>
<div class="old-help-para"><h2 class="help-heading">7. Examples<span class="help-heading-tags">						<a name="visual-examples"></a><span class="help-tag">visual-examples</span></span></h2></div>
<div class="old-help-para">							<a name="%3Avisual_example"></a><code class="help-tag-right">:visual_example</code>
Currently the ":" command works on whole lines only.  When you select part of
a line, doing something like ":!date" will replace the whole line.  If you
want only part of the line to be replaced you will have to make a mapping for
it.  In a future release ":" may work on partial lines.</div>
<div class="old-help-para">Here is an example, to replace the selected text with the output of "date":<pre>:vmap _a &lt;Esc&gt;`&gt;a&lt;CR&gt;&lt;Esc&gt;`&lt;i&lt;CR&gt;&lt;Esc&gt;!!date&lt;CR&gt;kJJ</pre>
(In the &lt;&gt; notation <a href="/neovim-docs-web/en/intro#%3C%3E">&lt;&gt;</a>, when typing it you should type it literally; you
need to remove the 'B' flag from <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>)</div>
<div class="old-help-para">What this does is:
<code>&lt;Esc&gt;</code>		stop Visual mode
&gt;		go to the end of the Visual area
a&lt;CR&gt;&lt;Esc&gt;	break the line after the Visual area
&lt;		jump to the start of the Visual area
i&lt;CR&gt;&lt;Esc&gt;	break the line before the Visual area
!!date&lt;CR&gt;	filter the Visual text through date
kJJ		Join the lines back together</div>
<div class="old-help-para">							<a name="visual-search"></a><code class="help-tag-right">visual-search</code>
Here is an idea for a mapping that makes it possible to do a search for the
selected text:<pre>:vmap X y/&lt;C-R&gt;"&lt;CR&gt;</pre>
(In the &lt;&gt; notation <a href="/neovim-docs-web/en/intro#%3C%3E">&lt;&gt;</a>, when typing it you should type it literally; you
need to remove the 'B' flag from <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>)</div>
<div class="old-help-para">Note that special characters (like '.' and '') will cause problems.</div>
<div class="old-help-para">Visual-block Examples					<a name="blockwise-examples"></a><code class="help-tag-right">blockwise-examples</code>
With the following text, I will indicate the commands to produce the block and
the results below.  In all cases, the cursor begins on the 'a' in the first
line of the test text.
The following modeline settings are assumed ":ts=8:sw=4:".</div>
<div class="old-help-para">It will be helpful to
:set hls
/&lt;TAB&gt;
where <code>&lt;TAB&gt;</code> is a real TAB.  This helps visualise the operations.</div>
<div class="old-help-para">The test text is:</div>
<div class="old-help-para">abcdefghijklmnopqrstuvwxyz
abc		defghijklmnopqrstuvwxyz
abcdef  ghi		jklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz</div>
<div class="old-help-para">1. fo&lt;C-v&gt;3jISTRING&lt;ESC&gt;					<a name="v_b_I_example"></a><code class="help-tag-right">v_b_I_example</code></div>
<div class="old-help-para">abcdefghijklmnSTRINGopqrstuvwxyz
abc	      STRING  defghijklmnopqrstuvwxyz
abcdef  ghi   STRING  	jklmnopqrstuvwxyz
abcdefghijklmnSTRINGopqrstuvwxyz</div>
<div class="old-help-para">2. fo&lt;C-v&gt;3j$ASTRING&lt;ESC&gt;					<a name="v_b_A_example"></a><code class="help-tag-right">v_b_A_example</code></div>
<div class="old-help-para">abcdefghijklmnopqrstuvwxyzSTRING
abc		defghijklmnopqrstuvwxyzSTRING
abcdef  ghi		jklmnopqrstuvwxyzSTRING
abcdefghijklmnopqrstuvwxyzSTRING</div>
<div class="old-help-para">3. fo&lt;C-v&gt;3j3l&lt;..						<a name="v_b_%3C_example"></a><code class="help-tag-right">v_b_&lt;_example</code></div>
<div class="old-help-para">abcdefghijklmnopqrstuvwxyz
abc	      defghijklmnopqrstuvwxyz
abcdef  ghi   jklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz</div>
<div class="old-help-para">4. fo&lt;C-v&gt;3j&gt;..							<a name="v_b_%3E_example"></a><code class="help-tag-right">v_b_&gt;_example</code></div>
<div class="old-help-para">abcdefghijklmn		  opqrstuvwxyz
abc			    defghijklmnopqrstuvwxyz
abcdef  ghi			    jklmnopqrstuvwxyz
abcdefghijklmn		  opqrstuvwxyz</div>
<div class="old-help-para">5. fo&lt;C-v&gt;5l3jrX						<a name="v_b_r_example"></a><code class="help-tag-right">v_b_r_example</code></div>
<div class="old-help-para">abcdefghijklmnXXXXXXuvwxyz
abc	      XXXXXXhijklmnopqrstuvwxyz
abcdef  ghi   XXXXXX    jklmnopqrstuvwxyz
abcdefghijklmnXXXXXXuvwxyz</div>
<div class="old-help-para"><h2 class="help-heading">8. Select mode<span class="help-heading-tags">						<a name="Select"></a><span class="help-tag">Select</span> <a name="Select-mode"></a><span class="help-tag">Select-mode</span></span></h2></div>
<div class="old-help-para">Select mode looks like Visual mode, but the commands accepted are quite
different.  This resembles the selection mode in Microsoft Windows.
When the <a href="/neovim-docs-web/en/options#'showmode'">'showmode'</a> option is set, "-- SELECT --" is shown in the last line.</div>
<div class="old-help-para">Entering Select mode:
<div class="help-li" style=""> Using the mouse to select an area, and <a href="/neovim-docs-web/en/options#'selectmode'">'selectmode'</a> contains "mouse".
  <a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a> must also contain a flag for the current mode.
</div><div class="help-li" style=""> Using a non-printable movement command, with the Shift key pressed, and
  <a href="/neovim-docs-web/en/options#'selectmode'">'selectmode'</a> contains "key".  For example: <code>&lt;S-Left&gt;</code> and <code>&lt;S-End&gt;</code>.  <a href="/neovim-docs-web/en/options#'keymodel'">'keymodel'</a>
  must also contain "startsel".
</div><div class="help-li" style=""> Using "v", "V" or <code>CTRL-V</code> command, and <a href="/neovim-docs-web/en/options#'selectmode'">'selectmode'</a> contains "cmd".
</div><div class="help-li" style=""> Using "gh", "gH" or "g_CTRL-H" command in Normal mode.
</div><div class="help-li" style=""> From Visual mode, press <code>CTRL-G</code>.			<a name="v_CTRL-G"></a><code class="help-tag-right">v_CTRL-G</code>  
</div></div>
<div class="old-help-para">Commands in Select mode:
<div class="help-li" style=""> Printable characters, <code>&lt;NL&gt;</code> and <code>&lt;CR&gt;</code> cause the selection to be deleted, and
  Vim enters Insert mode.  The typed character is inserted.
</div><div class="help-li" style=""> Non-printable movement commands, with the Shift key pressed, extend the
  selection.  <a href="/neovim-docs-web/en/options#'keymodel'">'keymodel'</a> must include "startsel".
</div><div class="help-li" style=""> Non-printable movement commands, with the Shift key NOT pressed, stop Select
  mode.  <a href="/neovim-docs-web/en/options#'keymodel'">'keymodel'</a> must include "stopsel".
</div><div class="help-li" style=""> ESC stops Select mode.
</div><div class="help-li" style=""> <code>CTRL-O</code> switches to Visual mode for the duration of one command. <a name="v_CTRL-O"></a><code class="help-tag">v_CTRL-O</code>
</div><div class="help-li" style=""> <code>CTRL-G</code> switches to Visual mode.
</div><div class="help-li" style=""> <code>CTRL-R</code> <code>{register}</code> selects the register to be used for the text that is
  deleted when typing text.					  <a name="v_CTRL-R"></a><code class="help-tag-right">v_CTRL-R</code>
  Unless you specify the "_" (black hole) register, the unnamed register is
  also overwritten.
</div></div>
<div class="old-help-para">Otherwise, typed characters are handled as in Visual mode.</div>
<div class="old-help-para">When using an operator in Select mode, and the selection is linewise, the
selected lines are operated upon, but like in charwise selection.  For
example, when a whole line is deleted, it can later be pasted in the middle of
a line.</div>
<div class="old-help-para">Mappings and menus in Select mode.			<a name="Select-mode-mapping"></a><code class="help-tag-right">Select-mode-mapping</code></div>
<div class="old-help-para">When mappings and menus are defined with the <a href="/neovim-docs-web/en/map#%3Avmap">:vmap</a> or <a href="/neovim-docs-web/en/gui#%3Avmenu">:vmenu</a> command they
work both in Visual mode and in Select mode.  When these are used in Select
mode Vim automatically switches to Visual mode, so that the same behavior as
in Visual mode is effective.  If you don't want this use <a href="/neovim-docs-web/en/map#%3Axmap">:xmap</a> or <a href="/neovim-docs-web/en/map#%3Asmap">:smap</a>.</div>
<div class="old-help-para">One particular edge case:<pre>:vnoremap &lt;C-K&gt; &lt;Esc&gt;</pre>
This ends Visual mode when in Visual mode, but in Select mode it does not
work, because Select mode is restored after executing the mapped keys.  You
need to use:<pre>:snoremap &lt;C-K&gt; &lt;Esc&gt;</pre></div>
<div class="old-help-para">Users will expect printable characters to replace the selected area.
Therefore avoid mapping printable characters in Select mode.  Or use
<a href="/neovim-docs-web/en/map#%3Asunmap">:sunmap</a>  after <a href="/neovim-docs-web/en/map#%3Amap">:map</a> and <a href="/neovim-docs-web/en/map#%3Avmap">:vmap</a> to remove it for Select mode.</div>
<div class="old-help-para">After the mapping or menu finishes, the selection is enabled again and Select
mode entered, unless the selected area was deleted, another buffer became
the current one or the window layout was changed.</div>
<div class="old-help-para">When a character was typed that causes the selection to be deleted and Insert
mode started, Insert mode mappings are applied to this character.  This may
cause some confusion, because it means Insert mode mappings apply to a
character typed in Select mode.  Language mappings apply as well.</div>
<div class="old-help-para">							<a name="gV"></a><code class="help-tag-right">gV</code> <a name="v_gV"></a><code class="help-tag">v_gV</code>
gV			Avoid the automatic reselection of the Visual area
			after a Select mode mapping or menu has finished.
			Put this just before the end of the mapping or menu.
			At least it should be after any operations on the
			selection.</div>
<div class="old-help-para">							<a name="gh"></a><code class="help-tag-right">gh</code>
gh			Start Select mode, charwise.  This is like "v",
			but starts Select mode instead of Visual mode.
			Mnemonic: "get highlighted".</div>
<div class="old-help-para">							<a name="gH"></a><code class="help-tag-right">gH</code>
gH			Start Select mode, linewise.  This is like "V",
			but starts Select mode instead of Visual mode.
			Mnemonic: "get Highlighted".</div>
<div class="old-help-para">							<a name="g_CTRL-H"></a><code class="help-tag-right">g_CTRL-H</code>
g <code>CTRL-H</code>		Start Select mode, blockwise.  This is like <code>CTRL-V</code>,
			but starts Select mode instead of Visual mode.
			Mnemonic: "get Highlighted".</div>

  
  