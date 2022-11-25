---
title:  Undo
layout: ../../layouts/MainLayout.astro
---

  <a name="undo.txt"></a><a name="undo-redo"></a><h1> Undo</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/undo.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Undo and redo</div>
<div class="old-help-para">The basics are explained in section <a href="/neovim-docs-web/en/usr_02#02.5">02.5</a> of the user manual.</div>
<div class="old-help-para"><h2 class="help-heading">1. Undo and redo commands<span class="help-heading-tags">				<a name="undo-commands"></a><span class="help-tag">undo-commands</span></span></h2></div>
<div class="old-help-para"><code>&lt;Undo&gt;</code>		or					<a name="undo"></a><code class="help-tag-right">undo</code> <a name="%3CUndo%3E"></a><code class="help-tag">&lt;Undo&gt;</code> <a name="u"></a><code class="help-tag">u</code>
u			Undo [count] changes.</div>
<div class="old-help-para">							<a name="%3Au"></a><code class="help-tag-right">:u</code> <a name="%3Aun"></a><code class="help-tag">:un</code> <a name="%3Aundo"></a><code class="help-tag">:undo</code>
:u[ndo]			Undo one change.
								<a name="E830"></a><code class="help-tag-right">E830</code>
:u[ndo] <code>{N}</code>		Jump to after change number <code>{N}</code>.  See <a href="/neovim-docs-web/en/undo#undo-branches">undo-branches</a>
			for the meaning of <code>{N}</code>.</div>
<div class="old-help-para">:u[ndo]!		Undo one change and remove it from undo history.
								<a name="E5767"></a><code class="help-tag-right">E5767</code>
:u[ndo]! <code>{N}</code>		Like ":u[ndo] <code>{N}</code>", but forget all changes in the
			current undo branch up until <code>{N}</code>. You may only use
			":undo! <code>{N}</code>" to move backwards in the same undo
			branch, not to redo or switch to a different undo
			branch.</div>
<div class="old-help-para">							<a name="CTRL-R"></a><code class="help-tag-right">CTRL-R</code>
CTRL-R			Redo [count] changes which were undone.</div>
<div class="old-help-para">							<a name="%3Ared"></a><code class="help-tag-right">:red</code> <a name="%3Aredo"></a><code class="help-tag">:redo</code> <a name="redo"></a><code class="help-tag">redo</code>
:red[o]			Redo one change which was undone.</div>
<div class="old-help-para">							<a name="U"></a><code class="help-tag-right">U</code>
U			Undo all latest changes on one line, the line where
			the latest change was made. <a href="/neovim-docs-web/en/undo#U">U</a> itself also counts as
			a change, and thus <a href="/neovim-docs-web/en/undo#U">U</a> undoes a previous <a href="/neovim-docs-web/en/undo#U">U</a>.</div>
<div class="old-help-para">The last changes are remembered.  You can use the undo and redo commands above
to revert the text to how it was before each change.  You can also apply the
changes again, getting back the text before the undo.</div>
<div class="old-help-para">The "U" command is treated by undo/redo just like any other command.  Thus a
"u" command undoes a "U" command and a '<code>CTRL-R</code>' command redoes it again.  When
mixing "U", "u" and '<code>CTRL-R</code>' you will notice that the "U" command will
restore the situation of a line to before the previous "U" command.  This may
be confusing.  Try it out to get used to it.
The "U" command will always mark the buffer as changed.  When "U" changes the
buffer back to how it was without changes, it is still considered changed.
Use "u" to undo changes until the buffer becomes unchanged.</div>
<div class="old-help-para"><h2 class="help-heading">2. Two ways of undo<span class="help-heading-tags">					<a name="undo-two-ways"></a><span class="help-tag">undo-two-ways</span></span></h2></div>
<div class="old-help-para">How undo and redo commands work depends on the 'u' flag in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.
There is the Vim way ('u' excluded) and the Vi-compatible way ('u' included).
In the Vim way, "uu" undoes two changes.  In the Vi-compatible way, "uu" does
nothing (undoes an undo).</div>
<div class="old-help-para">'u' excluded, the Vim way:
You can go back in time with the undo command.  You can then go forward again
with the redo command.  If you make a new change after the undo command,
the redo will not be possible anymore.</div>
<div class="old-help-para">'u' included, the Vi-compatible way:
The undo command undoes the previous change, and also the previous undo
command.  The redo command repeats the previous undo command.  It does NOT
repeat a change command, use "." for that.</div>
<div class="old-help-para"><div class="help-column_heading">Examples	Vim way			Vi-compatible way</div>"uu"		two times undo		no-op
"u <code>CTRL-R</code>"	no-op			two times undo</div>
<div class="old-help-para">Rationale:  Nvi uses the "." command instead of <code>CTRL-R</code>.  Unfortunately, this
	    is not Vi compatible.  For example "dwdwu." in Vi deletes two
	    words, in Nvi it does nothing.</div>
<div class="old-help-para"><h2 class="help-heading">3. Undo blocks<span class="help-heading-tags">						<a name="undo-blocks"></a><span class="help-tag">undo-blocks</span></span></h2></div>
<div class="old-help-para">One undo command normally undoes a typed command, no matter how many changes
that command makes.  This sequence of undo-able changes forms an undo block.
Thus if the typed key(s) call a function, all the commands in the function are
undone together.</div>
<div class="old-help-para">If you want to write a function or script that doesn't create a new undoable
change but joins in with the previous change use this command:</div>
<div class="old-help-para">						<a name="%3Aundoj"></a><code class="help-tag-right">:undoj</code> <a name="%3Aundojoin"></a><code class="help-tag">:undojoin</code> <a name="E790"></a><code class="help-tag">E790</code>
:undoj[oin]		Join further changes with the previous undo block.
			Warning: Use with care, it may prevent the user from
			properly undoing changes.  Don't use this after undo
			or redo.</div>
<div class="old-help-para">This is most useful when you need to prompt the user halfway through a change.
For example in a function that calls <a href="/neovim-docs-web/en/builtin#getchar()">getchar()</a>.  Do make sure that there was
a related change before this that you must join with.</div>
<div class="old-help-para">This doesn't work by itself, because the next key press will start a new
change again.  But you can do something like this:<pre>:undojoin | delete</pre>
After this a "u" command will undo the delete command and the previous
change.
					<a name="undo-break"></a><code class="help-tag-right">undo-break</code> <a name="undo-close-block"></a><code class="help-tag">undo-close-block</code>
To do the opposite, use a new undo block for the next change, in Insert mode
use <code>CTRL-G</code> u.  This is useful if you want an insert command to be undoable in
parts.  E.g., for each sentence.  <a href="/neovim-docs-web/en/insert#i_CTRL-G_u">i_CTRL-G_u</a></div>
<div class="old-help-para">Setting the value of <a href="/neovim-docs-web/en/options#'undolevels'">'undolevels'</a> also closes the undo block.  Even when the
new value is equal to the old value:<pre>let &amp;undolevels = &amp;undolevels</pre>
<h2 class="help-heading">4. Undo branches<span class="help-heading-tags">				<a name="undo-branches"></a><span class="help-tag">undo-branches</span> <a name="undo-tree"></a><span class="help-tag">undo-tree</span></span></h2></div>
<div class="old-help-para">Above we only discussed one line of undo/redo.  But it is also possible to
branch off.  This happens when you undo a few changes and then make a new
change.  The undone changes become a branch.  You can go to that branch with
the following commands.</div>
<div class="old-help-para">This is explained in the user manual: <a href="/neovim-docs-web/en/usr_32#usr_32.txt">usr_32.txt</a>.</div>
<div class="old-help-para">							<a name="%3Aundol"></a><code class="help-tag-right">:undol</code> <a name="%3Aundolist"></a><code class="help-tag">:undolist</code>
:undol[ist]		List the leafs in the tree of changes.  Example:
<div class="help-column_heading">			   number changes  when               saved</div>			       88      88  2010/01/04 14:25:53
			      108     107  08/07 12:47:51
			      136      46  13:33:01             7
			      166     164  3 seconds ago</div>
<div class="old-help-para">			The "number" column is the change number.  This number
			continuously increases and can be used to identify a
			specific undo-able change, see <a href="/neovim-docs-web/en/undo#%3Aundo">:undo</a>.
			The "changes" column is the number of changes to this
			leaf from the root of the tree.
			The "when" column is the date and time when this
			change was made.  The four possible formats are:
			    N seconds ago
			    HH:MM:SS             hour, minute, seconds
			    MM/DD HH:MM:SS       idem, with month and day
			    YYYY/MM/DD HH:MM:SS  idem, with year
			The "saved" column specifies, if this change was
			written to disk and which file write it was. This can
			be used with the <a href="/neovim-docs-web/en/undo#%3Alater">:later</a> and <a href="/neovim-docs-web/en/undo#%3Aearlier">:earlier</a> commands.
			For more details use the <a href="/neovim-docs-web/en/builtin#undotree()">undotree()</a> function.</div>
<div class="old-help-para">							<a name="g-"></a><code class="help-tag-right">g-</code>
g-			Go to older text state.  With a count repeat that many
			times.
							<a name="%3Aea"></a><code class="help-tag-right">:ea</code> <a name="%3Aearlier"></a><code class="help-tag">:earlier</code>
:earlier <code>{count}</code>	Go to older text state <code>{count}</code> times.
:earlier <code>{N}</code>s		Go to older text state about <code>{N}</code> seconds before.
:earlier <code>{N}</code>m		Go to older text state about <code>{N}</code> minutes before.
:earlier <code>{N}</code>h		Go to older text state about <code>{N}</code> hours before.
:earlier <code>{N}</code>d		Go to older text state about <code>{N}</code> days before.</div>
<div class="old-help-para">:earlier <code>{N}</code>f		Go to older text state <code>{N}</code> file writes before.
			When changes were made since the last write
			":earlier 1f" will revert the text to the state when
			it was written.  Otherwise it will go to the write
			before that.
			When at the state of the first file write, or when
			the file was not written, ":earlier 1f" will go to
			before the first change.</div>
<div class="old-help-para">							<a name="g%2B"></a><code class="help-tag-right">g+</code>
g+			Go to newer text state.  With a count repeat that many
			times.
							<a name="%3Alat"></a><code class="help-tag-right">:lat</code> <a name="%3Alater"></a><code class="help-tag">:later</code>
:later <code>{count}</code>		Go to newer text state <code>{count}</code> times.
:later <code>{N}</code>s		Go to newer text state about <code>{N}</code> seconds later.
:later <code>{N}</code>m		Go to newer text state about <code>{N}</code> minutes later.
:later <code>{N}</code>h		Go to newer text state about <code>{N}</code> hours later.
:later <code>{N}</code>d		Go to newer text state about <code>{N}</code> days later.</div>
<div class="old-help-para">:later <code>{N}</code>f		Go to newer text state <code>{N}</code> file writes later.
			When at the state of the last file write, ":later 1f"
			will go to the newest text state.</div>
<div class="old-help-para">Note that text states will become unreachable when undo information is cleared
for <a href="/neovim-docs-web/en/options#'undolevels'">'undolevels'</a>.</div>
<div class="old-help-para">Don't be surprised when moving through time shows multiple changes to take
place at a time.  This happens when moving through the undo tree and then
making a new change.</div>
<div class="old-help-para"><a name="_example"></a><h3 class="help-heading">EXAMPLE</h3></div>
<div class="old-help-para">Start with this text:
<div class="help-column_heading">	one two three</div></div>
<div class="old-help-para">Delete the first word by pressing "x" three times:
<div class="help-column_heading">	ne two three</div><div class="help-column_heading">	e two three</div><div class="help-column_heading">	 two three</div></div>
<div class="old-help-para">Now undo that by pressing "u" three times:
<div class="help-column_heading">	e two three</div><div class="help-column_heading">	ne two three</div><div class="help-column_heading">	one two three</div></div>
<div class="old-help-para">Delete the second word by pressing "x" three times:
<div class="help-column_heading">	one wo three</div><div class="help-column_heading">	one o three</div><div class="help-column_heading">	one  three</div></div>
<div class="old-help-para">Now undo that by using "g-" three times:
<div class="help-column_heading">	one o three</div><div class="help-column_heading">	one wo three</div><div class="help-column_heading">	 two three</div></div>
<div class="old-help-para">You are now back in the first undo branch, after deleting "one".  Repeating
"g-" will now bring you back to the original text:
<div class="help-column_heading">	e two three</div><div class="help-column_heading">	ne two three</div><div class="help-column_heading">	one two three</div></div>
<div class="old-help-para">Jump to the last change with ":later 1h":
<div class="help-column_heading">	one  three</div></div>
<div class="old-help-para">And back to the start again with ":earlier 1h":
<div class="help-column_heading">	one two three</div></div>
<div class="old-help-para">Note that using "u" and <code>CTRL-R</code> will not get you to all possible text states
while repeating "g-" and "g+" does.</div>
<div class="old-help-para"><h2 class="help-heading">5. Undo persistence<span class="help-heading-tags">		<a name="undo-persistence"></a><span class="help-tag">undo-persistence</span> <a name="persistent-undo"></a><span class="help-tag">persistent-undo</span></span></h2></div>
<div class="old-help-para">When unloading a buffer Vim normally destroys the tree of undos created for
that buffer.  By setting the <a href="/neovim-docs-web/en/options#'undofile'">'undofile'</a> option, Vim will automatically save
your undo history when you write a file and restore undo history when you edit
the file again.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'undofile'">'undofile'</a> option is checked after writing a file, before the BufWritePost
autocommands.  If you want to control what files to write undo information
for, you can use a BufWritePre autocommand:<pre>au BufWritePre /tmp/* setlocal noundofile</pre>
Vim saves undo trees in a separate undo file, one for each edited file, using
a simple scheme that maps filesystem paths directly to undo files. Vim will
detect if an undo file is no longer synchronized with the file it was written
for (with a hash of the file contents) and ignore it when the file was changed
after the undo file was written, to prevent corruption.  An undo file is also
ignored if its owner differs from the owner of the edited file, except when
the owner of the undo file is the current user.  Set <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> to get a
message about that when opening a file.</div>
<div class="old-help-para">Location of the undo files is controlled by the <a href="/neovim-docs-web/en/options#'undodir'">'undodir'</a> option, by default
they are saved to the dedicated directory in the application data folder.</div>
<div class="old-help-para">You can also save and restore undo histories by using ":wundo" and ":rundo"
respectively:
							<a name="%3Awundo"></a><code class="help-tag-right">:wundo</code> <a name="%3Arundo"></a><code class="help-tag">:rundo</code>
:wundo[!] <code>{file}</code>
		Write undo history to <code>{file}</code>.
		When <code>{file}</code> exists and it does not look like an undo file
		(the magic number at the start of the file is wrong), then
		this fails, unless the ! was added.
		If it exists and does look like an undo file it is
		overwritten. If there is no undo-history, nothing will be
		written.
		Implementation detail: Overwriting happens by first deleting
		the existing file and then creating a new file with the same
		name. So it is not possible to overwrite an existing undofile
		in a write-protected directory.</div>
<div class="old-help-para">:rundo <code>{file}</code>	Read undo history from <code>{file}</code>.</div>
<div class="old-help-para">You can use these in autocommands to explicitly specify the name of the
history file.  E.g.:<pre>au BufReadPost * call ReadUndo()
au BufWritePost * call WriteUndo()
func ReadUndo()
  if filereadable(expand('%:h') .. '/UNDO/' .. expand('%:t'))
    rundo %:h/UNDO/%:t
  endif
endfunc
func WriteUndo()
  let dirname = expand('%:h') .. '/UNDO'
  if !isdirectory(dirname)
    call mkdir(dirname)
  endif
  wundo %:h/UNDO/%:t
endfunc</pre>
You should keep <a href="/neovim-docs-web/en/options#'undofile'">'undofile'</a> off, otherwise you end up with two undo files for
every write.</div>
<div class="old-help-para">You can use the <a href="/neovim-docs-web/en/builtin#undofile()">undofile()</a> function to find out the file name that Vim would
use.</div>
<div class="old-help-para">Note that while reading/writing files and <a href="/neovim-docs-web/en/options#'undofile'">'undofile'</a> is set most errors will
be silent, unless <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> is set.  With :wundo and :rundo you will get more
error messages, e.g., when the file cannot be read or written.</div>
<div class="old-help-para">NOTE: undo files are never deleted by Vim.  You need to delete them yourself.</div>
<div class="old-help-para">Reading an existing undo file may fail for several reasons:
<a name="E822"></a><code class="help-tag">E822</code>  	It cannot be opened, because the file permissions don't allow it.
<a name="E823"></a><code class="help-tag">E823</code>  	The magic number at the start of the file doesn't match.  This usually
	means it is not an undo file.
<a name="E824"></a><code class="help-tag">E824</code>  	The version number of the undo file indicates that it's written by a
	newer version of Vim.  You need that newer version to open it.  Don't
	write the buffer if you want to keep the undo info in the file.
"File contents changed, cannot use undo info"
	The file text differs from when the undo file was written.  This means
	the undo file cannot be used, it would corrupt the text.  This also
	happens when <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> differs from when the undo file was written.
<a name="E825"></a><code class="help-tag">E825</code>  The undo file does not contain valid contents and cannot be used.
"Not reading undo file, owner differs"
	The undo file is owned by someone else than the owner of the text
	file.  For safety the undo file is not used.</div>
<div class="old-help-para">Writing an undo file may fail for these reasons:
<a name="E828"></a><code class="help-tag">E828</code>  	The file to be written cannot be created.  Perhaps you do not have
	write permissions in the directory.
"Cannot write undo file in any directory in <a href="/neovim-docs-web/en/options#'undodir'">'undodir'</a>"
	None of the directories in <a href="/neovim-docs-web/en/options#'undodir'">'undodir'</a> can be used.
"Will not overwrite with undo file, cannot read"
	A file exists with the name of the undo file to be written, but it
	cannot be read.  You may want to delete this file or rename it.
"Will not overwrite, this is not an undo file"
	A file exists with the name of the undo file to be written, but it
	does not start with the right magic number.  You may want to delete
	this file or rename it.
"Skipping undo file write, nothing to undo"
	There is no undo information to be written, nothing has been changed
	or <a href="/neovim-docs-web/en/options#'undolevels'">'undolevels'</a> is negative.
<a name="E829"></a><code class="help-tag">E829</code>  	An error occurred while writing the undo file.  You may want to try
	again.</div>
<div class="old-help-para"><h2 class="help-heading">6. Remarks about undo<span class="help-heading-tags">					<a name="undo-remarks"></a><span class="help-tag">undo-remarks</span></span></h2></div>
<div class="old-help-para">The number of changes that are remembered is set with the <a href="/neovim-docs-web/en/options#'undolevels'">'undolevels'</a> option.
If it is zero, the Vi-compatible way is always used.  If it is negative no
undo is possible.  Use this if you are running out of memory.</div>
<div class="old-help-para">							<a name="clear-undo"></a><code class="help-tag-right">clear-undo</code>
When you set <a href="/neovim-docs-web/en/options#'undolevels'">'undolevels'</a> to -1 the undo information is not immediately
cleared, this happens at the next change.  To force clearing the undo
information you can use these commands:<pre>:let old_undolevels = &amp;undolevels
:set undolevels=-1
:exe "normal a \&lt;BS&gt;\&lt;Esc&gt;"
:let &amp;undolevels = old_undolevels
:unlet old_undolevels</pre>
Marks for the buffer ('a to 'z) are also saved and restored, together with the
text.</div>
<div class="old-help-para">When all changes have been undone, the buffer is not considered to be changed.
It is then possible to exit Vim with ":q" instead of ":q!".
Note that this is relative to the last write of the file.  Typing "u" after
":w" actually changes the buffer, compared to what was written, so the buffer
is considered changed then.</div>
<div class="old-help-para">When manual <a href="/neovim-docs-web/en/fold#folding">folding</a> is being used, the folds are not saved and restored.
Only changes completely within a fold will keep the fold as it was, because
the first and last line of the fold don't change.</div>
<div class="old-help-para">The numbered registers can also be used for undoing deletes.  Each time you
delete text, it is put into register "1.  The contents of register "1 are
shifted to "2, etc.  The contents of register "9 are lost.  You can now get
back the most recent deleted text with the put command: '"1P'.  (also, if the
deleted text was the result of the last delete or copy operation, 'P' or 'p'
also works as this puts the contents of the unnamed register).  You can get
back the text of three deletes ago with '"3P'.</div>
<div class="old-help-para">						<a name="redo-register"></a><code class="help-tag-right">redo-register</code>
If you want to get back more than one part of deleted text, you can use a
special feature of the repeat command ".".  It will increase the number of the
register used.  So if you first do '"1P', the following "." will result in a
'"2P'.  Repeating this will result in all numbered registers being inserted.</div>
<div class="old-help-para">Example:	If you deleted text with 'dd....' it can be restored with
		'"1P....'.</div>
<div class="old-help-para">If you don't know in which register the deleted text is, you can use the
:display command.  An alternative is to try the first register with '"1P', and
if it is not what you want do 'u.'.  This will remove the contents of the
first put, and repeat the put command for the second register.  Repeat the
'u.' until you got what you want.</div>

  
  