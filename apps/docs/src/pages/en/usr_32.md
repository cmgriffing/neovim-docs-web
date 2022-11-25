---
title:  Usr_32
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_32.txt"></a><a name="32.1"></a><h1> Usr_32</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_32.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			      The undo tree</div>
<div class="old-help-para">Vim provides multi-level undo.  If you undo a few changes and then make a new
change you create a branch in the undo tree.  This text is about moving
through the branches.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_32#32.1">32.1</a>  	Undo up to a file write
<a href="/neovim-docs-web/en/usr_32#32.2">32.2</a>  	Numbering changes
<a href="/neovim-docs-web/en/usr_32#32.3">32.3</a>  	Jumping around the tree
<a href="/neovim-docs-web/en/usr_32#32.4">32.4</a>  	Time travelling</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_40#usr_40.txt">usr_40.txt</a>  Make new commands
 Previous chapter: <a href="/neovim-docs-web/en/usr_31#usr_31.txt">usr_31.txt</a>  Exploiting the GUI
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Undo up to a file write</h2></div>
<div class="old-help-para">Sometimes you make several changes, and then discover you want to go back to
when you have last written the file.  You can do that with this command:<pre>:earlier 1f</pre>
The "f" stands for "file" here.</div>
<div class="old-help-para">You can repeat this command to go further back in the past.  Or use a count
different from 1 to go back faster.</div>
<div class="old-help-para">If you go back too far, go forward again with:<pre>:later 1f</pre>
Note that these commands really work in time sequence.  This matters if you
made changes after undoing some changes.  It's explained in the next section.</div>
<div class="old-help-para">Also note that we are talking about text writes here.  For writing the undo
information in a file see <a href="/neovim-docs-web/en/undo#undo-persistence">undo-persistence</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="32.2"></a><span class="help-tag">32.2</span>  	Numbering changes</span></h2></div>
<div class="old-help-para">In section <a href="/neovim-docs-web/en/usr_02#02.5">02.5</a> we only discussed one line of undo/redo.  But it is also
possible to branch off.  This happens when you undo a few changes and then
make a new change.  The new changes become a branch in the undo tree.</div>
<div class="old-help-para">Let's start with the text "one".  The first change to make is to append
" too".  And then move to the first 'o' and change it into 'w'.  We then have
two changes, numbered 1 and 2, and three states of the text:</div>
<div class="old-help-para"><div class="help-column_heading">		one</div>		 |
	      change 1
		 |
<div class="help-column_heading">	      one too</div>		 |
	      change 2
		 |
<div class="help-column_heading">	      one two</div></div>
<div class="old-help-para">If we now undo one change, back to "one too", and change "one" to "me" we
create a branch in the undo tree:</div>
<div class="old-help-para"><div class="help-column_heading">		one</div>		 |
	      change 1
		 |
<div class="help-column_heading">	      one too</div>	      /     \
	 change 2  change 3
	    |	      |
<div class="help-column_heading">	 one two    me too</div></div>
<div class="old-help-para">You can now use the <a href="/neovim-docs-web/en/undo#u">u</a> command to undo.  If you do this twice you get to
"one".  Use <a href="/neovim-docs-web/en/undo#CTRL-R">CTRL-R</a> to redo, and you will go to "one too".  One more <a href="/neovim-docs-web/en/undo#CTRL-R">CTRL-R</a>
takes you to "me too".  Thus undo and redo go up and down in the tree, using
the branch that was last used.</div>
<div class="old-help-para">What matters here is the order in which the changes are made.  Undo and redo
are not considered changes in this context.  After each change you have a new
state of the text.</div>
<div class="old-help-para">Note that only the changes are numbered, the text shown in the tree above has
no identifier.  They are mostly referred to by the number of the change above
it.  But sometimes by the number of one of the changes below it, especially
when moving up in the tree, so that you know which change was just undone.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="32.3"></a><span class="help-tag">32.3</span>  	Jumping around the tree</span></h2></div>
<div class="old-help-para">So how do you get to "one two" now?  You can use this command:<pre>:undo 2</pre>
The text is now "one two", you are below change 2.  You can use the <a href="/neovim-docs-web/en/undo#%3Aundo">:undo</a>
command to jump to below any change in the tree.</div>
<div class="old-help-para">Now make another change: change "one" to "not":</div>
<div class="old-help-para"><div class="help-column_heading">		one</div>		 |
	      change 1
		 |
<div class="help-column_heading">	      one too</div>	      /     \
	 change 2  change 3
	    |	      |
<div class="help-column_heading">	 one two    me too</div>	    |
	 change 4
	    |
<div class="help-column_heading">	 not two</div></div>
<div class="old-help-para">Now you change your mind and want to go back to "me too".  Use the <a href="/neovim-docs-web/en/undo#g-">g-</a>
command.  This moves back in time.  Thus it doesn't walk the tree upwards or
downwards, but goes to the change made before.</div>
<div class="old-help-para">You can repeat <a href="/neovim-docs-web/en/undo#g-">g-</a> and you will see the text change:
<div class="help-column_heading">	me too</div><div class="help-column_heading">	one two</div><div class="help-column_heading">	one too</div><div class="help-column_heading">	one</div></div>
<div class="old-help-para">Use <a href="/neovim-docs-web/en/undo#g%2B">g+</a> to move forward in time:
<div class="help-column_heading">	one</div><div class="help-column_heading">	one too</div><div class="help-column_heading">	one two</div><div class="help-column_heading">	me too</div><div class="help-column_heading">	not two</div></div>
<div class="old-help-para">Using <a href="/neovim-docs-web/en/undo#%3Aundo">:undo</a> is useful if you know what change you want to jump to.  <a href="/neovim-docs-web/en/undo#g-">g-</a> and
<a href="/neovim-docs-web/en/undo#g%2B">g+</a> are useful if you don't know exactly what the change number is.</div>
<div class="old-help-para">You can type a count before <a href="/neovim-docs-web/en/undo#g-">g-</a> and <a href="/neovim-docs-web/en/undo#g%2B">g+</a> to repeat them.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="32.4"></a><span class="help-tag">32.4</span>  	Time travelling</span></h2></div>
<div class="old-help-para">When you have been working on text for a while the tree grows to become big.
Then you may want to go to the text of some minutes ago.</div>
<div class="old-help-para">To see what branches there are in the undo tree use this command:<pre>:undolist</pre></div>
<div class="old-help-para"><div class="help-column_heading">	number changes  time</div>	     3       2  16 seconds ago
	     4       3  5 seconds ago</div>
<div class="old-help-para">Here you can see the number of the leaves in each branch and when the change
was made.  Assuming we are below change 4, at "not two", you can go back ten
seconds with this command:<pre>:earlier 10s</pre>
Depending on how much time you took for the changes you end up at a certain
position in the tree.  The <a href="/neovim-docs-web/en/undo#%3Aearlier">:earlier</a> command argument can be "m" for minutes,
"h" for hours and "d" for days.  To go all the way back use a big number:<pre>:earlier 100d</pre>
To travel forward in time again use the <a href="/neovim-docs-web/en/undo#%3Alater">:later</a> command:<pre>:later 1m</pre>
The arguments are "s", "m" and "h", just like with <a href="/neovim-docs-web/en/undo#%3Aearlier">:earlier</a>.</div>
<div class="old-help-para">If you want even more details, or want to manipulate the information, you can
use the <a href="/neovim-docs-web/en/builtin#undotree()">undotree()</a> function.  To see what it returns:<pre>:echo undotree()</pre>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_32.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_32.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%3Aecho%20undotree()%0A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%0ANext%20chapter%3A%20%7Cusr_40.txt%7C%20%20Make%20new%20commands%0A%0ACopyright%3A%20see%20%7Cmanual-copyright%7C%20%20vim%3Atw%3D78%3Ats%3D8%3Anoet%3Aft%3Dhelp%3Anorl%3A%0D%60%60%60">==============================================================================</a></div>
<div class="old-help-para">Next chapter: <a href="/neovim-docs-web/en/usr_40#usr_40.txt">usr_40.txt</a>  Make new commands</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  