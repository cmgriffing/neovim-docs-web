---
title:  Index
layout: ../../layouts/MainLayout.astro
---

  <a name="index.txt"></a><a name="index"></a><h1> Index</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/index.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">This file contains a list of all commands for each mode, with a tag and a
short description.  The lists are sorted on ASCII value.</div>
<div class="old-help-para">Tip: When looking for certain functionality, use a search command.  E.g.,
to look for deleting something, use: "/delete".</div>
<div class="old-help-para">For an overview of options see <a href="/neovim-docs-web/en/quickref#option-list">option-list</a>.
For an overview of built-in functions see <a href="/neovim-docs-web/en/eval#functions">functions</a>.
For a list of Vim variables see <a href="/neovim-docs-web/en/eval#vim-variable">vim-variable</a>.</div>
<div class="old-help-para"><h2 class="help-heading">1. Insert mode<span class="help-heading-tags">						<a name="insert-index"></a><span class="help-tag">insert-index</span></span></h2></div>
<div class="old-help-para"><div class="help-column_heading">tag		char		action in Insert mode</div><div class="help-column_heading">------------------------------------------------------------------------------</div><a href="/neovim-docs-web/en/insert#i_CTRL-%40">i_CTRL-@</a>  	<code>CTRL-@</code>		insert previously inserted text and stop
				insert
<a href="/neovim-docs-web/en/insert#i_CTRL-A">i_CTRL-A</a>  	<code>CTRL-A</code>		insert previously inserted text
<a href="/neovim-docs-web/en/insert#i_CTRL-C">i_CTRL-C</a>  	<code>CTRL-C</code>		quit insert mode, without checking for
				abbreviation
<a href="/neovim-docs-web/en/insert#i_CTRL-D">i_CTRL-D</a>  	<code>CTRL-D</code>		delete one shiftwidth of indent in the current
				line
<a href="/neovim-docs-web/en/insert#i_CTRL-E">i_CTRL-E</a>  	<code>CTRL-E</code>		insert the character which is below the cursor
		<code>CTRL-F</code>		not used (but by default it's in <a href="/neovim-docs-web/en/options#'cinkeys'">'cinkeys'</a> to
				re-indent the current line)
<a href="/neovim-docs-web/en/insert#i_CTRL-G_j">i_CTRL-G_j</a>  	<code>CTRL-G</code> <code>CTRL-J</code>	line down, to column where inserting started
<a href="/neovim-docs-web/en/insert#i_CTRL-G_j">i_CTRL-G_j</a>  	<code>CTRL-G</code> j	line down, to column where inserting started
<a href="/neovim-docs-web/en/insert#i_CTRL-G_j">i_CTRL-G_j</a>  	<code>CTRL-G</code> <code>&lt;Down&gt;</code>	line down, to column where inserting started
<a href="/neovim-docs-web/en/insert#i_CTRL-G_k">i_CTRL-G_k</a>  	<code>CTRL-G</code> <code>CTRL-K</code>	line up, to column where inserting started
<a href="/neovim-docs-web/en/insert#i_CTRL-G_k">i_CTRL-G_k</a>  	<code>CTRL-G</code> k	line up, to column where inserting started
<a href="/neovim-docs-web/en/insert#i_CTRL-G_k">i_CTRL-G_k</a>  	<code>CTRL-G</code> <code>&lt;Up&gt;</code>	line up, to column where inserting started
<a href="/neovim-docs-web/en/insert#i_CTRL-G_u">i_CTRL-G_u</a>  	<code>CTRL-G</code> u	start new undoable edit
<a href="/neovim-docs-web/en/insert#i_CTRL-G_U">i_CTRL-G_U</a>  	<code>CTRL-G</code> U	don't break undo with next cursor movement
<a href="/neovim-docs-web/en/insert#i_%3CBS%3E">i_&lt;BS&gt;</a>  	<code>&lt;BS&gt;</code>		delete character before the cursor
<a href="/neovim-docs-web/en/digraph#i_digraph">i_digraph</a>  	<code>{char1}</code><code>&lt;BS&gt;</code><code>{char2}</code>
				enter digraph (only when <a href="/neovim-docs-web/en/options#'digraph'">'digraph'</a> option set)
<a href="/neovim-docs-web/en/insert#i_CTRL-H">i_CTRL-H</a>  	<code>CTRL-H</code>		same as <code>&lt;BS&gt;</code>
<a href="/neovim-docs-web/en/insert#i_%3CTab%3E">i_&lt;Tab&gt;</a>  	<code>&lt;Tab&gt;</code>		insert a <code>&lt;Tab&gt;</code> character
<a href="/neovim-docs-web/en/insert#i_CTRL-I">i_CTRL-I</a>  	<code>CTRL-I</code>		same as <code>&lt;Tab&gt;</code>
<a href="/neovim-docs-web/en/insert#i_%3CNL%3E">i_&lt;NL&gt;</a>  	<code>&lt;NL&gt;</code>		same as <code>&lt;CR&gt;</code>
<a href="/neovim-docs-web/en/insert#i_CTRL-J">i_CTRL-J</a>  	<code>CTRL-J</code>		same as <code>&lt;CR&gt;</code>
<a href="/neovim-docs-web/en/insert#i_CTRL-K">i_CTRL-K</a>  	<code>CTRL-K</code> <code>{char1}</code> <code>{char2}</code>
				enter digraph
<a href="/neovim-docs-web/en/insert#i_%3CCR%3E">i_&lt;CR&gt;</a>  	<code>&lt;CR&gt;</code>		begin new line
<a href="/neovim-docs-web/en/insert#i_CTRL-M">i_CTRL-M</a>  	<code>CTRL-M</code>		same as <code>&lt;CR&gt;</code>
<a href="/neovim-docs-web/en/insert#i_CTRL-N">i_CTRL-N</a>  	<code>CTRL-N</code>		find next match for keyword in front of the
				cursor
<a href="/neovim-docs-web/en/insert#i_CTRL-O">i_CTRL-O</a>  	<code>CTRL-O</code>		execute a single command and return to insert
				mode
<a href="/neovim-docs-web/en/insert#i_CTRL-P">i_CTRL-P</a>  	<code>CTRL-P</code>		find previous match for keyword in front of
				the cursor
<a href="/neovim-docs-web/en/insert#i_CTRL-Q">i_CTRL-Q</a>  	<code>CTRL-Q</code>		same as <code>CTRL-V</code>, unless used for terminal
				control flow
<a href="/neovim-docs-web/en/insert#i_CTRL-SHIFT-Q">i_CTRL-SHIFT-Q</a>  <code>CTRL-SHIFT-Q</code> <code>{char}</code>
				like <code>CTRL-Q</code> unless <a href="/neovim-docs-web/en/term#tui-modifyOtherKeys">tui-modifyOtherKeys</a> is active
<a href="/neovim-docs-web/en/insert#i_CTRL-R">i_CTRL-R</a>  	<code>CTRL-R</code> <code>{register}</code>
				insert the contents of a register
<a href="/neovim-docs-web/en/insert#i_CTRL-R_CTRL-R">i_CTRL-R_CTRL-R</a> <code>CTRL-R</code> <code>CTRL-R</code> <code>{register}</code>
				insert the contents of a register literally
<a href="/neovim-docs-web/en/insert#i_CTRL-R_CTRL-O">i_CTRL-R_CTRL-O</a> <code>CTRL-R</code> <code>CTRL-O</code> <code>{register}</code>
				insert the contents of a register literally
				and don't auto-indent
<a href="/neovim-docs-web/en/insert#i_CTRL-R_CTRL-P">i_CTRL-R_CTRL-P</a> <code>CTRL-R</code> <code>CTRL-P</code> <code>{register}</code>
				insert the contents of a register literally
				and fix indent.
		<code>CTRL-S</code>		not used or used for terminal control flow
<a href="/neovim-docs-web/en/insert#i_CTRL-T">i_CTRL-T</a>  	<code>CTRL-T</code>		insert one shiftwidth of indent in current
				line
<a href="/neovim-docs-web/en/insert#i_CTRL-U">i_CTRL-U</a>  	<code>CTRL-U</code>		delete all entered characters in the current
				line
<a href="/neovim-docs-web/en/insert#i_CTRL-V">i_CTRL-V</a>  	<code>CTRL-V</code> <code>{char}</code>	insert next non-digit literally
<a href="/neovim-docs-web/en/insert#i_CTRL-SHIFT-V">i_CTRL-SHIFT-V</a>  <code>CTRL-SHIFT-V</code> <code>{char}</code>
				like <code>CTRL-V</code> unless <a href="/neovim-docs-web/en/term#tui-modifyOtherKeys">tui-modifyOtherKeys</a> is active
<a href="/neovim-docs-web/en/insert#i_CTRL-V_digit">i_CTRL-V_digit</a> <code>CTRL-V</code> <code>{number}</code> insert three digit decimal number as a single
				byte.
<a href="/neovim-docs-web/en/insert#i_CTRL-W">i_CTRL-W</a>  	<code>CTRL-W</code>		delete word before the cursor
<a href="/neovim-docs-web/en/insert#i_CTRL-X">i_CTRL-X</a>  	<code>CTRL-X</code> <code>{mode}</code>	enter <code>CTRL-X</code> sub mode, see <a href="/neovim-docs-web/en/vimindex#i_CTRL-X_index">i_CTRL-X_index</a>
<a href="/neovim-docs-web/en/insert#i_CTRL-Y">i_CTRL-Y</a>  	<code>CTRL-Y</code>		insert the character which is above the cursor
<a href="/neovim-docs-web/en/insert#i_%3CEsc%3E">i_&lt;Esc&gt;</a>  	<code>&lt;Esc&gt;</code>		end insert mode
<a href="/neovim-docs-web/en/insert#i_CTRL-%5B">i_CTRL-[</a>  	<code>CTRL-[</code>		same as <code>&lt;Esc&gt;</code>
<a href="/neovim-docs-web/en/intro#i_CTRL-%5C_CTRL-N">i_CTRL-\_CTRL-N</a> <code>CTRL-\</code> <code>CTRL-N</code>	go to Normal mode
<a href="/neovim-docs-web/en/intro#i_CTRL-%5C_CTRL-G">i_CTRL-\_CTRL-G</a> <code>CTRL-\</code> <code>CTRL-G</code>	go to Normal mode
		<code>CTRL-\</code> a - z	reserved for extensions
		<code>CTRL-\</code> others	not used
<a href="/neovim-docs-web/en/insert#i_CTRL-%5D">i_CTRL-]</a>  	<code>CTRL-]</code>		trigger abbreviation
<a href="/neovim-docs-web/en/insert#i_CTRL-%5E">i_CTRL-^</a>  	<code>CTRL-^</code>		toggle use of <a href="/neovim-docs-web/en/map#%3Almap">:lmap</a> mappings
<a href="/neovim-docs-web/en/insert#i_CTRL-_">i_CTRL-_</a>  	<code>CTRL-_</code>		When <a href="/neovim-docs-web/en/options#'allowrevins'">'allowrevins'</a> set: change language
				(Hebrew)</div>
<div class="old-help-para">		<code>&lt;Space&gt;</code> to '~'	not used, except '0' and '^' followed by
				<code>CTRL-D</code></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/insert#i_0_CTRL-D">i_0_CTRL-D</a>  	0 <code>CTRL-D</code>	delete all indent in the current line
<a href="/neovim-docs-web/en/insert#i_%5E_CTRL-D">i_^_CTRL-D</a>  	^ <code>CTRL-D</code>	delete all indent in the current line, restore
				it in the next line</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/insert#i_%3CDel%3E">i_&lt;Del&gt;</a>  	<code>&lt;Del&gt;</code>		delete character under the cursor</div>
<div class="old-help-para">		Meta characters (0x80 to 0xff, 128 to 255)
				not used</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/insert#i_%3CLeft%3E">i_&lt;Left&gt;</a>  	<code>&lt;Left&gt;</code>		cursor one character left
<a href="/neovim-docs-web/en/insert#i_%3CS-Left%3E">i_&lt;S-Left&gt;</a>  	<code>&lt;S-Left&gt;</code>	cursor one word left
<a href="/neovim-docs-web/en/insert#i_%3CC-Left%3E">i_&lt;C-Left&gt;</a>  	<code>&lt;C-Left&gt;</code>	cursor one word left
<a href="/neovim-docs-web/en/insert#i_%3CRight%3E">i_&lt;Right&gt;</a>  	<code>&lt;Right&gt;</code>		cursor one character right
<a href="/neovim-docs-web/en/insert#i_%3CS-Right%3E">i_&lt;S-Right&gt;</a>  	<code>&lt;S-Right&gt;</code>	cursor one word right
<a href="/neovim-docs-web/en/insert#i_%3CC-Right%3E">i_&lt;C-Right&gt;</a>  	<code>&lt;C-Right&gt;</code>	cursor one word right
<a href="/neovim-docs-web/en/insert#i_%3CUp%3E">i_&lt;Up&gt;</a>  	<code>&lt;Up&gt;</code>		cursor one line up
<a href="/neovim-docs-web/en/insert#i_%3CS-Up%3E">i_&lt;S-Up&gt;</a>  	<code>&lt;S-Up&gt;</code>		same as <code>&lt;PageUp&gt;</code>
<a href="/neovim-docs-web/en/insert#i_%3CDown%3E">i_&lt;Down&gt;</a>  	<code>&lt;Down&gt;</code>		cursor one line down
<a href="/neovim-docs-web/en/insert#i_%3CS-Down%3E">i_&lt;S-Down&gt;</a>  	<code>&lt;S-Down&gt;</code>	same as <code>&lt;PageDown&gt;</code>
<a href="/neovim-docs-web/en/insert#i_%3CHome%3E">i_&lt;Home&gt;</a>  	<code>&lt;Home&gt;</code>		cursor to start of line
<a href="/neovim-docs-web/en/insert#i_%3CC-Home%3E">i_&lt;C-Home&gt;</a>  	<code>&lt;C-Home&gt;</code>	cursor to start of file
<a href="/neovim-docs-web/en/insert#i_%3CEnd%3E">i_&lt;End&gt;</a>  	<code>&lt;End&gt;</code>		cursor past end of line
<a href="/neovim-docs-web/en/insert#i_%3CC-End%3E">i_&lt;C-End&gt;</a>  	<code>&lt;C-End&gt;</code>		cursor past end of file
<a href="/neovim-docs-web/en/insert#i_%3CPageUp%3E">i_&lt;PageUp&gt;</a>  	<code>&lt;PageUp&gt;</code>	one screenful backward
<a href="/neovim-docs-web/en/insert#i_%3CPageDown%3E">i_&lt;PageDown&gt;</a>  	<code>&lt;PageDown&gt;</code>	one screenful forward
<a href="/neovim-docs-web/en/helphelp#i_%3CF1%3E">i_&lt;F1&gt;</a>  	<code>&lt;F1&gt;</code>		same as <code>&lt;Help&gt;</code>
<a href="/neovim-docs-web/en/helphelp#i_%3CHelp%3E">i_&lt;Help&gt;</a>  	<code>&lt;Help&gt;</code>		stop insert mode and display help window
<a href="/neovim-docs-web/en/insert#i_%3CInsert%3E">i_&lt;Insert&gt;</a>  	<code>&lt;Insert&gt;</code>	toggle Insert/Replace mode
<a href="/neovim-docs-web/en/insert#i_%3CLeftMouse%3E">i_&lt;LeftMouse&gt;</a>  	<code>&lt;LeftMouse&gt;</code>	cursor at mouse click
<a href="/neovim-docs-web/en/insert#i_%3CScrollWheelDown%3E">i_&lt;ScrollWheelDown&gt;</a>  	<code>&lt;ScrollWheelDown&gt;</code>	move window three lines down
<a href="/neovim-docs-web/en/insert#i_%3CS-ScrollWheelDown%3E">i_&lt;S-ScrollWheelDown&gt;</a>  	<code>&lt;S-ScrollWheelDown&gt;</code>	move window one page down
<a href="/neovim-docs-web/en/insert#i_%3CScrollWheelUp%3E">i_&lt;ScrollWheelUp&gt;</a>  	<code>&lt;ScrollWheelUp&gt;</code>		move window three lines up
<a href="/neovim-docs-web/en/insert#i_%3CS-ScrollWheelUp%3E">i_&lt;S-ScrollWheelUp&gt;</a>  	<code>&lt;S-ScrollWheelUp&gt;</code>	move window one page up
<a href="/neovim-docs-web/en/insert#i_%3CScrollWheelLeft%3E">i_&lt;ScrollWheelLeft&gt;</a>  	<code>&lt;ScrollWheelLeft&gt;</code>	move window six columns left
<a href="/neovim-docs-web/en/insert#i_%3CS-ScrollWheelLeft%3E">i_&lt;S-ScrollWheelLeft&gt;</a>  	<code>&lt;S-ScrollWheelLeft&gt;</code>	move window one page left
<a href="/neovim-docs-web/en/insert#i_%3CScrollWheelRight%3E">i_&lt;ScrollWheelRight&gt;</a>  	<code>&lt;ScrollWheelRight&gt;</code>	move window six columns right
<a href="/neovim-docs-web/en/insert#i_%3CS-ScrollWheelRight%3E">i_&lt;S-ScrollWheelRight&gt;</a> <code>&lt;S-ScrollWheelRight&gt;</code>	move window one page right</div>
<div class="old-help-para">commands in <code>CTRL-X</code> submode				<a name="i_CTRL-X_index"></a><code class="help-tag-right">i_CTRL-X_index</code></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-D">i_CTRL-X_CTRL-D</a>  	<code>CTRL-X</code> <code>CTRL-D</code>	complete defined identifiers
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-E">i_CTRL-X_CTRL-E</a>  	<code>CTRL-X</code> <code>CTRL-E</code>	scroll up
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-F">i_CTRL-X_CTRL-F</a>  	<code>CTRL-X</code> <code>CTRL-F</code>	complete file names
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-I">i_CTRL-X_CTRL-I</a>  	<code>CTRL-X</code> <code>CTRL-I</code>	complete identifiers
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-K">i_CTRL-X_CTRL-K</a>  	<code>CTRL-X</code> <code>CTRL-K</code>	complete identifiers from dictionary
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-L">i_CTRL-X_CTRL-L</a>  	<code>CTRL-X</code> <code>CTRL-L</code>	complete whole lines
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-N">i_CTRL-X_CTRL-N</a>  	<code>CTRL-X</code> <code>CTRL-N</code>	next completion
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-O">i_CTRL-X_CTRL-O</a>  	<code>CTRL-X</code> <code>CTRL-O</code>	omni completion
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-P">i_CTRL-X_CTRL-P</a>  	<code>CTRL-X</code> <code>CTRL-P</code>	previous completion
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-S">i_CTRL-X_CTRL-S</a>  	<code>CTRL-X</code> <code>CTRL-S</code>	spelling suggestions
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-T">i_CTRL-X_CTRL-T</a>  	<code>CTRL-X</code> <code>CTRL-T</code>	complete identifiers from thesaurus
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-Y">i_CTRL-X_CTRL-Y</a>  	<code>CTRL-X</code> <code>CTRL-Y</code>	scroll down
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-U">i_CTRL-X_CTRL-U</a>  	<code>CTRL-X</code> <code>CTRL-U</code>	complete with <a href="/neovim-docs-web/en/options#'completefunc'">'completefunc'</a>
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-V">i_CTRL-X_CTRL-V</a>  	<code>CTRL-X</code> <code>CTRL-V</code>	complete like in : command line
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-Z">i_CTRL-X_CTRL-Z</a>  	<code>CTRL-X</code> <code>CTRL-Z</code>	stop completion, keeping the text as-is
<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-%5D">i_CTRL-X_CTRL-]</a>  	<code>CTRL-X</code> <code>CTRL-]</code>	complete tags
<a href="/neovim-docs-web/en/insert#i_CTRL-X_s">i_CTRL-X_s</a>  		<code>CTRL-X</code> s	spelling suggestions</div>
<div class="old-help-para">commands in completion mode (see <a href="/neovim-docs-web/en/insert#popupmenu-keys">popupmenu-keys</a>)</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/insert#complete_CTRL-E">complete_CTRL-E</a> <code>CTRL-E</code>	stop completion and go back to original text
<a href="/neovim-docs-web/en/insert#complete_CTRL-Y">complete_CTRL-Y</a> <code>CTRL-Y</code>	accept selected match and stop completion
		<code>CTRL-L</code>		insert one character from the current match
		<code>&lt;CR&gt;</code>		insert currently selected match
		<code>&lt;BS&gt;</code>		delete one character and redo search
		<code>CTRL-H</code>		same as <code>&lt;BS&gt;</code>
		<code>&lt;Up&gt;</code>		select the previous match
		<code>&lt;Down&gt;</code>		select the next match
		<code>&lt;PageUp&gt;</code>	select a match several entries back
		<code>&lt;PageDown&gt;</code>	select a match several entries forward
		other		stop completion and insert the typed character</div>
<div class="old-help-para"><h2 class="help-heading">2. Normal mode<span class="help-heading-tags">						<a name="normal-index"></a><span class="help-tag">normal-index</span></span></h2></div>
<div class="old-help-para">CHAR	 any non-blank character
WORD	 a sequence of non-blank characters
N	 a number entered before the command
<code>{motion}</code> a cursor movement command
Nmove	 the text that is moved over with a <code>{motion}</code>
SECTION	 a section that possibly starts with '}' instead of '{'</div>
<div class="old-help-para">note: 1 = cursor movement command; 2 = can be undone/redone</div>
<div class="old-help-para"><div class="help-column_heading">tag		char	      note action in Normal mode</div><div class="help-column_heading">------------------------------------------------------------------------------</div>		<code>CTRL-@</code>		   not used
<a href="/neovim-docs-web/en/change#CTRL-A">CTRL-A</a>  	<code>CTRL-A</code>		2  add N to number at/after cursor
<a href="/neovim-docs-web/en/scroll#CTRL-B">CTRL-B</a>  	<code>CTRL-B</code>		1  scroll N screens Backwards
<a href="/neovim-docs-web/en/pattern#CTRL-C">CTRL-C</a>  	<code>CTRL-C</code>		   interrupt current (search) command
<a href="/neovim-docs-web/en/scroll#CTRL-D">CTRL-D</a>  	<code>CTRL-D</code>		   scroll Down N lines (default: half a screen)
<a href="/neovim-docs-web/en/scroll#CTRL-E">CTRL-E</a>  	<code>CTRL-E</code>		   scroll N lines upwards (N lines Extra)
<a href="/neovim-docs-web/en/scroll#CTRL-F">CTRL-F</a>  	<code>CTRL-F</code>		1  scroll N screens Forward
<a href="/neovim-docs-web/en/editing#CTRL-G">CTRL-G</a>  	<code>CTRL-G</code>		   display current file name and position
<a href="/neovim-docs-web/en/motion#%3CBS%3E">&lt;BS&gt;</a>  		<code>&lt;BS&gt;</code>		1  same as "h"
<a href="/neovim-docs-web/en/motion#CTRL-H">CTRL-H</a>  	<code>CTRL-H</code>		1  same as "h"
<a href="/neovim-docs-web/en/motion#%3CTab%3E">&lt;Tab&gt;</a>  		<code>&lt;Tab&gt;</code>		1  go to N newer entry in jump list
<a href="/neovim-docs-web/en/motion#CTRL-I">CTRL-I</a>  	<code>CTRL-I</code>		1  same as <code>&lt;Tab&gt;</code>
<a href="/neovim-docs-web/en/motion#%3CNL%3E">&lt;NL&gt;</a>  		<code>&lt;NL&gt;</code>		1  same as "j"
<a href="/neovim-docs-web/en/motion#CTRL-J">CTRL-J</a>  	<code>CTRL-J</code>		1  same as "j"
		<code>CTRL-K</code>		   not used
<a href="/neovim-docs-web/en/various#CTRL-L">CTRL-L</a>  	<code>CTRL-L</code>		   redraw screen
<a href="/neovim-docs-web/en/motion#%3CCR%3E">&lt;CR&gt;</a>  		<code>&lt;CR&gt;</code>		1  cursor to the first CHAR N lines lower
<a href="/neovim-docs-web/en/motion#CTRL-M">CTRL-M</a>  	<code>CTRL-M</code>		1  same as <code>&lt;CR&gt;</code>
<a href="/neovim-docs-web/en/motion#CTRL-N">CTRL-N</a>  	<code>CTRL-N</code>		1  same as "j"
<a href="/neovim-docs-web/en/motion#CTRL-O">CTRL-O</a>  	<code>CTRL-O</code>		1  go to N older entry in jump list
<a href="/neovim-docs-web/en/motion#CTRL-P">CTRL-P</a>  	<code>CTRL-P</code>		1  same as "k"
		<code>CTRL-Q</code>		   not used, or used for terminal control flow
<a href="/neovim-docs-web/en/undo#CTRL-R">CTRL-R</a>  	<code>CTRL-R</code>		2  redo changes which were undone with 'u'
		<code>CTRL-S</code>		   not used, or used for terminal control flow
<a href="/neovim-docs-web/en/tagsrch#CTRL-T">CTRL-T</a>  	<code>CTRL-T</code>		   jump to N older Tag in tag list
<a href="/neovim-docs-web/en/scroll#CTRL-U">CTRL-U</a>  	<code>CTRL-U</code>		   scroll N lines Upwards (default: half a
				   screen)
<a href="/neovim-docs-web/en/visual#CTRL-V">CTRL-V</a>  	<code>CTRL-V</code>		   start blockwise Visual mode
<a href="/neovim-docs-web/en/vimindex#CTRL-W">CTRL-W</a>  	<code>CTRL-W</code> <code>{char}</code>	   window commands, see <a href="/neovim-docs-web/en/vimindex#CTRL-W">CTRL-W</a>
<a href="/neovim-docs-web/en/change#CTRL-X">CTRL-X</a>  	<code>CTRL-X</code>		2  subtract N from number at/after cursor
<a href="/neovim-docs-web/en/scroll#CTRL-Y">CTRL-Y</a>  	<code>CTRL-Y</code>		   scroll N lines downwards
<a href="/neovim-docs-web/en/starting#CTRL-Z">CTRL-Z</a>  	<code>CTRL-Z</code>		   suspend program (or start new shell)
		<code>CTRL-[</code> <code>&lt;Esc&gt;</code>	   not used
<a href="/neovim-docs-web/en/intro#CTRL-%5C_CTRL-N">CTRL-\_CTRL-N</a>  	<code>CTRL-\</code> <code>CTRL-N</code>	   go to Normal mode (no-op)
<a href="/neovim-docs-web/en/intro#CTRL-%5C_CTRL-G">CTRL-\_CTRL-G</a>  	<code>CTRL-\</code> <code>CTRL-G</code>	   go to Normal mode (no-op)
		<code>CTRL-\</code> a - z	   reserved for extensions
		<code>CTRL-\</code> others      not used
<a href="/neovim-docs-web/en/tagsrch#CTRL-%5D">CTRL-]</a>  	<code>CTRL-]</code>		   :ta to ident under cursor
<a href="/neovim-docs-web/en/editing#CTRL-%5E">CTRL-^</a>  	<code>CTRL-^</code>		   edit Nth alternate file (equivalent to
				   ":e #N")
<a href="/neovim-docs-web/en/tabpage#CTRL-%3CTab%3E">CTRL-&lt;Tab&gt;</a>  	<code>CTRL-&lt;</code>Tab&gt;	   same as <code>g&lt;Tab&gt;</code> : go to last accessed tab
				   page
		<code>CTRL-_</code>		   not used</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/motion#%3CSpace%3E">&lt;Space&gt;</a>  	<code>&lt;Space&gt;</code>		1  same as "l"
<a href="/neovim-docs-web/en/change#%21">!</a>  		!{motion}{filter}
				2  filter Nmove text through the <code>{filter}</code>
				   command
<a href="/neovim-docs-web/en/change#%21%21">!!</a>  		!!{filter}	2  filter N lines through the <code>{filter}</code> command
<a href="/neovim-docs-web/en/change#quote">quote</a>  		"{register}  	   use <code>{register}</code> for next delete, yank or put
				   (<code>{.%#:}</code> only work with put)
<a href="/neovim-docs-web/en/pattern#%23">#</a>  		#		1  search backward for the Nth occurrence of
				   the ident under the cursor
<a href="/neovim-docs-web/en/motion#%24">$</a>  		$		1  cursor to the end of Nth next line
<a href="/neovim-docs-web/en/motion#%25">%</a>  		%		1  find the next (curly/square) bracket on
				   this line and go to its match, or go to
				   matching comment bracket, or go to matching
				   preprocessor directive.
<a href="/neovim-docs-web/en/motion#N%25">N%</a>  		<code>{count}</code>%	1  go to N percentage in the file
<a href="/neovim-docs-web/en/change#%26">&amp;</a>  		&amp;		2  repeat last :s
|'|		'{a-zA-Z0-9}	1  cursor to the first CHAR on the line with
				   mark <code>{a-zA-Z0-9}</code>
<a href="/neovim-docs-web/en/motion#''">''</a>  		''		1  cursor to the first CHAR of the line where
				   the cursor was before the latest jump.
<a href="/neovim-docs-web/en/motion#'(">'(</a>  		'(		1  cursor to the first CHAR on the line of the
				   start of the current sentence
<a href="/neovim-docs-web/en/motion#')">')</a>  		')		1  cursor to the first CHAR on the line of the
				   end of the current sentence
<a href="/neovim-docs-web/en/motion#'%3C">'&lt;</a>  		'&lt;		1  cursor to the first CHAR of the line where
				   highlighted area starts/started in the
				   current buffer.
<a href="/neovim-docs-web/en/motion#'%3E">'&gt;</a>  		'&gt;		1  cursor to the first CHAR of the line where
				   highlighted area ends/ended in the current
				   buffer.
<a href="/neovim-docs-web/en/motion#'%5B">'[</a>  		'[		1  cursor to the first CHAR on the line of the
				   start of last operated text or start of put
				   text
<a href="/neovim-docs-web/en/motion#'%5D">']</a>  		']		1  cursor to the first CHAR on the line of the
				   end of last operated text or end of put
				   text
<a href="/neovim-docs-web/en/motion#'%7B">'{</a>  		'{		1  cursor to the first CHAR on the line of the
				   start of the current paragraph
<a href="/neovim-docs-web/en/motion#'%7D">'}</a>  		'}		1  cursor to the first CHAR on the line of the
				   end of the current paragraph
<a href="/neovim-docs-web/en/motion#(">(</a>  		(		1  cursor N sentences backward
<a href="/neovim-docs-web/en/motion#)">)</a>  		)		1  cursor N sentences forward
<a href="/neovim-docs-web/en/pattern#star">star</a>  		*		1  search forward for the Nth occurrence of
				   the ident under the cursor
<a href="/neovim-docs-web/en/motion#%2B">+</a>  		+		1  same as <code>&lt;CR&gt;</code>
<a href="/neovim-docs-web/en/motion#%2C">,</a>  		,		1  repeat latest f, t, F or T in opposite
				   direction N times
<a href="/neovim-docs-web/en/motion#-">-</a>  		-			1  cursor to the first CHAR N lines higher
<a href="/neovim-docs-web/en/repeat#.">.</a>  		.		2  repeat last change with count replaced with
				   N
<a href="/neovim-docs-web/en/pattern#%2F">/</a>  		/{pattern}&lt;CR&gt;	1  search forward for the Nth occurrence of
				   <code>{pattern}</code>
<a href="/neovim-docs-web/en/pattern#%2F%3CCR%3E">/&lt;CR&gt;</a>  		/&lt;CR&gt;		1  search forward for <code>{pattern}</code> of last search
<a href="/neovim-docs-web/en/motion#0">0</a>  		0		1  cursor to the first char of the line
<a href="/neovim-docs-web/en/intro#count">count</a>  		1		   prepend to command to give a count
<a href="/neovim-docs-web/en/intro#count">count</a>  		2			"
<a href="/neovim-docs-web/en/intro#count">count</a>  		3			"
<a href="/neovim-docs-web/en/intro#count">count</a>  		4			"
<a href="/neovim-docs-web/en/intro#count">count</a>  		5			"
<a href="/neovim-docs-web/en/intro#count">count</a>  		6			"
<a href="/neovim-docs-web/en/intro#count">count</a>  		7			"
<a href="/neovim-docs-web/en/intro#count">count</a>  		8			"
<a href="/neovim-docs-web/en/intro#count">count</a>  		9			"
<a href="/neovim-docs-web/en/cmdline#%3A">:</a>  		:		1  start entering an Ex command
<a href="/neovim-docs-web/en/cmdline#N%3A">N:</a>  		<code>{count}</code>:	   start entering an Ex command with range
				   from current line to N-1 lines down
<a href="/neovim-docs-web/en/motion#%3B">;</a>  		;		1  repeat latest f, t, F or T N times
<a href="/neovim-docs-web/en/change#%3C">&lt;</a>  		&lt;{motion}	2  shift Nmove lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>
				   leftwards
<a href="/neovim-docs-web/en/change#%3C%3C">&lt;&lt;</a>  		&lt;&lt;		2  shift N lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> leftwards
<a href="/neovim-docs-web/en/change#%3D">=</a>  		={motion}	2  filter Nmove lines through "indent"
<a href="/neovim-docs-web/en/change#%3D%3D">==</a>  		==		2  filter N lines through "indent"
|&gt;|		&gt;<code>{motion}</code>	2  shift Nmove lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>
				   rightwards
<a href="/neovim-docs-web/en/change#%3E%3E">&gt;&gt;</a>  		&gt;&gt;		2  shift N lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> rightwards
<a href="/neovim-docs-web/en/pattern#%3F">?</a>  		?{pattern}&lt;CR&gt;	1  search backward for the Nth previous
				   occurrence of <code>{pattern}</code>
<a href="/neovim-docs-web/en/pattern#%3F%3CCR%3E">?&lt;CR&gt;</a>  		?&lt;CR&gt;		1  search backward for <code>{pattern}</code> of last search
<a href="/neovim-docs-web/en/repeat#%40">@</a>  		@{a-z}		2  execute the contents of register <code>{a-z}</code>
				   N times
<a href="/neovim-docs-web/en/repeat#%40%3A">@:</a>  		@:		   repeat the previous ":" command N times
<a href="/neovim-docs-web/en/repeat#%40%40">@@</a>  		@@		2  repeat the previous @{a-z} N times
<a href="/neovim-docs-web/en/insert#A">A</a>  		A		2  append text after the end of the line N times
<a href="/neovim-docs-web/en/motion#B">B</a>  		B		1  cursor N WORDS backward
<a href="/neovim-docs-web/en/change#C">C</a>  		["x]C		2  change from the cursor position to the end
				   of the line, and N-1 more lines [into
				   register x]; synonym for "c$"
<a href="/neovim-docs-web/en/change#D">D</a>  		["x]D		2  delete the characters under the cursor
				   until the end of the line and N-1 more
				   lines [into register x]; synonym for "d$"
<a href="/neovim-docs-web/en/motion#E">E</a>  		E		1  cursor forward to the end of WORD N
<a href="/neovim-docs-web/en/motion#F">F</a>  		F{char}		1  cursor to the Nth occurrence of <code>{char}</code> to
				   the left
<a href="/neovim-docs-web/en/motion#G">G</a>  		G		1  cursor to line N, default last line
<a href="/neovim-docs-web/en/motion#H">H</a>  		H		1  cursor to line N from top of screen
<a href="/neovim-docs-web/en/insert#I">I</a>  		I		2  insert text before the first CHAR on the
				   line N times
<a href="/neovim-docs-web/en/change#J">J</a>  		J		2  Join N lines; default is 2
<a href="/neovim-docs-web/en/various#K">K</a>  		K		   lookup Keyword under the cursor with
				   <a href="/neovim-docs-web/en/options#'keywordprg'">'keywordprg'</a>
<a href="/neovim-docs-web/en/motion#L">L</a>  		L		1  cursor to line N from bottom of screen
<a href="/neovim-docs-web/en/motion#M">M</a>  		M		1  cursor to middle line of screen
<a href="/neovim-docs-web/en/pattern#N">N</a>  		N		1  repeat the latest '/' or '?' N times in
				   opposite direction
<a href="/neovim-docs-web/en/insert#O">O</a>  		O		2  begin a new line above the cursor and
				   insert text, repeat N times
<a href="/neovim-docs-web/en/change#P">P</a>  		["x]P		2  put the text [from register x] before the
				   cursor N times
<a href="/neovim-docs-web/en/change#R">R</a>  		R		2  enter replace mode: overtype existing
				   characters, repeat the entered text N-1
				   times
<a href="/neovim-docs-web/en/change#S">S</a>  		["x]S		2  delete N lines [into register x] and start
				   insert; synonym for "cc".
<a href="/neovim-docs-web/en/motion#T">T</a>  		T{char}		1  cursor till after Nth occurrence of <code>{char}</code>
				   to the left
<a href="/neovim-docs-web/en/undo#U">U</a>  		U		2  undo all latest changes on one line
<a href="/neovim-docs-web/en/visual#V">V</a>  		V		   start linewise Visual mode
<a href="/neovim-docs-web/en/motion#W">W</a>  		W		1  cursor N WORDS forward
<a href="/neovim-docs-web/en/change#X">X</a>  		["x]X		2  delete N characters before the cursor [into
				   register x]
<a href="/neovim-docs-web/en/change#Y">Y</a>  		["x]Y		   yank N lines [into register x]; synonym for
				   "yy"
				   Note: Mapped to "y$" by default. <a href="/neovim-docs-web/en/vim_diff#default-mappings">default-mappings</a>
<a href="/neovim-docs-web/en/editing#ZZ">ZZ</a>  		ZZ		   write if buffer changed and close window
<a href="/neovim-docs-web/en/editing#ZQ">ZQ</a>  		ZQ		   close window without writing
<a href="/neovim-docs-web/en/vimindex#%5B">[</a>  		[{char}		   square bracket command (see <a href="/neovim-docs-web/en/vimindex#%5B">[</a> below)
		\		   not used
<a href="/neovim-docs-web/en/vimindex#%5D">]</a>  		]{char}		   square bracket command (see <a href="/neovim-docs-web/en/vimindex#%5D">]</a> below)
<a href="/neovim-docs-web/en/motion#%5E">^</a>  		^		1  cursor to the first CHAR of the line
<a href="/neovim-docs-web/en/motion#_">_</a>  		_		1  cursor to the first CHAR N - 1 lines lower
<a href="/neovim-docs-web/en/motion#%60">`</a>  {a-zA-Z0-9}	1  cursor to the mark {a-zA-Z0-9}
<a href="/neovim-docs-web/en/motion#%60(">`(</a>  (		1  cursor to the start of the current sentence
<a href="/neovim-docs-web/en/motion#%60)">`)</a>  )		1  cursor to the end of the current sentence
<a href="/neovim-docs-web/en/motion#%60%3C">`&lt;</a>  &lt;		1  cursor to the start of the highlighted area
<a href="/neovim-docs-web/en/motion#%60%3E">`&gt;</a>  &gt;		1  cursor to the end of the highlighted area
<a href="/neovim-docs-web/en/motion#%60%5B">`[</a>  [		1  cursor to the start of last operated text
				   or start of putted text
<a href="/neovim-docs-web/en/motion#%60%5D">`]</a>  ]		1  cursor to the end of last operated text or
				   end of putted text
<a href="/neovim-docs-web/en/motion#%60%60">``</a>  		``		1  cursor to the position before latest jump
<a href="/neovim-docs-web/en/motion#%60%7B">`{</a>  {		1  cursor to the start of the current paragraph
<a href="/neovim-docs-web/en/motion#%60%7D">`}</a>  }		1  cursor to the end of the current paragraph
<a href="/neovim-docs-web/en/insert#a">a</a>  		a		2  append text after the cursor N times
<a href="/neovim-docs-web/en/motion#b">b</a>  		b		1  cursor N words backward
<a href="/neovim-docs-web/en/change#c">c</a>  		["x]c{motion}	2  delete Nmove text [into register x] and
				   start insert
<a href="/neovim-docs-web/en/change#cc">cc</a>  		["x]cc		2  delete N lines [into register x] and start
				   insert
<a href="/neovim-docs-web/en/change#d">d</a>  		["x]d{motion}	2  delete Nmove text [into register x]
<a href="/neovim-docs-web/en/change#dd">dd</a>  		["x]dd		2  delete N lines [into register x]
<a href="/neovim-docs-web/en/diff#do">do</a>  		do		2  same as ":diffget"
<a href="/neovim-docs-web/en/diff#dp">dp</a>  		dp		2  same as ":diffput"
<a href="/neovim-docs-web/en/motion#e">e</a>  		e		1  cursor forward to the end of word N
<a href="/neovim-docs-web/en/motion#f">f</a>  		f{char}		1  cursor to Nth occurrence of <code>{char}</code> to the
				   right
<a href="/neovim-docs-web/en/vimindex#g">g</a>  		g{char}		   extended commands, see <a href="/neovim-docs-web/en/vimindex#g">g</a> below
<a href="/neovim-docs-web/en/motion#h">h</a>  		h		1  cursor N chars to the left
<a href="/neovim-docs-web/en/insert#i">i</a>  		i		2  insert text before the cursor N times
<a href="/neovim-docs-web/en/motion#j">j</a>  		j		1  cursor N lines downward
<a href="/neovim-docs-web/en/motion#k">k</a>  		k		1  cursor N lines upward
<a href="/neovim-docs-web/en/motion#l">l</a>  		l		1  cursor N chars to the right
<a href="/neovim-docs-web/en/motion#m">m</a>  		m{A-Za-z}	   set mark <code>{A-Za-z}</code> at cursor position
<a href="/neovim-docs-web/en/pattern#n">n</a>  		n		1  repeat the latest '/' or '?' N times
<a href="/neovim-docs-web/en/insert#o">o</a>  		o		2  begin a new line below the cursor and
				   insert text, repeat N times
<a href="/neovim-docs-web/en/change#p">p</a>  		["x]p		2  put the text [from register x] after the
				   cursor N times
<a href="/neovim-docs-web/en/repeat#q">q</a>  		q{0-9a-zA-Z"}	   record typed characters into named register
				   <code>{0-9a-zA-Z"}</code> (uppercase to append)
<a href="/neovim-docs-web/en/repeat#q">q</a>  		q		   (while recording) stops recording
<a href="/neovim-docs-web/en/repeat#Q">Q</a>  		Q		   replay last recorded macro
<a href="/neovim-docs-web/en/cmdline#q%3A">q:</a>  		q:		   edit : command-line in command-line window
<a href="/neovim-docs-web/en/cmdline#q%2F">q/</a>  		q/		   edit / command-line in command-line window
<a href="/neovim-docs-web/en/cmdline#q%3F">q?</a>  		q?		   edit ? command-line in command-line window
<a href="/neovim-docs-web/en/change#r">r</a>  		r{char}		2  replace N chars with <code>{char}</code>
<a href="/neovim-docs-web/en/change#s">s</a>  		["x]s		2  (substitute) delete N characters [into
				   register x] and start insert
<a href="/neovim-docs-web/en/motion#t">t</a>  		t{char}		1  cursor till before Nth occurrence of <code>{char}</code>
				   to the right
<a href="/neovim-docs-web/en/undo#u">u</a>  		u		2  undo changes
<a href="/neovim-docs-web/en/visual#v">v</a>  		v		   start charwise Visual mode
<a href="/neovim-docs-web/en/motion#w">w</a>  		w		1  cursor N words forward
<a href="/neovim-docs-web/en/change#x">x</a>  		["x]x		2  delete N characters under and after the
				   cursor [into register x]
<a href="/neovim-docs-web/en/change#y">y</a>  		["x]y{motion}	   yank Nmove text [into register x]
<a href="/neovim-docs-web/en/change#yy">yy</a>  		["x]yy		   yank N lines [into register x]
<a href="/neovim-docs-web/en/vimindex#z">z</a>  		z{char}		   commands starting with 'z', see <a href="/neovim-docs-web/en/vimindex#z">z</a> below
<a href="/neovim-docs-web/en/motion#%7B">{</a>  		{		1  cursor N paragraphs backward
<a href="/neovim-docs-web/en/motion#bar">bar</a>  		|		1  cursor to column N
<a href="/neovim-docs-web/en/motion#%7D">}</a>  		}		1  cursor N paragraphs forward
|~|		~		2  <a href="/neovim-docs-web/en/options#'tildeop'">'tildeop'</a> off: switch case of N characters
				   under cursor and move the cursor N
				   characters to the right
|~|		~<code>{motion}</code>	   <a href="/neovim-docs-web/en/options#'tildeop'">'tildeop'</a> on: switch case of Nmove text
<a href="/neovim-docs-web/en/motion#%3CC-End%3E">&lt;C-End&gt;</a>  	<code>&lt;C-End&gt;</code>		1  same as "G"
<a href="/neovim-docs-web/en/motion#%3CC-Home%3E">&lt;C-Home&gt;</a>  	<code>&lt;C-Home&gt;</code>	1  same as "gg"
<a href="/neovim-docs-web/en/motion#%3CC-Left%3E">&lt;C-Left&gt;</a>  	<code>&lt;C-Left&gt;</code>	1  same as "b"
<a href="/neovim-docs-web/en/tagsrch#%3CC-LeftMouse%3E">&lt;C-LeftMouse&gt;</a>  	<code>&lt;C-LeftMouse&gt;</code>	   ":ta" to the keyword at the mouse click
<a href="/neovim-docs-web/en/motion#%3CC-Right%3E">&lt;C-Right&gt;</a>  	<code>&lt;C-Right&gt;</code>	1  same as "w"
<a href="/neovim-docs-web/en/tagsrch#%3CC-RightMouse%3E">&lt;C-RightMouse&gt;</a> <code>&lt;C-RightMouse&gt;</code>	   same as "CTRL-T"
<a href="/neovim-docs-web/en/tabpage#%3CC-Tab%3E">&lt;C-Tab&gt;</a>  	<code>&lt;C-Tab&gt;</code>		   same as "g&lt;Tab&gt;"
<a href="/neovim-docs-web/en/change#%3CDel%3E">&lt;Del&gt;</a>  		["x]&lt;Del&gt;	2  same as "x"
<a href="/neovim-docs-web/en/various#N%3CDel%3E">N&lt;Del&gt;</a>  	<code>{count}</code><code>&lt;Del&gt;</code>	   remove the last digit from <code>{count}</code>
<a href="/neovim-docs-web/en/motion#%3CDown%3E">&lt;Down&gt;</a>  	<code>&lt;Down&gt;</code>		1  same as "j"
<a href="/neovim-docs-web/en/motion#%3CEnd%3E">&lt;End&gt;</a>  		<code>&lt;End&gt;</code>		1  same as "$"
<a href="/neovim-docs-web/en/helphelp#%3CF1%3E">&lt;F1&gt;</a>  		<code>&lt;F1&gt;</code>		   same as <code>&lt;Help&gt;</code>
<a href="/neovim-docs-web/en/helphelp#%3CHelp%3E">&lt;Help&gt;</a>  	<code>&lt;Help&gt;</code>		   open a help window
<a href="/neovim-docs-web/en/motion#%3CHome%3E">&lt;Home&gt;</a>  	<code>&lt;Home&gt;</code>		1  same as "0"
<a href="/neovim-docs-web/en/insert#%3CInsert%3E">&lt;Insert&gt;</a>  	<code>&lt;Insert&gt;</code>	2  same as "i"
<a href="/neovim-docs-web/en/motion#%3CLeft%3E">&lt;Left&gt;</a>  	<code>&lt;Left&gt;</code>		1  same as "h"
<a href="/neovim-docs-web/en/visual#%3CLeftMouse%3E">&lt;LeftMouse&gt;</a>  	<code>&lt;LeftMouse&gt;</code>	1  move cursor to the mouse click position
<a href="/neovim-docs-web/en/change#%3CMiddleMouse%3E">&lt;MiddleMouse&gt;</a>  	<code>&lt;MiddleMouse&gt;</code>	2  same as "gP" at the mouse click position
<a href="/neovim-docs-web/en/scroll#%3CPageDown%3E">&lt;PageDown&gt;</a>  	<code>&lt;PageDown&gt;</code>	   same as <code>CTRL-F</code>
<a href="/neovim-docs-web/en/scroll#%3CPageUp%3E">&lt;PageUp&gt;</a>  	<code>&lt;PageUp&gt;</code>	   same as <code>CTRL-B</code>
<a href="/neovim-docs-web/en/motion#%3CRight%3E">&lt;Right&gt;</a>  	<code>&lt;Right&gt;</code>		1  same as "l"
<a href="/neovim-docs-web/en/visual#%3CRightMouse%3E">&lt;RightMouse&gt;</a>  	<code>&lt;RightMouse&gt;</code>	   start Visual mode, move cursor to the mouse
				   click position
<a href="/neovim-docs-web/en/scroll#%3CS-Down%3E">&lt;S-Down&gt;</a>  	<code>&lt;S-Down&gt;</code>	1  same as <code>CTRL-F</code>
<a href="/neovim-docs-web/en/motion#%3CS-Left%3E">&lt;S-Left&gt;</a>  	<code>&lt;S-Left&gt;</code>	1  same as "b"
<a href="/neovim-docs-web/en/term#%3CS-LeftMouse%3E">&lt;S-LeftMouse&gt;</a>  	<code>&lt;S-LeftMouse&gt;</code>	   same as "*" at the mouse click position
<a href="/neovim-docs-web/en/motion#%3CS-Right%3E">&lt;S-Right&gt;</a>  	<code>&lt;S-Right&gt;</code>	1  same as "w"
<a href="/neovim-docs-web/en/term#%3CS-RightMouse%3E">&lt;S-RightMouse&gt;</a> <code>&lt;S-RightMouse&gt;</code>	   same as "#" at the mouse click position
<a href="/neovim-docs-web/en/scroll#%3CS-Up%3E">&lt;S-Up&gt;</a>  	<code>&lt;S-Up&gt;</code>		1  same as <code>CTRL-B</code>
<a href="/neovim-docs-web/en/undo#%3CUndo%3E">&lt;Undo&gt;</a>  	<code>&lt;Undo&gt;</code>		2  same as "u"
<a href="/neovim-docs-web/en/motion#%3CUp%3E">&lt;Up&gt;</a>  		<code>&lt;Up&gt;</code>		1  same as "k"
<a name="%3CScrollWheelDown%3E"></a><code class="help-tag">&lt;ScrollWheelDown&gt;</code>  	<code>&lt;ScrollWheelDown&gt;</code>	move window three lines down
<a name="%3CS-ScrollWheelDown%3E"></a><code class="help-tag">&lt;S-ScrollWheelDown&gt;</code>  	<code>&lt;S-ScrollWheelDown&gt;</code>	move window one page down
<a name="%3CScrollWheelUp%3E"></a><code class="help-tag">&lt;ScrollWheelUp&gt;</code>  	<code>&lt;ScrollWheelUp&gt;</code>		move window three lines up
<a name="%3CS-ScrollWheelUp%3E"></a><code class="help-tag">&lt;S-ScrollWheelUp&gt;</code>  	<code>&lt;S-ScrollWheelUp&gt;</code>	move window one page up
<a name="%3CScrollWheelLeft%3E"></a><code class="help-tag">&lt;ScrollWheelLeft&gt;</code>  	<code>&lt;ScrollWheelLeft&gt;</code>	move window six columns left
<a name="%3CS-ScrollWheelLeft%3E"></a><code class="help-tag">&lt;S-ScrollWheelLeft&gt;</code>  	<code>&lt;S-ScrollWheelLeft&gt;</code>	move window one page left
<a name="%3CScrollWheelRight%3E"></a><code class="help-tag">&lt;ScrollWheelRight&gt;</code>  	<code>&lt;ScrollWheelRight&gt;</code>	move window six columns right
<a name="%3CS-ScrollWheelRight%3E"></a><code class="help-tag">&lt;S-ScrollWheelRight&gt;</code>  	<code>&lt;S-ScrollWheelRight&gt;</code>	move window one page right</div>
<div class="old-help-para"><h2 class="help-heading">2.1 Text objects<span class="help-heading-tags">						<a name="objects"></a><span class="help-tag">objects</span></span></h2></div>
<div class="old-help-para">These can be used after an operator or in Visual mode to select an object.</div>
<div class="old-help-para"><div class="help-column_heading">tag		command		   action in op-pending and Visual mode</div><div class="help-column_heading">------------------------------------------------------------------------------</div><a href="/neovim-docs-web/en/motion#v_aquote">v_aquote</a>  	a"		   double quoted string
<a href="/neovim-docs-web/en/motion#v_a'">v_a'</a>  		a'		   single quoted string
<a href="/neovim-docs-web/en/motion#v_a(">v_a(</a>  		a(		   same as ab
<a href="/neovim-docs-web/en/motion#v_a)">v_a)</a>  		a)		   same as ab
<a href="/neovim-docs-web/en/motion#v_a%3C">v_a&lt;</a>  		a&lt;		   "a &lt;&gt;" from '&lt;' to the matching '&gt;'
<a href="/neovim-docs-web/en/motion#v_a%3E">v_a&gt;</a>  		a&gt;		   same as a&lt;
<a href="/neovim-docs-web/en/motion#v_aB">v_aB</a>  		aB		   "a Block" from "[{" to "]}" (with brackets)
<a href="/neovim-docs-web/en/motion#v_aW">v_aW</a>  		aW		   "a WORD" (with white space)
<a href="/neovim-docs-web/en/motion#v_a%5B">v_a[</a>  		a[		   "a []" from '[' to the matching ']'
<a href="/neovim-docs-web/en/motion#v_a%5D">v_a]</a>  		a]		   same as a[
<a href="/neovim-docs-web/en/motion#v_a%60">v_a`</a>  		a`		   string in backticks
<a href="/neovim-docs-web/en/motion#v_ab">v_ab</a>  		ab		   "a block" from "[(" to "])" (with braces)
<a href="/neovim-docs-web/en/motion#v_ap">v_ap</a>  		ap		   "a paragraph" (with white space)
<a href="/neovim-docs-web/en/motion#v_as">v_as</a>  		as		   "a sentence" (with white space)
<a href="/neovim-docs-web/en/motion#v_at">v_at</a>  		at		   "a tag block" (with white space)
<a href="/neovim-docs-web/en/motion#v_aw">v_aw</a>  		aw		   "a word" (with white space)
<a href="/neovim-docs-web/en/motion#v_a%7B">v_a{</a>  		a{		   same as aB
<a href="/neovim-docs-web/en/motion#v_a%7D">v_a}</a>  		a}		   same as aB
<a href="/neovim-docs-web/en/motion#v_iquote">v_iquote</a>  	i"		   double quoted string without the quotes
<a href="/neovim-docs-web/en/motion#v_i'">v_i'</a>  		i'		   single quoted string without the quotes
<a href="/neovim-docs-web/en/motion#v_i(">v_i(</a>  		i(		   same as ib
<a href="/neovim-docs-web/en/motion#v_i)">v_i)</a>  		i)		   same as ib
<a href="/neovim-docs-web/en/motion#v_i%3C">v_i&lt;</a>  		i&lt;		   "inner &lt;&gt;" from '&lt;' to the matching '&gt;'
<a href="/neovim-docs-web/en/motion#v_i%3E">v_i&gt;</a>  		i&gt;		   same as i&lt;
<a href="/neovim-docs-web/en/motion#v_iB">v_iB</a>  		iB		   "inner Block" from "[{" and "]}"
<a href="/neovim-docs-web/en/motion#v_iW">v_iW</a>  		iW		   "inner WORD"
<a href="/neovim-docs-web/en/motion#v_i%5B">v_i[</a>  		i[		   "inner []" from '[' to the matching ']'
<a href="/neovim-docs-web/en/motion#v_i%5D">v_i]</a>  		i]		   same as i[
<a href="/neovim-docs-web/en/motion#v_i%60">v_i`</a>  		i`		   string in backticks without the backticks
<a href="/neovim-docs-web/en/motion#v_ib">v_ib</a>  		ib		   "inner block" from "[(" to "])"
<a href="/neovim-docs-web/en/motion#v_ip">v_ip</a>  		ip		   "inner paragraph"
<a href="/neovim-docs-web/en/motion#v_is">v_is</a>  		is		   "inner sentence"
<a href="/neovim-docs-web/en/motion#v_it">v_it</a>  		it		   "inner tag block"
<a href="/neovim-docs-web/en/motion#v_iw">v_iw</a>  		iw		   "inner word"
<a href="/neovim-docs-web/en/motion#v_i%7B">v_i{</a>  		i{		   same as iB
<a href="/neovim-docs-web/en/motion#v_i%7D">v_i}</a>  		i}		   same as iB</div>
<div class="old-help-para"><h2 class="help-heading">2.2 Window commands<span class="help-heading-tags">						<a name="CTRL-W"></a><span class="help-tag">CTRL-W</span></span></h2></div>
<div class="old-help-para"><div class="help-column_heading">tag		command		   action in Normal mode</div><div class="help-column_heading">------------------------------------------------------------------------------</div><a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-B">CTRL-W_CTRL-B</a>  	<code>CTRL-W</code> <code>CTRL-B</code>	   same as "CTRL-W b"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-C">CTRL-W_CTRL-C</a>  	<code>CTRL-W</code> <code>CTRL-C</code>	   same as "CTRL-W c"
<a href="/neovim-docs-web/en/tagsrch#CTRL-W_CTRL-D">CTRL-W_CTRL-D</a>  	<code>CTRL-W</code> <code>CTRL-D</code>	   same as "CTRL-W d"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-F">CTRL-W_CTRL-F</a>  	<code>CTRL-W</code> <code>CTRL-F</code>	   same as "CTRL-W f"
		<code>CTRL-W</code> <code>CTRL-G</code>	   same as "CTRL-W g .."
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-H">CTRL-W_CTRL-H</a>  	<code>CTRL-W</code> <code>CTRL-H</code>	   same as "CTRL-W h"
<a href="/neovim-docs-web/en/tagsrch#CTRL-W_CTRL-I">CTRL-W_CTRL-I</a>  	<code>CTRL-W</code> <code>CTRL-I</code>	   same as "CTRL-W i"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-J">CTRL-W_CTRL-J</a>  	<code>CTRL-W</code> <code>CTRL-J</code>	   same as "CTRL-W j"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-K">CTRL-W_CTRL-K</a>  	<code>CTRL-W</code> <code>CTRL-K</code>	   same as "CTRL-W k"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-L">CTRL-W_CTRL-L</a>  	<code>CTRL-W</code> <code>CTRL-L</code>	   same as "CTRL-W l"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-N">CTRL-W_CTRL-N</a>  	<code>CTRL-W</code> <code>CTRL-N</code>	   same as "CTRL-W n"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-O">CTRL-W_CTRL-O</a>  	<code>CTRL-W</code> <code>CTRL-O</code>	   same as "CTRL-W o"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-P">CTRL-W_CTRL-P</a>  	<code>CTRL-W</code> <code>CTRL-P</code>	   same as "CTRL-W p"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-Q">CTRL-W_CTRL-Q</a>  	<code>CTRL-W</code> <code>CTRL-Q</code>	   same as "CTRL-W q"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-R">CTRL-W_CTRL-R</a>  	<code>CTRL-W</code> <code>CTRL-R</code>	   same as "CTRL-W r"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-S">CTRL-W_CTRL-S</a>  	<code>CTRL-W</code> <code>CTRL-S</code>	   same as "CTRL-W s"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-T">CTRL-W_CTRL-T</a>  	<code>CTRL-W</code> <code>CTRL-T</code>	   same as "CTRL-W t"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-V">CTRL-W_CTRL-V</a>  	<code>CTRL-W</code> <code>CTRL-V</code>	   same as "CTRL-W v"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-W">CTRL-W_CTRL-W</a>  	<code>CTRL-W</code> <code>CTRL-W</code>	   same as "CTRL-W w"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-X">CTRL-W_CTRL-X</a>  	<code>CTRL-W</code> <code>CTRL-X</code>	   same as "CTRL-W x"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-Z">CTRL-W_CTRL-Z</a>  	<code>CTRL-W</code> <code>CTRL-Z</code>	   same as "CTRL-W z"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-%5D">CTRL-W_CTRL-]</a>  	<code>CTRL-W</code> <code>CTRL-]</code>	   same as "CTRL-W ]"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-%5E">CTRL-W_CTRL-^</a>  	<code>CTRL-W</code> <code>CTRL-^</code>	   same as "CTRL-W ^"
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-_">CTRL-W_CTRL-_</a>  	<code>CTRL-W</code> <code>CTRL-_</code>	   same as "CTRL-W _"
<a href="/neovim-docs-web/en/windows#CTRL-W_%2B">CTRL-W_+</a>  	<code>CTRL-W</code> +	   increase current window height N lines
<a href="/neovim-docs-web/en/windows#CTRL-W_-">CTRL-W_-</a>  	<code>CTRL-W</code> -		   decrease current window height N lines
<a href="/neovim-docs-web/en/windows#CTRL-W_%3C">CTRL-W_&lt;</a>  	<code>CTRL-W</code> &lt;	   decrease current window width N columns
<a href="/neovim-docs-web/en/windows#CTRL-W_%3D">CTRL-W_=</a>  	<code>CTRL-W</code> =	   make all windows the same height &amp; width
<a href="/neovim-docs-web/en/windows#CTRL-W_%3E">CTRL-W_&gt;</a>  	<code>CTRL-W</code> &gt;	   increase current window width N columns
<a href="/neovim-docs-web/en/windows#CTRL-W_H">CTRL-W_H</a>  	<code>CTRL-W</code> H	   move current window to the far left
<a href="/neovim-docs-web/en/windows#CTRL-W_J">CTRL-W_J</a>  	<code>CTRL-W</code> J	   move current window to the very bottom
<a href="/neovim-docs-web/en/windows#CTRL-W_K">CTRL-W_K</a>  	<code>CTRL-W</code> K	   move current window to the very top
<a href="/neovim-docs-web/en/windows#CTRL-W_L">CTRL-W_L</a>  	<code>CTRL-W</code> L	   move current window to the far right
<a href="/neovim-docs-web/en/windows#CTRL-W_P">CTRL-W_P</a>  	<code>CTRL-W</code> P	   go to preview window
<a href="/neovim-docs-web/en/windows#CTRL-W_R">CTRL-W_R</a>  	<code>CTRL-W</code> R	   rotate windows upwards N times
<a href="/neovim-docs-web/en/windows#CTRL-W_S">CTRL-W_S</a>  	<code>CTRL-W</code> S	   same as "CTRL-W s"
<a href="/neovim-docs-web/en/windows#CTRL-W_T">CTRL-W_T</a>  	<code>CTRL-W</code> T	   move current window to a new tab page
<a href="/neovim-docs-web/en/windows#CTRL-W_W">CTRL-W_W</a>  	<code>CTRL-W</code> W	   go to N previous window (wrap around)
<a href="/neovim-docs-web/en/windows#CTRL-W_%5D">CTRL-W_]</a>  	<code>CTRL-W</code> ]	   split window and jump to tag under cursor
<a href="/neovim-docs-web/en/windows#CTRL-W_%5E">CTRL-W_^</a>  	<code>CTRL-W</code> ^	   split current window and edit alternate
				   file N
<a href="/neovim-docs-web/en/windows#CTRL-W__">CTRL-W__</a>  	<code>CTRL-W</code> _	   set current window height to N (default:
				   very high)
<a href="/neovim-docs-web/en/windows#CTRL-W_b">CTRL-W_b</a>  	<code>CTRL-W</code> b	   go to bottom window
<a href="/neovim-docs-web/en/windows#CTRL-W_c">CTRL-W_c</a>  	<code>CTRL-W</code> c	   close current window (like <a href="/neovim-docs-web/en/windows#%3Aclose">:close</a>)
<a href="/neovim-docs-web/en/tagsrch#CTRL-W_d">CTRL-W_d</a>  	<code>CTRL-W</code> d	   split window and jump to definition under
				   the cursor
<a href="/neovim-docs-web/en/windows#CTRL-W_f">CTRL-W_f</a>  	<code>CTRL-W</code> f	   split window and edit file name under the
				   cursor
<a href="/neovim-docs-web/en/windows#CTRL-W_F">CTRL-W_F</a>  	<code>CTRL-W</code> F	   split window and edit file name under the
				   cursor and jump to the line number
				   following the file name.
<a href="/neovim-docs-web/en/windows#CTRL-W_g_CTRL-%5D">CTRL-W_g_CTRL-]</a> <code>CTRL-W</code> g <code>CTRL-]</code>  split window and do <a href="/neovim-docs-web/en/tagsrch#%3Atjump">:tjump</a> to tag under
				   cursor
<a href="/neovim-docs-web/en/windows#CTRL-W_g%5D">CTRL-W_g]</a>  	<code>CTRL-W</code> g ]	   split window and do <a href="/neovim-docs-web/en/tagsrch#%3Atselect">:tselect</a> for tag
				   under cursor
<a href="/neovim-docs-web/en/windows#CTRL-W_g%7D">CTRL-W_g}</a>  	<code>CTRL-W</code> g }	   do a <a href="/neovim-docs-web/en/tagsrch#%3Aptjump">:ptjump</a> to the tag under the cursor
<a href="/neovim-docs-web/en/windows#CTRL-W_gf">CTRL-W_gf</a>  	<code>CTRL-W</code> g f	   edit file name under the cursor in a new
				   tab page
<a href="/neovim-docs-web/en/windows#CTRL-W_gF">CTRL-W_gF</a>  	<code>CTRL-W</code> g F	   edit file name under the cursor in a new
				   tab page and jump to the line number
				   following the file name.
<a href="/neovim-docs-web/en/windows#CTRL-W_gt">CTRL-W_gt</a>  	<code>CTRL-W</code> g t	   same as <code>gt</code>: go to next tab page
<a href="/neovim-docs-web/en/windows#CTRL-W_gT">CTRL-W_gT</a>  	<code>CTRL-W</code> g T	   same as <code>gT</code>: go to previous tab page
<a href="/neovim-docs-web/en/tabpage#CTRL-W_g%3CTab%3E">CTRL-W_g&lt;Tab&gt;</a>  	<code>CTRL-W</code> g <code>&lt;Tab&gt;</code>	   same as <a href="/neovim-docs-web/en/tabpage#g%3CTab%3E">g&lt;Tab&gt;</a>: go to last accessed tab
				   page
<a href="/neovim-docs-web/en/windows#CTRL-W_h">CTRL-W_h</a>  	<code>CTRL-W</code> h	   go to Nth left window (stop at first window)
<a href="/neovim-docs-web/en/tagsrch#CTRL-W_i">CTRL-W_i</a>  	<code>CTRL-W</code> i	   split window and jump to declaration of
				   identifier under the cursor
<a href="/neovim-docs-web/en/windows#CTRL-W_j">CTRL-W_j</a>  	<code>CTRL-W</code> j	   go N windows down (stop at last window)
<a href="/neovim-docs-web/en/windows#CTRL-W_k">CTRL-W_k</a>  	<code>CTRL-W</code> k	   go N windows up (stop at first window)
<a href="/neovim-docs-web/en/windows#CTRL-W_l">CTRL-W_l</a>  	<code>CTRL-W</code> l	   go to Nth right window (stop at last window)
<a href="/neovim-docs-web/en/windows#CTRL-W_n">CTRL-W_n</a>  	<code>CTRL-W</code> n	   open new window, N lines high
<a href="/neovim-docs-web/en/windows#CTRL-W_o">CTRL-W_o</a>  	<code>CTRL-W</code> o	   close all but current window (like <a href="/neovim-docs-web/en/windows#%3Aonly">:only</a>)
<a href="/neovim-docs-web/en/windows#CTRL-W_p">CTRL-W_p</a>  	<code>CTRL-W</code> p	   go to previous (last accessed) window
<a href="/neovim-docs-web/en/windows#CTRL-W_q">CTRL-W_q</a>  	<code>CTRL-W</code> q	   quit current window (like <a href="/neovim-docs-web/en/editing#%3Aquit">:quit</a>)
<a href="/neovim-docs-web/en/windows#CTRL-W_r">CTRL-W_r</a>  	<code>CTRL-W</code> r	   rotate windows downwards N times
<a href="/neovim-docs-web/en/windows#CTRL-W_s">CTRL-W_s</a>  	<code>CTRL-W</code> s	   split current window in two parts, new
				   window N lines high
<a href="/neovim-docs-web/en/windows#CTRL-W_t">CTRL-W_t</a>  	<code>CTRL-W</code> t	   go to top window
<a href="/neovim-docs-web/en/windows#CTRL-W_v">CTRL-W_v</a>  	<code>CTRL-W</code> v	   split current window vertically, new window
				   N columns wide
<a href="/neovim-docs-web/en/windows#CTRL-W_w">CTRL-W_w</a>  	<code>CTRL-W</code> w	   go to N next window (wrap around)
<a href="/neovim-docs-web/en/windows#CTRL-W_x">CTRL-W_x</a>  	<code>CTRL-W</code> x	   exchange current window with window N
				   (default: next window)
<a href="/neovim-docs-web/en/windows#CTRL-W_z">CTRL-W_z</a>  	<code>CTRL-W</code> z	   close preview window
<a href="/neovim-docs-web/en/windows#CTRL-W_bar">CTRL-W_bar</a>  	<code>CTRL-W</code> |	   set window width to N columns
<a href="/neovim-docs-web/en/windows#CTRL-W_%7D">CTRL-W_}</a>  	<code>CTRL-W</code> }	   show tag under cursor in preview window
<a href="/neovim-docs-web/en/windows#CTRL-W_%3CDown%3E">CTRL-W_&lt;Down&gt;</a>  	<code>CTRL-W</code> <code>&lt;Down&gt;</code>	   same as "CTRL-W j"
<a href="/neovim-docs-web/en/windows#CTRL-W_%3CUp%3E">CTRL-W_&lt;Up&gt;</a>  	<code>CTRL-W</code> <code>&lt;Up&gt;</code>	   same as "CTRL-W k"
<a href="/neovim-docs-web/en/windows#CTRL-W_%3CLeft%3E">CTRL-W_&lt;Left&gt;</a>  	<code>CTRL-W</code> <code>&lt;Left&gt;</code>	   same as "CTRL-W h"
<a href="/neovim-docs-web/en/windows#CTRL-W_%3CRight%3E">CTRL-W_&lt;Right&gt;</a> <code>CTRL-W</code> <code>&lt;Right&gt;</code>	   same as "CTRL-W l"</div>
<div class="old-help-para"><h2 class="help-heading">2.3 Square bracket commands<span class="help-heading-tags">					<a name="%5B"></a><span class="help-tag">[</span> <a name="%5D"></a><span class="help-tag">]</span></span></h2></div>
<div class="old-help-para"><div class="help-column_heading">tag		char	      note action in Normal mode</div><div class="help-column_heading">------------------------------------------------------------------------------</div><a href="/neovim-docs-web/en/tagsrch#%5B_CTRL-D">[_CTRL-D</a>  	[ <code>CTRL-D</code>	   jump to first #define found in current and
				   included files matching the word under the
				   cursor, start searching at beginning of
				   current file
<a href="/neovim-docs-web/en/tagsrch#%5B_CTRL-I">[_CTRL-I</a>  	[ <code>CTRL-I</code>	   jump to first line in current and included
				   files that contains the word under the
				   cursor, start searching at beginning of
				   current file
<a href="/neovim-docs-web/en/motion#%5B%23">[#</a>  		[#		1  cursor to N previous unmatched #if, #else
				   or #ifdef
<a href="/neovim-docs-web/en/motion#%5B'">['</a>  		['		1  cursor to previous lowercase mark, on first
				   non-blank
<a href="/neovim-docs-web/en/motion#%5B(">[(</a>  		[(		1  cursor N times back to unmatched '('
<a href="/neovim-docs-web/en/motion#%5Bstar">[star</a>  		[*		1  same as "[/"
<a href="/neovim-docs-web/en/motion#%5B%60">[`</a>  		[`		1  cursor to previous lowercase mark
<a href="/neovim-docs-web/en/motion#%5B%2F">[/</a>  		[/		1  cursor to N previous start of a C comment
<a href="/neovim-docs-web/en/tagsrch#%5BD">[D</a>  		[D		   list all defines found in current and
				   included files matching the word under the
				   cursor, start searching at beginning of
				   current file
<a href="/neovim-docs-web/en/tagsrch#%5BI">[I</a>  		[I		   list all lines found in current and
				   included files that contain the word under
				   the cursor, start searching at beginning of
				   current file
<a href="/neovim-docs-web/en/change#%5BP">[P</a>  		[P		2  same as "[p"
<a href="/neovim-docs-web/en/motion#%5B%5B">[[</a>  		[[		1  cursor N sections backward
<a href="/neovim-docs-web/en/motion#%5B%5D">[]</a>  		[]		1  cursor N SECTIONS backward
<a href="/neovim-docs-web/en/diff#%5Bc">[c</a>  		[c		1  cursor N times backwards to start of change
<a href="/neovim-docs-web/en/tagsrch#%5Bd">[d</a>  		[d		   show first #define found in current and
				   included files matching the word under the
				   cursor, start searching at beginning of
				   current file
<a href="/neovim-docs-web/en/deprecated#%5Bf">[f</a>  		[f		   same as "gf"
<a href="/neovim-docs-web/en/tagsrch#%5Bi">[i</a>  		[i		   show first line found in current and
				   included files that contains the word under
				   the cursor, start searching at beginning of
				   current file
<a href="/neovim-docs-web/en/motion#%5Bm">[m</a>  		[m		1  cursor N times back to start of member
				   function
<a href="/neovim-docs-web/en/change#%5Bp">[p</a>  		[p		2  like "P", but adjust indent to current line
<a href="/neovim-docs-web/en/spell#%5Bs">[s</a>  		[s		1  move to the previous misspelled word
<a href="/neovim-docs-web/en/fold#%5Bz">[z</a>  		[z		1  move to start of open fold
<a href="/neovim-docs-web/en/motion#%5B%7B">[{</a>  		[{		1  cursor N times back to unmatched '{'
<a href="/neovim-docs-web/en/change#%5B%3CMiddleMouse%3E">[&lt;MiddleMouse&gt;</a> [&lt;MiddleMouse&gt;	2  same as "[p"</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/tagsrch#%5D_CTRL-D">]_CTRL-D</a>  	] <code>CTRL-D</code>	   jump to first #define found in current and
				   included files matching the word under the
				   cursor, start searching at cursor position
<a href="/neovim-docs-web/en/tagsrch#%5D_CTRL-I">]_CTRL-I</a>  	] <code>CTRL-I</code>	   jump to first line in current and included
				   files that contains the word under the
				   cursor, start searching at cursor position
<a href="/neovim-docs-web/en/motion#%5D%23">]#</a>  		]#		1  cursor to N next unmatched #endif or #else
<a href="/neovim-docs-web/en/motion#%5D'">]'</a>  		]'		1  cursor to next lowercase mark, on first
				   non-blank
<a href="/neovim-docs-web/en/motion#%5D)">])</a>  		])		1  cursor N times forward to unmatched ')'
<a href="/neovim-docs-web/en/motion#%5Dstar">]star</a>  		]*		1  same as "]/"
<a href="/neovim-docs-web/en/motion#%5D%60">]`</a>  		]`		1  cursor to next lowercase mark
<a href="/neovim-docs-web/en/motion#%5D%2F">]/</a>  		]/		1  cursor to N next end of a C comment
<a href="/neovim-docs-web/en/tagsrch#%5DD">]D</a>  		]D		   list all #defines found in current and
				   included files matching the word under the
				   cursor, start searching at cursor position
<a href="/neovim-docs-web/en/tagsrch#%5DI">]I</a>  		]I		   list all lines found in current and
				   included files that contain the word under
				   the cursor, start searching at cursor
				   position
<a href="/neovim-docs-web/en/change#%5DP">]P</a>  		]P		2  same as "[p"
<a href="/neovim-docs-web/en/motion#%5D%5B">][</a>  		][		1  cursor N SECTIONS forward
<a href="/neovim-docs-web/en/motion#%5D%5D">]]</a>  		]]		1  cursor N sections forward
<a href="/neovim-docs-web/en/diff#%5Dc">]c</a>  		]c		1  cursor N times forward to start of change
<a href="/neovim-docs-web/en/tagsrch#%5Dd">]d</a>  		]d		   show first #define found in current and
				   included files matching the word under the
				   cursor, start searching at cursor position
<a href="/neovim-docs-web/en/deprecated#%5Df">]f</a>  		]f		   same as "gf"
<a href="/neovim-docs-web/en/tagsrch#%5Di">]i</a>  		]i		   show first line found in current and
				   included files that contains the word under
				   the cursor, start searching at cursor
				   position
<a href="/neovim-docs-web/en/motion#%5Dm">]m</a>  		]m		1  cursor N times forward to end of member
				   function
<a href="/neovim-docs-web/en/change#%5Dp">]p</a>  		]p		2  like "p", but adjust indent to current line
<a href="/neovim-docs-web/en/spell#%5Ds">]s</a>  		]s		1  move to next misspelled word
<a href="/neovim-docs-web/en/fold#%5Dz">]z</a>  		]z		1  move to end of open fold
<a href="/neovim-docs-web/en/motion#%5D%7D">]}</a>  		]}		1  cursor N times forward to unmatched '}'
<a href="/neovim-docs-web/en/change#%5D%3CMiddleMouse%3E">]&lt;MiddleMouse&gt;</a> ]&lt;MiddleMouse&gt;	2  same as "]p"</div>
<div class="old-help-para"><h2 class="help-heading">2.4 Commands starting with 'g'<span class="help-heading-tags">						<a name="g"></a><span class="help-tag">g</span></span></h2></div>
<div class="old-help-para"><div class="help-column_heading">tag		char	      note action in Normal mode</div><div class="help-column_heading">------------------------------------------------------------------------------</div>g_CTRL-A	g <code>CTRL-A</code>	   dump a memory profile
<a href="/neovim-docs-web/en/editing#g_CTRL-G">g_CTRL-G</a>  	g <code>CTRL-G</code>	   show information about current cursor
				   position
<a href="/neovim-docs-web/en/visual#g_CTRL-H">g_CTRL-H</a>  	g <code>CTRL-H</code>	   start Select block mode
<a href="/neovim-docs-web/en/tagsrch#g_CTRL-%5D">g_CTRL-]</a>  	g <code>CTRL-]</code>	   <a href="/neovim-docs-web/en/tagsrch#%3Atjump">:tjump</a> to the tag under the cursor
<a href="/neovim-docs-web/en/pattern#g%23">g#</a>  		g#		1  like "#", but without using "\&lt;" and "\&gt;"
<a href="/neovim-docs-web/en/motion#g%24">g$</a>  		g$		1  when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> off go to rightmost character of
				   the current line that is on the screen;
				   when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> on go to the rightmost character
				   of the current screen line
<a href="/neovim-docs-web/en/change#g%26">g&amp;</a>  		g&amp;		2  repeat last ":s" on all lines
<a href="/neovim-docs-web/en/motion#g'">g'</a>  		g'{mark}	1  like |'| but without changing the jumplist
<a href="/neovim-docs-web/en/motion#g%60">g`</a>  		g`{mark}	1  like <a href="/neovim-docs-web/en/motion#%60">`</a> but without changing the jumplist
<a href="/neovim-docs-web/en/pattern#gstar">gstar</a>  		g*		1  like "*", but without using "\&lt;" and "\&gt;"
<a href="/neovim-docs-web/en/undo#g%2B">g+</a>  		g+		   go to newer text state N times
<a href="/neovim-docs-web/en/motion#g%2C">g,</a>  		g,		1  go to N newer position in change list
<a href="/neovim-docs-web/en/undo#g-">g-</a>  		g-		   go to older text state N times
<a href="/neovim-docs-web/en/motion#g0">g0</a>  		g0		1  when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> off go to leftmost character of
				   the current line that is on the screen;
				   when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> on go to the leftmost character
				   of the current screen line
<a href="/neovim-docs-web/en/various#g8">g8</a>  		g8		   print hex value of bytes used in UTF-8
				   character under the cursor
<a href="/neovim-docs-web/en/motion#g%3B">g;</a>  		g;		1  go to N older position in change list
<a href="/neovim-docs-web/en/message#g%3C">g&lt;</a>  		g&lt;		   display previous command output
<a href="/neovim-docs-web/en/change#g%3F">g?</a>  		g?		2  Rot13 encoding operator
<a href="/neovim-docs-web/en/change#g%3Fg%3F">g?g?</a>  		g??		2  Rot13 encode current line
<a href="/neovim-docs-web/en/change#g%3Fg%3F">g?g?</a>  		g?g?		2  Rot13 encode current line
<a href="/neovim-docs-web/en/pattern#gD">gD</a>  		gD		1  go to definition of word under the cursor
				   in current file
<a href="/neovim-docs-web/en/motion#gE">gE</a>  		gE		1  go backwards to the end of the previous
				   WORD
<a href="/neovim-docs-web/en/visual#gH">gH</a>  		gH		   start Select line mode
<a href="/neovim-docs-web/en/insert#gI">gI</a>  		gI		2  like "I", but always start in column 1
<a href="/neovim-docs-web/en/change#gJ">gJ</a>  		gJ		2  join lines without inserting space
<a href="/neovim-docs-web/en/visual#gN">gN</a>  		gN	      1,2  find the previous match with the last used
				   search pattern and Visually select it
<a href="/neovim-docs-web/en/change#gP">gP</a>  		["x]gP		2  put the text [from register x] before the
				   cursor N times, leave the cursor after it
<a href="/neovim-docs-web/en/intro#gQ">gQ</a>  		gQ		    switch to "Ex" mode with Vim editing
<a href="/neovim-docs-web/en/change#gR">gR</a>  		gR		2  enter Virtual Replace mode
<a href="/neovim-docs-web/en/tabpage#gT">gT</a>  		gT		   go to the previous tab page
<a href="/neovim-docs-web/en/change#gU">gU</a>  		gU{motion}	2  make Nmove text uppercase
<a href="/neovim-docs-web/en/visual#gV">gV</a>  		gV		   don't reselect the previous Visual area
				   when executing a mapping or menu in Select
				   mode
<a href="/neovim-docs-web/en/tagsrch#g%5D">g]</a>  		g]		   :tselect on the tag under the cursor
<a href="/neovim-docs-web/en/motion#g%5E">g^</a>  		g^		1  when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> off go to leftmost non-white
				   character of the current line that is on
				   the screen; when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> on go to the
				   leftmost non-white character of the current
				   screen line
<a href="/neovim-docs-web/en/motion#g_">g_</a>  		g_		1  cursor to the last CHAR N - 1 lines lower
<a href="/neovim-docs-web/en/various#ga">ga</a>  		ga		   print ascii value of character under the
				   cursor
<a href="/neovim-docs-web/en/pattern#gd">gd</a>  		gd		1  go to definition of word under the cursor
				   in current function
<a href="/neovim-docs-web/en/motion#ge">ge</a>  		ge		1  go backwards to the end of the previous
				   word
<a href="/neovim-docs-web/en/editing#gf">gf</a>  		gf		   start editing the file whose name is under
				   the cursor
<a href="/neovim-docs-web/en/editing#gF">gF</a>  		gF		   start editing the file whose name is under
				   the cursor and jump to the line number
				   following the filename.
<a href="/neovim-docs-web/en/motion#gg">gg</a>  		gg		1  cursor to line N, default first line
<a href="/neovim-docs-web/en/visual#gh">gh</a>  		gh		   start Select mode
<a href="/neovim-docs-web/en/insert#gi">gi</a>  		gi		2  like "i", but first move to the <a href="/neovim-docs-web/en/motion#'%5E">'^</a> mark
<a href="/neovim-docs-web/en/motion#gj">gj</a>  		gj		1  like "j", but when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> on go N screen
				   lines down
<a href="/neovim-docs-web/en/motion#gk">gk</a>  		gk		1  like "k", but when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> on go N screen
				   lines up
<a href="/neovim-docs-web/en/motion#gm">gm</a>  		gm		1  go to character at middle of the screenline
<a href="/neovim-docs-web/en/motion#gM">gM</a>  		gM		1  go to character at middle of the text line
<a href="/neovim-docs-web/en/visual#gn">gn</a>  		gn	      1,2  find the next match with the last used
				   search pattern and Visually select it
<a href="/neovim-docs-web/en/motion#go">go</a>  		go		1  cursor to byte N in the buffer
<a href="/neovim-docs-web/en/change#gp">gp</a>  		["x]gp		2  put the text [from register x] after the
				   cursor N times, leave the cursor after it
<a href="/neovim-docs-web/en/change#gq">gq</a>  		gq{motion}	2  format Nmove text
<a href="/neovim-docs-web/en/change#gr">gr</a>  		gr{char}	2  virtual replace N chars with <code>{char}</code>
<a href="/neovim-docs-web/en/various#gs">gs</a>  		gs		   go to sleep for N seconds (default 1)
<a href="/neovim-docs-web/en/tabpage#gt">gt</a>  		gt		   go to the next tab page
<a href="/neovim-docs-web/en/change#gu">gu</a>  		gu{motion}	2  make Nmove text lowercase
<a href="/neovim-docs-web/en/visual#gv">gv</a>  		gv		   reselect the previous Visual area
<a href="/neovim-docs-web/en/change#gw">gw</a>  		gw{motion}	2  format Nmove text and keep cursor
<a href="/neovim-docs-web/en/pi_netrw#netrw-gx">netrw-gx</a>  	gx		   execute application for file name under the
				   cursor (only with <a href="/neovim-docs-web/en/pi_netrw#netrw">netrw</a> plugin)
<a href="/neovim-docs-web/en/map#g%40">g@</a>  		g@{motion}	   call <a href="/neovim-docs-web/en/options#'operatorfunc'">'operatorfunc'</a>
<a href="/neovim-docs-web/en/change#g~">g~</a>  		g~{motion}	2  swap case for Nmove text
<a href="/neovim-docs-web/en/motion#g%3CDown%3E">g&lt;Down&gt;</a>  	g&lt;Down&gt;		1  same as "gj"
<a href="/neovim-docs-web/en/motion#g%3CEnd%3E">g&lt;End&gt;</a>  	g&lt;End&gt;		1  same as "g$"
<a href="/neovim-docs-web/en/motion#g%3CHome%3E">g&lt;Home&gt;</a>  	g&lt;Home&gt;		1  same as "g0"
<a href="/neovim-docs-web/en/tagsrch#g%3CLeftMouse%3E">g&lt;LeftMouse&gt;</a>  	g&lt;LeftMouse&gt;	   same as <code>&lt;C-LeftMouse&gt;</code>
		g&lt;MiddleMouse&gt;	   same as <code>&lt;C-MiddleMouse&gt;</code>
<a href="/neovim-docs-web/en/tagsrch#g%3CRightMouse%3E">g&lt;RightMouse&gt;</a>  	g&lt;RightMouse&gt;	   same as <code>&lt;C-RightMouse&gt;</code>
<a href="/neovim-docs-web/en/tabpage#g%3CTab%3E">g&lt;Tab&gt;</a>  	g&lt;Tab&gt;		   go to last accessed tab page
<a href="/neovim-docs-web/en/motion#g%3CUp%3E">g&lt;Up&gt;</a>  		g&lt;Up&gt;		1  same as "gk"</div>
<div class="old-help-para"><h2 class="help-heading">2.5 Commands starting with 'z'<span class="help-heading-tags">						<a name="z"></a><span class="help-tag">z</span></span></h2></div>
<div class="old-help-para"><div class="help-column_heading">tag		char	      note action in Normal mode</div><div class="help-column_heading">------------------------------------------------------------------------------</div><a href="/neovim-docs-web/en/scroll#z%3CCR%3E">z&lt;CR&gt;</a>  		z&lt;CR&gt;		   redraw, cursor line to top of window,
				   cursor on first non-blank
<a href="/neovim-docs-web/en/scroll#zN%3CCR%3E">zN&lt;CR&gt;</a>  	z{height}&lt;CR&gt;	   redraw, make window <code>{height}</code> lines high
<a href="/neovim-docs-web/en/scroll#z%2B">z+</a>  		z+		   cursor on line N (default line below
				   window), otherwise like "z&lt;CR&gt;"
<a href="/neovim-docs-web/en/scroll#z-">z-</a>  		z-		   redraw, cursor line at bottom of window,
				   cursor on first non-blank
<a href="/neovim-docs-web/en/scroll#z.">z.</a>  		z.		   redraw, cursor line to center of window,
				   cursor on first non-blank
<a href="/neovim-docs-web/en/spell#z%3D">z=</a>  		z=		   give spelling suggestions
<a href="/neovim-docs-web/en/fold#zA">zA</a>  		zA		   open a closed fold or close an open fold
				   recursively
<a href="/neovim-docs-web/en/fold#zC">zC</a>  		zC		   close folds recursively
<a href="/neovim-docs-web/en/fold#zD">zD</a>  		zD		   delete folds recursively
<a href="/neovim-docs-web/en/fold#zE">zE</a>  		zE		   eliminate all folds
<a href="/neovim-docs-web/en/fold#zF">zF</a>  		zF		   create a fold for N lines
<a href="/neovim-docs-web/en/spell#zG">zG</a>  		zG		   temporarily mark word as correctly spelled
<a href="/neovim-docs-web/en/scroll#zH">zH</a>  		zH		   when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> off scroll half a screenwidth
				   to the right
<a href="/neovim-docs-web/en/scroll#zL">zL</a>  		zL		   when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> off scroll half a screenwidth
				   to the left
<a href="/neovim-docs-web/en/fold#zM">zM</a>  		zM		   set <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a> to zero
<a href="/neovim-docs-web/en/fold#zN">zN</a>  		zN		   set <a href="/neovim-docs-web/en/options#'foldenable'">'foldenable'</a>
<a href="/neovim-docs-web/en/fold#zO">zO</a>  		zO		   open folds recursively
<a href="/neovim-docs-web/en/fold#zR">zR</a>  		zR		   set <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a> to the deepest fold
<a href="/neovim-docs-web/en/spell#zW">zW</a>  		zW		   temporarily mark word as incorrectly spelled
<a href="/neovim-docs-web/en/fold#zX">zX</a>  		zX		   re-apply <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a>
<a href="/neovim-docs-web/en/scroll#z%5E">z^</a>  		z^		   cursor on line N (default line above
				   window), otherwise like "z-"
<a href="/neovim-docs-web/en/fold#za">za</a>  		za		   open a closed fold, close an open fold
<a href="/neovim-docs-web/en/scroll#zb">zb</a>  		zb		   redraw, cursor line at bottom of window
<a href="/neovim-docs-web/en/fold#zc">zc</a>  		zc		   close a fold
<a href="/neovim-docs-web/en/fold#zd">zd</a>  		zd		   delete a fold
<a href="/neovim-docs-web/en/scroll#ze">ze</a>  		ze		   when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> off scroll horizontally to
				   position the cursor at the end (right side)
				   of the screen
<a href="/neovim-docs-web/en/fold#zf">zf</a>  		zf{motion}	   create a fold for Nmove text
<a href="/neovim-docs-web/en/spell#zg">zg</a>  		zg		   permanently mark word as correctly spelled
<a href="/neovim-docs-web/en/scroll#zh">zh</a>  		zh		   when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> off scroll screen N characters
				   to the right
<a href="/neovim-docs-web/en/fold#zi">zi</a>  		zi		   toggle <a href="/neovim-docs-web/en/options#'foldenable'">'foldenable'</a>
<a href="/neovim-docs-web/en/fold#zj">zj</a>  		zj		1  move to the start of the next fold
<a href="/neovim-docs-web/en/fold#zk">zk</a>  		zk		1  move to the end of the previous fold
<a href="/neovim-docs-web/en/scroll#zl">zl</a>  		zl		   when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> off scroll screen N characters
				   to the left
<a href="/neovim-docs-web/en/fold#zm">zm</a>  		zm		   subtract one from <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a>
<a href="/neovim-docs-web/en/fold#zn">zn</a>  		zn		   reset <a href="/neovim-docs-web/en/options#'foldenable'">'foldenable'</a>
<a href="/neovim-docs-web/en/fold#zo">zo</a>  		zo		   open fold
<a href="/neovim-docs-web/en/change#zp">zp</a>  		zp		   paste in block-mode without trailing spaces
<a href="/neovim-docs-web/en/change#zP">zP</a>  		zP		   paste in block-mode without trailing spaces
<a href="/neovim-docs-web/en/fold#zr">zr</a>  		zr		   add one to <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a>
<a href="/neovim-docs-web/en/scroll#zs">zs</a>  		zs		   when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> off scroll horizontally to
				   position the cursor at the start (left
				   side) of the screen
<a href="/neovim-docs-web/en/scroll#zt">zt</a>  		zt		   redraw, cursor line at top of window
<a href="/neovim-docs-web/en/spell#zuw">zuw</a>  		zuw		   undo <a href="/neovim-docs-web/en/spell#zw">zw</a>
<a href="/neovim-docs-web/en/spell#zug">zug</a>  		zug		   undo <a href="/neovim-docs-web/en/spell#zg">zg</a>
<a href="/neovim-docs-web/en/spell#zuW">zuW</a>  		zuW		   undo <a href="/neovim-docs-web/en/spell#zW">zW</a>
<a href="/neovim-docs-web/en/spell#zuG">zuG</a>  		zuG		   undo <a href="/neovim-docs-web/en/spell#zG">zG</a>
<a href="/neovim-docs-web/en/fold#zv">zv</a>  		zv		   open enough folds to view the cursor line
<a href="/neovim-docs-web/en/spell#zw">zw</a>  		zw		   permanently mark word as incorrectly spelled
<a href="/neovim-docs-web/en/fold#zx">zx</a>  		zx		   re-apply <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a> and do "zv"
<a href="/neovim-docs-web/en/change#zy">zy</a>  		zy		   yank without trailing spaces
<a href="/neovim-docs-web/en/scroll#zz">zz</a>  		zz		   redraw, cursor line at center of window
<a href="/neovim-docs-web/en/scroll#z%3CLeft%3E">z&lt;Left&gt;</a>  	z&lt;Left&gt;		   same as "zh"
<a href="/neovim-docs-web/en/scroll#z%3CRight%3E">z&lt;Right&gt;</a>  	z&lt;Right&gt;	   same as "zl"</div>
<div class="old-help-para"><h2 class="help-heading">2.6 Operator-pending mode<span class="help-heading-tags">			<a name="operator-pending-index"></a><span class="help-tag">operator-pending-index</span></span></h2></div>
<div class="old-help-para">These can be used after an operator, but before a <code>{motion}</code> has been entered.</div>
<div class="old-help-para"><div class="help-column_heading">tag		char		action in Operator-pending mode</div><div class="help-column_heading">------------------------------------------------------------------------------</div><a href="/neovim-docs-web/en/motion#o_v">o_v</a>  		v		force operator to work charwise
<a href="/neovim-docs-web/en/motion#o_V">o_V</a>  		V		force operator to work linewise
<a href="/neovim-docs-web/en/motion#o_CTRL-V">o_CTRL-V</a>  	<code>CTRL-V</code>		force operator to work blockwise</div>
<div class="old-help-para"><h2 class="help-heading">3. Visual mode<span class="help-heading-tags">						<a name="visual-index"></a><span class="help-tag">visual-index</span></span></h2></div>
<div class="old-help-para">Most commands in Visual mode are the same as in Normal mode.  The ones listed
here are those that are different.</div>
<div class="old-help-para"><div class="help-column_heading">tag		command	      note action in Visual mode</div><div class="help-column_heading">------------------------------------------------------------------------------</div><a href="/neovim-docs-web/en/intro#v_CTRL-%5C_CTRL-N">v_CTRL-\_CTRL-N</a> <code>CTRL-\</code> <code>CTRL-N</code>	   stop Visual mode
<a href="/neovim-docs-web/en/intro#v_CTRL-%5C_CTRL-G">v_CTRL-\_CTRL-G</a> <code>CTRL-\</code> <code>CTRL-G</code>	   go to Normal mode
<a href="/neovim-docs-web/en/change#v_CTRL-A">v_CTRL-A</a>  	<code>CTRL-A</code>		2  add N to number in highlighted text
<a href="/neovim-docs-web/en/visual#v_CTRL-C">v_CTRL-C</a>  	<code>CTRL-C</code>		   stop Visual mode
<a href="/neovim-docs-web/en/visual#v_CTRL-G">v_CTRL-G</a>  	<code>CTRL-G</code>		   toggle between Visual mode and Select mode
<a href="/neovim-docs-web/en/change#v_%3CBS%3E">v_&lt;BS&gt;</a>  	<code>&lt;BS&gt;</code>		2  Select mode: delete highlighted area
<a href="/neovim-docs-web/en/change#v_CTRL-H">v_CTRL-H</a>  	<code>CTRL-H</code>		2  same as <code>&lt;BS&gt;</code>
<a href="/neovim-docs-web/en/visual#v_CTRL-O">v_CTRL-O</a>  	<code>CTRL-O</code>		   switch from Select to Visual mode for one
				   command
<a href="/neovim-docs-web/en/visual#v_CTRL-V">v_CTRL-V</a>  	<code>CTRL-V</code>		   make Visual mode blockwise or stop Visual
				   mode
<a href="/neovim-docs-web/en/change#v_CTRL-X">v_CTRL-X</a>  	<code>CTRL-X</code>		2  subtract N from number in highlighted text
<a href="/neovim-docs-web/en/visual#v_%3CEsc%3E">v_&lt;Esc&gt;</a>  	<code>&lt;Esc&gt;</code>		   stop Visual mode
<a href="/neovim-docs-web/en/tagsrch#v_CTRL-%5D">v_CTRL-]</a>  	<code>CTRL-]</code>		   jump to highlighted tag
<a href="/neovim-docs-web/en/change#v_%21">v_!</a>  		!{filter}	2  filter the highlighted lines through the
				   external command <code>{filter}</code>
<a href="/neovim-docs-web/en/cmdline#v_%3A">v_:</a>  		:		   start a command-line with the highlighted
				   lines as a range
<a href="/neovim-docs-web/en/change#v_%3C">v_&lt;</a>  		&lt;		2  shift the highlighted lines one
				   <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> left
<a href="/neovim-docs-web/en/change#v_%3D">v_=</a>  		=		2  filter the highlighted lines through the
				   external program given with the <a href="/neovim-docs-web/en/options#'equalprg'">'equalprg'</a>
				   option
<a href="/neovim-docs-web/en/change#v_%3E">v_&gt;</a>  		&gt;		2  shift the highlighted lines one
				   <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> right
<a href="/neovim-docs-web/en/visual#v_b_A">v_b_A</a>  		A		2  block mode: append same text in all lines,
				   after the highlighted area
<a href="/neovim-docs-web/en/change#v_C">v_C</a>  		C		2  delete the highlighted lines and start
				   insert
<a href="/neovim-docs-web/en/change#v_D">v_D</a>  		D		2  delete the highlighted lines
<a href="/neovim-docs-web/en/visual#v_b_I">v_b_I</a>  		I		2  block mode: insert same text in all lines,
				   before the highlighted area
<a href="/neovim-docs-web/en/change#v_J">v_J</a>  		J		2  join the highlighted lines
<a href="/neovim-docs-web/en/various#v_K">v_K</a>  		K		   run <a href="/neovim-docs-web/en/options#'keywordprg'">'keywordprg'</a> on the highlighted area
<a href="/neovim-docs-web/en/visual#v_O">v_O</a>  		O		   move horizontally to other corner of area
<a href="/neovim-docs-web/en/change#v_P">v_P</a>  		P		   replace highlighted area with register
				   contents; registers are unchanged
		Q		   does not start Ex mode
<a href="/neovim-docs-web/en/change#v_R">v_R</a>  		R		2  delete the highlighted lines and start
				   insert
<a href="/neovim-docs-web/en/change#v_S">v_S</a>  		S		2  delete the highlighted lines and start
				   insert
<a href="/neovim-docs-web/en/change#v_U">v_U</a>  		U		2  make highlighted area uppercase
<a href="/neovim-docs-web/en/visual#v_V">v_V</a>  		V		   make Visual mode linewise or stop Visual
				   mode
<a href="/neovim-docs-web/en/change#v_X">v_X</a>  		X		2  delete the highlighted lines
<a href="/neovim-docs-web/en/change#v_Y">v_Y</a>  		Y		   yank the highlighted lines
<a href="/neovim-docs-web/en/motion#v_aquote">v_aquote</a>  	a"		   extend highlighted area with a double
				   quoted string
<a href="/neovim-docs-web/en/motion#v_a'">v_a'</a>  		a'		   extend highlighted area with a single
				   quoted string
<a href="/neovim-docs-web/en/motion#v_a(">v_a(</a>  		a(		   same as ab
<a href="/neovim-docs-web/en/motion#v_a)">v_a)</a>  		a)		   same as ab
<a href="/neovim-docs-web/en/motion#v_a%3C">v_a&lt;</a>  		a&lt;		   extend highlighted area with a &lt;&gt; block
<a href="/neovim-docs-web/en/motion#v_a%3E">v_a&gt;</a>  		a&gt;		   same as a&lt;
<a href="/neovim-docs-web/en/motion#v_aB">v_aB</a>  		aB		   extend highlighted area with a {} block
<a href="/neovim-docs-web/en/motion#v_aW">v_aW</a>  		aW		   extend highlighted area with "a WORD"
<a href="/neovim-docs-web/en/motion#v_a%5B">v_a[</a>  		a[		   extend highlighted area with a [] block
<a href="/neovim-docs-web/en/motion#v_a%5D">v_a]</a>  		a]		   same as a[
<a href="/neovim-docs-web/en/motion#v_a%60">v_a`</a>  		a`		   extend highlighted area with a backtick
				   quoted string
<a href="/neovim-docs-web/en/motion#v_ab">v_ab</a>  		ab		   extend highlighted area with a () block
<a href="/neovim-docs-web/en/motion#v_ap">v_ap</a>  		ap		   extend highlighted area with a paragraph
<a href="/neovim-docs-web/en/motion#v_as">v_as</a>  		as		   extend highlighted area with a sentence
<a href="/neovim-docs-web/en/motion#v_at">v_at</a>  		at		   extend highlighted area with a tag block
<a href="/neovim-docs-web/en/motion#v_aw">v_aw</a>  		aw		   extend highlighted area with "a word"
<a href="/neovim-docs-web/en/motion#v_a%7B">v_a{</a>  		a{		   same as aB
<a href="/neovim-docs-web/en/motion#v_a%7D">v_a}</a>  		a}		   same as aB
<a href="/neovim-docs-web/en/change#v_c">v_c</a>  		c		2  delete highlighted area and start insert
<a href="/neovim-docs-web/en/change#v_d">v_d</a>  		d		2  delete highlighted area
<a href="/neovim-docs-web/en/change#v_g_CTRL-A">v_g_CTRL-A</a>  	g <code>CTRL-A</code>	2  add N to number in highlighted text
<a href="/neovim-docs-web/en/change#v_g_CTRL-X">v_g_CTRL-X</a>  	g <code>CTRL-X</code>	2  subtract N from number in highlighted text
<a href="/neovim-docs-web/en/change#v_gJ">v_gJ</a>  		gJ		2  join the highlighted lines without
				   inserting spaces
<a href="/neovim-docs-web/en/change#v_gq">v_gq</a>  		gq		2  format the highlighted lines
<a href="/neovim-docs-web/en/visual#v_gv">v_gv</a>  		gv		   exchange current and previous highlighted
				   area
<a href="/neovim-docs-web/en/motion#v_iquote">v_iquote</a>  	i"		   extend highlighted area with a double
				   quoted string (without quotes)
<a href="/neovim-docs-web/en/motion#v_i'">v_i'</a>  		i'		   extend highlighted area with a single
				   quoted string (without quotes)
<a href="/neovim-docs-web/en/motion#v_i(">v_i(</a>  		i(		   same as ib
<a href="/neovim-docs-web/en/motion#v_i)">v_i)</a>  		i)		   same as ib
<a href="/neovim-docs-web/en/motion#v_i%3C">v_i&lt;</a>  		i&lt;		   extend highlighted area with inner &lt;&gt; block
<a href="/neovim-docs-web/en/motion#v_i%3E">v_i&gt;</a>  		i&gt;		   same as i&lt;
<a href="/neovim-docs-web/en/motion#v_iB">v_iB</a>  		iB		   extend highlighted area with inner {} block
<a href="/neovim-docs-web/en/motion#v_iW">v_iW</a>  		iW		   extend highlighted area with "inner WORD"
<a href="/neovim-docs-web/en/motion#v_i%5B">v_i[</a>  		i[		   extend highlighted area with inner [] block
<a href="/neovim-docs-web/en/motion#v_i%5D">v_i]</a>  		i]		   same as i[
<a href="/neovim-docs-web/en/motion#v_i%60">v_i`</a>  		i`		   extend highlighted area with a backtick
				   quoted string (without the backticks)
<a href="/neovim-docs-web/en/motion#v_ib">v_ib</a>  		ib		   extend highlighted area with inner () block
<a href="/neovim-docs-web/en/motion#v_ip">v_ip</a>  		ip		   extend highlighted area with inner paragraph
<a href="/neovim-docs-web/en/motion#v_is">v_is</a>  		is		   extend highlighted area with inner sentence
<a href="/neovim-docs-web/en/motion#v_it">v_it</a>  		it		   extend highlighted area with inner tag block
<a href="/neovim-docs-web/en/motion#v_iw">v_iw</a>  		iw		   extend highlighted area with "inner word"
<a href="/neovim-docs-web/en/motion#v_i%7B">v_i{</a>  		i{		   same as iB
<a href="/neovim-docs-web/en/motion#v_i%7D">v_i}</a>  		i}		   same as iB
<a href="/neovim-docs-web/en/visual#v_o">v_o</a>  		o		   move cursor to other corner of area
<a href="/neovim-docs-web/en/change#v_p">v_p</a>  		p		   replace highlighted area with register
				   contents; deleted text in unnamed register
<a href="/neovim-docs-web/en/change#v_r">v_r</a>  		r		2  replace highlighted area with a character
<a href="/neovim-docs-web/en/change#v_s">v_s</a>  		s		2  delete highlighted area and start insert
<a href="/neovim-docs-web/en/change#v_u">v_u</a>  		u		2  make highlighted area lowercase
<a href="/neovim-docs-web/en/visual#v_v">v_v</a>  		v		   make Visual mode charwise or stop
				   Visual mode
<a href="/neovim-docs-web/en/change#v_x">v_x</a>  		x		2  delete the highlighted area
<a href="/neovim-docs-web/en/change#v_y">v_y</a>  		y		   yank the highlighted area
<a href="/neovim-docs-web/en/change#v_~">v_~</a>  		~		2  swap case for the highlighted area</div>
<div class="old-help-para"><h2 class="help-heading">4. Command-line editing<span class="help-heading-tags">					<a name="ex-edit-index"></a><span class="help-tag">ex-edit-index</span></span></h2></div>
<div class="old-help-para">Get to the command-line with the ':', '!', '/' or '?' commands.
Normal characters are inserted at the current cursor position.
"Completion" below refers to context-sensitive completion.  It will complete
file names, tags, commands etc. as appropriate.</div>
<div class="old-help-para"><div class="help-column_heading">tag		command		action in Command-line editing mode</div><div class="help-column_heading">------------------------------------------------------------------------------</div>		<code>CTRL-@</code>		not used
<a href="/neovim-docs-web/en/cmdline#c_CTRL-A">c_CTRL-A</a>  	<code>CTRL-A</code>		do completion on the pattern in front of the
				cursor and insert all matches
<a href="/neovim-docs-web/en/cmdline#c_CTRL-B">c_CTRL-B</a>  	<code>CTRL-B</code>		cursor to begin of command-line
<a href="/neovim-docs-web/en/cmdline#c_CTRL-C">c_CTRL-C</a>  	<code>CTRL-C</code>		same as <code>&lt;Esc&gt;</code>
<a href="/neovim-docs-web/en/cmdline#c_CTRL-D">c_CTRL-D</a>  	<code>CTRL-D</code>		list completions that match the pattern in
				front of the cursor
<a href="/neovim-docs-web/en/cmdline#c_CTRL-E">c_CTRL-E</a>  	<code>CTRL-E</code>		cursor to end of command-line
<a href="/neovim-docs-web/en/options#'cedit'">'cedit'</a>  	<code>CTRL-F</code>		default value for <a href="/neovim-docs-web/en/options#'cedit'">'cedit'</a>: opens the
				command-line window; otherwise not used
<a href="/neovim-docs-web/en/cmdline#c_CTRL-G">c_CTRL-G</a>  	<code>CTRL-G</code>		next match when <a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a> is active
<a href="/neovim-docs-web/en/cmdline#c_%3CBS%3E">c_&lt;BS&gt;</a>  	<code>&lt;BS&gt;</code>		delete the character in front of the cursor
<a href="/neovim-docs-web/en/cmdline#c_digraph">c_digraph</a>  	<code>{char1}</code> <code>&lt;BS&gt;</code> <code>{char2}</code>
				enter digraph when <a href="/neovim-docs-web/en/options#'digraph'">'digraph'</a> is on
<a href="/neovim-docs-web/en/cmdline#c_CTRL-H">c_CTRL-H</a>  	<code>CTRL-H</code>		same as <code>&lt;BS&gt;</code>
<a href="/neovim-docs-web/en/cmdline#c_%3CTab%3E">c_&lt;Tab&gt;</a>  	<code>&lt;Tab&gt;</code>		if <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> is <code>&lt;Tab&gt;</code>: Do completion on
				the pattern in front of the cursor
<a href="/neovim-docs-web/en/cmdline#c_%3CS-Tab%3E">c_&lt;S-Tab&gt;</a>  	<code>&lt;S-Tab&gt;</code>		same as <code>CTRL-P</code>
<a href="/neovim-docs-web/en/cmdline#c_wildchar">c_wildchar</a>  	<a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a>	Do completion on the pattern in front of the
				cursor (default: <code>&lt;Tab&gt;</code>)
<a href="/neovim-docs-web/en/cmdline#c_CTRL-I">c_CTRL-I</a>  	<code>CTRL-I</code>		same as <code>&lt;Tab&gt;</code>
<a href="/neovim-docs-web/en/cmdline#c_%3CNL%3E">c_&lt;NL&gt;</a>  	<code>&lt;NL&gt;</code>		same as <code>&lt;CR&gt;</code>
<a href="/neovim-docs-web/en/cmdline#c_CTRL-J">c_CTRL-J</a>  	<code>CTRL-J</code>		same as <code>&lt;CR&gt;</code>
<a href="/neovim-docs-web/en/cmdline#c_CTRL-K">c_CTRL-K</a>  	<code>CTRL-K</code> <code>{char1}</code> <code>{char2}</code>
				enter digraph
<a href="/neovim-docs-web/en/cmdline#c_CTRL-L">c_CTRL-L</a>  	<code>CTRL-L</code>		do completion on the pattern in front of the
				cursor and insert the longest common part
<a href="/neovim-docs-web/en/cmdline#c_%3CCR%3E">c_&lt;CR&gt;</a>  	<code>&lt;CR&gt;</code>		execute entered command
<a href="/neovim-docs-web/en/cmdline#c_CTRL-M">c_CTRL-M</a>  	<code>CTRL-M</code>		same as <code>&lt;CR&gt;</code>
<a href="/neovim-docs-web/en/cmdline#c_CTRL-N">c_CTRL-N</a>  	<code>CTRL-N</code>		after using <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> with multiple matches:
				go to next match, otherwise: recall older
				command-line from history.
		<code>CTRL-O</code>		not used
<a href="/neovim-docs-web/en/cmdline#c_CTRL-P">c_CTRL-P</a>  	<code>CTRL-P</code>		after using <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> with multiple matches:
				go to previous match, otherwise: recall older
				command-line from history.
<a href="/neovim-docs-web/en/cmdline#c_CTRL-Q">c_CTRL-Q</a>  	<code>CTRL-Q</code>		same as <code>CTRL-V</code>, unless it's used for terminal
				control flow
<a href="/neovim-docs-web/en/cmdline#c_CTRL-R">c_CTRL-R</a>  	<code>CTRL-R</code> <code>{regname}</code>
				insert the contents of a register or object
				under the cursor as if typed
<a href="/neovim-docs-web/en/cmdline#c_CTRL-R_CTRL-R">c_CTRL-R_CTRL-R</a> <code>CTRL-R</code> <code>CTRL-R</code> <code>{regname}</code>
<a href="/neovim-docs-web/en/cmdline#c_CTRL-R_CTRL-O">c_CTRL-R_CTRL-O</a> <code>CTRL-R</code> <code>CTRL-O</code> <code>{regname}</code>
				insert the contents of a register or object
				under the cursor literally
		<code>CTRL-S</code>		not used, or used for terminal control flow
<a href="/neovim-docs-web/en/cmdline#c_CTRL-T">c_CTRL-T</a>  	<code>CTRL-T</code>		previous match when <a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a> is active
<a href="/neovim-docs-web/en/cmdline#c_CTRL-U">c_CTRL-U</a>  	<code>CTRL-U</code>		remove all characters
<a href="/neovim-docs-web/en/cmdline#c_CTRL-V">c_CTRL-V</a>  	<code>CTRL-V</code>		insert next non-digit literally, insert three
				digit decimal number as a single byte.
<a href="/neovim-docs-web/en/cmdline#c_CTRL-W">c_CTRL-W</a>  	<code>CTRL-W</code>		delete the word in front of the cursor
		<code>CTRL-X</code>		not used (reserved for completion)
		<code>CTRL-Y</code>		copy (yank) modeless selection
		<code>CTRL-Z</code>		not used (reserved for suspend)
<a href="/neovim-docs-web/en/cmdline#c_%3CEsc%3E">c_&lt;Esc&gt;</a>  	<code>&lt;Esc&gt;</code>		abandon command-line without executing it
<a href="/neovim-docs-web/en/cmdline#c_CTRL-%5B">c_CTRL-[</a>  	<code>CTRL-[</code>		same as <code>&lt;Esc&gt;</code>
<a href="/neovim-docs-web/en/intro#c_CTRL-%5C_CTRL-N">c_CTRL-\_CTRL-N</a> <code>CTRL-\</code> <code>CTRL-N</code>	go to Normal mode, abandon command-line
<a href="/neovim-docs-web/en/intro#c_CTRL-%5C_CTRL-G">c_CTRL-\_CTRL-G</a> <code>CTRL-\</code> <code>CTRL-G</code>	go to Normal mode, abandon command-line
		<code>CTRL-\</code> a - d	reserved for extensions
<a href="/neovim-docs-web/en/cmdline#c_CTRL-%5C_e">c_CTRL-\_e</a>  	<code>CTRL-\</code> e <code>{expr}</code> replace the command line with the result of
				<code>{expr}</code>
		<code>CTRL-\</code> f - z	reserved for extensions
		<code>CTRL-\</code> others	not used
<a href="/neovim-docs-web/en/cmdline#c_CTRL-%5D">c_CTRL-]</a>  	<code>CTRL-]</code>		trigger abbreviation
<a href="/neovim-docs-web/en/cmdline#c_CTRL-%5E">c_CTRL-^</a>  	<code>CTRL-^</code>		toggle use of <a href="/neovim-docs-web/en/map#%3Almap">:lmap</a> mappings
<a href="/neovim-docs-web/en/cmdline#c_CTRL-_">c_CTRL-_</a>  	<code>CTRL-_</code>		when <a href="/neovim-docs-web/en/options#'allowrevins'">'allowrevins'</a> set: change language
				(Hebrew)
<a href="/neovim-docs-web/en/cmdline#c_%3CDel%3E">c_&lt;Del&gt;</a>  	<code>&lt;Del&gt;</code>		delete the character under the cursor</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/cmdline#c_%3CLeft%3E">c_&lt;Left&gt;</a>  	<code>&lt;Left&gt;</code>		cursor left
<a href="/neovim-docs-web/en/cmdline#c_%3CS-Left%3E">c_&lt;S-Left&gt;</a>  	<code>&lt;S-Left&gt;</code>	cursor one word left
<a href="/neovim-docs-web/en/cmdline#c_%3CC-Left%3E">c_&lt;C-Left&gt;</a>  	<code>&lt;C-Left&gt;</code>	cursor one word left
<a href="/neovim-docs-web/en/cmdline#c_%3CRight%3E">c_&lt;Right&gt;</a>  	<code>&lt;Right&gt;</code>		cursor right
<a href="/neovim-docs-web/en/cmdline#c_%3CS-Right%3E">c_&lt;S-Right&gt;</a>  	<code>&lt;S-Right&gt;</code>	cursor one word right
<a href="/neovim-docs-web/en/cmdline#c_%3CC-Right%3E">c_&lt;C-Right&gt;</a>  	<code>&lt;C-Right&gt;</code>	cursor one word right
<a href="/neovim-docs-web/en/cmdline#c_%3CUp%3E">c_&lt;Up&gt;</a>  	<code>&lt;Up&gt;</code>		recall previous command-line from history that
				matches pattern in front of the cursor
<a href="/neovim-docs-web/en/cmdline#c_%3CS-Up%3E">c_&lt;S-Up&gt;</a>  	<code>&lt;S-Up&gt;</code>		recall previous command-line from history
<a href="/neovim-docs-web/en/cmdline#c_%3CDown%3E">c_&lt;Down&gt;</a>  	<code>&lt;Down&gt;</code>		recall next command-line from history that
				matches pattern in front of the cursor
<a href="/neovim-docs-web/en/cmdline#c_%3CS-Down%3E">c_&lt;S-Down&gt;</a>  	<code>&lt;S-Down&gt;</code>	recall next command-line from history
<a href="/neovim-docs-web/en/cmdline#c_%3CHome%3E">c_&lt;Home&gt;</a>  	<code>&lt;Home&gt;</code>		cursor to start of command-line
<a href="/neovim-docs-web/en/cmdline#c_%3CEnd%3E">c_&lt;End&gt;</a>  	<code>&lt;End&gt;</code>		cursor to end of command-line
<a href="/neovim-docs-web/en/cmdline#c_%3CPageDown%3E">c_&lt;PageDown&gt;</a>  	<code>&lt;PageDown&gt;</code>	same as <code>&lt;S-Down&gt;</code>
<a href="/neovim-docs-web/en/cmdline#c_%3CPageUp%3E">c_&lt;PageUp&gt;</a>  	<code>&lt;PageUp&gt;</code>	same as <code>&lt;S-Up&gt;</code>
<a href="/neovim-docs-web/en/cmdline#c_%3CInsert%3E">c_&lt;Insert&gt;</a>  	<code>&lt;Insert&gt;</code>	toggle insert/overstrike mode
<a href="/neovim-docs-web/en/cmdline#c_%3CLeftMouse%3E">c_&lt;LeftMouse&gt;</a>  	<code>&lt;LeftMouse&gt;</code>	cursor at mouse click</div>
<div class="old-help-para"><h2 class="help-heading">5. Terminal mode<span class="help-heading-tags">				<a name="terminal-mode-index"></a><span class="help-tag">terminal-mode-index</span></span></h2></div>
<div class="old-help-para">In a <a href="/neovim-docs-web/en/nvim_terminal_emulator#terminal">terminal</a> buffer all keys except <code>CTRL-\</code> are forwarded to the terminal
job.  If <code>CTRL-\</code> is pressed, the next key is forwarded unless it is <code>CTRL-N</code>
or <code>CTRL-O</code>.
Use <a href="/neovim-docs-web/en/intro#CTRL-%5C_CTRL-N">CTRL-\_CTRL-N</a> to go to Normal mode.
Use <a href="/neovim-docs-web/en/nvim_terminal_emulator#t_CTRL-%5C_CTRL-O">t_CTRL-\_CTRL-O</a> to execute one normal mode command and then return
to terminal mode.</div>
<div class="old-help-para">You found it, Arthur!				<a name="holy-grail"></a><code class="help-tag-right">holy-grail</code></div>
<div class="old-help-para"><h2 class="help-heading">6. EX commands<span class="help-heading-tags">				<a name="ex-commands"></a><span class="help-tag">ex-commands</span> <a name="ex-cmd-index"></a><span class="help-tag">ex-cmd-index</span> <a name="%3Aindex"></a><span class="help-tag">:index</span></span></h2></div>
<div class="old-help-para">This is a brief but complete listing of all the ":" commands, without
mentioning any arguments.  The optional part of the command name is inside [].
The commands are sorted on the non-optional part of their name.</div>
<div class="old-help-para"><div class="help-column_heading">tag		command		action</div><div class="help-column_heading">------------------------------------------------------------------------------</div><a href="/neovim-docs-web/en/cmdline#%3A">:</a>  		:		nothing
<a href="/neovim-docs-web/en/cmdline#%3Arange">:range</a>  	:{range}	go to last line in <code>{range}</code>
<a href="/neovim-docs-web/en/various#%3A%21">:!</a>  		:!		filter lines or execute an external command
<a href="/neovim-docs-web/en/various#%3A%21%21">:!!</a>  		:!!		repeat last ":!" command
<a href="/neovim-docs-web/en/various#%3A%23">:#</a>  		:#		same as ":number"
<a href="/neovim-docs-web/en/change#%3A%26">:&amp;</a>  		:&amp;		repeat last ":substitute"
<a href="/neovim-docs-web/en/cmdline#%3Astar">:star</a>  		:*		use the last Visual area, like :'&lt;,'&gt;
<a href="/neovim-docs-web/en/change#%3A%3C">:&lt;</a>  		:&lt;		shift lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> left
<a href="/neovim-docs-web/en/various#%3A%3D">:=</a>  		:=		print the last line number
<a href="/neovim-docs-web/en/change#%3A%3E">:&gt;</a>  		:&gt;		shift lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> right
<a href="/neovim-docs-web/en/repeat#%3A%40">:@</a>  		:@		execute contents of a register
<a href="/neovim-docs-web/en/repeat#%3A%40%40">:@@</a>  		:@@		repeat the previous ":@"
<a href="/neovim-docs-web/en/editing#%3ANext">:Next</a>  		:N[ext]		go to previous file in the argument list
<a href="/neovim-docs-web/en/insert#%3Aappend">:append</a>  	:a[ppend]	append text
<a href="/neovim-docs-web/en/map#%3Aabbreviate">:abbreviate</a>  	:ab[breviate]	enter abbreviation
<a href="/neovim-docs-web/en/map#%3Aabclear">:abclear</a>  	:abc[lear]	remove all abbreviations
<a href="/neovim-docs-web/en/windows#%3Aaboveleft">:aboveleft</a>  	:abo[veleft]	make split window appear left or above
<a href="/neovim-docs-web/en/windows#%3Aall">:all</a>  		:al[l]		open a window for each file in the argument
				list
<a href="/neovim-docs-web/en/gui#%3Aamenu">:amenu</a>  	:am[enu]	enter new menu item for all modes
<a href="/neovim-docs-web/en/gui#%3Aanoremenu">:anoremenu</a>  	:an[oremenu]	enter a new menu for all modes that will not
				be remapped
<a href="/neovim-docs-web/en/editing#%3Aargs">:args</a>  		:ar[gs]		print the argument list
<a href="/neovim-docs-web/en/editing#%3Aargadd">:argadd</a>  	:arga[dd]	add items to the argument list
<a href="/neovim-docs-web/en/editing#%3Aargdedupe">:argdedupe</a>  	:argded[upe]	remove duplicates from the argument list
<a href="/neovim-docs-web/en/editing#%3Aargdelete">:argdelete</a>  	:argd[elete]	delete items from the argument list
<a href="/neovim-docs-web/en/editing#%3Aargedit">:argedit</a>  	:arge[dit]	add item to the argument list and edit it
<a href="/neovim-docs-web/en/editing#%3Aargdo">:argdo</a>  	:argdo		do a command on all items in the argument list
<a href="/neovim-docs-web/en/editing#%3Aargglobal">:argglobal</a>  	:argg[lobal]	define the global argument list
<a href="/neovim-docs-web/en/editing#%3Aarglocal">:arglocal</a>  	:argl[ocal]	define a local argument list
<a href="/neovim-docs-web/en/editing#%3Aargument">:argument</a>  	:argu[ment]	go to specific file in the argument list
<a href="/neovim-docs-web/en/various#%3Aascii">:ascii</a>  	:as[cii]	print ascii value of character under the cursor
<a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>  	:au[tocmd]	enter or show autocommands
<a href="/neovim-docs-web/en/autocmd#%3Aaugroup">:augroup</a>  	:aug[roup]	select the autocommand group to use
<a href="/neovim-docs-web/en/gui#%3Aaunmenu">:aunmenu</a>  	:aun[menu]	remove menu for all modes
<a href="/neovim-docs-web/en/windows#%3Abuffer">:buffer</a>  	:b[uffer]	go to specific buffer in the buffer list
<a href="/neovim-docs-web/en/windows#%3AbNext">:bNext</a>  	:bN[ext]	go to previous buffer in the buffer list
<a href="/neovim-docs-web/en/windows#%3Aball">:ball</a>  		:ba[ll]		open a window for each buffer in the buffer list
<a href="/neovim-docs-web/en/windows#%3Abadd">:badd</a>  		:bad[d]		add buffer to the buffer list
<a href="/neovim-docs-web/en/windows#%3Abalt">:balt</a>  		:balt		like ":badd" but also set the alternate file
<a href="/neovim-docs-web/en/windows#%3Abdelete">:bdelete</a>  	:bd[elete]	remove a buffer from the buffer list
<a href="/neovim-docs-web/en/options#%3Abehave">:behave</a>  	:be[have]	set mouse and selection behavior
<a href="/neovim-docs-web/en/windows#%3Abelowright">:belowright</a>  	:bel[owright]	make split window appear right or below
<a href="/neovim-docs-web/en/windows#%3Abfirst">:bfirst</a>  	:bf[irst]	go to first buffer in the buffer list
<a href="/neovim-docs-web/en/windows#%3Ablast">:blast</a>  	:bl[ast]	go to last buffer in the buffer list
<a href="/neovim-docs-web/en/windows#%3Abmodified">:bmodified</a>  	:bm[odified]	go to next buffer in the buffer list that has
				been modified
<a href="/neovim-docs-web/en/windows#%3Abnext">:bnext</a>  	:bn[ext]	go to next buffer in the buffer list
<a href="/neovim-docs-web/en/windows#%3Abotright">:botright</a>  	:bo[tright]	make split window appear at bottom or far right
<a href="/neovim-docs-web/en/windows#%3Abprevious">:bprevious</a>  	:bp[revious]	go to previous buffer in the buffer list
<a href="/neovim-docs-web/en/windows#%3Abrewind">:brewind</a>  	:br[ewind]	go to first buffer in the buffer list
<a href="/neovim-docs-web/en/eval#%3Abreak">:break</a>  	:brea[k]	break out of while loop
<a href="/neovim-docs-web/en/repeat#%3Abreakadd">:breakadd</a>  	:breaka[dd]	add a debugger breakpoint
<a href="/neovim-docs-web/en/repeat#%3Abreakdel">:breakdel</a>  	:breakd[el]	delete a debugger breakpoint
<a href="/neovim-docs-web/en/repeat#%3Abreaklist">:breaklist</a>  	:breakl[ist]	list debugger breakpoints
<a href="/neovim-docs-web/en/editing#%3Abrowse">:browse</a>  	:bro[wse]	use file selection dialog
<a href="/neovim-docs-web/en/windows#%3Abufdo">:bufdo</a>  	:bufdo		execute command in each listed buffer
<a href="/neovim-docs-web/en/windows#%3Abuffers">:buffers</a>  	:buffers	list all files in the buffer list
<a href="/neovim-docs-web/en/windows#%3Abunload">:bunload</a>  	:bun[load]	unload a specific buffer
<a href="/neovim-docs-web/en/windows#%3Abwipeout">:bwipeout</a>  	:bw[ipeout]	really delete a buffer
<a href="/neovim-docs-web/en/change#%3Achange">:change</a>  	:c[hange]	replace a line or series of lines
<a href="/neovim-docs-web/en/quickfix#%3AcNext">:cNext</a>  	:cN[ext]	go to previous error
<a href="/neovim-docs-web/en/quickfix#%3AcNfile">:cNfile</a>  	:cNf[ile]	go to last error in previous file
<a href="/neovim-docs-web/en/map#%3Acabbrev">:cabbrev</a>  	:ca[bbrev]	like ":abbreviate" but for Command-line mode
<a href="/neovim-docs-web/en/map#%3Acabclear">:cabclear</a>  	:cabc[lear]	clear all abbreviations for Command-line mode
<a href="/neovim-docs-web/en/quickfix#%3Acabove">:cabove</a>  	:cabo[ve]	go to error above current line
<a href="/neovim-docs-web/en/quickfix#%3Acaddbuffer">:caddbuffer</a>  	:cad[dbuffer]	add errors from buffer
<a href="/neovim-docs-web/en/quickfix#%3Acaddexpr">:caddexpr</a>  	:cadde[xpr]	add errors from expr
<a href="/neovim-docs-web/en/quickfix#%3Acaddfile">:caddfile</a>  	:caddf[ile]	add error message to current quickfix list
<a href="/neovim-docs-web/en/quickfix#%3Acafter">:cafter</a>  	:caf[ter]	go to error after current cursor
<a href="/neovim-docs-web/en/userfunc#%3Acall">:call</a>  		:cal[l]		call a function
<a href="/neovim-docs-web/en/eval#%3Acatch">:catch</a>  	:cat[ch]	part of a :try command
<a href="/neovim-docs-web/en/quickfix#%3Acbefore">:cbefore</a>  	:cbef[ore]	go to error before current cursor
<a href="/neovim-docs-web/en/quickfix#%3Acbelow">:cbelow</a>  	:cbel[ow]	go to error below current line
<a href="/neovim-docs-web/en/quickfix#%3Acbottom">:cbottom</a>  	:cbo[ttom]	scroll to the bottom of the quickfix window
<a href="/neovim-docs-web/en/quickfix#%3Acbuffer">:cbuffer</a>  	:cb[uffer]	parse error messages and jump to first error
<a href="/neovim-docs-web/en/quickfix#%3Acc">:cc</a>  		:cc		go to specific error
<a href="/neovim-docs-web/en/quickfix#%3Acclose">:cclose</a>  	:ccl[ose]	close quickfix window
<a href="/neovim-docs-web/en/editing#%3Acd">:cd</a>  		:cd		change directory
<a href="/neovim-docs-web/en/quickfix#%3Acdo">:cdo</a>  		:cdo		execute command in each valid error list entry
<a href="/neovim-docs-web/en/quickfix#%3Acfdo">:cfdo</a>  		:cfd[o]		execute command in each file in error list
<a href="/neovim-docs-web/en/change#%3Acenter">:center</a>  	:ce[nter]	format lines at the center
<a href="/neovim-docs-web/en/quickfix#%3Acexpr">:cexpr</a>  	:cex[pr]	read errors from expr and jump to first
<a href="/neovim-docs-web/en/quickfix#%3Acfile">:cfile</a>  	:cf[ile]	read file with error messages and jump to first
<a href="/neovim-docs-web/en/quickfix#%3Acfirst">:cfirst</a>  	:cfir[st]	go to the specified error, default first one
<a href="/neovim-docs-web/en/quickfix#%3Acgetbuffer">:cgetbuffer</a>  	:cgetb[uffer]	get errors from buffer
<a href="/neovim-docs-web/en/quickfix#%3Acgetexpr">:cgetexpr</a>  	:cgete[xpr]	get errors from expr
<a href="/neovim-docs-web/en/quickfix#%3Acgetfile">:cgetfile</a>  	:cg[etfile]	read file with error messages
<a href="/neovim-docs-web/en/motion#%3Achanges">:changes</a>  	:changes	print the change list
<a href="/neovim-docs-web/en/editing#%3Achdir">:chdir</a>  	:chd[ir]	change directory
<a href="/neovim-docs-web/en/pi_health#%3Acheckhealth">:checkhealth</a>  	:che[ckhealth]	run healthchecks
<a href="/neovim-docs-web/en/tagsrch#%3Acheckpath">:checkpath</a>  	:checkp[ath]	list included files
<a href="/neovim-docs-web/en/editing#%3Achecktime">:checktime</a>  	:checkt[ime]	check timestamp of loaded buffers
<a href="/neovim-docs-web/en/quickfix#%3Achistory">:chistory</a>  	:chi[story]	list the error lists
<a href="/neovim-docs-web/en/quickfix#%3Aclast">:clast</a>  	:cla[st]	go to the specified error, default last one
<a href="/neovim-docs-web/en/motion#%3Aclearjumps">:clearjumps</a>  	:cle[arjumps]	clear the jump list
<a href="/neovim-docs-web/en/quickfix#%3Aclist">:clist</a>  	:cl[ist]	list all errors
<a href="/neovim-docs-web/en/windows#%3Aclose">:close</a>  	:clo[se]	close current window
<a href="/neovim-docs-web/en/map#%3Acmap">:cmap</a>  		:cm[ap]		like ":map" but for Command-line mode
<a href="/neovim-docs-web/en/map#%3Acmapclear">:cmapclear</a>  	:cmapc[lear]	clear all mappings for Command-line mode
<a href="/neovim-docs-web/en/gui#%3Acmenu">:cmenu</a>  	:cme[nu]	add menu for Command-line mode
<a href="/neovim-docs-web/en/quickfix#%3Acnext">:cnext</a>  	:cn[ext]	go to next error
<a href="/neovim-docs-web/en/quickfix#%3Acnewer">:cnewer</a>  	:cnew[er]	go to newer error list
<a href="/neovim-docs-web/en/quickfix#%3Acnfile">:cnfile</a>  	:cnf[ile]	go to first error in next file
<a href="/neovim-docs-web/en/map#%3Acnoremap">:cnoremap</a>  	:cno[remap]	like ":noremap" but for Command-line mode
<a href="/neovim-docs-web/en/map#%3Acnoreabbrev">:cnoreabbrev</a>  	:cnorea[bbrev]	like ":noreabbrev" but for Command-line mode
<a href="/neovim-docs-web/en/gui#%3Acnoremenu">:cnoremenu</a>  	:cnoreme[nu]	like ":noremenu" but for Command-line mode
<a href="/neovim-docs-web/en/change#%3Acopy">:copy</a>  		:co[py]		copy lines
<a href="/neovim-docs-web/en/quickfix#%3Acolder">:colder</a>  	:col[der]	go to older error list
<a href="/neovim-docs-web/en/syntax#%3Acolorscheme">:colorscheme</a>  	:colo[rscheme]	load a specific color scheme
<a href="/neovim-docs-web/en/map#%3Acommand">:command</a>  	:com[mand]	create user-defined command
<a href="/neovim-docs-web/en/map#%3Acomclear">:comclear</a>  	:comc[lear]	clear all user-defined commands
<a href="/neovim-docs-web/en/quickfix#%3Acompiler">:compiler</a>  	:comp[iler]	do settings for a specific compiler
<a href="/neovim-docs-web/en/eval#%3Acontinue">:continue</a>  	:con[tinue]	go back to :while
<a href="/neovim-docs-web/en/editing#%3Aconfirm">:confirm</a>  	:conf[irm]	prompt user when confirmation required
<a href="/neovim-docs-web/en/eval#%3Aconst">:const</a>  	:cons[t]	create a variable as a constant
<a href="/neovim-docs-web/en/quickfix#%3Acopen">:copen</a>  	:cope[n]	open quickfix window
<a href="/neovim-docs-web/en/quickfix#%3Acprevious">:cprevious</a>  	:cp[revious]	go to previous error
<a href="/neovim-docs-web/en/quickfix#%3Acpfile">:cpfile</a>  	:cpf[ile]	go to last error in previous file
<a href="/neovim-docs-web/en/quickfix#%3Acquit">:cquit</a>  	:cq[uit]	quit Vim with an error code
<a href="/neovim-docs-web/en/quickfix#%3Acrewind">:crewind</a>  	:cr[ewind]	go to the specified error, default first one
<a href="/neovim-docs-web/en/map#%3Acunmap">:cunmap</a>  	:cu[nmap]	like ":unmap" but for Command-line mode
<a href="/neovim-docs-web/en/map#%3Acunabbrev">:cunabbrev</a>  	:cuna[bbrev]	like ":unabbrev" but for Command-line mode
<a href="/neovim-docs-web/en/gui#%3Acunmenu">:cunmenu</a>  	:cunme[nu]	remove menu for Command-line mode
<a href="/neovim-docs-web/en/quickfix#%3Acwindow">:cwindow</a>  	:cw[indow]	open or close quickfix window
<a href="/neovim-docs-web/en/change#%3Adelete">:delete</a>  	:d[elete]	delete lines
<a href="/neovim-docs-web/en/repeat#%3Adebug">:debug</a>  	:deb[ug]	run a command in debugging mode
<a href="/neovim-docs-web/en/repeat#%3Adebuggreedy">:debuggreedy</a>  	:debugg[reedy]	read debug mode commands from normal input
<a href="/neovim-docs-web/en/map#%3Adelcommand">:delcommand</a>  	:delc[ommand]	delete user-defined command
<a href="/neovim-docs-web/en/userfunc#%3Adelfunction">:delfunction</a>  	:delf[unction]	delete a user function
<a href="/neovim-docs-web/en/motion#%3Adelmarks">:delmarks</a>  	:delm[arks]	delete marks
<a href="/neovim-docs-web/en/diff#%3Adiffupdate">:diffupdate</a>  	:dif[fupdate]	update <a href="/neovim-docs-web/en/options#'diff'">'diff'</a> buffers
<a href="/neovim-docs-web/en/diff#%3Adiffget">:diffget</a>  	:diffg[et]	remove differences in current buffer
<a href="/neovim-docs-web/en/diff#%3Adiffoff">:diffoff</a>  	:diffo[ff]	switch off diff mode
<a href="/neovim-docs-web/en/diff#%3Adiffpatch">:diffpatch</a>  	:diffp[atch]	apply a patch and show differences
<a href="/neovim-docs-web/en/diff#%3Adiffput">:diffput</a>  	:diffpu[t]	remove differences in other buffer
<a href="/neovim-docs-web/en/diff#%3Adiffsplit">:diffsplit</a>  	:diffs[plit]	show differences with another file
<a href="/neovim-docs-web/en/diff#%3Adiffthis">:diffthis</a>  	:diffthis	make current window a diff window
<a href="/neovim-docs-web/en/digraph#%3Adigraphs">:digraphs</a>  	:dig[raphs]	show or enter digraphs
<a href="/neovim-docs-web/en/change#%3Adisplay">:display</a>  	:di[splay]	display registers
<a href="/neovim-docs-web/en/tagsrch#%3Adjump">:djump</a>  	:dj[ump]	jump to #define
<a href="/neovim-docs-web/en/change#%3Adl">:dl</a>  		:dl		short for <a href="/neovim-docs-web/en/change#%3Adelete">:delete</a> with the 'l' flag
<a href="/neovim-docs-web/en/tagsrch#%3Adlist">:dlist</a>  	:dli[st]	list #defines
<a href="/neovim-docs-web/en/autocmd#%3Adoautocmd">:doautocmd</a>  	:do[autocmd]	apply autocommands to current buffer
<a href="/neovim-docs-web/en/autocmd#%3Adoautoall">:doautoall</a>  	:doautoa[ll]	apply autocommands for all loaded buffers
<a href="/neovim-docs-web/en/change#%3Adp">:dp</a>  		:d[elete]p	short for <a href="/neovim-docs-web/en/change#%3Adelete">:delete</a> with the 'p' flag
<a href="/neovim-docs-web/en/windows#%3Adrop">:drop</a>  		:dr[op]		jump to window editing file or edit file in
				current window
<a href="/neovim-docs-web/en/tagsrch#%3Adsearch">:dsearch</a>  	:ds[earch]	list one #define
<a href="/neovim-docs-web/en/tagsrch#%3Adsplit">:dsplit</a>  	:dsp[lit]	split window and jump to #define
<a href="/neovim-docs-web/en/editing#%3Aedit">:edit</a>  		:e[dit]		edit a file
<a href="/neovim-docs-web/en/undo#%3Aearlier">:earlier</a>  	:ea[rlier]	go to older change, undo
<a href="/neovim-docs-web/en/eval#%3Aecho">:echo</a>  		:ec[ho]		echoes the result of expressions
<a href="/neovim-docs-web/en/eval#%3Aechoerr">:echoerr</a>  	:echoe[rr]	like :echo, show like an error and use history
<a href="/neovim-docs-web/en/eval#%3Aechohl">:echohl</a>  	:echoh[l]	set highlighting for echo commands
<a href="/neovim-docs-web/en/eval#%3Aechomsg">:echomsg</a>  	:echom[sg]	same as :echo, put message in history
<a href="/neovim-docs-web/en/eval#%3Aechon">:echon</a>  	:echon		same as :echo, but without <code>&lt;EOL&gt;</code>
<a href="/neovim-docs-web/en/eval#%3Aelse">:else</a>  		:el[se]		part of an :if command
<a href="/neovim-docs-web/en/eval#%3Aelseif">:elseif</a>  	:elsei[f]	part of an :if command
<a href="/neovim-docs-web/en/gui#%3Aemenu">:emenu</a>  	:em[enu]	execute a menu by name
<a href="/neovim-docs-web/en/eval#%3Aendif">:endif</a>  	:en[dif]	end previous :if
<a href="/neovim-docs-web/en/eval#%3Aendfor">:endfor</a>  	:endfo[r]	end previous :for
<a href="/neovim-docs-web/en/userfunc#%3Aendfunction">:endfunction</a>  	:endf[unction]	end of a user function started with :function
<a href="/neovim-docs-web/en/eval#%3Aendtry">:endtry</a>  	:endt[ry]	end previous :try
<a href="/neovim-docs-web/en/eval#%3Aendwhile">:endwhile</a>  	:endw[hile]	end previous :while
<a href="/neovim-docs-web/en/editing#%3Aenew">:enew</a>  		:ene[w]		edit a new, unnamed buffer
<a href="/neovim-docs-web/en/eval#%3Aeval">:eval</a>  		:ev[al]		evaluate an expression and discard the result
<a href="/neovim-docs-web/en/editing#%3Aex">:ex</a>  		:ex		same as ":edit"
<a href="/neovim-docs-web/en/eval#%3Aexecute">:execute</a>  	:exe[cute]	execute result of expressions
<a href="/neovim-docs-web/en/editing#%3Aexit">:exit</a>  		:exi[t]		same as ":xit"
<a href="/neovim-docs-web/en/helphelp#%3Aexusage">:exusage</a>  	:exu[sage]	overview of Ex commands
<a href="/neovim-docs-web/en/editing#%3Afile">:file</a>  		:f[ile]		show or set the current file name
<a href="/neovim-docs-web/en/windows#%3Afiles">:files</a>  	:files		list all files in the buffer list
<a href="/neovim-docs-web/en/filetype#%3Afiletype">:filetype</a>  	:filet[ype]	switch file type detection on/off
<a href="/neovim-docs-web/en/various#%3Afilter">:filter</a>  	:filt[er]	filter output of following command
<a href="/neovim-docs-web/en/editing#%3Afind">:find</a>  		:fin[d]		find file in <a href="/neovim-docs-web/en/options#'path'">'path'</a> and edit it
<a href="/neovim-docs-web/en/eval#%3Afinally">:finally</a>  	:fina[lly]	part of a :try command
<a href="/neovim-docs-web/en/repeat#%3Afinish">:finish</a>  	:fini[sh]	quit sourcing a Vim script
<a href="/neovim-docs-web/en/editing#%3Afirst">:first</a>  	:fir[st]	go to the first file in the argument list
<a href="/neovim-docs-web/en/fold#%3Afold">:fold</a>  		:fo[ld]		create a fold
<a href="/neovim-docs-web/en/fold#%3Afoldclose">:foldclose</a>  	:foldc[lose]	close folds
<a href="/neovim-docs-web/en/fold#%3Afolddoopen">:folddoopen</a>  	:foldd[oopen]	execute command on lines not in a closed fold
<a href="/neovim-docs-web/en/fold#%3Afolddoclosed">:folddoclosed</a>  	:folddoc[losed]	execute command on lines in a closed fold
<a href="/neovim-docs-web/en/fold#%3Afoldopen">:foldopen</a>  	:foldo[pen]	open folds
<a href="/neovim-docs-web/en/eval#%3Afor">:for</a>  		:for		for loop
<a href="/neovim-docs-web/en/userfunc#%3Afunction">:function</a>  	:fu[nction]	define a user function
<a href="/neovim-docs-web/en/repeat#%3Aglobal">:global</a>  	:g[lobal]	execute commands for matching lines
<a href="/neovim-docs-web/en/motion#%3Agoto">:goto</a>  		:go[to]		go to byte in the buffer
<a href="/neovim-docs-web/en/quickfix#%3Agrep">:grep</a>  		:gr[ep]		run <a href="/neovim-docs-web/en/options#'grepprg'">'grepprg'</a> and jump to first match
<a href="/neovim-docs-web/en/quickfix#%3Agrepadd">:grepadd</a>  	:grepa[dd]	like :grep, but append to current list
<a href="/neovim-docs-web/en/vim_diff#%3Agui">:gui</a>  		:gu[i]		start the GUI
<a href="/neovim-docs-web/en/vim_diff#%3Agvim">:gvim</a>  		:gv[im]		start the GUI
<a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a>  	:ha[rdcopy]	send text to the printer
<a href="/neovim-docs-web/en/helphelp#%3Ahelp">:help</a>  		:h[elp]		open a help window
<a href="/neovim-docs-web/en/helphelp#%3Ahelpclose">:helpclose</a>  	:helpc[lose]	close one help window
<a href="/neovim-docs-web/en/helphelp#%3Ahelpgrep">:helpgrep</a>  	:helpg[rep]	like ":grep" but searches help files
<a href="/neovim-docs-web/en/helphelp#%3Ahelptags">:helptags</a>  	:helpt[ags]	generate help tags for a directory
<a href="/neovim-docs-web/en/syntax#%3Ahighlight">:highlight</a>  	:hi[ghlight]	specify highlighting methods
<a href="/neovim-docs-web/en/windows#%3Ahide">:hide</a>  		:hid[e]		hide current buffer for a command
<a href="/neovim-docs-web/en/cmdline#%3Ahistory">:history</a>  	:his[tory]	print a history list
<a href="/neovim-docs-web/en/windows#%3Ahorizontal">:horizontal</a>  	:hor[izontal]	following window command work horizontally
<a href="/neovim-docs-web/en/insert#%3Ainsert">:insert</a>  	:i[nsert]	insert text
<a href="/neovim-docs-web/en/map#%3Aiabbrev">:iabbrev</a>  	:ia[bbrev]	like ":abbrev" but for Insert mode
<a href="/neovim-docs-web/en/map#%3Aiabclear">:iabclear</a>  	:iabc[lear]	like ":abclear" but for Insert mode
<a href="/neovim-docs-web/en/eval#%3Aif">:if</a>  		:if		execute commands when condition met
<a href="/neovim-docs-web/en/tagsrch#%3Aijump">:ijump</a>  	:ij[ump]	jump to definition of identifier
<a href="/neovim-docs-web/en/tagsrch#%3Ailist">:ilist</a>  	:il[ist]	list lines where identifier matches
<a href="/neovim-docs-web/en/map#%3Aimap">:imap</a>  		:im[ap]		like ":map" but for Insert mode
<a href="/neovim-docs-web/en/map#%3Aimapclear">:imapclear</a>  	:imapc[lear]	like ":mapclear" but for Insert mode
<a href="/neovim-docs-web/en/gui#%3Aimenu">:imenu</a>  	:ime[nu]	add menu for Insert mode
<a href="/neovim-docs-web/en/map#%3Ainoremap">:inoremap</a>  	:ino[remap]	like ":noremap" but for Insert mode
<a href="/neovim-docs-web/en/map#%3Ainoreabbrev">:inoreabbrev</a>  	:inorea[bbrev]	like ":noreabbrev" but for Insert mode
<a href="/neovim-docs-web/en/gui#%3Ainoremenu">:inoremenu</a>  	:inoreme[nu]	like ":noremenu" but for Insert mode
<a href="/neovim-docs-web/en/starting#%3Aintro">:intro</a>  	:int[ro]	print the introductory message
<a href="/neovim-docs-web/en/tagsrch#%3Aisearch">:isearch</a>  	:is[earch]	list one line where identifier matches
<a href="/neovim-docs-web/en/tagsrch#%3Aisplit">:isplit</a>  	:isp[lit]	split window and jump to definition of
				identifier
<a href="/neovim-docs-web/en/map#%3Aiunmap">:iunmap</a>  	:iu[nmap]	like ":unmap" but for Insert mode
<a href="/neovim-docs-web/en/map#%3Aiunabbrev">:iunabbrev</a>  	:iuna[bbrev]	like ":unabbrev" but for Insert mode
<a href="/neovim-docs-web/en/gui#%3Aiunmenu">:iunmenu</a>  	:iunme[nu]	remove menu for Insert mode
<a href="/neovim-docs-web/en/change#%3Ajoin">:join</a>  		:j[oin]		join lines
<a href="/neovim-docs-web/en/motion#%3Ajumps">:jumps</a>  	:ju[mps]	print the jump list
<a href="/neovim-docs-web/en/motion#%3Ak">:k</a>  		:k		set a mark
<a href="/neovim-docs-web/en/editing#%3Akeepalt">:keepalt</a>  	:keepa[lt]	following command keeps the alternate file
<a href="/neovim-docs-web/en/motion#%3Akeepmarks">:keepmarks</a>  	:kee[pmarks]	following command keeps marks where they are
<a href="/neovim-docs-web/en/motion#%3Akeepjumps">:keepjumps</a>  	:keepj[umps]	following command keeps jumplist and marks
<a href="/neovim-docs-web/en/cmdline#%3Akeeppatterns">:keeppatterns</a>  	:keepp[atterns]	following command keeps search pattern history
<a href="/neovim-docs-web/en/quickfix#%3AlNext">:lNext</a>  	:lN[ext]	go to previous entry in location list
<a href="/neovim-docs-web/en/quickfix#%3AlNfile">:lNfile</a>  	:lNf[ile]	go to last entry in previous file
<a href="/neovim-docs-web/en/various#%3Alist">:list</a>  		:l[ist]		print lines
<a href="/neovim-docs-web/en/quickfix#%3Alabove">:labove</a>  	:lab[ove]	go to location above current line
<a href="/neovim-docs-web/en/quickfix#%3Aladdexpr">:laddexpr</a>  	:lad[dexpr]	add locations from expr
<a href="/neovim-docs-web/en/quickfix#%3Aladdbuffer">:laddbuffer</a>  	:laddb[uffer]	add locations from buffer
<a href="/neovim-docs-web/en/quickfix#%3Aladdfile">:laddfile</a>  	:laddf[ile]	add locations to current location list
<a href="/neovim-docs-web/en/quickfix#%3Alafter">:lafter</a>  	:laf[ter]	go to location after current cursor
<a href="/neovim-docs-web/en/editing#%3Alast">:last</a>  		:la[st]		go to the last file in the argument list
<a href="/neovim-docs-web/en/mlang#%3Alanguage">:language</a>  	:lan[guage]	set the language (locale)
<a href="/neovim-docs-web/en/undo#%3Alater">:later</a>  	:lat[er]	go to newer change, redo
<a href="/neovim-docs-web/en/quickfix#%3Albefore">:lbefore</a>  	:lbef[ore]	go to location before current cursor
<a href="/neovim-docs-web/en/quickfix#%3Albelow">:lbelow</a>  	:lbel[ow]	go to location below current line
<a href="/neovim-docs-web/en/quickfix#%3Albottom">:lbottom</a>  	:lbo[ttom]	scroll to the bottom of the location window
<a href="/neovim-docs-web/en/quickfix#%3Albuffer">:lbuffer</a>  	:lb[uffer]	parse locations and jump to first location
<a href="/neovim-docs-web/en/editing#%3Alcd">:lcd</a>  		:lc[d]		change directory locally
<a href="/neovim-docs-web/en/editing#%3Alchdir">:lchdir</a>  	:lch[dir]	change directory locally
<a href="/neovim-docs-web/en/quickfix#%3Alclose">:lclose</a>  	:lcl[ose]	close location window
<a href="/neovim-docs-web/en/quickfix#%3Aldo">:ldo</a>  		:ld[o]		execute command in valid location list entries
<a href="/neovim-docs-web/en/quickfix#%3Alfdo">:lfdo</a>  		:lfd[o]		execute command in each file in location list
<a href="/neovim-docs-web/en/change#%3Aleft">:left</a>  		:le[ft]		left align lines
<a href="/neovim-docs-web/en/windows#%3Aleftabove">:leftabove</a>  	:lefta[bove]	make split window appear left or above
<a href="/neovim-docs-web/en/eval#%3Alet">:let</a>  		:let		assign a value to a variable or option
<a href="/neovim-docs-web/en/quickfix#%3Alexpr">:lexpr</a>  	:lex[pr]	read locations from expr and jump to first
<a href="/neovim-docs-web/en/quickfix#%3Alfile">:lfile</a>  	:lf[ile]	read file with locations and jump to first
<a href="/neovim-docs-web/en/quickfix#%3Alfirst">:lfirst</a>  	:lfir[st]	go to the specified location, default first one
<a href="/neovim-docs-web/en/quickfix#%3Algetbuffer">:lgetbuffer</a>  	:lgetb[uffer]	get locations from buffer
<a href="/neovim-docs-web/en/quickfix#%3Algetexpr">:lgetexpr</a>  	:lgete[xpr]	get locations from expr
<a href="/neovim-docs-web/en/quickfix#%3Algetfile">:lgetfile</a>  	:lg[etfile]	read file with locations
<a href="/neovim-docs-web/en/quickfix#%3Algrep">:lgrep</a>  	:lgr[ep]	run <a href="/neovim-docs-web/en/options#'grepprg'">'grepprg'</a> and jump to first match
<a href="/neovim-docs-web/en/quickfix#%3Algrepadd">:lgrepadd</a>  	:lgrepa[dd]	like :grep, but append to current list
<a href="/neovim-docs-web/en/helphelp#%3Alhelpgrep">:lhelpgrep</a>  	:lh[elpgrep]	like ":helpgrep" but uses location list
<a href="/neovim-docs-web/en/quickfix#%3Alhistory">:lhistory</a>  	:lhi[story]	list the location lists
<a href="/neovim-docs-web/en/quickfix#%3All">:ll</a>  		:ll		go to specific location
<a href="/neovim-docs-web/en/quickfix#%3Allast">:llast</a>  	:lla[st]	go to the specified location, default last one
<a href="/neovim-docs-web/en/quickfix#%3Allist">:llist</a>  	:lli[st]	list all locations
<a href="/neovim-docs-web/en/quickfix#%3Almake">:lmake</a>  	:lmak[e]	execute external command <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> and parse
				error messages
<a href="/neovim-docs-web/en/map#%3Almap">:lmap</a>  		:lm[ap]		like ":map!" but includes Lang-Arg mode
<a href="/neovim-docs-web/en/map#%3Almapclear">:lmapclear</a>  	:lmapc[lear]	like ":mapclear!" but includes Lang-Arg mode
<a href="/neovim-docs-web/en/quickfix#%3Alnext">:lnext</a>  	:lne[xt]	go to next location
<a href="/neovim-docs-web/en/quickfix#%3Alnewer">:lnewer</a>  	:lnew[er]	go to newer location list
<a href="/neovim-docs-web/en/quickfix#%3Alnfile">:lnfile</a>  	:lnf[ile]	go to first location in next file
<a href="/neovim-docs-web/en/map#%3Alnoremap">:lnoremap</a>  	:ln[oremap]	like ":noremap!" but includes Lang-Arg mode
<a href="/neovim-docs-web/en/mbyte#%3Aloadkeymap">:loadkeymap</a>  	:loadk[eymap]	load the following keymaps until EOF
<a href="/neovim-docs-web/en/starting#%3Aloadview">:loadview</a>  	:lo[adview]	load view for current window from a file
<a href="/neovim-docs-web/en/motion#%3Alockmarks">:lockmarks</a>  	:loc[kmarks]	following command keeps marks where they are
<a href="/neovim-docs-web/en/eval#%3Alockvar">:lockvar</a>  	:lockv[ar]	lock variables
<a href="/neovim-docs-web/en/quickfix#%3Alolder">:lolder</a>  	:lol[der]	go to older location list
<a href="/neovim-docs-web/en/quickfix#%3Alopen">:lopen</a>  	:lope[n]	open location window
<a href="/neovim-docs-web/en/quickfix#%3Alprevious">:lprevious</a>  	:lp[revious]	go to previous location
<a href="/neovim-docs-web/en/quickfix#%3Alpfile">:lpfile</a>  	:lpf[ile]	go to last location in previous file
<a href="/neovim-docs-web/en/quickfix#%3Alrewind">:lrewind</a>  	:lr[ewind]	go to the specified location, default first one
<a href="/neovim-docs-web/en/windows#%3Als">:ls</a>  		:ls		list all buffers
<a href="/neovim-docs-web/en/tagsrch#%3Altag">:ltag</a>  		:lt[ag]		jump to tag and add matching tags to the
				location list
<a href="/neovim-docs-web/en/map#%3Alunmap">:lunmap</a>  	:lu[nmap]	like ":unmap!" but includes Lang-Arg mode
<a href="/neovim-docs-web/en/lua#%3Alua">:lua</a>  		:lua		execute <a href="/neovim-docs-web/en/lua#Lua">Lua</a> command
<a href="/neovim-docs-web/en/lua#%3Aluado">:luado</a>  	:luad[o]	execute Lua command for each line
<a href="/neovim-docs-web/en/lua#%3Aluafile">:luafile</a>  	:luaf[ile]	execute <a href="/neovim-docs-web/en/lua#Lua">Lua</a> script file
<a href="/neovim-docs-web/en/quickfix#%3Alvimgrep">:lvimgrep</a>  	:lv[imgrep]	search for pattern in files
<a href="/neovim-docs-web/en/quickfix#%3Alvimgrepadd">:lvimgrepadd</a>  	:lvimgrepa[dd]	like :vimgrep, but append to current list
<a href="/neovim-docs-web/en/quickfix#%3Alwindow">:lwindow</a>  	:lw[indow]	open or close location window
<a href="/neovim-docs-web/en/change#%3Amove">:move</a>  		:m[ove]		move lines
<a href="/neovim-docs-web/en/motion#%3Amark">:mark</a>  		:ma[rk]		set a mark
<a href="/neovim-docs-web/en/quickfix#%3Amake">:make</a>  		:mak[e]		execute external command <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> and parse
				error messages
<a href="/neovim-docs-web/en/map#%3Amap">:map</a>  		:map		show or enter a mapping
<a href="/neovim-docs-web/en/map#%3Amapclear">:mapclear</a>  	:mapc[lear]	clear all mappings for Normal and Visual mode
<a href="/neovim-docs-web/en/motion#%3Amarks">:marks</a>  	:marks		list all marks
<a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a>  	:mat[ch]	define a match to highlight
<a href="/neovim-docs-web/en/gui#%3Amenu">:menu</a>  		:me[nu]		enter a new menu item
<a href="/neovim-docs-web/en/mlang#%3Amenutranslate">:menutranslate</a>  :menut[ranslate] add a menu translation item
<a href="/neovim-docs-web/en/message#%3Amessages">:messages</a>  	:mes[sages]	view previously displayed messages
<a href="/neovim-docs-web/en/starting#%3Amkexrc">:mkexrc</a>  	:mk[exrc]	write current mappings and settings to a file
<a href="/neovim-docs-web/en/starting#%3Amksession">:mksession</a>  	:mks[ession]	write session info to a file
<a href="/neovim-docs-web/en/spell#%3Amkspell">:mkspell</a>  	:mksp[ell]	produce .spl spell file
<a href="/neovim-docs-web/en/starting#%3Amkvimrc">:mkvimrc</a>  	:mkv[imrc]	write current mappings and settings to a file
<a href="/neovim-docs-web/en/starting#%3Amkview">:mkview</a>  	:mkvie[w]	write view of current window to a file
<a href="/neovim-docs-web/en/various#%3Amode">:mode</a>  		:mod[e]		show or change the screen mode
<a href="/neovim-docs-web/en/editing#%3Anext">:next</a>  		:n[ext]		go to next file in the argument list
<a href="/neovim-docs-web/en/windows#%3Anew">:new</a>  		:new		create a new empty window
<a href="/neovim-docs-web/en/map#%3Anmap">:nmap</a>  		:nm[ap]		like ":map" but for Normal mode
<a href="/neovim-docs-web/en/map#%3Anmapclear">:nmapclear</a>  	:nmapc[lear]	clear all mappings for Normal mode
<a href="/neovim-docs-web/en/gui#%3Anmenu">:nmenu</a>  	:nme[nu]	add menu for Normal mode
<a href="/neovim-docs-web/en/map#%3Annoremap">:nnoremap</a>  	:nn[oremap]	like ":noremap" but for Normal mode
<a href="/neovim-docs-web/en/gui#%3Annoremenu">:nnoremenu</a>  	:nnoreme[nu]	like ":noremenu" but for Normal mode
<a href="/neovim-docs-web/en/autocmd#%3Anoautocmd">:noautocmd</a>  	:noa[utocmd]	following commands don't trigger autocommands
<a href="/neovim-docs-web/en/map#%3Anoremap">:noremap</a>  	:no[remap]	enter a mapping that will not be remapped
<a href="/neovim-docs-web/en/pattern#%3Anohlsearch">:nohlsearch</a>  	:noh[lsearch]	suspend <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> highlighting
<a href="/neovim-docs-web/en/map#%3Anoreabbrev">:noreabbrev</a>  	:norea[bbrev]	enter an abbreviation that will not be
				remapped
<a href="/neovim-docs-web/en/gui#%3Anoremenu">:noremenu</a>  	:noreme[nu]	enter a menu that will not be remapped
<a href="/neovim-docs-web/en/various#%3Anormal">:normal</a>  	:norm[al]	execute Normal mode commands
<a href="/neovim-docs-web/en/recover#%3Anoswapfile">:noswapfile</a>  	:nos[wapfile]	following commands don't create a swap file
<a href="/neovim-docs-web/en/various#%3Anumber">:number</a>  	:nu[mber]	print lines with line number
<a href="/neovim-docs-web/en/map#%3Anunmap">:nunmap</a>  	:nun[map]	like ":unmap" but for Normal mode
<a href="/neovim-docs-web/en/gui#%3Anunmenu">:nunmenu</a>  	:nunme[nu]	remove menu for Normal mode
<a href="/neovim-docs-web/en/starting#%3Aoldfiles">:oldfiles</a>  	:ol[dfiles]	list files that have marks in the <a href="/neovim-docs-web/en/starting#shada">shada</a> file
<a href="/neovim-docs-web/en/map#%3Aomap">:omap</a>  		:om[ap]		like ":map" but for Operator-pending mode
<a href="/neovim-docs-web/en/map#%3Aomapclear">:omapclear</a>  	:omapc[lear]	remove all mappings for Operator-pending mode
<a href="/neovim-docs-web/en/gui#%3Aomenu">:omenu</a>  	:ome[nu]	add menu for Operator-pending mode
<a href="/neovim-docs-web/en/windows#%3Aonly">:only</a>  		:on[ly]		close all windows except the current one
<a href="/neovim-docs-web/en/map#%3Aonoremap">:onoremap</a>  	:ono[remap]	like ":noremap" but for Operator-pending mode
<a href="/neovim-docs-web/en/gui#%3Aonoremenu">:onoremenu</a>  	:onoreme[nu]	like ":noremenu" but for Operator-pending mode
<a href="/neovim-docs-web/en/options#%3Aoptions">:options</a>  	:opt[ions]	open the options-window
<a href="/neovim-docs-web/en/map#%3Aounmap">:ounmap</a>  	:ou[nmap]	like ":unmap" but for Operator-pending mode
<a href="/neovim-docs-web/en/gui#%3Aounmenu">:ounmenu</a>  	:ounme[nu]	remove menu for Operator-pending mode
<a href="/neovim-docs-web/en/syntax#%3Aownsyntax">:ownsyntax</a>  	:ow[nsyntax]	set new local syntax highlight for this window
<a href="/neovim-docs-web/en/repeat#%3Apackadd">:packadd</a>  	:pa[ckadd]	add a plugin from <a href="/neovim-docs-web/en/options#'packpath'">'packpath'</a>
<a href="/neovim-docs-web/en/repeat#%3Apackloadall">:packloadall</a>  	:packl[oadall]	load all packages under <a href="/neovim-docs-web/en/options#'packpath'">'packpath'</a>
<a href="/neovim-docs-web/en/windows#%3Apclose">:pclose</a>  	:pc[lose]	close preview window
<a href="/neovim-docs-web/en/windows#%3Apedit">:pedit</a>  	:ped[it]	edit file in the preview window
<a href="/neovim-docs-web/en/if_perl#%3Aperl">:perl</a>  		:pe[rl]		execute perl command
<a href="/neovim-docs-web/en/if_perl#%3Aperldo">:perldo</a>  	:perld[o]	execute perl command for each line
<a href="/neovim-docs-web/en/if_perl#%3Aperlfile">:perlfile</a>  	:perlf[ile]	execute perl script file
<a href="/neovim-docs-web/en/various#%3Aprint">:print</a>  	:p[rint]	print lines
<a href="/neovim-docs-web/en/repeat#%3Aprofdel">:profdel</a>  	:profd[el]	stop profiling a function or script
<a href="/neovim-docs-web/en/repeat#%3Aprofile">:profile</a>  	:prof[ile]	profiling functions and scripts
<a href="/neovim-docs-web/en/tagsrch#%3Apop">:pop</a>  		:po[p]		jump to older entry in tag stack
<a href="/neovim-docs-web/en/gui#%3Apopup">:popup</a>  	:popu[p]	popup a menu by name
<a href="/neovim-docs-web/en/windows#%3Appop">:ppop</a>  		:pp[op]		":pop" in preview window
<a href="/neovim-docs-web/en/recover#%3Apreserve">:preserve</a>  	:pre[serve]	write all text to swap file
<a href="/neovim-docs-web/en/editing#%3Aprevious">:previous</a>  	:prev[ious]	go to previous file in argument list
<a href="/neovim-docs-web/en/windows#%3Apsearch">:psearch</a>  	:ps[earch]	like ":ijump" but shows match in preview window
<a href="/neovim-docs-web/en/windows#%3Aptag">:ptag</a>  		:pt[ag]		show tag in preview window
<a href="/neovim-docs-web/en/tagsrch#%3AptNext">:ptNext</a>  	:ptN[ext]	<a href="/neovim-docs-web/en/tagsrch#%3AtNext">:tNext</a> in preview window
<a href="/neovim-docs-web/en/tagsrch#%3Aptfirst">:ptfirst</a>  	:ptf[irst]	<a href="/neovim-docs-web/en/tagsrch#%3Atrewind">:trewind</a> in preview window
<a href="/neovim-docs-web/en/tagsrch#%3Aptjump">:ptjump</a>  	:ptj[ump]	<a href="/neovim-docs-web/en/tagsrch#%3Atjump">:tjump</a> and show tag in preview window
<a href="/neovim-docs-web/en/tagsrch#%3Aptlast">:ptlast</a>  	:ptl[ast]	<a href="/neovim-docs-web/en/tagsrch#%3Atlast">:tlast</a> in preview window
<a href="/neovim-docs-web/en/tagsrch#%3Aptnext">:ptnext</a>  	:ptn[ext]	<a href="/neovim-docs-web/en/tagsrch#%3Atnext">:tnext</a> in preview window
<a href="/neovim-docs-web/en/tagsrch#%3Aptprevious">:ptprevious</a>  	:ptp[revious]	<a href="/neovim-docs-web/en/tagsrch#%3Atprevious">:tprevious</a> in preview window
<a href="/neovim-docs-web/en/tagsrch#%3Aptrewind">:ptrewind</a>  	:ptr[ewind]	<a href="/neovim-docs-web/en/tagsrch#%3Atrewind">:trewind</a> in preview window
<a href="/neovim-docs-web/en/tagsrch#%3Aptselect">:ptselect</a>  	:pts[elect]	<a href="/neovim-docs-web/en/tagsrch#%3Atselect">:tselect</a> and show tag in preview window
<a href="/neovim-docs-web/en/change#%3Aput">:put</a>  		:pu[t]		insert contents of register in the text
<a href="/neovim-docs-web/en/editing#%3Apwd">:pwd</a>  		:pw[d]		print current directory
<a href="/neovim-docs-web/en/if_pyth#%3Apy3">:py3</a>  		:py3		execute Python 3 command
<a href="/neovim-docs-web/en/if_pyth#%3Apython3">:python3</a>  	:python3	same as :py3
<a href="/neovim-docs-web/en/if_pyth#%3Apy3do">:py3do</a>  	:py3d[o]	execute Python 3 command for each line
<a href="/neovim-docs-web/en/if_pyth#%3Apy3file">:py3file</a>  	:py3f[ile]	execute Python 3 script file
<a href="/neovim-docs-web/en/if_pyth#%3Apython">:python</a>  	:py[thon]	execute Python command
<a href="/neovim-docs-web/en/if_pyth#%3Apydo">:pydo</a>  		:pyd[o]		execute Python command for each line
<a href="/neovim-docs-web/en/if_pyth#%3Apyfile">:pyfile</a>  	:pyf[ile]	execute Python script file
<a href="/neovim-docs-web/en/if_pyth#%3Apyx">:pyx</a>  		:pyx		execute <a href="/neovim-docs-web/en/if_pyth#python_x">python_x</a> command
<a href="/neovim-docs-web/en/if_pyth#%3Apythonx">:pythonx</a>  	:pythonx	same as :pyx
<a href="/neovim-docs-web/en/if_pyth#%3Apyxdo">:pyxdo</a>  	:pyxd[o]	execute <a href="/neovim-docs-web/en/if_pyth#python_x">python_x</a> command for each line
<a href="/neovim-docs-web/en/if_pyth#%3Apyxfile">:pyxfile</a>  	:pyxf[ile]	execute <a href="/neovim-docs-web/en/if_pyth#python_x">python_x</a> script file
<a href="/neovim-docs-web/en/editing#%3Aquit">:quit</a>  		:q[uit]		quit current window (when one window quit Vim)
<a href="/neovim-docs-web/en/editing#%3Aquitall">:quitall</a>  	:quita[ll]	quit Vim
<a href="/neovim-docs-web/en/editing#%3Aqall">:qall</a>  		:qa[ll]		quit Vim
<a href="/neovim-docs-web/en/insert#%3Aread">:read</a>  		:r[ead]		read file into the text
<a href="/neovim-docs-web/en/recover#%3Arecover">:recover</a>  	:rec[over]	recover a file from a swap file
<a href="/neovim-docs-web/en/undo#%3Aredo">:redo</a>  		:red[o]		redo one undone change
<a href="/neovim-docs-web/en/various#%3Aredir">:redir</a>  	:redi[r]	redirect messages to a file or register
<a href="/neovim-docs-web/en/various#%3Aredraw">:redraw</a>  	:redr[aw]	force a redraw of the display
<a href="/neovim-docs-web/en/various#%3Aredrawstatus">:redrawstatus</a>  	:redraws[tatus]	force a redraw of the status line(s) and
				window bar(s)
<a href="/neovim-docs-web/en/various#%3Aredrawtabline">:redrawtabline</a>  :redrawt[abline]  force a redraw of the tabline
<a href="/neovim-docs-web/en/change#%3Aregisters">:registers</a>  	:reg[isters]	display the contents of registers
<a href="/neovim-docs-web/en/windows#%3Aresize">:resize</a>  	:res[ize]	change current window height
<a href="/neovim-docs-web/en/change#%3Aretab">:retab</a>  	:ret[ab]	change tab size
<a href="/neovim-docs-web/en/userfunc#%3Areturn">:return</a>  	:retu[rn]	return from a user function
<a href="/neovim-docs-web/en/editing#%3Arewind">:rewind</a>  	:rew[ind]	go to the first file in the argument list
<a href="/neovim-docs-web/en/change#%3Aright">:right</a>  	:ri[ght]	right align text
<a href="/neovim-docs-web/en/windows#%3Arightbelow">:rightbelow</a>  	:rightb[elow]	make split window appear right or below
<a href="/neovim-docs-web/en/starting#%3Arshada">:rshada</a>  	:rsh[ada]	read from <a href="/neovim-docs-web/en/starting#shada">shada</a> file
<a href="/neovim-docs-web/en/if_ruby#%3Aruby">:ruby</a>  		:rub[y]		execute Ruby command
<a href="/neovim-docs-web/en/if_ruby#%3Arubydo">:rubydo</a>  	:rubyd[o]	execute Ruby command for each line
<a href="/neovim-docs-web/en/if_ruby#%3Arubyfile">:rubyfile</a>  	:rubyf[ile]	execute Ruby script file
<a href="/neovim-docs-web/en/undo#%3Arundo">:rundo</a>  	:rund[o]	read undo information from a file
<a href="/neovim-docs-web/en/repeat#%3Aruntime">:runtime</a>  	:ru[ntime]	source vim scripts in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>
<a href="/neovim-docs-web/en/change#%3Asubstitute">:substitute</a>  	:s[ubstitute]	find and replace text
<a href="/neovim-docs-web/en/windows#%3AsNext">:sNext</a>  	:sN[ext]	split window and go to previous file in
				argument list
<a href="/neovim-docs-web/en/eval#%3Asandbox">:sandbox</a>  	:san[dbox]	execute a command in the sandbox
<a href="/neovim-docs-web/en/windows#%3Asargument">:sargument</a>  	:sa[rgument]	split window and go to specific file in
				argument list
<a href="/neovim-docs-web/en/windows#%3Asall">:sall</a>  		:sal[l]		open a window for each file in argument list
<a href="/neovim-docs-web/en/editing#%3Asaveas">:saveas</a>  	:sav[eas]	save file under another name.
<a href="/neovim-docs-web/en/windows#%3Asbuffer">:sbuffer</a>  	:sb[uffer]	split window and go to specific file in the
				buffer list
<a href="/neovim-docs-web/en/windows#%3AsbNext">:sbNext</a>  	:sbN[ext]	split window and go to previous file in the
				buffer list
<a href="/neovim-docs-web/en/windows#%3Asball">:sball</a>  	:sba[ll]	open a window for each file in the buffer list
<a href="/neovim-docs-web/en/windows#%3Asbfirst">:sbfirst</a>  	:sbf[irst]	split window and go to first file in the
				buffer list
<a href="/neovim-docs-web/en/windows#%3Asblast">:sblast</a>  	:sbl[ast]	split window and go to last file in buffer
				list
<a href="/neovim-docs-web/en/windows#%3Asbmodified">:sbmodified</a>  	:sbm[odified]	split window and go to modified file in the
				buffer list
<a href="/neovim-docs-web/en/windows#%3Asbnext">:sbnext</a>  	:sbn[ext]	split window and go to next file in the buffer
				list
<a href="/neovim-docs-web/en/windows#%3Asbprevious">:sbprevious</a>  	:sbp[revious]	split window and go to previous file in the
				buffer list
<a href="/neovim-docs-web/en/windows#%3Asbrewind">:sbrewind</a>  	:sbr[ewind]	split window and go to first file in the
				buffer list
<a href="/neovim-docs-web/en/repeat#%3Ascriptnames">:scriptnames</a>  	:scr[iptnames]	list names of all sourced Vim scripts
<a href="/neovim-docs-web/en/repeat#%3Ascriptencoding">:scriptencoding</a> :scripte[ncoding]  encoding used in sourced Vim script
<a href="/neovim-docs-web/en/options#%3Aset">:set</a>  		:se[t]		show or set options
<a href="/neovim-docs-web/en/options#%3Asetfiletype">:setfiletype</a>  	:setf[iletype]	set <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a>, unless it was set already
<a href="/neovim-docs-web/en/options#%3Asetglobal">:setglobal</a>  	:setg[lobal]	show global values of options
<a href="/neovim-docs-web/en/options#%3Asetlocal">:setlocal</a>  	:setl[ocal]	show or set options locally
<a href="/neovim-docs-web/en/windows#%3Asfind">:sfind</a>  	:sf[ind]	split current window and edit file in <a href="/neovim-docs-web/en/options#'path'">'path'</a>
<a href="/neovim-docs-web/en/windows#%3Asfirst">:sfirst</a>  	:sfir[st]	split window and go to first file in the
				argument list
<a href="/neovim-docs-web/en/sign#%3Asign">:sign</a>  		:sig[n]		manipulate signs
<a href="/neovim-docs-web/en/various#%3Asilent">:silent</a>  	:sil[ent]	run a command silently
<a href="/neovim-docs-web/en/various#%3Asleep">:sleep</a>  	:sl[eep]	do nothing for a few seconds
<a href="/neovim-docs-web/en/windows#%3Aslast">:slast</a>  	:sla[st]	split window and go to last file in the
				argument list
<a href="/neovim-docs-web/en/change#%3Asmagic">:smagic</a>  	:sm[agic]	:substitute with <a href="/neovim-docs-web/en/options#'magic'">'magic'</a>
<a href="/neovim-docs-web/en/map#%3Asmap">:smap</a>  		:smap		like ":map" but for Select mode
<a href="/neovim-docs-web/en/map#%3Asmapclear">:smapclear</a>  	:smapc[lear]	remove all mappings for Select mode
<a href="/neovim-docs-web/en/gui#%3Asmenu">:smenu</a>  	:sme[nu]	add menu for Select mode
<a href="/neovim-docs-web/en/windows#%3Asnext">:snext</a>  	:sn[ext]	split window and go to next file in the
				argument list
<a href="/neovim-docs-web/en/change#%3Asnomagic">:snomagic</a>  	:sno[magic]	:substitute with <a href="/neovim-docs-web/en/options#'nomagic'">'nomagic'</a>
<a href="/neovim-docs-web/en/map#%3Asnoremap">:snoremap</a>  	:snor[emap]	like ":noremap" but for Select mode
<a href="/neovim-docs-web/en/gui#%3Asnoremenu">:snoremenu</a>  	:snoreme[nu]	like ":noremenu" but for Select mode
<a href="/neovim-docs-web/en/change#%3Asort">:sort</a>  		:sor[t]		sort lines
<a href="/neovim-docs-web/en/repeat#%3Asource">:source</a>  	:so[urce]	read Vim or Ex commands from a file
<a href="/neovim-docs-web/en/spell#%3Aspelldump">:spelldump</a>  	:spelld[ump]	split window and fill with all correct words
<a href="/neovim-docs-web/en/spell#%3Aspellgood">:spellgood</a>  	:spe[llgood]	add good word for spelling
<a href="/neovim-docs-web/en/spell#%3Aspellinfo">:spellinfo</a>  	:spelli[nfo]	show info about loaded spell files
<a href="/neovim-docs-web/en/spell#%3Aspellrare">:spellrare</a>  	:spellra[re]	add rare word for spelling
<a href="/neovim-docs-web/en/spell#%3Aspellrepall">:spellrepall</a>  	:spellr[epall]	replace all bad words like last <a href="/neovim-docs-web/en/spell#z%3D">z=</a>
<a href="/neovim-docs-web/en/spell#%3Aspellundo">:spellundo</a>  	:spellu[ndo]	remove good or bad word
<a href="/neovim-docs-web/en/spell#%3Aspellwrong">:spellwrong</a>  	:spellw[rong]	add spelling mistake
<a href="/neovim-docs-web/en/windows#%3Asplit">:split</a>  	:sp[lit]	split current window
<a href="/neovim-docs-web/en/windows#%3Asprevious">:sprevious</a>  	:spr[evious]	split window and go to previous file in the
				argument list
<a href="/neovim-docs-web/en/windows#%3Asrewind">:srewind</a>  	:sre[wind]	split window and go to first file in the
				argument list
<a href="/neovim-docs-web/en/starting#%3Astop">:stop</a>  		:st[op]		suspend the editor or escape to a shell
<a href="/neovim-docs-web/en/windows#%3Astag">:stag</a>  		:sta[g]		split window and jump to a tag
<a href="/neovim-docs-web/en/insert#%3Astartinsert">:startinsert</a>  	:star[tinsert]	start Insert mode
<a href="/neovim-docs-web/en/insert#%3Astartgreplace">:startgreplace</a>  :startg[replace] start Virtual Replace mode
<a href="/neovim-docs-web/en/insert#%3Astartreplace">:startreplace</a>  	:startr[eplace]	start Replace mode
<a href="/neovim-docs-web/en/insert#%3Astopinsert">:stopinsert</a>  	:stopi[nsert]	stop Insert mode
<a href="/neovim-docs-web/en/tagsrch#%3Astjump">:stjump</a>  	:stj[ump]	do ":tjump" and split window
<a href="/neovim-docs-web/en/tagsrch#%3Astselect">:stselect</a>  	:sts[elect]	do ":tselect" and split window
<a href="/neovim-docs-web/en/windows#%3Asunhide">:sunhide</a>  	:sun[hide]	same as ":unhide"
<a href="/neovim-docs-web/en/map#%3Asunmap">:sunmap</a>  	:sunm[ap]	like ":unmap" but for Select mode
<a href="/neovim-docs-web/en/gui#%3Asunmenu">:sunmenu</a>  	:sunme[nu]	remove menu for Select mode
<a href="/neovim-docs-web/en/starting#%3Asuspend">:suspend</a>  	:sus[pend]	same as ":stop"
<a href="/neovim-docs-web/en/windows#%3Asview">:sview</a>  	:sv[iew]	split window and edit file read-only
<a href="/neovim-docs-web/en/recover#%3Aswapname">:swapname</a>  	:sw[apname]	show the name of the current swap file
<a href="/neovim-docs-web/en/syntax#%3Asyntax">:syntax</a>  	:sy[ntax]	syntax highlighting
<a href="/neovim-docs-web/en/syntax#%3Asyntime">:syntime</a>  	:synti[me]	measure syntax highlighting speed
<a href="/neovim-docs-web/en/scroll#%3Asyncbind">:syncbind</a>  	:sync[bind]	sync scroll binding
<a href="/neovim-docs-web/en/change#%3At">:t</a>  		:t		same as ":copy"
<a href="/neovim-docs-web/en/tagsrch#%3AtNext">:tNext</a>  	:tN[ext]	jump to previous matching tag
<a href="/neovim-docs-web/en/tabpage#%3AtabNext">:tabNext</a>  	:tabN[ext]	go to previous tab page
<a href="/neovim-docs-web/en/tabpage#%3Atabclose">:tabclose</a>  	:tabc[lose]	close current tab page
<a href="/neovim-docs-web/en/tabpage#%3Atabdo">:tabdo</a>  	:tabdo		execute command in each tab page
<a href="/neovim-docs-web/en/tabpage#%3Atabedit">:tabedit</a>  	:tabe[dit]	edit a file in a new tab page
<a href="/neovim-docs-web/en/tabpage#%3Atabfind">:tabfind</a>  	:tabf[ind]	find file in <a href="/neovim-docs-web/en/options#'path'">'path'</a>, edit it in a new tab page
<a href="/neovim-docs-web/en/tabpage#%3Atabfirst">:tabfirst</a>  	:tabfir[st]	go to first tab page
<a href="/neovim-docs-web/en/tabpage#%3Atablast">:tablast</a>  	:tabl[ast]	go to last tab page
<a href="/neovim-docs-web/en/tabpage#%3Atabmove">:tabmove</a>  	:tabm[ove]	move tab page to other position
<a href="/neovim-docs-web/en/tabpage#%3Atabnew">:tabnew</a>  	:tabnew		edit a file in a new tab page
<a href="/neovim-docs-web/en/tabpage#%3Atabnext">:tabnext</a>  	:tabn[ext]	go to next tab page
<a href="/neovim-docs-web/en/tabpage#%3Atabonly">:tabonly</a>  	:tabo[nly]	close all tab pages except the current one
<a href="/neovim-docs-web/en/tabpage#%3Atabprevious">:tabprevious</a>  	:tabp[revious]	go to previous tab page
<a href="/neovim-docs-web/en/tabpage#%3Atabrewind">:tabrewind</a>  	:tabr[ewind]	go to first tab page
<a href="/neovim-docs-web/en/tabpage#%3Atabs">:tabs</a>  		:tabs		list the tab pages and what they contain
<a href="/neovim-docs-web/en/tabpage#%3Atab">:tab</a>  		:tab		create new tab when opening new window
<a href="/neovim-docs-web/en/tagsrch#%3Atag">:tag</a>  		:ta[g]		jump to tag
<a href="/neovim-docs-web/en/tagsrch#%3Atags">:tags</a>  		:tags		show the contents of the tag stack
<a href="/neovim-docs-web/en/editing#%3Atcd">:tcd</a>  		:tc[d]		change directory for tab page
<a href="/neovim-docs-web/en/editing#%3Atchdir">:tchdir</a>  	:tch[dir]	change directory for tab page
<a href="/neovim-docs-web/en/various#%3Aterminal">:terminal</a>  	:te[rminal]	open a terminal buffer
<a href="/neovim-docs-web/en/tagsrch#%3Atfirst">:tfirst</a>  	:tf[irst]	jump to first matching tag
<a href="/neovim-docs-web/en/eval#%3Athrow">:throw</a>  	:th[row]	throw an exception
<a href="/neovim-docs-web/en/tagsrch#%3Atjump">:tjump</a>  	:tj[ump]	like ":tselect", but jump directly when there
				is only one match
<a href="/neovim-docs-web/en/tagsrch#%3Atlast">:tlast</a>  	:tl[ast]	jump to last matching tag
<a href="/neovim-docs-web/en/gui#%3Atlmenu">:tlmenu</a>  	:tlm[enu]	add menu for <a href="/neovim-docs-web/en/intro#Terminal-mode">Terminal-mode</a>
<a href="/neovim-docs-web/en/gui#%3Atlnoremenu">:tlnoremenu</a>  	:tln[oremenu]	like ":noremenu" but for <a href="/neovim-docs-web/en/intro#Terminal-mode">Terminal-mode</a>
<a href="/neovim-docs-web/en/gui#%3Atlunmenu">:tlunmenu</a>  	:tlu[nmenu]	remove menu for <a href="/neovim-docs-web/en/intro#Terminal-mode">Terminal-mode</a>
<a href="/neovim-docs-web/en/map#%3Atmapclear">:tmapclear</a>  	:tmapc[lear]	remove all mappings for <a href="/neovim-docs-web/en/intro#Terminal-mode">Terminal-mode</a>
<a href="/neovim-docs-web/en/map#%3Atmap">:tmap</a>  		:tma[p]		like ":map" but for <a href="/neovim-docs-web/en/intro#Terminal-mode">Terminal-mode</a>
<a href="/neovim-docs-web/en/gui#%3Atmenu">:tmenu</a>  	:tm[enu]	define menu tooltip
<a href="/neovim-docs-web/en/tagsrch#%3Atnext">:tnext</a>  	:tn[ext]	jump to next matching tag
<a href="/neovim-docs-web/en/map#%3Atnoremap">:tnoremap</a>  	:tno[remap]	like ":noremap" but for <a href="/neovim-docs-web/en/intro#Terminal-mode">Terminal-mode</a>
<a href="/neovim-docs-web/en/windows#%3Atopleft">:topleft</a>  	:to[pleft]	make split window appear at top or far left
<a href="/neovim-docs-web/en/tagsrch#%3Atprevious">:tprevious</a>  	:tp[revious]	jump to previous matching tag
<a href="/neovim-docs-web/en/tagsrch#%3Atrewind">:trewind</a>  	:tr[ewind]	jump to first matching tag
<a href="/neovim-docs-web/en/eval#%3Atry">:try</a>  		:try		execute commands, abort on error or exception
<a href="/neovim-docs-web/en/tagsrch#%3Atselect">:tselect</a>  	:ts[elect]	list matching tags and select one
<a href="/neovim-docs-web/en/map#%3Atunmap">:tunmap</a>  	:tunma[p]	like ":unmap" but for <a href="/neovim-docs-web/en/intro#Terminal-mode">Terminal-mode</a>
<a href="/neovim-docs-web/en/gui#%3Atunmenu">:tunmenu</a>  	:tu[nmenu]	remove menu tooltip
<a href="/neovim-docs-web/en/undo#%3Aundo">:undo</a>  		:u[ndo]		undo last change(s)
<a href="/neovim-docs-web/en/undo#%3Aundojoin">:undojoin</a>  	:undoj[oin]	join next change with previous undo block
<a href="/neovim-docs-web/en/undo#%3Aundolist">:undolist</a>  	:undol[ist]	list leafs of the undo tree
<a href="/neovim-docs-web/en/map#%3Aunabbreviate">:unabbreviate</a>  	:una[bbreviate]	remove abbreviation
<a href="/neovim-docs-web/en/windows#%3Aunhide">:unhide</a>  	:unh[ide]	open a window for each loaded file in the
				buffer list
<a href="/neovim-docs-web/en/eval#%3Aunlet">:unlet</a>  	:unl[et]	delete variable
<a href="/neovim-docs-web/en/eval#%3Aunlockvar">:unlockvar</a>  	:unlo[ckvar]	unlock variables
<a href="/neovim-docs-web/en/map#%3Aunmap">:unmap</a>  	:unm[ap]	remove mapping
<a href="/neovim-docs-web/en/gui#%3Aunmenu">:unmenu</a>  	:unme[nu]	remove menu
<a href="/neovim-docs-web/en/various#%3Aunsilent">:unsilent</a>  	:uns[ilent]	run a command not silently
<a href="/neovim-docs-web/en/editing#%3Aupdate">:update</a>  	:up[date]	write buffer if modified
<a href="/neovim-docs-web/en/repeat#%3Avglobal">:vglobal</a>  	:v[global]	execute commands for not matching lines
<a href="/neovim-docs-web/en/various#%3Aversion">:version</a>  	:ve[rsion]	print version number and other info
<a href="/neovim-docs-web/en/various#%3Averbose">:verbose</a>  	:verb[ose]	execute command with <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> set
<a href="/neovim-docs-web/en/windows#%3Avertical">:vertical</a>  	:vert[ical]	make following command split vertically
<a href="/neovim-docs-web/en/quickfix#%3Avimgrep">:vimgrep</a>  	:vim[grep]	search for pattern in files
<a href="/neovim-docs-web/en/quickfix#%3Avimgrepadd">:vimgrepadd</a>  	:vimgrepa[dd]	like :vimgrep, but append to current list
<a href="/neovim-docs-web/en/editing#%3Avisual">:visual</a>  	:vi[sual]	same as ":edit", but turns off "Ex" mode
<a href="/neovim-docs-web/en/helphelp#%3Aviusage">:viusage</a>  	:viu[sage]	overview of Normal mode commands
<a href="/neovim-docs-web/en/editing#%3Aview">:view</a>  		:vie[w]		edit a file read-only
<a href="/neovim-docs-web/en/map#%3Avmap">:vmap</a>  		:vm[ap]		like ":map" but for Visual+Select mode
<a href="/neovim-docs-web/en/map#%3Avmapclear">:vmapclear</a>  	:vmapc[lear]	remove all mappings for Visual+Select mode
<a href="/neovim-docs-web/en/gui#%3Avmenu">:vmenu</a>  	:vme[nu]	add menu for Visual+Select mode
<a href="/neovim-docs-web/en/windows#%3Avnew">:vnew</a>  		:vne[w]		create a new empty window, vertically split
<a href="/neovim-docs-web/en/map#%3Avnoremap">:vnoremap</a>  	:vn[oremap]	like ":noremap" but for Visual+Select mode
<a href="/neovim-docs-web/en/gui#%3Avnoremenu">:vnoremenu</a>  	:vnoreme[nu]	like ":noremenu" but for Visual+Select mode
<a href="/neovim-docs-web/en/windows#%3Avsplit">:vsplit</a>  	:vs[plit]	split current window vertically
<a href="/neovim-docs-web/en/map#%3Avunmap">:vunmap</a>  	:vu[nmap]	like ":unmap" but for Visual+Select mode
<a href="/neovim-docs-web/en/gui#%3Avunmenu">:vunmenu</a>  	:vunme[nu]	remove menu for Visual+Select mode
<a href="/neovim-docs-web/en/windows#%3Awindo">:windo</a>  	:windo		execute command in each window
<a href="/neovim-docs-web/en/editing#%3Awrite">:write</a>  	:w[rite]	write to a file
<a href="/neovim-docs-web/en/editing#%3AwNext">:wNext</a>  	:wN[ext]	write to a file and go to previous file in
				argument list
<a href="/neovim-docs-web/en/editing#%3Awall">:wall</a>  		:wa[ll]		write all (changed) buffers
<a href="/neovim-docs-web/en/eval#%3Awhile">:while</a>  	:wh[ile]	execute loop for as long as condition met
<a href="/neovim-docs-web/en/gui#%3Awinsize">:winsize</a>  	:wi[nsize]	get or set window size (obsolete)
<a href="/neovim-docs-web/en/windows#%3Awincmd">:wincmd</a>  	:winc[md]	execute a Window (<code>CTRL-W</code>) command
<a href="/neovim-docs-web/en/gui#%3Awinpos">:winpos</a>  	:winp[os]	get or set window position
<a href="/neovim-docs-web/en/editing#%3Awnext">:wnext</a>  	:wn[ext]	write to a file and go to next file in
				argument list
<a href="/neovim-docs-web/en/editing#%3Awprevious">:wprevious</a>  	:wp[revious]	write to a file and go to previous file in
				argument list
<a href="/neovim-docs-web/en/editing#%3Awq">:wq</a>  		:wq		write to a file and quit window or Vim
<a href="/neovim-docs-web/en/editing#%3Awqall">:wqall</a>  	:wqa[ll]	write all changed buffers and quit Vim
<a href="/neovim-docs-web/en/starting#%3Awshada">:wshada</a>  	:wsh[ada]	write to ShaDa file
<a href="/neovim-docs-web/en/undo#%3Awundo">:wundo</a>  	:wu[ndo]	write undo information to a file
<a href="/neovim-docs-web/en/editing#%3Axit">:xit</a>  		:x[it]		write if buffer changed and close window
<a href="/neovim-docs-web/en/editing#%3Axall">:xall</a>  		:xa[ll]		same as ":wqall"
<a href="/neovim-docs-web/en/map#%3Axmapclear">:xmapclear</a>  	:xmapc[lear]	remove all mappings for Visual mode
<a href="/neovim-docs-web/en/map#%3Axmap">:xmap</a>  		:xm[ap]		like ":map" but for Visual mode
<a href="/neovim-docs-web/en/gui#%3Axmenu">:xmenu</a>  	:xme[nu]	add menu for Visual mode
<a href="/neovim-docs-web/en/map#%3Axnoremap">:xnoremap</a>  	:xn[oremap]	like ":noremap" but for Visual mode
<a href="/neovim-docs-web/en/gui#%3Axnoremenu">:xnoremenu</a>  	:xnoreme[nu]	like ":noremenu" but for Visual mode
<a href="/neovim-docs-web/en/map#%3Axunmap">:xunmap</a>  	:xu[nmap]	like ":unmap" but for Visual mode
<a href="/neovim-docs-web/en/gui#%3Axunmenu">:xunmenu</a>  	:xunme[nu]	remove menu for Visual mode
<a href="/neovim-docs-web/en/change#%3Ayank">:yank</a>  		:y[ank]		yank lines into a register
<a href="/neovim-docs-web/en/various#%3Az">:z</a>  		:z		print some lines
<a href="/neovim-docs-web/en/change#%3A~">:~</a>  		:~		repeat last ":substitute"</div>

  
  