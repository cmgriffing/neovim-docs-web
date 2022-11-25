---
title:  Diagnostic
layout: ../../layouts/MainLayout.astro
---

  <a name="diagnostic.txt"></a><a name="vim.diagnostic"></a><h1> Diagnostic</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/diagnostic.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Diagnostic framework</div>
<div class="old-help-para">Nvim provides a framework for displaying errors or warnings from external
tools, otherwise known as "diagnostics". These diagnostics can come from a
variety of sources, such as linters or LSP servers. The diagnostic framework
is an extension to existing error handling functionality such as the
<a href="/neovim-docs-web/en/quickfix#quickfix">quickfix</a> list.</div>
<div class="old-help-para"><h2 class="help-heading">QUICKSTART<span class="help-heading-tags">                                              <a name="diagnostic-quickstart"></a><span class="help-tag">diagnostic-quickstart</span></span></h2></div>
<div class="old-help-para">Anything that reports diagnostics is referred to below as a "diagnostic
producer". Diagnostic producers need only follow a few simple steps to
report diagnostics:</div>
<div class="old-help-para">1. Create a namespace <a href="/neovim-docs-web/en/api#nvim_create_namespace()">nvim_create_namespace()</a>. Note that the namespace must
   have a name. Anonymous namespaces WILL NOT WORK.
2. (Optional) Configure options for the diagnostic namespace
   <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.config()">vim.diagnostic.config()</a>.
3. Generate diagnostics.
4. Set the diagnostics for the buffer <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.set()">vim.diagnostic.set()</a>.
5. Repeat from step 3.</div>
<div class="old-help-para">Generally speaking, the API is split between functions meant to be used by
diagnostic producers and those meant for diagnostic consumers (i.e. end users
who want to read and view the diagnostics for a buffer).  The APIs for
producers require a <code>{namespace}</code> as their first argument, while those for
consumers generally do not require a namespace (though often one may be
optionally supplied).  A good rule of thumb is that if a method is meant to
modify the diagnostics for a buffer (e.g. <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.set()">vim.diagnostic.set()</a>) then it
requires a namespace.</div>
<div class="old-help-para">                                                        <a name="diagnostic-structure"></a><code class="help-tag-right">diagnostic-structure</code>
A diagnostic is a Lua table with the following keys. Required keys are
indicated with (*):
    bufnr: Buffer number
    lnum(): The starting line of the diagnostic
    end_lnum: The final line of the diagnostic
    col(): The starting column of the diagnostic
    end_col: The final column of the diagnostic
    severity: The severity of the diagnostic <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.severity">vim.diagnostic.severity</a>
    message(): The diagnostic text
    source: The source of the diagnostic
    code: The diagnostic code
    user_data: Arbitrary data plugins or users can add</div>
<div class="old-help-para">Diagnostics use the same indexing as the rest of the Nvim API (i.e. 0-based
rows and columns). <a href="/neovim-docs-web/en/api#api-indexing">api-indexing</a></div>
<div class="old-help-para">                                <a name="vim.diagnostic.severity"></a><code class="help-tag-right">vim.diagnostic.severity</code> <a name="diagnostic-severity"></a><code class="help-tag">diagnostic-severity</code>
The "severity" key in a diagnostic is one of the values defined in
<code>vim.diagnostic.severity</code>:</div>
<div class="old-help-para">    vim.diagnostic.severity.ERROR
    vim.diagnostic.severity.WARN
    vim.diagnostic.severity.INFO
    vim.diagnostic.severity.HINT</div>
<div class="old-help-para">Functions that take a severity as an optional parameter (e.g.
<a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.get()">vim.diagnostic.get()</a>) accept one of two forms:</div>
<div class="old-help-para">1. A single <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.severity">vim.diagnostic.severity</a> value:<pre>vim.diagnostic.get(0, { severity = vim.diagnostic.severity.WARN })</pre>
2. A table with a "min" or "max" key (or both):<pre>vim.diagnostic.get(0, { severity = { min = vim.diagnostic.severity.WARN } })</pre>
The latter form allows users to specify a range of severities.</div>
<div class="old-help-para"><h2 class="help-heading">HANDLERS<span class="help-heading-tags">                                                <a name="diagnostic-handlers"></a><span class="help-tag">diagnostic-handlers</span></span></h2></div>
<div class="old-help-para">Diagnostics are shown to the user with <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.show()">vim.diagnostic.show()</a>. The display of
diagnostics is managed through handlers. A handler is a table with a "show"
and (optionally) a "hide" function. The "show" function has the signature
<pre>function(namespace, bufnr, diagnostics, opts)</pre></div>
<div class="old-help-para">and is responsible for displaying or otherwise handling the given
diagnostics. The "hide" function takes care of "cleaning up" any actions taken
by the "show" function and has the signature
<pre>function(namespace, bufnr)</pre></div>
<div class="old-help-para">Handlers can be configured with <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.config()">vim.diagnostic.config()</a> and added by
creating a new key in <code>vim.diagnostic.handlers</code> (see
<a href="/neovim-docs-web/en/diagnostic#diagnostic-handlers-example">diagnostic-handlers-example</a>).</div>
<div class="old-help-para">The <code>{opts}</code> table passed to a handler is the full set of configuration options
(that is, it is not limited to just the options for the handler itself). The
values in the table are already resolved (i.e. if a user specifies a
function for a config option, the function has already been evaluated).</div>
<div class="old-help-para">Nvim provides these handlers by default: "virtual_text", "signs", and
"underline".</div>
<div class="old-help-para">                                                <a name="diagnostic-handlers-example"></a><code class="help-tag-right">diagnostic-handlers-example</code>
The example below creates a new handler that notifies the user of diagnostics
with <a href="/neovim-docs-web/en/lua#vim.notify()">vim.notify()</a>:<pre>-- It's good practice to namespace custom handlers to avoid collisions
vim.diagnostic.handlers["my/notify"] = {
  show = function(namespace, bufnr, diagnostics, opts)
    -- In our example, the opts table has a "log_level" option
    local level = opts["my/notify"].log_level

    local name = vim.diagnostic.get_namespace(namespace).name
    local msg = string.format("%d diagnostics in buffer %d from %s",
                              #diagnostics,
                              bufnr,
                              name)
    vim.notify(msg, level)
  end,
}

-- Users can configure the handler
vim.diagnostic.config({
  ["my/notify"] = {
    log_level = vim.log.levels.INFO
  }
})</pre></div>
<div class="old-help-para">In this example, there is nothing to do when diagnostics are hidden, so we
omit the "hide" function.</div>
<div class="old-help-para">Existing handlers can be overridden. For example, use the following to only
show a sign for the highest severity diagnostic on a given line:<pre>-- Create a custom namespace. This will aggregate signs from all other
-- namespaces and only show the one with the highest severity on a
-- given line
local ns = vim.api.nvim_create_namespace("my_namespace")

-- Get a reference to the original signs handler
local orig_signs_handler = vim.diagnostic.handlers.signs

-- Override the built-in signs handler
vim.diagnostic.handlers.signs = {
  show = function(_, bufnr, _, opts)
    -- Get all diagnostics from the whole buffer rather than just the
    -- diagnostics passed to the handler
    local diagnostics = vim.diagnostic.get(bufnr)

    -- Find the "worst" diagnostic per line
    local max_severity_per_line = {}
    for _, d in pairs(diagnostics) do
      local m = max_severity_per_line[d.lnum]
      if not m or d.severity &lt; m.severity then
        max_severity_per_line[d.lnum] = d
      end
    end

    -- Pass the filtered diagnostics (with our custom namespace) to
    -- the original handler
    local filtered_diagnostics = vim.tbl_values(max_severity_per_line)
    orig_signs_handler.show(ns, bufnr, filtered_diagnostics, opts)
  end,
  hide = function(_, bufnr)
    orig_signs_handler.hide(ns, bufnr)
  end,
}</pre></div>
<div class="old-help-para"><h2 class="help-heading">HIGHLIGHTS<span class="help-heading-tags">                                              <a name="diagnostic-highlights"></a><span class="help-tag">diagnostic-highlights</span></span></h2></div>
<div class="old-help-para">All highlights defined for diagnostics begin with <code>Diagnostic</code> followed by
the type of highlight (e.g., <code>Sign</code>, <code>Underline</code>, etc.) and the severity (e.g.
<code>Error</code>, <code>Warn</code>, etc.)</div>
<div class="old-help-para">By default, highlights for signs, floating windows, and virtual text are linked to the
corresponding default highlight. Underline highlights are not linked and use their
own default highlight groups.</div>
<div class="old-help-para">For example, the default highlighting for <a href="/neovim-docs-web/en/diagnostic#hl-DiagnosticSignError">hl-DiagnosticSignError</a> is linked
to <a href="/neovim-docs-web/en/diagnostic#hl-DiagnosticError">hl-DiagnosticError</a>. To change the default (and therefore the linked
highlights), use the <a href="/neovim-docs-web/en/syntax#%3Ahighlight">:highlight</a> command:<pre>highlight DiagnosticError guifg="BrightRed"</pre></div>
<div class="old-help-para">                                                        <a name="hl-DiagnosticError"></a><code class="help-tag-right">hl-DiagnosticError</code>
DiagnosticError
    Used as the base highlight group.
    Other Diagnostic highlights link to this by default (except Underline)</div>
<div class="old-help-para">                                                        <a name="hl-DiagnosticWarn"></a><code class="help-tag-right">hl-DiagnosticWarn</code>
DiagnosticWarn
    Used as the base highlight group.
    Other Diagnostic highlights link to this by default (except Underline)</div>
<div class="old-help-para">                                                        <a name="hl-DiagnosticInfo"></a><code class="help-tag-right">hl-DiagnosticInfo</code>
DiagnosticInfo
    Used as the base highlight group.
    Other Diagnostic highlights link to this by default (except Underline)</div>
<div class="old-help-para">                                                        <a name="hl-DiagnosticHint"></a><code class="help-tag-right">hl-DiagnosticHint</code>
DiagnosticHint
    Used as the base highlight group.
    Other Diagnostic highlights link to this by default (except Underline)</div>
<div class="old-help-para">                                        <a name="hl-DiagnosticVirtualTextError"></a><code class="help-tag-right">hl-DiagnosticVirtualTextError</code>
DiagnosticVirtualTextError
    Used for "Error" diagnostic virtual text.</div>
<div class="old-help-para">                                        <a name="hl-DiagnosticVirtualTextWarn"></a><code class="help-tag-right">hl-DiagnosticVirtualTextWarn</code>
DiagnosticVirtualTextWarn
    Used for "Warn" diagnostic virtual text.</div>
<div class="old-help-para">                                                <a name="hl-DiagnosticVirtualTextInfo"></a><code class="help-tag-right">hl-DiagnosticVirtualTextInfo</code>
DiagnosticVirtualTextInfo
    Used for "Info" diagnostic virtual text.</div>
<div class="old-help-para">                                                <a name="hl-DiagnosticVirtualTextHint"></a><code class="help-tag-right">hl-DiagnosticVirtualTextHint</code>
DiagnosticVirtualTextHint
    Used for "Hint" diagnostic virtual text.</div>
<div class="old-help-para">                                                <a name="hl-DiagnosticUnderlineError"></a><code class="help-tag-right">hl-DiagnosticUnderlineError</code>
DiagnosticUnderlineError
    Used to underline "Error" diagnostics.</div>
<div class="old-help-para">                                                <a name="hl-DiagnosticUnderlineWarn"></a><code class="help-tag-right">hl-DiagnosticUnderlineWarn</code>
DiagnosticUnderlineWarn
    Used to underline "Warn" diagnostics.</div>
<div class="old-help-para">                                                <a name="hl-DiagnosticUnderlineInfo"></a><code class="help-tag-right">hl-DiagnosticUnderlineInfo</code>
DiagnosticUnderlineInfo
    Used to underline "Info" diagnostics.</div>
<div class="old-help-para">                                                <a name="hl-DiagnosticUnderlineHint"></a><code class="help-tag-right">hl-DiagnosticUnderlineHint</code>
DiagnosticUnderlineHint
    Used to underline "Hint" diagnostics.</div>
<div class="old-help-para">                                                <a name="hl-DiagnosticFloatingError"></a><code class="help-tag-right">hl-DiagnosticFloatingError</code>
DiagnosticFloatingError
    Used to color "Error" diagnostic messages in diagnostics float.
    See <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.open_float()">vim.diagnostic.open_float()</a></div>
<div class="old-help-para">                                                <a name="hl-DiagnosticFloatingWarn"></a><code class="help-tag-right">hl-DiagnosticFloatingWarn</code>
DiagnosticFloatingWarn
    Used to color "Warn" diagnostic messages in diagnostics float.</div>
<div class="old-help-para">                                                <a name="hl-DiagnosticFloatingInfo"></a><code class="help-tag-right">hl-DiagnosticFloatingInfo</code>
DiagnosticFloatingInfo
    Used to color "Info" diagnostic messages in diagnostics float.</div>
<div class="old-help-para">                                                <a name="hl-DiagnosticFloatingHint"></a><code class="help-tag-right">hl-DiagnosticFloatingHint</code>
DiagnosticFloatingHint
    Used to color "Hint" diagnostic messages in diagnostics float.</div>
<div class="old-help-para">                                                <a name="hl-DiagnosticSignError"></a><code class="help-tag-right">hl-DiagnosticSignError</code>
DiagnosticSignError
    Used for "Error" signs in sign column.</div>
<div class="old-help-para">                                                <a name="hl-DiagnosticSignWarn"></a><code class="help-tag-right">hl-DiagnosticSignWarn</code>
DiagnosticSignWarn
    Used for "Warn" signs in sign column.</div>
<div class="old-help-para">                                                <a name="hl-DiagnosticSignInfo"></a><code class="help-tag-right">hl-DiagnosticSignInfo</code>
DiagnosticSignInfo
    Used for "Info" signs in sign column.</div>
<div class="old-help-para">                                                <a name="hl-DiagnosticSignHint"></a><code class="help-tag-right">hl-DiagnosticSignHint</code>
DiagnosticSignHint
    Used for "Hint" signs in sign column.</div>
<div class="old-help-para"><h2 class="help-heading">SIGNS<span class="help-heading-tags">                                                   <a name="diagnostic-signs"></a><span class="help-tag">diagnostic-signs</span></span></h2></div>
<div class="old-help-para">Signs are defined for each diagnostic severity. The default text for each sign
is the first letter of the severity name (for example, "E" for ERROR). Signs
can be customized using the following:<pre>sign define DiagnosticSignError text=E texthl=DiagnosticSignError linehl= numhl=
sign define DiagnosticSignWarn text=W texthl=DiagnosticSignWarn linehl= numhl=
sign define DiagnosticSignInfo text=I texthl=DiagnosticSignInfo linehl= numhl=
sign define DiagnosticSignHint text=H texthl=DiagnosticSignHint linehl= numhl=</pre>
When the "severity_sort" option is set (see <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.config()">vim.diagnostic.config()</a>) the
priority of each sign depends on the severity of the associated diagnostic.
Otherwise, all signs have the same priority (the value of the "priority"
option in the "signs" table of <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.config()">vim.diagnostic.config()</a> or 10 if unset).</div>
<div class="old-help-para"><h2 class="help-heading">EVENTS<span class="help-heading-tags">                                                  <a name="diagnostic-events"></a><span class="help-tag">diagnostic-events</span></span></h2></div>
<div class="old-help-para">                                                        <a name="DiagnosticChanged"></a><code class="help-tag-right">DiagnosticChanged</code>
DiagnosticChanged       After diagnostics have changed. When used from Lua,
                        the new diagnostics are passed to the autocmd
                        callback in the "data" table.</div>
<div class="old-help-para">Example:<pre>vim.api.nvim_create_autocmd('DiagnosticChanged', {
  callback = function(args)
    local diagnostics = args.data.diagnostics
    vim.pretty_print(diagnostics)
  end,
})</pre></div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.diagnostic<span class="help-heading-tags">                                    <a name="diagnostic-api"></a><span class="help-tag">diagnostic-api</span></span></h2></div>
<div class="old-help-para">config(<code>{opts}</code>, <code>{namespace}</code>)                          <a name="vim.diagnostic.config()"></a><code class="help-tag-right">vim.diagnostic.config()</code>
    Configure diagnostic options globally or for a specific diagnostic
    namespace.</div>
<div class="old-help-para">    Configuration can be specified globally, per-namespace, or ephemerally
    (i.e. only for a single call to <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.set()">vim.diagnostic.set()</a> or
    <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.show()">vim.diagnostic.show()</a>). Ephemeral configuration has highest priority,
    followed by namespace configuration, and finally global configuration.</div>
<div class="old-help-para">    For example, if a user enables virtual text globally with<pre>vim.diagnostic.config({ virtual_text = true })</pre></div>
<div class="old-help-para">    and a diagnostic producer sets diagnostics with<pre>vim.diagnostic.set(ns, 0, diagnostics, { virtual_text = false })</pre></div>
<div class="old-help-para">    then virtual text will not be enabled for those diagnostics.</div>
<div class="old-help-para">    Note:
        Each of the configuration options below accepts one of the following:
<div class="help-li" style=""> <code>false</code>: Disable this feature
</div><div class="help-li" style=""> <code>true</code>: Enable this feature, use default settings.
</div><div class="help-li" style=""> <code>table</code>: Enable this feature with overrides. Use an empty table to
          use default values.
</div><div class="help-li" style=""> <code>function</code>: Function with signature (namespace, bufnr) that returns
          any of the above.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{opts}</code>       (table|nil) When omitted or "nil", retrieve the current
                     configuration. Otherwise, a configuration table with the
                     following keys:
</div><div class="help-li" style="margin-left: 3rem;"> underline: (default true) Use underline for
                       diagnostics. Options:
</div><div class="help-li" style="margin-left: 4rem;"> severity: Only underline diagnostics matching the
                         given severity <a href="/neovim-docs-web/en/diagnostic#diagnostic-severity">diagnostic-severity</a>
</div></div>
<div class="old-help-para"><div class="help-li" style=""> virtual_text: (default true) Use virtual text for
                       diagnostics. If multiple diagnostics are set for a
                       namespace, one prefix per diagnostic + the last
                       diagnostic message are shown. Options:
</div><div class="help-li" style="margin-left: 3rem;"> severity: Only show virtual text for diagnostics
                         matching the given severity <a href="/neovim-docs-web/en/diagnostic#diagnostic-severity">diagnostic-severity</a>
</div><div class="help-li" style="margin-left: 3rem;"> source: (boolean or string) Include the diagnostic
                         source in virtual text. Use "if_many" to only show
                         sources if there is more than one diagnostic source
                         in the buffer. Otherwise, any truthy value means to
                         always show the diagnostic source.
</div><div class="help-li" style="margin-left: 3rem;"> spacing: (number) Amount of empty spaces inserted at
                         the beginning of the virtual text.
</div><div class="help-li" style="margin-left: 3rem;"> prefix: (string) Prepend diagnostic message with
                         prefix.
</div><div class="help-li" style="margin-left: 3rem;"> format: (function) A function that takes a diagnostic
                         as input and returns a string. The return value is
                         the text used to display the diagnostic. Example:<pre>function(diagnostic)
  if diagnostic.severity == vim.diagnostic.severity.ERROR then
    return string.format("E: %s", diagnostic.message)
  end
  return diagnostic.message
end</pre>
</div></div>
<div class="old-help-para"><div class="help-li" style=""> signs: (default true) Use signs for diagnostics.
                       Options:
</div><div class="help-li" style="margin-left: 3rem;"> severity: Only show signs for diagnostics matching
                         the given severity <a href="/neovim-docs-web/en/diagnostic#diagnostic-severity">diagnostic-severity</a>
</div><div class="help-li" style="margin-left: 3rem;"> priority: (number, default 10) Base priority to use
                         for signs. When <code>{severity_sort}</code> is used, the priority
                         of a sign is adjusted based on its severity.
                         Otherwise, all signs use the same priority.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> float: Options for floating windows. See
                       <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.open_float()">vim.diagnostic.open_float()</a>.
</div><div class="help-li" style=""> update_in_insert: (default false) Update diagnostics in
                       Insert mode (if false, diagnostics are updated on
                       InsertLeave)
</div><div class="help-li" style=""> severity_sort: (default false) Sort diagnostics by
                       severity. This affects the order in which signs and
                       virtual text are displayed. When true, higher
                       severities are displayed before lower severities (e.g.
                       ERROR is displayed before WARN). Options:
</div><div class="help-li" style="margin-left: 3rem;"> reverse: (boolean) Reverse sort order
</div><div class="help-li" style=""> <code>{namespace}</code>  (number|nil) Update the options for the given namespace.
                     When omitted, update the global diagnostic options.
</div></div>
<div class="old-help-para">disable(<code>{bufnr}</code>, <code>{namespace}</code>)                       <a name="vim.diagnostic.disable()"></a><code class="help-tag-right">vim.diagnostic.disable()</code>
    Disable diagnostics in the given buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>      (number|nil) Buffer number, or 0 for current buffer. When
                     omitted, disable diagnostics in all buffers.
</div><div class="help-li" style=""> <code>{namespace}</code>  (number|nil) Only disable diagnostics for the given
                     namespace.
</div></div>
<div class="old-help-para">enable(<code>{bufnr}</code>, <code>{namespace}</code>)                         <a name="vim.diagnostic.enable()"></a><code class="help-tag-right">vim.diagnostic.enable()</code>
    Enable diagnostics in the given buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>      (number|nil) Buffer number, or 0 for current buffer. When
                     omitted, enable diagnostics in all buffers.
</div><div class="help-li" style=""> <code>{namespace}</code>  (number|nil) Only enable diagnostics for the given
                     namespace.
</div></div>
<div class="old-help-para">fromqflist(<code>{list}</code>)                               <a name="vim.diagnostic.fromqflist()"></a><code class="help-tag-right">vim.diagnostic.fromqflist()</code>
    Convert a list of quickfix items to a list of diagnostics.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{list}</code>  (table) A list of quickfix items from <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> or
                <a href="/neovim-docs-web/en/builtin#getloclist()">getloclist()</a>.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        array of diagnostics <a href="/neovim-docs-web/en/diagnostic#diagnostic-structure">diagnostic-structure</a></div>
<div class="old-help-para">get(<code>{bufnr}</code>, <code>{opts}</code>)                                    <a name="vim.diagnostic.get()"></a><code class="help-tag-right">vim.diagnostic.get()</code>
    Get current diagnostics.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>  (number|nil) Buffer number to get diagnostics from. Use 0 for
                 current buffer or nil for all buffers.
</div><div class="help-li" style=""> <code>{opts}</code>   (table|nil) A table with the following keys:
</div><div class="help-li" style="margin-left: 3rem;"> namespace: (number) Limit diagnostics to the given
                   namespace.
</div><div class="help-li" style="margin-left: 3rem;"> lnum: (number) Limit diagnostics to the given line number.
</div><div class="help-li" style="margin-left: 3rem;"> severity: See <a href="/neovim-docs-web/en/diagnostic#diagnostic-severity">diagnostic-severity</a>.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) A list of diagnostic items <a href="/neovim-docs-web/en/diagnostic#diagnostic-structure">diagnostic-structure</a>.</div>
<div class="old-help-para">get_namespace(<code>{namespace}</code>)                    <a name="vim.diagnostic.get_namespace()"></a><code class="help-tag-right">vim.diagnostic.get_namespace()</code>
    Get namespace metadata.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{namespace}</code>  (number) Diagnostic namespace
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) Namespace metadata</div>
<div class="old-help-para">get_namespaces()                             <a name="vim.diagnostic.get_namespaces()"></a><code class="help-tag-right">vim.diagnostic.get_namespaces()</code>
    Get current diagnostic namespaces.</div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) A list of active diagnostic namespaces <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic">vim.diagnostic</a>.</div>
<div class="old-help-para">get_next(<code>{opts}</code>)                                   <a name="vim.diagnostic.get_next()"></a><code class="help-tag-right">vim.diagnostic.get_next()</code>
    Get the next diagnostic closest to the cursor position.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{opts}</code>  (table) See <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.goto_next()">vim.diagnostic.goto_next()</a>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) Next diagnostic</div>
<div class="old-help-para">get_next_pos(<code>{opts}</code>)                           <a name="vim.diagnostic.get_next_pos()"></a><code class="help-tag-right">vim.diagnostic.get_next_pos()</code>
    Return the position of the next diagnostic in the current buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{opts}</code>  (table) See <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.goto_next()">vim.diagnostic.goto_next()</a>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) Next diagnostic position as a (row, col) tuple.</div>
<div class="old-help-para">get_prev(<code>{opts}</code>)                                   <a name="vim.diagnostic.get_prev()"></a><code class="help-tag-right">vim.diagnostic.get_prev()</code>
    Get the previous diagnostic closest to the cursor position.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{opts}</code>  (table) See <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.goto_next()">vim.diagnostic.goto_next()</a>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) Previous diagnostic</div>
<div class="old-help-para">get_prev_pos(<code>{opts}</code>)                           <a name="vim.diagnostic.get_prev_pos()"></a><code class="help-tag-right">vim.diagnostic.get_prev_pos()</code>
    Return the position of the previous diagnostic in the current buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{opts}</code>  (table) See <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.goto_next()">vim.diagnostic.goto_next()</a>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) Previous diagnostic position as a (row, col) tuple.</div>
<div class="old-help-para">goto_next(<code>{opts}</code>)                                 <a name="vim.diagnostic.goto_next()"></a><code class="help-tag-right">vim.diagnostic.goto_next()</code>
    Move to the next diagnostic.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{opts}</code>  (table|nil) Configuration table with the following keys:
</div><div class="help-li" style="margin-left: 3rem;"> namespace: (number) Only consider diagnostics from the given
                  namespace.
</div><div class="help-li" style="margin-left: 3rem;"> cursor_position: (cursor position) Cursor position as a
                  (row, col) tuple. See <a href="/neovim-docs-web/en/api#nvim_win_get_cursor()">nvim_win_get_cursor()</a>. Defaults to
                  the current cursor position.
</div><div class="help-li" style="margin-left: 3rem;"> wrap: (boolean, default true) Whether to loop around file or
                  not. Similar to <a href="/neovim-docs-web/en/options#'wrapscan'">'wrapscan'</a>.
</div><div class="help-li" style="margin-left: 3rem;"> severity: See <a href="/neovim-docs-web/en/diagnostic#diagnostic-severity">diagnostic-severity</a>.
</div><div class="help-li" style="margin-left: 3rem;"> float: (boolean or table, default true) If "true", call
                  <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.open_float()">vim.diagnostic.open_float()</a> after moving. If a table, pass
                  the table as the <code>{opts}</code> parameter to
                  <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.open_float()">vim.diagnostic.open_float()</a>. Unless overridden, the float
                  will show diagnostics at the new cursor position (as if
                  "cursor" were passed to the "scope" option).
</div><div class="help-li" style="margin-left: 3rem;"> win_id: (number, default 0) Window ID
</div></div>
<div class="old-help-para">goto_prev(<code>{opts}</code>)                                 <a name="vim.diagnostic.goto_prev()"></a><code class="help-tag-right">vim.diagnostic.goto_prev()</code>
    Move to the previous diagnostic in the current buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{opts}</code>  (table|nil) See <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.goto_next()">vim.diagnostic.goto_next()</a>
</div></div>
<div class="old-help-para">hide(<code>{namespace}</code>, <code>{bufnr}</code>)                             <a name="vim.diagnostic.hide()"></a><code class="help-tag-right">vim.diagnostic.hide()</code>
    Hide currently displayed diagnostics.</div>
<div class="old-help-para">    This only clears the decorations displayed in the buffer. Diagnostics can
    be redisplayed with <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.show()">vim.diagnostic.show()</a>. To completely remove
    diagnostics, use <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.reset()">vim.diagnostic.reset()</a>.</div>
<div class="old-help-para">    To hide diagnostics and prevent them from re-displaying, use
    <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.disable()">vim.diagnostic.disable()</a>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{namespace}</code>  (number|nil) Diagnostic namespace. When omitted, hide
                     diagnostics from all namespaces.
</div><div class="help-li" style=""> <code>{bufnr}</code>      (number|nil) Buffer number, or 0 for current buffer. When
                     omitted, hide diagnostics in all buffers.
</div></div>
<div class="old-help-para">                                                      <a name="vim.diagnostic.match()"></a><code class="help-tag-right">vim.diagnostic.match()</code>
match(<code>{str}</code>, <code>{pat}</code>, <code>{groups}</code>, <code>{severity_map}</code>, <code>{defaults}</code>)
    Parse a diagnostic from a string.</div>
<div class="old-help-para">    For example, consider a line of output from a linter:<pre>WARNING filename:27:3: Variable 'foo' does not exist</pre></div>
<div class="old-help-para">    This can be parsed into a diagnostic <a href="/neovim-docs-web/en/diagnostic#diagnostic-structure">diagnostic-structure</a> with:<pre>local s = "WARNING filename:27:3: Variable 'foo' does not exist"
local pattern = "^(%w+) %w+:(%d+):(%d+): (.+)$"
local groups = { "severity", "lnum", "col", "message" }
vim.diagnostic.match(s, pattern, groups, { WARNING = vim.diagnostic.WARN })</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{str}</code>           (string) String to parse diagnostics from.
</div><div class="help-li" style=""> <code>{pat}</code>           (string) Lua pattern with capture groups.
</div><div class="help-li" style=""> <code>{groups}</code>        (table) List of fields in a <a href="/neovim-docs-web/en/diagnostic#diagnostic-structure">diagnostic-structure</a> to
                        associate with captures from <code>{pat}</code>.
</div><div class="help-li" style=""> <code>{severity_map}</code>  (table) A table mapping the severity field from
                        <code>{groups}</code> with an item from <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.severity">vim.diagnostic.severity</a>.
</div><div class="help-li" style=""> <code>{defaults}</code>      (table|nil) Table of default values for any fields not
                        listed in <code>{groups}</code>. When omitted, numeric values
                        default to 0 and "severity" defaults to ERROR.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        diagnostic <a href="/neovim-docs-web/en/diagnostic#diagnostic-structure">diagnostic-structure</a> or <code>nil</code> if <code>{pat}</code> fails to match
        <code>{str}</code>.</div>
<div class="old-help-para">open_float(<code>{opts}</code>, <code>{...}</code>)                        <a name="vim.diagnostic.open_float()"></a><code class="help-tag-right">vim.diagnostic.open_float()</code>
    Show diagnostics in a floating window.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{opts}</code>  (table|nil) Configuration table with the same keys as
                <a href="/neovim-docs-web/en/lsp#vim.lsp.util.open_floating_preview()">vim.lsp.util.open_floating_preview()</a> in addition to the
                following:
</div><div class="help-li" style="margin-left: 3rem;"> bufnr: (number) Buffer number to show diagnostics from.
                  Defaults to the current buffer.
</div><div class="help-li" style="margin-left: 3rem;"> namespace: (number) Limit diagnostics to the given namespace
</div><div class="help-li" style="margin-left: 3rem;"> scope: (string, default "line") Show diagnostics from the
                  whole buffer ("buffer"), the current cursor line ("line"),
                  or the current cursor position ("cursor"). Shorthand
                  versions are also accepted ("c" for "cursor", "l" for
                  "line", "b" for "buffer").
</div><div class="help-li" style="margin-left: 3rem;"> pos: (number or table) If <code>{scope}</code> is "line" or "cursor", use
                  this position rather than the cursor position. If a number,
                  interpreted as a line number; otherwise, a (row, col) tuple.
</div><div class="help-li" style="margin-left: 3rem;"> severity_sort: (default false) Sort diagnostics by severity.
                  Overrides the setting from <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.config()">vim.diagnostic.config()</a>.
</div><div class="help-li" style="margin-left: 3rem;"> severity: See <a href="/neovim-docs-web/en/diagnostic#diagnostic-severity">diagnostic-severity</a>. Overrides the setting
                  from <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.config()">vim.diagnostic.config()</a>.
</div><div class="help-li" style="margin-left: 3rem;"> header: (string or table) String to use as the header for
                  the floating window. If a table, it is interpreted as a
                  [text, hl_group] tuple. Overrides the setting from
                  <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.config()">vim.diagnostic.config()</a>.
</div><div class="help-li" style="margin-left: 3rem;"> source: (boolean or string) Include the diagnostic source in
                  the message. Use "if_many" to only show sources if there is
                  more than one source of diagnostics in the buffer.
                  Otherwise, any truthy value means to always show the
                  diagnostic source. Overrides the setting from
                  <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.config()">vim.diagnostic.config()</a>.
</div><div class="help-li" style="margin-left: 3rem;"> format: (function) A function that takes a diagnostic as
                  input and returns a string. The return value is the text
                  used to display the diagnostic. Overrides the setting from
                  <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.config()">vim.diagnostic.config()</a>.
</div><div class="help-li" style="margin-left: 3rem;"> prefix: (function, string, or table) Prefix each diagnostic
                  in the floating window. If a function, it must have the
                  signature (diagnostic, i, total) -&gt; (string, string), where
                  <code>{i}</code> is the index of the diagnostic being evaluated and
                  <code>{total}</code> is the total number of diagnostics displayed in the
                  window. The function should return a string which is
                  prepended to each diagnostic in the window as well as an
                  (optional) highlight group which will be used to highlight
                  the prefix. If <code>{prefix}</code> is a table, it is interpreted as a
                  [text, hl_group] tuple as in <a href="/neovim-docs-web/en/api#nvim_echo()">nvim_echo()</a>; otherwise, if
                  <code>{prefix}</code> is a string, it is prepended to each diagnostic in
                  the window with no highlight. Overrides the setting from
                  <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.config()">vim.diagnostic.config()</a>.
</div><div class="help-li" style="margin-left: 3rem;"> suffix: Same as <code>{prefix}</code>, but appends the text to the
                  diagnostic instead of prepending it. Overrides the setting
                  from <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.config()">vim.diagnostic.config()</a>.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        tuple (<code>{float_bufnr}</code>, <code>{win_id}</code>)</div>
<div class="old-help-para">reset(<code>{namespace}</code>, <code>{bufnr}</code>)                           <a name="vim.diagnostic.reset()"></a><code class="help-tag-right">vim.diagnostic.reset()</code>
    Remove all diagnostics from the given namespace.</div>
<div class="old-help-para">    Unlike <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.hide()">vim.diagnostic.hide()</a>, this function removes all saved
    diagnostics. They cannot be redisplayed using <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.show()">vim.diagnostic.show()</a>. To
    simply remove diagnostic decorations in a way that they can be
    re-displayed, use <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.hide()">vim.diagnostic.hide()</a>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{namespace}</code>  (number|nil) Diagnostic namespace. When omitted, remove
                     diagnostics from all namespaces.
</div><div class="help-li" style=""> <code>{bufnr}</code>      (number|nil) Remove diagnostics for the given buffer.
                     When omitted, diagnostics are removed for all buffers.
</div></div>
<div class="old-help-para">set(<code>{namespace}</code>, <code>{bufnr}</code>, <code>{diagnostics}</code>, <code>{opts}</code>)        <a name="vim.diagnostic.set()"></a><code class="help-tag">vim.diagnostic.set()</code>
    Set diagnostics for the given namespace and buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{namespace}</code>    (number) The diagnostic namespace
</div><div class="help-li" style=""> <code>{bufnr}</code>        (number) Buffer number
</div><div class="help-li" style=""> <code>{diagnostics}</code>  (table) A list of diagnostic items
                       <a href="/neovim-docs-web/en/diagnostic#diagnostic-structure">diagnostic-structure</a>
</div><div class="help-li" style=""> <code>{opts}</code>         (table|nil) Display options to pass to
                       <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.show()">vim.diagnostic.show()</a>
</div></div>
<div class="old-help-para">setloclist(<code>{opts}</code>)                               <a name="vim.diagnostic.setloclist()"></a><code class="help-tag-right">vim.diagnostic.setloclist()</code>
    Add buffer diagnostics to the location list.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{opts}</code>  (table|nil) Configuration table with the following keys:
</div><div class="help-li" style="margin-left: 3rem;"> namespace: (number) Only add diagnostics from the given
                  namespace.
</div><div class="help-li" style="margin-left: 3rem;"> winnr: (number, default 0) Window number to set location
                  list for.
</div><div class="help-li" style="margin-left: 3rem;"> open: (boolean, default true) Open the location list after
                  setting.
</div><div class="help-li" style="margin-left: 3rem;"> title: (string) Title of the location list. Defaults to
                  "Diagnostics".
</div><div class="help-li" style="margin-left: 3rem;"> severity: See <a href="/neovim-docs-web/en/diagnostic#diagnostic-severity">diagnostic-severity</a>.
</div></div>
<div class="old-help-para">setqflist(<code>{opts}</code>)                                 <a name="vim.diagnostic.setqflist()"></a><code class="help-tag-right">vim.diagnostic.setqflist()</code>
    Add all diagnostics to the quickfix list.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{opts}</code>  (table|nil) Configuration table with the following keys:
</div><div class="help-li" style="margin-left: 3rem;"> namespace: (number) Only add diagnostics from the given
                  namespace.
</div><div class="help-li" style="margin-left: 3rem;"> open: (boolean, default true) Open quickfix list after
                  setting.
</div><div class="help-li" style="margin-left: 3rem;"> title: (string) Title of quickfix list. Defaults to
                  "Diagnostics".
</div><div class="help-li" style="margin-left: 3rem;"> severity: See <a href="/neovim-docs-web/en/diagnostic#diagnostic-severity">diagnostic-severity</a>.
</div></div>
<div class="old-help-para">                                                       <a name="vim.diagnostic.show()"></a><code class="help-tag-right">vim.diagnostic.show()</code>
show(<code>{namespace}</code>, <code>{bufnr}</code>, <code>{diagnostics}</code>, <code>{opts}</code>)
    Display diagnostics for the given namespace and buffer.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{namespace}</code>    (number|nil) Diagnostic namespace. When omitted, show
                       diagnostics from all namespaces.
</div><div class="help-li" style=""> <code>{bufnr}</code>        (number|nil) Buffer number, or 0 for current buffer.
                       When omitted, show diagnostics in all buffers.
</div><div class="help-li" style=""> <code>{diagnostics}</code>  (table|nil) The diagnostics to display. When omitted,
                       use the saved diagnostics for the given namespace and
                       buffer. This can be used to display a list of
                       diagnostics without saving them or to display only a
                       subset of diagnostics. May not be used when <code>{namespace}</code>
                       or <code>{bufnr}</code> is nil.
</div><div class="help-li" style=""> <code>{opts}</code>         (table|nil) Display options. See
                       <a href="/neovim-docs-web/en/diagnostic#vim.diagnostic.config()">vim.diagnostic.config()</a>.
</div></div>
<div class="old-help-para">toqflist(<code>{diagnostics}</code>)                            <a name="vim.diagnostic.toqflist()"></a><code class="help-tag-right">vim.diagnostic.toqflist()</code>
    Convert a list of diagnostics to a list of quickfix items that can be
    passed to <a href="/neovim-docs-web/en/builtin#setqflist()">setqflist()</a> or <a href="/neovim-docs-web/en/builtin#setloclist()">setloclist()</a>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{diagnostics}</code>  (table) List of diagnostics <a href="/neovim-docs-web/en/diagnostic#diagnostic-structure">diagnostic-structure</a>.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        array of quickfix list items <a href="/neovim-docs-web/en/builtin#setqflist-what">setqflist-what</a></div>

  
  