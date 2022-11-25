---
title:  Nvim_terminal_emulator
layout: ../../layouts/MainLayout.astro
---

  <a name="terminal_emulator.txt"></a><a name="terminal"></a><h1> Nvim_terminal_emulator</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/nvim_terminal_emulator.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Terminal emulator <a name="terminal-emulator"></a><code class="help-tag">terminal-emulator</code></div>
<div class="old-help-para">Nvim embeds a VT220/xterm terminal emulator based on libvterm. The terminal is
presented as a special <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a>, asynchronously updated as data is received
from the connected program.</div>
<div class="old-help-para">Terminal buffers behave like normal buffers, except:
<div class="help-li" style=""> With <a href="/neovim-docs-web/en/options#'modifiable'">'modifiable'</a>, lines can be edited but not deleted.
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'scrollback'">'scrollback'</a> controls how many lines are kept.
</div><div class="help-li" style=""> Output is followed ("tailed") if cursor is on the last line.
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'modified'">'modified'</a> is the default. You can set <a href="/neovim-docs-web/en/options#'nomodified'">'nomodified'</a> to avoid a warning when
  closing the terminal buffer.
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'bufhidden'">'bufhidden'</a> defaults to "hide".
</div></div>
<div class="old-help-para"><h2 class="help-heading">Start<span class="help-heading-tags">						<a name="terminal-start"></a><span class="help-tag">terminal-start</span></span></h2></div>
<div class="old-help-para">There are several ways to create a terminal buffer:</div>
<div class="old-help-para"><div class="help-li" style=""> Run the <a href="/neovim-docs-web/en/various#%3Aterminal">:terminal</a> command.
</div><div class="help-li" style=""> Call the <a href="/neovim-docs-web/en/api#nvim_open_term()">nvim_open_term()</a> or <a href="/neovim-docs-web/en/builtin#termopen()">termopen()</a> function.
</div><div class="help-li" style=""> Edit a "term://" buffer. Examples:
<pre>:edit term://bash
:vsplit term://top</pre></div></div>
<div class="old-help-para">    Note: To open a "term://" buffer from an autocmd, the <a href="/neovim-docs-web/en/autocmd#autocmd-nested">autocmd-nested</a>
    modifier is required.<pre>autocmd VimEnter * ++nested split term://sh</pre></div>
<div class="old-help-para">    (This is only mentioned for reference; use <a href="/neovim-docs-web/en/various#%3Aterminal">:terminal</a> instead.)</div>
<div class="old-help-para">When the terminal starts, the buffer contents are updated and the buffer is
named in the form of <code>term://{cwd}//{pid}:{cmd}</code>. This naming scheme is used
by <a href="/neovim-docs-web/en/starting#%3Amksession">:mksession</a> to restore a terminal buffer (by restarting the <code>{cmd}</code>).</div>
<div class="old-help-para">The terminal environment is initialized as in <a href="/neovim-docs-web/en/builtin#jobstart-env">jobstart-env</a>.</div>
<div class="old-help-para"><h2 class="help-heading">Input<span class="help-heading-tags">						<a name="terminal-input"></a><span class="help-tag">terminal-input</span></span></h2></div>
<div class="old-help-para">To send input, enter <a href="/neovim-docs-web/en/intro#Terminal-mode">Terminal-mode</a> with <a href="/neovim-docs-web/en/insert#i">i</a>, <a href="/neovim-docs-web/en/insert#I">I</a>, <a href="/neovim-docs-web/en/insert#a">a</a>, <a href="/neovim-docs-web/en/insert#A">A</a> or
<a href="/neovim-docs-web/en/insert#%3Astartinsert">:startinsert</a>. In this mode all keys except <code>&lt;C-\&gt;</code> are sent to the underlying
program. If <code>&lt;C-\&gt;</code> is pressed, the next key is sent unless it is <code>&lt;C-N&gt;</code> or <code>&lt;C-O&gt;</code>.
Use <code>&lt;C-\&gt;</code><code>&lt;C-N&gt;</code> to return to normal mode. <a href="/neovim-docs-web/en/intro#CTRL-%5C_CTRL-N">CTRL-\_CTRL-N</a>
Use <code>&lt;C-\&gt;</code><code>&lt;C-O&gt;</code> to execute one normal mode command and then return to terminal
mode. <a name="t_CTRL-%5C_CTRL-O"></a><code class="help-tag">t_CTRL-\_CTRL-O</code></div>
<div class="old-help-para">Terminal-mode forces these local options:</div>
<div class="old-help-para">    <a href="/neovim-docs-web/en/options#'cursorlineopt'">'cursorlineopt'</a> = number
    <a href="/neovim-docs-web/en/options#'nocursorcolumn'">'nocursorcolumn'</a>
    <a href="/neovim-docs-web/en/options#'scrolloff'">'scrolloff'</a> = 0
    <a href="/neovim-docs-web/en/options#'sidescrolloff'">'sidescrolloff'</a> = 0</div>
<div class="old-help-para">Terminal-mode has its own <a href="/neovim-docs-web/en/map#%3Atnoremap">:tnoremap</a> namespace for mappings, this can be used
to automate any terminal interaction.</div>
<div class="old-help-para">To map <code>&lt;Esc&gt;</code> to exit terminal-mode:<pre>:tnoremap &lt;Esc&gt; &lt;C-\&gt;&lt;C-n&gt;</pre>
To simulate <a href="/neovim-docs-web/en/insert#i_CTRL-R">i_CTRL-R</a> in terminal-mode:<pre>:tnoremap &lt;expr&gt; &lt;C-R&gt; '&lt;C-\&gt;&lt;C-N&gt;"'.nr2char(getchar()).'pi'</pre>
To use <code>ALT+{h,j,k,l}</code> to navigate windows from any mode:<pre>:tnoremap &lt;A-h&gt; &lt;C-\&gt;&lt;C-N&gt;&lt;C-w&gt;h
:tnoremap &lt;A-j&gt; &lt;C-\&gt;&lt;C-N&gt;&lt;C-w&gt;j
:tnoremap &lt;A-k&gt; &lt;C-\&gt;&lt;C-N&gt;&lt;C-w&gt;k
:tnoremap &lt;A-l&gt; &lt;C-\&gt;&lt;C-N&gt;&lt;C-w&gt;l
:inoremap &lt;A-h&gt; &lt;C-\&gt;&lt;C-N&gt;&lt;C-w&gt;h
:inoremap &lt;A-j&gt; &lt;C-\&gt;&lt;C-N&gt;&lt;C-w&gt;j
:inoremap &lt;A-k&gt; &lt;C-\&gt;&lt;C-N&gt;&lt;C-w&gt;k
:inoremap &lt;A-l&gt; &lt;C-\&gt;&lt;C-N&gt;&lt;C-w&gt;l
:nnoremap &lt;A-h&gt; &lt;C-w&gt;h
:nnoremap &lt;A-j&gt; &lt;C-w&gt;j
:nnoremap &lt;A-k&gt; &lt;C-w&gt;k
:nnoremap &lt;A-l&gt; &lt;C-w&gt;l</pre>
You can also create menus similar to terminal mode mappings, but you have to
use <a href="/neovim-docs-web/en/gui#%3Atlmenu">:tlmenu</a> instead of <a href="/neovim-docs-web/en/gui#%3Atmenu">:tmenu</a>.</div>
<div class="old-help-para">Mouse input has the following behavior:</div>
<div class="old-help-para"><div class="help-li" style=""> If the program has enabled mouse events, the corresponding events will be
  forwarded to the program.
</div><div class="help-li" style=""> If mouse events are disabled (the default), terminal focus will be lost and
  the event will be processed as in a normal buffer.
</div><div class="help-li" style=""> If another window is clicked, terminal focus will be lost and nvim will jump
  to the clicked window
