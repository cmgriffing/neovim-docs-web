---
title:  Provider
layout: ../../layouts/MainLayout.astro
---

  <a name="provider.txt"></a><a name="provider"></a><h1> Provider</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/provider.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="help-para">
Providers

</div>
<div class="help-para">
Nvim delegates some features to dynamic "providers". This document describes
the providers and how to install them.
						<a name="E319"></a><code class="help-tag-right">E319</code>
Use of a feature requiring a missing provider is an error:<pre>E319: No "foo" provider found. Run ":checkhealth provider"</pre>
Run the <a href="/neovim-docs-web/en/pi_health#%3Acheckhealth">:checkhealth</a> command, and review the sections below.

</div>
<div class="help-para">
<h2 class="help-heading">Python integration<span class="help-heading-tags">				<a name="provider-python"></a><span class="help-tag">provider-python</span></span></h2>


</div>
<div class="help-para">
Nvim supports Python <a href="/neovim-docs-web/en/remote_plugin#remote-plugin">remote-plugin</a>s and the Vim legacy <a href="/neovim-docs-web/en/if_pyth#python3">python3</a> and
<a href="/neovim-docs-web/en/if_pyth#pythonx">pythonx</a> interfaces (which are implemented as remote-plugins).

</div>
<div class="help-para">
Note: Only the Vim 7.3 legacy interface is supported, not later features such
as <a href="/neovim-docs-web/en/vim_diff#python-bindeval">python-bindeval</a> (Vim 7.4); use the Nvim API instead. Python 2 is not
supported.

</div>
<div class="help-para">
<div class="help-column_heading">PYTHON QUICKSTART</div>

</div>
<div class="help-para">
To use Python plugins, you need the "pynvim" module. Run <a href="/neovim-docs-web/en/pi_health#%3Acheckhealth">:checkhealth</a> to see
if you already have it (some package managers install the module with Nvim
itself).

</div>
<div class="help-para">
For Python 3 plugins:
1. Make sure Python 3.4+ is available in your $PATH.
2. Install the module (try "python" if "python3" is missing):<pre>python3 -m pip install --user --upgrade pynvim</pre>
The pip <code>--upgrade</code> flag ensures that you get the latest version even if
a previous version was already installed.

</div>
<div class="help-para">
See also <a href="/neovim-docs-web/en/provider#python-virtualenv">python-virtualenv</a>.

</div>
<div class="help-para">
Note: The old "neovim" module was renamed to "pynvim".
<a href="https://github.com/neovim/neovim/wiki/Following-HEAD#20181118">https://github.com/neovim/neovim/wiki/Following-HEAD#20181118</a>
If you run into problems, uninstall _both_ then install "pynvim" again:<pre>python -m pip uninstall neovim pynvim
python -m pip install --user --upgrade pynvim</pre>
<div class="help-column_heading">PYTHON PROVIDER CONFIGURATION</div>
						<a name="g%3Apython3_host_prog"></a><code class="help-tag-right">g:python3_host_prog</code>
Command to start Python 3 (executable, not directory). Setting this makes
startup faster. Useful for working with virtualenvs. Must be set before any
check for has("python3").<pre>let g:python3_host_prog = '/path/to/python3'</pre>

</div>
<div class="help-para">
						<a name="g%3Aloaded_python3_provider"></a><code class="help-tag-right">g:loaded_python3_provider</code>
To disable Python 3 support:<pre>let g:loaded_python3_provider = 0</pre>
<div class="help-column_heading">PYTHON VIRTUALENVS</div>
						<a name="python-virtualenv"></a><code class="help-tag-right">python-virtualenv</code>
If you plan to use per-project virtualenvs often, you should assign one
virtualenv for Neovim and hard-code the interpreter path via
<a href="/neovim-docs-web/en/provider#g%3Apython3_host_prog">g:python3_host_prog</a> so that the "pynvim" package is not required
for each virtualenv.

</div>
<div class="help-para">
Example using pyenv:<pre>pyenv install 3.4.4
pyenv virtualenv 3.4.4 py3nvim
pyenv activate py3nvim
python3 -m pip install pynvim
pyenv which python  # Note the path</pre>
The last command reports the interpreter path, add it to your init.vim:<pre>let g:python3_host_prog = '/path/to/py3nvim/bin/python'</pre>
See also: <a href="https://github.com/zchee/deoplete-jedi/wiki/Setting-up-Python-for-Neovim">https://github.com/zchee/deoplete-jedi/wiki/Setting-up-Python-for-Neovim</a>

</div>
<div class="help-para">
<h2 class="help-heading">Ruby integration<span class="help-heading-tags">		    	      <a name="provider-ruby"></a><span class="help-tag">provider-ruby</span></span></h2>


</div>
<div class="help-para">
Nvim supports Ruby <a href="/neovim-docs-web/en/remote_plugin#remote-plugin">remote-plugin</a>s and the Vim legacy <a href="/neovim-docs-web/en/if_ruby#ruby-vim">ruby-vim</a> interface
(which is itself implemented as a Nvim remote-plugin).

</div>
<div class="help-para">
<div class="help-column_heading">RUBY QUICKSTART</div>

</div>
<div class="help-para">
To use Ruby plugins with Nvim, install the latest "neovim" RubyGem:<pre>gem install neovim</pre>
Run <a href="/neovim-docs-web/en/pi_health#%3Acheckhealth">:checkhealth</a> to see if your system is up-to-date.

</div>
<div class="help-para">
<div class="help-column_heading">RUBY PROVIDER CONFIGURATION</div>
						<a name="g%3Aloaded_ruby_provider"></a><code class="help-tag-right">g:loaded_ruby_provider</code>
To disable Ruby support:<pre>let g:loaded_ruby_provider = 0</pre>

</div>
<div class="help-para">
						<a name="g%3Aruby_host_prog"></a><code class="help-tag-right">g:ruby_host_prog</code>
Command to start the Ruby host. By default this is "neovim-ruby-host". With
project-local Ruby versions (via tools like RVM or rbenv) setting this can
avoid the need to install the "neovim" gem in every project.

</div>
<div class="help-para">
To use an absolute path (e.g. to an rbenv installation):<pre>let g:ruby_host_prog = '~/.rbenv/versions/2.4.1/bin/neovim-ruby-host'</pre>
To use the RVM "system" Ruby installation:<pre>let g:ruby_host_prog = 'rvm system do neovim-ruby-host'</pre>
<h2 class="help-heading">Perl integration<span class="help-heading-tags">				<a name="provider-perl"></a><span class="help-tag">provider-perl</span></span></h2>


</div>
<div class="help-para">
Nvim supports Perl <a href="/neovim-docs-web/en/remote_plugin#remote-plugin">remote-plugin</a>s on Unix platforms. Support for polling STDIN
on MS-Windows is currently lacking from all known event loop implementations.
The Vim legacy <a href="/neovim-docs-web/en/if_perl#perl-vim">perl-vim</a> interface is also supported (which is itself
implemented as a Nvim remote-plugin).
<a href="https://github.com/jacquesg/p5-Neovim-Ext">https://github.com/jacquesg/p5-Neovim-Ext</a>

</div>
<div class="help-para">
Note: Only perl versions from 5.22 onward are supported.

</div>
<div class="help-para">
<div class="help-column_heading">PERL QUICKSTART</div>

</div>
<div class="help-para">
To use perl remote-plugins with Nvim, install the "Neovim::Ext" cpan package:<pre>cpanm -n Neovim::Ext</pre>
Run <a href="/neovim-docs-web/en/pi_health#%3Acheckhealth">:checkhealth</a> to see if your system is up-to-date.

</div>
<div class="help-para">
<div class="help-column_heading">PERL PROVIDER CONFIGURATION</div>
						<a name="g%3Aloaded_perl_provider"></a><code class="help-tag-right">g:loaded_perl_provider</code>
To disable Perl support:<pre>:let g:loaded_perl_provider = 0</pre>

</div>
<div class="help-para">
						<a name="g%3Aperl_host_prog"></a><code class="help-tag-right">g:perl_host_prog</code>
Command to start the Perl executable. Must be set before any
check for has("perl").<pre>let g:perl_host_prog = '/path/to/perl'</pre>

</div>
<div class="help-para">
<h2 class="help-heading">Node.js integration<span class="help-heading-tags">				<a name="provider-nodejs"></a><span class="help-tag">provider-nodejs</span></span></h2>


</div>
<div class="help-para">
Nvim supports Node.js <a href="/neovim-docs-web/en/remote_plugin#remote-plugin">remote-plugin</a>s.
<a href="https://github.com/neovim/node-client/">https://github.com/neovim/node-client/</a>

</div>
<div class="help-para">
<div class="help-column_heading">NODEJS QUICKSTART</div>

</div>
<div class="help-para">
To use javascript remote-plugins with Nvim, install the "neovim" npm package:<pre>npm install -g neovim</pre>
Run <a href="/neovim-docs-web/en/pi_health#%3Acheckhealth">:checkhealth</a> to see if your system is up-to-date.

</div>
<div class="help-para">
<div class="help-column_heading">NODEJS PROVIDER CONFIGURATION</div>
						<a name="g%3Aloaded_node_provider"></a><code class="help-tag-right">g:loaded_node_provider</code>
To disable Node.js support:<pre>:let g:loaded_node_provider = 0</pre>

</div>
<div class="help-para">
						<a name="g%3Anode_host_prog"></a><code class="help-tag-right">g:node_host_prog</code>
Command to start the Node.js host. Setting this makes startup faster.

</div>
<div class="help-para">
By default, Nvim searches for "neovim-node-host" using "npm root -g", which
can be slow. To avoid this, set g:node_host_prog to the host path:<pre>let g:node_host_prog = '/usr/local/bin/neovim-node-host'</pre>

</div>
<div class="help-para">
<h2 class="help-heading">Clipboard integration<span class="help-heading-tags"> 			      <a name="provider-clipboard"></a><span class="help-tag">provider-clipboard</span> <a name="clipboard"></a><span class="help-tag">clipboard</span></span></h2>


</div>
<div class="help-para">
Nvim has no direct connection to the system clipboard. Instead it depends on
a <a href="/neovim-docs-web/en/provider#provider">provider</a> which transparently uses shell commands to communicate with the
system clipboard or any other clipboard "backend".

</div>
<div class="help-para">
To ALWAYS use the clipboard for ALL operations (instead of interacting with
the '+' and/or '' registers explicitly):<pre>set clipboard+=unnamedplus</pre>
See <a href="/neovim-docs-web/en/options#'clipboard'">'clipboard'</a> for details and options.

</div>
<div class="help-para">
							      <a name="clipboard-tool"></a><code class="help-tag-right">clipboard-tool</code>
The presence of a working clipboard tool implicitly enables the '+' and '*'
registers. Nvim looks for these clipboard tools, in order of priority:

</div>
<div class="help-para">
<div class="help-li" style=""> <a href="/neovim-docs-web/en/provider#g%3Aclipboard">g:clipboard</a>
</div><div class="help-li" style=""> pbcopy, pbpaste (macOS)
</div><div class="help-li" style=""> wl-copy, wl-paste (if $WAYLAND_DISPLAY is set)
</div><div class="help-li" style=""> waycopy, waypaste (if $WAYLAND_DISPLAY is set)
</div><div class="help-li" style=""> xclip (if $DISPLAY is set)
</div><div class="help-li" style=""> xsel (if $DISPLAY is set)
</div><div class="help-li" style=""> lemonade (for SSH) <a href="https://github.com/pocke/lemonade">https://github.com/pocke/lemonade</a>
</div><div class="help-li" style=""> doitclient (for SSH) <a href="https://www.chiark.greenend.org.uk/~sgtatham/doit/">https://www.chiark.greenend.org.uk/~sgtatham/doit/</a>
</div><div class="help-li" style=""> win32yank (Windows)
</div><div class="help-li" style=""> termux (via termux-clipboard-set, termux-clipboard-set)
</div><div class="help-li" style=""> tmux (if $TMUX is set)
</div>
</div>
<div class="help-para">
								 <a name="g%3Aclipboard"></a><code class="help-tag-right">g:clipboard</code>
To configure a custom clipboard tool, set g:clipboard to a dictionary.
For example this configuration integrates the tmux clipboard:<pre>let g:clipboard = {
      \   'name': 'myClipboard',
      \   'copy': {
      \      '+': ['tmux', 'load-buffer', '-'],
      \      '*': ['tmux', 'load-buffer', '-'],
      \    },
      \   'paste': {
      \      '+': ['tmux', 'save-buffer', '-'],
      \      '*': ['tmux', 'save-buffer', '-'],
      \   },
      \   'cache_enabled': 1,
      \ }</pre>
If "cache_enabled" is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> then when a selection is copied Nvim will cache
the selection until the copy command process dies. When pasting, if the copy
process has not died the cached selection is applied.

</div>
<div class="help-para">
g:clipboard can also use functions (see <a href="/neovim-docs-web/en/eval#lambda">lambda</a>) instead of strings.
For example this configuration uses the g:foo variable as a fake clipboard:<pre>let g:clipboard = {
      \   'name': 'myClipboard',
      \   'copy': {
      \      '+': {lines, regtype -&gt; extend(g:, {'foo': [lines, regtype]}) },
      \      '*': {lines, regtype -&gt; extend(g:, {'foo': [lines, regtype]}) },
      \    },
      \   'paste': {
      \      '+': {-&gt; get(g:, 'foo', [])},
      \      '*': {-&gt; get(g:, 'foo', [])},
      \   },
      \ }</pre>
The "copy" function stores a list of lines and the register type. The "paste"
function returns the clipboard as a <code>[lines, regtype]</code> list, where <code>lines</code> is
a list of lines and <code>regtype</code> is a register type conforming to <a href="/neovim-docs-web/en/builtin#setreg()">setreg()</a>.

</div>
<div class="help-para">
							      <a name="clipboard-wsl"></a><code class="help-tag-right">clipboard-wsl</code>
For Windows WSL, try this g:clipboard definition:
<pre>let g:clipboard = {
            \   'name': 'WslClipboard',
            \   'copy': {
            \      '+': 'clip.exe',
            \      '*': 'clip.exe',
            \    },
            \   'paste': {
            \      '+': 'powershell.exe -c [Console]::Out.Write($(Get-Clipboard -Raw).tostring().replace("`r", ""))',
            \      '*': 'powershell.exe -c [Console]::Out.Write($(Get-Clipboard -Raw).tostring().replace("`r", ""))',
            \   },
            \   'cache_enabled': 0,
            \ }</pre>
<h2 class="help-heading">Paste<span class="help-heading-tags"> 							<a name="provider-paste"></a><span class="help-tag">provider-paste</span> <a name="paste"></a><span class="help-tag">paste</span></span></h2>


</div>
<div class="help-para">
"Paste" is a separate concept from <a href="/neovim-docs-web/en/provider#clipboard">clipboard</a>: paste means "dump a bunch of
text to the editor", whereas clipboard provides features like <a href="/neovim-docs-web/en/provider#quote%2B">quote+</a> to get
and set the OS clipboard directly.  For example, middle-click or <code>CTRL-SHIFT-v</code>
(macOS: CMD-v) in your terminal is "paste", not "clipboard": the terminal
application (Nvim) just gets a stream of text, it does not interact with the
clipboard directly.

</div>
<div class="help-para">
							<a name="bracketed-paste-mode"></a><code class="help-tag-right">bracketed-paste-mode</code>
Pasting in the <a href="/neovim-docs-web/en/term#TUI">TUI</a> depends on the "bracketed paste" terminal capability,
which allows terminal applications to distinguish between user input and
pasted text.  <a href="https://cirw.in/blog/bracketed-paste">https://cirw.in/blog/bracketed-paste</a>
This works automatically if your terminal supports it.

</div>
<div class="help-para">
							<a name="ui-paste"></a><code class="help-tag-right">ui-paste</code>
GUIs can paste by calling <a href="/neovim-docs-web/en/api#nvim_paste()">nvim_paste()</a>.

</div>
<div class="help-para">
<div class="help-column_heading">PASTE BEHAVIOR</div>

</div>
<div class="help-para">
Paste inserts text after the cursor.  Lines break at <code>&lt;NL&gt;</code>, <code>&lt;CR&gt;</code>, and <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code>.
When pasting a huge amount of text, screen-updates are throttled and the
message area shows a "..." pulse.

</div>
<div class="help-para">
In cmdline-mode only the first line is pasted, to avoid accidentally executing
many commands.  Use the <a href="/neovim-docs-web/en/cmdline#cmdline-window">cmdline-window</a> if you really want to paste multiple
lines to the cmdline.

</div>
<div class="help-para">
You can implement a custom paste handler by redefining <a href="/neovim-docs-web/en/lua#vim.paste()">vim.paste()</a>.
Example:<pre>vim.paste = (function(lines, phase)
  vim.api.nvim_put(lines, 'c', true, true)
end)</pre>
<h2 class="help-heading">X11 selection mechanism<span class="help-heading-tags">			      <a name="clipboard-x11"></a><span class="help-tag">clipboard-x11</span> <a name="x11-selection"></a><span class="help-tag">x11-selection</span></span></h2>


</div>
<div class="help-para">
X11 clipboard providers store text in "selections". Selections are owned by an
application, so when the application gets closed, the selection text is lost.
The contents of selections are held by the originating application (e.g., upon
a copy), and only passed to another application when that other application
requests them (e.g., upon a paste).

</div>
<div class="help-para">
				<a name="primary-selection"></a><code class="help-tag-right">primary-selection</code> <a name="quotestar"></a><code class="help-tag">quotestar</code> <a name="quoteplus"></a><code class="help-tag">quoteplus</code> <a name="quote%2B"></a><code class="help-tag">quote+</code>

</div>
<div class="help-para">
There are three documented X11 selections: PRIMARY, SECONDARY, and CLIPBOARD.
CLIPBOARD is typically used in X11 applications for copy/paste operations
(CTRL-c/CTRL-v), while PRIMARY is used for the last selected text, which is
generally inserted with the middle mouse button.

</div>
<div class="help-para">
Nvim's X11 clipboard providers only use the PRIMARY and CLIPBOARD selections,
for the "*" and "+" registers, respectively.

</div>

  
  