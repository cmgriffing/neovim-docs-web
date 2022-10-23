---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Nvim" class="section-title" href="#Nvim"> Cmdline Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="Cmdline-mode Command-line-mode Cmdline" class="section-title" href="#Cmdline-mode Command-line-mode Cmdline">Note:</a>
### <a id="cmdline Command-line mode-cmdline :" class="section-title" href="#cmdline Command-line mode-cmdline :">Command-line mode</a>

Command-line mode is used to enter Ex commands (":"), search patterns
("/" and "?"), and filter commands ("!").

Basic command line editing is explained in chapter 20 of the user manual
[usr_20.txt](#usr_20.txt).

Type [gO](#gO) to see the table of contents.


## <a id="cmdline-editing" class="section-title" href="#cmdline-editing">1. Command-Line Editing</a> 

Normally characters are inserted in front of the cursor position.  You can
move around in the command-line with the left and right cursor keys.  With the

```
Insert> key, you can toggle between inserting and overstriking characters.

Note that if your keyboard does not have working cursor keys or any of the
other special keys, you can use ":cnoremap" to define another key for them.
### <a id="tcsh-style" class="section-title" href="#tcsh-style">For example, to define tcsh style editing keys:</a>
:cnoremap <C-A> <Home>
:cnoremap <C-F> <Right>
:cnoremap <C-B> <Left>
:cnoremap <Esc>b <S-Left>
:cnoremap <Esc>f <S-Right>
(<> notation [<>](#<>); type all this literally)

### <a id="cmdline-too-long" class="section-title" href="#cmdline-too-long">Note:</a>
When the command line is getting longer than what fits on the screen, only the
part that fits will be shown.  The cursor can only move in this visible part,
thus you cannot edit beyond that.

### <a id="cmdline-history history" class="section-title" href="#cmdline-history history">Note:</a>
The command-lines that you enter are remembered in a history table.  You can
recall them with the up and down cursor keys.  There are actually five
history tables:
- one for ':' commands
- one for search strings
- one for expressions
- one for input lines, typed for the [input()](#input()) function.
- one for debug mode commands
These are completely separate.  Each history can only be accessed when
entering the same type of line.
Use the 'history' option to set the number of lines that are remembered.
Notes:
- When you enter a command-line that is exactly the same as an older one, the
old one is removed (to avoid repeated commands moving older commands out of
the history).
- Only commands that are typed are remembered.  Ones that completely come from
mappings are not put in the history.
- All searches are put in the search history, including the ones that come
### <a id="from commands like "" and "#"." class="section-title" href="#from commands like "" and "#".">Note:</a>
remembered (to avoid that long mappings trash the history).

There is an automatic completion of names on the command-line; see
[cmdline-completion](#cmdline-completion).

### <a id="c_CTRL-V" class="section-title" href="#c_CTRL-V">Note:</a>
CTRL-V		Insert next non-digit literally.  Up to three digits form the
decimal value of a single byte.  The non-digit and the three
digits are not considered for mapping.  This works the same
way as in Insert mode (see above, [i_CTRL-V](#i_CTRL-V)).
For special keys, the CTRL modifier may be included into the
key to produce a control character.  If there is no control
character for the key then its [key-notation](#key-notation) is inserted.
Note: Under Windows CTRL-V is often mapped to paste text.
Use CTRL-Q instead then.
### <a id="c_CTRL-Q" class="section-title" href="#c_CTRL-Q">Note:</a>
CTRL-Q		Same as CTRL-V.  But with some terminals it is used for
control flow, it doesn't work then.

### <a id="c_CTRL-SHIFT-V c_CTRL-SHIFT-Q" class="section-title" href="#c_CTRL-SHIFT-V c_CTRL-SHIFT-Q">CTRL-SHIFT-V</a>
CTRL-SHIFT-Q	Works just like CTRL-V, but do not try to include the CTRL
modifier into the key.

### <a id="c_<Left> c_Left" class="section-title" href="#c_<Left> c_Left">Note:</a>

```
Left>		cursor left
### <a id="c_<Right> c_Right" class="section-title" href="#c_<Right> c_Right">Note:</a>

```
Right>		cursor right
### <a id="c_<S-Left>" class="section-title" href="#c_<S-Left>">Note:</a>
### <a id="c_<C-Left>" class="section-title" href="#c_<C-Left>"><S-Left> or <C-Left></a>
cursor one WORD left
### <a id="c_<S-Right>" class="section-title" href="#c_<S-Right>">Note:</a>
### <a id="c_<C-Right>" class="section-title" href="#c_<C-Right>"><S-Right> or <C-Right></a>
cursor one WORD right
### <a id="c_CTRL-B c_<Home> c_Home" class="section-title" href="#c_CTRL-B c_<Home> c_Home">CTRL-B or <Home></a>
cursor to beginning of command-line
### <a id="c_CTRL-E c_<End> c_End" class="section-title" href="#c_CTRL-E c_<End> c_End">CTRL-E or <End></a>
cursor to end of command-line

### <a id="c_<LeftMouse>" class="section-title" href="#c_<LeftMouse>">Note:</a>

```
LeftMouse>	Move the cursor to the position of the mouse click.

### <a id="c_<MiddleMouse>" class="section-title" href="#c_<MiddleMouse>">Note:</a>

```
MiddleMouse>	Paste the contents of the clipboard (for X11 the primary
selection).  This is similar to using CTRL-R *, but no CR
characters are inserted between lines.

### <a id="c_<BS> c_CTRL-H c_BS" class="section-title" href="#c_<BS> c_CTRL-H c_BS">CTRL-H</a>

```
BS>		Delete the character in front of the cursor.
### <a id="c_<Del> c_Del" class="section-title" href="#c_<Del> c_Del">Note:</a>

```
Del>		Delete the character under the cursor (at end of line:
character before the cursor).
### <a id="c_CTRL-W" class="section-title" href="#c_CTRL-W">Note:</a>
CTRL-W		Delete the [word](#word) before the cursor.  This depends on the
'iskeyword' option.
### <a id="c_CTRL-U" class="section-title" href="#c_CTRL-U">Note:</a>
CTRL-U		Remove all characters between the cursor position and
the beginning of the line.  Previous versions of vim
deleted all characters on the line.  If that is the
preferred behavior, add the following to your vimrc:
```
:cnoremap <C-U> <C-E><C-U>

```

### <a id="c_<Insert> c_Insert" class="section-title" href="#c_<Insert> c_Insert">Note:</a>

```
Insert>	Toggle between insert and overstrike.

### <a id="c_digraph" class="section-title" href="#c_digraph">{char1} <BS> {char2}	or</a>
### <a id="c_CTRL-K" class="section-title" href="#c_CTRL-K">CTRL-K {char1} {char2}</a>
enter digraph (see [digraphs](#digraphs)).  When {char1} is a special
key, the code for that key is inserted in <> form.

### <a id="c_CTRL-R c_<C-R>" class="section-title" href="#c_CTRL-R c_<C-R>">CTRL-R {register}</a>
Insert the contents of a numbered or named register.  Between
typing CTRL-R and the second character '"' will be displayed
to indicate that you are expected to enter the name of a
register.
The text is inserted as if you typed it, but mappings and
abbreviations are not used.  Command-line completion through
'wildchar' is not triggered though.  And characters that end
the command line are inserted literally (<Esc>, <CR>, <NL>,

```
C-C>).  A <BS> or CTRL-W could still end the command line
though, and remaining characters will then be interpreted in
another mode, which might not be what you intended.
Special registers:
'"'	the unnamed register, containing the text of
the last delete or yank
'%'	the current file name
'#'	the alternate file name
### <a id="''	the clipboard contents (X11: primary selection)" class="section-title" href="#''	the clipboard contents (X11: primary selection)">Note:</a>
'+'	the clipboard contents
'/'	the last search pattern
':'	the last command-line
'-'	the last small (less than a line) delete
'.'	the last inserted text
### <a id="c_CTRL-R_=" class="section-title" href="#c_CTRL-R_=">Note:</a>
'='	the expression register: you are prompted to
enter an expression (see [expression](#expression))
(doesn't work at the expression prompt; some
things such as changing the buffer or current
window are not allowed to avoid side effects)
When the result is a [List](#List) the items are used
as lines.  They can have line breaks inside
too.
When the result is a Float it's automatically
converted to a String.
Note that when you only want to move the
cursor and not insert anything, you must make
sure the expression evaluates to an empty
string.  E.g.:
```

```
C-R><C-R>=setcmdpos(2)[-1]<CR>

```
		See [registers](#registers) about registers.
Implementation detail: When using the [expression](#expression) register
and invoking setcmdpos(), this sets the position before
inserting the resulting string.  Use CTRL-R CTRL-R to set the
position afterwards.

### <a id="c_CTRL-R_CTRL-F c_<C-R>_<C-F>" class="section-title" href="#c_CTRL-R_CTRL-F c_<C-R>_<C-F>">Ctrl-R Ctrl-F</a>
### <a id="c_CTRL-R_CTRL-P c_<C-R>_<C-P>" class="section-title" href="#c_CTRL-R_CTRL-P c_<C-R>_<C-P>">Ctrl-R Ctrl-P</a>
### <a id="c_CTRL-R_CTRL-W c_<C-R>_<C-W>" class="section-title" href="#c_CTRL-R_CTRL-W c_<C-R>_<C-W>">Ctrl-R Ctrl-W</a>
### <a id="c_CTRL-R_CTRL-A c_<C-R>_<C-A>" class="section-title" href="#c_CTRL-R_CTRL-A c_<C-R>_<C-A>">Ctrl-R Ctrl-A</a>
### <a id="c_CTRL-R_CTRL-L c_<C-R>_<C-L>" class="section-title" href="#c_CTRL-R_CTRL-L c_<C-R>_<C-L>">Ctrl-R Ctrl-L</a>
Insert the object under the cursor:
CTRL-F	the Filename under the cursor
CTRL-P	the Filename under the cursor, expanded with
'path' as in [gf](#gf)
CTRL-W	the Word under the cursor
CTRL-A	the WORD under the cursor; see [WORD](#WORD)
CTRL-L	the line under the cursor

When 'incsearch' is set the cursor position at the end of the
currently displayed match is used.  With CTRL-W the part of
the word that was already typed is not inserted again.

### <a id="c_CTRL-R_CTRL-R c_<C-R>_<C-R>" class="section-title" href="#c_CTRL-R_CTRL-R c_<C-R>_<C-R>">Note:</a>
### <a id="c_CTRL-R_CTRL-O c_<C-R>_<C-O>" class="section-title" href="#c_CTRL-R_CTRL-O c_<C-R>_<C-O>">Note:</a>
CTRL-R CTRL-R {register CTRL-F CTRL-P CTRL-W CTRL-A CTRL-L}
CTRL-R CTRL-O {register CTRL-F CTRL-P CTRL-W CTRL-A CTRL-L}
Insert register or object under the cursor.  Works like
[c_CTRL-R](#c_CTRL-R) but inserts the text literally.  For example, if
register a contains "xy^Hz" (where ^H is a backspace),
"CTRL-R a" will insert "xz" while "CTRL-R CTRL-R a" will
insert "xy^Hz".

### <a id="c_CTRL-\_e" class="section-title" href="#c_CTRL-\_e">CTRL-\ e {expr}</a>
Evaluate {expr} and replace the whole command line with the
result.  You will be prompted for the expression, type <Enter>
to finish it.  It's most useful in mappings though.  See
[expression](#expression).
See [c_CTRL-R_=](#c_CTRL-R_=) for inserting the result of an expression.
Useful functions are [getcmdtype()|, |getcmdline()](#getcmdtype()|, |getcmdline()) and
[getcmdpos()](#getcmdpos()).
The cursor position is unchanged, except when the cursor was
at the end of the line, then it stays at the end.
[setcmdpos()](#setcmdpos()) can be used to set the cursor position.
The [sandbox](#sandbox) is used for evaluating the expression to avoid
nasty side effects.
Example:
```
:cmap <F7> <C-\>eAppendSome()<CR>
:func AppendSome()
:let cmd = getcmdline() .. " Some()"
:" place the cursor on the )
:call setcmdpos(strlen(cmd))
:return cmd
:endfunc

```
		This doesn't work recursively, thus not when already editing
an expression.  But it is possible to use in a mapping.

### <a id="c_CTRL-Y" class="section-title" href="#c_CTRL-Y">Note:</a>
CTRL-Y		When there is a modeless selection, copy the selection into
the clipboard.
If there is no selection CTRL-Y is inserted as a character.

### <a id="c_CTRL-Z" class="section-title" href="#c_CTRL-Z">Note:</a>
CTRL-Z		Trigger 'wildmode'. Same as 'wildcharm', but always available.

### <a id="c_CTRL-M c_CTRL-J c_<NL> c_<CR> c_CR" class="section-title" href="#c_CTRL-M c_CTRL-J c_<NL> c_<CR> c_CR">CTRL-M or CTRL-J</a>

```
CR> or <NL>	start entered command

### <a id="c_CTRL-[ c_<Esc> c_Esc" class="section-title" href="#c_CTRL-[ c_<Esc> c_Esc">Ctrl-[</a>

```
Esc>		When typed and 'x' not present in 'cpoptions', quit
Command-line mode without executing.  In macros or when 'x'
present in 'cpoptions', start entered command.
Note: If your <Esc> key is hard to hit on your keyboard, train
yourself to use CTRL-[.
### <a id="c_META c_ALT" class="section-title" href="#c_META c_ALT">Note:</a>
ALT ([META](#META)) may act like <Esc> if the chord is not mapped.
For example <A-x> acts like <Esc>x if <A-x> does not have a
command-line mode mapping.
### <a id="c_CTRL-C" class="section-title" href="#c_CTRL-C">Note:</a>
CTRL-C		quit command-line without executing

### <a id="c_<Up> c_Up" class="section-title" href="#c_<Up> c_Up">Note:</a>

```
Up>		recall older command-line from history, whose beginning
matches the current command-line (see below).
### <a id="c_<Down> c_Down" class="section-title" href="#c_<Down> c_Down">Note:</a>

```
Down>		recall more recent command-line from history, whose beginning
matches the current command-line (see below).

### <a id="c_<S-Up> c_<PageUp>" class="section-title" href="#c_<S-Up> c_<PageUp>">Note:</a>

```
S-Up> or <PageUp>
recall older command-line from history
### <a id="c_<S-Down> c_<PageDown>" class="section-title" href="#c_<S-Down> c_<PageDown>">Note:</a>

```
S-Down> or <PageDown>
recall more recent command-line from history

CTRL-D		command-line completion (see [cmdline-completion](#cmdline-completion))
'wildchar' option
command-line completion (see [cmdline-completion](#cmdline-completion))
CTRL-N		command-line completion (see [cmdline-completion](#cmdline-completion))
CTRL-P		command-line completion (see [cmdline-completion](#cmdline-completion))
CTRL-A		command-line completion (see [cmdline-completion](#cmdline-completion))
CTRL-L		command-line completion (see [cmdline-completion](#cmdline-completion))

### <a id="c_CTRL-_" class="section-title" href="#c_CTRL-_">Note:</a>
CTRL-_		Switch between Hebrew and English keyboard mode, which is
private to the command-line and not related to hkmap.
This is useful when Hebrew text entry is required in the
command-line, searches, abbreviations, etc.  Applies only if
the 'allowrevins' option is set.
See [rileft.txt](#rileft.txt).

### <a id="c_CTRL-^" class="section-title" href="#c_CTRL-^">Note:</a>
CTRL-^		Toggle the use of language [:lmap](#:lmap) mappings and/or Input
Method.
When typing a pattern for a search command and 'imsearch' is
not -1, VAL is the value of 'imsearch', otherwise VAL is the
value of 'iminsert'.
When language mappings are defined:
- If VAL is 1 (langmap mappings used) it becomes 0 (no langmap
mappings used).
- If VAL was not 1 it becomes 1, thus langmap mappings are
enabled.
When no language mappings are defined:
- If VAL is 2 (Input Method is used) it becomes 0 (no input
method used)
- If VAL has another value it becomes 2, thus the Input Method
is enabled.
These language mappings are normally used to type characters
that are different from what the keyboard produces.  The
'keymap' option can be used to install a whole number of them.
When entering a command line, langmap mappings are switched
off, since you are expected to type a command.  After
switching it on with CTRL-^, the new state is not used again
for the next command or Search pattern.

### <a id="c_CTRL-]" class="section-title" href="#c_CTRL-]">Note:</a>
CTRL-]		Trigger abbreviation, without inserting a character.

For Emacs-style editing on the command-line see [emacs-keys](#emacs-keys).

The <Up> and <Down> keys take the current command-line as a search string.
The beginning of the next/previous command-lines are compared with this
string.  The first line that matches is the new command-line.  When typing
these two keys repeatedly, the same string is used again.  For example, this
can be used to find the previous substitute command: Type ":s" and then <Up>.
The same could be done by typing <S-Up> a number of times until the desired
command-line is shown.  (Note: the shifted arrow keys do not work on all
terminals)

### <a id=":his :history" class="section-title" href="#:his :history">Note:</a>
:his[tory]	Print the history of last entered commands.

:his[tory] [{name}] [{first}][, [{last}]]
List the contents of history {name} which can be:
c[md]	 or :		command-line history
s[earch] or / or ?	search string history
e[xpr]	 or =		expression register history
i[nput]	 or @		input line history
d[ebug]	 or >		debug command history
a[ll]			all of the above

If the numbers {first} and/or {last} are given, the respective
range of entries from a history is listed.  These numbers can
be specified in the following form:
### <a id=":history-indexing" class="section-title" href="#:history-indexing">Note:</a>
A positive number represents the absolute index of an entry
as it is given in the first column of a :history listing.
This number remains fixed even if other entries are deleted.

A negative number means the relative position of an entry,
counted from the newest entry (which has index -1) backwards.

Examples:
List entries 6 to 12 from the search history:
```
:history / 6,12

```

List the penultimate entry from all histories:
```
:history all -2

```

List the most recent two entries from all histories:
```
:history all -2,

### <a id=":keepp :keeppatterns" class="section-title" href="#:keepp :keeppatterns">:keepp[atterns] {command}</a>
Execute {command}, without adding anything to the search
history


## <a id="cmdline-completion" class="section-title" href="#cmdline-completion">2. Command-Line Completion</a> 

When editing the command-line, a few commands can be used to complete the
word before the cursor.  This is available for:

- Command names: At the start of the command-line.
- Tags: Only after the ":tag" command.
- File names: Only after a command that accepts a file name or a setting for
an option that can be set to a file name.  This is called file name
completion.
- Shell command names: After ":!cmd", ":r !cmd" and ":w !cmd".  $PATH is used.
- Options: Only after the ":set" command.
- Mappings: Only after a ":map" or similar command.
- Variable and function names: Only after a ":if", ":call" or similar command.

The number of help item matches is limited (currently to 300) to avoid a long
delay when there are very many matches.

These are the commands that can be used:

### <a id="c_CTRL-D" class="section-title" href="#c_CTRL-D">Note:</a>
CTRL-D		List names that match the pattern in front of the cursor.
When showing file names, directories are highlighted (see
[highlight-groups](#highlight-groups)).  Names where 'suffixes' matches are moved
to the end.
The 'wildoptions' option can be set to "tagfile" to list the
file of matching tags.
### <a id="c_CTRL-I c_wildchar c_<Tab>" class="section-title" href="#c_CTRL-I c_wildchar c_<Tab>">Note:</a>
'wildchar' option
A match is done on the pattern in front of the cursor.  The
match (if there are several, the first match) is inserted
in place of the pattern.  (Note: does not work inside a
macro, because <Tab> or <Esc> are mostly used as 'wildchar',
and these have a special meaning in some macros.) When typed
again and there were multiple matches, the next
match is inserted.  After the last match, the first is used
again (wrap around).
The behavior can be changed with the 'wildmode' option.
### <a id="c_<S-Tab>" class="section-title" href="#c_<S-Tab>">Note:</a>

```
S-Tab>		Like 'wildchar' or <Tab>, but begin with the last match and
then go to the previous match.
### <a id="c_CTRL-N" class="section-title" href="#c_CTRL-N">Note:</a>
CTRL-N		After using 'wildchar' which got multiple matches, go to next
match.  Otherwise recall more recent command-line from history.
### <a id="c_CTRL-P" class="section-title" href="#c_CTRL-P">Note:</a>
CTRL-P		After using 'wildchar' which got multiple matches, go to
previous match.  Otherwise recall older command-line from
history.
### <a id="c_CTRL-A" class="section-title" href="#c_CTRL-A">Note:</a>
CTRL-A		All names that match the pattern in front of the cursor are
inserted.
### <a id="c_CTRL-L" class="section-title" href="#c_CTRL-L">Note:</a>
CTRL-L		A match is done on the pattern in front of the cursor.  If
there is one match, it is inserted in place of the pattern.
If there are multiple matches the longest common part is
inserted in place of the pattern.  If the result is shorter
than the pattern, no completion is done.
### <a id="/_CTRL-L" class="section-title" href="#/_CTRL-L">Note:</a>
When 'incsearch' is set, entering a search pattern for "/" or
"?" and the current match is displayed then CTRL-L will add
one character from the end of the current match.  If
'ignorecase' and 'smartcase' are set and the command line has
no uppercase characters, the added character is converted to
lowercase.
### <a id="c_CTRL-G /_CTRL-G" class="section-title" href="#c_CTRL-G /_CTRL-G">Note:</a>
CTRL-G		When 'incsearch' is set, entering a search pattern for "/" or
"?" and the current match is displayed then CTRL-G will move
to the next match (does not take [search-offset](#search-offset) into account)
Use CTRL-T to move to the previous match.  Hint: on a regular
keyboard T is above G.
### <a id="c_CTRL-T /_CTRL-T" class="section-title" href="#c_CTRL-T /_CTRL-T">Note:</a>
CTRL-T		When 'incsearch' is set, entering a search pattern for "/" or
"?" and the current match is displayed then CTRL-T will move
to the previous match (does not take [search-offset](#search-offset) into
account).
Use CTRL-G to move to the next match.  Hint: on a regular
keyboard T is above G.

The 'wildchar' option defaults to <Tab> (CTRL-E when in Vi compatible mode; in
### <a id="In the pattern standard wildcards '' and" class="section-title" href="#In the pattern standard wildcards '' and">a previous version <Esc> was used).</a>
### <a id="'' matches any string, '?'" class="section-title" href="#'' matches any string, '?'">'?' are accepted when matching file names.</a>
matches exactly one character.

When repeating 'wildchar' or CTRL-N you cycle through the matches, eventually
ending up back to what was typed.  If the first match is not what you wanted,
you can use <S-Tab> or CTRL-P to go straight back to what you typed.

The 'wildignorecase' option can be set to ignore case in filenames.

The 'wildmenu' option can be set to show the matches just above the command
line.

If you like tcsh's autolist completion, you can use this mapping:
:cnoremap X <C-L><C-D>
(Where X is the command key to use, <C-L> is CTRL-L and <C-D> is CTRL-D)
This will find the longest match and then list all matching files.

If you like tcsh's autolist completion, you can use the 'wildmode' option to
emulate it.  For example, this mimics autolist=ambiguous:
:set wildmode=longest,list
This will find the longest match with the first 'wildchar', then list all
matching files with the next.

### <a id="complete-script-local-functions" class="section-title" href="#complete-script-local-functions">Note:</a>
When completing user function names, prepend "s:" to find script-local
functions.

### <a id="suffixes" class="section-title" href="#suffixes">Note:</a>
For file name completion you can use the 'suffixes' option to set a priority
between files with almost the same name.  If there are multiple matches,
those files with an extension that is in the 'suffixes' option are ignored.
The default is ".bak,~,.o,.h,.info,.swp,.obj", which means that files ending
in ".bak", "~", ".o", ".h", ".info", ".swp" and ".obj" are sometimes ignored.

An empty entry, two consecutive commas, match a file name that does not
contain a ".", thus has no suffix.  This is useful to ignore "prog" and prefer
"prog.c".

Examples:

pattern:	files:				match:	~
### <a id="test	test.c test.h test.o" class="section-title" href="#test	test.c test.h test.o">Note:</a>
### <a id="test	test.h test.o" class="section-title" href="#test	test.h test.o">Note:</a>
### <a id="test	test.i test.h test.c" class="section-title" href="#test	test.i test.h test.c">Note:</a>

It is impossible to ignore suffixes with two dots.

If there is more than one matching file (after ignoring the ones matching
the 'suffixes' option) the first file name is inserted.  You can see that
there is only one match when you type 'wildchar' twice and the completed
match stays the same.  You can get to the other matches by entering
'wildchar', CTRL-N or CTRL-P.  All files are included, also the ones with
extensions matching the 'suffixes' option.

To completely ignore files with some extension use 'wildignore'.

To match only files that end at the end of the typed text append a "$".  For
example, to match only files that end in ".c":
```
:e *.c$
This will not match a file ending in ".cpp".  Without the "$" it does match.

The old value of an option can be obtained by hitting 'wildchar' just after
the '='.  For example, typing 'wildchar' after ":set dir=" will insert the
current value of 'dir'.  This overrules file name completion for the options
that take a file name.

If you would like using <S-Tab> for CTRL-P in an xterm, put this command in
your .cshrc:
```
xmodmap -e "keysym Tab = Tab Find"
And this in your vimrc:
```
:cmap <Esc>[1~ <C-P>


## <a id="cmdline-lines" class="section-title" href="#cmdline-lines">3. Ex Command-Lines</a> 

The Ex commands have a few specialties:

### <a id=":quote :comment" class="section-title" href="#:quote :comment">Note:</a>
'"' at the start of a line causes the whole line to be ignored.  '"'
after a command causes the rest of the line to be ignored.  This can be used
to add comments.  Example:
```
:set ai		"set 'autoindent' option
It is not possible to add a comment to a shell command ":!cmd" or to the
":map" command and a few others (mainly commands that expect expressions)
that see the '"' as part of their argument:

:argdo
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
:windo

### <a id=":bar :\bar" class="section-title" href="#:bar :\bar">Note:</a>
'|' can be used to separate commands, so you can give multiple commands in one
line.  If you want to use '|' in an argument, precede it with '\'.

These commands see the '|' as their argument, and can therefore not be
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
a user defined command without the "-bar" argument [:command](#:command)

Note that this is confusing (inherited from Vi): With ":g" the '|' is included
in the command, with ":s" it is not.

To be able to use another command anyway, use the ":execute" command.
Example (append the output of "ls" and jump to the first line):
```
:execute 'r !ls' | '[

There is one exception: When the 'b' flag is present in 'cpoptions', with the
":map" and ":abbr" commands and friends CTRL-V needs to be used instead of
'\'.  You can also use "<Bar>" instead.  See also [map_bar](#map_bar).

Examples:
```
:!ls | wc		view the output of two commands
:r !ls | wc		insert the same output in the text
:%g/foo/p|>		moves all matching lines one shiftwidth
:%s/foo/bar/|>		moves one line one shiftwidth
:map q 10^V[		map "q" to "10](#		map "q" to "10)"
:map q 10\| map \ l	map "q" to "10\" and map "\" to "l"
(when 'b' is present in 'cpoptions')

You can also use <NL> to separate commands in the same way as with '|'.  To
insert a <NL> use CTRL-V CTRL-J.  "^@" will be shown.  Using '|' is the
preferred method.  But for external commands a <NL> must be used, because a
'|' is included in the external command.  To avoid the special meaning of <NL>
it must be preceded with a backslash.  Example:
```
:r !date<NL>-join
This reads the current date into the file and joins it with the previous line.

Note that when the command before the '|' generates an error, the following
commands will not be executed.


Because of Vi compatibility the following strange commands are supported:
```
:|			print current line (like ":p")
:3|			print line 3 (like ":3p")
:3			goto line 3

A colon is allowed between the range and the command name.  It is ignored
(this is Vi compatible).  For example:
```
:1,$:s/pat/string

When the character '%' or '#' is used where a file name is expected, they are
expanded to the current and alternate file name (see the chapter "editing
files" [:_%| |:_#](#:_%| |:_#)).

Trailing spaces in filenames will be ignored, unless escaped with a backslash
or CTRL-V.  Note that the ":next" command uses spaces to separate file names.
Escape the spaces to include them in a file name.  Example:
```
:next foo\ bar goes\ to school\
starts editing the three files "foo bar", "goes to" and "school ".

When you want to use the special characters '"' or '|' in a command, or want
to use '%' or '#' in a file name, precede them with a backslash.  The
backslash is not required in a range and in the ":substitute" command.
See also [`=](#`=).

### <a id=":_!" class="section-title" href="#:_!">Note:</a>
The '!' (bang) character after an Ex command makes the command behave in a
different way.  The '!' should be placed immediately after the command, without
any blanks in between.  If you insert blanks the '!' will be seen as an
argument for the command, which has a different meaning.  For example:
:w! name	write the current buffer to file "name", overwriting
any existing file
:w !name	send the current buffer as standard input to command
"name"


## <a id="" class="section-title" href="#">4. Ex Command-Line Ranges	*Cmdline-Ranges* *[Range]* *E16*</a> 

Some Ex commands accept a line range in front of them.  This is noted as
[range].  It consists of one or more line specifiers, separated with ',' or
';'.

The basics are explained in section [10.3](#10.3) of the user manual.

### <a id=":, :;" class="section-title" href="#:, :;">Note:</a>
When separated with ';' the cursor position will be set to that line
before interpreting the next line specifier.  This doesn't happen for ','.
Examples:
```
4,/this line/

```
	from line 4 till match with "this line" after the cursor line.
```
5;/that line/

```
	from line 5 till match with "that line" after line 5.

The default line specifier for most commands is the cursor position, but the
commands ":write" and ":global" have the whole file (1,$) as default.

If more line specifiers are given than required for the command, the first
one(s) will be ignored.

### <a id=":range {address}" class="section-title" href="#:range {address}">Line numbers may be specified with:</a>
### <a id="E1247" class="section-title" href="#E1247">	{number}	an absolute line number</a>
.		the current line			  *:.*
$		the last line in the file		  *:$*
%		equal to 1,$ (the entire file)		  *:%*
't		position of mark t (lowercase)		  *:'*
'T		position of mark T (uppercase); when the mark is in
another file it cannot be used in a range
### <a id=":/" class="section-title" href="#:/">	/{pattern}[/]	the next line where {pattern} matches</a>
?{pattern}[?]	the previous line where {pattern} matches *:?*
\/		the next line where the previously used search
pattern matches
\?		the previous line where the previously used search
pattern matches
\&		the next line where the previously used substitute
pattern matches

Each may be followed (several times) by '+' or '-' and an optional number.
This number is added or subtracted from the preceding line number.  If the
number is omitted, 1 is used.  If there is nothing before the '+' or '-' then
the current line is used.

The "/" and "?" after {pattern} are required to separate the pattern from
anything that follows.

The "/" and "?" may be preceded with another address.  The search starts from
there.  The difference from using ';' is that the cursor isn't moved.
Examples:
```
/pat1//pat2/	Find line containing "pat2" after line containing
"pat1", without moving the cursor.
7;/pat2/	Find line containing "pat2", after line 7, leaving
the cursor in line 7.

The {number} must be between 0 and the number of lines in the file.  When
using a 0 (zero) this is interpreted as a 1 by most commands.  Commands that
use it as a count do use it as a zero ([:tag|, |:pop](#:tag|, |:pop), etc).  Some commands
interpret the zero as "before the first line" ([:read](#:read), search pattern, etc).

Examples:
```
.+3		three lines below the cursor
/that/+1	the line below the next line containing "that"
.,$		from current line until end of file
0;/that		the first line containing "that", also matches in the
first line.
1;/that		the first line after line 1 containing "that"

Some commands allow for a count after the command.  This count is used as the
number of lines to be used, starting with the line given in the last line
specifier (the default is the cursor line).  The commands that accept a count
are the ones that use a range but do not have a file name argument (because
a file name can also be a number).  The count cannot be negative.

Examples:
```
:s/x/X/g 5	substitute 'x' by 'X' in the current line and four
following lines
:23d 4		delete lines 23, 24, 25 and 26


Folds and Range

When folds are active the line numbers are rounded off to include the whole
closed fold.  See [fold-behavior](#fold-behavior).


### <a id="E493" class="section-title" href="#E493">Reverse Range</a>

A range should have the lower line number first.  If this is not the case, Vim
will ask you if it should swap the line numbers.
Backwards range given, OK to swap ~
This is not done within the global command ":g".

You can use ":silent" before a command to avoid the question, the range will
always be swapped then.


### <a id="N:" class="section-title" href="#N:">Count and Range</a>

When giving a count before entering ":", this is translated into:
:.,.+(count - 1)
In words: The "count" lines at and after the cursor.  Example: To delete
three lines:
```
3:d<CR>		is translated into: .,.+2d<CR>

```


Visual Mode and Range
### <a id="v_:" class="section-title" href="#v_:">Note:</a>
{Visual}:	Starts a command-line with the Visual selected lines as a
range.  The code `:'<,'>` is used for this range, which makes
it possible to select a similar line from the command-line
history for repeating a command on different Visually selected
lines.

### <a id=":star :star-visual-range" class="section-title" href="#:star :star-visual-range">:*</a>
When Visual mode was already ended, a short way to use the
### <a id="Visual area for a range is `:`." class="section-title" href="#Visual area for a range is `:`.">Note:</a>


## <a id="ex-flags" class="section-title" href="#ex-flags">5. Ex Command-Line Flags</a> 

These flags are supported by a selection of Ex commands.  They print the line
that the cursor ends up after executing the command:

l	output like for [:list](#:list)
#	add line number
p	output like for [:print](#:print)

The flags can be combined, thus "l#" uses both a line number and [:list](#:list) style
output.


## <a id="cmdline-special" class="section-title" href="#cmdline-special">6. Ex Special Characters</a> 

Note: These are special characters in the executed command line.  If you want
to insert special things while typing you can use the CTRL-R command.  For
example, "%" stands for the current file name, while CTRL-R % inserts the
current file name right away.  See [c_CTRL-R](#c_CTRL-R).

Note:  If you want to avoid the effects of special characters in a Vim script
you may want to use [fnameescape()|.  Also see |`=](#fnameescape()|.  Also see |`=).


In Ex commands, at places where a file name can be used, the following
characters have a special meaning.  These can also be used in the expression
function [expand()](#expand()).
### <a id=":_% c_%" class="section-title" href="#:_% c_%">	%	Is replaced with the current file name.</a>
### <a id=":_# c_#" class="section-title" href="#:_# c_#">	#	Is replaced with the alternate file name.</a>
This is remembered for every window.
### <a id=":_#0 :_#n" class="section-title" href="#:_#0 :_#n">	#n	(where n is a number) is replaced with</a>
the file name of buffer n.  "#0" is the same as "#".     *c_#n*
### <a id=":_## c_##" class="section-title" href="#:_## c_##">	##	Is replaced with all names in the argument list</a>
concatenated, separated by spaces.  Each space in a name
is preceded with a backslash.
### <a id=":_#< c_#<" class="section-title" href="#:_#< c_#<">	#<n	(where n is a number > 0) is replaced with old</a>
file name n.  See [:oldfiles| or |v:oldfiles](#:oldfiles| or |v:oldfiles) to get the
number.							*E809*

Note that these, except "#<n", give the file name as it was typed.  If an
absolute path is needed (when using the file name from a different directory),
you need to add ":p".  See [filename-modifiers](#filename-modifiers).

The "#<n" item returns an absolute path, but it will start with "~/" for files
below your home directory.

Note that backslashes are inserted before spaces, so that the command will
correctly interpret the file name.  But this doesn't happen for shell
commands.  For those you probably have to use quotes (this fails for files
that contain a quote and wildcards):
```
:!ls "%"
:r !spell "%"

To avoid the special meaning of '%' and '#' insert a backslash before it.
Detail: The special meaning is always escaped when there is a backslash before
it, no matter how many backslashes.
you type:		result	~
#			alternate.file
\#			#
\\#			\#
Also see [`=](#`=).

### <a id="E499 E500" class="section-title" href="#E499 E500">Note:</a>
Note: these are typed literally, they are not special keys!
### <a id=":<cword> <cword>" class="section-title" href="#:<cword> <cword>">Note:</a>

```
cword>    is replaced with the word under the cursor (like [star](#star))
### <a id=":<cWORD> <cWORD>" class="section-title" href="#:<cWORD> <cWORD>">Note:</a>

```
cWORD>    is replaced with the WORD under the cursor (see [WORD](#WORD))
### <a id=":<cexpr> <cexpr>" class="section-title" href="#:<cexpr> <cexpr>">Note:</a>

```
cexpr>    is replaced with the word under the cursor, including more
to form a C expression.  E.g., when the cursor is on "arg"
of "ptr->arg" then the result is "ptr->arg"; when the
cursor is on "]" of "list[idx]" then the result is
"list[idx]".  This is used for [v:beval_text](#v:beval_text).
### <a id=":<cfile> <cfile>" class="section-title" href="#:<cfile> <cfile>">Note:</a>

```
cfile>    is replaced with the path name under the cursor (like what
[gf](#gf) uses)
### <a id=":<afile> <afile>" class="section-title" href="#:<afile> <afile>">Note:</a>

```
afile>    When executing autocommands, is replaced with the file name
of the buffer being manipulated, or the file for a read or
write.  *E495*
### <a id=":<abuf> <abuf>" class="section-title" href="#:<abuf> <abuf>">Note:</a>

```
abuf>     When executing autocommands, is replaced with the currently
effective buffer number (for ":r file" and ":so file" it is
the current buffer, the file being read/sourced is not in a
buffer).  *E496*
### <a id=":<amatch> <amatch>" class="section-title" href="#:<amatch> <amatch>">Note:</a>

```
amatch>   When executing autocommands, is replaced with the match for
which this autocommand was executed.  *E497*
It differs from <afile> when the file name isn't used to
match with (for FileType, Syntax and SpellFileMissing
events).
When the match is with a file name, it is expanded to the
full path.
### <a id=":<sfile> <sfile>" class="section-title" href="#:<sfile> <sfile>">Note:</a>

```
sfile>    When executing a `:source` command, is replaced with the
file name of the sourced file.  *E498*
When executing a function, is replaced with the call stack,
as with <stack> (this is for backwards compatibility, using

```
stack> or <script> is preferred).
Note that filename-modifiers are useless when <sfile> is
not used inside a script.
### <a id=":<stack> <stack>" class="section-title" href="#:<stack> <stack>">Note:</a>

```
stack>	   is replaced with the call stack, using
"function {function-name}[{lnum}]" for a function line
and "script {file-name}[{lnum}]" for a script line, and
".." in between items.  E.g.:
"function {function-name1}[{lnum}]..{function-name2}[{lnum}]"
### <a id="If there is no call stack you get error E489 ." class="section-title" href="#If there is no call stack you get error E489 .">Note:</a>
### <a id=":<script> <script>" class="section-title" href="#:<script> <script>">Note:</a>

```
script>   When executing a `:source` command, is replaced with the file
name of the sourced file.  When executing a function, is
replaced with the file name of the script where it is
defined.
### <a id="If the file name cannot be determined you get error E1274 ." class="section-title" href="#If the file name cannot be determined you get error E1274 .">Note:</a>
### <a id=":<slnum> <slnum>" class="section-title" href="#:<slnum> <slnum>">Note:</a>

```
slnum>	   When executing a `:source` command, is replaced with the
line number.  *E842*
When executing a function it's the line number relative to
the start of the function.
### <a id=":<sflnum> <sflnum>" class="section-title" href="#:<sflnum> <sflnum>">Note:</a>

```
sflnum>   When executing a script, is replaced with the line number.
It differs from <slnum> in that <sflnum> is replaced with
the script line number in any situation.  *E961*

### <a id="filename-modifiers" class="section-title" href="#filename-modifiers">Note:</a>
*:_%:* *::8* *::p* *::.* *::~* *::h* *::t* *::r* *::e* *::s* *::gs* *::S*
### <a id="%:8 %:p %:. %:~ %:h %:t %:r %:e %:s %:gs %:S" class="section-title" href="#%:8 %:p %:. %:~ %:h %:t %:r %:e %:s %:gs %:S">Note:</a>
The file name modifiers can be used after "%", "#", "#n", "<cfile>", "<sfile>",
"<afile>" or "<abuf>".  They are also used with the [fnamemodify()](#fnamemodify()) function.
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
works like the [:s](#:s) command.  "pat" is a regular expression.
Any character can be used for '?', but it must not occur in
"pat" or "sub".
After this, the previous modifiers can be used again.  For
example ":p", to make a full path after the substitution.
:gs?pat?sub?
Substitute all occurrences of "pat" with "sub".  Otherwise
this works like ":s".
:S	Escape special characters for use with a shell command (see
[shellescape()](#shellescape())). Must be the last one. Examples:
```
:!dir <cfile>:S
:call system('chmod +w -- ' . expand('%:S'))

Examples, when the file name is "src/version.c", current dir
"/home/mool/vim":
```
:p			/home/mool/vim/src/version.c
:p:.				       src/version.c
:p:~				 ~/vim/src/version.c
:h				       src
:p:h			/home/mool/vim/src
:p:h:h		/home/mool/vim
:t					   version.c
:p:t					   version.c
:r				       src/version
:p:r			/home/mool/vim/src/version
:t:r					   version
:e						   c
:s?version?main?		       src/main.c
:s?version?main?:p	/home/mool/vim/src/main.c
:p:gs?/?\\?		\home\mool\vim\src\version.c

Examples, when the file name is "src/version.c.gz":
```
:p			/home/mool/vim/src/version.c.gz
:e						     gz
:e:e						   c.gz
:e:e:e					   c.gz
:e:e:r					   c
:r				       src/version.c
:r:e						   c
:r:r				       src/version
:r:r:r			       src/version

```

### <a id="extension-removal :_%<" class="section-title" href="#extension-removal :_%<">Note:</a>
If a "<" is appended to "%", "#", "#n" or "CTRL-V p" the extension of the file
name is removed (everything after and including the last '.' in the file
name).  This is included for backwards compatibility with version 3.0, the
":r" form is preferred.  Examples:
```

%		current file name
%<		current file name without extension
#		alternate file name for current window
#<		idem, without extension
#31		alternate file number 31
#31<		idem, without extension

```
cword>		word under the cursor

```
cWORD>		WORD under the cursor (see [WORD](#WORD))

```
cfile>		path name under the cursor

```
cfile><	idem, without extension

Note: Where a file name is expected wildcards expansion is done.  On Unix the
shell is used for this, unless it can be done internally (for speed).
Backticks work also, like in
```
:n `echo *.c`
But expansion is only done if there are any wildcards before expanding the
'%', '#', etc..  This avoids expanding wildcards inside a file name.  If you
want to expand the result of <cfile>, add a wildcard character to it.
Examples: (alternate file name is "?readme?")
command		expands to  ~
:e #		:e ?readme?
:e `ls #`	:e {files matching "?readme?"}
### <a id=":e {files matching "?readme?."}" class="section-title" href="#:e {files matching "?readme?."}">	:e #.*</a>
:cd <cfile>	:cd {file name under cursor}
:cd <cfile>*	:cd {file name under cursor plus "*" and then expanded}
Also see [`=](#`=).

When the expanded argument contains a "!" and it is used for a shell command
(":!cmd", ":r !cmd" or ":w !cmd"), the "!" is escaped with a backslash to
avoid it being expanded into a previously used command.  When the 'shell'
option contains "sh", this is done twice, to avoid the shell trying to expand
the "!".

### <a id="filename-backslash" class="section-title" href="#filename-backslash">Note:</a>
For filesystems that use a backslash as directory separator (Windows
filesystems), it's a bit difficult to recognize a backslash that is used
to escape the special meaning of the next character.  The general rule is: If
the backslash is followed by a normal file name character, it does not have a
special meaning.  Therefore "\file\foo" is a valid file name, you don't have
to type the backslash twice.

An exception is the '$' sign.  It is a valid character in a file name.  But
to avoid a file name like "$home" to be interpreted as an environment variable,
it needs to be preceded by a backslash.  Therefore you need to use "/\$home"
for the file "$home" in the root directory.  A few examples:

FILE NAME	INTERPRETED AS	~
$home		expanded to value of environment var $home
\$home		file "$home" in current directory
/\$home		file "$home" in root directory
\\$home		file "\\", followed by expanded $home

Also see [`=](#`=).


## <a id="cmdline-window cmdwin" class="section-title" href="#cmdline-window cmdwin">7. Command-Line Window</a> <span id="command-line-window"></span>

In the command-line window the command line can be edited just like editing
text in any window.  It is a special kind of window, because you cannot leave
it in a normal way.


### <a id="c_CTRL-F q: q/ q?" class="section-title" href="#c_CTRL-F q: q/ q?">OPEN</a>

There are two ways to open the command-line window:
1. From Command-line mode, use the key specified with the 'cedit' option.
2. From Normal mode, use the "q:", "q/" or "q?" command.
This starts editing an Ex command-line ("q:") or search string ("q/" or
"q?").  Note that this is not possible while recording is in progress (the
"q" stops recording then).

When the window opens it is filled with the command-line history.  The last
line contains the command as typed so far.  The left column will show a
character that indicates the type of command-line being edited, see
[cmdwin-char](#cmdwin-char).

Vim will be in Normal mode when the editor is opened.

The height of the window is specified with 'cmdwinheight' (or smaller if there
is no room).  The window is always full width and is positioned just above the
command-line.


EDIT

You can now use commands to move around and edit the text in the window.  Both
in Normal mode and Insert mode.

It is possible to use ":", "/" and other commands that use the command-line,
but it's not possible to open another command-line window then.  There is no
nesting.
### <a id="E11 E1188" class="section-title" href="#E11 E1188">Note:</a>
The command-line window is not a normal window.  It is not possible to move to
another window or edit another buffer.  All commands that would do this are
disabled in the command-line window.  Of course it _is_ possible to execute
any command that you entered in the command-line window.  Other text edits are
discarded when closing the window.


### <a id="E199" class="section-title" href="#E199">CLOSE</a>

There are several ways to leave the command-line window:


```
CR>		Execute the command-line under the cursor.  Works both in
Insert and in Normal mode.
CTRL-C		Continue in Command-line mode.  The command-line under the
cursor is used as the command-line.  Works both in Insert and
in Normal mode.  There is no redraw, thus the window will
remain visible.
:quit		Discard the command line and go back to Normal mode.
":close", CTRL-W c, ":exit", ":xit" and CTRL-\ CTRL-N also
work.
:qall		Quit Vim, unless there are changes in some buffer.
:qall!		Quit Vim, discarding changes to any buffer.

Once the command-line window is closed the old window sizes are restored.  The
executed command applies to the window and buffer where the command-line was
started from.  This works as if the command-line window was not there, except
that there will be an extra screen redraw.
The buffer used for the command-line window is deleted.  Any changes to lines
other than the one that is executed with <CR> are lost.

If you would like to execute the command under the cursor and then have the
command-line window open again, you may find this mapping useful:
```

:autocmd CmdwinEnter * map <buffer> <F5> <CR>q:


VARIOUS

The command-line window cannot be used when there already is a command-line
window (no nesting).

Some options are set when the command-line window is opened:
'filetype'	"vim", when editing an Ex command-line; this starts Vim syntax
highlighting if it was enabled
'rightleft'	off
'modifiable'	on
'buftype'	"nofile"
'swapfile'	off

It is allowed to write the buffer contents to a file.  This is an easy way to
save the command-line history and read it back later.

If the 'wildchar' option is set to <Tab>, and the command-line window is used
for an Ex command, then two mappings will be added to use <Tab> for completion
in the command-line window, like this:
```
:inoremap <buffer> <Tab> <C-X><C-V>
:nnoremap <buffer> <Tab> a<C-X><C-V>
Note that hitting <Tab> in Normal mode will do completion on the next
character.  That way it works at the end of the line.
If you don't want these mappings, disable them with:
```
au CmdwinEnter [:>] iunmap <buffer> <Tab>
au CmdwinEnter [:>] nunmap <buffer> <Tab>
You could put these lines in your vimrc file.

While in the command-line window you cannot use the mouse to put the cursor in
another window, or drag statuslines of other windows.  You can drag the
statusline of the command-line window itself and the statusline above it.
Thus you can resize the command-line window, but not others.

The [getcmdwintype()](#getcmdwintype()) function returns the type of the command-line being
edited as described in [cmdwin-char](#cmdwin-char).

Nvim defines this default CmdWinEnter autocmd in the "nvim_cmdwin" group:
```
autocmd CmdWinEnter [:>] syntax sync minlines=1 maxlines=1

```

You can disable this in your config with "autocmd! nvim_cmdwin". [default-autocmds](#default-autocmds)


AUTOCOMMANDS

Two autocommand events are used: [CmdwinEnter| and |CmdwinLeave](#CmdwinEnter| and |CmdwinLeave).  You can use
the Cmdwin events to do settings specifically for the command-line window.
Be careful not to cause side effects!
Example:
```
:au CmdwinEnter :  let b:cpt_save = &cpt | set cpt=.
:au CmdwinLeave :  let &cpt = b:cpt_save
This sets 'complete' to use completion in the current window for [i_CTRL-N](#i_CTRL-N).
Another example:
```
:au CmdwinEnter [/?]  startinsert
This will make Vim start in Insert mode in the command-line window.

### <a id="cmdline-char cmdwin-char" class="section-title" href="#cmdline-char cmdwin-char">Note:</a>
The character used for the pattern indicates the type of command-line:
:	normal Ex command
>	debug mode command [debug-mode](#debug-mode)
/	forward search string
?	backward search string
=	expression for "= [expr-register](#expr-register)
@	string for [input()](#input())
-	text for [:insert| or |:append](#:insert| or |:append)

vim:tw=78:ts=8:noet:ft=help:norl:

