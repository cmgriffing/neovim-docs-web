---
title:  Diff
layout: ../../layouts/MainLayout.astro
---

  <a name="diff.txt"></a><a name="diff"></a><h1> Diff</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/diff.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para"> <a name="diff-mode"></a><code class="help-tag">diff-mode</code>
This file describes the diff feature: Showing differences between two to
eight versions of the same file.</div>
<div class="old-help-para">The basics are explained in section <a href="usr_08.html#08.7">08.7</a> of the user manual.</div>
<div class="old-help-para"><h2 class="help-heading">1. Starting diff mode<span class="help-heading-tags">					<a name="start-vimdiff"></a><span class="help-tag">start-vimdiff</span></span></h2></div>
<div class="old-help-para">To start editing in diff mode, run "nvim -d".  This starts Nvim as usual, and
additionally sets up for viewing the differences between the arguments.<pre>nvim -d file1 file2 [file3 [file4]]</pre>
In addition to the <a href="starting.html#-d">-d</a> argument, <a href="starting.html#-R">-R</a> may be used for readonly mode.</div>
<div class="old-help-para">The second and following arguments may also be a directory name.  Vim will
then append the file name of the first argument to the directory name to find
the file.</div>
<div class="old-help-para">By default an internal diff library will be used.  When <a href="options.html#'diffopt'">'diffopt'</a> or
<a href="options.html#'diffexpr'">'diffexpr'</a> has been set an external "diff" command will be used.  This only
works when such a diff program is available.</div>
<div class="old-help-para">Diffs are local to the current tab page <a href="tabpage.html#tab-page">tab-page</a>.  You can't see diffs with
a window in another tab page.  This does make it possible to have several
diffs at the same time, each in their own tab page.</div>
<div class="old-help-para">What happens is that Nvim opens a window for each of the files.  This is like
using the <a href="starting.html#-O">-O</a> argument.  This uses vertical splits, but if you prefer
horizontal splits use the <a href="starting.html#-o">-o</a> argument instead:<pre>nvim -d -o file1 file2 [file3 [file4]]</pre>
If you always prefer horizontal splits include "horizontal" in <a href="options.html#'diffopt'">'diffopt'</a>.</div>
<div class="old-help-para">In each of the edited files these options are set:</div>
<div class="old-help-para">	<a href="options.html#'diff'">'diff'</a>		on
	<a href="options.html#'scrollbind'">'scrollbind'</a>	on
	<a href="options.html#'cursorbind'">'cursorbind'</a>	on
	<a href="options.html#'scrollopt'">'scrollopt'</a>	includes "hor"
	<a href="options.html#'wrap'">'wrap'</a>		off, or leave as-is if <a href="options.html#'diffopt'">'diffopt'</a> includes "followwrap"
	<a href="options.html#'foldmethod'">'foldmethod'</a>	"diff"
	<a href="options.html#'foldcolumn'">'foldcolumn'</a>	value from <a href="options.html#'diffopt'">'diffopt'</a>, default is 2</div>
<div class="old-help-para">These options are set local to the window.  When editing another file they are
reset to the global value.
The options can still be overruled from a modeline when re-editing the file.
However, <a href="options.html#'foldmethod'">'foldmethod'</a> and <a href="options.html#'wrap'">'wrap'</a> won't be set from a modeline when <a href="options.html#'diff'">'diff'</a> is
set.
See <code>:diffoff</code> for an easy way to revert the options.</div>
<div class="old-help-para">The differences shown are actually the differences in the buffer.  Thus if you
make changes after loading a file, these will be included in the displayed
diffs.  You might have to do ":diffupdate" now and then, not all changes are
immediately taken into account, especially when using an external diff command.</div>
<div class="old-help-para">In your vimrc file you could do something special when Vim was started in
diff mode.  You could use a construct like this:<pre>if &amp;diff
   setup for diff mode
else
   setup for non-diff mode
endif</pre>
While already in Vim you can start diff mode in three ways.</div>
<div class="old-help-para">							<a name="E98"></a><code class="help-tag-right">E98</code>
:diffs[plit] <code>{filename}</code>					<a name="%3Adiffs"></a><code class="help-tag-right">:diffs</code> <a name="%3Adiffsplit"></a><code class="help-tag">:diffsplit</code>
		Open a new window on the file <code>{filename}</code>.  The options are set
		as for "nvim -d" for the current and the newly opened window.
		Also see <a href="options.html#'diffexpr'">'diffexpr'</a>.</div>
<div class="old-help-para">							<a name="%3Adifft"></a><code class="help-tag-right">:difft</code> <a name="%3Adiffthis"></a><code class="help-tag">:diffthis</code>
:difft[his]	Make the current window part of the diff windows.  This sets
		the options as for "nvim -d".</div>
<div class="old-help-para">:diffp[atch] <code>{patchfile}</code>			 <a name="E816"></a><code class="help-tag-right">E816</code> <a name="%3Adiffp"></a><code class="help-tag">:diffp</code> <a name="%3Adiffpatch"></a><code class="help-tag">:diffpatch</code>
		Use the current buffer, patch it with the diff found in
		<code>{patchfile}</code> and open a buffer on the result.  This sets the
		options as for "nvim -d".
		<code>{patchfile}</code> can be in any format that the "patch" program
		understands or <a href="options.html#'patchexpr'">'patchexpr'</a> can handle.
		Note that <code>{patchfile}</code> should only contain a diff for one file,
		the current file.  If <code>{patchfile}</code> contains diffs for other
		files as well, the results are unpredictable.  Vim changes
		directory to /tmp to avoid files in the current directory
		accidentally being patched.  But it may still result in
		various ".rej" files to be created.  And when absolute path
		names are present these files may get patched anyway.</div>
<div class="old-help-para">To make these commands use a vertical split, prepend <a href="windows.html#%3Avertical">:vertical</a>.  Examples:<pre>:vert diffsplit main.c~
:vert diffpatch /tmp/diff</pre>
If you always prefer a vertical split include "vertical" in <a href="options.html#'diffopt'">'diffopt'</a>.</div>
<div class="old-help-para">							<a name="E96"></a><code class="help-tag-right">E96</code>
There can be up to eight buffers with <a href="options.html#'diff'">'diff'</a> set.</div>
<div class="old-help-para">Since the option values are remembered with the buffer, you can edit another
file for a moment and come back to the same file and be in diff mode again.</div>
<div class="old-help-para">							<a name="%3Adiffo"></a><code class="help-tag-right">:diffo</code> <a name="%3Adiffoff"></a><code class="help-tag">:diffoff</code>
:diffo[ff]	Switch off diff mode for the current window.  Resets related
		options also when <a href="options.html#'diff'">'diff'</a> was not set.</div>
<div class="old-help-para">:diffo[ff]!	Switch off diff mode for the current window and in all windows
		in the current tab page where <a href="options.html#'diff'">'diff'</a> is set.  Resetting
		related options only happens in a window that has <a href="options.html#'diff'">'diff'</a> set,
		if the current window does not have <a href="options.html#'diff'">'diff'</a> set then no options
		in it are changed.
		Hidden buffers are also removed from the list of diff'ed
		buffers.</div>
<div class="old-help-para">The <code>:diffoff</code> command resets the relevant options to the values they had when
using <code>:diffsplit</code>, <code>:diffpatch</code> , <code>:diffthis</code>. or starting Vim in diff mode.
When using <code>:diffoff</code> twice the last saved values are restored.
Otherwise they are set to their default value:</div>
<div class="old-help-para">	<a href="options.html#'diff'">'diff'</a>		off
	<a href="options.html#'scrollbind'">'scrollbind'</a>	off
	<a href="options.html#'cursorbind'">'cursorbind'</a>	off
	<a href="options.html#'scrollopt'">'scrollopt'</a>	without "hor"
	<a href="options.html#'wrap'">'wrap'</a>		on, or leave as-is if <a href="options.html#'diffopt'">'diffopt'</a> includes "followwrap"
	<a href="options.html#'foldmethod'">'foldmethod'</a>	"manual"
	<a href="options.html#'foldcolumn'">'foldcolumn'</a>	0</div>
<div class="old-help-para"><h2 class="help-heading">2. Viewing diffs<span class="help-heading-tags">						<a name="view-diffs"></a><span class="help-tag">view-diffs</span></span></h2></div>
<div class="old-help-para">The effect is that the diff windows show the same text, with the differences
highlighted.  When scrolling the text, the <a href="options.html#'scrollbind'">'scrollbind'</a> option will make the
text in other windows to be scrolled as well.  With vertical splits the text
should be aligned properly.</div>
<div class="old-help-para">The alignment of text will go wrong when:
<div class="help-li" style=""> <a href="options.html#'wrap'">'wrap'</a> is on, some lines will be wrapped and occupy two or more screen
  lines
</div><div class="help-li" style=""> folds are open in one window but not another
</div><div class="help-li" style=""> <a href="options.html#'scrollbind'">'scrollbind'</a> is off
</div><div class="help-li" style=""> changes have been made to the text
</div><div class="help-li" style=""> "filler" is not present in <a href="options.html#'diffopt'">'diffopt'</a>, deleted/inserted lines makes the
  alignment go wrong
</div></div>
<div class="old-help-para">All the buffers edited in a window where the <a href="options.html#'diff'">'diff'</a> option is set will join in
the diff.  This is also possible for hidden buffers.  They must have been
edited in a window first for this to be possible.  To get rid of the hidden
buffers use <code>:diffoff!</code>.</div>
<div class="old-help-para">					<a name="%3ADiffOrig"></a><code class="help-tag-right">:DiffOrig</code> <a name="diff-original-file"></a><code class="help-tag">diff-original-file</code>
Since <a href="options.html#'diff'">'diff'</a> is a window-local option, it's possible to view the same buffer
in diff mode in one window and "normal" in another window.  It is also
possible to view the changes you have made to a buffer since the file was
loaded.  Since Vim doesn't allow having two buffers for the same file, you
need another buffer.  This command is useful:<pre>command DiffOrig vert new | set buftype=nofile | read ++edit # | 0d_
       \ | diffthis | wincmd p | diffthis</pre>
Use ":DiffOrig" to see the differences
between the current buffer and the file it was loaded from.</div>
<div class="old-help-para">A buffer that is unloaded cannot be used for the diff.  But it does work for
hidden buffers.  You can use ":hide" to close a window without unloading the
buffer.  If you don't want a buffer to remain used for the diff do ":set
nodiff" before hiding it.</div>
<div class="old-help-para">						<a name="%3Adif"></a><code class="help-tag-right">:dif</code> <a name="%3Adiff"></a><code class="help-tag">:diff</code> <a name="%3Adiffupdate"></a><code class="help-tag">:diffupdate</code>
:dif[fupdate][!]		Update the diff highlighting and folds.</div>
<div class="old-help-para">Vim attempts to keep the differences updated when you make changes to the
text.  This mostly takes care of inserted and deleted lines.  Changes within a
line and more complicated changes do not cause the differences to be updated.
To force the differences to be updated use:<pre>:diffupdate</pre>
If the ! is included Vim will check if the file was changed externally and
needs to be reloaded.  It will prompt for each changed file, like <code>:checktime</code>
was used.</div>
<div class="old-help-para">Vim will show filler lines for lines that are missing in one window but are
present in another.  These lines were inserted in another file or deleted in
this file.  Removing "filler" from the <a href="options.html#'diffopt'">'diffopt'</a> option will make Vim not
display these filler lines.</div>
<div class="old-help-para">Folds are used to hide the text that wasn't changed.  See <a href="fold.html#folding">folding</a> for all
the commands that can be used with folds.</div>
<div class="old-help-para">The context of lines above a difference that are not included in the fold can
be set with the <a href="options.html#'diffopt'">'diffopt'</a> option.  For example, to set the context to three
lines:<pre>:set diffopt=filler,context:3</pre>
The diffs are highlighted with these groups:</div>
<div class="old-help-para"><a href="syntax.html#hl-DiffAdd">hl-DiffAdd</a>  	DiffAdd		Added (inserted) lines.  These lines exist in
				this buffer but not in another.
<a href="syntax.html#hl-DiffChange">hl-DiffChange</a>  	DiffChange	Changed lines.
<a href="syntax.html#hl-DiffText">hl-DiffText</a>  	DiffText	Changed text inside a Changed line.  Vim
				finds the first character that is different,
				and the last character that is different
				(searching from the end of the line).  The
				text in between is highlighted.  This means
				that parts in the middle that are still the
				same are highlighted anyway.  The <a href="options.html#'diffopt'">'diffopt'</a>
				flags "iwhite" and "icase" are used here.
<a href="syntax.html#hl-DiffDelete">hl-DiffDelete</a>  	DiffDelete	Deleted lines.  Also called filler lines,
				because they don't really exist in this
				buffer.</div>
<div class="old-help-para"><h2 class="help-heading">3. Jumping to diffs<span class="help-heading-tags">					<a name="jumpto-diffs"></a><span class="help-tag">jumpto-diffs</span></span></h2></div>
<div class="old-help-para">Two commands can be used to jump to diffs:
								<a name="%5Bc"></a><code class="help-tag-right">[c</code>
	[c		Jump backwards to the previous start of a change.
			When a count is used, do it that many times.
								<a name="%5Dc"></a><code class="help-tag-right">]c</code>
	]c		Jump forwards to the next start of a change.
			When a count is used, do it that many times.</div>
<div class="old-help-para">It is an error if there is no change for the cursor to move to.</div>
<div class="old-help-para"><h2 class="help-heading">4. Diff copying<span class="help-heading-tags">			<a name="copy-diffs"></a><span class="help-tag">copy-diffs</span> <a name="E99"></a><span class="help-tag">E99</span> <a name="E100"></a><span class="help-tag">E100</span> <a name="E101"></a><span class="help-tag">E101</span> <a name="E102"></a><span class="help-tag">E102</span> <a name="E103"></a><span class="help-tag">E103</span></span></h2>								<a name="merge"></a><code class="help-tag-right">merge</code>
There are two commands to copy text from one buffer to another.  The result is
that the buffers will be equal within the specified range.</div>
<div class="old-help-para">							<a name="%3Adiffg"></a><code class="help-tag-right">:diffg</code> <a name="%3Adiffget"></a><code class="help-tag">:diffget</code>
:[range]diffg[et] [bufspec]
		Modify the current buffer to undo difference with another
		buffer.  If [bufspec] is given, that buffer is used.  If
		[bufspec] refers to the current buffer then nothing happens.
		Otherwise this only works if there is one other buffer in diff
		mode.
		See below for [range].</div>
<div class="old-help-para">						<a name="%3Adiffpu"></a><code class="help-tag-right">:diffpu</code> <a name="%3Adiffput"></a><code class="help-tag">:diffput</code> <a name="E793"></a><code class="help-tag">E793</code>
:[range]diffpu[t] [bufspec]
		Modify another buffer to undo difference with the current
		buffer.  Just like ":diffget" but the other buffer is modified
		instead of the current one.
		When [bufspec] is omitted and there is more than one other
		buffer in diff mode where <a href="options.html#'modifiable'">'modifiable'</a> is set this fails.
		See below for [range].</div>
<div class="old-help-para">							<a name="do"></a><code class="help-tag-right">do</code>
[count]do	Same as ":diffget" without range.  The "o" stands for "obtain"
		("dg" can't be used, it could be the start of "dgg"!). Note:
		this doesn't work in Visual mode.
		If you give a [count], it is used as the [bufspec] argument
		for ":diffget".</div>
<div class="old-help-para">							<a name="dp"></a><code class="help-tag-right">dp</code>
[count]dp	Same as ":diffput" without range.  Note: this doesn't work in
		Visual mode.
		If you give a [count], it is used as the [bufspec] argument
		for ":diffput".</div>
<div class="old-help-para">When no [range] is given, the diff at the cursor position or just above it is
affected.  When [range] is used, Vim tries to only put or get the specified
lines.  When there are deleted lines, this may not always be possible.</div>
<div class="old-help-para">There can be deleted lines below the last line of the buffer.  When the cursor
is on the last line in the buffer and there is no diff above this line, the
":diffget" and "do" commands will obtain lines from the other buffer.</div>
<div class="old-help-para">To be able to get those lines from another buffer in a [range] it's allowed to
use the last line number plus one.  This command gets all diffs from the other
buffer:<pre>:1,$+1diffget</pre>
Note that deleted lines are displayed, but not counted as text lines.  You
can't move the cursor into them.  To fill the deleted lines with the lines
from another buffer use ":diffget" on the line below them.
								<a name="E787"></a><code class="help-tag-right">E787</code>
When the buffer that is about to be modified is read-only and the autocommand
that is triggered by <a href="autocmd.html#FileChangedRO">FileChangedRO</a> changes buffers the command will fail.
The autocommand must not change buffers.</div>
<div class="old-help-para">The [bufspec] argument above can be a buffer number, a pattern for a buffer
name or a part of a buffer name.  Examples:</div>
<div class="old-help-para">	:diffget		Use the other buffer which is in diff mode
	:diffget 3		Use buffer 3
	:diffget v2		Use the buffer which matches "v2" and is in
				diff mode (e.g., "file.c.v2")</div>
<div class="old-help-para"><h2 class="help-heading">5. Diff options<span class="help-heading-tags">						<a name="diff-options"></a><span class="help-tag">diff-options</span></span></h2></div>
<div class="old-help-para">Also see <a href="options.html#'diffopt'">'diffopt'</a> and the "diff" item of <a href="options.html#'fillchars'">'fillchars'</a>.</div>
<div class="old-help-para">					    <a name="diff-slow"></a><code class="help-tag-right">diff-slow</code> <a name="diff_translations"></a><code class="help-tag">diff_translations</code>
For very long lines, the diff syntax highlighting might be slow, especially
since it tries to match all different kind of localisations. To disable
localisations and speed up the syntax highlighting, set the global variable
g:diff_translations to zero:<pre>let g:diff_translations = 0</pre></div>
<div class="old-help-para">After setting this variable, reload the syntax script:<pre>set syntax=diff</pre></div>
<div class="old-help-para"><h3 class="help-heading">FINDING THE DIFFERENCES<span class="help-heading-tags">					<a name="diff-diffexpr"></a><span class="help-tag">diff-diffexpr</span></span></h3></div>
<div class="old-help-para">The <a href="options.html#'diffexpr'">'diffexpr'</a> option can be set to use something else than the internal diff
support or the standard "diff" program to compare two files and find the
differences.</div>
<div class="old-help-para">When <a href="options.html#'diffexpr'">'diffexpr'</a> is empty, Vim uses this command to find the differences
between file1 and file2:<pre>diff file1 file2 &gt; outfile</pre>
The "&gt;" is replaced with the value of <a href="options.html#'shellredir'">'shellredir'</a>.</div>
<div class="old-help-para">The output of "diff" must be a normal "ed" style diff or a unified diff.  A
context diff will NOT work.  For a unified diff no context lines can be used.
Using "diff -u" will NOT work, use "diff -U0".</div>
<div class="old-help-para">This example explains the format that Vim expects for the "ed" style diff:<pre>1a2
&gt; bbb
4d4
&lt; 111
7c7
&lt; GGG
---
&gt; ggg</pre>
The "1a2" item appends the line "bbb".
The "4d4" item deletes the line "111".
The "7c7" item replaces the line "GGG" with "ggg".</div>
<div class="old-help-para">When <a href="options.html#'diffexpr'">'diffexpr'</a> is not empty, Vim evaluates it to obtain a diff file in the
format mentioned.  These variables are set to the file names used:</div>
<div class="old-help-para">	v:fname_in		original file
	v:fname_new		new version of the same file
	v:fname_out		where to write the resulting diff file</div>
<div class="old-help-para">Additionally, <a href="options.html#'diffexpr'">'diffexpr'</a> should take care of "icase" and "iwhite" in the
<a href="options.html#'diffopt'">'diffopt'</a> option.  <a href="options.html#'diffexpr'">'diffexpr'</a> cannot change the value of <a href="options.html#'lines'">'lines'</a> and
<a href="options.html#'columns'">'columns'</a>.</div>
<div class="old-help-para">Example (this does almost the same as <a href="options.html#'diffexpr'">'diffexpr'</a> being empty):<pre>set diffexpr=MyDiff()
function MyDiff()
   let opt = ""
   if &amp;diffopt =~ "icase"
     let opt = opt .. "-i "
   endif
   if &amp;diffopt =~ "iwhite"
     let opt = opt .. "-b "
   endif
   silent execute "!diff -a --binary " .. opt .. v:fname_in .. " " .. v:fname_new ..
        \  " &gt; " .. v:fname_out
   redraw!
endfunction</pre>
The "-a" argument is used to force comparing the files as text, comparing as
binaries isn't useful.  The "--binary" argument makes the files read in binary
mode, so that a <code>CTRL-Z</code> doesn't end the text on DOS.</div>
<div class="old-help-para">The <code>redraw!</code> command may not be needed, depending on whether executing a
shell command shows something on the display or not.</div>
<div class="old-help-para">						<a name="E810"></a><code class="help-tag-right">E810</code> <a name="E97"></a><code class="help-tag">E97</code>
Vim will do a test if the diff output looks alright.  If it doesn't, you will
get an error message.  Possible causes:
<div class="help-li" style="">  The "diff" program cannot be executed.
</div><div class="help-li" style="">  The "diff" program doesn't produce normal "ed" style diffs (see above).
</div><div class="help-li" style="">  The <a href="options.html#'shell'">'shell'</a> and associated options are not set correctly.  Try if filtering
   works with a command like ":!sort".
</div><div class="help-li" style="">  You are using <a href="options.html#'diffexpr'">'diffexpr'</a> and it doesn't work.
If it's not clear what the problem is set the <a href="options.html#'verbose'">'verbose'</a> option to one or more
to see more messages.
</div></div>
<div class="old-help-para">The self-installing Vim for MS-Windows includes a diff program.  If you don't
have it you might want to download a diff.exe.  For example from
<a href="https://gnuwin32.sourceforge.net/packages/diffutils.htm">https://gnuwin32.sourceforge.net/packages/diffutils.htm</a>.</div>
<div class="old-help-para"><h3 class="help-heading">USING PATCHES<span class="help-heading-tags">					<a name="diff-patchexpr"></a><span class="help-tag">diff-patchexpr</span></span></h3></div>
<div class="old-help-para">The <a href="options.html#'patchexpr'">'patchexpr'</a> option can be set to use something else than the standard
"patch" program.</div>
<div class="old-help-para">When <a href="options.html#'patchexpr'">'patchexpr'</a> is empty, Vim will call the "patch" program like this:<pre>patch -o outfile origfile &lt; patchfile</pre>
This should work fine with most versions of the "patch" program.  Note that a
CR in the middle of a line may cause problems, it is seen as a line break.</div>
<div class="old-help-para">If the default doesn't work for you, set the <a href="options.html#'patchexpr'">'patchexpr'</a> to an expression that
will have the same effect.  These variables are set to the file names used:</div>
<div class="old-help-para">	v:fname_in		original file
	v:fname_diff		patch file
	v:fname_out		resulting patched file</div>
<div class="old-help-para">Example (this does the same as <a href="options.html#'patchexpr'">'patchexpr'</a> being empty):<pre>set patchexpr=MyPatch()
function MyPatch()
   :call system("patch -o " .. v:fname_out .. " " .. v:fname_in ..
   \  " &lt; " .. v:fname_diff)
endfunction</pre>
Make sure that using the "patch" program doesn't have unwanted side effects.
For example, watch out for additionally generated files, which should be
deleted.  It should just patch the file and nothing else.
   Vim will change directory to "/tmp" or another temp directory before
evaluating <a href="options.html#'patchexpr'">'patchexpr'</a>.  This hopefully avoids that files in the current
directory are accidentally patched.  Vim will also delete files starting with
v:fname_in and ending in ".rej" and ".orig".</div>

  
  