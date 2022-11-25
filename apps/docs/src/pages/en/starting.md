---
title:  Starting
layout: ../../layouts/MainLayout.astro
---

  <a name="starting.txt"></a><a name="starting"></a><h1> Starting</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/starting.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Starting Vim</div>
<div class="old-help-para"><h2 class="help-heading">Nvim arguments<span class="help-heading-tags">						<a name="vim-arguments"></a><span class="help-tag">vim-arguments</span></span></h2></div>
<div class="old-help-para">Most often, Nvim is started to edit a single file with the command:<pre>nvim filename</pre>
More generally, Nvim is started with:<pre>nvim [option | filename] ..</pre>
Option arguments and file name arguments can be mixed, and any number of them
can be given.  However, watch out for options that take an argument.</div>
<div class="old-help-para">The following items decide how to start editing:</div>
<div class="old-help-para">							<a name="-file"></a><code class="help-tag-right">-file</code> <a name="---"></a><code class="help-tag">---</code>
filename	One or more file names.  The first one will be the current
		file and read into the buffer.  The cursor will be positioned
		on the first line of the buffer.
		To avoid a file name starting with a '-' being interpreted as
		an option, precede the arglist with "--", e.g.:<pre>nvim -- -filename</pre></div>
<div class="old-help-para">		All arguments after the "--" will be interpreted as file names,
		no other options or "+command" argument can follow.</div>
<div class="old-help-para">							<a name="--"></a><code class="help-tag-right">--</code>
<code>-</code>  		Alias for stdin (standard input).
		Example:<pre>echo text | nvim - file</pre></div>
<div class="old-help-para">		"text" is read into buffer 1, "file" is opened as buffer 2.
		In most cases (except -s, -es, <a href="starting.html#--embed">--embed</a>, --headless) if stdin
		is not a TTY then it is read as text, so "-" is implied:<pre>echo text | nvim file</pre></div>
<div class="old-help-para">		The buffer will be marked as modified, because it contains
		text that needs to be saved (except for readonly <a href="starting.html#-R">-R</a> mode).
		If you don't like that, put these lines in your init.vim:<pre>" Don't set 'modified' when reading from stdin
au StdinReadPost * set nomodified</pre></div>
<div class="old-help-para">		To read stdin as Normal commands use <a href="starting.html#-s">-s</a> with "-":<pre>echo "ifoo" | nvim -s -</pre></div>
<div class="old-help-para">		To read stdin as Ex commands use <a href="starting.html#-es">-es</a> or <a href="starting.html#-e">-e</a>:<pre>echo "echo getpid()" | nvim -e - -V1</pre></div>
<div class="old-help-para">		To open a file literally named "-", put it after "--":<pre>echo foo | nvim -- -</pre></div>
<div class="old-help-para">		To read stdin as text with <a href="starting.html#--headless">--headless</a> use "-".</div>
<div class="old-help-para">							<a name="-t"></a><code class="help-tag-right">-t</code> <a name="-tag"></a><code class="help-tag">-tag</code>
-t <code>{tag}</code>	A tag.  "tag" is looked up in the tags file, the associated
		file becomes the current file, and the associated command is
		executed.  Mostly this is used for C programs, in which case
		"tag" often is a function name.  The effect is that the file
		containing that function becomes the current file and the
		cursor is positioned on the start of the function (see
		<a href="tagsrch.html#tags">tags</a>).</div>
<div class="old-help-para">							<a name="-q"></a><code class="help-tag-right">-q</code> <a name="-qf"></a><code class="help-tag">-qf</code>
-q [errorfile]	QuickFix mode.  The file with the name [errorfile] is read
		and the first error is displayed.  See <a href="quickfix.html#quickfix">quickfix</a>.
		If [errorfile] is not given, the <a href="options.html#'errorfile'">'errorfile'</a> option is used
		for the file name.  See <a href="options.html#'errorfile'">'errorfile'</a> for the default value.</div>
<div class="old-help-para">(nothing)	Without one of the four items above, Vim will start editing a
		new buffer.  It's empty and doesn't have a file name.</div>
<div class="old-help-para">							<a name="startup-options"></a><code class="help-tag-right">startup-options</code>
The option arguments may be given in any order.  Single-letter options can be
combined after one dash.  There can be no option arguments after the "--"
argument.</div>
<div class="old-help-para">--help							<a name="-h"></a><code class="help-tag-right">-h</code> <a name="--help"></a><code class="help-tag">--help</code> <a name="-%3F"></a><code class="help-tag">-?</code>
-?
-h		Give usage (help) message and exit.</div>
<div class="old-help-para">--version						<a name="-v"></a><code class="help-tag-right">-v</code> <a name="--version"></a><code class="help-tag">--version</code>
-v		Print version information and exit.  Same output as for
		<a href="various.html#%3Aversion">:version</a> command.</div>
<div class="old-help-para">							<a name="--clean"></a><code class="help-tag-right">--clean</code>
--clean		Mimics a fresh install of Nvim:
<div class="help-li" style=""> Skips initializations from files and environment variables.
</div><div class="help-li" style=""> No <a href="options.html#'shada'">'shada'</a> file is read or written.
</div><div class="help-li" style=""> Excludes user directories from <a href="options.html#'runtimepath'">'runtimepath'</a>
</div><div class="help-li" style=""> Loads builtin plugins, unlike "-u NONE -i NONE".
</div></div>
<div class="old-help-para">							<a name="--noplugin"></a><code class="help-tag-right">--noplugin</code>
--noplugin	Skip loading plugins.  Resets the <a href="options.html#'loadplugins'">'loadplugins'</a> option.
		Note that the <a href="starting.html#-u">-u</a> argument may also disable loading plugins:
<div class="help-column_heading">			argument	load vimrc files	load plugins</div>			(nothing)		yes		    yes
			-u NONE			no		    no
			-u NORC			no		    yes
			--noplugin		yes		    no</div>
<div class="old-help-para">--startuptime <code>{fname}</code>					<a name="--startuptime"></a><code class="help-tag-right">--startuptime</code>
		During startup write timing messages to the file <code>{fname}</code>.
		This can be used to find out where time is spent while loading
		your <a href="starting.html#config">config</a>, plugins and opening the first file.
		When <code>{fname}</code> already exists new messages are appended.</div>
<div class="old-help-para">							<a name="-%2B"></a><code class="help-tag-right">-+</code>
+[num]		The cursor will be positioned on line "num" for the first
		file being edited.  If "num" is missing, the cursor will be
		positioned on the last line.</div>
<div class="old-help-para">							<a name="-%2B%2F"></a><code class="help-tag-right">-+/</code>
+/{pat}		The cursor will be positioned on the first line containing
		"pat" in the first file being edited (see <a href="pattern.html#pattern">pattern</a> for the
		available search patterns).  The search starts at the cursor
		position, which can be the first line or the cursor position
		last used from <a href="starting.html#shada">shada</a>. To force a search from the first
		line use "+1 +/pat".</div>
<div class="old-help-para">+{command}						<a name="-%2Bc"></a><code class="help-tag-right">-+c</code> <a name="-c"></a><code class="help-tag">-c</code>
-c <code>{command}</code>	<code>{command}</code> will be executed after the first file has been
		read (and after autocommands and modelines for that file have
		been processed).  "command" is interpreted as an Ex command.
		If the "command" contains spaces, it must be enclosed in
		double quotes (this depends on the shell that is used).
		Example:<pre>vim  "+set si"  main.c
vim  "+find stdio.h"
vim  -c "set ff=dos"  -c wq  mine.mak</pre></div>
<div class="old-help-para">		Note: You can use up to 10 "+" or "-c" arguments in a Vim
		command.  They are executed in the order given.  A "-S"
		argument counts as a "-c" argument as well.</div>
<div class="old-help-para">--cmd <code>{command}</code>						<a name="--cmd"></a><code class="help-tag-right">--cmd</code>
		<code>{command}</code> will be executed before processing any vimrc file.
		Otherwise it acts like -c <code>{command}</code>.  You can use up to 10 of
		these commands, independently from "-c" commands.</div>
<div class="old-help-para">							<a name="-S"></a><code class="help-tag-right">-S</code>
-S <code>{file}</code>	Vimscript or Lua (".lua") <code>{file}</code> will be <a href="repeat.html#%3Asource">:source</a>d after the
		first file has been read. Equivalent to:<pre>-c "source {file}"</pre></div>
<div class="old-help-para">		Can be repeated like "-c", subject to the same limit of 10
		"-c" arguments. <code>{file}</code> cannot start with a "-".</div>
<div class="old-help-para">-S		Works like "-S Session.vim".  Only when used as the last
		argument or when another "-" option follows.</div>
<div class="old-help-para">-L							<a name="-L"></a><code class="help-tag-right">-L</code> <a name="-r"></a><code class="help-tag">-r</code>
-r		Recovery mode.  Without a file name argument, a list of
		existing swap files is given.  With a file name, a swap file
		is read to recover a crashed editing session.  See
		<a href="recover.html#crash-recovery">crash-recovery</a>.</div>
<div class="old-help-para">							<a name="-R"></a><code class="help-tag-right">-R</code>
-R		Readonly mode.  The <a href="options.html#'readonly'">'readonly'</a> option will be set for all the
		files being edited.  You can still edit the buffer, but will
		be prevented from accidentally overwriting a file.  If you
		forgot that you are in View mode and did make some changes,
		you can overwrite a file by adding an exclamation mark to
		the Ex command, as in ":w!".  The <a href="options.html#'readonly'">'readonly'</a> option can be
		reset with ":set noro" (see the options chapter, <a href="options.html#options">options</a>).
		Subsequent edits will not be done in readonly mode.  Calling
		the executable "view" has the same effect as the -R argument.
		The <a href="options.html#'updatecount'">'updatecount'</a> option will be set to 10000, meaning that
		the swap file will not be updated automatically very often.
		See <a href="starting.html#-M">-M</a> for disallowing modifications.</div>
<div class="old-help-para">							<a name="-m"></a><code class="help-tag-right">-m</code>
-m		Modifications not allowed to be written.  The <a href="options.html#'write'">'write'</a> option
		will be reset, so that writing files is disabled.  However,
		the <a href="options.html#'write'">'write'</a> option can be set to enable writing again.</div>
<div class="old-help-para">							<a name="-M"></a><code class="help-tag-right">-M</code>
-M		Modifications not allowed.  The <a href="options.html#'modifiable'">'modifiable'</a> option will be
		reset, so that changes are not allowed.  The <a href="options.html#'write'">'write'</a> option
		will be reset, so that writing files is disabled.  However,
		the <a href="options.html#'modifiable'">'modifiable'</a> and <a href="options.html#'write'">'write'</a> options can be set to enable
		changes and writing.</div>
<div class="old-help-para">-e							<a name="-e"></a><code class="help-tag-right">-e</code> <a name="-E"></a><code class="help-tag">-E</code>
-E		Start Nvim in Ex mode <a href="intro.html#gQ">gQ</a>, see <a href="intro.html#Ex-mode">Ex-mode</a>.</div>
<div class="old-help-para">		If stdin is not a TTY:
		  -e reads/executes stdin as Ex commands.
		  -E reads stdin as text (into buffer 1).</div>
<div class="old-help-para">-es						<a name="-es"></a><code class="help-tag-right">-es</code> <a name="-Es"></a><code class="help-tag">-Es</code> <a name="-s-ex"></a><code class="help-tag">-s-ex</code> <a name="silent-mode"></a><code class="help-tag">silent-mode</code>
-Es		Silent mode (no UI), for scripting.  Unrelated to <a href="starting.html#-s">-s</a>.
		Disables most prompts, messages, warnings and errors.</div>
<div class="old-help-para">		-es reads/executes stdin as Ex commands.<pre>printf "put ='foo'\n%%print\n" | nvim -es</pre></div>
<div class="old-help-para">		-Es reads stdin as text (into buffer 1).  Use <a href="starting.html#-c">-c</a> or "+" to
		send commands.<pre>printf "foo\n" | nvim -Es +"%print"</pre></div>
<div class="old-help-para">		These commands display on stdout:
			:list
			:number
			:print
			:set
		With <a href="various.html#%3Averbose">:verbose</a> or <a href="options.html#'verbose'">'verbose'</a>, other commands display on stderr:<pre>nvim -es +":verbose echo 'foo'"
nvim -V1 -es +foo</pre></div>
<div class="old-help-para">		User <a href="starting.html#config">config</a> is skipped (unless given with <a href="starting.html#-u">-u</a>).
		Swap file is skipped (like <a href="starting.html#-n">-n</a>).
		User <a href="starting.html#shada">shada</a> is loaded (unless "-i NONE" is given).</div>
<div class="old-help-para">							<a name="-b"></a><code class="help-tag-right">-b</code>
-b		Binary mode.  File I/O will only recognize <code>&lt;NL&gt;</code> to separate
		lines.  The <a href="options.html#'expandtab'">'expandtab'</a> option will be reset.  The <a href="options.html#'textwidth'">'textwidth'</a>
		option is set to 0.  <a href="options.html#'modeline'">'modeline'</a> is reset.  The <a href="options.html#'binary'">'binary'</a> option
		is set.  This is done after reading the <a href="starting.html#vimrc">vimrc</a> but before
		reading any file in the arglist.  See also <a href="editing.html#edit-binary">edit-binary</a>.</div>
<div class="old-help-para">							<a name="-l"></a><code class="help-tag-right">-l</code>
-l		Lisp mode.  Sets the <a href="options.html#'lisp'">'lisp'</a> and <a href="options.html#'showmatch'">'showmatch'</a> options on.</div>
<div class="old-help-para">							<a name="-A"></a><code class="help-tag-right">-A</code>
-A		Arabic mode.  Sets the <a href="options.html#'arabic'">'arabic'</a> option on.</div>
<div class="old-help-para">							<a name="-H"></a><code class="help-tag-right">-H</code>
-H		Hebrew mode.  Sets the <a href="options.html#'hkmap'">'hkmap'</a> and <a href="options.html#'rightleft'">'rightleft'</a> options on.</div>
<div class="old-help-para">							<a name="-V"></a><code class="help-tag-right">-V</code> <a name="verbose"></a><code class="help-tag">verbose</code>
-V[N]		Verbose.  Sets the <a href="options.html#'verbose'">'verbose'</a> option to [N] (default: 10).
		Messages will be given for each file that is ":source"d and
		for reading or writing a ShaDa file.  Can be used to find
		out what is happening upon startup and exit.
		Example:<pre>nvim -V8</pre>
-V[N]{filename}
		Like -V and set <a href="options.html#'verbosefile'">'verbosefile'</a> to <code>{filename}</code>.  Messages are not
		displayed; instead they are written to the file <code>{filename}</code>.
		<code>{filename}</code> must not start with a digit.
		Example:<pre>nvim -V20vimlog</pre></div>
<div class="old-help-para">							<a name="-D"></a><code class="help-tag-right">-D</code>
-D		Debugging.  Go to debugging mode when executing the first
		command from a script. <a href="repeat.html#debug-mode">debug-mode</a></div>
<div class="old-help-para">							<a name="-n"></a><code class="help-tag-right">-n</code>
-n		No <a href="recover.html#swap-file">swap-file</a> will be used.  Recovery after a crash will be
		impossible.  Handy if you want to view or edit a file on a
		very slow medium (e.g., a floppy).
		Can also be done with ":set updatecount=0".  You can switch it
		on again by setting the <a href="options.html#'updatecount'">'updatecount'</a> option to some value,
		e.g., ":set uc=100".
		<a href="options.html#'updatecount'">'updatecount'</a> is set to 0 AFTER executing commands from a
		vimrc file, but before the GUI initializations.  Thus it
		overrides a setting for <a href="options.html#'updatecount'">'updatecount'</a> in a vimrc file, but not
		in a gvimrc file.  See <a href="starting.html#startup">startup</a>.
		When you want to reduce accesses to the disk (e.g., for a
		laptop), don't use "-n", but set <a href="options.html#'updatetime'">'updatetime'</a> and
		<a href="options.html#'updatecount'">'updatecount'</a> to very big numbers, and type ":preserve" when
		you want to save your work.  This way you keep the possibility
		for crash recovery.</div>
<div class="old-help-para">							<a name="-o"></a><code class="help-tag-right">-o</code>
-o[N]		Open N windows, split horizontally.  If [N] is not given,
		one window is opened for every file given as argument.  If
		there is not enough room, only the first few files get a
		window.  If there are more windows than arguments, the last
		few windows will be editing an empty file.</div>
<div class="old-help-para">							<a name="-O"></a><code class="help-tag-right">-O</code>
-O[N]		Open N windows, split vertically.  Otherwise it's like -o.
		If both the -o and the -O option are given, the last one on
		the command line determines how the windows will be split.</div>
<div class="old-help-para">							<a name="-p"></a><code class="help-tag-right">-p</code>
-p[N]		Open N tab pages.  If [N] is not given, one tab page is opened
		for every file given as argument.  The maximum is set with
		<a href="options.html#'tabpagemax'">'tabpagemax'</a> pages (default 50).  If there are more tab pages
		than arguments, the last few tab pages will be editing an
		empty file.  Also see <a href="tabpage.html#tabpage">tabpage</a>.
							<a name="-d"></a><code class="help-tag-right">-d</code>
-d		Start in <a href="diff.html#diff-mode">diff-mode</a>.</div>
<div class="old-help-para">							<a name="-u"></a><code class="help-tag-right">-u</code> <a name="E282"></a><code class="help-tag">E282</code>
-u <code>{vimrc}</code>	The file <code>{vimrc}</code> is read for initializations.  Most other
		initializations are skipped; see <a href="starting.html#initialization">initialization</a>.</div>
<div class="old-help-para">		This can be used to start Vim in a special mode, with special
		mappings and settings.  A shell alias can be used to make
		this easy to use.  For example:<pre>alias vimc vim -u ~/.config/nvim/c_init.vim !*</pre></div>
<div class="old-help-para">		Also consider using autocommands; see <a href="autocmd.html#autocommand">autocommand</a>.</div>
<div class="old-help-para">		When <code>{vimrc}</code> is "NONE" (all uppercase), all initializations
		from files and environment variables are skipped.  Plugins and
		syntax highlighting are also skipped.</div>
<div class="old-help-para">		When <code>{vimrc}</code> is "NORC" (all uppercase), this has the same
		effect as "NONE", but plugins and syntax highlighting are not
		skipped.</div>
<div class="old-help-para">							<a name="-i"></a><code class="help-tag-right">-i</code>
-i <code>{shada}</code>	The file <code>{shada}</code> is used instead of the default ShaDa
		file.  If the name "NONE" is used (all uppercase), no ShaDa
		file is read or written, even if <a href="options.html#'shada'">'shada'</a> is set or when
		":rsh" or ":wsh" are used.  See also <a href="starting.html#shada-file">shada-file</a>.</div>
<div class="old-help-para">							<a name="-s"></a><code class="help-tag-right">-s</code>
-s <code>{scriptin}</code>	Read script file <code>{scriptin}</code>, interpreting characters as
		Normal-mode input.  The same can be done with ":source!":<pre>:source! {scriptin}</pre></div>
<div class="old-help-para">		Reads from stdin if <code>{scriptin}</code> is "-":<pre>echo "ifoo" | nvim -s -</pre></div>
<div class="old-help-para">		If the end of the file is reached before Nvim exits, further
		characters are read from the keyboard.</div>
<div class="old-help-para">		Does not work with <a href="starting.html#-es">-es</a>.  See also <a href="repeat.html#complex-repeat">complex-repeat</a>.</div>
<div class="old-help-para">							<a name="-w_nr"></a><code class="help-tag-right">-w_nr</code>
-w <code>{number}</code>
-w{number}	Set the <a href="options.html#'window'">'window'</a> option to <code>{number}</code>.</div>
<div class="old-help-para">							<a name="-w"></a><code class="help-tag-right">-w</code>
-w <code>{scriptout}</code>	All keys that you type are recorded in the file "scriptout",
		until you exit Vim.  Useful to create a script file to be used
		with "vim -s" or ":source!".  Appends to the "scriptout" file
		if it already exists. <code>{scriptout}</code> cannot start with a digit.
		See also <a href="lua.html#vim.on_key()">vim.on_key()</a>.
		See also <a href="repeat.html#complex-repeat">complex-repeat</a>.</div>
<div class="old-help-para">							<a name="-W"></a><code class="help-tag-right">-W</code>
-W <code>{scriptout}</code>	Like -w, but do not append, overwrite an existing file.</div>
<div class="old-help-para">							<a name="--api-info"></a><code class="help-tag-right">--api-info</code>
--api-info 	Print msgpack-encoded <a href="api.html#api-metadata">api-metadata</a> and exit.</div>
<div class="old-help-para">							<a name="--embed"></a><code class="help-tag-right">--embed</code>
--embed		Use stdin/stdout as a msgpack-RPC channel, so applications can
		embed and control Nvim via the RPC <a href="api.html#API">API</a>.</div>
<div class="old-help-para">		Waits for the client ("embedder") to call <a href="api.html#nvim_ui_attach()">nvim_ui_attach()</a>
		before sourcing startup files and reading buffers, so that UIs
		can deterministically handle (display) early messages,
		dialogs, etc.  The client can do other requests before
		<code>nvim_ui_attach</code> (e.g. <code>nvim_get_api_info</code> for feature-detection).
		During this pre-startup phase the user config is of course not
		available (similar to <code>--cmd</code>).</div>
<div class="old-help-para">		Embedders _not_ using the UI protocol must pass <a href="starting.html#--headless">--headless</a>:<pre>nvim --embed --headless</pre></div>
<div class="old-help-para">		Then startup will continue without waiting for <code>nvim_ui_attach</code>.
		This is equivalent to:<pre>nvim --headless --cmd "call stdioopen({'rpc': v:true})"</pre></div>
<div class="old-help-para">		See also: <a href="ui.html#ui-startup">ui-startup</a> <a href="channel.html#channel-stdio">channel-stdio</a></div>
<div class="old-help-para">							<a name="--headless"></a><code class="help-tag-right">--headless</code>
--headless 	Start without UI, and do not wait for <code>nvim_ui_attach</code>. The
		builtin TUI is not used, so stdio works as an arbitrary
		communication channel. <a href="channel.html#channel-stdio">channel-stdio</a></div>
<div class="old-help-para">		Also useful for scripting (tests) to see messages that would
		not be printed by <a href="starting.html#-es">-es</a>.</div>
<div class="old-help-para">		To detect if a UI is available, check if <a href="api.html#nvim_list_uis()">nvim_list_uis()</a> is
		empty during or after <a href="autocmd.html#VimEnter">VimEnter</a>.</div>
<div class="old-help-para">		To read stdin as text, "-" must be given explicitly:
		--headless cannot assume that stdin is just text.<pre>echo foo | nvim --headless +"%print" +"q!" -</pre></div>
<div class="old-help-para">		See also <a href="starting.html#--embed">--embed</a>.
		See also <a href="starting.html#-es">-es</a>, which also disables most messages.</div>
<div class="old-help-para">--listen <code>{addr}</code>						<a name="--listen"></a><code class="help-tag-right">--listen</code>
		Start <a href="api.html#RPC">RPC</a> server on pipe or TCP address <code>{addr}</code>. Sets the
		primary listen address <a href="eval.html#v%3Aservername">v:servername</a> to <code>{addr}</code>. <a href="builtin.html#serverstart()">serverstart()</a></div>
<div class="old-help-para"><h2 class="help-heading">Initialization<span class="help-heading-tags">					<a name="initialization"></a><span class="help-tag">initialization</span> <a name="startup"></a><span class="help-tag">startup</span></span></h2></div>
<div class="old-help-para">At startup, Nvim checks environment variables and files and sets values
accordingly, proceeding as follows:</div>
<div class="old-help-para">1. Set the <a href="options.html#'shell'">'shell'</a> option			<a name="SHELL"></a><code class="help-tag-right">SHELL</code> <a name="COMSPEC"></a><code class="help-tag">COMSPEC</code>
	The environment variable SHELL, if it exists, is used to set the
	<a href="options.html#'shell'">'shell'</a> option.  On Win32, the COMSPEC variable is used
	if SHELL is not set.</div>
<div class="old-help-para">2. Process the arguments
	The options and file names from the command that start Vim are
	inspected.  Buffers are created for all files (but not loaded yet).
	The <a href="starting.html#-V">-V</a> argument can be used to display or log what happens next,
	useful for debugging the initializations.</div>
<div class="old-help-para">3. Start a server (unless <a href="starting.html#--listen">--listen</a> was given) and set <a href="eval.html#v%3Aservername">v:servername</a>.</div>
<div class="old-help-para">4. Wait for UI to connect.
	Nvim started with <a href="starting.html#--embed">--embed</a> waits for the UI to connect before
	proceeding to load user configuration.</div>
<div class="old-help-para">5. Setup <a href="vim_diff.html#default-mappings">default-mappings</a> and <a href="vim_diff.html#default-autocmds">default-autocmds</a>.  Create <a href="gui.html#popup-menu">popup-menu</a>.</div>
<div class="old-help-para">6. Enable filetype and indent plugins.
	This does the same as the command:<pre>:runtime! ftplugin.vim indent.vim</pre></div>
<div class="old-help-para">	Skipped if the "-u NONE" command line argument was given.</div>
<div class="old-help-para">7. Load user config (execute Ex commands from files, environment, …).
	$VIMINIT environment variable is read as one Ex command line (separate
	multiple commands with '|' or <code>&lt;NL&gt;</code>).
					<a name="config"></a><code class="help-tag-right">config</code> <a name="init.vim"></a><code class="help-tag">init.vim</code> <a name="init.lua"></a><code class="help-tag">init.lua</code> <a name="vimrc"></a><code class="help-tag">vimrc</code> <a name="exrc"></a><code class="help-tag">exrc</code>
	A file containing initialization commands is generically called
	a "vimrc" or config file.  It can be either Vimscript ("init.vim") or
	Lua ("init.lua"), but not both. <a name="E5422"></a><code class="help-tag">E5422</code>
	See also <a href="usr_05.html#vimrc-intro">vimrc-intro</a> and <a href="starting.html#base-directories">base-directories</a>.</div>
<div class="old-help-para">	The config file is located at:
	Unix			~/.config/nvim/init.vim		(or init.lua)
	Windows			~/AppData/Local/nvim/init.vim	(or init.lua)
	<a href="starting.html#%24XDG_CONFIG_HOME">$XDG_CONFIG_HOME</a>  	$XDG_CONFIG_HOME/nvim/init.vim	(or init.lua)</div>
<div class="old-help-para">	If Nvim was started with "-u <code>{file}</code>" then <code>{file}</code> is used as the config
	and all initializations until 5. are skipped. $MYVIMRC is not set.
	"nvim -u NORC" can be used to skip these initializations without
	reading a file.  "nvim -u NONE" also skips plugins and syntax
	highlighting.  <a href="starting.html#-u">-u</a></div>
<div class="old-help-para">	If Nvim was started with <a href="starting.html#-es">-es</a> all initializations until 5. are
	skipped.
						<a name="system-vimrc"></a><code class="help-tag-right">system-vimrc</code> <a name="sysinit.vim"></a><code class="help-tag">sysinit.vim</code>
     a. The system vimrc file is read for initializations.  If
	nvim/sysinit.vim file exists in one of $XDG_CONFIG_DIRS, it will be
	used.  Otherwise the system vimrc file is used. The path of this file
	is given by the <a href="various.html#%3Aversion">:version</a> command.  Usually it's "$VIM/sysinit.vim".</div>
<div class="old-help-para">						<a name="VIMINIT"></a><code class="help-tag-right">VIMINIT</code> <a name="EXINIT"></a><code class="help-tag">EXINIT</code> <a name="%24MYVIMRC"></a><code class="help-tag">$MYVIMRC</code>
     b. Locations searched for initializations, in order of preference:
<div class="help-li" style="">  $VIMINIT environment variable (Ex command line).
</div><div class="help-li" style="">  User <a href="starting.html#config">config</a>: $XDG_CONFIG_HOME/nvim/init.vim (or init.lua).
</div><div class="help-li" style="">  Other config: <code>{dir}</code>/nvim/init.vim (or init.lua) where <code>{dir}</code> is any
	   directory in $XDG_CONFIG_DIRS.
</div><div class="help-li" style="">  $EXINIT environment variable (Ex command line).
	<a href="starting.html#%24MYVIMRC">$MYVIMRC</a> is set to the first valid location unless it was already
	set or when using $VIMINIT.
</div></div>
<div class="old-help-para">     c. If the <a href="options.html#'exrc'">'exrc'</a> option is on (which is NOT the default), the current
	directory is searched for two files.  The first that exists is used,
	the others are ignored.
<div class="help-li" style="">  The file ".nvimrc"
</div><div class="help-li" style="">  The file ".exrc"
</div></div>
<div class="old-help-para">8. Enable filetype detection.
	This does the same as the command:<pre>:runtime! filetype.lua</pre></div>
<div class="old-help-para">	Skipped if ":filetype off" was called or if the "-u NONE" command line
	argument was given.</div>
<div class="old-help-para">9. Enable syntax highlighting.
	This does the same as the command:<pre>:runtime! syntax/syntax.vim</pre></div>
<div class="old-help-para">	Skipped if ":syntax off" was called or if the "-u NONE" command
	line argument was given.</div>
<div class="old-help-para">10. Load the plugin scripts.					<a name="load-plugins"></a><code class="help-tag-right">load-plugins</code>
	This does the same as the command:<pre>:runtime! plugin/**/*.vim
:runtime! plugin/**/*.lua</pre></div>
<div class="old-help-para">	The result is that all directories in <a href="options.html#'runtimepath'">'runtimepath'</a> will be searched
	for the "plugin" sub-directory and all files ending in ".vim" or
	".lua" will be sourced (in alphabetical order per directory),
	also in subdirectories. First "*.vim" are sourced, then "*.lua" files.</div>
<div class="old-help-para">	However, directories in <a href="options.html#'runtimepath'">'runtimepath'</a> ending in "after" are skipped
	here and only loaded after packages, see below.
	Loading plugins won't be done when:
<div class="help-li" style=""> The <a href="options.html#'loadplugins'">'loadplugins'</a> option was reset in a vimrc file.
</div><div class="help-li" style=""> The <a href="starting.html#--noplugin">--noplugin</a> command line argument is used.
</div><div class="help-li" style=""> The <a href="starting.html#--clean">--clean</a> command line argument is used.
</div><div class="help-li" style=""> The "-u NONE" command line argument is used <a href="starting.html#-u">-u</a>.
	Note that using "-c '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+starting.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/starting.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09-%20The%20%7C--noplugin%7C%20command%20line%20argument%20is%20used.%0A%09-%20The%20%7C--clean%7C%20command%20line%20argument%20is%20used.%0A%09-%20The%20%22-u%20NONE%22%20command%20line%20argument%20is%20used%20%7C-u%7C.%0A%09Note%20that%20using%20%22-c%20'set%20noloadplugins'%22%20doesn't%20work%2C%20because%20the%0A%09commands%20from%20the%20command%20line%20have%20not%20been%20executed%20yet.%20%20You%20can%0A%09use%20%22--cmd%20'set%20noloadplugins'%22%20or%20%22--cmd%20'set%20loadplugins'%22%20%7C--cmd%7C.%0A%0D%60%60%60">set</a> noloadplugins'" doesn't work, because the
	commands from the command line have not been executed yet.  You can
	use "--cmd '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+starting.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/starting.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09-%20The%20%22-u%20NONE%22%20command%20line%20argument%20is%20used%20%7C-u%7C.%0A%09Note%20that%20using%20%22-c%20'set%20noloadplugins'%22%20doesn't%20work%2C%20because%20the%0A%09commands%20from%20the%20command%20line%20have%20not%20been%20executed%20yet.%20%20You%20can%0A%09use%20%22--cmd%20'set%20noloadplugins'%22%20or%20%22--cmd%20'set%20loadplugins'%22%20%7C--cmd%7C.%0A%0A%09Packages%20are%20loaded.%20%20These%20are%20plugins%2C%20as%20above%2C%20but%20found%20in%20the%0A%09%22start%22%20directory%20of%20each%20entry%20in%20'packpath'.%20%20Every%20plugin%20directory%0D%60%60%60">set</a> noloadplugins'" or "--cmd '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+starting.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/starting.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09-%20The%20%22-u%20NONE%22%20command%20line%20argument%20is%20used%20%7C-u%7C.%0A%09Note%20that%20using%20%22-c%20'set%20noloadplugins'%22%20doesn't%20work%2C%20because%20the%0A%09commands%20from%20the%20command%20line%20have%20not%20been%20executed%20yet.%20%20You%20can%0A%09use%20%22--cmd%20'set%20noloadplugins'%22%20or%20%22--cmd%20'set%20loadplugins'%22%20%7C--cmd%7C.%0A%0A%09Packages%20are%20loaded.%20%20These%20are%20plugins%2C%20as%20above%2C%20but%20found%20in%20the%0A%09%22start%22%20directory%20of%20each%20entry%20in%20'packpath'.%20%20Every%20plugin%20directory%0D%60%60%60">set</a> loadplugins'" <a href="starting.html#--cmd">--cmd</a>.
</div></div>
<div class="old-help-para">	Packages are loaded.  These are plugins, as above, but found in the
	"start" directory of each entry in <a href="options.html#'packpath'">'packpath'</a>.  Every plugin directory
	found is added in <a href="options.html#'runtimepath'">'runtimepath'</a> and then the plugins are sourced.  See
	<a href="repeat.html#packages">packages</a>.</div>
<div class="old-help-para">	The plugins scripts are loaded, as above, but now only the directories
	ending in "after" are used.  Note that <a href="options.html#'runtimepath'">'runtimepath'</a> will have changed
	if packages have been found, but that should not add a directory
	ending in "after".</div>
<div class="old-help-para">11. Set <a href="options.html#'shellpipe'">'shellpipe'</a> and <a href="options.html#'shellredir'">'shellredir'</a>
	The <a href="options.html#'shellpipe'">'shellpipe'</a> and <a href="options.html#'shellredir'">'shellredir'</a> options are set according to the
	value of the <a href="options.html#'shell'">'shell'</a> option, unless they have been set before.
	This means that Nvim will figure out the values of <a href="options.html#'shellpipe'">'shellpipe'</a> and
	<a href="options.html#'shellredir'">'shellredir'</a> for you, unless you have set them yourself.</div>
<div class="old-help-para">12. Set <a href="options.html#'updatecount'">'updatecount'</a> to zero, if "-n" command argument used</div>
<div class="old-help-para">13. Set binary options if the <a href="starting.html#-b">-b</a> flag was given.</div>
<div class="old-help-para">14. Read the <a href="starting.html#shada-file">shada-file</a>.</div>
<div class="old-help-para">15. Read the quickfix file if the <a href="starting.html#-q">-q</a> flag was given, or exit on failure.</div>
<div class="old-help-para">16. Open all windows
	When the <a href="starting.html#-o">-o</a> flag was given, windows will be opened (but not
	displayed yet).
	When the <a href="starting.html#-p">-p</a> flag was given, tab pages will be created (but not
	displayed yet).
	When switching screens, it happens now.  Redrawing starts.
	If the <a href="starting.html#-q">-q</a> flag was given, the first error is jumped to.
	Buffers for all windows will be loaded, without triggering <a href="autocmd.html#BufAdd">BufAdd</a>
	autocommands.</div>
<div class="old-help-para">17. Execute startup commands
	If a <a href="starting.html#-t">-t</a> flag was given, the tag is jumped to.
	Commands given with <a href="starting.html#-c">-c</a> and <a href="editing.html#%2Bcmd">+cmd</a> are executed.
	The starting flag is reset, has("vim_starting") will now return zero.
	The <a href="eval.html#v%3Avim_did_enter">v:vim_did_enter</a> variable is set to 1.
	The <a href="autocmd.html#VimEnter">VimEnter</a> autocommands are executed.</div>
<div class="old-help-para"><div class="help-column_heading">Saving the current state of Vim to a file</div></div>
<div class="old-help-para">Whenever you have changed values of options or when you have created a
mapping, then you may want to save them in a vimrc file for later use.  See
<a href="starting.html#save-settings">save-settings</a> about saving the current state of settings to a file.</div>
<div class="old-help-para"><div class="help-column_heading">Avoiding trojan horses</div>							<a name="trojan-horse"></a><code class="help-tag-right">trojan-horse</code>
While reading the "vimrc" or the "exrc" file in the current directory, some
commands can be disabled for security reasons by setting the <a href="vim_diff.html#'secure'">'secure'</a> option.
This is always done when executing the command from a tags file.  Otherwise it
would be possible that you accidentally use a vimrc or tags file that somebody
else created and contains nasty commands.  The disabled commands are the ones
that start a shell, the ones that write to a file, and ":autocmd".  The ":map"
commands are echoed, so you can see which keys are being mapped.
	If you want Vim to execute all commands in a local vimrc file, you
can reset the <a href="vim_diff.html#'secure'">'secure'</a> option in the EXINIT or VIMINIT environment variable or
in the global exrc or vimrc file.  This is not possible in vimrc or
exrc in the current directory, for obvious reasons.
	On Unix systems, this only happens if you are not the owner of the
vimrc file.  Warning: If you unpack an archive that contains a vimrc or exrc
file, it will be owned by you.  You won't have the security protection.  Check
the vimrc file before you start Vim in that directory, or reset the <a href="options.html#'exrc'">'exrc'</a>
option.  Some Unix systems allow a user to do "chown" on a file.  This makes
it possible for another user to create a nasty vimrc and make you the owner.
Be careful!
	When using tag search commands, executing the search command (the last
part of the line in the tags file) is always done in secure mode.  This works
just like executing a command from a vimrc in the current directory.</div>
<div class="old-help-para"><div class="help-column_heading">If Vim startup is slow</div>							<a name="slow-start"></a><code class="help-tag-right">slow-start</code>
If Vim takes a long time to start up, use the <a href="starting.html#--startuptime">--startuptime</a> argument to find
out what happens.</div>
<div class="old-help-para">If you have <a href="options.html#'shada'">'shada'</a> enabled, the loading of the ShaDa file may take a
while.  You can find out if this is the problem by disabling ShaDa for a
moment (use the Vim argument "-i NONE", <a href="starting.html#-i">-i</a>).  Try reducing the number of
lines stored in a register with ":set shada='20,&lt;50,s10".  <a href="starting.html#shada-file">shada-file</a>.</div>
<div class="old-help-para"><div class="help-column_heading">Troubleshooting broken configurations</div>							<a name="bisect"></a><code class="help-tag-right">bisect</code>
The extreme flexibility of editors like Vim and Emacs means that any plugin or
setting can affect the entire editor in ways that are not initially obvious.</div>
<div class="old-help-para">To find the cause of a problem in your config, you must "bisect" it:
1. Remove or disable half of your <a href="starting.html#config">config</a>.
2. Restart Nvim.
3. If the problem still occurs, goto 1.
4. If the problem is gone, restore half of the removed lines.
5. Continue narrowing your config in this way, until you find the setting or
   plugin causing the issue.</div>
<div class="old-help-para"><div class="help-column_heading">Intro message</div>							<a name="%3Aintro"></a><code class="help-tag-right">:intro</code>
When Vim starts without a file name, an introductory message is displayed.  It
is removed as soon as the display is redrawn.  To see the message again, use
the ":intro" command.  To avoid the intro message on startup, add the "I" flag
to <a href="options.html#'shortmess'">'shortmess'</a>.</div>
<div class="old-help-para"><a name="_-$vim-and-$vimruntime"></a><h2 class="help-heading">$VIM and $VIMRUNTIME</h2>								<a name="%24VIM"></a><code class="help-tag-right">$VIM</code>
The environment variable "$VIM" is used to locate various user files for Nvim,
such as the user <a href="starting.html#config">config</a>.  This depends on the system, see
<a href="starting.html#startup">startup</a>.</div>
<div class="old-help-para">Nvim will try to get the value for $VIM in this order:</div>
<div class="old-help-para">1. Environment variable $VIM, if it is set.
2. Path derived from the <a href="options.html#'helpfile'">'helpfile'</a> option, unless it contains some
   environment variable too (default is "$VIMRUNTIME/doc/help.txt").  File
   name ("help.txt", etc.) is removed.  Trailing directory names are removed,
   in this order: "doc", "runtime".
3. Path derived from the location of the <code>nvim</code> executable.
4. Compile-time defined installation directory (see output of ":version").</div>
<div class="old-help-para">After doing this once, Nvim sets the $VIM environment variable.</div>
<div class="old-help-para">								<a name="%24VIMRUNTIME"></a><code class="help-tag-right">$VIMRUNTIME</code>
The environment variable "$VIMRUNTIME" is used to locate various support
files, such as the documentation and syntax-highlighting files.  For example,
the main help file is normally "$VIMRUNTIME/doc/help.txt".</div>
<div class="old-help-para">Nvim will try to get the value for $VIMRUNTIME in this order:</div>
<div class="old-help-para">1. Environment variable $VIMRUNTIME, if it is set.
2. Directory path "$VIM/vim{version}", if it exists, where <code>{version}</code> is the
   Vim version number without '-' or '.'.  For example: "$VIM/vim82".
3. Directory path "$VIM/runtime", if it exists.
4. Value of $VIM environment variable.  This is for backwards compatibility
   with older Vim versions.
5. If "../share/nvim/runtime" exists relative to <a href="eval.html#v%3Aprogpath">v:progpath</a>, it is used.
6. Path derived from the <a href="options.html#'helpfile'">'helpfile'</a> option (if it doesn't contain '$') with
   "doc/help.txt" removed from the end.</div>
<div class="old-help-para">After doing this once, Nvim sets the $VIMRUNTIME environment variable.</div>
<div class="old-help-para">In case you need the value of $VIMRUNTIME in a shell (e.g., for a script that
greps in the help files) you might be able to use this:<pre>VIMRUNTIME="$(nvim --clean --headless --cmd 'echo $VIMRUNTIME|q')"</pre>
<h2 class="help-heading">Suspending<span class="help-heading-tags">						<a name="suspend"></a><span class="help-tag">suspend</span></span></h2></div>
<div class="old-help-para">					<a name="CTRL-Z"></a><code class="help-tag-right">CTRL-Z</code> <a name="v_CTRL-Z"></a><code class="help-tag">v_CTRL-Z</code>
CTRL-Z			Suspend Nvim, like ":stop".
			Works in Normal and in Visual mode.  In Insert and
			Command-line mode, the <code>CTRL-Z</code> is inserted as a normal
			character.  In Visual mode Nvim goes back to Normal
			mode.</div>
<div class="old-help-para">:sus[pend][!]	or			<a name="%3Asus"></a><code class="help-tag-right">:sus</code> <a name="%3Asuspend"></a><code class="help-tag">:suspend</code> <a name="%3Ast"></a><code class="help-tag">:st</code> <a name="%3Astop"></a><code class="help-tag">:stop</code>
:st[op][!]		Suspend Nvim using OS "job control"; it will continue
			if you make it the foreground job again.  Triggers
			<a href="autocmd.html#VimSuspend">VimSuspend</a> before suspending and <a href="autocmd.html#VimResume">VimResume</a> when
			resumed.
			If "!" is not given and <a href="options.html#'autowrite'">'autowrite'</a> is set, every
			buffer with changes and a file name is written out.
			If "!" is given or <a href="options.html#'autowrite'">'autowrite'</a> is not set, changed
			buffers are not written, don't forget to bring Nvim
			back to the foreground later!</div>
<div class="old-help-para">In the GUI, suspending is implementation-defined.</div>
<div class="old-help-para"><h2 class="help-heading">Exiting<span class="help-heading-tags">							<a name="exiting"></a><span class="help-tag">exiting</span></span></h2></div>
<div class="old-help-para">There are several ways to exit Vim:
<div class="help-li" style=""> Close the last window with <code>:quit</code>.  Only when there are no changes.
</div><div class="help-li" style=""> Close the last window with <code>:quit!</code>.  Also when there are changes.
</div><div class="help-li" style=""> Close all windows with <code>:qall</code>.  Only when there are no changes.
</div><div class="help-li" style=""> Close all windows with <code>:qall!</code>.  Also when there are changes.
</div><div class="help-li" style=""> Use <code>:cquit</code>.  Also when there are changes.
</div></div>
<div class="old-help-para">When using <code>:cquit</code> or when there was an error message Vim exits with exit
code 1.  Errors can be avoided by using <code>:silent!</code> or with <code>:catch</code>.</div>
<div class="old-help-para"><h2 class="help-heading">Saving settings<span class="help-heading-tags">						<a name="save-settings"></a><span class="help-tag">save-settings</span></span></h2></div>
<div class="old-help-para">Mostly you will edit your vimrc files manually.  This gives you the greatest
flexibility.  There are a few commands to generate a vimrc file automatically.
You can use these files as they are, or copy/paste lines to include in another
vimrc file.</div>
<div class="old-help-para">							<a name="%3Amk"></a><code class="help-tag-right">:mk</code> <a name="%3Amkexrc"></a><code class="help-tag">:mkexrc</code>
:mk[exrc] [file]	Write current key mappings and changed options to
			[file] (default ".exrc" in the current directory),
			unless it already exists.</div>
<div class="old-help-para">:mk[exrc]! [file]	Always write current key mappings and changed
			options to [file] (default ".exrc" in the current
			directory).</div>
<div class="old-help-para">						<a name="%3Amkv"></a><code class="help-tag-right">:mkv</code> <a name="%3Amkvi"></a><code class="help-tag">:mkvi</code> <a name="%3Amkvimrc"></a><code class="help-tag">:mkvimrc</code>
:mkv[imrc][!] [file]	Like ":mkexrc", but the default is ".nvimrc" in the
			current directory.  The ":version" command is also
			written to the file.</div>
<div class="old-help-para">These commands will write ":map" and ":set" commands to a file, in such a way
that when these commands are executed, the current key mappings and options
will be set to the same values.  The options <a href="options.html#'columns'">'columns'</a>, <a href="options.html#'endofline'">'endofline'</a>,
<a href="options.html#'fileformat'">'fileformat'</a>, <a href="options.html#'lines'">'lines'</a>, <a href="options.html#'modified'">'modified'</a>, and <a href="options.html#'scroll'">'scroll'</a> are not included, because
these are terminal or file dependent.
Note that the options <a href="options.html#'binary'">'binary'</a>, <a href="options.html#'paste'">'paste'</a> and <a href="options.html#'readonly'">'readonly'</a> are included, this
might not always be what you want.</div>
<div class="old-help-para">When special keys are used in mappings, The <a href="options.html#'cpoptions'">'cpoptions'</a> option will be
temporarily set to its Vim default, to avoid the mappings to be
misinterpreted.  This makes the file incompatible with Vi, but makes sure it
can be used with different terminals.</div>
<div class="old-help-para">Only global mappings are stored, not mappings local to a buffer.</div>
<div class="old-help-para">A common method is to use a default <a href="starting.html#config">config</a> file, make some modifications
with ":map" and ":set" commands and write the modified file.  First read the
default vimrc in with a command like ":source ~piet/.vimrc.Cprogs", change
the settings and then save them in the current directory with ":mkvimrc!".  If
you want to make this file your default <a href="starting.html#config">config</a>, move it to
$XDG_CONFIG_HOME/nvim.  You could also use autocommands <a href="autocmd.html#autocommand">autocommand</a> and/or
modelines <a href="options.html#modeline">modeline</a>.</div>
<div class="old-help-para">						<a name="vimrc-option-example"></a><code class="help-tag-right">vimrc-option-example</code>
If you only want to add a single option setting to your vimrc, you can use
these steps:
1. Edit your vimrc file with Vim.
2. Play with the option until it's right.  E.g., try out different values for
   <a href="options.html#'guifont'">'guifont'</a>.
3. Append a line to set the value of the option, using the expression register
   '=' to enter the value.  E.g., for the <a href="options.html#'guifont'">'guifont'</a> option:<pre>o:set guifont=&lt;C-R&gt;=&amp;guifont&lt;CR&gt;&lt;Esc&gt;</pre></div>
<div class="old-help-para">  [&lt;C-R&gt; is a <code>CTRL-R</code>, <code>&lt;CR&gt;</code> is a return, <code>&lt;Esc&gt;</code> is the escape key]
   You need to escape special characters, esp. spaces.</div>
<div class="old-help-para"><h2 class="help-heading">Views and Sessions<span class="help-heading-tags">					<a name="views-sessions"></a><span class="help-tag">views-sessions</span></span></h2></div>
<div class="old-help-para">This is introduced in sections <a href="usr_21.html#21.4">21.4</a> and <a href="usr_21.html#21.5">21.5</a> of the user manual.</div>
<div class="old-help-para">						<a name="View"></a><code class="help-tag-right">View</code> <a name="view-file"></a><code class="help-tag">view-file</code>
A View is a collection of settings that apply to one window.  You can save a
View and when you restore it later, the text is displayed in the same way.
The options and mappings in this window will also be restored, so that you can
continue editing like when the View was saved.</div>
<div class="old-help-para">						<a name="Session"></a><code class="help-tag-right">Session</code> <a name="session-file"></a><code class="help-tag">session-file</code>
A Session keeps the Views for all windows, plus the global settings.  You can
save a Session and when you restore it later the window layout looks the same.
You can use a Session to quickly switch between different projects,
automatically loading the files you were last working on in that project.</div>
<div class="old-help-para">Views and Sessions are a nice addition to ShaDa files, which are used to
remember information for all Views and Sessions together <a href="starting.html#shada-file">shada-file</a>.</div>
<div class="old-help-para">You can quickly start editing with a previously saved View or Session with the
<a href="starting.html#-S">-S</a> argument:<pre>vim -S Session.vim</pre></div>
<div class="old-help-para">							<a name="%3Amks"></a><code class="help-tag-right">:mks</code> <a name="%3Amksession"></a><code class="help-tag">:mksession</code>
:mks[ession][!] [file]	Write a Vim script that restores the current editing
			session.
			When [!] is included an existing file is overwritten.
			When [file] is omitted "Session.vim" is used.</div>
<div class="old-help-para">The output of ":mksession" is like ":mkvimrc", but additional commands are
added to the file.  Which ones depends on the <a href="options.html#'sessionoptions'">'sessionoptions'</a> option.  The
resulting file, when executed with a ":source" command:
1. Restores global mappings and options, if <a href="options.html#'sessionoptions'">'sessionoptions'</a> contains
   "options".  Script-local mappings will not be written.
2. Restores global variables that start with an uppercase letter and contain
   at least one lowercase letter, if <a href="options.html#'sessionoptions'">'sessionoptions'</a> contains "globals".
3. Closes all windows in the current tab page, except the current one; closes
   all tab pages except the current one (this results in currently loaded
   buffers to be unloaded, some may become hidden if <a href="options.html#'hidden'">'hidden'</a> is set or
   otherwise specified); wipes out the current buffer, if it is empty
   and unnamed.
4. Restores the current directory if <a href="options.html#'sessionoptions'">'sessionoptions'</a> contains "curdir", or
   sets the current directory to where the Session file is if <a href="options.html#'sessionoptions'">'sessionoptions'</a>
   contains "sesdir".
5. Restores GUI Vim window position, if <a href="options.html#'sessionoptions'">'sessionoptions'</a> contains "winpos".
6. Restores screen size, if <a href="options.html#'sessionoptions'">'sessionoptions'</a> contains "resize".
7. Reloads the buffer list, with the last cursor positions.  If
   <a href="options.html#'sessionoptions'">'sessionoptions'</a> contains "buffers" then all buffers are restored,
   including hidden and unloaded buffers.  Otherwise only buffers in windows
   are restored.
8. Restores all windows with the same layout.  If <a href="options.html#'sessionoptions'">'sessionoptions'</a> contains
   "help", help windows are restored.  If <a href="options.html#'sessionoptions'">'sessionoptions'</a> contains "blank",
   windows editing a buffer without a name will be restored.
   If <a href="options.html#'sessionoptions'">'sessionoptions'</a> contains "winsize" and no (help/blank) windows were
   left out, the window sizes are restored (relative to the screen size).
   Otherwise, the windows are just given sensible sizes.
9. Restores the Views for all the windows, as with <a href="starting.html#%3Amkview">:mkview</a>.  But
   <a href="options.html#'sessionoptions'">'sessionoptions'</a> is used instead of <a href="options.html#'viewoptions'">'viewoptions'</a>.
10. If a file exists with the same name as the Session file, but ending in
   "x.vim" (for eXtra), executes that as well.  You can usex.vim files to
   specify additional settings and actions associated with a given Session,
   such as creating menu items in the GUI version.</div>
<div class="old-help-para">After restoring the Session, the full filename of your current Session is
available in the internal variable <a href="eval.html#v%3Athis_session">v:this_session</a>.
An example mapping:<pre>:nmap &lt;F2&gt; :wa&lt;Bar&gt;exe "mksession! " .. v:this_session&lt;CR&gt;:so ~/sessions/</pre>
This saves the current Session, and starts off the command to load another.</div>
<div class="old-help-para">A session includes all tab pages, unless "tabpages" was removed from
<a href="options.html#'sessionoptions'">'sessionoptions'</a>. <a href="tabpage.html#tab-page">tab-page</a></div>
<div class="old-help-para">The <a href="autocmd.html#SessionLoadPost">SessionLoadPost</a> autocmd event is triggered after a session file is
loaded/sourced.
						<a name="SessionLoad-variable"></a><code class="help-tag-right">SessionLoad-variable</code>
While the session file is loading the SessionLoad global variable is set to 1.
Plugins can use this to postpone some work until the SessionLoadPost event is
triggered.</div>
<div class="old-help-para">							<a name="%3Amkvie"></a><code class="help-tag-right">:mkvie</code> <a name="%3Amkview"></a><code class="help-tag">:mkview</code>
:mkvie[w][!] [file]	Write a Vim script that restores the contents of the
			current window.
			When [!] is included an existing file is overwritten.
			When [file] is omitted or is a number from 1 to 9, a
			name is generated and <a href="options.html#'viewdir'">'viewdir'</a> prepended.  When the
			last path part of <a href="options.html#'viewdir'">'viewdir'</a> does not exist, this
			directory is created.  E.g., when <a href="options.html#'viewdir'">'viewdir'</a> is
			"$VIM/vimfiles/view" then "view" is created in
			"$VIM/vimfiles".
			An existing file is always overwritten then.  Use
			<a href="starting.html#%3Aloadview">:loadview</a> to load this view again.
			When [file] is the name of a file (<a href="options.html#'viewdir'">'viewdir'</a> is not
			used), a command to edit the file is added to the
			generated file.</div>
<div class="old-help-para">The output of ":mkview" contains these items:
1. The argument list used in the window.  When the global argument list is
   used it is reset to the global list.
   The index in the argument list is also restored.
2. The file being edited in the window.  If there is no file, the window is
   made empty.
3. Restore mappings, abbreviations and options local to the window if
   <a href="options.html#'viewoptions'">'viewoptions'</a> contains "options" or "localoptions".  For the options it
   restores only values that are local to the current buffer and values local
   to the window.
   When storing the view as part of a session and "options" is in
   <a href="options.html#'sessionoptions'">'sessionoptions'</a>, global values for local options will be stored too.
4. Restore folds when using manual folding and <a href="options.html#'viewoptions'">'viewoptions'</a> contains
   "folds".  Restore manually opened and closed folds.
5. The scroll position and the cursor position in the file.  Doesn't work very
   well when there are closed folds.
6. The local current directory, if it is different from the global current
   directory and <a href="options.html#'viewoptions'">'viewoptions'</a> contains "curdir".</div>
<div class="old-help-para">Note that Views and Sessions are not perfect:
<div class="help-li" style=""> They don't restore everything.  For example, defined functions, autocommands
  and ":syntax on" are not included.  Things like register contents and
  command line history are in ShaDa, not in Sessions or Views.
</div><div class="help-li" style=""> Global option values are only set when they differ from the default value.
  When the current value is not the default value, loading a Session will not
  set it back to the default value.  Local options will be set back to the
  default value though.
</div><div class="help-li" style=""> Existing mappings will be overwritten without warning.  An existing mapping
  may cause an error for ambiguity.
</div><div class="help-li" style=""> When storing manual folds and when storing manually opened/closed folds,
  changes in the file between saving and loading the view will mess it up.
</div><div class="help-li" style=""> The Vim script is not very efficient.  But still faster than typing the
  commands yourself!
</div></div>
<div class="old-help-para">							<a name="%3Alo"></a><code class="help-tag-right">:lo</code> <a name="%3Aloadview"></a><code class="help-tag">:loadview</code>
:lo[adview] [nr]	Load the view for the current file.  When [nr] is
			omitted, the view stored with ":mkview" is loaded.
			When [nr] is specified, the view stored with ":mkview
			[nr]" is loaded.</div>
<div class="old-help-para">The combination of ":mkview" and ":loadview" can be used to store up to ten
different views of a file.  These are remembered in the directory specified
with the <a href="options.html#'viewdir'">'viewdir'</a> option.  The views are stored using the file name.  If a
file is renamed or accessed through a (symbolic) link the view will not be
found.</div>
<div class="old-help-para">You might want to clean up your <a href="options.html#'viewdir'">'viewdir'</a> directory now and then.</div>
<div class="old-help-para">To automatically save and restore views for.c files:<pre>au BufWinLeave *.c mkview
au BufWinEnter *.c silent! loadview</pre>
<h2 class="help-heading">Shada ("shared data") file<span class="help-heading-tags">			<a name="shada"></a><span class="help-tag">shada</span> <a name="shada-file"></a><span class="help-tag">shada-file</span></span></h2></div>
<div class="old-help-para">If you exit Vim and later start it again, you would normally lose a lot of
information.  The ShaDa file can be used to remember that information, which
enables you to continue where you left off.  Its name is the abbreviation of
SHAred DAta because it is used for sharing data between Neovim sessions.</div>
<div class="old-help-para">This is introduced in section <a href="usr_21.html#21.3">21.3</a> of the user manual.</div>
<div class="old-help-para">The ShaDa file is used to store:
<div class="help-li" style=""> The command line history.
</div><div class="help-li" style=""> The search string history.
</div><div class="help-li" style=""> The input-line history.
</div><div class="help-li" style=""> Contents of non-empty registers.
</div><div class="help-li" style=""> Marks for several files.
</div><div class="help-li" style=""> File marks, pointing to locations in files.
</div><div class="help-li" style=""> Last search/substitute pattern (for 'n' and '&amp;').
</div><div class="help-li" style=""> The buffer list.
</div><div class="help-li" style=""> Global variables.
</div></div>
<div class="old-help-para">You could also use a Session file.  The difference is that the ShaDa file
does not depend on what you are working on.  There normally is only one
ShaDa file.  Session files are used to save the state of a specific editing
Session.  You could have several Session files, one for each project you are
working on.  ShaDa and Session files together can be used to effectively
enter Vim and directly start working in your desired setup. <a href="starting.html#session-file">session-file</a></div>
<div class="old-help-para">							<a name="shada-read"></a><code class="help-tag-right">shada-read</code>
When Vim is started and the <a href="options.html#'shada'">'shada'</a> option is non-empty, the contents of
the ShaDa file are read and the info can be used in the appropriate places.
The <a href="eval.html#v%3Aoldfiles">v:oldfiles</a> variable is filled.  The marks are not read in at startup
(but file marks are).  See <a href="starting.html#initialization">initialization</a> for how to set the <a href="options.html#'shada'">'shada'</a>
option upon startup.</div>
<div class="old-help-para">							<a name="shada-write"></a><code class="help-tag-right">shada-write</code>
When Vim exits and <a href="options.html#'shada'">'shada'</a> is non-empty, the info is stored in the ShaDa file
(it's actually merged with the existing one, if one exists <a href="starting.html#shada-merging">shada-merging</a>).
The <a href="options.html#'shada'">'shada'</a> option is a string containing information about what info should
be stored, and contains limits on how much should be stored (see <a href="options.html#'shada'">'shada'</a>).</div>
<div class="old-help-para">Notes for Unix:
<div class="help-li" style=""> The file protection for the ShaDa file will be set to prevent other users
  from being able to read it, because it may contain any text or commands that
  you have worked with.
</div><div class="help-li" style=""> If you want to share the ShaDa file with other users (e.g. when you "su"
  to another user), you can make the file writable for the group or everybody.
  Vim will preserve this when writing new ShaDa files.  Be careful, don't
  allow just anybody to read and write your ShaDa file!
</div><div class="help-li" style=""> Vim will not overwrite a ShaDa file that is not writable by the current
  "real" user.  This helps for when you did "su" to become root, but your
  $HOME is still set to a normal user's home directory.  Otherwise Vim would
  create a ShaDa file owned by root that nobody else can read.
</div><div class="help-li" style=""> The ShaDa file cannot be a symbolic link.  This is to avoid security
  issues.
</div></div>
<div class="old-help-para">Marks are stored for each file separately.  When a file is read and <a href="options.html#'shada'">'shada'</a>
is non-empty, the marks for that file are read from the ShaDa file.  NOTE:
The marks are only written when exiting Vim, which is fine because marks are
remembered for all the files you have opened in the current editing session,
unless ":bdel" is used.  If you want to save the marks for a file that you are
about to abandon with ":bdel", use ":wsh".  The '[' and ']' marks are not
stored, but the '"' mark is.  The '"' mark is very useful for jumping to the
cursor position when the file was last exited.  No marks are saved for files
that start with any string given with the "r" flag in <a href="options.html#'shada'">'shada'</a>.  This can be
used to avoid saving marks for files on removable media (for MS-Windows you
would use "ra:,rb:").
The <a href="eval.html#v%3Aoldfiles">v:oldfiles</a> variable is filled with the file names that the ShaDa file
has marks for.</div>
<div class="old-help-para">							<a name="shada-file-marks"></a><code class="help-tag-right">shada-file-marks</code>
Uppercase marks ('A to 'Z) are stored when writing the ShaDa file.  The
numbered marks ('0 to '9) are a bit special.  When the ShaDa file is written
(when exiting or with the <a href="starting.html#%3Awshada">:wshada</a> command), '0 is set to the current cursor
position and file.  The old '0 is moved to '1, '1 to '2, etc.  This
resembles what happens with the "1 to "9 delete registers.  If the current
cursor position is already present in '0 to '9, it is moved to '0, to avoid
having the same position twice.  The result is that with "'0", you can jump
back to the file and line where you exited Vim.  To do that right away, try
using this command:<pre>vim -c "normal '0"</pre>
In a csh compatible shell you could make an alias for it:<pre>alias lvim vim -c '"'normal "'"0'"'</pre>
For a bash-like shell:<pre>alias lvim='vim -c "normal '\''0"'</pre>
Use the "r" flag in <a href="options.html#'shada'">'shada'</a> to specify for which files no marks should be
remembered.</div>
<div class="old-help-para"><h3 class="help-heading">MERGING<span class="help-heading-tags">							<a name="shada-merging"></a><span class="help-tag">shada-merging</span></span></h3></div>
<div class="old-help-para">When writing ShaDa files with <a href="starting.html#%3Awshada">:wshada</a> without bang or at regular exit
information in the existing ShaDa file is merged with information from current
Neovim instance.  For this purpose ShaDa files store timestamps associated
with ShaDa entries.  Specifically the following is being done:</div>
<div class="old-help-para">1. History lines are merged, ordered by timestamp.  Maximum amount of items in
   ShaDa file is defined by <a href="options.html#'shada'">'shada'</a> option (<a href="options.html#shada-%2F">shada-/</a>, <a href="options.html#shada-%3A">shada-:</a>, <a href="options.html#shada-%40">shada-@</a>,
   etc: one suboption for each character that represents history name
   (<a href="cmdline.html#%3Ahistory">:history</a>)).
2. Local marks and changes for files that were not opened by Neovim are copied
   to new ShaDa file. Marks for files that were opened by Neovim are merged,
   changes to files opened by Neovim are ignored. <a href="options.html#shada-'">shada-'</a>
3. Jump list is merged: jumps are ordered by timestamp, identical jumps
   (identical position AND timestamp) are squashed.
4. Search patterns and substitute strings are not merged: search pattern or
   substitute string which has greatest timestamp will be the only one copied
   to ShaDa file.
5. For each register entity with greatest timestamp is the only saved.
   <a href="options.html#shada-%3C">shada-&lt;</a>
6. All saved variables are saved from current Neovim instance. Additionally
   existing variable values are copied, meaning that the only way to remove
   variable from a ShaDa file is either removing it by hand or disabling
   writing variables completely. <a href="options.html#shada-%21">shada-!</a>
7. For each global mark entity with greatest timestamp is the only saved.
8. Buffer list and header are the only entries which are not merged in any
   fashion: the only header and buffer list present are the ones from the
   Neovim instance which was last writing the file. <a href="options.html#shada-%25">shada-%</a></div>
<div class="old-help-para"><h3 class="help-heading">COMPATIBILITY<span class="help-heading-tags">						<a name="shada-compatibility"></a><span class="help-tag">shada-compatibility</span></span></h3></div>
<div class="old-help-para">ShaDa files are forward and backward compatible.  This means that</div>
<div class="old-help-para">1. Entries which have unknown type (i.e. that hold unidentified data) are
   ignored when reading and blindly copied when writing.
2. Register entries with unknown register name are ignored when reading and
   blindly copied when writing. Limitation: only registers that use name with
   code in interval [1, 255] are supported. <a href="change.html#registers">registers</a>
3. Register entries with unknown register type are ignored when reading and
   merged as usual when writing. <a href="builtin.html#getregtype()">getregtype()</a>
4. Local and global mark entries with unknown mark names are ignored when
   reading. When writing global mark entries are blindly copied and local mark
   entries are also blindly copied, but only if file they are attached to fits
   in the <a href="options.html#shada-'">shada-'</a> limit. Unknown local mark entry's timestamp is also taken
   into account when calculating which files exactly should fit into this
   limit. Limitation: only marks that use name with code in interval [1, 255]
   are supported. <a href="motion.html#mark-motions">mark-motions</a>
5. History entries with unknown history type are ignored when reading and
   blindly copied when writing. Limitation: there can be only up to 256
   history types. <a href="cmdline.html#history">history</a>
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
   reading ShaDa files.</div>
<div class="old-help-para">"Blindly" here means that there will be no attempts to somehow merge them,
even if other entries (with known name/type/etc) are merged. <a href="starting.html#shada-merging">shada-merging</a></div>
<div class="old-help-para"><h3 class="help-heading">SHADA FILE NAME<span class="help-heading-tags">						<a name="shada-file-name"></a><span class="help-tag">shada-file-name</span></span></h3></div>
<div class="old-help-para"><div class="help-li" style=""> Default name of the <a href="starting.html#shada">shada</a> file is:
      Unix:     "$XDG_STATE_HOME/nvim/shada/main.shada"
      Windows:  "$XDG_STATE_HOME/nvim-data/shada/main.shada"
  See also <a href="starting.html#base-directories">base-directories</a>.
</div><div class="help-li" style=""> To choose a different file name you can use:
</div><div class="help-li" style="margin-left: 3rem;"> The "n" flag in the <a href="options.html#'shada'">'shada'</a> option.
</div><div class="help-li" style="margin-left: 3rem;"> The <a href="starting.html#-i">-i</a> startup argument.  "NONE" means no shada file is ever read or
      written.  Also not for the commands below!
</div><div class="help-li" style="margin-left: 3rem;"> The <a href="options.html#'shadafile'">'shadafile'</a> option.  The value from the "-i" argument (if any) is
      stored in the <a href="options.html#'shadafile'">'shadafile'</a> option.
</div><div class="help-li" style=""> For the commands below, another file name can be given, overriding the
  default and the name given with <a href="options.html#'shada'">'shada'</a> or "-i" (unless it's NONE).
</div></div>
<div class="old-help-para"><h3 class="help-heading">MANUALLY READING AND WRITING<span class="help-heading-tags">				<a name="shada-read-write"></a><span class="help-tag">shada-read-write</span></span></h3></div>
<div class="old-help-para">Two commands can be used to read and write the ShaDa file manually.  This
can be used to exchange registers between two running Vim programs: First
type ":wsh" in one and then ":rsh" in the other.  Note that if the register
already contained something, then ":rsh!" would be required.  Also note
however that this means everything will be overwritten with information from
the first Vim, including the command line history, etc.</div>
<div class="old-help-para">The ShaDa file itself can be edited by hand too, although we suggest you
start with an existing one to get the format right.  You need to understand
MessagePack (or, more likely, find software that is able to use it) format to
do this.  This can be useful in order to create a second file, say
"~/.my.shada" which could contain certain settings that you always want when
you first start Neovim.  For example, you can preload registers with
particular data, or put certain commands in the command line history.  A line
in your <a href="starting.html#config">config</a> file like<pre>:rshada! ~/.my.shada</pre>
can be used to load this information.  You could even have different ShaDa
files for different types of files (e.g., C code) and load them based on the
file name, using the ":autocmd" command (see <a href="autocmd.html#%3Aautocmd">:autocmd</a>).  More information on
ShaDa file format is contained in <a href="starting.html#shada-format">shada-format</a> section.</div>
<div class="old-help-para">					  <a name="E136"></a><code class="help-tag-right">E136</code> <a name="E929"></a><code class="help-tag">E929</code> <a name="shada-error-handling"></a><code class="help-tag">shada-error-handling</code>
Some errors make Neovim leave temporary file named <code>{basename}.tmp.X</code> (X is
any free letter from <code>a</code> to <code>z</code>) while normally it will create this file,
write to it and then rename <code>{basename}.tmp.X</code> to <code>{basename}</code>. Such errors
include:</div>
<div class="old-help-para"><div class="help-li" style=""> Errors which make Neovim think that read file is not a ShaDa file at all:
  non-ShaDa files are not overwritten for safety reasons to avoid accidentally
  destroying an unrelated file.  This could happen e.g. when typing "nvim -i
  file" in place of "nvim -R file" (yes, somebody did that at least with Vim).
  Such errors are listed at <a href="starting.html#shada-critical-contents-errors">shada-critical-contents-errors</a>.
</div><div class="help-li" style=""> If writing to the temporary file failed: e.g. because of the insufficient
  space left.
</div><div class="help-li" style=""> If renaming file failed: e.g. because of insufficient permissions.
</div><div class="help-li" style=""> If target ShaDa file has different from the Neovim instance's owners (user
  and group) and changing them failed.  Unix-specific, applies only when
  Neovim was launched from root.
</div></div>
<div class="old-help-para">Do not forget to remove the temporary file or replace the target file with
temporary one after getting one of the above errors or all attempts to create
a ShaDa file may fail with <a href="starting.html#E929">E929</a>.  If you got one of them when using
<a href="starting.html#%3Awshada">:wshada</a> (and not when exiting Neovim: i.e. when you have Neovim session
running) you have additional options:</div>
<div class="old-help-para"><div class="help-li" style=""> First thing which you should consider if you got any error, except failure
  to write to the temporary file: remove existing file and replace it with the
  temporary file.  Do it even if you have running Neovim instance.
</div><div class="help-li" style=""> Fix the permissions and/or file ownership, free some space and attempt to
  write again.  Do not remove the existing file.
</div><div class="help-li" style=""> Use <a href="starting.html#%3Awshada">:wshada</a> with bang.  Does not help in case of permission error.  If
  target file was actually the ShaDa file some information may be lost in this
  case.  To make the matters slightly better use <a href="starting.html#%3Arshada">:rshada</a> prior to writing,
  but this still will loose buffer-local marks and change list entries for any
  file which is not opened in the current Neovim instance.
</div><div class="help-li" style=""> Remove the target file from shell and use <a href="starting.html#%3Awshada">:wshada</a>.  Consequences are not
  different from using <a href="starting.html#%3Awshada">:wshada</a> with bang, but "rm -f" works in some cases
  when you don't have write permissions.
</div></div>
<div class="old-help-para">						    <a name="%3Arsh"></a><code class="help-tag-right">:rsh</code> <a name="%3Arshada"></a><code class="help-tag">:rshada</code> <a name="E886"></a><code class="help-tag">E886</code>
:rsh[ada][!] [file]	Read from ShaDa file [file] (default: see above).
			If [!] is given, then any information that is
			already set (registers, marks, <a href="eval.html#v%3Aoldfiles">v:oldfiles</a>, etc.)
			will be overwritten.</div>
<div class="old-help-para">						    <a name="%3Awsh"></a><code class="help-tag-right">:wsh</code> <a name="%3Awshada"></a><code class="help-tag">:wshada</code> <a name="E137"></a><code class="help-tag">E137</code>
:wsh[ada][!] [file]	Write to ShaDa file [file] (default: see above).
			The information in the file is first read in to make
			a merge between old and new info.  When [!] is used,
			the old information is not read first, only the
			internal info is written (also disables safety checks
			described in <a href="starting.html#shada-error-handling">shada-error-handling</a>).  If <a href="options.html#'shada'">'shada'</a> is
			empty, marks for up to 100 files will be written.
			When you get error "E929: All .tmp.X files exist,
			cannot write ShaDa file!" check that no old temp files
			were left behind (e.g.
			~/.local/state/nvim/shada/main.shada.tmp*).</div>
<div class="old-help-para">			Note: Executing :wshada will reset all <a href="motion.html#'quote">'quote</a> marks.</div>
<div class="old-help-para">						<a name="%3Ao"></a><code class="help-tag-right">:o</code> <a name="%3Aol"></a><code class="help-tag">:ol</code> <a name="%3Aoldfiles"></a><code class="help-tag">:oldfiles</code>
:o[ldfiles]		List the files that have marks stored in the ShaDa
			file.  This list is read on startup and only changes
			afterwards with <code>:rshada!</code>.  Also see <a href="eval.html#v%3Aoldfiles">v:oldfiles</a>.
			The number can be used with <a href="cmdline.html#c_%23%3C">c_#&lt;</a>.
			The output can be filtered with <a href="various.html#%3Afilter">:filter</a>, e.g.:<pre>filter /\.vim/ oldfiles</pre></div>
<div class="old-help-para">			The filtering happens on the file name.</div>
<div class="old-help-para">:bro[wse] o[ldfiles][!]
			List file names as with <a href="starting.html#%3Aoldfiles">:oldfiles</a>, and then prompt
			for a number.  When the number is valid that file from
			the list is edited.
			If you get the <a href="message.html#press-enter">press-enter</a> prompt you can press "q"
			and still get the prompt to enter a file number.
			Use ! to abandon a modified buffer. <a href="editing.html#abandon">abandon</a></div>
<div class="old-help-para"><h3 class="help-heading">SHADA FILE FORMAT<span class="help-heading-tags">						<a name="shada-format"></a><span class="help-tag">shada-format</span></span></h3></div>
<div class="old-help-para">ShaDa files are concats of MessagePack entries.  Each entry is a concat of
exactly four MessagePack objects:</div>
<div class="old-help-para">1. First goes type of the entry.  Object type must be an unsigned integer.
   Object type must not be equal to zero.
2. Second goes entry timestamp.  It must also be an unsigned integer.
3. Third goes the length of the fourth entry.  Unsigned integer as well, used
   for fast skipping without parsing.
4. Fourth is actual entry data.  All currently used ShaDa entries use
   containers to hold data: either map or array.  All string values in those
   containers are either binary (applies to filenames) or UTF-8, yet parser
   needs to expect that invalid bytes may be present in a UTF-8 string.</div>
<div class="old-help-para">   Exact format depends on the entry type:</div>
<div class="old-help-para"><div class="help-column_heading">   Entry type (name)   Entry data</div>   1 (Header)          Map containing data that describes the generator
                       instance that wrote this ShaDa file.  It is ignored
                       when reading ShaDa files.  Contains the following data:
<div class="help-column_heading">                       Key        Data</div>                       generator  Binary, software used to generate ShaDa
                                  file. Is equal to "nvim" when ShaDa file was
                                  written by Neovim.
                       version    Binary, generator version.
                       encoding   Binary, effective <a href="options.html#'encoding'">'encoding'</a> value.
                       max_kbyte  Integer, effective <a href="options.html#shada-s">shada-s</a> limit value.
                       pid        Integer, instance process ID.
                       <code>*</code>          It is allowed to have any number of
                                  additional keys with any data.
   2 (SearchPattern)   Map containing data describing last used search or
                       substitute pattern.  Normally ShaDa file contains two
                       such entries: one with "ss" key set to true (describes
                       substitute pattern, see <a href="change.html#%3Asubstitute">:substitute</a>), and one set to
                       false (describes search pattern, see
                       <a href="pattern.html#search-commands">search-commands</a>). "su" key should be true on one of
                       the entries.  If key value is equal to default then it
                       is normally not present.  Keys:
<div class="help-column_heading">                       Key  Type     Default  Description</div>                       sm   Boolean  true     Effective <a href="options.html#'magic'">'magic'</a> value.
                       sc   Boolean  false    Effective <a href="options.html#'smartcase'">'smartcase'</a> value.
                       sl   Boolean  true     True if search pattern comes
                                              with a line offset.  See
                                              <a href="pattern.html#search-offset">search-offset</a>.
                       se   Boolean  false    True if <a href="pattern.html#search-offset">search-offset</a>
                                              requested to place cursor at
                                              (relative to) the end of the
                                              pattern.
                       so   Integer  0        Offset value. <a href="pattern.html#search-offset">search-offset</a>
                       su   Boolean  false    True if current entry was the
                                              last used search pattern.
                       ss   Boolean  false    True if current entry describes
                                              <a href="change.html#%3Asubstitute">:substitute</a> pattern.
                       sh   Boolean  false    True if <a href="eval.html#v%3Ahlsearch">v:hlsearch</a> is on.
                                              With <a href="options.html#shada-h">shada-h</a> or <a href="options.html#'nohlsearch'">'nohlsearch'</a>
                                              this key is always false.
                       sp   Binary   N/A      Actual pattern.  Required.
                       sb   Boolean  false    True if search direction is
                                              backward.
                       <code>*</code>    any      none     Other keys are allowed for
                                              compatibility reasons, see
                                              <a href="starting.html#shada-compatibility">shada-compatibility</a>.
   3 (SubString)       Array containing last <a href="change.html#%3Asubstitute">:substitute</a> replacement string.
                       Contains single entry: binary, replacement string used.
                       More entries are allowed for compatibility reasons, see
                       <a href="starting.html#shada-compatibility">shada-compatibility</a>.
   4 (HistoryEntry)    Array containing one entry from history.  Should have
                       two or three entries.  First one is history type
                       (unsigned integer), second is history line (binary),
                       third is the separator character (unsigned integer,
                       must be in interval [0, 255]).  Third item is only
                       valid for search history.  Possible history types are
                       listed in <a href="builtin.html#hist-names">hist-names</a>, here are the corresponding
                       numbers: 0 - cmd, 1 - search, 2 - expr, 3 - input,
                       4 - debug.
   5 (Register)        Map describing one register (<a href="change.html#registers">registers</a>).  If key
                       value is equal to default then it is normally not
                       present.  Keys:
<div class="help-column_heading">                       Key  Type             Def   Description</div>                       rt   UInteger         0     Register type:
<div class="help-column_heading">                                                   No  Description</div>                                                   0   <a href="change.html#charwise-register">charwise-register</a>
                                                   1   <a href="change.html#linewise-register">linewise-register</a>
                                                   2   <a href="change.html#blockwise-register">blockwise-register</a>
                       rw   UInteger         0     Register width. Only valid
                                                   for <a href="change.html#blockwise-register">blockwise-register</a>s.
                       rc   Array of binary  N/A   Register contents.  Each
                                                   entry in the array
                                                   represents its own line.
                                                   NUL characters inside the
                                                   line should be represented
                                                   as NL according to
                                                   <a href="pattern.html#NL-used-for-Nul">NL-used-for-Nul</a>.
                       ru   Boolean          false Unnamed register. Whether
                                                   the unnamed register had
                                                   pointed to this register.
                       n    UInteger         N/A   Register name: character
                                                   code in range [1, 255].
                                                   Example: <a href="change.html#quote0">quote0</a> register
                                                   has name 48 (ASCII code for
                                                   zero character).
<div class="help-li" style="">    any              none  Other keys are allowed
                                                   for compatibility reasons,
                                                   see <a href="starting.html#shada-compatibility">shada-compatibility</a>.
   6 (Variable)        Array containing two items: variable name (binary) and
                       variable value (any object).  Values are converted
                       using the same code <a href="builtin.html#msgpackparse()">msgpackparse()</a> uses when reading,
                       <a href="builtin.html#msgpackdump()">msgpackdump()</a> when writing, so there may appear
                       <a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a>s.  If there are more then two
                       entries then the rest are ignored
                       (<a href="starting.html#shada-compatibility">shada-compatibility</a>).
   7 (GlobalMark)
   8 (Jump)
   10 (LocalMark)
   11 (Change)         Map containing some position description:
                       Entry      Position ~
                       GlobaMark  Global mark position. <a href="motion.html#'A">'A</a>
                       LocalMark  Local mark position. <a href="motion.html#'a">'a</a>
                       Jump       One position from the <a href="motion.html#jumplist">jumplist</a>.
                       Change     One position from the <a href="motion.html#changelist">changelist</a>.
</div></div>
<div class="old-help-para">                       Data contained in the map:
<div class="help-column_heading">                       Key  Type      Default  Description</div>                       l    UInteger  1        Position line number.  Must be
                                               greater then zero.
                       c    UInteger  0        Position column number.
                       n    UInteger  34 ('"') Mark name.  Only valid for
                                               GlobalMark and LocalMark
                                               entries.
                       f    Binary    N/A      File name.  Required.
                       <code>*</code>    any       none     Other keys are allowed for
                                               compatibility reasons, see
                                               <a href="starting.html#shada-compatibility">shada-compatibility</a>.
   9 (BufferList)      Array containing maps.  Each map in the array
                       represents one buffer.  Possible keys:
<div class="help-column_heading">                       Key  Type      Default  Description</div>                       l    UInteger  1        Position line number.  Must be
                                               greater then zero.
                       c    UInteger  0        Position column number.
                       f    Binary    N/A      File name.  Required.
                       <code>*</code>    any       none     Other keys are allowed for
                                               compatibility reasons, see
                                               <a href="starting.html#shada-compatibility">shada-compatibility</a>.
   <code>*</code> (Unknown)         Any other entry type is allowed for compatibility
                       reasons, see <a href="starting.html#shada-compatibility">shada-compatibility</a>.</div>
<div class="old-help-para">								<a name="E575"></a><code class="help-tag-right">E575</code> <a name="E576"></a><code class="help-tag">E576</code>
Errors in ShaDa file may have two types: E575 used for all “logical” errors
and E576 used for all “critical” errors.  Critical errors trigger behaviour
described in <a href="starting.html#shada-error-handling">shada-error-handling</a> when writing and skipping the rest of the
file when reading and include:
					    <a name="shada-critical-contents-errors"></a><code class="help-tag-right">shada-critical-contents-errors</code>
<div class="help-li" style=""> Any of first three MessagePack objects being not an unsigned integer.
</div><div class="help-li" style=""> Third object requesting amount of bytes greater then bytes left in the ShaDa
  file.
</div><div class="help-li" style=""> Entry with zero type.  I.e. first object being equal to zero.
</div><div class="help-li" style=""> MessagePack parser failing to parse the entry data.
</div><div class="help-li" style=""> MessagePack parser consuming less or requesting greater bytes then described
  in the third object for parsing fourth object.  I.e. when fourth object
  either contains more then one MessagePack object or it does not contain
  complete MessagePack object.
</div></div>
<div class="old-help-para"><h2 class="help-heading">Standard Paths<span class="help-heading-tags">					<a name="standard-path"></a><span class="help-tag">standard-path</span></span></h2></div>
<div class="old-help-para">Nvim stores configuration, data, and logs in standard locations. Plugins are
strongly encouraged to follow this pattern also. Use <a href="builtin.html#stdpath()">stdpath()</a> to get the
paths.</div>
<div class="old-help-para">						<a name="base-directories"></a><code class="help-tag-right">base-directories</code> <a name="xdg"></a><code class="help-tag">xdg</code>
The "base" (root) directories conform to the XDG Base Directory Specification.
<a href="https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html">https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html</a>
The $XDG_CONFIG_HOME, $XDG_DATA_HOME, $XDG_RUNTIME_DIR, and $XDG_STATE_HOME
environment variables are used if defined, else default values (listed below)
are used.</div>
<div class="old-help-para"><div class="help-column_heading">CONFIG DIRECTORY (DEFAULT)</div>                  <a name="%24XDG_CONFIG_HOME"></a><code class="help-tag-right">$XDG_CONFIG_HOME</code>            Nvim: stdpath("config")
    Unix:         ~/.config                   ~/.config/nvim
    Windows:      ~/AppData/Local             ~/AppData/Local/nvim</div>
<div class="old-help-para"><div class="help-column_heading">DATA DIRECTORY (DEFAULT)</div>                  <a name="%24XDG_DATA_HOME"></a><code class="help-tag-right">$XDG_DATA_HOME</code>              Nvim: stdpath("data")
    Unix:         ~/.local/share              ~/.local/share/nvim
    Windows:      ~/AppData/Local             ~/AppData/Local/nvim-data</div>
<div class="old-help-para"><div class="help-column_heading">RUN DIRECTORY (DEFAULT)</div>                  <a name="%24XDG_RUNTIME_DIR"></a><code class="help-tag-right">$XDG_RUNTIME_DIR</code>            Nvim: stdpath("run")
    Unix:         /tmp/nvim.user/xxx          /tmp/nvim.user/xxx
    Windows:      $TMP/nvim.user/xxx          $TMP/nvim.user/xxx</div>
<div class="old-help-para"><div class="help-column_heading">STATE DIRECTORY (DEFAULT)</div>                  <a name="%24XDG_STATE_HOME"></a><code class="help-tag-right">$XDG_STATE_HOME</code>             Nvim: stdpath("state")
    Unix:         ~/.local/state              ~/.local/state/nvim
    Windows:      ~/AppData/Local             ~/AppData/Local/nvim-data</div>
<div class="old-help-para">Note: Throughout the user manual these defaults are used as placeholders, e.g.
"~/.config" is understood to mean "$XDG_CONFIG_HOME or ~/.config".</div>
<div class="old-help-para"><h3 class="help-heading">LOG FILE<span class="help-heading-tags">					<a name="%24NVIM_LOG_FILE"></a><span class="help-tag">$NVIM_LOG_FILE</span> <a name="E5430"></a><span class="help-tag">E5430</span></span></h3>Besides <a href="options.html#'debug'">'debug'</a> and <a href="options.html#'verbose'">'verbose'</a>, Nvim keeps a general log file for internal
debugging, plugins and RPC clients.<pre>:echo $NVIM_LOG_FILE</pre>
By default, the file is located at stdpath("log")/log unless that path
is inaccessible or if $NVIM_LOG_FILE was set before <a href="starting.html#startup">startup</a>.</div>

  
  