---
title: Tree Sitter
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Visual Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="Visual Visual-mode visual-mode" class="section-title" href="#Visual Visual-mode visual-mode">Visual mode</a>

Visual mode is a flexible and easy way to select a piece of text for an
operator.  It is the only way to select a block of text.

This is introduced in section [04.4](#04.4) of the user manual.

Type [gO](#gO) to see the table of contents.


## <a id="visual-use" class="section-title" href="#visual-use">1. Using Visual Mode</a> 

Using Visual mode consists of three parts:
1. Mark the start of the text with "v", "V" or CTRL-V.
The character under the cursor will be used as the start.
2. Move to the end of the text.
The text from the start of the Visual mode up to and including the
character under the cursor is highlighted.
3. Type an operator command.
The highlighted characters will be operated upon.

The [hl-Visual](#hl-Visual) group determines the highlighting of the visual selection.
The 'virtualedit' option can be used to allow positioning the cursor to
positions where there is no actual character.

The highlighted text normally includes the character under the cursor.
However, when the 'selection' option is set to "exclusive" and the cursor is
after the Visual area, the character under the cursor is not included.

With "v" the text before the start position and after the end position will
not be highlighted.  However, all uppercase and non-alpha operators, except
"~" and "U", will work on whole lines anyway.  See the list of operators
below.

### <a id="visual-block" class="section-title" href="#visual-block">Note:</a>
With CTRL-V (blockwise Visual mode) the highlighted text will be a rectangle
between start position and the cursor.  However, some operators work on whole
lines anyway (see the list below).  The change and substitute operators will
delete the highlighted text and then start insertion at the top left
position.


## <a id="visual-start" class="section-title" href="#visual-start">2. Starting and Stopping Visual Mode</a> 

### <a id="v charwise-visual" class="section-title" href="#v charwise-visual">Note:</a>
[count]v		Start Visual mode per character.
With [count] select the same number of characters or
lines as used for the last Visual operation, but at
the current cursor position, multiplied by [count].
When the previous Visual operation was on a block both
the width and height of the block are multiplied by
[count].
When there was no previous Visual operation [count]
characters are selected.  This is like moving the
### <a id="cursor right N  [count] characters." class="section-title" href="#cursor right N  [count] characters.">Note:</a>
'selection' is not "exclusive".

### <a id="V linewise-visual" class="section-title" href="#V linewise-visual">Note:</a>
[count]V		Start Visual mode linewise.
With [count] select the same number of lines as used
for the last Visual operation, but at the current
cursor position, multiplied by [count].  When there
was no previous Visual operation [count] lines are
selected.

### <a id="CTRL-V blockwise-visual" class="section-title" href="#CTRL-V blockwise-visual">Note:</a>
[count]CTRL-V		Start Visual mode blockwise.

If you use <Esc>, click the left mouse button or use any command that
does a jump to another buffer while in Visual mode, the highlighting stops
and no text is affected.  Also when you hit "v" in charwise Visual mode,
"CTRL-V" in blockwise Visual mode or "V" in linewise Visual mode.  If you hit
CTRL-Z the highlighting stops and the editor is suspended or a new shell is
started [CTRL-Z](#CTRL-Z).

new mode after typing:		*v_v* *v_CTRL-V* *v_V*
old mode	     "v"	      "CTRL-V"		     "V"	~

Normal		    Visual	   blockwise Visual	  linewise Visual
Visual		    Normal	   blockwise Visual	  linewise Visual
blockwise Visual    Visual	   Normal		  linewise Visual
linewise Visual     Visual	   blockwise Visual	  Normal

### <a id="gv v_gv reselect-Visual" class="section-title" href="#gv v_gv reselect-Visual">Note:</a>
gv			Start Visual mode with the same area as the previous
area and the same mode.
In Visual mode the current and the previous Visual
area are exchanged.
After using "p" or "P" in Visual mode the text that
was put will be selected.

### <a id="gn v_gn" class="section-title" href="#gn v_gn">Note:</a>
gn			Search forward for the last used search pattern, like
with `n`, and start Visual mode to select the match.
If the cursor is on the match, visually selects it.
If an operator is pending, operates on the match.
E.g., "dgn" deletes the text of the next match.
If Visual mode is active, extends the selection
until the end of the next match.
'wrapscan' applies
Note: Unlike `n` the search direction does not depend
on the previous search command.

### <a id="gN v_gN" class="section-title" href="#gN v_gN">Note:</a>
gN			Like [gn](#gn) but searches backward, like with `N`.

### <a id="<LeftMouse>" class="section-title" href="#<LeftMouse>">Note:</a>

```
LeftMouse>		Set the current cursor position.  If Visual mode is
active it is stopped.  Only when 'mouse' option
contains 'n' or 'a'.  If the position is within 'so'
lines from the last line on the screen the text is
scrolled up.  If the position is within 'so' lines from
the first line on the screen the text is scrolled
down.

### <a id="<RightMouse>" class="section-title" href="#<RightMouse>">Note:</a>

```
RightMouse>		Start Visual mode if it is not active.  The text from
the cursor position to the position of the click is
highlighted.  If Visual mode was already active move
the start or end of the highlighted text, whichever
is closest, to the position of the click.  Only when
'mouse' option contains 'n' or 'a'.

Note: when 'mousemodel' is set to "popup",

```
S-LeftMouse> has to be used instead of <RightMouse>.

### <a id="<LeftRelease>" class="section-title" href="#<LeftRelease>">Note:</a>

```
LeftRelease>		This works like a <LeftMouse>, if it is not at
the same position as <LeftMouse>.  In an older version
of xterm you won't see the selected area until the
button is released, unless there is access to the
display where the xterm is running (via the DISPLAY
environment variable or the -display argument).  Only
when 'mouse' option contains 'n' or 'a'.

If Visual mode is not active and the "v", "V" or CTRL-V is preceded with a
count, the size of the previously highlighted area is used for a start.  You
can then move the end of the highlighted area and give an operator.  The type
of the old area is used (character, line or blockwise).
- Linewise Visual mode: The number of lines is multiplied with the count.
- Blockwise Visual mode: The number of lines and columns is multiplied with
the count.
- Normal Visual mode within one line: The number of characters is multiplied
with the count.
- Normal Visual mode with several lines: The number of lines is multiplied
with the count, in the last line the same number of characters is used as
in the last line in the previously highlighted area.
The start of the text is the Cursor position.  If the "$" command was used as
one of the last commands to extend the highlighted text, the area will be
extended to the rightmost column of the longest line.

If you want to highlight exactly the same area as the last time, you can use
"gv" [gv| |v_gv](#gv| |v_gv).

### <a id="v_<Esc>" class="section-title" href="#v_<Esc>">Note:</a>

```
Esc>			In Visual mode: Stop Visual mode.
### <a id="v_META v_ALT" class="section-title" href="#v_META v_ALT">Note:</a>
ALT ([META](#META)) may act like <Esc> if the chord is not mapped.
For example <A-x> acts like <Esc>x if <A-x> does not have a
visual-mode mapping.

### <a id="v_CTRL-C" class="section-title" href="#v_CTRL-C">Note:</a>
CTRL-C			In Visual mode: Stop Visual mode.  When insert mode is
pending (the mode message shows
"-- (insert) VISUAL --"), it is also stopped.


## <a id="visual-change" class="section-title" href="#visual-change">3. Changing the Visual Area</a> 

### <a id="v_o" class="section-title" href="#v_o">Note:</a>
o			Go to Other end of highlighted text: The current
cursor position becomes the start of the highlighted
text and the cursor is moved to the other end of the
highlighted text.  The highlighted area remains the
same.

### <a id="v_O" class="section-title" href="#v_O">Note:</a>
O			Go to Other end of highlighted text.  This is like
"o", but in Visual block mode the cursor moves to the
other corner in the same line.  When the corner is at
a character that occupies more than one position on
the screen (e.g., a <Tab>), the highlighted text may
change.

### <a id="v_$" class="section-title" href="#v_$">Note:</a>
When the "$" command is used with blockwise Visual mode, the right end of the
highlighted text will be determined by the longest highlighted line.  This
stops when a motion command is used that does not move straight up or down.

For moving the end of the block many commands can be used, but you cannot
use Ex commands, commands that make changes or abandon the file.  Commands
(starting with) ".", "&", CTRL-^, "Z", CTRL-], CTRL-T, CTRL-R, CTRL-I
and CTRL-O cause a beep and Visual mode continues.

When switching to another window on the same buffer, the cursor position in
that window is adjusted, so that the same Visual area is still selected.  This
is especially useful to view the start of the Visual area in one window, and
the end in another.  You can then use <RightMouse> (or <S-LeftMouse> when
'mousemodel' is "popup") to drag either end of the Visual area.


## <a id="visual-operators" class="section-title" href="#visual-operators">4. Operating on the Visual Area</a> 

The operators that can be used are:
~	switch case					[v_~](#v_~)
d	delete						[v_d](#v_d)
c	change (4)					[v_c](#v_c)
y	yank						[v_y](#v_y)
>	shift right (4)					[v_>](#v_>)

```
	shift left (4)					[v_<](#v_<)
!	filter through external command (1)		[v_!](#v_!)
=	filter through 'equalprg' option command (1)	[v_=](#v_=)
gq	format lines to 'textwidth' length (1)		[v_gq](#v_gq)

The objects that can be used are:
aw	a word (with white space)			[v_aw](#v_aw)
iw	inner word					[v_iw](#v_iw)
aW	a WORD (with white space)			[v_aW](#v_aW)
iW	inner WORD					[v_iW](#v_iW)
as	a sentence (with white space)			[v_as](#v_as)
is	inner sentence					[v_is](#v_is)
ap	a paragraph (with white space)			[v_ap](#v_ap)
ip	inner paragraph					[v_ip](#v_ip)
ab	a () block (with parentheses)			[v_ab](#v_ab)
ib	inner () block					[v_ib](#v_ib)
aB	a {} block (with braces)			[v_aB](#v_aB)
iB	inner {} block					[v_iB](#v_iB)
at	a <tag> </tag> block (with tags)		[v_at](#v_at)
it	inner <tag> </tag> block			[v_it](#v_it)
a<	a <> block (with <>)				[v_a<](#v_a<)
i<	inner <> block					[v_i<](#v_i<)
a[	a [] block (with [])				[v_a[](#v_a[)
i[	inner [] block					[v_i[](#v_i[)
a"	a double quoted string (with quotes)		[v_aquote](#v_aquote)
i"	inner double quoted string			[v_iquote](#v_iquote)
a'	a single quoted string (with quotes)		[v_a'](#v_a')
i'	inner simple quoted string			[v_i'](#v_i')
a`	a string in backticks (with backticks)		[v_a`](#v_a`)
i`	inner string in backticks			[v_i`](#v_i`)

Additionally the following commands can be used:
:	start Ex command for highlighted lines (1)	[v_:](#v_:)
r	change (4)					[v_r](#v_r)
s	change						[v_s](#v_s)
C	change (2)(4)					[v_C](#v_C)
S	change (2)					[v_S](#v_S)
R	change (2)					[v_R](#v_R)
x	delete						[v_x](#v_x)
D	delete (3)					[v_D](#v_D)
X	delete (2)					[v_X](#v_X)
Y	yank (2)					[v_Y](#v_Y)
p	put						[v_p](#v_p)
P	put without overwriting registers		[v_P](#v_P)
J	join (1)					[v_J](#v_J)
U	make uppercase					[v_U](#v_U)
u	make lowercase					[v_u](#v_u)
^]	find tag					[v_CTRL-]](#v_CTRL-])
I	block insert					[v_b_I](#v_b_I)
A	block append					[v_b_A](#v_b_A)

(1): Always whole lines, see [:visual_example](#:visual_example).
(2): Whole lines when not using CTRL-V.
(3): Whole lines when not using CTRL-V, delete until the end of the line when
using CTRL-V.
(4): When using CTRL-V operates on the block only.

Note that the ":vmap" command can be used to specifically map keys in Visual
mode.  For example, if you would like the "/" command not to extend the Visual
area, but instead take the highlighted text and search for that:
```
:vmap / y/<C-R>"<CR>
(In the <> notation [<>](#<>), when typing it you should type it literally; you
need to remove the 'B' flag from 'cpoptions'.)

If you want to give a register name using the """ command, do this just before
typing the operator character: "v{move-around}"xd".

If you want to give a count to the command, do this just before typing the
operator character: "v{move-around}3>" (move lines 3 indents to the right).

### <a id="{move-around}" class="section-title" href="#{move-around}">Note:</a>
The {move-around} is any sequence of movement commands.  Note the difference
with {motion}, which is only ONE movement command.

Another way to operate on the Visual area is using the [/\%V](#/\%V) item in a
pattern.  For example, to replace all '(' in the Visual area with '#':
```

:'<,'>s/\%V(/#/g

Note that the "'<,'>" will appear automatically when you press ":" in Visual
mode.


## <a id="blockwise-operators" class="section-title" href="#blockwise-operators">5. Blockwise Operators</a> 

Reminder: Use 'virtualedit' to be able to select blocks that start or end
after the end of a line or halfway through a tab.

### <a id="v_b_I" class="section-title" href="#v_b_I">Visual-block Insert</a>
With a blockwise selection, I{string}<ESC> will insert {string} at the start
of block on every line of the block, provided that the line extends into the
block.  Thus lines that are short will remain unmodified.  TABs are split to
retain visual columns.  Works only for adding text to a line, not for
deletions.  See [v_b_I_example](#v_b_I_example).

### <a id="v_b_A" class="section-title" href="#v_b_A">Visual-block Append</a>
With a blockwise selection, A{string}<ESC> will append {string} to the end of
block on every line of the block.  There is some differing behavior where the
block RHS is not straight, due to different line lengths:

1. Block was created with <C-v>$
In this case the string is appended to the end of each line.
2. Block was created with <C-v>{move-around}
In this case the string is appended to the end of the block on each line,
and whitespace is inserted to pad to the end-of-block column.
See [v_b_A_example](#v_b_A_example).
Note: "I" and "A" behave differently for lines that don't extend into the
selected block.  This was done intentionally, so that you can do it the way
you want.
Works only for adding text to a line, not for deletions.

### <a id="v_b_c" class="section-title" href="#v_b_c">Visual-block change</a>
All selected text in the block will be replaced by the same text string.  When
using "c" the selected text is deleted and Insert mode started.  You can then
enter text (without a line break).  When you hit <Esc>, the same string is
inserted in all previously selected lines.

### <a id="v_b_C" class="section-title" href="#v_b_C">Visual-block Change</a>
Like using "c", but the selection is extended until the end of the line for
all lines.

### <a id="v_b_<" class="section-title" href="#v_b_<">Note:</a>
### <a id="v_b_>" class="section-title" href="#v_b_>">Visual-block Shift</a>
The block is shifted by 'shiftwidth'.  The RHS of the block is irrelevant.  The
LHS of the block determines the point from which to apply a right shift, and
padding includes TABs optimally according to 'ts' and 'et'.  The LHS of the
block determines the point up to which to shift left.
See [v_b_>_example](#v_b_>_example).
See [v_b_<_example](#v_b_<_example).

### <a id="v_b_r" class="section-title" href="#v_b_r">Visual-block Replace</a>
Every screen char in the highlighted region is replaced with the same char, ie
TABs are split and the virtual whitespace is replaced, maintaining screen
layout.
See [v_b_r_example](#v_b_r_example).


## <a id="visual-repeat" class="section-title" href="#visual-repeat">6. Repeating</a> 

When repeating a Visual mode operator, the operator will be applied to the
same amount of text as the last time:
- Linewise Visual mode: The same number of lines.
- Blockwise Visual mode: The same number of lines and columns.
- Normal Visual mode within one line: The same number of characters.
- Normal Visual mode with several lines: The same number of lines, in the
last line the same number of characters as in the last line the last time.
The start of the text is the Cursor position.  If the "$" command was used as
one of the last commands to extend the highlighted text, the repeating will
be applied up to the rightmost column of the longest line.  Any count passed
to the `.` command is not used.


## <a id="visual-examples" class="section-title" href="#visual-examples">7. Examples</a> 

### <a id=":visual_example" class="section-title" href="#:visual_example">Note:</a>
Currently the ":" command works on whole lines only.  When you select part of
a line, doing something like ":!date" will replace the whole line.  If you
want only part of the line to be replaced you will have to make a mapping for
it.  In a future release ":" may work on partial lines.

Here is an example, to replace the selected text with the output of "date":
```
:vmap _a <Esc>`>a<CR><Esc>`<i<CR><Esc>!!date<CR>kJJ

(In the <> notation [<>](#<>), when typing it you should type it literally; you
need to remove the 'B' flag from 'cpoptions')

What this does is:

```
Esc>		stop Visual mode
`>		go to the end of the Visual area
a<CR><Esc>	break the line after the Visual area
`<		jump to the start of the Visual area
i<CR><Esc>	break the line before the Visual area
!!date<CR>	filter the Visual text through date
kJJ		Join the lines back together

### <a id="visual-search" class="section-title" href="#visual-search">Note:</a>
Here is an idea for a mapping that makes it possible to do a search for the
selected text:
```
:vmap X y/<C-R>"<CR>

(In the <> notation [<>](#<>), when typing it you should type it literally; you
need to remove the 'B' flag from 'cpoptions')

Note that special characters (like '.' and '*') will cause problems.

### <a id="blockwise-examples" class="section-title" href="#blockwise-examples">Visual-block Examples</a>
With the following text, I will indicate the commands to produce the block and
the results below.  In all cases, the cursor begins on the 'a' in the first
line of the test text.
The following modeline settings are assumed ":ts=8:sw=4:".

It will be helpful to
:set hls
/<TAB>
where <TAB> is a real TAB.  This helps visualise the operations.

The test text is:

abcdefghijklmnopqrstuvwxyz
abc		defghijklmnopqrstuvwxyz
abcdef  ghi		jklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz

### <a id="v_b_I_example" class="section-title" href="#v_b_I_example">1. fo<C-v>3jISTRING<ESC></a>

abcdefghijklmnSTRINGopqrstuvwxyz
abc	      STRING  defghijklmnopqrstuvwxyz
abcdef  ghi   STRING  	jklmnopqrstuvwxyz
abcdefghijklmnSTRINGopqrstuvwxyz

### <a id="v_b_A_example" class="section-title" href="#v_b_A_example">2. fo<C-v>3j$ASTRING<ESC></a>

abcdefghijklmnopqrstuvwxyzSTRING
abc		defghijklmnopqrstuvwxyzSTRING
abcdef  ghi		jklmnopqrstuvwxyzSTRING
abcdefghijklmnopqrstuvwxyzSTRING

### <a id="v_b_<_example" class="section-title" href="#v_b_<_example">3. fo<C-v>3j3l<..</a>

abcdefghijklmnopqrstuvwxyz
abc	      defghijklmnopqrstuvwxyz
abcdef  ghi   jklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz

### <a id="v_b_>_example" class="section-title" href="#v_b_>_example">4. fo<C-v>3j>..</a>

abcdefghijklmn		  opqrstuvwxyz
abc			    defghijklmnopqrstuvwxyz
abcdef  ghi			    jklmnopqrstuvwxyz
abcdefghijklmn		  opqrstuvwxyz

### <a id="v_b_r_example" class="section-title" href="#v_b_r_example">5. fo<C-v>5l3jrX</a>

abcdefghijklmnXXXXXXuvwxyz
abc	      XXXXXXhijklmnopqrstuvwxyz
abcdef  ghi   XXXXXX    jklmnopqrstuvwxyz
abcdefghijklmnXXXXXXuvwxyz


## <a id="Select Select-mode" class="section-title" href="#Select Select-mode">8. Select Mode</a> 

Select mode looks like Visual mode, but the commands accepted are quite
different.  This resembles the selection mode in Microsoft Windows.
When the 'showmode' option is set, "-- SELECT --" is shown in the last line.

Entering Select mode:
- Using the mouse to select an area, and 'selectmode' contains "mouse".
'mouse' must also contain a flag for the current mode.
- Using a non-printable movement command, with the Shift key pressed, and
'selectmode' contains "key".  For example: <S-Left> and <S-End>.  'keymodel'
must also contain "startsel".
- Using "v", "V" or CTRL-V command, and 'selectmode' contains "cmd".
- Using "gh", "gH" or "g_CTRL-H" command in Normal mode.
### <a id="v_CTRL-G" class="section-title" href="#v_CTRL-G">- From Visual mode, press CTRL-G.</a>

Commands in Select mode:
- Printable characters, <NL> and <CR> cause the selection to be deleted, and
Vim enters Insert mode.  The typed character is inserted.
- Non-printable movement commands, with the Shift key pressed, extend the
selection.  'keymodel' must include "startsel".
- Non-printable movement commands, with the Shift key NOT pressed, stop Select
mode.  'keymodel' must include "stopsel".
- ESC stops Select mode.
- CTRL-O switches to Visual mode for the duration of one command. *v_CTRL-O*
- CTRL-G switches to Visual mode.
- CTRL-R {register} selects the register to be used for the text that is
deleted when typing text.					  *v_CTRL-R*
Unless you specify the "_" (black hole) register, the unnamed register is
also overwritten.

Otherwise, typed characters are handled as in Visual mode.

When using an operator in Select mode, and the selection is linewise, the
selected lines are operated upon, but like in charwise selection.  For
example, when a whole line is deleted, it can later be pasted in the middle of
a line.


### <a id="Select-mode-mapping" class="section-title" href="#Select-mode-mapping">Mappings and menus in Select mode.</a>

When mappings and menus are defined with the [:vmap| or |:vmenu](#:vmap| or |:vmenu) command they
work both in Visual mode and in Select mode.  When these are used in Select
mode Vim automatically switches to Visual mode, so that the same behavior as
in Visual mode is effective.  If you don't want this use [:xmap| or |:smap](#:xmap| or |:smap).

One particular edge case:
```
:vnoremap <C-K> <Esc>
This ends Visual mode when in Visual mode, but in Select mode it does not
work, because Select mode is restored after executing the mapped keys.  You
need to use:
```
:snoremap <C-K> <Esc>

```

Users will expect printable characters to replace the selected area.
Therefore avoid mapping printable characters in Select mode.  Or use
[:sunmap|  after |:map| and |:vmap](#:sunmap|  after |:map| and |:vmap) to remove it for Select mode.

After the mapping or menu finishes, the selection is enabled again and Select
mode entered, unless the selected area was deleted, another buffer became
the current one or the window layout was changed.

When a character was typed that causes the selection to be deleted and Insert
mode started, Insert mode mappings are applied to this character.  This may
cause some confusion, because it means Insert mode mappings apply to a
character typed in Select mode.  Language mappings apply as well.

### <a id="gV v_gV" class="section-title" href="#gV v_gV">Note:</a>
gV			Avoid the automatic reselection of the Visual area
after a Select mode mapping or menu has finished.
Put this just before the end of the mapping or menu.
At least it should be after any operations on the
selection.

### <a id="gh" class="section-title" href="#gh">Note:</a>
gh			Start Select mode, charwise.  This is like "v",
but starts Select mode instead of Visual mode.
Mnemonic: "get highlighted".

### <a id="gH" class="section-title" href="#gH">Note:</a>
gH			Start Select mode, linewise.  This is like "V",
but starts Select mode instead of Visual mode.
Mnemonic: "get Highlighted".

### <a id="g_CTRL-H" class="section-title" href="#g_CTRL-H">Note:</a>
g CTRL-H		Start Select mode, blockwise.  This is like CTRL-V,
but starts Select mode instead of Visual mode.
Mnemonic: "get Highlighted".

vim:tw=78:ts=8:noet:ft=help:norl:

