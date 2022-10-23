---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Nvim" class="section-title" href="#Nvim"> Luvref Txt</a> 

LUV REFERENCE MANUAL


This file documents the Lua bindings for the LibUV library which is used for
Nvim's event-loop and is accessible from Lua via [vim.loop| (e.g., |uv.version()](#vim.loop| (e.g., |uv.version())
is exposed as `vim.loop.version()`).

For information about this manual, see [luv-credits](#luv-credits).

For further examples, see https://github.com/luvit/luv/tree/master/examples.


## <a id="luv luv-intro uv" class="section-title" href="#luv luv-intro uv">Introduction</a> 

The luv (https://github.com/luvit/luv) project provides access to the
multi-platform support library libuv (https://github.com/libuv/libuv) in Lua
code. It was primarily developed for the luvit
(https://github.com/luvit/luvit) project as the built-in `uv` module, but can
be used in other Lua environments.

More information about the core libuv library can be found at the original
libuv documentation page (https://docs.libuv.org/).

TCP Echo Server Example~

Here is a small example showing a TCP echo server:
```
local uv = vim.loop

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
uv.run() -- an explicit run call is necessary outside of luvit

```


Module Layout~

The luv library contains a single Lua module referred to hereafter as `uv` for
simplicity. This module consists mostly of functions with names corresponding
to their original libuv versions. For example, the libuv function
`uv_tcp_bind` has a luv version at [uv.tcp_bind()](#uv.tcp_bind()). Currently, only one
non-function field exists: `uv.constants`, which is a table.

Functions vs Methods~

In addition to having simple functions, luv provides an optional method-style
API. For example, `uv.tcp_bind(server, host, port)` can alternatively be
called as `server:bind(host, port)` . Note that the first argument `server`
becomes the object and `tcp_` is removed from the function name. Method forms
are documented below where they exist.

Synchronous vs Asynchronous Functions~

Functions that accept a callback are asynchronous. These functions may
immediately return results to the caller to indicate their initial status, but
their final execution is deferred until at least the next libuv loop
iteration. After completion, their callbacks are executed with any results
passed to it.

Functions that do not accept a callback are synchronous. These functions
immediately return their results to the caller.

Some (generally FS and DNS) functions can behave either synchronously or
asynchronously. If a callback is provided to these functions, they behave
asynchronously; if no callback is provided, they behave synchronously.

Pseudo-Types~

Some unique types are defined. These are not actual types in Lua, but they are
used here to facilitate documenting consistent behavior:
- `fail`: an assertable `nil, string, string` tuple (see [luv-error-handling](#luv-error-handling))
- `callable`: a `function`; or a `table` or `userdata` with a `__call`
metamethod
- `buffer`: a `string` or a sequential `table` of `string`s
- `threadargs`: variable arguments (`...`) of type `nil`, `boolean`, `number`,
`string`, or `userdata`


## <a id="luv-contents" class="section-title" href="#luv-contents">Contents</a> 

This documentation is mostly a retelling of the libuv API documentation
(https://docs.libuv.org/en/v1.x/api.html) within the context of luv's Lua API.
Low-level implementation details and unexposed C functions and types are not
documented here except for when they are relevant to behavior seen in the Lua
module.

- [luv-error-handling](#luv-error-handling) — Error handling
- [luv-version-checking](#luv-version-checking) — Version checking
- [uv_loop_t](#uv_loop_t) — Event loop
- [uv_req_t](#uv_req_t) — Base request
- [uv_handle_t](#uv_handle_t) — Base handle
- [uv_timer_t](#uv_timer_t) — Timer handle
- [uv_prepare_t](#uv_prepare_t) — Prepare handle
- [uv_check_t](#uv_check_t) — Check handle
- [uv_idle_t](#uv_idle_t) — Idle handle
- [uv_async_t](#uv_async_t) — Async handle
- [uv_poll_t](#uv_poll_t) — Poll handle
- [uv_signal_t](#uv_signal_t) — Signal handle
- [uv_process_t](#uv_process_t) — Process handle
- [uv_stream_t](#uv_stream_t) — Stream handle
- [uv_tcp_t](#uv_tcp_t) — TCP handle
- [uv_pipe_t](#uv_pipe_t) — Pipe handle
- [uv_tty_t](#uv_tty_t) — TTY handle
- [uv_udp_t](#uv_udp_t) — UDP handle
- [uv_fs_event_t](#uv_fs_event_t) — FS Event handle
- [uv_fs_poll_t](#uv_fs_poll_t) — FS Poll handle
- [luv-file-system-operations](#luv-file-system-operations) — File system operations
- [luv-thread-pool-work-scheduling](#luv-thread-pool-work-scheduling) — Thread pool work scheduling
- [luv-dns-utility-functions](#luv-dns-utility-functions) — DNS utility functions
- [luv-threading-and-synchronization-utilities](#luv-threading-and-synchronization-utilities) — Threading and
synchronization utilities
- [luv-miscellaneous-utilities](#luv-miscellaneous-utilities) — Miscellaneous utilities
- [luv-metrics-operations](#luv-metrics-operations) — Metrics operations


## <a id="luv-error-handling" class="section-title" href="#luv-error-handling">Error Handling</a> 

In libuv, errors are negative numbered constants; however, these errors and
the functions used to handle them are not exposed to luv users. Instead, if an
internal error is encountered, the luv function will return to the caller an
assertable `nil, err, name` tuple.

- `nil` idiomatically indicates failure
- `err` is a string with the format `{name}: {message}`
- `{name}` is the error name provided internally by `uv_err_name`
- `{message}` is a human-readable message provided internally by
`uv_strerror`
- `name` is the same string used to construct `err`

This tuple is referred to below as the `fail` pseudo-type.

When a function is called successfully, it will return either a value that is
relevant to the operation of the function, or the integer `0` to indicate
success, or sometimes nothing at all. These cases are documented below.


## <a id="luv-version-checking" class="section-title" href="#luv-version-checking">Version Checking</a> 

### <a id="uv.version()" class="section-title" href="#uv.version()">uv.version()</a>

Returns the libuv version packed into a single integer. 8 bits
are used for each component, with the patch number stored in
the 8 least significant bits. For example, this would be
0x010203 in libuv 1.2.3.

Returns: `integer`

### <a id="uv.version_string()" class="section-title" href="#uv.version_string()">uv.version_string()</a>

Returns the libuv version number as a string. For example,
this would be "1.2.3" in libuv 1.2.3. For non-release
versions, the version suffix is included.

Returns: `string`


## <a id="luv-event-loop uv_loop_t" class="section-title" href="#luv-event-loop uv_loop_t">`Uv_Loop_T` — Event Loop</a> 

The event loop is the central part of libuv's functionality. It takes care of
polling for I/O and scheduling callbacks to be run based on different sources
of events.

In luv, there is an implicit uv loop for every Lua state that loads the
library. You can use this library in an multi-threaded environment as long as
each thread has it's own Lua state with its corresponding own uv loop. This
loop is not directly exposed to users in the Lua module.

### <a id="uv.loop_close()" class="section-title" href="#uv.loop_close()">uv.loop_close()</a>

Closes all internal loop resources. In normal execution, the
loop will automatically be closed when it is garbage collected
by Lua, so it is not necessary to explicitly call
`loop_close()`. Call this function only after the loop has
finished executing and all open handles and requests have been
closed, or it will return `EBUSY`.

Returns: `0` or `fail`

### <a id="uv.run()" class="section-title" href="#uv.run()">uv.run([{mode}])</a>

Parameters:
- `mode`: `string` or `nil` (default: `"default"`)

This function runs the event loop. It will act differently
depending on the specified mode:

- `"default"`: Runs the event loop until there are no more
active and referenced handles or requests. Returns `true`
if [uv.stop()](#uv.stop()) was called and there are still active
handles or requests. Returns `false` in all other cases.

- `"once"`: Poll for I/O once. Note that this function
blocks if there are no pending callbacks. Returns `false`
when done (no active handles or requests left), or `true`
if more callbacks are expected (meaning you should run the
event loop again sometime in the future).

- `"nowait"`: Poll for I/O once but don't block if there are
no pending callbacks. Returns `false` if done (no active
handles or requests left), or `true` if more callbacks are
expected (meaning you should run the event loop again
sometime in the future).

Returns: `boolean` or `fail`

Note: Luvit will implicitly call `uv.run()` after loading user
code, but if you use the luv bindings directly, you need to
call this after registering your initial set of event
callbacks to start the event loop.

### <a id="uv.loop_configure()" class="section-title" href="#uv.loop_configure()">uv.loop_configure({option}, {...})</a>

Parameters:
- `option`: `string`
- `...`: depends on `option`, see below

Set additional loop options. You should normally call this
before the first call to uv_run() unless mentioned otherwise.

Supported options:

- `"block_signal"`: Block a signal when polling for new
events. The second argument to loop_configure() is the
signal name (as a lowercase string) or the signal number.
This operation is currently only implemented for
`"sigprof"` signals, to suppress unnecessary wakeups when
using a sampling profiler. Requesting other signals will
fail with `EINVAL`.
- `"metrics_idle_time"`: Accumulate the amount of idle time
the event loop spends in the event provider. This option
is necessary to use `metrics_idle_time()`.

An example of a valid call to this function is:
```
uv.loop_configure("block_signal", "sigprof")

```


Returns: `0` or `fail`

Note: Be prepared to handle the `ENOSYS` error; it means the
loop option is not supported by the platform.

### <a id="uv.loop_mode()" class="section-title" href="#uv.loop_mode()">uv.loop_mode()</a>

If the loop is running, returns a string indicating the mode
in use. If the loop is not running, `nil` is returned instead.

Returns: `string` or `nil`

### <a id="uv.loop_alive()" class="section-title" href="#uv.loop_alive()">uv.loop_alive()</a>

Returns `true` if there are referenced active handles, active
requests, or closing handles in the loop; otherwise, `false`.

Returns: `boolean` or `fail`

### <a id="uv.stop()" class="section-title" href="#uv.stop()">uv.stop()</a>

Stop the event loop, causing [uv.run()](#uv.run()) to end as soon as
possible. This will happen not sooner than the next loop
iteration. If this function was called before blocking for
I/O, the loop won't block for I/O on this iteration.

Returns: Nothing.

### <a id="uv.backend_fd()" class="section-title" href="#uv.backend_fd()">uv.backend_fd()</a>

Get backend file descriptor. Only kqueue, epoll, and event
ports are supported.

This can be used in conjunction with `uv.run("nowait")` to
poll in one thread and run the event loop's callbacks in
another

Returns: `integer` or `nil`

Note: Embedding a kqueue fd in another kqueue pollset doesn't
work on all platforms. It's not an error to add the fd but it
never generates events.

### <a id="uv.backend_timeout()" class="section-title" href="#uv.backend_timeout()">uv.backend_timeout()</a>

Get the poll timeout. The return value is in milliseconds, or
-1 for no timeout.

Returns: `integer`

### <a id="uv.now()" class="section-title" href="#uv.now()">uv.now()</a>

Returns the current timestamp in milliseconds. The timestamp
is cached at the start of the event loop tick, see
[uv.update_time()](#uv.update_time()) for details and rationale.

The timestamp increases monotonically from some arbitrary
point in time. Don't make assumptions about the starting
point, you will only get disappointed.

Returns: `integer`

Note: Use [uv.hrtime()](#uv.hrtime()) if you need sub-millisecond
granularity.

### <a id="uv.update_time()" class="section-title" href="#uv.update_time()">uv.update_time()</a>

Update the event loop's concept of "now". Libuv caches the
current time at the start of the event loop tick in order to
reduce the number of time-related system calls.

You won't normally need to call this function unless you have
callbacks that block the event loop for longer periods of
time, where "longer" is somewhat subjective but probably on
the order of a millisecond or more.

Returns: Nothing.

### <a id="uv.walk()" class="section-title" href="#uv.walk()">uv.walk({callback})</a>

Parameters:
- `callback`: `callable`
- `handle`: `userdata` for sub-type of [uv_handle_t](#uv_handle_t)

Walk the list of handles: `callback` will be executed with
each handle.

Returns: Nothing.
```
-- Example usage of uv.walk to close all handles that
-- aren't already closing.
uv.walk(function (handle)
if not handle:is_closing() then
handle:close()
end
end)

```



## <a id="luv-base-request uv_req_t" class="section-title" href="#luv-base-request uv_req_t">`Uv_Req_T` — Base Request</a> 

`uv_req_t` is the base type for all libuv request types.

### <a id="uv.cancel()" class="section-title" href="#uv.cancel()">uv.cancel({req})</a>

> method form `req:cancel()`

Parameters:
- `req`: `userdata` for sub-type of [uv_req_t](#uv_req_t)

Cancel a pending request. Fails if the request is executing or
has finished executing. Only cancellation of [uv_fs_t](#uv_fs_t),
`uv_getaddrinfo_t`, `uv_getnameinfo_t` and `uv_work_t`
requests is currently supported.

Returns: `0` or `fail`

### <a id="uv.req_get_type()" class="section-title" href="#uv.req_get_type()">uv.req_get_type({req})</a>

> method form `req:get_type()`

Parameters:
- `req`: `userdata` for sub-type of [uv_req_t](#uv_req_t)

Returns the name of the struct for a given request (e.g.
`"fs"` for [uv_fs_t](#uv_fs_t)) and the libuv enum integer for the
request's type (`uv_req_type`).

Returns: `string, integer`


## <a id="luv-base-handle uv_handle_t" class="section-title" href="#luv-base-handle uv_handle_t">`Uv_Handle_T` — Base Handle</a> 

`uv_handle_t` is the base type for all libuv handle types. All API functions
defined here work with any handle type.

### <a id="uv.is_active()" class="section-title" href="#uv.is_active()">uv.is_active({handle})</a>

> method form `handle:is_active()`

Parameters:
- `handle`: `userdata` for sub-type of [uv_handle_t](#uv_handle_t)

Returns `true` if the handle is active, `false` if it's
inactive. What "active” means depends on the type of handle:

- A [uv_async_t](#uv_async_t) handle is always active and cannot be
deactivated, except by closing it with [uv.close()](#uv.close()).

- A [uv_pipe_t|, |uv_tcp_t|, |uv_udp_t](#uv_pipe_t|, |uv_tcp_t|, |uv_udp_t), etc.
handle - basically any handle that deals with I/O - is
active when it is doing something that involves I/O, like
reading, writing, connecting, accepting new connections,
etc.

- A [uv_check_t|, |uv_idle_t|, |uv_timer_t](#uv_check_t|, |uv_idle_t|, |uv_timer_t),
etc. handle is active when it has been started with a call
to [uv.check_start()|, |uv.idle_start()](#uv.check_start()|, |uv.idle_start()),
[uv.timer_start()](#uv.timer_start()) etc. until it has been stopped with a
call to its respective stop function.

Returns: `boolean` or `fail`

### <a id="uv.is_closing()" class="section-title" href="#uv.is_closing()">uv.is_closing({handle})</a>

> method form `handle:is_closing()`

Parameters:
- `handle`: `userdata` for sub-type of [uv_handle_t](#uv_handle_t)

Returns `true` if the handle is closing or closed, `false`
otherwise.

Returns: `boolean` or `fail`

Note: This function should only be used between the
initialization of the handle and the arrival of the close
callback.

### <a id="uv.close()" class="section-title" href="#uv.close()">uv.close({handle} [, {callback}])</a>

> method form `handle:close([callback])`

Parameters:
- `handle`: `userdata` for sub-type of [uv_handle_t](#uv_handle_t)
- `callback`: `callable` or `nil`

Request handle to be closed. `callback` will be called
asynchronously after this call. This MUST be called on each
handle before memory is released.

Handles that wrap file descriptors are closed immediately but
`callback` will still be deferred to the next iteration of the
event loop. It gives you a chance to free up any resources
associated with the handle.

In-progress requests, like `uv_connect_t` or `uv_write_t`, are
cancelled and have their callbacks called asynchronously with
`ECANCELED`.

Returns: Nothing.

### <a id="uv.ref()" class="section-title" href="#uv.ref()">uv.ref({handle})</a>

> method form `handle:ref()`

Parameters:
- `handle`: `userdata` for sub-type of [uv_handle_t](#uv_handle_t)

Reference the given handle. References are idempotent, that
is, if a handle is already referenced calling this function
again will have no effect.

Returns: Nothing.

See [luv-reference-counting](#luv-reference-counting).

### <a id="uv.unref()" class="section-title" href="#uv.unref()">uv.unref({handle})</a>

> method form `handle:unref()`

Parameters:
- `handle`: `userdata` for sub-type of [uv_handle_t](#uv_handle_t)

Un-reference the given handle. References are idempotent, that
is, if a handle is not referenced calling this function again
will have no effect.

Returns: Nothing.

See [luv-reference-counting](#luv-reference-counting).

### <a id="uv.has_ref()" class="section-title" href="#uv.has_ref()">uv.has_ref({handle})</a>

> method form `handle:has_ref()`

Parameters:
- `handle`: `userdata` for sub-type of [uv_handle_t](#uv_handle_t)

Returns `true` if the handle referenced, `false` if not.

Returns: `boolean` or `fail`

See [luv-reference-counting](#luv-reference-counting).

### <a id="uv.send_buffer_size()" class="section-title" href="#uv.send_buffer_size()">uv.send_buffer_size({handle} [, {size}])</a>

> method form `handle:send_buffer_size([size])`

Parameters:
- `handle`: `userdata` for sub-type of [uv_handle_t](#uv_handle_t)
- `size`: `integer` or `nil` (default: `0`)

Gets or sets the size of the send buffer that the operating
system uses for the socket.

If `size` is omitted (or `0`), this will return the current
send buffer size; otherwise, this will use `size` to set the
new send buffer size.

This function works for TCP, pipe and UDP handles on Unix and
for TCP and UDP handles on Windows.

Returns:
- `integer` or `fail` (if `size` is `nil` or `0`)
- `0` or `fail` (if `size` is not `nil` and not `0`)

Note: Linux will set double the size and return double the
size of the original set value.

### <a id="uv.recv_buffer_size()" class="section-title" href="#uv.recv_buffer_size()">uv.recv_buffer_size({handle} [, {size}])</a>

> method form `handle:recv_buffer_size([size])`

Parameters:
- `handle`: `userdata` for sub-type of [uv_handle_t](#uv_handle_t)
- `size`: `integer` or `nil` (default: `0`)

Gets or sets the size of the receive buffer that the operating
system uses for the socket.

If `size` is omitted (or `0`), this will return the current
send buffer size; otherwise, this will use `size` to set the
new send buffer size.

This function works for TCP, pipe and UDP handles on Unix and
for TCP and UDP handles on Windows.

Returns:
- `integer` or `fail` (if `size` is `nil` or `0`)
- `0` or `fail` (if `size` is not `nil` and not `0`)

Note: Linux will set double the size and return double the
size of the original set value.

### <a id="uv.fileno()" class="section-title" href="#uv.fileno()">uv.fileno({handle})</a>

> method form `handle:fileno()`

Parameters:
- `handle`: `userdata` for sub-type of [uv_handle_t](#uv_handle_t)

Gets the platform dependent file descriptor equivalent.

The following handles are supported: TCP, pipes, TTY, UDP and
poll. Passing any other handle type will fail with `EINVAL`.

If a handle doesn't have an attached file descriptor yet or
the handle itself has been closed, this function will return
`EBADF`.

Returns: `integer` or `fail`

WARNING: Be very careful when using this function. libuv
assumes it's in control of the file descriptor so any change
to it may lead to malfunction.

### <a id="uv.handle_get_type()" class="section-title" href="#uv.handle_get_type()">uv.handle_get_type({handle})</a>

> method form `handle:get_type()`

Parameters:
- `handle`: `userdata` for sub-type of [uv_handle_t](#uv_handle_t)

Returns the name of the struct for a given handle (e.g.
`"pipe"` for [uv_pipe_t](#uv_pipe_t)) and the libuv enum integer for the
handle's type (`uv_handle_type`).

Returns: `string, integer`


## <a id="luv-reference-counting" class="section-title" href="#luv-reference-counting">Reference Counting</a> 

The libuv event loop (if run in the default mode) will run until there are no
active and referenced handles left. The user can force the loop to exit early
by unreferencing handles which are active, for example by calling [uv.unref()](#uv.unref())
after calling [uv.timer_start()](#uv.timer_start()).

A handle can be referenced or unreferenced, the refcounting scheme doesn't use
a counter, so both operations are idempotent.

All handles are referenced when active by default, see [uv.is_active()](#uv.is_active()) for a
more detailed explanation on what being active involves.


## <a id="luv-timer-handle uv_timer_t" class="section-title" href="#luv-timer-handle uv_timer_t">`Uv_Timer_T` — Timer Handle</a> 

> [uv_handle_t](#uv_handle_t) functions also apply.

Timer handles are used to schedule callbacks to be called in the future.

### <a id="uv.new_timer()" class="section-title" href="#uv.new_timer()">uv.new_timer()</a>

Creates and initializes a new [uv_timer_t](#uv_timer_t). Returns the Lua
userdata wrapping it.

Returns: `uv_timer_t userdata` or `fail`
```
-- Creating a simple setTimeout wrapper
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
end

```


### <a id="uv.timer_start()" class="section-title" href="#uv.timer_start()">uv.timer_start({timer}, {timeout}, {repeat}, {callback})</a>

> method form `timer:start(timeout, repeat, callback)`

Parameters:
- `timer`: `uv_timer_t userdata`
- `timeout`: `integer`
- `repeat`: `integer`
- `callback`: `callable`

Start the timer. `timeout` and `repeat` are in milliseconds.

If `timeout` is zero, the callback fires on the next event
loop iteration. If `repeat` is non-zero, the callback fires
first after `timeout` milliseconds and then repeatedly after
`repeat` milliseconds.

Returns: `0` or `fail`

### <a id="uv.timer_stop()" class="section-title" href="#uv.timer_stop()">uv.timer_stop({timer})</a>

> method form `timer:stop()`

Parameters:
- `timer`: `uv_timer_t userdata`

Stop the timer, the callback will not be called anymore.

Returns: `0` or `fail`

### <a id="uv.timer_again()" class="section-title" href="#uv.timer_again()">uv.timer_again({timer})</a>

> method form `timer:again()`

Parameters:
- `timer`: `uv_timer_t userdata`

Stop the timer, and if it is repeating restart it using the
repeat value as the timeout. If the timer has never been
started before it raises `EINVAL`.

Returns: `0` or `fail`

### <a id="uv.timer_set_repeat()" class="section-title" href="#uv.timer_set_repeat()">uv.timer_set_repeat({timer}, {repeat})</a>

> method form `timer:set_repeat(repeat)`

Parameters:
- `timer`: `uv_timer_t userdata`
- `repeat`: `integer`

Set the repeat interval value in milliseconds. The timer will
be scheduled to run on the given interval, regardless of the
callback execution duration, and will follow normal timer
semantics in the case of a time-slice overrun.

For example, if a 50 ms repeating timer first runs for 17 ms,
it will be scheduled to run again 33 ms later. If other tasks
consume more than the 33 ms following the first timer
callback, then the callback will run as soon as possible.

Returns: Nothing.

### <a id="uv.timer_get_repeat()" class="section-title" href="#uv.timer_get_repeat()">uv.timer_get_repeat({timer})</a>

> method form `timer:get_repeat()`

Parameters:
- `timer`: `uv_timer_t userdata`

Get the timer repeat value.

Returns: `integer`

### <a id="uv.timer_get_due_in()" class="section-title" href="#uv.timer_get_due_in()">uv.timer_get_due_in({timer})</a>

> method form `timer:get_due_in()`

Parameters:
- `timer`: `uv_timer_t userdata`

Get the timer due value or 0 if it has expired. The time is
relative to [uv.now()](#uv.now()).

Returns: `integer`

Note: New in libuv version 1.40.0.


## <a id="luv-prepare-handle uv_prepare_t" class="section-title" href="#luv-prepare-handle uv_prepare_t">`Uv_Prepare_T` — Prepare Handle</a> 

> [uv_handle_t](#uv_handle_t) functions also apply.

Prepare handles will run the given callback once per loop iteration, right
before polling for I/O.
```
local prepare = uv.new_prepare()
prepare:start(function()
print("Before I/O polling")
end)

```


### <a id="uv.new_prepare()" class="section-title" href="#uv.new_prepare()">uv.new_prepare()</a>

Creates and initializes a new [uv_prepare_t](#uv_prepare_t). Returns the Lua
userdata wrapping it.

Returns: `uv_prepare_t userdata` or `fail`

### <a id="uv.prepare_start()" class="section-title" href="#uv.prepare_start()">uv.prepare_start({prepare}, {callback})</a>

> method form `prepare:start(callback)`

Parameters:
- `prepare`: `uv_prepare_t userdata`
- `callback`: `callable`

Start the handle with the given callback.

Returns: `0` or `fail`

### <a id="uv.prepare_stop()" class="section-title" href="#uv.prepare_stop()">uv.prepare_stop({prepare})</a>

> method form `prepare:stop()`

Parameters:
- `prepare`: `uv_prepare_t userdata`

Stop the handle, the callback will no longer be called.

Returns: `0` or `fail`


## <a id="luv-check-handle uv_check_t" class="section-title" href="#luv-check-handle uv_check_t">`Uv_Check_T` — Check Handle</a> 

> [uv_handle_t](#uv_handle_t) functions also apply.

Check handles will run the given callback once per loop iteration, right after
polling for I/O.
```
local check = uv.new_check()
check:start(function()
print("After I/O polling")
end)

```


### <a id="uv.new_check()" class="section-title" href="#uv.new_check()">uv.new_check()</a>

Creates and initializes a new [uv_check_t](#uv_check_t). Returns the Lua
userdata wrapping it.

Returns: `uv_check_t userdata` or `fail`

### <a id="uv.check_start()" class="section-title" href="#uv.check_start()">uv.check_start({check}, {callback})</a>

> method form `check:start(callback)`

Parameters:
- `check`: `uv_check_t userdata`
- `callback`: `callable`

Start the handle with the given callback.

Returns: `0` or `fail`

### <a id="uv.check_stop()" class="section-title" href="#uv.check_stop()">uv.check_stop({check})</a>

> method form `check:stop()`

Parameters:
- `check`: `uv_check_t userdata`

Stop the handle, the callback will no longer be called.

Returns: `0` or `fail`


## <a id="luv-idle-handle uv_idle_t" class="section-title" href="#luv-idle-handle uv_idle_t">`Uv_Idle_T` — Idle Handle</a> 

> [uv_handle_t](#uv_handle_t) functions also apply.

Idle handles will run the given callback once per loop iteration, right before
the [uv_prepare_t](#uv_prepare_t) handles.

Note: The notable difference with prepare handles is that when there are
active idle handles, the loop will perform a zero timeout poll instead of
blocking for I/O.

WARNING: Despite the name, idle handles will get their callbacks called on
every loop iteration, not when the loop is actually "idle".
```
local idle = uv.new_idle()
idle:start(function()
print("Before I/O polling, no blocking")
end)

```


### <a id="uv.new_idle()" class="section-title" href="#uv.new_idle()">uv.new_idle()</a>

Creates and initializes a new [uv_idle_t](#uv_idle_t). Returns the Lua
userdata wrapping it.

Returns: `uv_idle_t userdata` or `fail`

### <a id="uv.idle_start()" class="section-title" href="#uv.idle_start()">uv.idle_start({idle}, {callback})</a>

> method form `idle:start(callback)`

Parameters:
- `idle`: `uv_idle_t userdata`
- `callback`: `callable`

Start the handle with the given callback.

Returns: `0` or `fail`

### <a id="uv.idle_stop()" class="section-title" href="#uv.idle_stop()">uv.idle_stop({check})</a>

> method form `idle:stop()`

Parameters:
- `idle`: `uv_idle_t userdata`

Stop the handle, the callback will no longer be called.

Returns: `0` or `fail`


## <a id="luv-async-handle uv_async_t" class="section-title" href="#luv-async-handle uv_async_t">`Uv_Async_T` — Async Handle</a> 

> [uv_handle_t](#uv_handle_t) functions also apply.

Async handles allow the user to "wakeup" the event loop and get a callback
called from another thread.
```
local async
async = uv.new_async(function()
print("async operation ran")
async:close()
end)

async:send()

```


### <a id="uv.new_async()" class="section-title" href="#uv.new_async()">uv.new_async([{callback}])</a>

Parameters:
- `callback`: `callable` or `nil`
- `...`: `threadargs` passed to/from
`uv.async_send(async, ...)`

Creates and initializes a new [uv_async_t](#uv_async_t). Returns the Lua
userdata wrapping it. A `nil` callback is allowed.

Returns: `uv_async_t userdata` or `fail`

Note: Unlike other handle initialization functions, this
immediately starts the handle.

### <a id="uv.async_send()" class="section-title" href="#uv.async_send()">uv.async_send({async}, {...})</a>

> method form `async:send(...)`

Parameters:
- `async`: `uv_async_t userdata`
- `...`: `threadargs`

Wakeup the event loop and call the async handle's callback.

Returns: `0` or `fail`

Note: It's safe to call this function from any thread. The
callback will be called on the loop thread.

WARNING: libuv will coalesce calls to `uv.async_send(async)`,
that is, not every call to it will yield an execution of the
callback. For example: if `uv.async_send()` is called 5 times
in a row before the callback is called, the callback will only
be called once. If `uv.async_send()` is called again after the
callback was called, it will be called again.


## <a id="luv-poll-handle uv_poll_t" class="section-title" href="#luv-poll-handle uv_poll_t">`Uv_Poll_T` — Poll Handle</a> 

> [uv_handle_t](#uv_handle_t) functions also apply.

Poll handles are used to watch file descriptors for readability and
writability, similar to the purpose of poll(2)
(https://linux.die.net/man/2/poll).

The purpose of poll handles is to enable integrating external libraries that
rely on the event loop to signal it about the socket status changes, like
c-ares or libssh2. Using `uv_poll_t` for any other purpose is not recommended;
[uv_tcp_t|, |uv_udp_t](#uv_tcp_t|, |uv_udp_t), etc. provide an implementation that is faster and more
scalable than what can be achieved with `uv_poll_t`, especially on Windows.

It is possible that poll handles occasionally signal that a file descriptor is
readable or writable even when it isn't. The user should therefore always be
prepared to handle EAGAIN or equivalent when it attempts to read from or write
to the fd.

It is not okay to have multiple active poll handles for the same socket, this
can cause libuv to busyloop or otherwise malfunction.

The user should not close a file descriptor while it is being polled by an
active poll handle. This can cause the handle to report an error, but it might
also start polling another socket. However the fd can be safely closed
immediately after a call to [uv.poll_stop()| or |uv.close()](#uv.poll_stop()| or |uv.close()).

Note: On windows only sockets can be polled with poll handles. On Unix any
file descriptor that would be accepted by poll(2) can be used.

### <a id="uv.new_poll()" class="section-title" href="#uv.new_poll()">uv.new_poll({fd})</a>

Parameters:
- `fd`: `integer`

Initialize the handle using a file descriptor.

The file descriptor is set to non-blocking mode.

Returns: `uv_poll_t userdata` or `fail`

### <a id="uv.new_socket_poll()" class="section-title" href="#uv.new_socket_poll()">uv.new_socket_poll({fd})</a>

Parameters:
- `fd`: `integer`

Initialize the handle using a socket descriptor. On Unix this
is identical to [uv.new_poll()](#uv.new_poll()). On windows it takes a SOCKET
handle.

The socket is set to non-blocking mode.

Returns: `uv_poll_t userdata` or `fail`

### <a id="uv.poll_start()" class="section-title" href="#uv.poll_start()">uv.poll_start({poll}, {events}, {callback})</a>

> method form `poll:start(events, callback)`

Parameters:
- `poll`: `uv_poll_t userdata`
- `events`: `string` or `nil` (default: `"rw"`)
- `callback`: `callable`
- `err`: `nil` or `string`
- `events`: `string` or `nil`

Starts polling the file descriptor. `events` are: `"r"`,
`"w"`, `"rw"`, `"d"`, `"rd"`, `"wd"`, `"rwd"`, `"p"`, `"rp"`,
`"wp"`, `"rwp"`, `"dp"`, `"rdp"`, `"wdp"`, or `"rwdp"` where
`r` is `READABLE`, `w` is `WRITABLE`, `d` is `DISCONNECT`, and
`p` is `PRIORITIZED`. As soon as an event is detected the
callback will be called with status set to 0, and the detected
events set on the events field.

The user should not close the socket while the handle is
active. If the user does that anyway, the callback may be
called reporting an error status, but this is not guaranteed.

Returns: `0` or `fail`

Note Calling `uv.poll_start()` on a handle that is already
active is fine. Doing so will update the events mask that is
being watched for.

### <a id="uv.poll_stop()" class="section-title" href="#uv.poll_stop()">uv.poll_stop({poll})</a>

> method form `poll:stop()`

Parameters:
- `poll`: `uv_poll_t userdata`

Stop polling the file descriptor, the callback will no longer
be called.

Returns: `0` or `fail`


## <a id="luv-signal-handle uv_signal_t" class="section-title" href="#luv-signal-handle uv_signal_t">`Uv_Signal_T` — Signal Handle</a> 

> [uv_handle_t](#uv_handle_t) functions also apply.

Signal handles implement Unix style signal handling on a per-event loop bases.

Windows Notes:

Reception of some signals is emulated on Windows:
- SIGINT is normally delivered when the user presses CTRL+C. However, like
on Unix, it is not generated when terminal raw mode is enabled.
- SIGBREAK is delivered when the user pressed CTRL + BREAK.
- SIGHUP is generated when the user closes the console window. On SIGHUP the
program is given approximately 10 seconds to perform cleanup. After that
Windows will unconditionally terminate it.
- SIGWINCH is raised whenever libuv detects that the console has been
resized. SIGWINCH is emulated by libuv when the program uses a uv_tty_t
handle to write to the console. SIGWINCH may not always be delivered in a
timely manner; libuv will only detect size changes when the cursor is
being moved. When a readable [uv_tty_t](#uv_tty_t) handle is used in raw mode,
resizing the console buffer will also trigger a SIGWINCH signal.
- Watchers for other signals can be successfully created, but these signals
are never received. These signals are: SIGILL, SIGABRT, SIGFPE, SIGSEGV,
SIGTERM and SIGKILL.
- Calls to raise() or abort() to programmatically raise a signal are not
detected by libuv; these will not trigger a signal watcher.

Unix Notes:

- SIGKILL and SIGSTOP are impossible to catch.
- Handling SIGBUS, SIGFPE, SIGILL or SIGSEGV via libuv results into
undefined behavior.
- SIGABRT will not be caught by libuv if generated by abort(), e.g. through
assert().
- On Linux SIGRT0 and SIGRT1 (signals 32 and 33) are used by the NPTL
pthreads library to manage threads. Installing watchers for those signals
will lead to unpredictable behavior and is strongly discouraged. Future
versions of libuv may simply reject them.
```
-- Create a new signal handler
local signal = uv.new_signal()
-- Define a handler function
uv.signal_start(signal, "sigint", function(signal)
print("got " .. signal .. ", shutting down")
os.exit(1)
end)

```


### <a id="uv.new_signal()" class="section-title" href="#uv.new_signal()">uv.new_signal()</a>

Creates and initializes a new [uv_signal_t](#uv_signal_t). Returns the Lua
userdata wrapping it.

Returns: `uv_signal_t userdata` or `fail`

### <a id="uv.signal_start()" class="section-title" href="#uv.signal_start()">uv.signal_start({signal}, {signum}, {callback})</a>

> method form `signal:start(signum, callback)`

Parameters:
- `signal`: `uv_signal_t userdata`
- `signum`: `integer` or `string`
- `callback`: `callable`
- `signum`: `string`

Start the handle with the given callback, watching for the
given signal.

Returns: `0` or `fail`
### <a id="uv.signal_start_oneshot()" class="section-title" href="#uv.signal_start_oneshot()">Note:</a>
uv.signal_start_oneshot({signal}, {signum}, {callback})

> method form `signal:start_oneshot(signum, callback)`

Parameters:
- `signal`: `uv_signal_t userdata`
- `signum`: `integer` or `string`
- `callback`: `callable`
- `signum`: `string`

Same functionality as [uv.signal_start()](#uv.signal_start()) but the signal
handler is reset the moment the signal is received.

Returns: `0` or `fail`

### <a id="uv.signal_stop()" class="section-title" href="#uv.signal_stop()">uv.signal_stop({signal})</a>

> method form `signal:stop()`

Parameters:
- `signal`: `uv_signal_t userdata`

Stop the handle, the callback will no longer be called.

Returns: `0` or `fail`


## <a id="luv-process-handle uv_process_t" class="section-title" href="#luv-process-handle uv_process_t">`Uv_Process_T` — Process Handle</a> 

> [uv_handle_t](#uv_handle_t) functions also apply.

Process handles will spawn a new process and allow the user to control it and
establish communication channels with it using streams.

### <a id="uv.disable_stdio_inheritance()" class="section-title" href="#uv.disable_stdio_inheritance()">uv.disable_stdio_inheritance()</a>

Disables inheritance for file descriptors / handles that this
process inherited from its parent. The effect is that child
processes spawned by this process don't accidentally inherit
these handles.

It is recommended to call this function as early in your
program as possible, before the inherited file descriptors can
be closed or duplicated.

Returns: Nothing.

Note: This function works on a best-effort basis: there is no
guarantee that libuv can discover all file descriptors that
were inherited. In general it does a better job on Windows
than it does on Unix.

### <a id="uv.spawn()" class="section-title" href="#uv.spawn()">uv.spawn({path}, {options}, {on_exit})</a>

Parameters:
- `path`: `string`
- `options`: `table` (see below)
- `on_exit`: `callable`
- `code`: `integer`
- `signal`: `integer`

Initializes the process handle and starts the process. If the
process is successfully spawned, this function will return the
handle and pid of the child process.

Possible reasons for failing to spawn would include (but not
be limited to) the file to execute not existing, not having
permissions to use the setuid or setgid specified, or not
having enough memory to allocate for the new process.
```
local stdin = uv.new_pipe()
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
end)

```

### <a id="uv.spawn-options" class="section-title" href="#uv.spawn-options">Note:</a>
The `options` table accepts the following fields:

- `options.args` - Command line arguments as a list of
string. The first string should be the path to the
program. On Windows, this uses CreateProcess which
concatenates the arguments into a string. This can cause
some strange errors. (See `options.verbatim` below for
Windows.)
- `options.stdio` - Set the file descriptors that will be
made available to the child process. The convention is
that the first entries are stdin, stdout, and stderr.
(Note: On Windows, file descriptors after the third are
available to the child process only if the child processes
uses the MSVCRT runtime.)
- `options.env` - Set environment variables for the new
process.
- `options.cwd` - Set the current working directory for the
sub-process.
- `options.uid` - Set the child process' user id.
- `options.gid` - Set the child process' group id.
- `options.verbatim` - If true, do not wrap any arguments in
quotes, or perform any other escaping, when converting the
argument list into a command line string. This option is
only meaningful on Windows systems. On Unix it is silently
ignored.
- `options.detached` - If true, spawn the child process in a
detached state - this will make it a process group leader,
and will effectively enable the child to keep running
after the parent exits. Note that the child process will
still keep the parent's event loop alive unless the parent
process calls [uv.unref()](#uv.unref()) on the child's process handle.
- `options.hide` - If true, hide the subprocess console
window that would normally be created. This option is only
meaningful on Windows systems. On Unix it is silently
ignored.

The `options.stdio` entries can take many shapes.

- If they are numbers, then the child process inherits that
same zero-indexed fd from the parent process.
- If [uv_stream_t](#uv_stream_t) handles are passed in, those are used as
a read-write pipe or inherited stream depending if the
stream has a valid fd.
- Including `nil` placeholders means to ignore that fd in
the child process.

When the child process exits, `on_exit` is called with an exit
code and signal.

Returns: `uv_process_t userdata`, `integer`

### <a id="uv.process_kill()" class="section-title" href="#uv.process_kill()">uv.process_kill({process}, {signum})</a>

> method form `process:kill(signum)`

Parameters:
- `process`: `uv_process_t userdata`
- `signum`: `integer` or `string`

Sends the specified signal to the given process handle. Check
the documentation on [uv_signal_t](#uv_signal_t) for signal support,
specially on Windows.

Returns: `0` or `fail`

### <a id="uv.kill()" class="section-title" href="#uv.kill()">uv.kill({pid}, {signum})</a>

Parameters:
- `pid`: `integer`
- `signum`: `integer` or `string`

Sends the specified signal to the given PID. Check the
documentation on [uv_signal_t](#uv_signal_t) for signal support, specially
on Windows.

Returns: `0` or `fail`

### <a id="uv.process_get_pid()" class="section-title" href="#uv.process_get_pid()">uv.process_get_pid({process})</a>

> method form `process:get_pid()`

Parameters:
- `process`: `uv_process_t userdata`

Returns the handle's pid.

Returns: `integer`


## <a id="luv-stream-handle uv_stream_t" class="section-title" href="#luv-stream-handle uv_stream_t">`Uv_Stream_T` — Stream Handle</a> 

> [uv_handle_t](#uv_handle_t) functions also apply.

Stream handles provide an abstraction of a duplex communication channel.
`uv_stream_t` is an abstract type, libuv provides 3 stream implementations
in the form of [uv_tcp_t|, |uv_pipe_t| and |uv_tty_t](#uv_tcp_t|, |uv_pipe_t| and |uv_tty_t).

### <a id="uv.shutdown()" class="section-title" href="#uv.shutdown()">uv.shutdown({stream} [, {callback}])</a>

> method form `stream:shutdown([callback])`

Parameters:
- `stream`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)
- `callback`: `callable` or `nil`
- `err`: `nil` or `string`

Shutdown the outgoing (write) side of a duplex stream. It
waits for pending write requests to complete. The callback is
called after shutdown is complete.

Returns: `uv_shutdown_t userdata` or `fail`

### <a id="uv.listen()" class="section-title" href="#uv.listen()">uv.listen({stream}, {backlog}, {callback})</a>

> method form `stream:listen(backlog, callback)`

Parameters:
- `stream`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)
- `backlog`: `integer`
- `callback`: `callable`
- `err`: `nil` or `string`

Start listening for incoming connections. `backlog` indicates
the number of connections the kernel might queue, same as
`listen(2)`. When a new incoming connection is received the
callback is called.

Returns: `0` or `fail`

### <a id="uv.accept()" class="section-title" href="#uv.accept()">uv.accept({stream}, {client_stream})</a>

> method form `stream:accept(client_stream)`

Parameters:
- `stream`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)
- `client_stream`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)

This call is used in conjunction with [uv.listen()](#uv.listen()) to accept
incoming connections. Call this function after receiving a
callback to accept the connection.

When the connection callback is called it is guaranteed that
this function will complete successfully the first time. If
you attempt to use it more than once, it may fail. It is
suggested to only call this function once per connection call.

Returns: `0` or `fail`
```
server:listen(128, function (err)
local client = uv.new_tcp()
server:accept(client)
end)

```


### <a id="uv.read_start()" class="section-title" href="#uv.read_start()">uv.read_start({stream}, {callback})</a>

> method form `stream:read_start(callback)`

Parameters:
- `stream`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)
- `callback`: `callable`
- `err`: `nil` or `string`
- `data`: `string` or `nil`

Read data from an incoming stream. The callback will be made
several times until there is no more data to read or
[uv.read_stop()](#uv.read_stop()) is called. When we've reached EOF, `data`
will be `nil`.

Returns: `0` or `fail`
```
stream:read_start(function (err, chunk)
if err then
-- handle read error
elseif chunk then
-- handle data
else
-- handle disconnect
end
end)

```


### <a id="uv.read_stop()" class="section-title" href="#uv.read_stop()">uv.read_stop({stream})</a>

> method form `stream:read_stop()`

Parameters:
- `stream`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)

Stop reading data from the stream. The read callback will no
longer be called.

This function is idempotent and may be safely called on a
stopped stream.

Returns: `0` or `fail`

### <a id="uv.write()" class="section-title" href="#uv.write()">uv.write({stream}, {data} [, {callback}])</a>

> method form `stream:write(data, [callback])`

Parameters:
- `stream`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)
- `data`: `buffer`
- `callback`: `callable` or `nil`
- `err`: `nil` or `string`

Write data to stream.

`data` can either be a Lua string or a table of strings. If a
table is passed in, the C backend will use writev to send all
strings in a single system call.

The optional `callback` is for knowing when the write is
complete.

Returns: `uv_write_t userdata` or `fail`

### <a id="uv.write2()" class="section-title" href="#uv.write2()">uv.write2({stream}, {data}, {send_handle} [, {callback}])</a>

> method form `stream:write2(data, send_handle, [callback])`

Parameters:
- `stream`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)
- `data`: `buffer`
- `send_handle`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)
- `callback`: `callable` or `nil`
- `err`: `nil` or `string`

Extended write function for sending handles over a pipe. The
pipe must be initialized with `ipc` option `true`.

Returns: `uv_write_t userdata` or `fail`

Note: `send_handle` must be a TCP socket or pipe, which is a
server or a connection (listening or connected state). Bound
sockets or pipes will be assumed to be servers.

### <a id="uv.try_write()" class="section-title" href="#uv.try_write()">uv.try_write({stream}, {data})</a>

> method form `stream:try_write(data)`

Parameters:
- `stream`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)
- `data`: `buffer`

Same as [uv.write()](#uv.write()), but won't queue a write request if it
can't be completed immediately.

Will return number of bytes written (can be less than the
supplied buffer size).

Returns: `integer` or `fail`

### <a id="uv.try_write2()" class="section-title" href="#uv.try_write2()">uv.try_write2({stream}, {data}, {send_handle})</a>

> method form `stream:try_write2(data, send_handle)`

Parameters:
- `stream`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)
- `data`: `buffer`
- `send_handle`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)

Like [uv.write2()](#uv.write2()), but with the properties of
[uv.try_write()](#uv.try_write()). Not supported on Windows, where it returns
`UV_EAGAIN`.

Will return number of bytes written (can be less than the
supplied buffer size).

Returns: `integer` or `fail`

### <a id="uv.is_readable()" class="section-title" href="#uv.is_readable()">uv.is_readable({stream})</a>

> method form `stream:is_readable()`

Parameters:
- `stream`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)

Returns `true` if the stream is readable, `false` otherwise.

Returns: `boolean`

### <a id="uv.is_writable()" class="section-title" href="#uv.is_writable()">uv.is_writable({stream})</a>

> method form `stream:is_writable()`

Parameters:
- `stream`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)

Returns `true` if the stream is writable, `false` otherwise.

Returns: `boolean`

### <a id="uv.stream_set_blocking()" class="section-title" href="#uv.stream_set_blocking()">uv.stream_set_blocking({stream}, {blocking})</a>

> method form `stream:set_blocking(blocking)`

Parameters:
- `stream`: `userdata` for sub-type of [uv_stream_t](#uv_stream_t)
- `blocking`: `boolean`

Enable or disable blocking mode for a stream.

When blocking mode is enabled all writes complete
synchronously. The interface remains unchanged otherwise, e.g.
completion or failure of the operation will still be reported
through a callback which is made asynchronously.

Returns: `0` or `fail`

WARNING: Relying too much on this API is not recommended. It
is likely to change significantly in the future. Currently
this only works on Windows and only for [uv_pipe_t](#uv_pipe_t) handles.
Also libuv currently makes no ordering guarantee when the
blocking mode is changed after write requests have already
been submitted. Therefore it is recommended to set the
blocking mode immediately after opening or creating the
stream.

### <a id="uv.stream_get_write_queue_size()" class="section-title" href="#uv.stream_get_write_queue_size()">uv.stream_get_write_queue_size()</a>

> method form `stream:get_write_queue_size()`

Returns the stream's write queue size.

Returns: `integer`


## <a id="luv-tcp-handle uv_tcp_t" class="section-title" href="#luv-tcp-handle uv_tcp_t">`Uv_Tcp_T` — TCP Handle</a> 

> [uv_handle_t| and |uv_stream_t](#uv_handle_t| and |uv_stream_t) functions also apply.

TCP handles are used to represent both TCP streams and servers.

### <a id="uv.new_tcp()" class="section-title" href="#uv.new_tcp()">uv.new_tcp([{flags}])</a>

Parameters:
- `flags`: `string` or `nil`

Creates and initializes a new [uv_tcp_t](#uv_tcp_t). Returns the Lua
userdata wrapping it. Flags may be a family string: `"unix"`,
`"inet"`, `"inet6"`, `"ipx"`, `"netlink"`, `"x25"`, `"ax25"`,
`"atmpvc"`, `"appletalk"`, or `"packet"`.

Returns: `uv_tcp_t userdata` or `fail`

### <a id="uv.tcp_open()" class="section-title" href="#uv.tcp_open()">uv.tcp_open({tcp}, {sock})</a>

> method form `tcp:open(sock)`

Parameters:
- `tcp`: `uv_tcp_t userdata`
- `sock`: `integer`

Open an existing file descriptor or SOCKET as a TCP handle.

Returns: `0` or `fail`

Note: The passed file descriptor or SOCKET is not checked for
its type, but it's required that it represents a valid stream
socket.

### <a id="uv.tcp_nodelay()" class="section-title" href="#uv.tcp_nodelay()">uv.tcp_nodelay({tcp}, {enable})</a>

> method form `tcp:nodelay(enable)`

Parameters:
- `tcp`: `uv_tcp_t userdata`
- `enable`: `boolean`

Enable / disable Nagle's algorithm.

Returns: `0` or `fail`

### <a id="uv.tcp_keepalive()" class="section-title" href="#uv.tcp_keepalive()">uv.tcp_keepalive({tcp}, {enable} [, {delay}])</a>

> method form `tcp:keepalive(enable, [delay])`

Parameters:
- `tcp`: `uv_tcp_t userdata`
- `enable`: `boolean`
- `delay`: `integer` or `nil`

Enable / disable TCP keep-alive. `delay` is the initial delay
in seconds, ignored when enable is `false`.

Returns: `0` or `fail`

### <a id="uv.tcp_simultaneous_accepts()" class="section-title" href="#uv.tcp_simultaneous_accepts()">uv.tcp_simultaneous_accepts({tcp}, {enable})</a>

> method form `tcp:simultaneous_accepts(enable)`

Parameters:
- `tcp`: `uv_tcp_t userdata`
- `enable`: `boolean`

Enable / disable simultaneous asynchronous accept requests
that are queued by the operating system when listening for new
TCP connections.

This setting is used to tune a TCP server for the desired
performance. Having simultaneous accepts can significantly
improve the rate of accepting connections (which is why it is
enabled by default) but may lead to uneven load distribution
in multi-process setups.

Returns: `0` or `fail`

### <a id="uv.tcp_bind()" class="section-title" href="#uv.tcp_bind()">uv.tcp_bind({tcp}, {host}, {port} [, {flags}])</a>

> method form `tcp:bind(host, port, [flags])`

Parameters:
- `tcp`: `uv_tcp_t userdata`
- `host`: `string`
- `port`: `integer`
- `flags`: `table` or `nil`
- `ipv6only`: `boolean`

Bind the handle to an host and port. `host` should be an IP
address and not a domain name. Any `flags` are set with a
table with field `ipv6only` equal to `true` or `false`.

When the port is already taken, you can expect to see an
`EADDRINUSE` error from either `uv.tcp_bind()`, [uv.listen()](#uv.listen())
or [uv.tcp_connect()](#uv.tcp_connect()). That is, a successful call to this
function does not guarantee that the call to [uv.listen()](#uv.listen()) or
[uv.tcp_connect()](#uv.tcp_connect()) will succeed as well.

Use a port of `0` to let the OS assign an ephemeral port.  You
can look it up later using [uv.tcp_getsockname()](#uv.tcp_getsockname()).

Returns: `0` or `fail`

### <a id="uv.tcp_getpeername()" class="section-title" href="#uv.tcp_getpeername()">uv.tcp_getpeername({tcp})</a>

> method form `tcp:getpeername()`

Parameters:
- `tcp`: `uv_tcp_t userdata`

Get the address of the peer connected to the handle.

Returns: `table` or `fail`
- `ip` : `string`
- `family` : `string`
- `port` : `integer`

### <a id="uv.tcp_getsockname()" class="section-title" href="#uv.tcp_getsockname()">uv.tcp_getsockname({tcp})</a>

> method form `tcp:getsockname()`

Parameters:
- `tcp`: `uv_tcp_t userdata`

Get the current address to which the handle is bound.

Returns: `table` or `fail`
- `ip` : `string`
- `family` : `string`
- `port` : `integer`

### <a id="uv.tcp_connect()" class="section-title" href="#uv.tcp_connect()">uv.tcp_connect({tcp}, {host}, {port}, {callback})</a>

> method form `tcp:connect(host, port, callback)`

Parameters:
- `tcp`: `uv_tcp_t userdata`
- `host`: `string`
- `port`: `integer`
- `callback`: `callable`
- `err`: `nil` or `string`

Establish an IPv4 or IPv6 TCP connection.

Returns: `uv_connect_t userdata` or `fail`
```
local client = uv.new_tcp()
client:connect("127.0.0.1", 8080, function (err)
-- check error and carry on.
end)

```


### <a id="uv.tcp_write_queue_size()" class="section-title" href="#uv.tcp_write_queue_size()">uv.tcp_write_queue_size({tcp})</a>

> method form `tcp:write_queue_size()`

DEPRECATED: Please use [uv.stream_get_write_queue_size()](#uv.stream_get_write_queue_size())
instead.

### <a id="uv.tcp_close_reset()" class="section-title" href="#uv.tcp_close_reset()">uv.tcp_close_reset([{callback}])</a>

> method form `tcp:close_reset([callback])`

Parameters:
- `tcp`: `uv_tcp_t userdata`
- `callback`: `callable` or `nil`

Resets a TCP connection by sending a RST packet. This is
accomplished by setting the SO_LINGER socket option with a
linger interval of zero and then calling [uv.close()](#uv.close()). Due to
some platform inconsistencies, mixing of [uv.shutdown()](#uv.shutdown()) and
`uv.tcp_close_reset()` calls is not allowed.

Returns: `0` or `fail`
### <a id="uv.socketpair()" class="section-title" href="#uv.socketpair()">Note:</a>
uv.socketpair([{socktype}, [{protocol}, [{flags1}, [{flags2}]]]])

Parameters:
- `socktype`: `string`, `integer` or `nil` (default: `stream`)
- `protocol`: `string`, `integer` or `nil` (default: 0)
- `flags1`: `table` or `nil`
- `nonblock`: `boolean` (default: `false`)
- `flags2`: `table` or `nil`
- `nonblock`: `boolean` (default: `false`)

Create a pair of connected sockets with the specified
properties. The resulting handles can be passed to
[uv.tcp_open()|, used with |uv.spawn()](#uv.tcp_open()|, used with |uv.spawn()), or for any other
purpose.

When specified as a string, `socktype` must be one of
`"stream"`, `"dgram"`, `"raw"`, `"rdm"`, or `"seqpacket"`.

When `protocol` is set to 0 or nil, it will be automatically
chosen based on the socket's domain and type. When `protocol`
is specified as a string, it will be looked up using the
`getprotobyname(3)` function (examples: `"ip"`, `"icmp"`,
`"tcp"`, `"udp"`, etc).

Flags:
- `nonblock`: Opens the specified socket handle for
`OVERLAPPED` or `FIONBIO`/`O_NONBLOCK` I/O usage. This is
recommended for handles that will be used by libuv, and not
usually recommended otherwise.

Equivalent to `socketpair(2)` with a domain of `AF_UNIX`.

Returns: `table` or `fail`
- `[1, 2]` : `integer` (file descriptor)
```
-- Simple read/write with tcp
local fds = uv.socketpair(nil, nil, {nonblock=true}, {nonblock=true})

local sock1 = uv.new_tcp()
sock1:open(fds[1])

local sock2 = uv.new_tcp()
sock2:open(fds[2])

sock1:write("hello")
sock2:read_start(function(err, chunk)
assert(not err, err)
print(chunk)
end)

```



## <a id="luv-pipe-handle uv_pipe_t" class="section-title" href="#luv-pipe-handle uv_pipe_t">`Uv_Pipe_T` — Pipe Handle</a> 

> [uv_handle_t| and |uv_stream_t](#uv_handle_t| and |uv_stream_t) functions also apply.

Pipe handles provide an abstraction over local domain sockets on Unix and
named pipes on Windows.
```
local pipe = uv.new_pipe(false)

pipe:bind('/tmp/sock.test')

pipe:listen(128, function()
local client = uv.new_pipe(false)
pipe:accept(client)
client:write("hello!\n")
client:close()
end)

```


### <a id="uv.new_pipe()" class="section-title" href="#uv.new_pipe()">uv.new_pipe([{ipc}])</a>

Parameters:
- `ipc`: `boolean` or `nil` (default: `false`)

Creates and initializes a new [uv_pipe_t](#uv_pipe_t). Returns the Lua
userdata wrapping it. The `ipc` argument is a boolean to
indicate if this pipe will be used for handle passing between
processes.

Returns: `uv_pipe_t userdata` or `fail`

### <a id="uv.pipe_open()" class="section-title" href="#uv.pipe_open()">uv.pipe_open({pipe}, {fd})</a>

> method form `pipe:open(fd)`

Parameters:
- `pipe`: `uv_pipe_t userdata`
- `fd`: `integer`

Open an existing file descriptor or [uv_handle_t](#uv_handle_t) as a
pipe.

Returns: `0` or `fail`

Note: The file descriptor is set to non-blocking mode.

### <a id="uv.pipe_bind()" class="section-title" href="#uv.pipe_bind()">uv.pipe_bind({pipe}, {name})</a>

> method form `pipe:bind(name)`

Parameters:
- `pipe`: `uv_pipe_t userdata`
- `name`: `string`

Bind the pipe to a file path (Unix) or a name (Windows).

Returns: `0` or `fail`

Note: Paths on Unix get truncated to
sizeof(sockaddr_un.sun_path) bytes, typically between 92 and
108 bytes.

### <a id="uv.pipe_connect()" class="section-title" href="#uv.pipe_connect()">uv.pipe_connect({pipe}, {name} [, {callback}])</a>

> method form `pipe:connect(name, [callback])`

Parameters:
- `pipe`: `uv_pipe_t userdata`
- `name`: `string`
- `callback`: `callable` or `nil`
- `err`: `nil` or `string`

Connect to the Unix domain socket or the named pipe.

Returns: `uv_connect_t userdata` or `fail`

Note: Paths on Unix get truncated to
sizeof(sockaddr_un.sun_path) bytes, typically between 92 and
108 bytes.

### <a id="uv.pipe_getsockname()" class="section-title" href="#uv.pipe_getsockname()">uv.pipe_getsockname({pipe})</a>

> method form `pipe:getsockname()`

Parameters:
- `pipe`: `uv_pipe_t userdata`

Get the name of the Unix domain socket or the named pipe.

Returns: `string` or `fail`

### <a id="uv.pipe_getpeername()" class="section-title" href="#uv.pipe_getpeername()">uv.pipe_getpeername({pipe})</a>

> method form `pipe:getpeername()`

Parameters:
- `pipe`: `uv_pipe_t userdata`

Get the name of the Unix domain socket or the named pipe to
which the handle is connected.

Returns: `string` or `fail`

### <a id="uv.pipe_pending_instances()" class="section-title" href="#uv.pipe_pending_instances()">uv.pipe_pending_instances({pipe}, {count})</a>

> method form `pipe:pending_instances(count)`

Parameters:
- `pipe`: `uv_pipe_t userdata`
- `count`: `integer`

Set the number of pending pipe instance handles when the pipe
server is waiting for connections.

Returns: Nothing.

Note: This setting applies to Windows only.

### <a id="uv.pipe_pending_count()" class="section-title" href="#uv.pipe_pending_count()">uv.pipe_pending_count({pipe})</a>

> method form `pipe:pending_count()`

Parameters:
- `pipe`: `uv_pipe_t userdata`

Returns the pending pipe count for the named pipe.

Returns: `integer`

### <a id="uv.pipe_pending_type()" class="section-title" href="#uv.pipe_pending_type()">uv.pipe_pending_type({pipe})</a>

> method form `pipe:pending_type()`

Parameters:
- `pipe`: `uv_pipe_t userdata`

Used to receive handles over IPC pipes.

First - call [uv.pipe_pending_count()](#uv.pipe_pending_count()), if it's > 0 then
initialize a handle of the given type, returned by
`uv.pipe_pending_type()` and call `uv.accept(pipe, handle)` .

Returns: `string`

### <a id="uv.pipe_chmod()" class="section-title" href="#uv.pipe_chmod()">uv.pipe_chmod({pipe}, {flags})</a>

> method form `pipe:chmod(flags)`

Parameters:
- `pipe`: `uv_pipe_t userdata`
- `flags`: `string`

Alters pipe permissions, allowing it to be accessed from
processes run by different users. Makes the pipe writable or
readable by all users. `flags` are: `"r"`, `"w"`, `"rw"`, or
`"wr"` where `r` is `READABLE` and `w` is `WRITABLE`. This
function is blocking.

Returns: `0` or `fail`

### <a id="uv.pipe()" class="section-title" href="#uv.pipe()">uv.pipe({read_flags}, {write_flags})</a>

Parameters:
- `read_flags`: `table` or `nil`
- `nonblock`: `boolean` (default: `false`)
- `write_flags`: `table` or `nil`
- `nonblock`: `boolean` (default: `false`)

Create a pair of connected pipe handles. Data may be written
to the `write` fd and read from the `read` fd. The resulting
handles can be passed to `pipe_open`, used with `spawn`, or
for any other purpose.

Flags:
- `nonblock`: Opens the specified socket handle for
`OVERLAPPED` or `FIONBIO`/`O_NONBLOCK` I/O usage. This is
recommended for handles that will be used by libuv, and not
usually recommended otherwise.

Equivalent to `pipe(2)` with the `O_CLOEXEC` flag set.

Returns: `table` or `fail`
- `read` : `integer` (file descriptor)
- `write` : `integer` (file descriptor)
```
-- Simple read/write with pipe_open
local fds = uv.pipe({nonblock=true}, {nonblock=true})

local read_pipe = uv.new_pipe()
read_pipe:open(fds.read)

local write_pipe = uv.new_pipe()
write_pipe:open(fds.write)

write_pipe:write("hello")
read_pipe:read_start(function(err, chunk)
assert(not err, err)
print(chunk)
end)

```



## <a id="luv-tty-handle uv_tty_t" class="section-title" href="#luv-tty-handle uv_tty_t">`Uv_Tty_T` — TTY Handle</a> 

> [uv_handle_t| and |uv_stream_t](#uv_handle_t| and |uv_stream_t) functions also apply.

TTY handles represent a stream for the console.
```
-- Simple echo program
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
end)

```


### <a id="uv.new_tty()" class="section-title" href="#uv.new_tty()">uv.new_tty({fd}, {readable})</a>

Parameters:
- `fd`: `integer`
- `readable`: `boolean`

Initialize a new TTY stream with the given file descriptor.
Usually the file descriptor will be:

- 0 - stdin
- 1 - stdout
- 2 - stderr

On Unix this function will determine the path of the fd of the
terminal using ttyname_r(3), open it, and use it if the passed
file descriptor refers to a TTY. This lets libuv put the tty
in non-blocking mode without affecting other processes that
share the tty.

This function is not thread safe on systems that don’t support
ioctl TIOCGPTN or TIOCPTYGNAME, for instance OpenBSD and
Solaris.

Returns: `uv_tty_t userdata` or `fail`

Note: If reopening the TTY fails, libuv falls back to blocking
writes.

### <a id="uv.tty_set_mode()" class="section-title" href="#uv.tty_set_mode()">uv.tty_set_mode({tty}, {mode})</a>

> method form `tty:set_mode(mode)`

Parameters:
- `tty`: `uv_tty_t userdata`
- `mode`: `integer`

Set the TTY using the specified terminal mode.

Parameter `mode` is a C enum with the following values:

- 0 - UV_TTY_MODE_NORMAL: Initial/normal terminal mode
- 1 - UV_TTY_MODE_RAW: Raw input mode (On Windows,
ENABLE_WINDOW_INPUT is also enabled)
- 2 - UV_TTY_MODE_IO: Binary-safe I/O mode for IPC
(Unix-only)

Returns: `0` or `fail`

### <a id="uv.tty_reset_mode()" class="section-title" href="#uv.tty_reset_mode()">uv.tty_reset_mode()</a>

To be called when the program exits. Resets TTY settings to
default values for the next process to take over.

This function is async signal-safe on Unix platforms but can
fail with error code `EBUSY` if you call it when execution is
inside [uv.tty_set_mode()](#uv.tty_set_mode()).

Returns: `0` or `fail`

### <a id="uv.tty_get_winsize()" class="section-title" href="#uv.tty_get_winsize()">uv.tty_get_winsize({tty})</a>

> method form `tty:get_winsize()`

Parameters:
- `tty`: `uv_tty_t userdata`

Gets the current Window width and height.

Returns: `integer, integer` or `fail`

### <a id="uv.tty_set_vterm_state()" class="section-title" href="#uv.tty_set_vterm_state()">uv.tty_set_vterm_state({state})</a>

Parameters:
- `state`: `string`

Controls whether console virtual terminal sequences are
processed by libuv or console. Useful in particular for
enabling ConEmu support of ANSI X3.64 and Xterm 256 colors.
Otherwise Windows10 consoles are usually detected
automatically. State should be one of: `"supported"` or
`"unsupported"`.

This function is only meaningful on Windows systems. On Unix
it is silently ignored.

Returns: none

### <a id="uv.tty_get_vterm_state()" class="section-title" href="#uv.tty_get_vterm_state()">uv.tty_get_vterm_state()</a>

Get the current state of whether console virtual terminal
sequences are handled by libuv or the console. The return
value is `"supported"` or `"unsupported"`.

This function is not implemented on Unix, where it returns
`ENOTSUP`.

Returns: `string` or `fail`


## <a id="luv-udp-handle uv_udp_t" class="section-title" href="#luv-udp-handle uv_udp_t">`Uv_Udp_T` — UDP Handle</a> 

> [uv_handle_t](#uv_handle_t) functions also apply.

UDP handles encapsulate UDP communication for both clients and servers.

### <a id="uv.new_udp()" class="section-title" href="#uv.new_udp()">uv.new_udp([{flags}])</a>

Parameters:
- `flags`: `table` or `nil`
- `family`: `string` or `nil`
- `mmsgs`: `integer` or `nil` (default: `1`)

Creates and initializes a new [uv_udp_t](#uv_udp_t). Returns the Lua
userdata wrapping it. The actual socket is created lazily.

When specified, `family` must be one of `"unix"`, `"inet"`,
`"inet6"`, `"ipx"`, `"netlink"`, `"x25"`, `"ax25"`,
`"atmpvc"`, `"appletalk"`, or `"packet"`.

When specified, `mmsgs` determines the number of messages able
to be received at one time via `recvmmsg(2)` (the allocated
buffer will be sized to be able to fit the specified number of
max size dgrams). Only has an effect on platforms that support
`recvmmsg(2)`.

Note: For backwards compatibility reasons, `flags` can also be
a string or integer. When it is a string, it will be treated
like the `family` key above. When it is an integer, it will be
used directly as the `flags` parameter when calling
`uv_udp_init_ex`.

Returns: `uv_udp_t userdata` or `fail`

### <a id="uv.udp_get_send_queue_size()" class="section-title" href="#uv.udp_get_send_queue_size()">uv.udp_get_send_queue_size()</a>

> method form `udp:get_send_queue_size()`

Returns the handle's send queue size.

Returns: `integer`

### <a id="uv.udp_get_send_queue_count()" class="section-title" href="#uv.udp_get_send_queue_count()">uv.udp_get_send_queue_count()</a>

> method form `udp:get_send_queue_count()`

Returns the handle's send queue count.

Returns: `integer`

### <a id="uv.udp_open()" class="section-title" href="#uv.udp_open()">uv.udp_open({udp}, {fd})</a>

> method form `udp:open(fd)`

Parameters:
- `udp`: `uv_udp_t userdata`
- `fd`: `integer`

Opens an existing file descriptor or Windows SOCKET as a UDP
handle.

Unix only: The only requirement of the sock argument is that
it follows the datagram contract (works in unconnected mode,
supports sendmsg()/recvmsg(), etc). In other words, other
datagram-type sockets like raw sockets or netlink sockets can
also be passed to this function.

The file descriptor is set to non-blocking mode.

Note: The passed file descriptor or SOCKET is not checked for
its type, but it's required that it represents a valid
datagram socket.

Returns: `0` or `fail`

### <a id="uv.udp_bind()" class="section-title" href="#uv.udp_bind()">uv.udp_bind({udp}, {host}, {port} [, {flags}])</a>

> method form `udp:bind(host, port, [flags])`

Parameters:
- `udp`: `uv_udp_t userdata`
- `host`: `string`
- `port`: `number`
- `flags`: `table` or `nil`
- `ipv6only`: `boolean`
- `reuseaddr`: `boolean`

Bind the UDP handle to an IP address and port. Any `flags` are
set with a table with fields `reuseaddr` or `ipv6only` equal
to `true` or `false`.

Returns: `0` or `fail`

### <a id="uv.udp_getsockname()" class="section-title" href="#uv.udp_getsockname()">uv.udp_getsockname({udp})</a>

> method form `udp:getsockname()`

Parameters:
- `udp`: `uv_udp_t userdata`

Get the local IP and port of the UDP handle.

Returns: `table` or `fail`
- `ip` : `string`
- `family` : `string`
- `port` : `integer`

### <a id="uv.udp_getpeername()" class="section-title" href="#uv.udp_getpeername()">uv.udp_getpeername({udp})</a>

> method form `udp:getpeername()`

Parameters:
- `udp`: `uv_udp_t userdata`

Get the remote IP and port of the UDP handle on connected UDP
handles.

Returns: `table` or `fail`
- `ip` : `string`
- `family` : `string`
- `port` : `integer`

### <a id="uv.udp_set_membership()" class="section-title" href="#uv.udp_set_membership()">Note:</a>
uv.udp_set_membership({udp}, {multicast_addr}, {interface_addr}, {membership})

> method form
> `udp:set_membership(multicast_addr, interface_addr, membership)`

Parameters:
- `udp`: `uv_udp_t userdata`
- `multicast_addr`: `string`
- `interface_addr`: `string` or `nil`
- `membership`: `string`

Set membership for a multicast address. `multicast_addr` is
multicast address to set membership for. `interface_addr` is
interface address. `membership` can be the string `"leave"` or
`"join"`.

Returns: `0` or `fail`

### <a id="uv.udp_set_source_membership()" class="section-title" href="#uv.udp_set_source_membership()">Note:</a>
uv.udp_set_source_membership({udp}, {multicast_addr}, {interface_addr}, {source_addr}, {membership})

> method form
> `udp:set_source_membership(multicast_addr, interface_addr, source_addr, membership)`

Parameters:
- `udp`: `uv_udp_t userdata`
- `multicast_addr`: `string`
- `interface_addr`: `string` or `nil`
- `source_addr`: `string`
- `membership`: `string`

Set membership for a source-specific multicast group.
`multicast_addr` is multicast address to set membership for.
`interface_addr` is interface address. `source_addr` is source
address. `membership` can be the string `"leave"` or `"join"`.

Returns: `0` or `fail`

### <a id="uv.udp_set_multicast_loop()" class="section-title" href="#uv.udp_set_multicast_loop()">uv.udp_set_multicast_loop({udp}, {on})</a>

> method form `udp:set_multicast_loop(on)`

Parameters:
- `udp`: `uv_udp_t userdata`
- `on`: `boolean`

Set IP multicast loop flag. Makes multicast packets loop back
to local sockets.

Returns: `0` or `fail`

### <a id="uv.udp_set_multicast_ttl()" class="section-title" href="#uv.udp_set_multicast_ttl()">uv.udp_set_multicast_ttl({udp}, {ttl})</a>

> method form `udp:set_multicast_ttl(ttl)`

Parameters:
- `udp`: `uv_udp_t userdata`
- `ttl`: `integer`

Set the multicast ttl.

`ttl` is an integer 1 through 255.

Returns: `0` or `fail`

### <a id="uv.udp_set_multicast_interface()" class="section-title" href="#uv.udp_set_multicast_interface()">Note:</a>
uv.udp_set_multicast_interface({udp}, {interface_addr})

> method form `udp:set_multicast_interface(interface_addr)`

Parameters:
- `udp`: `uv_udp_t userdata`
- `interface_addr`: `string`

Set the multicast interface to send or receive data on.

Returns: `0` or `fail`

### <a id="uv.udp_set_broadcast()" class="section-title" href="#uv.udp_set_broadcast()">uv.udp_set_broadcast({udp}, {on})</a>

> method form `udp:set_broadcast(on)`

Parameters:
- `udp`: `uv_udp_t userdata`
- `on`: `boolean`

Set broadcast on or off.

Returns: `0` or `fail`

### <a id="uv.udp_set_ttl()" class="section-title" href="#uv.udp_set_ttl()">uv.udp_set_ttl({udp}, {ttl})</a>

> method form `udp:set_ttl(ttl)`

Parameters:
- `udp`: `uv_udp_t userdata`
- `ttl`: `integer`

Set the time to live.

`ttl` is an integer 1 through 255.

Returns: `0` or `fail`

### <a id="uv.udp_send()" class="section-title" href="#uv.udp_send()">uv.udp_send({udp}, {data}, {host}, {port}, {callback})</a>

> method form `udp:send(data, host, port, callback)`

Parameters:
- `udp`: `uv_udp_t userdata`
- `data`: `buffer`
- `host`: `string`
- `port`: `integer`
- `callback`: `callable`
- `err`: `nil` or `string`

Send data over the UDP socket. If the socket has not
previously been bound with [uv.udp_bind()](#uv.udp_bind()) it will be bound to
`0.0.0.0` (the "all interfaces" IPv4 address) and a random
port number.

Returns: `uv_udp_send_t userdata` or `fail`

### <a id="uv.udp_try_send()" class="section-title" href="#uv.udp_try_send()">uv.udp_try_send({udp}, {data}, {host}, {port})</a>

> method form `udp:try_send(data, host, port)`

Parameters:
- `udp`: `uv_udp_t userdata`
- `data`: `buffer`
- `host`: `string`
- `port`: `integer`

Same as [uv.udp_send()](#uv.udp_send()), but won't queue a send request if it
can't be completed immediately.

Returns: `integer` or `fail`

### <a id="uv.udp_recv_start()" class="section-title" href="#uv.udp_recv_start()">uv.udp_recv_start({udp}, {callback})</a>

> method form `udp:recv_start(callback)`

Parameters:
- `udp`: `uv_udp_t userdata`
- `callback`: `callable`
- `err`: `nil` or `string`
- `data`: `string` or `nil`
- `addr`: `table` or `nil`
- `ip`: `string`
- `port`: `integer`
- `family`: `string`
- `flags`: `table`
- `partial`: `boolean` or `nil`
- `mmsg_chunk`: `boolean` or `nil`

Prepare for receiving data. If the socket has not previously
been bound with [uv.udp_bind()](#uv.udp_bind()) it is bound to `0.0.0.0` (the
"all interfaces" IPv4 address) and a random port number.

Returns: `0` or `fail`

### <a id="uv.udp_recv_stop()" class="section-title" href="#uv.udp_recv_stop()">uv.udp_recv_stop({udp})</a>

> method form `udp:recv_stop()`

Parameters:
- `udp`: `uv_udp_t userdata`

Stop listening for incoming datagrams.

Returns: `0` or `fail`

### <a id="uv.udp_connect()" class="section-title" href="#uv.udp_connect()">uv.udp_connect({udp}, {host}, {port})</a>

> method form `udp:connect(host, port)`

Parameters:
- `udp`: `uv_udp_t userdata`
- `host`: `string`
- `port`: `integer`

Associate the UDP handle to a remote address and port, so
every message sent by this handle is automatically sent to
that destination. Calling this function with a NULL addr
disconnects the handle. Trying to call `uv.udp_connect()` on
an already connected handle will result in an `EISCONN` error.
Trying to disconnect a handle that is not connected will
return an `ENOTCONN` error.

Returns: `0` or `fail`


## <a id="luv-fs-event-handle uv_fs_event_t" class="section-title" href="#luv-fs-event-handle uv_fs_event_t">`Uv_Fs_Event_T` — FS Event Handle</a> 

> [uv_handle_t](#uv_handle_t) functions also apply.

FS Event handles allow the user to monitor a given path for changes, for
example, if the file was renamed or there was a generic change in it. This
handle uses the best backend for the job on each platform.

### <a id="uv.new_fs_event()" class="section-title" href="#uv.new_fs_event()">uv.new_fs_event()</a>

Creates and initializes a new [uv_fs_event_t](#uv_fs_event_t). Returns the Lua
userdata wrapping it.

Returns: `uv_fs_event_t userdata` or `fail`

uv.fs_event_start({fs_event}, {path}, {flags}, {callback}) *uv.fs_event_start()*

> method form `fs_event:start(path, flags, callback)`

Parameters:
- `fs_event`: `uv_fs_event_t userdata`
- `path`: `string`
- `flags`: `table`
- `watch_entry`: `boolean` or `nil` (default: `false`)
- `stat`: `boolean` or `nil` (default: `false`)
- `recursive`: `boolean` or `nil` (default: `false`)
- `callback`: `callable`
- `err`: `nil` or `string`
- `filename`: `string`
- `events`: `table`
- `change`: `boolean` or `nil`
- `rename`: `boolean` or `nil`

Start the handle with the given callback, which will watch the
specified path for changes.

Returns: `0` or `fail`

### <a id="uv.fs_event_stop()" class="section-title" href="#uv.fs_event_stop()">uv.fs_event_stop()</a>

> method form `fs_event:stop()`

Stop the handle, the callback will no longer be called.

Returns: `0` or `fail`

### <a id="uv.fs_event_getpath()" class="section-title" href="#uv.fs_event_getpath()">uv.fs_event_getpath()</a>

> method form `fs_event:getpath()`

Get the path being monitored by the handle.

Returns: `string` or `fail`


## <a id="luv-fs-poll-handle uv_fs_poll_t" class="section-title" href="#luv-fs-poll-handle uv_fs_poll_t">`Uv_Fs_Poll_T` — FS Poll Handle</a> 

> [uv_handle_t](#uv_handle_t) functions also apply.

FS Poll handles allow the user to monitor a given path for changes. Unlike
[uv_fs_event_t](#uv_fs_event_t), fs poll handles use `stat` to detect when a file has changed
so they can work on file systems where fs event handles can't.

### <a id="uv.new_fs_poll()" class="section-title" href="#uv.new_fs_poll()">uv.new_fs_poll()</a>

Creates and initializes a new [uv_fs_poll_t](#uv_fs_poll_t). Returns the Lua
userdata wrapping it.

Returns: `uv_fs_poll_t userdata` or `fail`

uv.fs_poll_start({fs_poll}, {path}, {interval}, {callback}) *uv.fs_poll_start()*

> method form `fs_poll:start(path, interval, callback)`

Parameters:
- `fs_event`: `uv_fs_event_t userdata`
- `path`: `string`
- `interval`: `integer`
- `callback`: `callable`
- `err`: `nil` or `string`
- `prev`: `table` or `nil` (see `uv.fs_stat`)
- `curr`: `table` or `nil` (see `uv.fs_stat`)

Check the file at `path` for changes every `interval`
milliseconds.

Note: For maximum portability, use multi-second intervals.
Sub-second intervals will not detect all changes on many file
systems.

Returns: `0` or `fail`

### <a id="uv.fs_poll_stop()" class="section-title" href="#uv.fs_poll_stop()">uv.fs_poll_stop()</a>

> method form `fs_poll:stop()`

Stop the handle, the callback will no longer be called.

Returns: `0` or `fail`

### <a id="uv.fs_poll_getpath()" class="section-title" href="#uv.fs_poll_getpath()">uv.fs_poll_getpath()</a>

> method form `fs_poll:getpath()`

Get the path being monitored by the handle.

Returns: `string` or `fail`


## <a id="luv-file-system-operations uv_fs_t" class="section-title" href="#luv-file-system-operations uv_fs_t">File System Operations</a> 

Most file system functions can operate synchronously or asynchronously. When a
synchronous version is called (by omitting a callback), the function will
immediately return the results of the FS call. When an asynchronous version is
called (by providing a callback), the function will immediately return a
`uv_fs_t userdata` and asynchronously execute its callback; if an error is
encountered, the first and only argument passed to the callback will be the
`err` error string; if the operation completes successfully, the first
argument will be `nil` and the remaining arguments will be the results of the
FS call.

Synchronous and asynchronous versions of `readFile` (with naive error
handling) are implemented below as an example:
```
local function readFileSync(path)
local fd = assert(uv.fs_open(path, "r", 438))
local stat = assert(uv.fs_fstat(fd))
local data = assert(uv.fs_read(fd, stat.size, 0))
assert(uv.fs_close(fd))
return data
end

local data = readFileSync("main.lua")
print("synchronous read", data)

```

```
local function readFile(path, callback)
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
end)

```


### <a id="uv.fs_close()" class="section-title" href="#uv.fs_close()">uv.fs_close({fd} [, {callback}])</a>

Parameters:
- `fd`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `close(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_open()" class="section-title" href="#uv.fs_open()">uv.fs_open({path}, {flags}, {mode} [, {callback}])</a>

Parameters:
- `path`: `string`
- `flags`: `string` or `integer`
- `mode`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `fd`: `integer` or `nil`

Equivalent to `open(2)`. Access `flags` may be an integer or
one of: `"r"`, `"rs"`, `"sr"`, `"r+"`, `"rs+"`, `"sr+"`,
`"w"`, `"wx"`, `"xw"`, `"w+"`, `"wx+"`, `"xw+"`, `"a"`,
`"ax"`, `"xa"`, `"a+"`, `"ax+"`, or "`xa+`".

Returns (sync version): `integer` or `fail`

Returns (async version): `uv_fs_t userdata`

Note: On Windows, libuv uses `CreateFileW` and thus the file
is always opened in binary mode. Because of this, the
`O_BINARY` and `O_TEXT` flags are not supported.

### <a id="uv.fs_read()" class="section-title" href="#uv.fs_read()">uv.fs_read({fd}, {size} [, {offset} [, {callback}]])</a>

Parameters:
- `fd`: `integer`
- `size`: `integer`
- `offset`: `integer` or `nil`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `data`: `string` or `nil`

Equivalent to `preadv(2)`. Returns any data. An empty string
indicates EOF.

If `offset` is nil or omitted, it will default to `-1`, which
indicates 'use and update the current file offset.'

Note: When `offset` is >= 0, the current file offset will not
be updated by the read.

Returns (sync version): `string` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_unlink()" class="section-title" href="#uv.fs_unlink()">uv.fs_unlink({path} [, {callback}])</a>

Parameters:
- `path`: `string`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `unlink(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_write()" class="section-title" href="#uv.fs_write()">uv.fs_write({fd}, {data} [, {offset} [, {callback}]])</a>

Parameters:
- `fd`: `integer`
- `data`: `buffer`
- `offset`: `integer` or `nil`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `bytes`: `integer` or `nil`

Equivalent to `pwritev(2)`. Returns the number of bytes
written.

If `offset` is nil or omitted, it will default to `-1`, which
indicates 'use and update the current file offset.'

Note: When `offset` is >= 0, the current file offset will not
be updated by the write.

Returns (sync version): `integer` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_mkdir()" class="section-title" href="#uv.fs_mkdir()">uv.fs_mkdir({path}, {mode} [, {callback}])</a>

Parameters:
- `path`: `string`
- `mode`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `mkdir(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_mkdtemp()" class="section-title" href="#uv.fs_mkdtemp()">uv.fs_mkdtemp({template} [, {callback}])</a>

Parameters:
- `template`: `string`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `path`: `string` or `nil`

Equivalent to `mkdtemp(3)`.

Returns (sync version): `string` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_mkstemp()" class="section-title" href="#uv.fs_mkstemp()">uv.fs_mkstemp({template} [, {callback}])</a>

Parameters:
- `template`: `string`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `fd`: `integer` or `nil`
- `path`: `string` or `nil`

Equivalent to `mkstemp(3)`. Returns a temporary file handle
and filename.

Returns (sync version): `integer, string` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_rmdir()" class="section-title" href="#uv.fs_rmdir()">uv.fs_rmdir({path} [, {callback}])</a>

Parameters:
- `path`: `string`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `rmdir(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_scandir()" class="section-title" href="#uv.fs_scandir()">uv.fs_scandir({path} [, {callback}])</a>

Parameters:
- `path`: `string`
- `callback`: `callable`
- `err`: `nil` or `string`
- `success`: `uv_fs_t userdata` or `nil`

Equivalent to `scandir(3)`, with a slightly different API.
Returns a handle that the user can pass to
[uv.fs_scandir_next()](#uv.fs_scandir_next()).

Note: This function can be used synchronously or
asynchronously. The request userdata is always synchronously
returned regardless of whether a callback is provided and the
same userdata is passed to the callback if it is provided.

Returns: `uv_fs_t userdata` or `fail`

### <a id="uv.fs_scandir_next()" class="section-title" href="#uv.fs_scandir_next()">uv.fs_scandir_next({fs})</a>

Parameters:
- `fs`: `uv_fs_t userdata`

Called on a [uv_fs_t| returned by |uv.fs_scandir()](#uv_fs_t| returned by |uv.fs_scandir()) to get the
next directory entry data as a `name, type` pair. When there
are no more entries, `nil` is returned.

Note: This function only has a synchronous version. See
[uv.fs_opendir()](#uv.fs_opendir()) and its related functions for an
asynchronous version.

Returns: `string, string` or `nil` or `fail`

### <a id="uv.fs_stat()" class="section-title" href="#uv.fs_stat()">uv.fs_stat({path} [, {callback}])</a>

Parameters:
- `path`: `string`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `stat`: `table` or `nil` (see below)

Equivalent to `stat(2)`.

Returns (sync version): `table` or `fail`
- `dev` : `integer`
- `mode` : `integer`
- `nlink` : `integer`
- `uid` : `integer`
- `gid` : `integer`
- `rdev` : `integer`
- `ino` : `integer`
- `size` : `integer`
- `blksize` : `integer`
- `blocks` : `integer`
- `flags` : `integer`
- `gen` : `integer`
- `atime` : `table`
- `sec` : `integer`
- `nsec` : `integer`
- `mtime` : `table`
- `sec` : `integer`
- `nsec` : `integer`
- `ctime` : `table`
- `sec` : `integer`
- `nsec` : `integer`
- `birthtime` : `table`
- `sec` : `integer`
- `nsec` : `integer`
- `type` : `string`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_fstat()" class="section-title" href="#uv.fs_fstat()">uv.fs_fstat({fd} [, {callback}])</a>

Parameters:
- `fd`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `stat`: `table` or `nil` (see `uv.fs_stat`)

Equivalent to `fstat(2)`.

Returns (sync version): `table` or `fail` (see `uv.fs_stat`)

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_lstat()" class="section-title" href="#uv.fs_lstat()">uv.fs_lstat({path} [, {callback}])</a>

Parameters:
- `fd`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `stat`: `table` or `nil` (see `uv.fs_stat`)

Equivalent to `lstat(2)`.

Returns (sync version): `table` or `fail` (see [uv.fs_stat()](#uv.fs_stat()))

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_rename()" class="section-title" href="#uv.fs_rename()">uv.fs_rename({path}, {new_path} [, {callback}])</a>

Parameters:
- `path`: `string`
- `new_path`: `string`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `rename(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_fsync()" class="section-title" href="#uv.fs_fsync()">uv.fs_fsync({fd} [, {callback}])</a>

Parameters:
- `fd`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `fsync(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_fdatasync()" class="section-title" href="#uv.fs_fdatasync()">uv.fs_fdatasync({fd} [, {callback}])</a>

Parameters:
- `fd`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `fdatasync(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_ftruncate()" class="section-title" href="#uv.fs_ftruncate()">uv.fs_ftruncate({fd}, {offset} [, {callback}])</a>

Parameters:
- `fd`: `integer`
- `offset`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `ftruncate(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_sendfile()" class="section-title" href="#uv.fs_sendfile()">Note:</a>
uv.fs_sendfile({out_fd}, {in_fd}, {in_offset}, {size} [, {callback}])

Parameters:
- `out_fd`: `integer`
- `in_fd`: `integer`
- `in_offset`: `integer`
- `size`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `bytes`: `integer` or `nil`

Limited equivalent to `sendfile(2)`. Returns the number of
bytes written.

Returns (sync version): `integer` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_access()" class="section-title" href="#uv.fs_access()">uv.fs_access({path}, {mode} [, {callback}])</a>

Parameters:
- `path`: `string`
- `mode`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `permission`: `boolean` or `nil`

Equivalent to `access(2)` on Unix. Windows uses
`GetFileAttributesW()`. Access `mode` can be an integer or a
string containing `"R"` or `"W"` or `"X"`. Returns `true` or
`false` indicating access permission.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_chmod()" class="section-title" href="#uv.fs_chmod()">uv.fs_chmod({path}, {mode} [, {callback}])</a>

Parameters:
- `path`: `string`
- `mode`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `chmod(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_fchmod()" class="section-title" href="#uv.fs_fchmod()">uv.fs_fchmod({fd}, {mode} [, {callback}])</a>

Parameters:
- `fd`: `integer`
- `mode`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `fchmod(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_utime()" class="section-title" href="#uv.fs_utime()">uv.fs_utime({path}, {atime}, {mtime} [, {callback}])</a>

Parameters:
- `path`: `string`
- `atime`: `number`
- `mtime`: `number`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `utime(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_futime()" class="section-title" href="#uv.fs_futime()">uv.fs_futime({fd}, {atime}, {mtime} [, {callback}])</a>

Parameters:
- `fd`: `integer`
- `atime`: `number`
- `mtime`: `number`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `futime(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_lutime()" class="section-title" href="#uv.fs_lutime()">uv.fs_lutime({path}, {atime}, {mtime} [, {callback}])</a>

Parameters:
- `path`: `string`
- `atime`: `number`
- `mtime`: `number`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `lutime(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_link()" class="section-title" href="#uv.fs_link()">uv.fs_link({path}, {new_path} [, {callback}])</a>

Parameters:
- `path`: `string`
- `new_path`: `string`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `link(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_symlink()" class="section-title" href="#uv.fs_symlink()">uv.fs_symlink({path}, {new_path} [, {flags} [, {callback}]])</a>

Parameters:
- `path`: `string`
- `new_path`: `string`
- `flags`: `table`, `integer`, or `nil`
- `dir`: `boolean`
- `junction`: `boolean`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `symlink(2)`. If the `flags` parameter is
omitted, then the 3rd parameter will be treated as the
`callback`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_readlink()" class="section-title" href="#uv.fs_readlink()">uv.fs_readlink({path} [, {callback}])</a>

Parameters:
- `path`: `string`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `path`: `string` or `nil`

Equivalent to `readlink(2)`.

Returns (sync version): `string` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_realpath()" class="section-title" href="#uv.fs_realpath()">uv.fs_realpath({path} [, {callback}])</a>

Parameters:
- `path`: `string`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `path`: `string` or `nil`

Equivalent to `realpath(3)`.

Returns (sync version): `string` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_chown()" class="section-title" href="#uv.fs_chown()">uv.fs_chown({path}, {uid}, {gid} [, {callback}])</a>

Parameters:
- `path`: `string`
- `uid`: `integer`
- `gid`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `chown(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_fchown()" class="section-title" href="#uv.fs_fchown()">uv.fs_fchown({fd}, {uid}, {gid} [, {callback}])</a>

Parameters:
- `fd`: `integer`
- `uid`: `integer`
- `gid`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `fchown(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_lchown()" class="section-title" href="#uv.fs_lchown()">uv.fs_lchown({fd}, {uid}, {gid} [, {callback}])</a>

Parameters:
- `fd`: `integer`
- `uid`: `integer`
- `gid`: `integer`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Equivalent to `lchown(2)`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

uv.fs_copyfile({path}, {new_path} [, {flags} [, {callback}]]) *uv.fs_copyfile()*

Parameters:
- `path`: `string`
- `new_path`: `string`
- `flags`: `table`, `integer`, or `nil`
- `excl`: `boolean`
- `ficlone`: `boolean`
- `ficlone_force`: `boolean`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Copies a file from path to new_path. If the `flags` parameter
is omitted, then the 3rd parameter will be treated as the
`callback`.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_opendir()" class="section-title" href="#uv.fs_opendir()">uv.fs_opendir({path} [, {callback} [, {entries}]])</a>

Parameters:
- `path`: `string`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `dir`: `luv_dir_t userdata` or `nil`
- `entries`: `integer` or `nil`

Opens path as a directory stream. Returns a handle that the
user can pass to [uv.fs_readdir()](#uv.fs_readdir()). The `entries` parameter
defines the maximum number of entries that should be returned
by each call to [uv.fs_readdir()](#uv.fs_readdir()).

Returns (sync version): `luv_dir_t userdata` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_readdir()" class="section-title" href="#uv.fs_readdir()">uv.fs_readdir({dir} [, {callback}])</a>

> method form `dir:readdir([callback])`

Parameters:
- `dir`: `luv_dir_t userdata`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `entries`: `table` or `nil` (see below)

Iterates over the directory stream `luv_dir_t` returned by a
successful [uv.fs_opendir()](#uv.fs_opendir()) call. A table of data tables is
returned where the number of entries `n` is equal to or less
than the `entries` parameter used in the associated
[uv.fs_opendir()](#uv.fs_opendir()) call.

Returns (sync version): `table` or `fail`
- `[1, 2, 3, ..., n]` : `table`
- `name` : `string`
- `type` : `string`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_closedir()" class="section-title" href="#uv.fs_closedir()">uv.fs_closedir({dir} [, {callback}])</a>

> method form `dir:closedir([callback])`

Parameters:
- `dir`: `luv_dir_t userdata`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `success`: `boolean` or `nil`

Closes a directory stream returned by a successful
[uv.fs_opendir()](#uv.fs_opendir()) call.

Returns (sync version): `boolean` or `fail`

Returns (async version): `uv_fs_t userdata`

### <a id="uv.fs_statfs()" class="section-title" href="#uv.fs_statfs()">uv.fs_statfs({path} [, {callback}])</a>

Parameters:
- `path`: `string`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `table` or `nil` (see below)

Equivalent to `statfs(2)`.

Returns `table` or `nil`
- `type` : `integer`
- `bsize` : `integer`
- `blocks` : `integer`
- `bfree` : `integer`
- `bavail` : `integer`
- `files` : `integer`
- `ffree` : `integer`


## <a id="luv-thread-pool-work-scheduling" class="section-title" href="#luv-thread-pool-work-scheduling">Thread Pool Work Scheduling</a> 

Libuv provides a threadpool which can be used to run user code and get
notified in the loop thread. This threadpool is internally used to run all
file system operations, as well as `getaddrinfo` and `getnameinfo` requests.
```
local function work_callback(a, b)
return a + b
end

local function after_work_callback(c)
print("The result is: " .. c)
end

local work = uv.new_work(work_callback, after_work_callback)

work:queue(1, 2)

-- output: "The result is: 3"

```


### <a id="uv.new_work()" class="section-title" href="#uv.new_work()">uv.new_work({work_callback}, {after_work_callback})</a>

Parameters:
- `work_callback`: `function`
- `...`: `threadargs` passed to/from
`uv.queue_work(work_ctx, ...)`
- `after_work_callback`: `function`
- `...`: `threadargs` returned from `work_callback`

Creates and initializes a new `luv_work_ctx_t` (not
`uv_work_t`). Returns the Lua userdata wrapping it.

Returns: `luv_work_ctx_t userdata`

### <a id="uv.queue_work()" class="section-title" href="#uv.queue_work()">uv.queue_work({work_ctx}, {...})</a>

> method form `work_ctx:queue(...)`

Parameters:
- `work_ctx`: `luv_work_ctx_t userdata`
- `...`: `threadargs`

Queues a work request which will run `work_callback` in a new
Lua state in a thread from the threadpool with any additional
arguments from `...`. Values returned from `work_callback` are
passed to `after_work_callback`, which is called in the main
loop thread.

Returns: `boolean` or `fail`


## <a id="luv-dns-utility-functions" class="section-title" href="#luv-dns-utility-functions">Dns Utility Functions</a> 

### <a id="uv.getaddrinfo()" class="section-title" href="#uv.getaddrinfo()">uv.getaddrinfo({host}, {service} [, {hints} [, {callback}]])</a>

Parameters:
- `host`: `string` or `nil`
- `service`: `string` or `nil`
- `hints`: `table` or `nil`
- `family`: `string` or `integer` or `nil`
- `socktype`: `string` or `integer` or `nil`
- `protocol`: `string` or `integer` or `nil`
- `addrconfig`: `boolean` or `nil`
- `v4mapped`: `boolean` or `nil`
- `all`: `boolean` or `nil`
- `numerichost`: `boolean` or `nil`
- `passive`: `boolean` or `nil`
- `numericserv`: `boolean` or `nil`
- `canonname`: `boolean` or `nil`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `addresses`: `table` or `nil` (see below)

Equivalent to `getaddrinfo(3)`. Either `node` or `service` may
be `nil` but not both.

Valid hint strings for the keys that take a string:
- `family`: `"unix"`, `"inet"`, `"inet6"`, `"ipx"`,
`"netlink"`, `"x25"`, `"ax25"`, `"atmpvc"`, `"appletalk"`,
or `"packet"`
- `socktype`: `"stream"`, `"dgram"`, `"raw"`, `"rdm"`, or
`"seqpacket"`
- `protocol`: will be looked up using the `getprotobyname(3)`
function (examples: `"ip"`, `"icmp"`, `"tcp"`, `"udp"`, etc)

Returns (sync version): `table` or `fail`
- `[1, 2, 3, ..., n]` : `table`
- `addr` : `string`
- `family` : `string`
- `port` : `integer` or `nil`
- `socktype` : `string`
- `protocol` : `string`
- `canonname` : `string` or `nil`

Returns (async version): `uv_getaddrinfo_t userdata` or `fail`

### <a id="uv.getnameinfo()" class="section-title" href="#uv.getnameinfo()">uv.getnameinfo({address} [, {callback}])</a>

Parameters:
- `address`: `table`
- `ip`: `string` or `nil`
- `port`: `integer` or `nil`
- `family`: `string` or `integer` or `nil`
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `host`: `string` or `nil`
- `service`: `string` or `nil`

Equivalent to `getnameinfo(3)`.

When specified, `family` must be one of `"unix"`, `"inet"`,
`"inet6"`, `"ipx"`, `"netlink"`, `"x25"`, `"ax25"`,
`"atmpvc"`, `"appletalk"`, or `"packet"`.

Returns (sync version): `string, string` or `fail`

Returns (async version): `uv_getnameinfo_t userdata` or `fail`


## <a id="" class="section-title" href="#">THREADING AND SYNCHRONIZATION UTILITIES *Luv-Threading-And-Synchronization-Utilities*</a> 

Libuv provides cross-platform implementations for multiple threading an
synchronization primitives. The API largely follows the pthreads API.

### <a id="uv.new_thread()" class="section-title" href="#uv.new_thread()">uv.new_thread([{options}, ] {entry}, {...})</a>

Parameters:
- `options`: `table` or `nil`
- `stack_size`: `integer` or `nil`
- `entry`: `function`
- `...`: `threadargs` passed to `entry`

Creates and initializes a `luv_thread_t` (not `uv_thread_t`).
Returns the Lua userdata wrapping it and asynchronously
executes `entry`, which can be either a Lua function or a Lua
function dumped to a string. Additional arguments `...` are
passed to the `entry` function and an optional `options` table
may be provided. Currently accepted `option` fields are
`stack_size`.

Returns: `luv_thread_t userdata` or `fail`

### <a id="uv.thread_equal()" class="section-title" href="#uv.thread_equal()">uv.thread_equal({thread}, {other_thread})</a>

> method form `thread:equal(other_thread)`

Parameters:
- `thread`: `luv_thread_t userdata`
- `other_thread`: `luv_thread_t userdata`

Returns a boolean indicating whether two threads are the same.
This function is equivalent to the `__eq` metamethod.

Returns: `boolean`

### <a id="uv.thread_self()" class="section-title" href="#uv.thread_self()">uv.thread_self()</a>

Returns the handle for the thread in which this is called.

Returns: `luv_thread_t`

### <a id="uv.thread_join()" class="section-title" href="#uv.thread_join()">uv.thread_join({thread})</a>

> method form `thread:join()`

Parameters:
- `thread`: `luv_thread_t userdata`

Waits for the `thread` to finish executing its entry function.

Returns: `boolean` or `fail`

### <a id="uv.sleep()" class="section-title" href="#uv.sleep()">uv.sleep({msec})</a>

Parameters:
- `msec`: `integer`

Pauses the thread in which this is called for a number of
milliseconds.

Returns: Nothing.


## <a id="luv-miscellaneous-utilities" class="section-title" href="#luv-miscellaneous-utilities">Miscellaneous Utilities</a> 

### <a id="uv.exepath()" class="section-title" href="#uv.exepath()">uv.exepath()</a>

Returns the executable path.

Returns: `string` or `fail`

### <a id="uv.cwd()" class="section-title" href="#uv.cwd()">uv.cwd()</a>

Returns the current working directory.

Returns: `string` or `fail`

### <a id="uv.chdir()" class="section-title" href="#uv.chdir()">uv.chdir({cwd})</a>

Parameters:
- `cwd`: `string`

Sets the current working directory with the string `cwd`.

Returns: `0` or `fail`

### <a id="uv.get_process_title()" class="section-title" href="#uv.get_process_title()">uv.get_process_title()</a>

Returns the title of the current process.

Returns: `string` or `fail`

### <a id="uv.set_process_title()" class="section-title" href="#uv.set_process_title()">uv.set_process_title({title})</a>

Parameters:
- `title`: `string`

Sets the title of the current process with the string `title`.

Returns: `0` or `fail`

### <a id="uv.get_total_memory()" class="section-title" href="#uv.get_total_memory()">uv.get_total_memory()</a>

Returns the current total system memory in bytes.

Returns: `number`

### <a id="uv.get_free_memory()" class="section-title" href="#uv.get_free_memory()">uv.get_free_memory()</a>

Returns the current free system memory in bytes.

Returns: `number`

### <a id="uv.get_constrained_memory()" class="section-title" href="#uv.get_constrained_memory()">uv.get_constrained_memory()</a>

Gets the amount of memory available to the process in bytes
based on limits imposed by the OS. If there is no such
constraint, or the constraint is unknown, 0 is returned. Note
that it is not unusual for this value to be less than or
greater than the total system memory.

Returns: `number`

### <a id="uv.resident_set_memory()" class="section-title" href="#uv.resident_set_memory()">uv.resident_set_memory()</a>

Returns the resident set size (RSS) for the current process.

Returns: `integer` or `fail`

### <a id="uv.getrusage()" class="section-title" href="#uv.getrusage()">uv.getrusage()</a>

Returns the resource usage.

Returns: `table` or `fail`
- `utime` : `table` (user CPU time used)
- `sec` : `integer`
- `usec` : `integer`
- `stime` : `table` (system CPU time used)
- `sec` : `integer`
- `usec` : `integer`
- `maxrss` : `integer` (maximum resident set size)
- `ixrss` : `integer` (integral shared memory size)
- `idrss` : `integer` (integral unshared data size)
- `isrss` : `integer` (integral unshared stack size)
- `minflt` : `integer` (page reclaims (soft page faults))
- `majflt` : `integer` (page faults (hard page faults))
- `nswap` : `integer` (swaps)
- `inblock` : `integer` (block input operations)
- `oublock` : `integer` (block output operations)
- `msgsnd` : `integer` (IPC messages sent)
- `msgrcv` : `integer` (IPC messages received)
- `nsignals` : `integer` (signals received)
- `nvcsw` : `integer` (voluntary context switches)
- `nivcsw` : `integer` (involuntary context switches)

### <a id="uv.available_parallelism()" class="section-title" href="#uv.available_parallelism()">uv.available_parallelism()</a>

Returns an estimate of the default amount of parallelism a
program should use. Always returns a non-zero value.

On Linux, inspects the calling thread’s CPU affinity mask to
determine if it has been pinned to specific CPUs.

On Windows, the available parallelism may be underreported on
systems with more than 64 logical CPUs.

On other platforms, reports the number of CPUs that the
operating system considers to be online.

Returns: `integer`

### <a id="uv.cpu_info()" class="section-title" href="#uv.cpu_info()">uv.cpu_info()</a>

Returns information about the CPU(s) on the system as a table
of tables for each CPU found.

Returns: `table` or `fail`
- `[1, 2, 3, ..., n]` : `table`
- `model` : `string`
- `speed` : `number`
- `times` : `table`
- `user` : `number`
- `nice` : `number`
- `sys` : `number`
- `idle` : `number`
- `irq` : `number`

### <a id="uv.getpid()" class="section-title" href="#uv.getpid()">uv.getpid()</a>

DEPRECATED: Please use [uv.os_getpid()](#uv.os_getpid()) instead.

### <a id="uv.getuid()" class="section-title" href="#uv.getuid()">uv.getuid()</a>

Returns the user ID of the process.

Returns: `integer`

Note: This is not a libuv function and is not supported on
Windows.

### <a id="uv.getgid()" class="section-title" href="#uv.getgid()">uv.getgid()</a>

Returns the group ID of the process.

Returns: `integer`

Note: This is not a libuv function and is not supported on
Windows.

### <a id="uv.setuid()" class="section-title" href="#uv.setuid()">uv.setuid({id})</a>

Parameters:
- `id`: `integer`

Sets the user ID of the process with the integer `id`.

Returns: Nothing.

Note: This is not a libuv function and is not supported on
Windows.

### <a id="uv.setgid()" class="section-title" href="#uv.setgid()">uv.setgid({id})</a>

Parameters:
- `id`: `integer`

Sets the group ID of the process with the integer `id`.

Returns: Nothing.

Note: This is not a libuv function and is not supported on
Windows.

### <a id="uv.hrtime()" class="section-title" href="#uv.hrtime()">uv.hrtime()</a>

Returns a current high-resolution time in nanoseconds as a
number. This is relative to an arbitrary time in the past. It
is not related to the time of day and therefore not subject to
clock drift. The primary use is for measuring time between
intervals.

Returns: `number`

### <a id="uv.uptime()" class="section-title" href="#uv.uptime()">uv.uptime()</a>

Returns the current system uptime in seconds.

Returns: `number` or `fail`

### <a id="uv.print_all_handles()" class="section-title" href="#uv.print_all_handles()">uv.print_all_handles()</a>

Prints all handles associated with the main loop to stderr.
The format is `[flags] handle-type handle-address` . Flags are
`R` for referenced, `A` for active and `I` for internal.

Returns: Nothing.

Note: This is not available on Windows.

WARNING: This function is meant for ad hoc debugging, there
are no API/ABI stability guarantees.

### <a id="uv.print_active_handles()" class="section-title" href="#uv.print_active_handles()">uv.print_active_handles()</a>

The same as [uv.print_all_handles()](#uv.print_all_handles()) except only active
handles are printed.

Returns: Nothing.

Note: This is not available on Windows.

WARNING: This function is meant for ad hoc debugging, there
are no API/ABI stability guarantees.

### <a id="uv.guess_handle()" class="section-title" href="#uv.guess_handle()">uv.guess_handle({fd})</a>

Parameters:
- `fd`: `integer`

Used to detect what type of stream should be used with a given
file descriptor `fd`. Usually this will be used during
initialization to guess the type of the stdio streams.

Returns: `string`

### <a id="uv.gettimeofday()" class="section-title" href="#uv.gettimeofday()">uv.gettimeofday()</a>

Cross-platform implementation of `gettimeofday(2)`. Returns
the seconds and microseconds of a unix time as a pair.

Returns: `integer, integer` or `fail`

### <a id="uv.interface_addresses()" class="section-title" href="#uv.interface_addresses()">uv.interface_addresses()</a>

Returns address information about the network interfaces on
the system in a table. Each table key is the name of the
interface while each associated value is an array of address
information where fields are `ip`, `family`, `netmask`,
`internal`, and `mac`.

Returns: `table`
- `[name(s)]` : `table`
- `ip` : `string`
- `family` : `string`
- `netmask` : `string`
- `internal` : `boolean`
- `mac` : `string`

### <a id="uv.if_indextoname()" class="section-title" href="#uv.if_indextoname()">uv.if_indextoname({ifindex})</a>

Parameters:
- `ifindex`: `integer`

IPv6-capable implementation of `if_indextoname(3)`.

Returns: `string` or `fail`

### <a id="uv.if_indextoiid()" class="section-title" href="#uv.if_indextoiid()">uv.if_indextoiid({ifindex})</a>

Parameters:
- `ifindex`: `integer`

Retrieves a network interface identifier suitable for use in
an IPv6 scoped address. On Windows, returns the numeric
`ifindex` as a string. On all other platforms,
[uv.if_indextoname()](#uv.if_indextoname()) is used.

Returns: `string` or `fail`

### <a id="uv.loadavg()" class="section-title" href="#uv.loadavg()">uv.loadavg()</a>

Returns the load average as a triad. Not supported on Windows.

Returns: `number, number, number`

### <a id="uv.os_uname()" class="section-title" href="#uv.os_uname()">uv.os_uname()</a>

Returns system information.

Returns: `table`
- `sysname` : `string`
- `release` : `string`
- `version` : `string`
- `machine` : `string`

### <a id="uv.os_gethostname()" class="section-title" href="#uv.os_gethostname()">uv.os_gethostname()</a>

Returns the hostname.

Returns: `string`

### <a id="uv.os_getenv()" class="section-title" href="#uv.os_getenv()">uv.os_getenv({name} [, {size}])</a>

Parameters:
- `name`: `string`
- `size`: `integer` (default = `LUAL_BUFFERSIZE`)

Returns the environment variable specified by `name` as
string. The internal buffer size can be set by defining
`size`. If omitted, `LUAL_BUFFERSIZE` is used. If the
environment variable exceeds the storage available in the
internal buffer, `ENOBUFS` is returned. If no matching
environment variable exists, `ENOENT` is returned.

Returns: `string` or `fail`

WARNING: This function is not thread safe.

### <a id="uv.os_setenv()" class="section-title" href="#uv.os_setenv()">uv.os_setenv({name}, {value})</a>

Parameters:
- `name`: `string`
- `value`: `string`

Sets the environmental variable specified by `name` with the
string `value`.

Returns: `boolean` or `fail`

WARNING: This function is not thread safe.

### <a id="uv.os_unsetenv()" class="section-title" href="#uv.os_unsetenv()">uv.os_unsetenv()</a>

Returns: `boolean` or `fail`

WARNING: This function is not thread safe.

### <a id="uv.os_environ()" class="section-title" href="#uv.os_environ()">uv.os_environ()</a>

Returns all environmental variables as a dynamic table of
names associated with their corresponding values.

Returns: `table`

WARNING: This function is not thread safe.

### <a id="uv.os_homedir()" class="section-title" href="#uv.os_homedir()">uv.os_homedir()</a>

Returns: `string` or `fail`

WARNING: This function is not thread safe.

### <a id="uv.os_tmpdir()" class="section-title" href="#uv.os_tmpdir()">uv.os_tmpdir()</a>

Returns: `string` or `fail`

WARNING: This function is not thread safe.

### <a id="uv.os_get_passwd()" class="section-title" href="#uv.os_get_passwd()">uv.os_get_passwd()</a>

Returns password file information.

Returns: `table`
- `username` : `string`
- `uid` : `integer`
- `gid` : `integer`
- `shell` : `string`
- `homedir` : `string`

### <a id="uv.os_getpid()" class="section-title" href="#uv.os_getpid()">uv.os_getpid()</a>

Returns the current process ID.

Returns: `number`

### <a id="uv.os_getppid()" class="section-title" href="#uv.os_getppid()">uv.os_getppid()</a>

Returns the parent process ID.

Returns: `number`

### <a id="uv.os_getpriority()" class="section-title" href="#uv.os_getpriority()">uv.os_getpriority({pid})</a>

Parameters:
- `pid`: `integer`

Returns the scheduling priority of the process specified by
`pid`.

Returns: `number` or `fail`

### <a id="uv.os_setpriority()" class="section-title" href="#uv.os_setpriority()">uv.os_setpriority({pid}, {priority})</a>

Parameters:
- `pid`: `integer`
- `priority`: `integer`

Sets the scheduling priority of the process specified by
`pid`. The `priority` range is between -20 (high priority) and
19 (low priority).

Returns: `boolean` or `fail`

### <a id="uv.random()" class="section-title" href="#uv.random()">uv.random({len}, {flags} [, {callback}])</a>

Parameters:
- `len`: `integer`
- `flags`: `nil` (see below)
- `callback`: `callable` (async version) or `nil` (sync
version)
- `err`: `nil` or `string`
- `bytes`: `string` or `nil`

Fills a string of length `len` with cryptographically strong
random bytes acquired from the system CSPRNG. `flags` is
reserved for future extension and must currently be `nil` or
`0` or `{}`.

Short reads are not possible. When less than `len` random
bytes are available, a non-zero error value is returned or
passed to the callback. If the callback is omitted, this
function is completed synchronously.

The synchronous version may block indefinitely when not enough
entropy is available. The asynchronous version may not ever
finish when the system is low on entropy.

Returns (sync version): `string` or `fail`

Returns (async version): `0` or `fail`

### <a id="uv.translate_sys_error()" class="section-title" href="#uv.translate_sys_error()">uv.translate_sys_error({errcode})</a>

Parameters:
- `errcode`: `integer`

Returns the libuv error message and error name (both in string
form, see `err` and `name` in [luv-error-handling](#luv-error-handling)) equivalent
to the given platform dependent error code: POSIX error codes
on Unix (the ones stored in errno), and Win32 error codes on
Windows (those returned by GetLastError() or
WSAGetLastError()).

Returns: `string, string` or `nil`


## <a id="luv-metrics-operations" class="section-title" href="#luv-metrics-operations">Metrics Operations</a> 

### <a id="uv.metrics_idle_time()" class="section-title" href="#uv.metrics_idle_time()">uv.metrics_idle_time()</a>

Retrieve the amount of time the event loop has been idle in
the kernel’s event provider (e.g. `epoll_wait`). The call is
thread safe.

The return value is the accumulated time spent idle in the
kernel’s event provider starting from when the [uv_loop_t](#uv_loop_t) was
configured to collect the idle time.

Note: The event loop will not begin accumulating the event
provider’s idle time until calling `loop_configure` with
`"metrics_idle_time"`.

Returns: `number`


## <a id="luv-credits" class="section-title" href="#luv-credits">Credits</a> 

This document is a reformatted version of the LUV documentation, based on
commit c51e705 (5 May 2022) of the luv repository
https://github.com/luvit/luv/commit/c51e7052ec4f0a25058f70c1b4ee99dd36180e59.

Included from https://github.com/nanotee/luv-vimdocs with kind permission.


vim:tw=78:ts=8:ft=help:norl:
