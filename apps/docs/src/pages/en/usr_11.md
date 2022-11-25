---
title:  Usr_11
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_11.txt"></a><a name="11.1"></a><h1> Usr_11</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_11.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			   Recovering from a crash</div>
<div class="old-help-para">Did your computer crash?  And you just spent hours editing?  Don't panic!  Vim
stores enough information to be able to restore most of your work.  This
chapter shows you how to get your work back and explains how the swap file is
used.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_11#11.1">11.1</a>  	Basic recovery
<a href="/neovim-docs-web/en/usr_11#11.2">11.2</a>  	Where is the swap file?
<a href="/neovim-docs-web/en/usr_11#11.3">11.3</a>  	Crashed or not?
<a href="/neovim-docs-web/en/usr_11#11.4">11.4</a>  	Further reading</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_12#usr_12.txt">usr_12.txt</a>  Clever tricks
 Previous chapter: <a href="/neovim-docs-web/en/usr_10#usr_10.txt">usr_10.txt</a>  Making big changes
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Basic recovery</h2></div>
<div class="old-help-para">In most cases recovering a file is quite simple, assuming you know which file
you were editing (and the harddisk is still working).  Start Vim on the file,
with the "-r" argument added:<pre>vim -r help.txt</pre>
Vim will read the swap file (used to store text you were editing) and may read
bits and pieces of the original file.  If Vim recovered your changes you will
see these messages (with different file names, of course):</div>
<div class="old-help-para"><div class="help-column_heading">	Using swap file ".help.txt.swp"</div><div class="help-column_heading">	Original file "~/vim/runtime/doc/help.txt"</div><div class="help-column_heading">	Recovery completed. You should check if everything is OK.</div><div class="help-column_heading">	(You might want to write out this file under another name</div><div class="help-column_heading">	and run diff with the original file to check for changes)</div><div class="help-column_heading">	You may want to delete the .swp file now.</div></div>
<div class="old-help-para">To be on the safe side, write this file under another name:<pre>:write help.txt.recovered</pre>
Compare the file with the original file to check if you ended up with what you
expected.  Diff mode is very useful for this <a href="/neovim-docs-web/en/usr_08#08.7">08.7</a>.  For example:<pre>:write help.txt.recovered
:edit #
:diffsp help.txt</pre>
Watch out for the original file to contain a more recent version (you saved
the file just before the computer crashed).  And check that no lines are
missing (something went wrong that Vim could not recover).
   If Vim produces warning messages when recovering, read them carefully.
This is rare though.</div>
<div class="old-help-para">If the recovery resulted in text that is exactly the same as the file
contents, you will get this message:</div>
<div class="old-help-para"><div class="help-column_heading">	Using swap file ".help.txt.swp"</div><div class="help-column_heading">	Original file "~/vim/runtime/doc/help.txt"</div><div class="help-column_heading">	Recovery completed. Buffer contents equals file contents.</div><div class="help-column_heading">	You may want to delete the .swp file now.</div></div>
<div class="old-help-para">This usually happens if you already recovered your changes, or you wrote the
file after making changes.  It is safe to delete the swap file now.</div>
<div class="old-help-para">It is normal that the last few changes can not be recovered.  Vim flushes the
changes to disk when you don't type for about four seconds, or after typing
about two hundred characters.  This is set with the <a href="/neovim-docs-web/en/options#'updatetime'">'updatetime'</a> and
<a href="/neovim-docs-web/en/options#'updatecount'">'updatecount'</a> options.  Thus when Vim didn't get a chance to save itself when
the system went down, the changes after the last flush will be lost.</div>
<div class="old-help-para">If you were editing without a file name, give an empty string as argument:<pre>vim -r ""</pre>
You must be in the right directory, otherwise Vim can't find the swap file.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="11.2"></a><span class="help-tag">11.2</span>  	Where is the swap file?</span></h2></div>
<div class="old-help-para">Vim can store the swap file in several places.  Normally it is in the same
directory as the original file.  To find it, change to the directory of the
file, and use:<pre>vim -r</pre>
Vim will list the swap files that it can find.  It will also look in other
directories where the swap file for files in the current directory may be
located.  It will not find swap files in any other directories though, it
doesn't search the directory tree.
   The output could look like this:</div>
<div class="old-help-para"><div class="help-column_heading">	Swap files found:</div><div class="help-column_heading">	   In current directory:</div><div class="help-column_heading">	1.    .main.c.swp</div><div class="help-column_heading">		  owned by: mool   dated: Tue May 29 21:00:25 2001</div><div class="help-column_heading">		 file name: ~mool/vim/vim6/src/main.c</div><div class="help-column_heading">		  modified: YES</div><div class="help-column_heading">		 user name: mool   host name: masaka.moolenaar.net</div><div class="help-column_heading">		process ID: 12525</div><div class="help-column_heading">	   In directory ~/tmp:</div><div class="help-column_heading">	      -- none --</div><div class="help-column_heading">	   In directory /var/tmp:</div><div class="help-column_heading">	      -- none --</div><div class="help-column_heading">	   In directory /tmp:</div><div class="help-column_heading">	      -- none --</div></div>
<div class="old-help-para">If there are several swap files that look like they may be the one you want to
use, a list is given of these swap files and you are requested to enter the
number of the one you want to use.  Carefully look at the dates to decide
which one you want to use.
   In case you don't know which one to use, just try them one by one and check
the resulting files if they are what you expected.</div>
<div class="old-help-para">USING A SPECIFIC SWAP FILE</div>
<div class="old-help-para">If you know which swap file needs to be used, you can recover by giving the
swap file name.  Vim will then find out the name of the original file from
the swap file.</div>
<div class="old-help-para">Example:<pre>vim -r .help.txt.swo</pre>
This is also handy when the swap file is in another directory than expected.
Vim recognizes files with the pattern.s[uvw][a-z] as swap files.</div>
<div class="old-help-para">If this still does not work, see what file names Vim reports and rename the
files accordingly.  Check the <a href="/neovim-docs-web/en/options#'directory'">'directory'</a> option to see where Vim may have
put the swap file.</div>
<div class="old-help-para">	Note:
	Vim tries to find the swap file by searching the directories in the
	<a href="/neovim-docs-web/en/options#'dir'">'dir'</a> option, looking for files that match "filename.sw?".  If
	wildcard expansion doesn't work (e.g., when the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> option is
	invalid), Vim does a desperate try to find the file "filename.swp".
	If that fails too, you will have to give the name of the swapfile
	itself to be able to recover the file.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="11.3"></a><span class="help-tag">11.3</span>  	Crashed or not?<span class="help-heading-tags">					<a name="ATTENTION"></a><span class="help-tag">ATTENTION</span> <a name="E325"></a><span class="help-tag">E325</span></span></span></h2></div>
<div class="old-help-para">Vim tries to protect you from doing stupid things.  Suppose you innocently
start editing a file, expecting the contents of the file to show up.  Instead,
Vim produces a very long message:</div>
<div class="old-help-para"><div class="help-column_heading">		E325: ATTENTION</div><div class="help-column_heading">	Found a swap file by the name ".main.c.swp"</div><div class="help-column_heading">		  owned by: mool   dated: Tue May 29 21:09:28 2001</div><div class="help-column_heading">		 file name: ~mool/vim/vim6/src/main.c</div><div class="help-column_heading">		  modified: no</div><div class="help-column_heading">		 user name: mool   host name: masaka.moolenaar.net</div><div class="help-column_heading">		process ID: 12559 (still running)</div><div class="help-column_heading">	While opening file "main.c"</div><div class="help-column_heading">		     dated: Tue May 29 19:46:12 2001</div> ~
<div class="help-column_heading">	(1) Another program may be editing the same file.</div><div class="help-column_heading">	    If this is the case, be careful not to end up with two</div><div class="help-column_heading">	    different instances of the same file when making changes.</div><div class="help-column_heading">	    Quit, or continue with caution.</div> ~
<div class="help-column_heading">	(2) An edit session for this file crashed.</div><div class="help-column_heading">	    If this is the case, use ":recover" or "vim -r main.c"</div><div class="help-column_heading">	    to recover the changes (see ":help recovery").</div><div class="help-column_heading">	    If you did this already, delete the swap file ".main.c.swp"</div><div class="help-column_heading">	    to avoid this message.</div></div>
<div class="old-help-para">You get this message, because, when starting to edit a file, Vim checks if a
swap file already exists for that file.  If there is one, there must be
something wrong.  It may be one of these two situations.</div>
<div class="old-help-para">1. Another edit session is active on this file.  Look in the message for the
   line with "process ID".  It might look like this:</div>
<div class="old-help-para"><div class="help-column_heading">		process ID: 12559 (still running)</div></div>
<div class="old-help-para">   The text "(still running)" indicates that the process editing this file
   runs on the same computer.  When working on a non-Unix system you will not
   get this extra hint.  When editing a file over a network, you may not see
   the hint, because the process might be running on another computer.  In
   those two cases you must find out what the situation is yourself.
      If there is another Vim editing the same file, continuing to edit will
   result in two versions of the same file.  The one that is written last will
   overwrite the other one, resulting in loss of changes.  You better quit
   this Vim.</div>
<div class="old-help-para">2. The swap file might be the result from a previous crash of Vim or the
   computer.  Check the dates mentioned in the message.  If the date of the
   swap file is newer than the file you were editing, and this line appears:</div>
<div class="old-help-para"><div class="help-column_heading">		modified: YES</div></div>
<div class="old-help-para">   Then you very likely have a crashed edit session that is worth recovering.
      If the date of the file is newer than the date of the swap file, then
   either it was changed after the crash (perhaps you recovered it earlier,
   but didn't delete the swap file?), or else the file was saved before the
   crash but after the last write of the swap file (then you're lucky: you
   don't even need that old swap file).  Vim will warn you for this with this
   extra line:</div>
<div class="old-help-para"><div class="help-column_heading">      NEWER than swap file!</div></div>
<div class="old-help-para">NOTE that in the following situation Vim knows the swap file is not useful and
will automatically delete it:
<div class="help-li" style=""> The file is a valid swap file (Magic number is correct).
</div><div class="help-li" style=""> The flag that the file was modified is not set.
</div><div class="help-li" style=""> The process is not running.
</div></div>
<div class="old-help-para">You can programmatically deal with this situation with the <a href="/neovim-docs-web/en/autocmd#FileChangedShell">FileChangedShell</a>
autocommand event.</div>
<div class="old-help-para"><div class="help-column_heading">UNREADABLE SWAP FILE</div></div>
<div class="old-help-para">Sometimes the line</div>
<div class="old-help-para"><div class="help-column_heading">	[cannot be read]</div></div>
<div class="old-help-para">will appear under the name of the swap file.  This can be good or bad,
depending on circumstances.</div>
<div class="old-help-para">It is good if a previous editing session crashed without having made any
changes to the file.  Then a directory listing of the swap file will show
that it has zero bytes.  You may delete it and proceed.</div>
<div class="old-help-para">It is slightly bad if you don't have read permission for the swap file.  You
may want to view the file read-only, or quit.  On multi-user systems, if you
yourself did the last changes under a different login name, a logout
followed by a login under that other name might cure the "read error".  Or
else you might want to find out who last edited (or is editing) the file and
have a talk with them.</div>
<div class="old-help-para">It is very bad if it means there is a physical read error on the disk
containing the swap file.  Fortunately, this almost never happens.
You may want to view the file read-only at first (if you can), to see the
extent of the changes that were "forgotten".  If you are the one in charge of
that file, be prepared to redo your last changes.</div>
<div class="old-help-para">WHAT TO DO?					<a name="swap-exists-choices"></a><code class="help-tag-right">swap-exists-choices</code></div>
<div class="old-help-para">If dialogs are supported you will be asked to select one of six choices:</div>
<div class="old-help-para"><div class="help-column_heading">  Swap file ".main.c.swp" already exists!</div><div class="help-column_heading">  [O]pen Read-Only, (E)dit anyway, (R)ecover, (Q)uit, (A)bort, (D)elete it:</div></div>
<div class="old-help-para">O  Open the file readonly.  Use this when you just want to view the file and
   don't need to recover it.  You might want to use this when you know someone
   else is editing the file, but you just want to look in it and not make
   changes.</div>
<div class="old-help-para">E  Edit the file anyway.  Use this with caution!  If the file is being edited
   in another Vim, you might end up with two versions of the file.  Vim will
   try to warn you when this happens, but better be safe than sorry.</div>
<div class="old-help-para">R  Recover the file from the swap file.  Use this if you know that the swap
   file contains changes that you want to recover.</div>
<div class="old-help-para">Q  Quit.  This avoids starting to edit the file.  Use this if there is another
   Vim editing the same file.
      When you just started Vim, this will exit Vim.  When starting Vim with
   files in several windows, Vim quits only if there is a swap file for the
   first one.  When using an edit command, the file will not be loaded and you
   are taken back to the previously edited file.</div>
<div class="old-help-para">A  Abort.  Like Quit, but also abort further commands.  This is useful when
   loading a script that edits several files, such as a session with multiple
   windows.</div>
<div class="old-help-para">D  Delete the swap file.  Use this when you are sure you no longer need it.
   For example, when it doesn't contain changes, or when the file itself is
   newer than the swap file.
      On Unix this choice is only offered when the process that created the
   swap file does not appear to be running.</div>
<div class="old-help-para">If you do not get the dialog (you are running a version of Vim that does not
support it), you will have to do it manually.  To recover the file, use this
command:<pre>:recover</pre>
Vim cannot always detect that a swap file already exists for a file.  This is
the case when the other edit session puts the swap files in another directory
or when the path name for the file is different when editing it on different
machines.  Therefore, don't rely on Vim always warning you.</div>
<div class="old-help-para">If you really don't want to see this message, you can add the 'A' flag to the
<a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a> option.  But it's very unusual that you need this.</div>
<div class="old-help-para">For programmatic access to the swap file, see <a href="/neovim-docs-web/en/builtin#swapinfo()">swapinfo()</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="11.4"></a><span class="help-tag">11.4</span>  	Further reading</span></h2></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/recover#swap-file">swap-file</a>  	An explanation about where the swap file will be created and
		what its name is.
<a href="/neovim-docs-web/en/recover#%3Apreserve">:preserve</a>  	Manually flushing the swap file to disk.
<a href="/neovim-docs-web/en/recover#%3Aswapname">:swapname</a>  	See the name of the swap file for the current file.
<a href="/neovim-docs-web/en/options#'updatecount'">'updatecount'</a>	Number of key strokes after which the swap file is flushed to
		disk.
<a href="/neovim-docs-web/en/options#'updatetime'">'updatetime'</a>	Timeout after which the swap file is flushed to disk.
<a href="/neovim-docs-web/en/options#'directory'">'directory'</a>	List of directory names where to store the swap file.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_12#usr_12.txt">usr_12.txt</a>  Clever tricks</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  