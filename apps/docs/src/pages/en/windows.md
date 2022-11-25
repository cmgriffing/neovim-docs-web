---
title:  Windows
layout: ../../layouts/MainLayout.astro
---

  <a name="windows.txt"></a><a name="windows"></a><h1> Windows</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/windows.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Editing with multiple windows and buffers. <a name="buffers"></a><code class="help-tag">buffers</code></div>
<div class="old-help-para">The commands which have been added to use multiple windows and buffers are
explained here.  Additionally, there are explanations for commands that work
differently when used in combination with more than one window.</div>
<div class="old-help-para">The basics are explained in chapter 7 and 8 of the user manual <a href="usr_07.html#usr_07.txt">usr_07.txt</a>
<a href="usr_08.html#usr_08.txt">usr_08.txt</a>.</div>
<div class="old-help-para"><h2 class="help-heading">1. Introduction<span class="help-heading-tags">					<a name="windows-intro"></a><span class="help-tag">windows-intro</span> <a name="window"></a><span class="help-tag">window</span></span></h2></div>
<div class="old-help-para">Summary:
   A buffer is the in-memory text of a file.
   A window is a viewport on a buffer.
   A tab page is a collection of windows.</div>
<div class="old-help-para">A window is a viewport onto a buffer.  You can use multiple windows on one
buffer, or several windows on different buffers.</div>
<div class="old-help-para">A buffer is a file loaded into memory for editing.  The original file remains
unchanged until you write the buffer to the file.</div>
<div class="old-help-para">A buffer can be in one of three states:</div>
<div class="old-help-para">							<a name="active-buffer"></a><code class="help-tag-right">active-buffer</code>
active:   The buffer is displayed in a window.  If there is a file for this
	  buffer, it has been read into the buffer.  The buffer may have been
	  modified since then and thus be different from the file.
							<a name="hidden-buffer"></a><code class="help-tag-right">hidden-buffer</code>
hidden:   The buffer is not displayed.  If there is a file for this buffer, it
	  has been read into the buffer.  Otherwise it's the same as an active
	  buffer, you just can't see it.
							<a name="inactive-buffer"></a><code class="help-tag-right">inactive-buffer</code>
inactive: The buffer is not displayed and does not contain anything.  Options
	  for the buffer are remembered if the file was once loaded.  It can
	  contain marks from the <a href="starting.html#shada">shada</a> file.  But the buffer doesn't
	  contain text.</div>
<div class="old-help-para">In a table:</div>
<div class="old-help-para"><div class="help-column_heading">state		displayed	loaded		":buffers"</div><div class="help-column_heading">		in window			shows</div>active		  yes		 yes		  'a'
hidden		  no		 yes		  'h'
inactive	  no		 no		  ' '</div>
<div class="old-help-para">Note: All <code>CTRL-W</code> commands can also be executed with <a href="windows.html#%3Awincmd">:wincmd</a>, for those
places where a Normal mode command can't be used or is inconvenient.</div>
<div class="old-help-para">The main Vim window can hold several split windows.  There are also tab pages
<a href="tabpage.html#tab-page">tab-page</a>, each of which can hold multiple windows.
					<a name="window-ID"></a><code class="help-tag-right">window-ID</code> <a name="winid"></a><code class="help-tag">winid</code> <a name="windowid"></a><code class="help-tag">windowid</code>
Each window has a unique identifier called the window ID.  This identifier
will not change within a Vim session. The <a href="builtin.html#win_getid()">win_getid()</a> and <a href="builtin.html#win_id2tabwin()">win_id2tabwin()</a>
functions can be used to convert between the window/tab number and the
identifier.  There is also the window number, which may change whenever
windows are opened or closed, see <a href="builtin.html#winnr()">winnr()</a>.
The window number is only valid in one specific tab.  The window ID is valid
across tabs.  For most functions that take a window ID or a window number, the
window number only applies to the current tab, while the window ID can refer
to a window in any tab.</div>
<div class="old-help-para">Each buffer has a unique number and the number will not change within a Vim
session.  The <a href="builtin.html#bufnr()">bufnr()</a> and <a href="builtin.html#bufname()">bufname()</a> functions can be used to convert
between a buffer name and the buffer number.</div>
<div class="old-help-para"><h2 class="help-heading">2. Starting Vim<span class="help-heading-tags">						<a name="windows-starting"></a><span class="help-tag">windows-starting</span></span></h2></div>
<div class="old-help-para">By default, Vim starts with one window, just like Vi.</div>
<div class="old-help-para">The "-o" and "-O" arguments to Vim can be used to open a window for each file
in the argument list.  The "-o" argument will split the windows horizontally;
the "-O" argument will split the windows vertically.  If both "-o" and "-O"
are given, the last one encountered will be used to determine the split
orientation.  For example, this will open three windows, split horizontally:<pre>vim -o file1 file2 file3</pre>
"-oN", where N is a decimal number, opens N windows split horizontally.  If
there are more file names than windows, only N windows are opened and some
files do not get a window.  If there are more windows than file names, the
last few windows will be editing empty buffers.  Similarly, "-ON" opens N
windows split vertically, with the same restrictions.</div>
<div class="old-help-para">If there are many file names, the windows will become very small.  You might
want to set the <a href="options.html#'winheight'">'winheight'</a> and/or <a href="options.html#'winwidth'">'winwidth'</a> options to create a workable
situation.</div>
<div class="old-help-para">Buf/Win Enter/Leave <a href="autocmd.html#autocommand">autocommand</a>s are not executed when opening the new
windows and reading the files, that's only done when they are really entered.</div>
<div class="old-help-para">							<a name="status-line"></a><code class="help-tag-right">status-line</code>
A status line will be used to separate windows.  The <a href="options.html#'laststatus'">'laststatus'</a> option tells
when the last window also has a status line:
	<a href="options.html#'laststatus'">'laststatus'</a> = 0	never a status line
	<a href="options.html#'laststatus'">'laststatus'</a> = 1	status line if there is more than one window
	<a href="options.html#'laststatus'">'laststatus'</a> = 2	always a status line
	<a href="options.html#'laststatus'">'laststatus'</a> = 3	have a global statusline at the bottom instead
				of one for each window</div>
<div class="old-help-para">You can change the contents of the status line with the <a href="options.html#'statusline'">'statusline'</a> option.
This option can be local to the window, so that you can have a different
status line in each window.</div>
<div class="old-help-para">Normally, inversion is used to display the status line.  This can be changed
with the <a href="syntax.html#hl-StatusLine">hl-StatusLine</a> highlight group.  If no highlighting is used for the
status line, the '^' character is used for the current window, and '=' for
other windows.  If <a href="options.html#'mouse'">'mouse'</a> is enabled, a status line can be dragged to resize
windows.</div>
<div class="old-help-para">							<a name="filler-lines"></a><code class="help-tag-right">filler-lines</code>
The lines after the last buffer line in a window are called filler lines.  By
default, these lines start with a tilde (~) character. The "eob" item in the
<a href="options.html#'fillchars'">'fillchars'</a> option can be used to change this character. By default, these
characters are highlighted as NonText (<a href="syntax.html#hl-NonText">hl-NonText</a>). The EndOfBuffer
highlight group (<a href="syntax.html#hl-EndOfBuffer">hl-EndOfBuffer</a>) can be used to change the highlighting of
the filler characters.</div>
<div class="old-help-para"><h2 class="help-heading">3. Opening and closing a window<span class="help-heading-tags">				<a name="opening-window"></a><span class="help-tag">opening-window</span></span></h2></div>
<div class="old-help-para">CTRL-W s						<a name="CTRL-W_s"></a><code class="help-tag-right">CTRL-W_s</code>
CTRL-W S						<a name="CTRL-W_S"></a><code class="help-tag-right">CTRL-W_S</code>
CTRL-W <code>CTRL-S</code>						<a name="CTRL-W_CTRL-S"></a><code class="help-tag-right">CTRL-W_CTRL-S</code>
:[N]sp[lit] [++opt] [+cmd] [file]			<a name="%3Asp"></a><code class="help-tag-right">:sp</code> <a name="%3Asplit"></a><code class="help-tag">:split</code>
		Split current window in two.  The result is two viewports on
		the same file.</div>
<div class="old-help-para">		Make the new window N high (default is to use half the height
		of the current window).  Reduces the current window height to
		create room (and others, if the <a href="options.html#'equalalways'">'equalalways'</a> option is set,
		<a href="options.html#'eadirection'">'eadirection'</a> isn't "hor", and one of them is higher than the
		current or the new window).</div>
<div class="old-help-para">		If [file] is given it will be edited in the new window.  If it
		is not loaded in any buffer, it will be read.  Else the new
		window will use the already loaded buffer.</div>
<div class="old-help-para">		Note: <code>CTRL-S</code> does not work on all terminals and might block
		further input, use <code>CTRL-Q</code> to get going again.
		Also see <a href="editing.html#%2B%2Bopt">++opt</a> and <a href="editing.html#%2Bcmd">+cmd</a>.
							<a name="E242"></a><code class="help-tag-right">E242</code> <a name="E1159"></a><code class="help-tag">E1159</code>
		Be careful when splitting a window in an autocommand, it may
		mess up the window layout if this happens while making other
		window layout changes.</div>
<div class="old-help-para">CTRL-W <code>CTRL-V</code>						<a name="CTRL-W_CTRL-V"></a><code class="help-tag-right">CTRL-W_CTRL-V</code>
CTRL-W v						<a name="CTRL-W_v"></a><code class="help-tag-right">CTRL-W_v</code>
:[N]vs[plit] [++opt] [+cmd] [file]			<a name="%3Avs"></a><code class="help-tag-right">:vs</code> <a name="%3Avsplit"></a><code class="help-tag">:vsplit</code>
		Like <a href="windows.html#%3Asplit">:split</a>, but split vertically.  The windows will be
		spread out horizontally if
		1. a width was not specified,
		2. <a href="options.html#'equalalways'">'equalalways'</a> is set,
		3. <a href="options.html#'eadirection'">'eadirection'</a> isn't "ver", and
		4. one of the other windows is wider than the current or new
		   window.
		If N was given make the new window N columns wide, if
		possible.
		Note: In other places <code>CTRL-Q</code> does the same as <code>CTRL-V</code>, but here
		it doesn't!</div>
<div class="old-help-para">CTRL-W n						<a name="CTRL-W_n"></a><code class="help-tag-right">CTRL-W_n</code>
<h3 class="help-heading">CTRL-W CTRL_N<span class="help-heading-tags">						<a name="CTRL-W_CTRL-N"></a><span class="help-tag">CTRL-W_CTRL-N</span></span></h3>:[N]new [++opt] [+cmd]					<a name="%3Anew"></a><code class="help-tag-right">:new</code>
		Create a new window and start editing an empty file in it.
		Make new window N high (default is to use half the existing
		height).  Reduces the current window height to create room (and
		others, if the <a href="options.html#'equalalways'">'equalalways'</a> option is set and <a href="options.html#'eadirection'">'eadirection'</a>
		isn't "hor").
		Also see <a href="editing.html#%2B%2Bopt">++opt</a> and <a href="editing.html#%2Bcmd">+cmd</a>.
		If <a href="options.html#'fileformats'">'fileformats'</a> is not empty, the first format given will be
		used for the new buffer.  If <a href="options.html#'fileformats'">'fileformats'</a> is empty, the
		<a href="options.html#'fileformat'">'fileformat'</a> of the current buffer is used.  This can be
		overridden with the <a href="editing.html#%2B%2Bopt">++opt</a> argument.
		Autocommands are executed in this order:
		1. WinLeave for the current window
		2. WinEnter for the new window
		3. BufLeave for the current buffer
		4. BufEnter for the new buffer
		This behaves like a ":split" first, and then an ":enew"
		command.</div>
<div class="old-help-para">:[N]new [++opt] [+cmd] <code>{file}</code>
:[N]sp[lit] [++opt] [+cmd] <code>{file}</code>			<a name="%3Asplit_f"></a><code class="help-tag-right">:split_f</code>
		Create a new window and start editing file <code>{file}</code> in it.  This
		behaves almost like a ":split" first, and then an ":edit"
		command, but the alternate file name in the original window is
		set to <code>{file}</code>.
		If [+cmd] is given, execute the command when the file has been
		loaded <a href="editing.html#%2Bcmd">+cmd</a>.
		Also see <a href="editing.html#%2B%2Bopt">++opt</a>.
		Make new window N high (default is to use half the existing
		height).  Reduces the current window height to create room
		(and others, if the <a href="options.html#'equalalways'">'equalalways'</a> option is set).</div>
<div class="old-help-para">:[N]vne[w] [++opt] [+cmd] [file]			<a name="%3Avne"></a><code class="help-tag-right">:vne</code> <a name="%3Avnew"></a><code class="help-tag">:vnew</code>
		Like <a href="windows.html#%3Anew">:new</a>, but split vertically.  If <a href="options.html#'equalalways'">'equalalways'</a> is set
		and <a href="options.html#'eadirection'">'eadirection'</a> isn't "ver" the windows will be spread out
		horizontally, unless a width was specified.</div>
<div class="old-help-para">:[N]sv[iew] [++opt] [+cmd] [file]		<a name="%3Asv"></a><code class="help-tag-right">:sv</code> <a name="%3Asview"></a><code class="help-tag">:sview</code> <a name="splitview"></a><code class="help-tag">splitview</code>
		Same as ":split", but set <a href="options.html#'readonly'">'readonly'</a> option for this buffer.</div>
<div class="old-help-para">:[N]sf[ind] [++opt] [+cmd] <code>{file}</code>	     <a name="%3Asf"></a><code class="help-tag-right">:sf</code> <a name="%3Asfi"></a><code class="help-tag">:sfi</code> <a name="%3Asfind"></a><code class="help-tag">:sfind</code> <a name="splitfind"></a><code class="help-tag">splitfind</code>
		Same as ":split", but search for <code>{file}</code> in <a href="options.html#'path'">'path'</a> like in
		<a href="editing.html#%3Afind">:find</a>.  Doesn't split if <code>{file}</code> is not found.</div>
<div class="old-help-para">CTRL-W <code>CTRL-^</code>					<a name="CTRL-W_CTRL-%5E"></a><code class="help-tag-right">CTRL-W_CTRL-^</code> <a name="CTRL-W_%5E"></a><code class="help-tag">CTRL-W_^</code>
CTRL-W ^	Split the current window in two and edit the alternate file.
		When a count N is given, split the current window and edit
		buffer N.  Similar to ":sp #" and ":sp #N", but it allows the
		other buffer to be unnamed.  This command matches the behavior
		of <a href="editing.html#CTRL-%5E">CTRL-^</a>, except that it splits a window first.</div>
<div class="old-help-para">CTRL-W ge						<a name="CTRL-W_ge"></a><code class="help-tag-right">CTRL-W_ge</code>
		Detach the current window as an external window.
		Only available when using an UI with <a href="ui.html#ui-multigrid">ui-multigrid</a> support.</div>
<div class="old-help-para">Note that the <a href="options.html#'splitbelow'">'splitbelow'</a> and <a href="options.html#'splitright'">'splitright'</a> options influence where a new
window will appear.
								<a name="E36"></a><code class="help-tag-right">E36</code>
Creating a window will fail if there is not enough room.  Every window needs
at least one screen line and column, sometimes more.   Options <a href="options.html#'winminheight'">'winminheight'</a>
and <a href="options.html#'winminwidth'">'winminwidth'</a> are relevant.</div>
<div class="old-help-para">						<a name="%3Avert"></a><code class="help-tag-right">:vert</code> <a name="%3Avertical"></a><code class="help-tag">:vertical</code>
:vert[ical] <code>{cmd}</code>
		Execute <code>{cmd}</code>.  If it contains a command that splits a window,
		it will be split vertically.  For <code>vertical wincmd =</code> windows
		will be equalized only vertically.
		Doesn't work for <a href="eval.html#%3Aexecute">:execute</a> and <a href="various.html#%3Anormal">:normal</a>.</div>
<div class="old-help-para">						<a name="%3Ahor"></a><code class="help-tag-right">:hor</code> <a name="%3Ahorizontal"></a><code class="help-tag">:horizontal</code>
:hor[izontal] <code>{cmd}</code>
		Execute <code>{cmd}</code>.  Currently only makes a difference for
		<code>horizontal wincmd =</code>, which will equalize windows only
		horizontally.</div>
<div class="old-help-para">:lefta[bove] <code>{cmd}</code>				<a name="%3Alefta"></a><code class="help-tag-right">:lefta</code> <a name="%3Aleftabove"></a><code class="help-tag">:leftabove</code>
:abo[veleft] <code>{cmd}</code>				<a name="%3Aabo"></a><code class="help-tag-right">:abo</code> <a name="%3Aaboveleft"></a><code class="help-tag">:aboveleft</code>
		Execute <code>{cmd}</code>.  If it contains a command that splits a window,
		it will be opened left (vertical split) or above (horizontal
		split) the current window.  Overrules <a href="options.html#'splitbelow'">'splitbelow'</a> and
		<a href="options.html#'splitright'">'splitright'</a>.
		Doesn't work for <a href="eval.html#%3Aexecute">:execute</a> and <a href="various.html#%3Anormal">:normal</a>.</div>
<div class="old-help-para">:rightb[elow] <code>{cmd}</code>				<a name="%3Arightb"></a><code class="help-tag-right">:rightb</code> <a name="%3Arightbelow"></a><code class="help-tag">:rightbelow</code>
:bel[owright] <code>{cmd}</code>				<a name="%3Abel"></a><code class="help-tag-right">:bel</code> <a name="%3Abelowright"></a><code class="help-tag">:belowright</code>
		Execute <code>{cmd}</code>.  If it contains a command that splits a window,
		it will be opened right (vertical split) or below (horizontal
		split) the current window.  Overrules <a href="options.html#'splitbelow'">'splitbelow'</a> and
		<a href="options.html#'splitright'">'splitright'</a>.
		Doesn't work for <a href="eval.html#%3Aexecute">:execute</a> and <a href="various.html#%3Anormal">:normal</a>.</div>
<div class="old-help-para">						<a name="%3Atopleft"></a><code class="help-tag-right">:topleft</code> <a name="E442"></a><code class="help-tag">E442</code>
:to[pleft] <code>{cmd}</code>
		Execute <code>{cmd}</code>.  If it contains a command that splits a window,
		it will appear at the top and occupy the full width of the Vim
		window.  When the split is vertical the window appears at the
		far left and occupies the full height of the Vim window.
		Doesn't work for <a href="eval.html#%3Aexecute">:execute</a> and <a href="various.html#%3Anormal">:normal</a>.</div>
<div class="old-help-para">						<a name="%3Abo"></a><code class="help-tag-right">:bo</code> <a name="%3Abotright"></a><code class="help-tag">:botright</code>
:bo[tright] <code>{cmd}</code>
		Execute <code>{cmd}</code>.  If it contains a command that splits a window,
		it will appear at the bottom and occupy the full width of the
		Vim window.  When the split is vertical the window appears at
		the far right and occupies the full height of the Vim window.
		Doesn't work for <a href="eval.html#%3Aexecute">:execute</a> and <a href="various.html#%3Anormal">:normal</a>.</div>
<div class="old-help-para">These command modifiers can be combined to make a vertically split window
occupy the full height.  Example:<pre>:vertical topleft split tags</pre>
Opens a vertically split, full-height window on the "tags" file at the far
left of the Vim window.</div>
<div class="old-help-para">Closing a window
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+windows.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/windows.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%0AClosing%20a%20window%0A----------------%0A%0A%3Aq%5Buit%5D%0A%3A%7Bcount%7Dq%5Buit%5D%09%09%09%09%09%09%2A%3Acount_quit%2A%0ACTRL-W%20q%09%09%09%09%09%09%2ACTRL-W_q%2A%0D%60%60%60">----------------</a></div>
<div class="old-help-para">:q[uit]
:{count}q[uit]						<a name="%3Acount_quit"></a><code class="help-tag-right">:count_quit</code>
CTRL-W q						<a name="CTRL-W_q"></a><code class="help-tag-right">CTRL-W_q</code>
CTRL-W <code>CTRL-Q</code>						<a name="CTRL-W_CTRL-Q"></a><code class="help-tag-right">CTRL-W_CTRL-Q</code>
		Without <code>{count}</code>: Quit the current window.  If <code>{count}</code> is
		given quit the <code>{count}</code> window.
							<a name="edit-window"></a><code class="help-tag-right">edit-window</code>
		When quitting the last edit window (not counting help or
		preview windows), exit Vim.</div>
<div class="old-help-para">		When <a href="options.html#'hidden'">'hidden'</a> is set, and there is only one window for the
		current buffer, it becomes hidden. When <a href="options.html#'hidden'">'hidden'</a> is not set,
		and there is only one window for the current buffer, and the
		buffer was changed, the command fails.
		(Note: <code>CTRL-Q</code> does not work on all terminals).
		If [count] is greater than the last window number the last
		window will be closed:<pre>:1quit  " quit the first window
:$quit  " quit the last window
:9quit  " quit the last window
        " if there are fewer than 9 windows opened
:-quit  " quit the previous window
:+quit  " quit the next window
:+2quit " quit the second next window</pre></div>
<div class="old-help-para">		When closing a help window, and this is not the only window,
		Vim will try to restore the previous window layout, see
		<a href="helphelp.html#%3Ahelpclose">:helpclose</a>.</div>
<div class="old-help-para">:q[uit]!
:{count}q[uit]!
		Without <code>{count}</code>: Quit the current window.  If <code>{count}</code> is
		given quit the <code>{count}</code> window
		If this was the last window for a buffer, any changes to that
		buffer are lost. When quitting the last window (not counting
		help windows), exit Vim. The contents of the buffer are lost,
		even when <a href="options.html#'hidden'">'hidden'</a> is set.</div>
<div class="old-help-para">:clo[se][!]
:{count}clo[se][!]
CTRL-W c					<a name="CTRL-W_c"></a><code class="help-tag-right">CTRL-W_c</code> <a name="%3Aclo"></a><code class="help-tag">:clo</code> <a name="%3Aclose"></a><code class="help-tag">:close</code>
		Without <code>{count}</code>: Close the current window. If given close the
		<code>{count}</code> window.</div>
<div class="old-help-para">		When <a href="options.html#'hidden'">'hidden'</a> is set, or when the buffer was changed and the
		[!] is used, the buffer becomes hidden (unless there is another
		window editing it).</div>
<div class="old-help-para">		When there is only one <a href="windows.html#edit-window">edit-window</a> in the current tab page
		and there is another tab page, this closes the current tab
		page.  <a href="tabpage.html#tab-page">tab-page</a>.</div>
<div class="old-help-para">		This command fails when:			<a name="E444"></a><code class="help-tag-right">E444</code>
<div class="help-li" style=""> There is only one window on the screen.
</div><div class="help-li" style=""> When <a href="options.html#'hidden'">'hidden'</a> is not set, [!] is not used, the buffer has
		  changes, and there is no other window on this buffer.
		Changes to the buffer are not written and won't get lost, so
		this is a "safe" command.
</div></div>
<div class="old-help-para">CTRL-W <code>CTRL-C</code>						<a name="CTRL-W_CTRL-C"></a><code class="help-tag-right">CTRL-W_CTRL-C</code>
		You might have expected that <code>CTRL-W</code> <code>CTRL-C</code> closes the current
		window, but that does not work, because the <code>CTRL-C</code> cancels the
		command.</div>
<div class="old-help-para">							<a name="%3Ahide"></a><code class="help-tag-right">:hide</code>
:hid[e]
:{count}hid[e]
		Without <code>{count}</code>: Quit the current window, unless it is the
		last window on the screen.
		If <code>{count}</code> is given quit the <code>{count}</code> window.</div>
<div class="old-help-para">		The buffer becomes hidden (unless there is another window
		editing it or <a href="options.html#'bufhidden'">'bufhidden'</a> is <code>unload</code>, <code>delete</code> or <code>wipe</code>).
		If the window is the last one in the current tab page the tab
		page is closed. <a href="tabpage.html#tab-page">tab-page</a></div>
<div class="old-help-para">		The value of <a href="options.html#'hidden'">'hidden'</a> is irrelevant for this command.
		Changes to the buffer are not written and won't get lost, so
		this is a "safe" command.</div>
<div class="old-help-para">:hid[e] <code>{cmd}</code>	Execute <code>{cmd}</code> with <a href="options.html#'hidden'">'hidden'</a> set. The previous value of
		<a href="options.html#'hidden'">'hidden'</a> is restored after <code>{cmd}</code> has been executed.
		Example:<pre>:hide edit Makefile</pre></div>
<div class="old-help-para">		This will edit "Makefile", and hide the current buffer if it
		has any changes.</div>
<div class="old-help-para">:on[ly][!]
:{count}on[ly][!]
CTRL-W o						<a name="CTRL-W_o"></a><code class="help-tag-right">CTRL-W_o</code> <a name="E445"></a><code class="help-tag">E445</code>
CTRL-W <code>CTRL-O</code>					<a name="CTRL-W_CTRL-O"></a><code class="help-tag-right">CTRL-W_CTRL-O</code> <a name="%3Aon"></a><code class="help-tag">:on</code> <a name="%3Aonly"></a><code class="help-tag">:only</code>
		Make the current window the only one on the screen. All other
		windows are closed.  For <code>{count}</code> see the <code>:quit</code> command
		above <a href="windows.html#%3Acount_quit">:count_quit</a>.</div>
<div class="old-help-para">		When the <a href="options.html#'hidden'">'hidden'</a> option is set, all buffers in closed windows
		become hidden.</div>
<div class="old-help-para">		When <a href="options.html#'hidden'">'hidden'</a> is not set, and the <a href="options.html#'autowrite'">'autowrite'</a> option is set,
		modified buffers are written.  Otherwise, windows that have
		buffers that are modified are not removed, unless the [!] is
		given, then they become hidden.  But modified buffers are
		never abandoned, so changes cannot get lost.</div>
<div class="old-help-para"><h2 class="help-heading">4. Moving cursor to other windows<span class="help-heading-tags">			<a name="window-move-cursor"></a><span class="help-tag">window-move-cursor</span></span></h2></div>
<div class="old-help-para">CTRL-W <code>&lt;Down&gt;</code>					<a name="CTRL-W_%3CDown%3E"></a><code class="help-tag-right">CTRL-W_&lt;Down&gt;</code>
CTRL-W <code>CTRL-J</code>					<a name="CTRL-W_CTRL-J"></a><code class="help-tag-right">CTRL-W_CTRL-J</code> <a name="CTRL-W_j"></a><code class="help-tag">CTRL-W_j</code>
CTRL-W j	Move cursor to Nth window below current one.  Uses the cursor
		position to select between alternatives.</div>
<div class="old-help-para">CTRL-W <code>&lt;Up&gt;</code>					<a name="CTRL-W_%3CUp%3E"></a><code class="help-tag-right">CTRL-W_&lt;Up&gt;</code>
CTRL-W <code>CTRL-K</code>					<a name="CTRL-W_CTRL-K"></a><code class="help-tag-right">CTRL-W_CTRL-K</code> <a name="CTRL-W_k"></a><code class="help-tag">CTRL-W_k</code>
CTRL-W k	Move cursor to Nth window above current one.  Uses the cursor
		position to select between alternatives.</div>
<div class="old-help-para">CTRL-W <code>&lt;Left&gt;</code>					<a name="CTRL-W_%3CLeft%3E"></a><code class="help-tag-right">CTRL-W_&lt;Left&gt;</code>
CTRL-W <code>CTRL-H</code>					<a name="CTRL-W_CTRL-H"></a><code class="help-tag-right">CTRL-W_CTRL-H</code>
CTRL-W <code>&lt;BS&gt;</code>					<a name="CTRL-W_%3CBS%3E"></a><code class="help-tag-right">CTRL-W_&lt;BS&gt;</code> <a name="CTRL-W_h"></a><code class="help-tag">CTRL-W_h</code>
CTRL-W h	Move cursor to Nth window left of current one.  Uses the
		cursor position to select between alternatives.</div>
<div class="old-help-para">CTRL-W <code>&lt;Right&gt;</code>					<a name="CTRL-W_%3CRight%3E"></a><code class="help-tag-right">CTRL-W_&lt;Right&gt;</code>
CTRL-W <code>CTRL-L</code>					<a name="CTRL-W_CTRL-L"></a><code class="help-tag-right">CTRL-W_CTRL-L</code> <a name="CTRL-W_l"></a><code class="help-tag">CTRL-W_l</code>
CTRL-W l	Move cursor to Nth window right of current one.  Uses the
		cursor position to select between alternatives.</div>
<div class="old-help-para">CTRL-W w					<a name="CTRL-W_w"></a><code class="help-tag-right">CTRL-W_w</code> <a name="CTRL-W_CTRL-W"></a><code class="help-tag">CTRL-W_CTRL-W</code>
CTRL-W <code>CTRL-W</code>	Without count: move cursor to window below/right of the
		current one.  If there is no window below or right, go to
		top-left window.
		With count: go to Nth window (windows are numbered from
		top-left to bottom-right).  To obtain the window number see
		<a href="builtin.html#bufwinnr()">bufwinnr()</a> and <a href="builtin.html#winnr()">winnr()</a>.  When N is larger than the number
		of windows go to the last window.</div>
<div class="old-help-para">						<a name="CTRL-W_W"></a><code class="help-tag-right">CTRL-W_W</code>
CTRL-W W	Without count: move cursor to window above/left of current
		one.  If there is no window above or left, go to bottom-right
		window.  With count: go to Nth window, like with <code>CTRL-W</code> w.</div>
<div class="old-help-para">CTRL-W t					<a name="CTRL-W_t"></a><code class="help-tag-right">CTRL-W_t</code> <a name="CTRL-W_CTRL-T"></a><code class="help-tag">CTRL-W_CTRL-T</code>
CTRL-W <code>CTRL-T</code>	Move cursor to top-left window.</div>
<div class="old-help-para">CTRL-W b					<a name="CTRL-W_b"></a><code class="help-tag-right">CTRL-W_b</code> <a name="CTRL-W_CTRL-B"></a><code class="help-tag">CTRL-W_CTRL-B</code>
CTRL-W <code>CTRL-B</code>	Move cursor to bottom-right window.</div>
<div class="old-help-para">CTRL-W p					<a name="CTRL-W_p"></a><code class="help-tag-right">CTRL-W_p</code> <a name="CTRL-W_CTRL-P"></a><code class="help-tag">CTRL-W_CTRL-P</code>
CTRL-W <code>CTRL-P</code>	Go to previous (last accessed) window.</div>
<div class="old-help-para">						<a name="CTRL-W_P"></a><code class="help-tag-right">CTRL-W_P</code> <a name="E441"></a><code class="help-tag">E441</code>
CTRL-W P	Go to preview window.  When there is no preview window this is
		an error.</div>
<div class="old-help-para">If Visual mode is active and the new window is not for the same buffer, the
Visual mode is ended.  If the window is on the same buffer, the cursor
position is set to keep the same Visual area selected.</div>
<div class="old-help-para">						<a name="%3Awinc"></a><code class="help-tag-right">:winc</code> <a name="%3Awincmd"></a><code class="help-tag">:wincmd</code>
These commands can also be executed with ":wincmd":</div>
<div class="old-help-para">:[count]winc[md] <code>{arg}</code>
:winc[md] [count] <code>{arg}</code>
		Like executing <code>CTRL-W</code> [count] <code>{arg}</code>.  Example:<pre>:wincmd j</pre></div>
<div class="old-help-para">		Moves to the window below the current one.
		This command is useful when a Normal mode cannot be used (for
		the <a href="autocmd.html#CursorHold">CursorHold</a> autocommand event).  Or when a Normal mode
		command is inconvenient.
		The count can also be a window number.  Example:<pre>:exe nr .. "wincmd w"</pre></div>
<div class="old-help-para">		This goes to window "nr".</div>
<div class="old-help-para"><h2 class="help-heading">5. Moving windows around<span class="help-heading-tags">				<a name="window-moving"></a><span class="help-tag">window-moving</span></span></h2></div>
<div class="old-help-para">CTRL-W r				<a name="CTRL-W_r"></a><code class="help-tag-right">CTRL-W_r</code> <a name="CTRL-W_CTRL-R"></a><code class="help-tag">CTRL-W_CTRL-R</code> <a name="E443"></a><code class="help-tag">E443</code>
CTRL-W <code>CTRL-R</code>	Rotate windows downwards/rightwards.  The first window becomes
		the second one, the second one becomes the third one, etc.
		The last window becomes the first window.  The cursor remains
		in the same window.
		This only works within the row or column of windows that the
		current window is in.</div>
<div class="old-help-para">						<a name="CTRL-W_R"></a><code class="help-tag-right">CTRL-W_R</code>
CTRL-W R	Rotate windows upwards/leftwards.  The second window becomes
		the first one, the third one becomes the second one, etc.  The
		first window becomes the last window.  The cursor remains in
		the same window.
		This only works within the row or column of windows that the
		current window is in.</div>
<div class="old-help-para">CTRL-W x					<a name="CTRL-W_x"></a><code class="help-tag-right">CTRL-W_x</code> <a name="CTRL-W_CTRL-X"></a><code class="help-tag">CTRL-W_CTRL-X</code>
CTRL-W <code>CTRL-X</code>	Without count: Exchange current window with next one.  If there
		is no next window, exchange with previous window.
		With count: Exchange current window with Nth window (first
		window is 1).  The cursor is put in the other window.
		When vertical and horizontal window splits are mixed, the
		exchange is only done in the row or column of windows that the
		current window is in.</div>
<div class="old-help-para">The following commands can be used to change the window layout.  For example,
when there are two vertically split windows, <code>CTRL-W</code> K will change that in
horizontally split windows.  <code>CTRL-W</code> H does it the other way around.</div>
<div class="old-help-para">						<a name="CTRL-W_K"></a><code class="help-tag-right">CTRL-W_K</code>
CTRL-W K	Move the current window to be at the very top, using the full
		width of the screen.  This works like closing the current
		window and then creating another one with ":topleft split",
		except that the current window contents is used for the new
		window.</div>
<div class="old-help-para">						<a name="CTRL-W_J"></a><code class="help-tag-right">CTRL-W_J</code>
CTRL-W J	Move the current window to be at the very bottom, using the
		full width of the screen.  This works like closing the current
		window and then creating another one with ":botright split",
		except that the current window contents is used for the new
		window.</div>
<div class="old-help-para">						<a name="CTRL-W_H"></a><code class="help-tag-right">CTRL-W_H</code>
CTRL-W H	Move the current window to be at the far left, using the
		full height of the screen.  This works like closing the
		current window and then creating another one with
		<code>:vert topleft split</code>, except that the current window contents
		is used for the new window.</div>
<div class="old-help-para">						<a name="CTRL-W_L"></a><code class="help-tag-right">CTRL-W_L</code>
CTRL-W L	Move the current window to be at the far right, using the full
		height of the screen.  This works like closing the
		current window and then creating another one with
		<code>:vert botright split</code>, except that the current window
		contents is used for the new window.</div>
<div class="old-help-para">						<a name="CTRL-W_T"></a><code class="help-tag-right">CTRL-W_T</code>
CTRL-W T	Move the current window to a new tab page.  This fails if
		there is only one window in the current tab page.
		When a count is specified the new tab page will be opened
		before the tab page with this index.  Otherwise it comes after
		the current tab page.</div>
<div class="old-help-para"><h2 class="help-heading">6. Window resizing<span class="help-heading-tags">					<a name="window-resize"></a><span class="help-tag">window-resize</span></span></h2></div>
<div class="old-help-para">						<a name="CTRL-W_%3D"></a><code class="help-tag-right">CTRL-W_=</code>
CTRL-W =	Make all windows (almost) equally high and wide, but use
		<a href="options.html#'winheight'">'winheight'</a> and <a href="options.html#'winwidth'">'winwidth'</a> for the current window.
		Windows with <a href="options.html#'winfixheight'">'winfixheight'</a> set keep their height and windows
		with <a href="options.html#'winfixwidth'">'winfixwidth'</a> set keep their width.
		To equalize only vertically (make window equally high) use
		<code>vertical wincmd =</code> .
		To equalize only horizontally (make window equally wide) use
		<code>horizontal wincmd =</code> .</div>
<div class="old-help-para">:res[ize] -N					<a name="%3Ares"></a><code class="help-tag-right">:res</code> <a name="%3Aresize"></a><code class="help-tag">:resize</code> <a name="CTRL-W_-"></a><code class="help-tag">CTRL-W_-</code>
CTRL-W -		Decrease current window height by N (default 1).
		If used after <a href="windows.html#%3Avertical">:vertical</a>: decrease width by N.</div>
<div class="old-help-para">:res[ize] +N					<a name="CTRL-W_%2B"></a><code class="help-tag-right">CTRL-W_+</code>
CTRL-W +	Increase current window height by N (default 1).
		If used after <a href="windows.html#%3Avertical">:vertical</a>: increase width by N.</div>
<div class="old-help-para">:res[ize] [N]
CTRL-W <code>CTRL-_</code>					<a name="CTRL-W_CTRL-_"></a><code class="help-tag-right">CTRL-W_CTRL-_</code> <a name="CTRL-W__"></a><code class="help-tag">CTRL-W__</code>
CTRL-W _	Set current window height to N (default: highest possible).</div>
<div class="old-help-para">:{winnr}res[ize] [+-]N
		Like <code>:resize</code> above, but apply the size to window <code>{winnr}</code>
		instead of the current window.</div>
<div class="old-help-para">z{nr}&lt;CR&gt;	Set current window height to <code>{nr}</code>.</div>
<div class="old-help-para">						<a name="CTRL-W_%3C"></a><code class="help-tag-right">CTRL-W_&lt;</code>
CTRL-W &lt;	Decrease current window width by N (default 1).</div>
<div class="old-help-para">						<a name="CTRL-W_%3E"></a><code class="help-tag-right">CTRL-W_&gt;</code>
CTRL-W &gt;	Increase current window width by N (default 1).</div>
<div class="old-help-para">:vert[ical] res[ize] [N]			<a name="%3Avertical-resize"></a><code class="help-tag-right">:vertical-resize</code> <a name="CTRL-W_bar"></a><code class="help-tag">CTRL-W_bar</code>
CTRL-W |	Set current window width to N (default: widest possible).</div>
<div class="old-help-para">You can also resize a window by dragging a status line up or down with the
mouse.  Or by dragging a vertical separator line left or right.  This only
works if the version of Vim that is being used supports the mouse and the
<a href="options.html#'mouse'">'mouse'</a> option has been set to enable it.</div>
<div class="old-help-para">The option <a href="options.html#'winheight'">'winheight'</a> (<a href="options.html#'wh'">'wh'</a>) is used to set the minimal window height of the
current window.  This option is used each time another window becomes the
current window.  If the option is '0', it is disabled.  Set <a href="options.html#'winheight'">'winheight'</a> to a
very large value, e.g., '9999', to make the current window always fill all
available space.  Set it to a reasonable value, e.g., '10', to make editing in
the current window comfortable.</div>
<div class="old-help-para">The equivalent <a href="options.html#'winwidth'">'winwidth'</a> (<a href="options.html#'wiw'">'wiw'</a>) option is used to set the minimal width of
the current window.</div>
<div class="old-help-para">When the option <a href="options.html#'equalalways'">'equalalways'</a> (<a href="options.html#'ea'">'ea'</a>) is set, all the windows are automatically
made the same size after splitting or closing a window.  If you don't set this
option, splitting a window will reduce the size of the current window and
leave the other windows the same.  When closing a window, the extra lines are
given to the window above it.</div>
<div class="old-help-para">The <a href="options.html#'eadirection'">'eadirection'</a> option limits the direction in which the <a href="options.html#'equalalways'">'equalalways'</a>
option is applied.  The default "both" resizes in both directions.  When the
value is "ver" only the heights of windows are equalized.  Use this when you
have manually resized a vertically split window and want to keep this width.
Likewise, "hor" causes only the widths of windows to be equalized.</div>
<div class="old-help-para">The option <a href="options.html#'cmdheight'">'cmdheight'</a> (<a href="options.html#'ch'">'ch'</a>) is used to set the height of the command-line.
If you are annoyed by the <a href="message.html#hit-enter">hit-enter</a> prompt for long messages, set this
option to 2 or 3.</div>
<div class="old-help-para">If there is only one window, resizing that window will also change the command
line height.  If there are several windows, resizing the current window will
also change the height of the window below it (and sometimes the window above
it).</div>
<div class="old-help-para">The minimal height and width of a window is set with <a href="options.html#'winminheight'">'winminheight'</a> and
<a href="options.html#'winminwidth'">'winminwidth'</a>.  These are hard values, a window will never become smaller.</div>
<div class="old-help-para"><h2 class="help-heading">7. Argument and buffer list commands<span class="help-heading-tags">			<a name="buffer-list"></a><span class="help-tag">buffer-list</span></span></h2></div>
<div class="old-help-para"><div class="help-column_heading">      args list		       buffer list	   meaning</div>1. :[N]argument [N]	11. :[N]buffer [N]	to arg/buf N
2. :[N]next [file ..]	12. :[N]bnext [N]	to Nth next arg/buf
3. :[N]Next [N]		13. :[N]bNext [N]	to Nth previous arg/buf
4. :[N]previous	[N]	14. :[N]bprevious [N]	to Nth previous arg/buf
5. :rewind / :first	15. :brewind / :bfirst	to first arg/buf
6. :last		16. :blast		to last arg/buf
7. :all			17. :ball		edit all args/buffers
			18. :unhide		edit all loaded buffers
			19. :[N]bmod [N]	to Nth modified buf</div>
<div class="old-help-para"><div class="help-column_heading">  split &amp; args list	  split &amp; buffer list	   meaning</div>21. :[N]sargument [N]   31. :[N]sbuffer [N]	split + to arg/buf N
22. :[N]snext [file ..] 32. :[N]sbnext [N]      split + to Nth next arg/buf
23. :[N]sNext [N]       33. :[N]sbNext [N]      split + to Nth previous arg/buf
24. :[N]sprevious [N]   34. :[N]sbprevious [N]  split + to Nth previous arg/buf
25. :srewind / :sfirst	35. :sbrewind / :sbfirst split + to first arg/buf
26. :slast		36. :sblast		split + to last arg/buf
27. :sall		37. :sball		edit all args/buffers
			38. :sunhide		edit all loaded buffers
			39. :[N]sbmod [N]	split + to Nth modified buf</div>
<div class="old-help-para">40. :args		list of arguments
41. :buffers		list of buffers</div>
<div class="old-help-para">The meaning of [N] depends on the command:
 [N] is the number of buffers to go forward/backward on 2/12/22/32,
     3/13/23/33, and 4/14/24/34
 [N] is an argument number, defaulting to current argument, for 1 and 21
 [N] is a buffer number, defaulting to current buffer, for 11 and 31
 [N] is a count for 19 and 39</div>
<div class="old-help-para">Note: ":next" is an exception, because it must accept a list of file names
for compatibility with Vi.</div>
<div class="old-help-para">The argument list and multiple windows
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+windows.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/windows.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%0AThe%20argument%20list%20and%20multiple%20windows%0A--------------------------------------%0A%0AThe%20current%20position%20in%20the%20argument%20list%20can%20be%20different%20for%20each%20window.%0ARemember%20that%20when%20doing%20%22%3Ae%20file%22%2C%20the%20position%20in%20the%20argument%20list%20stays%0Athe%20same%2C%20but%20you%20are%20not%20editing%20the%20file%20at%20that%20position.%20%20To%20indicate%0D%60%60%60">--------------------------------------</a></div>
<div class="old-help-para">The current position in the argument list can be different for each window.
Remember that when doing ":e file", the position in the argument list stays
the same, but you are not editing the file at that position.  To indicate
this, the file message (and the title, if you have one) shows
"(file (N) of M)", where "(N)" is the current position in the file list, and
"M" the number of files in the file list.</div>
<div class="old-help-para">All the entries in the argument list are added to the buffer list.  Thus, you
can also get to them with the buffer list commands, like ":bnext".</div>
<div class="old-help-para">:[N]al[l][!] [N]				<a name="%3Aal"></a><code class="help-tag-right">:al</code> <a name="%3Aall"></a><code class="help-tag">:all</code> <a name="%3Asal"></a><code class="help-tag">:sal</code> <a name="%3Asall"></a><code class="help-tag">:sall</code>
:[N]sal[l][!] [N]
		Rearrange the screen to open one window for each argument.
		All other windows are closed.  When a count is given, this is
		the maximum number of windows to open.
		With the <a href="tabpage.html#%3Atab">:tab</a> modifier open a tab page for each argument.
		When there are more arguments than <a href="options.html#'tabpagemax'">'tabpagemax'</a> further ones
		become split windows in the last tab page.
		When the <a href="options.html#'hidden'">'hidden'</a> option is set, all buffers in closed windows
		become hidden.
		When <a href="options.html#'hidden'">'hidden'</a> is not set, and the <a href="options.html#'autowrite'">'autowrite'</a> option is set,
		modified buffers are written.  Otherwise, windows that have
		buffers that are modified are not removed, unless the [!] is
		given, then they become hidden.  But modified buffers are
		never abandoned, so changes cannot get lost.
		[N] is the maximum number of windows to open.  <a href="options.html#'winheight'">'winheight'</a>
		also limits the number of windows opened (<a href="options.html#'winwidth'">'winwidth'</a> if
		<a href="windows.html#%3Avertical">:vertical</a> was prepended).
		Buf/Win Enter/Leave autocommands are not executed for the new
		windows here, that's only done when they are really entered.
		If autocommands change the window layout while this command is
		busy an error will be given. <a name="E249"></a><code class="help-tag">E249</code></div>
<div class="old-help-para">:[N]sa[rgument][!] [++opt] [+cmd] [N]			<a name="%3Asa"></a><code class="help-tag-right">:sa</code> <a name="%3Asargument"></a><code class="help-tag">:sargument</code>
		Short for ":split | argument [N]": split window and go to Nth
		argument.  But when there is no such argument, the window is
		not split.  Also see <a href="editing.html#%2B%2Bopt">++opt</a> and <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[N]sn[ext][!] [++opt] [+cmd] [file ..]			<a name="%3Asn"></a><code class="help-tag-right">:sn</code> <a name="%3Asnext"></a><code class="help-tag">:snext</code>
		Short for ":split | [N]next": split window and go to Nth next
		argument.  But when there is no next file, the window is not
		split.  Also see <a href="editing.html#%2B%2Bopt">++opt</a> and <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[N]spr[evious][!] [++opt] [+cmd] [N]			<a name="%3Aspr"></a><code class="help-tag-right">:spr</code> <a name="%3Asprevious"></a><code class="help-tag">:sprevious</code>
:[N]sN[ext][!] [++opt] [+cmd] [N]			<a name="%3AsN"></a><code class="help-tag-right">:sN</code> <a name="%3AsNext"></a><code class="help-tag">:sNext</code>
		Short for ":split | [N]Next": split window and go to Nth
		previous argument.  But when there is no previous file, the
		window is not split.  Also see <a href="editing.html#%2B%2Bopt">++opt</a> and <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">						<a name="%3Asre"></a><code class="help-tag-right">:sre</code> <a name="%3Asrewind"></a><code class="help-tag">:srewind</code>
:sre[wind][!] [++opt] [+cmd]
		Short for ":split | rewind": split window and go to first
		argument.  But when there is no argument list, the window is
		not split.  Also see <a href="editing.html#%2B%2Bopt">++opt</a> and <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">						<a name="%3Asfir"></a><code class="help-tag-right">:sfir</code> <a name="%3Asfirst"></a><code class="help-tag">:sfirst</code>
:sfir[st] [++opt] [+cmd]
		Same as ":srewind".</div>
<div class="old-help-para">						<a name="%3Asla"></a><code class="help-tag-right">:sla</code> <a name="%3Aslast"></a><code class="help-tag">:slast</code>
:sla[st][!] [++opt] [+cmd]
		Short for ":split | last": split window and go to last
		argument.  But when there is no argument list, the window is
		not split.  Also see <a href="editing.html#%2B%2Bopt">++opt</a> and <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">						<a name="%3Adr"></a><code class="help-tag-right">:dr</code> <a name="%3Adrop"></a><code class="help-tag">:drop</code>
:dr[op] [++opt] [+cmd] <code>{file}</code> ..
		Edit the first <code>{file}</code> in a window.
<div class="help-li" style=""> If the file is already open in a window change to that
		  window.
</div><div class="help-li" style=""> If the file is not open in a window edit the file in the
		  current window.  If the current buffer can't be <a href="editing.html#abandon">abandon</a>ed,
		  the window is split first.
</div><div class="help-li" style=""> Windows that are not in the argument list or are not full
		  width will be closed if possible.
		The <a href="editing.html#argument-list">argument-list</a> is set, like with the <a href="editing.html#%3Anext">:next</a> command.
		The purpose of this command is that it can be used from a
		program that wants Vim to edit another file, e.g., a debugger.
		When using the <a href="tabpage.html#%3Atab">:tab</a> modifier each argument is opened in a
		tab page.  The last window is used if it's empty.
		Also see <a href="editing.html#%2B%2Bopt">++opt</a> and <a href="editing.html#%2Bcmd">+cmd</a>.
</div></div>
<div class="old-help-para"><h2 class="help-heading">8. Do a command in all buffers or windows<span class="help-heading-tags">			<a name="list-repeat"></a><span class="help-tag">list-repeat</span></span></h2></div>
<div class="old-help-para">							<a name="%3Awindo"></a><code class="help-tag-right">:windo</code>
:[range]windo <code>{cmd}</code>	Execute <code>{cmd}</code> in each window or if [range] is given
			only in windows for which the window number lies in
			the [range]. It works like doing this:<pre>CTRL-W t
:{cmd}
CTRL-W w
:{cmd}
etc.</pre></div>
<div class="old-help-para">			This only operates in the current tab page.
			When an error is detected on one window, further
			windows will not be visited.
			The last window (or where an error occurred) becomes
			the current window.
			<code>{cmd}</code> can contain '|' to concatenate several commands.
			<code>{cmd}</code> must not open or close windows or reorder them.</div>
<div class="old-help-para">			Also see <a href="tabpage.html#%3Atabdo">:tabdo</a>, <a href="editing.html#%3Aargdo">:argdo</a>, <a href="windows.html#%3Abufdo">:bufdo</a>, <a href="quickfix.html#%3Acdo">:cdo</a>, <a href="quickfix.html#%3Aldo">:ldo</a>,
			<a href="quickfix.html#%3Acfdo">:cfdo</a> and <a href="quickfix.html#%3Alfdo">:lfdo</a>.</div>
<div class="old-help-para">							<a name="%3Abufdo"></a><code class="help-tag-right">:bufdo</code>
:[range]bufdo[!] <code>{cmd}</code>	Execute <code>{cmd}</code> in each buffer in the buffer list or if
			[range] is given only for buffers for which their
			buffer number is in the [range]. It works like doing
			this:<pre>:bfirst
:{cmd}
:bnext
:{cmd}
etc.</pre></div>
<div class="old-help-para">			When the current file can't be <a href="editing.html#abandon">abandon</a>ed and the [!]
			is not present, the command fails.
			When an error is detected on one buffer, further
			buffers will not be visited.
			Unlisted buffers are skipped.
			The last buffer (or where an error occurred) becomes
			the current buffer.
			<code>{cmd}</code> can contain '|' to concatenate several commands.
			<code>{cmd}</code> must not delete buffers or add buffers to the
			buffer list.
			Note: While this command is executing, the Syntax
			autocommand event is disabled by adding it to
			<a href="options.html#'eventignore'">'eventignore'</a>.  This considerably speeds up editing
			each buffer.</div>
<div class="old-help-para">			Also see <a href="tabpage.html#%3Atabdo">:tabdo</a>, <a href="editing.html#%3Aargdo">:argdo</a>, <a href="windows.html#%3Awindo">:windo</a>, <a href="quickfix.html#%3Acdo">:cdo</a>, <a href="quickfix.html#%3Aldo">:ldo</a>,
			<a href="quickfix.html#%3Acfdo">:cfdo</a> and <a href="quickfix.html#%3Alfdo">:lfdo</a>.</div>
<div class="old-help-para">Examples:<pre>:windo set nolist foldcolumn=0 | normal! zn</pre>
This resets the <a href="options.html#'list'">'list'</a> option and disables folding in all windows.<pre>:bufdo set fileencoding= | update</pre>
This resets the <a href="options.html#'fileencoding'">'fileencoding'</a> in each buffer and writes it if this changed
the buffer.  The result is that all buffers will use the <a href="options.html#'encoding'">'encoding'</a> encoding
(if conversion succeeds).</div>
<div class="old-help-para"><h2 class="help-heading">9. Tag or file name under the cursor<span class="help-heading-tags">			<a name="window-tag"></a><span class="help-tag">window-tag</span></span></h2></div>
<div class="old-help-para">							<a name="%3Asta"></a><code class="help-tag-right">:sta</code> <a name="%3Astag"></a><code class="help-tag">:stag</code>
:sta[g][!] [tagname]
		Does ":tag[!] [tagname]" and splits the window for the found
		tag.  See also <a href="tagsrch.html#%3Atag">:tag</a>.</div>
<div class="old-help-para">CTRL-W ]					<a name="CTRL-W_%5D"></a><code class="help-tag-right">CTRL-W_]</code> <a name="CTRL-W_CTRL-%5D"></a><code class="help-tag">CTRL-W_CTRL-]</code>
CTRL-W <code>CTRL-]</code>	Split current window in two.  Use identifier under cursor as a
		tag and jump to it in the new upper window.
		In Visual mode uses the Visually selected text as a tag.
		Make new window N high.</div>
<div class="old-help-para">							<a name="CTRL-W_g%5D"></a><code class="help-tag-right">CTRL-W_g]</code>
CTRL-W g ]	Split current window in two.  Use identifier under cursor as a
		tag and perform ":tselect" on it in the new upper window.
		In Visual mode uses the Visually selected text as a tag.
		Make new window N high.</div>
<div class="old-help-para">							<a name="CTRL-W_g_CTRL-%5D"></a><code class="help-tag-right">CTRL-W_g_CTRL-]</code>
CTRL-W g <code>CTRL-]</code>	Split current window in two.  Use identifier under cursor as a
		tag and perform ":tjump" on it in the new upper window.
		In Visual mode uses the Visually selected text as a tag.
		Make new window N high.</div>
<div class="old-help-para">CTRL-W f					<a name="CTRL-W_f"></a><code class="help-tag-right">CTRL-W_f</code> <a name="CTRL-W_CTRL-F"></a><code class="help-tag">CTRL-W_CTRL-F</code>
CTRL-W <code>CTRL-F</code>	Split current window in two.  Edit file name under cursor.
		Like ":split gf", but window isn't split if the file does not
		exist.
		Uses the <a href="options.html#'path'">'path'</a> variable as a list of directory names where to
		look for the file.  Also the path for current file is
		used to search for the file name.
		If the name is a hypertext link that looks like
		"type://machine/path", only "/path" is used.
		If a count is given, the count'th matching file is edited.</div>
<div class="old-help-para">CTRL-W F						<a name="CTRL-W_F"></a><code class="help-tag-right">CTRL-W_F</code>
		Split current window in two.  Edit file name under cursor and
		jump to the line number following the file name. See <a href="editing.html#gF">gF</a> for
		details on how the line number is obtained.</div>
<div class="old-help-para">CTRL-W gf						<a name="CTRL-W_gf"></a><code class="help-tag-right">CTRL-W_gf</code>
		Open a new tab page and edit the file name under the cursor.
		Like "tab split" and "gf", but the new tab page isn't created
		if the file does not exist.</div>
<div class="old-help-para">CTRL-W gF						<a name="CTRL-W_gF"></a><code class="help-tag-right">CTRL-W_gF</code>
		Open a new tab page and edit the file name under the cursor
		and jump to the line number following the file name.  Like
		"tab split" and "gF", but the new tab page isn't created if
		the file does not exist.</div>
<div class="old-help-para">CTRL-W gt						<a name="CTRL-W_gt"></a><code class="help-tag-right">CTRL-W_gt</code>
		Go to next tab page, same as <code>gt</code>.</div>
<div class="old-help-para">CTRL-W gT						<a name="CTRL-W_gT"></a><code class="help-tag-right">CTRL-W_gT</code>
		Go to previous tab page, same as <code>gT</code>.</div>
<div class="old-help-para">Also see <a href="tagsrch.html#CTRL-W_CTRL-I">CTRL-W_CTRL-I</a>: open window for an included file that includes
the keyword under the cursor.</div>
<div class="old-help-para"><h2 class="help-heading">10. The preview window<span class="help-heading-tags">				<a name="preview-window"></a><span class="help-tag">preview-window</span></span></h2></div>
<div class="old-help-para">The preview window is a special window to show (preview) another file.  It is
normally a small window used to show an include file or definition of a
function.</div>
<div class="old-help-para">There can be only one preview window (per tab page).  It is created with one
of the commands below.  The <a href="options.html#'previewheight'">'previewheight'</a> option can be set to specify the
height of the preview window when it's opened.  The <a href="options.html#'previewwindow'">'previewwindow'</a> option is
set in the preview window to be able to recognize it.  The <a href="options.html#'winfixheight'">'winfixheight'</a>
option is set to have it keep the same height when opening/closing other
windows.</div>
<div class="old-help-para">						<a name="%3Apta"></a><code class="help-tag-right">:pta</code> <a name="%3Aptag"></a><code class="help-tag">:ptag</code>
:pta[g][!] [tagname]
		Does ":tag[!] [tagname]" and shows the found tag in a
		"Preview" window without changing the current buffer or cursor
		position.  If a "Preview" window already exists, it is re-used
		(like a help window is).  If a new one is opened,
		<a href="options.html#'previewheight'">'previewheight'</a> is used for the height of the window.   See
		also <a href="tagsrch.html#%3Atag">:tag</a>.
		See below for an example. <a href="windows.html#CursorHold-example">CursorHold-example</a>
		Small difference from <a href="tagsrch.html#%3Atag">:tag</a>: When [tagname] is equal to the
		already displayed tag, the position in the matching tag list
		is not reset.  This makes the CursorHold example work after a
		<a href="tagsrch.html#%3Aptnext">:ptnext</a>.</div>
<div class="old-help-para">CTRL-W z					<a name="CTRL-W_z"></a><code class="help-tag-right">CTRL-W_z</code>
CTRL-W <code>CTRL-Z</code>					<a name="CTRL-W_CTRL-Z"></a><code class="help-tag-right">CTRL-W_CTRL-Z</code> <a name="%3Apc"></a><code class="help-tag">:pc</code> <a name="%3Apclose"></a><code class="help-tag">:pclose</code>
:pc[lose][!]	Close any "Preview" window currently open.  When the <a href="options.html#'hidden'">'hidden'</a>
		option is set, or when the buffer was changed and the [!] is
		used, the buffer becomes hidden (unless there is another
		window editing it).  The command fails if any "Preview" buffer
		cannot be closed.  See also <a href="windows.html#%3Aclose">:close</a>.</div>
<div class="old-help-para">							<a name="%3App"></a><code class="help-tag-right">:pp</code> <a name="%3Appop"></a><code class="help-tag">:ppop</code>
:[count]pp[op][!]
		Does ":[count]pop[!]" in the preview window.  See <a href="tagsrch.html#%3Apop">:pop</a> and
		<a href="windows.html#%3Aptag">:ptag</a>.</div>
<div class="old-help-para">CTRL-W }						<a name="CTRL-W_%7D"></a><code class="help-tag-right">CTRL-W_}</code>
		Use identifier under cursor as a tag and perform a :ptag on
		it.  Make the new Preview window (if required) N high.  If N is
		not given, <a href="options.html#'previewheight'">'previewheight'</a> is used.</div>
<div class="old-help-para">CTRL-W g }						<a name="CTRL-W_g%7D"></a><code class="help-tag-right">CTRL-W_g}</code>
		Use identifier under cursor as a tag and perform a :ptjump on
		it.  Make the new Preview window (if required) N high.  If N is
		not given, <a href="options.html#'previewheight'">'previewheight'</a> is used.</div>
<div class="old-help-para">							<a name="%3Aped"></a><code class="help-tag-right">:ped</code> <a name="%3Apedit"></a><code class="help-tag">:pedit</code>
:ped[it][!] [++opt] [+cmd] <code>{file}</code>
		Edit <code>{file}</code> in the preview window.  The preview window is
		opened like with <a href="windows.html#%3Aptag">:ptag</a>.  The current window and cursor
		position isn't changed.  Useful example:<pre>:pedit +/fputc /usr/include/stdio.h</pre></div>
<div class="old-help-para">							<a name="%3Aps"></a><code class="help-tag-right">:ps</code> <a name="%3Apsearch"></a><code class="help-tag">:psearch</code>
:[range]ps[earch][!] [count] [/]pattern[/]
		Works like <a href="tagsrch.html#%3Aijump">:ijump</a> but shows the found match in the preview
		window.  The preview window is opened like with <a href="windows.html#%3Aptag">:ptag</a>.  The
		current window and cursor position isn't changed.  Useful
		example:<pre>:psearch popen</pre></div>
<div class="old-help-para">		Like with the <a href="windows.html#%3Aptag">:ptag</a> command, you can use this to
		automatically show information about the word under the
		cursor.  This is less clever than using <a href="windows.html#%3Aptag">:ptag</a>, but you don't
		need a tags file and it will also find matches in system
		include files.  Example:<pre>:au! CursorHold *.[ch] ++nested exe "silent! psearch " .. expand("&lt;cword&gt;")</pre></div>
<div class="old-help-para">		Warning: This can be slow.</div>
<div class="old-help-para">Example						<a name="CursorHold-example"></a><code class="help-tag-right">CursorHold-example</code><pre>:au! CursorHold *.[ch] ++nested exe "silent! ptag " .. expand("&lt;cword&gt;")</pre>
This will cause a ":ptag" to be executed for the keyword under the cursor,
when the cursor hasn't moved for the time set with <a href="options.html#'updatetime'">'updatetime'</a>.  "++nested"
makes other autocommands be executed, so that syntax highlighting works in the
preview window.  The "silent!" avoids an error message when the tag could not
be found.  Also see <a href="autocmd.html#CursorHold">CursorHold</a>.  To disable this again:<pre>:au! CursorHold</pre>
A nice addition is to highlight the found tag, avoid the ":ptag" when there
is no word under the cursor, and a few other things:<pre>:au! CursorHold *.[ch] ++nested call PreviewWord()
:func PreviewWord()
:  if &amp;previewwindow                        " don't do this in the preview window
:    return
:  endif
:  let w = expand("&lt;cword&gt;")                " get the word under cursor
:  if w =~ '\a'                        " if the word contains a letter
:
:    " Delete any existing highlight before showing another tag
:    silent! wincmd P                        " jump to preview window
:    if &amp;previewwindow                " if we really get there...
:      match none                        " delete existing highlight
:      wincmd p                        " back to old window
:    endif
:
:    " Try displaying a matching tag for the word under the cursor
:    try
:       exe "ptag " .. w
:    catch
:      return
:    endtry
:
:    silent! wincmd P                        " jump to preview window
:    if &amp;previewwindow                " if we really get there...
:         if has("folding")
:           silent! .foldopen                " don't want a closed fold
:         endif
:         call search("$", "b")                " to end of previous line
:         let w = substitute(w, '\\', '\\\\', "")
:         call search('\&lt;\V' .. w .. '\&gt;')        " position cursor on match
:         " Add a match highlight to the word at this position
:      hi previewWord term=bold ctermbg=green guibg=green
:         exe 'match previewWord "\%' .. line(".") .. 'l\%' .. col(".") .. 'c\k*"'
:      wincmd p                        " back to old window
:    endif
:  endif
:endfun</pre>
<h2 class="help-heading">11. Using hidden buffers<span class="help-heading-tags">				<a name="buffer-hidden"></a><span class="help-tag">buffer-hidden</span></span></h2></div>
<div class="old-help-para">A hidden buffer is not displayed in a window, but is still loaded into memory.
This makes it possible to jump from file to file, without the need to read or
write the file every time you get another buffer in a window.</div>
<div class="old-help-para">							<a name="%3Abuffer-%21"></a><code class="help-tag-right">:buffer-!</code>
If the option <a href="options.html#'hidden'">'hidden'</a> (<a href="options.html#'hid'">'hid'</a>) is set, abandoned buffers are kept for all
commands that start editing another file: ":edit", ":next", ":tag", etc.  The
commands that move through the buffer list sometimes make the current buffer
hidden although the <a href="options.html#'hidden'">'hidden'</a> option is not set.  This happens when a buffer is
modified, but is forced (with '!') to be removed from a window, and
<a href="options.html#'autowrite'">'autowrite'</a> is off or the buffer can't be written.</div>
<div class="old-help-para">You can make a hidden buffer not hidden by starting to edit it with any
command, or by deleting it with the ":bdelete" command.</div>
<div class="old-help-para">The <a href="options.html#'hidden'">'hidden'</a> is global, it is used for all buffers.  The <a href="options.html#'bufhidden'">'bufhidden'</a> option
can be used to make an exception for a specific buffer.  It can take these
values:
	<code>&lt;empty&gt;</code>		Use the value of <a href="options.html#'hidden'">'hidden'</a>.
	hide		Hide this buffer, also when <a href="options.html#'hidden'">'hidden'</a> is not set.
	unload		Don't hide but unload this buffer, also when <a href="options.html#'hidden'">'hidden'</a>
			is set.
	delete		Delete the buffer.</div>
<div class="old-help-para">							<a name="hidden-quit"></a><code class="help-tag-right">hidden-quit</code>
When you try to quit Vim while there is a hidden, modified buffer, you will
get an error message and Vim will make that buffer the current buffer.  You
can then decide to write this buffer (":wq") or quit without writing (":q!").
Be careful: there may be more hidden, modified buffers!</div>
<div class="old-help-para">A buffer can also be unlisted.  This means it exists, but it is not in the
list of buffers. <a href="windows.html#unlisted-buffer">unlisted-buffer</a></div>
<div class="old-help-para">:files[!] [flags]				<a name="%3Afiles"></a><code class="help-tag-right">:files</code>
:buffers[!] [flags]				<a name="%3Abuffers"></a><code class="help-tag-right">:buffers</code> <a name="%3Als"></a><code class="help-tag">:ls</code>
:ls[!] [flags]
		Show all buffers.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">			1 #h   "/test/text"		line 1</div><div class="help-column_heading">			2u     "asdf"			line 0</div><div class="help-column_heading">			3 %a + "version.c"		line 1</div></div>
<div class="old-help-para">		When the [!] is included the list will show unlisted buffers
		(the term "unlisted" is a bit confusing then...).</div>
<div class="old-help-para">		Each buffer has a unique number.  That number will not change,
		thus you can always go to a specific buffer with ":buffer N"
		or "N <code>CTRL-^</code>", where N is the buffer number.</div>
<div class="old-help-para">		Indicators (chars in the same column are mutually exclusive):
		u	an unlisted buffer (only displayed when [!] is used)
			   <a href="windows.html#unlisted-buffer">unlisted-buffer</a>
		 %	the buffer in the current window
		 #	the alternate buffer for ":e #" and <code>CTRL-^</code>
		  a	an active buffer: it is loaded and visible
		  h	a hidden buffer: It is loaded, but currently not
			   displayed in a window <a href="windows.html#hidden-buffer">hidden-buffer</a>
		   -		a buffer with <a href="options.html#'modifiable'">'modifiable'</a> off
		   =	a readonly buffer
		   R	a terminal buffer with a running job
		   F	a terminal buffer with a finished job
		   ?    a terminal buffer without a job: <code>:terminal NONE</code>
		    +	a modified buffer
		    x   a buffer with read errors</div>
<div class="old-help-para">		[flags] can be a combination of the following characters,
		which restrict the buffers to be listed:
			+	modified buffers
			-		buffers with <a href="options.html#'modifiable'">'modifiable'</a> off
			=	readonly buffers
			a	active buffers
			u	unlisted buffers (overrides the "!")
			h	hidden buffers
			x	buffers with a read error
			%	current buffer
			#	alternate buffer
			R	terminal buffers with a running job
			F	terminal buffers with a finished job
			t	show time last used and sort buffers
		Combining flags means they are "and"ed together, e.g.:
			h+	hidden buffers which are modified
			a+	active buffers which are modified</div>
<div class="old-help-para">		When using <a href="various.html#%3Afilter">:filter</a> the pattern is matched against the
		displayed buffer name, e.g.:<pre>filter /\.vim/ ls</pre></div>
<div class="old-help-para">						<a name="%3Abad"></a><code class="help-tag-right">:bad</code> <a name="%3Abadd"></a><code class="help-tag">:badd</code>
:bad[d]	[+lnum] <code>{fname}</code>
		Add file name <code>{fname}</code> to the buffer list, without loading it,
		if it wasn't listed yet.  If the buffer was previously
		deleted, not wiped, it will be made listed again.
		If "lnum" is specified, the cursor will be positioned at that
		line when the buffer is first entered.  Note that other
		commands after the + will be ignored.</div>
<div class="old-help-para">						 <a name="%3Abalt"></a><code class="help-tag-right">:balt</code>
:balt [+lnum] <code>{fname}</code>
		Like <code>:badd</code> and also set the alternate file for the current
		window to <code>{fname}</code>.</div>
<div class="old-help-para">:[N]bd[elete][!]			<a name="%3Abd"></a><code class="help-tag-right">:bd</code> <a name="%3Abdel"></a><code class="help-tag">:bdel</code> <a name="%3Abdelete"></a><code class="help-tag">:bdelete</code> <a name="E516"></a><code class="help-tag">E516</code>
:bd[elete][!] [N]
		Unload buffer [N] (default: current buffer) and delete it from
		the buffer list.  If the buffer was changed, this fails,
		unless when [!] is specified, in which case changes are lost.
		The file remains unaffected.  Any windows for this buffer are
		closed.  If buffer [N] is the current buffer, another buffer
		will be displayed instead.  This is the most recent entry in
		the jump list that points into a loaded buffer.
		Actually, the buffer isn't completely deleted, it is removed
		from the buffer list <a href="windows.html#unlisted-buffer">unlisted-buffer</a> and option values,
		variables and mappings/abbreviations for the buffer are
		cleared. Examples:<pre>:.,$-bdelete   "delete buffers from the current one to
               " last but one
:%bdelete      " delete all buffers</pre></div>
<div class="old-help-para">:bdelete[!] <code>{bufname}</code>						<a name="E93"></a><code class="help-tag-right">E93</code> <a name="E94"></a><code class="help-tag">E94</code>
		Like ":bdelete[!] [N]", but buffer given by name, see
		<a href="windows.html#%7Bbufname%7D">{bufname}</a>.</div>
<div class="old-help-para">:bdelete[!] N1 N2 ...
		Do ":bdelete[!]" for buffer N1, N2, etc.  The arguments can be
		buffer numbers or buffer names (but not buffer names that are
		a number).  Insert a backslash before a space in a buffer
		name.</div>
<div class="old-help-para">:N,Mbdelete[!]	Do ":bdelete[!]" for all buffers in the range N to M
		<a href="motion.html#inclusive">inclusive</a>.</div>
<div class="old-help-para">:[N]bw[ipeout][!]			<a name="%3Abw"></a><code class="help-tag-right">:bw</code> <a name="%3Abwipe"></a><code class="help-tag">:bwipe</code> <a name="%3Abwipeout"></a><code class="help-tag">:bwipeout</code> <a name="E517"></a><code class="help-tag">E517</code>
:bw[ipeout][!] <code>{bufname}</code>
:N,Mbw[ipeout][!]
:bw[ipeout][!] N1 N2 ...
		Like <a href="windows.html#%3Abdelete">:bdelete</a>, but really delete the buffer.  Everything
		related to the buffer is lost.  All marks in this buffer
		become invalid, option settings are lost, etc.  Don't use this
		unless you know what you are doing. Examples:<pre>:.+,$bwipeout   " wipe out all buffers after the current
                " one
:%bwipeout      " wipe out all buffers</pre></div>
<div class="old-help-para">:[N]bun[load][!]				<a name="%3Abun"></a><code class="help-tag-right">:bun</code> <a name="%3Abunload"></a><code class="help-tag">:bunload</code> <a name="E515"></a><code class="help-tag">E515</code>
:bun[load][!] [N]
		Unload buffer [N] (default: current buffer).  The memory
		allocated for this buffer will be freed.  The buffer remains
		in the buffer list.
		If the buffer was changed, this fails, unless when [!] is
		specified, in which case the changes are lost.
		Any windows for this buffer are closed.  If buffer [N] is the
		current buffer, another buffer will be displayed instead.
		This is the most recent entry in the jump list that points
		into a loaded buffer.</div>
<div class="old-help-para">:bunload[!] <code>{bufname}</code>
		Like ":bunload[!] [N]", but buffer given by name.
		Also see <a href="windows.html#%7Bbufname%7D">{bufname}</a>.</div>
<div class="old-help-para">:N,Mbunload[!]	Do ":bunload[!]" for all buffers in the range N to M
		<a href="motion.html#inclusive">inclusive</a>.</div>
<div class="old-help-para">:bunload[!] N1 N2 ...
		Do ":bunload[!]" for buffer N1, N2, etc.  The arguments can be
		buffer numbers or buffer names (but not buffer names that are
		a number).  Insert a backslash before a space in a buffer
		name.</div>
<div class="old-help-para">:[N]b[uffer][!] [+cmd] [N]		<a name="%3Ab"></a><code class="help-tag-right">:b</code> <a name="%3Abu"></a><code class="help-tag">:bu</code> <a name="%3Abuf"></a><code class="help-tag">:buf</code> <a name="%3Abuffer"></a><code class="help-tag">:buffer</code> <a name="E86"></a><code class="help-tag">E86</code>
		Edit buffer [N] from the buffer list.  If [N] is not given,
		the current buffer remains being edited.  See <a href="windows.html#%3Abuffer-%21">:buffer-!</a> for
		[!].  This will also edit a buffer that is not in the buffer
		list, without setting the <a href="options.html#'buflisted'">'buflisted'</a> flag.
		Also see <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[N]b[uffer][!] [+cmd] <code>{bufname}</code>				<a name="%7Bbufname%7D"></a><code class="help-tag-right">{bufname}</code>
		Edit buffer for <code>{bufname}</code> from the buffer list.  A partial
		name also works, so long as it is unique in the list of
		buffers.
		Note that a buffer whose name is a number cannot be referenced
		by that name; use the buffer number instead.
		Insert a backslash before a space in a buffer name.
		See <a href="windows.html#%3Abuffer-%21">:buffer-!</a> for [!].
		This will also edit a buffer that is not in the buffer list,
		without setting the <a href="options.html#'buflisted'">'buflisted'</a> flag.
		Also see <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[N]sb[uffer] [+cmd] [N]				<a name="%3Asb"></a><code class="help-tag-right">:sb</code> <a name="%3Asbuffer"></a><code class="help-tag">:sbuffer</code>
		Split window and edit buffer [N] from the buffer list.  If [N]
		is not given, the current buffer is edited.  Respects the
		"useopen" setting of <a href="options.html#'switchbuf'">'switchbuf'</a> when splitting.  This will
		also edit a buffer that is not in the buffer list, without
		setting the <a href="options.html#'buflisted'">'buflisted'</a> flag.
		Also see <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[N]sb[uffer] [+cmd] <code>{bufname}</code>
		Split window and edit buffer for <a href="windows.html#%7Bbufname%7D">{bufname}</a> from the buffer
		list.  This will also edit a buffer that is not in the buffer
		list, without setting the <a href="options.html#'buflisted'">'buflisted'</a> flag.
		Note: If what you want to do is split the buffer, make a copy
		under another name, you can do it this way:<pre>:w foobar | sp #</pre></div>
<div class="old-help-para">		Also see <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[N]bn[ext][!] [+cmd] [N]				<a name="%3Abn"></a><code class="help-tag-right">:bn</code> <a name="%3Abnext"></a><code class="help-tag">:bnext</code> <a name="E87"></a><code class="help-tag">E87</code>
		Go to [N]th next buffer in buffer list.  [N] defaults to one.
		Wraps around the end of the buffer list.
		See <a href="windows.html#%3Abuffer-%21">:buffer-!</a> for [!].
		Also see <a href="editing.html#%2Bcmd">+cmd</a>.
		If you are in a help buffer, this takes you to the next help
		buffer (if there is one).  Similarly, if you are in a normal
		(non-help) buffer, this takes you to the next normal buffer.
		This is so that if you have invoked help, it doesn't get in
		the way when you're browsing code/text buffers.  The next three
		commands also work like this.</div>
<div class="old-help-para">							<a name="%3Asbn"></a><code class="help-tag-right">:sbn</code> <a name="%3Asbnext"></a><code class="help-tag">:sbnext</code>
:[N]sbn[ext] [+cmd] [N]
		Split window and go to [N]th next buffer in buffer list.
		Wraps around the end of the buffer list.  Uses <a href="options.html#'switchbuf'">'switchbuf'</a>
		Also see <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[N]bN[ext][!] [+cmd] [N]		<a name="%3AbN"></a><code class="help-tag-right">:bN</code> <a name="%3AbNext"></a><code class="help-tag">:bNext</code> <a name="%3Abp"></a><code class="help-tag">:bp</code> <a name="%3Abprevious"></a><code class="help-tag">:bprevious</code> <a name="E88"></a><code class="help-tag">E88</code>
:[N]bp[revious][!] [+cmd] [N]
		Go to [N]th previous buffer in buffer list.  [N] defaults to
		one.  Wraps around the start of the buffer list.
		See <a href="windows.html#%3Abuffer-%21">:buffer-!</a> for [!] and <a href="options.html#'switchbuf'">'switchbuf'</a>.
		Also see <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[N]sbN[ext] [+cmd] [N]			<a name="%3AsbN"></a><code class="help-tag-right">:sbN</code> <a name="%3AsbNext"></a><code class="help-tag">:sbNext</code> <a name="%3Asbp"></a><code class="help-tag">:sbp</code> <a name="%3Asbprevious"></a><code class="help-tag">:sbprevious</code>
:[N]sbp[revious] [+cmd] [N]
		Split window and go to [N]th previous buffer in buffer list.
		Wraps around the start of the buffer list.
		Uses <a href="options.html#'switchbuf'">'switchbuf'</a>.
		Also see <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:br[ewind][!] [+cmd]					<a name="%3Abr"></a><code class="help-tag-right">:br</code> <a name="%3Abre"></a><code class="help-tag">:bre</code> <a name="%3Abrewind"></a><code class="help-tag">:brewind</code>
		Go to first buffer in buffer list.  If the buffer list is
		empty, go to the first unlisted buffer.
		See <a href="windows.html#%3Abuffer-%21">:buffer-!</a> for [!].</div>
<div class="old-help-para">:bf[irst] [+cmd]					<a name="%3Abf"></a><code class="help-tag-right">:bf</code> <a name="%3Abfirst"></a><code class="help-tag">:bfirst</code>
		Same as <a href="windows.html#%3Abrewind">:brewind</a>.
		Also see <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:sbr[ewind] [+cmd]					<a name="%3Asbr"></a><code class="help-tag-right">:sbr</code> <a name="%3Asbrewind"></a><code class="help-tag">:sbrewind</code>
		Split window and go to first buffer in buffer list.  If the
		buffer list is empty, go to the first unlisted buffer.
		Respects the <a href="options.html#'switchbuf'">'switchbuf'</a> option.
		Also see <a href="editing.html#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:sbf[irst] [+cmd]					<a name="%3Asbf"></a><code class="help-tag-right">:sbf</code> <a name="%3Asbfirst"></a><code class="help-tag">:sbfirst</code>
		Same as ":sbrewind".</div>
<div class="old-help-para">:bl[ast][!] [+cmd]					<a name="%3Abl"></a><code class="help-tag-right">:bl</code> <a name="%3Ablast"></a><code class="help-tag">:blast</code>
		Go to last buffer in buffer list.  If the buffer list is
		empty, go to the last unlisted buffer.
		See <a href="windows.html#%3Abuffer-%21">:buffer-!</a> for [!].</div>
<div class="old-help-para">:sbl[ast] [+cmd]					<a name="%3Asbl"></a><code class="help-tag-right">:sbl</code> <a name="%3Asblast"></a><code class="help-tag">:sblast</code>
		Split window and go to last buffer in buffer list.  If the
		buffer list is empty, go to the last unlisted buffer.
		Respects <a href="options.html#'switchbuf'">'switchbuf'</a> option.</div>
<div class="old-help-para">:[N]bm[odified][!] [+cmd] [N]			<a name="%3Abm"></a><code class="help-tag-right">:bm</code> <a name="%3Abmodified"></a><code class="help-tag">:bmodified</code> <a name="E84"></a><code class="help-tag">E84</code>
		Go to [N]th next modified buffer.  Note: this command also
		finds unlisted buffers.  If there is no modified buffer the
		command fails.</div>
<div class="old-help-para">:[N]sbm[odified] [+cmd] [N]				<a name="%3Asbm"></a><code class="help-tag-right">:sbm</code> <a name="%3Asbmodified"></a><code class="help-tag">:sbmodified</code>
		Split window and go to [N]th next modified buffer.
		Respects <a href="options.html#'switchbuf'">'switchbuf'</a> option.
		Note: this command also finds buffers not in the buffer list.</div>
<div class="old-help-para">:[N]unh[ide] [N]			<a name="%3Aunh"></a><code class="help-tag-right">:unh</code> <a name="%3Aunhide"></a><code class="help-tag">:unhide</code> <a name="%3Asun"></a><code class="help-tag">:sun</code> <a name="%3Asunhide"></a><code class="help-tag">:sunhide</code>
:[N]sun[hide] [N]
		Rearrange the screen to open one window for each loaded buffer
		in the buffer list.  When a count is given, this is the
		maximum number of windows to open.</div>
<div class="old-help-para">:[N]ba[ll] [N]					<a name="%3Aba"></a><code class="help-tag-right">:ba</code> <a name="%3Aball"></a><code class="help-tag">:ball</code> <a name="%3Asba"></a><code class="help-tag">:sba</code> <a name="%3Asball"></a><code class="help-tag">:sball</code>
:[N]sba[ll] [N]	Rearrange the screen to open one window for each buffer in
		the buffer list.  When a count is given, this is the maximum
		number of windows to open.  <a href="options.html#'winheight'">'winheight'</a> also limits the number
		of windows opened (<a href="options.html#'winwidth'">'winwidth'</a> if <a href="windows.html#%3Avertical">:vertical</a> was prepended).
		Buf/Win Enter/Leave autocommands are not executed for the new
		windows here, that's only done when they are really entered.
		When the <a href="tabpage.html#%3Atab">:tab</a> modifier is used new windows are opened in a
		new tab, up to <a href="options.html#'tabpagemax'">'tabpagemax'</a>.</div>
<div class="old-help-para">Note: All the commands above that start editing another buffer, keep the
<a href="options.html#'readonly'">'readonly'</a> flag as it was.  This differs from the ":edit" command, which sets
the <a href="options.html#'readonly'">'readonly'</a> flag each time the file is read.</div>
<div class="old-help-para"><h2 class="help-heading">12. Special kinds of buffers<span class="help-heading-tags">			<a name="special-buffers"></a><span class="help-tag">special-buffers</span></span></h2></div>
<div class="old-help-para">Instead of containing the text of a file, buffers can also be used for other
purposes.  A few options can be set to change the behavior of a buffer:
	<a href="options.html#'bufhidden'">'bufhidden'</a>	what happens when the buffer is no longer displayed
			in a window.
	<a href="options.html#'buftype'">'buftype'</a>	what kind of a buffer this is
	<a href="options.html#'swapfile'">'swapfile'</a>	whether the buffer will have a swap file
	<a href="options.html#'buflisted'">'buflisted'</a>	buffer shows up in the buffer list</div>
<div class="old-help-para">A few useful kinds of a buffer:</div>
<div class="old-help-para">quickfix	Used to contain the error list or the location list.  See
		<a href="quickfix.html#%3Acwindow">:cwindow</a> and <a href="quickfix.html#%3Alwindow">:lwindow</a>.  This command sets the <a href="options.html#'buftype'">'buftype'</a>
		option to "quickfix".  You are not supposed to change this!
		<a href="options.html#'swapfile'">'swapfile'</a> is off.</div>
<div class="old-help-para">help		Contains a help file.  Will only be created with the <a href="helphelp.html#%3Ahelp">:help</a>
		command.  The flag that indicates a help buffer is internal
		and can't be changed.  The <a href="options.html#'buflisted'">'buflisted'</a> option will be reset
		for a help buffer.</div>
<div class="old-help-para">terminal	A terminal window buffer, see <a href="nvim_terminal_emulator.html#terminal">terminal</a>. The contents cannot
		be read or changed until the job ends.</div>
<div class="old-help-para">directory	Displays directory contents.  Can be used by a file explorer
		plugin.  The buffer is created with these settings:<pre>:setlocal buftype=nowrite
:setlocal bufhidden=delete
:setlocal noswapfile</pre></div>
<div class="old-help-para">		The buffer name is the name of the directory and is adjusted
		when using the <a href="editing.html#%3Acd">:cd</a> command.</div>
<div class="old-help-para">						<a name="scratch-buffer"></a><code class="help-tag-right">scratch-buffer</code>
scratch		Contains text that can be discarded at any time.  It is kept
		when closing the window, it must be deleted explicitly.
		Settings:<pre>:setlocal buftype=nofile
:setlocal bufhidden=hide
:setlocal noswapfile</pre></div>
<div class="old-help-para">		The buffer name can be used to identify the buffer, if you
		give it a meaningful name.</div>
<div class="old-help-para">						<a name="unlisted-buffer"></a><code class="help-tag-right">unlisted-buffer</code>
unlisted	The buffer is not in the buffer list.  It is not used for
		normal editing, but to show a help file, remember a file name
		or marks.  The ":bdelete" command will also set this option,
		thus it doesn't completely delete the buffer.  Settings:<pre>:setlocal nobuflisted</pre></div>

  
  