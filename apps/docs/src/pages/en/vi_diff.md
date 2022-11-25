---
title:  Vi_diff
layout: ../../layouts/MainLayout.astro
---

  <a name="vi_diff.txt"></a><a name="vi-differences"></a><h1> Vi_diff</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/vi_diff.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Differences between Vim and Vi</div>
<div class="old-help-para"><h2 class="help-heading">1. Limits<span class="help-heading-tags">						<a name="limits"></a><span class="help-tag">limits</span></span></h2></div>
<div class="old-help-para">Vim has only a few limits for the files that can be edited <code>{Vi: can not handle}</code>
<code>&lt;Nul&gt;</code> characters and characters above 128, has limited line length, many other
limits}.</div>
<div class="old-help-para">Maximum line length	   2147483647 characters
Maximum number of lines	   2147483647 lines
Maximum file size	   2147483647 bytes (2 Gbyte) when a long integer is
			   32 bits.  Much more for 64 bit longs.  Also limited
			   by available disk space for the <a href="/neovim-docs-web/en/recover#swap-file">swap-file</a>.
							<a name="E75"></a><code class="help-tag-right">E75</code>
Length of a file path	   Unix and Win32: 1024 characters, otherwise 256
			   characters (or as much as the system supports).
Length of an expanded string option
			   Unix and Win32: 1024 characters, otherwise 256
			   characters
Maximum display width	   Unix and Win32: 1024 characters, otherwise 255
			   characters
Maximum lhs of a mapping   50 characters.
Number of different highlighting types: over 30000
Range of a Number variable:  -2147483648 to 2147483647 (might be more on 64
			   bit systems)
Maximum length of a line in a tags file: 512 bytes.</div>
<div class="old-help-para">Information for undo and text in registers is kept in memory, thus when making
(big) changes the amount of (virtual) memory available limits the number of
undo levels and the text that can be kept in registers.  Other things are also
kept in memory:  Command-line history, error messages for Quickfix mode, etc.</div>
<div class="old-help-para"><h2 class="help-heading">2. The most interesting additions<span class="help-heading-tags">			<a name="vim-additions"></a><span class="help-tag">vim-additions</span></span></h2></div>
<div class="old-help-para">Support for different systems.
	Vim can be used on:
<div class="help-li" style=""> Modern Unix systems (BSD, Linux, etc.)
</div><div class="help-li" style=""> Windows (XP SP 2 or greater)
</div><div class="help-li" style=""> OS X
</div></div>
<div class="old-help-para">Multi level persistent undo.					<a href="/neovim-docs-web/en/undo#undo">undo</a>
	'u' goes backward in time, '<code>CTRL-R</code>' goes forward again.  Set option
	<a href="/neovim-docs-web/en/options#'undolevels'">'undolevels'</a> to the number of changes to be remembered (default 1000).
	Set <a href="/neovim-docs-web/en/options#'undolevels'">'undolevels'</a> to 0 for a Vi-compatible one level undo.  Set it to
	-1 for no undo at all.
	When all changes in a buffer have been undone, the buffer is not
	considered changed anymore.  You can exit it with :q, without &lt;!&gt;.
	When undoing a few changes and then making a new change Vim will
	create a branch in the undo tree.  This means you can go back to any
	state of the text, there is no risk of a change causing text to be
	lost forever. <a href="/neovim-docs-web/en/undo#undo-tree">undo-tree</a>
	The undo information is stored in a file when the <a href="/neovim-docs-web/en/options#'undofile'">'undofile'</a> option is
	set.  This means you can exit Vim, start Vim on a previously edited
	file and undo changes that were made before exiting Vim.</div>
<div class="old-help-para">Graphical User Interface (GUI).				<a href="/neovim-docs-web/en/gui#gui">gui</a>
	Included support for GUI: menu's, mouse, scrollbars, etc.  You can
	define your own menus.  Better support for CTRL/SHIFT/ALT keys in
	combination with special keys and mouse.  Supported for various
	platforms such as Win32.</div>
<div class="old-help-para">Multiple windows and buffers.				<a href="/neovim-docs-web/en/windows#windows.txt">windows.txt</a>
	Vim can split the screen into several windows, each editing a
	different buffer or the same buffer at a different location.  Buffers
	can still be loaded (and changed) but not displayed in a window.  This
	is called a hidden buffer.  Many commands and options have been added
	for this facility.
	Vim can also use multiple tab pages, each with one or more windows.  A
	line with tab labels can be used to quickly switch between these pages.
	<a href="/neovim-docs-web/en/tabpage#tab-page">tab-page</a></div>
<div class="old-help-para">Syntax highlighting.					<a href="/neovim-docs-web/en/syntax#%3Asyntax">:syntax</a>
	Vim can highlight keywords, patterns and other things.  This is
	defined by a number of <a href="/neovim-docs-web/en/syntax#%3Asyntax">:syntax</a> commands, and can be made to
	highlight most languages and file types.  A number of files are
	included for highlighting the most common languages, like C, C++,
	Java, Pascal, Makefiles, shell scripts, etc.  The colors used for
	highlighting can be defined for ordinary terminals, color terminals
	and the GUI with the <a href="/neovim-docs-web/en/syntax#%3Ahighlight">:highlight</a> command.  A convenient way to do
	this is using a <a href="/neovim-docs-web/en/syntax#%3Acolorscheme">:colorscheme</a> command.
	The highlighted text can be exported as HTML. <a href="/neovim-docs-web/en/syntax#convert-to-HTML">convert-to-HTML</a>
	Other items that can be highlighted are matches with the search string
	<a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a>, matching parens <a href="/neovim-docs-web/en/pi_paren#matchparen">matchparen</a> and the cursor line and
	column <a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a> <a href="/neovim-docs-web/en/options#'cursorcolumn'">'cursorcolumn'</a>.</div>
<div class="old-help-para">Spell checking.						<a href="/neovim-docs-web/en/spell#spell">spell</a>
	When the <a href="/neovim-docs-web/en/options#'spell'">'spell'</a> option is set Vim will highlight spelling mistakes.
	About 50 languages are currently supported, selected with the
	<a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> option.  In source code only comments and strings are
	checked for spelling.</div>
<div class="old-help-para">Folding.						<a href="/neovim-docs-web/en/fold#folding">folding</a>
	A range of lines can be shown as one "folded" line.  This allows
	overviewing a file and moving blocks of text around quickly.
	Folds can be created manually, from the syntax of the file, by indent,
	etc.</div>
<div class="old-help-para">Diff mode.						<a href="/neovim-docs-web/en/diff#diff-mode">diff-mode</a>
	Vim can show two versions of a file with the differences highlighted.
	Parts of the text that are equal are folded away.  Commands can be
	used to move text from one version to the other.</div>
<div class="old-help-para">Plugins.						<a href="/neovim-docs-web/en/usr_05#add-plugin">add-plugin</a>
	The functionality can be extended by dropping a plugin file in the
	right directory.  That's an easy way to start using Vim scripts
	written by others.  Plugins can be for all kind of files, or
	specifically for a filetype.
	Packages make this even easier. <a href="/neovim-docs-web/en/repeat#packages">packages</a></div>
<div class="old-help-para">Asynchronous communication and timers.			<a href="/neovim-docs-web/en/job_control#job-control">job-control</a> <a href="/neovim-docs-web/en/builtin#timer">timer</a>
	Vim can exchange messages with other processes in the background.
	Vim can start a job, communicate with it and stop it. <a href="/neovim-docs-web/en/job_control#job-control">job-control</a>
	Timers can fire once or repeatedly and invoke a function to do any
	work. <a href="/neovim-docs-web/en/builtin#timer">timer</a></div>
<div class="old-help-para">Repeat a series of commands.				<a href="/neovim-docs-web/en/repeat#q">q</a>
	"q{c}" starts recording typed characters into named register <code>{c}</code>.
	A subsequent "q" stops recording.  The register can then be executed
	with the "@{c}" command.  This is very useful to repeat a complex
	action.</div>
<div class="old-help-para">Flexible insert mode.					<a href="/neovim-docs-web/en/insert#ins-special-special">ins-special-special</a>
	The arrow keys can be used in insert mode to move around in the file.
	This breaks the insert in two parts as far as undo and redo is
	concerned.</div>
<div class="old-help-para">	<code>CTRL-O</code> can be used to execute a single Normal mode command.  This is
	almost the same as hitting <code>&lt;Esc&gt;</code>, typing the command and doing <a href="/neovim-docs-web/en/insert#a">a</a>.</div>
<div class="old-help-para">Visual mode.						<a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>
	Visual mode can be used to first highlight a piece of text and then
	give a command to do something with it.  This is an (easy to use)
	alternative to first giving the operator and then moving to the end of
	the text to be operated upon.
	<a href="/neovim-docs-web/en/visual#v">v</a> and <a href="/neovim-docs-web/en/visual#V">V</a> are used to start Visual mode.  <a href="/neovim-docs-web/en/visual#v">v</a> works on characters
	and <a href="/neovim-docs-web/en/visual#V">V</a> on lines.  Move the cursor to extend the Visual area.  It is
	shown highlighted on the screen.  By typing "o" the other end of the
	Visual area can be moved.  The Visual area can be affected by an
	operator:
		d	delete
		c	change
		y	yank
		&gt; or &lt;	insert or delete indent
		!	filter through external program
		=	filter through indent
		:	start <a href="/neovim-docs-web/en/cmdline#%3A">:</a> command for the Visual lines.
		gq	format text to <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> columns
		J	join lines
		~	swap case
		u	make lowercase
		U	make uppercase</div>
<div class="old-help-para">Block operators.					<a href="/neovim-docs-web/en/visual#visual-block">visual-block</a>
	With Visual mode a rectangular block of text can be selected.  Start
	Visual mode with <code>CTRL-V</code>.  The block can be deleted ("d"), yanked ("y")
	or its case can be changed ("~", "u" and "U").  A deleted or yanked
	block can be put into the text with the "p" and "P" commands.</div>
<div class="old-help-para">Help system.						<a href="/neovim-docs-web/en/helphelp#%3Ahelp">:help</a>
	Help is displayed in a window.  The usual commands can be used to
	move around, search for a string, etc.  Tags can be used to jump
	around in the help files, just like hypertext links.  The <a href="/neovim-docs-web/en/helphelp#%3Ahelp">:help</a>
	command takes an argument to quickly jump to the info on a subject.
	<code>&lt;F1&gt;</code> is the quick access to the help system.  The name of the help
	index file can be set with the <a href="/neovim-docs-web/en/options#'helpfile'">'helpfile'</a> option.</div>
<div class="old-help-para">Command-line editing and history.			<a href="/neovim-docs-web/en/cmdline#cmdline-editing">cmdline-editing</a>
	You can insert or delete at any place in the command-line using the
	cursor keys.  The right/left cursor keys can be used to move
	forward/backward one character.  The shifted right/left cursor keys
	can be used to move forward/backward one word.  <code>CTRL-B</code>/CTRL-E can be
	used to go to the begin/end of the command-line.
	<code>{Vi: can only alter the last character in the line}</code>
	<code>{Vi: when hitting &lt;Esc&gt; the command-line is executed.  This is}</code>
	unexpected for most people; therefore it was changed in Vim.  But when
	the <code>&lt;Esc&gt;</code> is part of a mapping, the command-line is executed.  If you
	want the Vi behaviour also when typing <code>&lt;Esc&gt;</code>, use ":cmap ^V&lt;Esc&gt;
	^V^M"}
							<a href="/neovim-docs-web/en/cmdline#cmdline-history">cmdline-history</a>
	The command-lines are remembered.  The up/down cursor keys can be used
	to recall previous command-lines.  The <a href="/neovim-docs-web/en/options#'history'">'history'</a> option can be set to
	the number of lines that will be remembered.  There is a separate
	history for commands and for search patterns.</div>
<div class="old-help-para">Command-line completion.				<a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a>
	While entering a command-line (on the bottom line of the screen)
	<code>&lt;Tab&gt;</code> can be typed to complete
<div class="help-column_heading">	   what		example</div><div class="help-li" style=""> command	:e&lt;Tab&gt;
</div><div class="help-li" style=""> tag		:ta scr&lt;Tab&gt;
</div><div class="help-li" style=""> option	:set sc&lt;Tab&gt;
</div><div class="help-li" style=""> option value  :set hf=&lt;Tab&gt;
</div><div class="help-li" style=""> file name	:e ve&lt;Tab&gt;
</div><div class="help-li" style=""> etc.
</div></div>
<div class="old-help-para">	If there are multiple matches, <code>CTRL-N</code> (next) and <code>CTRL-P</code> (previous)
	will walk through the matches.  <code>&lt;Tab&gt;</code> works like <code>CTRL-N</code>, but wraps
	around to the first match.</div>
<div class="old-help-para">	The <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> option can be set to the character for command-line
	completion, <code>&lt;Tab&gt;</code> is the default.  <code>CTRL-D</code> can be typed after an
	(incomplete) wildcard; all matches will be listed.  <code>CTRL-A</code> will insert
	all matches.  <code>CTRL-L</code> will insert the longest common part of the
	matches.</div>
<div class="old-help-para">Insert-mode completion.					<a href="/neovim-docs-web/en/insert#ins-completion">ins-completion</a>
	In Insert mode the <code>CTRL-N</code> and <code>CTRL-P</code> keys can be used to complete a
	word that appears elsewhere.	<a href="/neovim-docs-web/en/insert#i_CTRL-N">i_CTRL-N</a>
	With <code>CTRL-X</code> another mode is entered, through which completion can be
	done for:
	<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-F">i_CTRL-X_CTRL-F</a>  	file names
	<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-K">i_CTRL-X_CTRL-K</a>  	words from <a href="/neovim-docs-web/en/options#'dictionary'">'dictionary'</a> files
	<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-T">i_CTRL-X_CTRL-T</a>  	words from <a href="/neovim-docs-web/en/options#'thesaurus'">'thesaurus'</a> files
	<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-I">i_CTRL-X_CTRL-I</a>  	words from included files
	<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-L">i_CTRL-X_CTRL-L</a>  	whole lines
	<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-%5D">i_CTRL-X_CTRL-]</a>  	words from the tags file
	<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-D">i_CTRL-X_CTRL-D</a>  	definitions or macros
	<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-O">i_CTRL-X_CTRL-O</a>  	Omni completion: clever completion
				specifically for a file type
	etc.</div>
<div class="old-help-para">Long line support.					<a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> <a href="/neovim-docs-web/en/options#'linebreak'">'linebreak'</a>
	If the <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> option is off, long lines will not wrap and only part
	of them will be shown.  When the cursor is moved to a part that is not
	shown, the screen will scroll horizontally.  The minimum number of
	columns to scroll can be set with the <a href="/neovim-docs-web/en/options#'sidescroll'">'sidescroll'</a> option.  The <a href="/neovim-docs-web/en/scroll#zh">zh</a>
	and <a href="/neovim-docs-web/en/scroll#zl">zl</a> commands can be used to scroll sideways.
	Alternatively, long lines are broken in between words when the
	<a href="/neovim-docs-web/en/options#'linebreak'">'linebreak'</a> option is set.  This allows editing a single-line
	paragraph conveniently (e.g. when the text is later read into a DTP
	program).  Move the cursor up/down with the <a href="/neovim-docs-web/en/motion#gk">gk</a> and <a href="/neovim-docs-web/en/motion#gj">gj</a> commands.</div>
<div class="old-help-para">Text formatting.					<a href="/neovim-docs-web/en/change#formatting">formatting</a>
	The <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> option can be used to automatically limit the line
	length.  This supplements the <a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a> option of Vi, which was not
	very useful.  The <a href="/neovim-docs-web/en/change#gq">gq</a> operator can be used to format a piece of text
	(for example, <a href="/neovim-docs-web/en/change#gqap">gqap</a> formats the current paragraph).  Commands for
	text alignment: <a href="/neovim-docs-web/en/change#%3Acenter">:center</a>, <a href="/neovim-docs-web/en/change#%3Aleft">:left</a> and <a href="/neovim-docs-web/en/change#%3Aright">:right</a>.</div>
<div class="old-help-para">Extended search patterns.				<a href="/neovim-docs-web/en/pattern#pattern">pattern</a>
	There are many extra items to match various text items.  Examples:
	A "\n" can be used in a search pattern to match a line break.
	"x\{2,4}" matches "x" 2 to 4 times.
	"\s" matches a white space character.</div>
<div class="old-help-para">Directory, remote and archive browsing.			<a href="/neovim-docs-web/en/pi_netrw#netrw">netrw</a>
	Vim can browse the file system.  Simply edit a directory.  Move around
	in the list with the usual commands and press <code>&lt;Enter&gt;</code> to go to the
	directory or file under the cursor.
	This also works for remote files over ftp, http, ssh, etc.
	Zip and tar archives can also be browsed. <a href="/neovim-docs-web/en/pi_tar#tar">tar</a> <a href="/neovim-docs-web/en/pi_zip#zip">zip</a></div>
<div class="old-help-para">Edit-compile-edit speedup.				<a href="/neovim-docs-web/en/quickfix#quickfix">quickfix</a>
	The <a href="/neovim-docs-web/en/quickfix#%3Amake">:make</a> command can be used to run the compilation and jump to the
	first error.  A file with compiler error messages is interpreted.  Vim
	jumps to the first error.</div>
<div class="old-help-para">	Each line in the error file is scanned for the name of a file, line
	number and error message.  The <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> option can be set to a
	list of scanf-like strings to handle output from many compilers.</div>
<div class="old-help-para">	The <a href="/neovim-docs-web/en/quickfix#%3Acn">:cn</a> command can be used to jump to the next error.
	<a href="/neovim-docs-web/en/quickfix#%3Acl">:cl</a> lists all the error messages.  Other commands are available.
	The <a href="/neovim-docs-web/en/options#'makeef'">'makeef'</a> option has the name of the file with error messages.
	The <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> option contains the name of the program to be executed
	with the <a href="/neovim-docs-web/en/quickfix#%3Amake">:make</a> command.
	The <a href="/neovim-docs-web/en/options#'shellpipe'">'shellpipe'</a> option contains the string to be used to put the
	output of the compiler into the errorfile.</div>
<div class="old-help-para">Finding matches in files.				<a href="/neovim-docs-web/en/quickfix#%3Avimgrep">:vimgrep</a>
	Vim can search for a pattern in multiple files.  This uses the
	advanced Vim regexp pattern, works on all systems and also works to
	search in compressed files.</div>
<div class="old-help-para">Improved indenting for programs.			<a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a>
	When the <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> option is on the indent of each line is
	automatically adjusted.  C syntax is mostly recognized.  The indent
	for various styles can be set with <a href="/neovim-docs-web/en/options#'cinoptions'">'cinoptions'</a>.  The keys to trigger
	indenting can be set with <a href="/neovim-docs-web/en/options#'cinkeys'">'cinkeys'</a>.</div>
<div class="old-help-para">	Comments can be automatically formatted.  The <a href="/neovim-docs-web/en/options#'comments'">'comments'</a> option can be
	set to the characters that start and end a comment.  This works best
	for C code, but also works for e-mail ("&gt;" at start of the line) and
	other types of text.  The <a href="/neovim-docs-web/en/change#%3D">=</a> operator can be used to re-indent
	lines.</div>
<div class="old-help-para">	For many other languages an indent plugin is present to support
	automatic indenting. <a href="/neovim-docs-web/en/usr_30#30.3">30.3</a></div>
<div class="old-help-para">Searching for words in included files.			<a href="/neovim-docs-web/en/tagsrch#include-search">include-search</a>
	The <a href="/neovim-docs-web/en/tagsrch#%5Bi">[i</a> command can be used to search for a match of the word under
	the cursor in the current and included files.  The <a href="/neovim-docs-web/en/options#'include'">'include'</a> option
	can be set to a pattern that describes a command to include a file
	(the default is for C programs).
	The <a href="/neovim-docs-web/en/tagsrch#%5BI">[I</a> command lists all matches, the <a href="/neovim-docs-web/en/tagsrch#%5B_CTRL-I">[_CTRL-I</a> command jumps to
	a match.
	The <a href="/neovim-docs-web/en/tagsrch#%5Bd">[d</a>, <a href="/neovim-docs-web/en/tagsrch#%5BD">[D</a> and <a href="/neovim-docs-web/en/tagsrch#%5B_CTRL-D">[_CTRL-D</a> commands do the same, but only for
	lines where the pattern given with the <a href="/neovim-docs-web/en/options#'define'">'define'</a> option matches.</div>
<div class="old-help-para">Automatic commands.					<a href="/neovim-docs-web/en/autocmd#autocommand">autocommand</a>
	Commands can be automatically executed when reading a file, writing a
	file, jumping to another buffer, etc., depending on the file name.
	This is useful to set options and mappings for C programs,
	documentation, plain text, e-mail, etc.  This also makes it possible
	to edit compressed files.</div>
<div class="old-help-para">Scripts and Expressions.				<a href="/neovim-docs-web/en/eval#expression">expression</a>
	Commands have been added to form up a powerful script language.
	<a href="/neovim-docs-web/en/eval#%3Aif">:if</a>  		Conditional execution, which can be used for example
			to set options depending on the value of $TERM.
	<a href="/neovim-docs-web/en/eval#%3Awhile">:while</a>  	Repeat a number of commands.
	<a href="/neovim-docs-web/en/eval#%3Afor">:for</a>  		Loop over a list.
	<a href="/neovim-docs-web/en/eval#%3Aecho">:echo</a>  		Print the result of an expression.
	<a href="/neovim-docs-web/en/eval#%3Alet">:let</a>  		Assign a value to an internal variable, option, etc.
			Variable types are Number, String, List and Dictionary.
	<a href="/neovim-docs-web/en/eval#%3Aexecute">:execute</a>  	Execute a command formed by an expression.
	<a href="/neovim-docs-web/en/eval#%3Atry">:try</a>  		Catch exceptions.
	etc., etc.  See <a href="/neovim-docs-web/en/eval#eval">eval</a>.
	Debugging and profiling are supported. <a href="/neovim-docs-web/en/repeat#debug-scripts">debug-scripts</a> <a href="/neovim-docs-web/en/repeat#profile">profile</a>
	If this is not enough, an interface is provided to <a href="/neovim-docs-web/en/if_pyth#Python">Python</a>.</div>
<div class="old-help-para">Viminfo.
	The command-line history, marks and registers can be stored in a file
	that is read on startup.  This can be used to repeat a search command
	or command-line command after exiting and restarting Vim.  It is also
	possible to jump right back to where the last edit stopped with <a href="/neovim-docs-web/en/motion#'0">'0</a>.
	The <a href="/neovim-docs-web/en/deprecated#'viminfo'">'viminfo'</a> option can be set to select which items to store in the
	.viminfo file.  This is off by default.</div>
<div class="old-help-para">Printing.						<a href="/neovim-docs-web/en/print#printing">printing</a>
	The <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a> command sends text to the printer.  This can include
	syntax highlighting.</div>
<div class="old-help-para">Mouse support.						<a href="/neovim-docs-web/en/term#mouse-using">mouse-using</a>
	The mouse is supported in the GUI version, in an xterm for Unix, for
	BSDs with sysmouse, for Linux with gpm, and for Win32.  It can be used
	to position the cursor, select the visual area, paste a register, etc.</div>
<div class="old-help-para">Usage of key names.					<a href="/neovim-docs-web/en/intro#%3C%3E">&lt;&gt;</a> <a href="/neovim-docs-web/en/intro#key-notation">key-notation</a>
	Special keys now all have a name like <code>&lt;Up&gt;</code>, <code>&lt;End&gt;</code>, etc.
	This name can be used in mappings, to make it easy to edit them.</div>
<div class="old-help-para">Editing binary files.					<a href="/neovim-docs-web/en/editing#edit-binary">edit-binary</a>
	Vim can edit binary files.  You can change a few characters in an
	executable file, without corrupting it.  Vim doesn't remove NUL
	characters (they are represented as <code>&lt;NL&gt;</code> internally).
	<a href="/neovim-docs-web/en/starting#-b">-b</a>  		command-line argument to start editing a binary file
	<a href="/neovim-docs-web/en/options#'binary'">'binary'</a>  	Option set by <a href="/neovim-docs-web/en/starting#-b">-b</a>.  Prevents adding an <code>&lt;EOL&gt;</code> for the
			last line in the file.</div>
<div class="old-help-para">Multi-language support.					<a href="/neovim-docs-web/en/mlang#multi-lang">multi-lang</a>
	Files in double-byte or multibyte encodings can be edited.  There is
	UTF-8 support to be able to edit various languages at the same time,
	without switching fonts. <a href="/neovim-docs-web/en/mbyte#UTF-8">UTF-8</a>
	Messages and menus are available in different languages.</div>
<div class="old-help-para">Move cursor beyond lines.
	When the <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> option is set the cursor can move all over the
	screen, also where there is no text.  This is useful to edit tables
	and figures easily.</div>

  
  