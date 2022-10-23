---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="" class="section-title" href="#">*Userfunc.Txt*	Nvim</a> 

VIM REFERENCE MANUAL	  by Bram Moolenaar


Defining and using functions.

This is introduced in section [41.7](#41.7) of the user manual.

Type [gO](#gO) to see the table of contents.


## <a id="" class="section-title" href="#">1. Defining a Function ~</a> <span id="define-function"></span>

New functions can be defined.  These can be called just like builtin
functions.  The function executes a sequence of Ex commands.  Normal mode
commands can be executed with the [:normal](#:normal) command.

The function name must start with an uppercase letter, to avoid confusion with
builtin functions.  To prevent from using the same name in different scripts
make them script-local.  If you do use a global function then avoid obvious,
short names.  A good habit is to start the function name with the name of the
script, e.g., "HTMLcolor()".

It is also possible to use curly braces, see [curly-braces-names](#curly-braces-names).

The [autoload](#autoload) facility is useful to define a function only when it's called.

### <a id="local-function" class="section-title" href="#local-function">Note:</a>
A function local to a script must start with "s:".  A local script function
can only be called from within the script and from functions, user commands
and autocommands defined in the script.  It is also possible to call the
function from a mapping defined in the script, but then [<SID>](#<SID>) must be used
instead of "s:" when the mapping is expanded outside of the script.
There are only script-local functions, no buffer-local or window-local
functions.

### <a id=":fu :function E128 E129 E123" class="section-title" href="#:fu :function E128 E129 E123">Note:</a>
:fu[nction]		List all functions and their arguments.

:fu[nction][!] {name}	List function {name}, annotated with line numbers
unless "!" is given.
{name} may be a [Dictionary| |Funcref](#Dictionary| |Funcref) entry:
```
:function dict.init

:fu[nction] /{pattern}	List functions with a name matching {pattern}.
Example that lists all functions ending with "File":
```
:function /File$

```

### <a id=":function-verbose" class="section-title" href="#:function-verbose">Note:</a>
When 'verbose' is non-zero, listing a function will also display where it was
last defined. Example:
```

:verbose function SetFileTypeSH
function SetFileTypeSH(name)
Last set from /usr/share/vim/vim-7.0/filetype.vim

```

See [:verbose-cmd](#:verbose-cmd) for more information.

### <a id="E124 E125 E853 E884" class="section-title" href="#E124 E125 E853 E884">Note:</a>
:fu[nction][!] {name}([arguments]) [range] [abort] [dict] [closure]
Define a new function by the name {name}.  The body of
the function follows in the next lines, until the
matching [:endfunction](#:endfunction).

The name must be made of alphanumeric characters and
'_', and must start with a capital or "s:" (see
above).  Note that using "b:" or "g:" is not allowed.
(since patch 7.4.260 E884 is given if the function
name has a colon in the name, e.g. for "foo:bar()".
Before that patch no error was given).

{name} can also be a [Dictionary](#Dictionary) entry that is a
[Funcref](#Funcref):
```
:function dict.init(arg)

```
			"dict" must be an existing dictionary.  The entry
"init" is added if it didn't exist yet.  Otherwise [!]
is required to overwrite an existing function.  The
result is a [Funcref](#Funcref) to a numbered function.  The
function can only be used with a [Funcref](#Funcref) and will be
deleted if there are no more references to it.
### <a id="E127 E122" class="section-title" href="#E127 E122">Note:</a>
When a function by this name already exists and [!] is
not used an error message is given.  There is one
exception: When sourcing a script again, a function
that was previously defined in that script will be
silently replaced.
When [!] is used, an existing function is silently
replaced.  Unless it is currently being executed, that
is an error.
NOTE: Use ! wisely.  If used without care it can cause
an existing function to be replaced unexpectedly,
which is hard to debug.

For the {arguments} see [function-argument](#function-argument).

### <a id=":func-range a:firstline a:lastline" class="section-title" href="#:func-range a:firstline a:lastline">Note:</a>
When the [range] argument is added, the function is
expected to take care of a range itself.  The range is
passed as "a:firstline" and "a:lastline".  If [range]
is excluded, ":{range}call" will call the function for
each line in the range, with the cursor on the start
of each line.  See [function-range-example](#function-range-example).
The cursor is still moved to the first line of the
range, as is the case with all Ex commands.
### <a id=":func-abort" class="section-title" href="#:func-abort">Note:</a>
When the [abort] argument is added, the function will
abort as soon as an error is detected.
### <a id=":func-dict" class="section-title" href="#:func-dict">Note:</a>
When the [dict] argument is added, the function must
be invoked through an entry in a [Dictionary](#Dictionary).  The
local variable "self" will then be set to the
dictionary.  See [Dictionary-function](#Dictionary-function).
### <a id=":func-closure E932" class="section-title" href="#:func-closure E932">Note:</a>
When the [closure] argument is added, the function
can access variables and arguments from the outer
scope.  This is usually called a closure.  In this
example Bar() uses "x" from the scope of Foo().  It
remains referenced even after Foo() returns:
```
:function! Foo()
:  let x = 0
:  function! Bar() closure
:    let x += 1
:    return x
:  endfunction
:  return funcref('Bar')
:endfunction

:let F = Foo()
:echo F()

```
				1
```
:echo F()

```
				2
```
:echo F()

```
				3

### <a id="function-search-undo" class="section-title" href="#function-search-undo">Note:</a>
The last used search pattern and the redo command "."
will not be changed by the function.  This also
implies that the effect of [:nohlsearch](#:nohlsearch) is undone
when the function returns.

### <a id=":endf :endfunction E126 E193 W22" class="section-title" href="#:endf :endfunction E126 E193 W22">Note:</a>
:endf[unction] [argument]
The end of a function definition.  Best is to put it
on a line by its own, without [argument].

[argument] can be:
| command	command to execute next
\n command	command to execute next
" comment	always ignored
anything else	ignored, warning given when
'verbose' is non-zero
The support for a following command was added in Vim
8.0.0654, before that any argument was silently
ignored.

To be able to define a function inside an `:execute`
command, use line breaks instead of [:bar](#:bar):
```
:exe "func Foo()\necho 'foo'\nendfunc"

```

### <a id=":delf :delfunction E131 E933" class="section-title" href="#:delf :delfunction E131 E933">Note:</a>
:delf[unction][!] {name}
Delete function {name}.
{name} can also be a [Dictionary](#Dictionary) entry that is a
[Funcref](#Funcref):
```
:delfunc dict.init

```
			This will remove the "init" entry from "dict".  The
function is deleted if there are no more references to
it.
With the ! there is no error if the function does not
exist.
### <a id=":retu :return E133" class="section-title" href="#:retu :return E133">Note:</a>
:retu[rn] [expr]	Return from a function.  When "[expr]" is given, it is
evaluated and returned as the result of the function.
If "[expr]" is not given, the number 0 is returned.
When a function ends without an explicit ":return",
the number 0 is returned.
Note that there is no check for unreachable lines,
thus there is no warning if commands follow ":return".

If the ":return" is used after a [:try](#:try) but before the
matching [:finally](#:finally) (if present), the commands
following the ":finally" up to the matching [:endtry](#:endtry)
are executed first.  This process applies to all
nested ":try"s inside the function.  The function
returns at the outermost ":endtry".

### <a id="function-argument a:var" class="section-title" href="#function-argument a:var">Note:</a>
An argument can be defined by giving its name.  In the function this can then
be used as "a:name" ("a:" for argument).
### <a id="a:0 a:1 a:000 E740 ..." class="section-title" href="#a:0 a:1 a:000 E740 ...">Note:</a>
Up to 20 arguments can be given, separated by commas.  After the named
arguments an argument "..." can be specified, which means that more arguments
may optionally be following.  In the function the extra arguments can be used
as "a:1", "a:2", etc.  "a:0" is set to the number of extra arguments (which
can be 0).  "a:000" is set to a [List](#List) that contains these arguments.  Note
that "a:1" is the same as "a:000[0]".
### <a id="E742" class="section-title" href="#E742">Note:</a>
The a: scope and the variables in it cannot be changed, they are fixed.
However, if a composite type is used, such as [List| or |Dictionary](#List| or |Dictionary) , you can
change their contents.  Thus you can pass a [List](#List) to a function and have the
function add an item to it.  If you want to make sure the function cannot
change a [List| or |Dictionary| use |:lockvar](#List| or |Dictionary| use |:lockvar).

It is also possible to define a function without any arguments.  You must
still supply the () then.

It is allowed to define another function inside a function body.

### <a id="optional-function-argument" class="section-title" href="#optional-function-argument">Note:</a>
You can provide default values for positional named arguments.  This makes
them optional for function calls.  When a positional argument is not
specified at a call, the default expression is used to initialize it.
This only works for functions declared with `:function`, not for
lambda expressions [expr-lambda](#expr-lambda).

Example:
```
function Something(key, value = 10)
echo a:key .. ": " .. a:value
endfunction
call Something('empty')	"empty: 10"
call Something('key', 20)	"key: 20"

The argument default expressions are evaluated at the time of the function
call, not definition.  Thus it is possible to use an expression which is
invalid the moment the function is defined.  The expressions are also only
evaluated when arguments are not specified during a call.

### <a id="E989" class="section-title" href="#E989">Note:</a>
Optional arguments with default expressions must occur after any mandatory
arguments.  You can use "..." after all optional named arguments.

It is possible for later argument defaults to refer to prior arguments,
but not the other way around.  They must be prefixed with "a:", as with all
arguments.

Example that works:
```
:function Okay(mandatory, optional = a:mandatory)
:endfunction
Example that does NOT work:
```
:function NoGood(first = a:second, second = 10)
:endfunction

```

When not using "...", the number of arguments in a function call must be at
least equal to the number of mandatory named arguments.  When using "...", the
number of arguments may be larger than the total of mandatory and optional
arguments.

### <a id="local-variables" class="section-title" href="#local-variables">Note:</a>
Inside a function local variables can be used.  These will disappear when the
function returns. Global variables need to be accessed with "g:". Inside
functions local variables are accessed without prepending anything. But you
can also prepend "l:" if you like.  This is required for some reserved names,
such as "version".

Example:
```
:function Table(title, ...)
:  echohl Title
:  echo a:title
:  echohl None
:  echo a:0 .. " items:"
:  for s in a:000
:    echon ' ' .. s
:  endfor
:endfunction

This function can then be called with:
```
call Table("Table", "line1", "line2")
call Table("Empty Table")

To return more than one value, return a [List](#List):
```
:function Compute(n1, n2)
:  if a:n2 == 0
:    return ["fail", 0]
:  endif
:  return ["ok", a:n1 / a:n2]
:endfunction

This function can then be called with:
```
:let [success, div] = Compute(102, 6)
:if success == "ok"
:  echo div
:endif

```



## <a id="" class="section-title" href="#">2. Calling a Function ~</a> <span id=":cal"></span>

:[range]cal[l] {name}([arguments])
Call a function.  The name of the function and its arguments
are as specified with `:function`.  Up to 20 arguments can be
used.  The returned value is discarded.
Without a range and for functions that accept a range, the
function is called once.  When a range is given the cursor is
positioned at the start of the first line before executing the
function.
When a range is given and the function doesn't handle it
itself, the function is executed for each line in the range,
with the cursor in the first column of that line.  The cursor
is left at the last line (possibly moved by the last function
call).  The arguments are re-evaluated for each line.  Thus
this works:
### <a id="function-range-example" class="section-title" href="#function-range-example">Note:</a>
:function Mynumber(arg)
:  echo line(".") .. " " .. a:arg
:endfunction
:1,5call Mynumber(getline("."))

```

The "a:firstline" and "a:lastline" are defined anyway, they
can be used to do something different at the start or end of
the range.

Example of a function that handles the range itself:
```

:function Cont() range
:  execute (a:firstline + 1) .. "," .. a:lastline .. 's/^/\t\\ '
:endfunction
:4,8call Cont()

```

This function inserts the continuation character "\" in front
of all the lines in the range, except the first one.

When the function returns a composite value it can be further
dereferenced, but the range will not be used then.  Example:
```
:4,8call GetDict().method()

```
		Here GetDict() gets the range but method() does not.

### <a id="E132" class="section-title" href="#E132">Note:</a>
The recursiveness of user functions is restricted with the ['maxfuncdepth'](#'maxfuncdepth')
option.

It is also possible to use `:eval`.  It does not support a range, but does
allow for method chaining, e.g.:
```
eval GetList()->Filter()->append('$')

A function can also be called as part of evaluating an expression or when it
is used as a method:
```
let x = GetList()
let y = GetList()->Filter()


## <a id="" class="section-title" href="#">3. Automatically Loading Functions ~</a> <span id="autoload-functions"></span>

When using many or large functions, it's possible to automatically define them
only when they are used.  There are two methods: with an autocommand and with
the "autoload" directory in 'runtimepath'.


Using an autocommand ~

This is introduced in the user manual, section [41.14](#41.14).

The autocommand is useful if you have a plugin that is a long Vim script file.
You can define the autocommand and quickly quit the script with `:finish`.
That makes Vim startup faster.  The autocommand should then load the same file
again, setting a variable to skip the `:finish` command.

Use the FuncUndefined autocommand event with a pattern that matches the
function(s) to be defined.  Example:
```

:au FuncUndefined BufNet* source ~/vim/bufnetfuncs.vim

The file "~/vim/bufnetfuncs.vim" should then define functions that start with
"BufNet".  Also see [FuncUndefined](#FuncUndefined).


Using an autoload script ~
### <a id="autoload E746" class="section-title" href="#autoload E746">Note:</a>
This is introduced in the user manual, section [41.15](#41.15).

Using a script in the "autoload" directory is simpler, but requires using
exactly the right file name.  A function that can be autoloaded has a name
like this:
```

:call filename#funcname()

When such a function is called, and it is not defined yet, Vim will search the
"autoload" directories in 'runtimepath' for a script file called
"filename.vim".  For example "~/.config/nvim/autoload/filename.vim".  That
file should then define the function like this:
```

function filename#funcname()
echo "Done!"
endfunction

If the file doesn't exist, Vim will also search in 'packpath' (under "start")
to allow calling packages' functions from your [vimrc](#vimrc) when the packages have
not been added to 'runtimepath' yet (see [packages](#packages)).

The file name and the name used before the # in the function must match
exactly, and the defined function must have the name exactly as it will be
called.

It is possible to use subdirectories.  Every # in the function name works like
a path separator.  Thus when calling a function:
```

:call foo#bar#func()

Vim will look for the file "autoload/foo/bar.vim" in 'runtimepath'.

This also works when reading a variable that has not been set yet:
```

:let l = foo#bar#lvar

However, when the autoload script was already loaded it won't be loaded again
for an unknown variable.

When assigning a value to such a variable nothing special happens.  This can
be used to pass settings to the autoload script before it's loaded:
```

:let foo#bar#toggle = 1
:call foo#bar#func()

Note that when you make a mistake and call a function that is supposed to be
defined in an autoload script, but the script doesn't actually define the
function, you will get an error message for the missing function.  If you fix
the autoload script it won't be automatically loaded again.  Either restart
Vim or manually source the script.

Also note that if you have two script files, and one calls a function in the
other and vice versa, before the used function is defined, it won't work.
Avoid using the autoload functionality at the toplevel.

Hint: If you distribute a bunch of scripts read [distribute-script](#distribute-script).


vim:tw=78:ts=8:noet:ft=help:norl:
