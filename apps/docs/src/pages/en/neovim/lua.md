---
title: Lua
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Lua Txt</a> 

NVIM REFERENCE MANUAL


### <a id="lua Lua" class="section-title" href="#lua Lua">Lua engine</a>

                                       Type [gO](undefined#gO) to see the table of contents.


## <a id="lua-intro" class="section-title" href="#lua-intro">Introduction</a> 

The Lua 5.1 script engine is builtin and always available. Try this command to
get an idea of what lurks beneath:

    :lua print(vim.inspect(package.loaded))

Nvim includes a "standard library" [lua-stdlib](/neovim-docs-web/en/neovim/lua#lua-stdlib) for Lua.  It complements the
"editor stdlib" ([builtin-functions](undefined#builtin-functions) and [Ex-commands](undefined#Ex-commands)) and the [API](undefined#API), all of
which can be used from Lua code ([lua-vimscript](/neovim-docs-web/en/neovim/lua#lua-vimscript) |vim.api|). Together these
"namespaces" form the Nvim programming interface.

The |:source| and |:runtime| commands can run Lua scripts. Lua modules can be
loaded with `require('name')`, which by convention usually returns a table.
See [lua-require](/neovim-docs-web/en/neovim/lua#lua-require) for how Nvim finds and loads Lua modules.

See this page for more insight into Nvim Lua:
    https://github.com/nanotee/nvim-lua-guide

### <a id="lua-compat" class="section-title" href="#lua-compat">Note:</a>
Lua 5.1 is the permanent interface for Nvim Lua.  Plugins need only consider
Lua 5.1, not worry about forward-compatibility with future Lua versions.  If
Nvim ever ships with Lua 5.4+, a Lua 5.1 compatibility shim will be provided
so that old plugins continue to work transparently.


## <a id="lua-concepts" class="section-title" href="#lua-concepts">Lua Concepts and Idioms</a> 

Lua is very simple: this means that, while there are some quirks, once you
internalize those quirks, everything works the same everywhere. Scopes
(closures) in particular are very consistent, unlike JavaScript or most other
languages.

Lua has three fundamental mechanisms—one for "each major aspect of
programming": tables, closures, and coroutines.
https://www.lua.org/doc/cacm2018.pdf
- Tables are the "object" or container datastructure: they represent both
  lists and maps, you can extend them to represent your own datatypes and
  change their behavior using [luaref-metatable](undefined#luaref-metatable) (like Python's "datamodel").
- EVERY scope in Lua is a closure: a function is a closure, a module is
  a closure, a `do` block ([luaref-do](undefined#luaref-do)) is a closure--and they all work the
  same. A Lua module is literally just a big closure discovered on the "path"
  (where your modules are found: |package.cpath|).
- Stackful coroutines enable cooperative multithreading, generators, and
  versatile control for both Lua and its host (Nvim).

### <a id="lua-call-function" class="section-title" href="#lua-call-function">Note:</a>
Lua functions can be called in multiple ways. Consider the function:
```    local foo = function(a, b)
        print("A: ", a)
        print("B: ", b)
    end

The first way to call this function is:
    foo(1, 2)
    -- ==== Result ====
    -- A: 1
    -- B: 2

This way of calling a function is familiar from most scripting languages.
In Lua, any missing arguments are passed as `nil`. Example:
    foo(1)
    -- ==== Result ====
    -- A: 1
    -- B: nil

Furthermore it is not an error if extra parameters are passed, they are just
discarded.

It is also allowed to omit the parentheses (only) if the function takes
exactly one string (`"foo"`) or table literal (`{1,2,3}`). The latter is often
used to approximate the "named parameters" feature of languages like Python
("kwargs" or "keyword args"). Example:
    local func_with_opts = function(opts)
        local will_do_foo = opts.foo
        local filename = opts.filename

        ...
    end

    func_with_opts { foo = true, filename = "hello.world" }
```

There is nothing special going on here except that parentheses are treated as
whitespace. But visually, this small bit of sugar gets reasonably close to
a "keyword args" interface.

It is of course also valid to call the function with parentheses:
```
    func_with_opts({ foo = true, filename = "hello.world" })
```

Nvim tends to prefer the keyword args style.


## <a id="lua-patterns" class="section-title" href="#lua-patterns">Lua Patterns</a> 

Lua intentionally does not support regular expressions, instead it has limited
"patterns" which avoid the performance pitfalls of extended regex.
[luaref-patterns](undefined#luaref-patterns)

Examples using |string.match()|:

    print(string.match("foo123bar123", "%d+"))
    -- 123

    print(string.match("foo123bar123", "[^%d]+"))
    -- foo

    print(string.match("foo123bar123", "[abc]+"))
    -- ba

    print(string.match("foo.bar", "%.bar"))
    -- .bar

For more complex matching you can use Vim regex from Lua via |vim.regex()|.


## <a id="lua-require" class="section-title" href="#lua-require">Importing Lua Modules</a> 

Modules are searched for under the directories specified in 'runtimepath', in
the order they appear.  Any "." in the module name is treated as a directory
separator when searching.  For a module `foo.bar`, each directory is searched
for `lua/foo/bar.lua`, then `lua/foo/bar/init.lua`.  If no files are found,
the directories are searched again for a shared library with a name matching
`lua/foo/bar.?`, where `?` is a list of suffixes (such as `so` or `dll`) derived from
the initial value of |package.cpath|. If still no files are found, Nvim falls
back to Lua's default search mechanism. The first script found is run and
`require()` returns the value returned by the script if any, else `true`.

The return value is cached after the first call to `require()` for each module,
with subsequent calls returning the cached value without searching for, or
executing any script. For further details on `require()`, see the Lua
documentation at https://www.lua.org/manual/5.1/manual.html#pdf-require.

For example, if 'runtimepath' is `foo,bar` and |package.cpath| was
`./?.so;./?.dll` at startup, `require('mod')` searches these paths in order
and loads the first module found ("first wins"):
```    foo/lua/mod.lua
    foo/lua/mod/init.lua
    bar/lua/mod.lua
    bar/lua/mod/init.lua
    foo/lua/mod.so
    foo/lua/mod.dll
    bar/lua/mod.so
    bar/lua/mod.dll
```

### <a id="lua-package-path" class="section-title" href="#lua-package-path">Note:</a>
Nvim automatically adjusts |package.path| and |package.cpath| according to the
effective 'runtimepath' value. Adjustment happens whenever 'runtimepath' is
changed. `package.path` is adjusted by simply appending `/lua/?.lua` and
`/lua/?/init.lua` to each directory from 'runtimepath' (`/` is actually the
first character of `package.config`).

Similarly to |package.path|, modified directories from 'runtimepath' are also
added to |package.cpath|. In this case, instead of appending `/lua/?.lua` and
`/lua/?/init.lua` to each runtimepath, all unique `?`-containing suffixes of
the existing |package.cpath| are used. Example:

- 1. Given that
   - 'runtimepath' contains `/foo/bar,/xxx;yyy/baz,/abc`;
   - initial |package.cpath| (defined at compile-time or derived from
     `$LUA_CPATH` / `$LUA_INIT`) contains `./?.so;/def/ghi/a?d/j/g.elf;/def/?.so`.
- 2. It finds `?`-containing suffixes `/?.so`, `/a?d/j/g.elf` and `/?.so`, in
     order: parts of the path starting from the first path component containing
     question mark and preceding path separator.
- 3. The suffix of `/def/?.so`, namely `/?.so` is not unique, as it’s the same
     as the suffix of the first path from |package.path| (i.e. `./?.so`). Which
     leaves `/?.so` and `/a?d/j/g.elf`, in this order.
- 4. 'runtimepath' has three paths: `/foo/bar`, `/xxx;yyy/baz` and `/abc`. The
     second one contains a semicolon which is a paths separator so it is out,
     leaving only `/foo/bar` and `/abc`, in order.
- 5. The cartesian product of paths from 4. and suffixes from 3. is taken,
     giving four variants. In each variant a `/lua` path segment is inserted
     between path and suffix, leaving:
     - `/foo/bar/lua/?.so`
     - `/foo/bar/lua/a?d/j/g.elf`
     - `/abc/lua/?.so`
     - `/abc/lua/a?d/j/g.elf`
- 6. New paths are prepended to the original |package.cpath|.

The result will look like this:

    /foo/bar,/xxx;yyy/baz,/abc ('runtimepath')
    × ./?.so;/def/ghi/a?d/j/g.elf;/def/?.so (package.cpath)
    = /foo/bar/lua/?.so;/foo/bar/lua/a?d/j/g.elf;/abc/lua/?.so;/abc/lua/a?d/j/g.elf;./?.so;/def/ghi/a?d/j/g.elf;/def/?.so

Note:

- To track 'runtimepath' updates, paths added at previous update are
  remembered and removed at the next update, while all paths derived from the
  new 'runtimepath' are prepended as described above. This allows removing
  paths when path is removed from 'runtimepath', adding paths when they are
  added and reordering |package.path|/|package.cpath| content if 'runtimepath'
  was reordered.

- Although adjustments happen automatically, Nvim does not track current
  values of |package.path| or |package.cpath|. If you happen to delete some
  paths from there you can set 'runtimepath' to trigger an update:
      let &runtimepath = &runtimepath

- Skipping paths from 'runtimepath' which contain semicolons applies both to
  |package.path| and |package.cpath|. Given that there are some badly written
  plugins using shell, which will not work with paths containing semicolons,
  it is better to not have them in 'runtimepath' at all.


## <a id="lua-commands" class="section-title" href="#lua-commands">Commands</a> 

These commands execute a Lua chunk from either the command line (:lua, :luado)
or a file (:luafile) on the given line [range]. As always in Lua, each chunk
has its own scope (closure), so only global variables are shared between
command calls. The [lua-stdlib](/neovim-docs-web/en/neovim/lua#lua-stdlib) modules, user modules, and anything else on
|package.path| are available.

The Lua print() function redirects its output to the Nvim message area, with
arguments separated by " " (space) instead of "\t" (tab).

### <a id=":lua" class="section-title" href="#:lua">Note:</a>
:lua {chunk}
    Executes Lua chunk {chunk}. If {chunk} starts with "=" the rest of the
    chunk is evaluated as an expression and printed. `:lua =expr` is
    equivalent to `:lua print(vim.inspect(expr))`

    Examples:
```        :lua vim.api.nvim_command('echo "Hello, Nvim!"')
    To see the Lua version:
        :lua print(_VERSION)
    To see the LuaJIT version:
        :lua =jit.version
```

### <a id=":lua-heredoc" class="section-title" href="#:lua-heredoc">Note:</a>
:lua << [endmarker]
{script}
{endmarker}
    Executes Lua script {script} from within Vimscript. {endmarker} must NOT
    be preceded by whitespace. You can omit [endmarker] after the "<<" and use
    a dot "." after {script} (similar to |:append|, |:insert|).

    Example:
```        function! CurrentLineInfo()
        lua << EOF
        local linenr = vim.api.nvim_win_get_cursor(0)[1]
        local curline = vim.api.nvim_buf_get_lines(
                0, linenr - 1, linenr, false)[1]
        print(string.format("Current line [%d] has %d bytes",
                linenr, #curline))
        EOF
        endfunction
```

    Note that the `local` variables will disappear when the block finishes.
    But not globals.

### <a id=":luado" class="section-title" href="#:luado">Note:</a>
:[range]luado {body}
    Executes Lua chunk "function(line, linenr) {body} end" for each buffer
    line in [range], where `line` is the current line text (without <EOL>),
    and `linenr` is the current line number. If the function returns a string
    that becomes the text of the corresponding buffer line. Default [range] is
    the whole file: "1,$".

    Examples:
```        :luado return string.format("%s\t%d", line:reverse(), #line)

        :lua require"lpeg"
        :lua -- balanced parenthesis grammar:
### <a id=":lua bp = lpeg.P{ "("  ((1 - lpeg.S"()") + lpeg.V(1))^0  ")" }" class="section-title" href="#:lua bp = lpeg.P{ "("  ((1 - lpeg.S"()") + lpeg.V(1))^0  ")" }">Note:</a>
        :luado if bp:match(line) then return "=>\t" .. line end
```

### <a id=":luafile" class="section-title" href="#:luafile">Note:</a>
:luafile {file}
    Execute Lua script in {file}.
    The whole argument is used as the filename (like |:edit|), spaces do not
    need to be escaped. Alternatively you can |:source| Lua files.

    Examples:
```        :luafile script.lua
        :luafile %
```


## <a id="lua-eval luaeval()" class="section-title" href="#lua-eval luaeval()">Luaeval()</a> 

The (dual) equivalent of "vim.eval" for passing Lua values to Nvim is
"luaeval". "luaeval" takes an expression string and an optional argument used
for _A inside expression and returns the result of the expression. It is
semantically equivalent in Lua to:
```
    local chunkheader = "local _A = select(1, ...) return "
    function luaeval (expstr, arg)
        local chunk = assert(loadstring(chunkheader .. expstr, "luaeval"))
        return chunk(arg) -- return typval
    end
```

Lua nils, numbers, strings, tables and booleans are converted to their
respective Vimscript types. If a Lua string contains a NUL byte, it will be
converted to a [Blob](undefined#Blob). Conversion of other Lua types is an error.

The magic global "_A" contains the second argument to luaeval().

Example:
```    :echo luaeval('_A[1] + _A[2]', [40, 2])
    42
    :echo luaeval('string.match(_A, "[a-z]+")', 'XYXfoo123')
    foo
```

Lua tables are used as both dictionaries and lists, so it is impossible to
determine whether empty table is meant to be empty list or empty dictionary.
Additionally Lua does not have integer numbers. To distinguish between these
cases there is the following agreement:

0. Empty table is empty list.
1. Table with N incrementally growing integral numbers, starting from 1 and
   ending with N is considered to be a list.
2. Table with string keys, none of which contains NUL byte, is considered to
   be a dictionary.
3. Table with string keys, at least one of which contains NUL byte, is also
   considered to be a dictionary, but this time it is converted to
   a [msgpack-special-map](undefined#msgpack-special-map).
### <a id="lua-special-tbl" class="section-title" href="#lua-special-tbl">Note:</a>
4. Table with `vim.type_idx` key may be a dictionary, a list or floating-point
   value:
   - `{[vim.type_idx]=vim.types.float, [vim.val_idx]=1}` is converted to
     a floating-point 1.0. Note that by default integral Lua numbers are
     converted to [Number](undefined#Number)s, non-integral are converted to [Float](undefined#Float)s. This
     variant allows integral [Float](undefined#Float)s.
   - `{[vim.type_idx]=vim.types.dictionary}` is converted to an empty
     dictionary, `{[vim.type_idx]=vim.types.dictionary, [42]=1, a=2}` is
     converted to a dictionary `{'a': 42}`: non-string keys are ignored.
     Without `vim.type_idx` key tables with keys not fitting in 1., 2. or 3.
     are errors.
   - `{[vim.type_idx]=vim.types.array}` is converted to an empty list. As well
     as `{[vim.type_idx]=vim.types.array, [42]=1}`: integral keys that do not
     form a 1-step sequence from 1 to N are ignored, as well as all
     non-integral keys.

Examples:
```
    :echo luaeval('math.pi')
    :function Rand(x,y) " random uniform between x and y
    :  return luaeval('(_A.y-_A.x)*math.random()+_A.x', {'x':a:x,'y':a:y})
    :  endfunction
    :echo Rand(1,10)
```

Note: Second argument to `luaeval` is converted ("marshalled") from Vimscript
to Lua, so changes to Lua containers do not affect values in Vimscript. Return
value is also always converted. When converting, [msgpack-special-dict](undefined#msgpack-special-dict)s are
treated specially.


## <a id="v:lua-call" class="section-title" href="#v:lua-call">Vimscript v:Lua Interface</a> 

From Vimscript the special `v:lua` prefix can be used to call Lua functions
which are global or accessible from global tables. The expression
```    v:lua.func(arg1, arg2)
is equivalent to the Lua chunk
    return func(...)
where the args are converted to Lua values. The expression
    v:lua.somemod.func(args)
is equivalent to the Lua chunk
    return somemod.func(...)

In addition, functions of packages can be accessed like
    v:lua.require'mypack'.func(arg1, arg2)
    v:lua.require'mypack.submod'.func(arg1, arg2)
Note: Only single quote form without parens is allowed. Using
`require"mypack"` or `require('mypack')` as prefixes do NOT work (the latter
is still valid as a function call of itself, in case require returns a useful
value).

The `v:lua` prefix may be used to call Lua functions as [method](undefined#method)s. For
example:
    arg1->v:lua.somemod.func(arg2)
```

You can use `v:lua` in "func" options like 'tagfunc', 'omnifunc', etc.
For example consider the following Lua omnifunc handler:
```
    function mymod.omnifunc(findstart, base)
      if findstart == 1 then
        return 0
      else
        return {'stuff', 'steam', 'strange things'}
      end
    end
    vim.api.nvim_buf_set_option(0, 'omnifunc', 'v:lua.mymod.omnifunc')

Note: The module ("mymod" in the above example) must either be a Lua global,
or use the require syntax as specified above to access it from a package.

Note: `v:lua` without a call is not allowed in a Vimscript expression:
[Funcref](undefined#Funcref)s cannot represent Lua functions. The following are errors:

    let g:Myvar = v:lua.myfunc        " Error
    call SomeFunc(v:lua.mycallback)   " Error
    let g:foo = v:lua                 " Error
    let g:foo = v:['lua']             " Error
```


## <a id="lua-stdlib" class="section-title" href="#lua-stdlib">Lua Standard Modules</a> 

The Nvim Lua "standard library" (stdlib) is the `vim` module, which exposes
various functions and sub-modules. It is always loaded, thus `require("vim")`
is unnecessary.

You can peek at the module properties:

    :lua print(vim.inspect(vim))

Result is something like this:

    {
      _os_proc_children = <function 1>,
      _os_proc_info = <function 2>,
      ...
      api = {
        nvim__id = <function 5>,
        nvim__id_array = <function 6>,
        ...
      },
      deepcopy = <function 106>,
      gsplit = <function 107>,
      ...
    }

To find documentation on e.g. the "deepcopy" function:

    :help vim.deepcopy()

Note that underscore-prefixed functions (e.g. "_os_proc_children") are
internal/private and must not be used by plugins.


## <a id="lua-loop vim.loop" class="section-title" href="#lua-loop vim.loop">Vim Loop</a> 

`vim.loop` exposes all features of the Nvim event-loop. This is a low-level
API that provides functionality for networking, filesystem, and process
management. Try this command to see available functions:
```
    :lua print(vim.inspect(vim.loop))
```

Internally, `vim.loop` wraps the "luv" Lua bindings for the LibUV library;
see [luv-intro](undefined#luv-intro) for a full reference manual.

### <a id="E5560 lua-loop-callbacks" class="section-title" href="#E5560 lua-loop-callbacks">Note:</a>
It is an error to directly invoke `vim.api` functions (except [api-fast](undefined#api-fast)) in
`vim.loop` callbacks. For example, this is an error:
```
    local timer = vim.loop.new_timer()
    timer:start(1000, 0, function()
      vim.api.nvim_command('echomsg "test"')
    end)
```

To avoid the error use |vim.schedule_wrap()| to defer the callback:
```
    local timer = vim.loop.new_timer()
    timer:start(1000, 0, vim.schedule_wrap(function()
      vim.api.nvim_command('echomsg "test"')
    end))
```

(For one-shot timers, see |vim.defer_fn()|, which automatically adds the
wrapping.)

Example: repeating timer
    1. Save this code to a file.
    2. Execute it with ":luafile %".
```
    -- Create a timer handle (implementation detail: uv_timer_t).
    local timer = vim.loop.new_timer()
    local i = 0
    -- Waits 1000ms, then repeats every 750ms until timer:close().
    timer:start(1000, 750, function()
      print('timer invoked! i='..tostring(i))
      if i > 4 then
        timer:close()  -- Always close handles to avoid leaks.
      end
      i = i + 1
    end)
    print('sleeping');
```

### <a id="watch-file" class="section-title" href="#watch-file">Example: File-change detection</a>
    1. Save this code to a file.
    2. Execute it with ":luafile %".
    3. Use ":Watch %" to watch any file.
    4. Try editing the file from another text editor.
    5. Observe that the file reloads in Nvim (because on_change() calls
       |:checktime|).
```
    local w = vim.loop.new_fs_event()
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
      "command! -nargs=1 Watch call luaeval('watch_file(_A)', expand('<args>'))")
```

### <a id="tcp-server" class="section-title" href="#tcp-server">Example: TCP echo-server</a>
    1. Save this code to a file.
    2. Execute it with ":luafile %".
    3. Note the port number.
    4. Connect from any TCP client (e.g. "nc 0.0.0.0 36795"):
```
    local function create_server(host, port, on_connect)
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
    print('TCP echo-server listening on port: '..server:getsockname().port)
```

### <a id="lua-loop-threading" class="section-title" href="#lua-loop-threading">Multithreading</a>

Plugins can perform work in separate (os-level) threads using the threading
APIs in luv, for instance `vim.loop.new_thread`. Note that every thread
gets its own separate lua interpreter state, with no access to lua globals
in the main thread. Neither can the state of the editor (buffers, windows,
etc) be directly accessed from threads.

A subset of the `vim.*` API is available in threads. This includes:

- `vim.loop` with a separate event loop per thread.
- `vim.mpack` and `vim.json` (useful for serializing messages between threads)
- `require` in threads can use lua packages from the global |package.path|
- `print()` and `vim.inspect`
- `vim.diff`
- most utility functions in `vim.*` for working with pure lua values
### <a id="like `vim.split`, `vim.tbl_`, `vim.list_`, and so on." class="section-title" href="#like `vim.split`, `vim.tbl_`, `vim.list_`, and so on.">Note:</a>
- `vim.is_thread()` returns true from a non-main thread.


## <a id="lua-highlight" class="section-title" href="#lua-highlight">Vim Highlight</a> 

Nvim includes a function for highlighting a selection on yank (see for example
https://github.com/machakann/vim-highlightedyank). To enable it, add
#### <a id="au TextYankPost  silent! lua vim.highlight.on_yank()" class="section-title" href="#au TextYankPost  silent! lua vim.highlight.on_yank()">```</a>
```

to your `init.vim`. You can customize the highlight group and the duration of
the highlight via
#### <a id="au TextYankPost  silent! lua vim.highlight.on_yank {higroup="IncSearch", timeout=150}" class="section-title" href="#au TextYankPost  silent! lua vim.highlight.on_yank {higroup="IncSearch", timeout=150}">```</a>
```

If you want to exclude visual selections from highlighting on yank, use
#### <a id="au TextYankPost  silent! lua vim.highlight.on_yank {on_visual=false}" class="section-title" href="#au TextYankPost  silent! lua vim.highlight.on_yank {on_visual=false}">```</a>
```

### <a id="vim.highlight.on_yank()" class="section-title" href="#vim.highlight.on_yank()">vim.highlight.on_yank({opts})</a>
    Highlights the yanked text. The fields of the optional dict {opts}
    control the highlight:
      - {higroup} highlight group for yanked region (default [hl-IncSearch](undefined#hl-IncSearch))
      - {timeout} time in ms before highlight is cleared (default `150`)
      - {on_macro} highlight when executing macro (default `false`)
      - {on_visual} highlight when yanking visual selection (default `true`)
      - {event} event structure (default |v:event|)

vim.highlight.range({bufnr}, {ns}, {hlgroup}, {start}, {finish}, {opts})
### <a id="vim.highlight.range()" class="section-title" href="#vim.highlight.range()">Note:</a>

    Apply highlight group to range of text.

            Parameters: ~
              • {bufnr}   buffer number
              • {ns}      namespace for highlights
              • {hlgroup} highlight group name
              • {start}   starting position (tuple {line,col})
              • {finish}  finish position (tuple {line,col})
              • {opts}    optional parameters:
                          • `regtype`: type of range (characterwise, linewise,
                            or blockwise, see |setreg()|), default `'v'`
                          • `inclusive`: range includes end position,
                            default `false`
                          • `priority`: priority of highlight, default
                            `vim.highlight.user` (see below)

### <a id="vim.highlight.priorities" class="section-title" href="#vim.highlight.priorities">vim.highlight.priorities</a>

    Table with default priorities used for highlighting:
        • `syntax`: `50`, used for standard syntax highlighting
        • `treesitter`: `100`, used for tree-sitter-based highlighting
        • `diagnostics`: `150`, used for code analysis such as diagnostics
        • `user`: `200`, used for user-triggered highlights such as LSP document
          symbols or `on_yank` autocommands


## <a id="lua-regex" class="section-title" href="#lua-regex">Vim Regex</a> 

Vim regexes can be used directly from lua. Currently they only allow
matching within a single line.

### <a id="vim.regex()" class="section-title" href="#vim.regex()">vim.regex({re})</a>
    Parse the Vim regex {re} and return a regex object. Regexes are "magic"
    and case-sensitive by default, regardless of 'magic' and 'ignorecase'.
    They can be controlled with flags, see |/magic| and |/ignorecase|.

Methods on the regex object:

### <a id="regex:match_str()" class="section-title" href="#regex:match_str()">regex:match_str({str})</a>
    Match the string against the regex. If the string should match the regex
    precisely, surround the regex with `^` and `$`. If the was a match, the
    byte indices for the beginning and end of the match is returned. When
    there is no match, `nil` is returned. As any integer is truth-y,
    `regex:match()` can be directly used as a condition in an if-statement.

### <a id="regex:match_line()" class="section-title" href="#regex:match_line()">regex:match_line({bufnr}, {line_idx} [, {start}, {end}])</a>
    Match line {line_idx} (zero-based) in buffer {bufnr}. If {start} and {end}
    are supplied, match only this byte index range. Otherwise see
    |regex:match_str()|. If {start} is used, then the returned byte indices
    will be relative {start}.


## <a id="lua-diff" class="section-title" href="#lua-diff">Vim Diff</a> 

### <a id="vim.diff()" class="section-title" href="#vim.diff()">vim.diff({a}, {b}, {opts})</a>
    Run diff on strings {a} and {b}. Any indices returned by this function,
    either directly or via callback arguments, are 1-based.

    Examples:
```
        vim.diff('a\n', 'b\nc\n')
        =>
        @@ -1 +1,2 @@
        -a
        +b
        +c

        vim.diff('a\n', 'b\nc\n', {result_type = 'indices'})
        =>
        {
            {1, 1, 1, 2}
        }
```

    Parameters: ~
      • {a}      First string to compare
      • {b}      Second string to compare
      • {opts}   Optional parameters:
                 • `on_hunk` (callback):
                   Invoked for each hunk in the diff. Return a negative number
                   to cancel the callback for any remaining hunks.
                   Args:
                   • `start_a` (integer): Start line of hunk in {a}.
                   • `count_a` (integer): Hunk size in {a}.
                   • `start_b` (integer): Start line of hunk in {b}.
                   • `count_b` (integer): Hunk size in {b}.
                 • `result_type` (string): Form of the returned diff:
                   • "unified": (default) String in unified format.
                   • "indices": Array of hunk locations.
                   Note: This option is ignored if `on_hunk` is used.
                 • `algorithm` (string):
                   Diff algorithm to use. Values:
                   • "myers"      the default algorithm
                   • "minimal"    spend extra time to generate the
                                  smallest possible diff
                   • "patience"   patience diff algorithm
                   • "histogram"  histogram diff algorithm
                 • `ctxlen` (integer): Context length
                 • `interhunkctxlen` (integer):
                   Inter hunk context length
                 • `ignore_whitespace` (boolean):
                   Ignore whitespace
                 • `ignore_whitespace_change` (boolean):
                   Ignore whitespace change
                 • `ignore_whitespace_change_at_eol` (boolean)
                   Ignore whitespace change at end-of-line.
                 • `ignore_cr_at_eol` (boolean)
                   Ignore carriage return at end-of-line
                 • `ignore_blank_lines` (boolean)
                   Ignore blank lines
                 • `indent_heuristic` (boolean):
                   Use the indent heuristic for the internal
                   diff library.

    Return: ~
        See {opts.result_type}. nil if {opts.on_hunk} is given.


## <a id="lua-mpack" class="section-title" href="#lua-mpack">Vim Mpack</a> 

The *vim.mpack* module provides encoding and decoding of Lua objects to and
from msgpack-encoded strings. Supports |vim.NIL| and |vim.empty_dict()|.

### <a id="vim.mpack.encode" class="section-title" href="#vim.mpack.encode">vim.mpack.encode({obj})</a>
    Encodes (or "packs") Lua object {obj} as msgpack in a Lua string.

### <a id="vim.mpack.decode" class="section-title" href="#vim.mpack.decode">vim.mpack.decode({str})</a>
    Decodes (or "unpacks") the msgpack-encoded {str} to a Lua object.


## <a id="lua-spell" class="section-title" href="#lua-spell">Vim Spell</a> 

### <a id="vim.spell.check()" class="section-title" href="#vim.spell.check()">vim.spell.check({str})</a>
    Check {str} for spelling errors. Similar to the Vimscript function
    |spellbadword()|.

    Note: The behaviour of this function is dependent on: 'spelllang',
    'spellfile', 'spellcapcheck' and 'spelloptions' which can all be local to
    the buffer. Consider calling this with |nvim_buf_call()|.

    Example:
```
        vim.spell.check("the quik brown fox")
        =>
        {
            {'quik', 'bad', 4}
        }
```

    Parameters: ~
      • {str}    String to spell check.

    Return: ~
      List of tuples with three items:
        - The badly spelled word.
        - The type of the spelling error:
            "bad"   spelling mistake
            "rare"  rare word
            "local" word only valid in another region
            "caps"  word should start with Capital
        - The position in {str} where the word begins.


## <a id="lua-builtin" class="section-title" href="#lua-builtin">Vim</a> 

### <a id="vim.api" class="section-title" href="#vim.api">vim.api.{func}({...})</a>
    Invokes Nvim [API](undefined#API) function {func} with arguments {...}.
    Example: call the "nvim_get_current_line()" API function:
```        print(tostring(vim.api.nvim_get_current_line()))

### <a id="vim.version" class="section-title" href="#vim.version">vim.version()</a>
    Gets the version of the current Nvim build.

### <a id="vim.in_fast_event()" class="section-title" href="#vim.in_fast_event()">vim.in_fast_event()</a>
    Returns true if the code is executing as part of a "fast" event handler,
    where most of the API is disabled. These are low-level events (e.g.
    [lua-loop-callbacks](undefined#lua-loop-callbacks)) which can be invoked whenever Nvim polls for input.
    When this is `false` most API functions are callable (but may be subject
    to other restrictions such as [textlock](/neovim-docs-web/en/vim/eval#textlock)).

### <a id="vim.NIL" class="section-title" href="#vim.NIL">vim.NIL</a>
    Special value representing NIL in [RPC](undefined#RPC) and |v:null| in Vimscript
    conversion, and similar cases. Lua `nil` cannot be used as part of a Lua
    table representing a Dictionary or Array, because it is treated as
    missing: `{"foo", nil}` is the same as `{"foo"}`.

### <a id="vim.empty_dict()" class="section-title" href="#vim.empty_dict()">vim.empty_dict()</a>
    Creates a special empty table (marked with a metatable), which Nvim to an
    empty dictionary when translating Lua values to Vimscript or API types.
    Nvim by default converts an empty table `{}` without this metatable to an
    list/array.

    Note: If numeric keys are present in the table, Nvim ignores the metatable
    marker and converts the dict to a list/array anyway.

### <a id="vim.rpcnotify()" class="section-title" href="#vim.rpcnotify()">vim.rpcnotify({channel}, {method} [, {args}...])</a>
    Sends {event} to {channel} via [RPC](undefined#RPC) and returns immediately. If {channel}
    is 0, the event is broadcast to all channels.

    This function also works in a fast callback [lua-loop-callbacks](undefined#lua-loop-callbacks).

### <a id="vim.rpcrequest()" class="section-title" href="#vim.rpcrequest()">vim.rpcrequest({channel}, {method} [, {args}...])</a>
    Sends a request to {channel} to invoke {method} via [RPC](undefined#RPC) and blocks until
    a response is received.

    Note: NIL values as part of the return value is represented as |vim.NIL|
    special value

### <a id="vim.stricmp()" class="section-title" href="#vim.stricmp()">vim.stricmp({a}, {b})</a>
    Compares strings case-insensitively. Returns 0, 1 or -1 if strings are
    equal, {a} is greater than {b} or {a} is lesser than {b}, respectively.

### <a id="vim.str_utfindex()" class="section-title" href="#vim.str_utfindex()">vim.str_utfindex({str} [, {index}])</a>
    Convert byte index to UTF-32 and UTF-16 indices. If {index} is not
    supplied, the length of the string is used. All indices are zero-based.
    Returns two values: the UTF-32 and UTF-16 indices respectively.

    Embedded NUL bytes are treated as terminating the string. Invalid UTF-8
    bytes, and embedded surrogates are counted as one code point each. An
    {index} in the middle of a UTF-8 sequence is rounded upwards to the end of
    that sequence.

### <a id="vim.str_byteindex()" class="section-title" href="#vim.str_byteindex()">vim.str_byteindex({str}, {index} [, {use_utf16}])</a>
    Convert UTF-32 or UTF-16 {index} to byte index. If {use_utf16} is not
    supplied, it defaults to false (use UTF-32). Returns the byte index.

    Invalid UTF-8 and NUL is treated like by |vim.str_byteindex()|.
    An {index} in the middle of a UTF-16 sequence is rounded upwards to
    the end of that sequence.

### <a id="vim.iconv()" class="section-title" href="#vim.iconv()">vim.iconv({str}, {from}, {to}[, {opts}])</a>
        The result is a String, which is the text {str} converted from
        encoding {from} to encoding {to}. When the conversion fails `nil` is
        returned.  When some characters could not be converted they
        are replaced with "?".
        The encoding names are whatever the iconv() library function
        can accept, see ":Man 3 iconv".

        Parameters: ~
          • {str}   (string) Text to convert
          • {from}  (string) Encoding of {str}
          • {to}    (string) Target encoding

        Returns: ~
            Converted string if conversion succeeds, `nil` otherwise.

### <a id="vim.schedule()" class="section-title" href="#vim.schedule()">vim.schedule({callback})</a>
    Schedules {callback} to be invoked soon by the main event-loop. Useful
    to avoid [textlock](/neovim-docs-web/en/vim/eval#textlock) or other temporary restrictions.


### <a id="vim.defer_fn" class="section-title" href="#vim.defer_fn">vim.defer_fn({fn}, {timeout})</a>
    Defers calling {fn} until {timeout} ms passes. Use to do a one-shot timer
    that calls {fn}.

    Note: The {fn} is |vim.schedule_wrap()|ped automatically, so API functions are
    safe to call.

    Parameters: ~
      • {fn}        Callback to call once {timeout} expires
      • {timeout}   Time in ms to wait before calling {fn}

    Returns: ~
        |vim.loop|.new_timer() object

### <a id="vim.wait()" class="section-title" href="#vim.wait()">vim.wait({time} [, {callback}, {interval}, {fast_only}])</a>
    Wait for {time} in milliseconds until {callback} returns `true`.

    Executes {callback} immediately and at approximately {interval}
    milliseconds (default 200). Nvim still processes other events during
    this time.

    Parameters: ~
      • {time}      Number of milliseconds to wait
      • {callback}  Optional callback. Waits until {callback} returns true
      • {interval}  (Approximate) number of milliseconds to wait between polls
      • {fast_only} If true, only [api-fast](undefined#api-fast) events will be processed.
                        If called from while in an [api-fast](undefined#api-fast) event, will
                        automatically be set to `true`.

    Returns: ~
        If {callback} returns `true` during the {time}:
            `true, nil`

        If {callback} never returns `true` during the {time}:
            `false, -1`

        If {callback} is interrupted during the {time}:
            `false, -2`

        If {callback} errors, the error is raised.

        Examples:

    ---
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
    end
```


### <a id="vim.ui_attach()" class="section-title" href="#vim.ui_attach()">vim.ui_attach({ns}, {options}, {callback})</a>
    Attach to ui events, similar to |nvim_ui_attach()| but receive events
    as lua callback. Can be used to implement screen elements like
    popupmenu or message handling in lua.

    {options} should be a dictionary-like table, where `ext_...` options should
    be set to true to receive events for the respective external element.

    {callback} receives event name plus additional parameters. See [ui-popupmenu](/neovim-docs-web/en/neovim/ui#ui-popupmenu)
    and the sections below for event format for respective events.

    WARNING: This api is considered experimental.  Usability will vary for
    different screen elements. In particular `ext_messages` behavior is subject
    to further changes and usability improvements.  This is expected to be
    used to handle messages when setting 'cmdheight' to zero (which is
    likewise experimental).

    Example (stub for a [ui-popupmenu](/neovim-docs-web/en/neovim/ui#ui-popupmenu) implementation):

      ns = vim.api.nvim_create_namespace('my_fancy_pum')

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
      end)

### <a id="vim.ui_detach()" class="section-title" href="#vim.ui_detach()">vim.ui_detach({ns})</a>
    Detach a callback previously attached with |vim.ui_attach()| for the
    given namespace {ns}.

### <a id="vim.type_idx" class="section-title" href="#vim.type_idx">vim.type_idx</a>
    Type index for use in [lua-special-tbl](undefined#lua-special-tbl). Specifying one of the values from
    |vim.types| allows typing the empty table (it is unclear whether empty Lua
    table represents empty list or empty array) and forcing integral numbers
    to be [Float](undefined#Float). See [lua-special-tbl](undefined#lua-special-tbl) for more details.

### <a id="vim.val_idx" class="section-title" href="#vim.val_idx">vim.val_idx</a>
    Value index for tables representing [Float](undefined#Float)s. A table representing
    floating-point value 1.0 looks like this:
        {
          [vim.type_idx] = vim.types.float,
          [vim.val_idx] = 1.0,
        }
    See also |vim.type_idx| and [lua-special-tbl](undefined#lua-special-tbl).

### <a id="vim.types" class="section-title" href="#vim.types">vim.types</a>
    Table with possible values for |vim.type_idx|. Contains two sets of
    key-value pairs: first maps possible values for |vim.type_idx| to
    human-readable strings, second maps human-readable type names to values
    for |vim.type_idx|. Currently contains pairs for `float`, `array` and
        `dictionary` types.

    Note: One must expect that values corresponding to `vim.types.float`,
    `vim.types.array` and `vim.types.dictionary` fall under only two following
    assumptions:
    1. Value may serve both as a key and as a value in a table. Given the
       properties of Lua tables this basically means “value is not `nil`”.
    2. For each value in `vim.types` table `vim.types[vim.types[value]]` is the
       same as `value`.
    No other restrictions are put on types, and it is not guaranteed that
    values corresponding to `vim.types.float`, `vim.types.array` and
    `vim.types.dictionary` will not change or that `vim.types` table will only
    contain values for these three types.

### <a id="log_levels vim.log.levels" class="section-title" href="#log_levels vim.log.levels">Note:</a>
Log levels are one of the values defined in `vim.log.levels`:

    vim.log.levels.DEBUG
    vim.log.levels.ERROR
    vim.log.levels.INFO
    vim.log.levels.TRACE
    vim.log.levels.WARN
    vim.log.levels.OFF


## <a id="lua-vimscript" class="section-title" href="#lua-vimscript">Lua-Vimscript Bridge</a> 

Nvim Lua provides an interface to Vimscript variables and functions, and
editor commands and options.

See also https://github.com/nanotee/nvim-lua-guide.

### <a id="vim.call()" class="section-title" href="#vim.call()">vim.call({func}, {...})</a>
    Invokes [vim-function](undefined#vim-function) or [user-function](/neovim-docs-web/en/vim/eval#user-function) {func} with arguments {...}.
    See also |vim.fn|.
    Equivalent to:
```        vim.fn[func]({...})

vim.cmd({command})
    See |vim.cmd()|.

### <a id="vim.fn" class="section-title" href="#vim.fn">vim.fn.{func}({...})</a>
    Invokes [vim-function](undefined#vim-function) or [user-function](/neovim-docs-web/en/vim/eval#user-function) {func} with arguments {...}.
    To call autoload functions, use the syntax:
        vim.fn['some#function']({...})
```

    Unlike vim.api.|nvim_call_function()| this converts directly between Vim
    objects and Lua objects. If the Vim function returns a float, it will be
    represented directly as a Lua number. Empty lists and dictionaries both
    are represented by an empty table.

    Note: |v:null| values as part of the return value is represented as
    |vim.NIL| special value

    Note: vim.fn keys are generated lazily, thus `pairs(vim.fn)` only
    enumerates functions that were called at least once.

    Note: The majority of functions cannot run in [api-fast](undefined#api-fast) callbacks with some
    undocumented exceptions which are allowed.

### <a id="lua-vim-variables" class="section-title" href="#lua-vim-variables">Note:</a>
The Vim editor global dictionaries |g:| |w:| |b:| |t:| |v:| can be accessed
from Lua conveniently and idiomatically by referencing the `vim.*` Lua tables
described below. In this way you can easily read and modify global Vimscript
variables from Lua.

Example:
```
    vim.g.foo = 5     -- Set the g:foo Vimscript variable.
    print(vim.g.foo)  -- Get and print the g:foo Vimscript variable.
    vim.g.foo = nil   -- Delete (:unlet) the Vimscript variable.
    vim.b[2].foo = 6  -- Set b:foo for buffer 2
```


Note that setting dictionary fields directly will not write them back into
Nvim. This is because the index into the namespace simply returns a copy.
Instead the whole dictionary must be written as one. This can be achieved by
creating a short-lived temporary.

Example:
```
    vim.g.my_dict.field1 = 'value'  -- Does not work

    local my_dict = vim.g.my_dict   --
    my_dict.field1 = 'value'        -- Instead do
    vim.g.my_dict = my_dict         --

### <a id="vim.g" class="section-title" href="#vim.g">vim.g</a>
    Global (|g:|) editor variables.
    Key with no value returns `nil`.

### <a id="vim.b" class="section-title" href="#vim.b">vim.b</a>
    Buffer-scoped (|b:|) variables for the current buffer.
    Invalid or unset key returns `nil`. Can be indexed with
    an integer to access variables for a specific buffer.

### <a id="vim.w" class="section-title" href="#vim.w">vim.w</a>
    Window-scoped (|w:|) variables for the current window.
    Invalid or unset key returns `nil`. Can be indexed with
    an integer to access variables for a specific window.

### <a id="vim.t" class="section-title" href="#vim.t">vim.t</a>
    Tabpage-scoped (|t:|) variables for the current tabpage.
    Invalid or unset key returns `nil`. Can be indexed with
    an integer to access variables for a specific tabpage.

### <a id="vim.v" class="section-title" href="#vim.v">vim.v</a>
    |v:| variables.
    Invalid or unset key returns `nil`.

### <a id="vim.env" class="section-title" href="#vim.env">vim.env</a>
    Environment variables defined in the editor session.
    See [expand-env](undefined#expand-env) and |:let-environment| for the Vimscript behavior.
    Invalid or unset key returns `nil`.
    Example:
        vim.env.FOO = 'bar'
        print(vim.env.TERM)
```


### <a id="lua-options" class="section-title" href="#lua-options">Note:</a>
### <a id="lua-vim-options" class="section-title" href="#lua-vim-options">Note:</a>
### <a id="lua-vim-set" class="section-title" href="#lua-vim-set">Note:</a>
### <a id="lua-vim-setlocal" class="section-title" href="#lua-vim-setlocal">Note:</a>

Vim options can be accessed through |vim.o|, which behaves like Vimscript
|:set|.

    Examples: ~

    To set a boolean toggle:
        Vimscript: `set number`
        Lua:       `vim.o.number = true`

    To set a string value:
### <a id="Vimscript: `set wildignore=.o,.a,__pycache__`" class="section-title" href="#Vimscript: `set wildignore=.o,.a,__pycache__`">Note:</a>
        Lua:       `vim.o.wildignore = '*.o,*.a,__pycache__'`

Similarly, there is |vim.bo| and |vim.wo| for setting buffer-scoped and
window-scoped options. Note that this must NOT be confused with
[local-options](undefined#local-options) and |:setlocal|. There is also |vim.go| that only accesses the
global value of a [global-local](undefined#global-local) option, see |:setglobal|.

### <a id="vim.o" class="section-title" href="#vim.o">vim.o</a>
    Get or set [options](undefined#options). Like `:set`. Invalid key is an error.

    Note: this works on both buffer-scoped and window-scoped options using the
    current buffer and window.

    Example:
```        vim.o.cmdheight = 4
        print(vim.o.columns)
        print(vim.o.foo)     -- error: invalid key
```

### <a id="vim.go" class="section-title" href="#vim.go">vim.go</a>
    Get or set global [options](undefined#options). Like `:setglobal`. Invalid key is
    an error.

    Note: this is different from |vim.o| because this accesses the global
    option value and thus is mostly useful for use with [global-local](undefined#global-local)
    options.

    Example:
```        vim.go.cmdheight = 4
        print(vim.go.columns)
        print(vim.go.bar)     -- error: invalid key
```

### <a id="vim.bo" class="section-title" href="#vim.bo">vim.bo[{bufnr}]</a>
    Get or set buffer-scoped [options](undefined#options) for the buffer with number {bufnr}.
    Like `:set` and `:setlocal`. If [{bufnr}] is omitted then the current
    buffer is used. Invalid {bufnr} or key is an error.

    Note: this is equivalent to both `:set` and `:setlocal`.

    Example:
```        local bufnr = vim.api.nvim_get_current_buf()
        vim.bo[bufnr].buflisted = true    -- same as vim.bo.buflisted = true
        print(vim.bo.comments)
        print(vim.bo.baz)                 -- error: invalid key
```

### <a id="vim.wo" class="section-title" href="#vim.wo">vim.wo[{winid}]</a>
    Get or set window-scoped [options](undefined#options) for the window with handle {winid}.
    Like `:set`. If [{winid}] is omitted then the current window is used.
    Invalid {winid} or key is an error.

    Note: this does not access [local-options](undefined#local-options) (`:setlocal`) instead use:
```        nvim_get_option_value(OPTION, { scope = 'local', win = winid })
        nvim_set_option_value(OPTION, VALUE, { scope = 'local', win = winid }
```

    Example:
```        local winid = vim.api.nvim_get_current_win()
        vim.wo[winid].number = true    -- same as vim.wo.number = true
        print(vim.wo.foldmarker)
        print(vim.wo.quux)             -- error: invalid key
```




### <a id="lua-vim-opt" class="section-title" href="#lua-vim-opt">Note:</a>
### <a id="lua-vim-optlocal" class="section-title" href="#lua-vim-optlocal">Note:</a>
### <a id="lua-vim-optglobal" class="section-title" href="#lua-vim-optglobal">Note:</a>
### <a id="vim.opt" class="section-title" href="#vim.opt">Note:</a>


A special interface |vim.opt| exists for conveniently interacting with list-
and map-style option from Lua: It allows accessing them as Lua tables and
offers object-oriented method for adding and removing entries.

    Examples: ~

    The following methods of setting a list-style option are equivalent:
        In Vimscript:
### <a id="`set wildignore=.o,.a,__pycache__`" class="section-title" href="#`set wildignore=.o,.a,__pycache__`">Note:</a>

        In Lua using `vim.o`:
### <a id="`vim.o.wildignore = '.o,.a,__pycache__'`" class="section-title" href="#`vim.o.wildignore = '.o,.a,__pycache__'`">Note:</a>

        In Lua using `vim.opt`:
### <a id="`vim.opt.wildignore = { '.o', '.a', '__pycache__' }`" class="section-title" href="#`vim.opt.wildignore = { '.o', '.a', '__pycache__' }`">Note:</a>

    To replicate the behavior of |:set+=|, use:
```
### <a id="vim.opt.wildignore:append { ".pyc", "node_modules" }" class="section-title" href="#vim.opt.wildignore:append { ".pyc", "node_modules" }">Note:</a>
```

    To replicate the behavior of |:set^=|, use:
```
        vim.opt.wildignore:prepend { "new_first_value" }
```

    To replicate the behavior of |:set-=|, use:
```
        vim.opt.wildignore:remove { "node_modules" }
```

    The following methods of setting a map-style option are equivalent:
        In Vimscript:
            `set listchars=space:_,tab:>~`

        In Lua using `vim.o`:
            `vim.o.listchars = 'space:_,tab:>~'`

        In Lua using `vim.opt`:
            `vim.opt.listchars = { space = '_', tab = '>~' }`


Note that |vim.opt| returns an `Option` object, not the value of the option,
which is accessed through |vim.opt:get()|:

    Examples: ~

    The following methods of getting a list-style option are equivalent:
        In Vimscript:
            `echo wildignore`

        In Lua using `vim.o`:
            `print(vim.o.wildignore)`

        In Lua using `vim.opt`:
            `vim.pretty_print(vim.opt.wildignore:get())`


In any of the above examples, to replicate the behavior |:setlocal|, use
`vim.opt_local`. Additionally, to replicate the behavior of |:setglobal|, use
`vim.opt_global`.



### <a id="vim.opt:get()" class="section-title" href="#vim.opt:get()">Note:</a>
Option:get()

    Returns a lua-representation of the option. Boolean, number and string
    values will be returned in exactly the same fashion.

    For values that are comma-separated lists, an array will be returned with
    the values as entries in the array:
#### <a id="vim.cmd [[set wildignore=.pyc,.o]]" class="section-title" href="#vim.cmd [[set wildignore=.pyc,.o]]">```</a>

        vim.pretty_print(vim.opt.wildignore:get())
### <a id="-- { ".pyc", ".o", }" class="section-title" href="#-- { ".pyc", ".o", }">Note:</a>

        for _, ignore_pattern in ipairs(vim.opt.wildignore:get()) do
            print("Will ignore:", ignore_pattern)
        end
### <a id="-- Will ignore: .pyc" class="section-title" href="#-- Will ignore: .pyc">Note:</a>
### <a id="-- Will ignore: .o" class="section-title" href="#-- Will ignore: .o">Note:</a>
```

    For values that are comma-separated maps, a table will be returned with
    the names as keys and the values as entries:
```        vim.cmd [[set listchars=space:_,tab:>~]]

        vim.pretty_print(vim.opt.listchars:get())
        --  { space = "_", tab = ">~", }

        for char, representation in pairs(vim.opt.listchars:get()) do
            print(char, "=>", representation)
        end
```

    For values that are lists of flags, a set will be returned with the flags
    as keys and `true` as entries.
```        vim.cmd [[set formatoptions=njtcroql]]

        vim.pretty_print(vim.opt.formatoptions:get())
        -- { n = true, j = true, c = true, ... }

        local format_opts = vim.opt.formatoptions:get()
        if format_opts.j then
            print("J is enabled!")
        end
```

### <a id="vim.opt:append()" class="section-title" href="#vim.opt:append()">Note:</a>
Option:append(value)

    Append a value to string-style options. See |:set+=|

    These are equivalent:
        `vim.opt.formatoptions:append('j')`
        `vim.opt.formatoptions = vim.opt.formatoptions + 'j'`

### <a id="vim.opt:prepend()" class="section-title" href="#vim.opt:prepend()">Note:</a>
Option:prepend(value)

    Prepend a value to string-style options. See |:set^=|

    These are equivalent:
### <a id="`vim.opt.wildignore:prepend('.o')`" class="section-title" href="#`vim.opt.wildignore:prepend('.o')`">Note:</a>
### <a id="`vim.opt.wildignore = vim.opt.wildignore ^ '.o'`" class="section-title" href="#`vim.opt.wildignore = vim.opt.wildignore ^ '.o'`">Note:</a>

### <a id="vim.opt:remove()" class="section-title" href="#vim.opt:remove()">Note:</a>
Option:remove(value)

    Remove a value from string-style options. See |:set-=|

    These are equivalent:
### <a id="`vim.opt.wildignore:remove('.pyc')`" class="section-title" href="#`vim.opt.wildignore:remove('.pyc')`">Note:</a>
### <a id="`vim.opt.wildignore = vim.opt.wildignore - '.pyc'`" class="section-title" href="#`vim.opt.wildignore = vim.opt.wildignore - '.pyc'`">Note:</a>


## <a id="lua-vim" class="section-title" href="#lua-vim">Lua Module: Vim</a> 

### <a id="vim.cmd()" class="section-title" href="#vim.cmd()">cmd({command})</a>
    Execute Vim script commands.

    Note that `vim.cmd` can be indexed with a command name to return a
    callable function to the command.

    Example:
```
       vim.cmd('echo 42')
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
       vim.cmd.colorscheme('blue')
```


    Parameters: ~
      • {command}  string|table Command(s) to execute. If a string, executes
                   multiple lines of Vim script at once. In this case, it is
                   an alias to |nvim_exec()|, where `output` is set to false.
                   Thus it works identical to |:source|. If a table, executes
                   a single command. In this case, it is an alias to
                   |nvim_cmd()| where `opts` is empty.

    See also: ~
        [ex-cmd-index](undefined#ex-cmd-index)

### <a id="vim.connection_failure_errmsg()" class="section-title" href="#vim.connection_failure_errmsg()">Note:</a>
connection_failure_errmsg({consequence})
    TODO: Documentation

### <a id="vim.defer_fn()" class="section-title" href="#vim.defer_fn()">defer_fn({fn}, {timeout})</a>
    Defers calling `fn` until `timeout` ms passes.

    Use to do a one-shot timer that calls `fn` Note: The {fn} is |vim.schedule_wrap()|ped automatically, so API functions
    are safe to call.

    Parameters: ~
      • {fn}       (function) Callback to call once `timeout` expires
      • {timeout}  integer Number of milliseconds to wait before calling `fn`

    Return: ~
        (table) timer luv timer object

### <a id="vim.deprecate()" class="section-title" href="#vim.deprecate()">Note:</a>
deprecate({name}, {alternative}, {version}, {plugin}, {backtrace})
    Display a deprecation notification to the user.

    Parameters: ~
      • {name}         string Deprecated function.
      • {alternative}  (string|nil) Preferred alternative function.
      • {version}      string Version in which the deprecated function will be
                       removed.
      • {plugin}       string|nil Plugin name that the function will be
                       removed from. Defaults to "Nvim".
      • {backtrace}    boolean|nil Prints backtrace. Defaults to true.

### <a id="vim.inspect()" class="section-title" href="#vim.inspect()">inspect({object}, {options})</a>
    Gets a human-readable representation of the given object.

    See also: ~
        https://github.com/kikito/inspect.lua
        https://github.com/mpeterv/vinspect

### <a id="vim.notify()" class="section-title" href="#vim.notify()">notify({msg}, {level}, {opts})</a>
    Display a notification to the user.

    This function can be overridden by plugins to display notifications using
    a custom provider (such as the system notification provider). By default,
    writes to |:messages|.

    Parameters: ~
      • {msg}    (string) Content of the notification to show to the user.
      • {level}  (number|nil) One of the values from |vim.log.levels|.
      • {opts}   (table|nil) Optional parameters. Unused by default.

### <a id="vim.notify_once()" class="section-title" href="#vim.notify_once()">notify_once({msg}, {level}, {opts})</a>
    Display a notification only one time.

    Like |vim.notify()|, but subsequent calls with the same message will not
    display a notification.

    Parameters: ~
      • {msg}    (string) Content of the notification to show to the user.
      • {level}  (number|nil) One of the values from |vim.log.levels|.
      • {opts}   (table|nil) Optional parameters. Unused by default.

    Return: ~
        (boolean) true if message was displayed, else false

### <a id="vim.on_key()" class="section-title" href="#vim.on_key()">on_key({fn}, {ns_id})</a>
    Adds Lua function {fn} with namespace id {ns_id} as a listener to every,
    yes every, input key.

    The Nvim command-line option [-w](undefined#-w) is related but does not support
    callbacks and cannot be toggled dynamically.

    Note:
        {fn} will not be cleared by |nvim_buf_clear_namespace()|

    Note:
        {fn} will receive the keys after mappings have been evaluated

    Parameters: ~
      • {fn}     (function) Callback function. It should take one string
                 argument. On each key press, Nvim passes the key char to
                 fn(). |i_CTRL-V| If {fn} is nil, it removes the callback for
                 the associated {ns_id}
      • {ns_id}  number? Namespace ID. If nil or 0, generates and returns a
                 new |nvim_create_namespace()| id.

    Return: ~
        (number) Namespace id associated with {fn}. Or count of all callbacks
        if on_key() is called without arguments.

    Note:
        {fn} will be removed if an error occurs while calling.

### <a id="vim.paste()" class="section-title" href="#vim.paste()">paste({lines}, {phase})</a>
    Paste handler, invoked by |nvim_paste()| when a conforming UI (such as the
    [TUI](undefined#TUI)) pastes text into the editor.

    Example: To remove ANSI color codes when pasting:
```
     vim.paste = (function(overridden)
       return function(lines, phase)
         for i,line in ipairs(lines) do
           -- Scrub ANSI color codes from paste input.
           lines[i] = line:gsub('\27%[[0-9;mK]+', '')
         end
         overridden(lines, phase)
       end
     end)(vim.paste)
```


    Parameters: ~
      • {lines}  string[] # |readfile()|-style list of lines to paste.
                 [channel-lines](undefined#channel-lines)
      • {phase}  paste_phase -1: "non-streaming" paste: the call contains all
                 lines. If paste is "streamed", `phase` indicates the stream state:
                 • 1: starts the paste (exactly once)
                 • 2: continues the paste (zero or more times)
                 • 3: ends the paste (exactly once)

    Return: ~
        (boolean) # false if client should cancel the paste.

    See also: ~
        [paste](undefined#paste) @alias paste_phase -1 | 1 | 2 | 3

### <a id="vim.pretty_print()" class="section-title" href="#vim.pretty_print()">pretty_print({...})</a>
    Prints given arguments in human-readable format. Example:
```      -- Print highlight group Normal and store it's contents in a variable.
      local hl_normal = vim.pretty_print(vim.api.nvim_get_hl_by_name("Normal", true))
```


    Return: ~
        any # given arguments.

    See also: ~
        |vim.inspect()|

### <a id="vim.region()" class="section-title" href="#vim.region()">region({bufnr}, {pos1}, {pos2}, {regtype}, {inclusive})</a>
    Get a table of lines with start, end columns for a region marked by two
    points

    Parameters: ~
      • {bufnr}      (number) of buffer
      • {pos1}       integer[] (line, column) tuple marking beginning of
                     region
      • {pos2}       integer[] (line, column) tuple marking end of region
      • {regtype}    (string) type of selection, see |setreg()|
      • {inclusive}  (boolean) indicating whether the selection is
                     end-inclusive

    Return: ~
        table<integer, {}> region lua table of the form {linenr =
        {startcol,endcol}}

### <a id="vim.schedule_wrap()" class="section-title" href="#vim.schedule_wrap()">schedule_wrap({cb})</a>
    Defers callback `cb` until the Nvim API is safe to call.

    Parameters: ~
      • {cb}  (function)

    Return: ~
        (function)

    See also: ~
        [lua-loop-callbacks](undefined#lua-loop-callbacks)
        |vim.schedule()|
        |vim.in_fast_event()|




### <a id="vim.deep_equal()" class="section-title" href="#vim.deep_equal()">deep_equal({a}, {b})</a>
    Deep compare values for equality

    Tables are compared recursively unless they both provide the `eq` metamethod. All other types are compared using the equality `==` operator.

    Parameters: ~
      • {a}  any First value
      • {b}  any Second value

    Return: ~
        (boolean) `true` if values are equals, else `false`

### <a id="vim.deepcopy()" class="section-title" href="#vim.deepcopy()">deepcopy({orig})</a>
    Returns a deep copy of the given object. Non-table objects are copied as
    in a typical Lua assignment, whereas table objects are copied recursively.
    Functions are naively copied, so functions in the copied table point to
    the same functions as those in the input table. Userdata and threads are
    not copied and will throw an error.

    Parameters: ~
      • {orig}  (table) Table to copy

    Return: ~
        (table) Table of copied keys and (nested) values.

### <a id="vim.defaulttable()" class="section-title" href="#vim.defaulttable()">defaulttable({create})</a>
    Creates a table whose members are automatically created when accessed, if
    they don't already exist.

    They mimic defaultdict in python.

    If {create} is `nil`, this will create a defaulttable whose constructor
    function is this function, effectively allowing to create nested tables on
    the fly:
```
    local a = vim.defaulttable()
    a.b.c = 1
```


    Parameters: ~
      • {create}  (function|nil) The function called to create a missing
                  value.

    Return: ~
        (table) Empty table with metamethod

### <a id="vim.endswith()" class="section-title" href="#vim.endswith()">endswith({s}, {suffix})</a>
    Tests if `s` ends with `suffix`.

    Parameters: ~
      • {s}       (string) String
      • {suffix}  (string) Suffix to match

    Return: ~
        (boolean) `true` if `suffix` is a suffix of `s`

### <a id="vim.gsplit()" class="section-title" href="#vim.gsplit()">gsplit({s}, {sep}, {plain})</a>
    Splits a string at each instance of a separator.

    Parameters: ~
      • {s}      (string) String to split
      • {sep}    (string) Separator or pattern
      • {plain}  (boolean|nil) If `true` use `sep` literally (passed to
                 string.find)

    Return: ~
        (function) Iterator over the split components

    See also: ~
        |vim.split()|
        https://www.lua.org/pil/20.2.html
        http://lua-users.org/wiki/StringLibraryTutorial

### <a id="vim.is_callable()" class="section-title" href="#vim.is_callable()">is_callable({f})</a>
    Returns true if object `f` can be called as a function.

    Parameters: ~
      • {f}  any Any object

    Return: ~
        (boolean) `true` if `f` is callable, else `false`

### <a id="vim.list_extend()" class="section-title" href="#vim.list_extend()">list_extend({dst}, {src}, {start}, {finish})</a>
    Extends a list-like table with the values of another list-like table.

    NOTE: This mutates dst!

    Parameters: ~
      • {dst}     (table) List which will be modified and appended to
      • {src}     (table) List from which values will be inserted
      • {start}   (number|nil) Start index on src. Defaults to 1
      • {finish}  (number|nil) Final index on src. Defaults to `#src`

    Return: ~
        (table) dst

    See also: ~
        |vim.tbl_extend()|

### <a id="vim.list_slice()" class="section-title" href="#vim.list_slice()">list_slice({list}, {start}, {finish})</a>
    Creates a copy of a table containing only elements from start to end
    (inclusive)

    Parameters: ~
      • {list}    (list) Table
      • {start}   (number) Start range of slice
      • {finish}  (number) End range of slice

    Return: ~
        (list) Copy of table sliced from start to finish (inclusive)

### <a id="vim.pesc()" class="section-title" href="#vim.pesc()">pesc({s})</a>
    Escapes magic chars in [lua-patterns](/neovim-docs-web/en/neovim/lua#lua-patterns).

    Parameters: ~
      • {s}  (string) String to escape

    Return: ~
        (string) %-escaped pattern string

    See also: ~
        https://github.com/rxi/lume

### <a id="vim.split()" class="section-title" href="#vim.split()">split({s}, {sep}, {kwargs})</a>
    Splits a string at each instance of a separator.

    Examples:
```
      split(":aa::b:", ":")     => {'','aa','','b',''}
      split("axaby", "ab?")     => {'','x','y'}
### <a id="split("xyzo", "", {plain=true})" class="section-title" href="#split("xyzo", "", {plain=true})">Note:</a>
      split("[x](undefined#x)y[z](/neovim-docs-web/en/vim/index#z)", "|", {trimempty=true}) => {'x', 'y', 'z'}
```


    Parameters: ~
      • {s}       (string) String to split
      • {sep}     (string) Separator or pattern
      • {kwargs}  ({plain: boolean, trimempty: boolean}|nil) Keyword
                  arguments:
                  • plain: (boolean) If `true` use `sep` literally (passed to
                    string.find)
                  • trimempty: (boolean) If `true` remove empty items from the
                    front and back of the list

    Return: ~
        string[] List of split components

    See also: ~
        |vim.gsplit()|

### <a id="vim.startswith()" class="section-title" href="#vim.startswith()">startswith({s}, {prefix})</a>
    Tests if `s` starts with `prefix`.

    Parameters: ~
      • {s}       (string) String
      • {prefix}  (string) Prefix to match

    Return: ~
        (boolean) `true` if `prefix` is a prefix of `s`

### <a id="vim.tbl_add_reverse_lookup()" class="section-title" href="#vim.tbl_add_reverse_lookup()">tbl_add_reverse_lookup({o})</a>
    Add the reverse lookup values to an existing table. For example:
    `tbl_add_reverse_lookup { A = 1 } == { [1] = 'A', A = 1 }`

    Note that this modifies the input.

    Parameters: ~
      • {o}  (table) Table to add the reverse to

    Return: ~
        (table) o

### <a id="vim.tbl_contains()" class="section-title" href="#vim.tbl_contains()">tbl_contains({t}, {value})</a>
    Checks if a list-like (vector) table contains `value`.

    Parameters: ~
      • {t}      (table) Table to check
      • {value}  any Value to compare

    Return: ~
        (boolean) `true` if `t` contains `value`

### <a id="vim.tbl_count()" class="section-title" href="#vim.tbl_count()">tbl_count({t})</a>
    Counts the number of non-nil values in table `t`.
```
    vim.tbl_count({ a=1, b=2 }) => 2
    vim.tbl_count({ 1, 2 }) => 2
```


    Parameters: ~
      • {t}  (table) Table

    Return: ~
        (number) Number of non-nil values in table

    See also: ~
        https://github.com/Tieske/Penlight/blob/master/lua/pl/tablex.lua

### <a id="vim.tbl_deep_extend()" class="section-title" href="#vim.tbl_deep_extend()">tbl_deep_extend({behavior}, {...})</a>
    Merges recursively two or more map-like tables.

    Parameters: ~
      • {behavior}  (string) Decides what to do if a key is found in more than
                    one map:
                    • "error": raise an error
                    • "keep": use value from the leftmost map
                    • "force": use value from the rightmost map
      • {...}       (table) Two or more map-like tables

    Return: ~
        (table) Merged table

    See also: ~
        |vim.tbl_extend()|

### <a id="vim.tbl_extend()" class="section-title" href="#vim.tbl_extend()">tbl_extend({behavior}, {...})</a>
    Merges two or more map-like tables.

    Parameters: ~
      • {behavior}  (string) Decides what to do if a key is found in more than
                    one map:
                    • "error": raise an error
                    • "keep": use value from the leftmost map
                    • "force": use value from the rightmost map
      • {...}       (table) Two or more map-like tables

    Return: ~
        (table) Merged table

    See also: ~
        |extend()|

### <a id="vim.tbl_filter()" class="section-title" href="#vim.tbl_filter()">tbl_filter({func}, {t})</a>
    Filter a table using a predicate function

    Parameters: ~
      • {func}  (function) Function
      • {t}     (table) Table

    Return: ~
        (table) Table of filtered values

### <a id="vim.tbl_flatten()" class="section-title" href="#vim.tbl_flatten()">tbl_flatten({t})</a>
    Creates a copy of a list-like table such that any nested tables are
    "unrolled" and appended to the result.

    Parameters: ~
      • {t}  (table) List-like table

    Return: ~
        (table) Flattened copy of the given list-like table

    See also: ~
        From https://github.com/premake/premake-core/blob/master/src/base/table.lua

### <a id="vim.tbl_get()" class="section-title" href="#vim.tbl_get()">tbl_get({o}, {...})</a>
    Index into a table (first argument) via string keys passed as subsequent
    arguments. Return `nil` if the key does not exist.

    Examples:
```
      vim.tbl_get({ key = { nested_key = true }}, 'key', 'nested_key') == true
      vim.tbl_get({ key = {}}, 'key', 'nested_key') == nil
```


    Parameters: ~
      • {o}    (table) Table to index
      • {...}  (string) Optional strings (0 or more, variadic) via which to
               index the table

    Return: ~
        any Nested value indexed by key (if it exists), else nil

### <a id="vim.tbl_isempty()" class="section-title" href="#vim.tbl_isempty()">tbl_isempty({t})</a>
    Checks if a table is empty.

    Parameters: ~
      • {t}  (table) Table to check

    Return: ~
        (boolean) `true` if `t` is empty

    See also: ~
        https://github.com/premake/premake-core/blob/master/src/base/table.lua

### <a id="vim.tbl_islist()" class="section-title" href="#vim.tbl_islist()">tbl_islist({t})</a>
    Tests if a Lua table can be treated as an array.

    Empty table `{}` is assumed to be an array, unless it was created by
    |vim.empty_dict()| or returned as a dict-like [API](undefined#API) or Vimscript result,
    for example from |rpcrequest()| or |vim.fn|.

    Parameters: ~
      • {t}  (table) Table

    Return: ~
        (boolean) `true` if array-like table, else `false`

### <a id="vim.tbl_keys()" class="section-title" href="#vim.tbl_keys()">tbl_keys({t})</a>
    Return a list of all keys used in a table. However, the order of the
    return table of keys is not guaranteed.

    Parameters: ~
      • {t}  (table) Table

    Return: ~
        (list) List of keys

    See also: ~
        From https://github.com/premake/premake-core/blob/master/src/base/table.lua

### <a id="vim.tbl_map()" class="section-title" href="#vim.tbl_map()">tbl_map({func}, {t})</a>
    Apply a function to all values of a table.

    Parameters: ~
      • {func}  (function) Function
      • {t}     (table) Table

    Return: ~
        (table) Table of transformed values

### <a id="vim.tbl_values()" class="section-title" href="#vim.tbl_values()">tbl_values({t})</a>
    Return a list of all values used in a table. However, the order of the
    return table of values is not guaranteed.

    Parameters: ~
      • {t}  (table) Table

    Return: ~
        (list) List of values

### <a id="vim.trim()" class="section-title" href="#vim.trim()">trim({s})</a>
    Trim whitespace (Lua pattern "%s") from both sides of a string.

    Parameters: ~
      • {s}  (string) String to trim

    Return: ~
        (string) String with whitespace removed from its beginning and end

    See also: ~
        https://www.lua.org/pil/20.2.html

### <a id="vim.validate()" class="section-title" href="#vim.validate()">validate({opt})</a>
    Validates a parameter specification (types and values).

    Usage example:
```
      function user.new(name, age, hobbies)
        vim.validate{
          name={name, 'string'},
          age={age, 'number'},
          hobbies={hobbies, 'table'},
        }
        ...
      end
```


    Examples with explicit argument values (can be run directly):
```
      vim.validate{arg1={{'foo'}, 'table'}, arg2={'foo', 'string'}}
         => NOP (success)

      vim.validate{arg1={1, 'table'}}
         => error('arg1: expected table, got number')

      vim.validate{arg1={3, function(a) return (a % 2) == 0 end, 'even number'}}
         => error('arg1: expected even number, got 3')
```


    If multiple types are valid they can be given as a list.
```
      vim.validate{arg1={{'foo'}, {'table', 'string'}}, arg2={'foo', {'table', 'string'}}}
         => NOP (success)

      vim.validate{arg1={1, {'string', table'}}}
         => error('arg1: expected string|table, got number')
```


    Parameters: ~
      • {opt}  (table) Names of parameters to validate. Each key is a
               parameter name; each value is a tuple in one of these forms:
               1. (arg_value, type_name, optional)
                  • arg_value: argument value
                  • type_name: string|table type name, one of: ("table", "t",
                    "string", "s", "number", "n", "boolean", "b", "function",
                    "f", "nil", "thread", "userdata") or list of them.
                  • optional: (optional) boolean, if true, `nil` is valid

               2. (arg_value, fn, msg)
                  • arg_value: argument value
                  • fn: any function accepting one argument, returns true if
                    and only if the argument is valid. Can optionally return
                    an additional informative error message as the second
                    returned value.
                  • msg: (optional) error string if validation fails


## <a id="lua-uri" class="section-title" href="#lua-uri">Lua Module: Uri</a> 

### <a id="vim.uri_from_bufnr()" class="section-title" href="#vim.uri_from_bufnr()">uri_from_bufnr({bufnr})</a>
    Get a URI from a bufnr

    Parameters: ~
      • {bufnr}  (number)

    Return: ~
        (string) URI

### <a id="vim.uri_from_fname()" class="section-title" href="#vim.uri_from_fname()">uri_from_fname({path})</a>
    Get a URI from a file path.

    Parameters: ~
      • {path}  (string) Path to file

    Return: ~
        (string) URI

### <a id="vim.uri_to_bufnr()" class="section-title" href="#vim.uri_to_bufnr()">uri_to_bufnr({uri})</a>
    Get the buffer for a uri. Creates a new unloaded buffer if no buffer for
    the uri already exists.

    Parameters: ~
      • {uri}  (string)

    Return: ~
        (number) bufnr

### <a id="vim.uri_to_fname()" class="section-title" href="#vim.uri_to_fname()">uri_to_fname({uri})</a>
    Get a filename from a URI

    Parameters: ~
      • {uri}  (string)

    Return: ~
        (string) filename or unchanged URI for non-file URIs


## <a id="lua-ui" class="section-title" href="#lua-ui">Lua Module: Ui</a> 

### <a id="vim.ui.input()" class="section-title" href="#vim.ui.input()">input({opts}, {on_confirm})</a>
    Prompts the user for input

    Example:
```
     vim.ui.input({ prompt = 'Enter value for shiftwidth: ' }, function(input)
         vim.o.shiftwidth = tonumber(input)
     end)
```


    Parameters: ~
      • {opts}        (table) Additional options. See |input()|
                      • prompt (string|nil) Text of the prompt
                      • default (string|nil) Default reply to the input
                      • completion (string|nil) Specifies type of completion
                        supported for input. Supported types are the same that
                        can be supplied to a user-defined command using the
                        "-complete=" argument. See |:command-completion|
                      • highlight (function) Function that will be used for
                        highlighting user inputs.
      • {on_confirm}  (function) ((input|nil) -> ()) Called once the user
                      confirms or abort the input. `input` is what the user
                      typed. `nil` if the user aborted the dialog.

### <a id="vim.ui.select()" class="section-title" href="#vim.ui.select()">select({items}, {opts}, {on_choice})</a>
    Prompts the user to pick a single item from a collection of entries

    Example:
```
     vim.ui.select({ 'tabs', 'spaces' }, {
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
     end)
```


    Parameters: ~
      • {items}      (table) Arbitrary items
      • {opts}       (table) Additional options
                     • prompt (string|nil) Text of the prompt. Defaults to
                       `Select one of:`
                     • format_item (function item -> text) Function to format
                       an individual item from `items`. Defaults to
                       `tostring`.
                     • kind (string|nil) Arbitrary hint string indicating the
                       item shape. Plugins reimplementing `vim.ui.select` may
                       wish to use this to infer the structure or semantics of
                       `items`, or the context in which select() was called.
      • {on_choice}  (function) ((item|nil, idx|nil) -> ()) Called once the
                     user made a choice. `idx` is the 1-based index of `item`
                     within `items`. `nil` if the user aborted the dialog.


## <a id="lua-filetype" class="section-title" href="#lua-filetype">Lua Module: Filetype</a> 

### <a id="vim.filetype.add()" class="section-title" href="#vim.filetype.add()">add({filetypes})</a>
    Add new filetype mappings.

    Filetype mappings can be added either by extension or by filename (either
    the "tail" or the full file path). The full file path is checked first,
    followed by the file name. If a match is not found using the filename,
    then the filename is matched against the list of [lua-patterns](/neovim-docs-web/en/neovim/lua#lua-patterns) (sorted by
    priority) until a match is found. Lastly, if pattern matching does not
    find a filetype, then the file extension is used.

    The filetype can be either a string (in which case it is used as the
    filetype directly) or a function. If a function, it takes the full path
    and buffer number of the file as arguments (along with captures from the
    matched pattern, if any) and should return a string that will be used as
    the buffer's filetype. Optionally, the function can return a second
    function value which, when called, modifies the state of the buffer. This
    can be used to, for example, set filetype-specific buffer variables.

    Filename patterns can specify an optional priority to resolve cases when a
    file path matches multiple patterns. Higher priorities are matched first.
    When omitted, the priority defaults to 0. A pattern can contain
    environment variables of the form "${SOME_VAR}" that will be automatically
    expanded. If the environment variable is not set, the pattern won't be
    matched.

    See $VIMRUNTIME/lua/vim/filetype.lua for more examples.

    Example:
```
      vim.filetype.add({
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
### <a id="['./etc/foo/.'] = 'fooscript'," class="section-title" href="#['./etc/foo/.'] = 'fooscript',">Note:</a>
          -- Using an optional priority
### <a id="['./etc/foo/.%.conf'] = { 'dosini', { priority = 10 } }," class="section-title" href="#['./etc/foo/.%.conf'] = { 'dosini', { priority = 10 } },">Note:</a>
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
      })
```


    To add a fallback match on contents, use
```
     vim.filetype.add {
       pattern = {
### <a id="['.'] = {" class="section-title" href="#['.'] = {">Note:</a>
           priority = -math.huge,
           function(path, bufnr)
             local content = vim.filetype.getlines(bufnr, 1)
### <a id="if vim.filetype.matchregex(content, [[^#!.\<mine\>]]) then" class="section-title" href="#if vim.filetype.matchregex(content, [[^#!.\<mine\>]]) then">Note:</a>
               return 'mine'
             elseif vim.filetype.matchregex(content, [[\<drawing\>]]) then
               return 'drawing'
             end
           end,
         },
       },
     }
```


    Parameters: ~
      • {filetypes}  (table) A table containing new filetype maps (see
                     example).

### <a id="vim.filetype.match()" class="section-title" href="#vim.filetype.match()">match({args})</a>
    Perform filetype detection.

    The filetype can be detected using one of three methods:
    1. Using an existing buffer
    2. Using only a file name
    3. Using only file contents

    Of these, option 1 provides the most accurate result as it uses both the
    buffer's filename and (optionally) the buffer contents. Options 2 and 3
    can be used without an existing buffer, but may not always provide a match
    in cases where the filename (or contents) cannot unambiguously determine
    the filetype.

    Each of the three options is specified using a key to the single argument
    of this function. Example:
```
    -- Using a buffer number
    vim.filetype.match({ buf = 42 })

    -- Override the filename of the given buffer
    vim.filetype.match({ buf = 42, filename = 'foo.c' })

    -- Using a filename without a buffer
    vim.filetype.match({ filename = 'main.lua' })

    -- Using file contents
    vim.filetype.match({ contents = {'#!/usr/bin/env bash'} })
```


    Parameters: ~
      • {args}  (table) Table specifying which matching strategy to use.
                Accepted keys are:
                • buf (number): Buffer number to use for matching. Mutually
                  exclusive with {contents}
                • filename (string): Filename to use for matching. When {buf}
                  is given, defaults to the filename of the given buffer
                  number. The file need not actually exist in the filesystem.
                  When used without {buf} only the name of the file is used
                  for filetype matching. This may result in failure to detect
                  the filetype in cases where the filename alone is not enough
                  to disambiguate the filetype.
                • contents (table): An array of lines representing file
                  contents to use for matching. Can be used with {filename}.
                  Mutually exclusive with {buf}.

    Return: ~
        (string|nil) If a match was found, the matched filetype.
        (function|nil) A function that modifies buffer state when called (for
        example, to set some filetype specific buffer variables). The function
        accepts a buffer number as its only argument.


## <a id="lua-keymap" class="section-title" href="#lua-keymap">Lua Module: Keymap</a> 

### <a id="vim.keymap.del()" class="section-title" href="#vim.keymap.del()">del({modes}, {lhs}, {opts})</a>
    Remove an existing mapping. Examples:
```
       vim.keymap.del('n', 'lhs')

       vim.keymap.del({'n', 'i', 'v'}, '<leader>w', { buffer = 5 })
```


    Parameters: ~
      • {opts}  (table|nil) A table of optional arguments:
                • buffer: (number or boolean) Remove a mapping from the given
                  buffer. When "true" or 0, use the current buffer.

    See also: ~
        |vim.keymap.set()|

### <a id="vim.keymap.set()" class="section-title" href="#vim.keymap.set()">set({mode}, {lhs}, {rhs}, {opts})</a>
    Add a new [mapping](undefined#mapping). Examples:
```
       -- Can add mapping to Lua functions
       vim.keymap.set('n', 'lhs', function() print("real lua function") end)

       -- Can use it to map multiple modes
       vim.keymap.set({'n', 'v'}, '<leader>lr', vim.lsp.buf.references, { buffer=true })

       -- Can add mapping for specific buffer
       vim.keymap.set('n', '<leader>w', "<cmd>w<cr>", { silent = true, buffer = 5 })

       -- Expr mappings
       vim.keymap.set('i', '<Tab>', function()
         return vim.fn.pumvisible() == 1 and "<C-n>" or "<Tab>"
       end, { expr = true })
       -- <Plug> mappings
       vim.keymap.set('n', '[%', '<Plug>(MatchitNormalMultiBackward)')
```


    Note that in a mapping like:
```
        vim.keymap.set('n', 'asdf', require('jkl').my_fun)
```


    the `require('jkl')` gets evaluated during this call in order to access the function. If you
    want to avoid this cost at startup you can wrap it in a function, for
    example:
```
        vim.keymap.set('n', 'asdf', function() return require('jkl').my_fun() end)
```


    Parameters: ~
      • {mode}  string|table Same mode short names as |nvim_set_keymap()|. Can
                also be list of modes to create mapping on multiple modes.
      • {lhs}   (string) Left-hand side |{lhs}| of the mapping.
      • {rhs}   string|function Right-hand side |{rhs}| of the mapping. Can
                also be a Lua function.
      • {opts}  (table|nil) A table of |:map-arguments|.
                • Accepts options accepted by the {opts} parameter in
                  |nvim_set_keymap()|, with the following notable differences:
                  • replace_keycodes: Defaults to `true` if "expr" is `true`.
                  • noremap: Always overridden with the inverse of "remap"
                    (see below).

                • In addition to those options, the table accepts the
                  following keys:
                  • buffer: (number or boolean) Add a mapping to the given
                    buffer. When `0` or `true`, use the current buffer.
                  • remap: (boolean) Make the mapping recursive. This is the
                    inverse of the "noremap" option from |nvim_set_keymap()|.
                    Defaults to `false`.

    See also: ~
        |nvim_set_keymap()|


## <a id="lua-fs" class="section-title" href="#lua-fs">Lua Module: Fs</a> 

### <a id="vim.fs.basename()" class="section-title" href="#vim.fs.basename()">basename({file})</a>
    Return the basename of the given file or directory

    Parameters: ~
      • {file}  (string) File or directory

    Return: ~
        (string) Basename of {file}

### <a id="vim.fs.dir()" class="section-title" href="#vim.fs.dir()">dir({path})</a>
    Return an iterator over the files and directories located in {path}

    Parameters: ~
      • {path}  (string) An absolute or relative path to the directory to
                iterate over. The path is first normalized
                |vim.fs.normalize()|.

    Return: ~
        Iterator over files and directories in {path}. Each iteration yields
        two values: name and type. Each "name" is the basename of the file or
        directory relative to {path}. Type is one of "file" or "directory".

### <a id="vim.fs.dirname()" class="section-title" href="#vim.fs.dirname()">dirname({file})</a>
    Return the parent directory of the given file or directory

    Parameters: ~
      • {file}  (string) File or directory

    Return: ~
        (string) Parent directory of {file}

### <a id="vim.fs.find()" class="section-title" href="#vim.fs.find()">find({names}, {opts})</a>
    Find files or directories in the given path.

    Finds any files or directories given in {names} starting from {path}. If
    {upward} is "true" then the search traverses upward through parent
    directories; otherwise, the search traverses downward. Note that downward
    searches are recursive and may search through many directories! If {stop}
    is non-nil, then the search stops when the directory given in {stop} is
    reached. The search terminates when {limit} (default 1) matches are found.
    The search can be narrowed to find only files or or only directories by
    specifying {type} to be "file" or "directory", respectively.

    Parameters: ~
      • {names}  (string[table](undefined#table)fun(name: string): boolean) Names of the files
                 and directories to find. Must be base names, paths and globs
                 are not supported. If a function it is called per file and
                 dir within the traversed directories to test if they match.
      • {opts}   (table) Optional keyword arguments:
                 • path (string): Path to begin searching from. If omitted,
                   the current working directory is used.
                 • upward (boolean, default false): If true, search upward
                   through parent directories. Otherwise, search through child
                   directories (recursively).
                 • stop (string): Stop searching when this directory is
                   reached. The directory itself is not searched.
                 • type (string): Find only files ("file") or directories
                   ("directory"). If omitted, both files and directories that
                   match {name} are included.
                 • limit (number, default 1): Stop the search after finding
                   this many matches. Use `math.huge` to place no limit on the
                   number of matches.

    Return: ~
        (table) The paths of all matching files or directories

### <a id="vim.fs.normalize()" class="section-title" href="#vim.fs.normalize()">normalize({path})</a>
    Normalize a path to a standard format. A tilde (~) character at the
    beginning of the path is expanded to the user's home directory and any
    backslash (\) characters are converted to forward slashes (/). Environment
    variables are also expanded.

    Example:
```
     vim.fs.normalize('C:\Users\jdoe')
     => 'C:/Users/jdoe'

     vim.fs.normalize('~/src/neovim')
     => '/home/jdoe/src/neovim'

     vim.fs.normalize('$XDG_CONFIG_HOME/nvim/init.vim')
     => '/Users/jdoe/.config/nvim/init.vim'
```


    Parameters: ~
      • {path}  (string) Path to normalize

    Return: ~
        (string) Normalized path

### <a id="vim.fs.parents()" class="section-title" href="#vim.fs.parents()">parents({start})</a>
    Iterate over all the parents of the given file or directory.

    Example:
```
     local root_dir
     for dir in vim.fs.parents(vim.api.nvim_buf_get_name(0)) do
       if vim.fn.isdirectory(dir .. "/.git") == 1 then
         root_dir = dir
         break
       end
     end

     if root_dir then
       print("Found git repository at", root_dir)
     end
```


    Parameters: ~
      • {start}  (string) Initial file or directory.

    Return: ~
        (function) Iterator

 vim:tw=78:ts=8:sw=4:sts=4:et:ft=help:norl:

