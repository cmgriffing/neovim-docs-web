---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Nvim" class="section-title" href="#Nvim"> Message Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


This file contains an alphabetical list of messages and error messages that
Vim produces.  You can use this if you don't understand what the message
means.  It is not complete though.

Type [gO](#gO) to see the table of contents.


## <a id=":messages :mes message-history" class="section-title" href="#:messages :mes message-history">1. Old Messages</a> 

The ":messages" command can be used to view previously given messages.  This
is especially useful when messages have been overwritten or truncated.  This
depends on the 'shortmess' option.

:mes[sages]		Show all messages.

:{count}mes[sages]	Show the {count} most recent messages.

:mes[sages] clear	Clear all messages.

:{count}mes[sages] clear
Clear messages, keeping only the {count} most
recent ones.

The number of remembered messages is fixed at 200.

### <a id="g<" class="section-title" href="#g<">Note:</a>
The "g<" command can be used to see the last page of previous command output.
This is especially useful if you accidentally typed <Space> at the hit-enter
prompt.  You are then back at the hit-enter prompt and can then scroll further
back.
Note: If the output has been stopped with "q" at the more prompt, it will only
be displayed up to this point.
The previous command output is cleared when another command produces output.
The "g<" output is not redirected.

If you want to find help on a specific (error) message, use the ID at the
start of the message.  For example, to get help on the message:
```

E72: Close error on swap file

or (translated):
```

E72: Errore durante chiusura swap file

Use:
```

:help E72

If you are lazy, it also works without the shift key:
```

:help e72


## <a id="error-messages errors" class="section-title" href="#error-messages errors">2. Error Messages</a> 

When an error message is displayed, but it is removed before you could read
it, you can see it again with:
```
:echo v:errmsg
Or view a list of recent messages with:
```
:messages
See `:messages` above.

LIST OF MESSAGES
### <a id="E222 E228 E232 E293 E298 E304 E317" class="section-title" href="#E222 E228 E232 E293 E298 E304 E317">Note:</a>
### <a id="E318 E356 E438 E439 E440 E316 E320 E322" class="section-title" href="#E318 E356 E438 E439 E440 E316 E320 E322">Note:</a>
### <a id="E323 E341 E473 E570 E685 E292" class="section-title" href="#E323 E341 E473 E570 E685 E292">Note:</a>
Add to read buffer
makemap: Illegal mode
Cannot create BalloonEval with both message and callback
Hangul automata ERROR
block was not locked
Didn't get block nr {N}?
ml_upd_block0(): Didn't get block 0??
pointer block id wrong {N}
Updated too many blocks?
get_varp ERROR
u_undo: line numbers wrong
undo list corrupt
undo line missing
ml_get: cannot find line {N}
cannot find line {N}
line number out of range: {N} past the end
line count wrong in block {N}
Internal error
Internal error: {function}
fatal error in cs_manage_matches
Invalid count for del_bytes(): {N}

This is an internal error.  If you can reproduce it, please send in a bug
report. [bugs](#bugs)
```
ATTENTION
Found a swap file by the name ...

See [ATTENTION](#ATTENTION).

### <a id="E92" class="section-title" href="#E92">Note:</a>
Buffer {N} not found

The buffer you requested does not exist.  This can also happen when you have
wiped out a buffer which contains a mark or is referenced in another way.
[:bwipeout](#:bwipeout)

### <a id="E95" class="section-title" href="#E95">Note:</a>
Buffer with this name already exists

You cannot have two buffers with exactly the same name.  This includes the
path leading to the file.

### <a id="E72" class="section-title" href="#E72">Note:</a>
Close error on swap file

The [swap-file](#swap-file), that is used to keep a copy of the edited text, could not be
closed properly.  Mostly harmless.

### <a id="E169" class="section-title" href="#E169">Note:</a>
Command too recursive

This happens when an Ex command executes an Ex command that executes an Ex
command, etc.  The limit is 200 or the value of 'maxfuncdepth', whatever is
larger.  When it's more there probably is an endless loop.  Probably a
[:execute| or |:source](#:execute| or |:source) command is involved.

### <a id="E254" class="section-title" href="#E254">Note:</a>
Cannot allocate color {name}

The color name {name} is unknown.  See [gui-colors](#gui-colors) for a list of colors that
are available on most systems.

### <a id="E458" class="section-title" href="#E458">Note:</a>
Cannot allocate colormap entry, some colors may be incorrect

This means that there are not enough colors available for Vim.  It will still
run, but some of the colors will not appear in the specified color.  Try
stopping other applications that use many colors, or start them after starting
gvim.
Browsers are known to consume a lot of colors.  You can avoid this with
netscape by telling it to use its own colormap:
```
netscape -install
Or tell it to limit to a certain number of colors (64 should work well):
```
netscape -ncols 64
This can also be done with a line in your Xdefaults file:
```
Netscape*installColormap: Yes
or
```
Netscape*maxImageColors:  64

```

### <a id="E79" class="section-title" href="#E79">Note:</a>
Cannot expand wildcards

A filename contains a strange combination of characters, which causes Vim to
attempt expanding wildcards but this fails.  This does NOT mean that no
matching file names could be found, but that the pattern was illegal.

### <a id="E459" class="section-title" href="#E459">Note:</a>
Cannot go back to previous directory

While expanding a file name, Vim failed to go back to the previously used
directory.  All file names being used may be invalid now!  You need to have
execute permission on the current directory.

### <a id="E190 E212" class="section-title" href="#E190 E212">Note:</a>
Cannot open "{filename}" for writing
Can't open file for writing

For some reason the file you are writing to cannot be created or overwritten.
The reason could be that you do not have permission to write in the directory
or the file name is not valid.

### <a id="E166" class="section-title" href="#E166">Note:</a>
Can't open linked file for writing

You are trying to write to a file which can't be overwritten, and the file is
a link (either a hard link or a symbolic link).  Writing might still be
possible if the directory that contains the link or the file is writable, but
Vim now doesn't know if you want to delete the link and write the file in its
place, or if you want to delete the file itself and write the new file in its
place.  If you really want to write the file under this name, you have to
manually delete the link or the file, or change the permissions so that Vim
can overwrite.

### <a id="E46" class="section-title" href="#E46">Note:</a>
Cannot change read-only variable "{name}"

You are trying to assign a value to an argument of a function [a:var](#a:var) or a Vim
internal variable [v:var](#v:var) which is read-only.

### <a id="E90" class="section-title" href="#E90">Note:</a>
Cannot unload last buffer

Vim always requires one buffer to be loaded, otherwise there would be nothing
to display in the window.

### <a id="E40" class="section-title" href="#E40">Note:</a>
Can't open errorfile <filename>

When using the ":make" or ":grep" commands: The file used to save the error
messages or grep output cannot be opened.  This can have several causes:
- 'shellredir' has a wrong value.
- The shell changes directory, causing the error file to be written in another
directory.  This could be fixed by changing 'makeef', but then the make
command is still executed in the wrong directory.
- 'makeef' has a wrong value.
- The 'grepprg' or 'makeprg' could not be executed.  This cannot always be
detected (especially on MS-Windows).  Check your $PATH.
```
Can't open file C:\TEMP\VIoD243.TMP

On MS-Windows, this message appears when the output of an external command was
to be read, but the command didn't run successfully.  This can be caused by
many things.  Check the 'shell', 'shellquote', 'shellxquote', 'shellslash' and
related options.  It might also be that the external command was not found,
there is no different error message for that.

### <a id="E12" class="section-title" href="#E12">Note:</a>
Command not allowed from exrc/vimrc in current dir or tag search

Some commands are not allowed for security reasons.  These commands mostly
come from a .exrc or .nvimrc file in the current directory, or from a tags
file.  Also see 'secure'.

### <a id="E74" class="section-title" href="#E74">Note:</a>
Command too complex

A mapping resulted in a very long command string.  Could be caused by a
mapping that indirectly calls itself.
```
CONVERSION ERROR

When writing a file and the text "CONVERSION ERROR" appears, this means that
some bits were lost when converting text from the internally used UTF-8 to the
format of the file.  The file will not be marked unmodified.  If you care
about the loss of information, set the 'fileencoding' option to another value
that can handle the characters in the buffer and write again.  If you don't
care, you can abandon the buffer or reset the 'modified' option.
If there is a backup file, when 'writebackup' or 'backup' is set, it will not
be deleted, so you can move it back into place if you want to discard the
changes.

### <a id="E302" class="section-title" href="#E302">Note:</a>
Could not rename swap file

When the file name changes, Vim tries to rename the [swap-file](#swap-file) as well.
This failed and the old swap file is now still used.  Mostly harmless.

### <a id="E43 E44" class="section-title" href="#E43 E44">Note:</a>
Damaged match string
Corrupted regexp program

Something inside Vim went wrong and resulted in a corrupted regexp.  If you
know how to reproduce this problem, please report it. [bugs](#bugs)

### <a id="E208 E209 E210" class="section-title" href="#E208 E209 E210">Note:</a>
Error writing to "{filename}"
Error closing "{filename}"
Error reading "{filename}"

This occurs when Vim is trying to rename a file, but a simple change of file
name doesn't work.  Then the file will be copied, but somehow this failed.
The result may be that both the original file and the destination file exist
and the destination file may be incomplete.
```
Vim: Error reading input, exiting...

This occurs when Vim cannot read typed characters while input is required.
Vim got stuck, the only thing it can do is exit.  This can happen when both
stdin and stderr are redirected and executing a script that doesn't exit Vim.

### <a id="E47" class="section-title" href="#E47">Note:</a>
Error while reading errorfile

Reading the error file was not possible.  This is NOT caused by an error
message that was not recognized.

### <a id="E80" class="section-title" href="#E80">Note:</a>
Error while writing

Writing a file was not completed successfully.  The file is probably
incomplete.

### <a id="E13 E189" class="section-title" href="#E13 E189">Note:</a>
File exists (add ! to override)
"{filename}" exists (add ! to override)

You are protected from accidentally overwriting a file.  When you want to
write anyway, use the same command, but add a "!" just after the command.
Example:
```
:w /tmp/test
changes to:
```
:w! /tmp/test

```

### <a id="E768" class="section-title" href="#E768">Note:</a>
Swap file exists: {filename} (:silent! overrides)

You are protected from overwriting a file that is being edited by Vim.  This
happens when you use ":w! filename" and a swapfile is found.
- If the swapfile was left over from an old crashed edit session you may want
to delete the swapfile.  Edit {filename} to find out information about the
swapfile.
- If you want to write anyway prepend ":silent!" to the command.  For example:
```
:silent! w! /tmp/test

```
 The special command is needed, since you already added the ! for overwriting
an existing file.

### <a id="E139" class="section-title" href="#E139">Note:</a>
File is loaded in another buffer

You are trying to write a file under a name which is also used in another
buffer.  This would result in two versions of the same file.

### <a id="E142" class="section-title" href="#E142">Note:</a>
File not written: Writing is disabled by 'write' option

The 'write' option is off.  This makes all commands that try to write a file
generate this message.  This could be caused by a [-m](#-m) commandline argument.
You can switch the 'write' option on with ":set write".

### <a id="E25" class="section-title" href="#E25">Note:</a>
Nvim does not have a built-in GUI

Neovim does not have a built in GUI, so `:gvim` and `:gui` don't work.

### <a id="E49" class="section-title" href="#E49">Note:</a>
Invalid scroll size

This is caused by setting an invalid value for the 'scroll', 'scrolljump' or
'scrolloff' options.

### <a id="E17" class="section-title" href="#E17">Note:</a>
"{filename}" is a directory

You tried to write a file with the name of a directory.  This is not possible.
You probably need to append a file name.

### <a id="E19" class="section-title" href="#E19">Note:</a>
Mark has invalid line number

You are using a mark that has a line number that doesn't exist.  This can
happen when you have a mark in another file, and some other program has
deleted lines from it.

### <a id="E219 E220" class="section-title" href="#E219 E220">Note:</a>
Missing {.
Missing }.

Using a {} construct in a file name, but there is a { without a matching } or
the other way around.  It should be used like this: {foo,bar}.  This matches
"foo" and "bar".

### <a id="E315" class="section-title" href="#E315">Note:</a>
ml_get: invalid lnum: {number}

This is an internal Vim error.  Please try to find out how it can be
reproduced, and submit a [bug-report](#bug-report).

### <a id="E173" class="section-title" href="#E173">Note:</a>
{number} more files to edit

You are trying to exit, while the last item in the argument list has not been
edited.  This protects you from accidentally exiting when you still have more
files to work on.  See [argument-list](#argument-list).  If you do want to exit, just do it
again and it will work.

### <a id="E23 E194" class="section-title" href="#E23 E194">Note:</a>
No alternate file
No alternate file name to substitute for '#'

The alternate file is not defined yet.  See [alternate-file](#alternate-file).

### <a id="E32" class="section-title" href="#E32">Note:</a>
No file name

The current buffer has no name.  To write it, use ":w fname".  Or give the
buffer a name with ":file fname".

### <a id="E141" class="section-title" href="#E141">Note:</a>
No file name for buffer {number}

One of the buffers that was changed does not have a file name.  Therefore it
cannot be written.  You need to give the buffer a file name:
```
:buffer {number}
:file {filename}

```

### <a id="E33" class="section-title" href="#E33">Note:</a>
No previous substitute regular expression

When using the '~' character in a pattern, it is replaced with the previously
used pattern in a ":substitute" command.  This fails when no such command has
been used yet.  See [/~](#/~).  This also happens when using ":s/pat/%/", where the
"%" stands for the previous substitute string.

### <a id="E35" class="section-title" href="#E35">Note:</a>
No previous regular expression

When using an empty search pattern, the previous search pattern is used.  But
that is not possible if there was no previous search.

### <a id="E24" class="section-title" href="#E24">Note:</a>
No such abbreviation

You have used an ":unabbreviate" command with an argument which is not an
existing abbreviation.  All variations of this command give the same message:
":cunabbrev", ":iunabbrev", etc.  Check for trailing white space.

### <a id="E31" class="section-title" href="#E31">Note:</a>
No such mapping

You have used an ":unmap" command with an argument which is not an existing
mapping.  All variations of this command give the same message: ":cunmap",
":unmap!", etc.  A few hints:
- Check for trailing white space.
- If the mapping is buffer-local you need to use ":unmap <buffer>".
[:map-<buffer>](#:map-<buffer>)

### <a id="E37 E89" class="section-title" href="#E37 E89">Note:</a>
No write since last change (add ! to override)
No write since last change for buffer {N} (add ! to override)

You are trying to [abandon](#abandon) a file that has changes.  Vim protects you from
losing your work.  You can either write the changed file with ":w", or, if you
are sure, [abandon](#abandon) it anyway, and lose all the changes.  This can be done by
adding a '!' character just after the command you used.  Example:
```
:e other_file
changes to:
```
:e! other_file

```

### <a id="E162" class="section-title" href="#E162">Note:</a>
No write since last change for buffer "{name}"

This appears when you try to exit Vim while some buffers are changed.  You
will either have to write the changed buffer (with [:w](#:w)), or use a command to
abandon the buffer forcefully, e.g., with ":qa!".  Careful, make sure you
don't throw away changes you really want to keep.  You might have forgotten
about a buffer, especially when 'hidden' is set.
```
[No write since last change]

This appears when executing a shell command while at least one buffer was
changed.  To avoid the message reset the 'warn' option.

### <a id="E38" class="section-title" href="#E38">Note:</a>
Null argument

Something inside Vim went wrong and resulted in a NULL pointer.  If you know
how to reproduce this problem, please report it. [bugs](#bugs)

### <a id="E41 E82 E83 E342" class="section-title" href="#E41 E82 E83 E342">Note:</a>
Out of memory!
Out of memory!  (allocating {number} bytes)
Cannot allocate any buffer, exiting...
Cannot allocate buffer, using other one...

Oh, oh.  You must have been doing something complicated, or some other program
is consuming your memory.  Be careful!  Vim is not completely prepared for an
out-of-memory situation.  First make sure that any changes are saved.  Then
try to solve the memory shortage.  To stay on the safe side, exit Vim and
start again.

Buffers are only partly kept in memory, thus editing a very large file is
unlikely to cause an out-of-memory situation.  Undo information is completely
in memory, you can reduce that with these options:
- 'undolevels'  Set to a low value, or to -1 to disable undo completely.  This
helps for a change that affects all lines.
- 'undoreload' Set to zero to disable.

### <a id="E339" class="section-title" href="#E339">Note:</a>
Pattern too long

This happens on systems with 16 bit ints: The compiled regexp pattern is
longer than about 65000 characters.  Try using a shorter pattern.
It also happens when the offset of a rule doesn't fit in the space available.
Try simplifying the pattern.

### <a id="E45" class="section-title" href="#E45">Note:</a>
'readonly' option is set (add ! to override)

You are trying to write a file that was marked as read-only.  To write the
file anyway, either reset the 'readonly' option, or add a '!' character just
after the command you used.  Example:
```
:w
changes to:
```
:w!

```

### <a id="E294 E295 E301" class="section-title" href="#E294 E295 E301">Note:</a>
Read error in swap file
Seek error in swap file read
Oops, lost the swap file!!!

Vim tried to read text from the [swap-file](#swap-file), but something went wrong.  The
text in the related buffer may now be corrupted!  Check carefully before you
write a buffer.  You may want to write it in another file and check for
differences.

### <a id="E192" class="section-title" href="#E192">Note:</a>
Recursive use of :normal too deep

You are using a ":normal" command, whose argument again uses a ":normal"
command in a recursive way.  This is restricted to 'maxmapdepth' levels.  This
example illustrates how to get this message:
```
:map gq :normal gq<CR>
If you type "gq", it will execute this mapping, which will call "gq" again.

### <a id="E22" class="section-title" href="#E22">Note:</a>
Scripts nested too deep

Scripts can be read with the "-s" command-line argument and with the
`:source!` command.  The script can then again read another script.  This can
continue for about 14 levels.  When more nesting is done, Vim assumes that
there is a recursive loop and stops with this error message.

### <a id="E300" class="section-title" href="#E300">Note:</a>
Swap file already exists (symlink attack?)

This message appears when Vim is trying to open a swap file and finds it
already exists or finds a symbolic link in its place.  This shouldn't happen,
because Vim already checked that the file doesn't exist.  Either someone else
opened the same file at exactly the same moment (very unlikely) or someone is
attempting a symlink attack (could happen when editing a file in /tmp or when
'directory' starts with "/tmp", which is a bad choice).

### <a id="E432" class="section-title" href="#E432">Note:</a>
Tags file not sorted: {file name}

Vim (and Vi) expect tags files to be sorted in ASCII order.  Binary searching
can then be used, which is a lot faster than a linear search.  If your tags
files are not properly sorted, reset the ['tagbsearch'](#'tagbsearch') option.
This message is only given when Vim detects a problem when searching for a
tag.  Sometimes this message is not given, even though the tags file is not
properly sorted.

### <a id="E424" class="section-title" href="#E424">Note:</a>
Too many different highlighting attributes in use

Vim can only handle about 223 different kinds of highlighting.  If you run
into this limit, you have used too many [:highlight](#:highlight) commands with different
arguments.  A ":highlight link" is not counted.

### <a id="E77" class="section-title" href="#E77">Note:</a>
Too many file names

When expanding file names, more than one match was found.  Only one match is
allowed for the command that was used.

### <a id="E303" class="section-title" href="#E303">Note:</a>
Unable to open swap file for "{filename}", recovery impossible

Vim was not able to create a swap file.  You can still edit the file, but if
Vim unexpectedly exits the changes will be lost.  And Vim may consume a lot of
memory when editing a big file.  You may want to change the 'directory' option
to avoid this error.  This error is not given when 'directory' is empty.  See
[swap-file](#swap-file).

### <a id="E140" class="section-title" href="#E140">Note:</a>
Use ! to write partial buffer

When using a range to write part of a buffer, it is unusual to overwrite the
original file.  It is probably a mistake (e.g., when Visual mode was active
when using ":w"), therefore Vim requires using a !  after the command, e.g.:
":3,10w!".
```

Warning: Cannot convert string "<Key>Escape,_Key_Cancel" to type
VirtualBinding

Messages like this appear when starting up.  This is not a Vim problem, your
X11 configuration is wrong.

### <a id="W10" class="section-title" href="#W10">Note:</a>
Warning: Changing a readonly file

The file is read-only and you are making a change to it anyway.  You can use
the [FileChangedRO](#FileChangedRO) autocommand event to avoid this message (the autocommand
must reset the 'readonly' option).  See 'modifiable' to completely disallow
making changes to a file.
This message is only given for the first change after 'readonly' has been set.

### <a id="W13" class="section-title" href="#W13">Note:</a>
Warning: File "{filename}" has been created after editing started

You are editing a file in Vim when it didn't exist, but it does exist now.
You will have to decide if you want to keep the version in Vim or the newly
created file.  This message is not given when 'buftype' is not empty.

### <a id="W11" class="section-title" href="#W11">Note:</a>
Warning: File "{filename}" has changed since editing started

The file which you have started editing has got another timestamp and the
contents changed (more precisely: When reading the file again with the current
option settings and autocommands you would end up with different text).  This
probably means that some other program changed the file.  You will have to
find out what happened, and decide which version of the file you want to keep.
Set the 'autoread' option if you want to do this automatically.
This message is not given when 'buftype' is not empty.

There is one situation where you get this message even though there is nothing
wrong: If you save a file in Windows on the day the daylight saving time
starts.  It can be fixed in one of these ways:
- Add this line in your autoexec.bat:
```
SET TZ=-1

```
 Adjust the "-1" for your time zone.
- Disable "automatically adjust clock for daylight saving changes".
- Just write the file again the next day.  Or set your clock to the next day,
write the file twice and set the clock back.

If you get W11 all the time, you may need to disable "Acronis Active
Protection" or register Vim as a trusted service/application.

### <a id="W12" class="section-title" href="#W12">Note:</a>
Warning: File "{filename}" has changed and the buffer was changed in Vim as well

Like the above, and the buffer for the file was changed in this Vim as well.
You will have to decide if you want to keep the version in this Vim or the one
on disk.  This message is not given when 'buftype' is not empty.

### <a id="W16" class="section-title" href="#W16">Note:</a>
Warning: Mode of file "{filename}" has changed since editing started

When the timestamp for a buffer was changed and the contents are still the
same but the mode (permissions) have changed.  This usually occurs when
checking out a file from a version control system, which causes the read-only
bit to be reset.  It should be safe to reload the file.  Set 'autoread' to
automatically reload the file.

### <a id="E211" class="section-title" href="#E211">Note:</a>
File "{filename}" no longer available

The file which you have started editing has disappeared, or is no longer
accessible.  Make sure you write the buffer somewhere to avoid losing
changes.  This message is not given when 'buftype' is not empty.

### <a id="W14" class="section-title" href="#W14">Note:</a>
Warning: List of file names overflow

You must be using an awful lot of buffers.  It's now possible that two buffers
have the same number, which causes various problems.  You might want to exit
Vim and restart it.

### <a id="E931" class="section-title" href="#E931">Note:</a>
Buffer cannot be registered

Out of memory or a duplicate buffer number.  May happen after W14.  Looking up
a buffer will not always work, better restart Vim.

### <a id="E296 E297" class="section-title" href="#E296 E297">Note:</a>
Seek error in swap file write
Write error in swap file

This mostly happens when the disk is full.  Vim could not write text into the
[swap-file](#swap-file).  It's not directly harmful, but when Vim unexpectedly exits some
text may be lost without recovery being possible.  Vim might run out of memory
when this problem persists.

### <a id="E10" class="section-title" href="#E10">Note:</a>
\\ should be followed by /, ? or &

A command line started with a backslash or the range of a command contained a
backslash in a wrong place.  This is often caused by command-line continuation
being disabled.  Remove the 'C' flag from the 'cpoptions' option to enable it.

### <a id="E471" class="section-title" href="#E471">Note:</a>
Argument required

Ex command was executed without a mandatory argument(s).

### <a id="E474 E475 E983" class="section-title" href="#E474 E475 E983">Note:</a>
Invalid argument
Invalid argument: {arg}
Duplicate argument: {arg}

Ex command or function was given an invalid argument. Or [jobstart()](#jobstart()) or
[system()](#system()) was given a non-executable command.

### <a id="E488" class="section-title" href="#E488">Note:</a>
Trailing characters

An argument was given to an Ex command that does not permit one.
Or the argument has invalid characters and has not been recognized.

### <a id="E477 E478" class="section-title" href="#E477 E478">Note:</a>
No ! allowed
Don't panic!

You have added a "!" after an Ex command that doesn't permit one.

### <a id="E481" class="section-title" href="#E481">Note:</a>
No range allowed

A range was specified for an Ex command that doesn't permit one.  See
[cmdline-ranges](#cmdline-ranges).

### <a id="E482 E483" class="section-title" href="#E482 E483">Note:</a>
Can't create file {filename}
Can't get temp file name

Vim cannot create a temporary file.

### <a id="E484 E485" class="section-title" href="#E484 E485">Note:</a>
Can't open file {filename}
Can't read file {filename}

Vim cannot read a temporary file.  Especially on Windows, this can be caused
by wrong escaping of special characters for cmd.exe; the approach was
changed with patch 7.3.443.  Try using [shellescape()](#shellescape()) for all shell arguments
given to [system()](#system()), or explicitly add escaping with ^.  Also see
'shellxquote' and 'shellxescape'.

### <a id="E464" class="section-title" href="#E464">Note:</a>
Ambiguous use of user-defined command

There are two user-defined commands with a common name prefix, and you used
Command-line completion to execute one of them. [user-cmd-ambiguous](#user-cmd-ambiguous)
Example:
```
:command MyCommand1 echo "one"
:command MyCommand2 echo "two"
:MyCommand

```

### <a id="E492" class="section-title" href="#E492">Note:</a>
Not an editor command

You tried to execute a command that is neither an Ex command nor
a user-defined command.

### <a id="E905" class="section-title" href="#E905">Note:</a>
Cannot set this option after startup

You tried to set an option after startup that only allows changes during
startup.

### <a id="E943" class="section-title" href="#E943">Note:</a>
Command table needs to be updated, run 'make'

This can only happen when changing the source code, after adding a command in
src/ex_cmds.lua.  Update the lookup table by re-running the build.
```


## <a id="messages" class="section-title" href="#messages">3. Messages</a> 

This is an (incomplete) overview of various messages that Vim gives:

### <a id="hit-enter press-enter hit-return" class="section-title" href="#hit-enter press-enter hit-return">Note:</a>
### <a id="press-return hit-enter-prompt" class="section-title" href="#press-return hit-enter-prompt">Note:</a>

Press ENTER or type command to continue

This message is given when there is something on the screen for you to read,
and the screen is about to be redrawn:
- After executing an external command (e.g., ":!ls" and "=").
- Something is displayed on the status line that is longer than the width of
the window, or runs into the 'showcmd' or 'ruler' output.

-> Press <Enter> or <Space> to redraw the screen and continue, without that
key being used otherwise.
-> Press ':' or any other Normal mode command character to start that command.
Note that after an external command some special keys, such as the cursor
keys, may not work normally, because the terminal is still set to a state
for executing the external command.
-> Press 'k', <Up>, 'u', 'b' or 'g' to scroll back in the messages.  This
works the same way as at the [more-prompt](#more-prompt).  Only works when 'more' is on.
-> Pressing 'j', 'f', 'd' or <Down> is ignored when messages scrolled off the
top of the screen and 'more' is on, to avoid that typing one 'j' or 'f' too
many causes the messages to disappear.
-> Press <C-Y> to copy (yank) a modeless selection to the clipboard register.
-> Use a menu.  The characters defined for Cmdline-mode are used.
-> When 'mouse' contains the 'r' flag, clicking the left mouse button works
like pressing <Space>.  This makes it impossible to select text though.
-> For the GUI clicking the left mouse button in the last line works like
pressing <Space>.

If you accidentally hit <Enter> or <Space> and you want to see the displayed
text then use [g<](#g<).  This only works when 'more' is set.

To reduce the number of hit-enter prompts:
- Set 'cmdheight' to 2 or higher.
- Add flags to 'shortmess'.
- Reset 'showcmd' and/or 'ruler'.
- Make sure `:echo` text is within [v:echospace](#v:echospace) screen cells.

If your script causes the hit-enter prompt and you don't know why, you may
find the [v:scrollstart](#v:scrollstart) variable useful.

Also see 'mouse'.  The hit-enter message is highlighted with the [hl-Question](#hl-Question)
group.


### <a id="more-prompt pager" class="section-title" href="#more-prompt pager">Note:</a>
-- More --
-- More -- SPACE/d/j: screen/page/line down, b/u/k: up, q: quit

This message is given when the screen is filled with messages.  It is only
given when the 'more' option is on.  It is highlighted with the [hl-MoreMsg](#hl-MoreMsg)
group.

Type					effect ~

```
CR> or <NL> or j or <Down>	one more line
d					down a page (half a screen)

```
Space> or f or <PageDown>		down a screen
G					down all the way, until the hit-enter
prompt


```
BS> or k or <Up>			one line back
u					up a page (half a screen)
b or <PageUp>			back a screen
g					back to the start

q, <Esc> or CTRL-C			stop the listing
:					stop the listing and enter a
command-line

```
C-Y>				yank (copy) a modeless selection to
### <a id="the clipboard (" and "+ registers)" class="section-title" href="#the clipboard (" and "+ registers)">Note:</a>
{menu-entry}			what the menu is defined to in
Cmdline-mode.
### <a id="<LeftMouse> ()" class="section-title" href="#<LeftMouse> ()">Note:</a>

Any other key causes the meaning of the keys to be displayed.

(*)  Clicking the left mouse button only works:
- For the GUI: in the last line of the screen.
- When 'r' is included in 'mouse' (but then selecting text won't work).


Note: The typed key is directly obtained from the terminal, it is not mapped
and typeahead is ignored.

The [g<](#g<) command can be used to see the last page of previous command output.
This is especially useful if you accidentally typed <Space> at the hit-enter
prompt.

vim:tw=78:ts=8:noet:ft=help:norl:

