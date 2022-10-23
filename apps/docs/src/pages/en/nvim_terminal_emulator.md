---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Nvim" class="section-title" href="#Nvim"> Terminal Emulator Txt</a> 

NVIM REFERENCE MANUAL    by Thiago de Arruda


### <a id="terminal terminal-emulator" class="section-title" href="#terminal terminal-emulator">Terminal emulator</a>

Nvim embeds a VT220/xterm terminal emulator based on libvterm. The terminal is
presented as a special 'buftype', asynchronously updated as data is received
from the connected program.

Terminal buffers behave like normal buffers, except:
- With 'modifiable', lines can be edited but not deleted.
- 'scrollback' controls how many lines are kept.
- Output is followed ("tailed") if cursor is on the last line.
- 'modified' is the default. You can set 'nomodified' to avoid a warning when
closing the terminal buffer.
- 'bufhidden' defaults to "hide".

Type [gO](#gO) to see the table of contents.


## <a id="terminal-start" class="section-title" href="#terminal-start">Start</a> 

There are several ways to create a terminal buffer:

- Run the [:terminal](#:terminal) command.
- Call the [nvim_open_term()| or |termopen()](#nvim_open_term()| or |termopen()) function.
- Edit a "term://" buffer. Examples:
```
:edit term://bash
:vsplit term://top


```
    Note: To open a "term://" buffer from an autocmd, the [autocmd-nested](#autocmd-nested)
modifier is required.
```
### <a id="autocmd VimEnter  ++nested split term://sh" class="section-title" href="#autocmd VimEnter  ++nested split term://sh">Note:</a>

```
    (This is only mentioned for reference; use [:terminal](#:terminal) instead.)

When the terminal starts, the buffer contents are updated and the buffer is
named in the form of `term://{cwd}//{pid}:{cmd}`. This naming scheme is used
by [:mksession](#:mksession) to restore a terminal buffer (by restarting the {cmd}).

The terminal environment is initialized as in [jobstart-env](#jobstart-env).


## <a id="terminal-input" class="section-title" href="#terminal-input">Input</a> 

To send input, enter [Terminal-mode| with |i|, |I|, |a|, |A](#Terminal-mode| with |i|, |I|, |a|, |A) or
[:startinsert](#:startinsert). In this mode all keys except <C-\> are sent to the underlying
program. If <C-\> is pressed, the next key is sent unless it is <C-N> or <C-O>.
Use <C-\><C-N> to return to normal mode. [CTRL-\_CTRL-N](#CTRL-\_CTRL-N)
Use <C-\><C-O> to execute one normal mode command and then return to terminal
mode. *t_CTRL-\_CTRL-O*

Terminal-mode forces these local options:

'cursorlineopt' = number
'nocursorcolumn'
'scrolloff' = 0
'sidescrolloff' = 0

Terminal-mode has its own [:tnoremap](#:tnoremap) namespace for mappings, this can be used
to automate any terminal interaction.

To map <Esc> to exit terminal-mode:
```
:tnoremap <Esc> <C-\><C-n>

To simulate [i_CTRL-R](#i_CTRL-R) in terminal-mode:
```
:tnoremap <expr> <C-R> '<C-\><C-N>"'.nr2char(getchar()).'pi'

To use `ALT+{h,j,k,l}` to navigate windows from any mode:
```
:tnoremap <A-h> <C-\><C-N><C-w>h
:tnoremap <A-j> <C-\><C-N><C-w>j
:tnoremap <A-k> <C-\><C-N><C-w>k
:tnoremap <A-l> <C-\><C-N><C-w>l
:inoremap <A-h> <C-\><C-N><C-w>h
:inoremap <A-j> <C-\><C-N><C-w>j
:inoremap <A-k> <C-\><C-N><C-w>k
:inoremap <A-l> <C-\><C-N><C-w>l
:nnoremap <A-h> <C-w>h
:nnoremap <A-j> <C-w>j
:nnoremap <A-k> <C-w>k
:nnoremap <A-l> <C-w>l

You can also create menus similar to terminal mode mappings, but you have to
use [:tlmenu| instead of |:tmenu](#:tlmenu| instead of |:tmenu).

Mouse input has the following behavior:

- If the program has enabled mouse events, the corresponding events will be
forwarded to the program.
- If mouse events are disabled (the default), terminal focus will be lost and
the event will be processed as in a normal buffer.
- If another window is clicked, terminal focus will be lost and nvim will jump
to the clicked window
- If the mouse wheel is used while the mouse is positioned in another window,
the terminal won't lose focus and the hovered window will be scrolled.


## <a id="terminal-config" class="section-title" href="#terminal-config">Configuration</a> 

Options:		'modified', 'scrollback'
Events:			[TermOpen|, |TermEnter|, |TermLeave|, |TermClose](#TermOpen|, |TermEnter|, |TermLeave|, |TermClose)
Highlight groups:	[hl-TermCursor|, |hl-TermCursorNC](#hl-TermCursor|, |hl-TermCursorNC)

Terminal sets local defaults for some options, which may differ from your
global configuration.

- 'list' is disabled
- 'wrap' is disabled

You can change the defaults with a TermOpen autocommand:
```
### <a id="au TermOpen  setlocal list" class="section-title" href="#au TermOpen  setlocal list">Note:</a>

TERMINAL COLORS ~

The `{g,b}:terminal_color_x` variables control the terminal color palette,
where `x` is the color index between 0 and 255 inclusive.  The variables are
read during [TermOpen](#TermOpen). The value must be a color name or hexadecimal string.
Example:
```
let g:terminal_color_4 = '#ff0000'
let g:terminal_color_5 = 'green'
Only works for RGB UIs (see 'termguicolors'); for 256-color terminals the
color index is just forwarded.

Editor highlighting ([syntax-highlighting|, |highlight-groups](#syntax-highlighting|, |highlight-groups), etc.) has
higher precedence: it is applied after terminal colors are resolved.


## <a id="terminal-status" class="section-title" href="#terminal-status">Status Variables</a> 

Terminal buffers maintain some buffer-local variables and options. The values
are initialized before TermOpen, so you can use them in a local 'statusline'.
Example:
```
### <a id=":autocmd TermOpen  setlocal statusline=%{b:term_title}" class="section-title" href="#:autocmd TermOpen  setlocal statusline=%{b:term_title}">Note:</a>

- *b:term_title*  Terminal title (user-writable), typically displayed in the
window title or tab title of a graphical terminal emulator. Terminal
programs can set this by emitting an escape sequence.
- ['channel'|  Terminal PTY |job-id|.  Can be used with |chansend()](#'channel'|  Terminal PTY |job-id|.  Can be used with |chansend()) to send
input to the terminal.
- The [TermClose| event gives the terminal job exit code in the |v:event](#TermClose| event gives the terminal job exit code in the |v:event)
"status" field. For example, this autocmd closes terminal buffers if the job
exited without error:
```
### <a id="autocmd TermClose  if !v:event.status [ exe 'bdelete! '..expand('<abuf>') | endif" class="section-title" href="#autocmd TermClose  if !v:event.status | exe 'bdelete! '..expand('<abuf>') ](# exe 'bdelete! '..expand('<abuf>') | endif" class="section-title" href="#autocmd TermClose  if !v:event.status | exe 'bdelete! '..expand('<abuf>') ) endif">Note:</a>

Use [jobwait()](#jobwait()) to check if the terminal job has finished:
```
let running = jobwait([&channel], 0)[0] == -1


## <a id="terminal-debug" class="section-title" href="#terminal-debug">:Termdebug Plugin</a> 

The Terminal debugging plugin can be used to debug a program with gdb and view
the source code in a Vim window.  Since this is completely contained inside
Vim this also works remotely over an ssh connection.

Starting ~
### <a id="termdebug-starting" class="section-title" href="#termdebug-starting">Note:</a>
Load the plugin with this command:
```
packadd termdebug
### <a id=":Termdebug" class="section-title" href="#:Termdebug"><</a>
To start debugging use `:Termdebug` or `:TermdebugCommand` followed by the
command name, for example:
```
:Termdebug vim

This opens two windows:

gdb window	A terminal window in which "gdb vim" is executed.  Here you
can directly interact with gdb.

program window	A terminal window for the executed program.  When "run" is
used in gdb the program I/O will happen in this window, so
that it does not interfere with controlling gdb.

The current window is used to show the source code.  When gdb pauses the
source file location will be displayed, if possible.  A sign is used to
highlight the current position, using highlight group debugPC.

If the buffer in the current window is modified, another window will be opened
to display the current gdb position.

Focus the terminal of the executed program to interact with it.  This works
the same as any command running in a terminal window.

When the debugger ends, typically by typing "quit" in the gdb window, the two
opened windows are closed.

Only one debugger can be active at a time.
### <a id=":TermdebugCommand" class="section-title" href="#:TermdebugCommand">Note:</a>
If you want to give specific commands to the command being debugged, you can
use the `:TermdebugCommand` command followed by the command name and
additional parameters.
```
:TermdebugCommand vim --clean -c ':set nu'

Both the `:Termdebug` and `:TermdebugCommand` support an optional "!" bang
argument to start the command right away, without pausing at the gdb window
(and cursor will be in the debugged window).  For example:
```
:TermdebugCommand! vim --clean

To attach gdb to an already running executable or use a core file, pass extra
arguments.  E.g.:
```
:Termdebug vim core
:Termdebug vim 98343

If no argument is given, you'll end up in a gdb window, in which you need to
specify which command to run using e.g. the gdb `file` command.


Example session ~
### <a id="termdebug-example" class="section-title" href="#termdebug-example">Note:</a>
Start in the Vim "src" directory and build Vim:
```
% make
Start Vim:
```
% ./vim
Load the termdebug plugin and start debugging Vim:
```
:packadd termdebug
:Termdebug vim
You should now have three windows:
source  - where you started
gdb	    - you can type gdb commands here
program - the executed program will use this window

Put focus on the gdb window and type:
```
break ex_help
run
Vim will start running in the program window. Put focus there and type:
```
:help gui
Gdb will run into the ex_help breakpoint.  The source window now shows the
ex_cmds.c file.  A red "1 " marker will appear in the signcolumn where the
breakpoint was set.  The line where the debugger stopped is highlighted.  You
can now step through the program.  You will see the highlighting move as the
debugger executes a line of source code.

Run ":Next" a few times until the for loop is highlighted.  Put the cursor on
the end of "eap->arg", then call ":Eval".  You will see this displayed:
"eap->arg": 0x555555e68855 "gui" ~
This way you can inspect the value of local variables.  You can also focus the
gdb window and use a "print" command, e.g.:
```
print *eap
If mouse pointer movements are working, Vim will also show a balloon when the
mouse rests on text that can be evaluated by gdb.
You can also use the "K" mapping that will either use neovim floating windows
if available to show the results or print below the status bar.

Now go back to the source window and put the cursor on the first line after
the for loop, then type:
```
:Break
You will see a "1" marker appear, this indicates the new breakpoint.  Now
run ":Cont" command and the code until the breakpoint will be executed.

You can type more advanced commands in the gdb window.  For example, type:
```
watch curbuf
Now run ":Cont" (or type "cont" in the gdb window). Execution
will now continue until the value of "curbuf" changes, which is in do_ecmd().
To remove this watchpoint again type in the gdb window:
```
delete 3

You can see the stack by typing in the gdb window:
```
where
Move through the stack frames, e.g. with:
```
frame 3
The source window will show the code, at the point where the call was made to
a deeper level.


Stepping through code ~
### <a id="termdebug-stepping" class="section-title" href="#termdebug-stepping">Note:</a>
Put focus on the gdb window to type commands there.  Some common ones are:
- CTRL-C	interrupt the program
- next		execute the current line and stop at the next line
- step		execute the current line and stop at the next statement,
entering functions
- until		execute until past the current cursor line or past a specified
position or the current stack frame returns
- finish	execute until leaving the current function
- where		show the stack
- frame N	go to the Nth stack frame
- continue	continue execution

### <a id=":Run :Arguments" class="section-title" href="#:Run :Arguments">Note:</a>
In the window showing the source code these commands can be used to control
gdb:
`:Run` [args]	    run the program with [args] or the previous arguments
`:Arguments` {args}  set arguments for the next `:Run`

*:Break*	set a breakpoint at the current line; a sign will be displayed
*:Clear*	delete the breakpoint at the current line

*:Step*	execute the gdb "step" command
*:Over*	execute the gdb "next" command (`:Next` is a Vim command)
*:Until*	execute the gdb "until" command
*:Finish*	execute the gdb "finish" command
*:Continue*	execute the gdb "continue" command
*:Stop*	interrupt the program

If gdb stops at a source line and there is no window currently showing the
source code, a new window will be created for the source code.  This also
happens if the buffer in the source code window has been modified and can't be
abandoned.

Gdb gives each breakpoint a number.  In Vim the number shows up in the sign
column, with a red background.  You can use these gdb commands:
- info break	list breakpoints
- delete N	delete breakpoint N
You can also use the `:Clear` command if the cursor is in the line with the
breakpoint, or use the "Clear breakpoint" right-click menu entry.


Inspecting variables ~
### <a id="termdebug-variables :Evaluate" class="section-title" href="#termdebug-variables :Evaluate">Note:</a>
`:Evaluate`	    evaluate the expression under the cursor
`K`		    same (see [termdebug_map_K](#termdebug_map_K) to disable)
`:Evaluate` {expr}   evaluate {expr}
`:'<,'>Evaluate`     evaluate the Visually selected text

This is similar to using "print" in the gdb window.
You can usually shorten `:Evaluate` to `:Ev`.


Other commands ~
### <a id="termdebug-commands" class="section-title" href="#termdebug-commands">Note:</a>
*:Gdb*	     jump to the gdb window
*:Program*    jump to the window with the running program
*:Source*     jump to the window with the source code, create it if there
isn't one
*:Asm*	     jump to the window with the disassembly, create it if there
isn't one


Events ~
### <a id="termdebug-events" class="section-title" href="#termdebug-events">Note:</a>
Four autocommands can be used:
```
au User TermdebugStartPre  echomsg 'debugging starting'
au User TermdebugStartPost echomsg 'debugging started'
au User TermdebugStopPre   echomsg 'debugging stopping'
au User TermdebugStopPost  echomsg 'debugging stopped'

```

### <a id="TermdebugStartPre" class="section-title" href="#TermdebugStartPre">Note:</a>
TermdebugStartPre		Before starting debugging.
Not triggered if the debugger is already
running or the debugger command cannot be
executed.
### <a id="TermdebugStartPost" class="section-title" href="#TermdebugStartPost">Note:</a>
TermdebugStartPost		After debugging has initialized.
If a "!" bang is passed to `:Termdebug` or
`:TermdebugCommand` the event is triggered
before running the provided command in gdb.
### <a id="TermdebugStopPre" class="section-title" href="#TermdebugStopPre">Note:</a>
TermdebugStopPre		Before debugging ends, when gdb is terminated,
most likely after issuing a "quit" command in
the gdb window.
### <a id="TermdebugStopPost" class="section-title" href="#TermdebugStopPost">Note:</a>
TermdebugStopPost		After debugging has ended, gdb-related windows
are closed, debug buffers wiped out and
the state before the debugging was restored.


Prompt mode ~
### <a id="termdebug-prompt" class="section-title" href="#termdebug-prompt">Note:</a>
When on MS-Windows, gdb will run in a buffer with 'buftype' set to "prompt".
This works slightly differently:
- The gdb window will be in Insert mode while typing commands.  Go to Normal
mode with <Esc>, then you can move around in the buffer, copy/paste, etc.
Go back to editing the gdb command with any command that starts Insert mode,
such as `a` or `i`.
- A separate :terminal window will be opened to run the debugged program in.

### <a id="termdebug_use_prompt" class="section-title" href="#termdebug_use_prompt">Note:</a>
Prompt mode can be used with:
```
let g:termdebug_config['use_prompt'] = 1
Or if there is no g:termdebug_config:
```
let g:termdebug_use_prompt = 1

```

### <a id="termdebug_map_K" class="section-title" href="#termdebug_map_K">Note:</a>
The K key is normally mapped to :Evaluate. If you do not want this use:
```
let g:termdebug_config['map_K'] = 0
Or if there is no g:termdebug_config:
```
let g:termdebug_map_K = 0

```

### <a id="termdebug_disasm_window" class="section-title" href="#termdebug_disasm_window">Note:</a>
If you want the Asm window shown by default, set the flag to 1.
the "disasm_window_height" entry can be used to set the window height:
```
let g:termdebug_config['disasm_window'] = 1
let g:termdebug_config['disasm_window_height'] = 15
or, if there is no g:termdebug_config:
```
let g:termdebug_disasm_window = 15
Any value greater than 1 will set the Asm window height to that value.

Communication ~
### <a id="termdebug-communication" class="section-title" href="#termdebug-communication">Note:</a>
There is another, hidden, buffer, which is used for Vim to communicate with
gdb.  The buffer name is "gdb communication".  Do not delete this buffer, it
will break the debugger.

Gdb has some weird behavior, the plugin does its best to work around that.
For example, after typing "continue" in the gdb window a CTRL-C can be used to
interrupt the running program.  But after using the MI command
"-exec-continue"  pressing CTRL-C does not interrupt.  Therefore you will see
"continue" being used for the `:Continue` command, instead of using the
communication channel.


Customizing ~
### <a id="termdebug-customizing g:termdebug_config" class="section-title" href="#termdebug-customizing g:termdebug_config">Note:</a>
In the past several global variables were used for configuration.  These are
deprecated, using the g:termdebug_config dictionary is preferred.  When
g:termdebug_config exists the other global variables will not be used.


GDB command ~
### <a id="g:termdebugger" class="section-title" href="#g:termdebugger">Note:</a>
To change the name of the gdb command, set "debugger" entry in
g:termdebug_config or the "g:termdebugger" variable before invoking
`:Termdebug`:
```
let g:termdebug_config['command'] = "mygdb"
Or if there is no g:termdebug_config:
```
let g:termdebugger = "mygdb"

If the command needs an argument use a List:
```
let g:termdebug_config['command'] = ['rr', 'replay', '--']
Or if there is no g:termdebug_config:
```
let g:termdebugger = ['rr', 'replay', '--']

To not use neovim floating windows for previewing variable evaluation, set the
`g:termdebug_useFloatingHover` variable like this:
```
let g:termdebug_useFloatingHover = 0

If you are a mouse person, you can also define a mapping using your right
click to one of the terminal command like evaluate the variable under the
cursor:
```
nnoremap <RightMouse> :Evaluate<CR>
or set/unset a breakpoint:
```
nnoremap <RightMouse> :Break<CR>


Several arguments will be added to make gdb work well for the debugger.
If you want to modify them, add a function to filter the argument list:
```
let g:termdebug_config['command_filter'] = MyDebugFilter

If you do not want the arguments to be added, but you do need to set the
"pty", use a function to add the necessary arguments:
```
let g:termdebug_config['command_add_args'] = MyAddArguments
The function will be called with the list of arguments so far, and a second
argument that is the name of the pty.
### <a id="gdb-version" class="section-title" href="#gdb-version">Note:</a>
Only debuggers fully compatible with gdb will work.  Vim uses the GDB/MI
interface.  The "new-ui" command  requires gdb version 7.12 or later.  if you
get this error:
Undefined command: "new-ui". Try "help".~
Then your gdb is too old.


Colors ~
### <a id="hl-debugPC hl-debugBreakpoint" class="section-title" href="#hl-debugPC hl-debugBreakpoint">Note:</a>
The color of the signs can be adjusted with these highlight groups:
- debugPC		the current position
- debugBreakpoint	a breakpoint

The defaults are, when 'background' is "light":
hi debugPC term=reverse ctermbg=lightblue guibg=lightblue
hi debugBreakpoint term=reverse ctermbg=red guibg=red

When 'background' is "dark":
hi debugPC term=reverse ctermbg=darkblue guibg=darkblue
hi debugBreakpoint term=reverse ctermbg=red guibg=red


Shortcuts ~
### <a id="termdebug_shortcuts" class="section-title" href="#termdebug_shortcuts">Note:</a>

You can define your own shortcuts (mappings) to control gdb, that can work in
any window, using the TermDebugSendCommand() function.  Example:
```
map ,w :call TermDebugSendCommand('where')<CR>
The argument is the gdb command.


Popup menu ~
### <a id="termdebug_popup" class="section-title" href="#termdebug_popup">Note:</a>

By default the Termdebug plugin sets 'mousemodel' to "popup_setpos" and adds
these entries to the popup menu:
Set breakpoint		`:Break`
Clear breakpoint	`:Clear`
Evaluate		`:Evaluate`
If you don't want this then disable it with:
```
let g:termdebug_config['popup'] = 0
or if there is no g:termdebug_config:
```
let g:termdebug_popup = 0


Vim window width ~
### <a id="termdebug_wide" class="section-title" href="#termdebug_wide">Note:</a>

To change the width of the Vim window when debugging starts and use a vertical
split:
```
let g:termdebug_config['wide'] = 163
Or if there is no g:termdebug_config:
```
let g:termdebug_wide = 163

This will set 'columns' to 163 when `:Termdebug` is used.  The value is
restored when quitting the debugger.

If the wide value is set and 'columns' is already a greater value, then a
vertical split will be used without modifying 'columns'.

Set the wide value to 1 to use a vertical split without ever changing
'columns'.  This is useful when the terminal can't be resized by Vim.


vim:tw=78:ts=8:noet:ft=help:norl:
