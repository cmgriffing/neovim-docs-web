---
title: Tree Sitter
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="" class="section-title" href="#">*Usr_Toc.Txt*	Nvim</a> 

VIM USER MANUAL - by Bram Moolenaar

Table Of Contents			*user-manual*


## <a id="" class="section-title" href="#">Overview</a> 

Getting Started
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

Editing Effectively
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

Tuning Vim
[usr_40.txt](#usr_40.txt)  Make new commands
[usr_41.txt](#usr_41.txt)  Write a Vim script
[usr_42.txt](#usr_42.txt)  Add new menus
[usr_43.txt](#usr_43.txt)  Using filetypes
[usr_44.txt](#usr_44.txt)  Your own syntax highlighted
[usr_45.txt](#usr_45.txt)  Select your language (locale)


Reference manual
[reference_toc](#reference_toc)     More detailed information for all commands

The user manual is online:
https://neovim.io/doc/user


## <a id="" class="section-title" href="#">Getting Started</a> 

Read this from start to end to learn the essential commands.

[usr_01.txt](#usr_01.txt)  About the manuals
[01.1](#01.1)	Two manuals
[01.2](#01.2)	Vim installed
[01.3](#01.3)	Using the Vim tutor
[01.4](#01.4)	Copyright

[usr_02.txt](#usr_02.txt)  The first steps in Vim
[02.1](#02.1)	Running Vim for the First Time
[02.2](#02.2)	Inserting text
[02.3](#02.3)	Moving around
[02.4](#02.4)	Deleting characters
[02.5](#02.5)	Undo and Redo
[02.6](#02.6)	Other editing commands
[02.7](#02.7)	Getting out
[02.8](#02.8)	Finding help

[usr_03.txt](#usr_03.txt)  Moving around
[03.1](#03.1)	Word movement
[03.2](#03.2)	Moving to the start or end of a line
[03.3](#03.3)	Moving to a character
[03.4](#03.4)	Matching a paren
[03.5](#03.5)	Moving to a specific line
[03.6](#03.6)	Telling where you are
[03.7](#03.7)	Scrolling around
[03.8](#03.8)	Simple searches
[03.9](#03.9)	Simple search patterns
[03.10](#03.10)	Using marks

[usr_04.txt](#usr_04.txt)  Making small changes
[04.1](#04.1)	Operators and motions
[04.2](#04.2)	Changing text
[04.3](#04.3)	Repeating a change
[04.4](#04.4)	Visual mode
[04.5](#04.5)	Moving text
[04.6](#04.6)	Copying text
[04.7](#04.7)	Using the clipboard
[04.8](#04.8)	Text objects
[04.9](#04.9)	Replace mode
[04.10](#04.10)	Conclusion

[usr_05.txt](#usr_05.txt)  Set your settings
[05.1](#05.1)	The vimrc file
[05.2](#05.2)	The example vimrc file explained
[05.3](#05.3)	Simple mappings
[05.4](#05.4)	Adding a package
[05.5](#05.5)	Adding a plugin
[05.6](#05.6)	Adding a help file
[05.7](#05.7)	The option window
[05.8](#05.8)	Often used options

[usr_06.txt](#usr_06.txt)  Using syntax highlighting
[06.1](#06.1)	Switching it on
[06.2](#06.2)	No or wrong colors?
[06.3](#06.3)	Different colors
[06.4](#06.4)	With colors or without colors
[06.5](#06.5)	Printing with colors
[06.6](#06.6)	Further reading

[usr_07.txt](#usr_07.txt)  Editing more than one file
[07.1](#07.1)	Edit another file
[07.2](#07.2)	A list of files
[07.3](#07.3)	Jumping from file to file
[07.4](#07.4)	Backup files
[07.5](#07.5)	Copy text between files
[07.6](#07.6)	Viewing a file
[07.7](#07.7)	Changing the file name

[usr_08.txt](#usr_08.txt)  Splitting windows
[08.1](#08.1)	Split a window
[08.2](#08.2)	Split a window on another file
[08.3](#08.3)	Window size
[08.4](#08.4)	Vertical splits
[08.5](#08.5)	Moving windows
[08.6](#08.6)	Commands for all windows
[08.7](#08.7)	Viewing differences with diff mode
[08.8](#08.8)	Various

[usr_09.txt](#usr_09.txt)  Using the GUI
[09.1](#09.1)	Parts of the GUI
[09.2](#09.2)	Using the mouse
[09.3](#09.3)	The clipboard
[09.4](#09.4)	Select mode

[usr_10.txt](#usr_10.txt)  Making big changes
[10.1](#10.1)	Record and playback commands
[10.2](#10.2)	Substitution
[10.3](#10.3)	Command ranges
[10.4](#10.4)	The global command
[10.5](#10.5)	Visual block mode
[10.6](#10.6)	Reading and writing part of a file
[10.7](#10.7)	Formatting text
[10.8](#10.8)	Changing case
[10.9](#10.9)	Using an external program

[usr_11.txt](#usr_11.txt)  Recovering from a crash
[11.1](#11.1)	Basic recovery
[11.2](#11.2)	Where is the swap file?
[11.3](#11.3)	Crashed or not?
[11.4](#11.4)	Further reading

[usr_12.txt](#usr_12.txt)  Clever tricks
[12.1](#12.1)	Replace a word
[12.2](#12.2)	Change "Last, First" to "First Last"
[12.3](#12.3)	Sort a list
[12.4](#12.4)	Reverse line order
[12.5](#12.5)	Count words
[12.6](#12.6)	Find a man page
[12.7](#12.7)	Trim blanks
[12.8](#12.8)	Find where a word is used


## <a id="" class="section-title" href="#">Editing Effectively</a> 

Subjects that can be read independently.

[usr_20.txt](#usr_20.txt)  Typing command-line commands quickly
[20.1](#20.1)	Command line editing
[20.2](#20.2)	Command line abbreviations
[20.3](#20.3)	Command line completion
[20.4](#20.4)	Command line history
[20.5](#20.5)	Command line window

[usr_21.txt](#usr_21.txt)  Go away and come back
[21.1](#21.1)	Suspend and resume
[21.2](#21.2)	Executing shell commands
[21.3](#21.3)	Remembering information; ShaDa
[21.4](#21.4)	Sessions
[21.5](#21.5)	Views
[21.6](#21.6)	Modelines

[usr_22.txt](#usr_22.txt)  Finding the file to edit
[22.1](#22.1)	The file explorer
[22.2](#22.2)	The current directory
[22.3](#22.3)	Finding a file
[22.4](#22.4)	The buffer list

[usr_23.txt](#usr_23.txt)  Editing other files
[23.1](#23.1)	DOS, Mac and Unix files
[23.2](#23.2)	Files on the internet
[23.3](#23.3)	Binary files
[23.4](#23.4)	Compressed files

[usr_24.txt](#usr_24.txt)  Inserting quickly
[24.1](#24.1)	Making corrections
[24.2](#24.2)	Showing matches
[24.3](#24.3)	Completion
[24.4](#24.4)	Repeating an insert
[24.5](#24.5)	Copying from another line
[24.6](#24.6)	Inserting a register
[24.7](#24.7)	Abbreviations
[24.8](#24.8)	Entering special characters
[24.9](#24.9)	Digraphs
[24.10](#24.10)	Normal mode commands

[usr_25.txt](#usr_25.txt)  Editing formatted text
[25.1](#25.1)	Breaking lines
[25.2](#25.2)	Aligning text
[25.3](#25.3)	Indents and tabs
[25.4](#25.4)	Dealing with long lines
[25.5](#25.5)	Editing tables

[usr_26.txt](#usr_26.txt)  Repeating
[26.1](#26.1)	Repeating with Visual mode
[26.2](#26.2)	Add and subtract
[26.3](#26.3)	Making a change in many files
[26.4](#26.4)	Using Vim from a shell script

[usr_27.txt](#usr_27.txt)  Search commands and patterns
[27.1](#27.1)	Ignoring case
[27.2](#27.2)	Wrapping around the file end
[27.3](#27.3)	Offsets
[27.4](#27.4)	Matching multiple times
[27.5](#27.5)	Alternatives
[27.6](#27.6)	Character ranges
[27.7](#27.7)	Character classes
[27.8](#27.8)	Matching a line break
[27.9](#27.9)	Examples

[usr_28.txt](#usr_28.txt)  Folding
[28.1](#28.1)	What is folding?
[28.2](#28.2)	Manual folding
[28.3](#28.3)	Working with folds
[28.4](#28.4)	Saving and restoring folds
[28.5](#28.5)	Folding by indent
[28.6](#28.6)	Folding with markers
[28.7](#28.7)	Folding by syntax
[28.8](#28.8)	Folding by expression
[28.9](#28.9)	Folding unchanged lines
[28.10](#28.10)	Which fold method to use?

[usr_29.txt](#usr_29.txt)  Moving through programs
[29.1](#29.1)	Using tags
[29.2](#29.2)	The preview window
[29.3](#29.3)	Moving through a program
[29.4](#29.4)	Finding global identifiers
[29.5](#29.5)	Finding local identifiers

[usr_30.txt](#usr_30.txt)  Editing programs
[30.1](#30.1)	Compiling
[30.2](#30.2)	Indenting C files
[30.3](#30.3)	Automatic indenting
[30.4](#30.4)	Other indenting
[30.5](#30.5)	Tabs and spaces
[30.6](#30.6)	Formatting comments

[usr_31.txt](#usr_31.txt)  Exploiting the GUI
[31.1](#31.1)	The file browser
[31.2](#31.2)	Confirmation
[31.3](#31.3)	Menu shortcuts
[31.4](#31.4)	Vim window position and size
[31.5](#31.5)	Various

[usr_32.txt](#usr_32.txt)  The undo tree
[32.1](#32.1)	Undo up to a file write
[32.2](#32.2)	Numbering changes
[32.3](#32.3)	Jumping around the tree
[32.4](#32.4)	Time travelling


## <a id="" class="section-title" href="#">Tuning Vim</a> 

Make Vim work as you like it.

[usr_40.txt](#usr_40.txt)  Make new commands
[40.1](#40.1)	Key mapping
[40.2](#40.2)	Defining command-line commands
[40.3](#40.3)	Autocommands

[usr_41.txt](#usr_41.txt)  Write a Vim script
[41.1](#41.1)	Introduction
[41.2](#41.2)	Variables
[41.3](#41.3)	Expressions
[41.4](#41.4)	Conditionals
[41.5](#41.5)	Executing an expression
[41.6](#41.6)	Using functions
[41.7](#41.7)	Defining a function
[41.8](#41.8)	Lists and Dictionaries
[41.9](#41.9)	Exceptions
[41.10](#41.10)	Various remarks
[41.11](#41.11)	Writing a plugin
[41.12](#41.12)	Writing a filetype plugin
[41.13](#41.13)	Writing a compiler plugin
[41.14](#41.14)	Writing a plugin that loads quickly
[41.15](#41.15)	Writing library scripts
[41.16](#41.16)	Distributing Vim scripts

[usr_42.txt](#usr_42.txt)  Add new menus
[42.1](#42.1)	Introduction
[42.2](#42.2)	Menu commands
[42.3](#42.3)	Various
[42.4](#42.4)	Toolbar and popup menus

[usr_43.txt](#usr_43.txt)  Using filetypes
[43.1](#43.1)	Plugins for a filetype
[43.2](#43.2)	Adding a filetype

[usr_44.txt](#usr_44.txt)  Your own syntax highlighted
[44.1](#44.1)	Basic syntax commands
[44.2](#44.2)	Keywords
[44.3](#44.3)	Matches
[44.4](#44.4)	Regions
[44.5](#44.5)	Nested items
[44.6](#44.6)	Following groups
[44.7](#44.7)	Other arguments
[44.8](#44.8)	Clusters
[44.9](#44.9)	Including another syntax file
[44.10](#44.10)	Synchronizing
[44.11](#44.11)	Installing a syntax file
[44.12](#44.12)	Portable syntax file layout

[usr_45.txt](#usr_45.txt)  Select your language (locale)
[45.1](#45.1)	Language for Messages
[45.2](#45.2)	Language for Menus
[45.3](#45.3)	Using another encoding
[45.4](#45.4)	Editing files with a different encoding
[45.5](#45.5)	Entering language text


## <a id="vim:tw&#x3D;78:ts&#x3D;8:noet:ft&#x3D;help:norl:" class="section-title" href="#vim:tw&#x3D;78:ts&#x3D;8:noet:ft&#x3D;help:norl:">Copyright: See |Manual-Copyright|</a> 


