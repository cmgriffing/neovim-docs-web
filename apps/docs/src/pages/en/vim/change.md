---
title: Tree Sitter
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Change Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


This file describes commands that delete or change text.  In this context,
changing text means deleting the text and replacing it with other text using
one command.  You can undo all of these commands.  You can repeat the non-Ex
commands with the "." command.

For inserting text see [insert.txt](#insert.txt).

Type [gO](#gO) to see the table of contents.


## <a id="deleting E470" class="section-title" href="#deleting E470">1. Deleting Text</a> 

### <a id="<Del> x dl" class="section-title" href="#<Del> x dl">["x]<Del>	or</a>
["x]x			Delete [count] characters under and after the cursor
[into register x] (not [linewise](#linewise)).  Does the same as
"dl".
The <Del> key does not take a [count].  Instead, it
deletes the last character of the count.
See ['whichwrap'](#'whichwrap') for deleting a line break (join
lines).

### <a id="X dh" class="section-title" href="#X dh">Note:</a>
["x]X			Delete [count] characters before the cursor [into
register x] (not [linewise](#linewise)).  Does the same as "dh".
Also see ['whichwrap'](#'whichwrap').

### <a id="d" class="section-title" href="#d">Note:</a>
["x]d{motion}		Delete text that {motion} moves over [into register
x].  See below for exceptions.

### <a id="dd" class="section-title" href="#dd">Note:</a>
["x]dd			Delete [count] lines [into register x] [linewise](#linewise).

### <a id="D" class="section-title" href="#D">Note:</a>
["x]D			Delete the characters under the cursor until the end
of the line and [count]-1 more lines [into register
x]; synonym for "d$".
(not [linewise](#linewise))

### <a id="v_x v_d v_<Del>" class="section-title" href="#v_x v_d v_<Del>">{Visual}["x]x	or</a>
{Visual}["x]d   or
{Visual}["x]<Del>	Delete the highlighted text [into register x] (for
{Visual} see [Visual-mode](#Visual-mode)).

{Visual}["x]CTRL-H   or					*v_CTRL-H* *v_<BS>*
{Visual}["x]<BS>	When in Select mode: Delete the highlighted text [into
register x].

### <a id="v_X v_D v_b_D" class="section-title" href="#v_X v_D v_b_D">{Visual}["x]X	or</a>
{Visual}["x]D		Delete the highlighted lines [into register x] (for
{Visual} see [Visual-mode](#Visual-mode)).  In Visual block mode,
"D" deletes the highlighted text plus all text until
the end of the line.

### <a id=":d :de :del :delete :dl :dp" class="section-title" href="#:d :de :del :delete :dl :dp">Note:</a>
:[range]d[elete] [x]	Delete [range] lines (default: current line) [into
register x].
Note these weird abbreviations:
:dl		delete and list
:dell	idem
:delel	idem
:deletl	idem
:deletel	idem
:dp		delete and print
:dep		idem
:delp	idem
:delep	idem
:deletp	idem
:deletep	idem

:[range]d[elete] [x] {count}
Delete {count} lines, starting with [range]
(default: current line [cmdline-ranges](#cmdline-ranges)) [into
register x].

These commands delete text.  You can repeat them with the `.` command
(except `:d`) and undo them.  Use Visual mode to delete blocks of text.  See
[registers](#registers) for an explanation of registers.

An exception for the d{motion} command: If the motion is not linewise, the
start and end of the motion are not in the same line, and there are only
blanks before the start and there are no non-blanks after the end of the
motion, the delete becomes linewise.  This means that the delete also removes
the line of blanks that you might expect to remain. Use the [o_v](#o_v) operator to
force the motion to be charwise.

Trying to delete an empty region of text (e.g., "d0" in the first column)
is an error when 'cpoptions' includes the 'E' flag.

### <a id="J" class="section-title" href="#J">Note:</a>
J			Join [count] lines, with a minimum of two lines.
Remove the indent and insert up to two spaces (see
below).  Fails when on the last line of the buffer.
If [count] is too big it is reduced to the number of
lines available.

### <a id="v_J" class="section-title" href="#v_J">Note:</a>
{Visual}J		Join the highlighted lines, with a minimum of two
lines.  Remove the indent and insert up to two spaces
(see below).

### <a id="gJ" class="section-title" href="#gJ">Note:</a>
gJ			Join [count] lines, with a minimum of two lines.
Don't insert or remove any spaces.

### <a id="v_gJ" class="section-title" href="#v_gJ">Note:</a>
{Visual}gJ		Join the highlighted lines, with a minimum of two
lines.  Don't insert or remove any spaces.

### <a id=":j :join" class="section-title" href="#:j :join">Note:</a>
:[range]j[oin][!] [flags]
Join [range] lines.  Same as "J", except with [!]
the join does not insert or delete any spaces.
If a [range] has equal start and end values, this
command does nothing.  The default behavior is to
join the current line with the line below it.
See [ex-flags](#ex-flags) for [flags].

:[range]j[oin][!] {count} [flags]
Join {count} lines, starting with [range] (default:
current line [cmdline-ranges](#cmdline-ranges)).  Same as "J", except
with [!] the join does not insert or delete any
spaces.
See [ex-flags](#ex-flags) for [flags].

These commands delete the <EOL> between lines.  This has the effect of joining
multiple lines into one line.  You can repeat these commands (except `:j`) and
undo them.

These commands, except "gJ", insert one space in place of the <EOL> unless
there is trailing white space or the next line starts with a ')'.  These
commands, except "gJ", delete any leading white space on the next line.  If
the 'joinspaces' option is on, these commands insert two spaces after a '.',
'!' or '?'.
The 'B' and 'M' flags in 'formatoptions' change the behavior for inserting
spaces before and after a multibyte character [fo-table](#fo-table).

The '[ mark is set at the end of the first line that was joined, '] at the end
of the resulting line.


## <a id="delete-insert replacing" class="section-title" href="#delete-insert replacing">2. Delete and Insert</a> 

### <a id="R" class="section-title" href="#R">Note:</a>
R			Enter Replace mode: Each character you type replaces
an existing character, starting with the character
under the cursor.  Repeat the entered text [count]-1
times.  See [Replace-mode](#Replace-mode) for more details.

### <a id="gR" class="section-title" href="#gR">Note:</a>
gR			Enter Virtual Replace mode: Each character you type
replaces existing characters in screen space.  So a

```
Tab> may replace several characters at once.
Repeat the entered text [count]-1 times.  See
[Virtual-Replace-mode](#Virtual-Replace-mode) for more details.

### <a id="c" class="section-title" href="#c">Note:</a>
["x]c{motion}		Delete {motion} text [into register x] and start
insert.  When  'cpoptions' includes the 'E' flag and
there is no text to delete (e.g., with "cTx" when the
cursor is just after an 'x'), an error occurs and
insert mode does not start (this is Vi compatible).
When  'cpoptions' does not include the 'E' flag, the
"c" command always starts insert mode, even if there
is no text to delete.

### <a id="cc" class="section-title" href="#cc">Note:</a>
["x]cc			Delete [count] lines [into register x] and start
insert [linewise](#linewise).  If 'autoindent' is on, preserve
the indent of the first line.

### <a id="C" class="section-title" href="#C">Note:</a>
["x]C			Delete from the cursor position to the end of the
line and [count]-1 more lines [into register x], and
start insert.  Synonym for c$ (not [linewise](#linewise)).

### <a id="s" class="section-title" href="#s">Note:</a>
["x]s			Delete [count] characters [into register x] and start
insert (s stands for Substitute).  Synonym for "cl"
(not [linewise](#linewise)).

### <a id="S" class="section-title" href="#S">Note:</a>
["x]S			Delete [count] lines [into register x] and start
insert.  Synonym for "cc" [linewise](#linewise).

### <a id="v_c v_s" class="section-title" href="#v_c v_s">{Visual}["x]c	or</a>
{Visual}["x]s		Delete the highlighted text [into register x] and
start insert (for {Visual} see [Visual-mode](#Visual-mode)).

### <a id="v_r" class="section-title" href="#v_r">Note:</a>
{Visual}r{char}		Replace all selected characters by {char}.

### <a id="v_C" class="section-title" href="#v_C">Note:</a>
{Visual}["x]C		Delete the highlighted lines [into register x] and
start insert.  In Visual block mode it works
differently [v_b_C](#v_b_C).
### <a id="v_S" class="section-title" href="#v_S">Note:</a>
{Visual}["x]S		Delete the highlighted lines [into register x] and
start insert (for {Visual} see [Visual-mode](#Visual-mode)).

### <a id="v_R" class="section-title" href="#v_R">Note:</a>
{Visual}["x]R		Currently just like {Visual}["x]S.  In a next version
it might work differently.

Notes:
- You can end Insert and Replace mode with <Esc>.
- See the section "Insert and Replace mode" [mode-ins-repl](#mode-ins-repl) for the other
special characters in these modes.
- The effect of [count] takes place after Vim exits Insert or Replace mode.
- When the 'cpoptions' option contains '$' and the change is within one line,
Vim continues to show the text to be deleted and puts a '$' at the last
deleted character.

See [registers](#registers) for an explanation of registers.

Replace mode is just like Insert mode, except that every character you enter
deletes one character.  If you reach the end of a line, Vim appends any
further characters (just like Insert mode).  In Replace mode, the backspace
key restores the original text (if there was any).  (See section "Insert and
Replace mode" [mode-ins-repl](#mode-ins-repl)).

### <a id="cw cW" class="section-title" href="#cw cW">Note:</a>
Special case: When the cursor is in a word, "cw" and "cW" do not include the
white space after a word, they only change up to the end of the word.  This is
because Vim interprets "cw" as change-word, and a word does not include the
following white space.

If you prefer "cw" to include the space after a word, use this mapping:
```
:map cw dwi
Or use "caw" (see [aw](#aw)).

### <a id=":c :ch :change" class="section-title" href="#:c :ch :change">Note:</a>
:{range}c[hange][!]	Replace lines of text with some different text.
Type a line containing only "." to stop replacing.
Without {range}, this command changes only the current
line.
Adding [!] toggles 'autoindent' for the time this
command is executed.


## <a id="simple-change changing" class="section-title" href="#simple-change changing">3. Simple Changes</a> 

### <a id="r" class="section-title" href="#r">Note:</a>
r{char}			Replace the character under the cursor with {char}.
If {char} is a <CR> or <NL>, a line break replaces the
character.  To replace with a real <CR>, use CTRL-V

```
CR>.  CTRL-V <NL> replaces with a <Nul>.

If {char} is CTRL-E or CTRL-Y the character from the
line below or above is used, just like with [i_CTRL-E](#i_CTRL-E)
and [i_CTRL-Y](#i_CTRL-Y).  This also works with a count, thus
`10r<C-E>` copies 10 characters from the line below.

If you give a [count], Vim replaces [count] characters
with [count] {char}s.  When {char} is a <CR> or <NL>,
however, Vim inserts only one <CR>: "5r<CR>" replaces
five characters with a single line break.
When {char} is a <CR> or <NL>, Vim performs
autoindenting.  This works just like deleting the
characters that are replaced and then doing
"i<CR><Esc>".
{char} can be entered as a digraph [digraph-arg](#digraph-arg).
[:lmap](#:lmap) mappings apply to {char}.  The CTRL-^ command
in Insert mode can be used to switch this on/off
[i_CTRL-^|.  See |utf-8-char-arg](#i_CTRL-^|.  See |utf-8-char-arg) about using
composing characters when 'encoding' is Unicode.

### <a id="gr" class="section-title" href="#gr">Note:</a>
gr{char}		Replace the virtual characters under the cursor with
{char}.  This replaces in screen space, not file
space.  See [gR| and |Virtual-Replace-mode](#gR| and |Virtual-Replace-mode) for more
details.  As with [r](#r) a count may be given.
{char} can be entered like with [r](#r).

### <a id="digraph-arg" class="section-title" href="#digraph-arg">Note:</a>
The argument for Normal mode commands like [r| and |t](#r| and |t) is a single character.
When 'cpo' doesn't contain the 'D' flag, this character can also be entered
like [digraphs](#digraphs).  First type CTRL-K and then the two digraph characters.

### <a id="case" class="section-title" href="#case">Note:</a>
The following commands change the case of letters.  The currently active
[locale| is used.  See |:language](#locale| is used.  See |:language).  The LC_CTYPE value matters here.

### <a id="~" class="section-title" href="#~">Note:</a>
~			'notildeop' option: Switch case of the character
under the cursor and move the cursor to the right.
If a [count] is given, do that many characters.

~{motion}		'tildeop' option: switch case of {motion} text.

### <a id="g~" class="section-title" href="#g~">Note:</a>
g~{motion}		Switch case of {motion} text.

### <a id="g~g~ g~~" class="section-title" href="#g~g~ g~~">g~g~</a>
g~~			Switch case of current line.

### <a id="v_~" class="section-title" href="#v_~">Note:</a>
{Visual}~		Switch case of highlighted text (for {Visual} see
[Visual-mode](#Visual-mode)).

### <a id="v_U" class="section-title" href="#v_U">Note:</a>
{Visual}U		Make highlighted text uppercase (for {Visual} see
[Visual-mode](#Visual-mode)).

### <a id="gU uppercase" class="section-title" href="#gU uppercase">Note:</a>
gU{motion}		Make {motion} text uppercase.
Example:
```
:map! <C-F> <Esc>gUiw`]a

```
			This works in Insert mode: press CTRL-F to make the
word before the cursor uppercase.  Handy to type
words in lowercase and then make them uppercase.


### <a id="gUgU gUU" class="section-title" href="#gUgU gUU">gUgU</a>
gUU			Make current line uppercase.

### <a id="v_u" class="section-title" href="#v_u">Note:</a>
{Visual}u		Make highlighted text lowercase (for {Visual} see
[Visual-mode](#Visual-mode)).

### <a id="gu lowercase" class="section-title" href="#gu lowercase">Note:</a>
gu{motion}		Make {motion} text lowercase.

### <a id="gugu guu" class="section-title" href="#gugu guu">gugu</a>
guu			Make current line lowercase.

### <a id="g? rot13" class="section-title" href="#g? rot13">Note:</a>
g?{motion}		Rot13 encode {motion} text.

### <a id="v_g?" class="section-title" href="#v_g?">Note:</a>
{Visual}g?		Rot13 encode the highlighted text (for {Visual} see
[Visual-mode](#Visual-mode)).

### <a id="g?g? g??" class="section-title" href="#g?g? g??">g?g?</a>
g??			Rot13 encode current line.

To turn one line into title caps, make every first letter of a word
uppercase:
```
:s/\v<(.)(\w*)/\u\1\L\2/g


Adding and subtracting ~
### <a id="CTRL-A" class="section-title" href="#CTRL-A">Note:</a>
CTRL-A			Add [count] to the number or alphabetic character at
or after the cursor.

### <a id="v_CTRL-A" class="section-title" href="#v_CTRL-A">Note:</a>
{Visual}CTRL-A		Add [count] to the number or alphabetic character in
the highlighted text.

### <a id="v_g_CTRL-A" class="section-title" href="#v_g_CTRL-A">Note:</a>
{Visual}g CTRL-A	Add [count] to the number or alphabetic character in
the highlighted text. If several lines are
highlighted, each one will be incremented by an
additional [count] (so effectively creating a
[count] incrementing sequence).
For Example, if you have this list of numbers:
1. ~
1. ~
1. ~
1. ~
Move to the second "1." and Visually select three
lines, pressing g CTRL-A results in:
1. ~
2. ~
3. ~
4. ~

### <a id="CTRL-X" class="section-title" href="#CTRL-X">Note:</a>
CTRL-X			Subtract [count] from the number or alphabetic
character at or after the cursor.

### <a id="v_CTRL-X" class="section-title" href="#v_CTRL-X">Note:</a>
{Visual}CTRL-X		Subtract [count] from the number or alphabetic
character in the highlighted text.

### <a id="v_g_CTRL-X" class="section-title" href="#v_g_CTRL-X">Note:</a>
{Visual}g CTRL-X	Subtract [count] from the number or alphabetic
character in the highlighted text. If several lines
are highlighted, each value will be decremented by an
additional [count] (so effectively creating a [count]
decrementing sequence).

The CTRL-A and CTRL-X commands work for (signed) decimal numbers, unsigned
binary/octal/hexadecimal numbers and alphabetic characters.

This depends on the 'nrformats' option:
- When 'nrformats' includes "bin", Vim assumes numbers starting with '0b' or
'0B' are binary.
- When 'nrformats' includes "octal", Vim considers numbers starting with a '0'
to be octal, unless the number includes a '8' or '9'.  Other numbers are
decimal and may have a preceding minus sign.
If the cursor is on a number, the commands apply to that number; otherwise
Vim uses the number to the right of the cursor.
- When 'nrformats' includes "hex", Vim assumes numbers starting with '0x' or
'0X' are hexadecimal.  The case of the rightmost letter in the number
determines the case of the resulting hexadecimal number.  If there is no
letter in the current number, Vim uses the previously detected case.
- When 'nrformats' includes "alpha", Vim will change the alphabetic character
under or after the cursor.  This is useful to make lists with an alphabetic
index.

For decimals a leading negative sign is considered for incrementing or
decrementing, for binary, octal and hex values, it won't be considered.  To
ignore the sign Visually select the number before using CTRL-A or CTRL-X.

For numbers with leading zeros (including all octal and hexadecimal numbers),
Vim preserves the number of characters in the number when possible.  CTRL-A on
"0077" results in "0100", CTRL-X on "0x100" results in "0x0ff".
There is one exception: When a number that starts with a zero is found not to
be octal (it contains a '8' or '9'), but 'nrformats' does include "octal",
leading zeros are removed to avoid that the result may be recognized as an
octal number.

Note that when 'nrformats' includes "octal", decimal numbers with leading
zeros cause mistakes, because they can be confused with octal numbers.

Note similarly, when 'nrformats' includes "bin", binary numbers with a leading
'0x' or '0X' can be interpreted as hexadecimal rather than binary since '0b'
are valid hexadecimal digits.

The CTRL-A command is very useful in a macro.  Example: Use the following
steps to make a numbered list.

1. Create the first list entry, make sure it starts with a number.
2. qa	     - start recording into register 'a'
3. Y	     - yank the entry
4. p	     - put a copy of the entry below the first one
5. CTRL-A    - increment the number
6. q	     - stop recording
7. <count>@a - repeat the yank, put and increment <count> times


### <a id="shift-left-right" class="section-title" href="#shift-left-right">Shifting Lines Left or Right</a>

### <a id="<" class="section-title" href="#<">Note:</a>

```
{motion}		Shift {motion} lines one 'shiftwidth' leftwards.

If the 'shiftwidth' option is set to zero, the amount
of indent is calculated at the first non-blank
character in the line.
### <a id="<<" class="section-title" href="#<<">Note:</a>

```
<			Shift [count] lines one 'shiftwidth' leftwards.

### <a id="v_<" class="section-title" href="#v_<">Note:</a>
{Visual}[count]<	Shift the highlighted lines [count] 'shiftwidth'
leftwards (for {Visual} see [Visual-mode](#Visual-mode)).

### <a id=">" class="section-title" href="#>">Note:</a>
>{motion}		Shift {motion} lines one 'shiftwidth' rightwards.

If the 'shiftwidth' option is set to zero, the amount
of indent is calculated at the first non-blank
character in the line.
### <a id=">>" class="section-title" href="#>>">Note:</a>
>>			Shift [count] lines one 'shiftwidth' rightwards.

### <a id="v_>" class="section-title" href="#v_>">Note:</a>
{Visual}[count]>	Shift the highlighted lines [count] 'shiftwidth'
rightwards (for {Visual} see [Visual-mode](#Visual-mode)).

### <a id=":<" class="section-title" href="#:<">Note:</a>
:[range]<		Shift [range] lines one 'shiftwidth' left.  Repeat '<'
for shifting multiple 'shiftwidth's.

:[range]< {count}	Shift {count} lines one 'shiftwidth' left, starting
with [range] (default current line [cmdline-ranges](#cmdline-ranges)).
Repeat '<' for shifting multiple 'shiftwidth's.

:[range]le[ft] [indent]	left align lines in [range].  Sets the indent in the
lines to [indent] (default 0).

### <a id=":>" class="section-title" href="#:>">Note:</a>
:[range]> [flags]	Shift {count} [range] lines one 'shiftwidth' right.
Repeat '>' for shifting multiple 'shiftwidth's.
See [ex-flags](#ex-flags) for [flags].

:[range]> {count} [flags]
Shift {count} lines one 'shiftwidth' right, starting
with [range] (default current line [cmdline-ranges](#cmdline-ranges)).
Repeat '>' for shifting multiple 'shiftwidth's.
See [ex-flags](#ex-flags) for [flags].

The ">" and "<" commands are handy for changing the indentation within
programs.  Use the 'shiftwidth' option to set the size of the white space
which these commands insert or delete.  Normally the 'shiftwidth' option is 8,
but you can set it to, say, 3 to make smaller indents.  The shift leftwards
stops when there is no indent.  The shift right does not affect empty lines.

If the 'shiftround' option is on, the indent is rounded to a multiple of
'shiftwidth'.

If the 'smartindent' option is on, or 'cindent' is on and 'cinkeys' contains
'#' with a zero value, shift right does not affect lines starting with '#'
(these are supposed to be C preprocessor lines that must stay in column 1).
This can be changed with the 'cino' option, see [cino-#](#cino-#).

When the 'expandtab' option is off (this is the default) Vim uses <Tab>s as
much as possible to make the indent.  You can use ">><<" to replace an indent
made out of spaces with the same indent made out of <Tab>s (and a few spaces
if necessary).  If the 'expandtab' option is on, Vim uses only spaces.  Then
you can use ">><<" to replace <Tab>s in the indent by spaces (or use
`:retab!`).

To move a line several 'shiftwidth's, use Visual mode or the `:` commands.
For example:
```
Vjj4>		move three lines 4 indents to the right
:<<<		move current line 3 indents to the left
:>> 5		move 5 lines 2 indents to the right
:5>>		move line 5 2 indents to the right


## <a id="complex-change" class="section-title" href="#complex-change">4. Complex Changes</a> 

### <a id="filter" class="section-title" href="#filter">4.1 Filter commands</a>

A filter is a program that accepts text at standard input, changes it in some
way, and sends it to standard output.  You can use the commands below to send
some text through a filter, so that it is replaced by the filter output.
Examples of filters are "sort", which sorts lines alphabetically, and
"indent", which formats C program files (you need a version of indent that
works like a filter; not all versions do).  The 'shell' option specifies the
shell Vim uses to execute the filter command.  You can repeat filter commands
with ".".  Vim does not recognize a comment (starting with '"') after the
`:!` command.

### <a id="!" class="section-title" href="#!">Note:</a>
!{motion}{filter}	Filter {motion} text lines through the external
program {filter}.

### <a id="!!" class="section-title" href="#!!">Note:</a>
!!{filter}		Filter [count] lines through the external program
{filter}.

### <a id="v_!" class="section-title" href="#v_!">Note:</a>
{Visual}!{filter}	Filter the highlighted lines through the external
program {filter} (for {Visual} see [Visual-mode](#Visual-mode)).

### <a id=":range!" class="section-title" href="#:range!">:{range}![!]{filter} [!][arg]</a>
Filter {range} lines through the external program
{filter}.  Vim replaces the optional bangs with the
latest given command and appends the optional [arg].
Vim saves the output of the filter command in a
temporary file and then reads the file into the buffer
[tempfile](#tempfile).  Vim uses the 'shellredir' option to
redirect the filter output to the temporary file.
However, if the 'shelltemp' option is off then pipes
are used when possible (on Unix).
When the 'R' flag is included in 'cpoptions' marks in
the filtered lines are deleted, unless the
[:keepmarks](#:keepmarks) command is used.  Example:
```
:keepmarks '<,'>!sort

```
			When the number of lines after filtering is less than
before, marks in the missing lines are deleted anyway.

### <a id="=" class="section-title" href="#=">Note:</a>
={motion}		Filter {motion} lines through the external program
given with the 'equalprg' option.  When the 'equalprg'
option is empty (this is the default), use the
internal formatting function [C-indenting](#C-indenting) and
['lisp'](#'lisp').  But when 'indentexpr' is not empty, it will
be used instead [indent-expression](#indent-expression).

### <a id="==" class="section-title" href="#==">Note:</a>
==			Filter [count] lines like with ={motion}.

### <a id="v_=" class="section-title" href="#v_=">Note:</a>
{Visual}=		Filter the highlighted lines like with ={motion}.


### <a id="tempfile setuid" class="section-title" href="#tempfile setuid">Note:</a>
Vim uses temporary files for filtering, generating diffs and also for
tempname().  For Unix, the file will be in a private directory (only
accessible by the current user) to avoid security problems (e.g., a symlink
attack or other people reading your file).  When Vim exits the directory and
all files in it are deleted.  When Vim has the setuid bit set this may cause
problems, the temp file is owned by the setuid user but the filter command
probably runs as the original user.
Directory for temporary files is created in the first possible directory of:
Unix:    $TMPDIR, /tmp, current-dir, $HOME.
Windows: $TMPDIR, $TMP, $TEMP, $USERPROFILE, current-dir.



### <a id=":substitute" class="section-title" href="#:substitute">4.2 Substitute</a>
### <a id=":s :su" class="section-title" href="#:s :su">Note:</a>
:[range]s[ubstitute]/{pattern}/{string}/[flags] [count]
For each line in [range] replace a match of {pattern}
with {string}.
For the {pattern} see [pattern](#pattern).
{string} can be a literal string, or something
special; see [sub-replace-special](#sub-replace-special).
When [range] and [count] are omitted, replace in the
current line only.  When [count] is given, replace in
[count] lines, starting with the last line in [range].
When [range] is omitted start in the current line.
### <a id="E939" class="section-title" href="#E939">Note:</a>
[count] must be a positive number.  Also see
[cmdline-ranges](#cmdline-ranges).

See [:s_flags](#:s_flags) for [flags].
The delimiter doesn't need to be /, see
[pattern-delimiter](#pattern-delimiter).

:[range]s[ubstitute] [flags] [count]
### <a id=":&" class="section-title" href="#:&">:[range]&[&][flags] [count]</a>
Repeat last :substitute with same search pattern and
substitute string, but without the same flags.  You
may add [flags], see [:s_flags](#:s_flags).
Note that after `:substitute` the '&' flag can't be
used, it's recognized as a pattern separator.
The space between `:substitute` and the 'c', 'g',
'i', 'I' and 'r' flags isn't required, but in scripts
it's a good idea to keep it to avoid confusion.
Also see the two and three letter commands to repeat
:substitute below [:substitute-repeat](#:substitute-repeat).

### <a id=":~" class="section-title" href="#:~">:[range]~[&][flags] [count]</a>
Repeat last substitute with same substitute string
but with last used search pattern.  This is like
`:&r`.  See [:s_flags](#:s_flags) for [flags].

### <a id="&" class="section-title" href="#&">Note:</a>
&			Synonym for `:s` (repeat last substitute).  Note
that the flags are not remembered, thus it might
actually work differently.  You can use `:&&` to keep
the flags.

### <a id="&-default" class="section-title" href="#&-default">Note:</a>
Mapped to ":&&<CR>" by default. [default-mappings](#default-mappings)

### <a id="g&" class="section-title" href="#g&">Note:</a>
g&			Synonym for `:%s//~/&` (repeat last substitute with
last search pattern on all lines with the same flags).
For example, when you first do a substitution with
`:s/pattern/repl/flags` and then `/search` for
something else, `g&` will do `:%s/search/repl/flags`.
Mnemonic: global substitute.

### <a id=":snomagic :sno" class="section-title" href="#:snomagic :sno">Note:</a>
:[range]sno[magic] ...	Same as `:substitute`, but always use 'nomagic'.

### <a id=":smagic :sm" class="section-title" href="#:smagic :sm">Note:</a>
:[range]sm[agic] ...	Same as `:substitute`, but always use 'magic'.

### <a id=":s_flags" class="section-title" href="#:s_flags">Note:</a>
The flags that you can use for the substitute commands:

### <a id=":&&" class="section-title" href="#:&&">Note:</a>
[&]	Must be the first one: Keep the flags from the previous substitute
command.  Examples:
```
:&&
:s/this/that/&

```
	Note that `:s` and `:&` don't keep the flags.

[c]	Confirm each substitution.  Vim highlights the matching string (with
[hl-IncSearch](#hl-IncSearch)).  You can type:				*:s_c*
'y'	    to substitute this match
'l'	    to substitute this match and then quit ("last")
'n'	    to skip this match

```
Esc>   to quit substituting
'a'	    to substitute this and all remaining matches
'q'	    to quit substituting
CTRL-E  to scroll the screen up
CTRL-Y  to scroll the screen down

### <a id=":s_e" class="section-title" href="#:s_e">Note:</a>
[e]     When the search pattern fails, do not issue an error message and, in
particular, continue in maps as if no error occurred.  This is most
useful to prevent the "No match" error from breaking a mapping.  Vim
does not suppress the following error messages, however:
Regular expressions can't be delimited by letters
\ should be followed by /, ? or &
No previous substitute regular expression
Trailing characters
Interrupted

### <a id=":s_g" class="section-title" href="#:s_g">Note:</a>
[g]	Replace all occurrences in the line.  Without this argument,
replacement occurs only for the first occurrence in each line.  If the
'gdefault' option is on, this flag is on by default and the [g]
argument switches it off.

### <a id=":s_i" class="section-title" href="#:s_i">Note:</a>
[i]	Ignore case for the pattern.  The 'ignorecase' and 'smartcase' options
are not used.

### <a id=":s_I" class="section-title" href="#:s_I">Note:</a>
[I]	Don't ignore case for the pattern.  The 'ignorecase' and 'smartcase'
options are not used.

### <a id=":s_n" class="section-title" href="#:s_n">Note:</a>
[n]	Report the number of matches, do not actually substitute.  The [c]
flag is ignored.  The matches are reported as if 'report' is zero.
Useful to [count-items](#count-items).
If \= [sub-replace-expression](#sub-replace-expression) is used, the expression will be
evaluated in the [sandbox](#sandbox) at every match.

### <a id=":s_p" class="section-title" href="#:s_p">[p]	Print the line containing the last substitute.</a>

### <a id=":s_#" class="section-title" href="#:s_#">[#]	Like [p] and prepend the line number.</a>

### <a id=":s_l" class="section-title" href="#:s_l">[l]	Like [p] but print the text like [:list](#:list).</a>

### <a id=":s_r" class="section-title" href="#:s_r">Note:</a>
[r]	Only useful in combination with `:&` or `:s` without arguments.  `:&r`
works the same way as `:~`:  When the search pattern is empty, use the
previously used search pattern instead of the search pattern from the
last substitute or `:global`.  If the last command that did a search
was a substitute or `:global`, there is no effect.  If the last
command was a search command such as "/", use the pattern from that
command.
For `:s` with an argument this already happens:
```
:s/blue/red/
/green
:s//red/   or  :~   or  :&r

```
	The last commands will replace "green" with "red".
```
:s/blue/red/
/green
:&

```
	The last command will replace "blue" with "red".

Note that there is no flag to change the "magicness" of the pattern.  A
different command is used instead, or you can use [/\v](#/\v) and friends.  The
reason is that the flags can only be found by skipping the pattern, and in
order to skip the pattern the "magicness" must be known.  Catch 22!

If the {pattern} for the substitute command is empty, the command uses the
pattern from the last substitute or `:global` command.  If there is none, but
there is a previous search pattern, that one is used.  With the [r] flag, the
command uses the pattern from the last substitute, `:global`, or search
command.

If the {string} is omitted the substitute is done as if it's empty.  Thus the
matched pattern is deleted.  The separator after {pattern} can also be left
out then.  Example:
```
:%s/TESTING
This deletes "TESTING" from all lines, but only one per line.

For compatibility with Vi these two exceptions are allowed:
"\/{string}/" and "\?{string}?" do the same as "//{string}/r".
"\&{string}&" does the same as "//{string}/".
### <a id="pattern-delimiter E146" class="section-title" href="#pattern-delimiter E146">Note:</a>
Instead of the '/' which surrounds the pattern and replacement string, you can
use another single-byte character.  This is useful if you want to include a
'/' in the search pattern or replacement string.  Example:
```
:s+/+//+

You can use most characters, but not an alphanumeric character, '\', '"' or
'|'.

For the definition of a pattern, see [pattern](#pattern).  In Visual block mode, use
[/\%V](#/\%V) in the pattern to have the substitute work in the block only.
Otherwise it works on whole lines anyway.

### <a id="sub-replace-special :s\=" class="section-title" href="#sub-replace-special :s\=">Note:</a>
When the {string} starts with "\=" it is evaluated as an expression, see
[sub-replace-expression](#sub-replace-expression).  You can use that for complex replacement or special
characters.

The substitution is limited in recursion to 4 levels. *E1290*

Otherwise these characters in {string} have a special meaning:

magic	nomagic	  action    ~
&	  \&	  replaced with the whole matched pattern	     *s/\&*
\&	   &	  replaced with &
\0	  replaced with the whole matched pattern	   *\0* *s/\0*
\1	  replaced with the matched pattern in the first
pair of ()					     *s/\1*
\2	  replaced with the matched pattern in the second
pair of ()					     *s/\2*
..	  ..						     *s/\3*
\9	  replaced with the matched pattern in the ninth
pair of ()					     *s/\9*
~	  \~	  replaced with the {string} of the previous
substitute					     *s~*
\~	   ~	  replaced with ~				     *s/\~*
\u	  next character made uppercase			     *s/\u*
\U	  following characters made uppercase, until \E      *s/\U*
\l	  next character made lowercase			     *s/\l*
\L	  following characters made lowercase, until \E      *s/\L*
\e	  end of \u, \U, \l and \L (NOTE: not <Esc>!)	     *s/\e*
\E	  end of \u, \U, \l and \L			     *s/\E*

```
CR>	  split line in two at this point
(Type the <CR> as CTRL-V <Enter>)		     *s<CR>*
\r	  idem						     *s/\r*
\<CR>	  insert a carriage-return (CTRL-M)
(Type the <CR> as CTRL-V <Enter>)		     *s/\<CR>*
\n	  insert a <NL> (<NUL> in the file)
(does NOT break the line)			     *s/\n*
\b	  insert a <BS>					     *s/\b*
\t	  insert a <Tab>				     *s/\t*
\\	  insert a single backslash			     *s/\\*
\x	  where x is any character not mentioned above:
Reserved for future expansion

The special meaning is also used inside the third argument {sub} of
the [substitute()](#substitute()) function with the following exceptions:
- A % inserts a percent literally without regard to 'cpoptions'.
- magic is always set without regard to 'magic'.
- A ~ inserts a tilde literally.
- <CR> and \r inserts a carriage-return (CTRL-M).
- \<CR> does not have a special meaning. It's just one of \x.

Examples:
```
:s/a\|b/xxx\0xxx/g		 modifies "a b"	     to "xxxaxxx xxxbxxx"
:s/\([abc]\)\([efg]\)/\2\1/g	 modifies "af fa bg" to "fa fa gb"
:s/abcde/abc^Mde/		 modifies "abcde"    to "abc", "de" (two lines)
:s/$/\^M/			 modifies "abcde"    to "abcde^M"
:s/\w\+/\u\0/g		 modifies "bla bla"  to "Bla Bla"
:s/\w\+/\L\u\0/g		 modifies "BLA bla"  to "Bla Bla"

Note: "\L\u" can be used to capitalize the first letter of a word.  This is
not compatible with Vi and older versions of Vim, where the "\u" would cancel
out the "\L". Same for "\U\l".

Note: In previous versions CTRL-V was handled in a special way.  Since this is
not Vi compatible, this was removed.  Use a backslash instead.

command		text	result ~
:s/aa/a^Ma/	aa	a<line-break>a
:s/aa/a\^Ma/	aa	a^Ma
:s/aa/a\\^Ma/	aa	a\<line-break>a

(you need to type CTRL-V <CR> to get a ^M here)

The numbering of "\1", "\2" etc. is done based on which "\(" comes first in
the pattern (going left to right).  When a parentheses group matches several
times, the last one will be used for "\1", "\2", etc.  Example:
```
### <a id=":s/\(\(a[a-d] \)\)/\2/" class="section-title" href="#:s/\(\(a[a-d] \)\)/\2/">Note:</a>
The "\2" is for "\(a[a-d] \)".  At first it matches "aa ", secondly "ab ".

When using parentheses in combination with '[', like in \([ab]\)\](#', like in \([ab]\)\)\([cd]\),
either the first or second pattern in parentheses did not match, so either
\1 or \2 is empty.  Example:
```
:s/\([ab]\)\|\([cd]\)/\1x/g   modifies "a b c d"  to "ax bx x x"

```


### <a id=":sc :sce :scg :sci :scI :scl :scp :sg :sgc" class="section-title" href="#:sc :sce :scg :sci :scI :scl :scp :sg :sgc">Note:</a>
### <a id=":sge :sgi :sgI :sgl :sgn :sgp :sgr :sI :si" class="section-title" href="#:sge :sgi :sgI :sgl :sgn :sgp :sgr :sI :si">Note:</a>
### <a id=":sic :sIc :sie :sIe :sIg :sIl :sin :sIn :sIp" class="section-title" href="#:sic :sIc :sie :sIe :sIg :sIl :sin :sIn :sIp">Note:</a>
### <a id=":sip :sIr :sir :sr :src :srg :sri :srI :srl" class="section-title" href="#:sip :sIr :sir :sr :src :srg :sri :srI :srl">Note:</a>
### <a id=":srn :srp :substitute-repeat" class="section-title" href="#:srn :srp :substitute-repeat">Note:</a>
2-letter and 3-letter :substitute commands ~

These commands repeat the previous `:substitute` command with the given flags.
The first letter is always "s", followed by one or two of the possible flag
characters.  For example `:sce` works like `:s///ce`.  The table lists the
possible combinations, not all flags are possible, because the command is
short for another command.

List of :substitute commands
|      c    e    g    i    I    n    p    l    r
| c  :sc  :sce :scg :sci :scI :scn :scp :scl
| e
| g  :sgc :sge :sg  :sgi :sgI :sgn :sgp :sgl :sgr
| i  :sic :sie      :si  :siI :sin :sip      :sir
| I  :sIc :sIe :sIg :sIi :sI  :sIn :sIp :sIl :sIr
| n
| p
| l
| r  :src      :srg :sri :srI :srn :srp :srl :sr

Exceptions:
:scr  is  `:scriptnames`
:se   is  `:set`
:sig  is  `:sign`
:sil  is  `:silent`
:sn   is  `:snext`
:sp   is  `:split`
:sl   is  `:sleep`
:sre  is  `:srewind`


### <a id="sub-replace-expression" class="section-title" href="#sub-replace-expression">Substitute with an expression</a>
### <a id="sub-replace-\= s/\=" class="section-title" href="#sub-replace-\= s/\=">Note:</a>
When the substitute string starts with "\=" the remainder is interpreted as an
expression.

The special meaning for characters as mentioned at [sub-replace-special](#sub-replace-special) does
not apply except for "<CR>".  A <NL> character is used as a line break, you
can get one with a double-quote string: "\n".  Prepend a backslash to get a
real <NL> character (which will be a NUL in the file).

The "\=" notation can also be used inside the third argument {sub} of
[substitute()](#substitute()) function.  In this case, the special meaning for characters as
mentioned at [sub-replace-special](#sub-replace-special) does not apply at all. Especially, <CR> and

```
NL> are interpreted not as a line break but as a carriage-return and a
new-line respectively.

When the result is a [List](#List) then the items are joined with separating line
breaks.  Thus each item becomes a line, except that they can contain line
breaks themselves.

The [submatch()](#submatch()) function can be used to obtain matched text.  The whole
matched text can be accessed with "submatch(0)".  The text matched with the
first pair of () with "submatch(1)".  Likewise for further sub-matches in ().

Be careful: The separation character must not appear in the expression!
Consider using a character like "@" or ":".  There is no problem if the result
of the expression contains the separation character.

Examples:
```
:s@\n@\="\r" .. expand("$HOME") .. "\r"@
This replaces an end-of-line with a new line containing the value of $HOME.
```

s/E/\="\<Char-0x20ac>"/g
This replaces each 'E' character with a euro sign.  Read more in [<Char->](#<Char->).


### <a id="change-tabs" class="section-title" href="#change-tabs">4.3 Changing tabs</a>
### <a id=":ret :retab :retab!" class="section-title" href="#:ret :retab :retab!">Note:</a>
:[range]ret[ab][!] [new_tabstop]
Replace all sequences of white-space containing a

```
Tab> with new strings of white-space using the new
tabstop value given.  If you do not specify a new
tabstop size or it is zero, Vim uses the current value
of 'tabstop'.
The current value of 'tabstop' is always used to
compute the width of existing tabs.
With !, Vim also replaces strings of only normal
spaces with tabs where appropriate.
With 'expandtab' on, Vim replaces all tabs with the
appropriate number of spaces.
This command sets 'tabstop' to the new value given,
and if performed on the whole file, which is default,
should not make any visible change.
Careful: This command modifies any <Tab> characters
inside of strings in a C program.  Use "\t" to avoid
this (that's a good habit anyway).
`:retab!` may also change a sequence of spaces by

```
Tab> characters, which can mess up a printf().
A list of tab widths separated by commas may be used
in place of a single tabstop.  Each value in the list
represents the width of one tabstop, except the final
value which applies to all following tabstops.

### <a id="retab-example" class="section-title" href="#retab-example">Note:</a>
Example for using autocommands and ":retab" to edit a file which is stored
with tabstops at 8 but edited with tabstops set at 4.  Warning: white space
inside of strings can change!  Also see 'softtabstop' option.
```

### <a id=":auto BufReadPost	.xx	retab! 4" class="section-title" href="#:auto BufReadPost	.xx	retab! 4">Note:</a>
### <a id=":auto BufWritePre	.xx	retab! 8" class="section-title" href="#:auto BufWritePre	.xx	retab! 8">Note:</a>
### <a id=":auto BufWritePost	.xx	retab! 4" class="section-title" href="#:auto BufWritePost	.xx	retab! 4">Note:</a>
### <a id=":auto BufNewFile	.xx	set ts=4" class="section-title" href="#:auto BufNewFile	.xx	set ts=4">Note:</a>


## <a id="copy-move" class="section-title" href="#copy-move">5. Copying and Moving Text</a> 

### <a id="quote" class="section-title" href="#quote">Note:</a>
"{register}		Use {register} for next delete, yank or put.  Use
an uppercase character to append with delete and yank.
Registers ".", "%", "#" and ":" only work with put.

### <a id=":reg :registers" class="section-title" href="#:reg :registers">Note:</a>
:reg[isters]		Display the type and contents of all numbered and
named registers.  If a register is written to for
[:redir](#:redir) it will not be listed.
Type can be one of:
"c"	for [characterwise](#characterwise) text
"l"	for [linewise](#linewise) text
"b"	for [blockwise-visual](#blockwise-visual) text


:reg[isters] {arg}	Display the contents of the numbered and named
registers that are mentioned in {arg}.  For example:
```
:reg 1a

```
			to display registers '1' and 'a'.  Spaces are allowed
in {arg}.

### <a id=":di :display" class="section-title" href="#:di :display">Note:</a>
:di[splay] [arg]	Same as :registers.

### <a id="y yank" class="section-title" href="#y yank">Note:</a>
["x]y{motion}		Yank {motion} text [into register x].  When no
characters are to be yanked (e.g., "y0" in column 1),
this is an error when 'cpoptions' includes the 'E'
flag.

### <a id="yy" class="section-title" href="#yy">Note:</a>
["x]yy			Yank [count] lines [into register x] [linewise](#linewise).

### <a id="Y" class="section-title" href="#Y">Note:</a>
["x]Y			yank [count] lines [into register x] (synonym for
yy, [linewise](#linewise)).
### <a id="Y-default" class="section-title" href="#Y-default">Note:</a>
Mapped to "y$" by default. [default-mappings](#default-mappings)

### <a id="zy" class="section-title" href="#zy">Note:</a>
["x]zy{motion}		Yank {motion} text [into register x].  Only differs
from `y` when selecting a block of text, see [v_zy](#v_zy).

### <a id="v_y" class="section-title" href="#v_y">Note:</a>
{Visual}["x]y		Yank the highlighted text [into register x] (for
{Visual} see [Visual-mode](#Visual-mode)).

### <a id="v_Y" class="section-title" href="#v_Y">Note:</a>
{Visual}["x]Y		Yank the highlighted lines [into register x] (for
{Visual} see [Visual-mode](#Visual-mode)).

### <a id="v_zy" class="section-title" href="#v_zy">Note:</a>
{Visual}["x]zy		Yank the highlighted text [into register x].  Trailing
whitespace at the end of each line of a selected block
won't be yanked.  Especially useful in combination
with `zp`.  (for {Visual} see [Visual-mode](#Visual-mode))

### <a id=":y :yank E850" class="section-title" href="#:y :yank E850">Note:</a>
:[range]y[ank] [x]	Yank [range] lines [into register x].

:[range]y[ank] [x] {count}
Yank {count} lines, starting with last line number
in [range] (default: current line [cmdline-ranges](#cmdline-ranges)),
[into register x].

### <a id="p put E353 E1240" class="section-title" href="#p put E353 E1240">Note:</a>
["x]p			Put the text [from register x] after the cursor
[count] times.

### <a id="P" class="section-title" href="#P">Note:</a>
["x]P			Put the text [from register x] before the cursor
[count] times.

### <a id="<MiddleMouse>" class="section-title" href="#<MiddleMouse>">Note:</a>
["x]<MiddleMouse>	Put the text from a register before the cursor [count]
times.  Uses the "* register, unless another is
specified.
Leaves the cursor at the end of the new text.
Using the mouse only works when 'mouse' contains 'n'
or 'a'.
If you have a scrollwheel and often accidentally paste
text, you can use these mappings to disable the
pasting with the middle mouse button:
```
:map <MiddleMouse> <Nop>
:imap <MiddleMouse> <Nop>

```
			You might want to disable the multi-click versions
too, see [double-click](#double-click).

### <a id="gp" class="section-title" href="#gp">Note:</a>
["x]gp			Just like "p", but leave the cursor just after the new
text.

### <a id="gP" class="section-title" href="#gP">Note:</a>
["x]gP			Just like "P", but leave the cursor just after the new
text.

### <a id=":pu :put" class="section-title" href="#:pu :put">Note:</a>
:[line]pu[t] [x]	Put the text [from register x] after [line] (default
current line).  This always works [linewise](#linewise), thus
this command can be used to put a yanked block as new
lines.
If no register is specified, it depends on the 'cb'
option: If 'cb' contains "unnamedplus", paste from the
+ register [quoteplus](#quoteplus).  Otherwise, if 'cb' contains
### <a id=""unnamed", paste from the  register [quotestar|." class="section-title" href="#"unnamed", paste from the  register |quotestar](#quotestar|." class="section-title" href="#"unnamed", paste from the  register |quotestar).">Note:</a>
Otherwise, paste from the unnamed register
[quote_quote](#quote_quote).
The register can also be '=' followed by an optional
expression.  The expression continues until the end of
the command.  You need to escape the '|' and '"'
characters to prevent them from terminating the
command.  Example:
```
:put ='path' .. \",/test\"

```
			If there is no expression after '=', Vim uses the
previous expression.  You can see it with ":dis =".

:[line]pu[t]! [x]	Put the text [from register x] before [line] (default
current line).

["x]]p		    or					*]p* *]<MiddleMouse>*
["x]]<MiddleMouse>	Like "p", but adjust the indent to the current line.
Using the mouse only works when 'mouse' contains 'n'
or 'a'.

["x][P		    or					*[P*
["x]]P		    or					*]P*
["x][p		    or					*[p* *[<MiddleMouse>*
["x][<MiddleMouse>	Like "P", but adjust the indent to the current line.
Using the mouse only works when 'mouse' contains 'n'
or 'a'.

["x]zp		    or					*zp* *zP*
["x]zP			Like "p" and "P", except without adding trailing spaces
when pasting a block.  Thus the inserted text will not
always be a rectangle.  Especially useful in
combination with [v_zy](#v_zy).

You can use these commands to copy text from one place to another.  Do this
by first getting the text into a register with a yank, delete or change
command, then inserting the register contents with a put command.  You can
also use these commands to move text from one file to another, because Vim
preserves all registers when changing buffers (the CTRL-^ command is a quick
way to toggle between two files).

### <a id="linewise-register charwise-register" class="section-title" href="#linewise-register charwise-register">Note:</a>
You can repeat the put commands with "." (except for :put) and undo them.  If
the command that was used to get the text into the register was [linewise](#linewise),
Vim inserts the text below ("p") or above ("P") the line where the cursor is.
Otherwise Vim inserts the text after ("p") or before ("P") the cursor.  With
the ":put" command, Vim always inserts the text in the next line.  You can
exchange two characters with the command sequence "xp".  You can exchange two
lines with the command sequence "ddp".  You can exchange two words with the
command sequence "deep" (start with the cursor in the blank space before the
first word).  You can use the "']" or "`]" command after the put command to
move the cursor to the end of the inserted text, or use "'[" or "`[" to move
the cursor to the start.

### <a id="put-Visual-mode v_p v_P" class="section-title" href="#put-Visual-mode v_p v_P">Note:</a>
When using a put command like [p| or |P](#p| or |P) in Visual mode, Vim will try to
replace the selected text with the contents of the register.  Whether this
works well depends on the type of selection and the type of the text in the
register.  With blockwise selection it also depends on the size of the block
and whether the corners are on an existing character.  (Implementation detail:
it actually works by first putting the register after the selection and then
deleting the selection.)
With [p](#p) the previously selected text is put in the unnamed register (and
possibly the selection and/or clipboard).  This is useful if you want to put
that text somewhere else.  But you cannot repeat the same change.
With [P](#P) the unnamed register is not changed (and neither the selection or
clipboard), you can repeat the same change. But the deleted text cannot be
used.  If you do need it you can use [p](#p) with another register.  E.g., yank
the text to copy, Visually select the text to replace and use "0p .  You can
repeat this as many times as you like, and the unnamed register will be
changed each time.
### <a id="blockwise-put" class="section-title" href="#blockwise-put">Note:</a>
When a register contains text from one line (characterwise), using a
blockwise Visual selection, putting that register will paste that text
repeatedly in each of the selected lines, thus replacing the blockwise
selected region by multiple copies of the register text.  For example:
- yank the word "TEXT" into a register with `yw`
- select a visual block, marked with "v" in this text:
aaavvaaa
bbbvvbbb
cccvvccc
- press `p`, results in:
aaaTEXTaaa
bbbTEXTbbb
cccTEXTccc

### <a id="blockwise-register" class="section-title" href="#blockwise-register">Note:</a>
If you use a blockwise Visual mode command to get the text into the register,
the block of text will be inserted before ("P") or after ("p") the cursor
column in the current and next lines.  Vim makes the whole block of text start
in the same column.  Thus the inserted text looks the same as when it was
yanked or deleted.  Vim may replace some <Tab> characters with spaces to make
this happen.  However, if the width of the block is not a multiple of a <Tab>
width and the text after the inserted block contains <Tab>s, that text may be
misaligned.

Use [zP|/|zp](#zP|/|zp) to paste a blockwise yanked register without appending trailing
spaces.

Note that after a charwise yank command, Vim leaves the cursor on the first
yanked character that is closest to the start of the buffer.  This means that
"yl" doesn't move the cursor, but "yh" moves the cursor one character left.
Rationale:	In Vi the "y" command followed by a backwards motion would
sometimes not move the cursor to the first yanked character,
because redisplaying was skipped.  In Vim it always moves to
the first character, as specified by Posix.
With a linewise yank command the cursor is put in the first line, but the
column is unmodified, thus it may not be on the first yanked character.

### <a id="registers {register} E354" class="section-title" href="#registers {register} E354">There are ten types of registers:</a>
1. The unnamed register ""
2. 10 numbered registers "0 to "9
3. The small delete register "-
4. 26 named registers "a to "z or "A to "Z
5. Three read-only registers ":, "., "%
6. Alternate buffer register "#
7. The expression register "=
8. The selection registers "* and "+
9. The black hole register "_
10. Last search pattern register "/

### <a id="quote_quote quotequote" class="section-title" href="#quote_quote quotequote">1. Unnamed register ""</a>
Vim fills this register with text deleted with the "d", "c", "s", "x" commands
or copied with the yank "y" command, regardless of whether or not a specific
register was used (e.g.  "xdd).  This is like the unnamed register is pointing
to the last used register.  Thus when appending using an uppercase register
name, the unnamed register contains the same text as the named register.
An exception is the '_' register: "_dd does not store the deleted text in any
register.
Vim uses the contents of the unnamed register for any put command (p or P)
which does not specify a register.  Additionally you can access it with the
name '"'.  This means you have to type two double quotes.  Writing to the ""
register writes to register "0.

### <a id="quote_number quote0 quote1" class="section-title" href="#quote_number quote0 quote1">2. Numbered registers "0 to "9</a>
### <a id="quote2 quote3 quote4 quote9" class="section-title" href="#quote2 quote3 quote4 quote9">Note:</a>
Vim fills these registers with text from yank and delete commands.
Numbered register 0 contains the text from the most recent yank command,
unless the command specified another register with ["x].
Numbered register 1 contains the text deleted by the most recent delete or
change command, unless the command specified another register or the text is
less than one line (the small delete register is used then).  An exception is
made for the delete operator with these movement commands: [%|, |(|, |)|, |`](#%|, |(|, |)|, |`),
[/|, |?|, |n|, |N|, |{| and |}](#/|, |?|, |n|, |N|, |{| and |}).  Register "1 is always used then (this is Vi
compatible).  The "- register is used as well if the delete is within a line.
Note that these characters may be mapped.  E.g. [%](#%) is mapped by the matchit
plugin.
With each successive deletion or change, Vim shifts the previous contents
of register 1 into register 2, 2 into 3, and so forth, losing the previous
contents of register 9.

### <a id="quote_- quote-" class="section-title" href="#quote_- quote-">3. Small delete register "-</a>
This register contains text from commands that delete less than one line,
except when the command specifies a register with ["x].

### <a id="quote_alpha quotea" class="section-title" href="#quote_alpha quotea">4. Named registers "a to "z or "A to "Z</a>
Vim fills these registers only when you say so.  Specify them as lowercase
letters to replace their previous contents or as uppercase letters to append
to their previous contents.  When the '>' flag is present in 'cpoptions' then
a line break is inserted before the appended text.

5. Read-only registers ":, ". and "%
These are '%', ':' and '.'.  You can use them only with the "p", "P",
and ":put" commands and with CTRL-R.
### <a id="quote_. quote. E29" class="section-title" href="#quote_. quote. E29">Note:</a>
".	Contains the last inserted text (the same as what is inserted
with the insert mode commands CTRL-A and CTRL-@).  Note: this
doesn't work with CTRL-R on the command-line.  It works a bit
differently, like inserting the text instead of putting it
('textwidth' and other options affect what is inserted).
### <a id="quote_% quote%" class="section-title" href="#quote_% quote%">Note:</a>
"%	Contains the name of the current file.
### <a id="quote_: quote: E30" class="section-title" href="#quote_: quote: E30">Note:</a>
":	Contains the most recent executed command-line.  Example: Use
"@:" to repeat the previous command-line command.
The command-line is only stored in this register when at least
one character of it was typed.  Thus it remains unchanged if
the command was completely from a mapping.

### <a id="quote_# quote#" class="section-title" href="#quote_# quote#">Note:</a>
6. Alternate file register "#
Contains the name of the alternate file for the current window.  It will
change how the [CTRL-^](#CTRL-^) command works.
This register is writable, mainly to allow for restoring it after a plugin has
changed it.  It accepts buffer number:
```
let altbuf = bufnr(@#)
...
let @# = altbuf
It will give error [E86](#E86) if you pass buffer number and this buffer does not
exist.
It can also accept a match with an existing buffer name:
```
let @# = 'buffer_name'
Error [E93| if there is more than one buffer matching the given name or |E94](#E93| if there is more than one buffer matching the given name or |E94)
if none of buffers matches the given name.

### <a id="quote_= quote= @=" class="section-title" href="#quote_= quote= @=">7. Expression register "=</a>
This is not really a register that stores text, but is a way to use an
expression in commands which use a register.  The expression register is
read-write.

When typing the '=' after " or CTRL-R the cursor moves to the command-line,
where you can enter any expression (see [expression](#expression)).  All normal
command-line editing commands are available, including a special history for
expressions.  When you end the command-line by typing <CR>, Vim computes the
result of the expression.  If you end it with <Esc>, Vim abandons the
expression.  If you do not enter an expression, Vim uses the previous
expression (like with the "/" command).

The expression must evaluate to a String.  A Number is always automatically
converted to a String.  For the "p" and ":put" command, if the result is a
Float it's converted into a String.  If the result is a List each element is
turned into a String and used as a line.  A Dictionary or FuncRef results in
an error message (use string() to convert).

If the "= register is used for the "p" command, the String is split up at <NL>
characters.  If the String ends in a <NL>, it is regarded as a linewise
register.

8. Selection registers "* and "+
Use these registers for storing and retrieving the selected text for the GUI.
See [quotestar| and |quoteplus](#quotestar| and |quoteplus).  When the clipboard is not available or not
working, the unnamed register is used instead.  For Unix systems and Mac OS X,
see [primary-selection](#primary-selection).

### <a id="quote_" class="section-title" href="#quote_">9. Black hole register "_</a>
When writing to this register, nothing happens.  This can be used to delete
text without affecting the normal registers.  When reading from this register,
nothing is returned.

### <a id="quote_/ quote/" class="section-title" href="#quote_/ quote/">10. Last search pattern register	"/</a>
Contains the most recent search-pattern.  This is used for "n" and 'hlsearch'.
It is writable with `:let`, you can change it to have 'hlsearch' highlight
other matches without actually searching.  You can't yank or delete into this
register.  The search direction is available in [v:searchforward](#v:searchforward).
Note that the value is restored when returning from a function
[function-search-undo](#function-search-undo).

### <a id="@/" class="section-title" href="#@/">Note:</a>
You can write to a register with a `:let` command [:let-@](#:let-@).  Example:
```
:let @/ = "the"

If you use a put command without specifying a register, Vim uses the register
that was last filled (this is also the contents of the unnamed register).  If
you are confused, use the `:dis` command to find out what Vim will put (this
command displays all named and numbered registers; the unnamed register is
labelled '"').

The next three commands always work on whole lines.

### <a id=":co :copy" class="section-title" href="#:co :copy">:[range]co[py] {address}</a>
Copy the lines given by [range] to below the line
given by {address}.

### <a id=":t" class="section-title" href="#:t">Note:</a>
:t			Synonym for copy.

### <a id=":m :mo :move E134" class="section-title" href="#:m :mo :move E134">:[range]m[ove] {address}</a>
Move the lines given by [range] to below the line
given by {address}.


## <a id="formatting" class="section-title" href="#formatting">6. Formatting Text</a> 

### <a id=":ce :center" class="section-title" href="#:ce :center">:[range]ce[nter] [width]</a>
Center lines in [range] between [width] columns
(default 'textwidth' or 80 when 'textwidth' is 0).

### <a id=":ri :right" class="section-title" href="#:ri :right">:[range]ri[ght] [width]</a>
Right-align lines in [range] at [width] columns
(default 'textwidth' or 80 when 'textwidth' is 0).

### <a id=":le :left" class="section-title" href="#:le :left">Note:</a>
:[range]le[ft] [indent]
Left-align lines in [range].  Sets the indent in the
lines to [indent] (default 0).

### <a id="gq" class="section-title" href="#gq">Note:</a>
gq{motion}		Format the lines that {motion} moves over.
Formatting is done with one of three methods:
1. If 'formatexpr' is not empty the expression is
evaluated.  This can differ for each buffer.
2. If 'formatprg' is not empty an external program
is used.
3. Otherwise formatting is done internally.

In the third case the 'textwidth' option controls the
length of each formatted line (see below).
If the 'textwidth' option is 0, the formatted line
length is the screen width (with a maximum width of
79).
The 'formatoptions' option controls the type of
formatting [fo-table](#fo-table).
The cursor is left on the first non-blank of the last
formatted line.
NOTE: The "Q" command formerly performed this
function.  If you still want to use "Q" for
formatting, use this mapping:
```
:nnoremap Q gq

### <a id="gqgq gqq" class="section-title" href="#gqgq gqq">gqgq</a>
gqq			Format the current line.  With a count format that
many lines.

### <a id="v_gq" class="section-title" href="#v_gq">Note:</a>
{Visual}gq		Format the highlighted text.  (for {Visual} see
[Visual-mode](#Visual-mode)).

### <a id="gw" class="section-title" href="#gw">Note:</a>
gw{motion}		Format the lines that {motion} moves over.  Similar to
[gq](#gq) but puts the cursor back at the same position in
the text.  However, 'formatprg' and 'formatexpr' are
not used.

### <a id="gwgw gww" class="section-title" href="#gwgw gww">gwgw</a>
gww			Format the current line as with "gw".

### <a id="v_gw" class="section-title" href="#v_gw">Note:</a>
{Visual}gw		Format the highlighted text as with "gw".  (for
{Visual} see [Visual-mode](#Visual-mode)).

### <a id="gqap" class="section-title" href="#gqap">Example: To format the current paragraph use:</a>
gqap

The "gq" command leaves the cursor in the line where the motion command takes
the cursor.  This allows you to repeat formatting repeated with ".".  This
works well with "gqj" (format current and next line) and "gq}" (format until
end of paragraph).  Note: When 'formatprg' is set, "gq" leaves the cursor on
the first formatted line (as with using a filter command).

If you want to format the current paragraph and continue where you were, use:
```
gwap
If you always want to keep paragraphs formatted you may want to add the 'a'
flag to 'formatoptions'.  See [auto-format](#auto-format).

If the 'autoindent' option is on, Vim uses the indent of the first line for
the following lines.

Formatting does not change empty lines (but it does change lines with only
white space!).

The 'joinspaces' option is used when lines are joined together.

You can set the 'formatexpr' option to an expression or the 'formatprg' option
to the name of an external program for Vim to use for text formatting.  The
'textwidth' and other options have no effect on formatting by an external
program.

### <a id="format-formatexpr" class="section-title" href="#format-formatexpr">Note:</a>
The 'formatexpr' option can be set to a Vim script function that performs
reformatting of the buffer.  This should usually happen in an [ftplugin](#ftplugin),
since formatting is highly dependent on the type of file.  It makes
sense to use an [autoload](#autoload) script, so the corresponding script is only loaded
when actually needed and the script should be called <filetype>format.vim.

For example, the XML filetype plugin distributed with Vim in the $VIMRUNTIME
directory, sets the 'formatexpr' option to:
```

setlocal formatexpr=xmlformat#Format()

That means, you will find the corresponding script, defining the
xmlformat#Format() function, in the directory:
`$VIMRUNTIME/autoload/xmlformat.vim`

Here is an example script that removes trailing whitespace from the selected
text.  Put it in your autoload directory, e.g. ~/.vim/autoload/format.vim:
```

func! format#Format()
" only reformat on explicit gq command
if mode() != 'n'
" fall back to Vim's internal reformatting
return 1
endif
let lines = getline(v:lnum, v:lnum + v:count - 1)
call map(lines, {key, val -> substitute(val, '\s\+$', '', 'g')})
call setline('.', lines)

" do not run internal formatter!
return 0
endfunc

You can then enable the formatting by executing:
```
setlocal formatexpr=format#Format()

Note: this function explicitly returns non-zero when called from insert mode
(which basically means, text is inserted beyond the 'textwidth' limit).  This
causes Vim to fall back to reformat the text by using the internal formatter.

However, if the [gq](#gq) command is used to reformat the text, the function
will receive the selected lines, trim trailing whitespace from those lines and
put them back in place.  If you are going to split single lines into multiple
lines, be careful not to overwrite anything.

If you want to allow reformatting of text from insert or replace mode, one has
to be very careful, because the function might be called recursively.  For
debugging it helps to set the 'debug' option.

### <a id="right-justify" class="section-title" href="#right-justify">Note:</a>
There is no command in Vim to right justify text.  You can do it with
an external command, like "par" (e.g.: "!}par" to format until the end of the
paragraph) or set 'formatprg' to "par".

### <a id="format-comments" class="section-title" href="#format-comments">Note:</a>
An overview of comment formatting is in section [30.6](#30.6) of the user manual.

Vim can automatically insert and format comments in a special way.  Vim
recognizes a comment by a specific string at the start of the line (ignoring
white space).  Three types of comments can be used:

- A comment string that repeats at the start of each line.  An example is the
type of comment used in shell scripts, starting with "#".
- A comment string that occurs only in the first line, not in the following
lines.  An example is this list with dashes.
- Three-piece comments that have a start string, an end string, and optional
lines in between.  The strings for the start, middle and end are different.
An example is the C style comment:
/*
### <a id=" this is a C comment" class="section-title" href="# this is a C comment">Note:</a>
### <a id="/" class="section-title" href="#/">Note:</a>

The 'comments' option is a comma-separated list of parts.  Each part defines a
type of comment string.  A part consists of:
{flags}:{string}

{string} is the literal text that must appear.

{flags}:
n	Nested comment.  Nesting with mixed parts is allowed.  If 'comments'
is "n:),n:>" a line starting with "> ) >" is a comment.

b	Blank (<Space>, <Tab> or <EOL>) required after {string}.

f	Only the first line has the comment string.  Do not repeat comment on
the next line, but preserve indentation (e.g., a bullet-list).

s	Start of three-piece comment

m	Middle of a three-piece comment

e	End of a three-piece comment

l	Left align. Used together with 's' or 'e', the leftmost character of
start or end will line up with the leftmost character from the middle.
This is the default and can be omitted. See below for more details.

r	Right align. Same as above but rightmost instead of leftmost. See
below for more details.

O	Don't consider this comment for the "O" command.

x	Allows three-piece comments to be ended by just typing the last
character of the end-comment string as the first action on a new
line when the middle-comment string has been inserted automatically.
See below for more details.

{digits}
When together with 's' or 'e': add {digit} amount of offset to an
automatically inserted middle or end comment leader. The offset begins
from a left alignment. See below for more details.

-{digits}
Like {digits} but reduce the indent.  This only works when there is
some indent for the start or end part that can be removed.

When a string has none of the 'f', 's', 'm' or 'e' flags, Vim assumes the
comment string repeats at the start of each line.  The flags field may be
empty.

Any blank space in the text before and after the {string} is part of the
{string}, so do not include leading or trailing blanks unless the blanks are a
required part of the comment string.

When one comment leader is part of another, specify the part after the whole.
For example, to include both "-" and "->", use
```
:set comments=f:->,f:-

A three-piece comment must always be given as start,middle,end, with no other
parts in between.  An example of a three-piece comment is
```
sr:/*,mb:*,ex:*/
### <a id="To avoid recognizing "ptr" as a comment, the middle string" class="section-title" href="#To avoid recognizing "ptr" as a comment, the middle string">for C-comments.</a>
includes the 'b' flag.  For three-piece comments, Vim checks the text after
the start and middle strings for the end string.  If Vim finds the end string,
the comment does not continue on the next line.  Three-piece comments must
have a middle string because otherwise Vim can't recognize the middle lines.

Notice the use of the "x" flag in the above three-piece comment definition.
When you hit Return in a C-comment, Vim will insert the middle comment leader
for the new line: " * ".  To close this comment you just have to type "/"
before typing anything else on the new line.  This will replace the
middle-comment leader with the end-comment leader and apply any specified
alignment, leaving just " */".  There is no need to hit Backspace first.

When there is a match with a middle part, but there also is a matching end
part which is longer, the end part is used.  This makes a C style comment work
without requiring the middle part to end with a space.

Here is an example of alignment flags at work to make a comment stand out
(kind of looks like a 1 too). Consider comment string:
```
:set comments=sr:/***,m:**,ex-2:******/

```

### <a id="/ ~" class="section-title" href="#/ ~">Note:</a>
### <a id="<--right aligned from "r" flag ~" class="section-title" href="#<--right aligned from "r" flag ~">Note:</a>
### <a id=" ~" class="section-title" href="# ~">Note:</a>
offset 2 spaces for the "-2" flag--->** ~
### <a id="/ ~" class="section-title" href="#/ ~">Note:</a>
In this case, the first comment was typed, then return was pressed 4 times,
then "/" was pressed to end the comment.

Here are some finer points of three part comments. There are three times when
alignment and offset flags are taken into consideration: opening a new line
after a start-comment, opening a new line before an end-comment, and
automatically ending a three-piece comment.  The end alignment flag has a
backwards perspective; the result is that the same alignment flag used with
"s" and "e" will result in the same indent for the starting and ending pieces.
Only one alignment per comment part is meant to be used, but an offset number
will override the "r" and "l" flag.

Enabling 'cindent' will override the alignment flags in many cases.
Reindenting using a different method like [gq| or |=](#gq| or |=) will not consult
alignment flags either. The same behaviour can be defined in those other
formatting options. One consideration is that 'cindent' has additional options
for context based indenting of comments but cannot replicate many three piece
indent alignments.  However, 'indentexpr' has the ability to work better with
three piece comments.

Other examples:
```
### <a id=""b:"	Includes lines starting with "", but not if the "" is" class="section-title" href="#"b:"	Includes lines starting with "", but not if the "" is">Note:</a>
followed by a non-blank.  This avoids a pointer dereference
### <a id="like "str" to be recognized as a comment." class="section-title" href="#like "str" to be recognized as a comment.">Note:</a>
"n:>"	Includes a line starting with ">", ">>", ">>>", etc.
"fb:-"	Format a list that starts with "- ".

By default, "b:#" is included.  This means that a line that starts with
"#include" is not recognized as a comment line.  But a line that starts with
"# define" is recognized.  This is a compromise.

### <a id="fo-table" class="section-title" href="#fo-table">Note:</a>
You can use the 'formatoptions' option  to influence how Vim formats text.
'formatoptions' is a string that can contain any of the letters below.  You
can separate the option letters with commas for readability.

letter	 meaning when present in 'formatoptions'    ~
### <a id="fo-t" class="section-title" href="#fo-t">Note:</a>
t	Auto-wrap text using 'textwidth'
### <a id="fo-c" class="section-title" href="#fo-c">Note:</a>
c	Auto-wrap comments using 'textwidth', inserting the current comment
leader automatically.
### <a id="fo-r" class="section-title" href="#fo-r">Note:</a>
r	Automatically insert the current comment leader after hitting

```
Enter> in Insert mode.
### <a id="fo-o" class="section-title" href="#fo-o">Note:</a>
o	Automatically insert the current comment leader after hitting 'o' or
'O' in Normal mode.  In case comment is unwanted in a specific place
use CTRL-U to quickly delete it. [i_CTRL-U](#i_CTRL-U)
### <a id="fo-/" class="section-title" href="#fo-/">Note:</a>
/	When 'o' is included: do not insert the comment leader for a //
comment after a statement, only when // is at the start of the line.
### <a id="fo-q" class="section-title" href="#fo-q">Note:</a>
q	Allow formatting of comments with "gq".
Note that formatting will not change blank lines or lines containing
only the comment leader.  A new paragraph starts after such a line,
or when the comment leader changes.
### <a id="fo-w" class="section-title" href="#fo-w">Note:</a>
w	Trailing white space indicates a paragraph continues in the next line.
A line that ends in a non-white character ends a paragraph.
### <a id="fo-a" class="section-title" href="#fo-a">Note:</a>
a	Automatic formatting of paragraphs.  Every time text is inserted or
deleted the paragraph will be reformatted.  See [auto-format](#auto-format).
When the 'c' flag is present this only happens for recognized
comments.
### <a id="fo-n" class="section-title" href="#fo-n">Note:</a>
n	When formatting text, recognize numbered lists.  This actually uses
the 'formatlistpat' option, thus any kind of list can be used.  The
indent of the text after the number is used for the next line.  The
default is to find a number, optionally followed by '.', ':', ')',
']' or '}'.  Note that 'autoindent' must be set too.  Doesn't work
well together with "2".
Example:
```
1. the first item
wraps
2. the second item
### <a id="fo-2" class="section-title" href="#fo-2"><</a>
2	When formatting text, use the indent of the second line of a paragraph
for the rest of the paragraph, instead of the indent of the first
line.  This supports paragraphs in which the first line has a
different indent than the rest.  Note that 'autoindent' must be set
too.  Example:
```
first line of a paragraph
second line of the same paragraph
third line.

```
	This also works inside comments, ignoring the comment leader.
### <a id="fo-v" class="section-title" href="#fo-v">Note:</a>
v	Vi-compatible auto-wrapping in insert mode: Only break a line at a
blank that you have entered during the current insert command.  (Note:
this is not 100% Vi compatible.  Vi has some "unexpected features" or
bugs in this area.  It uses the screen column instead of the line
column.)
### <a id="fo-b" class="section-title" href="#fo-b">Note:</a>
b	Like 'v', but only auto-wrap if you enter a blank at or before
the wrap margin.  If the line was longer than 'textwidth' when you
started the insert, or you do not enter a blank in the insert before
reaching 'textwidth', Vim does not perform auto-wrapping.
### <a id="fo-l" class="section-title" href="#fo-l">Note:</a>
l	Long lines are not broken in insert mode: When a line was longer than
'textwidth' when the insert command started, Vim does not
automatically format it.
### <a id="fo-m" class="section-title" href="#fo-m">Note:</a>
m	Also break at a multibyte character above 255.  This is useful for
Asian text where every character is a word on its own.
### <a id="fo-M" class="section-title" href="#fo-M">Note:</a>
M	When joining lines, don't insert a space before or after a multibyte
character.  Overrules the 'B' flag.
### <a id="fo-B" class="section-title" href="#fo-B">Note:</a>
B	When joining lines, don't insert a space between two multibyte
characters.  Overruled by the 'M' flag.
### <a id="fo-1" class="section-title" href="#fo-1">Note:</a>
1	Don't break a line after a one-letter word.  It's broken before it
instead (if possible).
### <a id="fo-]" class="section-title" href="#fo-]">Note:</a>
]	Respect 'textwidth' rigorously. With this flag set, no line can be
longer than 'textwidth', unless line-break-prohibition rules make this
impossible.  Mainly for CJK scripts and works only if 'encoding' is
"utf-8".
### <a id="fo-j" class="section-title" href="#fo-j">Note:</a>
j	Where it makes sense, remove a comment leader when joining lines.  For
example, joining:
int i;   // the index ~
// in the list ~
Becomes:
int i;   // the index in the list ~
### <a id="fo-p" class="section-title" href="#fo-p">Note:</a>
p	Don't break lines at single spaces that follow periods.  This is
intended to complement 'joinspaces' and [cpo-J](#cpo-J), for prose with
sentences separated by two spaces.  For example, with 'textwidth' set
to 28:
```
Surely you're joking, Mr. Feynman!

```
	Becomes:
```
Surely you're joking,
Mr. Feynman!

```
	Instead of:
```
Surely you're joking, Mr.
Feynman!


With 't' and 'c' you can specify when Vim performs auto-wrapping:
value	action	~
""	no automatic formatting (you can use "gq" for manual formatting)
"t"	automatic formatting of text, but not comments
"c"	automatic formatting for comments, but not text (good for C code)
"tc"	automatic formatting for text and comments

Note that when 'textwidth' is 0, Vim does no automatic formatting anyway (but
does insert comment leaders according to the 'comments' option).  An exception
is when the 'a' flag is present. [auto-format](#auto-format)

Note that when 'paste' is on, Vim does no formatting at all.

Note that 'textwidth' can be non-zero even if Vim never performs auto-wrapping;
'textwidth' is still useful for formatting with "gq".

If the 'comments' option includes "/*", "*" and/or "*/", then Vim has some
built in stuff to treat these types of comments a bit more cleverly.
Opening a new line before or after "/*" or "*/" (with 'r' or 'o' present in
'formatoptions') gives the correct start of the line automatically.  The same
happens with formatting and auto-wrapping.  Opening a line after a line
starting with "/*" or "*" and containing "*/", will cause no comment leader to
be inserted, and the indent of the new line is taken from the line containing
the start of the comment.
E.g.:
### <a id="/ ~" class="section-title" href="#/ ~">Note:</a>
### <a id=" Your typical comment. ~" class="section-title" href="# Your typical comment. ~">Note:</a>
### <a id="/ ~" class="section-title" href="#/ ~">Note:</a>
The indent on this line is the same as the start of the above
comment.

All of this should be really cool, especially in conjunction with the new
:autocmd command to prepare different settings for different types of file.

Some examples:
for C code (only format comments):
```
:set fo=croq

```
 for Mail/news	(format all, don't start comment with "o" command):
```
:set fo=tcrq

```


### <a id="auto-format autoformat" class="section-title" href="#auto-format autoformat">Automatic formatting</a>

When the 'a' flag is present in 'formatoptions' text is formatted
automatically when inserting text or deleting text.  This works nicely for
editing text paragraphs.  A few hints on how to use this:

- You need to properly define paragraphs.  The simplest is paragraphs that are
separated by a blank line.  When there is no separating blank line, consider
using the 'w' flag and adding a space at the end of each line in the
paragraphs except the last one.

- You can set the 'formatoptions' based on the type of file [filetype](#filetype) or
specifically for one file with a [modeline](#modeline).

- Set 'formatoptions' to "aw2tq" to make text with indents like this:

bla bla foobar bla 
bla foobar bla foobar bla
bla bla foobar bla 
bla foobar bla bla foobar

- Add the 'c' flag to only auto-format comments.  Useful in source code.

- Set 'textwidth' to the desired width.  If it is zero then 79 is used, or the
width of the screen if this is smaller.

And a few warnings:

- When part of the text is not properly separated in paragraphs, making
changes in this text will cause it to be formatted anyway.  Consider doing
```

:set fo-=a

- When using the 'w' flag (trailing space means paragraph continues) and
deleting the last line of a paragraph with [dd](#dd), the paragraph will be
joined with the next one.

- Changed text is saved for undo.  Formatting is also a change.  Thus each
format action saves text for undo.  This may consume quite a lot of memory.

- Formatting a long paragraph and/or with complicated indenting may be slow.


## <a id="sorting" class="section-title" href="#sorting">7. Sorting Text</a> 

Vim has a sorting function and a sorting command.  The sorting function can be
found here: [sort()|, |uniq()](#sort()|, |uniq()).

### <a id=":sor :sort" class="section-title" href="#:sor :sort">Note:</a>
:[range]sor[t][!] [b][f][i][l][n][o][r][u][x] [/{pattern}/]
Sort lines in [range].  When no range is given all
lines are sorted.

With [!] the order is reversed.

With [i] case is ignored.

With [l] sort uses the current collation locale.
Implementation details: strcoll() is used to compare
strings. See [:language](#:language) to check or set the collation
locale. Example:
```
:language collate en_US.UTF-8
:%sort l

```
			[v:collate](#v:collate) can also used to check the current locale.
Sorting using the locale typically ignores case.
This does not work properly on Mac.

Options [n][f][x][o][b] are mutually exclusive.

With [n] sorting is done on the first decimal number
in the line (after or inside a {pattern} match).
One leading '-' is included in the number.

With [f] sorting is done on the Float in the line.
The value of Float is determined similar to passing
the text (after or inside a {pattern} match) to
str2float() function.

With [x] sorting is done on the first hexadecimal
number in the line (after or inside a {pattern}
match).  A leading "0x" or "0X" is ignored.
One leading '-' is included in the number.

With [o] sorting is done on the first octal number in
the line (after or inside a {pattern} match).

With [b] sorting is done on the first binary number in
the line (after or inside a {pattern} match).

With [u] (u stands for unique) only keep the first of
a sequence of identical lines (ignoring case when [i]
is used).  Without this flag, a sequence of identical
lines will be kept in their original order.
Note that leading and trailing white space may cause
lines to be different.

When /{pattern}/ is specified and there is no [r] flag
the text matched with {pattern} is skipped, so that
you sort on what comes after the match.
'ignorecase' applies to the pattern, but 'smartcase'
is not used.
Instead of the slash any non-letter can be used.
For example, to sort on the second comma-separated
field:
```
### <a id=":sort /[^,],/" class="section-title" href="#:sort /[^,],/">Note:</a>

```
			To sort on the text at virtual column 10 (thus
ignoring the difference between tabs and spaces):
```
### <a id=":sort /.\%10v/" class="section-title" href="#:sort /.\%10v/">Note:</a>

```
			To sort on the first number in the line, no matter
what is in front of it:
```
:sort /.\{-}\ze\d/

```
			(Explanation: ".\{-}" matches any text, "\ze" sets the
end of the match and \d matches a digit.)
With [r] sorting is done on the matching {pattern}
instead of skipping past it as described above.
For example, to sort on only the first three letters
of each line:
```
:sort /\a\a\a/ r


```
			If a {pattern} is used, any lines which don't have a
match for {pattern} are kept in their current order,
but separate from the lines which do match {pattern}.
If you sorted in reverse, they will be in reverse
order after the sorted lines, otherwise they will be
in their original order, right before the sorted
lines.

If {pattern} is empty (e.g. // is specified), the
last search pattern is used.  This allows trying out
a pattern first.

Note that using `:sort` with `:global` doesn't sort the matching lines, it's
quite useless.

`:sort` does not use the current locale unless the l flag is used.
Vim does do a "stable" sort.

The sorting can be interrupted, but if you interrupt it too late in the
process you may end up with duplicated lines.  This also depends on the system
library function used.

vim:tw=78:ts=8:noet:ft=help:norl:

