---
title: Diagnostic
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Diagnostics" class="section-title" href="#Diagnostics"> Diagnostic Txt</a> 

NVIM REFERENCE MANUAL


### <a id="vim.diagnostic" class="section-title" href="#vim.diagnostic">Diagnostic framework</a>

Nvim provides a framework for displaying errors or warnings from external
tools, otherwise known as "diagnostics". These diagnostics can come from a
variety of sources, such as linters or LSP servers. The diagnostic framework
is an extension to existing error handling functionality such as the
[[quickfix](/undefined#quickfix)](/undefined) list.

Type [[gO](/undefined#gO)](/undefined) to see the table of contents.


## <a id="diagnostic-quickstart" class="section-title" href="#diagnostic-quickstart">Quickstart</a> 

Anything that reports diagnostics is referred to below as a "diagnostic
producer". Diagnostic producers need only follow a few simple steps to
report diagnostics:

1. Create a namespace |nvim_create_namespace()|. Note that the namespace must
have a name. Anonymous namespaces WILL NOT WORK.
2. (Optional) Configure options for the diagnostic namespace
|vim.diagnostic.config()|.
3. Generate diagnostics.
4. Set the diagnostics for the buffer |vim.diagnostic.set()|.
5. Repeat from step 3.

Generally speaking, the API is split between functions meant to be used by
diagnostic producers and those meant for diagnostic consumers (i.e. end users
who want to read and view the diagnostics for a buffer).  The APIs for
producers require a {namespace} as their first argument, while those for
consumers generally do not require a namespace (though often one may be
optionally supplied).  A good rule of thumb is that if a method is meant to
modify the diagnostics for a buffer (e.g. |vim.diagnostic.set()|) then it
requires a namespace.

### <a id="diagnostic-structure" class="section-title" href="#diagnostic-structure">Note:</a>
A diagnostic is a Lua table with the following keys. Required keys are
indicated with (*):

bufnr: Buffer number
### <a id="lnum(): The starting line of the diagnostic" class="section-title" href="#lnum(): The starting line of the diagnostic">Note:</a>
end_lnum: The final line of the diagnostic
### <a id="col(): The starting column of the diagnostic" class="section-title" href="#col(): The starting column of the diagnostic">Note:</a>
end_col: The final column of the diagnostic
severity: The severity of the diagnostic |vim.diagnostic.severity|
### <a id="message(): The diagnostic text" class="section-title" href="#message(): The diagnostic text">Note:</a>
source: The source of the diagnostic
code: The diagnostic code
user_data: Arbitrary data plugins or users can add

Diagnostics use the same indexing as the rest of the Nvim API (i.e. 0-based
rows and columns). [[api-indexing](/undefined#api-indexing)](/undefined)

### <a id="vim.diagnostic.severity diagnostic-severity" class="section-title" href="#vim.diagnostic.severity diagnostic-severity">Note:</a>
The "severity" key in a diagnostic is one of the values defined in
`vim.diagnostic.severity`:

vim.diagnostic.severity.ERROR
vim.diagnostic.severity.WARN
vim.diagnostic.severity.INFO
vim.diagnostic.severity.HINT

Functions that take a severity as an optional parameter (e.g.
|vim.diagnostic.get()|) accept one of two forms:

1. A single |vim.diagnostic.severity| value: 
```
vim.diagnostic.get(0, { severity = vim.diagnostic.severity.WARN })

2. A table with a "min" or "max" key (or both):

vim.diagnostic.get(0, { severity = { min = vim.diagnostic.severity.WARN } })

The latter form allows users to specify a range of severities.


## <a id="diagnostic-handlers" class="section-title" href="#diagnostic-handlers">Handlers</a> 

Diagnostics are shown to the user with |vim.diagnostic.show()|. The display of
diagnostics is managed through handlers. A handler is a table with a "show"
and (optionally) a "hide" function. The "show" function has the signature
function(namespace, bufnr, diagnostics, opts)
```

and is responsible for displaying or otherwise handling the given
diagnostics. The "hide" function takes care of "cleaning up" any actions taken
by the "show" function and has the signature

```    function(namespace, bufnr)
```

Handlers can be configured with |vim.diagnostic.config()| and added by
creating a new key in `vim.diagnostic.handlers` (see
[[diagnostic-handlers-example](/undefined#diagnostic-handlers-example)](/undefined)).

The {opts} table passed to a handler is the full set of configuration options
(that is, it is not limited to just the options for the handler itself). The
values in the table are already resolved (i.e. if a user specifies a
function for a config option, the function has already been evaluated).

Nvim provides these handlers by default: "virtual_text", "signs", and
"underline".

### <a id="diagnostic-handlers-example" class="section-title" href="#diagnostic-handlers-example">Note:</a>
The example below creates a new handler that notifies the user of diagnostics
with |vim.notify()|: 
```
-- It's good practice to namespace custom handlers to avoid collisions
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
})
```

In this example, there is nothing to do when diagnostics are hidden, so we
omit the "hide" function.

Existing handlers can be overridden. For example, use the following to only
show a sign for the highest severity diagnostic on a given line: 
```
-- Create a custom namespace. This will aggregate signs from all other
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
if not m or d.severity < m.severity then
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
}
```


## <a id="diagnostic-highlights" class="section-title" href="#diagnostic-highlights">Highlights</a> 

All highlights defined for diagnostics begin with `Diagnostic` followed by
the type of highlight (e.g., `Sign`, `Underline`, etc.) and the severity (e.g.
`Error`, `Warn`, etc.)

By default, highlights for signs, floating windows, and virtual text are linked to the
corresponding default highlight. Underline highlights are not linked and use their
own default highlight groups.

For example, the default highlighting for [[hl-DiagnosticSignError](/undefined#hl-DiagnosticSignError)](/undefined) is linked
to [[hl-DiagnosticError](/undefined#hl-DiagnosticError)](/undefined). To change the default (and therefore the linked
highlights), use the |:highlight| command: 
```
highlight DiagnosticError guifg="BrightRed"
```

### <a id="hl-DiagnosticError" class="section-title" href="#hl-DiagnosticError">Note:</a>
DiagnosticError
Used as the base highlight group.
Other Diagnostic highlights link to this by default (except Underline)

### <a id="hl-DiagnosticWarn" class="section-title" href="#hl-DiagnosticWarn">Note:</a>
DiagnosticWarn
Used as the base highlight group.
Other Diagnostic highlights link to this by default (except Underline)

### <a id="hl-DiagnosticInfo" class="section-title" href="#hl-DiagnosticInfo">Note:</a>
DiagnosticInfo
Used as the base highlight group.
Other Diagnostic highlights link to this by default (except Underline)

### <a id="hl-DiagnosticHint" class="section-title" href="#hl-DiagnosticHint">Note:</a>
DiagnosticHint
Used as the base highlight group.
Other Diagnostic highlights link to this by default (except Underline)

### <a id="hl-DiagnosticVirtualTextError" class="section-title" href="#hl-DiagnosticVirtualTextError">Note:</a>
DiagnosticVirtualTextError
Used for "Error" diagnostic virtual text.

### <a id="hl-DiagnosticVirtualTextWarn" class="section-title" href="#hl-DiagnosticVirtualTextWarn">Note:</a>
DiagnosticVirtualTextWarn
Used for "Warn" diagnostic virtual text.

### <a id="hl-DiagnosticVirtualTextInfo" class="section-title" href="#hl-DiagnosticVirtualTextInfo">Note:</a>
DiagnosticVirtualTextInfo
Used for "Info" diagnostic virtual text.

### <a id="hl-DiagnosticVirtualTextHint" class="section-title" href="#hl-DiagnosticVirtualTextHint">Note:</a>
DiagnosticVirtualTextHint
Used for "Hint" diagnostic virtual text.

### <a id="hl-DiagnosticUnderlineError" class="section-title" href="#hl-DiagnosticUnderlineError">Note:</a>
DiagnosticUnderlineError
Used to underline "Error" diagnostics.

### <a id="hl-DiagnosticUnderlineWarn" class="section-title" href="#hl-DiagnosticUnderlineWarn">Note:</a>
DiagnosticUnderlineWarn
Used to underline "Warn" diagnostics.

### <a id="hl-DiagnosticUnderlineInfo" class="section-title" href="#hl-DiagnosticUnderlineInfo">Note:</a>
DiagnosticUnderlineInfo
Used to underline "Info" diagnostics.

### <a id="hl-DiagnosticUnderlineHint" class="section-title" href="#hl-DiagnosticUnderlineHint">Note:</a>
DiagnosticUnderlineHint
Used to underline "Hint" diagnostics.

### <a id="hl-DiagnosticFloatingError" class="section-title" href="#hl-DiagnosticFloatingError">Note:</a>
DiagnosticFloatingError
Used to color "Error" diagnostic messages in diagnostics float.
See |vim.diagnostic.open_float()|

### <a id="hl-DiagnosticFloatingWarn" class="section-title" href="#hl-DiagnosticFloatingWarn">Note:</a>
DiagnosticFloatingWarn
Used to color "Warn" diagnostic messages in diagnostics float.

### <a id="hl-DiagnosticFloatingInfo" class="section-title" href="#hl-DiagnosticFloatingInfo">Note:</a>
DiagnosticFloatingInfo
Used to color "Info" diagnostic messages in diagnostics float.

### <a id="hl-DiagnosticFloatingHint" class="section-title" href="#hl-DiagnosticFloatingHint">Note:</a>
DiagnosticFloatingHint
Used to color "Hint" diagnostic messages in diagnostics float.

### <a id="hl-DiagnosticSignError" class="section-title" href="#hl-DiagnosticSignError">Note:</a>
DiagnosticSignError
Used for "Error" signs in sign column.

### <a id="hl-DiagnosticSignWarn" class="section-title" href="#hl-DiagnosticSignWarn">Note:</a>
DiagnosticSignWarn
Used for "Warn" signs in sign column.

### <a id="hl-DiagnosticSignInfo" class="section-title" href="#hl-DiagnosticSignInfo">Note:</a>
DiagnosticSignInfo
Used for "Info" signs in sign column.

### <a id="hl-DiagnosticSignHint" class="section-title" href="#hl-DiagnosticSignHint">Note:</a>
DiagnosticSignHint
Used for "Hint" signs in sign column.


## <a id="diagnostic-signs" class="section-title" href="#diagnostic-signs">Signs</a> 

Signs are defined for each diagnostic severity. The default text for each sign
is the first letter of the severity name (for example, "E" for ERROR). Signs
can be customized using the following: 
```
sign define DiagnosticSignError text=E texthl=DiagnosticSignError linehl= numhl=
sign define DiagnosticSignWarn text=W texthl=DiagnosticSignWarn linehl= numhl=
sign define DiagnosticSignInfo text=I texthl=DiagnosticSignInfo linehl= numhl=
sign define DiagnosticSignHint text=H texthl=DiagnosticSignHint linehl= numhl=

When the "severity_sort" option is set (see |vim.diagnostic.config()|) the
priority of each sign depends on the severity of the associated diagnostic.
Otherwise, all signs have the same priority (the value of the "priority"
option in the "signs" table of |vim.diagnostic.config()| or 10 if unset).


## <a id="diagnostic-events" class="section-title" href="#diagnostic-events">Events</a> 

### <a id="DiagnosticChanged" class="section-title" href="#DiagnosticChanged">Note:</a>
DiagnosticChanged       After diagnostics have changed. When used from Lua,
the new diagnostics are passed to the autocmd
callback in the "data" table.

Example:

vim.api.nvim_create_autocmd('DiagnosticChanged', {
callback = function(args)
local diagnostics = args.data.diagnostics
vim.pretty_print(diagnostics)
end,
})
```


## <a id="diagnostic-api" class="section-title" href="#diagnostic-api">Lua Module: Vim.Diagnostic</a> 

### <a id="vim.diagnostic.config()" class="section-title" href="#vim.diagnostic.config()">config({opts}, {namespace})</a>
Configure diagnostic options globally or for a specific diagnostic
namespace.

Configuration can be specified globally, per-namespace, or ephemerally
(i.e. only for a single call to |vim.diagnostic.set()| or
|vim.diagnostic.show()|). Ephemeral configuration has highest priority,
followed by namespace configuration, and finally global configuration.

For example, if a user enables virtual text globally with 
```
vim.diagnostic.config({ virtual_text = true })
```


and a diagnostic producer sets diagnostics with 
```
vim.diagnostic.set(ns, 0, diagnostics, { virtual_text = false })
```


then virtual text will not be enabled for those diagnostics.

Note:
Each of the configuration options below accepts one of the following:
• `false`: Disable this feature
• `true`: Enable this feature, use default settings.
• `table`: Enable this feature with overrides. Use an empty table to
use default values.
• `function`: Function with signature (namespace, bufnr) that returns
any of the above.

Parameters: ~
• {opts}       (table|nil) When omitted or "nil", retrieve the current
configuration. Otherwise, a configuration table with the
following keys:
• underline: (default true) Use underline for
diagnostics. Options:
• severity: Only underline diagnostics matching the
given severity [[[[[[[[[diagnostic-severity](/undefined#diagnostic-severity)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)

• virtual_text: (default true) Use virtual text for
diagnostics. If multiple diagnostics are set for a
namespace, one prefix per diagnostic + the last
diagnostic message are shown. Options:
• severity: Only show virtual text for diagnostics
matching the given severity [[[[[[[[[diagnostic-severity](/undefined#diagnostic-severity)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)
• source: (boolean or string) Include the diagnostic
source in virtual text. Use "if_many" to only show
sources if there is more than one diagnostic source
in the buffer. Otherwise, any truthy value means to
always show the diagnostic source.
• spacing: (number) Amount of empty spaces inserted at
the beginning of the virtual text.
• prefix: (string) Prepend diagnostic message with
prefix.
• format: (function) A function that takes a diagnostic
as input and returns a string. The return value is
the text used to display the diagnostic. Example: 
```
function(diagnostic)
if diagnostic.severity == vim.diagnostic.severity.ERROR then
return string.format("E: %s", diagnostic.message)
end
return diagnostic.message
end
```


• signs: (default true) Use signs for diagnostics.
Options:
• severity: Only show signs for diagnostics matching
the given severity [[[[[[[[[diagnostic-severity](/undefined#diagnostic-severity)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)
• priority: (number, default 10) Base priority to use
for signs. When {severity_sort} is used, the priority
of a sign is adjusted based on its severity.
Otherwise, all signs use the same priority.

• float: Options for floating windows. See
|vim.diagnostic.open_float()|.
• update_in_insert: (default false) Update diagnostics in
Insert mode (if false, diagnostics are updated on
InsertLeave)
• severity_sort: (default false) Sort diagnostics by
severity. This affects the order in which signs and
virtual text are displayed. When true, higher
severities are displayed before lower severities (e.g.
ERROR is displayed before WARN). Options:
• reverse: (boolean) Reverse sort order
• {namespace}  (number|nil) Update the options for the given namespace.
When omitted, update the global diagnostic options.

### <a id="vim.diagnostic.disable()" class="section-title" href="#vim.diagnostic.disable()">disable({bufnr}, {namespace})</a>
Disable diagnostics in the given buffer.

Parameters: ~
• {bufnr}      (number|nil) Buffer number, or 0 for current buffer. When
omitted, disable diagnostics in all buffers.
• {namespace}  (number|nil) Only disable diagnostics for the given
namespace.

### <a id="vim.diagnostic.enable()" class="section-title" href="#vim.diagnostic.enable()">enable({bufnr}, {namespace})</a>
Enable diagnostics in the given buffer.

Parameters: ~
• {bufnr}      (number|nil) Buffer number, or 0 for current buffer. When
omitted, enable diagnostics in all buffers.
• {namespace}  (number|nil) Only enable diagnostics for the given
namespace.

### <a id="vim.diagnostic.fromqflist()" class="section-title" href="#vim.diagnostic.fromqflist()">fromqflist({list})</a>
Convert a list of quickfix items to a list of diagnostics.

Parameters: ~
• {list}  (table) A list of quickfix items from |getqflist()| or
|getloclist()|.

Return: ~
array of diagnostics [[[[[[[[diagnostic-structure](/undefined#diagnostic-structure)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)

### <a id="vim.diagnostic.get()" class="section-title" href="#vim.diagnostic.get()">get({bufnr}, {opts})</a>
Get current diagnostics.

Parameters: ~
• {bufnr}  (number|nil) Buffer number to get diagnostics from. Use 0 for
current buffer or nil for all buffers.
• {opts}   (table|nil) A table with the following keys:
• namespace: (number) Limit diagnostics to the given
namespace.
• lnum: (number) Limit diagnostics to the given line number.
• severity: See [[[[[[[[[diagnostic-severity](/undefined#diagnostic-severity)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined).

Return: ~
(table) A list of diagnostic items [[[[[[[[diagnostic-structure](/undefined#diagnostic-structure)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined).

### <a id="vim.diagnostic.get_namespace()" class="section-title" href="#vim.diagnostic.get_namespace()">get_namespace({namespace})</a>
Get namespace metadata.

Parameters: ~
• {namespace}  (number) Diagnostic namespace

Return: ~
(table) Namespace metadata

### <a id="vim.diagnostic.get_namespaces()" class="section-title" href="#vim.diagnostic.get_namespaces()">get_namespaces()</a>
Get current diagnostic namespaces.

Return: ~
(table) A list of active diagnostic namespaces |vim.diagnostic|.

### <a id="vim.diagnostic.get_next()" class="section-title" href="#vim.diagnostic.get_next()">get_next({opts})</a>
Get the next diagnostic closest to the cursor position.

Parameters: ~
• {opts}  (table) See |vim.diagnostic.goto_next()|

Return: ~
(table) Next diagnostic

### <a id="vim.diagnostic.get_next_pos()" class="section-title" href="#vim.diagnostic.get_next_pos()">get_next_pos({opts})</a>
Return the position of the next diagnostic in the current buffer.

Parameters: ~
• {opts}  (table) See |vim.diagnostic.goto_next()|

Return: ~
(table) Next diagnostic position as a (row, col) tuple.

### <a id="vim.diagnostic.get_prev()" class="section-title" href="#vim.diagnostic.get_prev()">get_prev({opts})</a>
Get the previous diagnostic closest to the cursor position.

Parameters: ~
• {opts}  (table) See |vim.diagnostic.goto_next()|

Return: ~
(table) Previous diagnostic

### <a id="vim.diagnostic.get_prev_pos()" class="section-title" href="#vim.diagnostic.get_prev_pos()">get_prev_pos({opts})</a>
Return the position of the previous diagnostic in the current buffer.

Parameters: ~
• {opts}  (table) See |vim.diagnostic.goto_next()|

Return: ~
(table) Previous diagnostic position as a (row, col) tuple.

### <a id="vim.diagnostic.goto_next()" class="section-title" href="#vim.diagnostic.goto_next()">goto_next({opts})</a>
Move to the next diagnostic.

Parameters: ~
• {opts}  (table|nil) Configuration table with the following keys:
• namespace: (number) Only consider diagnostics from the given
namespace.
• cursor_position: (cursor position) Cursor position as a
(row, col) tuple. See |nvim_win_get_cursor()|. Defaults to
the current cursor position.
• wrap: (boolean, default true) Whether to loop around file or
not. Similar to 'wrapscan'.
• severity: See [[[[[[[[[diagnostic-severity](/undefined#diagnostic-severity)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined).
• float: (boolean or table, default true) If "true", call
|vim.diagnostic.open_float()| after moving. If a table, pass
the table as the {opts} parameter to
|vim.diagnostic.open_float()|. Unless overridden, the float
will show diagnostics at the new cursor position (as if
"cursor" were passed to the "scope" option).
• win_id: (number, default 0) Window ID

### <a id="vim.diagnostic.goto_prev()" class="section-title" href="#vim.diagnostic.goto_prev()">goto_prev({opts})</a>
Move to the previous diagnostic in the current buffer.

Parameters: ~
• {opts}  (table) See |vim.diagnostic.goto_next()|

### <a id="vim.diagnostic.hide()" class="section-title" href="#vim.diagnostic.hide()">hide({namespace}, {bufnr})</a>
Hide currently displayed diagnostics.

This only clears the decorations displayed in the buffer. Diagnostics can
be redisplayed with |vim.diagnostic.show()|. To completely remove
diagnostics, use |vim.diagnostic.reset()|.

To hide diagnostics and prevent them from re-displaying, use
|vim.diagnostic.disable()|.

Parameters: ~
• {namespace}  (number|nil) Diagnostic namespace. When omitted, hide
diagnostics from all namespaces.
• {bufnr}      (number|nil) Buffer number, or 0 for current buffer. When
omitted, hide diagnostics in all buffers.

### <a id="vim.diagnostic.match()" class="section-title" href="#vim.diagnostic.match()">Note:</a>
match({str}, {pat}, {groups}, {severity_map}, {defaults})
Parse a diagnostic from a string.

For example, consider a line of output from a linter: 
```
WARNING filename:27:3: Variable 'foo' does not exist
```


This can be parsed into a diagnostic [[[[[[[[diagnostic-structure](/undefined#diagnostic-structure)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined) with: 
```
local s = "WARNING filename:27:3: Variable 'foo' does not exist"
local pattern = "^(%w+) %w+:(%d+):(%d+): (.+)$"
local groups = { "severity", "lnum", "col", "message" }
vim.diagnostic.match(s, pattern, groups, { WARNING = vim.diagnostic.WARN })
```


Parameters: ~
• {str}           (string) String to parse diagnostics from.
• {pat}           (string) Lua pattern with capture groups.
• {groups}        (table) List of fields in a [[[[[[[[diagnostic-structure](/undefined#diagnostic-structure)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined) to
associate with captures from {pat}.
• {severity_map}  (table) A table mapping the severity field from
{groups} with an item from |vim.diagnostic.severity|.
• {defaults}      (table|nil) Table of default values for any fields not
listed in {groups}. When omitted, numeric values
default to 0 and "severity" defaults to ERROR.

Return: ~
diagnostic [[[[[[[[diagnostic-structure](/undefined#diagnostic-structure)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined) or `nil` if {pat} fails to match
{str}.

### <a id="vim.diagnostic.open_float()" class="section-title" href="#vim.diagnostic.open_float()">open_float({opts}, {...})</a>
Show diagnostics in a floating window.

Parameters: ~
• {opts}  (table|nil) Configuration table with the same keys as
|vim.lsp.util.open_floating_preview()| in addition to the
following:
• bufnr: (number) Buffer number to show diagnostics from.
Defaults to the current buffer.
• namespace: (number) Limit diagnostics to the given namespace
• scope: (string, default "line") Show diagnostics from the
whole buffer ("buffer"), the current cursor line ("line"),
or the current cursor position ("cursor"). Shorthand
versions are also accepted ("c" for "cursor", "l" for
"line", "b" for "buffer").
• pos: (number or table) If {scope} is "line" or "cursor", use
this position rather than the cursor position. If a number,
interpreted as a line number; otherwise, a (row, col) tuple.
• severity_sort: (default false) Sort diagnostics by severity.
Overrides the setting from |vim.diagnostic.config()|.
• severity: See [[[[[[[[[diagnostic-severity](/undefined#diagnostic-severity)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined). Overrides the setting
from |vim.diagnostic.config()|.
• header: (string or table) String to use as the header for
the floating window. If a table, it is interpreted as a
[text, hl_group] tuple. Overrides the setting from
|vim.diagnostic.config()|.
• source: (boolean or string) Include the diagnostic source in
the message. Use "if_many" to only show sources if there is
more than one source of diagnostics in the buffer.
Otherwise, any truthy value means to always show the
diagnostic source. Overrides the setting from
|vim.diagnostic.config()|.
• format: (function) A function that takes a diagnostic as
input and returns a string. The return value is the text
used to display the diagnostic. Overrides the setting from
|vim.diagnostic.config()|.
• prefix: (function, string, or table) Prefix each diagnostic
in the floating window. If a function, it must have the
signature (diagnostic, i, total) -> (string, string), where
{i} is the index of the diagnostic being evaluated and
{total} is the total number of diagnostics displayed in the
window. The function should return a string which is
prepended to each diagnostic in the window as well as an
(optional) highlight group which will be used to highlight
the prefix. If {prefix} is a table, it is interpreted as a
[text, hl_group] tuple as in |nvim_echo()|; otherwise, if
{prefix} is a string, it is prepended to each diagnostic in
the window with no highlight. Overrides the setting from
|vim.diagnostic.config()|.

Return: ~
tuple ({float_bufnr}, {win_id})

### <a id="vim.diagnostic.reset()" class="section-title" href="#vim.diagnostic.reset()">reset({namespace}, {bufnr})</a>
Remove all diagnostics from the given namespace.

Unlike |vim.diagnostic.hide()|, this function removes all saved
diagnostics. They cannot be redisplayed using |vim.diagnostic.show()|. To
simply remove diagnostic decorations in a way that they can be
re-displayed, use |vim.diagnostic.hide()|.

Parameters: ~
• {namespace}  (number|nil) Diagnostic namespace. When omitted, remove
diagnostics from all namespaces.
• {bufnr}      (number|nil) Remove diagnostics for the given buffer.
When omitted, diagnostics are removed for all buffers.

### <a id="vim.diagnostic.set()" class="section-title" href="#vim.diagnostic.set()">set({namespace}, {bufnr}, {diagnostics}, {opts})</a>
Set diagnostics for the given namespace and buffer.

Parameters: ~
• {namespace}    (number) The diagnostic namespace
• {bufnr}        (number) Buffer number
• {diagnostics}  (table) A list of diagnostic items
[[[[[[[[diagnostic-structure](/undefined#diagnostic-structure)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)
• {opts}         (table|nil) Display options to pass to
|vim.diagnostic.show()|

### <a id="vim.diagnostic.setloclist()" class="section-title" href="#vim.diagnostic.setloclist()">setloclist({opts})</a>
Add buffer diagnostics to the location list.

Parameters: ~
• {opts}  (table|nil) Configuration table with the following keys:
• namespace: (number) Only add diagnostics from the given
namespace.
• winnr: (number, default 0) Window number to set location
list for.
• open: (boolean, default true) Open the location list after
setting.
• title: (string) Title of the location list. Defaults to
"Diagnostics".
• severity: See [[[[[[[[[diagnostic-severity](/undefined#diagnostic-severity)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined).

### <a id="vim.diagnostic.setqflist()" class="section-title" href="#vim.diagnostic.setqflist()">setqflist({opts})</a>
Add all diagnostics to the quickfix list.

Parameters: ~
• {opts}  (table|nil) Configuration table with the following keys:
• namespace: (number) Only add diagnostics from the given
namespace.
• open: (boolean, default true) Open quickfix list after
setting.
• title: (string) Title of quickfix list. Defaults to
"Diagnostics".
• severity: See [[[[[[[[[diagnostic-severity](/undefined#diagnostic-severity)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined).

### <a id="vim.diagnostic.show()" class="section-title" href="#vim.diagnostic.show()">Note:</a>
show({namespace}, {bufnr}, {diagnostics}, {opts})
Display diagnostics for the given namespace and buffer.

Parameters: ~
• {namespace}    (number|nil) Diagnostic namespace. When omitted, show
diagnostics from all namespaces.
• {bufnr}        (number|nil) Buffer number, or 0 for current buffer.
When omitted, show diagnostics in all buffers.
• {diagnostics}  (table|nil) The diagnostics to display. When omitted,
use the saved diagnostics for the given namespace and
buffer. This can be used to display a list of
diagnostics without saving them or to display only a
subset of diagnostics. May not be used when {namespace}
or {bufnr} is nil.
• {opts}         (table|nil) Display options. See
|vim.diagnostic.config()|.

### <a id="vim.diagnostic.toqflist()" class="section-title" href="#vim.diagnostic.toqflist()">toqflist({diagnostics})</a>
Convert a list of diagnostics to a list of quickfix items that can be
passed to |setqflist()| or |setloclist()|.

Parameters: ~
• {diagnostics}  (table) List of diagnostics [[[[[[[[diagnostic-structure](/undefined#diagnostic-structure)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined).

Return: ~
array of quickfix list items [[setqflist-what](/undefined#setqflist-what)](/undefined)

vim:tw=78:ts=8:sw=4:sts=4:et:ft=help:norl:

