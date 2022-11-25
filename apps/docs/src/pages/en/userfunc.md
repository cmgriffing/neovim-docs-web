---
title:  Userfunc
layout: ../../layouts/MainLayout.astro
---

  <a name="userfunc.txt"></a><a name="define-function"></a><h1> Userfunc</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/userfunc.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Defining and using functions.</div>
<div class="old-help-para">This is introduced in section <a href="/neovim-docs-web/en/usr_41#41.7">41.7</a> of the user manual.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2><div class="help-column_heading">1. Defining a function</div>New functions can be defined.  These can be called just like builtin
functions.  The function executes a sequence of Ex commands.  Normal mode
commands can be executed with the <a href="/neovim-docs-web/en/various#%3Anormal">:normal</a> command.</div>
<div class="old-help-para">The function name must start with an uppercase letter, to avoid confusion with
builtin functions.  To prevent from using the same name in different scripts
make them script-local.  If you do use a global function then avoid obvious,
short names.  A good habit is to start the function name with the name of the
script, e.g., "HTMLcolor()".</div>
<div class="old-help-para">It is also possible to use curly braces, see <a href="/neovim-docs-web/en/eval#curly-braces-names">curly-braces-names</a>.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/userfunc#autoload">autoload</a> facility is useful to define a function only when it's called.</div>
<div class="old-help-para">							<a name="local-function"></a><code class="help-tag-right">local-function</code>
A function local to a script must start with "s:".  A local script function
can only be called from within the script and from functions, user commands
and autocommands defined in the script.  It is also possible to call the
function from a mapping defined in the script, but then <a href="/neovim-docs-web/en/map#%3CSID%3E">&lt;SID&gt;</a> must be used
instead of "s:" when the mapping is expanded outside of the script.
There are only script-local functions, no buffer-local or window-local
functions.</div>
<div class="old-help-para">					<a name="%3Afu"></a><code class="help-tag-right">:fu</code> <a name="%3Afunction"></a><code class="help-tag">:function</code> <a name="E128"></a><code class="help-tag">E128</code> <a name="E129"></a><code class="help-tag">E129</code> <a name="E123"></a><code class="help-tag">E123</code>
:fu[nction]		List all functions and their arguments.</div>
<div class="old-help-para">:fu[nction][!] <code>{name}</code>	List function <code>{name}</code>, annotated with line numbers
			unless "!" is given.
			<code>{name}</code> may be a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> entry:<pre>:function dict.init</pre>
:fu[nction] /{pattern}	List functions with a name matching <code>{pattern}</code>.
			Example that lists all functions ending with "File":<pre>:function /File$</pre></div>
<div class="old-help-para">							<a name="%3Afunction-verbose"></a><code class="help-tag-right">:function-verbose</code>
When <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> is non-zero, listing a function will also display where it was
last defined. Example:<pre>:verbose function SetFileTypeSH
    function SetFileTypeSH(name)
        Last set from /usr/share/vim/vim-7.0/filetype.vim</pre></div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/various#%3Averbose-cmd">:verbose-cmd</a> for more information.</div>
<div class="old-help-para">						<a name="E124"></a><code class="help-tag-right">E124</code> <a name="E125"></a><code class="help-tag">E125</code> <a name="E853"></a><code class="help-tag">E853</code> <a name="E884"></a><code class="help-tag">E884</code>
:fu[nction][!] <code>{name}</code>([arguments]) [range] [abort] [dict] [closure]
			Define a new function by the name <code>{name}</code>.  The body of
			the function follows in the next lines, until the
			matching <a href="/neovim-docs-web/en/userfunc#%3Aendfunction">:endfunction</a>.</div>
<div class="old-help-para">			The name must be made of alphanumeric characters and
			'_', and must start with a capital or "s:" (see
			above).  Note that using "b:" or "g:" is not allowed.
			(since patch 7.4.260 E884 is given if the function
			name has a colon in the name, e.g. for "foo:bar()".
			Before that patch no error was given).</div>
<div class="old-help-para">			<code>{name}</code> can also be a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> entry that is a
			<a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>:<pre>:function dict.init(arg)</pre></div>
<div class="old-help-para">			"dict" must be an existing dictionary.  The entry
			"init" is added if it didn't exist yet.  Otherwise [!]
			is required to overwrite an existing function.  The
			result is a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> to a numbered function.  The
			function can only be used with a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> and will be
			deleted if there are no more references to it.
								<a name="E127"></a><code class="help-tag-right">E127</code> <a name="E122"></a><code class="help-tag">E122</code>
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
			which is hard to debug.</div>
<div class="old-help-para">			For the <code>{arguments}</code> see <a href="/neovim-docs-web/en/userfunc#function-argument">function-argument</a>.</div>
<div class="old-help-para">					<a name="%3Afunc-range"></a><code class="help-tag-right">:func-range</code> <a name="a%3Afirstline"></a><code class="help-tag">a:firstline</code> <a name="a%3Alastline"></a><code class="help-tag">a:lastline</code>
			When the [range] argument is added, the function is
			expected to take care of a range itself.  The range is
			passed as "a:firstline" and "a:lastline".  If [range]
			is excluded, ":{range}call" will call the function for
			each line in the range, with the cursor on the start
			of each line.  See <a href="/neovim-docs-web/en/userfunc#function-range-example">function-range-example</a>.
			The cursor is still moved to the first line of the
			range, as is the case with all Ex commands.
								<a name="%3Afunc-abort"></a><code class="help-tag-right">:func-abort</code>
			When the [abort] argument is added, the function will
			abort as soon as an error is detected.
								<a name="%3Afunc-dict"></a><code class="help-tag-right">:func-dict</code>
			When the [dict] argument is added, the function must
			be invoked through an entry in a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.  The
			local variable "self" will then be set to the
			dictionary.  See <a href="/neovim-docs-web/en/eval#Dictionary-function">Dictionary-function</a>.
						<a name="%3Afunc-closure"></a><code class="help-tag-right">:func-closure</code> <a name="E932"></a><code class="help-tag">E932</code>
			When the [closure] argument is added, the function
			can access variables and arguments from the outer
			scope.  This is usually called a closure.  In this
			example Bar() uses "x" from the scope of Foo().  It
			remains referenced even after Foo() returns:<pre>:function! Foo()
:  let x = 0
:  function! Bar() closure
:    let x += 1
:    return x
:  endfunction
:  return funcref('Bar')
:endfunction

:let F = Foo()
:echo F()</pre></div>
<div class="old-help-para">				1<pre>:echo F()</pre></div>
<div class="old-help-para">				2<pre>:echo F()</pre></div>
<div class="old-help-para">				3</div>
<div class="old-help-para">						<a name="function-search-undo"></a><code class="help-tag-right">function-search-undo</code>
			The last used search pattern and the redo command "."
			will not be changed by the function.  This also
			implies that the effect of <a href="/neovim-docs-web/en/pattern#%3Anohlsearch">:nohlsearch</a> is undone
			when the function returns.</div>
<div class="old-help-para">				<a name="%3Aendf"></a><code class="help-tag-right">:endf</code> <a name="%3Aendfunction"></a><code class="help-tag">:endfunction</code> <a name="E126"></a><code class="help-tag">E126</code> <a name="E193"></a><code class="help-tag">E193</code> <a name="W22"></a><code class="help-tag">W22</code>
:endf[unction] [argument]
			The end of a function definition.  Best is to put it
			on a line by its own, without [argument].</div>
<div class="old-help-para">			[argument] can be:
				| command	command to execute next
				\n command	command to execute next
				" comment	always ignored
				anything else	ignored, warning given when
						<a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> is non-zero
			The support for a following command was added in Vim
			8.0.0654, before that any argument was silently
			ignored.</div>
<div class="old-help-para">			To be able to define a function inside an <code>:execute</code>
			command, use line breaks instead of <a href="/neovim-docs-web/en/cmdline#%3Abar">:bar</a>:<pre>:exe "func Foo()\necho 'foo'\nendfunc"</pre></div>
<div class="old-help-para">				<a name="%3Adelf"></a><code class="help-tag-right">:delf</code> <a name="%3Adelfunction"></a><code class="help-tag">:delfunction</code> <a name="E131"></a><code class="help-tag">E131</code> <a name="E933"></a><code class="help-tag">E933</code>
:delf[unction][!] <code>{name}</code>
			Delete function <code>{name}</code>.
			<code>{name}</code> can also be a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> entry that is a
			<a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>:<pre>:delfunc dict.init</pre></div>
<div class="old-help-para">			This will remove the "init" entry from "dict".  The
			function is deleted if there are no more references to
			it.
			With the ! there is no error if the function does not
			exist.
							<a name="%3Aretu"></a><code class="help-tag-right">:retu</code> <a name="%3Areturn"></a><code class="help-tag">:return</code> <a name="E133"></a><code class="help-tag">E133</code>
:retu[rn] [expr]	Return from a function.  When "[expr]" is given, it is
			evaluated and returned as the result of the function.
			If "[expr]" is not given, the number 0 is returned.
			When a function ends without an explicit ":return",
			the number 0 is returned.
			Note that there is no check for unreachable lines,
			thus there is no warning if commands follow ":return".</div>
<div class="old-help-para">			If the ":return" is used after a <a href="/neovim-docs-web/en/eval#%3Atry">:try</a> but before the
			matching <a href="/neovim-docs-web/en/eval#%3Afinally">:finally</a> (if present), the commands
			following the ":finally" up to the matching <a href="/neovim-docs-web/en/eval#%3Aendtry">:endtry</a>
			are executed first.  This process applies to all
			nested ":try"s inside the function.  The function
			returns at the outermost ":endtry".</div>
<div class="old-help-para">						<a name="function-argument"></a><code class="help-tag-right">function-argument</code> <a name="a%3Avar"></a><code class="help-tag">a:var</code>
An argument can be defined by giving its name.  In the function this can then
be used as "a:name" ("a:" for argument).
					<a name="a%3A0"></a><code class="help-tag-right">a:0</code> <a name="a%3A1"></a><code class="help-tag">a:1</code> <a name="a%3A000"></a><code class="help-tag">a:000</code> <a name="E740"></a><code class="help-tag">E740</code> <a name="..."></a><code class="help-tag">...</code>
Up to 20 arguments can be given, separated by commas.  After the named
arguments an argument "..." can be specified, which means that more arguments
may optionally be following.  In the function the extra arguments can be used
as "a:1", "a:2", etc.  "a:0" is set to the number of extra arguments (which
can be 0).  "a:000" is set to a <a href="/neovim-docs-web/en/eval#List">List</a> that contains these arguments.  Note
that "a:1" is the same as "a:000[0]".
								<a name="E742"></a><code class="help-tag-right">E742</code>
The a: scope and the variables in it cannot be changed, they are fixed.
However, if a composite type is used, such as <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> , you can
change their contents.  Thus you can pass a <a href="/neovim-docs-web/en/eval#List">List</a> to a function and have the
function add an item to it.  If you want to make sure the function cannot
change a <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> use <a href="/neovim-docs-web/en/eval#%3Alockvar">:lockvar</a>.</div>
<div class="old-help-para">It is also possible to define a function without any arguments.  You must
still supply the () then.</div>
<div class="old-help-para">It is allowed to define another function inside a function body.</div>
<div class="old-help-para">						<a name="optional-function-argument"></a><code class="help-tag-right">optional-function-argument</code>
You can provide default values for positional named arguments.  This makes
them optional for function calls.  When a positional argument is not
specified at a call, the default expression is used to initialize it.
This only works for functions declared with <code>:function</code>, not for
lambda expressions <a href="/neovim-docs-web/en/eval#expr-lambda">expr-lambda</a>.</div>
<div class="old-help-para">Example:<pre>function Something(key, value = 10)
   echo a:key .. ": " .. a:value
endfunction
call Something('empty')        "empty: 10"
call Something('key', 20)        "key: 20"</pre>
The argument default expressions are evaluated at the time of the function
call, not definition.  Thus it is possible to use an expression which is
invalid the moment the function is defined.  The expressions are also only
evaluated when arguments are not specified during a call.</div>
<div class="old-help-para">								<a name="E989"></a><code class="help-tag-right">E989</code>
Optional arguments with default expressions must occur after any mandatory
arguments.  You can use "..." after all optional named arguments.</div>
<div class="old-help-para">It is possible for later argument defaults to refer to prior arguments,
but not the other way around.  They must be prefixed with "a:", as with all
arguments.</div>
<div class="old-help-para">Example that works:<pre>:function Okay(mandatory, optional = a:mandatory)
:endfunction</pre>
Example that does NOT work:<pre>:function NoGood(first = a:second, second = 10)
:endfunction</pre></div>
<div class="old-help-para">When not using "...", the number of arguments in a function call must be at
least equal to the number of mandatory named arguments.  When using "...", the
number of arguments may be larger than the total of mandatory and optional
arguments.</div>
<div class="old-help-para">							<a name="local-variables"></a><code class="help-tag-right">local-variables</code>
Inside a function local variables can be used.  These will disappear when the
function returns. Global variables need to be accessed with "g:". Inside
functions local variables are accessed without prepending anything. But you
can also prepend "l:" if you like.  This is required for some reserved names,
such as "version".</div>
<div class="old-help-para">Example:<pre>:function Table(title, ...)
:  echohl Title
:  echo a:title
:  echohl None
:  echo a:0 .. " items:"
:  for s in a:000
:    echon ' ' .. s
:  endfor
:endfunction</pre>
This function can then be called with:<pre>call Table("Table", "line1", "line2")
call Table("Empty Table")</pre>
To return more than one value, return a <a href="/neovim-docs-web/en/eval#List">List</a>:<pre>:function Compute(n1, n2)
:  if a:n2 == 0
:    return ["fail", 0]
:  endif
:  return ["ok", a:n1 / a:n2]
:endfunction</pre>
This function can then be called with:<pre>:let [success, div] = Compute(102, 6)
:if success == "ok"
:  echo div
:endif</pre></div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2><div class="help-column_heading">2. Calling a function</div>						<a name="%3Acal"></a><code class="help-tag-right">:cal</code> <a name="%3Acall"></a><code class="help-tag">:call</code> <a name="E107"></a><code class="help-tag">E107</code> <a name="E117"></a><code class="help-tag">E117</code>
:[range]cal[l] <code>{name}</code>([arguments])
		Call a function.  The name of the function and its arguments
		are as specified with <code>:function</code>.  Up to 20 arguments can be
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
						<a name="function-range-example"></a><code class="help-tag-right">function-range-example</code><pre>:function Mynumber(arg)
:  echo line(".") .. " " .. a:arg
:endfunction
:1,5call Mynumber(getline("."))</pre></div>
<div class="old-help-para">		The "a:firstline" and "a:lastline" are defined anyway, they
		can be used to do something different at the start or end of
		the range.</div>
<div class="old-help-para">		Example of a function that handles the range itself:<pre>:function Cont() range
:  execute (a:firstline + 1) .. "," .. a:lastline .. 's/^/\t\\ '
:endfunction
:4,8call Cont()</pre></div>
<div class="old-help-para">		This function inserts the continuation character "\" in front
		of all the lines in the range, except the first one.</div>
<div class="old-help-para">		When the function returns a composite value it can be further
		dereferenced, but the range will not be used then.  Example:<pre>:4,8call GetDict().method()</pre></div>
<div class="old-help-para">		Here GetDict() gets the range but method() does not.</div>
<div class="old-help-para">								<a name="E132"></a><code class="help-tag-right">E132</code>
The recursiveness of user functions is restricted with the <a href="/neovim-docs-web/en/options#'maxfuncdepth'">'maxfuncdepth'</a>
option.</div>
<div class="old-help-para">It is also possible to use <code>:eval</code>.  It does not support a range, but does
allow for method chaining, e.g.:<pre>eval GetList()-&gt;Filter()-&gt;append('$')</pre>
A function can also be called as part of evaluating an expression or when it
is used as a method:<pre>let x = GetList()
let y = GetList()-&gt;Filter()</pre>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+userfunc.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/userfunc.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09let%20y%20%3D%20GetList()-%3EFilter()%0A%0A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%0A3.%20Automatically%20loading%20functions%20~%0A%09%09%09%09%09%09%09%2Aautoload-functions%2A%0AWhen%20using%20many%20or%20large%20functions%2C%20it's%20possible%20to%20automatically%20define%20them%0D%60%60%60">==============================================================================</a></div>
<div class="old-help-para"><div class="help-column_heading">3. Automatically loading functions</div>							<a name="autoload-functions"></a><code class="help-tag-right">autoload-functions</code>
When using many or large functions, it's possible to automatically define them
only when they are used.  There are two methods: with an autocommand and with
the "autoload" directory in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.</div>
<div class="old-help-para"><div class="help-column_heading">Using an autocommand</div></div>
<div class="old-help-para">This is introduced in the user manual, section <a href="/neovim-docs-web/en/usr_41#41.14">41.14</a>.</div>
<div class="old-help-para">The autocommand is useful if you have a plugin that is a long Vim script file.
You can define the autocommand and quickly quit the script with <code>:finish</code>.
That makes Vim startup faster.  The autocommand should then load the same file
again, setting a variable to skip the <code>:finish</code> command.</div>
<div class="old-help-para">Use the FuncUndefined autocommand event with a pattern that matches the
function(s) to be defined.  Example:<pre>:au FuncUndefined BufNet* source ~/vim/bufnetfuncs.vim</pre>
The file "~/vim/bufnetfuncs.vim" should then define functions that start with
"BufNet".  Also see <a href="/neovim-docs-web/en/autocmd#FuncUndefined">FuncUndefined</a>.</div>
<div class="old-help-para"><div class="help-column_heading">Using an autoload script</div>							<a name="autoload"></a><code class="help-tag-right">autoload</code> <a name="E746"></a><code class="help-tag">E746</code>
This is introduced in the user manual, section <a href="/neovim-docs-web/en/usr_41#41.15">41.15</a>.</div>
<div class="old-help-para">Using a script in the "autoload" directory is simpler, but requires using
exactly the right file name.  A function that can be autoloaded has a name
like this:<pre>:call filename#funcname()</pre>
When such a function is called, and it is not defined yet, Vim will search the
"autoload" directories in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> for a script file called
"filename.vim".  For example "~/.config/nvim/autoload/filename.vim".  That
file should then define the function like this:<pre>function filename#funcname()
   echo "Done!"
endfunction</pre>
If the file doesn't exist, Vim will also search in <a href="/neovim-docs-web/en/options#'packpath'">'packpath'</a> (under "start")
to allow calling packages' functions from your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a> when the packages have
not been added to <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> yet (see <a href="/neovim-docs-web/en/repeat#packages">packages</a>).</div>
<div class="old-help-para">The file name and the name used before the # in the function must match
exactly, and the defined function must have the name exactly as it will be
called.</div>
<div class="old-help-para">It is possible to use subdirectories.  Every # in the function name works like
a path separator.  Thus when calling a function:<pre>:call foo#bar#func()</pre>
Vim will look for the file "autoload/foo/bar.vim" in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.</div>
<div class="old-help-para">This also works when reading a variable that has not been set yet:<pre>:let l = foo#bar#lvar</pre>
However, when the autoload script was already loaded it won't be loaded again
for an unknown variable.</div>
<div class="old-help-para">When assigning a value to such a variable nothing special happens.  This can
be used to pass settings to the autoload script before it's loaded:<pre>:let foo#bar#toggle = 1
:call foo#bar#func()</pre>
Note that when you make a mistake and call a function that is supposed to be
defined in an autoload script, but the script doesn't actually define the
function, you will get an error message for the missing function.  If you fix
the autoload script it won't be automatically loaded again.  Either restart
Vim or manually source the script.</div>
<div class="old-help-para">Also note that if you have two script files, and one calls a function in the
other and vice versa, before the used function is defined, it won't work.
Avoid using the autoload functionality at the toplevel.</div>
<div class="old-help-para">Hint: If you distribute a bunch of scripts read <a href="/neovim-docs-web/en/usr_41#distribute-script">distribute-script</a>.</div>

  
  