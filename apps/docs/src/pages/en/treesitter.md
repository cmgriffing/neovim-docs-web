---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Nvim" class="section-title" href="#Nvim"> Treesitter Txt</a> 

NVIM REFERENCE MANUAL


### <a id="treesitter" class="section-title" href="#treesitter">Treesitter integration</a>

Nvim integrates the `tree-sitter` library for incremental parsing of buffers:
https://tree-sitter.github.io/tree-sitter/

WARNING: Treesitter support is still experimental and subject to frequent
changes. This documentation may also not fully reflect the latest changes.

Type [gO](#gO) to see the table of contents.


## <a id="treesitter-parsers" class="section-title" href="#treesitter-parsers">Parser Files</a> 

Parsers are the heart of tree-sitter. They are libraries that tree-sitter will
search for in the `parser` runtime directory. By default, Nvim bundles only
parsers for C, Lua, and Vimscript, but parsers can be installed manually or
via a plugin like https://github.com/nvim-treesitter/nvim-treesitter.
Parsers are searched for as `parser/{lang}.*` in any 'runtimepath' directory.
If multiple parsers for the same language are found, the first one is used.
(This typically implies the priority "user config > plugins > bundled".
A parser can also be loaded manually using a full path:
```

vim.treesitter.require_language("python", "/path/to/python.so")

```



## <a id="treesitter-languagetree" class="section-title" href="#treesitter-languagetree">Language Trees</a> <span id="LanguageTree"></span>

As buffers can contain multiple languages (e.g., Vimscript commands in a Lua
file), multiple parsers may be needed to parse the full buffer. These are
combined in a [LanguageTree](#LanguageTree) object.

To create a LanguageTree (parser object) for a buffer and a given language,
use
```

tsparser = vim.treesitter.get_parser(bufnr, lang)

```

`bufnr=0` can be used for current buffer. `lang` will default to 'filetype'.
Currently, the parser will be retained for the lifetime of a buffer but this
is subject to change. A plugin should keep a reference to the parser object as
long as it wants incremental updates.

Whenever you need to access the current syntax tree, parse the buffer:
```

tstree = tsparser:parse()

```

This will return a table of immutable [treesitter-tree](#treesitter-tree)s that represent the
current state of the buffer. When the plugin wants to access the state after a
(possible) edit it should call `parse()` again. If the buffer wasn't edited,
the same tree will be returned again without extra work. If the buffer was
parsed before, incremental parsing will be done of the changed parts.

Note: To use the parser directly inside a [nvim_buf_attach()](#nvim_buf_attach()) Lua callback, you
must call [get_parser()](#get_parser()) before you register your callback. But preferably
parsing shouldn't be done directly in the change callback anyway as they will
be very frequent. Rather a plugin that does any kind of analysis on a tree
should use a timer to throttle too frequent updates.

See [lua-treesitter-languagetree](#lua-treesitter-languagetree) for the list of available methods.


## <a id="treesitter-tree" class="section-title" href="#treesitter-tree">Treesitter Trees</a> <span id="tstree"></span>

A "treesitter tree" represents the parsed contents of a buffer, which can be
used to perform further analysis. It is a [luaref-userdata](#luaref-userdata) reference to an
object held by the tree-sitter library.

An instance `tstree` of a treesitter tree supports the following methods.

### <a id="tstree:root()" class="section-title" href="#tstree:root()">tstree:root()</a>
Return the root node of this tree.

### <a id="tstree:copy()" class="section-title" href="#tstree:copy()">tstree:copy()</a>
Returns a copy of the `tstree`.


## <a id="treesitter-node" class="section-title" href="#treesitter-node">Treesitter Nodes</a> <span id="tsnode"></span>

A "treesitter node" represents one specific element of the parsed contents of
a buffer, which can be captured by a [Query](#Query) for, e.g., highlighting. It is a
[luaref-userdata](#luaref-userdata) reference to an object held by the tree-sitter library.

An instance `tsnode` of a treesitter node supports the following methods.

### <a id="tsnode:parent()" class="section-title" href="#tsnode:parent()">tsnode:parent()</a>
Get the node's immediate parent.

### <a id="tsnode:next_sibling()" class="section-title" href="#tsnode:next_sibling()">tsnode:next_sibling()</a>
Get the node's next sibling.

### <a id="tsnode:prev_sibling()" class="section-title" href="#tsnode:prev_sibling()">tsnode:prev_sibling()</a>
Get the node's previous sibling.

### <a id="tsnode:next_named_sibling()" class="section-title" href="#tsnode:next_named_sibling()">tsnode:next_named_sibling()</a>
Get the node's next named sibling.

### <a id="tsnode:prev_named_sibling()" class="section-title" href="#tsnode:prev_named_sibling()">tsnode:prev_named_sibling()</a>
Get the node's previous named sibling.

### <a id="tsnode:iter_children()" class="section-title" href="#tsnode:iter_children()">tsnode:iter_children()</a>
Iterates over all the direct children of {tsnode}, regardless of whether
they are named or not.
Returns the child node plus the eventual field name corresponding to this
child node.

### <a id="tsnode:field()" class="section-title" href="#tsnode:field()">tsnode:field({name})</a>
Returns a table of the nodes corresponding to the {name} field.

### <a id="tsnode:child_count()" class="section-title" href="#tsnode:child_count()">tsnode:child_count()</a>
Get the node's number of children.

### <a id="tsnode:child()" class="section-title" href="#tsnode:child()">tsnode:child({index})</a>
Get the node's child at the given {index}, where zero represents the first
child.

### <a id="tsnode:named_child_count()" class="section-title" href="#tsnode:named_child_count()">tsnode:named_child_count()</a>
Get the node's number of named children.

### <a id="tsnode:named_child()" class="section-title" href="#tsnode:named_child()">tsnode:named_child({index})</a>
Get the node's named child at the given {index}, where zero represents the
first named child.

### <a id="tsnode:start()" class="section-title" href="#tsnode:start()">tsnode:start()</a>
Get the node's start position. Return three values: the row, column and
total byte count (all zero-based).

### <a id="tsnode:end_()" class="section-title" href="#tsnode:end_()">tsnode:end_()</a>
Get the node's end position. Return three values: the row, column and
total byte count (all zero-based).

### <a id="tsnode:range()" class="section-title" href="#tsnode:range()">tsnode:range()</a>
Get the range of the node. Return four values: the row, column of the
start position, then the row, column of the end position.

### <a id="tsnode:type()" class="section-title" href="#tsnode:type()">tsnode:type()</a>
Get the node's type as a string.

### <a id="tsnode:symbol()" class="section-title" href="#tsnode:symbol()">tsnode:symbol()</a>
Get the node's type as a numerical id.

### <a id="tsnode:named()" class="section-title" href="#tsnode:named()">tsnode:named()</a>
Check if the node is named. Named nodes correspond to named rules in the
grammar, whereas anonymous nodes correspond to string literals in the
grammar.

### <a id="tsnode:missing()" class="section-title" href="#tsnode:missing()">tsnode:missing()</a>
Check if the node is missing. Missing nodes are inserted by the parser in
order to recover from certain kinds of syntax errors.

### <a id="tsnode:has_error()" class="section-title" href="#tsnode:has_error()">tsnode:has_error()</a>
Check if the node is a syntax error or contains any syntax errors.

### <a id="tsnode:sexpr()" class="section-title" href="#tsnode:sexpr()">tsnode:sexpr()</a>
Get an S-expression representing the node as a string.

### <a id="tsnode:id()" class="section-title" href="#tsnode:id()">tsnode:id()</a>
Get an unique identifier for the node inside its own tree.

No guarantees are made about this identifier's internal representation,
except for being a primitive Lua type with value equality (so not a
table). Presently it is a (non-printable) string.

Note: The `id` is not guaranteed to be unique for nodes from different
trees.

### <a id="tsnode:descendant_for_range()" class="section-title" href="#tsnode:descendant_for_range()">Note:</a>
tsnode:descendant_for_range({start_row}, {start_col}, {end_row}, {end_col})
Get the smallest node within this node that spans the given range of (row,
column) positions

### <a id="tsnode:named_descendant_for_range()" class="section-title" href="#tsnode:named_descendant_for_range()">Note:</a>
tsnode:named_descendant_for_range({start_row}, {start_col}, {end_row}, {end_col})
Get the smallest named node within this node that spans the given range of
(row, column) positions


## <a id="treesitter-query" class="section-title" href="#treesitter-query">Treesitter Queries</a> 

Treesitter queries are a way to extract information about a parsed [tstree](#tstree),
e.g., for the purpose of highlighting. Briefly, a `query` consists of one or
more patterns. A `pattern` is defined over node types in the syntax tree. A
`match` corresponds to specific elements of the syntax tree which match a
pattern. Patterns may optionally define captures and predicates. A `capture`
allows you to associate names with a specific node in a pattern. A `predicate`
adds arbitrary metadata and conditional data to a match.

Queries are written in a lisp-like language documented in
https://tree-sitter.github.io/tree-sitter/using-parsers#query-syntax
Note: The predicates listed there page differ from those Nvim supports. See
[treesitter-predicates](#treesitter-predicates) for a complete list of predicates supported by Nvim.

Nvim looks for queries as `*.scm` files in a `queries` directory under
`runtimepath`, where each file contains queries for a specific language and
purpose, e.g., `queries/lua/highlights.scm` for highlighting Lua files.
By default, the first query on `runtimepath` is used (which usually implies
that user config takes precedence over plugins, which take precedence over
queries bundled with Neovim). If a query should extend other queries instead
of replacing them, use [treesitter-query-modeline-extends](#treesitter-query-modeline-extends).

See [lua-treesitter-query](#lua-treesitter-query) for the list of available methods for working with
treesitter queries from Lua.


### <a id="treesitter-predicates" class="section-title" href="#treesitter-predicates">Treesitter Query Predicates</a>

Predicates are special scheme nodes that are evaluated to conditionally capture
nodes. For example, the [eq?](#eq?) predicate can be used as follows:
```

((identifier) @foo (#eq? @foo "foo"))

```

to only match identifier corresponding to the `"foo"` text.

The following predicates are built in:

`eq?`                                            *treesitter-predicate-eq?*
Match a string against the text corresponding to a node:
```
((identifier) @foo (#eq? @foo "foo"))
((node1) @left (node2) @right (#eq? @left @right))

```

`match?`                                      *treesitter-predicate-match?*
`vim-match?`                              *treesitter-predicate-vim-match?*
Match a [regexp](#regexp) against the text corresponding to a node:
```
((identifier) @constant (#match? @constant "^[A-Z_]+$"))

```
         Note: The `^` and `$` anchors will match the start and end of the
node's text.

`lua-match?`                              *treesitter-predicate-lua-match?*
Match [lua-patterns](#lua-patterns) against the text corresponding to a node,
similar to `match?`

`contains?`                                *treesitter-predicate-contains?*
Match a string against parts of the text corresponding to a node:
```
((identifier) @foo (#contains? @foo "foo"))
((identifier) @foo-bar (#contains @foo-bar "foo" "bar"))

```

`any-of?`                                    *treesitter-predicate-any-of?*
Match any of the given strings against the text corresponding to
a node:
```
((identifier) @foo (#any-of? @foo "foo" "bar"))

```

This is the recommended way to check if the node matches one of many
keywords, as it has been optimized for this.

### <a id="lua-treesitter-not-predicate" class="section-title" href="#lua-treesitter-not-predicate">Note:</a>
Each predicate has a `not-` prefixed predicate that is just the negation of
the predicate.

Further predicates can be added via `vim.treesitter.query.`[add_predicate()](#add_predicate()).
Use `vim.treesitter.query.`[list_predicates()](#list_predicates()) to list all available
predicates.


### <a id="treesitter-directives" class="section-title" href="#treesitter-directives">Treesitter Query Directives</a>

Treesitter directives store metadata for a node or match and perform side
effects. For example, the [set!](#set!) predicate sets metadata on the match or node:
```

((identifier) @foo (#set! "type" "parameter"))

```

The following directives are built in:

`set!`                                          *treesitter-directive-set!*
Sets key/value metadata for a specific match or capture. Value is
accessible as either `metadata[key]` (match specific) or
`metadata[capture_id][key]` (capture specific).

Parameters: ~
{capture_id} (optional)
{key}
{value}

Examples:
```
((identifier) @foo (#set! @foo "kind" "parameter"))
((node1) @left (node2) @right (#set! "type" "pair"))

```

`offset!`                                      *treesitter-directive-offset!*
Takes the range of the captured node and applies an offset. This will
generate a new range object for the captured node as
`metadata[capture_id].range`.

Parameters: ~
{capture_id}
{start_row}
{start_col}
{end_row}
{end_col}

Example:
```
((identifier) @constant (#offset! @constant 0 1 0 -1))

```


Further directives can be added via `vim.treesitter.query.`[add_directive()](#add_directive()).
Use `vim.treesitter.query.`[list_directives()](#list_directives()) to list all available
directives.


### <a id="treesitter-query-modeline" class="section-title" href="#treesitter-query-modeline">Treesitter Query Modelines</a>

Neovim supports to customize the behavior of the queries using a set of
"modelines", that is comments in the queries starting with `;`. Here are the
currently supported modeline alternatives:

`inherits: {lang}...`                     *treesitter-query-modeline-inherits*
Specifies that this query should inherit the queries from {lang}.
This will recursively descend in the queries of {lang} unless wrapped
in parentheses: `({lang})`.
Note: This is meant to be used to include queries from another
language. If you want your query to extend the queries of the same
language, use `extends`.

`extends`                                  *treesitter-query-modeline-extends*
Specifies that this query should be used as an extension for the
query, i.e. that it should be merged with the others.
Note: The order of the extensions, and the query that will be used as
a base depends on your 'runtimepath' value.

Note: These modeline comments must be at the top of the query, but can be
repeated, for example, the following two modeline blocks are both valid:
```

;; inherits: foo,bar
;; extends

;; extends
;;
;; inherits: baz

```



## <a id="treesitter-highlight" class="section-title" href="#treesitter-highlight">Treesitter Syntax Highlighting</a> 

Syntax highlighting is specified through queries named `highlights.scm`,
which match a [tsnode| in the parsed |tstree](#tsnode| in the parsed |tstree) to a `capture` that can be
assigned a highlight group. For example, the query
```

(parameters (identifier) @parameter)

```

matches any `identifier` node inside a function `parameter` node (e.g., the
`bar` in `foo(bar)`) to the capture named `@parameter`. It is also possible to
match literal expressions (provided the parser returns them):
```

"return" @keyword.return

```

Assuming a suitable parser and `highlights.scm` query is found in runtimepath,
treesitter highlighting for the current buffer can be enabled simply via
[vim.treesitter.start()](#vim.treesitter.start()).

### <a id="treesitter-highlight-groups" class="section-title" href="#treesitter-highlight-groups">Note:</a>
The capture names, with `@` included, are directly usable as highlight groups.
For many commonly used captures, the corresponding highlight groups are linked
to Nvim's standard [highlight-groups](#highlight-groups) by default but can be overridden in
colorschemes.

A fallback system is implemented, so that more specific groups fallback to
more generic ones. For instance, in a language that has separate doc comments,
`@comment.doc` could be used. If this group is not defined, the highlighting
for an ordinary `@comment` is used. This way, existing color schemes already
work out of the box, but it is possible to add more specific variants for
queries that make them available.

As an additional rule, capture highlights can always be specialized by
language, by appending the language name after an additional dot. For
instance, to highlight comments differently per language:
```

hi @comment.c guifg=Blue
hi @comment.lua @guifg=DarkBlue
hi link @comment.doc.java String

```

The following captures are linked by default to standard [group-name](#group-name)s:
```
@text.literal      Comment
@text.reference    Identifier
@text.title        Title
@text.uri          Underlined
@text.underline    Underlined
@text.todo         Todo

@comment           Comment
@punctuation       Delimiter

@constant          Constant
@constant.builtin  Special
@constant.macro    Define
@define            Define
@macro             Macro
@string            String
@string.escape     SpecialChar
@string.special    SpecialChar
@character         Character
@character.special SpecialChar
@number            Number
@boolean           Boolean
@float             Float

@function          Function
@function.builtin  Special
@function.macro    Macro
@parameter         Identifier
@method            Function
@field             Identifier
@property          Identifier
@constructor       Special

@conditional       Conditional
@repeat            Repeat
@label             Label
@operator          Operator
@keyword           Keyword
@exception         Exception

@variable          Identifier
@type              Type
@type.definition   Typedef
@storageclass      StorageClass
@structure         Structure
@namespace         Identifier
@include           Include
@preproc           PreProc
@debug             Debug
@tag               Tag

```

### <a id="treesitter-highlight-spell" class="section-title" href="#treesitter-highlight-spell">Note:</a>
The special `@spell` capture can be used to indicate that a node should be
spell checked by Nvim's builtin [spell](#spell) checker. For example, the following
capture marks comments as to be checked:
```

(comment) @spell

```

### <a id="treesitter-highlight-conceal" class="section-title" href="#treesitter-highlight-conceal">Note:</a>
Treesitter highlighting supports [conceal](#conceal) via the `conceal` metadata. By
convention, nodes to be concealed are captured as `@conceal`, but any capture
can be used. For example, the following query can be used to hide code block
delimiters in Markdown:
```

(fenced_code_block_delimiter) @conceal (#set! conceal "")

```

It is also possible to replace a node with a single character, which (unlike
legacy syntax) can be given a custom highlight. For example, the following
(ill-advised) query replaces the `!=` operator by a Unicode glyph, which is
still highlighted the same as other operators:
```

"!=" @operator (#set! conceal "≠")

```

Conceals specified in this way respect 'conceallevel'.

### <a id="treesitter-highlight-priority" class="section-title" href="#treesitter-highlight-priority">Note:</a>
Treesitter uses [nvim_buf_set_extmark()](#nvim_buf_set_extmark()) to set highlights with a default
priority of 100. This enables plugins to set a highlighting priority lower or
higher than tree-sitter. It is also possible to change the priority of an
individual query pattern manually by setting its `"priority"` metadata
attribute:
```

(super_important_node) @ImportantHighlight (#set! "priority" 105)

```



## <a id="lua-treesitter" class="section-title" href="#lua-treesitter">Vim Treesitter</a> 

The remainder of this document is a reference manual for the `vim.treesitter`
Lua module, which is the main interface for Nvim's tree-sitter integration.
Most of the following content is automatically generated from the function
documentation.


### <a id="vim.treesitter.language_version" class="section-title" href="#vim.treesitter.language_version">Note:</a>
The latest parser ABI version that is supported by the bundled tree-sitter
library.

### <a id="vim.treesitter.minimum_language_version" class="section-title" href="#vim.treesitter.minimum_language_version">Note:</a>
The earliest parser ABI version that is supported by the bundled tree-sitter
library.


## <a id="lua-treesitter-core" class="section-title" href="#lua-treesitter-core">Lua Module: Vim.Treesitter</a> 

### <a id="get_captures_at_cursor()" class="section-title" href="#get_captures_at_cursor()">get_captures_at_cursor({winnr})</a>
Returns a list of highlight capture names under the cursor

Parameters: ~
• {winnr}  (number|nil) Window handle or 0 for current window (default)

Return: ~
string[] List of capture names

### <a id="get_captures_at_pos()" class="section-title" href="#get_captures_at_pos()">get_captures_at_pos({bufnr}, {row}, {col})</a>
Returns a list of highlight captures at the given position

Each capture is represented by a table containing the capture name as a
string as well as a table of metadata (`priority`, `conceal`, ...; empty
if none are defined).

Parameters: ~
• {bufnr}  (number) Buffer number (0 for current buffer)
• {row}    (number) Position row
• {col}    (number) Position column

Return: ~
table[] List of captures `{ capture = "capture name", metadata = { ...
} }`

### <a id="get_node_at_cursor()" class="section-title" href="#get_node_at_cursor()">get_node_at_cursor({winnr})</a>
Returns the smallest named node under the cursor

Parameters: ~
• {winnr}  (number|nil) Window handle or 0 for current window (default)

Return: ~
(string) Name of node under the cursor

### <a id="get_node_at_pos()" class="section-title" href="#get_node_at_pos()">get_node_at_pos({bufnr}, {row}, {col}, {opts})</a>
Returns the smallest named node at the given position

Parameters: ~
• {bufnr}  (number) Buffer number (0 for current buffer)
• {row}    (number) Position row
• {col}    (number) Position column
• {opts}   (table) Optional keyword arguments:
• ignore_injections boolean Ignore injected languages
(default true)

Return: ~
userdata [tsnode](#tsnode) under the cursor

### <a id="get_node_range()" class="section-title" href="#get_node_range()">get_node_range({node_or_range})</a>
Returns the node's range or an unpacked range table

Parameters: ~
• {node_or_range}  (userdata[table) |tsnode](#table) |tsnode) or table of positions

Return: ~
(table) `{ start_row, start_col, end_row, end_col }`

### <a id="get_parser()" class="section-title" href="#get_parser()">get_parser({bufnr}, {lang}, {opts})</a>
Returns the parser for a specific buffer and filetype and attaches it to
the buffer

If needed, this will create the parser.

Parameters: ~
• {bufnr}  (number|nil) Buffer the parser should be tied to (default:
current buffer)
• {lang}   (string|nil) Filetype of this parser (default: buffer
filetype)
• {opts}   (table|nil) Options to pass to the created language tree

Return: ~
LanguageTree [LanguageTree](#LanguageTree) object to use for parsing

### <a id="get_string_parser()" class="section-title" href="#get_string_parser()">get_string_parser({str}, {lang}, {opts})</a>
Returns a string parser

Parameters: ~
• {str}   (string) Text to parse
• {lang}  (string) Language of this string
• {opts}  (table|nil) Options to pass to the created language tree

Return: ~
LanguageTree [LanguageTree](#LanguageTree) object to use for parsing

### <a id="is_ancestor()" class="section-title" href="#is_ancestor()">is_ancestor({dest}, {source})</a>
Determines whether a node is the ancestor of another

Parameters: ~
• {dest}    userdata Possible ancestor [tsnode](#tsnode)
• {source}  userdata Possible descendant [tsnode](#tsnode)

Return: ~
(boolean) True if {dest} is an ancestor of {source}

### <a id="is_in_node_range()" class="section-title" href="#is_in_node_range()">is_in_node_range({node}, {line}, {col})</a>
Determines whether (line, col) position is in node range

Parameters: ~
• {node}  userdata [tsnode](#tsnode) defining the range
• {line}  (number) Line (0-based)
• {col}   (number) Column (0-based)

Return: ~
(boolean) True if the position is in node range

### <a id="node_contains()" class="section-title" href="#node_contains()">node_contains({node}, {range})</a>
Determines if a node contains a range

Parameters: ~
• {node}   userdata [tsnode](#tsnode)
• {range}  (table)

Return: ~
(boolean) True if the {node} contains the {range}

### <a id="start()" class="section-title" href="#start()">start({bufnr}, {lang})</a>
Starts treesitter highlighting for a buffer

Can be used in an ftplugin or FileType autocommand.

Note: By default, disables regex syntax highlighting, which may be
required for some plugins. In this case, add `vim.bo.syntax = 'on'` after
the call to `start`.

Example:
```

vim.api.nvim_create_autocmd( 'FileType', { pattern = 'tex',
callback = function(args)
vim.treesitter.start(args.buf, 'latex')
vim.bo[args.buf].syntax = 'on'  -- only if additional legacy syntax is needed
end
})

```


Parameters: ~
• {bufnr}  (number|nil) Buffer to be highlighted (default: current
buffer)
• {lang}   (string|nil) Language of the parser (default: buffer
filetype)

### <a id="stop()" class="section-title" href="#stop()">stop({bufnr})</a>
Stops treesitter highlighting for a buffer

Parameters: ~
• {bufnr}  (number|nil) Buffer to stop highlighting (default: current
buffer)


## <a id="lua-treesitter-language" class="section-title" href="#lua-treesitter-language">Lua Module: Vim.Treesitter.Language</a> 

### <a id="inspect_language()" class="section-title" href="#inspect_language()">inspect_language({lang})</a>
Inspects the provided language.

Inspecting provides some useful information on the language like node
names, ...

Parameters: ~
• {lang}  (string) Language

Return: ~
(table)

### <a id="require_language()" class="section-title" href="#require_language()">Note:</a>
require_language({lang}, {path}, {silent}, {symbol_name})
Asserts that a parser for the language {lang} is installed.

Parsers are searched in the `parser` runtime directory, or the provided
{path}

Parameters: ~
• {lang}         (string) Language the parser should parse
• {path}         (string|nil) Optional path the parser is located at
• {silent}       (boolean|nil) Don't throw an error if language not
found
• {symbol_name}  (string|nil) Internal symbol name for the language to
load

Return: ~
(boolean) If the specified language is installed


## <a id="lua-treesitter-query" class="section-title" href="#lua-treesitter-query">Lua Module: Vim.Treesitter.Query</a> 

### <a id="add_directive()" class="section-title" href="#add_directive()">add_directive({name}, {handler}, {force})</a>
Adds a new directive to be used in queries

Handlers can set match level data by setting directly on the metadata
object `metadata.key = value`, additionally, handlers can set node level
data by using the capture id on the metadata table
`metadata[capture_id].key = value`

Parameters: ~
• {name}     (string) Name of the directive, without leading #
• {handler}  function(match:string, pattern:string, bufnr:number,
predicate:function, metadata:table)

### <a id="add_predicate()" class="section-title" href="#add_predicate()">add_predicate({name}, {handler}, {force})</a>
Adds a new predicate to be used in queries

Parameters: ~
• {name}     (string) Name of the predicate, without leading #
• {handler}  function(match:string, pattern:string, bufnr:number,
predicate:function)

### <a id="get_node_text()" class="section-title" href="#get_node_text()">get_node_text({node}, {source}, {opts})</a>
Gets the text corresponding to a given node

Parameters: ~
• {node}    userdata [tsnode](#tsnode)
• {source}  (number|string) Buffer or string from which the {node} is
extracted
• {opts}    (table|nil) Optional parameters.
• concat: (boolean) Concatenate result in a string (default
true)

Return: ~
(string[]|string)

### <a id="get_query()" class="section-title" href="#get_query()">get_query({lang}, {query_name})</a>
Returns the runtime query {query_name} for {lang}.

Parameters: ~
• {lang}        (string) Language to use for the query
• {query_name}  (string) Name of the query (e.g. "highlights")

Return: ~
Query Parsed query

### <a id="get_query_files()" class="section-title" href="#get_query_files()">Note:</a>
get_query_files({lang}, {query_name}, {is_included})
Gets the list of files used to make up a query

Parameters: ~
• {lang}         (string) Language to get query for
• {query_name}   (string) Name of the query to load (e.g., "highlights")
• {is_included}  (boolean|nil) Internal parameter, most of the time left
as `nil`

Return: ~
string[] query_files List of files to load for given query and
language

### <a id="list_directives()" class="section-title" href="#list_directives()">list_directives()</a>
Lists the currently available directives to use in queries.

Return: ~
string[] List of supported directives.

### <a id="list_predicates()" class="section-title" href="#list_predicates()">list_predicates()</a>
Lists the currently available predicates to use in queries.

Return: ~
string[] List of supported predicates.

### <a id="parse_query()" class="section-title" href="#parse_query()">parse_query({lang}, {query})</a>
Parse {query} as a string. (If the query is in a file, the caller should
read the contents into a string before calling).

Returns a `Query` (see [lua-treesitter-query](#lua-treesitter-query)) object which can be used to search nodes in
### <a id="the syntax tree for the patterns defined in {query} using `iter_` methods below." class="section-title" href="#the syntax tree for the patterns defined in {query} using `iter_` methods below.">Note:</a>

Exposes `info` and `captures` with additional context about {query}.
• `captures` contains the list of unique capture names defined in {query}.
-`info.captures` also points to `captures`.
• `info.patterns` contains information about predicates.

Parameters: ~
• {lang}   (string) Language to use for the query
• {query}  (string) Query in s-expr syntax

Return: ~
Query Parsed query

### <a id="Query:iter_captures()" class="section-title" href="#Query:iter_captures()">Note:</a>
Query:iter_captures({self}, {node}, {source}, {start}, {stop})
Iterate over all captures from all matches inside {node}

{source} is needed if the query contains predicates; then the caller must
ensure to use a freshly parsed tree consistent with the current text of
the buffer (if relevant). {start_row} and {end_row} can be used to limit
matches inside a row range (this is typically used with root node as the
{node}, i.e., to get syntax highlight matches in the current viewport).
When omitted, the {start} and {end} row values are used from the given
node.

The iterator returns three values: a numeric id identifying the capture,
the captured node, and metadata from any directives processing the match.
The following example shows how to get captures by name:
```

for id, node, metadata in query:iter_captures(tree:root(), bufnr, first, last) do
local name = query.captures[id] -- name of the capture in the query
-- typically useful info about the node:
local type = node:type() -- type of the captured node
local row1, col1, row2, col2 = node:range() -- range of the capture
... use the info here ...
end

```


Parameters: ~
• {node}    userdata [tsnode](#tsnode) under which the search will occur
• {source}  (number|string) Source buffer or string to extract text from
• {start}   (number) Starting line for the search
• {stop}    (number) Stopping line for the search (end-exclusive)
• {self}

Return: ~
(number) capture Matching capture id
(table) capture_node Capture for {node}
(table) metadata for the {capture}

### <a id="Query:iter_matches()" class="section-title" href="#Query:iter_matches()">Note:</a>
Query:iter_matches({self}, {node}, {source}, {start}, {stop})
Iterates the matches of self on a given range.

Iterate over all matches within a {node}. The arguments are the same as
for [Query:iter_captures()](#Query:iter_captures()) but the iterated values are different: an
(1-based) index of the pattern in the query, a table mapping capture
indices to nodes, and metadata from any directives processing the match.
If the query has more than one pattern, the capture table might be sparse
and e.g. `pairs()` method should be used over `ipairs` . Here is an example iterating over all captures in every match:
```

for pattern, match, metadata in cquery:iter_matches(tree:root(), bufnr, first, last) do
for id, node in pairs(match) do
local name = query.captures[id]
-- `node` was captured by the `name` capture in the match

local node_data = metadata[id] -- Node level metadata

... use the info here ...
end
end

```


Parameters: ~
• {node}    userdata [tsnode](#tsnode) under which the search will occur
• {source}  (number|string) Source buffer or string to search
• {start}   (number) Starting line for the search
• {stop}    (number) Stopping line for the search (end-exclusive)
• {self}

Return: ~
(number) pattern id
(table) match
(table) metadata

### <a id="set_query()" class="section-title" href="#set_query()">set_query({lang}, {query_name}, {text})</a>
Sets the runtime query named {query_name} for {lang}

This allows users to override any runtime files and/or configuration set
by plugins.

Parameters: ~
• {lang}        (string) Language to use for the query
• {query_name}  (string) Name of the query (e.g., "highlights")
• {text}        (string) Query text (unparsed).


## <a id="lua-treesitter-highlighter" class="section-title" href="#lua-treesitter-highlighter">Lua Module: Vim.Treesitter.Highlighter</a> 

### <a id="highlighter.new()" class="section-title" href="#highlighter.new()">new({tree}, {opts})</a>
Creates a new highlighter using

Parameters: ~
• {tree}  LanguageTree [LanguageTree](#LanguageTree) parser object to use for highlighting
• {opts}  (table|nil) Configuration of the highlighter:
• queries table overwrite queries used by the highlighter

Return: ~
TSHighlighter Created highlighter object

### <a id="TSHighlighter:destroy()" class="section-title" href="#TSHighlighter:destroy()">TSHighlighter:destroy({self})</a>
Removes all internal references to the highlighter

Parameters: ~
• {self}


## <a id="lua-treesitter-languagetree" class="section-title" href="#lua-treesitter-languagetree">Lua Module: Vim.Treesitter.Languagetree</a> 

### <a id="LanguageTree:children()" class="section-title" href="#LanguageTree:children()">LanguageTree:children({self})</a>
Returns a map of language to child tree.

Parameters: ~
• {self}

### <a id="LanguageTree:contains()" class="section-title" href="#LanguageTree:contains()">LanguageTree:contains({self}, {range})</a>
Determines whether {range} is contained in the [LanguageTree](#LanguageTree).

Parameters: ~
• {range}  (table) `{ start_line, start_col, end_line, end_col }`
• {self}

Return: ~
(boolean)

### <a id="LanguageTree:destroy()" class="section-title" href="#LanguageTree:destroy()">LanguageTree:destroy({self})</a>
Destroys this [LanguageTree](#LanguageTree) and all its children.

Any cleanup logic should be performed here.

Note: This DOES NOT remove this tree from a parent. Instead, `remove_child` must be called on the parent to remove it.

Parameters: ~
• {self}

### <a id="LanguageTree:for_each_child()" class="section-title" href="#LanguageTree:for_each_child()">Note:</a>
LanguageTree:for_each_child({self}, {fn}, {include_self})
Invokes the callback for each [LanguageTree](#LanguageTree) and its children recursively

Parameters: ~
• {fn}            function(tree: LanguageTree, lang: string)
• {include_self}  (boolean) Whether to include the invoking tree in the
results
• {self}

### <a id="LanguageTree:for_each_tree()" class="section-title" href="#LanguageTree:for_each_tree()">LanguageTree:for_each_tree({self}, {fn})</a>
Invokes the callback for each [LanguageTree](#LanguageTree) recursively.

Note: This includes the invoking tree's child trees as well.

Parameters: ~
• {fn}    function(tree: TSTree, languageTree: LanguageTree)
• {self}

### <a id="LanguageTree:included_regions()" class="section-title" href="#LanguageTree:included_regions()">LanguageTree:included_regions({self})</a>
Gets the set of included regions

Parameters: ~
• {self}

### <a id="LanguageTree:invalidate()" class="section-title" href="#LanguageTree:invalidate()">LanguageTree:invalidate({self}, {reload})</a>
Invalidates this parser and all its children

Parameters: ~
• {self}

### <a id="LanguageTree:is_valid()" class="section-title" href="#LanguageTree:is_valid()">LanguageTree:is_valid({self})</a>
Determines whether this tree is valid. If the tree is invalid, call `parse()` . This will return the updated tree.

Parameters: ~
• {self}

### <a id="LanguageTree:lang()" class="section-title" href="#LanguageTree:lang()">LanguageTree:lang({self})</a>
Gets the language of this tree node.

Parameters: ~
• {self}

### <a id="LanguageTree:language_for_range()" class="section-title" href="#LanguageTree:language_for_range()">Note:</a>
LanguageTree:language_for_range({self}, {range})
Gets the appropriate language that contains {range}.

Parameters: ~
• {range}  (table) `{ start_line, start_col, end_line, end_col }`
• {self}

Return: ~
LanguageTree Managing {range}

### <a id="LanguageTree:named_node_for_range()" class="section-title" href="#LanguageTree:named_node_for_range()">Note:</a>
LanguageTree:named_node_for_range({self}, {range}, {opts})
Gets the smallest named node that contains {range}.

Parameters: ~
• {range}  (table) `{ start_line, start_col, end_line, end_col }`
• {opts}   (table|nil) Optional keyword arguments:
• ignore_injections boolean Ignore injected languages
(default true)
• {self}

Return: ~
userdata[nil Found |tsnode](#nil Found |tsnode)

### <a id="LanguageTree:parse()" class="section-title" href="#LanguageTree:parse()">LanguageTree:parse({self})</a>
Parses all defined regions using a treesitter parser for the language this
tree represents. This will run the injection query for this language to
determine if any child languages should be created.

Parameters: ~
• {self}

Return: ~
userdata[] Table of parsed [tstree](#tstree)
(table) Change list

### <a id="LanguageTree:register_cbs()" class="section-title" href="#LanguageTree:register_cbs()">LanguageTree:register_cbs({self}, {cbs})</a>
Registers callbacks for the [LanguageTree](#LanguageTree).

Parameters: ~
• {cbs}   (table) An [nvim_buf_attach()](#nvim_buf_attach())-like table argument with the
following handlers:
• `on_bytes` : see [nvim_buf_attach()](#nvim_buf_attach()), but this will be called after the parsers callback.
• `on_changedtree` : a callback that will be called every time
the tree has syntactical changes. It will only be passed one
argument, which is a table of the ranges (as node ranges)
that changed.
• `on_child_added` : emitted when a child is added to the
tree.
• `on_child_removed` : emitted when a child is removed from
the tree.
• {self}

### <a id="LanguageTree:source()" class="section-title" href="#LanguageTree:source()">LanguageTree:source({self})</a>
Returns the source content of the language tree (bufnr or string).

Parameters: ~
• {self}

### <a id="LanguageTree:tree_for_range()" class="section-title" href="#LanguageTree:tree_for_range()">Note:</a>
LanguageTree:tree_for_range({self}, {range}, {opts})
Gets the tree that contains {range}.

Parameters: ~
• {range}  (table) `{ start_line, start_col, end_line, end_col }`
• {opts}   (table|nil) Optional keyword arguments:
• ignore_injections boolean Ignore injected languages
(default true)
• {self}

Return: ~
userdata[nil Contained |tstree](#nil Contained |tstree)

### <a id="LanguageTree:trees()" class="section-title" href="#LanguageTree:trees()">LanguageTree:trees({self})</a>
Returns all trees this language tree contains. Does not include child
languages.

Parameters: ~
• {self}

### <a id="languagetree.new()" class="section-title" href="#languagetree.new()">new({source}, {lang}, {opts})</a>
A [LanguageTree](#LanguageTree) holds the treesitter parser for a given language {lang}
used to parse a buffer. As the buffer may contain injected languages, the LanguageTree needs to store parsers for these child languages as well (which in turn
may contain child languages themselves, hence the name).

Parameters: ~
• {source}  (number|string) Buffer or a string of text to parse
• {lang}    (string) Root language this tree represents
• {opts}    (table|nil) Optional keyword arguments:
• injections table Mapping language to injection query
strings. This is useful for overriding the built-in
runtime file searching for the injection language query
per language.

Return: ~
LanguageTree [LanguageTree](#LanguageTree) parser object

vim:tw=78:ts=8:sw=4:sts=4:et:ft=help:norl:

