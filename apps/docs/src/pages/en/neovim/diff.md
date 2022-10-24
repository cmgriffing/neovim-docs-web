---
title: Tree Sitter
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Diff Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="diff diff-mode" class="section-title" href="#diff diff-mode">Note:</a>
This file describes the diff feature: Showing differences between two to
eight versions of the same file.

The basics are explained in section [08.7](#08.7) of the user manual.

Type [gO](#gO) to see the table of contents.


## <a id="start-vimdiff" class="section-title" href="#start-vimdiff">1. Starting Diff Mode</a> 

To start editing in diff mode, run "nvim -d".  This starts Nvim as usual, and
additionally sets up for viewing the differences between the arguments.
```

nvim -d file1 file2 [file3 [file4]]

In addition to the [-d| argument, |-R](#-d| argument, |-R) may be used for readonly mode.

The second and following arguments may also be a directory name.  Vim will
then append the file name of the first argument to the directory name to find
the file.

By default an internal diff library will be used.  When 'diffopt' or
'diffexpr' has been set an external "diff" command will be used.  This only
works when such a diff program is available.

Diffs are local to the current tab page [tab-page](#tab-page).  You can't see diffs with
a window in another tab page.  This does make it possible to have several
diffs at the same time, each in their own tab page.

What happens is that Nvim opens a window for each of the files.  This is like
using the [-O](#-O) argument.  This uses vertical splits, but if you prefer
horizontal splits use the [-o](#-o) argument instead:
```

nvim -d -o file1 file2 [file3 [file4]]

If you always prefer horizontal splits include "horizontal" in 'diffopt'.

In each of the edited files these options are set:

'diff'		on
'scrollbind'	on
'cursorbind'	on
'scrollopt'	includes "hor"
'wrap'		off, or leave as-is if 'diffopt' includes "followwrap"
'foldmethod'	"diff"
'foldcolumn'	value from 'diffopt', default is 2

These options are set local to the window.  When editing another file they are
reset to the global value.
The options can still be overruled from a modeline when re-editing the file.
However, 'foldmethod' and 'wrap' won't be set from a modeline when 'diff' is
set.
See `:diffoff` for an easy way to revert the options.

The differences shown are actually the differences in the buffer.  Thus if you
make changes after loading a file, these will be included in the displayed
diffs.  You might have to do ":diffupdate" now and then, not all changes are
immediately taken into account, especially when using an external diff command.

In your vimrc file you could do something special when Vim was started in
diff mode.  You could use a construct like this:
```

if &diff
setup for diff mode
else
setup for non-diff mode
endif

While already in Vim you can start diff mode in three ways.

### <a id="E98" class="section-title" href="#E98">Note:</a>
### <a id=":diffs :diffsplit" class="section-title" href="#:diffs :diffsplit">:diffs[plit] {filename}</a>
Open a new window on the file {filename}.  The options are set
as for "nvim -d" for the current and the newly opened window.
Also see 'diffexpr'.

### <a id=":difft :diffthis" class="section-title" href="#:difft :diffthis">Note:</a>
:difft[his]	Make the current window part of the diff windows.  This sets
the options as for "nvim -d".

### <a id="E816 :diffp :diffpatch" class="section-title" href="#E816 :diffp :diffpatch">:diffp[atch] {patchfile}</a>
Use the current buffer, patch it with the diff found in
{patchfile} and open a buffer on the result.  This sets the
options as for "nvim -d".
{patchfile} can be in any format that the "patch" program
understands or 'patchexpr' can handle.
Note that {patchfile} should only contain a diff for one file,
the current file.  If {patchfile} contains diffs for other
files as well, the results are unpredictable.  Vim changes
directory to /tmp to avoid files in the current directory
accidentally being patched.  But it may still result in
various ".rej" files to be created.  And when absolute path
names are present these files may get patched anyway.

To make these commands use a vertical split, prepend [:vertical](#:vertical).  Examples:
```

:vert diffsplit main.c~
:vert diffpatch /tmp/diff

If you always prefer a vertical split include "vertical" in 'diffopt'.

### <a id="E96" class="section-title" href="#E96">Note:</a>
There can be up to eight buffers with 'diff' set.

Since the option values are remembered with the buffer, you can edit another
file for a moment and come back to the same file and be in diff mode again.

### <a id=":diffo :diffoff" class="section-title" href="#:diffo :diffoff">Note:</a>
:diffo[ff]	Switch off diff mode for the current window.  Resets related
options also when 'diff' was not set.

:diffo[ff]!	Switch off diff mode for the current window and in all windows
in the current tab page where 'diff' is set.  Resetting
related options only happens in a window that has 'diff' set,
if the current window does not have 'diff' set then no options
in it are changed.
Hidden buffers are also removed from the list of diff'ed
buffers.

The `:diffoff` command resets the relevant options to the values they had when
using `:diffsplit`, `:diffpatch` , `:diffthis`. or starting Vim in diff mode.
When using `:diffoff` twice the last saved values are restored.
Otherwise they are set to their default value:

'diff'		off
'scrollbind'	off
'cursorbind'	off
'scrollopt'	without "hor"
'wrap'		on, or leave as-is if 'diffopt' includes "followwrap"
'foldmethod'	"manual"
'foldcolumn'	0


## <a id="view-diffs" class="section-title" href="#view-diffs">2. Viewing Diffs</a> 

The effect is that the diff windows show the same text, with the differences
highlighted.  When scrolling the text, the 'scrollbind' option will make the
text in other windows to be scrolled as well.  With vertical splits the text
should be aligned properly.

The alignment of text will go wrong when:
- 'wrap' is on, some lines will be wrapped and occupy two or more screen
lines
- folds are open in one window but not another
- 'scrollbind' is off
- changes have been made to the text
- "filler" is not present in 'diffopt', deleted/inserted lines makes the
alignment go wrong

All the buffers edited in a window where the 'diff' option is set will join in
the diff.  This is also possible for hidden buffers.  They must have been
edited in a window first for this to be possible.  To get rid of the hidden
buffers use `:diffoff!`.

### <a id=":DiffOrig diff-original-file" class="section-title" href="#:DiffOrig diff-original-file">Note:</a>
Since 'diff' is a window-local option, it's possible to view the same buffer
in diff mode in one window and "normal" in another window.  It is also
possible to view the changes you have made to a buffer since the file was
loaded.  Since Vim doesn't allow having two buffers for the same file, you
need another buffer.  This command is useful:
```
command DiffOrig vert new [ set buftype=nofile | read ++edit # ](# set buftype=nofile | read ++edit # ) 0d_
\ [ diffthis | wincmd p ](# diffthis | wincmd p ) diffthis
Use ":DiffOrig" to see the differences
between the current buffer and the file it was loaded from.

A buffer that is unloaded cannot be used for the diff.  But it does work for
hidden buffers.  You can use ":hide" to close a window without unloading the
buffer.  If you don't want a buffer to remain used for the diff do ":set
nodiff" before hiding it.

### <a id=":dif :diff :diffupdate" class="section-title" href="#:dif :diff :diffupdate">Note:</a>
:dif[fupdate][!]		Update the diff highlighting and folds.

Vim attempts to keep the differences updated when you make changes to the
text.  This mostly takes care of inserted and deleted lines.  Changes within a
line and more complicated changes do not cause the differences to be updated.
To force the differences to be updated use:
```

:diffupdate

If the ! is included Vim will check if the file was changed externally and
needs to be reloaded.  It will prompt for each changed file, like `:checktime`
was used.

Vim will show filler lines for lines that are missing in one window but are
present in another.  These lines were inserted in another file or deleted in
this file.  Removing "filler" from the 'diffopt' option will make Vim not
display these filler lines.


Folds are used to hide the text that wasn't changed.  See [folding](#folding) for all
the commands that can be used with folds.

The context of lines above a difference that are not included in the fold can
be set with the 'diffopt' option.  For example, to set the context to three
lines:
```

:set diffopt=filler,context:3


The diffs are highlighted with these groups:

[hl-DiffAdd](#hl-DiffAdd)	DiffAdd		Added (inserted) lines.  These lines exist in
this buffer but not in another.
[hl-DiffChange](#hl-DiffChange)	DiffChange	Changed lines.
[hl-DiffText](#hl-DiffText)	DiffText	Changed text inside a Changed line.  Vim
finds the first character that is different,
and the last character that is different
(searching from the end of the line).  The
text in between is highlighted.  This means
that parts in the middle that are still the
same are highlighted anyway.  The 'diffopt'
flags "iwhite" and "icase" are used here.
[hl-DiffDelete](#hl-DiffDelete)	DiffDelete	Deleted lines.  Also called filler lines,
because they don't really exist in this
buffer.


## <a id="jumpto-diffs" class="section-title" href="#jumpto-diffs">3. Jumping to Diffs</a> 

Two commands can be used to jump to diffs:
### <a id="[c" class="section-title" href="#[c">Note:</a>
[c		Jump backwards to the previous start of a change.
When a count is used, do it that many times.
### <a id="]c" class="section-title" href="#]c">Note:</a>
]c		Jump forwards to the next start of a change.
When a count is used, do it that many times.

It is an error if there is no change for the cursor to move to.


## <a id="copy-diffs E99 E100 E101 E102 E103" class="section-title" href="#copy-diffs E99 E100 E101 E102 E103">4. Diff Copying</a> <span id="merge"></span>

There are two commands to copy text from one buffer to another.  The result is
that the buffers will be equal within the specified range.

### <a id=":diffg :diffget" class="section-title" href="#:diffg :diffget">Note:</a>
:[range]diffg[et] [bufspec]
Modify the current buffer to undo difference with another
buffer.  If [bufspec] is given, that buffer is used.  If
[bufspec] refers to the current buffer then nothing happens.
Otherwise this only works if there is one other buffer in diff
mode.
See below for [range].

### <a id=":diffpu :diffput E793" class="section-title" href="#:diffpu :diffput E793">Note:</a>
:[range]diffpu[t] [bufspec]
Modify another buffer to undo difference with the current
buffer.  Just like ":diffget" but the other buffer is modified
instead of the current one.
When [bufspec] is omitted and there is more than one other
buffer in diff mode where 'modifiable' is set this fails.
See below for [range].

### <a id="do" class="section-title" href="#do">Note:</a>
[count]do	Same as ":diffget" without range.  The "o" stands for "obtain"
("dg" can't be used, it could be the start of "dgg"!). Note:
this doesn't work in Visual mode.
If you give a [count], it is used as the [bufspec] argument
for ":diffget".

### <a id="dp" class="section-title" href="#dp">Note:</a>
[count]dp	Same as ":diffput" without range.  Note: this doesn't work in
Visual mode.
If you give a [count], it is used as the [bufspec] argument
for ":diffput".


When no [range] is given, the diff at the cursor position or just above it is
affected.  When [range] is used, Vim tries to only put or get the specified
lines.  When there are deleted lines, this may not always be possible.

There can be deleted lines below the last line of the buffer.  When the cursor
is on the last line in the buffer and there is no diff above this line, the
":diffget" and "do" commands will obtain lines from the other buffer.

To be able to get those lines from another buffer in a [range] it's allowed to
use the last line number plus one.  This command gets all diffs from the other
buffer:
```

:1,$+1diffget

Note that deleted lines are displayed, but not counted as text lines.  You
can't move the cursor into them.  To fill the deleted lines with the lines
from another buffer use ":diffget" on the line below them.
### <a id="E787" class="section-title" href="#E787">Note:</a>
When the buffer that is about to be modified is read-only and the autocommand
that is triggered by [FileChangedRO](#FileChangedRO) changes buffers the command will fail.
The autocommand must not change buffers.

The [bufspec] argument above can be a buffer number, a pattern for a buffer
name or a part of a buffer name.  Examples:

:diffget		Use the other buffer which is in diff mode
:diffget 3		Use buffer 3
:diffget v2		Use the buffer which matches "v2" and is in
diff mode (e.g., "file.c.v2")


## <a id="diff-options" class="section-title" href="#diff-options">5. Diff Options</a> 

Also see ['diffopt'| and the "diff" item of |'fillchars'](#'diffopt'| and the "diff" item of |'fillchars').

### <a id="diff-slow diff_translations" class="section-title" href="#diff-slow diff_translations">Note:</a>
For very long lines, the diff syntax highlighting might be slow, especially
since it tries to match all different kind of localisations. To disable
localisations and speed up the syntax highlighting, set the global variable
g:diff_translations to zero:
```

let g:diff_translations = 0

```

After setting this variable, reload the syntax script:
```

set syntax=diff

```



### <a id="diff-diffexpr" class="section-title" href="#diff-diffexpr">Finding the Differences</a>

The 'diffexpr' option can be set to use something else than the internal diff
support or the standard "diff" program to compare two files and find the
differences.

When 'diffexpr' is empty, Vim uses this command to find the differences
between file1 and file2:
```

diff file1 file2 > outfile

The ">" is replaced with the value of 'shellredir'.

The output of "diff" must be a normal "ed" style diff or a unified diff.  A
context diff will NOT work.  For a unified diff no context lines can be used.
Using "diff -u" will NOT work, use "diff -U0".

This example explains the format that Vim expects for the "ed" style diff:
```

1a2
> bbb
4d4

```
 111
7c7

```
 GGG
---
> ggg

The "1a2" item appends the line "bbb".
The "4d4" item deletes the line "111".
The "7c7" item replaces the line "GGG" with "ggg".

When 'diffexpr' is not empty, Vim evaluates it to obtain a diff file in the
format mentioned.  These variables are set to the file names used:

v:fname_in		original file
v:fname_new		new version of the same file
v:fname_out		where to write the resulting diff file

Additionally, 'diffexpr' should take care of "icase" and "iwhite" in the
'diffopt' option.  'diffexpr' cannot change the value of 'lines' and
'columns'.

Example (this does almost the same as 'diffexpr' being empty):
```

set diffexpr=MyDiff()
function MyDiff()
let opt = ""
if &diffopt =~ "icase"
let opt = opt .. "-i "
endif
if &diffopt =~ "iwhite"
let opt = opt .. "-b "
endif
silent execute "!diff -a --binary " .. opt .. v:fname_in .. " " .. v:fname_new ..
\  " > " .. v:fname_out
redraw!
endfunction

The "-a" argument is used to force comparing the files as text, comparing as
binaries isn't useful.  The "--binary" argument makes the files read in binary
mode, so that a CTRL-Z doesn't end the text on DOS.

The `redraw!` command may not be needed, depending on whether executing a
shell command shows something on the display or not.

### <a id="E810 E97" class="section-title" href="#E810 E97">Note:</a>
Vim will do a test if the diff output looks alright.  If it doesn't, you will
get an error message.  Possible causes:
-  The "diff" program cannot be executed.
-  The "diff" program doesn't produce normal "ed" style diffs (see above).
-  The 'shell' and associated options are not set correctly.  Try if filtering
works with a command like ":!sort".
-  You are using 'diffexpr' and it doesn't work.
If it's not clear what the problem is set the 'verbose' option to one or more
to see more messages.

The self-installing Vim for MS-Windows includes a diff program.  If you don't
have it you might want to download a diff.exe.  For example from
https://gnuwin32.sourceforge.net/packages/diffutils.htm.


### <a id="diff-patchexpr" class="section-title" href="#diff-patchexpr">Using Patches</a>

The 'patchexpr' option can be set to use something else than the standard
"patch" program.

When 'patchexpr' is empty, Vim will call the "patch" program like this:
```

patch -o outfile origfile < patchfile

This should work fine with most versions of the "patch" program.  Note that a
CR in the middle of a line may cause problems, it is seen as a line break.

If the default doesn't work for you, set the 'patchexpr' to an expression that
will have the same effect.  These variables are set to the file names used:

v:fname_in		original file
v:fname_diff		patch file
v:fname_out		resulting patched file

Example (this does the same as 'patchexpr' being empty):
```

set patchexpr=MyPatch()
function MyPatch()
:call system("patch -o " .. v:fname_out .. " " .. v:fname_in ..
\  " < " .. v:fname_diff)
endfunction

Make sure that using the "patch" program doesn't have unwanted side effects.
For example, watch out for additionally generated files, which should be
deleted.  It should just patch the file and nothing else.
Vim will change directory to "/tmp" or another temp directory before
evaluating 'patchexpr'.  This hopefully avoids that files in the current
directory are accidentally patched.  Vim will also delete files starting with
v:fname_in and ending in ".rej" and ".orig".

vim:tw=78:ts=8:noet:ft=help:norl:

