---
title:  Lsp
layout: ../../layouts/MainLayout.astro
---

  <a name="lsp.txt"></a><a name="lsp"></a><h1> Lsp</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/lsp.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">LSP client/framework <a name="LSP"></a><code class="help-tag">LSP</code></div>
<div class="old-help-para">Nvim supports the Language Server Protocol (LSP), which means it acts as
a client to LSP servers and includes a Lua framework <code>vim.lsp</code> for building
enhanced LSP tools.</div>
<div class="old-help-para">    <a href="https://microsoft.github.io/language-server-protocol/">https://microsoft.github.io/language-server-protocol/</a></div>
<div class="old-help-para">LSP facilitates features like go-to-definition, find-references, hover,
completion, rename, format, refactor, etc., using semantic whole-project
analysis (unlike <a href="tagsrch.html#ctags">ctags</a>).</div>
<div class="old-help-para"><h2 class="help-heading">QUICKSTART<span class="help-heading-tags">                                              <a name="lsp-quickstart"></a><span class="help-tag">lsp-quickstart</span></span></h2></div>
<div class="old-help-para">Nvim provides an LSP client, but the servers are provided by third parties.
Follow these steps to get LSP features:</div>
<div class="old-help-para">  1. Install language servers using your package manager or by
     following the upstream installation instruction.</div>
<div class="old-help-para">     A list of language servers is available at:</div>
<div class="old-help-para">     <a href="https://microsoft.github.io/language-server-protocol/implementors/servers/">https://microsoft.github.io/language-server-protocol/implementors/servers/</a></div>
<div class="old-help-para">  2. Configure the LSP client per language server.
     A minimal example:
<pre>vim.lsp.start({
  name = 'my-server-name',
  cmd = {'name-of-language-server-executable'},
  root_dir = vim.fs.dirname(vim.fs.find({'setup.py', 'pyproject.toml'}, { upward = true })[1]),
})</pre></div>
<div class="old-help-para">     See <a href="lsp.html#vim.lsp.start()">vim.lsp.start()</a> for details.</div>
<div class="old-help-para">  3. Configure keymaps and autocmds to utilize LSP features.
     See <a href="lsp.html#lsp-config">lsp-config</a>.</div>
<div class="old-help-para">                                                        <a name="lsp-config"></a><code class="help-tag-right">lsp-config</code></div>
<div class="old-help-para">Starting a LSP client will automatically report diagnostics via
<a href="diagnostic.html#vim.diagnostic">vim.diagnostic</a>. Read <a href="diagnostic.html#vim.diagnostic.config()">vim.diagnostic.config()</a> to learn how to customize the
display.</div>
<div class="old-help-para">It also sets some buffer options if the options are otherwise empty and if the
language server supports the functionality.</div>
<div class="old-help-para"><div class="help-li" style=""> <a href="options.html#'omnifunc'">'omnifunc'</a> is set to <a href="lsp.html#vim.lsp.omnifunc()">vim.lsp.omnifunc()</a>. This allows to trigger completion
  using <a href="insert.html#i_CTRL-X_CTRL-O">i_CTRL-X_CTRL-O</a>
</div><div class="help-li" style=""> <a href="options.html#'tagfunc'">'tagfunc'</a> is set to <a href="lsp.html#vim.lsp.tagfunc()">vim.lsp.tagfunc()</a>. This enables features like
  go-to-definition, <a href="tagsrch.html#%3Atjump">:tjump</a>, and keymaps like <a href="tagsrch.html#CTRL-%5D">CTRL-]</a>, <a href="windows.html#CTRL-W_%5D">CTRL-W_]</a>,
  <a href="windows.html#CTRL-W_%7D">CTRL-W_}</a> to utilize the language server.
</div><div class="help-li" style=""> <a href="options.html#'formatexpr'">'formatexpr'</a> is set to <a href="lsp.html#vim.lsp.formatexpr()">vim.lsp.formatexpr()</a> if both <a href="options.html#'formatprg'">'formatprg'</a> and
  <a href="options.html#'formatexpr'">'formatexpr'</a> are empty. This allows to format lines via <a href="change.html#gq">gq</a> if the language
  server supports it.
</div></div>
<div class="old-help-para">To use other LSP features like hover, rename, etc. you can setup some
additional keymaps. It's recommended to setup them in a <a href="lsp.html#LspAttach">LspAttach</a> autocmd to
ensure they're only active if there is a LSP client running. An example:
<pre>vim.api.nvim_create_autocmd('LspAttach', {
  callback = function(args)
    vim.keymap.set('n', 'K', vim.lsp.buf.hover, { buffer = args.buf })
  end,
})</pre></div>
<div class="old-help-para">The most used functions are:</div>
<div class="old-help-para"><div class="help-li" style=""> <a href="lsp.html#vim.lsp.buf.hover()">vim.lsp.buf.hover()</a>
</div><div class="help-li" style=""> <a href="lsp.html#vim.lsp.buf.format()">vim.lsp.buf.format()</a>
</div><div class="help-li" style=""> <a href="lsp.html#vim.lsp.buf.references()">vim.lsp.buf.references()</a>
</div><div class="help-li" style=""> <a href="lsp.html#vim.lsp.buf.implementation()">vim.lsp.buf.implementation()</a>
</div><div class="help-li" style=""> <a href="lsp.html#vim.lsp.buf.code_action()">vim.lsp.buf.code_action()</a>
</div></div>
<div class="old-help-para">Not all language servers provide the same capabilities. To ensure you only set
keymaps if the language server supports a feature, you can guard the keymap
calls behind capability checks:
<pre>vim.api.nvim_create_autocmd('LspAttach', {
  callback = function(args)
    local client = vim.lsp.get_client_by_id(args.data.client_id)
    if client.server_capabilities.hoverProvider then
      vim.keymap.set('n', 'K', vim.lsp.buf.hover, { buffer = args.buf })
    end
  end,
})</pre></div>
<div class="old-help-para">To learn what capabilities are available you can run the following command in
a buffer with a started LSP client:</div>
<div class="old-help-para"><pre>:lua =vim.lsp.get_active_clients()[1].server_capabilities</pre></div>
<div class="old-help-para">Full list of features provided by default can be found in <a href="lsp.html#lsp-buf">lsp-buf</a>.</div>
<div class="old-help-para"><h2 class="help-heading">FAQ<span class="help-heading-tags">                                                     <a name="lsp-faq"></a><span class="help-tag">lsp-faq</span></span></h2></div>
<div class="old-help-para"><div class="help-li" style=""> Q: How to force-reload LSP?
  A: Stop all clients, then reload the buffer.<pre>:lua vim.lsp.stop_client(vim.lsp.get_active_clients())
:edit</pre>
</div><div class="help-li" style=""> Q: Why isn't completion working?
  A: In the buffer where you want to use LSP, check that <a href="options.html#'omnifunc'">'omnifunc'</a> is set to
     "v:lua.vim.lsp.omnifunc":<pre>:verbose set omnifunc?</pre>
</div></div>
<div class="old-help-para">     Some other plugin may be overriding the option. To avoid that, you could
     set the option in an <a href="options.html#after-directory">after-directory</a> ftplugin, e.g.
     "after/ftplugin/python.vim".</div>
<div class="old-help-para"><div class="help-li" style=""> Q: How do I run a request synchronously (e.g. for formatting on file save)?
  A: Check if the function has an <code>async</code> parameter and set the value to
  false.
</div></div>
<div class="old-help-para">     E.g. code formatting:<pre>" Auto-format *.rs (rust) files prior to saving them
" (async = false is the default for format)
autocmd BufWritePre *.rs lua vim.lsp.buf.format({ async = false })</pre></div>
<div class="old-help-para">                                                           <a name="lsp-vs-treesitter"></a><code class="help-tag-right">lsp-vs-treesitter</code>
<div class="help-li" style=""> Q: How do LSP and Treesitter compare?
  A: LSP requires a client and language server. The language server uses
     semantic analysis to understand code at a project level. This provides
     language servers with the ability to rename across files, find
     definitions in external libraries and more.
</div></div>
<div class="old-help-para">     Treesitter is a language parsing library that provides excellent tools
     for incrementally parsing text and handling errors. This makes it a great
     fit for editors to understand the contents of the current file for things
     like syntax highlighting, simple goto-definitions, scope analysis and
     more.</div>
<div class="old-help-para">     LSP and Treesitter are both great tools for editing and inspecting code.</div>
<div class="old-help-para"><h2 class="help-heading">LSP API<span class="help-heading-tags">                                                 <a name="lsp-api"></a><span class="help-tag">lsp-api</span></span></h2></div>
<div class="old-help-para">LSP core API is described at <a href="lsp.html#lsp-core">lsp-core</a>.  Those are the core functions for
creating and managing clients.</div>
<div class="old-help-para">The <code>vim.lsp.buf_…</code> functions perform operations for all LSP clients attached
to the given buffer. <a href="lsp.html#lsp-buf">lsp-buf</a></div>
<div class="old-help-para">LSP request/response handlers are implemented as Lua functions (see
<a href="lsp.html#lsp-handler">lsp-handler</a>). The <a href="lsp.html#vim.lsp.handlers">vim.lsp.handlers</a> table defines default handlers used
when creating a new client. Keys are LSP method names:<pre>:lua print(vim.inspect(vim.tbl_keys(vim.lsp.handlers)))</pre></div>
<div class="old-help-para">                                                                  <a name="lsp-method"></a><code class="help-tag-right">lsp-method</code></div>
<div class="old-help-para">Methods are the names of requests and notifications as defined by the LSP
specification. These LSP requests/notifications are defined by default:</div>
<div class="old-help-para">    callHierarchy/incomingCalls
    callHierarchy/outgoingCalls
    textDocument/codeAction
    textDocument/completion
    textDocument/declaration*
    textDocument/definition
    textDocument/documentHighlight
    textDocument/documentSymbol
    textDocument/formatting
    textDocument/hover
    textDocument/implementation*
    textDocument/publishDiagnostics
    textDocument/rangeFormatting
    textDocument/references
    textDocument/rename
    textDocument/signatureHelp
    textDocument/typeDefinition*
    window/logMessage
    window/showMessage
    window/showDocument
    window/showMessageRequest
    workspace/applyEdit
    workspace/symbol</div>
<div class="old-help-para"><div class="help-li" style=""> NOTE: These are sometimes not implemented by servers.
</div></div>
<div class="old-help-para">                                                                 <a name="lsp-handler"></a><code class="help-tag-right">lsp-handler</code></div>
<div class="old-help-para">lsp-handlers are functions with special signatures that are designed to handle
responses and notifications from LSP servers.</div>
<div class="old-help-para">Forlsp-request, each <a href="lsp.html#lsp-handler">lsp-handler</a> has this signature:<pre>function(err, result, ctx, config)</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div>        <code>{err}</code>       (table|nil)
                        When the language server is unable to complete a
                        request, a table with information about the error is
                        sent. Otherwise, it is <code>nil</code>. See <a href="lsp.html#lsp-response">lsp-response</a>.
        <code>{result}</code>    (Result | Params | nil)
                        When the language server is able to successfully
                        complete a request, this contains the <code>result</code> key of
                        the response. See <a href="lsp.html#lsp-response">lsp-response</a>.
        <code>{ctx}</code>       (table)
                        Context describes additional calling state associated
                        with the handler. It consists of the following key,
                        value pairs:</div>
<div class="old-help-para">                        <code>{method}</code>    (string)
                                    The <a href="lsp.html#lsp-method">lsp-method</a> name.
                        <code>{client_id}</code> (number)
                                    The ID of the <a href="lsp.html#vim.lsp.client">vim.lsp.client</a>.
                        <code>{bufnr}</code>     (Buffer)
                                    Buffer handle, or 0 for current.
                        <code>{params}</code>    (table|nil)
                                    The parameters used in the original
                                    request which resulted in this handler
                                    call.
        <code>{config}</code>    (table)
                        Configuration for the handler.</div>
<div class="old-help-para">                        Each handler can define its own configuration table
                        that allows users to customize the behavior of a
                        particular handler.</div>
<div class="old-help-para">                        To configure a particular <a href="lsp.html#lsp-handler">lsp-handler</a>, see:
                            <a href="lsp.html#lsp-handler-configuration">lsp-handler-configuration</a></div>
<div class="old-help-para"><div class="help-column_heading">    Returns:</div>        The <a href="lsp.html#lsp-handler">lsp-handler</a> can respond by returning two values: <code>result, err</code>
        Where <code>err</code> must be shaped like an RPC error:
            <code>{ code, message, data? }</code></div>
<div class="old-help-para">        You can use <a href="lsp.html#vim.lsp.rpc.rpc_response_error()">vim.lsp.rpc.rpc_response_error()</a> to create this object.</div>
<div class="old-help-para">For <a href="lsp.html#lsp-notification">lsp-notification</a>, each <a href="lsp.html#lsp-handler">lsp-handler</a> has this signature:<pre>function(err, result, ctx, config)</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div>        <code>{err}</code>       (nil)
                        This is always <code>nil</code>.
                        See <a href="lsp.html#lsp-notification">lsp-notification</a>
        <code>{result}</code>    (Result)
                        This contains the <code>params</code> key of the notification.
                        See <a href="lsp.html#lsp-notification">lsp-notification</a>
        <code>{ctx}</code>       (table)
                        Context describes additional calling state associated
                        with the handler. It consists of the following key,
                        value pairs:</div>
<div class="old-help-para">                        <code>{method}</code>    (string)
                                        The <a href="lsp.html#lsp-method">lsp-method</a> name.
                        <code>{client_id}</code> (number)
                                        The ID of the <a href="lsp.html#vim.lsp.client">vim.lsp.client</a>.
        <code>{config}</code>    (table)
                        Configuration for the handler.</div>
<div class="old-help-para">                        Each handler can define its own configuration table
                        that allows users to customize the behavior of a
                        particular handler.</div>
<div class="old-help-para">                        For an example, see:
                            <a href="lsp.html#vim.lsp.diagnostic.on_publish_diagnostics()">vim.lsp.diagnostic.on_publish_diagnostics()</a></div>
<div class="old-help-para">                        To configure a particular <a href="lsp.html#lsp-handler">lsp-handler</a>, see:
                            <a href="lsp.html#lsp-handler-configuration">lsp-handler-configuration</a></div>
<div class="old-help-para"><div class="help-column_heading">    Returns:</div>        The <a href="lsp.html#lsp-handler">lsp-handler</a>'s return value will be ignored.</div>
<div class="old-help-para">                                                   <a name="lsp-handler-configuration"></a><code class="help-tag-right">lsp-handler-configuration</code></div>
<div class="old-help-para">To configure the behavior of a builtin <a href="lsp.html#lsp-handler">lsp-handler</a>, the convenient method
<a href="lsp.html#vim.lsp.with()">vim.lsp.with()</a> is provided for users.</div>
<div class="old-help-para">  To configure the behavior of <a href="lsp.html#vim.lsp.diagnostic.on_publish_diagnostics()">vim.lsp.diagnostic.on_publish_diagnostics()</a>,
  consider the following example, where a new <a href="lsp.html#lsp-handler">lsp-handler</a> is created using
  <a href="lsp.html#vim.lsp.with()">vim.lsp.with()</a> that no longer generates signs for the diagnostics:<pre>vim.lsp.handlers["textDocument/publishDiagnostics"] = vim.lsp.with(
  vim.lsp.diagnostic.on_publish_diagnostics, {
    -- Disable signs
    signs = false,
  }
)</pre></div>
<div class="old-help-para">  To enable signs, use <a href="lsp.html#vim.lsp.with()">vim.lsp.with()</a> again to create and assign a new
  <a href="lsp.html#lsp-handler">lsp-handler</a> to <a href="lsp.html#vim.lsp.handlers">vim.lsp.handlers</a> for the associated method:<pre>vim.lsp.handlers["textDocument/publishDiagnostics"] = vim.lsp.with(
  vim.lsp.diagnostic.on_publish_diagnostics, {
    -- Enable signs
    signs = true,
  }
)</pre></div>
<div class="old-help-para">  To configure a handler on a per-server basis, you can use the <code>{handlers}</code> key
  for <a href="lsp.html#vim.lsp.start_client()">vim.lsp.start_client()</a><pre>vim.lsp.start_client {
  ..., -- Other configuration omitted.
  handlers = {
    ["textDocument/publishDiagnostics"] = vim.lsp.with(
      vim.lsp.diagnostic.on_publish_diagnostics, {
        -- Disable virtual_text
        virtual_text = false,
      }
    ),
  },
}</pre></div>
<div class="old-help-para">  or if using 'nvim-lspconfig', you can use the <code>{handlers}</code> key of <code>setup()</code>:<pre>require('lspconfig').rust_analyzer.setup {
  handlers = {
    ["textDocument/publishDiagnostics"] = vim.lsp.with(
      vim.lsp.diagnostic.on_publish_diagnostics, {
        -- Disable virtual_text
        virtual_text = false
      }
    ),
  }
}</pre></div>
<div class="old-help-para">  Some handlers do not have an explicitly named handler function (such as
  ||vim.lsp.diagnostic.on_publish_diagnostics()|). To override these, first
  create a reference to the existing handler:<pre>local on_references = vim.lsp.handlers["textDocument/references"]
vim.lsp.handlers["textDocument/references"] = vim.lsp.with(
  on_references, {
    -- Use location list instead of quickfix list
    loclist = true,
  }
)</pre></div>
<div class="old-help-para">                                                      <a name="lsp-handler-resolution"></a><code class="help-tag-right">lsp-handler-resolution</code>
Handlers can be set by:</div>
<div class="old-help-para"><div class="help-li" style=""> Setting a field in vim.lsp.handlers.                      <a name="vim.lsp.handlers"></a><code class="help-tag-right">vim.lsp.handlers</code>
    vim.lsp.handlers is a global table that contains the default mapping of
    <a href="lsp.html#lsp-method">lsp-method</a> names to <a href="lsp.html#lsp-handlers">lsp-handlers</a>.
</div></div>
<div class="old-help-para">    To override the handler for the <code>"textDocument/definition"</code> method:<pre>vim.lsp.handlers["textDocument/definition"] = my_custom_default_definition</pre></div>
<div class="old-help-para"><div class="help-li" style=""> The <code>{handlers}</code> parameter for <a href="lsp.html#vim.lsp.start_client()">vim.lsp.start_client()</a>.
    This will set the <a href="lsp.html#lsp-handler">lsp-handler</a> as the default handler for this server.
</div></div>
<div class="old-help-para">    For example:<pre>vim.lsp.start_client {
  ..., -- Other configuration omitted.
  handlers = {
    ["textDocument/definition"] = my_custom_server_definition
  },
}</pre>
<div class="help-li" style=""> The <code>{handler}</code> parameter forvim.lsp.buf_request().
    This will set the <a href="lsp.html#lsp-handler">lsp-handler</a> ONLY for the current request.
</div></div>
<div class="old-help-para">    For example:<pre>vim.lsp.buf_request(
  0,
  "textDocument/definition",
  definition_params,
  my_request_custom_definition
)</pre></div>
<div class="old-help-para">In summary, the <a href="lsp.html#lsp-handler">lsp-handler</a> will be chosen based on the current <a href="lsp.html#lsp-method">lsp-method</a>
in the following order:</div>
<div class="old-help-para">1. Handler passed tovim.lsp.buf_request(), if any.
2. Handler defined in <a href="lsp.html#vim.lsp.start_client()">vim.lsp.start_client()</a>, if any.
3. Handler defined in <a href="lsp.html#vim.lsp.handlers">vim.lsp.handlers</a>, if any.</div>
<div class="old-help-para">                                                            <a name="vim.lsp.log_levels"></a><code class="help-tag-right">vim.lsp.log_levels</code>
Log levels are defined in <a href="lua.html#vim.log.levels">vim.log.levels</a></div>
<div class="old-help-para"><h3 class="help-heading">VIM.LSP.PROTOCOL<span class="help-heading-tags">                                              <a name="vim.lsp.protocol"></a><span class="help-tag">vim.lsp.protocol</span></span></h3></div>
<div class="old-help-para">Module <code>vim.lsp.protocol</code> defines constants dictated by the LSP specification,
and helper functions for creating protocol-related objects.
<a href="https://github.com/microsoft/language-server-protocol/raw/gh-pages/_specifications/specification-3-14.md">https://github.com/microsoft/language-server-protocol/raw/gh-pages/_specifications/specification-3-14.md</a></div>
<div class="old-help-para">For example <code>vim.lsp.protocol.ErrorCodes</code> allows reverse lookup by number or
name:<pre>vim.lsp.protocol.TextDocumentSyncKind.Full == 1
vim.lsp.protocol.TextDocumentSyncKind[1] == "Full"</pre></div>
<div class="old-help-para">                                                                <a name="lsp-response"></a><code class="help-tag-right">lsp-response</code>
For the format of the response message, see:
    <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-current/#responseMessage">https://microsoft.github.io/language-server-protocol/specifications/specification-current/#responseMessage</a></div>
<div class="old-help-para">                                                                <a name="lsp-notification"></a><code class="help-tag-right">lsp-notification</code>
For the format of the notification message, see:
    <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-current/#notificationMessage">https://microsoft.github.io/language-server-protocol/specifications/specification-current/#notificationMessage</a></div>
<div class="old-help-para">                                                                <a name="lsp-on-list-handler"></a><code class="help-tag-right">lsp-on-list-handler</code></div>
<div class="old-help-para"><code>on_list</code> receives a table with:</div>
<div class="old-help-para"><div class="help-li" style=""> <code>items</code> table[], structured like <a href="builtin.html#setqflist-what">setqflist-what</a>
</div><div class="help-li" style=""> <code>title</code> string, title for the list.
</div><div class="help-li" style=""> <code>context</code> table|nil. <code>ctx</code> from <a href="lsp.html#lsp-handler">lsp-handler</a>
</div></div>
<div class="old-help-para">This table can be used with vim.fn.setqflist or vim.fn.setloclist. E.g.:
<pre>local function on_list(options)
  vim.fn.setqflist({}, ' ', options)
  vim.api.nvim_command('cfirst')
end

vim.lsp.buf.definition{on_list=on_list}
vim.lsp.buf.references(nil, {on_list=on_list})</pre></div>
<div class="old-help-para">If you prefer loclist do something like this:
<pre>local function on_list(options)
  vim.fn.setloclist(0, {}, ' ', options)
  vim.api.nvim_command('lopen')
end</pre></div>
<div class="old-help-para"><h2 class="help-heading">LSP HIGHLIGHT<span class="help-heading-tags">                                                    <a name="lsp-highlight"></a><span class="help-tag">lsp-highlight</span></span></h2></div>
<div class="old-help-para">Reference Highlights:</div>
<div class="old-help-para">Highlight groups that are meant to be used by <a href="lsp.html#vim.lsp.buf.document_highlight()">vim.lsp.buf.document_highlight()</a>.</div>
<div class="old-help-para">You can see more about the differences in types here:
<a href="https://microsoft.github.io/language-server-protocol/specification#textDocument_documentHighlight">https://microsoft.github.io/language-server-protocol/specification#textDocument_documentHighlight</a></div>
<div class="old-help-para">                                                           <a name="hl-LspReferenceText"></a><code class="help-tag-right">hl-LspReferenceText</code>
LspReferenceText          used for highlighting "text" references
                                                           <a name="hl-LspReferenceRead"></a><code class="help-tag-right">hl-LspReferenceRead</code>
LspReferenceRead          used for highlighting "read" references
                                                          <a name="hl-LspReferenceWrite"></a><code class="help-tag-right">hl-LspReferenceWrite</code>
LspReferenceWrite         used for highlighting "write" references</div>
<div class="old-help-para">                                                      <a name="lsp-highlight-codelens"></a><code class="help-tag-right">lsp-highlight-codelens</code></div>
<div class="old-help-para">Highlight groups related to <a href="lsp.html#lsp-codelens">lsp-codelens</a> functionality.</div>
<div class="old-help-para">                                                              <a name="hl-LspCodeLens"></a><code class="help-tag-right">hl-LspCodeLens</code>
LspCodeLens
    Used to color the virtual text of the codelens. See
    <a href="api.html#nvim_buf_set_extmark()">nvim_buf_set_extmark()</a>.</div>
<div class="old-help-para">LspCodeLensSeparator                                 <a name="hl-LspCodeLensSeparator"></a><code class="help-tag-right">hl-LspCodeLensSeparator</code>
    Used to color the separator between two or more code lenses.</div>
<div class="old-help-para">                                                     <a name="lsp-highlight-signature"></a><code class="help-tag-right">lsp-highlight-signature</code></div>
<div class="old-help-para">Highlight groups related to <a href="lsp.html#vim.lsp.handlers.signature_help()">vim.lsp.handlers.signature_help()</a>.</div>
<div class="old-help-para">                                              <a name="hl-LspSignatureActiveParameter"></a><code class="help-tag-right">hl-LspSignatureActiveParameter</code>
LspSignatureActiveParameter
    Used to highlight the active parameter in the signature help. See
    <a href="lsp.html#vim.lsp.handlers.signature_help()">vim.lsp.handlers.signature_help()</a>.</div>
<div class="old-help-para"><h2 class="help-heading">EVENTS<span class="help-heading-tags">                                                            <a name="lsp-events"></a><span class="help-tag">lsp-events</span></span></h2></div>
<div class="old-help-para">                                                                   <a name="LspAttach"></a><code class="help-tag-right">LspAttach</code>
After an LSP client attaches to a buffer. The <a href="autocmd.html#autocmd-pattern">autocmd-pattern</a> is the
name of the buffer. When used from Lua, the client ID is passed to the
callback in the "data" table. Example:<pre>vim.api.nvim_create_autocmd("LspAttach", {
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
})</pre></div>
<div class="old-help-para">                                                                   <a name="LspDetach"></a><code class="help-tag-right">LspDetach</code>
Just before an LSP client detaches from a buffer. The <a href="autocmd.html#autocmd-pattern">autocmd-pattern</a> is the
name of the buffer. When used from Lua, the client ID is passed to the
callback in the "data" table. Example:<pre>vim.api.nvim_create_autocmd("LspDetach", {
  callback = function(args)
    local client = vim.lsp.get_client_by_id(args.data.client_id)
    -- Do something with the client
    vim.cmd("setlocal tagfunc&lt; omnifunc&lt;")
  end,
})</pre></div>
<div class="old-help-para">Also the following <a href="autocmd.html#User">User</a> <a href="autocmd.html#autocommand">autocommand</a>s are provided:</div>
<div class="old-help-para">LspProgressUpdate                                          <a name="LspProgressUpdate"></a><code class="help-tag-right">LspProgressUpdate</code>
    Upon receipt of a progress notification from the server. See
vim.lsp.util.get_progress_messages().</div>
<div class="old-help-para">LspRequest                                                        <a name="LspRequest"></a><code class="help-tag-right">LspRequest</code>
    After a change to the active set of pending LSP requests. See <code>{requests}</code>
    in <a href="lsp.html#vim.lsp.client">vim.lsp.client</a>.</div>
<div class="old-help-para">Example:<pre>autocmd User LspProgressUpdate redrawstatus
autocmd User LspRequest redrawstatus</pre></div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.lsp<span class="help-heading-tags">                                                 <a name="lsp-core"></a><span class="help-tag">lsp-core</span></span></h2></div>
<div class="old-help-para">buf_attach_client(<code>{bufnr}</code>, <code>{client_id}</code>)          <a name="vim.lsp.buf_attach_client()"></a><code class="help-tag-right">vim.lsp.buf_attach_client()</code>
    Implements the <code>textDocument/did…</code> notifications required to track a
    buffer for any language server.</div>
<div class="old-help-para">    Without calling this, the server won't be notified of changes to a buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>      (number) Buffer handle, or 0 for current
</div><div class="help-li" style=""> <code>{client_id}</code>  (number) Client id
</div></div>
<div class="old-help-para">buf_detach_client(<code>{bufnr}</code>, <code>{client_id}</code>)          <a name="vim.lsp.buf_detach_client()"></a><code class="help-tag-right">vim.lsp.buf_detach_client()</code>
    Detaches client from the specified buffer. Note: While the server is
    notified that the text document (buffer) was closed, it is still able to
    send notifications should it ignore this notification.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>      (number) Buffer handle, or 0 for current
</div><div class="help-li" style=""> <code>{client_id}</code>  (number) Client id
</div></div>
<div class="old-help-para">buf_is_attached(<code>{bufnr}</code>, <code>{client_id}</code>)              <a name="vim.lsp.buf_is_attached()"></a><code class="help-tag-right">vim.lsp.buf_is_attached()</code>
    Checks if a buffer is attached for a particular client.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>      (number) Buffer handle, or 0 for current
</div><div class="help-li" style=""> <code>{client_id}</code>  (number) the client id
</div></div>
<div class="old-help-para">buf_notify(<code>{bufnr}</code>, <code>{method}</code>, <code>{params}</code>)                 <a name="vim.lsp.buf_notify()"></a><code class="help-tag-right">vim.lsp.buf_notify()</code>
    Send a notification to a server</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>   [number] (optional): The number of the buffer
</div><div class="help-li" style=""> <code>{method}</code>  [string]: Name of the request method
</div><div class="help-li" style=""> <code>{params}</code>  [string]: Arguments to send to the server
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        true if any client returns true; false otherwise</div>
<div class="old-help-para">                                                   <a name="vim.lsp.buf_request_all()"></a><code class="help-tag-right">vim.lsp.buf_request_all()</code>
buf_request_all(<code>{bufnr}</code>, <code>{method}</code>, <code>{params}</code>, <code>{callback}</code>)
    Sends an async request for all active clients attached to the buffer.
    Executes the callback on the combined result. Parameters are the same as
vim.lsp.buf_request() but the return result and callback are different.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>     (number) Buffer handle, or 0 for current.
</div><div class="help-li" style=""> <code>{method}</code>    (string) LSP method name
</div><div class="help-li" style=""> <code>{params}</code>    (optional, table) Parameters to send to the server
</div><div class="help-li" style=""> <code>{callback}</code>  (function) The callback to call when all requests are
                    finished.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (function) A function that will cancel all requests which is the same
        as the one returned from <code>buf_request</code>.</div>
<div class="old-help-para">                                                  <a name="vim.lsp.buf_request_sync()"></a><code class="help-tag-right">vim.lsp.buf_request_sync()</code>
buf_request_sync(<code>{bufnr}</code>, <code>{method}</code>, <code>{params}</code>, <code>{timeout_ms}</code>)
    Sends a request to all server and waits for the response of all of them.</div>
<div class="old-help-para">    Calls <a href="lsp.html#vim.lsp.buf_request_all()">vim.lsp.buf_request_all()</a> but blocks Nvim while awaiting the
    result. Parameters are the same asvim.lsp.buf_request() but the return
    result is different. Wait maximum of <code>{timeout_ms}</code> (default 1000) ms.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>       (number) Buffer handle, or 0 for current.
</div><div class="help-li" style=""> <code>{method}</code>      (string) LSP method name
</div><div class="help-li" style=""> <code>{params}</code>      (optional, table) Parameters to send to the server
</div><div class="help-li" style=""> <code>{timeout_ms}</code>  (optional, number, default=1000) Maximum time in
                      milliseconds to wait for a result.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        Map of client_id:request_result. On timeout, cancel or error, returns
        <code>(nil, err)</code> where <code>err</code> is a string describing the failure reason.</div>
<div class="old-help-para">client()                                                      <a name="vim.lsp.client"></a><code class="help-tag-right">vim.lsp.client</code>
    LSP client object. You can get an active client object via
    <a href="lsp.html#vim.lsp.get_client_by_id()">vim.lsp.get_client_by_id()</a> or <a href="lsp.html#vim.lsp.get_active_clients()">vim.lsp.get_active_clients()</a>.</div>
<div class="old-help-para"><div class="help-li" style=""> Methods:
</div><div class="help-li" style="margin-left: 3rem;"> request(method, params, [handler], bufnr) Sends a request to the
        server. This is a thin wrapper around <code>{client.rpc.request}</code> with some
        additional checking. If <code>{handler}</code> is not specified, If one is not
        found there, then an error will occur. Returns: <code>{status}</code>,
        <code>{[client_id]}</code>. <code>{status}</code> is a boolean indicating if the notification
        was successful. If it is <code>false</code>, then it will always be <code>false</code> (the
        client has shutdown). If <code>{status}</code> is <code>true</code>, the function returns
        <code>{request_id}</code> as the second result. You can use this with
        <code>client.cancel_request(request_id)</code> to cancel the request.
</div><div class="help-li" style="margin-left: 3rem;"> request_sync(method, params, timeout_ms, bufnr) Sends a request to the
        server and synchronously waits for the response. This is a wrapper
        around <code>{client.request}</code> Returns: { err=err, result=result }, a
        dictionary, where <code>err</code> and <code>result</code> come from the <a href="lsp.html#lsp-handler">lsp-handler</a>. On
        timeout, cancel or error, returns <code>(nil, err)</code> where <code>err</code> is a string
        describing the failure reason. If the request was unsuccessful returns
        <code>nil</code>.
</div><div class="help-li" style="margin-left: 3rem;"> notify(method, params) Sends a notification to an LSP server. Returns:
        a boolean to indicate if the notification was successful. If it is
        false, then it will always be false (the client has shutdown).
</div><div class="help-li" style="margin-left: 3rem;"> cancel_request(id) Cancels a request with a given request id. Returns:
        same as <code>notify()</code>.
</div><div class="help-li" style="margin-left: 3rem;"> stop([force]) Stops a client, optionally with force. By default, it
        will just ask the server to shutdown without force. If you request to
        stop a client which has previously been requested to shutdown, it will
        automatically escalate and force shutdown.
</div><div class="help-li" style="margin-left: 3rem;"> is_stopped() Checks whether a client is stopped. Returns: true if the
        client is fully stopped.
</div><div class="help-li" style="margin-left: 3rem;"> on_attach(client, bufnr) Runs the on_attach function from the client's
        config if it was defined. Useful for buffer-local setup.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Members
</div><div class="help-li" style="margin-left: 3rem;"> <code>{id}</code> (number): The id allocated to the client.
</div><div class="help-li" style="margin-left: 3rem;"> <code>{name}</code> (string): If a name is specified on creation, that will be
        used. Otherwise it is just the client id. This is used for logs and
        messages.
</div><div class="help-li" style="margin-left: 3rem;"> <code>{rpc}</code> (table): RPC client object, for low level interaction with the
        client. See <a href="lsp.html#vim.lsp.rpc.start()">vim.lsp.rpc.start()</a>.
</div><div class="help-li" style="margin-left: 3rem;"> <code>{offset_encoding}</code> (string): The encoding used for communicating with
        the server. You can modify this in the <code>config</code>'s <code>on_init</code> method
        before text is sent to the server.
</div><div class="help-li" style="margin-left: 3rem;"> <code>{handlers}</code> (table): The handlers used by the client as described in
        <a href="lsp.html#lsp-handler">lsp-handler</a>.
</div><div class="help-li" style="margin-left: 3rem;"> <code>{requests}</code> (table): The current pending requests in flight to the
        server. Entries are key-value pairs with the key being the request ID
        while the value is a table with <code>type</code>, <code>bufnr</code>, and <code>method</code>
        key-value pairs. <code>type</code> is either "pending" for an active request, or
        "cancel" for a cancel request.
</div><div class="help-li" style="margin-left: 3rem;"> <code>{config}</code> (table): copy of the table that was passed by the user to
        <a href="lsp.html#vim.lsp.start_client()">vim.lsp.start_client()</a>.
</div><div class="help-li" style="margin-left: 3rem;"> <code>{server_capabilities}</code> (table): Response from the server sent on
        <code>initialize</code> describing the server's capabilities.
</div></div>
<div class="old-help-para">client_is_stopped(<code>{client_id}</code>)                   <a name="vim.lsp.client_is_stopped()"></a><code class="help-tag-right">vim.lsp.client_is_stopped()</code>
    Checks whether a client is stopped.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{client_id}</code>  (Number)
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        true if client is stopped, false otherwise.</div>
<div class="old-help-para">                                            <a name="vim.lsp.for_each_buffer_client()"></a><code class="help-tag-right">vim.lsp.for_each_buffer_client()</code>
for_each_buffer_client(<code>{bufnr}</code>, <code>{fn}</code>)
    Invokes a function for each LSP client attached to a buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>  (number) Buffer number
</div><div class="help-li" style=""> <code>{fn}</code>     (function) Function to run on each client attached to buffer
                 <code>{bufnr}</code>. The function takes the client, client ID, and buffer
                 number as arguments. Example:<pre>vim.lsp.for_each_buffer_client(0, function(client, client_id, bufnr)
  print(vim.inspect(client))
end)</pre>
</div></div>
<div class="old-help-para">formatexpr(<code>{opts}</code>)                                      <a name="vim.lsp.formatexpr()"></a><code class="help-tag-right">vim.lsp.formatexpr()</code>
    Provides an interface between the built-in client and a <code>formatexpr</code>
    function.</div>
<div class="old-help-para">    Currently only supports a single client. This can be set viasetlocal
    formatexpr=v:lua.vim.lsp.formatexpr()` but will typically or in
    <code>on_attach</code> viavim.api.nvim_buf_set_option(bufnr, 'formatexpr',
    'v:lua.vim.lsp.formatexpr(#{timeout_ms:250})')`.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{opts}</code>  (table) options for customizing the formatting expression
                which takes the following optional keys:
</div><div class="help-li" style="margin-left: 3rem;"> timeout_ms (default 500ms). The timeout period for the
                  formatting request.
</div></div>
<div class="old-help-para">get_active_clients(<code>{filter}</code>)                    <a name="vim.lsp.get_active_clients()"></a><code class="help-tag-right">vim.lsp.get_active_clients()</code>
    Get active clients.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{filter}</code>  (table|nil) A table with key-value pairs used to filter the
                  returned clients. The available keys are:
</div><div class="help-li" style="margin-left: 3rem;"> id (number): Only return clients with the given id
</div><div class="help-li" style="margin-left: 3rem;"> bufnr (number): Only return clients attached to this
                    buffer
</div><div class="help-li" style="margin-left: 3rem;"> name (string): Only return clients with the given name
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) List of <a href="lsp.html#vim.lsp.client">vim.lsp.client</a> objects</div>
<div class="old-help-para">                                          <a name="vim.lsp.get_buffers_by_client_id()"></a><code class="help-tag-right">vim.lsp.get_buffers_by_client_id()</code>
get_buffers_by_client_id(<code>{client_id}</code>)
    Returns list of buffers attached to client_id.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{client_id}</code>  (number) client id
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (list) of buffer ids</div>
<div class="old-help-para">get_client_by_id(<code>{client_id}</code>)                     <a name="vim.lsp.get_client_by_id()"></a><code class="help-tag-right">vim.lsp.get_client_by_id()</code>
    Gets a client by id, or nil if the id is invalid. The returned client may
    not yet be fully initialized.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{client_id}</code>  (number) client id
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        <a href="lsp.html#vim.lsp.client">vim.lsp.client</a> object, or nil</div>
<div class="old-help-para">get_log_path()                                        <a name="vim.lsp.get_log_path()"></a><code class="help-tag-right">vim.lsp.get_log_path()</code>
    Gets the path of the logfile used by the LSP client.</div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (String) Path to logfile.</div>
<div class="old-help-para">omnifunc(<code>{findstart}</code>, <code>{base}</code>)                             <a name="vim.lsp.omnifunc()"></a><code class="help-tag-right">vim.lsp.omnifunc()</code>
    Implements <a href="options.html#'omnifunc'">'omnifunc'</a> compatible LSP completion.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{findstart}</code>  0 or 1, decides behavior
</div><div class="help-li" style=""> <code>{base}</code>       If findstart=0, text to match against
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (number) Decided by <code>{findstart}</code>:
<div class="help-li" style=""> findstart=0: column where the completion starts, or -2 or -3
</div><div class="help-li" style=""> findstart=1: list of matches (actually just calls <a href="builtin.html#complete()">complete()</a>)
</div></div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="insert.html#complete-functions">complete-functions</a>
        <a href="insert.html#complete-items">complete-items</a>
        <a href="autocmd.html#CompleteDone">CompleteDone</a></div>
<div class="old-help-para">set_log_level(<code>{level}</code>)                               <a name="vim.lsp.set_log_level()"></a><code class="help-tag-right">vim.lsp.set_log_level()</code>
    Sets the global log level for LSP logging.</div>
<div class="old-help-para">    Levels by name: "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "OFF"</div>
<div class="old-help-para">    Level numbers begin with "TRACE" at 0</div>
<div class="old-help-para">    Use <code>lsp.log_levels</code> for reverse lookup.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{level}</code>  [number|string] the case insensitive level name or number
</div></div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="lsp.html#vim.lsp.log_levels">vim.lsp.log_levels</a></div>
<div class="old-help-para">start(<code>{config}</code>, <code>{opts}</code>)                                      <a name="vim.lsp.start()"></a><code class="help-tag-right">vim.lsp.start()</code>
    Create a new LSP client and start a language server or reuses an already
    running client if one is found matching <code>name</code> and <code>root_dir</code>. Attaches
    the current buffer to the client.</div>
<div class="old-help-para">    Example:
<pre>vim.lsp.start({
   name = 'my-server-name',
   cmd = {'name-of-language-server-executable'},
   root_dir = vim.fs.dirname(vim.fs.find({'pyproject.toml', 'setup.py'}, { upward = true })[1]),
})</pre></div>
<div class="old-help-para">    See <a href="lsp.html#vim.lsp.start_client()">vim.lsp.start_client()</a> for all available options. The most important
    are:</div>
<div class="old-help-para"><div class="help-li" style=""> <code>name</code> arbitrary name for the LSP client. Should be unique per language
      server.
</div><div class="help-li" style=""> <code>cmd</code> command (in list form) used to start the language server. Must be
      absolute, or found on <code>$PATH</code>. Shell constructs like <code>~</code> are not
      expanded.
</div><div class="help-li" style=""> <code>root_dir</code> path to the project root. By default this is used to decide
      if an existing client should be re-used. The example above uses
      <a href="lua.html#vim.fs.find()">vim.fs.find()</a> and <a href="lua.html#vim.fs.dirname()">vim.fs.dirname()</a> to detect the root by traversing
      the file system upwards starting from the current directory until either
      a <code>pyproject.toml</code> or <code>setup.py</code> file is found.
</div><div class="help-li" style=""> <code>workspace_folders</code> list of <code>{ uri:string, name: string }</code> tables
      specifying the project root folders used by the language server. If
      <code>nil</code> the property is derived from <code>root_dir</code> for convenience.
</div></div>
<div class="old-help-para">    Language servers use this information to discover metadata like the
    dependencies of your project and they tend to index the contents within
    the project folder.</div>
<div class="old-help-para">    To ensure a language server is only started for languages it can handle,
    make sure to call <a href="lsp.html#vim.lsp.start()">vim.lsp.start()</a> within a <a href="autocmd.html#FileType">FileType</a> autocmd. Either
    use <a href="autocmd.html#%3Aau">:au</a>, <a href="api.html#nvim_create_autocmd()">nvim_create_autocmd()</a> or put the call in a
    <code>ftplugin/&lt;filetype_name&gt;.lua</code> (See <a href="usr_05.html#ftplugin-name">ftplugin-name</a>)</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{config}</code>  (table) Same configuration as documented in
                  <a href="lsp.html#vim.lsp.start_client()">vim.lsp.start_client()</a>
</div><div class="help-li" style=""> <code>{opts}</code>    nil|table Optional keyword arguments:
</div><div class="help-li" style="margin-left: 3rem;"> reuse_client (fun(client: client, config: table): boolean)
                    Predicate used to decide if a client should be re-used.
                    Used on all running clients. The default implementation
                    re-uses a client if name and root_dir matches.
</div><div class="help-li" style="margin-left: 3rem;"> bufnr (number) Buffer handle to attach to if starting or
                    re-using a client (0 for current).
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (number|nil) client_id</div>
<div class="old-help-para">start_client(<code>{config}</code>)                                <a name="vim.lsp.start_client()"></a><code class="help-tag-right">vim.lsp.start_client()</code>
    Starts and initializes a client with the given configuration.</div>
<div class="old-help-para">    Parameter <code>cmd</code> is required.</div>
<div class="old-help-para">    The following parameters describe fields in the <code>{config}</code> table.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{cmd}</code>                (table|string|fun(dispatchers: table):table)
                             command string or list treated like <a href="builtin.html#jobstart()">jobstart()</a>.
                             The command must launch the language server
                             process. <code>cmd</code> can also be a function that
                             creates an RPC client. The function receives a
                             dispatchers table and must return a table with
                             the functions <code>request</code>, <code>notify</code>, <code>is_closing</code>
                             and <code>terminate</code> See <a href="lsp.html#vim.lsp.rpc.request()">vim.lsp.rpc.request()</a> and
                             <a href="lsp.html#vim.lsp.rpc.notify()">vim.lsp.rpc.notify()</a> For TCP there is a
                             built-in rpc client factory:
                             <a href="lsp.html#vim.lsp.rpc.connect()">vim.lsp.rpc.connect()</a>
</div><div class="help-li" style=""> <code>{cmd_cwd}</code>            (string, default=|getcwd()|) Directory to launch
                             the <code>cmd</code> process. Not related to <code>root_dir</code>.
</div><div class="help-li" style=""> <code>{cmd_env}</code>            (table) Environment flags to pass to the LSP on
                             spawn. Can be specified using keys like a map or
                             as a list with <code>k=v</code> pairs or both. Non-string values are coerced to
                             string. Example:<pre>{ "PRODUCTION=true"; "TEST=123"; PORT = 8080; HOST = "0.0.0.0"; }</pre>
</div></div>
<div class="old-help-para"><div class="help-li" style=""> <code>{detached}</code>           (boolean, default true) Daemonize the server
                             process so that it runs in a separate process
                             group from Nvim. Nvim will shutdown the process
                             on exit, but if Nvim fails to exit cleanly this
                             could leave behind orphaned server processes.
</div><div class="help-li" style=""> <code>{workspace_folders}</code>  (table) List of workspace folders passed to the
                             language server. For backwards compatibility
                             rootUri and rootPath will be derived from the
                             first workspace folder in this list. See
                             <code>workspaceFolders</code> in the LSP spec.
</div><div class="help-li" style=""> <code>{capabilities}</code>       Map overriding the default capabilities defined
                             by <a href="lsp.html#vim.lsp.protocol.make_client_capabilities()">vim.lsp.protocol.make_client_capabilities()</a>,
                             passed to the language server on initialization.
                             Hint: use make_client_capabilities() and modify
                             its result.
</div><div class="help-li" style="margin-left: 3rem;"> Note: To send an empty dictionary use
                               <code>{[vim.type_idx]=vim.types.dictionary}</code>, else
                               it will be encoded as an array.
</div><div class="help-li" style=""> <code>{handlers}</code>           Map of language server method names to
                             <a href="lsp.html#lsp-handler">lsp-handler</a>
</div><div class="help-li" style=""> <code>{settings}</code>           Map with language server specific settings. These
                             are returned to the language server if requested
                             via <code>workspace/configuration</code>. Keys are
                             case-sensitive.
</div><div class="help-li" style=""> <code>{commands}</code>           (table) Table that maps string of clientside
                             commands to user-defined functions. Commands
                             passed to start_client take precedence over the
                             global command registry. Each key must be a
                             unique command name, and the value is a function
                             which is called if any LSP action (code action,
                             code lenses, ...) triggers the command.
</div><div class="help-li" style=""> <code>{init_options}</code>       Values to pass in the initialization request as
                             <code>initializationOptions</code>. See <code>initialize</code> in the
                             LSP spec.
</div><div class="help-li" style=""> <code>{name}</code>               (string, default=client-id) Name in log messages.
</div><div class="help-li" style=""> <code>{get_language_id}</code>    function(bufnr, filetype) -&gt; language ID as
                             string. Defaults to the filetype.
</div><div class="help-li" style=""> <code>{offset_encoding}</code>    (default="utf-16") One of "utf-8", "utf-16", or
                             "utf-32" which is the encoding that the LSP
                             server expects. Client does not verify this is
                             correct.
</div><div class="help-li" style=""> <code>{on_error}</code>           Callback with parameters (code, ...), invoked
                             when the client operation throws an error. <code>code</code>
                             is a number describing the error. Other arguments
                             may be passed depending on the error kind. See
                             <code>vim.lsp.rpc.client_errors</code> for possible errors.
                             Use <code>vim.lsp.rpc.client_errors[code]</code> to get
                             human-friendly name.
</div><div class="help-li" style=""> <code>{before_init}</code>        Callback with parameters (initialize_params,
                             config) invoked before the LSP "initialize"
                             phase, where <code>params</code> contains the parameters
                             being sent to the server and <code>config</code> is the
                             config that was passed to
                             <a href="lsp.html#vim.lsp.start_client()">vim.lsp.start_client()</a>. You can use this to
                             modify parameters before they are sent.
</div><div class="help-li" style=""> <code>{on_init}</code>            Callback (client, initialize_result) invoked
                             after LSP "initialize", where <code>result</code> is a table
                             of <code>capabilities</code> and anything else the server
                             may send. For example, clangd sends
                             <code>initialize_result.offsetEncoding</code> if
                             <code>capabilities.offsetEncoding</code> was sent to it. You
                             can only modify the <code>client.offset_encoding</code> here
                             before any notifications are sent. Most language
                             servers expect to be sent client specified
                             settings after initialization. Neovim does not
                             make this assumption. A
                             <code>workspace/didChangeConfiguration</code> notification
                             should be sent to the server during on_init.
</div><div class="help-li" style=""> <code>{on_exit}</code>            Callback (code, signal, client_id) invoked on
                             client exit.
</div><div class="help-li" style="margin-left: 3rem;"> code: exit code of the process
</div><div class="help-li" style="margin-left: 3rem;"> signal: number describing the signal used to
                               terminate (if any)
</div><div class="help-li" style="margin-left: 3rem;"> client_id: client handle
</div><div class="help-li" style=""> <code>{on_attach}</code>          Callback (client, bufnr) invoked when client
                             attaches to a buffer.
</div><div class="help-li" style=""> <code>{trace}</code>              "off" | "messages" | "verbose" | nil passed
                             directly to the language server in the initialize
                             request. Invalid/empty values will default to
                             "off"
</div><div class="help-li" style=""> <code>{flags}</code>              A table with flags for the client. The current
                             (experimental) flags are:
</div><div class="help-li" style="margin-left: 3rem;"> allow_incremental_sync (bool, default true):
                               Allow using incremental sync for buffer edits
</div><div class="help-li" style="margin-left: 3rem;"> debounce_text_changes (number, default 150):
                               Debounce didChange notifications to the server
                               by the given number in milliseconds. No
                               debounce occurs if nil
</div><div class="help-li" style="margin-left: 3rem;"> exit_timeout (number|boolean, default false):
                               Milliseconds to wait for server to exit cleanly
                               after sending the "shutdown" request before
                               sending kill -15. If set to false, nvim exits
                               immediately after sending the "shutdown"
                               request to the server.
</div><div class="help-li" style=""> <code>{root_dir}</code>           (string) Directory where the LSP server will base
                             its workspaceFolders, rootUri, and rootPath on
                             initialization.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        Client id. <a href="lsp.html#vim.lsp.get_client_by_id()">vim.lsp.get_client_by_id()</a> Note: client may not be fully
        initialized. Use <code>on_init</code> to do any actions once the client has been
        initialized.</div>
<div class="old-help-para">stop_client(<code>{client_id}</code>, <code>{force}</code>)                      <a name="vim.lsp.stop_client()"></a><code class="help-tag-right">vim.lsp.stop_client()</code>
    Stops a client(s).</div>
<div class="old-help-para">    You can also use the <code>stop()</code> function on a <a href="lsp.html#vim.lsp.client">vim.lsp.client</a> object. To
    stop all clients:
<pre>vim.lsp.stop_client(vim.lsp.get_active_clients())</pre></div>
<div class="old-help-para">    By default asks the server to shutdown, unless stop was requested already
    for this client, then force-shutdown is attempted.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{client_id}</code>  client id or <a href="lsp.html#vim.lsp.client">vim.lsp.client</a> object, or list thereof
</div><div class="help-li" style=""> <code>{force}</code>      (boolean) (optional) shutdown forcefully
</div></div>
<div class="old-help-para">tagfunc(<code>{...}</code>)                                             <a name="vim.lsp.tagfunc()"></a><code class="help-tag-right">vim.lsp.tagfunc()</code>
    Provides an interface between the built-in client and <a href="options.html#'tagfunc'">'tagfunc'</a>.</div>
<div class="old-help-para">    When used with normal mode commands (e.g. <a href="tagsrch.html#CTRL-%5D">CTRL-]</a>) this will invoke the
    "textDocument/definition" LSP method to find the tag under the cursor.
    Otherwise, uses "workspace/symbol". If no results are returned from any
    LSP servers, falls back to using built-in tags.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{pattern}</code>  Pattern used to find a workspace symbol
</div><div class="help-li" style=""> <code>{flags}</code>    See <a href="tagsrch.html#tag-function">tag-function</a>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        A list of matching tags</div>
<div class="old-help-para">with(<code>{handler}</code>, <code>{override_config}</code>)                            <a name="vim.lsp.with()"></a><code class="help-tag-right">vim.lsp.with()</code>
    Function to manage overriding defaults for LSP handlers.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{handler}</code>          (function) See <a href="lsp.html#lsp-handler">lsp-handler</a>
</div><div class="help-li" style=""> <code>{override_config}</code>  (table) Table containing the keys to override
                           behavior of the <code>{handler}</code>
</div></div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.lsp.buf<span class="help-heading-tags">                                              <a name="lsp-buf"></a><span class="help-tag">lsp-buf</span></span></h2></div>
<div class="old-help-para">                                          <a name="vim.lsp.buf.add_workspace_folder()"></a><code class="help-tag-right">vim.lsp.buf.add_workspace_folder()</code>
add_workspace_folder(<code>{workspace_folder}</code>)
    Add the folder at path to the workspace folders. If <code>{path}</code> is not
    provided, the user will be prompted for a path using <a href="builtin.html#input()">input()</a>.</div>
<div class="old-help-para">clear_references()                            <a name="vim.lsp.buf.clear_references()"></a><code class="help-tag-right">vim.lsp.buf.clear_references()</code>
    Removes document highlights from current buffer.</div>
<div class="old-help-para">code_action(<code>{options}</code>)                             <a name="vim.lsp.buf.code_action()"></a><code class="help-tag-right">vim.lsp.buf.code_action()</code>
    Selects a code action available at the current cursor position.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{options}</code>  (table|nil) Optional table which holds the following
                   optional fields:
</div><div class="help-li" style="margin-left: 3rem;"> context: (table|nil) Corresponds to <code>CodeActionContext</code> of the LSP specification:
</div><div class="help-li" style="margin-left: 4rem;"> diagnostics (table|nil): LSP`Diagnostic[]` . Inferred from the current position if not provided.
</div><div class="help-li" style="margin-left: 4rem;"> only (table|nil): List of LSP <code>CodeActionKind</code>s used to
                       filter the code actions. Most language servers support
                       values like <code>refactor</code> or <code>quickfix</code>.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> filter: (function|nil) Predicate taking an <code>CodeAction</code>
                     and returning a boolean.
</div><div class="help-li" style=""> apply: (boolean|nil) When set to <code>true</code>, and there is
                     just one remaining action (after filtering), the action
                     is applied without user query.
</div><div class="help-li" style=""> range: (table|nil) Range for which code actions should be
                     requested. If in visual mode this defaults to the active
                     selection. Table must contain <code>start</code> and <code>end</code> keys with
                     <code>{row, col}</code> tuples using mark-like indexing. See
                     <a href="api.html#api-indexing">api-indexing</a>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_codeAction">https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_codeAction</a></div>
<div class="old-help-para">completion(<code>{context}</code>)                               <a name="vim.lsp.buf.completion()"></a><code class="help-tag-right">vim.lsp.buf.completion()</code>
    Retrieves the completion items at the current cursor position. Can only be
    called in Insert mode.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{context}</code>  (context support not yet implemented) Additional
                   information about the context in which a completion was
                   triggered (how it was triggered, and by which trigger
                   character, if applicable)
</div></div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        vim.lsp.protocol.constants.CompletionTriggerKind</div>
<div class="old-help-para">declaration(<code>{options}</code>)                             <a name="vim.lsp.buf.declaration()"></a><code class="help-tag-right">vim.lsp.buf.declaration()</code>
    Jumps to the declaration of the symbol under the cursor.
    Note:
        Many servers do not implement this method. Generally, see
        <a href="lsp.html#vim.lsp.buf.definition()">vim.lsp.buf.definition()</a> instead.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{options}</code>  (table|nil) additional options
</div><div class="help-li" style="margin-left: 3rem;"> reuse_win: (boolean) Jump to existing window if buffer is
                     already open.
</div><div class="help-li" style="margin-left: 3rem;"> on_list: (function) handler for list results. See
                     <a href="lsp.html#lsp-on-list-handler">lsp-on-list-handler</a>
</div></div>
<div class="old-help-para">definition(<code>{options}</code>)                               <a name="vim.lsp.buf.definition()"></a><code class="help-tag-right">vim.lsp.buf.definition()</code>
    Jumps to the definition of the symbol under the cursor.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{options}</code>  (table|nil) additional options
</div><div class="help-li" style="margin-left: 3rem;"> reuse_win: (boolean) Jump to existing window if buffer is
                     already open.
</div><div class="help-li" style="margin-left: 3rem;"> on_list: (function) handler for list results. See
                     <a href="lsp.html#lsp-on-list-handler">lsp-on-list-handler</a>
</div></div>
<div class="old-help-para">document_highlight()                        <a name="vim.lsp.buf.document_highlight()"></a><code class="help-tag-right">vim.lsp.buf.document_highlight()</code>
    Send request to the server to resolve document highlights for the current
    text document position. This request can be triggered by a key mapping or
    by events such as <code>CursorHold</code>, e.g.:
<pre>autocmd CursorHold  &lt;buffer&gt; lua vim.lsp.buf.document_highlight()
autocmd CursorHoldI &lt;buffer&gt; lua vim.lsp.buf.document_highlight()
autocmd CursorMoved &lt;buffer&gt; lua vim.lsp.buf.clear_references()</pre></div>
<div class="old-help-para">    Note: Usage of <a href="lsp.html#vim.lsp.buf.document_highlight()">vim.lsp.buf.document_highlight()</a> requires the following
    highlight groups to be defined or you won't be able to see the actual
    highlights. <a href="lsp.html#hl-LspReferenceText">hl-LspReferenceText</a> <a href="lsp.html#hl-LspReferenceRead">hl-LspReferenceRead</a>
    <a href="lsp.html#hl-LspReferenceWrite">hl-LspReferenceWrite</a></div>
<div class="old-help-para">document_symbol(<code>{options}</code>)                     <a name="vim.lsp.buf.document_symbol()"></a><code class="help-tag-right">vim.lsp.buf.document_symbol()</code>
    Lists all symbols in the current buffer in the quickfix window.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{options}</code>  (table|nil) additional options
</div><div class="help-li" style="margin-left: 3rem;"> on_list: (function) handler for list results. See
                     <a href="lsp.html#lsp-on-list-handler">lsp-on-list-handler</a>
</div></div>
<div class="old-help-para">execute_command(<code>{command_params}</code>)              <a name="vim.lsp.buf.execute_command()"></a><code class="help-tag-right">vim.lsp.buf.execute_command()</code>
    Executes an LSP server command.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{command_params}</code>  (table) A valid <code>ExecuteCommandParams</code> object
</div></div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-current/#workspace_executeCommand">https://microsoft.github.io/language-server-protocol/specifications/specification-current/#workspace_executeCommand</a></div>
<div class="old-help-para">format(<code>{options}</code>)                                       <a name="vim.lsp.buf.format()"></a><code class="help-tag-right">vim.lsp.buf.format()</code>
    Formats a buffer using the attached (and optionally filtered) language
    server clients.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{options}</code>  table|nil Optional table which holds the following optional
                   fields:
</div><div class="help-li" style="margin-left: 3rem;"> formatting_options (table|nil): Can be used to specify
                     FormattingOptions. Some unspecified options will be
                     automatically derived from the current Neovim options.
                     See <a href="https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#formattingOptions">https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#formattingOptions</a>
</div><div class="help-li" style="margin-left: 3rem;"> timeout_ms (integer|nil, default 1000): Time in
                     milliseconds to block for formatting requests. No effect
                     if async=true
</div><div class="help-li" style="margin-left: 3rem;"> bufnr (number|nil): Restrict formatting to the clients
                     attached to the given buffer, defaults to the current
                     buffer (0).
</div><div class="help-li" style=""> filter (function|nil): Predicate used to filter clients.
                     Receives a client as argument and must return a boolean.
                     Clients matching the predicate are included. Example:               •<pre>-- Never request typescript-language-server for formatting
vim.lsp.buf.format {
  filter = function(client) return client.name ~= "tsserver" end
}</pre>
</div></div>
<div class="old-help-para"><div class="help-li" style=""> async boolean|nil If true the method won't block.
                     Defaults to false. Editing the buffer while formatting
                     asynchronous can lead to unexpected changes.
</div><div class="help-li" style=""> id (number|nil): Restrict formatting to the client with
                     ID (client.id) matching this field.
</div><div class="help-li" style=""> name (string|nil): Restrict formatting to the client with
                     name (client.name) matching this field.
</div><div class="help-li" style=""> range (table|nil) Range to format. Table must contain
                     <code>start</code> and <code>end</code> keys with <code>{row, col}</code> tuples using (1,0)
                     indexing. Defaults to current selection in visual mode
                     Defaults to <code>nil</code> in other modes, formatting the full
                     buffer
</div></div>
<div class="old-help-para">hover()                                                  <a name="vim.lsp.buf.hover()"></a><code class="help-tag-right">vim.lsp.buf.hover()</code>
    Displays hover information about the symbol under the cursor in a floating
    window. Calling the function twice will jump into the floating window.</div>
<div class="old-help-para">implementation(<code>{options}</code>)                       <a name="vim.lsp.buf.implementation()"></a><code class="help-tag-right">vim.lsp.buf.implementation()</code>
    Lists all the implementations for the symbol under the cursor in the
    quickfix window.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{options}</code>  (table|nil) additional options
</div><div class="help-li" style="margin-left: 3rem;"> on_list: (function) handler for list results. See
                     <a href="lsp.html#lsp-on-list-handler">lsp-on-list-handler</a>
</div></div>
<div class="old-help-para">incoming_calls()                                <a name="vim.lsp.buf.incoming_calls()"></a><code class="help-tag-right">vim.lsp.buf.incoming_calls()</code>
    Lists all the call sites of the symbol under the cursor in the <a href="quickfix.html#quickfix">quickfix</a>
    window. If the symbol can resolve to multiple items, the user can pick one
    in the <a href="builtin.html#inputlist()">inputlist()</a>.</div>
<div class="old-help-para">list_workspace_folders()                <a name="vim.lsp.buf.list_workspace_folders()"></a><code class="help-tag-right">vim.lsp.buf.list_workspace_folders()</code>
    List workspace folders.</div>
<div class="old-help-para">outgoing_calls()                                <a name="vim.lsp.buf.outgoing_calls()"></a><code class="help-tag-right">vim.lsp.buf.outgoing_calls()</code>
    Lists all the items that are called by the symbol under the cursor in the
    <a href="quickfix.html#quickfix">quickfix</a> window. If the symbol can resolve to multiple items, the user
    can pick one in the <a href="builtin.html#inputlist()">inputlist()</a>.</div>
<div class="old-help-para">references(<code>{context}</code>, <code>{options}</code>)                    <a name="vim.lsp.buf.references()"></a><code class="help-tag-right">vim.lsp.buf.references()</code>
    Lists all the references to the symbol under the cursor in the quickfix
    window.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{context}</code>  (table) Context for the request
</div><div class="help-li" style=""> <code>{options}</code>  (table|nil) additional options
</div><div class="help-li" style="margin-left: 3rem;"> on_list: (function) handler for list results. See
                     <a href="lsp.html#lsp-on-list-handler">lsp-on-list-handler</a>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_references">https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_references</a></div>
<div class="old-help-para">                                       <a name="vim.lsp.buf.remove_workspace_folder()"></a><code class="help-tag-right">vim.lsp.buf.remove_workspace_folder()</code>
remove_workspace_folder(<code>{workspace_folder}</code>)
    Remove the folder at path from the workspace folders. If <code>{path}</code> is not
    provided, the user will be prompted for a path using <a href="builtin.html#input()">input()</a>.</div>
<div class="old-help-para">rename(<code>{new_name}</code>, <code>{options}</code>)                           <a name="vim.lsp.buf.rename()"></a><code class="help-tag-right">vim.lsp.buf.rename()</code>
    Renames all references to the symbol under the cursor.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{new_name}</code>  (string|nil) If not provided, the user will be prompted
                    for a new name using <a href="lua.html#vim.ui.input()">vim.ui.input()</a>.
</div><div class="help-li" style=""> <code>{options}</code>   (table|nil) additional options
</div><div class="help-li" style="margin-left: 3rem;"> filter (function|nil): Predicate used to filter clients.
                      Receives a client as argument and must return a boolean.
                      Clients matching the predicate are included.
</div><div class="help-li" style="margin-left: 3rem;"> name (string|nil): Restrict clients used for rename to
                      ones where client.name matches this field.
</div></div>
<div class="old-help-para">server_ready()                                    <a name="vim.lsp.buf.server_ready()"></a><code class="help-tag-right">vim.lsp.buf.server_ready()</code>
    Checks whether the language servers attached to the current buffer are
    ready.</div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        <code>true</code> if server responds.</div>
<div class="old-help-para">signature_help()                                <a name="vim.lsp.buf.signature_help()"></a><code class="help-tag-right">vim.lsp.buf.signature_help()</code>
    Displays signature information about the symbol under the cursor in a
    floating window.</div>
<div class="old-help-para">type_definition(<code>{options}</code>)                     <a name="vim.lsp.buf.type_definition()"></a><code class="help-tag-right">vim.lsp.buf.type_definition()</code>
    Jumps to the definition of the type of the symbol under the cursor.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{options}</code>  (table|nil) additional options
</div><div class="help-li" style="margin-left: 3rem;"> reuse_win: (boolean) Jump to existing window if buffer is
                     already open.
</div><div class="help-li" style="margin-left: 3rem;"> on_list: (function) handler for list results. See
                     <a href="lsp.html#lsp-on-list-handler">lsp-on-list-handler</a>
</div></div>
<div class="old-help-para">workspace_symbol(<code>{query}</code>, <code>{options}</code>)          <a name="vim.lsp.buf.workspace_symbol()"></a><code class="help-tag-right">vim.lsp.buf.workspace_symbol()</code>
    Lists all symbols in the current workspace in the quickfix window.</div>
<div class="old-help-para">    The list is filtered against <code>{query}</code>; if the argument is omitted from the
    call, the user is prompted to enter a string on the command line. An empty
    string means no filtering is done.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{query}</code>    (string, optional)
</div><div class="help-li" style=""> <code>{options}</code>  (table|nil) additional options
</div><div class="help-li" style="margin-left: 3rem;"> on_list: (function) handler for list results. See
                     <a href="lsp.html#lsp-on-list-handler">lsp-on-list-handler</a>
</div></div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.lsp.diagnostic<span class="help-heading-tags">                                <a name="lsp-diagnostic"></a><span class="help-tag">lsp-diagnostic</span></span></h2></div>
<div class="old-help-para">get_namespace(<code>{client_id}</code>)                <a name="vim.lsp.diagnostic.get_namespace()"></a><code class="help-tag-right">vim.lsp.diagnostic.get_namespace()</code>
    Get the diagnostic namespace associated with an LSP client
    <a href="diagnostic.html#vim.diagnostic">vim.diagnostic</a>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{client_id}</code>  (number) The id of the LSP client
</div></div>
<div class="old-help-para">                                 <a name="vim.lsp.diagnostic.on_publish_diagnostics()"></a><code class="help-tag-right">vim.lsp.diagnostic.on_publish_diagnostics()</code>
on_publish_diagnostics(<code>{_}</code>, <code>{result}</code>, <code>{ctx}</code>, <code>{config}</code>)
    <a href="lsp.html#lsp-handler">lsp-handler</a> for the method "textDocument/publishDiagnostics"</div>
<div class="old-help-para">    See <a href="diagnostic.html#vim.diagnostic.config()">vim.diagnostic.config()</a> for configuration options. Handler-specific
    configuration can be set using <a href="lsp.html#vim.lsp.with()">vim.lsp.with()</a>:<pre>vim.lsp.handlers["textDocument/publishDiagnostics"] = vim.lsp.with(
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
)</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{config}</code>  (table) Configuration table (see <a href="diagnostic.html#vim.diagnostic.config()">vim.diagnostic.config()</a>).
</div></div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.lsp.codelens<span class="help-heading-tags">                                    <a name="lsp-codelens"></a><span class="help-tag">lsp-codelens</span></span></h2></div>
<div class="old-help-para">display(<code>{lenses}</code>, <code>{bufnr}</code>, <code>{client_id}</code>)           <a name="vim.lsp.codelens.display()"></a><code class="help-tag-right">vim.lsp.codelens.display()</code>
    Display the lenses using virtual text</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{lenses}</code>     (table) of lenses to display (<code>CodeLens[] | null</code>)
</div><div class="help-li" style=""> <code>{bufnr}</code>      (number)
</div><div class="help-li" style=""> <code>{client_id}</code>  (number)
</div></div>
<div class="old-help-para">get(<code>{bufnr}</code>)                                          <a name="vim.lsp.codelens.get()"></a><code class="help-tag-right">vim.lsp.codelens.get()</code>
    Return all lenses for the given buffer</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>  (number) Buffer number. 0 can be used for the current buffer.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) (<code>CodeLens[]</code>)</div>
<div class="old-help-para">                                              <a name="vim.lsp.codelens.on_codelens()"></a><code class="help-tag-right">vim.lsp.codelens.on_codelens()</code>
on_codelens(<code>{err}</code>, <code>{result}</code>, <code>{ctx}</code>, <code>{_}</code>)
    <a href="lsp.html#lsp-handler">lsp-handler</a> for the method <code>textDocument/codeLens</code></div>
<div class="old-help-para">refresh()                                         <a name="vim.lsp.codelens.refresh()"></a><code class="help-tag-right">vim.lsp.codelens.refresh()</code>
    Refresh the codelens for the current buffer</div>
<div class="old-help-para">    It is recommended to trigger this using an autocmd or via keymap.
<pre>autocmd BufEnter,CursorHold,InsertLeave &lt;buffer&gt; lua vim.lsp.codelens.refresh()</pre></div>
<div class="old-help-para">run()                                                 <a name="vim.lsp.codelens.run()"></a><code class="help-tag-right">vim.lsp.codelens.run()</code>
    Run the code lens in the current line</div>
<div class="old-help-para">save(<code>{lenses}</code>, <code>{bufnr}</code>, <code>{client_id}</code>)                 <a name="vim.lsp.codelens.save()"></a><code class="help-tag-right">vim.lsp.codelens.save()</code>
    Store lenses for a specific buffer and client</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{lenses}</code>     (table) of lenses to store (<code>CodeLens[] | null</code>)
</div><div class="help-li" style=""> <code>{bufnr}</code>      (number)
</div><div class="help-li" style=""> <code>{client_id}</code>  (number)
</div></div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.lsp.handlers<span class="help-heading-tags">                                    <a name="lsp-handlers"></a><span class="help-tag">lsp-handlers</span></span></h2></div>
<div class="old-help-para">hover(<code>{_}</code>, <code>{result}</code>, <code>{ctx}</code>, <code>{config}</code>)               <a name="vim.lsp.handlers.hover()"></a><code class="help-tag-right">vim.lsp.handlers.hover()</code>
    <a href="lsp.html#lsp-handler">lsp-handler</a> for the method "textDocument/hover"<pre>vim.lsp.handlers["textDocument/hover"] = vim.lsp.with(
  vim.lsp.handlers.hover, {
    -- Use a sharp border with `FloatBorder` highlights
    border = "single"
  }
)</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{config}</code>  (table) Configuration table.
</div><div class="help-li" style="margin-left: 3rem;"> border: (default=nil)
</div><div class="help-li" style="margin-left: 4rem;"> Add borders to the floating window
</div><div class="help-li" style="margin-left: 4rem;"> See <a href="api.html#nvim_open_win()">nvim_open_win()</a>
</div></div>
<div class="old-help-para">                                           <a name="vim.lsp.handlers.signature_help()"></a><code class="help-tag-right">vim.lsp.handlers.signature_help()</code>
signature_help(<code>{_}</code>, <code>{result}</code>, <code>{ctx}</code>, <code>{config}</code>)
    <a href="lsp.html#lsp-handler">lsp-handler</a> for the method "textDocument/signatureHelp". The active
    parameter is highlighted with <a href="lsp.html#hl-LspSignatureActiveParameter">hl-LspSignatureActiveParameter</a>.<pre>vim.lsp.handlers["textDocument/signatureHelp"] = vim.lsp.with(
  vim.lsp.handlers.signature_help, {
    -- Use a sharp border with `FloatBorder` highlights
    border = "single"
  }
)</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{config}</code>  (table) Configuration table.
</div><div class="help-li" style="margin-left: 3rem;"> border: (default=nil)
</div><div class="help-li" style="margin-left: 4rem;"> Add borders to the floating window
</div><div class="help-li" style="margin-left: 4rem;"> See <a href="api.html#nvim_open_win()">nvim_open_win()</a>
</div></div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.lsp.util<span class="help-heading-tags">                                            <a name="lsp-util"></a><span class="help-tag">lsp-util</span></span></h2></div>
<div class="old-help-para">                                     <a name="vim.lsp.util.apply_text_document_edit()"></a><code class="help-tag-right">vim.lsp.util.apply_text_document_edit()</code>
apply_text_document_edit(<code>{text_document_edit}</code>, <code>{index}</code>, <code>{offset_encoding}</code>)
    Applies a <code>TextDocumentEdit</code>, which is a list of changes to a single
    document.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{text_document_edit}</code>  (table) a <code>TextDocumentEdit</code> object
</div><div class="help-li" style=""> <code>{index}</code>               (number) Optional index of the edit, if from a
                              list of edits (or nil, if not from a list)
</div></div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocumentEdit">https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocumentEdit</a></div>
<div class="old-help-para">                                             <a name="vim.lsp.util.apply_text_edits()"></a><code class="help-tag-right">vim.lsp.util.apply_text_edits()</code>
apply_text_edits(<code>{text_edits}</code>, <code>{bufnr}</code>, <code>{offset_encoding}</code>)
    Applies a list of text edits to a buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{text_edits}</code>       (table) list of <code>TextEdit</code> objects
</div><div class="help-li" style=""> <code>{bufnr}</code>            (number) Buffer id
</div><div class="help-li" style=""> <code>{offset_encoding}</code>  (string) utf-8|utf-16|utf-32
</div></div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textEdit">https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textEdit</a></div>
<div class="old-help-para">                                         <a name="vim.lsp.util.apply_workspace_edit()"></a><code class="help-tag-right">vim.lsp.util.apply_workspace_edit()</code>
apply_workspace_edit(<code>{workspace_edit}</code>, <code>{offset_encoding}</code>)
    Applies a <code>WorkspaceEdit</code>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{workspace_edit}</code>   (table) <code>WorkspaceEdit</code>
</div><div class="help-li" style=""> <code>{offset_encoding}</code>  (string) utf-8|utf-16|utf-32 (required)
</div></div>
<div class="old-help-para">buf_clear_references(<code>{bufnr}</code>)            <a name="vim.lsp.util.buf_clear_references()"></a><code class="help-tag-right">vim.lsp.util.buf_clear_references()</code>
    Removes document highlights from a buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>  (number) Buffer id
</div></div>
<div class="old-help-para">                                     <a name="vim.lsp.util.buf_highlight_references()"></a><code class="help-tag-right">vim.lsp.util.buf_highlight_references()</code>
buf_highlight_references(<code>{bufnr}</code>, <code>{references}</code>, <code>{offset_encoding}</code>)
    Shows a list of document highlights for a certain buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>            (number) Buffer id
</div><div class="help-li" style=""> <code>{references}</code>       (table) List of <code>DocumentHighlight</code> objects to
                           highlight
</div><div class="help-li" style=""> <code>{offset_encoding}</code>  (string) One of "utf-8", "utf-16", "utf-32".
</div></div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-3-17/#documentHighlight">https://microsoft.github.io/language-server-protocol/specifications/specification-3-17/#documentHighlight</a></div>
<div class="old-help-para">                                             <a name="vim.lsp.util.character_offset()"></a><code class="help-tag-right">vim.lsp.util.character_offset()</code>
character_offset(<code>{buf}</code>, <code>{row}</code>, <code>{col}</code>, <code>{offset_encoding}</code>)
    Returns the UTF-32 and UTF-16 offsets for a position in a certain buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{buf}</code>              (number) buffer number (0 for current)
</div><div class="help-li" style=""> <code>{row}</code>              0-indexed line
</div><div class="help-li" style=""> <code>{col}</code>              0-indexed byte offset in line
</div><div class="help-li" style=""> <code>{offset_encoding}</code>  (string) utf-8|utf-16|utf-32|nil defaults to
                           <code>offset_encoding</code> of first client of <code>buf</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (number, number) <code>offset_encoding</code> index of the character in line
        <code>{row}</code> column <code>{col}</code> in buffer <code>{buf}</code></div>
<div class="old-help-para">                              <a name="vim.lsp.util.convert_input_to_markdown_lines()"></a><code class="help-tag-right">vim.lsp.util.convert_input_to_markdown_lines()</code>
convert_input_to_markdown_lines(<code>{input}</code>, <code>{contents}</code>)
    Converts any of <code>MarkedString</code> | <code>MarkedString[]</code> | <code>MarkupContent</code> into a
    list of lines containing valid markdown. Useful to populate the hover
    window for <code>textDocument/hover</code>, for parsing the result of
    <code>textDocument/signatureHelp</code>, and potentially others.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{input}</code>     (<code>MarkedString</code> | <code>MarkedString[]</code> | <code>MarkupContent</code>)
</div><div class="help-li" style=""> <code>{contents}</code>  (table, optional, default <code>{}</code>) List of strings to extend
                    with converted lines
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        <code>{contents}</code>, extended with lines of converted markdown.</div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_hover">https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_hover</a></div>
<div class="old-help-para">                     <a name="vim.lsp.util.convert_signature_help_to_markdown_lines()"></a><code class="help-tag-right">vim.lsp.util.convert_signature_help_to_markdown_lines()</code>
convert_signature_help_to_markdown_lines(<code>{signature_help}</code>, <code>{ft}</code>, <code>{triggers}</code>)
    Converts <code>textDocument/SignatureHelp</code> response to markdown lines.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{signature_help}</code>  Response of <code>textDocument/SignatureHelp</code>
</div><div class="help-li" style=""> <code>{ft}</code>              optional filetype that will be use as the <code>lang</code> for
                          the label markdown code block
</div><div class="help-li" style=""> <code>{triggers}</code>        optional list of trigger characters from the lsp
                          server. used to better determine parameter offsets
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (list) of lines of converted markdown.</div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_signatureHelp">https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_signatureHelp</a></div>
<div class="old-help-para">                                     <a name="vim.lsp.util.extract_completion_items()"></a><code class="help-tag-right">vim.lsp.util.extract_completion_items()</code>
extract_completion_items(<code>{result}</code>)
    Can be used to extract the completion items from a <code>textDocument/completion</code> request, which may return one of <code>CompletionItem[]</code> , <code>CompletionList</code> or null.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{result}</code>  (table) The result of a <code>textDocument/completion</code> request
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) List of completion items</div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="https://microsoft.github.io/language-server-protocol/specification#textDocument_completion">https://microsoft.github.io/language-server-protocol/specification#textDocument_completion</a></div>
<div class="old-help-para">get_effective_tabstop(<code>{bufnr}</code>)          <a name="vim.lsp.util.get_effective_tabstop()"></a><code class="help-tag-right">vim.lsp.util.get_effective_tabstop()</code>
    Returns indentation size.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>  (number|nil) Buffer handle, defaults to current
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (number) indentation size</div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="options.html#'shiftwidth'">'shiftwidth'</a></div>
<div class="old-help-para">                                             <a name="vim.lsp.util.jump_to_location()"></a><code class="help-tag-right">vim.lsp.util.jump_to_location()</code>
jump_to_location(<code>{location}</code>, <code>{offset_encoding}</code>, <code>{reuse_win}</code>)
    Jumps to a location.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{location}</code>         (table) (<code>Location</code>`LocationLink`)
</div><div class="help-li" style=""> <code>{offset_encoding}</code>  "utf-8" | "utf-16" | "utf-32"
</div><div class="help-li" style=""> <code>{reuse_win}</code>        (boolean) Jump to existing window if buffer is
                           already open.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (boolean) <code>true</code> if the jump succeeded</div>
<div class="old-help-para">                                           <a name="vim.lsp.util.locations_to_items()"></a><code class="help-tag-right">vim.lsp.util.locations_to_items()</code>
locations_to_items(<code>{locations}</code>, <code>{offset_encoding}</code>)
    Returns the items with the byte position calculated correctly and in
    sorted order, for display in quickfix and location lists.</div>
<div class="old-help-para">    The result can be passed to the <code>{list}</code> argument of <a href="builtin.html#setqflist()">setqflist()</a> or
    <a href="builtin.html#setloclist()">setloclist()</a>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{locations}</code>        (table) list of <code>Location</code>s or <code>LocationLink</code>s
</div><div class="help-li" style=""> <code>{offset_encoding}</code>  (string) offset_encoding for locations
                           utf-8|utf-16|utf-32
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) list of items</div>
<div class="old-help-para">lookup_section(<code>{settings}</code>, <code>{section}</code>)          <a name="vim.lsp.util.lookup_section()"></a><code class="help-tag-right">vim.lsp.util.lookup_section()</code>
    Helper function to return nested values in language server settings</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{settings}</code>  a table of language server settings
</div><div class="help-li" style=""> <code>{section}</code>   a string indicating the field of the settings table
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table or string) The value of settings accessed via section</div>
<div class="old-help-para">                                  <a name="vim.lsp.util.make_floating_popup_options()"></a><code class="help-tag-right">vim.lsp.util.make_floating_popup_options()</code>
make_floating_popup_options(<code>{width}</code>, <code>{height}</code>, <code>{opts}</code>)
    Creates a table with sensible default options for a floating window. The
    table can be passed to <a href="api.html#nvim_open_win()">nvim_open_win()</a>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{width}</code>   (number) window width (in character cells)
</div><div class="help-li" style=""> <code>{height}</code>  (number) window height (in character cells)
</div><div class="help-li" style=""> <code>{opts}</code>    (table, optional)
</div><div class="help-li" style="margin-left: 3rem;"> offset_x (number) offset to add to <code>col</code>
</div><div class="help-li" style="margin-left: 3rem;"> offset_y (number) offset to add to <code>row</code>
</div><div class="help-li" style="margin-left: 3rem;"> border (string or table) override <code>border</code>
</div><div class="help-li" style="margin-left: 3rem;"> focusable (string or table) override <code>focusable</code>
</div><div class="help-li" style="margin-left: 3rem;"> zindex (string or table) override <code>zindex</code>, defaults to 50
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) Options</div>
<div class="old-help-para">                                       <a name="vim.lsp.util.make_formatting_params()"></a><code class="help-tag-right">vim.lsp.util.make_formatting_params()</code>
make_formatting_params(<code>{options}</code>)
    Creates a <code>DocumentFormattingParams</code> object for the current buffer and
    cursor position.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{options}</code>  (table|nil) with valid <code>FormattingOptions</code> entries
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        <code>DocumentFormattingParams</code> object</div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_formatting">https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocument_formatting</a></div>
<div class="old-help-para">                                      <a name="vim.lsp.util.make_given_range_params()"></a><code class="help-tag-right">vim.lsp.util.make_given_range_params()</code>
make_given_range_params(<code>{start_pos}</code>, <code>{end_pos}</code>, <code>{bufnr}</code>, <code>{offset_encoding}</code>)
    Using the given range in the current buffer, creates an object that is
    similar to <a href="lsp.html#vim.lsp.util.make_range_params()">vim.lsp.util.make_range_params()</a>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{start_pos}</code>        number[]|nil <code>{row, col}</code> mark-indexed position.
                           Defaults to the start of the last visual selection.
</div><div class="help-li" style=""> <code>{end_pos}</code>          number[]|nil <code>{row, col}</code> mark-indexed position.
                           Defaults to the end of the last visual selection.
</div><div class="help-li" style=""> <code>{bufnr}</code>            (number|nil) buffer handle or 0 for current,
                           defaults to current
</div><div class="help-li" style=""> <code>{offset_encoding}</code>  "utf-8"|"utf-16"|"utf-32"|nil defaults to
                           <code>offset_encoding</code> of first client of <code>bufnr</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        { textDocument = { uri = <code>current_file_uri</code> }, range = { start =
        <code>start_position</code>, end = <code>end_position</code> } }</div>
<div class="old-help-para">                                         <a name="vim.lsp.util.make_position_params()"></a><code class="help-tag-right">vim.lsp.util.make_position_params()</code>
make_position_params(<code>{window}</code>, <code>{offset_encoding}</code>)
    Creates a <code>TextDocumentPositionParams</code> object for the current buffer and
    cursor position.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{window}</code>           (number|nil) window handle or 0 for current,
                           defaults to current
</div><div class="help-li" style=""> <code>{offset_encoding}</code>  (string) utf-8|utf-16|utf-32|nil defaults to
                           <code>offset_encoding</code> of first client of buffer of
                           <code>window</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        <code>TextDocumentPositionParams</code> object</div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocumentPositionParams">https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocumentPositionParams</a></div>
<div class="old-help-para">                                            <a name="vim.lsp.util.make_range_params()"></a><code class="help-tag-right">vim.lsp.util.make_range_params()</code>
make_range_params(<code>{window}</code>, <code>{offset_encoding}</code>)
    Using the current position in the current buffer, creates an object that
    can be used as a building block for several LSP requests, such as
    <code>textDocument/codeAction</code>, <code>textDocument/colorPresentation</code>,
    <code>textDocument/rangeFormatting</code>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{window}</code>           (number|nil) window handle or 0 for current,
                           defaults to current
</div><div class="help-li" style=""> <code>{offset_encoding}</code>  "utf-8"|"utf-16"|"utf-32"|nil defaults to
                           <code>offset_encoding</code> of first client of buffer of
                           <code>window</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        { textDocument = { uri = <code>current_file_uri</code> }, range = { start =
        <code>current_position</code>, end = <code>current_position</code> } }</div>
<div class="old-help-para">                                    <a name="vim.lsp.util.make_text_document_params()"></a><code class="help-tag-right">vim.lsp.util.make_text_document_params()</code>
make_text_document_params(<code>{bufnr}</code>)
    Creates a <code>TextDocumentIdentifier</code> object for the current buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>  (number|nil) Buffer handle, defaults to current
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        <code>TextDocumentIdentifier</code></div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocumentIdentifier">https://microsoft.github.io/language-server-protocol/specifications/specification-current/#textDocumentIdentifier</a></div>
<div class="old-help-para">                                        <a name="vim.lsp.util.make_workspace_params()"></a><code class="help-tag-right">vim.lsp.util.make_workspace_params()</code>
make_workspace_params(<code>{added}</code>, <code>{removed}</code>)
    Create the workspace params</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{added}</code>
</div><div class="help-li" style=""> <code>{removed}</code>
</div></div>
<div class="old-help-para">                                        <a name="vim.lsp.util.open_floating_preview()"></a><code class="help-tag-right">vim.lsp.util.open_floating_preview()</code>
open_floating_preview(<code>{contents}</code>, <code>{syntax}</code>, <code>{opts}</code>)
    Shows contents in a floating window.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{contents}</code>  (table) of lines to show in window
</div><div class="help-li" style=""> <code>{syntax}</code>    (string) of syntax to set for opened buffer
</div><div class="help-li" style=""> <code>{opts}</code>      (table) with optional fields (additional keys are passed
                    on to <a href="api.html#nvim_open_win()">nvim_open_win()</a>)
</div><div class="help-li" style="margin-left: 3rem;"> height: (number) height of floating window
</div><div class="help-li" style="margin-left: 3rem;"> width: (number) width of floating window
</div><div class="help-li" style="margin-left: 3rem;"> wrap: (boolean, default true) wrap long lines
</div><div class="help-li" style="margin-left: 3rem;"> wrap_at: (number) character to wrap at for computing
                      height when wrap is enabled
</div><div class="help-li" style="margin-left: 3rem;"> max_width: (number) maximal width of floating window
</div><div class="help-li" style="margin-left: 3rem;"> max_height: (number) maximal height of floating window
</div><div class="help-li" style="margin-left: 3rem;"> pad_top: (number) number of lines to pad contents at top
</div><div class="help-li" style="margin-left: 3rem;"> pad_bottom: (number) number of lines to pad contents at
                      bottom
</div><div class="help-li" style="margin-left: 3rem;"> focus_id: (string) if a popup with this id is opened,
                      then focus it
</div><div class="help-li" style="margin-left: 3rem;"> close_events: (table) list of events that closes the
                      floating window
</div><div class="help-li" style="margin-left: 3rem;"> focusable: (boolean, default true) Make float focusable
</div><div class="help-li" style="margin-left: 3rem;"> focus: (boolean, default true) If <code>true</code>, and if
                      <code>{focusable}</code> is also <code>true</code>, focus an existing floating
                      window with the same <code>{focus_id}</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        bufnr,winnr buffer and window number of the newly created floating
        preview window</div>
<div class="old-help-para">parse_snippet(<code>{input}</code>)                          <a name="vim.lsp.util.parse_snippet()"></a><code class="help-tag-right">vim.lsp.util.parse_snippet()</code>
    Parses snippets in a completion entry.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{input}</code>  (string) unparsed snippet
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (string) parsed snippet</div>
<div class="old-help-para">preview_location(<code>{location}</code>, <code>{opts}</code>)         <a name="vim.lsp.util.preview_location()"></a><code class="help-tag-right">vim.lsp.util.preview_location()</code>
    Previews a location in a floating window</div>
<div class="old-help-para">    behavior depends on type of location:
<div class="help-li" style=""> for Location, range is shown (e.g., function definition)
</div><div class="help-li" style=""> for LocationLink, targetRange is shown (e.g., body of function
      definition)
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{location}</code>  a single <code>Location</code> or <code>LocationLink</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (bufnr,winnr) buffer and window number of floating window or nil</div>
<div class="old-help-para">rename(<code>{old_fname}</code>, <code>{new_fname}</code>, <code>{opts}</code>)               <a name="vim.lsp.util.rename()"></a><code class="help-tag-right">vim.lsp.util.rename()</code>
    Rename old_fname to new_fname</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{opts}</code>  (table)
</div></div>
<div class="old-help-para">set_lines(<code>{lines}</code>, <code>{A}</code>, <code>{B}</code>, <code>{new_lines}</code>)           <a name="vim.lsp.util.set_lines()"></a><code class="help-tag-right">vim.lsp.util.set_lines()</code>
    Replaces text in a range with new text.</div>
<div class="old-help-para">    CAUTION: Changes in-place!</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{lines}</code>      (table) Original list of strings
</div><div class="help-li" style=""> <code>{A}</code>          (table) Start position; a 2-tuple of <code>{line, col}</code> numbers
</div><div class="help-li" style=""> <code>{B}</code>          (table) End position; a 2-tuple of <code>{line, col}</code> numbers
</div><div class="help-li" style=""> <code>{new_lines}</code>  A list of strings to replace the original
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) The modified <code>{lines}</code> object</div>
<div class="old-help-para">                                                <a name="vim.lsp.util.show_document()"></a><code class="help-tag-right">vim.lsp.util.show_document()</code>
show_document(<code>{location}</code>, <code>{offset_encoding}</code>, <code>{opts}</code>)
    Shows document and optionally jumps to the location.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{location}</code>         (table) (<code>Location</code>`LocationLink`)
</div><div class="help-li" style=""> <code>{offset_encoding}</code>  "utf-8" | "utf-16" | "utf-32"
</div><div class="help-li" style=""> <code>{opts}</code>             (table) options
</div><div class="help-li" style="margin-left: 3rem;"> reuse_win (boolean) Jump to existing window if
                             buffer is already open.
</div><div class="help-li" style="margin-left: 3rem;"> focus (boolean) Whether to focus/jump to location
                             if possible. Defaults to true.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (boolean) <code>true</code> if succeeded</div>
<div class="old-help-para">                                             <a name="vim.lsp.util.stylize_markdown()"></a><code class="help-tag-right">vim.lsp.util.stylize_markdown()</code>
stylize_markdown(<code>{bufnr}</code>, <code>{contents}</code>, <code>{opts}</code>)
    Converts markdown into syntax highlighted regions by stripping the code
    blocks and converting them into highlighted code. This will by default
    insert a blank line separator after those code block regions to improve
    readability.</div>
<div class="old-help-para">    This method configures the given buffer and returns the lines to set.</div>
<div class="old-help-para">    If you want to open a popup with fancy markdown, use
    <code>open_floating_preview</code> instead</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{contents}</code>  (table) of lines to show in window
</div><div class="help-li" style=""> <code>{opts}</code>      dictionary with optional fields
</div><div class="help-li" style="margin-left: 3rem;"> height of floating window
</div><div class="help-li" style="margin-left: 3rem;"> width of floating window
</div><div class="help-li" style="margin-left: 3rem;"> wrap_at character to wrap at for computing height
</div><div class="help-li" style="margin-left: 3rem;"> max_width maximal width of floating window
</div><div class="help-li" style="margin-left: 3rem;"> max_height maximal height of floating window
</div><div class="help-li" style="margin-left: 3rem;"> pad_top number of lines to pad contents at top
</div><div class="help-li" style="margin-left: 3rem;"> pad_bottom number of lines to pad contents at bottom
</div><div class="help-li" style="margin-left: 3rem;"> separator insert separator after code block
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        width,height size of float</div>
<div class="old-help-para">symbols_to_items(<code>{symbols}</code>, <code>{bufnr}</code>)         <a name="vim.lsp.util.symbols_to_items()"></a><code class="help-tag-right">vim.lsp.util.symbols_to_items()</code>
    Converts symbols to quickfix list items.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{symbols}</code>  DocumentSymbol[] or SymbolInformation[]
</div></div>
<div class="old-help-para">              <a name="vim.lsp.util.text_document_completion_list_to_complete_items()"></a><code class="help-tag-right">vim.lsp.util.text_document_completion_list_to_complete_items()</code>
text_document_completion_list_to_complete_items(<code>{result}</code>, <code>{prefix}</code>)
    Turns the result of a <code>textDocument/completion</code> request into
    vim-compatible <a href="insert.html#complete-items">complete-items</a>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{result}</code>  The result of a <code>textDocument/completion</code> call, e.g. from
                  <a href="lsp.html#vim.lsp.buf.completion()">vim.lsp.buf.completion()</a>, which may be one of
                  <code>CompletionItem[]</code>, <code>CompletionList</code> or <code>null</code>
</div><div class="help-li" style=""> <code>{prefix}</code>  (string) the prefix to filter the completion items
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        { matches = complete-items table, incomplete = bool }</div>
<div class="old-help-para"><div class="help-column_heading">    See also:</div>        <a href="insert.html#complete-items">complete-items</a></div>
<div class="old-help-para">trim_empty_lines(<code>{lines}</code>)                    <a name="vim.lsp.util.trim_empty_lines()"></a><code class="help-tag-right">vim.lsp.util.trim_empty_lines()</code>
    Removes empty lines from the beginning and end.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{lines}</code>  (table) list of lines to trim
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) trimmed list of lines</div>
<div class="old-help-para">                                <a name="vim.lsp.util.try_trim_markdown_code_blocks()"></a><code class="help-tag-right">vim.lsp.util.try_trim_markdown_code_blocks()</code>
try_trim_markdown_code_blocks(<code>{lines}</code>)
    Accepts markdown lines and tries to reduce them to a filetype if they
    comprise just a single code block.</div>
<div class="old-help-para">    CAUTION: Modifies the input in-place!</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{lines}</code>  (table) list of lines
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (string) filetype or "markdown" if it was unchanged.</div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.lsp.log<span class="help-heading-tags">                                              <a name="lsp-log"></a><span class="help-tag">lsp-log</span></span></h2></div>
<div class="old-help-para">get_filename()                                    <a name="vim.lsp.log.get_filename()"></a><code class="help-tag-right">vim.lsp.log.get_filename()</code>
    Returns the log filename.</div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (string) log filename</div>
<div class="old-help-para">get_level()                                          <a name="vim.lsp.log.get_level()"></a><code class="help-tag-right">vim.lsp.log.get_level()</code>
    Gets the current log level.</div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (string) current log level</div>
<div class="old-help-para">set_format_func(<code>{handle}</code>)                      <a name="vim.lsp.log.set_format_func()"></a><code class="help-tag-right">vim.lsp.log.set_format_func()</code>
    Sets formatting function used to format logs</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{handle}</code>  (function) function to apply to logging arguments, pass
                  vim.inspect for multi-line formatting
</div></div>
<div class="old-help-para">set_level(<code>{level}</code>)                                   <a name="vim.lsp.log.set_level()"></a><code class="help-tag-right">vim.lsp.log.set_level()</code>
    Sets the current log level.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{level}</code>  (string or number) One of <code>vim.lsp.log.levels</code>
</div></div>
<div class="old-help-para">should_log(<code>{level}</code>)                                 <a name="vim.lsp.log.should_log()"></a><code class="help-tag-right">vim.lsp.log.should_log()</code>
    Checks whether the level is sufficient for logging.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{level}</code>  (number) log level
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (bool) true if would log, false if not</div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.lsp.rpc<span class="help-heading-tags">                                              <a name="lsp-rpc"></a><span class="help-tag">lsp-rpc</span></span></h2></div>
<div class="old-help-para">connect(<code>{host}</code>, <code>{port}</code>)                                <a name="vim.lsp.rpc.connect()"></a><code class="help-tag-right">vim.lsp.rpc.connect()</code>
    Create a LSP RPC client factory that connects via TCP to the given host
    and port</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{host}</code>  (string)
</div><div class="help-li" style=""> <code>{port}</code>  (number)
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (function)</div>
<div class="old-help-para">format_rpc_error(<code>{err}</code>)                       <a name="vim.lsp.rpc.format_rpc_error()"></a><code class="help-tag-right">vim.lsp.rpc.format_rpc_error()</code>
    Constructs an error message from an LSP error object.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{err}</code>  (table) The error object
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (string) The formatted error message</div>
<div class="old-help-para">notify(<code>{method}</code>, <code>{params}</code>)                              <a name="vim.lsp.rpc.notify()"></a><code class="help-tag-right">vim.lsp.rpc.notify()</code>
    Sends a notification to the LSP server.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{method}</code>  (string) The invoked LSP method
</div><div class="help-li" style=""> <code>{params}</code>  (table|nil) Parameters for the invoked LSP method
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (bool) <code>true</code> if notification could be sent, <code>false</code> if not</div>
<div class="old-help-para">                                                       <a name="vim.lsp.rpc.request()"></a><code class="help-tag-right">vim.lsp.rpc.request()</code>
request(<code>{method}</code>, <code>{params}</code>, <code>{callback}</code>, <code>{notify_reply_callback}</code>)
    Sends a request to the LSP server and runs <code>{callback}</code> upon response.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{method}</code>                 (string) The invoked LSP method
</div><div class="help-li" style=""> <code>{params}</code>                 (table|nil) Parameters for the invoked LSP
                                 method
</div><div class="help-li" style=""> <code>{callback}</code>               (function) Callback to invoke
</div><div class="help-li" style=""> <code>{notify_reply_callback}</code>  (function|nil) Callback to invoke as soon as
                                 a request is no longer pending
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (bool, number) <code>(true, message_id)</code> if request could be sent, <code>false</code>
        if not</div>
<div class="old-help-para">                                            <a name="vim.lsp.rpc.rpc_response_error()"></a><code class="help-tag-right">vim.lsp.rpc.rpc_response_error()</code>
rpc_response_error(<code>{code}</code>, <code>{message}</code>, <code>{data}</code>)
    Creates an RPC response object/table.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{code}</code>     (number) RPC error code defined in
                   <code>vim.lsp.protocol.ErrorCodes</code>
</div><div class="help-li" style=""> <code>{message}</code>  (string|nil) arbitrary message to send to server
</div><div class="help-li" style=""> <code>{data}</code>     any|nil arbitrary data to send to server
</div></div>
<div class="old-help-para">                                                         <a name="vim.lsp.rpc.start()"></a><code class="help-tag-right">vim.lsp.rpc.start()</code>
start(<code>{cmd}</code>, <code>{cmd_args}</code>, <code>{dispatchers}</code>, <code>{extra_spawn_params}</code>)
    Starts an LSP server process and create an LSP RPC client object to
    interact with it. Communication with the spawned process happens via
    stdio. For communication via TCP, spawn a process manually and use
    <a href="lsp.html#vim.lsp.rpc.connect()">vim.lsp.rpc.connect()</a></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{cmd}</code>                 (string) Command to start the LSP server.
</div><div class="help-li" style=""> <code>{cmd_args}</code>            (table) List of additional string arguments to
                              pass to <code>{cmd}</code>.
</div><div class="help-li" style=""> <code>{dispatchers}</code>         (table|nil) Dispatchers for LSP message types.
                              Valid dispatcher names are:
</div><div class="help-li" style="margin-left: 3rem;"> <code>"notification"</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>"server_request"</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>"on_error"</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>"on_exit"</code>
</div><div class="help-li" style=""> <code>{extra_spawn_params}</code>  (table|nil) Additional context for the LSP
                              server process. May contain:
</div><div class="help-li" style="margin-left: 3rem;"> <code>{cwd}</code> (string) Working directory for the LSP
                                server process
</div><div class="help-li" style="margin-left: 3rem;"> <code>{env}</code> (table) Additional environment variables
                                for LSP server process
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        Client RPC object.
        Methods:
<div class="help-li" style=""> <code>notify()</code> <a href="lsp.html#vim.lsp.rpc.notify()">vim.lsp.rpc.notify()</a>
</div><div class="help-li" style=""> <code>request()</code> <a href="lsp.html#vim.lsp.rpc.request()">vim.lsp.rpc.request()</a>
</div><div class="help-li" style=""> <code>is_closing()</code> returns a boolean indicating if the RPC is closing.
</div><div class="help-li" style=""> <code>terminate()</code> terminates the RPC client.
</div></div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.lsp.sync<span class="help-heading-tags">                                            <a name="lsp-sync"></a><span class="help-tag">lsp-sync</span></span></h2></div>
<div class="old-help-para">                                                 <a name="vim.lsp.sync.compute_diff()"></a><code class="help-tag-right">vim.lsp.sync.compute_diff()</code>
compute_diff(<code>{___MissingCloseParenHere___}</code>)
    Returns the range table for the difference between prev and curr lines</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{prev_lines}</code>       (table) list of lines
</div><div class="help-li" style=""> <code>{curr_lines}</code>       (table) list of lines
</div><div class="help-li" style=""> <code>{firstline}</code>        (number) line to begin search for first difference
</div><div class="help-li" style=""> <code>{lastline}</code>         (number) line to begin search in old_lines for last
                           difference
</div><div class="help-li" style=""> <code>{new_lastline}</code>     (number) line to begin search in new_lines for last
                           difference
</div><div class="help-li" style=""> <code>{offset_encoding}</code>  (string) encoding requested by language server
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) TextDocumentContentChangeEvent see <a href="https://microsoft.github.io/language-server-protocol/specifications/specification-3-17/#textDocumentContentChangeEvent">https://microsoft.github.io/language-server-protocol/specifications/specification-3-17/#textDocumentContentChangeEvent</a></div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.lsp.protocol<span class="help-heading-tags">                                    <a name="lsp-protocol"></a><span class="help-tag">lsp-protocol</span></span></h2></div>
<div class="old-help-para">                                 <a name="vim.lsp.protocol.make_client_capabilities()"></a><code class="help-tag-right">vim.lsp.protocol.make_client_capabilities()</code>
make_client_capabilities()
    Gets a new ClientCapabilities object describing the LSP client
    capabilities.</div>
<div class="old-help-para">                                     <a name="vim.lsp.protocol.resolve_capabilities()"></a><code class="help-tag-right">vim.lsp.protocol.resolve_capabilities()</code>
resolve_capabilities(<code>{server_capabilities}</code>)
    Creates a normalized object describing LSP server capabilities.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{server_capabilities}</code>  (table) Table of capabilities supported by the
                               server
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) Normalized table of capabilities</div>

  
  