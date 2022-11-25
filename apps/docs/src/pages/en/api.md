---
title:  Api
layout: ../../layouts/MainLayout.astro
---

  <a name="api.txt"></a><a name="API"></a><h1> Api</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/api.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="help-para">
Nvim API <a name="api"></a><code class="help-tag">api</code>

</div>
<div class="help-para">
Nvim exposes a powerful API that can be used by plugins and external processes
via <a href="/neovim-docs-web/en/api#RPC">RPC</a>, <a href="/neovim-docs-web/en/lua#Lua">Lua</a> and VimL (<a href="/neovim-docs-web/en/builtin#eval-api">eval-api</a>).

</div>
<div class="help-para">
Applications can also embed libnvim to work with the C API directly.

</div>
<div class="help-para">
<h2 class="help-heading">API Usage<span class="help-heading-tags">                                               <a name="api-rpc"></a><span class="help-tag">api-rpc</span> <a name="RPC"></a><span class="help-tag">RPC</span> <a name="rpc"></a><span class="help-tag">rpc</span></span></h2>


</div>
<div class="help-para">
                                                        <a name="msgpack-rpc"></a><code class="help-tag-right">msgpack-rpc</code>
RPC is the typical way to control Nvim programmatically.  Nvim implements the
MessagePack-RPC protocol:
  <a href="https://github.com/msgpack-rpc/msgpack-rpc/blob/master/spec.md">https://github.com/msgpack-rpc/msgpack-rpc/blob/master/spec.md</a>
  <a href="https://github.com/msgpack/msgpack/blob/0b8f5ac/spec.md">https://github.com/msgpack/msgpack/blob/0b8f5ac/spec.md</a>

</div>
<div class="help-para">
Many clients use the API: user interfaces (GUIs), remote plugins, scripts like
"nvr" (<a href="https://github.com/mhinz/neovim-remote">https://github.com/mhinz/neovim-remote</a>).  Even Nvim itself can control
other Nvim instances.  API clients can:

</div>
<div class="help-para">
<div class="help-li" style=""> Call any API function
</div><div class="help-li" style=""> Listen for events
</div><div class="help-li" style=""> Receive remote calls from Nvim
</div>
</div>
<div class="help-para">
The RPC API is like a more powerful version of Vim's "clientserver" feature.

</div>
<div class="help-para">
<h3 class="help-heading">CONNECTING<span class="help-heading-tags">                                              <a name="rpc-connecting"></a><span class="help-tag">rpc-connecting</span></span></h3>


</div>
<div class="help-para">
See <a href="/neovim-docs-web/en/channel#channel-intro">channel-intro</a> for various ways to open a channel. Channel-opening
functions take an <code>rpc</code> key in the options dictionary. RPC channels can also
be opened by other processes connecting to TCP/IP sockets or named pipes
listened to by Nvim.

</div>
<div class="help-para">
Nvim creates a default RPC socket at <a href="/neovim-docs-web/en/starting#startup">startup</a>, given by <a href="/neovim-docs-web/en/eval#v%3Aservername">v:servername</a>. To
start with a TCP/IP socket instead, use <a href="/neovim-docs-web/en/starting#--listen">--listen</a> with a TCP-style address:<pre>nvim --listen 127.0.0.1:6666</pre>
More endpoints can be started with <a href="/neovim-docs-web/en/builtin#serverstart()">serverstart()</a>.

</div>
<div class="help-para">
Note that localhost TCP sockets are generally less secure than named pipes,
and can lead to vulnerabilities like remote code execution.

</div>
<div class="help-para">
Connecting to the socket is the easiest way a programmer can test the API,
which can be done through any msgpack-rpc client library or full-featured
<a href="/neovim-docs-web/en/develop#api-client">api-client</a>. Here's a Ruby script that prints "hello world!" in the current
Nvim instance:
<pre>#!/usr/bin/env ruby
# Requires msgpack-rpc: gem install msgpack-rpc
#
# To run this script, execute it from a running Nvim instance (notice the
# trailing '&amp;' which is required since Nvim won't process events while
# running a blocking command):
#
#   :!./hello.rb &amp;
#
# Or from another shell by setting NVIM_LISTEN_ADDRESS:
# $ NVIM_LISTEN_ADDRESS=[address] ./hello.rb

require 'msgpack/rpc'
require 'msgpack/rpc/transport/unix'

nvim = MessagePack::RPC::Client.new(MessagePack::RPC::UNIXTransport.new, ENV['NVIM_LISTEN_ADDRESS'])
result = nvim.call(:nvim_command, 'echo "hello world!"')</pre>

</div>
<div class="help-para">
A better way is to use the Python REPL with the "pynvim" package, where API
functions can be called interactively:
<pre>&gt;&gt;&gt; from pynvim import attach
&gt;&gt;&gt; nvim = attach('socket', path='[address]')
&gt;&gt;&gt; nvim.command('echo "hello world!"')</pre>

</div>
<div class="help-para">
You can also embed Nvim via <a href="/neovim-docs-web/en/builtin#jobstart()">jobstart()</a>, and communicate using <a href="/neovim-docs-web/en/builtin#rpcrequest()">rpcrequest()</a>
and <a href="/neovim-docs-web/en/builtin#rpcnotify()">rpcnotify()</a>:
<pre>let nvim = jobstart(['nvim', '--embed'], {'rpc': v:true})
echo rpcrequest(nvim, 'nvim_eval', '"Hello " . "world!"')
call jobstop(nvim)</pre>

</div>
<div class="help-para">
<h2 class="help-heading">API Definitions<span class="help-heading-tags">                                         <a name="api-definitions"></a><span class="help-tag">api-definitions</span></span></h2>


</div>
<div class="help-para">
                                                        <a name="api-types"></a><code class="help-tag-right">api-types</code>
The Nvim C API defines custom types for all function parameters. Some are just
typedefs around C99 standard types, others are Nvim-defined data structures.

</div>
<div class="help-para">
<div class="help-column_heading">Basic types</div>
<pre>API Type                              C type
------------------------------------------------------------------------
Nil
Boolean                               bool
Integer (signed 64-bit integer)       int64_t
Float (IEEE 754 double precision)     double
String                                {char* data, size_t size} struct
Array
Dictionary (msgpack: map)
Object</pre>

</div>
<div class="help-para">
  Note: empty Array is accepted as a valid argument for Dictionary parameter.

</div>
<div class="help-para">
<div class="help-column_heading">Special types (msgpack EXT)</div>

</div>
<div class="help-para">
  These are integer typedefs discriminated as separate Object subtypes. They
  can be treated as opaque integers, but are mutually incompatible: Buffer may
  be passed as an integer but not as Window or Tabpage.

</div>
<div class="help-para">
  The EXT object data is the (integer) object handle. The EXT type codes given
  in the <a href="/neovim-docs-web/en/api#api-metadata">api-metadata</a> <code>types</code> key are stable: they will not change and are
  thus forward-compatible.
<pre>EXT Type      C type                                  Data
------------------------------------------------------------------------
Buffer        enum value kObjectTypeBuffer            |bufnr()|
Window        enum value kObjectTypeWindow            |window-ID|
Tabpage       enum value kObjectTypeTabpage           internal handle</pre>

</div>
<div class="help-para">
                                                        <a name="api-indexing"></a><code class="help-tag-right">api-indexing</code>
Most of the API uses 0-based indices, and ranges are end-exclusive. For the
end of a range, -1 denotes the last line/column.

</div>
<div class="help-para">
Exception: the following API functions use "mark-like" indexing (1-based
lines, 0-based columns):

</div>
<div class="help-para">
<div class="help-li" style=""> <a href="/neovim-docs-web/en/api#nvim_get_mark()">nvim_get_mark()</a>
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/api#nvim_buf_get_mark()">nvim_buf_get_mark()</a>
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/api#nvim_buf_set_mark()">nvim_buf_set_mark()</a>
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/api#nvim_win_get_cursor()">nvim_win_get_cursor()</a>
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/api#nvim_win_set_cursor()">nvim_win_set_cursor()</a>
</div>
</div>
<div class="help-para">
Exception: the following API functions use <a href="/neovim-docs-web/en/api#extmarks">extmarks</a> indexing (0-based
indices, end-inclusive):

</div>
<div class="help-para">
<div class="help-li" style=""> <a href="/neovim-docs-web/en/api#nvim_buf_del_extmark()">nvim_buf_del_extmark()</a>
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/api#nvim_buf_get_extmark_by_id()">nvim_buf_get_extmark_by_id()</a>
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/api#nvim_buf_get_extmarks()">nvim_buf_get_extmarks()</a>
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/api#nvim_buf_set_extmark()">nvim_buf_set_extmark()</a>
</div>
</div>
<div class="help-para">
                                                        <a name="api-fast"></a><code class="help-tag-right">api-fast</code>
Most API functions are "deferred": they are queued on the main loop and
processed sequentially with normal input.  So if the editor is waiting for
user input in a "modal" fashion (e.g. the <a href="/neovim-docs-web/en/message#hit-enter-prompt">hit-enter-prompt</a>), the request
will block.  Non-deferred (fast) functions such as <a href="/neovim-docs-web/en/api#nvim_get_mode()">nvim_get_mode()</a> and
<a href="/neovim-docs-web/en/api#nvim_input()">nvim_input()</a> are served immediately (i.e. without waiting in the input
queue).  Lua code can use <a href="/neovim-docs-web/en/lua#vim.in_fast_event()">vim.in_fast_event()</a> to detect a fast context.

</div>
<div class="help-para">
<h2 class="help-heading">API metadata<span class="help-heading-tags">                                            <a name="api-metadata"></a><span class="help-tag">api-metadata</span></span></h2>


</div>
<div class="help-para">
The Nvim C API is automatically exposed to RPC by the build system, which
parses headers in src/nvim/api/* and generates dispatch-functions mapping RPC
API method names to public C API functions, converting/validating arguments
and return values.

</div>
<div class="help-para">
Nvim exposes its API metadata as a Dictionary with these items:

</div>
<div class="help-para">
<div class="help-li" style=""> version                 Nvim version, API level/compatibility
</div><div class="help-li" style=""> version.api_level       API version integer <a name="api-level"></a><code class="help-tag">api-level</code>
</div><div class="help-li" style=""> version.api_compatible  API is backwards-compatible with this level
</div><div class="help-li" style=""> version.api_prerelease  Declares the API as unstable/unreleased
                          <code>(version.api_prerelease &amp;&amp; fn.since == version.api_level)</code>
</div><div class="help-li" style=""> functions               API function signatures, containing <a href="/neovim-docs-web/en/api#api-types">api-types</a> info
                          describing the return value and parameters.
</div><div class="help-li" style=""> ui_events               <a href="/neovim-docs-web/en/ui#UI">UI</a> event signatures
</div><div class="help-li" style=""> ui_options              Supported <a href="/neovim-docs-web/en/ui#ui-option">ui-option</a>s
</div><div class="help-li" style=""> <code>{fn}</code>.since              API level where function <code>{fn}</code> was introduced
</div><div class="help-li" style=""> <code>{fn}</code>.deprecated_since   API level where function <code>{fn}</code> was deprecated
</div><div class="help-li" style=""> types                   Custom handle types defined by Nvim
</div><div class="help-li" style=""> error_types             Possible error types returned by API functions
</div>
</div>
<div class="help-para">
About the <code>functions</code> map:

</div>
<div class="help-para">
<div class="help-li" style=""> Container types may be decorated with type/size constraints, e.g.
    ArrayOf(Buffer) or ArrayOf(Integer, 2).
</div><div class="help-li" style=""> Functions considered to be methods that operate on instances of Nvim
    special types (msgpack EXT) have the "method=true" flag. The receiver type
    is that of the first argument. Method names are prefixed with <code>nvim_</code> plus
    a type name, e.g. <code>nvim_buf_get_lines</code> is the <code>get_lines</code> method of
    a Buffer instance. <a href="/neovim-docs-web/en/develop#dev-api">dev-api</a>
</div><div class="help-li" style=""> Global functions have the "method=false" flag and are prefixed with just
    <code>nvim_</code>, e.g. <code>nvim_list_bufs</code>.
</div>
</div>
<div class="help-para">
                                                        <a name="api-mapping"></a><code class="help-tag-right">api-mapping</code>
External programs (clients) can use the metadata to discover the API, using
any of these approaches:

</div>
<div class="help-para">
  1. Connect to a running Nvim instance and call <a href="/neovim-docs-web/en/api#nvim_get_api_info()">nvim_get_api_info()</a> via
     msgpack-RPC. This is best for clients written in dynamic languages which
     can define functions at runtime.

</div>
<div class="help-para">
  2. Start Nvim with <a href="/neovim-docs-web/en/starting#--api-info">--api-info</a>. Useful for statically-compiled clients.
     Example (requires Python "pyyaml" and "msgpack-python" modules):<pre>nvim --api-info | python -c 'import msgpack, sys, yaml; yaml.dump(msgpack.unpackb(sys.stdin.buffer.read()), sys.stdout)'</pre>

</div>
<div class="help-para">
  3. Use the <a href="/neovim-docs-web/en/builtin#api_info()">api_info()</a> Vimscript function.<pre>:lua print(vim.inspect(vim.fn.api_info()))</pre>

</div>
<div class="help-para">
     Example using <a href="/neovim-docs-web/en/builtin#filter()">filter()</a> to exclude non-deprecated API functions:<pre>:new|put =map(filter(api_info().functions, '!has_key(v:val,''deprecated_since'')'), 'v:val.name')</pre>
<h2 class="help-heading">API contract<span class="help-heading-tags">                                                     <a name="api-contract"></a><span class="help-tag">api-contract</span></span></h2>


</div>
<div class="help-para">
The Nvim API is composed of functions and events.

</div>
<div class="help-para">
<div class="help-li" style=""> Clients call functions like those described at <a href="/neovim-docs-web/en/api#api-global">api-global</a>.
</div><div class="help-li" style=""> Clients can subscribe to <a href="/neovim-docs-web/en/ui#ui-events">ui-events</a>, <a href="/neovim-docs-web/en/api#api-buffer-updates">api-buffer-updates</a>, etc.
</div><div class="help-li" style=""> API function names are prefixed with "nvim_".
</div><div class="help-li" style=""> API event names are prefixed with "nvim_" and suffixed with "_event".
</div>
</div>
<div class="help-para">
As Nvim evolves the API may change in compliance with this CONTRACT:

</div>
<div class="help-para">
<div class="help-li" style=""> New functions and events may be added.
</div><div class="help-li" style="margin-left: 3rem;"> Any such extensions are OPTIONAL: old clients may ignore them.
</div><div class="help-li" style=""> Function signatures will NOT CHANGE (after release).
</div><div class="help-li" style="margin-left: 3rem;"> Functions introduced in the development (unreleased) version MAY CHANGE.
    (Clients can dynamically check <code>api_prerelease</code>, etc. <a href="/neovim-docs-web/en/api#api-metadata">api-metadata</a>)
</div><div class="help-li" style=""> Event parameters will not be removed or reordered (after release).
</div><div class="help-li" style=""> Events may be EXTENDED: new parameters may be added.
</div><div class="help-li" style=""> New items may be ADDED to map/list parameters/results of functions and
  events.
</div><div class="help-li" style="margin-left: 3rem;"> Any such new items are OPTIONAL: old clients may ignore them.
</div><div class="help-li" style="margin-left: 3rem;"> Existing items will not be removed (after release).
</div><div class="help-li" style=""> Deprecated functions will not be removed until Nvim version 2.0
</div>
</div>
<div class="help-para">
"Private" interfaces are NOT covered by this contract:

</div>
<div class="help-para">
<div class="help-li" style=""> Undocumented (not in :help) functions or events of any kind
</div><div class="help-li" style=""> nvim__x ("double underscore") functions
</div>
</div>
<div class="help-para">
The idea is "versionless evolution", in the words of Rich Hickey:
<div class="help-li" style=""> Relaxing a requirement should be a compatible change.
</div><div class="help-li" style=""> Strengthening a promise should be a compatible change.
</div>
</div>
<div class="help-para">
<h2 class="help-heading">Global events<span class="help-heading-tags">                                               <a name="api-global-events"></a><span class="help-tag">api-global-events</span></span></h2>


</div>
<div class="help-para">
When a client invokes an API request as an async notification, it is not
possible for Nvim to send an error response. Instead, in case of error, the
following notification will be sent to the client:

</div>
<div class="help-para">
                                                             <a name="nvim_error_event"></a><code class="help-tag-right">nvim_error_event</code>
nvim_error_event[{type}, <code>{message}</code>]

</div>
<div class="help-para">
<code>{type}</code> is a numeric id as defined by <code>api_info().error_types</code>, and <code>{message}</code> is
a string with the error message.

</div>
<div class="help-para">
<h2 class="help-heading">Buffer update events<span class="help-heading-tags">                                    <a name="api-buffer-updates"></a><span class="help-tag">api-buffer-updates</span></span></h2>


</div>
<div class="help-para">
API clients can "attach" to Nvim buffers to subscribe to buffer update events.
This is similar to <a href="/neovim-docs-web/en/autocmd#TextChanged">TextChanged</a> but more powerful and granular.

</div>
<div class="help-para">
Call <a href="/neovim-docs-web/en/api#nvim_buf_attach()">nvim_buf_attach()</a> to receive these events on the channel:

</div>
<div class="help-para">
                                                        <a name="nvim_buf_lines_event"></a><code class="help-tag-right">nvim_buf_lines_event</code>
nvim_buf_lines_event[{buf}, <code>{changedtick}</code>, <code>{firstline}</code>, <code>{lastline}</code>, <code>{linedata}</code>, <code>{more}</code>]

</div>
<div class="help-para">
    When the buffer text between <code>{firstline}</code> and <code>{lastline}</code> (end-exclusive,
    zero-indexed) were changed to the new text in the <code>{linedata}</code> list. The
    granularity is a line, i.e. if a single character is changed in the
    editor, the entire line is sent.

</div>
<div class="help-para">
    When <code>{changedtick}</code> is <a href="/neovim-docs-web/en/eval#v%3Anull">v:null</a> this means the screen lines (display)
    changed but not the buffer contents. <code>{linedata}</code> contains the changed
    screen lines. This happens when <a href="/neovim-docs-web/en/options#'inccommand'">'inccommand'</a> shows a buffer preview.

</div>
<div class="help-para">
    Properties:~
        <code>{buf}</code> API buffer handle (buffer number)

</div>
<div class="help-para">
        <code>{changedtick}</code> value of <a href="/neovim-docs-web/en/eval#b%3Achangedtick">b:changedtick</a> for the buffer. If you send an
        API command back to nvim you can check the value of <a href="/neovim-docs-web/en/eval#b%3Achangedtick">b:changedtick</a> as
        part of your request to ensure that no other changes have been made.

</div>
<div class="help-para">
        <code>{firstline}</code> integer line number of the first line that was replaced.
        Zero-indexed: if line 1 was replaced then <code>{firstline}</code> will be 0, not
        1. <code>{firstline}</code> is always less than or equal to the number of lines
        that were in the buffer before the lines were replaced.

</div>
<div class="help-para">
        <code>{lastline}</code> integer line number of the first line that was not replaced
        (i.e. the range <code>{firstline}</code>, <code>{lastline}</code> is end-exclusive).
        Zero-indexed: if line numbers 2 to 5 were replaced, this will be 5
        instead of 6. <code>{lastline}</code> is always be less than or equal to the number
        of lines that were in the buffer before the lines were replaced.
        <code>{lastline}</code> will be -1 if the event is part of the initial update after
        attaching.

</div>
<div class="help-para">
        <code>{linedata}</code> list of strings containing the contents of the new buffer
        lines. Newline characters are omitted; empty lines are sent as empty
        strings.

</div>
<div class="help-para">
        <code>{more}</code> boolean, true for a "multipart" change notification: the
        current change was chunked into multiple <a href="/neovim-docs-web/en/api#nvim_buf_lines_event">nvim_buf_lines_event</a>
        notifications (e.g. because it was too big).

</div>
<div class="help-para">
nvim_buf_changedtick_event[{buf}, <code>{changedtick}</code>]  <a name="nvim_buf_changedtick_event"></a><code class="help-tag">nvim_buf_changedtick_event</code>

</div>
<div class="help-para">
    When <a href="/neovim-docs-web/en/eval#b%3Achangedtick">b:changedtick</a> was incremented but no text was changed. Relevant for
    undo/redo.

</div>
<div class="help-para">
    Properties:~
        <code>{buf}</code> API buffer handle (buffer number)
        <code>{changedtick}</code> new value of <a href="/neovim-docs-web/en/eval#b%3Achangedtick">b:changedtick</a> for the buffer

</div>
<div class="help-para">
nvim_buf_detach_event[{buf}]                           <a name="nvim_buf_detach_event"></a><code class="help-tag-right">nvim_buf_detach_event</code>

</div>
<div class="help-para">
    When buffer is detached (i.e. updates are disabled). Triggered explicitly by
    <a href="/neovim-docs-web/en/api#nvim_buf_detach()">nvim_buf_detach()</a> or implicitly in these cases:
<div class="help-li" style=""> Buffer was <a href="/neovim-docs-web/en/editing#abandon">abandon</a>ed and <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> is not set.
</div><div class="help-li" style=""> Buffer was reloaded, e.g. with <a href="/neovim-docs-web/en/editing#%3Aedit">:edit</a> or an external change triggered
      <a href="/neovim-docs-web/en/editing#%3Achecktime">:checktime</a> or <a href="/neovim-docs-web/en/options#'autoread'">'autoread'</a>.
</div><div class="help-li" style=""> Generally: whenever the buffer contents are unloaded from memory.
</div>
</div>
<div class="help-para">
    Properties:~
        <code>{buf}</code> API buffer handle (buffer number)

</div>
<div class="help-para">
<div class="help-column_heading">EXAMPLE</div>

</div>
<div class="help-para">
Calling <a href="/neovim-docs-web/en/api#nvim_buf_attach()">nvim_buf_attach()</a> with send_buffer=true on an empty buffer, emits:<pre>nvim_buf_lines_event[{buf}, {changedtick}, 0, -1, [""], v:false]</pre>
User adds two lines to the buffer, emits:<pre>nvim_buf_lines_event[{buf}, {changedtick}, 0, 0, ["line1", "line2"], v:false]</pre>
User moves to a line containing the text "Hello world" and inserts "!", emits:<pre>nvim_buf_lines_event[{buf}, {changedtick}, {linenr}, {linenr} + 1,
                     ["Hello world!"], v:false]</pre>
User moves to line 3 and deletes 20 lines using "20dd", emits:<pre>nvim_buf_lines_event[{buf}, {changedtick}, 2, 22, [], v:false]</pre>
User selects lines 3-5 using <a href="/neovim-docs-web/en/visual#linewise-visual">linewise-visual</a> mode and then types "p" to
paste a block of 6 lines, emits:<pre>nvim_buf_lines_event[{buf}, {changedtick}, 2, 5,
  ['pasted line 1', 'pasted line 2', 'pasted line 3', 'pasted line 4',
   'pasted line 5', 'pasted line 6'],
  v:false
]</pre>
User reloads the buffer with ":edit", emits:<pre>nvim_buf_detach_event[{buf}]</pre>

</div>
<div class="help-para">
<div class="help-column_heading">LUA</div>
                                                        <a name="api-buffer-updates-lua"></a><code class="help-tag-right">api-buffer-updates-lua</code>
In-process Lua plugins can receive buffer updates in the form of Lua
callbacks. These callbacks are called frequently in various contexts;
<a href="/neovim-docs-web/en/eval#textlock">textlock</a> prevents changing buffer contents and window layout (use
<a href="/neovim-docs-web/en/lua#vim.schedule()">vim.schedule()</a> to defer such operations to the main loop instead).

</div>
<div class="help-para">
<a href="/neovim-docs-web/en/api#nvim_buf_attach()">nvim_buf_attach()</a> will take keyword args for the callbacks. "on_lines" will
receive parameters ("lines", <code>{buf}</code>, <code>{changedtick}</code>, <code>{firstline}</code>, <code>{lastline}</code>,
<code>{new_lastline}</code>, <code>{old_byte_size}</code> [, <code>{old_utf32_size}</code>, <code>{old_utf16_size}</code>]).
Unlike remote channel events the text contents are not passed. The new text can
be accessed inside the callback as

</div>
<div class="help-para">
    <code>vim.api.nvim_buf_get_lines(buf, firstline, new_lastline, true)</code>

</div>
<div class="help-para">
<code>{old_byte_size}</code> is the total size of the replaced region <code>{firstline}</code> to
<code>{lastline}</code> in bytes, including the final newline after <code>{lastline}</code>. if
<code>utf_sizes</code> is set to true in <a href="/neovim-docs-web/en/api#nvim_buf_attach()">nvim_buf_attach()</a> keyword args, then the
UTF-32 and UTF-16 sizes of the deleted region is also passed as additional
arguments <code>{old_utf32_size}</code> and <code>{old_utf16_size}</code>.

</div>
<div class="help-para">
"on_changedtick" is invoked when <a href="/neovim-docs-web/en/eval#b%3Achangedtick">b:changedtick</a> was incremented but no text
was changed. The parameters received are ("changedtick", <code>{buf}</code>, <code>{changedtick}</code>).

</div>
<div class="help-para">
                                                        <a name="api-lua-detach"></a><code class="help-tag-right">api-lua-detach</code>
In-process Lua callbacks can detach by returning <code>true</code>. This will detach all
callbacks attached with the same <a href="/neovim-docs-web/en/api#nvim_buf_attach()">nvim_buf_attach()</a> call.

</div>
<div class="help-para">
<h2 class="help-heading">Buffer highlighting<span class="help-heading-tags">                                            <a name="api-highlights"></a><span class="help-tag">api-highlights</span></span></h2>


</div>
<div class="help-para">
Nvim allows plugins to add position-based highlights to buffers. This is
similar to <a href="/neovim-docs-web/en/builtin#matchaddpos()">matchaddpos()</a> but with some key differences. The added highlights
are associated with a buffer and adapts to line insertions and deletions,
similar to signs. It is also possible to manage a set of highlights as a group
and delete or replace all at once.

</div>
<div class="help-para">
The intended use case are linter or semantic highlighter plugins that monitor
a buffer for changes, and in the background compute highlights to the buffer.
Another use case are plugins that show output in an append-only buffer, and
want to add highlights to the outputs. Highlight data cannot be preserved
on writing and loading a buffer to file, nor in undo/redo cycles.

</div>
<div class="help-para">
Highlights are registered using the <a href="/neovim-docs-web/en/api#nvim_buf_add_highlight()">nvim_buf_add_highlight()</a> function. If an
external highlighter plugin wants to add many highlights in a batch,
performance can be improved by calling <a href="/neovim-docs-web/en/api#nvim_buf_add_highlight()">nvim_buf_add_highlight()</a> as an
asynchronous notification, after first (synchronously) requesting a source id.

</div>
<div class="help-para">
Example using the Python API client (<a href="/neovim-docs-web/en/develop#pynvim">pynvim</a>):
<pre>src = vim.new_highlight_source()
buf = vim.current.buffer
for i in range(5):
    buf.add_highlight("String",i,0,-1,src_id=src)
# some time later ...
buf.clear_namespace(src)</pre>

</div>
<div class="help-para">
If the highlights don't need to be deleted or updated, just pass -1 as
src_id (this is the default in python). Use <a href="/neovim-docs-web/en/api#nvim_buf_clear_namespace()">nvim_buf_clear_namespace()</a> to
clear highlights from a specific source, in a specific line range or the
entire buffer by passing in the line range 0, -1 (the latter is the default in
python as used above).

</div>
<div class="help-para">
Example using the API from Vimscript:<pre>call nvim_buf_set_lines(0, 0, 0, v:true, ["test text"])
let src = nvim_buf_add_highlight(0, 0, "String", 1, 0, 4)
call nvim_buf_add_highlight(0, src, "Identifier", 0, 5, -1)
" some time later ...
call nvim_buf_clear_namespace(0, src, 0, -1)</pre>
<h2 class="help-heading">Floating windows<span class="help-heading-tags">                                                 <a name="api-floatwin"></a><span class="help-tag">api-floatwin</span></span></h2>


</div>
<div class="help-para">
Floating windows ("floats") are displayed on top of normal windows.  This is
useful to implement simple widgets, such as tooltips displayed next to the
cursor. Floats are fully functional windows supporting user editing, common
<a href="/neovim-docs-web/en/api#api-window">api-window</a> calls, and most window options (except <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a>).

</div>
<div class="help-para">
Two ways to create a floating window:
<div class="help-li" style=""> <a href="/neovim-docs-web/en/api#nvim_open_win()">nvim_open_win()</a> creates a new window (needs a buffer, see <a href="/neovim-docs-web/en/api#nvim_create_buf()">nvim_create_buf()</a>)
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/api#nvim_win_set_config()">nvim_win_set_config()</a> reconfigures a normal window into a float
</div>
</div>
<div class="help-para">
To close it use <a href="/neovim-docs-web/en/api#nvim_win_close()">nvim_win_close()</a> or a command such as <a href="/neovim-docs-web/en/windows#%3Aclose">:close</a>.

</div>
<div class="help-para">
To check whether a window is floating, check whether the <code>relative</code> option in
its config is non-empty:<pre>if vim.api.nvim_win_get_config(window_id).relative ~= '' then
  -- window with this window_id is floating
end</pre>

</div>
<div class="help-para">
Buffer text can be highlighted by typical mechanisms (syntax highlighting,
<a href="/neovim-docs-web/en/api#api-highlights">api-highlights</a>). The <a href="/neovim-docs-web/en/syntax#hl-NormalFloat">hl-NormalFloat</a> group highlights normal text;
<a href="/neovim-docs-web/en/options#'winhighlight'">'winhighlight'</a> can be used as usual to override groups locally. Floats inherit
options from the current window; specify <code>style=minimal</code> in <a href="/neovim-docs-web/en/api#nvim_open_win()">nvim_open_win()</a>
to disable various visual features such as the <a href="/neovim-docs-web/en/options#'number'">'number'</a> column.

</div>
<div class="help-para">
Currently, floating windows don't support some widgets like scrollbar.

</div>
<div class="help-para">
The output of <a href="/neovim-docs-web/en/starting#%3Amksession">:mksession</a> does not include commands for restoring floating
windows.

</div>
<div class="help-para">
Example: create a float with scratch buffer:<pre>let buf = nvim_create_buf(v:false, v:true)
call nvim_buf_set_lines(buf, 0, -1, v:true, ["test", "text"])
let opts = {'relative': 'cursor', 'width': 10, 'height': 2, 'col': 0,
    \ 'row': 1, 'anchor': 'NW', 'style': 'minimal'}
let win = nvim_open_win(buf, 0, opts)
" optional: change highlight, otherwise Pmenu is used
call nvim_win_set_option(win, 'winhl', 'Normal:MyHighlight')</pre>

</div>
<div class="help-para">
<h2 class="help-heading">Extended marks<span class="help-heading-tags">                                  <a name="api-extended-marks"></a><span class="help-tag">api-extended-marks</span> <a name="extmarks"></a><span class="help-tag">extmarks</span></span></h2>


</div>
<div class="help-para">
Extended marks (extmarks) represent buffer annotations that track text changes
in the buffer. They can represent cursors, folds, misspelled words, anything
that needs to track a logical location in the buffer over time. <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a>

</div>
<div class="help-para">
Extmark position works like "bar" cursor: it exists between characters. Thus,
the maximum extmark index on a line is 1 more than the character index:<pre> f o o b a r      line contents
 0 1 2 3 4 5      character positions (0-based)
0 1 2 3 4 5 6     extmark positions (0-based)</pre>
Extmarks have "forward gravity": if you place the cursor directly on an
extmark position and enter some text, the extmark migrates forward.<pre>f o o|b a r      line (| = cursor)
     3           extmark

f o o z|b a r    line (| = cursor)
       4         extmark (after typing "z")</pre>
If an extmark is on the last index of a line and you input a newline at that
point, the extmark will accordingly migrate to the next line:<pre>f o o z b a r|   line (| = cursor)
             7   extmark

f o o z b a r    first line
                 extmarks (none present)
|                second line (| = cursor)
0                extmark (after typing &lt;CR&gt;)</pre>
Example:

</div>
<div class="help-para">
Let's set an extmark at the first row (row=0) and third column (column=2).
<a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a> Passing id=0 creates a new mark and returns the id:<pre>  01 2345678
0 ex|ample..
    ^ extmark position

let g:mark_ns = nvim_create_namespace('myplugin')
let g:mark_id = nvim_buf_set_extmark(0, g:mark_ns, 0, 2, {})</pre>

</div>
<div class="help-para">
We can get the mark by its id:<pre>echo nvim_buf_get_extmark_by_id(0, g:mark_ns, g:mark_id, {})
=&gt; [0, 2]</pre>
We can get all marks in a buffer by <a href="/neovim-docs-web/en/api#namespace">namespace</a> (or by a range):<pre>echo nvim_buf_get_extmarks(0, g:mark_ns, 0, -1, {})
=&gt; [[1, 0, 2]]</pre>
Deleting all surrounding text does NOT remove an extmark! To remove extmarks
use <a href="/neovim-docs-web/en/api#nvim_buf_del_extmark()">nvim_buf_del_extmark()</a>. Deleting "x" in our example:<pre>  0 12345678
0 e|ample..
   ^ extmark position

echo nvim_buf_get_extmark_by_id(0, g:mark_ns, g:mark_id, {})
=&gt; [0, 1]</pre>

</div>
<div class="help-para">
    Note: Extmark "gravity" decides how it will shift after a text edit.
          See <a href="/neovim-docs-web/en/api#nvim_buf_set_extmark()">nvim_buf_set_extmark()</a>

</div>
<div class="help-para">
Namespaces allow any plugin to manage only its own extmarks, ignoring those
created by another plugin.

</div>
<div class="help-para">
Extmark positions changed by an edit will be restored on undo/redo. Creating
and deleting extmarks is not a buffer change, thus new undo states are not
created for extmark changes.

</div>
<div class="help-para">
<h2 class="help-heading">Global Functions<span class="help-heading-tags">                                                  <a name="api-global"></a><span class="help-tag">api-global</span></span></h2>


</div>
<div class="help-para">
nvim__get_runtime(<code>{pat}</code>, <code>{all}</code>, <code>{*opts}</code>)                 <a name="nvim__get_runtime()"></a><code class="help-tag-right">nvim__get_runtime()</code>
    Find files in runtime directories

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#api-fast">api-fast</a>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{pat}</code>   pattern of files to search for
</div><div class="help-li" style=""> <code>{all}</code>   whether to return all matches or only the first
</div><div class="help-li" style=""> <code>{opts}</code>  is_lua: only search lua subdirs
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        list of absolute paths to the found files

</div>
<div class="help-para">
nvim__id(<code>{obj}</code>)                                                   <a name="nvim__id()"></a><code class="help-tag-right">nvim__id()</code>
    Returns object given as argument.

</div>
<div class="help-para">
    This API function is used for testing. One should not rely on its presence
    in plugins.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{obj}</code>  Object to return.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        its argument.

</div>
<div class="help-para">
nvim__id_array(<code>{arr}</code>)                                       <a name="nvim__id_array()"></a><code class="help-tag-right">nvim__id_array()</code>
    Returns array given as argument.

</div>
<div class="help-para">
    This API function is used for testing. One should not rely on its presence
    in plugins.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{arr}</code>  Array to return.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        its argument.

</div>
<div class="help-para">
nvim__id_dictionary(<code>{dct}</code>)                             <a name="nvim__id_dictionary()"></a><code class="help-tag-right">nvim__id_dictionary()</code>
    Returns dictionary given as argument.

</div>
<div class="help-para">
    This API function is used for testing. One should not rely on its presence
    in plugins.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{dct}</code>  Dictionary to return.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        its argument.

</div>
<div class="help-para">
nvim__id_float(<code>{flt}</code>)                                       <a name="nvim__id_float()"></a><code class="help-tag-right">nvim__id_float()</code>
    Returns floating-point value given as argument.

</div>
<div class="help-para">
    This API function is used for testing. One should not rely on its presence
    in plugins.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{flt}</code>  Value to return.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        its argument.

</div>
<div class="help-para">
nvim__inspect_cell(<code>{grid}</code>, <code>{row}</code>, <code>{col}</code>)                <a name="nvim__inspect_cell()"></a><code class="help-tag-right">nvim__inspect_cell()</code>
    NB: if your UI doesn't use hlstate, this will not return hlstate first
    time.

</div>
<div class="help-para">
nvim__stats()                                                  <a name="nvim__stats()"></a><code class="help-tag-right">nvim__stats()</code>
    Gets internal stats.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Map of various internal stats.

</div>
<div class="help-para">
nvim_call_atomic(<code>{calls}</code>)                                 <a name="nvim_call_atomic()"></a><code class="help-tag-right">nvim_call_atomic()</code>
    Calls many API methods atomically.

</div>
<div class="help-para">
    This has two main usages:
    1. To perform several requests from an async context atomically, i.e.
       without interleaving redraws, RPC requests from other clients, or user
       interactions (however API methods may trigger autocommands or event
       processing which have such side effects, e.g. <a href="/neovim-docs-web/en/various#%3Asleep">:sleep</a> may wake
       timers).
    2. To minimize RPC overhead (roundtrips) of a sequence of many requests.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{calls}</code>  an array of calls, where each call is described by an array
                 with two elements: the request name, and an array of
                 arguments.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Array of two elements. The first is an array of return values. The
        second is NIL if all calls succeeded. If a call resulted in an error,
        it is a three-element array with the zero-based index of the call
        which resulted in an error, the error type and the error message. If
        an error occurred, the values from all preceding calls will still be
        returned.

</div>
<div class="help-para">
nvim_chan_send(<code>{chan}</code>, <code>{data}</code>)                              <a name="nvim_chan_send()"></a><code class="help-tag-right">nvim_chan_send()</code>
    Send data to channel <code>id</code>. For a job, it writes it to the stdin of the
    process. For the stdio channel <a href="/neovim-docs-web/en/channel#channel-stdio">channel-stdio</a>, it writes to Nvim's
    stdout. For an internal terminal instance (<a href="/neovim-docs-web/en/api#nvim_open_term()">nvim_open_term()</a>) it writes
    directly to terminal output. See <a href="/neovim-docs-web/en/channel#channel-bytes">channel-bytes</a> for more information.

</div>
<div class="help-para">
    This function writes raw data, not RPC messages. If the channel was
    created with <code>rpc=true</code> then the channel expects RPC messages, use
    <a href="/neovim-docs-web/en/lua#vim.rpcnotify()">vim.rpcnotify()</a> and <a href="/neovim-docs-web/en/lua#vim.rpcrequest()">vim.rpcrequest()</a> instead.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only
        Lua <a href="/neovim-docs-web/en/lua#vim.api">vim.api</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{chan}</code>  id of the channel
</div><div class="help-li" style=""> <code>{data}</code>  data to write. 8-bit clean: can contain NUL bytes.
</div>
</div>
<div class="help-para">
nvim_create_buf(<code>{listed}</code>, <code>{scratch}</code>)                       <a name="nvim_create_buf()"></a><code class="help-tag-right">nvim_create_buf()</code>
    Creates a new, empty, unnamed buffer.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{listed}</code>   Sets <a href="/neovim-docs-web/en/options#'buflisted'">'buflisted'</a>
</div><div class="help-li" style=""> <code>{scratch}</code>  Creates a "throwaway" <a href="/neovim-docs-web/en/windows#scratch-buffer">scratch-buffer</a> for temporary work
                   (always <a href="/neovim-docs-web/en/options#'nomodified'">'nomodified'</a>). Also sets <a href="/neovim-docs-web/en/options#'nomodeline'">'nomodeline'</a> on the
                   buffer.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Buffer handle, or 0 on error

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        buf_open_scratch

</div>
<div class="help-para">
nvim_del_current_line()                              <a name="nvim_del_current_line()"></a><code class="help-tag-right">nvim_del_current_line()</code>
    Deletes the current line.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        not allowed when <a href="/neovim-docs-web/en/eval#textlock">textlock</a> is active

</div>
<div class="help-para">
nvim_del_keymap(<code>{mode}</code>, <code>{lhs}</code>)                             <a name="nvim_del_keymap()"></a><code class="help-tag-right">nvim_del_keymap()</code>
    Unmaps a global <a href="/neovim-docs-web/en/map#mapping">mapping</a> for the given mode.

</div>
<div class="help-para">
    To unmap a buffer-local mapping, use <a href="/neovim-docs-web/en/api#nvim_buf_del_keymap()">nvim_buf_del_keymap()</a>.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_set_keymap()">nvim_set_keymap()</a>

</div>
<div class="help-para">
nvim_del_mark(<code>{name}</code>)                                        <a name="nvim_del_mark()"></a><code class="help-tag-right">nvim_del_mark()</code>
    Deletes an uppercase/file named mark. See <a href="/neovim-docs-web/en/motion#mark-motions">mark-motions</a>.

</div>
<div class="help-para">
    Note:
        fails with error if a lowercase or buffer local named mark is used.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  Mark name
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        true if the mark was deleted, else false.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_buf_del_mark()">nvim_buf_del_mark()</a>
        <a href="/neovim-docs-web/en/api#nvim_get_mark()">nvim_get_mark()</a>

</div>
<div class="help-para">
nvim_del_var(<code>{name}</code>)                                          <a name="nvim_del_var()"></a><code class="help-tag-right">nvim_del_var()</code>
    Removes a global (g:) variable.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  Variable name
</div>
</div>
<div class="help-para">
nvim_echo(<code>{chunks}</code>, <code>{history}</code>, <code>{opts}</code>)                           <a name="nvim_echo()"></a><code class="help-tag-right">nvim_echo()</code>
    Echo a message.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{chunks}</code>   A list of [text, hl_group] arrays, each representing a text
                   chunk with specified highlight. <code>hl_group</code> element can be
                   omitted for no highlight.
</div><div class="help-li" style=""> <code>{history}</code>  if true, add to <a href="/neovim-docs-web/en/message#message-history">message-history</a>.
</div><div class="help-li" style=""> <code>{opts}</code>     Optional parameters. Reserved for future use.
</div>
</div>
<div class="help-para">
nvim_err_write(<code>{str}</code>)                                       <a name="nvim_err_write()"></a><code class="help-tag-right">nvim_err_write()</code>
    Writes a message to the Vim error buffer. Does not append "\n", the
    message is buffered (won't display) until a linefeed is written.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{str}</code>  Message
</div>
</div>
<div class="help-para">
nvim_err_writeln(<code>{str}</code>)                                   <a name="nvim_err_writeln()"></a><code class="help-tag-right">nvim_err_writeln()</code>
    Writes a message to the Vim error buffer. Appends "\n", so the buffer is
    flushed (and displayed).

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{str}</code>  Message
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        nvim_err_write()

</div>
<div class="help-para">
nvim_eval_statusline(<code>{str}</code>, <code>{*opts}</code>)                  <a name="nvim_eval_statusline()"></a><code class="help-tag-right">nvim_eval_statusline()</code>
    Evaluates statusline string.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#api-fast">api-fast</a>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{str}</code>   Statusline string (see <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a>).
</div><div class="help-li" style=""> <code>{opts}</code>  Optional parameters.
</div><div class="help-li" style="margin-left: 3rem;"> winid: (number) <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a> of the window to use as context
                  for statusline.
</div><div class="help-li" style="margin-left: 3rem;"> maxwidth: (number) Maximum width of statusline.
</div><div class="help-li" style="margin-left: 3rem;"> fillchar: (string) Character to fill blank spaces in the
                  statusline (see <a href="/neovim-docs-web/en/options#'fillchars'">'fillchars'</a>). Treated as single-width even
                  if it isn't.
</div><div class="help-li" style="margin-left: 3rem;"> highlights: (boolean) Return highlight information.
</div><div class="help-li" style="margin-left: 3rem;"> use_winbar: (boolean) Evaluate winbar instead of statusline.
</div><div class="help-li" style="margin-left: 3rem;"> use_tabline: (boolean) Evaluate tabline instead of
                  statusline. When true, <code>{winid}</code> is ignored. Mutually
                  exclusive with <code>{use_winbar}</code>.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Dictionary containing statusline information, with these keys:
<div class="help-li" style=""> str: (string) Characters that will be displayed on the statusline.
</div><div class="help-li" style=""> width: (number) Display width of the statusline.
</div><div class="help-li" style=""> highlights: Array containing highlight information of the
          statusline. Only included when the "highlights" key in <code>{opts}</code> is
          true. Each element of the array is a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> with these keys:
</div><div class="help-li" style="margin-left: 3rem;"> start: (number) Byte index (0-based) of first character that uses
            the highlight.
</div><div class="help-li" style="margin-left: 3rem;"> group: (string) Name of highlight group.
</div>
</div>
<div class="help-para">
nvim_exec_lua(<code>{code}</code>, <code>{args}</code>)                                <a name="nvim_exec_lua()"></a><code class="help-tag-right">nvim_exec_lua()</code>
    Execute Lua code. Parameters (if any) are available as <code>...</code> inside the
    chunk. The chunk can return a value.

</div>
<div class="help-para">
    Only statements are executed. To evaluate an expression, prefix it with
    <code>return</code>: return my_function(...)

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{code}</code>  Lua code to execute
</div><div class="help-li" style=""> <code>{args}</code>  Arguments to the code
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Return value of Lua code if present or NIL.

</div>
<div class="help-para">
nvim_feedkeys(<code>{keys}</code>, <code>{mode}</code>, <code>{escape_ks}</code>)                   <a name="nvim_feedkeys()"></a><code class="help-tag-right">nvim_feedkeys()</code>
    Sends input-keys to Nvim, subject to various quirks controlled by <code>mode</code>
    flags. This is a blocking call, unlike <a href="/neovim-docs-web/en/api#nvim_input()">nvim_input()</a>.

</div>
<div class="help-para">
    On execution error: does not fail, but updates v:errmsg.

</div>
<div class="help-para">
    To input sequences like <code>&lt;C-o&gt;</code> use <a href="/neovim-docs-web/en/api#nvim_replace_termcodes()">nvim_replace_termcodes()</a> (typically
    with escape_ks=false) to replace <a href="/neovim-docs-web/en/intro#keycodes">keycodes</a>, then pass the result to
    nvim_feedkeys().

</div>
<div class="help-para">
    Example:<pre>:let key = nvim_replace_termcodes("&lt;C-o&gt;", v:true, v:false, v:true)
:call nvim_feedkeys(key, 'n', v:false)</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{keys}</code>       to be typed
</div><div class="help-li" style=""> <code>{mode}</code>       behavior flags, see <a href="/neovim-docs-web/en/builtin#feedkeys()">feedkeys()</a>
</div><div class="help-li" style=""> <code>{escape_ks}</code>  If true, escape K_SPECIAL bytes in <code>keys</code> This should be
                     false if you already used <a href="/neovim-docs-web/en/api#nvim_replace_termcodes()">nvim_replace_termcodes()</a>, and
                     true otherwise.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        feedkeys()
        vim_strsave_escape_ks

</div>
<div class="help-para">
nvim_get_api_info()                                      <a name="nvim_get_api_info()"></a><code class="help-tag-right">nvim_get_api_info()</code>
    Returns a 2-tuple (Array), where item 0 is the current channel id and item
    1 is the <a href="/neovim-docs-web/en/api#api-metadata">api-metadata</a> map (Dictionary).

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        2-tuple [{channel-id}, <code>{api-metadata}</code>]

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#api-fast">api-fast</a>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
nvim_get_chan_info(<code>{chan}</code>)                              <a name="nvim_get_chan_info()"></a><code class="help-tag-right">nvim_get_chan_info()</code>
    Gets information about a channel.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Dictionary describing a channel, with these keys:
<div class="help-li" style=""> "id" Channel id.
</div><div class="help-li" style=""> "argv" (optional) Job arguments list.
</div><div class="help-li" style=""> "stream" Stream underlying the channel.
</div><div class="help-li" style="margin-left: 3rem;"> "stdio" stdin and stdout of this Nvim instance
</div><div class="help-li" style="margin-left: 3rem;"> "stderr" stderr of this Nvim instance
</div><div class="help-li" style="margin-left: 3rem;"> "socket" TCP/IP socket or named pipe
</div><div class="help-li" style="margin-left: 3rem;"> "job" Job with communication over its stdio.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> "mode" How data received on the channel is interpreted.
</div><div class="help-li" style="margin-left: 3rem;"> "bytes" Send and receive raw bytes.
</div><div class="help-li" style="margin-left: 3rem;"> "terminal" <a href="/neovim-docs-web/en/nvim_terminal_emulator#terminal">terminal</a> instance interprets ASCII sequences.
</div><div class="help-li" style="margin-left: 3rem;"> "rpc" <a href="/neovim-docs-web/en/api#RPC">RPC</a> communication on the channel is active.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> "pty" (optional) Name of pseudoterminal. On a POSIX system this is a
          device path like "/dev/pts/1". If the name is unknown, the key will
          still be present if a pty is used (e.g. for conpty on Windows).
</div><div class="help-li" style=""> "buffer" (optional) Buffer with connected <a href="/neovim-docs-web/en/nvim_terminal_emulator#terminal">terminal</a> instance.
</div><div class="help-li" style=""> "client" (optional) Info about the peer (client on the other end of
          the RPC channel), if provided by it via <a href="/neovim-docs-web/en/api#nvim_set_client_info()">nvim_set_client_info()</a>.
</div>
</div>
<div class="help-para">
nvim_get_color_by_name(<code>{name}</code>)                      <a name="nvim_get_color_by_name()"></a><code class="help-tag-right">nvim_get_color_by_name()</code>
    Returns the 24-bit RGB value of a <a href="/neovim-docs-web/en/api#nvim_get_color_map()">nvim_get_color_map()</a> color name or
    "#rrggbb" hexadecimal string.

</div>
<div class="help-para">
    Example:<pre>:echo nvim_get_color_by_name("Pink")
:echo nvim_get_color_by_name("#cbcbcb")</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  Color name or "#rrggbb" string
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        24-bit RGB value, or -1 for invalid argument.

</div>
<div class="help-para">
nvim_get_color_map()                                    <a name="nvim_get_color_map()"></a><code class="help-tag-right">nvim_get_color_map()</code>
    Returns a map of color names and RGB values.

</div>
<div class="help-para">
    Keys are color names (e.g. "Aqua") and values are 24-bit RGB color values
    (e.g. 65535).

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Map of color names and RGB values.

</div>
<div class="help-para">
nvim_get_context(<code>{*opts}</code>)                                 <a name="nvim_get_context()"></a><code class="help-tag-right">nvim_get_context()</code>
    Gets a map of the current editor state.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{opts}</code>  Optional parameters.
</div><div class="help-li" style="margin-left: 3rem;"> types: List of <a href="/neovim-docs-web/en/repeat#context-types">context-types</a> ("regs", "jumps", "bufs",
                  "gvars", …) to gather, or empty for "all".
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        map of global <a href="/neovim-docs-web/en/repeat#context">context</a>.

</div>
<div class="help-para">
nvim_get_current_buf()                                <a name="nvim_get_current_buf()"></a><code class="help-tag-right">nvim_get_current_buf()</code>
    Gets the current buffer.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Buffer handle

</div>
<div class="help-para">
nvim_get_current_line()                              <a name="nvim_get_current_line()"></a><code class="help-tag-right">nvim_get_current_line()</code>
    Gets the current line.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Current line string

</div>
<div class="help-para">
nvim_get_current_tabpage()                        <a name="nvim_get_current_tabpage()"></a><code class="help-tag-right">nvim_get_current_tabpage()</code>
    Gets the current tabpage.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Tabpage handle

</div>
<div class="help-para">
nvim_get_current_win()                                <a name="nvim_get_current_win()"></a><code class="help-tag-right">nvim_get_current_win()</code>
    Gets the current window.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Window handle

</div>
<div class="help-para">
nvim_get_hl_by_id(<code>{hl_id}</code>, <code>{rgb}</code>)                        <a name="nvim_get_hl_by_id()"></a><code class="help-tag-right">nvim_get_hl_by_id()</code>
    Gets a highlight definition by id. <a href="/neovim-docs-web/en/builtin#hlID()">hlID()</a>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{hl_id}</code>  Highlight id as returned by <a href="/neovim-docs-web/en/builtin#hlID()">hlID()</a>
</div><div class="help-li" style=""> <code>{rgb}</code>    Export RGB colors
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Highlight definition map

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        nvim_get_hl_by_name

</div>
<div class="help-para">
nvim_get_hl_by_name(<code>{name}</code>, <code>{rgb}</code>)                     <a name="nvim_get_hl_by_name()"></a><code class="help-tag-right">nvim_get_hl_by_name()</code>
    Gets a highlight definition by name.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  Highlight group name
</div><div class="help-li" style=""> <code>{rgb}</code>   Export RGB colors
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Highlight definition map

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        nvim_get_hl_by_id

</div>
<div class="help-para">
nvim_get_hl_id_by_name(<code>{name}</code>)                      <a name="nvim_get_hl_id_by_name()"></a><code class="help-tag-right">nvim_get_hl_id_by_name()</code>
    Gets a highlight group by name

</div>
<div class="help-para">
    similar to <a href="/neovim-docs-web/en/builtin#hlID()">hlID()</a>, but allocates a new ID if not present.

</div>
<div class="help-para">
nvim_get_keymap(<code>{mode}</code>)                                    <a name="nvim_get_keymap()"></a><code class="help-tag-right">nvim_get_keymap()</code>
    Gets a list of global (non-buffer-local) <a href="/neovim-docs-web/en/map#mapping">mapping</a> definitions.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{mode}</code>  Mode short-name ("n", "i", "v", ...)
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Array of <a href="/neovim-docs-web/en/builtin#maparg()">maparg()</a>-like dictionaries describing mappings. The
        "buffer" key is always zero.

</div>
<div class="help-para">
nvim_get_mark(<code>{name}</code>, <code>{opts}</code>)                                <a name="nvim_get_mark()"></a><code class="help-tag-right">nvim_get_mark()</code>
    Return a tuple (row, col, buffer, buffername) representing the position of
    the uppercase/file named mark. See <a href="/neovim-docs-web/en/motion#mark-motions">mark-motions</a>.

</div>
<div class="help-para">
    Marks are (1,0)-indexed. <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a>

</div>
<div class="help-para">
    Note:
        fails with error if a lowercase or buffer local named mark is used.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  Mark name
</div><div class="help-li" style=""> <code>{opts}</code>  Optional parameters. Reserved for future use.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        4-tuple (row, col, buffer, buffername), (0, 0, 0, '') if the mark is
        not set.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_buf_set_mark()">nvim_buf_set_mark()</a>
        <a href="/neovim-docs-web/en/api#nvim_del_mark()">nvim_del_mark()</a>

</div>
<div class="help-para">
nvim_get_mode()                                              <a name="nvim_get_mode()"></a><code class="help-tag-right">nvim_get_mode()</code>
    Gets the current mode. <a href="/neovim-docs-web/en/builtin#mode()">mode()</a> "blocking" is true if Nvim is waiting for
    input.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Dictionary { "mode": String, "blocking": Boolean }

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#api-fast">api-fast</a>

</div>
<div class="help-para">
nvim_get_proc(<code>{pid}</code>)                                         <a name="nvim_get_proc()"></a><code class="help-tag-right">nvim_get_proc()</code>
    Gets info describing process <code>pid</code>.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Map of process properties, or NIL if process not found.

</div>
<div class="help-para">
nvim_get_proc_children(<code>{pid}</code>)                       <a name="nvim_get_proc_children()"></a><code class="help-tag-right">nvim_get_proc_children()</code>
    Gets the immediate children of process <code>pid</code>.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Array of child process ids, empty if process not found.

</div>
<div class="help-para">
nvim_get_runtime_file(<code>{name}</code>, <code>{all}</code>)                 <a name="nvim_get_runtime_file()"></a><code class="help-tag-right">nvim_get_runtime_file()</code>
    Find files in runtime directories

</div>
<div class="help-para">
    "name" can contain wildcards. For example
    nvim_get_runtime_file("colors/*.vim", true) will return all color scheme
    files. Always use forward slashes (/) in the search pattern for
    subdirectories regardless of platform.

</div>
<div class="help-para">
    It is not an error to not find any files. An empty array is returned then.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#api-fast">api-fast</a>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  pattern of files to search for
</div><div class="help-li" style=""> <code>{all}</code>   whether to return all matches or only the first
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        list of absolute paths to the found files

</div>
<div class="help-para">
nvim_get_var(<code>{name}</code>)                                          <a name="nvim_get_var()"></a><code class="help-tag-right">nvim_get_var()</code>
    Gets a global (g:) variable.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  Variable name
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Variable value

</div>
<div class="help-para">
nvim_get_vvar(<code>{name}</code>)                                        <a name="nvim_get_vvar()"></a><code class="help-tag-right">nvim_get_vvar()</code>
    Gets a v: variable.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  Variable name
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Variable value

</div>
<div class="help-para">
nvim_input(<code>{keys}</code>)                                              <a name="nvim_input()"></a><code class="help-tag-right">nvim_input()</code>
    Queues raw user-input. Unlike <a href="/neovim-docs-web/en/api#nvim_feedkeys()">nvim_feedkeys()</a>, this uses a low-level
    input buffer and the call is non-blocking (input is processed
    asynchronously by the eventloop).

</div>
<div class="help-para">
    On execution error: does not fail, but updates v:errmsg.

</div>
<div class="help-para">
    Note:
        <a href="/neovim-docs-web/en/intro#keycodes">keycodes</a> like <code>&lt;CR&gt;</code> are translated, so "&lt;" is special. To input a
        literal "&lt;", send <code>&lt;LT&gt;</code>.

</div>
<div class="help-para">
    Note:
        For mouse events use <a href="/neovim-docs-web/en/api#nvim_input_mouse()">nvim_input_mouse()</a>. The pseudokey form
        "&lt;LeftMouse&gt;&lt;col,row&gt;" is deprecated since <a href="/neovim-docs-web/en/api#api-level">api-level</a> 6.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#api-fast">api-fast</a>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{keys}</code>  to be typed
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Number of bytes actually written (can be fewer than requested if the
        buffer becomes full).

</div>
<div class="help-para">
                                                          <a name="nvim_input_mouse()"></a><code class="help-tag-right">nvim_input_mouse()</code>
nvim_input_mouse(<code>{button}</code>, <code>{action}</code>, <code>{modifier}</code>, <code>{grid}</code>, <code>{row}</code>, <code>{col}</code>)
    Send mouse event from GUI.

</div>
<div class="help-para">
    Non-blocking: does not wait on any result, but queues the event to be
    processed soon by the event loop.

</div>
<div class="help-para">
    Note:
        Currently this doesn't support "scripting" multiple mouse events by
        calling it multiple times in a loop: the intermediate mouse positions
        will be ignored. It should be used to implement real-time mouse input
        in a GUI. The deprecated pseudokey form ("&lt;LeftMouse&gt;&lt;col,row&gt;") of
        <a href="/neovim-docs-web/en/api#nvim_input()">nvim_input()</a> has the same limitation.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#api-fast">api-fast</a>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{button}</code>    Mouse button: one of "left", "right", "middle", "wheel",
                    "move".
</div><div class="help-li" style=""> <code>{action}</code>    For ordinary buttons, one of "press", "drag", "release".
                    For the wheel, one of "up", "down", "left", "right".
                    Ignored for "move".
</div><div class="help-li" style=""> <code>{modifier}</code>  String of modifiers each represented by a single char. The
                    same specifiers are used as for a key press, except that
                    the "-" separator is optional, so "C-A-", "c-a" and "CA"
                    can all be used to specify Ctrl+Alt+click.
</div><div class="help-li" style=""> <code>{grid}</code>      Grid number if the client uses <a href="/neovim-docs-web/en/ui#ui-multigrid">ui-multigrid</a>, else 0.
</div><div class="help-li" style=""> <code>{row}</code>       Mouse row-position (zero-based, like redraw events)
</div><div class="help-li" style=""> <code>{col}</code>       Mouse column-position (zero-based, like redraw events)
</div>
</div>
<div class="help-para">
nvim_list_bufs()                                            <a name="nvim_list_bufs()"></a><code class="help-tag-right">nvim_list_bufs()</code>
    Gets the current list of buffer handles

</div>
<div class="help-para">
    Includes unlisted (unloaded/deleted) buffers, like <code>:ls!</code>. Use
    <a href="/neovim-docs-web/en/api#nvim_buf_is_loaded()">nvim_buf_is_loaded()</a> to check if a buffer is loaded.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        List of buffer handles

</div>
<div class="help-para">
nvim_list_chans()                                          <a name="nvim_list_chans()"></a><code class="help-tag-right">nvim_list_chans()</code>
    Get information about all open channels.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Array of Dictionaries, each describing a channel with the format
        specified at <a href="/neovim-docs-web/en/api#nvim_get_chan_info()">nvim_get_chan_info()</a>.

</div>
<div class="help-para">
nvim_list_runtime_paths()                          <a name="nvim_list_runtime_paths()"></a><code class="help-tag-right">nvim_list_runtime_paths()</code>
    Gets the paths contained in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        List of paths

</div>
<div class="help-para">
nvim_list_tabpages()                                    <a name="nvim_list_tabpages()"></a><code class="help-tag-right">nvim_list_tabpages()</code>
    Gets the current list of tabpage handles.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        List of tabpage handles

</div>
<div class="help-para">
nvim_list_uis()                                              <a name="nvim_list_uis()"></a><code class="help-tag-right">nvim_list_uis()</code>
    Gets a list of dictionaries representing attached UIs.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Array of UI dictionaries, each with these keys:
<div class="help-li" style=""> "height" Requested height of the UI
</div><div class="help-li" style=""> "width" Requested width of the UI
</div><div class="help-li" style=""> "rgb" true if the UI uses RGB colors (false implies <a href="/neovim-docs-web/en/syntax#cterm-colors">cterm-colors</a>)
</div><div class="help-li" style=""> "ext_..." Requested UI extensions, see <a href="/neovim-docs-web/en/ui#ui-option">ui-option</a>
</div><div class="help-li" style=""> "chan" Channel id of remote UI (not present for TUI)
</div>
</div>
<div class="help-para">
nvim_list_wins()                                            <a name="nvim_list_wins()"></a><code class="help-tag-right">nvim_list_wins()</code>
    Gets the current list of window handles.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        List of window handles

</div>
<div class="help-para">
nvim_load_context(<code>{dict}</code>)                                <a name="nvim_load_context()"></a><code class="help-tag-right">nvim_load_context()</code>
    Sets the current editor state from the given <a href="/neovim-docs-web/en/repeat#context">context</a> map.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{dict}</code>  <a href="/neovim-docs-web/en/repeat#Context">Context</a> map.
</div>
</div>
<div class="help-para">
nvim_notify(<code>{msg}</code>, <code>{log_level}</code>, <code>{opts}</code>)                        <a name="nvim_notify()"></a><code class="help-tag-right">nvim_notify()</code>
    Notify the user with a message

</div>
<div class="help-para">
    Relays the call to vim.notify . By default forwards your message in the
    echo area but can be overridden to trigger desktop notifications.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{msg}</code>        Message to display to the user
</div><div class="help-li" style=""> <code>{log_level}</code>  The log level
</div><div class="help-li" style=""> <code>{opts}</code>       Reserved for future use.
</div>
</div>
<div class="help-para">
nvim_open_term(<code>{buffer}</code>, <code>{opts}</code>)                            <a name="nvim_open_term()"></a><code class="help-tag-right">nvim_open_term()</code>
    Open a terminal instance in a buffer

</div>
<div class="help-para">
    By default (and currently the only option) the terminal will not be
    connected to an external process. Instead, input send on the channel will
    be echoed directly by the terminal. This is useful to display ANSI
    terminal sequences returned as part of a rpc message, or similar.

</div>
<div class="help-para">
    Note: to directly initiate the terminal using the right size, display the
    buffer in a configured window before calling this. For instance, for a
    floating display, first create an empty buffer using <a href="/neovim-docs-web/en/api#nvim_create_buf()">nvim_create_buf()</a>,
    then display it using <a href="/neovim-docs-web/en/api#nvim_open_win()">nvim_open_win()</a>, and then call this function. Then
    <a href="/neovim-docs-web/en/api#nvim_chan_send()">nvim_chan_send()</a> can be called immediately to process sequences in a
    virtual terminal having the intended size.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  the buffer to use (expected to be empty)
</div><div class="help-li" style=""> <code>{opts}</code>    Optional parameters.
</div><div class="help-li" style="margin-left: 3rem;"> on_input: lua callback for input sent, i e keypresses in
                    terminal mode. Note: keypresses are sent raw as they would
                    be to the pty master end. For instance, a carriage return
                    is sent as a "\r", not as a "\n". <a href="/neovim-docs-web/en/eval#textlock">textlock</a> applies. It
                    is possible to call <a href="/neovim-docs-web/en/api#nvim_chan_send()">nvim_chan_send()</a> directly in the
                    callback however. ["input", term, bufnr, data]
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Channel id, or 0 on error

</div>
<div class="help-para">
nvim_out_write(<code>{str}</code>)                                       <a name="nvim_out_write()"></a><code class="help-tag-right">nvim_out_write()</code>
    Writes a message to the Vim output buffer. Does not append "\n", the
    message is buffered (won't display) until a linefeed is written.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{str}</code>  Message
</div>
</div>
<div class="help-para">
nvim_paste(<code>{data}</code>, <code>{crlf}</code>, <code>{phase}</code>)                             <a name="nvim_paste()"></a><code class="help-tag-right">nvim_paste()</code>
    Pastes at cursor, in any mode.

</div>
<div class="help-para">
    Invokes the <code>vim.paste</code> handler, which handles each mode appropriately.
    Sets redo/undo. Faster than <a href="/neovim-docs-web/en/api#nvim_input()">nvim_input()</a>. Lines break at LF ("\n").

</div>
<div class="help-para">
    Errors (<a href="/neovim-docs-web/en/options#'nomodifiable'">'nomodifiable'</a>, <code>vim.paste()</code> failure, …) are reflected in <code>err</code>
    but do not affect the return value (which is strictly decided by
    <code>vim.paste()</code>). On error, subsequent calls are ignored ("drained") until
    the next paste is initiated (phase 1 or -1).

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        not allowed when <a href="/neovim-docs-web/en/eval#textlock">textlock</a> is active

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{data}</code>   Multiline input. May be binary (containing NUL bytes).
</div><div class="help-li" style=""> <code>{crlf}</code>   Also break lines at CR and CRLF.
</div><div class="help-li" style=""> <code>{phase}</code>  -1: paste in a single call (i.e. without streaming). To
                 "stream" a paste, call <code>nvim_paste</code> sequentially with these <code>phase</code> values:
</div><div class="help-li" style="margin-left: 3rem;"> 1: starts the paste (exactly once)
</div><div class="help-li" style="margin-left: 3rem;"> 2: continues the paste (zero or more times)
</div><div class="help-li" style="margin-left: 3rem;"> 3: ends the paste (exactly once)
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>

</div>
<div class="help-para">
<div class="help-li" style=""> true: Client may continue pasting.
</div><div class="help-li" style=""> false: Client must cancel the paste.
</div>
</div>
<div class="help-para">
nvim_put(<code>{lines}</code>, <code>{type}</code>, <code>{after}</code>, <code>{follow}</code>)                      <a name="nvim_put()"></a><code class="help-tag-right">nvim_put()</code>
    Puts text at cursor, in any mode.

</div>
<div class="help-para">
    Compare <a href="/neovim-docs-web/en/change#%3Aput">:put</a> and <a href="/neovim-docs-web/en/change#p">p</a> which are always linewise.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        not allowed when <a href="/neovim-docs-web/en/eval#textlock">textlock</a> is active

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{lines}</code>   <a href="/neovim-docs-web/en/builtin#readfile()">readfile()</a>-style list of lines. <a href="/neovim-docs-web/en/channel#channel-lines">channel-lines</a>
</div><div class="help-li" style=""> <code>{type}</code>    Edit behavior: any <a href="/neovim-docs-web/en/builtin#getregtype()">getregtype()</a> result, or:
</div><div class="help-li" style="margin-left: 3rem;"> "b" <a href="/neovim-docs-web/en/visual#blockwise-visual">blockwise-visual</a> mode (may include width, e.g. "b3")
</div><div class="help-li" style="margin-left: 3rem;"> "c" <a href="/neovim-docs-web/en/motion#charwise">charwise</a> mode
</div><div class="help-li" style="margin-left: 3rem;"> "l" <a href="/neovim-docs-web/en/motion#linewise">linewise</a> mode
</div><div class="help-li" style="margin-left: 3rem;"> "" guess by contents, see <a href="/neovim-docs-web/en/builtin#setreg()">setreg()</a>
</div><div class="help-li" style=""> <code>{after}</code>   If true insert after cursor (like <a href="/neovim-docs-web/en/change#p">p</a>), or before (like
                  <a href="/neovim-docs-web/en/change#P">P</a>).
</div><div class="help-li" style=""> <code>{follow}</code>  If true place cursor at end of inserted text.
</div>
</div>
<div class="help-para">
                                                    <a name="nvim_replace_termcodes()"></a><code class="help-tag-right">nvim_replace_termcodes()</code>
nvim_replace_termcodes(<code>{str}</code>, <code>{from_part}</code>, <code>{do_lt}</code>, <code>{special}</code>)
    Replaces terminal codes and <a href="/neovim-docs-web/en/intro#keycodes">keycodes</a> (<code>&lt;CR&gt;</code>, <code>&lt;Esc&gt;</code>, ...) in a string with
    the internal representation.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{str}</code>        String to be converted.
</div><div class="help-li" style=""> <code>{from_part}</code>  Legacy Vim parameter. Usually true.
</div><div class="help-li" style=""> <code>{do_lt}</code>      Also translate <code>&lt;lt&gt;</code>. Ignored if <code>special</code> is false.
</div><div class="help-li" style=""> <code>{special}</code>    Replace <a href="/neovim-docs-web/en/intro#keycodes">keycodes</a>, e.g. <code>&lt;CR&gt;</code> becomes a "\r" char.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        replace_termcodes
        cpoptions

</div>
<div class="help-para">
                                                <a name="nvim_select_popupmenu_item()"></a><code class="help-tag-right">nvim_select_popupmenu_item()</code>
nvim_select_popupmenu_item(<code>{item}</code>, <code>{insert}</code>, <code>{finish}</code>, <code>{opts}</code>)
    Selects an item in the completion popup menu.

</div>
<div class="help-para">
    If neither <a href="/neovim-docs-web/en/insert#ins-completion">ins-completion</a> nor <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a> popup menu is active
    this API call is silently ignored. Useful for an external UI using
    <a href="/neovim-docs-web/en/ui#ui-popupmenu">ui-popupmenu</a> to control the popup menu with the mouse. Can also be used
    in a mapping; use <code>&lt;Cmd&gt;</code> <a href="/neovim-docs-web/en/map#%3Amap-cmd">:map-cmd</a> or a Lua mapping to ensure the mapping
    doesn't end completion mode.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{item}</code>    Index (zero-based) of the item to select. Value of -1
                  selects nothing and restores the original text.
</div><div class="help-li" style=""> <code>{insert}</code>  For <a href="/neovim-docs-web/en/insert#ins-completion">ins-completion</a>, whether the selection should be
                  inserted in the buffer. Ignored for <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a>.
</div><div class="help-li" style=""> <code>{finish}</code>  Finish the completion and dismiss the popup menu. Implies
                  <code>{insert}</code>.
</div><div class="help-li" style=""> <code>{opts}</code>    Optional parameters. Reserved for future use.
</div>
</div>
<div class="help-para">
                                                      <a name="nvim_set_client_info()"></a><code class="help-tag-right">nvim_set_client_info()</code>
nvim_set_client_info(<code>{name}</code>, <code>{version}</code>, <code>{type}</code>, <code>{methods}</code>, <code>{attributes}</code>)
    Self-identifies the client.

</div>
<div class="help-para">
    The client/plugin/application should call this after connecting, to
    provide hints about its identity and purpose, for debugging and
    orchestration.

</div>
<div class="help-para">
    Can be called more than once; the caller should merge old info if
    appropriate. Example: library first identifies the channel, then a plugin
    using that library later identifies itself.

</div>
<div class="help-para">
    Note:
        "Something is better than nothing". You don't need to include all the
        fields.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>        Short name for the connected client
</div><div class="help-li" style=""> <code>{version}</code>     Dictionary describing the version, with these (optional)
                      keys:
</div><div class="help-li" style="margin-left: 3rem;"> "major" major version (defaults to 0 if not set, for
                        no release yet)
</div><div class="help-li" style="margin-left: 3rem;"> "minor" minor version
</div><div class="help-li" style="margin-left: 3rem;"> "patch" patch number
</div><div class="help-li" style="margin-left: 3rem;"> "prerelease" string describing a prerelease, like
                        "dev" or "beta1"
</div><div class="help-li" style="margin-left: 3rem;"> "commit" hash or similar identifier of commit
</div><div class="help-li" style=""> <code>{type}</code>        Must be one of the following values. Client libraries
                      should default to "remote" unless overridden by the
                      user.
</div><div class="help-li" style="margin-left: 3rem;"> "remote" remote client connected to Nvim.
</div><div class="help-li" style="margin-left: 3rem;"> "ui" gui frontend
</div><div class="help-li" style="margin-left: 3rem;"> "embedder" application using Nvim as a component (for
                        example, IDE/editor implementing a vim mode).
</div><div class="help-li" style="margin-left: 3rem;"> "host" plugin host, typically started by nvim
</div><div class="help-li" style="margin-left: 3rem;"> "plugin" single plugin, started by nvim
</div><div class="help-li" style=""> <code>{methods}</code>     Builtin methods in the client. For a host, this does not
                      include plugin methods which will be discovered later.
                      The key should be the method name, the values are dicts
                      with these (optional) keys (more keys may be added in
                      future versions of Nvim, thus unknown keys are ignored.
                      Clients must only use keys defined in this or later
                      versions of Nvim):
</div><div class="help-li" style="margin-left: 3rem;"> "async" if true, send as a notification. If false or
                        unspecified, use a blocking request
</div><div class="help-li" style="margin-left: 3rem;"> "nargs" Number of arguments. Could be a single integer
                        or an array of two integers, minimum and maximum
                        inclusive.
</div><div class="help-li" style=""> <code>{attributes}</code>  Arbitrary string:string map of informal client
                      properties. Suggested keys:
</div><div class="help-li" style="margin-left: 3rem;"> "website": Client homepage URL (e.g. GitHub
                        repository)
</div><div class="help-li" style="margin-left: 3rem;"> "license": License description ("Apache 2", "GPLv3",
                        "MIT", …)
</div><div class="help-li" style="margin-left: 3rem;"> "logo": URI or path to image, preferably small logo or
                        icon. .png or .svg format is preferred.
</div>
</div>
<div class="help-para">
nvim_set_current_buf(<code>{buffer}</code>)                        <a name="nvim_set_current_buf()"></a><code class="help-tag-right">nvim_set_current_buf()</code>
    Sets the current buffer.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        not allowed when <a href="/neovim-docs-web/en/eval#textlock">textlock</a> is active

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle
</div>
</div>
<div class="help-para">
nvim_set_current_dir(<code>{dir}</code>)                           <a name="nvim_set_current_dir()"></a><code class="help-tag-right">nvim_set_current_dir()</code>
    Changes the global working directory.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{dir}</code>  Directory path
</div>
</div>
<div class="help-para">
nvim_set_current_line(<code>{line}</code>)                        <a name="nvim_set_current_line()"></a><code class="help-tag-right">nvim_set_current_line()</code>
    Sets the current line.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        not allowed when <a href="/neovim-docs-web/en/eval#textlock">textlock</a> is active

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{line}</code>  Line contents
</div>
</div>
<div class="help-para">
nvim_set_current_tabpage(<code>{tabpage}</code>)               <a name="nvim_set_current_tabpage()"></a><code class="help-tag-right">nvim_set_current_tabpage()</code>
    Sets the current tabpage.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        not allowed when <a href="/neovim-docs-web/en/eval#textlock">textlock</a> is active

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{tabpage}</code>  Tabpage handle
</div>
</div>
<div class="help-para">
nvim_set_current_win(<code>{window}</code>)                        <a name="nvim_set_current_win()"></a><code class="help-tag-right">nvim_set_current_win()</code>
    Sets the current window.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        not allowed when <a href="/neovim-docs-web/en/eval#textlock">textlock</a> is active

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle
</div>
</div>
<div class="help-para">
nvim_set_hl(<code>{ns_id}</code>, <code>{name}</code>, <code>{*val}</code>)                           <a name="nvim_set_hl()"></a><code class="help-tag-right">nvim_set_hl()</code>
    Sets a highlight group.

</div>
<div class="help-para">
    Note:
        Unlike the <code>:highlight</code> command which can update a highlight group,
        this function completely replaces the definition. For example:
        <code>nvim_set_hl(0, 'Visual', {})</code> will clear the highlight group
        'Visual'.

</div>
<div class="help-para">
    Note:
        The fg and bg keys also accept the string values <code>"fg"</code> or <code>"bg"</code>
        which act as aliases to the corresponding foreground and background
        values of the Normal group. If the Normal group has not been defined,
        using these values results in an error.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{ns_id}</code>  Namespace id for this highlight <a href="/neovim-docs-web/en/api#nvim_create_namespace()">nvim_create_namespace()</a>.
                 Use 0 to set a highlight group globally <a href="/neovim-docs-web/en/syntax#%3Ahighlight">:highlight</a>.
</div><div class="help-li" style=""> <code>{name}</code>   Highlight group name, e.g. "ErrorMsg"
</div><div class="help-li" style=""> <code>{val}</code>    Highlight definition map, accepts the following keys:
</div><div class="help-li" style="margin-left: 3rem;"> fg (or foreground): color name or "#RRGGBB", see note.
</div><div class="help-li" style="margin-left: 3rem;"> bg (or background): color name or "#RRGGBB", see note.
</div><div class="help-li" style="margin-left: 3rem;"> sp (or special): color name or "#RRGGBB"
</div><div class="help-li" style="margin-left: 3rem;"> blend: integer between 0 and 100
</div><div class="help-li" style="margin-left: 3rem;"> bold: boolean
</div><div class="help-li" style="margin-left: 3rem;"> standout: boolean
</div><div class="help-li" style="margin-left: 3rem;"> underline: boolean
</div><div class="help-li" style="margin-left: 3rem;"> undercurl: boolean
</div><div class="help-li" style="margin-left: 3rem;"> underdouble: boolean
</div><div class="help-li" style="margin-left: 3rem;"> underdotted: boolean
</div><div class="help-li" style="margin-left: 3rem;"> underdashed: boolean
</div><div class="help-li" style="margin-left: 3rem;"> strikethrough: boolean
</div><div class="help-li" style="margin-left: 3rem;"> italic: boolean
</div><div class="help-li" style="margin-left: 3rem;"> reverse: boolean
</div><div class="help-li" style="margin-left: 3rem;"> nocombine: boolean
</div><div class="help-li" style="margin-left: 3rem;"> link: name of another highlight group to link to, see
                   <a href="/neovim-docs-web/en/syntax#%3Ahi-link">:hi-link</a>.
</div><div class="help-li" style="margin-left: 3rem;"> default: Don't override existing definition <a href="/neovim-docs-web/en/syntax#%3Ahi-default">:hi-default</a>
</div><div class="help-li" style="margin-left: 3rem;"> ctermfg: Sets foreground of cterm color <a href="/neovim-docs-web/en/syntax#ctermfg">ctermfg</a>
</div><div class="help-li" style="margin-left: 3rem;"> ctermbg: Sets background of cterm color <a href="/neovim-docs-web/en/syntax#ctermbg">ctermbg</a>
</div><div class="help-li" style="margin-left: 3rem;"> cterm: cterm attribute map, like <a href="/neovim-docs-web/en/syntax#highlight-args">highlight-args</a>. If not
                   set, cterm attributes will match those from the attribute
                   map documented above.
</div>
</div>
<div class="help-para">
nvim_set_hl_ns(<code>{ns_id}</code>)                                     <a name="nvim_set_hl_ns()"></a><code class="help-tag-right">nvim_set_hl_ns()</code>
    Set active namespace for highlights. This can be set for a single window,
    see <a href="/neovim-docs-web/en/api#nvim_win_set_hl_ns()">nvim_win_set_hl_ns()</a>.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{ns_id}</code>  the namespace to use
</div>
</div>
<div class="help-para">
nvim_set_hl_ns_fast(<code>{ns_id}</code>)                           <a name="nvim_set_hl_ns_fast()"></a><code class="help-tag-right">nvim_set_hl_ns_fast()</code>
    Set active namespace for highlights while redrawing.

</div>
<div class="help-para">
    This function meant to be called while redrawing, primarily from
    <a href="/neovim-docs-web/en/api#nvim_set_decoration_provider()">nvim_set_decoration_provider()</a> on_win and on_line callbacks, which are
    allowed to change the namespace during a redraw cycle.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#api-fast">api-fast</a>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{ns_id}</code>  the namespace to activate
</div>
</div>
<div class="help-para">
nvim_set_keymap(<code>{mode}</code>, <code>{lhs}</code>, <code>{rhs}</code>, <code>{*opts}</code>)             <a name="nvim_set_keymap()"></a><code class="help-tag-right">nvim_set_keymap()</code>
    Sets a global <a href="/neovim-docs-web/en/map#mapping">mapping</a> for the given mode.

</div>
<div class="help-para">
    To set a buffer-local mapping, use <a href="/neovim-docs-web/en/api#nvim_buf_set_keymap()">nvim_buf_set_keymap()</a>.

</div>
<div class="help-para">
    Unlike <a href="/neovim-docs-web/en/map#%3Amap">:map</a>, leading/trailing whitespace is accepted as part of the
    <code>{lhs}</code> or <code>{rhs}</code>. Empty <code>{rhs}</code> is <a href="/neovim-docs-web/en/intro#%3CNop%3E">&lt;Nop&gt;</a>. <a href="/neovim-docs-web/en/intro#keycodes">keycodes</a> are replaced as usual.

</div>
<div class="help-para">
    Example:<pre>call nvim_set_keymap('n', ' &lt;NL&gt;', '', {'nowait': v:true})</pre>

</div>
<div class="help-para">
    is equivalent to:<pre>nmap &lt;nowait&gt; &lt;Space&gt;&lt;NL&gt; &lt;Nop&gt;</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{mode}</code>  Mode short-name (map command prefix: "n", "i", "v", "x", …) or
                "!" for <a href="/neovim-docs-web/en/map#%3Amap%21">:map!</a>, or empty string for <a href="/neovim-docs-web/en/map#%3Amap">:map</a>.
</div><div class="help-li" style=""> <code>{lhs}</code>   Left-hand-side <a href="/neovim-docs-web/en/map#%7Blhs%7D">{lhs}</a> of the mapping.
</div><div class="help-li" style=""> <code>{rhs}</code>   Right-hand-side <a href="/neovim-docs-web/en/map#%7Brhs%7D">{rhs}</a> of the mapping.
</div><div class="help-li" style=""> <code>{opts}</code>  Optional parameters map: keys are <a href="/neovim-docs-web/en/map#%3Amap-arguments">:map-arguments</a>, values are
                booleans (default false). Accepts all <a href="/neovim-docs-web/en/map#%3Amap-arguments">:map-arguments</a> as keys
                excluding <a href="/neovim-docs-web/en/autocmd#%3Cbuffer%3E">&lt;buffer&gt;</a> but including <a href="/neovim-docs-web/en/map#%3Anoremap">:noremap</a> and "desc".
                Unknown key is an error. "desc" can be used to give a
                description to the mapping. When called from Lua, also accepts
                a "callback" key that takes a Lua function to call when the
                mapping is executed. When "expr" is true, "replace_keycodes"
                (boolean) can be used to replace keycodes in the resulting
                string (see <a href="/neovim-docs-web/en/api#nvim_replace_termcodes()">nvim_replace_termcodes()</a>), and a Lua callback
                returning <code>nil</code> is equivalent to returning an empty string.
</div>
</div>
<div class="help-para">
nvim_set_var(<code>{name}</code>, <code>{value}</code>)                                 <a name="nvim_set_var()"></a><code class="help-tag-right">nvim_set_var()</code>
    Sets a global (g:) variable.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>   Variable name
</div><div class="help-li" style=""> <code>{value}</code>  Variable value
</div>
</div>
<div class="help-para">
nvim_set_vvar(<code>{name}</code>, <code>{value}</code>)                               <a name="nvim_set_vvar()"></a><code class="help-tag-right">nvim_set_vvar()</code>
    Sets a v: variable, if it is not readonly.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>   Variable name
</div><div class="help-li" style=""> <code>{value}</code>  Variable value
</div>
</div>
<div class="help-para">
nvim_strwidth(<code>{text}</code>)                                        <a name="nvim_strwidth()"></a><code class="help-tag-right">nvim_strwidth()</code>
    Calculates the number of display cells occupied by <code>text</code>. Control
    characters including <code>&lt;Tab&gt;</code> count as one cell.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{text}</code>  Some text
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Number of cells

</div>
<div class="help-para">
nvim_subscribe(<code>{event}</code>)                                     <a name="nvim_subscribe()"></a><code class="help-tag-right">nvim_subscribe()</code>
    Subscribes to event broadcasts.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{event}</code>  Event type string
</div>
</div>
<div class="help-para">
nvim_unsubscribe(<code>{event}</code>)                                 <a name="nvim_unsubscribe()"></a><code class="help-tag-right">nvim_unsubscribe()</code>
    Unsubscribes to event broadcasts.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{event}</code>  Event type string
</div>
</div>
<div class="help-para">
<h2 class="help-heading">Vimscript Functions<span class="help-heading-tags">                                            <a name="api-vimscript"></a><span class="help-tag">api-vimscript</span></span></h2>


</div>
<div class="help-para">
                                                   <a name="nvim_call_dict_function()"></a><code class="help-tag-right">nvim_call_dict_function()</code>
nvim_call_dict_function(<code>{dict}</code>, <code>{fn}</code>, <code>{args}</code>)
    Calls a VimL <a href="/neovim-docs-web/en/eval#Dictionary-function">Dictionary-function</a> with the given arguments.

</div>
<div class="help-para">
    On execution error: fails with VimL error, updates v:errmsg.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{dict}</code>  Dictionary, or String evaluating to a VimL <a href="/neovim-docs-web/en/eval#self">self</a> dict
</div><div class="help-li" style=""> <code>{fn}</code>    Name of the function defined on the VimL dict
</div><div class="help-li" style=""> <code>{args}</code>  Function arguments packed in an Array
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Result of the function call

</div>
<div class="help-para">
nvim_call_function(<code>{fn}</code>, <code>{args}</code>)                        <a name="nvim_call_function()"></a><code class="help-tag-right">nvim_call_function()</code>
    Calls a VimL function with the given arguments.

</div>
<div class="help-para">
    On execution error: fails with VimL error, updates v:errmsg.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{fn}</code>    Function to call
</div><div class="help-li" style=""> <code>{args}</code>  Function arguments packed in an Array
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Result of the function call

</div>
<div class="help-para">
nvim_command(<code>{command}</code>)                                       <a name="nvim_command()"></a><code class="help-tag-right">nvim_command()</code>
    Executes an Ex command.

</div>
<div class="help-para">
    On execution error: fails with VimL error, updates v:errmsg.

</div>
<div class="help-para">
    Prefer using <a href="/neovim-docs-web/en/api#nvim_cmd()">nvim_cmd()</a> or <a href="/neovim-docs-web/en/api#nvim_exec()">nvim_exec()</a> over this. To evaluate multiple
    lines of Vim script or an Ex command directly, use <a href="/neovim-docs-web/en/api#nvim_exec()">nvim_exec()</a>. To
    construct an Ex command using a structured format and then execute it, use
    <a href="/neovim-docs-web/en/api#nvim_cmd()">nvim_cmd()</a>. To modify an Ex command before evaluating it, use
    <a href="/neovim-docs-web/en/api#nvim_parse_cmd()">nvim_parse_cmd()</a> in conjunction with <a href="/neovim-docs-web/en/api#nvim_cmd()">nvim_cmd()</a>.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{command}</code>  Ex command string
</div>
</div>
<div class="help-para">
nvim_eval(<code>{expr}</code>)                                                <a name="nvim_eval()"></a><code class="help-tag-right">nvim_eval()</code>
    Evaluates a VimL <a href="/neovim-docs-web/en/eval#expression">expression</a>. Dictionaries and Lists are recursively
    expanded.

</div>
<div class="help-para">
    On execution error: fails with VimL error, updates v:errmsg.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{expr}</code>  VimL expression string
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Evaluation result or expanded object

</div>
<div class="help-para">
nvim_exec(<code>{src}</code>, <code>{output}</code>)                                       <a name="nvim_exec()"></a><code class="help-tag-right">nvim_exec()</code>
    Executes Vimscript (multiline block of Ex commands), like anonymous
    <a href="/neovim-docs-web/en/repeat#%3Asource">:source</a>.

</div>
<div class="help-para">
    Unlike <a href="/neovim-docs-web/en/api#nvim_command()">nvim_command()</a> this function supports heredocs, script-scope
    (s:), etc.

</div>
<div class="help-para">
    On execution error: fails with VimL error, updates v:errmsg.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{src}</code>     Vimscript code
</div><div class="help-li" style=""> <code>{output}</code>  Capture and return all (non-error, non-shell <a href="/neovim-docs-web/en/various#%3A%21">:!</a>) output
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Output (non-error, non-shell <a href="/neovim-docs-web/en/various#%3A%21">:!</a>) if <code>output</code> is true, else empty
        string.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/builtin#execute()">execute()</a>
        <a href="/neovim-docs-web/en/api#nvim_command()">nvim_command()</a>
        <a href="/neovim-docs-web/en/api#nvim_cmd()">nvim_cmd()</a>

</div>
<div class="help-para">
                                                     <a name="nvim_parse_expression()"></a><code class="help-tag-right">nvim_parse_expression()</code>
nvim_parse_expression(<code>{expr}</code>, <code>{flags}</code>, <code>{highlight}</code>)
    Parse a VimL expression.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#api-fast">api-fast</a>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{expr}</code>       Expression to parse. Always treated as a single line.
</div><div class="help-li" style=""> <code>{flags}</code>      Flags:
</div><div class="help-li" style="margin-left: 3rem;"> "m" if multiple expressions in a row are allowed (only
                       the first one will be parsed),
</div><div class="help-li" style="margin-left: 3rem;"> "E" if EOC tokens are not allowed (determines whether
                       they will stop parsing process or be recognized as an
                       operator/space, though also yielding an error).
</div><div class="help-li" style="margin-left: 3rem;"> "l" when needing to start parsing with lvalues for
                       ":let" or ":for". Common flag sets:
</div><div class="help-li" style="margin-left: 3rem;"> "m" to parse like for ":echo".
</div><div class="help-li" style="margin-left: 3rem;"> "E" to parse like for "&lt;C-r&gt;=".
</div><div class="help-li" style="margin-left: 3rem;"> empty string for ":call".
</div><div class="help-li" style="margin-left: 3rem;"> "lm" to parse for ":let".
</div><div class="help-li" style=""> <code>{highlight}</code>  If true, return value will also include "highlight" key
                     containing array of 4-tuples (arrays) (Integer, Integer,
                     Integer, String), where first three numbers define the
                     highlighted region and represent line, starting column
                     and ending column (latter exclusive: one should highlight
                     region [start_col, end_col)).
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>

</div>
<div class="help-para">
<div class="help-li" style=""> AST: top-level dictionary with these keys:
</div><div class="help-li" style="margin-left: 3rem;"> "error": Dictionary with error, present only if parser saw some
            error. Contains the following keys:
</div><div class="help-li" style="margin-left: 4rem;"> "message": String, error message in printf format, translated.
              Must contain exactly one "%.*s".
</div><div class="help-li" style="margin-left: 4rem;"> "arg": String, error message argument.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> "len": Amount of bytes successfully parsed. With flags equal to ""
            that should be equal to the length of expr string. (“Successfully
            parsed” here means “participated in AST creation”, not “till the
            first error”.)
</div><div class="help-li" style=""> "ast": AST, either nil or a dictionary with these keys:
</div><div class="help-li" style="margin-left: 3rem;"> "type": node type, one of the value names from ExprASTNodeType
              stringified without "kExprNode" prefix.
</div><div class="help-li" style="margin-left: 3rem;"> "start": a pair [line, column] describing where node is
              "started" where "line" is always 0 (will not be 0 if you will be
              using nvim_parse_viml() on e.g. ":let", but that is not present
              yet). Both elements are Integers.
</div><div class="help-li" style="margin-left: 3rem;"> "len": “length” of the node. This and "start" are there for
              debugging purposes primary (debugging parser and providing debug
              information).
</div><div class="help-li" style="margin-left: 3rem;"> "children": a list of nodes described in top/"ast". There always
              is zero, one or two children, key will not be present if node
              has no children. Maximum number of children may be found in
              node_maxchildren array.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> Local values (present only for certain nodes):
</div><div class="help-li" style="margin-left: 3rem;"> "scope": a single Integer, specifies scope for "Option" and
            "PlainIdentifier" nodes. For "Option" it is one of ExprOptScope
            values, for "PlainIdentifier" it is one of ExprVarScope values.
</div><div class="help-li" style="margin-left: 3rem;"> "ident": identifier (without scope, if any), present for "Option",
            "PlainIdentifier", "PlainKey" and "Environment" nodes.
</div><div class="help-li" style="margin-left: 3rem;"> "name": Integer, register name (one character) or -1. Only present
            for "Register" nodes.
</div><div class="help-li" style="margin-left: 3rem;"> "cmp_type": String, comparison type, one of the value names from
            ExprComparisonType, stringified without "kExprCmp" prefix. Only
            present for "Comparison" nodes.
</div><div class="help-li" style="margin-left: 3rem;"> "ccs_strategy": String, case comparison strategy, one of the value
            names from ExprCaseCompareStrategy, stringified without
            "kCCStrategy" prefix. Only present for "Comparison" nodes.
</div><div class="help-li" style="margin-left: 3rem;"> "augmentation": String, augmentation type for "Assignment" nodes.
            Is either an empty string, "Add", "Subtract" or "Concat" for "=",
            "+=", "-=" or ".=" respectively.
</div><div class="help-li" style="margin-left: 3rem;"> "invert": Boolean, true if result of comparison needs to be
            inverted. Only present for "Comparison" nodes.
</div><div class="help-li" style="margin-left: 3rem;"> "ivalue": Integer, integer value for "Integer" nodes.
</div><div class="help-li" style="margin-left: 3rem;"> "fvalue": Float, floating-point value for "Float" nodes.
</div><div class="help-li" style="margin-left: 3rem;"> "svalue": String, value for "SingleQuotedString" and
            "DoubleQuotedString" nodes.
</div>
</div>
<div class="help-para">
<h2 class="help-heading">Command Functions<span class="help-heading-tags">                                                <a name="api-command"></a><span class="help-tag">api-command</span></span></h2>


</div>
<div class="help-para">
                                              <a name="nvim_buf_create_user_command()"></a><code class="help-tag-right">nvim_buf_create_user_command()</code>
nvim_buf_create_user_command(<code>{buffer}</code>, <code>{name}</code>, <code>{command}</code>, <code>{*opts}</code>)
    Create a new user command <a href="/neovim-docs-web/en/map#user-commands">user-commands</a> in the given buffer.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        nvim_create_user_command

</div>
<div class="help-para">
                                                 <a name="nvim_buf_del_user_command()"></a><code class="help-tag-right">nvim_buf_del_user_command()</code>
nvim_buf_del_user_command(<code>{buffer}</code>, <code>{name}</code>)
    Delete a buffer-local user-defined command.

</div>
<div class="help-para">
    Only commands created with <a href="/neovim-docs-web/en/map#%3Acommand-buffer">:command-buffer</a> or
    <a href="/neovim-docs-web/en/api#nvim_buf_create_user_command()">nvim_buf_create_user_command()</a> can be deleted with this function.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer.
</div><div class="help-li" style=""> <code>{name}</code>    Name of the command to delete.
</div>
</div>
<div class="help-para">
nvim_buf_get_commands(<code>{buffer}</code>, <code>{*opts}</code>)             <a name="nvim_buf_get_commands()"></a><code class="help-tag-right">nvim_buf_get_commands()</code>
    Gets a map of buffer-local <a href="/neovim-docs-web/en/map#user-commands">user-commands</a>.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{opts}</code>    Optional parameters. Currently not used.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Map of maps describing commands.

</div>
<div class="help-para">
nvim_cmd(<code>{*cmd}</code>, <code>{*opts}</code>)                                         <a name="nvim_cmd()"></a><code class="help-tag-right">nvim_cmd()</code>
    Executes an Ex command.

</div>
<div class="help-para">
    Unlike <a href="/neovim-docs-web/en/api#nvim_command()">nvim_command()</a> this command takes a structured Dictionary instead
    of a String. This allows for easier construction and manipulation of an Ex
    command. This also allows for things such as having spaces inside a
    command argument, expanding filenames in a command that otherwise doesn't
    expand filenames, etc. Command arguments may also be Number, Boolean or
    String.

</div>
<div class="help-para">
    The first argument may also be used instead of count for commands that
    support it in order to make their usage simpler with <a href="/neovim-docs-web/en/lua#vim.cmd()">vim.cmd()</a>. For
    example, instead of <code>vim.cmd.bdelete{ count = 2 }</code>, you may do
    <code>vim.cmd.bdelete(2)</code>.

</div>
<div class="help-para">
    On execution error: fails with VimL error, updates v:errmsg.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{cmd}</code>   Command to execute. Must be a Dictionary that can contain the
                same values as the return value of <a href="/neovim-docs-web/en/api#nvim_parse_cmd()">nvim_parse_cmd()</a> except
                "addr", "nargs" and "nextcmd" which are ignored if provided.
                All values except for "cmd" are optional.
</div><div class="help-li" style=""> <code>{opts}</code>  Optional parameters.
</div><div class="help-li" style="margin-left: 3rem;"> output: (boolean, default false) Whether to return command
                  output.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Command output (non-error, non-shell <a href="/neovim-docs-web/en/various#%3A%21">:!</a>) if <code>output</code> is true, else
        empty string.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_exec()">nvim_exec()</a>
        <a href="/neovim-docs-web/en/api#nvim_command()">nvim_command()</a>

</div>
<div class="help-para">
                                                  <a name="nvim_create_user_command()"></a><code class="help-tag-right">nvim_create_user_command()</code>
nvim_create_user_command(<code>{name}</code>, <code>{command}</code>, <code>{*opts}</code>)
    Create a new user command <a href="/neovim-docs-web/en/map#user-commands">user-commands</a>

</div>
<div class="help-para">
    <code>{name}</code> is the name of the new command. The name must begin with an
    uppercase letter.

</div>
<div class="help-para">
    <code>{command}</code> is the replacement text or Lua function to execute.

</div>
<div class="help-para">
    Example:<pre>:call nvim_create_user_command('SayHello', 'echo "Hello world!"', {})
:SayHello
Hello world!</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>     Name of the new user command. Must begin with an uppercase
                   letter.
</div><div class="help-li" style=""> <code>{command}</code>  Replacement command to execute when this user command is
                   executed. When called from Lua, the command can also be a
                   Lua function. The function is called with a single table
                   argument that contains the following keys:
</div><div class="help-li" style="margin-left: 3rem;"> name: (string) Command name
</div><div class="help-li" style="margin-left: 3rem;"> args: (string) The args passed to the command, if any
                     <a href="/neovim-docs-web/en/map#%3Cargs%3E">&lt;args&gt;</a>
</div><div class="help-li" style="margin-left: 3rem;"> fargs: (table) The args split by unescaped whitespace
                     (when more than one argument is allowed), if any
                     <a href="/neovim-docs-web/en/map#%3Cf-args%3E">&lt;f-args&gt;</a>
</div><div class="help-li" style="margin-left: 3rem;"> bang: (boolean) "true" if the command was executed with a
                     ! modifier <a href="/neovim-docs-web/en/map#%3Cbang%3E">&lt;bang&gt;</a>
</div><div class="help-li" style="margin-left: 3rem;"> line1: (number) The starting line of the command range
                     <a href="/neovim-docs-web/en/map#%3Cline1%3E">&lt;line1&gt;</a>
</div><div class="help-li" style="margin-left: 3rem;"> line2: (number) The final line of the command range
                     <a href="/neovim-docs-web/en/map#%3Cline2%3E">&lt;line2&gt;</a>
</div><div class="help-li" style="margin-left: 3rem;"> range: (number) The number of items in the command range:
                     0, 1, or 2 <a href="/neovim-docs-web/en/map#%3Crange%3E">&lt;range&gt;</a>
</div><div class="help-li" style="margin-left: 3rem;"> count: (number) Any count supplied <a href="/neovim-docs-web/en/map#%3Ccount%3E">&lt;count&gt;</a>
</div><div class="help-li" style="margin-left: 3rem;"> reg: (string) The optional register, if specified <a href="/neovim-docs-web/en/map#%3Creg%3E">&lt;reg&gt;</a>
</div><div class="help-li" style="margin-left: 3rem;"> mods: (string) Command modifiers, if any <a href="/neovim-docs-web/en/map#%3Cmods%3E">&lt;mods&gt;</a>
</div><div class="help-li" style="margin-left: 3rem;"> smods: (table) Command modifiers in a structured format.
                     Has the same structure as the "mods" key of
                     <a href="/neovim-docs-web/en/api#nvim_parse_cmd()">nvim_parse_cmd()</a>.
</div><div class="help-li" style=""> <code>{opts}</code>     Optional command attributes. See <a href="/neovim-docs-web/en/map#command-attributes">command-attributes</a> for
                   more details. To use boolean attributes (such as
                   <a href="/neovim-docs-web/en/map#%3Acommand-bang">:command-bang</a> or <a href="/neovim-docs-web/en/map#%3Acommand-bar">:command-bar</a>) set the value to "true".
                   In addition to the string options listed in
                   <a href="/neovim-docs-web/en/map#%3Acommand-complete">:command-complete</a>, the "complete" key also accepts a Lua
                   function which works like the "customlist" completion mode
                   <a href="/neovim-docs-web/en/map#%3Acommand-completion-customlist">:command-completion-customlist</a>. Additional parameters:
</div><div class="help-li" style="margin-left: 3rem;"> desc: (string) Used for listing the command when a Lua
                     function is used for <code>{command}</code>.
</div><div class="help-li" style="margin-left: 3rem;"> force: (boolean, default true) Override any previous
                     definition.
</div><div class="help-li" style="margin-left: 3rem;"> preview: (function) Preview callback for <a href="/neovim-docs-web/en/options#'inccommand'">'inccommand'</a>
                     <a href="/neovim-docs-web/en/map#%3Acommand-preview">:command-preview</a>
</div>
</div>
<div class="help-para">
nvim_del_user_command(<code>{name}</code>)                        <a name="nvim_del_user_command()"></a><code class="help-tag-right">nvim_del_user_command()</code>
    Delete a user-defined command.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  Name of the command to delete.
</div>
</div>
<div class="help-para">
nvim_get_commands(<code>{*opts}</code>)                               <a name="nvim_get_commands()"></a><code class="help-tag-right">nvim_get_commands()</code>
    Gets a map of global (non-buffer-local) Ex commands.

</div>
<div class="help-para">
    Currently only <a href="/neovim-docs-web/en/map#user-commands">user-commands</a> are supported, not builtin Ex commands.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{opts}</code>  Optional parameters. Currently only supports <code>{"builtin":false}</code>
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Map of maps describing commands.

</div>
<div class="help-para">
nvim_parse_cmd(<code>{str}</code>, <code>{opts}</code>)                               <a name="nvim_parse_cmd()"></a><code class="help-tag-right">nvim_parse_cmd()</code>
    Parse command line.

</div>
<div class="help-para">
    Doesn't check the validity of command arguments.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#api-fast">api-fast</a>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{str}</code>   Command line string to parse. Cannot contain "\n".
</div><div class="help-li" style=""> <code>{opts}</code>  Optional parameters. Reserved for future use.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Dictionary containing command information, with these keys:
<div class="help-li" style=""> cmd: (string) Command name.
</div><div class="help-li" style=""> range: (array) (optional) Command range (<a href="/neovim-docs-web/en/map#%3Cline1%3E">&lt;line1&gt;</a> <a href="/neovim-docs-web/en/map#%3Cline2%3E">&lt;line2&gt;</a>).
          Omitted if command doesn't accept a range. Otherwise, has no
          elements if no range was specified, one element if only a single
          range item was specified, or two elements if both range items were
          specified.
</div><div class="help-li" style=""> count: (number) (optional) Command <a href="/neovim-docs-web/en/map#%3Ccount%3E">&lt;count&gt;</a>. Omitted if command
          cannot take a count.
</div><div class="help-li" style=""> reg: (string) (optional) Command <a href="/neovim-docs-web/en/map#%3Cregister%3E">&lt;register&gt;</a>. Omitted if command
          cannot take a register.
</div><div class="help-li" style=""> bang: (boolean) Whether command contains a <a href="/neovim-docs-web/en/map#%3Cbang%3E">&lt;bang&gt;</a> (!) modifier.
</div><div class="help-li" style=""> args: (array) Command arguments.
</div><div class="help-li" style=""> addr: (string) Value of <a href="/neovim-docs-web/en/map#%3Acommand-addr">:command-addr</a>. Uses short name.
</div><div class="help-li" style=""> nargs: (string) Value of <a href="/neovim-docs-web/en/map#%3Acommand-nargs">:command-nargs</a>.
</div><div class="help-li" style=""> nextcmd: (string) Next command if there are multiple commands
          separated by a <a href="/neovim-docs-web/en/cmdline#%3Abar">:bar</a>. Empty if there isn't a next command.
</div><div class="help-li" style=""> magic: (dictionary) Which characters have special meaning in the
          command arguments.
</div><div class="help-li" style="margin-left: 3rem;"> file: (boolean) The command expands filenames. Which means
            characters such as "%", "#" and wildcards are expanded.
</div><div class="help-li" style="margin-left: 3rem;"> bar: (boolean) The "|" character is treated as a command separator
            and the double quote character (") is treated as the start of a
            comment.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> mods: (dictionary) <a href="/neovim-docs-web/en/map#%3Acommand-modifiers">:command-modifiers</a>.
</div><div class="help-li" style="margin-left: 3rem;"> filter: (dictionary) <a href="/neovim-docs-web/en/various#%3Afilter">:filter</a>.
</div><div class="help-li" style="margin-left: 4rem;"> pattern: (string) Filter pattern. Empty string if there is no
              filter.
</div><div class="help-li" style="margin-left: 4rem;"> force: (boolean) Whether filter is inverted or not.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> silent: (boolean) <a href="/neovim-docs-web/en/various#%3Asilent">:silent</a>.
</div><div class="help-li" style=""> emsg_silent: (boolean) <a href="/neovim-docs-web/en/various#%3Asilent%21">:silent!</a>.
</div><div class="help-li" style=""> unsilent: (boolean) <a href="/neovim-docs-web/en/various#%3Aunsilent">:unsilent</a>.
</div><div class="help-li" style=""> sandbox: (boolean) <a href="/neovim-docs-web/en/eval#%3Asandbox">:sandbox</a>.
</div><div class="help-li" style=""> noautocmd: (boolean) <a href="/neovim-docs-web/en/autocmd#%3Anoautocmd">:noautocmd</a>.
</div><div class="help-li" style=""> browse: (boolean) <a href="/neovim-docs-web/en/editing#%3Abrowse">:browse</a>.
</div><div class="help-li" style=""> confirm: (boolean) <a href="/neovim-docs-web/en/editing#%3Aconfirm">:confirm</a>.
</div><div class="help-li" style=""> hide: (boolean) <a href="/neovim-docs-web/en/windows#%3Ahide">:hide</a>.
</div><div class="help-li" style=""> horizontal: (boolean) <a href="/neovim-docs-web/en/windows#%3Ahorizontal">:horizontal</a>.
</div><div class="help-li" style=""> keepalt: (boolean) <a href="/neovim-docs-web/en/editing#%3Akeepalt">:keepalt</a>.
</div><div class="help-li" style=""> keepjumps: (boolean) <a href="/neovim-docs-web/en/motion#%3Akeepjumps">:keepjumps</a>.
</div><div class="help-li" style=""> keepmarks: (boolean) <a href="/neovim-docs-web/en/motion#%3Akeepmarks">:keepmarks</a>.
</div><div class="help-li" style=""> keeppatterns: (boolean) <a href="/neovim-docs-web/en/cmdline#%3Akeeppatterns">:keeppatterns</a>.
</div><div class="help-li" style=""> lockmarks: (boolean) <a href="/neovim-docs-web/en/motion#%3Alockmarks">:lockmarks</a>.
</div><div class="help-li" style=""> noswapfile: (boolean) <a href="/neovim-docs-web/en/recover#%3Anoswapfile">:noswapfile</a>.
</div><div class="help-li" style=""> tab: (integer) <a href="/neovim-docs-web/en/tabpage#%3Atab">:tab</a>. -1 when omitted.
</div><div class="help-li" style=""> verbose: (integer) <a href="/neovim-docs-web/en/various#%3Averbose">:verbose</a>. -1 when omitted.
</div><div class="help-li" style=""> vertical: (boolean) <a href="/neovim-docs-web/en/windows#%3Avertical">:vertical</a>.
</div><div class="help-li" style=""> split: (string) Split modifier string, is an empty string when
            there's no split modifier. If there is a split modifier it can be
            one of:
</div><div class="help-li" style="margin-left: 3rem;"> "aboveleft": <a href="/neovim-docs-web/en/windows#%3Aaboveleft">:aboveleft</a>.
</div><div class="help-li" style="margin-left: 3rem;"> "belowright": <a href="/neovim-docs-web/en/windows#%3Abelowright">:belowright</a>.
</div><div class="help-li" style="margin-left: 3rem;"> "topleft": <a href="/neovim-docs-web/en/windows#%3Atopleft">:topleft</a>.
</div><div class="help-li" style="margin-left: 3rem;"> "botright": <a href="/neovim-docs-web/en/windows#%3Abotright">:botright</a>.
</div>
</div>
<div class="help-para">
<h2 class="help-heading">Options Functions<span class="help-heading-tags">                                                <a name="api-options"></a><span class="help-tag">api-options</span></span></h2>


</div>
<div class="help-para">
nvim_buf_get_option(<code>{buffer}</code>, <code>{name}</code>)                  <a name="nvim_buf_get_option()"></a><code class="help-tag-right">nvim_buf_get_option()</code>
    Gets a buffer option value

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{name}</code>    Option name
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Option value

</div>
<div class="help-para">
nvim_buf_set_option(<code>{buffer}</code>, <code>{name}</code>, <code>{value}</code>)         <a name="nvim_buf_set_option()"></a><code class="help-tag-right">nvim_buf_set_option()</code>
    Sets a buffer option value. Passing <code>nil</code> as value deletes the option
    (only works if there's a global fallback)

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{name}</code>    Option name
</div><div class="help-li" style=""> <code>{value}</code>   Option value
</div>
</div>
<div class="help-para">
nvim_get_all_options_info()                      <a name="nvim_get_all_options_info()"></a><code class="help-tag-right">nvim_get_all_options_info()</code>
    Gets the option information for all options.

</div>
<div class="help-para">
    The dictionary has the full option names as keys and option metadata
    dictionaries as detailed at <a href="/neovim-docs-web/en/api#nvim_get_option_info()">nvim_get_option_info()</a>.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        dictionary of all options

</div>
<div class="help-para">
nvim_get_option(<code>{name}</code>)                                    <a name="nvim_get_option()"></a><code class="help-tag-right">nvim_get_option()</code>
    Gets the global value of an option.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  Option name
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Option value (global)

</div>
<div class="help-para">
nvim_get_option_info(<code>{name}</code>)                          <a name="nvim_get_option_info()"></a><code class="help-tag-right">nvim_get_option_info()</code>
    Gets the option information for one option

</div>
<div class="help-para">
    Resulting dictionary has keys:
<div class="help-li" style=""> name: Name of the option (like <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a>)
</div><div class="help-li" style=""> shortname: Shortened name of the option (like <a href="/neovim-docs-web/en/options#'ft'">'ft'</a>)
</div><div class="help-li" style=""> type: type of option ("string", "number" or "boolean")
</div><div class="help-li" style=""> default: The default value for the option
</div><div class="help-li" style=""> was_set: Whether the option was set.
</div><div class="help-li" style=""> last_set_sid: Last set script id (if any)
</div><div class="help-li" style=""> last_set_linenr: line number where option was set
</div><div class="help-li" style=""> last_set_chan: Channel where option was set (0 for local)
</div><div class="help-li" style=""> scope: one of "global", "win", or "buf"
</div><div class="help-li" style=""> global_local: whether win or buf option has a global value
</div><div class="help-li" style=""> commalist: List of comma separated values
</div><div class="help-li" style=""> flaglist: List of single char flags
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  Option name
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Option Information

</div>
<div class="help-para">
nvim_get_option_value(<code>{name}</code>, <code>{*opts}</code>)               <a name="nvim_get_option_value()"></a><code class="help-tag-right">nvim_get_option_value()</code>
    Gets the value of an option. The behavior of this function matches that of
    <a href="/neovim-docs-web/en/options#%3Aset">:set</a>: the local value of an option is returned if it exists; otherwise,
    the global value is returned. Local values always correspond to the
    current buffer or window, unless "buf" or "win" is set in <code>{opts}</code>.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  Option name
</div><div class="help-li" style=""> <code>{opts}</code>  Optional parameters
</div><div class="help-li" style="margin-left: 3rem;"> scope: One of "global" or "local". Analogous to <a href="/neovim-docs-web/en/options#%3Asetglobal">:setglobal</a>
                  and <a href="/neovim-docs-web/en/options#%3Asetlocal">:setlocal</a>, respectively.
</div><div class="help-li" style="margin-left: 3rem;"> win: <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>. Used for getting window local options.
</div><div class="help-li" style="margin-left: 3rem;"> buf: Buffer number. Used for getting buffer local options.
                  Implies <code>{scope}</code> is "local".
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Option value

</div>
<div class="help-para">
nvim_set_option(<code>{name}</code>, <code>{value}</code>)                           <a name="nvim_set_option()"></a><code class="help-tag-right">nvim_set_option()</code>
    Sets the global value of an option.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>   Option name
</div><div class="help-li" style=""> <code>{value}</code>  New option value
</div>
</div>
<div class="help-para">
                                                     <a name="nvim_set_option_value()"></a><code class="help-tag-right">nvim_set_option_value()</code>
nvim_set_option_value(<code>{name}</code>, <code>{value}</code>, <code>{*opts}</code>)
    Sets the value of an option. The behavior of this function matches that of
    <a href="/neovim-docs-web/en/options#%3Aset">:set</a>: for global-local options, both the global and local value are set
    unless otherwise specified with <code>{scope}</code>.

</div>
<div class="help-para">
    Note the options <code>{win}</code> and <code>{buf}</code> cannot be used together.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>   Option name
</div><div class="help-li" style=""> <code>{value}</code>  New option value
</div><div class="help-li" style=""> <code>{opts}</code>   Optional parameters
</div><div class="help-li" style="margin-left: 3rem;"> scope: One of "global" or "local". Analogous to
                   <a href="/neovim-docs-web/en/options#%3Asetglobal">:setglobal</a> and <a href="/neovim-docs-web/en/options#%3Asetlocal">:setlocal</a>, respectively.
</div><div class="help-li" style="margin-left: 3rem;"> win: <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>. Used for setting window local option.
</div><div class="help-li" style="margin-left: 3rem;"> buf: Buffer number. Used for setting buffer local option.
</div>
</div>
<div class="help-para">
nvim_win_get_option(<code>{window}</code>, <code>{name}</code>)                  <a name="nvim_win_get_option()"></a><code class="help-tag-right">nvim_win_get_option()</code>
    Gets a window option value

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div><div class="help-li" style=""> <code>{name}</code>    Option name
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Option value

</div>
<div class="help-para">
nvim_win_set_option(<code>{window}</code>, <code>{name}</code>, <code>{value}</code>)         <a name="nvim_win_set_option()"></a><code class="help-tag-right">nvim_win_set_option()</code>
    Sets a window option value. Passing <code>nil</code> as value deletes the option
    (only works if there's a global fallback)

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div><div class="help-li" style=""> <code>{name}</code>    Option name
</div><div class="help-li" style=""> <code>{value}</code>   Option value
</div>
</div>
<div class="help-para">
<h2 class="help-heading">Buffer Functions<span class="help-heading-tags">                                                  <a name="api-buffer"></a><span class="help-tag">api-buffer</span></span></h2>


</div>
<div class="help-para">
For more information on buffers, see <a href="/neovim-docs-web/en/windows#buffers">buffers</a>.

</div>
<div class="help-para">
Unloaded Buffers:~

</div>
<div class="help-para">
Buffers may be unloaded by the <a href="/neovim-docs-web/en/windows#%3Abunload">:bunload</a> command or the buffer's
<a href="/neovim-docs-web/en/options#'bufhidden'">'bufhidden'</a> option. When a buffer is unloaded its file contents are
freed from memory and vim cannot operate on the buffer lines until it is
reloaded (usually by opening the buffer again in a new window). API
methods such as <a href="/neovim-docs-web/en/api#nvim_buf_get_lines()">nvim_buf_get_lines()</a> and <a href="/neovim-docs-web/en/api#nvim_buf_line_count()">nvim_buf_line_count()</a> will be
affected.

</div>
<div class="help-para">
You can use <a href="/neovim-docs-web/en/api#nvim_buf_is_loaded()">nvim_buf_is_loaded()</a> or <a href="/neovim-docs-web/en/api#nvim_buf_line_count()">nvim_buf_line_count()</a> to check
whether a buffer is loaded.

</div>
<div class="help-para">
nvim_buf_attach(<code>{buffer}</code>, <code>{send_buffer}</code>, <code>{opts}</code>)           <a name="nvim_buf_attach()"></a><code class="help-tag-right">nvim_buf_attach()</code>
    Activates buffer-update events on a channel, or as Lua callbacks.

</div>
<div class="help-para">
    Example (Lua): capture buffer updates in a global <code>events</code> variable (use "print(vim.inspect(events))" to see its contents):<pre>events = {}
vim.api.nvim_buf_attach(0, false, {
  on_lines=function(...) table.insert(events, {...}) end})</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>       Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{send_buffer}</code>  True if the initial notification should contain the
                       whole buffer: first notification will be
                       <code>nvim_buf_lines_event</code>. Else the first notification
                       will be <code>nvim_buf_changedtick_event</code>. Not for Lua
                       callbacks.
</div><div class="help-li" style=""> <code>{opts}</code>         Optional parameters.
</div><div class="help-li" style="margin-left: 3rem;"> on_lines: Lua callback invoked on change. Return <code>true</code> to detach. Args:
</div><div class="help-li" style="margin-left: 4rem;"> the string "lines"
</div><div class="help-li" style="margin-left: 4rem;"> buffer handle
</div><div class="help-li" style="margin-left: 4rem;"> b:changedtick
</div><div class="help-li" style="margin-left: 4rem;"> first line that changed (zero-indexed)
</div><div class="help-li" style="margin-left: 4rem;"> last line that was changed
</div><div class="help-li" style="margin-left: 4rem;"> last line in the updated range
</div><div class="help-li" style="margin-left: 4rem;"> byte count of previous contents
</div><div class="help-li" style="margin-left: 4rem;"> deleted_codepoints (if <code>utf_sizes</code> is true)
</div><div class="help-li" style="margin-left: 4rem;"> deleted_codeunits (if <code>utf_sizes</code> is true)
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> on_bytes: lua callback invoked on change. This
                         callback receives more granular information about the
                         change compared to on_lines. Return <code>true</code> to detach. Args:
</div><div class="help-li" style="margin-left: 3rem;"> the string "bytes"
</div><div class="help-li" style="margin-left: 3rem;"> buffer handle
</div><div class="help-li" style="margin-left: 3rem;"> b:changedtick
</div><div class="help-li" style="margin-left: 3rem;"> start row of the changed text (zero-indexed)
</div><div class="help-li" style="margin-left: 3rem;"> start column of the changed text
</div><div class="help-li" style="margin-left: 3rem;"> byte offset of the changed text (from the start of
                           the buffer)
</div><div class="help-li" style="margin-left: 3rem;"> old end row of the changed text
</div><div class="help-li" style="margin-left: 3rem;"> old end column of the changed text
</div><div class="help-li" style="margin-left: 3rem;"> old end byte length of the changed text
</div><div class="help-li" style="margin-left: 3rem;"> new end row of the changed text
</div><div class="help-li" style="margin-left: 3rem;"> new end column of the changed text
</div><div class="help-li" style="margin-left: 3rem;"> new end byte length of the changed text
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> on_changedtick: Lua callback invoked on changedtick
                         increment without text change. Args:
</div><div class="help-li" style="margin-left: 3rem;"> the string "changedtick"
</div><div class="help-li" style="margin-left: 3rem;"> buffer handle
</div><div class="help-li" style="margin-left: 3rem;"> b:changedtick
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> on_detach: Lua callback invoked on detach. Args:
</div><div class="help-li" style="margin-left: 3rem;"> the string "detach"
</div><div class="help-li" style="margin-left: 3rem;"> buffer handle
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> on_reload: Lua callback invoked on reload. The entire
                         buffer content should be considered changed. Args:
</div><div class="help-li" style="margin-left: 3rem;"> the string "reload"
</div><div class="help-li" style="margin-left: 3rem;"> buffer handle
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> utf_sizes: include UTF-32 and UTF-16 size of the
                         replaced region, as args to <code>on_lines</code>.
</div><div class="help-li" style=""> preview: also attach to command preview (i.e.
                         <a href="/neovim-docs-web/en/options#'inccommand'">'inccommand'</a>) events.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        False if attach failed (invalid parameter, or buffer isn't loaded);
        otherwise True. TODO: LUA_API_NO_EVAL

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_buf_detach()">nvim_buf_detach()</a>
        <a href="/neovim-docs-web/en/api#api-buffer-updates-lua">api-buffer-updates-lua</a>

</div>
<div class="help-para">
nvim_buf_call(<code>{buffer}</code>, <code>{fun}</code>)                               <a name="nvim_buf_call()"></a><code class="help-tag-right">nvim_buf_call()</code>
    call a function with buffer as temporary current buffer

</div>
<div class="help-para">
    This temporarily switches current buffer to "buffer". If the current
    window already shows "buffer", the window is not switched If a window
    inside the current tabpage (including a float) already shows the buffer
    One of these windows will be set as current window temporarily. Otherwise
    a temporary scratch window (called the "autocmd window" for historical
    reasons) will be used.

</div>
<div class="help-para">
    This is useful e.g. to call vimL functions that only work with the current
    buffer/window currently, like <a href="/neovim-docs-web/en/builtin#termopen()">termopen()</a>.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        Lua <a href="/neovim-docs-web/en/lua#vim.api">vim.api</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{fun}</code>     Function to call inside the buffer (currently lua callable
                  only)
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Return value of function. NB: will deepcopy lua values currently, use
        upvalues to send lua references in and out.

</div>
<div class="help-para">
nvim_buf_del_keymap(<code>{buffer}</code>, <code>{mode}</code>, <code>{lhs}</code>)           <a name="nvim_buf_del_keymap()"></a><code class="help-tag-right">nvim_buf_del_keymap()</code>
    Unmaps a buffer-local <a href="/neovim-docs-web/en/map#mapping">mapping</a> for the given mode.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_del_keymap()">nvim_del_keymap()</a>

</div>
<div class="help-para">
nvim_buf_del_mark(<code>{buffer}</code>, <code>{name}</code>)                      <a name="nvim_buf_del_mark()"></a><code class="help-tag-right">nvim_buf_del_mark()</code>
    Deletes a named mark in the buffer. See <a href="/neovim-docs-web/en/motion#mark-motions">mark-motions</a>.

</div>
<div class="help-para">
    Note:
        only deletes marks set in the buffer, if the mark is not set in the
        buffer it will return false.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer to set the mark on
</div><div class="help-li" style=""> <code>{name}</code>    Mark name
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        true if the mark was deleted, else false.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_buf_set_mark()">nvim_buf_set_mark()</a>
        <a href="/neovim-docs-web/en/api#nvim_del_mark()">nvim_del_mark()</a>

</div>
<div class="help-para">
nvim_buf_del_var(<code>{buffer}</code>, <code>{name}</code>)                        <a name="nvim_buf_del_var()"></a><code class="help-tag-right">nvim_buf_del_var()</code>
    Removes a buffer-scoped (b:) variable

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{name}</code>    Variable name
</div>
</div>
<div class="help-para">
nvim_buf_delete(<code>{buffer}</code>, <code>{opts}</code>)                          <a name="nvim_buf_delete()"></a><code class="help-tag-right">nvim_buf_delete()</code>
    Deletes the buffer. See <a href="/neovim-docs-web/en/windows#%3Abwipeout">:bwipeout</a>

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        not allowed when <a href="/neovim-docs-web/en/eval#textlock">textlock</a> is active

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{opts}</code>    Optional parameters. Keys:
</div><div class="help-li" style="margin-left: 3rem;"> force: Force deletion and ignore unsaved changes.
</div><div class="help-li" style="margin-left: 3rem;"> unload: Unloaded only, do not delete. See <a href="/neovim-docs-web/en/windows#%3Abunload">:bunload</a>
</div>
</div>
<div class="help-para">
nvim_buf_detach(<code>{buffer}</code>)                                  <a name="nvim_buf_detach()"></a><code class="help-tag-right">nvim_buf_detach()</code>
    Deactivates buffer-update events on the channel.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        False if detach failed (because the buffer isn't loaded); otherwise
        True.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_buf_attach()">nvim_buf_attach()</a>
        <a href="/neovim-docs-web/en/api#api-lua-detach">api-lua-detach</a> for detaching Lua callbacks

</div>
<div class="help-para">
nvim_buf_get_changedtick(<code>{buffer}</code>)                <a name="nvim_buf_get_changedtick()"></a><code class="help-tag-right">nvim_buf_get_changedtick()</code>
    Gets a changed tick of a buffer

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        <code>b:changedtick</code> value.

</div>
<div class="help-para">
nvim_buf_get_keymap(<code>{buffer}</code>, <code>{mode}</code>)                  <a name="nvim_buf_get_keymap()"></a><code class="help-tag-right">nvim_buf_get_keymap()</code>
    Gets a list of buffer-local <a href="/neovim-docs-web/en/map#mapping">mapping</a> definitions.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{mode}</code>    Mode short-name ("n", "i", "v", ...)
</div><div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Array of <a href="/neovim-docs-web/en/builtin#maparg()">maparg()</a>-like dictionaries describing mappings. The
        "buffer" key holds the associated buffer handle.

</div>
<div class="help-para">
                                                        <a name="nvim_buf_get_lines()"></a><code class="help-tag-right">nvim_buf_get_lines()</code>
nvim_buf_get_lines(<code>{buffer}</code>, <code>{start}</code>, <code>{end}</code>, <code>{strict_indexing}</code>)
    Gets a line-range from the buffer.

</div>
<div class="help-para">
    Indexing is zero-based, end-exclusive. Negative indices are interpreted as
    length+1+index: -1 refers to the index past the end. So to get the last
    element use start=-2 and end=-1.

</div>
<div class="help-para">
    Out-of-bounds indices are clamped to the nearest valid value, unless
    <code>strict_indexing</code> is set.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>           Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{start}</code>            First line index
</div><div class="help-li" style=""> <code>{end}</code>              Last line index, exclusive
</div><div class="help-li" style=""> <code>{strict_indexing}</code>  Whether out-of-bounds should be an error.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Array of lines, or empty array for unloaded buffer.

</div>
<div class="help-para">
nvim_buf_get_mark(<code>{buffer}</code>, <code>{name}</code>)                      <a name="nvim_buf_get_mark()"></a><code class="help-tag-right">nvim_buf_get_mark()</code>
    Returns a tuple (row,col) representing the position of the named mark. See
    <a href="/neovim-docs-web/en/motion#mark-motions">mark-motions</a>.

</div>
<div class="help-para">
    Marks are (1,0)-indexed. <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{name}</code>    Mark name
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (row, col) tuple, (0, 0) if the mark is not set, or is an
        uppercase/file mark set in another buffer.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_buf_set_mark()">nvim_buf_set_mark()</a>
        <a href="/neovim-docs-web/en/api#nvim_buf_del_mark()">nvim_buf_del_mark()</a>

</div>
<div class="help-para">
nvim_buf_get_name(<code>{buffer}</code>)                              <a name="nvim_buf_get_name()"></a><code class="help-tag-right">nvim_buf_get_name()</code>
    Gets the full file name for the buffer

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Buffer name

</div>
<div class="help-para">
nvim_buf_get_offset(<code>{buffer}</code>, <code>{index}</code>)                 <a name="nvim_buf_get_offset()"></a><code class="help-tag-right">nvim_buf_get_offset()</code>
    Returns the byte offset of a line (0-indexed). <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a>

</div>
<div class="help-para">
    Line 1 (index=0) has offset 0. UTF-8 bytes are counted. EOL is one byte.
    <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> and <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> are ignored. The line index just after the
    last line gives the total byte-count of the buffer. A final EOL byte is
    counted if it would be written, see <a href="/neovim-docs-web/en/options#'eol'">'eol'</a>.

</div>
<div class="help-para">
    Unlike <a href="/neovim-docs-web/en/builtin#line2byte()">line2byte()</a>, throws error for out-of-bounds indexing. Returns -1
    for unloaded buffer.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{index}</code>   Line index
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Integer byte offset, or -1 for unloaded buffer.

</div>
<div class="help-para">
                                                         <a name="nvim_buf_get_text()"></a><code class="help-tag-right">nvim_buf_get_text()</code>
nvim_buf_get_text(<code>{buffer}</code>, <code>{start_row}</code>, <code>{start_col}</code>, <code>{end_row}</code>, <code>{end_col}</code>,
                  <code>{opts}</code>)
    Gets a range from the buffer.

</div>
<div class="help-para">
    This differs from <a href="/neovim-docs-web/en/api#nvim_buf_get_lines()">nvim_buf_get_lines()</a> in that it allows retrieving only
    portions of a line.

</div>
<div class="help-para">
    Indexing is zero-based. Row indices are end-inclusive, and column indices
    are end-exclusive.

</div>
<div class="help-para">
    Prefer <a href="/neovim-docs-web/en/api#nvim_buf_get_lines()">nvim_buf_get_lines()</a> when retrieving entire lines.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>     Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{start_row}</code>  First line index
</div><div class="help-li" style=""> <code>{start_col}</code>  Starting column (byte offset) on first line
</div><div class="help-li" style=""> <code>{end_row}</code>    Last line index, inclusive
</div><div class="help-li" style=""> <code>{end_col}</code>    Ending column (byte offset) on last line, exclusive
</div><div class="help-li" style=""> <code>{opts}</code>       Optional parameters. Currently unused.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Array of lines, or empty array for unloaded buffer.

</div>
<div class="help-para">
nvim_buf_get_var(<code>{buffer}</code>, <code>{name}</code>)                        <a name="nvim_buf_get_var()"></a><code class="help-tag-right">nvim_buf_get_var()</code>
    Gets a buffer-scoped (b:) variable.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{name}</code>    Variable name
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Variable value

</div>
<div class="help-para">
nvim_buf_is_loaded(<code>{buffer}</code>)                            <a name="nvim_buf_is_loaded()"></a><code class="help-tag-right">nvim_buf_is_loaded()</code>
    Checks if a buffer is valid and loaded. See <a href="/neovim-docs-web/en/api#api-buffer">api-buffer</a> for more info
    about unloaded buffers.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        true if the buffer is valid and loaded, false otherwise.

</div>
<div class="help-para">
nvim_buf_is_valid(<code>{buffer}</code>)                              <a name="nvim_buf_is_valid()"></a><code class="help-tag-right">nvim_buf_is_valid()</code>
    Checks if a buffer is valid.

</div>
<div class="help-para">
    Note:
        Even if a buffer is valid it may have been unloaded. See <a href="/neovim-docs-web/en/api#api-buffer">api-buffer</a>
        for more info about unloaded buffers.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        true if the buffer is valid, false otherwise.

</div>
<div class="help-para">
nvim_buf_line_count(<code>{buffer}</code>)                          <a name="nvim_buf_line_count()"></a><code class="help-tag-right">nvim_buf_line_count()</code>
    Returns the number of lines in the given buffer.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Line count, or 0 for unloaded buffer. <a href="/neovim-docs-web/en/api#api-buffer">api-buffer</a>

</div>
<div class="help-para">
                                                       <a name="nvim_buf_set_keymap()"></a><code class="help-tag-right">nvim_buf_set_keymap()</code>
nvim_buf_set_keymap(<code>{buffer}</code>, <code>{mode}</code>, <code>{lhs}</code>, <code>{rhs}</code>, <code>{*opts}</code>)
    Sets a buffer-local <a href="/neovim-docs-web/en/map#mapping">mapping</a> for the given mode.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_set_keymap()">nvim_set_keymap()</a>

</div>
<div class="help-para">
                                                        <a name="nvim_buf_set_lines()"></a><code class="help-tag-right">nvim_buf_set_lines()</code>
nvim_buf_set_lines(<code>{buffer}</code>, <code>{start}</code>, <code>{end}</code>, <code>{strict_indexing}</code>, <code>{replacement}</code>)
    Sets (replaces) a line-range in the buffer.

</div>
<div class="help-para">
    Indexing is zero-based, end-exclusive. Negative indices are interpreted as
    length+1+index: -1 refers to the index past the end. So to change or
    delete the last element use start=-2 and end=-1.

</div>
<div class="help-para">
    To insert lines at a given index, set <code>start</code> and <code>end</code> to the same index.
    To delete a range of lines, set <code>replacement</code> to an empty array.

</div>
<div class="help-para">
    Out-of-bounds indices are clamped to the nearest valid value, unless
    <code>strict_indexing</code> is set.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        not allowed when <a href="/neovim-docs-web/en/eval#textlock">textlock</a> is active

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>           Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{start}</code>            First line index
</div><div class="help-li" style=""> <code>{end}</code>              Last line index, exclusive
</div><div class="help-li" style=""> <code>{strict_indexing}</code>  Whether out-of-bounds should be an error.
</div><div class="help-li" style=""> <code>{replacement}</code>      Array of lines to use as replacement
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_buf_set_text()">nvim_buf_set_text()</a>

</div>
<div class="help-para">
                                                         <a name="nvim_buf_set_mark()"></a><code class="help-tag-right">nvim_buf_set_mark()</code>
nvim_buf_set_mark(<code>{buffer}</code>, <code>{name}</code>, <code>{line}</code>, <code>{col}</code>, <code>{opts}</code>)
    Sets a named mark in the given buffer, all marks are allowed
    file/uppercase, visual, last change, etc. See <a href="/neovim-docs-web/en/motion#mark-motions">mark-motions</a>.

</div>
<div class="help-para">
    Marks are (1,0)-indexed. <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a>

</div>
<div class="help-para">
    Note:
        Passing 0 as line deletes the mark

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer to set the mark on
</div><div class="help-li" style=""> <code>{name}</code>    Mark name
</div><div class="help-li" style=""> <code>{line}</code>    Line number
</div><div class="help-li" style=""> <code>{col}</code>     Column/row number
</div><div class="help-li" style=""> <code>{opts}</code>    Optional parameters. Reserved for future use.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        true if the mark was set, else false.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_buf_del_mark()">nvim_buf_del_mark()</a>
        <a href="/neovim-docs-web/en/api#nvim_buf_get_mark()">nvim_buf_get_mark()</a>

</div>
<div class="help-para">
nvim_buf_set_name(<code>{buffer}</code>, <code>{name}</code>)                      <a name="nvim_buf_set_name()"></a><code class="help-tag-right">nvim_buf_set_name()</code>
    Sets the full file name for a buffer

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{name}</code>    Buffer name
</div>
</div>
<div class="help-para">
                                                         <a name="nvim_buf_set_text()"></a><code class="help-tag-right">nvim_buf_set_text()</code>
nvim_buf_set_text(<code>{buffer}</code>, <code>{start_row}</code>, <code>{start_col}</code>, <code>{end_row}</code>, <code>{end_col}</code>,
                  <code>{replacement}</code>)
    Sets (replaces) a range in the buffer

</div>
<div class="help-para">
    This is recommended over <a href="/neovim-docs-web/en/api#nvim_buf_set_lines()">nvim_buf_set_lines()</a> when only modifying parts
    of a line, as extmarks will be preserved on non-modified parts of the
    touched lines.

</div>
<div class="help-para">
    Indexing is zero-based. Row indices are end-inclusive, and column indices
    are end-exclusive.

</div>
<div class="help-para">
    To insert text at a given <code>(row, column)</code> location, usestart_row =
    end_row = row` and <code>start_col = end_col = col</code>. To delete the text in a
    range, use <code>replacement = {}</code>.

</div>
<div class="help-para">
    Prefer <a href="/neovim-docs-web/en/api#nvim_buf_set_lines()">nvim_buf_set_lines()</a> if you are only adding or deleting entire
    lines.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>       Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{start_row}</code>    First line index
</div><div class="help-li" style=""> <code>{start_col}</code>    Starting column (byte offset) on first line
</div><div class="help-li" style=""> <code>{end_row}</code>      Last line index, inclusive
</div><div class="help-li" style=""> <code>{end_col}</code>      Ending column (byte offset) on last line, exclusive
</div><div class="help-li" style=""> <code>{replacement}</code>  Array of lines to use as replacement
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_buf_set_lines()">nvim_buf_set_lines()</a>

</div>
<div class="help-para">
nvim_buf_set_var(<code>{buffer}</code>, <code>{name}</code>, <code>{value}</code>)               <a name="nvim_buf_set_var()"></a><code class="help-tag-right">nvim_buf_set_var()</code>
    Sets a buffer-scoped (b:) variable

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{name}</code>    Variable name
</div><div class="help-li" style=""> <code>{value}</code>   Variable value
</div>
</div>
<div class="help-para">
<h2 class="help-heading">Extmark Functions<span class="help-heading-tags">                                                <a name="api-extmark"></a><span class="help-tag">api-extmark</span></span></h2>


</div>
<div class="help-para">
                                                    <a name="nvim_buf_add_highlight()"></a><code class="help-tag-right">nvim_buf_add_highlight()</code>
nvim_buf_add_highlight(<code>{buffer}</code>, <code>{ns_id}</code>, <code>{hl_group}</code>, <code>{line}</code>, <code>{col_start}</code>,
                       <code>{col_end}</code>)
    Adds a highlight to buffer.

</div>
<div class="help-para">
    Useful for plugins that dynamically generate highlights to a buffer (like
    a semantic highlighter or linter). The function adds a single highlight to
    a buffer. Unlike <a href="/neovim-docs-web/en/builtin#matchaddpos()">matchaddpos()</a> highlights follow changes to line
    numbering (as lines are inserted/removed above the highlighted line), like
    signs and marks do.

</div>
<div class="help-para">
    Namespaces are used for batch deletion/updating of a set of highlights. To
    create a namespace, use <a href="/neovim-docs-web/en/api#nvim_create_namespace()">nvim_create_namespace()</a> which returns a
    namespace id. Pass it in to this function as <code>ns_id</code> to add highlights to
    the namespace. All highlights in the same namespace can then be cleared
    with single call to <a href="/neovim-docs-web/en/api#nvim_buf_clear_namespace()">nvim_buf_clear_namespace()</a>. If the highlight never
    will be deleted by an API call, pass <code>ns_id = -1</code>.

</div>
<div class="help-para">
    As a shorthand, <code>ns_id = 0</code> can be used to create a new namespace for the
    highlight, the allocated id is then returned. If <code>hl_group</code> is the empty
    string no highlight is added, but a new <code>ns_id</code> is still returned. This is
    supported for backwards compatibility, new code should use
    <a href="/neovim-docs-web/en/api#nvim_create_namespace()">nvim_create_namespace()</a> to create a new empty namespace.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>     Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{ns_id}</code>      namespace to use or -1 for ungrouped highlight
</div><div class="help-li" style=""> <code>{hl_group}</code>   Name of the highlight group to use
</div><div class="help-li" style=""> <code>{line}</code>       Line to highlight (zero-indexed)
</div><div class="help-li" style=""> <code>{col_start}</code>  Start of (byte-indexed) column range to highlight
</div><div class="help-li" style=""> <code>{col_end}</code>    End of (byte-indexed) column range to highlight, or -1 to
                     highlight to end of line
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        The ns_id that was used

</div>
<div class="help-para">
                                                  <a name="nvim_buf_clear_namespace()"></a><code class="help-tag-right">nvim_buf_clear_namespace()</code>
nvim_buf_clear_namespace(<code>{buffer}</code>, <code>{ns_id}</code>, <code>{line_start}</code>, <code>{line_end}</code>)
    Clears namespaced objects (highlights, extmarks, virtual text) from a
    region.

</div>
<div class="help-para">
    Lines are 0-indexed. <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a> To clear the namespace in the entire
    buffer, specify line_start=0 and line_end=-1.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>      Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{ns_id}</code>       Namespace to clear, or -1 to clear all namespaces.
</div><div class="help-li" style=""> <code>{line_start}</code>  Start of range of lines to clear
</div><div class="help-li" style=""> <code>{line_end}</code>    End of range of lines to clear (exclusive) or -1 to
                      clear to end of buffer.
</div>
</div>
<div class="help-para">
nvim_buf_del_extmark(<code>{buffer}</code>, <code>{ns_id}</code>, <code>{id}</code>)         <a name="nvim_buf_del_extmark()"></a><code class="help-tag-right">nvim_buf_del_extmark()</code>
    Removes an extmark.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{ns_id}</code>   Namespace id from <a href="/neovim-docs-web/en/api#nvim_create_namespace()">nvim_create_namespace()</a>
</div><div class="help-li" style=""> <code>{id}</code>      Extmark id
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        true if the extmark was found, else false

</div>
<div class="help-para">
                                                <a name="nvim_buf_get_extmark_by_id()"></a><code class="help-tag-right">nvim_buf_get_extmark_by_id()</code>
nvim_buf_get_extmark_by_id(<code>{buffer}</code>, <code>{ns_id}</code>, <code>{id}</code>, <code>{opts}</code>)
    Gets the position (0-indexed) of an extmark.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{ns_id}</code>   Namespace id from <a href="/neovim-docs-web/en/api#nvim_create_namespace()">nvim_create_namespace()</a>
</div><div class="help-li" style=""> <code>{id}</code>      Extmark id
</div><div class="help-li" style=""> <code>{opts}</code>    Optional parameters. Keys:
</div><div class="help-li" style="margin-left: 3rem;"> details: Whether to include the details dict
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        0-indexed (row, col) tuple or empty list () if extmark id was absent

</div>
<div class="help-para">
                                                     <a name="nvim_buf_get_extmarks()"></a><code class="help-tag-right">nvim_buf_get_extmarks()</code>
nvim_buf_get_extmarks(<code>{buffer}</code>, <code>{ns_id}</code>, <code>{start}</code>, <code>{end}</code>, <code>{opts}</code>)
    Gets extmarks in "traversal order" from a <a href="/neovim-docs-web/en/motion#charwise">charwise</a> region defined by
    buffer positions (inclusive, 0-indexed <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a>).

</div>
<div class="help-para">
    Region can be given as (row,col) tuples, or valid extmark ids (whose
    positions define the bounds). 0 and -1 are understood as (0,0) and (-1,-1)
    respectively, thus the following are equivalent:
<pre>nvim_buf_get_extmarks(0, my_ns, 0, -1, {})
nvim_buf_get_extmarks(0, my_ns, [0,0], [-1,-1], {})</pre>

</div>
<div class="help-para">
    If <code>end</code> is less than <code>start</code>, traversal works backwards. (Useful with
    <code>limit</code>, to get the first marks prior to a given position.)

</div>
<div class="help-para">
    Example:
<pre>local a   = vim.api
local pos = a.nvim_win_get_cursor(0)
local ns  = a.nvim_create_namespace('my-plugin')
-- Create new extmark at line 1, column 1.
local m1  = a.nvim_buf_set_extmark(0, ns, 0, 0, {})
-- Create new extmark at line 3, column 1.
local m2  = a.nvim_buf_set_extmark(0, ns, 0, 2, {})
-- Get extmarks only from line 3.
local ms  = a.nvim_buf_get_extmarks(0, ns, {2,0}, {2,0}, {})
-- Get all marks in this buffer + namespace.
local all = a.nvim_buf_get_extmarks(0, ns, 0, -1, {})
print(vim.inspect(ms))</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{ns_id}</code>   Namespace id from <a href="/neovim-docs-web/en/api#nvim_create_namespace()">nvim_create_namespace()</a>
</div><div class="help-li" style=""> <code>{start}</code>   Start of range: a 0-indexed (row, col) or valid extmark id
                  (whose position defines the bound). <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a>
</div><div class="help-li" style=""> <code>{end}</code>     End of range (inclusive): a 0-indexed (row, col) or valid
                  extmark id (whose position defines the bound).
                  <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a>
</div><div class="help-li" style=""> <code>{opts}</code>    Optional parameters. Keys:
</div><div class="help-li" style="margin-left: 3rem;"> limit: Maximum number of marks to return
</div><div class="help-li" style="margin-left: 3rem;"> details Whether to include the details dict
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        List of [extmark_id, row, col] tuples in "traversal order".

</div>
<div class="help-para">
                                                      <a name="nvim_buf_set_extmark()"></a><code class="help-tag-right">nvim_buf_set_extmark()</code>
nvim_buf_set_extmark(<code>{buffer}</code>, <code>{ns_id}</code>, <code>{line}</code>, <code>{col}</code>, <code>{*opts}</code>)
    Creates or updates an extmark.

</div>
<div class="help-para">
    By default a new extmark is created when no id is passed in, but it is
    also possible to create a new mark by passing in a previously unused id or
    move an existing mark by passing in its id. The caller must then keep
    track of existing and unused ids itself. (Useful over RPC, to avoid
    waiting for the return value.)

</div>
<div class="help-para">
    Using the optional arguments, it is possible to use this to highlight a
    range of text, and also to associate virtual text to the mark.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer handle, or 0 for current buffer
</div><div class="help-li" style=""> <code>{ns_id}</code>   Namespace id from <a href="/neovim-docs-web/en/api#nvim_create_namespace()">nvim_create_namespace()</a>
</div><div class="help-li" style=""> <code>{line}</code>    Line where to place the mark, 0-based. <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a>
</div><div class="help-li" style=""> <code>{col}</code>     Column where to place the mark, 0-based. <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a>
</div><div class="help-li" style=""> <code>{opts}</code>    Optional parameters.
</div><div class="help-li" style="margin-left: 3rem;"> id : id of the extmark to edit.
</div><div class="help-li" style="margin-left: 3rem;"> end_row : ending line of the mark, 0-based inclusive.
</div><div class="help-li" style="margin-left: 3rem;"> end_col : ending col of the mark, 0-based exclusive.
</div><div class="help-li" style="margin-left: 3rem;"> hl_group : name of the highlight group used to highlight
                    this mark.
</div><div class="help-li" style="margin-left: 3rem;"> hl_eol : when true, for a multiline highlight covering the
                    EOL of a line, continue the highlight for the rest of the
                    screen line (just like for diff and cursorline highlight).
</div><div class="help-li" style="margin-left: 3rem;"> virt_text : virtual text to link to this mark. A list of
                    [text, highlight] tuples, each representing a text chunk
                    with specified highlight. <code>highlight</code> element can either
                    be a single highlight group, or an array of multiple
                    highlight groups that will be stacked (highest priority
                    last). A highlight group can be supplied either as a
                    string or as an integer, the latter which can be obtained
                    using <a href="/neovim-docs-web/en/api#nvim_get_hl_id_by_name()">nvim_get_hl_id_by_name()</a>.
</div><div class="help-li" style="margin-left: 3rem;"> virt_text_pos : position of virtual text. Possible values:
</div><div class="help-li" style="margin-left: 4rem;"> "eol": right after eol character (default)
</div><div class="help-li" style="margin-left: 4rem;"> "overlay": display over the specified column, without
                      shifting the underlying text.
</div><div class="help-li" style="margin-left: 4rem;"> "right_align": display right aligned in the window.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> virt_text_win_col : position the virtual text at a fixed
                    window column (starting from the first text column)
</div><div class="help-li" style=""> virt_text_hide : hide the virtual text when the background
                    text is selected or hidden due to horizontal scroll
                    <a href="/neovim-docs-web/en/options#'nowrap'">'nowrap'</a>
</div><div class="help-li" style=""> hl_mode : control how highlights are combined with the
                    highlights of the text. Currently only affects virt_text
                    highlights, but might affect <code>hl_group</code> in later versions.
</div><div class="help-li" style="margin-left: 3rem;"> "replace": only show the virt_text color. This is the
                      default
</div><div class="help-li" style="margin-left: 3rem;"> "combine": combine with background text color
</div><div class="help-li" style="margin-left: 3rem;"> "blend": blend with background text color.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> virt_lines : virtual lines to add next to this mark This
                    should be an array over lines, where each line in turn is
                    an array over [text, highlight] tuples. In general, buffer
                    and window options do not affect the display of the text.
                    In particular <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> and <a href="/neovim-docs-web/en/options#'linebreak'">'linebreak'</a> options do not take
                    effect, so the number of extra screen lines will always
                    match the size of the array. However the <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> buffer
                    option is still used for hard tabs. By default lines are
                    placed below the buffer line containing the mark.
</div><div class="help-li" style=""> virt_lines_above: place virtual lines above instead.
</div><div class="help-li" style=""> virt_lines_leftcol: Place extmarks in the leftmost column
                    of the window, bypassing sign and number columns.
</div><div class="help-li" style=""> ephemeral : for use with <a href="/neovim-docs-web/en/api#nvim_set_decoration_provider()">nvim_set_decoration_provider()</a>
                    callbacks. The mark will only be used for the current
                    redraw cycle, and not be permantently stored in the
                    buffer.
</div><div class="help-li" style=""> right_gravity : boolean that indicates the direction the
                    extmark will be shifted in when new text is inserted (true
                    for right, false for left). defaults to true.
</div><div class="help-li" style=""> end_right_gravity : boolean that indicates the direction
                    the extmark end position (if it exists) will be shifted in
                    when new text is inserted (true for right, false for
                    left). Defaults to false.
</div><div class="help-li" style=""> priority: a priority value for the highlight group or sign
                    attribute. For example treesitter highlighting uses a
                    value of 100.
</div><div class="help-li" style=""> strict: boolean that indicates extmark should not be
                    placed if the line or column value is past the end of the
                    buffer or end of the line respectively. Defaults to true.
</div><div class="help-li" style=""> sign_text: string of length 1-2 used to display in the
                    sign column. Note: ranges are unsupported and decorations
                    are only applied to start_row
</div><div class="help-li" style=""> sign_hl_group: name of the highlight group used to
                    highlight the sign column text. Note: ranges are
                    unsupported and decorations are only applied to start_row
</div><div class="help-li" style=""> number_hl_group: name of the highlight group used to
                    highlight the number column. Note: ranges are unsupported
                    and decorations are only applied to start_row
</div><div class="help-li" style=""> line_hl_group: name of the highlight group used to
                    highlight the whole line. Note: ranges are unsupported and
                    decorations are only applied to start_row
</div><div class="help-li" style=""> cursorline_hl_group: name of the highlight group used to
                    highlight the line when the cursor is on the same line as
                    the mark and <a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a> is enabled. Note: ranges are
                    unsupported and decorations are only applied to start_row
</div><div class="help-li" style=""> conceal: string which should be either empty or a single
                    character. Enable concealing similar to <a href="/neovim-docs-web/en/syntax#%3Asyn-conceal">:syn-conceal</a>.
                    When a character is supplied it is used as <a href="/neovim-docs-web/en/syntax#%3Asyn-cchar">:syn-cchar</a>.
                    "hl_group" is used as highlight for the cchar if provided,
                    otherwise it defaults to <a href="/neovim-docs-web/en/syntax#hl-Conceal">hl-Conceal</a>.
</div><div class="help-li" style=""> spell: boolean indicating that spell checking should be
                    performed within this extmark
</div><div class="help-li" style=""> ui_watched: boolean that indicates the mark should be
                    drawn by a UI. When set, the UI will receive win_extmark
                    events. Note: the mark is positioned by virt_text
                    attributes. Can be used together with virt_text.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Id of the created/updated extmark

</div>
<div class="help-para">
nvim_create_namespace(<code>{name}</code>)                        <a name="nvim_create_namespace()"></a><code class="help-tag-right">nvim_create_namespace()</code>
    Creates a new <a name="namespace"></a><code class="help-tag">namespace</code> or gets an existing one.

</div>
<div class="help-para">
    Namespaces are used for buffer highlights and virtual text, see
    <a href="/neovim-docs-web/en/api#nvim_buf_add_highlight()">nvim_buf_add_highlight()</a> and <a href="/neovim-docs-web/en/api#nvim_buf_set_extmark()">nvim_buf_set_extmark()</a>.

</div>
<div class="help-para">
    Namespaces can be named or anonymous. If <code>name</code> matches an existing
    namespace, the associated id is returned. If <code>name</code> is an empty string a
    new, anonymous namespace is created.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  Namespace name or empty string
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Namespace id

</div>
<div class="help-para">
nvim_get_namespaces()                                  <a name="nvim_get_namespaces()"></a><code class="help-tag-right">nvim_get_namespaces()</code>
    Gets existing, non-anonymous namespaces.

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        dict that maps from names to namespace ids.

</div>
<div class="help-para">
                                              <a name="nvim_set_decoration_provider()"></a><code class="help-tag-right">nvim_set_decoration_provider()</code>
nvim_set_decoration_provider(<code>{ns_id}</code>, <code>{*opts}</code>)
    Set or change decoration provider for a namespace

</div>
<div class="help-para">
    This is a very general purpose interface for having lua callbacks being
    triggered during the redraw code.

</div>
<div class="help-para">
    The expected usage is to set extmarks for the currently redrawn buffer.
    <a href="/neovim-docs-web/en/api#nvim_buf_set_extmark()">nvim_buf_set_extmark()</a> can be called to add marks on a per-window or
    per-lines basis. Use the <code>ephemeral</code> key to only use the mark for the
    current screen redraw (the callback will be called again for the next
    redraw ).

</div>
<div class="help-para">
    Note: this function should not be called often. Rather, the callbacks
    themselves can be used to throttle unneeded callbacks. the <code>on_start</code>
    callback can return <code>false</code> to disable the provider until the next redraw.
    Similarly, return <code>false</code> in <code>on_win</code> will skip the <code>on_lines</code> calls for
    that window (but any extmarks set in <code>on_win</code> will still be used). A
    plugin managing multiple sources of decoration should ideally only set one
    provider, and merge the sources internally. You can use multiple <code>ns_id</code>
    for the extmarks set/modified inside the callback anyway.

</div>
<div class="help-para">
    Note: doing anything other than setting extmarks is considered
    experimental. Doing things like changing options are not expliticly
    forbidden, but is likely to have unexpected consequences (such as 100% CPU
    consumption). doing <code>vim.rpcnotify</code> should be OK, but <code>vim.rpcrequest</code> is
    quite dubious for the moment.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        Lua <a href="/neovim-docs-web/en/lua#vim.api">vim.api</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{ns_id}</code>  Namespace id from <a href="/neovim-docs-web/en/api#nvim_create_namespace()">nvim_create_namespace()</a>
</div><div class="help-li" style=""> <code>{opts}</code>   Table of callbacks:
</div><div class="help-li" style="margin-left: 3rem;"> on_start: called first on each screen redraw ["start",
                   tick]
</div><div class="help-li" style="margin-left: 3rem;"> on_buf: called for each buffer being redrawn (before window
                   callbacks) ["buf", bufnr, tick]
</div><div class="help-li" style="margin-left: 3rem;"> on_win: called when starting to redraw a specific window.
                   ["win", winid, bufnr, topline, botline_guess]
</div><div class="help-li" style="margin-left: 3rem;"> on_line: called for each buffer line being redrawn. (The
                   interaction with fold lines is subject to change) ["win",
                   winid, bufnr, row]
</div><div class="help-li" style="margin-left: 3rem;"> on_end: called at the end of a redraw cycle ["end", tick]
</div>
</div>
<div class="help-para">
<h2 class="help-heading">Window Functions<span class="help-heading-tags">                                                  <a name="api-window"></a><span class="help-tag">api-window</span></span></h2>


</div>
<div class="help-para">
nvim_win_call(<code>{window}</code>, <code>{fun}</code>)                               <a name="nvim_win_call()"></a><code class="help-tag-right">nvim_win_call()</code>
    Calls a function with window as temporary current window.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        Lua <a href="/neovim-docs-web/en/lua#vim.api">vim.api</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div><div class="help-li" style=""> <code>{fun}</code>     Function to call inside the window (currently lua callable
                  only)
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Return value of function. NB: will deepcopy lua values currently, use
        upvalues to send lua references in and out.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/builtin#win_execute()">win_execute()</a>
        <a href="/neovim-docs-web/en/api#nvim_buf_call()">nvim_buf_call()</a>

</div>
<div class="help-para">
nvim_win_close(<code>{window}</code>, <code>{force}</code>)                           <a name="nvim_win_close()"></a><code class="help-tag-right">nvim_win_close()</code>
    Closes the window (like <a href="/neovim-docs-web/en/windows#%3Aclose">:close</a> with a <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>).

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        not allowed when <a href="/neovim-docs-web/en/eval#textlock">textlock</a> is active

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div><div class="help-li" style=""> <code>{force}</code>   Behave like <code>:close!</code> The last window of a buffer with
                  unwritten changes can be closed. The buffer will become
                  hidden, even if <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> is not set.
</div>
</div>
<div class="help-para">
nvim_win_del_var(<code>{window}</code>, <code>{name}</code>)                        <a name="nvim_win_del_var()"></a><code class="help-tag-right">nvim_win_del_var()</code>
    Removes a window-scoped (w:) variable

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div><div class="help-li" style=""> <code>{name}</code>    Variable name
</div>
</div>
<div class="help-para">
nvim_win_get_buf(<code>{window}</code>)                                <a name="nvim_win_get_buf()"></a><code class="help-tag-right">nvim_win_get_buf()</code>
    Gets the current buffer in a window

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Buffer handle

</div>
<div class="help-para">
nvim_win_get_cursor(<code>{window}</code>)                          <a name="nvim_win_get_cursor()"></a><code class="help-tag-right">nvim_win_get_cursor()</code>
    Gets the (1,0)-indexed, buffer-relative cursor position for a given window
    (different windows showing the same buffer have independent cursor
    positions). <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (row, col) tuple

</div>
<div class="help-para">
nvim_win_get_height(<code>{window}</code>)                          <a name="nvim_win_get_height()"></a><code class="help-tag-right">nvim_win_get_height()</code>
    Gets the window height

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Height as a count of rows

</div>
<div class="help-para">
nvim_win_get_number(<code>{window}</code>)                          <a name="nvim_win_get_number()"></a><code class="help-tag-right">nvim_win_get_number()</code>
    Gets the window number

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Window number

</div>
<div class="help-para">
nvim_win_get_position(<code>{window}</code>)                      <a name="nvim_win_get_position()"></a><code class="help-tag-right">nvim_win_get_position()</code>
    Gets the window position in display cells. First position is zero.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (row, col) tuple with the window position

</div>
<div class="help-para">
nvim_win_get_tabpage(<code>{window}</code>)                        <a name="nvim_win_get_tabpage()"></a><code class="help-tag-right">nvim_win_get_tabpage()</code>
    Gets the window tabpage

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Tabpage that contains the window

</div>
<div class="help-para">
nvim_win_get_var(<code>{window}</code>, <code>{name}</code>)                        <a name="nvim_win_get_var()"></a><code class="help-tag-right">nvim_win_get_var()</code>
    Gets a window-scoped (w:) variable

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div><div class="help-li" style=""> <code>{name}</code>    Variable name
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Variable value

</div>
<div class="help-para">
nvim_win_get_width(<code>{window}</code>)                            <a name="nvim_win_get_width()"></a><code class="help-tag-right">nvim_win_get_width()</code>
    Gets the window width

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Width as a count of columns

</div>
<div class="help-para">
nvim_win_hide(<code>{window}</code>)                                      <a name="nvim_win_hide()"></a><code class="help-tag-right">nvim_win_hide()</code>
    Closes the window and hide the buffer it contains (like <a href="/neovim-docs-web/en/windows#%3Ahide">:hide</a> with a
    <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>).

</div>
<div class="help-para">
    Like <a href="/neovim-docs-web/en/windows#%3Ahide">:hide</a> the buffer becomes hidden unless another window is editing
    it, or <a href="/neovim-docs-web/en/options#'bufhidden'">'bufhidden'</a> is <code>unload</code>, <code>delete</code> or <code>wipe</code> as opposed to <a href="/neovim-docs-web/en/windows#%3Aclose">:close</a>
    or <a href="/neovim-docs-web/en/api#nvim_win_close()">nvim_win_close()</a>, which will close the buffer.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        not allowed when <a href="/neovim-docs-web/en/eval#textlock">textlock</a> is active

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div>
</div>
<div class="help-para">
nvim_win_is_valid(<code>{window}</code>)                              <a name="nvim_win_is_valid()"></a><code class="help-tag-right">nvim_win_is_valid()</code>
    Checks if a window is valid

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        true if the window is valid, false otherwise

</div>
<div class="help-para">
nvim_win_set_buf(<code>{window}</code>, <code>{buffer}</code>)                      <a name="nvim_win_set_buf()"></a><code class="help-tag-right">nvim_win_set_buf()</code>
    Sets the current buffer in a window, without side effects

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        not allowed when <a href="/neovim-docs-web/en/eval#textlock">textlock</a> is active

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div><div class="help-li" style=""> <code>{buffer}</code>  Buffer handle
</div>
</div>
<div class="help-para">
nvim_win_set_cursor(<code>{window}</code>, <code>{pos}</code>)                   <a name="nvim_win_set_cursor()"></a><code class="help-tag-right">nvim_win_set_cursor()</code>
    Sets the (1,0)-indexed cursor position in the window. <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a> This
    scrolls the window even if it is not the current one.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div><div class="help-li" style=""> <code>{pos}</code>     (row, col) tuple representing the new position
</div>
</div>
<div class="help-para">
nvim_win_set_height(<code>{window}</code>, <code>{height}</code>)                <a name="nvim_win_set_height()"></a><code class="help-tag-right">nvim_win_set_height()</code>
    Sets the window height.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div><div class="help-li" style=""> <code>{height}</code>  Height as a count of rows
</div>
</div>
<div class="help-para">
nvim_win_set_hl_ns(<code>{window}</code>, <code>{ns_id}</code>)                   <a name="nvim_win_set_hl_ns()"></a><code class="help-tag-right">nvim_win_set_hl_ns()</code>
    Set highlight namespace for a window. This will use highlights defined in
    this namespace, but fall back to global highlights (ns=0) when missing.

</div>
<div class="help-para">
    This takes precedence over the <a href="/neovim-docs-web/en/options#'winhighlight'">'winhighlight'</a> option.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{ns_id}</code>  the namespace to use
</div>
</div>
<div class="help-para">
nvim_win_set_var(<code>{window}</code>, <code>{name}</code>, <code>{value}</code>)               <a name="nvim_win_set_var()"></a><code class="help-tag-right">nvim_win_set_var()</code>
    Sets a window-scoped (w:) variable

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div><div class="help-li" style=""> <code>{name}</code>    Variable name
</div><div class="help-li" style=""> <code>{value}</code>   Variable value
</div>
</div>
<div class="help-para">
nvim_win_set_width(<code>{window}</code>, <code>{width}</code>)                   <a name="nvim_win_set_width()"></a><code class="help-tag-right">nvim_win_set_width()</code>
    Sets the window width. This will only succeed if the screen is split
    vertically.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div><div class="help-li" style=""> <code>{width}</code>   Width as a count of columns
</div>
</div>
<div class="help-para">
<h2 class="help-heading">Win_Config Functions<span class="help-heading-tags">                                          <a name="api-win_config"></a><span class="help-tag">api-win_config</span></span></h2>


</div>
<div class="help-para">
nvim_open_win(<code>{buffer}</code>, <code>{enter}</code>, <code>{*config}</code>)                  <a name="nvim_open_win()"></a><code class="help-tag-right">nvim_open_win()</code>
    Open a new window.

</div>
<div class="help-para">
    Currently this is used to open floating and external windows. Floats are
    windows that are drawn above the split layout, at some anchor position in
    some other window. Floats can be drawn internally or by external GUI with
    the <a href="/neovim-docs-web/en/ui#ui-multigrid">ui-multigrid</a> extension. External windows are only supported with
    multigrid GUIs, and are displayed as separate top-level windows.

</div>
<div class="help-para">
    For a general overview of floats, see <a href="/neovim-docs-web/en/api#api-floatwin">api-floatwin</a>.

</div>
<div class="help-para">
    Exactly one of <code>external</code> and <code>relative</code> must be specified. The <code>width</code>
    and <code>height</code> of the new window must be specified.

</div>
<div class="help-para">
    With relative=editor (row=0,col=0) refers to the top-left corner of the
    screen-grid and (row=Lines-1,col=Columns-1) refers to the bottom-right
    corner. Fractional values are allowed, but the builtin implementation
    (used by non-multigrid UIs) will always round down to nearest integer.

</div>
<div class="help-para">
    Out-of-bounds values, and configurations that make the float not fit
    inside the main editor, are allowed. The builtin implementation truncates
    values so floats are fully within the main screen grid. External GUIs
    could let floats hover outside of the main window like a tooltip, but this
    should not be used to specify arbitrary WM screen positions.

</div>
<div class="help-para">
    Example (Lua): window-relative float<pre>vim.api.nvim_open_win(0, false,
  {relative='win', row=3, col=3, width=12, height=3})</pre>

</div>
<div class="help-para">
    Example (Lua): buffer-relative float (travels as buffer is scrolled)<pre>vim.api.nvim_open_win(0, false,
  {relative='win', width=12, height=3, bufpos={100,10}})</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        not allowed when <a href="/neovim-docs-web/en/eval#textlock">textlock</a> is active

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{buffer}</code>  Buffer to display, or 0 for current buffer
</div><div class="help-li" style=""> <code>{enter}</code>   Enter the window (make it the current window)
</div><div class="help-li" style=""> <code>{config}</code>  Map defining the window configuration. Keys:
</div><div class="help-li" style="margin-left: 3rem;"> relative: Sets the window layout to "floating", placed at
                    (row,col) coordinates relative to:
</div><div class="help-li" style="margin-left: 4rem;"> "editor" The global editor grid
</div><div class="help-li" style="margin-left: 4rem;"> "win" Window given by the <code>win</code> field, or current
                      window.
</div><div class="help-li" style="margin-left: 4rem;"> "cursor" Cursor position in current window.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> win: <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a> for relative="win".
</div><div class="help-li" style=""> anchor: Decides which corner of the float to place at
                    (row,col):
</div><div class="help-li" style="margin-left: 3rem;"> "NW" northwest (default)
</div><div class="help-li" style="margin-left: 3rem;"> "NE" northeast
</div><div class="help-li" style="margin-left: 3rem;"> "SW" southwest
</div><div class="help-li" style="margin-left: 3rem;"> "SE" southeast
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> width: Window width (in character cells). Minimum of 1.
</div><div class="help-li" style=""> height: Window height (in character cells). Minimum of 1.
</div><div class="help-li" style=""> bufpos: Places float relative to buffer text (only when
                    relative="win"). Takes a tuple of zero-indexed [line,
                    column]. <code>row</code> and <code>col</code> if given are applied relative to this position, else they
                    default to:
</div><div class="help-li" style="margin-left: 3rem;"> <code>row=1</code> and <code>col=0</code> if <code>anchor</code> is "NW" or "NE"
</div><div class="help-li" style="margin-left: 3rem;"> <code>row=0</code> and <code>col=0</code> if <code>anchor</code> is "SW" or "SE" (thus
                      like a tooltip near the buffer text).
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> row: Row position in units of "screen cell height", may be
                    fractional.
</div><div class="help-li" style=""> col: Column position in units of "screen cell width", may
                    be fractional.
</div><div class="help-li" style=""> focusable: Enable focus by user actions (wincmds, mouse
                    events). Defaults to true. Non-focusable windows can be
                    entered by <a href="/neovim-docs-web/en/api#nvim_set_current_win()">nvim_set_current_win()</a>.
</div><div class="help-li" style=""> external: GUI should display the window as an external
                    top-level window. Currently accepts no other positioning
                    configuration together with this.
</div><div class="help-li" style=""> zindex: Stacking order. floats with higher <code>zindex</code> go on top on floats with lower indices. Must be larger
                    than zero. The following screen elements have hard-coded
                    z-indices:
</div><div class="help-li" style="margin-left: 3rem;"> 100: insert completion popupmenu
</div><div class="help-li" style="margin-left: 3rem;"> 200: message scrollback
</div><div class="help-li" style="margin-left: 3rem;"> 250: cmdline completion popupmenu (when
                      wildoptions+=pum) The default value for floats are 50.
                      In general, values below 100 are recommended, unless
                      there is a good reason to overshadow builtin elements.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> style: Configure the appearance of the window. Currently
                    only takes one non-empty value:
</div><div class="help-li" style="margin-left: 3rem;"> "minimal" Nvim will display the window with many UI
                      options disabled. This is useful when displaying a
                      temporary float where the text should not be edited.
                      Disables <a href="/neovim-docs-web/en/options#'number'">'number'</a>, <a href="/neovim-docs-web/en/options#'relativenumber'">'relativenumber'</a>, <a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a>,
                      <a href="/neovim-docs-web/en/options#'cursorcolumn'">'cursorcolumn'</a>, <a href="/neovim-docs-web/en/options#'foldcolumn'">'foldcolumn'</a>, <a href="/neovim-docs-web/en/options#'spell'">'spell'</a> and <a href="/neovim-docs-web/en/options#'list'">'list'</a>
                      options. <a href="/neovim-docs-web/en/options#'signcolumn'">'signcolumn'</a> is changed to <code>auto</code> and
                      <a href="/neovim-docs-web/en/options#'colorcolumn'">'colorcolumn'</a> is cleared. The end-of-buffer region is
                      hidden by setting <code>eob</code> flag of <a href="/neovim-docs-web/en/options#'fillchars'">'fillchars'</a> to a space
                      char, and clearing the <a href="/neovim-docs-web/en/syntax#hl-EndOfBuffer">hl-EndOfBuffer</a> region in
                      <a href="/neovim-docs-web/en/options#'winhighlight'">'winhighlight'</a>.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> border: Style of (optional) window border. This can either
                    be a string or an array. The string values are
</div><div class="help-li" style="margin-left: 3rem;"> "none": No border (default).
</div><div class="help-li" style="margin-left: 3rem;"> "single": A single line box.
</div><div class="help-li" style="margin-left: 3rem;"> "double": A double line box.
</div><div class="help-li" style="margin-left: 3rem;"> "rounded": Like "single", but with rounded corners ("╭"
                      etc.).
</div><div class="help-li" style="margin-left: 3rem;"> "solid": Adds padding by a single whitespace cell.
</div><div class="help-li" style="margin-left: 3rem;"> "shadow": A drop shadow effect by blending with the
                      background.
</div><div class="help-li" style="margin-left: 3rem;"> If it is an array, it should have a length of eight or
                      any divisor of eight. The array will specifify the eight
                      chars building up the border in a clockwise fashion
                      starting with the top-left corner. As an example, the
                      double box style could be specified as [ "╔", "═" ,"╗",
                      "║", "╝", "═", "╚", "║" ]. If the number of chars are
                      less than eight, they will be repeated. Thus an ASCII
                      border could be specified as [ "/", "-", "\\", "|" ], or
                      all chars the same as [ "x" ]. An empty string can be
                      used to turn off a specific border, for instance, [ "",
                      "", "", "&gt;", "", "", "", "&lt;" ] will only make vertical
                      borders but not horizontal ones. By default,
                      <code>FloatBorder</code> highlight is used, which links to
                      <code>WinSeparator</code> when not defined. It could also be
                      specified by character: [ <code>{"+", "MyCorner"}</code>, {<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+api.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/api.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borders%20but%20not%20horizontal%20ones.%20By%20default%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60FloatBorder%60%20highlight%20is%20used%2C%20which%20links%20to%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60WinSeparator%60%20when%20not%20defined.%20It%20could%20also%20be%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20specified%20by%20character%3A%20%5B%20%7B%22%2B%22%2C%20%22MyCorner%22%7D%2C%20%7B%22x%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22MyBorder%22%7D%20%5D.%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E2%80%A2%20title%3A%20Title%20(optional)%20in%20window%20border%2C%20String%20or%20list.%0D%60%60%60">"x",</a>
                      "MyBorder"} ].
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> title: Title (optional) in window border, String or list.
                    List is [text, highlight] tuples. if is string the default
                    highlight group is <code>FloatTitle</code>.
</div><div class="help-li" style=""> title_pos: Title position must set with title option.
                    value can be of <code>left</code> <code>center</code> <code>right</code> default is left.
</div><div class="help-li" style=""> noautocmd: If true then no buffer-related autocommand
                    events such as <a href="/neovim-docs-web/en/autocmd#BufEnter">BufEnter</a>, <a href="/neovim-docs-web/en/autocmd#BufLeave">BufLeave</a> or <a href="/neovim-docs-web/en/autocmd#BufWinEnter">BufWinEnter</a> may
                    fire from calling this function.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Window handle, or 0 on error

</div>
<div class="help-para">
nvim_win_get_config(<code>{window}</code>)                          <a name="nvim_win_get_config()"></a><code class="help-tag-right">nvim_win_get_config()</code>
    Gets window configuration.

</div>
<div class="help-para">
    The returned value may be given to <a href="/neovim-docs-web/en/api#nvim_open_win()">nvim_open_win()</a>.

</div>
<div class="help-para">
    <code>relative</code> is empty for normal windows.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Map defining the window configuration, see <a href="/neovim-docs-web/en/api#nvim_open_win()">nvim_open_win()</a>

</div>
<div class="help-para">
nvim_win_set_config(<code>{window}</code>, <code>{*config}</code>)               <a name="nvim_win_set_config()"></a><code class="help-tag-right">nvim_win_set_config()</code>
    Configures window layout. Currently only for floating and external windows
    (including changing a split window to those layouts).

</div>
<div class="help-para">
    When reconfiguring a floating window, absent option keys will not be
    changed. <code>row</code>/`col` and <code>relative</code> must be reconfigured together.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{window}</code>  Window handle, or 0 for current window
</div><div class="help-li" style=""> <code>{config}</code>  Map defining the window configuration, see <a href="/neovim-docs-web/en/api#nvim_open_win()">nvim_open_win()</a>
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_open_win()">nvim_open_win()</a>

</div>
<div class="help-para">
<h2 class="help-heading">Tabpage Functions<span class="help-heading-tags">                                                <a name="api-tabpage"></a><span class="help-tag">api-tabpage</span></span></h2>


</div>
<div class="help-para">
nvim_tabpage_del_var(<code>{tabpage}</code>, <code>{name}</code>)               <a name="nvim_tabpage_del_var()"></a><code class="help-tag-right">nvim_tabpage_del_var()</code>
    Removes a tab-scoped (t:) variable

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{tabpage}</code>  Tabpage handle, or 0 for current tabpage
</div><div class="help-li" style=""> <code>{name}</code>     Variable name
</div>
</div>
<div class="help-para">
nvim_tabpage_get_number(<code>{tabpage}</code>)                 <a name="nvim_tabpage_get_number()"></a><code class="help-tag-right">nvim_tabpage_get_number()</code>
    Gets the tabpage number

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{tabpage}</code>  Tabpage handle, or 0 for current tabpage
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Tabpage number

</div>
<div class="help-para">
nvim_tabpage_get_var(<code>{tabpage}</code>, <code>{name}</code>)               <a name="nvim_tabpage_get_var()"></a><code class="help-tag-right">nvim_tabpage_get_var()</code>
    Gets a tab-scoped (t:) variable

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{tabpage}</code>  Tabpage handle, or 0 for current tabpage
</div><div class="help-li" style=""> <code>{name}</code>     Variable name
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Variable value

</div>
<div class="help-para">
nvim_tabpage_get_win(<code>{tabpage}</code>)                       <a name="nvim_tabpage_get_win()"></a><code class="help-tag-right">nvim_tabpage_get_win()</code>
    Gets the current window in a tabpage

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{tabpage}</code>  Tabpage handle, or 0 for current tabpage
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Window handle

</div>
<div class="help-para">
nvim_tabpage_is_valid(<code>{tabpage}</code>)                     <a name="nvim_tabpage_is_valid()"></a><code class="help-tag-right">nvim_tabpage_is_valid()</code>
    Checks if a tabpage is valid

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{tabpage}</code>  Tabpage handle, or 0 for current tabpage
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        true if the tabpage is valid, false otherwise

</div>
<div class="help-para">
nvim_tabpage_list_wins(<code>{tabpage}</code>)                   <a name="nvim_tabpage_list_wins()"></a><code class="help-tag-right">nvim_tabpage_list_wins()</code>
    Gets the windows in a tabpage

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{tabpage}</code>  Tabpage handle, or 0 for current tabpage
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        List of windows in <code>tabpage</code>

</div>
<div class="help-para">
                                                      <a name="nvim_tabpage_set_var()"></a><code class="help-tag-right">nvim_tabpage_set_var()</code>
nvim_tabpage_set_var(<code>{tabpage}</code>, <code>{name}</code>, <code>{value}</code>)
    Sets a tab-scoped (t:) variable

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{tabpage}</code>  Tabpage handle, or 0 for current tabpage
</div><div class="help-li" style=""> <code>{name}</code>     Variable name
</div><div class="help-li" style=""> <code>{value}</code>    Variable value
</div>
</div>
<div class="help-para">
<h2 class="help-heading">Autocmd Functions<span class="help-heading-tags">                                                <a name="api-autocmd"></a><span class="help-tag">api-autocmd</span></span></h2>


</div>
<div class="help-para">
nvim_clear_autocmds(<code>{*opts}</code>)                           <a name="nvim_clear_autocmds()"></a><code class="help-tag-right">nvim_clear_autocmds()</code>
    Clear all autocommands that match the corresponding <code>{opts}</code>. To delete a
    particular autocmd, see <a href="/neovim-docs-web/en/api#nvim_del_autocmd()">nvim_del_autocmd()</a>.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{opts}</code>  Parameters
</div><div class="help-li" style="margin-left: 3rem;"> event: (string|table) Examples:
</div><div class="help-li" style="margin-left: 4rem;"> event: "pat1"
</div><div class="help-li" style="margin-left: 4rem;"> event: { "pat1" }
</div><div class="help-li" style="margin-left: 4rem;"> event: { "pat1", "pat2", "pat3" }
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> pattern: (string|table)
</div><div class="help-li" style="margin-left: 3rem;"> pattern or patterns to match exactly.
</div><div class="help-li" style="margin-left: 4rem;"> For example, if you have <code>*.py</code> as that pattern for the
                      autocmd, you must pass <code>*.py</code> exactly to clear it.
                      <code>test.py</code> will not match the pattern.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> defaults to clearing all patterns.
</div><div class="help-li" style=""> NOTE: Cannot be used with <code>{buffer}</code>
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> buffer: (bufnr)
</div><div class="help-li" style="margin-left: 3rem;"> clear only <a href="/neovim-docs-web/en/autocmd#autocmd-buflocal">autocmd-buflocal</a> autocommands.
</div><div class="help-li" style="margin-left: 3rem;"> NOTE: Cannot be used with <code>{pattern}</code>
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> group: (string|int) The augroup name or id.
</div><div class="help-li" style="margin-left: 3rem;"> NOTE: If not passed, will only delete autocmds not in any group.
</div>
</div>
<div class="help-para">
nvim_create_augroup(<code>{name}</code>, <code>{*opts}</code>)                   <a name="nvim_create_augroup()"></a><code class="help-tag-right">nvim_create_augroup()</code>
    Create or get an autocommand group <a href="/neovim-docs-web/en/autocmd#autocmd-groups">autocmd-groups</a>.

</div>
<div class="help-para">
    To get an existing group id, do:<pre>local id = vim.api.nvim_create_augroup("MyGroup", {
    clear = false
})</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  String: The name of the group
</div><div class="help-li" style=""> <code>{opts}</code>  Dictionary Parameters
</div><div class="help-li" style="margin-left: 3rem;"> clear (bool) optional: defaults to true. Clear existing
                  commands if the group already exists <a href="/neovim-docs-web/en/autocmd#autocmd-groups">autocmd-groups</a>.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Integer id of the created group.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/autocmd#autocmd-groups">autocmd-groups</a>

</div>
<div class="help-para">
nvim_create_autocmd(<code>{event}</code>, <code>{*opts}</code>)                  <a name="nvim_create_autocmd()"></a><code class="help-tag-right">nvim_create_autocmd()</code>
    Create an <a href="/neovim-docs-web/en/autocmd#autocommand">autocommand</a>

</div>
<div class="help-para">
    The API allows for two (mutually exclusive) types of actions to be
    executed when the autocommand triggers: a callback function (Lua or
    Vimscript), or a command (like regular autocommands).

</div>
<div class="help-para">
    Example using callback:<pre>-- Lua function
local myluafun = function() print("This buffer enters") end

-- Vimscript function name (as a string)
local myvimfun = "g:MyVimFunction"

vim.api.nvim_create_autocmd({"BufEnter", "BufWinEnter"}, {
  pattern = {"*.c", "*.h"},
  callback = myluafun,  -- Or myvimfun
})</pre>

</div>
<div class="help-para">
    Lua functions receive a table with information about the autocmd event as
    an argument. To use a function which itself accepts another (optional)
    parameter, wrap the function in a lambda:
<pre>-- Lua function with an optional parameter.
-- The autocmd callback would pass a table as argument but this
-- function expects number|nil
local myluafun = function(bufnr) bufnr = bufnr or vim.api.nvim_get_current_buf() end

vim.api.nvim_create_autocmd({"BufEnter", "BufWinEnter"}, {
  pattern = {"*.c", "*.h"},
  callback = function() myluafun() end,
})</pre>

</div>
<div class="help-para">
    Example using command:<pre>vim.api.nvim_create_autocmd({"BufEnter", "BufWinEnter"}, {
  pattern = {"*.c", "*.h"},
  command = "echo 'Entering a C or C++ file'",
})</pre>

</div>
<div class="help-para">
    Example values for pattern:<pre>pattern = "*.py"
pattern = { "*.py", "*.pyi" }</pre>

</div>
<div class="help-para">
    Note: The <code>pattern</code> is passed to callbacks and commands as a literal string; environment
    variables like <code>$HOME</code> and <code>~</code> are not automatically expanded as they are by <a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>. Instead,
    <a href="/neovim-docs-web/en/builtin#expand()">expand()</a> such variables explicitly:<pre>pattern = vim.fn.expand("~") .. "/some/path/*.py"</pre>

</div>
<div class="help-para">
    Example values for event:<pre>"BufWritePre"
{"CursorHold", "BufWritePre", "BufWritePost"}</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{event}</code>  (string|array) The event or events to register this
                 autocommand
</div><div class="help-li" style=""> <code>{opts}</code>   Dictionary of autocommand options:
</div><div class="help-li" style="margin-left: 3rem;"> group (string|integer) optional: the autocommand group name
                   or id to match against.
</div><div class="help-li" style="margin-left: 3rem;"> pattern (string|array) optional: pattern or patterns to
                   match literally against <a href="/neovim-docs-web/en/autocmd#autocmd-pattern">autocmd-pattern</a>.
</div><div class="help-li" style="margin-left: 3rem;"> buffer (integer) optional: buffer number for buffer local
                   autocommands <a href="/neovim-docs-web/en/autocmd#autocmd-buflocal">autocmd-buflocal</a>. Cannot be used with
                   <code>{pattern}</code>.
</div><div class="help-li" style="margin-left: 3rem;"> desc (string) optional: description of the autocommand.
</div><div class="help-li" style="margin-left: 3rem;"> callback (function|string) optional: if a string, the name
                   of a Vimscript function to call when this autocommand is
                   triggered. Otherwise, a Lua function which is called when
                   this autocommand is triggered. Cannot be used with
                   <code>{command}</code>. Lua callbacks can return true to delete the
                   autocommand; in addition, they accept a single table
                   argument with the following keys:
</div><div class="help-li" style="margin-left: 4rem;"> id: (number) the autocommand id
</div><div class="help-li" style="margin-left: 4rem;"> event: (string) the name of the event that triggered the
                     autocommand <a href="/neovim-docs-web/en/autocmd#autocmd-events">autocmd-events</a>
</div><div class="help-li" style="margin-left: 4rem;"> group: (number|nil) the autocommand group id, if it
                     exists
</div><div class="help-li" style="margin-left: 4rem;"> match: (string) the expanded value of <a href="/neovim-docs-web/en/cmdline#%3Camatch%3E">&lt;amatch&gt;</a>
</div><div class="help-li" style="margin-left: 4rem;"> buf: (number) the expanded value of <a href="/neovim-docs-web/en/cmdline#%3Cabuf%3E">&lt;abuf&gt;</a>
</div><div class="help-li" style="margin-left: 4rem;"> file: (string) the expanded value of <a href="/neovim-docs-web/en/cmdline#%3Cafile%3E">&lt;afile&gt;</a>
</div><div class="help-li" style="margin-left: 4rem;"> data: (any) arbitrary data passed to
                     <a href="/neovim-docs-web/en/api#nvim_exec_autocmds()">nvim_exec_autocmds()</a>
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> command (string) optional: Vim command to execute on event.
                   Cannot be used with <code>{callback}</code>
</div><div class="help-li" style=""> once (boolean) optional: defaults to false. Run the
                   autocommand only once <a href="/neovim-docs-web/en/autocmd#autocmd-once">autocmd-once</a>.
</div><div class="help-li" style=""> nested (boolean) optional: defaults to false. Run nested
                   autocommands <a href="/neovim-docs-web/en/autocmd#autocmd-nested">autocmd-nested</a>.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Integer id of the created autocommand.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/autocmd#autocommand">autocommand</a>
        <a href="/neovim-docs-web/en/api#nvim_del_autocmd()">nvim_del_autocmd()</a>

</div>
<div class="help-para">
nvim_del_augroup_by_id(<code>{id}</code>)                        <a name="nvim_del_augroup_by_id()"></a><code class="help-tag-right">nvim_del_augroup_by_id()</code>
    Delete an autocommand group by id.

</div>
<div class="help-para">
    To get a group id one can use <a href="/neovim-docs-web/en/api#nvim_get_autocmds()">nvim_get_autocmds()</a>.

</div>
<div class="help-para">
    NOTE: behavior differs from <a href="/neovim-docs-web/en/autocmd#%3Aaugroup-delete">:augroup-delete</a>. When deleting a group,
    autocommands contained in this group will also be deleted and cleared.
    This group will no longer exist.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{id}</code>  Integer The id of the group.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_del_augroup_by_name()">nvim_del_augroup_by_name()</a>
        <a href="/neovim-docs-web/en/api#nvim_create_augroup()">nvim_create_augroup()</a>

</div>
<div class="help-para">
nvim_del_augroup_by_name(<code>{name}</code>)                  <a name="nvim_del_augroup_by_name()"></a><code class="help-tag-right">nvim_del_augroup_by_name()</code>
    Delete an autocommand group by name.

</div>
<div class="help-para">
    NOTE: behavior differs from <a href="/neovim-docs-web/en/autocmd#%3Aaugroup-delete">:augroup-delete</a>. When deleting a group,
    autocommands contained in this group will also be deleted and cleared.
    This group will no longer exist.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>  String The name of the group.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/autocmd#autocmd-groups">autocmd-groups</a>

</div>
<div class="help-para">
nvim_del_autocmd(<code>{id}</code>)                                    <a name="nvim_del_autocmd()"></a><code class="help-tag-right">nvim_del_autocmd()</code>
    Delete an autocommand by id.

</div>
<div class="help-para">
    NOTE: Only autocommands created via the API have an id.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{id}</code>  Integer The id returned by nvim_create_autocmd
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/api#nvim_create_autocmd()">nvim_create_autocmd()</a>

</div>
<div class="help-para">
nvim_exec_autocmds(<code>{event}</code>, <code>{*opts}</code>)                    <a name="nvim_exec_autocmds()"></a><code class="help-tag-right">nvim_exec_autocmds()</code>
    Execute all autocommands for <code>{event}</code> that match the corresponding <code>{opts}</code>
    <a href="/neovim-docs-web/en/autocmd#autocmd-execute">autocmd-execute</a>.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{event}</code>  (String|Array) The event or events to execute
</div><div class="help-li" style=""> <code>{opts}</code>   Dictionary of autocommand options:
</div><div class="help-li" style="margin-left: 3rem;"> group (string|integer) optional: the autocommand group name
                   or id to match against. <a href="/neovim-docs-web/en/autocmd#autocmd-groups">autocmd-groups</a>.
</div><div class="help-li" style="margin-left: 3rem;"> pattern (string|array) optional: defaults to "*"
                   <a href="/neovim-docs-web/en/autocmd#autocmd-pattern">autocmd-pattern</a>. Cannot be used with <code>{buffer}</code>.
</div><div class="help-li" style="margin-left: 3rem;"> buffer (integer) optional: buffer number
                   <a href="/neovim-docs-web/en/autocmd#autocmd-buflocal">autocmd-buflocal</a>. Cannot be used with <code>{pattern}</code>.
</div><div class="help-li" style="margin-left: 3rem;"> modeline (bool) optional: defaults to true. Process the
                   modeline after the autocommands <a href="/neovim-docs-web/en/autocmd#%3Cnomodeline%3E">&lt;nomodeline&gt;</a>.
</div><div class="help-li" style="margin-left: 3rem;"> data (any): arbitrary data to send to the autocommand
                   callback. See <a href="/neovim-docs-web/en/api#nvim_create_autocmd()">nvim_create_autocmd()</a> for details.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="/neovim-docs-web/en/autocmd#%3Adoautocmd">:doautocmd</a>

</div>
<div class="help-para">
nvim_get_autocmds(<code>{*opts}</code>)                               <a name="nvim_get_autocmds()"></a><code class="help-tag-right">nvim_get_autocmds()</code>
    Get all autocommands that match the corresponding <code>{opts}</code>.

</div>
<div class="help-para">
    These examples will get autocommands matching ALL the given criteria:<pre>-- Matches all criteria
autocommands = vim.api.nvim_get_autocmds({
  group = "MyGroup",
  event = {"BufEnter", "BufWinEnter"},
  pattern = {"*.c", "*.h"}
})

-- All commands from one group
autocommands = vim.api.nvim_get_autocmds({
  group = "MyGroup",
})</pre>

</div>
<div class="help-para">
    NOTE: When multiple patterns or events are provided, it will find all the
    autocommands that match any combination of them.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{opts}</code>  Dictionary with at least one of the following:
</div><div class="help-li" style="margin-left: 3rem;"> group (string|integer): the autocommand group name or id to
                  match against.
</div><div class="help-li" style="margin-left: 3rem;"> event (string|array): event or events to match against
                  <a href="/neovim-docs-web/en/autocmd#autocmd-events">autocmd-events</a>.
</div><div class="help-li" style="margin-left: 3rem;"> pattern (string|array): pattern or patterns to match against
                  <a href="/neovim-docs-web/en/autocmd#autocmd-pattern">autocmd-pattern</a>. Cannot be used with <code>{buffer}</code>
</div><div class="help-li" style="margin-left: 3rem;"> buffer: Buffer number or list of buffer numbers for buffer
                  local autocommands <a href="/neovim-docs-web/en/autocmd#autocmd-buflocal">autocmd-buflocal</a>. Cannot be used with
                  <code>{pattern}</code>
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Array of autocommands matching the criteria, with each item containing
        the following fields:
<div class="help-li" style=""> id (number): the autocommand id (only when defined with the API).
</div><div class="help-li" style=""> group (integer): the autocommand group id.
</div><div class="help-li" style=""> group_name (string): the autocommand group name.
</div><div class="help-li" style=""> desc (string): the autocommand description.
</div><div class="help-li" style=""> event (string): the autocommand event.
</div><div class="help-li" style=""> command (string): the autocommand command. Note: this will be empty
          if a callback is set.
</div><div class="help-li" style=""> callback (function|string|nil): Lua function or name of a Vim script
          function which is executed when this autocommand is triggered.
</div><div class="help-li" style=""> once (boolean): whether the autocommand is only run once.
</div><div class="help-li" style=""> pattern (string): the autocommand pattern. If the autocommand is
          buffer local <a href="/neovim-docs-web/en/autocmd#autocmd-buffer-local">autocmd-buffer-local</a>:
</div><div class="help-li" style=""> buflocal (boolean): true if the autocommand is buffer local.
</div><div class="help-li" style=""> buffer (number): the buffer number.
</div>
</div>
<div class="help-para">
<h2 class="help-heading">UI Functions<span class="help-heading-tags">                                                          <a name="api-ui"></a><span class="help-tag">api-ui</span></span></h2>


</div>
<div class="help-para">
nvim_ui_attach(<code>{width}</code>, <code>{height}</code>, <code>{options}</code>)                <a name="nvim_ui_attach()"></a><code class="help-tag-right">nvim_ui_attach()</code>
    Activates UI events on the channel.

</div>
<div class="help-para">
    Entry point of all UI clients. Allows <a href="/neovim-docs-web/en/starting#--embed">--embed</a> to continue startup.
    Implies that the client is ready to show the UI. Adds the client to the
    list of UIs. <a href="/neovim-docs-web/en/api#nvim_list_uis()">nvim_list_uis()</a>

</div>
<div class="help-para">
    Note:
        If multiple UI clients are attached, the global screen dimensions
        degrade to the smallest client. E.g. if client A requests 80x40 but
        client B requests 200x100, the global screen has size 80x40.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{width}</code>    Requested screen columns
</div><div class="help-li" style=""> <code>{height}</code>   Requested screen rows
</div><div class="help-li" style=""> <code>{options}</code>  <a href="/neovim-docs-web/en/ui#ui-option">ui-option</a> map
</div>
</div>
<div class="help-para">
nvim_ui_detach()                                            <a name="nvim_ui_detach()"></a><code class="help-tag-right">nvim_ui_detach()</code>
    Deactivates UI events on the channel.

</div>
<div class="help-para">
    Removes the client from the list of UIs. <a href="/neovim-docs-web/en/api#nvim_list_uis()">nvim_list_uis()</a>

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
                                                    <a name="nvim_ui_pum_set_bounds()"></a><code class="help-tag-right">nvim_ui_pum_set_bounds()</code>
nvim_ui_pum_set_bounds(<code>{width}</code>, <code>{height}</code>, <code>{row}</code>, <code>{col}</code>)
    Tells Nvim the geometry of the popupmenu, to align floating windows with
    an external popup menu.

</div>
<div class="help-para">
    Note that this method is not to be confused with
    <a href="/neovim-docs-web/en/api#nvim_ui_pum_set_height()">nvim_ui_pum_set_height()</a>, which sets the number of visible items in the
    popup menu, while this function sets the bounding box of the popup menu,
    including visual elements such as borders and sliders. Floats need not use
    the same font size, nor be anchored to exact grid corners, so one can set
    floating-point numbers to the popup menu geometry.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{width}</code>   Popupmenu width.
</div><div class="help-li" style=""> <code>{height}</code>  Popupmenu height.
</div><div class="help-li" style=""> <code>{row}</code>     Popupmenu row.
</div><div class="help-li" style=""> <code>{col}</code>     Popupmenu height.
</div>
</div>
<div class="help-para">
nvim_ui_pum_set_height(<code>{height}</code>)                    <a name="nvim_ui_pum_set_height()"></a><code class="help-tag-right">nvim_ui_pum_set_height()</code>
    Tells Nvim the number of elements displaying in the popupmenu, to decide
    <code>&lt;PageUp&gt;</code> and <code>&lt;PageDown&gt;</code> movement.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{height}</code>  Popupmenu height, must be greater than zero.
</div>
</div>
<div class="help-para">
nvim_ui_set_option(<code>{name}</code>, <code>{value}</code>)                     <a name="nvim_ui_set_option()"></a><code class="help-tag-right">nvim_ui_set_option()</code>
    TODO: Documentation

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
nvim_ui_try_resize(<code>{width}</code>, <code>{height}</code>)                   <a name="nvim_ui_try_resize()"></a><code class="help-tag-right">nvim_ui_try_resize()</code>
    TODO: Documentation

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
                                                   <a name="nvim_ui_try_resize_grid()"></a><code class="help-tag-right">nvim_ui_try_resize_grid()</code>
nvim_ui_try_resize_grid(<code>{grid}</code>, <code>{width}</code>, <code>{height}</code>)
    Tell Nvim to resize a grid. Triggers a grid_resize event with the
    requested grid size or the maximum size if it exceeds size limits.

</div>
<div class="help-para">
    On invalid grid handle, fails with error.

</div>
<div class="help-para">
<div class="help-column_heading">    Attributes:</div>
        <a href="/neovim-docs-web/en/api#RPC">RPC</a> only

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{grid}</code>    The handle of the grid to be changed.
</div><div class="help-li" style=""> <code>{width}</code>   The new requested width.
</div><div class="help-li" style=""> <code>{height}</code>  The new requested height.
</div>
</div>

  
  