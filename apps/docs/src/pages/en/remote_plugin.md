---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Nvim" class="section-title" href="#Nvim"> Remote Plugin Txt</a> 

NVIM REFERENCE MANUAL    by Thiago de Arruda


### <a id="remote-plugin" class="section-title" href="#remote-plugin">Nvim support for remote plugins</a>

Type [gO](#gO) to see the table of contents.


## <a id="remote-plugin-intro" class="section-title" href="#remote-plugin-intro">1. Introduction</a> 

Extensibility is a primary goal of Nvim. Any programming language may be used
to extend Nvim without changes to Nvim itself. This is achieved with remote
plugins, coprocesses that have a direct communication channel (via [RPC](#RPC)) with
the Nvim process.

Even though these plugins run in separate processes they can call, be called,
and receive events just as if the plugin's code were executed in the main
process.


## <a id="remote-plugin-hosts" class="section-title" href="#remote-plugin-hosts">2. Plugin Hosts</a> 

While plugins can be implemented as arbitrary programs that communicate
directly with the high-level Nvim API and are called via [rpcrequest()](#rpcrequest()) and
[rpcnotify()](#rpcnotify()), that is not the best approach. Instead, developers should first
check whether a plugin host is available for their chosen programming language.

Plugin hosts are programs that provide a high-level environment for plugins,
taking care of most boilerplate involved in defining commands, autocmds, and
functions that are implemented over [RPC](#RPC) connections. Hosts are loaded only
when one of their registered plugins require it, keeping Nvim's startup as
fast as possible, even if many plugins/hosts are installed.


## <a id="remote-plugin-example" class="section-title" href="#remote-plugin-example">3. Example</a> 

The best way to learn about remote plugins is with an example, so let's see
what a Python plugin looks like. This plugin exports a command, a function, and
an autocmd. The plugin is called 'Limit', and all it does is limit the number
of requests made to it. Here's the plugin source code:
```
import pynvim

@pynvim.plugin
class Limit(object):
def __init__(self, vim):
self.vim = vim
self.calls = 0

### <a id="@pynvim.command('Cmd', range='', nargs='', sync=True)" class="section-title" href="#@pynvim.command('Cmd', range='', nargs='', sync=True)">Note:</a>
def command_handler(self, args, range):
self._increment_calls()
self.vim.current.line = (
'Command: Called %d times, args: %s, range: %s' % (self.calls,
args,
range))

### <a id="@pynvim.autocmd('BufEnter', pattern='.py', eval='expand("<afile>")'," class="section-title" href="#@pynvim.autocmd('BufEnter', pattern='.py', eval='expand("<afile>")',">Note:</a>
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
self.calls += 1

```


As can be seen, the plugin is implemented using idiomatic Python (classes,
methods, and decorators). The translation between these language-specific
idioms to Vimscript occurs while the plugin manifest is being generated (see
the next section).

Notice that the exported command and autocmd are defined with the "sync" flag,
which affects how Nvim calls the plugin: with "sync" the [rpcrequest()](#rpcrequest())
function is used, which will block Nvim until the handler function returns a
value. Without the "sync" flag, the call is made using a fire and forget
approach with [rpcnotify()](#rpcnotify()), meaning return values or exceptions raised in the
handler function are ignored.

To test the above plugin, it must be saved in "rplugin/python" in a
'runtimepath' directory (~/.config/nvim/rplugin/python/limit.py for example).
Then, the remote plugin manifest must be generated with
[:UpdateRemotePlugins](#:UpdateRemotePlugins).


## <a id="remote-plugin-manifest" class="section-title" href="#remote-plugin-manifest">4. Remote Plugin Manifest</a> <span id=":UpdateRemotePlugins"></span>

Just installing remote plugins to "rplugin/{host}" isn't enough for them to be
automatically loaded when required. You must execute [:UpdateRemotePlugins](#:UpdateRemotePlugins)
every time a remote plugin is installed, updated, or deleted.

[:UpdateRemotePlugins](#:UpdateRemotePlugins) generates the remote plugin manifest, a special
Vimscript file containing declarations for all Vimscript entities
(commands/autocommands/functions) defined by all remote plugins, with each
entity associated with the host and plugin path.

Manifest declarations are just calls to the `remote#host#RegisterPlugin`
function, which takes care of bootstrapping the host as soon as the declared
command, autocommand, or function is used for the first time.

The manifest generation step is necessary to keep Nvim's startup fast in
situations where a user has remote plugins with different hosts. For example,
say a user has three plugins, for Python, Java and .NET hosts respectively. If
we were to load all three plugins at startup, then three language runtimes
would also be spawned, which could take seconds!

With the manifest, each host will only be loaded when required. Continuing with
the example, say the Java plugin is a semantic completion engine for Java code.
If it defines the autocommand "BufEnter *.java", then the Java host is spawned
only when Nvim loads a buffer matching "*.java".

If the explicit call to [:UpdateRemotePlugins](#:UpdateRemotePlugins) seems inconvenient, try to see
it like this: It's a way to provide IDE capabilities in Nvim while still
keeping it fast and lightweight for general use. It's also analogous to the
[:helptags](#:helptags) command.

### <a id="$NVIM_RPLUGIN_MANIFEST" class="section-title" href="#$NVIM_RPLUGIN_MANIFEST">Note:</a>
Unless $NVIM_RPLUGIN_MANIFEST is set the manifest will be written to a file
named `rplugin.vim` at:

Unix ~
$XDG_DATA_HOME/nvim/ or ~/.local/share/nvim/

Windows ~
$LOCALAPPDATA/nvim/ or ~/AppData/Local/nvim/


## <a id="" class="section-title" href="#">Vim Tw 78 Ts 8 Noet Ft Help Norl</a> 



