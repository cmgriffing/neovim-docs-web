---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Healthcheck framework" class="section-title" href="#Healthcheck framework"> Pi Health Txt</a> 

Author: TJ DeVries <devries.timothyj@gmail.com>

Type [gO](#gO) to see the table of contents.


## <a id="health" class="section-title" href="#health">Introduction</a> 

health.vim is a minimal framework to help users troubleshoot configuration and
any other environment conditions that a plugin might care about. Nvim ships
with healthchecks for configuration, performance, python support, ruby
support, clipboard support, and more.

To run all healthchecks, use:
```

:checkhealth

```

Plugin authors are encouraged to write new healthchecks. [health-dev](#health-dev)


## <a id="health-commands" class="section-title" href="#health-commands">Commands</a> 

### <a id=":checkhealth :CheckHealth" class="section-title" href="#:checkhealth :CheckHealth">Note:</a>
:checkhealth    Run all healthchecks.
### <a id="E5009" class="section-title" href="#E5009">Note:</a>
Nvim depends on [$VIMRUNTIME](#$VIMRUNTIME), 'runtimepath' and 'packpath' to
find the standard "runtime files" for syntax highlighting,
filetype-specific behavior, and standard plugins (including
:checkhealth).  If the runtime files cannot be found then
those features will not work.

:checkhealth {plugins}
Run healthcheck(s) for one or more plugins. E.g. to run only
the standard Nvim healthcheck:
```
:checkhealth nvim

```

To run the healthchecks for the "foo" and "bar" plugins
(assuming they are on 'runtimepath' and they have implemented
the Lua `require("foo.health").check()` interface):
```
:checkhealth foo bar

```

To run healthchecks for Lua submodules, use dot notation or
### <a id=""" to refer to all submodules. For example Nvim provides" class="section-title" href="#"" to refer to all submodules. For example Nvim provides">Note:</a>
`vim.lsp` and `vim.treesitter`:
```
:checkhealth vim.lsp vim.treesitter
### <a id=":checkhealth vim" class="section-title" href="#:checkhealth vim">Note:</a>

```



## <a id="health-functions vim.health" class="section-title" href="#health-functions vim.health">Functions</a> 

The Lua "health" module can be used to create new healthchecks. To get started
see [health-dev](#health-dev).

### <a id="vim.health.report_start()" class="section-title" href="#vim.health.report_start()">vim.health.report_start({name})</a>
Starts a new report. Most plugins should call this only once, but if
you want different sections to appear in your report, call this once
per section.

### <a id="vim.health.report_info()" class="section-title" href="#vim.health.report_info()">vim.health.report_info({msg})</a>
Reports an informational message.

### <a id="vim.health.report_ok()" class="section-title" href="#vim.health.report_ok()">vim.health.report_ok({msg})</a>
Reports a "success" message.

### <a id="vim.health.report_warn()" class="section-title" href="#vim.health.report_warn()">vim.health.report_warn({msg} [, {advice}])</a>
Reports a warning. {advice} is an optional list of suggestions to
present to the user.

### <a id="vim.health.report_error()" class="section-title" href="#vim.health.report_error()">vim.health.report_error({msg} [, {advice}])</a>
Reports an error. {advice} is an optional list of suggestions to
present to the user.


## <a id="health-dev" class="section-title" href="#health-dev">Create a Healthcheck</a> 

Healthchecks are functions that check the user environment, configuration, or
any other prerequisites that a plugin cares about. Nvim ships with
healthchecks in:
- $VIMRUNTIME/autoload/health/
- $VIMRUNTIME/lua/vim/lsp/health.lua
- $VIMRUNTIME/lua/vim/treesitter/health.lua
- and more...

To add a new healthcheck for your own plugin, simply create a "health.lua"
module on 'runtimepath' that returns a table with a "check()" function. Then
[:checkhealth](#:checkhealth) will automatically find and invoke the function.

For example if your plugin is named "foo", define your healthcheck module at
one of these locations (on 'runtimepath'):
- lua/foo/health/init.lua
- lua/foo/health.lua

If your plugin also provides a submodule named "bar" for which you want
a separate healthcheck, define the healthcheck at one of these locations:
- lua/foo/bar/health/init.lua
- lua/foo/bar/health.lua

All such health modules must return a Lua table containing a `check()`
function.

Copy this sample code into `lua/foo/health.lua`, replacing "foo" in the path
with your plugin name:
```

local M = {}

M.check = function()
vim.health.report_start("my_plugin report")
-- make sure setup function parameters are ok
if check_setup() then
vim.health.report_ok("Setup is correct")
else
vim.health.report_error("Setup is incorrect")
end
-- do some more checking
-- ...
end

return M


vim:et:tw=78:ts=8:ft=help:fdm=marker

