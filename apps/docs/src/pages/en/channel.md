---
title:  Channel
layout: ../../layouts/MainLayout.astro
---

  <a name="channel.txt"></a><a name="channel"></a><h1> Channel</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/channel.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="help-para">
Nvim asynchronous IO

</div>
<div class="help-para">
<h2 class="help-heading">1. Introduction<span class="help-heading-tags">						    <a name="channel-intro"></a><span class="help-tag">channel-intro</span></span></h2>


</div>
<div class="help-para">
Channels are nvim's way of communicating with external processes.

</div>
<div class="help-para">
There are several ways to open a channel:

</div>
<div class="help-para">
  1. Through stdin/stdout when <code>nvim</code> is started with <code>--headless</code>, and a startup
     script or --cmd  command opens the stdio channel using <a href="builtin.html#stdioopen()">stdioopen()</a>.

</div>
<div class="help-para">
  2. Through stdin, stdout and stderr of a process spawned by <a href="builtin.html#jobstart()">jobstart()</a>.

</div>
<div class="help-para">
  3. Through the PTY master end of a PTY opened with
     <code>jobstart(..., {'pty': v:true})</code> or <a href="builtin.html#termopen()">termopen()</a>.

</div>
<div class="help-para">
  4. By connecting to a TCP/IP socket or named pipe with <a href="builtin.html#sockconnect()">sockconnect()</a>.

</div>
<div class="help-para">
  5. By another process connecting to a socket listened to by nvim. This only
     supports RPC channels, see <a href="api.html#rpc-connecting">rpc-connecting</a>.

</div>
<div class="help-para">
Channels support multiple modes or protocols. In the most basic
mode of operation, raw bytes are read and written to the channel.
The <a href="api.html#RPC">RPC</a> protocol, based on the msgpack-rpc standard, enables nvim and the
process at the other end to send remote calls and events to each other.
The builtin <a href="nvim_terminal_emulator.html#terminal-emulator">terminal-emulator</a> is also implemented on top of PTY channels.

</div>
<div class="help-para">
Channel Id						<a name="channel-id"></a><code class="help-tag-right">channel-id</code>

</div>
<div class="help-para">
Each channel is identified by an integer id, unique for the life of the
current Nvim session. Functions like <a href="builtin.html#stdioopen()">stdioopen()</a> return channel ids;
functions like <a href="builtin.html#chansend()">chansend()</a> consume channel ids.

</div>
<div class="help-para">
<h2 class="help-heading">2. Reading and writing raw bytes<span class="help-heading-tags">			      <a name="channel-bytes"></a><span class="help-tag">channel-bytes</span></span></h2>


</div>
<div class="help-para">
Channels opened by Vimscript functions operate with raw bytes by default. For
a job channel using RPC, bytes can still be read over its stderr. Similarly,
only bytes can be written to Nvim's own stderr.

</div>
<div class="help-para">
						<a name="channel-callback"></a><code class="help-tag-right">channel-callback</code>
<div class="help-li" style=""> on_stdout(<code>{chan-id}</code>, <code>{data}</code>, <code>{name}</code>)		<a name="on_stdout"></a><code class="help-tag-right">on_stdout</code>
</div><div class="help-li" style=""> on_stderr(<code>{chan-id}</code>, <code>{data}</code>, <code>{name}</code>)		<a name="on_stderr"></a><code class="help-tag-right">on_stderr</code>
</div><div class="help-li" style=""> on_stdin(<code>{chan-id}</code>, <code>{data}</code>, <code>{name}</code>)		<a name="on_stdin"></a><code class="help-tag-right">on_stdin</code>
</div><div class="help-li" style=""> on_data(<code>{chan-id}</code>, <code>{data}</code>, <code>{name}</code>)		<a name="on_data"></a><code class="help-tag-right">on_data</code>
</div>
</div>
<div class="help-para">
    Scripts can react to channel activity (received data) via callback
    functions assigned to the <code>on_stdout</code>, <code>on_stderr</code>, <code>on_stdin</code>, or
    <code>on_data</code> option keys. Callbacks should be fast: avoid potentially
    slow/expensive work.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{chan-id}</code>   Channel handle. <a href="channel.html#channel-id">channel-id</a>
</div><div class="help-li" style=""> <code>{data}</code>	    Raw data (<a href="builtin.html#readfile()">readfile()</a>-style list of strings) read from
		    the channel. EOF is a single-item list: <code>['']</code>. First and
		    last items may be partial lines! <a href="channel.html#channel-lines">channel-lines</a>
</div><div class="help-li" style=""> <code>{name}</code>	    Stream name (string) like "stdout", so the same function
		    can handle multiple streams. Event names depend on how the
		    channel was opened and in what mode/protocol.
</div>
</div>
<div class="help-para">
						<a name="channel-buffered"></a><code class="help-tag-right">channel-buffered</code>
    The callback is invoked immediately as data is available, where
    a single-item list <code>['']</code> indicates EOF (stream closed).  Alternatively
    set the <code>stdout_buffered</code>, <code>stderr_buffered</code>, <code>stdin_buffered</code>, or
    <code>data_buffered</code> option keys to invoke the callback only after all output
    was gathered and the stream was closed.
						<a name="E5210"></a><code class="help-tag-right">E5210</code>
    If a buffering mode is used without a callback, the data is saved in the
    stream <code>{name}</code> key of the options dict. It is an error if the key exists.

</div>
<div class="help-para">
							      <a name="channel-lines"></a><code class="help-tag-right">channel-lines</code>
    Stream event handlers receive data as it becomes available from the OS,
    thus the first and last items in the <code>{data}</code> list may be partial lines.
    Empty string completes the previous partial line. Examples (not including
    the final <code>['']</code> emitted at EOF):
<div class="help-li" style=""> <code>foobar</code> may arrive as <code>['fo'], ['obar']</code>
</div><div class="help-li" style=""> <code>foo\nbar</code> may arrive as
</div><div class="help-li" style="margin-left: 3rem;"> <code>['foo','bar']</code>
</div><div class="help-li" style="margin-left: 3rem;"> or <code>['foo',''], ['bar']</code>
</div><div class="help-li" style="margin-left: 3rem;"> or <code>['foo'], ['','bar']</code>
</div><div class="help-li" style="margin-left: 3rem;"> or <code>['fo'], ['o','bar']</code>
</div>
</div>
<div class="help-para">
    There are two ways to deal with this:
<div class="help-li" style=""> 1. To wait for the entire output, use <a href="channel.html#channel-buffered">channel-buffered</a> mode.
</div><div class="help-li" style=""> 2. To read line-by-line, use the following code:
<pre>let s:lines = ['']
func! s:on_event(job_id, data, event) dict
  let eof = (a:data == [''])
  " Complete the previous line.
  let s:lines[-1] .= a:data[0]
  " Append (last item may be a partial line, until EOF).
  call extend(s:lines, a:data[1:])
endf</pre></div>
</div>
<div class="help-para">
If the callback functions are <a href="eval.html#Dictionary-function">Dictionary-function</a>s, <a href="eval.html#self">self</a> refers to the
options dictionary containing the callbacks. <a href="eval.html#Partial">Partial</a>s can also be used as
callbacks.

</div>
<div class="help-para">
Data can be sent to the channel using the <a href="builtin.html#chansend()">chansend()</a> function. Here is a
simple example, echoing some data through a cat-process:
<pre>function! s:OnEvent(id, data, event) dict
  let str = join(a:data, "\n")
  echomsg str
endfunction
let id = jobstart(['cat'], {'on_stdout': function('s:OnEvent') } )
call chansend(id, "hello!")</pre>

</div>
<div class="help-para">
Here is a example of setting a buffer to the result of grep, but only after
all data has been processed:
<pre>function! s:OnEvent(id, data, event) dict
  call nvim_buf_set_lines(2, 0, -1, v:true, a:data)
endfunction
let id = jobstart(['grep', '^[0-9]'], { 'on_stdout': function('s:OnEvent'),
                                      \ 'stdout_buffered':v:true } )

call chansend(id, "stuff\n10 PRINT \"NVIM\"\nxx")
" no output is received, buffer is empty

call chansend(id, "xx\n20 GOTO 10\nzz\n")
call chanclose(id, 'stdin')
" now buffer has result</pre>

</div>
<div class="help-para">
For additional examples with jobs, see <a href="job_control.html#job-control">job-control</a>.

</div>
<div class="help-para">
							      <a name="channel-pty"></a><code class="help-tag-right">channel-pty</code>
Special case: PTY channels opened with <code>jobstart(..., {'pty': v:true})</code> do not
preprocess ANSI escape sequences, these will be sent raw to the callback.
However, change of PTY size can be signaled to the slave using <a href="builtin.html#jobresize()">jobresize()</a>.
See also <a href="nvim_terminal_emulator.html#terminal-emulator">terminal-emulator</a>.

</div>
<div class="help-para">
Terminal characteristics (termios) for <a href="various.html#%3Aterminal">:terminal</a> and PTY channels are copied
from the host TTY, or if Nvim is <a href="starting.html#--headless">--headless</a> it uses default values:<pre>:echo system('nvim --headless +"te stty -a" +"sleep 1" +"1,/^$/print" +q')</pre>
<h2 class="help-heading">3. Communicating using msgpack-rpc<span class="help-heading-tags">			      <a name="channel-rpc"></a><span class="help-tag">channel-rpc</span></span></h2>


</div>
<div class="help-para">
When channels are opened with the <code>rpc</code> option set to true, the channel can be
used for remote method calls in both directions, see <a href="api.html#msgpack-rpc">msgpack-rpc</a>. Note that
rpc channels are implicitly trusted and the process at the other end can
invoke any <a href="api.html#api">api</a> function!

</div>
<div class="help-para">
<h2 class="help-heading">4. Standard IO channel<span class="help-heading-tags">					    <a name="channel-stdio"></a><span class="help-tag">channel-stdio</span></span></h2>


</div>
<div class="help-para">
Nvim uses stdin/stdout to interact with the user over the terminal interface
(TUI). If Nvim is <a href="starting.html#--headless">--headless</a> the TUI is not started and stdin/stdout can be
used as a channel. See also <a href="starting.html#--embed">--embed</a>.

</div>
<div class="help-para">
Call <a href="builtin.html#stdioopen()">stdioopen()</a> during <a href="starting.html#startup">startup</a> to open the stdio channel as <a href="channel.html#channel-id">channel-id</a> 1.
Nvim's stderr is always available as <a href="eval.html#v%3Astderr">v:stderr</a>, a write-only bytes channel.

</div>
<div class="help-para">
Example:<pre>func! OnEvent(id, data, event)
  if a:data == [""]
    quit
  end
  call chansend(a:id, map(a:data, {i,v -&gt; toupper(v)}))
endfunc
call stdioopen({'on_stdin': 'OnEvent'})</pre>

</div>
<div class="help-para">
Put this in <code>uppercase.vim</code> and run:<pre>nvim --headless --cmd "source uppercase.vim"</pre>
<h2 class="help-heading">5. Using a prompt buffer<span class="help-heading-tags">				<a name="prompt-buffer"></a><span class="help-tag">prompt-buffer</span></span></h2>


</div>
<div class="help-para">
If you want to type input for the job in a Vim window you have a few options:
<div class="help-li" style=""> Use a normal buffer and handle all possible commands yourself.
  This will be complicated, since there are so many possible commands.
</div><div class="help-li" style=""> Use a terminal window.  This works well if what you type goes directly to
  the job and the job output is directly displayed in the window.
  See <a href="nvim_terminal_emulator.html#terminal">terminal</a>.
</div><div class="help-li" style=""> Use a window with a prompt buffer. This works well when entering a line for
  the job in Vim while displaying (possibly filtered) output from the job.
</div>
</div>
<div class="help-para">
A prompt buffer is created by setting <a href="options.html#'buftype'">'buftype'</a> to "prompt". You would
normally only do that in a newly created buffer.

</div>
<div class="help-para">
The user can edit and enter one line of text at the very last line of the
buffer.  When pressing Enter in the prompt line the callback set with
<a href="builtin.html#prompt_setcallback()">prompt_setcallback()</a> is invoked.  It would normally send the line to a job.
Another callback would receive the output from the job and display it in the
buffer, below the prompt (and above the next prompt).

</div>
<div class="help-para">
Only the text in the last line, after the prompt, is editable. The rest of the
buffer is not modifiable with Normal mode commands.  It can be modified by
calling functions, such as <a href="builtin.html#append()">append()</a>.  Using other commands may mess up the
buffer.

</div>
<div class="help-para">
After setting <a href="options.html#'buftype'">'buftype'</a> to "prompt" Vim does not automatically start Insert
mode, use <code>:startinsert</code> if you want to enter Insert mode, so that the user
can start typing a line.

</div>
<div class="help-para">
The text of the prompt can be set with the <a href="builtin.html#prompt_setprompt()">prompt_setprompt()</a> function. If
no prompt is set with <a href="builtin.html#prompt_setprompt()">prompt_setprompt()</a>, "% " is used. You can get the
effective prompt text for a buffer, with <a href="builtin.html#prompt_getprompt()">prompt_getprompt()</a>.

</div>
<div class="help-para">
The user can go to Normal mode and navigate through the buffer.  This can be
useful to see older output or copy text.

</div>
<div class="help-para">
The <code>CTRL-W</code> key can be used to start a window command, such as <code>CTRL-W</code> w to
switch to the next window.  This also works in Insert mode (use Shift-CTRL-W
to delete a word). When leaving the window Insert mode will be stopped.  When
coming back to the prompt window Insert mode will be restored.

</div>
<div class="help-para">
Any command that starts Insert mode, such as "a", "i", "A" and "I", will move
the cursor to the last line.  "A" will move to the end of the line, "I" to the
start of the line.

</div>
<div class="help-para">
Here is an example for Unix.  It starts a shell in the background and prompts
for the next shell command.  Output from the shell is displayed above the
prompt.<pre>" Function handling a line of text that has been typed.
func TextEntered(text)
  " Send the text to a shell with Enter appended.
  call chansend(g:shell_job, [a:text, ''])
endfunc

" Function handling output from the shell: Add it above the prompt.
func GotOutput(channel, msg, name)
  call append(line("$") - 1, a:msg)
endfunc

" Function handling the shell exits: close the window.
func JobExit(job, status, event)
  quit!
endfunc

" Start a shell in the background.
let shell_job = jobstart(["/bin/sh"], #{
        \ on_stdout: function('GotOutput'),
        \ on_stderr: function('GotOutput'),
        \ on_exit: function('JobExit'),
        \ })

new
set buftype=prompt
let buf = bufnr('')
call prompt_setcallback(buf, function("TextEntered"))
call prompt_setprompt(buf, "shell command: ")

" start accepting shell commands
startinsert</pre>

</div>

  
  