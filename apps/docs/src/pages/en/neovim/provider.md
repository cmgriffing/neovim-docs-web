---
title: Provider
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Provider Txt</a> 

NVIM REFERENCE MANUAL    by Thiago de Arruda


### <a id="provider" class="section-title" href="#provider">Providers</a>

Nvim delegates some features to dynamic "providers". This document describes
the providers and how to install them.
### <a id="E319" class="section-title" href="#E319">Note:</a>
Use of a feature requiring a missing provider is an error:

    E319: No "foo" provider found. Run ":checkhealth provider"

Run the |:checkhealth| command, and review the sections below.

				      Type [gO](undefined#gO) to see the table of contents.


## <a id="provider-python" class="section-title" href="#provider-python">Python Integration</a> 

Nvim supports Python [remote-plugin](undefined#remote-plugin)s and the Vim legacy [python3](/neovim-docs-web/en/neovim/if_pyth#python3) and
[pythonx](undefined#pythonx) interfaces (which are implemented as remote-plugins).

Note: Only the Vim 7.3 legacy interface is supported, not later features such
as [python-bindeval](undefined#python-bindeval) (Vim 7.4); use the Nvim API instead. Python 2 is not
supported.


PYTHON QUICKSTART ~

To use Python plugins, you need the "pynvim" module. Run |:checkhealth| to see
if you already have it (some package managers install the module with Nvim
itself).

For Python 3 plugins:
1. Make sure Python 3.4+ is available in your $PATH.
2. Install the module (try "python" if "python3" is missing):
```   python3 -m pip install --user --upgrade pynvim

The pip `--upgrade` flag ensures that you get the latest version even if
a previous version was already installed.

See also [python-virtualenv](undefined#python-virtualenv).

Note: The old "neovim" module was renamed to "pynvim".
https://github.com/neovim/neovim/wiki/Following-HEAD#20181118
If you run into problems, uninstall _both_ then install "pynvim" again:
  python -m pip uninstall neovim pynvim
  python -m pip install --user --upgrade pynvim


PYTHON PROVIDER CONFIGURATION ~
### <a id="g:python3_host_prog" class="section-title" href="#g:python3_host_prog">Note:</a>
Command to start Python 3 (executable, not directory). Setting this makes
startup faster. Useful for working with virtualenvs. Must be set before any
check for has("python3").
    let g:python3_host_prog = '/path/to/python3'
```

### <a id="g:loaded_python3_provider" class="section-title" href="#g:loaded_python3_provider">Note:</a>
To disable Python 3 support:
    let g:loaded_python3_provider = 0


PYTHON VIRTUALENVS ~
### <a id="python-virtualenv" class="section-title" href="#python-virtualenv">Note:</a>
If you plan to use per-project virtualenvs often, you should assign one
virtualenv for Neovim and hard-code the interpreter path via
|g:python3_host_prog| so that the "pynvim" package is not required
for each virtualenv.

Example using pyenv:
    pyenv install 3.4.4
    pyenv virtualenv 3.4.4 py3nvim
    pyenv activate py3nvim
    python3 -m pip install pynvim
    pyenv which python  # Note the path
The last command reports the interpreter path, add it to your init.vim:
    let g:python3_host_prog = '/path/to/py3nvim/bin/python'

See also: https://github.com/zchee/deoplete-jedi/wiki/Setting-up-Python-for-Neovim


## <a id="provider-ruby" class="section-title" href="#provider-ruby">Ruby Integration</a> 

Nvim supports Ruby [remote-plugin](undefined#remote-plugin)s and the Vim legacy [ruby-vim](/neovim-docs-web/en/vim/if_ruby#ruby-vim) interface
(which is itself implemented as a Nvim remote-plugin).


RUBY QUICKSTART ~

To use Ruby plugins with Nvim, install the latest "neovim" RubyGem:
```    gem install neovim

Run |:checkhealth| to see if your system is up-to-date.


RUBY PROVIDER CONFIGURATION ~
### <a id="g:loaded_ruby_provider" class="section-title" href="#g:loaded_ruby_provider">Note:</a>
To disable Ruby support:
    let g:loaded_ruby_provider = 0
```

### <a id="g:ruby_host_prog" class="section-title" href="#g:ruby_host_prog">Note:</a>
Command to start the Ruby host. By default this is "neovim-ruby-host". With
project-local Ruby versions (via tools like RVM or rbenv) setting this can
avoid the need to install the "neovim" gem in every project.

To use an absolute path (e.g. to an rbenv installation):
    let g:ruby_host_prog = '~/.rbenv/versions/2.4.1/bin/neovim-ruby-host'

To use the RVM "system" Ruby installation:
    let g:ruby_host_prog = 'rvm system do neovim-ruby-host'


## <a id="provider-perl" class="section-title" href="#provider-perl">Perl Integration</a> 

Nvim supports Perl [remote-plugin](undefined#remote-plugin)s on Unix platforms. Support for polling STDIN
on MS-Windows is currently lacking from all known event loop implementations.
The Vim legacy [perl-vim](/neovim-docs-web/en/vim/if_perl#perl-vim) interface is also supported (which is itself
implemented as a Nvim remote-plugin).
https://github.com/jacquesg/p5-Neovim-Ext

Note: Only perl versions from 5.22 onward are supported.

PERL QUICKSTART~

To use perl remote-plugins with Nvim, install the "Neovim::Ext" cpan package:
```    cpanm -n Neovim::Ext

Run |:checkhealth| to see if your system is up-to-date.


PERL PROVIDER CONFIGURATION~
### <a id="g:loaded_perl_provider" class="section-title" href="#g:loaded_perl_provider">Note:</a>
To disable Perl support:
    :let g:loaded_perl_provider = 0
```

### <a id="g:perl_host_prog" class="section-title" href="#g:perl_host_prog">Note:</a>
Command to start the Perl executable. Must be set before any
check for has("perl").
```    let g:perl_host_prog = '/path/to/perl'
```


## <a id="provider-nodejs" class="section-title" href="#provider-nodejs">Node.Js Integration</a> 

Nvim supports Node.js [remote-plugin](undefined#remote-plugin)s.
https://github.com/neovim/node-client/


NODEJS QUICKSTART~

To use javascript remote-plugins with Nvim, install the "neovim" npm package:
```    npm install -g neovim

Run |:checkhealth| to see if your system is up-to-date.


NODEJS PROVIDER CONFIGURATION~
### <a id="g:loaded_node_provider" class="section-title" href="#g:loaded_node_provider">Note:</a>
To disable Node.js support:
    :let g:loaded_node_provider = 0
```

### <a id="g:node_host_prog" class="section-title" href="#g:node_host_prog">Note:</a>
Command to start the Node.js host. Setting this makes startup faster.

By default, Nvim searches for "neovim-node-host" using "npm root -g", which
can be slow. To avoid this, set g:node_host_prog to the host path:
```    let g:node_host_prog = '/usr/local/bin/neovim-node-host'
```


## <a id="provider-clipboard clipboard" class="section-title" href="#provider-clipboard clipboard">Clipboard Integration</a> 

Nvim has no direct connection to the system clipboard. Instead it depends on
a [provider](undefined#provider) which transparently uses shell commands to communicate with the
system clipboard or any other clipboard "backend".

To ALWAYS use the clipboard for ALL operations (instead of interacting with
the '+' and/or '*' registers explicitly):
    set clipboard+=unnamedplus

See 'clipboard' for details and options.

### <a id="clipboard-tool" class="section-title" href="#clipboard-tool">Note:</a>
The presence of a working clipboard tool implicitly enables the '+' and '*'
registers. Nvim looks for these clipboard tools, in order of priority:

  - |g:clipboard|
  - pbcopy, pbpaste (macOS)
  - wl-copy, wl-paste (if $WAYLAND_DISPLAY is set)
  - xclip (if $DISPLAY is set)
  - xsel (if $DISPLAY is set)
  - lemonade (for SSH) https://github.com/pocke/lemonade
  - doitclient (for SSH) https://www.chiark.greenend.org.uk/~sgtatham/doit/
  - win32yank (Windows)
  - termux (via termux-clipboard-set, termux-clipboard-set)
  - tmux (if $TMUX is set)

### <a id="g:clipboard" class="section-title" href="#g:clipboard">Note:</a>
To configure a custom clipboard tool, set g:clipboard to a dictionary.
For example this configuration integrates the tmux clipboard:

    let g:clipboard = {
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
          \ }

If "cache_enabled" is [TRUE](undefined#TRUE) then when a selection is copied Nvim will cache
the selection until the copy command process dies. When pasting, if the copy
process has not died the cached selection is applied.

g:clipboard can also use functions (see [lambda](undefined#lambda)) instead of strings.
For example this configuration uses the g:foo variable as a fake clipboard:

    let g:clipboard = {
          \   'name': 'myClipboard',
          \   'copy': {
          \      '+': {lines, regtype -> extend(g:, {'foo': [lines, regtype]}) },
          \      '*': {lines, regtype -> extend(g:, {'foo': [lines, regtype]}) },
          \    },
          \   'paste': {
          \      '+': {-> get(g:, 'foo', [])},
          \      '*': {-> get(g:, 'foo', [])},
          \   },
          \ }

The "copy" function stores a list of lines and the register type. The "paste"
function returns the clipboard as a `[lines, regtype]` list, where `lines` is
a list of lines and `regtype` is a register type conforming to |setreg()|.

### <a id="clipboard-wsl" class="section-title" href="#clipboard-wsl">Note:</a>
For Windows WSL, try this g:clipboard definition:
    let g:clipboard = {
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
                \ }


## <a id="provider-paste paste" class="section-title" href="#provider-paste paste">Paste</a> 

"Paste" is a separate concept from [clipboard](undefined#clipboard): paste means "dump a bunch of
text to the editor", whereas clipboard provides features like |quote+| to get
and set the OS clipboard directly.  For example, middle-click or CTRL-SHIFT-v
(macOS: CMD-v) in your terminal is "paste", not "clipboard": the terminal
application (Nvim) just gets a stream of text, it does not interact with the
clipboard directly.

### <a id="bracketed-paste-mode" class="section-title" href="#bracketed-paste-mode">Note:</a>
Pasting in the [TUI](undefined#TUI) depends on the "bracketed paste" terminal capability,
which allows terminal applications to distinguish between user input and
pasted text.  https://cirw.in/blog/bracketed-paste
This works automatically if your terminal supports it.

### <a id="ui-paste" class="section-title" href="#ui-paste">Note:</a>
GUIs can paste by calling |nvim_paste()|.

PASTE BEHAVIOR ~

Paste inserts text after the cursor.  Lines break at <NL>, <CR>, and <CR><NL>.
When pasting a huge amount of text, screen-updates are throttled and the
message area shows a "..." pulse.

In cmdline-mode only the first line is pasted, to avoid accidentally executing
many commands.  Use the [cmdline-window](undefined#cmdline-window) if you really want to paste multiple
lines to the cmdline.

You can implement a custom paste handler by redefining |vim.paste()|.
Example:

  vim.paste = (function(lines, phase)
    vim.api.nvim_put(lines, 'c', true, true)
  end)


## <a id="clipboard-x11 x11-selection" class="section-title" href="#clipboard-x11 x11-selection">X11 Selection Mechanism</a> 

X11 clipboard providers store text in "selections". Selections are owned by an
application, so when the application gets closed, the selection text is lost.
The contents of selections are held by the originating application (e.g., upon
a copy), and only passed to another application when that other application
requests them (e.g., upon a paste).

### <a id="primary-selection quotestar quoteplus quote+" class="section-title" href="#primary-selection quotestar quoteplus quote+">Note:</a>

There are three documented X11 selections: PRIMARY, SECONDARY, and CLIPBOARD.
CLIPBOARD is typically used in X11 applications for copy/paste operations
(CTRL-c/CTRL-v), while PRIMARY is used for the last selected text, which is
generally inserted with the middle mouse button.

Nvim's X11 clipboard providers only use the PRIMARY and CLIPBOARD selections,
for the "*" and "+" registers, respectively.


## <a id="" class="section-title" href="#">Vim Tw 78 Ts 8 Noet Ft Help Norl</a> 



