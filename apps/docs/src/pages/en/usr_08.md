---
title:  Usr_08
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_08.txt"></a><a name="08.1"></a><h1> Usr_08</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_08.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			      Splitting windows</div>
<div class="old-help-para">Display two different files above each other.  Or view two locations in the
file at the same time.  See the difference between two files by putting them
side by side.  All this is possible with split windows.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_08#08.1">08.1</a>  	Split a window
<a href="/neovim-docs-web/en/usr_08#08.2">08.2</a>  	Split a window on another file
<a href="/neovim-docs-web/en/usr_08#08.3">08.3</a>  	Window size
<a href="/neovim-docs-web/en/usr_08#08.4">08.4</a>  	Vertical splits
<a href="/neovim-docs-web/en/usr_08#08.5">08.5</a>  	Moving windows
<a href="/neovim-docs-web/en/usr_08#08.6">08.6</a>  	Commands for all windows
<a href="/neovim-docs-web/en/usr_08#08.7">08.7</a>  	Viewing differences with diff mode
<a href="/neovim-docs-web/en/usr_08#08.8">08.8</a>  	Various
<a href="/neovim-docs-web/en/usr_08#08.9">08.9</a>  	Tab pages</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_09#usr_09.txt">usr_09.txt</a>  Using the GUI
 Previous chapter: <a href="/neovim-docs-web/en/usr_07#usr_07.txt">usr_07.txt</a>  Editing more than one file
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Split a window</h2></div>
<div class="old-help-para">The easiest way to open a new window is to use the following command:<pre>:split</pre>
This command splits the screen into two windows and leaves the cursor in the
top one:</div>
<div class="old-help-para">	+----------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0Dtop%20one%3A%0A%0A%09%2B----------------------------------%2B%0A%09%7C%2F%2A%20file%20one.c%20%2A%2F%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7Cone.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0D%60%60%60">/* file one.c */</a>		   |
	|~				   |
	|~				   |
one.c=============================
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7Cone.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%2F%2A%20file%20one.c%20%2A%2F%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7Cone.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%09%09%09%09%20%20%20%7C%0D%60%60%60">/* file one.c */</a>		   |
	|~				   |
one.c=============================
	|				   |
	+----------------------------------+</div>
<div class="old-help-para">What you see here is two windows on the same file.  The line with "====" is
the status line.  It displays information about the window above it.  (In
practice the status line will be in reverse video.)
   The two windows allow you to view two parts of the same file.  For example,
you could make the top window show the variable declarations of a program, and
the bottom one the code that uses these variables.</div>
<div class="old-help-para">The <code>CTRL-W</code> w command can be used to jump between the windows.  If you are in
the top window, <code>CTRL-W</code> w jumps to the window below it.  If you are in the
bottom window it will jump to the first window.  (<code>CTRL-W</code> <code>CTRL-W</code> does the same
thing, in case you let go of the CTRL key a bit later.)</div>
<div class="old-help-para"><a name="_close-the-window"></a><h3 class="help-heading">CLOSE THE WINDOW</h3></div>
<div class="old-help-para">To close a window, use the command:<pre>:close</pre>
Actually, any command that quits editing a file works, like ":quit" and "ZZ".
But ":close" prevents you from accidentally exiting Vim when you close the
last window.</div>
<div class="old-help-para"><a name="_closing-all-other-windows"></a><h3 class="help-heading">CLOSING ALL OTHER WINDOWS</h3></div>
<div class="old-help-para">If you have opened a whole bunch of windows, but now want to concentrate on
one of them, this command will be useful:<pre>:only</pre>
This closes all windows, except for the current one.  If any of the other
windows has changes, you will get an error message and that window won't be
closed.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="08.2"></a><span class="help-tag">08.2</span>  	Split a window on another file</span></h2></div>
<div class="old-help-para">The following command opens a second window and starts editing the given file:
<pre>:split two.c</pre>
If you were editing one.c, then the result looks like this:</div>
<div class="old-help-para">	+----------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0DIf%20you%20were%20editing%20one.c%2C%20then%20the%20result%20looks%20like%20this%3A%0A%0A%09%2B----------------------------------%2B%0A%09%7C%2F%2A%20file%20two.c%20%2A%2F%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7Ctwo.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0D%60%60%60">/* file two.c */</a>		   |
	|~				   |
	|~				   |
two.c=============================
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7Ctwo.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%2F%2A%20file%20one.c%20%2A%2F%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7Cone.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%09%09%09%09%20%20%20%7C%0D%60%60%60">/* file one.c */</a>		   |
	|~				   |
one.c=============================
	|				   |
	+----------------------------------+</div>
<div class="old-help-para">To open a window on a new, empty file, use this:<pre>:new</pre>
You can repeat the ":split" and ":new" commands to create as many windows as
you like.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="08.3"></a><span class="help-tag">08.3</span>  	Window size</span></h2></div>
<div class="old-help-para">The ":split" command can take a number argument.  If specified, this will be
the height of the new window.  For example, the following opens a new window
three lines high and starts editing the file alpha.c:<pre>:3split alpha.c</pre>
For existing windows you can change the size in several ways.  When you have a
working mouse, it is easy: Move the mouse pointer to the status line that
separates two windows, and drag it up or down.</div>
<div class="old-help-para">To increase the size of a window:<pre>CTRL-W +</pre>
To decrease it:<pre>CTRL-W -</pre>
Both of these commands take a count and increase or decrease the window size
by that many lines.  Thus "4 <code>CTRL-W</code> +" make the window four lines higher.</div>
<div class="old-help-para">To set the window height to a specified number of lines:<pre>{height}CTRL-W _</pre>
That's: a number <code>{height}</code>, <code>CTRL-W</code> and then an underscore (the - key with Shift
on English-US keyboards).
   To make a window as high as it can be, use the <code>CTRL-W</code> _ command without a
count.</div>
<div class="old-help-para"><a name="_using-the-mouse"></a><h3 class="help-heading">USING THE MOUSE</h3></div>
<div class="old-help-para">In Vim you can do many things very quickly from the keyboard.  Unfortunately,
the window resizing commands require quite a bit of typing.  In this case,
using the mouse is faster.  Position the mouse pointer on a status line.  Now
press the left mouse button and drag.  The status line will move, thus making
the window on one side higher and the other smaller.</div>
<div class="old-help-para"><a name="_options"></a><h3 class="help-heading">OPTIONS</h3></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'winheight'">'winheight'</a> option can be set to a minimal desired height of a window and
<a href="/neovim-docs-web/en/options#'winminheight'">'winminheight'</a> to a hard minimum height.
   Likewise, there is <a href="/neovim-docs-web/en/options#'winwidth'">'winwidth'</a> for the minimal desired width and
<a href="/neovim-docs-web/en/options#'winminwidth'">'winminwidth'</a> for the hard minimum width.
   The <a href="/neovim-docs-web/en/options#'equalalways'">'equalalways'</a> option, when set, makes Vim equalize the windows sizes
when a window is closed or opened.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="08.4"></a><span class="help-tag">08.4</span>  	Vertical splits</span></h2></div>
<div class="old-help-para">The ":split" command creates the new window above the current one.  To make
the window appear at the left side, use:<pre>:vsplit</pre>
or:<pre>:vsplit two.c</pre>
The result looks something like this:</div>
<div class="old-help-para">	+--------------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0DThe%20result%20looks%20something%20like%20this%3A%0A%0A%09%2B--------------------------------------%2B%0A%09%7C%2F%2A%20file%20two.c%20%2A%2F%20%20%20%7C%2F%2A%20file%20one.c%20%2A%2F%20%20%7C%0A%09%7C~%09%09%20%20%20%20%7C~%09%09%20%20%20%20%20%20%20%7C%0A%09%7C~%09%09%20%20%20%20%7C~%09%09%20%20%20%20%20%20%20%7C%0A%09%7C~%09%09%20%20%20%20%7C~%09%09%20%20%20%20%20%20%20%7C%0D%60%60%60">/* file two.c */</a>   |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0DThe%20result%20looks%20something%20like%20this%3A%0A%0A%09%2B--------------------------------------%2B%0A%09%7C%2F%2A%20file%20two.c%20%2A%2F%20%20%20%7C%2F%2A%20file%20one.c%20%2A%2F%20%20%7C%0A%09%7C~%09%09%20%20%20%20%7C~%09%09%20%20%20%20%20%20%20%7C%0A%09%7C~%09%09%20%20%20%20%7C~%09%09%20%20%20%20%20%20%20%7C%0A%09%7C~%09%09%20%20%20%20%7C~%09%09%20%20%20%20%20%20%20%7C%0D%60%60%60">/*</a> file one.c/  |
	|~		    |~		       |
	|~		    |~		       |
	|~		    |~		       |
two.c===============one.c=============
	|				       |
	+--------------------------------------+</div>
<div class="old-help-para">Actually, the | lines in the middle will be in reverse video.  This is called
the vertical separator.  It separates the two windows left and right of it.</div>
<div class="old-help-para">There is also the ":vnew" command, to open a vertically split window on a new,
empty file.  Another way to do this:<pre>:vertical new</pre>
The ":vertical" command can be inserted before another command that splits a
window.  This will cause that command to split the window vertically instead
of horizontally.  (If the command doesn't split a window, it works
unmodified.)</div>
<div class="old-help-para"><a name="_moving-between-windows"></a><h3 class="help-heading">MOVING BETWEEN WINDOWS</h3></div>
<div class="old-help-para">Since you can split windows horizontally and vertically as much as you like,
you can create almost any layout of windows.  Then you can use these commands
to move between them:</div>
<div class="old-help-para">	<code>CTRL-W</code> h	move to the window on the left
	<code>CTRL-W</code> j	move to the window below
	<code>CTRL-W</code> k	move to the window above
	<code>CTRL-W</code> l	move to the window on the right</div>
<div class="old-help-para">	<code>CTRL-W</code> t	move to the TOP window
	<code>CTRL-W</code> b	move to the BOTTOM window</div>
<div class="old-help-para">You will notice the same letters as used for moving the cursor.  And the
cursor keys can also be used, if you like.
   More commands to move to other windows: <a href="/neovim-docs-web/en/quickref#Q_wi">Q_wi</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="08.5"></a><span class="help-tag">08.5</span>  	Moving windows</span></h2></div>
<div class="old-help-para">You have split a few windows, but now they are in the wrong place.  Then you
need a command to move the window somewhere else.  For example, you have three
windows like this:</div>
<div class="old-help-para">	+----------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0Dwindows%20like%20this%3A%0A%0A%09%2B----------------------------------%2B%0A%09%7C%2F%2A%20file%20two.c%20%2A%2F%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7Ctwo.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0D%60%60%60">/* file two.c */</a>		   |
	|~				   |
	|~				   |
two.c=============================
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7Ctwo.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%2F%2A%20file%20three.c%20%2A%2F%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7Cthree.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0D%60%60%60">/* file three.c */</a>		   |
	|~				   |
	|~				   |
three.c===========================
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7Cthree.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%2F%2A%20file%20one.c%20%2A%2F%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7Cone.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%09%09%09%09%20%20%20%7C%0D%60%60%60">/* file one.c */</a>		   |
	|~				   |
one.c=============================
	|				   |
	+----------------------------------+</div>
<div class="old-help-para">Clearly the last one should be at the top.  Go to that window (using <code>CTRL-W</code> w)
and then type this command:<pre>CTRL-W K</pre>
This uses the uppercase letter K.  What happens is that the window is moved to
the very top.  You will notice that K is again used for moving upwards.
   When you have vertical splits, <code>CTRL-W</code> K will move the current window to the
top and make it occupy the full width of the Vim window.  If this is your
layout:</div>
<div class="old-help-para">	+-------------------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0Dlayout%3A%0A%0A%09%2B-------------------------------------------%2B%0A%09%7C%2F%2A%20two.c%20%2A%2F%20%20%7C%2F%2A%20three.c%20%2A%2F%20%20%7C%2F%2A%20one.c%20%2A%2F%20%20%7C%0A%09%7C~%09%20%20%20%20%20%20%7C~%09%20%20%20%20%20%20%7C~%09%20%20%20%20%7C%0A%09%7C~%09%20%20%20%20%20%20%7C~%09%20%20%20%20%20%20%7C~%09%20%20%20%20%7C%0A%09%7C~%09%20%20%20%20%20%20%7C~%09%20%20%20%20%20%20%7C~%09%20%20%20%20%7C%0D%60%60%60">/* two.c */  |/* three.c */  |/* one.c */</a>  |
	|~	      |~	      |~	    |
	|~	      |~	      |~	    |
	|~	      |~	      |~	    |
	|~	      |~	      |~	    |
	|~	      |~	      |~	    |
two.c=========three.c=========one.c========
	|					    |
	+-------------------------------------------+</div>
<div class="old-help-para">Then using <code>CTRL-W</code> K in the middle window (three.c) will result in:</div>
<div class="old-help-para">	+-------------------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0DThen%20using%20CTRL-W%20K%20in%20the%20middle%20window%20(three.c)%20will%20result%20in%3A%0A%0A%09%2B-------------------------------------------%2B%0A%09%7C%2F%2A%20three.c%20%2A%2F%09%09%09%09%20%20%20%20%7C%0A%09%7C~%09%09%09%09%09%20%20%20%20%7C%0A%09%7C~%09%09%09%09%09%20%20%20%20%7C%0A%09%7Cthree.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0D%60%60%60">/* three.c */</a>				    |
	|~					    |
	|~					    |
three.c====================================
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C~%09%09%09%09%09%20%20%20%20%7C%0A%09%7C~%09%09%09%09%09%20%20%20%20%7C%0A%09%7Cthree.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%2F%2A%20two.c%20%2A%2F%09%20%20%20%20%20%20%20%7C%2F%2A%20one.c%20%2A%2F%09%20%20%20%20%7C%0A%09%7C~%09%09%20%20%20%20%20%20%20%7C~%09%09%20%20%20%20%7C%0A%09%7Ctwo.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3Done.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%09%09%09%09%09%20%20%20%20%7C%0D%60%60%60">/* two.c */	       |/* one.c */</a>	    |
	|~		       |~		    |
two.c==================one.c===============
	|					    |
	+-------------------------------------------+</div>
<div class="old-help-para">The other three similar commands (you can probably guess these now):</div>
<div class="old-help-para">	<code>CTRL-W</code> H	move window to the far left
	<code>CTRL-W</code> J	move window to the bottom
	<code>CTRL-W</code> L	move window to the far right</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="08.6"></a><span class="help-tag">08.6</span>  	Commands for all windows</span></h2></div>
<div class="old-help-para">When you have several windows open and you want to quit Vim, you can close
each window separately.  A quicker way is using this command:<pre>:qall</pre>
This stands for "quit all".  If any of the windows contain changes, Vim will
not exit.  The cursor will automatically be positioned in a window with
changes.  You can then either use ":write" to save the changes, or ":quit!" to
throw them away.</div>
<div class="old-help-para">If you know there are windows with changes, and you want to save all these
changes, use this command:<pre>:wall</pre>
This stands for "write all".  But actually, it only writes files with
changes.  Vim knows it doesn't make sense to write files that were not
changed.
   And then there is the combination of ":qall" and ":wall": the "write and
quit all" command:<pre>:wqall</pre>
This writes all modified files and quits Vim.
   Finally, there is a command that quits Vim and throws away all changes:<pre>:qall!</pre>
Be careful, there is no way to undo this command!</div>
<div class="old-help-para">OPENING A WINDOW FOR ALL ARGUMENTS</div>
<div class="old-help-para">To make Vim open a window for each file, start it with the "-o" argument:<pre>vim -o one.txt two.txt three.txt</pre>
This results in:</div>
<div class="old-help-para">	+-------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0DThis%20results%20in%3A%0A%0A%09%2B-------------------------------%2B%0A%09%7Cfile%20one.txt%09%09%09%7C%0A%09%7C~%09%09%09%09%7C%0A%09%7Cone.txt%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7Cfile%20two.txt%09%09%09%7C%0D%60%60%60">file</a> one.txt			|
	|~				|
one.txt========================
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cfile%20one.txt%09%09%09%7C%0A%09%7C~%09%09%09%09%7C%0A%09%7Cone.txt%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7Cfile%20two.txt%09%09%09%7C%0A%09%7C~%09%09%09%09%7C%0A%09%7Ctwo.txt%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7Cfile%20three.txt%09%09%09%7C%0D%60%60%60">file</a> two.txt			|
	|~				|
two.txt========================
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cfile%20two.txt%09%09%09%7C%0A%09%7C~%09%09%09%09%7C%0A%09%7Ctwo.txt%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7Cfile%20three.txt%09%09%09%7C%0A%09%7C~%09%09%09%09%7C%0A%09%7Cthree.txt%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%09%09%09%09%7C%0D%60%60%60">file</a> three.txt			|
	|~				|
three.txt======================
	|				|
	+-------------------------------+</div>
<div class="old-help-para">The "-O" argument is used to get vertically split windows.
   When Vim is already running, the ":all" command opens a window for each
file in the argument list.  ":vertical all" does it with vertical splits.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="08.7"></a><span class="help-tag">08.7</span>  	Viewing differences with diff mode</span></h2></div>
<div class="old-help-para">There is a special way to start Nvim, which shows the differences between two
files.  Let's take a file "main.c" and insert a few characters in one line.
Write this file with the <a href="/neovim-docs-web/en/options#'backup'">'backup'</a> option set, so that the backup file
"main.c~" will contain the previous version of the file.
Type this command in a shell to start Nvim in diff mode:<pre>nvim -d main.c~ main.c</pre>
Vim will start, with two windows side by side.  You will only see the line
in which you added characters, and a few lines above and below it.</div>
<div class="old-help-para">	 VV		      VV
	+-----------------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%20VV%09%09%20%20%20%20%20%20VV%0A%09%2B-----------------------------------------%2B%0A%09%7C%2B%20%2B--123%20lines%3A%20%2F%2A%20a%7C%2B%20%2B--123%20lines%3A%20%2F%2A%20a%7C%20%20%3C-%20fold%0A%09%7C%20%20text%09%09%20%20%20%20%20%7C%09text%09%09%20%20%7C%0A%09%7C%20%20text%09%09%20%20%20%20%20%7C%09text%09%09%20%20%7C%0A%09%7C%20%20text%09%09%20%20%20%20%20%7C%09text%09%09%20%20%7C%0D%60%60%60">+</a> +--123 lines: /* a|+ +--123 lines: /* a|  &lt;- fold
	|  text		     |	text		  |
	|  text		     |	text		  |
	|  text		     |	text		  |
	|  text		     |	changed text	  |  &lt;- changed line
	|  text		     |	text		  |
	|  text		     |	------------------|  &lt;- deleted line
	|  text		     |	text		  |
	|  text		     |	text		  |
	|  text		     |	text		  |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C%20%20text%09%09%20%20%20%20%20%7C%09text%09%09%20%20%7C%0A%09%7C%20%20text%09%09%20%20%20%20%20%7C%09text%09%09%20%20%7C%0A%09%7C%20%20text%09%09%20%20%20%20%20%7C%09text%09%09%20%20%7C%0A%09%7C%2B%20%2B--432%20lines%3A%20text%7C%2B%20%2B--432%20lines%3A%20text%7C%20%20%3C-%20fold%0A%09%7C%20%20~%09%09%20%20%20%20%20%7C%09~%09%09%20%20%7C%0A%09%7C%20%20~%09%09%20%20%20%20%20%7C%09~%09%09%20%20%7C%0A%09%7Cmain.c~%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3Dmain.c%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0D%60%60%60">+</a> +--432 lines: text|+ +--432 lines: text|  &lt;- fold
	|  ~		     |	~		  |
	|  ~		     |	~		  |
main.c~==============main.c==============
	|					  |
	+-----------------------------------------+</div>
<div class="old-help-para">(This picture doesn't show the highlighting, use "nvim -d" for that.)</div>
<div class="old-help-para">The lines that were not modified have been collapsed into one line.  This is
called a closed fold.  They are indicated in the picture with "&lt;- fold".  Thus
the single fold line at the top stands for 123 text lines.  These lines are
equal in both files.
   The line marked with "&lt;- changed line" is highlighted, and the inserted
text is displayed with another color.  This clearly shows what the difference
is between the two files.
   The line that was deleted is displayed with "---" in the main.c window.
See the "&lt;- deleted line" marker in the picture.  These characters are not
really there.  They just fill up main.c, so that it displays the same number
of lines as the other window.</div>
<div class="old-help-para"><a name="_the-fold-column"></a><h3 class="help-heading">THE FOLD COLUMN</h3></div>
<div class="old-help-para">Each window has a column on the left with a slightly different background.  In
the picture above these are indicated with "VV".  You notice there is a plus
character there, in front of each closed fold.  Move the mouse pointer to that
plus and click the left button.  The fold will open, and you can see the text
that it contains.
   The fold column contains a minus sign for an open fold.  If you click on
this -, the fold will close.
   Obviously, this only works when you have a working mouse.  You can also use
"zo" to open a fold and "zc" to close it.</div>
<div class="old-help-para"><a name="_diffing-in-vim"></a><h3 class="help-heading">DIFFING IN VIM</h3></div>
<div class="old-help-para">Another way to start in diff mode can be done from inside Vim.  Edit the
"main.c" file, then make a split and show the differences:<pre>:edit main.c
:vertical diffsplit main.c~</pre>
The ":vertical" command is used to make the window split vertically.  If you
omit this, you will get a horizontal split.</div>
<div class="old-help-para">If you have a patch or diff file, you can use the third way to start diff
mode.  First edit the file to which the patch applies.  Then tell Vim the name
of the patch file:<pre>:edit main.c
:vertical diffpatch main.c.diff</pre>
WARNING: The patch file must contain only one patch, for the file you are
editing.  Otherwise you will get a lot of error messages, and some files might
be patched unexpectedly.
   The patching will only be done to the copy of the file in Vim.  The file on
your harddisk will remain unmodified (until you decide to write the file).</div>
<div class="old-help-para"><a name="_scroll-binding"></a><h3 class="help-heading">SCROLL BINDING</h3></div>
<div class="old-help-para">When the files have more changes, you can scroll in the usual way.  Vim will
try to keep both the windows start at the same position, so you can easily see
the differences side by side.
   When you don't want this for a moment, use this command:<pre>:set noscrollbind</pre>
<a name="_jumping-to-changes"></a><h3 class="help-heading">JUMPING TO CHANGES</h3></div>
<div class="old-help-para">When you have disabled folding in some way, it may be difficult to find the
changes.  Use this command to jump forward to the next change:<pre>]c</pre>
To go the other way use:<pre>[c</pre>
Prepended a count to jump further away.</div>
<div class="old-help-para"><a name="_removing-changes"></a><h3 class="help-heading">REMOVING CHANGES</h3></div>
<div class="old-help-para">You can move text from one window to the other.  This either removes
differences or adds new ones.  Vim doesn't keep the highlighting updated in
all situations.  To update it use this command:<pre>:diffupdate</pre>
To remove a difference, you can move the text in a highlighted block from one
window to another.  Take the "main.c" and "main.c~" example above.  Move the
cursor to the left window, on the line that was deleted in the other window.
Now type this command:<pre>dp</pre>
The change will be removed by putting the text of the current window in the
other window.  "dp" stands for "diff put".
   You can also do it the other way around.  Move the cursor to the right
window, to the line where "changed" was inserted.  Now type this command:<pre>do</pre>
The change will now be removed by getting the text from the other window.
Since there are no changes left now, Vim puts all text in a closed fold.
"do" stands for "diff obtain".  "dg" would have been better, but that already
has a different meaning ("dgg" deletes from the cursor until the first line).</div>
<div class="old-help-para">For details about diff mode, see <a href="/neovim-docs-web/en/diff#diff-mode">diff-mode</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="08.8"></a><span class="help-tag">08.8</span>  	Various</span></h2></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'laststatus'">'laststatus'</a> option can be used to specify when the last window has a
statusline:</div>
<div class="old-help-para">	0	never
	1	only when there are split windows (the default)
	2	always
	3	have a global statusline at the bottom instead of one for each
		window</div>
<div class="old-help-para">Many commands that edit another file have a variant that splits the window.
For Command-line commands this is done by prepending an "s".  For example:
":tag" jumps to a tag, ":stag" splits the window and jumps to a
tag.
   For Normal mode commands a <code>CTRL-W</code> is prepended.  <code>CTRL-^</code> jumps to the
alternate file, <code>CTRL-W</code> <code>CTRL-^</code> splits the window and edits the alternate file.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'splitbelow'">'splitbelow'</a> option can be set to make a new window appear below the
current window.  The <a href="/neovim-docs-web/en/options#'splitright'">'splitright'</a> option can be set to make a vertically split
window appear right of the current window.</div>
<div class="old-help-para">When splitting a window you can prepend a modifier command to tell where the
window is to appear:</div>
<div class="old-help-para">	:leftabove <code>{cmd}</code>	left or above the current window
	:aboveleft <code>{cmd}</code>	idem
	:rightbelow <code>{cmd}</code>	right or below the current window
	:belowright <code>{cmd}</code>	idem
	:topleft <code>{cmd}</code>		at the top or left of the Vim window
	:botright <code>{cmd}</code>		at the bottom or right of the Vim window</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="08.9"></a><span class="help-tag">08.9</span>  	Tab pages</span></h2></div>
<div class="old-help-para">You will have noticed that windows never overlap.  That means you quickly run
out of screen space.  The solution for this is called Tab pages.</div>
<div class="old-help-para">Assume you are editing "thisfile".  To create a new tab page use this command:<pre>:tabedit thatfile</pre>
This will edit the file "thatfile" in a window that occupies the whole Vim
window.  And you will notice a bar at the top with the two file names:</div>
<div class="old-help-para">	+----------------------------------+
	| thisfile | /thatfile/ __________X|    (thatfile is bold)
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B----------------------------------%2B%0A%09%7C%20thisfile%20%7C%20%2Fthatfile%2F%20__________X%7C%20%20%20%20(thatfile%20is%20bold)%0A%09%7C%2F%2A%20thatfile%20%2A%2F%09%09%09%20%20%20%7C%0A%09%7Cthat%09%09%09%09%20%20%20%7C%0A%09%7Cthat%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0D%60%60%60">/* thatfile */</a>			   |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%2B----------------------------------%2B%0A%09%7C%20thisfile%20%7C%20%2Fthatfile%2F%20__________X%7C%20%20%20%20(thatfile%20is%20bold)%0A%09%7C%2F%2A%20thatfile%20%2A%2F%09%09%09%20%20%20%7C%0A%09%7Cthat%09%09%09%09%20%20%20%7C%0A%09%7Cthat%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0D%60%60%60">that</a>				   |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C%20thisfile%20%7C%20%2Fthatfile%2F%20__________X%7C%20%20%20%20(thatfile%20is%20bold)%0A%09%7C%2F%2A%20thatfile%20%2A%2F%09%09%09%20%20%20%7C%0A%09%7Cthat%09%09%09%09%20%20%20%7C%0A%09%7Cthat%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0D%60%60%60">that</a>				   |
	|~				   |
	|~				   |
	|~				   |
	|				   |
	+----------------------------------+</div>
<div class="old-help-para">You now have two tab pages.  The first one has a window for "thisfile" and the
second one a window for "thatfile".  It's like two pages that are on top of
each other, with a tab sticking out of each page showing the file name.</div>
<div class="old-help-para">Now use the mouse to click on "thisfile" in the top line.  The result is</div>
<div class="old-help-para">	+----------------------------------+
	| /thisfile/ | thatfile __________X|    (thisfile is bold)
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B----------------------------------%2B%0A%09%7C%20%2Fthisfile%2F%20%7C%20thatfile%20__________X%7C%20%20%20%20(thisfile%20is%20bold)%0A%09%7C%2F%2A%20thisfile%20%2A%2F%09%09%09%20%20%20%7C%0A%09%7Cthis%09%09%09%09%20%20%20%7C%0A%09%7Cthis%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0D%60%60%60">/* thisfile */</a>			   |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%2B----------------------------------%2B%0A%09%7C%20%2Fthisfile%2F%20%7C%20thatfile%20__________X%7C%20%20%20%20(thisfile%20is%20bold)%0A%09%7C%2F%2A%20thisfile%20%2A%2F%09%09%09%20%20%20%7C%0A%09%7Cthis%09%09%09%09%20%20%20%7C%0A%09%7Cthis%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0D%60%60%60">this</a>				   |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C%20%2Fthisfile%2F%20%7C%20thatfile%20__________X%7C%20%20%20%20(thisfile%20is%20bold)%0A%09%7C%2F%2A%20thisfile%20%2A%2F%09%09%09%20%20%20%7C%0A%09%7Cthis%09%09%09%09%20%20%20%7C%0A%09%7Cthis%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%7C%0D%60%60%60">this</a>				   |
	|~				   |
	|~				   |
	|~				   |
	|				   |
	+----------------------------------+</div>
<div class="old-help-para">Thus you can switch between tab pages by clicking on the label in the top
line.  If you don't have a mouse or don't want to use it, you can use the "gt"
command.  Mnemonic: Goto Tab.</div>
<div class="old-help-para">Now let's create another tab page with the command:<pre>:tab split</pre>
This makes a new tab page with one window that is editing the same buffer as
the window we were in:</div>
<div class="old-help-para">	+-------------------------------------+
	| thisfile | /thisfile/ | thatfile __X|   (thisfile is bold)
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B-------------------------------------%2B%0A%09%7C%20thisfile%20%7C%20%2Fthisfile%2F%20%7C%20thatfile%20__X%7C%20%20%20(thisfile%20is%20bold)%0A%09%7C%2F%2A%20thisfile%20%2A%2F%09%09%09%20%20%20%20%20%20%7C%0A%09%7Cthis%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7Cthis%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%20%20%20%7C%0D%60%60%60">/* thisfile */</a>			      |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%2B-------------------------------------%2B%0A%09%7C%20thisfile%20%7C%20%2Fthisfile%2F%20%7C%20thatfile%20__X%7C%20%20%20(thisfile%20is%20bold)%0A%09%7C%2F%2A%20thisfile%20%2A%2F%09%09%09%20%20%20%20%20%20%7C%0A%09%7Cthis%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7Cthis%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%20%20%20%7C%0D%60%60%60">this</a>				      |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_08.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_08.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C%20thisfile%20%7C%20%2Fthisfile%2F%20%7C%20thatfile%20__X%7C%20%20%20(thisfile%20is%20bold)%0A%09%7C%2F%2A%20thisfile%20%2A%2F%09%09%09%20%20%20%20%20%20%7C%0A%09%7Cthis%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7Cthis%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%20%20%20%7C%0D%60%60%60">this</a>				      |
	|~				      |
	|~				      |
	|~				      |
	|				      |
	+-------------------------------------+</div>
<div class="old-help-para">You can put ":tab" before any Ex command that opens a window.  The window will
be opened in a new tab page.  Another example:<pre>:tab help gt</pre>
Will show the help text for "gt" in a new tab page.</div>
<div class="old-help-para">A few more things you can do with tab pages:</div>
<div class="old-help-para"><div class="help-li" style=""> click with the mouse in the space after the last label
	The next tab page will be selected, like with "gt".
</div></div>
<div class="old-help-para"><div class="help-li" style=""> click with the mouse on the "X" in the top right corner
	The current tab page will be closed.  Unless there are unsaved
	changes in the current tab page.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> double click with the mouse in the top line
	A new tab page will be created.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> the "tabonly" command
	Closes all tab pages except the current one.  Unless there are unsaved
	changes in other tab pages.
</div></div>
<div class="old-help-para">For more information about tab pages see <a href="/neovim-docs-web/en/tabpage#tab-page">tab-page</a>.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_09#usr_09.txt">usr_09.txt</a>  Using the GUI</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  