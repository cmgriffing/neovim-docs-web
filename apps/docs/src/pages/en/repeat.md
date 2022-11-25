---
title:  Repeat
layout: ../../layouts/MainLayout.astro
---

  <a name="repeat.txt"></a><a name="repeating"></a><h1> Repeat</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/repeat.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Repeating commands, Vim scripts and debugging</div>
<div class="old-help-para">Chapter 26 of the user manual introduces repeating <a href="usr_26.html#usr_26.txt">usr_26.txt</a>.</div>
<div class="old-help-para"><h2 class="help-heading">Single repeats<span class="help-heading-tags">						<a name="single-repeat"></a><span class="help-tag">single-repeat</span></span></h2></div>
<div class="old-help-para">							<a name="."></a><code class="help-tag-right">.</code>
.			Repeat last change, with count replaced with [count].
			Also repeat a yank command, when the 'y' flag is
			included in <a href="options.html#'cpoptions'">'cpoptions'</a>.  Does not repeat a
			command-line command.</div>
<div class="old-help-para">Simple changes can be repeated with the "." command.  Without a count, the
count of the last change is used.  If you enter a count, it will replace the
last one.  <a href="eval.html#v%3Acount">v:count</a> and <a href="eval.html#v%3Acount1">v:count1</a> will be set.</div>
<div class="old-help-para">If the last change included a specification of a numbered register, the
register number will be incremented.  See <a href="undo.html#redo-register">redo-register</a> for an example how
to use this.</div>
<div class="old-help-para">Note that when repeating a command that used a Visual selection, the same SIZE
of area is used, see <a href="visual.html#visual-repeat">visual-repeat</a>.</div>
<div class="old-help-para">							<a name="%40%3A"></a><code class="help-tag-right">@:</code>
@:			Repeat last command-line [count] times.</div>
<div class="old-help-para"><h2 class="help-heading">Multiple repeats<span class="help-heading-tags">					<a name="multi-repeat"></a><span class="help-tag">multi-repeat</span></span></h2></div>
<div class="old-help-para">						<a name="%3Ag"></a><code class="help-tag-right">:g</code> <a name="%3Aglobal"></a><code class="help-tag">:global</code> <a name="E148"></a><code class="help-tag">E148</code>
:[range]g[lobal]/{pattern}/[cmd]
			Execute the Ex command [cmd] (default ":p") on the
			lines within [range] where <code>{pattern}</code> matches.</div>
<div class="old-help-para">:[range]g[lobal]!/{pattern}/[cmd]
			Execute the Ex command [cmd] (default ":p") on the
			lines within [range] where <code>{pattern}</code> does NOT match.</div>
<div class="old-help-para">							<a name="%3Av"></a><code class="help-tag-right">:v</code> <a name="%3Avglobal"></a><code class="help-tag">:vglobal</code>
:[range]v[global]/{pattern}/[cmd]
			Same as :g!.</div>
<div class="old-help-para">Example:<pre>:g/^Obsolete/d _</pre>
Using the underscore after <code>:d</code> avoids clobbering registers or the clipboard.
This also makes it faster.</div>
<div class="old-help-para">Instead of the '/' which surrounds the <code>{pattern}</code>, you can use any other
single byte character, but not an alphabetic character, '\', '"' or '|'.
This is useful if you want to include a '/' in the search pattern or
replacement string.</div>
<div class="old-help-para">For the definition of a pattern, see <a href="pattern.html#pattern">pattern</a>.</div>
<div class="old-help-para">NOTE [cmd] may contain a range; see <a href="tips.html#collapse">collapse</a> and <a href="usr_25.html#edit-paragraph-join">edit-paragraph-join</a> for
examples.</div>
<div class="old-help-para">The global commands work by first scanning through the [range] lines and
marking each line where a match occurs (for a multi-line pattern, only the
start of the match matters).
In a second scan the [cmd] is executed for each marked line, as if the cursor
was in that line.  For ":v" and ":g!" the command is executed for each not
marked line.  If a line is deleted its mark disappears.
The default for [range] is the whole buffer (1,$).  Use "CTRL-C" to interrupt
the command.  If an error message is given for a line, the command for that
line is aborted and the global command continues with the next marked or
unmarked line.
								<a name="E147"></a><code class="help-tag-right">E147</code>
When the command is used recursively, it only works on one line.  Giving a
range is then not allowed. This is useful to find all lines that match a
pattern and do not match another pattern:<pre>:g/found/v/notfound/{cmd}</pre>
This first finds all lines containing "found", but only executes <code>{cmd}</code> when
there is no match for "notfound".</div>
<div class="old-help-para">Any Ex command can be used, see <a href="vimindex.html#ex-cmd-index">ex-cmd-index</a>.  To execute a Normal mode
command, you can use the <code>:normal</code> command:<pre>:g/pat/normal {commands}</pre>
Make sure that <code>{commands}</code> ends with a whole command, otherwise Vim will wait
for you to type the rest of the command for each match.  The screen will not
have been updated, so you don't know what you are doing.  See <a href="various.html#%3Anormal">:normal</a>.</div>
<div class="old-help-para">The undo/redo command will undo/redo the whole global command at once.
The previous context mark will only be set once (with "''" you go back to
where the cursor was before the global command).</div>
<div class="old-help-para">The global command sets both the last used search pattern and the last used
substitute pattern (this is vi compatible).  This makes it easy to globally
replace a string:
	:g/pat/s//PAT/g
This replaces all occurrences of "pat" with "PAT".  The same can be done with:
	:%s/pat/PAT/g
Which is two characters shorter!</div>
<div class="old-help-para">When using "global" in Ex mode, a special case is using ":visual" as a
command.  This will move to a matching line, go to Normal mode to let you
execute commands there until you use <a href="intro.html#gQ">gQ</a> to return to Ex mode.  This will be
repeated for each matching line.  While doing this you cannot use ":global".
To abort this type <code>CTRL-C</code> twice.</div>
<div class="old-help-para"><h2 class="help-heading">Complex repeats<span class="help-heading-tags">						<a name="complex-repeat"></a><span class="help-tag">complex-repeat</span></span></h2></div>
<div class="old-help-para">							<a name="q"></a><code class="help-tag-right">q</code> <a name="recording"></a><code class="help-tag">recording</code>
q{0-9a-zA-Z"}		Record typed characters into register <code>{0-9a-zA-Z"}</code>
			(uppercase to append).  The 'q' command is disabled
			while executing a register, and it doesn't work inside
			a mapping and <a href="various.html#%3Anormal">:normal</a>.</div>
<div class="old-help-para">			Note: If the register being used for recording is also
			used for <a href="change.html#y">y</a> and <a href="change.html#p">p</a> the result is most likely not
			what is expected, because the put will paste the
			recorded macro and the yank will overwrite the
			recorded macro.</div>
<div class="old-help-para">			Note: The recording happens while you type, replaying
			the register happens as if the keys come from a
			mapping.  This matters, for example, for undo, which
			only syncs when commands were typed.</div>
<div class="old-help-para">q			Stops recording.
			Implementation note: The 'q' that stops recording is
			not stored in the register, unless it was the result
			of a mapping</div>
<div class="old-help-para">							<a name="%40"></a><code class="help-tag-right">@</code>
@{0-9a-z".=*+}		Execute the contents of register <code>{0-9a-z".=*+}</code> [count]
			times.  Note that register '%' (name of the current
			file) and '#' (name of the alternate file) cannot be
			used.
			The register is executed like a mapping, that means
			that the difference between <a href="options.html#'wildchar'">'wildchar'</a> and <a href="options.html#'wildcharm'">'wildcharm'</a>
			applies, and undo might not be synced in the same way.
			For "@=" you are prompted to enter an expression.  The
			result of the expression is then executed.
			See also <a href="repeat.html#%40%3A">@:</a>.</div>
<div class="old-help-para">							<a name="%40%40"></a><code class="help-tag-right">@@</code> <a name="E748"></a><code class="help-tag">E748</code>
@@			Repeat the previous @{0-9a-z":*} [count] times.</div>
<div class="old-help-para">							<a name="Q"></a><code class="help-tag-right">Q</code>
Q			Repeat the last recorded register [count] times.
			See <a href="builtin.html#reg_recorded()">reg_recorded()</a>.</div>
<div class="old-help-para">							<a name="%3A%40"></a><code class="help-tag-right">:@</code>
:[addr]@{0-9a-z".=*+}	Execute the contents of register <code>{0-9a-z".=*+}</code> as an Ex
			command.  First set cursor at line [addr] (default is
			current line).  When the last line in the register does
			not have a <code>&lt;CR&gt;</code> it will be added automatically when
			the 'e' flag is present in <a href="options.html#'cpoptions'">'cpoptions'</a>.
			For ":@=" the last used expression is used.  The
			result of evaluating the expression is executed as an
			Ex command.
			Mappings are not recognized in these commands.
			When the <a href="repeat.html#line-continuation">line-continuation</a> character (\) is present
			at the beginning of a line in a linewise register,
			then it is combined with the previous line. This is
			useful for yanking and executing parts of a Vim
			script.</div>
<div class="old-help-para">							<a name="%3A%40%3A"></a><code class="help-tag-right">:@:</code>
:[addr]@:		Repeat last command-line.  First set cursor at line
			[addr] (default is current line).</div>
<div class="old-help-para">:[addr]@							<a name="%3A%40%40"></a><code class="help-tag-right">:@@</code>
:[addr]@@		Repeat the previous :@{register}.  First set cursor at
			line [addr] (default is current line).</div>
<div class="old-help-para"><h2 class="help-heading">Using Vim scripts<span class="help-heading-tags">					<a name="using-scripts"></a><span class="help-tag">using-scripts</span></span></h2></div>
<div class="old-help-para">For writing a Vim script, see chapter 41 of the user manual <a href="usr_41.html#usr_41.txt">usr_41.txt</a>.</div>
<div class="old-help-para">					<a name="%3Aso"></a><code class="help-tag-right">:so</code> <a name="%3Asource"></a><code class="help-tag">:source</code> <a name="load-vim-script"></a><code class="help-tag">load-vim-script</code>
:[range]so[urce] [file]	Runs <a href="intro.html#Ex">Ex</a> commands or Lua code (".lua" files) from
			[file], or current buffer if no [file].
			Triggers the <a href="autocmd.html#SourcePre">SourcePre</a> autocommand.
							<a name="%3Asource%21"></a><code class="help-tag-right">:source!</code>
:[range]so[urce]! <code>{file}</code>
			Runs <a href="intro.html#Normal-mode">Normal-mode</a> commands from <code>{file}</code>. When used
			after <a href="repeat.html#%3Aglobal">:global</a>, <a href="editing.html#%3Aargdo">:argdo</a>, <a href="windows.html#%3Awindo">:windo</a>, <a href="windows.html#%3Abufdo">:bufdo</a>, in
			a loop or when another command follows the display
			won't be updated while executing the commands.</div>
<div class="old-help-para">							<a name="%3Aru"></a><code class="help-tag-right">:ru</code> <a name="%3Aruntime"></a><code class="help-tag">:runtime</code>
:ru[ntime][!] [where] <code>{file}</code> ..
			Sources <a href="intro.html#Ex">Ex</a> commands or Lua code (".lua" files) read
			from <code>{file}</code> (a relative path) in each directory given
			by <a href="options.html#'runtimepath'">'runtimepath'</a> and/or <a href="options.html#'packpath'">'packpath'</a>.
			Ignores non-existing files.</div>
<div class="old-help-para">			Example:<pre>:runtime syntax/c.vim
:runtime syntax/c.lua</pre></div>
<div class="old-help-para">			There can be multiple space-separated <code>{file}</code>
			arguments. Each <code>{file}</code> is searched for in the first
			directory from <a href="options.html#'runtimepath'">'runtimepath'</a>, then in the second
			directory, etc.</div>
<div class="old-help-para">			When [!] is included, all found files are sourced.
			Else only the first found file is sourced.</div>
<div class="old-help-para">			When [where] is omitted, first <a href="options.html#'runtimepath'">'runtimepath'</a> is
			searched, then directories under "start" in <a href="options.html#'packpath'">'packpath'</a>
			are searched.
			Other values:
				START	search only under "start" in <a href="options.html#'packpath'">'packpath'</a>
				OPT 	search only under "opt" in <a href="options.html#'packpath'">'packpath'</a>
				PACK	search under "start" and "opt" in
					<a href="options.html#'packpath'">'packpath'</a>
				ALL	first use <a href="options.html#'runtimepath'">'runtimepath'</a>, then search
					under "start" and "opt" in <a href="options.html#'packpath'">'packpath'</a></div>
<div class="old-help-para">			When <code>{file}</code> contains wildcards it is expanded to all
			matching files.  Example:<pre>:runtime! plugin/**/*.vim</pre></div>
<div class="old-help-para">			This is what Vim uses to load the plugin files when
			starting up.  This similar command:<pre>:runtime plugin/**/*.vim</pre></div>
<div class="old-help-para">			would source the first file only.</div>
<div class="old-help-para">			When <a href="options.html#'verbose'">'verbose'</a> is one or higher, there is a message
			when no file could be found.
			When <a href="options.html#'verbose'">'verbose'</a> is two or higher, there is a message
			about each searched file.</div>
<div class="old-help-para">							<a name="%3Apa"></a><code class="help-tag-right">:pa</code> <a name="%3Apackadd"></a><code class="help-tag">:packadd</code> <a name="E919"></a><code class="help-tag">E919</code>
:pa[ckadd][!] <code>{name}</code>	Search for an optional plugin directory in <a href="options.html#'packpath'">'packpath'</a>
			and source any plugin files found.  The directory must
			match:
<div class="help-column_heading">				pack/*/opt/{name}</div>			The directory is added to <a href="options.html#'runtimepath'">'runtimepath'</a> if it wasn't
			there yet.
			If the directory pack/*/opt/{name}/after exists it is
			added at the end of <a href="options.html#'runtimepath'">'runtimepath'</a>.</div>
<div class="old-help-para">			If loading packages from "pack/*/start" was skipped,
			then this directory is searched first:
<div class="help-column_heading">				pack/*/start/{name}</div></div>
<div class="old-help-para">			Note that <code>{name}</code> is the directory name, not the name
			of the .vim file.  All the files matching the pattern
<div class="help-column_heading">				pack/*/opt/{name}/plugin/**/*.vim</div>			and
<div class="help-column_heading">				pack/*/opt/{name}/plugin/**/*.lua</div>			will be sourced.  This allows for using subdirectories
			below "plugin", just like with plugins in
			<a href="options.html#'runtimepath'">'runtimepath'</a>.</div>
<div class="old-help-para">			If the filetype detection was already enabled (this
			is usually done with a "syntax enable" or "filetype
			on" command in your <a href="starting.html#init.vim">init.vim</a>, or automatically during
			<a href="starting.html#initialization">initialization</a>), and the package was found in
			"pack/*/opt/{name}", this command will also look
			for "{name}/ftdetect/*.vim" files.</div>
<div class="old-help-para">			When the optional ! is added no plugin files or
			ftdetect scripts are loaded, only the matching
			directories are added to <a href="options.html#'runtimepath'">'runtimepath'</a>.  This is
			useful in your <a href="starting.html#init.vim">init.vim</a>.  The plugins will then be
			loaded during <a href="starting.html#initialization">initialization</a>, see <a href="starting.html#load-plugins">load-plugins</a> (note
			that the loading order will be reversed, because each
			directory is inserted before others). In this case, the
			ftdetect scripts will be loaded during <a href="starting.html#initialization">initialization</a>,
			before the <a href="starting.html#load-plugins">load-plugins</a> step.</div>
<div class="old-help-para">			Also see <a href="repeat.html#pack-add">pack-add</a>.</div>
<div class="old-help-para">						<a name="%3Apackl"></a><code class="help-tag-right">:packl</code> <a name="%3Apackloadall"></a><code class="help-tag">:packloadall</code>
:packl[oadall][!]	Load all packages in the "start" directory under each
			entry in <a href="options.html#'packpath'">'packpath'</a>.</div>
<div class="old-help-para">			First all the directories found are added to
			<a href="options.html#'runtimepath'">'runtimepath'</a>, then the plugins found in the
			directories are sourced.  This allows for a plugin to
			depend on something of another plugin, e.g. an
			"autoload" directory.  See <a href="repeat.html#packload-two-steps">packload-two-steps</a> for
			how this can be useful.</div>
<div class="old-help-para">			This is normally done automatically during startup,
			after loading your <a href="starting.html#vimrc">vimrc</a> file.  With this command it
			can be done earlier.</div>
<div class="old-help-para">			Packages will be loaded only once.  Using
			<code>:packloadall</code> a second time will have no effect.
			When the optional ! is added this command will load
			packages even when done before.</div>
<div class="old-help-para">			Note that when using <code>:packloadall</code> in the <a href="starting.html#vimrc">vimrc</a>
			file, the <a href="options.html#'runtimepath'">'runtimepath'</a> option is updated, and later
			all plugins in <a href="options.html#'runtimepath'">'runtimepath'</a> will be loaded, which
			means they are loaded again.  Plugins are expected to
			handle that.</div>
<div class="old-help-para">			An error only causes sourcing the script where it
			happens to be aborted, further plugins will be loaded.
			See <a href="repeat.html#packages">packages</a>.</div>
<div class="old-help-para">:scripte[ncoding] [encoding]		<a name="%3Ascripte"></a><code class="help-tag-right">:scripte</code> <a name="%3Ascriptencoding"></a><code class="help-tag">:scriptencoding</code> <a name="E167"></a><code class="help-tag">E167</code>
			Specify the character encoding used in the script.
			The following lines will be converted from [encoding]
			to the value of the <a href="options.html#'encoding'">'encoding'</a> option, if they are
			different.  Examples:<pre>scriptencoding iso-8859-5
scriptencoding cp932</pre></div>
<div class="old-help-para">			When [encoding] is empty, no conversion is done.  This
			can be used to restrict conversion to a sequence of
			lines:<pre>scriptencoding euc-jp
... lines to be converted ...
scriptencoding
... not converted ...</pre></div>
<div class="old-help-para">			When conversion isn't supported by the system, there
			is no error message and no conversion is done.  When a
			line can't be converted there is no error and the
			original line is kept.</div>
<div class="old-help-para">			Don't use "ucs-2" or "ucs-4", scripts cannot be in
			these encodings (they would contain NUL bytes).
			When a sourced script starts with a BOM (Byte Order
			Mark) in utf-8 format Vim will recognize it, no need
			to use ":scriptencoding utf-8" then.</div>
<div class="old-help-para">						<a name="%3Ascr"></a><code class="help-tag-right">:scr</code> <a name="%3Ascriptnames"></a><code class="help-tag">:scriptnames</code>
:scr[iptnames]		List all sourced script names, in the order they were
			first sourced.  The number is used for the script ID
			<a href="map.html#%3CSID%3E">&lt;SID&gt;</a>.</div>
<div class="old-help-para">:scr[iptnames][!] <code>{scriptId}</code>			<a name="%3Ascript"></a><code class="help-tag-right">:script</code>
			Edit script <code>{scriptId}</code>.  Although ":scriptnames name"
			works, using ":script name" is recommended.
			When the current buffer can't be <a href="editing.html#abandon">abandon</a>ed and the !
			is not present, the command fails.</div>
<div class="old-help-para">						<a name="%3Afini"></a><code class="help-tag-right">:fini</code> <a name="%3Afinish"></a><code class="help-tag">:finish</code> <a name="E168"></a><code class="help-tag">E168</code>
:fini[sh]		Stop sourcing a script.  Can only be used in a Vim
			script file.  This is a quick way to skip the rest of
			the file.  If it is used after a <a href="eval.html#%3Atry">:try</a> but before the
			matching <a href="eval.html#%3Afinally">:finally</a> (if present), the commands
			following the ":finally" up to the matching <a href="eval.html#%3Aendtry">:endtry</a>
			are executed first.  This process applies to all
			nested ":try"s in the script.  The outermost ":endtry"
			then stops sourcing the script.</div>
<div class="old-help-para">All commands and command sequences can be repeated by putting them in a named
register and then executing it.  There are two ways to get the commands in the
register:
<div class="help-li" style=""> Use the record command "q".  You type the commands once, and while they are
  being executed they are stored in a register.  Easy, because you can see
  what you are doing.  If you make a mistake, "p"ut the register into the
  file, edit the command sequence, and then delete it into the register
  again.  You can continue recording by appending to the register (use an
  uppercase letter).
</div><div class="help-li" style=""> Delete or yank the command sequence into the register.
</div></div>
<div class="old-help-para">Often used command sequences can be put under a function key with the ':map'
command.</div>
<div class="old-help-para">An alternative is to put the commands in a file, and execute them with the
':source!' command.  Useful for long command sequences.  Can be combined with
the ':map' command to put complicated commands under a function key.</div>
<div class="old-help-para">The ':source' command reads Ex commands from a file line by line.  You will
have to type any needed keyboard input.  The ':source!' command reads from a
script file character by character, interpreting each character as if you
typed it.</div>
<div class="old-help-para">Example: When you give the ":!ls" command you get the <a href="message.html#hit-enter">hit-enter</a> prompt.  If
you ':source' a file with the line "!ls" in it, you will have to type the
<code>&lt;Enter&gt;</code> yourself.  But if you ':source!' a file with the line ":!ls" in it,
the next characters from that file are read until a <code>&lt;CR&gt;</code> is found.  You will
not have to type <code>&lt;CR&gt;</code> yourself, unless ":!ls" was the last line in the file.</div>
<div class="old-help-para">It is possible to put ':source[!]' commands in the script file, so you can
make a top-down hierarchy of script files.  The ':source' command can be
nested as deep as the number of files that can be opened at one time (about
15).  The ':source!' command can be nested up to 15 levels deep.</div>
<div class="old-help-para">You can use the "&lt;sfile&gt;" string (literally, this is not a special key) inside
of the sourced file, in places where a file name is expected.  It will be
replaced by the file name of the sourced file.  For example, if you have a
"other.vimrc" file in the same directory as your <a href="starting.html#init.vim">init.vim</a> file, you can
source it from your <a href="starting.html#init.vim">init.vim</a> file with this command:<pre>:source &lt;sfile&gt;:h/other.vimrc</pre>
In script files terminal-dependent key codes are represented by
terminal-independent two character codes.  This means that they can be used
in the same way on different kinds of terminals.  The first character of a
key code is 0x80 or 128, shown on the screen as "~@".  The second one can be
found in the list <a href="intro.html#key-notation">key-notation</a>.  Any of these codes can also be entered
with <code>CTRL-V</code> followed by the three digit decimal code.</div>
<div class="old-help-para">							<a name="%3Asource_crnl"></a><code class="help-tag-right">:source_crnl</code> <a name="W15"></a><code class="help-tag">W15</code>
Windows: Files that are read with ":source" normally have <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> <code>&lt;EOL&gt;</code>s.
These always work.  If you are using a file with <code>&lt;NL&gt;</code> <code>&lt;EOL&gt;</code>s (for example, a
file made on Unix), this will be recognized if <a href="options.html#'fileformats'">'fileformats'</a> is not empty and
the first line does not end in a <code>&lt;CR&gt;</code>.  This fails if the first line has
something like ":map <code>&lt;F1&gt;</code> :help^M", where "^M" is a <code>&lt;CR&gt;</code>.  If the first line
ends in a <code>&lt;CR&gt;</code>, but following ones don't, you will get an error message,
because the <code>&lt;CR&gt;</code> from the first lines will be lost.</div>
<div class="old-help-para">On other systems, Vim expects ":source"ed files to end in a <code>&lt;NL&gt;</code>.  These
always work.  If you are using a file with <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> <code>&lt;EOL&gt;</code>s (for example, a
file made on MS-Windows), all lines will have a trailing <code>&lt;CR&gt;</code>.  This may cause
problems for some commands (e.g., mappings).  There is no automatic <code>&lt;EOL&gt;</code>
detection, because it's common to start with a line that defines a mapping
that ends in a <code>&lt;CR&gt;</code>, which will confuse the automaton.</div>
<div class="old-help-para">							<a name="line-continuation"></a><code class="help-tag-right">line-continuation</code>
Long lines in a ":source"d Ex command script file can be split by inserting
a line continuation symbol "\" (backslash) at the start of the next line.
There can be white space before the backslash, which is ignored.</div>
<div class="old-help-para">Example: the lines<pre>:set comments=sr:/*,mb:*,el:*/,
             \://,
             \b:#,
             \:%,
             \n:&gt;,
             \fb:-</pre>
are interpreted as if they were given in one line:
	:set comments=sr:/*,mb:*,el:*/,://,b:#,:%,n:&gt;,fb:-</div>
<div class="old-help-para">All leading whitespace characters in the line before a backslash are ignored.
Note however that trailing whitespace in the line before it cannot be
inserted freely; it depends on the position where a command is split up
whether additional whitespace is allowed or not.</div>
<div class="old-help-para">When a space is required it's best to put it right after the backslash.  A
space at the end of a line is hard to see and may be accidentally deleted.<pre>:syn match Comment
        \ "very long regexp"
        \ keepend</pre>
There is a problem with the ":append" and ":insert" commands:<pre>:1append
\asdf
.</pre>
The backslash is seen as a line-continuation symbol, thus this results in the
command:<pre>:1appendasdf
.</pre>
To avoid this, add the 'C' flag to the <a href="options.html#'cpoptions'">'cpoptions'</a> option:<pre>:set cpo+=C
:1append
\asdf
.
:set cpo-=C</pre>
Note that when the commands are inside a function, you need to add the 'C'
flag when defining the function, it is not relevant when executing it.<pre>:set cpo+=C
:function Foo()
:1append
\asdf
.
:endfunction
:set cpo-=C</pre></div>
<div class="old-help-para">					<a name="line-continuation-comment"></a><code class="help-tag-right">line-continuation-comment</code>
To add a comment in between the lines start with <code>'"\ '</code>.  Notice the space
after the backslash.  Example:<pre>let array = [
        "\ first entry comment
        \ 'first',
        "\ second entry comment
        \ 'second',
        \ ]</pre>
Rationale:
	Most programs work with a trailing backslash to indicate line
	continuation.  Using this in Vim would cause incompatibility with Vi.
	For example for this Vi mapping:<pre>:map xx  asdf\</pre></div>
<div class="old-help-para">	Therefore the unusual leading backslash is used.</div>
<div class="old-help-para">	Starting a comment in a continuation line results in all following
	continuation lines to be part of the comment.  Since it was like this
	for a long time, when making it possible to add a comment halfway a
	sequence of continuation lines, it was not possible to use \", since
	that was a valid continuation line.  Using <code>'"\ '</code> comes closest, even
	though it may look a bit weird.  Requiring the space after the
	backslash is to make it very unlikely this is a normal comment line.</div>
<div class="old-help-para"><h2 class="help-heading">Using Vim packages<span class="help-heading-tags">					<a name="packages"></a><span class="help-tag">packages</span></span></h2></div>
<div class="old-help-para">A Vim "package" is a directory that contains <a href="usr_05.html#plugin">plugin</a>s.  Compared to normal
plugins, a package can...
<div class="help-li" style=""> be downloaded as an archive and unpacked in its own directory, so the files
  are not mixed with files of other plugins.
</div><div class="help-li" style=""> be a git, mercurial, etc. repository, thus easy to update.
</div><div class="help-li" style=""> contain multiple plugins that depend on each other.
</div><div class="help-li" style=""> contain plugins that are automatically loaded on startup ("start" packages,
  located in "pack/*/start/*") and ones that are only loaded when needed with
  <a href="repeat.html#%3Apackadd">:packadd</a> ("opt" packages, located in "pack/*/opt/*").
</div></div>
<div class="old-help-para">							<a name="runtime-search-path"></a><code class="help-tag-right">runtime-search-path</code>
Nvim searches for <a href="repeat.html#%3Aruntime">:runtime</a> files in:
	1. all paths in <a href="options.html#'runtimepath'">'runtimepath'</a>
	2. all "pack/*/start/*" dirs</div>
<div class="old-help-para">Note that the "pack/*/start/*" paths are not explicitly included in
<a href="options.html#'runtimepath'">'runtimepath'</a>, so they will not be reported by ":set rtp" or "echo &amp;rtp".
Scripts can use <a href="api.html#nvim_list_runtime_paths()">nvim_list_runtime_paths()</a> to list all used directories, and
<a href="api.html#nvim_get_runtime_file()">nvim_get_runtime_file()</a> to query for specific files or sub-folders within
the runtime path. Example:<pre>" List all runtime dirs and packages with Lua paths.
:echo nvim_get_runtime_file("lua/", v:true)</pre>
<div class="help-column_heading">Using a package and loading automatically</div></div>
<div class="old-help-para">Let's assume your Nvim files are in "~/.local/share/nvim/site" and you want to
add a package from a zip archive "/tmp/foopack.zip":
	% mkdir -p ~/.local/share/nvim/site/pack/foo
	% cd ~/.local/share/nvim/site/pack/foo
	% unzip /tmp/foopack.zip</div>
<div class="old-help-para">The directory name "foo" is arbitrary, you can pick anything you like.</div>
<div class="old-help-para">You would now have these files under ~/.local/share/nvim/site:
	pack/foo/README.txt
	pack/foo/start/foobar/plugin/foo.vim
	pack/foo/start/foobar/syntax/some.vim
	pack/foo/opt/foodebug/plugin/debugger.vim</div>
<div class="old-help-para">On startup after processing your <a href="starting.html#config">config</a>, Nvim scans all directories in
<a href="options.html#'packpath'">'packpath'</a> for plugins in "pack/*/start/*", then loads the plugins.</div>
<div class="old-help-para">To allow for calling into package functionality while parsing your <a href="starting.html#vimrc">vimrc</a>,
<a href="syntax.html#%3Acolorscheme">:colorscheme</a> and <a href="userfunc.html#autoload">autoload</a> will both automatically search under <a href="options.html#'packpath'">'packpath'</a>
as well in addition to <a href="options.html#'runtimepath'">'runtimepath'</a>.  See the documentation for each for
details.</div>
<div class="old-help-para">In the example Nvim will find "pack/foo/start/foobar/plugin/foo.vim" and load
it.</div>
<div class="old-help-para">If the "foobar" plugin kicks in and sets the <a href="options.html#'filetype'">'filetype'</a> to "some", Nvim will
find the syntax/some.vim file, because its directory is in the runtime search
path.</div>
<div class="old-help-para">Nvim will also load ftdetect files, if there are any.</div>
<div class="old-help-para">Note that the files under "pack/foo/opt" are not loaded automatically, only the
ones under "pack/foo/start".  See <a href="repeat.html#pack-add">pack-add</a> below for how the "opt" directory
is used.</div>
<div class="old-help-para">Loading packages automatically will not happen if loading plugins is disabled,
see <a href="starting.html#load-plugins">load-plugins</a>.</div>
<div class="old-help-para">To load packages earlier, so that plugin/ files are sourced:
	:packloadall
This also works when loading plugins is disabled.  The automatic loading will
only happen once.</div>
<div class="old-help-para">If the package has an "after" directory, that directory is added to the end of
<a href="options.html#'runtimepath'">'runtimepath'</a>, so that anything there will be loaded later.</div>
<div class="old-help-para"><div class="help-column_heading">Using a single plugin and loading it automatically</div></div>
<div class="old-help-para">If you don't have a package but a single plugin, you need to create the extra
directory level:
	% mkdir -p ~/.local/share/nvim/site/pack/foo/start/foobar
	% cd ~/.local/share/nvim/site/pack/foo/start/foobar
	% unzip /tmp/someplugin.zip</div>
<div class="old-help-para">You would now have these files:
	pack/foo/start/foobar/plugin/foo.vim
	pack/foo/start/foobar/syntax/some.vim</div>
<div class="old-help-para">From here it works like above.</div>
<div class="old-help-para"><div class="help-column_heading">Optional plugins</div>							<a name="pack-add"></a><code class="help-tag-right">pack-add</code>
To load an optional plugin from a pack use the <code>:packadd</code> command:<pre>:packadd foodebug</pre>
This searches for "pack/*/opt/foodebug" in <a href="options.html#'packpath'">'packpath'</a> and will find
~/.local/share/nvim/site/pack/foo/opt/foodebug/plugin/debugger.vim and source
it.</div>
<div class="old-help-para">This could be done if some conditions are met.  For example, depending on
whether Nvim supports a feature or a dependency is missing.</div>
<div class="old-help-para">You can also load an optional plugin at startup, by putting this command in
your <a href="starting.html#config">config</a>:<pre>:packadd! foodebug</pre>
The extra "!" is so that the plugin isn't loaded if Nvim was started with
<a href="starting.html#--noplugin">--noplugin</a>.</div>
<div class="old-help-para">It is perfectly normal for a package to only have files in the "opt"
directory.  You then need to load each plugin when you want to use it.</div>
<div class="old-help-para"><div class="help-column_heading">Where to put what</div></div>
<div class="old-help-para">Since color schemes, loaded with <code>:colorscheme</code>, are found below
"pack/*/start" and "pack/*/opt", you could put them anywhere.  We recommend
you put them below "pack/*/opt", for example
"~/.config/nvim/pack/mycolors/opt/dark/colors/very_dark.vim".</div>
<div class="old-help-para">Filetype plugins should go under "pack/*/start", so that they are always
found.  Unless you have more than one plugin for a file type and want to
select which one to load with <code>:packadd</code>.  E.g. depending on the compiler
version:<pre>if foo_compiler_version &gt; 34
  packadd foo_new
else
  packadd foo_old
endif</pre>
The "after" directory is most likely not useful in a package.  It's not
disallowed though.</div>
<div class="old-help-para"><h2 class="help-heading">Creating Vim packages<span class="help-heading-tags">					<a name="package-create"></a><span class="help-tag">package-create</span></span></h2></div>
<div class="old-help-para">This assumes you write one or more plugins that you distribute as a package.</div>
<div class="old-help-para">If you have two unrelated plugins you would use two packages, so that Vim
users can choose what they include or not.  Or you can decide to use one
package with optional plugins, and tell the user to add the preferred ones with
<code>:packadd</code>.</div>
<div class="old-help-para">Decide how you want to distribute the package.  You can create an archive or
you could use a repository.  An archive can be used by more users, but is a
bit harder to update to a new version.  A repository can usually be kept
up-to-date easily, but it requires a program like "git" to be available.
You can do both, github can automatically create an archive for a release.</div>
<div class="old-help-para">Your directory layout would be like this:
   start/foobar/plugin/foo.vim    	" always loaded, defines commands
   start/foobar/plugin/bar.vim    	" always loaded, defines commands
   start/foobar/autoload/foo.vim  	" loaded when foo command used
   start/foobar/doc/foo.txt       	" help for foo.vim
   start/foobar/doc/tags          	" help tags
   opt/fooextra/plugin/extra.vim  	" optional plugin, defines commands
   opt/fooextra/autoload/extra.vim  	" loaded when extra command used
   opt/fooextra/doc/extra.txt  	        " help for extra.vim
   opt/fooextra/doc/tags  	        " help tags</div>
<div class="old-help-para">This allows for the user to do:<pre>mkdir ~/.local/share/nvim/site/pack
cd ~/.local/share/nvim/site/pack
git clone https://github.com/you/foobar.git myfoobar</pre>
Here "myfoobar" is a name that the user can choose, the only condition is that
it differs from other packages.</div>
<div class="old-help-para">In your documentation you explain what the plugins do, and tell the user how
to load the optional plugin:<pre>:packadd! fooextra</pre>
You could add this packadd command in one of your plugins, to be executed when
the optional plugin is needed.</div>
<div class="old-help-para">Run the <code>:helptags</code> command to generate the doc/tags file.  Including this
generated file in the package means that the user can drop the package in the
pack directory and the help command works right away.  Don't forget to re-run
the command after changing the plugin help:<pre>:helptags path/start/foobar/doc
:helptags path/opt/fooextra/doc</pre>
<div class="help-column_heading">Dependencies between plugins</div>							<a name="packload-two-steps"></a><code class="help-tag-right">packload-two-steps</code>
Suppose you have two plugins that depend on the same functionality. You can
put the common functionality in an autoload directory, so that it will be
found automatically.  Your package would have these files:</div>
<div class="old-help-para">	pack/foo/start/one/plugin/one.vim<pre>call foolib#getit()</pre></div>
<div class="old-help-para">	pack/foo/start/two/plugin/two.vim<pre>call foolib#getit()</pre></div>
<div class="old-help-para">	pack/foo/start/lib/autoload/foolib.vim<pre>func foolib#getit()</pre>
This works, because start packages will be searched for autoload files, when
sourcing the plugins.</div>
<div class="old-help-para"><h2 class="help-heading">Debugging scripts<span class="help-heading-tags">					<a name="debug-scripts"></a><span class="help-tag">debug-scripts</span></span></h2></div>
<div class="old-help-para">Besides the obvious messages that you can add to your scripts to find out what
they are doing, Vim offers a debug mode.  This allows you to step through a
sourced file or user function and set breakpoints.</div>
<div class="old-help-para">NOTE: The debugging mode is far from perfect.  Debugging will have side
effects on how Vim works.  You cannot use it to debug everything.  For
example, the display is messed up by the debugging messages.</div>
<div class="old-help-para">An alternative to debug mode is setting the <a href="options.html#'verbose'">'verbose'</a> option.  With a bigger
number it will give more verbose messages about what Vim is doing.</div>
<div class="old-help-para"><h3 class="help-heading">STARTING DEBUG MODE<span class="help-heading-tags">						<a name="debug-mode"></a><span class="help-tag">debug-mode</span></span></h3></div>
<div class="old-help-para">To enter debugging mode use one of these methods:
1. Start Vim with the <a href="starting.html#-D">-D</a> argument:<pre>vim -D file.txt</pre></div>
<div class="old-help-para">  Debugging will start as soon as the first vimrc file is sourced.  This is
   useful to find out what is happening when Vim is starting up.  A side
   effect is that Vim will switch the terminal mode before initialisations
   have finished, with unpredictable results.
   For a GUI-only version (Windows) the debugging will start as
   soon as the GUI window has been opened.  To make this happen early, add a
   ":gui" command in the vimrc file.
								<a name="%3Adebug"></a><code class="help-tag-right">:debug</code>
2. Run a command with ":debug" prepended.  Debugging will only be done while
   this command executes.  Useful for debugging a specific script or user
   function.  And for scripts and functions used by autocommands.  Example:<pre>:debug edit test.txt.gz</pre>
3. Set a breakpoint in a sourced file or user function.  You could do this in
   the command line:<pre>vim -c "breakadd file */explorer.vim" .</pre></div>
<div class="old-help-para">  This will run Vim and stop in the first line of the "explorer.vim" script.
   Breakpoints can also be set while in debugging mode.</div>
<div class="old-help-para">In debugging mode every executed command is displayed before it is executed.
Comment lines, empty lines and lines that are not executed are skipped.  When
a line contains two commands, separated by "|", each command will be displayed
separately.</div>
<div class="old-help-para"><a name="_debug-mode"></a><h3 class="help-heading">DEBUG MODE</h3></div>
<div class="old-help-para">Once in debugging mode, the usual Ex commands can be used.  For example, to
inspect the value of a variable:<pre>echo idx</pre>
When inside a user function, this will print the value of the local variable
"idx".  Prepend "g:" to get the value of a global variable:<pre>echo g:idx</pre>
All commands are executed in the context of the current function or script.
You can also set options, for example setting or resetting <a href="options.html#'verbose'">'verbose'</a> will show
what happens, but you might want to set it just before executing the lines you
are interested in:<pre>:set verbose=20</pre>
Commands that require updating the screen should be avoided, because their
effect won't be noticed until after leaving debug mode.  For example:<pre>:help</pre>
won't be very helpful.</div>
<div class="old-help-para">There is a separate command-line history for debug mode.</div>
<div class="old-help-para">The line number for a function line is relative to the start of the function.
If you have trouble figuring out where you are, edit the file that defines
the function in another Vim, search for the start of the function and do
"99j".  Replace "99" with the line number.</div>
<div class="old-help-para">Additionally, these commands can be used:
							<a name="%3Econt"></a><code class="help-tag-right">&gt;cont</code>
	cont		Continue execution until the next breakpoint is hit.
							<a name="%3Equit"></a><code class="help-tag-right">&gt;quit</code>
	quit		Abort execution.  This is like using <code>CTRL-C</code>, some
			things might still be executed, doesn't abort
			everything.  Still stops at the next breakpoint.
							<a name="%3Enext"></a><code class="help-tag-right">&gt;next</code>
	next		Execute the command and come back to debug mode when
			it's finished.  This steps over user function calls
			and sourced files.
							<a name="%3Estep"></a><code class="help-tag-right">&gt;step</code>
	step		Execute the command and come back to debug mode for
			the next command.  This steps into called user
			functions and sourced files.
							<a name="%3Einterrupt"></a><code class="help-tag-right">&gt;interrupt</code>
	interrupt	This is like using <code>CTRL-C</code>, but unlike "&gt;quit" comes
			back to debug mode for the next command that is
			executed.  Useful for testing <a href="eval.html#%3Afinally">:finally</a> and <a href="eval.html#%3Acatch">:catch</a>
			on interrupt exceptions.
							<a name="%3Efinish"></a><code class="help-tag-right">&gt;finish</code>
	finish		Finish the current script or user function and come
			back to debug mode for the command after the one that
			sourced or called it.
							<a name="%3Ebt"></a><code class="help-tag-right">&gt;bt</code>
							<a name="%3Ebacktrace"></a><code class="help-tag-right">&gt;backtrace</code>
							<a name="%3Ewhere"></a><code class="help-tag-right">&gt;where</code>
	backtrace	Show the call stacktrace for current debugging session.
	bt
	where
							<a name="%3Eframe"></a><code class="help-tag-right">&gt;frame</code>
	frame N		Goes to N backtrace level. + and - signs make movement
			relative.  E.g., ":frame +3" goes three frames up.
							<a name="%3Eup"></a><code class="help-tag-right">&gt;up</code>
	up		Goes one level up from call stacktrace.
							<a name="%3Edown"></a><code class="help-tag-right">&gt;down</code>
	down		Goes one level down from call stacktrace.</div>
<div class="old-help-para">About the additional commands in debug mode:
<div class="help-li" style=""> There is no command-line completion for them, you get the completion for the
  normal Ex commands only.
</div><div class="help-li" style=""> You can shorten them, up to a single character, unless more than one command
  starts with the same letter.  "f" stands for "finish", use "fr" for "frame".
</div><div class="help-li" style=""> Hitting <code>&lt;CR&gt;</code> will repeat the previous one.  When doing another command, this
  is reset (because it's not clear what you want to repeat).
</div><div class="help-li" style=""> When you want to use the Ex command with the same name, prepend a colon:
  ":cont", ":next", ":finish" (or shorter).
</div></div>
<div class="old-help-para">The backtrace shows the hierarchy of function calls, e.g.:
<div class="help-column_heading">	&gt;bt</div><div class="help-column_heading">	  3 function One[3]</div><div class="help-column_heading">	  2 Two[3]</div><div class="help-column_heading">	-&gt;1 Three[3]</div><div class="help-column_heading">	  0 Four</div><div class="help-column_heading">	line 1: let four = 4</div></div>
<div class="old-help-para">The "-&gt;" points to the current frame.  Use "up", "down" and "frame N" to
select another frame.</div>
<div class="old-help-para">In the current frame you can evaluate the local function variables.  There is
no way to see the command at the current line yet.</div>
<div class="old-help-para"><a name="_defining-breakpoints"></a><h3 class="help-heading">DEFINING BREAKPOINTS</h3>							<a name="%3Abreaka"></a><code class="help-tag-right">:breaka</code> <a name="%3Abreakadd"></a><code class="help-tag">:breakadd</code>
:breaka[dd] func [lnum] <code>{name}</code>
		Set a breakpoint in a function.  Example:<pre>:breakadd func Explore</pre></div>
<div class="old-help-para">		Doesn't check for a valid function name, thus the breakpoint
		can be set before the function is defined.</div>
<div class="old-help-para">:breaka[dd] file [lnum] <code>{name}</code>
		Set a breakpoint in a sourced file.  Example:<pre>:breakadd file 43 init.vim</pre>
:breaka[dd] here
		Set a breakpoint in the current line of the current file.
		Like doing:<pre>:breakadd file &lt;cursor-line&gt; &lt;current-file&gt;</pre></div>
<div class="old-help-para">		Note that this only works for commands that are executed when
		sourcing the file, not for a function defined in that file.</div>
<div class="old-help-para">:breaka[dd] expr <code>{expression}</code>
		Sets a breakpoint, that will break whenever the <code>{expression}</code>
		evaluates to a different value. Example:<pre>:breakadd expr g:lnum</pre></div>
<div class="old-help-para">		Will break, whenever the global variable lnum changes.</div>
<div class="old-help-para">		Errors in evaluation are suppressed, you can use the name of a
		variable that does not exist yet.  This also means you will
		not notice anything if the expression has a mistake.</div>
<div class="old-help-para">		Note if you watch a <a href="eval.html#script-variable">script-variable</a> this will break
		when switching scripts, since the script variable is only
		valid in the script where it has been defined and if that
		script is called from several other scripts, this will stop
		whenever that particular variable will become visible or
		inaccessible again.</div>
<div class="old-help-para">The [lnum] is the line number of the breakpoint.  Vim will stop at or after
this line.  When omitted line 1 is used.</div>
<div class="old-help-para">							<a name="%3Adebug-name"></a><code class="help-tag-right">:debug-name</code>
<code>{name}</code> is a pattern that is matched with the file or function name.  The
pattern is like what is used for autocommands.  There must be a full match (as
if the pattern starts with "^" and ends in "$").  A "*" matches any sequence
of characters.  <a href="options.html#'ignorecase'">'ignorecase'</a> is not used, but "\c" can be used in the pattern
to ignore case <a href="pattern.html#%2F%5Cc">/\c</a>.  Don't include the () for the function name!</div>
<div class="old-help-para">The match for sourced scripts is done against the full file name.  If no path
is specified the current directory is used.  Examples:<pre>breakadd file explorer.vim</pre>
matches "explorer.vim" in the current directory.<pre>breakadd file *explorer.vim</pre>
matches ".../plugin/explorer.vim", ".../plugin/iexplorer.vim", etc.<pre>breakadd file */explorer.vim</pre>
matches ".../plugin/explorer.vim" and "explorer.vim" in any other directory.</div>
<div class="old-help-para">The match for functions is done against the name as it's shown in the output
of ":function".  For local functions this means that something like "&lt;SNR&gt;99_"
is prepended.</div>
<div class="old-help-para">Note that functions are first loaded and later executed.  When they are loaded
the "file" breakpoints are checked, when they are executed the "func"
breakpoints.</div>
<div class="old-help-para"><a name="_deleting-breakpoints"></a><h3 class="help-heading">DELETING BREAKPOINTS</h3>						<a name="%3Abreakd"></a><code class="help-tag-right">:breakd</code> <a name="%3Abreakdel"></a><code class="help-tag">:breakdel</code> <a name="E161"></a><code class="help-tag">E161</code>
:breakd[el] <code>{nr}</code>
		Delete breakpoint <code>{nr}</code>.  Use <a href="repeat.html#%3Abreaklist">:breaklist</a> to see the number of
		each breakpoint.</div>
<div class="old-help-para">:breakd[el] *		Delete all breakpoints.</div>
<div class="old-help-para">:breakd[el] func [lnum] <code>{name}</code>
		Delete a breakpoint in a function.</div>
<div class="old-help-para">:breakd[el] file [lnum] <code>{name}</code>
		Delete a breakpoint in a sourced file.</div>
<div class="old-help-para">:breakd[el] here
		Delete a breakpoint at the current line of the current file.</div>
<div class="old-help-para">When [lnum] is omitted, the first breakpoint in the function or file is
deleted.
The <code>{name}</code> must be exactly the same as what was typed for the ":breakadd"
command.  "explorer", "*explorer.vim" and "*explorer*" are different.</div>
<div class="old-help-para"><a name="_listing-breakpoints"></a><h3 class="help-heading">LISTING BREAKPOINTS</h3>							<a name="%3Abreakl"></a><code class="help-tag-right">:breakl</code> <a name="%3Abreaklist"></a><code class="help-tag">:breaklist</code>
:breakl[ist]
		List all breakpoints.</div>
<div class="old-help-para"><a name="_obscure"></a><h3 class="help-heading">OBSCURE</h3></div>
<div class="old-help-para">						<a name="%3Adebugg"></a><code class="help-tag-right">:debugg</code> <a name="%3Adebuggreedy"></a><code class="help-tag">:debuggreedy</code>
:debugg[reedy]
		Read debug mode commands from the normal input stream, instead
		of getting them directly from the user.  Only useful for test
		scripts.  Example:<pre>echo 'q^Mq' | vim -e -s -c debuggreedy -c 'breakadd file script.vim' -S script.vim</pre>
:0debugg[reedy]
		Undo ":debuggreedy": get debug mode commands directly from the
		user, don't use typeahead for debug commands.</div>
<div class="old-help-para"><h2 class="help-heading">Profiling<span class="help-heading-tags">						<a name="profile"></a><span class="help-tag">profile</span> <a name="profiling"></a><span class="help-tag">profiling</span></span></h2></div>
<div class="old-help-para">Profiling means that Vim measures the time that is spent on executing
functions and/or scripts.</div>
<div class="old-help-para">You can also use the <a href="builtin.html#reltime()">reltime()</a> function to measure time.</div>
<div class="old-help-para">For profiling syntax highlighting see <a href="syntax.html#%3Asyntime">:syntime</a>.</div>
<div class="old-help-para">For example, to profile the one_script.vim script file:<pre>:profile start /tmp/one_script_profile
:profile file one_script.vim
:source one_script.vim
:exit</pre>
:prof[ile] start <code>{fname}</code>			<a name="%3Aprof"></a><code class="help-tag-right">:prof</code> <a name="%3Aprofile"></a><code class="help-tag">:profile</code> <a name="E750"></a><code class="help-tag">E750</code>
		Start profiling, write the output in <code>{fname}</code> upon exit.
		"~/" and environment variables in <code>{fname}</code> will be expanded.
		If <code>{fname}</code> already exists it will be silently overwritten.
		The variable <a href="eval.html#v%3Aprofiling">v:profiling</a> is set to one.</div>
<div class="old-help-para">:prof[ile] stop
		Write the logfile and stop profiling.</div>
<div class="old-help-para">:prof[ile] pause
		Don't profile until the following ":profile continue".  Can be
		used when doing something that should not be counted (e.g., an
		external command).  Does not nest.</div>
<div class="old-help-para">:prof[ile] continue
		Continue profiling after ":profile pause".</div>
<div class="old-help-para">:prof[ile] func <code>{pattern}</code>
		Profile function that matches the pattern <code>{pattern}</code>.
		See <a href="repeat.html#%3Adebug-name">:debug-name</a> for how <code>{pattern}</code> is used.</div>
<div class="old-help-para">:prof[ile][!] file <code>{pattern}</code>
		Profile script file that matches the pattern <code>{pattern}</code>.
		See <a href="repeat.html#%3Adebug-name">:debug-name</a> for how <code>{pattern}</code> is used.
		This only profiles the script itself, not the functions
		defined in it.
		When the [!] is added then all functions defined in the script
		will also be profiled.
		Note that profiling only starts when the script is loaded
		after this command.  A :profile command in the script itself
		won't work.</div>
<div class="old-help-para">:prof[ile] dump
		Don't wait until exiting Vim and write the current state of
		profiling to the log immediately.</div>
<div class="old-help-para">:profd[el] ...						<a name="%3Aprofd"></a><code class="help-tag-right">:profd</code> <a name="%3Aprofdel"></a><code class="help-tag">:profdel</code>
		Stop profiling for the arguments specified. See <a href="repeat.html#%3Abreakdel">:breakdel</a>
		for the arguments.</div>
<div class="old-help-para">You must always start with a ":profile start fname" command.  The resulting
file is written when Vim exits.  Here is an example of the output, with line
numbers prepended for the explanation:</div>
<div class="old-help-para"><div class="help-column_heading">  1 FUNCTION  Test2()</div><div class="help-column_heading">  2 Called 1 time</div><div class="help-column_heading">  3 Total time:   0.155251</div><div class="help-column_heading">  4  Self time:   0.002006</div><div class="help-column_heading">  5</div><div class="help-column_heading">  6 count  total (s)   self (s)</div><div class="help-column_heading">  7	9	       0.000096   for i in range(8)</div><div class="help-column_heading">  8	8   0.153655   0.000410     call Test3()</div><div class="help-column_heading">  9	8	       0.000070   endfor</div><div class="help-column_heading"> 10				  " Ask a question</div><div class="help-column_heading"> 11	1	       0.001341   echo input("give me an answer: ")</div></div>
<div class="old-help-para">The header (lines 1-4) gives the time for the whole function.  The "Total"
time is the time passed while the function was executing.  The "Self" time is
the "Total" time reduced by time spent in:
<div class="help-li" style=""> other user defined functions
</div><div class="help-li" style=""> sourced scripts
</div><div class="help-li" style=""> executed autocommands
</div><div class="help-li" style=""> external (shell) commands
</div></div>
<div class="old-help-para">Lines 7-11 show the time spent in each executed line.  Lines that are not
executed do not count.  Thus a comment line is never counted.</div>
<div class="old-help-para">The Count column shows how many times a line was executed.  Note that the
"for" command in line 7 is executed one more time as the following lines.
That is because the line is also executed to detect the end of the loop.</div>
<div class="old-help-para">The time Vim spends waiting for user input isn't counted at all.  Thus how
long you take to respond to the input() prompt is irrelevant.</div>
<div class="old-help-para">Profiling should give a good indication of where time is spent, but keep in
mind there are various things that may clobber the results:</div>
<div class="old-help-para"><div class="help-li" style=""> Real elapsed time is measured, if other processes are busy they may cause
  delays at unpredictable moments.  You may want to run the profiling several
  times and use the lowest results.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> If you have several commands in one line you only get one time.  Split the
  line to see the time for the individual commands.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> The time of the lines added up is mostly less than the time of the whole
  function.  There is some overhead in between.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Functions that are deleted before Vim exits will not produce profiling
  information.  You can check the <a href="eval.html#v%3Aprofiling">v:profiling</a> variable if needed:<pre>:if !v:profiling
:   delfunc MyFunc
:endif</pre>
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Profiling may give weird results on multi-processor systems, when sleep
  mode kicks in or the processor frequency is reduced to save power.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> The "self" time is wrong when a function is used recursively.
</div></div>
<div class="old-help-para"><h2 class="help-heading">Context<span class="help-heading-tags">							<a name="Context"></a><span class="help-tag">Context</span> <a name="context"></a><span class="help-tag">context</span></span></h2></div>
<div class="old-help-para">The editor state is represented by the Context concept. This includes things
like the current <a href="motion.html#jumplist">jumplist</a>, values of <a href="change.html#registers">registers</a>, and more, described below.</div>
<div class="old-help-para">							<a name="context-types"></a><code class="help-tag-right">context-types</code>
The following Context items are supported:
	"jumps"		<a href="motion.html#jumplist">jumplist</a>
	"regs"		<a href="change.html#registers">registers</a>
	"bufs"		<a href="windows.html#buffer-list">buffer-list</a>
	"gvars"		<a href="eval.html#global-variable">global-variable</a>s
	"sfuncs"	<a href="map.html#script-local">script-local</a> functions
	"funcs"		global and <a href="map.html#script-local">script-local</a> functions</div>
<div class="old-help-para">							<a name="context-dict"></a><code class="help-tag-right">context-dict</code>
Context objects are dictionaries with the following key-value pairs:
<div class="help-li" style=""> "jumps", "regs", "bufs", "gvars":
      <a href="builtin.html#readfile()">readfile()</a>-style <a href="eval.html#List">List</a> representation of corresponding msgpack
      objects (see <a href="builtin.html#msgpackdump()">msgpackdump()</a> and <a href="builtin.html#msgpackparse()">msgpackparse()</a>).
</div><div class="help-li" style=""> "funcs" (includes <a href="map.html#script-local">script-local</a> functions as well):
      <a href="eval.html#List">List</a> of <a href="userfunc.html#%3Afunction">:function</a> definitions.
</div></div>
<div class="old-help-para">							<a name="context-stack"></a><code class="help-tag-right">context-stack</code>
An initially-empty internal Context stack is maintained by the ctx-family
functions (see <a href="usr_41.html#ctx-functions">ctx-functions</a>).</div>

  
  