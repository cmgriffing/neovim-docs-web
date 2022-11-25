---
title:  Treesitter
layout: ../../layouts/MainLayout.astro
---

  <a name="treesitter.txt"></a><a name="treesitter"></a><h1> Treesitter</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/treesitter.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Treesitter integration</div>
<div class="old-help-para">Nvim integrates the <code>tree-sitter</code> library for incremental parsing of buffers:
<a href="https://tree-sitter.github.io/tree-sitter/">https://tree-sitter.github.io/tree-sitter/</a></div>
<div class="old-help-para">WARNING: Treesitter support is still experimental and subject to frequent
changes. This documentation may also not fully reflect the latest changes.</div>
<div class="old-help-para"><h2 class="help-heading">PARSER FILES<span class="help-heading-tags">                                              <a name="treesitter-parsers"></a><span class="help-tag">treesitter-parsers</span></span></h2></div>
<div class="old-help-para">Parsers are the heart of tree-sitter. They are libraries that tree-sitter will
search for in the <code>parser</code> runtime directory. By default, Nvim bundles only
parsers for C, Lua, and Vimscript, but parsers can be installed manually or
via a plugin like <a href="https://github.com/nvim-treesitter/nvim-treesitter">https://github.com/nvim-treesitter/nvim-treesitter</a>.
Parsers are searched for as <code>parser/{lang}.*</code> in any <a href="options.html#'runtimepath'">'runtimepath'</a> directory.
If multiple parsers for the same language are found, the first one is used.
(This typically implies the priority "user config &gt; plugins &gt; bundled".
A parser can also be loaded manually using a full path:<pre>vim.treesitter.require_language("python", "/path/to/python.so")</pre></div>
<div class="old-help-para"><h2 class="help-heading">LANGUAGE TREES<span class="help-heading-tags">                                       <a name="treesitter-languagetree"></a><span class="help-tag">treesitter-languagetree</span></span></h2>                                                                <a name="LanguageTree"></a><code class="help-tag-right">LanguageTree</code></div>
<div class="old-help-para">As buffers can contain multiple languages (e.g., Vimscript commands in a Lua
file), multiple parsers may be needed to parse the full buffer. These are
combined in a <a href="treesitter.html#LanguageTree">LanguageTree</a> object.</div>
<div class="old-help-para">To create a LanguageTree (parser object) for a buffer and a given language,
use<pre>tsparser = vim.treesitter.get_parser(bufnr, lang)</pre></div>
<div class="old-help-para"><code>bufnr=0</code> can be used for current buffer. <code>lang</code> will default to <a href="options.html#'filetype'">'filetype'</a>.
Currently, the parser will be retained for the lifetime of a buffer but this
is subject to change. A plugin should keep a reference to the parser object as
long as it wants incremental updates.</div>
<div class="old-help-para">Whenever you need to access the current syntax tree, parse the buffer:<pre>tstree = tsparser:parse()</pre></div>
<div class="old-help-para">This will return a table of immutable <a href="treesitter.html#treesitter-tree">treesitter-tree</a>s that represent the
current state of the buffer. When the plugin wants to access the state after a
(possible) edit it should call <code>parse()</code> again. If the buffer wasn't edited,
the same tree will be returned again without extra work. If the buffer was
parsed before, incremental parsing will be done of the changed parts.</div>
<div class="old-help-para">Note: To use the parser directly inside a <a href="api.html#nvim_buf_attach()">nvim_buf_attach()</a> Lua callback, you
must call <a href="treesitter.html#get_parser()">get_parser()</a> before you register your callback. But preferably
parsing shouldn't be done directly in the change callback anyway as they will
be very frequent. Rather a plugin that does any kind of analysis on a tree
should use a timer to throttle too frequent updates.</div>
<div class="old-help-para">See <a href="treesitter.html#lua-treesitter-languagetree">lua-treesitter-languagetree</a> for the list of available methods.</div>
<div class="old-help-para"><h2 class="help-heading">TREESITTER TREES<span class="help-heading-tags">                                             <a name="treesitter-tree"></a><span class="help-tag">treesitter-tree</span></span></h2>                                                                      <a name="tstree"></a><code class="help-tag-right">tstree</code></div>
<div class="old-help-para">A "treesitter tree" represents the parsed contents of a buffer, which can be
used to perform further analysis. It is a <a href="luaref.html#luaref-userdata">luaref-userdata</a> reference to an
object held by the tree-sitter library.</div>
<div class="old-help-para">An instance <code>tstree</code> of a treesitter tree supports the following methods.</div>
<div class="old-help-para">tstree:root()                                           <a name="tstree%3Aroot()"></a><code class="help-tag-right">tstree:root()</code>
    Return the root node of this tree.</div>
<div class="old-help-para">tstree:copy()                                           <a name="tstree%3Acopy()"></a><code class="help-tag-right">tstree:copy()</code>
    Returns a copy of the <code>tstree</code>.</div>
<div class="old-help-para"><h2 class="help-heading">TREESITTER NODES<span class="help-heading-tags">                                             <a name="treesitter-node"></a><span class="help-tag">treesitter-node</span></span></h2>                                                                      <a name="tsnode"></a><code class="help-tag-right">tsnode</code></div>
<div class="old-help-para">A "treesitter node" represents one specific element of the parsed contents of
a buffer, which can be captured by aQuery for, e.g., highlighting. It is a
<a href="luaref.html#luaref-userdata">luaref-userdata</a> reference to an object held by the tree-sitter library.</div>
<div class="old-help-para">An instance <code>tsnode</code> of a treesitter node supports the following methods.</div>
<div class="old-help-para">tsnode:parent()                                         <a name="tsnode%3Aparent()"></a><code class="help-tag-right">tsnode:parent()</code>
    Get the node's immediate parent.</div>
<div class="old-help-para">tsnode:next_sibling()                                   <a name="tsnode%3Anext_sibling()"></a><code class="help-tag-right">tsnode:next_sibling()</code>
    Get the node's next sibling.</div>
<div class="old-help-para">tsnode:prev_sibling()                                   <a name="tsnode%3Aprev_sibling()"></a><code class="help-tag-right">tsnode:prev_sibling()</code>
    Get the node's previous sibling.</div>
<div class="old-help-para">tsnode:next_named_sibling()                       <a name="tsnode%3Anext_named_sibling()"></a><code class="help-tag-right">tsnode:next_named_sibling()</code>
    Get the node's next named sibling.</div>
<div class="old-help-para">tsnode:prev_named_sibling()                       <a name="tsnode%3Aprev_named_sibling()"></a><code class="help-tag-right">tsnode:prev_named_sibling()</code>
    Get the node's previous named sibling.</div>
<div class="old-help-para">tsnode:iter_children()                                 <a name="tsnode%3Aiter_children()"></a><code class="help-tag-right">tsnode:iter_children()</code>
    Iterates over all the direct children of <code>{tsnode}</code>, regardless of whether
    they are named or not.
    Returns the child node plus the eventual field name corresponding to this
    child node.</div>
<div class="old-help-para">tsnode:field({name})                                    <a name="tsnode%3Afield()"></a><code class="help-tag-right">tsnode:field()</code>
    Returns a table of the nodes corresponding to the <code>{name}</code> field.</div>
<div class="old-help-para">tsnode:child_count()                                    <a name="tsnode%3Achild_count()"></a><code class="help-tag-right">tsnode:child_count()</code>
    Get the node's number of children.</div>
<div class="old-help-para">tsnode:child({index})                                   <a name="tsnode%3Achild()"></a><code class="help-tag-right">tsnode:child()</code>
    Get the node's child at the given <code>{index}</code>, where zero represents the first
    child.</div>
<div class="old-help-para">tsnode:named_child_count()                         <a name="tsnode%3Anamed_child_count()"></a><code class="help-tag-right">tsnode:named_child_count()</code>
    Get the node's number of named children.</div>
<div class="old-help-para">tsnode:named_child({index})                              <a name="tsnode%3Anamed_child()"></a><code class="help-tag-right">tsnode:named_child()</code>
    Get the node's named child at the given <code>{index}</code>, where zero represents the
    first named child.</div>
<div class="old-help-para">tsnode:start()                                          <a name="tsnode%3Astart()"></a><code class="help-tag-right">tsnode:start()</code>
    Get the node's start position. Return three values: the row, column and
    total byte count (all zero-based).</div>
<div class="old-help-para">tsnode:end_()                                           <a name="tsnode%3Aend_()"></a><code class="help-tag-right">tsnode:end_()</code>
    Get the node's end position. Return three values: the row, column and
    total byte count (all zero-based).</div>
<div class="old-help-para">tsnode:range()                                          <a name="tsnode%3Arange()"></a><code class="help-tag-right">tsnode:range()</code>
    Get the range of the node. Return four values: the row, column of the
    start position, then the row, column of the end position.</div>
<div class="old-help-para">tsnode:type()                                           <a name="tsnode%3Atype()"></a><code class="help-tag-right">tsnode:type()</code>
    Get the node's type as a string.</div>
<div class="old-help-para">tsnode:symbol()                                         <a name="tsnode%3Asymbol()"></a><code class="help-tag-right">tsnode:symbol()</code>
    Get the node's type as a numerical id.</div>
<div class="old-help-para">tsnode:named()                                          <a name="tsnode%3Anamed()"></a><code class="help-tag-right">tsnode:named()</code>
    Check if the node is named. Named nodes correspond to named rules in the
    grammar, whereas anonymous nodes correspond to string literals in the
    grammar.</div>
<div class="old-help-para">tsnode:missing()                                        <a name="tsnode%3Amissing()"></a><code class="help-tag-right">tsnode:missing()</code>
    Check if the node is missing. Missing nodes are inserted by the parser in
    order to recover from certain kinds of syntax errors.</div>
<div class="old-help-para">tsnode:has_error()                                      <a name="tsnode%3Ahas_error()"></a><code class="help-tag-right">tsnode:has_error()</code>
    Check if the node is a syntax error or contains any syntax errors.</div>
<div class="old-help-para">tsnode:sexpr()                                          <a name="tsnode%3Asexpr()"></a><code class="help-tag-right">tsnode:sexpr()</code>
    Get an S-expression representing the node as a string.</div>
<div class="old-help-para">tsnode:id()                                             <a name="tsnode%3Aid()"></a><code class="help-tag-right">tsnode:id()</code>
    Get an unique identifier for the node inside its own tree.</div>
<div class="old-help-para">    No guarantees are made about this identifier's internal representation,
    except for being a primitive Lua type with value equality (so not a
    table). Presently it is a (non-printable) string.</div>
<div class="old-help-para">    Note: The <code>id</code> is not guaranteed to be unique for nodes from different
    trees.</div>
<div class="old-help-para">                                                <a name="tsnode%3Adescendant_for_range()"></a><code class="help-tag-right">tsnode:descendant_for_range()</code>
tsnode:descendant_for_range({start_row}, <code>{start_col}</code>, <code>{end_row}</code>, <code>{end_col}</code>)
    Get the smallest node within this node that spans the given range of (row,
    column) positions</div>
<div class="old-help-para">                                          <a name="tsnode%3Anamed_descendant_for_range()"></a><code class="help-tag-right">tsnode:named_descendant_for_range()</code>
tsnode:named_descendant_for_range({start_row}, <code>{start_col}</code>, <code>{end_row}</code>, <code>{end_col}</code>)
    Get the smallest named node within this node that spans the given range of
    (row, column) positions</div>
<div class="old-help-para"><h2 class="help-heading">TREESITTER QUERIES<span class="help-heading-tags">                                          <a name="treesitter-query"></a><span class="help-tag">treesitter-query</span></span></h2></div>
<div class="old-help-para">Treesitter queries are a way to extract information about a parsed <a href="treesitter.html#tstree">tstree</a>,
e.g., for the purpose of highlighting. Briefly, a <code>query</code> consists of one or
more patterns. A <code>pattern</code> is defined over node types in the syntax tree. A
<code>match</code> corresponds to specific elements of the syntax tree which match a
pattern. Patterns may optionally define captures and predicates. A <code>capture</code>
allows you to associate names with a specific node in a pattern. A <code>predicate</code>
adds arbitrary metadata and conditional data to a match.</div>
<div class="old-help-para">Queries are written in a lisp-like language documented in
<a href="https://tree-sitter.github.io/tree-sitter/using-parsers#query-syntax">https://tree-sitter.github.io/tree-sitter/using-parsers#query-syntax</a>
Note: The predicates listed there page differ from those Nvim supports. See
<a href="treesitter.html#treesitter-predicates">treesitter-predicates</a> for a complete list of predicates supported by Nvim.</div>
<div class="old-help-para">Nvim looks for queries as <code>*.scm</code> files in a <code>queries</code> directory under
<code>runtimepath</code>, where each file contains queries for a specific language and
purpose, e.g., <code>queries/lua/highlights.scm</code> for highlighting Lua files.
By default, the first query on <code>runtimepath</code> is used (which usually implies
that user config takes precedence over plugins, which take precedence over
queries bundled with Neovim). If a query should extend other queries instead
of replacing them, use <a href="treesitter.html#treesitter-query-modeline-extends">treesitter-query-modeline-extends</a>.</div>
<div class="old-help-para">See <a href="treesitter.html#lua-treesitter-query">lua-treesitter-query</a> for the list of available methods for working with
treesitter queries from Lua.</div>
<div class="old-help-para"><h3 class="help-heading">TREESITTER QUERY PREDICATES<span class="help-heading-tags">                            <a name="treesitter-predicates"></a><span class="help-tag">treesitter-predicates</span></span></h3></div>
<div class="old-help-para">Predicates are special scheme nodes that are evaluated to conditionally capture
nodes. For example, the <code>eq?</code> predicate can be used as follows:<pre>((identifier) @foo (#eq? @foo "foo"))</pre></div>
<div class="old-help-para">to only match identifier corresponding to the <code>"foo"</code> text.</div>
<div class="old-help-para">The following predicates are built in:</div>
<div class="old-help-para">    <code>eq?</code>                                            <a name="treesitter-predicate-eq%3F"></a><code class="help-tag-right">treesitter-predicate-eq?</code>
        Match a string against the text corresponding to a node:<pre>((identifier) @foo (#eq? @foo "foo"))
((node1) @left (node2) @right (#eq? @left @right))</pre></div>
<div class="old-help-para">    <code>match?</code>                                      <a name="treesitter-predicate-match%3F"></a><code class="help-tag-right">treesitter-predicate-match?</code>
    <code>vim-match?</code>                              <a name="treesitter-predicate-vim-match%3F"></a><code class="help-tag-right">treesitter-predicate-vim-match?</code>
         Match a <a href="pattern.html#regexp">regexp</a> against the text corresponding to a node:<pre>((identifier) @constant (#match? @constant "^[A-Z_]+$"))</pre></div>
<div class="old-help-para">         Note: The <code>^</code> and <code>$</code> anchors will match the start and end of the
               node's text.</div>
<div class="old-help-para">    <code>lua-match?</code>                              <a name="treesitter-predicate-lua-match%3F"></a><code class="help-tag-right">treesitter-predicate-lua-match?</code>
         Match <a href="lua.html#lua-patterns">lua-patterns</a> against the text corresponding to a node,
         similar to <code>match?</code></div>
<div class="old-help-para">    <code>contains?</code>                                <a name="treesitter-predicate-contains%3F"></a><code class="help-tag-right">treesitter-predicate-contains?</code>
        Match a string against parts of the text corresponding to a node:<pre>((identifier) @foo (#contains? @foo "foo"))
((identifier) @foo-bar (#contains? @foo-bar "foo" "bar"))</pre></div>
<div class="old-help-para">    <code>any-of?</code>                                    <a name="treesitter-predicate-any-of%3F"></a><code class="help-tag-right">treesitter-predicate-any-of?</code>
        Match any of the given strings against the text corresponding to
        a node:<pre>((identifier) @foo (#any-of? @foo "foo" "bar"))</pre></div>
<div class="old-help-para">        This is the recommended way to check if the node matches one of many
        keywords, as it has been optimized for this.</div>
<div class="old-help-para">                                                 <a name="lua-treesitter-not-predicate"></a><code class="help-tag-right">lua-treesitter-not-predicate</code>
Each predicate has a <code>not-</code> prefixed predicate that is just the negation of
the predicate.</div>
<div class="old-help-para">Further predicates can be added via <code>vim.treesitter.query.</code><a href="treesitter.html#add_predicate()">add_predicate()</a>.
Use <code>vim.treesitter.query.</code><a href="treesitter.html#list_predicates()">list_predicates()</a> to list all available
predicates.</div>
<div class="old-help-para"><h3 class="help-heading">TREESITTER QUERY DIRECTIVES<span class="help-heading-tags">                            <a name="treesitter-directives"></a><span class="help-tag">treesitter-directives</span></span></h3></div>
<div class="old-help-para">Treesitter directives store metadata for a node or match and perform side
effects. For example, the <code>set!</code> directive sets metadata on the match or node:<pre>((identifier) @foo (#set! "type" "parameter"))</pre></div>
<div class="old-help-para">The following directives are built in:</div>
<div class="old-help-para">    <code>set!</code>                                          <a name="treesitter-directive-set%21"></a><code class="help-tag-right">treesitter-directive-set!</code>
        Sets key/value metadata for a specific match or capture. Value is
        accessible as either <code>metadata[key]</code> (match specific) or
        <code>metadata[capture_id][key]</code> (capture specific).</div>
<div class="old-help-para"><div class="help-column_heading">        Parameters:</div>            <code>{capture_id}</code> (optional)
            <code>{key}</code>
            <code>{value}</code></div>
<div class="old-help-para">        Examples:<pre>((identifier) @foo (#set! @foo "kind" "parameter"))
((node1) @left (node2) @right (#set! "type" "pair"))</pre></div>
<div class="old-help-para">    <code>offset!</code>                                      <a name="treesitter-directive-offset%21"></a><code class="help-tag-right">treesitter-directive-offset!</code>
        Takes the range of the captured node and applies an offset. This will
        generate a new range object for the captured node as
        <code>metadata[capture_id].range</code>.</div>
<div class="old-help-para"><div class="help-column_heading">        Parameters:</div>            <code>{capture_id}</code>
            <code>{start_row}</code>
            <code>{start_col}</code>
            <code>{end_row}</code>
            <code>{end_col}</code></div>
<div class="old-help-para">        Example:<pre>((identifier) @constant (#offset! @constant 0 1 0 -1))</pre></div>
<div class="old-help-para">Further directives can be added via <code>vim.treesitter.query.</code><a href="treesitter.html#add_directive()">add_directive()</a>.
Use <code>vim.treesitter.query.</code><a href="treesitter.html#list_directives()">list_directives()</a> to list all available
directives.</div>
<div class="old-help-para"><h3 class="help-heading">TREESITTER QUERY MODELINES<span class="help-heading-tags">                          <a name="treesitter-query-modeline"></a><span class="help-tag">treesitter-query-modeline</span></span></h3></div>
<div class="old-help-para">Neovim supports to customize the behavior of the queries using a set of
"modelines", that is comments in the queries starting with <code>;</code>. Here are the
currently supported modeline alternatives:</div>
<div class="old-help-para">    <code>inherits: {lang}...</code>                     <a name="treesitter-query-modeline-inherits"></a><code class="help-tag-right">treesitter-query-modeline-inherits</code>
        Specifies that this query should inherit the queries from <code>{lang}</code>.
        This will recursively descend in the queries of <code>{lang}</code> unless wrapped
        in parentheses: <code>({lang})</code>.
        Note: This is meant to be used to include queries from another
        language. If you want your query to extend the queries of the same
        language, use <code>extends</code>.</div>
<div class="old-help-para">    <code>extends</code>                                  <a name="treesitter-query-modeline-extends"></a><code class="help-tag-right">treesitter-query-modeline-extends</code>
        Specifies that this query should be used as an extension for the
        query, i.e. that it should be merged with the others.
        Note: The order of the extensions, and the query that will be used as
        a base depends on your <a href="options.html#'runtimepath'">'runtimepath'</a> value.</div>
<div class="old-help-para">Note: These modeline comments must be at the top of the query, but can be
repeated, for example, the following two modeline blocks are both valid:<pre>;; inherits: foo,bar
;; extends

;; extends
;;
;; inherits: baz</pre></div>
<div class="old-help-para"><h2 class="help-heading">TREESITTER SYNTAX HIGHLIGHTING<span class="help-heading-tags">                          <a name="treesitter-highlight"></a><span class="help-tag">treesitter-highlight</span></span></h2></div>
<div class="old-help-para">Syntax highlighting is specified through queries named <code>highlights.scm</code>,
which match a <a href="treesitter.html#tsnode">tsnode</a> in the parsed <a href="treesitter.html#tstree">tstree</a> to a <code>capture</code> that can be
assigned a highlight group. For example, the query<pre>(parameters (identifier) @parameter)</pre></div>
<div class="old-help-para">matches any <code>identifier</code> node inside a function <code>parameter</code> node (e.g., the
<code>bar</code> in <code>foo(bar)</code>) to the capture named <code>@parameter</code>. It is also possible to
match literal expressions (provided the parser returns them):<pre>"return" @keyword.return</pre></div>
<div class="old-help-para">Assuming a suitable parser and <code>highlights.scm</code> query is found in runtimepath,
treesitter highlighting for the current buffer can be enabled simply via
vim.treesitter.start().</div>
<div class="old-help-para">                                                 <a name="treesitter-highlight-groups"></a><code class="help-tag-right">treesitter-highlight-groups</code>
The capture names, with <code>@</code> included, are directly usable as highlight groups.
For many commonly used captures, the corresponding highlight groups are linked
to Nvim's standard <a href="syntax.html#highlight-groups">highlight-groups</a> by default but can be overridden in
colorschemes.</div>
<div class="old-help-para">A fallback system is implemented, so that more specific groups fallback to
more generic ones. For instance, in a language that has separate doc comments,
<code>@comment.doc</code> could be used. If this group is not defined, the highlighting
for an ordinary <code>@comment</code> is used. This way, existing color schemes already
work out of the box, but it is possible to add more specific variants for
queries that make them available.</div>
<div class="old-help-para">As an additional rule, capture highlights can always be specialized by
language, by appending the language name after an additional dot. For
instance, to highlight comments differently per language:<pre>hi @comment.c guifg=Blue
hi @comment.lua @guifg=DarkBlue
hi link @comment.doc.java String</pre></div>
<div class="old-help-para">The following captures are linked by default to standard <a href="syntax.html#group-name">group-name</a>s:
<pre>@text.literal      Comment
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
@tag               Tag</pre></div>
<div class="old-help-para">                                                  <a name="treesitter-highlight-spell"></a><code class="help-tag-right">treesitter-highlight-spell</code>
The special <code>@spell</code> capture can be used to indicate that a node should be
spell checked by Nvim's builtin <a href="spell.html#spell">spell</a> checker. For example, the following
capture marks comments as to be checked:<pre>(comment) @spell</pre></div>
<div class="old-help-para">There is also <code>@nospell</code> which disables spellchecking regions with <code>@spell</code>.</div>
<div class="old-help-para">                                                <a name="treesitter-highlight-conceal"></a><code class="help-tag-right">treesitter-highlight-conceal</code>
Treesitter highlighting supports <a href="syntax.html#conceal">conceal</a> via the <code>conceal</code> metadata. By
convention, nodes to be concealed are captured as <code>@conceal</code>, but any capture
can be used. For example, the following query can be used to hide code block
delimiters in Markdown:<pre>(fenced_code_block_delimiter) @conceal (#set! conceal "")</pre></div>
<div class="old-help-para">It is also possible to replace a node with a single character, which (unlike
legacy syntax) can be given a custom highlight. For example, the following
(ill-advised) query replaces the <code>!=</code> operator by a Unicode glyph, which is
still highlighted the same as other operators:<pre>"!=" @operator (#set! conceal "≠")</pre></div>
<div class="old-help-para">Conceals specified in this way respect <a href="options.html#'conceallevel'">'conceallevel'</a>.</div>
<div class="old-help-para">                                               <a name="treesitter-highlight-priority"></a><code class="help-tag-right">treesitter-highlight-priority</code>
Treesitter uses <a href="api.html#nvim_buf_set_extmark()">nvim_buf_set_extmark()</a> to set highlights with a default
priority of 100. This enables plugins to set a highlighting priority lower or
higher than tree-sitter. It is also possible to change the priority of an
individual query pattern manually by setting its <code>"priority"</code> metadata
attribute:<pre>(super_important_node) @ImportantHighlight (#set! "priority" 105)</pre></div>
<div class="old-help-para"><h2 class="help-heading">VIM.TREESITTER<span class="help-heading-tags">                                                <a name="lua-treesitter"></a><span class="help-tag">lua-treesitter</span></span></h2></div>
<div class="old-help-para">The remainder of this document is a reference manual for the <code>vim.treesitter</code>
Lua module, which is the main interface for Nvim's tree-sitter integration.
Most of the following content is automatically generated from the function
documentation.</div>
<div class="old-help-para">                                             <a name="vim.treesitter.language_version"></a><code class="help-tag-right">vim.treesitter.language_version</code>
The latest parser ABI version that is supported by the bundled tree-sitter
library.</div>
<div class="old-help-para">                                     <a name="vim.treesitter.minimum_language_version"></a><code class="help-tag-right">vim.treesitter.minimum_language_version</code>
The earliest parser ABI version that is supported by the bundled tree-sitter
library.</div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.treesitter<span class="help-heading-tags">                               <a name="lua-treesitter-core"></a><span class="help-tag">lua-treesitter-core</span></span></h2></div>
<div class="old-help-para">get_captures_at_cursor(<code>{winnr}</code>)                     <a name="get_captures_at_cursor()"></a><code class="help-tag-right">get_captures_at_cursor()</code>
    Returns a list of highlight capture names under the cursor</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{winnr}</code>  (number|nil) Window handle or 0 for current window (default)
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        string[] List of capture names</div>
<div class="old-help-para">get_captures_at_pos(<code>{bufnr}</code>, <code>{row}</code>, <code>{col}</code>)             <a name="get_captures_at_pos()"></a><code class="help-tag-right">get_captures_at_pos()</code>
    Returns a list of highlight captures at the given position</div>
<div class="old-help-para">    Each capture is represented by a table containing the capture name as a
    string as well as a table of metadata (<code>priority</code>, <code>conceal</code>, ...; empty
    if none are defined).</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>  (number) Buffer number (0 for current buffer)
</div><div class="help-li" style=""> <code>{row}</code>    (number) Position row
</div><div class="help-li" style=""> <code>{col}</code>    (number) Position column
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        table[] List of captures{ capture = "capture name", metadata = { ...
        } }`
get_node_at_cursor(<code>{winnr}</code>)                             <a name="get_node_at_cursor()"></a><code class="help-tag-right">get_node_at_cursor()</code>
    Returns the smallest named node under the cursor</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{winnr}</code>  (number|nil) Window handle or 0 for current window (default)
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (string) Name of node under the cursor</div>
<div class="old-help-para">get_node_at_pos(<code>{bufnr}</code>, <code>{row}</code>, <code>{col}</code>, <code>{opts}</code>)             <a name="get_node_at_pos()"></a><code class="help-tag-right">get_node_at_pos()</code>
    Returns the smallest named node at the given position</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>  (number) Buffer number (0 for current buffer)
</div><div class="help-li" style=""> <code>{row}</code>    (number) Position row
</div><div class="help-li" style=""> <code>{col}</code>    (number) Position column
</div><div class="help-li" style=""> <code>{opts}</code>   (table) Optional keyword arguments:
</div><div class="help-li" style="margin-left: 3rem;"> ignore_injections boolean Ignore injected languages
                   (default true)
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        userdata <a href="treesitter.html#tsnode">tsnode</a> under the cursor</div>
<div class="old-help-para">get_node_range(<code>{node_or_range}</code>)                             <a name="get_node_range()"></a><code class="help-tag-right">get_node_range()</code>
    Returns the node's range or an unpacked range table</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{node_or_range}</code>  (userdata|table) <a href="treesitter.html#tsnode">tsnode</a> or table of positions
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table) <code>{ start_row, start_col, end_row, end_col }</code></div>
<div class="old-help-para">get_parser(<code>{bufnr}</code>, <code>{lang}</code>, <code>{opts}</code>)                             <a name="get_parser()"></a><code class="help-tag-right">get_parser()</code>
    Returns the parser for a specific buffer and filetype and attaches it to
    the buffer</div>
<div class="old-help-para">    If needed, this will create the parser.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>  (number|nil) Buffer the parser should be tied to (default:
                 current buffer)
</div><div class="help-li" style=""> <code>{lang}</code>   (string|nil) Filetype of this parser (default: buffer
                 filetype)
</div><div class="help-li" style=""> <code>{opts}</code>   (table|nil) Options to pass to the created language tree
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        LanguageTree <a href="treesitter.html#LanguageTree">LanguageTree</a> object to use for parsing</div>
<div class="old-help-para">get_string_parser(<code>{str}</code>, <code>{lang}</code>, <code>{opts}</code>)                 <a name="get_string_parser()"></a><code class="help-tag-right">get_string_parser()</code>
    Returns a string parser</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{str}</code>   (string) Text to parse
</div><div class="help-li" style=""> <code>{lang}</code>  (string) Language of this string
</div><div class="help-li" style=""> <code>{opts}</code>  (table|nil) Options to pass to the created language tree
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        LanguageTree <a href="treesitter.html#LanguageTree">LanguageTree</a> object to use for parsing</div>
<div class="old-help-para">is_ancestor(<code>{dest}</code>, <code>{source}</code>)                                  <a name="is_ancestor()"></a><code class="help-tag-right">is_ancestor()</code>
    Determines whether a node is the ancestor of another</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{dest}</code>    userdata Possible ancestor <a href="treesitter.html#tsnode">tsnode</a>
</div><div class="help-li" style=""> <code>{source}</code>  userdata Possible descendant <a href="treesitter.html#tsnode">tsnode</a>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (boolean) True if <code>{dest}</code> is an ancestor of <code>{source}</code></div>
<div class="old-help-para">is_in_node_range(<code>{node}</code>, <code>{line}</code>, <code>{col}</code>)                   <a name="is_in_node_range()"></a><code class="help-tag-right">is_in_node_range()</code>
    Determines whether (line, col) position is in node range</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{node}</code>  userdata <a href="treesitter.html#tsnode">tsnode</a> defining the range
</div><div class="help-li" style=""> <code>{line}</code>  (number) Line (0-based)
</div><div class="help-li" style=""> <code>{col}</code>   (number) Column (0-based)
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (boolean) True if the position is in node range</div>
<div class="old-help-para">node_contains(<code>{node}</code>, <code>{range}</code>)                               <a name="node_contains()"></a><code class="help-tag-right">node_contains()</code>
    Determines if a node contains a range</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{node}</code>   userdata <a href="treesitter.html#tsnode">tsnode</a>
</div><div class="help-li" style=""> <code>{range}</code>  (table)
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (boolean) True if the <code>{node}</code> contains the <code>{range}</code></div>
<div class="old-help-para">start(<code>{bufnr}</code>, <code>{lang}</code>)                                               <a name="start()"></a><code class="help-tag-right">start()</code>
    Starts treesitter highlighting for a buffer</div>
<div class="old-help-para">    Can be used in an ftplugin or FileType autocommand.</div>
<div class="old-help-para">    Note: By default, disables regex syntax highlighting, which may be
    required for some plugins. In this case, add <code>vim.bo.syntax = 'on'</code> after
    the call to <code>start</code>.</div>
<div class="old-help-para">    Example:<pre>vim.api.nvim_create_autocmd( 'FileType', { pattern = 'tex',
    callback = function(args)
        vim.treesitter.start(args.buf, 'latex')
        vim.bo[args.buf].syntax = 'on'  -- only if additional legacy syntax is needed
    end
})</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>  (number|nil) Buffer to be highlighted (default: current
                 buffer)
</div><div class="help-li" style=""> <code>{lang}</code>   (string|nil) Language of the parser (default: buffer
                 filetype)
</div></div>
<div class="old-help-para">stop(<code>{bufnr}</code>)                                                         <a name="stop()"></a><code class="help-tag-right">stop()</code>
    Stops treesitter highlighting for a buffer</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{bufnr}</code>  (number|nil) Buffer to stop highlighting (default: current
                 buffer)
</div></div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.treesitter.language<span class="help-heading-tags">                  <a name="lua-treesitter-language"></a><span class="help-tag">lua-treesitter-language</span></span></h2></div>
<div class="old-help-para">inspect_language(<code>{lang}</code>)                                  <a name="inspect_language()"></a><code class="help-tag-right">inspect_language()</code>
    Inspects the provided language.</div>
<div class="old-help-para">    Inspecting provides some useful information on the language like node
    names, ...</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{lang}</code>  (string) Language
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (table)</div>
<div class="old-help-para">                                                          <a name="require_language()"></a><code class="help-tag-right">require_language()</code>
require_language(<code>{lang}</code>, <code>{path}</code>, <code>{silent}</code>, <code>{symbol_name}</code>)
    Asserts that a parser for the language <code>{lang}</code> is installed.</div>
<div class="old-help-para">    Parsers are searched in the <code>parser</code> runtime directory, or the provided
    <code>{path}</code></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{lang}</code>         (string) Language the parser should parse
</div><div class="help-li" style=""> <code>{path}</code>         (string|nil) Optional path the parser is located at
</div><div class="help-li" style=""> <code>{silent}</code>       (boolean|nil) Don't throw an error if language not
                       found
</div><div class="help-li" style=""> <code>{symbol_name}</code>  (string|nil) Internal symbol name for the language to
                       load
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (boolean) If the specified language is installed</div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.treesitter.query<span class="help-heading-tags">                        <a name="lua-treesitter-query"></a><span class="help-tag">lua-treesitter-query</span></span></h2></div>
<div class="old-help-para">add_directive(<code>{name}</code>, <code>{handler}</code>, <code>{force}</code>)                    <a name="add_directive()"></a><code class="help-tag-right">add_directive()</code>
    Adds a new directive to be used in queries</div>
<div class="old-help-para">    Handlers can set match level data by setting directly on the metadata
    object <code>metadata.key = value</code>, additionally, handlers can set node level
    data by using the capture id on the metadata table
    <code>metadata[capture_id].key = value</code></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{name}</code>     (string) Name of the directive, without leading #
</div><div class="help-li" style=""> <code>{handler}</code>  function(match:string, pattern:string, bufnr:number,
                   predicate:function, metadata:table)
</div></div>
<div class="old-help-para">add_predicate(<code>{name}</code>, <code>{handler}</code>, <code>{force}</code>)                    <a name="add_predicate()"></a><code class="help-tag-right">add_predicate()</code>
    Adds a new predicate to be used in queries</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{name}</code>     (string) Name of the predicate, without leading #
</div><div class="help-li" style=""> <code>{handler}</code>  function(match:string, pattern:string, bufnr:number,
                   predicate:function)
</div></div>
<div class="old-help-para">get_node_text(<code>{node}</code>, <code>{source}</code>, <code>{opts}</code>)                      <a name="get_node_text()"></a><code class="help-tag-right">get_node_text()</code>
    Gets the text corresponding to a given node</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{node}</code>    userdata <a href="treesitter.html#tsnode">tsnode</a>
</div><div class="help-li" style=""> <code>{source}</code>  (number|string) Buffer or string from which the <code>{node}</code> is
                  extracted
</div><div class="help-li" style=""> <code>{opts}</code>    (table|nil) Optional parameters.
</div><div class="help-li" style="margin-left: 3rem;"> concat: (boolean) Concatenate result in a string (default
                    true)
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (string[]|string)</div>
<div class="old-help-para">get_query(<code>{lang}</code>, <code>{query_name}</code>)                                  <a name="get_query()"></a><code class="help-tag-right">get_query()</code>
    Returns the runtime query <code>{query_name}</code> for <code>{lang}</code>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{lang}</code>        (string) Language to use for the query
</div><div class="help-li" style=""> <code>{query_name}</code>  (string) Name of the query (e.g. "highlights")
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        Query Parsed query</div>
<div class="old-help-para">                                                           <a name="get_query_files()"></a><code class="help-tag-right">get_query_files()</code>
get_query_files(<code>{lang}</code>, <code>{query_name}</code>, <code>{is_included}</code>)
    Gets the list of files used to make up a query</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{lang}</code>         (string) Language to get query for
</div><div class="help-li" style=""> <code>{query_name}</code>   (string) Name of the query to load (e.g., "highlights")
</div><div class="help-li" style=""> <code>{is_included}</code>  (boolean|nil) Internal parameter, most of the time left
                       as <code>nil</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        string[] query_files List of files to load for given query and
        language</div>
<div class="old-help-para">list_directives()                                          <a name="list_directives()"></a><code class="help-tag-right">list_directives()</code>
    Lists the currently available directives to use in queries.</div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        string[] List of supported directives.</div>
<div class="old-help-para">list_predicates()                                          <a name="list_predicates()"></a><code class="help-tag-right">list_predicates()</code>
    Lists the currently available predicates to use in queries.</div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        string[] List of supported predicates.</div>
<div class="old-help-para">parse_query(<code>{lang}</code>, <code>{query}</code>)                                   <a name="parse_query()"></a><code class="help-tag-right">parse_query()</code>
    Parse <code>{query}</code> as a string. (If the query is in a file, the caller should
    read the contents into a string before calling).</div>
<div class="old-help-para">    Returns a <code>Query</code> (see <a href="treesitter.html#lua-treesitter-query">lua-treesitter-query</a>) object which can be used to search nodes in
    the syntax tree for the patterns defined in <code>{query}</code> using <code>iter_*</code> methods below.</div>
<div class="old-help-para">    Exposes <code>info</code> and <code>captures</code> with additional context about <code>{query}</code>.
<div class="help-li" style=""> <code>captures</code> contains the list of unique capture names defined in <code>{query}</code>.
      -`info.captures` also points to <code>captures</code>.
</div><div class="help-li" style=""> <code>info.patterns</code> contains information about predicates.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{lang}</code>   (string) Language to use for the query
</div><div class="help-li" style=""> <code>{query}</code>  (string) Query in s-expr syntax
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        Query Parsed query</div>
<div class="old-help-para">                                                       <a name="Query%3Aiter_captures()"></a><code class="help-tag-right">Query:iter_captures()</code>
Query:iter_captures({self}, <code>{node}</code>, <code>{source}</code>, <code>{start}</code>, <code>{stop}</code>)
    Iterate over all captures from all matches inside <code>{node}</code></div>
<div class="old-help-para">    <code>{source}</code> is needed if the query contains predicates; then the caller must
    ensure to use a freshly parsed tree consistent with the current text of
    the buffer (if relevant). <code>{start_row}</code> and <code>{end_row}</code> can be used to limit
    matches inside a row range (this is typically used with root node as the
    <code>{node}</code>, i.e., to get syntax highlight matches in the current viewport).
    When omitted, the <code>{start}</code> and <code>{end}</code> row values are used from the given
    node.</div>
<div class="old-help-para">    The iterator returns three values: a numeric id identifying the capture,
    the captured node, and metadata from any directives processing the match.
    The following example shows how to get captures by name:<pre>for id, node, metadata in query:iter_captures(tree:root(), bufnr, first, last) do
  local name = query.captures[id] -- name of the capture in the query
  -- typically useful info about the node:
  local type = node:type() -- type of the captured node
  local row1, col1, row2, col2 = node:range() -- range of the capture
  ... use the info here ...
end</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{node}</code>    userdata <a href="treesitter.html#tsnode">tsnode</a> under which the search will occur
</div><div class="help-li" style=""> <code>{source}</code>  (number|string) Source buffer or string to extract text from
</div><div class="help-li" style=""> <code>{start}</code>   (number) Starting line for the search
</div><div class="help-li" style=""> <code>{stop}</code>    (number) Stopping line for the search (end-exclusive)
</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (number) capture Matching capture id
        (table) capture_node Capture for <code>{node}</code>
        (table) metadata for the <code>{capture}</code></div>
<div class="old-help-para">                                                        <a name="Query%3Aiter_matches()"></a><code class="help-tag-right">Query:iter_matches()</code>
Query:iter_matches({self}, <code>{node}</code>, <code>{source}</code>, <code>{start}</code>, <code>{stop}</code>)
    Iterates the matches of self on a given range.</div>
<div class="old-help-para">    Iterate over all matches within a <code>{node}</code>. The arguments are the same as
    for <a href="treesitter.html#Query%3Aiter_captures()">Query:iter_captures()</a> but the iterated values are different: an
    (1-based) index of the pattern in the query, a table mapping capture
    indices to nodes, and metadata from any directives processing the match.
    If the query has more than one pattern, the capture table might be sparse
    and e.g. <code>pairs()</code> method should be used over <code>ipairs</code> . Here is an example iterating over all captures in every match:<pre>for pattern, match, metadata in cquery:iter_matches(tree:root(), bufnr, first, last) do
  for id, node in pairs(match) do
    local name = query.captures[id]
    -- `node` was captured by the `name` capture in the match

    local node_data = metadata[id] -- Node level metadata

    ... use the info here ...
  end
end</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{node}</code>    userdata <a href="treesitter.html#tsnode">tsnode</a> under which the search will occur
</div><div class="help-li" style=""> <code>{source}</code>  (number|string) Source buffer or string to search
</div><div class="help-li" style=""> <code>{start}</code>   (number) Starting line for the search
</div><div class="help-li" style=""> <code>{stop}</code>    (number) Stopping line for the search (end-exclusive)
</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (number) pattern id
        (table) match
        (table) metadata</div>
<div class="old-help-para">set_query(<code>{lang}</code>, <code>{query_name}</code>, <code>{text}</code>)                          <a name="set_query()"></a><code class="help-tag-right">set_query()</code>
    Sets the runtime query named <code>{query_name}</code> for <code>{lang}</code></div>
<div class="old-help-para">    This allows users to override any runtime files and/or configuration set
    by plugins.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{lang}</code>        (string) Language to use for the query
</div><div class="help-li" style=""> <code>{query_name}</code>  (string) Name of the query (e.g., "highlights")
</div><div class="help-li" style=""> <code>{text}</code>        (string) Query text (unparsed).
</div></div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.treesitter.highlighter<span class="help-heading-tags">            <a name="lua-treesitter-highlighter"></a><span class="help-tag">lua-treesitter-highlighter</span></span></h2></div>
<div class="old-help-para">new(<code>{tree}</code>, <code>{opts}</code>)                                        <a name="highlighter.new()"></a><code class="help-tag-right">highlighter.new()</code>
    Creates a new highlighter using</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{tree}</code>  LanguageTree <a href="treesitter.html#LanguageTree">LanguageTree</a> parser object to use for highlighting
</div><div class="help-li" style=""> <code>{opts}</code>  (table|nil) Configuration of the highlighter:
</div><div class="help-li" style="margin-left: 3rem;"> queries table overwrite queries used by the highlighter
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        TSHighlighter Created highlighter object</div>
<div class="old-help-para">TSHighlighter:destroy({self})                        <a name="TSHighlighter%3Adestroy()"></a><code class="help-tag-right">TSHighlighter:destroy()</code>
    Removes all internal references to the highlighter</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para"><h2 class="help-heading">Lua module: vim.treesitter.languagetree<span class="help-heading-tags">          <a name="lua-treesitter-languagetree"></a><span class="help-tag">lua-treesitter-languagetree</span></span></h2></div>
<div class="old-help-para">LanguageTree:children({self})                        <a name="LanguageTree%3Achildren()"></a><code class="help-tag-right">LanguageTree:children()</code>
    Returns a map of language to child tree.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para">LanguageTree:contains({self}, <code>{range}</code>)               <a name="LanguageTree%3Acontains()"></a><code class="help-tag-right">LanguageTree:contains()</code>
    Determines whether <code>{range}</code> is contained in the <a href="treesitter.html#LanguageTree">LanguageTree</a>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{range}</code>  (table) <code>{ start_line, start_col, end_line, end_col }</code>
</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        (boolean)</div>
<div class="old-help-para">LanguageTree:destroy({self})                          <a name="LanguageTree%3Adestroy()"></a><code class="help-tag-right">LanguageTree:destroy()</code>
    Destroys this <a href="treesitter.html#LanguageTree">LanguageTree</a> and all its children.</div>
<div class="old-help-para">    Any cleanup logic should be performed here.</div>
<div class="old-help-para">    Note: This DOES NOT remove this tree from a parent. Instead, <code>remove_child</code> must be called on the parent to remove it.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para">                                               <a name="LanguageTree%3Afor_each_child()"></a><code class="help-tag-right">LanguageTree:for_each_child()</code>
LanguageTree:for_each_child({self}, <code>{fn}</code>, <code>{include_self}</code>)
    Invokes the callback for each <a href="treesitter.html#LanguageTree">LanguageTree</a> and its children recursively</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{fn}</code>            function(tree: LanguageTree, lang: string)
</div><div class="help-li" style=""> <code>{include_self}</code>  (boolean) Whether to include the invoking tree in the
                        results
</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para">LanguageTree:for_each_tree({self}, <code>{fn}</code>)        <a name="LanguageTree%3Afor_each_tree()"></a><code class="help-tag">LanguageTree:for_each_tree()</code>
    Invokes the callback for each <a href="treesitter.html#LanguageTree">LanguageTree</a> recursively.</div>
<div class="old-help-para">    Note: This includes the invoking tree's child trees as well.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{fn}</code>    function(tree: TSTree, languageTree: LanguageTree)
</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para">LanguageTree:included_regions({self})        <a name="LanguageTree%3Aincluded_regions()"></a><code class="help-tag">LanguageTree:included_regions()</code>
    Gets the set of included regions</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para">LanguageTree:invalidate({self}, <code>{reload}</code>)          <a name="LanguageTree%3Ainvalidate()"></a><code class="help-tag-right">LanguageTree:invalidate()</code>
    Invalidates this parser and all its children</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para">LanguageTree:is_valid({self})                        <a name="LanguageTree%3Ais_valid()"></a><code class="help-tag-right">LanguageTree:is_valid()</code>
    Determines whether this tree is valid. If the tree is invalid, call <code>parse()</code> . This will return the updated tree.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para">LanguageTree:lang({self})                                <a name="LanguageTree%3Alang()"></a><code class="help-tag-right">LanguageTree:lang()</code>
    Gets the language of this tree node.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para">                                           <a name="LanguageTree%3Alanguage_for_range()"></a><code class="help-tag-right">LanguageTree:language_for_range()</code>
LanguageTree:language_for_range({self}, <code>{range}</code>)
    Gets the appropriate language that contains <code>{range}</code>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{range}</code>  (table) <code>{ start_line, start_col, end_line, end_col }</code>
</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        LanguageTree Managing <code>{range}</code></div>
<div class="old-help-para">                                         <a name="LanguageTree%3Anamed_node_for_range()"></a><code class="help-tag-right">LanguageTree:named_node_for_range()</code>
LanguageTree:named_node_for_range({self}, <code>{range}</code>, <code>{opts}</code>)
    Gets the smallest named node that contains <code>{range}</code>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{range}</code>  (table) <code>{ start_line, start_col, end_line, end_col }</code>
</div><div class="help-li" style=""> <code>{opts}</code>   (table|nil) Optional keyword arguments:
</div><div class="help-li" style="margin-left: 3rem;"> ignore_injections boolean Ignore injected languages
                   (default true)
</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        userdata|nil Found <a href="treesitter.html#tsnode">tsnode</a></div>
<div class="old-help-para">LanguageTree:parse({self})                              <a name="LanguageTree%3Aparse()"></a><code class="help-tag-right">LanguageTree:parse()</code>
    Parses all defined regions using a treesitter parser for the language this
    tree represents. This will run the injection query for this language to
    determine if any child languages should be created.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        userdata[] Table of parsed <a href="treesitter.html#tstree">tstree</a>
        (table) Change list</div>
<div class="old-help-para">LanguageTree:register_cbs({self}, <code>{cbs}</code>)         <a name="LanguageTree%3Aregister_cbs()"></a><code class="help-tag-right">LanguageTree:register_cbs()</code>
    Registers callbacks for the <a href="treesitter.html#LanguageTree">LanguageTree</a>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{cbs}</code>   (table) An <a href="api.html#nvim_buf_attach()">nvim_buf_attach()</a>-like table argument with the
                following handlers:
</div><div class="help-li" style="margin-left: 3rem;"> <code>on_bytes</code> : see <a href="api.html#nvim_buf_attach()">nvim_buf_attach()</a>, but this will be called after the parsers callback.
</div><div class="help-li" style="margin-left: 3rem;"> <code>on_changedtree</code> : a callback that will be called every time
                  the tree has syntactical changes. It will only be passed one
                  argument, which is a table of the ranges (as node ranges)
                  that changed.
</div><div class="help-li" style="margin-left: 3rem;"> <code>on_child_added</code> : emitted when a child is added to the
                  tree.
</div><div class="help-li" style="margin-left: 3rem;"> <code>on_child_removed</code> : emitted when a child is removed from
                  the tree.
</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para">LanguageTree:source({self})                            <a name="LanguageTree%3Asource()"></a><code class="help-tag-right">LanguageTree:source()</code>
    Returns the source content of the language tree (bufnr or string).</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para">                                               <a name="LanguageTree%3Atree_for_range()"></a><code class="help-tag-right">LanguageTree:tree_for_range()</code>
LanguageTree:tree_for_range({self}, <code>{range}</code>, <code>{opts}</code>)
    Gets the tree that contains <code>{range}</code>.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{range}</code>  (table) <code>{ start_line, start_col, end_line, end_col }</code>
</div><div class="help-li" style=""> <code>{opts}</code>   (table|nil) Optional keyword arguments:
</div><div class="help-li" style="margin-left: 3rem;"> ignore_injections boolean Ignore injected languages
                   (default true)
</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        userdata|nil Contained <a href="treesitter.html#tstree">tstree</a></div>
<div class="old-help-para">LanguageTree:trees({self})                              <a name="LanguageTree%3Atrees()"></a><code class="help-tag-right">LanguageTree:trees()</code>
    Returns all trees this language tree contains. Does not include child
    languages.</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{self}</code>
</div></div>
<div class="old-help-para">new(<code>{source}</code>, <code>{lang}</code>, <code>{opts}</code>)                             <a name="languagetree.new()"></a><code class="help-tag-right">languagetree.new()</code>
    A <a href="treesitter.html#LanguageTree">LanguageTree</a> holds the treesitter parser for a given language <code>{lang}</code>
    used to parse a buffer. As the buffer may contain injected languages, the LanguageTree needs to store parsers for these child languages as well (which in turn
    may contain child languages themselves, hence the name).</div>
<div class="old-help-para"><div class="help-column_heading">    Parameters:</div><div class="help-li" style=""> <code>{source}</code>  (number|string) Buffer or a string of text to parse
</div><div class="help-li" style=""> <code>{lang}</code>    (string) Root language this tree represents
</div><div class="help-li" style=""> <code>{opts}</code>    (table|nil) Optional keyword arguments:
</div><div class="help-li" style="margin-left: 3rem;"> injections table Mapping language to injection query
                    strings. This is useful for overriding the built-in
                    runtime file searching for the injection language query
                    per language.
</div></div>
<div class="old-help-para"><div class="help-column_heading">    Return:</div>        LanguageTree <a href="treesitter.html#LanguageTree">LanguageTree</a> parser object</div>

  
  