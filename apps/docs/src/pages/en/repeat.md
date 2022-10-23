---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Nvim" class="section-title" href="#Nvim"> Repeat Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="repeating" class="section-title" href="#repeating">Repeating commands, Vim scripts and debugging</a>

Chapter 26 of the user manual introduces repeating [usr_26.txt](#usr_26.txt).

Type [gO](#gO) to see the table of contents.


## <a id="single-repeat" class="section-title" href="#single-repeat">Single Repeats</a> 

### <a id="." class="section-title" href="#.">Note:</a>
.			Repeat last change, with count replaced with [count].
Also repeat a yank command, when the 'y' flag is
included in 'cpoptions'.  Does not repeat a
command-line command.

Simple changes can be repeated with the "." command.  Without a count, the
count of the last change is used.  If you enter a count, it will replace the
last one.  [v:count| and |v:count1](#v:count| and |v:count1) will be set.

If the last change included a specification of a numbered register, the
register number will be incremented.  See [redo-register](#redo-register) for an example how
to use this.

Note that when repeating a command that used a Visual selection, the same SIZE
of area is used, see [visual-repeat](#visual-repeat).

### <a id="@:" class="section-title" href="#@:">Note:</a>
@:			Repeat last command-line [count] times.


## <a id="multi-repeat" class="section-title" href="#multi-repeat">Multiple Repeats</a> 

### <a id=":g :global E148" class="section-title" href="#:g :global E148">Note:</a>
:[range]g[lobal]/{pattern}/[cmd]
Execute the Ex command [cmd] (default ":p") on the
lines within [range] where {pattern} matches.

:[range]g[lobal]!/{pattern}/[cmd]
Execute the Ex command [cmd] (default ":p") on the
lines within [range] where {pattern} does NOT match.

### <a id=":v :vglobal" class="section-title" href="#:v :vglobal">Note:</a>
:[range]v[global]/{pattern}/[cmd]
Same as :g!.

Example:
```
:g/^Obsolete/d _
Using the underscore after `:d` avoids clobbering registers or the clipboard.
This also makes it faster.

Instead of the '/' which surrounds the {pattern}, you can use any other
single byte character, but not an alphabetic character, '\', '"' or '|'.
This is useful if you want to include a '/' in the search pattern or
replacement string.

For the definition of a pattern, see [pattern](#pattern).

NOTE [cmd] may contain a range; see [collapse| and |edit-paragraph-join](#collapse| and |edit-paragraph-join) for
examples.

The global commands work by first scanning through the [range] lines and
marking each line where a match occurs (for a multi-line pattern, only the
start of the match matters).
In a second scan the [cmd] is executed for each marked line, as if the cursor
was in that line.  For ":v" and ":g!" the command is executed for each not
marked line.  If a line is deleted its mark disappears.
The default for [range] is the whole buffer (1,$).  Use "CTRL-C" to interrupt
the command.  If an error message is given for a line, the command for that
line is aborted and the global command continues with the next marked or
unmarked line.
### <a id="E147" class="section-title" href="#E147">Note:</a>
When the command is used recursively, it only works on one line.  Giving a
range is then not allowed. This is useful to find all lines that match a
pattern and do not match another pattern:
```
:g/found/v/notfound/{cmd}
This first finds all lines containing "found", but only executes {cmd} when
there is no match for "notfound".

Any Ex command can be used, see [ex-cmd-index](#ex-cmd-index).  To execute a Normal mode
command, you can use the `:normal` command:
```
:g/pat/normal {commands}
Make sure that {commands} ends with a whole command, otherwise Vim will wait
for you to type the rest of the command for each match.  The screen will not
have been updated, so you don't know what you are doing.  See [:normal](#:normal).

The undo/redo command will undo/redo the whole global command at once.
The previous context mark will only be set once (with "''" you go back to
where the cursor was before the global command).

The global command sets both the last used search pattern and the last used
substitute pattern (this is vi compatible).  This makes it easy to globally
replace a string:
:g/pat/s//PAT/g
This replaces all occurrences of "pat" with "PAT".  The same can be done with:
:%s/pat/PAT/g
Which is two characters shorter!

When using "global" in Ex mode, a special case is using ":visual" as a
command.  This will move to a matching line, go to Normal mode to let you
execute commands there until you use [gQ](#gQ) to return to Ex mode.  This will be
repeated for each matching line.  While doing this you cannot use ":global".
To abort this type CTRL-C twice.


## <a id="complex-repeat" class="section-title" href="#complex-repeat">Complex Repeats</a> 

### <a id="q recording" class="section-title" href="#q recording">Note:</a>
q{0-9a-zA-Z"}		Record typed characters into register {0-9a-zA-Z"}
(uppercase to append).  The 'q' command is disabled
while executing a register, and it doesn't work inside
a mapping and [:normal](#:normal).

Note: If the register being used for recording is also
used for [y| and |p](#y| and |p) the result is most likely not
what is expected, because the put will paste the
recorded macro and the yank will overwrite the
recorded macro.

Note: The recording happens while you type, replaying
the register happens as if the keys come from a
mapping.  This matters, for example, for undo, which
only syncs when commands were typed.

q			Stops recording.
Implementation note: The 'q' that stops recording is
not stored in the register, unless it was the result
of a mapping

### <a id="@" class="section-title" href="#@">Note:</a>
### <a id="Execute the contents of register {0-9a-z".=+} [count]" class="section-title" href="#Execute the contents of register {0-9a-z".=+} [count]">@{0-9a-z".=*+}</a>
times.  Note that register '%' (name of the current
file) and '#' (name of the alternate file) cannot be
used.
The register is executed like a mapping, that means
that the difference between 'wildchar' and 'wildcharm'
applies, and undo might not be synced in the same way.
For "@=" you are prompted to enter an expression.  The
result of the expression is then executed.
See also [@:](#@:).

### <a id="@@ E748" class="section-title" href="#@@ E748">Note:</a>
### <a id="Repeat the previous @{0-9a-z":} [count] times." class="section-title" href="#Repeat the previous @{0-9a-z":} [count] times.">@@</a>

### <a id="Q" class="section-title" href="#Q">Note:</a>
Q			Repeat the last recorded register [count] times.
See [reg_recorded()](#reg_recorded()).

### <a id=":@" class="section-title" href="#:@">Note:</a>
:[addr]@{0-9a-z".=*+}	Execute the contents of register {0-9a-z".=*+} as an Ex
command.  First set cursor at line [addr] (default is
current line).  When the last line in the register does
not have a <CR> it will be added automatically when
the 'e' flag is present in 'cpoptions'.
For ":@=" the last used expression is used.  The
result of evaluating the expression is executed as an
Ex command.
Mappings are not recognized in these commands.
When the [line-continuation](#line-continuation) character (\) is present
at the beginning of a line in a linewise register,
then it is combined with the previous line. This is
useful for yanking and executing parts of a Vim
script.

### <a id=":@:" class="section-title" href="#:@:">Note:</a>
:[addr]@:		Repeat last command-line.  First set cursor at line
[addr] (default is current line).

### <a id=":@@" class="section-title" href="#:@@">:[addr]@</a>
:[addr]@@		Repeat the previous :@{register}.  First set cursor at
line [addr] (default is current line).


## <a id="using-scripts" class="section-title" href="#using-scripts">Using Vim Scripts</a> 

For writing a Vim script, see chapter 41 of the user manual [usr_41.txt](#usr_41.txt).

### <a id=":so :source load-vim-script" class="section-title" href="#:so :source load-vim-script">Note:</a>
:[range]so[urce] [file]	Runs [Ex](#Ex) commands or Lua code (".lua" files) from
[file], or current buffer if no [file].
Triggers the [SourcePre](#SourcePre) autocommand.
### <a id=":source!" class="section-title" href="#:source!">Note:</a>
:[range]so[urce]! {file}
Runs [Normal-mode](#Normal-mode) commands from {file}. When used
after [:global|, |:argdo|, |:windo|, |:bufdo](#:global|, |:argdo|, |:windo|, |:bufdo), in
a loop or when another command follows the display
won't be updated while executing the commands.

### <a id=":ru :runtime" class="section-title" href="#:ru :runtime">Note:</a>
:ru[ntime][!] [where] {file} ..
Sources [Ex](#Ex) commands or Lua code (".lua" files) read
from {file} (a relative path) in each directory given
by 'runtimepath' and/or 'packpath'.
Ignores non-existing files.

Example:
```
:runtime syntax/c.vim
:runtime syntax/c.lua


```
			There can be multiple space-separated {file}
arguments. Each {file} is searched for in the first
directory from 'runtimepath', then in the second
directory, etc.

When [!] is included, all found files are sourced.
Else only the first found file is sourced.

When [where] is omitted, first 'runtimepath' is
searched, then directories under "start" in 'packpath'
are searched.
Other values:
START	search only under "start" in 'packpath'
OPT 	search only under "opt" in 'packpath'
PACK	search under "start" and "opt" in
'packpath'
ALL	first use 'runtimepath', then search
under "start" and "opt" in 'packpath'

When {file} contains wildcards it is expanded to all
matching files.  Example:
```
### <a id=":runtime! plugin//.vim" class="section-title" href="#:runtime! plugin//.vim">Note:</a>

```
			This is what Vim uses to load the plugin files when
starting up.  This similar command:
```
### <a id=":runtime plugin//.vim" class="section-title" href="#:runtime plugin//.vim">Note:</a>

```
			would source the first file only.

When 'verbose' is one or higher, there is a message
when no file could be found.
When 'verbose' is two or higher, there is a message
about each searched file.

### <a id=":pa :packadd E919" class="section-title" href="#:pa :packadd E919">Note:</a>
:pa[ckadd][!] {name}	Search for an optional plugin directory in 'packpath'
and source any plugin files found.  The directory must
match:
### <a id="pack//opt/{name} ~" class="section-title" href="#pack//opt/{name} ~">Note:</a>
The directory is added to 'runtimepath' if it wasn't
there yet.
### <a id="If the directory pack//opt/{name}/after exists it is" class="section-title" href="#If the directory pack//opt/{name}/after exists it is">Note:</a>
added at the end of 'runtimepath'.

### <a id="If loading packages from "pack//start" was skipped," class="section-title" href="#If loading packages from "pack//start" was skipped,">Note:</a>
then this directory is searched first:
### <a id="pack//start/{name} ~" class="section-title" href="#pack//start/{name} ~">Note:</a>

Note that {name} is the directory name, not the name
of the .vim file.  All the files matching the pattern
### <a id="pack//opt/{name}/plugin//.vim ~" class="section-title" href="#pack//opt/{name}/plugin//.vim ~">Note:</a>
and
### <a id="pack//opt/{name}/plugin//.lua ~" class="section-title" href="#pack//opt/{name}/plugin//.lua ~">Note:</a>
will be sourced.  This allows for using subdirectories
below "plugin", just like with plugins in
'runtimepath'.

If the filetype detection was already enabled (this
is usually done with a "syntax enable" or "filetype
on" command in your [init.vim](#init.vim), or automatically during
[initialization](#initialization)), and the package was found in
### <a id=""pack//opt/{name}", this command will also look" class="section-title" href="#"pack//opt/{name}", this command will also look">Note:</a>
### <a id="for "{name}/ftdetect/.vim" files." class="section-title" href="#for "{name}/ftdetect/.vim" files.">Note:</a>

When the optional ! is added no plugin files or
ftdetect scripts are loaded, only the matching
directories are added to 'runtimepath'.  This is
useful in your [init.vim](#init.vim).  The plugins will then be
loaded during [initialization|, see |load-plugins](#initialization|, see |load-plugins) (note
that the loading order will be reversed, because each
directory is inserted before others). In this case, the
ftdetect scripts will be loaded during [initialization](#initialization),
before the [load-plugins](#load-plugins) step.

Also see [pack-add](#pack-add).

### <a id=":packl :packloadall" class="section-title" href="#:packl :packloadall">Note:</a>
:packl[oadall][!]	Load all packages in the "start" directory under each
entry in 'packpath'.

First all the directories found are added to
'runtimepath', then the plugins found in the
directories are sourced.  This allows for a plugin to
depend on something of another plugin, e.g. an
"autoload" directory.  See [packload-two-steps](#packload-two-steps) for
how this can be useful.

This is normally done automatically during startup,
after loading your [vimrc](#vimrc) file.  With this command it
can be done earlier.

Packages will be loaded only once.  Using
`:packloadall` a second time will have no effect.
When the optional ! is added this command will load
packages even when done before.

Note that when using `:packloadall` in the [vimrc](#vimrc)
file, the 'runtimepath' option is updated, and later
all plugins in 'runtimepath' will be loaded, which
means they are loaded again.  Plugins are expected to
handle that.

An error only causes sourcing the script where it
happens to be aborted, further plugins will be loaded.
See [packages](#packages).

### <a id=":scripte :scriptencoding E167" class="section-title" href="#:scripte :scriptencoding E167">:scripte[ncoding] [encoding]</a>
Specify the character encoding used in the script.
The following lines will be converted from [encoding]
to the value of the 'encoding' option, if they are
different.  Examples:
```
scriptencoding iso-8859-5
scriptencoding cp932

```

When [encoding] is empty, no conversion is done.  This
can be used to restrict conversion to a sequence of
lines:
```
scriptencoding euc-jp
... lines to be converted ...
scriptencoding
... not converted ...


```
			When conversion isn't supported by the system, there
is no error message and no conversion is done.  When a
line can't be converted there is no error and the
original line is kept.

Don't use "ucs-2" or "ucs-4", scripts cannot be in
these encodings (they would contain NUL bytes).
When a sourced script starts with a BOM (Byte Order
Mark) in utf-8 format Vim will recognize it, no need
to use ":scriptencoding utf-8" then.

### <a id=":scr :scriptnames" class="section-title" href="#:scr :scriptnames">Note:</a>
:scr[iptnames]		List all sourced script names, in the order they were
first sourced.  The number is used for the script ID
[<SID>](#<SID>).

### <a id=":script" class="section-title" href="#:script">:scr[iptnames][!] {scriptId}</a>
Edit script {scriptId}.  Although ":scriptnames name"
works, using ":script name" is recommended.
When the current buffer can't be [abandon](#abandon)ed and the !
is not present, the command fails.

### <a id=":fini :finish E168" class="section-title" href="#:fini :finish E168">Note:</a>
:fini[sh]		Stop sourcing a script.  Can only be used in a Vim
script file.  This is a quick way to skip the rest of
the file.  If it is used after a [:try](#:try) but before the
matching [:finally](#:finally) (if present), the commands
following the ":finally" up to the matching [:endtry](#:endtry)
are executed first.  This process applies to all
nested ":try"s in the script.  The outermost ":endtry"
then stops sourcing the script.

All commands and command sequences can be repeated by putting them in a named
register and then executing it.  There are two ways to get the commands in the
register:
- Use the record command "q".  You type the commands once, and while they are
being executed they are stored in a register.  Easy, because you can see
what you are doing.  If you make a mistake, "p"ut the register into the
file, edit the command sequence, and then delete it into the register
again.  You can continue recording by appending to the register (use an
uppercase letter).
- Delete or yank the command sequence into the register.

Often used command sequences can be put under a function key with the ':map'
command.

An alternative is to put the commands in a file, and execute them with the
':source!' command.  Useful for long command sequences.  Can be combined with
the ':map' command to put complicated commands under a function key.

The ':source' command reads Ex commands from a file line by line.  You will
have to type any needed keyboard input.  The ':source!' command reads from a
script file character by character, interpreting each character as if you
typed it.

Example: When you give the ":!ls" command you get the [hit-enter](#hit-enter) prompt.  If
you ':source' a file with the line "!ls" in it, you will have to type the

```
Enter> yourself.  But if you ':source!' a file with the line ":!ls" in it,
the next characters from that file are read until a <CR> is found.  You will
not have to type <CR> yourself, unless ":!ls" was the last line in the file.

It is possible to put ':source[!]' commands in the script file, so you can
make a top-down hierarchy of script files.  The ':source' command can be
nested as deep as the number of files that can be opened at one time (about
15).  The ':source!' command can be nested up to 15 levels deep.

You can use the "<sfile>" string (literally, this is not a special key) inside
of the sourced file, in places where a file name is expected.  It will be
replaced by the file name of the sourced file.  For example, if you have a
"other.vimrc" file in the same directory as your [init.vim](#init.vim) file, you can
source it from your [init.vim](#init.vim) file with this command:
```
:source <sfile>:h/other.vimrc

In script files terminal-dependent key codes are represented by
terminal-independent two character codes.  This means that they can be used
in the same way on different kinds of terminals.  The first character of a
key code is 0x80 or 128, shown on the screen as "~@".  The second one can be
found in the list [key-notation](#key-notation).  Any of these codes can also be entered
with CTRL-V followed by the three digit decimal code.

### <a id=":source_crnl W15" class="section-title" href="#:source_crnl W15">Note:</a>
Windows: Files that are read with ":source" normally have <CR><NL> <EOL>s.
These always work.  If you are using a file with <NL> <EOL>s (for example, a
file made on Unix), this will be recognized if 'fileformats' is not empty and
the first line does not end in a <CR>.  This fails if the first line has
something like ":map <F1> :help^M", where "^M" is a <CR>.  If the first line
ends in a <CR>, but following ones don't, you will get an error message,
because the <CR> from the first lines will be lost.

On other systems, Vim expects ":source"ed files to end in a <NL>.  These
always work.  If you are using a file with <CR><NL> <EOL>s (for example, a
file made on MS-Windows), all lines will have a trailing <CR>.  This may cause
problems for some commands (e.g., mappings).  There is no automatic <EOL>
detection, because it's common to start with a line that defines a mapping
that ends in a <CR>, which will confuse the automaton.

### <a id="line-continuation" class="section-title" href="#line-continuation">Note:</a>
Long lines in a ":source"d Ex command script file can be split by inserting
a line continuation symbol "\" (backslash) at the start of the next line.
There can be white space before the backslash, which is ignored.

Example: the lines
```
:set comments=sr:/*,mb:*,el:*/,
\://,
\b:#,
\:%,
\n:>,
\fb:-
are interpreted as if they were given in one line:
:set comments=sr:/*,mb:*,el:*/,://,b:#,:%,n:>,fb:-

All leading whitespace characters in the line before a backslash are ignored.
Note however that trailing whitespace in the line before it cannot be
inserted freely; it depends on the position where a command is split up
whether additional whitespace is allowed or not.

When a space is required it's best to put it right after the backslash.  A
space at the end of a line is hard to see and may be accidentally deleted.
```
:syn match Comment
\ "very long regexp"
\ keepend

There is a problem with the ":append" and ":insert" commands:
```
:1append
\asdf
.
The backslash is seen as a line-continuation symbol, thus this results in the
command:
```
:1appendasdf
.
To avoid this, add the 'C' flag to the 'cpoptions' option:
```
:set cpo+=C
:1append
\asdf
.
:set cpo-=C

Note that when the commands are inside a function, you need to add the 'C'
flag when defining the function, it is not relevant when executing it.
```
:set cpo+=C
:function Foo()
:1append
\asdf
.
:endfunction
:set cpo-=C

```

### <a id="line-continuation-comment" class="section-title" href="#line-continuation-comment">Note:</a>
To add a comment in between the lines start with `'"\ '`.  Notice the space
after the backslash.  Example:
```
let array = [
"\ first entry comment
\ 'first',
"\ second entry comment
\ 'second',
\ ]

Rationale:
Most programs work with a trailing backslash to indicate line
continuation.  Using this in Vim would cause incompatibility with Vi.
For example for this Vi mapping:
```
:map xx  asdf\

```
	Therefore the unusual leading backslash is used.

Starting a comment in a continuation line results in all following
continuation lines to be part of the comment.  Since it was like this
for a long time, when making it possible to add a comment halfway a
sequence of continuation lines, it was not possible to use \", since
that was a valid continuation line.  Using `'"\ '` comes closest, even
though it may look a bit weird.  Requiring the space after the
backslash is to make it very unlikely this is a normal comment line.


## <a id="packages" class="section-title" href="#packages">Using Vim Packages</a> 

A Vim "package" is a directory that contains [plugin](#plugin)s.  Compared to normal
plugins, a package can...
- be downloaded as an archive and unpacked in its own directory, so the files
are not mixed with files of other plugins.
- be a git, mercurial, etc. repository, thus easy to update.
- contain multiple plugins that depend on each other.
- contain plugins that are automatically loaded on startup ("start" packages,
### <a id="located in "pack//start/") and ones that are only loaded when needed with" class="section-title" href="#located in "pack//start/") and ones that are only loaded when needed with">Note:</a>
### <a id="[:packadd| ("opt" packages, located in "pack//opt/")." class="section-title" href="#|:packadd](#:packadd| ("opt" packages, located in "pack//opt/")." class="section-title" href="#|:packadd) ("opt" packages, located in "pack//opt/").">Note:</a>

### <a id="runtime-search-path" class="section-title" href="#runtime-search-path">Note:</a>
Nvim searches for [:runtime](#:runtime) files in:
1. all paths in 'runtimepath'
2. all "pack/*/start/*" dirs

Note that the "pack/*/start/*" paths are not explicitly included in
'runtimepath', so they will not be reported by ":set rtp" or "echo &rtp".
Scripts can use [nvim_list_runtime_paths()](#nvim_list_runtime_paths()) to list all used directories, and
[nvim_get_runtime_file()](#nvim_get_runtime_file()) to query for specific files or sub-folders within
the runtime path. Example:
```
" List all runtime dirs and packages with Lua paths.
:echo nvim_get_runtime_file("lua/", v:true)

Using a package and loading automatically ~

Let's assume your Nvim files are in "~/.local/share/nvim/site" and you want to
add a package from a zip archive "/tmp/foopack.zip":
% mkdir -p ~/.local/share/nvim/site/pack/foo
% cd ~/.local/share/nvim/site/pack/foo
% unzip /tmp/foopack.zip

The directory name "foo" is arbitrary, you can pick anything you like.

You would now have these files under ~/.local/share/nvim/site:
pack/foo/README.txt
pack/foo/start/foobar/plugin/foo.vim
pack/foo/start/foobar/syntax/some.vim
pack/foo/opt/foodebug/plugin/debugger.vim

On startup after processing your [config](#config), Nvim scans all directories in
'packpath' for plugins in "pack/*/start/*", then loads the plugins.

To allow for calling into package functionality while parsing your [vimrc](#vimrc),
[:colorscheme| and |autoload](#:colorscheme| and |autoload) will both automatically search under 'packpath'
as well in addition to 'runtimepath'.  See the documentation for each for
details.

In the example Nvim will find "pack/foo/start/foobar/plugin/foo.vim" and load
it.

If the "foobar" plugin kicks in and sets the 'filetype' to "some", Nvim will
find the syntax/some.vim file, because its directory is in the runtime search
path.

Nvim will also load ftdetect files, if there are any.

Note that the files under "pack/foo/opt" are not loaded automatically, only the
ones under "pack/foo/start".  See [pack-add](#pack-add) below for how the "opt" directory
is used.

Loading packages automatically will not happen if loading plugins is disabled,
see [load-plugins](#load-plugins).

To load packages earlier, so that plugin/ files are sourced:
:packloadall
This also works when loading plugins is disabled.  The automatic loading will
only happen once.

If the package has an "after" directory, that directory is added to the end of
'runtimepath', so that anything there will be loaded later.


Using a single plugin and loading it automatically ~

If you don't have a package but a single plugin, you need to create the extra
directory level:
% mkdir -p ~/.local/share/nvim/site/pack/foo/start/foobar
% cd ~/.local/share/nvim/site/pack/foo/start/foobar
% unzip /tmp/someplugin.zip

You would now have these files:
pack/foo/start/foobar/plugin/foo.vim
pack/foo/start/foobar/syntax/some.vim

From here it works like above.


Optional plugins ~
### <a id="pack-add" class="section-title" href="#pack-add">Note:</a>
To load an optional plugin from a pack use the `:packadd` command:
```
:packadd foodebug
This searches for "pack/*/opt/foodebug" in 'packpath' and will find
~/.local/share/nvim/site/pack/foo/opt/foodebug/plugin/debugger.vim and source
it.

This could be done if some conditions are met.  For example, depending on
whether Nvim supports a feature or a dependency is missing.

You can also load an optional plugin at startup, by putting this command in
your [config](#config):
```
:packadd! foodebug
The extra "!" is so that the plugin isn't loaded if Nvim was started with
[--noplugin](#--noplugin).

It is perfectly normal for a package to only have files in the "opt"
directory.  You then need to load each plugin when you want to use it.


Where to put what ~

Since color schemes, loaded with `:colorscheme`, are found below
"pack/*/start" and "pack/*/opt", you could put them anywhere.  We recommend
you put them below "pack/*/opt", for example
"~/.config/nvim/pack/mycolors/opt/dark/colors/very_dark.vim".

Filetype plugins should go under "pack/*/start", so that they are always
found.  Unless you have more than one plugin for a file type and want to
select which one to load with `:packadd`.  E.g. depending on the compiler
version:
```
if foo_compiler_version > 34
packadd foo_new
else
packadd foo_old
endif

The "after" directory is most likely not useful in a package.  It's not
disallowed though.


## <a id="package-create" class="section-title" href="#package-create">Creating Vim Packages</a> 

This assumes you write one or more plugins that you distribute as a package.

If you have two unrelated plugins you would use two packages, so that Vim
users can choose what they include or not.  Or you can decide to use one
package with optional plugins, and tell the user to add the preferred ones with
`:packadd`.

Decide how you want to distribute the package.  You can create an archive or
you could use a repository.  An archive can be used by more users, but is a
bit harder to update to a new version.  A repository can usually be kept
up-to-date easily, but it requires a program like "git" to be available.
You can do both, github can automatically create an archive for a release.

Your directory layout would be like this:
start/foobar/plugin/foo.vim    	" always loaded, defines commands
start/foobar/plugin/bar.vim    	" always loaded, defines commands
start/foobar/autoload/foo.vim  	" loaded when foo command used
start/foobar/doc/foo.txt       	" help for foo.vim
start/foobar/doc/tags          	" help tags
opt/fooextra/plugin/extra.vim  	" optional plugin, defines commands
opt/fooextra/autoload/extra.vim  	" loaded when extra command used
opt/fooextra/doc/extra.txt  	        " help for extra.vim
opt/fooextra/doc/tags  	        " help tags

This allows for the user to do:
```
mkdir ~/.local/share/nvim/site/pack
cd ~/.local/share/nvim/site/pack
git clone https://github.com/you/foobar.git myfoobar

Here "myfoobar" is a name that the user can choose, the only condition is that
it differs from other packages.

In your documentation you explain what the plugins do, and tell the user how
to load the optional plugin:
```
:packadd! fooextra

You could add this packadd command in one of your plugins, to be executed when
the optional plugin is needed.

Run the `:helptags` command to generate the doc/tags file.  Including this
generated file in the package means that the user can drop the package in the
pack directory and the help command works right away.  Don't forget to re-run
the command after changing the plugin help:
```
:helptags path/start/foobar/doc
:helptags path/opt/fooextra/doc


Dependencies between plugins ~
### <a id="packload-two-steps" class="section-title" href="#packload-two-steps">Note:</a>
Suppose you have two plugins that depend on the same functionality. You can
put the common functionality in an autoload directory, so that it will be
found automatically.  Your package would have these files:

pack/foo/start/one/plugin/one.vim
```
call foolib#getit()

```
	pack/foo/start/two/plugin/two.vim
```
call foolib#getit()

```
	pack/foo/start/lib/autoload/foolib.vim
```
func foolib#getit()

This works, because start packages will be searchd for autoload files, when
sourcing the plugins.


## <a id="debug-scripts" class="section-title" href="#debug-scripts">Debugging Scripts</a> 

Besides the obvious messages that you can add to your scripts to find out what
they are doing, Vim offers a debug mode.  This allows you to step through a
sourced file or user function and set breakpoints.

NOTE: The debugging mode is far from perfect.  Debugging will have side
effects on how Vim works.  You cannot use it to debug everything.  For
example, the display is messed up by the debugging messages.

An alternative to debug mode is setting the 'verbose' option.  With a bigger
number it will give more verbose messages about what Vim is doing.


### <a id="debug-mode" class="section-title" href="#debug-mode">Starting Debug Mode</a>

To enter debugging mode use one of these methods:
1. Start Vim with the [-D](#-D) argument:
```
vim -D file.txt

```
  Debugging will start as soon as the first vimrc file is sourced.  This is
useful to find out what is happening when Vim is starting up.  A side
effect is that Vim will switch the terminal mode before initialisations
have finished, with unpredictable results.
For a GUI-only version (Windows) the debugging will start as
soon as the GUI window has been opened.  To make this happen early, add a
":gui" command in the vimrc file.
### <a id=":debug" class="section-title" href="#:debug">Note:</a>
2. Run a command with ":debug" prepended.  Debugging will only be done while
this command executes.  Useful for debugging a specific script or user
function.  And for scripts and functions used by autocommands.  Example:
```
:debug edit test.txt.gz

3. Set a breakpoint in a sourced file or user function.  You could do this in
the command line:
```
vim -c "breakadd file */explorer.vim" .

```
  This will run Vim and stop in the first line of the "explorer.vim" script.
Breakpoints can also be set while in debugging mode.

In debugging mode every executed command is displayed before it is executed.
Comment lines, empty lines and lines that are not executed are skipped.  When
a line contains two commands, separated by "|", each command will be displayed
separately.


DEBUG MODE

Once in debugging mode, the usual Ex commands can be used.  For example, to
inspect the value of a variable:
```
echo idx
When inside a user function, this will print the value of the local variable
"idx".  Prepend "g:" to get the value of a global variable:
```
echo g:idx
All commands are executed in the context of the current function or script.
You can also set options, for example setting or resetting 'verbose' will show
what happens, but you might want to set it just before executing the lines you
are interested in:
```
:set verbose=20

Commands that require updating the screen should be avoided, because their
effect won't be noticed until after leaving debug mode.  For example:
```
:help
won't be very helpful.

There is a separate command-line history for debug mode.

The line number for a function line is relative to the start of the function.
If you have trouble figuring out where you are, edit the file that defines
the function in another Vim, search for the start of the function and do
"99j".  Replace "99" with the line number.

Additionally, these commands can be used:
### <a id=">cont" class="section-title" href="#>cont">Note:</a>
cont		Continue execution until the next breakpoint is hit.
### <a id=">quit" class="section-title" href="#>quit">Note:</a>
quit		Abort execution.  This is like using CTRL-C, some
things might still be executed, doesn't abort
everything.  Still stops at the next breakpoint.
### <a id=">next" class="section-title" href="#>next">Note:</a>
next		Execute the command and come back to debug mode when
it's finished.  This steps over user function calls
and sourced files.
### <a id=">step" class="section-title" href="#>step">Note:</a>
step		Execute the command and come back to debug mode for
the next command.  This steps into called user
functions and sourced files.
### <a id=">interrupt" class="section-title" href="#>interrupt">Note:</a>
interrupt	This is like using CTRL-C, but unlike ">quit" comes
back to debug mode for the next command that is
executed.  Useful for testing [:finally| and |:catch](#:finally| and |:catch)
on interrupt exceptions.
### <a id=">finish" class="section-title" href="#>finish">Note:</a>
finish		Finish the current script or user function and come
back to debug mode for the command after the one that
sourced or called it.
### <a id=">bt" class="section-title" href="#>bt">Note:</a>
### <a id=">backtrace" class="section-title" href="#>backtrace">Note:</a>
### <a id=">where" class="section-title" href="#>where">Note:</a>
backtrace	Show the call stacktrace for current debugging session.
bt
where
### <a id=">frame" class="section-title" href="#>frame">Note:</a>
frame N		Goes to N backtrace level. + and - signs make movement
relative.  E.g., ":frame +3" goes three frames up.
### <a id=">up" class="section-title" href="#>up">Note:</a>
up		Goes one level up from call stacktrace.
### <a id=">down" class="section-title" href="#>down">Note:</a>
down		Goes one level down from call stacktrace.

About the additional commands in debug mode:
- There is no command-line completion for them, you get the completion for the
normal Ex commands only.
- You can shorten them, up to a single character, unless more than one command
starts with the same letter.  "f" stands for "finish", use "fr" for "frame".
- Hitting <CR> will repeat the previous one.  When doing another command, this
is reset (because it's not clear what you want to repeat).
- When you want to use the Ex command with the same name, prepend a colon:
":cont", ":next", ":finish" (or shorter).

The backtrace shows the hierarchy of function calls, e.g.:
>bt ~
3 function One[3] ~
2 Two[3] ~
->1 Three[3] ~
0 Four ~
line 1: let four = 4 ~

The "->" points to the current frame.  Use "up", "down" and "frame N" to
select another frame.

In the current frame you can evaluate the local function variables.  There is
no way to see the command at the current line yet.


DEFINING BREAKPOINTS
### <a id=":breaka :breakadd" class="section-title" href="#:breaka :breakadd">Note:</a>
:breaka[dd] func [lnum] {name}
Set a breakpoint in a function.  Example:
```
:breakadd func Explore

```
		Doesn't check for a valid function name, thus the breakpoint
can be set before the function is defined.

:breaka[dd] file [lnum] {name}
Set a breakpoint in a sourced file.  Example:
```
:breakadd file 43 init.vim

:breaka[dd] here
Set a breakpoint in the current line of the current file.
Like doing:
```
:breakadd file <cursor-line> <current-file>

```
		Note that this only works for commands that are executed when
sourcing the file, not for a function defined in that file.

:breaka[dd] expr {expression}
Sets a breakpoint, that will break whenever the {expression}
evaluates to a different value. Example:
```
:breakadd expr g:lnum

```
		Will break, whenever the global variable lnum changes.

Errors in evaluation are suppressed, you can use the name of a
variable that does not exist yet.  This also means you will
not notice anything if the expression has a mistake.

Note if you watch a [script-variable](#script-variable) this will break
when switching scripts, since the script variable is only
valid in the script where it has been defined and if that
script is called from several other scripts, this will stop
whenever that particular variable will become visible or
inaccessible again.

The [lnum] is the line number of the breakpoint.  Vim will stop at or after
this line.  When omitted line 1 is used.

### <a id=":debug-name" class="section-title" href="#:debug-name">Note:</a>
{name} is a pattern that is matched with the file or function name.  The
pattern is like what is used for autocommands.  There must be a full match (as
### <a id="A "" matches any sequence" class="section-title" href="#A "" matches any sequence">if the pattern starts with "^" and ends in "$").</a>
of characters.  'ignorecase' is not used, but "\c" can be used in the pattern
to ignore case [/\c](#/\c).  Don't include the () for the function name!

The match for sourced scripts is done against the full file name.  If no path
is specified the current directory is used.  Examples:
```
breakadd file explorer.vim
matches "explorer.vim" in the current directory.
```
breakadd file *explorer.vim
matches ".../plugin/explorer.vim", ".../plugin/iexplorer.vim", etc.
```
breakadd file */explorer.vim
matches ".../plugin/explorer.vim" and "explorer.vim" in any other directory.

The match for functions is done against the name as it's shown in the output
of ":function".  For local functions this means that something like "<SNR>99_"
is prepended.

Note that functions are first loaded and later executed.  When they are loaded
the "file" breakpoints are checked, when they are executed the "func"
breakpoints.


DELETING BREAKPOINTS
### <a id=":breakd :breakdel E161" class="section-title" href="#:breakd :breakdel E161">Note:</a>
:breakd[el] {nr}
Delete breakpoint {nr}.  Use [:breaklist](#:breaklist) to see the number of
each breakpoint.

:breakd[el] *
Delete all breakpoints.

:breakd[el] func [lnum] {name}
Delete a breakpoint in a function.

:breakd[el] file [lnum] {name}
Delete a breakpoint in a sourced file.

:breakd[el] here
Delete a breakpoint at the current line of the current file.

When [lnum] is omitted, the first breakpoint in the function or file is
deleted.
The {name} must be exactly the same as what was typed for the ":breakadd"
### <a id=""explorer", "explorer.vim" and "explorer" are different." class="section-title" href="#"explorer", "explorer.vim" and "explorer" are different.">command.</a>


LISTING BREAKPOINTS
### <a id=":breakl :breaklist" class="section-title" href="#:breakl :breaklist">Note:</a>
:breakl[ist]
List all breakpoints.


OBSCURE

### <a id=":debugg :debuggreedy" class="section-title" href="#:debugg :debuggreedy">Note:</a>
:debugg[reedy]
Read debug mode commands from the normal input stream, instead
of getting them directly from the user.  Only useful for test
scripts.  Example:
```
echo 'q^Mq' | vim -e -s -c debuggreedy -c 'breakadd file script.vim' -S script.vim

:0debugg[reedy]
Undo ":debuggreedy": get debug mode commands directly from the
user, don't use typeahead for debug commands.


## <a id="profile profiling" class="section-title" href="#profile profiling">Profiling</a> 

Profiling means that Vim measures the time that is spent on executing
functions and/or scripts.

You can also use the [reltime()](#reltime()) function to measure time.

For profiling syntax highlighting see [:syntime](#:syntime).

For example, to profile the one_script.vim script file:
```
:profile start /tmp/one_script_profile
:profile file one_script.vim
:source one_script.vim
:exit


### <a id=":prof :profile E750" class="section-title" href="#:prof :profile E750">:prof[ile] start {fname}</a>
Start profiling, write the output in {fname} upon exit.
"~/" and environment variables in {fname} will be expanded.
If {fname} already exists it will be silently overwritten.
The variable [v:profiling](#v:profiling) is set to one.

:prof[ile] stop
Write the logfile and stop profiling.

:prof[ile] pause
Don't profile until the following ":profile continue".  Can be
used when doing something that should not be counted (e.g., an
external command).  Does not nest.

:prof[ile] continue
Continue profiling after ":profile pause".

:prof[ile] func {pattern}
Profile function that matches the pattern {pattern}.
See [:debug-name](#:debug-name) for how {pattern} is used.

:prof[ile][!] file {pattern}
Profile script file that matches the pattern {pattern}.
See [:debug-name](#:debug-name) for how {pattern} is used.
This only profiles the script itself, not the functions
defined in it.
When the [!] is added then all functions defined in the script
will also be profiled.
Note that profiling only starts when the script is loaded
after this command.  A :profile command in the script itself
won't work.

:prof[ile] dump
Don't wait until exiting Vim and write the current state of
profiling to the log immediately.

### <a id=":profd :profdel" class="section-title" href="#:profd :profdel">:profd[el] ...</a>
Stop profiling for the arguments specified. See [:breakdel](#:breakdel)
for the arguments.


You must always start with a ":profile start fname" command.  The resulting
file is written when Vim exits.  Here is an example of the output, with line
numbers prepended for the explanation:

1 FUNCTION  Test2() ~
2 Called 1 time ~
3 Total time:   0.155251 ~
4  Self time:   0.002006 ~
5  ~
6 count  total (s)   self (s) ~
7	9	       0.000096   for i in range(8) ~
8	8   0.153655   0.000410     call Test3() ~
9	8	       0.000070   endfor ~
10				  " Ask a question ~
11	1	       0.001341   echo input("give me an answer: ") ~

The header (lines 1-4) gives the time for the whole function.  The "Total"
time is the time passed while the function was executing.  The "Self" time is
the "Total" time reduced by time spent in:
- other user defined functions
- sourced scripts
- executed autocommands
- external (shell) commands

Lines 7-11 show the time spent in each executed line.  Lines that are not
executed do not count.  Thus a comment line is never counted.

The Count column shows how many times a line was executed.  Note that the
"for" command in line 7 is executed one more time as the following lines.
That is because the line is also executed to detect the end of the loop.

The time Vim spends waiting for user input isn't counted at all.  Thus how
long you take to respond to the input() prompt is irrelevant.

Profiling should give a good indication of where time is spent, but keep in
mind there are various things that may clobber the results:

- Real elapsed time is measured, if other processes are busy they may cause
delays at unpredictable moments.  You may want to run the profiling several
times and use the lowest results.

- If you have several commands in one line you only get one time.  Split the
line to see the time for the individual commands.

- The time of the lines added up is mostly less than the time of the whole
function.  There is some overhead in between.

- Functions that are deleted before Vim exits will not produce profiling
information.  You can check the [v:profiling](#v:profiling) variable if needed:
```
:if !v:profiling
:   delfunc MyFunc
:endif

```

- Profiling may give weird results on multi-processor systems, when sleep
mode kicks in or the processor frequency is reduced to save power.

- The "self" time is wrong when a function is used recursively.


## <a id="Context context" class="section-title" href="#Context context">Context</a> 

The editor state is represented by the Context concept. This includes things
like the current [jumplist|, values of |registers](#jumplist|, values of |registers), and more, described below.

### <a id="context-types" class="section-title" href="#context-types">Note:</a>
The following Context items are supported:
"jumps"		[jumplist](#jumplist)
"regs"		[registers](#registers)
"bufs"		[buffer-list](#buffer-list)
"gvars"		[global-variable](#global-variable)s
"sfuncs"	[script-local](#script-local) functions
"funcs"		global and [script-local](#script-local) functions

### <a id="context-dict" class="section-title" href="#context-dict">Note:</a>
Context objects are dictionaries with the following key-value pairs:
- "jumps", "regs", "bufs", "gvars":
[readfile()|-style |List](#readfile()|-style |List) representation of corresponding msgpack
objects (see [msgpackdump()| and |msgpackparse()](#msgpackdump()| and |msgpackparse())).
- "funcs" (includes [script-local](#script-local) functions as well):
[List| of |:function](#List| of |:function) definitions.

### <a id="context-stack" class="section-title" href="#context-stack">Note:</a>
An initially-empty internal Context stack is maintained by the ctx-family
functions (see [ctx-functions](#ctx-functions)).


vim:tw=78:ts=8:noet:ft=help:norl:
