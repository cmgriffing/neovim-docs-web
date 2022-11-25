---
title:  Autocmd
layout: ../../layouts/MainLayout.astro
---

  <a name="autocmd.txt"></a><a name="autocmd"></a><h1> Autocmd</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/autocmd.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Automatic commands <a name="autocommand"></a><code class="help-tag">autocommand</code></div>
<div class="old-help-para">For a basic explanation, see section <a href="usr_40.html#40.3">40.3</a> in the user manual.</div>
<div class="old-help-para"><h2 class="help-heading">1. Introduction<span class="help-heading-tags">						<a name="autocmd-intro"></a><span class="help-tag">autocmd-intro</span></span></h2></div>
<div class="old-help-para">You can specify commands to be executed automatically when reading or writing
a file, when entering or leaving a buffer or window, and when exiting Vim.
For example, you can create an autocommand to set the <a href="options.html#'cindent'">'cindent'</a> option for
files matching.c.  You can also use autocommands to implement advanced
features, such as editing compressed files (see <a href="autocmd.html#gzip-example">gzip-example</a>).  The usual
place to put autocommands is in your vimrc file.</div>
<div class="old-help-para">				<a name="E203"></a><code class="help-tag-right">E203</code> <a name="E204"></a><code class="help-tag">E204</code> <a name="E143"></a><code class="help-tag">E143</code> <a name="E855"></a><code class="help-tag">E855</code> <a name="E937"></a><code class="help-tag">E937</code> <a name="E952"></a><code class="help-tag">E952</code>
WARNING: Using autocommands is very powerful, and may lead to unexpected side
effects.  Be careful not to destroy your text.
<div class="help-li" style=""> It's a good idea to do some testing on an expendable copy of a file first.
  For example: If you use autocommands to decompress a file when starting to
  edit it, make sure that the autocommands for compressing when writing work
  correctly.
</div><div class="help-li" style=""> Be prepared for an error halfway through (e.g., disk full).  Vim will mostly
  be able to undo the changes to the buffer, but you may have to clean up the
  changes to other files by hand (e.g., compress a file that has been
  decompressed).
</div><div class="help-li" style=""> If the BufRead* events allow you to edit a compressed file, the FileRead*
  events should do the same (this makes recovery possible in some rare cases).
  It's a good idea to use the same autocommands for the File* and Buf* events
  when possible.
</div></div>
<div class="old-help-para"><h2 class="help-heading">2. Defining autocommands<span class="help-heading-tags">				<a name="autocmd-define"></a><span class="help-tag">autocmd-define</span></span></h2></div>
<div class="old-help-para">							<a name="%3Aau"></a><code class="help-tag-right">:au</code> <a name="%3Aautocmd"></a><code class="help-tag">:autocmd</code>
:au[tocmd] [group] <code>{event}</code> <code>{aupat}</code> [++once] [++nested] <code>{cmd}</code>
			Add <code>{cmd}</code> to the list of commands that Vim will
			execute automatically on <code>{event}</code> for a file matching
			<code>{aupat}</code> <a href="autocmd.html#autocmd-pattern">autocmd-pattern</a>.
			Note: A quote character is seen as argument to the
			:autocmd and won't start a comment.
			Nvim always adds <code>{cmd}</code> after existing autocommands so
			they execute in the order in which they were defined.
			See <a href="autocmd.html#autocmd-nested">autocmd-nested</a> for [++nested].
							<a name="autocmd-once"></a><code class="help-tag-right">autocmd-once</code>
			If [++once] is supplied the command is executed once,
			then removed ("one shot").</div>
<div class="old-help-para">The special pattern <code>&lt;buffer&gt;</code> or &lt;buffer=N&gt; defines a buffer-local autocommand.
See <a href="autocmd.html#autocmd-buflocal">autocmd-buflocal</a>.</div>
<div class="old-help-para">Note: The ":autocmd" command can only be followed by another command when the
"|" appears where the pattern is expected.  This works:<pre>:augroup mine | au! BufRead | augroup END</pre>
But this sees "augroup" as part of the defined command:<pre>:augroup mine | au! BufRead * | augroup END
:augroup mine | au BufRead * set tw=70 | augroup END</pre>
Instead you can put the group name into the command:<pre>:au! mine BufRead *
:au mine BufRead * set tw=70</pre>
Or use <code>:execute</code>:<pre>:augroup mine | exe "au! BufRead *" | augroup END
:augroup mine | exe "au BufRead * set tw=70" | augroup END</pre></div>
<div class="old-help-para">							<a name="autocmd-expand"></a><code class="help-tag-right">autocmd-expand</code>
Note that special characters (e.g., "%", "&lt;cword&gt;") in the ":autocmd"
arguments are not expanded when the autocommand is defined.  These will be
expanded when the Event is recognized, and the <code>{cmd}</code> is executed.  The only
exception is that "&lt;sfile&gt;" is expanded when the autocmd is defined.  Example:
<pre>:au BufNewFile,BufRead *.html so &lt;sfile&gt;:h/html.vim</pre>
Here Vim expands <code>&lt;sfile&gt;</code> to the name of the file containing this line.</div>
<div class="old-help-para"><code>:autocmd</code> adds to the list of autocommands regardless of whether they are
already present.  When your .vimrc file is sourced twice, the autocommands
will appear twice.  To avoid this, define your autocommands in a group, so
that you can easily clear them:<pre>augroup vimrc
  " Remove all vimrc autocommands
  autocmd!
  au BufNewFile,BufRead *.html so &lt;sfile&gt;:h/html.vim
augroup END</pre>
If you don't want to remove all autocommands, you can instead use a variable
to ensure that Vim includes the autocommands only once:<pre>:if !exists("autocommands_loaded")
:  let autocommands_loaded = 1
:  au ...
:endif</pre>
When the [group] argument is not given, Vim uses the current group (as defined
with ":augroup"); otherwise, Vim uses the group defined with [group].  Note
that [group] must have been defined before.  You cannot define a new group
with ":au group ..."; use ":augroup" for that.</div>
<div class="old-help-para">While testing autocommands, you might find the <a href="options.html#'verbose'">'verbose'</a> option to be useful:<pre>:set verbose=9</pre>
This setting makes Vim echo the autocommands as it executes them.</div>
<div class="old-help-para">When defining an autocommand in a script, it will be able to call functions
local to the script and use mappings local to the script.  When the event is
triggered and the command executed, it will run in the context of the script
it was defined in.  This matters if <a href="map.html#%3CSID%3E">&lt;SID&gt;</a> is used in a command.</div>
<div class="old-help-para">When executing the commands, the message from one command overwrites a
previous message.  This is different from when executing the commands
manually.  Mostly the screen will not scroll up, thus there is no hit-enter
prompt.  When one command outputs two messages this can happen anyway.</div>
<div class="old-help-para"><h2 class="help-heading">3. Removing autocommands<span class="help-heading-tags">				<a name="autocmd-remove"></a><span class="help-tag">autocmd-remove</span></span></h2></div>
<div class="old-help-para">:au[tocmd]! [group] <code>{event}</code> <code>{aupat}</code> [++once] [++nested] <code>{cmd}</code>
			Remove all autocommands associated with <code>{event}</code> and
			<code>{aupat}</code>, and add the command <code>{cmd}</code>.
			See <a href="autocmd.html#autocmd-once">autocmd-once</a> for [++once].
			See <a href="autocmd.html#autocmd-nested">autocmd-nested</a> for [++nested].</div>
<div class="old-help-para">:au[tocmd]! [group] <code>{event}</code> <code>{aupat}</code>
			Remove all autocommands associated with <code>{event}</code> and
			<code>{aupat}</code>.</div>
<div class="old-help-para">:au[tocmd]! [group] * <code>{aupat}</code>
			Remove all autocommands associated with <code>{aupat}</code> for
			all events.</div>
<div class="old-help-para">:au[tocmd]! [group] <code>{event}</code>
			Remove ALL autocommands for <code>{event}</code>.
			Warning: You should not do this without a group for
			<a href="autocmd.html#BufRead">BufRead</a> and other common events, it can break
			plugins, syntax highlighting, etc.</div>
<div class="old-help-para">:au[tocmd]! [group]	Remove ALL autocommands.
			Note: a quote will be seen as argument to the :autocmd
			and won't start a comment.
			Warning: You should normally not do this without a
			group, it breaks plugins, syntax highlighting, etc.</div>
<div class="old-help-para">When the [group] argument is not given, Vim uses the current group (as defined
with ":augroup"); otherwise, Vim uses the group defined with [group].</div>
<div class="old-help-para"><h2 class="help-heading">4. Listing autocommands<span class="help-heading-tags">					<a name="autocmd-list"></a><span class="help-tag">autocmd-list</span></span></h2></div>
<div class="old-help-para">:au[tocmd] [group] <code>{event}</code> <code>{aupat}</code>
			Show the autocommands associated with <code>{event}</code> and
			<code>{aupat}</code>.</div>
<div class="old-help-para">:au[tocmd] [group] * <code>{aupat}</code>
			Show the autocommands associated with <code>{aupat}</code> for all
			events.</div>
<div class="old-help-para">:au[tocmd] [group] <code>{event}</code>
			Show all autocommands for <code>{event}</code>.</div>
<div class="old-help-para">:au[tocmd] [group]	Show all autocommands.</div>
<div class="old-help-para">If you provide the [group] argument, Vim lists only the autocommands for
[group]; otherwise, Vim lists the autocommands for ALL groups.  Note that this
argument behavior differs from that for defining and removing autocommands.</div>
<div class="old-help-para">In order to list buffer-local autocommands, use a pattern in the form <code>&lt;buffer&gt;</code>
or &lt;buffer=N&gt;.  See <a href="autocmd.html#autocmd-buflocal">autocmd-buflocal</a>.</div>
<div class="old-help-para">							<a name="%3Aautocmd-verbose"></a><code class="help-tag-right">:autocmd-verbose</code>
When <a href="options.html#'verbose'">'verbose'</a> is non-zero, listing an autocommand will also display where it
was last defined. Example:<pre>:verbose autocmd BufEnter
FileExplorer  BufEnter
    *          call s:LocalBrowse(expand("&lt;amatch&gt;"))
        Last set from /usr/share/vim/vim-7.0/plugin/NetrwPlugin.vim</pre></div>
<div class="old-help-para">See <a href="various.html#%3Averbose-cmd">:verbose-cmd</a> for more information.</div>
<div class="old-help-para"><h2 class="help-heading">5. Events<span class="help-heading-tags">					<a name="autocmd-events"></a><span class="help-tag">autocmd-events</span> <a name="E215"></a><span class="help-tag">E215</span> <a name="E216"></a><span class="help-tag">E216</span></span></h2></div>
<div class="old-help-para">You can specify a comma-separated list of event names.  No white space can be
used in this list.  The command applies to all the events in the list.</div>
<div class="old-help-para">For READING FILES there are four kinds of events possible:
	BufNewFile			starting to edit a non-existent file
	BufReadPre	BufReadPost	starting to edit an existing file
	FilterReadPre	FilterReadPost	read the temp file with filter output
	FileReadPre	FileReadPost	any other file read
Vim uses only one of these four kinds when reading a file.  The "Pre" and
"Post" events are both triggered, before and after reading the file.</div>
<div class="old-help-para">Note that the autocommands for theReadPre events and all the Filter events
are not allowed to change the current buffer (you will get an error message if
this happens).  This is to prevent the file to be read into the wrong buffer.</div>
<div class="old-help-para">Note that the <a href="options.html#'modified'">'modified'</a> flag is reset AFTER executing the BufReadPost
and BufNewFile autocommands.  But when the <a href="options.html#'modified'">'modified'</a> option was set by the
autocommands, this doesn't happen.</div>
<div class="old-help-para">You can use the <a href="options.html#'eventignore'">'eventignore'</a> option to ignore a number of events or all
events.</div>
<div class="old-help-para">							<a name="events"></a><code class="help-tag-right">events</code> <a name="%7Bevent%7D"></a><code class="help-tag">{event}</code>
Nvim recognizes the following events.  Names are case-insensitive.</div>
<div class="old-help-para">							<a name="BufAdd"></a><code class="help-tag-right">BufAdd</code>
BufAdd				Just after creating a new buffer which is
				added to the buffer list, or adding a buffer
				to the buffer list, a buffer in the buffer
				list was renamed.
				Not triggered for the initial buffers created
				during startup.
				Before <a href="autocmd.html#BufEnter">BufEnter</a>.
				NOTE: Current buffer "%" may be different from
				the buffer being created "&lt;afile&gt;".
							<a name="BufDelete"></a><code class="help-tag-right">BufDelete</code>
BufDelete			Before deleting a buffer from the buffer list.
				The BufUnload may be called first (if the
				buffer was loaded).
				Also used just before a buffer in the buffer
				list is renamed.
				NOTE: Current buffer "%" may be different from
				the buffer being deleted "&lt;afile&gt;" and "&lt;abuf&gt;".
				Do not change to another buffer.
							<a name="BufEnter"></a><code class="help-tag-right">BufEnter</code>
BufEnter			After entering a buffer.  Useful for setting
				options for a file type.  Also executed when
				starting to edit a buffer.
				After <a href="autocmd.html#BufAdd">BufAdd</a>.
				After <a href="autocmd.html#BufReadPost">BufReadPost</a>.
							<a name="BufFilePost"></a><code class="help-tag-right">BufFilePost</code>
BufFilePost			After changing the name of the current buffer
				with the ":file" or ":saveas" command.
							<a name="BufFilePre"></a><code class="help-tag-right">BufFilePre</code>
BufFilePre			Before changing the name of the current buffer
				with the ":file" or ":saveas" command.
							<a name="BufHidden"></a><code class="help-tag-right">BufHidden</code>
BufHidden			Before a buffer becomes hidden: when there are
				no longer windows that show the buffer, but
				the buffer is not unloaded or deleted.</div>
<div class="old-help-para">				Not used for ":qa" or ":q" when exiting Vim.
				NOTE: current buffer "%" may be different from
				the buffer being unloaded "&lt;afile&gt;".
							<a name="BufLeave"></a><code class="help-tag-right">BufLeave</code>
BufLeave			Before leaving to another buffer.  Also when
				leaving or closing the current window and the
				new current window is not for the same buffer.</div>
<div class="old-help-para">				Not used for ":qa" or ":q" when exiting Vim.
							<a name="BufModifiedSet"></a><code class="help-tag-right">BufModifiedSet</code>
BufModifiedSet			After the <code>'modified'</code> value of a buffer has
				been changed.
							<a name="BufNew"></a><code class="help-tag-right">BufNew</code>
BufNew				Just after creating a new buffer.  Also used
				just after a buffer has been renamed.  When
				the buffer is added to the buffer list BufAdd
				will be triggered too.
				NOTE: Current buffer "%" may be different from
				the buffer being created "&lt;afile&gt;".
							<a name="BufNewFile"></a><code class="help-tag-right">BufNewFile</code>
BufNewFile			When starting to edit a file that doesn't
				exist.  Can be used to read in a skeleton
				file.
						<a name="BufRead"></a><code class="help-tag-right">BufRead</code> <a name="BufReadPost"></a><code class="help-tag">BufReadPost</code>
BufRead or BufReadPost		When starting to edit a new buffer, after
				reading the file into the buffer, before
				processing modelines.  See <a href="autocmd.html#BufWinEnter">BufWinEnter</a> to do
				something after processing modelines.
				Also triggered:
<div class="help-li" style=""> when writing an unnamed buffer in a way that
				  the buffer gets a name
</div><div class="help-li" style=""> after successfully recovering a file
</div><div class="help-li" style=""> for the "filetypedetect" group when
				  executing ":filetype detect"
				Not triggered:
</div><div class="help-li" style=""> for the <code>:read file</code> command
</div><div class="help-li" style=""> when the file doesn't exist
							<a name="BufReadCmd"></a><code class="help-tag-right">BufReadCmd</code>
BufReadCmd			Before starting to edit a new buffer.  Should
				read the file into the buffer. <a href="autocmd.html#Cmd-event">Cmd-event</a>
						<a name="BufReadPre"></a><code class="help-tag-right">BufReadPre</code> <a name="E200"></a><code class="help-tag">E200</code> <a name="E201"></a><code class="help-tag">E201</code>
BufReadPre			When starting to edit a new buffer, before
				reading the file into the buffer.  Not used
				if the file doesn't exist.
							<a name="BufUnload"></a><code class="help-tag-right">BufUnload</code>
BufUnload			Before unloading a buffer, when the text in
				the buffer is going to be freed.
				After BufWritePost.
				Before BufDelete.
				Triggers for all loaded buffers when Vim is
				going to exit.
				NOTE: Current buffer "%" may be different from
				the buffer being unloaded "&lt;afile&gt;".
				Do not switch buffers or windows!
				Not triggered when exiting and v:dying is 2 or
				more.
							<a name="BufWinEnter"></a><code class="help-tag-right">BufWinEnter</code>
BufWinEnter			After a buffer is displayed in a window.  This
				may be when the buffer is loaded (after
				processing modelines) or when a hidden buffer
				is displayed (and is no longer hidden).
</div></div>
<div class="old-help-para">				Not triggered for <a href="windows.html#%3Asplit">:split</a> without arguments,
				since the buffer does not change, or :split
				with a file already open in a window.
				Triggered for ":split" with the name of the
				current buffer, since it reloads that buffer.
							<a name="BufWinLeave"></a><code class="help-tag-right">BufWinLeave</code>
BufWinLeave			Before a buffer is removed from a window.
				Not when it's still visible in another window.
				Also triggered when exiting.
				Before BufUnload, BufHidden.
				NOTE: Current buffer "%" may be different from
				the buffer being unloaded "&lt;afile&gt;".
				Not triggered when exiting and v:dying is 2 or
				more.
							<a name="BufWipeout"></a><code class="help-tag-right">BufWipeout</code>
BufWipeout			Before completely deleting a buffer.  The
				BufUnload and BufDelete events may be called
				first (if the buffer was loaded and was in the
				buffer list).  Also used just before a buffer
				is renamed (also when it's not in the buffer
				list).
				NOTE: Current buffer "%" may be different from
				the buffer being deleted "&lt;afile&gt;".
				Do not change to another buffer.
						<a name="BufWrite"></a><code class="help-tag-right">BufWrite</code> <a name="BufWritePre"></a><code class="help-tag">BufWritePre</code>
BufWrite or BufWritePre		Before writing the whole buffer to a file.
							<a name="BufWriteCmd"></a><code class="help-tag-right">BufWriteCmd</code>
BufWriteCmd			Before writing the whole buffer to a file.
				Should do the writing of the file and reset
				<a href="options.html#'modified'">'modified'</a> if successful, unless '+' is in
				<a href="options.html#'cpo'">'cpo'</a> and writing to another file <a href="options.html#cpo-%2B">cpo-+</a>.
				The buffer contents should not be changed.
				When the command resets <a href="options.html#'modified'">'modified'</a> the undo
				information is adjusted to mark older undo
				states as <a href="options.html#'modified'">'modified'</a>, like <a href="editing.html#%3Awrite">:write</a> does.
				<a href="autocmd.html#Cmd-event">Cmd-event</a>
							<a name="BufWritePost"></a><code class="help-tag-right">BufWritePost</code>
BufWritePost			After writing the whole buffer to a file
				(should undo the commands for BufWritePre).
							<a name="ChanInfo"></a><code class="help-tag-right">ChanInfo</code>
ChanInfo			State of channel changed, for instance the
				client of a RPC channel described itself.
				Sets these <a href="eval.html#v%3Aevent">v:event</a> keys:
				    info
				See <a href="api.html#nvim_get_chan_info()">nvim_get_chan_info()</a> for the format of
				the info Dictionary.
							<a name="ChanOpen"></a><code class="help-tag-right">ChanOpen</code>
ChanOpen			Just after a channel was opened.
				Sets these <a href="eval.html#v%3Aevent">v:event</a> keys:
				    info
				See <a href="api.html#nvim_get_chan_info()">nvim_get_chan_info()</a> for the format of
				the info Dictionary.
							<a name="CmdUndefined"></a><code class="help-tag-right">CmdUndefined</code>
CmdUndefined			When a user command is used but it isn't
				defined.  Useful for defining a command only
				when it's used.  The pattern is matched
				against the command name.  Both <code>&lt;amatch&gt;</code> and
				<code>&lt;afile&gt;</code> expand to the command name.
				NOTE: Autocompletion won't work until the
				command is defined.  An alternative is to
				always define the user command and have it
				invoke an autoloaded function.  See <a href="userfunc.html#autoload">autoload</a>.
							<a name="CmdlineChanged"></a><code class="help-tag-right">CmdlineChanged</code>
CmdlineChanged			After a change was made to the text inside
				command line.  Be careful not to mess up the
				command line, it may cause Vim to lock up.
				<code>&lt;afile&gt;</code> expands to the <a href="cmdline.html#cmdline-char">cmdline-char</a>.
							<a name="CmdlineEnter"></a><code class="help-tag-right">CmdlineEnter</code>
CmdlineEnter			After entering the command-line (including
				non-interactive use of ":" in a mapping: use
				<a href="map.html#%3CCmd%3E">&lt;Cmd&gt;</a> instead to avoid this).
				<code>&lt;afile&gt;</code> expands to the <a href="cmdline.html#cmdline-char">cmdline-char</a>.
				Sets these <a href="eval.html#v%3Aevent">v:event</a> keys:
				    cmdlevel
				    cmdtype
							<a name="CmdlineLeave"></a><code class="help-tag-right">CmdlineLeave</code>
CmdlineLeave			Before leaving the command-line (including
				non-interactive use of ":" in a mapping: use
				<a href="map.html#%3CCmd%3E">&lt;Cmd&gt;</a> instead to avoid this).
				<code>&lt;afile&gt;</code> expands to the <a href="cmdline.html#cmdline-char">cmdline-char</a>.
				Sets these <a href="eval.html#v%3Aevent">v:event</a> keys:
				    abort (mutable)
				    cmdlevel
				    cmdtype
				Note: <code>abort</code> can only be changed from false
				to true: cannot execute an already aborted
				cmdline by changing it to false.
							<a name="CmdwinEnter"></a><code class="help-tag-right">CmdwinEnter</code>
CmdwinEnter			After entering the command-line window.
				Useful for setting options specifically for
				this special type of window.
				<code>&lt;afile&gt;</code> expands to a single character,
				indicating the type of command-line.
				<a href="cmdline.html#cmdwin-char">cmdwin-char</a>
							<a name="CmdwinLeave"></a><code class="help-tag-right">CmdwinLeave</code>
CmdwinLeave			Before leaving the command-line window.
				Useful to clean up any global setting done
				with CmdwinEnter.
				<code>&lt;afile&gt;</code> expands to a single character,
				indicating the type of command-line.
				<a href="cmdline.html#cmdwin-char">cmdwin-char</a>
							<a name="ColorScheme"></a><code class="help-tag-right">ColorScheme</code>
ColorScheme			After loading a color scheme. <a href="syntax.html#%3Acolorscheme">:colorscheme</a>
				Not triggered if the color scheme is not
				found.
				The pattern is matched against the
				colorscheme name. <code>&lt;afile&gt;</code> can be used for the
				name of the actual file where this option was
				set, and <code>&lt;amatch&gt;</code> for the new colorscheme
				name.</div>
<div class="old-help-para">							<a name="ColorSchemePre"></a><code class="help-tag-right">ColorSchemePre</code>
ColorSchemePre			Before loading a color scheme. <a href="syntax.html#%3Acolorscheme">:colorscheme</a>
				Useful to setup removing things added by a
				color scheme, before another one is loaded.</div>
<div class="old-help-para">CompleteChanged 					<a name="CompleteChanged"></a><code class="help-tag-right">CompleteChanged</code>
				After each time the Insert mode completion
				menu changed.  Not fired on popup menu hide,
				use <a href="autocmd.html#CompleteDonePre">CompleteDonePre</a> or <a href="autocmd.html#CompleteDone">CompleteDone</a> for
				that.</div>
<div class="old-help-para">				Sets these <a href="eval.html#v%3Aevent">v:event</a> keys:
				    completed_item	See <a href="insert.html#complete-items">complete-items</a>.
				    height		nr of items visible
				    width		screen cells
				    row			top screen row
				    col			leftmost screen column
				    size		total nr of items
				    scrollbar		TRUE if visible</div>
<div class="old-help-para">				Non-recursive (event cannot trigger itself).
				Cannot change the text. <a href="eval.html#textlock">textlock</a></div>
<div class="old-help-para">				The size and position of the popup are also
				available by calling <a href="builtin.html#pum_getpos()">pum_getpos()</a>.</div>
<div class="old-help-para">							<a name="CompleteDonePre"></a><code class="help-tag-right">CompleteDonePre</code>
CompleteDonePre			After Insert mode completion is done.  Either
				when something was completed or abandoning
				completion. <a href="insert.html#ins-completion">ins-completion</a>
				<a href="builtin.html#complete_info()">complete_info()</a> can be used, the info is
				cleared after triggering CompleteDonePre.
				The <a href="eval.html#v%3Acompleted_item">v:completed_item</a> variable contains
				information about the completed item.</div>
<div class="old-help-para">							<a name="CompleteDone"></a><code class="help-tag-right">CompleteDone</code>
CompleteDone			After Insert mode completion is done.  Either
				when something was completed or abandoning
				completion. <a href="insert.html#ins-completion">ins-completion</a>
				<a href="builtin.html#complete_info()">complete_info()</a> cannot be used, the info is
				cleared before triggering CompleteDone.  Use
				CompleteDonePre if you need it.
				<a href="eval.html#v%3Acompleted_item">v:completed_item</a> gives the completed item.</div>
<div class="old-help-para">							<a name="CursorHold"></a><code class="help-tag-right">CursorHold</code>
CursorHold			When the user doesn't press a key for the time
				specified with <a href="options.html#'updatetime'">'updatetime'</a>.  Not triggered
				until the user has pressed a key (i.e. doesn't
				fire every <a href="options.html#'updatetime'">'updatetime'</a> ms if you leave Vim to
				make some coffee. :)  See <a href="windows.html#CursorHold-example">CursorHold-example</a>
				for previewing tags.
				This event is only triggered in Normal mode.
				It is not triggered when waiting for a command
				argument to be typed, or a movement after an
				operator.
				While recording the CursorHold event is not
				triggered. <a href="repeat.html#q">q</a>
							<a name="%3CCursorHold%3E"></a><code class="help-tag-right">&lt;CursorHold&gt;</code>
				Internally the autocommand is triggered by the
				<code>&lt;CursorHold&gt;</code> key. In an expression mapping
				<a href="builtin.html#getchar()">getchar()</a> may see this character.</div>
<div class="old-help-para">				Note: Interactive commands cannot be used for
				this event.  There is no hit-enter prompt,
				the screen is updated directly (when needed).
				Note: In the future there will probably be
				another option to set the time.
				Hint: to force an update of the status lines
				use:<pre>:let &amp;ro = &amp;ro</pre></div>
<div class="old-help-para">							<a name="CursorHoldI"></a><code class="help-tag-right">CursorHoldI</code>
CursorHoldI			Like CursorHold, but in Insert mode. Not
				triggered when waiting for another key, e.g.
				after <code>CTRL-V</code>, and not in <code>CTRL-X</code> mode
				<a href="insert.html#insert_expand">insert_expand</a>.</div>
<div class="old-help-para">							<a name="CursorMoved"></a><code class="help-tag-right">CursorMoved</code>
CursorMoved			After the cursor was moved in Normal or Visual
				mode or to another window.  Also when the text
				of the cursor line has been changed, e.g. with
				"x", "rx" or "p".
				Not always triggered when there is typeahead,
				while executing commands in a script file, or
				when an operator is pending. Always triggered
				when moving to another window.
				For an example see <a href="tips.html#match-parens">match-parens</a>.
				Note: Cannot be skipped with <a href="autocmd.html#%3Anoautocmd">:noautocmd</a>.
				Careful: This is triggered very often, don't
				do anything that the user does not expect or
				that is slow.
							<a name="CursorMovedI"></a><code class="help-tag-right">CursorMovedI</code>
CursorMovedI			After the cursor was moved in Insert mode.
				Not triggered when the popup menu is visible.
				Otherwise the same as CursorMoved.
							<a name="DiffUpdated"></a><code class="help-tag-right">DiffUpdated</code>
DiffUpdated			After diffs have been updated.  Depending on
				what kind of diff is being used (internal or
				external) this can be triggered on every
				change or when doing <a href="diff.html#%3Adiffupdate">:diffupdate</a>.
							<a name="DirChanged"></a><code class="help-tag-right">DirChanged</code>
DirChanged			After the <a href="editing.html#current-directory">current-directory</a> was changed.
				The pattern can be:
					"window"  to trigger on <code>:lcd</code>
					"tabpage" to trigger on <code>:tcd</code>
					"global"  to trigger on <code>:cd</code>
					"auto"    to trigger on <a href="options.html#'autochdir'">'autochdir'</a>.
				Sets these <a href="eval.html#v%3Aevent">v:event</a> keys:
				    cwd:            current working directory
				    scope:          "global", "tabpage", "window"
				    changed_window: v:true if we fired the event
				                    switching window (or tab)
				<code>&lt;afile&gt;</code> is set to the new directory name.
				Non-recursive (event cannot trigger itself).
							<a name="DirChangedPre"></a><code class="help-tag-right">DirChangedPre</code>
DirChangedPre			When the <a href="editing.html#current-directory">current-directory</a> is going to be
				changed, as with <a href="autocmd.html#DirChanged">DirChanged</a>.
				The pattern is like with <a href="autocmd.html#DirChanged">DirChanged</a>.
				Sets these <a href="eval.html#v%3Aevent">v:event</a> keys:
				    directory:      new working directory
				    scope:          "global", "tabpage", "window"
				    changed_window: v:true if we fired the event
				                    switching window (or tab)
				<code>&lt;afile&gt;</code> is set to the new directory name.
				Non-recursive (event cannot trigger itself).
							<a name="ExitPre"></a><code class="help-tag-right">ExitPre</code>
ExitPre				When using <code>:quit</code>, <code>:wq</code> in a way it makes
				Vim exit, or using <code>:qall</code>, just after
				<a href="autocmd.html#QuitPre">QuitPre</a>.  Can be used to close any
				non-essential window.  Exiting may still be
				cancelled if there is a modified buffer that
				isn't automatically saved, use <a href="autocmd.html#VimLeavePre">VimLeavePre</a>
				for really exiting.
				See also <a href="autocmd.html#QuitPre">QuitPre</a>, <a href="autocmd.html#WinClosed">WinClosed</a>.
							<a name="FileAppendCmd"></a><code class="help-tag-right">FileAppendCmd</code>
FileAppendCmd			Before appending to a file.  Should do the
				appending to the file.  Use the '[ and ']
				marks for the range of lines. <a href="autocmd.html#Cmd-event">Cmd-event</a>
							<a name="FileAppendPost"></a><code class="help-tag-right">FileAppendPost</code>
FileAppendPost			After appending to a file.
							<a name="FileAppendPre"></a><code class="help-tag-right">FileAppendPre</code>
FileAppendPre			Before appending to a file.  Use the '[ and ']
				marks for the range of lines.
							<a name="FileChangedRO"></a><code class="help-tag-right">FileChangedRO</code>
FileChangedRO			Before making the first change to a read-only
				file.  Can be used to checkout the file from
				a source control system.  Not triggered when
				the change was caused by an autocommand.
				Triggered when making the first change in
				a buffer or the first change after <a href="options.html#'readonly'">'readonly'</a>
				was set, just before the change is applied to
				the text.
				WARNING: If the autocommand moves the cursor
				the effect of the change is undefined.
							<a name="E788"></a><code class="help-tag-right">E788</code>
				Cannot switch buffers.  You can reload the
				buffer but not edit another one.
							<a name="E881"></a><code class="help-tag-right">E881</code>
				If the number of lines changes saving for undo
				may fail and the change will be aborted.
							<a name="FileChangedShell"></a><code class="help-tag-right">FileChangedShell</code>
FileChangedShell		When Vim notices that the modification time of
				a file has changed since editing started.
				Also when the file attributes of the file
				change or when the size of the file changes.
				<a href="editing.html#timestamp">timestamp</a>
				Triggered for each changed file, after:
<div class="help-li" style=""> executing a shell command
</div><div class="help-li" style=""> <a href="editing.html#%3Achecktime">:checktime</a>
</div><div class="help-li" style=""> <a href="autocmd.html#FocusGained">FocusGained</a>
</div></div>
<div class="old-help-para">				Not used when <a href="options.html#'autoread'">'autoread'</a> is set and the buffer
				was not changed.  If a FileChangedShell
				autocommand exists the warning message and
				prompt is not given.
				<a href="eval.html#v%3Afcs_reason">v:fcs_reason</a> indicates what happened. Set
				<a href="eval.html#v%3Afcs_choice">v:fcs_choice</a> to control what happens next.
				NOTE: Current buffer "%" may be different from
				the buffer that was changed "&lt;afile&gt;".
							<a name="E246"></a><code class="help-tag-right">E246</code> <a name="E811"></a><code class="help-tag">E811</code>
				Cannot switch, jump to or delete buffers.
				Non-recursive (event cannot trigger itself).
							<a name="FileChangedShellPost"></a><code class="help-tag-right">FileChangedShellPost</code>
FileChangedShellPost		After handling a file that was changed outside
				of Vim.  Can be used to update the statusline.
							<a name="FileReadCmd"></a><code class="help-tag-right">FileReadCmd</code>
FileReadCmd			Before reading a file with a ":read" command.
				Should do the reading of the file. <a href="autocmd.html#Cmd-event">Cmd-event</a>
							<a name="FileReadPost"></a><code class="help-tag-right">FileReadPost</code>
FileReadPost			After reading a file with a ":read" command.
				Note that Vim sets the '[ and '] marks to the
				first and last line of the read.  This can be
				used to operate on the lines just read.
							<a name="FileReadPre"></a><code class="help-tag-right">FileReadPre</code>
FileReadPre			Before reading a file with a ":read" command.
							<a name="FileType"></a><code class="help-tag-right">FileType</code>
FileType			When the <a href="options.html#'filetype'">'filetype'</a> option has been set.  The
				pattern is matched against the filetype.
				<code>&lt;afile&gt;</code> is the name of the file where this
				option was set.  <code>&lt;amatch&gt;</code> is the new value of
				<a href="options.html#'filetype'">'filetype'</a>.
				Cannot switch windows or buffers.
				See <a href="filetype.html#filetypes">filetypes</a>.
							<a name="FileWriteCmd"></a><code class="help-tag-right">FileWriteCmd</code>
FileWriteCmd			Before writing to a file, when not writing the
				whole buffer.  Should do the writing to the
				file.  Should not change the buffer.  Use the
				'[ and '] marks for the range of lines.
				<a href="autocmd.html#Cmd-event">Cmd-event</a>
							<a name="FileWritePost"></a><code class="help-tag-right">FileWritePost</code>
FileWritePost			After writing to a file, when not writing the
				whole buffer.
							<a name="FileWritePre"></a><code class="help-tag-right">FileWritePre</code>
FileWritePre			Before writing to a file, when not writing the
				whole buffer.  Use the '[ and '] marks for the
				range of lines.
							<a name="FilterReadPost"></a><code class="help-tag-right">FilterReadPost</code>
FilterReadPost			After reading a file from a filter command.
				Vim checks the pattern against the name of
				the current buffer as with FilterReadPre.
				Not triggered when <a href="options.html#'shelltemp'">'shelltemp'</a> is off.
							<a name="FilterReadPre"></a><code class="help-tag-right">FilterReadPre</code> <a name="E135"></a><code class="help-tag">E135</code>
FilterReadPre			Before reading a file from a filter command.
				Vim checks the pattern against the name of
				the current buffer, not the name of the
				temporary file that is the output of the
				filter command.
				Not triggered when <a href="options.html#'shelltemp'">'shelltemp'</a> is off.
							<a name="FilterWritePost"></a><code class="help-tag-right">FilterWritePost</code>
FilterWritePost			After writing a file for a filter command or
				making a diff with an external diff (see
				<a href="autocmd.html#DiffUpdated">DiffUpdated</a> for internal diff).
				Vim checks the pattern against the name of
				the current buffer as with FilterWritePre.
				Not triggered when <a href="options.html#'shelltemp'">'shelltemp'</a> is off.
							<a name="FilterWritePre"></a><code class="help-tag-right">FilterWritePre</code>
FilterWritePre			Before writing a file for a filter command or
				making a diff with an external diff.
				Vim checks the pattern against the name of
				the current buffer, not the name of the
				temporary file that is the output of the
				filter command.
				Not triggered when <a href="options.html#'shelltemp'">'shelltemp'</a> is off.
							<a name="FocusGained"></a><code class="help-tag-right">FocusGained</code>
FocusGained			Nvim got focus.
							<a name="FocusLost"></a><code class="help-tag-right">FocusLost</code>
FocusLost			Nvim lost focus.  Also (potentially) when
				a GUI dialog pops up.
							<a name="FuncUndefined"></a><code class="help-tag-right">FuncUndefined</code>
FuncUndefined			When a user function is used but it isn't
				defined.  Useful for defining a function only
				when it's used.  The pattern is matched
				against the function name.  Both <code>&lt;amatch&gt;</code> and
				<code>&lt;afile&gt;</code> are set to the name of the function.
				NOTE: When writing Vim scripts a better
				alternative is to use an autoloaded function.
				See <a href="userfunc.html#autoload-functions">autoload-functions</a>.
							<a name="UIEnter"></a><code class="help-tag-right">UIEnter</code>
UIEnter				After a UI connects via <a href="api.html#nvim_ui_attach()">nvim_ui_attach()</a>, or
				after builtin TUI is started, after <a href="autocmd.html#VimEnter">VimEnter</a>.
				Sets these <a href="eval.html#v%3Aevent">v:event</a> keys:
				    chan: 0 for builtin TUI
				          1 for <a href="starting.html#--embed">--embed</a>
				          <a href="channel.html#channel-id">channel-id</a> of the UI otherwise
							<a name="UILeave"></a><code class="help-tag-right">UILeave</code>
UILeave				After a UI disconnects from Nvim, or after
				builtin TUI is stopped, after <a href="autocmd.html#VimLeave">VimLeave</a>.
				Sets these <a href="eval.html#v%3Aevent">v:event</a> keys:
				    chan: 0 for builtin TUI
				          1 for <a href="starting.html#--embed">--embed</a>
				          <a href="channel.html#channel-id">channel-id</a> of the UI otherwise
							<a name="InsertChange"></a><code class="help-tag-right">InsertChange</code>
InsertChange			When typing <code>&lt;Insert&gt;</code> while in Insert or
				Replace mode.  The <a href="eval.html#v%3Ainsertmode">v:insertmode</a> variable
				indicates the new mode.
				Be careful not to move the cursor or do
				anything else that the user does not expect.
							<a name="InsertCharPre"></a><code class="help-tag-right">InsertCharPre</code>
InsertCharPre			When a character is typed in Insert mode,
				before inserting the char.
				The <a href="eval.html#v%3Achar">v:char</a> variable indicates the char typed
				and can be changed during the event to insert
				a different character.  When <a href="eval.html#v%3Achar">v:char</a> is set
				to more than one character this text is
				inserted literally.</div>
<div class="old-help-para">				Cannot change the text. <a href="eval.html#textlock">textlock</a>
				Not triggered when <a href="options.html#'paste'">'paste'</a> is set.
							<a name="InsertEnter"></a><code class="help-tag-right">InsertEnter</code>
InsertEnter			Just before starting Insert mode.  Also for
				Replace mode and Virtual Replace mode.  The
				<a href="eval.html#v%3Ainsertmode">v:insertmode</a> variable indicates the mode.
				Be careful not to do anything else that the
				user does not expect.
				The cursor is restored afterwards.  If you do
				not want that set <a href="eval.html#v%3Achar">v:char</a> to a non-empty
				string.
							<a name="InsertLeavePre"></a><code class="help-tag-right">InsertLeavePre</code>
InsertLeavePre			Just before leaving Insert mode.  Also when
				using <code>CTRL-O</code> <a href="insert.html#i_CTRL-O">i_CTRL-O</a>.  Be careful not to
				change mode or use <code>:normal</code>, it will likely
				cause trouble.
							<a name="InsertLeave"></a><code class="help-tag-right">InsertLeave</code>
InsertLeave			Just after leaving Insert mode.  Also when
				using <code>CTRL-O</code> <a href="insert.html#i_CTRL-O">i_CTRL-O</a>.  But not for <a href="insert.html#i_CTRL-C">i_CTRL-C</a>.
							<a name="MenuPopup"></a><code class="help-tag-right">MenuPopup</code>
MenuPopup			Just before showing the popup menu (under the
				right mouse button).  Useful for adjusting the
				menu for what is under the cursor or mouse
				pointer.
				The pattern is matched against one or two
				characters representing the mode:
					n	Normal
					v	Visual
					o	Operator-pending
					i	Insert
					c	Command line
					tl	Terminal
							<a name="ModeChanged"></a><code class="help-tag-right">ModeChanged</code>
ModeChanged			After changing the mode. The pattern is
				matched against <code>'old_mode:new_mode'</code>, for
				example match against <code>*:c</code> to simulate
				<a href="autocmd.html#CmdlineEnter">CmdlineEnter</a>.
				The following values of <a href="eval.html#v%3Aevent">v:event</a> are set:
					old_mode The mode before it changed.
					new_mode The new mode as also returned
						by <a href="builtin.html#mode()">mode()</a> called with a
						non-zero argument.
				When ModeChanged is triggered, old_mode will
				have the value of new_mode when the event was
				last triggered.
				This will be triggered on every minor mode
				change.
				Usage example to use relative line numbers
				when entering visual mode:<pre>:au ModeChanged [vV\x16]*:* let &amp;l:rnu = mode() =~# '^[vV\x16]'
:au ModeChanged *:[vV\x16]* let &amp;l:rnu = mode() =~# '^[vV\x16]'
:au WinEnter,WinLeave * let &amp;l:rnu = mode() =~# '^[vV\x16]'</pre></div>
<div class="old-help-para">							<a name="OptionSet"></a><code class="help-tag-right">OptionSet</code>
OptionSet			After setting an option (except during
				<a href="starting.html#startup">startup</a>).  The <a href="autocmd.html#autocmd-pattern">autocmd-pattern</a> is matched
				against the long option name.  <a href="cmdline.html#%3Camatch%3E">&lt;amatch&gt;</a>
				indicates what option has been set.</div>
<div class="old-help-para">				<a href="eval.html#v%3Aoption_type">v:option_type</a> indicates whether it's global
				or local scoped.
				<a href="eval.html#v%3Aoption_command">v:option_command</a> indicates what type of
				set/let command was used (follow the tag to
				see the table).
				<a href="eval.html#v%3Aoption_new">v:option_new</a> indicates the newly set value.
				<a href="eval.html#v%3Aoption_oldlocal">v:option_oldlocal</a> has the old local value.
				<a href="eval.html#v%3Aoption_oldglobal">v:option_oldglobal</a> has the old global value.
				<a href="eval.html#v%3Aoption_old">v:option_old</a> indicates the old option value.</div>
<div class="old-help-para">				<a href="eval.html#v%3Aoption_oldlocal">v:option_oldlocal</a> is only set when <a href="options.html#%3Aset">:set</a>
				or <a href="options.html#%3Asetlocal">:setlocal</a> or a <a href="options.html#modeline">modeline</a> was used to set
				the option. Similarly <a href="eval.html#v%3Aoption_oldglobal">v:option_oldglobal</a> is
				only set when <a href="options.html#%3Aset">:set</a> or <a href="options.html#%3Asetglobal">:setglobal</a> was used.</div>
<div class="old-help-para">				Note that when setting a <a href="options.html#global-local">global-local</a> string
				option with <a href="options.html#%3Aset">:set</a>, then <a href="eval.html#v%3Aoption_old">v:option_old</a> is the
				old global value. However, for all other kinds
				of options (local string options, global-local
				number options, ...) it is the old local
				value.</div>
<div class="old-help-para">				OptionSet is not triggered on startup and for
				the <a href="vim_diff.html#'key'">'key'</a> option for obvious reasons.</div>
<div class="old-help-para">				Usage example: Check for the existence of the
				directory in the <a href="options.html#'backupdir'">'backupdir'</a> and <a href="options.html#'undodir'">'undodir'</a>
				options, create the directory if it doesn't
				exist yet.</div>
<div class="old-help-para">				Note: Do not reset the same option during this
				autocommand, that may break plugins. You can
				always use <a href="autocmd.html#%3Anoautocmd">:noautocmd</a> to prevent triggering
				OptionSet.</div>
<div class="old-help-para">				Non-recursive: <a href="options.html#%3Aset">:set</a> in the autocommand does
				not trigger OptionSet again.</div>
<div class="old-help-para">							<a name="QuickFixCmdPre"></a><code class="help-tag-right">QuickFixCmdPre</code>
QuickFixCmdPre			Before a quickfix command is run (<a href="quickfix.html#%3Amake">:make</a>,
				<a href="quickfix.html#%3Almake">:lmake</a>, <a href="quickfix.html#%3Agrep">:grep</a>, <a href="quickfix.html#%3Algrep">:lgrep</a>, <a href="quickfix.html#%3Agrepadd">:grepadd</a>,
				<a href="quickfix.html#%3Algrepadd">:lgrepadd</a>, <a href="quickfix.html#%3Avimgrep">:vimgrep</a>, <a href="quickfix.html#%3Alvimgrep">:lvimgrep</a>,
				<a href="quickfix.html#%3Avimgrepadd">:vimgrepadd</a>, <a href="quickfix.html#%3Alvimgrepadd">:lvimgrepadd</a>,
				<a href="quickfix.html#%3Acfile">:cfile</a>, <a href="quickfix.html#%3Acgetfile">:cgetfile</a>, <a href="quickfix.html#%3Acaddfile">:caddfile</a>, <a href="quickfix.html#%3Alfile">:lfile</a>,
				<a href="quickfix.html#%3Algetfile">:lgetfile</a>, <a href="quickfix.html#%3Aladdfile">:laddfile</a>, <a href="helphelp.html#%3Ahelpgrep">:helpgrep</a>,
				<a href="helphelp.html#%3Alhelpgrep">:lhelpgrep</a>, <a href="quickfix.html#%3Acexpr">:cexpr</a>, <a href="quickfix.html#%3Acgetexpr">:cgetexpr</a>,
				<a href="quickfix.html#%3Acaddexpr">:caddexpr</a>, <a href="quickfix.html#%3Acbuffer">:cbuffer</a>, <a href="quickfix.html#%3Acgetbuffer">:cgetbuffer</a>,
				<a href="quickfix.html#%3Acaddbuffer">:caddbuffer</a>).
				The pattern is matched against the command
				being run.  When <a href="quickfix.html#%3Agrep">:grep</a> is used but <a href="options.html#'grepprg'">'grepprg'</a>
				is set to "internal" it still matches "grep".
				This command cannot be used to set the
				<a href="options.html#'makeprg'">'makeprg'</a> and <a href="options.html#'grepprg'">'grepprg'</a> variables.
				If this command causes an error, the quickfix
				command is not executed.
							<a name="QuickFixCmdPost"></a><code class="help-tag-right">QuickFixCmdPost</code>
QuickFixCmdPost			Like QuickFixCmdPre, but after a quickfix
				command is run, before jumping to the first
				location. For <a href="quickfix.html#%3Acfile">:cfile</a> and <a href="quickfix.html#%3Alfile">:lfile</a> commands
				it is run after error file is read and before
				moving to the first error.
				See <a href="quickfix.html#QuickFixCmdPost-example">QuickFixCmdPost-example</a>.
							<a name="QuitPre"></a><code class="help-tag-right">QuitPre</code>
QuitPre				When using <code>:quit</code>, <code>:wq</code> or <code>:qall</code>, before
				deciding whether it closes the current window
				or quits Vim.  For <code>:wq</code> the buffer is written
				before QuitPre is triggered.  Can be used to
				close any non-essential window if the current
				window is the last ordinary window.
				See also <a href="autocmd.html#ExitPre">ExitPre</a>, <a href="autocmd.html#WinClosed">WinClosed</a>.
							<a name="RemoteReply"></a><code class="help-tag-right">RemoteReply</code>
RemoteReply			When a reply from a Vim that functions as
				server was received server2client().  The
				pattern is matched against the <code>{serverid}</code>.
				<code>&lt;amatch&gt;</code> is equal to the <code>{serverid}</code> from which
				the reply was sent, and <code>&lt;afile&gt;</code> is the actual
				reply string.
				Note that even if an autocommand is defined,
				the reply should be read with remote_read()
				to consume it.
							<a name="SearchWrapped"></a><code class="help-tag-right">SearchWrapped</code>
SearchWrapped			After making a search with <a href="pattern.html#n">n</a> or <a href="pattern.html#N">N</a> if the
				search wraps around the document back to
				the start/finish respectively.
							<a name="RecordingEnter"></a><code class="help-tag-right">RecordingEnter</code>
RecordingEnter			When a macro starts recording.
				The pattern is the current file name, and
				<a href="builtin.html#reg_recording()">reg_recording()</a> is the current register that
				is used.
							<a name="RecordingLeave"></a><code class="help-tag-right">RecordingLeave</code>
RecordingLeave			When a macro stops recording.
				The pattern is the current file name, and
				<a href="builtin.html#reg_recording()">reg_recording()</a> is the recorded
				register.
				<a href="builtin.html#reg_recorded()">reg_recorded()</a> is only updated after this
				event.
				Sets these <a href="eval.html#v%3Aevent">v:event</a> keys:
				    regcontents
				    regname
							<a name="SessionLoadPost"></a><code class="help-tag-right">SessionLoadPost</code>
SessionLoadPost			After loading the session file created using
				the <a href="starting.html#%3Amksession">:mksession</a> command.
							<a name="ShellCmdPost"></a><code class="help-tag-right">ShellCmdPost</code>
ShellCmdPost			After executing a shell command with <a href="various.html#%3A%21cmd">:!cmd</a>,
				<a href="quickfix.html#%3Amake">:make</a> and <a href="quickfix.html#%3Agrep">:grep</a>.  Can be used to check for
				any changed files.
				For non-blocking shell commands, see
				<a href="job_control.html#job-control">job-control</a>.
							<a name="Signal"></a><code class="help-tag-right">Signal</code>
Signal				After Nvim receives a signal. The pattern is
				matched against the signal name. Only
				"SIGUSR1" and "SIGWINCH" are supported.  Example:<pre>autocmd Signal SIGUSR1 call some#func()</pre></div>
<div class="old-help-para">							<a name="ShellFilterPost"></a><code class="help-tag-right">ShellFilterPost</code>
ShellFilterPost			After executing a shell command with
				":{range}!cmd", ":w !cmd" or ":r !cmd".
				Can be used to check for any changed files.
							<a name="SourcePre"></a><code class="help-tag-right">SourcePre</code>
SourcePre			Before sourcing a vim/lua file. <a href="repeat.html#%3Asource">:source</a>
				<code>&lt;afile&gt;</code> is the name of the file being sourced.
							<a name="SourcePost"></a><code class="help-tag-right">SourcePost</code>
SourcePost			After sourcing a vim/lua file. <a href="repeat.html#%3Asource">:source</a>
				<code>&lt;afile&gt;</code> is the name of the file being sourced.
				Not triggered when sourcing was interrupted.
				Also triggered after a SourceCmd autocommand
				was triggered.
							<a name="SourceCmd"></a><code class="help-tag-right">SourceCmd</code>
SourceCmd			When sourcing a vim/lua file. <a href="repeat.html#%3Asource">:source</a>
				<code>&lt;afile&gt;</code> is the name of the file being sourced.
				The autocommand must source this file.
				<a href="autocmd.html#Cmd-event">Cmd-event</a>
							<a name="SpellFileMissing"></a><code class="help-tag-right">SpellFileMissing</code>
SpellFileMissing		When trying to load a spell checking file and
				it can't be found.  The pattern is matched
				against the language.  <code>&lt;amatch&gt;</code> is the
				language, <a href="options.html#'encoding'">'encoding'</a> also matters.  See
				<a href="spell.html#spell-SpellFileMissing">spell-SpellFileMissing</a>.
							<a name="StdinReadPost"></a><code class="help-tag-right">StdinReadPost</code>
StdinReadPost			During startup, after reading from stdin into
				the buffer, before executing modelines. <a href="starting.html#--">--</a>
							<a name="StdinReadPre"></a><code class="help-tag-right">StdinReadPre</code>
StdinReadPre			During startup, before reading from stdin into
				the buffer. <a href="starting.html#--">--</a>
							<a name="SwapExists"></a><code class="help-tag-right">SwapExists</code>
SwapExists			Detected an existing swap file when starting
				to edit a file.  Only when it is possible to
				select a way to handle the situation, when Vim
				would ask the user what to do.
				The <a href="eval.html#v%3Aswapname">v:swapname</a> variable holds the name of
				the swap file found, <code>&lt;afile&gt;</code> the file being
				edited.  <a href="eval.html#v%3Aswapcommand">v:swapcommand</a> may contain a command
				to be executed in the opened file.
				The commands should set the <a href="eval.html#v%3Aswapchoice">v:swapchoice</a>
				variable to a string with one character to
				tell Vim what should be done next:
					'o'	open read-only
					'e'	edit the file anyway
					'r'	recover
					'd'	delete the swap file
					'q'	quit, don't edit the file
					'a'	abort, like hitting <code>CTRL-C</code>
				When set to an empty string the user will be
				asked, as if there was no SwapExists autocmd.
							<a name="E812"></a><code class="help-tag-right">E812</code>
				Cannot change to another buffer, change
				the buffer name or change directory.
							<a name="Syntax"></a><code class="help-tag-right">Syntax</code>
Syntax				When the <a href="options.html#'syntax'">'syntax'</a> option has been set.  The
				pattern is matched against the syntax name.
				<code>&lt;afile&gt;</code> expands to the name of the file where
				this option was set. <code>&lt;amatch&gt;</code> expands to the
				new value of <a href="options.html#'syntax'">'syntax'</a>.
				See <a href="syntax.html#%3Asyn-on">:syn-on</a>.
							<a name="TabEnter"></a><code class="help-tag-right">TabEnter</code>
TabEnter			Just after entering a tab page. <a href="tabpage.html#tab-page">tab-page</a>
				After WinEnter.
				Before BufEnter.
							<a name="TabLeave"></a><code class="help-tag-right">TabLeave</code>
TabLeave			Just before leaving a tab page. <a href="tabpage.html#tab-page">tab-page</a>
				After WinLeave.
							<a name="TabNew"></a><code class="help-tag-right">TabNew</code>
TabNew				When creating a new tab page. <a href="tabpage.html#tab-page">tab-page</a>
				After WinEnter.
				Before TabEnter.
							<a name="TabNewEntered"></a><code class="help-tag-right">TabNewEntered</code>
TabNewEntered			After entering a new tab page. <a href="tabpage.html#tab-page">tab-page</a>
				After BufEnter.
							<a name="TabClosed"></a><code class="help-tag-right">TabClosed</code>
TabClosed			After closing a tab page. <code>&lt;afile&gt;</code> expands to
				the tab page number.
							<a name="TermOpen"></a><code class="help-tag-right">TermOpen</code>
TermOpen			When a <a href="nvim_terminal_emulator.html#terminal">terminal</a> job is starting.  Can be
				used to configure the terminal buffer.
							<a name="TermEnter"></a><code class="help-tag-right">TermEnter</code>
TermEnter			After entering <a href="intro.html#Terminal-mode">Terminal-mode</a>.
				After TermOpen.
							<a name="TermLeave"></a><code class="help-tag-right">TermLeave</code>
TermLeave			After leaving <a href="intro.html#Terminal-mode">Terminal-mode</a>.
				After TermClose.
							<a name="TermClose"></a><code class="help-tag-right">TermClose</code>
TermClose			When a <a href="nvim_terminal_emulator.html#terminal">terminal</a> job ends.
				Sets these <a href="eval.html#v%3Aevent">v:event</a> keys:
				    status
							<a name="TermResponse"></a><code class="help-tag-right">TermResponse</code>
TermResponse			After the response to t_RV is received from
				the terminal.  The value of <a href="eval.html#v%3Atermresponse">v:termresponse</a>
				can be used to do things depending on the
				terminal version.  May be triggered halfway
				through another event (file I/O, a shell
				command, or anything else that takes time).
							<a name="TextChanged"></a><code class="help-tag-right">TextChanged</code>
TextChanged			After a change was made to the text in the
				current buffer in Normal mode.  That is after
				<a href="eval.html#b%3Achangedtick">b:changedtick</a> has changed (also when that
				happened before the TextChanged autocommand
				was defined).
				Not triggered when there is typeahead or when
				an operator is pending.
				Note: Cannot be skipped with <code>:noautocmd</code>.
				Careful: This is triggered very often, don't
				do anything that the user does not expect or
				that is slow.
							<a name="TextChangedI"></a><code class="help-tag-right">TextChangedI</code>
TextChangedI			After a change was made to the text in the
				current buffer in Insert mode.
				Not triggered when the popup menu is visible.
				Otherwise the same as TextChanged.
							<a name="TextChangedP"></a><code class="help-tag-right">TextChangedP</code>
TextChangedP			After a change was made to the text in the
				current buffer in Insert mode, only when the
				popup menu is visible.  Otherwise the same as
				TextChanged.
							<a name="TextChangedT"></a><code class="help-tag-right">TextChangedT</code>
TextChangedT			After a change was made to the text in the
				current buffer in <a href="intro.html#Terminal-mode">Terminal-mode</a>.  Otherwise
				the same as TextChanged.
							<a name="TextYankPost"></a><code class="help-tag-right">TextYankPost</code>
TextYankPost			Just after a <a href="change.html#yank">yank</a> or <a href="change.html#deleting">deleting</a> command, but not
				if the black hole register <a href="change.html#quote_">quote_</a> is used nor
				for <a href="builtin.html#setreg()">setreg()</a>. Pattern must be *.				Sets these <a href="eval.html#v%3Aevent">v:event</a> keys:
				    inclusive
				    operator
				    regcontents
				    regname
				    regtype
				    visual
				The <code>inclusive</code> flag combined with the <a href="motion.html#'%5B">'[</a>
				and <a href="motion.html#'%5D">']</a> marks can be used to calculate the
				precise region of the operation.</div>
<div class="old-help-para">				Non-recursive (event cannot trigger itself).
				Cannot change the text. <a href="eval.html#textlock">textlock</a>
							<a name="User"></a><code class="help-tag-right">User</code>
User				Not executed automatically.  Use <a href="autocmd.html#%3Adoautocmd">:doautocmd</a>
				to trigger this, typically for "custom events"
				in a plugin.  Example:<pre>:autocmd User MyPlugin echom 'got MyPlugin event'
:doautocmd User MyPlugin</pre></div>
<div class="old-help-para">							<a name="UserGettingBored"></a><code class="help-tag-right">UserGettingBored</code>
UserGettingBored		When the user presses the same key 42 times.
				Just kidding! :-)
							<a name="VimEnter"></a><code class="help-tag-right">VimEnter</code>
VimEnter			After doing all the startup stuff, including
				loading vimrc files, executing the "-c cmd"
				arguments, creating all windows and loading
				the buffers in them.
				Just before this event is triggered the
				<a href="eval.html#v%3Avim_did_enter">v:vim_did_enter</a> variable is set, so that you
				can do:<pre>if v:vim_did_enter
  call s:init()
else
  au VimEnter * call s:init()
endif</pre></div>
<div class="old-help-para">							<a name="VimLeave"></a><code class="help-tag-right">VimLeave</code>
VimLeave			Before exiting Vim, just after writing the
				.shada file.  Executed only once, like
				VimLeavePre.
				Use <a href="eval.html#v%3Adying">v:dying</a> to detect an abnormal exit.
				Use <a href="eval.html#v%3Aexiting">v:exiting</a> to get the exit code.
				Not triggered if <a href="eval.html#v%3Adying">v:dying</a> is 2 or more.
							<a name="VimLeavePre"></a><code class="help-tag-right">VimLeavePre</code>
VimLeavePre			Before exiting Vim, just before writing the
				.shada file.  This is executed only once,
				if there is a match with the name of what
				happens to be the current buffer when exiting.
				Mostly useful with a "*" pattern.<pre>:autocmd VimLeavePre * call CleanupStuff()</pre></div>
<div class="old-help-para">				Use <a href="eval.html#v%3Adying">v:dying</a> to detect an abnormal exit.
				Use <a href="eval.html#v%3Aexiting">v:exiting</a> to get the exit code.
				Not triggered if <a href="eval.html#v%3Adying">v:dying</a> is 2 or more.
							<a name="VimResized"></a><code class="help-tag-right">VimResized</code>
VimResized			After the Vim window was resized, thus <a href="options.html#'lines'">'lines'</a>
				and/or <a href="options.html#'columns'">'columns'</a> changed.  Not when starting
				up though.
							<a name="VimResume"></a><code class="help-tag-right">VimResume</code>
VimResume			After Nvim resumes from <a href="starting.html#suspend">suspend</a> state.
							<a name="VimSuspend"></a><code class="help-tag-right">VimSuspend</code>
VimSuspend			Before Nvim enters <a href="starting.html#suspend">suspend</a> state.
							<a name="WinClosed"></a><code class="help-tag-right">WinClosed</code>
WinClosed			After closing a window.  The pattern is
				matched against the <a href="windows.html#window-ID">window-ID</a>.  Both
				<code>&lt;amatch&gt;</code> and <code>&lt;afile&gt;</code> are set to the <a href="windows.html#window-ID">window-ID</a>.
				After WinLeave.
				Non-recursive (event cannot trigger itself).
				See also <a href="autocmd.html#ExitPre">ExitPre</a>, <a href="autocmd.html#QuitPre">QuitPre</a>.
							<a name="WinEnter"></a><code class="help-tag-right">WinEnter</code>
WinEnter			After entering another window.  Not done for
				the first window, when Vim has just started.
				Useful for setting the window height.
				If the window is for another buffer, Vim
				executes the BufEnter autocommands after the
				WinEnter autocommands.
				Note: For split and tabpage commands the
				WinEnter event is triggered after the split
				or tab command but before the file is loaded.</div>
<div class="old-help-para">							<a name="WinLeave"></a><code class="help-tag-right">WinLeave</code>
WinLeave			Before leaving a window.  If the window to be
				entered next is for a different buffer, Vim
				executes the BufLeave autocommands before the
				WinLeave autocommands (but not for ":new").
				Not used for ":qa" or ":q" when exiting Vim.
				Before WinClosed.
							<a name="WinNew"></a><code class="help-tag-right">WinNew</code>
WinNew				When a new window was created.  Not done for
				the first window, when Vim has just started.
				Before WinEnter.</div>
<div class="old-help-para">							<a name="WinScrolled"></a><code class="help-tag-right">WinScrolled</code>
WinScrolled			After scrolling the content of a window or
				resizing a window in the current tab page.</div>
<div class="old-help-para">				When more than one window scrolled or resized
				only one WinScrolled event is triggered.  You
				can use the <code>winlayout()</code> and <code>getwininfo()</code>
				functions to see what changed.</div>
<div class="old-help-para">				The pattern is matched against the <a href="windows.html#window-ID">window-ID</a>
				of the first window that scrolled or resized.
				Both <code>&lt;amatch&gt;</code> and <code>&lt;afile&gt;</code> are set to the
				<a href="windows.html#window-ID">window-ID</a>.</div>
<div class="old-help-para">				Only starts triggering after startup finished
				and the first screen redraw was done.</div>
<div class="old-help-para">				Non-recursive: the event will not trigger
				while executing commands for the WinScrolled
				event.  However, if the command causes a
				window to scroll or change size, then another
				WinScrolled event will be triggered later.</div>
<div class="old-help-para">				Does not trigger when the command is added,
				only after the first scroll or resize.</div>
<div class="old-help-para"><h2 class="help-heading">6. Patterns<span class="help-heading-tags">					<a name="autocmd-pattern"></a><span class="help-tag">autocmd-pattern</span> <a name="%7Baupat%7D"></a><span class="help-tag">{aupat}</span></span></h2></div>
<div class="old-help-para">The <code>{aupat}</code> argument of <code>:autocmd</code> can be a comma-separated list.  This works as
if the command was given with each pattern separately.  Thus this command:<pre>:autocmd BufRead *.txt,*.info set et</pre>
Is equivalent to:<pre>:autocmd BufRead *.txt set et
:autocmd BufRead *.info set et</pre>
The file pattern <code>{aupat}</code> is tested for a match against the file name in one of
two ways:
1. When there is no '/' in the pattern, Vim checks for a match against only
   the tail part of the file name (without its leading directory path).
2. When there is a '/' in the pattern, Vim checks for a match against both the
   short file name (as you typed it) and the full file name (after expanding
   it to a full path and resolving symbolic links).</div>
<div class="old-help-para">The special pattern <code>&lt;buffer&gt;</code> or &lt;buffer=N&gt; is used for buffer-local
autocommands <a href="autocmd.html#autocmd-buflocal">autocmd-buflocal</a>.  This pattern is not matched against the name
of a buffer.</div>
<div class="old-help-para">Examples:<pre>:autocmd BufRead *.txt                set et</pre>
Set the <a href="options.html#'et'">'et'</a> option for all text files.<pre>:autocmd BufRead /vim/src/*.c        set cindent</pre>
Set the <a href="options.html#'cindent'">'cindent'</a> option for C files in the /vim/src directory.<pre>:autocmd BufRead /tmp/*.c        set ts=5</pre>
If you have a link from "/tmp/test.c" to "/home/nobody/vim/src/test.c", and
you start editing "/tmp/test.c", this autocommand will match.</div>
<div class="old-help-para">Note:  To match part of a path, but not from the root directory, use a '' as
the first character.  Example:<pre>:autocmd BufRead */doc/*.txt        set tw=78</pre>
This autocommand will for example be executed for "/tmp/doc/xx.txt" and
"/usr/home/piet/doc/yy.txt".  The number of directories does not matter here.</div>
<div class="old-help-para">The file name that the pattern is matched against is after expanding
wildcards.  Thus if you issue this command:<pre>:e $ROOTDIR/main.$EXT</pre>
The argument is first expanded to:<pre>/usr/root/main.py</pre>
Before it's matched with the pattern of the autocommand.  Careful with this
when using events like FileReadCmd, the value of <code>&lt;amatch&gt;</code> may not be what you
expect.</div>
<div class="old-help-para">Environment variables can be used in a pattern:<pre>:autocmd BufRead $VIMRUNTIME/doc/*.txt  set expandtab</pre>
And ~ can be used for the home directory (if $HOME is defined):<pre>:autocmd BufWritePost ~/.config/nvim/init.vim   so &lt;afile&gt;
:autocmd BufRead ~archive/*      set readonly</pre>
The environment variable is expanded when the autocommand is defined, not when
the autocommand is executed.  This is different from the command!</div>
<div class="old-help-para">							<a name="file-pattern"></a><code class="help-tag-right">file-pattern</code>
The pattern is interpreted like mostly used in file names:
	*	matches any sequence of characters; Unusual: includes path
		separators
	?	matches any single character
	\?	matches a '?'
	.	matches a '.'
	~	matches a '~'
	,	separates patterns
	\,	matches a ','
	{ }	like \( \) in a <a href="pattern.html#pattern">pattern</a>
	,	inside { }: like \| in a <a href="pattern.html#pattern">pattern</a>
	\}	literal }
	\{	literal {
	\\\{n,m\}  like \{n,m} in a <a href="pattern.html#pattern">pattern</a>
	\	special meaning like in a <a href="pattern.html#pattern">pattern</a>
	[ch]	matches 'c' or 'h'
	[^ch]   match any character but 'c' and 'h'</div>
<div class="old-help-para">Note that for all systems the '/' character is used for path separator (even
Windows). This was done because the backslash is difficult to use in a pattern
and to make the autocommands portable across different systems.</div>
<div class="old-help-para">It is possible to use <a href="pattern.html#pattern">pattern</a> items, but they may not work as expected,
because of the translation done for the above.</div>
<div class="old-help-para">							<a name="autocmd-changes"></a><code class="help-tag-right">autocmd-changes</code>
Matching with the pattern is done when an event is triggered.  Changing the
buffer name in one of the autocommands, or even deleting the buffer, does not
change which autocommands will be executed.  Example:<pre>au BufEnter *.foo  bdel
au BufEnter *.foo  set modified</pre>
This will delete the current buffer and then set <a href="options.html#'modified'">'modified'</a> in what has become
the current buffer instead.  Vim doesn't take into account that "*.foo"
doesn't match with that buffer name.  It matches "*.foo" with the name of the
buffer at the moment the event was triggered.</div>
<div class="old-help-para">However, buffer-local autocommands will not be executed for a buffer that has
been wiped out with <a href="windows.html#%3Abwipe">:bwipe</a>.  After deleting the buffer with <a href="windows.html#%3Abdel">:bdel</a> the
buffer actually still exists (it becomes unlisted), thus the autocommands are
still executed.</div>
<div class="old-help-para"><h2 class="help-heading">7. Buffer-local autocommands<span class="help-heading-tags">	<a name="autocmd-buflocal"></a><span class="help-tag">autocmd-buflocal</span> <a name="autocmd-buffer-local"></a><span class="help-tag">autocmd-buffer-local</span></span></h2>				<a name="%3Cbuffer%3E"></a><code class="help-tag-right">&lt;buffer&gt;</code> <a name="%3Cbuffer%3DN%3E"></a><code class="help-tag">&lt;buffer=N&gt;</code> <a name="%3Cbuffer%3Dabuf%3E"></a><code class="help-tag">&lt;buffer=abuf&gt;</code> <a name="E680"></a><code class="help-tag">E680</code></div>
<div class="old-help-para">Buffer-local autocommands are attached to a specific buffer.  They are useful
if the buffer does not have a name and when the name does not match a specific
pattern.  But it also means they must be explicitly added to each buffer.</div>
<div class="old-help-para">Instead of a pattern buffer-local autocommands use one of these forms:
	<code>&lt;buffer&gt;</code>	current buffer
	&lt;buffer=99&gt;	buffer number 99
	&lt;buffer=abuf&gt;	using <code>&lt;abuf&gt;</code> (only when executing autocommands)
			<a href="cmdline.html#%3Cabuf%3E">&lt;abuf&gt;</a></div>
<div class="old-help-para">Examples:<pre>:au CursorHold &lt;buffer&gt;  echo 'hold'
:au CursorHold &lt;buffer=33&gt;  echo 'hold'
:au BufNewFile * au CursorHold &lt;buffer=abuf&gt;  echo 'hold'</pre>
All the commands for autocommands also work with buffer-local autocommands,
simply use the special string instead of the pattern.  Examples:<pre>:au! * &lt;buffer&gt;                     " remove buffer-local autocommands for
                                 " current buffer
:au! * &lt;buffer=33&gt;                     " remove buffer-local autocommands for
                                 " buffer #33
:bufdo :au! CursorHold &lt;buffer&gt;  " remove autocmd for given event for all
                                 " buffers
:au * &lt;buffer&gt;                     " list buffer-local autocommands for
                                 " current buffer</pre>
Note that when an autocommand is defined for the current buffer, it is stored
with the buffer number.  Thus it uses the form "&lt;buffer=12&gt;", where 12 is the
number of the current buffer.  You will see this when listing autocommands,
for example.</div>
<div class="old-help-para">To test for presence of buffer-local autocommands use the <a href="builtin.html#exists()">exists()</a> function
as follows:<pre>:if exists("#CursorHold#&lt;buffer=12&gt;") | ... | endif
:if exists("#CursorHold#&lt;buffer&gt;") | ... | endif    " for current buffer</pre>
When a buffer is wiped out its buffer-local autocommands are also gone, of
course.  Note that when deleting a buffer, e.g., with ":bdel", it is only
unlisted, the autocommands are still present.  In order to see the removal of
buffer-local autocommands:<pre>:set verbose=6</pre>
It is not possible to define buffer-local autocommands for a non-existent
buffer.</div>
<div class="old-help-para"><h2 class="help-heading">8. Groups<span class="help-heading-tags">						<a name="autocmd-groups"></a><span class="help-tag">autocmd-groups</span></span></h2></div>
<div class="old-help-para">Autocommands can be put together in a group.  This is useful for removing or
executing a group of autocommands.  For example, all the autocommands for
syntax highlighting are put in the "highlight" group, to be able to execute
":doautoall highlight BufRead" when the GUI starts.</div>
<div class="old-help-para">When no specific group is selected, Vim uses the default group.  The default
group does not have a name.  You cannot execute the autocommands from the
default group separately; you can execute them only by executing autocommands
for all groups.</div>
<div class="old-help-para">Normally, when executing autocommands automatically, Vim uses the autocommands
for all groups.  The group only matters when executing autocommands with
":doautocmd" or ":doautoall", or when defining or deleting autocommands.</div>
<div class="old-help-para">The group name can contain any characters except white space.  The group name
"end" is reserved (also in uppercase).</div>
<div class="old-help-para">The group name is case sensitive.  Note that this is different from the event
name!</div>
<div class="old-help-para">							<a name="%3Aaug"></a><code class="help-tag-right">:aug</code> <a name="%3Aaugroup"></a><code class="help-tag">:augroup</code>
:aug[roup] <code>{name}</code>		Define the autocmd group name for the
				following ":autocmd" commands.  The name "end"
				or "END" selects the default group.
				To avoid confusion, the name should be
				different from existing <code>{event}</code> names, as this
				most likely will not do what you intended.</div>
<div class="old-help-para">					<a name="%3Aaugroup-delete"></a><code class="help-tag-right">:augroup-delete</code> <a name="E367"></a><code class="help-tag">E367</code> <a name="W19"></a><code class="help-tag">W19</code> <a name="E936"></a><code class="help-tag">E936</code>
:aug[roup]! <code>{name}</code>		Delete the autocmd group <code>{name}</code>.  Don't use
				this if there is still an autocommand using
				this group!  You will get a warning if doing
				it anyway.  When the group is the current
				group you will get error E936.</div>
<div class="old-help-para">To enter autocommands for a specific group, use this method:
1. Select the group with ":augroup <code>{name}</code>".
2. Delete any old autocommands with ":au!".
3. Define the autocommands.
4. Go back to the default group with "augroup END".</div>
<div class="old-help-para">Example:<pre>:augroup uncompress
:  au!
:  au BufEnter *.gz        %!gunzip
:augroup END</pre>
This prevents having the autocommands defined twice (e.g., after sourcing the
vimrc file again).</div>
<div class="old-help-para">						<a name="FileExplorer"></a><code class="help-tag-right">FileExplorer</code>
There is one group that is recognized by Vim: FileExplorer.  If this group
exists Vim assumes that editing a directory is possible and will trigger a
plugin that lists the files in that directory.  This is used by the <a href="pi_netrw.html#netrw">netrw</a>
plugin.  This allows you to do:<pre>browse edit</pre>
<h2 class="help-heading">9. Executing autocommands<span class="help-heading-tags">				<a name="autocmd-execute"></a><span class="help-tag">autocmd-execute</span></span></h2></div>
<div class="old-help-para">Vim can also execute Autocommands non-automatically.  This is useful if you
have changed autocommands, or when Vim has executed the wrong autocommands
(e.g., the file pattern match was wrong).</div>
<div class="old-help-para">Note that the <a href="options.html#'eventignore'">'eventignore'</a> option applies here too.  Events listed in this
option will not cause any commands to be executed.</div>
<div class="old-help-para">				<a name="%3Ado"></a><code class="help-tag-right">:do</code> <a name="%3Adoau"></a><code class="help-tag">:doau</code> <a name="%3Adoaut"></a><code class="help-tag">:doaut</code> <a name="%3Adoautocmd"></a><code class="help-tag">:doautocmd</code> <a name="E217"></a><code class="help-tag">E217</code>
:do[autocmd] [&lt;nomodeline&gt;] [group] <code>{event}</code> [fname]
			Apply the autocommands matching [fname] (default:
			current file name) for <code>{event}</code> to the current buffer.
			You can use this when the current file name does not
			match the right pattern, after changing settings, or
			to execute autocommands for a certain event.
			It's possible to use this inside an autocommand too,
			so you can base the autocommands for one extension on
			another extension.  Example:<pre>:au BufEnter *.cpp so ~/.config/nvim/init_cpp.vim
:au BufEnter *.cpp doau BufEnter x.c</pre></div>
<div class="old-help-para">			Be careful to avoid endless loops.  <a href="autocmd.html#autocmd-nested">autocmd-nested</a></div>
<div class="old-help-para">			When the [group] argument is not given, Vim executes
			the autocommands for all groups.  When the [group]
			argument is included, Vim executes only the matching
			autocommands for that group.  Undefined group is an
			error.
							<a name="%3Cnomodeline%3E"></a><code class="help-tag-right">&lt;nomodeline&gt;</code>
			After applying the autocommands the modelines are
			processed, so that their settings overrule the
			settings from autocommands when editing a file. This
			is skipped if <code>&lt;nomodeline&gt;</code> is specified. You probably
			want to use <code>&lt;nomodeline&gt;</code> for events not used when
			loading a buffer, such as <a href="autocmd.html#User">User</a>.
			Modelines are also skipped when no matching
			autocommands were executed.</div>
<div class="old-help-para">						<a name="%3Adoautoa"></a><code class="help-tag-right">:doautoa</code> <a name="%3Adoautoall"></a><code class="help-tag">:doautoall</code>
:doautoa[ll] [&lt;nomodeline&gt;] [group] <code>{event}</code> [fname]
			Like ":doautocmd", but apply the autocommands to each
			loaded buffer.  The current buffer is done last.</div>
<div class="old-help-para">			Note that [fname] is used to select the autocommands,
			not the buffers to which they are applied. Example:<pre>augroup mine
  autocmd!
  autocmd FileType * echo expand('&lt;amatch&gt;')
augroup END
doautoall mine FileType Loaded-Buffer</pre></div>
<div class="old-help-para">			Sourcing this script, you'll see as many
			"Loaded-Buffer" echoed as there are loaded buffers.</div>
<div class="old-help-para">			Careful: Don't use this for autocommands that delete a
			buffer, change to another buffer or change the
			contents of a buffer; the result is unpredictable.
			This command is intended for autocommands that set
			options, change highlighting, and things like that.</div>
<div class="old-help-para"><h2 class="help-heading">10. Using autocommands<span class="help-heading-tags">					<a name="autocmd-use"></a><span class="help-tag">autocmd-use</span></span></h2></div>
<div class="old-help-para">For WRITING FILES there are four possible sets of events.  Vim uses only one
of these sets for a write command:</div>
<div class="old-help-para">BufWriteCmd	BufWritePre	BufWritePost	writing the whole buffer
		FilterWritePre	FilterWritePost	writing to filter temp file
FileAppendCmd	FileAppendPre	FileAppendPost	appending to a file
FileWriteCmd	FileWritePre	FileWritePost	any other file write</div>
<div class="old-help-para">When there is a matching "*Cmd" autocommand, it is assumed it will do the
writing.  No further writing is done and the other events are not triggered.
<a href="autocmd.html#Cmd-event">Cmd-event</a></div>
<div class="old-help-para">Note that theWritePost commands should undo any changes to the buffer that
were caused by theWritePre commands; otherwise, writing the file will have
the side effect of changing the buffer.</div>
<div class="old-help-para">Before executing the autocommands, the buffer from which the lines are to be
written temporarily becomes the current buffer.  Unless the autocommands
change the current buffer or delete the previously current buffer, the
previously current buffer is made the current buffer again.</div>
<div class="old-help-para">TheWritePre andAppendPre autocommands must not delete the buffer from
which the lines are to be written.</div>
<div class="old-help-para">The '[ and '] marks have a special position:
<div class="help-li" style=""> Before theReadPre event the '[ mark is set to the line just above where
  the new lines will be inserted.
</div><div class="help-li" style=""> Before theReadPost event the '[ mark is set to the first line that was
  just read, the '] mark to the last line.
</div><div class="help-li" style=""> Before executing the *WriteCmd, *WritePre and *AppendPre autocommands the '[
  mark is set to the first line that will be written, the '] mark to the last
  line.
Careful: '[ and '] change when using commands that change the buffer.
</div></div>
<div class="old-help-para">In commands which expect a file name, you can use "&lt;afile&gt;" for the file name
that is being read <a href="cmdline.html#%3A%3Cafile%3E">:&lt;afile&gt;</a> (you can also use "%" for the current file
name).  "&lt;abuf&gt;" can be used for the buffer number of the currently effective
buffer.  This also works for buffers that don't have a name.  But it doesn't
work for files without a buffer (e.g., with ":r file").</div>
<div class="old-help-para">							<a name="gzip-example"></a><code class="help-tag-right">gzip-example</code>
Examples for reading and writing compressed files:<pre>:augroup gzip
:  autocmd!
:  autocmd BufReadPre,FileReadPre        *.gz set bin
:  autocmd BufReadPost,FileReadPost        *.gz '[,']!gunzip
:  autocmd BufReadPost,FileReadPost        *.gz set nobin
:  autocmd BufReadPost,FileReadPost        *.gz execute ":doautocmd BufReadPost " .. expand("%:r")
:  autocmd BufWritePost,FileWritePost        *.gz !mv &lt;afile&gt; &lt;afile&gt;:r
:  autocmd BufWritePost,FileWritePost        *.gz !gzip &lt;afile&gt;:r

:  autocmd FileAppendPre                *.gz !gunzip &lt;afile&gt;
:  autocmd FileAppendPre                *.gz !mv &lt;afile&gt;:r &lt;afile&gt;
:  autocmd FileAppendPost                *.gz !mv &lt;afile&gt; &lt;afile&gt;:r
:  autocmd FileAppendPost                *.gz !gzip &lt;afile&gt;:r
:augroup END</pre>
The "gzip" group is used to be able to delete any existing autocommands with
":autocmd!", for when the file is sourced twice.</div>
<div class="old-help-para">("&lt;afile&gt;:r" is the file name without the extension, see <a href="cmdline.html#%3A_%25%3A">:_%:</a>)</div>
<div class="old-help-para">The commands executed for the BufNewFile, BufRead/BufReadPost, BufWritePost,
FileAppendPost and VimLeave events do not set or reset the changed flag of the
buffer.  When you decompress the buffer with the BufReadPost autocommands, you
can still exit with ":q".  When you use ":undo" in BufWritePost to undo the
changes made by BufWritePre commands, you can still do ":q" (this also makes
"ZZ" work).  If you do want the buffer to be marked as modified, set the
<a href="options.html#'modified'">'modified'</a> option.</div>
<div class="old-help-para">To execute Normal mode commands from an autocommand, use the ":normal"
command.  Use with care!  If the Normal mode command is not finished, the user
needs to type characters (e.g., after ":normal m" you need to type a mark
name).</div>
<div class="old-help-para">If you want the buffer to be unmodified after changing it, reset the
<a href="options.html#'modified'">'modified'</a> option.  This makes it possible to exit the buffer with ":q"
instead of ":q!".</div>
<div class="old-help-para">							<a name="autocmd-nested"></a><code class="help-tag-right">autocmd-nested</code> <a name="E218"></a><code class="help-tag">E218</code>
By default, autocommands do not nest.  For example, if you use ":e" or ":w" in
an autocommand, Vim does not execute the BufRead and BufWrite autocommands for
those commands.  If you do want this, use the "++nested" flag for those
commands in which you want nesting.  For example:<pre>:autocmd FileChangedShell *.c ++nested e!</pre>
The nesting is limited to 10 levels to get out of recursive loops.</div>
<div class="old-help-para">It's possible to use the ":au" command in an autocommand.  This can be a
self-modifying command!  This can be useful for an autocommand that should
execute only once.</div>
<div class="old-help-para">If you want to skip autocommands for one command, use the <a href="autocmd.html#%3Anoautocmd">:noautocmd</a> command
modifier or the <a href="options.html#'eventignore'">'eventignore'</a> option.</div>
<div class="old-help-para">Note: When reading a file (with ":read file" or with a filter command) and the
last line in the file does not have an <code>&lt;EOL&gt;</code>, Vim remembers this.  At the next
write (with ":write file" or with a filter command), if the same line is
written again as the last line in a file AND <a href="options.html#'binary'">'binary'</a> is set, Vim does not
supply an <code>&lt;EOL&gt;</code>.  This makes a filter command on the just read lines write the
same file as was read, and makes a write command on just filtered lines write
the same file as was read from the filter.  For example, another way to write
a compressed file:<pre>:autocmd FileWritePre *.gz   set bin|'[,']!gzip
:autocmd FileWritePost *.gz  undo|set nobin</pre></div>
<div class="old-help-para">							<a name="autocommand-pattern"></a><code class="help-tag-right">autocommand-pattern</code>
You can specify multiple patterns, separated by commas.  Here are some
examples:<pre>:autocmd BufRead   *                set tw=79 nocin ic infercase fo=2croq
:autocmd BufRead   .letter        set tw=72 fo=2tcrq
:autocmd BufEnter  .letter        set dict=/usr/lib/dict/words
:autocmd BufLeave  .letter        set dict=
:autocmd BufRead,BufNewFile   *.c,*.h        set tw=0 cin noic
:autocmd BufEnter  *.c,*.h        abbr FOR for (i = 0; i &lt; 3; ++i)&lt;CR&gt;{&lt;CR&gt;}&lt;Esc&gt;O
:autocmd BufLeave  *.c,*.h        unabbr FOR</pre>
For makefiles (makefile, Makefile, imakefile, makefile.unix, etc.):<pre>:autocmd BufEnter  ?akefile*        set include=^s\=include
:autocmd BufLeave  ?akefile*        set include&amp;</pre>
To always start editing C files at the first function:<pre>:autocmd BufRead   *.c,*.h        1;/^{</pre>
Without the "1;" above, the search would start from wherever the file was
entered, rather than from the start of the file.</div>
<div class="old-help-para">						<a name="skeleton"></a><code class="help-tag-right">skeleton</code> <a name="template"></a><code class="help-tag">template</code>
To read a skeleton (template) file when opening a new file:<pre>:autocmd BufNewFile  *.c        0r ~/vim/skeleton.c
:autocmd BufNewFile  *.h        0r ~/vim/skeleton.h
:autocmd BufNewFile  *.java        0r ~/vim/skeleton.java</pre>
To insert the current date and time in a.html file when writing it:<pre>:autocmd BufWritePre,FileWritePre *.html   ks|call LastMod()|'s
:fun LastMod()
:  if line("$") &gt; 20
:    let l = 20
:  else
:    let l = line("$")
:  endif
:  exe "1," .. l .. "g/Last modified: /s/Last modified: .*/Last modified: " ..
:  \ strftime("%Y %b %d")
:endfun</pre>
You need to have a line "Last modified: &lt;date time&gt;" in the first 20 lines
of the file for this to work.  Vim replaces &lt;date time&gt; (and anything in the
same line after it) with the current date and time.  Explanation:
	ks		mark current position with mark 's'
	call LastMod()  call the LastMod() function to do the work
	's		return the cursor to the old position
The LastMod() function checks if the file is shorter than 20 lines, and then
uses the ":g" command to find lines that contain "Last modified: ".  For those
lines the ":s" command is executed to replace the existing date with the
current one.  The ":execute" command is used to be able to use an expression
for the ":g" and ":s" commands.  The date is obtained with the strftime()
function.  You can change its argument to get another date string.</div>
<div class="old-help-para">When entering :autocmd on the command-line, completion of events and command
names may be done (with <code>&lt;Tab&gt;</code>, <code>CTRL-D</code>, etc.) where appropriate.</div>
<div class="old-help-para">Vim executes all matching autocommands in the order that you specify them.
It is recommended that your first autocommand be used for all files by using
"*" as the file pattern.  This means that you can define defaults you like
here for any settings, and if there is another matching autocommand it will
override these.  But if there is no other matching autocommand, then at least
your default settings are recovered (if entering this file from another for
which autocommands did match).  Note that "*" will also match files starting
with ".", unlike Unix shells.</div>
<div class="old-help-para">						    <a name="autocmd-searchpat"></a><code class="help-tag-right">autocmd-searchpat</code>
Autocommands do not change the current search patterns.  Vim saves the current
search patterns before executing autocommands then restores them after the
autocommands finish.  This means that autocommands do not affect the strings
highlighted with the <a href="options.html#'hlsearch'">'hlsearch'</a> option.  Within autocommands, you can still
use search patterns normally, e.g., with the "n" command.
If you want an autocommand to set the search pattern, such that it is used
after the autocommand finishes, use the ":let @/ =" command.
The search-highlighting cannot be switched off with ":nohlsearch" in an
autocommand.  Use the 'h' flag in the <a href="options.html#'shada'">'shada'</a> option to disable search-
highlighting when starting Vim.</div>
<div class="old-help-para">							<a name="Cmd-event"></a><code class="help-tag-right">Cmd-event</code>
When using one of the "*Cmd" events, the matching autocommands are expected to
do the file reading, writing or sourcing.  This can be used when working with
a special kind of file, for example on a remote system.
CAREFUL: If you use these events in a wrong way, it may have the effect of
making it impossible to read or write the matching files!  Make sure you test
your autocommands properly.  Best is to use a pattern that will never match a
normal file name, for example "ftp://*".</div>
<div class="old-help-para">When defining a BufReadCmd it will be difficult for Vim to recover a crashed
editing session.  When recovering from the original file, Vim reads only those
parts of a file that are not found in the swap file.  Since that is not
possible with a BufReadCmd, use the <a href="recover.html#%3Apreserve">:preserve</a> command to make sure the
original file isn't needed for recovery.  You might want to do this only when
you expect the file to be modified.</div>
<div class="old-help-para">For file read and write commands the <a href="eval.html#v%3Acmdarg">v:cmdarg</a> variable holds the "++enc="
and "++ff=" argument that are effective.  These should be used for the command
that reads/writes the file.  The <a href="eval.html#v%3Acmdbang">v:cmdbang</a> variable is one when "!" was
used, zero otherwise.</div>
<div class="old-help-para">See the $VIMRUNTIME/plugin/netrwPlugin.vim for examples.</div>
<div class="old-help-para"><h2 class="help-heading">11. Disabling autocommands<span class="help-heading-tags">				<a name="autocmd-disable"></a><span class="help-tag">autocmd-disable</span></span></h2></div>
<div class="old-help-para">To disable autocommands for some time use the <a href="options.html#'eventignore'">'eventignore'</a> option.  Note that
this may cause unexpected behavior, make sure you restore <a href="options.html#'eventignore'">'eventignore'</a>
afterwards, using a <a href="eval.html#%3Atry">:try</a> block with <a href="eval.html#%3Afinally">:finally</a>.</div>
<div class="old-help-para">							<a name="%3Anoautocmd"></a><code class="help-tag-right">:noautocmd</code> <a name="%3Anoa"></a><code class="help-tag">:noa</code>
To disable autocommands for just one command use the ":noautocmd" command
modifier.  This will set <a href="options.html#'eventignore'">'eventignore'</a> to "all" for the duration of the
following command.  Example:<pre>:noautocmd w fname.gz</pre>
This will write the file without triggering the autocommands defined by the
gzip plugin.</div>
<div class="old-help-para">Note that some autocommands are not triggered right away, but only later.
This specifically applies to <a href="autocmd.html#CursorMoved">CursorMoved</a> and <a href="autocmd.html#TextChanged">TextChanged</a>.</div>

  
  