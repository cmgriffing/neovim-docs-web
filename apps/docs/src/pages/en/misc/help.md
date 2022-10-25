---
title: Help
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="" class="section-title" href="#">*Help.Txt*	Nvim</a> 

NVIM - help
k
Move around:  Use the cursor keys, or "h" to go left,	       h   l
"j" to go down, "k" to go up, "l" to go right.	 j
Close this window:  Use ":q<Enter>".
Get out of Vim:  Use ":qa!<Enter>" (careful, all changes are lost!).

Jump to a subject:  Position the cursor on a tag (e.g. [bars](undefined#bars)) and hit CTRL-].
With the mouse:  Double-click the left mouse button on a tag, e.g. [bars](undefined#bars).
Jump back:  Type CTRL-O.  Repeat to go further back.

Get specific help:  It is possible to go directly to whatever you want help
on, by giving an argument to the |:help| command.
Prepend something to specify the context:  *help-context*

WHAT			PREPEND    EXAMPLE	~
Normal mode command		   :help x
Visual mode command	  v_	   :help v_u
Insert mode command	  i_	   :help i_<Esc>
Command-line command	  :	   :help :quit
Command-line editing	  c_	   :help c_<Del>
Vim command argument	  -	   :help -r
Option			  '	   :help 'textwidth'
Regular expression	  /	   :help /[
See [help-summary](undefined#help-summary) for more contexts and an explanation.
See [notation](/neovim-docs-web/en/neovim/intro#notation) for an explanation of the help syntax.

Search for help:  Type ":help word", then hit CTRL-D to see matching
help entries for "word".
Or use ":helpgrep word". |:helpgrep|

Getting started:  Do the Vim tutor, a 30-minute interactive course for the
basic commands, see [vimtutor](undefined#vimtutor).
Read the user manual from start to end: |usr_01.txt|

Vim stands for Vi IMproved.  Most of Vim was made by Bram Moolenaar, but only
through the help of many others.  See [credits](/neovim-docs-web/en/neovim/intro#credits).


## <a id="" class="section-title" href="#">Nvim Documentation</a> 




## <a id="reference_toc doc-file-list Q_ct" class="section-title" href="#reference_toc doc-file-list Q_ct">About Nvim</a> 

[news](undefined#news)			News since the previous release
[nvim](undefined#nvim)			Transitioning from Vim
[vim-differences](undefined#vim-differences)	Nvim compared to Vim
[user-manual](undefined#user-manual)		User manual: How to accomplish editing tasks.
[quickref](undefined#quickref)		Overview of common commands
[tutor](undefined#tutor)			30-minute interactive course for beginners
[copying](undefined#copying)		About copyrights
[iccf](undefined#iccf)			Helping poor children in Uganda
[sponsor](undefined#sponsor)		Sponsor Vim development, become a registered Vim user
[www](undefined#www)			Vim on the World Wide Web
[bugs](undefined#bugs)			Where to send bug reports
[support](undefined#support)		Supported platforms


## <a id="" class="section-title" href="#">General</a> 

[intro](/neovim-docs-web/en/neovim/intro#intro)			Introduction to Vim; notation used in help files
[helphelp](undefined#helphelp)		Using the :help files
[index](undefined#index)			Index of all commands
[tips](undefined#tips)			Various tips on using Vim
|message.txt|		(Error) messages and explanations
|uganda.txt|		Vim distribution and what to do with your money


## <a id="" class="section-title" href="#">Basic Editing</a> 

[starting](undefined#starting)		Starting Vim, Vim command arguments, initialisation
[edit-files](undefined#edit-files)		Editing and writing files
|motion.txt|		Commands for moving around
[scrolling](undefined#scrolling)		Scrolling the text in the window
|insert.txt|		Insert and Replace mode
|change.txt|		Deleting and replacing text
[undo-redo](undefined#undo-redo)		Undo and Redo
|repeat.txt|		Repeating commands, Vim scripts and debugging
[visual-mode](undefined#visual-mode)		Using Visual mode (selecting text)
[various](undefined#various)		Various other commands
[crash-recovery](undefined#crash-recovery)	Recovering from a crash


## <a id="" class="section-title" href="#">Advanced Editing</a> 

[cmdline](undefined#cmdline)		Command-line editing
[options](undefined#options)		Description of all options
[pattern-searches](undefined#pattern-searches)	Vim regexp patterns and search commands
[key-mapping](undefined#key-mapping)		Key mapping (shortcuts), abbreviations
[tags](undefined#tags)			Tags and special searches
[windows](undefined#windows)		Commands for using windows and buffers
[tabpage](undefined#tabpage)		Commands for using tabpages
[spell](undefined#spell)			Spell checking
[diff](undefined#diff)			Comparing files
[folding](undefined#folding)		Hide (fold) ranges of lines
[terminal](undefined#terminal)		Embedded terminal emulator


## <a id="" class="section-title" href="#">Api (Extensibility/Scripting/Plugins)</a> 

[api](undefined#api)			Nvim API via RPC, Lua and VimL
[ui](undefined#ui)			Nvim UI protocol
[lua](undefined#lua)			Lua API
[luaref](/neovim-docs-web/en/misc/luaref#luaref)		Lua reference manual
[luvref](undefined#luvref)		Luv (|vim.loop|) reference manual
[autocmd](undefined#autocmd)		Event handlers
[job-control](undefined#job-control)		Spawn and control multiple processes
[channel](undefined#channel)		Nvim asynchronous IO
[vimscript](undefined#vimscript)		Vimscript reference
[vimscript-functions](undefined#vimscript-functions)	Vimscript functions
|testing.txt|		Vimscript testing functions
[remote-plugin](undefined#remote-plugin)		Nvim remote plugins


## <a id="" class="section-title" href="#">Programming Language Support</a> 

[lsp](undefined#lsp)			Language Server Protocol (LSP)
[diagnostic-api](/neovim-docs-web/en/neovim/diagnostic#diagnostic-api)	Diagnostic framework
[treesitter](undefined#treesitter)		Incremental syntax parsing
|indent.txt|      	automatic indenting for C and other languages
[syntax](undefined#syntax)		syntax highlighting
[filetype](undefined#filetype)		Settings for specific types of files
[quickfix](undefined#quickfix)		Commands for a quick edit-compile-fix cycle
|ft_ada.txt|      	Ada filetype plugin
|ft_ps1.txt|      	PowerShell filetype plugin
|ft_raku.txt|     	Raku filetype plugin
|ft_rust.txt|     	Rust filetype plugin
|ft_sql.txt|      	SQL filetype plugin


## <a id="" class="section-title" href="#">Ui</a> 

[tui](undefined#tui)			Builtin UI
[gui](undefined#gui)			External (graphical) UIs
[signs](undefined#signs)			Signs displayed as window decorations (the "gutter")


## <a id="" class="section-title" href="#">Language Support</a> 

[digraph](undefined#digraph)		List of available digraphs
|mbyte.txt|		Multibyte text support
|mlang.txt|		Non-English language support
|rileft.txt|		Right-to-left editing mode
|arabic.txt|		Arabic language support and editing
|hebrew.txt|		Hebrew language support and editing
|russian.txt|		Russian language support and editing


## <a id="" class="section-title" href="#">Interop</a> 

[provider](undefined#provider)		Builtin remote plugin hosts
|if_perl|		Perl interface
|if_pyth|		Python interface
|if_ruby|		Ruby interface


## <a id="" class="section-title" href="#">Versions</a> 

[deprecated](undefined#deprecated)		Deprecated features that will be removed
[vi-differences](undefined#vi-differences)	Differences between Vim and Vi


## <a id="" class="section-title" href="#">Developing Nvim</a> 

[dev](undefined#dev)			Development of Nvim
[dev-style](undefined#dev-style)		Development style guidelines
|debug.txt|		Debugging Vim itself


## <a id="" class="section-title" href="#">Other</a> 

|print.txt|		For your briefcase and fax machine

### <a id="standard-plugin-list" class="section-title" href="#standard-plugin-list">Note:</a>
Standard plugins ~
|matchit.txt|		Extended |%| matching
|pi_gzip.txt|      	Reading and writing compressed files
|pi_health.txt|    	Healthcheck framework
|pi_msgpack.txt|   	msgpack utilities
|pi_netrw.txt|     	Reading and writing files over a network
|pi_paren.txt|     	Highlight matching parens
|pi_spec.txt|      	Filetype plugin to work with rpm spec files
|pi_tar.txt|       	Tar file explorer
|pi_zip.txt|       	Zip archive explorer

### <a id="local-additions" class="section-title" href="#local-additions">Local Additions:</a>


## <a id="Bars example" class="section-title" href="#Bars example">*Bars*</a> 

Now that you've jumped here with CTRL-] or a double mouse click, you can use
CTRL-T, CTRL-O, g<RightMouse>, or <C-RightMouse> to go back to where you were.

Note that tags are within | characters, but when highlighting is enabled these
characters are hidden.  That makes it easier to read a command.

You can use CTRL-] on any word (even if it is not within "|") and Nvim will
try to find help for it.  Especially for options in single quotes, e.g.
'hlsearch'.


## <a id="" class="section-title" href="#">Vim Tw 78 Isk Ts 8 Noet Ft Help Norl</a> 



