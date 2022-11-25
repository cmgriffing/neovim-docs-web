---
title:  Vim_diff
layout: ../../layouts/MainLayout.astro
---

  <a name="vim_diff.txt"></a><a name="vim-differences"></a><h1> Vim_diff</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/vim_diff.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Differences between Nvim and Vim</div>
<div class="old-help-para">Nvim differs from Vim in many ways, although editor and Vimscript (not
Vim9script) features are mostly identical.  This document is a complete and
centralized reference of the differences.</div>
<div class="old-help-para"><h2 class="help-heading">1. Configuration<span class="help-heading-tags">					    <a name="nvim-config"></a><span class="help-tag">nvim-config</span></span></h2></div>
<div class="old-help-para"><div class="help-li" style=""> Use <code>$XDG_CONFIG_HOME/nvim/init.vim</code> instead of <code>.vimrc</code> for your <a href="starting.html#config">config</a>.
</div><div class="help-li" style=""> Use <code>$XDG_CONFIG_HOME/nvim</code> instead of <code>.vim</code> to store configuration files.
</div><div class="help-li" style=""> Use <code>$XDG_STATE_HOME/nvim/shada/main.shada</code> instead of <code>.viminfo</code> for persistent
  session information.  <a href="starting.html#shada">shada</a>
</div></div>
<div class="old-help-para"><h2 class="help-heading">2. Defaults<span class="help-heading-tags">					            <a name="nvim-defaults"></a><span class="help-tag">nvim-defaults</span></span></h2></div>
<div class="old-help-para"><div class="help-li" style=""> Filetype detection is enabled by default. This can be disabled by adding
  ":filetype off" to <a href="starting.html#init.vim">init.vim</a>.
</div><div class="help-li" style=""> Syntax highlighting is enabled by default. This can be disabled by adding
  ":syntax off" to <a href="starting.html#init.vim">init.vim</a>.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> <a href="options.html#'autoindent'">'autoindent'</a> is enabled
</div><div class="help-li" style=""> <a href="options.html#'autoread'">'autoread'</a> is enabled
</div><div class="help-li" style=""> <a href="options.html#'background'">'background'</a> defaults to "dark" (unless set automatically by the terminal/UI)
</div><div class="help-li" style=""> <a href="options.html#'backspace'">'backspace'</a> defaults to "indent,eol,start"
</div><div class="help-li" style=""> <a href="options.html#'backupdir'">'backupdir'</a> defaults to .,~/.local/state/nvim/backup// (<a href="starting.html#xdg">xdg</a>), auto-created
</div><div class="help-li" style=""> <a href="options.html#'belloff'">'belloff'</a> defaults to "all"
</div><div class="help-li" style=""> <a href="vim_diff.html#'compatible'">'compatible'</a> is always disabled
</div><div class="help-li" style=""> <a href="options.html#'complete'">'complete'</a> excludes "i"
</div><div class="help-li" style=""> <a href="options.html#'directory'">'directory'</a> defaults to ~/.local/state/nvim/swap// (<a href="starting.html#xdg">xdg</a>), auto-created
</div><div class="help-li" style=""> <a href="options.html#'display'">'display'</a> defaults to "lastline"
</div><div class="help-li" style=""> <a href="options.html#'encoding'">'encoding'</a> is UTF-8 (cf. <a href="options.html#'fileencoding'">'fileencoding'</a> for file-content encoding)
</div><div class="help-li" style=""> <a href="options.html#'fillchars'">'fillchars'</a> defaults (in effect) to "vert:│,fold:·,sep:│"
</div><div class="help-li" style=""> <a href="options.html#'formatoptions'">'formatoptions'</a> defaults to "tcqj"
</div><div class="help-li" style=""> <a href="options.html#'fsync'">'fsync'</a> is disabled
</div><div class="help-li" style=""> <a href="options.html#'hidden'">'hidden'</a> is enabled
</div><div class="help-li" style=""> <a href="options.html#'history'">'history'</a> defaults to 10000 (the maximum)
</div><div class="help-li" style=""> <a href="options.html#'hlsearch'">'hlsearch'</a> is enabled
</div><div class="help-li" style=""> <a href="options.html#'incsearch'">'incsearch'</a> is enabled
</div><div class="help-li" style=""> <a href="options.html#'joinspaces'">'joinspaces'</a> is disabled
</div><div class="help-li" style=""> <a href="deprecated.html#'langnoremap'">'langnoremap'</a> is enabled
</div><div class="help-li" style=""> <a href="options.html#'langremap'">'langremap'</a> is disabled
</div><div class="help-li" style=""> <a href="options.html#'laststatus'">'laststatus'</a> defaults to 2 (statusline is always shown)
</div><div class="help-li" style=""> <a href="options.html#'listchars'">'listchars'</a> defaults to "tab:&gt; ,trail:-,nbsp:+"
</div><div class="help-li" style=""> <a href="options.html#'mouse'">'mouse'</a> defaults to "nvi"
</div><div class="help-li" style=""> <a href="options.html#'mousemodel'">'mousemodel'</a> defaults to "popup_setpos"
</div><div class="help-li" style=""> <a href="options.html#'nrformats'">'nrformats'</a> defaults to "bin,hex"
</div><div class="help-li" style=""> <a href="options.html#'ruler'">'ruler'</a> is enabled
</div><div class="help-li" style=""> <a href="options.html#'sessionoptions'">'sessionoptions'</a> includes "unix,slash", excludes "options"
</div><div class="help-li" style=""> <a href="options.html#'shortmess'">'shortmess'</a> includes "F", excludes "S"
</div><div class="help-li" style=""> <a href="options.html#'showcmd'">'showcmd'</a> is enabled
</div><div class="help-li" style=""> <a href="options.html#'sidescroll'">'sidescroll'</a> defaults to 1
</div><div class="help-li" style=""> <a href="options.html#'smarttab'">'smarttab'</a> is enabled
</div><div class="help-li" style=""> <a href="options.html#'startofline'">'startofline'</a> is disabled
</div><div class="help-li" style=""> <a href="options.html#'switchbuf'">'switchbuf'</a> defaults to "uselast"
</div><div class="help-li" style=""> <a href="options.html#'tabpagemax'">'tabpagemax'</a> defaults to 50
</div><div class="help-li" style=""> <a href="options.html#'tags'">'tags'</a> defaults to "./tags;,tags"
</div><div class="help-li" style=""> <a href="options.html#'ttimeoutlen'">'ttimeoutlen'</a> defaults to 50
</div><div class="help-li" style=""> <a href="vim_diff.html#'ttyfast'">'ttyfast'</a> is always set
</div><div class="help-li" style=""> <a href="options.html#'undodir'">'undodir'</a> defaults to ~/.local/state/nvim/undo// (<a href="starting.html#xdg">xdg</a>), auto-created
</div><div class="help-li" style=""> <a href="options.html#'viewoptions'">'viewoptions'</a> includes "unix,slash", excludes "options"
</div><div class="help-li" style=""> <a href="deprecated.html#'viminfo'">'viminfo'</a> includes "!"
</div><div class="help-li" style=""> <a href="options.html#'wildmenu'">'wildmenu'</a> is enabled
</div><div class="help-li" style=""> <a href="options.html#'wildoptions'">'wildoptions'</a> defaults to "pum,tagfile"
</div></div>
<div class="old-help-para"><div class="help-li" style=""> <a href="filetype.html#man.lua">man.lua</a> plugin is enabled, so <a href="filetype.html#%3AMan">:Man</a> is available by default.
</div><div class="help-li" style="">matchit plugin is enabled. To disable it in your config:
<pre>:let loaded_matchit = 1</pre></div><div class="help-li" style=""> <a href="syntax.html#g%3Avimsyn_embed">g:vimsyn_embed</a> defaults to "l" to enable Lua highlighting
</div></div>
<div class="old-help-para"><div class="help-column_heading">Default Mouse</div>						<a name="default-mouse"></a><code class="help-tag-right">default-mouse</code> <a name="disable-mouse"></a><code class="help-tag">disable-mouse</code>
By default the mouse is enabled, and <code>&lt;RightMouse&gt;</code> opens a <a href="gui.html#popup-menu">popup-menu</a> with
standard actions ("Cut", "Copy", "Paste", …). Mouse is NOT enabled in
<a href="intro.html#command-mode">command-mode</a> or the <a href="message.html#more-prompt">more-prompt</a>, so you can temporarily disable it just by
typing ":".</div>
<div class="old-help-para">If you don't like this you can disable the mouse in your <a href="starting.html#config">config</a> using any of
the following:
<div class="help-li" style=""> Disable mouse completely by unsetting the <a href="options.html#'mouse'">'mouse'</a> option:
<pre>set mouse=</pre></div><div class="help-li" style=""> Pressing <code>&lt;RightMouse&gt;</code> extends selection instead of showing popup-menu:
<pre>set mousemodel=extend</pre></div><div class="help-li" style=""> Pressing <code>&lt;A-LeftMouse&gt;</code> releases mouse until the cursor moves:
<pre>nnoremap &lt;A-LeftMouse&gt; &lt;Cmd&gt;
  \ set mouse=&lt;Bar&gt;
  \ echo 'mouse OFF until next cursor-move'&lt;Bar&gt;
  \ autocmd CursorMoved * ++once set mouse&amp;&lt;Bar&gt;
  \ echo 'mouse ON'&lt;CR&gt;</pre></div></div>
<div class="old-help-para"><div class="help-column_heading">Default Mappings</div>							<a name="default-mappings"></a><code class="help-tag-right">default-mappings</code>
Nvim creates the following default mappings at <a href="starting.html#startup">startup</a>. You can disable any
of these in your config by simply removing the mapping, e.g. ":unmap Y".
<pre>nnoremap Y y$
nnoremap &lt;C-L&gt; &lt;Cmd&gt;nohlsearch&lt;Bar&gt;diffupdate&lt;Bar&gt;normal! &lt;C-L&gt;&lt;CR&gt;
inoremap &lt;C-U&gt; &lt;C-G&gt;u&lt;C-U&gt;
inoremap &lt;C-W&gt; &lt;C-G&gt;u&lt;C-W&gt;
xnoremap * y/\V&lt;C-R&gt;"&lt;CR&gt;
xnoremap # y?\V&lt;C-R&gt;"&lt;CR&gt;
nnoremap &amp; :&amp;&amp;&lt;CR&gt;</pre></div>
<div class="old-help-para"><div class="help-column_heading">Default Autocommands</div>							<a name="default-autocmds"></a><code class="help-tag-right">default-autocmds</code>
Default autocommands exist in the following groups. Use ":autocmd! <code>{group}</code>" to
remove them and ":autocmd <code>{group}</code>" to see how they're defined.</div>
<div class="old-help-para">nvim_terminal:
<div class="help-li" style=""> BufReadCmd: Treats "term://" buffers as <a href="nvim_terminal_emulator.html#terminal">terminal</a> buffers. <a href="nvim_terminal_emulator.html#terminal-start">terminal-start</a>
</div></div>
<div class="old-help-para">nvim_cmdwin:
<div class="help-li" style=""> CmdwinEnter: Limits syntax sync to maxlines=1 in the <a href="cmdline.html#cmdwin">cmdwin</a>.
</div></div>
<div class="old-help-para"><h2 class="help-heading">3. New Features<span class="help-heading-tags">						       <a name="nvim-features"></a><span class="help-tag">nvim-features</span></span></h2></div>
<div class="old-help-para"><div class="help-column_heading">MAJOR COMPONENTS</div></div>
<div class="old-help-para">API				<a href="api.html#API">API</a>
Job control			<a href="job_control.html#job-control">job-control</a>
LSP framework			<a href="lsp.html#lsp">lsp</a>
Lua scripting			<a href="lua.html#lua">lua</a>
Parsing engine			<a href="treesitter.html#treesitter">treesitter</a>
Providers
  Clipboard			<a href="provider.html#provider-clipboard">provider-clipboard</a>
  Node.js plugins		<a href="provider.html#provider-nodejs">provider-nodejs</a>
  Python plugins		<a href="provider.html#provider-python">provider-python</a>
  Ruby plugins			<a href="provider.html#provider-ruby">provider-ruby</a>
Remote plugins			<a href="remote_plugin.html#remote-plugin">remote-plugin</a>
Shared data			<a href="starting.html#shada">shada</a>
Terminal emulator		<a href="nvim_terminal_emulator.html#terminal">terminal</a>
Vimscript parser		<a href="api.html#nvim_parse_expression()">nvim_parse_expression()</a>
XDG base directories		<a href="starting.html#xdg">xdg</a></div>
<div class="old-help-para"><div class="help-column_heading">USER EXPERIENCE</div></div>
<div class="old-help-para">Working intuitively and consistently is a major goal of Nvim.</div>
<div class="old-help-para">							<a name="feature-compile"></a><code class="help-tag-right">feature-compile</code>
<div class="help-li" style=""> Nvim always includes ALL features, in contrast to Vim (which ships with
  various combinations of 100+ optional features). Think of it as a leaner
  version of Vim's "HUGE" build. This reduces surface area for bugs, and
  removes a common source of confusion and friction for users.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Nvim avoids features that cannot be provided on all platforms; instead that
  is delegated to external plugins/extensions. E.g. the <code>-X</code> platform-specific
  option is "sometimes" available in Vim (with potential surprises:
  <a href="https://stackoverflow.com/q/14635295">https://stackoverflow.com/q/14635295</a>).
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Vim's internal test functions (test_autochdir(), test_settime(), etc.) are
  not exposed (nor implemented); instead Nvim has a robust API.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Behaviors, options, documentation are removed if they cost users more time
  than they save.
</div></div>
<div class="old-help-para">Usability details have been improved where the benefit outweighs any
backwards-compatibility cost. Some examples:</div>
<div class="old-help-para"><div class="help-li" style=""> Directories for <a href="options.html#'directory'">'directory'</a> and <a href="options.html#'undodir'">'undodir'</a> are auto-created.
</div><div class="help-li" style=""> Terminal features such as <a href="options.html#'guicursor'">'guicursor'</a> are enabled where possible.
</div></div>
<div class="old-help-para">Some features are built in that otherwise required external plugins:</div>
<div class="old-help-para"><div class="help-li" style=""> Highlighting the yanked region, see <a href="lua.html#lua-highlight">lua-highlight</a>.
</div></div>
<div class="old-help-para"><div class="help-column_heading">ARCHITECTURE</div></div>
<div class="old-help-para">External plugins run in separate processes. <a href="remote_plugin.html#remote-plugin">remote-plugin</a> This improves
stability and allows those plugins to work without blocking the editor. Even
"legacy" Python and Ruby plugins which use the old Vim interfaces (<a href="if_pyth.html#if_pyth">if_pyth</a>,
<a href="if_ruby.html#if_ruby">if_ruby</a>) run out-of-process.</div>
<div class="old-help-para">Platform and I/O facilities are built upon libuv. Nvim benefits from libuv
features and bug fixes, and other projects benefit from improvements to libuv
by Nvim developers.</div>
<div class="old-help-para"><div class="help-column_heading">FEATURES</div></div>
<div class="old-help-para">Command-line highlighting:
  The expression prompt (<a href="change.html#%40%3D">@=</a>, <a href="cmdline.html#c_CTRL-R_%3D">c_CTRL-R_=</a>, <a href="insert.html#i_CTRL-R_%3D">i_CTRL-R_=</a>) is highlighted
  using a built-in Vimscript expression parser. <a href="eval.html#expr-highlight">expr-highlight</a>
					<a name="E5408"></a><code class="help-tag-right">E5408</code> <a name="E5409"></a><code class="help-tag">E5409</code>
  <a href="builtin.html#input()">input()</a>, <a href="deprecated.html#inputdialog()">inputdialog()</a> support custom highlighting. <a href="builtin.html#input()-highlight">input()-highlight</a>
					<a name="g%3ANvim_color_cmdline"></a><code class="help-tag-right">g:Nvim_color_cmdline</code>
  (Experimental) Command-line (<a href="cmdline.html#%3A">:</a>) is colored by callback defined in
  <code>g:Nvim_color_cmdline</code> (this callback is for testing only, and will be
  removed in the future).</div>
<div class="old-help-para">Commands:
  <a href="pi_health.html#%3Acheckhealth">:checkhealth</a>
  <a href="windows.html#%3Adrop">:drop</a> is always available
  <a href="filetype.html#%3AMan">:Man</a> is available by default, with many improvements such as completion
  <a href="pattern.html#%3Amatch">:match</a> can be invoked before highlight group is defined
  <a href="repeat.html#%3Asource">:source</a> works with Lua
  User commands can support <a href="map.html#%3Acommand-preview">:command-preview</a> to show results as you type</div>
<div class="old-help-para">Events:
  <a href="autocmd.html#RecordingEnter">RecordingEnter</a>
  <a href="autocmd.html#RecordingLeave">RecordingLeave</a>
  <a href="autocmd.html#SearchWrapped">SearchWrapped</a>
  <a href="autocmd.html#Signal">Signal</a>
  <a href="autocmd.html#TabNewEntered">TabNewEntered</a>
  <a href="autocmd.html#TermClose">TermClose</a>
  <a href="autocmd.html#TermOpen">TermOpen</a>
  <a href="autocmd.html#UIEnter">UIEnter</a>
  <a href="autocmd.html#UILeave">UILeave</a></div>
<div class="old-help-para">Functions:
  <a href="builtin.html#dictwatcheradd()">dictwatcheradd()</a> notifies a callback whenever a <a href="eval.html#Dict">Dict</a> is modified
  <a href="builtin.html#dictwatcherdel()">dictwatcherdel()</a>
  <a href="builtin.html#menu_get()">menu_get()</a>
  <a href="builtin.html#msgpackdump()">msgpackdump()</a>, <a href="builtin.html#msgpackparse()">msgpackparse()</a> provide msgpack de/serialization
  <a href="builtin.html#stdpath()">stdpath()</a>
  <a href="builtin.html#system()">system()</a>, <a href="builtin.html#systemlist()">systemlist()</a> can run <code>{cmd}</code> directly (without <a href="options.html#'shell'">'shell'</a>)
  <a href="builtin.html#matchadd()">matchadd()</a> can be called before highlight group is defined</div>
<div class="old-help-para">Highlight groups:
  <a href="syntax.html#highlight-blend">highlight-blend</a> controls blend level for a highlight group
  <a href="eval.html#expr-highlight">expr-highlight</a> highlight groups (prefixed with "Nvim")
  <a href="syntax.html#hl-NormalFloat">hl-NormalFloat</a> highlights floating window
  <a href="syntax.html#hl-NormalNC">hl-NormalNC</a> highlights non-current windows
  <a href="syntax.html#hl-MsgArea">hl-MsgArea</a> highlights messages/cmdline area
  <a href="syntax.html#hl-MsgSeparator">hl-MsgSeparator</a> highlights separator for scrolled messages
  <a href="syntax.html#hl-Substitute">hl-Substitute</a>
  <a href="syntax.html#hl-TermCursor">hl-TermCursor</a>
  <a href="syntax.html#hl-TermCursorNC">hl-TermCursorNC</a>
  <a href="syntax.html#hl-WinSeparator">hl-WinSeparator</a> highlights window separators
  <a href="syntax.html#hl-Whitespace">hl-Whitespace</a> highlights <a href="options.html#'listchars'">'listchars'</a> whitespace</div>
<div class="old-help-para">Input/Mappings:
  ALT (<a href="intro.html#META">META</a>) chords always work (even in the <a href="term.html#TUI">TUI</a>). Map |&lt;M-| with any key:
  <code>&lt;M-1&gt;</code>, <code>&lt;M-BS&gt;</code>, <code>&lt;M-Del&gt;</code>, <code>&lt;M-Ins&gt;</code>, <code>&lt;M-/&gt;</code>, <code>&lt;M-\&gt;</code>, <code>&lt;M-Space&gt;</code>, <code>&lt;M-Enter&gt;</code>, etc.
  Case-sensitive: <code>&lt;M-a&gt;</code> and <code>&lt;M-A&gt;</code> are two different keycodes.</div>
<div class="old-help-para">  ALT may behave like <code>&lt;Esc&gt;</code> if not mapped. <a href="insert.html#i_ALT">i_ALT</a> <a href="visual.html#v_ALT">v_ALT</a> <a href="cmdline.html#c_ALT">c_ALT</a></div>
<div class="old-help-para">Normal commands:
  <a href="various.html#gO">gO</a> shows a filetype-defined "outline" of the current buffer.</div>
<div class="old-help-para">Options:
  <a href="options.html#'cpoptions'">'cpoptions'</a>   flags: <a href="options.html#cpo-_">cpo-_</a>
  <a href="options.html#'guicursor'">'guicursor'</a>   works in the terminal
  <a href="options.html#'fillchars'">'fillchars'</a>   flags: "msgsep", "horiz", "horizup",
                "horizdown", "vertleft", "vertright", "verthoriz"
  <a href="options.html#'foldcolumn'">'foldcolumn'</a>  supports up to 9 dynamic/fixed columns
  <a href="options.html#'inccommand'">'inccommand'</a>  shows interactive results for <a href="change.html#%3Asubstitute">:substitute</a>-like commands
                and <a href="map.html#%3Acommand-preview">:command-preview</a> commands
  <a href="options.html#'laststatus'">'laststatus'</a>  global statusline support
  <a href="options.html#'mousescroll'">'mousescroll'</a> amount to scroll by when scrolling with a mouse
  <a href="options.html#'pumblend'">'pumblend'</a>    pseudo-transparent popupmenu
  <a href="options.html#'scrollback'">'scrollback'</a>
  <a href="options.html#'signcolumn'">'signcolumn'</a>  supports up to 9 dynamic/fixed columns
  <a href="options.html#'statusline'">'statusline'</a>  supports unlimited alignment sections
  <a href="options.html#'tabline'">'tabline'</a>     %@Func@foo%X can call any function on mouse-click
  <a href="options.html#'winblend'">'winblend'</a>    pseudo-transparency in floating windows <a href="api.html#api-floatwin">api-floatwin</a>
  <a href="options.html#'winhighlight'">'winhighlight'</a> window-local highlights
  <a href="options.html#'diffopt'">'diffopt'</a>     has the option <code>linematch</code>.</div>
<div class="old-help-para">Signs:
  Signs are removed if the associated line is deleted.</div>
<div class="old-help-para">Variables:
  <a href="eval.html#v%3Aprogpath">v:progpath</a> is always absolute ("full")
  <a href="eval.html#v%3Awindowid">v:windowid</a> is always available (for use by external UIs)</div>
<div class="old-help-para"><h2 class="help-heading">4. Changed features<span class="help-heading-tags">					 <a name="nvim-features-changed"></a><span class="help-tag">nvim-features-changed</span></span></h2></div>
<div class="old-help-para">Nvim always builds with all features, in contrast to Vim which may have
certain features removed/added at compile-time. <a href="vim_diff.html#feature-compile">feature-compile</a></div>
<div class="old-help-para">Some Vim features were changed in Nvim, and vice versa.</div>
<div class="old-help-para">If a Python interpreter is available on your <code>$PATH</code>, <a href="if_pyth.html#%3Apython">:python</a> and <a href="if_pyth.html#%3Apython3">:python3</a>
are always available and may be used simultaneously. See <a href="provider.html#provider-python">provider-python</a>.</div>
<div class="old-help-para"><a href="various.html#%3Aredir">:redir</a> nested in <a href="builtin.html#execute()">execute()</a> works.</div>
<div class="old-help-para"><a href="builtin.html#mkdir()">mkdir()</a> behaviour changed:
1. Assuming /tmp/foo does not exist and /tmp can be written to
   mkdir('/tmp/foo/bar', 'p', 0700) will create both /tmp/foo and /tmp/foo/bar
   with 0700 permissions. Vim mkdir will create /tmp/foo with 0755.
2. If you try to create an existing directory with <code>'p'</code> (e.g. mkdir('/',
   'p')) mkdir() will silently exit. In Vim this was an error.
3. mkdir() error messages now include strerror() text when mkdir fails.</div>
<div class="old-help-para"><a href="builtin.html#string()">string()</a> and <a href="eval.html#%3Aecho">:echo</a> behaviour changed:
1. No maximum recursion depth limit is applied to nested container
   structures.
2. <a href="builtin.html#string()">string()</a> fails immediately on nested containers, not when recursion limit
   was exceeded.
2. When <a href="eval.html#%3Aecho">:echo</a> encounters duplicate containers like<pre>let l = []
echo [l, l]</pre></div>
<div class="old-help-para">   it does not use "[...]" (was: "[[], [...]]", now: "[[], []]"). "..." is
   only used for recursive containers.
3. <a href="eval.html#%3Aecho">:echo</a> printing nested containers adds "@level" after "..." designating
   the level at which recursive container was printed: <a href="eval.html#%3Aecho-self-refer">:echo-self-refer</a>.
   Same thing applies to <a href="builtin.html#string()">string()</a> (though it uses construct like
   "{E724@level}"), but this is not reliable because <a href="builtin.html#string()">string()</a> continues to
   error out.
4. Stringifyed infinite and NaN values now use <a href="builtin.html#str2float()">str2float()</a> and can be evaled
   back.
5. (internal) Trying to print or stringify VAR_UNKNOWN in Vim results in
   nothing, E908, in Nvim it is internal error.</div>
<div class="old-help-para"><a href="builtin.html#json_decode()">json_decode()</a> behaviour changed:
1. It may output <a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a>.
2. <a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a> is emitted also in case of duplicate keys, while in
   Vim it errors out.
3. It accepts only valid JSON.  Trailing commas are not accepted.</div>
<div class="old-help-para"><a href="builtin.html#json_encode()">json_encode()</a> behaviour slightly changed: now <a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a> values
are accepted, but <a href="vim_diff.html#v%3Anone">v:none</a> is not.</div>
<div class="old-help-para">Viminfo text files were replaced with binary (messagepack) ShaDa files.
Additional differences:</div>
<div class="old-help-para"><div class="help-li" style=""> <a href="options.html#shada-c">shada-c</a> has no effect.
</div><div class="help-li" style=""> <a href="options.html#shada-s">shada-s</a> now limits size of every item and not just registers.
</div><div class="help-li" style=""> <a href="deprecated.html#'viminfo'">'viminfo'</a> option got renamed to <a href="options.html#'shada'">'shada'</a>. Old option is kept as an alias for
  compatibility reasons.
</div><div class="help-li" style=""> <a href="deprecated.html#%3Awviminfo">:wviminfo</a> was renamed to <a href="starting.html#%3Awshada">:wshada</a>, <a href="deprecated.html#%3Arviminfo">:rviminfo</a> to <a href="starting.html#%3Arshada">:rshada</a>.  Old
  commands are still kept.
</div><div class="help-li" style=""> ShaDa file format was designed with forward and backward compatibility in
  mind. <a href="starting.html#shada-compatibility">shada-compatibility</a>
</div><div class="help-li" style=""> Some errors make ShaDa code keep temporary file in-place for user to decide
  what to do with it.  Vim deletes temporary file in these cases.
  <a href="starting.html#shada-error-handling">shada-error-handling</a>
</div><div class="help-li" style=""> ShaDa file keeps search direction (<a href="eval.html#v%3Asearchforward">v:searchforward</a>), viminfo does not.
</div></div>
<div class="old-help-para"><a href="builtin.html#printf()">printf()</a> returns something meaningful when used with <code>%p</code> argument: in Vim
it used to return useless address of the string (strings are copied to the
newly allocated memory all over the place) and fail on types which cannot be
coerced to strings. See <a href="builtin.html#id()">id()</a> for more details, currently it uses
<code>printf("%p", {expr})</code> internally.</div>
<div class="old-help-para"><a href="cmdline.html#c_CTRL-R">c_CTRL-R</a> pasting a non-special register into <a href="cmdline.html#cmdline">cmdline</a> omits the last <code>&lt;CR&gt;</code>.</div>
<div class="old-help-para"><a href="autocmd.html#CursorMoved">CursorMoved</a> always triggers when moving between windows.</div>
<div class="old-help-para">Lua interface (<a href="lua.html#lua.txt">lua.txt</a>):</div>
<div class="old-help-para"><div class="help-li" style=""> <code>:lua print("a\0b")</code> will print <code>a^@b</code>, like with <code>:echomsg "a\nb"</code> . In Vim
  that prints <code>a</code> and <code>b</code> on separate lines, exactly like
  <code>:lua print("a\nb")</code> .
</div><div class="help-li" style=""> <code>:lua error('TEST')</code> emits the error “E5105: Error while calling lua chunk:
  [string "&lt;VimL compiled string&gt;"]:1: TEST”, whereas Vim emits only “TEST”.
</div><div class="help-li" style=""> Lua has direct access to Nvim <a href="api.html#API">API</a> via <code>vim.api</code>.
</div><div class="help-li" style=""> Lua package.path and package.cpath are automatically updated according to
  <a href="options.html#'runtimepath'">'runtimepath'</a>: <a href="lua.html#lua-require">lua-require</a>.
</div></div>
<div class="old-help-para">Commands:
  <a href="autocmd.html#%3Adoautocmd">:doautocmd</a> does not warn about "No matching autocommands".
  <a href="windows.html#%3Awincmd">:wincmd</a> accepts a count.
  <code>:write!</code> does not show a prompt if the file was updated externally.</div>
<div class="old-help-para">Command line completion:
  The meanings of arrow keys do not change depending on <a href="options.html#'wildoptions'">'wildoptions'</a>.</div>
<div class="old-help-para">Functions:
  <a href="builtin.html#input()">input()</a> and <a href="deprecated.html#inputdialog()">inputdialog()</a> support for each other’s features (return on
  cancel and completion respectively) via dictionary argument (replaces all
  other arguments if used), and "cancelreturn" can have any type if passed in
  a dictionary.
  <a href="builtin.html#input()">input()</a> and <a href="deprecated.html#inputdialog()">inputdialog()</a> support user-defined cmdline highlighting.</div>
<div class="old-help-para">Highlight groups:
  <a href="syntax.html#hl-ColorColumn">hl-ColorColumn</a>, <a href="syntax.html#hl-CursorColumn">hl-CursorColumn</a> are lower priority than most other
  groups
  <a href="syntax.html#hl-CurSearch">hl-CurSearch</a> highlights match under cursor instead of last match found
  using <a href="pattern.html#n">n</a> or <a href="pattern.html#N">N</a>
  <a href="syntax.html#hl-CursorLine">hl-CursorLine</a> is low-priority unless foreground color is set
  <a href="deprecated.html#hl-VertSplit">hl-VertSplit</a> superseded by <a href="syntax.html#hl-WinSeparator">hl-WinSeparator</a>
  Highlight groups names are allowed to contain the characters <code>.</code> and <code>@</code>.
  It is an error to define a highlight group with a name that doesn't match
  the regexp <code>[a-zA-Z0-9_.@]*</code> (see <a href="syntax.html#group-name">group-name</a>).</div>
<div class="old-help-para">Macro/|recording| behavior
  Replay of a macro recorded during :lmap produces the same actions as when it
  was recorded. In Vim if a macro is recorded while using :lmap'ped keys then
  the behaviour during record and replay differs.</div>
<div class="old-help-para">  <a href="options.html#'keymap'">'keymap'</a> is implemented via :lmap instead of :lnoremap so that you can use
  macros and <a href="options.html#'keymap'">'keymap'</a> at the same time. This also means you can use <a href="map.html#%3Aimap">:imap</a> on
  the results of keys from <a href="options.html#'keymap'">'keymap'</a>.</div>
<div class="old-help-para">Mappings:
  Creating a mapping for a simplifiable key (e.g. <code>&lt;C-I&gt;</code>) doesn't replace an
  existing mapping for its simplified form (e.g. <code>&lt;Tab&gt;</code>).</div>
<div class="old-help-para">Motion:
  The <a href="motion.html#jumplist">jumplist</a> avoids useless/phantom jumps.</div>
<div class="old-help-para">Normal commands:
  <a href="repeat.html#Q">Q</a> replays the last recorded macro instead of switching to Ex mode.
  Instead <a href="intro.html#gQ">gQ</a> can be used to enter Ex mode.</div>
<div class="old-help-para">Options:
  <a href="options.html#'ttimeout'">'ttimeout'</a>, <a href="options.html#'ttimeoutlen'">'ttimeoutlen'</a> behavior was simplified
  <a href="options.html#'jumpoptions'">'jumpoptions'</a> "stack" behavior
  <a href="options.html#'jumpoptions'">'jumpoptions'</a> "view" tries to restore the <a href="motion.html#mark-view">mark-view</a> when moving through
  the <a href="motion.html#jumplist">jumplist</a>, <a href="motion.html#changelist">changelist</a>, <a href="editing.html#alternate-file">alternate-file</a> or using <a href="motion.html#mark-motions">mark-motions</a>.
  <a href="options.html#'shortmess'">'shortmess'</a> the "F" flag does not affect output from autocommands
  <a href="options.html#'exrc'">'exrc'</a> searches for ".nvimrc" or ".exrc" files. The user is prompted whether
  to trust the file.</div>
<div class="old-help-para">Shell:
  Shell output (<a href="various.html#%3A%21">:!</a>, <a href="quickfix.html#%3Amake">:make</a>, …) is always routed through the UI, so it
  cannot "mess up" the screen. (You can still use "chansend(v:stderr,…)" if
  you want to mess up the screen :)</div>
<div class="old-help-para">  Nvim throttles (skips) messages from shell commands (<a href="various.html#%3A%21">:!</a>, <a href="quickfix.html#%3Agrep">:grep</a>, <a href="quickfix.html#%3Amake">:make</a>)
  if there is too much output. No data is lost, this only affects display and
  improves performance. <a href="various.html#%3Aterminal">:terminal</a> output is never throttled.</div>
<div class="old-help-para">  <a href="various.html#%3A%21">:!</a> does not support "interactive" commands. Use <a href="various.html#%3Aterminal">:terminal</a> instead.
  (GUI Vim has a similar limitation, see ":help gui-pty" in Vim.)</div>
<div class="old-help-para">  :!start is not special-cased on Windows.</div>
<div class="old-help-para">  <a href="builtin.html#system()">system()</a> does not support writing/reading "backgrounded" commands. <a href="builtin.html#E5677">E5677</a></div>
<div class="old-help-para">Startup:
  <a href="starting.html#-e">-e</a> and <a href="starting.html#-es">-es</a> invoke the same "improved Ex mode" as -E and -Es.
  <a href="starting.html#-E">-E</a> and <a href="starting.html#-Es">-Es</a> read stdin as text (into buffer 1).
  <a href="starting.html#-es">-es</a> and <a href="starting.html#-Es">-Es</a> have improved behavior:
<div class="help-li" style=""> Quits automatically, don't need "-c qa!".
</div><div class="help-li" style=""> Skips swap-file dialog.
  <a href="starting.html#-s">-s</a> reads Normal commands from stdin if the script name is "-".
  Reading text (instead of commands) from stdin <a href="starting.html#--">--</a>:
</div><div class="help-li" style="margin-left: 3rem;"> works by default: "-" file is optional
</div><div class="help-li" style="margin-left: 3rem;"> works in more cases: <a href="starting.html#-Es">-Es</a>, file args
</div></div>
<div class="old-help-para">Syntax highlighting:
  syncolor.vim has been removed. Nvim now sets up default highlighting groups
  automatically for both light and dark backgrounds, regardless of whether or
  not syntax highlighting is enabled. This means that <a href="syntax.html#%3Asyntax-on">:syntax-on</a> and
  <a href="syntax.html#%3Asyntax-enable">:syntax-enable</a> are now identical. Users who previously used an
  after/syntax/syncolor.vim file should transition that file into a
  colorscheme. <a href="syntax.html#%3Acolorscheme">:colorscheme</a></div>
<div class="old-help-para">TUI:
			<a name="%3Aset-termcap"></a><code class="help-tag-right">:set-termcap</code>
  Start Nvim with <a href="options.html#'verbose'">'verbose'</a> level 3 to show terminal capabilities:<pre>nvim -V3</pre></div>
<div class="old-help-para">			<a name="'term'"></a><code class="help-tag-right">'term'</code> <a name="E529"></a><code class="help-tag">E529</code> <a name="E530"></a><code class="help-tag">E530</code> <a name="E531"></a><code class="help-tag">E531</code>
  <a href="vim_diff.html#'term'">'term'</a> reflects the terminal type derived from <a href="term.html#%24TERM">$TERM</a> and other environment
  checks.  For debugging only; not reliable during startup.<pre>:echo &amp;term</pre></div>
<div class="old-help-para">  "builtin_x" means one of the <a href="term.html#builtin-terms">builtin-terms</a> was chosen, because the expected
  terminfo file was not found on the system.</div>
<div class="old-help-para">  Nvim will use 256-colour capability on Linux virtual terminals.  Vim uses
  only 8 colours plus bright foreground on Linux VTs.</div>
<div class="old-help-para">  Vim combines what is in its <a href="term.html#builtin-terms">builtin-terms</a> with what it reads from terminfo,
  and has a <a href="vim_diff.html#'ttybuiltin'">'ttybuiltin'</a> setting to control how that combination works.  Nvim
  uses one or the other, it does not attempt to merge the two.</div>
<div class="old-help-para">UI/Display:
  <a href="visual.html#Visual">Visual</a> selection highlights the character at cursor. <a href="visual.html#visual-use">visual-use</a></div>
<div class="old-help-para">  messages: When showing messages longer than <a href="options.html#'cmdheight'">'cmdheight'</a>, only
  scroll the message lines, not the entire screen. The
  separator line is decorated by <a href="syntax.html#hl-MsgSeparator">hl-MsgSeparator</a> and
  the "msgsep" flag of <a href="options.html#'fillchars'">'fillchars'</a>. <a name="msgsep"></a><code class="help-tag">msgsep</code></div>
<div class="old-help-para">Vimscript compatibility:
  <code>count</code> does not alias to <a href="eval.html#v%3Acount">v:count</a>
  <code>errmsg</code> does not alias to <a href="eval.html#v%3Aerrmsg">v:errmsg</a>
  <code>shell_error</code> does not alias to <a href="eval.html#v%3Ashell_error">v:shell_error</a>
  <code>this_session</code> does not alias to <a href="eval.html#v%3Athis_session">v:this_session</a></div>
<div class="old-help-para">Working directory (Vim implemented some of these later than Nvim):
<div class="help-li" style=""> <a href="autocmd.html#DirChanged">DirChanged</a> and <a href="autocmd.html#DirChangedPre">DirChangedPre</a> can be triggered when switching to another
  window or tab.
</div><div class="help-li" style=""> <a href="builtin.html#getcwd()">getcwd()</a> and <a href="builtin.html#haslocaldir()">haslocaldir()</a> may throw errors if the tab page or window
  cannot be found.  <a name="E5000"></a><code class="help-tag">E5000</code> <a name="E5001"></a><code class="help-tag">E5001</code> <a name="E5002"></a><code class="help-tag">E5002</code>
</div><div class="help-li" style=""> <a href="builtin.html#haslocaldir()">haslocaldir()</a> checks for tab-local directory if and only if -1 is passed as
  window number, and its only possible returns values are 0 and 1.
</div><div class="help-li" style=""> <code>getcwd(-1)</code> is equivalent to <code>getcwd(-1, 0)</code> instead of returning the global
  working directory. Use <code>getcwd(-1, -1)</code> to get the global working directory.
</div></div>
<div class="old-help-para"><h2 class="help-heading">5. Missing legacy features<span class="help-heading-tags">				 <a name="nvim-features-missing"></a><span class="help-tag">nvim-features-missing</span></span></h2></div>
<div class="old-help-para">Some legacy Vim features are not yet implemented:</div>
<div class="old-help-para"><div class="help-li" style=""> <a name="if_lua"></a><code class="help-tag">if_lua</code> : Nvim <a href="lua.html#Lua">Lua</a> API is not compatible with Vim's "if_lua"
</div><div class="help-li" style=""> <a name="if_mzscheme"></a><code class="help-tag">if_mzscheme</code>
</div><div class="help-li" style=""> <a href="if_pyth.html#if_pyth">if_pyth</a>: <a name="python-bindeval"></a><code class="help-tag">python-bindeval</code> <a name="python-Function"></a><code class="help-tag">python-Function</code> are not supported
</div><div class="help-li" style=""> <a name="if_tcl"></a><code class="help-tag">if_tcl</code>
</div></div>
<div class="old-help-para"><a name="%3Agui"></a><code class="help-tag">:gui</code>
<a name="%3Agvim"></a><code class="help-tag">:gvim</code></div>
<div class="old-help-para"><h2 class="help-heading">6. Removed features<span class="help-heading-tags">					 <a name="nvim-features-removed"></a><span class="help-tag">nvim-features-removed</span></span></h2></div>
<div class="old-help-para">These Vim features were intentionally removed from Nvim.</div>
<div class="old-help-para">Aliases:
  ex        (alias for "nvim -e")
  exim      (alias for "nvim -E")
  gex       (GUI)
  gview     (GUI)
  gvim      (GUI)
  gvimdiff  (GUI)
  rgview    (GUI)
  rgvim     (GUI)
  rview
  rvim
  view      (alias for "nvim -R")
  vimdiff   (alias for "nvim -d" <a href="diff.html#diff-mode">diff-mode</a>)</div>
<div class="old-help-para">Commands:
  :fixdel
  :helpfind
  :mode (no longer accepts an argument)
  :open
  :Print
  :promptfind
  :promptrepl
  :scriptversion (always version 1)
  :shell
  :sleep! (does not hide the cursor; same as :sleep)
  :smile
  :tearoff
  :cstag
  :cscope
  :lcscope
  :scscope</div>
<div class="old-help-para">Compile-time features:
  Emacs tags support
  X11 integration (see <a href="provider.html#x11-selection">x11-selection</a>)</div>
<div class="old-help-para">Eval:
  Vim9script
  <a name="cscope_connection()"></a><code class="help-tag">cscope_connection()</code>
  <a name="js_encode()"></a><code class="help-tag">js_encode()</code>
  <a name="js_decode()"></a><code class="help-tag">js_decode()</code>
  <a name="v%3Anone"></a><code class="help-tag">v:none</code> (used by Vim to represent JavaScript "undefined"); use <a href="eval.html#v%3Anull">v:null</a> instead.
  <a name="v%3Asizeofint"></a><code class="help-tag">v:sizeofint</code>
  <a name="v%3Asizeoflong"></a><code class="help-tag">v:sizeoflong</code>
  <a name="v%3Asizeofpointer"></a><code class="help-tag">v:sizeofpointer</code></div>
<div class="old-help-para">Events:
  <a name="SigUSR1"></a><code class="help-tag">SigUSR1</code> Use <a href="autocmd.html#Signal">Signal</a> to detect <code>SIGUSR1</code> signal instead.</div>
<div class="old-help-para">Highlight groups:
  <a name="hl-StatusLineTerm"></a><code class="help-tag">hl-StatusLineTerm</code> <a name="hl-StatusLineTermNC"></a><code class="help-tag">hl-StatusLineTermNC</code> are unnecessary because Nvim
    supports <a href="options.html#'winhighlight'">'winhighlight'</a> window-local highlights.
    For example, to mimic Vim's StatusLineTerm:<pre>hi StatusLineTerm ctermfg=black ctermbg=green
hi StatusLineTermNC ctermfg=green
autocmd TermOpen,WinEnter * if &amp;buftype=='terminal'
  \|setlocal winhighlight=StatusLine:StatusLineTerm,StatusLineNC:StatusLineTermNC
  \|else|setlocal winhighlight=|endif</pre></div>
<div class="old-help-para">Options:
  antialias
  <a name="'balloondelay'"></a><code class="help-tag">'balloondelay'</code> <a name="'bdlay'"></a><code class="help-tag">'bdlay'</code>
  <a name="'ballooneval'"></a><code class="help-tag">'ballooneval'</code> <a name="'beval'"></a><code class="help-tag">'beval'</code> <a name="'noballooneval'"></a><code class="help-tag">'noballooneval'</code> <a name="'nobeval'"></a><code class="help-tag">'nobeval'</code>
  <a name="'balloonexpr'"></a><code class="help-tag">'balloonexpr'</code> <a name="'bexpr'"></a><code class="help-tag">'bexpr'</code>
  bioskey (MS-DOS)
  conskey (MS-DOS)
  <a name="'cp'"></a><code class="help-tag">'cp'</code> <a name="'nocompatible'"></a><code class="help-tag">'nocompatible'</code> <a name="'nocp'"></a><code class="help-tag">'nocp'</code> <a name="'compatible'"></a><code class="help-tag">'compatible'</code> (Nvim is always "nocompatible".)
  <a href="options.html#'cpoptions'">'cpoptions'</a> (gjkHw&lt;*- and all POSIX flags were removed)
  <a name="'cryptmethod'"></a><code class="help-tag">'cryptmethod'</code> <a name="'cm'"></a><code class="help-tag">'cm'</code> <a name="'key'"></a><code class="help-tag">'key'</code> (Vim encryption implementation)
  cscopepathcomp
  cscopeprg
  cscopequickfix
  cscoperelative
  cscopetag
  cscopetagorder
  cscopeverbose
  <a name="'ed'"></a><code class="help-tag">'ed'</code> <a name="'edcompatible'"></a><code class="help-tag">'edcompatible'</code> <a name="'noed'"></a><code class="help-tag">'noed'</code> <a name="'noedcompatible'"></a><code class="help-tag">'noedcompatible'</code>
  <a href="options.html#'encoding'">'encoding'</a> ("utf-8" is always used)
  esckeys
  <a href="options.html#'guioptions'">'guioptions'</a> "t" flag was removed
  <a name="'guifontset'"></a><code class="help-tag">'guifontset'</code> <a name="'gfs'"></a><code class="help-tag">'gfs'</code> (Use <a href="options.html#'guifont'">'guifont'</a> instead.)
  <a name="'guipty'"></a><code class="help-tag">'guipty'</code> (Nvim uses pipes and PTYs consistently on all platforms.)
  <a href="deprecated.html#'highlight'">'highlight'</a> (Names of builtin <a href="syntax.html#highlight-groups">highlight-groups</a> cannot be changed.)
  <a name="'imactivatefunc'"></a><code class="help-tag">'imactivatefunc'</code> <a name="'imaf'"></a><code class="help-tag">'imaf'</code>
  <a name="'imactivatekey'"></a><code class="help-tag">'imactivatekey'</code> <a name="'imak'"></a><code class="help-tag">'imak'</code>
  <a name="'imstatusfunc'"></a><code class="help-tag">'imstatusfunc'</code> <a name="'imsf'"></a><code class="help-tag">'imsf'</code>
  <a name="'insertmode'"></a><code class="help-tag">'insertmode'</code> <a name="'im'"></a><code class="help-tag">'im'</code> Use the following script to emulate <a href="vim_diff.html#'insertmode'">'insertmode'</a>:
<pre>autocmd BufWinEnter * startinsert
inoremap &lt;Esc&gt; &lt;C-X&gt;&lt;C-Z&gt;&lt;C-]&gt;
inoremap &lt;C-C&gt; &lt;C-X&gt;&lt;C-Z&gt;
inoremap &lt;C-L&gt; &lt;C-X&gt;&lt;C-Z&gt;&lt;C-]&gt;&lt;Esc&gt;
inoremap &lt;C-Z&gt; &lt;C-X&gt;&lt;C-Z&gt;&lt;Cmd&gt;suspend&lt;CR&gt;
noremap &lt;C-C&gt; &lt;Esc&gt;
snoremap &lt;C-C&gt; &lt;Esc&gt;
noremap &lt;C-\&gt;&lt;C-G&gt; &lt;C-\&gt;&lt;C-N&gt;&lt;Cmd&gt;startinsert&lt;CR&gt;
cnoremap &lt;C-\&gt;&lt;C-G&gt; &lt;C-\&gt;&lt;C-N&gt;&lt;Cmd&gt;startinsert&lt;CR&gt;
inoremap &lt;C-\&gt;&lt;C-G&gt; &lt;C-X&gt;&lt;C-Z&gt;
autocmd CmdWinEnter * noremap &lt;buffer&gt; &lt;C-C&gt; &lt;C-C&gt;
autocmd CmdWinEnter * inoremap &lt;buffer&gt; &lt;C-C&gt; &lt;C-C&gt;

lua &lt;&lt; EOF
  vim.on_key(function(c)
    if c == '\27' then
      local mode = vim.api.nvim_get_mode().mode
      if mode:find('^[nvV\22sS\19]') and vim.fn.getcmdtype() == '' then
        vim.schedule(function()
          vim.cmd('startinsert')
        end)
      end
    end
  end)
EOF</pre></div>
<div class="old-help-para">  <a name="'macatsui'"></a><code class="help-tag">'macatsui'</code>
  <a name="'maxcombine'"></a><code class="help-tag">'maxcombine'</code> <a name="'mco'"></a><code class="help-tag">'mco'</code>
    Nvim always displays up to 6 combining characters.  You can still edit
    text with more than 6 combining characters, you just can't see them.
    Use <a href="various.html#g8">g8</a> or <a href="various.html#ga">ga</a>.  See <a href="mbyte.html#mbyte-combining">mbyte-combining</a>.
  <a name="'maxmem'"></a><code class="help-tag">'maxmem'</code> Nvim delegates memory-management to the OS.
  <a name="'maxmemtot'"></a><code class="help-tag">'maxmemtot'</code> Nvim delegates memory-management to the OS.
  <a name="'prompt'"></a><code class="help-tag">'prompt'</code> <a name="'noprompt'"></a><code class="help-tag">'noprompt'</code>
  <a name="'remap'"></a><code class="help-tag">'remap'</code> <a name="'noremap'"></a><code class="help-tag">'noremap'</code>
  <a name="'restorescreen'"></a><code class="help-tag">'restorescreen'</code> <a name="'rs'"></a><code class="help-tag">'rs'</code> <a name="'norestorescreen'"></a><code class="help-tag">'norestorescreen'</code> <a name="'nors'"></a><code class="help-tag">'nors'</code>
  <a name="'secure'"></a><code class="help-tag">'secure'</code>
    Everything is allowed in <a href="options.html#'exrc'">'exrc'</a> files since they must be explicitly marked
    trusted.
  <a name="'shelltype'"></a><code class="help-tag">'shelltype'</code>
  <a name="'shortname'"></a><code class="help-tag">'shortname'</code> <a name="'sn'"></a><code class="help-tag">'sn'</code> <a name="'noshortname'"></a><code class="help-tag">'noshortname'</code> <a name="'nosn'"></a><code class="help-tag">'nosn'</code>
  <a name="'swapsync'"></a><code class="help-tag">'swapsync'</code> <a name="'sws'"></a><code class="help-tag">'sws'</code>
  <a name="'termencoding'"></a><code class="help-tag">'termencoding'</code> <a name="'tenc'"></a><code class="help-tag">'tenc'</code> (Vim 7.4.852 also removed this for Windows)
  <a name="'terse'"></a><code class="help-tag">'terse'</code> <a name="'noterse'"></a><code class="help-tag">'noterse'</code> (Add "s" to <a href="options.html#'shortmess'">'shortmess'</a> instead)
  textauto
  textmode
  <a name="'toolbar'"></a><code class="help-tag">'toolbar'</code> <a name="'tb'"></a><code class="help-tag">'tb'</code>
  <a name="'toolbariconsize'"></a><code class="help-tag">'toolbariconsize'</code> <a name="'tbis'"></a><code class="help-tag">'tbis'</code>
  <a name="'ttybuiltin'"></a><code class="help-tag">'ttybuiltin'</code> <a name="'tbi'"></a><code class="help-tag">'tbi'</code> <a name="'nottybuiltin'"></a><code class="help-tag">'nottybuiltin'</code> <a name="'notbi'"></a><code class="help-tag">'notbi'</code>
  <a name="'ttyfast'"></a><code class="help-tag">'ttyfast'</code> <a name="'tf'"></a><code class="help-tag">'tf'</code> <a name="'nottyfast'"></a><code class="help-tag">'nottyfast'</code> <a name="'notf'"></a><code class="help-tag">'notf'</code>
  <a name="'ttymouse'"></a><code class="help-tag">'ttymouse'</code> <a name="'ttym'"></a><code class="help-tag">'ttym'</code>
  <a name="'ttyscroll'"></a><code class="help-tag">'ttyscroll'</code> <a name="'tsl'"></a><code class="help-tag">'tsl'</code>
  <a name="'ttytype'"></a><code class="help-tag">'ttytype'</code> <a name="'tty'"></a><code class="help-tag">'tty'</code>
  weirdinvert</div>
<div class="old-help-para">Performance:
  Folds are not updated during insert-mode.</div>
<div class="old-help-para">Startup:
  --literal (file args are always literal; to expand wildcards on Windows, use
    <a href="editing.html#%3An">:n</a> e.g. <code>nvim +"n *"</code>)
  Easy mode: eview, evim, nvim -y
  Restricted mode: rview, rvim, nvim -Z
  Vi mode: nvim -v</div>
<div class="old-help-para">Test functions:
  test_alloc_fail()
  test_autochdir()
  test_disable_char_avail()
  test_feedinput()
  test_garbagecollect_soon
  test_getvalue()
  test_ignore_error()
  test_null_blob()
  test_null_channel()
  test_null_dict()
  test_null_function()
  test_null_job()
  test_null_list()
  test_null_partial()
  test_null_string()
  test_option_not_set()
  test_override()
  test_refcount()
  test_scrollbar()
  test_setmouse()
  test_settime()
  test_srand_seed()</div>
<div class="old-help-para">TUI:
			  <a name="t_xx"></a><code class="help-tag-right">t_xx</code> <a name="termcap-options"></a><code class="help-tag">termcap-options</code> <a name="t_AB"></a><code class="help-tag">t_AB</code> <a name="t_Sb"></a><code class="help-tag">t_Sb</code> <a name="t_vb"></a><code class="help-tag">t_vb</code> <a name="t_SI"></a><code class="help-tag">t_SI</code>
  Nvim does not have special <code>t_XX</code> options nor <code>&lt;t_XX&gt;</code> keycodes to configure
  terminal capabilities. Instead Nvim treats the terminal as any other UI,
  e.g. <a href="options.html#'guicursor'">'guicursor'</a> sets the terminal cursor style if possible.</div>
<div class="old-help-para">			  <a name="termcap"></a><code class="help-tag-right">termcap</code>
  Nvim never uses the termcap database, only <a href="term.html#terminfo">terminfo</a> and <a href="term.html#builtin-terms">builtin-terms</a>.</div>
<div class="old-help-para">			  <a name="xterm-8bit"></a><code class="help-tag-right">xterm-8bit</code> <a name="xterm-8-bit"></a><code class="help-tag">xterm-8-bit</code>
  Xterm can be run in a mode where it uses true 8-bit CSI.  Supporting this
  requires autodetection of whether the terminal is in UTF-8 mode or non-UTF-8
  mode, as the 8-bit CSI character has to be written differently in each case.
  Vim issues a "request version" sequence to the terminal at startup and looks
  at how the terminal is sending CSI.  Nvim does not issue such a sequence and
  always uses 7-bit control sequences.</div>
<div class="old-help-para">Cscope:
                                                                      <a name="cscope"></a><code class="help-tag-right">cscope</code>
  Cscope support has been removed in favour of LSP based solutions.</div>

  
  