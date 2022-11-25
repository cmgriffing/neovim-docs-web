---
title:  Develop
layout: ../../layouts/MainLayout.astro
---

  <a name="develop.txt"></a><a name="development"></a><h1> Develop</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/develop.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="help-para">
Development of Nvim <a name="dev"></a><code class="help-tag">dev</code>

</div>
<div class="help-para">
This reference describes design constraints and guidelines, for developing
Nvim applications or Nvim itself.
Architecture and internal concepts are covered in src/nvim/README.md

</div>
<div class="help-para">
Nvim is free and open source.  Everybody is encouraged to contribute.
    <a href="https://github.com/neovim/neovim/blob/master/CONTRIBUTING.md">https://github.com/neovim/neovim/blob/master/CONTRIBUTING.md</a>

</div>
<div class="help-para">
<h2 class="help-heading">Design goals<span class="help-heading-tags">						<a name="design-goals"></a><span class="help-tag">design-goals</span></span></h2>


</div>
<div class="help-para">
Most important things come first (roughly).  Some items conflict; this is
intentional.  A balance must be found.

</div>
<div class="help-para">
<h3 class="help-heading">NVIM IS... IMPROVED<span class="help-heading-tags">					<a name="design-improved"></a><span class="help-tag">design-improved</span></span></h3>


</div>
<div class="help-para">
The Neo bits of Nvim should make it a better Vim, without becoming a
completely different editor.
<div class="help-li" style=""> In matters of taste, prefer Vim/Unix tradition. If there is no relevant
  Vim/Unix tradition, consider the "common case".
</div><div class="help-li" style=""> A feature that people do not know about is a useless feature.  Don't add
  obscure features, or at least add hints in documentation that they exist.
</div><div class="help-li" style=""> There is no limit to the features that can be added.  Selecting new features
  is based on (1) what users ask for, (2) how much effort it takes to
  implement and (3) someone actually implementing it.
</div><div class="help-li" style=""> Backwards compatibility is a feature.  The RPC API in particular should
  never break.
</div>
</div>
<div class="help-para">
<h3 class="help-heading">NVIM IS... WELL DOCUMENTED<span class="help-heading-tags">				<a name="design-documented"></a><span class="help-tag">design-documented</span></span></h3>


</div>
<div class="help-para">
<div class="help-li" style=""> A feature that isn't documented is a useless feature.  A patch for a new
  feature must include the documentation.
</div><div class="help-li" style=""> Documentation should be comprehensive and understandable.  Use examples.
</div><div class="help-li" style=""> Don't make the text unnecessarily long.  Less documentation means that an
  item is easier to find.
</div>
</div>
<div class="help-para">
<h3 class="help-heading">NVIM IS... FAST AND SMALL<span class="help-heading-tags">				<a name="design-speed-size"></a><span class="help-tag">design-speed-size</span></span></h3>


</div>
<div class="help-para">
Keep Nvim small and fast.
<div class="help-li" style=""> Computers are becoming faster and bigger each year.  Vim can grow too, but
  no faster than computers are growing.  Keep Vim usable on older systems.
</div><div class="help-li" style=""> Many users start Vim from a shell very often.  Startup time must be short.
</div><div class="help-li" style=""> Commands must work efficiently.  The time they consume must be as small as
  possible.  Useful commands may take longer.
</div><div class="help-li" style=""> Don't forget that some people use Vim over a slow connection.  Minimize the
  communication overhead.
</div><div class="help-li" style=""> Vim is a component among other components.  Don't turn it into a massive
  application, but have it work well together with other programs.
</div>
</div>
<div class="help-para">
<h3 class="help-heading">NVIM IS... MAINTAINABLE<span class="help-heading-tags">					<a name="design-maintain"></a><span class="help-tag">design-maintain</span></span></h3>


</div>
<div class="help-para">
<div class="help-li" style=""> The source code should not become a mess.  It should be reliable code.
</div><div class="help-li" style=""> Use comments in a useful way!  Quoting the function name and argument names
  is NOT useful.  Do explain what they are for.
</div><div class="help-li" style=""> Porting to another platform should be made easy, without having to change
  too much platform-independent code.
</div><div class="help-li" style=""> Use the object-oriented spirit: Put data and code together.  Minimize the
  knowledge spread to other parts of the code.
</div>
</div>
<div class="help-para">
<h3 class="help-heading">NVIM IS... NOT<span class="help-heading-tags">						<a name="design-not"></a><span class="help-tag">design-not</span></span></h3>


</div>
<div class="help-para">
Nvim is not an operating system; instead it should be composed with other
tools or hosted as a component. Marvim once said: "Unlike Emacs, Nvim does not
include the kitchen sink... but it's good for plumbing."

</div>
<div class="help-para">
<h2 class="help-heading">Developer guidelines<span class="help-heading-tags">				        <a name="dev-guidelines"></a><span class="help-tag">dev-guidelines</span></span></h2>


</div>
<div class="help-para">
<h3 class="help-heading">PROVIDERS<span class="help-heading-tags"> 						<a name="dev-provider"></a><span class="help-tag">dev-provider</span></span></h3>


</div>
<div class="help-para">
A primary goal of Nvim is to allow extension of the editor without special
knowledge in the core.  Some core functions are delegated to "providers"
implemented as external scripts.

</div>
<div class="help-para">
Examples:

</div>
<div class="help-para">
1. In the Vim source code, clipboard logic accounts for more than 1k lines of
   C source code (ui.c), to perform two tasks that are now accomplished with
   shell commands such as xclip or pbcopy/pbpaste.

</div>
<div class="help-para">
2. Python scripting support: Vim has three files dedicated to embedding the
   Python interpreter: if_python.c, if_python3.c and if_py_both.h. Together
   these files sum about 9.5k lines of C source code. In contrast, Nvim Python
   scripting is performed by an external host process implemented in ~2k lines
   of Python.

</div>
<div class="help-para">
The provider framework invokes VimL from C.  It is composed of two functions
in eval.c:

</div>
<div class="help-para">
<div class="help-li" style=""> eval_call_provider(name, method, arguments, discard): calls
  provider#{name}#Call with the method and arguments. If discard is true, any
  value returned by the provider will be discarded and empty value will be
  returned.
</div><div class="help-li" style=""> eval_has_provider(name): Checks the <code>g:loaded_{name}_provider</code> variable
  which must be set to 2 by the provider script to indicate that it is
  "enabled and working". Called by <a href="/neovim-docs-web/en/builtin#has()">has()</a> to check if features are available.
</div>
</div>
<div class="help-para">
For example, the Python provider is implemented by the
"autoload/provider/python.vim" script, which sets <code>g:loaded_python_provider</code>
to 2 only if a valid external Python host is found.  Then <code>has("python")</code>
reflects whether Python support is working.

</div>
<div class="help-para">
							<a name="provider-reload"></a><code class="help-tag-right">provider-reload</code>
Sometimes a GUI or other application may want to force a provider to
"reload".  To reload a provider, undefine its "loaded" flag, then use
<a href="/neovim-docs-web/en/repeat#%3Aruntime">:runtime</a> to reload it:<pre>:unlet g:loaded_clipboard_provider
:runtime autoload/provider/clipboard.vim</pre>
<h3 class="help-heading">DOCUMENTATION<span class="help-heading-tags">						<a name="dev-doc"></a><span class="help-tag">dev-doc</span></span></h3>


</div>
<div class="help-para">
<div class="help-li" style=""> "Just say it". Avoid mushy, colloquial phrasing in all documentation
  (docstrings, user manual, website materials, newsletters, …). Don't mince
  words. Personality and flavor, used sparingly, are welcome--but in general,
  optimize for the reader's time and energy: be "precise yet concise".
</div><div class="help-li" style="margin-left: 3rem;"> See <a href="https://developers.google.com/style/tone">https://developers.google.com/style/tone</a>
</div><div class="help-li" style="margin-left: 3rem;"> Prefer the active voice: "Foo does X", not "X is done by Foo".
</div><div class="help-li" style=""> Vim differences:
</div><div class="help-li" style="margin-left: 3rem;"> Do not prefix help tags with "nvim-". Use <a href="/neovim-docs-web/en/vim_diff#vim_diff.txt">vim_diff.txt</a> to catalog
      differences from Vim; no other distinction is necessary.
</div><div class="help-li" style="margin-left: 3rem;"> If a Vim feature is removed, delete its help section and move its tag to
      <a href="/neovim-docs-web/en/vim_diff#vim_diff.txt">vim_diff.txt</a>.
</div><div class="help-li" style=""> Mention deprecated features in <a href="/neovim-docs-web/en/deprecated#deprecated.txt">deprecated.txt</a> and delete their old doc.
</div><div class="help-li" style=""> Use consistent language.
</div><div class="help-li" style="margin-left: 3rem;"> "terminal" in a help tag always means "the embedded terminal emulator",
      not "the user host terminal".
</div><div class="help-li" style="margin-left: 3rem;"> Use "tui-" to prefix help tags related to the host terminal, and "TUI"
      in prose if possible.
</div><div class="help-li" style=""> Docstrings: do not start parameter descriptions with "The" or "A" unless it
  is critical to avoid ambiguity.<pre>GOOD:
/// @param dirname Path fragment before `pend`
BAD:
/// @param dirname The path fragment before `pend`</pre>
</div>
</div>
<div class="help-para">
<div class="help-column_heading">Documentation format</div>

</div>
<div class="help-para">
For Nvim-owned docs, use the following strict subset of "vimdoc" to ensure
the help doc renders nicely in other formats (such as HTML:
<a href="https://neovim.io/doc/user">https://neovim.io/doc/user</a> ).

</div>
<div class="help-para">
Strict "vimdoc" subset:

</div>
<div class="help-para">
<div class="help-li" style=""> Use lists (like this!) prefixed with "-", "*", or "•", for adjacent lines
  that you don't want auto-wrapped. Lists are always rendered with "flow"
  (soft-wrapped) layout instead of preformatted (hard-wrapped) layout common
  in legacy :help docs.
</div><div class="help-li" style="margin-left: 3rem;"> Limitation: currently the parser <a href="https://github.com/neovim/tree-sitter-vimdoc">https://github.com/neovim/tree-sitter-vimdoc</a>
    does not understand numbered listitems, so use a bullet symbol (- or •)
    before numbered items, e.g. "- 1." instead of "1.".
</div><div class="help-li" style=""> Separate blocks (paragraphs) of content by a blank line(s).
</div><div class="help-li" style=""> Do not use indentation in random places—that prevents the page from using
  "flow" layout. If you need a preformatted section, put it in
  a <a href="/neovim-docs-web/en/helphelp#help-codeblock">help-codeblock</a> starting with "&gt;".
</div>
</div>
<div class="help-para">
<div class="help-column_heading">C docstrings</div>

</div>
<div class="help-para">
Nvim API documentation lives in the source code, as docstrings (Doxygen
comments) on the function definitions.  The <a href="/neovim-docs-web/en/api#api">api</a> :help is generated
from the docstrings defined in src/nvim/api/*.c.

</div>
<div class="help-para">
Docstring format:
<div class="help-li" style=""> Lines start with <code>///</code>
</div><div class="help-li" style=""> Special tokens start with <code>@</code> followed by the token name:
  <code>@note</code>, <code>@param</code>, <code>@returns</code>
</div><div class="help-li" style=""> Limited markdown is supported.
</div><div class="help-li" style="margin-left: 3rem;"> List-items start with <code>-</code> (useful to nest or "indent")
</div><div class="help-li" style=""> Use <code>&lt;pre&gt;</code> for code samples.
</div>
</div>
<div class="help-para">
Example: the help for <a href="/neovim-docs-web/en/api#nvim_open_win()">nvim_open_win()</a> is generated from a docstring defined
in src/nvim/api/win_config.c like this:<pre>/// Opens a new window.
/// ...
///
/// Example (Lua): window-relative float
/// &lt;pre&gt;
///     vim.api.nvim_open_win(0, false,
///       {relative='win', row=3, col=3, width=12, height=3})
/// &lt;/pre&gt;
///
/// @param buffer Buffer to display
/// @param enter  Enter the window
/// @param config Map defining the window configuration. Keys:
///   - relative: Sets the window layout, relative to:
///      - "editor" The global editor grid.
///      - "win"    Window given by the `win` field.
///      - "cursor" Cursor position in current window.
/// ...
/// @param[out] err Error details, if any
///
/// @return Window handle, or 0 on error</pre>
<div class="help-column_heading">Lua docstrings</div>
							<a name="dev-lua-doc"></a><code class="help-tag-right">dev-lua-doc</code>
Lua documentation lives in the source code, as docstrings on the function
definitions.  The <a href="/neovim-docs-web/en/lua#lua-vim">lua-vim</a> :help is generated from the docstrings.

</div>
<div class="help-para">
Docstring format:
<div class="help-li" style=""> Lines in the main description start with <code>---</code>
</div><div class="help-li" style=""> Special tokens start with <code>---@</code> followed by the token name:
  <code>---@see</code>, <code>---@param</code>, <code>---@returns</code>
</div><div class="help-li" style=""> Limited markdown is supported.
</div><div class="help-li" style="margin-left: 3rem;"> List-items start with <code>-</code> (useful to nest or "indent")
</div><div class="help-li" style=""> Use <code>&lt;pre&gt;</code> for code samples.
</div>
</div>
<div class="help-para">
Example: the help for <a href="/neovim-docs-web/en/lua#vim.paste()">vim.paste()</a> is generated from a docstring decorating
vim.paste in runtime/lua/vim/_editor.lua like this:<pre>--- Paste handler, invoked by |nvim_paste()| when a conforming UI
--- (such as the |TUI|) pastes text into the editor.
---
--- Example: To remove ANSI color codes when pasting:
--- &lt;pre&gt;
--- vim.paste = (function()
---   local overridden = vim.paste
---   ...
--- end)()
--- &lt;/pre&gt;
---
---@see |paste|
---
---@param lines  ...
---@param phase  ...
---@returns false if client should cancel the paste.</pre>
<h3 class="help-heading">LUA<span class="help-heading-tags">							<a name="dev-lua"></a><span class="help-tag">dev-lua</span></span></h3>


</div>
<div class="help-para">
<div class="help-li" style=""> Keep the core Lua modules <a href="/neovim-docs-web/en/lua#lua-stdlib">lua-stdlib</a> simple. Avoid elaborate OOP or
  pseudo-OOP designs. Plugin authors just want functions to call, they don't
  want to learn a big, fancy inheritance hierarchy. Thus avoid specialized
  objects; tables or values are usually better.
</div>
</div>
<div class="help-para">
<h3 class="help-heading">API<span class="help-heading-tags">							<a name="dev-api"></a><span class="help-tag">dev-api</span></span></h3>


</div>
<div class="help-para">
Use this format to name new RPC <a href="/neovim-docs-web/en/api#API">API</a> functions:

</div>
<div class="help-para">
    nvim_{thing}_{action}_{arbitrary-qualifiers}

</div>
<div class="help-para">
If the function acts on an object then <code>{thing}</code> is the name of that object
(e.g. "buf" or "win"). If the function operates in a "global" context then
<code>{thing}</code> is usually omitted (but consider "namespacing" your global operations
with a <code>{thing}</code> that groups functions under a common concept).

</div>
<div class="help-para">
Use existing common <code>{action}</code> names if possible:
<div class="help-li" style=""> add       Append to, or insert into, a collection
</div><div class="help-li" style=""> call      Call a function
</div><div class="help-li" style=""> create    Create a new (non-trivial) thing
</div><div class="help-li" style=""> del       Delete a thing (or group of things)
</div><div class="help-li" style=""> eval      Evaluate an expression
</div><div class="help-li" style=""> exec      Execute code
</div><div class="help-li" style=""> fmt       Format
</div><div class="help-li" style=""> get       Get things (often by a query)
</div><div class="help-li" style=""> open      Open
</div><div class="help-li" style=""> parse     Parse something into a structured form
</div><div class="help-li" style=""> set       Set a thing (or group of things)
</div>
</div>
<div class="help-para">
Do NOT use these deprecated verbs:
<div class="help-li" style=""> list      Redundant with "get"
</div>
</div>
<div class="help-para">
Use consistent names for <code>{thing}</code> (nouns) in API functions: buffer is called
"buf" everywhere, not "buffer" in some places and "buf" in others.
<div class="help-li" style=""> buf       Buffer
</div><div class="help-li" style=""> chan      <a href="/neovim-docs-web/en/channel#channel">channel</a>
</div><div class="help-li" style=""> cmd       Command
</div><div class="help-li" style=""> cmdline   Command-line UI or input
</div><div class="help-li" style=""> fn        Function
</div><div class="help-li" style=""> hl        Highlight
</div><div class="help-li" style=""> pos       Position
</div><div class="help-li" style=""> proc      System process
</div><div class="help-li" style=""> tabpage   Tabpage
</div><div class="help-li" style=""> win       Window
</div>
</div>
<div class="help-para">
Do NOT use these deprecated nouns:
<div class="help-li" style=""> buffer
</div><div class="help-li" style=""> command
</div><div class="help-li" style=""> window
</div>
</div>
<div class="help-para">
Example:
    <code>nvim_get_keymap('v')</code> operates in a global context (first parameter is not
    a Buffer). The "get" <code>{action}</code> indicates that it gets anything matching the
    given filter parameter. There is no need for a "list" action because
    <code>nvim_get_keymap('')</code> (i.e., empty filter) returns all items.

</div>
<div class="help-para">
Example:
    <code>nvim_buf_del_mark</code> acts on a <code>Buffer</code> object (the first parameter)
    and uses the "del" <code>{action}</code>.

</div>
<div class="help-para">
Use this format to name new API events:
    nvim_{thing}_{event}_event

</div>
<div class="help-para">
Example:
    <code>nvim_buf_changedtick_event</code>

</div>
<div class="help-para">
<h3 class="help-heading">API-CLIENT<span class="help-heading-tags">						<a name="dev-api-client"></a><span class="help-tag">dev-api-client</span></span></h3>


</div>
<div class="help-para">
							<a name="api-client"></a><code class="help-tag-right">api-client</code>
API clients wrap the Nvim <a href="/neovim-docs-web/en/api#API">API</a> to provide idiomatic "SDKs" for their
respective platforms (see <a href="/neovim-docs-web/en/intro#jargon">jargon</a>). You can build a new API client for your
favorite platform or programming language.

</div>
<div class="help-para">
List of API clients:
    <a href="https://github.com/neovim/neovim/wiki/Related-projects#api-clients">https://github.com/neovim/neovim/wiki/Related-projects#api-clients</a>

</div>
<div class="help-para">
							<a name="pynvim"></a><code class="help-tag-right">pynvim</code>
The Python client is the reference implementation for API clients.
    <a href="https://github.com/neovim/pynvim">https://github.com/neovim/pynvim</a>

</div>
<div class="help-para">
<div class="help-column_heading">Standard Features</div>

</div>
<div class="help-para">
<div class="help-li" style=""> API clients exist to hide msgpack-rpc details. The wrappers can be
  automatically generated by reading the <a href="/neovim-docs-web/en/api#api-metadata">api-metadata</a> from Nvim. <a href="/neovim-docs-web/en/api#api-mapping">api-mapping</a>
</div><div class="help-li" style=""> Clients should call <a href="/neovim-docs-web/en/api#nvim_set_client_info()">nvim_set_client_info()</a> after connecting, so users and
  plugins can detect the client by handling the <a href="/neovim-docs-web/en/autocmd#ChanInfo">ChanInfo</a> event. This avoids
  the need for special variables or other client hints.
</div><div class="help-li" style=""> Clients should handle <a href="/neovim-docs-web/en/api#nvim_error_event">nvim_error_event</a> notifications, which will be sent
  if an async request to nvim was rejected or caused an error.
</div>
</div>
<div class="help-para">
<div class="help-column_heading">Package Naming</div>

</div>
<div class="help-para">
API client packages should NOT be named something ambiguous like "neovim" or
"python-client".  Use "nvim" as a prefix/suffix to some other identifier
following ecosystem conventions.

</div>
<div class="help-para">
For example, Python packages tend to have "py" in the name, so "pynvim" is
a good name: it's idiomatic and unambiguous. If the package is named "neovim",
it confuses users, and complicates documentation and discussions.

</div>
<div class="help-para">
Examples of API-client package names:
<div class="help-li" style=""> GOOD: nvim-racket
</div><div class="help-li" style=""> GOOD: pynvim
</div><div class="help-li" style=""> BAD:  python-client
</div><div class="help-li" style=""> BAD:  neovim
</div>
</div>
<div class="help-para">
<div class="help-column_heading">API client implementation guidelines</div>

</div>
<div class="help-para">
<div class="help-li" style=""> Separate the transport layer from the rest of the library. <a href="/neovim-docs-web/en/api#rpc-connecting">rpc-connecting</a>
</div><div class="help-li" style=""> Use a MessagePack library that implements at least version 5 of the
  MessagePack spec, which supports the BIN and EXT types used by Nvim.
</div><div class="help-li" style=""> Use a single-threaded event loop library/pattern.
</div><div class="help-li" style=""> Use a fiber/coroutine library for the language being used for implementing
  a client. These greatly simplify concurrency and allow the library to
  expose a blocking API on top of a non-blocking event loop without the
  complexity that comes with preemptive multitasking.
</div><div class="help-li" style=""> Don't assume anything about the order of responses to RPC requests.
</div><div class="help-li" style=""> Clients should expect requests, which must be handled immediately because
  Nvim is blocked while waiting for the client response.
</div><div class="help-li" style=""> Clients should expect notifications, but these can be handled "ASAP" (rather
  than immediately) because they won't block Nvim.
</div><div class="help-li" style=""> For C/C++ projects, consider libmpack instead of the msgpack.org library.
    <a href="https://github.com/libmpack/libmpack/">https://github.com/libmpack/libmpack/</a>
  libmpack is small (no dependencies, can inline into your C/C++ project) and
  efficient (no allocations). It also implements msgpack-RPC, the protocol
  required by Nvim.
    <a href="https://github.com/msgpack-rpc/msgpack-rpc">https://github.com/msgpack-rpc/msgpack-rpc</a>
</div>
</div>
<div class="help-para">
<h3 class="help-heading">EXTERNAL UI<span class="help-heading-tags"> 						<a name="dev-ui"></a><span class="help-tag">dev-ui</span></span></h3>


</div>
<div class="help-para">
External UIs should be aware of the <a href="/neovim-docs-web/en/api#api-contract">api-contract</a>. In particular, future
versions of Nvim may add new items to existing events. The API is strongly
backwards-compatible, but clients must not break if new (optional) fields are
added to existing events.

</div>
<div class="help-para">
<div class="help-column_heading">Standard Features</div>

</div>
<div class="help-para">
External UIs are expected to implement these common features:

</div>
<div class="help-para">
<div class="help-li" style=""> Call <a href="/neovim-docs-web/en/api#nvim_set_client_info()">nvim_set_client_info()</a> after connecting, so users and plugins can
  detect the UI by handling the <a href="/neovim-docs-web/en/autocmd#ChanInfo">ChanInfo</a> event. This avoids the need for
  special variables and UI-specific config files (gvimrc, macvimrc, …).
</div><div class="help-li" style=""> Cursor style (shape, color) should conform to the <a href="/neovim-docs-web/en/options#'guicursor'">'guicursor'</a> properties
  delivered with the mode_info_set UI event.
</div><div class="help-li" style=""> Send the ALT/META ("Option" on macOS) key as a |&lt;M-| chord.
</div><div class="help-li" style=""> Send the "super" key (Windows key, Apple key) as a |&lt;D-| chord.
</div><div class="help-li" style=""> Avoid mappings that conflict with the Nvim keymap-space; GUIs have many new
  chords (<code>&lt;C-,&gt;</code> <code>&lt;C-Enter&gt;</code> <code>&lt;C-S-x&gt;</code> <code>&lt;D-x&gt;</code>) and patterns ("shift shift") that do
  not potentially conflict with Nvim defaults, plugins, etc.
</div><div class="help-li" style=""> Consider the "option_set" <a href="/neovim-docs-web/en/ui#ui-global">ui-global</a> event as a hint for other GUI
  behaviors. Various UI-related options (<a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a>, <a href="/neovim-docs-web/en/options#'ambiwidth'">'ambiwidth'</a>, …) are
  published in this event. See also "mouse_on", "mouse_off".
</div>
</div>
<div class="help-para">
<h3 class="help-heading">NAMING<span class="help-heading-tags">							<a name="dev-naming"></a><span class="help-tag">dev-naming</span></span></h3>


</div>
<div class="help-para">
Naming is important. Consistent naming in the API and UI helps both users and
developers discover and intuitively understand related concepts ("families"),
and reduces cognitive burden. Discoverability encourages code re-use and
likewise avoids redundant, overlapping mechanisms, which reduces code
surface-area, and thereby minimizes bugs...

</div>
<div class="help-para">
<div class="help-column_heading">Naming conventions</div>

</div>
<div class="help-para">
Use the "on_" prefix to name event handlers and also the interface for
"registering" such handlers (on_key). The dual nature is acceptable to avoid
a confused collection of naming conventions for these related concepts.

</div>

  
  