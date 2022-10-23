---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="" class="section-title" href="#">*Help.Txt*	Nvim</a> 

VIM - main help file
k
Move around:  Use the cursor keys, or "h" to go left,	       h   l
"j" to go down, "k" to go up, "l" to go right.	 j
Close this window:  Use ":q<Enter>".
Get out of Vim:  Use ":qa!<Enter>" (careful, all changes are lost!).

Jump to a subject:  Position the cursor on a tag (e.g. [bars](#bars)) and hit CTRL-].
With the mouse:  Double-click the left mouse button on a tag, e.g. [bars](#bars).
Jump back:  Type CTRL-O.  Repeat to go further back.

Get specific help:  It is possible to go directly to whatever you want help
on, by giving an argument to the [:help](#:help) command.
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
See [help-summary](#help-summary) for more contexts and an explanation.
See [notation](#notation) for an explanation of the help syntax.

Search for help:  Type ":help word", then hit CTRL-D to see matching
help entries for "word".
Or use ":helpgrep word". [:helpgrep](#:helpgrep)

Getting started:  Do the Vim tutor, a 30-minute interactive course for the
basic commands, see [vimtutor](#vimtutor).
Read the user manual from start to end: [usr_01.txt](#usr_01.txt)

Vim stands for Vi IMproved.  Most of Vim was made by Bram Moolenaar, but only
through the help of many others.  See [credits](#credits).
------------------------------------------------------------------------------
### <a id="doc-file-list Q_ct" class="section-title" href="#doc-file-list Q_ct">Note:</a>
BASIC:
[quickref](#quickref)	Overview of the most common commands you will use
[tutor](#tutor)		30-minute interactive course for beginners
[copying](#copying)	About copyrights
[iccf](#iccf)		Helping poor children in Uganda
[sponsor](#sponsor)	Sponsor Vim development, become a registered Vim user
[www](#www)		Vim on the World Wide Web
[bugs](#bugs)		Where to send bug reports

USER MANUAL: These files explain how to accomplish an editing task.

[usr_toc.txt](#usr_toc.txt)	Table Of Contents

Getting Started ~
[usr_01.txt](#usr_01.txt)  About the manuals
[usr_02.txt](#usr_02.txt)  The first steps in Vim
[usr_03.txt](#usr_03.txt)  Moving around
[usr_04.txt](#usr_04.txt)  Making small changes
[usr_05.txt](#usr_05.txt)  Set your settings
[usr_06.txt](#usr_06.txt)  Using syntax highlighting
[usr_07.txt](#usr_07.txt)  Editing more than one file
[usr_08.txt](#usr_08.txt)  Splitting windows
[usr_09.txt](#usr_09.txt)  Using the GUI
[usr_10.txt](#usr_10.txt)  Making big changes
[usr_11.txt](#usr_11.txt)  Recovering from a crash
[usr_12.txt](#usr_12.txt)  Clever tricks

Editing Effectively ~
[usr_20.txt](#usr_20.txt)  Typing command-line commands quickly
[usr_21.txt](#usr_21.txt)  Go away and come back
[usr_22.txt](#usr_22.txt)  Finding the file to edit
[usr_23.txt](#usr_23.txt)  Editing other files
[usr_24.txt](#usr_24.txt)  Inserting quickly
[usr_25.txt](#usr_25.txt)  Editing formatted text
[usr_26.txt](#usr_26.txt)  Repeating
[usr_27.txt](#usr_27.txt)  Search commands and patterns
[usr_28.txt](#usr_28.txt)  Folding
[usr_29.txt](#usr_29.txt)  Moving through programs
[usr_30.txt](#usr_30.txt)  Editing programs
[usr_31.txt](#usr_31.txt)  Exploiting the GUI
[usr_32.txt](#usr_32.txt)  The undo tree

Tuning Vim ~
[usr_40.txt](#usr_40.txt)  Make new commands
[usr_41.txt](#usr_41.txt)  Write a Vim script
[usr_42.txt](#usr_42.txt)  Add new menus
[usr_43.txt](#usr_43.txt)  Using filetypes
[usr_44.txt](#usr_44.txt)  Your own syntax highlighted
[usr_45.txt](#usr_45.txt)  Select your language


REFERENCE MANUAL: These files explain every detail of Vim.	*reference_toc*

General subjects ~
[intro.txt](#intro.txt)	general introduction to Vim; notation used in help files
[nvim.txt](#nvim.txt)	Transitioning from Vim
[help.txt](#help.txt)	overview and quick reference (this file)
[helphelp.txt](#helphelp.txt)	about using the help files
[index.txt](#index.txt)	alphabetical index of all commands
[tips.txt](#tips.txt)	various tips on using Vim
[message.txt](#message.txt)	(error) messages and explanations
[develop.txt](#develop.txt)	development of Nvim
[debug.txt](#debug.txt)	debugging Vim itself
[uganda.txt](#uganda.txt)	Vim distribution conditions and what to do with your money

Basic editing ~
[starting.txt](#starting.txt)	starting Vim, Vim command arguments, initialisation
[editing.txt](#editing.txt)	editing and writing files
[motion.txt](#motion.txt)	commands for moving around
[scroll.txt](#scroll.txt)	scrolling the text in the window
[insert.txt](#insert.txt)	Insert and Replace mode
[change.txt](#change.txt)	deleting and replacing text
[undo.txt](#undo.txt)	Undo and Redo
[repeat.txt](#repeat.txt)	repeating commands, Vim scripts and debugging
[visual.txt](#visual.txt)	using the Visual mode (selecting a text area)
[various.txt](#various.txt)	various remaining commands
[recover.txt](#recover.txt)	recovering from a crash

Advanced editing ~
[cmdline.txt](#cmdline.txt)	Command-line editing
[options.txt](#options.txt)	description of all options
[pattern.txt](#pattern.txt)	regexp patterns and search commands
[map.txt](#map.txt)	key mapping and abbreviations
[tagsrch.txt](#tagsrch.txt)	tags and special searches
[windows.txt](#windows.txt)	commands for using multiple windows and buffers
[tabpage.txt](#tabpage.txt)	commands for using multiple tab pages
[spell.txt](#spell.txt)	spell checking
[diff.txt](#diff.txt)	working with two to eight versions of the same file
[autocmd.txt](#autocmd.txt)	automatically executing commands on an event
[eval.txt](#eval.txt)	expression evaluation, conditional commands
[builtin.txt](#builtin.txt)	builtin functions
[userfunc.txt](#userfunc.txt)	defining user functions
[fold.txt](#fold.txt)	hide (fold) ranges of lines
[lua.txt](#lua.txt)	Lua API
[api.txt](#api.txt)	Nvim API via RPC, Lua and VimL

Special issues ~
[testing.txt](#testing.txt)	    testing Vim and Vim scripts
[print.txt](#print.txt)	    printing
[remote_plugin.txt](#remote_plugin.txt)   Nvim support for remote plugins

Programming language support ~
[indent.txt](#indent.txt)       automatic indenting for C and other languages
[lsp.txt](#lsp.txt)          Language Server Protocol (LSP)
[treesitter.txt](#treesitter.txt)   tree-sitter library for incremental parsing of buffers
[diagnostic.txt](#diagnostic.txt)   Diagnostic framework
[syntax.txt](#syntax.txt)       syntax highlighting
[filetype.txt](#filetype.txt)     settings done specifically for a type of file
[quickfix.txt](#quickfix.txt)     commands for a quick edit-compile-fix cycle
[provider.txt](#provider.txt)     Built-in remote plugin hosts
[ft_ada.txt](#ft_ada.txt)       Ada (the programming language) support
[ft_ps1.txt](#ft_ps1.txt)       Filetype plugin for Windows PowerShell
[ft_raku.txt](#ft_raku.txt)      Filetype plugin for Raku
[ft_rust.txt](#ft_rust.txt)      Filetype plugin for Rust
[ft_sql.txt](#ft_sql.txt)       about the SQL filetype plugin

Language support ~
[digraph.txt](#digraph.txt)	list of available digraphs
[mbyte.txt](#mbyte.txt)	multibyte text support
[mlang.txt](#mlang.txt)	non-English language support
[rileft.txt](#rileft.txt)	right-to-left editing mode
[arabic.txt](#arabic.txt)	Arabic language support and editing
[hebrew.txt](#hebrew.txt)	Hebrew language support and editing
[russian.txt](#russian.txt)	Russian language support and editing

GUI ~
[gui.txt](#gui.txt)	Graphical User Interface (GUI)

Interfaces ~
[if_perl.txt](#if_perl.txt)	Perl interface
[if_pyth.txt](#if_pyth.txt)	Python interface
[if_ruby.txt](#if_ruby.txt)	Ruby interface
[sign.txt](#sign.txt)	debugging signs

Versions ~
[vim_diff.txt](#vim_diff.txt)	Main differences between Nvim and Vim
[vi_diff.txt](#vi_diff.txt)	Main differences between Vim and Vi
[deprecated.txt](#deprecated.txt)  Deprecated items that have been or will be removed

Other ~
[news.txt](#news.txt)		News and notable changes in the latest release
[terminal_emulator.txt](#terminal_emulator.txt)	Terminal buffers
[term.txt](#term.txt)		Terminal UI
[ui.txt](#ui.txt)		Nvim UI protocol
[channel.txt](#channel.txt)		Nvim asynchronous IO
[dev_style.txt](#dev_style.txt)		Nvim style guide
[job_control.txt](#job_control.txt)	Spawn and control multiple processes
[luaref.txt](#luaref.txt)		Lua reference manual
[luvref.txt|		Luv (|vim.loop](#luvref.txt|		Luv (|vim.loop)) reference manual
[support.txt](#support.txt)		Supported platforms

### <a id="standard-plugin-list" class="section-title" href="#standard-plugin-list">Note:</a>
Standard plugins ~
[matchit.txt|      Extended |%](#matchit.txt|      Extended |%) matching
[pi_gzip.txt](#pi_gzip.txt)      Reading and writing compressed files
[pi_health.txt](#pi_health.txt)    Healthcheck framework
[pi_msgpack.txt](#pi_msgpack.txt)   msgpack utilities
[pi_netrw.txt](#pi_netrw.txt)     Reading and writing files over a network
[pi_paren.txt](#pi_paren.txt)     Highlight matching parens
[pi_spec.txt](#pi_spec.txt)      Filetype plugin to work with rpm spec files
[pi_tar.txt](#pi_tar.txt)       Tar file explorer
[pi_zip.txt](#pi_zip.txt)       Zip archive explorer

### <a id="local-additions" class="section-title" href="#local-additions">Local Additions:</a>

------------------------------------------------------------------------------
*bars*		Bars example

Now that you've jumped here with CTRL-] or a double mouse click, you can use
CTRL-T, CTRL-O, g<RightMouse>, or <C-RightMouse> to go back to where you were.

Note that tags are within | characters, but when highlighting is enabled these
characters are hidden.  That makes it easier to read a command.

Anyway, you can use CTRL-] on any word, also when it is not within |, and Vim
will try to find help for it.  Especially for options in single quotes, e.g.
'hlsearch'.

------------------------------------------------------------------------------
vim:tw=78:isk=!-~,^*,^\|,^\":ts=8:noet:ft=help:norl:

