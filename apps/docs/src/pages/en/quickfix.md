---
title:  Quickfix
layout: ../../layouts/MainLayout.astro
---

  <a name="quickfix.txt"></a><a name="quickfix"></a><h1> Quickfix</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/quickfix.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">This subject is introduced in section <a href="/neovim-docs-web/en/usr_30#30.1">30.1</a> of the user manual.</div>
<div class="old-help-para"><h2 class="help-heading">1. Using QuickFix commands <a name="Quickfix"></a><span class="help-tag">Quickfix</span> <a name="E42"></a><span class="help-tag">E42</span></h2></div>
<div class="old-help-para">Vim has a special mode to speedup the edit-compile-edit cycle.  This is
inspired by the quickfix option of the Manx's Aztec C compiler on the Amiga.
The idea is to save the error messages from the compiler in a file and use Vim
to jump to the errors one by one.  You can examine each problem and fix it,
without having to remember all the error messages.</div>
<div class="old-help-para">In Vim the quickfix commands are used more generally to find a list of
positions in files.  For example, <a href="/neovim-docs-web/en/quickfix#%3Avimgrep">:vimgrep</a> finds pattern matches.  You can
use the positions in a script with the <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> function.  Thus you can
do a lot more than the edit/compile/fix cycle!</div>
<div class="old-help-para">If you have the error messages in a file you can start Vim with:<pre>vim -q filename</pre>
From inside Vim an easy way to run a command and handle the output is with the
<a href="/neovim-docs-web/en/quickfix#%3Amake">:make</a> command (see below).</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> option should be set to match the error messages from your
compiler (see <a href="/neovim-docs-web/en/quickfix#errorformat">errorformat</a> below).</div>
<div class="old-help-para">							<a name="quickfix-ID"></a><code class="help-tag-right">quickfix-ID</code>
Each quickfix list has a unique identifier called the quickfix ID and this
number will not change within a Vim session. The <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> function can be
used to get the identifier assigned to a list. There is also a quickfix list
number which may change whenever more than ten lists are added to a quickfix
stack.</div>
<div class="old-help-para">						<a name="location-list"></a><code class="help-tag-right">location-list</code> <a name="E776"></a><code class="help-tag">E776</code>
A location list is a window-local quickfix list. You get one after commands
like <code>:lvimgrep</code>, <code>:lgrep</code>, <code>:lhelpgrep</code>, <code>:lmake</code>, etc., which create a
location list instead of a quickfix list as the corresponding <code>:vimgrep</code>,
<code>:grep</code>, <code>:helpgrep</code>, <code>:make</code> do.
						<a name="location-list-file-window"></a><code class="help-tag-right">location-list-file-window</code>
A location list is associated with a window and each window can have a
separate location list.  A location list can be associated with only one
window.  The location list is independent of the quickfix list.</div>
<div class="old-help-para">When a window with a location list is split, the new window gets a copy of the
location list.  When there are no longer any references to a location list,
the location list is destroyed.</div>
<div class="old-help-para">						<a name="quickfix-changedtick"></a><code class="help-tag-right">quickfix-changedtick</code>
Every quickfix and location list has a read-only changedtick variable that
tracks the total number of changes made to the list.  Every time the quickfix
list is modified, this count is incremented. This can be used to perform an
action only when the list has changed.  The <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> and <a href="/neovim-docs-web/en/builtin#getloclist()">getloclist()</a>
functions can be used to query the current value of changedtick.  You cannot
change the changedtick variable.</div>
<div class="old-help-para">The following quickfix commands can be used.  The location list commands are
similar to the quickfix commands, replacing the 'c' prefix in the quickfix
command with 'l'.</div>
<div class="old-help-para">							<a name="E924"></a><code class="help-tag-right">E924</code>
If the current window was closed by an <a href="/neovim-docs-web/en/autocmd#autocommand">autocommand</a> while processing a
location list command, it will be aborted.</div>
<div class="old-help-para">							<a name="E925"></a><code class="help-tag-right">E925</code> <a name="E926"></a><code class="help-tag">E926</code>
If the current quickfix or location list was changed by an <a href="/neovim-docs-web/en/autocmd#autocommand">autocommand</a> while
processing a quickfix or location list command, it will be aborted.</div>
<div class="old-help-para">							<a name="%3Acc"></a><code class="help-tag-right">:cc</code>
:cc[!] [nr]		Display error [nr].  If [nr] is omitted, the same
:[nr]cc[!]		error is displayed again.  Without [!] this doesn't
			work when jumping to another buffer, the current buffer
			has been changed, there is the only window for the
			buffer and both <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> and <a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a> are off.
			When jumping to another buffer with [!] any changes to
			the current buffer are lost, unless <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> is set or
			there is another window for this buffer.
			The <a href="/neovim-docs-web/en/options#'switchbuf'">'switchbuf'</a> settings are respected when jumping
			to a buffer.
			When used in the quickfix window the line number can
			be used, including "." for the current line and "$"
			for the last line.</div>
<div class="old-help-para">							<a name="%3All"></a><code class="help-tag-right">:ll</code>
:ll[!] [nr]		Same as ":cc", except the location list for the
:[nr]ll[!]		current window is used instead of the quickfix list.</div>
<div class="old-help-para">						<a name="%3Acn"></a><code class="help-tag-right">:cn</code> <a name="%3Acne"></a><code class="help-tag">:cne</code> <a name="%3Acnext"></a><code class="help-tag">:cnext</code> <a name="E553"></a><code class="help-tag">E553</code>
:[count]cn[ext][!]	Display the [count] next error in the list that
			includes a file name.  If there are no file names at
			all, go to the [count] next error.  See <a href="/neovim-docs-web/en/quickfix#%3Acc">:cc</a> for
			[!] and <a href="/neovim-docs-web/en/options#'switchbuf'">'switchbuf'</a>.</div>
<div class="old-help-para">							<a name="%3Alne"></a><code class="help-tag-right">:lne</code> <a name="%3Alnext"></a><code class="help-tag">:lnext</code>
:[count]lne[xt][!]	Same as ":cnext", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">:[count]cN[ext][!]		<a name="%3Acp"></a><code class="help-tag-right">:cp</code> <a name="%3Acprevious"></a><code class="help-tag">:cprevious</code>  <a name="%3Acprev"></a><code class="help-tag">:cprev</code> <a name="%3AcN"></a><code class="help-tag">:cN</code> <a name="%3AcNext"></a><code class="help-tag">:cNext</code>
:[count]cp[revious][!]	Display the [count] previous error in the list that
			includes a file name.  If there are no file names at
			all, go to the [count] previous error.  See <a href="/neovim-docs-web/en/quickfix#%3Acc">:cc</a> for
			[!] and <a href="/neovim-docs-web/en/options#'switchbuf'">'switchbuf'</a>.</div>
<div class="old-help-para">:[count]lN[ext][!]		<a name="%3Alp"></a><code class="help-tag-right">:lp</code> <a name="%3Alprevious"></a><code class="help-tag">:lprevious</code> <a name="%3Alprev"></a><code class="help-tag">:lprev</code> <a name="%3AlN"></a><code class="help-tag">:lN</code> <a name="%3AlNext"></a><code class="help-tag">:lNext</code>
:[count]lp[revious][!]	Same as ":cNext" and ":cprevious", except the location
			list for the current window is used instead of the
			quickfix list.</div>
<div class="old-help-para">							<a name="%3Acabo"></a><code class="help-tag-right">:cabo</code> <a name="%3Acabove"></a><code class="help-tag">:cabove</code>
:[count]cabo[ve]	Go to the [count] error above the current line in the
			current buffer.  If [count] is omitted, then 1 is
			used.  If there are no errors, then an error message
			is displayed.  Assumes that the entries in a quickfix
			list are sorted by their buffer number and line
			number. If there are multiple errors on the same line,
			then only the first entry is used.  If [count] exceeds
			the number of entries above the current line, then the
			first error in the file is selected.</div>
<div class="old-help-para">							<a name="%3Alab"></a><code class="help-tag-right">:lab</code> <a name="%3Alabove"></a><code class="help-tag">:labove</code>
:[count]lab[ove]	Same as ":cabove", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">							<a name="%3Acbel"></a><code class="help-tag-right">:cbel</code> <a name="%3Acbelow"></a><code class="help-tag">:cbelow</code>
:[count]cbel[ow]	Go to the [count] error below the current line in the
			current buffer.  If [count] is omitted, then 1 is
			used.  If there are no errors, then an error message
			is displayed.  Assumes that the entries in a quickfix
			list are sorted by their buffer number and line
			number.  If there are multiple errors on the same
			line, then only the first entry is used.  If [count]
			exceeds the number of entries below the current line,
			then the last error in the file is selected.</div>
<div class="old-help-para">							<a name="%3Albel"></a><code class="help-tag-right">:lbel</code> <a name="%3Albelow"></a><code class="help-tag">:lbelow</code>
:[count]lbel[ow]	Same as ":cbelow", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">							<a name="%3Acbe"></a><code class="help-tag-right">:cbe</code> <a name="%3Acbefore"></a><code class="help-tag">:cbefore</code>
:[count]cbe[fore]	Go to the [count] error before the current cursor
			position in the current buffer.  If [count] is
			omitted, then 1 is used.  If there are no errors, then
			an error message is displayed.  Assumes that the
			entries in a quickfix list are sorted by their buffer,
			line and column numbers.  If [count] exceeds the
			number of entries before the current position, then
			the first error in the file is selected.</div>
<div class="old-help-para">							<a name="%3Albe"></a><code class="help-tag-right">:lbe</code> <a name="%3Albefore"></a><code class="help-tag">:lbefore</code>
:[count]lbe[fore]	Same as ":cbefore", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">							<a name="%3Acaf"></a><code class="help-tag-right">:caf</code> <a name="%3Acafter"></a><code class="help-tag">:cafter</code>
:[count]caf[ter]	Go to the [count] error after the current cursor
			position in the current buffer.  If [count] is
			omitted, then 1 is used.  If there are no errors, then
			an error message is displayed.  Assumes that the
			entries in a quickfix list are sorted by their buffer,
			line and column numbers.  If [count] exceeds the
			number of entries after the current position, then
			the last error in the file is selected.</div>
<div class="old-help-para">							<a name="%3Alaf"></a><code class="help-tag-right">:laf</code> <a name="%3Alafter"></a><code class="help-tag">:lafter</code>
:[count]laf[ter]	Same as ":cafter", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">							<a name="%3Acnf"></a><code class="help-tag-right">:cnf</code> <a name="%3Acnfile"></a><code class="help-tag">:cnfile</code>
:[count]cnf[ile][!]	Display the first error in the [count] next file in
			the list that includes a file name.  If there are no
			file names at all or if there is no next file, go to
			the [count] next error.  See <a href="/neovim-docs-web/en/quickfix#%3Acc">:cc</a> for [!] and
			<a href="/neovim-docs-web/en/options#'switchbuf'">'switchbuf'</a>.</div>
<div class="old-help-para">							<a name="%3Alnf"></a><code class="help-tag-right">:lnf</code> <a name="%3Alnfile"></a><code class="help-tag">:lnfile</code>
:[count]lnf[ile][!]	Same as ":cnfile", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">:[count]cNf[ile][!]			<a name="%3Acpf"></a><code class="help-tag-right">:cpf</code> <a name="%3Acpfile"></a><code class="help-tag">:cpfile</code> <a name="%3AcNf"></a><code class="help-tag">:cNf</code> <a name="%3AcNfile"></a><code class="help-tag">:cNfile</code>
:[count]cpf[ile][!]	Display the last error in the [count] previous file in
			the list that includes a file name.  If there are no
			file names at all or if there is no next file, go to
			the [count] previous error.  See <a href="/neovim-docs-web/en/quickfix#%3Acc">:cc</a> for [!] and
			<a href="/neovim-docs-web/en/options#'switchbuf'">'switchbuf'</a>.</div>
<div class="old-help-para">:[count]lNf[ile][!]			<a name="%3Alpf"></a><code class="help-tag-right">:lpf</code> <a name="%3Alpfile"></a><code class="help-tag">:lpfile</code> <a name="%3AlNf"></a><code class="help-tag">:lNf</code> <a name="%3AlNfile"></a><code class="help-tag">:lNfile</code>
:[count]lpf[ile][!]	Same as ":cNfile" and ":cpfile", except the location
			list for the current window is used instead of the
			quickfix list.</div>
<div class="old-help-para">							<a name="%3Acrewind"></a><code class="help-tag-right">:crewind</code> <a name="%3Acr"></a><code class="help-tag">:cr</code>
:cr[ewind][!] [nr]	Display error [nr].  If [nr] is omitted, the FIRST
			error is displayed.  See <a href="/neovim-docs-web/en/quickfix#%3Acc">:cc</a>.</div>
<div class="old-help-para">							<a name="%3Alrewind"></a><code class="help-tag-right">:lrewind</code> <a name="%3Alr"></a><code class="help-tag">:lr</code>
:lr[ewind][!] [nr]	Same as ":crewind", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">							<a name="%3Acfirst"></a><code class="help-tag-right">:cfirst</code> <a name="%3Acfir"></a><code class="help-tag">:cfir</code>
:cfir[st][!] [nr]	Same as ":crewind".</div>
<div class="old-help-para">							<a name="%3Alfirst"></a><code class="help-tag-right">:lfirst</code> <a name="%3Alfir"></a><code class="help-tag">:lfir</code>
:lfir[st][!] [nr]	Same as ":lrewind".</div>
<div class="old-help-para">							<a name="%3Aclast"></a><code class="help-tag-right">:clast</code> <a name="%3Acla"></a><code class="help-tag">:cla</code>
:cla[st][!] [nr]	Display error [nr].  If [nr] is omitted, the LAST
			error is displayed.  See <a href="/neovim-docs-web/en/quickfix#%3Acc">:cc</a>.</div>
<div class="old-help-para">							<a name="%3Allast"></a><code class="help-tag-right">:llast</code> <a name="%3Alla"></a><code class="help-tag">:lla</code>
:lla[st][!] [nr]	Same as ":clast", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">							<a name="%3Acq"></a><code class="help-tag-right">:cq</code> <a name="%3Acquit"></a><code class="help-tag">:cquit</code>
:cq[uit][!]
:{N}cq[uit][!]
:cq[uit][!] <code>{N}</code>		Quit Vim with error code <code>{N}</code>.  <code>{N}</code> defaults to one.
			Useful when Vim is called from another program:
			e.g., a compiler will not compile the same file again,
			<code>git commit</code> will abort the committing process, <code>fc</code>
			(built-in for shells like bash and zsh) will not
			execute the command, etc.
			<code>{N}</code> can also be zero, in which case Vim exits
			normally.
			WARNING: All changes in files are lost.  It works like
			":qall!" <a href="/neovim-docs-web/en/editing#%3Aqall">:qall</a>, except that Nvim exits non-zero or
			[count].</div>
<div class="old-help-para">							<a name="%3Acf"></a><code class="help-tag-right">:cf</code> <a name="%3Acfi"></a><code class="help-tag">:cfi</code> <a name="%3Acfile"></a><code class="help-tag">:cfile</code>
:cf[ile][!] [errorfile]	Read the error file and jump to the first error.
			This is done automatically when Vim is started with
			the -q option.  You can use this command when you
			keep Vim running while compiling.  If you give the
			name of the errorfile, the <a href="/neovim-docs-web/en/options#'errorfile'">'errorfile'</a> option will
			be set to [errorfile].  See <a href="/neovim-docs-web/en/quickfix#%3Acc">:cc</a> for [!].
			If the encoding of the error file differs from the
			<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> option, you can use the <a href="/neovim-docs-web/en/options#'makeencoding'">'makeencoding'</a>
			option to specify the encoding.</div>
<div class="old-help-para">							<a name="%3Alf"></a><code class="help-tag-right">:lf</code> <a name="%3Alfi"></a><code class="help-tag">:lfi</code> <a name="%3Alfile"></a><code class="help-tag">:lfile</code>
:lf[ile][!] [errorfile]	Same as ":cfile", except the location list for the
			current window is used instead of the quickfix list.
			You can not use the -q command-line option to set
			the location list.</div>
<div class="old-help-para">:cg[etfile] [errorfile]					<a name="%3Acg"></a><code class="help-tag-right">:cg</code> <a name="%3Acgetfile"></a><code class="help-tag">:cgetfile</code>
			Read the error file.  Just like ":cfile" but don't
			jump to the first error.
			If the encoding of the error file differs from the
			<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> option, you can use the <a href="/neovim-docs-web/en/options#'makeencoding'">'makeencoding'</a>
			option to specify the encoding.</div>
<div class="old-help-para">:lg[etfile] [errorfile]					<a name="%3Alg"></a><code class="help-tag-right">:lg</code> <a name="%3Alge"></a><code class="help-tag">:lge</code> <a name="%3Algetfile"></a><code class="help-tag">:lgetfile</code>
			Same as ":cgetfile", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">							<a name="%3Acaddf"></a><code class="help-tag-right">:caddf</code> <a name="%3Acaddfile"></a><code class="help-tag">:caddfile</code>
:caddf[ile] [errorfile]	Read the error file and add the errors from the
			errorfile to the current quickfix list. If a quickfix
			list is not present, then a new list is created.
			If the encoding of the error file differs from the
			<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> option, you can use the <a href="/neovim-docs-web/en/options#'makeencoding'">'makeencoding'</a>
			option to specify the encoding.</div>
<div class="old-help-para">							<a name="%3Aladdf"></a><code class="help-tag-right">:laddf</code> <a name="%3Aladdfile"></a><code class="help-tag">:laddfile</code>
:laddf[ile] [errorfile]	Same as ":caddfile", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">						<a name="%3Acb"></a><code class="help-tag-right">:cb</code> <a name="%3Acbuffer"></a><code class="help-tag">:cbuffer</code> <a name="E681"></a><code class="help-tag">E681</code>
:cb[uffer][!] [bufnr]	Read the error list from the current buffer.
			When [bufnr] is given it must be the number of a
			loaded buffer.  That buffer will then be used instead
			of the current buffer.
			A range can be specified for the lines to be used.
			Otherwise all lines in the buffer are used.
			See <a href="/neovim-docs-web/en/quickfix#%3Acc">:cc</a> for [!].</div>
<div class="old-help-para">						<a name="%3Alb"></a><code class="help-tag-right">:lb</code> <a name="%3Albuffer"></a><code class="help-tag">:lbuffer</code>
:lb[uffer][!] [bufnr]	Same as ":cbuffer", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">						<a name="%3Acgetb"></a><code class="help-tag-right">:cgetb</code> <a name="%3Acgetbuffer"></a><code class="help-tag">:cgetbuffer</code>
:cgetb[uffer] [bufnr]	Read the error list from the current buffer.  Just
			like ":cbuffer" but don't jump to the first error.</div>
<div class="old-help-para">						<a name="%3Algetb"></a><code class="help-tag-right">:lgetb</code> <a name="%3Algetbuffer"></a><code class="help-tag">:lgetbuffer</code>
:lgetb[uffer] [bufnr]	Same as ":cgetbuffer", except the location list for
			the current window is used instead of the quickfix
			list.</div>
<div class="old-help-para">						<a name="%3Acad"></a><code class="help-tag-right">:cad</code> <a name="%3Acadd"></a><code class="help-tag">:cadd</code> <a name="%3Acaddbuffer"></a><code class="help-tag">:caddbuffer</code>
:cad[dbuffer] [bufnr]	Read the error list from the current buffer and add
			the errors to the current quickfix list.  If a
			quickfix list is not present, then a new list is
			created. Otherwise, same as ":cbuffer".</div>
<div class="old-help-para">							<a name="%3Aladdb"></a><code class="help-tag-right">:laddb</code> <a name="%3Aladdbuffer"></a><code class="help-tag">:laddbuffer</code>
:laddb[uffer] [bufnr]	Same as ":caddbuffer", except the location list for
			the current window is used instead of the quickfix
			list.</div>
<div class="old-help-para">							<a name="%3Acex"></a><code class="help-tag-right">:cex</code> <a name="%3Acexpr"></a><code class="help-tag">:cexpr</code> <a name="E777"></a><code class="help-tag">E777</code>
:cex[pr][!] <code>{expr}</code>	Create a quickfix list using the result of <code>{expr}</code> and
			jump to the first error.
			If <code>{expr}</code> is a String, then each newline terminated
			line in the String is processed using the global value
			of <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> and the result is added to the
			quickfix list.
			If <code>{expr}</code> is a List, then each String item in the list
			is processed and added to the quickfix list.  Non
			String items in the List are ignored.
			See <a href="/neovim-docs-web/en/quickfix#%3Acc">:cc</a> for [!].
			Examples:<pre>:cexpr system('grep -n xyz *')
:cexpr getline(1, '$')</pre></div>
<div class="old-help-para">							<a name="%3Alex"></a><code class="help-tag-right">:lex</code> <a name="%3Alexpr"></a><code class="help-tag">:lexpr</code>
:lex[pr][!] <code>{expr}</code>	Same as <a href="/neovim-docs-web/en/quickfix#%3Acexpr">:cexpr</a>, except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">							<a name="%3Acgete"></a><code class="help-tag-right">:cgete</code> <a name="%3Acgetexpr"></a><code class="help-tag">:cgetexpr</code>
:cgete[xpr] <code>{expr}</code>	Create a quickfix list using the result of <code>{expr}</code>.
			Just like <a href="/neovim-docs-web/en/quickfix#%3Acexpr">:cexpr</a>, but don't jump to the first error.</div>
<div class="old-help-para">							<a name="%3Algete"></a><code class="help-tag-right">:lgete</code> <a name="%3Algetexpr"></a><code class="help-tag">:lgetexpr</code>
:lgete[xpr] <code>{expr}</code>	Same as <a href="/neovim-docs-web/en/quickfix#%3Acgetexpr">:cgetexpr</a>, except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">							<a name="%3Acadde"></a><code class="help-tag-right">:cadde</code> <a name="%3Acaddexpr"></a><code class="help-tag">:caddexpr</code>
:cadde[xpr] <code>{expr}</code>	Evaluate <code>{expr}</code> and add the resulting lines to the
			current quickfix list. If a quickfix list is not
			present, then a new list is created. The current
			cursor position will not be changed. See <a href="/neovim-docs-web/en/quickfix#%3Acexpr">:cexpr</a> for
			more information.
			Example:<pre>:g/mypattern/caddexpr expand("%") .. ":" .. line(".") ..  ":" .. getline(".")</pre></div>
<div class="old-help-para">						<a name="%3Alad"></a><code class="help-tag-right">:lad</code> <a name="%3Aaddd"></a><code class="help-tag">:addd</code> <a name="%3Aladdexpr"></a><code class="help-tag">:laddexpr</code>
:lad[dexpr] <code>{expr}</code>	Same as ":caddexpr", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">							<a name="%3Acl"></a><code class="help-tag-right">:cl</code> <a name="%3Aclist"></a><code class="help-tag">:clist</code>
:cl[ist] [from] [, [to]]
			List all errors that are valid <a href="/neovim-docs-web/en/quickfix#quickfix-valid">quickfix-valid</a>.
			If numbers [from] and/or [to] are given, the respective
			range of errors is listed.  A negative number counts
			from the last error backwards, -1 being the last error.
			The <a href="/neovim-docs-web/en/options#'switchbuf'">'switchbuf'</a> settings are respected when jumping
			to a buffer.
			The <a href="/neovim-docs-web/en/various#%3Afilter">:filter</a> command can be used to display only the
			quickfix entries matching a supplied pattern. The
			pattern is matched against the filename, module name,
			pattern and text of the entry.</div>
<div class="old-help-para">:cl[ist] +{count}	List the current and next <code>{count}</code> valid errors.  This
			is similar to ":clist from from+count", where "from"
			is the current error position.</div>
<div class="old-help-para">:cl[ist]! [from] [, [to]]
			List all errors.</div>
<div class="old-help-para">:cl[ist]! +{count}	List the current and next <code>{count}</code> error lines.  This
			is useful to see unrecognized lines after the current
			one.  For example, if ":clist" shows:
<div class="help-column_heading">        8384 testje.java:252: error: cannot find symbol</div>			Then using ":cl! +3" shows the reason:
<div class="help-column_heading">        8384 testje.java:252: error: cannot find symbol</div><div class="help-column_heading">        8385:   ZexitCode = Fmainx();</div><div class="help-column_heading">        8386:               ^</div><div class="help-column_heading">        8387:   symbol:   method Fmainx()</div></div>
<div class="old-help-para">:lli[st] [from] [, [to]]				<a name="%3Alli"></a><code class="help-tag-right">:lli</code> <a name="%3Allist"></a><code class="help-tag">:llist</code>
			Same as ":clist", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">:lli[st]! [from] [, [to]]
			List all the entries in the location list for the
			current window.</div>
<div class="old-help-para">If you insert or delete lines, mostly the correct error location is still
found because hidden marks are used.  Sometimes, when the mark has been
deleted for some reason, the message "line changed" is shown to warn you that
the error location may not be correct.  If you quit Vim and start again the
marks are lost and the error locations may not be correct anymore.</div>
<div class="old-help-para">Two autocommands are available for running commands before and after a
quickfix command (':make', ':grep' and so on) is executed. See
<a href="/neovim-docs-web/en/autocmd#QuickFixCmdPre">QuickFixCmdPre</a> and <a href="/neovim-docs-web/en/autocmd#QuickFixCmdPost">QuickFixCmdPost</a> for details.</div>
<div class="old-help-para">						<a name="QuickFixCmdPost-example"></a><code class="help-tag-right">QuickFixCmdPost-example</code>
When <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> differs from the locale, the error messages may have a
different encoding from what Vim is using.  To convert the messages you can
use this code:<pre>function QfMakeConv()
   let qflist = getqflist()
   for i in qflist
      let i.text = iconv(i.text, "cp936", "utf-8")
   endfor
   call setqflist(qflist)
endfunction

au QuickfixCmdPost make call QfMakeConv()</pre>
Another option is using <a href="/neovim-docs-web/en/options#'makeencoding'">'makeencoding'</a>.</div>
<div class="old-help-para">							<a name="quickfix-title"></a><code class="help-tag-right">quickfix-title</code>
Every quickfix and location list has a title. By default the title is set to
the command that created the list. The <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> and <a href="/neovim-docs-web/en/builtin#getloclist()">getloclist()</a>
functions can be used to get the title of a quickfix and a location list
respectively. The <a href="/neovim-docs-web/en/builtin#setqflist()">setqflist()</a> and <a href="/neovim-docs-web/en/builtin#setloclist()">setloclist()</a> functions can be used to
modify the title of a quickfix and location list respectively. Examples:<pre>call setqflist([], 'a', {'title' : 'Cmd output'})
echo getqflist({'title' : 1})
call setloclist(3, [], 'a', {'title' : 'Cmd output'})
echo getloclist(3, {'title' : 1})</pre></div>
<div class="old-help-para">							<a name="quickfix-index"></a><code class="help-tag-right">quickfix-index</code>
When you jump to a quickfix/location list entry using any of the quickfix
commands (e.g. <a href="/neovim-docs-web/en/quickfix#%3Acc">:cc</a>, <a href="/neovim-docs-web/en/quickfix#%3Acnext">:cnext</a>, <a href="/neovim-docs-web/en/quickfix#%3Acprev">:cprev</a>, etc.), that entry becomes the
currently selected entry. The index of the currently selected entry in a
quickfix/location list can be obtained using the getqflist()/getloclist()
functions. Examples:<pre>echo getqflist({'idx' : 0}).idx
echo getqflist({'id' : qfid, 'idx' : 0}).idx
echo getloclist(2, {'idx' : 0}).idx</pre></div>
<div class="old-help-para">For a new quickfix list, the first entry is selected and the index is 1.  Any
entry in any quickfix/location list can be set as the currently selected entry
using the setqflist() function. Examples:<pre>call setqflist([], 'a', {'idx' : 12})
call setqflist([], 'a', {'id' : qfid, 'idx' : 7})
call setloclist(1, [], 'a', {'idx' : 7})</pre></div>
<div class="old-help-para">							<a name="quickfix-size"></a><code class="help-tag-right">quickfix-size</code>
You can get the number of entries (size) in a quickfix and a location list
using the <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> and <a href="/neovim-docs-web/en/builtin#getloclist()">getloclist()</a> functions respectively. Examples:<pre>echo getqflist({'size' : 1})
echo getloclist(5, {'size' : 1})</pre></div>
<div class="old-help-para">							<a name="quickfix-context"></a><code class="help-tag-right">quickfix-context</code>
Any Vim type can be associated as a context with a quickfix or location list.
The <a href="/neovim-docs-web/en/builtin#setqflist()">setqflist()</a> and the <a href="/neovim-docs-web/en/builtin#setloclist()">setloclist()</a> functions can be used to associate a
context with a quickfix and a location list respectively. The <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a>
and the <a href="/neovim-docs-web/en/builtin#getloclist()">getloclist()</a> functions can be used to retrieve the context of a
quickfix and a location list respectively. This is useful for a Vim plugin
dealing with multiple quickfix/location lists.
Examples:<pre>let somectx = {'name' : 'Vim', 'type' : 'Editor'}
call setqflist([], 'a', {'context' : somectx})
echo getqflist({'context' : 1})

let newctx = ['red', 'green', 'blue']
call setloclist(2, [], 'a', {'id' : qfid, 'context' : newctx})
echo getloclist(2, {'id' : qfid, 'context' : 1})</pre></div>
<div class="old-help-para">							<a name="quickfix-parse"></a><code class="help-tag-right">quickfix-parse</code>
You can parse a list of lines using <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> without creating or
modifying a quickfix list using the <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> function. Examples:<pre>echo getqflist({'lines' : ["F1:10:Line10", "F2:20:Line20"]})
echo getqflist({'lines' : systemlist('grep -Hn quickfix *')})</pre>
This returns a dictionary where the "items" key contains the list of quickfix
entries parsed from lines. The following shows how to use a custom
<a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> to parse the lines without modifying the <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> option:<pre>echo getqflist({'efm' : '%f#%l#%m', 'lines' : ['F1#10#Line']})</pre></div>
<div class="old-help-para">EXECUTE A COMMAND IN ALL THE BUFFERS IN QUICKFIX OR LOCATION LIST:
							<a name="%3Acdo"></a><code class="help-tag-right">:cdo</code>
:cdo[!] <code>{cmd}</code>		Execute <code>{cmd}</code> in each valid entry in the quickfix list.
			It works like doing this:<pre>:cfirst
:{cmd}
:cnext
:{cmd}
etc.</pre></div>
<div class="old-help-para">			When the current file can't be <a href="/neovim-docs-web/en/editing#abandon">abandon</a>ed and the [!]
			is not present, the command fails.
			When going to the next entry fails execution stops.
			The last buffer (or where an error occurred) becomes
			the current buffer.
			<code>{cmd}</code> can contain '|' to concatenate several commands.</div>
<div class="old-help-para">			Only valid entries in the quickfix list are used.
			A range can be used to select entries, e.g.:<pre>:10,$cdo cmd</pre></div>
<div class="old-help-para">			To skip entries 1 to 9.</div>
<div class="old-help-para">			Note: While this command is executing, the Syntax
			autocommand event is disabled by adding it to
			<a href="/neovim-docs-web/en/options#'eventignore'">'eventignore'</a>.  This considerably speeds up editing
			each buffer.
			Also see <a href="/neovim-docs-web/en/windows#%3Abufdo">:bufdo</a>, <a href="/neovim-docs-web/en/tabpage#%3Atabdo">:tabdo</a>, <a href="/neovim-docs-web/en/editing#%3Aargdo">:argdo</a>, <a href="/neovim-docs-web/en/windows#%3Awindo">:windo</a>,
			<a href="/neovim-docs-web/en/quickfix#%3Aldo">:ldo</a>, <a href="/neovim-docs-web/en/quickfix#%3Acfdo">:cfdo</a> and <a href="/neovim-docs-web/en/quickfix#%3Alfdo">:lfdo</a>.</div>
<div class="old-help-para">							<a name="%3Acfdo"></a><code class="help-tag-right">:cfdo</code>
:cfdo[!] <code>{cmd}</code>		Execute <code>{cmd}</code> in each file in the quickfix list.
			It works like doing this:<pre>:cfirst
:{cmd}
:cnfile
:{cmd}
etc.</pre></div>
<div class="old-help-para">			Otherwise it works the same as <code>:cdo</code>.</div>
<div class="old-help-para">							<a name="%3Aldo"></a><code class="help-tag-right">:ldo</code>
:ld[o][!] <code>{cmd}</code>		Execute <code>{cmd}</code> in each valid entry in the location list
			for the current window.
			It works like doing this:<pre>:lfirst
:{cmd}
:lnext
:{cmd}
etc.</pre></div>
<div class="old-help-para">			Only valid entries in the location list are used.
			Otherwise it works the same as <code>:cdo</code>.</div>
<div class="old-help-para">							<a name="%3Alfdo"></a><code class="help-tag-right">:lfdo</code>
:lfdo[!] <code>{cmd}</code>		Execute <code>{cmd}</code> in each file in the location list for
			the current window.
			It works like doing this:<pre>:lfirst
:{cmd}
:lnfile
:{cmd}
etc.</pre></div>
<div class="old-help-para">			Otherwise it works the same as <code>:ldo</code>.</div>
<div class="old-help-para">FILTERING A QUICKFIX OR LOCATION LIST:
				    <a name="cfilter-plugin"></a><code class="help-tag-right">cfilter-plugin</code> <a name="%3ACfilter"></a><code class="help-tag">:Cfilter</code> <a name="%3ALfilter"></a><code class="help-tag">:Lfilter</code>
If you have too many entries in a quickfix list, you can use the cfilter
plugin to reduce the number of entries.  Load the plugin with:<pre>packadd cfilter</pre>
Then you can use the following commands to filter a quickfix/location list:<pre>:Cfilter[!] /{pat}/
:Lfilter[!] /{pat}/</pre>
The <a href="/neovim-docs-web/en/quickfix#%3ACfilter">:Cfilter</a> command creates a new quickfix list from the entries matching
<code>{pat}</code> in the current quickfix list. <code>{pat}</code> is a Vim <a href="/neovim-docs-web/en/pattern#regular-expression">regular-expression</a>
pattern. Both the file name and the text of the entries are matched against
<code>{pat}</code>. If the optional ! is supplied, then the entries not matching <code>{pat}</code> are
used. The pattern can be optionally enclosed using one of the following
characters: ', ", /. If the pattern is empty, then the last used search
pattern is used.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/quickfix#%3ALfilter">:Lfilter</a> command does the same as <a href="/neovim-docs-web/en/quickfix#%3ACfilter">:Cfilter</a> but operates on the current
location list.</div>
<div class="old-help-para">The current quickfix/location list is not modified by these commands, so you
can go back to the unfiltered list using the <a href="/neovim-docs-web/en/quickfix#%3Acolder">:colder</a>/|:lolder| command.</div>
<div class="old-help-para"><h2 class="help-heading">2. The error window<span class="help-heading-tags">					<a name="quickfix-window"></a><span class="help-tag">quickfix-window</span></span></h2></div>
<div class="old-help-para">					    <a name="%3Acope"></a><code class="help-tag-right">:cope</code> <a name="%3Acopen"></a><code class="help-tag">:copen</code> <a name="w%3Aquickfix_title"></a><code class="help-tag">w:quickfix_title</code>
:cope[n] [height]	Open a window to show the current list of errors.</div>
<div class="old-help-para">			When [height] is given, the window becomes that high
			(if there is room).  When [height] is omitted the
			window is made ten lines high.</div>
<div class="old-help-para">			If there already is a quickfix window, it will be made
			the current window.  It is not possible to open a
			second quickfix window.  If [height] is given the
			existing window will be resized to it.</div>
<div class="old-help-para">							<a name="quickfix-buffer"></a><code class="help-tag-right">quickfix-buffer</code>
			The window will contain a special buffer, with
			<a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> equal to "quickfix".  Don't change this!
			The window will have the w:quickfix_title variable set
			which will indicate the command that produced the
			quickfix list. This can be used to compose a custom
			status line if the value of <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a> is adjusted
			properly. Whenever this buffer is modified by a
			quickfix command or function, the <a href="/neovim-docs-web/en/eval#b%3Achangedtick">b:changedtick</a>
			variable is incremented.  You can get the number of
			this buffer using the getqflist() and getloclist()
			functions by passing the "qfbufnr" item. For a
			location list, this buffer is wiped out when the
			location list is removed.</div>
<div class="old-help-para">							<a name="%3Alop"></a><code class="help-tag-right">:lop</code> <a name="%3Alopen"></a><code class="help-tag">:lopen</code>
:lop[en] [height]	Open a window to show the location list for the
			current window. Works only when the location list for
			the current window is present.  You can have more than
			one location window opened at a time.  Otherwise, it
			acts the same as ":copen".</div>
<div class="old-help-para">							<a name="%3Accl"></a><code class="help-tag-right">:ccl</code> <a name="%3Acclose"></a><code class="help-tag">:cclose</code>
:ccl[ose]		Close the quickfix window.</div>
<div class="old-help-para">							<a name="%3Alcl"></a><code class="help-tag-right">:lcl</code> <a name="%3Alclose"></a><code class="help-tag">:lclose</code>
:lcl[ose]		Close the window showing the location list for the
			current window.</div>
<div class="old-help-para">							<a name="%3Acw"></a><code class="help-tag-right">:cw</code> <a name="%3Acwindow"></a><code class="help-tag">:cwindow</code>
:cw[indow] [height]	Open the quickfix window when there are recognized
			errors.  If the window is already open and there are
			no recognized errors, close the window.</div>
<div class="old-help-para">							<a name="%3Alw"></a><code class="help-tag-right">:lw</code> <a name="%3Alwindow"></a><code class="help-tag">:lwindow</code>
:lw[indow] [height]	Same as ":cwindow", except use the window showing the
			location list for the current window.</div>
<div class="old-help-para">							<a name="%3Acbo"></a><code class="help-tag-right">:cbo</code> <a name="%3Acbottom"></a><code class="help-tag">:cbottom</code>
:cbo[ttom]		Put the cursor in the last line of the quickfix window
			and scroll to make it visible.  This is useful for
			when errors are added by an asynchronous callback.
			Only call it once in a while if there are many
			updates to avoid a lot of redrawing.</div>
<div class="old-help-para">							<a name="%3Albo"></a><code class="help-tag-right">:lbo</code> <a name="%3Albottom"></a><code class="help-tag">:lbottom</code>
:lbo[ttom]		Same as ":cbottom", except use the window showing the
			location list for the current window.</div>
<div class="old-help-para">Normally the quickfix window is at the bottom of the screen.  If there are
vertical splits, it's at the bottom of the rightmost column of windows.  To
make it always occupy the full width:<pre>:botright cwindow</pre>
You can move the window around with <a href="/neovim-docs-web/en/windows#window-moving">window-moving</a> commands.
For example, to move it to the top: <code>CTRL-W</code> K
The <a href="/neovim-docs-web/en/options#'winfixheight'">'winfixheight'</a> option will be set, which means that the window will mostly
keep its height, ignoring <a href="/neovim-docs-web/en/options#'winheight'">'winheight'</a> and <a href="/neovim-docs-web/en/options#'equalalways'">'equalalways'</a>.  You can change the
height manually (e.g., by dragging the status line above it with the mouse).</div>
<div class="old-help-para">In the quickfix window, each line is one error.  The line number is equal to
the error number.  The current entry is highlighted with the QuickFixLine
highlighting.  You can change it to your liking, e.g.:<pre>:hi QuickFixLine ctermbg=Yellow guibg=Yellow</pre>
You can use ":.cc" to jump to the error under the cursor.
Hitting the <code>&lt;Enter&gt;</code> key or double-clicking the mouse on a line has the same
effect.  The file containing the error is opened in the window above the
quickfix window.  If there already is a window for that file, it is used
instead.  If the buffer in the used window has changed, and the error is in
another file, jumping to the error will fail.  You will first have to make
sure the window contains a buffer which can be abandoned.</div>
<div class="old-help-para">When you select a file from the quickfix window, the following steps are used
to find a window to edit the file:</div>
<div class="old-help-para">1. If a window displaying the selected file is present in the current tabpage
   (starting with the window before the quickfix window), then that window is
   used.
2. If the above step fails and if <a href="/neovim-docs-web/en/options#'switchbuf'">'switchbuf'</a> contains "usetab" and a window
   displaying the selected file is present in any one of the tabpages
   (starting with the first tabpage) then that window is used.
3. If the above step fails then a window in the current tabpage displaying a
   buffer with <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> not set (starting with the window before the quickfix
   window) is used.
4. If the above step fails and if <a href="/neovim-docs-web/en/options#'switchbuf'">'switchbuf'</a> contains "uselast", then the
   previously accessed window is used.
5. If the above step fails then the window before the quickfix window is used.
   If there is no previous window, then the window after the quickfix window
   is used.
6. If the above step fails, then a new horizontally split window above the
   quickfix window is used.</div>
<div class="old-help-para">					<a name="CTRL-W_%3CEnter%3E"></a><code class="help-tag-right">CTRL-W_&lt;Enter&gt;</code> <a name="CTRL-W_%3CCR%3E"></a><code class="help-tag">CTRL-W_&lt;CR&gt;</code>
You can use <code>CTRL-W</code> <code>&lt;Enter&gt;</code> to open a new window and jump to the error there.</div>
<div class="old-help-para">When the quickfix window has been filled, two autocommand events are
triggered.  First the <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> option is set to "qf", which triggers the
FileType event (also see <a href="/neovim-docs-web/en/filetype#qf.vim">qf.vim</a>).  Then the BufReadPost event is triggered,
using "quickfix" for the buffer name.  This can be used to perform some action
on the listed errors.  Example:<pre>au BufReadPost quickfix  setlocal modifiable
        \ | silent exe 'g/^/s//\=line(".") .. " "/'
        \ | setlocal nomodifiable</pre>
This prepends the line number to each line.  Note the use of "\=" in the
substitute string of the ":s" command, which is used to evaluate an
expression.
The BufWinEnter event is also triggered, again using "quickfix" for the buffer
name.</div>
<div class="old-help-para">Note: When adding to an existing quickfix list the autocommand are not
triggered.</div>
<div class="old-help-para">Note: Making changes in the quickfix window has no effect on the list of
errors.  <a href="/neovim-docs-web/en/options#'modifiable'">'modifiable'</a> is off to avoid making changes.  If you delete or insert
lines anyway, the relation between the text and the error number is messed up.
If you really want to do this, you could write the contents of the quickfix
window to a file and use ":cfile" to have it parsed and used as the new error
list.</div>
<div class="old-help-para">						<a name="location-list-window"></a><code class="help-tag-right">location-list-window</code>
The location list window displays the entries in a location list.  When you
open a location list window, it is created below the current window and
displays the location list for the current window.  The location list window
is similar to the quickfix window, except that you can have more than one
location list window open at a time. When you use a location list command in
this window, the displayed location list is used.</div>
<div class="old-help-para">When you select a file from the location list window, the following steps are
used to find a window to edit the file:</div>
<div class="old-help-para">1. If a non-quickfix window associated with the location list is present in
   the current tabpage, then that window is used.
2. If the above step fails and if the file is already opened in another window
   in the current tabpage, then that window is used.
3. If the above step fails and <a href="/neovim-docs-web/en/options#'switchbuf'">'switchbuf'</a> contains "usetab" and if the file
   is opened in a window in any one of the tabpages, then that window is used.
4. If the above step fails then a window in the current tabpage showing a
   buffer with <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> not set is used.
5. If the above step fails, then the file is edited in a new window.</div>
<div class="old-help-para">In all of the above cases, if the location list for the selected window is not
yet set, then it is set to the location list displayed in the location list
window.</div>
<div class="old-help-para">							<a name="quickfix-window-ID"></a><code class="help-tag-right">quickfix-window-ID</code>
You can use the <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> and <a href="/neovim-docs-web/en/builtin#getloclist()">getloclist()</a> functions to obtain the
window ID of the quickfix window and location list window respectively (if
present).  Examples:<pre>echo getqflist({'winid' : 1}).winid
echo getloclist(2, {'winid' : 1}).winid</pre></div>
<div class="old-help-para">							<a name="getqflist-examples"></a><code class="help-tag-right">getqflist-examples</code>
The <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> and <a href="/neovim-docs-web/en/builtin#getloclist()">getloclist()</a> functions can be used to get the various
attributes of a quickfix and location list respectively. Some examples for
using these functions are below:
<pre>" get the title of the current quickfix list
:echo getqflist({'title' : 0}).title

" get the identifier of the current quickfix list
:let qfid = getqflist({'id' : 0}).id

" get the identifier of the fourth quickfix list in the stack
:let qfid = getqflist({'nr' : 4, 'id' : 0}).id

" check whether a quickfix list with a specific identifier exists
:if getqflist({'id' : qfid}).id == qfid

" get the index of the current quickfix list in the stack
:let qfnum = getqflist({'nr' : 0}).nr

" get the items of a quickfix list specified by an identifier
:echo getqflist({'id' : qfid, 'items' : 0}).items

" get the number of entries in a quickfix list specified by an id
:echo getqflist({'id' : qfid, 'size' : 0}).size

" get the context of the third quickfix list in the stack
:echo getqflist({'nr' : 3, 'context' : 0}).context

" get the number of quickfix lists in the stack
:echo getqflist({'nr' : '$'}).nr

" get the number of times the current quickfix list is changed
:echo getqflist({'changedtick' : 0}).changedtick

" get the current entry in a quickfix list specified by an identifier
:echo getqflist({'id' : qfid, 'idx' : 0}).idx

" get all the quickfix list attributes using an identifier
:echo getqflist({'id' : qfid, 'all' : 0})

" parse text from a List of lines and return a quickfix list
:let myList = ["a.java:10:L10", "b.java:20:L20"]
:echo getqflist({'lines' : myList}).items

" parse text using a custom 'efm' and return a quickfix list
:echo getqflist({'lines' : ['a.c#10#Line 10'], 'efm':'%f#%l#%m'}).items

" get the quickfix list window id
:echo getqflist({'winid' : 0}).winid

" get the quickfix list window buffer number
:echo getqflist({'qfbufnr' : 0}).qfbufnr

" get the context of the current location list
:echo getloclist(0, {'context' : 0}).context

" get the location list window id of the third window
:echo getloclist(3, {'winid' : 0}).winid

" get the location list window buffer number of the third window
:echo getloclist(3, {'qfbufnr' : 0}).qfbufnr

" get the file window id of a location list window (winnr: 4)
:echo getloclist(4, {'filewinid' : 0}).filewinid</pre></div>
<div class="old-help-para">							<a name="setqflist-examples"></a><code class="help-tag-right">setqflist-examples</code>
The <a href="/neovim-docs-web/en/builtin#setqflist()">setqflist()</a> and <a href="/neovim-docs-web/en/builtin#setloclist()">setloclist()</a> functions can be used to set the various
attributes of a quickfix and location list respectively. Some examples for
using these functions are below:
<pre>" create an empty quickfix list with a title and a context
:let t = 'Search results'
:let c = {'cmd' : 'grep'}
:call setqflist([], ' ', {'title' : t, 'context' : c})

" set the title of the current quickfix list
:call setqflist([], 'a', {'title' : 'Mytitle'})

" change the current entry in the list specified by an identifier
:call setqflist([], 'a', {'id' : qfid, 'idx' : 10})

" set the context of a quickfix list specified by an identifier
:call setqflist([], 'a', {'id' : qfid, 'context' : {'val' : 100}})

" create a new quickfix list from a command output
:call setqflist([], ' ', {'lines' : systemlist('grep -Hn main *.c')})

" parse text using a custom efm and add to a particular quickfix list
:call setqflist([], 'a', {'id' : qfid,
            \ 'lines' : ["a.c#10#L10", "b.c#20#L20"], 'efm':'%f#%l#%m'})

" add items to the quickfix list specified by an identifier
:let newItems = [{'filename' : 'a.txt', 'lnum' : 10, 'text' : "Apple"},
                \ {'filename' : 'b.txt', 'lnum' : 20, 'text' : "Orange"}]
:call setqflist([], 'a', {'id' : qfid, 'items' : newItems})

" empty a quickfix list specified by an identifier
:call setqflist([], 'r', {'id' : qfid, 'items' : []})

" free all the quickfix lists in the stack
:call setqflist([], 'f')

" set the title of the fourth quickfix list
:call setqflist([], 'a', {'nr' : 4, 'title' : 'SomeTitle'})

" create a new quickfix list at the end of the stack
:call setqflist([], ' ', {'nr' : '$',
                    \ 'lines' : systemlist('grep -Hn class *.java')})

" create a new location list from a command output
:call setloclist(0, [], ' ', {'lines' : systemlist('grep -Hn main *.c')})

" replace the location list entries for the third window
:call setloclist(3, [], 'r', {'items' : newItems})</pre></div>
<div class="old-help-para"><h2 class="help-heading">3. Using more than one list of errors<span class="help-heading-tags">			<a name="quickfix-error-lists"></a><span class="help-tag">quickfix-error-lists</span></span></h2></div>
<div class="old-help-para">So far has been assumed that there is only one list of errors.  Actually the
ten last used lists are remembered.  When starting a new list, the previous
ones are automatically kept.  Two commands can be used to access older error
lists.  They set one of the existing error lists as the current one.</div>
<div class="old-help-para">						<a name="%3Acolder"></a><code class="help-tag-right">:colder</code> <a name="%3Acol"></a><code class="help-tag">:col</code> <a name="E380"></a><code class="help-tag">E380</code>
:col[der] [count]	Go to older error list.  When [count] is given, do
			this [count] times.  When already at the oldest error
			list, an error message is given.</div>
<div class="old-help-para">						<a name="%3Alolder"></a><code class="help-tag-right">:lolder</code> <a name="%3Alol"></a><code class="help-tag">:lol</code>
:lol[der] [count]	Same as <code>:colder</code>, except use the location list for
			the current window instead of the quickfix list.</div>
<div class="old-help-para">						<a name="%3Acnewer"></a><code class="help-tag-right">:cnewer</code> <a name="%3Acnew"></a><code class="help-tag">:cnew</code> <a name="E381"></a><code class="help-tag">E381</code>
:cnew[er] [count]	Go to newer error list.  When [count] is given, do
			this [count] times.  When already at the newest error
			list, an error message is given.</div>
<div class="old-help-para">						<a name="%3Alnewer"></a><code class="help-tag-right">:lnewer</code> <a name="%3Alnew"></a><code class="help-tag">:lnew</code>
:lnew[er] [count]	Same as <code>:cnewer</code>, except use the location list for
			the current window instead of the quickfix list.</div>
<div class="old-help-para">						<a name="%3Achistory"></a><code class="help-tag-right">:chistory</code> <a name="%3Achi"></a><code class="help-tag">:chi</code>
:[count]chi[story]	Show the list of error lists.  The current list is
			marked with "&gt;".  The output looks like:
<div class="help-column_heading">			  error list 1 of 3; 43 errors   :make</div><div class="help-column_heading">			&gt; error list 2 of 3; 0 errors    :helpgrep tag</div>error list 3 of 3; 15 errors   :grep ex_help.c</div>
<div class="old-help-para">			When [count] is given, then the count'th quickfix
			list is made the current list. Example:<pre>" Make the 4th quickfix list current
:4chistory</pre></div>
<div class="old-help-para">						<a name="%3Alhistory"></a><code class="help-tag-right">:lhistory</code> <a name="%3Alhi"></a><code class="help-tag">:lhi</code>
:[count]lhi[story]	Show the list of location lists, otherwise like
			<code>:chistory</code>.</div>
<div class="old-help-para">When adding a new error list, it becomes the current list.</div>
<div class="old-help-para">When ":colder" has been used and ":make" or ":grep" is used to add a new error
list, one newer list is overwritten.  This is especially useful if you are
browsing with ":grep" <a href="/neovim-docs-web/en/quickfix#grep">grep</a>.  If you want to keep the more recent error
lists, use ":cnewer 99" first.</div>
<div class="old-help-para">To get the number of lists in the quickfix and location list stack, you can
use the <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> and <a href="/neovim-docs-web/en/builtin#getloclist()">getloclist()</a> functions respectively with the list
number set to the special value '$'. Examples:<pre>echo getqflist({'nr' : '$'}).nr
echo getloclist(3, {'nr' : '$'}).nr</pre>
To get the number of the current list in the stack:<pre>echo getqflist({'nr' : 0}).nr</pre></div>
<div class="old-help-para"><h2 class="help-heading">4. Using :make<span class="help-heading-tags">						<a name="%3Amake_makeprg"></a><span class="help-tag">:make_makeprg</span></span></h2></div>
<div class="old-help-para">							<a name="%3Amak"></a><code class="help-tag-right">:mak</code> <a name="%3Amake"></a><code class="help-tag">:make</code>
:mak[e][!] [arguments]	1. All relevant <a href="/neovim-docs-web/en/autocmd#QuickFixCmdPre">QuickFixCmdPre</a> autocommands are
			   executed.
			2. If the <a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a> option is on, write any changed
			   buffers
			3. An errorfile name is made from <a href="/neovim-docs-web/en/options#'makeef'">'makeef'</a>.  If
			   <a href="/neovim-docs-web/en/options#'makeef'">'makeef'</a> doesn't contain "##", and a file with this
			   name already exists, it is deleted.
			4. The program given with the <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> option is
			   started (default "make") with the optional
			   [arguments] and the output is saved in the
			   errorfile (for Unix it is also echoed on the
			   screen).
			5. The errorfile is read using <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a>.
			6. All relevant <a href="/neovim-docs-web/en/autocmd#QuickFixCmdPost">QuickFixCmdPost</a> autocommands are
			   executed.  See example below.
			7. If [!] is not given the first error is jumped to.
			8. The errorfile is deleted.
			9. You can now move through the errors with commands
			   like <a href="/neovim-docs-web/en/quickfix#%3Acnext">:cnext</a> and <a href="/neovim-docs-web/en/quickfix#%3Acprevious">:cprevious</a>, see above.
			This command does not accept a comment, any "
			characters are considered part of the arguments.
			If the encoding of the program output differs from the
			<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> option, you can use the <a href="/neovim-docs-web/en/options#'makeencoding'">'makeencoding'</a>
			option to specify the encoding.</div>
<div class="old-help-para">							<a name="%3Almak"></a><code class="help-tag-right">:lmak</code> <a name="%3Almake"></a><code class="help-tag">:lmake</code>
:lmak[e][!] [arguments]
			Same as ":make", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">The ":make" command executes the command given with the <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> option.
This is done by passing the command to the shell given with the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a>
option.  This works almost like typing</div>
<div class="old-help-para">	":!{makeprg} [arguments] <code>{shellpipe}</code> <code>{errorfile}</code>".</div>
<div class="old-help-para"><code>{makeprg}</code> is the string given with the <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> option.  Any command can be
used, not just "make".  Characters '%' and '#' are expanded as usual on a
command-line.  You can use "%&lt;" to insert the current file name without
extension, or "#&lt;" to insert the alternate file name without extension, for
example:<pre>:set makeprg=make\ #&lt;.o</pre>
[arguments] is anything that is typed after ":make".
<code>{shellpipe}</code> is the <a href="/neovim-docs-web/en/options#'shellpipe'">'shellpipe'</a> option.
<code>{errorfile}</code> is the <a href="/neovim-docs-web/en/options#'makeef'">'makeef'</a> option, with ## replaced to make it unique.</div>
<div class="old-help-para">The placeholder "$*" can be used for the argument list in <code>{makeprg}</code> if the
command needs some additional characters after its arguments.  The $* is
replaced then by all arguments.  Example:<pre>:set makeprg=latex\ \\\\nonstopmode\ \\\\input\\{$*}</pre>
or simpler<pre>:let &amp;mp = 'latex \\nonstopmode \\input\{$*}'</pre>
"$*" can be given multiple times, for example:<pre>:set makeprg=gcc\ -o\ $*\ $*</pre>
The <a href="/neovim-docs-web/en/options#'shellpipe'">'shellpipe'</a> option defaults to "&gt;%s 2&gt;&amp;1" for Win32.
This means that the output of the compiler is saved in a file and not shown on
the screen directly.  For Unix "| tee" is used.  The compiler output is shown
on the screen and saved in a file the same time.  Depending on the shell used
"|&amp; tee" or "2&gt;&amp;1| tee" is the default, so stderr output will be included.</div>
<div class="old-help-para">If <a href="/neovim-docs-web/en/options#'shellpipe'">'shellpipe'</a> is empty, the <code>{errorfile}</code> part will be omitted.  This is useful
for compilers that write to an errorfile themselves.</div>
<div class="old-help-para"><div class="help-column_heading">Using QuickFixCmdPost to fix the encoding</div></div>
<div class="old-help-para">It may be that <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is set to an encoding that differs from the messages
your build program produces.  This example shows how to fix this after Vim has
read the error messages:<pre>function QfMakeConv()
   let qflist = getqflist()
   for i in qflist
      let i.text = iconv(i.text, "cp936", "utf-8")
   endfor
   call setqflist(qflist)
endfunction

au QuickfixCmdPost make call QfMakeConv()</pre>
(Example by Faque Cheng)
Another option is using <a href="/neovim-docs-web/en/options#'makeencoding'">'makeencoding'</a>.</div>
<div class="old-help-para"><h2 class="help-heading">5. Using :vimgrep and :grep<span class="help-heading-tags">				<a name="grep"></a><span class="help-tag">grep</span> <a name="lid"></a><span class="help-tag">lid</span></span></h2></div>
<div class="old-help-para">Vim has two ways to find matches for a pattern: Internal and external.  The
advantage of the internal grep is that it works on all systems and uses the
powerful Vim search patterns.  An external grep program can be used when the
Vim grep does not do what you want.</div>
<div class="old-help-para">The internal method will be slower, because files are read into memory.  The
advantages are:
<div class="help-li" style=""> Line separators and encoding are automatically recognized, as if a file is
  being edited.
</div><div class="help-li" style=""> Uses Vim search patterns.  Multi-line patterns can be used.
</div><div class="help-li" style=""> When plugins are enabled: compressed and remote files can be searched.
	<a href="/neovim-docs-web/en/pi_gzip#gzip">gzip</a> <a href="/neovim-docs-web/en/pi_netrw#netrw">netrw</a>
</div></div>
<div class="old-help-para">To be able to do this Vim loads each file as if it is being edited.  When
there is no match in the file the associated buffer is wiped out again.  The
<a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> option is ignored here to avoid running out of memory or file
descriptors when searching many files.  However, when the <a href="/neovim-docs-web/en/windows#%3Ahide">:hide</a> command
modifier is used the buffers are kept loaded.  This makes following searches
in the same files a lot faster.</div>
<div class="old-help-para">Note that <a href="/neovim-docs-web/en/quickfix#%3Acopen">:copen</a> (or <a href="/neovim-docs-web/en/quickfix#%3Alopen">:lopen</a> for <a href="/neovim-docs-web/en/quickfix#%3Algrep">:lgrep</a>) may be used to open a buffer
containing the search results in linked form.  The <a href="/neovim-docs-web/en/various#%3Asilent">:silent</a> command may be
used to suppress the default full screen grep output.  The ":grep!" form of
the <a href="/neovim-docs-web/en/quickfix#%3Agrep">:grep</a> command doesn't jump to the first match automatically.  These
commands can be combined to create a NewGrep command:<pre>command! -nargs=+ NewGrep execute 'silent grep! &lt;args&gt;' | copen 42</pre>
5.1 using Vim's internal grep</div>
<div class="old-help-para">					<a name="%3Avim"></a><code class="help-tag-right">:vim</code> <a name="%3Avimgrep"></a><code class="help-tag">:vimgrep</code> <a name="E682"></a><code class="help-tag">E682</code> <a name="E683"></a><code class="help-tag">E683</code>
:vim[grep][!] /{pattern}/[g][j][f] <code>{file}</code> ...
			Search for <code>{pattern}</code> in the files <code>{file}</code> ... and set
			the error list to the matches.  Files matching
			<a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a> are ignored; files in <a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> are
			searched last.</div>
<div class="old-help-para">			<code>{pattern}</code> is a Vim search pattern.  Instead of
			enclosing it in / any non-ID character (see
			<a href="/neovim-docs-web/en/options#'isident'">'isident'</a>) can be used, so long as it does not
			appear in <code>{pattern}</code>.
			<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> applies.  To overrule it put <a href="/neovim-docs-web/en/pattern#%2F%5Cc">/\c</a> in the
			pattern to ignore case or <a href="/neovim-docs-web/en/pattern#%2F%5CC">/\C</a> to match case.
			<a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> is not used.
			If <code>{pattern}</code> is empty (e.g. // is specified), the last
			used search pattern is used. <a href="/neovim-docs-web/en/pattern#last-pattern">last-pattern</a></div>
<div class="old-help-para">			Flags:
			'g'  Without the 'g' flag each line is added only
			     once.  With 'g' every match is added.</div>
<div class="old-help-para">			'j'  Without the 'j' flag Vim jumps to the first
			     match.  With 'j' only the quickfix list is
			     updated.  With the [!] any changes in the current
			     buffer are abandoned.</div>
<div class="old-help-para">			'f'  When the 'f' flag is specified, fuzzy string
			     matching is used to find matching lines. In this
			     case, <code>{pattern}</code> is treated as a literal string
			     instead of a regular expression.  See
			     <a href="/neovim-docs-web/en/pattern#fuzzy-matching">fuzzy-matching</a> for more information about fuzzy
			     matching strings.</div>
<div class="old-help-para">			<a href="/neovim-docs-web/en/autocmd#QuickFixCmdPre">QuickFixCmdPre</a> and <a href="/neovim-docs-web/en/autocmd#QuickFixCmdPost">QuickFixCmdPost</a> are triggered.
			A file that is opened for matching may use a buffer
			number, but it is reused if possible to avoid
			consuming buffer numbers.</div>
<div class="old-help-para">:{count}vim[grep] ...
			When a number is put before the command this is used
			as the maximum number of matches to find.  Use
			":1vimgrep pattern file" to find only the first.
			Useful if you only want to check if there is a match
			and quit quickly when it's found.</div>
<div class="old-help-para">			Every second or so the searched file name is displayed
			to give you an idea of the progress made.
			Examples:<pre>:vimgrep /an error/ *.c
:vimgrep /\&lt;FileName\&gt;/ *.h include/*
:vimgrep /myfunc/ **/*.c</pre></div>
<div class="old-help-para">			For the use of "**" see <a href="/neovim-docs-web/en/editing#starstar-wildcard">starstar-wildcard</a>.</div>
<div class="old-help-para">:vim[grep][!] <code>{pattern}</code> <code>{file}</code> ...
			Like above, but instead of enclosing the pattern in a
			non-ID character use a white-separated pattern.  The
			pattern must start with an ID character.
			Example:<pre>:vimgrep Error *.c</pre></div>
<div class="old-help-para">							<a name="%3Alv"></a><code class="help-tag-right">:lv</code> <a name="%3Alvimgrep"></a><code class="help-tag">:lvimgrep</code>
:lv[imgrep][!] /{pattern}/[g][j][f] <code>{file}</code> ...
:lv[imgrep][!] <code>{pattern}</code> <code>{file}</code> ...
			Same as ":vimgrep", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">						<a name="%3Avimgrepa"></a><code class="help-tag-right">:vimgrepa</code> <a name="%3Avimgrepadd"></a><code class="help-tag">:vimgrepadd</code>
:vimgrepa[dd][!] /{pattern}/[g][j][f] <code>{file}</code> ...
:vimgrepa[dd][!] <code>{pattern}</code> <code>{file}</code> ...
			Just like ":vimgrep", but instead of making a new list
			of errors the matches are appended to the current
			list.</div>
<div class="old-help-para">						<a name="%3Alvimgrepa"></a><code class="help-tag-right">:lvimgrepa</code> <a name="%3Alvimgrepadd"></a><code class="help-tag">:lvimgrepadd</code>
:lvimgrepa[dd][!] /{pattern}/[g][j][f] <code>{file}</code> ...
:lvimgrepa[dd][!] <code>{pattern}</code> <code>{file}</code> ...
			Same as ":vimgrepadd", except the location list for
			the current window is used instead of the quickfix
			list.</div>
<div class="old-help-para">5.2 External grep</div>
<div class="old-help-para">Vim can interface with "grep" and grep-like programs (such as the GNU
id-utils) in a similar way to its compiler integration (see <a href="/neovim-docs-web/en/quickfix#%3Amake">:make</a> above).</div>
<div class="old-help-para">[Unix trivia: The name for the Unix "grep" command comes from ":g/re/p", where
"re" stands for Regular Expression.]</div>
<div class="old-help-para">							    <a name="%3Agr"></a><code class="help-tag-right">:gr</code> <a name="%3Agrep"></a><code class="help-tag">:grep</code>
:gr[ep][!] [arguments]	Just like ":make", but use <a href="/neovim-docs-web/en/options#'grepprg'">'grepprg'</a> instead of
			<a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> and <a href="/neovim-docs-web/en/options#'grepformat'">'grepformat'</a> instead of <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a>.
			When <a href="/neovim-docs-web/en/options#'grepprg'">'grepprg'</a> is "internal" this works like
			<a href="/neovim-docs-web/en/quickfix#%3Avimgrep">:vimgrep</a>.  Note that the pattern needs to be
			enclosed in separator characters then.
			If the encoding of the program output differs from the
			<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> option, you can use the <a href="/neovim-docs-web/en/options#'makeencoding'">'makeencoding'</a>
			option to specify the encoding.</div>
<div class="old-help-para">							    <a name="%3Algr"></a><code class="help-tag-right">:lgr</code> <a name="%3Algrep"></a><code class="help-tag">:lgrep</code>
:lgr[ep][!] [arguments]	Same as ":grep", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">							<a name="%3Agrepa"></a><code class="help-tag-right">:grepa</code> <a name="%3Agrepadd"></a><code class="help-tag">:grepadd</code>
:grepa[dd][!] [arguments]
			Just like ":grep", but instead of making a new list of
			errors the matches are appended to the current list.
			Example:<pre>:call setqflist([])
:bufdo grepadd! something %</pre></div>
<div class="old-help-para">			The first command makes a new error list which is
			empty.  The second command executes "grepadd" for each
			listed buffer.  Note the use of ! to avoid that
			":grepadd" jumps to the first error, which is not
			allowed with <a href="/neovim-docs-web/en/windows#%3Abufdo">:bufdo</a>.
			An example that uses the argument list and avoids
			errors for files without matches:<pre>:silent argdo try
  \ | grepadd! something %
  \ | catch /E480:/
  \ | endtry"</pre></div>
<div class="old-help-para">			If the encoding of the program output differs from the
			<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> option, you can use the <a href="/neovim-docs-web/en/options#'makeencoding'">'makeencoding'</a>
			option to specify the encoding.</div>
<div class="old-help-para">							<a name="%3Algrepa"></a><code class="help-tag-right">:lgrepa</code> <a name="%3Algrepadd"></a><code class="help-tag">:lgrepadd</code>
:lgrepa[dd][!] [arguments]
			Same as ":grepadd", except the location list for the
			current window is used instead of the quickfix list.</div>
<div class="old-help-para">5.3 Setting up external grep</div>
<div class="old-help-para">If you have a standard "grep" program installed, the :grep command may work
well with the defaults.  The syntax is very similar to the standard command:<pre>:grep foo *.c</pre>
Will search all files with the .c extension for the substring "foo".  The
arguments to :grep are passed straight to the "grep" program, so you can use
whatever options your "grep" supports.</div>
<div class="old-help-para">By default, :grep invokes grep with the -n option (show file and line
numbers).  You can change this with the <a href="/neovim-docs-web/en/options#'grepprg'">'grepprg'</a> option.  You will need to set
<a href="/neovim-docs-web/en/options#'grepprg'">'grepprg'</a> if:</div>
<div class="old-help-para">a)	You are using a program that isn't called "grep"
b)	You have to call grep with a full path
c)	You want to pass other options automatically (e.g. case insensitive
	search.)</div>
<div class="old-help-para">Once "grep" has executed, Vim parses the results using the <a href="/neovim-docs-web/en/options#'grepformat'">'grepformat'</a>
option.  This option works in the same way as the <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> option - see
that for details.  You may need to change <a href="/neovim-docs-web/en/options#'grepformat'">'grepformat'</a> from the default if
your grep outputs in a non-standard format, or you are using some other
program with a special format.</div>
<div class="old-help-para">Once the results are parsed, Vim loads the first file containing a match and
jumps to the appropriate line, in the same way that it jumps to a compiler
error in <a href="/neovim-docs-web/en/quickfix#quickfix">quickfix</a> mode.  You can then use the <a href="/neovim-docs-web/en/quickfix#%3Acnext">:cnext</a>, <a href="/neovim-docs-web/en/quickfix#%3Aclist">:clist</a>, etc.
commands to see the other matches.</div>
<div class="old-help-para">5.4 Using :grep with id-utils</div>
<div class="old-help-para">You can set up :grep to work with the GNU id-utils like this:<pre>:set grepprg=lid\ -Rgrep\ -s
:set grepformat=%f:%l:%m</pre>
then<pre>:grep (regexp)</pre>
works just as you'd expect.
(provided you remembered to mkid first :)</div>
<div class="old-help-para">5.5 Browsing source code with :vimgrep or :grep</div>
<div class="old-help-para">Using the stack of error lists that Vim keeps, you can browse your files to
look for functions and the functions they call.  For example, suppose that you
have to add an argument to the read_file() function.  You enter this command:<pre>:vimgrep /\&lt;read_file\&gt;/ *.c</pre>
You use ":cn" to go along the list of matches and add the argument.  At one
place you have to get the new argument from a higher level function msg(), and
need to change that one too.  Thus you use:<pre>:vimgrep /\&lt;msg\&gt;/ *.c</pre>
While changing the msg() functions, you find another function that needs to
get the argument from a higher level.  You can again use ":vimgrep" to find
these functions.  Once you are finished with one function, you can use<pre>:colder</pre>
to go back to the previous one.</div>
<div class="old-help-para">This works like browsing a tree: ":vimgrep" goes one level deeper, creating a
list of branches.  ":colder" goes back to the previous level.  You can mix
this use of ":vimgrep" and "colder" to browse all the locations in a tree-like
way.  If you do this consistently, you will find all locations without the
need to write down a "todo" list.</div>
<div class="old-help-para"><h2 class="help-heading">6. Selecting a compiler<span class="help-heading-tags">					<a name="compiler-select"></a><span class="help-tag">compiler-select</span></span></h2></div>
<div class="old-help-para">						<a name="%3Acomp"></a><code class="help-tag-right">:comp</code> <a name="%3Acompiler"></a><code class="help-tag">:compiler</code> <a name="E666"></a><code class="help-tag">E666</code>
:comp[iler][!] <code>{name}</code>		Set options to work with compiler <code>{name}</code>.
				Without the "!" options are set for the
				current buffer.  With "!" global options are
				set.
				If you use ":compiler foo" in "file.foo" and
				then ":compiler! bar" in another buffer, Vim
				will keep on using "foo" in "file.foo".</div>
<div class="old-help-para">The Vim plugins in the "compiler" directory will set options to use the
selected compiler.  For <code>:compiler</code> local options are set, for <code>:compiler!</code>
global options.
							<a name="current_compiler"></a><code class="help-tag-right">current_compiler</code>
To support older Vim versions, the plugins always use "current_compiler" and
not "b:current_compiler".  What the command actually does is the following:</div>
<div class="old-help-para"><div class="help-li" style=""> Delete the "current_compiler" and "b:current_compiler" variables.
</div><div class="help-li" style=""> Define the "CompilerSet" user command.  With "!" it does ":set", without "!"
  it does ":setlocal".
</div><div class="help-li" style=""> Execute ":runtime! compiler/{name}.(vim|lua)".  The plugins are expected to
  set options with "CompilerSet" and set the "current_compiler" variable to the
  name of the compiler.
</div><div class="help-li" style=""> Delete the "CompilerSet" user command.
</div><div class="help-li" style=""> Set "b:current_compiler" to the value of "current_compiler".
</div><div class="help-li" style=""> Without "!" the old value of "current_compiler" is restored.
</div></div>
<div class="old-help-para">For writing a compiler plugin, see <a href="/neovim-docs-web/en/usr_41#write-compiler-plugin">write-compiler-plugin</a>.</div>
<div class="old-help-para"><h3 class="help-heading">GCC<span class="help-heading-tags">					<a name="quickfix-gcc"></a><span class="help-tag">quickfix-gcc</span>  	<a name="compiler-gcc"></a><span class="help-tag">compiler-gcc</span></span></h3></div>
<div class="old-help-para">There's one variable you can set for the GCC compiler:</div>
<div class="old-help-para">g:compiler_gcc_ignore_unmatched_lines
				Ignore lines that don't match any patterns
				defined for GCC.  Useful if output from
				commands run from make are generating false
				positives.</div>
<div class="old-help-para"><h3 class="help-heading">PERL<span class="help-heading-tags">					<a name="quickfix-perl"></a><span class="help-tag">quickfix-perl</span> <a name="compiler-perl"></a><span class="help-tag">compiler-perl</span></span></h3></div>
<div class="old-help-para">The Perl compiler plugin doesn't actually compile, but invokes Perl's internal
syntax checking feature and parses the output for possible errors so you can
correct them in quick-fix mode.</div>
<div class="old-help-para">Warnings are forced regardless of "no warnings" or "$^W = 0" within the file
being checked.  To disable this set g:perl_compiler_force_warnings to a zero
value.  For example:<pre>let g:perl_compiler_force_warnings = 0</pre>
<h3 class="help-heading">PYUNIT COMPILER<span class="help-heading-tags">						<a name="compiler-pyunit"></a><span class="help-tag">compiler-pyunit</span></span></h3></div>
<div class="old-help-para">This is not actually a compiler, but a unit testing framework for the
Python language.  It is included into standard Python distribution
starting from version 2.0.  For older versions, you can get it from
<a href="https://pyunit.sourceforge.net">https://pyunit.sourceforge.net</a>.</div>
<div class="old-help-para">When you run your tests with the help of the framework, possible errors
are parsed by Vim and presented for you in quick-fix mode.</div>
<div class="old-help-para">Unfortunately, there is no standard way to run the tests.
The alltests.py script seems to be used quite often, that's all.
Useful values for the <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> options therefore are:
 setlocal makeprg=./alltests.py " Run a testsuite
 setlocal makeprg=python\ %:S   " Run a single testcase</div>
<div class="old-help-para"><h3 class="help-heading">TEX COMPILER<span class="help-heading-tags">						<a name="compiler-tex"></a><span class="help-tag">compiler-tex</span></span></h3></div>
<div class="old-help-para">Included in the distribution compiler for TeX ($VIMRUNTIME/compiler/tex.vim)
uses make command if possible.  If the compiler finds a file named "Makefile"
or "makefile" in the current directory, it supposes that you want to process
yourTeX files with make, and the makefile does the right work.  In this case
compiler sets <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> forTeX output and leaves <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> untouched.  If
neither "Makefile" nor "makefile" is found, the compiler will not use make.
You can force the compiler to ignore makefiles by defining
b:tex_ignore_makefile or g:tex_ignore_makefile variable (they are checked for
existence only).</div>
<div class="old-help-para">If the compiler chose not to use make, it needs to choose a right program for
processing your input.  If b:tex_flavor or g:tex_flavor (in this precedence)
variable exists, it defines TeX flavor for :make (actually, this is the name
of executed command), and if both variables do not exist, it defaults to
"latex".  For example, while editing chapter2.tex \input-ed from mypaper.tex
written in AMS-TeX:<pre>:let b:tex_flavor = 'amstex'
:compiler tex</pre></div>
<div class="old-help-para">	[editing...]<pre>:make mypaper</pre>
Note that you must specify a name of the file to process as an argument (to
process the right file when editing \input-ed or \include-ed file; portable
solution for substituting % for no arguments is welcome).  This is not in the
semantics of make, where you specify a target, not source, but you may specify
filename without extension ".tex" and mean this as "make filename.dvi or
filename.pdf or filename.some_result_extension according to compiler".</div>
<div class="old-help-para">Note: tex command line syntax is set to usable both for MikTeX (suggestion
by Srinath Avadhanula) and teTeX (checked by Artem Chuprina).  Suggestion
from <a href="/neovim-docs-web/en/quickfix#errorformat-LaTeX">errorformat-LaTeX</a> is too complex to keep it working for different
shells and OSes and also does not allow to use other available TeX options,
if any.  If your TeX doesn't support "-interaction=nonstopmode", please
report it with different means to express \nonstopmode from the command line.</div>
<div class="old-help-para"><h2 class="help-heading">7. The error format<span class="help-heading-tags">					<a name="error-file-format"></a><span class="help-tag">error-file-format</span></span></h2></div>
<div class="old-help-para">					<a name="errorformat"></a><code class="help-tag-right">errorformat</code> <a name="E372"></a><code class="help-tag">E372</code> <a name="E373"></a><code class="help-tag">E373</code> <a name="E374"></a><code class="help-tag">E374</code>
						<a name="E375"></a><code class="help-tag-right">E375</code> <a name="E376"></a><code class="help-tag">E376</code> <a name="E377"></a><code class="help-tag">E377</code> <a name="E378"></a><code class="help-tag">E378</code>
The <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> option specifies a list of formats that are recognized.  The
first format that matches with an error message is used.  You can add several
formats for different messages your compiler produces, or even entries for
multiple compilers.  See <a href="/neovim-docs-web/en/quickfix#efm-entries">efm-entries</a>.</div>
<div class="old-help-para">Each entry in <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> is a scanf-like string that describes the format.
First, you need to know how scanf works.  Look in the documentation of your
C compiler.  Below you find the % items that Vim understands.  Others are
invalid.</div>
<div class="old-help-para">Special characters in <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> are comma and backslash.  See
<a href="/neovim-docs-web/en/quickfix#efm-entries">efm-entries</a> for how to deal with them.  Note that a literal "%" is matched
by "%%", thus it is not escaped with a backslash.
Keep in mind that in the <code>:make</code> and <code>:grep</code> output all NUL characters are
replaced with SOH (0x01).</div>
<div class="old-help-para">Note: By default the difference between upper and lowercase is ignored.  If
you want to match case, add "\C" to the pattern <a href="/neovim-docs-web/en/pattern#%2F%5CC">/\C</a>.</div>
<div class="old-help-para">Vim will read lines of any length, but only the first 4095 bytes are used, the
rest is ignored.  Items can only be 1023 bytes long.</div>
<div class="old-help-para">Basic items</div>
<div class="old-help-para">	%f		file name (finds a string)
	%o		module name (finds a string)
	%l		line number (finds a number)
	%e		end line number (finds a number)
	%c		column number (finds a number representing character
			column of the error, byte index, a <code>&lt;tab&gt;</code> is 1
			character column)
	%v		virtual column number (finds a number representing
			screen column of the error (1 <code>&lt;tab&gt;</code> == 8 screen
			columns))
	%k		end column number (finds a number representing
			the character column of the error, byte index, or a
			number representing screen end column of the error if
			it's used with %v)
	%t		error type (finds a single character):
			    e - error message
			    w - warning message
			    i - info message
			    n - note message
	%n		error number (finds a number)
	%m		error message (finds a string)
	%r		matches the "rest" of a single-line file message %O/P/Q
	%p		pointer line (finds a sequence of '-', '.', ' ' or
			tabs and uses the length for the column number)
	%*{conv}	any scanf non-assignable conversion
	%%		the single '%' character
	%s		search text (finds a string)</div>
<div class="old-help-para">The "%f" conversion may depend on the current <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> setting.  "~/" is
expanded to the home directory and environment variables are expanded.</div>
<div class="old-help-para">The "%f" and "%m" conversions have to detect the end of the string.  This
normally happens by matching following characters and items.  When nothing is
following the rest of the line is matched.  If "%f" is followed by a '%' or a
backslash, it will look for a sequence of <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> characters.</div>
<div class="old-help-para">On Windows a leading "C:" will be included in "%f", even when using "%f:".
This means that a file name which is a single alphabetical letter will not be
detected.</div>
<div class="old-help-para">The "%p" conversion is normally followed by a "^".  It's used for compilers
that output a line like:<pre>^</pre>
or<pre>---------^</pre>
to indicate the column of the error.  This is to be used in a multi-line error
message.  See <a href="/neovim-docs-web/en/quickfix#errorformat-javac">errorformat-javac</a> for a  useful example.</div>
<div class="old-help-para">The "%s" conversion specifies the text to search for, to locate the error line.
The text is used as a literal string.  The anchors "^" and "$" are added to
the text to locate the error line exactly matching the search text and the
text is prefixed with the "\V" atom to make it "very nomagic".  The "%s"
conversion can be used to locate lines without a line number in the error
output.  Like the output of the "grep" shell command.
When the pattern is present the line number will not be used.</div>
<div class="old-help-para">The "%o" conversion specifies the module name in quickfix entry.  If present
it will be used in quickfix error window instead of the filename.  The module
name is used only for displaying purposes, the file name is used when jumping
to the file.</div>
<div class="old-help-para">Changing directory</div>
<div class="old-help-para">The following uppercase conversion characters specify the type of special
format strings.  At most one of them may be given as a prefix at the beginning
of a single comma-separated format pattern.
Some compilers produce messages that consist of directory names that have to
be prepended to each file name read by %f (example: GNU make).  The following
codes can be used to scan these directory names; they will be stored in an
internal directory stack.					<a name="E379"></a><code class="help-tag-right">E379</code>
	%D		"enter directory" format string; expects a following
			  %f that finds the directory name
	%X		"leave directory" format string; expects following %f</div>
<div class="old-help-para">When defining an "enter directory" or "leave directory" format, the "%D" or
"%X" has to be given at the start of that substring.  Vim tracks the directory
changes and prepends the current directory to each erroneous file found with a
relative path.  See <a href="/neovim-docs-web/en/quickfix#quickfix-directory-stack">quickfix-directory-stack</a> for details, tips and
limitations.</div>
<div class="old-help-para">Multi-line messages				<a name="errorformat-multi-line"></a><code class="help-tag-right">errorformat-multi-line</code></div>
<div class="old-help-para">It is possible to read the output of programs that produce multi-line
messages, i.e. error strings that consume more than one line.  Possible
prefixes are:
	%E		start of a multi-line error message
	%W		start of a multi-line warning message
	%I		start of a multi-line informational message
	%N		start of a multi-line note message
	%A		start of a multi-line message (unspecified type)
	%&gt;		for next line start with current pattern again <a href="/neovim-docs-web/en/quickfix#efm-%25%3E">efm-%&gt;</a>
	%C		continuation of a multi-line message
	%Z		end of a multi-line message
These can be used with '+' and '-', see <a href="/neovim-docs-web/en/quickfix#efm-ignore">efm-ignore</a> below.</div>
<div class="old-help-para">Using "\n" in the pattern won't work to match multi-line messages.</div>
<div class="old-help-para">Example: Your compiler happens to write out errors in the following format
(leading line numbers not being part of the actual output):</div>
<div class="old-help-para"><div class="help-column_heading">     1	Error 275</div><div class="help-column_heading">     2	line 42</div><div class="help-column_heading">     3	column 3</div><div class="help-column_heading">     4	' ' expected after '--'</div></div>
<div class="old-help-para">The appropriate error format string has to look like this:<pre>:set efm=%EError\ %n,%Cline\ %l,%Ccolumn\ %c,%Z%m</pre>
And the <a href="/neovim-docs-web/en/quickfix#%3Aclist">:clist</a> error message generated for this error is:</div>
<div class="old-help-para"> 1:42 col 3 error 275:  ' ' expected after '--'</div>
<div class="old-help-para">Another example: Think of a Python interpreter that produces the following
error message (line numbers are not part of the actual output):</div>
<div class="old-help-para">     1	==============================================================
     2	FAIL: testGetTypeIdCachesResult (dbfacadeTest.DjsDBFacadeTest)
     3	--------------------------------------------------------------
     4	Traceback (most recent call last):
     5	  File "unittests/dbfacadeTest.py", line 89, in testFoo
     6	    self.assertEquals(34, dtid)
     7	  File "/usr/lib/python3.8/unittest.py", line 286, in
     8	 failUnlessEqual
     9	    raise self.failureException, \
    10	AssertionError: 34 != 33
    11
    12	--------------------------------------------------------------
    13	Ran 27 tests in 0.063s</div>
<div class="old-help-para">Say you want <a href="/neovim-docs-web/en/quickfix#%3Aclist">:clist</a> write the relevant information of this message only,
namely:
 5 unittests/dbfacadeTest.py:89:  AssertionError: 34 != 33</div>
<div class="old-help-para">Then the error format string could be defined as follows:<pre>:set efm=%C\ %.%#,%A\ \ File\ \"%f\"\\,\ line\ %l%.%#,%Z%[%^\ ]%\\@=%m</pre>
Note that the %C string is given before the %A here: since the expression
' %.%#' (which stands for the regular expression ' .*') matches every line
starting with a space, followed by any characters to the end of the line,
it also hides line 7 which would trigger a separate error message otherwise.
Error format strings are always parsed pattern by pattern until the first
match occurs.
							<a name="efm-%25%3E"></a><code class="help-tag-right">efm-%&gt;</code>
The %&gt; item can be used to avoid trying patterns that appear earlier in
<a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a>.  This is useful for patterns that match just about anything.
For example, if the error looks like this:</div>
<div class="old-help-para"><div class="help-column_heading">	Error in line 123 of foo.c:</div><div class="help-column_heading">	unknown variable "i"</div></div>
<div class="old-help-para">This can be found with:<pre>:set efm=xxx,%E%&gt;Error in line %l of %f:,%Z%m</pre>
Where "xxx" has a pattern that would also match the second line.</div>
<div class="old-help-para">Important: There is no memory of what part of the errorformat matched before;
every line in the error file gets a complete new run through the error format
lines.  For example, if one has:<pre>setlocal efm=aa,bb,cc,dd,ee</pre>
Where aa, bb, etc. are error format strings.  Each line of the error file will
be matched to the pattern aa, then bb, then cc, etc.  Just because cc matched
the previous error line does _not_ mean that dd will be tried first on the
current line, even if cc and dd are multi-line errorformat strings.</div>
<div class="old-help-para">Separate file name			<a name="errorformat-separate-filename"></a><code class="help-tag-right">errorformat-separate-filename</code></div>
<div class="old-help-para">These prefixes are useful if the file name is given once and multiple messages
follow that refer to this file name.
	%O		single-line file message: overread the matched part
	%P		single-line file message: push file %f onto the stack
	%Q		single-line file message: pop the last file from stack</div>
<div class="old-help-para">Example: Given a compiler that produces the following error logfile (without
leading line numbers):</div>
<div class="old-help-para">     1	[a1.tt]
     2	(1,17)  error: ';' missing
     3	(21,2)  warning: variable 'z' not defined
     4	(67,3)  error: end of file found before string ended
     5
     6	[a2.tt]
     7
     8	[a3.tt]
     9	NEW compiler v1.1
    10	(2,2)   warning: variable 'x' not defined
    11	(67,3)  warning: 's' already defined</div>
<div class="old-help-para">This logfile lists several messages for each file enclosed in [...] which are
properly parsed by an error format like this:<pre>:set efm=%+P[%f],(%l\\,%c)%*[\ ]%t%*[^:]:\ %m,%-Q</pre>
A call of <a href="/neovim-docs-web/en/quickfix#%3Aclist">:clist</a> writes them accordingly with their correct filenames:</div>
<div class="old-help-para">  2 a1.tt:1 col 17 error: ';' missing
  3 a1.tt:21 col 2 warning: variable 'z' not defined
  4 a1.tt:67 col 3 error: end of file found before string ended
  8 a3.tt:2 col 2 warning: variable 'x' not defined
  9 a3.tt:67 col 3 warning: 's' already defined</div>
<div class="old-help-para">Unlike the other prefixes that all match against whole lines, %P, %Q and %O
can be used to match several patterns in the same line.  Thus it is possible
to parse even nested files like in the following line:
  <code>{<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+quickfix.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/quickfix.html%0D%0DContext%3A%0D%0D%60%60%60%0DUnlike%20the%20other%20prefixes%20that%20all%20match%20against%20whole%20lines%2C%20%25P%2C%20%25Q%20and%20%25O%0Acan%20be%20used%20to%20match%20several%20patterns%20in%20the%20same%20line.%20%20Thus%20it%20is%20possible%0Ato%20parse%20even%20nested%20files%20like%20in%20the%20following%20line%3A%0A%20%20%7B%22file1%22%20%7B%22file2%22%20error1%7D%20error2%20%7B%22file3%22%20error3%20%7B%22file4%22%20error4%20error5%7D%7D%7D%0AThe%20%25O%20then%20parses%20over%20strings%20that%20do%20not%20contain%20any%20push%2Fpop%20file%20name%0Ainformation.%20%20See%20%7Cerrorformat-LaTeX%7C%20for%20an%20extended%20example.%0A%0D%60%60%60">"file1" {"</a>file2" error1}</code> error2 <code>{<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+quickfix.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/quickfix.html%0D%0DContext%3A%0D%0D%60%60%60%0DUnlike%20the%20other%20prefixes%20that%20all%20match%20against%20whole%20lines%2C%20%25P%2C%20%25Q%20and%20%25O%0Acan%20be%20used%20to%20match%20several%20patterns%20in%20the%20same%20line.%20%20Thus%20it%20is%20possible%0Ato%20parse%20even%20nested%20files%20like%20in%20the%20following%20line%3A%0A%20%20%7B%22file1%22%20%7B%22file2%22%20error1%7D%20error2%20%7B%22file3%22%20error3%20%7B%22file4%22%20error4%20error5%7D%7D%7D%0AThe%20%25O%20then%20parses%20over%20strings%20that%20do%20not%20contain%20any%20push%2Fpop%20file%20name%0Ainformation.%20%20See%20%7Cerrorformat-LaTeX%7C%20for%20an%20extended%20example.%0A%0D%60%60%60">"file3" error3 {"</a>file4" error4 error5}</code>}}
The %O then parses over strings that do not contain any push/pop file name
information.  See <a href="/neovim-docs-web/en/quickfix#errorformat-LaTeX">errorformat-LaTeX</a> for an extended example.</div>
<div class="old-help-para">Ignoring and using whole messages			<a name="efm-ignore"></a><code class="help-tag-right">efm-ignore</code></div>
<div class="old-help-para">The codes '+' or '-' can be combined with the uppercase codes above; in that
case they have to precede the letter, e.g. '%+A' or '%-G':
	%-		do not include the matching multi-line in any output
	%+		include the whole matching line in the %m error string</div>
<div class="old-help-para">One prefix is only useful in combination with '+' or '-', namely %G.  It parses
over lines containing general information like compiler version strings or
other headers that can be skipped.
	%-G		ignore this message
	%+G		general message</div>
<div class="old-help-para">Pattern matching</div>
<div class="old-help-para">The scanf()-like "%*[]" notation is supported for backward-compatibility
with previous versions of Vim.  However, it is also possible to specify
(nearly) any Vim supported regular expression in format strings.
Since meta characters of the regular expression language can be part of
ordinary matching strings or file names (and therefore internally have to
be escaped), meta symbols have to be written with leading '%':
	%\		The single '\' character.  Note that this has to be
			escaped ("%\\") in ":set errorformat=" definitions.
	%.		The single '.' character.
	%#		The single ''(!) character.
	%^		The single '^' character.  Note that this is not
			useful, the pattern already matches start of line.
	%$		The single '$' character.  Note that this is not
			useful, the pattern already matches end of line.
	%[		The single '[' character for a [] character range.
	%~		The single '~' character.
When using character classes in expressions (see <a href="/neovim-docs-web/en/pattern#%2F%5Ci">/\i</a> for an overview),
terms containing the "\+" quantifier can be written in the scanf() "%*"
notation.  Example: "%\\d%\\+" ("\d\+", "any number") is equivalent to "%*\\d".
Important note: The \(...\) grouping of sub-matches can not be used in format
specifications because it is reserved for internal conversions.</div>
<div class="old-help-para">Multiple entries in <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a>			<a name="efm-entries"></a><code class="help-tag-right">efm-entries</code></div>
<div class="old-help-para">To be able to detect output from several compilers, several format patterns
may be put in <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a>, separated by commas (note: blanks after the comma
are ignored).  The first pattern that has a complete match is used.  If no
match is found, matching parts from the last one will be used, although the
file name is removed and the error message is set to the whole message.  If
there is a pattern that may match output from several compilers (but not in a
right way), put it after one that is more restrictive.</div>
<div class="old-help-para">To include a comma in a pattern precede it with a backslash (you have to type
two in a ":set" command).  To include a backslash itself give two backslashes
(you have to type four in a ":set" command).  You also need to put a backslash
before a space for ":set".</div>
<div class="old-help-para">Valid matches						<a name="quickfix-valid"></a><code class="help-tag-right">quickfix-valid</code></div>
<div class="old-help-para">If a line does not completely match one of the entries in <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a>, the
whole line is put in the error message and the entry is marked "not valid"
These lines are skipped with the ":cn" and ":cp" commands (unless there is
no valid line at all).  You can use ":cl!" to display all the error messages.</div>
<div class="old-help-para">If the error format does not contain a file name Vim cannot switch to the
correct file.  You will have to do this by hand.</div>
<div class="old-help-para">For example, the format of the output from the Amiga Aztec compiler is:</div>
<div class="old-help-para">	filename&gt;linenumber:columnnumber:errortype:errornumber:errormessage</div>
<div class="old-help-para">	filename	name of the file in which the error was detected
	linenumber	line number where the error was detected
	columnnumber	column number where the error was detected
	errortype	type of the error, normally a single 'E' or 'W'
	errornumber	number of the error (for lookup in the manual)
	errormessage	description of the error</div>
<div class="old-help-para">This can be matched with this <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> entry:
	%f&gt;%l:%c:%t:%n:%m</div>
<div class="old-help-para">Some examples for C compilers that produce single-line error outputs:
%f:%l:\ %t%*[^0123456789]%n:\ %m	for Manx/Aztec C error messages
					(scanf() doesn't understand [0-9])
%f\ %l\ %t%*[^0-9]%n:\ %m		for SAS C
\"%f\"\\,%*[^0-9]%l:\ %m		for generic C compilers
%f:%l:\ %m				for GCC
%f:%l:\ %m,%Dgmake[%*\\d]:\ Entering\ directory\%f',
%Dgmake[%*\\d]:\ Leaving\ directory\%f'
					for GCC with gmake (concat the lines!)
%f(%l)\ :\ %*[^:]:\ %m			old SCO C compiler (pre-OS5)
%f(%l)\ :\ %t%*[^0-9]%n:\ %m		idem, with error type and number
%f:%l:\ %m,In\ file\ included\ from\ %f:%l:,\^I\^Ifrom\ %f:%l%m
					for GCC, with some extras</div>
<div class="old-help-para">Extended examples for the handling of multi-line messages are given below,
see <a href="/neovim-docs-web/en/quickfix#errorformat-Jikes">errorformat-Jikes</a> and <a href="/neovim-docs-web/en/quickfix#errorformat-LaTeX">errorformat-LaTeX</a>.</div>
<div class="old-help-para">Note the backslash in front of a space and double quote.  It is required for
the :set command.  There are two backslashes in front of a comma, one for the
:set command and one to avoid recognizing the comma as a separator of error
formats.</div>
<div class="old-help-para">Filtering messages</div>
<div class="old-help-para">If you have a compiler that produces error messages that do not fit in the
format string, you could write a program that translates the error messages
into this format.  You can use this program with the ":make" command by
changing the <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> option.  For example:<pre>:set mp=make\ \\\|&amp;\ error_filter</pre>
The backslashes before the pipe character are required to avoid it to be
recognized as a command separator.  The backslash before each space is
required for the set command.</div>
<div class="old-help-para"><h2 class="help-heading">8. The directory stack<span class="help-heading-tags">				<a name="quickfix-directory-stack"></a><span class="help-tag">quickfix-directory-stack</span></span></h2></div>
<div class="old-help-para">Quickfix maintains a stack for saving all used directories parsed from the
make output.  For GNU-make this is rather simple, as it always prints the
absolute path of all directories it enters and leaves.  Regardless if this is
done via a <a href="/neovim-docs-web/en/options#'cd'">'cd'</a> command in the makefile or with the parameter "-C dir" (change
to directory before reading the makefile).  It may be useful to use the switch
"-w" to force GNU-make to print out the working directory before and after
processing.</div>
<div class="old-help-para">Maintaining the correct directory is more complicated if you don't use
GNU-make.  AIX-make for example doesn't print any information about its
working directory.  Then you need to enhance the makefile.  In the makefile of
LessTif there is a command which echoes "Making <code>{target}</code> in <code>{dir}</code>".  The
special problem here is that it doesn't print information on leaving the
directory and that it doesn't print the absolute path.</div>
<div class="old-help-para">To solve the problem with relative paths and missing "leave directory"
messages Vim uses the following algorithm:</div>
<div class="old-help-para">1) Check if the given directory is a subdirectory of the current directory.
   If this is true, store it as the current directory.
2) If it is not a subdir of the current directory, try if this is a
   subdirectory of one of the upper directories.
3) If the directory still isn't found, it is assumed to be a subdirectory
   of Vim's current directory.</div>
<div class="old-help-para">Additionally it is checked for every file, if it really exists in the
identified directory.  If not, it is searched in all other directories of the
directory stack (NOT the directory subtree!).  If it is still not found, it is
assumed that it is in Vim's current directory.</div>
<div class="old-help-para">There are limitations in this algorithm.  These examples assume that make just
prints information about entering a directory in the form "Making all in dir".</div>
<div class="old-help-para">1) Assume you have following directories and files:
   ./dir1
   ./dir1/file1.c
   ./file1.c</div>
<div class="old-help-para">   If make processes the directory "./dir1" before the current directory and
   there is an error in the file "./file1.c", you will end up with the file
   "./dir1/file.c" loaded by Vim.</div>
<div class="old-help-para">   This can only be solved with a "leave directory" message.</div>
<div class="old-help-para">2) Assume you have following directories and files:
   ./dir1
   ./dir1/dir2
   ./dir2</div>
<div class="old-help-para">   You get the following:</div>
<div class="old-help-para">   Make output			  Directory interpreted by Vim
   ------------------------	  ----------------------------
   Making all in dir1		  ./dir1
   Making all in dir2		  ./dir1/dir2
   Making all in dir2		  ./dir1/dir2</div>
<div class="old-help-para">   This can be solved by printing absolute directories in the "enter directory"
   message or by printing "leave directory" messages.</div>
<div class="old-help-para">To avoid this problem, ensure to print absolute directory names and "leave
directory" messages.</div>
<div class="old-help-para">Examples for Makefiles:</div>
<div class="old-help-para">Unix:
    libs:
	    for dn in $(LIBDIRS); do				\
		(cd $$dn; echo "Entering dir '$$(pwd)'"; make); \
		echo "Leaving dir";				\
	    done</div>
<div class="old-help-para">Add
    %DEntering\ dir\ '%f',%XLeaving\ dir
to your <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> to handle the above output.</div>
<div class="old-help-para">Note that Vim doesn't check if the directory name in a "leave directory"
messages is the current directory.  This is why you could just use the message
"Leaving dir".</div>
<div class="old-help-para"><h2 class="help-heading">9. Specific error file formats<span class="help-heading-tags">			<a name="errorformats"></a><span class="help-tag">errorformats</span></span></h2></div>
<div class="old-help-para">						<a name="errorformat-Jikes"></a><code class="help-tag-right">errorformat-Jikes</code>
Jikes(TM), a source-to-bytecode Java compiler published by IBM Research,
produces simple multi-line error messages.</div>
<div class="old-help-para">An <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> string matching the produced messages is shown below.
The following lines can be placed in the user's <a href="/neovim-docs-web/en/starting#init.vim">init.vim</a> to overwrite Vim's
recognized default formats, or see <a href="/neovim-docs-web/en/options#%3Aset%2B%3D">:set+=</a> how to install this format
additionally to the default.<pre>:set efm=%A%f:%l:%c:%*\\d:%*\\d:,
      \%C%*\\s%trror:%m,
      \%+C%*[^:]%trror:%m,
      \%C%*\\s%tarning:%m,
      \%C%m</pre></div>
<div class="old-help-para">Jikes(TM) produces a single-line error message when invoked with the option
"+E", and can be matched with the following:<pre>:setl efm=%f:%l:%v:%*\\d:%*\\d:%*\\s%m</pre></div>
<div class="old-help-para">						<a name="errorformat-javac"></a><code class="help-tag-right">errorformat-javac</code>
This <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> has been reported to work well for javac, which outputs a
line with "^" to indicate the column of the error:<pre>:setl efm=%A%f:%l:\ %m,%-Z%p^,%-C%.%#</pre>
or:<pre>:setl efm=%A%f:%l:\ %m,%+Z%p^,%+C%.%#,%-G%.%#</pre></div>
<div class="old-help-para">Here is an alternative from Michael F. Lamb for Unix that filters the errors
first:<pre>:setl errorformat=%Z%f:%l:\ %m,%A%p^,%-G%*[^sl]%.%#
:setl makeprg=javac\ %:S\ 2&gt;&amp;1\ \\\|\ vim-javac-filter</pre>
You need to put the following in "vim-javac-filter" somewhere in your path
(e.g., in ~/bin) and make it executable:<pre>#!/bin/sed -f
/\^$/s/\t/\ /g;/:[0-9]\+:/{h;d};/^[ \t]*\^/G;</pre>
In English, that sed script:
<div class="help-li" style=""> Changes single tabs to single spaces and
</div><div class="help-li" style=""> Moves the line with the filename, line number, error message to just after
  the pointer line. That way, the unused error text between doesn't break
  vim's notion of a "multi-line message" and also doesn't force us to include
  it as a "continuation of a multi-line message."
</div></div>
<div class="old-help-para">						<a name="errorformat-ant"></a><code class="help-tag-right">errorformat-ant</code>
For ant (<a href="https://jakarta.apache.org/">https://jakarta.apache.org/</a>) the above errorformat has to be modified
to honour the leading [javac] in front of each javac output line:<pre>:set efm=%A\ %#[javac]\ %f:%l:\ %m,%-Z\ %#[javac]\ %p^,%-C%.%#</pre>
The <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> can also be configured to handle ant together with either
javac or jikes.  If you're using jikes, you should tell ant to use jikes' +E
command line switch which forces jikes to generate one-line error messages.
This is what the second line (of a build.xml file) below does:<pre>&lt;property name = "build.compiler"       value = "jikes"/&gt;
&lt;property name = "build.compiler.emacs" value = "true"/&gt;</pre>
The <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> which handles ant with both javac and jikes is:<pre>:set efm=\ %#[javac]\ %#%f:%l:%c:%*\\d:%*\\d:\ %t%[%^:]%#:%m,
         \%A\ %#[javac]\ %f:%l:\ %m,%-Z\ %#[javac]\ %p^,%-C%.%#</pre></div>
<div class="old-help-para">						<a name="errorformat-jade"></a><code class="help-tag-right">errorformat-jade</code>
parsing jade (see <a href="http://www.jclark.com/">http://www.jclark.com/</a>) errors is simple:<pre>:set efm=jade:%f:%l:%c:%t:%m</pre></div>
<div class="old-help-para">						<a name="errorformat-LaTeX"></a><code class="help-tag-right">errorformat-LaTeX</code>
The following is an example how an <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> string can be specified
for the (La)TeX typesetting system which displays error messages over
multiple lines.  The output of ":clist" and ":cc" etc. commands displays
multi-lines in a single line, leading white space is removed.
It should be easy to adopt the above LaTeX errorformat to any compiler output
consisting of multi-line errors.</div>
<div class="old-help-para">The commands can be placed in a <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a> file or some other Vim script file,
e.g. a script containing LaTeX related stuff which is loaded only when editing
LaTeX sources.
Make sure to copy all lines of the example (in the given order), afterwards
remove the comment lines.  For the '\' notation at the start of some lines see
<a href="/neovim-docs-web/en/repeat#line-continuation">line-continuation</a>.</div>
<div class="old-help-para">		First prepare <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> such that LaTeX will report multiple
		errors; do not stop when the first error has occurred:<pre>:set makeprg=latex\ \\\\nonstopmode\ \\\\input\\{$*}</pre></div>
<div class="old-help-para">		Start of multi-line error messages:<pre>:set efm=%E!\ LaTeX\ %trror:\ %m,
       \%E!\ %m,</pre></div>
<div class="old-help-para">		Start of multi-line warning messages; the first two also
		include the line number.  Meaning of some regular expressions:
<div class="help-li" style=""> "%.%#"  (".*")   matches a (possibly empty) string
</div><div class="help-li" style=""> "%*\\d" ("\d\+") matches a number
<pre>\%+WLaTeX\ %.%#Warning:\ %.%#line\ %l%.%#,
\%+W%.%#\ at\ lines\ %l--%*\\d,
\%WLaTeX\ %.%#Warning:\ %m,</pre></div></div>
<div class="old-help-para">		Possible continuations of error/warning messages; the first
		one also includes the line number:<pre>\%Cl.%l\ %m,
\%+C\ \ %m.,
\%+C%.%#-%.%#,
\%+C%.%#[]%.%#,
\%+C[]%.%#,
\%+C%.%#%[{}\\]%.%#,
\%+C&lt;%.%#&gt;%.%#,
\%C\ \ %m,</pre></div>
<div class="old-help-para">		Lines that match the following patterns do not contain any
		important information; do not include them in messages:<pre>\%-GSee\ the\ LaTeX%m,
\%-GType\ \ H\ &lt;return&gt;%m,
\%-G\ ...%.%#,
\%-G%.%#\ (C)\ %.%#,
\%-G(see\ the\ transcript%.%#),</pre></div>
<div class="old-help-para">		Generally exclude any empty or whitespace-only line from
		being displayed:<pre>\%-G\\s%#,</pre></div>
<div class="old-help-para">		The LaTeX output log does not specify the names of erroneous
		source files per line; rather they are given globally,
		enclosed in parentheses.
		The following patterns try to match these names and store
		them in an internal stack.  The patterns possibly scan over
		the same input line (one after another), the trailing "%r"
		conversion indicates the "rest" of the line that will be
		parsed in the next go until the end of line is reached.</div>
<div class="old-help-para">		Overread a file name enclosed in '('...')'; do not push it
		on a stack since the file apparently does not contain any
		error:<pre>\%+O(%f)%r,</pre></div>
<div class="old-help-para">		Push a file name onto the stack.  The name is given after '(':<pre>\%+P(%f%r,
\%+P\ %\\=(%f%r,
\%+P%*[^()](%f%r,
\%+P[%\\d%[^()]%#(%f%r,</pre></div>
<div class="old-help-para">		Pop the last stored file name when a ')' is scanned:<pre>\%+Q)%r,
\%+Q%*[^()])%r,
\%+Q[%\\d%*[^()])%r</pre>
Note that in some cases file names in the LaTeX output log cannot be parsed
properly.  The parser might have been messed up by unbalanced parentheses
then.  The above example tries to catch the most relevant cases only.
You can customize the given setting to suit your own purposes, for example,
all the annoying "Overfull ..." warnings could be excluded from being
recognized as an error.
Alternatively to filtering the LaTeX compiler output, it is also possible
to directly read the.log file that is produced by the [La]TeX compiler.
This contains even more useful information about possible error causes.
However, to properly parse such a complex file, an external filter should
be used.  See the description further above how to make such a filter known
by Vim.</div>
<div class="old-help-para"><h2 class="help-heading">10. Customizing the quickfix window<span class="help-heading-tags">		<a name="quickfix-window-function"></a><span class="help-tag">quickfix-window-function</span></span></h2></div>
<div class="old-help-para">The default format for the lines displayed in the quickfix window and location
list window is:</div>
<div class="old-help-para">    <code>&lt;filename&gt;</code>&lt;lnum&gt;<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+quickfix.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/quickfix.html%0D%0DContext%3A%0D%0D%60%60%60%0DThe%20default%20format%20for%20the%20lines%20displayed%20in%20the%20quickfix%20window%20and%20location%0Alist%20window%20is%3A%0A%0A%20%20%20%20%3Cfilename%3E%7C%3Clnum%3E%20col%20%3Ccol%3E%7C%3Ctext%3E%0A%0AThe%20values%20displayed%20in%20each%20line%20correspond%20to%20the%20%22bufnr%22%2C%20%22lnum%22%2C%20%22col%22%20and%0A%22text%22%20fields%20returned%20by%20the%20%7Cgetqflist()%7C%20function.%0D%60%60%60">col &lt;col&gt;</a><code>&lt;text&gt;</code></div>
<div class="old-help-para">The values displayed in each line correspond to the "bufnr", "lnum", "col" and
"text" fields returned by the <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> function.</div>
<div class="old-help-para">For some quickfix/location lists, the displayed text needs to be customized.
For example, if only the filename is present for a quickfix entry, then the
two "|" field separator characters after the filename are not needed.  Another
use case is to customize the path displayed for a filename. By default, the
complete path (which may be too long) is displayed for files which are not
under the current directory tree. The file path may need to be simplified to a
common parent directory.</div>
<div class="old-help-para">The displayed text can be customized by setting the <a href="/neovim-docs-web/en/options#'quickfixtextfunc'">'quickfixtextfunc'</a> option
to a Vim function.  This function will be called with a dict argument and
should return a List of strings to be displayed in the quickfix or location
list window. The dict argument will have the following fields:</div>
<div class="old-help-para">    quickfix	set to 1 when called for a quickfix list and 0 when called for
		a location list.
    winid	for a location list, set to the id of the window with the
		location list. For a quickfix list, set to 0. Can be used in
		getloclist() to get the location list entry.
    id		quickfix or location list identifier
    start_idx	index of the first entry for which text should be returned
    end_idx	index of the last entry for which text should be returned</div>
<div class="old-help-para">The function should return a single line of text to display in the quickfix
window for each entry from start_idx to end_idx. The function can obtain
information about the entries using the <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> function and specifying
the quickfix list identifier "id". For a location list, getloclist() function
can be used with the "winid" argument. If an empty list is returned, then the
default format is used to display all the entries. If an item in the returned
list is an empty string, then the default format is used to display the
corresponding entry.</div>
<div class="old-help-para">If a quickfix or location list specific customization is needed, then the
<a href="/neovim-docs-web/en/options#'quickfixtextfunc'">'quickfixtextfunc'</a> attribute of the list can be set using the <a href="/neovim-docs-web/en/builtin#setqflist()">setqflist()</a> or
<a href="/neovim-docs-web/en/builtin#setloclist()">setloclist()</a> function. This overrides the global <a href="/neovim-docs-web/en/options#'quickfixtextfunc'">'quickfixtextfunc'</a> option.</div>
<div class="old-help-para">The example below displays the list of old files (<a href="/neovim-docs-web/en/eval#v%3Aoldfiles">v:oldfiles</a>) in a quickfix
window. As there is no line, column number and error text information
associated with each entry, the <a href="/neovim-docs-web/en/options#'quickfixtextfunc'">'quickfixtextfunc'</a> function returns only the
filename.
Example:<pre>" create a quickfix list from v:oldfiles
call setqflist([], ' ', {'lines' : v:oldfiles, 'efm' : '%f',
                                    \ 'quickfixtextfunc' : 'QfOldFiles'})
func QfOldFiles(info)
    " get information about a range of quickfix entries
    let items = getqflist({'id' : a:info.id, 'items' : 1}).items
    let l = []
    for idx in range(a:info.start_idx - 1, a:info.end_idx - 1)
        " use the simplified file name
      call add(l, fnamemodify(bufname(items[idx].bufnr), ':p:.'))
    endfor
    return l
endfunc</pre></div>

  
  