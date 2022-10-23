---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Nvim" class="section-title" href="#Nvim"> Motion Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="cursor-motions navigation" class="section-title" href="#cursor-motions navigation">Cursor motions</a>

These commands move the cursor position.  If the new position is off of the
screen, the screen is scrolled to show the cursor (see also 'scrolljump' and
'scrolloff' options).

General remarks:

If you want to know where you are in the file use the "CTRL-G" command
[CTRL-G| or the "g CTRL-G" command |g_CTRL-G](#CTRL-G| or the "g CTRL-G" command |g_CTRL-G).  If you set the 'ruler' option,
the cursor position is continuously shown in the status line (which slows down
Vim a little).

Experienced users prefer the hjkl keys because they are always right under
their fingers.  Beginners often prefer the arrow keys, because they do not
know what the hjkl keys do.  The mnemonic value of hjkl is clear from looking
at the keyboard.  Think of j as an arrow pointing downwards.

The 'virtualedit' option can be set to make it possible to move the cursor to
positions where there is no character or within a multi-column character (like
a tab).

Type [gO](#gO) to see the table of contents.


## <a id="operator" class="section-title" href="#operator">1. Motions and Operators</a> 

The motion commands can be used after an operator command, to have the command
operate on the text that was moved over.  That is the text between the cursor
position before and after the motion.  Operators are generally used to delete
or change text.  The following operators are available:

[c](#c)	c	change
[d](#d)	d	delete
[y](#y)	y	yank into register (does not change the text)
[~](#~)	~	swap case (only if 'tildeop' is set)
[g~](#g~)	g~	swap case
[gu](#gu)	gu	make lowercase
[gU](#gU)	gU	make uppercase
[!](#!)	!	filter through an external program
[=](#=)	=	filter through 'equalprg' or C-indenting if empty
[gq](#gq)	gq	text formatting
[gw](#gw)	gw	text formatting with no cursor movement
[g?](#g?)	g?	ROT13 encoding
[>](#>)	>	shift right
[<](#<)	<	shift left
[zf](#zf)	zf	define a fold
[g@](#g@)	g@	call function set with the 'operatorfunc' option
### <a id="motion-count-multiplied" class="section-title" href="#motion-count-multiplied">Note:</a>
If the motion includes a count and the operator also had a count before it,
the two counts are multiplied.  For example: "2d3w" deletes six words.
### <a id="operator-doubled" class="section-title" href="#operator-doubled">Note:</a>
When doubling the operator it operates on a line.  When using a count, before
or after the first character, that many lines are operated upon.  Thus `3dd`
deletes three lines. A count before and after the first character is
multiplied, thus `2y3y` yanks six lines.

After applying the operator the cursor is mostly left at the start of the text
that was operated upon.  For example, "yfe" doesn't move the cursor, but "yFe"
moves the cursor leftwards to the "e" where the yank started.

### <a id="linewise charwise characterwise" class="section-title" href="#linewise charwise characterwise">Note:</a>
The operator either affects whole lines, or the characters between the start
and end position.  Generally, motions that move between lines affect lines
(are linewise), and motions that move within a line affect characters (are
charwise).  However, there are some exceptions.

### <a id="exclusive inclusive" class="section-title" href="#exclusive inclusive">Note:</a>
Character motion is either inclusive or exclusive.  When inclusive, the
start and end position of the motion are included in the operation.  When
exclusive, the last character towards the end of the buffer is not included.
Linewise motions always include the start and end position.  Plugins can
check the v:event.inclusive flag of the [TextYankPost](#TextYankPost) event.

Which motions are linewise, inclusive or exclusive is mentioned with the
command.  There are however, two general exceptions:
1. If the motion is exclusive and the end of the motion is in column 1, the
end of the motion is moved to the end of the previous line and the motion
becomes inclusive.  Example: "}" moves to the first line after a paragraph,
but "d}" will not include that line.
### <a id="exclusive-linewise" class="section-title" href="#exclusive-linewise">Note:</a>
2. If the motion is exclusive, the end of the motion is in column 1 and the
start of the motion was at or before the first non-blank in the line, the
motion becomes linewise.  Example: If a paragraph begins with some blanks
and you do "d}" while standing on the first non-blank, all the lines of
the paragraph are deleted, including the blanks.  If you do a put now, the
deleted lines will be inserted below the cursor position.

Note that when the operator is pending (the operator command is typed, but the
motion isn't yet), a special set of mappings can be used.  See [:omap](#:omap).

Instead of first giving the operator and then a motion you can use Visual
mode: mark the start of the text with "v", move the cursor to the end of the
text that is to be affected and then hit the operator.  The text between the
start and the cursor position is highlighted, so you can see what text will
be operated upon.  This allows much more freedom, but requires more key
strokes and has limited redo functionality.  See the chapter on Visual mode
[Visual-mode](#Visual-mode).

You can use a ":" command for a motion.  For example "d:call FindEnd()".
But this can't be repeated with "." if the command is more than one line.
This can be repeated:
```
d:call search("f")<CR>
This cannot be repeated:
```
d:if 1<CR>
call search("f")<CR>
endif<CR>
Note that when using ":" any motion becomes charwise exclusive.

### <a id="forced-motion" class="section-title" href="#forced-motion">Note:</a>
FORCING A MOTION TO BE LINEWISE, CHARWISE OR BLOCKWISE

When a motion is not of the type you would like to use, you can force another
type by using "v", "V" or CTRL-V just after the operator.
Example:
```
dj
deletes two lines
```
dvj
deletes from the cursor position until the character below the cursor
```
d<C-V>j
deletes the character under the cursor and the character below the cursor.
```

Be careful with forcing a linewise movement to be used charwise or blockwise,
the column may not always be defined.

### <a id="o_v" class="section-title" href="#o_v">Note:</a>
v		When used after an operator, before the motion command: Force
the operator to work charwise, also when the motion is
linewise.  If the motion was linewise, it will become
[exclusive](#exclusive).
If the motion already was charwise, toggle
inclusive/exclusive.  This can be used to make an exclusive
motion inclusive and an inclusive motion exclusive.

### <a id="o_V" class="section-title" href="#o_V">Note:</a>
V		When used after an operator, before the motion command: Force
the operator to work linewise, also when the motion is
charwise.

### <a id="o_CTRL-V" class="section-title" href="#o_CTRL-V">Note:</a>
CTRL-V		When used after an operator, before the motion command: Force
the operator to work blockwise.  This works like Visual block
mode selection, with the corners defined by the cursor
position before and after the motion.


## <a id="left-right-motions" class="section-title" href="#left-right-motions">2. Left-Right Motions</a> 

These commands move the cursor to the specified column in the current line.
They stop at the first column and at the end of the line, except "$", which
may move to one of the next lines.  See 'whichwrap' option to make some of the
commands move across line boundaries.

h		or					*h*

```
Left>		or					*<Left>*
CTRL-H		or					*CTRL-H* *<BS>*

```
BS>			[count] characters to the left.  [exclusive](#exclusive) motion.
Note: If you prefer <BS> to delete a character, use
the mapping:
:map CTRL-V<BS>		X
(to enter "CTRL-V<BS>" type the CTRL-V key, followed
by the <BS> key)

l		or					*l*

```
Right>		or					*<Right>* *<Space>*

```
Space>			[count] characters to the right.  [exclusive](#exclusive) motion.
See the 'whichwrap' option for adjusting the behavior
at end of line

### <a id="0" class="section-title" href="#0">Note:</a>
0			To the first character of the line.  [exclusive](#exclusive)
motion.

### <a id="<Home> <kHome>" class="section-title" href="#<Home> <kHome>">Note:</a>

```
Home>			To the first character of the line.  [exclusive](#exclusive)
motion.  When moving up or down next, stay in same
TEXT column (if possible).  Most other commands stay
in the same SCREEN column.  <Home> works like "1|",
which differs from "0" when the line starts with a

```
Tab>.

### <a id="^" class="section-title" href="#^">Note:</a>
^			To the first non-blank character of the line.
[exclusive](#exclusive) motion.  Any count is ignored.

### <a id="$ <End> <kEnd>" class="section-title" href="#$ <End> <kEnd>">Note:</a>
$  or <End>		To the end of the line.  When a count is given also go
[count - 1] lines downward, or as far is possible.
[inclusive](#inclusive) motion.  If a count of 2 or larger is
given and the cursor is on the last line, that is an
error and the cursor doesn't move.
In Visual mode the cursor goes to just after the last
character in the line.
When 'virtualedit' is active, "$" may move the cursor
back from past the end of the line to the last
character in the line.

### <a id="g_" class="section-title" href="#g_">Note:</a>
g_			To the last non-blank character of the line and
[count - 1] lines downward [inclusive](#inclusive).

### <a id="g0 g<Home>" class="section-title" href="#g0 g<Home>">Note:</a>
g0 or g<Home>		When lines wrap ('wrap' on): To the first character of
the screen line.  [exclusive](#exclusive) motion.  Differs from
"0" when a line is wider than the screen.
When lines don't wrap ('wrap' off): To the leftmost
character of the current line that is on the screen.
Differs from "0" when the first character of the line
is not on the screen.

### <a id="g^" class="section-title" href="#g^">Note:</a>
g^			When lines wrap ('wrap' on): To the first non-blank
character of the screen line.  [exclusive](#exclusive) motion.
Differs from "^" when a line is wider than the screen.
When lines don't wrap ('wrap' off): To the leftmost
non-blank character of the current line that is on the
screen.  Differs from "^" when the first non-blank
character of the line is not on the screen.

### <a id="gm" class="section-title" href="#gm">Note:</a>
gm			Like "g0", but half a screenwidth to the right (or as
much as possible).

### <a id="gM" class="section-title" href="#gM">Note:</a>
gM			Like "g0", but to halfway the text of the line.
With a count: to this percentage of text in the line.
Thus "10gM" is near the start of the text and "90gM"
is near the end of the text.

### <a id="g$ g<End>" class="section-title" href="#g$ g<End>">Note:</a>
g$ or g<End>		When lines wrap ('wrap' on): To the last character of
the screen line and [count - 1] screen lines downward
[inclusive](#inclusive).  Differs from "$" when a line is wider
than the screen.
When lines don't wrap ('wrap' off): To the rightmost
character of the current line that is visible on the
screen.  Differs from "$" when the last character of
the line is not on the screen or when a count is used.
Additionally, vertical movements keep the column,
instead of going to the end of the line.
When 'virtualedit' is enabled moves to the end of the
screen line.

### <a id="bar" class="section-title" href="#bar">Note:</a>
|			To screen column [count] in the current line.
[exclusive](#exclusive) motion.  Ceci n'est pas une pipe.

### <a id="f" class="section-title" href="#f">Note:</a>
f{char}			To [count]'th occurrence of {char} to the right.  The
cursor is placed on {char} [inclusive](#inclusive).
{char} can be entered as a digraph [digraph-arg](#digraph-arg).
When 'encoding' is set to Unicode, composing
characters may be used, see [utf-8-char-arg](#utf-8-char-arg).
[:lmap](#:lmap) mappings apply to {char}.  The CTRL-^ command
in Insert mode can be used to switch this on/off
[i_CTRL-^](#i_CTRL-^).

### <a id="F" class="section-title" href="#F">Note:</a>
F{char}			To the [count]'th occurrence of {char} to the left.
The cursor is placed on {char} [exclusive](#exclusive).
{char} can be entered like with the [f](#f) command.

### <a id="t" class="section-title" href="#t">Note:</a>
t{char}			Till before [count]'th occurrence of {char} to the
right.  The cursor is placed on the character left of
{char} [inclusive](#inclusive).
{char} can be entered like with the [f](#f) command.

### <a id="T" class="section-title" href="#T">Note:</a>
T{char}			Till after [count]'th occurrence of {char} to the
left.  The cursor is placed on the character right of
{char} [exclusive](#exclusive).
{char} can be entered like with the [f](#f) command.

### <a id=";" class="section-title" href="#;">Note:</a>
;			Repeat latest f, t, F or T [count] times. See [cpo-;](#cpo-;)

### <a id="," class="section-title" href="#,">Note:</a>
,			Repeat latest f, t, F or T in opposite direction
[count] times. See also [cpo-;](#cpo-;)


## <a id="up-down-motions" class="section-title" href="#up-down-motions">3. Up-Down Motions</a> 

k		or					*k*

```
Up>		or					*<Up>* *CTRL-P*
CTRL-P			[count] lines upward [linewise](#linewise).

j		or					*j*

```
Down>		or					*<Down>*
CTRL-J		or					*CTRL-J*

```
NL>		or					*<NL>* *CTRL-N*
CTRL-N			[count] lines downward [linewise](#linewise).

gk		or					*gk* *g<Up>*
g<Up>			[count] display lines upward.  [exclusive](#exclusive) motion.
Differs from 'k' when lines wrap, and when used with
an operator, because it's not linewise.

gj		or					*gj* *g<Down>*
g<Down>			[count] display lines downward.  [exclusive](#exclusive) motion.
Differs from 'j' when lines wrap, and when used with
an operator, because it's not linewise.

### <a id="-" class="section-title" href="#-">Note:</a>
`-`  <minus>		[count] lines upward, on the first non-blank
character [linewise](#linewise).

+		or					*+*
CTRL-M		or					*CTRL-M* *<CR>*

```
CR>			[count] lines downward, on the first non-blank
character [linewise](#linewise).

### <a id="_" class="section-title" href="#_">Note:</a>
_  <underscore>		[count] - 1 lines downward, on the first non-blank
character [linewise](#linewise).

### <a id="G" class="section-title" href="#G">Note:</a>
G			Goto line [count], default last line, on the first
non-blank character [linewise](#linewise).  If 'startofline' not
set, keep the same column.
G is one of the [jump-motions](#jump-motions).

### <a id="<C-End>" class="section-title" href="#<C-End>">Note:</a>

```
C-End>			Goto line [count], default last line, on the last
character [inclusive](#inclusive).

### <a id="gg <C-Home>" class="section-title" href="#gg <C-Home>"><C-Home>	or</a>
gg			Goto line [count], default first line, on the first
non-blank character [linewise](#linewise).  If 'startofline' not
set, keep the same column.

### <a id=":[range]" class="section-title" href="#:[range]">Note:</a>
:[range]		Set the cursor on the last line number in [range].
[range] can also be just one line number, e.g., ":1"
or ":'m".
In contrast with [G](#G) this command does not modify the
[jumplist](#jumplist).
### <a id="N%" class="section-title" href="#N%">Note:</a>
{count}%		Go to {count} percentage in the file, on the first
non-blank in the line [linewise](#linewise).  To compute the new
line number this formula is used:
### <a id="({count}  number-of-lines + 99) / 100" class="section-title" href="#({count}  number-of-lines + 99) / 100">Note:</a>
See also 'startofline' option.

### <a id=":go :goto go" class="section-title" href="#:go :goto go">:[range]go[to] [count]</a>
[count]go		Go to [count] byte in the buffer.  Default [count] is
one, start of the file.  When giving [range], the
last number in it used as the byte count.  End-of-line
characters are counted depending on the current
'fileformat' setting.
Also see the [line2byte()](#line2byte()) function, and the 'o'
option in 'statusline'.

These commands move to the specified line.  They stop when reaching the first
or the last line.  The first two commands put the cursor in the same column
(if possible) as it was after the last command that changed the column,
except after the "$" command, then the cursor will be put on the last
character of the line.


## <a id="word-motions" class="section-title" href="#word-motions">4. Word Motions</a> 

### <a id="<S-Right> w" class="section-title" href="#<S-Right> w"><S-Right>	or</a>
w			[count] words forward.  [exclusive](#exclusive) motion.

### <a id="<C-Right> W" class="section-title" href="#<C-Right> W"><C-Right>	or</a>
W			[count] WORDS forward.  [exclusive](#exclusive) motion.

### <a id="e" class="section-title" href="#e">Note:</a>
e			Forward to the end of word [count] [inclusive](#inclusive).
Does not stop in an empty line.

### <a id="E" class="section-title" href="#E">Note:</a>
E			Forward to the end of WORD [count] [inclusive](#inclusive).
Does not stop in an empty line.

### <a id="<S-Left> b" class="section-title" href="#<S-Left> b"><S-Left>	or</a>
b			[count] words backward.  [exclusive](#exclusive) motion.

### <a id="<C-Left> B" class="section-title" href="#<C-Left> B"><C-Left>	or</a>
B			[count] WORDS backward.  [exclusive](#exclusive) motion.

### <a id="ge" class="section-title" href="#ge">Note:</a>
ge			Backward to the end of word [count] [inclusive](#inclusive).

### <a id="gE" class="section-title" href="#gE">Note:</a>
gE			Backward to the end of WORD [count] [inclusive](#inclusive).

These commands move over words or WORDS.
### <a id="word" class="section-title" href="#word">Note:</a>
A word consists of a sequence of letters, digits and underscores, or a
sequence of other non-blank characters, separated with white space (spaces,
tabs, <EOL>).  This can be changed with the 'iskeyword' option.  An empty line
is also considered to be a word.
### <a id="WORD" class="section-title" href="#WORD">Note:</a>
A WORD consists of a sequence of non-blank characters, separated with white
space.  An empty line is also considered to be a WORD.

A sequence of folded lines is counted for one word of a single character.
"w" and "W", "e" and "E" move to the start/end of the first word or WORD after
a range of folded lines.  "b" and "B" move to the start of the first word or
WORD before the fold.

Special case: "cw" and "cW" are treated like "ce" and "cE" if the cursor is
on a non-blank.  This is Vi-compatible, see [cpo-_](#cpo-_) to change the behavior.

Another special case: When using the "w" motion in combination with an
operator and the last word moved over is at the end of a line, the end of
that word becomes the end of the operated text, not the first word in the
next line.

The original Vi implementation of "e" is buggy.  For example, the "e" command
will stop on the first character of a line if the previous line was empty.
But when you use "2e" this does not happen.  In Vim "ee" and "2e" are the
same, which is more logical.  However, this causes a small incompatibility
between Vi and Vim.


## <a id="object-motions" class="section-title" href="#object-motions">5. Text Object Motions</a> 

### <a id="(" class="section-title" href="#(">Note:</a>
(			[count] [sentence|s backward.  |exclusive](#sentence|s backward.  |exclusive) motion.

### <a id=")" class="section-title" href="#)">Note:</a>
)			[count] [sentence|s forward.  |exclusive](#sentence|s forward.  |exclusive) motion.

### <a id="{" class="section-title" href="#{">Note:</a>
{			[count] [paragraph|s backward.  |exclusive](#paragraph|s backward.  |exclusive) motion.

### <a id="}" class="section-title" href="#}">Note:</a>
}			[count] [paragraph|s forward.  |exclusive](#paragraph|s forward.  |exclusive) motion.

### <a id="]]" class="section-title" href="#]]">Note:</a>
]]			[count] [section](#section)s forward or to the next '{' in the
first column.  When used after an operator, then also
stops below a '}' in the first column.  [exclusive](#exclusive)
Note that [exclusive-linewise](#exclusive-linewise) often applies.

### <a id="][" class="section-title" href="#][">Note:</a>
][			[count] [section](#section)s forward or to the next '}' in the
first column.  [exclusive](#exclusive)
Note that [exclusive-linewise](#exclusive-linewise) often applies.

### <a id="[[" class="section-title" href="#[[">Note:</a>
[[			[count] [section](#section)s backward or to the previous '{' in
the first column.  [exclusive](#exclusive)
Note that [exclusive-linewise](#exclusive-linewise) often applies.

### <a id="[]" class="section-title" href="#[]">Note:</a>
[]			[count] [section](#section)s backward or to the previous '}' in
the first column.  [exclusive](#exclusive)
Note that [exclusive-linewise](#exclusive-linewise) often applies.

These commands move over three kinds of text objects.

### <a id="sentence" class="section-title" href="#sentence">Note:</a>
A sentence is defined as ending at a '.', '!' or '?' followed by either the
end of a line, or by a space or tab.  Any number of closing ')', ']', '"'
and ''' characters may appear after the '.', '!' or '?' before the spaces,
tabs or end of line.  A paragraph and section boundary is also a sentence
boundary.
If the 'J' flag is present in 'cpoptions', at least two spaces have to
follow the punctuation mark; <Tab>s are not recognized as white space.
The definition of a sentence cannot be changed.

### <a id="paragraph" class="section-title" href="#paragraph">Note:</a>
A paragraph begins after each empty line, and also at each of a set of
paragraph macros, specified by the pairs of characters in the 'paragraphs'
option.  The default is "IPLPPPQPP TPHPLIPpLpItpplpipbp", which corresponds to
the macros ".IP", ".LP", etc.  (These are nroff macros, so the dot must be in
the first column).  A section boundary is also a paragraph boundary.
Note that a blank line (only containing white space) is NOT a paragraph
boundary.
Note: this does not include a '{' or '}' in the first column.

### <a id="section" class="section-title" href="#section">Note:</a>
A section begins after a form-feed (<C-L>) in the first column and at each of
a set of section macros, specified by the pairs of characters in the
'sections' option.  The default is "SHNHH HUnhsh", which defines a section to
start at the nroff macros ".SH", ".NH", ".H", ".HU", ".nh" and ".sh".

The "]]" and "[[" commands stop at the '{' in the first column.  This is
useful to find the start of a function in a C program.  To search for a '}' in
the first column, the end of a C function, use "][" (forward) or "[]"
(backward).  Note that the first character of the command determines the
search direction.

If your '{' or '}' are not in the first column, and you would like to use "[["
and "]]" anyway, try these mappings:
```
:map [[ ?{<CR>w99[{
:map ][ /}<CR>b99]}
:map ]] j0[[%/{<CR>
:map [] k$][%?}<CR>
[type these literally, see [<>](#<>)]


## <a id="object-select text-objects" class="section-title" href="#object-select text-objects">6. Text Object Selection</a> <span id="v_a"></span>

This is a series of commands that can only be used while in Visual mode or
after an operator.  The commands that start with "a" select "a"n object
including white space, the commands starting with "i" select an "inner" object
without white space, or just the white space.  Thus the "inner" commands
always select less text than the "a" commands.

Also see `gn` and `gN`, operating on the last search pattern.

### <a id="v_aw aw" class="section-title" href="#v_aw aw">Note:</a>
aw			"a word", select [count] words (see [word](#word)).
Leading or trailing white space is included, but not
counted.
When used in Visual linewise mode "aw" switches to
Visual charwise mode.

### <a id="v_iw iw" class="section-title" href="#v_iw iw">Note:</a>
iw			"inner word", select [count] words (see [word](#word)).
White space between words is counted too.
When used in Visual linewise mode "iw" switches to
Visual charwise mode.

### <a id="v_aW aW" class="section-title" href="#v_aW aW">Note:</a>
aW			"a WORD", select [count] WORDs (see [WORD](#WORD)).
Leading or trailing white space is included, but not
counted.
When used in Visual linewise mode "aW" switches to
Visual charwise mode.

### <a id="v_iW iW" class="section-title" href="#v_iW iW">Note:</a>
iW			"inner WORD", select [count] WORDs (see [WORD](#WORD)).
White space between words is counted too.
When used in Visual linewise mode "iW" switches to
Visual charwise mode.

### <a id="v_as as" class="section-title" href="#v_as as">Note:</a>
as			"a sentence", select [count] sentences (see
[sentence](#sentence)).
When used in Visual mode it is made charwise.

### <a id="v_is is" class="section-title" href="#v_is is">Note:</a>
is			"inner sentence", select [count] sentences (see
[sentence](#sentence)).
When used in Visual mode it is made charwise.

### <a id="v_ap ap" class="section-title" href="#v_ap ap">Note:</a>
ap			"a paragraph", select [count] paragraphs (see
[paragraph](#paragraph)).
Exception: a blank line (only containing white space)
is also a paragraph boundary.
When used in Visual mode it is made linewise.

### <a id="v_ip ip" class="section-title" href="#v_ip ip">Note:</a>
ip			"inner paragraph", select [count] paragraphs (see
[paragraph](#paragraph)).
Exception: a blank line (only containing white space)
is also a paragraph boundary.
When used in Visual mode it is made linewise.

### <a id="v_a] v_a[ a] a[" class="section-title" href="#v_a] v_a[ a] a[">a]</a>
a[			"a [] block", select [count] '[' ']' blocks.  This
goes backwards to the [count] unclosed '[', and finds
the matching ']'.  The enclosed text is selected,
including the '[' and ']'.
When used in Visual mode it is made charwise.

### <a id="v_i] v_i[ i] i[" class="section-title" href="#v_i] v_i[ i] i[">i]</a>
i[			"inner [] block", select [count] '[' ']' blocks.  This
goes backwards to the [count] unclosed '[', and finds
the matching ']'.  The enclosed text is selected,
excluding the '[' and ']'.
When used in Visual mode it is made charwise.

### <a id="v_a) a) a(" class="section-title" href="#v_a) a) a(">a)</a>
### <a id="vab v_ab v_a( ab" class="section-title" href="#vab v_ab v_a( ab">a(</a>
ab			"a block", select [count] blocks, from "[count] [(" to
the matching ')', including the '(' and ')' (see
[[(](#[()).  Does not include white space outside of the
parenthesis.
When used in Visual mode it is made charwise.

### <a id="v_i) i) i(" class="section-title" href="#v_i) i) i(">i)</a>
### <a id="vib v_ib v_i( ib" class="section-title" href="#vib v_ib v_i( ib">i(</a>
ib			"inner block", select [count] blocks, from "[count] [("
to the matching ')', excluding the '(' and ')' (see
[[(](#[()).  If the cursor is not inside a () block, then
find the next "(".
When used in Visual mode it is made charwise.

### <a id="v_a> v_a< a> a<" class="section-title" href="#v_a> v_a< a> a<">a></a>
a<			"a <> block", select [count] <> blocks, from the
[count]'th unmatched '<' backwards to the matching
'>', including the '<' and '>'.
When used in Visual mode it is made charwise.

### <a id="v_i> v_i< i> i<" class="section-title" href="#v_i> v_i< i> i<">i></a>
i<			"inner <> block", select [count] <> blocks, from
the [count]'th unmatched '<' backwards to the matching
'>', excluding the '<' and '>'.
When used in Visual mode it is made charwise.

### <a id="v_at at" class="section-title" href="#v_at at">Note:</a>
at			"a tag block", select [count] tag blocks, from the
[count]'th unmatched "<aaa>" backwards to the matching
"</aaa>", including the "<aaa>" and "</aaa>".
See [tag-blocks](#tag-blocks) about the details.
When used in Visual mode it is made charwise.

### <a id="v_it it" class="section-title" href="#v_it it">Note:</a>
it			"inner tag block", select [count] tag blocks, from the
[count]'th unmatched "<aaa>" backwards to the matching
"</aaa>", excluding the "<aaa>" and "</aaa>".
See [tag-blocks](#tag-blocks) about the details.
When used in Visual mode it is made charwise.

### <a id="v_a} a} a{" class="section-title" href="#v_a} a} a{">a}</a>
### <a id="v_aB v_a{ aB" class="section-title" href="#v_aB v_a{ aB">a{</a>
aB			"a Block", select [count] Blocks, from "[count] [{" to
the matching '}', including the '{' and '}' (see
[[{](#[{)).
When used in Visual mode it is made charwise.

### <a id="v_i} i} i{" class="section-title" href="#v_i} i} i{">i}</a>
### <a id="v_iB v_i{ iB" class="section-title" href="#v_iB v_i{ iB">i{</a>
iB			"inner Block", select [count] Blocks, from "[count] [{"
to the matching '}', excluding the '{' and '}' (see
[[{](#[{)).
When used in Visual mode it is made charwise.

### <a id="v_aquote aquote" class="section-title" href="#v_aquote aquote">a"</a>
### <a id="v_a' a'" class="section-title" href="#v_a' a'">a'</a>
### <a id="v_a` a`" class="section-title" href="#v_a` a`">a`</a>
"a quoted string".  Selects the text from the previous
quote until the next quote.  The 'quoteescape' option
is used to skip escaped quotes.
Only works within one line.
When the cursor starts on a quote, Vim will figure out
which quote pairs form a string by searching from the
start of the line.
Any trailing white space is included, unless there is
none, then leading white space is included.
When used in Visual mode it is made charwise.
Repeating this object in Visual mode another string is
included.  A count is currently not used.

### <a id="v_iquote iquote" class="section-title" href="#v_iquote iquote">i"</a>
### <a id="v_i' i'" class="section-title" href="#v_i' i'">i'</a>
### <a id="v_i` i`" class="section-title" href="#v_i` i`">i`</a>
Like a", a' and a`, but exclude the quotes and
repeating won't extend the Visual selection.
Special case: With a count of 2 the quotes are
included, but no extra white space as with a"/a'/a`.

When used after an operator:
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
are included.

When used in Visual mode:
When start and end of the Visual area are the same (just after typing "v"):
One object is selected, the same as for using an operator.
When start and end of the Visual area are not the same:
For non-block objects the area is extended by one object or the white
space up to the next object, or both for the "a" objects.  The
direction in which this happens depends on which side of the Visual
area the cursor is.  For the block objects the block is extended one
level outwards.

For illustration, here is a list of delete commands, grouped from small to big
objects.  Note that for a single character and a whole line the existing vi
movement commands are used.
"dl"	delete character (alias: "x")		[dl](#dl)
### <a id="diw" class="section-title" href="#diw">	"diw"	delete inner word</a>
### <a id="daw" class="section-title" href="#daw">	"daw"	delete a word</a>
### <a id="diW" class="section-title" href="#diW">	"diW"	delete inner WORD (see [WORD](#WORD))</a>
### <a id="daW" class="section-title" href="#daW">	"daW"	delete a WORD (see [WORD](#WORD))</a>
"dgn"   delete the next search pattern match    *dgn*
"dd"	delete one line				[dd](#dd)
### <a id="dis" class="section-title" href="#dis">	"dis"	delete inner sentence</a>
### <a id="das" class="section-title" href="#das">	"das"	delete a sentence</a>
### <a id="dib" class="section-title" href="#dib">	"dib"	delete inner '(' ')' block</a>
### <a id="dab" class="section-title" href="#dab">	"dab"	delete a '(' ')' block</a>
### <a id="dip" class="section-title" href="#dip">	"dip"	delete inner paragraph</a>
### <a id="dap" class="section-title" href="#dap">	"dap"	delete a paragraph</a>
### <a id="diB" class="section-title" href="#diB">	"diB"	delete inner '{' '}' block</a>
### <a id="daB" class="section-title" href="#daB">	"daB"	delete a '{' '}' block</a>

Note the difference between using a movement command and an object.  The
movement command operates from here (cursor position) to where the movement
takes us.  When using an object the whole object is operated upon, no matter
where on the object the cursor is.  For example, compare "dw" and "daw": "dw"
deletes from the cursor position to the start of the next word, "daw" deletes
the word under the cursor and the space after or before it.


### <a id="tag-blocks" class="section-title" href="#tag-blocks">Tag blocks</a>

For the "it" and "at" text objects an attempt is done to select blocks between
matching tags for HTML and XML.  But since these are not completely compatible
there are a few restrictions.

The normal method is to select a <tag> until the matching </tag>.  For "at"
the tags are included, for "it" they are excluded.  But when "it" is repeated
the tags will be included (otherwise nothing would change).  Also, "it" used
on a tag block with no contents will select the leading tag.

"<aaa/>" items are skipped.  Case is ignored, also for XML where case does
matter.

In HTML it is possible to have a tag like <br> or <meta ...> without a
matching end tag.  These are ignored.

The text objects are tolerant about mistakes.  Stray end tags are ignored.


## <a id="mark-motions E20 E78" class="section-title" href="#mark-motions E20 E78">7. Marks</a> 

Jumping to a mark can be done in two ways:
1. With ` (backtick):	  The cursor is positioned at the specified location
and the motion is [exclusive](#exclusive).
2. With ' (single quote): The cursor is positioned on the first non-blank
character in the line of the specified location and
the motion is linewise.
### <a id="mark-view" class="section-title" href="#mark-view">Note:</a>
3. Apart from the above if 'jumpoptions' contains "view", they will also try to
restore the mark view. This is the number of lines between the cursor position
and the window topline (first buffer line displayed in the window) when it was
set.

### <a id="m mark Mark" class="section-title" href="#m mark Mark">Note:</a>
m{a-zA-Z}		Set mark {a-zA-Z} at cursor position (does not move
the cursor, this is not a motion command).

### <a id="m' m`" class="section-title" href="#m' m`">Note:</a>
m'  or  m`		Set the previous context mark.  This can be jumped to
with the "''" or "``" command (does not move the
cursor, this is not a motion command).

### <a id="m[ m]" class="section-title" href="#m[ m]">Note:</a>
m[  or  m]		Set the ['[| or |']](#'[| or |']) mark.  Useful when an operator is
to be simulated by multiple commands.  (does not move
the cursor, this is not a motion command).

### <a id="m< m>" class="section-title" href="#m< m>">Note:</a>
m<  or  m>		Set the ['<| or |'>](#'<| or |'>) mark.  Useful to change what the
`gv` command selects.  (does not move the cursor, this
is not a motion command).
Note that the Visual mode cannot be set, only the
start and end position.

### <a id=":ma :mark E191" class="section-title" href="#:ma :mark E191">Note:</a>
:[range]ma[rk] {a-zA-Z'}
Set mark {a-zA-Z'} at last line number in [range],
column 0.  Default is cursor line.

### <a id=":k" class="section-title" href="#:k">Note:</a>
:[range]k{a-zA-Z'}	Same as :mark, but the space before the mark name can
be omitted.

### <a id="' 'a ` `a" class="section-title" href="#' 'a ` `a">Note:</a>
'{a-z}  `{a-z}		Jump to the mark {a-z} in the current buffer.

### <a id="'A '0 `A `0" class="section-title" href="#'A '0 `A `0">Note:</a>
'{A-Z0-9}  `{A-Z0-9}	To the mark {A-Z0-9} in the file where it was set (not
a motion command when in another file).

### <a id="g' g'a g` g`a" class="section-title" href="#g' g'a g` g`a">Note:</a>
g'{mark}  g`{mark}
Jump to the {mark}, but don't change the jumplist when
jumping within the current buffer.  Example:
```
g`"

```
			jumps to the last known position in a file.
See also [:keepjumps](#:keepjumps).

### <a id=":marks" class="section-title" href="#:marks">Note:</a>
:marks			List all the current marks (not a motion command).
The ['(|, |')|, |'{| and |'}](#'(|, |')|, |'{| and |'}) marks are not listed.
The first column has number zero.
### <a id="E283" class="section-title" href="#E283">Note:</a>
:marks {arg}		List the marks that are mentioned in {arg} (not a
motion command).  For example:
```
:marks aB

```
			to list marks 'a' and 'B'.

### <a id=":delm :delmarks" class="section-title" href="#:delm :delmarks">Note:</a>
:delm[arks] {marks}	Delete the specified marks.  Marks that can be deleted
include A-Z and 0-9.  You cannot delete the ' mark.
They can be specified by giving the list of mark
names, or with a range, separated with a dash.  Spaces
are ignored.  Examples:
```
:delmarks a	      deletes mark a
:delmarks a b 1    deletes marks a, b and 1
:delmarks Aa       deletes marks A and a
:delmarks p-z      deletes marks in the range p to z
:delmarks ^.[]     deletes marks ^ . [ ]
:delmarks \"	      deletes mark "

```


:delm[arks]!		Delete all marks for the current buffer, but not marks
A-Z or 0-9.  Also clear the [changelist](#changelist).

A mark is not visible in any way.  It is just a position in the file that is
remembered.  Do not confuse marks with named registers, they are totally
unrelated.

'a - 'z		lowercase marks, valid within one file
'A - 'Z		uppercase marks, also called file marks, valid between files
'0 - '9		numbered marks, set from .shada file

Lowercase marks 'a to 'z are remembered as long as the file remains in the
buffer list.  If you remove the file from the buffer list, all its marks are
lost.  If you delete a line that contains a mark, that mark is erased.

Lowercase marks can be used in combination with operators.  For example: "d't"
deletes the lines from the cursor position to mark 't'.  Hint: Use mark 't' for
Top, 'b' for Bottom, etc..  Lowercase marks are restored when using undo and
redo.

Uppercase marks 'A to 'Z include the file name.  You can use them to jump from
file to file.  You can only use an uppercase mark with an operator if the mark
is in the current file.  The line number of the mark remains correct, even if
you insert/delete lines or edit another file for a moment.  When the 'shada'
option is not empty, uppercase marks are kept in the .shada file.  See
[shada-file-marks](#shada-file-marks).

Numbered marks '0 to '9 are quite different.  They can not be set directly.
They are only present when using a shada file [shada-file](#shada-file).  Basically '0
is the location of the cursor when you last exited Vim, '1 the last but one
time, etc.  Use the "r" flag in 'shada' to specify files for which no
Numbered mark should be stored.  See [shada-file-marks](#shada-file-marks).


### <a id="'[ `[" class="section-title" href="#'[ `[">Note:</a>
'[  `[			To the first character of the previously changed
or yanked text.

### <a id="'] `]" class="section-title" href="#'] `]">Note:</a>
']  `]			To the last character of the previously changed or
yanked text.

After executing an operator the Cursor is put at the beginning of the text
that was operated upon.  After a put command ("p" or "P") the cursor is
sometimes placed at the first inserted line and sometimes on the last inserted
character.  The four commands above put the cursor at either end.  Example:
After yanking 10 lines you want to go to the last one of them: "10Y']".  After
inserting several lines with the "p" command you want to jump to the lowest
inserted line: "p']".  This also works for text that has been inserted.

Note: After deleting text, the start and end positions are the same, except
when using blockwise Visual mode.  These commands do not work when no change
was made yet in the current file.

### <a id="'< `<" class="section-title" href="#'< `<">Note:</a>
'<  `<			To the first line or character of the last selected
Visual area in the current buffer.  For block mode it
may also be the last character in the first line (to
be able to define the block).

### <a id="'> `>" class="section-title" href="#'> `>">Note:</a>
'>  `>			To the last line or character of the last selected
Visual area in the current buffer.  For block mode it
may also be the first character of the last line (to
be able to define the block).  Note that 'selection'
applies, the position may be just after the Visual
area.

### <a id="'' ``" class="section-title" href="#'' ``">Note:</a>
''  ``			To the position before the latest jump, or where the
last "m'" or "m`" command was given.  Not set when the
[:keepjumps](#:keepjumps) command modifier was used.
Also see [restore-position](#restore-position).

### <a id="'quote `quote" class="section-title" href="#'quote `quote">Note:</a>
'"  `"			To the cursor position when last exiting the current
buffer.  Defaults to the first character of the first
line.  See [last-position-jump](#last-position-jump) for how to use this
for each opened file.
Only one position is remembered per buffer, not one
for each window.  As long as the buffer is visible in
a window the position won't be changed.  Mark is also 
reset when [:wshada](#:wshada) is run.

### <a id="'^ `^" class="section-title" href="#'^ `^">Note:</a>
'^  `^			To the position where the cursor was the last time
when Insert mode was stopped.  This is used by the
[gi| command.  Not set when the |:keepjumps](#gi| command.  Not set when the |:keepjumps) command
modifier was used.

### <a id="'. `." class="section-title" href="#'. `.">Note:</a>
'.  `.			To the position where the last change was made.  The
position is at or near where the change started.
Sometimes a command is executed as several changes,
then the position can be near the end of what the
command changed.  For example when inserting a word,
the position will be on the last character.
To jump to older changes use [g;](#g;).

### <a id="'( `(" class="section-title" href="#'( `(">Note:</a>
'(  `(			To the start of the current sentence, like the [(](#()
command.

### <a id="') `)" class="section-title" href="#') `)">Note:</a>
')  `)			To the end of the current sentence, like the [)](#))
command.

### <a id="'{ `{" class="section-title" href="#'{ `{">Note:</a>
'{  `{			To the start of the current paragraph, like the [{](#{)
command.

### <a id="'} `}" class="section-title" href="#'} `}">Note:</a>
'}  `}			To the end of the current paragraph, like the [}](#})
command.

These commands are not marks themselves, but jump to a mark:

### <a id="]'" class="section-title" href="#]'">Note:</a>
]'			[count] times to next line with a lowercase mark below
the cursor, on the first non-blank character in the
line.

### <a id="]`" class="section-title" href="#]`">Note:</a>
]`			[count] times to lowercase mark after the cursor.

### <a id="['" class="section-title" href="#['">Note:</a>
['			[count] times to previous line with a lowercase mark
before the cursor, on the first non-blank character in
the line.

### <a id="[`" class="section-title" href="#[`">Note:</a>
[`			[count] times to lowercase mark before the cursor.


### <a id=":loc :lock :lockmarks" class="section-title" href="#:loc :lock :lockmarks">:loc[kmarks] {command}</a>
Execute {command} without adjusting marks.  This is
useful when changing text in a way that the line count
will be the same when the change has completed.
WARNING: When the line count does change, marks below
the change will keep their line number, thus move to
another text line.
These items will not be adjusted for deleted/inserted
lines:
- lower case letter marks 'a - 'z
- upper case letter marks 'A - 'Z
- numbered marks '0 - '9
- last insert position '^
- last change position '.
- last affected text area '[ and ']
- the Visual area '< and '>
- line numbers in placed signs
- line numbers in quickfix positions
- positions in the [jumplist](#jumplist)
- positions in the [tagstack](#tagstack)
These items will still be adjusted:
- previous context mark ''
- the cursor position
- the view of a window on a buffer
- folds
- diffs

### <a id=":kee :keep :keepmarks" class="section-title" href="#:kee :keep :keepmarks">:kee[pmarks] {command}</a>
Currently only has effect for the filter command
[:range!](#:range!):
- When the number of lines after filtering is equal to
or larger than before, all marks are kept at the
same line number.
- When the number of lines decreases, the marks in the
lines that disappeared are deleted.
In any case the marks below the filtered text have
their line numbers adjusted, thus stick to the text,
as usual.
When the 'R' flag is missing from 'cpoptions' this has
the same effect as using ":keepmarks".

### <a id=":keepj :keepjumps" class="section-title" href="#:keepj :keepjumps">Note:</a>
:keepj[umps] {command}
Moving around in {command} does not change the [''](#''),
['.| and |'^| marks, the |jumplist](#'.| and |'^| marks, the |jumplist) or the
[changelist](#changelist).
Useful when making a change or inserting text
automatically and the user doesn't want to go to this
position.  E.g., when updating a "Last change"
timestamp in the first line:
```

:let lnum = line(".")
:keepjumps normal gg
:call SetLastChange()
:keepjumps exe "normal " .. lnum .. "G"

```

Note that ":keepjumps" must be used for every command.
When invoking a function the commands in that function
can still change the jumplist.  Also, for
":keepjumps exe 'command '" the "command" won't keep
jumps.  Instead use: ":exe 'keepjumps command'"


## <a id="jump-motions" class="section-title" href="#jump-motions">8. Jumps</a> 

A "jump" is a command that normally moves the cursor several lines away.  If
you make the cursor "jump" the position of the cursor before the jump is
remembered.  You can return to that position with the "''" and "``" commands,
unless the line containing that position was changed or deleted.  The
following commands are "jump" commands: "'", "`", "G", "/", "?", "n", "N",
"%", "(", ")", "[[", "]]", "{", "}", ":s", ":tag", "L", "M", "H" and the
commands that start editing a new file.

### <a id="CTRL-O" class="section-title" href="#CTRL-O">Note:</a>
CTRL-O			Go to [count] Older cursor position in jump list
(not a motion command).


```
Tab>		or					*CTRL-I* *<Tab>*
CTRL-I			Go to [count] newer cursor position in jump list
(not a motion command).

### <a id=":ju :jumps" class="section-title" href="#:ju :jumps">Note:</a>
:ju[mps]		Print the jump list (not a motion command).

### <a id=":cle :clearjumps" class="section-title" href="#:cle :clearjumps">Note:</a>
:cle[arjumps]		Clear the jump list of the current window.

### <a id="jumplist" class="section-title" href="#jumplist">Note:</a>
Jumps are remembered in a jump list.  With the CTRL-O and CTRL-I command you
can go to cursor positions before older jumps, and back again.  Thus you can
move up and down the list.  There is a separate jump list for each window.
The maximum number of entries is fixed at 100.

For example, after three jump commands you have this jump list:

jump line  col file/text ~
3	  1    0 some text ~
2	 70    0 another line ~
1  1154   23 end. ~
> ~

The "file/text" column shows the file name, or the text at the jump if it is
in the current file (an indent is removed and a long line is truncated to fit
in the window).

The marker ">" indicates the current position in the jumplist.  It may not be
shown when filtering the [:jumps| command using |:filter](#:jumps| command using |:filter)

You are currently in line 1167.  If you then use the CTRL-O command, the
cursor is put in line 1154.  This results in:

jump line  col file/text ~
2	  1    0 some text ~
1	 70    0 another line ~
>  0  1154   23 end. ~
1  1167    0 foo bar ~

The pointer will be set at the last used jump position.  The next CTRL-O
command will use the entry above it, the next CTRL-I command will use the
entry below it.  If the pointer is below the last entry, this indicates that
you did not use a CTRL-I or CTRL-O before.  In this case the CTRL-O command
will cause the cursor position to be added to the jump list, so you can get
back to the position before the CTRL-O.  In this case this is line 1167.

With more CTRL-O commands you will go to lines 70 and 1.  If you use CTRL-I
you can go back to 1154 and 1167 again.  Note that the number in the "jump"
column indicates the count for the CTRL-O or CTRL-I command that takes you to
this position.

If you use a jump command, the current line number is inserted at the end of
the jump list.  If the same line was already in the jump list, it is removed.
The result is that when repeating CTRL-O you will get back to old positions
only once.

When the [:keepjumps](#:keepjumps) command modifier is used, jumps are not stored in the
jumplist.  Jumps are also not stored in other cases, e.g., in a [:global](#:global)
command.  You can explicitly add a jump by setting the ' mark with "m'".  Note
that calling setpos() does not do this.

After the CTRL-O command that got you into line 1154 you could give another
jump command (e.g., "G").  The jump list would then become:

jump line  col file/text ~
4	  1    0 some text ~
3	 70    0 another line ~
2  1167    0 foo bar ~
1  1154   23 end. ~
> ~

The line numbers will be adjusted for deleted and inserted lines.  This fails
if you stop editing a file without writing, like with ":n!".

When you split a window, the jumplist will be copied to the new window.

If you have included the ' item in the 'shada' option the jumplist will be
stored in the ShaDa file and restored when starting Vim.

### <a id="jumplist-stack" class="section-title" href="#jumplist-stack">Note:</a>
When jumpoptions includes "stack", the jumplist behaves like the history in a
web browser and like the tag stack.  When jumping to a new location from the
middle of the jumplist, the locations after the current position will be
discarded.

This behavior corresponds to the following situation in a web browser.
Navigate to first.com, second.com, third.com, fourth.com and then fifth.com.
Then navigate backwards twice so that third.com is displayed.  At that point,
the history is:
- first.com
- second.com
- third.com <--
- fourth.com
- fifth.com

Finally, navigate to a different webpage, new.com.  The history is
- first.com
- second.com
- third.com
- new.com <--

When the jumpoptions includes "stack", this is the behavior of Nvim as well.
That is, given a jumplist like the following in which CTRL-O has been used to
move back three times to location X

jump line  col file/text
2  1260    8 src/nvim/mark.c         <-- location X-2
1   685    0 src/nvim/option_defs.h  <-- location X-1
>  0   462   36 src/nvim/option_defs.h  <-- location X
1   479   39 src/nvim/option_defs.h
2   213    2 src/nvim/mark.c
3   181    0 src/nvim/mark.c

jumping to (new) location Y results in the locations after the current
locations being removed:

jump line  col file/text
3  1260    8 src/nvim/mark.c
2   685    0 src/nvim/option_defs.h
1   462   36 src/nvim/option_defs.h  <-- location X
> 

Then, when yet another location Z is jumped to, the new location Y appears
directly after location X in the jumplist and location X remains in the same
position relative to the locations (X-1, X-2, etc., ...) that had been before it
prior to the original jump from X to Y:

jump line  col file/text
4  1260    8 src/nvim/mark.c         <-- location X-2
3   685    0 src/nvim/option_defs.h  <-- location X-1
2   462   36 src/nvim/option_defs.h  <-- location X
1   100    0 src/nvim/option_defs.h  <-- location Y
> 

### <a id="changelist change-list-jumps E664" class="section-title" href="#changelist change-list-jumps E664">Change List Jumps</a>

When making a change the cursor position is remembered.  One position is
remembered for every change that can be undone, unless it is close to a
previous change.  Two commands can be used to jump to positions of changes,
also those that have been undone:

### <a id="g; E662" class="section-title" href="#g; E662">Note:</a>
g;			Go to [count] older position in change list.
If [count] is larger than the number of older change
positions go to the oldest change.
If there is no older change an error message is given.
(not a motion command)

### <a id="g, E663" class="section-title" href="#g, E663">Note:</a>
g,			Go to [count] newer position in change list.
Just like [g;](#g;) but in the opposite direction.
(not a motion command)

When using a count you jump as far back or forward as possible.  Thus you can
use "999g;" to go to the first change for which the position is still
remembered.  The number of entries in the change list is fixed and is the same
as for the [jumplist](#jumplist).

When two undo-able changes are in the same line and at a column position less
than 'textwidth' apart only the last one is remembered.  This avoids that a
sequence of small changes in a line, for example "xxxxx", adds many positions
to the change list.  When 'textwidth' is zero 'wrapmargin' is used.  When that
also isn't set a fixed number of 79 is used.  Detail: For the computations
bytes are used, not characters, to avoid a speed penalty (this only matters
for multibyte encodings).

Note that when text has been inserted or deleted the cursor position might be
a bit different from the position of the change.  Especially when lines have
been deleted.

When the `:keepjumps` command modifier is used the position of a change is not
remembered.

### <a id=":changes" class="section-title" href="#:changes">Note:</a>
:changes		Print the change list.  A ">" character indicates the
current position.  Just after a change it is below the
newest entry, indicating that `g;` takes you to the
newest entry position.  The first column indicates the
count needed to take you to this position.  Example:

change line  col text ~
3     9    8 bla bla bla
2    11   57 foo is a bar
1    14   54 the latest changed line
```

The `3g;` command takes you to line 9.  Then the
output of `:changes` is:

change line  col text ~
>   0     9    8 bla bla bla
1    11   57 foo is a bar
2    14   54 the latest changed line

Now you can use "g," to go to line 11 and "2g," to go
to line 14.


## <a id="various-motions" class="section-title" href="#various-motions">9. Various Motions</a> 

### <a id="%" class="section-title" href="#%">Note:</a>
%			Find the next item in this line after or under the
cursor and jump to its match. [inclusive](#inclusive) motion.
Items can be:
([{}])		parenthesis or (curly/square) brackets
(this can be changed with the
'matchpairs' option)
### <a id="/ /" class="section-title" href="#/ /">Note:</a>
#if, #ifdef, #else, #elif, #endif
C preprocessor conditionals (when the
cursor is on the # or no ([{
is following)
For other items the matchit plugin can be used, see
[matchit](#matchit).  This plugin also helps to skip matches in
comments.

When 'cpoptions' contains "M" [cpo-M](#cpo-M) backslashes
before parens and braces are ignored.  Without "M" the
number of backslashes matters: an even number doesn't
match with an odd number.  Thus in "( \) )" and "\( (
\)" the first and last parenthesis match.

When the '%' character is not present in 'cpoptions'
[cpo-%](#cpo-%), parens and braces inside double quotes are
ignored, unless the number of parens/braces in a line
is uneven and this line and the previous one does not
end in a backslash.  '(', '{', '[', ']', '}' and ')'
are also ignored (parens and braces inside single
quotes).  Note that this works fine for C, but not for
Perl, where single quotes are used for strings.

Nothing special is done for matches in comments.  You
can either use the [matchit](#matchit) plugin or put quotes around
matches.

No count is allowed, {count}% jumps to a line {count}
percentage down the file [N%](#N%).  Using '%' on
#if/#else/#endif makes the movement linewise.

### <a id="[(" class="section-title" href="#[(">Note:</a>
[(			Go to [count] previous unmatched '('.
[exclusive](#exclusive) motion.

### <a id="[{" class="section-title" href="#[{">Note:</a>
[{			Go to [count] previous unmatched '{'.
[exclusive](#exclusive) motion.

### <a id="])" class="section-title" href="#])">Note:</a>
])			Go to [count] next unmatched ')'.
[exclusive](#exclusive) motion.

### <a id="]}" class="section-title" href="#]}">Note:</a>
]}			Go to [count] next unmatched '}'.
[exclusive](#exclusive) motion.

The above four commands can be used to go to the start or end of the current
code block.  It is like doing "%" on the '(', ')', '{' or '}' at the other
end of the code block, but you can do this from anywhere in the code block.
Very useful for C programs.  Example: When standing on "case x:", "[{" will
bring you back to the switch statement.

### <a id="]m" class="section-title" href="#]m">Note:</a>
]m			Go to [count] next start of a method (for Java or
similar structured language).  When not before the
start of a method, jump to the start or end of the
class.  When no '{' is found after the cursor, this is
an error.  [exclusive](#exclusive) motion.
### <a id="]M" class="section-title" href="#]M">Note:</a>
]M			Go to [count] next end of a method (for Java or
similar structured language).  When not before the end
of a method, jump to the start or end of the class.
When no '}' is found after the cursor, this is an
error. [exclusive](#exclusive) motion.
### <a id="[m" class="section-title" href="#[m">Note:</a>
[m			Go to [count] previous start of a method (for Java or
similar structured language).  When not after the
start of a method, jump to the start or end of the
class.  When no '{' is found before the cursor this is
an error. [exclusive](#exclusive) motion.
### <a id="[M" class="section-title" href="#[M">Note:</a>
[M			Go to [count] previous end of a method (for Java or
similar structured language).  When not after the
end of a method, jump to the start or end of the
class.  When no '}' is found before the cursor this is
an error. [exclusive](#exclusive) motion.

The above two commands assume that the file contains a class with methods.
The class definition is surrounded in '{' and '}'.  Each method in the class
is also surrounded with '{' and '}'.  This applies to the Java language.  The
file looks like this:
```

// comment
class foo {
int method_one() {
body_one();
}
int method_two() {
body_two();
}
}

[To try this out copy the text and put it in a new buffer, the help text above
confuses the jump commands]

Starting with the cursor on "body_two()", using "[m" will jump to the '{' at
the start of "method_two()" (obviously this is much more useful when the
method is long!).  Using "2[m" will jump to the start of "method_one()".
Using "3[m" will jump to the start of the class.

### <a id="[#" class="section-title" href="#[#">Note:</a>
[#			Go to [count] previous unmatched "#if" or "#else".
[exclusive](#exclusive) motion.

### <a id="]#" class="section-title" href="#]#">Note:</a>
]#			Go to [count] next unmatched "#else" or "#endif".
[exclusive](#exclusive) motion.

These two commands work in C programs that contain #if/#else/#endif
constructs.  It brings you to the start or end of the #if/#else/#endif where
the current line is included.  You can then use "%" to go to the matching line.

### <a id="[star [/" class="section-title" href="#[star [/">Note:</a>
[*  or  [/		Go to [count] previous start of a C comment "/*".
[exclusive](#exclusive) motion.

### <a id="]star ]/" class="section-title" href="#]star ]/">Note:</a>
]*  or  ]/		Go to [count] next end of a C comment "*/".
[exclusive](#exclusive) motion.


### <a id="H" class="section-title" href="#H">Note:</a>
H			To line [count] from top (Home) of window (default:
first line on the window) on the first non-blank
character [linewise](#linewise).  See also 'startofline' option.
Cursor is adjusted for 'scrolloff' option, unless an
operator is pending, in which case the text may
scroll.  E.g. "yH" yanks from the first visible line
until the cursor line (inclusive).

### <a id="M" class="section-title" href="#M">Note:</a>
M			To Middle line of window, on the first non-blank
character [linewise](#linewise).  See also 'startofline' option.

### <a id="L" class="section-title" href="#L">Note:</a>
L			To line [count] from bottom of window (default: Last
line on the window) on the first non-blank character
[linewise](#linewise).  See also 'startofline' option.
Cursor is adjusted for 'scrolloff' option, unless an
operator is pending, in which case the text may
scroll.  E.g. "yL" yanks from the cursor to the last
visible line.


```
LeftMouse>		Moves to the position on the screen where the mouse
click is [exclusive|.  See also |<LeftMouse>](#exclusive|.  See also |<LeftMouse>).  If the
position is in a status line, that window is made the
active window and the cursor is not moved.

vim:tw=78:ts=8:noet:ft=help:norl:

