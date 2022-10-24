---
title: Tree Sitter
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Various Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="various" class="section-title" href="#various">Various commands</a>

Type [gO](#gO) to see the table of contents.


## <a id="various-cmds" class="section-title" href="#various-cmds">1. Various Commands</a> 

### <a id="CTRL-L" class="section-title" href="#CTRL-L">Note:</a>
CTRL-L			Clears and redraws the screen.  The redraw may happen
later, after processing typeahead.
### <a id="CTRL-L-default" class="section-title" href="#CTRL-L-default">Note:</a>
By default, also clears search highlighting
[:nohlsearch| and updates diffs |:diffupdate](#:nohlsearch| and updates diffs |:diffupdate).
[default-mappings](#default-mappings)

### <a id=":mod :mode" class="section-title" href="#:mod :mode">Note:</a>
:mod[e]			Clears and redraws the screen.

### <a id=":redr :redraw" class="section-title" href="#:redr :redraw">Note:</a>
:redr[aw][!]		Redraws pending screen updates now, or the entire
screen if "!" is included.  To CLEAR the screen use
[:mode| or |CTRL-L](#:mode| or |CTRL-L).
Useful to update the screen during a script or
function (or a mapping if 'lazyredraw' set).

### <a id=":redraws :redrawstatus" class="section-title" href="#:redraws :redrawstatus">Note:</a>
:redraws[tatus][!]	Redraws the status line and window bar of the current
window, or all status lines and window bars if "!" is
included. Useful if 'statusline' or 'winbar' includes
an item that doesn't cause automatic updating.

### <a id=":redrawt :redrawtabline" class="section-title" href="#:redrawt :redrawtabline">Note:</a>
:redrawt[abline]	Redraw the tabline.  Useful to update the tabline when
'tabline' includes an item that doesn't trigger
automatic updating.

### <a id="N<Del>" class="section-title" href="#N<Del>">Note:</a>

```
Del>			When entering a number: Remove the last digit.
Note: if you like to use <BS> for this, add this
mapping to your vimrc:
```
:map CTRL-V <BS>   CTRL-V <Del>

```

### <a id="ga :as :ascii" class="section-title" href="#ga :as :ascii">:as[cii]	or</a>
ga			Print the ascii value of the character under the
cursor in decimal, hexadecimal and octal.
Mnemonic: Get Ascii value.

For example, when the cursor is on a 'R':

```
R>  82,  Hex 52,  Octal 122 ~
When the character is a non-standard ASCII character,
but printable according to the 'isprint' option, the
non-printable version is also given.

When the character is larger than 127, the <M-x> form
is also printed.  For example:

```
~A>  <M-^A>  129,  Hex 81,  Octal 201 ~

```
p>  <|~>  <M-~>  254,  Hex fe,  Octal 376 ~
(where <p> is a special character)

The <Nul> character in a file is stored internally as

```
NL>, but it will be shown as:

```
^@>  0,  Hex 00,  Octal 000 ~

If the character has composing characters these are
also shown.  The value of 'maxcombine' doesn't matter.

If the character can be inserted as a digraph, also
output the two characters that can be used to create
the character:

```
ö> 246, Hex 00f6, Oct 366, Digr o: ~
This shows you can type CTRL-K o : to insert ö.


### <a id="g8" class="section-title" href="#g8">Note:</a>
g8			Print the hex values of the bytes used in the
character under the cursor, assuming it is in [UTF-8](#UTF-8)
encoding.  This also shows composing characters.  The
value of 'maxcombine' doesn't matter.
Example of a character with two composing characters:
e0 b8 81 + e0 b8 b9 + e0 b9 89 ~

### <a id="8g8" class="section-title" href="#8g8">Note:</a>
8g8			Find an illegal UTF-8 byte sequence at or after the
cursor.  This works in two situations:
1. when 'encoding' is any 8-bit encoding
2. when 'encoding' is "utf-8" and 'fileencoding' is
any 8-bit encoding
Thus it can be used when editing a file that was
supposed to be UTF-8 but was read as if it is an 8-bit
encoding because it contains illegal bytes.
Does not wrap around the end of the file.
Note that when the cursor is on an illegal byte or the
cursor is halfway through a multibyte character the
command won't move the cursor.

### <a id=":p :pr :print E749" class="section-title" href="#:p :pr :print E749">Note:</a>
:[range]p[rint] [flags]
Print [range] lines (default current line).
Note: If you are looking for a way to print your text
on paper see [:hardcopy](#:hardcopy).  In the GUI you can use the
File.Print menu entry.
See [ex-flags](#ex-flags) for [flags].
The [:filter](#:filter) command can be used to only show lines
matching a pattern.

:[range]p[rint] {count} [flags]
Print {count} lines, starting with [range] (default
current line [cmdline-ranges](#cmdline-ranges)).
See [ex-flags](#ex-flags) for [flags].

### <a id=":l :list" class="section-title" href="#:l :list">Note:</a>
:[range]l[ist] [count] [flags]
Same as :print, but show tabs as ">", trailing spaces
as "-", and non-breakable space characters as "+" by
default.  Further changed by the 'listchars' option.
See [ex-flags](#ex-flags) for [flags].

### <a id=":nu :number" class="section-title" href="#:nu :number">Note:</a>
:[range]nu[mber] [count] [flags]
Same as :print, but precede each line with its line
number.  (See also [hl-LineNr](#hl-LineNr) and 'numberwidth').
See [ex-flags](#ex-flags) for [flags].

### <a id=":#" class="section-title" href="#:#">Note:</a>
:[range]# [count] [flags]
synonym for :number.

### <a id=":#!" class="section-title" href="#:#!">Note:</a>
:#!{anything}		Ignored, so that you can start a Vim script with:
```
#!vim -S
echo "this is a Vim script"
quit

```

### <a id=":z E144" class="section-title" href="#:z E144">Note:</a>
:[range]z[+-^.=][count]	Display several lines of text surrounding the line
specified with [range], or around the current line
if there is no [range].

If there is a [count], that's how many lines you'll
see; if there is no [count] and only one window then
twice the value of the 'scroll' option is used,
otherwise the current window height minus 3 is used.
This is the value of "scr" in the table below.

If there is a [count] the 'window' option is set to
its value.

:z can be used either alone or followed by any of
several marks.  These have the following effect:

mark   first line    last line      new cursor line ~
----   ----------    ---------      ------------
+      current line  1 scr forward  1 scr forward
-      1 scr back    current line   current line
^      2 scr back    1 scr back     1 scr back
.      1/2 scr back  1/2 scr fwd    1/2 scr fwd
=      1/2 scr back  1/2 scr fwd    current line

Specifying no mark at all is the same as "+".
If the mark is "=", a line of dashes is printed
around the current line.

### <a id=":z!" class="section-title" href="#:z!">Note:</a>
:[range]z![+-^.=][count]
Like ":z", but when [count] is not specified, it
defaults to the Vim window height minus one.

### <a id=":z#" class="section-title" href="#:z#">:[range]z[!]#[+-^.=][count]</a>
Like ":z" or ":z!", but number the lines.

### <a id=":=" class="section-title" href="#:=">Note:</a>
:= [flags]		Print the last line number.
See [ex-flags](#ex-flags) for [flags].

:{range}= [flags]	Prints the last line number in {range}.  For example,
this prints the current line number:
```
:.=

```
			See [ex-flags](#ex-flags) for [flags].

### <a id=":norm :normal" class="section-title" href="#:norm :normal">:norm[al][!] {commands}</a>
Execute Normal mode commands {commands}.  This makes
it possible to execute Normal mode commands typed on
the command-line.  {commands} are executed like they
are typed.  For undo all commands are undone together.
Execution stops when an error is encountered.

If the [!] is given, mappings will not be used.
Without it, when this command is called from a
non-remappable mapping ([:noremap](#:noremap)), the argument can
be mapped anyway.

{commands} should be a complete command.  If
{commands} does not finish a command, the last one
will be aborted as if <Esc> or <C-C> was typed.
This implies that an insert command must be completed
(to start Insert mode, see [:startinsert](#:startinsert)).  A ":"
command must be completed as well.  And you can't use
"Q" or "gQ" to start Ex mode.

The display is not updated while ":normal" is busy.

{commands} cannot start with a space.  Put a count of
1 (one) before it, "1 " is one space.

This command cannot be followed by another command,
since any '|' is considered part of the command.

This command can be used recursively, but the depth is
limited by 'maxmapdepth'.

An alternative is to use [:execute](#:execute), which uses an
expression as argument.  This allows the use of
printable characters to represent special characters.

Example:
```
:exe "normal \<c-w>\<c-w>"

```


### <a id=":normal-range" class="section-title" href="#:normal-range">:{range}norm[al][!] {commands}</a>
Execute Normal mode commands {commands} for each line
in the {range}.  Before executing the {commands}, the
cursor is positioned in the first column of the range,
for each line.  Otherwise it's the same as the
":normal" command without a range.

### <a id=":sh :shell E371 E360" class="section-title" href="#:sh :shell E371 E360">Note:</a>
:sh[ell]		Removed. [vim-differences](#vim-differences)

### <a id=":terminal :te" class="section-title" href="#:terminal :te">Note:</a>
:te[rminal][!] [{cmd}]	Run {cmd} in a non-interactive 'shell' in a new
[terminal-emulator](#terminal-emulator) buffer. Without {cmd}, start an
interactive 'shell'.

Type [i| to enter |Terminal-mode](#i| to enter |Terminal-mode), then keys are sent to
the job running in the terminal. Type <C-\><C-N> to
leave Terminal-mode. [CTRL-\_CTRL-N](#CTRL-\_CTRL-N). Type <C-\><C-O>
to execute a single normal mode command [t_CTRL-\_CTRL-O](#t_CTRL-\_CTRL-O)

Fails if changes have been made to the current buffer,
unless 'hidden' is set.

To enter [Terminal-mode](#Terminal-mode) automatically:
```
### <a id="autocmd TermOpen  startinsert" class="section-title" href="#autocmd TermOpen  startinsert">Note:</a>

```

### <a id=":!cmd :!" class="section-title" href="#:!cmd :!">Note:</a>
:!{cmd}			Execute {cmd} with 'shell'. See also [:terminal](#:terminal).

The command runs in a non-interactive shell connected
to a pipe (not a terminal). Use [:terminal](#:terminal) to run an
interactive shell connected to a terminal.

Backgrounded ("&") commands must not write to stdout
or stderr, the streams are closed immediately. [E5677](#E5677)
Use [jobstart()](#jobstart()) instead.
```
:call jobstart('foo', {'detach':1})

```

For powershell, chaining a stringed executable path
requires using the call operator (&).
```
:!Write-Output "1`n2" | & "C:\Windows\System32\sort.exe" /r

```

### <a id="E34" class="section-title" href="#E34">Note:</a>
Any "!" in {cmd} is replaced with the previous
external command (see also 'cpoptions'), unless
escaped by a backslash.  Example: ":!ls" followed by
":!echo ! \! \\!" executes "echo ls ! \!".

Any "|" in {cmd} is passed to the shell, you cannot
use it to append a Vim command.  See [:bar](#:bar).

Any "%" in {cmd} is expanded to the current file name.
Any "#" in {cmd} is expanded to the alternate file name.
Special characters are not escaped, use quotes or
[shellescape()](#shellescape()):
```
:!ls "%"
:exe "!ls " .. shellescape(expand("%"))

```

Newline character ends {cmd} unless a backslash
precedes the newline.  What follows is interpreted as
another [:](#:) command.

After the command has been executed, the timestamp and
size of the current file is checked [timestamp](#timestamp).

If the command produces too much output some lines may
be skipped so the command can execute quickly.  No
data is lost, this only affects the display.  The last
few lines are always displayed (never skipped).

To avoid the hit-enter prompt use:
```
:silent !{cmd}

```

### <a id=":!!" class="section-title" href="#:!!">Note:</a>
:!!			Repeat last ":!{cmd}".

### <a id=":ve :ver :version" class="section-title" href="#:ve :ver :version">Note:</a>
:ve[rsion]		Print editor version and build information.
See also [feature-compile](#feature-compile).

### <a id=":redi :redir" class="section-title" href="#:redi :redir">Note:</a>
:redi[r][!] > {file}	Redirect messages to file {file}.  The messages which
are the output of commands are written to that file,
until redirection ends.  The messages are also still
shown on the screen.  When [!] is included, an
existing file is overwritten.  When [!] is omitted,
and {file} exists, this command fails.

Only one ":redir" can be active at a time.  Calls to
":redir" will close any active redirection before
starting redirection to the new target.  For recursive
use check out [execute()](#execute()).

To stop the messages and commands from being echoed to
the screen, put the commands in a function and call it
with ":silent call Function()".
Alternatives are the 'verbosefile' option or
[execute()](#execute()) function, these can be used in combination
with ":redir".

:redi[r] >> {file}	Redirect messages to file {file}.  Append if {file}
already exists.

:redi[r] @{a-zA-Z}
:redi[r] @{a-zA-Z}>	Redirect messages to register {a-z}.  Append to the
contents of the register if its name is given
uppercase {A-Z}.  The ">" after the register name is
optional.
:redi[r] @{a-z}>>	Append messages to register {a-z}.

:redi[r] @*>
:redi[r] @+>		Redirect messages to the selection or clipboard. For
backward compatibility, the ">" after the register
name can be omitted. See [quotestar| and |quoteplus](#quotestar| and |quoteplus).
:redi[r] @*>>
:redi[r] @+>>		Append messages to the selection or clipboard.

:redi[r] @">		Redirect messages to the unnamed register. For
backward compatibility, the ">" after the register
name can be omitted.
:redi[r] @">>		Append messages to the unnamed register.

:redi[r] => {var}	Redirect messages to a variable.  If the variable
doesn't exist, then it is created.  If the variable
exists, then it is initialized to an empty string.
The variable will remain empty until redirection ends.
Only string variables can be used.  After the
redirection starts, if the variable is removed or
locked or the variable type is changed, then further
command output messages will cause errors.  When using
a local variable (l:var in a function or s:var in a
script) and another `:redir` causes the current one to
end, the scope might be different and the assignment
fails.
To get the output of one command the [execute()](#execute())
function can be used instead of redirection.

:redi[r] =>> {var}	Append messages to an existing variable.  Only string
variables can be used.

:redi[r] END		End redirecting messages.

### <a id=":filt :filter" class="section-title" href="#:filt :filter">Note:</a>
:filt[er][!] {pattern} {command}
:filt[er][!] /{pattern}/ {command}
Restrict the output of {command} to lines matching
with {pattern}.  For example, to list only xml files:
```
:filter /\.xml$/ oldfiles

```
			If the [!] is given, restrict the output of {command}
to lines that do NOT match {pattern}.

{pattern} is a Vim search pattern.  Instead of enclosing
it in / any non-ID character (see ['isident'](#'isident')) can be
used, so long as it does not appear in {pattern}.
Without the enclosing character the pattern cannot
include the bar character. 'ignorecase' is not used.

The pattern is matched against the relevant part of
the output, not necessarily the whole line. Only some
commands support filtering, try it out to check if it
works. Some of the commands that support filtering:
[:#](#:#)          - filter whole line
[:clist](#:clist)      - filter by file name or module name
[:command](#:command)    - filter by command name
[:files](#:files)      - filter by file name
[:highlight](#:highlight)  - filter by highlight group
[:jumps](#:jumps)      - filter by file name
[:let](#:let)        - filter by variable name
[:list](#:list)       - filter whole line
[:llist](#:llist)      - filter by file name or module name
[:marks](#:marks)      - filter by text in the current file,
or file name for other files
[:oldfiles](#:oldfiles)   - filter by file name
[:registers](#:registers)  - filter by register contents
(does not work multi-line)
[:set](#:set)        - filter by option name

Only normal messages are filtered, error messages are
not.

### <a id=":sil :silent :silent!" class="section-title" href="#:sil :silent :silent!">Note:</a>
:sil[ent][!] {command}	Execute {command} silently.  Normal messages will not
be given or added to the message history.
When [!] is added, error messages will also be
skipped, and commands and mappings will not be aborted
when an error is detected.  [v:errmsg](#v:errmsg) is still set.
When [!] is not used, an error message will cause
further messages to be displayed normally.
Redirection, started with [:redir](#:redir), will continue as
usual, although there might be small differences.
This will allow redirecting the output of a command
without seeing it on the screen.  Example:
```
:redir >/tmp/foobar
:silent g/Aap/p
:redir END

```
			To execute a Normal mode command silently, use the
[:normal](#:normal) command.  For example, to search for a
string without messages:
```
:silent exe "normal /path\<CR>"

```
			":silent!" is useful to execute a command that may
fail, but the failure is to be ignored.  Example:
```
:let v:errmsg = ""
:silent! /^begin
:if v:errmsg != ""
: ... pattern was not found

```
			":silent" also skips the hit-enter prompt.
Dialogs that prompt for user input ([confirm()](#confirm()),
'swapfile', …) are never silent.

### <a id=":uns :unsilent" class="section-title" href="#:uns :unsilent">Note:</a>
:uns[ilent] {command}	Execute {command} not silently.  Only makes a
difference when [:silent](#:silent) was used to get to this
command.
Use this for giving a message even when [:silent](#:silent) was
used.  In this example [:silent](#:silent) is used to avoid the
message about reading the file and [:unsilent](#:unsilent) to be
able to list the first line of each file.
```
:silent argdo unsilent echo expand('%') .. ": " .. getline(1)

```


### <a id=":verb :verbose" class="section-title" href="#:verb :verbose">Note:</a>
:[count]verb[ose] {command}
Execute {command} with 'verbose' set to [count].  If
[count] is omitted one is used. ":0verbose" can be
used to set 'verbose' to zero.
The additional use of ":silent" makes messages
generated but not displayed.
The combination of ":silent" and ":verbose" can be
used to generate messages and check them with
[v:statusmsg](#v:statusmsg) and friends.  For example:
```
:let v:statusmsg = ""
:silent verbose runtime foobar.vim
:if v:statusmsg != ""
:  " foobar.vim could not be found
:endif

```
			When concatenating another command, the ":verbose"
only applies to the first one:
```
:4verbose set verbose | set verbose

```
				  verbose=4 ~
verbose=0 ~
For logging verbose messages in a file use the
'verbosefile' option.

### <a id=":verbose-cmd" class="section-title" href="#:verbose-cmd">Note:</a>
When 'verbose' is non-zero, listing the value of a Vim option or a key map or
an abbreviation or a user-defined function or a command or a highlight group
or an autocommand will also display where it was last defined. If they were
defined in Lua they will only be located if 'verbose' is set. So Start
nvim with -V1 arg to see them. If it was defined manually then there
will be no "Last set" message.  When it was defined while executing a function,
user command or autocommand, the script in which it was defined is reported.

### <a id="K" class="section-title" href="#K">Note:</a>
[count]K       		Runs the program given by 'keywordprg' to lookup the
[word](#word) (defined by 'iskeyword') under or right of the
cursor. Default is "man". Works like this:
```
:tabnew | terminal {program} {keyword}

```
			Special cases:
- If 'keywordprg' begins with ":" it is invoked as
a Vim command with [count].
- If 'keywordprg' is empty, [:help](#:help) is used.
- When 'keywordprg' is equal to "man", a [count]
before "K" is inserted after the "man" command and
before the keyword.  For example, using "2K" while
the cursor is on "mkdir", results in:
```
!man 2 mkdir

```
			- When 'keywordprg' is equal to "man -s", a [count]
before "K" is inserted after the "-s".  If there is
no count, the "-s" is removed.

### <a id="v_K" class="section-title" href="#v_K">Note:</a>
{Visual}K		Like "K", but use the visually highlighted text for
the keyword.  Only works when the highlighted text is
not more than one line.

### <a id="gO" class="section-title" href="#gO">Note:</a>
gO			Show a filetype-specific, navigable "outline" of the
current buffer. For example, in a [help](#help) buffer this
shows the table of contents.

Currently works in [help| and |:Man](#help| and |:Man) buffers.

### <a id="gs :sl :sleep" class="section-title" href="#gs :sl :sleep">[N]gs</a>
:[N]sl[eep] [N][m]	Do nothing for [N] seconds, or [N] milliseconds if [m]
was given.  "gs" always uses seconds.
Default is one second.
```
:sleep	     "sleep for one second
:5sleep	     "sleep for five seconds
:sleep 100m     "sleep for 100 milliseconds
10gs	     "sleep for ten seconds

```
			Can be interrupted with CTRL-C.
"gs" stands for "goto sleep".
While sleeping the cursor is positioned in the text,
if at a visible position.
Queued messages are processed during the sleep.

### <a id=":sl! :sleep!" class="section-title" href="#:sl! :sleep!">Note:</a>
:[N]sl[eep]! [N][m]	Same as above. Unlike Vim, it does not hide the
cursor. [vim-differences](#vim-differences)


## <a id="less" class="section-title" href="#less">2. Using Vim Like Less or More</a> 

If you use the less or more program to view a file, you don't get syntax
highlighting.  Thus you would like to use Vim instead.  You can do this by
using the shell script "$VIMRUNTIME/macros/less.sh".

This shell script uses the Vim script "$VIMRUNTIME/macros/less.vim".  It sets
up mappings to simulate the commands that less supports.  Otherwise, you can
still use the Vim commands.

This isn't perfect.  For example, when viewing a short file Vim will still use
the whole screen.  But it works well enough for most uses, and you get syntax
highlighting.

The "h" key will give you a short overview of the available commands.

If you want to set options differently when using less, define the
LessInitFunc in your vimrc, for example:
```

func LessInitFunc()
set nocursorcolumn nocursorline
endfunc

```


vim:noet:tw=78:ts=8:ft=help:norl:

