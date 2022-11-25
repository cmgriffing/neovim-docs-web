---
title:  Usr_22
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_22.txt"></a><a name="22.1"></a><h1> Usr_22</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_22.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			   Finding the file to edit</div>
<div class="old-help-para">Files can be found everywhere.  So how do you find them?  Vim offers various
ways to browse the directory tree.  There are commands to jump to a file that
is mentioned in another.  And Vim remembers which files have been edited
before.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_22#22.1">22.1</a>  	The file browser
<a href="/neovim-docs-web/en/usr_22#22.2">22.2</a>  	The current directory
<a href="/neovim-docs-web/en/usr_22#22.3">22.3</a>  	Finding a file
<a href="/neovim-docs-web/en/usr_22#22.4">22.4</a>  	The buffer list</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_23#usr_23.txt">usr_23.txt</a>  Editing other files
 Previous chapter: <a href="/neovim-docs-web/en/usr_21#usr_21.txt">usr_21.txt</a>  Go away and come back
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	The file browser</h2></div>
<div class="old-help-para">Vim has a plugin that makes it possible to edit a directory.  Try this:<pre>:edit .</pre>
Through the magic of autocommands and Vim scripts, the window will be filled
with the contents of the directory.  It looks like this:</div>
<div class="old-help-para"><div class="help-column_heading">" ============================================================================</div><div class="help-column_heading">" Netrw Directory Listing                                        (netrw v109)</div><div class="help-column_heading">"   Sorted by      name</div><div class="help-column_heading">"   Sort sequence: [\/]$,\.h$,\.c$,\.cpp$,*,\.info$,\.swp$,\.o$\.obj$,\.bak$</div><div class="help-column_heading">"   Quick Help: <code>&lt;F1&gt;</code>:help  -:go up dir  D:delete  R:rename  s:sort-by  x:exec</div><div class="help-column_heading">" ============================================================================</div><div class="help-column_heading">../</div><div class="help-column_heading">./</div><div class="help-column_heading">check/</div><div class="help-column_heading">Makefile</div><div class="help-column_heading">autocmd.txt</div><div class="help-column_heading">change.txt</div><div class="help-column_heading">eval.txt~</div><div class="help-column_heading">filetype.txt~</div><div class="help-column_heading">help.txt.info</div></div>
<div class="old-help-para">You can see these items:</div>
<div class="old-help-para">1.  The name of the browsing tool and its version number
2.  The name of the browsing directory
3.  The method of sorting (may be by name, time, or size)
4.  How names are to be sorted (directories first, then.h files,
.c files, etc)
5.  How to get help (use the <code>&lt;F1&gt;</code> key), and an abbreviated listing
    of available commands
6.  A listing of files, including "../", which allows one to list
    the parent directory.</div>
<div class="old-help-para">If you have syntax highlighting enabled, the different parts are highlighted
so as to make it easier to spot them.</div>
<div class="old-help-para">You can use Normal mode Vim commands to move around in the text.  For example,
move the cursor atop a file and press <code>&lt;Enter&gt;</code>; you will then be editing that
file.  To go back to the browser use ":edit ." again, or use ":Explore".
CTRL-O also works.</div>
<div class="old-help-para">Try using <code>&lt;Enter&gt;</code> while the cursor is atop a directory name.  The result is
that the file browser moves into that directory and displays the items found
there.  Pressing <code>&lt;Enter&gt;</code> on the first directory "../" moves you one level
higher.  Pressing "-" does the same thing, without the need to move to the
"../" item first.</div>
<div class="old-help-para">You can press <code>&lt;F1&gt;</code> to get help on the things you can do in the netrw file
browser.  This is what you get:<pre>9. Directory Browsing         netrw-browse   netrw-dir   netrw-list   netrw-help

MAPS                                                                 netrw-maps
          &lt;F1&gt;.............Help.......................................|netrw-help|
          &lt;cr&gt;.............Browsing...................................|netrw-cr|
          &lt;del&gt;............Deleting Files or Directories..............|netrw-delete|
          -................Going Up...................................|netrw--|
          a................Hiding Files or Directories................|netrw-a|
          mb...............Bookmarking a Directory....................|netrw-mb|
          gb...............Changing to a Bookmarked Directory.........|netrw-gb|
          cd...............Make Browsing Directory The Current Dir....|netrw-c|
          d................Make A New Directory.......................|netrw-d|
          D................Deleting Files or Directories..............|netrw-D|
          &lt;c-h&gt;............Edit File/Directory Hiding List............|netrw-ctrl-h|
          i................Change Listing Style.......................|netrw-i|
          &lt;c-l&gt;............Refreshing the Listing.....................|netrw-ctrl-l|
          o................Browsing with a Horizontal Split...........|netrw-o|
          p................Use Preview Window.........................|netrw-p|
          P................Edit in Previous Window....................|netrw-p|
          q................Listing Bookmarks and History..............|netrw-qb|
          r................Reversing Sorting Order....................|netrw-r|</pre></div>
