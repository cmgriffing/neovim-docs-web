---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Nvim" class="section-title" href="#Nvim"> Starting Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="starting" class="section-title" href="#starting">Starting Vim</a>

Type [gO](#gO) to see the table of contents.


## <a id="vim-arguments" class="section-title" href="#vim-arguments">Nvim Arguments</a> 

Most often, Nvim is started to edit a single file with the command:
```

nvim filename

More generally, Nvim is started with:
```

nvim [option | filename] ..

Option arguments and file name arguments can be mixed, and any number of them
can be given.  However, watch out for options that take an argument.

The following items decide how to start editing:

### <a id="-file ---" class="section-title" href="#-file ---">Note:</a>
filename	One or more file names.  The first one will be the current
file and read into the buffer.  The cursor will be positioned
on the first line of the buffer.
To avoid a file name starting with a '-' being interpreted as
an option, precede the arglist with "--", e.g.:
```
nvim -- -filename

```
		All arguments after the "--" will be interpreted as file names,
no other options or "+command" argument can follow.

### <a id="--" class="section-title" href="#--">Note:</a>
`-`		Alias for stdin (standard input).
Example:
```
echo text | nvim - file

```
		"text" is read into buffer 1, "file" is opened as buffer 2.
In most cases (except -s, -es, [--embed](#--embed), --headless) if stdin
is not a TTY then it is read as text, so "-" is implied:
```
echo text | nvim file

```
		The buffer will be marked as modified, because it contains
text that needs to be saved (except for readonly [-R](#-R) mode).
If you don't like that, put these lines in your init.vim:
```
" Don't set 'modified' when reading from stdin
### <a id="au StdinReadPost  set nomodified" class="section-title" href="#au StdinReadPost  set nomodified">Note:</a>

```

To read stdin as Normal commands use [-s](#-s) with "-":
```
echo "ifoo" | nvim -s -

```
		To read stdin as Ex commands use [-es| or |-e](#-es| or |-e):
```
echo "echo getpid()" | nvim -e - -V1

```
		To open a file literally named "-", put it after "--":
```
echo foo | nvim -- -

```
		To read stdin as text with [--headless](#--headless) use "-".

### <a id="-t -tag" class="section-title" href="#-t -tag">Note:</a>
-t {tag}	A tag.  "tag" is looked up in the tags file, the associated
file becomes the current file, and the associated command is
executed.  Mostly this is used for C programs, in which case
"tag" often is a function name.  The effect is that the file
containing that function becomes the current file and the
cursor is positioned on the start of the function (see
[tags](#tags)).

### <a id="-q -qf" class="section-title" href="#-q -qf">Note:</a>
-q [errorfile]	QuickFix mode.  The file with the name [errorfile] is read
and the first error is displayed.  See [quickfix](#quickfix).
If [errorfile] is not given, the 'errorfile' option is used
for the file name.  See 'errorfile' for the default value.

(nothing)	Without one of the four items above, Vim will start editing a
new buffer.  It's empty and doesn't have a file name.

### <a id="startup-options" class="section-title" href="#startup-options">Note:</a>
The option arguments may be given in any order.  Single-letter options can be
combined after one dash.  There can be no option arguments after the "--"
argument.

### <a id="-h --help -?" class="section-title" href="#-h --help -?">--help</a>
-?
-h		Give usage (help) message and exit.

### <a id="-v --version" class="section-title" href="#-v --version">--version</a>
-v		Print version information and exit.  Same output as for
[:version](#:version) command.

### <a id="--clean" class="section-title" href="#--clean">Note:</a>
--clean		Mimics a fresh install of Nvim:
- Skips initializations from files and environment variables.
- No 'shada' file is read or written.
- Excludes user directories from 'runtimepath'
- Loads builtin plugins, unlike "-u NONE -i NONE".

### <a id="--noplugin" class="section-title" href="#--noplugin">Note:</a>
--noplugin	Skip loading plugins.  Resets the 'loadplugins' option.
Note that the [-u](#-u) argument may also disable loading plugins:
argument	load vimrc files	load plugins ~
(nothing)		yes		    yes
-u NONE			no		    no
-u NORC			no		    yes
--noplugin		yes		    no

### <a id="--startuptime" class="section-title" href="#--startuptime">--startuptime {fname}</a>
During startup write timing messages to the file {fname}.
This can be used to find out where time is spent while loading
your [config](#config), plugins and opening the first file.
When {fname} already exists new messages are appended.

### <a id="-+" class="section-title" href="#-+">Note:</a>
+[num]		The cursor will be positioned on line "num" for the first
file being edited.  If "num" is missing, the cursor will be
positioned on the last line.

### <a id="-+/" class="section-title" href="#-+/">Note:</a>
+/{pat}		The cursor will be positioned on the first line containing
"pat" in the first file being edited (see [pattern](#pattern) for the
available search patterns).  The search starts at the cursor
position, which can be the first line or the cursor position
last used from [shada](#shada). To force a search from the first
line use "+1 +/pat".

### <a id="-+c -c" class="section-title" href="#-+c -c">+{command}</a>
-c {command}	{command} will be executed after the first file has been
read (and after autocommands and modelines for that file have
been processed).  "command" is interpreted as an Ex command.
If the "command" contains spaces, it must be enclosed in
double quotes (this depends on the shell that is used).
Example:
```
vim  "+set si"  main.c
vim  "+find stdio.h"
vim  -c "set ff=dos"  -c wq  mine.mak

```

Note: You can use up to 10 "+" or "-c" arguments in a Vim
command.  They are executed in the order given.  A "-S"
argument counts as a "-c" argument as well.

### <a id="--cmd" class="section-title" href="#--cmd">--cmd {command}</a>
{command} will be executed before processing any vimrc file.
Otherwise it acts like -c {command}.  You can use up to 10 of
these commands, independently from "-c" commands.

### <a id="-S" class="section-title" href="#-S">Note:</a>
-S {file}	Vimscript or Lua (".lua") {file} will be [:source](#:source)d after the
first file has been read. Equivalent to:
```
-c "source {file}"

```
		Can be repeated like "-c", subject to the same limit of 10
"-c" arguments. {file} cannot start with a "-".

-S		Works like "-S Session.vim".  Only when used as the last
argument or when another "-" option follows.

### <a id="-L -r" class="section-title" href="#-L -r">-L</a>
-r		Recovery mode.  Without a file name argument, a list of
existing swap files is given.  With a file name, a swap file
is read to recover a crashed editing session.  See
[crash-recovery](#crash-recovery).

### <a id="-R" class="section-title" href="#-R">Note:</a>
-R		Readonly mode.  The 'readonly' option will be set for all the
files being edited.  You can still edit the buffer, but will
be prevented from accidentally overwriting a file.  If you
forgot that you are in View mode and did make some changes,
you can overwrite a file by adding an exclamation mark to
the Ex command, as in ":w!".  The 'readonly' option can be
reset with ":set noro" (see the options chapter, [options](#options)).
Subsequent edits will not be done in readonly mode.  Calling
the executable "view" has the same effect as the -R argument.
The 'updatecount' option will be set to 10000, meaning that
the swap file will not be updated automatically very often.
See [-M](#-M) for disallowing modifications.

### <a id="-m" class="section-title" href="#-m">Note:</a>
-m		Modifications not allowed to be written.  The 'write' option
will be reset, so that writing files is disabled.  However,
the 'write' option can be set to enable writing again.

### <a id="-M" class="section-title" href="#-M">Note:</a>
-M		Modifications not allowed.  The 'modifiable' option will be
reset, so that changes are not allowed.  The 'write' option
will be reset, so that writing files is disabled.  However,
the 'modifiable' and 'write' options can be set to enable
changes and writing.

### <a id="-e -E" class="section-title" href="#-e -E">-e</a>
-E		Start Nvim in Ex mode [gQ|, see |Ex-mode](#gQ|, see |Ex-mode).

If stdin is not a TTY:
-e reads/executes stdin as Ex commands.
-E reads stdin as text (into buffer 1).

### <a id="-es -Es -s-ex silent-mode" class="section-title" href="#-es -Es -s-ex silent-mode">-es</a>
-Es		Silent mode (no UI), for scripting.  Unrelated to [-s](#-s).
Disables most prompts, messages, warnings and errors.

-es reads/executes stdin as Ex commands.
```
printf "put ='foo'\n%%print\n" | nvim -es


```
		-Es reads stdin as text (into buffer 1).  Use [-c](#-c) or "+" to
send commands.
```
printf "foo\n" | nvim -Es +"%print"


```
		These commands display on stdout:
:list
:number
:print
:set
With [:verbose](#:verbose) or 'verbose', other commands display on stderr:
```
nvim -es +":verbose echo 'foo'"
nvim -V1 -es +foo


```
		User [config| is skipped (unless given with |-u](#config| is skipped (unless given with |-u)).
Swap file is skipped (like [-n](#-n)).
User [shada](#shada) is loaded (unless "-i NONE" is given).

### <a id="-b" class="section-title" href="#-b">Note:</a>
-b		Binary mode.  File I/O will only recognize <NL> to separate
lines.  The 'expandtab' option will be reset.  The 'textwidth'
option is set to 0.  'modeline' is reset.  The 'binary' option
is set.  This is done after reading the [vimrc](#vimrc) but before
reading any file in the arglist.  See also [edit-binary](#edit-binary).

### <a id="-l" class="section-title" href="#-l">Note:</a>
-l		Lisp mode.  Sets the 'lisp' and 'showmatch' options on.

### <a id="-A" class="section-title" href="#-A">Note:</a>
-A		Arabic mode.  Sets the 'arabic' option on.

### <a id="-H" class="section-title" href="#-H">Note:</a>
-H		Hebrew mode.  Sets the 'hkmap' and 'rightleft' options on.

### <a id="-V verbose" class="section-title" href="#-V verbose">Note:</a>
-V[N]		Verbose.  Sets the 'verbose' option to [N] (default: 10).
Messages will be given for each file that is ":source"d and
for reading or writing a ShaDa file.  Can be used to find
out what is happening upon startup and exit.
Example:
```
nvim -V8

-V[N]{filename}
Like -V and set 'verbosefile' to {filename}.  Messages are not
displayed; instead they are written to the file {filename}.
{filename} must not start with a digit.
Example:
```
nvim -V20vimlog

```

### <a id="-D" class="section-title" href="#-D">Note:</a>
-D		Debugging.  Go to debugging mode when executing the first
command from a script. [debug-mode](#debug-mode)

### <a id="-n" class="section-title" href="#-n">Note:</a>
-n		No [swap-file](#swap-file) will be used.  Recovery after a crash will be
impossible.  Handy if you want to view or edit a file on a
very slow medium (e.g., a floppy).
Can also be done with ":set updatecount=0".  You can switch it
on again by setting the 'updatecount' option to some value,
e.g., ":set uc=100".
'updatecount' is set to 0 AFTER executing commands from a
vimrc file, but before the GUI initializations.  Thus it
overrides a setting for 'updatecount' in a vimrc file, but not
in a gvimrc file.  See [startup](#startup).
When you want to reduce accesses to the disk (e.g., for a
laptop), don't use "-n", but set 'updatetime' and
'updatecount' to very big numbers, and type ":preserve" when
you want to save your work.  This way you keep the possibility
for crash recovery.

### <a id="-o" class="section-title" href="#-o">Note:</a>
-o[N]		Open N windows, split horizontally.  If [N] is not given,
one window is opened for every file given as argument.  If
there is not enough room, only the first few files get a
window.  If there are more windows than arguments, the last
few windows will be editing an empty file.

### <a id="-O" class="section-title" href="#-O">Note:</a>
-O[N]		Open N windows, split vertically.  Otherwise it's like -o.
If both the -o and the -O option are given, the last one on
the command line determines how the windows will be split.

### <a id="-p" class="section-title" href="#-p">Note:</a>
-p[N]		Open N tab pages.  If [N] is not given, one tab page is opened
for every file given as argument.  The maximum is set with
'tabpagemax' pages (default 50).  If there are more tab pages
than arguments, the last few tab pages will be editing an
empty file.  Also see [tabpage](#tabpage).
### <a id="-d" class="section-title" href="#-d">Note:</a>
-d		Start in [diff-mode](#diff-mode).

### <a id="-u E282" class="section-title" href="#-u E282">Note:</a>
-u {vimrc}	The file {vimrc} is read for initializations.  Most other
initializations are skipped; see [initialization](#initialization).

This can be used to start Vim in a special mode, with special
mappings and settings.  A shell alias can be used to make
this easy to use.  For example:
```
### <a id="alias vimc vim -u ~/.config/nvim/c_init.vim !" class="section-title" href="#alias vimc vim -u ~/.config/nvim/c_init.vim !">Note:</a>

```
		Also consider using autocommands; see [autocommand](#autocommand).

When {vimrc} is "NONE" (all uppercase), all initializations
from files and environment variables are skipped.  Plugins and
syntax highlighting are also skipped.

When {vimrc} is "NORC" (all uppercase), this has the same
effect as "NONE", but plugins and syntax highlighting are not
skipped.

### <a id="-i" class="section-title" href="#-i">Note:</a>
-i {shada}	The file {shada} is used instead of the default ShaDa
file.  If the name "NONE" is used (all uppercase), no ShaDa
file is read or written, even if 'shada' is set or when
":rsh" or ":wsh" are used.  See also [shada-file](#shada-file).

### <a id="-s" class="section-title" href="#-s">Note:</a>
-s {scriptin}	Read script file {scriptin}, interpreting characters as
Normal-mode input.  The same can be done with ":source!":
```
:source! {scriptin}

```
		Reads from stdin if {scriptin} is "-":
```
echo "ifoo" | nvim -s -

```
		If the end of the file is reached before Nvim exits, further
characters are read from the keyboard.

Does not work with [-es|.  See also |complex-repeat](#-es|.  See also |complex-repeat).

### <a id="-w_nr" class="section-title" href="#-w_nr">Note:</a>
-w {number}
-w{number}	Set the 'window' option to {number}.

### <a id="-w" class="section-title" href="#-w">Note:</a>
-w {scriptout}	All keys that you type are recorded in the file "scriptout",
until you exit Vim.  Useful to create a script file to be used
with "vim -s" or ":source!".  Appends to the "scriptout" file
if it already exists. {scriptout} cannot start with a digit.
See also [vim.on_key()](#vim.on_key()).
See also [complex-repeat](#complex-repeat).

### <a id="-W" class="section-title" href="#-W">Note:</a>
-W {scriptout}	Like -w, but do not append, overwrite an existing file.

### <a id="--api-info" class="section-title" href="#--api-info">Note:</a>
--api-info 	Print msgpack-encoded [api-metadata](#api-metadata) and exit.

### <a id="--embed" class="section-title" href="#--embed">Note:</a>
--embed		Use stdin/stdout as a msgpack-RPC channel, so applications can
embed and control Nvim via the RPC [API](#API).

Waits for the client ("embedder") to call [nvim_ui_attach()](#nvim_ui_attach())
before sourcing startup files and reading buffers, so that UIs
can deterministically handle (display) early messages,
dialogs, etc.  The client can do other requests before
`nvim_ui_attach` (e.g. `nvim_get_api_info` for feature-detection).
During this pre-startup phase the user config is of course not
available (similar to `--cmd`).

Embedders _not_ using the UI protocol must pass [--headless](#--headless):
```
nvim --embed --headless


```
		Then startup will continue without waiting for `nvim_ui_attach`.
This is equivalent to:
```
nvim --headless --cmd "call stdioopen({'rpc': v:true})"


```
		See also: [ui-startup| |channel-stdio](#ui-startup| |channel-stdio)

### <a id="--headless" class="section-title" href="#--headless">Note:</a>
--headless 	Start without UI, and do not wait for `nvim_ui_attach`. The
builtin TUI is not used, so stdio works as an arbitrary
communication channel. [channel-stdio](#channel-stdio)

Also useful for scripting (tests) to see messages that would
not be printed by [-es](#-es).

To detect if a UI is available, check if [nvim_list_uis()](#nvim_list_uis()) is
empty during or after [VimEnter](#VimEnter).

To read stdin as text, "-" must be given explicitly:
--headless cannot assume that stdin is just text.
```
echo foo | nvim --headless +"%print" +"q!" -

```

See also [--embed](#--embed).
See also [-es](#-es), which also disables most messages.

### <a id="--listen" class="section-title" href="#--listen">--listen {addr}</a>
Start [RPC](#RPC) server on pipe or TCP address {addr}. Sets the
primary listen address [v:servername| to {addr}. |serverstart()](#v:servername| to {addr}. |serverstart())


## <a id="initialization startup" class="section-title" href="#initialization startup">Initialization</a> 

At startup, Nvim checks environment variables and files and sets values
accordingly, proceeding as follows:

### <a id="SHELL COMSPEC" class="section-title" href="#SHELL COMSPEC">1. Set the 'shell' option</a>
The environment variable SHELL, if it exists, is used to set the
'shell' option.  On Win32, the COMSPEC variable is used
if SHELL is not set.

2. Process the arguments
The options and file names from the command that start Vim are
inspected.  Buffers are created for all files (but not loaded yet).
The [-V](#-V) argument can be used to display or log what happens next,
useful for debugging the initializations.

3. Start a server (unless [--listen| was given) and set |v:servername](#--listen| was given) and set |v:servername).

4. Wait for UI to connect.
Nvim started with [--embed](#--embed) waits for the UI to connect before
proceeding to load user configuration.

5. Setup [default-mappings| and |default-autocmds|.  Create |popup-menu](#default-mappings| and |default-autocmds|.  Create |popup-menu).

6. Enable filetype and indent plugins.
This does the same as the command:
```
:runtime! ftplugin.vim indent.vim

```
	Skipped if the "-u NONE" command line argument was given.

7. Load user config (execute Ex commands from files, environment, …).
$VIMINIT environment variable is read as one Ex command line (separate
multiple commands with '|' or <NL>).
### <a id="config init.vim init.lua vimrc exrc" class="section-title" href="#config init.vim init.lua vimrc exrc">Note:</a>
A file containing initialization commands is generically called
a "vimrc" or config file.  It can be either Vimscript ("init.vim") or
Lua ("init.lua"), but not both. *E5422*
See also [vimrc-intro| and |base-directories](#vimrc-intro| and |base-directories).

The config file is located at:
Unix			~/.config/nvim/init.vim		(or init.lua)
Windows			~/AppData/Local/nvim/init.vim	(or init.lua)
[$XDG_CONFIG_HOME](#$XDG_CONFIG_HOME)	$XDG_CONFIG_HOME/nvim/init.vim	(or init.lua)

If Nvim was started with "-u {file}" then {file} is used as the config
and all initializations until 5. are skipped. $MYVIMRC is not set.
"nvim -u NORC" can be used to skip these initializations without
reading a file.  "nvim -u NONE" also skips plugins and syntax
highlighting.  [-u](#-u)

If Nvim was started with [-es](#-es) all initializations until 5. are
skipped.
### <a id="system-vimrc sysinit.vim" class="section-title" href="#system-vimrc sysinit.vim">Note:</a>
a. The system vimrc file is read for initializations.  If
nvim/sysinit.vim file exists in one of $XDG_CONFIG_DIRS, it will be
used.  Otherwise the system vimrc file is used. The path of this file
is given by the [:version](#:version) command.  Usually it's "$VIM/sysinit.vim".

### <a id="VIMINIT EXINIT $MYVIMRC" class="section-title" href="#VIMINIT EXINIT $MYVIMRC">Note:</a>
b. Locations searched for initializations, in order of preference:
-  $VIMINIT environment variable (Ex command line).
-  User [config](#config): $XDG_CONFIG_HOME/nvim/init.vim (or init.lua).
-  Other config: {dir}/nvim/init.vim (or init.lua) where {dir} is any
directory in $XDG_CONFIG_DIRS.
-  $EXINIT environment variable (Ex command line).
[$MYVIMRC](#$MYVIMRC) is set to the first valid location unless it was already
set or when using $VIMINIT.

c. If the 'exrc' option is on (which is NOT the default), the current
directory is searched for two files.  The first that exists is used,
the others are ignored.
-  The file ".nvimrc"
-  The file ".exrc"

8. Enable filetype detection.
This does the same as the command:
```
:runtime! filetype.lua

```
	Skipped if ":filetype off" was called or if the "-u NONE" command line
argument was given.

9. Enable syntax highlighting.
This does the same as the command:
```
:runtime! syntax/syntax.vim

```
	Skipped if ":syntax off" was called or if the "-u NONE" command
line argument was given.

### <a id="load-plugins" class="section-title" href="#load-plugins">10. Load the plugin scripts.</a>
This does the same as the command:
```
### <a id=":runtime! plugin//.vim" class="section-title" href="#:runtime! plugin//.vim">Note:</a>
### <a id=":runtime! plugin//.lua" class="section-title" href="#:runtime! plugin//.lua">Note:</a>

```
	The result is that all directories in 'runtimepath' will be searched
for the "plugin" sub-directory and all files ending in ".vim" or
".lua" will be sourced (in alphabetical order per directory),
also in subdirectories. First "*.vim" are sourced, then "*.lua" files.

However, directories in 'runtimepath' ending in "after" are skipped
here and only loaded after packages, see below.
Loading plugins won't be done when:
- The 'loadplugins' option was reset in a vimrc file.
- The [--noplugin](#--noplugin) command line argument is used.
- The [--clean](#--clean) command line argument is used.
- The "-u NONE" command line argument is used [-u](#-u).
Note that using "-c 'set noloadplugins'" doesn't work, because the
commands from the command line have not been executed yet.  You can
use "--cmd 'set noloadplugins'" or "--cmd 'set loadplugins'" [--cmd](#--cmd).

Packages are loaded.  These are plugins, as above, but found in the
"start" directory of each entry in 'packpath'.  Every plugin directory
found is added in 'runtimepath' and then the plugins are sourced.  See
[packages](#packages).

The plugins scripts are loaded, as above, but now only the directories
ending in "after" are used.  Note that 'runtimepath' will have changed
if packages have been found, but that should not add a directory
ending in "after".

11. Set 'shellpipe' and 'shellredir'
The 'shellpipe' and 'shellredir' options are set according to the
value of the 'shell' option, unless they have been set before.
This means that Nvim will figure out the values of 'shellpipe' and
'shellredir' for you, unless you have set them yourself.

12. Set 'updatecount' to zero, if "-n" command argument used

13. Set binary options if the [-b](#-b) flag was given.

14. Read the [shada-file](#shada-file).

15. Read the quickfix file if the [-q](#-q) flag was given, or exit on failure.

16. Open all windows
When the [-o](#-o) flag was given, windows will be opened (but not
displayed yet).
When the [-p](#-p) flag was given, tab pages will be created (but not
displayed yet).
When switching screens, it happens now.  Redrawing starts.
If the [-q](#-q) flag was given, the first error is jumped to.
Buffers for all windows will be loaded, without triggering [BufAdd](#BufAdd)
autocommands.

17. Execute startup commands
If a [-t](#-t) flag was given, the tag is jumped to.
Commands given with [-c| and |+cmd](#-c| and |+cmd) are executed.
The starting flag is reset, has("vim_starting") will now return zero.
The [v:vim_did_enter](#v:vim_did_enter) variable is set to 1.
The [VimEnter](#VimEnter) autocommands are executed.


Saving the current state of Vim to a file ~

Whenever you have changed values of options or when you have created a
mapping, then you may want to save them in a vimrc file for later use.  See
[save-settings](#save-settings) about saving the current state of settings to a file.


Avoiding trojan horses ~
### <a id="trojan-horse" class="section-title" href="#trojan-horse">Note:</a>
While reading the "vimrc" or the "exrc" file in the current directory, some
commands can be disabled for security reasons by setting the 'secure' option.
This is always done when executing the command from a tags file.  Otherwise it
would be possible that you accidentally use a vimrc or tags file that somebody
else created and contains nasty commands.  The disabled commands are the ones
that start a shell, the ones that write to a file, and ":autocmd".  The ":map"
commands are echoed, so you can see which keys are being mapped.
If you want Vim to execute all commands in a local vimrc file, you
can reset the 'secure' option in the EXINIT or VIMINIT environment variable or
in the global exrc or vimrc file.  This is not possible in vimrc or
exrc in the current directory, for obvious reasons.
On Unix systems, this only happens if you are not the owner of the
vimrc file.  Warning: If you unpack an archive that contains a vimrc or exrc
file, it will be owned by you.  You won't have the security protection.  Check
the vimrc file before you start Vim in that directory, or reset the 'exrc'
option.  Some Unix systems allow a user to do "chown" on a file.  This makes
it possible for another user to create a nasty vimrc and make you the owner.
Be careful!
When using tag search commands, executing the search command (the last
part of the line in the tags file) is always done in secure mode.  This works
just like executing a command from a vimrc in the current directory.


If Vim startup is slow ~
### <a id="slow-start" class="section-title" href="#slow-start">Note:</a>
If Vim takes a long time to start up, use the [--startuptime](#--startuptime) argument to find
out what happens.

If you have 'shada' enabled, the loading of the ShaDa file may take a
while.  You can find out if this is the problem by disabling ShaDa for a
moment (use the Vim argument "-i NONE", [-i](#-i)).  Try reducing the number of
lines stored in a register with ":set shada='20,<50,s10".  [shada-file](#shada-file).


Troubleshooting broken configurations ~
### <a id="bisect" class="section-title" href="#bisect">Note:</a>
The extreme flexibility of editors like Vim and Emacs means that any plugin or
setting can affect the entire editor in ways that are not initially obvious.

To find the cause of a problem in your config, you must "bisect" it:
1. Remove or disable half of your [config](#config).
2. Restart Nvim.
3. If the problem still occurs, goto 1.
4. If the problem is gone, restore half of the removed lines.
5. Continue narrowing your config in this way, until you find the setting or
plugin causing the issue.


Intro message ~
### <a id=":intro" class="section-title" href="#:intro">Note:</a>
When Vim starts without a file name, an introductory message is displayed.  It
is removed as soon as the display is redrawn.  To see the message again, use
the ":intro" command.  To avoid the intro message on startup, add the "I" flag
to 'shortmess'.


## <a id="" class="section-title" href="#">$VIM and $VIMRUNTIME</a> <span id="$VIM"></span>

The environment variable "$VIM" is used to locate various user files for Nvim,
such as the user [config](#config).  This depends on the system, see
[startup](#startup).

Nvim will try to get the value for $VIM in this order:

1. Environment variable $VIM, if it is set.
2. Path derived from the 'helpfile' option, unless it contains some
environment variable too (default is "$VIMRUNTIME/doc/help.txt").  File
name ("help.txt", etc.) is removed.  Trailing directory names are removed,
in this order: "doc", "runtime".
3. Path derived from the location of the `nvim` executable.
4. Compile-time defined installation directory (see output of ":version").

After doing this once, Nvim sets the $VIM environment variable.

### <a id="$VIMRUNTIME" class="section-title" href="#$VIMRUNTIME">Note:</a>
The environment variable "$VIMRUNTIME" is used to locate various support
files, such as the documentation and syntax-highlighting files.  For example,
the main help file is normally "$VIMRUNTIME/doc/help.txt".

Nvim will try to get the value for $VIMRUNTIME in this order:

1. Environment variable $VIMRUNTIME, if it is set.
2. Directory path "$VIM/vim{version}", if it exists, where {version} is the
Vim version number without '-' or '.'.  For example: "$VIM/vim82".
3. Directory path "$VIM/runtime", if it exists.
4. Value of $VIM environment variable.  This is for backwards compatibility
with older Vim versions.
5. If "../share/nvim/runtime" exists relative to [v:progpath](#v:progpath), it is used.
6. Path derived from the 'helpfile' option (if it doesn't contain '$') with
"doc/help.txt" removed from the end.

After doing this once, Nvim sets the $VIMRUNTIME environment variable.

In case you need the value of $VIMRUNTIME in a shell (e.g., for a script that
greps in the help files) you might be able to use this:
```

VIMRUNTIME="$(nvim --clean --headless --cmd 'echo $VIMRUNTIME|q')"


## <a id="suspend" class="section-title" href="#suspend">Suspending</a> 

### <a id="CTRL-Z v_CTRL-Z" class="section-title" href="#CTRL-Z v_CTRL-Z">Note:</a>
CTRL-Z			Suspend Nvim, like ":stop".
Works in Normal and in Visual mode.  In Insert and
Command-line mode, the CTRL-Z is inserted as a normal
character.  In Visual mode Nvim goes back to Normal
mode.

### <a id=":sus :suspend :st :stop" class="section-title" href="#:sus :suspend :st :stop">:sus[pend][!]	or</a>
:st[op][!]		Suspend Nvim using OS "job control"; it will continue
if you make it the foreground job again.  Triggers
[VimSuspend| before suspending and |VimResume](#VimSuspend| before suspending and |VimResume) when
resumed.
If "!" is not given and 'autowrite' is set, every
buffer with changes and a file name is written out.
If "!" is given or 'autowrite' is not set, changed
buffers are not written, don't forget to bring Nvim
back to the foreground later!

In the GUI, suspending is implementation-defined.


## <a id="exiting" class="section-title" href="#exiting">Exiting</a> 

There are several ways to exit Vim:
- Close the last window with `:quit`.  Only when there are no changes.
- Close the last window with `:quit!`.  Also when there are changes.
- Close all windows with `:qall`.  Only when there are no changes.
- Close all windows with `:qall!`.  Also when there are changes.
- Use `:cquit`.  Also when there are changes.

When using `:cquit` or when there was an error message Vim exits with exit
code 1.  Errors can be avoided by using `:silent!` or with `:catch`.


## <a id="save-settings" class="section-title" href="#save-settings">Saving Settings</a> 

Mostly you will edit your vimrc files manually.  This gives you the greatest
flexibility.  There are a few commands to generate a vimrc file automatically.
You can use these files as they are, or copy/paste lines to include in another
vimrc file.

### <a id=":mk :mkexrc" class="section-title" href="#:mk :mkexrc">Note:</a>
:mk[exrc] [file]	Write current key mappings and changed options to
[file] (default ".exrc" in the current directory),
unless it already exists.

:mk[exrc]! [file]	Always write current key mappings and changed
options to [file] (default ".exrc" in the current
directory).

### <a id=":mkv :mkvi :mkvimrc" class="section-title" href="#:mkv :mkvi :mkvimrc">Note:</a>
:mkv[imrc][!] [file]	Like ":mkexrc", but the default is ".nvimrc" in the
current directory.  The ":version" command is also
written to the file.

These commands will write ":map" and ":set" commands to a file, in such a way
that when these commands are executed, the current key mappings and options
will be set to the same values.  The options 'columns', 'endofline',
'fileformat', 'lines', 'modified', and 'scroll' are not included, because
these are terminal or file dependent.
Note that the options 'binary', 'paste' and 'readonly' are included, this
might not always be what you want.

When special keys are used in mappings, The 'cpoptions' option will be
temporarily set to its Vim default, to avoid the mappings to be
misinterpreted.  This makes the file incompatible with Vi, but makes sure it
can be used with different terminals.

Only global mappings are stored, not mappings local to a buffer.

A common method is to use a default [config](#config) file, make some modifications
with ":map" and ":set" commands and write the modified file.  First read the
default vimrc in with a command like ":source ~piet/.vimrc.Cprogs", change
the settings and then save them in the current directory with ":mkvimrc!".  If
you want to make this file your default [config](#config), move it to
$XDG_CONFIG_HOME/nvim.  You could also use autocommands [autocommand](#autocommand) and/or
modelines [modeline](#modeline).

### <a id="vimrc-option-example" class="section-title" href="#vimrc-option-example">Note:</a>
If you only want to add a single option setting to your vimrc, you can use
these steps:
1. Edit your vimrc file with Vim.
2. Play with the option until it's right.  E.g., try out different values for
'guifont'.
3. Append a line to set the value of the option, using the expression register
'=' to enter the value.  E.g., for the 'guifont' option:
```
o:set guifont=<C-R>=&guifont<CR><Esc>

```
  [<C-R> is a CTRL-R, <CR> is a return, <Esc> is the escape key]
You need to escape special characters, esp. spaces.


## <a id="views-sessions" class="section-title" href="#views-sessions">Views and Sessions</a> 

This is introduced in sections [21.4| and |21.5](#21.4| and |21.5) of the user manual.

### <a id="View view-file" class="section-title" href="#View view-file">Note:</a>
A View is a collection of settings that apply to one window.  You can save a
View and when you restore it later, the text is displayed in the same way.
The options and mappings in this window will also be restored, so that you can
continue editing like when the View was saved.

### <a id="Session session-file" class="section-title" href="#Session session-file">Note:</a>
A Session keeps the Views for all windows, plus the global settings.  You can
save a Session and when you restore it later the window layout looks the same.
You can use a Session to quickly switch between different projects,
automatically loading the files you were last working on in that project.

Views and Sessions are a nice addition to ShaDa files, which are used to
remember information for all Views and Sessions together [shada-file](#shada-file).

You can quickly start editing with a previously saved View or Session with the
[-S](#-S) argument:
```
vim -S Session.vim

```

### <a id=":mks :mksession" class="section-title" href="#:mks :mksession">Note:</a>
:mks[ession][!] [file]	Write a Vim script that restores the current editing
session.
When [!] is included an existing file is overwritten.
When [file] is omitted "Session.vim" is used.

The output of ":mksession" is like ":mkvimrc", but additional commands are
added to the file.  Which ones depends on the 'sessionoptions' option.  The
resulting file, when executed with a ":source" command:
1. Restores global mappings and options, if 'sessionoptions' contains
"options".  Script-local mappings will not be written.
2. Restores global variables that start with an uppercase letter and contain
at least one lowercase letter, if 'sessionoptions' contains "globals".
3. Closes all windows in the current tab page, except the current one; closes
all tab pages except the current one (this results in currently loaded
buffers to be unloaded, some may become hidden if 'hidden' is set or
otherwise specified); wipes out the current buffer, if it is empty
and unnamed.
4. Restores the current directory if 'sessionoptions' contains "curdir", or
sets the current directory to where the Session file is if 'sessionoptions'
contains "sesdir".
5. Restores GUI Vim window position, if 'sessionoptions' contains "winpos".
6. Restores screen size, if 'sessionoptions' contains "resize".
7. Reloads the buffer list, with the last cursor positions.  If
'sessionoptions' contains "buffers" then all buffers are restored,
including hidden and unloaded buffers.  Otherwise only buffers in windows
are restored.
8. Restores all windows with the same layout.  If 'sessionoptions' contains
"help", help windows are restored.  If 'sessionoptions' contains "blank",
windows editing a buffer without a name will be restored.
If 'sessionoptions' contains "winsize" and no (help/blank) windows were
left out, the window sizes are restored (relative to the screen size).
Otherwise, the windows are just given sensible sizes.
9. Restores the Views for all the windows, as with [:mkview](#:mkview).  But
'sessionoptions' is used instead of 'viewoptions'.
10. If a file exists with the same name as the Session file, but ending in
"x.vim" (for eXtra), executes that as well.  You can use *x.vim files to
specify additional settings and actions associated with a given Session,
such as creating menu items in the GUI version.

After restoring the Session, the full filename of your current Session is
available in the internal variable [v:this_session](#v:this_session).
An example mapping:
```
:nmap <F2> :wa<Bar>exe "mksession! " .. v:this_session<CR>:so ~/sessions/
This saves the current Session, and starts off the command to load another.

A session includes all tab pages, unless "tabpages" was removed from
'sessionoptions'. [tab-page](#tab-page)

The [SessionLoadPost](#SessionLoadPost) autocmd event is triggered after a session file is
loaded/sourced.
### <a id="SessionLoad-variable" class="section-title" href="#SessionLoad-variable">Note:</a>
While the session file is loading the SessionLoad global variable is set to 1.
Plugins can use this to postpone some work until the SessionLoadPost event is
triggered.

### <a id=":mkvie :mkview" class="section-title" href="#:mkvie :mkview">Note:</a>
:mkvie[w][!] [file]	Write a Vim script that restores the contents of the
current window.
When [!] is included an existing file is overwritten.
When [file] is omitted or is a number from 1 to 9, a
name is generated and 'viewdir' prepended.  When the
last path part of 'viewdir' does not exist, this
directory is created.  E.g., when 'viewdir' is
"$VIM/vimfiles/view" then "view" is created in
"$VIM/vimfiles".
An existing file is always overwritten then.  Use
[:loadview](#:loadview) to load this view again.
When [file] is the name of a file ('viewdir' is not
used), a command to edit the file is added to the
generated file.

The output of ":mkview" contains these items:
1. The argument list used in the window.  When the global argument list is
used it is reset to the global list.
The index in the argument list is also restored.
2. The file being edited in the window.  If there is no file, the window is
made empty.
3. Restore mappings, abbreviations and options local to the window if
'viewoptions' contains "options" or "localoptions".  For the options it
restores only values that are local to the current buffer and values local
to the window.
When storing the view as part of a session and "options" is in
'sessionoptions', global values for local options will be stored too.
4. Restore folds when using manual folding and 'viewoptions' contains
"folds".  Restore manually opened and closed folds.
5. The scroll position and the cursor position in the file.  Doesn't work very
well when there are closed folds.
6. The local current directory, if it is different from the global current
directory and 'viewoptions' contains "curdir".

Note that Views and Sessions are not perfect:
- They don't restore everything.  For example, defined functions, autocommands
and ":syntax on" are not included.  Things like register contents and
command line history are in ShaDa, not in Sessions or Views.
- Global option values are only set when they differ from the default value.
When the current value is not the default value, loading a Session will not
set it back to the default value.  Local options will be set back to the
default value though.
- Existing mappings will be overwritten without warning.  An existing mapping
may cause an error for ambiguity.
- When storing manual folds and when storing manually opened/closed folds,
changes in the file between saving and loading the view will mess it up.
- The Vim script is not very efficient.  But still faster than typing the
commands yourself!

### <a id=":lo :loadview" class="section-title" href="#:lo :loadview">Note:</a>
:lo[adview] [nr]	Load the view for the current file.  When [nr] is
omitted, the view stored with ":mkview" is loaded.
When [nr] is specified, the view stored with ":mkview
[nr]" is loaded.

The combination of ":mkview" and ":loadview" can be used to store up to ten
different views of a file.  These are remembered in the directory specified
with the 'viewdir' option.  The views are stored using the file name.  If a
file is renamed or accessed through a (symbolic) link the view will not be
found.

You might want to clean up your 'viewdir' directory now and then.

To automatically save and restore views for *.c files:
```
au BufWinLeave *.c mkview
au BufWinEnter *.c silent! loadview


## <a id="shada shada-file" class="section-title" href="#shada shada-file">Shada ("Shared Data") File</a> 

If you exit Vim and later start it again, you would normally lose a lot of
information.  The ShaDa file can be used to remember that information, which
enables you to continue where you left off.  Its name is the abbreviation of
SHAred DAta because it is used for sharing data between Neovim sessions.

This is introduced in section [21.3](#21.3) of the user manual.

The ShaDa file is used to store:
- The command line history.
- The search string history.
- The input-line history.
- Contents of non-empty registers.
- Marks for several files.
- File marks, pointing to locations in files.
- Last search/substitute pattern (for 'n' and '&').
- The buffer list.
- Global variables.

You could also use a Session file.  The difference is that the ShaDa file
does not depend on what you are working on.  There normally is only one
ShaDa file.  Session files are used to save the state of a specific editing
Session.  You could have several Session files, one for each project you are
working on.  ShaDa and Session files together can be used to effectively
enter Vim and directly start working in your desired setup. [session-file](#session-file)

### <a id="shada-read" class="section-title" href="#shada-read">Note:</a>
When Vim is started and the 'shada' option is non-empty, the contents of
the ShaDa file are read and the info can be used in the appropriate places.
The [v:oldfiles](#v:oldfiles) variable is filled.  The marks are not read in at startup
(but file marks are).  See [initialization](#initialization) for how to set the 'shada'
option upon startup.

### <a id="shada-write" class="section-title" href="#shada-write">Note:</a>
When Vim exits and 'shada' is non-empty, the info is stored in the ShaDa file
(it's actually merged with the existing one, if one exists [shada-merging](#shada-merging)).
The 'shada' option is a string containing information about what info should
be stored, and contains limits on how much should be stored (see 'shada').

Notes for Unix:
- The file protection for the ShaDa file will be set to prevent other users
from being able to read it, because it may contain any text or commands that
you have worked with.
- If you want to share the ShaDa file with other users (e.g. when you "su"
to another user), you can make the file writable for the group or everybody.
Vim will preserve this when writing new ShaDa files.  Be careful, don't
allow just anybody to read and write your ShaDa file!
- Vim will not overwrite a ShaDa file that is not writable by the current
"real" user.  This helps for when you did "su" to become root, but your
$HOME is still set to a normal user's home directory.  Otherwise Vim would
create a ShaDa file owned by root that nobody else can read.
- The ShaDa file cannot be a symbolic link.  This is to avoid security
issues.

Marks are stored for each file separately.  When a file is read and 'shada'
is non-empty, the marks for that file are read from the ShaDa file.  NOTE:
The marks are only written when exiting Vim, which is fine because marks are
remembered for all the files you have opened in the current editing session,
unless ":bdel" is used.  If you want to save the marks for a file that you are
about to abandon with ":bdel", use ":wsh".  The '[' and ']' marks are not
stored, but the '"' mark is.  The '"' mark is very useful for jumping to the
cursor position when the file was last exited.  No marks are saved for files
that start with any string given with the "r" flag in 'shada'.  This can be
used to avoid saving marks for files on removable media (for MS-Windows you
would use "ra:,rb:").
The [v:oldfiles](#v:oldfiles) variable is filled with the file names that the ShaDa file
has marks for.

### <a id="shada-file-marks" class="section-title" href="#shada-file-marks">Note:</a>
Uppercase marks ('A to 'Z) are stored when writing the ShaDa file.  The
numbered marks ('0 to '9) are a bit special.  When the ShaDa file is written
(when exiting or with the [:wshada](#:wshada) command), '0 is set to the current cursor
position and file.  The old '0 is moved to '1, '1 to '2, etc.  This
resembles what happens with the "1 to "9 delete registers.  If the current
cursor position is already present in '0 to '9, it is moved to '0, to avoid
having the same position twice.  The result is that with "'0", you can jump
back to the file and line where you exited Vim.  To do that right away, try
using this command:
```

vim -c "normal '0"

In a csh compatible shell you could make an alias for it:
```

alias lvim vim -c '"'normal "'"0'"'

For a bash-like shell:
```

alias lvim='vim -c "normal '\''0"'

Use the "r" flag in 'shada' to specify for which files no marks should be
remembered.

### <a id="shada-merging" class="section-title" href="#shada-merging">MERGING</a>

When writing ShaDa files with [:wshada](#:wshada) without bang or at regular exit
information in the existing ShaDa file is merged with information from current
Neovim instance.  For this purpose ShaDa files store timestamps associated
with ShaDa entries.  Specifically the following is being done:

1. History lines are merged, ordered by timestamp.  Maximum amount of items in
ShaDa file is defined by 'shada' option ([shada-/|, |shada-:|, |shada-@](#shada-/|, |shada-:|, |shada-@),
etc: one suboption for each character that represents history name
([:history](#:history))).
2. Local marks and changes for files that were not opened by Neovim are copied
to new ShaDa file. Marks for files that were opened by Neovim are merged,
changes to files opened by Neovim are ignored. [shada-'](#shada-')
3. Jump list is merged: jumps are ordered by timestamp, identical jumps
(identical position AND timestamp) are squashed.
4. Search patterns and substitute strings are not merged: search pattern or
substitute string which has greatest timestamp will be the only one copied
to ShaDa file.
5. For each register entity with greatest timestamp is the only saved.
[shada-<](#shada-<)
6. All saved variables are saved from current Neovim instance. Additionally
existing variable values are copied, meaning that the only way to remove
variable from a ShaDa file is either removing it by hand or disabling
writing variables completely. [shada-!](#shada-!)
7. For each global mark entity with greatest timestamp is the only saved.
8. Buffer list and header are the only entries which are not merged in any
fashion: the only header and buffer list present are the ones from the
Neovim instance which was last writing the file. [shada-%](#shada-%)

### <a id="shada-compatibility" class="section-title" href="#shada-compatibility">COMPATIBILITY</a>

ShaDa files are forward and backward compatible.  This means that

1. Entries which have unknown type (i.e. that hold unidentified data) are
ignored when reading and blindly copied when writing.
2. Register entries with unknown register name are ignored when reading and
blindly copied when writing. Limitation: only registers that use name with
code in interval [1, 255] are supported. [registers](#registers)
3. Register entries with unknown register type are ignored when reading and
merged as usual when writing. [getregtype()](#getregtype())
4. Local and global mark entries with unknown mark names are ignored when
reading. When writing global mark entries are blindly copied and local mark
entries are also blindly copied, but only if file they are attached to fits
in the [shada-'](#shada-') limit. Unknown local mark entry's timestamp is also taken
into account when calculating which files exactly should fit into this
limit. Limitation: only marks that use name with code in interval [1, 255]
are supported. [mark-motions](#mark-motions)
5. History entries with unknown history type are ignored when reading and
blindly copied when writing. Limitation: there can be only up to 256
history types. [history](#history)
6. Unknown keys found in register, local mark, global mark, change, jump and
search pattern entries are saved internally and dumped when writing.
Entries created during Neovim session never have such additions.
7. Additional elements found in replacement string and history entries are
saved internally and dumped. Entries created during Neovim session never
have such additions.
8. Additional elements found in variable entries are simply ignored when
reading. When writing new variables they will be preserved during merging,
but that's all. Variable values dumped from current Neovim session never
have additional elements, even if variables themselves were obtained by
reading ShaDa files.

"Blindly" here means that there will be no attempts to somehow merge them,
even if other entries (with known name/type/etc) are merged. [shada-merging](#shada-merging)

### <a id="shada-file-name" class="section-title" href="#shada-file-name">Shada File Name</a>

- Default name of the [shada](#shada) file is:
Unix:     "$XDG_STATE_HOME/nvim/shada/main.shada"
Windows:  "$XDG_STATE_HOME/nvim-data/shada/main.shada"
See also [base-directories](#base-directories).
- To choose a different file name you can use:
- The "n" flag in the 'shada' option.
- The [-i](#-i) startup argument.  "NONE" means no shada file is ever read or
written.  Also not for the commands below!
- The 'shadafile' option.  The value from the "-i" argument (if any) is
stored in the 'shadafile' option.
- For the commands below, another file name can be given, overriding the
default and the name given with 'shada' or "-i" (unless it's NONE).


### <a id="shada-read-write" class="section-title" href="#shada-read-write">Manually Reading and Writing</a>

Two commands can be used to read and write the ShaDa file manually.  This
can be used to exchange registers between two running Vim programs: First
type ":wsh" in one and then ":rsh" in the other.  Note that if the register
already contained something, then ":rsh!" would be required.  Also note
however that this means everything will be overwritten with information from
the first Vim, including the command line history, etc.

The ShaDa file itself can be edited by hand too, although we suggest you
start with an existing one to get the format right.  You need to understand
MessagePack (or, more likely, find software that is able to use it) format to
do this.  This can be useful in order to create a second file, say
"~/.my.shada" which could contain certain settings that you always want when
you first start Neovim.  For example, you can preload registers with
particular data, or put certain commands in the command line history.  A line
in your [config](#config) file like
```
:rshada! ~/.my.shada
can be used to load this information.  You could even have different ShaDa
files for different types of files (e.g., C code) and load them based on the
file name, using the ":autocmd" command (see [:autocmd](#:autocmd)).  More information on
ShaDa file format is contained in [shada-format](#shada-format) section.

### <a id="E136 E929 shada-error-handling" class="section-title" href="#E136 E929 shada-error-handling">Note:</a>
Some errors make Neovim leave temporary file named `{basename}.tmp.X` (X is
any free letter from `a` to `z`) while normally it will create this file,
write to it and then rename `{basename}.tmp.X` to `{basename}`. Such errors
include:

- Errors which make Neovim think that read file is not a ShaDa file at all:
non-ShaDa files are not overwritten for safety reasons to avoid accidentally
destroying an unrelated file.  This could happen e.g. when typing "nvim -i
file" in place of "nvim -R file" (yes, somebody did that at least with Vim).
Such errors are listed at [shada-critical-contents-errors](#shada-critical-contents-errors).
- If writing to the temporary file failed: e.g. because of the insufficient
space left.
- If renaming file failed: e.g. because of insufficient permissions.
- If target ShaDa file has different from the Neovim instance's owners (user
and group) and changing them failed.  Unix-specific, applies only when
Neovim was launched from root.

Do not forget to remove the temporary file or replace the target file with
temporary one after getting one of the above errors or all attempts to create
a ShaDa file may fail with [E929](#E929).  If you got one of them when using
[:wshada](#:wshada) (and not when exiting Neovim: i.e. when you have Neovim session
running) you have additional options:

- First thing which you should consider if you got any error, except failure
to write to the temporary file: remove existing file and replace it with the
temporary file.  Do it even if you have running Neovim instance.
- Fix the permissions and/or file ownership, free some space and attempt to
write again.  Do not remove the existing file.
- Use [:wshada](#:wshada) with bang.  Does not help in case of permission error.  If
target file was actually the ShaDa file some information may be lost in this
case.  To make the matters slightly better use [:rshada](#:rshada) prior to writing,
but this still will loose buffer-local marks and change list entries for any
file which is not opened in the current Neovim instance.
- Remove the target file from shell and use [:wshada](#:wshada).  Consequences are not
different from using [:wshada](#:wshada) with bang, but "rm -f" works in some cases
when you don't have write permissions.

### <a id=":rsh :rshada E886" class="section-title" href="#:rsh :rshada E886">Note:</a>
:rsh[ada][!] [file]	Read from ShaDa file [file] (default: see above).
If [!] is given, then any information that is
already set (registers, marks, [v:oldfiles](#v:oldfiles), etc.)
will be overwritten.

### <a id=":wsh :wshada E137" class="section-title" href="#:wsh :wshada E137">Note:</a>
:wsh[ada][!] [file]	Write to ShaDa file [file] (default: see above).
The information in the file is first read in to make
a merge between old and new info.  When [!] is used,
the old information is not read first, only the
internal info is written (also disables safety checks
described in [shada-error-handling](#shada-error-handling)).  If 'shada' is
empty, marks for up to 100 files will be written.
When you get error "E929: All .tmp.X files exist,
cannot write ShaDa file!" check that no old temp files
were left behind (e.g.
### <a id="~/.local/state/nvim/shada/main.shada.tmp)." class="section-title" href="#~/.local/state/nvim/shada/main.shada.tmp).">Note:</a>

Note: Executing :wshada will reset all ['quote](#'quote) marks.

### <a id=":o :ol :oldfiles" class="section-title" href="#:o :ol :oldfiles">Note:</a>
:o[ldfiles]		List the files that have marks stored in the ShaDa
file.  This list is read on startup and only changes
afterwards with `:rshada!`.  Also see [v:oldfiles](#v:oldfiles).
The number can be used with [c_#<](#c_#<).
The output can be filtered with [:filter](#:filter), e.g.:
```
filter /\.vim/ oldfiles

```
			The filtering happens on the file name.

:bro[wse] o[ldfiles][!]
List file names as with [:oldfiles](#:oldfiles), and then prompt
for a number.  When the number is valid that file from
the list is edited.
If you get the [press-enter](#press-enter) prompt you can press "q"
and still get the prompt to enter a file number.
Use ! to abandon a modified buffer. [abandon](#abandon)

### <a id="shada-format" class="section-title" href="#shada-format">Shada File Format</a>

ShaDa files are concats of MessagePack entries.  Each entry is a concat of
exactly four MessagePack objects:

1. First goes type of the entry.  Object type must be an unsigned integer.
Object type must not be equal to zero.
2. Second goes entry timestamp.  It must also be an unsigned integer.
3. Third goes the length of the fourth entry.  Unsigned integer as well, used
for fast skipping without parsing.
4. Fourth is actual entry data.  All currently used ShaDa entries use
containers to hold data: either map or array.  All string values in those
containers are either binary (applies to filenames) or UTF-8, yet parser
needs to expect that invalid bytes may be present in a UTF-8 string.

Exact format depends on the entry type:

Entry type (name)   Entry data ~
1 (Header)          Map containing data that describes the generator
instance that wrote this ShaDa file.  It is ignored
when reading ShaDa files.  Contains the following data:
Key        Data ~
generator  Binary, software used to generate ShaDa
file. Is equal to "nvim" when ShaDa file was
written by Neovim.
version    Binary, generator version.
encoding   Binary, effective 'encoding' value.
max_kbyte  Integer, effective [shada-s](#shada-s) limit value.
pid        Integer, instance process ID.
#### <a id="``" class="section-title" href="#``">Note:</a>
additional keys with any data.
2 (SearchPattern)   Map containing data describing last used search or
substitute pattern.  Normally ShaDa file contains two
such entries: one with "ss" key set to true (describes
substitute pattern, see [:substitute](#:substitute)), and one set to
false (describes search pattern, see
[search-commands](#search-commands)). "su" key should be true on one of
the entries.  If key value is equal to default then it
is normally not present.  Keys:
Key  Type     Default  Description ~
sm   Boolean  true     Effective 'magic' value.
sc   Boolean  false    Effective 'smartcase' value.
sl   Boolean  true     True if search pattern comes
with a line offset.  See
[search-offset](#search-offset).
se   Boolean  false    True if [search-offset](#search-offset)
requested to place cursor at
(relative to) the end of the
pattern.
so   Integer  0        Offset value. [search-offset](#search-offset)
su   Boolean  false    True if current entry was the
last used search pattern.
ss   Boolean  false    True if current entry describes
[:substitute](#:substitute) pattern.
sh   Boolean  false    True if [v:hlsearch](#v:hlsearch) is on.
With [shada-h](#shada-h) or 'nohlsearch'
this key is always false.
sp   Binary   N/A      Actual pattern.  Required.
sb   Boolean  false    True if search direction is
backward.
#### <a id="``" class="section-title" href="#``">Note:</a>
compatibility reasons, see
[shada-compatibility](#shada-compatibility).
3 (SubString)       Array containing last [:substitute](#:substitute) replacement string.
Contains single entry: binary, replacement string used.
More entries are allowed for compatibility reasons, see
[shada-compatibility](#shada-compatibility).
4 (HistoryEntry)    Array containing one entry from history.  Should have
two or three entries.  First one is history type
(unsigned integer), second is history line (binary),
third is the separator character (unsigned integer,
must be in interval [0, 255]).  Third item is only
valid for search history.  Possible history types are
listed in [hist-names](#hist-names), here are the corresponding
numbers: 0 - cmd, 1 - search, 2 - expr, 3 - input,
4 - debug.
5 (Register)        Map describing one register ([registers](#registers)).  If key
value is equal to default then it is normally not
present.  Keys:
Key  Type             Def   Description ~
rt   UInteger         0     Register type:
No  Description ~
0   [charwise-register](#charwise-register)
1   [linewise-register](#linewise-register)
2   [blockwise-register](#blockwise-register)
rw   UInteger         0     Register width. Only valid
for [blockwise-register](#blockwise-register)s.
rc   Array of binary  N/A   Register contents.  Each
entry in the array
represents its own line.
NUL characters inside the
line should be represented
as NL according to
[NL-used-for-Nul](#NL-used-for-Nul).
ru   Boolean          false Unnamed register. Whether
the unnamed register had
pointed to this register.
n    UInteger         N/A   Register name: character
code in range [1, 255].
Example: [quote0](#quote0) register
has name 48 (ASCII code for
zero character).
### <a id="" class="section-title" href="#">Note:</a>
for compatibility reasons,
see [shada-compatibility](#shada-compatibility).
6 (Variable)        Array containing two items: variable name (binary) and
variable value (any object).  Values are converted
using the same code [msgpackparse()](#msgpackparse()) uses when reading,
[msgpackdump()](#msgpackdump()) when writing, so there may appear
[msgpack-special-dict](#msgpack-special-dict)s.  If there are more then two
entries then the rest are ignored
([shada-compatibility](#shada-compatibility)).
7 (GlobalMark)
8 (Jump)
10 (LocalMark)
11 (Change)         Map containing some position description:
Entry      Position ~
GlobaMark  Global mark position. ['A](#'A)
LocalMark  Local mark position. ['a](#'a)
Jump       One position from the [jumplist](#jumplist).
Change     One position from the [changelist](#changelist).

Data contained in the map:
Key  Type      Default  Description ~
l    UInteger  1        Position line number.  Must be
greater then zero.
c    UInteger  0        Position column number.
n    UInteger  34 ('"') Mark name.  Only valid for
GlobalMark and LocalMark
entries.
f    Binary    N/A      File name.  Required.
#### <a id="``" class="section-title" href="#``">Note:</a>
compatibility reasons, see
[shada-compatibility](#shada-compatibility).
9 (BufferList)      Array containing maps.  Each map in the array
represents one buffer.  Possible keys:
Key  Type      Default  Description ~
l    UInteger  1        Position line number.  Must be
greater then zero.
c    UInteger  0        Position column number.
f    Binary    N/A      File name.  Required.
#### <a id="``" class="section-title" href="#``">Note:</a>
compatibility reasons, see
[shada-compatibility](#shada-compatibility).
#### <a id="`` (Unknown)" class="section-title" href="#`` (Unknown)">Note:</a>
reasons, see [shada-compatibility](#shada-compatibility).

### <a id="E575 E576" class="section-title" href="#E575 E576">Note:</a>
Errors in ShaDa file may have two types: E575 used for all “logical” errors
and E576 used for all “critical” errors.  Critical errors trigger behaviour
described in [shada-error-handling](#shada-error-handling) when writing and skipping the rest of the
file when reading and include:
### <a id="shada-critical-contents-errors" class="section-title" href="#shada-critical-contents-errors">Note:</a>
- Any of first three MessagePack objects being not an unsigned integer.
- Third object requesting amount of bytes greater then bytes left in the ShaDa
file.
- Entry with zero type.  I.e. first object being equal to zero.
- MessagePack parser failing to parse the entry data.
- MessagePack parser consuming less or requesting greater bytes then described
in the third object for parsing fourth object.  I.e. when fourth object
either contains more then one MessagePack object or it does not contain
complete MessagePack object.


## <a id="standard-path" class="section-title" href="#standard-path">Standard Paths</a> 

Nvim stores configuration, data, and logs in standard locations. Plugins are
strongly encouraged to follow this pattern also. Use [stdpath()](#stdpath()) to get the
paths.

### <a id="base-directories xdg" class="section-title" href="#base-directories xdg">Note:</a>
The "base" (root) directories conform to the XDG Base Directory Specification.
https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html
The $XDG_CONFIG_HOME, $XDG_DATA_HOME, $XDG_RUNTIME_DIR, and $XDG_STATE_HOME
environment variables are used if defined, else default values (listed below)
are used.

CONFIG DIRECTORY (DEFAULT) ~
### <a id="$XDG_CONFIG_HOME" class="section-title" href="#$XDG_CONFIG_HOME">Note:</a>
Unix:         ~/.config                   ~/.config/nvim
Windows:      ~/AppData/Local             ~/AppData/Local/nvim

DATA DIRECTORY (DEFAULT) ~
### <a id="$XDG_DATA_HOME" class="section-title" href="#$XDG_DATA_HOME">Note:</a>
Unix:         ~/.local/share              ~/.local/share/nvim
Windows:      ~/AppData/Local             ~/AppData/Local/nvim-data

RUN DIRECTORY (DEFAULT) ~
### <a id="$XDG_RUNTIME_DIR" class="section-title" href="#$XDG_RUNTIME_DIR">Note:</a>
Unix:         /tmp/nvim.user/xxx          /tmp/nvim.user/xxx
Windows:      $TMP/nvim.user/xxx          $TMP/nvim.user/xxx

STATE DIRECTORY (DEFAULT) ~
### <a id="$XDG_STATE_HOME" class="section-title" href="#$XDG_STATE_HOME">Note:</a>
Unix:         ~/.local/state              ~/.local/state/nvim
Windows:      ~/AppData/Local             ~/AppData/Local/nvim-data

Note: Throughout the user manual these defaults are used as placeholders, e.g.
"~/.config" is understood to mean "$XDG_CONFIG_HOME or ~/.config".

### <a id="$NVIM_LOG_FILE E5430" class="section-title" href="#$NVIM_LOG_FILE E5430">Log File</a>
Besides 'debug' and 'verbose', Nvim keeps a general log file for internal
debugging, plugins and RPC clients.
```
:echo $NVIM_LOG_FILE
By default, the file is located at stdpath("log")/log unless that path
is inaccessible or if $NVIM_LOG_FILE was set before [startup](#startup).


vim:noet:tw=78:ts=8:ft=help:norl:
