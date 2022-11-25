---
title:  Various
layout: ../../layouts/MainLayout.astro
---

  <a name="various.txt"></a><a name="various"></a><h1> Various</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/various.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Various commands</div>
<div class="old-help-para"><h2 class="help-heading">1. Various commands<span class="help-heading-tags">					<a name="various-cmds"></a><span class="help-tag">various-cmds</span></span></h2></div>
<div class="old-help-para">							<a name="CTRL-L"></a><code class="help-tag-right">CTRL-L</code>
CTRL-L			Clears and redraws the screen.  The redraw may happen
			later, after processing typeahead.
							<a name="CTRL-L-default"></a><code class="help-tag-right">CTRL-L-default</code>
			By default, also clears search highlighting
			<a href="pattern.html#%3Anohlsearch">:nohlsearch</a> and updates diffs <a href="diff.html#%3Adiffupdate">:diffupdate</a>.
			<a href="vim_diff.html#default-mappings">default-mappings</a></div>
<div class="old-help-para">							<a name="%3Amod"></a><code class="help-tag-right">:mod</code> <a name="%3Amode"></a><code class="help-tag">:mode</code>
:mod[e]			Clears and redraws the screen.</div>
<div class="old-help-para">							<a name="%3Aredr"></a><code class="help-tag-right">:redr</code> <a name="%3Aredraw"></a><code class="help-tag">:redraw</code>
:redr[aw][!]		Redraws pending screen updates now, or the entire
			screen if "!" is included.  To CLEAR the screen use
			<a href="various.html#%3Amode">:mode</a> or <a href="various.html#CTRL-L">CTRL-L</a>.
			Useful to update the screen during a script or
			function (or a mapping if <a href="options.html#'lazyredraw'">'lazyredraw'</a> set).</div>
<div class="old-help-para">						<a name="%3Aredraws"></a><code class="help-tag-right">:redraws</code> <a name="%3Aredrawstatus"></a><code class="help-tag">:redrawstatus</code>
:redraws[tatus][!]	Redraws the status line and window bar of the current
			window, or all status lines and window bars if "!" is
			included. Useful if <a href="options.html#'statusline'">'statusline'</a> or <a href="options.html#'winbar'">'winbar'</a> includes
			an item that doesn't cause automatic updating.</div>
<div class="old-help-para">						<a name="%3Aredrawt"></a><code class="help-tag-right">:redrawt</code> <a name="%3Aredrawtabline"></a><code class="help-tag">:redrawtabline</code>
:redrawt[abline]	Redraw the tabline.  Useful to update the tabline when
			<a href="options.html#'tabline'">'tabline'</a> includes an item that doesn't trigger
			automatic updating.</div>
<div class="old-help-para">							<a name="N%3CDel%3E"></a><code class="help-tag-right">N&lt;Del&gt;</code>
<code>&lt;Del&gt;</code>			When entering a number: Remove the last digit.
			Note: if you like to use <code>&lt;BS&gt;</code> for this, add this
			mapping to your vimrc:<pre>:map CTRL-V &lt;BS&gt;   CTRL-V &lt;Del&gt;</pre></div>
<div class="old-help-para">:as[cii]	or					<a name="ga"></a><code class="help-tag-right">ga</code> <a name="%3Aas"></a><code class="help-tag">:as</code> <a name="%3Aascii"></a><code class="help-tag">:ascii</code>
ga			Print the ascii value of the character under the
			cursor in decimal, hexadecimal and octal.
			Mnemonic: Get Ascii value.</div>
<div class="old-help-para">			For example, when the cursor is on a 'R':
<div class="help-column_heading">				<code>&lt;R&gt;</code>  82,  Hex 52,  Octal 122</div>			When the character is a non-standard ASCII character,
			but printable according to the <a href="options.html#'isprint'">'isprint'</a> option, the
			non-printable version is also given.</div>
<div class="old-help-para">			When the character is larger than 127, the <code>&lt;M-x&gt;</code> form
			is also printed.  For example:
<div class="help-column_heading">				&lt;~A&gt;  &lt;M-^A&gt;  129,  Hex 81,  Octal 201</div><div class="help-column_heading">				<code>&lt;p&gt;</code>  &lt;|~&gt;  <code>&lt;M-~&gt;</code>  254,  Hex fe,  Octal 376</div>			(where <code>&lt;p&gt;</code> is a special character)</div>
<div class="old-help-para">			The <code>&lt;Nul&gt;</code> character in a file is stored internally as
			<code>&lt;NL&gt;</code>, but it will be shown as:
<div class="help-column_heading">				&lt;^@&gt;  0,  Hex 00,  Octal 000</div></div>
<div class="old-help-para">			If the character has composing characters these are
			also shown.  The value of <a href="vim_diff.html#'maxcombine'">'maxcombine'</a> doesn't matter.</div>
<div class="old-help-para">			If the character can be inserted as a digraph, also
			output the two characters that can be used to create
			the character:
<div class="help-column_heading">			    &lt;ö&gt; 246, Hex 00f6, Oct 366, Digr o:</div>			This shows you can type <code>CTRL-K</code> o : to insert ö.</div>
<div class="old-help-para">							<a name="g8"></a><code class="help-tag-right">g8</code>
g8			Print the hex values of the bytes used in the
			character under the cursor, assuming it is in <a href="mbyte.html#UTF-8">UTF-8</a>
			encoding.  This also shows composing characters.  The
			value of <a href="vim_diff.html#'maxcombine'">'maxcombine'</a> doesn't matter.
			Example of a character with two composing characters:
<div class="help-column_heading">				e0 b8 81 + e0 b8 b9 + e0 b9 89</div></div>
<div class="old-help-para">							<a name="8g8"></a><code class="help-tag-right">8g8</code>
8g8			Find an illegal UTF-8 byte sequence at or after the
			cursor.  This works in two situations:
			1. when <a href="options.html#'encoding'">'encoding'</a> is any 8-bit encoding
			2. when <a href="options.html#'encoding'">'encoding'</a> is "utf-8" and <a href="options.html#'fileencoding'">'fileencoding'</a> is
			   any 8-bit encoding
			Thus it can be used when editing a file that was
			supposed to be UTF-8 but was read as if it is an 8-bit
			encoding because it contains illegal bytes.
			Does not wrap around the end of the file.
			Note that when the cursor is on an illegal byte or the
			cursor is halfway through a multibyte character the
			command won't move the cursor.</div>
<div class="old-help-para">						<a name="%3Ap"></a><code class="help-tag-right">:p</code> <a name="%3Apr"></a><code class="help-tag">:pr</code> <a name="%3Aprint"></a><code class="help-tag">:print</code> <a name="E749"></a><code class="help-tag">E749</code>
:[range]p[rint] [flags]
			Print [range] lines (default current line).
			Note: If you are looking for a way to print your text
			on paper see <a href="print.html#%3Ahardcopy">:hardcopy</a>.  In the GUI you can use the
			File.Print menu entry.
			See <a href="cmdline.html#ex-flags">ex-flags</a> for [flags].
			The <a href="various.html#%3Afilter">:filter</a> command can be used to only show lines
			matching a pattern.</div>
<div class="old-help-para">:[range]p[rint] <code>{count}</code> [flags]
			Print <code>{count}</code> lines, starting with [range] (default
			current line <a href="cmdline.html#cmdline-ranges">cmdline-ranges</a>).
			See <a href="cmdline.html#ex-flags">ex-flags</a> for [flags].</div>
<div class="old-help-para">							<a name="%3Al"></a><code class="help-tag-right">:l</code> <a name="%3Alist"></a><code class="help-tag">:list</code>
:[range]l[ist] [count] [flags]
			Same as :print, but show tabs as "&gt;", trailing spaces
			as "-", and non-breakable space characters as "+" by
			default.  Further changed by the <a href="options.html#'listchars'">'listchars'</a> option.
			See <a href="cmdline.html#ex-flags">ex-flags</a> for [flags].</div>
<div class="old-help-para">							<a name="%3Anu"></a><code class="help-tag-right">:nu</code> <a name="%3Anumber"></a><code class="help-tag">:number</code>
:[range]nu[mber] [count] [flags]
			Same as :print, but precede each line with its line
			number.  (See also <a href="syntax.html#hl-LineNr">hl-LineNr</a> and <a href="options.html#'numberwidth'">'numberwidth'</a>).
			See <a href="cmdline.html#ex-flags">ex-flags</a> for [flags].</div>
<div class="old-help-para">							<a name="%3A%23"></a><code class="help-tag-right">:#</code>
:[range]# [count] [flags]
			synonym for :number.</div>
<div class="old-help-para">							<a name="%3A%23%21"></a><code class="help-tag-right">:#!</code>
:#!{anything}		Ignored, so that you can start a Vim script with:<pre>#!vim -S
echo "this is a Vim script"
quit</pre></div>
<div class="old-help-para">							<a name="%3Az"></a><code class="help-tag-right">:z</code> <a name="E144"></a><code class="help-tag">E144</code>
:[range]z[+-^.=][count]	Display several lines of text surrounding the line
			specified with [range], or around the current line
			if there is no [range].</div>
<div class="old-help-para">			If there is a [count], that's how many lines you'll
			see; if there is no [count] and only one window then
			twice the value of the <a href="options.html#'scroll'">'scroll'</a> option is used,
			otherwise the current window height minus 3 is used.
			This is the value of "scr" in the table below.</div>
<div class="old-help-para">			If there is a [count] the <a href="options.html#'window'">'window'</a> option is set to
			its value.</div>
<div class="old-help-para">			:z can be used either alone or followed by any of
			several marks.  These have the following effect:</div>
<div class="old-help-para"><div class="help-column_heading">			mark   first line    last line      new cursor line</div>			----   ----------    ---------      ------------
<div class="help-li" style="">      current line  1 scr forward  1 scr forward
</div><div class="help-li" style="">      1 scr back    current line   current line
			^      2 scr back    1 scr back     1 scr back
			.      1/2 scr back  1/2 scr fwd    1/2 scr fwd
			=      1/2 scr back  1/2 scr fwd    current line
</div></div>
<div class="old-help-para">			Specifying no mark at all is the same as "+".
			If the mark is "=", a line of dashes is printed
			around the current line.</div>
<div class="old-help-para">							<a name="%3Az%21"></a><code class="help-tag-right">:z!</code>
:[range]z![+-^.=][count]
			Like ":z", but when [count] is not specified, it
			defaults to the Vim window height minus one.</div>
<div class="old-help-para">:[range]z[!]#[+-^.=][count]				<a name="%3Az%23"></a><code class="help-tag-right">:z#</code>
			Like ":z" or ":z!", but number the lines.</div>
<div class="old-help-para">							<a name="%3A%3D"></a><code class="help-tag-right">:=</code>
:= [flags]		Print the last line number.
			See <a href="cmdline.html#ex-flags">ex-flags</a> for [flags].</div>
<div class="old-help-para">:{range}= [flags]	Prints the last line number in <code>{range}</code>.  For example,
			this prints the current line number:<pre>:.=</pre></div>
<div class="old-help-para">			See <a href="cmdline.html#ex-flags">ex-flags</a> for [flags].</div>
<div class="old-help-para">:norm[al][!] <code>{commands}</code>					<a name="%3Anorm"></a><code class="help-tag-right">:norm</code> <a name="%3Anormal"></a><code class="help-tag">:normal</code>
			Execute Normal mode commands <code>{commands}</code>.  This makes
			it possible to execute Normal mode commands typed on
			the command-line.  <code>{commands}</code> are executed like they
			are typed.  For undo all commands are undone together.
			Execution stops when an error is encountered.</div>
<div class="old-help-para">			If the [!] is given, mappings will not be used.
			Without it, when this command is called from a
			non-remappable mapping (<a href="map.html#%3Anoremap">:noremap</a>), the argument can
			be mapped anyway.</div>
<div class="old-help-para">			<code>{commands}</code> should be a complete command.  If
			<code>{commands}</code> does not finish a command, the last one
			will be aborted as if <code>&lt;Esc&gt;</code> or <code>&lt;C-C&gt;</code> was typed.
			This implies that an insert command must be completed
			(to start Insert mode, see <a href="insert.html#%3Astartinsert">:startinsert</a>).  A ":"
			command must be completed as well.  And you can't use
			"Q" or "gQ" to start Ex mode.</div>
<div class="old-help-para">			The display is not updated while ":normal" is busy.</div>
<div class="old-help-para">			<code>{commands}</code> cannot start with a space.  Put a count of
			1 (one) before it, "1 " is one space.</div>
<div class="old-help-para">			This command cannot be followed by another command,
			since any '|' is considered part of the command.</div>
<div class="old-help-para">			This command can be used recursively, but the depth is
			limited by <a href="options.html#'maxmapdepth'">'maxmapdepth'</a>.</div>
<div class="old-help-para">			An alternative is to use <a href="eval.html#%3Aexecute">:execute</a>, which uses an
			expression as argument.  This allows the use of
			printable characters to represent special characters.</div>
<div class="old-help-para">			Example:<pre>:exe "normal \&lt;c-w&gt;\&lt;c-w&gt;"</pre></div>
<div class="old-help-para">:{range}norm[al][!] <code>{commands}</code>				<a name="%3Anormal-range"></a><code class="help-tag-right">:normal-range</code>
			Execute Normal mode commands <code>{commands}</code> for each line
			in the <code>{range}</code>.  Before executing the <code>{commands}</code>, the
			cursor is positioned in the first column of the range,
			for each line.  Otherwise it's the same as the
			":normal" command without a range.</div>
<div class="old-help-para">						  <a name="%3Ash"></a><code class="help-tag-right">:sh</code> <a name="%3Ashell"></a><code class="help-tag">:shell</code> <a name="E371"></a><code class="help-tag">E371</code> <a name="E360"></a><code class="help-tag">E360</code>
:sh[ell]		Removed. <a href="vim_diff.html#vim-differences">vim-differences</a></div>
<div class="old-help-para">						  <a name="%3Aterminal"></a><code class="help-tag-right">:terminal</code> <a name="%3Ate"></a><code class="help-tag">:te</code>
:te[rminal][!] [{cmd}]	Run <code>{cmd}</code> in a non-interactive <a href="options.html#'shell'">'shell'</a> in a new
			<a href="nvim_terminal_emulator.html#terminal-emulator">terminal-emulator</a> buffer. Without <code>{cmd}</code>, start an
			interactive <a href="options.html#'shell'">'shell'</a>.</div>
<div class="old-help-para">			Type <a href="insert.html#i">i</a> to enter <a href="intro.html#Terminal-mode">Terminal-mode</a>, then keys are sent to
			the job running in the terminal. Type <code>&lt;C-\&gt;</code><code>&lt;C-N&gt;</code> to
			leave Terminal-mode. <a href="intro.html#CTRL-%5C_CTRL-N">CTRL-\_CTRL-N</a>. Type <code>&lt;C-\&gt;</code><code>&lt;C-O&gt;</code>
			to execute a single normal mode command <a href="nvim_terminal_emulator.html#t_CTRL-%5C_CTRL-O">t_CTRL-\_CTRL-O</a></div>
<div class="old-help-para">			Fails if changes have been made to the current buffer,
			unless <a href="options.html#'hidden'">'hidden'</a> is set.</div>
<div class="old-help-para">			To enter <a href="intro.html#Terminal-mode">Terminal-mode</a> automatically:<pre>autocmd TermOpen * startinsert</pre></div>
<div class="old-help-para">							<a name="%3A%21cmd"></a><code class="help-tag-right">:!cmd</code> <a name="%3A%21"></a><code class="help-tag">:!</code>
:!{cmd}			Execute <code>{cmd}</code> with <a href="options.html#'shell'">'shell'</a>. See also <a href="various.html#%3Aterminal">:terminal</a>.</div>
<div class="old-help-para">			The command runs in a non-interactive shell connected
			to a pipe (not a terminal). Use <a href="various.html#%3Aterminal">:terminal</a> to run an
			interactive shell connected to a terminal.</div>
<div class="old-help-para">			Backgrounded ("&amp;") commands must not write to stdout
			or stderr, the streams are closed immediately. <a href="builtin.html#E5677">E5677</a>
			Use <a href="builtin.html#jobstart()">jobstart()</a> instead.<pre>:call jobstart('foo', {'detach':1})</pre></div>
<div class="old-help-para">			For powershell, chaining a stringed executable path
			requires using the call operator (&amp;).<pre>:!Write-Output "1`n2" | &amp; "C:\Windows\System32\sort.exe" /r</pre></div>
<div class="old-help-para">							<a name="E34"></a><code class="help-tag-right">E34</code>
			Any "!" in <code>{cmd}</code> is replaced with the previous
			external command (see also <a href="options.html#'cpoptions'">'cpoptions'</a>), unless
			escaped by a backslash.  Example: ":!ls" followed by
			":!echo ! \! \\!" executes "echo ls ! \!".</div>
<div class="old-help-para">			Any "|" in <code>{cmd}</code> is passed to the shell, you cannot
			use it to append a Vim command.  See <a href="cmdline.html#%3Abar">:bar</a>.</div>
<div class="old-help-para">			Any "%" in <code>{cmd}</code> is expanded to the current file name.
			Any "#" in <code>{cmd}</code> is expanded to the alternate file name.
			Special characters are not escaped, use quotes or
			<a href="builtin.html#shellescape()">shellescape()</a>:<pre>:!ls "%"
:exe "!ls " .. shellescape(expand("%"))</pre></div>
<div class="old-help-para">			Newline character ends <code>{cmd}</code> unless a backslash
			precedes the newline.  What follows is interpreted as
			another <a href="cmdline.html#%3A">:</a> command.</div>
<div class="old-help-para">			After the command has been executed, the timestamp and
			size of the current file is checked <a href="editing.html#timestamp">timestamp</a>.</div>
<div class="old-help-para">			If the command produces too much output some lines may
			be skipped so the command can execute quickly.  No
			data is lost, this only affects the display.  The last
			few lines are always displayed (never skipped).</div>
<div class="old-help-para">			To avoid the hit-enter prompt use:<pre>:silent !{cmd}</pre></div>
<div class="old-help-para">							<a name="%3A%21%21"></a><code class="help-tag-right">:!!</code>
:!!			Repeat last ":!{cmd}".</div>
<div class="old-help-para">							<a name="%3Ave"></a><code class="help-tag-right">:ve</code> <a name="%3Aver"></a><code class="help-tag">:ver</code> <a name="%3Aversion"></a><code class="help-tag">:version</code>
:ve[rsion]		Print editor version and build information.
			See also <a href="vim_diff.html#feature-compile">feature-compile</a>.</div>
<div class="old-help-para">							<a name="%3Aredi"></a><code class="help-tag-right">:redi</code> <a name="%3Aredir"></a><code class="help-tag">:redir</code>
:redi[r][!] &gt; <code>{file}</code>	Redirect messages to file <code>{file}</code>.  The messages which
			are the output of commands are written to that file,
			until redirection ends.  The messages are also still
			shown on the screen.  When [!] is included, an
			existing file is overwritten.  When [!] is omitted,
			and <code>{file}</code> exists, this command fails.</div>
<div class="old-help-para">			Only one ":redir" can be active at a time.  Calls to
			":redir" will close any active redirection before
			starting redirection to the new target.  For recursive
			use check out <a href="builtin.html#execute()">execute()</a>.</div>
<div class="old-help-para">			To stop the messages and commands from being echoed to
			the screen, put the commands in a function and call it
			with ":silent call Function()".
			Alternatives are the <a href="options.html#'verbosefile'">'verbosefile'</a> option or
			<a href="builtin.html#execute()">execute()</a> function, these can be used in combination
			with ":redir".</div>
<div class="old-help-para">:redi[r] &gt;&gt; <code>{file}</code>	Redirect messages to file <code>{file}</code>.  Append if <code>{file}</code>
			already exists.</div>
<div class="old-help-para">:redi[r] @{a-zA-Z}
:redi[r] @{a-zA-Z}&gt;	Redirect messages to register <code>{a-z}</code>.  Append to the
			contents of the register if its name is given
			uppercase <code>{A-Z}</code>.  The "&gt;" after the register name is
			optional.
:redi[r] @{a-z}&gt;&gt;	Append messages to register <code>{a-z}</code>.</div>
<div class="old-help-para">:redi[r] @*&gt;
:redi[r] @+&gt;		Redirect messages to the selection or clipboard. For
			backward compatibility, the "&gt;" after the register
			name can be omitted. See <a href="provider.html#quotestar">quotestar</a> and <a href="provider.html#quoteplus">quoteplus</a>.
:redi[r] @*&gt;&gt;
:redi[r] @+&gt;&gt;		Append messages to the selection or clipboard.</div>
<div class="old-help-para">:redi[r] @"&gt;		Redirect messages to the unnamed register. For
			backward compatibility, the "&gt;" after the register
			name can be omitted.
:redi[r] @"&gt;&gt;		Append messages to the unnamed register.</div>
<div class="old-help-para">:redi[r] =&gt; <code>{var}</code>	Redirect messages to a variable.  If the variable
			doesn't exist, then it is created.  If the variable
			exists, then it is initialized to an empty string.
			The variable will remain empty until redirection ends.
			Only string variables can be used.  After the
			redirection starts, if the variable is removed or
			locked or the variable type is changed, then further
			command output messages will cause errors.  When using
			a local variable (l:var in a function or s:var in a
			script) and another <code>:redir</code> causes the current one to
			end, the scope might be different and the assignment
			fails.
			To get the output of one command the <a href="builtin.html#execute()">execute()</a>
			function can be used instead of redirection.</div>
<div class="old-help-para">:redi[r] =&gt;&gt; <code>{var}</code>	Append messages to an existing variable.  Only string
			variables can be used.</div>
<div class="old-help-para">:redi[r] END		End redirecting messages.</div>
<div class="old-help-para">							<a name="%3Afilt"></a><code class="help-tag-right">:filt</code> <a name="%3Afilter"></a><code class="help-tag">:filter</code>
:filt[er][!] <code>{pattern}</code> <code>{command}</code>
:filt[er][!] /{pattern}/ <code>{command}</code>
			Restrict the output of <code>{command}</code> to lines matching
			with <code>{pattern}</code>.  For example, to list only xml files:<pre>:filter /\.xml$/ oldfiles</pre></div>
<div class="old-help-para">			If the [!] is given, restrict the output of <code>{command}</code>
			to lines that do NOT match <code>{pattern}</code>.</div>
<div class="old-help-para">			<code>{pattern}</code> is a Vim search pattern.  Instead of enclosing
			it in / any non-ID character (see <a href="options.html#'isident'">'isident'</a>) can be
			used, so long as it does not appear in <code>{pattern}</code>.
			Without the enclosing character the pattern cannot
			include the bar character. <a href="options.html#'ignorecase'">'ignorecase'</a> is not used.</div>
<div class="old-help-para">			The pattern is matched against the relevant part of
			the output, not necessarily the whole line. Only some
			commands support filtering, try it out to check if it
			works. Some of the commands that support filtering:
			   <a href="various.html#%3A%23">:#</a>          - filter whole line
			   <a href="quickfix.html#%3Aclist">:clist</a>      - filter by file name or module name
			   <a href="map.html#%3Acommand">:command</a>    - filter by command name
			   <a href="windows.html#%3Afiles">:files</a>      - filter by file name
			   <a href="syntax.html#%3Ahighlight">:highlight</a>  - filter by highlight group
			   <a href="motion.html#%3Ajumps">:jumps</a>      - filter by file name
			   <a href="eval.html#%3Alet">:let</a>        - filter by variable name
			   <a href="various.html#%3Alist">:list</a>       - filter whole line
			   <a href="quickfix.html#%3Allist">:llist</a>      - filter by file name or module name
			   <a href="motion.html#%3Amarks">:marks</a>      - filter by text in the current file,
					   or file name for other files
			   <a href="starting.html#%3Aoldfiles">:oldfiles</a>   - filter by file name
			   <a href="change.html#%3Aregisters">:registers</a>  - filter by register contents
					   (does not work multi-line)
			   <a href="options.html#%3Aset">:set</a>        - filter by option name</div>
<div class="old-help-para">			Only normal messages are filtered, error messages are
			not.</div>
<div class="old-help-para">						<a name="%3Asil"></a><code class="help-tag-right">:sil</code> <a name="%3Asilent"></a><code class="help-tag">:silent</code> <a name="%3Asilent%21"></a><code class="help-tag">:silent!</code>
:sil[ent][!] <code>{command}</code>	Execute <code>{command}</code> silently.  Normal messages will not
			be given or added to the message history.
			When [!] is added, error messages will also be
			skipped, and commands and mappings will not be aborted
			when an error is detected.  <a href="eval.html#v%3Aerrmsg">v:errmsg</a> is still set.
			When [!] is not used, an error message will cause
			further messages to be displayed normally.
			Redirection, started with <a href="various.html#%3Aredir">:redir</a>, will continue as
			usual, although there might be small differences.
			This will allow redirecting the output of a command
			without seeing it on the screen.  Example:<pre>:redir &gt;/tmp/foobar
:silent g/Aap/p
:redir END</pre></div>
<div class="old-help-para">			To execute a Normal mode command silently, use the
			<a href="various.html#%3Anormal">:normal</a> command.  For example, to search for a
			string without messages:<pre>:silent exe "normal /path\&lt;CR&gt;"</pre></div>
<div class="old-help-para">			":silent!" is useful to execute a command that may
			fail, but the failure is to be ignored.  Example:<pre>:let v:errmsg = ""
:silent! /^begin
:if v:errmsg != ""
: ... pattern was not found</pre></div>
<div class="old-help-para">			":silent" also skips the hit-enter prompt.
			Dialogs that prompt for user input (<a href="builtin.html#confirm()">confirm()</a>,
			<a href="options.html#'swapfile'">'swapfile'</a>, …) are never silent.</div>
<div class="old-help-para">						<a name="%3Auns"></a><code class="help-tag-right">:uns</code> <a name="%3Aunsilent"></a><code class="help-tag">:unsilent</code>
:uns[ilent] <code>{command}</code>	Execute <code>{command}</code> not silently.  Only makes a
			difference when <a href="various.html#%3Asilent">:silent</a> was used to get to this
			command.
			Use this for giving a message even when <a href="various.html#%3Asilent">:silent</a> was
			used.  In this example <a href="various.html#%3Asilent">:silent</a> is used to avoid the
			message about reading the file and <a href="various.html#%3Aunsilent">:unsilent</a> to be
			able to list the first line of each file.<pre>:silent argdo unsilent echo expand('%') .. ": " .. getline(1)</pre></div>
<div class="old-help-para">						<a name="%3Averb"></a><code class="help-tag-right">:verb</code> <a name="%3Averbose"></a><code class="help-tag">:verbose</code>
:[count]verb[ose] <code>{command}</code>
			Execute <code>{command}</code> with <a href="options.html#'verbose'">'verbose'</a> set to [count].  If
			[count] is omitted one is used. ":0verbose" can be
			used to set <a href="options.html#'verbose'">'verbose'</a> to zero.
			The additional use of ":silent" makes messages
			generated but not displayed.
			The combination of ":silent" and ":verbose" can be
			used to generate messages and check them with
			<a href="eval.html#v%3Astatusmsg">v:statusmsg</a> and friends.  For example:<pre>:let v:statusmsg = ""
:silent verbose runtime foobar.vim
:if v:statusmsg != ""
:  " foobar.vim could not be found
:endif</pre></div>
<div class="old-help-para">			When concatenating another command, the ":verbose"
			only applies to the first one:<pre>:4verbose set verbose | set verbose</pre></div>
<div class="old-help-para"><div class="help-column_heading">				  verbose=4</div><div class="help-column_heading">				  verbose=0</div>			For logging verbose messages in a file use the
			<a href="options.html#'verbosefile'">'verbosefile'</a> option.</div>
<div class="old-help-para">							<a name="%3Averbose-cmd"></a><code class="help-tag-right">:verbose-cmd</code>
When <a href="options.html#'verbose'">'verbose'</a> is non-zero, listing the value of a Vim option or a key map or
an abbreviation or a user-defined function or a command or a highlight group
or an autocommand will also display where it was last defined. If they were
defined in Lua they will only be located if <a href="options.html#'verbose'">'verbose'</a> is set. So Start
nvim with -V1 arg to see them. If it was defined manually then there
will be no "Last set" message.  When it was defined while executing a function,
user command or autocommand, the script in which it was defined is reported.</div>
<div class="old-help-para">							<a name="K"></a><code class="help-tag-right">K</code>
[count]K       		Runs the program given by <a href="options.html#'keywordprg'">'keywordprg'</a> to lookup the
			<a href="motion.html#word">word</a> (defined by <a href="options.html#'iskeyword'">'iskeyword'</a>) under or right of the
			cursor. Default is "man". Works like this:<pre>:tabnew | terminal {program} {keyword}</pre></div>
<div class="old-help-para">			Special cases:
<div class="help-li" style=""> If <a href="options.html#'keywordprg'">'keywordprg'</a> begins with ":" it is invoked as
			  a Vim command with [count].
</div><div class="help-li" style=""> If <a href="options.html#'keywordprg'">'keywordprg'</a> is empty, <a href="helphelp.html#%3Ahelp">:help</a> is used.
</div><div class="help-li" style=""> When <a href="options.html#'keywordprg'">'keywordprg'</a> is equal to "man", a [count]
			  before "K" is inserted after the "man" command and
			  before the keyword.  For example, using "2K" while
			  the cursor is on "mkdir", results in:<pre>!man 2 mkdir</pre>
</div><div class="help-li" style=""> When <a href="options.html#'keywordprg'">'keywordprg'</a> is equal to "man -s", a [count]
			  before "K" is inserted after the "-s".  If there is
			  no count, the "-s" is removed.
</div></div>
<div class="old-help-para">							<a name="v_K"></a><code class="help-tag-right">v_K</code>
<code>{Visual}</code>K		Like "K", but use the visually highlighted text for
			the keyword.  Only works when the highlighted text is
			not more than one line.</div>
<div class="old-help-para">							<a name="gO"></a><code class="help-tag-right">gO</code>
gO			Show a filetype-specific, navigable "outline" of the
			current buffer. For example, in a <a href="helphelp.html#help">help</a> buffer this
			shows the table of contents.</div>
<div class="old-help-para">			Currently works in <a href="helphelp.html#help">help</a> and <a href="filetype.html#%3AMan">:Man</a> buffers.</div>
<div class="old-help-para">[N]gs							<a name="gs"></a><code class="help-tag-right">gs</code> <a name="%3Asl"></a><code class="help-tag">:sl</code> <a name="%3Asleep"></a><code class="help-tag">:sleep</code>
:[N]sl[eep] [N][m]	Do nothing for [N] seconds, or [N] milliseconds if [m]
			was given.  "gs" always uses seconds.
			Default is one second.<pre>:sleep             "sleep for one second
:5sleep             "sleep for five seconds
:sleep 100m     "sleep for 100 milliseconds
10gs             "sleep for ten seconds</pre></div>
<div class="old-help-para">			Can be interrupted with <code>CTRL-C</code>.
			"gs" stands for "goto sleep".
			While sleeping the cursor is positioned in the text,
			if at a visible position.
			Queued messages are processed during the sleep.</div>
<div class="old-help-para">							<a name="%3Asl%21"></a><code class="help-tag-right">:sl!</code> <a name="%3Asleep%21"></a><code class="help-tag">:sleep!</code>
:[N]sl[eep]! [N][m]	Same as above. Unlike Vim, it does not hide the
			cursor. <a href="vim_diff.html#vim-differences">vim-differences</a></div>
<div class="old-help-para"><h2 class="help-heading">2. Using Vim like less or more<span class="help-heading-tags">					<a name="less"></a><span class="help-tag">less</span></span></h2></div>
<div class="old-help-para">If you use the less or more program to view a file, you don't get syntax
highlighting.  Thus you would like to use Vim instead.  You can do this by
using the shell script "$VIMRUNTIME/macros/less.sh".</div>
<div class="old-help-para">This shell script uses the Vim script "$VIMRUNTIME/macros/less.vim".  It sets
up mappings to simulate the commands that less supports.  Otherwise, you can
still use the Vim commands.</div>
<div class="old-help-para">This isn't perfect.  For example, when viewing a short file Vim will still use
the whole screen.  But it works well enough for most uses, and you get syntax
highlighting.</div>
<div class="old-help-para">The "h" key will give you a short overview of the available commands.</div>
<div class="old-help-para">If you want to set options differently when using less, define the
LessInitFunc in your vimrc, for example:<pre>func LessInitFunc()
  set nocursorcolumn nocursorline
endfunc</pre></div>

  
  