</div><div class="help-li" style=""> If the mouse wheel is used while the mouse is positioned in another window,
  the terminal won't lose focus and the hovered window will be scrolled.
</div></div>
<div class="old-help-para"><h2 class="help-heading">Configuration<span class="help-heading-tags">					<a name="terminal-config"></a><span class="help-tag">terminal-config</span></span></h2></div>
<div class="old-help-para">Options:		<a href="/neovim-docs-web/en/options#'modified'">'modified'</a>, <a href="/neovim-docs-web/en/options#'scrollback'">'scrollback'</a>
Events:			<a href="/neovim-docs-web/en/autocmd#TermOpen">TermOpen</a>, <a href="/neovim-docs-web/en/autocmd#TermEnter">TermEnter</a>, <a href="/neovim-docs-web/en/autocmd#TermLeave">TermLeave</a>, <a href="/neovim-docs-web/en/autocmd#TermClose">TermClose</a>
Highlight groups:	<a href="/neovim-docs-web/en/syntax#hl-TermCursor">hl-TermCursor</a>, <a href="/neovim-docs-web/en/syntax#hl-TermCursorNC">hl-TermCursorNC</a></div>
<div class="old-help-para">Terminal sets local defaults for some options, which may differ from your
global configuration.</div>
<div class="old-help-para"><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'list'">'list'</a> is disabled
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is disabled
</div></div>
<div class="old-help-para">You can change the defaults with a TermOpen autocommand:<pre>au TermOpen * setlocal list</pre>
<div class="help-column_heading">TERMINAL COLORS</div></div>
<div class="old-help-para">The <code>{g,b}:terminal_color_x</code> variables control the terminal color palette,
where <code>x</code> is the color index between 0 and 255 inclusive.  The variables are
read during <a href="/neovim-docs-web/en/autocmd#TermOpen">TermOpen</a>. The value must be a color name or hexadecimal string.
Example:<pre>let g:terminal_color_4 = '#ff0000'
let g:terminal_color_5 = 'green'</pre>
Only works for RGB UIs (see <a href="/neovim-docs-web/en/options#'termguicolors'">'termguicolors'</a>); for 256-color terminals the
color index is just forwarded.</div>
<div class="old-help-para">Editor highlighting (<a href="/neovim-docs-web/en/syntax#syntax-highlighting">syntax-highlighting</a>, <a href="/neovim-docs-web/en/syntax#highlight-groups">highlight-groups</a>, etc.) has
higher precedence: it is applied after terminal colors are resolved.</div>
<div class="old-help-para"><h2 class="help-heading">Status Variables<span class="help-heading-tags">				<a name="terminal-status"></a><span class="help-tag">terminal-status</span></span></h2></div>
<div class="old-help-para">Terminal buffers maintain some buffer-local variables and options. The values
are initialized before TermOpen, so you can use them in a local <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a>.
Example:<pre>:autocmd TermOpen * setlocal statusline=%{b:term_title}</pre>
<div class="help-li" style=""> <a name="b%3Aterm_title"></a><code class="help-tag">b:term_title</code>  Terminal title (user-writable), typically displayed in the
  window title or tab title of a graphical terminal emulator. Terminal
  programs can set this by emitting an escape sequence.
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'channel'">'channel'</a>  Terminal PTY <a href="/neovim-docs-web/en/job_control#job-id">job-id</a>.  Can be used with <a href="/neovim-docs-web/en/builtin#chansend()">chansend()</a> to send
  input to the terminal.
</div><div class="help-li" style=""> The <a href="/neovim-docs-web/en/autocmd#TermClose">TermClose</a> event gives the terminal job exit code in the <a href="/neovim-docs-web/en/eval#v%3Aevent">v:event</a>
  "status" field. For example, this autocmd closes terminal buffers if the job
  exited without error:<pre>autocmd TermClose * if !v:event.status | exe 'bdelete! '..expand('&lt;abuf&gt;') | endif</pre>
Use <a href="/neovim-docs-web/en/builtin#jobwait()">jobwait()</a> to check if the terminal job has finished:<pre>let running = jobwait([&amp;channel], 0)[0] == -1</pre>
==============================================================================
:Termdebug plugin				<a name="terminal-debug"></a><code class="help-tag-right">terminal-debug</code>
</div></div>
<div class="old-help-para">The Terminal debugging plugin can be used to debug a program with gdb and view
the source code in a Vim window.  Since this is completely contained inside
Vim this also works remotely over an ssh connection.</div>
<div class="old-help-para"><div class="help-column_heading">Starting</div>							<a name="termdebug-starting"></a><code class="help-tag-right">termdebug-starting</code>
Load the plugin with this command:<pre>packadd termdebug</pre></div>
<div class="old-help-para">							<a name="%3ATermdebug"></a><code class="help-tag-right">:Termdebug</code>
To start debugging use <code>:Termdebug</code> or <code>:TermdebugCommand</code> followed by the
command name, for example:<pre>:Termdebug vim</pre>
This opens two windows:</div>
<div class="old-help-para">gdb window	A terminal window in which "gdb vim" is executed.  Here you
		can directly interact with gdb.</div>
<div class="old-help-para">program window	A terminal window for the executed program.  When "run" is
		used in gdb the program I/O will happen in this window, so
		that it does not interfere with controlling gdb.</div>
<div class="old-help-para">The current window is used to show the source code.  When gdb pauses the
source file location will be displayed, if possible.  A sign is used to
highlight the current position, using highlight group debugPC.</div>
<div class="old-help-para">If the buffer in the current window is modified, another window will be opened
to display the current gdb position.</div>
<div class="old-help-para">Focus the terminal of the executed program to interact with it.  This works
the same as any command running in a terminal window.</div>
<div class="old-help-para">When the debugger ends, typically by typing "quit" in the gdb window, the two
opened windows are closed.</div>
<div class="old-help-para">Only one debugger can be active at a time.
							<a name="%3ATermdebugCommand"></a><code class="help-tag-right">:TermdebugCommand</code>
If you want to give specific commands to the command being debugged, you can
use the <code>:TermdebugCommand</code> command followed by the command name and
additional parameters.<pre>:TermdebugCommand vim --clean -c ':set nu'</pre>
Both the <code>:Termdebug</code> and <code>:TermdebugCommand</code> support an optional "!" bang
argument to start the command right away, without pausing at the gdb window
(and cursor will be in the debugged window).  For example:<pre>:TermdebugCommand! vim --clean</pre>
To attach gdb to an already running executable or use a core file, pass extra
arguments.  E.g.:<pre>:Termdebug vim core
:Termdebug vim 98343</pre>
If no argument is given, you'll end up in a gdb window, in which you need to
specify which command to run using e.g. the gdb <code>file</code> command.</div>
<div class="old-help-para"><div class="help-column_heading">Example session</div>							<a name="termdebug-example"></a><code class="help-tag-right">termdebug-example</code>
Start in the Vim "src" directory and build Vim:<pre>% make</pre>
Start Vim:<pre>% ./vim</pre>
Load the termdebug plugin and start debugging Vim:<pre>:packadd termdebug
:Termdebug vim</pre>
You should now have three windows:
    source  - where you started
    gdb	    - you can type gdb commands here
    program - the executed program will use this window</div>
<div class="old-help-para">Put focus on the gdb window and type:<pre>break ex_help
run</pre>
Vim will start running in the program window. Put focus there and type:<pre>:help gui</pre>
Gdb will run into the ex_help breakpoint.  The source window now shows the
ex_cmds.c file.  A red "1 " marker will appear in the signcolumn where the
breakpoint was set.  The line where the debugger stopped is highlighted.  You
can now step through the program.  You will see the highlighting move as the
debugger executes a line of source code.</div>
<div class="old-help-para">Run ":Next" a few times until the for loop is highlighted.  Put the cursor on
the end of "eap-&gt;arg", then call ":Eval".  You will see this displayed:
<div class="help-column_heading">	"eap-&gt;arg": 0x555555e68855 "gui"</div>This way you can inspect the value of local variables.  You can also focus the
gdb window and use a "print" command, e.g.:<pre>print *eap</pre>
If mouse pointer movements are working, Vim will also show a balloon when the
mouse rests on text that can be evaluated by gdb.
You can also use the "K" mapping that will either use neovim floating windows
if available to show the results or print below the status bar.</div>
<div class="old-help-para">Now go back to the source window and put the cursor on the first line after
the for loop, then type:<pre>:Break</pre>
You will see a "1" marker appear, this indicates the new breakpoint.  Now
run ":Cont" command and the code until the breakpoint will be executed.</div>
<div class="old-help-para">You can type more advanced commands in the gdb window.  For example, type:<pre>watch curbuf</pre>
Now run ":Cont" (or type "cont" in the gdb window). Execution
will now continue until the value of "curbuf" changes, which is in do_ecmd().
To remove this watchpoint again type in the gdb window:<pre>delete 3</pre>
You can see the stack by typing in the gdb window:<pre>where</pre>
Move through the stack frames, e.g. with:<pre>frame 3</pre>
The source window will show the code, at the point where the call was made to
a deeper level.</div>
<div class="old-help-para"><div class="help-column_heading">Stepping through code</div>							<a name="termdebug-stepping"></a><code class="help-tag-right">termdebug-stepping</code>
Put focus on the gdb window to type commands there.  Some common ones are:
<div class="help-li" style=""> <code>CTRL-C</code>	interrupt the program
</div><div class="help-li" style=""> next		execute the current line and stop at the next line
</div><div class="help-li" style=""> step		execute the current line and stop at the next statement,
		entering functions
</div><div class="help-li" style=""> until		execute until past the current cursor line or past a specified
		position or the current stack frame returns
</div><div class="help-li" style=""> finish	execute until leaving the current function
</div><div class="help-li" style=""> where		show the stack
</div><div class="help-li" style=""> frame N	go to the Nth stack frame
</div><div class="help-li" style=""> continue	continue execution
</div></div>
<div class="old-help-para">						<a name="%3ARun"></a><code class="help-tag-right">:Run</code> <a name="%3AArguments"></a><code class="help-tag">:Arguments</code>
In the window showing the source code these commands can be used to control
gdb:
 <code>:Run</code> [args]	    run the program with [args] or the previous arguments
 <code>:Arguments</code> <code>{args}</code>  set arguments for the next <code>:Run</code></div>
<div class="old-help-para"> <a name="%3ABreak"></a><code class="help-tag">:Break</code>  	set a breakpoint at the current line; a sign will be displayed
 <a name="%3AClear"></a><code class="help-tag">:Clear</code>  	delete the breakpoint at the current line</div>
<div class="old-help-para"> <a name="%3AStep"></a><code class="help-tag">:Step</code>  	execute the gdb "step" command
 <a name="%3AOver"></a><code class="help-tag">:Over</code>  	execute the gdb "next" command (<code>:Next</code> is a Vim command)
 <a name="%3AUntil"></a><code class="help-tag">:Until</code>  	execute the gdb "until" command
 <a name="%3AFinish"></a><code class="help-tag">:Finish</code>  	execute the gdb "finish" command
 <a name="%3AContinue"></a><code class="help-tag">:Continue</code>  	execute the gdb "continue" command
 <a name="%3AStop"></a><code class="help-tag">:Stop</code>  	interrupt the program</div>
<div class="old-help-para">If gdb stops at a source line and there is no window currently showing the
source code, a new window will be created for the source code.  This also
happens if the buffer in the source code window has been modified and can't be
abandoned.</div>
<div class="old-help-para">Gdb gives each breakpoint a number.  In Vim the number shows up in the sign
column, with a red background.  You can use these gdb commands:
<div class="help-li" style=""> info break	list breakpoints
</div><div class="help-li" style=""> delete N	delete breakpoint N
You can also use the <code>:Clear</code> command if the cursor is in the line with the
breakpoint, or use the "Clear breakpoint" right-click menu entry.
</div></div>
<div class="old-help-para"><div class="help-column_heading">Inspecting variables</div>					<a name="termdebug-variables"></a><code class="help-tag-right">termdebug-variables</code> <a name="%3AEvaluate"></a><code class="help-tag">:Evaluate</code>
 <code>:Evaluate</code>  	    evaluate the expression under the cursor
 <code>K</code>  		    same (see <a href="/neovim-docs-web/en/nvim_terminal_emulator#termdebug_map_K">termdebug_map_K</a> to disable)
 <code>:Evaluate</code> <code>{expr}</code>   evaluate <code>{expr}</code>
 <code>:'&lt;,'&gt;Evaluate</code>     evaluate the Visually selected text</div>
<div class="old-help-para">This is similar to using "print" in the gdb window.
You can usually shorten <code>:Evaluate</code> to <code>:Ev</code>.</div>
<div class="old-help-para"><div class="help-column_heading">Other commands</div>							<a name="termdebug-commands"></a><code class="help-tag-right">termdebug-commands</code>
 <a name="%3AGdb"></a><code class="help-tag">:Gdb</code>  	     jump to the gdb window
 <a name="%3AProgram"></a><code class="help-tag">:Program</code>    jump to the window with the running program
 <a name="%3ASource"></a><code class="help-tag">:Source</code>     jump to the window with the source code, create it if there
	     isn't one
 <a name="%3AAsm"></a><code class="help-tag">:Asm</code>  	     jump to the window with the disassembly, create it if there
	     isn't one</div>
<div class="old-help-para"><div class="help-column_heading">Events</div>							<a name="termdebug-events"></a><code class="help-tag-right">termdebug-events</code>
Four autocommands can be used:<pre>au User TermdebugStartPre  echomsg 'debugging starting'
au User TermdebugStartPost echomsg 'debugging started'
au User TermdebugStopPre   echomsg 'debugging stopping'
au User TermdebugStopPost  echomsg 'debugging stopped'</pre></div>
<div class="old-help-para">						<a name="TermdebugStartPre"></a><code class="help-tag-right">TermdebugStartPre</code>
TermdebugStartPre		Before starting debugging.
				Not triggered if the debugger is already
				running or the debugger command cannot be
				executed.
						<a name="TermdebugStartPost"></a><code class="help-tag-right">TermdebugStartPost</code>
TermdebugStartPost		After debugging has initialized.
				If a "!" bang is passed to <code>:Termdebug</code> or
				<code>:TermdebugCommand</code> the event is triggered
				before running the provided command in gdb.
						<a name="TermdebugStopPre"></a><code class="help-tag-right">TermdebugStopPre</code>
TermdebugStopPre		Before debugging ends, when gdb is terminated,
				most likely after issuing a "quit" command in
				the gdb window.
						<a name="TermdebugStopPost"></a><code class="help-tag-right">TermdebugStopPost</code>
TermdebugStopPost		After debugging has ended, gdb-related windows
				are closed, debug buffers wiped out and
				the state before the debugging was restored.</div>
<div class="old-help-para"><div class="help-column_heading">Customizing</div>				<a name="termdebug-customizing"></a><code class="help-tag-right">termdebug-customizing</code> <a name="g%3Atermdebug_config"></a><code class="help-tag">g:termdebug_config</code>
In the past several global variables were used for configuration.  These are
deprecated and using the g:termdebug_config dictionary is preferred.  When
g:termdebug_config exists the other global variables will NOT be used.
The recommended way is to start with an empty dictionary:<pre>let g:termdebug_config = {}</pre>
Then you can add entries to the dictionary as mentioned below.  The
deprecated global variable names are mentioned for completeness.  If you are
switching over to using g:termdebug_config you can find the old variable name
and take over the value, then delete the deprecated variable.</div>
<div class="old-help-para"><div class="help-column_heading">Prompt mode</div>						<a name="termdebug-prompt"></a><code class="help-tag-right">termdebug-prompt</code>
When on MS-Windows, gdb will run in a buffer with <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> set to "prompt".
This works slightly differently:
<div class="help-li" style=""> The gdb window will be in Insert mode while typing commands.  Go to Normal
  mode with <code>&lt;Esc&gt;</code>, then you can move around in the buffer, copy/paste, etc.
  Go back to editing the gdb command with any command that starts Insert mode,
  such as <code>a</code> or <code>i</code>.
</div><div class="help-li" style=""> A separate :terminal window will be opened to run the debugged program in.
</div></div>
<div class="old-help-para">						<a name="termdebug_use_prompt"></a><code class="help-tag-right">termdebug_use_prompt</code>
Prompt mode can be used with:<pre>let g:termdebug_config['use_prompt'] = 1</pre>
If there is no g:termdebug_config you can use:<pre>let g:termdebug_use_prompt = 1</pre></div>
<div class="old-help-para">						<a name="termdebug_map_K"></a><code class="help-tag-right">termdebug_map_K</code>
The K key is normally mapped to :Evaluate. If you do not want this use:<pre>let g:termdebug_config['map_K'] = 0</pre>
If there is no g:termdebug_config you can use:<pre>let g:termdebug_map_K = 0</pre></div>
<div class="old-help-para">						<a name="termdebug_disasm_window"></a><code class="help-tag-right">termdebug_disasm_window</code>
If you want the Asm window shown by default, set the flag to 1.
the "disasm_window_height" entry can be used to set the window height:<pre>let g:termdebug_config['disasm_window'] = 1
let g:termdebug_config['disasm_window_height'] = 15</pre>
If there is no g:termdebug_config you can use:<pre>let g:termdebug_disasm_window = 15</pre>
Any value greater than 1 will set the Asm window height to that value.</div>
<div class="old-help-para"><div class="help-column_heading">Communication</div>						<a name="termdebug-communication"></a><code class="help-tag-right">termdebug-communication</code>
There is another, hidden, buffer, which is used for Vim to communicate with
gdb.  The buffer name is "gdb communication".  Do not delete this buffer, it
will break the debugger.</div>
<div class="old-help-para">Gdb has some weird behavior, the plugin does its best to work around that.
For example, after typing "continue" in the gdb window a <code>CTRL-C</code> can be used to
interrupt the running program.  But after using the MI command
"-exec-continue"  pressing <code>CTRL-C</code> does not interrupt.  Therefore you will see
"continue" being used for the <code>:Continue</code> command, instead of using the
communication channel.</div>
<div class="old-help-para"><div class="help-column_heading">GDB command</div>							<a name="g%3Atermdebugger"></a><code class="help-tag-right">g:termdebugger</code>
To change the name of the gdb command, set "debugger" entry in
g:termdebug_config or the "g:termdebugger" variable before invoking
<code>:Termdebug</code>:<pre>let g:termdebug_config['command'] = "mygdb"</pre>
If there is no g:termdebug_config you can use:<pre>let g:termdebugger = "mygdb"</pre>
If the command needs an argument use a List:<pre>let g:termdebug_config['command'] = ['rr', 'replay', '--']</pre>
If there is no g:termdebug_config you can use:<pre>let g:termdebugger = ['rr', 'replay', '--']</pre>
To not use neovim floating windows for previewing variable evaluation, set the
<code>g:termdebug_useFloatingHover</code> variable like this:<pre>let g:termdebug_useFloatingHover = 0</pre>
If you are a mouse person, you can also define a mapping using your right
click to one of the terminal command like evaluate the variable under the
cursor:<pre>nnoremap &lt;RightMouse&gt; :Evaluate&lt;CR&gt;</pre>
or set/unset a breakpoint:<pre>nnoremap &lt;RightMouse&gt; :Break&lt;CR&gt;</pre>
Several arguments will be added to make gdb work well for the debugger.
If you want to modify them, add a function to filter the argument list:<pre>let g:termdebug_config['command_filter'] = MyDebugFilter</pre>
If you do not want the arguments to be added, but you do need to set the
"pty", use a function to add the necessary arguments:<pre>let g:termdebug_config['command_add_args'] = MyAddArguments</pre>
The function will be called with the list of arguments so far, and a second
argument that is the name of the pty.
							<a name="gdb-version"></a><code class="help-tag-right">gdb-version</code>
Only debuggers fully compatible with gdb will work.  Vim uses the GDB/MI
interface.  The "new-ui" command  requires gdb version 7.12 or later.  if you
get this error:
	Undefined command: "new-ui". Try "help".~
Then your gdb is too old.</div>
<div class="old-help-para"><div class="help-column_heading">Colors</div>					<a name="hl-debugPC"></a><code class="help-tag-right">hl-debugPC</code> <a name="hl-debugBreakpoint"></a><code class="help-tag">hl-debugBreakpoint</code>
The color of the signs can be adjusted with these highlight groups:
<div class="help-li" style=""> debugPC		the current position
</div><div class="help-li" style=""> debugBreakpoint	a breakpoint
</div></div>
<div class="old-help-para">The defaults are, when <a href="/neovim-docs-web/en/options#'background'">'background'</a> is "light":
  hi debugPC term=reverse ctermbg=lightblue guibg=lightblue
  hi debugBreakpoint term=reverse ctermbg=red guibg=red</div>
<div class="old-help-para">When <a href="/neovim-docs-web/en/options#'background'">'background'</a> is "dark":
  hi debugPC term=reverse ctermbg=darkblue guibg=darkblue
  hi debugBreakpoint term=reverse ctermbg=red guibg=red</div>
<div class="old-help-para"><div class="help-column_heading">Shortcuts</div>							<a name="termdebug_shortcuts"></a><code class="help-tag-right">termdebug_shortcuts</code>
You can define your own shortcuts (mappings) to control gdb, that can work in
any window, using the TermDebugSendCommand() function.  Example:<pre>map ,w :call TermDebugSendCommand('where')&lt;CR&gt;</pre>
The argument is the gdb command.</div>
<div class="old-help-para"><div class="help-column_heading">Popup menu</div>							<a name="termdebug_popup"></a><code class="help-tag-right">termdebug_popup</code>
By default the Termdebug plugin sets <a href="/neovim-docs-web/en/options#'mousemodel'">'mousemodel'</a> to "popup_setpos" and adds
these entries to the popup menu:
	Set breakpoint		<code>:Break</code>
	Clear breakpoint	<code>:Clear</code>
	Evaluate		<code>:Evaluate</code>
If you don't want this then disable it with:<pre>let g:termdebug_config['popup'] = 0</pre>
If there is no g:termdebug_config you can use:<pre>let g:termdebug_popup = 0</pre>
<div class="help-column_heading">Vim window width</div>							<a name="termdebug_wide"></a><code class="help-tag-right">termdebug_wide</code>
To change the width of the Vim window when debugging starts and use a vertical
split:<pre>let g:termdebug_config['wide'] = 163</pre>
If there is no g:termdebug_config you can use:<pre>let g:termdebug_wide = 163</pre>
This will set <a href="/neovim-docs-web/en/options#'columns'">'columns'</a> to 163 when <code>:Termdebug</code> is used.  The value is
restored when quitting the debugger.</div>
<div class="old-help-para">If the wide value is set and <a href="/neovim-docs-web/en/options#'columns'">'columns'</a> is already a greater value, then a
vertical split will be used without modifying <a href="/neovim-docs-web/en/options#'columns'">'columns'</a>.</div>
<div class="old-help-para">Set the wide value to 1 to use a vertical split without ever changing
<a href="/neovim-docs-web/en/options#'columns'">'columns'</a>.  This is useful when the terminal can't be resized by Vim.</div>

  
  