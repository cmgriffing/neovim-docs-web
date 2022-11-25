---
title:  Usr_28
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_28.txt"></a><a name="28.1"></a><h1> Usr_28</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_28.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">				   Folding</div>
<div class="old-help-para">Structured text can be separated in sections.  And sections in sub-sections.
Folding allows you to display a section as one line, providing an overview.
This chapter explains the different ways this can be done.</div>
<div class="old-help-para"><a href="usr_28.html#28.1">28.1</a>  	What is folding?
<a href="usr_28.html#28.2">28.2</a>  	Manual folding
<a href="usr_28.html#28.3">28.3</a>  	Working with folds
<a href="usr_28.html#28.4">28.4</a>  	Saving and restoring folds
<a href="usr_28.html#28.5">28.5</a>  	Folding by indent
<a href="usr_28.html#28.6">28.6</a>  	Folding with markers
<a href="usr_28.html#28.7">28.7</a>  	Folding by syntax
<a href="usr_28.html#28.8">28.8</a>  	Folding by expression
<a href="usr_28.html#28.9">28.9</a>  	Folding unchanged lines
<a href="usr_28.html#28.10">28.10</a>  	Which fold method to use?</div>
<div class="old-help-para">     Next chapter: <a href="usr_29.html#usr_29.txt">usr_29.txt</a>  Moving through programs
 Previous chapter: <a href="usr_27.html#usr_27.txt">usr_27.txt</a>  Search commands and patterns
Table of contents: <a href="usr_toc.html#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	What is folding?</h2></div>
<div class="old-help-para">Folding is used to show a range of lines in the buffer as a single line on the
screen.  Like a piece of paper which is folded to make it shorter:</div>
<div class="old-help-para">	+------------------------+
	| line 1		 |
	| line 2		 |
	| line 3		 |
_______________________ |
	\			 \
	 \________________________\
	 / folded lines		  /
	/________________________/
	| line 12		 |
	| line 13		 |
	| line 14		 |
	+------------------------+</div>
<div class="old-help-para">The text is still in the buffer, unchanged.  Only the way lines are displayed
is affected by folding.</div>
<div class="old-help-para">The advantage of folding is that you can get a better overview of the
structure of text, by folding lines of a section and replacing it with a line
that indicates that there is a section.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="28.2"></a><span class="help-tag">28.2</span>  	Manual folding</span></h2></div>
<div class="old-help-para">Try it out: Position the cursor in a paragraph and type:<pre>zfap</pre>
You will see that the paragraph is replaced by a highlighted line.  You have
created a fold.  <a href="fold.html#zf">zf</a> is an operator and <a href="motion.html#ap">ap</a> a text object selection.  You
can use the <a href="fold.html#zf">zf</a> operator with any movement command to create a fold for the
text that it moved over.  <a href="fold.html#zf">zf</a> also works in Visual mode.</div>
<div class="old-help-para">To view the text again, open the fold by typing:<pre>zo</pre>
And you can close the fold again with:<pre>zc</pre>
All the folding commands start with "z".  With some fantasy, this looks like a
folded piece of paper, seen from the side.  The letter after the "z" has a
mnemonic meaning to make it easier to remember the commands:</div>
<div class="old-help-para">	zf	F-old creation
	zo	O-pen a fold
	zc	C-lose a fold</div>
<div class="old-help-para">Folds can be nested: A region of text that contains folds can be folded
again.  For example, you can fold each paragraph in this section, and then
fold all the sections in this chapter.  Try it out.  You will notice that
opening the fold for the whole chapter will restore the nested folds as they
were, some may be open and some may be closed.</div>
<div class="old-help-para">Suppose you have created several folds, and now want to view all the text.
You could go to each fold and type "zo".  To do this faster, use this command:<pre>zr</pre>
This will R-educe the folding.  The opposite is:<pre>zm</pre>
This folds M-ore.  You can repeat "zr" and "zm" to open and close nested folds
of several levels.</div>
<div class="old-help-para">If you have nested several levels deep, you can open all of them with:<pre>zR</pre>
This R-educes folds until there are none left.  And you can close all folds
with:<pre>zM</pre>
This folds M-ore and M-ore.</div>
<div class="old-help-para">You can quickly disable the folding with the <a href="fold.html#zn">zn</a> command.  Then <a href="fold.html#zN">zN</a> brings
back the folding as it was.  <a href="fold.html#zi">zi</a> toggles between the two.  This is a useful
way of working:
<div class="help-li" style=""> create folds to get overview on your file
</div><div class="help-li" style=""> move around to where you want to do your work
</div><div class="help-li" style=""> do <a href="fold.html#zi">zi</a> to look at the text and edit it
</div><div class="help-li" style=""> do <a href="fold.html#zi">zi</a> again to go back to moving around
</div></div>
<div class="old-help-para">More about manual folding in the reference manual: <a href="fold.html#fold-manual">fold-manual</a></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="28.3"></a><span class="help-tag">28.3</span>  	Working with folds</span></h2></div>
<div class="old-help-para">When some folds are closed, movement commands like "j" and "k" move over a
fold like it was a single, empty line.  This allows you to quickly move around
over folded text.</div>
<div class="old-help-para">You can yank, delete and put folds as if it was a single line.  This is very
useful if you want to reorder functions in a program.  First make sure that
each fold contains a whole function (or a bit less) by selecting the right
<a href="options.html#'foldmethod'">'foldmethod'</a>.  Then delete the function with "dd", move the cursor and put it
with "p".  If some lines of the function are above or below the fold, you can
use Visual selection:
<div class="help-li" style=""> put the cursor on the first line to be moved
</div><div class="help-li" style=""> hit "V" to start Visual mode
</div><div class="help-li" style=""> put the cursor on the last line to be moved
</div><div class="help-li" style=""> hit "d" to delete the selected lines.
</div><div class="help-li" style=""> move the cursor to the new position and "p"ut the lines there.
</div></div>
<div class="old-help-para">It is sometimes difficult to see or remember where a fold is located, thus
where a <a href="fold.html#zo">zo</a> command would actually work.  To see the defined folds:<pre>:set foldcolumn=4</pre>
This will show a small column on the left of the window to indicate folds.
A "+" is shown for a closed fold.  A "-" is shown at the start of each open
fold and "|" at following lines of the fold.</div>
<div class="old-help-para">You can use the mouse to open a fold by clicking on the "+" in the foldcolumn.
Clicking on the "-" or a "|" below it will close an open fold.</div>
<div class="old-help-para">To open all folds at the cursor line use <a href="fold.html#zO">zO</a>.
To close all folds at the cursor line use <a href="fold.html#zC">zC</a>.
To delete a fold at the cursor line use <a href="fold.html#zd">zd</a>.
To delete all folds at the cursor line use <a href="fold.html#zD">zD</a>.</div>
<div class="old-help-para">When in Insert mode, the fold at the cursor line is never closed.  That allows
you to see what you type!</div>
<div class="old-help-para">Folds are opened automatically when jumping around or moving the cursor left
or right.  For example, the "0" command opens the fold under the cursor
(if <a href="options.html#'foldopen'">'foldopen'</a> contains "hor", which is the default).  The <a href="options.html#'foldopen'">'foldopen'</a> option
can be changed to open folds for specific commands.  If you want the line
under the cursor always to be open, do this:<pre>:set foldopen=all</pre>
Warning: You won't be able to move onto a closed fold then.  You might want to
use this only temporarily and then set it back to the default:<pre>:set foldopen&amp;</pre>
You can make folds close automatically when you move out of it:<pre>:set foldclose=all</pre>
This will re-apply <a href="options.html#'foldlevel'">'foldlevel'</a> to all folds that don't contain the cursor.
You have to try it out if you like how this feels.  Use <a href="fold.html#zm">zm</a> to fold more and
<a href="fold.html#zr">zr</a> to fold less (reduce folds).</div>
<div class="old-help-para">The folding is local to the window.  This allows you to open two windows on
the same buffer, one with folds and one without folds.  Or one with all folds
closed and one with all folds open.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="28.4"></a><span class="help-tag">28.4</span>  	Saving and restoring folds</span></h2></div>
<div class="old-help-para">When you abandon a file (starting to edit another one), the state of the folds
is lost.  If you come back to the same file later, all manually opened and
closed folds are back to their default.  When folds have been created
manually, all folds are gone!  To save the folds use the <a href="starting.html#%3Amkview">:mkview</a> command:<pre>:mkview</pre>
This will store the settings and other things that influence the view on the
file.  You can change what is stored with the <a href="options.html#'viewoptions'">'viewoptions'</a> option.
When you come back to the same file later, you can load the view again:<pre>:loadview</pre>
You can store up to ten views on one file.  For example, to save the current
setup as the third view and load the second view:<pre>:mkview 3
:loadview 2</pre>
Note that when you insert or delete lines the views might become invalid.
Also check out the <a href="options.html#'viewdir'">'viewdir'</a> option, which specifies where the views are
stored.  You might want to delete old views now and then.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="28.5"></a><span class="help-tag">28.5</span>  	Folding by indent</span></h2></div>
<div class="old-help-para">Defining folds with <a href="fold.html#zf">zf</a> is a lot of work.  If your text is structured by
giving lower level items a larger indent, you can use the indent folding
method.  This will create folds for every sequence of lines with the same
indent.  Lines with a larger indent will become nested folds.  This works well
with many programming languages.</div>
<div class="old-help-para">Try this by setting the <a href="options.html#'foldmethod'">'foldmethod'</a> option:<pre>:set foldmethod=indent</pre>
Then you can use the <a href="fold.html#zm">zm</a> and <a href="fold.html#zr">zr</a> commands to fold more and reduce folding.
It's easy to see on this example text:</div>
<div class="old-help-para">This line is not indented
	This line is indented once
		This line is indented twice
		This line is indented twice
	This line is indented once
This line is not indented
	This line is indented once
	This line is indented once</div>
<div class="old-help-para">Note that the relation between the amount of indent and the fold depth depends
on the <a href="options.html#'shiftwidth'">'shiftwidth'</a> option.  Each <a href="options.html#'shiftwidth'">'shiftwidth'</a> worth of indent adds one to the
depth of the fold.  This is called a fold level.</div>
<div class="old-help-para">When you use the <a href="fold.html#zr">zr</a> and <a href="fold.html#zm">zm</a> commands you actually increase or decrease the
<a href="options.html#'foldlevel'">'foldlevel'</a> option.  You could also set it directly:<pre>:set foldlevel=3</pre>
This means that all folds with three times a <a href="options.html#'shiftwidth'">'shiftwidth'</a> indent or more will
be closed.  The lower the foldlevel, the more folds will be closed.  When
<a href="options.html#'foldlevel'">'foldlevel'</a> is zero, all folds are closed.  <a href="fold.html#zM">zM</a> does set <a href="options.html#'foldlevel'">'foldlevel'</a> to zero.
The opposite command <a href="fold.html#zR">zR</a> sets <a href="options.html#'foldlevel'">'foldlevel'</a> to the deepest fold level that is
present in the file.</div>
<div class="old-help-para">Thus there are two ways to open and close the folds:
(A) By setting the fold level.
    This gives a very quick way of "zooming out" to view the structure of the
    text, move the cursor, and "zoom in" on the text again.</div>
<div class="old-help-para">(B) By using <a href="fold.html#zo">zo</a> and <a href="fold.html#zc">zc</a> commands to open or close specific folds.
    This allows opening only those folds that you want to be open, while other
    folds remain closed.</div>
<div class="old-help-para">This can be combined: You can first close most folds by using <a href="fold.html#zm">zm</a> a few times
and then open a specific fold with <a href="fold.html#zo">zo</a>.  Or open all folds with <a href="fold.html#zR">zR</a> and
then close specific folds with <a href="fold.html#zc">zc</a>.</div>
<div class="old-help-para">But you cannot manually define folds when <a href="options.html#'foldmethod'">'foldmethod'</a> is "indent", as that
would conflict with the relation between the indent and the fold level.</div>
<div class="old-help-para">More about folding by indent in the reference manual: <a href="fold.html#fold-indent">fold-indent</a></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="28.6"></a><span class="help-tag">28.6</span>  	Folding with markers</span></h2></div>
<div class="old-help-para">Markers in the text are used to specify the start and end of a fold region.
This gives precise control over which lines are included in a fold.  The
disadvantage is that the text needs to be modified.</div>
<div class="old-help-para">Try it:<pre>:set foldmethod=marker</pre>
Example text, as it could appear in a C program:</div>
<div class="old-help-para">	/* foobar () {{{ */	int foobar()
	{
		/* return a value {{{ */		return 42;
		/* }}} */	}
	/* }}} */
Notice that the folded line will display the text before the marker.  This is
very useful to tell what the fold contains.</div>
<div class="old-help-para">It's quite annoying when the markers don't pair up correctly after moving some
lines around.  This can be avoided by using numbered markers.  Example:</div>
<div class="old-help-para">	/* global variables {{{1 */	int varA, varB;</div>
<div class="old-help-para">	/* functions {{{1 */	/* funcA() {{{2 */	void funcA() {}</div>
<div class="old-help-para">	/* funcB() {{{2 */	void funcB() {}
	/* }}}1 */
At every numbered marker a fold at the specified level begins.  This will make
any fold at a higher level stop here.  You can just use numbered start markers
to define all folds.  Only when you want to explicitly stop a fold before
another starts you need to add an end marker.</div>
<div class="old-help-para">More about folding with markers in the reference manual: <a href="fold.html#fold-marker">fold-marker</a></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="28.7"></a><span class="help-tag">28.7</span>  	Folding by syntax</span></h2></div>
<div class="old-help-para">For each language Vim uses a different syntax file.  This defines the colors
for various items in the file.  If you are reading this in Vim, in a terminal
that supports colors, the colors you see are made with the "help" syntax file.
   In the syntax files it is possible to add syntax items that have the "fold"
argument.  These define a fold region.  This requires writing a syntax file
and adding these items in it.  That's not so easy to do.  But once it's done,
all folding happens automatically.
   Here we'll assume you are using an existing syntax file.  Then there is
nothing more to explain.  You can open and close folds as explained above.
The folds will be created and deleted automatically when you edit the file.</div>
<div class="old-help-para">More about folding by syntax in the reference manual: <a href="fold.html#fold-syntax">fold-syntax</a></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="28.8"></a><span class="help-tag">28.8</span>  	Folding by expression</span></h2></div>
<div class="old-help-para">This is similar to folding by indent, but instead of using the indent of a
line a user function is called to compute the fold level of a line.  You can
use this for text where something in the text indicates which lines belong
together.  An example is an e-mail message where the quoted text is indicated
by a "&gt;" before the line.  To fold these quotes use this:<pre>:set foldmethod=expr
:set foldexpr=strlen(substitute(substitute(getline(v:lnum),'\\s','',\"g\"),'[^&gt;].*','',''))</pre>
You can try it out on this text:</div>
<div class="old-help-para">&gt; quoted text he wrote
&gt; quoted text he wrote
&gt; &gt; double quoted text I wrote
&gt; &gt; double quoted text I wrote</div>
<div class="old-help-para">Explanation for the <a href="options.html#'foldexpr'">'foldexpr'</a> used in the example (inside out):
   getline(v:lnum)			gets the current line
   substitute(...,'\\s','','g')		removes all white space from the line
   substitute(...,'[^&gt;].*','','')	removes everything after leading '&gt;'s
   strlen(...)				counts the length of the string, which
					is the number of '&gt;'s found</div>
<div class="old-help-para">Note that a backslash must be inserted before every space, double quote and
backslash for the ":set" command.  If this confuses you, do<pre>:set foldexpr</pre>
to check the actual resulting value.  To correct a complicated expression, use
the command-line completion:<pre>:set foldexpr=&lt;Tab&gt;</pre>
Where <code>&lt;Tab&gt;</code> is a real Tab.  Vim will fill in the previous value, which you can
then edit.</div>
<div class="old-help-para">When the expression gets more complicated you should put it in a function and
set <a href="options.html#'foldexpr'">'foldexpr'</a> to call that function.</div>
<div class="old-help-para">More about folding by expression in the reference manual: <a href="fold.html#fold-expr">fold-expr</a></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="28.9"></a><span class="help-tag">28.9</span>  	Folding unchanged lines</span></h2></div>
<div class="old-help-para">This is useful when you set the <a href="options.html#'diff'">'diff'</a> option in the same window.  The
<a href="starting.html#-d">-d</a> option does this for you.  Example:<pre>:setlocal diff foldmethod=diff scrollbind nowrap foldlevel=1</pre>
Do this in every window that shows a different version of the same file.  You
will clearly see the differences between the files, while the text that didn't
change is folded.</div>
<div class="old-help-para">For more details see <a href="fold.html#fold-diff">fold-diff</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="28.10"></a><span class="help-tag">28.10</span> Which fold method to use?</span></h2></div>
<div class="old-help-para">All these possibilities make you wonder which method you should choose.
Unfortunately, there is no golden rule.  Here are some hints.</div>
<div class="old-help-para">If there is a syntax file with folding for the language you are editing, that
is probably the best choice.  If there isn't one, you might try to write it.
This requires a good knowledge of search patterns.  It's not easy, but when
it's working you will not have to define folds manually.</div>
<div class="old-help-para">Typing commands to manually fold regions can be used for unstructured text.
Then use the <a href="starting.html#%3Amkview">:mkview</a> command to save and restore your folds.</div>
<div class="old-help-para">The marker method requires you to change the file.  If you are sharing the
files with other people or you have to meet company standards, you might not
be allowed to add them.
   The main advantage of markers is that you can put them exactly where you
want them.  That avoids that a few lines are missed when you cut and paste
folds.  And you can add a comment about what is contained in the fold.</div>
<div class="old-help-para">Folding by indent is something that works in many files, but not always very
well.  Use it when you can't use one of the other methods.  However, it is
very useful for outlining.  Then you specifically use one <a href="options.html#'shiftwidth'">'shiftwidth'</a> for
each nesting level.</div>
<div class="old-help-para">Folding with expressions can make folds in almost any structured text.  It is
quite simple to specify, especially if the start and end of a fold can easily
be recognized.
   If you use the "expr" method to define folds, but they are not exactly how
you want them, you could switch to the "manual" method.  This will not remove
the defined folds.  Then you can delete or add folds manually.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="usr_29.html#usr_29.txt">usr_29.txt</a>  Moving through programs</div>
<div class="old-help-para">Copyright: see <a href="usr_01.html#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  