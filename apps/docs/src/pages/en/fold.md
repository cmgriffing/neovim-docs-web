---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Nvim" class="section-title" href="#Nvim"> Fold Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="Folding folding folds" class="section-title" href="#Folding folding folds">Folding</a>

You can find an introduction on folding in chapter 28 of the user manual.
[usr_28.txt](#usr_28.txt)

Type [gO](#gO) to see the table of contents.


## <a id="fold-methods" class="section-title" href="#fold-methods">1. Fold Methods</a> 

The folding method can be set with the 'foldmethod' option.

When setting 'foldmethod' to a value other than "manual", all folds are
deleted and new ones created.  Switching to the "manual" method doesn't remove
the existing folds.  This can be used to first define the folds automatically
and then change them manually.

There are six methods to select folds:
manual		manually define folds
indent		more indent means a higher fold level
expr		specify an expression to define folds
syntax		folds defined by syntax highlighting
diff		folds for unchanged text
marker		folds defined by markers in the text


### <a id="fold-manual" class="section-title" href="#fold-manual">MANUAL</a>

Use commands to manually define the fold regions.  This can also be used by a
script that parses text to find folds.

The level of a fold is only defined by its nesting.  To increase the fold
level of a fold for a range of lines, define a fold inside it that has the
same lines.

The manual folds are lost when you abandon the file.  To save the folds use
the [:mkview| command.  The view can be restored later with |:loadview](#:mkview| command.  The view can be restored later with |:loadview).


### <a id="fold-indent" class="section-title" href="#fold-indent">INDENT</a>

The folds are automatically defined by the indent of the lines.

The foldlevel is computed from the indent of the line, divided by the
'shiftwidth' (rounded down).  A sequence of lines with the same or higher fold
level form a fold, with the lines with a higher level forming a nested fold.

The nesting of folds is limited with 'foldnestmax'.

Some lines are ignored and get the fold level of the line above or below it,
whichever is lower.  These are empty or white lines and lines starting
with a character in 'foldignore'.  White space is skipped before checking for
characters in 'foldignore'.  For C use "#" to ignore preprocessor lines.

When you want to ignore lines in another way, use the "expr" method.  The
[indent()](#indent()) function can be used in 'foldexpr' to get the indent of a line.


### <a id="fold-expr" class="section-title" href="#fold-expr">EXPR</a>

The folds are automatically defined by their foldlevel, like with the "indent"
method.  The value of the 'foldexpr' option is evaluated to get the foldlevel
of a line.  Examples:
This will create a fold for all consecutive lines that start with a tab:
```
:set foldexpr=getline(v:lnum)[0]==\"\\t\"
This will call a function to compute the fold level:
```
:set foldexpr=MyFoldLevel(v:lnum)
This will make a fold out of paragraphs separated by blank lines:
```
:set foldexpr=getline(v:lnum)=~'^\\s*$'&&getline(v:lnum+1)=~'\\S'?'<1':1
This does the same:
```
:set foldexpr=getline(v:lnum-1)=~'^\\s*$'&&getline(v:lnum)=~'\\S'?'>1':1

Note that backslashes must be used to escape characters that ":set" handles
differently (space, backslash, double quote, etc., see [option-backslash](#option-backslash)).

These are the conditions with which the expression is evaluated:
- The current buffer and window are set for the line.
- The variable "v:lnum" is set to the line number.
- The result is used for the fold level in this way:
value			meaning ~
0			the line is not in a fold
1, 2, ..		the line is in a fold with this level
-1			the fold level is undefined, use the fold level of a
line before or after this line, whichever is the
lowest.
"="			use fold level from the previous line
"a1", "a2", ..	add one, two, .. to the fold level of the previous
line, use the result for the current line
"s1", "s2", ..	subtract one, two, .. from the fold level of the
previous line, use the result for the next line
"<1", "<2", ..	a fold with this level ends at this line
">1", ">2", ..	a fold with this level starts at this line

It is not required to mark the start (end) of a fold with ">1" ("<1"), a fold
will also start (end) when the fold level is higher (lower) than the fold
level of the previous line.

There must be no side effects from the expression.  The text in the buffer,
cursor position, the search patterns, options etc. must not be changed.
You can change and restore them if you are careful.

If there is some error in the expression, or the resulting value isn't
recognized, there is no error message and the fold level will be zero.
For debugging the 'debug' option can be set to "msg", the error messages will
be visible then.

Note: Since the expression has to be evaluated for every line, this fold
method can be very slow!

Try to avoid the "=", "a" and "s" return values, since Vim often has to search
backwards for a line for which the fold level is defined.  This can be slow.

An example of using "a1" and "s1": For a multi-line C comment, a line
containing "/*" would return "a1" to start a fold, and a line containing "*/"
would return "s1" to end the fold after that line:
```
### <a id="if match(thisline, '/\') >= 0" class="section-title" href="#if match(thisline, '/\') >= 0">Note:</a>
return 'a1'
### <a id="elseif match(thisline, '\/') >= 0" class="section-title" href="#elseif match(thisline, '\/') >= 0">Note:</a>
return 's1'
else
return '='
endif
However, this won't work for single line comments, strings, etc.

[foldlevel()](#foldlevel()) can be useful to compute a fold level relative to a previous
fold level.  But note that foldlevel() may return -1 if the level is not known
yet.  And it returns the level at the start of the line, while a fold might
end in that line.

It may happen that folds are not updated properly.  You can use [zx| or |zX](#zx| or |zX)
to force updating folds.


### <a id="fold-syntax" class="section-title" href="#fold-syntax">SYNTAX</a>

A fold is defined by syntax items that have the "fold" argument. [:syn-fold](#:syn-fold)

The fold level is defined by nesting folds.  The nesting of folds is limited
with 'foldnestmax'.

Be careful to specify proper syntax syncing.  If this is not done right, folds
may differ from the displayed highlighting.  This is especially relevant when
using patterns that match more than one line.  In case of doubt, try using
brute-force syncing:
```
:syn sync fromstart


### <a id="fold-diff" class="section-title" href="#fold-diff">DIFF</a>

The folds are automatically defined for text that is not part of a change or
close to a change.

This method only works properly when the 'diff' option is set for the current
window and changes are being displayed.  Otherwise the whole buffer will be
one big fold.

The 'diffopt' option can be used to specify the context.  That is, the number
of lines between the fold and a change that are not included in the fold.  For
example, to use a context of 8 lines:
```
:set diffopt=filler,context:8
The default context is six lines.

When 'scrollbind' is also set, Vim will attempt to keep the same folds open in
other diff windows, so that the same text is visible.


### <a id="fold-marker" class="section-title" href="#fold-marker">MARKER</a>

Markers in the text tell where folds start and end.  This allows you to
precisely specify the folds.  This will allow deleting and putting a fold,
without the risk of including the wrong lines.  The 'foldtext' option is
normally set such that the text before the marker shows up in the folded line.
This makes it possible to give a name to the fold.

Markers can have a level included, or can use matching pairs.  Including a
level is easier, you don't have to add end markers and avoid problems with
non-matching marker pairs.  Example:
```
/* global variables {{{1 */
int varA, varB;

/* functions {{{1 */
/* funcA() {{{2 */
void funcA() {}

/* funcB() {{{2 */
void funcB() {}

A fold starts at a "{{{" marker.  The following number specifies the fold
level.  What happens depends on the difference between the current fold level
and the level given by the marker:
1. If a marker with the same fold level is encountered, the previous fold
ends and another fold with the same level starts.
2. If a marker with a higher fold level is found, a nested fold is started.
3. If a marker with a lower fold level is found, all folds up to and including
this level end and a fold with the specified level starts.

The number indicates the fold level.  A zero cannot be used (a marker with
level zero is ignored).  You can use "}}}" with a digit to indicate the level
of the fold that ends.  The fold level of the following line will be one less
than the indicated level.  Note that Vim doesn't look back to the level of the
matching marker (that would take too much time).  Example:
```

{{{1
fold level here is 1
{{{3
fold level here is 3
}}}3
fold level here is 2

You can also use matching pairs of "{{{" and "}}}" markers to define folds.
Each "{{{" increases the fold level by one, each "}}}" decreases the fold
level by one.  Be careful to keep the markers matching!  Example:
```

{{{
fold level here is 1
{{{
fold level here is 2
}}}
fold level here is 1

You can mix using markers with a number and without a number.  A useful way of
doing this is to use numbered markers for large folds, and unnumbered markers
locally in a function.  For example use level one folds for the sections of
your file like "structure definitions", "local variables" and "functions".
Use level 2 markers for each definition and function,  Use unnumbered markers
inside functions.  When you make changes in a function to split up folds, you
don't have to renumber the markers.

The markers can be set with the 'foldmarker' option.  It is recommended to
keep this at the default value of "{{{,}}}", so that files can be exchanged
between Vim users.  Only change it when it is required for the file (e.g., it
contains markers from another folding editor, or the default markers cause
trouble for the language of the file).

### <a id="fold-create-marker" class="section-title" href="#fold-create-marker">Note:</a>
"zf" can be used to create a fold defined by markers.  Vim will insert the
markers for you.  Vim will append the start and end marker, as specified with
'foldmarker'.  The markers are appended to the end of the line.
'commentstring' is used if it isn't empty.
This does not work properly when:
- The line already contains a marker with a level number.  Vim then doesn't
know what to do.
- Folds nearby use a level number in their marker which gets in the way.
- The line is inside a comment, 'commentstring' isn't empty and nested
comments don't work.  For example with C: adding /* {{{ */ inside a comment
will truncate the existing comment.  Either put the marker before or after
the comment, or add the marker manually.
Generally it's not a good idea to let Vim create markers when you already have
markers with a level number.

### <a id="fold-delete-marker" class="section-title" href="#fold-delete-marker">Note:</a>
"zd" can be used to delete a fold defined by markers.  Vim will delete the
markers for you.  Vim will search for the start and end markers, as specified
with 'foldmarker', at the start and end of the fold.  When the text around the
marker matches with 'commentstring', that text is deleted as well.
This does not work properly when:
- A line contains more than one marker and one of them specifies a level.
Only the first one is removed, without checking if this will have the
desired effect of deleting the fold.
- The marker contains a level number and is used to start or end several folds
at the same time.


## <a id="fold-commands E490" class="section-title" href="#fold-commands E490">2. Fold Commands</a> 

All folding commands start with "z".  Hint: the "z" looks like a folded piece
of paper, if you look at it from the side.


CREATING AND DELETING FOLDS ~
### <a id="zf E350" class="section-title" href="#zf E350">Note:</a>
zf{motion}  or
{Visual}zf	Operator to create a fold.
This only works when 'foldmethod' is "manual" or "marker".
The new fold will be closed for the "manual" method.
'foldenable' will be set.
Also see [fold-create-marker](#fold-create-marker).

### <a id="zF" class="section-title" href="#zF">Note:</a>
zF		Create a fold for [count] lines.  Works like "zf".

### <a id=":fold :fo" class="section-title" href="#:fold :fo">:{range}fo[ld]</a>
Create a fold for the lines in {range}.  Works like "zf".

### <a id="zd E351" class="section-title" href="#zd E351">Note:</a>
zd		Delete one fold at the cursor.  When the cursor is on a folded
line, that fold is deleted.  Nested folds are moved one level
up.  In Visual mode one level of all folds (partially) in the
selected area are deleted.
Careful: This easily deletes more folds than you expect and
there is no undo for manual folding.
This only works when 'foldmethod' is "manual" or "marker".
Also see [fold-delete-marker](#fold-delete-marker).

### <a id="zD" class="section-title" href="#zD">Note:</a>
zD		Delete folds recursively at the cursor.  In Visual mode all
folds (partially) in the selected area and all nested folds in
them are deleted.
This only works when 'foldmethod' is "manual" or "marker".
Also see [fold-delete-marker](#fold-delete-marker).

### <a id="zE E352" class="section-title" href="#zE E352">Note:</a>
zE		Eliminate all folds in the window.
This only works when 'foldmethod' is "manual" or "marker".
Also see [fold-delete-marker](#fold-delete-marker).


OPENING AND CLOSING FOLDS ~

A fold smaller than 'foldminlines' will always be displayed like it was open.
Therefore the commands below may work differently on small folds.

### <a id="zo" class="section-title" href="#zo">Note:</a>
zo		Open one fold under the cursor.  When a count is given, that
many folds deep will be opened.  In Visual mode one level of
folds is opened for all lines in the selected area.

### <a id="zO" class="section-title" href="#zO">Note:</a>
zO		Open all folds under the cursor recursively.  Folds that don't
contain the cursor line are unchanged.
In Visual mode it opens all folds that are in the selected
area, also those that are only partly selected.

### <a id="zc" class="section-title" href="#zc">Note:</a>
zc		Close one fold under the cursor.  When a count is given, that
many folds deep are closed.  In Visual mode one level of folds
is closed for all lines in the selected area.
'foldenable' will be set.

### <a id="zC" class="section-title" href="#zC">Note:</a>
zC		Close all folds under the cursor recursively.  Folds that
don't contain the cursor line are unchanged.
In Visual mode it closes all folds that are in the selected
area, also those that are only partly selected.
'foldenable' will be set.

### <a id="za" class="section-title" href="#za">Note:</a>
za		When on a closed fold: open it.  When folds are nested, you
may have to use "za" several times.  When a count is given,
that many closed folds are opened.
When on an open fold: close it and set 'foldenable'.  This
will only close one level, since using "za" again will open
the fold.  When a count is given that many folds will be
closed (that's not the same as repeating "za" that many
times).

### <a id="zA" class="section-title" href="#zA">Note:</a>
zA		When on a closed fold: open it recursively.
When on an open fold: close it recursively and set
'foldenable'.

### <a id="zv" class="section-title" href="#zv">Note:</a>
zv		View cursor line: Open just enough folds to make the line in
which the cursor is located not folded.

### <a id="zx" class="section-title" href="#zx">Note:</a>
zx		Update folds: Undo manually opened and closed folds: re-apply
'foldlevel', then do "zv": View cursor line.
Also forces recomputing folds.  This is useful when using
'foldexpr' and the buffer is changed in a way that results in
folds not to be updated properly.

### <a id="zX" class="section-title" href="#zX">Note:</a>
zX		Undo manually opened and closed folds: re-apply 'foldlevel'.
Also forces recomputing folds, like [zx](#zx).

### <a id="zm" class="section-title" href="#zm">Note:</a>
zm		Fold more: Subtract [v:count1](#v:count1) from 'foldlevel'.  If 'foldlevel' was
already zero nothing happens.
'foldenable' will be set.

### <a id="zM" class="section-title" href="#zM">Note:</a>
zM		Close all folds: set 'foldlevel' to 0.
'foldenable' will be set.

### <a id="zr" class="section-title" href="#zr">Note:</a>
zr		Reduce folding: Add [v:count1](#v:count1) to 'foldlevel'.

### <a id="zR" class="section-title" href="#zR">Note:</a>
zR		Open all folds.  This sets 'foldlevel' to highest fold level.

### <a id=":foldo :foldopen" class="section-title" href="#:foldo :foldopen">Note:</a>
:{range}foldo[pen][!]
Open folds in {range}.  When [!] is added all folds are
opened.  Useful to see all the text in {range}.  Without [!]
one level of folds is opened.

### <a id=":foldc :foldclose" class="section-title" href="#:foldc :foldclose">Note:</a>
:{range}foldc[lose][!]
Close folds in {range}.  When [!] is added all folds are
closed.  Useful to hide all the text in {range}.  Without [!]
one level of folds is closed.

### <a id="zn" class="section-title" href="#zn">Note:</a>
zn		Fold none: reset 'foldenable'.  All folds will be open.

### <a id="zN" class="section-title" href="#zN">Note:</a>
zN		Fold normal: set 'foldenable'.  All folds will be as they
were before.

### <a id="zi" class="section-title" href="#zi">Note:</a>
zi		Invert 'foldenable'.


MOVING OVER FOLDS ~
### <a id="[z" class="section-title" href="#[z">Note:</a>
[z		Move to the start of the current open fold.  If already at the
start, move to the start of the fold that contains it.  If
there is no containing fold, the command fails.
When a count is used, repeats the command [count] times.

### <a id="]z" class="section-title" href="#]z">Note:</a>
]z		Move to the end of the current open fold.  If already at the
end, move to the end of the fold that contains it.  If there
is no containing fold, the command fails.
When a count is used, repeats the command [count] times.

### <a id="zj" class="section-title" href="#zj">Note:</a>
zj		Move downwards to the start of the next fold.  A closed fold
is counted as one fold.
When a count is used, repeats the command [count] times.
This command can be used after an [operator](#operator).

### <a id="zk" class="section-title" href="#zk">Note:</a>
zk		Move upwards to the end of the previous fold.  A closed fold
is counted as one fold.
When a count is used, repeats the command [count] times.
This command can be used after an [operator](#operator).


EXECUTING COMMANDS ON FOLDS ~

### <a id=":foldd :folddo :folddoopen" class="section-title" href="#:foldd :folddo :folddoopen">:[range]foldd[oopen] {cmd}</a>
Execute {cmd} on all lines that are not in a closed fold.
When [range] is given, only these lines are used.
Each time {cmd} is executed the cursor is positioned on the
line it is executed for.
This works like the ":global" command: First all lines that
are not in a closed fold are marked.  Then the {cmd} is
executed for all marked lines.  Thus when {cmd} changes the
folds, this has no influence on where it is executed (except
when lines are deleted, of course).
Example:
```
:folddoopen s/end/loop_end/ge

```
		Note the use of the "e" flag to avoid getting an error message
where "end" doesn't match.

### <a id=":folddoc :folddoclosed" class="section-title" href="#:folddoc :folddoclosed">:[range]folddoc[losed] {cmd}</a>
Execute {cmd} on all lines that are in a closed fold.
Otherwise like ":folddoopen".


## <a id="fold-options" class="section-title" href="#fold-options">3. Fold Options</a> 

### <a id="fold-colors" class="section-title" href="#fold-colors">COLORS</a>

The colors of a closed fold are set with the Folded group [hl-Folded](#hl-Folded).  The
colors of the fold column are set with the FoldColumn group [hl-FoldColumn](#hl-FoldColumn).
Example to set the colors:
```

:highlight Folded guibg=grey guifg=blue
:highlight FoldColumn guibg=darkgrey guifg=white


### <a id="fold-foldlevel" class="section-title" href="#fold-foldlevel">FOLDLEVEL</a>

'foldlevel' is a number option: The higher the more folded regions are open.
When 'foldlevel' is 0, all folds are closed.
When 'foldlevel' is positive, some folds are closed.
When 'foldlevel' is very high, all folds are open.
'foldlevel' is applied when it is changed.  After that manually folds can be
opened and closed.
When increased, folds above the new level are opened.  No manually opened
folds will be closed.
When decreased, folds above the new level are closed.  No manually closed
folds will be opened.


### <a id="fold-foldtext" class="section-title" href="#fold-foldtext">FOLDTEXT</a>

'foldtext' is a string option that specifies an expression.  This expression
is evaluated to obtain the text displayed for a closed fold.  Example:
```

### <a id=":set foldtext=v:folddashes.substitute(getline(v:foldstart),'/\\\\\[\\/\\\|{{{\\d\\=','','g')" class="section-title" href="#:set foldtext=v:folddashes.substitute(getline(v:foldstart),'/\\\\\|\\/\\\](#\\/\\\|{{{\\d\\=','','g')" class="section-title" href="#:set foldtext=v:folddashes.substitute(getline(v:foldstart),'/\\\\\|\\/\\\){{{\\d\\=','','g')">Note:</a>

This shows the first line of the fold, with "/*", "*/" and "{{{" removed.
Note the use of backslashes to avoid some characters to be interpreted by the
":set" command.  It is much simpler to define a function and call it:
```

:set foldtext=MyFoldText()
:function MyFoldText()
:  let line = getline(v:foldstart)
:  let sub = substitute(line, '/\*\[\*/\](#\*/\){{{\d\=', '', 'g')
:  return v:folddashes .. sub
:endfunction

Evaluating 'foldtext' is done in the [sandbox](#sandbox).  The current window is set to
the window that displays the line.

Errors are ignored.  For debugging set the 'debug' option to "throw".

The default value is [foldtext()](#foldtext()).  This returns a reasonable text for most
types of folding.  If you don't like it, you can specify your own 'foldtext'
expression.  It can use these special Vim variables:
v:foldstart	line number of first line in the fold
v:foldend	line number of last line in the fold
v:folddashes	a string that contains dashes to represent the
foldlevel.
v:foldlevel	the foldlevel of the fold

In the result a TAB is replaced with a space and unprintable characters are
made into printable characters.

The resulting line is truncated to fit in the window, it never wraps.
When there is room after the text, it is filled with the character specified
by 'fillchars'.

Note that backslashes need to be used for characters that the ":set" command
handles differently: Space, backslash and double-quote. [option-backslash](#option-backslash)


### <a id="fold-foldcolumn" class="section-title" href="#fold-foldcolumn">FOLDCOLUMN</a>

'foldcolumn' is a number, which sets the width for a column on the side of the
window to indicate folds.  When it is zero, there is no foldcolumn.  A normal
value is auto:9. The maximum is 9.

An open fold is indicated with a column that has a '-' at the top and '|'
characters below it.  This column stops where the open fold stops.  When folds
nest, the nested fold is one character right of the fold it's contained in.

A closed fold is indicated with a '+'.

These characters can be changed with the 'fillchars' option.

Where the fold column is too narrow to display all nested folds, digits are
shown to indicate the nesting level.

The mouse can also be used to open and close folds by clicking in the
fold column:
- Click on a '+' to open the closed fold at this row.
- Click on any other non-blank character to close the open fold at this row.


OTHER OPTIONS

'foldenable'  'fen':	Open all folds while not set.
'foldexpr'    'fde':	Expression used for "expr" folding.
'foldignore'  'fdi':	Characters used for "indent" folding.
'foldmarker'  'fmr':	Defined markers used for "marker" folding.
'foldmethod'  'fdm':	Name of the current folding method.
'foldminlines' 'fml':	Minimum number of screen lines for a fold to be
displayed closed.
'foldnestmax' 'fdn':	Maximum nesting for "indent" and "syntax" folding.
'foldopen'    'fdo':	Which kinds of commands open closed folds.
'foldclose'   'fcl':	When the folds not under the cursor are closed.


## <a id="fold-behavior" class="section-title" href="#fold-behavior">4. Behavior of Folds</a> 

When moving the cursor upwards or downwards and when scrolling, the cursor
will move to the first line of a sequence of folded lines.  When the cursor is
already on a folded line, it moves to the next unfolded line or the next
closed fold.

While the cursor is on folded lines, the cursor is always displayed in the
first column.  The ruler does show the actual cursor position, but since the
line is folded, it cannot be displayed there.

Many movement commands handle a sequence of folded lines like an empty line.
For example, the "w" command stops once in the first column.

When in Insert mode, the cursor line is never folded.  That allows you to see
what you type!

When using an operator, a closed fold is included as a whole.  Thus "dl"
deletes the whole closed fold under the cursor.

For Ex commands that work on buffer lines the range is adjusted to always
start at the first line of a closed fold and end at the last line of a closed
fold.  Thus this command:
```
:s/foo/bar/g
when used with the cursor on a closed fold, will replace "foo" with "bar" in
all lines of the fold.
This does not happen for [:folddoopen| and |:folddoclosed](#:folddoopen| and |:folddoclosed).

When editing a buffer that has been edited before, the last used folding
settings are used again.  For manual folding the defined folds are restored.
For all folding methods the manually opened and closed folds are restored.
If this buffer has been edited in this window, the values from back then are
used.  Otherwise the values from the window where the buffer was edited last
are used.


## <a id="" class="section-title" href="#">Vim Tw 78 Ts 8 Noet Ft Help Norl</a> 


