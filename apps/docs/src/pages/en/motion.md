---
title:  Motion
layout: ../../layouts/MainLayout.astro
---

  <a name="motion.txt"></a><a name="cursor-motions"></a><h1> Motion</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/motion.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Cursor motions <a name="navigation"></a><code class="help-tag">navigation</code></div>
<div class="old-help-para">These commands move the cursor position.  If the new position is off of the
screen, the screen is scrolled to show the cursor (see also <a href="/neovim-docs-web/en/options#'scrolljump'">'scrolljump'</a> and
<a href="/neovim-docs-web/en/options#'scrolloff'">'scrolloff'</a> options).</div>
<div class="old-help-para">General remarks:</div>
<div class="old-help-para">If you want to know where you are in the file use the "CTRL-G" command
<a href="/neovim-docs-web/en/editing#CTRL-G">CTRL-G</a> or the "g <code>CTRL-G</code>" command <a href="/neovim-docs-web/en/editing#g_CTRL-G">g_CTRL-G</a>.  If you set the <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a> option,
the cursor position is continuously shown in the status line (which slows down
Vim a little).</div>
<div class="old-help-para">Experienced users prefer the hjkl keys because they are always right under
their fingers.  Beginners often prefer the arrow keys, because they do not
know what the hjkl keys do.  The mnemonic value of hjkl is clear from looking
at the keyboard.  Think of j as an arrow pointing downwards.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> option can be set to make it possible to move the cursor to
positions where there is no character or within a multi-column character (like
a tab).</div>
<div class="old-help-para"><h2 class="help-heading">1. Motions and operators<span class="help-heading-tags">				<a name="operator"></a><span class="help-tag">operator</span></span></h2></div>
<div class="old-help-para">The motion commands can be used after an operator command, to have the command
operate on the text that was moved over.  That is the text between the cursor
position before and after the motion.  Operators are generally used to delete
or change text.  The following operators are available:</div>
<div class="old-help-para">	<a href="/neovim-docs-web/en/change#c">c</a>  	c	change
	<a href="/neovim-docs-web/en/change#d">d</a>  	d	delete
	<a href="/neovim-docs-web/en/change#y">y</a>  	y	yank into register (does not change the text)
	|~|	~	swap case (only if <a href="/neovim-docs-web/en/options#'tildeop'">'tildeop'</a> is set)
	<a href="/neovim-docs-web/en/change#g~">g~</a>  	g~	swap case
	<a href="/neovim-docs-web/en/change#gu">gu</a>  	gu	make lowercase
	<a href="/neovim-docs-web/en/change#gU">gU</a>  	gU	make uppercase
	<a href="/neovim-docs-web/en/change#%21">!</a>  	!	filter through an external program
	<a href="/neovim-docs-web/en/change#%3D">=</a>  	=	filter through <a href="/neovim-docs-web/en/options#'equalprg'">'equalprg'</a> or C-indenting if empty
	<a href="/neovim-docs-web/en/change#gq">gq</a>  	gq	text formatting
	<a href="/neovim-docs-web/en/change#gw">gw</a>  	gw	text formatting with no cursor movement
	<a href="/neovim-docs-web/en/change#g%3F">g?</a>  	g?	ROT13 encoding
	|&gt;|	&gt;	shift right
	<a href="/neovim-docs-web/en/change#%3C">&lt;</a>  	&lt;	shift left
	<a href="/neovim-docs-web/en/fold#zf">zf</a>  	zf	define a fold
	<a href="/neovim-docs-web/en/map#g%40">g@</a>  	g@	call function set with the <a href="/neovim-docs-web/en/options#'operatorfunc'">'operatorfunc'</a> option
						<a name="motion-count-multiplied"></a><code class="help-tag-right">motion-count-multiplied</code>
If the motion includes a count and the operator also had a count before it,
the two counts are multiplied.  For example: "2d3w" deletes six words.
						<a name="operator-doubled"></a><code class="help-tag-right">operator-doubled</code>
When doubling the operator it operates on a line.  When using a count, before
or after the first character, that many lines are operated upon.  Thus <code>3dd</code>
deletes three lines. A count before and after the first character is
multiplied, thus <code>2y3y</code> yanks six lines.</div>
<div class="old-help-para">After applying the operator the cursor is mostly left at the start of the text
that was operated upon.  For example, "yfe" doesn't move the cursor, but "yFe"
moves the cursor leftwards to the "e" where the yank started.</div>
<div class="old-help-para">						<a name="linewise"></a><code class="help-tag-right">linewise</code> <a name="charwise"></a><code class="help-tag">charwise</code> <a name="characterwise"></a><code class="help-tag">characterwise</code>
The operator either affects whole lines, or the characters between the start
and end position.  Generally, motions that move between lines affect lines
(are linewise), and motions that move within a line affect characters (are
charwise).  However, there are some exceptions.</div>
<div class="old-help-para">						<a name="exclusive"></a><code class="help-tag-right">exclusive</code> <a name="inclusive"></a><code class="help-tag">inclusive</code>
Character motion is either inclusive or exclusive.  When inclusive, the
start and end position of the motion are included in the operation.  When
exclusive, the last character towards the end of the buffer is not included.
Linewise motions always include the start and end position.  Plugins can
check the v:event.inclusive flag of the <a href="/neovim-docs-web/en/autocmd#TextYankPost">TextYankPost</a> event.</div>
<div class="old-help-para">Which motions are linewise, inclusive or exclusive is mentioned with the
command.  There are however, two general exceptions:
1. If the motion is exclusive and the end of the motion is in column 1, the
   end of the motion is moved to the end of the previous line and the motion
   becomes inclusive.  Example: "}" moves to the first line after a paragraph,
   but "d}" will not include that line.
						<a name="exclusive-linewise"></a><code class="help-tag-right">exclusive-linewise</code>
2. If the motion is exclusive, the end of the motion is in column 1 and the
   start of the motion was at or before the first non-blank in the line, the
   motion becomes linewise.  Example: If a paragraph begins with some blanks
   and you do "d}" while standing on the first non-blank, all the lines of
   the paragraph are deleted, including the blanks.  If you do a put now, the
   deleted lines will be inserted below the cursor position.</div>
