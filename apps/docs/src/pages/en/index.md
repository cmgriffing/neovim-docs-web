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
<div class="old-help-para">Jump to a subject:  Position the cursor on a tag (e.g. <a href="/neovim-docs-web/en/index#bars">bars</a>) and hit <code>CTRL-]</code>.
   With the mouse:  Double-click the left mouse button on a tag, e.g. <a href="/neovim-docs-web/en/index#bars">bars</a>.
	Jump back:  Type <code>CTRL-O</code>.  Repeat to go further back.</div>
<div class="old-help-para">Get specific help:  It is possible to go directly to whatever you want help
		    on, by giving an argument to the <a href="/neovim-docs-web/en/helphelp#%3Ahelp">:help</a> command.
		    Prepend something to specify the context:</div>
<div class="old-help-para"><div class="help-column_heading">			  WHAT			PREPEND    EXAMPLE</div>		      Normal mode command		   :help x
		      Visual mode command	  v_	   :help v_u
		      Insert mode command	  i_	   :help i_&lt;Esc&gt;
		      Command-line command	  :	   :help :quit
		      Command-line editing	  c_	   :help c_&lt;Del&gt;
		      Vim command argument	  -		   :help -r
		      Option			  '	   :help <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>
		      Regular expression	  /	   :help /[
		    See <a href="/neovim-docs-web/en/usr_02#help-summary">help-summary</a> for more contexts and an explanation.
		    See <a href="/neovim-docs-web/en/intro#notation">notation</a> for an explanation of the help syntax.</div>
<div class="old-help-para">  Search for help:  Type ":help word", then hit <code>CTRL-D</code> to see matching
		    help entries for "word".
		    Or use ":helpgrep word". <a href="/neovim-docs-web/en/helphelp#%3Ahelpgrep">:helpgrep</a></div>
<div class="old-help-para">  Getting started:  Do the Vim tutor, a 30-minute interactive course for the
		    basic commands, see <a href="/neovim-docs-web/en/usr_01#vimtutor">vimtutor</a>.
		    Read the user manual from start to end: <a href="/neovim-docs-web/en/usr_01#usr_01.txt">usr_01.txt</a></div>
<div class="old-help-para">Vim stands for Vi IMproved.  Most of Vim was made by Bram Moolenaar, but only
through the help of many others.  See <a href="/neovim-docs-web/en/intro#credits">credits</a>.</div>
<div class="old-help-para"><a name="_-nvim-documentation"></a><h2 class="help-heading">NVIM DOCUMENTATION</h2></div>
<div class="old-help-para"><h3 class="help-heading">ABOUT NVIM<span class="help-heading-tags">				<a name="reference_toc"></a><span class="help-tag">reference_toc</span> <a name="doc-file-list"></a><span class="help-tag">doc-file-list</span> <a name="Q_ct"></a><span class="help-tag">Q_ct</span></span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/news#news">news</a>  			News since the previous release
<a href="/neovim-docs-web/en/nvim#nvim">nvim</a>  			Transitioning from Vim
<a href="/neovim-docs-web/en/vim_diff#vim-differences">vim-differences</a>  	Nvim compared to Vim
<a href="/neovim-docs-web/en/usr_toc#user-manual">user-manual</a>  		User manual: How to accomplish editing tasks.
<a href="/neovim-docs-web/en/quickref#quickref">quickref</a>  		Overview of common commands
<a href="/neovim-docs-web/en/usr_01#tutor">tutor</a>  			30-minute interactive course for beginners
<a href="/neovim-docs-web/en/uganda#copying">copying</a>  		About copyrights
<a href="/neovim-docs-web/en/uganda#iccf">iccf</a>  			Helping poor children in Uganda
<a href="/neovim-docs-web/en/intro#sponsor">sponsor</a>  		Sponsor Vim development, become a registered Vim user
<a href="/neovim-docs-web/en/intro#www">www</a>  			Vim on the World Wide Web
<a href="/neovim-docs-web/en/intro#bugs">bugs</a>  			Where to send bug reports
<a href="/neovim-docs-web/en/support#support">support</a>  		Supported platforms</div>
<div class="old-help-para"><a name="_-general"></a><h3 class="help-heading">GENERAL</h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/intro#intro">intro</a>  			Introduction to Vim; notation used in help files
<a href="/neovim-docs-web/en/helphelp#helphelp">helphelp</a>  		Using the :help files
<a href="/neovim-docs-web/en/vimindex#index">index</a>  			Index of all commands
<a href="/neovim-docs-web/en/tips#tips">tips</a>  			Various tips on using Vim
<a href="/neovim-docs-web/en/message#message.txt">message.txt</a>  		(Error) messages and explanations
<a href="/neovim-docs-web/en/uganda#uganda.txt">uganda.txt</a>  		Vim distribution and what to do with your money</div>
<div class="old-help-para"><a name="_-basic-editing"></a><h3 class="help-heading">BASIC EDITING</h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/starting#starting">starting</a>  		Starting Vim, Vim command arguments, initialisation
<a href="/neovim-docs-web/en/editing#edit-files">edit-files</a>  		Editing and writing files
<a href="/neovim-docs-web/en/motion#motion.txt">motion.txt</a>  		Commands for moving around
<a href="/neovim-docs-web/en/scroll#scrolling">scrolling</a>  		Scrolling the text in the window
<a href="/neovim-docs-web/en/insert#insert.txt">insert.txt</a>  		Insert and Replace mode
<a href="/neovim-docs-web/en/change#change.txt">change.txt</a>  		Deleting and replacing text
<a href="/neovim-docs-web/en/undo#undo-redo">undo-redo</a>  		Undo and Redo
<a href="/neovim-docs-web/en/repeat#repeat.txt">repeat.txt</a>  		Repeating commands, Vim scripts and debugging
<a href="/neovim-docs-web/en/visual#visual-mode">visual-mode</a>  		Using Visual mode (selecting text)
<a href="/neovim-docs-web/en/various#various">various</a>  		Various other commands
<a href="/neovim-docs-web/en/recover#crash-recovery">crash-recovery</a>  	Recovering from a crash</div>
<div class="old-help-para"><a name="_-advanced-editing"></a><h3 class="help-heading">ADVANCED EDITING</h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/cmdline#cmdline">cmdline</a>  		Command-line editing
<a href="/neovim-docs-web/en/options#options">options</a>  		Description of all options
<a href="/neovim-docs-web/en/pattern#pattern-searches">pattern-searches</a>  	Vim regexp patterns and search commands
<a href="/neovim-docs-web/en/map#key-mapping">key-mapping</a>  		Key mapping (shortcuts), abbreviations
<a href="/neovim-docs-web/en/tagsrch#tags">tags</a>  			Tags and special searches
<a href="/neovim-docs-web/en/windows#windows">windows</a>  		Commands for using windows and buffers
<a href="/neovim-docs-web/en/tabpage#tabpage">tabpage</a>  		Commands for using tabpages
<a href="/neovim-docs-web/en/spell#spell">spell</a>  			Spell checking
<a href="/neovim-docs-web/en/diff#diff">diff</a>  			Comparing files
<a href="/neovim-docs-web/en/fold#folding">folding</a>  		Hide (fold) ranges of lines
<a href="/neovim-docs-web/en/nvim_terminal_emulator#terminal">terminal</a>  		Embedded terminal emulator</div>
<div class="old-help-para"><a name="_-api-(extensibility/scripting/plugins)"></a><h3 class="help-heading">API (EXTENSIBILITY/SCRIPTING/PLUGINS)</h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/api#api">api</a>  			Nvim API via RPC, Lua and VimL
<a href="/neovim-docs-web/en/ui#ui">ui</a>  			Nvim UI protocol
<a href="/neovim-docs-web/en/lua#lua">lua</a>  			Lua API
<a href="/neovim-docs-web/en/luaref#luaref">luaref</a>  		Lua reference manual
<a href="/neovim-docs-web/en/luvref#luvref">luvref</a>  		Luv (<a href="/neovim-docs-web/en/lua#vim.loop">vim.loop</a>) reference manual
<a href="/neovim-docs-web/en/autocmd#autocmd">autocmd</a>  		Event handlers
<a href="/neovim-docs-web/en/job_control#job-control">job-control</a>  		Spawn and control multiple processes
<a href="/neovim-docs-web/en/channel#channel">channel</a>  		Nvim asynchronous IO
<a href="/neovim-docs-web/en/eval#vimscript">vimscript</a>  		Vimscript reference
<a href="/neovim-docs-web/en/builtin#vimscript-functions">vimscript-functions</a>  	Vimscript functions
<a href="/neovim-docs-web/en/testing#testing.txt">testing.txt</a>  		Vimscript testing functions
<a href="/neovim-docs-web/en/remote_plugin#remote-plugin">remote-plugin</a>  		Nvim remote plugins</div>
<div class="old-help-para"><a name="_-programming-language-support"></a><h3 class="help-heading">PROGRAMMING LANGUAGE SUPPORT</h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/lsp#lsp">lsp</a>  			Language Server Protocol (LSP)
<a href="/neovim-docs-web/en/diagnostic#diagnostic-api">diagnostic-api</a>  	Diagnostic framework
<a href="/neovim-docs-web/en/treesitter#treesitter">treesitter</a>  		Incremental syntax parsing
<a href="/neovim-docs-web/en/indent#indent.txt">indent.txt</a>      	automatic indenting for C and other languages
<a href="/neovim-docs-web/en/syntax#syntax">syntax</a>  		syntax highlighting
<a href="/neovim-docs-web/en/filetype#filetype">filetype</a>  		Settings for specific types of files
<a href="/neovim-docs-web/en/quickfix#quickfix">quickfix</a>  		Commands for a quick edit-compile-fix cycle
<a href="/neovim-docs-web/en/ft_ada#ft_ada.txt">ft_ada.txt</a>      	Ada filetype plugin
<a href="/neovim-docs-web/en/ft_ps1#ft_ps1.txt">ft_ps1.txt</a>      	PowerShell filetype plugin
<a href="/neovim-docs-web/en/ft_raku#ft_raku.txt">ft_raku.txt</a>     	Raku filetype plugin
<a href="/neovim-docs-web/en/ft_rust#ft_rust.txt">ft_rust.txt</a>     	Rust filetype plugin
<a href="/neovim-docs-web/en/ft_sql#ft_sql.txt">ft_sql.txt</a>      	SQL filetype plugin</div>
<div class="old-help-para"><a name="_-ui"></a><h3 class="help-heading">UI</h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/term#tui">tui</a>  			Builtin UI
<a href="/neovim-docs-web/en/gui#gui">gui</a>  			External (graphical) UIs
<a href="/neovim-docs-web/en/sign#signs">signs</a>  			Signs displayed as window decorations (the "gutter")</div>
<div class="old-help-para"><a name="_-language-support"></a><h3 class="help-heading">LANGUAGE SUPPORT</h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/digraph#digraph">digraph</a>  		List of available digraphs
<a href="/neovim-docs-web/en/mbyte#mbyte.txt">mbyte.txt</a>  		Multibyte text support
<a href="/neovim-docs-web/en/mlang#mlang.txt">mlang.txt</a>  		Non-English language support
<a href="/neovim-docs-web/en/rileft#rileft.txt">rileft.txt</a>  		Right-to-left editing mode
<a href="/neovim-docs-web/en/arabic#arabic.txt">arabic.txt</a>  		Arabic language support and editing
<a href="/neovim-docs-web/en/hebrew#hebrew.txt">hebrew.txt</a>  		Hebrew language support and editing
<a href="/neovim-docs-web/en/russian#russian.txt">russian.txt</a>  		Russian language support and editing</div>
<div class="old-help-para"><a name="_-interop"></a><h3 class="help-heading">INTEROP</h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/provider#provider">provider</a>  		Builtin remote plugin hosts
<a href="/neovim-docs-web/en/if_perl#if_perl">if_perl</a>  		Perl interface
<a href="/neovim-docs-web/en/if_pyth#if_pyth">if_pyth</a>  		Python interface
<a href="/neovim-docs-web/en/if_ruby#if_ruby">if_ruby</a>  		Ruby interface</div>
<div class="old-help-para"><a name="_-versions"></a><h3 class="help-heading">VERSIONS</h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/deprecated#deprecated">deprecated</a>  		Deprecated features that will be removed
<a href="/neovim-docs-web/en/vi_diff#vi-differences">vi-differences</a>  	Differences between Vim and Vi</div>
<div class="old-help-para"><a name="_-developing-nvim"></a><h3 class="help-heading">DEVELOPING NVIM</h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/develop#dev">dev</a>  			Development of Nvim
<a href="/neovim-docs-web/en/dev_style#dev-style">dev-style</a>  		Development style guidelines
<a href="/neovim-docs-web/en/debug#debug.txt">debug.txt</a>  		Debugging Vim itself</div>
<div class="old-help-para"><a name="_-other"></a><h3 class="help-heading">OTHER</h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/print#print.txt">print.txt</a>  		For your briefcase and fax machine</div>
<div class="old-help-para">						<a name="standard-plugin-list"></a><code class="help-tag-right">standard-plugin-list</code>
<div class="help-column_heading">Standard plugins</div>matchit.txt		Extended <a href="/neovim-docs-web/en/motion#%25">%</a> matching
<a href="/neovim-docs-web/en/pi_gzip#pi_gzip.txt">pi_gzip.txt</a>      	Reading and writing compressed files
<a href="/neovim-docs-web/en/pi_health#pi_health.txt">pi_health.txt</a>    	Healthcheck framework
<a href="/neovim-docs-web/en/pi_msgpack#pi_msgpack.txt">pi_msgpack.txt</a>   	msgpack utilities
<a href="/neovim-docs-web/en/pi_netrw#pi_netrw.txt">pi_netrw.txt</a>     	Reading and writing files over a network
<a href="/neovim-docs-web/en/pi_paren#pi_paren.txt">pi_paren.txt</a>     	Highlight matching parens
<a href="/neovim-docs-web/en/pi_spec#pi_spec.txt">pi_spec.txt</a>      	Filetype plugin to work with rpm spec files
<a href="/neovim-docs-web/en/pi_tar#pi_tar.txt">pi_tar.txt</a>       	Tar file explorer
<a href="/neovim-docs-web/en/pi_zip#pi_zip.txt">pi_zip.txt</a>       	Zip archive explorer</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="bars"></a><span class="help-tag">bars</span>  		Bars example</span></h3></div>
<div class="old-help-para">Now that you've jumped here with <code>CTRL-]</code> or a double mouse click, you can use
CTRL-T, <code>CTRL-O</code>, g&lt;RightMouse&gt;, or <code>&lt;C-RightMouse&gt;</code> to go back to where you were.</div>
<div class="old-help-para">Note that tags are within | characters, but when highlighting is enabled these
characters are hidden.  That makes it easier to read a command.</div>
<div class="old-help-para">You can use <code>CTRL-]</code> on any word (even if it is not within "|") and Nvim will
try to find help for it.  Especially for options in single quotes, e.g.
<a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a>.</div>

  
  