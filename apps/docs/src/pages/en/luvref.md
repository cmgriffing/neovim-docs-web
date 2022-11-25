---
title:  Luvref
layout: ../../layouts/MainLayout.astro
---

  <a name="luvref.txt"></a><a name="luvref"></a><h1> Luvref</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/luvref.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">                    LUV REFERENCE MANUAL</div>
<div class="old-help-para">This file documents the Lua bindings for the LibUV library which is used for
Nvim's event-loop and is accessible from Lua via <a href="lua.html#vim.loop">vim.loop</a> (e.g., <a href="luvref.html#uv.version()">uv.version()</a>
is exposed as <code>vim.loop.version()</code>).</div>
<div class="old-help-para">For information about this manual, see <a href="luvref.html#luv-credits">luv-credits</a>.</div>
<div class="old-help-para">For further examples, see <a href="https://github.com/luvit/luv/tree/master/examples">https://github.com/luvit/luv/tree/master/examples</a>.</div>
<div class="old-help-para"><h2 class="help-heading">INTRODUCTION<span class="help-heading-tags">                                                  <a name="luv"></a><span class="help-tag">luv</span> <a name="luv-intro"></a><span class="help-tag">luv-intro</span> <a name="uv"></a><span class="help-tag">uv</span></span></h2></div>
<div class="old-help-para">The luv (<a href="https://github.com/luvit/luv">https://github.com/luvit/luv</a>) project provides access to the
multi-platform support library libuv (<a href="https://github.com/libuv/libuv">https://github.com/libuv/libuv</a>) in Lua
code. It was primarily developed for the luvit
(<a href="https://github.com/luvit/luvit">https://github.com/luvit/luvit</a>) project as the built-in <code>uv</code> module, but can
be used in other Lua environments.</div>
<div class="old-help-para">More information about the core libuv library can be found at the original
libuv documentation page (<a href="https://docs.libuv.org/">https://docs.libuv.org/</a>).</div>
<div class="old-help-para">TCP Echo Server Example~</div>
<div class="old-help-para">Here is a small example showing a TCP echo server:</div>
<div class="old-help-para"><pre>local uv = vim.loop

local server = uv.new_tcp()
server:bind("127.0.0.1", 1337)
server:listen(128, function (err)
  assert(not err, err)
  local client = uv.new_tcp()
  server:accept(client)
  client:read_start(function (err, chunk)
    assert(not err, err)
    if chunk then
      client:write(chunk)
    else
      client:shutdown()
      client:close()
    end
  end)
end)
print("TCP server listening at 127.0.0.1 port 1337")
uv.run() -- an explicit run call is necessary outside of luvit</pre></div>
<div class="old-help-para">Module Layout~</div>
<div class="old-help-para">The luv library contains a single Lua module referred to hereafter as <code>uv</code> for
simplicity. This module consists mostly of functions with names corresponding
to their original libuv versions. For example, the libuv function
<code>uv_tcp_bind</code> has a luv version at <a href="luvref.html#uv.tcp_bind()">uv.tcp_bind()</a>. Currently, only one
non-function field exists: <code>uv.constants</code>, which is a table.</div>
<div class="old-help-para">Functions vs Methods~</div>
<div class="old-help-para">In addition to having simple functions, luv provides an optional method-style
API. For example, <code>uv.tcp_bind(server, host, port)</code> can alternatively be
called as <code>server:bind(host, port)</code> . Note that the first argument <code>server</code>
becomes the object and <code>tcp_</code> is removed from the function name. Method forms
are documented below where they exist.</div>
<div class="old-help-para">Synchronous vs Asynchronous Functions~</div>
<div class="old-help-para">Functions that accept a callback are asynchronous. These functions may
immediately return results to the caller to indicate their initial status, but
their final execution is deferred until at least the next libuv loop
iteration. After completion, their callbacks are executed with any results
passed to it.</div>
<div class="old-help-para">Functions that do not accept a callback are synchronous. These functions
immediately return their results to the caller.</div>
<div class="old-help-para">Some (generally FS and DNS) functions can behave either synchronously or
asynchronously. If a callback is provided to these functions, they behave
asynchronously; if no callback is provided, they behave synchronously.</div>
<div class="old-help-para">Pseudo-Types~</div>
<div class="old-help-para">Some unique types are defined. These are not actual types in Lua, but they are
used here to facilitate documenting consistent behavior:
<div class="help-li" style=""> <code>fail</code>: an assertable <code>nil, string, string</code> tuple (see <a href="luvref.html#luv-error-handling">luv-error-handling</a>)
</div><div class="help-li" style=""> <code>callable</code>: a <code>function</code>; or a <code>table</code> or <code>userdata</code> with a <code>__call</code>
  metamethod
</div><div class="help-li" style=""> <code>buffer</code>: a <code>string</code> or a sequential <code>table</code> of <code>string</code>s
</div><div class="help-li" style=""> <code>threadargs</code>: variable arguments (<code>...</code>) of type <code>nil</code>, <code>boolean</code>, <code>number</code>,
  <code>string</code>, or <code>userdata</code>
</div></div>
<div class="old-help-para"><h2 class="help-heading">CONTENTS<span class="help-heading-tags">                                                          <a name="luv-contents"></a><span class="help-tag">luv-contents</span></span></h2></div>
<div class="old-help-para">This documentation is mostly a retelling of the libuv API documentation
(<a href="https://docs.libuv.org/en/v1.x/api.html">https://docs.libuv.org/en/v1.x/api.html</a>) within the context of luv's Lua API.
Low-level implementation details and unexposed C functions and types are not
documented here except for when they are relevant to behavior seen in the Lua
module.</div>
<div class="old-help-para"><div class="help-li" style=""> <a href="luvref.html#luv-error-handling">luv-error-handling</a> — Error handling
</div><div class="help-li" style=""> <a href="luvref.html#luv-version-checking">luv-version-checking</a> — Version checking
</div><div class="help-li" style=""> <a href="luvref.html#uv_loop_t">uv_loop_t</a> — Event loop
</div><div class="help-li" style=""> <a href="luvref.html#uv_req_t">uv_req_t</a> — Base request
</div><div class="help-li" style=""> <a href="luvref.html#uv_handle_t">uv_handle_t</a> — Base handle
</div><div class="help-li" style="margin-left: 3rem;"> <a href="luvref.html#uv_timer_t">uv_timer_t</a> — Timer handle
</div><div class="help-li" style="margin-left: 3rem;"> <a href="luvref.html#uv_prepare_t">uv_prepare_t</a> — Prepare handle
</div><div class="help-li" style="margin-left: 3rem;"> <a href="luvref.html#uv_check_t">uv_check_t</a> — Check handle
</div><div class="help-li" style="margin-left: 3rem;"> <a href="luvref.html#uv_idle_t">uv_idle_t</a> — Idle handle
</div><div class="help-li" style="margin-left: 3rem;"> <a href="luvref.html#uv_async_t">uv_async_t</a> — Async handle
</div><div class="help-li" style="margin-left: 3rem;"> <a href="luvref.html#uv_poll_t">uv_poll_t</a> — Poll handle
</div><div class="help-li" style="margin-left: 3rem;"> <a href="luvref.html#uv_signal_t">uv_signal_t</a> — Signal handle
</div><div class="help-li" style="margin-left: 3rem;"> <a href="luvref.html#uv_process_t">uv_process_t</a> — Process handle
</div><div class="help-li" style="margin-left: 3rem;"> <a href="luvref.html#uv_stream_t">uv_stream_t</a> — Stream handle
</div><div class="help-li" style="margin-left: 4rem;"> <a href="luvref.html#uv_tcp_t">uv_tcp_t</a> — TCP handle
</div><div class="help-li" style="margin-left: 4rem;"> <a href="luvref.html#uv_pipe_t">uv_pipe_t</a> — Pipe handle
</div><div class="help-li" style="margin-left: 4rem;"> <a href="luvref.html#uv_tty_t">uv_tty_t</a> — TTY handle
</div><div class="help-li" style="margin-left: 3rem;"> <a href="luvref.html#uv_udp_t">uv_udp_t</a> — UDP handle
</div><div class="help-li" style="margin-left: 3rem;"> <a href="luvref.html#uv_fs_event_t">uv_fs_event_t</a> — FS Event handle
</div><div class="help-li" style="margin-left: 3rem;"> <a href="luvref.html#uv_fs_poll_t">uv_fs_poll_t</a> — FS Poll handle
</div><div class="help-li" style=""> <a href="luvref.html#luv-file-system-operations">luv-file-system-operations</a> — File system operations
</div><div class="help-li" style=""> <a href="luvref.html#luv-thread-pool-work-scheduling">luv-thread-pool-work-scheduling</a> — Thread pool work scheduling
</div><div class="help-li" style=""> <a href="luvref.html#luv-dns-utility-functions">luv-dns-utility-functions</a> — DNS utility functions
</div><div class="help-li" style=""> <a href="luvref.html#luv-threading-and-synchronization-utilities">luv-threading-and-synchronization-utilities</a> — Threading and
  synchronization utilities
</div><div class="help-li" style=""> <a href="luvref.html#luv-miscellaneous-utilities">luv-miscellaneous-utilities</a> — Miscellaneous utilities
</div><div class="help-li" style=""> <a href="luvref.html#luv-metrics-operations">luv-metrics-operations</a> — Metrics operations
</div></div>
<div class="old-help-para"><h2 class="help-heading">ERROR HANDLING<span class="help-heading-tags">                                              <a name="luv-error-handling"></a><span class="help-tag">luv-error-handling</span></span></h2></div>
<div class="old-help-para">In libuv, errors are negative numbered constants; however, these errors and
the functions used to handle them are not exposed to luv users. Instead, if an
internal error is encountered, the luv function will return to the caller an
assertable <code>nil, err, name</code> tuple.</div>
<div class="old-help-para"><div class="help-li" style=""> <code>nil</code> idiomatically indicates failure
</div><div class="help-li" style=""> <code>err</code> is a string with the format <code>{name}: {message}</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>{name}</code> is the error name provided internally by <code>uv_err_name</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>{message}</code> is a human-readable message provided internally by
    <code>uv_strerror</code>
</div><div class="help-li" style=""> <code>name</code> is the same string used to construct <code>err</code>
</div></div>
<div class="old-help-para">This tuple is referred to below as the <code>fail</code> pseudo-type.</div>
<div class="old-help-para">When a function is called successfully, it will return either a value that is
relevant to the operation of the function, or the integer <code>0</code> to indicate
success, or sometimes nothing at all. These cases are documented below.</div>
<div class="old-help-para"><h2 class="help-heading">VERSION CHECKING<span class="help-heading-tags">                                          <a name="luv-version-checking"></a><span class="help-tag">luv-version-checking</span></span></h2></div>
<div class="old-help-para">uv.version()                                                      <a name="uv.version()"></a><code class="help-tag-right">uv.version()</code></div>
<div class="old-help-para">                Returns the libuv version packed into a single integer. 8 bits
                are used for each component, with the patch number stored in
                the 8 least significant bits. For example, this would be
                0x010203 in libuv 1.2.3.</div>
<div class="old-help-para">                Returns: <code>integer</code></div>
<div class="old-help-para">uv.version_string()                                        <a name="uv.version_string()"></a><code class="help-tag-right">uv.version_string()</code></div>
<div class="old-help-para">                Returns the libuv version number as a string. For example,
                this would be "1.2.3" in libuv 1.2.3. For non-release
                versions, the version suffix is included.</div>
<div class="old-help-para">                Returns: <code>string</code></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_loop_t</code> — Event loop<span class="help-heading-tags">                                <a name="luv-event-loop"></a><span class="help-tag">luv-event-loop</span> <a name="uv_loop_t"></a><span class="help-tag">uv_loop_t</span></span></h2></div>
<div class="old-help-para">The event loop is the central part of libuv's functionality. It takes care of
polling for I/O and scheduling callbacks to be run based on different sources
of events.</div>
<div class="old-help-para">In luv, there is an implicit uv loop for every Lua state that loads the
library. You can use this library in an multi-threaded environment as long as
each thread has it's own Lua state with its corresponding own uv loop. This
loop is not directly exposed to users in the Lua module.</div>
<div class="old-help-para">uv.loop_close()                                                <a name="uv.loop_close()"></a><code class="help-tag-right">uv.loop_close()</code></div>
<div class="old-help-para">                Closes all internal loop resources. In normal execution, the
                loop will automatically be closed when it is garbage collected
                by Lua, so it is not necessary to explicitly call
                <code>loop_close()</code>. Call this function only after the loop has
                finished executing and all open handles and requests have been
                closed, or it will return <code>EBUSY</code>.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.run([{mode}])                                                      <a name="uv.run()"></a><code class="help-tag-right">uv.run()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>mode</code>: <code>string</code> or <code>nil</code> (default: <code>"default"</code>)
</div></div>
<div class="old-help-para">                This function runs the event loop. It will act differently
                depending on the specified mode:</div>
<div class="old-help-para"><div class="help-li" style=""> <code>"default"</code>: Runs the event loop until there are no more
                    active and referenced handles or requests. Returns <code>true</code>
                    if <a href="luvref.html#uv.stop()">uv.stop()</a> was called and there are still active
                    handles or requests. Returns <code>false</code> in all other cases.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> <code>"once"</code>: Poll for I/O once. Note that this function
                    blocks if there are no pending callbacks. Returns <code>false</code>
                    when done (no active handles or requests left), or <code>true</code>
                    if more callbacks are expected (meaning you should run the
                    event loop again sometime in the future).
</div></div>
<div class="old-help-para"><div class="help-li" style=""> <code>"nowait"</code>: Poll for I/O once but don't block if there are
                    no pending callbacks. Returns <code>false</code> if done (no active
                    handles or requests left), or <code>true</code> if more callbacks are
                    expected (meaning you should run the event loop again
                    sometime in the future).
</div></div>
<div class="old-help-para">                Returns: <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Note: Luvit will implicitly call <code>uv.run()</code> after loading user
                code, but if you use the luv bindings directly, you need to
                call this after registering your initial set of event
                callbacks to start the event loop.</div>
<div class="old-help-para">uv.loop_configure({option}, <code>{...}</code>)                         <a name="uv.loop_configure()"></a><code class="help-tag-right">uv.loop_configure()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>option</code>: <code>string</code>
</div><div class="help-li" style=""> <code>...</code>: depends on <code>option</code>, see below
</div></div>
<div class="old-help-para">                Set additional loop options. You should normally call this
                before the first call to uv_run() unless mentioned otherwise.</div>
<div class="old-help-para">                Supported options:</div>
<div class="old-help-para"><div class="help-li" style=""> <code>"block_signal"</code>: Block a signal when polling for new
                    events. The second argument to loop_configure() is the
                    signal name (as a lowercase string) or the signal number.
                    This operation is currently only implemented for
                    <code>"sigprof"</code> signals, to suppress unnecessary wakeups when
                    using a sampling profiler. Requesting other signals will
                    fail with <code>EINVAL</code>.
</div><div class="help-li" style=""> <code>"metrics_idle_time"</code>: Accumulate the amount of idle time
                    the event loop spends in the event provider. This option
                    is necessary to use <code>metrics_idle_time()</code>.
</div></div>
<div class="old-help-para">                An example of a valid call to this function is:</div>
<div class="old-help-para"><pre>uv.loop_configure("block_signal", "sigprof")</pre></div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">                Note: Be prepared to handle the <code>ENOSYS</code> error; it means the
                loop option is not supported by the platform.</div>
<div class="old-help-para">uv.loop_mode()                                                  <a name="uv.loop_mode()"></a><code class="help-tag-right">uv.loop_mode()</code></div>
<div class="old-help-para">                If the loop is running, returns a string indicating the mode
                in use. If the loop is not running, <code>nil</code> is returned instead.</div>
<div class="old-help-para">                Returns: <code>string</code> or <code>nil</code></div>
<div class="old-help-para">uv.loop_alive()                                                <a name="uv.loop_alive()"></a><code class="help-tag-right">uv.loop_alive()</code></div>
<div class="old-help-para">                Returns <code>true</code> if there are referenced active handles, active
                requests, or closing handles in the loop; otherwise, <code>false</code>.</div>
<div class="old-help-para">                Returns: <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">uv.stop()                                                            <a name="uv.stop()"></a><code class="help-tag-right">uv.stop()</code></div>
<div class="old-help-para">                Stop the event loop, causing <a href="luvref.html#uv.run()">uv.run()</a> to end as soon as
                possible. This will happen not sooner than the next loop
                iteration. If this function was called before blocking for
                I/O, the loop won't block for I/O on this iteration.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para">uv.backend_fd()                                                <a name="uv.backend_fd()"></a><code class="help-tag-right">uv.backend_fd()</code></div>
<div class="old-help-para">                Get backend file descriptor. Only kqueue, epoll, and event
                ports are supported.</div>
<div class="old-help-para">                This can be used in conjunction with <code>uv.run("nowait")</code> to
                poll in one thread and run the event loop's callbacks in
                another</div>
<div class="old-help-para">                Returns: <code>integer</code> or <code>nil</code></div>
<div class="old-help-para">                Note: Embedding a kqueue fd in another kqueue pollset doesn't
                work on all platforms. It's not an error to add the fd but it
                never generates events.</div>
<div class="old-help-para">uv.backend_timeout()                                      <a name="uv.backend_timeout()"></a><code class="help-tag-right">uv.backend_timeout()</code></div>
<div class="old-help-para">                Get the poll timeout. The return value is in milliseconds, or
                -1 for no timeout.</div>
<div class="old-help-para">                Returns: <code>integer</code></div>
<div class="old-help-para">uv.now()                                                              <a name="uv.now()"></a><code class="help-tag-right">uv.now()</code></div>
<div class="old-help-para">                Returns the current timestamp in milliseconds. The timestamp
                is cached at the start of the event loop tick, see
                <a href="luvref.html#uv.update_time()">uv.update_time()</a> for details and rationale.</div>
<div class="old-help-para">                The timestamp increases monotonically from some arbitrary
                point in time. Don't make assumptions about the starting
                point, you will only get disappointed.</div>
<div class="old-help-para">                Returns: <code>integer</code></div>
<div class="old-help-para">                Note: Use <a href="luvref.html#uv.hrtime()">uv.hrtime()</a> if you need sub-millisecond
                granularity.</div>
<div class="old-help-para">uv.update_time()                                              <a name="uv.update_time()"></a><code class="help-tag-right">uv.update_time()</code></div>
<div class="old-help-para">                Update the event loop's concept of "now". Libuv caches the
                current time at the start of the event loop tick in order to
                reduce the number of time-related system calls.</div>
<div class="old-help-para">                You won't normally need to call this function unless you have
                callbacks that block the event loop for longer periods of
                time, where "longer" is somewhat subjective but probably on
                the order of a millisecond or more.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para">uv.walk({callback})                                                  <a name="uv.walk()"></a><code class="help-tag-right">uv.walk()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>handle</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_handle_t">uv_handle_t</a>
</div></div>
<div class="old-help-para">                Walk the list of handles: <code>callback</code> will be executed with
                each handle.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para"><pre>-- Example usage of uv.walk to close all handles that
-- aren't already closing.
uv.walk(function (handle)
  if not handle:is_closing() then
    handle:close()
  end
end)</pre></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_req_t</code> — Base request<span class="help-heading-tags">                              <a name="luv-base-request"></a><span class="help-tag">luv-base-request</span> <a name="uv_req_t"></a><span class="help-tag">uv_req_t</span></span></h2></div>
<div class="old-help-para"><code>uv_req_t</code> is the base type for all libuv request types.</div>
<div class="old-help-para">uv.cancel({req})                                                   <a name="uv.cancel()"></a><code class="help-tag-right">uv.cancel()</code></div>
<div class="old-help-para">                &gt; method form <code>req:cancel()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>req</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_req_t">uv_req_t</a>
</div></div>
<div class="old-help-para">                Cancel a pending request. Fails if the request is executing or
                has finished executing. Only cancellation of <a href="luvref.html#uv_fs_t">uv_fs_t</a>,
                <code>uv_getaddrinfo_t</code>, <code>uv_getnameinfo_t</code> and <code>uv_work_t</code>
                requests is currently supported.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.req_get_type({req})                                       <a name="uv.req_get_type()"></a><code class="help-tag-right">uv.req_get_type()</code></div>
<div class="old-help-para">                &gt; method form <code>req:get_type()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>req</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_req_t">uv_req_t</a>
</div></div>
<div class="old-help-para">                Returns the name of the struct for a given request (e.g.
                <code>"fs"</code> for <a href="luvref.html#uv_fs_t">uv_fs_t</a>) and the libuv enum integer for the
                request's type (<code>uv_req_type</code>).</div>
<div class="old-help-para">                Returns: <code>string, integer</code></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_handle_t</code> — Base handle<span class="help-heading-tags">                          <a name="luv-base-handle"></a><span class="help-tag">luv-base-handle</span> <a name="uv_handle_t"></a><span class="help-tag">uv_handle_t</span></span></h2></div>
<div class="old-help-para"><code>uv_handle_t</code> is the base type for all libuv handle types. All API functions
defined here work with any handle type.</div>
<div class="old-help-para">uv.is_active({handle})                                          <a name="uv.is_active()"></a><code class="help-tag-right">uv.is_active()</code></div>
<div class="old-help-para">                &gt; method form <code>handle:is_active()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>handle</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_handle_t">uv_handle_t</a>
</div></div>
<div class="old-help-para">                Returns <code>true</code> if the handle is active, <code>false</code> if it's
                inactive. What "active” means depends on the type of handle:</div>
<div class="old-help-para"><div class="help-li" style=""> A <a href="luvref.html#uv_async_t">uv_async_t</a> handle is always active and cannot be
                    deactivated, except by closing it with <a href="luvref.html#uv.close()">uv.close()</a>.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> A <a href="luvref.html#uv_pipe_t">uv_pipe_t</a>, <a href="luvref.html#uv_tcp_t">uv_tcp_t</a>, <a href="luvref.html#uv_udp_t">uv_udp_t</a>, etc.
                    handle - basically any handle that deals with I/O - is
                    active when it is doing something that involves I/O, like
                    reading, writing, connecting, accepting new connections,
                    etc.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> A <a href="luvref.html#uv_check_t">uv_check_t</a>, <a href="luvref.html#uv_idle_t">uv_idle_t</a>, <a href="luvref.html#uv_timer_t">uv_timer_t</a>,
                    etc. handle is active when it has been started with a call
                    to <a href="luvref.html#uv.check_start()">uv.check_start()</a>, <a href="luvref.html#uv.idle_start()">uv.idle_start()</a>,
                    <a href="luvref.html#uv.timer_start()">uv.timer_start()</a> etc. until it has been stopped with a
                    call to its respective stop function.
</div></div>
<div class="old-help-para">                Returns: <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">uv.is_closing({handle})                                        <a name="uv.is_closing()"></a><code class="help-tag-right">uv.is_closing()</code></div>
<div class="old-help-para">                &gt; method form <code>handle:is_closing()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>handle</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_handle_t">uv_handle_t</a>
</div></div>
<div class="old-help-para">                Returns <code>true</code> if the handle is closing or closed, <code>false</code>
                otherwise.</div>
<div class="old-help-para">                Returns: <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Note: This function should only be used between the
                initialization of the handle and the arrival of the close
                callback.</div>
<div class="old-help-para">uv.close({handle} [, <code>{callback}</code>])                                   <a name="uv.close()"></a><code class="help-tag-right">uv.close()</code></div>
<div class="old-help-para">                &gt; method form <code>handle:close([callback])</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>handle</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_handle_t">uv_handle_t</a>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Request handle to be closed. <code>callback</code> will be called
                asynchronously after this call. This MUST be called on each
                handle before memory is released.</div>
<div class="old-help-para">                Handles that wrap file descriptors are closed immediately but
                <code>callback</code> will still be deferred to the next iteration of the
                event loop. It gives you a chance to free up any resources
                associated with the handle.</div>
<div class="old-help-para">                In-progress requests, like <code>uv_connect_t</code> or <code>uv_write_t</code>, are
                cancelled and have their callbacks called asynchronously with
                <code>ECANCELED</code>.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para">uv.ref({handle})                                                      <a name="uv.ref()"></a><code class="help-tag-right">uv.ref()</code></div>
<div class="old-help-para">                &gt; method form <code>handle:ref()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>handle</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_handle_t">uv_handle_t</a>
</div></div>
<div class="old-help-para">                Reference the given handle. References are idempotent, that
                is, if a handle is already referenced calling this function
                again will have no effect.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para">                See <a href="luvref.html#luv-reference-counting">luv-reference-counting</a>.</div>
<div class="old-help-para">uv.unref({handle})                                                  <a name="uv.unref()"></a><code class="help-tag-right">uv.unref()</code></div>
<div class="old-help-para">                &gt; method form <code>handle:unref()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>handle</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_handle_t">uv_handle_t</a>
</div></div>
<div class="old-help-para">                Un-reference the given handle. References are idempotent, that
                is, if a handle is not referenced calling this function again
                will have no effect.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para">See <a href="luvref.html#luv-reference-counting">luv-reference-counting</a>.</div>
<div class="old-help-para">uv.has_ref({handle})                                              <a name="uv.has_ref()"></a><code class="help-tag-right">uv.has_ref()</code></div>
<div class="old-help-para">                &gt; method form <code>handle:has_ref()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>handle</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_handle_t">uv_handle_t</a>
</div></div>
<div class="old-help-para">                Returns <code>true</code> if the handle referenced, <code>false</code> if not.</div>
<div class="old-help-para">                Returns: <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                See <a href="luvref.html#luv-reference-counting">luv-reference-counting</a>.</div>
<div class="old-help-para">uv.send_buffer_size({handle} [, <code>{size}</code>])                 <a name="uv.send_buffer_size()"></a><code class="help-tag-right">uv.send_buffer_size()</code></div>
<div class="old-help-para">                &gt; method form <code>handle:send_buffer_size([size])</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>handle</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_handle_t">uv_handle_t</a>
</div><div class="help-li" style=""> <code>size</code>: <code>integer</code> or <code>nil</code> (default: <code>0</code>)
</div></div>
<div class="old-help-para">                Gets or sets the size of the send buffer that the operating
                system uses for the socket.</div>
<div class="old-help-para">                If <code>size</code> is omitted (or <code>0</code>), this will return the current
                send buffer size; otherwise, this will use <code>size</code> to set the
                new send buffer size.</div>
<div class="old-help-para">                This function works for TCP, pipe and UDP handles on Unix and
                for TCP and UDP handles on Windows.</div>
<div class="old-help-para">                Returns:
<div class="help-li" style=""> <code>integer</code> or <code>fail</code> (if <code>size</code> is <code>nil</code> or <code>0</code>)
</div><div class="help-li" style=""> <code>0</code> or <code>fail</code> (if <code>size</code> is not <code>nil</code> and not <code>0</code>)
</div></div>
<div class="old-help-para">                Note: Linux will set double the size and return double the
                size of the original set value.</div>
<div class="old-help-para">uv.recv_buffer_size({handle} [, <code>{size}</code>])                 <a name="uv.recv_buffer_size()"></a><code class="help-tag-right">uv.recv_buffer_size()</code></div>
<div class="old-help-para">                &gt; method form <code>handle:recv_buffer_size([size])</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>handle</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_handle_t">uv_handle_t</a>
</div><div class="help-li" style=""> <code>size</code>: <code>integer</code> or <code>nil</code> (default: <code>0</code>)
</div></div>
<div class="old-help-para">                Gets or sets the size of the receive buffer that the operating
                system uses for the socket.</div>
<div class="old-help-para">                If <code>size</code> is omitted (or <code>0</code>), this will return the current
                send buffer size; otherwise, this will use <code>size</code> to set the
                new send buffer size.</div>
<div class="old-help-para">                This function works for TCP, pipe and UDP handles on Unix and
                for TCP and UDP handles on Windows.</div>
<div class="old-help-para">                Returns:
<div class="help-li" style=""> <code>integer</code> or <code>fail</code> (if <code>size</code> is <code>nil</code> or <code>0</code>)
</div><div class="help-li" style=""> <code>0</code> or <code>fail</code> (if <code>size</code> is not <code>nil</code> and not <code>0</code>)
</div></div>
<div class="old-help-para">                Note: Linux will set double the size and return double the
                size of the original set value.</div>
<div class="old-help-para">uv.fileno({handle})                                                <a name="uv.fileno()"></a><code class="help-tag-right">uv.fileno()</code></div>
<div class="old-help-para">                &gt; method form <code>handle:fileno()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>handle</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_handle_t">uv_handle_t</a>
</div></div>
<div class="old-help-para">                Gets the platform dependent file descriptor equivalent.</div>
<div class="old-help-para">                The following handles are supported: TCP, pipes, TTY, UDP and
                poll. Passing any other handle type will fail with <code>EINVAL</code>.</div>
<div class="old-help-para">                If a handle doesn't have an attached file descriptor yet or
                the handle itself has been closed, this function will return
                <code>EBADF</code>.</div>
<div class="old-help-para">                Returns: <code>integer</code> or <code>fail</code></div>
<div class="old-help-para">                WARNING: Be very careful when using this function. libuv
                assumes it's in control of the file descriptor so any change
                to it may lead to malfunction.</div>
<div class="old-help-para">uv.handle_get_type({handle})                              <a name="uv.handle_get_type()"></a><code class="help-tag-right">uv.handle_get_type()</code></div>
<div class="old-help-para">                &gt; method form <code>handle:get_type()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>handle</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_handle_t">uv_handle_t</a>
</div></div>
<div class="old-help-para">                Returns the name of the struct for a given handle (e.g.
                <code>"pipe"</code> for <a href="luvref.html#uv_pipe_t">uv_pipe_t</a>) and the libuv enum integer for the
                handle's type (<code>uv_handle_type</code>).</div>
<div class="old-help-para">                Returns: <code>string, integer</code></div>
<div class="old-help-para"><h2 class="help-heading">REFERENCE COUNTING<span class="help-heading-tags">                                      <a name="luv-reference-counting"></a><span class="help-tag">luv-reference-counting</span></span></h2></div>
<div class="old-help-para">The libuv event loop (if run in the default mode) will run until there are no
active and referenced handles left. The user can force the loop to exit early
by unreferencing handles which are active, for example by calling <a href="luvref.html#uv.unref()">uv.unref()</a>
after calling <a href="luvref.html#uv.timer_start()">uv.timer_start()</a>.</div>
<div class="old-help-para">A handle can be referenced or unreferenced, the refcounting scheme doesn't use
a counter, so both operations are idempotent.</div>
<div class="old-help-para">All handles are referenced when active by default, see <a href="luvref.html#uv.is_active()">uv.is_active()</a> for a
more detailed explanation on what being active involves.</div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_timer_t</code> — Timer handle<span class="help-heading-tags">                          <a name="luv-timer-handle"></a><span class="help-tag">luv-timer-handle</span> <a name="uv_timer_t"></a><span class="help-tag">uv_timer_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> functions also apply.</div>
<div class="old-help-para">Timer handles are used to schedule callbacks to be called in the future.</div>
<div class="old-help-para">uv.new_timer()                                                  <a name="uv.new_timer()"></a><code class="help-tag-right">uv.new_timer()</code></div>
<div class="old-help-para">                Creates and initializes a new <a href="luvref.html#uv_timer_t">uv_timer_t</a>. Returns the Lua
                userdata wrapping it.</div>
<div class="old-help-para">                Returns: <code>uv_timer_t userdata</code> or <code>fail</code></div>
<div class="old-help-para"><pre>-- Creating a simple setTimeout wrapper
local function setTimeout(timeout, callback)
  local timer = uv.new_timer()
  timer:start(timeout, 0, function ()
    timer:stop()
    timer:close()
    callback()
  end)
  return timer
end

-- Creating a simple setInterval wrapper
local function setInterval(interval, callback)
  local timer = uv.new_timer()
  timer:start(interval, interval, function ()
    callback()
  end)
  return timer
end

-- And clearInterval
local function clearInterval(timer)
  timer:stop()
  timer:close()
end</pre></div>
<div class="old-help-para">uv.timer_start({timer}, <code>{timeout}</code>, <code>{repeat}</code>, <code>{callback}</code>)      <a name="uv.timer_start()"></a><code class="help-tag">uv.timer_start()</code></div>
<div class="old-help-para">                &gt; method form <code>timer:start(timeout, repeat, callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>timer</code>: <code>uv_timer_t userdata</code>
</div><div class="help-li" style=""> <code>timeout</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>repeat</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div></div>
<div class="old-help-para">                Start the timer. <code>timeout</code> and <code>repeat</code> are in milliseconds.</div>
<div class="old-help-para">                If <code>timeout</code> is zero, the callback fires on the next event
                loop iteration. If <code>repeat</code> is non-zero, the callback fires
                first after <code>timeout</code> milliseconds and then repeatedly after
                <code>repeat</code> milliseconds.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.timer_stop({timer})                                         <a name="uv.timer_stop()"></a><code class="help-tag-right">uv.timer_stop()</code></div>
<div class="old-help-para">                &gt; method form <code>timer:stop()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>timer</code>: <code>uv_timer_t userdata</code>
</div></div>
<div class="old-help-para">                Stop the timer, the callback will not be called anymore.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.timer_again({timer})                                       <a name="uv.timer_again()"></a><code class="help-tag-right">uv.timer_again()</code></div>
<div class="old-help-para">                &gt; method form <code>timer:again()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>timer</code>: <code>uv_timer_t userdata</code>
</div></div>
<div class="old-help-para">                Stop the timer, and if it is repeating restart it using the
                repeat value as the timeout. If the timer has never been
                started before it raises <code>EINVAL</code>.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.timer_set_repeat({timer}, <code>{repeat}</code>)                   <a name="uv.timer_set_repeat()"></a><code class="help-tag-right">uv.timer_set_repeat()</code></div>
<div class="old-help-para">                &gt; method form <code>timer:set_repeat(repeat)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>timer</code>: <code>uv_timer_t userdata</code>
</div><div class="help-li" style=""> <code>repeat</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Set the repeat interval value in milliseconds. The timer will
                be scheduled to run on the given interval, regardless of the
                callback execution duration, and will follow normal timer
                semantics in the case of a time-slice overrun.</div>
<div class="old-help-para">                For example, if a 50 ms repeating timer first runs for 17 ms,
                it will be scheduled to run again 33 ms later. If other tasks
                consume more than the 33 ms following the first timer
                callback, then the callback will run as soon as possible.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para">uv.timer_get_repeat({timer})                             <a name="uv.timer_get_repeat()"></a><code class="help-tag-right">uv.timer_get_repeat()</code></div>
<div class="old-help-para">                &gt; method form <code>timer:get_repeat()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>timer</code>: <code>uv_timer_t userdata</code>
</div></div>
<div class="old-help-para">                Get the timer repeat value.</div>
<div class="old-help-para">                Returns: <code>integer</code></div>
<div class="old-help-para">uv.timer_get_due_in({timer})                             <a name="uv.timer_get_due_in()"></a><code class="help-tag-right">uv.timer_get_due_in()</code></div>
<div class="old-help-para">                &gt; method form <code>timer:get_due_in()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>timer</code>: <code>uv_timer_t userdata</code>
</div></div>
<div class="old-help-para">                Get the timer due value or 0 if it has expired. The time is
                relative to <a href="luvref.html#uv.now()">uv.now()</a>.</div>
<div class="old-help-para">                Returns: <code>integer</code></div>
<div class="old-help-para">                Note: New in libuv version 1.40.0.</div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_prepare_t</code> — Prepare handle<span class="help-heading-tags">                  <a name="luv-prepare-handle"></a><span class="help-tag">luv-prepare-handle</span> <a name="uv_prepare_t"></a><span class="help-tag">uv_prepare_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> functions also apply.</div>
<div class="old-help-para">Prepare handles will run the given callback once per loop iteration, right
before polling for I/O.</div>
<div class="old-help-para"><pre>local prepare = uv.new_prepare()
prepare:start(function()
  print("Before I/O polling")
end)</pre></div>
<div class="old-help-para">uv.new_prepare()                                              <a name="uv.new_prepare()"></a><code class="help-tag-right">uv.new_prepare()</code></div>
<div class="old-help-para">                Creates and initializes a new <a href="luvref.html#uv_prepare_t">uv_prepare_t</a>. Returns the Lua
                userdata wrapping it.</div>
<div class="old-help-para">                Returns: <code>uv_prepare_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.prepare_start({prepare}, <code>{callback}</code>)                     <a name="uv.prepare_start()"></a><code class="help-tag-right">uv.prepare_start()</code></div>
<div class="old-help-para">                &gt; method form <code>prepare:start(callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>prepare</code>: <code>uv_prepare_t userdata</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div></div>
<div class="old-help-para">                Start the handle with the given callback.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.prepare_stop({prepare})                                   <a name="uv.prepare_stop()"></a><code class="help-tag-right">uv.prepare_stop()</code></div>
<div class="old-help-para">                &gt; method form <code>prepare:stop()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>prepare</code>: <code>uv_prepare_t userdata</code>
</div></div>
<div class="old-help-para">                Stop the handle, the callback will no longer be called.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_check_t</code> — Check handle<span class="help-heading-tags">                          <a name="luv-check-handle"></a><span class="help-tag">luv-check-handle</span> <a name="uv_check_t"></a><span class="help-tag">uv_check_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> functions also apply.</div>
<div class="old-help-para">Check handles will run the given callback once per loop iteration, right after
polling for I/O.</div>
<div class="old-help-para"><pre>local check = uv.new_check()
check:start(function()
  print("After I/O polling")
end)</pre></div>
<div class="old-help-para">uv.new_check()                                                  <a name="uv.new_check()"></a><code class="help-tag-right">uv.new_check()</code></div>
<div class="old-help-para">                Creates and initializes a new <a href="luvref.html#uv_check_t">uv_check_t</a>. Returns the Lua
                userdata wrapping it.</div>
<div class="old-help-para">                Returns: <code>uv_check_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.check_start({check}, <code>{callback}</code>)                           <a name="uv.check_start()"></a><code class="help-tag-right">uv.check_start()</code></div>
<div class="old-help-para">                &gt; method form <code>check:start(callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>check</code>: <code>uv_check_t userdata</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div></div>
<div class="old-help-para">                Start the handle with the given callback.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.check_stop({check})                                         <a name="uv.check_stop()"></a><code class="help-tag-right">uv.check_stop()</code></div>
<div class="old-help-para">                &gt; method form <code>check:stop()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>check</code>: <code>uv_check_t userdata</code>
</div></div>
<div class="old-help-para">                Stop the handle, the callback will no longer be called.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_idle_t</code> — Idle handle<span class="help-heading-tags">                              <a name="luv-idle-handle"></a><span class="help-tag">luv-idle-handle</span> <a name="uv_idle_t"></a><span class="help-tag">uv_idle_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> functions also apply.</div>
<div class="old-help-para">Idle handles will run the given callback once per loop iteration, right before
the <a href="luvref.html#uv_prepare_t">uv_prepare_t</a> handles.</div>
<div class="old-help-para">Note: The notable difference with prepare handles is that when there are
active idle handles, the loop will perform a zero timeout poll instead of
blocking for I/O.</div>
<div class="old-help-para">WARNING: Despite the name, idle handles will get their callbacks called on
every loop iteration, not when the loop is actually "idle".</div>
<div class="old-help-para"><pre>local idle = uv.new_idle()
idle:start(function()
  print("Before I/O polling, no blocking")
end)</pre></div>
<div class="old-help-para">uv.new_idle()                                                    <a name="uv.new_idle()"></a><code class="help-tag-right">uv.new_idle()</code></div>
<div class="old-help-para">                Creates and initializes a new <a href="luvref.html#uv_idle_t">uv_idle_t</a>. Returns the Lua
                userdata wrapping it.</div>
<div class="old-help-para">                Returns: <code>uv_idle_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.idle_start({idle}, <code>{callback}</code>)                              <a name="uv.idle_start()"></a><code class="help-tag-right">uv.idle_start()</code></div>
<div class="old-help-para">                &gt; method form <code>idle:start(callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>idle</code>: <code>uv_idle_t userdata</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div></div>
<div class="old-help-para">                Start the handle with the given callback.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.idle_stop({check})                                           <a name="uv.idle_stop()"></a><code class="help-tag-right">uv.idle_stop()</code></div>
<div class="old-help-para">                &gt; method form <code>idle:stop()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>idle</code>: <code>uv_idle_t userdata</code>
</div></div>
<div class="old-help-para">                Stop the handle, the callback will no longer be called.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_async_t</code> — Async handle<span class="help-heading-tags">                          <a name="luv-async-handle"></a><span class="help-tag">luv-async-handle</span> <a name="uv_async_t"></a><span class="help-tag">uv_async_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> functions also apply.</div>
<div class="old-help-para">Async handles allow the user to "wakeup" the event loop and get a callback
called from another thread.</div>
<div class="old-help-para"><pre>local async
async = uv.new_async(function()
  print("async operation ran")
  async:close()
end)

async:send()</pre></div>
<div class="old-help-para">uv.new_async([{callback}])                                      <a name="uv.new_async()"></a><code class="help-tag-right">uv.new_async()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>callback</code>: <code>callable</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>...</code>: <code>threadargs</code> passed to/from
                    <code>uv.async_send(async, ...)</code>
</div></div>
<div class="old-help-para">                Creates and initializes a new <a href="luvref.html#uv_async_t">uv_async_t</a>. Returns the Lua
                userdata wrapping it. A <code>nil</code> callback is allowed.</div>
<div class="old-help-para">                Returns: <code>uv_async_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">                Note: Unlike other handle initialization functions, this
                immediately starts the handle.</div>
<div class="old-help-para">uv.async_send({async}, <code>{...}</code>)                                  <a name="uv.async_send()"></a><code class="help-tag-right">uv.async_send()</code></div>
<div class="old-help-para">                &gt; method form <code>async:send(...)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>async</code>: <code>uv_async_t userdata</code>
</div><div class="help-li" style=""> <code>...</code>: <code>threadargs</code>
</div></div>
<div class="old-help-para">                Wakeup the event loop and call the async handle's callback.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">                Note: It's safe to call this function from any thread. The
                callback will be called on the loop thread.</div>
<div class="old-help-para">                WARNING: libuv will coalesce calls to <code>uv.async_send(async)</code>,
                that is, not every call to it will yield an execution of the
                callback. For example: if <code>uv.async_send()</code> is called 5 times
                in a row before the callback is called, the callback will only
                be called once. If <code>uv.async_send()</code> is called again after the
                callback was called, it will be called again.</div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_poll_t</code> — Poll handle<span class="help-heading-tags">                              <a name="luv-poll-handle"></a><span class="help-tag">luv-poll-handle</span> <a name="uv_poll_t"></a><span class="help-tag">uv_poll_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> functions also apply.</div>
<div class="old-help-para">Poll handles are used to watch file descriptors for readability and
writability, similar to the purpose of poll(2)
(<a href="https://linux.die.net/man/2/poll">https://linux.die.net/man/2/poll</a>).</div>
<div class="old-help-para">The purpose of poll handles is to enable integrating external libraries that
rely on the event loop to signal it about the socket status changes, like
c-ares or libssh2. Using <code>uv_poll_t</code> for any other purpose is not recommended;
<a href="luvref.html#uv_tcp_t">uv_tcp_t</a>, <a href="luvref.html#uv_udp_t">uv_udp_t</a>, etc. provide an implementation that is faster and more
scalable than what can be achieved with <code>uv_poll_t</code>, especially on Windows.</div>
<div class="old-help-para">It is possible that poll handles occasionally signal that a file descriptor is
readable or writable even when it isn't. The user should therefore always be
prepared to handle EAGAIN or equivalent when it attempts to read from or write
to the fd.</div>
<div class="old-help-para">It is not okay to have multiple active poll handles for the same socket, this
can cause libuv to busyloop or otherwise malfunction.</div>
<div class="old-help-para">The user should not close a file descriptor while it is being polled by an
active poll handle. This can cause the handle to report an error, but it might
also start polling another socket. However the fd can be safely closed
immediately after a call to <a href="luvref.html#uv.poll_stop()">uv.poll_stop()</a> or <a href="luvref.html#uv.close()">uv.close()</a>.</div>
<div class="old-help-para">Note: On windows only sockets can be polled with poll handles. On Unix any
file descriptor that would be accepted by poll(2) can be used.</div>
<div class="old-help-para">uv.new_poll({fd})                                                <a name="uv.new_poll()"></a><code class="help-tag-right">uv.new_poll()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Initialize the handle using a file descriptor.</div>
<div class="old-help-para">                The file descriptor is set to non-blocking mode.</div>
<div class="old-help-para">                Returns: <code>uv_poll_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.new_socket_poll({fd})                                  <a name="uv.new_socket_poll()"></a><code class="help-tag-right">uv.new_socket_poll()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Initialize the handle using a socket descriptor. On Unix this
                is identical to <a href="luvref.html#uv.new_poll()">uv.new_poll()</a>. On windows it takes a SOCKET
                handle.</div>
<div class="old-help-para">                The socket is set to non-blocking mode.</div>
<div class="old-help-para">                Returns: <code>uv_poll_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.poll_start({poll}, <code>{events}</code>, <code>{callback}</code>)                    <a name="uv.poll_start()"></a><code class="help-tag-right">uv.poll_start()</code></div>
<div class="old-help-para">                &gt; method form <code>poll:start(events, callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>poll</code>: <code>uv_poll_t userdata</code>
</div><div class="help-li" style=""> <code>events</code>: <code>string</code> or <code>nil</code> (default: <code>"rw"</code>)
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>events</code>: <code>string</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Starts polling the file descriptor. <code>events</code> are: <code>"r"</code>,
                <code>"w"</code>, <code>"rw"</code>, <code>"d"</code>, <code>"rd"</code>, <code>"wd"</code>, <code>"rwd"</code>, <code>"p"</code>, <code>"rp"</code>,
                <code>"wp"</code>, <code>"rwp"</code>, <code>"dp"</code>, <code>"rdp"</code>, <code>"wdp"</code>, or <code>"rwdp"</code> where
                <code>r</code> is <code>READABLE</code>, <code>w</code> is <code>WRITABLE</code>, <code>d</code> is <code>DISCONNECT</code>, and
                <code>p</code> is <code>PRIORITIZED</code>. As soon as an event is detected the
                callback will be called with status set to 0, and the detected
                events set on the events field.</div>
<div class="old-help-para">                The user should not close the socket while the handle is
                active. If the user does that anyway, the callback may be
                called reporting an error status, but this is not guaranteed.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">                Note Calling <code>uv.poll_start()</code> on a handle that is already
                active is fine. Doing so will update the events mask that is
                being watched for.</div>
<div class="old-help-para">uv.poll_stop({poll})                                            <a name="uv.poll_stop()"></a><code class="help-tag-right">uv.poll_stop()</code></div>
<div class="old-help-para">                &gt; method form <code>poll:stop()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>poll</code>: <code>uv_poll_t userdata</code>
</div></div>
<div class="old-help-para">                Stop polling the file descriptor, the callback will no longer
                be called.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_signal_t</code> — Signal handle<span class="help-heading-tags">                      <a name="luv-signal-handle"></a><span class="help-tag">luv-signal-handle</span> <a name="uv_signal_t"></a><span class="help-tag">uv_signal_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> functions also apply.</div>
<div class="old-help-para">Signal handles implement Unix style signal handling on a per-event loop bases.</div>
<div class="old-help-para">Windows Notes:</div>
<div class="old-help-para">Reception of some signals is emulated on Windows:
<div class="help-li" style=""> SIGINT is normally delivered when the user presses CTRL+C. However, like
    on Unix, it is not generated when terminal raw mode is enabled.
</div><div class="help-li" style=""> SIGBREAK is delivered when the user pressed CTRL + BREAK.
</div><div class="help-li" style=""> SIGHUP is generated when the user closes the console window. On SIGHUP the
    program is given approximately 10 seconds to perform cleanup. After that
    Windows will unconditionally terminate it.
</div><div class="help-li" style=""> SIGWINCH is raised whenever libuv detects that the console has been
    resized. SIGWINCH is emulated by libuv when the program uses a uv_tty_t
    handle to write to the console. SIGWINCH may not always be delivered in a
    timely manner; libuv will only detect size changes when the cursor is
    being moved. When a readable <a href="luvref.html#uv_tty_t">uv_tty_t</a> handle is used in raw mode,
    resizing the console buffer will also trigger a SIGWINCH signal.
</div><div class="help-li" style=""> Watchers for other signals can be successfully created, but these signals
    are never received. These signals are: SIGILL, SIGABRT, SIGFPE, SIGSEGV,
    SIGTERM and SIGKILL.
</div><div class="help-li" style=""> Calls to raise() or abort() to programmatically raise a signal are not
    detected by libuv; these will not trigger a signal watcher.
</div></div>
<div class="old-help-para">Unix Notes:</div>
<div class="old-help-para"><div class="help-li" style=""> SIGKILL and SIGSTOP are impossible to catch.
</div><div class="help-li" style=""> Handling SIGBUS, SIGFPE, SIGILL or SIGSEGV via libuv results into
    undefined behavior.
</div><div class="help-li" style=""> SIGABRT will not be caught by libuv if generated by abort(), e.g. through
    assert().
</div><div class="help-li" style=""> On Linux SIGRT0 and SIGRT1 (signals 32 and 33) are used by the NPTL
    pthreads library to manage threads. Installing watchers for those signals
    will lead to unpredictable behavior and is strongly discouraged. Future
    versions of libuv may simply reject them.
</div></div>
<div class="old-help-para"><pre>-- Create a new signal handler
local signal = uv.new_signal()
-- Define a handler function
uv.signal_start(signal, "sigint", function(signal)
  print("got " .. signal .. ", shutting down")
  os.exit(1)
end)</pre></div>
<div class="old-help-para">uv.new_signal()                                                <a name="uv.new_signal()"></a><code class="help-tag-right">uv.new_signal()</code></div>
<div class="old-help-para">                Creates and initializes a new <a href="luvref.html#uv_signal_t">uv_signal_t</a>. Returns the Lua
                userdata wrapping it.</div>
<div class="old-help-para">                Returns: <code>uv_signal_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.signal_start({signal}, <code>{signum}</code>, <code>{callback}</code>)              <a name="uv.signal_start()"></a><code class="help-tag-right">uv.signal_start()</code></div>
<div class="old-help-para">                &gt; method form <code>signal:start(signum, callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>signal</code>: <code>uv_signal_t userdata</code>
</div><div class="help-li" style=""> <code>signum</code>: <code>integer</code> or <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>signum</code>: <code>string</code>
</div></div>
<div class="old-help-para">                Start the handle with the given callback, watching for the
                given signal.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code>
                                                     <a name="uv.signal_start_oneshot()"></a><code class="help-tag-right">uv.signal_start_oneshot()</code>
uv.signal_start_oneshot({signal}, <code>{signum}</code>, <code>{callback}</code>)</div>
<div class="old-help-para">                &gt; method form <code>signal:start_oneshot(signum, callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>signal</code>: <code>uv_signal_t userdata</code>
</div><div class="help-li" style=""> <code>signum</code>: <code>integer</code> or <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>signum</code>: <code>string</code>
</div></div>
<div class="old-help-para">                Same functionality as <a href="luvref.html#uv.signal_start()">uv.signal_start()</a> but the signal
                handler is reset the moment the signal is received.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.signal_stop({signal})                                      <a name="uv.signal_stop()"></a><code class="help-tag-right">uv.signal_stop()</code></div>
<div class="old-help-para">                &gt; method form <code>signal:stop()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>signal</code>: <code>uv_signal_t userdata</code>
</div></div>
<div class="old-help-para">                Stop the handle, the callback will no longer be called.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_process_t</code> — Process handle<span class="help-heading-tags">                  <a name="luv-process-handle"></a><span class="help-tag">luv-process-handle</span> <a name="uv_process_t"></a><span class="help-tag">uv_process_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> functions also apply.</div>
<div class="old-help-para">Process handles will spawn a new process and allow the user to control it and
establish communication channels with it using streams.</div>
<div class="old-help-para">uv.disable_stdio_inheritance()                  <a name="uv.disable_stdio_inheritance()"></a><code class="help-tag-right">uv.disable_stdio_inheritance()</code></div>
<div class="old-help-para">                Disables inheritance for file descriptors / handles that this
                process inherited from its parent. The effect is that child
                processes spawned by this process don't accidentally inherit
                these handles.</div>
<div class="old-help-para">                It is recommended to call this function as early in your
                program as possible, before the inherited file descriptors can
                be closed or duplicated.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para">                Note: This function works on a best-effort basis: there is no
                guarantee that libuv can discover all file descriptors that
                were inherited. In general it does a better job on Windows
                than it does on Unix.</div>
<div class="old-help-para">uv.spawn({path}, <code>{options}</code>, <code>{on_exit}</code>)                              <a name="uv.spawn()"></a><code class="help-tag-right">uv.spawn()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>options</code>: <code>table</code> (see below)
</div><div class="help-li" style=""> <code>on_exit</code>: <code>callable</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>code</code>: <code>integer</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>signal</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Initializes the process handle and starts the process. If the
                process is successfully spawned, this function will return the
                handle and pid of the child process.</div>
<div class="old-help-para">                Possible reasons for failing to spawn would include (but not
                be limited to) the file to execute not existing, not having
                permissions to use the setuid or setgid specified, or not
                having enough memory to allocate for the new process.</div>
<div class="old-help-para"><pre>local stdin = uv.new_pipe()
local stdout = uv.new_pipe()
local stderr = uv.new_pipe()

print("stdin", stdin)
print("stdout", stdout)
print("stderr", stderr)

local handle, pid = uv.spawn("cat", {
  stdio = {stdin, stdout, stderr}
}, function(code, signal) -- on exit
  print("exit code", code)
  print("exit signal", signal)
end)

print("process opened", handle, pid)

uv.read_start(stdout, function(err, data)
  assert(not err, err)
  if data then
    print("stdout chunk", stdout, data)
  else
    print("stdout end", stdout)
  end
end)

uv.read_start(stderr, function(err, data)
  assert(not err, err)
  if data then
    print("stderr chunk", stderr, data)
  else
    print("stderr end", stderr)
  end
end)

uv.write(stdin, "Hello World")

uv.shutdown(stdin, function()
  print("stdin shutdown", stdin)
  uv.close(handle, function()
    print("process closed", handle, pid)
  end)
end)</pre></div>
<div class="old-help-para">                                                              <a name="uv.spawn-options"></a><code class="help-tag-right">uv.spawn-options</code>
                The <code>options</code> table accepts the following fields:</div>
<div class="old-help-para"><div class="help-li" style=""> <code>options.args</code> - Command line arguments as a list of
                    string. The first string should be the path to the
                    program. On Windows, this uses CreateProcess which
                    concatenates the arguments into a string. This can cause
                    some strange errors. (See <code>options.verbatim</code> below for
                    Windows.)
</div><div class="help-li" style=""> <code>options.stdio</code> - Set the file descriptors that will be
                    made available to the child process. The convention is
                    that the first entries are stdin, stdout, and stderr.
                    (Note: On Windows, file descriptors after the third are
                    available to the child process only if the child processes
                    uses the MSVCRT runtime.)
</div><div class="help-li" style=""> <code>options.env</code> - Set environment variables for the new
                    process.
</div><div class="help-li" style=""> <code>options.cwd</code> - Set the current working directory for the
                    sub-process.
</div><div class="help-li" style=""> <code>options.uid</code> - Set the child process' user id.
</div><div class="help-li" style=""> <code>options.gid</code> - Set the child process' group id.
</div><div class="help-li" style=""> <code>options.verbatim</code> - If true, do not wrap any arguments in
                    quotes, or perform any other escaping, when converting the
                    argument list into a command line string. This option is
                    only meaningful on Windows systems. On Unix it is silently
                    ignored.
</div><div class="help-li" style=""> <code>options.detached</code> - If true, spawn the child process in a
                    detached state - this will make it a process group leader,
                    and will effectively enable the child to keep running
                    after the parent exits. Note that the child process will
                    still keep the parent's event loop alive unless the parent
                    process calls <a href="luvref.html#uv.unref()">uv.unref()</a> on the child's process handle.
</div><div class="help-li" style=""> <code>options.hide</code> - If true, hide the subprocess console
                    window that would normally be created. This option is only
                    meaningful on Windows systems. On Unix it is silently
                    ignored.
</div></div>
<div class="old-help-para">                The <code>options.stdio</code> entries can take many shapes.</div>
<div class="old-help-para"><div class="help-li" style=""> If they are numbers, then the child process inherits that
                    same zero-indexed fd from the parent process.
</div><div class="help-li" style=""> If <a href="luvref.html#uv_stream_t">uv_stream_t</a> handles are passed in, those are used as
                    a read-write pipe or inherited stream depending if the
                    stream has a valid fd.
</div><div class="help-li" style=""> Including <code>nil</code> placeholders means to ignore that fd in
                    the child process.
</div></div>
<div class="old-help-para">                When the child process exits, <code>on_exit</code> is called with an exit
                code and signal.</div>
<div class="old-help-para">                Returns: <code>uv_process_t userdata</code>, <code>integer</code></div>
<div class="old-help-para">uv.process_kill({process}, <code>{signum}</code>)                         <a name="uv.process_kill()"></a><code class="help-tag-right">uv.process_kill()</code></div>
<div class="old-help-para">                &gt; method form <code>process:kill(signum)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>process</code>: <code>uv_process_t userdata</code>
</div><div class="help-li" style=""> <code>signum</code>: <code>integer</code> or <code>string</code>
</div></div>
<div class="old-help-para">                Sends the specified signal to the given process handle. Check
                the documentation on <a href="luvref.html#uv_signal_t">uv_signal_t</a> for signal support,
                specially on Windows.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.kill({pid}, <code>{signum}</code>)                                             <a name="uv.kill()"></a><code class="help-tag-right">uv.kill()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>pid</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>signum</code>: <code>integer</code> or <code>string</code>
</div></div>
<div class="old-help-para">                Sends the specified signal to the given PID. Check the
                documentation on <a href="luvref.html#uv_signal_t">uv_signal_t</a> for signal support, specially
                on Windows.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.process_get_pid({process})                             <a name="uv.process_get_pid()"></a><code class="help-tag-right">uv.process_get_pid()</code></div>
<div class="old-help-para">                &gt; method form <code>process:get_pid()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>process</code>: <code>uv_process_t userdata</code>
</div></div>
<div class="old-help-para">                Returns the handle's pid.</div>
<div class="old-help-para">                Returns: <code>integer</code></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_stream_t</code> — Stream handle<span class="help-heading-tags">                      <a name="luv-stream-handle"></a><span class="help-tag">luv-stream-handle</span> <a name="uv_stream_t"></a><span class="help-tag">uv_stream_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> functions also apply.</div>
<div class="old-help-para">Stream handles provide an abstraction of a duplex communication channel.
<code>uv_stream_t</code> is an abstract type, libuv provides 3 stream implementations
in the form of <a href="luvref.html#uv_tcp_t">uv_tcp_t</a>, <a href="luvref.html#uv_pipe_t">uv_pipe_t</a> and <a href="luvref.html#uv_tty_t">uv_tty_t</a>.</div>
<div class="old-help-para">uv.shutdown({stream} [, <code>{callback}</code>])                             <a name="uv.shutdown()"></a><code class="help-tag-right">uv.shutdown()</code></div>
<div class="old-help-para">                &gt; method form <code>stream:shutdown([callback])</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>stream</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div></div>
<div class="old-help-para">                Shutdown the outgoing (write) side of a duplex stream. It
                waits for pending write requests to complete. The callback is
                called after shutdown is complete.</div>
<div class="old-help-para">                Returns: <code>uv_shutdown_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.listen({stream}, <code>{backlog}</code>, <code>{callback}</code>)                         <a name="uv.listen()"></a><code class="help-tag-right">uv.listen()</code></div>
<div class="old-help-para">                &gt; method form <code>stream:listen(backlog, callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>stream</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div><div class="help-li" style=""> <code>backlog</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div></div>
<div class="old-help-para">                Start listening for incoming connections. <code>backlog</code> indicates
                the number of connections the kernel might queue, same as
                <code>listen(2)</code>. When a new incoming connection is received the
                callback is called.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.accept({stream}, <code>{client_stream}</code>)                               <a name="uv.accept()"></a><code class="help-tag-right">uv.accept()</code></div>
<div class="old-help-para">                &gt; method form <code>stream:accept(client_stream)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>stream</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div><div class="help-li" style=""> <code>client_stream</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div></div>
<div class="old-help-para">                This call is used in conjunction with <a href="luvref.html#uv.listen()">uv.listen()</a> to accept
                incoming connections. Call this function after receiving a
                callback to accept the connection.</div>
<div class="old-help-para">                When the connection callback is called it is guaranteed that
                this function will complete successfully the first time. If
                you attempt to use it more than once, it may fail. It is
                suggested to only call this function once per connection call.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para"><pre>server:listen(128, function (err)
  local client = uv.new_tcp()
  server:accept(client)
end)</pre></div>
<div class="old-help-para">uv.read_start({stream}, <code>{callback}</code>)                            <a name="uv.read_start()"></a><code class="help-tag-right">uv.read_start()</code></div>
<div class="old-help-para">                &gt; method form <code>stream:read_start(callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>stream</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>data</code>: <code>string</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Read data from an incoming stream. The callback will be made
                several times until there is no more data to read or
                <a href="luvref.html#uv.read_stop()">uv.read_stop()</a> is called. When we've reached EOF, <code>data</code>
                will be <code>nil</code>.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para"><pre>stream:read_start(function (err, chunk)
  if err then
    -- handle read error
  elseif chunk then
    -- handle data
  else
    -- handle disconnect
  end
end)</pre></div>
<div class="old-help-para">uv.read_stop({stream})                                          <a name="uv.read_stop()"></a><code class="help-tag-right">uv.read_stop()</code></div>
<div class="old-help-para">                &gt; method form <code>stream:read_stop()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>stream</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div></div>
<div class="old-help-para">                Stop reading data from the stream. The read callback will no
                longer be called.</div>
<div class="old-help-para">                This function is idempotent and may be safely called on a
                stopped stream.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.write({stream}, <code>{data}</code> [, <code>{callback}</code>])                           <a name="uv.write()"></a><code class="help-tag-right">uv.write()</code></div>
<div class="old-help-para">                &gt; method form <code>stream:write(data, [callback])</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>stream</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div><div class="help-li" style=""> <code>data</code>: <code>buffer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div></div>
<div class="old-help-para">                Write data to stream.</div>
<div class="old-help-para">                <code>data</code> can either be a Lua string or a table of strings. If a
                table is passed in, the C backend will use writev to send all
                strings in a single system call.</div>
<div class="old-help-para">                The optional <code>callback</code> is for knowing when the write is
                complete.</div>
<div class="old-help-para">                Returns: <code>uv_write_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.write2({stream}, <code>{data}</code>, <code>{send_handle}</code> [, <code>{callback}</code>])          <a name="uv.write2()"></a><code class="help-tag-right">uv.write2()</code></div>
<div class="old-help-para">                &gt; method form <code>stream:write2(data, send_handle, [callback])</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>stream</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div><div class="help-li" style=""> <code>data</code>: <code>buffer</code>
</div><div class="help-li" style=""> <code>send_handle</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div></div>
<div class="old-help-para">                Extended write function for sending handles over a pipe. The
                pipe must be initialized with <code>ipc</code> option <code>true</code>.</div>
<div class="old-help-para">                Returns: <code>uv_write_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">                Note: <code>send_handle</code> must be a TCP socket or pipe, which is a
                server or a connection (listening or connected state). Bound
                sockets or pipes will be assumed to be servers.</div>
<div class="old-help-para">uv.try_write({stream}, <code>{data}</code>)                                  <a name="uv.try_write()"></a><code class="help-tag-right">uv.try_write()</code></div>
<div class="old-help-para">                &gt; method form <code>stream:try_write(data)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>stream</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div><div class="help-li" style=""> <code>data</code>: <code>buffer</code>
</div></div>
<div class="old-help-para">                Same as <a href="luvref.html#uv.write()">uv.write()</a>, but won't queue a write request if it
                can't be completed immediately.</div>
<div class="old-help-para">                Will return number of bytes written (can be less than the
                supplied buffer size).</div>
<div class="old-help-para">                Returns: <code>integer</code> or <code>fail</code></div>
<div class="old-help-para">uv.try_write2({stream}, <code>{data}</code>, <code>{send_handle}</code>)                 <a name="uv.try_write2()"></a><code class="help-tag-right">uv.try_write2()</code></div>
<div class="old-help-para">                &gt; method form <code>stream:try_write2(data, send_handle)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>stream</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div><div class="help-li" style=""> <code>data</code>: <code>buffer</code>
</div><div class="help-li" style=""> <code>send_handle</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div></div>
<div class="old-help-para">                Like <a href="luvref.html#uv.write2()">uv.write2()</a>, but with the properties of
                <a href="luvref.html#uv.try_write()">uv.try_write()</a>. Not supported on Windows, where it returns
                <code>UV_EAGAIN</code>.</div>
<div class="old-help-para">                Will return number of bytes written (can be less than the
                supplied buffer size).</div>
<div class="old-help-para">                Returns: <code>integer</code> or <code>fail</code></div>
<div class="old-help-para">uv.is_readable({stream})                                      <a name="uv.is_readable()"></a><code class="help-tag-right">uv.is_readable()</code></div>
<div class="old-help-para">                &gt; method form <code>stream:is_readable()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>stream</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div></div>
<div class="old-help-para">                Returns <code>true</code> if the stream is readable, <code>false</code> otherwise.</div>
<div class="old-help-para">                Returns: <code>boolean</code></div>
<div class="old-help-para">uv.is_writable({stream})                                      <a name="uv.is_writable()"></a><code class="help-tag-right">uv.is_writable()</code></div>
<div class="old-help-para">                &gt; method form <code>stream:is_writable()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>stream</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div></div>
<div class="old-help-para">                Returns <code>true</code> if the stream is writable, <code>false</code> otherwise.</div>
<div class="old-help-para">                Returns: <code>boolean</code></div>
<div class="old-help-para">uv.stream_set_blocking({stream}, <code>{blocking}</code>)          <a name="uv.stream_set_blocking()"></a><code class="help-tag-right">uv.stream_set_blocking()</code></div>
<div class="old-help-para">                &gt; method form <code>stream:set_blocking(blocking)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>stream</code>: <code>userdata</code> for sub-type of <a href="luvref.html#uv_stream_t">uv_stream_t</a>
</div><div class="help-li" style=""> <code>blocking</code>: <code>boolean</code>
</div></div>
<div class="old-help-para">                Enable or disable blocking mode for a stream.</div>
<div class="old-help-para">                When blocking mode is enabled all writes complete
                synchronously. The interface remains unchanged otherwise, e.g.
                completion or failure of the operation will still be reported
                through a callback which is made asynchronously.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">                WARNING: Relying too much on this API is not recommended. It
                is likely to change significantly in the future. Currently
                this only works on Windows and only for <a href="luvref.html#uv_pipe_t">uv_pipe_t</a> handles.
                Also libuv currently makes no ordering guarantee when the
                blocking mode is changed after write requests have already
                been submitted. Therefore it is recommended to set the
                blocking mode immediately after opening or creating the
                stream.</div>
<div class="old-help-para">uv.stream_get_write_queue_size()              <a name="uv.stream_get_write_queue_size()"></a><code class="help-tag-right">uv.stream_get_write_queue_size()</code></div>
<div class="old-help-para">                &gt; method form <code>stream:get_write_queue_size()</code></div>
<div class="old-help-para">                Returns the stream's write queue size.</div>
<div class="old-help-para">                Returns: <code>integer</code></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_tcp_t</code> — TCP handle<span class="help-heading-tags">                                  <a name="luv-tcp-handle"></a><span class="help-tag">luv-tcp-handle</span> <a name="uv_tcp_t"></a><span class="help-tag">uv_tcp_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> and <a href="luvref.html#uv_stream_t">uv_stream_t</a> functions also apply.</div>
<div class="old-help-para">TCP handles are used to represent both TCP streams and servers.</div>
<div class="old-help-para">uv.new_tcp([{flags}])                                             <a name="uv.new_tcp()"></a><code class="help-tag-right">uv.new_tcp()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>flags</code>: <code>string</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Creates and initializes a new <a href="luvref.html#uv_tcp_t">uv_tcp_t</a>. Returns the Lua
                userdata wrapping it. Flags may be a family string: <code>"unix"</code>,
                <code>"inet"</code>, <code>"inet6"</code>, <code>"ipx"</code>, <code>"netlink"</code>, <code>"x25"</code>, <code>"ax25"</code>,
                <code>"atmpvc"</code>, <code>"appletalk"</code>, or <code>"packet"</code>.</div>
<div class="old-help-para">                Returns: <code>uv_tcp_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.tcp_open({tcp}, <code>{sock}</code>)                                       <a name="uv.tcp_open()"></a><code class="help-tag-right">uv.tcp_open()</code></div>
<div class="old-help-para">                &gt; method form <code>tcp:open(sock)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>tcp</code>: <code>uv_tcp_t userdata</code>
</div><div class="help-li" style=""> <code>sock</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Open an existing file descriptor or SOCKET as a TCP handle.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">                Note: The passed file descriptor or SOCKET is not checked for
                its type, but it's required that it represents a valid stream
                socket.</div>
<div class="old-help-para">uv.tcp_nodelay({tcp}, <code>{enable}</code>)                               <a name="uv.tcp_nodelay()"></a><code class="help-tag-right">uv.tcp_nodelay()</code></div>
<div class="old-help-para">                &gt; method form <code>tcp:nodelay(enable)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>tcp</code>: <code>uv_tcp_t userdata</code>
</div><div class="help-li" style=""> <code>enable</code>: <code>boolean</code>
</div></div>
<div class="old-help-para">                Enable / disable Nagle's algorithm.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.tcp_keepalive({tcp}, <code>{enable}</code> [, <code>{delay}</code>])               <a name="uv.tcp_keepalive()"></a><code class="help-tag-right">uv.tcp_keepalive()</code></div>
<div class="old-help-para">                &gt; method form <code>tcp:keepalive(enable, [delay])</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>tcp</code>: <code>uv_tcp_t userdata</code>
</div><div class="help-li" style=""> <code>enable</code>: <code>boolean</code>
</div><div class="help-li" style=""> <code>delay</code>: <code>integer</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Enable / disable TCP keep-alive. <code>delay</code> is the initial delay
                in seconds, ignored when enable is <code>false</code>.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.tcp_simultaneous_accepts({tcp}, <code>{enable}</code>)     <a name="uv.tcp_simultaneous_accepts()"></a><code class="help-tag">uv.tcp_simultaneous_accepts()</code></div>
<div class="old-help-para">                &gt; method form <code>tcp:simultaneous_accepts(enable)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>tcp</code>: <code>uv_tcp_t userdata</code>
</div><div class="help-li" style=""> <code>enable</code>: <code>boolean</code>
</div></div>
<div class="old-help-para">                Enable / disable simultaneous asynchronous accept requests
                that are queued by the operating system when listening for new
                TCP connections.</div>
<div class="old-help-para">                This setting is used to tune a TCP server for the desired
                performance. Having simultaneous accepts can significantly
                improve the rate of accepting connections (which is why it is
                enabled by default) but may lead to uneven load distribution
                in multi-process setups.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.tcp_bind({tcp}, <code>{host}</code>, <code>{port}</code> [, <code>{flags}</code>])                   <a name="uv.tcp_bind()"></a><code class="help-tag-right">uv.tcp_bind()</code></div>
<div class="old-help-para">                &gt; method form <code>tcp:bind(host, port, [flags])</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>tcp</code>: <code>uv_tcp_t userdata</code>
</div><div class="help-li" style=""> <code>host</code>: <code>string</code>
</div><div class="help-li" style=""> <code>port</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>flags</code>: <code>table</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>ipv6only</code>: <code>boolean</code>
</div></div>
<div class="old-help-para">                Bind the handle to an host and port. <code>host</code> should be an IP
                address and not a domain name. Any <code>flags</code> are set with a
                table with field <code>ipv6only</code> equal to <code>true</code> or <code>false</code>.</div>
<div class="old-help-para">                When the port is already taken, you can expect to see an
                <code>EADDRINUSE</code> error from either <code>uv.tcp_bind()</code>, <a href="luvref.html#uv.listen()">uv.listen()</a>
                or <a href="luvref.html#uv.tcp_connect()">uv.tcp_connect()</a>. That is, a successful call to this
                function does not guarantee that the call to <a href="luvref.html#uv.listen()">uv.listen()</a> or
                <a href="luvref.html#uv.tcp_connect()">uv.tcp_connect()</a> will succeed as well.</div>
<div class="old-help-para">                Use a port of <code>0</code> to let the OS assign an ephemeral port.  You
                can look it up later using <a href="luvref.html#uv.tcp_getsockname()">uv.tcp_getsockname()</a>.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.tcp_getpeername({tcp})                                 <a name="uv.tcp_getpeername()"></a><code class="help-tag-right">uv.tcp_getpeername()</code></div>
<div class="old-help-para">                &gt; method form <code>tcp:getpeername()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>tcp</code>: <code>uv_tcp_t userdata</code>
</div></div>
<div class="old-help-para">                Get the address of the peer connected to the handle.</div>
<div class="old-help-para">                Returns: <code>table</code> or <code>fail</code>
<div class="help-li" style=""> <code>ip</code> : <code>string</code>
</div><div class="help-li" style=""> <code>family</code> : <code>string</code>
</div><div class="help-li" style=""> <code>port</code> : <code>integer</code>
</div></div>
<div class="old-help-para">uv.tcp_getsockname({tcp})                                 <a name="uv.tcp_getsockname()"></a><code class="help-tag-right">uv.tcp_getsockname()</code></div>
<div class="old-help-para">                &gt; method form <code>tcp:getsockname()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>tcp</code>: <code>uv_tcp_t userdata</code>
</div></div>
<div class="old-help-para">                Get the current address to which the handle is bound.</div>
<div class="old-help-para">                Returns: <code>table</code> or <code>fail</code>
<div class="help-li" style=""> <code>ip</code> : <code>string</code>
</div><div class="help-li" style=""> <code>family</code> : <code>string</code>
</div><div class="help-li" style=""> <code>port</code> : <code>integer</code>
</div></div>
<div class="old-help-para">uv.tcp_connect({tcp}, <code>{host}</code>, <code>{port}</code>, <code>{callback}</code>)             <a name="uv.tcp_connect()"></a><code class="help-tag-right">uv.tcp_connect()</code></div>
<div class="old-help-para">                &gt; method form <code>tcp:connect(host, port, callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>tcp</code>: <code>uv_tcp_t userdata</code>
</div><div class="help-li" style=""> <code>host</code>: <code>string</code>
</div><div class="help-li" style=""> <code>port</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div></div>
<div class="old-help-para">                Establish an IPv4 or IPv6 TCP connection.</div>
<div class="old-help-para">                Returns: <code>uv_connect_t userdata</code> or <code>fail</code></div>
<div class="old-help-para"><pre>local client = uv.new_tcp()
client:connect("127.0.0.1", 8080, function (err)
  -- check error and carry on.
end)</pre></div>
<div class="old-help-para">uv.tcp_write_queue_size({tcp})                       <a name="uv.tcp_write_queue_size()"></a><code class="help-tag-right">uv.tcp_write_queue_size()</code></div>
<div class="old-help-para">                &gt; method form <code>tcp:write_queue_size()</code></div>
<div class="old-help-para">                DEPRECATED: Please use <a href="luvref.html#uv.stream_get_write_queue_size()">uv.stream_get_write_queue_size()</a>
                instead.</div>
<div class="old-help-para">uv.tcp_close_reset([{callback}])                          <a name="uv.tcp_close_reset()"></a><code class="help-tag-right">uv.tcp_close_reset()</code></div>
<div class="old-help-para">                &gt; method form <code>tcp:close_reset([callback])</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>tcp</code>: <code>uv_tcp_t userdata</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Resets a TCP connection by sending a RST packet. This is
                accomplished by setting the SO_LINGER socket option with a
                linger interval of zero and then calling <a href="luvref.html#uv.close()">uv.close()</a>. Due to
                some platform inconsistencies, mixing of <a href="luvref.html#uv.shutdown()">uv.shutdown()</a> and
                <code>uv.tcp_close_reset()</code> calls is not allowed.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code>
                                                               <a name="uv.socketpair()"></a><code class="help-tag-right">uv.socketpair()</code>
uv.socketpair([{socktype}, [{protocol}, [{flags1}, [{flags2}]]]])</div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>socktype</code>: <code>string</code>, <code>integer</code> or <code>nil</code> (default: <code>stream</code>)
</div><div class="help-li" style=""> <code>protocol</code>: <code>string</code>, <code>integer</code> or <code>nil</code> (default: 0)
</div><div class="help-li" style=""> <code>flags1</code>: <code>table</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>nonblock</code>: <code>boolean</code> (default: <code>false</code>)
</div><div class="help-li" style=""> <code>flags2</code>: <code>table</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>nonblock</code>: <code>boolean</code> (default: <code>false</code>)
</div></div>
<div class="old-help-para">                Create a pair of connected sockets with the specified
                properties. The resulting handles can be passed to
                <a href="luvref.html#uv.tcp_open()">uv.tcp_open()</a>, used with <a href="luvref.html#uv.spawn()">uv.spawn()</a>, or for any other
                purpose.</div>
<div class="old-help-para">                When specified as a string, <code>socktype</code> must be one of
                <code>"stream"</code>, <code>"dgram"</code>, <code>"raw"</code>, <code>"rdm"</code>, or <code>"seqpacket"</code>.</div>
<div class="old-help-para">                When <code>protocol</code> is set to 0 or nil, it will be automatically
                chosen based on the socket's domain and type. When <code>protocol</code>
                is specified as a string, it will be looked up using the
                <code>getprotobyname(3)</code> function (examples: <code>"ip"</code>, <code>"icmp"</code>,
                <code>"tcp"</code>, <code>"udp"</code>, etc).</div>
<div class="old-help-para">                Flags:
<div class="help-li" style=""> <code>nonblock</code>: Opens the specified socket handle for
                   <code>OVERLAPPED</code> or <code>FIONBIO</code>/`O_NONBLOCK` I/O usage. This is
                   recommended for handles that will be used by libuv, and not
                   usually recommended otherwise.
</div></div>
<div class="old-help-para">                Equivalent to <code>socketpair(2)</code> with a domain of <code>AF_UNIX</code>.</div>
<div class="old-help-para">                Returns: <code>table</code> or <code>fail</code>
<div class="help-li" style=""> <code>[1, 2]</code> : <code>integer</code> (file descriptor)
</div></div>
<div class="old-help-para"><pre>-- Simple read/write with tcp
local fds = uv.socketpair(nil, nil, {nonblock=true}, {nonblock=true})

local sock1 = uv.new_tcp()
sock1:open(fds[1])

local sock2 = uv.new_tcp()
sock2:open(fds[2])

sock1:write("hello")
sock2:read_start(function(err, chunk)
  assert(not err, err)
  print(chunk)
end)</pre></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_pipe_t</code> — Pipe handle<span class="help-heading-tags">                              <a name="luv-pipe-handle"></a><span class="help-tag">luv-pipe-handle</span> <a name="uv_pipe_t"></a><span class="help-tag">uv_pipe_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> and <a href="luvref.html#uv_stream_t">uv_stream_t</a> functions also apply.</div>
<div class="old-help-para">Pipe handles provide an abstraction over local domain sockets on Unix and
named pipes on Windows.</div>
<div class="old-help-para"><pre>local pipe = uv.new_pipe(false)

pipe:bind('/tmp/sock.test')

pipe:listen(128, function()
  local client = uv.new_pipe(false)
  pipe:accept(client)
  client:write("hello!\n")
  client:close()
end)</pre></div>
<div class="old-help-para">uv.new_pipe([{ipc}])                                             <a name="uv.new_pipe()"></a><code class="help-tag-right">uv.new_pipe()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>ipc</code>: <code>boolean</code> or <code>nil</code> (default: <code>false</code>)
</div></div>
<div class="old-help-para">                Creates and initializes a new <a href="luvref.html#uv_pipe_t">uv_pipe_t</a>. Returns the Lua
                userdata wrapping it. The <code>ipc</code> argument is a boolean to
                indicate if this pipe will be used for handle passing between
                processes.</div>
<div class="old-help-para">                Returns: <code>uv_pipe_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.pipe_open({pipe}, <code>{fd}</code>)                                      <a name="uv.pipe_open()"></a><code class="help-tag-right">uv.pipe_open()</code></div>
<div class="old-help-para">                &gt; method form <code>pipe:open(fd)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>pipe</code>: <code>uv_pipe_t userdata</code>
</div><div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Open an existing file descriptor or <a href="luvref.html#uv_handle_t">uv_handle_t</a> as a
                pipe.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">                Note: The file descriptor is set to non-blocking mode.</div>
<div class="old-help-para">uv.pipe_bind({pipe}, <code>{name}</code>)                                    <a name="uv.pipe_bind()"></a><code class="help-tag-right">uv.pipe_bind()</code></div>
<div class="old-help-para">                &gt; method form <code>pipe:bind(name)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>pipe</code>: <code>uv_pipe_t userdata</code>
</div><div class="help-li" style=""> <code>name</code>: <code>string</code>
</div></div>
<div class="old-help-para">                Bind the pipe to a file path (Unix) or a name (Windows).</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">                Note: Paths on Unix get truncated to
                sizeof(sockaddr_un.sun_path) bytes, typically between 92 and
                108 bytes.</div>
<div class="old-help-para">uv.pipe_connect({pipe}, <code>{name}</code> [, <code>{callback}</code>])               <a name="uv.pipe_connect()"></a><code class="help-tag-right">uv.pipe_connect()</code></div>
<div class="old-help-para">                &gt; method form <code>pipe:connect(name, [callback])</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>pipe</code>: <code>uv_pipe_t userdata</code>
</div><div class="help-li" style=""> <code>name</code>: <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div></div>
<div class="old-help-para">                Connect to the Unix domain socket or the named pipe.</div>
<div class="old-help-para">                Returns: <code>uv_connect_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">                Note: Paths on Unix get truncated to
                sizeof(sockaddr_un.sun_path) bytes, typically between 92 and
                108 bytes.</div>
<div class="old-help-para">uv.pipe_getsockname({pipe})                              <a name="uv.pipe_getsockname()"></a><code class="help-tag-right">uv.pipe_getsockname()</code></div>
<div class="old-help-para">                &gt; method form <code>pipe:getsockname()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>pipe</code>: <code>uv_pipe_t userdata</code>
</div></div>
<div class="old-help-para">                Get the name of the Unix domain socket or the named pipe.</div>
<div class="old-help-para">                Returns: <code>string</code> or <code>fail</code></div>
<div class="old-help-para">uv.pipe_getpeername({pipe})                              <a name="uv.pipe_getpeername()"></a><code class="help-tag-right">uv.pipe_getpeername()</code></div>
<div class="old-help-para">                &gt; method form <code>pipe:getpeername()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>pipe</code>: <code>uv_pipe_t userdata</code>
</div></div>
<div class="old-help-para">                Get the name of the Unix domain socket or the named pipe to
                which the handle is connected.</div>
<div class="old-help-para">                Returns: <code>string</code> or <code>fail</code></div>
<div class="old-help-para">uv.pipe_pending_instances({pipe}, <code>{count}</code>)         <a name="uv.pipe_pending_instances()"></a><code class="help-tag-right">uv.pipe_pending_instances()</code></div>
<div class="old-help-para">                &gt; method form <code>pipe:pending_instances(count)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>pipe</code>: <code>uv_pipe_t userdata</code>
</div><div class="help-li" style=""> <code>count</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Set the number of pending pipe instance handles when the pipe
                server is waiting for connections.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para">                Note: This setting applies to Windows only.</div>
<div class="old-help-para">uv.pipe_pending_count({pipe})                          <a name="uv.pipe_pending_count()"></a><code class="help-tag-right">uv.pipe_pending_count()</code></div>
<div class="old-help-para">                &gt; method form <code>pipe:pending_count()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>pipe</code>: <code>uv_pipe_t userdata</code>
</div></div>
<div class="old-help-para">                Returns the pending pipe count for the named pipe.</div>
<div class="old-help-para">                Returns: <code>integer</code></div>
<div class="old-help-para">uv.pipe_pending_type({pipe})                            <a name="uv.pipe_pending_type()"></a><code class="help-tag-right">uv.pipe_pending_type()</code></div>
<div class="old-help-para">                &gt; method form <code>pipe:pending_type()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>pipe</code>: <code>uv_pipe_t userdata</code>
</div></div>
<div class="old-help-para">                Used to receive handles over IPC pipes.</div>
<div class="old-help-para">                First - call <a href="luvref.html#uv.pipe_pending_count()">uv.pipe_pending_count()</a>, if it's &gt; 0 then
                initialize a handle of the given type, returned by
                <code>uv.pipe_pending_type()</code> and call <code>uv.accept(pipe, handle)</code> .</div>
<div class="old-help-para">                Returns: <code>string</code></div>
<div class="old-help-para">uv.pipe_chmod({pipe}, <code>{flags}</code>)                                 <a name="uv.pipe_chmod()"></a><code class="help-tag-right">uv.pipe_chmod()</code></div>
<div class="old-help-para">                &gt; method form <code>pipe:chmod(flags)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>pipe</code>: <code>uv_pipe_t userdata</code>
</div><div class="help-li" style=""> <code>flags</code>: <code>string</code>
</div></div>
<div class="old-help-para">                Alters pipe permissions, allowing it to be accessed from
                processes run by different users. Makes the pipe writable or
                readable by all users. <code>flags</code> are: <code>"r"</code>, <code>"w"</code>, <code>"rw"</code>, or
                <code>"wr"</code> where <code>r</code> is <code>READABLE</code> and <code>w</code> is <code>WRITABLE</code>. This
                function is blocking.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.pipe({read_flags}, <code>{write_flags}</code>)                                 <a name="uv.pipe()"></a><code class="help-tag-right">uv.pipe()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>read_flags</code>: <code>table</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>nonblock</code>: <code>boolean</code> (default: <code>false</code>)
</div><div class="help-li" style=""> <code>write_flags</code>: <code>table</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>nonblock</code>: <code>boolean</code> (default: <code>false</code>)
</div></div>
<div class="old-help-para">                Create a pair of connected pipe handles. Data may be written
                to the <code>write</code> fd and read from the <code>read</code> fd. The resulting
                handles can be passed to <code>pipe_open</code>, used with <code>spawn</code>, or
                for any other purpose.</div>
<div class="old-help-para">                Flags:
<div class="help-li" style=""> <code>nonblock</code>: Opens the specified socket handle for
                   <code>OVERLAPPED</code> or <code>FIONBIO</code>/`O_NONBLOCK` I/O usage. This is
                   recommended for handles that will be used by libuv, and not
                   usually recommended otherwise.
</div></div>
<div class="old-help-para">                Equivalent to <code>pipe(2)</code> with the <code>O_CLOEXEC</code> flag set.</div>
<div class="old-help-para">                Returns: <code>table</code> or <code>fail</code>
<div class="help-li" style=""> <code>read</code> : <code>integer</code> (file descriptor)
</div><div class="help-li" style=""> <code>write</code> : <code>integer</code> (file descriptor)
</div></div>
<div class="old-help-para"><pre>-- Simple read/write with pipe_open
local fds = uv.pipe({nonblock=true}, {nonblock=true})

local read_pipe = uv.new_pipe()
read_pipe:open(fds.read)

local write_pipe = uv.new_pipe()
write_pipe:open(fds.write)

write_pipe:write("hello")
read_pipe:read_start(function(err, chunk)
  assert(not err, err)
  print(chunk)
end)</pre></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_tty_t</code> — TTY handle<span class="help-heading-tags">                                  <a name="luv-tty-handle"></a><span class="help-tag">luv-tty-handle</span> <a name="uv_tty_t"></a><span class="help-tag">uv_tty_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> and <a href="luvref.html#uv_stream_t">uv_stream_t</a> functions also apply.</div>
<div class="old-help-para">TTY handles represent a stream for the console.</div>
<div class="old-help-para"><pre>-- Simple echo program
local stdin = uv.new_tty(0, true)
local stdout = uv.new_tty(1, false)

stdin:read_start(function (err, data)
  assert(not err, err)
  if data then
    stdout:write(data)
  else
    stdin:close()
    stdout:close()
  end
end)</pre></div>
<div class="old-help-para">uv.new_tty({fd}, <code>{readable}</code>)                                      <a name="uv.new_tty()"></a><code class="help-tag-right">uv.new_tty()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>readable</code>: <code>boolean</code>
</div></div>
<div class="old-help-para">                Initialize a new TTY stream with the given file descriptor.
                Usually the file descriptor will be:</div>
<div class="old-help-para"><div class="help-li" style=""> 0 - stdin
</div><div class="help-li" style=""> 1 - stdout
</div><div class="help-li" style=""> 2 - stderr
</div></div>
<div class="old-help-para">                On Unix this function will determine the path of the fd of the
                terminal using ttyname_r(3), open it, and use it if the passed
                file descriptor refers to a TTY. This lets libuv put the tty
                in non-blocking mode without affecting other processes that
                share the tty.</div>
<div class="old-help-para">                This function is not thread safe on systems that don’t support
                ioctl TIOCGPTN or TIOCPTYGNAME, for instance OpenBSD and
                Solaris.</div>
<div class="old-help-para">                Returns: <code>uv_tty_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">                Note: If reopening the TTY fails, libuv falls back to blocking
                writes.</div>
<div class="old-help-para">uv.tty_set_mode({tty}, <code>{mode}</code>)                               <a name="uv.tty_set_mode()"></a><code class="help-tag-right">uv.tty_set_mode()</code></div>
<div class="old-help-para">                &gt; method form <code>tty:set_mode(mode)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>tty</code>: <code>uv_tty_t userdata</code>
</div><div class="help-li" style=""> <code>mode</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Set the TTY using the specified terminal mode.</div>
<div class="old-help-para">                Parameter <code>mode</code> is a C enum with the following values:</div>
<div class="old-help-para"><div class="help-li" style=""> 0 - UV_TTY_MODE_NORMAL: Initial/normal terminal mode
</div><div class="help-li" style=""> 1 - UV_TTY_MODE_RAW: Raw input mode (On Windows,
                    ENABLE_WINDOW_INPUT is also enabled)
</div><div class="help-li" style=""> 2 - UV_TTY_MODE_IO: Binary-safe I/O mode for IPC
                    (Unix-only)
</div></div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.tty_reset_mode()                                        <a name="uv.tty_reset_mode()"></a><code class="help-tag-right">uv.tty_reset_mode()</code></div>
<div class="old-help-para">                To be called when the program exits. Resets TTY settings to
                default values for the next process to take over.</div>
<div class="old-help-para">                This function is async signal-safe on Unix platforms but can
                fail with error code <code>EBUSY</code> if you call it when execution is
                inside <a href="luvref.html#uv.tty_set_mode()">uv.tty_set_mode()</a>.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.tty_get_winsize({tty})                                 <a name="uv.tty_get_winsize()"></a><code class="help-tag-right">uv.tty_get_winsize()</code></div>
<div class="old-help-para">                &gt; method form <code>tty:get_winsize()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>tty</code>: <code>uv_tty_t userdata</code>
</div></div>
<div class="old-help-para">                Gets the current Window width and height.</div>
<div class="old-help-para">                Returns: <code>integer, integer</code> or <code>fail</code></div>
<div class="old-help-para">uv.tty_set_vterm_state({state})                       <a name="uv.tty_set_vterm_state()"></a><code class="help-tag-right">uv.tty_set_vterm_state()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>state</code>: <code>string</code>
</div></div>
<div class="old-help-para">                Controls whether console virtual terminal sequences are
                processed by libuv or console. Useful in particular for
                enabling ConEmu support of ANSI X3.64 and Xterm 256 colors.
                Otherwise Windows10 consoles are usually detected
                automatically. State should be one of: <code>"supported"</code> or
                <code>"unsupported"</code>.</div>
<div class="old-help-para">                This function is only meaningful on Windows systems. On Unix
                it is silently ignored.</div>
<div class="old-help-para">                Returns: none</div>
<div class="old-help-para">uv.tty_get_vterm_state()                              <a name="uv.tty_get_vterm_state()"></a><code class="help-tag-right">uv.tty_get_vterm_state()</code></div>
<div class="old-help-para">                Get the current state of whether console virtual terminal
                sequences are handled by libuv or the console. The return
                value is <code>"supported"</code> or <code>"unsupported"</code>.</div>
<div class="old-help-para">                This function is not implemented on Unix, where it returns
                <code>ENOTSUP</code>.</div>
<div class="old-help-para">                Returns: <code>string</code> or <code>fail</code></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_udp_t</code> — UDP handle<span class="help-heading-tags">                                  <a name="luv-udp-handle"></a><span class="help-tag">luv-udp-handle</span> <a name="uv_udp_t"></a><span class="help-tag">uv_udp_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> functions also apply.</div>
<div class="old-help-para">UDP handles encapsulate UDP communication for both clients and servers.</div>
<div class="old-help-para">uv.new_udp([{flags}])                                             <a name="uv.new_udp()"></a><code class="help-tag-right">uv.new_udp()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>flags</code>: <code>table</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>family</code>: <code>string</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>mmsgs</code>: <code>integer</code> or <code>nil</code> (default: <code>1</code>)
</div></div>
<div class="old-help-para">                Creates and initializes a new <a href="luvref.html#uv_udp_t">uv_udp_t</a>. Returns the Lua
                userdata wrapping it. The actual socket is created lazily.</div>
<div class="old-help-para">                When specified, <code>family</code> must be one of <code>"unix"</code>, <code>"inet"</code>,
                <code>"inet6"</code>, <code>"ipx"</code>, <code>"netlink"</code>, <code>"x25"</code>, <code>"ax25"</code>,
                <code>"atmpvc"</code>, <code>"appletalk"</code>, or <code>"packet"</code>.</div>
<div class="old-help-para">                When specified, <code>mmsgs</code> determines the number of messages able
                to be received at one time via <code>recvmmsg(2)</code> (the allocated
                buffer will be sized to be able to fit the specified number of
                max size dgrams). Only has an effect on platforms that support
                <code>recvmmsg(2)</code>.</div>
<div class="old-help-para">                Note: For backwards compatibility reasons, <code>flags</code> can also be
                a string or integer. When it is a string, it will be treated
                like the <code>family</code> key above. When it is an integer, it will be
                used directly as the <code>flags</code> parameter when calling
                <code>uv_udp_init_ex</code>.</div>
<div class="old-help-para">                Returns: <code>uv_udp_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.udp_get_send_queue_size()                      <a name="uv.udp_get_send_queue_size()"></a><code class="help-tag-right">uv.udp_get_send_queue_size()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:get_send_queue_size()</code></div>
<div class="old-help-para">                Returns the handle's send queue size.</div>
<div class="old-help-para">                Returns: <code>integer</code></div>
<div class="old-help-para">uv.udp_get_send_queue_count()                    <a name="uv.udp_get_send_queue_count()"></a><code class="help-tag-right">uv.udp_get_send_queue_count()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:get_send_queue_count()</code></div>
<div class="old-help-para">                Returns the handle's send queue count.</div>
<div class="old-help-para">                Returns: <code>integer</code></div>
<div class="old-help-para">uv.udp_open({udp}, <code>{fd}</code>)                                         <a name="uv.udp_open()"></a><code class="help-tag-right">uv.udp_open()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:open(fd)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div><div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Opens an existing file descriptor or Windows SOCKET as a UDP
                handle.</div>
<div class="old-help-para">                Unix only: The only requirement of the sock argument is that
                it follows the datagram contract (works in unconnected mode,
                supports sendmsg()/recvmsg(), etc). In other words, other
                datagram-type sockets like raw sockets or netlink sockets can
                also be passed to this function.</div>
<div class="old-help-para">                The file descriptor is set to non-blocking mode.</div>
<div class="old-help-para">                Note: The passed file descriptor or SOCKET is not checked for
                its type, but it's required that it represents a valid
                datagram socket.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.udp_bind({udp}, <code>{host}</code>, <code>{port}</code> [, <code>{flags}</code>])                   <a name="uv.udp_bind()"></a><code class="help-tag-right">uv.udp_bind()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:bind(host, port, [flags])</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div><div class="help-li" style=""> <code>host</code>: <code>string</code>
</div><div class="help-li" style=""> <code>port</code>: <code>number</code>
</div><div class="help-li" style=""> <code>flags</code>: <code>table</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>ipv6only</code>: <code>boolean</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>reuseaddr</code>: <code>boolean</code>
</div></div>
<div class="old-help-para">                Bind the UDP handle to an IP address and port. Any <code>flags</code> are
                set with a table with fields <code>reuseaddr</code> or <code>ipv6only</code> equal
                to <code>true</code> or <code>false</code>.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.udp_getsockname({udp})                                 <a name="uv.udp_getsockname()"></a><code class="help-tag-right">uv.udp_getsockname()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:getsockname()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div></div>
<div class="old-help-para">                Get the local IP and port of the UDP handle.</div>
<div class="old-help-para">                Returns: <code>table</code> or <code>fail</code>
<div class="help-li" style=""> <code>ip</code> : <code>string</code>
</div><div class="help-li" style=""> <code>family</code> : <code>string</code>
</div><div class="help-li" style=""> <code>port</code> : <code>integer</code>
</div></div>
<div class="old-help-para">uv.udp_getpeername({udp})                                 <a name="uv.udp_getpeername()"></a><code class="help-tag-right">uv.udp_getpeername()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:getpeername()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div></div>
<div class="old-help-para">                Get the remote IP and port of the UDP handle on connected UDP
                handles.</div>
<div class="old-help-para">                Returns: <code>table</code> or <code>fail</code>
<div class="help-li" style=""> <code>ip</code> : <code>string</code>
</div><div class="help-li" style=""> <code>family</code> : <code>string</code>
</div><div class="help-li" style=""> <code>port</code> : <code>integer</code>
</div></div>
<div class="old-help-para">                                                       <a name="uv.udp_set_membership()"></a><code class="help-tag-right">uv.udp_set_membership()</code>
uv.udp_set_membership({udp}, <code>{multicast_addr}</code>, <code>{interface_addr}</code>, <code>{membership}</code>)</div>
<div class="old-help-para">                &gt; method form
                &gt; <code>udp:set_membership(multicast_addr, interface_addr, membership)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div><div class="help-li" style=""> <code>multicast_addr</code>: <code>string</code>
</div><div class="help-li" style=""> <code>interface_addr</code>: <code>string</code> or <code>nil</code>
</div><div class="help-li" style=""> <code>membership</code>: <code>string</code>
</div></div>
<div class="old-help-para">                Set membership for a multicast address. <code>multicast_addr</code> is
                multicast address to set membership for. <code>interface_addr</code> is
                interface address. <code>membership</code> can be the string <code>"leave"</code> or
                <code>"join"</code>.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">                                                <a name="uv.udp_set_source_membership()"></a><code class="help-tag-right">uv.udp_set_source_membership()</code>
uv.udp_set_source_membership({udp}, <code>{multicast_addr}</code>, <code>{interface_addr}</code>, <code>{source_addr}</code>, <code>{membership}</code>)</div>
<div class="old-help-para">                &gt; method form
                &gt; <code>udp:set_source_membership(multicast_addr, interface_addr, source_addr, membership)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div><div class="help-li" style=""> <code>multicast_addr</code>: <code>string</code>
</div><div class="help-li" style=""> <code>interface_addr</code>: <code>string</code> or <code>nil</code>
</div><div class="help-li" style=""> <code>source_addr</code>: <code>string</code>
</div><div class="help-li" style=""> <code>membership</code>: <code>string</code>
</div></div>
<div class="old-help-para">                Set membership for a source-specific multicast group.
                <code>multicast_addr</code> is multicast address to set membership for.
                <code>interface_addr</code> is interface address. <code>source_addr</code> is source
                address. <code>membership</code> can be the string <code>"leave"</code> or <code>"join"</code>.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.udp_set_multicast_loop({udp}, <code>{on}</code>)             <a name="uv.udp_set_multicast_loop()"></a><code class="help-tag-right">uv.udp_set_multicast_loop()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:set_multicast_loop(on)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div><div class="help-li" style=""> <code>on</code>: <code>boolean</code>
</div></div>
<div class="old-help-para">                Set IP multicast loop flag. Makes multicast packets loop back
                to local sockets.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.udp_set_multicast_ttl({udp}, <code>{ttl}</code>)              <a name="uv.udp_set_multicast_ttl()"></a><code class="help-tag-right">uv.udp_set_multicast_ttl()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:set_multicast_ttl(ttl)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div><div class="help-li" style=""> <code>ttl</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Set the multicast ttl.</div>
<div class="old-help-para">                <code>ttl</code> is an integer 1 through 255.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">                                              <a name="uv.udp_set_multicast_interface()"></a><code class="help-tag-right">uv.udp_set_multicast_interface()</code>
uv.udp_set_multicast_interface({udp}, <code>{interface_addr}</code>)</div>
<div class="old-help-para">                &gt; method form <code>udp:set_multicast_interface(interface_addr)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div><div class="help-li" style=""> <code>interface_addr</code>: <code>string</code>
</div></div>
<div class="old-help-para">                Set the multicast interface to send or receive data on.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.udp_set_broadcast({udp}, <code>{on}</code>)                       <a name="uv.udp_set_broadcast()"></a><code class="help-tag-right">uv.udp_set_broadcast()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:set_broadcast(on)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div><div class="help-li" style=""> <code>on</code>: <code>boolean</code>
</div></div>
<div class="old-help-para">                Set broadcast on or off.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.udp_set_ttl({udp}, <code>{ttl}</code>)                                  <a name="uv.udp_set_ttl()"></a><code class="help-tag-right">uv.udp_set_ttl()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:set_ttl(ttl)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div><div class="help-li" style=""> <code>ttl</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Set the time to live.</div>
<div class="old-help-para">                <code>ttl</code> is an integer 1 through 255.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.udp_send({udp}, <code>{data}</code>, <code>{host}</code>, <code>{port}</code>, <code>{callback}</code>)           <a name="uv.udp_send()"></a><code class="help-tag-right">uv.udp_send()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:send(data, host, port, callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div><div class="help-li" style=""> <code>data</code>: <code>buffer</code>
</div><div class="help-li" style=""> <code>host</code>: <code>string</code>
</div><div class="help-li" style=""> <code>port</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div></div>
<div class="old-help-para">                Send data over the UDP socket. If the socket has not
                previously been bound with <a href="luvref.html#uv.udp_bind()">uv.udp_bind()</a> it will be bound to
                <code>0.0.0.0</code> (the "all interfaces" IPv4 address) and a random
                port number.</div>
<div class="old-help-para">                Returns: <code>uv_udp_send_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.udp_try_send({udp}, <code>{data}</code>, <code>{host}</code>, <code>{port}</code>)               <a name="uv.udp_try_send()"></a><code class="help-tag-right">uv.udp_try_send()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:try_send(data, host, port)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div><div class="help-li" style=""> <code>data</code>: <code>buffer</code>
</div><div class="help-li" style=""> <code>host</code>: <code>string</code>
</div><div class="help-li" style=""> <code>port</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Same as <a href="luvref.html#uv.udp_send()">uv.udp_send()</a>, but won't queue a send request if it
                can't be completed immediately.</div>
<div class="old-help-para">                Returns: <code>integer</code> or <code>fail</code></div>
<div class="old-help-para">uv.udp_recv_start({udp}, <code>{callback}</code>)                       <a name="uv.udp_recv_start()"></a><code class="help-tag-right">uv.udp_recv_start()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:recv_start(callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>data</code>: <code>string</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>addr</code>: <code>table</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>ip</code>: <code>string</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>port</code>: <code>integer</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>family</code>: <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>flags</code>: <code>table</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>partial</code>: <code>boolean</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>mmsg_chunk</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Prepare for receiving data. If the socket has not previously
                been bound with <a href="luvref.html#uv.udp_bind()">uv.udp_bind()</a> it is bound to <code>0.0.0.0</code> (the
                "all interfaces" IPv4 address) and a random port number.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.udp_recv_stop({udp})                                     <a name="uv.udp_recv_stop()"></a><code class="help-tag-right">uv.udp_recv_stop()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:recv_stop()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div></div>
<div class="old-help-para">                Stop listening for incoming datagrams.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.udp_connect({udp}, <code>{host}</code>, <code>{port}</code>)                         <a name="uv.udp_connect()"></a><code class="help-tag-right">uv.udp_connect()</code></div>
<div class="old-help-para">                &gt; method form <code>udp:connect(host, port)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>udp</code>: <code>uv_udp_t userdata</code>
</div><div class="help-li" style=""> <code>host</code>: <code>string</code>
</div><div class="help-li" style=""> <code>port</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Associate the UDP handle to a remote address and port, so
                every message sent by this handle is automatically sent to
                that destination. Calling this function with a NULL addr
                disconnects the handle. Trying to call <code>uv.udp_connect()</code> on
                an already connected handle will result in an <code>EISCONN</code> error.
                Trying to disconnect a handle that is not connected will
                return an <code>ENOTCONN</code> error.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_fs_event_t</code> — FS Event handle<span class="help-heading-tags">              <a name="luv-fs-event-handle"></a><span class="help-tag">luv-fs-event-handle</span> <a name="uv_fs_event_t"></a><span class="help-tag">uv_fs_event_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> functions also apply.</div>
<div class="old-help-para">FS Event handles allow the user to monitor a given path for changes, for
example, if the file was renamed or there was a generic change in it. This
handle uses the best backend for the job on each platform.</div>
<div class="old-help-para">uv.new_fs_event()                                            <a name="uv.new_fs_event()"></a><code class="help-tag-right">uv.new_fs_event()</code></div>
<div class="old-help-para">                Creates and initializes a new <a href="luvref.html#uv_fs_event_t">uv_fs_event_t</a>. Returns the Lua
                userdata wrapping it.</div>
<div class="old-help-para">                Returns: <code>uv_fs_event_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.fs_event_start({fs_event}, <code>{path}</code>, <code>{flags}</code>, <code>{callback}</code>) <a name="uv.fs_event_start()"></a><code class="help-tag">uv.fs_event_start()</code></div>
<div class="old-help-para">                &gt; method form <code>fs_event:start(path, flags, callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fs_event</code>: <code>uv_fs_event_t userdata</code>
</div><div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>flags</code>: <code>table</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>watch_entry</code>: <code>boolean</code> or <code>nil</code> (default: <code>false</code>)
</div><div class="help-li" style="margin-left: 3rem;"> <code>stat</code>: <code>boolean</code> or <code>nil</code> (default: <code>false</code>)
</div><div class="help-li" style="margin-left: 3rem;"> <code>recursive</code>: <code>boolean</code> or <code>nil</code> (default: <code>false</code>)
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>filename</code>: <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>events</code>: <code>table</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>change</code>: <code>boolean</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>rename</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Start the handle with the given callback, which will watch the
                specified path for changes.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.fs_event_stop()                                          <a name="uv.fs_event_stop()"></a><code class="help-tag-right">uv.fs_event_stop()</code></div>
<div class="old-help-para">                &gt; method form <code>fs_event:stop()</code></div>
<div class="old-help-para">                Stop the handle, the callback will no longer be called.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.fs_event_getpath()                                    <a name="uv.fs_event_getpath()"></a><code class="help-tag-right">uv.fs_event_getpath()</code></div>
<div class="old-help-para">                &gt; method form <code>fs_event:getpath()</code></div>
<div class="old-help-para">                Get the path being monitored by the handle.</div>
<div class="old-help-para">                Returns: <code>string</code> or <code>fail</code></div>
<div class="old-help-para"><h2 class="help-heading"><code>uv_fs_poll_t</code> — FS Poll handle<span class="help-heading-tags">                  <a name="luv-fs-poll-handle"></a><span class="help-tag">luv-fs-poll-handle</span> <a name="uv_fs_poll_t"></a><span class="help-tag">uv_fs_poll_t</span></span></h2></div>
<div class="old-help-para">&gt; <a href="luvref.html#uv_handle_t">uv_handle_t</a> functions also apply.</div>
<div class="old-help-para">FS Poll handles allow the user to monitor a given path for changes. Unlike
<a href="luvref.html#uv_fs_event_t">uv_fs_event_t</a>, fs poll handles use <code>stat</code> to detect when a file has changed
so they can work on file systems where fs event handles can't.</div>
<div class="old-help-para">uv.new_fs_poll()                                              <a name="uv.new_fs_poll()"></a><code class="help-tag-right">uv.new_fs_poll()</code></div>
<div class="old-help-para">                Creates and initializes a new <a href="luvref.html#uv_fs_poll_t">uv_fs_poll_t</a>. Returns the Lua
                userdata wrapping it.</div>
<div class="old-help-para">                Returns: <code>uv_fs_poll_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.fs_poll_start({fs_poll}, <code>{path}</code>, <code>{interval}</code>, <code>{callback}</code>) <a name="uv.fs_poll_start()"></a><code class="help-tag">uv.fs_poll_start()</code></div>
<div class="old-help-para">                &gt; method form <code>fs_poll:start(path, interval, callback)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fs_event</code>: <code>uv_fs_event_t userdata</code>
</div><div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>interval</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>prev</code>: <code>table</code> or <code>nil</code> (see <code>uv.fs_stat</code>)
</div><div class="help-li" style="margin-left: 3rem;"> <code>curr</code>: <code>table</code> or <code>nil</code> (see <code>uv.fs_stat</code>)
</div></div>
<div class="old-help-para">                Check the file at <code>path</code> for changes every <code>interval</code>
                milliseconds.</div>
<div class="old-help-para">                Note: For maximum portability, use multi-second intervals.
                Sub-second intervals will not detect all changes on many file
                systems.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.fs_poll_stop()                                            <a name="uv.fs_poll_stop()"></a><code class="help-tag-right">uv.fs_poll_stop()</code></div>
<div class="old-help-para">                &gt; method form <code>fs_poll:stop()</code></div>
<div class="old-help-para">                Stop the handle, the callback will no longer be called.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.fs_poll_getpath()                                      <a name="uv.fs_poll_getpath()"></a><code class="help-tag-right">uv.fs_poll_getpath()</code></div>
<div class="old-help-para">                &gt; method form <code>fs_poll:getpath()</code></div>
<div class="old-help-para">                Get the path being monitored by the handle.</div>
<div class="old-help-para">                Returns: <code>string</code> or <code>fail</code></div>
<div class="old-help-para"><h2 class="help-heading">FILE SYSTEM OPERATIONS<span class="help-heading-tags">                      <a name="luv-file-system-operations"></a><span class="help-tag">luv-file-system-operations</span> <a name="uv_fs_t"></a><span class="help-tag">uv_fs_t</span></span></h2></div>
<div class="old-help-para">Most file system functions can operate synchronously or asynchronously. When a
synchronous version is called (by omitting a callback), the function will
immediately return the results of the FS call. When an asynchronous version is
called (by providing a callback), the function will immediately return a
<code>uv_fs_t userdata</code> and asynchronously execute its callback; if an error is
encountered, the first and only argument passed to the callback will be the
<code>err</code> error string; if the operation completes successfully, the first
argument will be <code>nil</code> and the remaining arguments will be the results of the
FS call.</div>
<div class="old-help-para">Synchronous and asynchronous versions of <code>readFile</code> (with naive error
handling) are implemented below as an example:</div>
<div class="old-help-para"><pre>local function readFileSync(path)
  local fd = assert(uv.fs_open(path, "r", 438))
  local stat = assert(uv.fs_fstat(fd))
  local data = assert(uv.fs_read(fd, stat.size, 0))
  assert(uv.fs_close(fd))
  return data
end

local data = readFileSync("main.lua")
print("synchronous read", data)</pre></div>
<div class="old-help-para"><pre>local function readFile(path, callback)
  uv.fs_open(path, "r", 438, function(err, fd)
    assert(not err, err)
    uv.fs_fstat(fd, function(err, stat)
      assert(not err, err)
      uv.fs_read(fd, stat.size, 0, function(err, data)
        assert(not err, err)
        uv.fs_close(fd, function(err)
          assert(not err, err)
          return callback(data)
        end)
      end)
    end)
  end)
end

readFile("main.lua", function(data)
  print("asynchronous read", data)
end)</pre></div>
<div class="old-help-para">uv.fs_close({fd} [, <code>{callback}</code>])                                 <a name="uv.fs_close()"></a><code class="help-tag-right">uv.fs_close()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>close(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_open({path}, <code>{flags}</code>, <code>{mode}</code> [, <code>{callback}</code>])                <a name="uv.fs_open()"></a><code class="help-tag-right">uv.fs_open()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>flags</code>: <code>string</code> or <code>integer</code>
</div><div class="help-li" style=""> <code>mode</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>fd</code>: <code>integer</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>open(2)</code>. Access <code>flags</code> may be an integer or
                one of: <code>"r"</code>, <code>"rs"</code>, <code>"sr"</code>, <code>"r+"</code>, <code>"rs+"</code>, <code>"sr+"</code>,
                <code>"w"</code>, <code>"wx"</code>, <code>"xw"</code>, <code>"w+"</code>, <code>"wx+"</code>, <code>"xw+"</code>, <code>"a"</code>,
                <code>"ax"</code>, <code>"xa"</code>, <code>"a+"</code>, <code>"ax+"</code>, or "`xa+`".</div>
<div class="old-help-para">                Returns (sync version): <code>integer</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">                Note: On Windows, libuv uses <code>CreateFileW</code> and thus the file
                is always opened in binary mode. Because of this, the
                <code>O_BINARY</code> and <code>O_TEXT</code> flags are not supported.</div>
<div class="old-help-para">uv.fs_read({fd}, <code>{size}</code> [, <code>{offset}</code> [, <code>{callback}</code>]])              <a name="uv.fs_read()"></a><code class="help-tag-right">uv.fs_read()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>size</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>offset</code>: <code>integer</code> or <code>nil</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>data</code>: <code>string</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>preadv(2)</code>. Returns any data. An empty string
                indicates EOF.</div>
<div class="old-help-para">                If <code>offset</code> is nil or omitted, it will default to <code>-1</code>, which
                indicates '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+luvref.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/luvref.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20indicates%20EOF.%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20If%20%60offset%60%20is%20nil%20or%20omitted%2C%20it%20will%20default%20to%20%60-1%60%2C%20which%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20indicates%20'use%20and%20update%20the%20current%20file%20offset.'%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Note%3A%20When%20%60offset%60%20is%20%3E%3D%200%2C%20the%20current%20file%20offset%20will%20not%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20be%20updated%20by%20the%20read.%0D%60%60%60">use</a> and update the current file offset.'</div>
<div class="old-help-para">                Note: When <code>offset</code> is &gt;= 0, the current file offset will not
                be updated by the read.</div>
<div class="old-help-para">                Returns (sync version): <code>string</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_unlink({path} [, <code>{callback}</code>])                             <a name="uv.fs_unlink()"></a><code class="help-tag-right">uv.fs_unlink()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>unlink(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_write({fd}, <code>{data}</code> [, <code>{offset}</code> [, <code>{callback}</code>]])            <a name="uv.fs_write()"></a><code class="help-tag-right">uv.fs_write()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>data</code>: <code>buffer</code>
</div><div class="help-li" style=""> <code>offset</code>: <code>integer</code> or <code>nil</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>bytes</code>: <code>integer</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>pwritev(2)</code>. Returns the number of bytes
                written.</div>
<div class="old-help-para">                If <code>offset</code> is nil or omitted, it will default to <code>-1</code>, which
                indicates '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+luvref.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/luvref.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20written.%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20If%20%60offset%60%20is%20nil%20or%20omitted%2C%20it%20will%20default%20to%20%60-1%60%2C%20which%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20indicates%20'use%20and%20update%20the%20current%20file%20offset.'%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Note%3A%20When%20%60offset%60%20is%20%3E%3D%200%2C%20the%20current%20file%20offset%20will%20not%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20be%20updated%20by%20the%20write.%0D%60%60%60">use</a> and update the current file offset.'</div>
<div class="old-help-para">                Note: When <code>offset</code> is &gt;= 0, the current file offset will not
                be updated by the write.</div>
<div class="old-help-para">                Returns (sync version): <code>integer</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_mkdir({path}, <code>{mode}</code> [, <code>{callback}</code>])                       <a name="uv.fs_mkdir()"></a><code class="help-tag-right">uv.fs_mkdir()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>mode</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>mkdir(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_mkdtemp({template} [, <code>{callback}</code>])                       <a name="uv.fs_mkdtemp()"></a><code class="help-tag-right">uv.fs_mkdtemp()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>template</code>: <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>path</code>: <code>string</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>mkdtemp(3)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>string</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_mkstemp({template} [, <code>{callback}</code>])                       <a name="uv.fs_mkstemp()"></a><code class="help-tag-right">uv.fs_mkstemp()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>template</code>: <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>fd</code>: <code>integer</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>path</code>: <code>string</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>mkstemp(3)</code>. Returns a temporary file handle
                and filename.</div>
<div class="old-help-para">                Returns (sync version): <code>integer, string</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_rmdir({path} [, <code>{callback}</code>])                               <a name="uv.fs_rmdir()"></a><code class="help-tag-right">uv.fs_rmdir()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>rmdir(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_scandir({path} [, <code>{callback}</code>])                           <a name="uv.fs_scandir()"></a><code class="help-tag-right">uv.fs_scandir()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>uv_fs_t userdata</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>scandir(3)</code>, with a slightly different API.
                Returns a handle that the user can pass to
                <a href="luvref.html#uv.fs_scandir_next()">uv.fs_scandir_next()</a>.</div>
<div class="old-help-para">                Note: This function can be used synchronously or
                asynchronously. The request userdata is always synchronously
                returned regardless of whether a callback is provided and the
                same userdata is passed to the callback if it is provided.</div>
<div class="old-help-para">                Returns: <code>uv_fs_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.fs_scandir_next({fs})                                  <a name="uv.fs_scandir_next()"></a><code class="help-tag-right">uv.fs_scandir_next()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fs</code>: <code>uv_fs_t userdata</code>
</div></div>
<div class="old-help-para">                Called on a <a href="luvref.html#uv_fs_t">uv_fs_t</a> returned by <a href="luvref.html#uv.fs_scandir()">uv.fs_scandir()</a> to get the
                next directory entry data as a <code>name, type</code> pair. When there
                are no more entries, <code>nil</code> is returned.</div>
<div class="old-help-para">                Note: This function only has a synchronous version. See
                <a href="luvref.html#uv.fs_opendir()">uv.fs_opendir()</a> and its related functions for an
                asynchronous version.</div>
<div class="old-help-para">                Returns: <code>string, string</code> or <code>nil</code> or <code>fail</code></div>
<div class="old-help-para">uv.fs_stat({path} [, <code>{callback}</code>])                                 <a name="uv.fs_stat()"></a><code class="help-tag-right">uv.fs_stat()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>stat</code>: <code>table</code> or <code>nil</code> (see below)
</div></div>
<div class="old-help-para">                Equivalent to <code>stat(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>table</code> or <code>fail</code>
<div class="help-li" style=""> <code>dev</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>mode</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>nlink</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>uid</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>gid</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>rdev</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>ino</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>size</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>blksize</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>blocks</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>flags</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>gen</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>atime</code> : <code>table</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>sec</code> : <code>integer</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>nsec</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>mtime</code> : <code>table</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>sec</code> : <code>integer</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>nsec</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>ctime</code> : <code>table</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>sec</code> : <code>integer</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>nsec</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>birthtime</code> : <code>table</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>sec</code> : <code>integer</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>nsec</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>type</code> : <code>string</code>
</div></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_fstat({fd} [, <code>{callback}</code>])                                 <a name="uv.fs_fstat()"></a><code class="help-tag-right">uv.fs_fstat()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>stat</code>: <code>table</code> or <code>nil</code> (see <code>uv.fs_stat</code>)
</div></div>
<div class="old-help-para">                Equivalent to <code>fstat(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>table</code> or <code>fail</code> (see <code>uv.fs_stat</code>)</div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_lstat({path} [, <code>{callback}</code>])                               <a name="uv.fs_lstat()"></a><code class="help-tag-right">uv.fs_lstat()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>stat</code>: <code>table</code> or <code>nil</code> (see <code>uv.fs_stat</code>)
</div></div>
<div class="old-help-para">                Equivalent to <code>lstat(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>table</code> or <code>fail</code> (see <a href="luvref.html#uv.fs_stat()">uv.fs_stat()</a>)</div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_rename({path}, <code>{new_path}</code> [, <code>{callback}</code>])                 <a name="uv.fs_rename()"></a><code class="help-tag-right">uv.fs_rename()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>new_path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>rename(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_fsync({fd} [, <code>{callback}</code>])                                 <a name="uv.fs_fsync()"></a><code class="help-tag-right">uv.fs_fsync()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>fsync(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_fdatasync({fd} [, <code>{callback}</code>])                         <a name="uv.fs_fdatasync()"></a><code class="help-tag-right">uv.fs_fdatasync()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>fdatasync(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_ftruncate({fd}, <code>{offset}</code> [, <code>{callback}</code>])               <a name="uv.fs_ftruncate()"></a><code class="help-tag-right">uv.fs_ftruncate()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>offset</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>ftruncate(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">                                                              <a name="uv.fs_sendfile()"></a><code class="help-tag-right">uv.fs_sendfile()</code>
uv.fs_sendfile({out_fd}, <code>{in_fd}</code>, <code>{in_offset}</code>, <code>{size}</code> [, <code>{callback}</code>])</div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>out_fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>in_fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>in_offset</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>size</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>bytes</code>: <code>integer</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Limited equivalent to <code>sendfile(2)</code>. Returns the number of
                bytes written.</div>
<div class="old-help-para">                Returns (sync version): <code>integer</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_access({path}, <code>{mode}</code> [, <code>{callback}</code>])                     <a name="uv.fs_access()"></a><code class="help-tag-right">uv.fs_access()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>mode</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>permission</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>access(2)</code> on Unix. Windows uses
                <code>GetFileAttributesW()</code>. Access <code>mode</code> can be an integer or a
                string containing <code>"R"</code> or <code>"W"</code> or <code>"X"</code>. Returns <code>true</code> or
                <code>false</code> indicating access permission.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_chmod({path}, <code>{mode}</code> [, <code>{callback}</code>])                       <a name="uv.fs_chmod()"></a><code class="help-tag-right">uv.fs_chmod()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>mode</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>chmod(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_fchmod({fd}, <code>{mode}</code> [, <code>{callback}</code>])                       <a name="uv.fs_fchmod()"></a><code class="help-tag-right">uv.fs_fchmod()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>mode</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>fchmod(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_utime({path}, <code>{atime}</code>, <code>{mtime}</code> [, <code>{callback}</code>])             <a name="uv.fs_utime()"></a><code class="help-tag-right">uv.fs_utime()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>atime</code>: <code>number</code>
</div><div class="help-li" style=""> <code>mtime</code>: <code>number</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>utime(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_futime({fd}, <code>{atime}</code>, <code>{mtime}</code> [, <code>{callback}</code>])             <a name="uv.fs_futime()"></a><code class="help-tag-right">uv.fs_futime()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>atime</code>: <code>number</code>
</div><div class="help-li" style=""> <code>mtime</code>: <code>number</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>futime(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_lutime({path}, <code>{atime}</code>, <code>{mtime}</code> [, <code>{callback}</code>])           <a name="uv.fs_lutime()"></a><code class="help-tag-right">uv.fs_lutime()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>atime</code>: <code>number</code>
</div><div class="help-li" style=""> <code>mtime</code>: <code>number</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>lutime(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_link({path}, <code>{new_path}</code> [, <code>{callback}</code>])                     <a name="uv.fs_link()"></a><code class="help-tag-right">uv.fs_link()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>new_path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>link(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_symlink({path}, <code>{new_path}</code> [, <code>{flags}</code> [, <code>{callback}</code>]])   <a name="uv.fs_symlink()"></a><code class="help-tag">uv.fs_symlink()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>new_path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>flags</code>: <code>table</code>, <code>integer</code>, or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>dir</code>: <code>boolean</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>junction</code>: <code>boolean</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>symlink(2)</code>. If the <code>flags</code> parameter is
                omitted, then the 3rd parameter will be treated as the
                <code>callback</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_readlink({path} [, <code>{callback}</code>])                         <a name="uv.fs_readlink()"></a><code class="help-tag-right">uv.fs_readlink()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>path</code>: <code>string</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>readlink(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>string</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_realpath({path} [, <code>{callback}</code>])                         <a name="uv.fs_realpath()"></a><code class="help-tag-right">uv.fs_realpath()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>path</code>: <code>string</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>realpath(3)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>string</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_chown({path}, <code>{uid}</code>, <code>{gid}</code> [, <code>{callback}</code>])                 <a name="uv.fs_chown()"></a><code class="help-tag-right">uv.fs_chown()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>uid</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>gid</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>chown(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_fchown({fd}, <code>{uid}</code>, <code>{gid}</code> [, <code>{callback}</code>])                 <a name="uv.fs_fchown()"></a><code class="help-tag-right">uv.fs_fchown()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>uid</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>gid</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>fchown(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_lchown({fd}, <code>{uid}</code>, <code>{gid}</code> [, <code>{callback}</code>])                 <a name="uv.fs_lchown()"></a><code class="help-tag-right">uv.fs_lchown()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>uid</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>gid</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>lchown(2)</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_copyfile({path}, <code>{new_path}</code> [, <code>{flags}</code> [, <code>{callback}</code>]]) <a name="uv.fs_copyfile()"></a><code class="help-tag">uv.fs_copyfile()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>new_path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>flags</code>: <code>table</code>, <code>integer</code>, or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>excl</code>: <code>boolean</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>ficlone</code>: <code>boolean</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>ficlone_force</code>: <code>boolean</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Copies a file from path to new_path. If the <code>flags</code> parameter
                is omitted, then the 3rd parameter will be treated as the
                <code>callback</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_opendir({path} [, <code>{callback}</code> [, <code>{entries}</code>]])             <a name="uv.fs_opendir()"></a><code class="help-tag-right">uv.fs_opendir()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>dir</code>: <code>luv_dir_t userdata</code> or <code>nil</code>
</div><div class="help-li" style=""> <code>entries</code>: <code>integer</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Opens path as a directory stream. Returns a handle that the
                user can pass to <a href="luvref.html#uv.fs_readdir()">uv.fs_readdir()</a>. The <code>entries</code> parameter
                defines the maximum number of entries that should be returned
                by each call to <a href="luvref.html#uv.fs_readdir()">uv.fs_readdir()</a>.</div>
<div class="old-help-para">                Returns (sync version): <code>luv_dir_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_readdir({dir} [, <code>{callback}</code>])                            <a name="uv.fs_readdir()"></a><code class="help-tag-right">uv.fs_readdir()</code></div>
<div class="old-help-para">                &gt; method form <code>dir:readdir([callback])</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>dir</code>: <code>luv_dir_t userdata</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>entries</code>: <code>table</code> or <code>nil</code> (see below)
</div></div>
<div class="old-help-para">                Iterates over the directory stream <code>luv_dir_t</code> returned by a
                successful <a href="luvref.html#uv.fs_opendir()">uv.fs_opendir()</a> call. A table of data tables is
                returned where the number of entries <code>n</code> is equal to or less
                than the <code>entries</code> parameter used in the associated
                <a href="luvref.html#uv.fs_opendir()">uv.fs_opendir()</a> call.</div>
<div class="old-help-para">                Returns (sync version): <code>table</code> or <code>fail</code>
<div class="help-li" style=""> <code>[1, 2, 3, ..., n]</code> : <code>table</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>name</code> : <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>type</code> : <code>string</code>
</div></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_closedir({dir} [, <code>{callback}</code>])                          <a name="uv.fs_closedir()"></a><code class="help-tag-right">uv.fs_closedir()</code></div>
<div class="old-help-para">                &gt; method form <code>dir:closedir([callback])</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>dir</code>: <code>luv_dir_t userdata</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>success</code>: <code>boolean</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Closes a directory stream returned by a successful
                <a href="luvref.html#uv.fs_opendir()">uv.fs_opendir()</a> call.</div>
<div class="old-help-para">                Returns (sync version): <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_fs_t userdata</code></div>
<div class="old-help-para">uv.fs_statfs({path} [, <code>{callback}</code>])                             <a name="uv.fs_statfs()"></a><code class="help-tag-right">uv.fs_statfs()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>path</code>: <code>string</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>table</code> or <code>nil</code> (see below)
</div></div>
<div class="old-help-para">                Equivalent to <code>statfs(2)</code>.</div>
<div class="old-help-para">                Returns <code>table</code> or <code>nil</code>
<div class="help-li" style=""> <code>type</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>bsize</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>blocks</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>bfree</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>bavail</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>files</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>ffree</code> : <code>integer</code>
</div></div>
<div class="old-help-para"><h2 class="help-heading">THREAD POOL WORK SCHEDULING<span class="help-heading-tags">                    <a name="luv-thread-pool-work-scheduling"></a><span class="help-tag">luv-thread-pool-work-scheduling</span></span></h2></div>
<div class="old-help-para">Libuv provides a threadpool which can be used to run user code and get
notified in the loop thread. This threadpool is internally used to run all
file system operations, as well as <code>getaddrinfo</code> and <code>getnameinfo</code> requests.</div>
<div class="old-help-para"><pre>local function work_callback(a, b)
  return a + b
end

local function after_work_callback(c)
  print("The result is: " .. c)
end

local work = uv.new_work(work_callback, after_work_callback)

work:queue(1, 2)

-- output: "The result is: 3"</pre></div>
<div class="old-help-para">uv.new_work({work_callback}, <code>{after_work_callback}</code>)              <a name="uv.new_work()"></a><code class="help-tag-right">uv.new_work()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>work_callback</code>: <code>function</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>...</code>: <code>threadargs</code> passed to/from
                    <code>uv.queue_work(work_ctx, ...)</code>
</div><div class="help-li" style=""> <code>after_work_callback</code>: <code>function</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>...</code>: <code>threadargs</code> returned from <code>work_callback</code>
</div></div>
<div class="old-help-para">                Creates and initializes a new <code>luv_work_ctx_t</code> (not
                <code>uv_work_t</code>). Returns the Lua userdata wrapping it.</div>
<div class="old-help-para">                Returns: <code>luv_work_ctx_t userdata</code></div>
<div class="old-help-para">uv.queue_work({work_ctx}, <code>{...}</code>)                               <a name="uv.queue_work()"></a><code class="help-tag-right">uv.queue_work()</code></div>
<div class="old-help-para">                &gt; method form <code>work_ctx:queue(...)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>work_ctx</code>: <code>luv_work_ctx_t userdata</code>
</div><div class="help-li" style=""> <code>...</code>: <code>threadargs</code>
</div></div>
<div class="old-help-para">                Queues a work request which will run <code>work_callback</code> in a new
                Lua state in a thread from the threadpool with any additional
                arguments from <code>...</code>. Values returned from <code>work_callback</code> are
                passed to <code>after_work_callback</code>, which is called in the main
                loop thread.</div>
<div class="old-help-para">                Returns: <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para"><h2 class="help-heading">DNS UTILITY FUNCTIONS<span class="help-heading-tags">                                <a name="luv-dns-utility-functions"></a><span class="help-tag">luv-dns-utility-functions</span></span></h2></div>
<div class="old-help-para">uv.getaddrinfo({host}, <code>{service}</code> [, <code>{hints}</code> [, <code>{callback}</code>]])  <a name="uv.getaddrinfo()"></a><code class="help-tag">uv.getaddrinfo()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>host</code>: <code>string</code> or <code>nil</code>
</div><div class="help-li" style=""> <code>service</code>: <code>string</code> or <code>nil</code>
</div><div class="help-li" style=""> <code>hints</code>: <code>table</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>family</code>: <code>string</code> or <code>integer</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>socktype</code>: <code>string</code> or <code>integer</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>protocol</code>: <code>string</code> or <code>integer</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>addrconfig</code>: <code>boolean</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>v4mapped</code>: <code>boolean</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>all</code>: <code>boolean</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>numerichost</code>: <code>boolean</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>passive</code>: <code>boolean</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>numericserv</code>: <code>boolean</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>canonname</code>: <code>boolean</code> or <code>nil</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>addresses</code>: <code>table</code> or <code>nil</code> (see below)
</div></div>
<div class="old-help-para">                Equivalent to <code>getaddrinfo(3)</code>. Either <code>node</code> or <code>service</code> may
                be <code>nil</code> but not both.</div>
<div class="old-help-para">                Valid hint strings for the keys that take a string:
<div class="help-li" style=""> <code>family</code>: <code>"unix"</code>, <code>"inet"</code>, <code>"inet6"</code>, <code>"ipx"</code>,
                  <code>"netlink"</code>, <code>"x25"</code>, <code>"ax25"</code>, <code>"atmpvc"</code>, <code>"appletalk"</code>,
                  or <code>"packet"</code>
</div><div class="help-li" style=""> <code>socktype</code>: <code>"stream"</code>, <code>"dgram"</code>, <code>"raw"</code>, <code>"rdm"</code>, or
                  <code>"seqpacket"</code>
</div><div class="help-li" style=""> <code>protocol</code>: will be looked up using the <code>getprotobyname(3)</code>
                  function (examples: <code>"ip"</code>, <code>"icmp"</code>, <code>"tcp"</code>, <code>"udp"</code>, etc)
</div></div>
<div class="old-help-para">                Returns (sync version): <code>table</code> or <code>fail</code>
<div class="help-li" style=""> <code>[1, 2, 3, ..., n]</code> : <code>table</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>addr</code> : <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>family</code> : <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>port</code> : <code>integer</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>socktype</code> : <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>protocol</code> : <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>canonname</code> : <code>string</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Returns (async version): <code>uv_getaddrinfo_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.getnameinfo({address} [, <code>{callback}</code>])                      <a name="uv.getnameinfo()"></a><code class="help-tag-right">uv.getnameinfo()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>address</code>: <code>table</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>ip</code>: <code>string</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>port</code>: <code>integer</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>family</code>: <code>string</code> or <code>integer</code> or <code>nil</code>
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>host</code>: <code>string</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>service</code>: <code>string</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Equivalent to <code>getnameinfo(3)</code>.</div>
<div class="old-help-para">                When specified, <code>family</code> must be one of <code>"unix"</code>, <code>"inet"</code>,
                <code>"inet6"</code>, <code>"ipx"</code>, <code>"netlink"</code>, <code>"x25"</code>, <code>"ax25"</code>,
                <code>"atmpvc"</code>, <code>"appletalk"</code>, or <code>"packet"</code>.</div>
<div class="old-help-para">                Returns (sync version): <code>string, string</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>uv_getnameinfo_t userdata</code> or <code>fail</code></div>
<div class="old-help-para"><h2 class="help-heading">THREADING AND SYNCHRONIZATION UTILITIES<span class="help-heading-tags"> <a name="luv-threading-and-synchronization-utilities"></a><span class="help-tag">luv-threading-and-synchronization-utilities</span></span></h2></div>
<div class="old-help-para">Libuv provides cross-platform implementations for multiple threading an
synchronization primitives. The API largely follows the pthreads API.</div>
<div class="old-help-para">uv.new_thread([{options}, ] <code>{entry}</code>, <code>{...}</code>)                    <a name="uv.new_thread()"></a><code class="help-tag-right">uv.new_thread()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>options</code>: <code>table</code> or <code>nil</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>stack_size</code>: <code>integer</code> or <code>nil</code>
</div><div class="help-li" style=""> <code>entry</code>: <code>function</code>
</div><div class="help-li" style=""> <code>...</code>: <code>threadargs</code> passed to <code>entry</code>
</div></div>
<div class="old-help-para">                Creates and initializes a <code>luv_thread_t</code> (not <code>uv_thread_t</code>).
                Returns the Lua userdata wrapping it and asynchronously
                executes <code>entry</code>, which can be either a Lua function or a Lua
                function dumped to a string. Additional arguments <code>...</code> are
                passed to the <code>entry</code> function and an optional <code>options</code> table
                may be provided. Currently accepted <code>option</code> fields are
                <code>stack_size</code>.</div>
<div class="old-help-para">                Returns: <code>luv_thread_t userdata</code> or <code>fail</code></div>
<div class="old-help-para">uv.thread_equal({thread}, <code>{other_thread}</code>)                    <a name="uv.thread_equal()"></a><code class="help-tag-right">uv.thread_equal()</code></div>
<div class="old-help-para">                &gt; method form <code>thread:equal(other_thread)</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>thread</code>: <code>luv_thread_t userdata</code>
</div><div class="help-li" style=""> <code>other_thread</code>: <code>luv_thread_t userdata</code>
</div></div>
<div class="old-help-para">                Returns a boolean indicating whether two threads are the same.
                This function is equivalent to the <code>__eq</code> metamethod.</div>
<div class="old-help-para">                Returns: <code>boolean</code></div>
<div class="old-help-para">uv.thread_self()                                              <a name="uv.thread_self()"></a><code class="help-tag-right">uv.thread_self()</code></div>
<div class="old-help-para">                Returns the handle for the thread in which this is called.</div>
<div class="old-help-para">                Returns: <code>luv_thread_t</code></div>
<div class="old-help-para">uv.thread_join({thread})                                      <a name="uv.thread_join()"></a><code class="help-tag-right">uv.thread_join()</code></div>
<div class="old-help-para">                &gt; method form <code>thread:join()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>thread</code>: <code>luv_thread_t userdata</code>
</div></div>
<div class="old-help-para">                Waits for the <code>thread</code> to finish executing its entry function.</div>
<div class="old-help-para">                Returns: <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">uv.sleep({msec})                                                    <a name="uv.sleep()"></a><code class="help-tag-right">uv.sleep()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>msec</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Pauses the thread in which this is called for a number of
                milliseconds.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para"><h2 class="help-heading">MISCELLANEOUS UTILITIES<span class="help-heading-tags">                            <a name="luv-miscellaneous-utilities"></a><span class="help-tag">luv-miscellaneous-utilities</span></span></h2></div>
<div class="old-help-para">uv.exepath()                                                      <a name="uv.exepath()"></a><code class="help-tag-right">uv.exepath()</code></div>
<div class="old-help-para">                Returns the executable path.</div>
<div class="old-help-para">                Returns: <code>string</code> or <code>fail</code></div>
<div class="old-help-para">uv.cwd()                                                              <a name="uv.cwd()"></a><code class="help-tag-right">uv.cwd()</code></div>
<div class="old-help-para">                Returns the current working directory.</div>
<div class="old-help-para">                Returns: <code>string</code> or <code>fail</code></div>
<div class="old-help-para">uv.chdir({cwd})                                                     <a name="uv.chdir()"></a><code class="help-tag-right">uv.chdir()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>cwd</code>: <code>string</code>
</div></div>
<div class="old-help-para">                Sets the current working directory with the string <code>cwd</code>.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.get_process_title()                                  <a name="uv.get_process_title()"></a><code class="help-tag-right">uv.get_process_title()</code></div>
<div class="old-help-para">                Returns the title of the current process.</div>
<div class="old-help-para">                Returns: <code>string</code> or <code>fail</code></div>
<div class="old-help-para">uv.set_process_title({title})                           <a name="uv.set_process_title()"></a><code class="help-tag-right">uv.set_process_title()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>title</code>: <code>string</code>
</div></div>
<div class="old-help-para">                Sets the title of the current process with the string <code>title</code>.</div>
<div class="old-help-para">                Returns: <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.get_total_memory()                                    <a name="uv.get_total_memory()"></a><code class="help-tag-right">uv.get_total_memory()</code></div>
<div class="old-help-para">                Returns the current total system memory in bytes.</div>
<div class="old-help-para">                Returns: <code>number</code></div>
<div class="old-help-para">uv.get_free_memory()                                      <a name="uv.get_free_memory()"></a><code class="help-tag-right">uv.get_free_memory()</code></div>
<div class="old-help-para">                Returns the current free system memory in bytes.</div>
<div class="old-help-para">                Returns: <code>number</code></div>
<div class="old-help-para">uv.get_constrained_memory()                        <a name="uv.get_constrained_memory()"></a><code class="help-tag-right">uv.get_constrained_memory()</code></div>
<div class="old-help-para">                Gets the amount of memory available to the process in bytes
                based on limits imposed by the OS. If there is no such
                constraint, or the constraint is unknown, 0 is returned. Note
                that it is not unusual for this value to be less than or
                greater than the total system memory.</div>
<div class="old-help-para">                Returns: <code>number</code></div>
<div class="old-help-para">uv.resident_set_memory()                              <a name="uv.resident_set_memory()"></a><code class="help-tag-right">uv.resident_set_memory()</code></div>
<div class="old-help-para">                Returns the resident set size (RSS) for the current process.</div>
<div class="old-help-para">                Returns: <code>integer</code> or <code>fail</code></div>
<div class="old-help-para">uv.getrusage()                                                  <a name="uv.getrusage()"></a><code class="help-tag-right">uv.getrusage()</code></div>
<div class="old-help-para">                Returns the resource usage.</div>
<div class="old-help-para">                Returns: <code>table</code> or <code>fail</code>
<div class="help-li" style=""> <code>utime</code> : <code>table</code> (user CPU time used)
</div><div class="help-li" style="margin-left: 3rem;"> <code>sec</code> : <code>integer</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>usec</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>stime</code> : <code>table</code> (system CPU time used)
</div><div class="help-li" style="margin-left: 3rem;"> <code>sec</code> : <code>integer</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>usec</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>maxrss</code> : <code>integer</code> (maximum resident set size)
</div><div class="help-li" style=""> <code>ixrss</code> : <code>integer</code> (integral shared memory size)
</div><div class="help-li" style=""> <code>idrss</code> : <code>integer</code> (integral unshared data size)
</div><div class="help-li" style=""> <code>isrss</code> : <code>integer</code> (integral unshared stack size)
</div><div class="help-li" style=""> <code>minflt</code> : <code>integer</code> (page reclaims (soft page faults))
</div><div class="help-li" style=""> <code>majflt</code> : <code>integer</code> (page faults (hard page faults))
</div><div class="help-li" style=""> <code>nswap</code> : <code>integer</code> (swaps)
</div><div class="help-li" style=""> <code>inblock</code> : <code>integer</code> (block input operations)
</div><div class="help-li" style=""> <code>oublock</code> : <code>integer</code> (block output operations)
</div><div class="help-li" style=""> <code>msgsnd</code> : <code>integer</code> (IPC messages sent)
</div><div class="help-li" style=""> <code>msgrcv</code> : <code>integer</code> (IPC messages received)
</div><div class="help-li" style=""> <code>nsignals</code> : <code>integer</code> (signals received)
</div><div class="help-li" style=""> <code>nvcsw</code> : <code>integer</code> (voluntary context switches)
</div><div class="help-li" style=""> <code>nivcsw</code> : <code>integer</code> (involuntary context switches)
</div></div>
<div class="old-help-para">uv.available_parallelism()                          <a name="uv.available_parallelism()"></a><code class="help-tag-right">uv.available_parallelism()</code></div>
<div class="old-help-para">                Returns an estimate of the default amount of parallelism a
                program should use. Always returns a non-zero value.</div>
<div class="old-help-para">                On Linux, inspects the calling thread’s CPU affinity mask to
                determine if it has been pinned to specific CPUs.</div>
<div class="old-help-para">                On Windows, the available parallelism may be underreported on
                systems with more than 64 logical CPUs.</div>
<div class="old-help-para">                On other platforms, reports the number of CPUs that the
                operating system considers to be online.</div>
<div class="old-help-para">                Returns: <code>integer</code></div>
<div class="old-help-para">uv.cpu_info()                                                    <a name="uv.cpu_info()"></a><code class="help-tag-right">uv.cpu_info()</code></div>
<div class="old-help-para">                Returns information about the CPU(s) on the system as a table
                of tables for each CPU found.</div>
<div class="old-help-para">                Returns: <code>table</code> or <code>fail</code>
<div class="help-li" style=""> <code>[1, 2, 3, ..., n]</code> : <code>table</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>model</code> : <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>speed</code> : <code>number</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>times</code> : <code>table</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>user</code> : <code>number</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>nice</code> : <code>number</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>sys</code> : <code>number</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>idle</code> : <code>number</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>irq</code> : <code>number</code>
</div></div>
<div class="old-help-para">uv.getpid()                                                        <a name="uv.getpid()"></a><code class="help-tag-right">uv.getpid()</code></div>
<div class="old-help-para">                DEPRECATED: Please use <a href="luvref.html#uv.os_getpid()">uv.os_getpid()</a> instead.</div>
<div class="old-help-para">uv.getuid()                                                        <a name="uv.getuid()"></a><code class="help-tag-right">uv.getuid()</code></div>
<div class="old-help-para">                Returns the user ID of the process.</div>
<div class="old-help-para">                Returns: <code>integer</code></div>
<div class="old-help-para">                Note: This is not a libuv function and is not supported on
                Windows.</div>
<div class="old-help-para">uv.getgid()                                                        <a name="uv.getgid()"></a><code class="help-tag-right">uv.getgid()</code></div>
<div class="old-help-para">                Returns the group ID of the process.</div>
<div class="old-help-para">                Returns: <code>integer</code></div>
<div class="old-help-para">                Note: This is not a libuv function and is not supported on
                Windows.</div>
<div class="old-help-para">uv.setuid({id})                                                    <a name="uv.setuid()"></a><code class="help-tag-right">uv.setuid()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>id</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Sets the user ID of the process with the integer <code>id</code>.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para">                Note: This is not a libuv function and is not supported on
                Windows.</div>
<div class="old-help-para">uv.setgid({id})                                                    <a name="uv.setgid()"></a><code class="help-tag-right">uv.setgid()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>id</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Sets the group ID of the process with the integer <code>id</code>.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para">                Note: This is not a libuv function and is not supported on
                Windows.</div>
<div class="old-help-para">uv.hrtime()                                                        <a name="uv.hrtime()"></a><code class="help-tag-right">uv.hrtime()</code></div>
<div class="old-help-para">                Returns a current high-resolution time in nanoseconds as a
                number. This is relative to an arbitrary time in the past. It
                is not related to the time of day and therefore not subject to
                clock drift. The primary use is for measuring time between
                intervals.</div>
<div class="old-help-para">                Returns: <code>number</code></div>
<div class="old-help-para">uv.uptime()                                                        <a name="uv.uptime()"></a><code class="help-tag-right">uv.uptime()</code></div>
<div class="old-help-para">                Returns the current system uptime in seconds.</div>
<div class="old-help-para">                Returns: <code>number</code> or <code>fail</code></div>
<div class="old-help-para">uv.print_all_handles()                                  <a name="uv.print_all_handles()"></a><code class="help-tag-right">uv.print_all_handles()</code></div>
<div class="old-help-para">                Prints all handles associated with the main loop to stderr.
                The format is <code>[flags] handle-type handle-address</code> . Flags are
                <code>R</code> for referenced, <code>A</code> for active and <code>I</code> for internal.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para">                Note: This is not available on Windows.</div>
<div class="old-help-para">                WARNING: This function is meant for ad hoc debugging, there
                are no API/ABI stability guarantees.</div>
<div class="old-help-para">uv.print_active_handles()                            <a name="uv.print_active_handles()"></a><code class="help-tag-right">uv.print_active_handles()</code></div>
<div class="old-help-para">                The same as <a href="luvref.html#uv.print_all_handles()">uv.print_all_handles()</a> except only active
                handles are printed.</div>
<div class="old-help-para">                Returns: Nothing.</div>
<div class="old-help-para">                Note: This is not available on Windows.</div>
<div class="old-help-para">                WARNING: This function is meant for ad hoc debugging, there
                are no API/ABI stability guarantees.</div>
<div class="old-help-para">uv.guess_handle({fd})                                        <a name="uv.guess_handle()"></a><code class="help-tag-right">uv.guess_handle()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>fd</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Used to detect what type of stream should be used with a given
                file descriptor <code>fd</code>. Usually this will be used during
                initialization to guess the type of the stdio streams.</div>
<div class="old-help-para">                Returns: <code>string</code></div>
<div class="old-help-para">uv.gettimeofday()                                            <a name="uv.gettimeofday()"></a><code class="help-tag-right">uv.gettimeofday()</code></div>
<div class="old-help-para">                Cross-platform implementation of <code>gettimeofday(2)</code>. Returns
                the seconds and microseconds of a unix time as a pair.</div>
<div class="old-help-para">                Returns: <code>integer, integer</code> or <code>fail</code></div>
<div class="old-help-para">uv.interface_addresses()                              <a name="uv.interface_addresses()"></a><code class="help-tag-right">uv.interface_addresses()</code></div>
<div class="old-help-para">                Returns address information about the network interfaces on
                the system in a table. Each table key is the name of the
                interface while each associated value is an array of address
                information where fields are <code>ip</code>, <code>family</code>, <code>netmask</code>,
                <code>internal</code>, and <code>mac</code>.</div>
<div class="old-help-para">                Returns: <code>table</code>
<div class="help-li" style=""> <code>[name(s)]</code> : <code>table</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>ip</code> : <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>family</code> : <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>netmask</code> : <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>internal</code> : <code>boolean</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>mac</code> : <code>string</code>
</div></div>
<div class="old-help-para">uv.if_indextoname({ifindex})                               <a name="uv.if_indextoname()"></a><code class="help-tag-right">uv.if_indextoname()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>ifindex</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                IPv6-capable implementation of <code>if_indextoname(3)</code>.</div>
<div class="old-help-para">                Returns: <code>string</code> or <code>fail</code></div>
<div class="old-help-para">uv.if_indextoiid({ifindex})                                 <a name="uv.if_indextoiid()"></a><code class="help-tag-right">uv.if_indextoiid()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>ifindex</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Retrieves a network interface identifier suitable for use in
                an IPv6 scoped address. On Windows, returns the numeric
                <code>ifindex</code> as a string. On all other platforms,
                <a href="luvref.html#uv.if_indextoname()">uv.if_indextoname()</a> is used.</div>
<div class="old-help-para">                Returns: <code>string</code> or <code>fail</code></div>
<div class="old-help-para">uv.loadavg()                                                      <a name="uv.loadavg()"></a><code class="help-tag-right">uv.loadavg()</code></div>
<div class="old-help-para">                Returns the load average as a triad. Not supported on Windows.</div>
<div class="old-help-para">                Returns: <code>number, number, number</code></div>
<div class="old-help-para">uv.os_uname()                                                    <a name="uv.os_uname()"></a><code class="help-tag-right">uv.os_uname()</code></div>
<div class="old-help-para">                Returns system information.</div>
<div class="old-help-para">                Returns: <code>table</code>
<div class="help-li" style=""> <code>sysname</code> : <code>string</code>
</div><div class="help-li" style=""> <code>release</code> : <code>string</code>
</div><div class="help-li" style=""> <code>version</code> : <code>string</code>
</div><div class="help-li" style=""> <code>machine</code> : <code>string</code>
</div></div>
<div class="old-help-para">uv.os_gethostname()                                        <a name="uv.os_gethostname()"></a><code class="help-tag-right">uv.os_gethostname()</code></div>
<div class="old-help-para">                Returns the hostname.</div>
<div class="old-help-para">                Returns: <code>string</code></div>
<div class="old-help-para">uv.os_getenv({name} [, <code>{size}</code>])                                 <a name="uv.os_getenv()"></a><code class="help-tag-right">uv.os_getenv()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>name</code>: <code>string</code>
</div><div class="help-li" style=""> <code>size</code>: <code>integer</code> (default = <code>LUAL_BUFFERSIZE</code>)
</div></div>
<div class="old-help-para">                Returns the environment variable specified by <code>name</code> as
                string. The internal buffer size can be set by defining
                <code>size</code>. If omitted, <code>LUAL_BUFFERSIZE</code> is used. If the
                environment variable exceeds the storage available in the
                internal buffer, <code>ENOBUFS</code> is returned. If no matching
                environment variable exists, <code>ENOENT</code> is returned.</div>
<div class="old-help-para">                Returns: <code>string</code> or <code>fail</code></div>
<div class="old-help-para">                WARNING: This function is not thread safe.</div>
<div class="old-help-para">uv.os_setenv({name}, <code>{value}</code>)                                   <a name="uv.os_setenv()"></a><code class="help-tag-right">uv.os_setenv()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>name</code>: <code>string</code>
</div><div class="help-li" style=""> <code>value</code>: <code>string</code>
</div></div>
<div class="old-help-para">                Sets the environmental variable specified by <code>name</code> with the
                string <code>value</code>.</div>
<div class="old-help-para">                Returns: <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                WARNING: This function is not thread safe.</div>
<div class="old-help-para">uv.os_unsetenv()                                              <a name="uv.os_unsetenv()"></a><code class="help-tag-right">uv.os_unsetenv()</code></div>
<div class="old-help-para">                Returns: <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">                WARNING: This function is not thread safe.</div>
<div class="old-help-para">uv.os_environ()                                                <a name="uv.os_environ()"></a><code class="help-tag-right">uv.os_environ()</code></div>
<div class="old-help-para">                Returns all environmental variables as a dynamic table of
                names associated with their corresponding values.</div>
<div class="old-help-para">                Returns: <code>table</code></div>
<div class="old-help-para">                WARNING: This function is not thread safe.</div>
<div class="old-help-para">uv.os_homedir()                                                <a name="uv.os_homedir()"></a><code class="help-tag-right">uv.os_homedir()</code></div>
<div class="old-help-para">                Returns: <code>string</code> or <code>fail</code></div>
<div class="old-help-para">                WARNING: This function is not thread safe.</div>
<div class="old-help-para">uv.os_tmpdir()                                                  <a name="uv.os_tmpdir()"></a><code class="help-tag-right">uv.os_tmpdir()</code></div>
<div class="old-help-para">                Returns: <code>string</code> or <code>fail</code></div>
<div class="old-help-para">                WARNING: This function is not thread safe.</div>
<div class="old-help-para">uv.os_get_passwd()                                          <a name="uv.os_get_passwd()"></a><code class="help-tag-right">uv.os_get_passwd()</code></div>
<div class="old-help-para">                Returns password file information.</div>
<div class="old-help-para">                Returns: <code>table</code>
<div class="help-li" style=""> <code>username</code> : <code>string</code>
</div><div class="help-li" style=""> <code>uid</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>gid</code> : <code>integer</code>
</div><div class="help-li" style=""> <code>shell</code> : <code>string</code>
</div><div class="help-li" style=""> <code>homedir</code> : <code>string</code>
</div></div>
<div class="old-help-para">uv.os_getpid()                                                  <a name="uv.os_getpid()"></a><code class="help-tag-right">uv.os_getpid()</code></div>
<div class="old-help-para">                Returns the current process ID.</div>
<div class="old-help-para">                Returns: <code>number</code></div>
<div class="old-help-para">uv.os_getppid()                                                <a name="uv.os_getppid()"></a><code class="help-tag-right">uv.os_getppid()</code></div>
<div class="old-help-para">                Returns the parent process ID.</div>
<div class="old-help-para">                Returns: <code>number</code></div>
<div class="old-help-para">uv.os_getpriority({pid})                                   <a name="uv.os_getpriority()"></a><code class="help-tag-right">uv.os_getpriority()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>pid</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Returns the scheduling priority of the process specified by
                <code>pid</code>.</div>
<div class="old-help-para">                Returns: <code>number</code> or <code>fail</code></div>
<div class="old-help-para">uv.os_setpriority({pid}, <code>{priority}</code>)                       <a name="uv.os_setpriority()"></a><code class="help-tag-right">uv.os_setpriority()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>pid</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>priority</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Sets the scheduling priority of the process specified by
                <code>pid</code>. The <code>priority</code> range is between -20 (high priority) and
                19 (low priority).</div>
<div class="old-help-para">                Returns: <code>boolean</code> or <code>fail</code></div>
<div class="old-help-para">uv.random({len}, <code>{flags}</code> [, <code>{callback}</code>])                           <a name="uv.random()"></a><code class="help-tag-right">uv.random()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>len</code>: <code>integer</code>
</div><div class="help-li" style=""> <code>flags</code>: <code>nil</code> (see below)
</div><div class="help-li" style=""> <code>callback</code>: <code>callable</code> (async version) or <code>nil</code> (sync
                  version)
</div><div class="help-li" style="margin-left: 3rem;"> <code>err</code>: <code>nil</code> or <code>string</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>bytes</code>: <code>string</code> or <code>nil</code>
</div></div>
<div class="old-help-para">                Fills a string of length <code>len</code> with cryptographically strong
                random bytes acquired from the system CSPRNG. <code>flags</code> is
                reserved for future extension and must currently be <code>nil</code> or
                <code>0</code> or <code>{}</code>.</div>
<div class="old-help-para">                Short reads are not possible. When less than <code>len</code> random
                bytes are available, a non-zero error value is returned or
                passed to the callback. If the callback is omitted, this
                function is completed synchronously.</div>
<div class="old-help-para">                The synchronous version may block indefinitely when not enough
                entropy is available. The asynchronous version may not ever
                finish when the system is low on entropy.</div>
<div class="old-help-para">                Returns (sync version): <code>string</code> or <code>fail</code></div>
<div class="old-help-para">                Returns (async version): <code>0</code> or <code>fail</code></div>
<div class="old-help-para">uv.translate_sys_error({errcode})                     <a name="uv.translate_sys_error()"></a><code class="help-tag-right">uv.translate_sys_error()</code></div>
<div class="old-help-para">                Parameters:
<div class="help-li" style=""> <code>errcode</code>: <code>integer</code>
</div></div>
<div class="old-help-para">                Returns the libuv error message and error name (both in string
                form, see <code>err</code> and <code>name</code> in <a href="luvref.html#luv-error-handling">luv-error-handling</a>) equivalent
                to the given platform dependent error code: POSIX error codes
                on Unix (the ones stored in errno), and Win32 error codes on
                Windows (those returned by GetLastError() or
                WSAGetLastError()).</div>
<div class="old-help-para">                Returns: <code>string, string</code> or <code>nil</code></div>
<div class="old-help-para"><h2 class="help-heading">METRICS OPERATIONS<span class="help-heading-tags">                                      <a name="luv-metrics-operations"></a><span class="help-tag">luv-metrics-operations</span></span></h2></div>
<div class="old-help-para">uv.metrics_idle_time()                                  <a name="uv.metrics_idle_time()"></a><code class="help-tag-right">uv.metrics_idle_time()</code></div>
<div class="old-help-para">                Retrieve the amount of time the event loop has been idle in
                the kernel’s event provider (e.g. <code>epoll_wait</code>). The call is
                thread safe.</div>
<div class="old-help-para">                The return value is the accumulated time spent idle in the
                kernel’s event provider starting from when the <a href="luvref.html#uv_loop_t">uv_loop_t</a> was
                configured to collect the idle time.</div>
<div class="old-help-para">                Note: The event loop will not begin accumulating the event
                provider’s idle time until calling <code>loop_configure</code> with
                <code>"metrics_idle_time"</code>.</div>
<div class="old-help-para">                Returns: <code>number</code></div>
<div class="old-help-para"><h2 class="help-heading">CREDITS<span class="help-heading-tags">                                                            <a name="luv-credits"></a><span class="help-tag">luv-credits</span></span></h2></div>
<div class="old-help-para">This document is a reformatted version of the LUV documentation, based on
commit c51e705 (5 May 2022) of the luv repository
<a href="https://github.com/luvit/luv/commit/c51e7052ec4f0a25058f70c1b4ee99dd36180e59">https://github.com/luvit/luv/commit/c51e7052ec4f0a25058f70c1b4ee99dd36180e59</a>.</div>
<div class="old-help-para">Included from <a href="https://github.com/nanotee/luv-vimdocs">https://github.com/nanotee/luv-vimdocs</a> with kind permission.</div>

  
  