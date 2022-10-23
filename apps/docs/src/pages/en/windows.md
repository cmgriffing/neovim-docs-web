---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Nvim" class="section-title" href="#Nvim"> Windows Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="windows buffers" class="section-title" href="#windows buffers">Editing with multiple windows and buffers.</a>

The commands which have been added to use multiple windows and buffers are
explained here.  Additionally, there are explanations for commands that work
differently when used in combination with more than one window.

The basics are explained in chapter 7 and 8 of the user manual [usr_07.txt](#usr_07.txt)
[usr_08.txt](#usr_08.txt).

Type [gO](#gO) to see the table of contents.


## <a id="windows-intro window" class="section-title" href="#windows-intro window">1. Introduction</a> 

Summary:
A buffer is the in-memory text of a file.
A window is a viewport on a buffer.
A tab page is a collection of windows.

A window is a viewport onto a buffer.  You can use multiple windows on one
buffer, or several windows on different buffers.

A buffer is a file loaded into memory for editing.  The original file remains
unchanged until you write the buffer to the file.

A buffer can be in one of three states:

### <a id="active-buffer" class="section-title" href="#active-buffer">Note:</a>
active:   The buffer is displayed in a window.  If there is a file for this
buffer, it has been read into the buffer.  The buffer may have been
modified since then and thus be different from the file.
### <a id="hidden-buffer" class="section-title" href="#hidden-buffer">Note:</a>
hidden:   The buffer is not displayed.  If there is a file for this buffer, it
has been read into the buffer.  Otherwise it's the same as an active
buffer, you just can't see it.
### <a id="inactive-buffer" class="section-title" href="#inactive-buffer">Note:</a>
inactive: The buffer is not displayed and does not contain anything.  Options
for the buffer are remembered if the file was once loaded.  It can
contain marks from the [shada](#shada) file.  But the buffer doesn't
contain text.

In a table:

state		displayed	loaded		":buffers"  ~
in window			shows	    ~
active		  yes		 yes		  'a'
hidden		  no		 yes		  'h'
inactive	  no		 no		  ' '

Note: All CTRL-W commands can also be executed with [:wincmd](#:wincmd), for those
places where a Normal mode command can't be used or is inconvenient.

The main Vim window can hold several split windows.  There are also tab pages
[tab-page](#tab-page), each of which can hold multiple windows.
### <a id="window-ID winid windowid" class="section-title" href="#window-ID winid windowid">Note:</a>
Each window has a unique identifier called the window ID.  This identifier
will not change within a Vim session. The [win_getid()| and |win_id2tabwin()](#win_getid()| and |win_id2tabwin())
functions can be used to convert between the window/tab number and the
identifier.  There is also the window number, which may change whenever
windows are opened or closed, see [winnr()](#winnr()).
The window number is only valid in one specific tab.  The window ID is valid
across tabs.  For most functions that take a window ID or a window number, the
window number only applies to the current tab, while the window ID can refer
to a window in any tab.

Each buffer has a unique number and the number will not change within a Vim
session.  The [bufnr()| and |bufname()](#bufnr()| and |bufname()) functions can be used to convert
between a buffer name and the buffer number.


## <a id="windows-starting" class="section-title" href="#windows-starting">2. Starting Vim</a> 

By default, Vim starts with one window, just like Vi.

The "-o" and "-O" arguments to Vim can be used to open a window for each file
in the argument list.  The "-o" argument will split the windows horizontally;
the "-O" argument will split the windows vertically.  If both "-o" and "-O"
are given, the last one encountered will be used to determine the split
orientation.  For example, this will open three windows, split horizontally:
```
vim -o file1 file2 file3

"-oN", where N is a decimal number, opens N windows split horizontally.  If
there are more file names than windows, only N windows are opened and some
files do not get a window.  If there are more windows than file names, the
last few windows will be editing empty buffers.  Similarly, "-ON" opens N
windows split vertically, with the same restrictions.

If there are many file names, the windows will become very small.  You might
want to set the 'winheight' and/or 'winwidth' options to create a workable
situation.

Buf/Win Enter/Leave [autocommand](#autocommand)s are not executed when opening the new
windows and reading the files, that's only done when they are really entered.

### <a id="status-line" class="section-title" href="#status-line">Note:</a>
A status line will be used to separate windows.  The 'laststatus' option tells
when the last window also has a status line:
'laststatus' = 0	never a status line
'laststatus' = 1	status line if there is more than one window
'laststatus' = 2	always a status line
'laststatus' = 3	have a global statusline at the bottom instead
of one for each window

You can change the contents of the status line with the 'statusline' option.
This option can be local to the window, so that you can have a different
status line in each window.

Normally, inversion is used to display the status line.  This can be changed
with the [hl-StatusLine](#hl-StatusLine) highlight group.  If no highlighting is used for the
status line, the '^' character is used for the current window, and '=' for
other windows.  If 'mouse' is enabled, a status line can be dragged to resize
windows.

### <a id="filler-lines" class="section-title" href="#filler-lines">Note:</a>
The lines after the last buffer line in a window are called filler lines.  By
default, these lines start with a tilde (~) character. The "eob" item in the
'fillchars' option can be used to change this character. By default, these
characters are highlighted as NonText ([hl-NonText](#hl-NonText)). The EndOfBuffer
highlight group ([hl-EndOfBuffer](#hl-EndOfBuffer)) can be used to change the highlighting of
the filler characters.


## <a id="opening-window" class="section-title" href="#opening-window">3. Opening and Closing a Window</a> 

### <a id="CTRL-W_s" class="section-title" href="#CTRL-W_s">CTRL-W s</a>
### <a id="CTRL-W_S" class="section-title" href="#CTRL-W_S">Ctrl-W S</a>
### <a id="CTRL-W_CTRL-S" class="section-title" href="#CTRL-W_CTRL-S">Ctrl-W Ctrl-S</a>
### <a id=":sp :split" class="section-title" href="#:sp :split">:[N]sp[lit] [++opt] [+cmd] [file]</a>
Split current window in two.  The result is two viewports on
the same file.

Make the new window N high (default is to use half the height
of the current window).  Reduces the current window height to
create room (and others, if the 'equalalways' option is set,
'eadirection' isn't "hor", and one of them is higher than the
current or the new window).

If [file] is given it will be edited in the new window.  If it
is not loaded in any buffer, it will be read.  Else the new
window will use the already loaded buffer.

Note: CTRL-S does not work on all terminals and might block
further input, use CTRL-Q to get going again.
Also see [++opt| and |+cmd](#++opt| and |+cmd).
### <a id="E242 E1159" class="section-title" href="#E242 E1159">Note:</a>
Be careful when splitting a window in an autocommand, it may
mess up the window layout if this happens while making other
window layout changes.

### <a id="CTRL-W_CTRL-V" class="section-title" href="#CTRL-W_CTRL-V">Ctrl-W Ctrl-V</a>
### <a id="CTRL-W_v" class="section-title" href="#CTRL-W_v">CTRL-W v</a>
### <a id=":vs :vsplit" class="section-title" href="#:vs :vsplit">:[N]vs[plit] [++opt] [+cmd] [file]</a>
Like [:split](#:split), but split vertically.  The windows will be
spread out horizontally if
1. a width was not specified,
2. 'equalalways' is set,
3. 'eadirection' isn't "ver", and
4. one of the other windows is wider than the current or new
window.
If N was given make the new window N columns wide, if
possible.
Note: In other places CTRL-Q does the same as CTRL-V, but here
it doesn't!

### <a id="CTRL-W_n" class="section-title" href="#CTRL-W_n">CTRL-W n</a>
### <a id="CTRL-W_CTRL-N" class="section-title" href="#CTRL-W_CTRL-N">Ctrl-W Ctrl_N</a>
### <a id=":new" class="section-title" href="#:new">:[N]new [++opt] [+cmd]</a>
Create a new window and start editing an empty file in it.
Make new window N high (default is to use half the existing
height).  Reduces the current window height to create room (and
others, if the 'equalalways' option is set and 'eadirection'
isn't "hor").
Also see [++opt| and |+cmd](#++opt| and |+cmd).
If 'fileformats' is not empty, the first format given will be
used for the new buffer.  If 'fileformats' is empty, the
'fileformat' of the current buffer is used.  This can be
overridden with the [++opt](#++opt) argument.
Autocommands are executed in this order:
1. WinLeave for the current window
2. WinEnter for the new window
3. BufLeave for the current buffer
4. BufEnter for the new buffer
This behaves like a ":split" first, and then an ":enew"
command.

:[N]new [++opt] [+cmd] {file}
### <a id=":split_f" class="section-title" href="#:split_f">:[N]sp[lit] [++opt] [+cmd] {file}</a>
Create a new window and start editing file {file} in it.  This
behaves almost like a ":split" first, and then an ":edit"
command, but the alternate file name in the original window is
set to {file}.
If [+cmd] is given, execute the command when the file has been
loaded [+cmd](#+cmd).
Also see [++opt](#++opt).
Make new window N high (default is to use half the existing
height).  Reduces the current window height to create room
(and others, if the 'equalalways' option is set).

### <a id=":vne :vnew" class="section-title" href="#:vne :vnew">:[N]vne[w] [++opt] [+cmd] [file]</a>
Like [:new](#:new), but split vertically.  If 'equalalways' is set
and 'eadirection' isn't "ver" the windows will be spread out
horizontally, unless a width was specified.

### <a id=":sv :sview splitview" class="section-title" href="#:sv :sview splitview">:[N]sv[iew] [++opt] [+cmd] [file]</a>
Same as ":split", but set 'readonly' option for this buffer.

### <a id=":sf :sfi :sfind splitfind" class="section-title" href="#:sf :sfi :sfind splitfind">:[N]sf[ind] [++opt] [+cmd] {file}</a>
Same as ":split", but search for {file} in 'path' like in
[:find](#:find).  Doesn't split if {file} is not found.

### <a id="CTRL-W_CTRL-^ CTRL-W_^" class="section-title" href="#CTRL-W_CTRL-^ CTRL-W_^">Ctrl-W Ctrl-^</a>
CTRL-W ^	Split the current window in two and edit the alternate file.
When a count N is given, split the current window and edit
buffer N.  Similar to ":sp #" and ":sp #N", but it allows the
other buffer to be unnamed.  This command matches the behavior
of [CTRL-^](#CTRL-^), except that it splits a window first.

### <a id="CTRL-W_ge" class="section-title" href="#CTRL-W_ge">CTRL-W ge</a>
Detach the current window as an external window.
Only available when using an UI with [ui-multigrid](#ui-multigrid) support.

Note that the 'splitbelow' and 'splitright' options influence where a new
window will appear.
### <a id="E36" class="section-title" href="#E36">Note:</a>
Creating a window will fail if there is not enough room.  Every window needs
at least one screen line and column, sometimes more.   Options 'winminheight'
and 'winminwidth' are relevant.

### <a id=":vert :vertical" class="section-title" href="#:vert :vertical">Note:</a>
:vert[ical] {cmd}
Execute {cmd}.  If it contains a command that splits a window,
it will be split vertically.  For `vertical wincmd =` windows
will be equalized only vertically.
Doesn't work for [:execute| and |:normal](#:execute| and |:normal).

### <a id=":hor :horizontal" class="section-title" href="#:hor :horizontal">Note:</a>
:hor[izontal] {cmd}
Execute {cmd}.  Currently only makes a difference for
`horizontal wincmd =`, which will equalize windows only
horizontally.

### <a id=":lefta :leftabove" class="section-title" href="#:lefta :leftabove">:lefta[bove] {cmd}</a>
### <a id=":abo :aboveleft" class="section-title" href="#:abo :aboveleft">:abo[veleft] {cmd}</a>
Execute {cmd}.  If it contains a command that splits a window,
it will be opened left (vertical split) or above (horizontal
split) the current window.  Overrules 'splitbelow' and
'splitright'.
Doesn't work for [:execute| and |:normal](#:execute| and |:normal).

### <a id=":rightb :rightbelow" class="section-title" href="#:rightb :rightbelow">:rightb[elow] {cmd}</a>
### <a id=":bel :belowright" class="section-title" href="#:bel :belowright">:bel[owright] {cmd}</a>
Execute {cmd}.  If it contains a command that splits a window,
it will be opened right (vertical split) or below (horizontal
split) the current window.  Overrules 'splitbelow' and
'splitright'.
Doesn't work for [:execute| and |:normal](#:execute| and |:normal).

### <a id=":topleft E442" class="section-title" href="#:topleft E442">Note:</a>
:to[pleft] {cmd}
Execute {cmd}.  If it contains a command that splits a window,
it will appear at the top and occupy the full width of the Vim
window.  When the split is vertical the window appears at the
far left and occupies the full height of the Vim window.
Doesn't work for [:execute| and |:normal](#:execute| and |:normal).

### <a id=":bo :botright" class="section-title" href="#:bo :botright">Note:</a>
:bo[tright] {cmd}
Execute {cmd}.  If it contains a command that splits a window,
it will appear at the bottom and occupy the full width of the
Vim window.  When the split is vertical the window appears at
the far right and occupies the full height of the Vim window.
Doesn't work for [:execute| and |:normal](#:execute| and |:normal).

These command modifiers can be combined to make a vertically split window
occupy the full height.  Example:
```
:vertical topleft split tags
Opens a vertically split, full-height window on the "tags" file at the far
left of the Vim window.


Closing a window
----------------

:q[uit]
### <a id=":count_quit" class="section-title" href="#:count_quit">:{count}q[uit]</a>
### <a id="CTRL-W_q" class="section-title" href="#CTRL-W_q">CTRL-W q</a>
### <a id="CTRL-W_CTRL-Q" class="section-title" href="#CTRL-W_CTRL-Q">Ctrl-W Ctrl-Q</a>
Without {count}: Quit the current window.  If {count} is
given quit the {count} window.
### <a id="edit-window" class="section-title" href="#edit-window">Note:</a>
When quitting the last edit window (not counting help or
preview windows), exit Vim.

When 'hidden' is set, and there is only one window for the
current buffer, it becomes hidden. When 'hidden' is not set,
and there is only one window for the current buffer, and the
buffer was changed, the command fails.
(Note: CTRL-Q does not work on all terminals).
If [count] is greater than the last window number the last
window will be closed:
```
:1quit  " quit the first window
:$quit  " quit the last window
:9quit  " quit the last window
" if there are fewer than 9 windows opened
:-quit  " quit the previous window
:+quit  " quit the next window
:+2quit " quit the second next window

```

When closing a help window, and this is not the only window,
Vim will try to restore the previous window layout, see
[:helpclose](#:helpclose).

:q[uit]!
:{count}q[uit]!
Without {count}: Quit the current window.  If {count} is
given quit the {count} window
If this was the last window for a buffer, any changes to that
buffer are lost. When quitting the last window (not counting
help windows), exit Vim. The contents of the buffer are lost,
even when 'hidden' is set.

:clo[se][!]
:{count}clo[se][!]
### <a id="CTRL-W_c :clo :close" class="section-title" href="#CTRL-W_c :clo :close">CTRL-W c</a>
Without {count}: Close the current window. If given close the
{count} window.

When 'hidden' is set, or when the buffer was changed and the
[!] is used, the buffer becomes hidden (unless there is another
window editing it).

When there is only one [edit-window](#edit-window) in the current tab page
and there is another tab page, this closes the current tab
page.  [tab-page](#tab-page).

This command fails when:			*E444*
- There is only one window on the screen.
- When 'hidden' is not set, [!] is not used, the buffer has
changes, and there is no other window on this buffer.
Changes to the buffer are not written and won't get lost, so
this is a "safe" command.

### <a id="CTRL-W_CTRL-C" class="section-title" href="#CTRL-W_CTRL-C">Ctrl-W Ctrl-C</a>
You might have expected that CTRL-W CTRL-C closes the current
window, but that does not work, because the CTRL-C cancels the
command.

### <a id=":hide" class="section-title" href="#:hide">Note:</a>
:hid[e]
:{count}hid[e]
Without {count}: Quit the current window, unless it is the
last window on the screen.
If {count} is given quit the {count} window.

The buffer becomes hidden (unless there is another window
editing it or 'bufhidden' is `unload`, `delete` or `wipe`).
If the window is the last one in the current tab page the tab
page is closed. [tab-page](#tab-page)

The value of 'hidden' is irrelevant for this command.
Changes to the buffer are not written and won't get lost, so
this is a "safe" command.

:hid[e] {cmd}	Execute {cmd} with 'hidden' set. The previous value of
'hidden' is restored after {cmd} has been executed.
Example:
```
:hide edit Makefile

```
		This will edit "Makefile", and hide the current buffer if it
has any changes.

:on[ly][!]
:{count}on[ly][!]
### <a id="CTRL-W_o E445" class="section-title" href="#CTRL-W_o E445">CTRL-W o</a>
### <a id="CTRL-W_CTRL-O :on :only" class="section-title" href="#CTRL-W_CTRL-O :on :only">Ctrl-W Ctrl-O</a>
Make the current window the only one on the screen. All other
windows are closed.  For {count} see the `:quit` command
above [:count_quit](#:count_quit).

When the 'hidden' option is set, all buffers in closed windows
become hidden.

When 'hidden' is not set, and the 'autowrite' option is set,
modified buffers are written.  Otherwise, windows that have
buffers that are modified are not removed, unless the [!] is
given, then they become hidden.  But modified buffers are
never abandoned, so changes cannot get lost.


## <a id="window-move-cursor" class="section-title" href="#window-move-cursor">4. Moving Cursor to Other Windows</a> 

### <a id="CTRL-W_<Down>" class="section-title" href="#CTRL-W_<Down>">CTRL-W <Down></a>
### <a id="CTRL-W_CTRL-J CTRL-W_j" class="section-title" href="#CTRL-W_CTRL-J CTRL-W_j">Ctrl-W Ctrl-J</a>
CTRL-W j	Move cursor to Nth window below current one.  Uses the cursor
position to select between alternatives.

### <a id="CTRL-W_<Up>" class="section-title" href="#CTRL-W_<Up>">CTRL-W <Up></a>
### <a id="CTRL-W_CTRL-K CTRL-W_k" class="section-title" href="#CTRL-W_CTRL-K CTRL-W_k">Ctrl-W Ctrl-K</a>
CTRL-W k	Move cursor to Nth window above current one.  Uses the cursor
position to select between alternatives.

### <a id="CTRL-W_<Left>" class="section-title" href="#CTRL-W_<Left>">CTRL-W <Left></a>
### <a id="CTRL-W_CTRL-H" class="section-title" href="#CTRL-W_CTRL-H">Ctrl-W Ctrl-H</a>
### <a id="CTRL-W_<BS> CTRL-W_h" class="section-title" href="#CTRL-W_<BS> CTRL-W_h">Ctrl-W <Bs></a>
CTRL-W h	Move cursor to Nth window left of current one.  Uses the
cursor position to select between alternatives.

### <a id="CTRL-W_<Right>" class="section-title" href="#CTRL-W_<Right>">CTRL-W <Right></a>
### <a id="CTRL-W_CTRL-L CTRL-W_l" class="section-title" href="#CTRL-W_CTRL-L CTRL-W_l">Ctrl-W Ctrl-L</a>
CTRL-W l	Move cursor to Nth window right of current one.  Uses the
cursor position to select between alternatives.

### <a id="CTRL-W_w CTRL-W_CTRL-W" class="section-title" href="#CTRL-W_w CTRL-W_CTRL-W">CTRL-W w</a>
CTRL-W CTRL-W	Without count: move cursor to window below/right of the
current one.  If there is no window below or right, go to
top-left window.
With count: go to Nth window (windows are numbered from
top-left to bottom-right).  To obtain the window number see
[bufwinnr()| and |winnr()](#bufwinnr()| and |winnr()).  When N is larger than the number
of windows go to the last window.

### <a id="CTRL-W_W" class="section-title" href="#CTRL-W_W">Note:</a>
CTRL-W W	Without count: move cursor to window above/left of current
one.  If there is no window above or left, go to bottom-right
window.  With count: go to Nth window, like with CTRL-W w.

### <a id="CTRL-W_t CTRL-W_CTRL-T" class="section-title" href="#CTRL-W_t CTRL-W_CTRL-T">CTRL-W t</a>
CTRL-W CTRL-T	Move cursor to top-left window.

### <a id="CTRL-W_b CTRL-W_CTRL-B" class="section-title" href="#CTRL-W_b CTRL-W_CTRL-B">CTRL-W b</a>
CTRL-W CTRL-B	Move cursor to bottom-right window.

### <a id="CTRL-W_p CTRL-W_CTRL-P" class="section-title" href="#CTRL-W_p CTRL-W_CTRL-P">CTRL-W p</a>
CTRL-W CTRL-P	Go to previous (last accessed) window.

### <a id="CTRL-W_P E441" class="section-title" href="#CTRL-W_P E441">Note:</a>
CTRL-W P	Go to preview window.  When there is no preview window this is
an error.

If Visual mode is active and the new window is not for the same buffer, the
Visual mode is ended.  If the window is on the same buffer, the cursor
position is set to keep the same Visual area selected.

### <a id=":winc :wincmd" class="section-title" href="#:winc :wincmd">Note:</a>
These commands can also be executed with ":wincmd":

:[count]winc[md] {arg}
:winc[md] [count] {arg}
Like executing CTRL-W [count] {arg}.  Example:
```
:wincmd j

```
		Moves to the window below the current one.
This command is useful when a Normal mode cannot be used (for
the [CursorHold](#CursorHold) autocommand event).  Or when a Normal mode
command is inconvenient.
The count can also be a window number.  Example:
```
:exe nr .. "wincmd w"

```
		This goes to window "nr".


## <a id="window-moving" class="section-title" href="#window-moving">5. Moving Windows Around</a> 

### <a id="CTRL-W_r CTRL-W_CTRL-R E443" class="section-title" href="#CTRL-W_r CTRL-W_CTRL-R E443">CTRL-W r</a>
CTRL-W CTRL-R	Rotate windows downwards/rightwards.  The first window becomes
the second one, the second one becomes the third one, etc.
The last window becomes the first window.  The cursor remains
in the same window.
This only works within the row or column of windows that the
current window is in.

### <a id="CTRL-W_R" class="section-title" href="#CTRL-W_R">Note:</a>
CTRL-W R	Rotate windows upwards/leftwards.  The second window becomes
the first one, the third one becomes the second one, etc.  The
first window becomes the last window.  The cursor remains in
the same window.
This only works within the row or column of windows that the
current window is in.

### <a id="CTRL-W_x CTRL-W_CTRL-X" class="section-title" href="#CTRL-W_x CTRL-W_CTRL-X">CTRL-W x</a>
CTRL-W CTRL-X	Without count: Exchange current window with next one.  If there
is no next window, exchange with previous window.
With count: Exchange current window with Nth window (first
window is 1).  The cursor is put in the other window.
When vertical and horizontal window splits are mixed, the
exchange is only done in the row or column of windows that the
current window is in.

The following commands can be used to change the window layout.  For example,
when there are two vertically split windows, CTRL-W K will change that in
horizontally split windows.  CTRL-W H does it the other way around.

### <a id="CTRL-W_K" class="section-title" href="#CTRL-W_K">Note:</a>
CTRL-W K	Move the current window to be at the very top, using the full
width of the screen.  This works like closing the current
window and then creating another one with ":topleft split",
except that the current window contents is used for the new
window.

### <a id="CTRL-W_J" class="section-title" href="#CTRL-W_J">Note:</a>
CTRL-W J	Move the current window to be at the very bottom, using the
full width of the screen.  This works like closing the current
window and then creating another one with ":botright split",
except that the current window contents is used for the new
window.

### <a id="CTRL-W_H" class="section-title" href="#CTRL-W_H">Note:</a>
CTRL-W H	Move the current window to be at the far left, using the
full height of the screen.  This works like closing the
current window and then creating another one with
`:vert topleft split`, except that the current window contents
is used for the new window.

### <a id="CTRL-W_L" class="section-title" href="#CTRL-W_L">Note:</a>
CTRL-W L	Move the current window to be at the far right, using the full
height of the screen.  This works like closing the
current window and then creating another one with
`:vert botright split`, except that the current window
contents is used for the new window.

### <a id="CTRL-W_T" class="section-title" href="#CTRL-W_T">Note:</a>
CTRL-W T	Move the current window to a new tab page.  This fails if
there is only one window in the current tab page.
When a count is specified the new tab page will be opened
before the tab page with this index.  Otherwise it comes after
the current tab page.


## <a id="window-resize" class="section-title" href="#window-resize">6. Window Resizing</a> 

### <a id="CTRL-W_=" class="section-title" href="#CTRL-W_=">Note:</a>
CTRL-W =	Make all windows (almost) equally high and wide, but use
'winheight' and 'winwidth' for the current window.
Windows with 'winfixheight' set keep their height and windows
with 'winfixwidth' set keep their width.
To equalize only vertically (make window equally high) use
`vertical wincmd =`
To equalize only horizontally (make window equally wide) use
`horizontal wincmd =`

### <a id=":res :resize CTRL-W_-" class="section-title" href="#:res :resize CTRL-W_-">:res[ize] -N</a>
CTRL-W -	Decrease current window height by N (default 1).
If used after [:vertical](#:vertical): decrease width by N.

### <a id="CTRL-W_+" class="section-title" href="#CTRL-W_+">:res[ize] +N</a>
CTRL-W +	Increase current window height by N (default 1).
If used after [:vertical](#:vertical): increase width by N.

:res[ize] [N]
### <a id="CTRL-W_CTRL-_ CTRL-W__" class="section-title" href="#CTRL-W_CTRL-_ CTRL-W__">Ctrl-W Ctrl-_</a>
CTRL-W _	Set current window height to N (default: highest possible).

:{winnr}res[ize] [+-]N
Like `:resize` above, but apply the size to window {winnr}
instead of the current window.

z{nr}<CR>	Set current window height to {nr}.

### <a id="CTRL-W_<" class="section-title" href="#CTRL-W_<">Note:</a>
CTRL-W <	Decrease current window width by N (default 1).

### <a id="CTRL-W_>" class="section-title" href="#CTRL-W_>">Note:</a>
CTRL-W >	Increase current window width by N (default 1).

### <a id=":vertical-resize CTRL-W_bar" class="section-title" href="#:vertical-resize CTRL-W_bar">:vert[ical] res[ize] [N]</a>
CTRL-W |	Set current window width to N (default: widest possible).

You can also resize a window by dragging a status line up or down with the
mouse.  Or by dragging a vertical separator line left or right.  This only
works if the version of Vim that is being used supports the mouse and the
'mouse' option has been set to enable it.

The option 'winheight' ('wh') is used to set the minimal window height of the
current window.  This option is used each time another window becomes the
current window.  If the option is '0', it is disabled.  Set 'winheight' to a
very large value, e.g., '9999', to make the current window always fill all
available space.  Set it to a reasonable value, e.g., '10', to make editing in
the current window comfortable.

The equivalent 'winwidth' ('wiw') option is used to set the minimal width of
the current window.

When the option 'equalalways' ('ea') is set, all the windows are automatically
made the same size after splitting or closing a window.  If you don't set this
option, splitting a window will reduce the size of the current window and
leave the other windows the same.  When closing a window, the extra lines are
given to the window above it.

The 'eadirection' option limits the direction in which the 'equalalways'
option is applied.  The default "both" resizes in both directions.  When the
value is "ver" only the heights of windows are equalized.  Use this when you
have manually resized a vertically split window and want to keep this width.
Likewise, "hor" causes only the widths of windows to be equalized.

The option 'cmdheight' ('ch') is used to set the height of the command-line.
If you are annoyed by the [hit-enter](#hit-enter) prompt for long messages, set this
option to 2 or 3.

If there is only one window, resizing that window will also change the command
line height.  If there are several windows, resizing the current window will
also change the height of the window below it (and sometimes the window above
it).

The minimal height and width of a window is set with 'winminheight' and
'winminwidth'.  These are hard values, a window will never become smaller.


## <a id="buffer-list" class="section-title" href="#buffer-list">7. Argument and Buffer List Commands</a> 

args list		       buffer list	   meaning ~
1. :[N]argument [N]	11. :[N]buffer [N]	to arg/buf N
2. :[N]next [file ..]	12. :[N]bnext [N]	to Nth next arg/buf
3. :[N]Next [N]		13. :[N]bNext [N]	to Nth previous arg/buf
4. :[N]previous	[N]	14. :[N]bprevious [N]	to Nth previous arg/buf
5. :rewind / :first	15. :brewind / :bfirst	to first arg/buf
6. :last		16. :blast		to last arg/buf
7. :all			17. :ball		edit all args/buffers
18. :unhide		edit all loaded buffers
19. :[N]bmod [N]	to Nth modified buf

split & args list	  split & buffer list	   meaning ~
21. :[N]sargument [N]   31. :[N]sbuffer [N]	split + to arg/buf N
22. :[N]snext [file ..] 32. :[N]sbnext [N]      split + to Nth next arg/buf
23. :[N]sNext [N]       33. :[N]sbNext [N]      split + to Nth previous arg/buf
24. :[N]sprevious [N]   34. :[N]sbprevious [N]  split + to Nth previous arg/buf
25. :srewind / :sfirst	35. :sbrewind / :sbfirst split + to first arg/buf
26. :slast		36. :sblast		split + to last arg/buf
27. :sall		37. :sball		edit all args/buffers
38. :sunhide		edit all loaded buffers
39. :[N]sbmod [N]	split + to Nth modified buf

40. :args		list of arguments
41. :buffers		list of buffers

The meaning of [N] depends on the command:
[N] is the number of buffers to go forward/backward on 2/12/22/32,
3/13/23/33, and 4/14/24/34
[N] is an argument number, defaulting to current argument, for 1 and 21
[N] is a buffer number, defaulting to current buffer, for 11 and 31
[N] is a count for 19 and 39

Note: ":next" is an exception, because it must accept a list of file names
for compatibility with Vi.


The argument list and multiple windows
--------------------------------------

The current position in the argument list can be different for each window.
Remember that when doing ":e file", the position in the argument list stays
the same, but you are not editing the file at that position.  To indicate
this, the file message (and the title, if you have one) shows
"(file (N) of M)", where "(N)" is the current position in the file list, and
"M" the number of files in the file list.

All the entries in the argument list are added to the buffer list.  Thus, you
can also get to them with the buffer list commands, like ":bnext".

### <a id=":al :all :sal :sall" class="section-title" href="#:al :all :sal :sall">:[N]al[l][!] [N]</a>
:[N]sal[l][!] [N]
Rearrange the screen to open one window for each argument.
All other windows are closed.  When a count is given, this is
the maximum number of windows to open.
With the [:tab](#:tab) modifier open a tab page for each argument.
When there are more arguments than 'tabpagemax' further ones
become split windows in the last tab page.
When the 'hidden' option is set, all buffers in closed windows
become hidden.
When 'hidden' is not set, and the 'autowrite' option is set,
modified buffers are written.  Otherwise, windows that have
buffers that are modified are not removed, unless the [!] is
given, then they become hidden.  But modified buffers are
never abandoned, so changes cannot get lost.
[N] is the maximum number of windows to open.  'winheight'
also limits the number of windows opened ('winwidth' if
[:vertical](#:vertical) was prepended).
Buf/Win Enter/Leave autocommands are not executed for the new
windows here, that's only done when they are really entered.
If autocommands change the window layout while this command is
### <a id="busy an error will be given. E249" class="section-title" href="#busy an error will be given. E249">Note:</a>

### <a id=":sa :sargument" class="section-title" href="#:sa :sargument">:[N]sa[rgument][!] [++opt] [+cmd] [N]</a>
Short for ":split | argument [N]": split window and go to Nth
argument.  But when there is no such argument, the window is
not split.  Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":sn :snext" class="section-title" href="#:sn :snext">:[N]sn[ext][!] [++opt] [+cmd] [file ..]</a>
Short for ":split | [N]next": split window and go to Nth next
argument.  But when there is no next file, the window is not
split.  Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":spr :sprevious" class="section-title" href="#:spr :sprevious">:[N]spr[evious][!] [++opt] [+cmd] [N]</a>
### <a id=":sN :sNext" class="section-title" href="#:sN :sNext">:[N]sN[ext][!] [++opt] [+cmd] [N]</a>
Short for ":split | [N]Next": split window and go to Nth
previous argument.  But when there is no previous file, the
window is not split.  Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":sre :srewind" class="section-title" href="#:sre :srewind">Note:</a>
:sre[wind][!] [++opt] [+cmd]
Short for ":split | rewind": split window and go to first
argument.  But when there is no argument list, the window is
not split.  Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":sfir :sfirst" class="section-title" href="#:sfir :sfirst">Note:</a>
:sfir[st] [++opt] [+cmd]
Same as ":srewind".

### <a id=":sla :slast" class="section-title" href="#:sla :slast">Note:</a>
:sla[st][!] [++opt] [+cmd]
Short for ":split | last": split window and go to last
argument.  But when there is no argument list, the window is
not split.  Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":dr :drop" class="section-title" href="#:dr :drop">Note:</a>
:dr[op] [++opt] [+cmd] {file} ..
Edit the first {file} in a window.
- If the file is already open in a window change to that
window.
- If the file is not open in a window edit the file in the
current window.  If the current buffer can't be [abandon](#abandon)ed,
the window is split first.
- Windows that are not in the argument list or are not full
width will be closed if possible.
The [argument-list| is set, like with the |:next](#argument-list| is set, like with the |:next) command.
The purpose of this command is that it can be used from a
program that wants Vim to edit another file, e.g., a debugger.
When using the [:tab](#:tab) modifier each argument is opened in a
tab page.  The last window is used if it's empty.
Also see [++opt| and |+cmd](#++opt| and |+cmd).


## <a id="list-repeat" class="section-title" href="#list-repeat">8. Do a Command in All Buffers or Windows</a> 

### <a id=":windo" class="section-title" href="#:windo">Note:</a>
:[range]windo {cmd}	Execute {cmd} in each window or if [range] is given
only in windows for which the window number lies in
the [range]. It works like doing this:
```
CTRL-W t
:{cmd}
CTRL-W w
:{cmd}
etc.

```
			This only operates in the current tab page.
When an error is detected on one window, further
windows will not be visited.
The last window (or where an error occurred) becomes
the current window.
{cmd} can contain '|' to concatenate several commands.
{cmd} must not open or close windows or reorder them.

Also see [:tabdo|, |:argdo|, |:bufdo|, |:cdo|, |:ldo](#:tabdo|, |:argdo|, |:bufdo|, |:cdo|, |:ldo),
[:cfdo| and |:lfdo](#:cfdo| and |:lfdo).

### <a id=":bufdo" class="section-title" href="#:bufdo">Note:</a>
:[range]bufdo[!] {cmd}	Execute {cmd} in each buffer in the buffer list or if
[range] is given only for buffers for which their
buffer number is in the [range]. It works like doing
this:
```
:bfirst
:{cmd}
:bnext
:{cmd}
etc.

```
			When the current file can't be [abandon](#abandon)ed and the [!]
is not present, the command fails.
When an error is detected on one buffer, further
buffers will not be visited.
Unlisted buffers are skipped.
The last buffer (or where an error occurred) becomes
the current buffer.
{cmd} can contain '|' to concatenate several commands.
{cmd} must not delete buffers or add buffers to the
buffer list.
Note: While this command is executing, the Syntax
autocommand event is disabled by adding it to
'eventignore'.  This considerably speeds up editing
each buffer.

Also see [:tabdo|, |:argdo|, |:windo|, |:cdo|, |:ldo](#:tabdo|, |:argdo|, |:windo|, |:cdo|, |:ldo),
[:cfdo| and |:lfdo](#:cfdo| and |:lfdo).

Examples:
```

:windo set nolist foldcolumn=0 | normal! zn

This resets the 'list' option and disables folding in all windows.
```

:bufdo set fileencoding= | update

This resets the 'fileencoding' in each buffer and writes it if this changed
the buffer.  The result is that all buffers will use the 'encoding' encoding
(if conversion succeeds).


## <a id="window-tag" class="section-title" href="#window-tag">9. Tag or File Name Under the Cursor</a> 

### <a id=":sta :stag" class="section-title" href="#:sta :stag">Note:</a>
:sta[g][!] [tagname]
Does ":tag[!] [tagname]" and splits the window for the found
tag.  See also [:tag](#:tag).

### <a id="CTRL-W_] CTRL-W_CTRL-]" class="section-title" href="#CTRL-W_] CTRL-W_CTRL-]">Ctrl-W ]</a>
CTRL-W CTRL-]	Split current window in two.  Use identifier under cursor as a
tag and jump to it in the new upper window.
In Visual mode uses the Visually selected text as a tag.
Make new window N high.

### <a id="CTRL-W_g]" class="section-title" href="#CTRL-W_g]">Note:</a>
CTRL-W g ]	Split current window in two.  Use identifier under cursor as a
tag and perform ":tselect" on it in the new upper window.
In Visual mode uses the Visually selected text as a tag.
Make new window N high.

### <a id="CTRL-W_g_CTRL-]" class="section-title" href="#CTRL-W_g_CTRL-]">Note:</a>
CTRL-W g CTRL-]	Split current window in two.  Use identifier under cursor as a
tag and perform ":tjump" on it in the new upper window.
In Visual mode uses the Visually selected text as a tag.
Make new window N high.

### <a id="CTRL-W_f CTRL-W_CTRL-F" class="section-title" href="#CTRL-W_f CTRL-W_CTRL-F">CTRL-W f</a>
CTRL-W CTRL-F	Split current window in two.  Edit file name under cursor.
Like ":split gf", but window isn't split if the file does not
exist.
Uses the 'path' variable as a list of directory names where to
look for the file.  Also the path for current file is
used to search for the file name.
If the name is a hypertext link that looks like
"type://machine/path", only "/path" is used.
If a count is given, the count'th matching file is edited.

### <a id="CTRL-W_F" class="section-title" href="#CTRL-W_F">Ctrl-W F</a>
Split current window in two.  Edit file name under cursor and
jump to the line number following the file name. See [gF](#gF) for
details on how the line number is obtained.

### <a id="CTRL-W_gf" class="section-title" href="#CTRL-W_gf">CTRL-W gf</a>
Open a new tab page and edit the file name under the cursor.
Like "tab split" and "gf", but the new tab page isn't created
if the file does not exist.

### <a id="CTRL-W_gF" class="section-title" href="#CTRL-W_gF">CTRL-W gF</a>
Open a new tab page and edit the file name under the cursor
and jump to the line number following the file name.  Like
"tab split" and "gF", but the new tab page isn't created if
the file does not exist.

### <a id="CTRL-W_gt" class="section-title" href="#CTRL-W_gt">CTRL-W gt</a>
Go to next tab page, same as `gt`.

### <a id="CTRL-W_gT" class="section-title" href="#CTRL-W_gT">CTRL-W gT</a>
Go to previous tab page, same as `gT`.

Also see [CTRL-W_CTRL-I](#CTRL-W_CTRL-I): open window for an included file that includes
the keyword under the cursor.


## <a id="preview-window" class="section-title" href="#preview-window">10. the Preview Window</a> 

The preview window is a special window to show (preview) another file.  It is
normally a small window used to show an include file or definition of a
function.

There can be only one preview window (per tab page).  It is created with one
of the commands below.  The 'previewheight' option can be set to specify the
height of the preview window when it's opened.  The 'previewwindow' option is
set in the preview window to be able to recognize it.  The 'winfixheight'
option is set to have it keep the same height when opening/closing other
windows.

### <a id=":pta :ptag" class="section-title" href="#:pta :ptag">Note:</a>
:pta[g][!] [tagname]
Does ":tag[!] [tagname]" and shows the found tag in a
"Preview" window without changing the current buffer or cursor
position.  If a "Preview" window already exists, it is re-used
(like a help window is).  If a new one is opened,
'previewheight' is used for the height of the window.   See
also [:tag](#:tag).
See below for an example. [CursorHold-example](#CursorHold-example)
Small difference from [:tag](#:tag): When [tagname] is equal to the
already displayed tag, the position in the matching tag list
is not reset.  This makes the CursorHold example work after a
[:ptnext](#:ptnext).

### <a id="CTRL-W_z" class="section-title" href="#CTRL-W_z">CTRL-W z</a>
### <a id="CTRL-W_CTRL-Z :pc :pclose" class="section-title" href="#CTRL-W_CTRL-Z :pc :pclose">Ctrl-W Ctrl-Z</a>
:pc[lose][!]	Close any "Preview" window currently open.  When the 'hidden'
option is set, or when the buffer was changed and the [!] is
used, the buffer becomes hidden (unless there is another
window editing it).  The command fails if any "Preview" buffer
cannot be closed.  See also [:close](#:close).

### <a id=":pp :ppop" class="section-title" href="#:pp :ppop">Note:</a>
:[count]pp[op][!]
Does ":[count]pop[!]" in the preview window.  See [:pop](#:pop) and
[:ptag](#:ptag).

### <a id="CTRL-W_}" class="section-title" href="#CTRL-W_}">Ctrl-W }</a>
Use identifier under cursor as a tag and perform a :ptag on
it.  Make the new Preview window (if required) N high.  If N is
not given, 'previewheight' is used.

### <a id="CTRL-W_g}" class="section-title" href="#CTRL-W_g}">CTRL-W g }</a>
Use identifier under cursor as a tag and perform a :ptjump on
it.  Make the new Preview window (if required) N high.  If N is
not given, 'previewheight' is used.

### <a id=":ped :pedit" class="section-title" href="#:ped :pedit">Note:</a>
:ped[it][!] [++opt] [+cmd] {file}
Edit {file} in the preview window.  The preview window is
opened like with [:ptag](#:ptag).  The current window and cursor
position isn't changed.  Useful example:
```
:pedit +/fputc /usr/include/stdio.h

```

### <a id=":ps :psearch" class="section-title" href="#:ps :psearch">Note:</a>
:[range]ps[earch][!] [count] [/]pattern[/]
Works like [:ijump](#:ijump) but shows the found match in the preview
window.  The preview window is opened like with [:ptag](#:ptag).  The
current window and cursor position isn't changed.  Useful
example:
```
:psearch popen

```
		Like with the [:ptag](#:ptag) command, you can use this to
automatically show information about the word under the
cursor.  This is less clever than using [:ptag](#:ptag), but you don't
need a tags file and it will also find matches in system
include files.  Example:
```
### <a id=":au! CursorHold .[ch] ++nested exe "silent! psearch " .. expand("<cword>")" class="section-title" href="#:au! CursorHold .[ch] ++nested exe "silent! psearch " .. expand("<cword>")">Note:</a>

```
		Warning: This can be slow.

### <a id="CursorHold-example" class="section-title" href="#CursorHold-example">Example</a>

### <a id=":au! CursorHold .[ch] ++nested exe "silent! ptag " .. expand("<cword>")" class="section-title" href="#:au! CursorHold .[ch] ++nested exe "silent! ptag " .. expand("<cword>")">Note:</a>

This will cause a ":ptag" to be executed for the keyword under the cursor,
when the cursor hasn't moved for the time set with 'updatetime'.  "++nested"
makes other autocommands be executed, so that syntax highlighting works in the
preview window.  The "silent!" avoids an error message when the tag could not
be found.  Also see [CursorHold](#CursorHold).  To disable this again:
```

:au! CursorHold

A nice addition is to highlight the found tag, avoid the ":ptag" when there
is no word under the cursor, and a few other things:
```

### <a id=":au! CursorHold .[ch] ++nested call PreviewWord()" class="section-title" href="#:au! CursorHold .[ch] ++nested call PreviewWord()">Note:</a>
:func PreviewWord()
:  if &previewwindow			" don't do this in the preview window
:    return
:  endif
:  let w = expand("<cword>")		" get the word under cursor
:  if w =~ '\a'			" if the word contains a letter
:
:    " Delete any existing highlight before showing another tag
:    silent! wincmd P			" jump to preview window
:    if &previewwindow		" if we really get there...
:      match none			" delete existing highlight
:      wincmd p			" back to old window
:    endif
:
:    " Try displaying a matching tag for the word under the cursor
:    try
:       exe "ptag " .. w
:    catch
:      return
:    endtry
:
:    silent! wincmd P			" jump to preview window
:    if &previewwindow		" if we really get there...
:	 if has("folding")
:	   silent! .foldopen		" don't want a closed fold
:	 endif
:	 call search("$", "b")		" to end of previous line
:	 let w = substitute(w, '\\', '\\\\', "")
:	 call search('\<\V' .. w .. '\>')	" position cursor on match
:	 " Add a match highlight to the word at this position
:      hi previewWord term=bold ctermbg=green guibg=green
:	 exe 'match previewWord "\%' .. line(".") .. 'l\%' .. col(".") .. 'c\k*"'
:      wincmd p			" back to old window
:    endif
:  endif
:endfun


## <a id="buffer-hidden" class="section-title" href="#buffer-hidden">11. Using Hidden Buffers</a> 

A hidden buffer is not displayed in a window, but is still loaded into memory.
This makes it possible to jump from file to file, without the need to read or
write the file every time you get another buffer in a window.

### <a id=":buffer-!" class="section-title" href="#:buffer-!">Note:</a>
If the option 'hidden' ('hid') is set, abandoned buffers are kept for all
commands that start editing another file: ":edit", ":next", ":tag", etc.  The
commands that move through the buffer list sometimes make the current buffer
hidden although the 'hidden' option is not set.  This happens when a buffer is
modified, but is forced (with '!') to be removed from a window, and
'autowrite' is off or the buffer can't be written.

You can make a hidden buffer not hidden by starting to edit it with any
command, or by deleting it with the ":bdelete" command.

The 'hidden' is global, it is used for all buffers.  The 'bufhidden' option
can be used to make an exception for a specific buffer.  It can take these
values:

```
empty>		Use the value of 'hidden'.
hide		Hide this buffer, also when 'hidden' is not set.
unload		Don't hide but unload this buffer, also when 'hidden'
is set.
delete		Delete the buffer.

### <a id="hidden-quit" class="section-title" href="#hidden-quit">Note:</a>
When you try to quit Vim while there is a hidden, modified buffer, you will
get an error message and Vim will make that buffer the current buffer.  You
can then decide to write this buffer (":wq") or quit without writing (":q!").
Be careful: there may be more hidden, modified buffers!

A buffer can also be unlisted.  This means it exists, but it is not in the
list of buffers. [unlisted-buffer](#unlisted-buffer)


### <a id=":files" class="section-title" href="#:files">:files[!] [flags]</a>
### <a id=":buffers :ls" class="section-title" href="#:buffers :ls">:buffers[!] [flags]</a>
:ls[!] [flags]
Show all buffers.  Example:

1 #h   "/test/text"		line 1 ~
2u     "asdf"			line 0 ~
3 %a + "version.c"		line 1 ~

When the [!] is included the list will show unlisted buffers
(the term "unlisted" is a bit confusing then...).

Each buffer has a unique number.  That number will not change,
thus you can always go to a specific buffer with ":buffer N"
or "N CTRL-^", where N is the buffer number.

Indicators (chars in the same column are mutually exclusive):
u	an unlisted buffer (only displayed when [!] is used)
[unlisted-buffer](#unlisted-buffer)
%	the buffer in the current window
#	the alternate buffer for ":e #" and CTRL-^
a	an active buffer: it is loaded and visible
h	a hidden buffer: It is loaded, but currently not
displayed in a window [hidden-buffer](#hidden-buffer)
-	a buffer with 'modifiable' off
=	a readonly buffer
R	a terminal buffer with a running job
F	a terminal buffer with a finished job
?    a terminal buffer without a job: `:terminal NONE`
+	a modified buffer
x   a buffer with read errors

[flags] can be a combination of the following characters,
which restrict the buffers to be listed:
+	modified buffers
-	buffers with 'modifiable' off
=	readonly buffers
a	active buffers
u	unlisted buffers (overrides the "!")
h	hidden buffers
x	buffers with a read error
%	current buffer
#	alternate buffer
R	terminal buffers with a running job
F	terminal buffers with a finished job
t	show time last used and sort buffers
Combining flags means they are "and"ed together, e.g.:
h+	hidden buffers which are modified
a+	active buffers which are modified

When using [:filter](#:filter) the pattern is matched against the
displayed buffer name, e.g.:
```
filter /\.vim/ ls

```

### <a id=":bad :badd" class="section-title" href="#:bad :badd">Note:</a>
:bad[d]	[+lnum] {fname}
Add file name {fname} to the buffer list, without loading it,
if it wasn't listed yet.  If the buffer was previously
deleted, not wiped, it will be made listed again.
If "lnum" is specified, the cursor will be positioned at that
line when the buffer is first entered.  Note that other
commands after the + will be ignored.

### <a id=":balt" class="section-title" href="#:balt">Note:</a>
:balt [+lnum] {fname}
Like `:badd` and also set the alternate file for the current
window to {fname}.

### <a id=":bd :bdel :bdelete E516" class="section-title" href="#:bd :bdel :bdelete E516">:[N]bd[elete][!]</a>
:bd[elete][!] [N]
Unload buffer [N] (default: current buffer) and delete it from
the buffer list.  If the buffer was changed, this fails,
unless when [!] is specified, in which case changes are lost.
The file remains unaffected.  Any windows for this buffer are
closed.  If buffer [N] is the current buffer, another buffer
will be displayed instead.  This is the most recent entry in
the jump list that points into a loaded buffer.
Actually, the buffer isn't completely deleted, it is removed
from the buffer list [unlisted-buffer](#unlisted-buffer) and option values,
variables and mappings/abbreviations for the buffer are
cleared. Examples:
```
:.,$-bdelete   "delete buffers from the current one to
" last but one
:%bdelete      " delete all buffers

```

### <a id="E93 E94" class="section-title" href="#E93 E94">:bdelete[!] {bufname}</a>
Like ":bdelete[!] [N]", but buffer given by name, see
[{bufname}](#{bufname}).

:bdelete[!] N1 N2 ...
Do ":bdelete[!]" for buffer N1, N2, etc.  The arguments can be
buffer numbers or buffer names (but not buffer names that are
a number).  Insert a backslash before a space in a buffer
name.

:N,Mbdelete[!]	Do ":bdelete[!]" for all buffers in the range N to M
[inclusive](#inclusive).

### <a id=":bw :bwipe :bwipeout E517" class="section-title" href="#:bw :bwipe :bwipeout E517">:[N]bw[ipeout][!]</a>
:bw[ipeout][!] {bufname}
:N,Mbw[ipeout][!]
:bw[ipeout][!] N1 N2 ...
Like [:bdelete](#:bdelete), but really delete the buffer.  Everything
related to the buffer is lost.  All marks in this buffer
become invalid, option settings are lost, etc.  Don't use this
unless you know what you are doing. Examples:
```
:.+,$bwipeout   " wipe out all buffers after the current
" one
:%bwipeout      " wipe out all buffers

```

### <a id=":bun :bunload E515" class="section-title" href="#:bun :bunload E515">:[N]bun[load][!]</a>
:bun[load][!] [N]
Unload buffer [N] (default: current buffer).  The memory
allocated for this buffer will be freed.  The buffer remains
in the buffer list.
If the buffer was changed, this fails, unless when [!] is
specified, in which case the changes are lost.
Any windows for this buffer are closed.  If buffer [N] is the
current buffer, another buffer will be displayed instead.
This is the most recent entry in the jump list that points
into a loaded buffer.

:bunload[!] {bufname}
Like ":bunload[!] [N]", but buffer given by name.
Also see [{bufname}](#{bufname}).

:N,Mbunload[!]	Do ":bunload[!]" for all buffers in the range N to M
[inclusive](#inclusive).

:bunload[!] N1 N2 ...
Do ":bunload[!]" for buffer N1, N2, etc.  The arguments can be
buffer numbers or buffer names (but not buffer names that are
a number).  Insert a backslash before a space in a buffer
name.

### <a id=":b :bu :buf :buffer E86" class="section-title" href="#:b :bu :buf :buffer E86">:[N]b[uffer][!] [+cmd] [N]</a>
Edit buffer [N] from the buffer list.  If [N] is not given,
the current buffer remains being edited.  See [:buffer-!](#:buffer-!) for
[!].  This will also edit a buffer that is not in the buffer
list, without setting the 'buflisted' flag.
Also see [+cmd](#+cmd).

### <a id="{bufname}" class="section-title" href="#{bufname}">:[N]b[uffer][!] [+cmd] {bufname}</a>
Edit buffer for {bufname} from the buffer list.  A partial
name also works, so long as it is unique in the list of
buffers.
Note that a buffer whose name is a number cannot be referenced
by that name; use the buffer number instead.
Insert a backslash before a space in a buffer name.
See [:buffer-!](#:buffer-!) for [!].
This will also edit a buffer that is not in the buffer list,
without setting the 'buflisted' flag.
Also see [+cmd](#+cmd).

### <a id=":sb :sbuffer" class="section-title" href="#:sb :sbuffer">:[N]sb[uffer] [+cmd] [N]</a>
Split window and edit buffer [N] from the buffer list.  If [N]
is not given, the current buffer is edited.  Respects the
"useopen" setting of 'switchbuf' when splitting.  This will
also edit a buffer that is not in the buffer list, without
setting the 'buflisted' flag.
Also see [+cmd](#+cmd).

:[N]sb[uffer] [+cmd] {bufname}
Split window and edit buffer for [{bufname}](#{bufname}) from the buffer
list.  This will also edit a buffer that is not in the buffer
list, without setting the 'buflisted' flag.
Note: If what you want to do is split the buffer, make a copy
under another name, you can do it this way:
```
:w foobar | sp #

```
		Also see [+cmd](#+cmd).

### <a id=":bn :bnext E87" class="section-title" href="#:bn :bnext E87">:[N]bn[ext][!] [+cmd] [N]</a>
Go to [N]th next buffer in buffer list.  [N] defaults to one.
Wraps around the end of the buffer list.
See [:buffer-!](#:buffer-!) for [!].
Also see [+cmd](#+cmd).
If you are in a help buffer, this takes you to the next help
buffer (if there is one).  Similarly, if you are in a normal
(non-help) buffer, this takes you to the next normal buffer.
This is so that if you have invoked help, it doesn't get in
the way when you're browsing code/text buffers.  The next three
commands also work like this.

### <a id=":sbn :sbnext" class="section-title" href="#:sbn :sbnext">Note:</a>
:[N]sbn[ext] [+cmd] [N]
Split window and go to [N]th next buffer in buffer list.
Wraps around the end of the buffer list.  Uses 'switchbuf'
Also see [+cmd](#+cmd).

### <a id=":bN :bNext :bp :bprevious E88" class="section-title" href="#:bN :bNext :bp :bprevious E88">:[N]bN[ext][!] [+cmd] [N]</a>
:[N]bp[revious][!] [+cmd] [N]
Go to [N]th previous buffer in buffer list.  [N] defaults to
one.  Wraps around the start of the buffer list.
See [:buffer-!](#:buffer-!) for [!] and 'switchbuf'.
Also see [+cmd](#+cmd).

### <a id=":sbN :sbNext :sbp :sbprevious" class="section-title" href="#:sbN :sbNext :sbp :sbprevious">:[N]sbN[ext] [+cmd] [N]</a>
:[N]sbp[revious] [+cmd] [N]
Split window and go to [N]th previous buffer in buffer list.
Wraps around the start of the buffer list.
Uses 'switchbuf'.
Also see [+cmd](#+cmd).

### <a id=":br :bre :brewind" class="section-title" href="#:br :bre :brewind">:br[ewind][!] [+cmd]</a>
Go to first buffer in buffer list.  If the buffer list is
empty, go to the first unlisted buffer.
See [:buffer-!](#:buffer-!) for [!].

### <a id=":bf :bfirst" class="section-title" href="#:bf :bfirst">:bf[irst] [+cmd]</a>
Same as [:brewind](#:brewind).
Also see [+cmd](#+cmd).

### <a id=":sbr :sbrewind" class="section-title" href="#:sbr :sbrewind">:sbr[ewind] [+cmd]</a>
Split window and go to first buffer in buffer list.  If the
buffer list is empty, go to the first unlisted buffer.
Respects the 'switchbuf' option.
Also see [+cmd](#+cmd).

### <a id=":sbf :sbfirst" class="section-title" href="#:sbf :sbfirst">:sbf[irst] [+cmd]</a>
Same as ":sbrewind".

### <a id=":bl :blast" class="section-title" href="#:bl :blast">:bl[ast][!] [+cmd]</a>
Go to last buffer in buffer list.  If the buffer list is
empty, go to the last unlisted buffer.
See [:buffer-!](#:buffer-!) for [!].

### <a id=":sbl :sblast" class="section-title" href="#:sbl :sblast">:sbl[ast] [+cmd]</a>
Split window and go to last buffer in buffer list.  If the
buffer list is empty, go to the last unlisted buffer.
Respects 'switchbuf' option.

### <a id=":bm :bmodified E84" class="section-title" href="#:bm :bmodified E84">:[N]bm[odified][!] [+cmd] [N]</a>
Go to [N]th next modified buffer.  Note: this command also
finds unlisted buffers.  If there is no modified buffer the
command fails.

### <a id=":sbm :sbmodified" class="section-title" href="#:sbm :sbmodified">:[N]sbm[odified] [+cmd] [N]</a>
Split window and go to [N]th next modified buffer.
Respects 'switchbuf' option.
Note: this command also finds buffers not in the buffer list.

### <a id=":unh :unhide :sun :sunhide" class="section-title" href="#:unh :unhide :sun :sunhide">:[N]unh[ide] [N]</a>
:[N]sun[hide] [N]
Rearrange the screen to open one window for each loaded buffer
in the buffer list.  When a count is given, this is the
maximum number of windows to open.

### <a id=":ba :ball :sba :sball" class="section-title" href="#:ba :ball :sba :sball">:[N]ba[ll] [N]</a>
:[N]sba[ll] [N]	Rearrange the screen to open one window for each buffer in
the buffer list.  When a count is given, this is the maximum
number of windows to open.  'winheight' also limits the number
of windows opened ('winwidth' if [:vertical](#:vertical) was prepended).
Buf/Win Enter/Leave autocommands are not executed for the new
windows here, that's only done when they are really entered.
When the [:tab](#:tab) modifier is used new windows are opened in a
new tab, up to 'tabpagemax'.

Note: All the commands above that start editing another buffer, keep the
'readonly' flag as it was.  This differs from the ":edit" command, which sets
the 'readonly' flag each time the file is read.


## <a id="special-buffers" class="section-title" href="#special-buffers">12. Special Kinds of Buffers</a> 

Instead of containing the text of a file, buffers can also be used for other
purposes.  A few options can be set to change the behavior of a buffer:
'bufhidden'	what happens when the buffer is no longer displayed
in a window.
'buftype'	what kind of a buffer this is
'swapfile'	whether the buffer will have a swap file
'buflisted'	buffer shows up in the buffer list

A few useful kinds of a buffer:

quickfix	Used to contain the error list or the location list.  See
[:cwindow| and |:lwindow](#:cwindow| and |:lwindow).  This command sets the 'buftype'
option to "quickfix".  You are not supposed to change this!
'swapfile' is off.

help		Contains a help file.  Will only be created with the [:help](#:help)
command.  The flag that indicates a help buffer is internal
and can't be changed.  The 'buflisted' option will be reset
for a help buffer.

terminal	A terminal window buffer, see [terminal](#terminal). The contents cannot
be read or changed until the job ends.

directory	Displays directory contents.  Can be used by a file explorer
plugin.  The buffer is created with these settings:
```
:setlocal buftype=nowrite
:setlocal bufhidden=delete
:setlocal noswapfile

```
		The buffer name is the name of the directory and is adjusted
when using the [:cd](#:cd) command.

### <a id="scratch-buffer" class="section-title" href="#scratch-buffer">Note:</a>
scratch		Contains text that can be discarded at any time.  It is kept
when closing the window, it must be deleted explicitly.
Settings:
```
:setlocal buftype=nofile
:setlocal bufhidden=hide
:setlocal noswapfile

```
		The buffer name can be used to identify the buffer, if you
give it a meaningful name.

### <a id="unlisted-buffer" class="section-title" href="#unlisted-buffer">Note:</a>
unlisted	The buffer is not in the buffer list.  It is not used for
normal editing, but to show a help file, remember a file name
or marks.  The ":bdelete" command will also set this option,
thus it doesn't completely delete the buffer.  Settings:
```
:setlocal nobuflisted

```


vim:tw=78:ts=8:noet:ft=help:norl:

