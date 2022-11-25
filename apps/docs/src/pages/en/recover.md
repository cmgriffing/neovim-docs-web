---
title:  Recover
layout: ../../layouts/MainLayout.astro
---

  <a name="recover.txt"></a><a name="crash-recovery"></a><h1> Recover</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/recover.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Recovery after a crash</div>
<div class="old-help-para">You have spent several hours typing in that text that has to be finished
next morning, and then disaster strikes: Your computer crashes.</div>
<div class="old-help-para">			DON'T PANIC!</div>
<div class="old-help-para">You can recover most of your changes from the files that Vim uses to store
the contents of the file.  Mostly you can recover your work with one command:
	vim -r filename</div>
<div class="old-help-para"><h2 class="help-heading">1. The swap file<span class="help-heading-tags">					<a name="swap-file"></a><span class="help-tag">swap-file</span></span></h2></div>
<div class="old-help-para">Vim stores the things you changed in a swap file.  Using the original file
you started from plus the swap file you can mostly recover your work.</div>
<div class="old-help-para">You can see the name of the current swap file being used with the command:</div>
<div class="old-help-para">	:sw[apname]					<a name="%3Asw"></a><code class="help-tag-right">:sw</code> <a name="%3Aswapname"></a><code class="help-tag">:swapname</code></div>
<div class="old-help-para">Or you can use the <a href="/neovim-docs-web/en/builtin#swapname()">swapname()</a> function, which also allows for seeing the
swap file name of other buffers.</div>
<div class="old-help-para">The name of the swap file is normally the same as the file you are editing,
with the extension ".swp".
<div class="help-li" style=""> On Unix, a '.' is prepended to swap file names in the same directory as the
  edited file.  This avoids that the swap file shows up in a directory
  listing.
</div><div class="help-li" style=""> If this file already exists (e.g., when you are recovering from a crash) a
  warning is given and another extension is used, ".swo", ".swn", etc.
</div><div class="help-li" style=""> An existing file will never be overwritten.
</div><div class="help-li" style=""> The swap file is deleted as soon as Vim stops editing the file.
</div></div>
<div class="old-help-para">							<a name="E326"></a><code class="help-tag-right">E326</code>
Technical: If the ".swp" file name already exists, the last character is
	   decremented until there is no file with that name or ".saa" is
	   reached.  In the last case, no swap file is created.</div>
<div class="old-help-para">By setting the <a href="/neovim-docs-web/en/options#'directory'">'directory'</a> option you can place the swap file in another place
than where the edited file is.
Advantages:
<div class="help-li" style=""> You will not pollute the directories with ".swp" files.
</div><div class="help-li" style=""> When the <a href="/neovim-docs-web/en/options#'directory'">'directory'</a> is on another partition, reduce the risk of damaging
  the file system where the file is (in a crash).
Disadvantages:
</div><div class="help-li" style=""> You can get name collisions from files with the same name but in different
  directories (although Vim tries to avoid that by comparing the path name).
  This will result in bogus ATTENTION warning messages.
</div><div class="help-li" style=""> When you use your home directory, and somebody else tries to edit the same
  file, that user will not see your swap file and will not get the ATTENTION
  warning message.
</div></div>
<div class="old-help-para">If you want to put swap files in a fixed place, put a command resembling the
following ones in your vimrc:
	:set dir=~/tmp		(for Unix)
	:set dir=c:\\tmp	(for Win32)
This is also very handy when editing files on floppy.  Of course you will have
to create that "tmp" directory for this to work!</div>
<div class="old-help-para">For read-only files, a swap file is not used right away. The swap file is
created only when making changes.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a> option can be reset to avoid creating a swapfile.  And the
<a href="/neovim-docs-web/en/recover#%3Anoswapfile">:noswapfile</a> modifier can be used to not create a swapfile for a new buffer.</div>
<div class="old-help-para">:nos[wapfile]   <code>{command}</code>			<a name="%3Anos"></a><code class="help-tag-right">:nos</code> <a name="%3Anoswapfile"></a><code class="help-tag">:noswapfile</code>
		Execute <code>{command}</code>. If it contains a command that loads a new
		buffer, it will be loaded without creating a swapfile and the
		<a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a> option will be reset.  If a buffer already had a
		swapfile it is not removed and <a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a> is not reset.</div>
<div class="old-help-para"><div class="help-column_heading">Detecting an existing swap file</div></div>
<div class="old-help-para">You can find this in the user manual, section <a href="/neovim-docs-web/en/usr_11#11.3">11.3</a>.</div>
<div class="old-help-para"><div class="help-column_heading">Updating the swapfile</div></div>
<div class="old-help-para">The swap file is updated after typing 200 characters or when you have not
typed anything for four seconds.  This only happens if the buffer was
changed, not when you only moved around.  The reason why it is not kept up to
date all the time is that this would slow down normal work too much.  You can
change the 200 character count with the <a href="/neovim-docs-web/en/options#'updatecount'">'updatecount'</a> option.  You can set
the time with the <a href="/neovim-docs-web/en/options#'updatetime'">'updatetime'</a> option.  The time is given in milliseconds.
After writing to the swap file Vim syncs the file to disk.</div>
<div class="old-help-para">If the writing to the swap file is not wanted, it can be switched off by
setting the <a href="/neovim-docs-web/en/options#'updatecount'">'updatecount'</a> option to 0.  The same is done when starting Vim
with the "-n" option.  Writing can be switched back on by setting the
<a href="/neovim-docs-web/en/options#'updatecount'">'updatecount'</a> option to non-zero.  Swap files will be created for all buffers
when doing this.  But when setting <a href="/neovim-docs-web/en/options#'updatecount'">'updatecount'</a> to zero, the existing swap
files will not be removed, it will only affect files that will be opened
after this.</div>
<div class="old-help-para">If you want to make sure that your changes are in the swap file use this
command:</div>
<div class="old-help-para">					<a name="%3Apre"></a><code class="help-tag-right">:pre</code> <a name="%3Apreserve"></a><code class="help-tag">:preserve</code> <a name="E313"></a><code class="help-tag">E313</code> <a name="E314"></a><code class="help-tag">E314</code>
:pre[serve]		Write all text for the current buffer into its swap
			file.  The original file is no longer needed for
			recovery.</div>
<div class="old-help-para">A Vim swap file can be recognized by the first six characters: "b0VIM ".
After that comes the version number, e.g., "3.0".</div>
<div class="old-help-para"><div class="help-column_heading">Links and symbolic links</div></div>
<div class="old-help-para">On Unix it is possible to have two names for the same file.  This can be done
with hard links and with symbolic links (symlinks).</div>
<div class="old-help-para">For hard links Vim does not know the other name of the file.  Therefore, the
name of the swapfile will be based on the name you used to edit the file.
There is no check for editing the same file by the other name too, because Vim
cannot find the other swapfile (except for searching all of your harddisk,
which would be very slow).</div>
<div class="old-help-para">For symbolic links Vim resolves the links to find the name of the actual file.
The swap file name is based on that name.  Thus it doesn't matter by what name
you edit the file, the swap file name will normally be the same.  However,
there are exceptions:
<div class="help-li" style=""> When the directory of the actual file is not writable the swapfile is put
  elsewhere.
</div><div class="help-li" style=""> When the symbolic links somehow create a loop you get an <a name="E773"></a><code class="help-tag">E773</code> error
  message and the unmodified file name will be used.  You won't be able to
  save your file normally.
</div></div>
<div class="old-help-para"><h2 class="help-heading">2. Recovery<span class="help-heading-tags">					<a name="recovery"></a><span class="help-tag">recovery</span> <a name="E308"></a><span class="help-tag">E308</span> <a name="E311"></a><span class="help-tag">E311</span></span></h2></div>
<div class="old-help-para">Basic file recovery is explained in the user manual: <a href="/neovim-docs-web/en/usr_11#usr_11.txt">usr_11.txt</a>.</div>
<div class="old-help-para">Another way to do recovery is to start Vim and use the ":recover" command.
This is easy when you start Vim to edit a file and you get the "ATTENTION:
Found a swap file ..." message.  In this case the single command ":recover"
will do the work.  You can also give the name of the file or the swap file to
the recover command:
					<a name="%3Arec"></a><code class="help-tag-right">:rec</code> <a name="%3Arecover"></a><code class="help-tag">:recover</code> <a name="E305"></a><code class="help-tag">E305</code> <a name="E306"></a><code class="help-tag">E306</code> <a name="E307"></a><code class="help-tag">E307</code>
:rec[over] [file]	Try to recover [file] from the swap file.  If [file]
			is not given use the file name for the current
			buffer.  The current contents of the buffer are lost.
			This command fails if the buffer was modified.</div>
<div class="old-help-para">:rec[over]! [file]	Like ":recover", but any changes in the current
			buffer are lost.</div>
<div class="old-help-para">							<a name="E312"></a><code class="help-tag-right">E312</code> <a name="E309"></a><code class="help-tag">E309</code> <a name="E310"></a><code class="help-tag">E310</code>
Vim has some intelligence about what to do if the swap file is corrupt in
some way.  If Vim has doubt about what it found, it will give an error
message and insert lines with "???" in the text.  If you see an error message
while recovering, search in the file for "???" to see what is wrong.  You may
want to cut and paste to get the text you need.</div>
<div class="old-help-para">The most common remark is "???LINES MISSING".  This means that Vim cannot read
the text from the original file.  This can happen if the system crashed and
parts of the original file were not written to disk.</div>
<div class="old-help-para">Be sure that the recovery was successful before overwriting the original
file or deleting the swap file.  It is good practice to write the recovered
file elsewhere and run <a href="/neovim-docs-web/en/options#'diff'">'diff'</a> to find out if the changes you want are in the
recovered file.  Or use <a href="/neovim-docs-web/en/diff#%3ADiffOrig">:DiffOrig</a>.</div>
<div class="old-help-para">Once you are sure the recovery is ok delete the swap file.  Otherwise, you
will continue to get warning messages that the ".swp" file already exists.</div>

  
  