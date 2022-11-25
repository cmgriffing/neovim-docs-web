---
title:  Usr_toc
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_toc.txt"></a><a name="user-manual"></a><h1> Usr_toc</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_toc.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			      Table Of Contents</div>
<div class="old-help-para"><a name="_-overview"></a><h2 class="help-heading">Overview</h2></div>
<div class="old-help-para">Getting Started
<a href="/neovim-docs-web/en/usr_01#usr_01.txt">usr_01.txt</a>  About the manuals
<a href="/neovim-docs-web/en/usr_02#usr_02.txt">usr_02.txt</a>  The first steps in Vim
<a href="/neovim-docs-web/en/usr_03#usr_03.txt">usr_03.txt</a>  Moving around
<a href="/neovim-docs-web/en/usr_04#usr_04.txt">usr_04.txt</a>  Making small changes
<a href="/neovim-docs-web/en/usr_05#usr_05.txt">usr_05.txt</a>  Set your settings
<a href="/neovim-docs-web/en/usr_06#usr_06.txt">usr_06.txt</a>  Using syntax highlighting
<a href="/neovim-docs-web/en/usr_07#usr_07.txt">usr_07.txt</a>  Editing more than one file
<a href="/neovim-docs-web/en/usr_08#usr_08.txt">usr_08.txt</a>  Splitting windows
<a href="/neovim-docs-web/en/usr_09#usr_09.txt">usr_09.txt</a>  Using the GUI
<a href="/neovim-docs-web/en/usr_10#usr_10.txt">usr_10.txt</a>  Making big changes
<a href="/neovim-docs-web/en/usr_11#usr_11.txt">usr_11.txt</a>  Recovering from a crash
<a href="/neovim-docs-web/en/usr_12#usr_12.txt">usr_12.txt</a>  Clever tricks</div>
<div class="old-help-para">Editing Effectively
<a href="/neovim-docs-web/en/usr_20#usr_20.txt">usr_20.txt</a>  Typing command-line commands quickly
<a href="/neovim-docs-web/en/usr_21#usr_21.txt">usr_21.txt</a>  Go away and come back
<a href="/neovim-docs-web/en/usr_22#usr_22.txt">usr_22.txt</a>  Finding the file to edit
<a href="/neovim-docs-web/en/usr_23#usr_23.txt">usr_23.txt</a>  Editing other files
<a href="/neovim-docs-web/en/usr_24#usr_24.txt">usr_24.txt</a>  Inserting quickly
<a href="/neovim-docs-web/en/usr_25#usr_25.txt">usr_25.txt</a>  Editing formatted text
<a href="/neovim-docs-web/en/usr_26#usr_26.txt">usr_26.txt</a>  Repeating
<a href="/neovim-docs-web/en/usr_27#usr_27.txt">usr_27.txt</a>  Search commands and patterns
<a href="/neovim-docs-web/en/usr_28#usr_28.txt">usr_28.txt</a>  Folding
<a href="/neovim-docs-web/en/usr_29#usr_29.txt">usr_29.txt</a>  Moving through programs
<a href="/neovim-docs-web/en/usr_30#usr_30.txt">usr_30.txt</a>  Editing programs
<a href="/neovim-docs-web/en/usr_31#usr_31.txt">usr_31.txt</a>  Exploiting the GUI
<a href="/neovim-docs-web/en/usr_32#usr_32.txt">usr_32.txt</a>  The undo tree</div>
<div class="old-help-para">Tuning Vim
<a href="/neovim-docs-web/en/usr_40#usr_40.txt">usr_40.txt</a>  Make new commands
<a href="/neovim-docs-web/en/usr_41#usr_41.txt">usr_41.txt</a>  Write a Vim script
<a href="/neovim-docs-web/en/usr_42#usr_42.txt">usr_42.txt</a>  Add new menus
<a href="/neovim-docs-web/en/usr_43#usr_43.txt">usr_43.txt</a>  Using filetypes
<a href="/neovim-docs-web/en/usr_44#usr_44.txt">usr_44.txt</a>  Your own syntax highlighted
<a href="/neovim-docs-web/en/usr_45#usr_45.txt">usr_45.txt</a>  Select your language (locale)</div>
<div class="old-help-para">Reference manual
<a href="/neovim-docs-web/en/index#reference_toc">reference_toc</a>     More detailed information for all commands</div>
<div class="old-help-para">The user manual is online:
	<a href="https://neovim.io/doc/user">https://neovim.io/doc/user</a></div>
<div class="old-help-para"><a name="_-getting-started"></a><h2 class="help-heading">Getting Started</h2></div>
<div class="old-help-para">Read this from start to end to learn the essential commands.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_01#usr_01.txt">usr_01.txt</a>  About the manuals
		<a href="/neovim-docs-web/en/usr_01#01.1">01.1</a>  	Two manuals
		<a href="/neovim-docs-web/en/usr_01#01.2">01.2</a>  	Vim installed
		<a href="/neovim-docs-web/en/usr_01#01.3">01.3</a>  	Using the Vim tutor
		<a href="/neovim-docs-web/en/usr_01#01.4">01.4</a>  	Copyright</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_02#usr_02.txt">usr_02.txt</a>  The first steps in Vim
		<a href="/neovim-docs-web/en/usr_02#02.1">02.1</a>  	Running Vim for the First Time
		<a href="/neovim-docs-web/en/usr_02#02.2">02.2</a>  	Inserting text
		<a href="/neovim-docs-web/en/usr_02#02.3">02.3</a>  	Moving around
		<a href="/neovim-docs-web/en/usr_02#02.4">02.4</a>  	Deleting characters
		<a href="/neovim-docs-web/en/usr_02#02.5">02.5</a>  	Undo and Redo
		<a href="/neovim-docs-web/en/usr_02#02.6">02.6</a>  	Other editing commands
		<a href="/neovim-docs-web/en/usr_02#02.7">02.7</a>  	Getting out
		<a href="/neovim-docs-web/en/usr_02#02.8">02.8</a>  	Finding help</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_03#usr_03.txt">usr_03.txt</a>  Moving around
		<a href="/neovim-docs-web/en/usr_03#03.1">03.1</a>  	Word movement
		<a href="/neovim-docs-web/en/usr_03#03.2">03.2</a>  	Moving to the start or end of a line
		<a href="/neovim-docs-web/en/usr_03#03.3">03.3</a>  	Moving to a character
		<a href="/neovim-docs-web/en/usr_03#03.4">03.4</a>  	Matching a paren
		<a href="/neovim-docs-web/en/usr_03#03.5">03.5</a>  	Moving to a specific line
		<a href="/neovim-docs-web/en/usr_03#03.6">03.6</a>  	Telling where you are
		<a href="/neovim-docs-web/en/usr_03#03.7">03.7</a>  	Scrolling around
		<a href="/neovim-docs-web/en/usr_03#03.8">03.8</a>  	Simple searches
		<a href="/neovim-docs-web/en/usr_03#03.9">03.9</a>  	Simple search patterns
		<a href="/neovim-docs-web/en/usr_03#03.10">03.10</a>  	Using marks</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_04#usr_04.txt">usr_04.txt</a>  Making small changes
		<a href="/neovim-docs-web/en/usr_04#04.1">04.1</a>  	Operators and motions
		<a href="/neovim-docs-web/en/usr_04#04.2">04.2</a>  	Changing text
		<a href="/neovim-docs-web/en/usr_04#04.3">04.3</a>  	Repeating a change
		<a href="/neovim-docs-web/en/usr_04#04.4">04.4</a>  	Visual mode
		<a href="/neovim-docs-web/en/usr_04#04.5">04.5</a>  	Moving text
		<a href="/neovim-docs-web/en/usr_04#04.6">04.6</a>  	Copying text
		<a href="/neovim-docs-web/en/usr_04#04.7">04.7</a>  	Using the clipboard
		<a href="/neovim-docs-web/en/usr_04#04.8">04.8</a>  	Text objects
		<a href="/neovim-docs-web/en/usr_04#04.9">04.9</a>  	Replace mode
		<a href="/neovim-docs-web/en/usr_04#04.10">04.10</a>  	Conclusion</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_05#usr_05.txt">usr_05.txt</a>  Set your settings
		<a href="/neovim-docs-web/en/usr_05#05.1">05.1</a>  	The vimrc file
		<a href="/neovim-docs-web/en/usr_05#05.2">05.2</a>  	The example vimrc file explained
		<a href="/neovim-docs-web/en/usr_05#05.3">05.3</a>  	Simple mappings
		<a href="/neovim-docs-web/en/usr_05#05.4">05.4</a>  	Adding a package
		<a href="/neovim-docs-web/en/usr_05#05.5">05.5</a>  	Adding a plugin
		<a href="/neovim-docs-web/en/usr_05#05.6">05.6</a>  	Adding a help file
		<a href="/neovim-docs-web/en/usr_05#05.7">05.7</a>  	The option window
		<a href="/neovim-docs-web/en/usr_05#05.8">05.8</a>  	Often used options</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_06#usr_06.txt">usr_06.txt</a>  Using syntax highlighting
		<a href="/neovim-docs-web/en/usr_06#06.1">06.1</a>  	Switching it on
		<a href="/neovim-docs-web/en/usr_06#06.2">06.2</a>  	No or wrong colors?
		<a href="/neovim-docs-web/en/usr_06#06.3">06.3</a>  	Different colors
		<a href="/neovim-docs-web/en/usr_06#06.4">06.4</a>  	With colors or without colors
		<a href="/neovim-docs-web/en/usr_06#06.5">06.5</a>  	Printing with colors
		<a href="/neovim-docs-web/en/usr_06#06.6">06.6</a>  	Further reading</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_07#usr_07.txt">usr_07.txt</a>  Editing more than one file
		<a href="/neovim-docs-web/en/usr_07#07.1">07.1</a>  	Edit another file
		<a href="/neovim-docs-web/en/usr_07#07.2">07.2</a>  	A list of files
		<a href="/neovim-docs-web/en/usr_07#07.3">07.3</a>  	Jumping from file to file
		<a href="/neovim-docs-web/en/usr_07#07.4">07.4</a>  	Backup files
		<a href="/neovim-docs-web/en/usr_07#07.5">07.5</a>  	Copy text between files
		<a href="/neovim-docs-web/en/usr_07#07.6">07.6</a>  	Viewing a file
		<a href="/neovim-docs-web/en/usr_07#07.7">07.7</a>  	Changing the file name</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_08#usr_08.txt">usr_08.txt</a>  Splitting windows
		<a href="/neovim-docs-web/en/usr_08#08.1">08.1</a>  	Split a window
		<a href="/neovim-docs-web/en/usr_08#08.2">08.2</a>  	Split a window on another file
		<a href="/neovim-docs-web/en/usr_08#08.3">08.3</a>  	Window size
		<a href="/neovim-docs-web/en/usr_08#08.4">08.4</a>  	Vertical splits
		<a href="/neovim-docs-web/en/usr_08#08.5">08.5</a>  	Moving windows
		<a href="/neovim-docs-web/en/usr_08#08.6">08.6</a>  	Commands for all windows
		<a href="/neovim-docs-web/en/usr_08#08.7">08.7</a>  	Viewing differences with diff mode
		<a href="/neovim-docs-web/en/usr_08#08.8">08.8</a>  	Various</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_09#usr_09.txt">usr_09.txt</a>  Using the GUI
		<a href="/neovim-docs-web/en/usr_09#09.1">09.1</a>  	Parts of the GUI
		<a href="/neovim-docs-web/en/usr_09#09.2">09.2</a>  	Using the mouse
		<a href="/neovim-docs-web/en/usr_09#09.3">09.3</a>  	The clipboard
		<a href="/neovim-docs-web/en/usr_09#09.4">09.4</a>  	Select mode</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_10#usr_10.txt">usr_10.txt</a>  Making big changes
		<a href="/neovim-docs-web/en/usr_10#10.1">10.1</a>  	Record and playback commands
		<a href="/neovim-docs-web/en/usr_10#10.2">10.2</a>  	Substitution
		<a href="/neovim-docs-web/en/usr_10#10.3">10.3</a>  	Command ranges
		<a href="/neovim-docs-web/en/usr_10#10.4">10.4</a>  	The global command
		<a href="/neovim-docs-web/en/usr_10#10.5">10.5</a>  	Visual block mode
		<a href="/neovim-docs-web/en/usr_10#10.6">10.6</a>  	Reading and writing part of a file
		<a href="/neovim-docs-web/en/usr_10#10.7">10.7</a>  	Formatting text
		<a href="/neovim-docs-web/en/usr_10#10.8">10.8</a>  	Changing case
		<a href="/neovim-docs-web/en/usr_10#10.9">10.9</a>  	Using an external program</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_11#usr_11.txt">usr_11.txt</a>  Recovering from a crash
		<a href="/neovim-docs-web/en/usr_11#11.1">11.1</a>  	Basic recovery
		<a href="/neovim-docs-web/en/usr_11#11.2">11.2</a>  	Where is the swap file?
		<a href="/neovim-docs-web/en/usr_11#11.3">11.3</a>  	Crashed or not?
		<a href="/neovim-docs-web/en/usr_11#11.4">11.4</a>  	Further reading</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_12#usr_12.txt">usr_12.txt</a>  Clever tricks
		<a href="/neovim-docs-web/en/usr_12#12.1">12.1</a>  	Replace a word
		<a href="/neovim-docs-web/en/usr_12#12.2">12.2</a>  	Change "Last, First" to "First Last"
		<a href="/neovim-docs-web/en/usr_12#12.3">12.3</a>  	Sort a list
		<a href="/neovim-docs-web/en/usr_12#12.4">12.4</a>  	Reverse line order
		<a href="/neovim-docs-web/en/usr_12#12.5">12.5</a>  	Count words
		<a href="/neovim-docs-web/en/usr_12#12.6">12.6</a>  	Find a man page
		<a href="/neovim-docs-web/en/usr_12#12.7">12.7</a>  	Trim blanks
		<a href="/neovim-docs-web/en/usr_12#12.8">12.8</a>  	Find where a word is used</div>
<div class="old-help-para"><a name="_-editing-effectively"></a><h2 class="help-heading">Editing Effectively</h2></div>
<div class="old-help-para">Subjects that can be read independently.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_20#usr_20.txt">usr_20.txt</a>  Typing command-line commands quickly
		<a href="/neovim-docs-web/en/usr_20#20.1">20.1</a>  	Command line editing
		<a href="/neovim-docs-web/en/usr_20#20.2">20.2</a>  	Command line abbreviations
		<a href="/neovim-docs-web/en/usr_20#20.3">20.3</a>  	Command line completion
		<a href="/neovim-docs-web/en/usr_20#20.4">20.4</a>  	Command line history
		<a href="/neovim-docs-web/en/usr_20#20.5">20.5</a>  	Command line window</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_21#usr_21.txt">usr_21.txt</a>  Go away and come back
		<a href="/neovim-docs-web/en/usr_21#21.1">21.1</a>  	Suspend and resume
		<a href="/neovim-docs-web/en/usr_21#21.2">21.2</a>  	Executing shell commands
		<a href="/neovim-docs-web/en/usr_21#21.3">21.3</a>  	Remembering information; ShaDa
		<a href="/neovim-docs-web/en/usr_21#21.4">21.4</a>  	Sessions
		<a href="/neovim-docs-web/en/usr_21#21.5">21.5</a>  	Views
		<a href="/neovim-docs-web/en/usr_21#21.6">21.6</a>  	Modelines</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_22#usr_22.txt">usr_22.txt</a>  Finding the file to edit
		<a href="/neovim-docs-web/en/usr_22#22.1">22.1</a>  	The file explorer
		<a href="/neovim-docs-web/en/usr_22#22.2">22.2</a>  	The current directory
		<a href="/neovim-docs-web/en/usr_22#22.3">22.3</a>  	Finding a file
		<a href="/neovim-docs-web/en/usr_22#22.4">22.4</a>  	The buffer list</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_23#usr_23.txt">usr_23.txt</a>  Editing other files
		<a href="/neovim-docs-web/en/usr_23#23.1">23.1</a>  	DOS, Mac and Unix files
		<a href="/neovim-docs-web/en/usr_23#23.2">23.2</a>  	Files on the internet
		<a href="/neovim-docs-web/en/usr_23#23.3">23.3</a>  	Binary files
		<a href="/neovim-docs-web/en/usr_23#23.4">23.4</a>  	Compressed files</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_24#usr_24.txt">usr_24.txt</a>  Inserting quickly
		<a href="/neovim-docs-web/en/usr_24#24.1">24.1</a>  	Making corrections
		<a href="/neovim-docs-web/en/usr_24#24.2">24.2</a>  	Showing matches
		<a href="/neovim-docs-web/en/usr_24#24.3">24.3</a>  	Completion
		<a href="/neovim-docs-web/en/usr_24#24.4">24.4</a>  	Repeating an insert
		<a href="/neovim-docs-web/en/usr_24#24.5">24.5</a>  	Copying from another line
		<a href="/neovim-docs-web/en/usr_24#24.6">24.6</a>  	Inserting a register
		<a href="/neovim-docs-web/en/usr_24#24.7">24.7</a>  	Abbreviations
		<a href="/neovim-docs-web/en/usr_24#24.8">24.8</a>  	Entering special characters
		<a href="/neovim-docs-web/en/usr_24#24.9">24.9</a>  	Digraphs
		<a href="/neovim-docs-web/en/usr_24#24.10">24.10</a>  	Normal mode commands</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_25#usr_25.txt">usr_25.txt</a>  Editing formatted text
		<a href="/neovim-docs-web/en/usr_25#25.1">25.1</a>  	Breaking lines
		<a href="/neovim-docs-web/en/usr_25#25.2">25.2</a>  	Aligning text
		<a href="/neovim-docs-web/en/usr_25#25.3">25.3</a>  	Indents and tabs
		<a href="/neovim-docs-web/en/usr_25#25.4">25.4</a>  	Dealing with long lines
		<a href="/neovim-docs-web/en/usr_25#25.5">25.5</a>  	Editing tables</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_26#usr_26.txt">usr_26.txt</a>  Repeating
		<a href="/neovim-docs-web/en/usr_26#26.1">26.1</a>  	Repeating with Visual mode
		<a href="/neovim-docs-web/en/usr_26#26.2">26.2</a>  	Add and subtract
		<a href="/neovim-docs-web/en/usr_26#26.3">26.3</a>  	Making a change in many files
		<a href="/neovim-docs-web/en/usr_26#26.4">26.4</a>  	Using Vim from a shell script</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_27#usr_27.txt">usr_27.txt</a>  Search commands and patterns
		<a href="/neovim-docs-web/en/usr_27#27.1">27.1</a>  	Ignoring case
		<a href="/neovim-docs-web/en/usr_27#27.2">27.2</a>  	Wrapping around the file end
		<a href="/neovim-docs-web/en/usr_27#27.3">27.3</a>  	Offsets
		<a href="/neovim-docs-web/en/usr_27#27.4">27.4</a>  	Matching multiple times
		<a href="/neovim-docs-web/en/usr_27#27.5">27.5</a>  	Alternatives
		<a href="/neovim-docs-web/en/usr_27#27.6">27.6</a>  	Character ranges
		<a href="/neovim-docs-web/en/usr_27#27.7">27.7</a>  	Character classes
		<a href="/neovim-docs-web/en/usr_27#27.8">27.8</a>  	Matching a line break
		<a href="/neovim-docs-web/en/usr_27#27.9">27.9</a>  	Examples</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_28#usr_28.txt">usr_28.txt</a>  Folding
		<a href="/neovim-docs-web/en/usr_28#28.1">28.1</a>  	What is folding?
		<a href="/neovim-docs-web/en/usr_28#28.2">28.2</a>  	Manual folding
		<a href="/neovim-docs-web/en/usr_28#28.3">28.3</a>  	Working with folds
		<a href="/neovim-docs-web/en/usr_28#28.4">28.4</a>  	Saving and restoring folds
		<a href="/neovim-docs-web/en/usr_28#28.5">28.5</a>  	Folding by indent
		<a href="/neovim-docs-web/en/usr_28#28.6">28.6</a>  	Folding with markers
		<a href="/neovim-docs-web/en/usr_28#28.7">28.7</a>  	Folding by syntax
		<a href="/neovim-docs-web/en/usr_28#28.8">28.8</a>  	Folding by expression
		<a href="/neovim-docs-web/en/usr_28#28.9">28.9</a>  	Folding unchanged lines
		<a href="/neovim-docs-web/en/usr_28#28.10">28.10</a>  	Which fold method to use?</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_29#usr_29.txt">usr_29.txt</a>  Moving through programs
		<a href="/neovim-docs-web/en/usr_29#29.1">29.1</a>  	Using tags
		<a href="/neovim-docs-web/en/usr_29#29.2">29.2</a>  	The preview window
		<a href="/neovim-docs-web/en/usr_29#29.3">29.3</a>  	Moving through a program
		<a href="/neovim-docs-web/en/usr_29#29.4">29.4</a>  	Finding global identifiers
		<a href="/neovim-docs-web/en/usr_29#29.5">29.5</a>  	Finding local identifiers</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_30#usr_30.txt">usr_30.txt</a>  Editing programs
		<a href="/neovim-docs-web/en/usr_30#30.1">30.1</a>  	Compiling
		<a href="/neovim-docs-web/en/usr_30#30.2">30.2</a>  	Indenting C files
		<a href="/neovim-docs-web/en/usr_30#30.3">30.3</a>  	Automatic indenting
		<a href="/neovim-docs-web/en/usr_30#30.4">30.4</a>  	Other indenting
		<a href="/neovim-docs-web/en/usr_30#30.5">30.5</a>  	Tabs and spaces
		<a href="/neovim-docs-web/en/usr_30#30.6">30.6</a>  	Formatting comments</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_31#usr_31.txt">usr_31.txt</a>  Exploiting the GUI
		<a href="/neovim-docs-web/en/usr_31#31.1">31.1</a>  	The file browser
		<a href="/neovim-docs-web/en/usr_31#31.2">31.2</a>  	Confirmation
		<a href="/neovim-docs-web/en/usr_31#31.3">31.3</a>  	Menu shortcuts
		<a href="/neovim-docs-web/en/usr_31#31.4">31.4</a>  	Vim window position and size
		<a href="/neovim-docs-web/en/usr_31#31.5">31.5</a>  	Various</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_32#usr_32.txt">usr_32.txt</a>  The undo tree
		<a href="/neovim-docs-web/en/usr_32#32.1">32.1</a>  	Undo up to a file write
		<a href="/neovim-docs-web/en/usr_32#32.2">32.2</a>  	Numbering changes
		<a href="/neovim-docs-web/en/usr_32#32.3">32.3</a>  	Jumping around the tree
		<a href="/neovim-docs-web/en/usr_32#32.4">32.4</a>  	Time travelling</div>
<div class="old-help-para"><a name="_-tuning-vim"></a><h2 class="help-heading">Tuning Vim</h2></div>
<div class="old-help-para">Make Vim work as you like it.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_40#usr_40.txt">usr_40.txt</a>  Make new commands
		<a href="/neovim-docs-web/en/usr_40#40.1">40.1</a>  	Key mapping
		<a href="/neovim-docs-web/en/usr_40#40.2">40.2</a>  	Defining command-line commands
		<a href="/neovim-docs-web/en/usr_40#40.3">40.3</a>  	Autocommands</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_41#usr_41.txt">usr_41.txt</a>  Write a Vim script
		<a href="/neovim-docs-web/en/usr_41#41.1">41.1</a>  	Introduction
		<a href="/neovim-docs-web/en/usr_41#41.2">41.2</a>  	Variables
		<a href="/neovim-docs-web/en/usr_41#41.3">41.3</a>  	Expressions
		<a href="/neovim-docs-web/en/usr_41#41.4">41.4</a>  	Conditionals
		<a href="/neovim-docs-web/en/usr_41#41.5">41.5</a>  	Executing an expression
		<a href="/neovim-docs-web/en/usr_41#41.6">41.6</a>  	Using functions
		<a href="/neovim-docs-web/en/usr_41#41.7">41.7</a>  	Defining a function
		<a href="/neovim-docs-web/en/usr_41#41.8">41.8</a>  	Lists and Dictionaries
		<a href="/neovim-docs-web/en/usr_41#41.9">41.9</a>  	Exceptions
		<a href="/neovim-docs-web/en/usr_41#41.10">41.10</a>  	Various remarks
		<a href="/neovim-docs-web/en/usr_41#41.11">41.11</a>  	Writing a plugin
		<a href="/neovim-docs-web/en/usr_41#41.12">41.12</a>  	Writing a filetype plugin
		<a href="/neovim-docs-web/en/usr_41#41.13">41.13</a>  	Writing a compiler plugin
		<a href="/neovim-docs-web/en/usr_41#41.14">41.14</a>  	Writing a plugin that loads quickly
		<a href="/neovim-docs-web/en/usr_41#41.15">41.15</a>  	Writing library scripts
		<a href="/neovim-docs-web/en/usr_41#41.16">41.16</a>  	Distributing Vim scripts</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_42#usr_42.txt">usr_42.txt</a>  Add new menus
		<a href="/neovim-docs-web/en/usr_42#42.1">42.1</a>  	Introduction
		<a href="/neovim-docs-web/en/usr_42#42.2">42.2</a>  	Menu commands
		<a href="/neovim-docs-web/en/usr_42#42.3">42.3</a>  	Various
		<a href="/neovim-docs-web/en/usr_42#42.4">42.4</a>  	Toolbar and popup menus</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_43#usr_43.txt">usr_43.txt</a>  Using filetypes
		<a href="/neovim-docs-web/en/usr_43#43.1">43.1</a>  	Plugins for a filetype
		<a href="/neovim-docs-web/en/usr_43#43.2">43.2</a>  	Adding a filetype</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_44#usr_44.txt">usr_44.txt</a>  Your own syntax highlighted
		<a href="/neovim-docs-web/en/usr_44#44.1">44.1</a>  	Basic syntax commands
		<a href="/neovim-docs-web/en/usr_44#44.2">44.2</a>  	Keywords
		<a href="/neovim-docs-web/en/usr_44#44.3">44.3</a>  	Matches
		<a href="/neovim-docs-web/en/usr_44#44.4">44.4</a>  	Regions
		<a href="/neovim-docs-web/en/usr_44#44.5">44.5</a>  	Nested items
		<a href="/neovim-docs-web/en/usr_44#44.6">44.6</a>  	Following groups
		<a href="/neovim-docs-web/en/usr_44#44.7">44.7</a>  	Other arguments
		<a href="/neovim-docs-web/en/usr_44#44.8">44.8</a>  	Clusters
		<a href="/neovim-docs-web/en/usr_44#44.9">44.9</a>  	Including another syntax file
		<a href="/neovim-docs-web/en/usr_44#44.10">44.10</a>  	Synchronizing
		<a href="/neovim-docs-web/en/usr_44#44.11">44.11</a>  	Installing a syntax file
		<a href="/neovim-docs-web/en/usr_44#44.12">44.12</a>  	Portable syntax file layout</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_45#usr_45.txt">usr_45.txt</a>  Select your language (locale)
		<a href="/neovim-docs-web/en/usr_45#45.1">45.1</a>  	Language for Messages
		<a href="/neovim-docs-web/en/usr_45#45.2">45.2</a>  	Language for Menus
		<a href="/neovim-docs-web/en/usr_45#45.3">45.3</a>  	Using another encoding
		<a href="/neovim-docs-web/en/usr_45#45.4">45.4</a>  	Editing files with a different encoding
		<a href="/neovim-docs-web/en/usr_45#45.5">45.5</a>  	Entering language text</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  