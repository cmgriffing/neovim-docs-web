---
title:  Remote_plugin
layout: ../../layouts/MainLayout.astro
---

  <a name="remote_plugin.txt"></a><a name="remote-plugin"></a><h1> Remote_plugin</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/remote_plugin.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Nvim support for remote plugins</div>
<div class="old-help-para"><h2 class="help-heading">1. Introduction<span class="help-heading-tags">					    <a name="remote-plugin-intro"></a><span class="help-tag">remote-plugin-intro</span></span></h2></div>
<div class="old-help-para">Extensibility is a primary goal of Nvim. Any programming language may be used
to extend Nvim without changes to Nvim itself. This is achieved with remote
plugins, coprocesses that have a direct communication channel (via <a href="api.html#RPC">RPC</a>) with
the Nvim process.</div>
<div class="old-help-para">Even though these plugins run in separate processes they can call, be called,
and receive events just as if the plugin's code were executed in the main
process.</div>
<div class="old-help-para"><h2 class="help-heading">2. Plugin hosts<span class="help-heading-tags">					    <a name="remote-plugin-hosts"></a><span class="help-tag">remote-plugin-hosts</span></span></h2></div>
<div class="old-help-para">While plugins can be implemented as arbitrary programs that communicate
directly with the high-level Nvim API and are called via <a href="builtin.html#rpcrequest()">rpcrequest()</a> and
<a href="builtin.html#rpcnotify()">rpcnotify()</a>, that is not the best approach. Instead, developers should first
check whether a plugin host is available for their chosen programming language.</div>
<div class="old-help-para">Plugin hosts are programs that provide a high-level environment for plugins,
taking care of most boilerplate involved in defining commands, autocmds, and
functions that are implemented over <a href="api.html#RPC">RPC</a> connections. Hosts are loaded only
when one of their registered plugins require it, keeping Nvim's startup as
fast as possible, even if many plugins/hosts are installed.</div>
<div class="old-help-para"><h2 class="help-heading">3. Example<span class="help-heading-tags">					    <a name="remote-plugin-example"></a><span class="help-tag">remote-plugin-example</span></span></h2></div>
<div class="old-help-para">The best way to learn about remote plugins is with an example, so let's see
what a Python plugin looks like. This plugin exports a command, a function, and
an autocmd. The plugin is called 'Limit', and all it does is limit the number
of requests made to it. Here's the plugin source code:
<pre>import pynvim

@pynvim.plugin
class Limit(object):
    def __init__(self, vim):
        self.vim = vim
        self.calls = 0

    @pynvim.command('Cmd', range='', nargs='*', sync=True)
    def command_handler(self, args, range):
        self._increment_calls()
        self.vim.current.line = (
            'Command: Called %d times, args: %s, range: %s' % (self.calls,
                                                               args,
                                                               range))

    @pynvim.autocmd('BufEnter', pattern='*.py', eval='expand("&lt;afile&gt;")',
                    sync=True)
    def autocmd_handler(self, filename):
        self._increment_calls()
        self.vim.current.line = (
            'Autocmd: Called %s times, file: %s' % (self.calls, filename))

    @pynvim.function('Func')
    def function_handler(self, args):
        self._increment_calls()
        self.vim.current.line = (
            'Function: Called %d times, args: %s' % (self.calls, args))

    def _increment_calls(self):
        if self.calls == 5:
            raise Exception('Too many calls!')
        self.calls += 1</pre></div>
<div class="old-help-para">As can be seen, the plugin is implemented using idiomatic Python (classes,
methods, and decorators). The translation between these language-specific
idioms to Vimscript occurs while the plugin manifest is being generated (see
the next section).</div>
<div class="old-help-para">Notice that the exported command and autocmd are defined with the "sync" flag,
which affects how Nvim calls the plugin: with "sync" the <a href="builtin.html#rpcrequest()">rpcrequest()</a>
function is used, which will block Nvim until the handler function returns a
value. Without the "sync" flag, the call is made using a fire and forget
approach with <a href="builtin.html#rpcnotify()">rpcnotify()</a>, meaning return values or exceptions raised in the
handler function are ignored.</div>
<div class="old-help-para">To test the above plugin, it must be saved in "rplugin/python" in a
<a href="options.html#'runtimepath'">'runtimepath'</a> directory (~/.config/nvim/rplugin/python/limit.py for example).
Then, the remote plugin manifest must be generated with
<a href="remote_plugin.html#%3AUpdateRemotePlugins">:UpdateRemotePlugins</a>.</div>
<div class="old-help-para"><h2 class="help-heading">4. Remote plugin manifest<span class="help-heading-tags">			    <a name="remote-plugin-manifest"></a><span class="help-tag">remote-plugin-manifest</span></span></h2>						      <a name="%3AUpdateRemotePlugins"></a><code class="help-tag-right">:UpdateRemotePlugins</code></div>
<div class="old-help-para">Just installing remote plugins to "rplugin/{host}" isn't enough for them to be
automatically loaded when required. You must execute <a href="remote_plugin.html#%3AUpdateRemotePlugins">:UpdateRemotePlugins</a>
every time a remote plugin is installed, updated, or deleted.</div>
<div class="old-help-para"><a href="remote_plugin.html#%3AUpdateRemotePlugins">:UpdateRemotePlugins</a> generates the remote plugin manifest, a special
Vimscript file containing declarations for all Vimscript entities
(commands/autocommands/functions) defined by all remote plugins, with each
entity associated with the host and plugin path.</div>
<div class="old-help-para">Manifest declarations are just calls to the <code>remote#host#RegisterPlugin</code>
function, which takes care of bootstrapping the host as soon as the declared
command, autocommand, or function is used for the first time.</div>
<div class="old-help-para">The manifest generation step is necessary to keep Nvim's startup fast in
situations where a user has remote plugins with different hosts. For example,
say a user has three plugins, for Python, Java and .NET hosts respectively. If
we were to load all three plugins at startup, then three language runtimes
would also be spawned, which could take seconds!</div>
<div class="old-help-para">With the manifest, each host will only be loaded when required. Continuing with
the example, say the Java plugin is a semantic completion engine for Java code.
If it defines the autocommand "BufEnter.java", then the Java host is spawned
only when Nvim loads a buffer matching "*.java".</div>
<div class="old-help-para">If the explicit call to <a href="remote_plugin.html#%3AUpdateRemotePlugins">:UpdateRemotePlugins</a> seems inconvenient, try to see
it like this: It's a way to provide IDE capabilities in Nvim while still
keeping it fast and lightweight for general use. It's also analogous to the
<a href="helphelp.html#%3Ahelptags">:helptags</a> command.</div>
<div class="old-help-para">						<a name="%24NVIM_RPLUGIN_MANIFEST"></a><code class="help-tag-right">$NVIM_RPLUGIN_MANIFEST</code>
Unless $NVIM_RPLUGIN_MANIFEST is set the manifest will be written to a file
named <code>rplugin.vim</code> at:</div>
<div class="old-help-para"><div class="help-column_heading">	Unix</div>	  $XDG_DATA_HOME/nvim/ or ~/.local/share/nvim/</div>
<div class="old-help-para"><div class="help-column_heading">	Windows</div>	  $LOCALAPPDATA/nvim/ or ~/AppData/Local/nvim/</div>

  
  