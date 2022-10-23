---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="LSP" class="section-title" href="#LSP"> Lsp Txt</a> 

NVIM REFERENCE MANUAL


### <a id="lsp LSP" class="section-title" href="#lsp LSP">LSP client/framework</a>

Nvim supports the Language Server Protocol (LSP), which means it acts as
a client to LSP servers and includes a Lua framework `vim.lsp` for building
enhanced LSP tools.

https://microsoft.github.io/language-server-protocol/

LSP facilitates features like go-to-definition, find-references, hover,
completion, rename, format, refactor, etc., using semantic whole-project
analysis (unlike [ctags](#ctags)).

Type [gO](#gO) to see the table of contents.


## <a id="lsp-quickstart" class="section-title" href="#lsp-quickstart">Quickstart</a> 

Nvim provides an LSP client, but the servers are provided by third parties.
Follow these steps to get LSP features:

1. Install language servers using your package manager or by
following the upstream installation instruction.

A list of language servers is available at:

https://microsoft.github.io/language-server-protocol/implementors/servers/

2. Configure the LSP client per language server.
A minimal example:
```
vim.lsp.start({
name = 'my-server-name',
cmd = {'name-of-language-server-executable'},
root_dir = vim.fs.dirname(vim.fs.find({'setup.py', 'pyproject.toml'}, { upward = true })[1]),
})

```

See [vim.lsp.start()](#vim.lsp.start()) for details.

3. Configure keymaps and autocmds to utilize LSP features.
See [lsp-config](#lsp-config).

```

### <a id="lsp-config" class="section-title" href="#lsp-config">Note:</a>

Starting a LSP client will automatically report diagnostics via
[vim.diagnostic|. Read |vim.diagnostic.config()](#vim.diagnostic|. Read |vim.diagnostic.config()) to learn how to customize the
display.

It also sets some buffer options if the options are otherwise empty and if the
language server supports the functionality.

- 'omnifunc' is set to [vim.lsp.omnifunc()](#vim.lsp.omnifunc()). This allows to trigger completion
using [i_CTRL-X_CTRL-O](#i_CTRL-X_CTRL-O)
- 'tagfunc' is set to [vim.lsp.tagfunc()](#vim.lsp.tagfunc()). This enables features like
go-to-definition, [:tjump|, and keymaps like |CTRL-]|, |CTRL-W_]](#:tjump|, and keymaps like |CTRL-]|, |CTRL-W_]),
[CTRL-W_}](#CTRL-W_}) to utilize the language server.
- 'formatexpr' is set to [vim.lsp.formatexpr()](#vim.lsp.formatexpr()) if both 'formatprg' and
'formatexpr' are empty. This allows to format lines via [gq](#gq) if the language
server supports it.

To use other LSP features like hover, rename, etc. you can setup some
additional keymaps. It's recommended to setup them in a [LspAttach](#LspAttach) autocmd to
ensure they're only active if there is a LSP client running. An example:
```
vim.api.nvim_create_autocmd('LspAttach', {
callback = function(args)
vim.keymap.set('n', 'K', vim.lsp.buf.hover, { buffer = args.buf })
end,
})


```

The most used functions are:

- [vim.lsp.buf.hover()](#vim.lsp.buf.hover())
- [vim.lsp.buf.format()](#vim.lsp.buf.format())
- [vim.lsp.buf.references()](#vim.lsp.buf.references())
- [vim.lsp.buf.implementation()](#vim.lsp.buf.implementation())
- [vim.lsp.buf.code_action()](#vim.lsp.buf.code_action())


Not all language servers provide the same capabilities. To ensure you only set
keymaps if the language server supports a feature, you can guard the keymap
calls behind capability checks:
```
vim.api.nvim_create_autocmd('LspAttach', {
callback = function(args)
local client = vim.lsp.get_client_by_id(args.data.client_id)
if client.server_capabilities.hoverProvider then
vim.keymap.set('n', 'K', vim.lsp.buf.hover, { buffer = args.buf })
end
end,
})

```


To learn what capabilities are available you can run the following command in
a buffer with a started LSP client:
```
:lua =vim.lsp.get_active_clients()[1].server_capabilities

```


Full list of features provided by default can be found in [lsp-buf](#lsp-buf).


## <a id="lsp-faq" class="section-title" href="#lsp-faq">Faq</a> 

- Q: How to force-reload LSP?
A: Stop all clients, then reload the buffer.
```

:lua vim.lsp.stop_client(vim.lsp.get_active_clients())
:edit

- Q: Why isn't completion working?
A: In the buffer where you want to use LSP, check that 'omnifunc' is set to
"v:lua.vim.lsp.omnifunc":
```

:verbose set omnifunc?


```
     Some other plugin may be overriding the option. To avoid that, you could
set the option in an [after-directory](#after-directory) ftplugin, e.g.
"after/ftplugin/python.vim".

- Q: How do I run a request synchronously (e.g. for formatting on file save)?
A: Check if the function has an `async` parameter and set the value to
false.

E.g. code formatting:
```

### <a id="" Auto-format .rs (rust) files prior to saving them" class="section-title" href="#" Auto-format .rs (rust) files prior to saving them">Note:</a>
" (async = false is the default for format)
### <a id="autocmd BufWritePre .rs lua vim.lsp.buf.format({ async = false })" class="section-title" href="#autocmd BufWritePre .rs lua vim.lsp.buf.format({ async = false })">Note:</a>


```

### <a id="lsp-vs-treesitter" class="section-title" href="#lsp-vs-treesitter">Note:</a>
- Q: How do LSP and Treesitter compare?
A: LSP requires a client and language server. The language server uses
semantic analysis to understand code at a project level. This provides
language servers with the ability to rename across files, find
definitions in external libraries and more.

Treesitter is a language parsing library that provides excellent tools
for incrementally parsing text and handling errors. This makes it a great
fit for editors to understand the contents of the current file for things
like syntax highlighting, simple goto-definitions, scope analysis and
more.

LSP and Treesitter are both great tools for editing and inspecting code.


## <a id="lsp-api" class="section-title" href="#lsp-api">Lsp Api</a> 

LSP core API is described at [lsp-core](#lsp-core).  Those are the core functions for
creating and managing clients.

The `vim.lsp.buf_…` functions perform operations for all LSP clients attached
to the given buffer. [lsp-buf](#lsp-buf)

LSP request/response handlers are implemented as Lua functions (see
[lsp-handler|). The |vim.lsp.handlers](#lsp-handler|). The |vim.lsp.handlers) table defines default handlers used
when creating a new client. Keys are LSP method names:
```

:lua print(vim.inspect(vim.tbl_keys(vim.lsp.handlers)))

```

### <a id="lsp-method" class="section-title" href="#lsp-method">Note:</a>

Methods are the names of requests and notifications as defined by the LSP
specification. These LSP requests/notifications are defined by default:

callHierarchy/incomingCalls
callHierarchy/outgoingCalls
textDocument/codeAction
textDocument/completion
### <a id="textDocument/declaration" class="section-title" href="#textDocument/declaration">Note:</a>
textDocument/definition
textDocument/documentHighlight
textDocument/documentSymbol
textDocument/formatting
textDocument/hover
### <a id="textDocument/implementation" class="section-title" href="#textDocument/implementation">Note:</a>
textDocument/publishDiagnostics
textDocument/rangeFormatting
textDocument/references
textDocument/rename
textDocument/signatureHelp
### <a id="textDocument/typeDefinition" class="section-title" href="#textDocument/typeDefinition">Note:</a>
window/logMessage
window/showMessage
window/showDocument
window/showMessageRequest
workspace/applyEdit
workspace/symbol

* NOTE: These are sometimes not implemented by servers.

### <a id="lsp-handler" class="section-title" href="#lsp-handler">Note:</a>

lsp-handlers are functions with special signatures that are designed to handle
responses and notifications from LSP servers.

For [lsp-request|, each |lsp-handler](#lsp-request|, each |lsp-handler) has this signature:
```

function(err, result, ctx, config)

```

Parameters: ~
{err}       (table|nil)
When the language server is unable to complete a
request, a table with information about the error is
sent. Otherwise, it is `nil`. See [lsp-response](#lsp-response).
{result}    (Result [ Params ](# Params ) nil)
When the language server is able to successfully
complete a request, this contains the `result` key of
the response. See [lsp-response](#lsp-response).
{ctx}       (table)
Context describes additional calling state associated
with the handler. It consists of the following key,
value pairs:

{method}    (string)
The [lsp-method](#lsp-method) name.
{client_id} (number)
The ID of the [vim.lsp.client](#vim.lsp.client).
{bufnr}     (Buffer)
Buffer handle, or 0 for current.
{params}    (table|nil)
The parameters used in the original
request which resulted in this handler
call.
{config}    (table)
Configuration for the handler.

Each handler can define its own configuration table
that allows users to customize the behavior of a
particular handler.

To configure a particular [lsp-handler](#lsp-handler), see:
[lsp-handler-configuration](#lsp-handler-configuration)


Returns: ~
The [lsp-handler](#lsp-handler) can respond by returning two values: `result, err`
Where `err` must be shaped like an RPC error:
`{ code, message, data? }`

You can use [vim.lsp.rpc.rpc_response_error()](#vim.lsp.rpc.rpc_response_error()) to create this object.

For [lsp-notification|, each |lsp-handler](#lsp-notification|, each |lsp-handler) has this signature:
```

function(err, result, ctx, config)

```

Parameters: ~
{err}       (nil)
This is always `nil`.
See [lsp-notification](#lsp-notification)
{result}    (Result)
This contains the `params` key of the notification.
See [lsp-notification](#lsp-notification)
{ctx}       (table)
Context describes additional calling state associated
with the handler. It consists of the following key,
value pairs:

{method}    (string)
The [lsp-method](#lsp-method) name.
{client_id} (number)
The ID of the [vim.lsp.client](#vim.lsp.client).
{config}    (table)
Configuration for the handler.

Each handler can define its own configuration table
that allows users to customize the behavior of a
particular handler.

For an example, see:
[vim.lsp.diagnostic.on_publish_diagnostics()](#vim.lsp.diagnostic.on_publish_diagnostics())

To configure a particular [lsp-handler](#lsp-handler), see:
[lsp-handler-configuration](#lsp-handler-configuration)

Returns: ~
The [lsp-handler](#lsp-handler)'s return value will be ignored.

### <a id="lsp-handler-configuration" class="section-title" href="#lsp-handler-configuration">Note:</a>

To configure the behavior of a builtin [lsp-handler](#lsp-handler), the convenient method
[vim.lsp.with()](#vim.lsp.with()) is provided for users.

To configure the behavior of [vim.lsp.diagnostic.on_publish_diagnostics()](#vim.lsp.diagnostic.on_publish_diagnostics()),
consider the following example, where a new [lsp-handler](#lsp-handler) is created using
[vim.lsp.with()](#vim.lsp.with()) that no longer generates signs for the diagnostics:
```

vim.lsp.handlers["textDocument/publishDiagnostics"] = vim.lsp.with(
vim.lsp.diagnostic.on_publish_diagnostics, {
-- Disable signs
signs = false,
}
)

```

To enable signs, use [vim.lsp.with()](#vim.lsp.with()) again to create and assign a new
[lsp-handler| to |vim.lsp.handlers](#lsp-handler| to |vim.lsp.handlers) for the associated method:
```

vim.lsp.handlers["textDocument/publishDiagnostics"] = vim.lsp.with(
vim.lsp.diagnostic.on_publish_diagnostics, {
-- Enable signs
signs = true,
}
)

```

To configure a handler on a per-server basis, you can use the {handlers} key
for [vim.lsp.start_client()](#vim.lsp.start_client())
```

vim.lsp.start_client {
..., -- Other configuration omitted.
handlers = {
["textDocument/publishDiagnostics"] = vim.lsp.with(
vim.lsp.diagnostic.on_publish_diagnostics, {
-- Disable virtual_text
virtual_text = false,
}
),
},
}

```

or if using 'nvim-lspconfig', you can use the {handlers} key of `setup()`:
```

require('lspconfig').rust_analyzer.setup {
handlers = {
["textDocument/publishDiagnostics"] = vim.lsp.with(
vim.lsp.diagnostic.on_publish_diagnostics, {
-- Disable virtual_text
virtual_text = false
}
),
}
}

```

Some handlers do not have an explicitly named handler function (such as
[|vim.lsp.diagnostic.on_publish_diagnostics()](#|vim.lsp.diagnostic.on_publish_diagnostics())). To override these, first
create a reference to the existing handler:
```

local on_references = vim.lsp.handlers["textDocument/references"]
vim.lsp.handlers["textDocument/references"] = vim.lsp.with(
on_references, {
-- Use location list instead of quickfix list
loclist = true,
}
)

```

### <a id="lsp-handler-resolution" class="section-title" href="#lsp-handler-resolution">Note:</a>
Handlers can be set by:

### <a id="vim.lsp.handlers" class="section-title" href="#vim.lsp.handlers">- Setting a field in vim.lsp.handlers.</a>
vim.lsp.handlers is a global table that contains the default mapping of
[lsp-method| names to |lsp-handlers](#lsp-method| names to |lsp-handlers).

To override the handler for the `"textDocument/definition"` method:
```

vim.lsp.handlers["textDocument/definition"] = my_custom_default_definition

```

- The {handlers} parameter for [vim.lsp.start_client()](#vim.lsp.start_client()).
This will set the [lsp-handler](#lsp-handler) as the default handler for this server.

For example:
```

vim.lsp.start_client {
..., -- Other configuration omitted.
handlers = {
["textDocument/definition"] = my_custom_server_definition
},
}

- The {handler} parameter for [vim.lsp.buf_request()](#vim.lsp.buf_request()).
This will set the [lsp-handler](#lsp-handler) ONLY for the current request.

For example:
```

vim.lsp.buf_request(
0,
"textDocument/definition",
definition_params,
my_request_custom_definition
)

```

In summary, the [lsp-handler| will be chosen based on the current |lsp-method](#lsp-handler| will be chosen based on the current |lsp-method)
in the following order:

1. Handler passed to [vim.lsp.buf_request()](#vim.lsp.buf_request()), if any.
2. Handler defined in [vim.lsp.start_client()](#vim.lsp.start_client()), if any.
3. Handler defined in [vim.lsp.handlers](#vim.lsp.handlers), if any.

### <a id="vim.lsp.log_levels" class="section-title" href="#vim.lsp.log_levels">Note:</a>
Log levels are defined in [vim.log.levels](#vim.log.levels)


### <a id="vim.lsp.protocol" class="section-title" href="#vim.lsp.protocol">VIM.LSP.PROTOCOL</a>

Module `vim.lsp.protocol` defines constants dictated by the LSP specification,
and helper functions for creating protocol-related objects.
https://github.com/microsoft/language-server-protocol/raw/gh-pages/_specifications/specification-3-14.md

For example `vim.lsp.protocol.ErrorCodes` allows reverse lookup by number or
name:
```

vim.lsp.protocol.TextDocumentSyncKind.Full == 1
vim.lsp.protocol.TextDocumentSyncKind[1] == "Full"

```


### <a id="lsp-response" class="section-title" href="#lsp-response">Note:</a>
For the format of the response message, see:
https://microsoft.github.io/language-server-protocol/specifications/specification-current/#responseMessage

### <a id="lsp-notification" class="section-title" href="#lsp-notification">Note:</a>
For the format of the notification message, see:
https://microsoft.github.io/language-server-protocol/specifications/specification-current/#notificationMessage

### <a id="lsp-on-list-handler" class="section-title" href="#lsp-on-list-handler">Note:</a>

`on_list` receives a table with:

- `items` table[], structured like [setqflist-what](#setqflist-what)
- `title` string, title for the list.
- `context` table[nil. `ctx` from |lsp-handler](#nil. `ctx` from |lsp-handler)

This table can be used with vim.fn.setqflist or vim.fn.setloclist. E.g.:
```
local function on_list(options)
vim.fn.setqflist({}, ' ', options)
vim.api.nvim_command('cfirst')
end

vim.lsp.buf.definition{on_list=on_list}
vim.lsp.buf.references(nil, {on_list=on_list})

```

If you prefer loclist do something like this:
```
local function on_list(options)
vim.fn.setloclist(0, {}, ' ', options)
vim.api.nvim_command('lopen')
end

```



## <a id="lsp-highlight" class="section-title" href="#lsp-highlight">Lsp Highlight</a> 

Reference Highlights:

Highlight groups that are meant to be used by [vim.lsp.buf.document_highlight()](#vim.lsp.buf.document_highlight()).

You can see more about the differences in types here:
https://microsoft.github.io/language-server-protocol/specification#textDocument_documentHighlight

### <a id="hl-LspReferenceText" class="section-title" href="#hl-LspReferenceText">Note:</a>
LspReferenceText          used for highlighting "text" references
### <a id="hl-LspReferenceRead" class="section-title" href="#hl-LspReferenceRead">Note:</a>
LspReferenceRead          used for highlighting "read" references
### <a id="hl-LspReferenceWrite" class="section-title" href="#hl-LspReferenceWrite">Note:</a>
LspReferenceWrite         used for highlighting "write" references


### <a id="lsp-highlight-codelens" class="section-title" href="#lsp-highlight-codelens">Note:</a>

Highlight groups related to [lsp-codelens](#lsp-codelens) functionality.

### <a id="hl-LspCodeLens" class="section-title" href="#hl-LspCodeLens">Note:</a>
LspCodeLens
Used to color the virtual text of the codelens. See
[nvim_buf_set_extmark()](#nvim_buf_set_extmark()).

### <a id="hl-LspCodeLensSeparator" class="section-title" href="#hl-LspCodeLensSeparator">LspCodeLensSeparator</a>
Used to color the separator between two or more code lenses.

### <a id="lsp-highlight-signature" class="section-title" href="#lsp-highlight-signature">Note:</a>

Highlight groups related to [vim.lsp.handlers.signature_help()](#vim.lsp.handlers.signature_help()).

### <a id="hl-LspSignatureActiveParameter" class="section-title" href="#hl-LspSignatureActiveParameter">Note:</a>
LspSignatureActiveParameter
Used to highlight the active parameter in the signature help. See
[vim.lsp.handlers.signature_help()](#vim.lsp.handlers.signature_help()).


## <a id="lsp-events" class="section-title" href="#lsp-events">Events</a> 

### <a id="LspAttach" class="section-title" href="#LspAttach">Note:</a>
After an LSP client attaches to a buffer. The [autocmd-pattern](#autocmd-pattern) is the
name of the buffer. When used from Lua, the client ID is passed to the
callback in the "data" table. Example:
```

vim.api.nvim_create_autocmd("LspAttach", {
callback = function(args)
local bufnr = args.buf
local client = vim.lsp.get_client_by_id(args.data.client_id)
if client.server_capabilities.completionProvider then
vim.bo[bufnr].omnifunc = "v:lua.vim.lsp.omnifunc"
end
if client.server_capabilities.definitionProvider then
vim.bo[bufnr].tagfunc = "v:lua.vim.lsp.tagfunc"
end
end,
})

```

### <a id="LspDetach" class="section-title" href="#LspDetach">Note:</a>
Just before an LSP client detaches from a buffer. The [autocmd-pattern](#autocmd-pattern) is the
name of the buffer. When used from Lua, the client ID is passed to the
callback in the "data" table. Example:
```

vim.api.nvim_create_autocmd("LspDetach", {
callback = function(args)
local client = vim.lsp.get_client_by_id(args.data.client_id)
-- Do something with the client
vim.cmd("setlocal tagfunc< omnifunc<")
end,
})

```

Also the following [User| |autocommand](#User| |autocommand)s are provided:

### <a id="LspProgressUpdate" class="section-title" href="#LspProgressUpdate">LspProgressUpdate</a>
Upon receipt of a progress notification from the server. See
[vim.lsp.util.get_progress_messages()](#vim.lsp.util.get_progress_messages()).

### <a id="LspRequest" class="section-title" href="#LspRequest">LspRequest</a>
After a change to the active set of pending LSP requests. See {requests}
in [vim.lsp.client](#vim.lsp.client).

Example:
```
autocmd User LspProgressUpdate redrawstatus
autocmd User LspRequest redrawstatus

```



## <a id="lsp-core" class="section-title" href="#lsp-core">Lua Module: Vim.Lsp</a> 

### <a id="vim.lsp.buf_attach_client()" class="section-title" href="#vim.lsp.buf_attach_client()">buf_attach_client({bufnr}, {client_id})</a>
Implements the `textDocument/did…` notifications required to track a
buffer for any language server.

Without calling this, the server won't be notified of changes to a buffer.

Parameters: ~
• {bufnr}      (number) Buffer handle, or 0 for current
• {client_id}  (number) Client id

### <a id="vim.lsp.buf_detach_client()" class="section-title" href="#vim.lsp.buf_detach_client()">buf_detach_client({bufnr}, {client_id})</a>
Detaches client from the specified buffer. Note: While the server is
notified that the text document (buffer) was closed, it is still able to
send notifications should it ignore this notification.

Parameters: ~
• {bufnr}      (number) Buffer handle, or 0 for current
• {client_id}  (number) Client id

### <a id="vim.lsp.buf_is_attached()" class="section-title" href="#vim.lsp.buf_is_attached()">buf_is_attached({bufnr}, {client_id})</a>
Checks if a buffer is attached for a particular client.

Parameters: ~
• {bufnr}      (number) Buffer handle, or 0 for current
• {client_id}  (number) the client id

### <a id="vim.lsp.buf_notify()" class="section-title" href="#vim.lsp.buf_notify()">buf_notify({bufnr}, {method}, {params})</a>
Send a notification to a server

Parameters: ~
• {bufnr}   [number] (optional): The number of the buffer
• {method}  [string]: Name of the request method
• {params}  [string]: Arguments to send to the server

Return: ~
true if any client returns true; false otherwise

### <a id="vim.lsp.buf_request_all()" class="section-title" href="#vim.lsp.buf_request_all()">Note:</a>
buf_request_all({bufnr}, {method}, {params}, {callback})
Sends an async request for all active clients attached to the buffer.
Executes the callback on the combined result. Parameters are the same as
[vim.lsp.buf_request()](#vim.lsp.buf_request()) but the return result and callback are different.

Parameters: ~
• {bufnr}     (number) Buffer handle, or 0 for current.
• {method}    (string) LSP method name
• {params}    (optional, table) Parameters to send to the server
• {callback}  (function) The callback to call when all requests are
finished.

Return: ~
(function) A function that will cancel all requests which is the same
as the one returned from `buf_request`.

### <a id="vim.lsp.buf_request_sync()" class="section-title" href="#vim.lsp.buf_request_sync()">Note:</a>
buf_request_sync({bufnr}, {method}, {params}, {timeout_ms})
Sends a request to all server and waits for the response of all of them.

Calls [vim.lsp.buf_request_all()](#vim.lsp.buf_request_all()) but blocks Nvim while awaiting the
result. Parameters are the same as [vim.lsp.buf_request()](#vim.lsp.buf_request()) but the return
result is different. Wait maximum of {timeout_ms} (default 1000) ms.

Parameters: ~
• {bufnr}       (number) Buffer handle, or 0 for current.
• {method}      (string) LSP method name
• {params}      (optional, table) Parameters to send to the server
• {timeout_ms}  (optional, number, default=1000) Maximum time in
milliseconds to wait for a result.

Return: ~
Map of client_id:request_result. On timeout, cancel or error, returns
`(nil, err)` where `err` is a string describing the failure reason.

### <a id="vim.lsp.client" class="section-title" href="#vim.lsp.client">client()</a>
LSP client object. You can get an active client object via
[vim.lsp.get_client_by_id()| or |vim.lsp.get_active_clients()](#vim.lsp.get_client_by_id()| or |vim.lsp.get_active_clients()).

• Methods:
• request(method, params, [handler], bufnr) Sends a request to the
server. This is a thin wrapper around {client.rpc.request} with some
additional checking. If {handler} is not specified, If one is not
found there, then an error will occur. Returns: {status},
{[client_id]}. {status} is a boolean indicating if the notification
was successful. If it is `false`, then it will always be `false` (the
client has shutdown). If {status} is `true`, the function returns
{request_id} as the second result. You can use this with
`client.cancel_request(request_id)` to cancel the request.
• request_sync(method, params, timeout_ms, bufnr) Sends a request to the
server and synchronously waits for the response. This is a wrapper
around {client.request} Returns: { err=err, result=result }, a
dictionary, where `err` and `result` come from the [lsp-handler](#lsp-handler). On
timeout, cancel or error, returns `(nil, err)` where `err` is a string
describing the failure reason. If the request was unsuccessful returns
`nil`.
• notify(method, params) Sends a notification to an LSP server. Returns:
a boolean to indicate if the notification was successful. If it is
false, then it will always be false (the client has shutdown).
• cancel_request(id) Cancels a request with a given request id. Returns:
same as `notify()`.
• stop([force]) Stops a client, optionally with force. By default, it
will just ask the server to shutdown without force. If you request to
stop a client which has previously been requested to shutdown, it will
automatically escalate and force shutdown.
• is_stopped() Checks whether a client is stopped. Returns: true if the
client is fully stopped.
• on_attach(client, bufnr) Runs the on_attach function from the client's
config if it was defined. Useful for buffer-local setup.

• Members
• {id} (number): The id allocated to the client.
• {name} (string): If a name is specified on creation, that will be
used. Otherwise it is just the client id. This is used for logs and
messages.
• {rpc} (table): RPC client object, for low level interaction with the
client. See [vim.lsp.rpc.start()](#vim.lsp.rpc.start()).
• {offset_encoding} (string): The encoding used for communicating with
the server. You can modify this in the `config`'s `on_init` method
before text is sent to the server.
• {handlers} (table): The handlers used by the client as described in
[lsp-handler](#lsp-handler).
• {requests} (table): The current pending requests in flight to the
server. Entries are key-value pairs with the key being the request ID
while the value is a table with `type`, `bufnr`, and `method`
key-value pairs. `type` is either "pending" for an active request, or
"cancel" for a cancel request.
• {config} (table): copy of the table that was passed by the user to
[vim.lsp.start_client()](#vim.lsp.start_client()).
• {server_capabilities} (table): Response from the server sent on
`initialize` describing the server's capabilities.

### <a id="vim.lsp.client_is_stopped()" class="section-title" href="#vim.lsp.client_is_stopped()">client_is_stopped({client_id})</a>
Checks whether a client is stopped.

Parameters: ~
• {client_id}  (Number)

Return: ~
true if client is stopped, false otherwise.

### <a id="vim.lsp.for_each_buffer_client()" class="section-title" href="#vim.lsp.for_each_buffer_client()">Note:</a>
for_each_buffer_client({bufnr}, {fn})
Invokes a function for each LSP client attached to a buffer.

Parameters: ~
• {bufnr}  (number) Buffer number
• {fn}     (function) Function to run on each client attached to buffer
{bufnr}. The function takes the client, client ID, and buffer
number as arguments. Example:
```

vim.lsp.for_each_buffer_client(0, function(client, client_id, bufnr)
print(vim.inspect(client))
end)

```


### <a id="vim.lsp.formatexpr()" class="section-title" href="#vim.lsp.formatexpr()">formatexpr({opts})</a>
Provides an interface between the built-in client and a `formatexpr`
function.

Currently only supports a single client. This can be set via `setlocal
formatexpr=v:lua.vim.lsp.formatexpr()` but will typically or in
`on_attach` via `vim.api.nvim_buf_set_option(bufnr, 'formatexpr',
'v:lua.vim.lsp.formatexpr(#{timeout_ms:250})')`.

Parameters: ~
• {opts}  (table) options for customizing the formatting expression
which takes the following optional keys:
• timeout_ms (default 500ms). The timeout period for the
formatting request.

### <a id="vim.lsp.get_active_clients()" class="section-title" href="#vim.lsp.get_active_clients()">get_active_clients({filter})</a>
Get active clients.

Parameters: ~
• {filter}  (table|nil) A table with key-value pairs used to filter the
returned clients. The available keys are:
• id (number): Only return clients with the given id
• bufnr (number): Only return clients attached to this
buffer
• name (string): Only return clients with the given name

Return: ~
(table) List of [vim.lsp.client](#vim.lsp.client) objects

### <a id="vim.lsp.get_buffers_by_client_id()" class="section-title" href="#vim.lsp.get_buffers_by_client_id()">Note:</a>
get_buffers_by_client_id({client_id})
Returns list of buffers attached to client_id.

Parameters: ~
• {client_id}  (number) client id

Return: ~
(list) of buffer ids

### <a id="vim.lsp.get_client_by_id()" class="section-title" href="#vim.lsp.get_client_by_id()">get_client_by_id({client_id})</a>
Gets a client by id, or nil if the id is invalid. The returned client may
not yet be fully initialized.

Parameters: ~
• {client_id}  (number) client id

Return: ~
[vim.lsp.client](#vim.lsp.client) object, or nil

### <a id="vim.lsp.get_log_path()" class="section-title" href="#vim.lsp.get_log_path()">get_log_path()</a>
Gets the path of the logfile used by the LSP client.

Return: ~
(String) Path to logfile.

### <a id="vim.lsp.omnifunc()" class="section-title" href="#vim.lsp.omnifunc()">omnifunc({findstart}, {base})</a>
Implements 'omnifunc' compatible LSP completion.

Parameters: ~
• {findstart}  0 or 1, decides behavior
• {base}       If findstart=0, text to match against

Return: ~
(number) Decided by {findstart}:
• findstart=0: column where the completion starts, or -2 or -3
• findstart=1: list of matches (actually just calls [complete()](#complete()))

See also: ~
[complete-functions](#complete-functions)
[complete-items](#complete-items)
[CompleteDone](#CompleteDone)

### <a id="vim.lsp.set_log_level()" class="section-title" href="#vim.lsp.set_log_level()">set_log_level({level})</a>
Sets the global log level for LSP logging.

Levels by name: "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "OFF"

Level numbers begin with "TRACE" at 0

Use `lsp.log_levels` for reverse lookup.

Parameters: ~
• {level}  [number|string] the case insensitive level name or number

See also: ~
[vim.lsp.log_levels](#vim.lsp.log_levels)

### <a id="vim.lsp.start()" class="section-title" href="#vim.lsp.start()">start({config}, {opts})</a>
Create a new LSP client and start a language server or reuses an already
running client if one is found matching `name` and `root_dir`. Attaches
the current buffer to the client.

Example:
```

vim.lsp.start({
name = 'my-server-name',
cmd = {'name-of-language-server-executable'},
root_dir = vim.fs.dirname(vim.fs.find({'pyproject.toml', 'setup.py'}, { upward = true })[1]),
})

```


See [vim.lsp.start_client()](#vim.lsp.start_client()) for all available options. The most important
are:

• `name` arbitrary name for the LSP client. Should be unique per language
server.
• `cmd` command (in list form) used to start the language server. Must be
absolute, or found on `$PATH`. Shell constructs like `~` are not
expanded.
• `root_dir` path to the project root. By default this is used to decide
if an existing client should be re-used. The example above uses
[vim.fs.find()| and |vim.fs.dirname()](#vim.fs.find()| and |vim.fs.dirname()) to detect the root by traversing
the file system upwards starting from the current directory until either
a `pyproject.toml` or `setup.py` file is found.
• `workspace_folders` list of `{ uri:string, name: string }` tables
specifying the project root folders used by the language server. If
`nil` the property is derived from `root_dir` for convenience.

Language servers use this information to discover metadata like the
dependencies of your project and they tend to index the contents within
the project folder.

To ensure a language server is only started for languages it can handle,
make sure to call [vim.lsp.start()| within a |FileType](#vim.lsp.start()| within a |FileType) autocmd. Either
use [:au|, |nvim_create_autocmd()](#:au|, |nvim_create_autocmd()) or put the call in a
`ftplugin/<filetype_name>.lua` (See [ftplugin-name](#ftplugin-name))

Parameters: ~
• {config}  (table) Same configuration as documented in
[vim.lsp.start_client()](#vim.lsp.start_client())
• {opts}    nil|table Optional keyword arguments:
• reuse_client (fun(client: client, config: table): boolean)
Predicate used to decide if a client should be re-used.
Used on all running clients. The default implementation
re-uses a client if name and root_dir matches.
• bufnr (number) Buffer handle to attach to if starting or
re-using a client (0 for current).

Return: ~
(number|nil) client_id

### <a id="vim.lsp.start_client()" class="section-title" href="#vim.lsp.start_client()">start_client({config})</a>
Starts and initializes a client with the given configuration.

Parameter `cmd` is required.

The following parameters describe fields in the {config} table.

Parameters: ~
• {cmd}                (table[string](#string)fun(dispatchers: table):table)
command string or list treated like [jobstart()](#jobstart()).
The command must launch the language server
process. `cmd` can also be a function that
creates an RPC client. The function receives a
dispatchers table and must return a table with
the functions `request`, `notify`, `is_closing`
and `terminate` See [vim.lsp.rpc.request()](#vim.lsp.rpc.request()) and
[vim.lsp.rpc.notify()](#vim.lsp.rpc.notify()) For TCP there is a
built-in rpc client factory:
[vim.lsp.rpc.connect()](#vim.lsp.rpc.connect())
• {cmd_cwd}            (string, default=[getcwd()](#getcwd())) Directory to launch
the `cmd` process. Not related to `root_dir`.
• {cmd_env}            (table) Environment flags to pass to the LSP on
spawn. Can be specified using keys like a map or
as a list with `k=v` pairs or both. Non-string values are coerced to
string. Example:
```

{ "PRODUCTION=true"; "TEST=123"; PORT = 8080; HOST = "0.0.0.0"; }

```

• {detached}           (boolean, default true) Daemonize the server
process so that it runs in a separate process
group from Nvim. Nvim will shutdown the process
on exit, but if Nvim fails to exit cleanly this
could leave behind orphaned server processes.
• {workspace_folders}  (table) List of workspace folders passed to the
language server. For backwards compatibility
rootUri and rootPath will be derived from the
first workspace folder in this list. See
`workspaceFolders` in the LSP spec.
• {capabilities}       Map overriding the default capabilities defined
by [vim.lsp.protocol.make_client_capabilities()](#vim.lsp.protocol.make_client_capabilities()),
passed to the language server on initialization.
Hint: use make_client_capabilities() and modify
its result.
• Note: To send an empty dictionary use
`{[vim.type_idx]=vim.types.dictionary}`, else
it will be encoded as an array.
• {handlers}           Map of language server method names to
[lsp-handler](#lsp-handler)
• {settings}           Map with language server specific settings. These
are returned to the language server if requested
via `workspace/configuration`. Keys are
case-sensitive.
• {commands}           (table) Table that maps string of clientside
commands to user-defined functions. Commands
passed to start_client take precedence over the
global command registry. Each key must be a
unique command name, and the value is a function
which is called if any LSP action (code action,
code lenses, ...) triggers the command.
• {init_options}       Values to pass in the initialization request as
`initializationOptions`. See `initialize` in the
LSP spec.
• {name}               (string, default=client-id) Name in log messages.
• {get_language_id}    function(bufnr, filetype) -> language ID as
string. Defaults to the filetype.
• {offset_encoding}    (default="utf-16") One of "utf-8", "utf-16", or
"utf-32" which is the encoding that the LSP
server expects. Client does not verify this is
correct.
• {on_error}           Callback with parameters (code, ...), invoked
when the client operation throws an error. `code`
is a number describing the error. Other arguments
may be passed depending on the error kind. See
`vim.lsp.rpc.client_errors` for possible errors.
Use `vim.lsp.rpc.client_errors[code]` to get
human-friendly name.
• {before_init}        Callback with parameters (initialize_params,
config) invoked before the LSP "initialize"
phase, where `params` contains the parameters
being sent to the server and `config` is the
config that was passed to
[vim.lsp.start_client()](#vim.lsp.start_client()). You can use this to
modify parameters before they are sent.
• {on_init}            Callback (client, initialize_result) invoked
after LSP "initialize", where `result` is a table
of `capabilities` and anything else the server
may send. For example, clangd sends
`initialize_result.offsetEncoding` if
`capabilities.offsetEncoding` was sent to it. You
can only modify the `client.offset_encoding` here
before any notifications are sent. Most language
servers expect to be sent client specified
settings after initialization. Neovim does not
make this assumption. A
`workspace/didChangeConfiguration` notification
should be sent to the server during on_init.
• {on_exit}            Callback (code, signal, client_id) invoked on
client exit.
• code: exit code of the process
• signal: number describing the signal used to
terminate (if any)
• client_id: client handle
• {on_attach}          Callback (client, bufnr) invoked when client
attaches to a buffer.
• {trace}              "off" [ "messages" | "verbose" ](# "messages" | "verbose" ) nil passed
directly to the language server in the initialize
request. Invalid/empty values will default to
"off"
• {flags}              A table with flags for the client. The current
(experimental) flags are:
• allow_incremental_sync (bool, default true):
Allow using incremental sync for buffer edits
• debounce_text_changes (number, default 150):
Debounce didChange notifications to the server
by the given number in milliseconds. No
debounce occurs if nil
• exit_timeout (number|boolean, default false):
Milliseconds to wait for server to exit cleanly
after sending the "shutdown" request before
sending kill -15. If set to false, nvim exits
immediately after sending the "shutdown"
request to the server.
• {root_dir}           (string) Directory where the LSP server will base
its workspaceFolders, rootUri, and rootPath on
initialization.

Return: ~
Client id. [vim.lsp.get_client_by_id()](#vim.lsp.get_client_by_id()) Note: client may not be fully
initialized. Use `on_init` to do any actions once the client has been
initialized.

### <a id="vim.lsp.stop_client()" class="section-title" href="#vim.lsp.stop_client()">stop_client({client_id}, {force})</a>
Stops a client(s).

You can also use the `stop()` function on a [vim.lsp.client](#vim.lsp.client) object. To
stop all clients:
```

vim.lsp.stop_client(vim.lsp.get_active_clients())

```


By default asks the server to shutdown, unless stop was requested already
for this client, then force-shutdown is attempted.

Parameters: ~
• {client_id}  client id or [vim.lsp.client](#vim.lsp.client) object, or list thereof
• {force}      (boolean) (optional) shutdown forcefully

### <a id="vim.lsp.tagfunc()" class="section-title" href="#vim.lsp.tagfunc()">tagfunc({...})</a>
Provides an interface between the built-in client and 'tagfunc'.

When used with normal mode commands (e.g. [CTRL-]](#CTRL-])) this will invoke the
"textDocument/definition" LSP method to find the tag under the cursor.
Otherwise, uses "workspace/symbol". If no results are returned from any
LSP servers, falls back to using built-in tags.

Parameters: ~
• {pattern}  Pattern used to find a workspace symbol
• {flags}    See [tag-function](#tag-function)

Return: ~
A list of matching tags

### <a id="vim.lsp.with()" class="section-title" href="#vim.lsp.with()">with({handler}, {override_config})</a>
Function to manage overriding defaults for LSP handlers.

Parameters: ~
• {handler}          (function) See [lsp-handler](#lsp-handler)
• {override_config}  (table) Table containing the keys to override
behavior of the {handler}


## <a id="lsp-buf" class="section-title" href="#lsp-buf">Lua Module: Vim.Lsp.Buf</a> 

### <a id="vim.lsp.buf.add_workspace_folder()" class="section-title" href="#vim.lsp.buf.add_workspace_folder()">Note:</a>
add_workspace_folder({workspace_folder})
Add the folder at path to the workspace folders. If {path} is not
provided, the user will be prompted for a path using [input()](#input()).

### <a id="vim.lsp.buf.clear_references()" class="section-title" href="#vim.lsp.buf.clear_references()">clear_references()</a>
Removes document highlights from current buffer.

### <a id="vim.lsp.buf.code_action()" class="section-title" href="#vim.lsp.buf.code_action()">code_action({options})</a>
Selects a code action available at the current cursor position.

Parameters: ~
• {options}  (table|nil) Optional table which holds the following
optional fields:
• context: (table|nil) Corresponds to `CodeActionContext` of the LSP specification:
• diagnostics (table|nil): LSP`Diagnostic[]` . Inferred from the current position if not provided.
• only (table|nil): List of LSP `CodeActionKind`s used to
filter the code actions. Most language servers support
values like `refactor` or `quickfix`.

• filter: (function|nil) Predicate taking an `CodeAction`
and returning a boolean.
• apply: (boolean|nil) When set to `true`, and there is
just one remaining action (after filtering), the action
is applied without user query.
• range: (table|nil) Range for which code actions should be
requested. If in visual mode this defaults to the active
selection. Table must contain `start` and `end` keys with
{row, col} tuples using mark-like indexing. See
[api-indexing](#api-indexing)

See also: ~
https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_codeAction

### <a id="vim.lsp.buf.completion()" class="section-title" href="#vim.lsp.buf.completion()">completion({context})</a>
Retrieves the completion items at the current cursor position. Can only be
called in Insert mode.

Parameters: ~
• {context}  (context support not yet implemented) Additional
information about the context in which a completion was
triggered (how it was triggered, and by which trigger
character, if applicable)

See also: ~
vim.lsp.protocol.constants.CompletionTriggerKind

### <a id="vim.lsp.buf.declaration()" class="section-title" href="#vim.lsp.buf.declaration()">declaration({options})</a>
Jumps to the declaration of the symbol under the cursor.
Note:
Many servers do not implement this method. Generally, see
[vim.lsp.buf.definition()](#vim.lsp.buf.definition()) instead.

Parameters: ~
• {options}  (table|nil) additional options
• reuse_win: (boolean) Jump to existing window if buffer is
already open.
• on_list: (function) handler for list results. See
[lsp-on-list-handler](#lsp-on-list-handler)

### <a id="vim.lsp.buf.definition()" class="section-title" href="#vim.lsp.buf.definition()">definition({options})</a>
Jumps to the definition of the symbol under the cursor.

Parameters: ~
• {options}  (table|nil) additional options
• reuse_win: (boolean) Jump to existing window if buffer is
already open.
• on_list: (function) handler for list results. See
[lsp-on-list-handler](#lsp-on-list-handler)

### <a id="vim.lsp.buf.document_highlight()" class="section-title" href="#vim.lsp.buf.document_highlight()">document_highlight()</a>
Send request to the server to resolve document highlights for the current
text document position. This request can be triggered by a key mapping or
by events such as `CursorHold`, e.g.:
```
autocmd CursorHold  <buffer> lua vim.lsp.buf.document_highlight()
autocmd CursorHoldI <buffer> lua vim.lsp.buf.document_highlight()
autocmd CursorMoved <buffer> lua vim.lsp.buf.clear_references()

```


Note: Usage of [vim.lsp.buf.document_highlight()](#vim.lsp.buf.document_highlight()) requires the following
highlight groups to be defined or you won't be able to see the actual
highlights. [hl-LspReferenceText| |hl-LspReferenceRead](#hl-LspReferenceText| |hl-LspReferenceRead)
[hl-LspReferenceWrite](#hl-LspReferenceWrite)

### <a id="vim.lsp.buf.document_symbol()" class="section-title" href="#vim.lsp.buf.document_symbol()">document_symbol({options})</a>
Lists all symbols in the current buffer in the quickfix window.

Parameters: ~
• {options}  (table|nil) additional options
• on_list: (function) handler for list results. See
[lsp-on-list-handler](#lsp-on-list-handler)

### <a id="vim.lsp.buf.execute_command()" class="section-title" href="#vim.lsp.buf.execute_command()">execute_command({command_params})</a>
Executes an LSP server command.

Parameters: ~
• {command_params}  (table) A valid `ExecuteCommandParams` object

See also: ~
https://microsoft.github.io/language-server-protocol/specifications/specification-current/#workspace_executeCommand

### <a id="vim.lsp.buf.format()" class="section-title" href="#vim.lsp.buf.format()">format({options})</a>
Formats a buffer using the attached (and optionally filtered) language
server clients.

Parameters: ~
• {options}  table|nil Optional table which holds the following optional
fields:
• formatting_options (table|nil): Can be used to specify
FormattingOptions. Some unspecified options will be
automatically derived from the current Neovim options.
See https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#formattingOptions
• timeout_ms (integer|nil, default 1000): Time in
milliseconds to block for formatting requests. No effect
if async=true
• bufnr (number|nil): Restrict formatting to the clients
attached to the given buffer, defaults to the current
buffer (0).
• filter (function|nil): Predicate used to filter clients.
Receives a client as argument and must return a boolean.
Clients matching the predicate are included. Example:               •
```

-- Never request typescript-language-server for formatting
vim.lsp.buf.format {
filter = function(client) return client.name ~= "tsserver" end
}

```

• async boolean|nil If true the method won't block.
Defaults to false. Editing the buffer while formatting
asynchronous can lead to unexpected changes.
• id (number|nil): Restrict formatting to the client with
ID (client.id) matching this field.
• name (string|nil): Restrict formatting to the client with
name (client.name) matching this field.
• range (table|nil) Range to format. Table must contain
`start` and `end` keys with {row, col} tuples using (1,0)
indexing. Defaults to current selection in visual mode
Defaults to `nil` in other modes, formatting the full
buffer

### <a id="vim.lsp.buf.hover()" class="section-title" href="#vim.lsp.buf.hover()">hover()</a>
Displays hover information about the symbol under the cursor in a floating
window. Calling the function twice will jump into the floating window.

### <a id="vim.lsp.buf.implementation()" class="section-title" href="#vim.lsp.buf.implementation()">implementation({options})</a>
Lists all the implementations for the symbol under the cursor in the
quickfix window.

Parameters: ~
• {options}  (table|nil) additional options
• on_list: (function) handler for list results. See
[lsp-on-list-handler](#lsp-on-list-handler)

### <a id="vim.lsp.buf.incoming_calls()" class="section-title" href="#vim.lsp.buf.incoming_calls()">incoming_calls()</a>
Lists all the call sites of the symbol under the cursor in the [quickfix](#quickfix)
window. If the symbol can resolve to multiple items, the user can pick one
in the [inputlist()](#inputlist()).

### <a id="vim.lsp.buf.list_workspace_folders()" class="section-title" href="#vim.lsp.buf.list_workspace_folders()">list_workspace_folders()</a>
List workspace folders.

### <a id="vim.lsp.buf.outgoing_calls()" class="section-title" href="#vim.lsp.buf.outgoing_calls()">outgoing_calls()</a>
Lists all the items that are called by the symbol under the cursor in the
[quickfix](#quickfix) window. If the symbol can resolve to multiple items, the user
can pick one in the [inputlist()](#inputlist()).

### <a id="vim.lsp.buf.references()" class="section-title" href="#vim.lsp.buf.references()">references({context}, {options})</a>
Lists all the references to the symbol under the cursor in the quickfix
window.

Parameters: ~
• {context}  (table) Context for the request
• {options}  (table|nil) additional options
• on_list: (function) handler for list results. See
[lsp-on-list-handler](#lsp-on-list-handler)

See also: ~
https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_references

### <a id="vim.lsp.buf.remove_workspace_folder()" class="section-title" href="#vim.lsp.buf.remove_workspace_folder()">Note:</a>
remove_workspace_folder({workspace_folder})
Remove the folder at path from the workspace folders. If {path} is not
provided, the user will be prompted for a path using [input()](#input()).

### <a id="vim.lsp.buf.rename()" class="section-title" href="#vim.lsp.buf.rename()">rename({new_name}, {options})</a>
Renames all references to the symbol under the cursor.

Parameters: ~
• {new_name}  (string|nil) If not provided, the user will be prompted
for a new name using [vim.ui.input()](#vim.ui.input()).
• {options}   (table|nil) additional options
• filter (function|nil): Predicate used to filter clients.
Receives a client as argument and must return a boolean.
Clients matching the predicate are included.
• name (string|nil): Restrict clients used for rename to
ones where client.name matches this field.

### <a id="vim.lsp.buf.server_ready()" class="section-title" href="#vim.lsp.buf.server_ready()">server_ready()</a>
Checks whether the language servers attached to the current buffer are
ready.

Return: ~
`true` if server responds.

### <a id="vim.lsp.buf.signature_help()" class="section-title" href="#vim.lsp.buf.signature_help()">signature_help()</a>
Displays signature information about the symbol under the cursor in a
floating window.

### <a id="vim.lsp.buf.type_definition()" class="section-title" href="#vim.lsp.buf.type_definition()">type_definition({options})</a>
Jumps to the definition of the type of the symbol under the cursor.

Parameters: ~
• {options}  (table|nil) additional options
• reuse_win: (boolean) Jump to existing window if buffer is
already open.
• on_list: (function) handler for list results. See
[lsp-on-list-handler](#lsp-on-list-handler)

### <a id="vim.lsp.buf.workspace_symbol()" class="section-title" href="#vim.lsp.buf.workspace_symbol()">workspace_symbol({query}, {options})</a>
Lists all symbols in the current workspace in the quickfix window.

The list is filtered against {query}; if the argument is omitted from the
call, the user is prompted to enter a string on the command line. An empty
string means no filtering is done.

Parameters: ~
• {query}    (string, optional)
• {options}  (table|nil) additional options
• on_list: (function) handler for list results. See
[lsp-on-list-handler](#lsp-on-list-handler)


## <a id="lsp-diagnostic" class="section-title" href="#lsp-diagnostic">Lua Module: Vim.Lsp.Diagnostic</a> 

### <a id="vim.lsp.diagnostic.get_namespace()" class="section-title" href="#vim.lsp.diagnostic.get_namespace()">get_namespace({client_id})</a>
Get the diagnostic namespace associated with an LSP client
[vim.diagnostic](#vim.diagnostic).

Parameters: ~
• {client_id}  (number) The id of the LSP client

### <a id="vim.lsp.diagnostic.on_publish_diagnostics()" class="section-title" href="#vim.lsp.diagnostic.on_publish_diagnostics()">Note:</a>
on_publish_diagnostics({_}, {result}, {ctx}, {config})
[lsp-handler](#lsp-handler) for the method "textDocument/publishDiagnostics"

See [vim.diagnostic.config()](#vim.diagnostic.config()) for configuration options. Handler-specific
configuration can be set using [vim.lsp.with()](#vim.lsp.with()):
```

vim.lsp.handlers["textDocument/publishDiagnostics"] = vim.lsp.with(
vim.lsp.diagnostic.on_publish_diagnostics, {
-- Enable underline, use default values
underline = true,
-- Enable virtual text, override spacing to 4
virtual_text = {
spacing = 4,
},
-- Use a function to dynamically turn signs off
-- and on, using buffer local variables
signs = function(namespace, bufnr)
return vim.b[bufnr].show_signs == true
end,
-- Disable a feature
update_in_insert = false,
}
)

```


Parameters: ~
• {config}  (table) Configuration table (see [vim.diagnostic.config()](#vim.diagnostic.config())).


## <a id="lsp-codelens" class="section-title" href="#lsp-codelens">Lua Module: Vim.Lsp.Codelens</a> 

### <a id="vim.lsp.codelens.display()" class="section-title" href="#vim.lsp.codelens.display()">display({lenses}, {bufnr}, {client_id})</a>
Display the lenses using virtual text

Parameters: ~
• {lenses}     (table) of lenses to display (`CodeLens[] | null`)
• {bufnr}      (number)
• {client_id}  (number)

### <a id="vim.lsp.codelens.get()" class="section-title" href="#vim.lsp.codelens.get()">get({bufnr})</a>
Return all lenses for the given buffer

Parameters: ~
• {bufnr}  (number) Buffer number. 0 can be used for the current buffer.

Return: ~
(table) (`CodeLens[]`)

### <a id="vim.lsp.codelens.on_codelens()" class="section-title" href="#vim.lsp.codelens.on_codelens()">Note:</a>
on_codelens({err}, {result}, {ctx}, {_})
[lsp-handler](#lsp-handler) for the method `textDocument/codeLens`

### <a id="vim.lsp.codelens.refresh()" class="section-title" href="#vim.lsp.codelens.refresh()">refresh()</a>
Refresh the codelens for the current buffer

It is recommended to trigger this using an autocmd or via keymap.
```
autocmd BufEnter,CursorHold,InsertLeave <buffer> lua vim.lsp.codelens.refresh()

```


### <a id="vim.lsp.codelens.run()" class="section-title" href="#vim.lsp.codelens.run()">run()</a>
Run the code lens in the current line

### <a id="vim.lsp.codelens.save()" class="section-title" href="#vim.lsp.codelens.save()">save({lenses}, {bufnr}, {client_id})</a>
Store lenses for a specific buffer and client

Parameters: ~
• {lenses}     (table) of lenses to store (`CodeLens[] | null`)
• {bufnr}      (number)
• {client_id}  (number)


## <a id="lsp-handlers" class="section-title" href="#lsp-handlers">Lua Module: Vim.Lsp.Handlers</a> 

### <a id="vim.lsp.handlers.hover()" class="section-title" href="#vim.lsp.handlers.hover()">hover({_}, {result}, {ctx}, {config})</a>
[lsp-handler](#lsp-handler) for the method "textDocument/hover"
```

vim.lsp.handlers["textDocument/hover"] = vim.lsp.with(
vim.lsp.handlers.hover, {
-- Use a sharp border with `FloatBorder` highlights
border = "single"
}
)

```


Parameters: ~
• {config}  (table) Configuration table.
• border: (default=nil)
• Add borders to the floating window
• See [nvim_open_win()](#nvim_open_win())

### <a id="vim.lsp.handlers.signature_help()" class="section-title" href="#vim.lsp.handlers.signature_help()">Note:</a>
signature_help({_}, {result}, {ctx}, {config})
[lsp-handler](#lsp-handler) for the method "textDocument/signatureHelp". The active
parameter is highlighted with [hl-LspSignatureActiveParameter](#hl-LspSignatureActiveParameter).
```

vim.lsp.handlers["textDocument/signatureHelp"] = vim.lsp.with(
vim.lsp.handlers.signature_help, {
-- Use a sharp border with `FloatBorder` highlights
border = "single"
}
)

```


Parameters: ~
• {config}  (table) Configuration table.
• border: (default=nil)
• Add borders to the floating window
• See [nvim_open_win()](#nvim_open_win())


## <a id="lsp-util" class="section-title" href="#lsp-util">Lua Module: Vim.Lsp.Util</a> 

### <a id="vim.lsp.util.apply_text_document_edit()" class="section-title" href="#vim.lsp.util.apply_text_document_edit()">Note:</a>
apply_text_document_edit({text_document_edit}, {index}, {offset_encoding})
Applies a `TextDocumentEdit`, which is a list of changes to a single
document.

Parameters: ~
• {text_document_edit}  (table) a `TextDocumentEdit` object
• {index}               (number) Optional index of the edit, if from a
list of edits (or nil, if not from a list)

See also: ~
https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocumentEdit

### <a id="vim.lsp.util.apply_text_edits()" class="section-title" href="#vim.lsp.util.apply_text_edits()">Note:</a>
apply_text_edits({text_edits}, {bufnr}, {offset_encoding})
Applies a list of text edits to a buffer.

Parameters: ~
• {text_edits}       (table) list of `TextEdit` objects
• {bufnr}            (number) Buffer id
• {offset_encoding}  (string) utf-8[utf-16](#utf-16)utf-32

See also: ~
https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textEdit

### <a id="vim.lsp.util.apply_workspace_edit()" class="section-title" href="#vim.lsp.util.apply_workspace_edit()">Note:</a>
apply_workspace_edit({workspace_edit}, {offset_encoding})
Applies a `WorkspaceEdit`.

Parameters: ~
• {workspace_edit}   (table) `WorkspaceEdit`
• {offset_encoding}  (string) utf-8[utf-16](#utf-16)utf-32 (required)

### <a id="vim.lsp.util.buf_clear_references()" class="section-title" href="#vim.lsp.util.buf_clear_references()">buf_clear_references({bufnr})</a>
Removes document highlights from a buffer.

Parameters: ~
• {bufnr}  (number) Buffer id

### <a id="vim.lsp.util.buf_highlight_references()" class="section-title" href="#vim.lsp.util.buf_highlight_references()">Note:</a>
buf_highlight_references({bufnr}, {references}, {offset_encoding})
Shows a list of document highlights for a certain buffer.

Parameters: ~
• {bufnr}            (number) Buffer id
• {references}       (table) List of `DocumentHighlight` objects to
highlight
• {offset_encoding}  (string) One of "utf-8", "utf-16", "utf-32".

See also: ~
https://microsoft.github.io/language-server-protocol/specifications/specification-3-17/#documentHighlight

### <a id="vim.lsp.util.character_offset()" class="section-title" href="#vim.lsp.util.character_offset()">Note:</a>
character_offset({buf}, {row}, {col}, {offset_encoding})
Returns the UTF-32 and UTF-16 offsets for a position in a certain buffer.

Parameters: ~
• {buf}              (number) buffer number (0 for current)
• {row}              0-indexed line
• {col}              0-indexed byte offset in line
• {offset_encoding}  (string) utf-8[utf-16|utf-32](#utf-16|utf-32)nil defaults to
`offset_encoding` of first client of `buf`

Return: ~
(number, number) `offset_encoding` index of the character in line
{row} column {col} in buffer {buf}

### <a id="vim.lsp.util.convert_input_to_markdown_lines()" class="section-title" href="#vim.lsp.util.convert_input_to_markdown_lines()">Note:</a>
convert_input_to_markdown_lines({input}, {contents})
Converts any of `MarkedString` [ `MarkedString[]` ](# `MarkedString[]` ) `MarkupContent` into a
list of lines containing valid markdown. Useful to populate the hover
window for `textDocument/hover`, for parsing the result of
`textDocument/signatureHelp`, and potentially others.

Parameters: ~
• {input}     (`MarkedString` [ `MarkedString[]` ](# `MarkedString[]` ) `MarkupContent`)
• {contents}  (table, optional, default `{}`) List of strings to extend
with converted lines

Return: ~
{contents}, extended with lines of converted markdown.

See also: ~
https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_hover

### <a id="vim.lsp.util.convert_signature_help_to_markdown_lines()" class="section-title" href="#vim.lsp.util.convert_signature_help_to_markdown_lines()">Note:</a>
convert_signature_help_to_markdown_lines({signature_help}, {ft}, {triggers})
Converts `textDocument/SignatureHelp` response to markdown lines.

Parameters: ~
• {signature_help}  Response of `textDocument/SignatureHelp`
• {ft}              optional filetype that will be use as the `lang` for
the label markdown code block
• {triggers}        optional list of trigger characters from the lsp
server. used to better determine parameter offsets

Return: ~
(list) of lines of converted markdown.

See also: ~
https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_signatureHelp

### <a id="vim.lsp.util.extract_completion_items()" class="section-title" href="#vim.lsp.util.extract_completion_items()">Note:</a>
extract_completion_items({result})
Can be used to extract the completion items from a `textDocument/completion` request, which may return one of `CompletionItem[]` , `CompletionList` or null.

Parameters: ~
• {result}  (table) The result of a `textDocument/completion` request

Return: ~
(table) List of completion items

See also: ~
https://microsoft.github.io/language-server-protocol/specification#textDocument_completion

### <a id="vim.lsp.util.get_effective_tabstop()" class="section-title" href="#vim.lsp.util.get_effective_tabstop()">get_effective_tabstop({bufnr})</a>
Returns indentation size.

Parameters: ~
• {bufnr}  (number|nil) Buffer handle, defaults to current

Return: ~
(number) indentation size

See also: ~
'shiftwidth'

### <a id="vim.lsp.util.jump_to_location()" class="section-title" href="#vim.lsp.util.jump_to_location()">Note:</a>
jump_to_location({location}, {offset_encoding}, {reuse_win})
Jumps to a location.

Parameters: ~
• {location}         (table) (`Location`|`LocationLink`)
• {offset_encoding}  "utf-8" [ "utf-16" ](# "utf-16" ) "utf-32"
• {reuse_win}        (boolean) Jump to existing window if buffer is
already open.

Return: ~
(boolean) `true` if the jump succeeded

### <a id="vim.lsp.util.locations_to_items()" class="section-title" href="#vim.lsp.util.locations_to_items()">Note:</a>
locations_to_items({locations}, {offset_encoding})
Returns the items with the byte position calculated correctly and in
sorted order, for display in quickfix and location lists.

The result can be passed to the {list} argument of [setqflist()](#setqflist()) or
[setloclist()](#setloclist()).

Parameters: ~
• {locations}        (table) list of `Location`s or `LocationLink`s
• {offset_encoding}  (string) offset_encoding for locations
utf-8[utf-16](#utf-16)utf-32

Return: ~
(table) list of items

### <a id="vim.lsp.util.lookup_section()" class="section-title" href="#vim.lsp.util.lookup_section()">lookup_section({settings}, {section})</a>
Helper function to return nested values in language server settings

Parameters: ~
• {settings}  a table of language server settings
• {section}   a string indicating the field of the settings table

Return: ~
(table or string) The value of settings accessed via section

### <a id="vim.lsp.util.make_floating_popup_options()" class="section-title" href="#vim.lsp.util.make_floating_popup_options()">Note:</a>
make_floating_popup_options({width}, {height}, {opts})
Creates a table with sensible default options for a floating window. The
table can be passed to [nvim_open_win()](#nvim_open_win()).

Parameters: ~
• {width}   (number) window width (in character cells)
• {height}  (number) window height (in character cells)
• {opts}    (table, optional)
• offset_x (number) offset to add to `col`
• offset_y (number) offset to add to `row`
• border (string or table) override `border`
• focusable (string or table) override `focusable`
• zindex (string or table) override `zindex`, defaults to 50

Return: ~
(table) Options

### <a id="vim.lsp.util.make_formatting_params()" class="section-title" href="#vim.lsp.util.make_formatting_params()">Note:</a>
make_formatting_params({options})
Creates a `DocumentFormattingParams` object for the current buffer and
cursor position.

Parameters: ~
• {options}  (table|nil) with valid `FormattingOptions` entries

Return: ~
`DocumentFormattingParams` object

See also: ~
https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_formatting

### <a id="vim.lsp.util.make_given_range_params()" class="section-title" href="#vim.lsp.util.make_given_range_params()">Note:</a>
make_given_range_params({start_pos}, {end_pos}, {bufnr}, {offset_encoding})
Using the given range in the current buffer, creates an object that is
similar to [vim.lsp.util.make_range_params()](#vim.lsp.util.make_range_params()).

Parameters: ~
• {start_pos}        number[]|nil {row, col} mark-indexed position.
Defaults to the start of the last visual selection.
• {end_pos}          number[]|nil {row, col} mark-indexed position.
Defaults to the end of the last visual selection.
• {bufnr}            (number|nil) buffer handle or 0 for current,
defaults to current
• {offset_encoding}  "utf-8"["utf-16"|"utf-32"](#"utf-16"|"utf-32")nil defaults to
`offset_encoding` of first client of `bufnr`

Return: ~
{ textDocument = { uri = `current_file_uri` }, range = { start =
`start_position`, end = `end_position` } }

### <a id="vim.lsp.util.make_position_params()" class="section-title" href="#vim.lsp.util.make_position_params()">Note:</a>
make_position_params({window}, {offset_encoding})
Creates a `TextDocumentPositionParams` object for the current buffer and
cursor position.

Parameters: ~
• {window}           (number|nil) window handle or 0 for current,
defaults to current
• {offset_encoding}  (string) utf-8[utf-16|utf-32](#utf-16|utf-32)nil defaults to
`offset_encoding` of first client of buffer of
`window`

Return: ~
`TextDocumentPositionParams` object

See also: ~
https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocumentPositionParams

### <a id="vim.lsp.util.make_range_params()" class="section-title" href="#vim.lsp.util.make_range_params()">Note:</a>
make_range_params({window}, {offset_encoding})
Using the current position in the current buffer, creates an object that
can be used as a building block for several LSP requests, such as
`textDocument/codeAction`, `textDocument/colorPresentation`,
`textDocument/rangeFormatting`.

Parameters: ~
• {window}           (number|nil) window handle or 0 for current,
defaults to current
• {offset_encoding}  "utf-8"["utf-16"|"utf-32"](#"utf-16"|"utf-32")nil defaults to
`offset_encoding` of first client of buffer of
`window`

Return: ~
{ textDocument = { uri = `current_file_uri` }, range = { start =
`current_position`, end = `current_position` } }

### <a id="vim.lsp.util.make_text_document_params()" class="section-title" href="#vim.lsp.util.make_text_document_params()">Note:</a>
make_text_document_params({bufnr})
Creates a `TextDocumentIdentifier` object for the current buffer.

Parameters: ~
• {bufnr}  (number|nil) Buffer handle, defaults to current

Return: ~
`TextDocumentIdentifier`

See also: ~
https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocumentIdentifier

### <a id="vim.lsp.util.make_workspace_params()" class="section-title" href="#vim.lsp.util.make_workspace_params()">Note:</a>
make_workspace_params({added}, {removed})
Create the workspace params

Parameters: ~
• {added}    
• {removed}

### <a id="vim.lsp.util.open_floating_preview()" class="section-title" href="#vim.lsp.util.open_floating_preview()">Note:</a>
open_floating_preview({contents}, {syntax}, {opts})
Shows contents in a floating window.

Parameters: ~
• {contents}  (table) of lines to show in window
• {syntax}    (string) of syntax to set for opened buffer
• {opts}      (table) with optional fields (additional keys are passed
on to [nvim_open_win()](#nvim_open_win()))
• height: (number) height of floating window
• width: (number) width of floating window
• wrap: (boolean, default true) wrap long lines
• wrap_at: (number) character to wrap at for computing
height when wrap is enabled
• max_width: (number) maximal width of floating window
• max_height: (number) maximal height of floating window
• pad_top: (number) number of lines to pad contents at top
• pad_bottom: (number) number of lines to pad contents at
bottom
• focus_id: (string) if a popup with this id is opened,
then focus it
• close_events: (table) list of events that closes the
floating window
• focusable: (boolean, default true) Make float focusable
• focus: (boolean, default true) If `true`, and if
{focusable} is also `true`, focus an existing floating
window with the same {focus_id}

Return: ~
bufnr,winnr buffer and window number of the newly created floating
preview window

### <a id="vim.lsp.util.parse_snippet()" class="section-title" href="#vim.lsp.util.parse_snippet()">parse_snippet({input})</a>
Parses snippets in a completion entry.

Parameters: ~
• {input}  (string) unparsed snippet

Return: ~
(string) parsed snippet

### <a id="vim.lsp.util.preview_location()" class="section-title" href="#vim.lsp.util.preview_location()">preview_location({location}, {opts})</a>
Previews a location in a floating window

behavior depends on type of location:
• for Location, range is shown (e.g., function definition)
• for LocationLink, targetRange is shown (e.g., body of function
definition)

Parameters: ~
• {location}  a single `Location` or `LocationLink`

Return: ~
(bufnr,winnr) buffer and window number of floating window or nil

### <a id="vim.lsp.util.rename()" class="section-title" href="#vim.lsp.util.rename()">rename({old_fname}, {new_fname}, {opts})</a>
Rename old_fname to new_fname

Parameters: ~
• {opts}  (table)

### <a id="vim.lsp.util.set_lines()" class="section-title" href="#vim.lsp.util.set_lines()">set_lines({lines}, {A}, {B}, {new_lines})</a>
Replaces text in a range with new text.

CAUTION: Changes in-place!

Parameters: ~
• {lines}      (table) Original list of strings
• {A}          (table) Start position; a 2-tuple of {line, col} numbers
• {B}          (table) End position; a 2-tuple of {line, col} numbers
• {new_lines}  A list of strings to replace the original

Return: ~
(table) The modified {lines} object

### <a id="vim.lsp.util.show_document()" class="section-title" href="#vim.lsp.util.show_document()">Note:</a>
show_document({location}, {offset_encoding}, {opts})
Shows document and optionally jumps to the location.

Parameters: ~
• {location}         (table) (`Location`|`LocationLink`)
• {offset_encoding}  "utf-8" [ "utf-16" ](# "utf-16" ) "utf-32"
• {opts}             (table) options
• reuse_win (boolean) Jump to existing window if
buffer is already open.
• focus (boolean) Whether to focus/jump to location
if possible. Defaults to true.

Return: ~
(boolean) `true` if succeeded

### <a id="vim.lsp.util.stylize_markdown()" class="section-title" href="#vim.lsp.util.stylize_markdown()">Note:</a>
stylize_markdown({bufnr}, {contents}, {opts})
Converts markdown into syntax highlighted regions by stripping the code
blocks and converting them into highlighted code. This will by default
insert a blank line separator after those code block regions to improve
readability.

This method configures the given buffer and returns the lines to set.

If you want to open a popup with fancy markdown, use
`open_floating_preview` instead

Parameters: ~
• {contents}  (table) of lines to show in window
• {opts}      dictionary with optional fields
• height of floating window
• width of floating window
• wrap_at character to wrap at for computing height
• max_width maximal width of floating window
• max_height maximal height of floating window
• pad_top number of lines to pad contents at top
• pad_bottom number of lines to pad contents at bottom
• separator insert separator after code block

Return: ~
width,height size of float

### <a id="vim.lsp.util.symbols_to_items()" class="section-title" href="#vim.lsp.util.symbols_to_items()">symbols_to_items({symbols}, {bufnr})</a>
Converts symbols to quickfix list items.

Parameters: ~
• {symbols}  DocumentSymbol[] or SymbolInformation[]

### <a id="vim.lsp.util.text_document_completion_list_to_complete_items()" class="section-title" href="#vim.lsp.util.text_document_completion_list_to_complete_items()">Note:</a>
text_document_completion_list_to_complete_items({result}, {prefix})
Turns the result of a `textDocument/completion` request into
vim-compatible [complete-items](#complete-items).

Parameters: ~
• {result}  The result of a `textDocument/completion` call, e.g. from
[vim.lsp.buf.completion()](#vim.lsp.buf.completion()), which may be one of
`CompletionItem[]`, `CompletionList` or `null`
• {prefix}  (string) the prefix to filter the completion items

Return: ~
{ matches = complete-items table, incomplete = bool }

See also: ~
[complete-items](#complete-items)

### <a id="vim.lsp.util.trim_empty_lines()" class="section-title" href="#vim.lsp.util.trim_empty_lines()">trim_empty_lines({lines})</a>
Removes empty lines from the beginning and end.

Parameters: ~
• {lines}  (table) list of lines to trim

Return: ~
(table) trimmed list of lines

### <a id="vim.lsp.util.try_trim_markdown_code_blocks()" class="section-title" href="#vim.lsp.util.try_trim_markdown_code_blocks()">Note:</a>
try_trim_markdown_code_blocks({lines})
Accepts markdown lines and tries to reduce them to a filetype if they
comprise just a single code block.

CAUTION: Modifies the input in-place!

Parameters: ~
• {lines}  (table) list of lines

Return: ~
(string) filetype or "markdown" if it was unchanged.


## <a id="lsp-log" class="section-title" href="#lsp-log">Lua Module: Vim.Lsp.Log</a> 

### <a id="vim.lsp.log.get_filename()" class="section-title" href="#vim.lsp.log.get_filename()">get_filename()</a>
Returns the log filename.

Return: ~
(string) log filename

### <a id="vim.lsp.log.get_level()" class="section-title" href="#vim.lsp.log.get_level()">get_level()</a>
Gets the current log level.

Return: ~
(string) current log level

### <a id="vim.lsp.log.set_format_func()" class="section-title" href="#vim.lsp.log.set_format_func()">set_format_func({handle})</a>
Sets formatting function used to format logs

Parameters: ~
• {handle}  (function) function to apply to logging arguments, pass
vim.inspect for multi-line formatting

### <a id="vim.lsp.log.set_level()" class="section-title" href="#vim.lsp.log.set_level()">set_level({level})</a>
Sets the current log level.

Parameters: ~
• {level}  (string or number) One of `vim.lsp.log.levels`

### <a id="vim.lsp.log.should_log()" class="section-title" href="#vim.lsp.log.should_log()">should_log({level})</a>
Checks whether the level is sufficient for logging.

Parameters: ~
• {level}  (number) log level

Return: ~
(bool) true if would log, false if not


## <a id="lsp-rpc" class="section-title" href="#lsp-rpc">Lua Module: Vim.Lsp.Rpc</a> 

### <a id="vim.lsp.rpc.connect()" class="section-title" href="#vim.lsp.rpc.connect()">connect({host}, {port})</a>
Create a LSP RPC client factory that connects via TCP to the given host
and port

Parameters: ~
• {host}  (string)
• {port}  (number)

Return: ~
(function)

### <a id="vim.lsp.rpc.format_rpc_error()" class="section-title" href="#vim.lsp.rpc.format_rpc_error()">format_rpc_error({err})</a>
Constructs an error message from an LSP error object.

Parameters: ~
• {err}  (table) The error object

Return: ~
(string) The formatted error message

### <a id="vim.lsp.rpc.notify()" class="section-title" href="#vim.lsp.rpc.notify()">notify({method}, {params})</a>
Sends a notification to the LSP server.

Parameters: ~
• {method}  (string) The invoked LSP method
• {params}  (table|nil) Parameters for the invoked LSP method

Return: ~
(bool) `true` if notification could be sent, `false` if not

### <a id="vim.lsp.rpc.request()" class="section-title" href="#vim.lsp.rpc.request()">Note:</a>
request({method}, {params}, {callback}, {notify_reply_callback})
Sends a request to the LSP server and runs {callback} upon response.

Parameters: ~
• {method}                 (string) The invoked LSP method
• {params}                 (table|nil) Parameters for the invoked LSP
method
• {callback}               (function) Callback to invoke
• {notify_reply_callback}  (function|nil) Callback to invoke as soon as
a request is no longer pending

Return: ~
(bool, number) `(true, message_id)` if request could be sent, `false`
if not

### <a id="vim.lsp.rpc.rpc_response_error()" class="section-title" href="#vim.lsp.rpc.rpc_response_error()">Note:</a>
rpc_response_error({code}, {message}, {data})
Creates an RPC response object/table.

Parameters: ~
• {code}     (number) RPC error code defined in
`vim.lsp.protocol.ErrorCodes`
• {message}  (string|nil) arbitrary message to send to server
• {data}     any|nil arbitrary data to send to server

### <a id="vim.lsp.rpc.start()" class="section-title" href="#vim.lsp.rpc.start()">Note:</a>
start({cmd}, {cmd_args}, {dispatchers}, {extra_spawn_params})
Starts an LSP server process and create an LSP RPC client object to
interact with it. Communication with the spawned process happens via
stdio. For communication via TCP, spawn a process manually and use
[vim.lsp.rpc.connect()](#vim.lsp.rpc.connect())

Parameters: ~
• {cmd}                 (string) Command to start the LSP server.
• {cmd_args}            (table) List of additional string arguments to
pass to {cmd}.
• {dispatchers}         (table|nil) Dispatchers for LSP message types.
Valid dispatcher names are:
• `"notification"`
• `"server_request"`
• `"on_error"`
• `"on_exit"`
• {extra_spawn_params}  (table|nil) Additional context for the LSP
server process. May contain:
• {cwd} (string) Working directory for the LSP
server process
• {env} (table) Additional environment variables
for LSP server process

Return: ~
Client RPC object.
Methods:
• `notify()` [vim.lsp.rpc.notify()](#vim.lsp.rpc.notify())
• `request()` [vim.lsp.rpc.request()](#vim.lsp.rpc.request())
• `is_closing()` returns a boolean indicating if the RPC is closing.
• `terminate()` terminates the RPC client.


## <a id="lsp-sync" class="section-title" href="#lsp-sync">Lua Module: Vim.Lsp.Sync</a> 

### <a id="vim.lsp.sync.compute_diff()" class="section-title" href="#vim.lsp.sync.compute_diff()">Note:</a>
compute_diff({___MissingCloseParenHere___})
Returns the range table for the difference between prev and curr lines

Parameters: ~
• {prev_lines}       (table) list of lines
• {curr_lines}       (table) list of lines
• {firstline}        (number) line to begin search for first difference
• {lastline}         (number) line to begin search in old_lines for last
difference
• {new_lastline}     (number) line to begin search in new_lines for last
difference
• {offset_encoding}  (string) encoding requested by language server

Return: ~
(table) TextDocumentContentChangeEvent see https://microsoft.github.io/language-server-protocol/specifications/specification-3-17/#textDocumentContentChangeEvent


## <a id="lsp-protocol" class="section-title" href="#lsp-protocol">Lua Module: Vim.Lsp.Protocol</a> 

### <a id="vim.lsp.protocol.make_client_capabilities()" class="section-title" href="#vim.lsp.protocol.make_client_capabilities()">Note:</a>
make_client_capabilities()
Gets a new ClientCapabilities object describing the LSP client
capabilities.

### <a id="vim.lsp.protocol.resolve_capabilities()" class="section-title" href="#vim.lsp.protocol.resolve_capabilities()">Note:</a>
resolve_capabilities({server_capabilities})
Creates a normalized object describing LSP server capabilities.

Parameters: ~
• {server_capabilities}  (table) Table of capabilities supported by the
server

Return: ~
(table) Normalized table of capabilities

vim:tw=78:ts=8:sw=4:sts=4:et:ft=help:norl:

