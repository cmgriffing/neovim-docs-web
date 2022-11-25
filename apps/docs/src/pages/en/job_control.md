---
title:  Job_control
layout: ../../layouts/MainLayout.astro
---

  <a name="job_control.txt"></a><a name="job"></a><h1> Job_control</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/job_control.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Nvim job control <a name="job-control"></a><code class="help-tag">job-control</code></div>
<div class="old-help-para">Job control is a way to perform multitasking in Nvim, so scripts can spawn and
control multiple processes without blocking the current Nvim instance.</div>
<div class="old-help-para"><a name="_-concepts"></a><h2 class="help-heading">Concepts</h2></div>
<div class="old-help-para">Job Id							<a name="job-id"></a><code class="help-tag-right">job-id</code></div>
<div class="old-help-para">Each job is identified by an integer id, unique for the life of the current
Nvim session. Each job-id is a valid <a href="channel.html#channel-id">channel-id</a>: they share the same "key
space". Functions like <a href="builtin.html#jobstart()">jobstart()</a> return job ids; functions like
<a href="builtin.html#jobstop()">jobstop()</a>, <a href="builtin.html#chansend()">chansend()</a>, <a href="builtin.html#rpcnotify()">rpcnotify()</a>, and <a href="builtin.html#rpcrequest()">rpcrequest()</a> take job ids.</div>
<div class="old-help-para">Job stdio streams form a <a href="channel.html#channel">channel</a> which can send and receive raw bytes or
<a href="api.html#msgpack-rpc">msgpack-rpc</a> messages.</div>
<div class="old-help-para"><h2 class="help-heading">Usage<span class="help-heading-tags">							<a name="job-control-usage"></a><span class="help-tag">job-control-usage</span></span></h2></div>
<div class="old-help-para">To control jobs, use the "job…" family of functions: <a href="builtin.html#jobstart()">jobstart()</a>,
<a href="builtin.html#jobstop()">jobstop()</a>, etc.</div>
<div class="old-help-para">Example:<pre>function! s:OnEvent(job_id, data, event) dict
  if a:event == 'stdout'
    let str = self.shell.' stdout: '.join(a:data)
  elseif a:event == 'stderr'
    let str = self.shell.' stderr: '.join(a:data)
  else
    let str = self.shell.' exited'
  endif

  call append(line('$'), str)
endfunction
let s:callbacks = {
\ 'on_stdout': function('s:OnEvent'),
\ 'on_stderr': function('s:OnEvent'),
\ 'on_exit': function('s:OnEvent')
\ }
let job1 = jobstart(['bash'], extend({'shell': 'shell 1'}, s:callbacks))
let job2 = jobstart(['bash', '-c', 'for i in {1..10}; do echo hello $i!; sleep 1; done'], extend({'shell': 'shell 2'}, s:callbacks))</pre>
To test the above script, copy it to a file ~/foo.vim and run it:<pre>nvim -u ~/foo.vim</pre></div>
<div class="old-help-para">Description of what happens:
<div class="help-li" style=""> Two bash shells are spawned by <a href="builtin.html#jobstart()">jobstart()</a> with their stdin/stdout/stderr
    streams connected to nvim.
</div><div class="help-li" style=""> The first shell is idle, waiting to read commands from its stdin.
</div><div class="help-li" style=""> The second shell is started with -c which executes the command (a for-loop
    printing 0 through 9) and then exits.
</div><div class="help-li" style=""> <code>OnEvent()</code> callback is passed to <a href="builtin.html#jobstart()">jobstart()</a> to handle various job
    events. It displays stdout/stderr data received from the shells.
</div></div>
<div class="old-help-para">For <a href="channel.html#on_stdout">on_stdout</a> and <a href="channel.html#on_stderr">on_stderr</a> see <a href="channel.html#channel-callback">channel-callback</a>.
							<a name="on_exit"></a><code class="help-tag-right">on_exit</code>
Arguments passed to on_exit callback:
  0: <a href="job_control.html#job-id">job-id</a>
  1: Exit-code of the process, or 128+SIGNUM if by signal (e.g. 143 on SIGTERM).
  2: Event type: "exit"</div>
<div class="old-help-para">  Note: Buffered stdout/stderr data which has not been flushed by the sender
	will not trigger the on_stdout/on_stderr callback (but if the process
	ends, the on_exit callback will be invoked).
        For example, "ruby -e" buffers output, so small strings will be
        buffered unless "auto-flushing" ($stdout.sync=true) is enabled.<pre>function! Receive(job_id, data, event)
  echom printf('%s: %s',a:event,string(a:data))
endfunction
call jobstart(['ruby', '-e',
  \ '$stdout.sync = true; 5.times do sleep 1 and puts "Hello Ruby!" end'],
  \ {'on_stdout': 'Receive'})</pre></div>
<div class="old-help-para">       <a href="https://github.com/neovim/neovim/issues/1592">https://github.com/neovim/neovim/issues/1592</a></div>
<div class="old-help-para">  Note 2:
	Job event handlers may receive partial (incomplete) lines. For a given
	invocation of on_stdout/on_stderr, <code>a:data</code> is not guaranteed to end
	with a newline.
<div class="help-li" style=""> <code>abcdefg</code> may arrive as <code>['abc']</code>, <code>['defg']</code>.
</div><div class="help-li" style=""> <code>abc\nefg</code> may arrive as <code>['abc', '']</code>, <code>['efg']</code> or <code>['abc']</code>,
	    <code>['','efg']</code>, or even <code>['ab']</code>, <code>['c','efg']</code>.
	Easy way to deal with this: initialize a list as <code>['']</code>, then append
	to it as follows:<pre>let s:chunks = ['']
func! s:on_stdout(job_id, data, event) dict
  let s:chunks[-1] .= a:data[0]
  call extend(s:chunks, a:data[1:])
endf</pre>
</div></div>
<div class="old-help-para">The <a href="builtin.html#jobstart-options">jobstart-options</a> dictionary is passed as <a href="eval.html#self">self</a> to the callback.
The above example could be written in this "object-oriented" style:<pre>let Shell = {}

function Shell.on_stdout(_job_id, data, event)
  call append(line('$'),
        \ printf('[%s] %s: %s', a:event, self.name, join(a:data[:-2])))
endfunction

let Shell.on_stderr = function(Shell.on_stdout)

function Shell.on_exit(job_id, _data, event)
  let msg = printf('job %d ("%s") finished', a:job_id, self.name)
  call append(line('$'), printf('[%s] BOOM!', a:event))
  call append(line('$'), printf('[%s] %s!', a:event, msg))
endfunction

function Shell.new(name, cmd)
  let object = extend(copy(g:Shell), {'name': a:name})
  let object.cmd = ['sh', '-c', a:cmd]
  let object.id = jobstart(object.cmd, object)
  $
  return object
endfunction

let instance = Shell.new('bomb',
      \ 'for i in $(seq 9 -1 1); do echo $i 1&gt;&amp;$((i % 2 + 1)); sleep 1; done')</pre></div>
<div class="old-help-para">To send data to the job's stdin, use <a href="builtin.html#chansend()">chansend()</a>:<pre>:call chansend(job1, "ls\n")
:call chansend(job1, "invalid-command\n")
:call chansend(job1, "exit\n")</pre></div>
<div class="old-help-para">A job may be killed with <a href="builtin.html#jobstop()">jobstop()</a>:<pre>:call jobstop(job1)</pre></div>
<div class="old-help-para">A job may be killed at any time with the <a href="builtin.html#jobstop()">jobstop()</a> function:
<pre>:call jobstop(job1)</pre></div>
<div class="old-help-para">Individual streams can be closed without killing the job, see <a href="builtin.html#chanclose()">chanclose()</a>.</div>

  
  