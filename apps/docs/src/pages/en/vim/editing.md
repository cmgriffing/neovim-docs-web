---
title: Editing
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Editing Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="edit-files" class="section-title" href="#edit-files">Editing files</a>

                                      Type [gO](#gO) to see the table of contents.


## <a id="edit-intro" class="section-title" href="#edit-intro">1. Introduction</a> 

Editing a file with Vim means:

1. reading the file into a buffer
2. changing the buffer with editor commands
3. writing the buffer into a file

### <a id="current-file" class="section-title" href="#current-file">Note:</a>
As long as you don't write the buffer, the original file remains unchanged.
If you start editing a file (read a file into the buffer), the file name is
remembered as the "current file name".  This is also known as the name of the
current buffer.  It can be used with "%" on the command line [:_%](#:_%).

### <a id="alternate-file" class="section-title" href="#alternate-file">Note:</a>
If there already was a current file name, then that one becomes the alternate
file name.  It can be used with "#" on the command line [:_#](#:_#) and you can use
the [CTRL-^](#CTRL-^) command to toggle between the current and the alternate file.
However, the alternate file name is not changed when [:keepalt](#:keepalt) is used.
An alternate file name is remembered for each window.

### <a id=":keepalt :keepa" class="section-title" href="#:keepalt :keepa">Note:</a>
:keepalt {cmd}		Execute {cmd} while keeping the current alternate file
			name.  Note that commands invoked indirectly (e.g.,
			with a function) may still set the alternate file
			name.

All file names are remembered in the buffer list.  When you enter a file name,
for editing (e.g., with ":e filename") or writing (e.g., with ":w filename"),
the file name is added to the list.  You can use the buffer list to remember
which files you edited and to quickly switch from one file to another (e.g.,
to copy text) with the [CTRL-^](#CTRL-^) command.  First type the number of the file
and then hit CTRL-^.


CTRL-G		or				*CTRL-G* *:f* *:fi* *:file*
:f[ile]			Prints the current file name (as typed, unless ":cd"
			was used), the cursor position (unless the 'ruler'
			option is set), and the file status (readonly,
			modified, read errors, new file).  See the 'shortmess'
			option about how to make this message shorter.

:f[ile]!		like [:file](#:file), but don't truncate the name even when
			'shortmess' indicates this.

{count}CTRL-G		Like CTRL-G, but prints the current file name with
			full path.  If the count is higher than 1 the current
			buffer number is also given.

### <a id="g_CTRL-G word-count byte-count" class="section-title" href="#g_CTRL-G word-count byte-count">Note:</a>
g CTRL-G		Prints the current position of the cursor in five
			ways: Column, Line, Word, Character and Byte.  If the
			number of Characters and Bytes is the same then the
			Character position is omitted.

			If there are characters in the line that take more
			than one position on the screen (<Tab> or special
			character), or characters using more than one byte per
			column (characters above 0x7F when 'encoding' is
			utf-8), both the byte column and the screen column are
			shown, separated by a dash.

			Also see the 'ruler' option and the [wordcount()](#wordcount())
			function.

### <a id="v_g_CTRL-G" class="section-title" href="#v_g_CTRL-G">Note:</a>
{Visual}g CTRL-G	Similar to "g CTRL-G", but Word, Character, Line, and
			Byte counts for the visually selected region are
			displayed.
			In Blockwise mode, Column count is also shown.  (For
			{Visual} see [Visual-mode](#Visual-mode).)

### <a id=":file_f" class="section-title" href="#:file_f">Note:</a>
:f[ile][!] {name}	Sets the current file name to {name}.  The optional !
			avoids truncating the message, as with [:file](#:file).
			If the buffer did have a name, that name becomes the
			[alternate-file](#alternate-file) name.  An unlisted buffer is created
			to hold the old name.
### <a id=":0file" class="section-title" href="#:0file">Note:</a>
:0f[ile][!]		Remove the name of the current buffer.  The optional !
			avoids truncating the message, as with [:file](#:file).

:buffers
:files
:ls			List all the currently known file names.  See
			[windows.txt| |:files| |:buffers| |:ls](#windows.txt| |:files| |:buffers| |:ls).

Vim will remember the full path name of a file name that you enter.  In most
cases when the file name is displayed only the name you typed is shown, but
the full path name is being used if you used the ":cd" command [:cd](#:cd).

### <a id="home-replace" class="section-title" href="#home-replace">Note:</a>
If the environment variable $HOME is set, and the file name starts with that
string, it is often displayed with HOME replaced with "~".  This was done to
keep file names short.  When reading or writing files the full name is still
used, the "~" is only used when displaying file names.  When replacing the
file name would result in just "~", "~/" is used instead (to avoid confusion
between options set to $HOME with 'backupext' set to "~").

When writing the buffer, the default is to use the current file name.  Thus
when you give the "ZZ" or ":wq" command, the original file will be
overwritten.  If you do not want this, the buffer can be written into another
file by giving a file name argument to the ":write" command.  For example: 
```
	vim testfile
	[change the buffer with editor commands]
	:w newfile
	:q

This will create a file "newfile", that is a modified copy of "testfile".
The file "testfile" will remain unchanged.  Anyway, if the 'backup' option is
set, Vim renames or copies the original file before it will be overwritten.
You can use this file if you discover that you need the original file.  See
also the 'patchmode' option.  The name of the backup file is normally the same
as the original file with 'backupext' appended.  The default "~" is a bit
strange to avoid accidentally overwriting existing files.  If you prefer ".bak"
change the 'backupext' option.  The backup file can be placed in another
directory by setting 'backupdir'.

When you started editing without giving a file name, "No File" is displayed in
messages.  If the ":write" command is used with a file name argument, the file
name for the current file is set to that file name.  This only happens when
the 'F' flag is included in 'cpoptions' (by default it is included) [cpo-F](#cpo-F).
This is useful when entering text in an empty buffer and then writing it to a
file.  If 'cpoptions' contains the 'f' flag (by default it is NOT included)
[cpo-f](#cpo-f) the file name is set for the ":read file" command.  This is useful
when starting Vim without an argument and then doing ":read file" to start
editing a file.
When the file name was set and 'filetype' is empty the filetype detection
autocommands will be triggered.
### <a id="not-edited" class="section-title" href="#not-edited">Note:</a>
Because the file name was set without really starting to edit that file, you
are protected from overwriting that file.  This is done by setting the
"notedited" flag.  You can see if this flag is set with the CTRL-G or ":file"
command.  It will include "[Not edited]" when the "notedited" flag is set.
When writing the buffer to the current file name (with ":w!"), the "notedited"
flag is reset.

### <a id="abandon" class="section-title" href="#abandon">Note:</a>
Vim remembers whether you have changed the buffer.  You are protected from
losing the changes you made.  If you try to quit without writing, or want to
start editing another file, Vim will refuse this.  In order to overrule this
protection, add a '!' to the command.  The changes will then be lost.  For
example: ":q" will not work if the buffer was changed, but ":q!" will.  To see
whether the buffer was changed use the "CTRL-G" command.  The message includes
the string "[Modified]" if the buffer has been changed, or "+" if the 'm' flag
is in 'shortmess'.

If you want to automatically save the changes without asking, switch on the
'autowriteall' option.  'autowrite' is the associated Vi-compatible option
that does not work for all commands.

If you want to keep the changed buffer without saving it, switch on the
'hidden' option.  See [hidden-buffer](#hidden-buffer).  Some commands work like this even when
'hidden' is not set, check the help for the command.


## <a id="edit-a-file" class="section-title" href="#edit-a-file">2. Editing a File</a> 

### <a id=":e :edit reload" class="section-title" href="#:e :edit reload">Note:</a>
:e[dit] [++opt] [+cmd]	Edit the current file.  This is useful to re-edit the
			current file, when it has been changed outside of Vim.
			This fails when changes have been made to the current
			buffer and 'autowriteall' isn't set or the file can't
			be written.
			Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":edit! discard" class="section-title" href="#:edit! discard">Note:</a>
:e[dit]! [++opt] [+cmd]
			Edit the current file always.  Discard any changes to
			the current buffer.  This is useful if you want to
			start all over again.
			Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":edit_f" class="section-title" href="#:edit_f">Note:</a>
:e[dit] [++opt] [+cmd] {file}
			Edit {file}.
			This fails when changes have been made to the current
			buffer, unless 'hidden' is set or 'autowriteall' is
			set and the file can be written.
			Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":edit!_f" class="section-title" href="#:edit!_f">Note:</a>
:e[dit]! [++opt] [+cmd] {file}
			Edit {file} always.  Discard any changes to the
			current buffer.
			Also see [++opt| and |+cmd](#++opt| and |+cmd).
### <a id=":edit_# :e#" class="section-title" href="#:edit_# :e#">Note:</a>
:e[dit] [++opt] [+cmd] #[count]
			Edit the [count]th buffer (as shown by [:files](#:files)).
			This command does the same as [count] CTRL-^.  But ":e
			#" doesn't work if the alternate buffer doesn't have a
			file name, while CTRL-^ still works then.
			Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":ene :enew" class="section-title" href="#:ene :enew">Note:</a>
:ene[w]			Edit a new, unnamed buffer.  This fails when changes
			have been made to the current buffer, unless 'hidden'
			is set or 'autowriteall' is set and the file can be
			written.
			If 'fileformats' is not empty, the first format given
			will be used for the new buffer.  If 'fileformats' is
			empty, the 'fileformat' of the current buffer is used.

### <a id=":ene! :enew!" class="section-title" href="#:ene! :enew!">Note:</a>
:ene[w]!		Edit a new, unnamed buffer.  Discard any changes to
			the current buffer.
			Set 'fileformat' like [:enew](#:enew).

### <a id=":fin :find" class="section-title" href="#:fin :find">Note:</a>
:fin[d][!] [++opt] [+cmd] {file}
			Find {file} in 'path' and then [:edit](#:edit) it.

:{count}fin[d][!] [++opt] [+cmd] {file}
			Just like ":find", but use the {count} match in
			'path'.  Thus ":2find file" will find the second
			"file" found in 'path'.  When there are fewer matches
			for the file in 'path' than asked for, you get an
			error message.

### <a id=":ex" class="section-title" href="#:ex">Note:</a>
:ex [++opt] [+cmd] [file]
			Same as [:edit](#:edit).

### <a id=":vi :visual" class="section-title" href="#:vi :visual">Note:</a>
:vi[sual][!] [++opt] [+cmd] [file]
			When used in Ex mode: Leave [Ex-mode](#Ex-mode), go back to
			Normal mode.  Otherwise same as [:edit](#:edit).

### <a id=":vie :view" class="section-title" href="#:vie :view">Note:</a>
:vie[w][!] [++opt] [+cmd] file
			When used in Ex mode: Leave [Ex-mode](#Ex-mode), go back to
			Normal mode.  Otherwise same as [:edit](#:edit), but set
			'readonly' option for this buffer.

### <a id="CTRL-^ CTRL-6" class="section-title" href="#CTRL-^ CTRL-6">Note:</a>
CTRL-^			Edit the alternate file.  Mostly the alternate file is
			the previously edited file.  This is a quick way to
			toggle between two files.  It is equivalent to ":e #",
			except that it also works when there is no file name.

			If the 'autowrite' or 'autowriteall' option is on and
			the buffer was changed, write it.
			Mostly the ^ character is positioned on the 6 key,
			pressing CTRL and 6 then gets you what we call CTRL-^.
			But on some non-US keyboards CTRL-^ is produced in
			another way.

{count}CTRL-^		Edit [count]th file in the buffer list (equivalent to
			":e #[count]").  This is a quick way to switch between
			files.
			See [CTRL-^](#CTRL-^) above for further details.

### <a id="gf E446 E447" class="section-title" href="#gf E446 E447">Note:</a>
[count]gf		Edit the file whose name is under or after the cursor.
			Mnemonic: "goto file".
			Uses the 'isfname' option to find out which characters
			are supposed to be in a file name.  Trailing
			punctuation characters ".,:;!" are ignored. Escaped
			spaces "\ " are reduced to a single space.
			Uses the 'path' option as a list of directory names to
			look for the file.  See the 'path' option for details
			about relative directories and wildcards.
			Uses the 'suffixesadd' option to check for file names
			with a suffix added.
			If the file can't be found, 'includeexpr' is used to
			modify the name and another attempt is done.
			If a [count] is given, the count'th file that is found
			in the 'path' is edited.
			This command fails if Vim refuses to [abandon](#abandon) the
			current file.
			If you want to edit the file in a new window use
			[CTRL-W_CTRL-F](#CTRL-W_CTRL-F).
			If you do want to edit a new file, use:
				:e <cfile>
			To make gf always work like that:
				:map gf :e <cfile><CR>
			If the name is a hypertext link, that looks like
			"type://machine/path", you need the [netrw](#netrw) plugin.
			For Unix the '~' character is expanded, like in
			"~user/file".  Environment variables are expanded too
			[expand-env](#expand-env).

### <a id="v_gf" class="section-title" href="#v_gf">Note:</a>
{Visual}[count]gf	Same as "gf", but the highlighted text is used as the
			name of the file to edit.  'isfname' is ignored.
			Leading blanks are skipped, otherwise all blanks and
			special characters are included in the file name.
			(For {Visual} see [Visual-mode](#Visual-mode).)

### <a id="gF" class="section-title" href="#gF">Note:</a>
[count]gF		Same as "gf", except if a number follows the file
			name, then the cursor is positioned on that line in
			the file.
			The file name and the number must be separated by a
			non-filename (see 'isfname') and non-numeric
			character. " line " is also recognized, like it is
			used in the output of `:verbose command UserCmd`
			White space between the filename, the separator and
			the number are ignored.
			Examples:
				eval.c:10 ~
				eval.c @ 20 ~
				eval.c (30) ~
				eval.c 40 ~

### <a id="v_gF" class="section-title" href="#v_gF">Note:</a>
{Visual}[count]gF	Same as "v_gf".

These commands are used to start editing a single file.  This means that the
file is read into the buffer and the current file name is set.  The file that
is opened depends on the current directory, see [:cd](#:cd).

See [read-messages](#read-messages) for an explanation of the message that is given after the
file has been read.

You can use the ":e!" command if you messed up the buffer and want to start
all over again.  The ":e" command is only useful if you have changed the
current file name.

### <a id=":filename {file}" class="section-title" href="#:filename {file}">Note:</a>
Besides the things mentioned here, more special items for where a filename is
expected are mentioned at [cmdline-special](#cmdline-special).

Note for systems other than Unix: When using a command that accepts a single
file name (like ":edit file") spaces in the file name are allowed, but
trailing spaces are ignored.  This is useful on systems that regularly embed
spaces in file names (like MS-Windows).  Example: The command ":e   Long File
Name " will edit the file "Long File Name".  When using a command that accepts
more than one file name (like ":next file1 file2") embedded spaces must be
escaped with a backslash.

### <a id="wildcard wildcards" class="section-title" href="#wildcard wildcards">Note:</a>
Wildcards in {file} are expanded, but as with file completion, 'wildignore'
and 'suffixes' apply.  Which wildcards are supported depends on the system.
These are the common ones:
	?	matches one character
	*	matches anything, including nothing
	**	matches anything, including nothing, recurses into directories
	[abc]	match 'a', 'b' or 'c'

To avoid the special meaning of the wildcards prepend a backslash.  However,
on MS-Windows the backslash is a path separator and "path\[abc]" is still seen
as a wildcard when "[" is in the 'isfname' option.  A simple way to avoid this
is to use "path\[[]abc]", this matches the file "path\[abc]".

### <a id="starstar-wildcard" class="section-title" href="#starstar-wildcard">Note:</a>
Expanding "**" is possible on Unix, Win32, macOS and a few other systems.
This allows searching a directory tree.  This goes up to 100 directories deep.
Note there are some commands where this works slightly differently, see
[file-searching](#file-searching).
Example:
	:n **/*.txt
Finds files:
	aaa.txt ~
	subdir/bbb.txt ~
	a/b/c/d/ccc.txt ~
When non-wildcard characters are used right before or after "**" these are
only matched in the top directory.  They are not used for directories further
down in the tree. For example:
	:n /usr/inc**/types.h
Finds files:
	/usr/include/types.h ~
	/usr/include/sys/types.h ~
	/usr/inc/old/types.h ~
Note that the path with "/sys" is included because it does not need to match
### <a id="Thus it's like matching "/usr/inc//...", not" class="section-title" href="#Thus it's like matching "/usr/inc//...", not">"/inc".</a>
"/usr/inc*/inc*/inc*".

### <a id="backtick-expansion `-expansion" class="section-title" href="#backtick-expansion `-expansion">Note:</a>
On Unix and a few other systems you can also use backticks for the file name
argument, for example:
	:next `find . -name ver\\*.c -print`
	:view `ls -t *.patch  \| head -n1`
Vim will run the command in backticks using the 'shell' and use the standard
output as argument for the given Vim command (error messages from the shell
command will be discarded).
To see what shell command Vim is running, set the 'verbose' option to 4. When
the shell command returns a non-zero exit code, an error message will be
displayed and the Vim command will be aborted. To avoid this make the shell
always return zero like so:
### <a id=":next `find . -name ver\\.c -print \[\](#\) true`" class="section-title" href="#:next `find . -name ver\\.c -print \[\](#\) true`">Note:</a>

The backslashes before the star are required to prevent the shell from
expanding "ver*.c" prior to execution of the find program.  The backslash
before the shell pipe symbol "|" prevents Vim from parsing it as command
termination.
This also works for most other systems, with the restriction that the
backticks must be around the whole item.  It is not possible to have text
directly before the first or just after the last backtick.

### <a id="`=" class="section-title" href="#`=">Note:</a>
You can have the backticks expanded as a Vim expression, instead of as an
external command, by putting an equal sign right after the first backtick,
e.g.:
	:e `=tempname()`
The expression can contain just about anything, thus this can also be used to
avoid the special meaning of '"', '|', '%' and '#'.  However, 'wildignore'
does apply like to other wildcards.

Environment variables in the expression are expanded when evaluating the
expression, thus this works:
	:e `=$HOME .. '/.vimrc'`
This uses $HOME inside a string and it will be used literally, most likely not
what you intended:
	:e `='$HOME' .. '/.vimrc'`

If the expression returns a string then names are to be separated with line
breaks.  When the result is a [List](#List) then each item is used as a name.  Line
breaks also separate names.
Note that such expressions are only supported in places where a filename is
expected as an argument to an Ex-command.

### <a id="++opt [++opt]" class="section-title" href="#++opt [++opt]">Note:</a>
The [++opt] argument can be used to force the value of 'fileformat',
'fileencoding' or 'binary' to a value for one command, and to specify the
behavior for bad characters.  The form is:
	++{optname}
Or:
	++{optname}={value}

### <a id="++ff ++enc ++bin ++nobin ++edit" class="section-title" href="#++ff ++enc ++bin ++nobin ++edit">Where {optname} is one of:</a>
    ff     or  fileformat   overrides 'fileformat'
    enc    or  encoding	    overrides 'fileencoding'
    bin    or  binary	    sets 'binary'
    nobin  or  nobinary	    resets 'binary'
    bad			    specifies behavior for bad characters
    edit		    for [:read](#:read) only: keep option values as if editing
			    a file

{value} cannot contain white space.  It can be any valid value for these
options.  Examples:
	:e ++ff=unix
This edits the same file again with 'fileformat' set to "unix".

	:w ++enc=latin1 newfile
This writes the current buffer to "newfile" in latin1 format.

The message given when writing a file will show "[converted]" when
'fileencoding' or the value specified with ++enc differs from 'encoding'.

There may be several ++opt arguments, separated by white space.  They must all
appear before any [+cmd](#+cmd) argument.

### <a id="++bad" class="section-title" href="#++bad">Note:</a>
The argument of "++bad=" specifies what happens with characters that can't be
converted and illegal bytes.  It can be one of three things:
    ++bad=X      A single-byte character that replaces each bad character.
    ++bad=keep   Keep bad characters without conversion.  Note that this may
		 result in illegal bytes in your text!
    ++bad=drop   Remove the bad characters.

The default is like "++bad=?": Replace each bad character with a question
mark.  In some places an inverted question mark is used (0xBF).

Note that not all commands use the ++bad argument, even though they do not
give an error when you add it.  E.g. [:write](#:write).

Note that when reading, the 'fileformat' and 'fileencoding' options will be
set to the used format.  When writing this doesn't happen, thus a next write
will use the old value of the option.  Same for the 'binary' option.


### <a id="+cmd [+cmd]" class="section-title" href="#+cmd [+cmd]">Note:</a>
The [+cmd] argument can be used to position the cursor in the newly opened
file, or execute any other command:
	+		Start at the last line.
	+{num}		Start at line {num}.
	+/{pat}		Start at first line containing {pat}.
	+{command}	Execute {command} after opening the new file.
			{command} is any Ex command.
To include a white space in the {pat} or {command}, precede it with a
backslash.  Double the number of backslashes.
	:edit  +/The\ book	     file
	:edit  +/dir\ dirname\\      file
	:edit  +set\ dir=c:\\\\temp  file
Note that in the last example the number of backslashes is halved twice: Once
for the "+cmd" argument and once for the ":set" command.

### <a id="file-formats" class="section-title" href="#file-formats">Note:</a>
The 'fileformat' option sets the <EOL> style for a file:
'fileformat'    characters	   name				~
  "dos"		<CR><NL> or <NL>   DOS format		*DOS-format*
  "unix"	<NL>		   Unix format		*Unix-format*
  "mac"		<CR>		   Mac format		*Mac-format*

When reading a file, the mentioned characters are interpreted as the <EOL>.
In DOS format (default for Windows), <CR><NL> and <NL> are both interpreted as
the <EOL>. Note that when writing the file in DOS format, <CR> characters will
be added for each single <NL>.  Also see [file-read](#file-read).

When writing a file, the mentioned characters are used for <EOL>.  For DOS
format <CR><NL> is used.  Also see [DOS-format-write](#DOS-format-write).

You can read a file in DOS format and write it in Unix format.  This will
replace all <CR><NL> pairs by <NL> (assuming 'fileformats' includes "dos"):
	:e file
	:set fileformat=unix
	:w
If you read a file in Unix format and write with DOS format, all <NL>
characters will be replaced with <CR><NL> (assuming 'fileformats' includes
"unix"):
	:e file
	:set fileformat=dos
	:w

If you start editing a new file and the 'fileformats' option is not empty
(which is the default), Vim will try to detect whether the lines in the file
are separated by the specified formats.  When set to "unix,dos", Vim will
check for lines with a single <NL> (as used on Unix) or by a <CR><NL> pair
(MS-Windows).  Only when ALL lines end in <CR><NL>, 'fileformat' is
set to "dos", otherwise it is set to "unix".  When 'fileformats' includes
"mac", and no <NL> characters are found in the file, 'fileformat' is set to
"mac".

If the 'fileformat' option is set to "dos" on non-MS-Windows systems the
message "[dos format]" is shown to remind you that something unusual is
happening.  On MS-Windows systems you get the message "[unix format]" if
'fileformat' is set to "unix".  On all systems but the Macintosh you get the
message "[mac format]" if 'fileformat' is set to "mac".

If the 'fileformats' option is empty and DOS format is used, but while reading
a file some lines did not end in <CR><NL>, "[CR missing]" will be included in
the file message.
If the 'fileformats' option is empty and Mac format is used, but while reading
a file a <NL> was found, "[NL missing]" will be included in the file message.

If the new file does not exist, the 'fileformat' of the current buffer is used
when 'fileformats' is empty.  Otherwise the first format from 'fileformats' is
used for the new file.

Before editing binary, executable or Vim script files you should set the
'binary' option.  A simple way to do this is by starting Vim with the "-b"
option.  This will avoid the use of 'fileformat'.  Without this you risk that
single <NL> characters are unexpectedly replaced with <CR><NL>.


## <a id="argument-list arglist" class="section-title" href="#argument-list arglist">3. the Argument List</a> 

If you give more than one file name when starting Vim, this list is remembered
as the argument list.  You can jump to each file in this list.

Do not confuse this with the buffer list, which you can see with the
[:buffers](#:buffers) command.  The argument list was already present in Vi, the buffer
list is new in Vim.  Every file name in the argument list will also be present
in the buffer list (unless it was deleted with [:bdel| or |:bwipe](#:bdel| or |:bwipe)).  But it's
common that names in the buffer list are not in the argument list.

This subject is introduced in section [07.2](#07.2) of the user manual.

There is one global argument list, which is used for all windows by default.
It is possible to create a new argument list local to a window, see
[:arglocal](#:arglocal).

You can use the argument list with the following commands, and with the
expression functions [argc()| and |argv()](#argc()| and |argv()).  These all work on the argument
list of the current window.

### <a id=":ar :arg :args" class="section-title" href="#:ar :arg :args">Note:</a>
:ar[gs]			Print the argument list, with the current file in
			square brackets.

### <a id=":args_f" class="section-title" href="#:args_f">:ar[gs] [++opt] [+cmd] {arglist}</a>
			Define {arglist} as the new argument list and edit
			the first one.  This fails when changes have been made
			and Vim does not want to [abandon](#abandon) the current buffer.
			Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":args_f!" class="section-title" href="#:args_f!">:ar[gs]! [++opt] [+cmd] {arglist}</a>
			Define {arglist} as the new argument list and edit
			the first one.  Discard any changes to the current
			buffer.
			Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":arge :argedit" class="section-title" href="#:arge :argedit">:[count]arge[dit][!] [++opt] [+cmd] {name} ..</a>
			Add {name}s to the argument list and edit it.
			When {name} already exists in the argument list, this
			entry is edited.
			This is like using [:argadd| and then |:edit](#:argadd| and then |:edit).
			Spaces in filenames have to be escaped with "\".
			[count] is used like with [:argadd](#:argadd).
			If the current file cannot be [abandon](#abandon)ed {name}s will
			still be added to the argument list, but won't be
			edited. No check for duplicates is done.
			Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":arga :argadd E479" class="section-title" href="#:arga :argadd E479">:[count]arga[dd] {name} ..</a>
:[count]arga[dd]
			Add the {name}s to the argument list.  When {name} is
			omitted add the current buffer name to the argument
			list.
			If [count] is omitted, the {name}s are added just
			after the current entry in the argument list.
			Otherwise they are added after the [count]'th file.
			If the argument list is "a b c", and "b" is the
			current argument, then these commands result in:
				command		new argument list ~
				:argadd x	a b x c
				:0argadd x	x a b c
				:1argadd x	a x b c
				:$argadd x	a b c x
			And after the last one:
				:+2argadd y	a b c x y
			There is no check for duplicates, it is possible to
			add a file to the argument list twice.  You can use
			[:argdedupe](#:argdedupe) to fix it afterwards:
### <a id=":argadd .txt | argdedupe" class="section-title" href="#:argadd .txt | argdedupe">Note:</a>
			The currently edited file is not changed.
			Note: you can also use this method:
				:args ## x
			This will add the "x" item and sort the new list.

### <a id=":argded :argdedupe" class="section-title" href="#:argded :argdedupe">:argded[upe]</a>
			Remove duplicate filenames from the argument list.
			If your current file is a duplicate, your current file
			will change to the original file index.

### <a id=":argd :argdelete E480 E610" class="section-title" href="#:argd :argdelete E480 E610">:argd[elete] {pattern} ..</a>
			Delete files from the argument list that match the
			{pattern}s.  {pattern} is used like a file pattern,
			see [file-pattern](#file-pattern).  "%" can be used to delete the
			current entry.
			This command keeps the currently edited file, also
			when it's deleted from the argument list.
			Example:
### <a id=":argdel .obj" class="section-title" href="#:argdel .obj">Note:</a>

:[range]argd[elete]	Delete the [range] files from the argument list.
			Example:
				:10,$argdel
			Deletes arguments 10 and further, keeping 1-9.
				:$argd
			Deletes just the last one.
				:argd
				:.argd
			Deletes the current argument.
				:%argd
			Removes all the files from the arglist.
			When the last number in the range is too high, up to
			the last argument is deleted.

### <a id=":argu :argument" class="section-title" href="#:argu :argument">Note:</a>
:[count]argu[ment] [count] [++opt] [+cmd]
			Edit file [count] in the argument list.  When [count]
			is omitted the current entry is used.  This fails
			when changes have been made and Vim does not want to
			[abandon](#abandon) the current buffer.
			Also see [++opt| and |+cmd](#++opt| and |+cmd).

:[count]argu[ment]! [count] [++opt] [+cmd]
			Edit file [count] in the argument list, discard any
			changes to the current buffer.  When [count] is
			omitted the current entry is used.
			Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":n :ne :next E165 E163" class="section-title" href="#:n :ne :next E165 E163">:[count]n[ext] [++opt] [+cmd]</a>
			Edit [count] next file.  This fails when changes have
			been made and Vim does not want to [abandon](#abandon) the
			current buffer.  Also see [++opt| and |+cmd](#++opt| and |+cmd).

:[count]n[ext]! [++opt] [+cmd]
			Edit [count] next file, discard any changes to the
			buffer.  Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":next_f" class="section-title" href="#:next_f">:n[ext] [++opt] [+cmd] {arglist}</a>
			Same as [:args_f](#:args_f).

:n[ext]! [++opt] [+cmd] {arglist}
			Same as [:args_f!](#:args_f!).

### <a id=":Next :N E164" class="section-title" href="#:Next :N E164">:[count]N[ext] [count] [++opt] [+cmd]</a>
			Edit [count] previous file in argument list.  This
			fails when changes have been made and Vim does not
			want to [abandon](#abandon) the current buffer.
			Also see [++opt| and |+cmd](#++opt| and |+cmd).

:[count]N[ext]! [count] [++opt] [+cmd]
			Edit [count] previous file in argument list.  Discard
			any changes to the buffer.  Also see [++opt](#++opt) and
			[+cmd](#+cmd).

### <a id=":prev :previous" class="section-title" href="#:prev :previous">:[count]prev[ious] [count] [++opt] [+cmd]</a>
			Same as :Next.  Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":rew :rewind" class="section-title" href="#:rew :rewind">Note:</a>
:rew[ind] [++opt] [+cmd]
			Start editing the first file in the argument list.
			This fails when changes have been made and Vim does
			not want to [abandon](#abandon) the current buffer.
			Also see [++opt| and |+cmd](#++opt| and |+cmd).

:rew[ind]! [++opt] [+cmd]
			Start editing the first file in the argument list.
			Discard any changes to the buffer.  Also see [++opt](#++opt)
			and [+cmd](#+cmd).

### <a id=":fir :first" class="section-title" href="#:fir :first">Note:</a>
:fir[st][!] [++opt] [+cmd]
			Other name for ":rewind".

### <a id=":la :last" class="section-title" href="#:la :last">Note:</a>
:la[st] [++opt] [+cmd]
			Start editing the last file in the argument list.
			This fails when changes have been made and Vim does
			not want to [abandon](#abandon) the current buffer.
			Also see [++opt| and |+cmd](#++opt| and |+cmd).

:la[st]! [++opt] [+cmd]
			Start editing the last file in the argument list.
			Discard any changes to the buffer.  Also see [++opt](#++opt)
			and [+cmd](#+cmd).

### <a id=":wn :wnext" class="section-title" href="#:wn :wnext">Note:</a>
:[count]wn[ext] [++opt]
			Write current file and start editing the [count]
			next file.  Also see [++opt| and |+cmd](#++opt| and |+cmd).

:[count]wn[ext] [++opt] {file}
			Write current file to {file} and start editing the
			[count] next file, unless {file} already exists and
			the 'writeany' option is off.  Also see [++opt](#++opt) and
			[+cmd](#+cmd).

:[count]wn[ext]! [++opt] {file}
			Write current file to {file} and start editing the
			[count] next file.  Also see [++opt| and |+cmd](#++opt| and |+cmd).

### <a id=":wN :wNext" class="section-title" href="#:wN :wNext">:[count]wN[ext][!] [++opt] [file]</a>
### <a id=":wp :wprevious" class="section-title" href="#:wp :wprevious">:[count]wp[revious][!] [++opt] [file]</a>
			Same as :wnext, but go to previous file instead of
			next.

The [count] in the commands above defaults to one.  For some commands it is
possible to use two counts.  The last one (rightmost one) is used.

If no [+cmd] argument is present, the cursor is positioned at the last known
cursor position for the file.  If 'startofline' is set, the cursor will be
positioned at the first non-blank in the line, otherwise the last know column
is used.  If there is no last known cursor position the cursor will be in the
first line (the last line in Ex mode).

### <a id="{arglist}" class="section-title" href="#{arglist}">Note:</a>
The wildcards in the argument list are expanded and the file names are sorted.
Thus you can use the command "vim *.c" to edit all the C files.  From within
Vim the command ":n *.c" does the same.

White space is used to separate file names.  Put a backslash before a space or
tab to include it in a file name.  E.g., to edit the single file "foo bar":
	:next foo\ bar

On Unix and a few other systems you can also use backticks, for example:
	:next `find . -name \\*.c -print`
The backslashes before the star are required to prevent "*.c" to be expanded
by the shell before executing the find program.

### <a id="arglist-position" class="section-title" href="#arglist-position">Note:</a>
When there is an argument list you can see which file you are editing in the
title of the window (if there is one and 'title' is on) and with the file
message you get with the "CTRL-G" command.  You will see something like
	(file 4 of 11)
If 'shortmess' contains 'f' it will be
	(4 of 11)
If you are not really editing the file at the current position in the argument
list it will be
	(file (4) of 11)
This means that you are position 4 in the argument list, but not editing the
fourth file in the argument list.  This happens when you do ":e file".


LOCAL ARGUMENT LIST

### <a id=":arglocal" class="section-title" href="#:arglocal">Note:</a>
:argl[ocal]		Make a local copy of the global argument list.
			Doesn't start editing another file.

:argl[ocal][!] [++opt] [+cmd] {arglist}
			Define a new argument list, which is local to the
			current window.  Works like [:args_f](#:args_f) otherwise.

### <a id=":argglobal" class="section-title" href="#:argglobal">Note:</a>
:argg[lobal]		Use the global argument list for the current window.
			Doesn't start editing another file.

:argg[lobal][!] [++opt] [+cmd] {arglist}
			Use the global argument list for the current window.
			Define a new global argument list like [:args_f](#:args_f).
			All windows using the global argument list will see
			this new list.

There can be several argument lists.  They can be shared between windows.
When they are shared, changing the argument list in one window will also
change it in the other window.

When a window is split the new window inherits the argument list from the
current window.  The two windows then share this list, until one of them uses
[:arglocal| or |:argglobal](#:arglocal| or |:argglobal) to use another argument list.


USING THE ARGUMENT LIST

### <a id=":argdo" class="section-title" href="#:argdo">Note:</a>
:[range]argdo[!] {cmd}	Execute {cmd} for each file in the argument list or,
			if [range] is specified, only for arguments in that
			range.  It works like doing this:
				:rewind
				:{cmd}
				:next
				:{cmd}
				etc.
			When the current file can't be [abandon](#abandon)ed and the [!]
			is not present, the command fails.
			When an error is detected on one file, further files
			in the argument list will not be visited.
			The last file in the argument list (or where an error
			occurred) becomes the current file.
			{cmd} can contain '|' to concatenate several commands.
			{cmd} must not change the argument list.
			Note: While this command is executing, the Syntax
			autocommand event is disabled by adding it to
			'eventignore'.  This considerably speeds up editing
			each file.
			Also see [:windo|, |:tabdo|, |:bufdo|, |:cdo|, |:ldo](#:windo|, |:tabdo|, |:bufdo|, |:cdo|, |:ldo),
			[:cfdo| and |:lfdo](#:cfdo| and |:lfdo).

Example:
	:args *.c
	:argdo set ff=unix | update
This sets the 'fileformat' option to "unix" and writes the file if it is now
### <a id="This is done for all .c files." class="section-title" href="#This is done for all .c files.">changed.</a>

Example:
	:args *.[ch]
	:argdo %s/\<my_foo\>/My_Foo/ge | update
This changes the word "my_foo" to "My_Foo" in all *.c and *.h files.  The "e"
flag is used for the ":substitute" command to avoid an error for files where
"my_foo" isn't used.  ":update" writes the file only if changes were made.


## <a id="writing save-file" class="section-title" href="#writing save-file">4. Writing</a> 

Note: When the 'write' option is off, you are not able to write any file.

### <a id=":w :write" class="section-title" href="#:w :write">Note:</a>
### <a id="E502 E503 E504 E505" class="section-title" href="#E502 E503 E504 E505">Note:</a>
### <a id="E512 E514 E667 E949" class="section-title" href="#E512 E514 E667 E949">Note:</a>
:w[rite] [++opt]	Write the whole buffer to the current file.  This is
			the normal way to save changes to a file.  It fails
			when the 'readonly' option is set or when there is
			another reason why the file can't be written.
			For ++opt see [++opt](#++opt), but only ++bin, ++nobin, ++ff
			and ++enc are effective.

:w[rite]! [++opt]	Like ":write", but forcefully write when 'readonly' is
			set or there is another reason why writing was
			refused.
			Note: This may change the permission and ownership of
			the file and break (symbolic) links.  Add the 'W' flag
			to 'cpoptions' to avoid this.

:[range]w[rite][!] [++opt]
			Write the specified lines to the current file.  This
			is unusual, because the file will not contain all
			lines in the buffer.

### <a id=":w_f :write_f" class="section-title" href="#:w_f :write_f">Note:</a>
:[range]w[rite] [++opt]	{file}
			Write the specified lines to {file}, unless it
			already exists and the 'writeany' option is off.

### <a id=":w!" class="section-title" href="#:w!">Note:</a>
:[range]w[rite]! [++opt] {file}
			Write the specified lines to {file}.  Overwrite an
			existing file.

### <a id=":w_a :write_a E494" class="section-title" href="#:w_a :write_a E494">Note:</a>
:[range]w[rite][!] [++opt] >>
			Append the specified lines to the current file.

:[range]w[rite][!] [++opt] >> {file}
			Append the specified lines to {file}.  '!' forces the
			write even if file does not exist.

### <a id=":w_c :write_c" class="section-title" href="#:w_c :write_c">Note:</a>
:[range]w[rite] [++opt] !{cmd}
			Execute {cmd} with [range] lines as standard input
			(note the space in front of the '!').  {cmd} is
			executed like with ":!{cmd}", any '!' is replaced with
			the previous command [:!](#:!).

The default [range] for the ":w" command is the whole buffer (1,$).  If you
write the whole buffer, it is no longer considered changed.  When you
write it to a different file with ":w somefile" it depends on the "+" flag in
'cpoptions'.  When included, the write command will reset the 'modified' flag,
even though the buffer itself may still be different from its file.

If a file name is given with ":w" it becomes the alternate file.  This can be
used, for example, when the write fails and you want to try again later with
":w #".  This can be switched off by removing the 'A' flag from the
'cpoptions' option.

Note that the 'fsync' option matters here.  If it's set it may make writes
slower (but safer).

### <a id=":sav :saveas" class="section-title" href="#:sav :saveas">Note:</a>
:sav[eas][!] [++opt] {file}
			Save the current buffer under the name {file} and set
			the filename of the current buffer to {file}.  The
			previous name is used for the alternate file name.
			The [!] is needed to overwrite an existing file.
			When 'filetype' is empty filetype detection is done
			with the new name, before the file is written.
			When the write was successful 'readonly' is reset.

### <a id=":up :update" class="section-title" href="#:up :update">Note:</a>
:[range]up[date][!] [++opt] [>>] [file]
			Like ":write", but only write when the buffer has been
			modified.


### <a id="buffer-write" class="section-title" href="#buffer-write">Writing With Multiple Buffers</a>

### <a id=":wa :wall" class="section-title" href="#:wa :wall">Note:</a>
:wa[ll]			Write all changed buffers.  Buffers without a file
			name cause an error message.  Buffers which are
			readonly are not written.

:wa[ll]!		Write all changed buffers, even the ones that are
			readonly.  Buffers without a file name are not
			written and cause an error message.


Vim will warn you if you try to overwrite a file that has been changed
elsewhere (unless "!" was used).  See [timestamp](#timestamp).

### <a id="backup E207 E506 E507 E508 E509 E510" class="section-title" href="#backup E207 E506 E507 E508 E509 E510">Note:</a>
If you write to an existing file (but do not append) while the 'backup',
'writebackup' or 'patchmode' option is on, a backup of the original file is
made.  The file is either copied or renamed (see 'backupcopy').  After the
file has been successfully written and when the 'writebackup' option is on and
the 'backup' option is off, the backup file is deleted.  When the 'patchmode'
option is on the backup file may be renamed.

### <a id="backup-table" class="section-title" href="#backup-table">Note:</a>
'backup' 'writebackup'	action	~
   off	     off	no backup made
   off	     on		backup current file, deleted afterwards (default)
   on	     off	delete old backup, backup current file
   on	     on		delete old backup, backup current file

When the 'backupskip' pattern matches with the name of the file which is
written, no backup file is made.  The values of 'backup' and 'writebackup' are
ignored then.

When the 'backup' option is on, an old backup file (with the same name as the
new backup file) will be deleted.  If 'backup' is not set, but 'writebackup'
is set, an existing backup file will not be deleted.  The backup file that is
made while the file is being written will have a different name.

On some filesystems it's possible that in a crash you lose both the backup and
the newly written file (it might be there but contain bogus data).  In that
case try recovery, because the swap file is synced to disk and might still be
there. [:recover](#:recover)

The directories given with the 'backupdir' option are used to put the backup
file in.  (default: same directory as the written file).

Whether the backup is a new file, which is a copy of the original file, or the
original file renamed depends on the 'backupcopy' option.  See there for an
explanation of when the copy is made and when the file is renamed.

If the creation of a backup file fails, the write is not done.  If you want
to write anyway add a '!' to the command.

### <a id="write-permissions" class="section-title" href="#write-permissions">Note:</a>
When writing a new file the permissions are read-write.  For unix the mask is
0o666 with additionally umask applied.  When writing a file that was read Vim
will preserve the permissions, but clear the s-bit.

### <a id="write-readonly" class="section-title" href="#write-readonly">Note:</a>
When the 'cpoptions' option contains 'W', Vim will refuse to overwrite a
readonly file.  When 'W' is not present, ":w!" will overwrite a readonly file,
if the system allows it (the directory must be writable).

### <a id="write-fail" class="section-title" href="#write-fail">Note:</a>
If the writing of the new file fails, you have to be careful not to lose
your changes AND the original file.  If there is no backup file and writing
the new file failed, you have already lost the original file!  DON'T EXIT VIM
UNTIL YOU WRITE OUT THE FILE!  If a backup was made, it is put back in place
of the original file (if possible).  If you exit Vim, and lose the changes
you made, the original file will mostly still be there.  If putting back the
original file fails, there will be an error message telling you that you
lost the original file.

### <a id="DOS-format-write" class="section-title" href="#DOS-format-write">Note:</a>
If the 'fileformat' is "dos", <CR><NL> is used for <EOL>.  This is default
for Windows. On other systems the message "[dos format]" is shown to
remind you that an unusual <EOL> was used.
### <a id="Unix-format-write" class="section-title" href="#Unix-format-write">Note:</a>
If the 'fileformat' is "unix", <NL> is used for <EOL>.  On Windows
the message "[unix format]" is shown.
### <a id="Mac-format-write" class="section-title" href="#Mac-format-write">Note:</a>
If the 'fileformat' is "mac", <CR> is used for <EOL>.  On non-Mac systems the
message "[mac format]" is shown.

See also [file-formats](#file-formats) and the 'fileformat' and 'fileformats' options.

### <a id="ACL" class="section-title" href="#ACL">Note:</a>
ACL stands for Access Control List.  It is an advanced way to control access
rights for a file.  It is used on new MS-Windows and Unix systems, but only
when the filesystem supports it.
   Vim attempts to preserve the ACL info when writing a file.  The backup file
will get the ACL info of the original file.
   The ACL info is also used to check if a file is read-only (when opening the
file).

### <a id="read-only-share" class="section-title" href="#read-only-share">Note:</a>
When MS-Windows shares a drive on the network it can be marked as read-only.
This means that even if the file read-only attribute is absent, and the ACL
settings on NT network shared drives allow writing to the file, you can still
not write to the file.  Vim on Win32 platforms will detect read-only network
drives and will mark the file as read-only.  You will not be able to override
it with [:write](#:write).

### <a id="write-device" class="section-title" href="#write-device">Note:</a>
When the file name is actually a device name, Vim will not make a backup (that
would be impossible).  You need to use "!", since the device already exists.
Example for Unix:
	:w! /dev/lpt0
and MS-Windows:
	:w! lpt0
For Unix a device is detected when the name doesn't refer to a normal file or
a directory.  A fifo or named pipe also looks like a device to Vim.
For MS-Windows the device is detected by its name:
	CON
	CLOCK$
	NUL
	PRN
	COMn	n=1,2,3... etc
	LPTn	n=1,2,3... etc
The names can be in upper- or lowercase.


## <a id="write-quit" class="section-title" href="#write-quit">5. Writing and Quitting</a> 

### <a id=":q :quit" class="section-title" href="#:q :quit">Note:</a>
:q[uit]			Quit the current window.  Quit Vim if this is the last
			[edit-window](#edit-window).  This fails when changes have been made
			and Vim refuses to [abandon](#abandon) the current buffer, and
			when the last file in the argument list has not been
			edited.
			If there are other tab pages and quitting the last
			window in the current tab page the current tab page is
			closed [tab-page](#tab-page).
			Triggers the [QuitPre](#QuitPre) autocommand event.
			See [CTRL-W_q](#CTRL-W_q) for quitting another window.

:conf[irm] q[uit]	Quit, but give prompt when changes have been made, or
			the last file in the argument list has not been
			edited.  See [:confirm](#:confirm) and 'confirm'.

:q[uit]!		Quit without writing, also when the current buffer has
			changes.  The buffer is unloaded, also when it has
			'hidden' set.
			If this is the last window and there is a modified
			hidden buffer, the current buffer is abandoned and the
			first changed hidden buffer becomes the current
			buffer.
			Use ":qall!" to exit always.

:cq[uit]		Quit always, without writing, and return an error
			code.  See [:cq](#:cq).

### <a id=":wq" class="section-title" href="#:wq">Note:</a>
:wq [++opt]		Write the current file and close the window.  If this
			was the last [edit-window](#edit-window) Vim quits.
			Writing fails when the file is read-only or the buffer
			does not have a name.  Quitting fails when the last
			file in the argument list has not been edited.

:wq! [++opt]		Write the current file and close the window.  If this
			was the last [edit-window](#edit-window) Vim quits.  Writing fails
			when the current buffer does not have a name.

:wq [++opt] {file}	Write to {file} and close the window.  If this was the
			last [edit-window](#edit-window) Vim quits.  Quitting fails when the
			last file in the argument list has not been edited.

:wq! [++opt] {file}	Write to {file} and close the current window.  Quit
			Vim if this was the last [edit-window](#edit-window).

:[range]wq[!] [++opt] [file]
			Same as above, but only write the lines in [range].

### <a id=":x :xit" class="section-title" href="#:x :xit">Note:</a>
:[range]x[it][!] [++opt] [file]
			Like ":wq", but write only when changes have been
			made.
			When 'hidden' is set and there are more windows, the
			current buffer becomes hidden, after writing the file.

### <a id=":exi :exit" class="section-title" href="#:exi :exit">Note:</a>
:[range]exi[t][!] [++opt] [file]
			Same as :xit.

### <a id="ZZ" class="section-title" href="#ZZ">Note:</a>
ZZ			Write current file, if modified, and close the current
			window (same as ":x").
			If there are several windows for the current file,
			only the current window is closed.

### <a id="ZQ" class="section-title" href="#ZQ">Note:</a>
ZQ			Quit without checking for changes (same as ":q!").

### <a id="window-exit" class="section-title" href="#window-exit">Multiple Windows and Buffers</a>

### <a id=":qa :qall" class="section-title" href="#:qa :qall">Note:</a>
:qa[ll]		Exit Vim, unless there are some buffers which have been
		changed.  (Use ":bmod" to go to the next modified buffer).
		When 'autowriteall' is set all changed buffers will be
		written, like [:wqall](#:wqall).

:conf[irm] qa[ll]
		Exit Vim.  Bring up a prompt when some buffers have been
		changed.  See [:confirm](#:confirm).

:qa[ll]!	Exit Vim.  Any changes to buffers are lost.
		Also see [:cquit](#:cquit), it does the same but exits with a non-zero
		value.

### <a id=":quita :quitall" class="section-title" href="#:quita :quitall">Note:</a>
:quita[ll][!]	Same as ":qall".

### <a id=":wqa :wqall :xa :xall" class="section-title" href="#:wqa :wqall :xa :xall">:wqa[ll] [++opt]</a>
:xa[ll]		Write all changed buffers and exit Vim.  If there are buffers
		without a file name, which are readonly or which cannot be
		written for another reason, Vim will not quit.

:conf[irm] wqa[ll] [++opt]
:conf[irm] xa[ll]
		Write all changed buffers and exit Vim.  Bring up a prompt
		when some buffers are readonly or cannot be written for
		another reason.  See [:confirm](#:confirm).

:wqa[ll]! [++opt]
:xa[ll]!	Write all changed buffers, even the ones that are readonly,
		and exit Vim.  If there are buffers without a file name or
		which cannot be written for another reason, Vim will not quit.


## <a id="edit-dialogs" class="section-title" href="#edit-dialogs">6. Dialogs</a> 

### <a id=":confirm :conf" class="section-title" href="#:confirm :conf">Note:</a>
:conf[irm] {command}	Execute {command}, and use a dialog when an
			operation has to be confirmed.  Can be used on the
			[:q|, |:qa| and |:w](#:q|, |:qa| and |:w) commands (the latter to override
			a read-only setting), and any other command that can
			fail in such a way, such as [:only|, |:buffer](#:only|, |:buffer),
			[:bdelete](#:bdelete), etc.

Examples:
  :confirm w foo
	Will ask for confirmation when "foo" already exists.
  :confirm q
	Will ask for confirmation when there are changes.
  :confirm qa
	If any modified, unsaved buffers exist, you will be prompted to save
	or abandon each one.  There are also choices to "save all" or "abandon
	all".

If you want to always use ":confirm", set the 'confirm' option.

### <a id=":browse :bro E338 E614 E615 E616" class="section-title" href="#:browse :bro E338 E614 E615 E616">Note:</a>
:bro[wse] {command}	Open a file selection dialog for an argument to
			{command}.  At present this works for [:e|, |:w](#:e|, |:w),
			[:wall|, |:wq|, |:wqall|, |:x|, |:xall|, |:exit](#:wall|, |:wq|, |:wqall|, |:x|, |:xall|, |:exit),
			[:view|, |:sview|, |:r|, |:saveas|, |:sp|, |:mkexrc](#:view|, |:sview|, |:r|, |:saveas|, |:sp|, |:mkexrc),
			[:mkvimrc|, |:mksession|, |:mkview|, |:split](#:mkvimrc|, |:mksession|, |:mkview|, |:split),
			[:vsplit|, |:tabe|, |:tabnew|, |:cfile|, |:cgetfile](#:vsplit|, |:tabe|, |:tabnew|, |:cfile|, |:cgetfile),
			[:caddfile|, |:lfile|, |:lgetfile|, |:laddfile](#:caddfile|, |:lfile|, |:lgetfile|, |:laddfile),
			[:diffsplit|, |:diffpatch|, |:pedit|, |:redir](#:diffsplit|, |:diffpatch|, |:pedit|, |:redir),
			[:source|, |:update|, |:visual|, |:vsplit](#:source|, |:update|, |:visual|, |:vsplit),
			and [:qall](#:qall) if 'confirm' is set.
			{only in Win32 GUI, in console `browse edit` works
			if the FileExplorer autocommand group exists}
			When ":browse" is not possible you get an error
			message.  If {command} doesn't support browsing, the
			{command} is executed without a dialog.
			":browse set" works like [:options](#:options).
			See also [:oldfiles](#:oldfiles) for ":browse oldfiles".

The syntax is best shown via some examples:
	:browse e $vim/foo
		Open the browser in the $vim/foo directory, and edit the
		file chosen.
	:browse e
		Open the browser in the directory specified with 'browsedir',
		and edit the file chosen.
	:browse w
		Open the browser in the directory of the current buffer,
		with the current buffer filename as default, and save the
		buffer under the filename chosen.
	:browse w C:/bar
		Open the browser in the C:/bar directory, with the current
		buffer filename as default, and save the buffer under the
		filename chosen.
Also see the 'browsedir' option.
For versions of Vim where browsing is not supported, the command is executed
unmodified.

### <a id="browsefilter" class="section-title" href="#browsefilter">Note:</a>
For MS-Windows you can modify the filters that are used in the browse
dialog.  By setting the g:browsefilter or b:browsefilter variables, you can
change the filters globally or locally to the buffer.  The variable is set to
a string in the format "{filter label}\t{pattern};{pattern}\n" where {filter
label} is the text that appears in the "Files of Type" comboBox, and {pattern}
is the pattern which filters the filenames.  Several patterns can be given,
separated by ';'.

For example, to have only Vim files in the dialog, you could use the following
command:

### <a id="let g:browsefilter = "Vim Scripts\t.vim\nVim Startup Files\tvimrc\n"" class="section-title" href="#let g:browsefilter = "Vim Scripts\t.vim\nVim Startup Files\tvimrc\n"">Note:</a>

You can override the filter setting on a per-buffer basis by setting the
b:browsefilter variable.  You would most likely set b:browsefilter in a
filetype plugin, so that the browse dialog would contain entries related to
the type of file you are currently editing.  Disadvantage: This makes it
difficult to start editing a file of a different type.  To overcome this, you
may want to add "All Files\t*.*\n" as the final filter, so that the user can
still access any desired file.

To avoid setting browsefilter when Vim does not actually support it, you can
use has("browsefilter"):

	if has("browsefilter")
	   let g:browsefilter = "whatever"
	endif


## <a id="current-directory" class="section-title" href="#current-directory">7. the Current Directory</a> 

You can use [:cd|, |:tcd| and |:lcd](#:cd|, |:tcd| and |:lcd) to change to another directory, so you
will not have to type that directory name in front of the file names.  It also
makes a difference for executing external commands, e.g. ":!ls" or ":te ls".

There are three current-directory "scopes": global, tab and window.  The
window-local working directory takes precedence over the tab-local
working directory, which in turn takes precedence over the global
working directory.  If a local working directory (tab or window) does not
exist, the next-higher scope in the hierarchy applies.

### <a id=":cd E747 E472" class="section-title" href="#:cd E747 E472">Note:</a>
:cd[!]			On non-Unix systems when 'cdhome' is off: Print the
			current directory name.
			Otherwise: Change the current directory to the home
			directory.  Clear any window-local directory.
			Use [:pwd](#:pwd) to print the current directory on all
			systems.

:cd[!] {path}		Change the current directory to {path}.
			If {path} is relative, it is searched for in the
			directories listed in ['cdpath'](#'cdpath').
			Does not change the meaning of an already opened file,
			because its full path name is remembered.  Files from
			the [arglist](#arglist) may change though!
			On MS-Windows this also changes the active drive.
			To change to the directory of the current file:
				:cd %:h
```

### <a id=":cd- E186" class="section-title" href="#:cd- E186">Note:</a>
:cd[!] -		Change to the previous current directory (before the
			previous ":cd {path}" command).

### <a id=":chd :chdir" class="section-title" href="#:chd :chdir">Note:</a>
:chd[ir][!] [path]	Same as [:cd](#:cd).

### <a id=":tc :tcd" class="section-title" href="#:tc :tcd">Note:</a>
:tc[d][!] {path}	Like [:cd](#:cd), but only set the directory for the current
			tab.  The current window will also use this directory.
			The current directory is not changed for windows in
			other tabs and for windows in the current tab that
			have their own window-local directory.

### <a id=":tcd-" class="section-title" href="#:tcd-">Note:</a>
:tc[d][!] -		Change to the previous current directory (before the
			previous ":tcd {path}" command).

### <a id=":tch :tchdir" class="section-title" href="#:tch :tchdir">Note:</a>
:tch[dir][!]		Same as [:tcd](#:tcd).

### <a id=":lc :lcd" class="section-title" href="#:lc :lcd">Note:</a>
:lc[d][!] {path}	Like [:cd](#:cd), but only set the current directory for the
			current window.  The current directory for other
			windows or tabs is not changed.

### <a id=":lch :lchdir" class="section-title" href="#:lch :lchdir">Note:</a>
:lch[dir][!]		Same as [:lcd](#:lcd).

### <a id=":lcd-" class="section-title" href="#:lcd-">Note:</a>
:lc[d][!] -		Change to the previous current directory (before the
			previous ":lcd {path}" command).

### <a id=":pw :pwd E187" class="section-title" href="#:pw :pwd E187">Note:</a>
:pw[d]			Print the current directory name.
			Also see [getcwd()](#getcwd()).
### <a id=":pwd-verbose" class="section-title" href="#:pwd-verbose">Note:</a>
			When 'verbose' is non-zero, [:pwd](#:pwd) will also display
			what scope the current directory was set. Example: 
```
				" Set by :cd
				:verbose pwd
				[global] /path/to/current

				" Set by :lcd
				:verbose pwd
				[window] /path/to/current

				" Set by :tcd
				:verbose pwd
				[tabpage] /path/to/current

So long as no [:lcd| or |:tcd](#:lcd| or |:tcd) command has been used, all windows share the
same current directory.  Using a command to jump to another window doesn't
change anything for the current directory.

When [:lcd](#:lcd) has been used for a window, the specified directory becomes the
current directory for that window.  Windows where the [:lcd](#:lcd) command has not
been used stick to the global or tab-local directory.  When jumping to another
window the current directory is changed to the last specified local current
directory.  If none was specified, the global or tab-local directory is used.
When creating a new window it inherits the local directory of the current window.

When changing tabs the same behaviour applies.  If the current tab has no
local working directory the global working directory is used.

When a [:cd](#:cd) command is used, the current window and tab will lose their local
current directories and will use the global current directory from now on.
When a [:tcd](#:tcd) command is used, only the current window will lose its local
working directory.

After using [:cd](#:cd) the full path name will be used for reading and writing
files.  On some networked file systems this may cause problems.  The result of
using the full path name is that the file names currently in use will remain
referring to the same file.  Example: If you have a file a:test and a
directory a:vim the commands ":e test" ":cd vim" ":w" will overwrite the file
a:test and not write a:vim/test.  But if you do ":w test" the file a:vim/test
will be written, because you gave a new file name and did not refer to a
filename before the ":cd".


## <a id="edit-binary" class="section-title" href="#edit-binary">8. Editing Binary Files</a> 

Although Vim was made to edit text files, it is possible to edit binary
files.  The [-b](#-b) Vim argument (b for binary) makes Vim do file I/O in binary
mode, and sets some options for editing binary files ('binary' on, 'textwidth'
to 0, 'modeline' off, 'expandtab' off).  Setting the 'binary' option has the
same effect.  Don't forget to do this before reading the file.

There are a few things to remember when editing binary files:
- When editing executable files the number of bytes must not change.
  Use only the "R" or "r" command to change text.  Do not delete characters
  with "x" or by backspacing.
- Set the 'textwidth' option to 0.  Otherwise lines will unexpectedly be
  split in two.
- When there are not many <EOL>s, the lines will become very long.  If you
  want to edit a line that does not fit on the screen reset the 'wrap' option.
  Horizontal scrolling is used then.  If a line becomes too long (see [limits](#limits))
  you cannot edit that line.  The line will be split when reading the file.
  It is also possible that you get an "out of memory" error when reading the
  file.
- Make sure the 'binary' option is set BEFORE loading the
  file.  Otherwise both <CR><NL> and <NL> are considered to end a line
  and when the file is written the <NL> will be replaced with <CR><NL>.
- <Nul> characters are shown on the screen as ^@.  You can enter them with
  "CTRL-V CTRL-@" or "CTRL-V 000".
- To insert a <NL> character in the file split a line.  When writing the
  buffer to a file a <NL> will be written for the <EOL>.
- Vim normally appends an <EOL> at the end of the file if there is none.
  Setting the 'binary' option prevents this.  If you want to add the final
  <EOL>, set the 'endofline' option.  You can also read the value of this
  option to see if there was an <EOL> for the last line (you cannot see this
  in the text).


## <a id="encryption" class="section-title" href="#encryption">9. Encryption</a> 

### <a id=":X E817 E818 E819 E820" class="section-title" href="#:X E817 E818 E819 E820">Note:</a>
Support for editing encrypted files has been removed.
	https://github.com/neovim/neovim/issues/694
	https://github.com/neovim/neovim/issues/701


## <a id="timestamp timestamps" class="section-title" href="#timestamp timestamps">10. Timestamps</a> 

Vim remembers the modification timestamp, mode and size of a file when you
begin editing it.  This is used to avoid that you have two different versions
of the same file (without you knowing this).

After a shell command is run ([:!cmd| |suspend| |:read!| |K](#:!cmd| |suspend| |:read!| |K)) timestamps,
file modes and file sizes are compared for all buffers in a window.   Vim will
run any associated [FileChangedShell](#FileChangedShell) autocommands or display a warning for
any files that have changed.  In the GUI this happens when Vim regains input
focus.

### <a id="E321 E462" class="section-title" href="#E321 E462">Note:</a>
If you want to automatically reload a file when it has been changed outside of
Vim, set the 'autoread' option.  This doesn't work at the moment you write the
file though, only when the file wasn't changed inside of Vim.
### <a id="ignore-timestamp" class="section-title" href="#ignore-timestamp">Note:</a>
If you do not want to be asked or automatically reload the file, you can use
this:
	set buftype=nofile

Or, when starting gvim from a shell:
	gvim file.log -c "set buftype=nofile"

Note that if a FileChangedShell autocommand is defined you will not get a
warning message or prompt.  The autocommand is expected to handle this.

There is no warning for a directory (e.g., with [netrw-browse](#netrw-browse)).  But you do
get warned if you started editing a new file and it was created as a directory
later.

When Vim notices the timestamp of a file has changed, and the file is being
edited in a buffer but has not changed, Vim checks if the contents of the file
is equal.  This is done by reading the file again (into a hidden buffer, which
is immediately deleted again) and comparing the text.  If the text is equal,
you will get no warning.

If you don't get warned often enough you can use the following command.

### <a id=":checkt :checktime" class="section-title" href="#:checkt :checktime">Note:</a>
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
			'autoread' is set, the buffer is reloaded.  Otherwise,
			you are offered the choice of reloading the file.  If
			the file was deleted you get an error message.
			If the file previously didn't exist you get a warning
			if it exists now.
			Once a file has been checked the timestamp is reset,
			you will not be warned again.
			Syntax highlighting, marks, diff status,
			'fileencoding', 'fileformat' and 'binary' options
			are not changed.  See [v:fcs_choice](#v:fcs_choice) to reload these
			too (for example, if a code formatting tools has
			changed the file).

:[N]checkt[ime] {filename}
:[N]checkt[ime] [N]
			Check the timestamp of a specific buffer.  The buffer
			may be specified by name, number or with a pattern.


### <a id="E813 E814" class="section-title" href="#E813 E814">Note:</a>
Vim will reload the buffer if you chose to.  If a window is visible that
contains this buffer, the reloading will happen in the context of this window.
Otherwise a special window is used, so that most autocommands will work.  You
can't close this window.  A few other restrictions apply.  Best is to make
sure nothing happens outside of the current buffer.  E.g., setting
window-local options may end up in the wrong window.  Splitting the window,
doing something there and closing it should be OK (if there are no side
effects from other autocommands).  Closing unrelated windows and buffers will
get you into trouble.

Before writing a file, the timestamp is checked (unless "!" was used).
If it has changed, Vim will ask if you really want to overwrite the file:

	WARNING: The file has been changed since reading it!!!
	Do you really want to write to it (y/n)?

If you hit 'y' Vim will continue writing the file.  If you hit 'n' the write is
aborted.  If you used ":wq" or "ZZ" Vim will not exit, you will get another
chance to write the file.

The message would normally mean that somebody has written to the file after
the edit session started.  This could be another person, in which case you
probably want to check if your changes to the file and the changes from the
other person should be merged.  Write the file under another name and check for
differences (the "diff" program can be used for this).

It is also possible that you modified the file yourself, from another edit
session or with another command (e.g., a filter command).  Then you will know
which version of the file you want to keep.

The accuracy of the time check depends on the filesystem.  On Unix it is
usually sub-second.  With old file systems and on MS-Windows it is normally one
second.  Use `has('nanotime')` to check if sub-second time stamp checks are
available.

There is one situation where you get the message while there is nothing wrong:
On a Win32 system on the day daylight saving time starts.  There is something
in the Win32 libraries that confuses Vim about the hour time difference.  The
problem goes away the next day.


## <a id="file-searching" class="section-title" href="#file-searching">11. File Searching</a> 

The file searching is currently used for the 'path', 'cdpath' and 'tags'
options, for [finddir()| and |findfile()|.  Other commands use |wildcards](#finddir()| and |findfile()|.  Other commands use |wildcards)
which is slightly different.

There are three different types of searching:

### <a id="starstar" class="section-title" href="#starstar">1) Downward search:</a>
### <a id="Downward search uses the wildcards '', '' and possibly others" class="section-title" href="#Downward search uses the wildcards '', '' and possibly others">Note:</a>
   supported by your operating system.  '*' and '**' are handled inside Vim,
   so they work on all operating systems.  Note that "**" only acts as a
   special wildcard when it is at the start of a name.

### <a id="The usage of '' is quite simple: It matches 0 or more characters." class="section-title" href="#The usage of '' is quite simple: It matches 0 or more characters.">Note:</a>
### <a id="search pattern this would be "."." class="section-title" href="#search pattern this would be ".".">Note:</a>
   searching.

### <a id="'' is more sophisticated:" class="section-title" href="#'' is more sophisticated:">Note:</a>
      - It ONLY matches directories.
      - It matches up to 30 directories deep by default, so you can use it to
	search an entire directory tree
      - The maximum number of levels matched can be given by appending a number
	to '**'.
	Thus '/usr/**2' can match:
		/usr
		/usr/include
		/usr/include/sys
		/usr/include/g++
		/usr/lib
		/usr/lib/X11
		....
	It does NOT match '/usr/include/g++/std' as this would be three
	levels.
	The allowed number range is 0 ('**0' is removed) to 100
	If the given number is smaller than 0 it defaults to 30, if it's
	bigger than 100 then 100 is used.  The system also has a limit on the
	path length, usually 256 or 1024 bytes.
### <a id="- '' can only be at the end of the path or be followed by a path" class="section-title" href="#- '' can only be at the end of the path or be followed by a path">Note:</a>
	separator or by a number and a path separator.

### <a id="You can combine '' and '' in any order:" class="section-title" href="#You can combine '' and '' in any order:">Note:</a>
	/usr/**/sys/*
	/usr/*tory/sys/**
	/usr/**2/sys/*

2) Upward search:
   Here you can give a directory and then search the directory tree upward for
   a file.  You could give stop-directories to limit the upward search.  The
   stop-directories are appended to the path (for the 'path' option) or to
   the filename (for the 'tags' option) with a ';'.  If you want several
   stop-directories separate them with ';'.  If you want no stop-directory
   ("search upward till the root directory) just use ';'.
	/usr/include/sys;/usr
   will search in:
	   /usr/include/sys
	   /usr/include
	   /usr
```

   If you use a relative path the upward search is started in Vim's current
   directory or in the directory of the current file (if the relative path
   starts with './' and 'd' is not included in 'cpoptions').

   If Vim's current path is /u/user_x/work/release and you do 
```	:set path=include;/u/user_x
  and then search for a file with [gf](#gf) the file is searched in:
	/u/user_x/work/release/include
	/u/user_x/work/include
	/u/user_x/include

   Note: If your 'path' setting includes a non-existing directory, Vim will
   skip the non-existing directory, and also does not search in the parent of
   the non-existing directory if upwards searching is used.

3) Combined up/downward search:
   If Vim's current path is /u/user_x/work/release and you do
	set path=**;/u/user_x
  and then search for a file with [gf](#gf) the file is searched in:
	/u/user_x/work/release/**
	/u/user_x/work/**
	/u/user_x/**
```

   BE CAREFUL!  This might consume a lot of time, as the search of
### <a id="'/u/user_x/' includes '/u/user_x/work/' and" class="section-title" href="#'/u/user_x/' includes '/u/user_x/work/' and">Note:</a>
### <a id="'/u/user_x/work/release/'." class="section-title" href="#'/u/user_x/work/release/'.">Note:</a>
### <a id="three times and '/u/user_x/work/' is searched twice." class="section-title" href="#three times and '/u/user_x/work/' is searched twice.">Note:</a>

   In the above example you might want to set path to:
	:set path=**,/u/user_x/**
  This searches:
	/u/user_x/work/release/** ~
	/u/user_x/** ~
   This searches the same directories, but in a different order.

   Note that completion for ":find", ":sfind", and ":tabfind" commands do not
   currently work with 'path' items that contain a URL or use the double star
### <a id="with depth limiter (/usr/2) or upward search (;) notations." class="section-title" href="#with depth limiter (/usr/2) or upward search (;) notations.">Note:</a>

 vim:tw=78:ts=8:noet:ft=help:norl:

