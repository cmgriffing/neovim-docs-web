---
title:  Usr_04
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_04.txt"></a><a name="04.1"></a><h1> Usr_04</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_04.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			     Making small changes</div>
<div class="old-help-para">This chapter shows you several ways of making corrections and moving text
around.  It teaches you the three basic ways to change text: operator-motion,
Visual mode and text objects.</div>
<div class="old-help-para"><a href="usr_04.html#04.1">04.1</a>  	Operators and motions
<a href="usr_04.html#04.2">04.2</a>  	Changing text
<a href="usr_04.html#04.3">04.3</a>  	Repeating a change
<a href="usr_04.html#04.4">04.4</a>  	Visual mode
<a href="usr_04.html#04.5">04.5</a>  	Moving text
<a href="usr_04.html#04.6">04.6</a>  	Copying text
<a href="usr_04.html#04.7">04.7</a>  	Using the clipboard
<a href="usr_04.html#04.8">04.8</a>  	Text objects
<a href="usr_04.html#04.9">04.9</a>  	Replace mode
<a href="usr_04.html#04.10">04.10</a>  	Conclusion</div>
<div class="old-help-para">     Next chapter: <a href="usr_05.html#usr_05.txt">usr_05.txt</a>  Set your settings
 Previous chapter: <a href="usr_03.html#usr_03.txt">usr_03.txt</a>  Moving around
Table of contents: <a href="usr_toc.html#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Operators and motions</h2></div>
<div class="old-help-para">In chapter 2 you learned the "x" command to delete a single character.  And
using a count: "4x" deletes four characters.
   The "dw" command deletes a word.  You may recognize the "w" command as the
move word command.  In fact, the "d" command may be followed by any motion
command, and it deletes from the current location to the place where the
cursor winds up.
   The "4w" command, for example, moves the cursor over four words.  The "d4w"
command deletes four words.</div>
<div class="old-help-para"><div class="help-column_heading">	To err is human. To really foul up you need a computer.</div>			 ------------------&gt;
				 d4w</div>
<div class="old-help-para"><div class="help-column_heading">	To err is human. you need a computer.</div></div>
<div class="old-help-para">Vim only deletes up to the position where the motion takes the cursor.  That's
because Vim knows that you probably don't want to delete the first character
of a word.  If you use the "e" command to move to the end of a word, Vim
guesses that you do want to include that last character:</div>
<div class="old-help-para"><div class="help-column_heading">	To err is human. you need a computer.</div>			--------&gt;
			   d2e</div>
<div class="old-help-para"><div class="help-column_heading">	To err is human. a computer.</div></div>
<div class="old-help-para">Whether the character under the cursor is included depends on the command you
used to move to that character.  The reference manual calls this "exclusive"
when the character isn't included and "inclusive" when it is.</div>
<div class="old-help-para">The "$" command moves to the end of a line.  The "d$" command deletes from the
cursor to the end of the line.  This is an inclusive motion, thus the last
character of the line is included in the delete operation:</div>
<div class="old-help-para"><div class="help-column_heading">	To err is human. a computer.</div>		       ------------&gt;
			    d$</div>
<div class="old-help-para"><div class="help-column_heading">	To err is human</div></div>
<div class="old-help-para">There is a pattern here: operator-motion.  You first type an operator command.
For example, "d" is the delete operator.  Then you type a motion command like
"4l" or "w".  This way you can operate on any text you can move over.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="04.2"></a><span class="help-tag">04.2</span>  	Changing text</span></h2></div>
<div class="old-help-para">Another operator is "c", change.  It acts just like the "d" operator, except
it leaves you in Insert mode.  For example, "cw" changes a word.  Or more
specifically, it deletes a word and then puts you in Insert mode.</div>
<div class="old-help-para"><div class="help-column_heading">	To err is human</div>	   -------&gt;
	     c2wbe&lt;Esc&gt;</div>
<div class="old-help-para"><div class="help-column_heading">	To be human</div></div>
<div class="old-help-para">This "c2wbe&lt;Esc&gt;" contains these bits:</div>
<div class="old-help-para">	c	the change operator
	2w	move two words (they are deleted and Insert mode started)
	be	insert this text
	<code>&lt;Esc&gt;</code>	back to Normal mode</div>
<div class="old-help-para">You will have noticed something strange: The space before "human" isn't
deleted.  There is a saying that for every problem there is an answer that is
simple, clear, and wrong.  That is the case with the example used here for the
"cw" command.  The c operator works just like the d operator, with one
exception: "cw".  It actually works like "ce", change to end of word.  Thus
the space after the word isn't included.  This is an exception that dates back
to the old Vi.  Since many people are used to it now, the inconsistency has
remained in Vim.</div>
<div class="old-help-para"><a name="_more-changes"></a><h3 class="help-heading">MORE CHANGES</h3></div>
<div class="old-help-para">Like "dd" deletes a whole line, "cc" changes a whole line.  It keeps the
existing indent (leading white space) though.</div>
<div class="old-help-para">Just like "d$" deletes until the end of the line, "c$" changes until the end
of the line.  It's like doing "d$" to delete the text and then "a" to start
Insert mode and append new text.</div>
<div class="old-help-para"><a name="_shortcuts"></a><h3 class="help-heading">SHORTCUTS</h3></div>
<div class="old-help-para">Some operator-motion commands are used so often that they have been given a
single-letter command:</div>
<div class="old-help-para">	x  stands for  dl  (delete character under the cursor)
	X  stands for  dh  (delete character left of the cursor)
	D  stands for  d$  (delete to end of the line)
	C  stands for  c$  (change to end of the line)
	s  stands for  cl  (change one character)
	S  stands for  cc  (change a whole line)</div>
<div class="old-help-para"><a name="_where-to-put-the-count"></a><h3 class="help-heading">WHERE TO PUT THE COUNT</h3></div>
<div class="old-help-para">The commands "3dw" and "d3w" delete three words.  If you want to get really
picky about things, the first command, "3dw", deletes one word three times;
the command "d3w" deletes three words once.  This is a difference without a
distinction.  You can actually put in two counts, however.  For example,
"3d2w" deletes two words, repeated three times, for a total of six words.</div>
<div class="old-help-para"><a name="_replacing-with-one-character"></a><h3 class="help-heading">REPLACING WITH ONE CHARACTER</h3></div>
<div class="old-help-para">The "r" command is not an operator.  It waits for you to type a character, and
will replace the character under the cursor with it.  You could do the same
with "cl" or with the "s" command, but with "r" you don't have to press <code>&lt;Esc&gt;</code>
to get back out of insert mode.</div>
<div class="old-help-para"><div class="help-column_heading">	there is somerhing grong here</div>	rT	     rt    rw</div>
<div class="old-help-para"><div class="help-column_heading">	There is something wrong here</div></div>
<div class="old-help-para">Using a count with "r" causes that many characters to be replaced with the
same character.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	There is something wrong here</div>			   5rx</div>
<div class="old-help-para"><div class="help-column_heading">	There is something xxxxx here</div></div>
<div class="old-help-para">To replace a character with a line break use "r&lt;Enter&gt;".  This deletes one
character and inserts a line break.  Using a count here only applies to the
number of characters deleted: "4r&lt;Enter&gt;" replaces four characters with one
line break.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="04.3"></a><span class="help-tag">04.3</span>  	Repeating a change</span></h2></div>
<div class="old-help-para">The "." command is one of the simplest yet powerful commands in Vim.  It
repeats the last change.  For instance, suppose you are editing an HTML file
and want to delete all the <code>&lt;B&gt;</code> tags.  You position the cursor on the first &lt;
and delete the <code>&lt;B&gt;</code> with the command "df&gt;".  You then go to the &lt; of the next</div>
<div class="old-help-para">/B&gt; and delete it using the "." command.  The "." command executes the last
change command (in this case, "df&gt;").  To delete another tag, position the
cursor on the &lt; and use the "." command.</div>
<div class="old-help-para"><div class="help-column_heading">			      To <code>&lt;B&gt;</code>generate&lt;/B&gt; a table of <code>&lt;B&gt;</code>contents</div>	f&lt;   find first &lt;     ---&gt;
	df&gt;  delete to &gt;	 --&gt;
	f&lt;   find next &lt;	   ---------&gt;
	.    repeat df&gt;			    ---&gt;
	f&lt;   find next &lt;		       -------------&gt;
	.    repeat df&gt;					    --&gt;</div>
<div class="old-help-para">The "." command works for all changes you make, except for "u" (undo), <code>CTRL-R</code>
(redo) and commands that start with a colon (:).</div>
<div class="old-help-para">Another example: You want to change the word "four" to "five".  It appears
several times in your text.  You can do this quickly with this sequence of
commands:</div>
<div class="old-help-para">	/four&lt;Enter&gt;	find the first string "four"
	cwfive&lt;Esc&gt;	change the word to "five"
	n		find the next "four"
	.		repeat the change to "five"
	n		find the next "four"
	.		repeat the change
			etc.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="04.4"></a><span class="help-tag">04.4</span>  	Visual mode</span></h2></div>
<div class="old-help-para">To delete simple items the operator-motion changes work quite well.  But often
it's not so easy to decide which command will move over the text you want to
change.  Then you can use Visual mode.</div>
<div class="old-help-para">You start Visual mode by pressing "v".  You move the cursor over the text you
want to work on.  While you do this, the text is highlighted.  Finally type
the operator command.
   For example, to delete from the middle of a word to the middle of another:</div>
<div class="old-help-para"><div class="help-column_heading">		This is an examination sample of visual mode</div>			       ----------&gt;
				 velllld</div>
<div class="old-help-para"><div class="help-column_heading">		This is an example of visual mode</div></div>
<div class="old-help-para">When doing this you don't really have to count how many times you have to
press "l" to end up in the right position.  You can immediately see what text
will be deleted when you press "d".</div>
<div class="old-help-para">If at any time you decide you don't want to do anything with the highlighted
text, just press <code>&lt;Esc&gt;</code> and Visual mode will stop without doing anything.</div>
<div class="old-help-para"><a name="_selecting-lines"></a><h3 class="help-heading">SELECTING LINES</h3></div>
<div class="old-help-para">If you want to work on whole lines, use "V" to start Visual mode.  You will
see right away that the whole line is highlighted, without moving around.
When you move left or right nothing changes.  When you move up or down the
selection is extended whole lines at a time.
   For example, select three lines with "Vjj":</div>
<div class="old-help-para">			  +------------------------+
			  | text more text	   |
		       &gt;&gt; | more text more text    | |
	selected lines &gt;&gt; | text text text	   | | Vjj
		       &gt;&gt; | text more		   | V
			  | more text more	   |
			  +------------------------+</div>
<div class="old-help-para"><a name="_selecting-blocks"></a><h3 class="help-heading">SELECTING BLOCKS</h3></div>
<div class="old-help-para">If you want to work on a rectangular block of characters, use <code>CTRL-V</code> to start
Visual mode.  This is very useful when working on tables.</div>
<div class="old-help-para">		name		Q1	Q2	Q3
		pierre		123	455	234
		john		0	90	39
		steve		392	63	334</div>
<div class="old-help-para">To delete the middle "Q2" column, move the cursor to the "Q" of "Q2".  Press
CTRL-V to start blockwise Visual mode.  Now move the cursor three lines down
with "3j" and to the next word with "w".  You can see the first character of
the last column is included.  To exclude it, use "h".  Now press "d" and the
middle column is gone.</div>
<div class="old-help-para"><a name="_going-to-the-other-side"></a><h3 class="help-heading">GOING TO THE OTHER SIDE</h3></div>
<div class="old-help-para">If you have selected some text in Visual mode, and discover that you need to
change the other end of the selection, use the "o" command (Hint: o for other
end).  The cursor will go to the other end, and you can move the cursor to
change where the selection starts.  Pressing "o" again brings you back to the
other end.</div>
<div class="old-help-para">When using blockwise selection, you have four corners.  "o" only takes you to
one of the other corners, diagonally.  Use "O" to move to the other corner in
the same line.</div>
<div class="old-help-para">Note that "o" and "O" in Visual mode work very differently from Normal mode,
where they open a new line below or above the cursor.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="04.5"></a><span class="help-tag">04.5</span>  	Moving text</span></h2></div>
<div class="old-help-para">When you delete something with "d", "x", or another command, the text is
saved.  You can paste it back by using the "p" command.  (The Vim name for
this is put).
   Take a look at how this works.  First you will delete an entire line, by
putting the cursor on the line you want to delete and typing "dd".  Now you
move the cursor to where you want to put the line and use the "p" (put)
command.  The line is inserted on the line below the cursor.</div>
<div class="old-help-para">	a line		a line	      a line
	line 2	  dd	line 3	  p   line 3
	line 3			      line 2</div>
<div class="old-help-para">Because you deleted an entire line, the "p" command placed the text line below
the cursor.  If you delete part of a line (a word, for instance), the "p"
command puts it just after the cursor.</div>
<div class="old-help-para"><div class="help-column_heading">	Some more boring try text to out commands.</div>			 ----&gt;
			  dw</div>
<div class="old-help-para"><div class="help-column_heading">	Some more boring text to out commands.</div>			 -------&gt;
			    welp</div>
<div class="old-help-para"><div class="help-column_heading">	Some more boring text to try out commands.</div></div>
<div class="old-help-para"><a name="_more-on-putting"></a><h3 class="help-heading">MORE ON PUTTING</h3></div>
<div class="old-help-para">The "P" command puts text like "p", but before the cursor.  When you deleted a
whole line with "dd", "P" will put it back above the cursor.  When you deleted
a word with "dw", "P" will put it back just before the cursor.</div>
<div class="old-help-para">You can repeat putting as many times as you like.  The same text will be used.</div>
<div class="old-help-para">You can use a count with "p" and "P".  The text will be repeated as many times
as specified with the count.  Thus "dd" and then "3p" puts three copies of the
same deleted line.</div>
<div class="old-help-para"><a name="_swapping-two-characters"></a><h3 class="help-heading">SWAPPING TWO CHARACTERS</h3></div>
<div class="old-help-para">Frequently when you are typing, your fingers get ahead of your brain (or the
other way around?).  The result is a typo such as "teh" for "the".  Vim
makes it easy to correct such problems.  Just put the cursor on the e of "teh"
and execute the command "xp".  This works as follows: "x" deletes the
character e and places it in a register.  "p" puts the text after the cursor,
which is after the h.</div>
<div class="old-help-para"><div class="help-column_heading">	teh     th     the</div>	 x       p</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="04.6"></a><span class="help-tag">04.6</span>  	Copying text</span></h2></div>
<div class="old-help-para">To copy text from one place to another, you could delete it, use "u" to undo
the deletion and then "p" to put it somewhere else.  There is an easier way:
yanking.  The "y" operator copies text into a register.  Then a "p" command
can be used to put it.
   Yanking is just a Vim name for copying.  The "c" letter was already used
for the change operator, and "y" was still available.  Calling this
operator "yank" made it easier to remember to use the "y" key.</div>
<div class="old-help-para">Since "y" is an operator, you use "yw" to yank a word.  A count is possible as
usual.  To yank two words use "y2w".  Example:</div>
<div class="old-help-para">let sqr = LongVariable *		 --------------&gt;
		       y2w</div>
<div class="old-help-para">let sqr = LongVariable *			       p</div>
<div class="old-help-para">let sqr = LongVariable * LongVariable</div>
<div class="old-help-para">Notice that "yw" includes the white space after a word.  If you don't want
this, use "ye".</div>
<div class="old-help-para">The "yy" command yanks a whole line, just like "dd" deletes a whole line.</div>
<div class="old-help-para">	a text line   yy	a text line	       a text line
	line 2			line 2		p      line 2
	last line		last line	       a text line
						       last line</div>
<div class="old-help-para">"Y" was originally equivalent to "yank the entire line", as opposed to "D"
which is "delete to end of the line".  "Y" has thus been remapped to mean
"yank to end of the line" to make it consistent with the behavior of "D".
Mappings will be covered in later chapters.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="04.7"></a><span class="help-tag">04.7</span>  	Using the clipboard</span></h2></div>
<div class="old-help-para">If you are using the GUI version of Vim (gvim), you can find the "Copy" item
in the "Edit" menu.  First select some text with Visual mode, then use the
Edit/Copy menu item.  The selected text is now copied to the clipboard.  You
can paste the text in other programs.  In Vim itself too.</div>
<div class="old-help-para">If you have copied text to the clipboard in another application, you can paste
it in Vim with the Edit/Paste menu item.  This works in Normal mode and Insert
mode.  In Visual mode the selected text is replaced with the pasted text.</div>
<div class="old-help-para">The "Cut" menu item deletes the text before it's put on the clipboard.  The
"Copy", "Cut" and "Paste" items are also available in the popup menu (only
when there is a popup menu, of course).  If your Vim has a toolbar, you can
also find these items there.</div>
<div class="old-help-para">If you are not using the GUI, or if you don't like using a menu, you have to
use another way.  You use the normal "y" (yank) and "p" (put) commands, but
prepend "* (double-quote star) before it.  To copy a line to the clipboard:<pre>"*yy</pre>
To put text from the clipboard back into the text:<pre>"*p</pre>
This only works on versions of Vim that include clipboard support.  More about
the clipboard can be found in section <a href="usr_09.html#09.3">09.3</a> and here: <a href="provider.html#clipboard">clipboard</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="04.8"></a><span class="help-tag">04.8</span>  	Text objects</span></h2></div>
<div class="old-help-para">If the cursor is in the middle of a word and you want to delete that word, you
need to move back to its start before you can do "dw".  There is a simpler way
to do this: "daw".</div>
<div class="old-help-para"><div class="help-column_heading">	this is some example text.</div>		       daw</div>
<div class="old-help-para"><div class="help-column_heading">	this is some text.</div></div>
<div class="old-help-para">The "d" of "daw" is the delete operator.  "aw" is a text object.  Hint: "aw"
stands for "A Word".  Thus "daw" is "Delete A Word".  To be precise, the white
space after the word is also deleted (or the white space before the word if at
the end of the line).</div>
<div class="old-help-para">Using text objects is the third way to make changes in Vim.  We already had
operator-motion and Visual mode.  Now we add operator-text object.
   It is very similar to operator-motion, but instead of operating on the text
between the cursor position before and after a movement command, the text
object is used as a whole.  It doesn't matter where in the object the cursor
was.</div>
<div class="old-help-para">To change a whole sentence use "cis".  Take this text:</div>
<div class="old-help-para"><div class="help-column_heading">	Hello there.  This</div><div class="help-column_heading">	is an example.  Just</div><div class="help-column_heading">	some text.</div></div>
<div class="old-help-para">Move to the start of the second line, on "is an".  Now use "cis":</div>
<div class="old-help-para"><div class="help-column_heading">	Hello there.    Just</div><div class="help-column_heading">	some text.</div></div>
<div class="old-help-para">The cursor is in between the blanks in the first line.  Now you type the new
sentence "Another line.":</div>
<div class="old-help-para"><div class="help-column_heading">	Hello there.  Another line.  Just</div><div class="help-column_heading">	some text.</div></div>
<div class="old-help-para">"cis" consists of the "c" (change) operator and the "is" text object.  This
stands for "Inner Sentence".  There is also the "as" ("A Sentence") object.
The difference is that "as" includes the white space after the sentence and
"is" doesn't.  If you would delete a sentence, you want to delete the white
space at the same time, thus use "das".  If you want to type new text the
white space can remain, thus you use "cis".</div>
<div class="old-help-para">You can also use text objects in Visual mode.  It will include the text object
in the Visual selection.  Visual mode continues, thus you can do this several
times.  For example, start Visual mode with "v" and select a sentence with
"as".  Now you can repeat "as" to include more sentences.  Finally you use an
operator to do something with the selected sentences.</div>
<div class="old-help-para">You can find a long list of text objects here: <a href="motion.html#text-objects">text-objects</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="04.9"></a><span class="help-tag">04.9</span>  	Replace mode</span></h2></div>
<div class="old-help-para">The "R" command causes Vim to enter replace mode.  In this mode, each
character you type replaces the one under the cursor.  This continues until
you type <code>&lt;Esc&gt;</code>.
   In this example you start Replace mode on the first "t" of "text":</div>
<div class="old-help-para"><div class="help-column_heading">	This is text.</div>		Rinteresting.&lt;Esc&gt;</div>
<div class="old-help-para"><div class="help-column_heading">	This is interesting.</div></div>
<div class="old-help-para">You may have noticed that this command replaced 5 characters in the line with
twelve others.  The "R" command automatically extends the line if it runs out
of characters to replace.  It will not continue on the next line.</div>
<div class="old-help-para">You can switch between Insert mode and Replace mode with the <code>&lt;Insert&gt;</code> key.</div>
<div class="old-help-para">When you use <code>&lt;BS&gt;</code> (backspace) to make a correction, you will notice that the
old text is put back.  Thus it works like an undo command for the previously
typed character.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="04.10"></a><span class="help-tag">04.10</span>  	Conclusion</span></h2></div>
<div class="old-help-para">The operators, movement commands and text objects give you the possibility to
make lots of combinations.  Now that you know how they work, you can use N
operators with M movement commands to make N * M commands!</div>
<div class="old-help-para">You can find a list of operators here: <a href="motion.html#operator">operator</a>.</div>
<div class="old-help-para">For example, there are many other ways to delete pieces of text.  Here are a
few common ones:</div>
<div class="old-help-para">x	delete character under the cursor (short for "dl")
X	delete character before the cursor (short for "dh")
D	delete from cursor to end of line (short for "d$")
dw	delete from cursor to next start of word
db	delete from cursor to previous start of word
diw	delete word under the cursor (excluding white space)
daw	delete word under the cursor (including white space)
dG	delete until the end of the file
dgg	delete until the start of the file</div>
<div class="old-help-para">If you use "c" instead of "d" they become change commands.  And with "y" you
yank the text.  And so forth.</div>
<div class="old-help-para">There are a few common commands to make changes that didn't fit somewhere
else:</div>
<div class="old-help-para">	~	Change case of the character under the cursor, and move the
		cursor to the next character.  This is not an operator (unless
		<a href="options.html#'tildeop'">'tildeop'</a> is set), thus you can't use it with a motion
		command.  It does work in Visual mode, where it changes case
		for all the selected text.</div>
<div class="old-help-para">	I	Start Insert mode after moving the cursor to the first
		non-blank in the line.</div>
<div class="old-help-para">	A	Start Insert mode after moving the cursor to the end of the
		line.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="usr_05.html#usr_05.txt">usr_05.txt</a>  Set your settings</div>
<div class="old-help-para">Copyright: see <a href="usr_01.html#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  