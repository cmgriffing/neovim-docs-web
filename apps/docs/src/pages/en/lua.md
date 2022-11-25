---
title:  Lua
layout: ../../layouts/MainLayout.astro
---

  <a name="lua.txt"></a><a name="lua"></a><h1> Lua</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/lua.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="help-para">
Lua engine <a name="Lua"></a><code class="help-tag">Lua</code>

</div>
<div class="help-para">
<h2 class="help-heading">INTRODUCTION<span class="help-heading-tags">                                                       <a name="lua-intro"></a><span class="help-tag">lua-intro</span></span></h2>


</div>
<div class="help-para">
The Lua 5.1 script engine is builtin and always available. Try this command to
get an idea of what lurks beneath:<pre>:lua print(vim.inspect(package.loaded))</pre>
Nvim includes a "standard library" <a href="lua.html#lua-stdlib">lua-stdlib</a> for Lua.  It complements the
"editor stdlib" (<a href="builtin.html#builtin-functions">builtin-functions</a> andEx-commands) and the <a href="api.html#API">API</a>, all of
which can be used from Lua code (<a href="lua.html#lua-vimscript">lua-vimscript</a> <a href="lua.html#vim.api">vim.api</a>). Together these
"namespaces" form the Nvim programming interface.

</div>
<div class="help-para">
The <a href="repeat.html#%3Asource">:source</a> and <a href="repeat.html#%3Aruntime">:runtime</a> commands can run Lua scripts. Lua modules can be
loaded with <code>require('name')</code>, which by convention usually returns a table.
See <a href="lua.html#lua-require">lua-require</a> for how Nvim finds and loads Lua modules.

</div>
<div class="help-para">
See this page for more insight into Nvim Lua:
    <a href="https://github.com/nanotee/nvim-lua-guide">https://github.com/nanotee/nvim-lua-guide</a>

</div>
<div class="help-para">
                                                                  <a name="lua-compat"></a><code class="help-tag-right">lua-compat</code>
Lua 5.1 is the permanent interface for Nvim Lua.  Plugins need only consider
Lua 5.1, not worry about forward-compatibility with future Lua versions.  If
Nvim ever ships with Lua 5.4+, a Lua 5.1 compatibility shim will be provided
so that old plugins continue to work transparently.

</div>
<div class="help-para">
<h3 class="help-heading">LUA CONCEPTS AND IDIOMS<span class="help-heading-tags">                                         <a name="lua-concepts"></a><span class="help-tag">lua-concepts</span></span></h3>


</div>
<div class="help-para">
Lua is very simple: this means that, while there are some quirks, once you
internalize those quirks, everything works the same everywhere. Scopes
(closures) in particular are very consistent, unlike JavaScript or most other
languages.

</div>
<div class="help-para">
Lua has three fundamental mechanisms—one for "each major aspect of
programming": tables, closures, and coroutines.
<a href="https://www.lua.org/doc/cacm2018.pdf">https://www.lua.org/doc/cacm2018.pdf</a>
<div class="help-li" style=""> Tables are the "object" or container datastructure: they represent both
  lists and maps, you can extend them to represent your own datatypes and
  change their behavior using <a href="luaref.html#luaref-metatable">luaref-metatable</a> (like Python's "datamodel").
</div><div class="help-li" style=""> EVERY scope in Lua is a closure: a function is a closure, a module is
  a closure, a <code>do</code> block (<a href="luaref.html#luaref-do">luaref-do</a>) is a closure--and they all work the
  same. A Lua module is literally just a big closure discovered on the "path"
  (where your modules are found: <a href="luaref.html#package.cpath">package.cpath</a>).
</div><div class="help-li" style=""> Stackful coroutines enable cooperative multithreading, generators, and
  versatile control for both Lua and its host (Nvim).
</div>
</div>
<div class="help-para">
                                                           <a name="lua-call-function"></a><code class="help-tag-right">lua-call-function</code>
Lua functions can be called in multiple ways. Consider the function:<pre>local foo = function(a, b)
    print("A: ", a)
    print("B: ", b)
end</pre>
The first way to call this function is:<pre>foo(1, 2)
-- ==== Result ====
-- A: 1
-- B: 2</pre>
This way of calling a function is familiar from most scripting languages.
In Lua, any missing arguments are passed as <code>nil</code>. Example:<pre>foo(1)
-- ==== Result ====
-- A: 1
-- B: nil</pre>
Furthermore it is not an error if extra parameters are passed, they are just
discarded.

</div>
<div class="help-para">
It is also allowed to omit the parentheses (only) if the function takes
exactly one string (<code>"foo"</code>) or table literal (<code>{1,2,3}</code>). The latter is often
used to approximate the "named parameters" feature of languages like Python
("kwargs" or "keyword args"). Example:<pre>local func_with_opts = function(opts)
    local will_do_foo = opts.foo
    local filename = opts.filename

    ...
end

func_with_opts { foo = true, filename = "hello.world" }</pre>

</div>
<div class="help-para">
There is nothing special going on here except that parentheses are treated as
whitespace. But visually, this small bit of sugar gets reasonably close to
a "keyword args" interface.

</div>
<div class="help-para">
It is of course also valid to call the function with parentheses:<pre>func_with_opts({ foo = true, filename = "hello.world" })</pre>

</div>
<div class="help-para">
Nvim tends to prefer the keyword args style.

</div>
<div class="help-para">
<h3 class="help-heading">LUA PATTERNS<span class="help-heading-tags">                                                    <a name="lua-patterns"></a><span class="help-tag">lua-patterns</span></span></h3>


</div>
<div class="help-para">
Lua intentionally does not support regular expressions, instead it has limited
"patterns" which avoid the performance pitfalls of extended regex.
<a href="luaref.html#luaref-patterns">luaref-patterns</a>

</div>
<div class="help-para">
Examples using <a href="luaref.html#string.match()">string.match()</a>:<pre>print(string.match("foo123bar123", "%d+"))
-- 123

print(string.match("foo123bar123", "[^%d]+"))
-- foo

print(string.match("foo123bar123", "[abc]+"))
-- ba

print(string.match("foo.bar", "%.bar"))
-- .bar</pre>
For more complex matching you can use Vim regex from Lua via <a href="lua.html#vim.regex()">vim.regex()</a>.

</div>
<div class="help-para">
<h2 class="help-heading">IMPORTING LUA MODULES<span class="help-heading-tags">                                            <a name="lua-require"></a><span class="help-tag">lua-require</span></span></h2>


</div>
<div class="help-para">
Modules are searched for under the directories specified in <a href="options.html#'runtimepath'">'runtimepath'</a>, in
the order they appear.  Any "." in the module name is treated as a directory
separator when searching.  For a module <code>foo.bar</code>, each directory is searched
for <code>lua/foo/bar.lua</code>, then <code>lua/foo/bar/init.lua</code>.  If no files are found,
the directories are searched again for a shared library with a name matching
<code>lua/foo/bar.?</code>, where <code>?</code> is a list of suffixes (such as <code>so</code> or <code>dll</code>) derived from
the initial value of <a href="luaref.html#package.cpath">package.cpath</a>. If still no files are found, Nvim falls
back to Lua's default search mechanism. The first script found is run and
<code>require()</code> returns the value returned by the script if any, else <code>true</code>.

</div>
<div class="help-para">
The return value is cached after the first call to <code>require()</code> for each module,
with subsequent calls returning the cached value without searching for, or
executing any script. For further details on <code>require()</code>, see the Lua
documentation at <a href="https://www.lua.org/manual/5.1/manual.html#pdf-require">https://www.lua.org/manual/5.1/manual.html#pdf-require</a>.

</div>
<div class="help-para">
For example, if <a href="options.html#'runtimepath'">'runtimepath'</a> is <code>foo,bar</code> and <a href="luaref.html#package.cpath">package.cpath</a> was
<code>./?.so;./?.dll</code> at startup, <code>require('mod')</code> searches these paths in order
and loads the first module found ("first wins"):<pre>foo/lua/mod.lua
foo/lua/mod/init.lua
bar/lua/mod.lua
bar/lua/mod/init.lua
foo/lua/mod.so
foo/lua/mod.dll
bar/lua/mod.so
bar/lua/mod.dll</pre>

</div>
<div class="help-para">
                                                        <a name="lua-package-path"></a><code class="help-tag-right">lua-package-path</code>
Nvim automatically adjusts <a href="luaref.html#package.path">package.path</a> and <a href="luaref.html#package.cpath">package.cpath</a> according to the
effective <a href="options.html#'runtimepath'">'runtimepath'</a> value. Adjustment happens whenever <a href="options.html#'runtimepath'">'runtimepath'</a> is
changed. <code>package.path</code> is adjusted by simply appending <code>/lua/?.lua</code> and
<code>/lua/?/init.lua</code> to each directory from <a href="options.html#'runtimepath'">'runtimepath'</a> (<code>/</code> is actually the
first character of <code>package.config</code>).

</div>
<div class="help-para">
Similarly to <a href="luaref.html#package.path">package.path</a>, modified directories from <a href="options.html#'runtimepath'">'runtimepath'</a> are also
added to <a href="luaref.html#package.cpath">package.cpath</a>. In this case, instead of appending <code>/lua/?.lua</code> and
<code>/lua/?/init.lua</code> to each runtimepath, all unique <code>?</code>-containing suffixes of
the existing <a href="luaref.html#package.cpath">package.cpath</a> are used. Example:

</div>
<div class="help-para">
<div class="help-li" style=""> 1. Given that
</div><div class="help-li" style="margin-left: 3rem;"> <a href="options.html#'runtimepath'">'runtimepath'</a> contains <code>/foo/bar,/xxx;yyy/baz,/abc</code>;
</div><div class="help-li" style="margin-left: 3rem;"> initial <a href="luaref.html#package.cpath">package.cpath</a> (defined at compile-time or derived from
     <code>$LUA_CPATH</code> / <code>$LUA_INIT</code>) contains <code>./?.so;/def/ghi/a?d/j/g.elf;/def/?.so</code>.
</div><div class="help-li" style=""> 2. It finds <code>?</code>-containing suffixes <code>/?.so</code>, <code>/a?d/j/g.elf</code> and <code>/?.so</code>, in
     order: parts of the path starting from the first path component containing
     question mark and preceding path separator.
</div><div class="help-li" style=""> 3. The suffix of <code>/def/?.so</code>, namely <code>/?.so</code> is not unique, as it’s the same
     as the suffix of the first path from <a href="luaref.html#package.path">package.path</a> (i.e. <code>./?.so</code>). Which
     leaves <code>/?.so</code> and <code>/a?d/j/g.elf</code>, in this order.
</div><div class="help-li" style=""> 4. <a href="options.html#'runtimepath'">'runtimepath'</a> has three paths: <code>/foo/bar</code>, <code>/xxx;yyy/baz</code> and <code>/abc</code>. The
     second one contains a semicolon which is a paths separator so it is out,
     leaving only <code>/foo/bar</code> and <code>/abc</code>, in order.
</div><div class="help-li" style=""> 5. The cartesian product of paths from 4. and suffixes from 3. is taken,
     giving four variants. In each variant a <code>/lua</code> path segment is inserted
     between path and suffix, leaving:
</div><div class="help-li" style="margin-left: 3rem;"> <code>/foo/bar/lua/?.so</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>/foo/bar/lua/a?d/j/g.elf</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>/abc/lua/?.so</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>/abc/lua/a?d/j/g.elf</code>
</div><div class="help-li" style=""> 6. New paths are prepended to the original <a href="luaref.html#package.cpath">package.cpath</a>.
</div>
</div>
<div class="help-para">
The result will look like this:<pre>/foo/bar,/xxx;yyy/baz,/abc ('runtimepath')
× ./?.so;/def/ghi/a?d/j/g.elf;/def/?.so (package.cpath)
= /foo/bar/lua/?.so;/foo/bar/lua/a?d/j/g.elf;/abc/lua/?.so;/abc/lua/a?d/j/g.elf;./?.so;/def/ghi/a?d/j/g.elf;/def/?.so</pre>
Note:

</div>
<div class="help-para">
<div class="help-li" style=""> To track <a href="options.html#'runtimepath'">'runtimepath'</a> updates, paths added at previous update are
  remembered and removed at the next update, while all paths derived from the
  new <a href="options.html#'runtimepath'">'runtimepath'</a> are prepended as described above. This allows removing
  paths when path is removed from <a href="options.html#'runtimepath'">'runtimepath'</a>, adding paths when they are
  added and reordering <a href="luaref.html#package.path">package.path</a>/|package.cpath| content if <a href="options.html#'runtimepath'">'runtimepath'</a>
  was reordered.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> Although adjustments happen automatically, Nvim does not track current
  values of <a href="luaref.html#package.path">package.path</a> or <a href="luaref.html#package.cpath">package.cpath</a>. If you happen to delete some
  paths from there you can set <a href="options.html#'runtimepath'">'runtimepath'</a> to trigger an update:<pre>let &amp;runtimepath = &amp;runtimepath</pre>
</div><div class="help-li" style=""> Skipping paths from <a href="options.html#'runtimepath'">'runtimepath'</a> which contain semicolons applies both to
  <a href="luaref.html#package.path">package.path</a> and <a href="luaref.html#package.cpath">package.cpath</a>. Given that there are some badly written
  plugins using shell, which will not work with paths containing semicolons,
  it is better to not have them in <a href="options.html#'runtimepath'">'runtimepath'</a> at all.
</div>
</div>
<div class="help-para">
<h2 class="help-heading">COMMANDS<span class="help-heading-tags">                                                        <a name="lua-commands"></a><span class="help-tag">lua-commands</span></span></h2>


</div>
<div class="help-para">
These commands execute a Lua chunk from either the command line (:lua, :luado)
or a file (:luafile) on the given line [range]. As always in Lua, each chunk
has its own scope (closure), so only global variables are shared between
command calls. The <a href="lua.html#lua-stdlib">lua-stdlib</a> modules, user modules, and anything else on
<a href="luaref.html#package.path">package.path</a> are available.

</div>
<div class="help-para">
The Lua print() function redirects its output to the Nvim message area, with
arguments separated by " " (space) instead of "\t" (tab).

</div>
<div class="help-para">
                                                                        <a name="%3Alua"></a><code class="help-tag-right">:lua</code>
:lua <code>{chunk}</code>
    Executes Lua chunk <code>{chunk}</code>. If <code>{chunk}</code> starts with "=" the rest of the
    chunk is evaluated as an expression and printed. <code>:lua =expr</code> is
    equivalent to <code>:lua print(vim.inspect(expr))</code>

</div>
<div class="help-para">
    Examples:<pre>:lua vim.api.nvim_command('echo "Hello, Nvim!"')</pre>

</div>
<div class="help-para">
    To see the Lua version:<pre>:lua print(_VERSION)</pre>

</div>
<div class="help-para">
    To see the LuaJIT version:<pre>:lua =jit.version</pre>

</div>
<div class="help-para">
                                                                <a name="%3Alua-heredoc"></a><code class="help-tag-right">:lua-heredoc</code>
:lua &lt;&lt; [endmarker]
<code>{script}</code>
<code>{endmarker}</code>
    Executes Lua script <code>{script}</code> from within Vimscript. <code>{endmarker}</code> must NOT
    be preceded by whitespace. You can omit [endmarker] after the "&lt;&lt;" and use
    a dot "." after <code>{script}</code> (similar to <a href="insert.html#%3Aappend">:append</a>, <a href="insert.html#%3Ainsert">:insert</a>).

</div>
<div class="help-para">
    Example:<pre>function! CurrentLineInfo()
lua &lt;&lt; EOF
local linenr = vim.api.nvim_win_get_cursor(0)[1]
local curline = vim.api.nvim_buf_get_lines(
        0, linenr - 1, linenr, false)[1]
print(string.format("Current line [%d] has %d bytes",
        linenr, #curline))
EOF
endfunction</pre>

</div>
<div class="help-para">
    Note that the <code>local</code> variables will disappear when the block finishes.
    But not globals.

</div>
<div class="help-para">
                                                                      <a name="%3Aluado"></a><code class="help-tag-right">:luado</code>
:[range]luado <code>{body}</code>
    Executes Lua chunk "function(line, linenr) <code>{body}</code> end" for each buffer
    line in [range], where <code>line</code> is the current line text (without <code>&lt;EOL&gt;</code>),
    and <code>linenr</code> is the current line number. If the function returns a string
    that becomes the text of the corresponding buffer line. Default [range] is
    the whole file: "1,$".

</div>
<div class="help-para">
    Examples:<pre>:luado return string.format("%s\t%d", line:reverse(), #line)

:lua require"lpeg"
:lua -- balanced parenthesis grammar:
:lua bp = lpeg.P{ "(" * ((1 - lpeg.S"()") + lpeg.V(1))^0 * ")" }
:luado if bp:match(line) then return "=&gt;\t" .. line end</pre>

</div>
<div class="help-para">
                                                                    <a name="%3Aluafile"></a><code class="help-tag-right">:luafile</code>
:luafile <code>{file}</code>
    Execute Lua script in <code>{file}</code>.
    The whole argument is used as the filename (like <a href="editing.html#%3Aedit">:edit</a>), spaces do not
    need to be escaped. Alternatively you can <a href="repeat.html#%3Asource">:source</a> Lua files.

</div>
<div class="help-para">
    Examples:<pre>:luafile script.lua
:luafile %</pre>

</div>
<div class="help-para">
<h2 class="help-heading">luaeval()<span class="help-heading-tags">                                                 <a name="lua-eval"></a><span class="help-tag">lua-eval</span> <a name="luaeval()"></a><span class="help-tag">luaeval()</span></span></h2>


</div>
<div class="help-para">
The (dual) equivalent of "vim.eval" for passing Lua values to Nvim is
"luaeval". "luaeval" takes an expression string and an optional argument used
for _A inside expression and returns the result of the expression. It is
semantically equivalent in Lua to:<pre>local chunkheader = "local _A = select(1, ...) return "
function luaeval (expstr, arg)
    local chunk = assert(loadstring(chunkheader .. expstr, "luaeval"))
    return chunk(arg) -- return typval
end</pre>

</div>
<div class="help-para">
Lua nils, numbers, strings, tables and booleans are converted to their
respective Vimscript types. If a Lua string contains a NUL byte, it will be
converted to a <a href="eval.html#Blob">Blob</a>. Conversion of other Lua types is an error.

</div>
<div class="help-para">
The magic global "_A" contains the second argument to luaeval().

</div>
<div class="help-para">
Example:<pre>:echo luaeval('_A[1] + _A[2]', [40, 2])
42
:echo luaeval('string.match(_A, "[a-z]+")', 'XYXfoo123')
foo</pre>

</div>
<div class="help-para">
Lua tables are used as both dictionaries and lists, so it is impossible to
determine whether empty table is meant to be empty list or empty dictionary.
Additionally Lua does not have integer numbers. To distinguish between these
cases there is the following agreement:

</div>
<div class="help-para">
0. Empty table is empty list.
1. Table with N incrementally growing integral numbers, starting from 1 and
   ending with N is considered to be a list.
2. Table with string keys, none of which contains NUL byte, is considered to
   be a dictionary.
3. Table with string keys, at least one of which contains NUL byte, is also
   considered to be a dictionary, but this time it is converted to
   a <a href="builtin.html#msgpack-special-map">msgpack-special-map</a>.
                                                             <a name="lua-special-tbl"></a><code class="help-tag-right">lua-special-tbl</code>
4. Table with <code>vim.type_idx</code> key may be a dictionary, a list or floating-point
   value:
<div class="help-li" style=""> <code>{[vim.type_idx]=vim.types.float, [vim.val_idx]=1}</code> is converted to
     a floating-point 1.0. Note that by default integral Lua numbers are
     converted to <a href="eval.html#Number">Number</a>s, non-integral are converted to <a href="eval.html#Float">Float</a>s. This
     variant allows integral <a href="eval.html#Float">Float</a>s.
</div><div class="help-li" style=""> <code>{[vim.type_idx]=vim.types.dictionary}</code> is converted to an empty
     dictionary, <code>{[vim.type_idx]=vim.types.dictionary, [42]=1, a=2}</code> is
     converted to a dictionary <code>{'a': 42}</code>: non-string keys are ignored.
     Without <code>vim.type_idx</code> key tables with keys not fitting in 1., 2. or 3.
     are errors.
</div><div class="help-li" style=""> <code>{[vim.type_idx]=vim.types.array}</code> is converted to an empty list. As well
     as <code>{[vim.type_idx]=vim.types.array, [42]=1}</code>: integral keys that do not
     form a 1-step sequence from 1 to N are ignored, as well as all
     non-integral keys.
</div>
</div>
<div class="help-para">
Examples:<pre>:echo luaeval('math.pi')
:function Rand(x,y) " random uniform between x and y
:  return luaeval('(_A.y-_A.x)*math.random()+_A.x', {'x':a:x,'y':a:y})
:  endfunction
:echo Rand(1,10)</pre>

</div>
<div class="help-para">
Note: Second argument to <code>luaeval</code> is converted ("marshalled") from Vimscript
to Lua, so changes to Lua containers do not affect values in Vimscript. Return
value is also always converted. When converting, <a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a>s are
treated specially.

</div>
<div class="help-para">
<h2 class="help-heading">Vimscript v:lua interface<span class="help-heading-tags">                                         <a name="v%3Alua-call"></a><span class="help-tag">v:lua-call</span></span></h2>


</div>
<div class="help-para">
From Vimscript the special <code>v:lua</code> prefix can be used to call Lua functions
which are global or accessible from global tables. The expression<pre>v:lua.func(arg1, arg2)</pre>
is equivalent to the Lua chunk<pre>return func(...)</pre>
where the args are converted to Lua values. The expression<pre>v:lua.somemod.func(args)</pre>
is equivalent to the Lua chunk<pre>return somemod.func(...)</pre>
In addition, functions of packages can be accessed like<pre>v:lua.require'mypack'.func(arg1, arg2)
v:lua.require'mypack.submod'.func(arg1, arg2)</pre>
Note: Only single quote form without parens is allowed. Using
<code>require"mypack"</code> or <code>require('mypack')</code> as prefixes do NOT work (the latter
is still valid as a function call of itself, in case require returns a useful
value).

</div>
<div class="help-para">
The <code>v:lua</code> prefix may be used to call Lua functions as <a href="eval.html#method">method</a>s. For
example:<pre>arg1-&gt;v:lua.somemod.func(arg2)</pre>

</div>
<div class="help-para">
You can use <code>v:lua</code> in "func" options like <a href="options.html#'tagfunc'">'tagfunc'</a>, <a href="options.html#'omnifunc'">'omnifunc'</a>, etc.
For example consider the following Lua omnifunc handler:<pre>function mymod.omnifunc(findstart, base)
  if findstart == 1 then
    return 0
  else
    return {'stuff', 'steam', 'strange things'}
  end
end
vim.api.nvim_buf_set_option(0, 'omnifunc', 'v:lua.mymod.omnifunc')</pre>
Note: The module ("mymod" in the above example) must either be a Lua global,
or use the require syntax as specified above to access it from a package.

</div>
<div class="help-para">
Note: <code>v:lua</code> without a call is not allowed in a Vimscript expression:
<a href="eval.html#Funcref">Funcref</a>s cannot represent Lua functions. The following are errors:<pre>let g:Myvar = v:lua.myfunc        " Error
call SomeFunc(v:lua.mycallback)   " Error
let g:foo = v:lua                 " Error
let g:foo = v:['lua']             " Error</pre>

</div>
<div class="help-para">
<h2 class="help-heading">Lua standard modules<span class="help-heading-tags">                                              <a name="lua-stdlib"></a><span class="help-tag">lua-stdlib</span></span></h2>


</div>
<div class="help-para">
The Nvim Lua "standard library" (stdlib) is the <code>vim</code> module, which exposes
various functions and sub-modules. It is always loaded, thus <code>require("vim")</code>
is unnecessary.

</div>
<div class="help-para">
You can peek at the module properties:<pre>:lua print(vim.inspect(vim))</pre>
Result is something like this:<pre>{
  _os_proc_children = &lt;function 1&gt;,
  _os_proc_info = &lt;function 2&gt;,
  ...
  api = {
    nvim__id = &lt;function 5&gt;,
    nvim__id_array = &lt;function 6&gt;,
    ...
  },
  deepcopy = &lt;function 106&gt;,
  gsplit = &lt;function 107&gt;,
  ...
}</pre>
To find documentation on e.g. the "deepcopy" function:<pre>:help vim.deepcopy()</pre>
Note that underscore-prefixed functions (e.g. "_os_proc_children") are
internal/private and must not be used by plugins.

</div>
<div class="help-para">
<h3 class="help-heading">VIM.LOOP<span class="help-heading-tags">                                                   <a name="lua-loop"></a><span class="help-tag">lua-loop</span> <a name="vim.loop"></a><span class="help-tag">vim.loop</span></span></h3>


</div>
<div class="help-para">
<code>vim.loop</code> exposes all features of the Nvim event-loop. This is a low-level
API that provides functionality for networking, filesystem, and process
management. Try this command to see available functions:<pre>:lua print(vim.inspect(vim.loop))</pre>

</div>
<div class="help-para">
Internally, <code>vim.loop</code> wraps the "luv" Lua bindings for the LibUV library;
see <a href="luvref.html#luv-intro">luv-intro</a> for a full reference manual.

</div>
<div class="help-para">
                                                    <a name="E5560"></a><code class="help-tag-right">E5560</code> <a name="lua-loop-callbacks"></a><code class="help-tag">lua-loop-callbacks</code>
It is an error to directly invoke <code>vim.api</code> functions (except <a href="api.html#api-fast">api-fast</a>) in
<code>vim.loop</code> callbacks. For example, this is an error:<pre>local timer = vim.loop.new_timer()
timer:start(1000, 0, function()
  vim.api.nvim_command('echomsg "test"')
end)</pre>

</div>
<div class="help-para">
To avoid the error use <a href="lua.html#vim.schedule_wrap()">vim.schedule_wrap()</a> to defer the callback:<pre>local timer = vim.loop.new_timer()
timer:start(1000, 0, vim.schedule_wrap(function()
  vim.api.nvim_command('echomsg "test"')
end))</pre>

</div>
<div class="help-para">
(For one-shot timers, see <a href="lua.html#vim.defer_fn()">vim.defer_fn()</a>, which automatically adds the
wrapping.)

</div>
<div class="help-para">
Example: repeating timer
    1. Save this code to a file.
    2. Execute it with ":luafile %".<pre>-- Create a timer handle (implementation detail: uv_timer_t).
local timer = vim.loop.new_timer()
local i = 0
-- Waits 1000ms, then repeats every 750ms until timer:close().
timer:start(1000, 750, function()
  print('timer invoked! i='..tostring(i))
  if i &gt; 4 then
    timer:close()  -- Always close handles to avoid leaks.
  end
  i = i + 1
end)
print('sleeping');</pre>

</div>
<div class="help-para">
Example: File-change detection                                    <a name="watch-file"></a><code class="help-tag-right">watch-file</code>
    1. Save this code to a file.
    2. Execute it with ":luafile %".
    3. Use ":Watch %" to watch any file.
    4. Try editing the file from another text editor.
    5. Observe that the file reloads in Nvim (because on_change() calls
       <a href="editing.html#%3Achecktime">:checktime</a>).<pre>local w = vim.loop.new_fs_event()
local function on_change(err, fname, status)
  -- Do work...
  vim.api.nvim_command('checktime')
  -- Debounce: stop/start.
  w:stop()
  watch_file(fname)
end
function watch_file(fname)
  local fullpath = vim.api.nvim_call_function(
    'fnamemodify', {fname, ':p'})
  w:start(fullpath, {}, vim.schedule_wrap(function(...)
    on_change(...) end))
end
vim.api.nvim_command(
  "command! -nargs=1 Watch call luaeval('watch_file(_A)', expand('&lt;args&gt;'))")</pre>

</div>
<div class="help-para">
Example: TCP echo-server                                          <a name="tcp-server"></a><code class="help-tag-right">tcp-server</code>
    1. Save this code to a file.
    2. Execute it with ":luafile %".
    3. Note the port number.
    4. Connect from any TCP client (e.g. "nc 0.0.0.0 36795"):<pre>local function create_server(host, port, on_connect)
  local server = vim.loop.new_tcp()
  server:bind(host, port)
  server:listen(128, function(err)
    assert(not err, err)  -- Check for errors.
    local sock = vim.loop.new_tcp()
    server:accept(sock)  -- Accept client connection.
    on_connect(sock)  -- Start reading messages.
  end)
  return server
end
local server = create_server('0.0.0.0', 0, function(sock)
  sock:read_start(function(err, chunk)
    assert(not err, err)  -- Check for errors.
    if chunk then
      sock:write(chunk)  -- Echo received messages to the channel.
    else  -- EOF (stream closed).
      sock:close()  -- Always close handles to avoid leaks.
    end
  end)
end)
print('TCP echo-server listening on port: '..server:getsockname().port)</pre>

</div>
<div class="help-para">
Multithreading                                            <a name="lua-loop-threading"></a><code class="help-tag-right">lua-loop-threading</code>

</div>
<div class="help-para">
Plugins can perform work in separate (os-level) threads using the threading
APIs in luv, for instance <code>vim.loop.new_thread</code>. Note that every thread
gets its own separate lua interpreter state, with no access to lua globals
in the main thread. Neither can the state of the editor (buffers, windows,
etc) be directly accessed from threads.

</div>
<div class="help-para">
A subset of the <code>vim.*</code> API is available in threads. This includes:

</div>
<div class="help-para">
<div class="help-li" style=""> <code>vim.loop</code> with a separate event loop per thread.
</div><div class="help-li" style=""> <code>vim.mpack</code> and <code>vim.json</code> (useful for serializing messages between threads)
</div><div class="help-li" style=""> <code>require</code> in threads can use lua packages from the global <a href="luaref.html#package.path">package.path</a>
</div><div class="help-li" style=""> <code>print()</code> and <code>vim.inspect</code>
</div><div class="help-li" style=""> <code>vim.diff</code>
</div><div class="help-li" style=""> most utility functions in <code>vim.*</code> for working with pure lua values
  like <code>vim.split</code>, <code>vim.tbl_*</code>, <code>vim.list_*</code>, and so on.
</div><div class="help-li" style=""> <code>vim.is_thread()</code> returns true from a non-main thread.
</div>
</div>
<div class="help-para">
<h3 class="help-heading">VIM.HIGHLIGHT<span class="help-heading-tags">                                                  <a name="lua-highlight"></a><span class="help-tag">lua-highlight</span></span></h3>


</div>
<div class="help-para">
Nvim includes a function for highlighting a selection on yank (see for example
<a href="https://github.com/machakann/vim-highlightedyank">https://github.com/machakann/vim-highlightedyank</a>). To enable it, add
<pre>au TextYankPost * silent! lua vim.highlight.on_yank()</pre>

</div>
<div class="help-para">
to your <code>init.vim</code>. You can customize the highlight group and the duration of
the highlight via
<pre>au TextYankPost * silent! lua vim.highlight.on_yank {higroup="IncSearch", timeout=150}</pre>

</div>
<div class="help-para">
If you want to exclude visual selections from highlighting on yank, use
<pre>au TextYankPost * silent! lua vim.highlight.on_yank {on_visual=false}</pre>

</div>
<div class="help-para">
vim.highlight.on_yank({opts})                        <a name="vim.highlight.on_yank()"></a><code class="help-tag-right">vim.highlight.on_yank()</code>
    Highlights the yanked text. The fields of the optional dict <code>{opts}</code>
    control the highlight:
<div class="help-li" style=""> <code>{higroup}</code> highlight group for yanked region (default <a href="syntax.html#hl-IncSearch">hl-IncSearch</a>)
</div><div class="help-li" style=""> <code>{timeout}</code> time in ms before highlight is cleared (default <code>150</code>)
</div><div class="help-li" style=""> <code>{on_macro}</code> highlight when executing macro (default <code>false</code>)
</div><div class="help-li" style=""> <code>{on_visual}</code> highlight when yanking visual selection (default <code>true</code>)
</div><div class="help-li" style=""> <code>{event}</code> event structure (default <a href="eval.html#v%3Aevent">v:event</a>)
</div>
</div>
<div class="help-para">
vim.highlight.range({bufnr}, <code>{ns}</code>, <code>{hlgroup}</code>, <code>{start}</code>, <code>{finish}</code>, <code>{opts}</code>)
                                                       <a name="vim.highlight.range()"></a><code class="help-tag-right">vim.highlight.range()</code>

</div>
<div class="help-para">
    Apply highlight group to range of text.

</div>
<div class="help-para">
<div class="help-column_heading">            Parameters:</div>
<div class="help-li" style=""> <code>{bufnr}</code>   buffer number
</div><div class="help-li" style=""> <code>{ns}</code>      namespace for highlights
</div><div class="help-li" style=""> <code>{hlgroup}</code> highlight group name
</div><div class="help-li" style=""> <code>{start}</code>   starting position (tuple <code>{line,col}</code>)
</div><div class="help-li" style=""> <code>{finish}</code>  finish position (tuple <code>{line,col}</code>)
</div><div class="help-li" style=""> <code>{opts}</code>    optional parameters:
</div><div class="help-li" style="margin-left: 3rem;"> <code>regtype</code>: type of range (characterwise, linewise,
                            or blockwise, see <a href="builtin.html#setreg()">setreg()</a>), default <code>'v'</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>inclusive</code>: range includes end position,
                            default <code>false</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>priority</code>: priority of highlight, default
                            <code>vim.highlight.user</code> (see below)
</div>
</div>
<div class="help-para">
vim.highlight.priorities                            <a name="vim.highlight.priorities"></a><code class="help-tag-right">vim.highlight.priorities</code>

</div>
<div class="help-para">
    Table with default priorities used for highlighting:
<div class="help-li" style=""> <code>syntax</code>: <code>50</code>, used for standard syntax highlighting
</div><div class="help-li" style=""> <code>treesitter</code>: <code>100</code>, used for tree-sitter-based highlighting
</div><div class="help-li" style=""> <code>diagnostics</code>: <code>150</code>, used for code analysis such as diagnostics
</div><div class="help-li" style=""> <code>user</code>: <code>200</code>, used for user-triggered highlights such as LSP document
          symbols or <code>on_yank</code> autocommands
</div>
</div>
<div class="help-para">
<h3 class="help-heading">VIM.REGEX<span class="help-heading-tags">                                                          <a name="lua-regex"></a><span class="help-tag">lua-regex</span></span></h3>


</div>
<div class="help-para">
Vim regexes can be used directly from lua. Currently they only allow
matching within a single line.

</div>
<div class="help-para">
vim.regex({re})                                                  <a name="vim.regex()"></a><code class="help-tag-right">vim.regex()</code>
    Parse the Vim regex <code>{re}</code> and return a regex object. Regexes are "magic"
    and case-sensitive by default, regardless of <a href="options.html#'magic'">'magic'</a> and <a href="options.html#'ignorecase'">'ignorecase'</a>.
    They can be controlled with flags, see <a href="pattern.html#%2Fmagic">/magic</a> and <a href="pattern.html#%2Fignorecase">/ignorecase</a>.

</div>
<div class="help-para">
Methods on the regex object:

</div>
<div class="help-para">
regex:match_str({str})                                     <a name="regex%3Amatch_str()"></a><code class="help-tag-right">regex:match_str()</code>
    Match the string against the regex. If the string should match the regex
    precisely, surround the regex with <code>^</code> and <code>$</code>. If the was a match, the
    byte indices for the beginning and end of the match is returned. When
    there is no match, <code>nil</code> is returned. As any integer is truth-y,
    <code>regex:match()</code> can be directly used as a condition in an if-statement.

</div>
<div class="help-para">
regex:match_line({bufnr}, <code>{line_idx}</code> [, <code>{start}</code>, <code>{end}</code>])  <a name="regex%3Amatch_line()"></a><code class="help-tag">regex:match_line()</code>
    Match line <code>{line_idx}</code> (zero-based) in buffer <code>{bufnr}</code>. If <code>{start}</code> and <code>{end}</code>
    are supplied, match only this byte index range. Otherwise see
    <a href="lua.html#regex%3Amatch_str()">regex:match_str()</a>. If <code>{start}</code> is used, then the returned byte indices
    will be relative <code>{start}</code>.

</div>
<div class="help-para">
<h3 class="help-heading">VIM.DIFF<span class="help-heading-tags">                                                            <a name="lua-diff"></a><span class="help-tag">lua-diff</span></span></h3>


</div>
<div class="help-para">
vim.diff({a}, <code>{b}</code>, <code>{opts}</code>)                                        <a name="vim.diff()"></a><code class="help-tag-right">vim.diff()</code>
    Run diff on strings <code>{a}</code> and <code>{b}</code>. Any indices returned by this function,
    either directly or via callback arguments, are 1-based.

</div>
<div class="help-para">
    Examples:<pre>vim.diff('a\n', 'b\nc\n')
=&gt;
@@ -1 +1,2 @@
-a
+b
+c

vim.diff('a\n', 'b\nc\n', {result_type = 'indices'})
=&gt;
{
    {1, 1, 1, 2}
}</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{a}</code>      First string to compare
</div><div class="help-li" style=""> <code>{b}</code>      Second string to compare
</div><div class="help-li" style=""> <code>{opts}</code>   Optional parameters:
</div><div class="help-li" style="margin-left: 3rem;"> <code>on_hunk</code> (callback):
                   Invoked for each hunk in the diff. Return a negative number
                   to cancel the callback for any remaining hunks.
                   Args:
</div><div class="help-li" style="margin-left: 4rem;"> <code>start_a</code> (integer): Start line of hunk in <code>{a}</code>.
</div><div class="help-li" style="margin-left: 4rem;"> <code>count_a</code> (integer): Hunk size in <code>{a}</code>.
</div><div class="help-li" style="margin-left: 4rem;"> <code>start_b</code> (integer): Start line of hunk in <code>{b}</code>.
</div><div class="help-li" style="margin-left: 4rem;"> <code>count_b</code> (integer): Hunk size in <code>{b}</code>.
</div><div class="help-li" style="margin-left: 3rem;"> <code>result_type</code> (string): Form of the returned diff:
</div><div class="help-li" style="margin-left: 4rem;"> "unified": (default) String in unified format.
</div><div class="help-li" style="margin-left: 4rem;"> "indices": Array of hunk locations.
                   Note: This option is ignored if <code>on_hunk</code> is used.
</div><div class="help-li" style="margin-left: 3rem;"> <code>linematch</code> (boolean): Run linematch on the resulting hunks
                   from xdiff. Requires <code>result_type = indices</code>, ignored
                   otherwise.
</div><div class="help-li" style="margin-left: 3rem;"> <code>algorithm</code> (string):
                   Diff algorithm to use. Values:
</div><div class="help-li" style="margin-left: 4rem;"> "myers"      the default algorithm
</div><div class="help-li" style="margin-left: 4rem;"> "minimal"    spend extra time to generate the
                                  smallest possible diff
</div><div class="help-li" style="margin-left: 4rem;"> "patience"   patience diff algorithm
</div><div class="help-li" style="margin-left: 4rem;"> "histogram"  histogram diff algorithm
</div><div class="help-li" style="margin-left: 3rem;"> <code>ctxlen</code> (integer): Context length
</div><div class="help-li" style="margin-left: 3rem;"> <code>interhunkctxlen</code> (integer):
                   Inter hunk context length
</div><div class="help-li" style="margin-left: 3rem;"> <code>ignore_whitespace</code> (boolean):
                   Ignore whitespace
</div><div class="help-li" style="margin-left: 3rem;"> <code>ignore_whitespace_change</code> (boolean):
                   Ignore whitespace change
</div><div class="help-li" style="margin-left: 3rem;"> <code>ignore_whitespace_change_at_eol</code> (boolean)
                   Ignore whitespace change at end-of-line.
</div><div class="help-li" style="margin-left: 3rem;"> <code>ignore_cr_at_eol</code> (boolean)
                   Ignore carriage return at end-of-line
</div><div class="help-li" style="margin-left: 3rem;"> <code>ignore_blank_lines</code> (boolean)
                   Ignore blank lines
</div><div class="help-li" style="margin-left: 3rem;"> <code>indent_heuristic</code> (boolean):
                   Use the indent heuristic for the internal
                   diff library.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        See <code>{opts.result_type}</code>. nil if <code>{opts.on_hunk}</code> is given.

</div>
<div class="help-para">
<h3 class="help-heading">VIM.MPACK<span class="help-heading-tags">                                                          <a name="lua-mpack"></a><span class="help-tag">lua-mpack</span></span></h3>


</div>
<div class="help-para">
The <a name="vim.mpack"></a><code class="help-tag">vim.mpack</code> module provides encoding and decoding of Lua objects to and
from msgpack-encoded strings. Supports <a href="lua.html#vim.NIL">vim.NIL</a> and <a href="lua.html#vim.empty_dict()">vim.empty_dict()</a>.

</div>
<div class="help-para">
vim.mpack.encode({obj})                                     <a name="vim.mpack.encode"></a><code class="help-tag-right">vim.mpack.encode</code>
    Encodes (or "packs") Lua object <code>{obj}</code> as msgpack in a Lua string.

</div>
<div class="help-para">
vim.mpack.decode({str})                                     <a name="vim.mpack.decode"></a><code class="help-tag-right">vim.mpack.decode</code>
    Decodes (or "unpacks") the msgpack-encoded <code>{str}</code> to a Lua object.

</div>
<div class="help-para">
<h3 class="help-heading">VIM.SPELL<span class="help-heading-tags">                                                          <a name="lua-spell"></a><span class="help-tag">lua-spell</span></span></h3>


</div>
<div class="help-para">
vim.spell.check({str})                                     <a name="vim.spell.check()"></a><code class="help-tag-right">vim.spell.check()</code>
    Check <code>{str}</code> for spelling errors. Similar to the Vimscript function
    <a href="builtin.html#spellbadword()">spellbadword()</a>.

</div>
<div class="help-para">
    Note: The behaviour of this function is dependent on: <a href="options.html#'spelllang'">'spelllang'</a>,
    <a href="options.html#'spellfile'">'spellfile'</a>, <a href="options.html#'spellcapcheck'">'spellcapcheck'</a> and <a href="options.html#'spelloptions'">'spelloptions'</a> which can all be local to
    the buffer. Consider calling this with <a href="api.html#nvim_buf_call()">nvim_buf_call()</a>.

</div>
<div class="help-para">
    Example:<pre>vim.spell.check("the quik brown fox")
=&gt;
{
    {'quik', 'bad', 4}
}</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{str}</code>    String to spell check.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
      List of tuples with three items:
<div class="help-li" style=""> The badly spelled word.
</div><div class="help-li" style=""> The type of the spelling error:
            "bad"   spelling mistake
            "rare"  rare word
            "local" word only valid in another region
            "caps"  word should start with Capital
</div><div class="help-li" style=""> The position in <code>{str}</code> where the word begins.
</div>
</div>
<div class="help-para">
<h3 class="help-heading">VIM<span class="help-heading-tags">                                                              <a name="lua-builtin"></a><span class="help-tag">lua-builtin</span></span></h3>


</div>
<div class="help-para">
vim.api.{func}({...})                                                <a name="vim.api"></a><code class="help-tag-right">vim.api</code>
    Invokes Nvim <a href="api.html#API">API</a> function <code>{func}</code> with arguments <code>{...}</code>.
    Example: call the "nvim_get_current_line()" API function:<pre>print(tostring(vim.api.nvim_get_current_line()))</pre>
vim.version()                                                    <a name="vim.version"></a><code class="help-tag-right">vim.version</code>
    Gets the version of the current Nvim build.

</div>
<div class="help-para">
vim.in_fast_event()                                      <a name="vim.in_fast_event()"></a><code class="help-tag-right">vim.in_fast_event()</code>
    Returns true if the code is executing as part of a "fast" event handler,
    where most of the API is disabled. These are low-level events (e.g.
    <a href="lua.html#lua-loop-callbacks">lua-loop-callbacks</a>) which can be invoked whenever Nvim polls for input.
    When this is <code>false</code> most API functions are callable (but may be subject
    to other restrictions such as <a href="eval.html#textlock">textlock</a>).

</div>
<div class="help-para">
vim.NIL                                                              <a name="vim.NIL"></a><code class="help-tag-right">vim.NIL</code>
    Special value representing NIL in <a href="api.html#RPC">RPC</a> and <a href="eval.html#v%3Anull">v:null</a> in Vimscript
    conversion, and similar cases. Lua <code>nil</code> cannot be used as part of a Lua
    table representing a Dictionary or Array, because it is treated as
    missing: <code>{"foo", nil}</code> is the same as <code>{"foo"}</code>.

</div>
<div class="help-para">
vim.empty_dict()                                            <a name="vim.empty_dict()"></a><code class="help-tag-right">vim.empty_dict()</code>
    Creates a special empty table (marked with a metatable), which Nvim to an
    empty dictionary when translating Lua values to Vimscript or API types.
    Nvim by default converts an empty table <code>{}</code> without this metatable to an
    list/array.

</div>
<div class="help-para">
    Note: If numeric keys are present in the table, Nvim ignores the metatable
    marker and converts the dict to a list/array anyway.

</div>
<div class="help-para">
vim.rpcnotify({channel}, <code>{method}</code> [, <code>{args}</code>...])             <a name="vim.rpcnotify()"></a><code class="help-tag-right">vim.rpcnotify()</code>
    Sends <code>{event}</code> to <code>{channel}</code> via <a href="api.html#RPC">RPC</a> and returns immediately. If <code>{channel}</code>
    is 0, the event is broadcast to all channels.

</div>
<div class="help-para">
    This function also works in a fast callback <a href="lua.html#lua-loop-callbacks">lua-loop-callbacks</a>.

</div>
<div class="help-para">
vim.rpcrequest({channel}, <code>{method}</code> [, <code>{args}</code>...])           <a name="vim.rpcrequest()"></a><code class="help-tag-right">vim.rpcrequest()</code>
    Sends a request to <code>{channel}</code> to invoke <code>{method}</code> via <a href="api.html#RPC">RPC</a> and blocks until
    a response is received.

</div>
<div class="help-para">
    Note: NIL values as part of the return value is represented as <a href="lua.html#vim.NIL">vim.NIL</a>
    special value

</div>
<div class="help-para">
vim.stricmp({a}, <code>{b}</code>)                                          <a name="vim.stricmp()"></a><code class="help-tag-right">vim.stricmp()</code>
    Compares strings case-insensitively. Returns 0, 1 or -1 if strings are
    equal, <code>{a}</code> is greater than <code>{b}</code> or <code>{a}</code> is lesser than <code>{b}</code>, respectively.

</div>
<div class="help-para">
vim.str_utfindex({str} [, <code>{index}</code>])                       <a name="vim.str_utfindex()"></a><code class="help-tag-right">vim.str_utfindex()</code>
    Convert byte index to UTF-32 and UTF-16 indices. If <code>{index}</code> is not
    supplied, the length of the string is used. All indices are zero-based.
    Returns two values: the UTF-32 and UTF-16 indices respectively.

</div>
<div class="help-para">
    Embedded NUL bytes are treated as terminating the string. Invalid UTF-8
    bytes, and embedded surrogates are counted as one code point each. An
    <code>{index}</code> in the middle of a UTF-8 sequence is rounded upwards to the end of
    that sequence.

</div>
<div class="help-para">
vim.str_byteindex({str}, <code>{index}</code> [, <code>{use_utf16}</code>])        <a name="vim.str_byteindex()"></a><code class="help-tag">vim.str_byteindex()</code>
    Convert UTF-32 or UTF-16 <code>{index}</code> to byte index. If <code>{use_utf16}</code> is not
    supplied, it defaults to false (use UTF-32). Returns the byte index.

</div>
<div class="help-para">
    Invalid UTF-8 and NUL is treated like by <a href="lua.html#vim.str_byteindex()">vim.str_byteindex()</a>.
    An <code>{index}</code> in the middle of a UTF-16 sequence is rounded upwards to
    the end of that sequence.

</div>
<div class="help-para">
vim.iconv({str}, <code>{from}</code>, <code>{to}</code>[, <code>{opts}</code>])                        <a name="vim.iconv()"></a><code class="help-tag-right">vim.iconv()</code>
        The result is a String, which is the text <code>{str}</code> converted from
        encoding <code>{from}</code> to encoding <code>{to}</code>. When the conversion fails <code>nil</code> is
        returned.  When some characters could not be converted they
        are replaced with "?".
        The encoding names are whatever the iconv() library function
        can accept, see ":Man 3 iconv".

</div>
<div class="help-para">
<div class="help-column_heading">        Parameters:</div>
<div class="help-li" style=""> <code>{str}</code>   (string) Text to convert
</div><div class="help-li" style=""> <code>{from}</code>  (string) Encoding of <code>{str}</code>
</div><div class="help-li" style=""> <code>{to}</code>    (string) Target encoding
</div>
</div>
<div class="help-para">
<div class="help-column_heading">        Returns:</div>
            Converted string if conversion succeeds, <code>nil</code> otherwise.

</div>
<div class="help-para">
vim.schedule({callback})                                      <a name="vim.schedule()"></a><code class="help-tag-right">vim.schedule()</code>
    Schedules <code>{callback}</code> to be invoked soon by the main event-loop. Useful
    to avoid <a href="eval.html#textlock">textlock</a> or other temporary restrictions.

</div>
<div class="help-para">
vim.defer_fn({fn}, <code>{timeout}</code>)                                   <a name="vim.defer_fn"></a><code class="help-tag-right">vim.defer_fn</code>
    Defers calling <code>{fn}</code> until <code>{timeout}</code> ms passes. Use to do a one-shot timer
    that calls <code>{fn}</code>.

</div>
<div class="help-para">
    Note: The <code>{fn}</code> is <a href="lua.html#vim.schedule_wrap()">vim.schedule_wrap()</a>ped automatically, so API functions are
    safe to call.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{fn}</code>        Callback to call once <code>{timeout}</code> expires
</div><div class="help-li" style=""> <code>{timeout}</code>   Time in ms to wait before calling <code>{fn}</code>
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Returns:</div>
        <a href="lua.html#vim.loop">vim.loop</a>.new_timer() object

</div>
<div class="help-para">
vim.wait({time} [, <code>{callback}</code>, <code>{interval}</code>, <code>{fast_only}</code>])          <a name="vim.wait()"></a><code class="help-tag-right">vim.wait()</code>
    Wait for <code>{time}</code> in milliseconds until <code>{callback}</code> returns <code>true</code>.

</div>
<div class="help-para">
    Executes <code>{callback}</code> immediately and at approximately <code>{interval}</code>
    milliseconds (default 200). Nvim still processes other events during
    this time.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{time}</code>      Number of milliseconds to wait
</div><div class="help-li" style=""> <code>{callback}</code>  Optional callback. Waits until <code>{callback}</code> returns true
</div><div class="help-li" style=""> <code>{interval}</code>  (Approximate) number of milliseconds to wait between polls
</div><div class="help-li" style=""> <code>{fast_only}</code> If true, only <a href="api.html#api-fast">api-fast</a> events will be processed.
                        If called from while in an <a href="api.html#api-fast">api-fast</a> event, will
                        automatically be set to <code>true</code>.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Returns:</div>
        If <code>{callback}</code> returns <code>true</code> during the <code>{time}</code>:
            <code>true, nil</code>

</div>
<div class="help-para">
        If <code>{callback}</code> never returns <code>true</code> during the <code>{time}</code>:
            <code>false, -1</code>

</div>
<div class="help-para">
        If <code>{callback}</code> is interrupted during the <code>{time}</code>:
            <code>false, -2</code>

</div>
<div class="help-para">
        If <code>{callback}</code> errors, the error is raised.

</div>
<div class="help-para">
        Examples:<pre>---
-- Wait for 100 ms, allowing other events to process
vim.wait(100, function() end)

---
-- Wait for 100 ms or until global variable set.
vim.wait(100, function() return vim.g.waiting_for_var end)

---
-- Wait for 1 second or until global variable set, checking every ~500 ms
vim.wait(1000, function() return vim.g.waiting_for_var end, 500)

---
-- Schedule a function to set a value in 100ms
vim.defer_fn(function() vim.g.timer_result = true end, 100)

-- Would wait ten seconds if results blocked. Actually only waits  100 ms
if vim.wait(10000, function() return vim.g.timer_result end) then
  print('Only waiting a little bit of time!')
end</pre>

</div>
<div class="help-para">
vim.ui_attach({ns}, <code>{options}</code>, <code>{callback}</code>)                <a name="vim.ui_attach()"></a><code class="help-tag-right">vim.ui_attach()</code>
    Attach to ui events, similar to <a href="api.html#nvim_ui_attach()">nvim_ui_attach()</a> but receive events
    as lua callback. Can be used to implement screen elements like
    popupmenu or message handling in lua.

</div>
<div class="help-para">
    <code>{options}</code> should be a dictionary-like table, where <code>ext_...</code> options should
    be set to true to receive events for the respective external element.

</div>
<div class="help-para">
    <code>{callback}</code> receives event name plus additional parameters. See <a href="ui.html#ui-popupmenu">ui-popupmenu</a>
    and the sections below for event format for respective events.

</div>
<div class="help-para">
    WARNING: This api is considered experimental.  Usability will vary for
    different screen elements. In particular <code>ext_messages</code> behavior is subject
    to further changes and usability improvements.  This is expected to be
    used to handle messages when setting <a href="options.html#'cmdheight'">'cmdheight'</a> to zero (which is
    likewise experimental).

</div>
<div class="help-para">
    Example (stub for a <a href="ui.html#ui-popupmenu">ui-popupmenu</a> implementation):<pre>ns = vim.api.nvim_create_namespace('my_fancy_pum')

vim.ui_attach(ns, {ext_popupmenu=true}, function(event, ...)
  if event == "popupmenu_show" then
    local items, selected, row, col, grid = ...
    print("display pum ", #items)
  elseif event == "popupmenu_select" then
    local selected = ...
    print("selected", selected)
  elseif event == "popupmenu_hide" then
    print("FIN")
  end
end)</pre>
vim.ui_detach({ns})                                           <a name="vim.ui_detach()"></a><code class="help-tag-right">vim.ui_detach()</code>
    Detach a callback previously attached with <a href="lua.html#vim.ui_attach()">vim.ui_attach()</a> for the
    given namespace <code>{ns}</code>.

</div>
<div class="help-para">
vim.type_idx                                                    <a name="vim.type_idx"></a><code class="help-tag-right">vim.type_idx</code>
    Type index for use in <a href="lua.html#lua-special-tbl">lua-special-tbl</a>. Specifying one of the values from
    <a href="lua.html#vim.types">vim.types</a> allows typing the empty table (it is unclear whether empty Lua
    table represents empty list or empty array) and forcing integral numbers
    to be <a href="eval.html#Float">Float</a>. See <a href="lua.html#lua-special-tbl">lua-special-tbl</a> for more details.

</div>
<div class="help-para">
vim.val_idx                                                      <a name="vim.val_idx"></a><code class="help-tag-right">vim.val_idx</code>
    Value index for tables representing <a href="eval.html#Float">Float</a>s. A table representing
    floating-point value 1.0 looks like this:<pre>{
  [vim.type_idx] = vim.types.float,
  [vim.val_idx] = 1.0,
}</pre>

</div>
<div class="help-para">
    See also <a href="lua.html#vim.type_idx">vim.type_idx</a> and <a href="lua.html#lua-special-tbl">lua-special-tbl</a>.

</div>
<div class="help-para">
vim.types                                                          <a name="vim.types"></a><code class="help-tag-right">vim.types</code>
    Table with possible values for <a href="lua.html#vim.type_idx">vim.type_idx</a>. Contains two sets of
    key-value pairs: first maps possible values for <a href="lua.html#vim.type_idx">vim.type_idx</a> to
    human-readable strings, second maps human-readable type names to values
    for <a href="lua.html#vim.type_idx">vim.type_idx</a>. Currently contains pairs for <code>float</code>, <code>array</code> and
        <code>dictionary</code> types.

</div>
<div class="help-para">
    Note: One must expect that values corresponding to <code>vim.types.float</code>,
    <code>vim.types.array</code> and <code>vim.types.dictionary</code> fall under only two following
    assumptions:
    1. Value may serve both as a key and as a value in a table. Given the
       properties of Lua tables this basically means “value is not <code>nil</code>”.
    2. For each value in <code>vim.types</code> table <code>vim.types[vim.types[value]]</code> is the
       same as <code>value</code>.
    No other restrictions are put on types, and it is not guaranteed that
    values corresponding to <code>vim.types.float</code>, <code>vim.types.array</code> and
    <code>vim.types.dictionary</code> will not change or that <code>vim.types</code> table will only
    contain values for these three types.

</div>
<div class="help-para">
                                                   <a name="log_levels"></a><code class="help-tag-right">log_levels</code> <a name="vim.log.levels"></a><code class="help-tag">vim.log.levels</code>
Log levels are one of the values defined in <code>vim.log.levels</code>:

</div>
<div class="help-para">
    vim.log.levels.DEBUG
    vim.log.levels.ERROR
    vim.log.levels.INFO
    vim.log.levels.TRACE
    vim.log.levels.WARN
    vim.log.levels.OFF

</div>
<div class="help-para">
<h3 class="help-heading">LUA-VIMSCRIPT BRIDGE<span class="help-heading-tags">                                           <a name="lua-vimscript"></a><span class="help-tag">lua-vimscript</span></span></h3>


</div>
<div class="help-para">
Nvim Lua provides an interface to Vimscript variables and functions, and
editor commands and options.

</div>
<div class="help-para">
See also <a href="https://github.com/nanotee/nvim-lua-guide">https://github.com/nanotee/nvim-lua-guide</a>.

</div>
<div class="help-para">
vim.call({func}, <code>{...}</code>)                                           <a name="vim.call()"></a><code class="help-tag-right">vim.call()</code>
    Invokes <a href="eval.html#vim-function">vim-function</a> or <a href="eval.html#user-function">user-function</a> <code>{func}</code> with arguments <code>{...}</code>.
    See also <a href="lua.html#vim.fn">vim.fn</a>.
    Equivalent to:<pre>vim.fn[func]({...})</pre>
vim.cmd({command})
    See <a href="lua.html#vim.cmd()">vim.cmd()</a>.

</div>
<div class="help-para">
vim.fn.{func}({...})                                                  <a name="vim.fn"></a><code class="help-tag-right">vim.fn</code>
    Invokes <a href="eval.html#vim-function">vim-function</a> or <a href="eval.html#user-function">user-function</a> <code>{func}</code> with arguments <code>{...}</code>.
    To call autoload functions, use the syntax:<pre>vim.fn['some#function']({...})</pre>

</div>
<div class="help-para">
    Unlike vim.api.|nvim_call_function()| this converts directly between Vim
    objects and Lua objects. If the Vim function returns a float, it will be
    represented directly as a Lua number. Empty lists and dictionaries both
    are represented by an empty table.

</div>
<div class="help-para">
    Note: <a href="eval.html#v%3Anull">v:null</a> values as part of the return value is represented as
    <a href="lua.html#vim.NIL">vim.NIL</a> special value

</div>
<div class="help-para">
    Note: vim.fn keys are generated lazily, thus <code>pairs(vim.fn)</code> only
    enumerates functions that were called at least once.

</div>
<div class="help-para">
    Note: The majority of functions cannot run in <a href="api.html#api-fast">api-fast</a> callbacks with some
    undocumented exceptions which are allowed.

</div>
<div class="help-para">
                                                           <a name="lua-vim-variables"></a><code class="help-tag-right">lua-vim-variables</code>
The Vim editor global dictionaries <a href="eval.html#g%3A">g:</a> <a href="eval.html#w%3A">w:</a> <a href="eval.html#b%3A">b:</a> <a href="eval.html#t%3A">t:</a> <a href="eval.html#v%3A">v:</a> can be accessed
from Lua conveniently and idiomatically by referencing the <code>vim.*</code> Lua tables
described below. In this way you can easily read and modify global Vimscript
variables from Lua.

</div>
<div class="help-para">
Example:<pre>vim.g.foo = 5     -- Set the g:foo Vimscript variable.
print(vim.g.foo)  -- Get and print the g:foo Vimscript variable.
vim.g.foo = nil   -- Delete (:unlet) the Vimscript variable.
vim.b[2].foo = 6  -- Set b:foo for buffer 2</pre>

</div>
<div class="help-para">
Note that setting dictionary fields directly will not write them back into
Nvim. This is because the index into the namespace simply returns a copy.
Instead the whole dictionary must be written as one. This can be achieved by
creating a short-lived temporary.

</div>
<div class="help-para">
Example:<pre>vim.g.my_dict.field1 = 'value'  -- Does not work

local my_dict = vim.g.my_dict   --
my_dict.field1 = 'value'        -- Instead do
vim.g.my_dict = my_dict         --</pre>
vim.g                                                                  <a name="vim.g"></a><code class="help-tag-right">vim.g</code>
    Global (<a href="eval.html#g%3A">g:</a>) editor variables.
    Key with no value returns <code>nil</code>.

</div>
<div class="help-para">
vim.b                                                                  <a name="vim.b"></a><code class="help-tag-right">vim.b</code>
    Buffer-scoped (<a href="eval.html#b%3A">b:</a>) variables for the current buffer.
    Invalid or unset key returns <code>nil</code>. Can be indexed with
    an integer to access variables for a specific buffer.

</div>
<div class="help-para">
vim.w                                                                  <a name="vim.w"></a><code class="help-tag-right">vim.w</code>
    Window-scoped (<a href="eval.html#w%3A">w:</a>) variables for the current window.
    Invalid or unset key returns <code>nil</code>. Can be indexed with
    an integer to access variables for a specific window.

</div>
<div class="help-para">
vim.t                                                                  <a name="vim.t"></a><code class="help-tag-right">vim.t</code>
    Tabpage-scoped (<a href="eval.html#t%3A">t:</a>) variables for the current tabpage.
    Invalid or unset key returns <code>nil</code>. Can be indexed with
    an integer to access variables for a specific tabpage.

</div>
<div class="help-para">
vim.v                                                                  <a name="vim.v"></a><code class="help-tag-right">vim.v</code>
    <a href="eval.html#v%3A">v:</a> variables.
    Invalid or unset key returns <code>nil</code>.

</div>
<div class="help-para">
vim.env                                                              <a name="vim.env"></a><code class="help-tag-right">vim.env</code>
    Environment variables defined in the editor session.
    See <a href="options.html#expand-env">expand-env</a> and <a href="eval.html#%3Alet-environment">:let-environment</a> for the Vimscript behavior.
    Invalid or unset key returns <code>nil</code>.
    Example:<pre>vim.env.FOO = 'bar'
print(vim.env.TERM)</pre>

</div>
<div class="help-para">
                                                                 <a name="lua-options"></a><code class="help-tag-right">lua-options</code>
                                                             <a name="lua-vim-options"></a><code class="help-tag-right">lua-vim-options</code>
                                                                 <a name="lua-vim-set"></a><code class="help-tag-right">lua-vim-set</code>
                                                            <a name="lua-vim-setlocal"></a><code class="help-tag-right">lua-vim-setlocal</code>

</div>
<div class="help-para">
Vim options can be accessed through <a href="lua.html#vim.o">vim.o</a>, which behaves like Vimscript
<a href="options.html#%3Aset">:set</a>.

</div>
<div class="help-para">
<div class="help-column_heading">    Examples:</div>

</div>
<div class="help-para">
    To set a boolean toggle:
        Vimscript: <code>set number</code>
        Lua:       <code>vim.o.number = true</code>

</div>
<div class="help-para">
    To set a string value:
        Vimscript: <code>set wildignore=*.o,*.a,__pycache__</code>
        Lua:       <code>vim.o.wildignore = '*.o,*.a,__pycache__'</code>

</div>
<div class="help-para">
Similarly, there is <a href="lua.html#vim.bo">vim.bo</a> and <a href="lua.html#vim.wo">vim.wo</a> for setting buffer-scoped and
window-scoped options. Note that this must NOT be confused with
<a href="options.html#local-options">local-options</a> and <a href="options.html#%3Asetlocal">:setlocal</a>. There is also <a href="lua.html#vim.go">vim.go</a> that only accesses the
global value of a <a href="options.html#global-local">global-local</a> option, see <a href="options.html#%3Asetglobal">:setglobal</a>.

</div>
<div class="help-para">
vim.o                                                                  <a name="vim.o"></a><code class="help-tag-right">vim.o</code>
    Get or set <a href="options.html#options">options</a>. Like <code>:set</code>. Invalid key is an error.

</div>
<div class="help-para">
    Note: this works on both buffer-scoped and window-scoped options using the
    current buffer and window.

</div>
<div class="help-para">
    Example:<pre>vim.o.cmdheight = 4
print(vim.o.columns)
print(vim.o.foo)     -- error: invalid key</pre>

</div>
<div class="help-para">
vim.go                                                                <a name="vim.go"></a><code class="help-tag-right">vim.go</code>
    Get or set global <a href="options.html#options">options</a>. Like <code>:setglobal</code>. Invalid key is
    an error.

</div>
<div class="help-para">
    Note: this is different from <a href="lua.html#vim.o">vim.o</a> because this accesses the global
    option value and thus is mostly useful for use with <a href="options.html#global-local">global-local</a>
    options.

</div>
<div class="help-para">
    Example:<pre>vim.go.cmdheight = 4
print(vim.go.columns)
print(vim.go.bar)     -- error: invalid key</pre>

</div>
<div class="help-para">
vim.bo[{bufnr}]                                                                <a name="vim.bo"></a><code class="help-tag-right">vim.bo</code>
    Get or set buffer-scoped <a href="options.html#options">options</a> for the buffer with number <code>{bufnr}</code>.
    Like <code>:set</code> and <code>:setlocal</code>. If [{bufnr}] is omitted then the current
    buffer is used. Invalid <code>{bufnr}</code> or key is an error.

</div>
<div class="help-para">
    Note: this is equivalent to both <code>:set</code> and <code>:setlocal</code>.

</div>
<div class="help-para">
    Example:<pre>local bufnr = vim.api.nvim_get_current_buf()
vim.bo[bufnr].buflisted = true    -- same as vim.bo.buflisted = true
print(vim.bo.comments)
print(vim.bo.baz)                 -- error: invalid key</pre>

</div>
<div class="help-para">
vim.wo[{winid}]                                                                <a name="vim.wo"></a><code class="help-tag-right">vim.wo</code>
    Get or set window-scoped <a href="options.html#options">options</a> for the window with handle <code>{winid}</code>.
    Like <code>:set</code>. If [{winid}] is omitted then the current window is used.
    Invalid <code>{winid}</code> or key is an error.

</div>
<div class="help-para">
    Note: this does not access <a href="options.html#local-options">local-options</a> (<code>:setlocal</code>) instead use:<pre>nvim_get_option_value(OPTION, { scope = 'local', win = winid })
nvim_set_option_value(OPTION, VALUE, { scope = 'local', win = winid }</pre>

</div>
<div class="help-para">
    Example:<pre>local winid = vim.api.nvim_get_current_win()
vim.wo[winid].number = true    -- same as vim.wo.number = true
print(vim.wo.foldmarker)
print(vim.wo.quux)             -- error: invalid key</pre>

</div>
<div class="help-para">
                                                                          <a name="lua-vim-opt"></a><code class="help-tag-right">lua-vim-opt</code>
                                                                     <a name="lua-vim-optlocal"></a><code class="help-tag-right">lua-vim-optlocal</code>
                                                                    <a name="lua-vim-optglobal"></a><code class="help-tag-right">lua-vim-optglobal</code>
                                                                              <a name="vim.opt"></a><code class="help-tag-right">vim.opt</code>

</div>
<div class="help-para">
A special interface <a href="lua.html#vim.opt">vim.opt</a> exists for conveniently interacting with list-
and map-style option from Lua: It allows accessing them as Lua tables and
offers object-oriented method for adding and removing entries.

</div>
<div class="help-para">
<div class="help-column_heading">    Examples:</div>

</div>
<div class="help-para">
    The following methods of setting a list-style option are equivalent:
        In Vimscript:
            <code>set wildignore=*.o,*.a,__pycache__</code>

</div>
<div class="help-para">
        In Lua using <code>vim.o</code>:
            <code>vim.o.wildignore = '*.o,*.a,__pycache__'</code>

</div>
<div class="help-para">
        In Lua using <code>vim.opt</code>:
            <code>vim.opt.wildignore = { '*.o', '*.a', '__pycache__' }</code>

</div>
<div class="help-para">
    To replicate the behavior of <a href="options.html#%3Aset%2B%3D">:set+=</a>, use:<pre>vim.opt.wildignore:append { "*.pyc", "node_modules" }</pre>

</div>
<div class="help-para">
    To replicate the behavior of <a href="options.html#%3Aset%5E%3D">:set^=</a>, use:<pre>vim.opt.wildignore:prepend { "new_first_value" }</pre>

</div>
<div class="help-para">
    To replicate the behavior of <a href="options.html#%3Aset-%3D">:set-=</a>, use:<pre>vim.opt.wildignore:remove { "node_modules" }</pre>

</div>
<div class="help-para">
    The following methods of setting a map-style option are equivalent:
        In Vimscript:
            <code>set listchars=space:_,tab:&gt;~</code>

</div>
<div class="help-para">
        In Lua using <code>vim.o</code>:
            <code>vim.o.listchars = 'space:_,tab:&gt;~'</code>

</div>
<div class="help-para">
        In Lua using <code>vim.opt</code>:
            <code>vim.opt.listchars = { space = '_', tab = '&gt;~' }</code>

</div>
<div class="help-para">
Note that <a href="lua.html#vim.opt">vim.opt</a> returns an <code>Option</code> object, not the value of the option,
which is accessed through <a href="lua.html#vim.opt%3Aget()">vim.opt:get()</a>:

</div>
<div class="help-para">
<div class="help-column_heading">    Examples:</div>

</div>
<div class="help-para">
    The following methods of getting a list-style option are equivalent:
        In Vimscript:
            <code>echo wildignore</code>

</div>
<div class="help-para">
        In Lua using <code>vim.o</code>:
            <code>print(vim.o.wildignore)</code>

</div>
<div class="help-para">
        In Lua using <code>vim.opt</code>:
            <code>vim.pretty_print(vim.opt.wildignore:get())</code>

</div>
<div class="help-para">
In any of the above examples, to replicate the behavior <a href="options.html#%3Asetlocal">:setlocal</a>, use
<code>vim.opt_local</code>. Additionally, to replicate the behavior of <a href="options.html#%3Asetglobal">:setglobal</a>, use
<code>vim.opt_global</code>.

</div>
<div class="help-para">
                                                               <a name="vim.opt%3Aget()"></a><code class="help-tag-right">vim.opt:get()</code>
Option:get()

</div>
<div class="help-para">
    Returns a lua-representation of the option. Boolean, number and string
    values will be returned in exactly the same fashion.

</div>
<div class="help-para">
    For values that are comma-separated lists, an array will be returned with
    the values as entries in the array:<pre>vim.cmd [[set wildignore=*.pyc,*.o]]

vim.pretty_print(vim.opt.wildignore:get())
-- { "*.pyc", "*.o", }

for _, ignore_pattern in ipairs(vim.opt.wildignore:get()) do
    print("Will ignore:", ignore_pattern)
end
-- Will ignore: *.pyc
-- Will ignore: *.o</pre>

</div>
<div class="help-para">
    For values that are comma-separated maps, a table will be returned with
    the names as keys and the values as entries:<pre>vim.cmd [[set listchars=space:_,tab:&gt;~]]

vim.pretty_print(vim.opt.listchars:get())
--  { space = "_", tab = "&gt;~", }

for char, representation in pairs(vim.opt.listchars:get()) do
    print(char, "=&gt;", representation)
end</pre>

</div>
<div class="help-para">
    For values that are lists of flags, a set will be returned with the flags
    as keys and <code>true</code> as entries.<pre>vim.cmd [[set formatoptions=njtcroql]]

vim.pretty_print(vim.opt.formatoptions:get())
-- { n = true, j = true, c = true, ... }

local format_opts = vim.opt.formatoptions:get()
if format_opts.j then
    print("J is enabled!")
end</pre>

</div>
<div class="help-para">
                                                            <a name="vim.opt%3Aappend()"></a><code class="help-tag-right">vim.opt:append()</code>
Option:append(value)

</div>
<div class="help-para">
    Append a value to string-style options. See <a href="options.html#%3Aset%2B%3D">:set+=</a>

</div>
<div class="help-para">
    These are equivalent:
        <code>vim.opt.formatoptions:append('j')</code>
        <code>vim.opt.formatoptions = vim.opt.formatoptions + 'j'</code>

</div>
<div class="help-para">
                                                           <a name="vim.opt%3Aprepend()"></a><code class="help-tag-right">vim.opt:prepend()</code>
Option:prepend(value)

</div>
<div class="help-para">
    Prepend a value to string-style options. See <a href="options.html#%3Aset%5E%3D">:set^=</a>

</div>
<div class="help-para">
    These are equivalent:
        <code>vim.opt.wildignore:prepend('*.o')</code>
        <code>vim.opt.wildignore = vim.opt.wildignore ^ '*.o'</code>

</div>
<div class="help-para">
                                                            <a name="vim.opt%3Aremove()"></a><code class="help-tag-right">vim.opt:remove()</code>
Option:remove(value)

</div>
<div class="help-para">
    Remove a value from string-style options. See <a href="options.html#%3Aset-%3D">:set-=</a>

</div>
<div class="help-para">
    These are equivalent:
        <code>vim.opt.wildignore:remove('*.pyc')</code>
        <code>vim.opt.wildignore = vim.opt.wildignore - '*.pyc'</code>

</div>
<div class="help-para">
<h2 class="help-heading">Lua module: vim<span class="help-heading-tags">                                                      <a name="lua-vim"></a><span class="help-tag">lua-vim</span></span></h2>


</div>
<div class="help-para">
cmd(<code>{command}</code>)                                                     <a name="vim.cmd()"></a><code class="help-tag-right">vim.cmd()</code>
    Execute Vim script commands.

</div>
<div class="help-para">
    Note that <code>vim.cmd</code> can be indexed with a command name to return a
    callable function to the command.

</div>
<div class="help-para">
    Example:<pre>vim.cmd('echo 42')
vim.cmd([[
  augroup My_group
    autocmd!
    autocmd FileType c setlocal cindent
  augroup END
]])

-- Ex command :echo "foo"
-- Note string literals need to be double quoted.
vim.cmd('echo "foo"')
vim.cmd { cmd = 'echo', args = { '"foo"' } }
vim.cmd.echo({ args = { '"foo"' } })
vim.cmd.echo('"foo"')

-- Ex command :write! myfile.txt
vim.cmd('write! myfile.txt')
vim.cmd { cmd = 'write', args = { "myfile.txt" }, bang = true }
vim.cmd.write { args = { "myfile.txt" }, bang = true }
vim.cmd.write { "myfile.txt", bang = true }

-- Ex command :colorscheme blue
vim.cmd('colorscheme blue')
vim.cmd.colorscheme('blue')</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{command}</code>  string|table Command(s) to execute. If a string, executes
                   multiple lines of Vim script at once. In this case, it is
                   an alias to <a href="api.html#nvim_exec()">nvim_exec()</a>, where <code>output</code> is set to false.
                   Thus it works identical to <a href="repeat.html#%3Asource">:source</a>. If a table, executes
                   a single command. In this case, it is an alias to
                   <a href="api.html#nvim_cmd()">nvim_cmd()</a> where <code>opts</code> is empty.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="vimindex.html#ex-cmd-index">ex-cmd-index</a>

</div>
<div class="help-para">
                                             <a name="vim.connection_failure_errmsg()"></a><code class="help-tag-right">vim.connection_failure_errmsg()</code>
connection_failure_errmsg(<code>{consequence}</code>)
    TODO: Documentation

</div>
<div class="help-para">
defer_fn(<code>{fn}</code>, <code>{timeout}</code>)                                     <a name="vim.defer_fn()"></a><code class="help-tag-right">vim.defer_fn()</code>
    Defers calling <code>fn</code> until <code>timeout</code> ms passes.

</div>
<div class="help-para">
    Use to do a one-shot timer that calls <code>fn</code> Note: The <code>{fn}</code> is <a href="lua.html#vim.schedule_wrap()">vim.schedule_wrap()</a>ped automatically, so API functions
    are safe to call.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{fn}</code>       (function) Callback to call once <code>timeout</code> expires
</div><div class="help-li" style=""> <code>{timeout}</code>  integer Number of milliseconds to wait before calling <code>fn</code>
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (table) timer luv timer object

</div>
<div class="help-para">
                                                             <a name="vim.deprecate()"></a><code class="help-tag-right">vim.deprecate()</code>
deprecate(<code>{name}</code>, <code>{alternative}</code>, <code>{version}</code>, <code>{plugin}</code>, <code>{backtrace}</code>)
    Display a deprecation notification to the user.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{name}</code>         string Deprecated function.
</div><div class="help-li" style=""> <code>{alternative}</code>  (string|nil) Preferred alternative function.
</div><div class="help-li" style=""> <code>{version}</code>      string Version in which the deprecated function will be
                       removed.
</div><div class="help-li" style=""> <code>{plugin}</code>       string|nil Plugin name that the function will be
                       removed from. Defaults to "Nvim".
</div><div class="help-li" style=""> <code>{backtrace}</code>    boolean|nil Prints backtrace. Defaults to true.
</div>
</div>
<div class="help-para">
inspect(<code>{object}</code>, <code>{options}</code>)                                   <a name="vim.inspect()"></a><code class="help-tag-right">vim.inspect()</code>
    Gets a human-readable representation of the given object.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="https://github.com/kikito/inspect.lua">https://github.com/kikito/inspect.lua</a>
        <a href="https://github.com/mpeterv/vinspect">https://github.com/mpeterv/vinspect</a>

</div>
<div class="help-para">
notify(<code>{msg}</code>, <code>{level}</code>, <code>{opts}</code>)                                  <a name="vim.notify()"></a><code class="help-tag-right">vim.notify()</code>
    Display a notification to the user.

</div>
<div class="help-para">
    This function can be overridden by plugins to display notifications using
    a custom provider (such as the system notification provider). By default,
    writes to <a href="message.html#%3Amessages">:messages</a>.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{msg}</code>    (string) Content of the notification to show to the user.
</div><div class="help-li" style=""> <code>{level}</code>  (number|nil) One of the values from <a href="lua.html#vim.log.levels">vim.log.levels</a>.
</div><div class="help-li" style=""> <code>{opts}</code>   (table|nil) Optional parameters. Unused by default.
</div>
</div>
<div class="help-para">
notify_once(<code>{msg}</code>, <code>{level}</code>, <code>{opts}</code>)                        <a name="vim.notify_once()"></a><code class="help-tag-right">vim.notify_once()</code>
    Display a notification only one time.

</div>
<div class="help-para">
    Like <a href="lua.html#vim.notify()">vim.notify()</a>, but subsequent calls with the same message will not
    display a notification.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{msg}</code>    (string) Content of the notification to show to the user.
</div><div class="help-li" style=""> <code>{level}</code>  (number|nil) One of the values from <a href="lua.html#vim.log.levels">vim.log.levels</a>.
</div><div class="help-li" style=""> <code>{opts}</code>   (table|nil) Optional parameters. Unused by default.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (boolean) true if message was displayed, else false

</div>
<div class="help-para">
on_key(<code>{fn}</code>, <code>{ns_id}</code>)                                           <a name="vim.on_key()"></a><code class="help-tag-right">vim.on_key()</code>
    Adds Lua function <code>{fn}</code> with namespace id <code>{ns_id}</code> as a listener to every,
    yes every, input key.

</div>
<div class="help-para">
    The Nvim command-line option <a href="starting.html#-w">-w</a> is related but does not support
    callbacks and cannot be toggled dynamically.

</div>
<div class="help-para">
    Note:
        <code>{fn}</code> will not be cleared by <a href="api.html#nvim_buf_clear_namespace()">nvim_buf_clear_namespace()</a>

</div>
<div class="help-para">
    Note:
        <code>{fn}</code> will receive the keys after mappings have been evaluated

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{fn}</code>     (function) Callback function. It should take one string
                 argument. On each key press, Nvim passes the key char to
                 fn(). <a href="insert.html#i_CTRL-V">i_CTRL-V</a> If <code>{fn}</code> is nil, it removes the callback for
                 the associated <code>{ns_id}</code>
</div><div class="help-li" style=""> <code>{ns_id}</code>  number? Namespace ID. If nil or 0, generates and returns a
                 new <a href="api.html#nvim_create_namespace()">nvim_create_namespace()</a> id.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (number) Namespace id associated with <code>{fn}</code>. Or count of all callbacks
        if on_key() is called without arguments.

</div>
<div class="help-para">
    Note:
        <code>{fn}</code> will be removed if an error occurs while calling.

</div>
<div class="help-para">
paste(<code>{lines}</code>, <code>{phase}</code>)                                          <a name="vim.paste()"></a><code class="help-tag-right">vim.paste()</code>
    Paste handler, invoked by <a href="api.html#nvim_paste()">nvim_paste()</a> when a conforming UI (such as the
    <a href="term.html#TUI">TUI</a>) pastes text into the editor.

</div>
<div class="help-para">
    Example: To remove ANSI color codes when pasting:<pre>vim.paste = (function(overridden)
  return function(lines, phase)
    for i,line in ipairs(lines) do
      -- Scrub ANSI color codes from paste input.
      lines[i] = line:gsub('\27%[[0-9;mK]+', '')
    end
    overridden(lines, phase)
  end
end)(vim.paste)</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{lines}</code>  string[] # <a href="builtin.html#readfile()">readfile()</a>-style list of lines to paste.
                 <a href="channel.html#channel-lines">channel-lines</a>
</div><div class="help-li" style=""> <code>{phase}</code>  paste_phase -1: "non-streaming" paste: the call contains all
                 lines. If paste is "streamed", <code>phase</code> indicates the stream state:
</div><div class="help-li" style="margin-left: 3rem;"> 1: starts the paste (exactly once)
</div><div class="help-li" style="margin-left: 3rem;"> 2: continues the paste (zero or more times)
</div><div class="help-li" style="margin-left: 3rem;"> 3: ends the paste (exactly once)
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (boolean) # false if client should cancel the paste.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="provider.html#paste">paste</a> @alias paste_phase -1 | 1 | 2 | 3

</div>
<div class="help-para">
pretty_print(<code>{...}</code>)                                       <a name="vim.pretty_print()"></a><code class="help-tag-right">vim.pretty_print()</code>
    Prints given arguments in human-readable format. Example:<pre>-- Print highlight group Normal and store it's contents in a variable.
local hl_normal = vim.pretty_print(vim.api.nvim_get_hl_by_name("Normal", true))</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        any # given arguments.

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="lua.html#vim.inspect()">vim.inspect()</a>

</div>
<div class="help-para">
region(<code>{bufnr}</code>, <code>{pos1}</code>, <code>{pos2}</code>, <code>{regtype}</code>, <code>{inclusive}</code>)         <a name="vim.region()"></a><code class="help-tag-right">vim.region()</code>
    Get a table of lines with start, end columns for a region marked by two
    points

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{bufnr}</code>      (number) of buffer
</div><div class="help-li" style=""> <code>{pos1}</code>       integer[] (line, column) tuple marking beginning of
                     region
</div><div class="help-li" style=""> <code>{pos2}</code>       integer[] (line, column) tuple marking end of region
</div><div class="help-li" style=""> <code>{regtype}</code>    (string) type of selection, see <a href="builtin.html#setreg()">setreg()</a>
</div><div class="help-li" style=""> <code>{inclusive}</code>  (boolean) indicating whether the selection is
                     end-inclusive
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        table&lt;integer, {}&gt; region lua table of the form {<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+lua.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/lua.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20end-inclusive%0A%0A%20%20%20%20Return%3A%20~%0A%20%20%20%20%20%20%20%20table%3Cinteger%2C%20%7B%7D%3E%20region%20lua%20table%20of%20the%20form%20%7Blinenr%20%3D%0A%20%20%20%20%20%20%20%20%7Bstartcol%2Cendcol%7D%7D%0A%0Aschedule_wrap(%7Bcb%7D)%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2Avim.schedule_wrap()%2A%0D%60%60%60">linenr =</a>
        <code>{startcol,endcol}</code>}

</div>
<div class="help-para">
schedule_wrap(<code>{cb}</code>)                                      <a name="vim.schedule_wrap()"></a><code class="help-tag-right">vim.schedule_wrap()</code>
    Defers callback <code>cb</code> until the Nvim API is safe to call.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{cb}</code>  (function)
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (function)

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="lua.html#lua-loop-callbacks">lua-loop-callbacks</a>
        <a href="lua.html#vim.schedule()">vim.schedule()</a>
        <a href="lua.html#vim.in_fast_event()">vim.in_fast_event()</a>

</div>
<div class="help-para">
deep_equal(<code>{a}</code>, <code>{b}</code>)                                        <a name="vim.deep_equal()"></a><code class="help-tag-right">vim.deep_equal()</code>
    Deep compare values for equality

</div>
<div class="help-para">
    Tables are compared recursively unless they both provide the <code>eq</code> metamethod. All other types are compared using the equality <code>==</code> operator.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{a}</code>  any First value
</div><div class="help-li" style=""> <code>{b}</code>  any Second value
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (boolean) <code>true</code> if values are equals, else <code>false</code>

</div>
<div class="help-para">
deepcopy(<code>{orig}</code>)                                              <a name="vim.deepcopy()"></a><code class="help-tag-right">vim.deepcopy()</code>
    Returns a deep copy of the given object. Non-table objects are copied as
    in a typical Lua assignment, whereas table objects are copied recursively.
    Functions are naively copied, so functions in the copied table point to
    the same functions as those in the input table. Userdata and threads are
    not copied and will throw an error.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{orig}</code>  (table) Table to copy
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (table) Table of copied keys and (nested) values.

</div>
<div class="help-para">
defaulttable(<code>{create}</code>)                                    <a name="vim.defaulttable()"></a><code class="help-tag-right">vim.defaulttable()</code>
    Creates a table whose members are automatically created when accessed, if
    they don't already exist.

</div>
<div class="help-para">
    They mimic defaultdict in python.

</div>
<div class="help-para">
    If <code>{create}</code> is <code>nil</code>, this will create a defaulttable whose constructor
    function is this function, effectively allowing to create nested tables on
    the fly:
<pre>local a = vim.defaulttable()
a.b.c = 1</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{create}</code>  (function|nil) The function called to create a missing
                  value.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (table) Empty table with metamethod

</div>
<div class="help-para">
endswith(<code>{s}</code>, <code>{suffix}</code>)                                       <a name="vim.endswith()"></a><code class="help-tag-right">vim.endswith()</code>
    Tests if <code>s</code> ends with <code>suffix</code>.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{s}</code>       (string) String
</div><div class="help-li" style=""> <code>{suffix}</code>  (string) Suffix to match
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (boolean) <code>true</code> if <code>suffix</code> is a suffix of <code>s</code>

</div>
<div class="help-para">
gsplit(<code>{s}</code>, <code>{sep}</code>, <code>{plain}</code>)                                     <a name="vim.gsplit()"></a><code class="help-tag-right">vim.gsplit()</code>
    Splits a string at each instance of a separator.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{s}</code>      (string) String to split
</div><div class="help-li" style=""> <code>{sep}</code>    (string) Separator or pattern
</div><div class="help-li" style=""> <code>{plain}</code>  (boolean|nil) If <code>true</code> use <code>sep</code> literally (passed to
                 string.find)
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (function) Iterator over the split components

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="lua.html#vim.split()">vim.split()</a>
        <a href="https://www.lua.org/pil/20.2.html">https://www.lua.org/pil/20.2.html</a>
        <a href="http://lua-users.org/wiki/StringLibraryTutorial">http://lua-users.org/wiki/StringLibraryTutorial</a>

</div>
<div class="help-para">
is_callable(<code>{f}</code>)                                           <a name="vim.is_callable()"></a><code class="help-tag-right">vim.is_callable()</code>
    Returns true if object <code>f</code> can be called as a function.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{f}</code>  any Any object
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (boolean) <code>true</code> if <code>f</code> is callable, else <code>false</code>

</div>
<div class="help-para">
list_extend(<code>{dst}</code>, <code>{src}</code>, <code>{start}</code>, <code>{finish}</code>)               <a name="vim.list_extend()"></a><code class="help-tag-right">vim.list_extend()</code>
    Extends a list-like table with the values of another list-like table.

</div>
<div class="help-para">
    NOTE: This mutates dst!

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{dst}</code>     (table) List which will be modified and appended to
</div><div class="help-li" style=""> <code>{src}</code>     (table) List from which values will be inserted
</div><div class="help-li" style=""> <code>{start}</code>   (number|nil) Start index on src. Defaults to 1
</div><div class="help-li" style=""> <code>{finish}</code>  (number|nil) Final index on src. Defaults to <code>#src</code>
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (table) dst

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="lua.html#vim.tbl_extend()">vim.tbl_extend()</a>

</div>
<div class="help-para">
list_slice(<code>{list}</code>, <code>{start}</code>, <code>{finish}</code>)                       <a name="vim.list_slice()"></a><code class="help-tag-right">vim.list_slice()</code>
    Creates a copy of a table containing only elements from start to end
    (inclusive)

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{list}</code>    (list) Table
</div><div class="help-li" style=""> <code>{start}</code>   (number) Start range of slice
</div><div class="help-li" style=""> <code>{finish}</code>  (number) End range of slice
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (list) Copy of table sliced from start to finish (inclusive)

</div>
<div class="help-para">
pesc(<code>{s}</code>)                                                         <a name="vim.pesc()"></a><code class="help-tag-right">vim.pesc()</code>
    Escapes magic chars in <a href="lua.html#lua-patterns">lua-patterns</a>.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{s}</code>  (string) String to escape
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (string) %-escaped pattern string

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="https://github.com/rxi/lume">https://github.com/rxi/lume</a>

</div>
<div class="help-para">
split(<code>{s}</code>, <code>{sep}</code>, <code>{kwargs}</code>)                                      <a name="vim.split()"></a><code class="help-tag-right">vim.split()</code>
    Splits a string at each instance of a separator.

</div>
<div class="help-para">
    Examples:<pre>split(":aa::b:", ":")     =&gt; {'','aa','','b',''}
split("axaby", "ab?")     =&gt; {'','x','y'}
split("x*yz*o", "*", {plain=true})  =&gt; {'x','yz','o'}
split("|x|y|z|", "|", {trimempty=true}) =&gt; {'x', 'y', 'z'}</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{s}</code>       (string) String to split
</div><div class="help-li" style=""> <code>{sep}</code>     (string) Separator or pattern
</div><div class="help-li" style=""> <code>{kwargs}</code>  (<code>{plain: boolean, trimempty: boolean}</code>|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+lua.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/lua.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%20Parameters%3A%20~%0A%20%20%20%20%20%20%E2%80%A2%20%7Bs%7D%20%20%20%20%20%20%20(string)%20String%20to%20split%0A%20%20%20%20%20%20%E2%80%A2%20%7Bsep%7D%20%20%20%20%20(string)%20Separator%20or%20pattern%0A%20%20%20%20%20%20%E2%80%A2%20%7Bkwargs%7D%20%20(%7Bplain%3A%20boolean%2C%20trimempty%3A%20boolean%7D%7Cnil)%20Keyword%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20arguments%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%E2%80%A2%20plain%3A%20(boolean)%20If%20%60true%60%20use%20%60sep%60%20literally%20(passed%20to%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20string.find)%0D%60%60%60">nil)</a> Keyword
                  arguments:
</div><div class="help-li" style="margin-left: 3rem;"> plain: (boolean) If <code>true</code> use <code>sep</code> literally (passed to
                    string.find)
</div><div class="help-li" style="margin-left: 3rem;"> trimempty: (boolean) If <code>true</code> remove empty items from the
                    front and back of the list
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        string[] List of split components

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="lua.html#vim.gsplit()">vim.gsplit()</a>

</div>
<div class="help-para">
startswith(<code>{s}</code>, <code>{prefix}</code>)                                   <a name="vim.startswith()"></a><code class="help-tag-right">vim.startswith()</code>
    Tests if <code>s</code> starts with <code>prefix</code>.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{s}</code>       (string) String
</div><div class="help-li" style=""> <code>{prefix}</code>  (string) Prefix to match
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (boolean) <code>true</code> if <code>prefix</code> is a prefix of <code>s</code>

</div>
<div class="help-para">
tbl_add_reverse_lookup(<code>{o}</code>)                     <a name="vim.tbl_add_reverse_lookup()"></a><code class="help-tag-right">vim.tbl_add_reverse_lookup()</code>
    Add the reverse lookup values to an existing table. For example:
    <code>tbl_add_reverse_lookup { A = 1 } == { [1] = 'A', A = 1 }</code>

</div>
<div class="help-para">
    Note that this modifies the input.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{o}</code>  (table) Table to add the reverse to
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (table) o

</div>
<div class="help-para">
tbl_contains(<code>{t}</code>, <code>{value}</code>)                                <a name="vim.tbl_contains()"></a><code class="help-tag-right">vim.tbl_contains()</code>
    Checks if a list-like (vector) table contains <code>value</code>.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{t}</code>      (table) Table to check
</div><div class="help-li" style=""> <code>{value}</code>  any Value to compare
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (boolean) <code>true</code> if <code>t</code> contains <code>value</code>

</div>
<div class="help-para">
tbl_count(<code>{t}</code>)                                               <a name="vim.tbl_count()"></a><code class="help-tag-right">vim.tbl_count()</code>
    Counts the number of non-nil values in table <code>t</code>.
<pre>vim.tbl_count({ a=1, b=2 }) =&gt; 2
vim.tbl_count({ 1, 2 }) =&gt; 2</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{t}</code>  (table) Table
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (number) Number of non-nil values in table

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="https://github.com/Tieske/Penlight/blob/master/lua/pl/tablex.lua">https://github.com/Tieske/Penlight/blob/master/lua/pl/tablex.lua</a>

</div>
<div class="help-para">
tbl_deep_extend(<code>{behavior}</code>, <code>{...}</code>)                     <a name="vim.tbl_deep_extend()"></a><code class="help-tag-right">vim.tbl_deep_extend()</code>
    Merges recursively two or more map-like tables.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{behavior}</code>  (string) Decides what to do if a key is found in more than
                    one map:
</div><div class="help-li" style="margin-left: 3rem;"> "error": raise an error
</div><div class="help-li" style="margin-left: 3rem;"> "keep": use value from the leftmost map
</div><div class="help-li" style="margin-left: 3rem;"> "force": use value from the rightmost map
</div><div class="help-li" style=""> <code>{...}</code>       (table) Two or more map-like tables
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (table) Merged table

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="lua.html#vim.tbl_extend()">vim.tbl_extend()</a>

</div>
<div class="help-para">
tbl_extend(<code>{behavior}</code>, <code>{...}</code>)                               <a name="vim.tbl_extend()"></a><code class="help-tag-right">vim.tbl_extend()</code>
    Merges two or more map-like tables.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{behavior}</code>  (string) Decides what to do if a key is found in more than
                    one map:
</div><div class="help-li" style="margin-left: 3rem;"> "error": raise an error
</div><div class="help-li" style="margin-left: 3rem;"> "keep": use value from the leftmost map
</div><div class="help-li" style="margin-left: 3rem;"> "force": use value from the rightmost map
</div><div class="help-li" style=""> <code>{...}</code>       (table) Two or more map-like tables
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (table) Merged table

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="builtin.html#extend()">extend()</a>

</div>
<div class="help-para">
tbl_filter(<code>{func}</code>, <code>{t}</code>)                                     <a name="vim.tbl_filter()"></a><code class="help-tag-right">vim.tbl_filter()</code>
    Filter a table using a predicate function

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{func}</code>  (function) Function
</div><div class="help-li" style=""> <code>{t}</code>     (table) Table
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (table) Table of filtered values

</div>
<div class="help-para">
tbl_flatten(<code>{t}</code>)                                           <a name="vim.tbl_flatten()"></a><code class="help-tag-right">vim.tbl_flatten()</code>
    Creates a copy of a list-like table such that any nested tables are
    "unrolled" and appended to the result.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{t}</code>  (table) List-like table
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (table) Flattened copy of the given list-like table

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        From <a href="https://github.com/premake/premake-core/blob/master/src/base/table.lua">https://github.com/premake/premake-core/blob/master/src/base/table.lua</a>

</div>
<div class="help-para">
tbl_get(<code>{o}</code>, <code>{...}</code>)                                            <a name="vim.tbl_get()"></a><code class="help-tag-right">vim.tbl_get()</code>
    Index into a table (first argument) via string keys passed as subsequent
    arguments. Return <code>nil</code> if the key does not exist.

</div>
<div class="help-para">
    Examples:<pre>vim.tbl_get({ key = { nested_key = true }}, 'key', 'nested_key') == true
vim.tbl_get({ key = {}}, 'key', 'nested_key') == nil</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{o}</code>    (table) Table to index
</div><div class="help-li" style=""> <code>{...}</code>  (string) Optional strings (0 or more, variadic) via which to
               index the table
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        any Nested value indexed by key (if it exists), else nil

</div>
<div class="help-para">
tbl_isempty(<code>{t}</code>)                                           <a name="vim.tbl_isempty()"></a><code class="help-tag-right">vim.tbl_isempty()</code>
    Checks if a table is empty.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{t}</code>  (table) Table to check
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (boolean) <code>true</code> if <code>t</code> is empty

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="https://github.com/premake/premake-core/blob/master/src/base/table.lua">https://github.com/premake/premake-core/blob/master/src/base/table.lua</a>

</div>
<div class="help-para">
tbl_islist(<code>{t}</code>)                                             <a name="vim.tbl_islist()"></a><code class="help-tag-right">vim.tbl_islist()</code>
    Tests if a Lua table can be treated as an array.

</div>
<div class="help-para">
    Empty table <code>{}</code> is assumed to be an array, unless it was created by
    <a href="lua.html#vim.empty_dict()">vim.empty_dict()</a> or returned as a dict-like <a href="api.html#API">API</a> or Vimscript result,
    for example from <a href="builtin.html#rpcrequest()">rpcrequest()</a> or <a href="lua.html#vim.fn">vim.fn</a>.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{t}</code>  (table) Table
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (boolean) <code>true</code> if array-like table, else <code>false</code>

</div>
<div class="help-para">
tbl_keys(<code>{t}</code>)                                                 <a name="vim.tbl_keys()"></a><code class="help-tag-right">vim.tbl_keys()</code>
    Return a list of all keys used in a table. However, the order of the
    return table of keys is not guaranteed.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{t}</code>  (table) Table
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (list) List of keys

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        From <a href="https://github.com/premake/premake-core/blob/master/src/base/table.lua">https://github.com/premake/premake-core/blob/master/src/base/table.lua</a>

</div>
<div class="help-para">
tbl_map(<code>{func}</code>, <code>{t}</code>)                                           <a name="vim.tbl_map()"></a><code class="help-tag-right">vim.tbl_map()</code>
    Apply a function to all values of a table.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{func}</code>  (function) Function
</div><div class="help-li" style=""> <code>{t}</code>     (table) Table
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (table) Table of transformed values

</div>
<div class="help-para">
tbl_values(<code>{t}</code>)                                             <a name="vim.tbl_values()"></a><code class="help-tag-right">vim.tbl_values()</code>
    Return a list of all values used in a table. However, the order of the
    return table of values is not guaranteed.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{t}</code>  (table) Table
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (list) List of values

</div>
<div class="help-para">
trim(<code>{s}</code>)                                                         <a name="vim.trim()"></a><code class="help-tag-right">vim.trim()</code>
    Trim whitespace (Lua pattern "%s") from both sides of a string.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{s}</code>  (string) String to trim
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (string) String with whitespace removed from its beginning and end

</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="https://www.lua.org/pil/20.2.html">https://www.lua.org/pil/20.2.html</a>

</div>
<div class="help-para">
validate(<code>{opt}</code>)                                               <a name="vim.validate()"></a><code class="help-tag-right">vim.validate()</code>
    Validates a parameter specification (types and values).

</div>
<div class="help-para">
    Usage example:<pre>function user.new(name, age, hobbies)
  vim.validate{
    name={name, 'string'},
    age={age, 'number'},
    hobbies={hobbies, 'table'},
  }
  ...
end</pre>

</div>
<div class="help-para">
    Examples with explicit argument values (can be run directly):<pre>vim.validate{arg1={{'foo'}, 'table'}, arg2={'foo', 'string'}}
   =&gt; NOP (success)

vim.validate{arg1={1, 'table'}}
   =&gt; error('arg1: expected table, got number')

vim.validate{arg1={3, function(a) return (a % 2) == 0 end, 'even number'}}
   =&gt; error('arg1: expected even number, got 3')</pre>

</div>
<div class="help-para">
    If multiple types are valid they can be given as a list.<pre>vim.validate{arg1={{'foo'}, {'table', 'string'}}, arg2={'foo', {'table', 'string'}}}
   =&gt; NOP (success)

vim.validate{arg1={1, {'string', table'}}}
   =&gt; error('arg1: expected string|table, got number')</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{opt}</code>  (table) Names of parameters to validate. Each key is a
               parameter name; each value is a tuple in one of these forms:
               1. (arg_value, type_name, optional)
</div><div class="help-li" style="margin-left: 3rem;"> arg_value: argument value
</div><div class="help-li" style="margin-left: 3rem;"> type_name: string|table type name, one of: ("table", "t",
                    "string", "s", "number", "n", "boolean", "b", "function",
                    "f", "nil", "thread", "userdata") or list of them.
</div><div class="help-li" style="margin-left: 3rem;"> optional: (optional) boolean, if true, <code>nil</code> is valid
</div>
</div>
<div class="help-para">
               2. (arg_value, fn, msg)
<div class="help-li" style=""> arg_value: argument value
</div><div class="help-li" style=""> fn: any function accepting one argument, returns true if
                    and only if the argument is valid. Can optionally return
                    an additional informative error message as the second
                    returned value.
</div><div class="help-li" style=""> msg: (optional) error string if validation fails
</div>
</div>
<div class="help-para">
<h2 class="help-heading">Lua module: uri<span class="help-heading-tags">                                                      <a name="lua-uri"></a><span class="help-tag">lua-uri</span></span></h2>


</div>
<div class="help-para">
uri_from_bufnr(<code>{bufnr}</code>)                                 <a name="vim.uri_from_bufnr()"></a><code class="help-tag-right">vim.uri_from_bufnr()</code>
    Get a URI from a bufnr

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{bufnr}</code>  (number)
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (string) URI

</div>
<div class="help-para">
uri_from_fname(<code>{path}</code>)                                  <a name="vim.uri_from_fname()"></a><code class="help-tag-right">vim.uri_from_fname()</code>
    Get a URI from a file path.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{path}</code>  (string) Path to file
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (string) URI

</div>
<div class="help-para">
uri_to_bufnr(<code>{uri}</code>)                                       <a name="vim.uri_to_bufnr()"></a><code class="help-tag-right">vim.uri_to_bufnr()</code>
    Get the buffer for a uri. Creates a new unloaded buffer if no buffer for
    the uri already exists.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{uri}</code>  (string)
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (number) bufnr

</div>
<div class="help-para">
uri_to_fname(<code>{uri}</code>)                                       <a name="vim.uri_to_fname()"></a><code class="help-tag-right">vim.uri_to_fname()</code>
    Get a filename from a URI

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{uri}</code>  (string)
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (string) filename or unchanged URI for non-file URIs

</div>
<div class="help-para">
<h2 class="help-heading">Lua module: ui<span class="help-heading-tags">                                                        <a name="lua-ui"></a><span class="help-tag">lua-ui</span></span></h2>


</div>
<div class="help-para">
input(<code>{opts}</code>, <code>{on_confirm}</code>)                                   <a name="vim.ui.input()"></a><code class="help-tag-right">vim.ui.input()</code>
    Prompts the user for input

</div>
<div class="help-para">
    Example:<pre>vim.ui.input({ prompt = 'Enter value for shiftwidth: ' }, function(input)
    vim.o.shiftwidth = tonumber(input)
end)</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{opts}</code>        (table) Additional options. See <a href="builtin.html#input()">input()</a>
</div><div class="help-li" style="margin-left: 3rem;"> prompt (string|nil) Text of the prompt
</div><div class="help-li" style="margin-left: 3rem;"> default (string|nil) Default reply to the input
</div><div class="help-li" style="margin-left: 3rem;"> completion (string|nil) Specifies type of completion
                        supported for input. Supported types are the same that
                        can be supplied to a user-defined command using the
                        "-complete=" argument. See <a href="map.html#%3Acommand-completion">:command-completion</a>
</div><div class="help-li" style="margin-left: 3rem;"> highlight (function) Function that will be used for
                        highlighting user inputs.
</div><div class="help-li" style=""> <code>{on_confirm}</code>  (function) ((input|nil) -&gt; ()) Called once the user
                      confirms or abort the input. <code>input</code> is what the user
                      typed (it might be an empty string if nothing was
                      entered), or <code>nil</code> if the user aborted the dialog.
</div>
</div>
<div class="help-para">
select(<code>{items}</code>, <code>{opts}</code>, <code>{on_choice}</code>)                         <a name="vim.ui.select()"></a><code class="help-tag-right">vim.ui.select()</code>
    Prompts the user to pick a single item from a collection of entries

</div>
<div class="help-para">
    Example:<pre>vim.ui.select({ 'tabs', 'spaces' }, {
    prompt = 'Select tabs or spaces:',
    format_item = function(item)
        return "I'd like to choose " .. item
    end,
}, function(choice)
    if choice == 'spaces' then
        vim.o.expandtab = true
    else
        vim.o.expandtab = false
    end
end)</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{items}</code>      (table) Arbitrary items
</div><div class="help-li" style=""> <code>{opts}</code>       (table) Additional options
</div><div class="help-li" style="margin-left: 3rem;"> prompt (string|nil) Text of the prompt. Defaults to
                       <code>Select one of:</code>
</div><div class="help-li" style="margin-left: 3rem;"> format_item (function item -&gt; text) Function to format
                       an individual item from <code>items</code>. Defaults to
                       <code>tostring</code>.
</div><div class="help-li" style="margin-left: 3rem;"> kind (string|nil) Arbitrary hint string indicating the
                       item shape. Plugins reimplementing <code>vim.ui.select</code> may
                       wish to use this to infer the structure or semantics of
                       <code>items</code>, or the context in which select() was called.
</div><div class="help-li" style=""> <code>{on_choice}</code>  (function) ((item|nil, idx|nil) -&gt; ()) Called once the
                     user made a choice. <code>idx</code> is the 1-based index of <code>item</code>
                     within <code>items</code>. <code>nil</code> if the user aborted the dialog.
</div>
</div>
<div class="help-para">
<h2 class="help-heading">Lua module: filetype<span class="help-heading-tags">                                            <a name="lua-filetype"></a><span class="help-tag">lua-filetype</span></span></h2>


</div>
<div class="help-para">
add(<code>{filetypes}</code>)                                          <a name="vim.filetype.add()"></a><code class="help-tag-right">vim.filetype.add()</code>
    Add new filetype mappings.

</div>
<div class="help-para">
    Filetype mappings can be added either by extension or by filename (either
    the "tail" or the full file path). The full file path is checked first,
    followed by the file name. If a match is not found using the filename,
    then the filename is matched against the list of <a href="lua.html#lua-patterns">lua-patterns</a> (sorted by
    priority) until a match is found. Lastly, if pattern matching does not
    find a filetype, then the file extension is used.

</div>
<div class="help-para">
    The filetype can be either a string (in which case it is used as the
    filetype directly) or a function. If a function, it takes the full path
    and buffer number of the file as arguments (along with captures from the
    matched pattern, if any) and should return a string that will be used as
    the buffer's filetype. Optionally, the function can return a second
    function value which, when called, modifies the state of the buffer. This
    can be used to, for example, set filetype-specific buffer variables.

</div>
<div class="help-para">
    Filename patterns can specify an optional priority to resolve cases when a
    file path matches multiple patterns. Higher priorities are matched first.
    When omitted, the priority defaults to 0. A pattern can contain
    environment variables of the form "${SOME_VAR}" that will be automatically
    expanded. If the environment variable is not set, the pattern won't be
    matched.

</div>
<div class="help-para">
    See $VIMRUNTIME/lua/vim/filetype.lua for more examples.

</div>
<div class="help-para">
    Example:<pre>vim.filetype.add({
  extension = {
    foo = 'fooscript',
    bar = function(path, bufnr)
      if some_condition() then
        return 'barscript', function(bufnr)
          -- Set a buffer variable
          vim.b[bufnr].barscript_version = 2
        end
      end
      return 'bar'
    end,
  },
  filename = {
    ['.foorc'] = 'toml',
    ['/etc/foo/config'] = 'toml',
  },
  pattern = {
    ['.*/etc/foo/.*'] = 'fooscript',
    -- Using an optional priority
    ['.*/etc/foo/.*%.conf'] = { 'dosini', { priority = 10 } },
    -- A pattern containing an environment variable
    ['${XDG_CONFIG_HOME}/foo/git'] = 'git',
    ['README.(a+)$'] = function(path, bufnr, ext)
      if ext == 'md' then
        return 'markdown'
      elseif ext == 'rst' then
        return 'rst'
      end
    end,
  },
})</pre>

</div>
<div class="help-para">
    To add a fallback match on contents, use<pre>vim.filetype.add {
  pattern = {
    ['.*'] = {
      priority = -math.huge,
      function(path, bufnr)
        local content = vim.filetype.getlines(bufnr, 1)
        if vim.filetype.matchregex(content, [[^#!.*\&lt;mine\&gt;]]) then
          return 'mine'
        elseif vim.filetype.matchregex(content, [[\&lt;drawing\&gt;]]) then
          return 'drawing'
        end
      end,
    },
  },
}</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{filetypes}</code>  (table) A table containing new filetype maps (see
                     example).
</div>
</div>
<div class="help-para">
match(<code>{args}</code>)                                           <a name="vim.filetype.match()"></a><code class="help-tag-right">vim.filetype.match()</code>
    Perform filetype detection.

</div>
<div class="help-para">
    The filetype can be detected using one of three methods:
    1. Using an existing buffer
    2. Using only a file name
    3. Using only file contents

</div>
<div class="help-para">
    Of these, option 1 provides the most accurate result as it uses both the
    buffer's filename and (optionally) the buffer contents. Options 2 and 3
    can be used without an existing buffer, but may not always provide a match
    in cases where the filename (or contents) cannot unambiguously determine
    the filetype.

</div>
<div class="help-para">
    Each of the three options is specified using a key to the single argument
    of this function. Example:
<pre>-- Using a buffer number
vim.filetype.match({ buf = 42 })

-- Override the filename of the given buffer
vim.filetype.match({ buf = 42, filename = 'foo.c' })

-- Using a filename without a buffer
vim.filetype.match({ filename = 'main.lua' })

-- Using file contents
vim.filetype.match({ contents = {'#!/usr/bin/env bash'} })</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{args}</code>  (table) Table specifying which matching strategy to use.
                Accepted keys are:
</div><div class="help-li" style="margin-left: 3rem;"> buf (number): Buffer number to use for matching. Mutually
                  exclusive with <code>{contents}</code>
</div><div class="help-li" style="margin-left: 3rem;"> filename (string): Filename to use for matching. When <code>{buf}</code>
                  is given, defaults to the filename of the given buffer
                  number. The file need not actually exist in the filesystem.
                  When used without <code>{buf}</code> only the name of the file is used
                  for filetype matching. This may result in failure to detect
                  the filetype in cases where the filename alone is not enough
                  to disambiguate the filetype.
</div><div class="help-li" style="margin-left: 3rem;"> contents (table): An array of lines representing file
                  contents to use for matching. Can be used with <code>{filename}</code>.
                  Mutually exclusive with <code>{buf}</code>.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (string|nil) If a match was found, the matched filetype.
        (function|nil) A function that modifies buffer state when called (for
        example, to set some filetype specific buffer variables). The function
        accepts a buffer number as its only argument.

</div>
<div class="help-para">
<h2 class="help-heading">Lua module: keymap<span class="help-heading-tags">                                                <a name="lua-keymap"></a><span class="help-tag">lua-keymap</span></span></h2>


</div>
<div class="help-para">
del(<code>{modes}</code>, <code>{lhs}</code>, <code>{opts}</code>)                                 <a name="vim.keymap.del()"></a><code class="help-tag-right">vim.keymap.del()</code>
    Remove an existing mapping. Examples:<pre>vim.keymap.del('n', 'lhs')

vim.keymap.del({'n', 'i', 'v'}, '&lt;leader&gt;w', { buffer = 5 })</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{opts}</code>  (table|nil) A table of optional arguments:
</div><div class="help-li" style="margin-left: 3rem;"> buffer: (number or boolean) Remove a mapping from the given
                  buffer. When "true" or 0, use the current buffer.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="lua.html#vim.keymap.set()">vim.keymap.set()</a>

</div>
<div class="help-para">
set(<code>{mode}</code>, <code>{lhs}</code>, <code>{rhs}</code>, <code>{opts}</code>)                           <a name="vim.keymap.set()"></a><code class="help-tag-right">vim.keymap.set()</code>
    Add a new <a href="map.html#mapping">mapping</a>. Examples:<pre>-- Can add mapping to Lua functions
vim.keymap.set('n', 'lhs', function() print("real lua function") end)

-- Can use it to map multiple modes
vim.keymap.set({'n', 'v'}, '&lt;leader&gt;lr', vim.lsp.buf.references, { buffer=true })

-- Can add mapping for specific buffer
vim.keymap.set('n', '&lt;leader&gt;w', "&lt;cmd&gt;w&lt;cr&gt;", { silent = true, buffer = 5 })

-- Expr mappings
vim.keymap.set('i', '&lt;Tab&gt;', function()
  return vim.fn.pumvisible() == 1 and "&lt;C-n&gt;" or "&lt;Tab&gt;"
end, { expr = true })
-- &lt;Plug&gt; mappings
vim.keymap.set('n', '[%', '&lt;Plug&gt;(MatchitNormalMultiBackward)')</pre>

</div>
<div class="help-para">
    Note that in a mapping like:<pre>vim.keymap.set('n', 'asdf', require('jkl').my_fun)</pre>

</div>
<div class="help-para">
    the <code>require('jkl')</code> gets evaluated during this call in order to access the function. If you
    want to avoid this cost at startup you can wrap it in a function, for
    example:<pre>vim.keymap.set('n', 'asdf', function() return require('jkl').my_fun() end)</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{mode}</code>  string|table Same mode short names as <a href="api.html#nvim_set_keymap()">nvim_set_keymap()</a>. Can
                also be list of modes to create mapping on multiple modes.
</div><div class="help-li" style=""> <code>{lhs}</code>   (string) Left-hand side <a href="map.html#%7Blhs%7D">{lhs}</a> of the mapping.
</div><div class="help-li" style=""> <code>{rhs}</code>   string|function Right-hand side <a href="map.html#%7Brhs%7D">{rhs}</a> of the mapping. Can
                also be a Lua function.
</div><div class="help-li" style=""> <code>{opts}</code>  (table|nil) A table of <a href="map.html#%3Amap-arguments">:map-arguments</a>.
</div><div class="help-li" style="margin-left: 3rem;"> Accepts options accepted by the <code>{opts}</code> parameter in
                  <a href="api.html#nvim_set_keymap()">nvim_set_keymap()</a>, with the following notable differences:
</div><div class="help-li" style="margin-left: 4rem;"> replace_keycodes: Defaults to <code>true</code> if "expr" is <code>true</code>.
</div><div class="help-li" style="margin-left: 4rem;"> noremap: Always overridden with the inverse of "remap"
                    (see below).
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> In addition to those options, the table accepts the
                  following keys:
</div><div class="help-li" style="margin-left: 3rem;"> buffer: (number or boolean) Add a mapping to the given
                    buffer. When <code>0</code> or <code>true</code>, use the current buffer.
</div><div class="help-li" style="margin-left: 3rem;"> remap: (boolean) Make the mapping recursive. This is the
                    inverse of the "noremap" option from <a href="api.html#nvim_set_keymap()">nvim_set_keymap()</a>.
                    Defaults to <code>false</code>.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    See also:</div>
        <a href="api.html#nvim_set_keymap()">nvim_set_keymap()</a>

</div>
<div class="help-para">
<h2 class="help-heading">Lua module: fs<span class="help-heading-tags">                                                        <a name="lua-fs"></a><span class="help-tag">lua-fs</span></span></h2>


</div>
<div class="help-para">
basename(<code>{file}</code>)                                           <a name="vim.fs.basename()"></a><code class="help-tag-right">vim.fs.basename()</code>
    Return the basename of the given file or directory

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{file}</code>  (string) File or directory
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (string) Basename of <code>{file}</code>

</div>
<div class="help-para">
dir(<code>{path}</code>)                                                     <a name="vim.fs.dir()"></a><code class="help-tag-right">vim.fs.dir()</code>
    Return an iterator over the files and directories located in <code>{path}</code>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{path}</code>  (string) An absolute or relative path to the directory to
                iterate over. The path is first normalized
                <a href="lua.html#vim.fs.normalize()">vim.fs.normalize()</a>.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        Iterator over files and directories in <code>{path}</code>. Each iteration yields
        two values: name and type. Each "name" is the basename of the file or
        directory relative to <code>{path}</code>. Type is one of "file" or "directory".

</div>
<div class="help-para">
dirname(<code>{file}</code>)                                             <a name="vim.fs.dirname()"></a><code class="help-tag-right">vim.fs.dirname()</code>
    Return the parent directory of the given file or directory

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{file}</code>  (string) File or directory
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (string) Parent directory of <code>{file}</code>

</div>
<div class="help-para">
find(<code>{names}</code>, <code>{opts}</code>)                                          <a name="vim.fs.find()"></a><code class="help-tag-right">vim.fs.find()</code>
    Find files or directories in the given path.

</div>
<div class="help-para">
    Finds any files or directories given in <code>{names}</code> starting from <code>{path}</code>. If
    <code>{upward}</code> is "true" then the search traverses upward through parent
    directories; otherwise, the search traverses downward. Note that downward
    searches are recursive and may search through many directories! If <code>{stop}</code>
    is non-nil, then the search stops when the directory given in <code>{stop}</code> is
    reached. The search terminates when <code>{limit}</code> (default 1) matches are found.
    The search can be narrowed to find only files or or only directories by
    specifying <code>{type}</code> to be "file" or "directory", respectively.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{names}</code>  (string|table|fun(name: string): boolean) Names of the files
                 and directories to find. Must be base names, paths and globs
                 are not supported. If a function it is called per file and
                 dir within the traversed directories to test if they match.
</div><div class="help-li" style=""> <code>{opts}</code>   (table) Optional keyword arguments:
</div><div class="help-li" style="margin-left: 3rem;"> path (string): Path to begin searching from. If omitted,
                   the current working directory is used.
</div><div class="help-li" style="margin-left: 3rem;"> upward (boolean, default false): If true, search upward
                   through parent directories. Otherwise, search through child
                   directories (recursively).
</div><div class="help-li" style="margin-left: 3rem;"> stop (string): Stop searching when this directory is
                   reached. The directory itself is not searched.
</div><div class="help-li" style="margin-left: 3rem;"> type (string): Find only files ("file") or directories
                   ("directory"). If omitted, both files and directories that
                   match <code>{name}</code> are included.
</div><div class="help-li" style="margin-left: 3rem;"> limit (number, default 1): Stop the search after finding
                   this many matches. Use <code>math.huge</code> to place no limit on the
                   number of matches.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (table) The paths of all matching files or directories

</div>
<div class="help-para">
normalize(<code>{path}</code>)                                         <a name="vim.fs.normalize()"></a><code class="help-tag-right">vim.fs.normalize()</code>
    Normalize a path to a standard format. A tilde (~) character at the
    beginning of the path is expanded to the user's home directory and any
    backslash (\) characters are converted to forward slashes (/). Environment
    variables are also expanded.

</div>
<div class="help-para">
    Example:<pre>vim.fs.normalize('C:\Users\jdoe')
=&gt; 'C:/Users/jdoe'

vim.fs.normalize('~/src/neovim')
=&gt; '/home/jdoe/src/neovim'

vim.fs.normalize('$XDG_CONFIG_HOME/nvim/init.vim')
=&gt; '/Users/jdoe/.config/nvim/init.vim'</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{path}</code>  (string) Path to normalize
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (string) Normalized path

</div>
<div class="help-para">
parents(<code>{start}</code>)                                            <a name="vim.fs.parents()"></a><code class="help-tag-right">vim.fs.parents()</code>
    Iterate over all the parents of the given file or directory.

</div>
<div class="help-para">
    Example:<pre>local root_dir
for dir in vim.fs.parents(vim.api.nvim_buf_get_name(0)) do
  if vim.fn.isdirectory(dir .. "/.git") == 1 then
    root_dir = dir
    break
  end
end

if root_dir then
  print("Found git repository at", root_dir)
end</pre>

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{start}</code>  (string) Initial file or directory.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (function) Iterator

</div>
<div class="help-para">
<h2 class="help-heading">Lua module: secure<span class="help-heading-tags">                                                <a name="lua-secure"></a><span class="help-tag">lua-secure</span></span></h2>


</div>
<div class="help-para">
read(<code>{path}</code>)                                               <a name="vim.secure.read()"></a><code class="help-tag-right">vim.secure.read()</code>
    Attempt to read the file at <code>{path}</code> prompting the user if the file should
    be trusted. The user's choice is persisted in a trust database at
    $XDG_STATE_HOME/nvim/trust.

</div>
<div class="help-para">
<div class="help-column_heading">    Parameters:</div>
<div class="help-li" style=""> <code>{path}</code>  (string) Path to a file to read.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">    Return:</div>
        (string|nil) The contents of the given file if it exists and is
        trusted, or nil otherwise.

</div>

  
  