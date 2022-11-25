---
title:  Pi_health
layout: ../../layouts/MainLayout.astro
---

  <a name="pi_health.txt"></a><a name="health"></a><h1> Pi_health</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/pi_health.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="help-para">
Author: TJ DeVries &lt;devries.timothyj@gmail.com&gt;

</div>
<div class="help-para">
<h2 class="help-heading">Introduction</h2>


</div>
<div class="help-para">
health.vim is a minimal framework to help users troubleshoot configuration and
any other environment conditions that a plugin might care about. Nvim ships
with healthchecks for configuration, performance, python support, ruby
support, clipboard support, and more.

</div>
<div class="help-para">
To run all healthchecks, use:<pre>:checkhealth</pre>

</div>
<div class="help-para">
Plugin authors are encouraged to write new healthchecks. <a href="pi_health.html#health-dev">health-dev</a>

</div>
<div class="help-para">
<h2 class="help-heading">Commands<span class="help-heading-tags">                                <a name="health-commands"></a><span class="help-tag">health-commands</span></span></h2>


</div>
<div class="help-para">
                                        <a name="%3Ache"></a><code class="help-tag-right">:che</code> <a name="%3Acheckhealth"></a><code class="help-tag">:checkhealth</code> <a name="%3ACheckHealth"></a><code class="help-tag">:CheckHealth</code>
:che[ckhealth]  Run all healthchecks.
                                        <a name="E5009"></a><code class="help-tag-right">E5009</code>
                Nvim depends on <a href="starting.html#%24VIMRUNTIME">$VIMRUNTIME</a>, <a href="options.html#'runtimepath'">'runtimepath'</a> and <a href="options.html#'packpath'">'packpath'</a> to
                find the standard "runtime files" for syntax highlighting,
                filetype-specific behavior, and standard plugins (including
                :checkhealth).  If the runtime files cannot be found then
                those features will not work.

</div>
<div class="help-para">
:che[ckhealth] <code>{plugins}</code>
                Run healthcheck(s) for one or more plugins. E.g. to run only
                the standard Nvim healthcheck:<pre>:checkhealth nvim</pre>

</div>
<div class="help-para">
                To run the healthchecks for the "foo" and "bar" plugins
                (assuming they are on <a href="options.html#'runtimepath'">'runtimepath'</a> and they have implemented
                the Lua <code>require("foo.health").check()</code> interface):<pre>:checkhealth foo bar</pre>

</div>
<div class="help-para">
                To run healthchecks for Lua submodules, use dot notation or
                "*" to refer to all submodules. For example Nvim provides
                <code>vim.lsp</code> and <code>vim.treesitter</code>:<pre>:checkhealth vim.lsp vim.treesitter
:checkhealth vim*</pre>

</div>
<div class="help-para">
<h2 class="help-heading">Functions<span class="help-heading-tags">                               <a name="health-functions"></a><span class="help-tag">health-functions</span> <a name="vim.health"></a><span class="help-tag">vim.health</span></span></h2>


</div>
<div class="help-para">
The Lua "health" module can be used to create new healthchecks. To get started
see <a href="pi_health.html#health-dev">health-dev</a>.

</div>
<div class="help-para">
vim.health.report_start({name})                         <a name="vim.health.report_start()"></a><code class="help-tag-right">vim.health.report_start()</code>
        Starts a new report. Most plugins should call this only once, but if
        you want different sections to appear in your report, call this once
        per section.

</div>
<div class="help-para">
vim.health.report_info({msg})                           <a name="vim.health.report_info()"></a><code class="help-tag-right">vim.health.report_info()</code>
        Reports an informational message.

</div>
<div class="help-para">
vim.health.report_ok({msg})                             <a name="vim.health.report_ok()"></a><code class="help-tag-right">vim.health.report_ok()</code>
        Reports a "success" message.

</div>
<div class="help-para">
vim.health.report_warn({msg} [, <code>{advice}</code>])              <a name="vim.health.report_warn()"></a><code class="help-tag-right">vim.health.report_warn()</code>
        Reports a warning. <code>{advice}</code> is an optional list of suggestions to
        present to the user.

</div>
<div class="help-para">
vim.health.report_error({msg} [, <code>{advice}</code>])             <a name="vim.health.report_error()"></a><code class="help-tag-right">vim.health.report_error()</code>
        Reports an error. <code>{advice}</code> is an optional list of suggestions to
        present to the user.

</div>
<div class="help-para">
<h2 class="help-heading">Create a healthcheck<span class="help-heading-tags">                                    <a name="health-dev"></a><span class="help-tag">health-dev</span></span></h2>


</div>
<div class="help-para">
Healthchecks are functions that check the user environment, configuration, or
any other prerequisites that a plugin cares about. Nvim ships with
healthchecks in:
<div class="help-li" style=""> $VIMRUNTIME/autoload/health/
</div><div class="help-li" style=""> $VIMRUNTIME/lua/vim/lsp/health.lua
</div><div class="help-li" style=""> $VIMRUNTIME/lua/vim/treesitter/health.lua
</div><div class="help-li" style=""> and more...
</div>
</div>
<div class="help-para">
To add a new healthcheck for your own plugin, simply create a "health.lua"
module on <a href="options.html#'runtimepath'">'runtimepath'</a> that returns a table with a "check()" function. Then
<a href="pi_health.html#%3Acheckhealth">:checkhealth</a> will automatically find and invoke the function.

</div>
<div class="help-para">
For example if your plugin is named "foo", define your healthcheck module at
one of these locations (on <a href="options.html#'runtimepath'">'runtimepath'</a>):
<div class="help-li" style=""> lua/foo/health/init.lua
</div><div class="help-li" style=""> lua/foo/health.lua
</div>
</div>
<div class="help-para">
If your plugin also provides a submodule named "bar" for which you want
a separate healthcheck, define the healthcheck at one of these locations:
<div class="help-li" style=""> lua/foo/bar/health/init.lua
</div><div class="help-li" style=""> lua/foo/bar/health.lua
</div>
</div>
<div class="help-para">
All such health modules must return a Lua table containing a <code>check()</code>
function.

</div>
<div class="help-para">
Copy this sample code into <code>lua/foo/health.lua</code>, replacing "foo" in the path
with your plugin name:<pre>local M = {}

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

return M</pre>

</div>

  
  