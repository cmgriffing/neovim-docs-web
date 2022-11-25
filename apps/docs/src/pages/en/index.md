---
title:  Help
layout: ../../layouts/MainLayout.astro
---

  <a name="help.txt"></a><a name="help-context"></a><h1> Help</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/help.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">				 NVIM - help
									 k
      Move around:  Use the cursor keys, or "h" to go left,	       h   l
		    "j" to go down, "k" to go up, "l" to go right.	 j
Close this window:  Use ":q&lt;Enter&gt;".
   Get out of Vim:  Use ":qa!&lt;Enter&gt;" (careful, all changes are lost!).</div>
<div class="old-help-para">Jump to a subject:  Position the cursor on a tag (e.g. <a href="index.html#bars">bars</a>) and hit <code>CTRL-]</code>.
   With the mouse:  Double-click the left mouse button on a tag, e.g. <a href="index.html#bars">bars</a>.
	Jump back:  Type <code>CTRL-O</code>.  Repeat to go further back.</div>
<div class="old-help-para">Get specific help:  It is possible to go directly to whatever you want help
		    on, by giving an argument to the <a href="helphelp.html#%3Ahelp">:help</a> command.
		    Prepend something to specify the context:</div>
<div class="old-help-para"><div class="help-column_heading">			  WHAT			PREPEND    EXAMPLE</div>		      Normal mode command		   :help x
		      Visual mode command	  v_	   :help v_u
		      Insert mode command	  i_	   :help i_&lt;Esc&gt;
		      Command-line command	  :	   :help :quit
		      Command-line editing	  c_	   :help c_&lt;Del&gt;
		      Vim command argument	  -		   :help -r
		      Option			  '	   :help <a href="options.html#'textwidth'">'textwidth'</a>
		      Regular expression	  /	   :help /[
		    See <a href="usr_02.html#help-summary">help-summary</a> for more contexts and an explanation.
		    See <a href="intro.html#notation">notation</a> for an explanation of the help syntax.</div>
<div class="old-help-para">  Search for help:  Type ":help word", then hit <code>CTRL-D</code> to see matching
		    help entries for "word".
		    Or use ":helpgrep word". <a href="helphelp.html#%3Ahelpgrep">:helpgrep</a></div>
<div class="old-help-para">  Getting started:  Do the Vim tutor, a 30-minute interactive course for the
		    basic commands, see <a href="usr_01.html#vimtutor">vimtutor</a>.
		    Read the user manual from start to end: <a href="usr_01.html#usr_01.txt">usr_01.txt</a></div>
<div class="old-help-para">Vim stands for Vi IMproved.  Most of Vim was made by Bram Moolenaar, but only
through the help of many others.  See <a href="intro.html#credits">credits</a>.</div>
<div class="old-help-para"><a name="_-nvim-documentation"></a><h2 class="help-heading">NVIM DOCUMENTATION</h2></div>
<div class="old-help-para"><h3 class="help-heading">ABOUT NVIM<span class="help-heading-tags">				<a name="reference_toc"></a><span class="help-tag">reference_toc</span> <a name="doc-file-list"></a><span class="help-tag">doc-file-list</span> <a name="Q_ct"></a><span class="help-tag">Q_ct</span></span></h3></div>
<div class="old-help-para"><a href="news.html#news">news</a>  			News since the previous release
<a href="nvim.html#nvim">nvim</a>  			Transitioning from Vim
<a href="vim_diff.html#vim-differences">vim-differences</a>  	Nvim compared to Vim
<a href="usr_toc.html#user-manual">user-manual</a>  		User manual: How to accomplish editing tasks.
<a href="quickref.html#quickref">quickref</a>  		Overview of common commands
<a href="usr_01.html#tutor">tutor</a>  			30-minute interactive course for beginners
<a href="uganda.html#copying">copying</a>  		About copyrights
<a href="uganda.html#iccf">iccf</a>  			Helping poor children in Uganda
<a href="intro.html#sponsor">sponsor</a>  		Sponsor Vim development, become a registered Vim user
<a href="intro.html#www">www</a>  			Vim on the World Wide Web
<a href="intro.html#bugs">bugs</a>  			Where to send bug reports
<a href="support.html#support">support</a>  		Supported platforms</div>
<div class="old-help-para"><a name="_-general"></a><h3 class="help-heading">GENERAL</h3></div>
<div class="old-help-para"><a href="intro.html#intro">intro</a>  			Introduction to Vim; notation used in help files
<a href="helphelp.html#helphelp">helphelp</a>  		Using the :help files
<a href="vimindex.html#index">index</a>  			Index of all commands
<a href="tips.html#tips">tips</a>  			Various tips on using Vim
<a href="message.html#message.txt">message.txt</a>  		(Error) messages and explanations
<a href="uganda.html#uganda.txt">uganda.txt</a>  		Vim distribution and what to do with your money</div>
<div class="old-help-para"><a name="_-basic-editing"></a><h3 class="help-heading">BASIC EDITING</h3></div>
<div class="old-help-para"><a href="starting.html#starting">starting</a>  		Starting Vim, Vim command arguments, initialisation
<a href="editing.html#edit-files">edit-files</a>  		Editing and writing files
<a href="motion.html#motion.txt">motion.txt</a>  		Commands for moving around
<a href="scroll.html#scrolling">scrolling</a>  		Scrolling the text in the window
<a href="insert.html#insert.txt">insert.txt</a>  		Insert and Replace mode
<a href="change.html#change.txt">change.txt</a>  		Deleting and replacing text
<a href="undo.html#undo-redo">undo-redo</a>  		Undo and Redo
<a href="repeat.html#repeat.txt">repeat.txt</a>  		Repeating commands, Vim scripts and debugging
<a href="visual.html#visual-mode">visual-mode</a>  		Using Visual mode (selecting text)
<a href="various.html#various">various</a>  		Various other commands
<a href="recover.html#crash-recovery">crash-recovery</a>  	Recovering from a crash</div>
<div class="old-help-para"><a name="_-advanced-editing"></a><h3 class="help-heading">ADVANCED EDITING</h3></div>
<div class="old-help-para"><a href="cmdline.html#cmdline">cmdline</a>  		Command-line editing
<a href="options.html#options">options</a>  		Description of all options
<a href="pattern.html#pattern-searches">pattern-searches</a>  	Vim regexp patterns and search commands
<a href="map.html#key-mapping">key-mapping</a>  		Key mapping (shortcuts), abbreviations
<a href="tagsrch.html#tags">tags</a>  			Tags and special searches
<a href="windows.html#windows">windows</a>  		Commands for using windows and buffers
<a href="tabpage.html#tabpage">tabpage</a>  		Commands for using tabpages
<a href="spell.html#spell">spell</a>  			Spell checking
<a href="diff.html#diff">diff</a>  			Comparing files
<a href="fold.html#folding">folding</a>  		Hide (fold) ranges of lines
<a href="nvim_terminal_emulator.html#terminal">terminal</a>  		Embedded terminal emulator</div>
<div class="old-help-para"><a name="_-api-(extensibility/scripting/plugins)"></a><h3 class="help-heading">API (EXTENSIBILITY/SCRIPTING/PLUGINS)</h3></div>
<div class="old-help-para"><a href="api.html#api">api</a>  			Nvim API via RPC, Lua and VimL
<a href="ui.html#ui">ui</a>  			Nvim UI protocol
<a href="lua.html#lua">lua</a>  			Lua API
<a href="luaref.html#luaref">luaref</a>  		Lua reference manual
<a href="luvref.html#luvref">luvref</a>  		Luv (<a href="lua.html#vim.loop">vim.loop</a>) reference manual
<a href="autocmd.html#autocmd">autocmd</a>  		Event handlers
<a href="job_control.html#job-control">job-control</a>  		Spawn and control multiple processes
<a href="channel.html#channel">channel</a>  		Nvim asynchronous IO
<a href="eval.html#vimscript">vimscript</a>  		Vimscript reference
<a href="builtin.html#vimscript-functions">vimscript-functions</a>  	Vimscript functions
<a href="testing.html#testing.txt">testing.txt</a>  		Vimscript testing functions
<a href="remote_plugin.html#remote-plugin">remote-plugin</a>  		Nvim remote plugins</div>
<div class="old-help-para"><a name="_-programming-language-support"></a><h3 class="help-heading">PROGRAMMING LANGUAGE SUPPORT</h3></div>
<div class="old-help-para"><a href="lsp.html#lsp">lsp</a>  			Language Server Protocol (LSP)
<a href="diagnostic.html#diagnostic-api">diagnostic-api</a>  	Diagnostic framework
<a href="treesitter.html#treesitter">treesitter</a>  		Incremental syntax parsing
<a href="indent.html#indent.txt">indent.txt</a>      	automatic indenting for C and other languages
<a href="syntax.html#syntax">syntax</a>  		syntax highlighting
<a href="filetype.html#filetype">filetype</a>  		Settings for specific types of files
<a href="quickfix.html#quickfix">quickfix</a>  		Commands for a quick edit-compile-fix cycle
<a href="ft_ada.html#ft_ada.txt">ft_ada.txt</a>      	Ada filetype plugin
<a href="ft_ps1.html#ft_ps1.txt">ft_ps1.txt</a>      	PowerShell filetype plugin
<a href="ft_raku.html#ft_raku.txt">ft_raku.txt</a>     	Raku filetype plugin
<a href="ft_rust.html#ft_rust.txt">ft_rust.txt</a>     	Rust filetype plugin
<a href="ft_sql.html#ft_sql.txt">ft_sql.txt</a>      	SQL filetype plugin</div>
<div class="old-help-para"><a name="_-ui"></a><h3 class="help-heading">UI</h3></div>
<div class="old-help-para"><a href="term.html#tui">tui</a>  			Builtin UI
<a href="gui.html#gui">gui</a>  			External (graphical) UIs
<a href="sign.html#signs">signs</a>  			Signs displayed as window decorations (the "gutter")</div>
<div class="old-help-para"><a name="_-language-support"></a><h3 class="help-heading">LANGUAGE SUPPORT</h3></div>
<div class="old-help-para"><a href="digraph.html#digraph">digraph</a>  		List of available digraphs
<a href="mbyte.html#mbyte.txt">mbyte.txt</a>  		Multibyte text support
<a href="mlang.html#mlang.txt">mlang.txt</a>  		Non-English language support
<a href="rileft.html#rileft.txt">rileft.txt</a>  		Right-to-left editing mode
<a href="arabic.html#arabic.txt">arabic.txt</a>  		Arabic language support and editing
<a href="hebrew.html#hebrew.txt">hebrew.txt</a>  		Hebrew language support and editing
<a href="russian.html#russian.txt">russian.txt</a>  		Russian language support and editing</div>
<div class="old-help-para"><a name="_-interop"></a><h3 class="help-heading">INTEROP</h3></div>
<div class="old-help-para"><a href="provider.html#provider">provider</a>  		Builtin remote plugin hosts
<a href="if_perl.html#if_perl">if_perl</a>  		Perl interface
<a href="if_pyth.html#if_pyth">if_pyth</a>  		Python interface
<a href="if_ruby.html#if_ruby">if_ruby</a>  		Ruby interface</div>
<div class="old-help-para"><a name="_-versions"></a><h3 class="help-heading">VERSIONS</h3></div>
<div class="old-help-para"><a href="deprecated.html#deprecated">deprecated</a>  		Deprecated features that will be removed
<a href="vi_diff.html#vi-differences">vi-differences</a>  	Differences between Vim and Vi</div>
<div class="old-help-para"><a name="_-developing-nvim"></a><h3 class="help-heading">DEVELOPING NVIM</h3></div>
<div class="old-help-para"><a href="develop.html#dev">dev</a>  			Development of Nvim
<a href="dev_style.html#dev-style">dev-style</a>  		Development style guidelines
<a href="debug.html#debug.txt">debug.txt</a>  		Debugging Vim itself</div>
<div class="old-help-para"><a name="_-other"></a><h3 class="help-heading">OTHER</h3></div>
<div class="old-help-para"><a href="print.html#print.txt">print.txt</a>  		For your briefcase and fax machine</div>
<div class="old-help-para">						<a name="standard-plugin-list"></a><code class="help-tag-right">standard-plugin-list</code>
<div class="help-column_heading">Standard plugins</div>matchit.txt		Extended <a href="motion.html#%25">%</a> matching
<a href="pi_gzip.html#pi_gzip.txt">pi_gzip.txt</a>      	Reading and writing compressed files
<a href="pi_health.html#pi_health.txt">pi_health.txt</a>    	Healthcheck framework
<a href="pi_msgpack.html#pi_msgpack.txt">pi_msgpack.txt</a>   	msgpack utilities
<a href="pi_netrw.html#pi_netrw.txt">pi_netrw.txt</a>     	Reading and writing files over a network
<a href="pi_paren.html#pi_paren.txt">pi_paren.txt</a>     	Highlight matching parens
<a href="pi_spec.html#pi_spec.txt">pi_spec.txt</a>      	Filetype plugin to work with rpm spec files
<a href="pi_tar.html#pi_tar.txt">pi_tar.txt</a>       	Tar file explorer
<a href="pi_zip.html#pi_zip.txt">pi_zip.txt</a>       	Zip archive explorer</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="bars"></a><span class="help-tag">bars</span>  		Bars example</span></h3></div>
<div class="old-help-para">Now that you've jumped here with <code>CTRL-]</code> or a double mouse click, you can use
CTRL-T, <code>CTRL-O</code>, g&lt;RightMouse&gt;, or <code>&lt;C-RightMouse&gt;</code> to go back to where you were.</div>
<div class="old-help-para">Note that tags are within | characters, but when highlighting is enabled these
characters are hidden.  That makes it easier to read a command.</div>
<div class="old-help-para">You can use <code>CTRL-]</code> on any word (even if it is not within "|") and Nvim will
try to find help for it.  Especially for options in single quotes, e.g.
<a href="options.html#'hlsearch'">'hlsearch'</a>.</div>

  
  