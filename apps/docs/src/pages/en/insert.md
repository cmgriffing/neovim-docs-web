---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Nvim" class="section-title" href="#Nvim"> Insert Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="Insert Insert-mode" class="section-title" href="#Insert Insert-mode">Note:</a>
### <a id="mode-ins-repl" class="section-title" href="#mode-ins-repl">Inserting and replacing text</a>

Most of this file is about Insert and Replace mode.  At the end are a few
commands for inserting text in other ways.

An overview of the most often used commands can be found in chapter 24 of the
user manual [usr_24.txt](#usr_24.txt).

Also see 'virtualedit', for moving the cursor to positions where there is no
character.  Useful for editing a table.

Type [gO](#gO) to see the table of contents.


## <a id="ins-special-keys" class="section-title" href="#ins-special-keys">1. Special Keys</a> 

In Insert and Replace mode, the following characters have a special meaning;
other characters are inserted directly.  To insert one of these special
characters into the buffer, precede it with CTRL-V.  To insert a <Nul>
character use "CTRL-V CTRL-@" or "CTRL-V 000".  On some systems, you have to
use "CTRL-V 003" to insert a CTRL-C.  Note: When CTRL-V is mapped you can
often use CTRL-Q instead [i_CTRL-Q](#i_CTRL-Q).

If you are working in a special language mode when inserting text, see the
'langmap' option, ['langmap'](#'langmap'), on how to avoid switching this mode on and off
all the time.

char		action	~
-----------------------------------------------------------------------
### <a id="i_CTRL-[ i_<Esc>" class="section-title" href="#i_CTRL-[ i_<Esc>">Note:</a>

```
Esc> or CTRL-[	End insert or Replace mode, go back to Normal mode.  Finish
abbreviation.
Note: If your <Esc> key is hard to hit, try CTRL-[ instead.
### <a id="i_META i_ALT" class="section-title" href="#i_META i_ALT">Note:</a>
ALT ([META](#META)) may act like <Esc> if the chord is not mapped.
For example <A-x> acts like <Esc>x if <A-x> does not have an
insert-mode mapping.
### <a id="i_CTRL-C" class="section-title" href="#i_CTRL-C">Note:</a>
CTRL-C		Quit insert mode, go back to Normal mode.  Do not check for
abbreviations.  Does not trigger the [InsertLeave](#InsertLeave) autocommand
event.

### <a id="i_CTRL-@" class="section-title" href="#i_CTRL-@">Note:</a>
CTRL-@		Insert previously inserted text and stop insert.

### <a id="i_CTRL-A" class="section-title" href="#i_CTRL-A">Note:</a>
CTRL-A		Insert previously inserted text.

### <a id="i_CTRL-H i_<BS> i_BS" class="section-title" href="#i_CTRL-H i_<BS> i_BS">Note:</a>

```
BS> or CTRL-H	Delete the character before the cursor (see [i_backspacing](#i_backspacing)
about joining lines).
### <a id="i_<Del> i_DEL" class="section-title" href="#i_<Del> i_DEL">Note:</a>

```
Del>		Delete the character under the cursor.  If the cursor is at
the end of the line, and the 'backspace' option includes
"eol" (the default), delete the <EOL>; the next line is
appended after the current one.
### <a id="i_CTRL-W" class="section-title" href="#i_CTRL-W">Note:</a>
CTRL-W		Delete the word before the cursor (see [i_backspacing](#i_backspacing) about
joining lines).  See the section "word motions",
[word-motions](#word-motions), for the definition of a word.
### <a id="i_CTRL-W-default" class="section-title" href="#i_CTRL-W-default">Note:</a>
By default, sets a new undo point before deleting.
[default-mappings](#default-mappings)
### <a id="i_CTRL-U" class="section-title" href="#i_CTRL-U">Note:</a>
CTRL-U		Delete all entered characters before the cursor in the current
line.  If there are no newly entered characters and
'backspace' is not empty, delete all characters before the
cursor in the current line.
If C-indenting is enabled the indent will be adjusted if the
line becomes blank.
See [i_backspacing](#i_backspacing) about joining lines.
### <a id="i_CTRL-U-default" class="section-title" href="#i_CTRL-U-default">Note:</a>
By default, sets a new undo point before deleting.
[default-mappings](#default-mappings)
### <a id="i_CTRL-I i_<Tab> i_Tab" class="section-title" href="#i_CTRL-I i_<Tab> i_Tab">Note:</a>

```
Tab> or CTRL-I Insert a tab.  If the 'expandtab' option is on, the
equivalent number of spaces is inserted (use CTRL-V <Tab> to
avoid the expansion; use CTRL-Q <Tab> if CTRL-V is mapped
[i_CTRL-Q](#i_CTRL-Q)).  See also the 'smarttab' option and
[ins-expandtab](#ins-expandtab).
### <a id="i_CTRL-J i_<NL>" class="section-title" href="#i_CTRL-J i_<NL>">Note:</a>

```
NL> or CTRL-J	Begin new line.
### <a id="i_CTRL-M i_<CR>" class="section-title" href="#i_CTRL-M i_<CR>">Note:</a>

```
CR> or CTRL-M	Begin new line.
### <a id="i_CTRL-K" class="section-title" href="#i_CTRL-K">Note:</a>
CTRL-K {char1} [char2]
Enter digraph (see [digraphs](#digraphs)).  When {char1} is a special
key, the code for that key is inserted in <> form.  For
example, the string "<S-Space>" can be entered by typing

```
C-K><S-Space> (two keys).  Neither char is considered for
mapping.

CTRL-N		Find next keyword (see [i_CTRL-N](#i_CTRL-N)).
CTRL-P		Find previous keyword (see [i_CTRL-P](#i_CTRL-P)).

### <a id="i_CTRL-R" class="section-title" href="#i_CTRL-R">CTRL-R {register}</a>
Insert the contents of a register.  Between typing CTRL-R and
the second character, '"' will be displayed to indicate that
you are expected to enter the name of a register.
The text is inserted as if you typed it, but mappings and
abbreviations are not used.  If you have options like
'textwidth', 'formatoptions', or 'autoindent' set, this will
influence what will be inserted.  This is different from what
happens with the "p" command and pasting with the mouse.
Special registers:
'"'	the unnamed register, containing the text of
the last delete or yank
'%'	the current file name
'#'	the alternate file name
### <a id="''	the clipboard contents (X11: primary selection)" class="section-title" href="#''	the clipboard contents (X11: primary selection)">Note:</a>
'+'	the clipboard contents
'/'	the last search pattern
':'	the last command-line
'.'	the last inserted text
'-'	the last small (less than a line) delete
### <a id="i_CTRL-R_=" class="section-title" href="#i_CTRL-R_=">Note:</a>
'='	the expression register: you are prompted to
enter an expression (see [expression](#expression))
Note that 0x80 (128 decimal) is used for
special keys.  E.g., you can use this to move
the cursor up:
CTRL-R ="\<Up>"
Use CTRL-R CTRL-R to insert text literally.
When the result is a [List](#List) the items are used
as lines.  They can have line breaks inside
too.
When the result is a Float it's automatically
converted to a String.
When append() or setline() is invoked the undo
sequence will be broken.
See [registers](#registers) about registers.

### <a id="i_CTRL-R_CTRL-R" class="section-title" href="#i_CTRL-R_CTRL-R">CTRL-R CTRL-R {register}</a>
Insert the contents of a register.  Works like using a single
CTRL-R, but the text is inserted literally, not as if typed.
This differs when the register contains characters like <BS>.
Example, where register a contains "ab^Hc":
```
CTRL-R a		results in "ac".
CTRL-R CTRL-R a		results in "ab^Hc".

```
		Options 'textwidth', 'formatoptions', etc. still apply.  If
you also want to avoid these, use CTRL-R CTRL-O, see below.
The '.' register (last inserted text) is still inserted as
typed.
After this command, the '.' register contains the text from
the register as if it was inserted by typing it.

### <a id="i_CTRL-R_CTRL-O" class="section-title" href="#i_CTRL-R_CTRL-O">CTRL-R CTRL-O {register}</a>
Insert the contents of a register literally and don't
auto-indent.  Does the same as pasting with the mouse
[<MiddleMouse>](#<MiddleMouse>). When the register is linewise this will
insert the text above the current line, like with `P`.
Does not replace characters!
The '.' register (last inserted text) is still inserted as
typed.
After this command, the '.' register contains the command
typed and not the text. I.e., the literals "^R^O" and not the
text from the register.

### <a id="i_CTRL-R_CTRL-P" class="section-title" href="#i_CTRL-R_CTRL-P">CTRL-R CTRL-P {register}</a>
Insert the contents of a register literally and fix the
indent, like [[<MiddleMouse>](#[<MiddleMouse>).
Does not replace characters!
The '.' register (last inserted text) is still inserted as
typed.
After this command, the '.' register contains the command
typed and not the text. I.e., the literals "^R^P" and not the
text from the register.

### <a id="i_CTRL-T" class="section-title" href="#i_CTRL-T">Note:</a>
CTRL-T		Insert one shiftwidth of indent at the start of the current
line.  The indent is always rounded to a 'shiftwidth'.
### <a id="i_CTRL-D" class="section-title" href="#i_CTRL-D">Note:</a>
CTRL-D		Delete one shiftwidth of indent at the start of the current
line.  The indent is always rounded to a 'shiftwidth'.

### <a id="i_0_CTRL-D" class="section-title" href="#i_0_CTRL-D">Note:</a>
0 CTRL-D	Delete all indent in the current line.

### <a id="i_^_CTRL-D" class="section-title" href="#i_^_CTRL-D">Note:</a>
^ CTRL-D	Delete all indent in the current line.  The indent is
restored in the next line.  This is useful when inserting a
label.

### <a id="i_CTRL-V" class="section-title" href="#i_CTRL-V">Note:</a>
CTRL-V		Insert next non-digit literally.  It's also possible to enter
the decimal, octal or hexadecimal value of a character
[i_CTRL-V_digit](#i_CTRL-V_digit).
The characters typed right after CTRL-V are not considered for
mapping.
For special keys, the CTRL modifier may be included into the
key to produce a control character.  If there is no control
character for the key then its [key-notation](#key-notation) is inserted.
Note: When CTRL-V is mapped (e.g., to paste text) you can
often use CTRL-Q instead [i_CTRL-Q](#i_CTRL-Q).

### <a id="i_CTRL-Q" class="section-title" href="#i_CTRL-Q">Note:</a>
CTRL-Q		Same as CTRL-V.
Note: Some terminal connections may eat CTRL-Q, it doesn't
work then.  It does work in the GUI.

### <a id="i_CTRL-SHIFT-V i_CTRL-SHIFT-Q" class="section-title" href="#i_CTRL-SHIFT-V i_CTRL-SHIFT-Q">CTRL-SHIFT-V</a>
CTRL-SHIFT-Q	Works just like CTRL-V, but do not try to include the CTRL
modifier into the key.

CTRL-X		Enter CTRL-X mode.  This is a sub-mode where commands can
be given to complete words or scroll the window.  See
[i_CTRL-X| and |ins-completion](#i_CTRL-X| and |ins-completion).

### <a id="i_CTRL-E" class="section-title" href="#i_CTRL-E">Note:</a>
CTRL-E		Insert the character which is below the cursor.
### <a id="i_CTRL-Y" class="section-title" href="#i_CTRL-Y">Note:</a>
CTRL-Y		Insert the character which is above the cursor.
Note that for CTRL-E and CTRL-Y 'textwidth' is not used, to be
able to copy characters from a long line.

### <a id="i_CTRL-_" class="section-title" href="#i_CTRL-_">Note:</a>
CTRL-_		Switch between languages, as follows:
-  When in a rightleft window, revins and nohkmap are toggled,
since English will likely be inserted in this case.
-  When in a norightleft window, revins and hkmap are toggled,
since Hebrew will likely be inserted in this case.

CTRL-_ moves the cursor to the end of the typed text.

This command is only available when the 'allowrevins' option
is set.
Please refer to [rileft.txt](#rileft.txt) for more information about
right-to-left mode.

### <a id="i_CTRL-^" class="section-title" href="#i_CTRL-^">Note:</a>
CTRL-^		Toggle the use of typing language characters.
When language [:lmap](#:lmap) mappings are defined:
- If 'iminsert' is 1 (langmap mappings used) it becomes 0 (no
langmap mappings used).
- If 'iminsert' has another value it becomes 1, thus langmap
mappings are enabled.
When no language mappings are defined:
- If 'iminsert' is 2 (Input Method used) it becomes 0 (no
Input Method used).
- If 'iminsert' has another value it becomes 2, thus the Input
Method is enabled.
When set to 1, the value of the "b:keymap_name" variable, the
'keymap' option or "<lang>" appears in the status line.
The language mappings are normally used to type characters
that are different from what the keyboard produces.  The
'keymap' option can be used to install a whole number of them.

### <a id="i_CTRL-]" class="section-title" href="#i_CTRL-]">Note:</a>
CTRL-]		Trigger abbreviation, without inserting a character.

### <a id="i_<Insert>" class="section-title" href="#i_<Insert>">Note:</a>

```
Insert>	Toggle between Insert and Replace mode.
-----------------------------------------------------------------------

### <a id="i_backspacing" class="section-title" href="#i_backspacing">Note:</a>
The effect of the <BS>, CTRL-W, and CTRL-U depend on the 'backspace' option
(unless 'revins' is set).  This is a comma-separated list of items:

item	    action ~
indent	    allow backspacing over autoindent
eol	    allow backspacing over end-of-line (join lines)
start	    allow backspacing over the start position of insert; CTRL-W and
CTRL-U stop once at the start position

When 'backspace' is empty, Vi compatible backspacing is used.  You cannot
backspace over autoindent, before column 1 or before where insert started.

For backwards compatibility the values "0", "1", "2" and "3" are also allowed,
see ['backspace'](#'backspace').

If the 'backspace' option does contain "eol" and the cursor is in column 1
when one of the three keys is used, the current line is joined with the
previous line.  This effectively deletes the <EOL> in front of the cursor.

### <a id="i_CTRL-V_digit" class="section-title" href="#i_CTRL-V_digit">Note:</a>
With CTRL-V the decimal, octal or hexadecimal value of a character can be
entered directly.  This way you can enter any character, except a line break
(<NL>, value 10).  There are five ways to enter the character value:

first char	mode	     max nr of chars   max value ~
(none)		decimal		   3		255
o or O		octal		   3		377	 (255)
x or X		hexadecimal	   2		ff	 (255)
u		hexadecimal	   4		ffff	 (65535)
U		hexadecimal	   8		7fffffff (2147483647)

Normally you would type the maximum number of characters.  Thus to enter a
space (value 32) you would type <C-V>032.  You can omit the leading zero, in
which case the character typed after the number must be a non-digit.  This
happens for the other modes as well: As soon as you type a character that is
invalid for the mode, the value before it will be used and the "invalid"
character is dealt with in the normal way.

If you enter a value of 10, it will end up in the file as a 0.  The 10 is a

```
NL>, which is used internally to represent the <Nul> character.  When writing
the buffer to a file, the <NL> character is translated into <Nul>.  The <NL>
character is written at the end of each line.  Thus if you want to insert a

```
NL> character in a file you will have to make a line break.
Also see 'fileformat'.

### <a id="i_CTRL-X insert_expand" class="section-title" href="#i_CTRL-X insert_expand">Note:</a>
CTRL-X enters a sub-mode where several commands can be used.  Most of these
commands do keyword completion; see [ins-completion](#ins-completion).

Two commands can be used to scroll the window up or down, without exiting
insert mode:

### <a id="i_CTRL-X_CTRL-E" class="section-title" href="#i_CTRL-X_CTRL-E">Note:</a>
CTRL-X CTRL-E		scroll window one line up.
When doing completion look here: [complete_CTRL-E](#complete_CTRL-E)

### <a id="i_CTRL-X_CTRL-Y" class="section-title" href="#i_CTRL-X_CTRL-Y">Note:</a>
CTRL-X CTRL-Y		scroll window one line down.
When doing completion look here: [complete_CTRL-Y](#complete_CTRL-Y)

After CTRL-X is pressed, each CTRL-E (CTRL-Y) scrolls the window up (down) by
one line unless that would cause the cursor to move from its current position
in the file.  As soon as another key is pressed, CTRL-X mode is exited and
that key is interpreted as in Insert mode.


## <a id="ins-special-special" class="section-title" href="#ins-special-special">2. Special Special Keys</a> 

The following keys are special.  They stop the current insert, do something,
and then restart insertion.  This means you can do something without getting
out of Insert mode.  This is very handy if you prefer to use the Insert mode
all the time, just like editors that don't have a separate Normal mode. You
can use CTRL-O if you want to map a function key to a command.

The changes (inserted or deleted characters) before and after these keys can
be undone separately.  Only the last change can be redone and always behaves
like an "i" command.

char		action	~
-----------------------------------------------------------------------

```
Up>		cursor one line up			     *i_<Up>*

```
Down>		cursor one line down			     *i_<Down>*
### <a id="i_CTRL-G_<Up>" class="section-title" href="#i_CTRL-G_<Up>">CTRL-G <Up>	cursor one line up, insert start column</a>
### <a id="i_CTRL-G_k" class="section-title" href="#i_CTRL-G_k">CTRL-G k	cursor one line up, insert start column</a>
### <a id="i_CTRL-G_CTRL-K" class="section-title" href="#i_CTRL-G_CTRL-K">CTRL-G CTRL-K	cursor one line up, insert start column</a>
### <a id="i_CTRL-G_<Down>" class="section-title" href="#i_CTRL-G_<Down>">CTRL-G <Down>	cursor one line down, insert start column</a>
### <a id="i_CTRL-G_j" class="section-title" href="#i_CTRL-G_j">CTRL-G j	cursor one line down, insert start column</a>
### <a id="i_CTRL-G_CTRL-J" class="section-title" href="#i_CTRL-G_CTRL-J">CTRL-G CTRL-J	cursor one line down, insert start column</a>

```
Left>		cursor one character left		     *i_<Left>*

```
Right>		cursor one character right		     *i_<Right>*
### <a id="i_<S-Left>" class="section-title" href="#i_<S-Left>"><S-Left>	cursor one word back (like "b" command)</a>
### <a id="i_<C-Left>" class="section-title" href="#i_<C-Left>"><C-Left>	cursor one word back (like "b" command)</a>
### <a id="i_<S-Right>" class="section-title" href="#i_<S-Right>"><S-Right>	cursor one word forward (like "w" command)</a>
### <a id="i_<C-Right>" class="section-title" href="#i_<C-Right>"><C-Right>	cursor one word forward (like "w" command)</a>

```
Home>		cursor to first char in the line	     *i_<Home>*

```
End>		cursor to after last char in the line	     *i_<End>*
### <a id="i_<C-Home>" class="section-title" href="#i_<C-Home>"><C-Home>	cursor to first char in the file</a>

```
C-End>		cursor to after last char in the file	     *i_<C-End>*
### <a id="i_<LeftMouse>" class="section-title" href="#i_<LeftMouse>"><LeftMouse>	cursor to position of mouse click</a>

```
S-Up>		move window one page up			     *i_<S-Up>*
### <a id="i_<PageUp>" class="section-title" href="#i_<PageUp>"><PageUp>	move window one page up</a>
### <a id="i_<S-Down>" class="section-title" href="#i_<S-Down>"><S-Down>	move window one page down</a>
### <a id="i_<PageDown>" class="section-title" href="#i_<PageDown>"><PageDown>	move window one page down</a>
### <a id="move window three lines down	i_<ScrollWheelDown>" class="section-title" href="#move window three lines down	i_<ScrollWheelDown>"><ScrollWheelDown></a>

```
S-ScrollWheelDown>  move window one page down		*i_<S-ScrollWheelDown>*

```
ScrollWheelUp>      move window three lines up		*i_<ScrollWheelUp>*

```
S-ScrollWheelUp>    move window one page up		*i_<S-ScrollWheelUp>*
### <a id="move window six columns left	i_<ScrollWheelLeft>" class="section-title" href="#move window six columns left	i_<ScrollWheelLeft>"><ScrollWheelLeft></a>

```
S-ScrollWheelLeft>  move window one page left		*i_<S-ScrollWheelLeft>*
### <a id="move window six columns right	i_<ScrollWheelRight>" class="section-title" href="#move window six columns right	i_<ScrollWheelRight>"><ScrollWheelRight></a>
### <a id="i_<S-ScrollWheelRight>" class="section-title" href="#i_<S-ScrollWheelRight>"><S-ScrollWheelRight> move window one page right</a>
CTRL-O		execute one command, return to Insert mode   *i_CTRL-O*
### <a id="i_CTRL-\_CTRL-O" class="section-title" href="#i_CTRL-\_CTRL-O">CTRL-\ CTRL-O	like CTRL-O but don't move the cursor</a>
### <a id="i_CTRL-G_u" class="section-title" href="#i_CTRL-G_u">CTRL-G u	close undo sequence, start new change</a>
### <a id="i_CTRL-G_U" class="section-title" href="#i_CTRL-G_U">CTRL-G U	don't start a new undo block with the next</a>
left/right cursor movement, if the cursor
stays within the same line
-----------------------------------------------------------------------

The CTRL-O command sometimes has a side effect: If the cursor was beyond the
end of the line, it will be put on the last character in the line.  In
mappings it's often better to use <Esc> (first put an "x" in the text, <Esc>
will then always put the cursor on it).  Or use CTRL-\ CTRL-O, but then
beware of the cursor possibly being beyond the end of the line.  Note that the
command following CTRL-\ CTRL-O can still move the cursor, it is not restored
to its original position.

The CTRL-O command takes you to Normal mode.  If you then use a command enter
Insert mode again it normally doesn't nest.  Thus when typing "a<C-O>a" and
then <Esc> takes you back to Normal mode, you do not need to type <Esc> twice.
An exception is when not typing the command, e.g. when executing a mapping or
sourcing a script.  This makes mappings work that briefly switch to Insert
mode.

The shifted cursor keys are not available on all terminals.

Another side effect is that a count specified before the "i" or "a" command is
ignored.  That is because repeating the effect of the command after CTRL-O is
too complicated.

An example for using CTRL-G u:
```

:inoremap <C-H> <C-G>u<C-H>

This redefines the backspace key to start a new undo sequence.  You can now
undo the effect of the backspace key, without changing what you typed before
that, with CTRL-O u.  Another example:
```

:inoremap <CR> <C-]><C-G>u<CR>

This starts a new undo block at each line break.  It also expands
abbreviations before this.

An example for using CTRL-G U:
```

inoremap <Left>  <C-G>U<Left>
inoremap <Right> <C-G>U<Right>
inoremap <expr> <Home> col('.') == match(getline('.'), '\S') + 1 ?
\ repeat('<C-G>U<Left>', col('.') - 1) :
\ (col('.') < match(getline('.'), '\S') ?
\     repeat('<C-G>U<Right>', match(getline('.'), '\S') + 0) :
\     repeat('<C-G>U<Left>', col('.') - 1 - match(getline('.'), '\S')))
inoremap <expr> <End> repeat('<C-G>U<Right>', col('$') - col('.'))
inoremap ( ()<C-G>U<Left>

This makes it possible to use the cursor keys in Insert mode, without starting
a new undo block and therefore using [.](#.) (redo) will work as expected.  Also
entering a text like (with the "(" mapping from above):

Lorem ipsum (dolor

will be repeatable by using [.](#.) to the expected

Lorem ipsum (dolor)


Using CTRL-O splits undo: the text typed before and after it is undone
separately.  If you want to avoid this (e.g., in a mapping) you might be able
to use CTRL-R = [i_CTRL-R](#i_CTRL-R).  E.g., to call a function:
```
:imap <F2> <C-R>=MyFunc()<CR>

When the 'whichwrap' option is set appropriately, the <Left> and <Right>
keys on the first/last character in the line make the cursor wrap to the
previous/next line.

The CTRL-G j and CTRL-G k commands can be used to insert text in front of a
column.  Example:
```
int i;
int j;
Position the cursor on the first "int", type "istatic <C-G>j       ".  The
result is:
```
static int i;
int j;
When inserting the same text in front of the column in every line, use the
Visual blockwise command "I" [v_b_I](#v_b_I).


## <a id="ins-textwidth" class="section-title" href="#ins-textwidth">3. 'textwidth' and 'wrapmargin' Options</a> 

The 'textwidth' option can be used to automatically break a line before it
gets too long.  Set the 'textwidth' option to the desired maximum line
length.  If you then type more characters (not spaces or tabs), the
last word will be put on a new line (unless it is the only word on the
line).  If you set 'textwidth' to 0, this feature is disabled.

The 'wrapmargin' option does almost the same.  The difference is that
'textwidth' has a fixed width while 'wrapmargin' depends on the width of the
screen.  When using 'wrapmargin' this is equal to using 'textwidth' with a
value equal to (columns - 'wrapmargin'), where columns is the width of the
screen.

When 'textwidth' and 'wrapmargin' are both set, 'textwidth' is used.

If you don't really want to break the line, but view the line wrapped at a
convenient place, see the 'linebreak' option.

The line is only broken automatically when using Insert mode, or when
appending to a line.  When in replace mode and the line length is not
changed, the line will not be broken.

Long lines are broken if you enter a non-white character after the margin.
The situations where a line will be broken can be restricted by adding
characters to the 'formatoptions' option:
"l"  Only break a line if it was not longer than 'textwidth' when the insert
started.
"v"  Only break at a white character that has been entered during the
current insert command.  This is mostly Vi-compatible.
"lv" Only break if the line was not longer than 'textwidth' when the insert
started and only at a white character that has been entered during the
current insert command.  Only differs from "l" when entering non-white
characters while crossing the 'textwidth' boundary.

Normally an internal function will be used to decide where to break the line.
If you want to do it in a different way set the 'formatexpr' option to an
expression that will take care of the line break.

If you want to format a block of text, you can use the "gq" operator.  Type
"gq" and a movement command to move the cursor to the end of the block.  In
many cases, the command "gq}" will do what you want (format until the end of
paragraph).  Alternatively, you can use "gqap", which will format the whole
paragraph, no matter where the cursor currently is.  Or you can use Visual
mode: hit "v", move to the end of the block, and type "gq".  See also [gq](#gq).


## <a id="" class="section-title" href="#">4. 'expandtab', 'smarttab' and 'softtabstop' Options	*Ins-Expandtab*</a> 

If the 'expandtab' option is on, spaces will be used to fill the amount of
whitespace of the tab.  If you want to enter a real <Tab>, type CTRL-V first
(use CTRL-Q when CTRL-V is mapped [i_CTRL-Q](#i_CTRL-Q)).
The 'expandtab' option is off by default.  Note that in Replace mode, a single
character is replaced with several spaces.  The result of this is that the
number of characters in the line increases.  Backspacing will delete one
space at a time.  The original character will be put back for only one space
that you backspace over (the last one).

### <a id="ins-smarttab" class="section-title" href="#ins-smarttab">Note:</a>
When the 'smarttab' option is on, a <Tab> inserts 'shiftwidth' positions at
the beginning of a line and 'tabstop' positions in other places.  This means
that often spaces instead of a <Tab> character are inserted.  When 'smarttab'
is off, a <Tab> always inserts 'tabstop' positions, and 'shiftwidth' is only
used for ">>" and the like.

### <a id="ins-softtabstop" class="section-title" href="#ins-softtabstop">Note:</a>
When the 'softtabstop' option is non-zero, a <Tab> inserts 'softtabstop'
positions, and a <BS> used to delete white space, will delete 'softtabstop'
positions.  This feels like 'tabstop' was set to 'softtabstop', but a real

```
Tab> character still takes 'tabstop' positions, so your file will still look
correct when used by other applications.

If 'softtabstop' is non-zero, a <BS> will try to delete as much white space to
move to the previous 'softtabstop' position, except when the previously
inserted character is a space, then it will only delete the character before
the cursor.  Otherwise you cannot always delete a single character before the
cursor.  You will have to delete 'softtabstop' characters first, and then type
extra spaces to get where you want to be.


## <a id="Replace Replace-mode mode-replace" class="section-title" href="#Replace Replace-mode mode-replace">5. Replace Mode</a> 

Enter Replace mode with the "R" command in normal mode.

In Replace mode, one character in the line is deleted for every character you
type.  If there is no character to delete (at the end of the line), the
typed character is appended (as in Insert mode).  Thus the number of
characters in a line stays the same until you get to the end of the line.
If a <NL> is typed, a line break is inserted and no character is deleted.

Be careful with <Tab> characters.  If you type a normal printing character in
its place, the number of characters is still the same, but the number of
columns will become smaller.

If you delete characters in Replace mode (with <BS>, CTRL-W, or CTRL-U), what
happens is that you delete the changes.  The characters that were replaced
are restored.  If you had typed past the existing text, the characters you
added are deleted.  This is effectively a character-at-a-time undo.

If the 'expandtab' option is on, a <Tab> will replace one character with
several spaces.  The result of this is that the number of characters in the
line increases.  Backspacing will delete one space at a time.  The original
character will be put back for only one space that you backspace over (the
last one).


## <a id="vreplace-mode Virtual-Replace-mode" class="section-title" href="#vreplace-mode Virtual-Replace-mode">6. Virtual Replace Mode</a> 

Enter Virtual Replace mode with the "gR" command in normal mode.

Virtual Replace mode is similar to Replace mode, but instead of replacing
actual characters in the file, you are replacing screen real estate, so that
characters further on in the file never appear to move.

So if you type a <Tab> it may replace several normal characters, and if you
type a letter on top of a <Tab> it may not replace anything at all, since the

```
Tab> will still line up to the same place as before.

Typing a <NL> still doesn't cause characters later in the file to appear to
move.  The rest of the current line will be replaced by the <NL> (that is,
they are deleted), and replacing continues on the next line.  A new line is
NOT inserted unless you go past the end of the file.

Interesting effects are seen when using CTRL-T and CTRL-D.  The characters
before the cursor are shifted sideways as normal, but characters later in the
line still remain still.  CTRL-T will hide some of the old line under the
shifted characters, but CTRL-D will reveal them again.

As with Replace mode, using <BS> etc will bring back the characters that were
replaced.  This still works in conjunction with 'smartindent', CTRL-T and
CTRL-D, 'expandtab', 'smarttab', 'softtabstop', etc.

In 'list' mode, Virtual Replace mode acts as if it was not in 'list' mode,
unless "L" is in 'cpoptions'.

Note that the only situations for which characters beyond the cursor should
appear to move are in List mode ['list'](#'list'), and occasionally when 'wrap' is set
(and the line changes length to become shorter or wider than the width of the
screen).  In other cases spaces may be inserted to avoid following characters
to move.

This mode is very useful for editing <Tab> separated columns in tables, for
entering new data while keeping all the columns aligned.


## <a id="ins-completion" class="section-title" href="#ins-completion">7. Insert Mode Completion</a> 

In Insert and Replace mode, there are several commands to complete part of a
keyword or line that has been typed.  This is useful if you are using
complicated keywords (e.g., function names with capitals and underscores).

Completion can be done for:

1. Whole lines						[i_CTRL-X_CTRL-L](#i_CTRL-X_CTRL-L)
2. keywords in the current file				[i_CTRL-X_CTRL-N](#i_CTRL-X_CTRL-N)
3. keywords in 'dictionary'				[i_CTRL-X_CTRL-K](#i_CTRL-X_CTRL-K)
4. keywords in 'thesaurus', thesaurus-style		[i_CTRL-X_CTRL-T](#i_CTRL-X_CTRL-T)
5. keywords in the current and included files		[i_CTRL-X_CTRL-I](#i_CTRL-X_CTRL-I)
6. tags							[i_CTRL-X_CTRL-]](#i_CTRL-X_CTRL-])
7. file names						[i_CTRL-X_CTRL-F](#i_CTRL-X_CTRL-F)
8. definitions or macros				[i_CTRL-X_CTRL-D](#i_CTRL-X_CTRL-D)
9. Vim command-line					[i_CTRL-X_CTRL-V](#i_CTRL-X_CTRL-V)
10. User defined completion				[i_CTRL-X_CTRL-U](#i_CTRL-X_CTRL-U)
11. omni completion					[i_CTRL-X_CTRL-O](#i_CTRL-X_CTRL-O)
12. Spelling suggestions				[i_CTRL-X_s](#i_CTRL-X_s)
13. keywords in 'complete'				[i_CTRL-N| |i_CTRL-P](#i_CTRL-N| |i_CTRL-P)

Additionally, [i_CTRL-X_CTRL-Z](#i_CTRL-X_CTRL-Z) stops completion without changing the text.

All these, except CTRL-N and CTRL-P, are done in CTRL-X mode.  This is a
sub-mode of Insert and Replace modes.  You enter CTRL-X mode by typing CTRL-X
and one of the CTRL-X commands.  You exit CTRL-X mode by typing a key that is
not a valid CTRL-X mode command.  Valid keys are the CTRL-X command itself,
CTRL-N (next), and CTRL-P (previous).

To get the current completion information, [complete_info()](#complete_info()) can be used.
Also see the 'infercase' option if you want to adjust the case of the match.

### <a id="complete_CTRL-E" class="section-title" href="#complete_CTRL-E">Note:</a>
When completion is active you can use CTRL-E to stop it and go back to the
originally typed text.  The CTRL-E will not be inserted.

### <a id="complete_CTRL-Y" class="section-title" href="#complete_CTRL-Y">Note:</a>
When the popup menu is displayed you can use CTRL-Y to stop completion and
accept the currently selected entry.  The CTRL-Y is not inserted.  Typing a
space, Enter, or some other unprintable character will leave completion mode
and insert that typed character.

When the popup menu is displayed there are a few more special keys, see
[popupmenu-keys](#popupmenu-keys).

Note: The keys that are valid in CTRL-X mode are not mapped.  This allows for
`:map <C-F> <C-X><C-F>` to work.  The key that ends CTRL-X mode (any key that
is not a valid CTRL-X mode command) is mapped. Also, when doing completion
with 'complete' mappings apply as usual.

### <a id="E565" class="section-title" href="#E565">Note:</a>
Note: While completion is active Insert mode can't be used recursively and
buffer text cannot be changed.  Mappings that somehow invoke ":normal i.."
will generate an E565 error.

The following mappings are suggested to make typing the completion commands
a bit easier (although they will hide other commands):
```
:inoremap <C-]> <C-X><C-]>
:inoremap <C-F> <C-X><C-F>
:inoremap <C-D> <C-X><C-D>
:inoremap <C-L> <C-X><C-L>

As a special case, typing CTRL-R to perform register insertion (see
[i_CTRL-R](#i_CTRL-R)) will not exit CTRL-X mode.  This is primarily to allow the use of
the '=' register to call some function to determine the next operation.  If
the contents of the register (or result of the '=' register evaluation) are
not valid CTRL-X mode keys, then CTRL-X mode will be exited as if those keys
had been typed.

For example, the following will map <Tab> to either actually insert a <Tab> if
the current line is currently only whitespace, or start/continue a CTRL-N
completion operation:
```

function! CleverTab()
### <a id="if strpart( getline('.'), 0, col('.')-1 ) =~ '^\s$'" class="section-title" href="#if strpart( getline('.'), 0, col('.')-1 ) =~ '^\s$'">Note:</a>
return "\<Tab>"
else
return "\<C-N>"
endif
endfunction
inoremap <Tab> <C-R>=CleverTab()<CR>



### <a id="compl-whole-line" class="section-title" href="#compl-whole-line">Completing whole lines</a>

### <a id="i_CTRL-X_CTRL-L" class="section-title" href="#i_CTRL-X_CTRL-L">Note:</a>
CTRL-X CTRL-L		Search backwards for a line that starts with the
same characters as those in the current line before
the cursor.  Indent is ignored.  The matching line is
inserted in front of the cursor.
The 'complete' option is used to decide which buffers
are searched for a match.  Both loaded and unloaded
buffers are used.
CTRL-L	or
CTRL-P		Search backwards for next matching line.  This line
replaces the previous matching line.

CTRL-N		Search forward for next matching line.  This line
replaces the previous matching line.

CTRL-X CTRL-L	After expanding a line you can additionally get the
line next to it by typing CTRL-X CTRL-L again, unless
a double CTRL-X is used.  Only works for loaded
buffers.

### <a id="compl-current" class="section-title" href="#compl-current">Completing keywords in current file</a>

### <a id="i_CTRL-X_CTRL-P" class="section-title" href="#i_CTRL-X_CTRL-P">Note:</a>
### <a id="i_CTRL-X_CTRL-N" class="section-title" href="#i_CTRL-X_CTRL-N">Note:</a>
CTRL-X CTRL-N		Search forwards for words that start with the keyword
in front of the cursor.  The found keyword is inserted
in front of the cursor.

CTRL-X CTRL-P		Search backwards for words that start with the keyword
in front of the cursor.  The found keyword is inserted
in front of the cursor.

CTRL-N		Search forward for next matching keyword.  This
keyword replaces the previous matching keyword.

CTRL-P		Search backwards for next matching keyword.  This
keyword replaces the previous matching keyword.

CTRL-X CTRL-N or
CTRL-X CTRL-P	Further use of CTRL-X CTRL-N or CTRL-X CTRL-P will
copy the words following the previous expansion in
other contexts unless a double CTRL-X is used.

If there is a keyword in front of the cursor (a name made out of alphabetic
characters and characters in 'iskeyword'), it is used as the search pattern,
with "\<" prepended (meaning: start of a word).  Otherwise "\<\k\k" is used
as search pattern (start of any keyword of at least two characters).

In Replace mode, the number of characters that are replaced depends on the
length of the matched string.  This works like typing the characters of the
matched string in Replace mode.

If there is not a valid keyword character before the cursor, any keyword of
at least two characters is matched.
e.g., to get:
printf("(%g, %g, %g)", vector[0], vector[1], vector[2]);
just type:
printf("(%g, %g, %g)", vector[0], ^P[1], ^P[2]);

The search wraps around the end of the file, the value of 'wrapscan' is not
used here.

Multiple repeats of the same completion are skipped; thus a different match
will be inserted at each CTRL-N and CTRL-P (unless there is only one
matching keyword).

Single character matches are never included, as they usually just get in
the way of what you were really after.
e.g., to get:
printf("name = %s\n", name);
just type:
printf("name = %s\n", n^P);
or even:
printf("name = %s\n", ^P);
The 'n' in '\n' is skipped.

After expanding a word, you can use CTRL-X CTRL-P or CTRL-X CTRL-N to get the
word following the expansion in other contexts.  These sequences search for
the text just expanded and further expand by getting an extra word.  This is
useful if you need to repeat a sequence of complicated words.  Although CTRL-P
and CTRL-N look just for strings of at least two characters, CTRL-X CTRL-P and
CTRL-X CTRL-N can be used to expand words of just one character.
e.g., to get:
M&eacute;xico
you can type:
M^N^P^X^P^X^P
CTRL-N starts the expansion and then CTRL-P takes back the single character
"M", the next two CTRL-X CTRL-P's get the words "&eacute" and ";xico".

If the previous expansion was split, because it got longer than 'textwidth',
then just the text in the current line will be used.

If the match found is at the end of a line, then the first word in the next
line will be inserted and the message "Word from other line" displayed, if
this word is accepted the next CTRL-X CTRL-P or CTRL-X CTRL-N will search
for those lines starting with this word.


### <a id="compl-dictionary" class="section-title" href="#compl-dictionary">Completing keywords in 'dictionary'</a>

### <a id="i_CTRL-X_CTRL-K" class="section-title" href="#i_CTRL-X_CTRL-K">Note:</a>
CTRL-X CTRL-K		Search the files given with the 'dictionary' option
for words that start with the keyword in front of the
cursor.  This is like CTRL-N, but only the dictionary
files are searched, not the current file.  The found
keyword is inserted in front of the cursor.  This
could potentially be pretty slow, since all matches
are found before the first match is used.  By default,
the 'dictionary' option is empty.
For suggestions where to find a list of words, see the
'dictionary' option.
'ignorecase', 'smartcase' and 'infercase' apply.

CTRL-K	or
CTRL-N		Search forward for next matching keyword.  This
keyword replaces the previous matching keyword.

CTRL-P		Search backwards for next matching keyword.  This
keyword replaces the previous matching keyword.


### <a id="compl-thesaurus" class="section-title" href="#compl-thesaurus">Completing words in 'thesaurus'</a>

### <a id="i_CTRL-X_CTRL-T" class="section-title" href="#i_CTRL-X_CTRL-T">Note:</a>
CTRL-X CTRL-T		Works as CTRL-X CTRL-K, but in a special way.  It uses
the 'thesaurus' option instead of 'dictionary'.  If a
match is found in the thesaurus file, all the
remaining words on the same line are included as
matches, even though they don't complete the word.
Thus a word can be completely replaced.

CTRL-T	or
CTRL-N		Search forward for next matching keyword.  This
keyword replaces the previous matching keyword.

CTRL-P		Search backwards for next matching keyword.  This
keyword replaces the previous matching keyword.

In the file used by the 'thesaurus' option each line in the file should
contain words with similar meaning, separated by non-keyword characters (white
space is preferred).  Maximum line length is 510 bytes.

For an example, imagine the 'thesaurus' file has a line like this:
```
angry furious mad enraged
Placing the cursor after the letters "ang" and typing CTRL-X CTRL-T would
complete the word "angry"; subsequent presses would change the word to
"furious", "mad" etc.

Other uses include translation between two languages, or grouping API
functions by keyword.

An English word list was added to this github issue:
https://github.com/vim/vim/issues/629#issuecomment-443293282
Unpack thesaurus_pkg.zip, put the thesaurus.txt file somewhere, e.g.
~/.vim/thesaurus/english.txt, and the 'thesaurus' option to this file name.


### <a id="compl-thesaurusfunc" class="section-title" href="#compl-thesaurusfunc">Completing keywords with 'thesaurusfunc'</a>

If the 'thesaurusfunc' option is set, then the user specified function is
invoked to get the list of completion matches and the 'thesaurus' option is
not used. See [complete-functions](#complete-functions) for an explanation of how the function is
invoked and what it should return.

Here is an example that uses the "aiksaurus" command (provided by Magnus
Groß):
```

func Thesaur(findstart, base)
if a:findstart
let line = getline('.')
let start = col('.') - 1
while start > 0 && line[start - 1] =~ '\a'
let start -= 1
endwhile
return start
else
let res = []
let h = ''
for l in split(system('aiksaurus ' .. shellescape(a:base)), '\n')
if l[:3] == '=== '
### <a id="let h = substitute(l[4:], ' =$', '', '')" class="section-title" href="#let h = substitute(l[4:], ' =$', '', '')">Note:</a>
elseif l[0] =~ '\a'
call extend(res, map(split(l, ', '), {_, val -> {'word': val, 'menu': '('.h.')'}}))
endif
endfor
return res
endif
endfunc

set thesaurusfunc=Thesaur


Completing keywords in the current and included files	*compl-keyword*

The 'include' option is used to specify a line that contains an include file
name.  The 'path' option is used to search for include files.

### <a id="i_CTRL-X_CTRL-I" class="section-title" href="#i_CTRL-X_CTRL-I">Note:</a>
CTRL-X CTRL-I		Search for the first keyword in the current and
included files that starts with the same characters
as those before the cursor.  The matched keyword is
inserted in front of the cursor.

CTRL-N		Search forwards for next matching keyword.  This
keyword replaces the previous matching keyword.
Note: CTRL-I is the same as <Tab>, which is likely to
be typed after a successful completion, therefore
CTRL-I is not used for searching for the next match.

CTRL-P		Search backward for previous matching keyword.  This
keyword replaces the previous matching keyword.

CTRL-X CTRL-I	Further use of CTRL-X CTRL-I will copy the words
following the previous expansion in other contexts
unless a double CTRL-X is used.

### <a id="compl-tag" class="section-title" href="#compl-tag">Completing tags</a>
### <a id="i_CTRL-X_CTRL-]" class="section-title" href="#i_CTRL-X_CTRL-]">Note:</a>
CTRL-X CTRL-]		Search for the first tag that starts with the same
characters as before the cursor.  The matching tag is
inserted in front of the cursor.  Alphabetic
characters and characters in 'iskeyword' are used
to decide which characters are included in the tag
name (same as for a keyword).  See also [CTRL-]](#CTRL-]).
The 'showfulltag' option can be used to add context
from around the tag definition.
CTRL-]	or
CTRL-N		Search forwards for next matching tag.  This tag
replaces the previous matching tag.

CTRL-P		Search backward for previous matching tag.  This tag
replaces the previous matching tag.


### <a id="compl-filename" class="section-title" href="#compl-filename">Completing file names</a>
### <a id="i_CTRL-X_CTRL-F" class="section-title" href="#i_CTRL-X_CTRL-F">Note:</a>
CTRL-X CTRL-F		Search for the first file name that starts with the
same characters as before the cursor.  The matching
file name is inserted in front of the cursor.
Alphabetic characters and characters in 'isfname'
are used to decide which characters are included in
the file name.  Note: the 'path' option is not used
here (yet).
CTRL-F	or
CTRL-N		Search forwards for next matching file name.  This
file name replaces the previous matching file name.

CTRL-P		Search backward for previous matching file name.
This file name replaces the previous matching file
name.


### <a id="compl-define" class="section-title" href="#compl-define">Completing definitions or macros</a>

The 'define' option is used to specify a line that contains a definition.
The 'include' option is used to specify a line that contains an include file
name.  The 'path' option is used to search for include files.

### <a id="i_CTRL-X_CTRL-D" class="section-title" href="#i_CTRL-X_CTRL-D">Note:</a>
CTRL-X CTRL-D		Search in the current and included files for the
first definition (or macro) name that starts with
the same characters as before the cursor.  The found
definition name is inserted in front of the cursor.
CTRL-D	or
CTRL-N		Search forwards for next matching macro name.  This
macro name replaces the previous matching macro
name.

CTRL-P		Search backward for previous matching macro name.
This macro name replaces the previous matching macro
name.

CTRL-X CTRL-D	Further use of CTRL-X CTRL-D will copy the words
following the previous expansion in other contexts
unless a double CTRL-X is used.


### <a id="compl-vim" class="section-title" href="#compl-vim">Completing Vim commands</a>

Completion is context-sensitive.  It works like on the Command-line.  It
completes an Ex command as well as its arguments.  This is useful when writing
a Vim script.

### <a id="i_CTRL-X_CTRL-V" class="section-title" href="#i_CTRL-X_CTRL-V">Note:</a>
CTRL-X CTRL-V		Guess what kind of item is in front of the cursor and
find the first match for it.
Note: When CTRL-V is mapped you can often use CTRL-Q
instead of [i_CTRL-Q](#i_CTRL-Q).
CTRL-V	or
CTRL-N		Search forwards for next match.  This match replaces
the previous one.

CTRL-P		Search backwards for previous match.  This match
replaces the previous one.

CTRL-X CTRL-V	Further use of CTRL-X CTRL-V will do the same as
CTRL-V.  This allows mapping a key to do Vim command
completion, for example:
```
:imap <Tab> <C-X><C-V>

### <a id="compl-function" class="section-title" href="#compl-function">User defined completion</a>

Completion is done by a function that can be defined by the user with the
'completefunc' option.  See below for how the function is called and an
example [complete-functions](#complete-functions).

### <a id="i_CTRL-X_CTRL-U" class="section-title" href="#i_CTRL-X_CTRL-U">Note:</a>
CTRL-X CTRL-U		Guess what kind of item is in front of the cursor and
find the first match for it.
CTRL-U	or
CTRL-N		Use the next match.  This match replaces the previous
one.

CTRL-P		Use the previous match.  This match replaces the
previous one.


### <a id="compl-omni" class="section-title" href="#compl-omni">Omni completion</a>

Completion is done by a function that can be defined by the user with the
'omnifunc' option.  This is to be used for filetype-specific completion.

See below for how the function is called and an example [complete-functions](#complete-functions).
For remarks about specific filetypes see [compl-omni-filetypes](#compl-omni-filetypes).
More completion scripts will appear, check www.vim.org.  Currently there is a
first version for C++.

### <a id="i_CTRL-X_CTRL-O" class="section-title" href="#i_CTRL-X_CTRL-O">Note:</a>
CTRL-X CTRL-O		Guess what kind of item is in front of the cursor and
find the first match for it.
CTRL-O	or
CTRL-N		Use the next match.  This match replaces the previous
one.

CTRL-P		Use the previous match.  This match replaces the
previous one.


### <a id="compl-spelling" class="section-title" href="#compl-spelling">Spelling suggestions</a>

A word before or at the cursor is located and correctly spelled words are
suggested to replace it.  If there is a badly spelled word in the line, before
or under the cursor, the cursor is moved to after it.  Otherwise the word just
before the cursor is used for suggestions, even though it isn't badly spelled.

NOTE: CTRL-S suspends display in many Unix terminals.  Use 's' instead.  Type
CTRL-Q to resume displaying.

### <a id="i_CTRL-X_CTRL-S i_CTRL-X_s" class="section-title" href="#i_CTRL-X_CTRL-S i_CTRL-X_s">Note:</a>
CTRL-X CTRL-S   or
CTRL-X s		Locate the word in front of the cursor and find the
first spell suggestion for it.
CTRL-S	or
CTRL-N		Use the next suggestion.  This replaces the previous
one.  Note that you can't use 's' here.

CTRL-P		Use the previous suggestion.  This replaces the
previous one.


### <a id="compl-generic" class="section-title" href="#compl-generic">Completing keywords from different sources</a>

### <a id="i_CTRL-N" class="section-title" href="#i_CTRL-N">Note:</a>
CTRL-N			Find next match for words that start with the
keyword in front of the cursor, looking in places
specified with the 'complete' option.  The found
keyword is inserted in front of the cursor.

### <a id="i_CTRL-P" class="section-title" href="#i_CTRL-P">Note:</a>
CTRL-P			Find previous match for words that start with the
keyword in front of the cursor, looking in places
specified with the 'complete' option.  The found
keyword is inserted in front of the cursor.

CTRL-N		Search forward for next matching keyword.  This
keyword replaces the previous matching keyword.

CTRL-P		Search backwards for next matching keyword.  This
keyword replaces the previous matching keyword.

CTRL-X CTRL-N or
CTRL-X CTRL-P	Further use of CTRL-X CTRL-N or CTRL-X CTRL-P will
copy the words following the previous expansion in
other contexts unless a double CTRL-X is used.


### <a id="compl-stop" class="section-title" href="#compl-stop">Stop completion</a>

### <a id="i_CTRL-X_CTRL-Z" class="section-title" href="#i_CTRL-X_CTRL-Z">Note:</a>
CTRL-X CTRL-Z		Stop completion without changing the text.


### <a id="complete-functions" class="section-title" href="#complete-functions">Functions for Finding Completions</a>

This applies to 'completefunc', 'thesaurusfunc' and 'omnifunc'.

The function is called in two different ways:
- First the function is called to find the start of the text to be completed.
- Later the function is called to actually find the matches.

On the first invocation the arguments are:
a:findstart  1
a:base	empty

The function must return the column where the completion starts.  It must be a
number between zero and the cursor column "col('.')".  This involves looking
at the characters just before the cursor and including those characters that
could be part of the completed item.  The text between this column and the
cursor column will be replaced with the matches.  If the returned value is
larger than the cursor column, the cursor column is used.

Negative return values:
-2 	To cancel silently and stay in completion mode.
-3 	To cancel silently and leave completion mode.
Another negative value: completion starts at the cursor column

On the second invocation the arguments are:
a:findstart  0
a:base	the text with which matches should match; the text that was
located in the first call (can be empty)

The function must return a List with the matching words.  These matches
usually include the "a:base" text.  When there are no matches return an empty
List.  Note that the cursor may have moved since the first invocation, the
text may have been changed.

In order to return more information than the matching words, return a Dict
that contains the List.  The Dict can have these items:
words		The List of matching words (mandatory).
refresh		A string to control re-invocation of the function
(optional).
The only value currently recognized is "always", the
effect is that the function is called whenever the
leading text is changed.
Other items are ignored.

For acting upon end of completion, see the [CompleteDonePre](#CompleteDonePre) and
[CompleteDone](#CompleteDone) autocommand event.

For example, the function can contain this:
```
let matches = ... list of words ...
return {'words': matches, 'refresh': 'always'}

```

### <a id="complete-items" class="section-title" href="#complete-items">Note:</a>
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
available in [v:completed_item](#v:completed_item); it can be any type;
defaults to an empty string

All of these except "icase", "equal", "dup" and "empty" must be a string.  If
an item does not meet these requirements then an error message is given and
further items in the list are not used.  You can mix string and Dictionary
items in the returned list.

The "menu" item is used in the popup menu and may be truncated, thus it should
be relatively short.  The "info" item can be longer, it will  be displayed in
the preview window when "preview" appears in 'completeopt'.  The "info" item
will also remain displayed after the popup menu has been removed.  This is
useful for function arguments.  Use a single space for "info" to remove
existing text in the preview window.  The size of the preview window is three
lines, but 'previewheight' is used when it has a value of 1 or 2.

The "kind" item uses a single letter to indicate the kind of completion.  This
may be used to show the completion differently (different color or icon).
Currently these types can be used:
v	variable
f	function or method
m	member of a struct or class
t	typedef
d	#define or macro

When searching for matches takes some time call [complete_add()](#complete_add()) to add each
match to the total list.  These matches should then not appear in the returned
list!  Call [complete_check()](#complete_check()) now and then to allow the user to press a key
while still searching for matches.  Stop searching when it returns non-zero.

### <a id="E840" class="section-title" href="#E840">Note:</a>
The function is allowed to move the cursor, it is restored afterwards.
The function is not allowed to move to another window or delete text.

An example that completes the names of the months:
```
fun! CompleteMonths(findstart, base)
if a:findstart
" locate the start of the word
let line = getline('.')
let start = col('.') - 1
while start > 0 && line[start - 1] =~ '\a'
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
set completefunc=CompleteMonths

```

The same, but now pretending searching for matches is slow:
```
fun! CompleteMonths(findstart, base)
if a:findstart
" locate the start of the word
let line = getline('.')
let start = col('.') - 1
while start > 0 && line[start - 1] =~ '\a'
let start -= 1
endwhile
return start
else
" find months matching with "a:base"
for m in split("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec")
if m =~ '^' .. a:base
call complete_add(m)
endif
sleep 300m	" simulate searching for next match
if complete_check()
break
endif
endfor
return []
endif
endfun
set completefunc=CompleteMonths

```


### <a id="ins-completion-menu" class="section-title" href="#ins-completion-menu">Insert Completion Popup Menu</a>
### <a id="popupmenu-completion" class="section-title" href="#popupmenu-completion">Note:</a>
Vim can display the matches in a simplistic popup menu.

The menu is used when:
- The 'completeopt' option contains "menu" or "menuone".
- The terminal supports at least 8 colors.
- There are at least two matches.  One if "menuone" is used.

The 'pumheight' option can be used to set a maximum height.  The default is to
use all space available.
The 'pumwidth' option can be used to set a minimum width.  The default is 15
characters.

There are three states:
1. A complete match has been inserted, e.g., after using CTRL-N or CTRL-P.
2. A cursor key has been used to select another match.  The match was not
inserted then, only the entry in the popup menu is highlighted.
3. Only part of a match has been inserted and characters were typed or the
backspace key was used.  The list of matches was then adjusted for what is
in front of the cursor.

You normally start in the first state, with the first match being inserted.
When "longest" is in 'completeopt' and there is more than one match you start
in the third state.

If you select another match, e.g., with CTRL-N or CTRL-P, you go to the first
state.  This doesn't change the list of matches.

When you are back at the original text then you are in the third state.  To
get there right away you can use a mapping that uses CTRL-P right after
starting the completion:
```
:imap <F7> <C-N><C-P>

```

### <a id="popupmenu-keys" class="section-title" href="#popupmenu-keys">Note:</a>
In the first state these keys have a special meaning:

```
BS> and CTRL-H   Delete one character, find the matches for the word before
the cursor.  This reduces the list of matches, often to one
entry, and switches to the second state.
Any non-special character:
Stop completion without changing the match and insert the
typed character.

In the second and third state these keys have a special meaning:

```
BS> and CTRL-H   Delete one character, find the matches for the shorter word
before the cursor.  This may find more matches.
CTRL-L		  Add one character from the current match, may reduce the
number of matches.
any printable, non-white character:
Add this character and reduce the number of matches.

In all three states these can be used:
CTRL-Y		  Yes: Accept the currently selected match and stop completion.
CTRL-E		  End completion, go back to what was there before selecting a
match (what was typed or longest common string).

```
PageUp>	  Select a match several entries back, but don't insert it.

```
PageDown>	  Select a match several entries further, but don't insert it.

```
Up>		  Select the previous match, as if CTRL-P was used, but don't
insert it.

```
Down>		  Select the next match, as if CTRL-N was used, but don't
insert it.

```
Space> or <Tab>  Stop completion without changing the match and insert the
typed character.

The behavior of the <Enter> key depends on the state you are in:
first state:	  Use the text as it is and insert a line break.
second state:	  Insert the currently selected match.
third state:	  Use the text as it is and insert a line break.

In other words: If you used the cursor keys to select another entry in the
list of matches then the <Enter> key inserts that match.  If you typed
something else then <Enter> inserts a line break.


The colors of the menu can be changed with these highlight groups:
Pmenu		normal item  [hl-Pmenu](#hl-Pmenu)
PmenuSel	selected item  [hl-PmenuSel](#hl-PmenuSel)
PmenuSbar	scrollbar  [hl-PmenuSbar](#hl-PmenuSbar)
PmenuThumb	thumb of the scrollbar  [hl-PmenuThumb](#hl-PmenuThumb)

There are no special mappings for when the popup menu is visible.  However,
you can use an Insert mode mapping that checks the [pumvisible()](#pumvisible()) function to
do something different.  Example:
```
:inoremap <Down> <C-R>=pumvisible() ? "\<lt>C-N>" : "\<lt>Down>"<CR>

You can use of <expr> in mapping to have the popup menu used when typing a
character and some condition is met.  For example, for typing a dot:
```
inoremap <expr> . MayComplete()
func MayComplete()
if (can complete)
return ".\<C-X>\<C-O>"
endif
return '.'
endfunc

See [:map-<expr>](#:map-<expr>) for more info.


### <a id="compl-omni-filetypes" class="section-title" href="#compl-omni-filetypes">Filetype-Specific Remarks for Omni Completion</a>

The file used for {filetype} should be autoload/{filetype}complete.vim
in 'runtimepath'.  Thus for "java" it is autoload/javacomplete.vim.


### <a id="ft-c-omni" class="section-title" href="#ft-c-omni">C</a>

Completion of C code requires a tags file.  You should use Universal/
Exuberant ctags, because it adds extra information that is needed for
completion.  You can find it here:
Universal Ctags: https://ctags.io

Universal Ctags is preferred, Exuberant Ctags is no longer maintained.

If you want to complete system functions you can do something like this.  Use
ctags to generate a tags file for all the system header files:
```
% ctags -R -f ~/.config/nvim/systags /usr/include /usr/local/include
In your vimrc file add this tags file to the 'tags' option:
```
set tags+=~/.config/nvim/systags

When using CTRL-X CTRL-O after a name without any "." or "->" it is completed
from the tags file directly.  This works for any identifier, also function
names.  If you want to complete a local variable name, which does not appear
in the tags file, use CTRL-P instead.

When using CTRL-X CTRL-O after something that has "." or "->" Vim will attempt
to recognize the type of the variable and figure out what members it has.
This means only members valid for the variable will be listed.

When a member name already was complete, CTRL-X CTRL-O will add a "." or
"->" for composite types.

Vim doesn't include a C compiler, only the most obviously formatted
declarations are recognized.  Preprocessor stuff may cause confusion.
When the same structure name appears in multiple places all possible members
are included.


### <a id="ft-css-omni" class="section-title" href="#ft-css-omni">CSS</a>

Complete properties and their appropriate values according to CSS 2.1
specification.


### <a id="ft-html-omni" class="section-title" href="#ft-html-omni">HTML</a>
### <a id="ft-xhtml-omni" class="section-title" href="#ft-xhtml-omni">XHTML</a>

CTRL-X CTRL-O provides completion of various elements of (X)HTML files.  It is
designed to support writing of XHTML 1.0 Strict files but will also work for
other versions of HTML. Features:

- after "<" complete tag name depending on context (no div suggestion inside
of an a tag); '/>' indicates empty tags
- inside of tag complete proper attributes (no width attribute for an a tag);
### <a id="show also type of attribute; '' indicates required attributes" class="section-title" href="#show also type of attribute; '' indicates required attributes">Note:</a>
- when attribute has limited number of possible values help to complete them
- complete names of entities
- complete values of "class" and "id" attributes with data obtained from

```
style> tag and included CSS files
- when completing value of "style" attribute or working inside of "style" tag
switch to [ft-css-omni](#ft-css-omni) completion
- when completing values of events attributes or working inside of "script"
tag switch to [ft-javascript-omni](#ft-javascript-omni) completion
- when used after "</" CTRL-X CTRL-O will close the last opened tag

Note: When used first time completion menu will be shown with little delay
- this is time needed for loading of data file.
Note: Completion may fail in badly formatted documents. In such case try to
run [:make](#:make) command to detect formatting problems.


### <a id="html-flavor" class="section-title" href="#html-flavor">HTML flavor</a>

The default HTML completion depends on the filetype.  For HTML files it is
HTML 4.01 Transitional ('filetype' is "html"), for XHTML it is XHTML 1.0
Strict ('filetype' is "xhtml").

When doing completion outside of any other tag you will have possibility to
choose DOCTYPE and the appropriate data file will be loaded and used for all
next completions.

More about format of data file in [xml-omni-datafile](#xml-omni-datafile). Some of the data files
may be found on the Vim website ([www](#www)).

Note that b:html_omni_flavor may point to a file with any XML data.  This
makes possible to mix PHP ([ft-php-omni](#ft-php-omni)) completion with any XML dialect
(assuming you have data file for it).  Without setting that variable XHTML 1.0
Strict will be used.


### <a id="ft-javascript-omni" class="section-title" href="#ft-javascript-omni">JAVASCRIPT</a>

Completion of most elements of JavaScript language and DOM elements.

Complete:

- variables
- function name; show function arguments
- function arguments
- properties of variables trying to detect type of variable
- complete DOM objects and properties depending on context
- keywords of language

Completion works in separate JavaScript files (&ft==javascript), inside of

```
script> tag of (X)HTML and in values of event attributes (including scanning
of external files).

DOM compatibility

At the moment (beginning of 2006) there are two main browsers - MS Internet
Explorer and Mozilla Firefox. These two applications are covering over 90% of
market. Theoretically standards are created by W3C organisation
(https://www.w3.org/) but they are not always followed/implemented.

IE	FF	W3C  Omni completion ~
+/-	+/-	+    +		     ~
+	+	-    +		     ~
+	-	-    -		     ~
-	+	-    -		     ~

Regardless from state of implementation in browsers but if element is defined
in standards, completion plugin will place element in suggestion list. When
both major engines implemented element, even if this is not in standards it
will be suggested. All other elements are not placed in suggestion list.


### <a id="ft-php-omni" class="section-title" href="#ft-php-omni">PHP</a>

Completion of PHP code requires a tags file for completion of data from
external files and for class aware completion. You should use Universal/
Exuberant ctags version 5.5.4 or newer. You can find it here:

Universal Ctags: https://ctags.io

Script completes:

- after $ variables name
- if variable was declared as object add "->", if tags file is available show
name of class
- after "->" complete only function and variable names specific for given
class. To find class location and contents tags file is required. Because
PHP isn't strongly typed language user can use @var tag to declare class:
```

/* @var $myVar myClass */
$myVar->

```

Still, to find myClass contents tags file is required.

- function names with additional info:
- in case of built-in functions list of possible arguments and after | type
data returned by function
- in case of user function arguments and name of file where function was
defined (if it is not current file)

- constants names
- class names after "new" declaration


Note: when doing completion first time Vim will load all necessary data into
memory. It may take several seconds. After next use of completion delay
should not be noticeable.

Script detects if cursor is inside <?php ?> tags. If it is outside it will
automatically switch to HTML/CSS/JavaScript completion. Note: contrary to
original HTML files completion of tags (and only tags) isn't context aware.


### <a id="ft-ruby-omni" class="section-title" href="#ft-ruby-omni">RUBY</a>

NOTE: [compl-omni| for Ruby code requires |provider-ruby](#compl-omni| for Ruby code requires |provider-ruby) to be installed.

Ruby completion will parse your buffer on demand in order to provide a list of
completions.  These completions will be drawn from modules loaded by "require"
and modules defined in the current buffer.

The completions provided by CTRL-X CTRL-O are sensitive to the context:

CONTEXT			   COMPLETIONS PROVIDED ~

1. Not inside a class definition    Classes, constants and globals

2. Inside a class definition	     Methods or constants defined in the class

3. After '.', '::' or ':'	     Methods applicable to the object being
dereferenced

4. After ':' or ':foo'		     Symbol name (beginning with "foo")

Notes:
- Vim will load/evaluate code in order to provide completions.  This may
cause some code execution, which may be a concern. This is no longer
enabled by default, to enable this feature add
```
let g:rubycomplete_buffer_loading = 1

```
- In context 1 above, Vim can parse the entire buffer to add a list of
classes to the completion results. This feature is turned off by default,
to enable it add
```
let g:rubycomplete_classes_in_global = 1

```
  to your vimrc
- In context 2 above, anonymous classes are not supported.
- In context 3 above, Vim will attempt to determine the methods supported by
the object.
- Vim can detect and load the Rails environment for files within a rails
project. The feature is disabled by default, to enable it add
```
let g:rubycomplete_rails = 1

```
  to your vimrc


### <a id="ft-syntax-omni" class="section-title" href="#ft-syntax-omni">SYNTAX</a>

Vim has the ability to color syntax highlight nearly 500 languages.  Part of
this highlighting includes knowing what keywords are part of a language.  Many
filetypes already have custom completion scripts written for them, the
syntaxcomplete plugin provides basic completion for all other filetypes.  It
does this by populating the omni completion list with the text Vim already
knows how to color highlight.  It can be used for any filetype and provides a
minimal language-sensitive completion.

To enable syntax code completion you can run:
```
setlocal omnifunc=syntaxcomplete#Complete

You can automate this by placing the following in your [init.vim](#init.vim) (after any
":filetype" command):
```
if has("autocmd") && exists("+omnifunc")
autocmd Filetype *
\	if &omnifunc == "" |
\		setlocal omnifunc=syntaxcomplete#Complete |
\	endif
endif

The above will set completion to this script only if a specific plugin does
not already exist for that filetype.

Each filetype can have a wide range of syntax items.  The plugin allows you to
customize which syntax groups to include or exclude from the list.  Let's have
a look at the PHP filetype to see how this works.

If you edit a file called, index.php, run the following command:
```
syntax list

The first thing you will notice is that there are many different syntax groups.
The PHP language can include elements from different languages like HTML,
JavaScript and many more.  The syntax plugin will only include syntax groups
that begin with the filetype, "php", in this case.  For example these syntax
groups are included by default with the PHP: phpEnvVar, phpIntVar,
phpFunctions.

If you wish non-filetype syntax items to also be included, you can use a
regular expression syntax (added in version 13.0 of
autoload/syntaxcomplete.vim) to add items.  Looking at the output from
":syntax list" while editing a PHP file I can see some of these entries:
```
htmlArg,htmlTag,htmlTagName,javaScriptStatement,javaScriptGlobalObjects

To pick up any JavaScript and HTML keyword syntax groups while editing a PHP
file, you can use 3 different regexs, one for each language.  Or you can
simply restrict the include groups to a particular value, without using
a regex string:
```
let g:omni_syntax_group_include_php = 'php\w\+,javaScript\w\+,html\w\+'
let g:omni_syntax_group_include_php = 'phpFunctions,phpMethods'

```

The basic form of this variable is:
```
let g:omni_syntax_group_include_{filetype} = 'regex,comma,separated'

The PHP language has an enormous number of items which it knows how to syntax
highlight.  These items will be available within the omni completion list.

Some people may find this list unwieldy or are only interested in certain
items.  There are two ways to prune this list (if necessary).  If you find
certain syntax groups you do not wish displayed you can use two different
methods to identify these groups.  The first specifically lists the syntax
groups by name.  The second uses a regular expression to identify both
syntax groups.  Simply add one the following to your vimrc:
```
let g:omni_syntax_group_exclude_php = 'phpCoreConstant,phpConstant'
### <a id="let g:omni_syntax_group_exclude_php = 'php\wConstant'" class="section-title" href="#let g:omni_syntax_group_exclude_php = 'php\wConstant'">Note:</a>

Add as many syntax groups to this list by comma separating them.  The basic
form of this variable is:
```
let g:omni_syntax_group_exclude_{filetype} = 'regex,comma,separated'

You can create as many of these variables as you need, varying only the
filetype at the end of the variable name.

The plugin uses the isKeyword option to determine where word boundaries are
for the syntax items.  For example, in the Scheme language completion should
include the "-", call-with-output-file.  Depending on your filetype, this may
not provide the words you are expecting.  Setting the
g:omni_syntax_use_iskeyword option to 0 will force the syntax plugin to break
on word characters.   This can be controlled adding the following to your
vimrc:
```
let g:omni_syntax_use_iskeyword = 0

For plugin developers, the plugin exposes a public function OmniSyntaxList.
This function can be used to request a List of syntax items.  When editing a
SQL file (:e syntax.sql) you can use the ":syntax list" command to see the
various groups and syntax items.  For example:
```
syntax list

Yields data similar to this:
sqlOperator    xxx some prior all like and any escape exists in is not ~
or intersect minus between distinct ~
links to Operator ~
sqlType        xxx varbit varchar nvarchar bigint int uniqueidentifier ~
date money long tinyint unsigned xml text smalldate ~
double datetime nchar smallint numeric time bit char ~
varbinary binary smallmoney ~
image float integer timestamp real decimal ~

There are two syntax groups listed here: sqlOperator and sqlType.  To retrieve
a List of syntax items you can call OmniSyntaxList a number of different
ways.  To retrieve all syntax items regardless of syntax group:
```
echo OmniSyntaxList( [] )

To retrieve only the syntax items for the sqlOperator syntax group:
```
echo OmniSyntaxList( ['sqlOperator'] )

To retrieve all syntax items for both the sqlOperator and sqlType groups:
```
echo OmniSyntaxList( ['sqlOperator', 'sqlType'] )

A regular expression can also be used:
```
echo OmniSyntaxList( ['sql\w\+'] )

From within a plugin, you would typically assign the output to a List:
```
let myKeywords = []
let myKeywords = OmniSyntaxList( ['sqlKeyword'] )


### <a id="ft-sql-omni" class="section-title" href="#ft-sql-omni">SQL</a>

Completion for the SQL language includes statements, functions, keywords.
It will also dynamically complete tables, procedures, views and column lists
with data pulled directly from within a database.  For detailed instructions
and a tutorial see [omni-sql-completion](#omni-sql-completion).

The SQL completion plugin can be used in conjunction with other completion
plugins.  For example, the PHP filetype has its own completion plugin.
Since PHP is often used to generate dynamic website by accessing a database,
the SQL completion plugin can also be enabled.  This allows you to complete
PHP code and SQL code at the same time.


### <a id="ft-xml-omni" class="section-title" href="#ft-xml-omni">XML</a>

Vim 7 provides a mechanism for context aware completion of XML files.  It
depends on a special [xml-omni-datafile| and two commands: |:XMLns](#xml-omni-datafile| and two commands: |:XMLns) and
[:XMLent](#:XMLent).  Features are:

- after "<" complete the tag name, depending on context
- inside of a tag complete proper attributes
- when an attribute has a limited number of possible values help to complete
them
- complete names of entities (defined in [xml-omni-datafile](#xml-omni-datafile) and in the
current file with "<!ENTITY" declarations)
- when used after "</" CTRL-X CTRL-O will close the last opened tag

### <a id="xml-omni-datafile" class="section-title" href="#xml-omni-datafile">Format of XML data file</a>

XML data files are stored in the "autoload/xml" directory in 'runtimepath'.
Vim distribution provides examples of data files in the
"$VIMRUNTIME/autoload/xml" directory.  They have a meaningful name which will
be used in commands.  It should be a unique name which will not create
conflicts.  For example, the name xhtml10s.vim means it is the data file for
XHTML 1.0 Strict.

Each file contains a variable with a name like g:xmldata_xhtml10s . It is
a compound from two parts:

1. "g:xmldata_"  general prefix, constant for all data files
2. "xhtml10s"    the name of the file and the name of the described XML
dialect; it will be used as an argument for the [:XMLns](#:XMLns)
command

Part two must be exactly the same as name of file.

The variable is a [Dictionary](#Dictionary).  Keys are tag names and each value is a two
element [List](#List).  The first element of the List is also a List with the names
of possible children.  The second element is a [Dictionary](#Dictionary) with the names of
attributes as keys and the possible values of attributes as values.  Example:
```

let g:xmldata_crippled = {
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
\ 'attrofchild': ['Menu info', 'Long information visible in preview window']}}

This example would be put in the "autoload/xml/crippled.vim" file and could
help to write this file:
```


```
tag1 attroftag1b="valueofattr1">

```
childoftag1a attrofchild>
&amp; &lt;

```
/childoftag1a>

```
childoftag1b attrofchild="5">

```
childoftag1a>
&gt; &apos; &quot;

```
/childoftag1a>

```
/childoftag1b>

```
/tag1>

In the example four special elements are visible:

1. "vimxmlentities" - a special key with List containing entities of this XML
dialect.
2. If the list containing possible values of attributes has one element and
this element is equal to the name of the attribute this attribute will be
treated as boolean and inserted as "attrname" and not as 'attrname="'
3. "vimxmltaginfo" - a special key with a Dictionary containing tag
names as keys and two element List as values, for additional menu info and
the long description.
4. "vimxmlattrinfo" - special key with Dictionary containing attribute names
as keys and two element List as values, for additional menu info and long
description.

Note: Tag names in the data file MUST not contain a namespace description.
Check xsl.vim for an example.
Note: All data and functions are publicly available as global
variables/functions and can be used for personal editing functions.


### <a id="dtd2vim" class="section-title" href="#dtd2vim">DTD -> Vim</a>

On [www| is the script |dtd2vim](#www| is the script |dtd2vim) which parses DTD and creates an XML data file
for Vim XML omni completion.

dtd2vim: https://www.vim.org/scripts/script.php?script_id=1462

Check the beginning of that file for usage details.
The script requires perl and:

perlSGML: https://savannah.nongnu.org/projects/perlsgml


Commands

### <a id=":XMLns" class="section-title" href="#:XMLns">:XMLns {name} [{namespace}]</a>

Vim has to know which data file should be used and with which namespace.  For
loading of the data file and connecting data with the proper namespace use
[:XMLns](#:XMLns) command.  The first (obligatory) argument is the name of the data
(xhtml10s, xsl).  The second argument is the code of namespace (h, xsl).  When
used without a second argument the dialect will be used as default - without
namespace declaration.  For example to use XML completion in .xsl files:
```

:XMLns xhtml10s
:XMLns xsl xsl


### <a id=":XMLent" class="section-title" href="#:XMLent">:XMLent {name}</a>

By default entities will be completed from the data file of the default
namespace.  The XMLent command should be used in case when there is no default
namespace:
```

:XMLent xhtml10s

Usage

While used in this situation (after declarations from previous part, | is
cursor position):
```


```
|

Will complete to an appropriate XHTML tag, and in this situation:
```


```
xsl:|

Will complete to an appropriate XSL tag.


The script xmlcomplete.vim, provided through the [autoload](#autoload) mechanism,
has the xmlcomplete#GetLastOpenTag() function which can be used in XML files
to get the name of the last open tag (b:unaryTagsStack has to be defined):
```

:echo xmlcomplete#GetLastOpenTag("b:unaryTagsStack")


## <a id="inserting" class="section-title" href="#inserting">8. Insert Mode Commands</a> 

The following commands can be used to insert new text into the buffer.  They
can all be undone and repeated with the "." command.

### <a id="a" class="section-title" href="#a">Note:</a>
a			Append text after the cursor [count] times.  If the
cursor is in the first column of an empty line Insert
starts there.  But not when 'virtualedit' is set!

### <a id="A" class="section-title" href="#A">Note:</a>
A			Append text at the end of the line [count] times.
For using "A" in Visual block mode see [v_b_A](#v_b_A).

### <a id="i insert <Insert>" class="section-title" href="#i insert <Insert>"><insert>	or</a>
i			Insert text before the cursor [count] times.
When using CTRL-O in Insert mode [i_CTRL-O](#i_CTRL-O) the count
is not supported.

### <a id="I" class="section-title" href="#I">Note:</a>
I			Insert text before the first non-blank in the line
[count] times.
When the 'H' flag is present in 'cpoptions' and the
line only contains blanks, insert start just before
the last blank.
For using "I" in Visual block mode see [v_b_I](#v_b_I).

### <a id="gI" class="section-title" href="#gI">Note:</a>
gI			Insert text in column 1 [count] times.

### <a id="gi" class="section-title" href="#gi">Note:</a>
gi			Insert text in the same position as where Insert mode
was stopped last time in the current buffer.
This uses the ['^](#'^) mark.  It's different from "`^i"
when the mark is past the end of the line.
The position is corrected for inserted/deleted lines,
but NOT for inserted/deleted characters.
When the [:keepjumps| command modifier is used the |'^](#:keepjumps| command modifier is used the |'^)
mark won't be changed.

### <a id="o" class="section-title" href="#o">Note:</a>
o			Begin a new line below the cursor and insert text,
repeat [count] times.

### <a id="O" class="section-title" href="#O">Note:</a>
O			Begin a new line above the cursor and insert text,
repeat [count] times.

These commands are used to start inserting text.  You can end insert mode with

```
Esc>.  See [mode-ins-repl](#mode-ins-repl) for the other special characters in Insert mode.
The effect of [count] takes place after Insert mode is exited.

When 'autoindent' is on, the indent for a new line is obtained from the
previous line.  When 'smartindent' or 'cindent' is on, the indent for a line
is automatically adjusted for C programs.

'formatoptions' can be set to copy the comment leader when opening a new
line.

'textwidth' can be set to the maximum width for a line.  When a line becomes
too long when appending characters a line break is automatically inserted.


## <a id="inserting-ex" class="section-title" href="#inserting-ex">9. Ex Insert Commands</a> 

### <a id=":a :append" class="section-title" href="#:a :append">Note:</a>
:{range}a[ppend][!]	Insert several lines of text below the specified
line.  If the {range} is missing, the text will be
inserted after the current line.
Adding [!] toggles 'autoindent' for the time this
command is executed.

### <a id=":i :in :insert" class="section-title" href="#:i :in :insert">Note:</a>
:{range}i[nsert][!]	Insert several lines of text above the specified
line.  If the {range} is missing, the text will be
inserted before the current line.
Adding [!] toggles 'autoindent' for the time this
command is executed.

These two commands will keep on asking for lines, until you type a line
containing only a ".".  Watch out for lines starting with a backslash, see
[line-continuation](#line-continuation).

When in Ex mode (see [-e](#-e)) a backslash at the end of the line can be used to
insert a NUL character.  To be able to have a line ending in a backslash use
two backslashes.  This means that the number of backslashes is halved, but
only at the end of the line.

NOTE: These commands cannot be used with [:global| or |:vglobal](#:global| or |:vglobal).
":append" and ":insert" don't work properly in between ":if" and
":endif", ":for" and ":endfor", ":while" and ":endwhile".

### <a id=":start :startinsert" class="section-title" href="#:start :startinsert">Note:</a>
:star[tinsert][!]	Start Insert mode (or [Terminal-mode| in a |terminal](#Terminal-mode| in a |terminal)
buffer) just after executing this command.
Works like typing "i" in Normal mode.  When the ! is
included it works like "A", append to the line.
Otherwise insertion starts at the cursor position.
Note that when using this command in a function or
script, the insertion only starts after the function
or script is finished.
This command does not work from [:normal](#:normal).

### <a id=":stopi :stopinsert" class="section-title" href="#:stopi :stopinsert">Note:</a>
:stopi[nsert]		Stop Insert mode or [Terminal-mode](#Terminal-mode) as soon as
possible.  Works like typing <Esc> in Insert mode.
Can be used in an autocommand, example:
```
:au BufEnter scratch stopinsert

```

### <a id="replacing-ex :startreplace" class="section-title" href="#replacing-ex :startreplace">Note:</a>
:startr[eplace][!]	Start Replace mode just after executing this command.
Works just like typing "R" in Normal mode.  When the
! is included it acts just like "$R" had been typed
(ie. begin replace mode at the end-of-line).  Other-
wise replacement begins at the cursor position.
Note that when using this command in a function or
script that the replacement will only start after
the function or script is finished.

### <a id=":startgreplace" class="section-title" href="#:startgreplace">Note:</a>
:startg[replace][!]	Just like [:startreplace](#:startreplace), but use Virtual Replace
mode, like with [gR](#gR).


## <a id="inserting-file" class="section-title" href="#inserting-file">10. Inserting a File</a> 

### <a id=":r :re :read" class="section-title" href="#:r :re :read">Note:</a>
:r[ead] [++opt] [name]
Insert the file [name] (default: current file) below
the cursor.
See [++opt](#++opt) for the possible values of [++opt].

:{range}r[ead] [++opt] [name]
Insert the file [name] (default: current file) below
the specified line.
See [++opt](#++opt) for the possible values of [++opt].

### <a id=":r! :read!" class="section-title" href="#:r! :read!">Note:</a>
:[range]r[ead] [++opt] !{cmd}
Execute {cmd} and insert its standard output below
the cursor or the specified line.  A temporary file is
used to store the output of the command which is then
read into the buffer.  'shellredir' is used to save
the output of the command, which can be set to include
stderr or not.  {cmd} is executed like with ":!{cmd}",
any '!' is replaced with the previous command [:!](#:!).
See [++opt](#++opt) for the possible values of [++opt].

These commands insert the contents of a file, or the output of a command,
into the buffer.  They can be undone.  They cannot be repeated with the "."
command.  They work on a line basis, insertion starts below the line in which
the cursor is, or below the specified line.  To insert text above the first
line use the command ":0r {name}".

After the ":read" command, the cursor is left on the first non-blank in the
first new line.  Unless in Ex mode, then the cursor is left on the last new
line (sorry, this is Vi compatible).

If a file name is given with ":r", it becomes the alternate file.  This can be
used, for example, when you want to edit that file instead: ":e! #".  This can
be switched off by removing the 'a' flag from the 'cpoptions' option.

Of the [++opt] arguments one is specifically for ":read", the ++edit argument.
This is useful when the ":read" command is actually used to read a file into
the buffer as if editing that file.  Use this command in an empty buffer:
```
:read ++edit filename
The effect is that the 'fileformat', 'fileencoding', 'bomb', etc. options are
set to what has been detected for "filename".  Note that a single empty line
remains, you may want to delete it.

### <a id="file-read" class="section-title" href="#file-read">Note:</a>
The 'fileformat' option sets the <EOL> style for a file:
'fileformat'    characters	   name				~
"dos"		<CR><NL> or <NL>   DOS format
"unix"	<NL>		   Unix format
"mac"		<CR>		   Mac format

If 'fileformat' is "dos", a <CR> in front of an <NL> is ignored and a CTRL-Z
at the end of the file is ignored.

If 'fileformat' is "mac", a <NL> in the file is internally represented by a

```
CR>.  This is to avoid confusion with a <NL> which is used to represent a

```
NUL>.  See [CR-used-for-NL](#CR-used-for-NL).

If the 'fileformats' option is not empty Vim tries to recognize the type of

```
EOL> (see [file-formats](#file-formats)).  However, the 'fileformat' option will not be
changed, the detected format is only used while reading the file.
A similar thing happens with 'fileencodings'.

On non-Win32 systems the message "[dos format]" is shown if a file is read in
DOS format, to remind you that something unusual is done.
On Macintosh and Win32 the message "[unix format]" is shown if a file is read
in Unix format.
On non-Macintosh systems, the message "[mac format]" is shown if a file is
read in Mac format.

An example on how to use ":r !":
```
:r !uuencode binfile binfile
This command reads "binfile", uuencodes it and reads it into the current
buffer.  Useful when you are editing e-mail and want to include a binary
file.

### <a id="read-messages" class="section-title" href="#read-messages">Note:</a>
When reading a file Vim will display a message with information about the read
file.  In the table is an explanation for some of the items.  The others are
self explanatory.  Using the long or the short version depends on the
'shortmess' option.

long		short		meaning ~
[readonly]	{RO}		the file is write protected
[fifo/socket]			using a stream
[fifo]				using a fifo stream
[socket]			using a socket stream
[CR missing]			reading with "dos" 'fileformat' and a
NL without a preceding CR was found.
[NL found]			reading with "mac" 'fileformat' and a
NL was found (could be "unix" format)
[long lines split]		at least one line was split in two
[NOT converted]			conversion from 'fileencoding' to
'encoding' was desired but not
possible
[converted]			conversion from 'fileencoding' to
'encoding' done
[READ ERRORS]			not all of the file could be read


vim:tw=78:ts=8:noet:ft=help:norl:
