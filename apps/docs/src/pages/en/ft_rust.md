---
title:  Ft_rust
layout: ../../layouts/MainLayout.astro
---

  <a name="ft_rust.txt"></a><a name="rust"></a><h1> Ft_rust</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/ft_rust.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">This is documentation for the Rust filetype plugin.</div>
<div class="old-help-para"><h2 class="help-heading">CONTENTS</h2></div>
<div class="old-help-para">1. Introduction							  <a href="ft_rust.html#rust-intro">rust-intro</a>
2. Settings						       <a href="ft_rust.html#rust-settings">rust-settings</a>
3. Commands						       <a href="ft_rust.html#rust-commands">rust-commands</a>
4. Mappings						       <a href="ft_rust.html#rust-mappings">rust-mappings</a></div>
<div class="old-help-para"><h2 class="help-heading">INTRODUCTION<span class="help-heading-tags">							  <a name="rust-intro"></a><span class="help-tag">rust-intro</span></span></h2></div>
<div class="old-help-para">This plugin provides syntax and supporting functionality for the Rust
filetype.</div>
<div class="old-help-para"><h2 class="help-heading">SETTINGS<span class="help-heading-tags">						       <a name="rust-settings"></a><span class="help-tag">rust-settings</span></span></h2></div>
<div class="old-help-para">This plugin has a few variables you can define in your vimrc that change the
behavior of the plugin.</div>
<div class="old-help-para">								<a name="g%3Arustc_path"></a><code class="help-tag-right">g:rustc_path</code>
g:rustc_path~
	Set this option to the path to rustc for use in the <a href="ft_rust.html#%3ARustRun">:RustRun</a> and
	<a href="ft_rust.html#%3ARustExpand">:RustExpand</a> commands. If unset, "rustc" will be located in $PATH:<pre>let g:rustc_path = $HOME .. "/bin/rustc"</pre></div>
<div class="old-help-para">						  <a name="g%3Arustc_makeprg_no_percent"></a><code class="help-tag-right">g:rustc_makeprg_no_percent</code>
g:rustc_makeprg_no_percent~
	Set this option to 1 to have <a href="options.html#'makeprg'">'makeprg'</a> default to "rustc" instead of
	"rustc %":<pre>let g:rustc_makeprg_no_percent = 1</pre></div>
<div class="old-help-para">							      <a name="g%3Arust_conceal"></a><code class="help-tag-right">g:rust_conceal</code>
g:rust_conceal~
	Set this option to turn on the basic <a href="syntax.html#conceal">conceal</a> support:<pre>let g:rust_conceal = 1</pre></div>
<div class="old-help-para">						     <a name="g%3Arust_conceal_mod_path"></a><code class="help-tag-right">g:rust_conceal_mod_path</code>
g:rust_conceal_mod_path~
	Set this option to turn on <a href="syntax.html#conceal">conceal</a> for the path connecting token
	"::":<pre>let g:rust_conceal_mod_path = 1</pre></div>
<div class="old-help-para">							  <a name="g%3Arust_conceal_pub"></a><code class="help-tag-right">g:rust_conceal_pub</code>
g:rust_conceal_pub~
	Set this option to turn on <a href="syntax.html#conceal">conceal</a> for the "pub" token:<pre>let g:rust_conceal_pub = 1</pre></div>
<div class="old-help-para">						     <a name="g%3Arust_recommended_style"></a><code class="help-tag-right">g:rust_recommended_style</code>
g:rust_recommended_style~
	Set this option to enable vim indentation and textwidth settings to
	conform to style conventions of the rust standard library (i.e. use 4
	spaces for indents and sets <a href="options.html#'textwidth'">'textwidth'</a> to 99). This option is enabled
	by default. To disable it:<pre>let g:rust_recommended_style = 0</pre></div>
<div class="old-help-para">								 <a name="g%3Arust_fold"></a><code class="help-tag-right">g:rust_fold</code>
g:rust_fold~
	Set this option to turn on <a href="fold.html#folding">folding</a>:<pre>let g:rust_fold = 1</pre></div>
<div class="old-help-para"><div class="help-column_heading">	Value		Effect</div>	0		No folding
	1		Braced blocks are folded. All folds are open by
			default.
	2		Braced blocks are folded. <a href="options.html#'foldlevel'">'foldlevel'</a> is left at the
			global value (all folds are closed by default).</div>
<div class="old-help-para">						  <a name="g%3Arust_bang_comment_leader"></a><code class="help-tag-right">g:rust_bang_comment_leader</code>
g:rust_bang_comment_leader~
	Set this option to 1 to preserve the leader on multi-line doc comments
	using the /*! syntax:<pre>let g:rust_bang_comment_leader = 1</pre></div>
<div class="old-help-para">						 <a name="g%3Aftplugin_rust_source_path"></a><code class="help-tag-right">g:ftplugin_rust_source_path</code>
g:ftplugin_rust_source_path~
	Set this option to a path that should be prepended to <a href="options.html#'path'">'path'</a> for Rust
	source files:<pre>let g:ftplugin_rust_source_path = $HOME .. '/dev/rust'</pre></div>
<div class="old-help-para">						       <a name="g%3Arustfmt_command"></a><code class="help-tag-right">g:rustfmt_command</code>
g:rustfmt_command~
	Set this option to the name of the "rustfmt" executable in your $PATH. If
	not specified it defaults to "rustfmt" :<pre>let g:rustfmt_command = 'rustfmt'</pre></div>
<div class="old-help-para">						       <a name="g%3Arustfmt_autosave"></a><code class="help-tag-right">g:rustfmt_autosave</code>
g:rustfmt_autosave~
	Set this option to 1 to run <a href="ft_rust.html#%3ARustFmt">:RustFmt</a> automatically when saving a
	buffer. If not specified it defaults to 0 :<pre>let g:rustfmt_autosave = 0</pre></div>
<div class="old-help-para">						       <a name="g%3Arustfmt_fail_silently"></a><code class="help-tag-right">g:rustfmt_fail_silently</code>
g:rustfmt_fail_silently~
	Set this option to 1 to prevent "rustfmt" from populating the
	<a href="quickfix.html#location-list">location-list</a> with errors. If not specified it defaults to 0:<pre>let g:rustfmt_fail_silently = 0</pre></div>
<div class="old-help-para">						       <a name="g%3Arustfmt_options"></a><code class="help-tag-right">g:rustfmt_options</code>
g:rustfmt_options~
	Set this option to a string of options to pass to "rustfmt". The
	write-mode is already set to "overwrite". If not specified it
	defaults to '' :<pre>let g:rustfmt_options = ''</pre></div>
<div class="old-help-para">							  <a name="g%3Arust_playpen_url"></a><code class="help-tag-right">g:rust_playpen_url</code>
g:rust_playpen_url~
	Set this option to override the URL for the playpen to use:<pre>let g:rust_playpen_url = 'https://play.rust-lang.org/'</pre></div>
<div class="old-help-para">							<a name="g%3Arust_shortener_url"></a><code class="help-tag-right">g:rust_shortener_url</code>
g:rust_shortener_url~
	Set this option to override the URL for the URL shortener:<pre>let g:rust_shortener_url = 'https://is.gd/'</pre></div>
<div class="old-help-para"><h2 class="help-heading">COMMANDS<span class="help-heading-tags">						       <a name="rust-commands"></a><span class="help-tag">rust-commands</span></span></h2></div>
<div class="old-help-para">:RustRun  [args]						    <a name="%3ARustRun"></a><code class="help-tag-right">:RustRun</code>
:RustRun! [rustc-args] [--] [args]
		Compiles and runs the current file. If it has unsaved changes,
		it will be saved first using <a href="editing.html#%3Aupdate">:update</a>. If the current file is
		an unnamed buffer, it will be written to a temporary file
		first. The compiled binary is always placed in a temporary
		directory, but is run from the current directory.</div>
<div class="old-help-para">		The arguments given to <a href="ft_rust.html#%3ARustRun">:RustRun</a> will be passed to the
		compiled binary.</div>
<div class="old-help-para">		If ! is specified, the arguments are passed to rustc instead.
		A "--" argument will separate the rustc arguments from the
		arguments passed to the binary.</div>
<div class="old-help-para">		If <a href="ft_rust.html#g%3Arustc_path">g:rustc_path</a> is defined, it is used as the path to rustc.
		Otherwise it is assumed rustc can be found in $PATH.</div>
<div class="old-help-para">:RustExpand  [args]						 <a name="%3ARustExpand"></a><code class="help-tag-right">:RustExpand</code>
:RustExpand! [TYPE] [args]
		Expands the current file using --pretty and displays the
		results in a new split. If the current file has unsaved
		changes, it will be saved first using <a href="editing.html#%3Aupdate">:update</a>. If the
		current file is an unnamed buffer, it will be written to a
		temporary file first.</div>
<div class="old-help-para">		The arguments given to <a href="ft_rust.html#%3ARustExpand">:RustExpand</a> will be passed to rustc.
		This is largely intended for specifying various --cfg
		configurations.</div>
<div class="old-help-para">		If ! is specified, the first argument is the expansion type to
		pass to rustc --pretty. Otherwise it will default to
		"expanded".</div>
<div class="old-help-para">		If <a href="ft_rust.html#g%3Arustc_path">g:rustc_path</a> is defined, it is used as the path to rustc.
		Otherwise it is assumed rustc can be found in $PATH.</div>
<div class="old-help-para">:RustEmitIr [args]						 <a name="%3ARustEmitIr"></a><code class="help-tag-right">:RustEmitIr</code>
		Compiles the current file to LLVM IR and displays the results
		in a new split. If the current file has unsaved changes, it
		will be saved first using <a href="editing.html#%3Aupdate">:update</a>. If the current file is an
		unnamed buffer, it will be written to a temporary file first.</div>
<div class="old-help-para">		The arguments given to <a href="ft_rust.html#%3ARustEmitIr">:RustEmitIr</a> will be passed to rustc.</div>
<div class="old-help-para">		If <a href="ft_rust.html#g%3Arustc_path">g:rustc_path</a> is defined, it is used as the path to rustc.
		Otherwise it is assumed rustc can be found in $PATH.</div>
<div class="old-help-para">:RustEmitAsm [args]						<a name="%3ARustEmitAsm"></a><code class="help-tag-right">:RustEmitAsm</code>
		Compiles the current file to assembly and displays the results
		in a new split. If the current file has unsaved changes, it
		will be saved first using <a href="editing.html#%3Aupdate">:update</a>. If the current file is an
		unnamed buffer, it will be written to a temporary file first.</div>
<div class="old-help-para">		The arguments given to <a href="ft_rust.html#%3ARustEmitAsm">:RustEmitAsm</a> will be passed to rustc.</div>
<div class="old-help-para">		If <a href="ft_rust.html#g%3Arustc_path">g:rustc_path</a> is defined, it is used as the path to rustc.
		Otherwise it is assumed rustc can be found in $PATH.</div>
<div class="old-help-para">:RustPlay							   <a name="%3ARustPlay"></a><code class="help-tag-right">:RustPlay</code>
		This command will only work if you have web-api.vim installed
		(available at <a href="https://github.com/mattn/webapi-vim">https://github.com/mattn/webapi-vim</a>).  It sends the
		current selection, or if nothing is selected, the entirety of the
		current buffer to the Rust playpen, and emits a message with the
		shortened URL to the playpen.</div>
<div class="old-help-para">		<a href="ft_rust.html#g%3Arust_playpen_url">g:rust_playpen_url</a> is the base URL to the playpen, by default
		"https://play.rust-lang.org/".</div>
<div class="old-help-para">		<a href="ft_rust.html#g%3Arust_shortener_url">g:rust_shortener_url</a> is the base URL for the shortener, by
		default "https://is.gd/"</div>
<div class="old-help-para">:RustFmt						       <a name="%3ARustFmt"></a><code class="help-tag-right">:RustFmt</code>
		Runs <a href="ft_rust.html#g%3Arustfmt_command">g:rustfmt_command</a> on the current buffer. If
		<a href="ft_rust.html#g%3Arustfmt_options">g:rustfmt_options</a> is set then those will be passed to the
		executable.</div>
<div class="old-help-para">		If <a href="ft_rust.html#g%3Arustfmt_fail_silently">g:rustfmt_fail_silently</a> is 0 (the default) then it
		will populate the <a href="quickfix.html#location-list">location-list</a> with the errors from
		<a href="ft_rust.html#g%3Arustfmt_command">g:rustfmt_command</a>. If <a href="ft_rust.html#g%3Arustfmt_fail_silently">g:rustfmt_fail_silently</a> is set to 1
		then it will not populate the <a href="quickfix.html#location-list">location-list</a>.</div>
<div class="old-help-para">:RustFmtRange						       <a name="%3ARustFmtRange"></a><code class="help-tag-right">:RustFmtRange</code>
		Runs <a href="ft_rust.html#g%3Arustfmt_command">g:rustfmt_command</a> with selected range. See
		<a href="ft_rust.html#%3ARustFmt">:RustFmt</a> for any other information.</div>
<div class="old-help-para"><h2 class="help-heading">MAPPINGS<span class="help-heading-tags">						       <a name="rust-mappings"></a><span class="help-tag">rust-mappings</span></span></h2></div>
<div class="old-help-para">This plugin defines mappings for <a href="motion.html#%5B%5B">[[</a> and <a href="motion.html#%5D%5D">]]</a> to support hanging indents.</div>
<div class="old-help-para">It also has a few other mappings:</div>
<div class="old-help-para">							<a name="rust_%3CD-r%3E"></a><code class="help-tag-right">rust_&lt;D-r&gt;</code>
<code>&lt;D-r&gt;</code>			Executes <a href="ft_rust.html#%3ARustRun">:RustRun</a> with no arguments.
			Note: This binding is only available in MacVim.</div>
<div class="old-help-para">							<a name="rust_%3CD-R%3E"></a><code class="help-tag-right">rust_&lt;D-R&gt;</code>
<code>&lt;D-R&gt;</code>			Populates the command line with <a href="ft_rust.html#%3ARustRun">:RustRun</a>! using the
			arguments given to the last invocation, but does not
			execute it.
			Note: This binding is only available in MacVim.</div>

  
  