<div class="old-help-para">Note that when the operator is pending (the operator command is typed, but the
motion isn't yet), a special set of mappings can be used.  See <a href="/neovim-docs-web/en/map#%3Aomap">:omap</a>.</div>
<div class="old-help-para">Instead of first giving the operator and then a motion you can use Visual
mode: mark the start of the text with "v", move the cursor to the end of the
text that is to be affected and then hit the operator.  The text between the
start and the cursor position is highlighted, so you can see what text will
be operated upon.  This allows much more freedom, but requires more key
strokes and has limited redo functionality.  See the chapter on Visual mode
<a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>.</div>
<div class="old-help-para">You can use a ":" command for a motion.  For example "d:call FindEnd()".
But this can't be repeated with "." if the command is more than one line.
This can be repeated:<pre>d:call search("f")&lt;CR&gt;</pre>
This cannot be repeated:<pre>d:if 1&lt;CR&gt;
   call search("f")&lt;CR&gt;
endif&lt;CR&gt;</pre>
Note that when using ":" any motion becomes charwise exclusive.</div>
<div class="old-help-para">								<a name="forced-motion"></a><code class="help-tag-right">forced-motion</code>
FORCING A MOTION TO BE LINEWISE, CHARWISE OR BLOCKWISE</div>
<div class="old-help-para">When a motion is not of the type you would like to use, you can force another
type by using "v", "V" or <code>CTRL-V</code> just after the operator.
Example:<pre>dj</pre>
deletes two lines<pre>dvj</pre>
deletes from the cursor position until the character below the cursor<pre>d&lt;C-V&gt;j</pre>
deletes the character under the cursor and the character below the cursor.<pre></pre>
Be careful with forcing a linewise movement to be used charwise or blockwise,
the column may not always be defined.</div>
<div class="old-help-para">							<a name="o_v"></a><code class="help-tag-right">o_v</code>
v		When used after an operator, before the motion command: Force
		the operator to work charwise, also when the motion is
		linewise.  If the motion was linewise, it will become
		<a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>.
		If the motion already was charwise, toggle
		inclusive/exclusive.  This can be used to make an exclusive
		motion inclusive and an inclusive motion exclusive.</div>
<div class="old-help-para">							<a name="o_V"></a><code class="help-tag-right">o_V</code>
V		When used after an operator, before the motion command: Force
		the operator to work linewise, also when the motion is
		charwise.</div>
<div class="old-help-para">							<a name="o_CTRL-V"></a><code class="help-tag-right">o_CTRL-V</code>
CTRL-V		When used after an operator, before the motion command: Force
		the operator to work blockwise.  This works like Visual block
		mode selection, with the corners defined by the cursor
		position before and after the motion.</div>
<div class="old-help-para"><h2 class="help-heading">2. Left-right motions<span class="help-heading-tags">					<a name="left-right-motions"></a><span class="help-tag">left-right-motions</span></span></h2></div>
<div class="old-help-para">These commands move the cursor to the specified column in the current line.
They stop at the first column and at the end of the line, except "$", which
may move to one of the next lines.  See <a href="/neovim-docs-web/en/options#'whichwrap'">'whichwrap'</a> option to make some of the
commands move across line boundaries.</div>
<div class="old-help-para">h		or					<a name="h"></a><code class="help-tag-right">h</code>
<code>&lt;Left&gt;</code>		or					<a name="%3CLeft%3E"></a><code class="help-tag-right">&lt;Left&gt;</code>
CTRL-H		or					<a name="CTRL-H"></a><code class="help-tag-right">CTRL-H</code> <a name="%3CBS%3E"></a><code class="help-tag">&lt;BS&gt;</code>
<code>&lt;BS&gt;</code>			[count] characters to the left.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.
			Note: If you prefer <code>&lt;BS&gt;</code> to delete a character, use
			the mapping:
				:map <code>CTRL-V</code><code>&lt;BS&gt;</code>		X
			(to enter "CTRL-V&lt;BS&gt;" type the <code>CTRL-V</code> key, followed
			by the <code>&lt;BS&gt;</code> key)</div>
<div class="old-help-para">l		or					<a name="l"></a><code class="help-tag-right">l</code>
<code>&lt;Right&gt;</code>		or					<a name="%3CRight%3E"></a><code class="help-tag-right">&lt;Right&gt;</code> <a name="%3CSpace%3E"></a><code class="help-tag">&lt;Space&gt;</code>
<code>&lt;Space&gt;</code>			[count] characters to the right.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.
			See the <a href="/neovim-docs-web/en/options#'whichwrap'">'whichwrap'</a> option for adjusting the behavior
			at end of line</div>
<div class="old-help-para">							<a name="0"></a><code class="help-tag-right">0</code>
0			To the first character of the line.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>
			motion.</div>
<div class="old-help-para">							<a name="%3CHome%3E"></a><code class="help-tag-right">&lt;Home&gt;</code> <a name="%3CkHome%3E"></a><code class="help-tag">&lt;kHome&gt;</code>
<code>&lt;Home&gt;</code>			To the first character of the line.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>
			motion.  When moving up or down next, stay in same
			TEXT column (if possible).  Most other commands stay
			in the same SCREEN column.  <code>&lt;Home&gt;</code> works like "1|",
			which differs from "0" when the line starts with a
			<code>&lt;Tab&gt;</code>.</div>
<div class="old-help-para">							<a name="%5E"></a><code class="help-tag-right">^</code>
^			To the first non-blank character of the line.
			<a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.  Any count is ignored.</div>
<div class="old-help-para">							<a name="%24"></a><code class="help-tag-right">$</code> <a name="%3CEnd%3E"></a><code class="help-tag">&lt;End&gt;</code> <a name="%3CkEnd%3E"></a><code class="help-tag">&lt;kEnd&gt;</code>
$  or <code>&lt;End&gt;</code>		To the end of the line.  When a count is given also go
			[count - 1] lines downward, or as far is possible.
			<a href="/neovim-docs-web/en/motion#inclusive">inclusive</a> motion.  If a count of 2 or larger is
			given and the cursor is on the last line, that is an
			error and the cursor doesn't move.
			In Visual mode the cursor goes to just after the last
			character in the line.
			When <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> is active, "$" may move the cursor
			back from past the end of the line to the last
			character in the line.</div>
<div class="old-help-para">							<a name="g_"></a><code class="help-tag-right">g_</code>
g_			To the last non-blank character of the line and
			[count - 1] lines downward <a href="/neovim-docs-web/en/motion#inclusive">inclusive</a>.</div>
<div class="old-help-para">							<a name="g0"></a><code class="help-tag-right">g0</code> <a name="g%3CHome%3E"></a><code class="help-tag">g&lt;Home&gt;</code>
g0 or g&lt;Home&gt;		When lines wrap (<a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> on): To the first character of
			the screen line.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.  Differs from
			"0" when a line is wider than the screen.
			When lines don't wrap (<a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> off): To the leftmost
			character of the current line that is on the screen.
			Differs from "0" when the first character of the line
			is not on the screen.</div>
<div class="old-help-para">							<a name="g%5E"></a><code class="help-tag-right">g^</code>
g^			When lines wrap (<a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> on): To the first non-blank
			character of the screen line.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.
			Differs from "^" when a line is wider than the screen.
			When lines don't wrap (<a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> off): To the leftmost
			non-blank character of the current line that is on the
			screen.  Differs from "^" when the first non-blank
			character of the line is not on the screen.</div>
<div class="old-help-para">							<a name="gm"></a><code class="help-tag-right">gm</code>
gm			Like "g0", but half a screenwidth to the right (or as
			much as possible).</div>
<div class="old-help-para">							<a name="gM"></a><code class="help-tag-right">gM</code>
gM			Like "g0", but to halfway the text of the line.
			With a count: to this percentage of text in the line.
			Thus "10gM" is near the start of the text and "90gM"
			is near the end of the text.</div>
<div class="old-help-para">							<a name="g%24"></a><code class="help-tag-right">g$</code> <a name="g%3CEnd%3E"></a><code class="help-tag">g&lt;End&gt;</code>
g$ or g&lt;End&gt;		When lines wrap (<a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> on): To the last character of
			the screen line and [count - 1] screen lines downward
			<a href="/neovim-docs-web/en/motion#inclusive">inclusive</a>.  Differs from "$" when a line is wider
			than the screen.
			When lines don't wrap (<a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> off): To the rightmost
			character of the current line that is visible on the
			screen.  Differs from "$" when the last character of
			the line is not on the screen or when a count is used.
			Additionally, vertical movements keep the column,
			instead of going to the end of the line.
			When <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> is enabled moves to the end of the
			screen line.</div>
<div class="old-help-para">							<a name="bar"></a><code class="help-tag-right">bar</code>
|			To screen column [count] in the current line.
			<a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.  Ceci n'est pas une pipe.</div>
<div class="old-help-para">							<a name="f"></a><code class="help-tag-right">f</code>
f{char}			To [count]'th occurrence of <code>{char}</code> to the right.  The
			cursor is placed on <code>{char}</code> <a href="/neovim-docs-web/en/motion#inclusive">inclusive</a>.
			<code>{char}</code> can be entered as a digraph <a href="/neovim-docs-web/en/change#digraph-arg">digraph-arg</a>.
			When <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is set to Unicode, composing
			characters may be used, see <a href="/neovim-docs-web/en/mbyte#utf-8-char-arg">utf-8-char-arg</a>.
			<a href="/neovim-docs-web/en/map#%3Almap">:lmap</a> mappings apply to <code>{char}</code>.  The <code>CTRL-^</code> command
			in Insert mode can be used to switch this on/off
			<a href="/neovim-docs-web/en/insert#i_CTRL-%5E">i_CTRL-^</a>.</div>
<div class="old-help-para">							<a name="F"></a><code class="help-tag-right">F</code>
F{char}			To the [count]'th occurrence of <code>{char}</code> to the left.
			The cursor is placed on <code>{char}</code> <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>.
			<code>{char}</code> can be entered like with the <a href="/neovim-docs-web/en/motion#f">f</a> command.</div>
<div class="old-help-para">							<a name="t"></a><code class="help-tag-right">t</code>
t{char}			Till before [count]'th occurrence of <code>{char}</code> to the
			right.  The cursor is placed on the character left of
			<code>{char}</code> <a href="/neovim-docs-web/en/motion#inclusive">inclusive</a>.
			<code>{char}</code> can be entered like with the <a href="/neovim-docs-web/en/motion#f">f</a> command.</div>
<div class="old-help-para">							<a name="T"></a><code class="help-tag-right">T</code>
T{char}			Till after [count]'th occurrence of <code>{char}</code> to the
			left.  The cursor is placed on the character right of
			<code>{char}</code> <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>.
			<code>{char}</code> can be entered like with the <a href="/neovim-docs-web/en/motion#f">f</a> command.</div>
<div class="old-help-para">							<a name="%3B"></a><code class="help-tag-right">;</code>
;			Repeat latest f, t, F or T [count] times. See <a href="/neovim-docs-web/en/options#cpo-%3B">cpo-;</a></div>
<div class="old-help-para">							<a name="%2C"></a><code class="help-tag-right">,</code>
,			Repeat latest f, t, F or T in opposite direction
			[count] times. See also <a href="/neovim-docs-web/en/options#cpo-%3B">cpo-;</a></div>
<div class="old-help-para"><h2 class="help-heading">3. Up-down motions<span class="help-heading-tags">					<a name="up-down-motions"></a><span class="help-tag">up-down-motions</span></span></h2></div>
<div class="old-help-para">k		or					<a name="k"></a><code class="help-tag-right">k</code>
<code>&lt;Up&gt;</code>		or					<a name="%3CUp%3E"></a><code class="help-tag-right">&lt;Up&gt;</code> <a name="CTRL-P"></a><code class="help-tag">CTRL-P</code>
CTRL-P			[count] lines upward <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.</div>
<div class="old-help-para">j		or					<a name="j"></a><code class="help-tag-right">j</code>
<code>&lt;Down&gt;</code>		or					<a name="%3CDown%3E"></a><code class="help-tag-right">&lt;Down&gt;</code>
CTRL-J		or					<a name="CTRL-J"></a><code class="help-tag-right">CTRL-J</code>
<code>&lt;NL&gt;</code>		or					<a name="%3CNL%3E"></a><code class="help-tag-right">&lt;NL&gt;</code> <a name="CTRL-N"></a><code class="help-tag">CTRL-N</code>
CTRL-N			[count] lines downward <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.</div>
<div class="old-help-para">gk		or					<a name="gk"></a><code class="help-tag-right">gk</code> <a name="g%3CUp%3E"></a><code class="help-tag">g&lt;Up&gt;</code>
g&lt;Up&gt;			[count] display lines upward.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.
			Differs from 'k' when lines wrap, and when used with
			an operator, because it's not linewise.</div>
<div class="old-help-para">gj		or					<a name="gj"></a><code class="help-tag-right">gj</code> <a name="g%3CDown%3E"></a><code class="help-tag">g&lt;Down&gt;</code>
g&lt;Down&gt;			[count] display lines downward.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.
			Differs from 'j' when lines wrap, and when used with
			an operator, because it's not linewise.</div>
<div class="old-help-para">							<a name="-"></a><code class="help-tag-right">-</code>
<code>-</code>  <code>&lt;minus&gt;</code>		[count] lines upward, on the first non-blank
			character <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.</div>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+motion.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/motion.html%0D%0DContext%3A%0D%0D%60%60%60%0D%60-%60%20%20%3Cminus%3E%09%09%5Bcount%5D%20lines%20upward%2C%20on%20the%20first%20non-blank%0A%09%09%09character%20%7Clinewise%7C.%0A%0A%2B%09%09or%09%09%09%09%09%2A%2B%2A%0ACTRL-M%09%09or%09%09%09%09%09%2ACTRL-M%2A%20%2A%3CCR%3E%2A%0A%3CCR%3E%09%09%09%5Bcount%5D%20lines%20downward%2C%20on%20the%20first%20non-blank%0A%09%09%09character%20%7Clinewise%7C.%0D%60%60%60">+		or</a><div class="old-help-para">					<a name="%2B"></a><code class="help-tag-right">+</code>
CTRL-M		or					<a name="CTRL-M"></a><code class="help-tag-right">CTRL-M</code> <a name="%3CCR%3E"></a><code class="help-tag">&lt;CR&gt;</code>
<code>&lt;CR&gt;</code>			[count] lines downward, on the first non-blank
			character <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.</div>
<div class="old-help-para">							<a name="_"></a><code class="help-tag-right">_</code>
_  <code>&lt;underscore&gt;</code>		[count] - 1 lines downward, on the first non-blank
			character <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.</div>
<div class="old-help-para">							<a name="G"></a><code class="help-tag-right">G</code>
G			Goto line [count], default last line, on the first
			non-blank character <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.  If <a href="/neovim-docs-web/en/options#'startofline'">'startofline'</a> not
			set, keep the same column.
			G is one of the <a href="/neovim-docs-web/en/motion#jump-motions">jump-motions</a>.</div>
<div class="old-help-para">							<a name="%3CC-End%3E"></a><code class="help-tag-right">&lt;C-End&gt;</code>
<code>&lt;C-End&gt;</code>			Goto line [count], default last line, on the last
			character <a href="/neovim-docs-web/en/motion#inclusive">inclusive</a>.</div>
<div class="old-help-para"><code>&lt;C-Home&gt;</code>	or					<a name="gg"></a><code class="help-tag-right">gg</code> <a name="%3CC-Home%3E"></a><code class="help-tag">&lt;C-Home&gt;</code>
gg			Goto line [count], default first line, on the first
			non-blank character <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.  If <a href="/neovim-docs-web/en/options#'startofline'">'startofline'</a> not
			set, keep the same column.</div>
<div class="old-help-para">							<a name="%3A%5Brange%5D"></a><code class="help-tag-right">:[range]</code>
:[range]		Set the cursor on the last line number in [range].
			[range] can also be just one line number, e.g., ":1"
			or ":'m".
			In contrast with <a href="/neovim-docs-web/en/motion#G">G</a> this command does not modify the
			<a href="/neovim-docs-web/en/motion#jumplist">jumplist</a>.
							<a name="N%25"></a><code class="help-tag-right">N%</code>
<code>{count}</code>%		Go to <code>{count}</code> percentage in the file, on the first
			non-blank in the line <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.  To compute the new
			line number this formula is used:
			    (<code>{count}</code> * number-of-lines + 99) / 100
			See also <a href="/neovim-docs-web/en/options#'startofline'">'startofline'</a> option.</div>
<div class="old-help-para">:[range]go[to] [count]					<a name="%3Ago"></a><code class="help-tag-right">:go</code> <a name="%3Agoto"></a><code class="help-tag">:goto</code> <a name="go"></a><code class="help-tag">go</code>
[count]go		Go to [count] byte in the buffer.  Default [count] is
			one, start of the file.  When giving [range], the
			last number in it used as the byte count.  End-of-line
			characters are counted depending on the current
			<a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> setting.
			Also see the <a href="/neovim-docs-web/en/builtin#line2byte()">line2byte()</a> function, and the 'o'
			option in <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a>.</div>
<div class="old-help-para">These commands move to the specified line.  They stop when reaching the first
or the last line.  The first two commands put the cursor in the same column
(if possible) as it was after the last command that changed the column,
except after the "$" command, then the cursor will be put on the last
character of the line.</div>
<div class="old-help-para"><h2 class="help-heading">4. Word motions<span class="help-heading-tags">						<a name="word-motions"></a><span class="help-tag">word-motions</span></span></h2></div>
<div class="old-help-para"><code>&lt;S-Right&gt;</code>	or					<a name="%3CS-Right%3E"></a><code class="help-tag-right">&lt;S-Right&gt;</code> <a name="w"></a><code class="help-tag">w</code>
w			[count] words forward.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para"><code>&lt;C-Right&gt;</code>	or					<a name="%3CC-Right%3E"></a><code class="help-tag-right">&lt;C-Right&gt;</code> <a name="W"></a><code class="help-tag">W</code>
W			[count] WORDS forward.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">							<a name="e"></a><code class="help-tag-right">e</code>
e			Forward to the end of word [count] <a href="/neovim-docs-web/en/motion#inclusive">inclusive</a>.
			Does not stop in an empty line.</div>
<div class="old-help-para">							<a name="E"></a><code class="help-tag-right">E</code>
E			Forward to the end of WORD [count] <a href="/neovim-docs-web/en/motion#inclusive">inclusive</a>.
			Does not stop in an empty line.</div>
<div class="old-help-para"><code>&lt;S-Left&gt;</code>	or					<a name="%3CS-Left%3E"></a><code class="help-tag-right">&lt;S-Left&gt;</code> <a name="b"></a><code class="help-tag">b</code>
b			[count] words backward.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para"><code>&lt;C-Left&gt;</code>	or					<a name="%3CC-Left%3E"></a><code class="help-tag-right">&lt;C-Left&gt;</code> <a name="B"></a><code class="help-tag">B</code>
B			[count] WORDS backward.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">							<a name="ge"></a><code class="help-tag-right">ge</code>
ge			Backward to the end of word [count] <a href="/neovim-docs-web/en/motion#inclusive">inclusive</a>.</div>
<div class="old-help-para">							<a name="gE"></a><code class="help-tag-right">gE</code>
gE			Backward to the end of WORD [count] <a href="/neovim-docs-web/en/motion#inclusive">inclusive</a>.</div>
<div class="old-help-para">These commands move over words or WORDS.
							<a name="word"></a><code class="help-tag-right">word</code>
A word consists of a sequence of letters, digits and underscores, or a
sequence of other non-blank characters, separated with white space (spaces,
tabs, <code>&lt;EOL&gt;</code>).  This can be changed with the <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> option.  An empty line
is also considered to be a word.
							<a name="WORD"></a><code class="help-tag-right">WORD</code>
A WORD consists of a sequence of non-blank characters, separated with white
space.  An empty line is also considered to be a WORD.</div>
<div class="old-help-para">A sequence of folded lines is counted for one word of a single character.
"w" and "W", "e" and "E" move to the start/end of the first word or WORD after
a range of folded lines.  "b" and "B" move to the start of the first word or
WORD before the fold.</div>
<div class="old-help-para">Special case: "cw" and "cW" are treated like "ce" and "cE" if the cursor is
on a non-blank.  This is Vi-compatible, see <a href="/neovim-docs-web/en/options#cpo-_">cpo-_</a> to change the behavior.</div>
<div class="old-help-para">Another special case: When using the "w" motion in combination with an
operator and the last word moved over is at the end of a line, the end of
that word becomes the end of the operated text, not the first word in the
next line.</div>
<div class="old-help-para">The original Vi implementation of "e" is buggy.  For example, the "e" command
will stop on the first character of a line if the previous line was empty.
But when you use "2e" this does not happen.  In Vim "ee" and "2e" are the
same, which is more logical.  However, this causes a small incompatibility
between Vi and Vim.</div>
<div class="old-help-para"><h2 class="help-heading">5. Text object motions<span class="help-heading-tags">					<a name="object-motions"></a><span class="help-tag">object-motions</span></span></h2></div>
<div class="old-help-para">							<a name="("></a><code class="help-tag-right">(</code>
(			[count] <a href="/neovim-docs-web/en/motion#sentence">sentence</a>s backward.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">							<a name=")"></a><code class="help-tag-right">)</code>
)			[count] <a href="/neovim-docs-web/en/motion#sentence">sentence</a>s forward.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">							<a name="%7B"></a><code class="help-tag-right">{</code>
{			[count] <a href="/neovim-docs-web/en/motion#paragraph">paragraph</a>s backward.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">							<a name="%7D"></a><code class="help-tag-right">}</code>
}			[count] <a href="/neovim-docs-web/en/motion#paragraph">paragraph</a>s forward.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">							<a name="%5D%5D"></a><code class="help-tag-right">]]</code>
]]			[count] <a href="/neovim-docs-web/en/motion#section">section</a>s forward or to the next '{' in the
			first column.  When used after an operator, then also
			stops below a '}' in the first column.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>
			Note that <a href="/neovim-docs-web/en/motion#exclusive-linewise">exclusive-linewise</a> often applies.</div>
<div class="old-help-para">							<a name="%5D%5B"></a><code class="help-tag-right">][</code>
][			[count] <a href="/neovim-docs-web/en/motion#section">section</a>s forward or to the next '}' in the
			first column.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>
			Note that <a href="/neovim-docs-web/en/motion#exclusive-linewise">exclusive-linewise</a> often applies.</div>
<div class="old-help-para">							<a name="%5B%5B"></a><code class="help-tag-right">[[</code>
[[			[count] <a href="/neovim-docs-web/en/motion#section">section</a>s backward or to the previous '{' in
			the first column.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>
			Note that <a href="/neovim-docs-web/en/motion#exclusive-linewise">exclusive-linewise</a> often applies.</div>
<div class="old-help-para">							<a name="%5B%5D"></a><code class="help-tag-right">[]</code>
[]			[count] <a href="/neovim-docs-web/en/motion#section">section</a>s backward or to the previous '}' in
			the first column.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>
			Note that <a href="/neovim-docs-web/en/motion#exclusive-linewise">exclusive-linewise</a> often applies.</div>
<div class="old-help-para">These commands move over three kinds of text objects.</div>
<div class="old-help-para">							<a name="sentence"></a><code class="help-tag-right">sentence</code>
A sentence is defined as ending at a '.', '!' or '?' followed by either the
end of a line, or by a space or tab.  Any number of closing ')', ']', '"'
and ''' characters may appear after the '.', '!' or '?' before the spaces,
tabs or end of line.  A paragraph and section boundary is also a sentence
boundary.
If the 'J' flag is present in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>, at least two spaces have to
follow the punctuation mark; <code>&lt;Tab&gt;</code>s are not recognized as white space.
The definition of a sentence cannot be changed.</div>
<div class="old-help-para">							<a name="paragraph"></a><code class="help-tag-right">paragraph</code>
A paragraph begins after each empty line, and also at each of a set of
paragraph macros, specified by the pairs of characters in the <a href="/neovim-docs-web/en/options#'paragraphs'">'paragraphs'</a>
option.  The default is "IPLPPPQPP TPHPLIPpLpItpplpipbp", which corresponds to
the macros ".IP", ".LP", etc.  (These are nroff macros, so the dot must be in
the first column).  A section boundary is also a paragraph boundary.
Note that a blank line (only containing white space) is NOT a paragraph
boundary.
Note: this does not include a '<code>{' or '}</code>' in the first column.</div>
<div class="old-help-para">							<a name="section"></a><code class="help-tag-right">section</code>
A section begins after a form-feed (<code>&lt;C-L&gt;</code>) in the first column and at each of
a set of section macros, specified by the pairs of characters in the
<a href="/neovim-docs-web/en/options#'sections'">'sections'</a> option.  The default is "SHNHH HUnhsh", which defines a section to
start at the nroff macros ".SH", ".NH", ".H", ".HU", ".nh" and ".sh".</div>
<div class="old-help-para">The "]]" and "[[" commands stop at the '<code>{' in the first column.  This is}</code>
useful to find the start of a function in a C program.  To search for a '}' in
the first column, the end of a C function, use "][" (forward) or "[]"
(backward).  Note that the first character of the command determines the
search direction.</div>
<div class="old-help-para">If your '<code>{' or '}</code>' are not in the first column, and you would like to use "[["
and "]]" anyway, try these mappings:<pre>:map [[ ?{&lt;CR&gt;w99[{
:map ][ /}&lt;CR&gt;b99]}
:map ]] j0[[%/{&lt;CR&gt;
:map [] k$][%?}&lt;CR&gt;</pre>
[type these literally, see <a href="/neovim-docs-web/en/intro#%3C%3E">&lt;&gt;</a>]</div>
<div class="old-help-para"><h2 class="help-heading">6. Text object selection<span class="help-heading-tags">			<a name="object-select"></a><span class="help-tag">object-select</span> <a name="text-objects"></a><span class="help-tag">text-objects</span></span></h2>						<a name="v_a"></a><code class="help-tag-right">v_a</code> <a name="v_i"></a><code class="help-tag">v_i</code></div>
<div class="old-help-para">This is a series of commands that can only be used while in Visual mode or
after an operator.  The commands that start with "a" select "a"n object
including white space, the commands starting with "i" select an "inner" object
without white space, or just the white space.  Thus the "inner" commands
always select less text than the "a" commands.</div>
<div class="old-help-para">Also see <code>gn</code> and <code>gN</code>, operating on the last search pattern.</div>
<div class="old-help-para">							<a name="v_aw"></a><code class="help-tag-right">v_aw</code> <a name="aw"></a><code class="help-tag">aw</code>
aw			"a word", select [count] words (see <a href="/neovim-docs-web/en/motion#word">word</a>).
			Leading or trailing white space is included, but not
			counted.
			When used in Visual linewise mode "aw" switches to
			Visual charwise mode.</div>
<div class="old-help-para">							<a name="v_iw"></a><code class="help-tag-right">v_iw</code> <a name="iw"></a><code class="help-tag">iw</code>
iw			"inner word", select [count] words (see <a href="/neovim-docs-web/en/motion#word">word</a>).
			White space between words is counted too.
			When used in Visual linewise mode "iw" switches to
			Visual charwise mode.</div>
<div class="old-help-para">							<a name="v_aW"></a><code class="help-tag-right">v_aW</code> <a name="aW"></a><code class="help-tag">aW</code>
aW			"a WORD", select [count] WORDs (see <a href="/neovim-docs-web/en/motion#WORD">WORD</a>).
			Leading or trailing white space is included, but not
			counted.
			When used in Visual linewise mode "aW" switches to
			Visual charwise mode.</div>
<div class="old-help-para">							<a name="v_iW"></a><code class="help-tag-right">v_iW</code> <a name="iW"></a><code class="help-tag">iW</code>
iW			"inner WORD", select [count] WORDs (see <a href="/neovim-docs-web/en/motion#WORD">WORD</a>).
			White space between words is counted too.
			When used in Visual linewise mode "iW" switches to
			Visual charwise mode.</div>
<div class="old-help-para">							<a name="v_as"></a><code class="help-tag-right">v_as</code> <a name="as"></a><code class="help-tag">as</code>
as			"a sentence", select [count] sentences (see
			<a href="/neovim-docs-web/en/motion#sentence">sentence</a>).
			When used in Visual mode it is made charwise.</div>
<div class="old-help-para">							<a name="v_is"></a><code class="help-tag-right">v_is</code> <a name="is"></a><code class="help-tag">is</code>
is			"inner sentence", select [count] sentences (see
			<a href="/neovim-docs-web/en/motion#sentence">sentence</a>).
			When used in Visual mode it is made charwise.</div>
<div class="old-help-para">							<a name="v_ap"></a><code class="help-tag-right">v_ap</code> <a name="ap"></a><code class="help-tag">ap</code>
ap			"a paragraph", select [count] paragraphs (see
			<a href="/neovim-docs-web/en/motion#paragraph">paragraph</a>).
			Exception: a blank line (only containing white space)
			is also a paragraph boundary.
			When used in Visual mode it is made linewise.</div>
<div class="old-help-para">							<a name="v_ip"></a><code class="help-tag-right">v_ip</code> <a name="ip"></a><code class="help-tag">ip</code>
ip			"inner paragraph", select [count] paragraphs (see
			<a href="/neovim-docs-web/en/motion#paragraph">paragraph</a>).
			Exception: a blank line (only containing white space)
			is also a paragraph boundary.
			When used in Visual mode it is made linewise.</div>
<div class="old-help-para">a]						<a name="v_a%5D"></a><code class="help-tag-right">v_a]</code> <a name="v_a%5B"></a><code class="help-tag">v_a[</code> <a name="a%5D"></a><code class="help-tag">a]</code> <a name="a%5B"></a><code class="help-tag">a[</code>
a[			"a [] block", select [count] '[' ']' blocks.  This
			goes backwards to the [count] unclosed '[', and finds
			the matching ']'.  The enclosed text is selected,
			including the '[' and ']'.
			When used in Visual mode it is made charwise.</div>
<div class="old-help-para">i]						<a name="v_i%5D"></a><code class="help-tag-right">v_i]</code> <a name="v_i%5B"></a><code class="help-tag">v_i[</code> <a name="i%5D"></a><code class="help-tag">i]</code> <a name="i%5B"></a><code class="help-tag">i[</code>
i[			"inner [] block", select [count] '[' ']' blocks.  This
			goes backwards to the [count] unclosed '[', and finds
			the matching ']'.  The enclosed text is selected,
			excluding the '[' and ']'.
			When used in Visual mode it is made charwise.</div>
<div class="old-help-para">a)							<a name="v_a)"></a><code class="help-tag-right">v_a)</code> <a name="a)"></a><code class="help-tag">a)</code> <a name="a("></a><code class="help-tag">a(</code>
a(							<a name="vab"></a><code class="help-tag-right">vab</code> <a name="v_ab"></a><code class="help-tag">v_ab</code> <a name="v_a("></a><code class="help-tag">v_a(</code> <a name="ab"></a><code class="help-tag">ab</code>
ab			"a block", select [count] blocks, from "[count] [(" to
			the matching ')', including the '(' and ')' (see
			<a href="/neovim-docs-web/en/motion#%5B(">[(</a>).  Does not include white space outside of the
			parenthesis.
			When used in Visual mode it is made charwise.</div>
<div class="old-help-para">i)							<a name="v_i)"></a><code class="help-tag-right">v_i)</code> <a name="i)"></a><code class="help-tag">i)</code> <a name="i("></a><code class="help-tag">i(</code>
i(							<a name="vib"></a><code class="help-tag-right">vib</code> <a name="v_ib"></a><code class="help-tag">v_ib</code> <a name="v_i("></a><code class="help-tag">v_i(</code> <a name="ib"></a><code class="help-tag">ib</code>
ib			"inner block", select [count] blocks, from "[count] [("
			to the matching ')', excluding the '(' and ')' (see
			<a href="/neovim-docs-web/en/motion#%5B(">[(</a>).  If the cursor is not inside a () block, then
 			find the next "(".
			When used in Visual mode it is made charwise.</div>
<div class="old-help-para">a&gt;						<a name="v_a%3E"></a><code class="help-tag-right">v_a&gt;</code> <a name="v_a%3C"></a><code class="help-tag">v_a&lt;</code> <a name="a%3E"></a><code class="help-tag">a&gt;</code> <a name="a%3C"></a><code class="help-tag">a&lt;</code>
a&lt;			"a &lt;&gt; block", select [count] &lt;&gt; blocks, from the
			[count]'th unmatched '&lt;' backwards to the matching
			'&gt;', including the '&lt;' and '&gt;'.
			When used in Visual mode it is made charwise.</div>
<div class="old-help-para">i&gt;						<a name="v_i%3E"></a><code class="help-tag-right">v_i&gt;</code> <a name="v_i%3C"></a><code class="help-tag">v_i&lt;</code> <a name="i%3E"></a><code class="help-tag">i&gt;</code> <a name="i%3C"></a><code class="help-tag">i&lt;</code>
i&lt;			"inner &lt;&gt; block", select [count] &lt;&gt; blocks, from
			the [count]'th unmatched '&lt;' backwards to the matching
			'&gt;', excluding the '&lt;' and '&gt;'.
			When used in Visual mode it is made charwise.</div>
<div class="old-help-para">						<a name="v_at"></a><code class="help-tag-right">v_at</code> <a name="at"></a><code class="help-tag">at</code>
at			"a tag block", select [count] tag blocks, from the
			[count]'th unmatched "&lt;aaa&gt;" backwards to the matching
			"&lt;/aaa&gt;", including the "&lt;aaa&gt;" and "&lt;/aaa&gt;".
			See <a href="/neovim-docs-web/en/motion#tag-blocks">tag-blocks</a> about the details.
			When used in Visual mode it is made charwise.</div>
<div class="old-help-para">						<a name="v_it"></a><code class="help-tag-right">v_it</code> <a name="it"></a><code class="help-tag">it</code>
it			"inner tag block", select [count] tag blocks, from the
			[count]'th unmatched "&lt;aaa&gt;" backwards to the matching
			"&lt;/aaa&gt;", excluding the "&lt;aaa&gt;" and "&lt;/aaa&gt;".
			See <a href="/neovim-docs-web/en/motion#tag-blocks">tag-blocks</a> about the details.
			When used in Visual mode it is made charwise.</div>
<div class="old-help-para">a}							<a name="v_a%7D"></a><code class="help-tag-right">v_a}</code> <a name="a%7D"></a><code class="help-tag">a}</code> <a name="a%7B"></a><code class="help-tag">a{</code>
a{							<a name="v_aB"></a><code class="help-tag-right">v_aB</code> <a name="v_a%7B"></a><code class="help-tag">v_a{</code> <a name="aB"></a><code class="help-tag">aB</code>
aB			"a Block", select [count] Blocks, from "[count] [{" to
			the matching '}', including the '<code>{' and '}</code>' (see
			<a href="/neovim-docs-web/en/motion#%5B%7B">[{</a>).
			When used in Visual mode it is made charwise.</div>
<div class="old-help-para">i}							<a name="v_i%7D"></a><code class="help-tag-right">v_i}</code> <a name="i%7D"></a><code class="help-tag">i}</code> <a name="i%7B"></a><code class="help-tag">i{</code>
i{							<a name="v_iB"></a><code class="help-tag-right">v_iB</code> <a name="v_i%7B"></a><code class="help-tag">v_i{</code> <a name="iB"></a><code class="help-tag">iB</code>
iB			"inner Block", select [count] Blocks, from "[count] [{"
			to the matching '}', excluding the '<code>{' and '}</code>' (see
			<a href="/neovim-docs-web/en/motion#%5B%7B">[{</a>).
			When used in Visual mode it is made charwise.</div>
<div class="old-help-para">a"							<a name="v_aquote"></a><code class="help-tag-right">v_aquote</code> <a name="aquote"></a><code class="help-tag">aquote</code>
a'							<a name="v_a'"></a><code class="help-tag-right">v_a'</code> <a name="a'"></a><code class="help-tag">a'</code>
a`							<a name="v_a%60"></a><code class="help-tag-right">v_a`</code> <a name="a%60"></a><code class="help-tag">a`</code>
			"a quoted string".  Selects the text from the previous
			quote until the next quote.  The <a href="/neovim-docs-web/en/options#'quoteescape'">'quoteescape'</a> option
			is used to skip escaped quotes.
			Only works within one line.
			When the cursor starts on a quote, Vim will figure out
			which quote pairs form a string by searching from the
			start of the line.
			Any trailing white space is included, unless there is
			none, then leading white space is included.
			When used in Visual mode it is made charwise.
			Repeating this object in Visual mode another string is
			included.  A count is currently not used.</div>
<div class="old-help-para">i"							<a name="v_iquote"></a><code class="help-tag-right">v_iquote</code> <a name="iquote"></a><code class="help-tag">iquote</code>
i'							<a name="v_i'"></a><code class="help-tag-right">v_i'</code> <a name="i'"></a><code class="help-tag">i'</code>
i`							<a name="v_i%60"></a><code class="help-tag-right">v_i`</code> <a name="i%60"></a><code class="help-tag">i`</code>
			Like a", a' and a`, but exclude the quotes and
			repeating won't extend the Visual selection.
			Special case: With a count of 2 the quotes are
			included, but no extra white space as with a"/a'/a`.</div>
<div class="old-help-para">When used after an operator:
For non-block objects:
	For the "a" commands: The operator applies to the object and the white
	space after the object.  If there is no white space after the object
	or when the cursor was in the white space before the object, the white
	space before the object is included.
	For the "inner" commands: If the cursor was on the object, the
	operator applies to the object.  If the cursor was on white space, the
	operator applies to the white space.
For a block object:
	The operator applies to the block where the cursor is in, or the block
	on which the cursor is on one of the braces.  For the "inner" commands
	the surrounding braces are excluded.  For the "a" commands, the braces
	are included.</div>
<div class="old-help-para">When used in Visual mode:
When start and end of the Visual area are the same (just after typing "v"):
	One object is selected, the same as for using an operator.
When start and end of the Visual area are not the same:
	For non-block objects the area is extended by one object or the white
	space up to the next object, or both for the "a" objects.  The
	direction in which this happens depends on which side of the Visual
	area the cursor is.  For the block objects the block is extended one
	level outwards.</div>
<div class="old-help-para">For illustration, here is a list of delete commands, grouped from small to big
objects.  Note that for a single character and a whole line the existing vi
movement commands are used.
	"dl"	delete character (alias: "x")		<a href="/neovim-docs-web/en/change#dl">dl</a>
	"diw"	delete inner word			<a name="diw"></a><code class="help-tag-right">diw</code>
	"daw"	delete a word				<a name="daw"></a><code class="help-tag-right">daw</code>
	"diW"	delete inner WORD (see <a href="/neovim-docs-web/en/motion#WORD">WORD</a>)		<a name="diW"></a><code class="help-tag-right">diW</code>
	"daW"	delete a WORD (see <a href="/neovim-docs-web/en/motion#WORD">WORD</a>)		<a name="daW"></a><code class="help-tag-right">daW</code>
	"dgn"   delete the next search pattern match    <a name="dgn"></a><code class="help-tag">dgn</code>
	"dd"	delete one line				<a href="/neovim-docs-web/en/change#dd">dd</a>
	"dis"	delete inner sentence			<a name="dis"></a><code class="help-tag-right">dis</code>
	"das"	delete a sentence			<a name="das"></a><code class="help-tag-right">das</code>
	"dib"	delete inner '(' ')' block		<a name="dib"></a><code class="help-tag-right">dib</code>
	"dab"	delete a '(' ')' block			<a name="dab"></a><code class="help-tag-right">dab</code>
	"dip"	delete inner paragraph			<a name="dip"></a><code class="help-tag-right">dip</code>
	"dap"	delete a paragraph			<a name="dap"></a><code class="help-tag-right">dap</code>
	"diB"	delete inner '<code>{' '}</code>' block		<a name="diB"></a><code class="help-tag-right">diB</code>
	"daB"	delete a '<code>{' '}</code>' block			<a name="daB"></a><code class="help-tag-right">daB</code></div>
<div class="old-help-para">Note the difference between using a movement command and an object.  The
movement command operates from here (cursor position) to where the movement
takes us.  When using an object the whole object is operated upon, no matter
where on the object the cursor is.  For example, compare "dw" and "daw": "dw"
deletes from the cursor position to the start of the next word, "daw" deletes
the word under the cursor and the space after or before it.</div>
<div class="old-help-para">Tag blocks						<a name="tag-blocks"></a><code class="help-tag-right">tag-blocks</code></div>
<div class="old-help-para">For the "it" and "at" text objects an attempt is done to select blocks between
matching tags for HTML and XML.  But since these are not completely compatible
there are a few restrictions.</div>
<div class="old-help-para">The normal method is to select a <code>&lt;tag&gt;</code> until the matching &lt;/tag&gt;.  For "at"
the tags are included, for "it" they are excluded.  But when "it" is repeated
the tags will be included (otherwise nothing would change).  Also, "it" used
on a tag block with no contents will select the leading tag.</div>
<div class="old-help-para">"&lt;aaa/&gt;" items are skipped.  Case is ignored, also for XML where case does
matter.</div>
<div class="old-help-para">In HTML it is possible to have a tag like <code>&lt;br&gt;</code> or &lt;meta ...&gt; without a
matching end tag.  These are ignored.</div>
<div class="old-help-para">The text objects are tolerant about mistakes.  Stray end tags are ignored.</div>
<div class="old-help-para"><h2 class="help-heading">7. Marks<span class="help-heading-tags">					<a name="mark-motions"></a><span class="help-tag">mark-motions</span> <a name="E20"></a><span class="help-tag">E20</span> <a name="E78"></a><span class="help-tag">E78</span></span></h2></div>
<div class="old-help-para">Jumping to a mark can be done in two ways:
1. With (backtick):	  The cursor is positioned at the specified location
			  and the motion is <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>.
2. With ' (single quote): The cursor is positioned on the first non-blank
			  character in the line of the specified location and
			  the motion is linewise.
						<a name="mark-view"></a><code class="help-tag-right">mark-view</code>
3. Apart from the above if <a href="/neovim-docs-web/en/options#'jumpoptions'">'jumpoptions'</a> contains "view", they will also try to
restore the mark view. This is the number of lines between the cursor position
and the window topline (first buffer line displayed in the window) when it was
set.</div>
<div class="old-help-para">						<a name="m"></a><code class="help-tag-right">m</code> <a name="mark"></a><code class="help-tag">mark</code> <a name="Mark"></a><code class="help-tag">Mark</code>
m{a-zA-Z}		Set mark <code>{a-zA-Z}</code> at cursor position (does not move
			the cursor, this is not a motion command).</div>
<div class="old-help-para">						<a name="m'"></a><code class="help-tag-right">m'</code> <a name="m%60"></a><code class="help-tag">m`</code>
m'  or  m`		Set the previous context mark.  This can be jumped to
			with the "''" or "``" command (does not move the
			cursor, this is not a motion command).</div>
<div class="old-help-para">						<a name="m%5B"></a><code class="help-tag-right">m[</code> <a name="m%5D"></a><code class="help-tag">m]</code>
m[  or  m]		Set the <a href="/neovim-docs-web/en/motion#'%5B">'[</a> or <a href="/neovim-docs-web/en/motion#'%5D">']</a> mark.  Useful when an operator is
			to be simulated by multiple commands.  (does not move
			the cursor, this is not a motion command).</div>
<div class="old-help-para">						<a name="m%3C"></a><code class="help-tag-right">m&lt;</code> <a name="m%3E"></a><code class="help-tag">m&gt;</code>
m&lt;  or  m&gt;		Set the <a href="/neovim-docs-web/en/motion#'%3C">'&lt;</a> or <a href="/neovim-docs-web/en/motion#'%3E">'&gt;</a> mark.  Useful to change what the
			<code>gv</code> command selects.  (does not move the cursor, this
			is not a motion command).
			Note that the Visual mode cannot be set, only the
			start and end position.</div>
<div class="old-help-para">						<a name="%3Ama"></a><code class="help-tag-right">:ma</code> <a name="%3Amark"></a><code class="help-tag">:mark</code> <a name="E191"></a><code class="help-tag">E191</code>
:[range]ma[rk] <code>{a-zA-Z'}</code>
			Set mark <code>{a-zA-Z'}</code> at last line number in [range],
			column 0.  Default is cursor line.</div>
<div class="old-help-para">						<a name="%3Ak"></a><code class="help-tag-right">:k</code>
:[range]k{a-zA-Z'}	Same as :mark, but the space before the mark name can
			be omitted.</div>
<div class="old-help-para">						<a name="'"></a><code class="help-tag-right">'</code> <a name="'a"></a><code class="help-tag">'a</code> <a name="%60"></a><code class="help-tag">`</code> <a name="%60a"></a><code class="help-tag">`a</code>
'{a-z}{a-z}		Jump to the mark {a-z} in the current buffer.</div>
<div class="old-help-para">						<a name="'A"></a><code class="help-tag-right">'A</code> <a name="'0"></a><code class="help-tag">'0</code> <a name="%60A"></a><code class="help-tag">`A</code> <a name="%600"></a><code class="help-tag">`0</code>
'<code>{A-Z0-9}</code>{A-Z0-9}	To the mark {A-Z0-9} in the file where it was set (not
			a motion command when in another file).</div>
<div class="old-help-para">						<a name="g'"></a><code class="help-tag-right">g'</code> <a name="g'a"></a><code class="help-tag">g'a</code> <a name="g%60"></a><code class="help-tag">g`</code> <a name="g%60a"></a><code class="help-tag">g`a</code>
g'{mark}  g`{mark}
			Jump to the <code>{mark}</code>, but don't change the jumplist when
			jumping within the current buffer.  Example:<pre>g`"</pre></div>
<div class="old-help-para">			jumps to the last known position in a file.
			See also <a href="/neovim-docs-web/en/motion#%3Akeepjumps">:keepjumps</a>.</div>
<div class="old-help-para">						<a name="%3Amarks"></a><code class="help-tag-right">:marks</code>
:marks			List all the current marks (not a motion command).
			The <a href="/neovim-docs-web/en/motion#'(">'(</a>, <a href="/neovim-docs-web/en/motion#')">')</a>, <a href="/neovim-docs-web/en/motion#'%7B">'{</a> and <a href="/neovim-docs-web/en/motion#'%7D">'}</a> marks are not listed.
			The first column has number zero.
						<a name="E283"></a><code class="help-tag-right">E283</code>
:marks <code>{arg}</code>		List the marks that are mentioned in <code>{arg}</code> (not a
			motion command).  For example:<pre>:marks aB</pre></div>
<div class="old-help-para">			to list marks 'a' and 'B'.</div>
<div class="old-help-para">							<a name="%3Adelm"></a><code class="help-tag-right">:delm</code> <a name="%3Adelmarks"></a><code class="help-tag">:delmarks</code>
:delm[arks] <code>{marks}</code>	Delete the specified marks.  Marks that can be deleted
			include A-Z and 0-9.  You cannot delete the ' mark.
			They can be specified by giving the list of mark
			names, or with a range, separated with a dash.  Spaces
			are ignored.  Examples:<pre>:delmarks a              deletes mark a
:delmarks a b 1    deletes marks a, b and 1
:delmarks Aa       deletes marks A and a
:delmarks p-z      deletes marks in the range p to z
:delmarks ^.[]     deletes marks ^ . [ ]
:delmarks \"              deletes mark "</pre></div>
<div class="old-help-para">:delm[arks]!		Delete all marks for the current buffer, but not marks
			A-Z or 0-9.  Also clear the <a href="/neovim-docs-web/en/motion#changelist">changelist</a>.</div>
<div class="old-help-para">A mark is not visible in any way.  It is just a position in the file that is
remembered.  Do not confuse marks with named registers, they are totally
unrelated.</div>
<div class="old-help-para">'a - 'z		lowercase marks, valid within one file
'A - 'Z		uppercase marks, also called file marks, valid between files
'0 - '9		numbered marks, set from .shada file</div>
<div class="old-help-para">Lowercase marks 'a to 'z are remembered as long as the file remains in the
buffer list.  If you remove the file from the buffer list, all its marks are
lost.  If you delete a line that contains a mark, that mark is erased.</div>
<div class="old-help-para">Lowercase marks can be used in combination with operators.  For example: "d't"
deletes the lines from the cursor position to mark 't'.  Hint: Use mark 't' for
Top, 'b' for Bottom, etc..  Lowercase marks are restored when using undo and
redo.</div>
<div class="old-help-para">Uppercase marks 'A to 'Z include the file name.  You can use them to jump from
file to file.  You can only use an uppercase mark with an operator if the mark
is in the current file.  The line number of the mark remains correct, even if
you insert/delete lines or edit another file for a moment.  When the <a href="/neovim-docs-web/en/options#'shada'">'shada'</a>
option is not empty, uppercase marks are kept in the .shada file.  See
<a href="/neovim-docs-web/en/starting#shada-file-marks">shada-file-marks</a>.</div>
<div class="old-help-para">Numbered marks '0 to '9 are quite different.  They can not be set directly.
They are only present when using a shada file <a href="/neovim-docs-web/en/starting#shada-file">shada-file</a>.  Basically '0
is the location of the cursor when you last exited Vim, '1 the last but one
time, etc.  Use the "r" flag in <a href="/neovim-docs-web/en/options#'shada'">'shada'</a> to specify files for which no
Numbered mark should be stored.  See <a href="/neovim-docs-web/en/starting#shada-file-marks">shada-file-marks</a>.</div>
<div class="old-help-para">							<a name="'%5B"></a><code class="help-tag-right">'[</code> <a name="%60%5B"></a><code class="help-tag">`[</code>
'[[			To the first character of the previously changed
			or yanked text.</div>
<div class="old-help-para">							<a name="'%5D"></a><code class="help-tag-right">']</code> <a name="%60%5D"></a><code class="help-tag">`]</code>
']]			To the last character of the previously changed or
			yanked text.</div>
<div class="old-help-para">After executing an operator the Cursor is put at the beginning of the text
that was operated upon.  After a put command ("p" or "P") the cursor is
sometimes placed at the first inserted line and sometimes on the last inserted
character.  The four commands above put the cursor at either end.  Example:
After yanking 10 lines you want to go to the last one of them: "10Y']".  After
inserting several lines with the "p" command you want to jump to the lowest
inserted line: "p']".  This also works for text that has been inserted.</div>
<div class="old-help-para">Note: After deleting text, the start and end positions are the same, except
when using blockwise Visual mode.  These commands do not work when no change
was made yet in the current file.</div>
<div class="old-help-para">							<a name="'%3C"></a><code class="help-tag-right">'&lt;</code> <a name="%60%3C"></a><code class="help-tag">`&lt;</code>
'&lt;&lt;			To the first line or character of the last selected
			Visual area in the current buffer.  For block mode it
			may also be the last character in the first line (to
			be able to define the block).</div>
<div class="old-help-para">							<a name="'%3E"></a><code class="help-tag-right">'&gt;</code> <a name="%60%3E"></a><code class="help-tag">`&gt;</code>
'&gt;&gt;			To the last line or character of the last selected
			Visual area in the current buffer.  For block mode it
			may also be the first character of the last line (to
			be able to define the block).  Note that <a href="/neovim-docs-web/en/options#'selection'">'selection'</a>
			applies, the position may be just after the Visual
			area.</div>
<div class="old-help-para">							<a name="''"></a><code class="help-tag-right">''</code> <a name="%60%60"></a><code class="help-tag">``</code>
''  ``			To the position before the latest jump, or where the
			last "m'" or "m`" command was given.  Not set when the
			<a href="/neovim-docs-web/en/motion#%3Akeepjumps">:keepjumps</a> command modifier was used.
			Also see <a href="/neovim-docs-web/en/tips#restore-position">restore-position</a>.</div>
<div class="old-help-para">							<a name="'quote"></a><code class="help-tag-right">'quote</code> <a name="%60quote"></a><code class="help-tag">`quote</code>
'""			To the cursor position when last exiting the current
			buffer.  Defaults to the first character of the first
			line.  See <a href="/neovim-docs-web/en/usr_05#last-position-jump">last-position-jump</a> for how to use this
			for each opened file.
			Only one position is remembered per buffer, not one
			for each window.  As long as the buffer is visible in
			a window the position won't be changed.  Mark is also
			reset when <a href="/neovim-docs-web/en/starting#%3Awshada">:wshada</a> is run.</div>
<div class="old-help-para">							<a name="'%5E"></a><code class="help-tag-right">'^</code> <a name="%60%5E"></a><code class="help-tag">`^</code>
'^^			To the position where the cursor was the last time
			when Insert mode was stopped.  This is used by the
			<a href="/neovim-docs-web/en/insert#gi">gi</a> command.  Not set when the <a href="/neovim-docs-web/en/motion#%3Akeepjumps">:keepjumps</a> command
			modifier was used.</div>
<div class="old-help-para">							<a name="'."></a><code class="help-tag-right">'.</code> <a name="%60."></a><code class="help-tag">`.</code>
'..			To the position where the last change was made.  The
			position is at or near where the change started.
			Sometimes a command is executed as several changes,
			then the position can be near the end of what the
			command changed.  For example when inserting a word,
			the position will be on the last character.
			To jump to older changes use <a href="/neovim-docs-web/en/motion#g%3B">g;</a>.</div>
<div class="old-help-para">							<a name="'("></a><code class="help-tag-right">'(</code> <a name="%60("></a><code class="help-tag">`(</code>
'((			To the start of the current sentence, like the |(|
			command.</div>
<div class="old-help-para">							<a name="')"></a><code class="help-tag-right">')</code> <a name="%60)"></a><code class="help-tag">`)</code>
'))			To the end of the current sentence, like the |)|
			command.</div>
<div class="old-help-para">							<a name="'%7B"></a><code class="help-tag-right">'{</code> <a name="%60%7B"></a><code class="help-tag">`{</code>
'{{			To the start of the current paragraph, like the |{|
			command.</div>
<div class="old-help-para">							<a name="'%7D"></a><code class="help-tag-right">'}</code> <a name="%60%7D"></a><code class="help-tag">`}</code>
'}}			To the end of the current paragraph, like the |}|
			command.</div>
<div class="old-help-para">These commands are not marks themselves, but jump to a mark:</div>
<div class="old-help-para">							<a name="%5D'"></a><code class="help-tag-right">]'</code>
]'			[count] times to next line with a lowercase mark below
			the cursor, on the first non-blank character in the
			line.</div>
<div class="old-help-para">							<a name="%5D%60"></a><code class="help-tag-right">]`</code>
]`			[count] times to lowercase mark after the cursor.</div>
<div class="old-help-para">							<a name="%5B'"></a><code class="help-tag-right">['</code>
['			[count] times to previous line with a lowercase mark
			before the cursor, on the first non-blank character in
			the line.</div>
<div class="old-help-para">							<a name="%5B%60"></a><code class="help-tag-right">[`</code>
[`			[count] times to lowercase mark before the cursor.</div>
<div class="old-help-para">:loc[kmarks] <code>{command}</code>				<a name="%3Aloc"></a><code class="help-tag-right">:loc</code> <a name="%3Alock"></a><code class="help-tag">:lock</code> <a name="%3Alockmarks"></a><code class="help-tag">:lockmarks</code>
			Execute <code>{command}</code> without adjusting marks.  This is
			useful when changing text in a way that the line count
			will be the same when the change has completed.
			WARNING: When the line count does change, marks below
			the change will keep their line number, thus move to
			another text line.
			These items will not be adjusted for deleted/inserted
			lines:
<div class="help-li" style=""> lower case letter marks 'a - 'z
</div><div class="help-li" style=""> upper case letter marks 'A - 'Z
</div><div class="help-li" style=""> numbered marks '0 - '9
</div><div class="help-li" style=""> last insert position '^
</div><div class="help-li" style=""> last change position '.
</div><div class="help-li" style=""> last affected text area '[ and ']
</div><div class="help-li" style=""> the Visual area '&lt; and '
<pre>- line numbers in placed signs
- line numbers in quickfix positions
- positions in the |jumplist|
- positions in the |tagstack|
These items will still be adjusted:
- previous context mark ''
- the cursor position
- the view of a window on a buffer
- folds
- diffs</pre>:kee[pmarks] <code>{command}</code>				<a name="%3Akee"></a><code class="help-tag-right">:kee</code> <a name="%3Akeep"></a><code class="help-tag">:keep</code> <a name="%3Akeepmarks"></a><code class="help-tag">:keepmarks</code>
			Currently only has effect for the filter command
			<a href="/neovim-docs-web/en/change#%3Arange%21">:range!</a>:
</div><div class="help-li" style="margin-left: 3rem;"> When the number of lines after filtering is equal to
			  or larger than before, all marks are kept at the
			  same line number.
</div><div class="help-li" style="margin-left: 3rem;"> When the number of lines decreases, the marks in the
			  lines that disappeared are deleted.
			In any case the marks below the filtered text have
			their line numbers adjusted, thus stick to the text,
			as usual.
			When the 'R' flag is missing from <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> this has
			the same effect as using ":keepmarks".
</div></div>
<div class="old-help-para">							<a name="%3Akeepj"></a><code class="help-tag-right">:keepj</code> <a name="%3Akeepjumps"></a><code class="help-tag">:keepjumps</code>
:keepj[umps] <code>{command}</code>
			Moving around in <code>{command}</code> does not change the <a href="/neovim-docs-web/en/motion#''">''</a>,
			<a href="/neovim-docs-web/en/motion#'.">'.</a> and <a href="/neovim-docs-web/en/motion#'%5E">'^</a> marks, the <a href="/neovim-docs-web/en/motion#jumplist">jumplist</a> or the
			<a href="/neovim-docs-web/en/motion#changelist">changelist</a>.
			Useful when making a change or inserting text
			automatically and the user doesn't want to go to this
			position.  E.g., when updating a "Last change"
			timestamp in the first line:<pre>:let lnum = line(".")
:keepjumps normal gg
:call SetLastChange()
:keepjumps exe "normal " .. lnum .. "G"</pre></div>
<div class="old-help-para">			Note that ":keepjumps" must be used for every command.
			When invoking a function the commands in that function
			can still change the jumplist.  Also, for
			":keepjumps exe '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+motion.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/motion.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%09Note%20that%20%22%3Akeepjumps%22%20must%20be%20used%20for%20every%20command.%0A%09%09%09When%20invoking%20a%20function%20the%20commands%20in%20that%20function%0A%09%09%09can%20still%20change%20the%20jumplist.%20%20Also%2C%20for%0A%09%09%09%22%3Akeepjumps%20exe%20'command%20'%22%20the%20%22command%22%20won't%20keep%0A%09%09%09jumps.%20%20Instead%20use%3A%20%22%3Aexe%20'keepjumps%20command'%22%0A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0D%60%60%60">command</a> '" the "command" won't keep
			jumps.  Instead use: ":exe '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+motion.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/motion.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%09When%20invoking%20a%20function%20the%20commands%20in%20that%20function%0A%09%09%09can%20still%20change%20the%20jumplist.%20%20Also%2C%20for%0A%09%09%09%22%3Akeepjumps%20exe%20'command%20'%22%20the%20%22command%22%20won't%20keep%0A%09%09%09jumps.%20%20Instead%20use%3A%20%22%3Aexe%20'keepjumps%20command'%22%0A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A8.%20Jumps%09%09%09%09%09%2Ajump-motions%2A%0D%60%60%60">keepjumps</a> command'"</div>
<div class="old-help-para"><h2 class="help-heading">8. Jumps<span class="help-heading-tags">					<a name="jump-motions"></a><span class="help-tag">jump-motions</span></span></h2></div>
<div class="old-help-para">A "jump" is a command that normally moves the cursor several lines away.  If
you make the cursor "jump" the position of the cursor before the jump is
remembered.  You can return to that position with the "''" and "``" commands,
unless the line containing that position was changed or deleted.  The
following commands are "jump" commands: "'", "`", "G", "/", "?", "n", "N",
"%", "(", ")", "[[", "]]", "{", "}", ":s", ":tag", "L", "M", "H" and the
commands that start editing a new file.</div>
<div class="old-help-para">							<a name="CTRL-O"></a><code class="help-tag-right">CTRL-O</code>
CTRL-O			Go to [count] Older cursor position in jump list
			(not a motion command).</div>
<div class="old-help-para"><code>&lt;Tab&gt;</code>		or					<a name="CTRL-I"></a><code class="help-tag-right">CTRL-I</code> <a name="%3CTab%3E"></a><code class="help-tag">&lt;Tab&gt;</code>
CTRL-I			Go to [count] newer cursor position in jump list
			(not a motion command).</div>
<div class="old-help-para">							<a name="%3Aju"></a><code class="help-tag-right">:ju</code> <a name="%3Ajumps"></a><code class="help-tag">:jumps</code>
:ju[mps]		Print the jump list (not a motion command).</div>
<div class="old-help-para">							<a name="%3Acle"></a><code class="help-tag-right">:cle</code> <a name="%3Aclearjumps"></a><code class="help-tag">:clearjumps</code>
:cle[arjumps]		Clear the jump list of the current window.</div>
<div class="old-help-para">							<a name="jumplist"></a><code class="help-tag-right">jumplist</code>
Jumps are remembered in a jump list.  With the <code>CTRL-O</code> and <code>CTRL-I</code> command you
can go to cursor positions before older jumps, and back again.  Thus you can
move up and down the list.  There is a separate jump list for each window.
The maximum number of entries is fixed at 100.</div>
<div class="old-help-para">For example, after three jump commands you have this jump list:</div>
<div class="old-help-para"><div class="help-column_heading">    jump line  col file/text</div><div class="help-column_heading">      3	  1    0 some text</div><div class="help-column_heading">      2	 70    0 another line</div><div class="help-column_heading">      1  1154   23 end.</div><div class="help-column_heading">   &gt;</div></div>
<div class="old-help-para">The "file/text" column shows the file name, or the text at the jump if it is
in the current file (an indent is removed and a long line is truncated to fit
in the window).</div>
<div class="old-help-para">The marker "&gt;" indicates the current position in the jumplist.  It may not be
shown when filtering the <a href="/neovim-docs-web/en/motion#%3Ajumps">:jumps</a> command using <a href="/neovim-docs-web/en/various#%3Afilter">:filter</a></div>
<div class="old-help-para">You are currently in line 1167.  If you then use the <code>CTRL-O</code> command, the
cursor is put in line 1154.  This results in:</div>
<div class="old-help-para"><div class="help-column_heading">    jump line  col file/text</div><div class="help-column_heading">      2	  1    0 some text</div><div class="help-column_heading">      1	 70    0 another line</div><div class="help-column_heading">   &gt;  0  1154   23 end.</div><div class="help-column_heading">      1  1167    0 foo bar</div></div>
<div class="old-help-para">The pointer will be set at the last used jump position.  The next <code>CTRL-O</code>
command will use the entry above it, the next <code>CTRL-I</code> command will use the
entry below it.  If the pointer is below the last entry, this indicates that
you did not use a <code>CTRL-I</code> or <code>CTRL-O</code> before.  In this case the <code>CTRL-O</code> command
will cause the cursor position to be added to the jump list, so you can get
back to the position before the <code>CTRL-O</code>.  In this case this is line 1167.</div>
<div class="old-help-para">With more <code>CTRL-O</code> commands you will go to lines 70 and 1.  If you use <code>CTRL-I</code>
you can go back to 1154 and 1167 again.  Note that the number in the "jump"
column indicates the count for the <code>CTRL-O</code> or <code>CTRL-I</code> command that takes you to
this position.</div>
<div class="old-help-para">If you use a jump command, the current line number is inserted at the end of
the jump list.  If the same line was already in the jump list, it is removed.
The result is that when repeating <code>CTRL-O</code> you will get back to old positions
only once.</div>
<div class="old-help-para">When the <a href="/neovim-docs-web/en/motion#%3Akeepjumps">:keepjumps</a> command modifier is used, jumps are not stored in the
jumplist.  Jumps are also not stored in other cases, e.g., in a <a href="/neovim-docs-web/en/repeat#%3Aglobal">:global</a>
command.  You can explicitly add a jump by setting the ' mark with "m'".  Note
that calling setpos() does not do this.</div>
<div class="old-help-para">After the <code>CTRL-O</code> command that got you into line 1154 you could give another
jump command (e.g., "G").  The jump list would then become:</div>
<div class="old-help-para"><div class="help-column_heading">    jump line  col file/text</div><div class="help-column_heading">      4	  1    0 some text</div><div class="help-column_heading">      3	 70    0 another line</div><div class="help-column_heading">      2  1167    0 foo bar</div><div class="help-column_heading">      1  1154   23 end.</div><div class="help-column_heading">   &gt;</div></div>
<div class="old-help-para">The line numbers will be adjusted for deleted and inserted lines.  This fails
if you stop editing a file without writing, like with ":n!".</div>
<div class="old-help-para">When you split a window, the jumplist will be copied to the new window.</div>
<div class="old-help-para">If you have included the ' item in the <a href="/neovim-docs-web/en/options#'shada'">'shada'</a> option the jumplist will be
stored in the ShaDa file and restored when starting Vim.</div>
<div class="old-help-para">							<a name="jumplist-stack"></a><code class="help-tag-right">jumplist-stack</code>
When jumpoptions includes "stack", the jumplist behaves like the history in a
web browser and like the tag stack.  When jumping to a new location from the
middle of the jumplist, the locations after the current position will be
discarded.</div>
<div class="old-help-para">This behavior corresponds to the following situation in a web browser.
Navigate to first.com, second.com, third.com, fourth.com and then fifth.com.
Then navigate backwards twice so that third.com is displayed.  At that point,
the history is:
<div class="help-li" style=""> first.com
</div><div class="help-li" style=""> second.com
</div><div class="help-li" style=""> third.com &lt;--
</div><div class="help-li" style=""> fourth.com
</div><div class="help-li" style=""> fifth.com
</div></div>
<div class="old-help-para">Finally, navigate to a different webpage, new.com.  The history is
<div class="help-li" style=""> first.com
</div><div class="help-li" style=""> second.com
</div><div class="help-li" style=""> third.com
</div><div class="help-li" style=""> new.com &lt;--
</div></div>
<div class="old-help-para">When the jumpoptions includes "stack", this is the behavior of Nvim as well.
That is, given a jumplist like the following in which <code>CTRL-O</code> has been used to
move back three times to location X</div>
<div class="old-help-para"> jump line  col file/text
   2  1260    8 src/nvim/mark.c         &lt;-- location X-2
   1   685    0 src/nvim/option_defs.h  &lt;-- location X-1
&gt;  0   462   36 src/nvim/option_defs.h  &lt;-- location X
   1   479   39 src/nvim/option_defs.h
   2   213    2 src/nvim/mark.c
   3   181    0 src/nvim/mark.c</div>
<div class="old-help-para">jumping to (new) location Y results in the locations after the current
locations being removed:</div>
<div class="old-help-para"> jump line  col file/text
   3  1260    8 src/nvim/mark.c
   2   685    0 src/nvim/option_defs.h
   1   462   36 src/nvim/option_defs.h  &lt;-- location X
&gt;</div>
<div class="old-help-para">Then, when yet another location Z is jumped to, the new location Y appears
directly after location X in the jumplist and location X remains in the same
position relative to the locations (X-1, X-2, etc., ...) that had been before it
prior to the original jump from X to Y:</div>
<div class="old-help-para"> jump line  col file/text
   4  1260    8 src/nvim/mark.c         &lt;-- location X-2
   3   685    0 src/nvim/option_defs.h  &lt;-- location X-1
   2   462   36 src/nvim/option_defs.h  &lt;-- location X
   1   100    0 src/nvim/option_defs.h  &lt;-- location Y
&gt;</div>
<div class="old-help-para"><h3 class="help-heading">CHANGE LIST JUMPS<span class="help-heading-tags">			<a name="changelist"></a><span class="help-tag">changelist</span> <a name="change-list-jumps"></a><span class="help-tag">change-list-jumps</span> <a name="E664"></a><span class="help-tag">E664</span></span></h3></div>
<div class="old-help-para">When making a change the cursor position is remembered.  One position is
remembered for every change that can be undone, unless it is close to a
previous change.  Two commands can be used to jump to positions of changes,
also those that have been undone:</div>
<div class="old-help-para">							<a name="g%3B"></a><code class="help-tag-right">g;</code> <a name="E662"></a><code class="help-tag">E662</code>
g;			Go to [count] older position in change list.
			If [count] is larger than the number of older change
			positions go to the oldest change.
			If there is no older change an error message is given.
			(not a motion command)</div>
<div class="old-help-para">							<a name="g%2C"></a><code class="help-tag-right">g,</code> <a name="E663"></a><code class="help-tag">E663</code>
g,			Go to [count] newer position in change list.
			Just like <a href="/neovim-docs-web/en/motion#g%3B">g;</a> but in the opposite direction.
			(not a motion command)</div>
<div class="old-help-para">When using a count you jump as far back or forward as possible.  Thus you can
use "999g;" to go to the first change for which the position is still
remembered.  The number of entries in the change list is fixed and is the same
as for the <a href="/neovim-docs-web/en/motion#jumplist">jumplist</a>.</div>
<div class="old-help-para">When two undo-able changes are in the same line and at a column position less
than <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> apart only the last one is remembered.  This avoids that a
sequence of small changes in a line, for example "xxxxx", adds many positions
to the change list.  When <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is zero <a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a> is used.  When that
also isn't set a fixed number of 79 is used.  Detail: For the computations
bytes are used, not characters, to avoid a speed penalty (this only matters
for multibyte encodings).</div>
<div class="old-help-para">Note that when text has been inserted or deleted the cursor position might be
a bit different from the position of the change.  Especially when lines have
been deleted.</div>
<div class="old-help-para">When the <code>:keepjumps</code> command modifier is used the position of a change is not
remembered.</div>
<div class="old-help-para">							<a name="%3Achanges"></a><code class="help-tag-right">:changes</code>
:changes		Print the change list.  A "&gt;" character indicates the
			current position.  Just after a change it is below the
			newest entry, indicating that <code>g;</code> takes you to the
			newest entry position.  The first column indicates the
			count needed to take you to this position.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">				change line  col text</div>				    3     9    8 bla bla bla
				    2    11   57 foo is a bar
				    1    14   54 the latest changed line
<pre>The `3g;` command takes you to line 9.  Then the
output of `:changes` is:

        change line  col text ~
        &gt;   0     9    8 bla bla bla
            1    11   57 foo is a bar
            2    14   54 the latest changed line

Now you can use "g," to go to line 11 and "2g," to go
to line 14.</pre>
<h2 class="help-heading">9. Various motions<span class="help-heading-tags">				<a name="various-motions"></a><span class="help-tag">various-motions</span></span></h2></div>
<div class="old-help-para">							<a name="%25"></a><code class="help-tag-right">%</code>
%			Find the next item in this line after or under the
			cursor and jump to its match. <a href="/neovim-docs-web/en/motion#inclusive">inclusive</a> motion.
			Items can be:
			([{}])		parenthesis or (curly/square) brackets
					(this can be changed with the
					<a href="/neovim-docs-web/en/options#'matchpairs'">'matchpairs'</a> option)
			/*/		start or end of C-style comment
			#if, #ifdef, #else, #elif, #endif
					C preprocessor conditionals (when the
					cursor is on the # or no ([{
					is following)
			For other items the matchit plugin can be used, see
matchit.  This plugin also helps to skip matches in
			comments.</div>
<div class="old-help-para">			When <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> contains "M" <a href="/neovim-docs-web/en/options#cpo-M">cpo-M</a> backslashes
			before parens and braces are ignored.  Without "M" the
			number of backslashes matters: an even number doesn't
			match with an odd number.  Thus in "( \) )" and "\( (
			\)" the first and last parenthesis match.</div>
<div class="old-help-para">			When the '%' character is not present in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>
			<a href="/neovim-docs-web/en/options#cpo-%25">cpo-%</a>, parens and braces inside double quotes are
			ignored, unless the number of parens/braces in a line
			is uneven and this line and the previous one does not
			end in a backslash.  '(', '<code>{', '[', ']', '}</code>' and ')'
			are also ignored (parens and braces inside single
			quotes).  Note that this works fine for C, but not for
			Perl, where single quotes are used for strings.</div>
<div class="old-help-para">			Nothing special is done for matches in comments.  You
			can either use thematchit plugin or put quotes around
			matches.</div>
<div class="old-help-para">			No count is allowed, <code>{count}</code>% jumps to a line <code>{count}</code>
			percentage down the file <a href="/neovim-docs-web/en/motion#N%25">N%</a>.  Using '%' on
			#if/#else/#endif makes the movement linewise.</div>
<div class="old-help-para">						<a name="%5B("></a><code class="help-tag-right">[(</code>
[(			Go to [count] previous unmatched '('.
			<a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">						<a name="%5B%7B"></a><code class="help-tag-right">[{</code>
[{			Go to [count] previous unmatched '{'.
			<a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">						<a name="%5D)"></a><code class="help-tag-right">])</code>
])			Go to [count] next unmatched ')'.
			<a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">						<a name="%5D%7D"></a><code class="help-tag-right">]}</code>
]}			Go to [count] next unmatched '}'.
			<a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">The above four commands can be used to go to the start or end of the current
code block.  It is like doing "%" on the '(', ')', '<code>{' or '}</code>' at the other
end of the code block, but you can do this from anywhere in the code block.
Very useful for C programs.  Example: When standing on "case x:", "[{" will
bring you back to the switch statement.</div>
<div class="old-help-para">						<a name="%5Dm"></a><code class="help-tag-right">]m</code>
]m			Go to [count] next start of a method (for Java or
			similar structured language).  When not before the
			start of a method, jump to the start or end of the
			class.  When no '<code>{' is found after the cursor, this is}</code>
			an error.  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.
						<a name="%5DM"></a><code class="help-tag-right">]M</code>
]M			Go to [count] next end of a method (for Java or
			similar structured language).  When not before the end
			of a method, jump to the start or end of the class.
			When no '}' is found after the cursor, this is an
			error. <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.
						<a name="%5Bm"></a><code class="help-tag-right">[m</code>
[m			Go to [count] previous start of a method (for Java or
			similar structured language).  When not after the
			start of a method, jump to the start or end of the
			class.  When no '<code>{' is found before the cursor this is}</code>
			an error. <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.
						<a name="%5BM"></a><code class="help-tag-right">[M</code>
[M			Go to [count] previous end of a method (for Java or
			similar structured language).  When not after the
			end of a method, jump to the start or end of the
			class.  When no '}' is found before the cursor this is
			an error. <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">The above two commands assume that the file contains a class with methods.
The class definition is surrounded in '<code>{' and '}</code>'.  Each method in the class
is also surrounded with '<code>{' and '}</code>'.  This applies to the Java language.  The
file looks like this:<pre>// comment
class foo {
        int method_one() {
                body_one();
        }
        int method_two() {
                body_two();
        }
}</pre>
[To try this out copy the text and put it in a new buffer, the help text above
confuses the jump commands]</div>
<div class="old-help-para">Starting with the cursor on "body_two()", using "[m" will jump to the '{' at
the start of "method_two()" (obviously this is much more useful when the
method is long!).  Using "2[m" will jump to the start of "method_one()".
Using "3[m" will jump to the start of the class.</div>
<div class="old-help-para">						<a name="%5B%23"></a><code class="help-tag-right">[#</code>
[#			Go to [count] previous unmatched "#if" or "#else".
			<a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">						<a name="%5D%23"></a><code class="help-tag-right">]#</code>
]#			Go to [count] next unmatched "#else" or "#endif".
			<a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">These two commands work in C programs that contain #if/#else/#endif
constructs.  It brings you to the start or end of the #if/#else/#endif where
the current line is included.  You can then use "%" to go to the matching line.</div>
<div class="old-help-para">						<a name="%5Bstar"></a><code class="help-tag-right">[star</code> <a name="%5B%2F"></a><code class="help-tag">[/</code>
[*  or  [/		Go to [count] previous start of a C comment "/*".
			<a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">						<a name="%5Dstar"></a><code class="help-tag-right">]star</code> <a name="%5D%2F"></a><code class="help-tag">]/</code>
]*  or  ]/		Go to [count] next end of a C comment "*/".
			<a href="/neovim-docs-web/en/motion#exclusive">exclusive</a> motion.</div>
<div class="old-help-para">						<a name="H"></a><code class="help-tag-right">H</code>
H			To line [count] from top (Home) of window (default:
			first line on the window) on the first non-blank
			character <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.  See also <a href="/neovim-docs-web/en/options#'startofline'">'startofline'</a> option.
			Cursor is adjusted for <a href="/neovim-docs-web/en/options#'scrolloff'">'scrolloff'</a> option, unless an
			operator is pending, in which case the text may
			scroll.  E.g. "yH" yanks from the first visible line
			until the cursor line (inclusive).</div>
<div class="old-help-para">						<a name="M"></a><code class="help-tag-right">M</code>
M			To Middle line of window, on the first non-blank
			character <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.  See also <a href="/neovim-docs-web/en/options#'startofline'">'startofline'</a> option.</div>
<div class="old-help-para">						<a name="L"></a><code class="help-tag-right">L</code>
L			To line [count] from bottom of window (default: Last
			line on the window) on the first non-blank character
			<a href="/neovim-docs-web/en/motion#linewise">linewise</a>.  See also <a href="/neovim-docs-web/en/options#'startofline'">'startofline'</a> option.
			Cursor is adjusted for <a href="/neovim-docs-web/en/options#'scrolloff'">'scrolloff'</a> option, unless an
			operator is pending, in which case the text may
			scroll.  E.g. "yL" yanks from the cursor to the last
			visible line.</div>
<div class="old-help-para"><code>&lt;LeftMouse&gt;</code>		Moves to the position on the screen where the mouse
			click is <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>.  See also <a href="/neovim-docs-web/en/visual#%3CLeftMouse%3E">&lt;LeftMouse&gt;</a>.  If the
			position is in a status line, that window is made the
			active window and the cursor is not moved.</div>

  
  