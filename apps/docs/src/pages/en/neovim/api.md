---
title: Api
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Api Txt</a> 

NVIM REFERENCE MANUAL    by Thiago de Arruda


### <a id="API api" class="section-title" href="#API api">Nvim API</a>

Nvim exposes a powerful API that can be used by plugins and external processes
via [RPC](undefined#RPC), [Lua](undefined#Lua) and VimL ([eval-api](undefined#eval-api)).

Applications can also embed libnvim to work with the C API directly.

                                      Type [gO](undefined#gO) to see the table of contents.


## <a id="api-rpc RPC rpc" class="section-title" href="#api-rpc RPC rpc">API Usage</a> 

### <a id="msgpack-rpc" class="section-title" href="#msgpack-rpc">Note:</a>
RPC is the typical way to control Nvim programmatically.  Nvim implements the
MessagePack-RPC protocol:
  https://github.com/msgpack-rpc/msgpack-rpc/blob/master/spec.md
  https://github.com/msgpack/msgpack/blob/0b8f5ac/spec.md

Many clients use the API: user interfaces (GUIs), remote plugins, scripts like
"nvr" (https://github.com/mhinz/neovim-remote).  Even Nvim itself can control
other Nvim instances.  API clients can:

  - Call any API function
  - Listen for events
  - Receive remote calls from Nvim

The RPC API is like a more powerful version of Vim's "clientserver" feature.

### <a id="rpc-connecting" class="section-title" href="#rpc-connecting">CONNECTING</a>

See [channel-intro](/neovim-docs-web/en/neovim/channel#channel-intro) for various ways to open a channel. Channel-opening
functions take an `rpc` key in the options dictionary. RPC channels can also
be opened by other processes connecting to TCP/IP sockets or named pipes
listened to by Nvim.

Nvim creates a default RPC socket at [startup](undefined#startup), given by |v:servername|. To
start with a TCP/IP socket instead, use [--listen](undefined#--listen) with a TCP-style address:
```    nvim --listen 127.0.0.1:6666
More endpoints can be started with |serverstart()|.

Note that localhost TCP sockets are generally less secure than named pipes,
and can lead to vulnerabilities like remote code execution.

Connecting to the socket is the easiest way a programmer can test the API,
which can be done through any msgpack-rpc client library or full-featured
[api-client](undefined#api-client). Here's a Ruby script that prints "hello world!" in the current
Nvim instance:
    #!/usr/bin/env ruby
    # Requires msgpack-rpc: gem install msgpack-rpc
    #
    # To run this script, execute it from a running Nvim instance (notice the
    # trailing '&' which is required since Nvim won't process events while
    # running a blocking command):
    #
    #   :!./hello.rb &
    #
    # Or from another shell by setting NVIM_LISTEN_ADDRESS:
    # $ NVIM_LISTEN_ADDRESS=[address] ./hello.rb

    require 'msgpack/rpc'
    require 'msgpack/rpc/transport/unix'

    nvim = MessagePack::RPC::Client.new(MessagePack::RPC::UNIXTransport.new, ENV['NVIM_LISTEN_ADDRESS'])
    result = nvim.call(:nvim_command, 'echo "hello world!"')
```

A better way is to use the Python REPL with the "pynvim" package, where API
functions can be called interactively:
```    >>> from pynvim import attach
    >>> nvim = attach('socket', path='[address]')
    >>> nvim.command('echo "hello world!"')
```

You can also embed Nvim via |jobstart()|, and communicate using |rpcrequest()|
and |rpcnotify()|:
```    let nvim = jobstart(['nvim', '--embed'], {'rpc': v:true})
    echo rpcrequest(nvim, 'nvim_eval', '"Hello " . "world!"')
    call jobstop(nvim)
```


## <a id="api-definitions" class="section-title" href="#api-definitions">API Definitions</a> 

### <a id="api-types" class="section-title" href="#api-types">Note:</a>
The Nvim C API defines custom types for all function parameters. Some are just
typedefs around C99 standard types, others are Nvim-defined data structures.

Basic types ~
```  API Type                              C type
  ------------------------------------------------------------------------
  Nil
  Boolean                               bool
  Integer (signed 64-bit integer)       int64_t
  Float (IEEE 754 double precision)     double
  String                                {char* data, size_t size} struct
  Array
  Dictionary (msgpack: map)
  Object
```

  Note: empty Array is accepted as a valid argument for Dictionary parameter.

Special types (msgpack EXT) ~

  These are integer typedefs discriminated as separate Object subtypes. They
  can be treated as opaque integers, but are mutually incompatible: Buffer may
  be passed as an integer but not as Window or Tabpage.

  The EXT object data is the (integer) object handle. The EXT type codes given
  in the [api-metadata](/neovim-docs-web/en/neovim/api#api-metadata) `types` key are stable: they will not change and are
  thus forward-compatible.
```  EXT Type      C type                                  Data
  ------------------------------------------------------------------------
  Buffer        enum value kObjectTypeBuffer            |bufnr()|
  Window        enum value kObjectTypeWindow            [window-ID](undefined#window-ID)
  Tabpage       enum value kObjectTypeTabpage           internal handle
```


### <a id="api-indexing" class="section-title" href="#api-indexing">Note:</a>
Most of the API uses 0-based indices, and ranges are end-exclusive. For the
end of a range, -1 denotes the last line/column.

Exception: the following API functions use "mark-like" indexing (1-based
lines, 0-based columns):

- |nvim_get_mark()|
- |nvim_buf_get_mark()|
- |nvim_buf_set_mark()|
- |nvim_win_get_cursor()|
- |nvim_win_set_cursor()|

Exception: the following API functions use [extmarks](undefined#extmarks) indexing (0-based
indices, end-inclusive):

- |nvim_buf_del_extmark()|
- |nvim_buf_get_extmark_by_id()|
- |nvim_buf_get_extmarks()|
- |nvim_buf_set_extmark()|

### <a id="api-fast" class="section-title" href="#api-fast">Note:</a>
Most API functions are "deferred": they are queued on the main loop and
processed sequentially with normal input.  So if the editor is waiting for
user input in a "modal" fashion (e.g. the [hit-enter-prompt](undefined#hit-enter-prompt)), the request
will block.  Non-deferred (fast) functions such as |nvim_get_mode()| and
|nvim_input()| are served immediately (i.e. without waiting in the input
queue).  Lua code can use |vim.in_fast_event()| to detect a fast context.


## <a id="api-metadata" class="section-title" href="#api-metadata">API Metadata</a> 

The Nvim C API is automatically exposed to RPC by the build system, which
parses headers in src/nvim/api/* and generates dispatch-functions mapping RPC
API method names to public C API functions, converting/validating arguments
and return values.

Nvim exposes its API metadata as a Dictionary with these items:

- version                 Nvim version, API level/compatibility
### <a id="API version integer api-level" class="section-title" href="#API version integer api-level">- version.api_level</a>
- version.api_compatible  API is backwards-compatible with this level
- version.api_prerelease  Declares the API as unstable/unreleased
                          `(version.api_prerelease && fn.since == version.api_level)`
- functions               API function signatures, containing [api-types](undefined#api-types) info
                          describing the return value and parameters.
- ui_events               [UI](undefined#UI) event signatures
- ui_options              Supported [ui-option](undefined#ui-option)s
- {fn}.since              API level where function {fn} was introduced
- {fn}.deprecated_since   API level where function {fn} was deprecated
- types                   Custom handle types defined by Nvim
- error_types             Possible error types returned by API functions

About the `functions` map:

  - Container types may be decorated with type/size constraints, e.g.
    ArrayOf(Buffer) or ArrayOf(Integer, 2).
  - Functions considered to be methods that operate on instances of Nvim
    special types (msgpack EXT) have the "method=true" flag. The receiver type
    is that of the first argument. Method names are prefixed with `nvim_` plus
    a type name, e.g. `nvim_buf_get_lines` is the `get_lines` method of
    a Buffer instance. [dev-api](undefined#dev-api)
  - Global functions have the "method=false" flag and are prefixed with just
    `nvim_`, e.g. `nvim_list_bufs`.

### <a id="api-mapping" class="section-title" href="#api-mapping">Note:</a>
External programs (clients) can use the metadata to discover the API, using
any of these approaches:

  1. Connect to a running Nvim instance and call |nvim_get_api_info()| via
     msgpack-RPC. This is best for clients written in dynamic languages which
     can define functions at runtime.

  2. Start Nvim with [--api-info](undefined#--api-info). Useful for statically-compiled clients.
     Example (requires Python "pyyaml" and "msgpack-python" modules):
```     nvim --api-info | python -c 'import msgpack, sys, yaml; yaml.dump(msgpack.unpackb(sys.stdin.buffer.read()), sys.stdout)'
```

  3. Use the |api_info()| Vimscript function.
     :lua print(vim.inspect(vim.fn.api_info()))
     Example using |filter()| to exclude non-deprecated API functions:
     :new|put =map(filter(api_info().functions, '!has_key(v:val,''deprecated_since'')'), 'v:val.name')


## <a id="api-contract" class="section-title" href="#api-contract">API Contract</a> 

The Nvim API is composed of functions and events.

- Clients call functions like those described at [api-global](/neovim-docs-web/en/neovim/api#api-global).
- Clients can subscribe to [ui-events](/neovim-docs-web/en/neovim/ui#ui-events), [api-buffer-updates](/neovim-docs-web/en/neovim/api#api-buffer-updates), etc.
- API function names are prefixed with "nvim_".
- API event names are prefixed with "nvim_" and suffixed with "_event".

As Nvim evolves the API may change in compliance with this CONTRACT:

- New functions and events may be added.
  - Any such extensions are OPTIONAL: old clients may ignore them.
- Function signatures will NOT CHANGE (after release).
  - Functions introduced in the development (unreleased) version MAY CHANGE.
    (Clients can dynamically check `api_prerelease`, etc. [api-metadata](/neovim-docs-web/en/neovim/api#api-metadata))
- Event parameters will not be removed or reordered (after release).
- Events may be EXTENDED: new parameters may be added.
- New items may be ADDED to map/list parameters/results of functions and
  events.
  - Any such new items are OPTIONAL: old clients may ignore them.
  - Existing items will not be removed (after release).
- Deprecated functions will not be removed until Nvim version 2.0

"Private" interfaces are NOT covered by this contract:

- Undocumented (not in :help) functions or events of any kind
- nvim__x ("double underscore") functions

The idea is "versionless evolution", in the words of Rich Hickey:
- Relaxing a requirement should be a compatible change.
- Strengthening a promise should be a compatible change.


## <a id="api-global-events" class="section-title" href="#api-global-events">Global Events</a> 

When a client invokes an API request as an async notification, it is not
possible for Nvim to send an error response. Instead, in case of error, the
following notification will be sent to the client:

### <a id="nvim_error_event" class="section-title" href="#nvim_error_event">Note:</a>
nvim_error_event[{type}, {message}]

{type} is a numeric id as defined by `api_info().error_types`, and {message} is
a string with the error message.


## <a id="api-buffer-updates" class="section-title" href="#api-buffer-updates">Buffer Update Events</a> 

API clients can "attach" to Nvim buffers to subscribe to buffer update events.
This is similar to [TextChanged](undefined#TextChanged) but more powerful and granular.

Call |nvim_buf_attach()| to receive these events on the channel:

### <a id="nvim_buf_lines_event" class="section-title" href="#nvim_buf_lines_event">Note:</a>
nvim_buf_lines_event[{buf}, {changedtick}, {firstline}, {lastline}, {linedata}, {more}]

    When the buffer text between {firstline} and {lastline} (end-exclusive,
    zero-indexed) were changed to the new text in the {linedata} list. The
    granularity is a line, i.e. if a single character is changed in the
    editor, the entire line is sent.

    When {changedtick} is |v:null| this means the screen lines (display)
    changed but not the buffer contents. {linedata} contains the changed
    screen lines. This happens when 'inccommand' shows a buffer preview.

    Properties:~
        {buf} API buffer handle (buffer number)

        {changedtick} value of |b:changedtick| for the buffer. If you send an
        API command back to nvim you can check the value of |b:changedtick| as
        part of your request to ensure that no other changes have been made.

        {firstline} integer line number of the first line that was replaced.
        Zero-indexed: if line 1 was replaced then {firstline} will be 0, not
        1. {firstline} is always less than or equal to the number of lines
        that were in the buffer before the lines were replaced.

        {lastline} integer line number of the first line that was not replaced
        (i.e. the range {firstline}, {lastline} is end-exclusive).
        Zero-indexed: if line numbers 2 to 5 were replaced, this will be 5
        instead of 6. {lastline} is always be less than or equal to the number
        of lines that were in the buffer before the lines were replaced.
        {lastline} will be -1 if the event is part of the initial update after
        attaching.

        {linedata} list of strings containing the contents of the new buffer
        lines. Newline characters are omitted; empty lines are sent as empty
        strings.

        {more} boolean, true for a "multipart" change notification: the
        current change was chunked into multiple |nvim_buf_lines_event|
        notifications (e.g. because it was too big).

### <a id="nvim_buf_changedtick_event" class="section-title" href="#nvim_buf_changedtick_event">nvim_buf_changedtick_event[{buf}, {changedtick}]</a>

    When |b:changedtick| was incremented but no text was changed. Relevant for
    undo/redo.

    Properties:~
        {buf} API buffer handle (buffer number)
        {changedtick} new value of |b:changedtick| for the buffer

### <a id="nvim_buf_detach_event" class="section-title" href="#nvim_buf_detach_event">nvim_buf_detach_event[{buf}]</a>

    When buffer is detached (i.e. updates are disabled). Triggered explicitly by
    |nvim_buf_detach()| or implicitly in these cases:
    - Buffer was [abandon](undefined#abandon)ed and 'hidden' is not set.
    - Buffer was reloaded, e.g. with |:edit| or an external change triggered
      |:checktime| or 'autoread'.
    - Generally: whenever the buffer contents are unloaded from memory.

    Properties:~
        {buf} API buffer handle (buffer number)


EXAMPLE ~

Calling |nvim_buf_attach()| with send_buffer=true on an empty buffer, emits:
```    nvim_buf_lines_event[{buf}, {changedtick}, 0, -1, [""], v:false]

User adds two lines to the buffer, emits:
    nvim_buf_lines_event[{buf}, {changedtick}, 0, 0, ["line1", "line2"], v:false]

User moves to a line containing the text "Hello world" and inserts "!", emits:
    nvim_buf_lines_event[{buf}, {changedtick}, {linenr}, {linenr} + 1,
                         ["Hello world!"], v:false]

User moves to line 3 and deletes 20 lines using "20dd", emits:
    nvim_buf_lines_event[{buf}, {changedtick}, 2, 22, [], v:false]

User selects lines 3-5 using [linewise-visual](undefined#linewise-visual) mode and then types "p" to
paste a block of 6 lines, emits:
    nvim_buf_lines_event[{buf}, {changedtick}, 2, 5,
      ['pasted line 1', 'pasted line 2', 'pasted line 3', 'pasted line 4',
       'pasted line 5', 'pasted line 6'],
      v:false
    ]

User reloads the buffer with ":edit", emits:
    nvim_buf_detach_event[{buf}]
```


LUA ~
### <a id="api-buffer-updates-lua" class="section-title" href="#api-buffer-updates-lua">Note:</a>
In-process Lua plugins can receive buffer updates in the form of Lua
callbacks. These callbacks are called frequently in various contexts;
[textlock](/neovim-docs-web/en/vim/eval#textlock) prevents changing buffer contents and window layout (use
|vim.schedule()| to defer such operations to the main loop instead).

|nvim_buf_attach()| will take keyword args for the callbacks. "on_lines" will
receive parameters ("lines", {buf}, {changedtick}, {firstline}, {lastline},
{new_lastline}, {old_byte_size} [, {old_utf32_size}, {old_utf16_size}]).
Unlike remote channel events the text contents are not passed. The new text can
be accessed inside the callback as

    `vim.api.nvim_buf_get_lines(buf, firstline, new_lastline, true)`

{old_byte_size} is the total size of the replaced region {firstline} to
{lastline} in bytes, including the final newline after {lastline}. if
`utf_sizes` is set to true in |nvim_buf_attach()| keyword args, then the
UTF-32 and UTF-16 sizes of the deleted region is also passed as additional
arguments {old_utf32_size} and {old_utf16_size}.

"on_changedtick" is invoked when |b:changedtick| was incremented but no text
was changed. The parameters received are ("changedtick", {buf}, {changedtick}).

### <a id="api-lua-detach" class="section-title" href="#api-lua-detach">Note:</a>
In-process Lua callbacks can detach by returning `true`. This will detach all
callbacks attached with the same |nvim_buf_attach()| call.


## <a id="api-highlights" class="section-title" href="#api-highlights">Buffer Highlighting</a> 

Nvim allows plugins to add position-based highlights to buffers. This is
similar to |matchaddpos()| but with some key differences. The added highlights
are associated with a buffer and adapts to line insertions and deletions,
similar to signs. It is also possible to manage a set of highlights as a group
and delete or replace all at once.

The intended use case are linter or semantic highlighter plugins that monitor
a buffer for changes, and in the background compute highlights to the buffer.
Another use case are plugins that show output in an append-only buffer, and
want to add highlights to the outputs. Highlight data cannot be preserved
on writing and loading a buffer to file, nor in undo/redo cycles.

Highlights are registered using the |nvim_buf_add_highlight()| function. If an
external highlighter plugin wants to add many highlights in a batch,
performance can be improved by calling |nvim_buf_add_highlight()| as an
asynchronous notification, after first (synchronously) requesting a source id.

Example using the Python API client ([pynvim](undefined#pynvim)):
```    src = vim.new_highlight_source()
    buf = vim.current.buffer
    for i in range(5):
        buf.add_highlight("String",i,0,-1,src_id=src)
    # some time later ...
    buf.clear_namespace(src)
```

If the highlights don't need to be deleted or updated, just pass -1 as
src_id (this is the default in python). Use |nvim_buf_clear_namespace()| to
clear highlights from a specific source, in a specific line range or the
entire buffer by passing in the line range 0, -1 (the latter is the default in
python as used above).

Example using the API from Vimscript:

    call nvim_buf_set_lines(0, 0, 0, v:true, ["test text"])
    let src = nvim_buf_add_highlight(0, 0, "String", 1, 0, 4)
    call nvim_buf_add_highlight(0, src, "Identifier", 0, 5, -1)
    " some time later ...
    call nvim_buf_clear_namespace(0, src, 0, -1)


## <a id="api-floatwin" class="section-title" href="#api-floatwin">Floating Windows</a> 

Floating windows ("floats") are displayed on top of normal windows.  This is
useful to implement simple widgets, such as tooltips displayed next to the
cursor. Floats are fully functional windows supporting user editing, common
[api-window](/neovim-docs-web/en/neovim/api#api-window) calls, and most window options (except 'statusline').

Two ways to create a floating window:
- |nvim_open_win()| creates a new window (needs a buffer, see |nvim_create_buf()|)
- |nvim_win_set_config()| reconfigures a normal window into a float

To close it use |nvim_win_close()| or a command such as |:close|.

To check whether a window is floating, check whether the `relative` option in
its config is non-empty:
```
    if vim.api.nvim_win_get_config(window_id).relative ~= '' then
      -- window with this window_id is floating
    end
```


Buffer text can be highlighted by typical mechanisms (syntax highlighting,
[api-highlights](/neovim-docs-web/en/neovim/api#api-highlights)). The [hl-NormalFloat](undefined#hl-NormalFloat) group highlights normal text;
'winhighlight' can be used as usual to override groups locally. Floats inherit
options from the current window; specify `style=minimal` in |nvim_open_win()|
to disable various visual features such as the 'number' column.

Currently, floating windows don't support some widgets like scrollbar.

The output of |:mksession| does not include commands for restoring floating
windows.

Example: create a float with scratch buffer:
```
    let buf = nvim_create_buf(v:false, v:true)
    call nvim_buf_set_lines(buf, 0, -1, v:true, ["test", "text"])
    let opts = {'relative': 'cursor', 'width': 10, 'height': 2, 'col': 0,
        \ 'row': 1, 'anchor': 'NW', 'style': 'minimal'}
    let win = nvim_open_win(buf, 0, opts)
    " optional: change highlight, otherwise Pmenu is used
    call nvim_win_set_option(win, 'winhl', 'Normal:MyHighlight')
```


## <a id="api-extended-marks extmarks" class="section-title" href="#api-extended-marks extmarks">Extended Marks</a> 

Extended marks (extmarks) represent buffer annotations that track text changes
in the buffer. They can represent cursors, folds, misspelled words, anything
that needs to track a logical location in the buffer over time. [api-indexing](undefined#api-indexing)

Extmark position works like "bar" cursor: it exists between characters. Thus,
the maximum extmark index on a line is 1 more than the character index:
```
     f o o b a r      line contents
     0 1 2 3 4 5      character positions (0-based)
    0 1 2 3 4 5 6     extmark positions (0-based)

Extmarks have "forward gravity": if you place the cursor directly on an
extmark position and enter some text, the extmark migrates forward.

     f o o|b a r      line (| = cursor)
          3           extmark

     f o o z|b a r    line (| = cursor)
            4         extmark (after typing "z")

If an extmark is on the last index of a line and you input a newline at that
point, the extmark will accordingly migrate to the next line:

     f o o z b a r|   line (| = cursor)
                  7   extmark

     f o o z b a r    first line
                      extmarks (none present)
     |                second line (| = cursor)
     0                extmark (after typing <CR>)


Example:

Let's set an extmark at the first row (row=0) and third column (column=2).
[api-indexing](undefined#api-indexing) Passing id=0 creates a new mark and returns the id:

      01 2345678
    0 ex|ample..
        ^ extmark position

    let g:mark_ns = nvim_create_namespace('myplugin')
    let g:mark_id = nvim_buf_set_extmark(0, g:mark_ns, 0, 2, {})
```

We can get the mark by its id:
```
    echo nvim_buf_get_extmark_by_id(0, g:mark_ns, g:mark_id, {})
    => [0, 2]

We can get all marks in a buffer by [namespace](undefined#namespace) (or by a range):

    echo nvim_buf_get_extmarks(0, g:mark_ns, 0, -1, {})
    => [[1, 0, 2]]

Deleting all surrounding text does NOT remove an extmark! To remove extmarks
use |nvim_buf_del_extmark()|. Deleting "x" in our example:

      0 12345678
    0 e|ample..
       ^ extmark position

    echo nvim_buf_get_extmark_by_id(0, g:mark_ns, g:mark_id, {})
    => [0, 1]
```

    Note: Extmark "gravity" decides how it will shift after a text edit.
          See |nvim_buf_set_extmark()|

Namespaces allow any plugin to manage only its own extmarks, ignoring those
created by another plugin.

Extmark positions changed by an edit will be restored on undo/redo. Creating
and deleting extmarks is not a buffer change, thus new undo states are not
created for extmark changes.


## <a id="api-global" class="section-title" href="#api-global">Global Functions</a> 

### <a id="nvim__get_runtime()" class="section-title" href="#nvim__get_runtime()">nvim__get_runtime({pat}, {all}, {*opts})</a>
    Find files in runtime directories

    Attributes: ~
        [api-fast](undefined#api-fast)

    Parameters: ~
      • {pat}   pattern of files to search for
      • {all}   whether to return all matches or only the first
      • {opts}  is_lua: only search lua subdirs

    Return: ~
        list of absolute paths to the found files

### <a id="nvim__id()" class="section-title" href="#nvim__id()">nvim__id({obj})</a>
    Returns object given as argument.

    This API function is used for testing. One should not rely on its presence
    in plugins.

    Parameters: ~
      • {obj}  Object to return.

    Return: ~
        its argument.

### <a id="nvim__id_array()" class="section-title" href="#nvim__id_array()">nvim__id_array({arr})</a>
    Returns array given as argument.

    This API function is used for testing. One should not rely on its presence
    in plugins.

    Parameters: ~
      • {arr}  Array to return.

    Return: ~
        its argument.

### <a id="nvim__id_dictionary()" class="section-title" href="#nvim__id_dictionary()">nvim__id_dictionary({dct})</a>
    Returns dictionary given as argument.

    This API function is used for testing. One should not rely on its presence
    in plugins.

    Parameters: ~
      • {dct}  Dictionary to return.

    Return: ~
        its argument.

### <a id="nvim__id_float()" class="section-title" href="#nvim__id_float()">nvim__id_float({flt})</a>
    Returns floating-point value given as argument.

    This API function is used for testing. One should not rely on its presence
    in plugins.

    Parameters: ~
      • {flt}  Value to return.

    Return: ~
        its argument.

### <a id="nvim__inspect_cell()" class="section-title" href="#nvim__inspect_cell()">nvim__inspect_cell({grid}, {row}, {col})</a>
    NB: if your UI doesn't use hlstate, this will not return hlstate first
    time.

### <a id="nvim__stats()" class="section-title" href="#nvim__stats()">nvim__stats()</a>
    Gets internal stats.

    Return: ~
        Map of various internal stats.

### <a id="nvim_call_atomic()" class="section-title" href="#nvim_call_atomic()">nvim_call_atomic({calls})</a>
    Calls many API methods atomically.

    This has two main usages:
    1. To perform several requests from an async context atomically, i.e.
       without interleaving redraws, RPC requests from other clients, or user
       interactions (however API methods may trigger autocommands or event
       processing which have such side effects, e.g. |:sleep| may wake
       timers).
    2. To minimize RPC overhead (roundtrips) of a sequence of many requests.

    Attributes: ~
        [RPC](undefined#RPC) only

    Parameters: ~
      • {calls}  an array of calls, where each call is described by an array
                 with two elements: the request name, and an array of
                 arguments.

    Return: ~
        Array of two elements. The first is an array of return values. The
        second is NIL if all calls succeeded. If a call resulted in an error,
        it is a three-element array with the zero-based index of the call
        which resulted in an error, the error type and the error message. If
        an error occurred, the values from all preceding calls will still be
        returned.

### <a id="nvim_chan_send()" class="section-title" href="#nvim_chan_send()">nvim_chan_send({chan}, {data})</a>
    Send data to channel `id`. For a job, it writes it to the stdin of the
    process. For the stdio channel [channel-stdio](/neovim-docs-web/en/neovim/channel#channel-stdio), it writes to Nvim's
    stdout. For an internal terminal instance (|nvim_open_term()|) it writes
    directly to terminal output. See [channel-bytes](/neovim-docs-web/en/neovim/channel#channel-bytes) for more information.

    This function writes raw data, not RPC messages. If the channel was
    created with `rpc=true` then the channel expects RPC messages, use
    |vim.rpcnotify()| and |vim.rpcrequest()| instead.

    Attributes: ~
        [RPC](undefined#RPC) only
        Lua |vim.api| only

    Parameters: ~
      • {chan}  id of the channel
      • {data}  data to write. 8-bit clean: can contain NUL bytes.

### <a id="nvim_create_buf()" class="section-title" href="#nvim_create_buf()">nvim_create_buf({listed}, {scratch})</a>
    Creates a new, empty, unnamed buffer.

    Parameters: ~
      • {listed}   Sets 'buflisted'
      • {scratch}  Creates a "throwaway" [scratch-buffer](undefined#scratch-buffer) for temporary work
                   (always 'nomodified'). Also sets 'nomodeline' on the
                   buffer.

    Return: ~
        Buffer handle, or 0 on error

    See also: ~
        buf_open_scratch

### <a id="nvim_del_current_line()" class="section-title" href="#nvim_del_current_line()">nvim_del_current_line()</a>
    Deletes the current line.

    Attributes: ~
        not allowed when [textlock](/neovim-docs-web/en/vim/eval#textlock) is active

### <a id="nvim_del_keymap()" class="section-title" href="#nvim_del_keymap()">nvim_del_keymap({mode}, {lhs})</a>
    Unmaps a global [mapping](undefined#mapping) for the given mode.

    To unmap a buffer-local mapping, use |nvim_buf_del_keymap()|.

    See also: ~
        |nvim_set_keymap()|

### <a id="nvim_del_mark()" class="section-title" href="#nvim_del_mark()">nvim_del_mark({name})</a>
    Deletes an uppercase/file named mark. See [mark-motions](undefined#mark-motions).

    Note:
        fails with error if a lowercase or buffer local named mark is used.

    Parameters: ~
      • {name}  Mark name

    Return: ~
        true if the mark was deleted, else false.

    See also: ~
        |nvim_buf_del_mark()|
        |nvim_get_mark()|

### <a id="nvim_del_var()" class="section-title" href="#nvim_del_var()">nvim_del_var({name})</a>
    Removes a global (g:) variable.

    Parameters: ~
      • {name}  Variable name

### <a id="nvim_echo()" class="section-title" href="#nvim_echo()">nvim_echo({chunks}, {history}, {opts})</a>
    Echo a message.

    Parameters: ~
      • {chunks}   A list of [text, hl_group] arrays, each representing a text
                   chunk with specified highlight. `hl_group` element can be
                   omitted for no highlight.
      • {history}  if true, add to [message-history](undefined#message-history).
      • {opts}     Optional parameters. Reserved for future use.

### <a id="nvim_err_write()" class="section-title" href="#nvim_err_write()">nvim_err_write({str})</a>
    Writes a message to the Vim error buffer. Does not append "\n", the
    message is buffered (won't display) until a linefeed is written.

    Parameters: ~
      • {str}  Message

### <a id="nvim_err_writeln()" class="section-title" href="#nvim_err_writeln()">nvim_err_writeln({str})</a>
    Writes a message to the Vim error buffer. Appends "\n", so the buffer is
    flushed (and displayed).

    Parameters: ~
      • {str}  Message

    See also: ~
        nvim_err_write()

### <a id="nvim_eval_statusline()" class="section-title" href="#nvim_eval_statusline()">nvim_eval_statusline({str}, {*opts})</a>
    Evaluates statusline string.

    Attributes: ~
        [api-fast](undefined#api-fast)

    Parameters: ~
      • {str}   Statusline string (see 'statusline').
      • {opts}  Optional parameters.
                • winid: (number) [window-ID](undefined#window-ID) of the window to use as context
                  for statusline.
                • maxwidth: (number) Maximum width of statusline.
                • fillchar: (string) Character to fill blank spaces in the
                  statusline (see 'fillchars'). Treated as single-width even
                  if it isn't.
                • highlights: (boolean) Return highlight information.
                • use_winbar: (boolean) Evaluate winbar instead of statusline.
                • use_tabline: (boolean) Evaluate tabline instead of
                  statusline. When true, {winid} is ignored. Mutually
                  exclusive with {use_winbar}.

    Return: ~
        Dictionary containing statusline information, with these keys:
        • str: (string) Characters that will be displayed on the statusline.
        • width: (number) Display width of the statusline.
        • highlights: Array containing highlight information of the
          statusline. Only included when the "highlights" key in {opts} is
          true. Each element of the array is a [Dictionary](undefined#Dictionary) with these keys:
          • start: (number) Byte index (0-based) of first character that uses
            the highlight.
          • group: (string) Name of highlight group.

### <a id="nvim_exec_lua()" class="section-title" href="#nvim_exec_lua()">nvim_exec_lua({code}, {args})</a>
    Execute Lua code. Parameters (if any) are available as `...` inside the
    chunk. The chunk can return a value.

    Only statements are executed. To evaluate an expression, prefix it with
    `return`: return my_function(...)

    Attributes: ~
        [RPC](undefined#RPC) only

    Parameters: ~
      • {code}  Lua code to execute
      • {args}  Arguments to the code

    Return: ~
        Return value of Lua code if present or NIL.

### <a id="nvim_feedkeys()" class="section-title" href="#nvim_feedkeys()">nvim_feedkeys({keys}, {mode}, {escape_ks})</a>
    Sends input-keys to Nvim, subject to various quirks controlled by `mode`
    flags. This is a blocking call, unlike |nvim_input()|.

    On execution error: does not fail, but updates v:errmsg.

    To input sequences like <C-o> use |nvim_replace_termcodes()| (typically
    with escape_ks=false) to replace [keycodes](undefined#keycodes), then pass the result to
    nvim_feedkeys().

    Example:
```        :let key = nvim_replace_termcodes("<C-o>", v:true, v:false, v:true)
        :call nvim_feedkeys(key, 'n', v:false)
```


    Parameters: ~
      • {keys}       to be typed
      • {mode}       behavior flags, see |feedkeys()|
      • {escape_ks}  If true, escape K_SPECIAL bytes in `keys` This should be
                     false if you already used |nvim_replace_termcodes()|, and
                     true otherwise.

    See also: ~
        feedkeys()
        vim_strsave_escape_ks

### <a id="nvim_get_api_info()" class="section-title" href="#nvim_get_api_info()">nvim_get_api_info()</a>
    Returns a 2-tuple (Array), where item 0 is the current channel id and item
    1 is the [api-metadata](/neovim-docs-web/en/neovim/api#api-metadata) map (Dictionary).

    Return: ~
        2-tuple [{channel-id}, {api-metadata}]

    Attributes: ~
        [api-fast](undefined#api-fast)
        [RPC](undefined#RPC) only

### <a id="nvim_get_chan_info()" class="section-title" href="#nvim_get_chan_info()">nvim_get_chan_info({chan})</a>
    Gets information about a channel.

    Return: ~
        Dictionary describing a channel, with these keys:
        • "id" Channel id.
        • "argv" (optional) Job arguments list.
        • "stream" Stream underlying the channel.
          • "stdio" stdin and stdout of this Nvim instance
          • "stderr" stderr of this Nvim instance
          • "socket" TCP/IP socket or named pipe
          • "job" Job with communication over its stdio.

        • "mode" How data received on the channel is interpreted.
          • "bytes" Send and receive raw bytes.
          • "terminal" [terminal](undefined#terminal) instance interprets ASCII sequences.
          • "rpc" [RPC](undefined#RPC) communication on the channel is active.

        • "pty" (optional) Name of pseudoterminal. On a POSIX system this is a
          device path like "/dev/pts/1". If the name is unknown, the key will
          still be present if a pty is used (e.g. for conpty on Windows).
        • "buffer" (optional) Buffer with connected [terminal](undefined#terminal) instance.
        • "client" (optional) Info about the peer (client on the other end of
          the RPC channel), if provided by it via |nvim_set_client_info()|.

### <a id="nvim_get_color_by_name()" class="section-title" href="#nvim_get_color_by_name()">nvim_get_color_by_name({name})</a>
    Returns the 24-bit RGB value of a |nvim_get_color_map()| color name or
    "#rrggbb" hexadecimal string.

    Example:
```        :echo nvim_get_color_by_name("Pink")
        :echo nvim_get_color_by_name("#cbcbcb")
```


    Parameters: ~
      • {name}  Color name or "#rrggbb" string

    Return: ~
        24-bit RGB value, or -1 for invalid argument.

### <a id="nvim_get_color_map()" class="section-title" href="#nvim_get_color_map()">nvim_get_color_map()</a>
    Returns a map of color names and RGB values.

    Keys are color names (e.g. "Aqua") and values are 24-bit RGB color values
    (e.g. 65535).

    Return: ~
        Map of color names and RGB values.

### <a id="nvim_get_context()" class="section-title" href="#nvim_get_context()">nvim_get_context({*opts})</a>
    Gets a map of the current editor state.

    Parameters: ~
      • {opts}  Optional parameters.
                • types: List of [context-types](undefined#context-types) ("regs", "jumps", "bufs",
                  "gvars", …) to gather, or empty for "all".

    Return: ~
        map of global [context](undefined#context).

### <a id="nvim_get_current_buf()" class="section-title" href="#nvim_get_current_buf()">nvim_get_current_buf()</a>
    Gets the current buffer.

    Return: ~
        Buffer handle

### <a id="nvim_get_current_line()" class="section-title" href="#nvim_get_current_line()">nvim_get_current_line()</a>
    Gets the current line.

    Return: ~
        Current line string

### <a id="nvim_get_current_tabpage()" class="section-title" href="#nvim_get_current_tabpage()">nvim_get_current_tabpage()</a>
    Gets the current tabpage.

    Return: ~
        Tabpage handle

### <a id="nvim_get_current_win()" class="section-title" href="#nvim_get_current_win()">nvim_get_current_win()</a>
    Gets the current window.

    Return: ~
        Window handle

### <a id="nvim_get_hl_by_id()" class="section-title" href="#nvim_get_hl_by_id()">nvim_get_hl_by_id({hl_id}, {rgb})</a>
    Gets a highlight definition by id. |hlID()|

    Parameters: ~
      • {hl_id}  Highlight id as returned by |hlID()|
      • {rgb}    Export RGB colors

    Return: ~
        Highlight definition map

    See also: ~
        nvim_get_hl_by_name

### <a id="nvim_get_hl_by_name()" class="section-title" href="#nvim_get_hl_by_name()">nvim_get_hl_by_name({name}, {rgb})</a>
    Gets a highlight definition by name.

    Parameters: ~
      • {name}  Highlight group name
      • {rgb}   Export RGB colors

    Return: ~
        Highlight definition map

    See also: ~
        nvim_get_hl_by_id

### <a id="nvim_get_hl_id_by_name()" class="section-title" href="#nvim_get_hl_id_by_name()">nvim_get_hl_id_by_name({name})</a>
    Gets a highlight group by name

    similar to |hlID()|, but allocates a new ID if not present.

### <a id="nvim_get_keymap()" class="section-title" href="#nvim_get_keymap()">nvim_get_keymap({mode})</a>
    Gets a list of global (non-buffer-local) [mapping](undefined#mapping) definitions.

    Parameters: ~
      • {mode}  Mode short-name ("n", "i", "v", ...)

    Return: ~
        Array of |maparg()|-like dictionaries describing mappings. The
        "buffer" key is always zero.

### <a id="nvim_get_mark()" class="section-title" href="#nvim_get_mark()">nvim_get_mark({name}, {opts})</a>
    Return a tuple (row, col, buffer, buffername) representing the position of
    the uppercase/file named mark. See [mark-motions](undefined#mark-motions).

    Marks are (1,0)-indexed. [api-indexing](undefined#api-indexing)

    Note:
        fails with error if a lowercase or buffer local named mark is used.

    Parameters: ~
      • {name}  Mark name
      • {opts}  Optional parameters. Reserved for future use.

    Return: ~
        4-tuple (row, col, buffer, buffername), (0, 0, 0, '') if the mark is
        not set.

    See also: ~
        |nvim_buf_set_mark()|
        |nvim_del_mark()|

### <a id="nvim_get_mode()" class="section-title" href="#nvim_get_mode()">nvim_get_mode()</a>
    Gets the current mode. |mode()| "blocking" is true if Nvim is waiting for
    input.

    Return: ~
        Dictionary { "mode": String, "blocking": Boolean }

    Attributes: ~
        [api-fast](undefined#api-fast)

### <a id="nvim_get_proc()" class="section-title" href="#nvim_get_proc()">nvim_get_proc({pid})</a>
    Gets info describing process `pid`.

    Return: ~
        Map of process properties, or NIL if process not found.

### <a id="nvim_get_proc_children()" class="section-title" href="#nvim_get_proc_children()">nvim_get_proc_children({pid})</a>
    Gets the immediate children of process `pid`.

    Return: ~
        Array of child process ids, empty if process not found.

### <a id="nvim_get_runtime_file()" class="section-title" href="#nvim_get_runtime_file()">nvim_get_runtime_file({name}, {all})</a>
    Find files in runtime directories

    "name" can contain wildcards. For example
### <a id="nvim_get_runtime_file("colors/.vim", true) will return all color scheme" class="section-title" href="#nvim_get_runtime_file("colors/.vim", true) will return all color scheme">Note:</a>
    files. Always use forward slashes (/) in the search pattern for
    subdirectories regardless of platform.

    It is not an error to not find any files. An empty array is returned then.

    Attributes: ~
        [api-fast](undefined#api-fast)

    Parameters: ~
      • {name}  pattern of files to search for
      • {all}   whether to return all matches or only the first

    Return: ~
        list of absolute paths to the found files

### <a id="nvim_get_var()" class="section-title" href="#nvim_get_var()">nvim_get_var({name})</a>
    Gets a global (g:) variable.

    Parameters: ~
      • {name}  Variable name

    Return: ~
        Variable value

### <a id="nvim_get_vvar()" class="section-title" href="#nvim_get_vvar()">nvim_get_vvar({name})</a>
    Gets a v: variable.

    Parameters: ~
      • {name}  Variable name

    Return: ~
        Variable value

### <a id="nvim_input()" class="section-title" href="#nvim_input()">nvim_input({keys})</a>
    Queues raw user-input. Unlike |nvim_feedkeys()|, this uses a low-level
    input buffer and the call is non-blocking (input is processed
    asynchronously by the eventloop).

    On execution error: does not fail, but updates v:errmsg.

    Note:
        [keycodes](undefined#keycodes) like <CR> are translated, so "<" is special. To input a
        literal "<", send <LT>.

    Note:
        For mouse events use |nvim_input_mouse()|. The pseudokey form
        "<LeftMouse><col,row>" is deprecated since [api-level](undefined#api-level) 6.

    Attributes: ~
        [api-fast](undefined#api-fast)

    Parameters: ~
      • {keys}  to be typed

    Return: ~
        Number of bytes actually written (can be fewer than requested if the
        buffer becomes full).

### <a id="nvim_input_mouse()" class="section-title" href="#nvim_input_mouse()">Note:</a>
nvim_input_mouse({button}, {action}, {modifier}, {grid}, {row}, {col})
    Send mouse event from GUI.

    Non-blocking: does not wait on any result, but queues the event to be
    processed soon by the event loop.

    Note:
        Currently this doesn't support "scripting" multiple mouse events by
        calling it multiple times in a loop: the intermediate mouse positions
        will be ignored. It should be used to implement real-time mouse input
        in a GUI. The deprecated pseudokey form ("<LeftMouse><col,row>") of
        |nvim_input()| has the same limitation.

    Attributes: ~
        [api-fast](undefined#api-fast)

    Parameters: ~
      • {button}    Mouse button: one of "left", "right", "middle", "wheel",
                    "move".
      • {action}    For ordinary buttons, one of "press", "drag", "release".
                    For the wheel, one of "up", "down", "left", "right".
                    Ignored for "move".
      • {modifier}  String of modifiers each represented by a single char. The
                    same specifiers are used as for a key press, except that
                    the "-" separator is optional, so "C-A-", "c-a" and "CA"
                    can all be used to specify Ctrl+Alt+click.
      • {grid}      Grid number if the client uses [ui-multigrid](/neovim-docs-web/en/neovim/ui#ui-multigrid), else 0.
      • {row}       Mouse row-position (zero-based, like redraw events)
      • {col}       Mouse column-position (zero-based, like redraw events)

### <a id="nvim_list_bufs()" class="section-title" href="#nvim_list_bufs()">nvim_list_bufs()</a>
    Gets the current list of buffer handles

    Includes unlisted (unloaded/deleted) buffers, like `:ls!`. Use
    |nvim_buf_is_loaded()| to check if a buffer is loaded.

    Return: ~
        List of buffer handles

### <a id="nvim_list_chans()" class="section-title" href="#nvim_list_chans()">nvim_list_chans()</a>
    Get information about all open channels.

    Return: ~
        Array of Dictionaries, each describing a channel with the format
        specified at |nvim_get_chan_info()|.

### <a id="nvim_list_runtime_paths()" class="section-title" href="#nvim_list_runtime_paths()">nvim_list_runtime_paths()</a>
    Gets the paths contained in 'runtimepath'.

    Return: ~
        List of paths

### <a id="nvim_list_tabpages()" class="section-title" href="#nvim_list_tabpages()">nvim_list_tabpages()</a>
    Gets the current list of tabpage handles.

    Return: ~
        List of tabpage handles

### <a id="nvim_list_uis()" class="section-title" href="#nvim_list_uis()">nvim_list_uis()</a>
    Gets a list of dictionaries representing attached UIs.

    Return: ~
        Array of UI dictionaries, each with these keys:
        • "height" Requested height of the UI
        • "width" Requested width of the UI
        • "rgb" true if the UI uses RGB colors (false implies [cterm-colors](undefined#cterm-colors))
        • "ext_..." Requested UI extensions, see [ui-option](undefined#ui-option)
        • "chan" Channel id of remote UI (not present for TUI)

### <a id="nvim_list_wins()" class="section-title" href="#nvim_list_wins()">nvim_list_wins()</a>
    Gets the current list of window handles.

    Return: ~
        List of window handles

### <a id="nvim_load_context()" class="section-title" href="#nvim_load_context()">nvim_load_context({dict})</a>
    Sets the current editor state from the given [context](undefined#context) map.

    Parameters: ~
      • {dict}  [Context](undefined#Context) map.

### <a id="nvim_notify()" class="section-title" href="#nvim_notify()">nvim_notify({msg}, {log_level}, {opts})</a>
    Notify the user with a message

    Relays the call to vim.notify . By default forwards your message in the
    echo area but can be overridden to trigger desktop notifications.

    Parameters: ~
      • {msg}        Message to display to the user
      • {log_level}  The log level
      • {opts}       Reserved for future use.

### <a id="nvim_open_term()" class="section-title" href="#nvim_open_term()">nvim_open_term({buffer}, {opts})</a>
    Open a terminal instance in a buffer

    By default (and currently the only option) the terminal will not be
    connected to an external process. Instead, input send on the channel will
    be echoed directly by the terminal. This is useful to display ANSI
    terminal sequences returned as part of a rpc message, or similar.

    Note: to directly initiate the terminal using the right size, display the
    buffer in a configured window before calling this. For instance, for a
    floating display, first create an empty buffer using |nvim_create_buf()|,
    then display it using |nvim_open_win()|, and then call this function. Then
    |nvim_chan_send()| can be called immediately to process sequences in a
    virtual terminal having the intended size.

    Parameters: ~
      • {buffer}  the buffer to use (expected to be empty)
      • {opts}    Optional parameters.
                  • on_input: lua callback for input sent, i e keypresses in
                    terminal mode. Note: keypresses are sent raw as they would
                    be to the pty master end. For instance, a carriage return
                    is sent as a "\r", not as a "\n". [textlock](/neovim-docs-web/en/vim/eval#textlock) applies. It
                    is possible to call |nvim_chan_send()| directly in the
                    callback however. ["input", term, bufnr, data]

    Return: ~
        Channel id, or 0 on error

### <a id="nvim_out_write()" class="section-title" href="#nvim_out_write()">nvim_out_write({str})</a>
    Writes a message to the Vim output buffer. Does not append "\n", the
    message is buffered (won't display) until a linefeed is written.

    Parameters: ~
      • {str}  Message

### <a id="nvim_paste()" class="section-title" href="#nvim_paste()">nvim_paste({data}, {crlf}, {phase})</a>
    Pastes at cursor, in any mode.

    Invokes the `vim.paste` handler, which handles each mode appropriately.
    Sets redo/undo. Faster than |nvim_input()|. Lines break at LF ("\n").

    Errors ('nomodifiable', `vim.paste()` failure, …) are reflected in `err`
    but do not affect the return value (which is strictly decided by
    `vim.paste()`). On error, subsequent calls are ignored ("drained") until
    the next paste is initiated (phase 1 or -1).

    Attributes: ~
        not allowed when [textlock](/neovim-docs-web/en/vim/eval#textlock) is active

    Parameters: ~
      • {data}   Multiline input. May be binary (containing NUL bytes).
      • {crlf}   Also break lines at CR and CRLF.
      • {phase}  -1: paste in a single call (i.e. without streaming). To
                 "stream" a paste, call `nvim_paste` sequentially with these `phase` values:
                 • 1: starts the paste (exactly once)
                 • 2: continues the paste (zero or more times)
                 • 3: ends the paste (exactly once)

    Return: ~

        • true: Client may continue pasting.
        • false: Client must cancel the paste.

### <a id="nvim_put()" class="section-title" href="#nvim_put()">nvim_put({lines}, {type}, {after}, {follow})</a>
    Puts text at cursor, in any mode.

    Compare |:put| and [p](undefined#p) which are always linewise.

    Attributes: ~
        not allowed when [textlock](/neovim-docs-web/en/vim/eval#textlock) is active

    Parameters: ~
      • {lines}   |readfile()|-style list of lines. [channel-lines](undefined#channel-lines)
      • {type}    Edit behavior: any |getregtype()| result, or:
                  • "b" [blockwise-visual](undefined#blockwise-visual) mode (may include width, e.g. "b3")
                  • "c" [charwise](undefined#charwise) mode
                  • "l" [linewise](undefined#linewise) mode
                  • "" guess by contents, see |setreg()|
      • {after}   If true insert after cursor (like [p](undefined#p)), or before (like
                  [P](undefined#P)).
      • {follow}  If true place cursor at end of inserted text.

### <a id="nvim_replace_termcodes()" class="section-title" href="#nvim_replace_termcodes()">Note:</a>
nvim_replace_termcodes({str}, {from_part}, {do_lt}, {special})
    Replaces terminal codes and [keycodes](undefined#keycodes) (<CR>, <Esc>, ...) in a string with
    the internal representation.

    Parameters: ~
      • {str}        String to be converted.
      • {from_part}  Legacy Vim parameter. Usually true.
      • {do_lt}      Also translate <lt>. Ignored if `special` is false.
      • {special}    Replace [keycodes](undefined#keycodes), e.g. <CR> becomes a "\r" char.

    See also: ~
        replace_termcodes
        cpoptions

### <a id="nvim_select_popupmenu_item()" class="section-title" href="#nvim_select_popupmenu_item()">Note:</a>
nvim_select_popupmenu_item({item}, {insert}, {finish}, {opts})
    Selects an item in the completion popup menu.

    If neither [ins-completion](/neovim-docs-web/en/vim/insert#ins-completion) nor [cmdline-completion](/neovim-docs-web/en/vim/cmdline#cmdline-completion) popup menu is active
    this API call is silently ignored. Useful for an external UI using
    [ui-popupmenu](/neovim-docs-web/en/neovim/ui#ui-popupmenu) to control the popup menu with the mouse. Can also be used
    in a mapping; use <Cmd> |:map-cmd| or a Lua mapping to ensure the mapping
    doesn't end completion mode.

    Parameters: ~
      • {item}    Index (zero-based) of the item to select. Value of -1
                  selects nothing and restores the original text.
      • {insert}  For [ins-completion](/neovim-docs-web/en/vim/insert#ins-completion), whether the selection should be
                  inserted in the buffer. Ignored for [cmdline-completion](/neovim-docs-web/en/vim/cmdline#cmdline-completion).
      • {finish}  Finish the completion and dismiss the popup menu. Implies
                  {insert}.
      • {opts}    Optional parameters. Reserved for future use.

### <a id="nvim_set_client_info()" class="section-title" href="#nvim_set_client_info()">Note:</a>
nvim_set_client_info({name}, {version}, {type}, {methods}, {attributes})
    Self-identifies the client.

    The client/plugin/application should call this after connecting, to
    provide hints about its identity and purpose, for debugging and
    orchestration.

    Can be called more than once; the caller should merge old info if
    appropriate. Example: library first identifies the channel, then a plugin
    using that library later identifies itself.

    Note:
        "Something is better than nothing". You don't need to include all the
        fields.

    Attributes: ~
        [RPC](undefined#RPC) only

    Parameters: ~
      • {name}        Short name for the connected client
      • {version}     Dictionary describing the version, with these (optional)
                      keys:
                      • "major" major version (defaults to 0 if not set, for
                        no release yet)
                      • "minor" minor version
                      • "patch" patch number
                      • "prerelease" string describing a prerelease, like
                        "dev" or "beta1"
                      • "commit" hash or similar identifier of commit
      • {type}        Must be one of the following values. Client libraries
                      should default to "remote" unless overridden by the
                      user.
                      • "remote" remote client connected to Nvim.
                      • "ui" gui frontend
                      • "embedder" application using Nvim as a component (for
                        example, IDE/editor implementing a vim mode).
                      • "host" plugin host, typically started by nvim
                      • "plugin" single plugin, started by nvim
      • {methods}     Builtin methods in the client. For a host, this does not
                      include plugin methods which will be discovered later.
                      The key should be the method name, the values are dicts
                      with these (optional) keys (more keys may be added in
                      future versions of Nvim, thus unknown keys are ignored.
                      Clients must only use keys defined in this or later
                      versions of Nvim):
                      • "async" if true, send as a notification. If false or
                        unspecified, use a blocking request
                      • "nargs" Number of arguments. Could be a single integer
                        or an array of two integers, minimum and maximum
                        inclusive.
      • {attributes}  Arbitrary string:string map of informal client
                      properties. Suggested keys:
                      • "website": Client homepage URL (e.g. GitHub
                        repository)
                      • "license": License description ("Apache 2", "GPLv3",
                        "MIT", …)
                      • "logo": URI or path to image, preferably small logo or
                        icon. .png or .svg format is preferred.

### <a id="nvim_set_current_buf()" class="section-title" href="#nvim_set_current_buf()">nvim_set_current_buf({buffer})</a>
    Sets the current buffer.

    Attributes: ~
        not allowed when [textlock](/neovim-docs-web/en/vim/eval#textlock) is active

    Parameters: ~
      • {buffer}  Buffer handle

### <a id="nvim_set_current_dir()" class="section-title" href="#nvim_set_current_dir()">nvim_set_current_dir({dir})</a>
    Changes the global working directory.

    Parameters: ~
      • {dir}  Directory path

### <a id="nvim_set_current_line()" class="section-title" href="#nvim_set_current_line()">nvim_set_current_line({line})</a>
    Sets the current line.

    Attributes: ~
        not allowed when [textlock](/neovim-docs-web/en/vim/eval#textlock) is active

    Parameters: ~
      • {line}  Line contents

### <a id="nvim_set_current_tabpage()" class="section-title" href="#nvim_set_current_tabpage()">nvim_set_current_tabpage({tabpage})</a>
    Sets the current tabpage.

    Attributes: ~
        not allowed when [textlock](/neovim-docs-web/en/vim/eval#textlock) is active

    Parameters: ~
      • {tabpage}  Tabpage handle

### <a id="nvim_set_current_win()" class="section-title" href="#nvim_set_current_win()">nvim_set_current_win({window})</a>
    Sets the current window.

    Attributes: ~
        not allowed when [textlock](/neovim-docs-web/en/vim/eval#textlock) is active

    Parameters: ~
      • {window}  Window handle

### <a id="nvim_set_hl()" class="section-title" href="#nvim_set_hl()">nvim_set_hl({ns_id}, {name}, {*val})</a>
    Sets a highlight group.

    Note:
        Unlike the `:highlight` command which can update a highlight group,
        this function completely replaces the definition. For example:
        `nvim_set_hl(0, 'Visual', {})` will clear the highlight group
        'Visual'.

    Note:
        The fg and bg keys also accept the string values `"fg"` or `"bg"`
        which act as aliases to the corresponding foreground and background
        values of the Normal group. If the Normal group has not been defined,
        using these values results in an error.

    Parameters: ~
      • {ns_id}  Namespace id for this highlight |nvim_create_namespace()|.
                 Use 0 to set a highlight group globally |:highlight|.
      • {name}   Highlight group name, e.g. "ErrorMsg"
      • {val}    Highlight definition map, accepts the following keys:
                 • fg (or foreground): color name or "#RRGGBB", see note.
                 • bg (or background): color name or "#RRGGBB", see note.
                 • sp (or special): color name or "#RRGGBB"
                 • blend: integer between 0 and 100
                 • bold: boolean
                 • standout: boolean
                 • underline: boolean
                 • undercurl: boolean
                 • underdouble: boolean
                 • underdotted: boolean
                 • underdashed: boolean
                 • strikethrough: boolean
                 • italic: boolean
                 • reverse: boolean
                 • nocombine: boolean
                 • link: name of another highlight group to link to, see
                   |:hi-link|.
                 • default: Don't override existing definition |:hi-default|
                 • ctermfg: Sets foreground of cterm color [ctermfg](undefined#ctermfg)
                 • ctermbg: Sets background of cterm color [ctermbg](undefined#ctermbg)
                 • cterm: cterm attribute map, like [highlight-args](undefined#highlight-args). If not
                   set, cterm attributes will match those from the attribute
                   map documented above.

### <a id="nvim_set_hl_ns()" class="section-title" href="#nvim_set_hl_ns()">nvim_set_hl_ns({ns_id})</a>
    Set active namespace for highlights. This can be set for a single window,
    see |nvim_win_set_hl_ns()|.

    Parameters: ~
      • {ns_id}  the namespace to use

### <a id="nvim_set_hl_ns_fast()" class="section-title" href="#nvim_set_hl_ns_fast()">nvim_set_hl_ns_fast({ns_id})</a>
    Set active namespace for highlights while redrawing.

    This function meant to be called while redrawing, primarily from
    |nvim_set_decoration_provider()| on_win and on_line callbacks, which are
    allowed to change the namespace during a redraw cycle.

    Attributes: ~
        [api-fast](undefined#api-fast)

    Parameters: ~
      • {ns_id}  the namespace to activate

### <a id="nvim_set_keymap()" class="section-title" href="#nvim_set_keymap()">nvim_set_keymap({mode}, {lhs}, {rhs}, {*opts})</a>
    Sets a global [mapping](undefined#mapping) for the given mode.

    To set a buffer-local mapping, use |nvim_buf_set_keymap()|.

    Unlike |:map|, leading/trailing whitespace is accepted as part of the
    {lhs} or {rhs}. Empty {rhs} is |<Nop>|. [keycodes](undefined#keycodes) are replaced as usual.

    Example:
```        call nvim_set_keymap('n', ' <NL>', '', {'nowait': v:true})
```


    is equivalent to:
```        nmap <nowait> <Space><NL> <Nop>
```


    Parameters: ~
      • {mode}  Mode short-name (map command prefix: "n", "i", "v", "x", …) or
                "!" for |:map!|, or empty string for |:map|.
      • {lhs}   Left-hand-side |{lhs}| of the mapping.
      • {rhs}   Right-hand-side |{rhs}| of the mapping.
      • {opts}  Optional parameters map: keys are |:map-arguments|, values are
                booleans (default false). Accepts all |:map-arguments| as keys
                excluding |<buffer>| but including |:noremap| and "desc".
                Unknown key is an error. "desc" can be used to give a
                description to the mapping. When called from Lua, also accepts
                a "callback" key that takes a Lua function to call when the
                mapping is executed. When "expr" is true, "replace_keycodes"
                (boolean) can be used to replace keycodes in the resulting
                string (see |nvim_replace_termcodes()|), and a Lua callback
                returning `nil` is equivalent to returning an empty string.

### <a id="nvim_set_var()" class="section-title" href="#nvim_set_var()">nvim_set_var({name}, {value})</a>
    Sets a global (g:) variable.

    Parameters: ~
      • {name}   Variable name
      • {value}  Variable value

### <a id="nvim_set_vvar()" class="section-title" href="#nvim_set_vvar()">nvim_set_vvar({name}, {value})</a>
    Sets a v: variable, if it is not readonly.

    Parameters: ~
      • {name}   Variable name
      • {value}  Variable value

### <a id="nvim_strwidth()" class="section-title" href="#nvim_strwidth()">nvim_strwidth({text})</a>
    Calculates the number of display cells occupied by `text`. Control
    characters including <Tab> count as one cell.

    Parameters: ~
      • {text}  Some text

    Return: ~
        Number of cells

### <a id="nvim_subscribe()" class="section-title" href="#nvim_subscribe()">nvim_subscribe({event})</a>
    Subscribes to event broadcasts.

    Attributes: ~
        [RPC](undefined#RPC) only

    Parameters: ~
      • {event}  Event type string

### <a id="nvim_unsubscribe()" class="section-title" href="#nvim_unsubscribe()">nvim_unsubscribe({event})</a>
    Unsubscribes to event broadcasts.

    Attributes: ~
        [RPC](undefined#RPC) only

    Parameters: ~
      • {event}  Event type string


## <a id="api-vimscript" class="section-title" href="#api-vimscript">Vimscript Functions</a> 

### <a id="nvim_call_dict_function()" class="section-title" href="#nvim_call_dict_function()">Note:</a>
nvim_call_dict_function({dict}, {fn}, {args})
    Calls a VimL [Dictionary-function](undefined#Dictionary-function) with the given arguments.

    On execution error: fails with VimL error, updates v:errmsg.

    Parameters: ~
      • {dict}  Dictionary, or String evaluating to a VimL [self](undefined#self) dict
      • {fn}    Name of the function defined on the VimL dict
      • {args}  Function arguments packed in an Array

    Return: ~
        Result of the function call

### <a id="nvim_call_function()" class="section-title" href="#nvim_call_function()">nvim_call_function({fn}, {args})</a>
    Calls a VimL function with the given arguments.

    On execution error: fails with VimL error, updates v:errmsg.

    Parameters: ~
      • {fn}    Function to call
      • {args}  Function arguments packed in an Array

    Return: ~
        Result of the function call

### <a id="nvim_command()" class="section-title" href="#nvim_command()">nvim_command({command})</a>
    Executes an Ex command.

    On execution error: fails with VimL error, updates v:errmsg.

    Prefer using |nvim_cmd()| or |nvim_exec()| over this. To evaluate multiple
    lines of Vim script or an Ex command directly, use |nvim_exec()|. To
    construct an Ex command using a structured format and then execute it, use
    |nvim_cmd()|. To modify an Ex command before evaluating it, use
    |nvim_parse_cmd()| in conjunction with |nvim_cmd()|.

    Parameters: ~
      • {command}  Ex command string

### <a id="nvim_eval()" class="section-title" href="#nvim_eval()">nvim_eval({expr})</a>
    Evaluates a VimL [expression](undefined#expression). Dictionaries and Lists are recursively
    expanded.

    On execution error: fails with VimL error, updates v:errmsg.

    Parameters: ~
      • {expr}  VimL expression string

    Return: ~
        Evaluation result or expanded object

### <a id="nvim_exec()" class="section-title" href="#nvim_exec()">nvim_exec({src}, {output})</a>
    Executes Vimscript (multiline block of Ex commands), like anonymous
    |:source|.

    Unlike |nvim_command()| this function supports heredocs, script-scope
    (s:), etc.

    On execution error: fails with VimL error, updates v:errmsg.

    Parameters: ~
      • {src}     Vimscript code
      • {output}  Capture and return all (non-error, non-shell |:!|) output

    Return: ~
        Output (non-error, non-shell |:!|) if `output` is true, else empty
        string.

    See also: ~
        |execute()|
        |nvim_command()|
        |nvim_cmd()|

### <a id="nvim_parse_expression()" class="section-title" href="#nvim_parse_expression()">Note:</a>
nvim_parse_expression({expr}, {flags}, {highlight})
    Parse a VimL expression.

    Attributes: ~
        [api-fast](undefined#api-fast)

    Parameters: ~
      • {expr}       Expression to parse. Always treated as a single line.
      • {flags}      Flags:
                     • "m" if multiple expressions in a row are allowed (only
                       the first one will be parsed),
                     • "E" if EOC tokens are not allowed (determines whether
                       they will stop parsing process or be recognized as an
                       operator/space, though also yielding an error).
                     • "l" when needing to start parsing with lvalues for
                       ":let" or ":for". Common flag sets:
                     • "m" to parse like for ":echo".
                     • "E" to parse like for "<C-r>=".
                     • empty string for ":call".
                     • "lm" to parse for ":let".
      • {highlight}  If true, return value will also include "highlight" key
                     containing array of 4-tuples (arrays) (Integer, Integer,
                     Integer, String), where first three numbers define the
                     highlighted region and represent line, starting column
                     and ending column (latter exclusive: one should highlight
                     region [start_col, end_col)).

    Return: ~

        • AST: top-level dictionary with these keys:
          • "error": Dictionary with error, present only if parser saw some
            error. Contains the following keys:
            • "message": String, error message in printf format, translated.
### <a id="Must contain exactly one "%.s"." class="section-title" href="#Must contain exactly one "%.s".">Note:</a>
            • "arg": String, error message argument.

          • "len": Amount of bytes successfully parsed. With flags equal to ""
            that should be equal to the length of expr string. (“Successfully
            parsed” here means “participated in AST creation”, not “till the
            first error”.)
          • "ast": AST, either nil or a dictionary with these keys:
            • "type": node type, one of the value names from ExprASTNodeType
              stringified without "kExprNode" prefix.
            • "start": a pair [line, column] describing where node is
              "started" where "line" is always 0 (will not be 0 if you will be
              using nvim_parse_viml() on e.g. ":let", but that is not present
              yet). Both elements are Integers.
            • "len": “length” of the node. This and "start" are there for
              debugging purposes primary (debugging parser and providing debug
              information).
            • "children": a list of nodes described in top/"ast". There always
              is zero, one or two children, key will not be present if node
              has no children. Maximum number of children may be found in
              node_maxchildren array.

        • Local values (present only for certain nodes):
          • "scope": a single Integer, specifies scope for "Option" and
            "PlainIdentifier" nodes. For "Option" it is one of ExprOptScope
            values, for "PlainIdentifier" it is one of ExprVarScope values.
          • "ident": identifier (without scope, if any), present for "Option",
            "PlainIdentifier", "PlainKey" and "Environment" nodes.
          • "name": Integer, register name (one character) or -1. Only present
            for "Register" nodes.
          • "cmp_type": String, comparison type, one of the value names from
            ExprComparisonType, stringified without "kExprCmp" prefix. Only
            present for "Comparison" nodes.
          • "ccs_strategy": String, case comparison strategy, one of the value
            names from ExprCaseCompareStrategy, stringified without
            "kCCStrategy" prefix. Only present for "Comparison" nodes.
          • "augmentation": String, augmentation type for "Assignment" nodes.
            Is either an empty string, "Add", "Subtract" or "Concat" for "=",
            "+=", "-=" or ".=" respectively.
          • "invert": Boolean, true if result of comparison needs to be
            inverted. Only present for "Comparison" nodes.
          • "ivalue": Integer, integer value for "Integer" nodes.
          • "fvalue": Float, floating-point value for "Float" nodes.
          • "svalue": String, value for "SingleQuotedString" and
            "DoubleQuotedString" nodes.


## <a id="api-command" class="section-title" href="#api-command">Command Functions</a> 

### <a id="nvim_buf_create_user_command()" class="section-title" href="#nvim_buf_create_user_command()">Note:</a>
nvim_buf_create_user_command({buffer}, {name}, {command}, {*opts})
    Create a new user command [user-commands](/neovim-docs-web/en/vim/map#user-commands) in the given buffer.

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer.

    See also: ~
        nvim_create_user_command

### <a id="nvim_buf_del_user_command()" class="section-title" href="#nvim_buf_del_user_command()">Note:</a>
nvim_buf_del_user_command({buffer}, {name})
    Delete a buffer-local user-defined command.

    Only commands created with |:command-buffer| or
    |nvim_buf_create_user_command()| can be deleted with this function.

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer.
      • {name}    Name of the command to delete.

### <a id="nvim_buf_get_commands()" class="section-title" href="#nvim_buf_get_commands()">nvim_buf_get_commands({buffer}, {*opts})</a>
    Gets a map of buffer-local [user-commands](/neovim-docs-web/en/vim/map#user-commands).

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {opts}    Optional parameters. Currently not used.

    Return: ~
        Map of maps describing commands.

### <a id="nvim_cmd()" class="section-title" href="#nvim_cmd()">nvim_cmd({*cmd}, {*opts})</a>
    Executes an Ex command.

    Unlike |nvim_command()| this command takes a structured Dictionary instead
    of a String. This allows for easier construction and manipulation of an Ex
    command. This also allows for things such as having spaces inside a
    command argument, expanding filenames in a command that otherwise doesn't
    expand filenames, etc. Command arguments may also be Number, Boolean or
    String.

    The first argument may also be used instead of count for commands that
    support it in order to make their usage simpler with |vim.cmd()|. For
    example, instead of `vim.cmd.bdelete{ count = 2 }`, you may do
    `vim.cmd.bdelete(2)`.

    On execution error: fails with VimL error, updates v:errmsg.

    Parameters: ~
      • {cmd}   Command to execute. Must be a Dictionary that can contain the
                same values as the return value of |nvim_parse_cmd()| except
                "addr", "nargs" and "nextcmd" which are ignored if provided.
                All values except for "cmd" are optional.
      • {opts}  Optional parameters.
                • output: (boolean, default false) Whether to return command
                  output.

    Return: ~
        Command output (non-error, non-shell |:!|) if `output` is true, else
        empty string.

    See also: ~
        |nvim_exec()|
        |nvim_command()|

### <a id="nvim_create_user_command()" class="section-title" href="#nvim_create_user_command()">Note:</a>
nvim_create_user_command({name}, {command}, {*opts})
    Create a new user command [user-commands](/neovim-docs-web/en/vim/map#user-commands)

    {name} is the name of the new command. The name must begin with an
    uppercase letter.

    {command} is the replacement text or Lua function to execute.

    Example:
```       :call nvim_create_user_command('SayHello', 'echo "Hello world!"', {})
       :SayHello
       Hello world!
```


    Parameters: ~
      • {name}     Name of the new user command. Must begin with an uppercase
                   letter.
      • {command}  Replacement command to execute when this user command is
                   executed. When called from Lua, the command can also be a
                   Lua function. The function is called with a single table
                   argument that contains the following keys:
                   • args: (string) The args passed to the command, if any
                     |<args>|
                   • fargs: (table) The args split by unescaped whitespace
                     (when more than one argument is allowed), if any
                     |<f-args>|
                   • bang: (boolean) "true" if the command was executed with a
                     ! modifier |<bang>|
                   • line1: (number) The starting line of the command range
                     |<line1>|
                   • line2: (number) The final line of the command range
                     |<line2>|
                   • range: (number) The number of items in the command range:
                     0, 1, or 2 |<range>|
                   • count: (number) Any count supplied |<count>|
                   • reg: (string) The optional register, if specified |<reg>|
                   • mods: (string) Command modifiers, if any |<mods>|
                   • smods: (table) Command modifiers in a structured format.
                     Has the same structure as the "mods" key of
                     |nvim_parse_cmd()|.
      • {opts}     Optional command attributes. See [command-attributes](undefined#command-attributes) for
                   more details. To use boolean attributes (such as
                   |:command-bang| or |:command-bar|) set the value to "true".
                   In addition to the string options listed in
                   |:command-complete|, the "complete" key also accepts a Lua
                   function which works like the "customlist" completion mode
                   |:command-completion-customlist|. Additional parameters:
                   • desc: (string) Used for listing the command when a Lua
                     function is used for {command}.
                   • force: (boolean, default true) Override any previous
                     definition.
                   • preview: (function) Preview callback for 'inccommand'
                     |:command-preview|

### <a id="nvim_del_user_command()" class="section-title" href="#nvim_del_user_command()">nvim_del_user_command({name})</a>
    Delete a user-defined command.

    Parameters: ~
      • {name}  Name of the command to delete.

### <a id="nvim_get_commands()" class="section-title" href="#nvim_get_commands()">nvim_get_commands({*opts})</a>
    Gets a map of global (non-buffer-local) Ex commands.

    Currently only [user-commands](/neovim-docs-web/en/vim/map#user-commands) are supported, not builtin Ex commands.

    Parameters: ~
      • {opts}  Optional parameters. Currently only supports {"builtin":false}

    Return: ~
        Map of maps describing commands.

### <a id="nvim_parse_cmd()" class="section-title" href="#nvim_parse_cmd()">nvim_parse_cmd({str}, {opts})</a>
    Parse command line.

    Doesn't check the validity of command arguments.

    Attributes: ~
        [api-fast](undefined#api-fast)

    Parameters: ~
      • {str}   Command line string to parse. Cannot contain "\n".
      • {opts}  Optional parameters. Reserved for future use.

    Return: ~
        Dictionary containing command information, with these keys:
        • cmd: (string) Command name.
        • range: (array) (optional) Command range (|<line1>| |<line2>|).
          Omitted if command doesn't accept a range. Otherwise, has no
          elements if no range was specified, one element if only a single
          range item was specified, or two elements if both range items were
          specified.
        • count: (number) (optional) Command |<count>|. Omitted if command
          cannot take a count.
        • reg: (string) (optional) Command |<register>|. Omitted if command
          cannot take a register.
        • bang: (boolean) Whether command contains a |<bang>| (!) modifier.
        • args: (array) Command arguments.
        • addr: (string) Value of |:command-addr|. Uses short name.
        • nargs: (string) Value of |:command-nargs|.
        • nextcmd: (string) Next command if there are multiple commands
          separated by a |:bar|. Empty if there isn't a next command.
        • magic: (dictionary) Which characters have special meaning in the
          command arguments.
          • file: (boolean) The command expands filenames. Which means
            characters such as "%", "#" and wildcards are expanded.
          • bar: (boolean) The "|" character is treated as a command separator
            and the double quote character (") is treated as the start of a
            comment.

        • mods: (dictionary) |:command-modifiers|.
          • filter: (dictionary) |:filter|.
            • pattern: (string) Filter pattern. Empty string if there is no
              filter.
            • force: (boolean) Whether filter is inverted or not.

          • silent: (boolean) |:silent|.
          • emsg_silent: (boolean) |:silent!|.
          • unsilent: (boolean) |:unsilent|.
          • sandbox: (boolean) |:sandbox|.
          • noautocmd: (boolean) |:noautocmd|.
          • browse: (boolean) |:browse|.
          • confirm: (boolean) |:confirm|.
          • hide: (boolean) |:hide|.
          • horizontal: (boolean) |:horizontal|.
          • keepalt: (boolean) |:keepalt|.
          • keepjumps: (boolean) |:keepjumps|.
          • keepmarks: (boolean) |:keepmarks|.
          • keeppatterns: (boolean) |:keeppatterns|.
          • lockmarks: (boolean) |:lockmarks|.
          • noswapfile: (boolean) |:noswapfile|.
          • tab: (integer) |:tab|. -1 when omitted.
          • verbose: (integer) |:verbose|. -1 when omitted.
          • vertical: (boolean) |:vertical|.
          • split: (string) Split modifier string, is an empty string when
            there's no split modifier. If there is a split modifier it can be
            one of:
            • "aboveleft": |:aboveleft|.
            • "belowright": |:belowright|.
            • "topleft": |:topleft|.
            • "botright": |:botright|.


## <a id="api-options" class="section-title" href="#api-options">Options Functions</a> 

### <a id="nvim_buf_get_option()" class="section-title" href="#nvim_buf_get_option()">nvim_buf_get_option({buffer}, {name})</a>
    Gets a buffer option value

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {name}    Option name

    Return: ~
        Option value

### <a id="nvim_buf_set_option()" class="section-title" href="#nvim_buf_set_option()">nvim_buf_set_option({buffer}, {name}, {value})</a>
    Sets a buffer option value. Passing `nil` as value deletes the option
    (only works if there's a global fallback)

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {name}    Option name
      • {value}   Option value

### <a id="nvim_get_all_options_info()" class="section-title" href="#nvim_get_all_options_info()">nvim_get_all_options_info()</a>
    Gets the option information for all options.

    The dictionary has the full option names as keys and option metadata
    dictionaries as detailed at |nvim_get_option_info()|.

    Return: ~
        dictionary of all options

### <a id="nvim_get_option()" class="section-title" href="#nvim_get_option()">nvim_get_option({name})</a>
    Gets the global value of an option.

    Parameters: ~
      • {name}  Option name

    Return: ~
        Option value (global)

### <a id="nvim_get_option_info()" class="section-title" href="#nvim_get_option_info()">nvim_get_option_info({name})</a>
    Gets the option information for one option

    Resulting dictionary has keys:
    • name: Name of the option (like 'filetype')
    • shortname: Shortened name of the option (like 'ft')
    • type: type of option ("string", "number" or "boolean")
    • default: The default value for the option
    • was_set: Whether the option was set.
    • last_set_sid: Last set script id (if any)
    • last_set_linenr: line number where option was set
    • last_set_chan: Channel where option was set (0 for local)
    • scope: one of "global", "win", or "buf"
    • global_local: whether win or buf option has a global value
    • commalist: List of comma separated values
    • flaglist: List of single char flags

    Parameters: ~
      • {name}  Option name

    Return: ~
        Option Information

### <a id="nvim_get_option_value()" class="section-title" href="#nvim_get_option_value()">nvim_get_option_value({name}, {*opts})</a>
    Gets the value of an option. The behavior of this function matches that of
    |:set|: the local value of an option is returned if it exists; otherwise,
    the global value is returned. Local values always correspond to the
    current buffer or window, unless "buf" or "win" is set in {opts}.

    Parameters: ~
      • {name}  Option name
      • {opts}  Optional parameters
                • scope: One of "global" or "local". Analogous to |:setglobal|
                  and |:setlocal|, respectively.
                • win: [window-ID](undefined#window-ID). Used for getting window local options.
                • buf: Buffer number. Used for getting buffer local options.
                  Implies {scope} is "local".

    Return: ~
        Option value

### <a id="nvim_set_option()" class="section-title" href="#nvim_set_option()">nvim_set_option({name}, {value})</a>
    Sets the global value of an option.

    Parameters: ~
      • {name}   Option name
      • {value}  New option value

### <a id="nvim_set_option_value()" class="section-title" href="#nvim_set_option_value()">Note:</a>
nvim_set_option_value({name}, {value}, {*opts})
    Sets the value of an option. The behavior of this function matches that of
    |:set|: for global-local options, both the global and local value are set
    unless otherwise specified with {scope}.

    Note the options {win} and {buf} cannot be used together.

    Parameters: ~
      • {name}   Option name
      • {value}  New option value
      • {opts}   Optional parameters
                 • scope: One of "global" or "local". Analogous to
                   |:setglobal| and |:setlocal|, respectively.
                 • win: [window-ID](undefined#window-ID). Used for setting window local option.
                 • buf: Buffer number. Used for setting buffer local option.

### <a id="nvim_win_get_option()" class="section-title" href="#nvim_win_get_option()">nvim_win_get_option({window}, {name})</a>
    Gets a window option value

    Parameters: ~
      • {window}  Window handle, or 0 for current window
      • {name}    Option name

    Return: ~
        Option value

### <a id="nvim_win_set_option()" class="section-title" href="#nvim_win_set_option()">nvim_win_set_option({window}, {name}, {value})</a>
    Sets a window option value. Passing `nil` as value deletes the option
    (only works if there's a global fallback)

    Parameters: ~
      • {window}  Window handle, or 0 for current window
      • {name}    Option name
      • {value}   Option value


## <a id="api-buffer" class="section-title" href="#api-buffer">Buffer Functions</a> 

For more information on buffers, see [buffers](undefined#buffers).

Unloaded Buffers:~

Buffers may be unloaded by the |:bunload| command or the buffer's
|'bufhidden'| option. When a buffer is unloaded its file contents are
freed from memory and vim cannot operate on the buffer lines until it is
reloaded (usually by opening the buffer again in a new window). API
methods such as |nvim_buf_get_lines()| and |nvim_buf_line_count()| will be
affected.

You can use |nvim_buf_is_loaded()| or |nvim_buf_line_count()| to check
whether a buffer is loaded.

### <a id="nvim_buf_attach()" class="section-title" href="#nvim_buf_attach()">nvim_buf_attach({buffer}, {send_buffer}, {opts})</a>
    Activates buffer-update events on a channel, or as Lua callbacks.

    Example (Lua): capture buffer updates in a global `events` variable (use "print(vim.inspect(events))" to see its contents):
```      events = {}
      vim.api.nvim_buf_attach(0, false, {
        on_lines=function(...) table.insert(events, {...}) end})
```


    Parameters: ~
      • {buffer}       Buffer handle, or 0 for current buffer
      • {send_buffer}  True if the initial notification should contain the
                       whole buffer: first notification will be
                       `nvim_buf_lines_event`. Else the first notification
                       will be `nvim_buf_changedtick_event`. Not for Lua
                       callbacks.
      • {opts}         Optional parameters.
                       • on_lines: Lua callback invoked on change. Return `true` to detach. Args:
                         • the string "lines"
                         • buffer handle
                         • b:changedtick
                         • first line that changed (zero-indexed)
                         • last line that was changed
                         • last line in the updated range
                         • byte count of previous contents
                         • deleted_codepoints (if `utf_sizes` is true)
                         • deleted_codeunits (if `utf_sizes` is true)

                       • on_bytes: lua callback invoked on change. This
                         callback receives more granular information about the
                         change compared to on_lines. Return `true` to detach. Args:
                         • the string "bytes"
                         • buffer handle
                         • b:changedtick
                         • start row of the changed text (zero-indexed)
                         • start column of the changed text
                         • byte offset of the changed text (from the start of
                           the buffer)
                         • old end row of the changed text
                         • old end column of the changed text
                         • old end byte length of the changed text
                         • new end row of the changed text
                         • new end column of the changed text
                         • new end byte length of the changed text

                       • on_changedtick: Lua callback invoked on changedtick
                         increment without text change. Args:
                         • the string "changedtick"
                         • buffer handle
                         • b:changedtick

                       • on_detach: Lua callback invoked on detach. Args:
                         • the string "detach"
                         • buffer handle

                       • on_reload: Lua callback invoked on reload. The entire
                         buffer content should be considered changed. Args:
                         • the string "reload"
                         • buffer handle

                       • utf_sizes: include UTF-32 and UTF-16 size of the
                         replaced region, as args to `on_lines`.
                       • preview: also attach to command preview (i.e.
                         'inccommand') events.

    Return: ~
        False if attach failed (invalid parameter, or buffer isn't loaded);
        otherwise True. TODO: LUA_API_NO_EVAL

    See also: ~
        |nvim_buf_detach()|
        [api-buffer-updates-lua](undefined#api-buffer-updates-lua)

### <a id="nvim_buf_call()" class="section-title" href="#nvim_buf_call()">nvim_buf_call({buffer}, {fun})</a>
    call a function with buffer as temporary current buffer

    This temporarily switches current buffer to "buffer". If the current
    window already shows "buffer", the window is not switched If a window
    inside the current tabpage (including a float) already shows the buffer
    One of these windows will be set as current window temporarily. Otherwise
    a temporary scratch window (called the "autocmd window" for historical
    reasons) will be used.

    This is useful e.g. to call vimL functions that only work with the current
    buffer/window currently, like |termopen()|.

    Attributes: ~
        Lua |vim.api| only

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {fun}     Function to call inside the buffer (currently lua callable
                  only)

    Return: ~
        Return value of function. NB: will deepcopy lua values currently, use
        upvalues to send lua references in and out.

### <a id="nvim_buf_del_keymap()" class="section-title" href="#nvim_buf_del_keymap()">nvim_buf_del_keymap({buffer}, {mode}, {lhs})</a>
    Unmaps a buffer-local [mapping](undefined#mapping) for the given mode.

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer

    See also: ~
        |nvim_del_keymap()|

### <a id="nvim_buf_del_mark()" class="section-title" href="#nvim_buf_del_mark()">nvim_buf_del_mark({buffer}, {name})</a>
    Deletes a named mark in the buffer. See [mark-motions](undefined#mark-motions).

    Note:
        only deletes marks set in the buffer, if the mark is not set in the
        buffer it will return false.

    Parameters: ~
      • {buffer}  Buffer to set the mark on
      • {name}    Mark name

    Return: ~
        true if the mark was deleted, else false.

    See also: ~
        |nvim_buf_set_mark()|
        |nvim_del_mark()|

### <a id="nvim_buf_del_var()" class="section-title" href="#nvim_buf_del_var()">nvim_buf_del_var({buffer}, {name})</a>
    Removes a buffer-scoped (b:) variable

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {name}    Variable name

### <a id="nvim_buf_delete()" class="section-title" href="#nvim_buf_delete()">nvim_buf_delete({buffer}, {opts})</a>
    Deletes the buffer. See |:bwipeout|

    Attributes: ~
        not allowed when [textlock](/neovim-docs-web/en/vim/eval#textlock) is active

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {opts}    Optional parameters. Keys:
                  • force: Force deletion and ignore unsaved changes.
                  • unload: Unloaded only, do not delete. See |:bunload|

### <a id="nvim_buf_detach()" class="section-title" href="#nvim_buf_detach()">nvim_buf_detach({buffer})</a>
    Deactivates buffer-update events on the channel.

    Attributes: ~
        [RPC](undefined#RPC) only

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer

    Return: ~
        False if detach failed (because the buffer isn't loaded); otherwise
        True.

    See also: ~
        |nvim_buf_attach()|
        [api-lua-detach](undefined#api-lua-detach) for detaching Lua callbacks

### <a id="nvim_buf_get_changedtick()" class="section-title" href="#nvim_buf_get_changedtick()">nvim_buf_get_changedtick({buffer})</a>
    Gets a changed tick of a buffer

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer

    Return: ~
        `b:changedtick` value.

### <a id="nvim_buf_get_keymap()" class="section-title" href="#nvim_buf_get_keymap()">nvim_buf_get_keymap({buffer}, {mode})</a>
    Gets a list of buffer-local [mapping](undefined#mapping) definitions.

    Parameters: ~
      • {mode}    Mode short-name ("n", "i", "v", ...)
      • {buffer}  Buffer handle, or 0 for current buffer

    Return: ~
        Array of |maparg()|-like dictionaries describing mappings. The
        "buffer" key holds the associated buffer handle.

### <a id="nvim_buf_get_lines()" class="section-title" href="#nvim_buf_get_lines()">Note:</a>
nvim_buf_get_lines({buffer}, {start}, {end}, {strict_indexing})
    Gets a line-range from the buffer.

    Indexing is zero-based, end-exclusive. Negative indices are interpreted as
    length+1+index: -1 refers to the index past the end. So to get the last
    element use start=-2 and end=-1.

    Out-of-bounds indices are clamped to the nearest valid value, unless
    `strict_indexing` is set.

    Parameters: ~
      • {buffer}           Buffer handle, or 0 for current buffer
      • {start}            First line index
      • {end}              Last line index, exclusive
      • {strict_indexing}  Whether out-of-bounds should be an error.

    Return: ~
        Array of lines, or empty array for unloaded buffer.

### <a id="nvim_buf_get_mark()" class="section-title" href="#nvim_buf_get_mark()">nvim_buf_get_mark({buffer}, {name})</a>
    Returns a tuple (row,col) representing the position of the named mark. See
    [mark-motions](undefined#mark-motions).

    Marks are (1,0)-indexed. [api-indexing](undefined#api-indexing)

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {name}    Mark name

    Return: ~
        (row, col) tuple, (0, 0) if the mark is not set, or is an
        uppercase/file mark set in another buffer.

    See also: ~
        |nvim_buf_set_mark()|
        |nvim_buf_del_mark()|

### <a id="nvim_buf_get_name()" class="section-title" href="#nvim_buf_get_name()">nvim_buf_get_name({buffer})</a>
    Gets the full file name for the buffer

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer

    Return: ~
        Buffer name

### <a id="nvim_buf_get_offset()" class="section-title" href="#nvim_buf_get_offset()">nvim_buf_get_offset({buffer}, {index})</a>
    Returns the byte offset of a line (0-indexed). [api-indexing](undefined#api-indexing)

    Line 1 (index=0) has offset 0. UTF-8 bytes are counted. EOL is one byte.
    'fileformat' and 'fileencoding' are ignored. The line index just after the
    last line gives the total byte-count of the buffer. A final EOL byte is
    counted if it would be written, see 'eol'.

    Unlike |line2byte()|, throws error for out-of-bounds indexing. Returns -1
    for unloaded buffer.

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {index}   Line index

    Return: ~
        Integer byte offset, or -1 for unloaded buffer.

### <a id="nvim_buf_get_text()" class="section-title" href="#nvim_buf_get_text()">Note:</a>
nvim_buf_get_text({buffer}, {start_row}, {start_col}, {end_row}, {end_col},
                  {opts})
    Gets a range from the buffer.

    This differs from |nvim_buf_get_lines()| in that it allows retrieving only
    portions of a line.

    Indexing is zero-based. Row indices are end-inclusive, and column indices
    are end-exclusive.

    Prefer |nvim_buf_get_lines()| when retrieving entire lines.

    Parameters: ~
      • {buffer}     Buffer handle, or 0 for current buffer
      • {start_row}  First line index
      • {start_col}  Starting column (byte offset) on first line
      • {end_row}    Last line index, inclusive
      • {end_col}    Ending column (byte offset) on last line, exclusive
      • {opts}       Optional parameters. Currently unused.

    Return: ~
        Array of lines, or empty array for unloaded buffer.

### <a id="nvim_buf_get_var()" class="section-title" href="#nvim_buf_get_var()">nvim_buf_get_var({buffer}, {name})</a>
    Gets a buffer-scoped (b:) variable.

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {name}    Variable name

    Return: ~
        Variable value

### <a id="nvim_buf_is_loaded()" class="section-title" href="#nvim_buf_is_loaded()">nvim_buf_is_loaded({buffer})</a>
    Checks if a buffer is valid and loaded. See [api-buffer](/neovim-docs-web/en/neovim/api#api-buffer) for more info
    about unloaded buffers.

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer

    Return: ~
        true if the buffer is valid and loaded, false otherwise.

### <a id="nvim_buf_is_valid()" class="section-title" href="#nvim_buf_is_valid()">nvim_buf_is_valid({buffer})</a>
    Checks if a buffer is valid.

    Note:
        Even if a buffer is valid it may have been unloaded. See [api-buffer](/neovim-docs-web/en/neovim/api#api-buffer)
        for more info about unloaded buffers.

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer

    Return: ~
        true if the buffer is valid, false otherwise.

### <a id="nvim_buf_line_count()" class="section-title" href="#nvim_buf_line_count()">nvim_buf_line_count({buffer})</a>
    Returns the number of lines in the given buffer.

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer

    Return: ~
        Line count, or 0 for unloaded buffer. [api-buffer](/neovim-docs-web/en/neovim/api#api-buffer)

### <a id="nvim_buf_set_keymap()" class="section-title" href="#nvim_buf_set_keymap()">Note:</a>
nvim_buf_set_keymap({buffer}, {mode}, {lhs}, {rhs}, {*opts})
    Sets a buffer-local [mapping](undefined#mapping) for the given mode.

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer

    See also: ~
        |nvim_set_keymap()|

### <a id="nvim_buf_set_lines()" class="section-title" href="#nvim_buf_set_lines()">Note:</a>
nvim_buf_set_lines({buffer}, {start}, {end}, {strict_indexing}, {replacement})
    Sets (replaces) a line-range in the buffer.

    Indexing is zero-based, end-exclusive. Negative indices are interpreted as
    length+1+index: -1 refers to the index past the end. So to change or
    delete the last element use start=-2 and end=-1.

    To insert lines at a given index, set `start` and `end` to the same index.
    To delete a range of lines, set `replacement` to an empty array.

    Out-of-bounds indices are clamped to the nearest valid value, unless
    `strict_indexing` is set.

    Attributes: ~
        not allowed when [textlock](/neovim-docs-web/en/vim/eval#textlock) is active

    Parameters: ~
      • {buffer}           Buffer handle, or 0 for current buffer
      • {start}            First line index
      • {end}              Last line index, exclusive
      • {strict_indexing}  Whether out-of-bounds should be an error.
      • {replacement}      Array of lines to use as replacement

    See also: ~
        |nvim_buf_set_text()|

### <a id="nvim_buf_set_mark()" class="section-title" href="#nvim_buf_set_mark()">Note:</a>
nvim_buf_set_mark({buffer}, {name}, {line}, {col}, {opts})
    Sets a named mark in the given buffer, all marks are allowed
    file/uppercase, visual, last change, etc. See [mark-motions](undefined#mark-motions).

    Marks are (1,0)-indexed. [api-indexing](undefined#api-indexing)

    Note:
        Passing 0 as line deletes the mark

    Parameters: ~
      • {buffer}  Buffer to set the mark on
      • {name}    Mark name
      • {line}    Line number
      • {col}     Column/row number
      • {opts}    Optional parameters. Reserved for future use.

    Return: ~
        true if the mark was set, else false.

    See also: ~
        |nvim_buf_del_mark()|
        |nvim_buf_get_mark()|

### <a id="nvim_buf_set_name()" class="section-title" href="#nvim_buf_set_name()">nvim_buf_set_name({buffer}, {name})</a>
    Sets the full file name for a buffer

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {name}    Buffer name

### <a id="nvim_buf_set_text()" class="section-title" href="#nvim_buf_set_text()">Note:</a>
nvim_buf_set_text({buffer}, {start_row}, {start_col}, {end_row}, {end_col},
                  {replacement})
    Sets (replaces) a range in the buffer

    This is recommended over |nvim_buf_set_lines()| when only modifying parts
    of a line, as extmarks will be preserved on non-modified parts of the
    touched lines.

    Indexing is zero-based. Row indices are end-inclusive, and column indices
    are end-exclusive.

    To insert text at a given `(row, column)` location, use `start_row =
    end_row = row` and `start_col = end_col = col`. To delete the text in a
    range, use `replacement = {}`.

    Prefer |nvim_buf_set_lines()| if you are only adding or deleting entire
    lines.

    Parameters: ~
      • {buffer}       Buffer handle, or 0 for current buffer
      • {start_row}    First line index
      • {start_col}    Starting column (byte offset) on first line
      • {end_row}      Last line index, inclusive
      • {end_col}      Ending column (byte offset) on last line, exclusive
      • {replacement}  Array of lines to use as replacement

    See also: ~
        |nvim_buf_set_lines()|

### <a id="nvim_buf_set_var()" class="section-title" href="#nvim_buf_set_var()">nvim_buf_set_var({buffer}, {name}, {value})</a>
    Sets a buffer-scoped (b:) variable

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {name}    Variable name
      • {value}   Variable value


## <a id="api-extmark" class="section-title" href="#api-extmark">Extmark Functions</a> 

### <a id="nvim_buf_add_highlight()" class="section-title" href="#nvim_buf_add_highlight()">Note:</a>
nvim_buf_add_highlight({buffer}, {ns_id}, {hl_group}, {line}, {col_start},
                       {col_end})
    Adds a highlight to buffer.

    Useful for plugins that dynamically generate highlights to a buffer (like
    a semantic highlighter or linter). The function adds a single highlight to
    a buffer. Unlike |matchaddpos()| highlights follow changes to line
    numbering (as lines are inserted/removed above the highlighted line), like
    signs and marks do.

    Namespaces are used for batch deletion/updating of a set of highlights. To
    create a namespace, use |nvim_create_namespace()| which returns a
    namespace id. Pass it in to this function as `ns_id` to add highlights to
    the namespace. All highlights in the same namespace can then be cleared
    with single call to |nvim_buf_clear_namespace()|. If the highlight never
    will be deleted by an API call, pass `ns_id = -1`.

    As a shorthand, `ns_id = 0` can be used to create a new namespace for the
    highlight, the allocated id is then returned. If `hl_group` is the empty
    string no highlight is added, but a new `ns_id` is still returned. This is
    supported for backwards compatibility, new code should use
    |nvim_create_namespace()| to create a new empty namespace.

    Parameters: ~
      • {buffer}     Buffer handle, or 0 for current buffer
      • {ns_id}      namespace to use or -1 for ungrouped highlight
      • {hl_group}   Name of the highlight group to use
      • {line}       Line to highlight (zero-indexed)
      • {col_start}  Start of (byte-indexed) column range to highlight
      • {col_end}    End of (byte-indexed) column range to highlight, or -1 to
                     highlight to end of line

    Return: ~
        The ns_id that was used

### <a id="nvim_buf_clear_namespace()" class="section-title" href="#nvim_buf_clear_namespace()">Note:</a>
nvim_buf_clear_namespace({buffer}, {ns_id}, {line_start}, {line_end})
    Clears namespaced objects (highlights, extmarks, virtual text) from a
    region.

    Lines are 0-indexed. [api-indexing](undefined#api-indexing) To clear the namespace in the entire
    buffer, specify line_start=0 and line_end=-1.

    Parameters: ~
      • {buffer}      Buffer handle, or 0 for current buffer
      • {ns_id}       Namespace to clear, or -1 to clear all namespaces.
      • {line_start}  Start of range of lines to clear
      • {line_end}    End of range of lines to clear (exclusive) or -1 to
                      clear to end of buffer.

### <a id="nvim_buf_del_extmark()" class="section-title" href="#nvim_buf_del_extmark()">nvim_buf_del_extmark({buffer}, {ns_id}, {id})</a>
    Removes an extmark.

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {ns_id}   Namespace id from |nvim_create_namespace()|
      • {id}      Extmark id

    Return: ~
        true if the extmark was found, else false

### <a id="nvim_buf_get_extmark_by_id()" class="section-title" href="#nvim_buf_get_extmark_by_id()">Note:</a>
nvim_buf_get_extmark_by_id({buffer}, {ns_id}, {id}, {opts})
    Gets the position (0-indexed) of an extmark.

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {ns_id}   Namespace id from |nvim_create_namespace()|
      • {id}      Extmark id
      • {opts}    Optional parameters. Keys:
                  • details: Whether to include the details dict

    Return: ~
        0-indexed (row, col) tuple or empty list () if extmark id was absent

### <a id="nvim_buf_get_extmarks()" class="section-title" href="#nvim_buf_get_extmarks()">Note:</a>
nvim_buf_get_extmarks({buffer}, {ns_id}, {start}, {end}, {opts})
    Gets extmarks in "traversal order" from a [charwise](undefined#charwise) region defined by
    buffer positions (inclusive, 0-indexed [api-indexing](undefined#api-indexing)).

    Region can be given as (row,col) tuples, or valid extmark ids (whose
    positions define the bounds). 0 and -1 are understood as (0,0) and (-1,-1)
    respectively, thus the following are equivalent:
```    nvim_buf_get_extmarks(0, my_ns, 0, -1, {})
    nvim_buf_get_extmarks(0, my_ns, [0,0], [-1,-1], {})
```


    If `end` is less than `start`, traversal works backwards. (Useful with
    `limit`, to get the first marks prior to a given position.)

    Example:
```    local a   = vim.api
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
    print(vim.inspect(ms))
```


    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {ns_id}   Namespace id from |nvim_create_namespace()|
      • {start}   Start of range: a 0-indexed (row, col) or valid extmark id
                  (whose position defines the bound). [api-indexing](undefined#api-indexing)
      • {end}     End of range (inclusive): a 0-indexed (row, col) or valid
                  extmark id (whose position defines the bound).
                  [api-indexing](undefined#api-indexing)
      • {opts}    Optional parameters. Keys:
                  • limit: Maximum number of marks to return
                  • details Whether to include the details dict

    Return: ~
        List of [extmark_id, row, col] tuples in "traversal order".

### <a id="nvim_buf_set_extmark()" class="section-title" href="#nvim_buf_set_extmark()">Note:</a>
nvim_buf_set_extmark({buffer}, {ns_id}, {line}, {col}, {*opts})
    Creates or updates an extmark.

    By default a new extmark is created when no id is passed in, but it is
    also possible to create a new mark by passing in a previously unused id or
    move an existing mark by passing in its id. The caller must then keep
    track of existing and unused ids itself. (Useful over RPC, to avoid
    waiting for the return value.)

    Using the optional arguments, it is possible to use this to highlight a
    range of text, and also to associate virtual text to the mark.

    Parameters: ~
      • {buffer}  Buffer handle, or 0 for current buffer
      • {ns_id}   Namespace id from |nvim_create_namespace()|
      • {line}    Line where to place the mark, 0-based. [api-indexing](undefined#api-indexing)
      • {col}     Column where to place the mark, 0-based. [api-indexing](undefined#api-indexing)
      • {opts}    Optional parameters.
                  • id : id of the extmark to edit.
                  • end_row : ending line of the mark, 0-based inclusive.
                  • end_col : ending col of the mark, 0-based exclusive.
                  • hl_group : name of the highlight group used to highlight
                    this mark.
                  • hl_eol : when true, for a multiline highlight covering the
                    EOL of a line, continue the highlight for the rest of the
                    screen line (just like for diff and cursorline highlight).
                  • virt_text : virtual text to link to this mark. A list of
                    [text, highlight] tuples, each representing a text chunk
                    with specified highlight. `highlight` element can either
                    be a single highlight group, or an array of multiple
                    highlight groups that will be stacked (highest priority
                    last). A highlight group can be supplied either as a
                    string or as an integer, the latter which can be obtained
                    using |nvim_get_hl_id_by_name()|.
                  • virt_text_pos : position of virtual text. Possible values:
                    • "eol": right after eol character (default)
                    • "overlay": display over the specified column, without
                      shifting the underlying text.
                    • "right_align": display right aligned in the window.

                  • virt_text_win_col : position the virtual text at a fixed
                    window column (starting from the first text column)
                  • virt_text_hide : hide the virtual text when the background
                    text is selected or hidden due to horizontal scroll
                    'nowrap'
                  • hl_mode : control how highlights are combined with the
                    highlights of the text. Currently only affects virt_text
                    highlights, but might affect `hl_group` in later versions.
                    • "replace": only show the virt_text color. This is the
                      default
                    • "combine": combine with background text color
                    • "blend": blend with background text color.

                  • virt_lines : virtual lines to add next to this mark This
                    should be an array over lines, where each line in turn is
                    an array over [text, highlight] tuples. In general, buffer
                    and window options do not affect the display of the text.
                    In particular 'wrap' and 'linebreak' options do not take
                    effect, so the number of extra screen lines will always
                    match the size of the array. However the 'tabstop' buffer
                    option is still used for hard tabs. By default lines are
                    placed below the buffer line containing the mark.
                  • virt_lines_above: place virtual lines above instead.
                  • virt_lines_leftcol: Place extmarks in the leftmost column
                    of the window, bypassing sign and number columns.
                  • ephemeral : for use with |nvim_set_decoration_provider()|
                    callbacks. The mark will only be used for the current
                    redraw cycle, and not be permantently stored in the
                    buffer.
                  • right_gravity : boolean that indicates the direction the
                    extmark will be shifted in when new text is inserted (true
                    for right, false for left). defaults to true.
                  • end_right_gravity : boolean that indicates the direction
                    the extmark end position (if it exists) will be shifted in
                    when new text is inserted (true for right, false for
                    left). Defaults to false.
                  • priority: a priority value for the highlight group or sign
                    attribute. For example treesitter highlighting uses a
                    value of 100.
                  • strict: boolean that indicates extmark should not be
                    placed if the line or column value is past the end of the
                    buffer or end of the line respectively. Defaults to true.
                  • sign_text: string of length 1-2 used to display in the
                    sign column. Note: ranges are unsupported and decorations
                    are only applied to start_row
                  • sign_hl_group: name of the highlight group used to
                    highlight the sign column text. Note: ranges are
                    unsupported and decorations are only applied to start_row
                  • number_hl_group: name of the highlight group used to
                    highlight the number column. Note: ranges are unsupported
                    and decorations are only applied to start_row
                  • line_hl_group: name of the highlight group used to
                    highlight the whole line. Note: ranges are unsupported and
                    decorations are only applied to start_row
                  • cursorline_hl_group: name of the highlight group used to
                    highlight the line when the cursor is on the same line as
                    the mark and 'cursorline' is enabled. Note: ranges are
                    unsupported and decorations are only applied to start_row
                  • conceal: string which should be either empty or a single
                    character. Enable concealing similar to |:syn-conceal|.
                    When a character is supplied it is used as |:syn-cchar|.
                    "hl_group" is used as highlight for the cchar if provided,
                    otherwise it defaults to [hl-Conceal](undefined#hl-Conceal).
                  • spell: boolean indicating that spell checking should be
                    performed within this extmark
                  • ui_watched: boolean that indicates the mark should be
                    drawn by a UI. When set, the UI will receive win_extmark
                    events. Note: the mark is positioned by virt_text
                    attributes. Can be used together with virt_text.

    Return: ~
        Id of the created/updated extmark

### <a id="nvim_create_namespace()" class="section-title" href="#nvim_create_namespace()">nvim_create_namespace({name})</a>
### <a id="Creates a new namespace or gets an existing one." class="section-title" href="#Creates a new namespace or gets an existing one.">Note:</a>

    Namespaces are used for buffer highlights and virtual text, see
    |nvim_buf_add_highlight()| and |nvim_buf_set_extmark()|.

    Namespaces can be named or anonymous. If `name` matches an existing
    namespace, the associated id is returned. If `name` is an empty string a
    new, anonymous namespace is created.

    Parameters: ~
      • {name}  Namespace name or empty string

    Return: ~
        Namespace id

### <a id="nvim_get_namespaces()" class="section-title" href="#nvim_get_namespaces()">nvim_get_namespaces()</a>
    Gets existing, non-anonymous namespaces.

    Return: ~
        dict that maps from names to namespace ids.

### <a id="nvim_set_decoration_provider()" class="section-title" href="#nvim_set_decoration_provider()">Note:</a>
nvim_set_decoration_provider({ns_id}, {*opts})
    Set or change decoration provider for a namespace

    This is a very general purpose interface for having lua callbacks being
    triggered during the redraw code.

    The expected usage is to set extmarks for the currently redrawn buffer.
    |nvim_buf_set_extmark()| can be called to add marks on a per-window or
    per-lines basis. Use the `ephemeral` key to only use the mark for the
    current screen redraw (the callback will be called again for the next
    redraw ).

    Note: this function should not be called often. Rather, the callbacks
    themselves can be used to throttle unneeded callbacks. the `on_start`
    callback can return `false` to disable the provider until the next redraw.
    Similarly, return `false` in `on_win` will skip the `on_lines` calls for
    that window (but any extmarks set in `on_win` will still be used). A
    plugin managing multiple sources of decoration should ideally only set one
    provider, and merge the sources internally. You can use multiple `ns_id`
    for the extmarks set/modified inside the callback anyway.

    Note: doing anything other than setting extmarks is considered
    experimental. Doing things like changing options are not expliticly
    forbidden, but is likely to have unexpected consequences (such as 100% CPU
    consumption). doing `vim.rpcnotify` should be OK, but `vim.rpcrequest` is
    quite dubious for the moment.

    Attributes: ~
        Lua |vim.api| only

    Parameters: ~
      • {ns_id}  Namespace id from |nvim_create_namespace()|
      • {opts}   Table of callbacks:
                 • on_start: called first on each screen redraw ["start",
                   tick]
                 • on_buf: called for each buffer being redrawn (before window
                   callbacks) ["buf", bufnr, tick]
                 • on_win: called when starting to redraw a specific window.
                   ["win", winid, bufnr, topline, botline_guess]
                 • on_line: called for each buffer line being redrawn. (The
                   interaction with fold lines is subject to change) ["win",
                   winid, bufnr, row]
                 • on_end: called at the end of a redraw cycle ["end", tick]


## <a id="api-window" class="section-title" href="#api-window">Window Functions</a> 

### <a id="nvim_win_call()" class="section-title" href="#nvim_win_call()">nvim_win_call({window}, {fun})</a>
    Calls a function with window as temporary current window.

    Attributes: ~
        Lua |vim.api| only

    Parameters: ~
      • {window}  Window handle, or 0 for current window
      • {fun}     Function to call inside the window (currently lua callable
                  only)

    Return: ~
        Return value of function. NB: will deepcopy lua values currently, use
        upvalues to send lua references in and out.

    See also: ~
        |win_execute()|
        |nvim_buf_call()|

### <a id="nvim_win_close()" class="section-title" href="#nvim_win_close()">nvim_win_close({window}, {force})</a>
    Closes the window (like |:close| with a [window-ID](undefined#window-ID)).

    Attributes: ~
        not allowed when [textlock](/neovim-docs-web/en/vim/eval#textlock) is active

    Parameters: ~
      • {window}  Window handle, or 0 for current window
      • {force}   Behave like `:close!` The last window of a buffer with
                  unwritten changes can be closed. The buffer will become
                  hidden, even if 'hidden' is not set.

### <a id="nvim_win_del_var()" class="section-title" href="#nvim_win_del_var()">nvim_win_del_var({window}, {name})</a>
    Removes a window-scoped (w:) variable

    Parameters: ~
      • {window}  Window handle, or 0 for current window
      • {name}    Variable name

### <a id="nvim_win_get_buf()" class="section-title" href="#nvim_win_get_buf()">nvim_win_get_buf({window})</a>
    Gets the current buffer in a window

    Parameters: ~
      • {window}  Window handle, or 0 for current window

    Return: ~
        Buffer handle

### <a id="nvim_win_get_cursor()" class="section-title" href="#nvim_win_get_cursor()">nvim_win_get_cursor({window})</a>
    Gets the (1,0)-indexed, buffer-relative cursor position for a given window
    (different windows showing the same buffer have independent cursor
    positions). [api-indexing](undefined#api-indexing)

    Parameters: ~
      • {window}  Window handle, or 0 for current window

    Return: ~
        (row, col) tuple

### <a id="nvim_win_get_height()" class="section-title" href="#nvim_win_get_height()">nvim_win_get_height({window})</a>
    Gets the window height

    Parameters: ~
      • {window}  Window handle, or 0 for current window

    Return: ~
        Height as a count of rows

### <a id="nvim_win_get_number()" class="section-title" href="#nvim_win_get_number()">nvim_win_get_number({window})</a>
    Gets the window number

    Parameters: ~
      • {window}  Window handle, or 0 for current window

    Return: ~
        Window number

### <a id="nvim_win_get_position()" class="section-title" href="#nvim_win_get_position()">nvim_win_get_position({window})</a>
    Gets the window position in display cells. First position is zero.

    Parameters: ~
      • {window}  Window handle, or 0 for current window

    Return: ~
        (row, col) tuple with the window position

### <a id="nvim_win_get_tabpage()" class="section-title" href="#nvim_win_get_tabpage()">nvim_win_get_tabpage({window})</a>
    Gets the window tabpage

    Parameters: ~
      • {window}  Window handle, or 0 for current window

    Return: ~
        Tabpage that contains the window

### <a id="nvim_win_get_var()" class="section-title" href="#nvim_win_get_var()">nvim_win_get_var({window}, {name})</a>
    Gets a window-scoped (w:) variable

    Parameters: ~
      • {window}  Window handle, or 0 for current window
      • {name}    Variable name

    Return: ~
        Variable value

### <a id="nvim_win_get_width()" class="section-title" href="#nvim_win_get_width()">nvim_win_get_width({window})</a>
    Gets the window width

    Parameters: ~
      • {window}  Window handle, or 0 for current window

    Return: ~
        Width as a count of columns

### <a id="nvim_win_hide()" class="section-title" href="#nvim_win_hide()">nvim_win_hide({window})</a>
    Closes the window and hide the buffer it contains (like |:hide| with a
    [window-ID](undefined#window-ID)).

    Like |:hide| the buffer becomes hidden unless another window is editing
    it, or 'bufhidden' is `unload`, `delete` or `wipe` as opposed to |:close|
    or |nvim_win_close()|, which will close the buffer.

    Attributes: ~
        not allowed when [textlock](/neovim-docs-web/en/vim/eval#textlock) is active

    Parameters: ~
      • {window}  Window handle, or 0 for current window

### <a id="nvim_win_is_valid()" class="section-title" href="#nvim_win_is_valid()">nvim_win_is_valid({window})</a>
    Checks if a window is valid

    Parameters: ~
      • {window}  Window handle, or 0 for current window

    Return: ~
        true if the window is valid, false otherwise

### <a id="nvim_win_set_buf()" class="section-title" href="#nvim_win_set_buf()">nvim_win_set_buf({window}, {buffer})</a>
    Sets the current buffer in a window, without side effects

    Attributes: ~
        not allowed when [textlock](/neovim-docs-web/en/vim/eval#textlock) is active

    Parameters: ~
      • {window}  Window handle, or 0 for current window
      • {buffer}  Buffer handle

### <a id="nvim_win_set_cursor()" class="section-title" href="#nvim_win_set_cursor()">nvim_win_set_cursor({window}, {pos})</a>
    Sets the (1,0)-indexed cursor position in the window. [api-indexing](undefined#api-indexing) This
    scrolls the window even if it is not the current one.

    Parameters: ~
      • {window}  Window handle, or 0 for current window
      • {pos}     (row, col) tuple representing the new position

### <a id="nvim_win_set_height()" class="section-title" href="#nvim_win_set_height()">nvim_win_set_height({window}, {height})</a>
    Sets the window height.

    Parameters: ~
      • {window}  Window handle, or 0 for current window
      • {height}  Height as a count of rows

### <a id="nvim_win_set_hl_ns()" class="section-title" href="#nvim_win_set_hl_ns()">nvim_win_set_hl_ns({window}, {ns_id})</a>
    Set highlight namespace for a window. This will use highlights defined in
    this namespace, but fall back to global highlights (ns=0) when missing.

    This takes precedence over the 'winhighlight' option.

    Parameters: ~
      • {ns_id}  the namespace to use

### <a id="nvim_win_set_var()" class="section-title" href="#nvim_win_set_var()">nvim_win_set_var({window}, {name}, {value})</a>
    Sets a window-scoped (w:) variable

    Parameters: ~
      • {window}  Window handle, or 0 for current window
      • {name}    Variable name
      • {value}   Variable value

### <a id="nvim_win_set_width()" class="section-title" href="#nvim_win_set_width()">nvim_win_set_width({window}, {width})</a>
    Sets the window width. This will only succeed if the screen is split
    vertically.

    Parameters: ~
      • {window}  Window handle, or 0 for current window
      • {width}   Width as a count of columns


## <a id="api-win_config" class="section-title" href="#api-win_config">Win_Config Functions</a> 

### <a id="nvim_open_win()" class="section-title" href="#nvim_open_win()">nvim_open_win({buffer}, {enter}, {*config})</a>
    Open a new window.

    Currently this is used to open floating and external windows. Floats are
    windows that are drawn above the split layout, at some anchor position in
    some other window. Floats can be drawn internally or by external GUI with
    the [ui-multigrid](/neovim-docs-web/en/neovim/ui#ui-multigrid) extension. External windows are only supported with
    multigrid GUIs, and are displayed as separate top-level windows.

    For a general overview of floats, see [api-floatwin](/neovim-docs-web/en/neovim/api#api-floatwin).

    Exactly one of `external` and `relative` must be specified. The `width`
    and `height` of the new window must be specified.

    With relative=editor (row=0,col=0) refers to the top-left corner of the
    screen-grid and (row=Lines-1,col=Columns-1) refers to the bottom-right
    corner. Fractional values are allowed, but the builtin implementation
    (used by non-multigrid UIs) will always round down to nearest integer.

    Out-of-bounds values, and configurations that make the float not fit
    inside the main editor, are allowed. The builtin implementation truncates
    values so floats are fully within the main screen grid. External GUIs
    could let floats hover outside of the main window like a tooltip, but this
    should not be used to specify arbitrary WM screen positions.

    Example (Lua): window-relative float
```        vim.api.nvim_open_win(0, false,
          {relative='win', row=3, col=3, width=12, height=3})
```


    Example (Lua): buffer-relative float (travels as buffer is scrolled)
```        vim.api.nvim_open_win(0, false,
          {relative='win', width=12, height=3, bufpos={100,10}})
```


    Attributes: ~
        not allowed when [textlock](/neovim-docs-web/en/vim/eval#textlock) is active

    Parameters: ~
      • {buffer}  Buffer to display, or 0 for current buffer
      • {enter}   Enter the window (make it the current window)
      • {config}  Map defining the window configuration. Keys:
                  • relative: Sets the window layout to "floating", placed at
                    (row,col) coordinates relative to:
                    • "editor" The global editor grid
                    • "win" Window given by the `win` field, or current
                      window.
                    • "cursor" Cursor position in current window.

                  • win: [window-ID](undefined#window-ID) for relative="win".
                  • anchor: Decides which corner of the float to place at
                    (row,col):
                    • "NW" northwest (default)
                    • "NE" northeast
                    • "SW" southwest
                    • "SE" southeast

                  • width: Window width (in character cells). Minimum of 1.
                  • height: Window height (in character cells). Minimum of 1.
                  • bufpos: Places float relative to buffer text (only when
                    relative="win"). Takes a tuple of zero-indexed [line,
                    column]. `row` and `col` if given are applied relative to this position, else they
                    default to:
                    • `row=1` and `col=0` if `anchor` is "NW" or "NE"
                    • `row=0` and `col=0` if `anchor` is "SW" or "SE" (thus
                      like a tooltip near the buffer text).

                  • row: Row position in units of "screen cell height", may be
                    fractional.
                  • col: Column position in units of "screen cell width", may
                    be fractional.
                  • focusable: Enable focus by user actions (wincmds, mouse
                    events). Defaults to true. Non-focusable windows can be
                    entered by |nvim_set_current_win()|.
                  • external: GUI should display the window as an external
                    top-level window. Currently accepts no other positioning
                    configuration together with this.
                  • zindex: Stacking order. floats with higher `zindex` go on top on floats with lower indices. Must be larger
                    than zero. The following screen elements have hard-coded
                    z-indices:
                    • 100: insert completion popupmenu
                    • 200: message scrollback
                    • 250: cmdline completion popupmenu (when
                      wildoptions+=pum) The default value for floats are 50.
                      In general, values below 100 are recommended, unless
                      there is a good reason to overshadow builtin elements.

                  • style: Configure the appearance of the window. Currently
                    only takes one non-empty value:
                    • "minimal" Nvim will display the window with many UI
                      options disabled. This is useful when displaying a
                      temporary float where the text should not be edited.
                      Disables 'number', 'relativenumber', 'cursorline',
                      'cursorcolumn', 'foldcolumn', 'spell' and 'list'
                      options. 'signcolumn' is changed to `auto` and
                      'colorcolumn' is cleared. The end-of-buffer region is
                      hidden by setting `eob` flag of 'fillchars' to a space
                      char, and clearing the [hl-EndOfBuffer](undefined#hl-EndOfBuffer) region in
                      'winhighlight'.

                  • border: Style of (optional) window border. This can either
                    be a string or an array. The string values are
                    • "none": No border (default).
                    • "single": A single line box.
                    • "double": A double line box.
                    • "rounded": Like "single", but with rounded corners ("╭"
                      etc.).
                    • "solid": Adds padding by a single whitespace cell.
                    • "shadow": A drop shadow effect by blending with the
                      background.
                    • If it is an array, it should have a length of eight or
                      any divisor of eight. The array will specifify the eight
                      chars building up the border in a clockwise fashion
                      starting with the top-left corner. As an example, the
                      double box style could be specified as [ "╔", "═" ,"╗",
                      "║", "╝", "═", "╚", "║" ]. If the number of chars are
                      less than eight, they will be repeated. Thus an ASCII
                      border could be specified as [ "/", "-", "\\", "|" ], or
                      all chars the same as [ "x" ]. An empty string can be
                      used to turn off a specific border, for instance, [ "",
                      "", "", ">", "", "", "", "<" ] will only make vertical
                      borders but not horizontal ones. By default,
                      `FloatBorder` highlight is used, which links to
                      `WinSeparator` when not defined. It could also be
                      specified by character: [ {"+", "MyCorner"}, {"x",
                      "MyBorder"} ].

                  • noautocmd: If true then no buffer-related autocommand
                    events such as [BufEnter](undefined#BufEnter), [BufLeave](undefined#BufLeave) or [BufWinEnter](undefined#BufWinEnter) may
                    fire from calling this function.

    Return: ~
        Window handle, or 0 on error

### <a id="nvim_win_get_config()" class="section-title" href="#nvim_win_get_config()">nvim_win_get_config({window})</a>
    Gets window configuration.

    The returned value may be given to |nvim_open_win()|.

    `relative` is empty for normal windows.

    Parameters: ~
      • {window}  Window handle, or 0 for current window

    Return: ~
        Map defining the window configuration, see |nvim_open_win()|

### <a id="nvim_win_set_config()" class="section-title" href="#nvim_win_set_config()">nvim_win_set_config({window}, {*config})</a>
    Configures window layout. Currently only for floating and external windows
    (including changing a split window to those layouts).

    When reconfiguring a floating window, absent option keys will not be
    changed. `row`/`col` and `relative` must be reconfigured together.

    Parameters: ~
      • {window}  Window handle, or 0 for current window
      • {config}  Map defining the window configuration, see |nvim_open_win()|

    See also: ~
        |nvim_open_win()|


## <a id="api-tabpage" class="section-title" href="#api-tabpage">Tabpage Functions</a> 

### <a id="nvim_tabpage_del_var()" class="section-title" href="#nvim_tabpage_del_var()">nvim_tabpage_del_var({tabpage}, {name})</a>
    Removes a tab-scoped (t:) variable

    Parameters: ~
      • {tabpage}  Tabpage handle, or 0 for current tabpage
      • {name}     Variable name

### <a id="nvim_tabpage_get_number()" class="section-title" href="#nvim_tabpage_get_number()">nvim_tabpage_get_number({tabpage})</a>
    Gets the tabpage number

    Parameters: ~
      • {tabpage}  Tabpage handle, or 0 for current tabpage

    Return: ~
        Tabpage number

### <a id="nvim_tabpage_get_var()" class="section-title" href="#nvim_tabpage_get_var()">nvim_tabpage_get_var({tabpage}, {name})</a>
    Gets a tab-scoped (t:) variable

    Parameters: ~
      • {tabpage}  Tabpage handle, or 0 for current tabpage
      • {name}     Variable name

    Return: ~
        Variable value

### <a id="nvim_tabpage_get_win()" class="section-title" href="#nvim_tabpage_get_win()">nvim_tabpage_get_win({tabpage})</a>
    Gets the current window in a tabpage

    Parameters: ~
      • {tabpage}  Tabpage handle, or 0 for current tabpage

    Return: ~
        Window handle

### <a id="nvim_tabpage_is_valid()" class="section-title" href="#nvim_tabpage_is_valid()">nvim_tabpage_is_valid({tabpage})</a>
    Checks if a tabpage is valid

    Parameters: ~
      • {tabpage}  Tabpage handle, or 0 for current tabpage

    Return: ~
        true if the tabpage is valid, false otherwise

### <a id="nvim_tabpage_list_wins()" class="section-title" href="#nvim_tabpage_list_wins()">nvim_tabpage_list_wins({tabpage})</a>
    Gets the windows in a tabpage

    Parameters: ~
      • {tabpage}  Tabpage handle, or 0 for current tabpage

    Return: ~
        List of windows in `tabpage`

### <a id="nvim_tabpage_set_var()" class="section-title" href="#nvim_tabpage_set_var()">Note:</a>
nvim_tabpage_set_var({tabpage}, {name}, {value})
    Sets a tab-scoped (t:) variable

    Parameters: ~
      • {tabpage}  Tabpage handle, or 0 for current tabpage
      • {name}     Variable name
      • {value}    Variable value


## <a id="api-autocmd" class="section-title" href="#api-autocmd">Autocmd Functions</a> 

### <a id="nvim_clear_autocmds()" class="section-title" href="#nvim_clear_autocmds()">nvim_clear_autocmds({*opts})</a>
    Clear all autocommands that match the corresponding {opts}. To delete a
    particular autocmd, see |nvim_del_autocmd()|.

    Parameters: ~
      • {opts}  Parameters
                • event: (string|table) Examples:
                  • event: "pat1"
                  • event: { "pat1" }
                  • event: { "pat1", "pat2", "pat3" }

                • pattern: (string|table)
                  • pattern or patterns to match exactly.
### <a id="• For example, if you have `.py` as that pattern for the" class="section-title" href="#• For example, if you have `.py` as that pattern for the">Note:</a>
### <a id="autocmd, you must pass `.py` exactly to clear it." class="section-title" href="#autocmd, you must pass `.py` exactly to clear it.">Note:</a>
                      `test.py` will not match the pattern.

                  • defaults to clearing all patterns.
                  • NOTE: Cannot be used with {buffer}

                • buffer: (bufnr)
                  • clear only [autocmd-buflocal](undefined#autocmd-buflocal) autocommands.
                  • NOTE: Cannot be used with {pattern}

                • group: (string|int) The augroup name or id.
                  • NOTE: If not passed, will only delete autocmds not in any group.

### <a id="nvim_create_augroup()" class="section-title" href="#nvim_create_augroup()">nvim_create_augroup({name}, {*opts})</a>
    Create or get an autocommand group [autocmd-groups](/neovim-docs-web/en/vim/autocmd#autocmd-groups).

    To get an existing group id, do:
```        local id = vim.api.nvim_create_augroup("MyGroup", {
            clear = false
        })
```


    Parameters: ~
      • {name}  String: The name of the group
      • {opts}  Dictionary Parameters
                • clear (bool) optional: defaults to true. Clear existing
                  commands if the group already exists [autocmd-groups](/neovim-docs-web/en/vim/autocmd#autocmd-groups).

    Return: ~
        Integer id of the created group.

    See also: ~
        [autocmd-groups](/neovim-docs-web/en/vim/autocmd#autocmd-groups)

### <a id="nvim_create_autocmd()" class="section-title" href="#nvim_create_autocmd()">nvim_create_autocmd({event}, {*opts})</a>
    Create an [autocommand](undefined#autocommand)

    The API allows for two (mutually exclusive) types of actions to be
    executed when the autocommand triggers: a callback function (Lua or
    Vimscript), or a command (like regular autocommands).

    Example using callback:
```        -- Lua function
        local myluafun = function() print("This buffer enters") end

        -- Vimscript function name (as a string)
        local myvimfun = "g:MyVimFunction"

        vim.api.nvim_create_autocmd({"BufEnter", "BufWinEnter"}, {
### <a id="pattern = {".c", ".h"}," class="section-title" href="#pattern = {".c", ".h"},">Note:</a>
          callback = myluafun,  -- Or myvimfun
        })
```


    Lua functions receive a table with information about the autocmd event as
    an argument. To use a function which itself accepts another (optional)
    parameter, wrap the function in a lambda:
```    -- Lua function with an optional parameter.
    -- The autocmd callback would pass a table as argument but this
    -- function expects number|nil
    local myluafun = function(bufnr) bufnr = bufnr or vim.api.nvim_get_current_buf() end

    vim.api.nvim_create_autocmd({"BufEnter", "BufWinEnter"}, {
### <a id="pattern = {".c", ".h"}," class="section-title" href="#pattern = {".c", ".h"},">Note:</a>
      callback = function() myluafun() end,
    })
```


    Example using command:
```        vim.api.nvim_create_autocmd({"BufEnter", "BufWinEnter"}, {
### <a id="pattern = {".c", ".h"}," class="section-title" href="#pattern = {".c", ".h"},">Note:</a>
          command = "echo 'Entering a C or C++ file'",
        })
```


    Example values for pattern:
#### <a id="pattern = ".py"" class="section-title" href="#pattern = ".py"">```</a>
### <a id="pattern = { ".py", ".pyi" }" class="section-title" href="#pattern = { ".py", ".pyi" }">Note:</a>
```


    Example values for event:
```      "BufWritePre"
      {"CursorHold", "BufWritePre", "BufWritePost"}
```


    Parameters: ~
      • {event}  (string|array) The event or events to register this
                 autocommand
      • {opts}   Dictionary of autocommand options:
                 • group (string|integer) optional: the autocommand group name
                   or id to match against.
                 • pattern (string|array) optional: pattern or patterns to
                   match against [autocmd-pattern](undefined#autocmd-pattern).
                 • buffer (integer) optional: buffer number for buffer local
                   autocommands [autocmd-buflocal](undefined#autocmd-buflocal). Cannot be used with
                   {pattern}.
                 • desc (string) optional: description of the autocommand.
                 • callback (function|string) optional: if a string, the name
                   of a Vimscript function to call when this autocommand is
                   triggered. Otherwise, a Lua function which is called when
                   this autocommand is triggered. Cannot be used with
                   {command}. Lua callbacks can return true to delete the
                   autocommand; in addition, they accept a single table
                   argument with the following keys:
                   • id: (number) the autocommand id
                   • event: (string) the name of the event that triggered the
                     autocommand [autocmd-events](undefined#autocmd-events)
                   • group: (number|nil) the autocommand group id, if it
                     exists
                   • match: (string) the expanded value of |<amatch>|
                   • buf: (number) the expanded value of |<abuf>|
                   • file: (string) the expanded value of |<afile>|
                   • data: (any) arbitrary data passed to
                     |nvim_exec_autocmds()|

                 • command (string) optional: Vim command to execute on event.
                   Cannot be used with {callback}
                 • once (boolean) optional: defaults to false. Run the
                   autocommand only once [autocmd-once](undefined#autocmd-once).
                 • nested (boolean) optional: defaults to false. Run nested
                   autocommands [autocmd-nested](undefined#autocmd-nested).

    Return: ~
        Integer id of the created autocommand.

    See also: ~
        [autocommand](undefined#autocommand)
        |nvim_del_autocmd()|

### <a id="nvim_del_augroup_by_id()" class="section-title" href="#nvim_del_augroup_by_id()">nvim_del_augroup_by_id({id})</a>
    Delete an autocommand group by id.

    To get a group id one can use |nvim_get_autocmds()|.

    NOTE: behavior differs from |:augroup-delete|. When deleting a group,
    autocommands contained in this group will also be deleted and cleared.
    This group will no longer exist.

    Parameters: ~
      • {id}  Integer The id of the group.

    See also: ~
        |nvim_del_augroup_by_name()|
        |nvim_create_augroup()|

### <a id="nvim_del_augroup_by_name()" class="section-title" href="#nvim_del_augroup_by_name()">nvim_del_augroup_by_name({name})</a>
    Delete an autocommand group by name.

    NOTE: behavior differs from |:augroup-delete|. When deleting a group,
    autocommands contained in this group will also be deleted and cleared.
    This group will no longer exist.

    Parameters: ~
      • {name}  String The name of the group.

    See also: ~
        [autocmd-groups](/neovim-docs-web/en/vim/autocmd#autocmd-groups)

### <a id="nvim_del_autocmd()" class="section-title" href="#nvim_del_autocmd()">nvim_del_autocmd({id})</a>
    Delete an autocommand by id.

    NOTE: Only autocommands created via the API have an id.

    Parameters: ~
      • {id}  Integer The id returned by nvim_create_autocmd

    See also: ~
        |nvim_create_autocmd()|

### <a id="nvim_exec_autocmds()" class="section-title" href="#nvim_exec_autocmds()">nvim_exec_autocmds({event}, {*opts})</a>
    Execute all autocommands for {event} that match the corresponding {opts}
    [autocmd-execute](/neovim-docs-web/en/vim/autocmd#autocmd-execute).

    Parameters: ~
      • {event}  (String|Array) The event or events to execute
      • {opts}   Dictionary of autocommand options:
                 • group (string|integer) optional: the autocommand group name
                   or id to match against. [autocmd-groups](/neovim-docs-web/en/vim/autocmd#autocmd-groups).
### <a id="• pattern (string|array) optional: defaults to """ class="section-title" href="#• pattern (string|array) optional: defaults to """>Note:</a>
                   [autocmd-pattern](undefined#autocmd-pattern). Cannot be used with {buffer}.
                 • buffer (integer) optional: buffer number
                   [autocmd-buflocal](undefined#autocmd-buflocal). Cannot be used with {pattern}.
                 • modeline (bool) optional: defaults to true. Process the
                   modeline after the autocommands |<nomodeline>|.
                 • data (any): arbitrary data to send to the autocommand
                   callback. See |nvim_create_autocmd()| for details.

    See also: ~
        |:doautocmd|

### <a id="nvim_get_autocmds()" class="section-title" href="#nvim_get_autocmds()">nvim_get_autocmds({*opts})</a>
    Get all autocommands that match the corresponding {opts}.

    These examples will get autocommands matching ALL the given criteria:
```      -- Matches all criteria
      autocommands = vim.api.nvim_get_autocmds({
        group = "MyGroup",
        event = {"BufEnter", "BufWinEnter"},
### <a id="pattern = {".c", ".h"}" class="section-title" href="#pattern = {".c", ".h"}">Note:</a>
      })

      -- All commands from one group
      autocommands = vim.api.nvim_get_autocmds({
        group = "MyGroup",
      })
```


    NOTE: When multiple patterns or events are provided, it will find all the
    autocommands that match any combination of them.

    Parameters: ~
      • {opts}  Dictionary with at least one of the following:
                • group (string|integer): the autocommand group name or id to
                  match against.
                • event (string|array): event or events to match against
                  [autocmd-events](undefined#autocmd-events).
                • pattern (string|array): pattern or patterns to match against
                  [autocmd-pattern](undefined#autocmd-pattern). Cannot be used with {buffer}
                • buffer: Buffer number or list of buffer numbers for buffer
                  local autocommands [autocmd-buflocal](undefined#autocmd-buflocal). Cannot be used with
                  {pattern}

    Return: ~
        Array of autocommands matching the criteria, with each item containing
        the following fields:
        • id (number): the autocommand id (only when defined with the API).
        • group (integer): the autocommand group id.
        • group_name (string): the autocommand group name.
        • desc (string): the autocommand description.
        • event (string): the autocommand event.
        • command (string): the autocommand command. Note: this will be empty
          if a callback is set.
        • callback (function[string](undefined#string)nil): Lua function or name of a Vim script
          function which is executed when this autocommand is triggered.
        • once (boolean): whether the autocommand is only run once.
        • pattern (string): the autocommand pattern. If the autocommand is
          buffer local [autocmd-buffer-local](undefined#autocmd-buffer-local):
        • buflocal (boolean): true if the autocommand is buffer local.
        • buffer (number): the buffer number.


## <a id="api-ui" class="section-title" href="#api-ui">UI Functions</a> 

### <a id="nvim_ui_attach()" class="section-title" href="#nvim_ui_attach()">nvim_ui_attach({width}, {height}, {options})</a>
    Activates UI events on the channel.

    Entry point of all UI clients. Allows [--embed](undefined#--embed) to continue startup.
    Implies that the client is ready to show the UI. Adds the client to the
    list of UIs. |nvim_list_uis()|

    Note:
        If multiple UI clients are attached, the global screen dimensions
        degrade to the smallest client. E.g. if client A requests 80x40 but
        client B requests 200x100, the global screen has size 80x40.

    Attributes: ~
        [RPC](undefined#RPC) only

    Parameters: ~
      • {width}    Requested screen columns
      • {height}   Requested screen rows
      • {options}  [ui-option](undefined#ui-option) map

### <a id="nvim_ui_detach()" class="section-title" href="#nvim_ui_detach()">nvim_ui_detach()</a>
    Deactivates UI events on the channel.

    Removes the client from the list of UIs. |nvim_list_uis()|

    Attributes: ~
        [RPC](undefined#RPC) only

### <a id="nvim_ui_pum_set_bounds()" class="section-title" href="#nvim_ui_pum_set_bounds()">Note:</a>
nvim_ui_pum_set_bounds({width}, {height}, {row}, {col})
    Tells Nvim the geometry of the popupmenu, to align floating windows with
    an external popup menu.

    Note that this method is not to be confused with
    |nvim_ui_pum_set_height()|, which sets the number of visible items in the
    popup menu, while this function sets the bounding box of the popup menu,
    including visual elements such as borders and sliders. Floats need not use
    the same font size, nor be anchored to exact grid corners, so one can set
    floating-point numbers to the popup menu geometry.

    Attributes: ~
        [RPC](undefined#RPC) only

    Parameters: ~
      • {width}   Popupmenu width.
      • {height}  Popupmenu height.
      • {row}     Popupmenu row.
      • {col}     Popupmenu height.

### <a id="nvim_ui_pum_set_height()" class="section-title" href="#nvim_ui_pum_set_height()">nvim_ui_pum_set_height({height})</a>
    Tells Nvim the number of elements displaying in the popupmenu, to decide
    <PageUp> and <PageDown> movement.

    Attributes: ~
        [RPC](undefined#RPC) only

    Parameters: ~
      • {height}  Popupmenu height, must be greater than zero.

### <a id="nvim_ui_set_option()" class="section-title" href="#nvim_ui_set_option()">nvim_ui_set_option({name}, {value})</a>
    TODO: Documentation

    Attributes: ~
        [RPC](undefined#RPC) only

### <a id="nvim_ui_try_resize()" class="section-title" href="#nvim_ui_try_resize()">nvim_ui_try_resize({width}, {height})</a>
    TODO: Documentation

    Attributes: ~
        [RPC](undefined#RPC) only

### <a id="nvim_ui_try_resize_grid()" class="section-title" href="#nvim_ui_try_resize_grid()">Note:</a>
nvim_ui_try_resize_grid({grid}, {width}, {height})
    Tell Nvim to resize a grid. Triggers a grid_resize event with the
    requested grid size or the maximum size if it exceeds size limits.

    On invalid grid handle, fails with error.

    Attributes: ~
        [RPC](undefined#RPC) only

    Parameters: ~
      • {grid}    The handle of the grid to be changed.
      • {width}   The new requested width.
      • {height}  The new requested height.

 vim:tw=78:ts=8:sw=4:sts=4:et:ft=help:norl:

