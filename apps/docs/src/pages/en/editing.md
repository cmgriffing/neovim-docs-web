---
title:  Editing
layout: ../../layouts/MainLayout.astro
---

  <a name="editing.txt"></a><a name="edit-files"></a><h1> Editing</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/editing.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Editing files</div>
<div class="old-help-para"><h2 class="help-heading">1. Introduction<span class="help-heading-tags">						<a name="edit-intro"></a><span class="help-tag">edit-intro</span></span></h2></div>
<div class="old-help-para">Editing a file with Vim means:</div>
<div class="old-help-para">1. reading the file into a buffer
2. changing the buffer with editor commands
3. writing the buffer into a file</div>
<div class="old-help-para">							<a name="current-file"></a><code class="help-tag-right">current-file</code>
As long as you don't write the buffer, the original file remains unchanged.
If you start editing a file (read a file into the buffer), the file name is
remembered as the "current file name".  This is also known as the name of the
current buffer.  It can be used with "%" on the command line <a href="/neovim-docs-web/en/cmdline#%3A_%25">:_%</a>.</div>
<div class="old-help-para">							<a name="alternate-file"></a><code class="help-tag-right">alternate-file</code>
If there already was a current file name, then that one becomes the alternate
file name.  It can be used with "#" on the command line <a href="/neovim-docs-web/en/cmdline#%3A_%23">:_#</a> and you can use
the <a href="/neovim-docs-web/en/editing#CTRL-%5E">CTRL-^</a> command to toggle between the current and the alternate file.
However, the alternate file name is not changed when <a href="/neovim-docs-web/en/editing#%3Akeepalt">:keepalt</a> is used.
An alternate file name is remembered for each window.</div>
<div class="old-help-para">							<a name="%3Akeepalt"></a><code class="help-tag-right">:keepalt</code> <a name="%3Akeepa"></a><code class="help-tag">:keepa</code>
:keepalt <code>{cmd}</code>		Execute <code>{cmd}</code> while keeping the current alternate file
			name.  Note that commands invoked indirectly (e.g.,
			with a function) may still set the alternate file
			name.</div>
<div class="old-help-para">All file names are remembered in the buffer list.  When you enter a file name,
for editing (e.g., with ":e filename") or writing (e.g., with ":w filename"),
the file name is added to the list.  You can use the buffer list to remember
which files you edited and to quickly switch from one file to another (e.g.,
to copy text) with the <a href="/neovim-docs-web/en/editing#CTRL-%5E">CTRL-^</a> command.  First type the number of the file
and then hit <code>CTRL-^</code>.</div>
<div class="old-help-para">CTRL-G		or				<a name="CTRL-G"></a><code class="help-tag-right">CTRL-G</code> <a name="%3Af"></a><code class="help-tag">:f</code> <a name="%3Afi"></a><code class="help-tag">:fi</code> <a name="%3Afile"></a><code class="help-tag">:file</code>
:f[ile]			Prints the current file name (as typed, unless ":cd"
			was used), the cursor position (unless the <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a>
			option is set), and the file status (readonly,
			modified, read errors, new file).  See the <a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a>
			option about how to make this message shorter.</div>
<div class="old-help-para">:f[ile]!		like <a href="/neovim-docs-web/en/editing#%3Afile">:file</a>, but don't truncate the name even when
			<a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a> indicates this.</div>
<div class="old-help-para"><code>{count}</code><code>CTRL-G</code>		Like <code>CTRL-G</code>, but prints the current file name with
			full path.  If the count is higher than 1 the current
			buffer number is also given.</div>
<div class="old-help-para">					<a name="g_CTRL-G"></a><code class="help-tag-right">g_CTRL-G</code> <a name="word-count"></a><code class="help-tag">word-count</code> <a name="byte-count"></a><code class="help-tag">byte-count</code>
g <code>CTRL-G</code>		Prints the current position of the cursor in five
			ways: Column, Line, Word, Character and Byte.  If the
			number of Characters and Bytes is the same then the
			Character position is omitted.</div>
<div class="old-help-para">			If there are characters in the line that take more
			than one position on the screen (<code>&lt;Tab&gt;</code> or special
			character), or characters using more than one byte per
			column (characters above 0x7F when <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is
			utf-8), both the byte column and the screen column are
			shown, separated by a dash.</div>
<div class="old-help-para">			Also see the <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a> option and the <a href="/neovim-docs-web/en/builtin#wordcount()">wordcount()</a>
			function.</div>
<div class="old-help-para">							<a name="v_g_CTRL-G"></a><code class="help-tag-right">v_g_CTRL-G</code>
<code>{Visual}</code>g <code>CTRL-G</code>	Similar to "g <code>CTRL-G</code>", but Word, Character, Line, and
			Byte counts for the visually selected region are
			displayed.
			In Blockwise mode, Column count is also shown.  (For
			<code>{Visual}</code> see <a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>.)</div>
<div class="old-help-para">							<a name="%3Afile_f"></a><code class="help-tag-right">:file_f</code>
:f[ile][!] <code>{name}</code>	Sets the current file name to <code>{name}</code>.  The optional !
			avoids truncating the message, as with <a href="/neovim-docs-web/en/editing#%3Afile">:file</a>.
			If the buffer did have a name, that name becomes the
			<a href="/neovim-docs-web/en/editing#alternate-file">alternate-file</a> name.  An unlisted buffer is created
			to hold the old name.
							<a name="%3A0file"></a><code class="help-tag-right">:0file</code>
:0f[ile][!]		Remove the name of the current buffer.  The optional !
			avoids truncating the message, as with <a href="/neovim-docs-web/en/editing#%3Afile">:file</a>.</div>
<div class="old-help-para">:buffers
:files
:ls			List all the currently known file names.  See
			<a href="/neovim-docs-web/en/windows#windows.txt">windows.txt</a> <a href="/neovim-docs-web/en/windows#%3Afiles">:files</a> <a href="/neovim-docs-web/en/windows#%3Abuffers">:buffers</a> <a href="/neovim-docs-web/en/windows#%3Als">:ls</a>.</div>
<div class="old-help-para">Vim will remember the full path name of a file name that you enter.  In most
cases when the file name is displayed only the name you typed is shown, but
the full path name is being used if you used the ":cd" command <a href="/neovim-docs-web/en/editing#%3Acd">:cd</a>.</div>
<div class="old-help-para">							<a name="home-replace"></a><code class="help-tag-right">home-replace</code>
If the environment variable $HOME is set, and the file name starts with that
string, it is often displayed with HOME replaced with "~".  This was done to
keep file names short.  When reading or writing files the full name is still
used, the "~" is only used when displaying file names.  When replacing the
file name would result in just "~", "~/" is used instead (to avoid confusion
between options set to $HOME with <a href="/neovim-docs-web/en/options#'backupext'">'backupext'</a> set to "~").</div>
<div class="old-help-para">When writing the buffer, the default is to use the current file name.  Thus
when you give the "ZZ" or ":wq" command, the original file will be
overwritten.  If you do not want this, the buffer can be written into another
file by giving a file name argument to the ":write" command.  For example:<pre>vim testfile
[change the buffer with editor commands]
:w newfile
:q</pre>
This will create a file "newfile", that is a modified copy of "testfile".
The file "testfile" will remain unchanged.  Anyway, if the <a href="/neovim-docs-web/en/options#'backup'">'backup'</a> option is
set, Vim renames or copies the original file before it will be overwritten.
You can use this file if you discover that you need the original file.  See
also the <a href="/neovim-docs-web/en/options#'patchmode'">'patchmode'</a> option.  The name of the backup file is normally the same
as the original file with <a href="/neovim-docs-web/en/options#'backupext'">'backupext'</a> appended.  The default "~" is a bit
strange to avoid accidentally overwriting existing files.  If you prefer ".bak"
change the <a href="/neovim-docs-web/en/options#'backupext'">'backupext'</a> option.  The backup file can be placed in another
directory by setting <a href="/neovim-docs-web/en/options#'backupdir'">'backupdir'</a>.</div>
<div class="old-help-para">When you started editing without giving a file name, "No File" is displayed in
messages.  If the ":write" command is used with a file name argument, the file
name for the current file is set to that file name.  This only happens when
the 'F' flag is included in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> (by default it is included) <a href="/neovim-docs-web/en/options#cpo-F">cpo-F</a>.
This is useful when entering text in an empty buffer and then writing it to a
file.  If <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> contains the 'f' flag (by default it is NOT included)
<a href="/neovim-docs-web/en/options#cpo-f">cpo-f</a> the file name is set for the ":read file" command.  This is useful
when starting Vim without an argument and then doing ":read file" to start
editing a file.
When the file name was set and <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> is empty the filetype detection
autocommands will be triggered.
							<a name="not-edited"></a><code class="help-tag-right">not-edited</code>
Because the file name was set without really starting to edit that file, you
are protected from overwriting that file.  This is done by setting the
"notedited" flag.  You can see if this flag is set with the <code>CTRL-G</code> or ":file"
command.  It will include "[Not edited]" when the "notedited" flag is set.
When writing the buffer to the current file name (with ":w!"), the "notedited"
flag is reset.</div>
<div class="old-help-para">							<a name="abandon"></a><code class="help-tag-right">abandon</code>
Vim remembers whether you have changed the buffer.  You are protected from
losing the changes you made.  If you try to quit without writing, or want to
start editing another file, Vim will refuse this.  In order to overrule this
protection, add a '!' to the command.  The changes will then be lost.  For
example: ":q" will not work if the buffer was changed, but ":q!" will.  To see
whether the buffer was changed use the "CTRL-G" command.  The message includes
the string "[Modified]" if the buffer has been changed, or "+" if the 'm' flag
is in <a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a>.</div>
<div class="old-help-para">If you want to automatically save the changes without asking, switch on the
<a href="/neovim-docs-web/en/options#'autowriteall'">'autowriteall'</a> option.  <a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a> is the associated Vi-compatible option
that does not work for all commands.</div>
<div class="old-help-para">If you want to keep the changed buffer without saving it, switch on the
<a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> option.  See <a href="/neovim-docs-web/en/windows#hidden-buffer">hidden-buffer</a>.  Some commands work like this even when
<a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> is not set, check the help for the command.</div>
<div class="old-help-para"><h2 class="help-heading">2. Editing a file<span class="help-heading-tags">					<a name="edit-a-file"></a><span class="help-tag">edit-a-file</span></span></h2></div>
<div class="old-help-para">							<a name="%3Ae"></a><code class="help-tag-right">:e</code> <a name="%3Aedit"></a><code class="help-tag">:edit</code> <a name="reload"></a><code class="help-tag">reload</code>
:e[dit] [++opt] [+cmd]	Edit the current file.  This is useful to re-edit the
			current file, when it has been changed outside of Vim.
			This fails when changes have been made to the current
			buffer and <a href="/neovim-docs-web/en/options#'autowriteall'">'autowriteall'</a> isn't set or the file can't
			be written.
			Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">							<a name="%3Aedit%21"></a><code class="help-tag-right">:edit!</code> <a name="discard"></a><code class="help-tag">discard</code>
:e[dit]! [++opt] [+cmd]
			Edit the current file always.  Discard any changes to
			the current buffer.  This is useful if you want to
			start all over again.
			Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">							<a name="%3Aedit_f"></a><code class="help-tag-right">:edit_f</code>
:e[dit] [++opt] [+cmd] <code>{file}</code>
			Edit <code>{file}</code>.
			This fails when changes have been made to the current
			buffer, unless <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> is set or <a href="/neovim-docs-web/en/options#'autowriteall'">'autowriteall'</a> is
			set and the file can be written.
			Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">							<a name="%3Aedit%21_f"></a><code class="help-tag-right">:edit!_f</code>
:e[dit]! [++opt] [+cmd] <code>{file}</code>
			Edit <code>{file}</code> always.  Discard any changes to the
			current buffer.
			Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.
							<a name="%3Aedit_%23"></a><code class="help-tag-right">:edit_#</code> <a name="%3Ae%23"></a><code class="help-tag">:e#</code>
:e[dit] [++opt] [+cmd] #[count]
			Edit the [count]th buffer (as shown by <a href="/neovim-docs-web/en/windows#%3Afiles">:files</a>).
			This command does the same as [count] <code>CTRL-^</code>.  But ":e
			#" doesn't work if the alternate buffer doesn't have a
			file name, while <code>CTRL-^</code> still works then.
			Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">							<a name="%3Aene"></a><code class="help-tag-right">:ene</code> <a name="%3Aenew"></a><code class="help-tag">:enew</code>
:ene[w]			Edit a new, unnamed buffer.  This fails when changes
			have been made to the current buffer, unless <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a>
			is set or <a href="/neovim-docs-web/en/options#'autowriteall'">'autowriteall'</a> is set and the file can be
			written.
			If <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> is not empty, the first format given
			will be used for the new buffer.  If <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> is
			empty, the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> of the current buffer is used.</div>
<div class="old-help-para">							<a name="%3Aene%21"></a><code class="help-tag-right">:ene!</code> <a name="%3Aenew%21"></a><code class="help-tag">:enew!</code>
:ene[w]!		Edit a new, unnamed buffer.  Discard any changes to
			the current buffer.
			Set <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> like <a href="/neovim-docs-web/en/editing#%3Aenew">:enew</a>.</div>
<div class="old-help-para">							<a name="%3Afin"></a><code class="help-tag-right">:fin</code> <a name="%3Afind"></a><code class="help-tag">:find</code>
:fin[d][!] [++opt] [+cmd] <code>{file}</code>
			Find <code>{file}</code> in <a href="/neovim-docs-web/en/options#'path'">'path'</a> and then <a href="/neovim-docs-web/en/editing#%3Aedit">:edit</a> it.</div>
<div class="old-help-para">:{count}fin[d][!] [++opt] [+cmd] <code>{file}</code>
			Just like ":find", but use the <code>{count}</code> match in
			<a href="/neovim-docs-web/en/options#'path'">'path'</a>.  Thus ":2find file" will find the second
			"file" found in <a href="/neovim-docs-web/en/options#'path'">'path'</a>.  When there are fewer matches
			for the file in <a href="/neovim-docs-web/en/options#'path'">'path'</a> than asked for, you get an
			error message.</div>
<div class="old-help-para">							<a name="%3Aex"></a><code class="help-tag-right">:ex</code>
:ex [++opt] [+cmd] [file]
			Same as <a href="/neovim-docs-web/en/editing#%3Aedit">:edit</a>.</div>
<div class="old-help-para">							<a name="%3Avi"></a><code class="help-tag-right">:vi</code> <a name="%3Avisual"></a><code class="help-tag">:visual</code>
:vi[sual][!] [++opt] [+cmd] [file]
			When used in Ex mode: Leave <a href="/neovim-docs-web/en/intro#Ex-mode">Ex-mode</a>, go back to
			Normal mode.  Otherwise same as <a href="/neovim-docs-web/en/editing#%3Aedit">:edit</a>.</div>
<div class="old-help-para">							<a name="%3Avie"></a><code class="help-tag-right">:vie</code> <a name="%3Aview"></a><code class="help-tag">:view</code>
:vie[w][!] [++opt] [+cmd] file
			When used in Ex mode: Leave <a href="/neovim-docs-web/en/intro#Ex-mode">Ex-mode</a>, go back to
			Normal mode.  Otherwise same as <a href="/neovim-docs-web/en/editing#%3Aedit">:edit</a>, but set
			<a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a> option for this buffer.</div>
<div class="old-help-para">							<a name="CTRL-%5E"></a><code class="help-tag-right">CTRL-^</code> <a name="CTRL-6"></a><code class="help-tag">CTRL-6</code>
<code>CTRL-^</code>			Edit the alternate file.  Mostly the alternate file is
			the previously edited file.  This is a quick way to
			toggle between two files.  It is equivalent to ":e #",
			except that it also works when there is no file name.</div>
<div class="old-help-para">			If the <a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a> or <a href="/neovim-docs-web/en/options#'autowriteall'">'autowriteall'</a> option is on and
			the buffer was changed, write it.
			Mostly the ^ character is positioned on the 6 key,
			pressing CTRL and 6 then gets you what we call <code>CTRL-^</code>.
			But on some non-US keyboards <code>CTRL-^</code> is produced in
			another way.</div>
<div class="old-help-para"><code>{count}</code><code>CTRL-^</code>		Edit [count]th file in the buffer list (equivalent to
			":e #[count]").  This is a quick way to switch between
			files.
			See <a href="/neovim-docs-web/en/editing#CTRL-%5E">CTRL-^</a> above for further details.</div>
<div class="old-help-para">							<a name="gf"></a><code class="help-tag-right">gf</code> <a name="E446"></a><code class="help-tag">E446</code> <a name="E447"></a><code class="help-tag">E447</code>
[count]gf		Edit the file whose name is under or after the cursor.
			Mnemonic: "goto file".
			Uses the <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> option to find out which characters
			are supposed to be in a file name.  Trailing
			punctuation characters ".,:;!" are ignored. Escaped
			spaces "\ " are reduced to a single space.
			Uses the <a href="/neovim-docs-web/en/options#'path'">'path'</a> option as a list of directory names to
			look for the file.  See the <a href="/neovim-docs-web/en/options#'path'">'path'</a> option for details
			about relative directories and wildcards.
			Uses the <a href="/neovim-docs-web/en/options#'suffixesadd'">'suffixesadd'</a> option to check for file names
			with a suffix added.
			If the file can't be found, <a href="/neovim-docs-web/en/options#'includeexpr'">'includeexpr'</a> is used to
			modify the name and another attempt is done.
			If a [count] is given, the count'th file that is found
			in the <a href="/neovim-docs-web/en/options#'path'">'path'</a> is edited.
			This command fails if Vim refuses to <a href="/neovim-docs-web/en/editing#abandon">abandon</a> the
			current file.
			If you want to edit the file in a new window use
			<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-F">CTRL-W_CTRL-F</a>.
			If you do want to edit a new file, use:<pre>:e &lt;cfile&gt;</pre></div>
<div class="old-help-para">			To make gf always work like that:<pre>:map gf :e &lt;cfile&gt;&lt;CR&gt;</pre></div>
<div class="old-help-para">			If the name is a hypertext link, that looks like
			"type://machine/path", you need the <a href="/neovim-docs-web/en/pi_netrw#netrw">netrw</a> plugin.
			For Unix the '~' character is expanded, like in
			"~user/file".  Environment variables are expanded too
			<a href="/neovim-docs-web/en/options#expand-env">expand-env</a>.</div>
<div class="old-help-para">							<a name="v_gf"></a><code class="help-tag-right">v_gf</code>
<code>{Visual}</code>[count]gf	Same as "gf", but the highlighted text is used as the
			name of the file to edit.  <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> is ignored.
			Leading blanks are skipped, otherwise all blanks and
			special characters are included in the file name.
			(For <code>{Visual}</code> see <a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>.)</div>
<div class="old-help-para">							<a name="gF"></a><code class="help-tag-right">gF</code>
[count]gF		Same as "gf", except if a number follows the file
			name, then the cursor is positioned on that line in
			the file.
			The file name and the number must be separated by a
			non-filename (see <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a>) and non-numeric
			character. " line " is also recognized, like it is
			used in the output of <code>:verbose command UserCmd</code>
			White space between the filename, the separator and
			the number are ignored.
			Examples:
<div class="help-column_heading">				eval.c:10</div><div class="help-column_heading">				eval.c @ 20</div><div class="help-column_heading">				eval.c (30)</div><div class="help-column_heading">				eval.c 40</div></div>
<div class="old-help-para">							<a name="v_gF"></a><code class="help-tag-right">v_gF</code>
<code>{Visual}</code>[count]gF	Same as "v_gf".</div>
<div class="old-help-para">These commands are used to start editing a single file.  This means that the
file is read into the buffer and the current file name is set.  The file that
is opened depends on the current directory, see <a href="/neovim-docs-web/en/editing#%3Acd">:cd</a>.</div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/insert#read-messages">read-messages</a> for an explanation of the message that is given after the
file has been read.</div>
<div class="old-help-para">You can use the ":e!" command if you messed up the buffer and want to start
all over again.  The ":e" command is only useful if you have changed the
current file name.</div>
<div class="old-help-para">							<a name="%3Afilename"></a><code class="help-tag-right">:filename</code> <a name="%7Bfile%7D"></a><code class="help-tag">{file}</code>
Besides the things mentioned here, more special items for where a filename is
expected are mentioned at <a href="/neovim-docs-web/en/cmdline#cmdline-special">cmdline-special</a>.</div>
<div class="old-help-para">Note for systems other than Unix: When using a command that accepts a single
file name (like ":edit file") spaces in the file name are allowed, but
trailing spaces are ignored.  This is useful on systems that regularly embed
spaces in file names (like MS-Windows).  Example: The command ":e   Long File
Name " will edit the file "Long File Name".  When using a command that accepts
more than one file name (like ":next file1 file2") embedded spaces must be
escaped with a backslash.</div>
<div class="old-help-para">						<a name="wildcard"></a><code class="help-tag-right">wildcard</code> <a name="wildcards"></a><code class="help-tag">wildcards</code>
Wildcards in <code>{file}</code> are expanded, but as with file completion, <a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a>
and <a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> apply.  Which wildcards are supported depends on the system.
These are the common ones:
	?	matches one character
	*	matches anything, including nothing
	**	matches anything, including nothing, recurses into directories
	[abc]	match 'a', 'b' or 'c'</div>
<div class="old-help-para">To avoid the special meaning of the wildcards prepend a backslash.  However,
on MS-Windows the backslash is a path separator and "path\[abc]" is still seen
as a wildcard when "[" is in the <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> option.  A simple way to avoid this
is to use "path\[[]abc]", this matches the file "path\[abc]".</div>
<div class="old-help-para">					<a name="starstar-wildcard"></a><code class="help-tag-right">starstar-wildcard</code>
Expanding "**" is possible on Unix, Win32, macOS and a few other systems.
This allows searching a directory tree.  This goes up to 100 directories deep.
Note there are some commands where this works slightly differently, see
<a href="/neovim-docs-web/en/editing#file-searching">file-searching</a>.
Example:<pre>:n **/*.txt</pre>
Finds files:
<div class="help-column_heading">	aaa.txt</div><div class="help-column_heading">	subdir/bbb.txt</div><div class="help-column_heading">	a/b/c/d/ccc.txt</div>When non-wildcard characters are used right before or after "**" these are
only matched in the top directory.  They are not used for directories further
down in the tree. For example:<pre>:n /usr/inc**/types.h</pre>
Finds files:
<div class="help-column_heading">	/usr/include/types.h</div><div class="help-column_heading">	/usr/include/sys/types.h</div><div class="help-column_heading">	/usr/inc/old/types.h</div>Note that the path with "/sys" is included because it does not need to match
"/inc".  Thus it's like matching "/usr/inc*/*/*...", not
"/usr/inc*/inc*/inc*".</div>
<div class="old-help-para">					<a name="backtick-expansion"></a><code class="help-tag-right">backtick-expansion</code> <a name="%60-expansion"></a><code class="help-tag">`-expansion</code>
On Unix and a few other systems you can also use backticks for the file name
argument, for example:<pre>:next `find . -name ver\\*.c -print`
:view `ls -t *.patch  \| head -n1`</pre>
Vim will run the command in backticks using the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> and use the standard
output as argument for the given Vim command (error messages from the shell
command will be discarded).
To see what shell command Vim is running, set the <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> option to 4. When
the shell command returns a non-zero exit code, an error message will be
displayed and the Vim command will be aborted. To avoid this make the shell
always return zero like so:<pre>:next `find . -name ver\\*.c -print \|\| true`</pre>
The backslashes before the star are required to prevent the shell from
expanding "ver*.c" prior to execution of the find program.  The backslash
before the shell pipe symbol "|" prevents Vim from parsing it as command
termination.
This also works for most other systems, with the restriction that the
backticks must be around the whole item.  It is not possible to have text
directly before the first or just after the last backtick.</div>
<div class="old-help-para">							<a name="%60%3D"></a><code class="help-tag-right">`=</code>
You can have the backticks expanded as a Vim expression, instead of as an
external command, by putting an equal sign right after the first backtick,
e.g.:<pre>:e `=tempname()`</pre>
The expression can contain just about anything, thus this can also be used to
avoid the special meaning of '"', '|', '%' and '#'.  However, <a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a>
does apply like to other wildcards.</div>
<div class="old-help-para">Environment variables in the expression are expanded when evaluating the
expression, thus this works:<pre>:e `=$HOME .. '/.vimrc'`</pre>
This uses $HOME inside a string and it will be used literally, most likely not
what you intended:<pre>:e `='$HOME' .. '/.vimrc'`</pre>
If the expression returns a string then names are to be separated with line
breaks.  When the result is a <a href="/neovim-docs-web/en/eval#List">List</a> then each item is used as a name.  Line
breaks also separate names.
Note that such expressions are only supported in places where a filename is
expected as an argument to an Ex-command.</div>
<div class="old-help-para">							<a name="%2B%2Bopt"></a><code class="help-tag-right">++opt</code> <a name="%5B%2B%2Bopt%5D"></a><code class="help-tag">[++opt]</code>
The [++opt] argument can be used to force the value of <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>,
<a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> or <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> to a value for one command, and to specify the
behavior for bad characters.  The form is:<pre>++{optname}</pre>
Or:<pre>++{optname}={value}</pre>
Where <code>{optname}</code> is one of:	    <a name="%2B%2Bff"></a><code class="help-tag-right">++ff</code> <a name="%2B%2Benc"></a><code class="help-tag">++enc</code> <a name="%2B%2Bbin"></a><code class="help-tag">++bin</code> <a name="%2B%2Bnobin"></a><code class="help-tag">++nobin</code> <a name="%2B%2Bedit"></a><code class="help-tag">++edit</code>
    ff     or  fileformat   overrides <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>
    enc    or  encoding	    overrides <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a>
    bin    or  binary	    sets <a href="/neovim-docs-web/en/options#'binary'">'binary'</a>
    nobin  or  nobinary	    resets <a href="/neovim-docs-web/en/options#'binary'">'binary'</a>
    bad			    specifies behavior for bad characters
    edit		    for <a href="/neovim-docs-web/en/insert#%3Aread">:read</a> only: keep option values as if editing
			    a file
    p			    creates the parent directory (or directories) of
			    a filename if they do not exist</div>
<div class="old-help-para"><code>{value}</code> cannot contain white space.  It can be any valid value for these
options.  Examples:<pre>:e ++ff=unix</pre>
This edits the same file again with <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> set to "unix".<pre>:w ++enc=latin1 newfile</pre>
This writes the current buffer to "newfile" in latin1 format.</div>
<div class="old-help-para">The message given when writing a file will show "[converted]" when
<a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> or the value specified with ++enc differs from <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>.</div>
<div class="old-help-para">There may be several ++opt arguments, separated by white space.  They must all
appear before any <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a> argument.</div>
<div class="old-help-para">								<a name="%2B%2Bbad"></a><code class="help-tag-right">++bad</code>
The argument of "++bad=" specifies what happens with characters that can't be
converted and illegal bytes.  It can be one of three things:
    ++bad=X      A single-byte character that replaces each bad character.
    ++bad=keep   Keep bad characters without conversion.  Note that this may
		 result in illegal bytes in your text!
    ++bad=drop   Remove the bad characters.</div>
<div class="old-help-para">The default is like "++bad=?": Replace each bad character with a question
mark.  In some places an inverted question mark is used (0xBF).</div>
<div class="old-help-para">Note that not all commands use the ++bad argument, even though they do not
give an error when you add it.  E.g. <a href="/neovim-docs-web/en/editing#%3Awrite">:write</a>.</div>
<div class="old-help-para">Note that when reading, the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> and <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> options will be
set to the used format.  When writing this doesn't happen, thus a next write
will use the old value of the option.  Same for the <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> option.</div>
<div class="old-help-para">							<a name="%2Bcmd"></a><code class="help-tag-right">+cmd</code> <a name="%5B%2Bcmd%5D"></a><code class="help-tag">[+cmd]</code>
The [+cmd] argument can be used to position the cursor in the newly opened
file, or execute any other command:
	+		Start at the last line.
	+{num}		Start at line <code>{num}</code>.
	+/{pat}		Start at first line containing <code>{pat}</code>.
	+{command}	Execute <code>{command}</code> after opening the new file.
			<code>{command}</code> is any Ex command.
To include a white space in the <code>{pat}</code> or <code>{command}</code>, precede it with a
backslash.  Double the number of backslashes.<pre>:edit  +/The\ book             file
:edit  +/dir\ dirname\\      file
:edit  +set\ dir=c:\\\\temp  file</pre>
Note that in the last example the number of backslashes is halved twice: Once
for the "+cmd" argument and once for the ":set" command.</div>
<div class="old-help-para">							<a name="file-formats"></a><code class="help-tag-right">file-formats</code>
The <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> option sets the <code>&lt;EOL&gt;</code> style for a file:
<div class="help-column_heading"><a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>    characters	   name</div>  "dos"		<code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> or <code>&lt;NL&gt;</code>   DOS format		<a name="DOS-format"></a><code class="help-tag-right">DOS-format</code>
  "unix"	<code>&lt;NL&gt;</code>		   Unix format		<a name="Unix-format"></a><code class="help-tag-right">Unix-format</code>
  "mac"		<code>&lt;CR&gt;</code>		   Mac format		<a name="Mac-format"></a><code class="help-tag-right">Mac-format</code></div>
<div class="old-help-para">When reading a file, the mentioned characters are interpreted as the <code>&lt;EOL&gt;</code>.
In DOS format (default for Windows), <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> and <code>&lt;NL&gt;</code> are both interpreted as
the <code>&lt;EOL&gt;</code>. Note that when writing the file in DOS format, <code>&lt;CR&gt;</code> characters will
be added for each single <code>&lt;NL&gt;</code>.  Also see <a href="/neovim-docs-web/en/insert#file-read">file-read</a>.</div>
<div class="old-help-para">When writing a file, the mentioned characters are used for <code>&lt;EOL&gt;</code>.  For DOS
format <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> is used.  Also see <a href="/neovim-docs-web/en/editing#DOS-format-write">DOS-format-write</a>.</div>
<div class="old-help-para">You can read a file in DOS format and write it in Unix format.  This will
replace all <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> pairs by <code>&lt;NL&gt;</code> (assuming <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> includes "dos"):<pre>:e file
:set fileformat=unix
:w</pre>
If you read a file in Unix format and write with DOS format, all <code>&lt;NL&gt;</code>
characters will be replaced with <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> (assuming <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> includes
"unix"):<pre>:e file
:set fileformat=dos
:w</pre>
If you start editing a new file and the <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> option is not empty
(which is the default), Vim will try to detect whether the lines in the file
are separated by the specified formats.  When set to "unix,dos", Vim will
check for lines with a single <code>&lt;NL&gt;</code> (as used on Unix) or by a <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> pair
(MS-Windows).  Only when ALL lines end in <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code>, <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is
set to "dos", otherwise it is set to "unix".  When <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> includes
"mac", and no <code>&lt;NL&gt;</code> characters are found in the file, <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is set to
"mac".</div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> option is set to "dos" on non-MS-Windows systems the
message "[dos format]" is shown to remind you that something unusual is
happening.  On MS-Windows systems you get the message "[unix format]" if
<a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is set to "unix".  On all systems but the Macintosh you get the
message "[mac format]" if <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is set to "mac".</div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> option is empty and DOS format is used, but while reading
a file some lines did not end in <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code>, "[CR missing]" will be included in
the file message.
If the <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> option is empty and Mac format is used, but while reading
a file a <code>&lt;NL&gt;</code> was found, "[NL missing]" will be included in the file message.</div>
<div class="old-help-para">If the new file does not exist, the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> of the current buffer is used
when <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> is empty.  Otherwise the first format from <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> is
used for the new file.</div>
<div class="old-help-para">Before editing binary, executable or Vim script files you should set the
<a href="/neovim-docs-web/en/options#'binary'">'binary'</a> option.  A simple way to do this is by starting Vim with the "-b"
option.  This will avoid the use of <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>.  Without this you risk that
single <code>&lt;NL&gt;</code> characters are unexpectedly replaced with <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code>.</div>
<div class="old-help-para"><h3 class="help-heading">END OF LINE AND END OF FILE<span class="help-heading-tags">				<a name="eol-and-eof"></a><span class="help-tag">eol-and-eof</span></span></h3></div>
<div class="old-help-para">Vim has several options to control the file format:
	<a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>	the <code>&lt;EOL&gt;</code> style: Unix, DOS, Mac
	<a href="/neovim-docs-web/en/options#'endofline'">'endofline'</a>	whether the last line ends with a <code>&lt;EOL&gt;</code>
	<a href="/neovim-docs-web/en/options#'endoffile'">'endoffile'</a>	whether the file ends with a <code>CTRL-Z</code>
	<a href="/neovim-docs-web/en/options#'fixendofline'">'fixendofline'</a>	whether to fix eol and eof</div>
<div class="old-help-para">The first three values are normally detected automatically when reading the
file and are used when writing the text to a file.  While editing the buffer
it looks like every line has a line ending and the <code>CTRL-Z</code> isn't there (an
exception is when <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> is set, it works differently then).</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'fixendofline'">'fixendofline'</a> option can be used to choose what to write.  You can also
change the option values to write the file differently than how it was read.</div>
<div class="old-help-para">Here are some examples how to use them.</div>
<div class="old-help-para">If you want files in Unix format (every line NL terminated):<pre>setl ff=unix fixeol</pre>
You should probably do this on any Unix-like system.  Also modern MS-Windows
systems tend to work well with this.  It is recommended to always use this
format for Vim scripts.</div>
<div class="old-help-para">If you want to use an old MS-DOS file in a modern environment, fixing line
endings and dropping <code>CTRL-Z</code>, but keeping the <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> style <code>&lt;EOL&gt;</code>:<pre>setl ff=dos fixeol</pre>
This is useful for many MS-Windows programs, they regularly expect the
<code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> line endings.</div>
<div class="old-help-para">If you want to drop the final <code>&lt;EOL&gt;</code> and add a final <code>CTRL-Z</code> (e.g. for an old
system like CP/M):<pre>setl ff=dos nofixeol noeol eof</pre>
If you want to preserve the fileformat exactly as-is, including any final
<code>&lt;EOL&gt;</code> and final <code>CTRL-Z</code>:<pre>setl nofixeol</pre>
<h2 class="help-heading">3. The argument list<span class="help-heading-tags">				<a name="argument-list"></a><span class="help-tag">argument-list</span> <a name="arglist"></a><span class="help-tag">arglist</span></span></h2></div>
<div class="old-help-para">If you give more than one file name when starting Vim, this list is remembered
as the argument list.  You can jump to each file in this list.</div>
<div class="old-help-para">Do not confuse this with the buffer list, which you can see with the
<a href="/neovim-docs-web/en/windows#%3Abuffers">:buffers</a> command.  The argument list was already present in Vi, the buffer
list is new in Vim.  Every file name in the argument list will also be present
in the buffer list (unless it was deleted with <a href="/neovim-docs-web/en/windows#%3Abdel">:bdel</a> or <a href="/neovim-docs-web/en/windows#%3Abwipe">:bwipe</a>).  But it's
common that names in the buffer list are not in the argument list.</div>
<div class="old-help-para">This subject is introduced in section <a href="/neovim-docs-web/en/usr_07#07.2">07.2</a> of the user manual.</div>
<div class="old-help-para">There is one global argument list, which is used for all windows by default.
It is possible to create a new argument list local to a window, see
<a href="/neovim-docs-web/en/editing#%3Aarglocal">:arglocal</a>.</div>
<div class="old-help-para">You can use the argument list with the following commands, and with the
expression functions <a href="/neovim-docs-web/en/builtin#argc()">argc()</a> and <a href="/neovim-docs-web/en/builtin#argv()">argv()</a>.  These all work on the argument
list of the current window.</div>
<div class="old-help-para">							<a name="%3Aar"></a><code class="help-tag-right">:ar</code> <a name="%3Aarg"></a><code class="help-tag">:arg</code> <a name="%3Aargs"></a><code class="help-tag">:args</code>
:ar[gs]			Print the argument list, with the current file in
			square brackets.</div>
<div class="old-help-para">:ar[gs] [++opt] [+cmd] <code>{arglist}</code>			<a name="%3Aargs_f"></a><code class="help-tag-right">:args_f</code>
			Define <code>{arglist}</code> as the new argument list and edit
			the first one.  This fails when changes have been made
			and Vim does not want to <a href="/neovim-docs-web/en/editing#abandon">abandon</a> the current buffer.
			Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:ar[gs]! [++opt] [+cmd] <code>{arglist}</code>			<a name="%3Aargs_f%21"></a><code class="help-tag-right">:args_f!</code>
			Define <code>{arglist}</code> as the new argument list and edit
			the first one.  Discard any changes to the current
			buffer.
			Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[count]arge[dit][!] [++opt] [+cmd] <code>{name}</code> ..		<a name="%3Aarge"></a><code class="help-tag-right">:arge</code> <a name="%3Aargedit"></a><code class="help-tag">:argedit</code>
			Add <code>{name}</code>s to the argument list and edit it.
			When <code>{name}</code> already exists in the argument list, this
			entry is edited.
			This is like using <a href="/neovim-docs-web/en/editing#%3Aargadd">:argadd</a> and then <a href="/neovim-docs-web/en/editing#%3Aedit">:edit</a>.
			Spaces in filenames have to be escaped with "\".
			[count] is used like with <a href="/neovim-docs-web/en/editing#%3Aargadd">:argadd</a>.
			If the current file cannot be <a href="/neovim-docs-web/en/editing#abandon">abandon</a>ed <code>{name}</code>s will
			still be added to the argument list, but won't be
			edited. No check for duplicates is done.
			Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[count]arga[dd] <code>{name}</code> ..			<a name="%3Aarga"></a><code class="help-tag-right">:arga</code> <a name="%3Aargadd"></a><code class="help-tag">:argadd</code> <a name="E479"></a><code class="help-tag">E479</code>
:[count]arga[dd]
			Add the <code>{name}</code>s to the argument list.  When <code>{name}</code> is
			omitted add the current buffer name to the argument
			list.
			If [count] is omitted, the <code>{name}</code>s are added just
			after the current entry in the argument list.
			Otherwise they are added after the [count]'th file.
			If the argument list is "a b c", and "b" is the
			current argument, then these commands result in:
<div class="help-column_heading">				command		new argument list</div>				:argadd x	a b x c
				:0argadd x	x a b c
				:1argadd x	a x b c
				:$argadd x	a b c x
			And after the last one:
				:+2argadd y	a b c x y
			There is no check for duplicates, it is possible to
			add a file to the argument list twice.  You can use
			<a href="/neovim-docs-web/en/editing#%3Aargdedupe">:argdedupe</a> to fix it afterwards:<pre>:argadd *.txt | argdedupe</pre></div>
<div class="old-help-para">			The currently edited file is not changed.
			Note: you can also use this method:<pre>:args ## x</pre></div>
<div class="old-help-para">			This will add the "x" item and sort the new list.</div>
<div class="old-help-para">:argded[upe]					<a name="%3Aargded"></a><code class="help-tag-right">:argded</code> <a name="%3Aargdedupe"></a><code class="help-tag">:argdedupe</code>
			Remove duplicate filenames from the argument list.
			If your current file is a duplicate, your current file
			will change to the original file index.</div>
<div class="old-help-para">:argd[elete] <code>{pattern}</code> ..		<a name="%3Aargd"></a><code class="help-tag-right">:argd</code> <a name="%3Aargdelete"></a><code class="help-tag">:argdelete</code> <a name="E480"></a><code class="help-tag">E480</code> <a name="E610"></a><code class="help-tag">E610</code>
			Delete files from the argument list that match the
			<code>{pattern}</code>s.  <code>{pattern}</code> is used like a file pattern,
			see <a href="/neovim-docs-web/en/autocmd#file-pattern">file-pattern</a>.  "%" can be used to delete the
			current entry.
			This command keeps the currently edited file, also
			when it's deleted from the argument list.
			Example:<pre>:argdel *.obj</pre>
:[range]argd[elete]	Delete the [range] files from the argument list.
			Example:<pre>:10,$argdel</pre></div>
<div class="old-help-para">			Deletes arguments 10 and further, keeping 1-9.<pre>:$argd</pre></div>
<div class="old-help-para">			Deletes just the last one.<pre>:argd
:.argd</pre></div>
<div class="old-help-para">			Deletes the current argument.<pre>:%argd</pre></div>
<div class="old-help-para">			Removes all the files from the arglist.
			When the last number in the range is too high, up to
			the last argument is deleted.</div>
<div class="old-help-para">							<a name="%3Aargu"></a><code class="help-tag-right">:argu</code> <a name="%3Aargument"></a><code class="help-tag">:argument</code>
:[count]argu[ment] [count] [++opt] [+cmd]
			Edit file [count] in the argument list.  When [count]
			is omitted the current entry is used.  This fails
			when changes have been made and Vim does not want to
			<a href="/neovim-docs-web/en/editing#abandon">abandon</a> the current buffer.
			Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[count]argu[ment]! [count] [++opt] [+cmd]
			Edit file [count] in the argument list, discard any
			changes to the current buffer.  When [count] is
			omitted the current entry is used.
			Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[count]n[ext] [++opt] [+cmd]			<a name="%3An"></a><code class="help-tag-right">:n</code> <a name="%3Ane"></a><code class="help-tag">:ne</code> <a name="%3Anext"></a><code class="help-tag">:next</code> <a name="E165"></a><code class="help-tag">E165</code> <a name="E163"></a><code class="help-tag">E163</code>
			Edit [count] next file.  This fails when changes have
			been made and Vim does not want to <a href="/neovim-docs-web/en/editing#abandon">abandon</a> the
			current buffer.  Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[count]n[ext]! [++opt] [+cmd]
			Edit [count] next file, discard any changes to the
			buffer.  Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:n[ext] [++opt] [+cmd] <code>{arglist}</code>			<a name="%3Anext_f"></a><code class="help-tag-right">:next_f</code>
			Same as <a href="/neovim-docs-web/en/editing#%3Aargs_f">:args_f</a>.</div>
<div class="old-help-para">:n[ext]! [++opt] [+cmd] <code>{arglist}</code>
			Same as <a href="/neovim-docs-web/en/editing#%3Aargs_f%21">:args_f!</a>.</div>
<div class="old-help-para">:[count]N[ext] [count] [++opt] [+cmd]			<a name="%3ANext"></a><code class="help-tag-right">:Next</code> <a name="%3AN"></a><code class="help-tag">:N</code> <a name="E164"></a><code class="help-tag">E164</code>
			Edit [count] previous file in argument list.  This
			fails when changes have been made and Vim does not
			want to <a href="/neovim-docs-web/en/editing#abandon">abandon</a> the current buffer.
			Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[count]N[ext]! [count] [++opt] [+cmd]
			Edit [count] previous file in argument list.  Discard
			any changes to the buffer.  Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and
			<a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[count]prev[ious] [count] [++opt] [+cmd]		<a name="%3Aprev"></a><code class="help-tag-right">:prev</code> <a name="%3Aprevious"></a><code class="help-tag">:previous</code>
			Same as :Next.  Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">							<a name="%3Arew"></a><code class="help-tag-right">:rew</code> <a name="%3Arewind"></a><code class="help-tag">:rewind</code>
:rew[ind] [++opt] [+cmd]
			Start editing the first file in the argument list.
			This fails when changes have been made and Vim does
			not want to <a href="/neovim-docs-web/en/editing#abandon">abandon</a> the current buffer.
			Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:rew[ind]! [++opt] [+cmd]
			Start editing the first file in the argument list.
			Discard any changes to the buffer.  Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a>
			and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">							<a name="%3Afir"></a><code class="help-tag-right">:fir</code> <a name="%3Afirst"></a><code class="help-tag">:first</code>
:fir[st][!] [++opt] [+cmd]
			Other name for ":rewind".</div>
<div class="old-help-para">							<a name="%3Ala"></a><code class="help-tag-right">:la</code> <a name="%3Alast"></a><code class="help-tag">:last</code>
:la[st] [++opt] [+cmd]
			Start editing the last file in the argument list.
			This fails when changes have been made and Vim does
			not want to <a href="/neovim-docs-web/en/editing#abandon">abandon</a> the current buffer.
			Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:la[st]! [++opt] [+cmd]
			Start editing the last file in the argument list.
			Discard any changes to the buffer.  Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a>
			and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">							<a name="%3Awn"></a><code class="help-tag-right">:wn</code> <a name="%3Awnext"></a><code class="help-tag">:wnext</code>
:[count]wn[ext] [++opt]
			Write current file and start editing the [count]
			next file.  Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[count]wn[ext] [++opt] <code>{file}</code>
			Write current file to <code>{file}</code> and start editing the
			[count] next file, unless <code>{file}</code> already exists and
			the <a href="/neovim-docs-web/en/options#'writeany'">'writeany'</a> option is off.  Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and
			<a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[count]wn[ext]! [++opt] <code>{file}</code>
			Write current file to <code>{file}</code> and start editing the
			[count] next file.  Also see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a> and <a href="/neovim-docs-web/en/editing#%2Bcmd">+cmd</a>.</div>
<div class="old-help-para">:[count]wN[ext][!] [++opt] [file]		<a name="%3AwN"></a><code class="help-tag-right">:wN</code> <a name="%3AwNext"></a><code class="help-tag">:wNext</code>
:[count]wp[revious][!] [++opt] [file]		<a name="%3Awp"></a><code class="help-tag-right">:wp</code> <a name="%3Awprevious"></a><code class="help-tag">:wprevious</code>
			Same as :wnext, but go to previous file instead of
			next.</div>
<div class="old-help-para">The [count] in the commands above defaults to one.  For some commands it is
possible to use two counts.  The last one (rightmost one) is used.</div>
<div class="old-help-para">If no [+cmd] argument is present, the cursor is positioned at the last known
cursor position for the file.  If <a href="/neovim-docs-web/en/options#'startofline'">'startofline'</a> is set, the cursor will be
positioned at the first non-blank in the line, otherwise the last know column
is used.  If there is no last known cursor position the cursor will be in the
first line (the last line in Ex mode).</div>
<div class="old-help-para">							<a name="%7Barglist%7D"></a><code class="help-tag-right">{arglist}</code>
The wildcards in the argument list are expanded and the file names are sorted.
Thus you can use the command "vim.c" to edit all the C files.  From within
Vim the command ":n.c" does the same.</div>
<div class="old-help-para">White space is used to separate file names.  Put a backslash before a space or
tab to include it in a file name.  E.g., to edit the single file "foo bar":<pre>:next foo\ bar</pre>
On Unix and a few other systems you can also use backticks, for example:<pre>:next `find . -name \\*.c -print`</pre>
The backslashes before the star are required to prevent "*.c" to be expanded
by the shell before executing the find program.</div>
<div class="old-help-para">							<a name="arglist-position"></a><code class="help-tag-right">arglist-position</code>
When there is an argument list you can see which file you are editing in the
title of the window (if there is one and <a href="/neovim-docs-web/en/options#'title'">'title'</a> is on) and with the file
message you get with the "CTRL-G" command.  You will see something like
	(file 4 of 11)
If <a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a> contains 'f' it will be
	(4 of 11)
If you are not really editing the file at the current position in the argument
list it will be
	(file (4) of 11)
This means that you are position 4 in the argument list, but not editing the
fourth file in the argument list.  This happens when you do ":e file".</div>
<div class="old-help-para"><a name="_local-argument-list"></a><h3 class="help-heading">LOCAL ARGUMENT LIST</h3></div>
<div class="old-help-para">							<a name="%3Aarglocal"></a><code class="help-tag-right">:arglocal</code>
:argl[ocal]		Make a local copy of the global argument list.
			Doesn't start editing another file.</div>
<div class="old-help-para">:argl[ocal][!] [++opt] [+cmd] <code>{arglist}</code>
			Define a new argument list, which is local to the
			current window.  Works like <a href="/neovim-docs-web/en/editing#%3Aargs_f">:args_f</a> otherwise.</div>
<div class="old-help-para">							<a name="%3Aargglobal"></a><code class="help-tag-right">:argglobal</code>
:argg[lobal]		Use the global argument list for the current window.
			Doesn't start editing another file.</div>
<div class="old-help-para">:argg[lobal][!] [++opt] [+cmd] <code>{arglist}</code>
			Use the global argument list for the current window.
			Define a new global argument list like <a href="/neovim-docs-web/en/editing#%3Aargs_f">:args_f</a>.
			All windows using the global argument list will see
			this new list.</div>
<div class="old-help-para">There can be several argument lists.  They can be shared between windows.
When they are shared, changing the argument list in one window will also
change it in the other window.</div>
<div class="old-help-para">When a window is split the new window inherits the argument list from the
current window.  The two windows then share this list, until one of them uses
<a href="/neovim-docs-web/en/editing#%3Aarglocal">:arglocal</a> or <a href="/neovim-docs-web/en/editing#%3Aargglobal">:argglobal</a> to use another argument list.</div>
<div class="old-help-para"><a name="_using-the-argument-list"></a><h3 class="help-heading">USING THE ARGUMENT LIST</h3></div>
<div class="old-help-para">						<a name="%3Aargdo"></a><code class="help-tag-right">:argdo</code>
:[range]argdo[!] <code>{cmd}</code>	Execute <code>{cmd}</code> for each file in the argument list or,
			if [range] is specified, only for arguments in that
			range.  It works like doing this:<pre>:rewind
:{cmd}
:next
:{cmd}
etc.</pre></div>
<div class="old-help-para">			When the current file can't be <a href="/neovim-docs-web/en/editing#abandon">abandon</a>ed and the [!]
			is not present, the command fails.
			When an error is detected on one file, further files
			in the argument list will not be visited.
			The last file in the argument list (or where an error
			occurred) becomes the current file.
			<code>{cmd}</code> can contain '|' to concatenate several commands.
			<code>{cmd}</code> must not change the argument list.
			Note: While this command is executing, the Syntax
			autocommand event is disabled by adding it to
			<a href="/neovim-docs-web/en/options#'eventignore'">'eventignore'</a>.  This considerably speeds up editing
			each file.
			Also see <a href="/neovim-docs-web/en/windows#%3Awindo">:windo</a>, <a href="/neovim-docs-web/en/tabpage#%3Atabdo">:tabdo</a>, <a href="/neovim-docs-web/en/windows#%3Abufdo">:bufdo</a>, <a href="/neovim-docs-web/en/quickfix#%3Acdo">:cdo</a>, <a href="/neovim-docs-web/en/quickfix#%3Aldo">:ldo</a>,
			<a href="/neovim-docs-web/en/quickfix#%3Acfdo">:cfdo</a> and <a href="/neovim-docs-web/en/quickfix#%3Alfdo">:lfdo</a>.</div>
<div class="old-help-para">Example:<pre>:args *.c
:argdo set ff=unix | update</pre>
This sets the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> option to "unix" and writes the file if it is now
changed.  This is done for all.c files.</div>
<div class="old-help-para">Example:<pre>:args *.[ch]
:argdo %s/\&lt;my_foo\&gt;/My_Foo/ge | update</pre>
This changes the word "my_foo" to "My_Foo" in all *.c and *.h files.  The "e"
flag is used for the ":substitute" command to avoid an error for files where
"my_foo" isn't used.  ":update" writes the file only if changes were made.</div>
<div class="old-help-para"><h2 class="help-heading">4. Writing<span class="help-heading-tags">					<a name="writing"></a><span class="help-tag">writing</span> <a name="save-file"></a><span class="help-tag">save-file</span></span></h2></div>
<div class="old-help-para">Note: When the <a href="/neovim-docs-web/en/options#'write'">'write'</a> option is off, you are not able to write any file.</div>
<div class="old-help-para">							<a name="%3Aw"></a><code class="help-tag-right">:w</code> <a name="%3Awrite"></a><code class="help-tag">:write</code>
					<a name="E502"></a><code class="help-tag-right">E502</code> <a name="E503"></a><code class="help-tag">E503</code> <a name="E504"></a><code class="help-tag">E504</code> <a name="E505"></a><code class="help-tag">E505</code>
					<a name="E512"></a><code class="help-tag-right">E512</code> <a name="E514"></a><code class="help-tag">E514</code> <a name="E667"></a><code class="help-tag">E667</code> <a name="E949"></a><code class="help-tag">E949</code>
:w[rite] [++opt]	Write the whole buffer to the current file.  This is
			the normal way to save changes to a file.  It fails
			when the <a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a> option is set or when there is
			another reason why the file can't be written.
			For ++opt see <a href="/neovim-docs-web/en/editing#%2B%2Bopt">++opt</a>, but only ++bin, ++nobin, ++ff
			and ++enc are effective.</div>
<div class="old-help-para">:w[rite]! [++opt]	Like ":write", but forcefully write when <a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a> is
			set or there is another reason why writing was
			refused.
			Note: This may change the permission and ownership of
			the file and break (symbolic) links.  Add the 'W' flag
			to <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> to avoid this.</div>
<div class="old-help-para">:[range]w[rite][!] [++opt]
			Write the specified lines to the current file.  This
			is unusual, because the file will not contain all
			lines in the buffer.</div>
<div class="old-help-para">							<a name="%3Aw_f"></a><code class="help-tag-right">:w_f</code> <a name="%3Awrite_f"></a><code class="help-tag">:write_f</code>
:[range]w[rite] [++opt]	<code>{file}</code>
			Write the specified lines to <code>{file}</code>, unless it
			already exists and the <a href="/neovim-docs-web/en/options#'writeany'">'writeany'</a> option is off.</div>
<div class="old-help-para">							<a name="%3Aw%21"></a><code class="help-tag-right">:w!</code>
:[range]w[rite]! [++opt] <code>{file}</code>
			Write the specified lines to <code>{file}</code>.  Overwrite an
			existing file.</div>
<div class="old-help-para">						<a name="%3Aw_a"></a><code class="help-tag-right">:w_a</code> <a name="%3Awrite_a"></a><code class="help-tag">:write_a</code> <a name="E494"></a><code class="help-tag">E494</code>
:[range]w[rite][!] [++opt] &gt;<pre>Append the specified lines to the current file.</pre>
:[range]w[rite][!] [++opt] &gt;&gt; <code>{file}</code>
			Append the specified lines to <code>{file}</code>.  '!' forces the
			write even if file does not exist.</div>
<div class="old-help-para">							<a name="%3Aw_c"></a><code class="help-tag-right">:w_c</code> <a name="%3Awrite_c"></a><code class="help-tag">:write_c</code>
:[range]w[rite] [++opt] !{cmd}
			Execute <code>{cmd}</code> with [range] lines as standard input
			(note the space in front of the '!').  <code>{cmd}</code> is
			executed like with ":!{cmd}", any '!' is replaced with
			the previous command <a href="/neovim-docs-web/en/various#%3A%21">:!</a>.</div>
<div class="old-help-para">The default [range] for the ":w" command is the whole buffer (1,$).  If you
write the whole buffer, it is no longer considered changed.  When you
write it to a different file with ":w somefile" it depends on the "+" flag in
<a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.  When included, the write command will reset the <a href="/neovim-docs-web/en/options#'modified'">'modified'</a> flag,
even though the buffer itself may still be different from its file.</div>
<div class="old-help-para">If a file name is given with ":w" it becomes the alternate file.  This can be
used, for example, when the write fails and you want to try again later with
":w #".  This can be switched off by removing the 'A' flag from the
<a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> option.</div>
<div class="old-help-para">Note that the <a href="/neovim-docs-web/en/options#'fsync'">'fsync'</a> option matters here.  If it's set it may make writes
slower (but safer).</div>
<div class="old-help-para">							<a name="%3Asav"></a><code class="help-tag-right">:sav</code> <a name="%3Asaveas"></a><code class="help-tag">:saveas</code>
:sav[eas][!] [++opt] <code>{file}</code>
			Save the current buffer under the name <code>{file}</code> and set
			the filename of the current buffer to <code>{file}</code>.  The
			previous name is used for the alternate file name.
			The [!] is needed to overwrite an existing file.
			When <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> is empty filetype detection is done
			with the new name, before the file is written.
			When the write was successful <a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a> is reset.</div>
<div class="old-help-para">							<a name="%3Aup"></a><code class="help-tag-right">:up</code> <a name="%3Aupdate"></a><code class="help-tag">:update</code>
:[range]up[date][!] [++opt] [&gt;&gt;] [file]
			Like ":write", but only write when the buffer has been
			modified.</div>
<div class="old-help-para"><h3 class="help-heading">WRITING WITH MULTIPLE BUFFERS<span class="help-heading-tags">				<a name="buffer-write"></a><span class="help-tag">buffer-write</span></span></h3></div>
<div class="old-help-para">							<a name="%3Awa"></a><code class="help-tag-right">:wa</code> <a name="%3Awall"></a><code class="help-tag">:wall</code>
:wa[ll]			Write all changed buffers.  Buffers without a file
			name cause an error message.  Buffers which are
			readonly are not written.</div>
<div class="old-help-para">:wa[ll]!		Write all changed buffers, even the ones that are
			readonly.  Buffers without a file name are not
			written and cause an error message.</div>
<div class="old-help-para">Vim will warn you if you try to overwrite a file that has been changed
elsewhere (unless "!" was used).  See <a href="/neovim-docs-web/en/editing#timestamp">timestamp</a>.</div>
<div class="old-help-para">			    <a name="backup"></a><code class="help-tag-right">backup</code> <a name="E207"></a><code class="help-tag">E207</code> <a name="E506"></a><code class="help-tag">E506</code> <a name="E507"></a><code class="help-tag">E507</code> <a name="E508"></a><code class="help-tag">E508</code> <a name="E509"></a><code class="help-tag">E509</code> <a name="E510"></a><code class="help-tag">E510</code>
If you write to an existing file (but do not append) while the <a href="/neovim-docs-web/en/options#'backup'">'backup'</a>,
<a href="/neovim-docs-web/en/options#'writebackup'">'writebackup'</a> or <a href="/neovim-docs-web/en/options#'patchmode'">'patchmode'</a> option is on, a backup of the original file is
made.  The file is either copied or renamed (see <a href="/neovim-docs-web/en/options#'backupcopy'">'backupcopy'</a>).  After the
file has been successfully written and when the <a href="/neovim-docs-web/en/options#'writebackup'">'writebackup'</a> option is on and
the <a href="/neovim-docs-web/en/options#'backup'">'backup'</a> option is off, the backup file is deleted.  When the <a href="/neovim-docs-web/en/options#'patchmode'">'patchmode'</a>
option is on the backup file may be renamed.</div>
<div class="old-help-para">							<a name="backup-table"></a><code class="help-tag-right">backup-table</code>
<div class="help-column_heading"><a href="/neovim-docs-web/en/options#'backup'">'backup'</a> <a href="/neovim-docs-web/en/options#'writebackup'">'writebackup'</a>	action</div>   off	     off	no backup made
   off	     on		backup current file, deleted afterwards (default)
   on	     off	delete old backup, backup current file
   on	     on		delete old backup, backup current file</div>
<div class="old-help-para">When the <a href="/neovim-docs-web/en/options#'backupskip'">'backupskip'</a> pattern matches with the name of the file which is
written, no backup file is made.  The values of <a href="/neovim-docs-web/en/options#'backup'">'backup'</a> and <a href="/neovim-docs-web/en/options#'writebackup'">'writebackup'</a> are
ignored then.</div>
<div class="old-help-para">When the <a href="/neovim-docs-web/en/options#'backup'">'backup'</a> option is on, an old backup file (with the same name as the
new backup file) will be deleted.  If <a href="/neovim-docs-web/en/options#'backup'">'backup'</a> is not set, but <a href="/neovim-docs-web/en/options#'writebackup'">'writebackup'</a>
is set, an existing backup file will not be deleted.  The backup file that is
made while the file is being written will have a different name.</div>
<div class="old-help-para">On some filesystems it's possible that in a crash you lose both the backup and
the newly written file (it might be there but contain bogus data).  In that
case try recovery, because the swap file is synced to disk and might still be
there. <a href="/neovim-docs-web/en/recover#%3Arecover">:recover</a></div>
<div class="old-help-para">The directories given with the <a href="/neovim-docs-web/en/options#'backupdir'">'backupdir'</a> option are used to put the backup
file in.  (default: same directory as the written file).</div>
<div class="old-help-para">Whether the backup is a new file, which is a copy of the original file, or the
original file renamed depends on the <a href="/neovim-docs-web/en/options#'backupcopy'">'backupcopy'</a> option.  See there for an
explanation of when the copy is made and when the file is renamed.</div>
<div class="old-help-para">If the creation of a backup file fails, the write is not done.  If you want
to write anyway add a '!' to the command.</div>
<div class="old-help-para">							<a name="write-permissions"></a><code class="help-tag-right">write-permissions</code>
When writing a new file the permissions are read-write.  For unix the mask is
0o666 with additionally umask applied.  When writing a file that was read Vim
will preserve the permissions, but clear the s-bit.</div>
<div class="old-help-para">							<a name="write-readonly"></a><code class="help-tag-right">write-readonly</code>
When the <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> option contains 'W', Vim will refuse to overwrite a
readonly file.  When 'W' is not present, ":w!" will overwrite a readonly file,
if the system allows it (the directory must be writable).</div>
<div class="old-help-para">							<a name="write-fail"></a><code class="help-tag-right">write-fail</code>
If the writing of the new file fails, you have to be careful not to lose
your changes AND the original file.  If there is no backup file and writing
the new file failed, you have already lost the original file!  DON'T EXIT VIM
UNTIL YOU WRITE OUT THE FILE!  If a backup was made, it is put back in place
of the original file (if possible).  If you exit Vim, and lose the changes
you made, the original file will mostly still be there.  If putting back the
original file fails, there will be an error message telling you that you
lost the original file.</div>
<div class="old-help-para">						<a name="DOS-format-write"></a><code class="help-tag-right">DOS-format-write</code>
If the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is "dos", <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> is used for <code>&lt;EOL&gt;</code>.  This is default
for Windows. On other systems the message "[dos format]" is shown to
remind you that an unusual <code>&lt;EOL&gt;</code> was used.
						<a name="Unix-format-write"></a><code class="help-tag-right">Unix-format-write</code>
If the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is "unix", <code>&lt;NL&gt;</code> is used for <code>&lt;EOL&gt;</code>.  On Windows
the message "[unix format]" is shown.
						<a name="Mac-format-write"></a><code class="help-tag-right">Mac-format-write</code>
If the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is "mac", <code>&lt;CR&gt;</code> is used for <code>&lt;EOL&gt;</code>.  On non-Mac systems the
message "[mac format]" is shown.</div>
<div class="old-help-para">See also <a href="/neovim-docs-web/en/editing#file-formats">file-formats</a> and the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> and <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> options.</div>
<div class="old-help-para">						<a name="ACL"></a><code class="help-tag-right">ACL</code>
ACL stands for Access Control List.  It is an advanced way to control access
rights for a file.  It is used on new MS-Windows and Unix systems, but only
when the filesystem supports it.
   Vim attempts to preserve the ACL info when writing a file.  The backup file
will get the ACL info of the original file.
   The ACL info is also used to check if a file is read-only (when opening the
file).</div>
<div class="old-help-para">						<a name="read-only-share"></a><code class="help-tag-right">read-only-share</code>
When MS-Windows shares a drive on the network it can be marked as read-only.
This means that even if the file read-only attribute is absent, and the ACL
settings on NT network shared drives allow writing to the file, you can still
not write to the file.  Vim on Win32 platforms will detect read-only network
drives and will mark the file as read-only.  You will not be able to override
it with <a href="/neovim-docs-web/en/editing#%3Awrite">:write</a>.</div>
<div class="old-help-para">						<a name="write-device"></a><code class="help-tag-right">write-device</code>
When the file name is actually a device name, Vim will not make a backup (that
would be impossible).  You need to use "!", since the device already exists.
Example for Unix:<pre>:w! /dev/lpt0</pre>
and MS-Windows:<pre>:w! lpt0</pre>
For Unix a device is detected when the name doesn't refer to a normal file or
a directory.  A fifo or named pipe also looks like a device to Vim.
For MS-Windows the device is detected by its name:
	CON
	CLOCK$
	NUL
	PRN
	COMn	n=1,2,3... etc
	LPTn	n=1,2,3... etc
The names can be in upper- or lowercase.</div>
<div class="old-help-para"><h2 class="help-heading">5. Writing and quitting<span class="help-heading-tags">					<a name="write-quit"></a><span class="help-tag">write-quit</span></span></h2></div>
<div class="old-help-para">							<a name="%3Aq"></a><code class="help-tag-right">:q</code> <a name="%3Aquit"></a><code class="help-tag">:quit</code>
:q[uit]			Quit the current window.  Quit Vim if this is the last
			<a href="/neovim-docs-web/en/windows#edit-window">edit-window</a>.  This fails when changes have been made
			and Vim refuses to <a href="/neovim-docs-web/en/editing#abandon">abandon</a> the current buffer, and
			when the last file in the argument list has not been
			edited.
			If there are other tab pages and quitting the last
			window in the current tab page the current tab page is
			closed <a href="/neovim-docs-web/en/tabpage#tab-page">tab-page</a>.
			Triggers the <a href="/neovim-docs-web/en/autocmd#QuitPre">QuitPre</a> autocommand event.
			See <a href="/neovim-docs-web/en/windows#CTRL-W_q">CTRL-W_q</a> for quitting another window.</div>
<div class="old-help-para">:conf[irm] q[uit]	Quit, but give prompt when changes have been made, or
			the last file in the argument list has not been
			edited.  See <a href="/neovim-docs-web/en/editing#%3Aconfirm">:confirm</a> and <a href="/neovim-docs-web/en/options#'confirm'">'confirm'</a>.</div>
<div class="old-help-para">:q[uit]!		Quit without writing, also when the current buffer has
			changes.  The buffer is unloaded, also when it has
			<a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> set.
			If this is the last window and there is a modified
			hidden buffer, the current buffer is abandoned and the
			first changed hidden buffer becomes the current
			buffer.
			Use ":qall!" to exit always.</div>
<div class="old-help-para">:cq[uit]		Quit always, without writing, and return an error
			code.  See <a href="/neovim-docs-web/en/quickfix#%3Acq">:cq</a>.</div>
<div class="old-help-para">							<a name="%3Awq"></a><code class="help-tag-right">:wq</code>
:wq [++opt]		Write the current file and close the window.  If this
			was the last <a href="/neovim-docs-web/en/windows#edit-window">edit-window</a> Vim quits.
			Writing fails when the file is read-only or the buffer
			does not have a name.  Quitting fails when the last
			file in the argument list has not been edited.</div>
<div class="old-help-para">:wq! [++opt]		Write the current file and close the window.  If this
			was the last <a href="/neovim-docs-web/en/windows#edit-window">edit-window</a> Vim quits.  Writing fails
			when the current buffer does not have a name.</div>
<div class="old-help-para">:wq [++opt] <code>{file}</code>	Write to <code>{file}</code> and close the window.  If this was the
			last <a href="/neovim-docs-web/en/windows#edit-window">edit-window</a> Vim quits.  Quitting fails when the
			last file in the argument list has not been edited.</div>
<div class="old-help-para">:wq! [++opt] <code>{file}</code>	Write to <code>{file}</code> and close the current window.  Quit
			Vim if this was the last <a href="/neovim-docs-web/en/windows#edit-window">edit-window</a>.</div>
<div class="old-help-para">:[range]wq[!] [++opt] [file]
			Same as above, but only write the lines in [range].</div>
<div class="old-help-para">							<a name="%3Ax"></a><code class="help-tag-right">:x</code> <a name="%3Axit"></a><code class="help-tag">:xit</code>
:[range]x[it][!] [++opt] [file]
			Like ":wq", but write only when changes have been
			made.
			When <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> is set and there are more windows, the
			current buffer becomes hidden, after writing the file.</div>
<div class="old-help-para">							<a name="%3Aexi"></a><code class="help-tag-right">:exi</code> <a name="%3Aexit"></a><code class="help-tag">:exit</code>
:[range]exi[t][!] [++opt] [file]
			Same as :xit.</div>
<div class="old-help-para">							<a name="ZZ"></a><code class="help-tag-right">ZZ</code>
ZZ			Write current file, if modified, and close the current
			window (same as ":x").
			If there are several windows for the current file,
			only the current window is closed.</div>
<div class="old-help-para">							<a name="ZQ"></a><code class="help-tag-right">ZQ</code>
ZQ			Quit without checking for changes (same as ":q!").</div>
<div class="old-help-para"><h3 class="help-heading">MULTIPLE WINDOWS AND BUFFERS<span class="help-heading-tags">				<a name="window-exit"></a><span class="help-tag">window-exit</span></span></h3></div>
<div class="old-help-para">							<a name="%3Aqa"></a><code class="help-tag-right">:qa</code> <a name="%3Aqall"></a><code class="help-tag">:qall</code>
:qa[ll]		Exit Vim, unless there are some buffers which have been
		changed.  (Use ":bmod" to go to the next modified buffer).
		When <a href="/neovim-docs-web/en/options#'autowriteall'">'autowriteall'</a> is set all changed buffers will be
		written, like <a href="/neovim-docs-web/en/editing#%3Awqall">:wqall</a>.</div>
<div class="old-help-para">:conf[irm] qa[ll]
		Exit Vim.  Bring up a prompt when some buffers have been
		changed.  See <a href="/neovim-docs-web/en/editing#%3Aconfirm">:confirm</a>.</div>
<div class="old-help-para">:qa[ll]!	Exit Vim.  Any changes to buffers are lost.
		Also see <a href="/neovim-docs-web/en/quickfix#%3Acquit">:cquit</a>, it does the same but exits with a non-zero
		value.</div>
<div class="old-help-para">							<a name="%3Aquita"></a><code class="help-tag-right">:quita</code> <a name="%3Aquitall"></a><code class="help-tag">:quitall</code>
:quita[ll][!]	Same as ":qall".</div>
<div class="old-help-para">:wqa[ll] [++opt]				<a name="%3Awqa"></a><code class="help-tag-right">:wqa</code> <a name="%3Awqall"></a><code class="help-tag">:wqall</code> <a name="%3Axa"></a><code class="help-tag">:xa</code> <a name="%3Axall"></a><code class="help-tag">:xall</code>
:xa[ll]		Write all changed buffers and exit Vim.  If there are buffers
		without a file name, which are readonly or which cannot be
		written for another reason, Vim will not quit.</div>
<div class="old-help-para">:conf[irm] wqa[ll] [++opt]
:conf[irm] xa[ll]
		Write all changed buffers and exit Vim.  Bring up a prompt
		when some buffers are readonly or cannot be written for
		another reason.  See <a href="/neovim-docs-web/en/editing#%3Aconfirm">:confirm</a>.</div>
<div class="old-help-para">:wqa[ll]! [++opt]
:xa[ll]!	Write all changed buffers, even the ones that are readonly,
		and exit Vim.  If there are buffers without a file name or
		which cannot be written for another reason, Vim will not quit.</div>
<div class="old-help-para"><h2 class="help-heading">6. Dialogs<span class="help-heading-tags">						<a name="edit-dialogs"></a><span class="help-tag">edit-dialogs</span></span></h2></div>
<div class="old-help-para">							<a name="%3Aconfirm"></a><code class="help-tag-right">:confirm</code> <a name="%3Aconf"></a><code class="help-tag">:conf</code>
:conf[irm] <code>{command}</code>	Execute <code>{command}</code>, and use a dialog when an
			operation has to be confirmed.  Can be used on the
			<a href="/neovim-docs-web/en/editing#%3Aq">:q</a>, <a href="/neovim-docs-web/en/editing#%3Aqa">:qa</a> and <a href="/neovim-docs-web/en/editing#%3Aw">:w</a> commands (the latter to override
			a read-only setting), and any other command that can
			fail in such a way, such as <a href="/neovim-docs-web/en/windows#%3Aonly">:only</a>, <a href="/neovim-docs-web/en/windows#%3Abuffer">:buffer</a>,
			<a href="/neovim-docs-web/en/windows#%3Abdelete">:bdelete</a>, etc.</div>
<div class="old-help-para">Examples:<pre>:confirm w foo</pre></div>
<div class="old-help-para">	Will ask for confirmation when "foo" already exists.<pre>:confirm q</pre></div>
<div class="old-help-para">	Will ask for confirmation when there are changes.<pre>:confirm qa</pre></div>
<div class="old-help-para">	If any modified, unsaved buffers exist, you will be prompted to save
	or abandon each one.  There are also choices to "save all" or "abandon
	all".</div>
<div class="old-help-para">If you want to always use ":confirm", set the <a href="/neovim-docs-web/en/options#'confirm'">'confirm'</a> option.</div>
<div class="old-help-para">					<a name="%3Abrowse"></a><code class="help-tag-right">:browse</code> <a name="%3Abro"></a><code class="help-tag">:bro</code> <a name="E338"></a><code class="help-tag">E338</code> <a name="E614"></a><code class="help-tag">E614</code> <a name="E615"></a><code class="help-tag">E615</code> <a name="E616"></a><code class="help-tag">E616</code>
:bro[wse] <code>{command}</code>	Open a file selection dialog for an argument to
			<code>{command}</code>.  At present this works for <a href="/neovim-docs-web/en/editing#%3Ae">:e</a>, <a href="/neovim-docs-web/en/editing#%3Aw">:w</a>,
			<a href="/neovim-docs-web/en/editing#%3Awall">:wall</a>, <a href="/neovim-docs-web/en/editing#%3Awq">:wq</a>, <a href="/neovim-docs-web/en/editing#%3Awqall">:wqall</a>, <a href="/neovim-docs-web/en/editing#%3Ax">:x</a>, <a href="/neovim-docs-web/en/editing#%3Axall">:xall</a>, <a href="/neovim-docs-web/en/editing#%3Aexit">:exit</a>,
			<a href="/neovim-docs-web/en/editing#%3Aview">:view</a>, <a href="/neovim-docs-web/en/windows#%3Asview">:sview</a>, <a href="/neovim-docs-web/en/insert#%3Ar">:r</a>, <a href="/neovim-docs-web/en/editing#%3Asaveas">:saveas</a>, <a href="/neovim-docs-web/en/windows#%3Asp">:sp</a>, <a href="/neovim-docs-web/en/starting#%3Amkexrc">:mkexrc</a>,
			<a href="/neovim-docs-web/en/starting#%3Amkvimrc">:mkvimrc</a>, <a href="/neovim-docs-web/en/starting#%3Amksession">:mksession</a>, <a href="/neovim-docs-web/en/starting#%3Amkview">:mkview</a>, <a href="/neovim-docs-web/en/windows#%3Asplit">:split</a>,
			<a href="/neovim-docs-web/en/windows#%3Avsplit">:vsplit</a>, <a href="/neovim-docs-web/en/tabpage#%3Atabe">:tabe</a>, <a href="/neovim-docs-web/en/tabpage#%3Atabnew">:tabnew</a>, <a href="/neovim-docs-web/en/quickfix#%3Acfile">:cfile</a>, <a href="/neovim-docs-web/en/quickfix#%3Acgetfile">:cgetfile</a>,
			<a href="/neovim-docs-web/en/quickfix#%3Acaddfile">:caddfile</a>, <a href="/neovim-docs-web/en/quickfix#%3Alfile">:lfile</a>, <a href="/neovim-docs-web/en/quickfix#%3Algetfile">:lgetfile</a>, <a href="/neovim-docs-web/en/quickfix#%3Aladdfile">:laddfile</a>,
			<a href="/neovim-docs-web/en/diff#%3Adiffsplit">:diffsplit</a>, <a href="/neovim-docs-web/en/diff#%3Adiffpatch">:diffpatch</a>, <a href="/neovim-docs-web/en/windows#%3Apedit">:pedit</a>, <a href="/neovim-docs-web/en/various#%3Aredir">:redir</a>,
			<a href="/neovim-docs-web/en/repeat#%3Asource">:source</a>, <a href="/neovim-docs-web/en/editing#%3Aupdate">:update</a>, <a href="/neovim-docs-web/en/editing#%3Avisual">:visual</a>, <a href="/neovim-docs-web/en/windows#%3Avsplit">:vsplit</a>,
			and <a href="/neovim-docs-web/en/editing#%3Aqall">:qall</a> if <a href="/neovim-docs-web/en/options#'confirm'">'confirm'</a> is set.
			<code>{only in Win32 GUI, in console `browse edit` works}</code>
			if the FileExplorer autocommand group exists}
			When ":browse" is not possible you get an error
			message.  If <code>{command}</code> doesn't support browsing, the
			<code>{command}</code> is executed without a dialog.
			":browse set" works like <a href="/neovim-docs-web/en/options#%3Aoptions">:options</a>.
			See also <a href="/neovim-docs-web/en/starting#%3Aoldfiles">:oldfiles</a> for ":browse oldfiles".</div>
<div class="old-help-para">The syntax is best shown via some examples:<pre>:browse e $vim/foo</pre></div>
<div class="old-help-para">		Open the browser in the $vim/foo directory, and edit the
		file chosen.<pre>:browse e</pre></div>
<div class="old-help-para">		Open the browser in the directory specified with <a href="/neovim-docs-web/en/options#'browsedir'">'browsedir'</a>,
		and edit the file chosen.<pre>:browse w</pre></div>
<div class="old-help-para">		Open the browser in the directory of the current buffer,
		with the current buffer filename as default, and save the
		buffer under the filename chosen.<pre>:browse w C:/bar</pre></div>
<div class="old-help-para">		Open the browser in the C:/bar directory, with the current
		buffer filename as default, and save the buffer under the
		filename chosen.
Also see the <a href="/neovim-docs-web/en/options#'browsedir'">'browsedir'</a> option.
For versions of Vim where browsing is not supported, the command is executed
unmodified.</div>
<div class="old-help-para">							<a name="browsefilter"></a><code class="help-tag-right">browsefilter</code>
For MS-Windows you can modify the filters that are used in the browse
dialog.  By setting the g:browsefilter or b:browsefilter variables, you can
change the filters globally or locally to the buffer.  The variable is set to
a string in the format "{filter label}\t{pattern};{pattern}\n" where {<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+editing.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/editing.html%0D%0DContext%3A%0D%0D%60%60%60%0DFor%20MS-Windows%20you%20can%20modify%20the%20filters%20that%20are%20used%20in%20the%20browse%0Adialog.%20%20By%20setting%20the%20g%3Abrowsefilter%20or%20b%3Abrowsefilter%20variables%2C%20you%20can%0Achange%20the%20filters%20globally%20or%20locally%20to%20the%20buffer.%20%20The%20variable%20is%20set%20to%0Aa%20string%20in%20the%20format%20%22%7Bfilter%20label%7D%5Ct%7Bpattern%7D%3B%7Bpattern%7D%5Cn%22%20where%20%7Bfilter%0Alabel%7D%20is%20the%20text%20that%20appears%20in%20the%20%22Files%20of%20Type%22%20comboBox%2C%20and%20%7Bpattern%7D%0Ais%20the%20pattern%20which%20filters%20the%20filenames.%20%20Several%20patterns%20can%20be%20given%2C%0Aseparated%20by%20'%3B'.%0D%60%60%60">filter</a>
label} is the text that appears in the "Files of Type" comboBox, and <code>{pattern}</code>
is the pattern which filters the filenames.  Several patterns can be given,
separated by ';'.</div>
<div class="old-help-para">For example, to have only Vim files in the dialog, you could use the following
command:<pre>let g:browsefilter = "Vim Scripts\t*.vim\nVim Startup Files\t*vimrc\n"</pre>
You can override the filter setting on a per-buffer basis by setting the
b:browsefilter variable.  You would most likely set b:browsefilter in a
filetype plugin, so that the browse dialog would contain entries related to
the type of file you are currently editing.  Disadvantage: This makes it
difficult to start editing a file of a different type.  To overcome this, you
may want to add "All Files\t*.*\n" as the final filter, so that the user can
still access any desired file.</div>
<div class="old-help-para">To avoid setting browsefilter when Vim does not actually support it, you can
use has("browsefilter"):<pre>if has("browsefilter")
   let g:browsefilter = "whatever"
endif</pre>
<h2 class="help-heading">7. The current directory<span class="help-heading-tags">				<a name="current-directory"></a><span class="help-tag">current-directory</span></span></h2></div>
<div class="old-help-para">You can use <a href="/neovim-docs-web/en/editing#%3Acd">:cd</a>, <a href="/neovim-docs-web/en/editing#%3Atcd">:tcd</a> and <a href="/neovim-docs-web/en/editing#%3Alcd">:lcd</a> to change to another directory, so you
will not have to type that directory name in front of the file names.  It also
makes a difference for executing external commands, e.g. ":!ls" or ":te ls".</div>
<div class="old-help-para">There are three current-directory "scopes": global, tab and window.  The
window-local working directory takes precedence over the tab-local
working directory, which in turn takes precedence over the global
working directory.  If a local working directory (tab or window) does not
exist, the next-higher scope in the hierarchy applies.</div>
<div class="old-help-para">							<a name="%3Acd"></a><code class="help-tag-right">:cd</code> <a name="E747"></a><code class="help-tag">E747</code> <a name="E472"></a><code class="help-tag">E472</code>
:cd[!]			On non-Unix systems when <a href="/neovim-docs-web/en/options#'cdhome'">'cdhome'</a> is off: Print the
			current directory name.
			Otherwise: Change the current directory to the home
			directory.  Clear any window-local directory.
			Use <a href="/neovim-docs-web/en/editing#%3Apwd">:pwd</a> to print the current directory on all
			systems.</div>
<div class="old-help-para">:cd[!] <code>{path}</code>		Change the current directory to <code>{path}</code>.
			If <code>{path}</code> is relative, it is searched for in the
			directories listed in <a href="/neovim-docs-web/en/options#'cdpath'">'cdpath'</a>.
			Does not change the meaning of an already opened file,
			because its full path name is remembered.  Files from
			the <a href="/neovim-docs-web/en/editing#arglist">arglist</a> may change though!
			On MS-Windows this also changes the active drive.
			To change to the directory of the current file:<pre>:cd %:h</pre></div>
<div class="old-help-para">							<a name="%3Acd-"></a><code class="help-tag-right">:cd-</code> <a name="E186"></a><code class="help-tag">E186</code>
:cd[!] -			Change to the previous current directory (before the
			previous ":cd <code>{path}</code>" command).</div>
<div class="old-help-para">							<a name="%3Achd"></a><code class="help-tag-right">:chd</code> <a name="%3Achdir"></a><code class="help-tag">:chdir</code>
:chd[ir][!] [path]	Same as <a href="/neovim-docs-web/en/editing#%3Acd">:cd</a>.</div>
<div class="old-help-para">							<a name="%3Atc"></a><code class="help-tag-right">:tc</code> <a name="%3Atcd"></a><code class="help-tag">:tcd</code>
:tc[d][!] <code>{path}</code>	Like <a href="/neovim-docs-web/en/editing#%3Acd">:cd</a>, but only set the directory for the current
			tab.  The current window will also use this directory.
			The current directory is not changed for windows in
			other tabs and for windows in the current tab that
			have their own window-local directory.</div>
<div class="old-help-para">							<a name="%3Atcd-"></a><code class="help-tag-right">:tcd-</code>
:tc[d][!] -			Change to the previous current directory (before the
			previous ":tcd <code>{path}</code>" command).</div>
<div class="old-help-para">							<a name="%3Atch"></a><code class="help-tag-right">:tch</code> <a name="%3Atchdir"></a><code class="help-tag">:tchdir</code>
:tch[dir][!]		Same as <a href="/neovim-docs-web/en/editing#%3Atcd">:tcd</a>.</div>
<div class="old-help-para">							<a name="%3Alc"></a><code class="help-tag-right">:lc</code> <a name="%3Alcd"></a><code class="help-tag">:lcd</code>
:lc[d][!] <code>{path}</code>	Like <a href="/neovim-docs-web/en/editing#%3Acd">:cd</a>, but only set the current directory for the
			current window.  The current directory for other
			windows or tabs is not changed.</div>
<div class="old-help-para">							<a name="%3Alch"></a><code class="help-tag-right">:lch</code> <a name="%3Alchdir"></a><code class="help-tag">:lchdir</code>
:lch[dir][!]		Same as <a href="/neovim-docs-web/en/editing#%3Alcd">:lcd</a>.</div>
<div class="old-help-para">							<a name="%3Alcd-"></a><code class="help-tag-right">:lcd-</code>
:lc[d][!] -			Change to the previous current directory (before the
			previous ":lcd <code>{path}</code>" command).</div>
<div class="old-help-para">							<a name="%3Apw"></a><code class="help-tag-right">:pw</code> <a name="%3Apwd"></a><code class="help-tag">:pwd</code> <a name="E187"></a><code class="help-tag">E187</code>
:pw[d]			Print the current directory name.
			Also see <a href="/neovim-docs-web/en/builtin#getcwd()">getcwd()</a>.
							<a name="%3Apwd-verbose"></a><code class="help-tag-right">:pwd-verbose</code>
			When <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> is non-zero, <a href="/neovim-docs-web/en/editing#%3Apwd">:pwd</a> will also display
			what scope the current directory was set. Example:<pre>" Set by :cd
:verbose pwd
[global] /path/to/current

" Set by :lcd
:verbose pwd
[window] /path/to/current

" Set by :tcd
:verbose pwd
[tabpage] /path/to/current</pre>
So long as no <a href="/neovim-docs-web/en/editing#%3Alcd">:lcd</a> or <a href="/neovim-docs-web/en/editing#%3Atcd">:tcd</a> command has been used, all windows share the
same current directory.  Using a command to jump to another window doesn't
change anything for the current directory.</div>
<div class="old-help-para">When <a href="/neovim-docs-web/en/editing#%3Alcd">:lcd</a> has been used for a window, the specified directory becomes the
current directory for that window.  Windows where the <a href="/neovim-docs-web/en/editing#%3Alcd">:lcd</a> command has not
been used stick to the global or tab-local directory.  When jumping to another
window the current directory is changed to the last specified local current
directory.  If none was specified, the global or tab-local directory is used.
When creating a new window it inherits the local directory of the current window.</div>
<div class="old-help-para">When changing tabs the same behaviour applies.  If the current tab has no
local working directory the global working directory is used.</div>
<div class="old-help-para">When a <a href="/neovim-docs-web/en/editing#%3Acd">:cd</a> command is used, the current window and tab will lose their local
current directories and will use the global current directory from now on.
When a <a href="/neovim-docs-web/en/editing#%3Atcd">:tcd</a> command is used, only the current window will lose its local
working directory.</div>
<div class="old-help-para">After using <a href="/neovim-docs-web/en/editing#%3Acd">:cd</a> the full path name will be used for reading and writing
files.  On some networked file systems this may cause problems.  The result of
using the full path name is that the file names currently in use will remain
referring to the same file.  Example: If you have a file a:test and a
directory a:vim the commands ":e test" ":cd vim" ":w" will overwrite the file
a:test and not write a:vim/test.  But if you do ":w test" the file a:vim/test
will be written, because you gave a new file name and did not refer to a
filename before the ":cd".</div>
<div class="old-help-para"><h2 class="help-heading">8. Editing binary files<span class="help-heading-tags">					<a name="edit-binary"></a><span class="help-tag">edit-binary</span></span></h2></div>
<div class="old-help-para">Although Vim was made to edit text files, it is possible to edit binary
files.  The <a href="/neovim-docs-web/en/starting#-b">-b</a> Vim argument (b for binary) makes Vim do file I/O in binary
mode, and sets some options for editing binary files (<a href="/neovim-docs-web/en/options#'binary'">'binary'</a> on, <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>
to 0, <a href="/neovim-docs-web/en/options#'modeline'">'modeline'</a> off, <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> off).  Setting the <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> option has the
same effect.  Don't forget to do this before reading the file.</div>
<div class="old-help-para">There are a few things to remember when editing binary files:
<div class="help-li" style=""> When editing executable files the number of bytes must not change.
  Use only the "R" or "r" command to change text.  Do not delete characters
  with "x" or by backspacing.
</div><div class="help-li" style=""> Set the <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> option to 0.  Otherwise lines will unexpectedly be
  split in two.
</div><div class="help-li" style=""> When there are not many <code>&lt;EOL&gt;</code>s, the lines will become very long.  If you
  want to edit a line that does not fit on the screen reset the <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> option.
  Horizontal scrolling is used then.  If a line becomes too long (see <a href="/neovim-docs-web/en/vi_diff#limits">limits</a>)
  you cannot edit that line.  The line will be split when reading the file.
  It is also possible that you get an "out of memory" error when reading the
  file.
</div><div class="help-li" style=""> Make sure the <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> option is set BEFORE loading the
  file.  Otherwise both <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> and <code>&lt;NL&gt;</code> are considered to end a line
  and when the file is written the <code>&lt;NL&gt;</code> will be replaced with <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code>.
</div><div class="help-li" style=""> <code>&lt;Nul&gt;</code> characters are shown on the screen as ^@.  You can enter them with
  "CTRL-V <code>CTRL-@</code>" or "CTRL-V 000".
</div><div class="help-li" style=""> To insert a <code>&lt;NL&gt;</code> character in the file split a line.  When writing the
  buffer to a file a <code>&lt;NL&gt;</code> will be written for the <code>&lt;EOL&gt;</code>.
</div><div class="help-li" style=""> Vim normally appends an <code>&lt;EOL&gt;</code> at the end of the file if there is none.
  Setting the <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> option prevents this.  If you want to add the final
  <code>&lt;EOL&gt;</code>, set the <a href="/neovim-docs-web/en/options#'endofline'">'endofline'</a> option.  You can also read the value of this
  option to see if there was an <code>&lt;EOL&gt;</code> for the last line (you cannot see this
  in the text).
</div></div>
<div class="old-help-para"><h2 class="help-heading">9. Encryption<span class="help-heading-tags">						<a name="encryption"></a><span class="help-tag">encryption</span></span></h2></div>
<div class="old-help-para">					                <a name="%3AX"></a><code class="help-tag-right">:X</code> <a name="E817"></a><code class="help-tag">E817</code> <a name="E818"></a><code class="help-tag">E818</code> <a name="E819"></a><code class="help-tag">E819</code> <a name="E820"></a><code class="help-tag">E820</code>
Support for editing encrypted files has been removed.
	<a href="https://github.com/neovim/neovim/issues/694">https://github.com/neovim/neovim/issues/694</a>
	<a href="https://github.com/neovim/neovim/issues/701">https://github.com/neovim/neovim/issues/701</a></div>
<div class="old-help-para"><h2 class="help-heading">10. Timestamps<span class="help-heading-tags">					<a name="timestamp"></a><span class="help-tag">timestamp</span> <a name="timestamps"></a><span class="help-tag">timestamps</span></span></h2></div>
<div class="old-help-para">Vim remembers the modification timestamp, mode and size of a file when you
begin editing it.  This is used to avoid that you have two different versions
of the same file (without you knowing this).</div>
<div class="old-help-para">After a shell command is run (<a href="/neovim-docs-web/en/various#%3A%21cmd">:!cmd</a> <a href="/neovim-docs-web/en/starting#suspend">suspend</a> <a href="/neovim-docs-web/en/insert#%3Aread%21">:read!</a> <a href="/neovim-docs-web/en/various#K">K</a>) timestamps,
file modes and file sizes are compared for all buffers in a window.   Vim will
run any associated <a href="/neovim-docs-web/en/autocmd#FileChangedShell">FileChangedShell</a> autocommands or display a warning for
any files that have changed.  In the GUI this happens when Vim regains input
focus.</div>
<div class="old-help-para">							<a name="E321"></a><code class="help-tag-right">E321</code> <a name="E462"></a><code class="help-tag">E462</code>
If you want to automatically reload a file when it has been changed outside of
Vim, set the <a href="/neovim-docs-web/en/options#'autoread'">'autoread'</a> option.  This doesn't work at the moment you write the
file though, only when the file wasn't changed inside of Vim.
							<a name="ignore-timestamp"></a><code class="help-tag-right">ignore-timestamp</code>
If you do not want to be asked or automatically reload the file, you can use
this:<pre>set buftype=nofile</pre>
Or, when starting gvim from a shell:<pre>gvim file.log -c "set buftype=nofile"</pre>
Note that if a FileChangedShell autocommand is defined you will not get a
warning message or prompt.  The autocommand is expected to handle this.</div>
<div class="old-help-para">There is no warning for a directory (e.g., with <a href="/neovim-docs-web/en/pi_netrw#netrw-browse">netrw-browse</a>).  But you do
get warned if you started editing a new file and it was created as a directory
later.</div>
<div class="old-help-para">When Vim notices the timestamp of a file has changed, and the file is being
edited in a buffer but has not changed, Vim checks if the contents of the file
is equal.  This is done by reading the file again (into a hidden buffer, which
is immediately deleted again) and comparing the text.  If the text is equal,
you will get no warning.</div>
<div class="old-help-para">If you don't get warned often enough you can use the following command.</div>
<div class="old-help-para">							<a name="%3Acheckt"></a><code class="help-tag-right">:checkt</code> <a name="%3Achecktime"></a><code class="help-tag">:checktime</code>
:checkt[ime]		Check if any buffers were changed outside of Vim.
			This checks and warns you if you would end up with two
			versions of a file.
			If this is called from an autocommand, a ":global"
			command or is not typed the actual check is postponed
			until a moment the side effects (reloading the file)
			would be harmless.
			Each loaded buffer is checked for its associated file
			being changed.  If the file was changed Vim will take
			action.  If there are no changes in the buffer and
			<a href="/neovim-docs-web/en/options#'autoread'">'autoread'</a> is set, the buffer is reloaded.  Otherwise,
			you are offered the choice of reloading the file.  If
			the file was deleted you get an error message.
			If the file previously didn't exist you get a warning
			if it exists now.
			Once a file has been checked the timestamp is reset,
			you will not be warned again.
			Syntax highlighting, marks, diff status,
			<a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a>, <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> and <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> options
			are not changed.  See <a href="/neovim-docs-web/en/eval#v%3Afcs_choice">v:fcs_choice</a> to reload these
			too (for example, if a code formatting tools has
			changed the file).</div>
<div class="old-help-para">:[N]checkt[ime] <code>{filename}</code>
:[N]checkt[ime] [N]
			Check the timestamp of a specific buffer.  The buffer
			may be specified by name, number or with a pattern.</div>
<div class="old-help-para">							<a name="E813"></a><code class="help-tag-right">E813</code> <a name="E814"></a><code class="help-tag">E814</code>
Vim will reload the buffer if you chose to.  If a window is visible that
contains this buffer, the reloading will happen in the context of this window.
Otherwise a special window is used, so that most autocommands will work.  You
can't close this window.  A few other restrictions apply.  Best is to make
sure nothing happens outside of the current buffer.  E.g., setting
window-local options may end up in the wrong window.  Splitting the window,
doing something there and closing it should be OK (if there are no side
effects from other autocommands).  Closing unrelated windows and buffers will
get you into trouble.</div>
<div class="old-help-para">Before writing a file, the timestamp is checked (unless "!" was used).
If it has changed, Vim will ask if you really want to overwrite the file:</div>
<div class="old-help-para">	WARNING: The file has been changed since reading it!!!
	Do you really want to write to it (y/n)?</div>
<div class="old-help-para">If you hit 'y' Vim will continue writing the file.  If you hit 'n' the write is
aborted.  If you used ":wq" or "ZZ" Vim will not exit, you will get another
chance to write the file.</div>
<div class="old-help-para">The message would normally mean that somebody has written to the file after
the edit session started.  This could be another person, in which case you
probably want to check if your changes to the file and the changes from the
other person should be merged.  Write the file under another name and check for
differences (the "diff" program can be used for this).</div>
<div class="old-help-para">It is also possible that you modified the file yourself, from another edit
session or with another command (e.g., a filter command).  Then you will know
which version of the file you want to keep.</div>
<div class="old-help-para">The accuracy of the time check depends on the filesystem.  On Unix it is
usually sub-second.  With old file systems and on MS-Windows it is normally one
second.  Use <code>has('nanotime')</code> to check if sub-second time stamp checks are
available.</div>
<div class="old-help-para">There is one situation where you get the message while there is nothing wrong:
On a Win32 system on the day daylight saving time starts.  There is something
in the Win32 libraries that confuses Vim about the hour time difference.  The
problem goes away the next day.</div>
<div class="old-help-para"><h2 class="help-heading">11. File Searching<span class="help-heading-tags">					<a name="file-searching"></a><span class="help-tag">file-searching</span></span></h2></div>
<div class="old-help-para">The file searching is currently used for the <a href="/neovim-docs-web/en/options#'path'">'path'</a>, <a href="/neovim-docs-web/en/options#'cdpath'">'cdpath'</a> and <a href="/neovim-docs-web/en/options#'tags'">'tags'</a>
options, for <a href="/neovim-docs-web/en/builtin#finddir()">finddir()</a> and <a href="/neovim-docs-web/en/builtin#findfile()">findfile()</a>.  Other commands use <a href="/neovim-docs-web/en/editing#wildcards">wildcards</a>
which is slightly different.</div>
<div class="old-help-para">There are three different types of searching:</div>
<div class="old-help-para">1) Downward search:					<a name="starstar"></a><code class="help-tag-right">starstar</code>
   Downward search uses the wildcards '', '' and possibly others
   supported by your operating system.  ''<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+editing.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/editing.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A1)%20Downward%20search%3A%09%09%09%09%09%2Astarstar%2A%0A%20%20%20Downward%20search%20uses%20the%20wildcards%20'%2A'%2C%20'%2A%2A'%20and%20possibly%20others%0A%20%20%20supported%20by%20your%20operating%20system.%20%20'%2A'%20and%20'%2A%2A'%20are%20handled%20inside%20Vim%2C%0A%20%20%20so%20they%20work%20on%20all%20operating%20systems.%20%20Note%20that%20%22%2A%2A%22%20only%20acts%20as%20a%0A%20%20%20special%20wildcard%20when%20it%20is%20at%20the%20start%20of%20a%20name.%0A%0D%60%60%60">and '</a>' are handled inside Vim,
   so they work on all operating systems.  Note that "**" only acts as a
   special wildcard when it is at the start of a name.</div>
<div class="old-help-para">   The usage of '' is quite simple: It matches 0 or more characters.  In a
   search pattern this would be ".*".  Note that the "." is not used for file
   searching.</div>
<div class="old-help-para">   '**' is more sophisticated:
<div class="help-li" style=""> It ONLY matches directories.
</div><div class="help-li" style=""> It matches up to 30 directories deep by default, so you can use it to
	search an entire directory tree
</div><div class="help-li" style=""> The maximum number of levels matched can be given by appending a number
	to '**'.	Thus '/usr/**2' can match:<pre>/usr
/usr/include
/usr/include/sys
/usr/include/g++
/usr/lib
/usr/lib/X11
....</pre>
</div></div>
<div class="old-help-para">	It does NOT match '/usr/include/g++/std' as this would be three
	levels.
	The allowed number range is 0 ('**0' is removed) to 100
	If the given number is smaller than 0 it defaults to 30, if it's
	bigger than 100 then 100 is used.  The system also has a limit on the
	path length, usually 256 or 1024 bytes.
<div class="help-li" style=""> '**' can only be at the end of the path or be followed by a path
	separator or by a number and a path separator.
</div></div>
<div class="old-help-para">   You can combine ''<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+editing.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/editing.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%20%20%20-%20'%2A%2A'%20can%20only%20be%20at%20the%20end%20of%20the%20path%20or%20be%20followed%20by%20a%20path%0A%09separator%20or%20by%20a%20number%20and%20a%20path%20separator.%0A%0A%20%20%20You%20can%20combine%20'%2A'%20and%20'%2A%2A'%20in%20any%20order%3A%20%3E%0A%09%2Fusr%2F%2A%2A%2Fsys%2F%2A%0A%09%2Fusr%2F%2Atory%2Fsys%2F%2A%2A%0A%09%2Fusr%2F%2A%2A2%2Fsys%2F%2A%0D%60%60%60">and '</a>' in any order:<pre>/usr/**/sys/*
/usr/*tory/sys/**
/usr/**2/sys/*</pre>
2) Upward search:
   Here you can give a directory and then search the directory tree upward for
   a file.  You could give stop-directories to limit the upward search.  The
   stop-directories are appended to the path (for the <a href="/neovim-docs-web/en/options#'path'">'path'</a> option) or to
   the filename (for the <a href="/neovim-docs-web/en/options#'tags'">'tags'</a> option) with a ';'.  If you want several
   stop-directories separate them with ';'.  If you want no stop-directory
   ("search upward till the root directory) just use ';'.<pre>/usr/include/sys;/usr</pre></div>
<div class="old-help-para">   will search in:<pre>/usr/include/sys
/usr/include
/usr</pre></div>
<div class="old-help-para">   If you use a relative path the upward search is started in Vim's current
   directory or in the directory of the current file (if the relative path
   starts with './' and 'd' is not included in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>).</div>
<div class="old-help-para">   If Vim's current path is /u/user_x/work/release and you do<pre>:set path=include;/u/user_x</pre></div>
<div class="old-help-para">  and then search for a file with <a href="/neovim-docs-web/en/editing#gf">gf</a> the file is searched in:<pre>/u/user_x/work/release/include
/u/user_x/work/include
/u/user_x/include</pre></div>
<div class="old-help-para">   Note: If your <a href="/neovim-docs-web/en/options#'path'">'path'</a> setting includes a non-existing directory, Vim will
   skip the non-existing directory, and also does not search in the parent of
   the non-existing directory if upwards searching is used.</div>
<div class="old-help-para">3) Combined up/downward search:
   If Vim's current path is /u/user_x/work/release and you do<pre>set path=**;/u/user_x</pre></div>
<div class="old-help-para">  and then search for a file with <a href="/neovim-docs-web/en/editing#gf">gf</a> the file is searched in:<pre>/u/user_x/work/release/**
/u/user_x/work/**
/u/user_x/**</pre></div>
<div class="old-help-para">   BE CAREFUL!  This might consume a lot of time, as the search of
   '/u/user_x/**' includes '/u/user_x/work/**' and
   '/u/user_x/work/release/**'.  So '/u/user_x/work/release/**' is searched
   three times and '/u/user_x/work/**' is searched twice.</div>
<div class="old-help-para">   In the above example you might want to set path to:<pre>:set path=**,/u/user_x/**</pre></div>
<div class="old-help-para">  This searches:
<div class="help-column_heading">	/u/user_x/work/release/**</div><div class="help-column_heading">	/u/user_x/**</div>   This searches the same directories, but in a different order.</div>
<div class="old-help-para">   Note that completion for ":find", ":sfind", and ":tabfind" commands do not
   currently work with <a href="/neovim-docs-web/en/options#'path'">'path'</a> items that contain a URL or use the double star
   with depth limiter (/usr/**2) or upward search (;) notations.</div>

  
  