<div class="old-help-para">    	(etc)</div>
<div class="old-help-para">The <code>&lt;F1&gt;</code> key thus brings you to a netrw directory browsing contents help page.
It's a regular help page; use the usual <a href="/neovim-docs-web/en/tagsrch#CTRL-%5D">CTRL-]</a> to jump to tagged help items
and <a href="/neovim-docs-web/en/motion#CTRL-O">CTRL-O</a> to jump back.</div>
<div class="old-help-para">To select files for display and editing: (with the cursor is atop a filename)</div>
<div class="old-help-para">	<code>&lt;enter&gt;</code>		Open the file in the current window.	   <a href="/neovim-docs-web/en/pi_netrw#netrw-cr">netrw-cr</a>
	o		Horizontally split window and display file <a href="/neovim-docs-web/en/pi_netrw#netrw-o">netrw-o</a>
	v		Vertically split window and display file   <a href="/neovim-docs-web/en/pi_netrw#netrw-v">netrw-v</a>
	p		Use the <a href="/neovim-docs-web/en/windows#preview-window">preview-window</a> 		   <a href="/neovim-docs-web/en/pi_netrw#netrw-p">netrw-p</a>
	P		Edit in the previous window		   <a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a>
	t		Open file in a new tab			   <a href="/neovim-docs-web/en/pi_netrw#netrw-t">netrw-t</a></div>
<div class="old-help-para">The following normal-mode commands may be used to control the browser display:</div>
<div class="old-help-para">	i		Controls listing style (thin, long, wide, and tree).
			The long listing includes size and date information.
	s		Repeatedly pressing s will change the way the files
			are sorted; one may sort on name, modification time,
			or size.
	r		Reverse the sorting order.</div>
<div class="old-help-para">As a sampling of extra normal-mode commands:</div>
<div class="old-help-para">	cd		Change Vim's notion of the current directory to be
			the same as the browser directory.  (see
			<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_keepdir">g:netrw_keepdir</a> to control this, too)
	R		Rename the file or directory under the cursor; a
			prompt will be issued for the new name.
	D		Delete the file or directory under the cursor; a
			confirmation request will be issued.
	mb gb		Make bookmark/goto bookmark</div>
<div class="old-help-para">One may also use command mode; again, just a sampling:</div>
<div class="old-help-para">	:Explore [directory]	Browse specified/current directory
	:NetrwSettings		A comprehensive list of your current netrw
				settings with help linkage.</div>
<div class="old-help-para">The netrw browser is not limited to just your local machine; one may use
urls such as:    (that trailing / is important)</div>
<div class="old-help-para">	:Explore ftp://somehost/path/to/dir/
	:e scp://somehost/path/to/dir/</div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/pi_netrw#netrw-browse">netrw-browse</a> for more.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="22.2"></a><span class="help-tag">22.2</span>  	The current directory</span></h2></div>
<div class="old-help-para">Just like the shell, Vim has the concept of a current directory.  Suppose you
are in your home directory and want to edit several files in a directory
"VeryLongFileName".  You could do:<pre>:edit VeryLongFileName/file1.txt
:edit VeryLongFileName/file2.txt
:edit VeryLongFileName/file3.txt</pre>
To avoid much of the typing, do this:<pre>:cd VeryLongFileName
:edit file1.txt
:edit file2.txt
:edit file3.txt</pre>
The ":cd" command changes the current directory.  You can see what the current
directory is with the ":pwd" command:<pre>:pwd
/home/Bram/VeryLongFileName</pre>
Vim remembers the last directory that you used.  Use "cd -" to go back to it.
Example:<pre>:pwd
/home/Bram/VeryLongFileName
:cd /etc
:pwd
/etc
:cd -
:pwd
/home/Bram/VeryLongFileName
:cd -
:pwd
/etc</pre>
<a name="_window-local-directory"></a><h3 class="help-heading">WINDOW LOCAL DIRECTORY</h3></div>
<div class="old-help-para">When you split a window, both windows use the same current directory.  When
you want to edit a number of files somewhere else in the new window, you can
make it use a different directory, without changing the current directory in
the other window.  This is called a local directory.<pre>:pwd
/home/Bram/VeryLongFileName
:split
:lcd /etc
:pwd
/etc
CTRL-W w
:pwd
/home/Bram/VeryLongFileName</pre>
So long as no <code>:lcd</code> command has been used, all windows share the same current
directory.  Doing a <code>:cd</code> command in one window will also change the current
directory of the other window.
   For a window where <code>:lcd</code> has been used a different current directory is
remembered.  Using <code>:cd</code> or <code>:lcd</code> in other windows will not change it.
   When using a <code>:cd</code> command in a window that uses a different current
directory, it will go back to using the shared directory.</div>
<div class="old-help-para"><a name="_tab-local-directory"></a><h3 class="help-heading">TAB LOCAL DIRECTORY</h3></div>
<div class="old-help-para">When you open a new tab page, it uses the directory of the window in the
previous tab page from which the new tab page was opened. You can change the
directory of the current tab page using the <code>:tcd</code> command. All the windows in
a tab page share this directory except for windows with a window-local
directory. Any new windows opened in this tab page will use this directory as
the current working directory. Using a <code>:cd</code> command in a tab page will not
change the working directory of tab pages which have a tab local directory.
When the global working directory is changed using the <code>:cd</code> command in a tab
page, it will also change the current tab page working directory.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="22.3"></a><span class="help-tag">22.3</span>  	Finding a file</span></h2></div>
<div class="old-help-para">You are editing a C program that contains this line:</div>
<div class="old-help-para"><div class="help-column_heading">	#include "inits.h"</div></div>
<div class="old-help-para">You want to see what is in that "inits.h" file.  Move the cursor on the name
of the file and type:<pre>gf</pre>
Vim will find the file and edit it.
   What if the file is not in the current directory?  Vim will use the <a href="/neovim-docs-web/en/options#'path'">'path'</a>
option to find the file.  This option is a list of directory names where to
look for your file.
   Suppose you have your include files located in "c:/prog/include".  This
command will add it to the <a href="/neovim-docs-web/en/options#'path'">'path'</a> option:<pre>:set path+=c:/prog/include</pre>
This directory is an absolute path.  No matter where you are, it will be the
same place.  What if you have located files in a subdirectory, below where the
file is?  Then you can specify a relative path name.  This starts with a dot:
<pre>:set path+=./proto</pre>
This tells Vim to look in the directory "proto", below the directory where the
file in which you use "gf" is.  Thus using "gf" on "inits.h" will make Vim
look for "proto/inits.h", starting in the directory of the file.
   Without the "./", thus "proto", Vim would look in the "proto" directory
below the current directory.  And the current directory might not be where the
file that you are editing is located.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'path'">'path'</a> option allows specifying the directories where to search for files
in many more ways.  See the help on the <a href="/neovim-docs-web/en/options#'path'">'path'</a> option.
   The <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> option is used to decide which characters are included in the
file name, and which ones are not (e.g., the " character in the example
above).</div>
<div class="old-help-para">When you know the file name, but it's not to be found in the file, you can
type it:<pre>:find inits.h</pre>
Vim will then use the <a href="/neovim-docs-web/en/options#'path'">'path'</a> option to try and locate the file.  This is the
same as the ":edit" command, except for the use of <a href="/neovim-docs-web/en/options#'path'">'path'</a>.</div>
<div class="old-help-para">To open the found file in a new window use <code>CTRL-W</code> f instead of "gf", or use
":sfind" instead of ":find".</div>
<div class="old-help-para">A nice way to directly start Vim to edit a file somewhere in the <a href="/neovim-docs-web/en/options#'path'">'path'</a>:<pre>vim "+find stdio.h"</pre>
This finds the file "stdio.h" in your value of <a href="/neovim-docs-web/en/options#'path'">'path'</a>.  The quotes are
necessary to have one argument <a href="/neovim-docs-web/en/starting#-%2Bc">-+c</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="22.4"></a><span class="help-tag">22.4</span>  	The buffer list</span></h2></div>
<div class="old-help-para">The Vim editor uses the term buffer to describe a file being edited.
Actually, a buffer is a copy of the file that you edit.  When you finish
changing the buffer, you write the contents of the buffer to the file.
Buffers not only contain file contents, but also all the marks, settings, and
other stuff that goes with it.</div>
<div class="old-help-para"><a name="_hidden-buffers"></a><h3 class="help-heading">HIDDEN BUFFERS</h3></div>
<div class="old-help-para">Suppose you are editing the file one.txt and need to edit the file two.txt.
You could simply use ":edit two.txt", but since you made changes to one.txt
that won't work.  You also don't want to write one.txt yet.  Vim has a
solution for you:<pre>:hide edit two.txt</pre>
The buffer "one.txt" disappears from the screen, but Vim still knows that you
are editing this buffer, so it keeps the modified text.  This is called a
hidden buffer: The buffer contains text, but you can't see it.
   The argument of ":hide" is another command.  ":hide" makes that command
behave as if the <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> option was set.  You could also set this option
yourself.  The effect is that when any buffer is abandoned, it becomes hidden.
   Be careful!  When you have hidden buffers with changes, don't exit Vim
without making sure you have saved all the buffers.</div>
<div class="old-help-para"><a name="_inactive-buffers"></a><h3 class="help-heading">INACTIVE BUFFERS</h3></div>
<div class="old-help-para">   When a buffer has been used once, Vim remembers some information about it.
When it is not displayed in a window and it is not hidden, it is still in the
buffer list.  This is called an inactive buffer.  Overview:</div>
<div class="old-help-para">   Active		Appears in a window, text loaded.
   Hidden		Not in a window, text loaded.
   Inactive		Not in a window, no text loaded.</div>
<div class="old-help-para">The inactive buffers are remembered, because Vim keeps information about them,
like marks.  And remembering the file name is useful too, so that you can see
which files you have edited.  And edit them again.</div>
<div class="old-help-para"><a name="_listing-buffers"></a><h3 class="help-heading">LISTING BUFFERS</h3></div>
<div class="old-help-para">View the buffer list with this command:<pre>:buffers</pre>
A command which does the same, is not so obvious to list buffers, but is much
shorter to type:<pre>:ls</pre>
The output could look like this:</div>
<div class="old-help-para"><div class="help-column_heading">  1 #h   "help.txt"			line 62</div><div class="help-column_heading">  2 %a + "usr_21.txt"			line 1</div><div class="help-column_heading">  3      "usr_toc.txt"			line 1</div></div>
<div class="old-help-para">The first column contains the buffer number.  You can use this to edit the
buffer without having to type the name, see below.
   After the buffer number come the flags.  Then the name of the file
and the line number where the cursor was the last time.
   The flags that can appear are these (from left to right):</div>
<div class="old-help-para">	u	Buffer is unlisted <a href="/neovim-docs-web/en/windows#unlisted-buffer">unlisted-buffer</a>.
	 %	Current buffer.
	 #	Alternate buffer.
	  a	Buffer is loaded and displayed.
	  h	Buffer is loaded but hidden.
	   =	Buffer is read-only.
	   -		Buffer is not modifiable, the <a href="/neovim-docs-web/en/options#'modifiable'">'modifiable'</a> option is off.
	    +	Buffer has been modified.</div>
<div class="old-help-para">EDITING A BUFFER</div>
<div class="old-help-para">You can edit a buffer by its number.  That avoids having to type the file
name:<pre>:buffer 2</pre>
But the only way to know the number is by looking in the buffer list.  You can
use the name, or part of it, instead:<pre>:buffer help</pre>
Vim will find the best match for the name you type.  If there is only one
buffer that matches the name, it will be used.  In this case "help.txt".
   To open a buffer in a new window:<pre>:sbuffer 3</pre>
This works with a name as well.</div>
<div class="old-help-para"><a name="_using-the-buffer-list"></a><h3 class="help-heading">USING THE BUFFER LIST</h3></div>
<div class="old-help-para">You can move around in the buffer list with these commands:</div>
<div class="old-help-para">	:bnext		go to next buffer
	:bprevious	go to previous buffer
	:bfirst		go to the first buffer
	:blast		go to the last buffer</div>
<div class="old-help-para">To remove a buffer from the list, use this command:<pre>:bdelete 3</pre>
Again, this also works with a name.
   If you delete a buffer that was active (visible in a window), that window
will be closed.  If you delete the current buffer, the current window will be
closed.  If it was the last window, Vim will find another buffer to edit.  You
can't be editing nothing!</div>
<div class="old-help-para">	Note:
	Even after removing the buffer with ":bdelete" Vim still remembers it.
	It's actually made "unlisted", it no longer appears in the list from
	":buffers".  The ":buffers!" command will list unlisted buffers (yes,
	Vim can do the impossible).  To really make Vim forget about a buffer,
	use ":bwipe".  Also see the <a href="/neovim-docs-web/en/options#'buflisted'">'buflisted'</a> option.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_23#usr_23.txt">usr_23.txt</a>  Editing other files</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  