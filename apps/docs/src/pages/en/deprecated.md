---
title:  Deprecated
layout: ../../layouts/MainLayout.astro
---

  <a name="deprecated.txt"></a><a name="deprecated"></a><h1> Deprecated</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/deprecated.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="help-para">
Nvim

</div>
<div class="help-para">
The items listed below are deprecated: they will be removed in the future.
They should not be used in new scripts, and old scripts should be updated.

</div>
<div class="help-para">
<a name="_-deprecated-features"></a><h2 class="help-heading">Deprecated features</h2>


</div>
<div class="help-para">
<a name="_api"></a><h3 class="help-heading">API</h3>

<div class="help-li" style=""> <a name="nvim_buf_clear_highlight()"></a><code class="help-tag">nvim_buf_clear_highlight()</code>	Use <a href="api.html#nvim_buf_clear_namespace()">nvim_buf_clear_namespace()</a> instead.
</div><div class="help-li" style=""> <a name="nvim_buf_set_virtual_text()"></a><code class="help-tag">nvim_buf_set_virtual_text()</code>	Use <a href="api.html#nvim_buf_set_extmark()">nvim_buf_set_extmark()</a> instead.
</div><div class="help-li" style=""> <a name="nvim_command_output()"></a><code class="help-tag">nvim_command_output()</code>	Use <a href="api.html#nvim_exec()">nvim_exec()</a> instead.
</div><div class="help-li" style=""> <a name="nvim_execute_lua()"></a><code class="help-tag">nvim_execute_lua()</code>		Use <a href="api.html#nvim_exec_lua()">nvim_exec_lua()</a> instead.
</div>
</div>
<div class="help-para">
<a name="_commands"></a><h3 class="help-heading">COMMANDS</h3>

<div class="help-li" style=""> <a name="%3Arv"></a><code class="help-tag">:rv</code> <a name="%3Arviminfo"></a><code class="help-tag">:rviminfo</code>		Deprecated alias to <a href="starting.html#%3Arshada">:rshada</a> command.
</div><div class="help-li" style=""> <a name="%3Awv"></a><code class="help-tag">:wv</code> <a name="%3Awviminfo"></a><code class="help-tag">:wviminfo</code>		Deprecated alias to <a href="starting.html#%3Awshada">:wshada</a> command.
</div>
</div>
<div class="help-para">
<a name="_environment-variables"></a><h3 class="help-heading">ENVIRONMENT VARIABLES</h3>

<div class="help-li" style=""> <a name="%24NVIM_LISTEN_ADDRESS"></a><code class="help-tag">$NVIM_LISTEN_ADDRESS</code>
</div><div class="help-li" style="margin-left: 3rem;"> Deprecated way to:
</div><div class="help-li" style="margin-left: 4rem;"> set the server name (use <a href="starting.html#--listen">--listen</a> or <a href="builtin.html#serverstart()">serverstart()</a> instead)
</div><div class="help-li" style="margin-left: 4rem;"> get the server name (use <a href="eval.html#v%3Aservername">v:servername</a> instead)
</div><div class="help-li" style="margin-left: 4rem;"> detect a parent Nvim (use <a href="eval.html#%24NVIM">$NVIM</a> instead)
</div><div class="help-li" style="margin-left: 3rem;"> Ignored if --listen is given.
</div><div class="help-li" style="margin-left: 3rem;"> Unset by <a href="nvim_terminal_emulator.html#terminal">terminal</a> and <a href="builtin.html#jobstart()">jobstart()</a> unless explicitly given by the "env"
    option. Example:<pre>call jobstart(['foo'], { 'env': { 'NVIM_LISTEN_ADDRESS': v:servername  } })</pre>
</div>
</div>
<div class="help-para">
<a name="_events"></a><h3 class="help-heading">EVENTS</h3>

<div class="help-li" style=""> <a name="BufCreate"></a><code class="help-tag">BufCreate</code>		Use <a href="autocmd.html#BufAdd">BufAdd</a> instead.
</div><div class="help-li" style=""> <a name="EncodingChanged"></a><code class="help-tag">EncodingChanged</code>	Never fired; <a href="options.html#'encoding'">'encoding'</a> is always "utf-8".
</div><div class="help-li" style=""> <a name="FileEncoding"></a><code class="help-tag">FileEncoding</code>	Never fired; equivalent to <a href="deprecated.html#EncodingChanged">EncodingChanged</a>.
</div><div class="help-li" style=""> <a name="GUIEnter"></a><code class="help-tag">GUIEnter</code>		Never fired; use <a href="autocmd.html#UIEnter">UIEnter</a> instead.
</div><div class="help-li" style=""> <a name="GUIFailed"></a><code class="help-tag">GUIFailed</code>		Never fired.
</div>
</div>
<div class="help-para">
<a name="_keycodes"></a><h3 class="help-heading">KEYCODES</h3>

<div class="help-li" style=""> <a name="%3CMouseDown%3E"></a><code class="help-tag">&lt;MouseDown&gt;</code>		Use <code>&lt;ScrollWheelUp&gt;</code> instead.
</div><div class="help-li" style=""> <a name="%3CMouseUp%3E"></a><code class="help-tag">&lt;MouseUp&gt;</code>		Use <code>&lt;ScrollWheelDown&gt;</code> instead.
</div>
</div>
<div class="help-para">
<a name="_functions"></a><h3 class="help-heading">FUNCTIONS</h3>

<div class="help-li" style=""> <a name="buffer_exists()"></a><code class="help-tag">buffer_exists()</code>	Obsolete name for <a href="builtin.html#bufexists()">bufexists()</a>.
</div><div class="help-li" style=""> <a name="buffer_name()"></a><code class="help-tag">buffer_name()</code>	Obsolete name for <a href="builtin.html#bufname()">bufname()</a>.
</div><div class="help-li" style=""> <a name="buffer_number()"></a><code class="help-tag">buffer_number()</code>	Obsolete name for <a href="builtin.html#bufnr()">bufnr()</a>.
</div><div class="help-li" style=""> <a name="file_readable()"></a><code class="help-tag">file_readable()</code>	Obsolete name for <a href="builtin.html#filereadable()">filereadable()</a>.
</div><div class="help-li" style=""> <a name="health%23report_error"></a><code class="help-tag">health#report_error</code>	Use Lua <a href="pi_health.html#vim.health.report_error()">vim.health.report_error()</a> instead.
</div><div class="help-li" style=""> <a name="health%23report_info"></a><code class="help-tag">health#report_info</code>	Use Lua <a href="pi_health.html#vim.health.report_info()">vim.health.report_info()</a> instead.
</div><div class="help-li" style=""> <a name="health%23report_ok"></a><code class="help-tag">health#report_ok</code>	Use Lua <a href="pi_health.html#vim.health.report_ok()">vim.health.report_ok()</a> instead.
</div><div class="help-li" style=""> <a name="health%23report_start"></a><code class="help-tag">health#report_start</code>	Use Lua <a href="pi_health.html#vim.health.report_start()">vim.health.report_start()</a> instead.
</div><div class="help-li" style=""> <a name="health%23report_warn"></a><code class="help-tag">health#report_warn</code>	Use Lua <a href="pi_health.html#vim.health.report_warn()">vim.health.report_warn()</a> instead.
</div><div class="help-li" style=""> <a name="highlight_exists()"></a><code class="help-tag">highlight_exists()</code>	Obsolete name for <a href="builtin.html#hlexists()">hlexists()</a>.
</div><div class="help-li" style=""> <a name="highlightID()"></a><code class="help-tag">highlightID()</code>	Obsolete name for <a href="builtin.html#hlID()">hlID()</a>.
</div><div class="help-li" style=""> <a name="inputdialog()"></a><code class="help-tag">inputdialog()</code>	Use <a href="builtin.html#input()">input()</a> instead.
</div><div class="help-li" style=""> <a name="jobclose()"></a><code class="help-tag">jobclose()</code>		Obsolete name for <a href="builtin.html#chanclose()">chanclose()</a>
</div><div class="help-li" style=""> <a name="jobsend()"></a><code class="help-tag">jobsend()</code>		Obsolete name for <a href="builtin.html#chansend()">chansend()</a>
</div><div class="help-li" style=""> <a name="last_buffer_nr()"></a><code class="help-tag">last_buffer_nr()</code>	Obsolete name for bufnr("$").
</div><div class="help-li" style=""> <a name="rpcstop()"></a><code class="help-tag">rpcstop()</code>		Use <a href="builtin.html#jobstop()">jobstop()</a> instead to stop any job, or
			<code>chanclose(id, "rpc")</code> to close RPC communication
			without stopping the job. Use chanclose(id) to close
			any socket.
</div>
</div>
<div class="help-para">
<a name="_highlights"></a><h3 class="help-heading">HIGHLIGHTS</h3>

<div class="help-li" style=""> <a name="hl-VertSplit"></a><code class="help-tag">hl-VertSplit</code>	Use <a href="syntax.html#hl-WinSeparator">hl-WinSeparator</a> instead.
</div>
</div>
<div class="help-para">
<a name="_lsp-diagnostics"></a><h3 class="help-heading">LSP DIAGNOSTICS</h3>

For each of the functions below, use the corresponding function in
<a href="diagnostic.html#vim.diagnostic">vim.diagnostic</a> instead (unless otherwise noted). For example, use
<a href="diagnostic.html#vim.diagnostic.get()">vim.diagnostic.get()</a> instead of <a href="deprecated.html#vim.lsp.diagnostic.get()">vim.lsp.diagnostic.get()</a>.

</div>
<div class="help-para">
<div class="help-li" style=""> <a name="vim.lsp.diagnostic.clear()"></a><code class="help-tag">vim.lsp.diagnostic.clear()</code>		Use <a href="diagnostic.html#vim.diagnostic.hide()">vim.diagnostic.hide()</a> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.disable()"></a><code class="help-tag">vim.lsp.diagnostic.disable()</code>
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.display()"></a><code class="help-tag">vim.lsp.diagnostic.display()</code>	Use <a href="diagnostic.html#vim.diagnostic.show()">vim.diagnostic.show()</a> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.enable()"></a><code class="help-tag">vim.lsp.diagnostic.enable()</code>
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.get()"></a><code class="help-tag">vim.lsp.diagnostic.get()</code>
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.get_all()"></a><code class="help-tag">vim.lsp.diagnostic.get_all()</code>	Use <a href="diagnostic.html#vim.diagnostic.get()">vim.diagnostic.get()</a> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.get_count()"></a><code class="help-tag">vim.lsp.diagnostic.get_count()</code>	Use <a href="diagnostic.html#vim.diagnostic.get()">vim.diagnostic.get()</a> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.get_line_diagnostics()"></a><code class="help-tag">vim.lsp.diagnostic.get_line_diagnostics()</code> Use <a href="diagnostic.html#vim.diagnostic.get()">vim.diagnostic.get()</a> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.get_next()"></a><code class="help-tag">vim.lsp.diagnostic.get_next()</code>
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.get_next_pos()"></a><code class="help-tag">vim.lsp.diagnostic.get_next_pos()</code>
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.get_prev()"></a><code class="help-tag">vim.lsp.diagnostic.get_prev()</code>
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.get_prev_pos()"></a><code class="help-tag">vim.lsp.diagnostic.get_prev_pos()</code>
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.get_virtual_text_chunks_for_line()"></a><code class="help-tag">vim.lsp.diagnostic.get_virtual_text_chunks_for_line()</code> No replacement. Use
  options provided by <a href="diagnostic.html#vim.diagnostic.config()">vim.diagnostic.config()</a> to customize virtual text.
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.goto_next()"></a><code class="help-tag">vim.lsp.diagnostic.goto_next()</code>
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.goto_prev()"></a><code class="help-tag">vim.lsp.diagnostic.goto_prev()</code>
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.redraw()"></a><code class="help-tag">vim.lsp.diagnostic.redraw()</code>		Use <a href="diagnostic.html#vim.diagnostic.show()">vim.diagnostic.show()</a> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.reset()"></a><code class="help-tag">vim.lsp.diagnostic.reset()</code>
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.save()"></a><code class="help-tag">vim.lsp.diagnostic.save()</code>		Use <a href="diagnostic.html#vim.diagnostic.set()">vim.diagnostic.set()</a> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.set_loclist()"></a><code class="help-tag">vim.lsp.diagnostic.set_loclist()</code>	Use <a href="diagnostic.html#vim.diagnostic.setloclist()">vim.diagnostic.setloclist()</a> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.set_qflist()"></a><code class="help-tag">vim.lsp.diagnostic.set_qflist()</code>	Use <a href="diagnostic.html#vim.diagnostic.setqflist()">vim.diagnostic.setqflist()</a> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.show_line_diagnostics()"></a><code class="help-tag">vim.lsp.diagnostic.show_line_diagnostics()</code> Use <a href="diagnostic.html#vim.diagnostic.open_float()">vim.diagnostic.open_float()</a> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.show_position_diagnostics()"></a><code class="help-tag">vim.lsp.diagnostic.show_position_diagnostics()</code> Use <a href="diagnostic.html#vim.diagnostic.open_float()">vim.diagnostic.open_float()</a> instead.
</div>
</div>
<div class="help-para">
The following are deprecated without replacement. These functions are moved
internally and are no longer exposed as part of the API. Instead, use
<a href="diagnostic.html#vim.diagnostic.config()">vim.diagnostic.config()</a> and <a href="diagnostic.html#vim.diagnostic.show()">vim.diagnostic.show()</a>.

</div>
<div class="help-para">
<div class="help-li" style=""> <a name="vim.lsp.diagnostic.set_signs()"></a><code class="help-tag">vim.lsp.diagnostic.set_signs()</code>
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.set_underline()"></a><code class="help-tag">vim.lsp.diagnostic.set_underline()</code>
</div><div class="help-li" style=""> <a name="vim.lsp.diagnostic.set_virtual_text()"></a><code class="help-tag">vim.lsp.diagnostic.set_virtual_text()</code>
</div>
</div>
<div class="help-para">
<a name="_lsp-functions"></a><h3 class="help-heading">LSP FUNCTIONS</h3>

<div class="help-li" style=""> <a name="vim.lsp.buf.range_code_action()"></a><code class="help-tag">vim.lsp.buf.range_code_action()</code>	Use <a href="lsp.html#vim.lsp.buf.code_action()">vim.lsp.buf.code_action()</a> with
					the <code>range</code> parameter.
</div><div class="help-li" style=""> <a name="vim.lsp.util.diagnostics_to_items()"></a><code class="help-tag">vim.lsp.util.diagnostics_to_items()</code>	Use <a href="diagnostic.html#vim.diagnostic.toqflist()">vim.diagnostic.toqflist()</a> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.util.set_qflist()"></a><code class="help-tag">vim.lsp.util.set_qflist()</code>		Use <a href="builtin.html#setqflist()">setqflist()</a> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.util.set_loclist()"></a><code class="help-tag">vim.lsp.util.set_loclist()</code>		Use <a href="builtin.html#setloclist()">setloclist()</a> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.buf_get_clients()"></a><code class="help-tag">vim.lsp.buf_get_clients()</code>		Use <a href="lsp.html#vim.lsp.get_active_clients()">vim.lsp.get_active_clients()</a> with
                                        <code>{buffer = bufnr}</code> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.buf.formatting()"></a><code class="help-tag">vim.lsp.buf.formatting()</code>		Use <a href="lsp.html#vim.lsp.buf.format()">vim.lsp.buf.format()</a> with
					<code>{async = true}</code> instead.
</div><div class="help-li" style=""> <a name="vim.lsp.buf.range_formatting()"></a><code class="help-tag">vim.lsp.buf.range_formatting()</code>	Use <a href="lsp.html#vim.lsp.formatexpr()">vim.lsp.formatexpr()</a>
					or <a href="lsp.html#vim.lsp.buf.format()">vim.lsp.buf.format()</a> instead.
</div>
</div>
<div class="help-para">
<a name="_lua"></a><h3 class="help-heading">LUA</h3>

<div class="help-li" style=""> <a name="vim.register_keystroke_callback()"></a><code class="help-tag">vim.register_keystroke_callback()</code> 	Use <a href="lua.html#vim.on_key()">vim.on_key()</a> instead.
</div>
</div>
<div class="help-para">
<a name="_normal-commands"></a><h3 class="help-heading">NORMAL COMMANDS</h3>

<div class="help-li" style=""> <a name="%5Df"></a><code class="help-tag">]f</code> <a name="%5Bf"></a><code class="help-tag">[f</code>		Same as "gf".
</div>
</div>
<div class="help-para">
<a name="_options"></a><h3 class="help-heading">OPTIONS</h3>

<div class="help-li" style=""> <a name="cpo-%3C"></a><code class="help-tag">cpo-&lt;</code> <a name="%3Amenu-%3Cspecial%3E"></a><code class="help-tag">:menu-&lt;special&gt;</code> <a name="%3Amenu-special"></a><code class="help-tag">:menu-special</code> <a name="%3Amap-%3Cspecial%3E"></a><code class="help-tag">:map-&lt;special&gt;</code> <a name="%3Amap-special"></a><code class="help-tag">:map-special</code>
  <code>&lt;&gt;</code> notation is always enabled.
</div><div class="help-li" style=""> <a href="options.html#'gdefault'">'gdefault'</a>		Enables the <a href="change.html#%3Asubstitute">:substitute</a> flag 'g' by default.
</div><div class="help-li" style=""> <a name="'fe'"></a><code class="help-tag">'fe'</code>		<a href="options.html#'fenc'">'fenc'</a>+'enc' before Vim 6.0; no longer used.
</div><div class="help-li" style=""> <a name="'highlight'"></a><code class="help-tag">'highlight'</code> <a name="'hl'"></a><code class="help-tag">'hl'</code>	Names of builtin <a href="syntax.html#highlight-groups">highlight-groups</a> cannot be changed.
</div><div class="help-li" style=""> <a name="'langnoremap'"></a><code class="help-tag">'langnoremap'</code>	Deprecated alias to <a href="options.html#'nolangremap'">'nolangremap'</a>.
</div><div class="help-li" style=""> <a href="options.html#'sessionoptions'">'sessionoptions'</a>	Flags "unix", "slash" are ignored and always enabled.
</div><div class="help-li" style=""> <a name="'vi'"></a><code class="help-tag">'vi'</code>
</div><div class="help-li" style=""> <a href="options.html#'viewoptions'">'viewoptions'</a>		Flags "unix", "slash" are ignored and always enabled.
</div><div class="help-li" style=""> <a name="'viminfo'"></a><code class="help-tag">'viminfo'</code>		Deprecated alias to <a href="options.html#'shada'">'shada'</a> option.
</div><div class="help-li" style=""> <a name="'viminfofile'"></a><code class="help-tag">'viminfofile'</code>	Deprecated alias to <a href="options.html#'shadafile'">'shadafile'</a> option.
</div>
</div>
<div class="help-para">
<a name="_ui-extensions"></a><h3 class="help-heading">UI EXTENSIONS</h3>

<div class="help-li" style=""> <a name="ui-wildmenu"></a><code class="help-tag">ui-wildmenu</code>		Use <a href="ui.html#ui-cmdline">ui-cmdline</a> with <a href="ui.html#ui-popupmenu">ui-popupmenu</a> instead. Enabled
			by the <code>ext_wildmenu</code> <a href="ui.html#ui-option">ui-option</a>. Emits these events:
</div><div class="help-li" style="margin-left: 3rem;"> <code>["wildmenu_show", items]</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>["wildmenu_select", selected]</code>
</div><div class="help-li" style="margin-left: 3rem;"> <code>["wildmenu_hide"]</code>
</div>
</div>
<div class="help-para">
<a name="_variables"></a><h3 class="help-heading">VARIABLES</h3>

<div class="help-li" style=""> <a name="b%3Aterminal_job_pid"></a><code class="help-tag">b:terminal_job_pid</code>	PID of the top-level process in a <a href="various.html#%3Aterminal">:terminal</a>.
			Use <code>jobpid(&amp;channel)</code> instead.
</div>
</div>

  
  