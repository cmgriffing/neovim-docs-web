---
title:  Usr_03
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_03.txt"></a><a name="03.1"></a><h1> Usr_03</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_03.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			     Moving around</div>
<div class="old-help-para">Before you can insert or delete text the cursor has to be moved to the right
place.  Vim has a large number of commands to position the cursor.  This
chapter shows you how to use the most important ones.  You can find a list of
these commands below <a href="/neovim-docs-web/en/quickref#Q_lr">Q_lr</a>.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_03#03.1">03.1</a>  	Word movement
<a href="/neovim-docs-web/en/usr_03#03.2">03.2</a>  	Moving to the start or end of a line
<a href="/neovim-docs-web/en/usr_03#03.3">03.3</a>  	Moving to a character
<a href="/neovim-docs-web/en/usr_03#03.4">03.4</a>  	Matching a parenthesis
<a href="/neovim-docs-web/en/usr_03#03.5">03.5</a>  	Moving to a specific line
<a href="/neovim-docs-web/en/usr_03#03.6">03.6</a>  	Telling where you are
<a href="/neovim-docs-web/en/usr_03#03.7">03.7</a>  	Scrolling around
<a href="/neovim-docs-web/en/usr_03#03.8">03.8</a>  	Simple searches
<a href="/neovim-docs-web/en/usr_03#03.9">03.9</a>  	Simple search patterns
<a href="/neovim-docs-web/en/usr_03#03.10">03.10</a>  	Using marks</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_04#usr_04.txt">usr_04.txt</a>  Making small changes
 Previous chapter: <a href="/neovim-docs-web/en/usr_02#usr_02.txt">usr_02.txt</a>  The first steps in Vim
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Word movement</h2></div>
<div class="old-help-para">To move the cursor forward one word, use the "w" command.  Like most Vim
commands, you can use a numeric prefix to move past multiple words.  For
example, "3w" moves three words.  This figure shows how it works (starting at
the position marked with "x"):</div>
<div class="old-help-para"><div class="help-column_heading">	This is a line with example text</div>	  x--&gt;--&gt;-&gt;-----------------&gt;
	   w  w  w    3w</div>
<div class="old-help-para">Notice that "w" moves to the start of the next word if it already is at the
start of a word.
   The "b" command moves backward to the start of the previous word:</div>
<div class="old-help-para"><div class="help-column_heading">	This is a line with example text</div>	&lt;----&lt;--&lt;-&lt;---------&lt;--x
	   b   b b    2b      b</div>
<div class="old-help-para">There is also the "e" command that moves to the next end of a word and "ge",
which moves to the previous end of a word:</div>
<div class="old-help-para"><div class="help-column_heading">	This is a line with example text</div>	   &lt;----&lt;----x----&gt;------------&gt;
	   2ge   ge     e       2e</div>
<div class="old-help-para">If you are at the last word of a line, the "w" command will take you to the
first word in the next line.  Thus you can use this to move through a
paragraph, much faster than using "l".  "b" does the same in the other
direction.</div>
<div class="old-help-para">A word ends at a non-word character, such as a ".", "-" or ")".  To change
what Vim considers to be a word, see the <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> option.  If you try this
out in the help directly, <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> needs to be reset for the examples to
work:<pre>:set iskeyword&amp;</pre>
It is also possible to move by white-space separated WORDs.  This is not a
word in the normal sense, that's why the uppercase is used.  The commands for
moving by WORDs are also uppercase, as this figure shows:</div>
<div class="old-help-para">	       ge      b	  w				e
	       &lt;-     &lt;-	 ---&gt;			       ---&gt;
<div class="help-column_heading">	This is-a line, with special/separated/words (and some more).</div>	   &lt;----- &lt;-----	 --------------------&gt;	       -----&gt;
	     gE      B			 W			 E</div>
<div class="old-help-para">With this mix of lowercase and uppercase commands, you can quickly move
forward and backward through a paragraph.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="03.2"></a><span class="help-tag">03.2</span>  	Moving to the start or end of a line</span></h2></div>
<div class="old-help-para">The "$" command moves the cursor to the end of a line.  If your keyboard has
an <code>&lt;End&gt;</code> key it will do the same thing.</div>
<div class="old-help-para">The "^" command moves to the first non-blank character of the line.  The "0"
command (zero) moves to the very first character of the line, and the <code>&lt;Home&gt;</code>
key does the same thing.  In a picture ("." indicates a space):</div>
<div class="old-help-para">		  ^
	     &lt;-----------x
<div class="help-column_heading">	.....This is a line with example text</div>	&lt;----------------x   x--------------&gt;
		0		   $</div>
<div class="old-help-para">(the "....." indicates blanks here)</div>
<div class="old-help-para">   The "$" command takes a count, like most movement commands.  But moving to
the end of the line several times doesn't make sense.  Therefore it causes the
editor to move to the end of another line.  For example, "1$" moves you to
the end of the first line (the one you're on), "2$" to the end of the next
line, and so on.
   The "0" command doesn't take a count argument, because the "0" would be
part of the count.  Unexpectedly, using a count with "^" doesn't have any
effect.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="03.3"></a><span class="help-tag">03.3</span>  	Moving to a character</span></h2></div>
<div class="old-help-para">One of the most useful movement commands is the single-character search
command.  The command "fx" searches forward in the line for the single
character x.  Hint: "f" stands for "Find".
   For example, you are at the beginning of the following line.  Suppose you
want to go to the h of human.  Just execute the command "fh" and the cursor
will be positioned over the h:</div>
<div class="old-help-para"><div class="help-column_heading">	To err is human.  To really foul up you need a computer.</div>	----------&gt;---------------&gt;
	    fh		 fy</div>
<div class="old-help-para">This also shows that the command "fy" moves to the end of the word really.
   You can specify a count; therefore, you can go to the "l" of "foul" with
"3fl":</div>
<div class="old-help-para"><div class="help-column_heading">	To err is human.  To really foul up you need a computer.</div>		  ---------------------&gt;
			   3fl</div>
<div class="old-help-para">The "F" command searches to the left:</div>
<div class="old-help-para"><div class="help-column_heading">	To err is human.  To really foul up you need a computer.</div>		  &lt;---------------------
			    Fh</div>
<div class="old-help-para">The "tx" command works like the "fx" command, except it stops one character
before the searched character.  Hint: "t" stands for "To".  The backward
version of this command is "Tx".</div>
<div class="old-help-para"><div class="help-column_heading">	To err is human.  To really foul up you need a computer.</div>		   &lt;------------  -------------&gt;
			Th		tn</div>
<div class="old-help-para">These four commands can be repeated with ";".  "," repeats in the other
direction.  The cursor is never moved to another line.  Not even when the
sentence continues.</div>
<div class="old-help-para">Sometimes you will start a search, only to realize that you have typed the
wrong command.  You type "f" to search backward, for example, only to realize
that you really meant "F".  To abort a search, press <code>&lt;Esc&gt;</code>.  So "f&lt;Esc&gt;" is an
aborted forward search and doesn't do anything.  Note: <code>&lt;Esc&gt;</code> cancels most
operations, not just searches.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="03.4"></a><span class="help-tag">03.4</span>  	Matching a parenthesis</span></h2></div>
<div class="old-help-para">When writing a program you often end up with nested () constructs.  Then the
"%" command is very handy: It moves to the matching paren.  If the cursor is
on a "(" it will move to the matching ")".  If it's on a ")" it will move to
the matching "(".</div>
<div class="old-help-para">			    %
			 <code>&lt;-----&gt;</code>
if (a == (b * c) / d)		   <code>&lt;----------------&gt;</code>
			    %</div>
<div class="old-help-para">This also works for [] and {} pairs.  (This can be defined with the
<a href="/neovim-docs-web/en/options#'matchpairs'">'matchpairs'</a> option.)</div>
<div class="old-help-para">When the cursor is not on a useful character, "%" will search forward to find
one.  Thus if the cursor is at the start of the line of the previous example,
"%" will search forward and find the first "(".  Then it moves to its match:</div>
<div class="old-help-para">if (a == (b * c) / d)		---+----------------&gt;
			   %</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="03.5"></a><span class="help-tag">03.5</span>  	Moving to a specific line</span></h2></div>
<div class="old-help-para">If you are a C or C++ programmer, you are familiar with error messages such as
the following:</div>
<div class="old-help-para"><div class="help-column_heading">	prog.c:33: j   undeclared (first use in this function)</div></div>
<div class="old-help-para">This tells you that you might want to fix something on line 33.  So how do you
find line 33?  One way is to do "9999k" to go to the top of the file and "32j"
to go down thirty-two lines.  It is not a good way, but it works.  A much
better way of doing things is to use the "G" command.  With a count, this
command positions you at the given line number.  For example, "33G" puts you
on line 33.  (For a better way of going through a compiler's error list, see
<a href="/neovim-docs-web/en/usr_30#usr_30.txt">usr_30.txt</a>, for information on the :make command.)
   With no argument, "G" positions you at the end of the file.  A quick way to
go to the start of a file use "gg".  "1G" will do the same, but is a tiny bit
more typing.</div>
<div class="old-help-para">	    |	first line of a file   ^
	    |	text text text text    |
	    |	text text text text    |  gg
	7G  |	text text text text    |
	    |	text text text text
	    |	text text text text
	    V	text text text text    |
		text text text text    |  G
		text text text text    |
		last line of a file    V</div>
<div class="old-help-para">Another way to move to a line is using the "%" command with a count.  For
example, "50%" moves you halfway through the file, and "90%" goes to near the
end.</div>
<div class="old-help-para">The previous assumes that you want to move to a line in the file, no matter if
it's currently visible or not.  What if you want to move to one of the lines
you can see?  This figure shows the three commands you can use:</div>
<div class="old-help-para">			+---------------------------+
		H --&gt;	| text sample text	    |
			| sample text		    |
			| text sample text	    |
			| sample text		    |
		M --&gt;	| text sample text	    |
			| sample text		    |
			| text sample text	    |
			| sample text		    |
		L --&gt;	| text sample text	    |
			+---------------------------+</div>
<div class="old-help-para">Hints: "H" stands for Home, "M" for Middle and "L" for Last.  Alternatively,
"H" for High, "M" for Middle and "L" for Low.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="03.6"></a><span class="help-tag">03.6</span>  	Telling where you are</span></h2></div>
<div class="old-help-para">To see where you are in a file, there are three ways:</div>
<div class="old-help-para">1.  Use the <code>CTRL-G</code> command.  You get a message like this (assuming the <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a>
    option is off):</div>
<div class="old-help-para"><div class="help-column_heading">	"usr_03.txt" line 233 of 650 --35%-- col 45-52</div></div>
<div class="old-help-para">    This shows the name of the file you are editing, the line number where the
    cursor is, the total number of lines, the percentage of the way through
    the file and the column of the cursor.
       Sometimes you will see a split column number.  For example, "col 2-9".
    This indicates that the cursor is positioned on the second character, but
    because character one is a tab, occupying eight spaces worth of columns,
    the screen column is 9.</div>
<div class="old-help-para">2.  Set the <a href="/neovim-docs-web/en/options#'number'">'number'</a> option.  This will display a line number in front of
    every line:<pre>:set number</pre></div>
<div class="old-help-para">    To switch this off again:<pre>:set nonumber</pre></div>
<div class="old-help-para">    Since <a href="/neovim-docs-web/en/options#'number'">'number'</a> is a boolean option, prepending "no" to its name has the
    effect of switching it off.  A boolean option has only these two values,
    it is either on or off.
       Vim has many options.  Besides the boolean ones there are options with
    a numerical value and string options.  You will see examples of this where
    they are used.</div>
<div class="old-help-para">3.  Set the <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a> option.  This will display the cursor position in the
    lower right corner of the Vim window:<pre>:set ruler</pre>
Using the <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a> option has the advantage that it doesn't take much room,
thus there is more space for your text.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="03.7"></a><span class="help-tag">03.7</span>  	Scrolling around</span></h2></div>
<div class="old-help-para">The <code>CTRL-U</code> command scrolls down half a screen of text.  Think of looking
through a viewing window at the text and moving this window up by half the
height of the window.  Thus the window moves up over the text, which is
backward in the file.  Don't worry if you have a little trouble remembering
which end is up.  Most users have the same problem.
   The <code>CTRL-D</code> command moves the viewing window down half a screen in the file,
thus scrolls the text up half a screen.</div>
<div class="old-help-para">				       +----------------+
				       | some text	|
				       | some text	|
				       | some text	|
	+---------------+	       | some text	|
	| some text	|  <code>CTRL-U</code>  --&gt; |		|
	|		|	       | 123456		|
	| 123456	|	       +----------------+
	| 7890		|
	|		|	       +----------------+
	| example	|  <code>CTRL-D</code> --&gt;  | 7890		|
	+---------------+	       |		|
				       | example	|
				       | example	|
				       | example	|
				       | example	|
				       +----------------+</div>
<div class="old-help-para">To scroll one line at a time use <code>CTRL-E</code> (scroll up) and <code>CTRL-Y</code> (scroll down).
Think of <code>CTRL-E</code> to give you one line Extra.  (If you use MS-Windows compatible
key mappings <code>CTRL-Y</code> will redo a change instead of scroll.)</div>
<div class="old-help-para">To scroll forward by a whole screen (except for two lines) use <code>CTRL-F</code>.  To
scroll backwards, use <code>CTRL-B</code>.  These should be easy to remember: F for
Forwards and B for Backwards.</div>
<div class="old-help-para">A common issue is that after moving down many lines with "j" your cursor is at
the bottom of the screen.  You would like to see the context of the line with
the cursor.  That's done with the "zz" command.</div>
<div class="old-help-para">	+------------------+		 +------------------+
	| earlier text	   |		 | earlier text	    |
	| earlier text	   |		 | earlier text	    |
	| earlier text	   |		 | earlier text	    |
	| earlier text	   |   zz  --&gt;	 | line with cursor |
	| earlier text	   |		 | later text	    |
	| earlier text	   |		 | later text	    |
	| line with cursor |		 | later text	    |
	+------------------+		 +------------------+</div>
<div class="old-help-para">The "zt" command puts the cursor line at the top, "zb" at the bottom.  There
are a few more scrolling commands, see <a href="/neovim-docs-web/en/quickref#Q_sc">Q_sc</a>.  To always keep a few lines of
context around the cursor, use the <a href="/neovim-docs-web/en/options#'scrolloff'">'scrolloff'</a> option.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="03.8"></a><span class="help-tag">03.8</span>  	Simple searches</span></h2></div>
<div class="old-help-para">To search for a string, use the "/string" command.  To find the word include,
for example, use the command:<pre>/include</pre>
You will notice that when you type the "/" the cursor jumps to the last line
of the Vim window, like with colon commands.  That is where you type the word.
You can press the backspace key (backarrow or <code>&lt;BS&gt;</code>) to make corrections.  Use
the <code>&lt;Left&gt;</code> and <code>&lt;Right&gt;</code> cursor keys when necessary.
   Pressing <code>&lt;Enter&gt;</code> executes the command.</div>
<div class="old-help-para">	Note:
	The characters .*[]^%/\?~$ have special meanings.  If you want to use
	them in a search you must put a \ in front of them.  See below.</div>
<div class="old-help-para">To find the next occurrence of the same string use the "n" command.  Use this
to find the first #include after the cursor:<pre>/#include</pre>
And then type "n" several times.  You will move to each #include in the text.
You can also use a count if you know which match you want.  Thus "3n" finds
the third match.  You can also use a count with "/": "4/the" goes to the
fourth match of "the".</div>
<div class="old-help-para">The "?" command works like "/" but searches backwards:<pre>?word</pre>
The "N" command repeats the last search the opposite direction.  Thus using
"N" after a "/" command searches backwards, using "N" after "?" searches
forwards.</div>
<div class="old-help-para"><a name="_ignoring-case"></a><h3 class="help-heading">IGNORING CASE</h3></div>
<div class="old-help-para">Normally you have to type exactly what you want to find.  If you don't care
about upper or lowercase in a word, set the <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option:<pre>:set ignorecase</pre>
If you now search for "word", it will also match "Word" and "WORD".  To match
case again:<pre>:set noignorecase</pre>
<a name="_history"></a><h3 class="help-heading">HISTORY</h3></div>
<div class="old-help-para">Suppose you do three searches:<pre>/one
/two
/three</pre>
Now let's start searching by typing a simple "/" without pressing <code>&lt;Enter&gt;</code>.  If
you press <code>&lt;Up&gt;</code> (the cursor key), Vim puts "/three" on the command line.
Pressing <code>&lt;Enter&gt;</code> at this point searches for three.  If you do not press
<code>&lt;Enter&gt;</code>, but press <code>&lt;Up&gt;</code> instead, Vim changes the prompt to "/two".  Another
press of <code>&lt;Up&gt;</code> moves you to "/one".
   You can also use the <code>&lt;Down&gt;</code> cursor key to move through the history of
search commands in the other direction.</div>
<div class="old-help-para">If you know what a previously used pattern starts with, and you want to use it
again, type that character before pressing <code>&lt;Up&gt;</code>.  With the previous example,
you can type "/o&lt;Up&gt;" and Vim will put "/one" on the command line.</div>
<div class="old-help-para">The commands starting with ":" also have a history.  That allows you to recall
a previous command and execute it again.  These two histories are separate.</div>
<div class="old-help-para">SEARCHING FOR A WORD IN THE TEXT</div>
<div class="old-help-para">Suppose you see the word "TheLongFunctionName" in the text and you want to
find the next occurrence of it.  You could type "/TheLongFunctionName", but
that's a lot of typing.  And when you make a mistake Vim won't find it.
   There is an easier way: Position the cursor on the word and use the "*"
command.  Vim will grab the word under the cursor and use it as the search
string.
   The "#" command does the same in the other direction.  You can prepend a
count: "3*" searches for the third occurrence of the word under the cursor.</div>
<div class="old-help-para"><a name="_searching-for-whole-words"></a><h3 class="help-heading">SEARCHING FOR WHOLE WORDS</h3></div>
<div class="old-help-para">If you type "/the" it will also match "there".  To only find words that end
in "the" use:<pre>/the\&gt;</pre>
The "\&gt;" item is a special marker that only matches at the end of a word.
Similarly "\&lt;" only matches at the beginning of a word.  Thus to search for
the word "the" only:<pre>/\&lt;the\&gt;</pre>
This does not match "there" or "soothe".  Notice that the "*" and "#" commands
use these start-of-word and end-of-word markers to only find whole words (you
can use "g*" and "g#" to match partial words).</div>
<div class="old-help-para"><a name="_highlighting-matches"></a><h3 class="help-heading">HIGHLIGHTING MATCHES</h3></div>
<div class="old-help-para">While editing a program you see a variable called "nr".  You want to check
where it's used.  You could move the cursor to "nr" and use the "*" command
and press "n" to go along all the matches.</div>
<div class="old-help-para">Vim will highlight all matches. That is a very good way to see where the
variable is used, without the need to type commands.
   To switch this off:<pre>:set nohlsearch</pre>
Then you need to switch it on again if you want to use it for the next search
command:<pre>:set hlsearch</pre>
If you only want to remove the highlighting, use this command:<pre>:nohlsearch</pre>
This doesn't reset the option.  Instead, it disables the highlighting.  As
soon as you execute a search command, the highlighting will be used again.
Also for the "n" and "N" commands.</div>
<div class="old-help-para"><a name="_tuning-searches"></a><h3 class="help-heading">TUNING SEARCHES</h3></div>
<div class="old-help-para">There are a few options that change how searching works.  These are the
essential ones:
<pre>:set nowrapscan</pre>
This stops the search at the end of the file.  Or, when you are searching
backwards, it stops the search at the start of the file.  The <a href="/neovim-docs-web/en/options#'wrapscan'">'wrapscan'</a>
option is on by default, thus searching wraps around the end of the file.
<pre>:set noincsearch</pre>
This disables the display of the matches while you are still typing your
search.</div>
<div class="old-help-para"><a name="_intermezzo"></a><h3 class="help-heading">INTERMEZZO</h3></div>
<div class="old-help-para">If you like one of the options mentioned before, and set it each time you use
Vim, you can put the command in your Vim startup file.  Edit the file, for
example with:<pre>:edit ~/.config/nvim/init.vim</pre>
Then add a line with the command to set the option, just like you typed it in
Vim.  Example:<pre>Go:set hlsearch&lt;Esc&gt;</pre>
"G" moves to the end of the file.  "o" starts a new line, where you type the
":set" command.  You end insert mode with <code>&lt;Esc&gt;</code>.  Then write and close the
file:<pre>ZZ</pre>
If you now start Vim again, the <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> option will already be set.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="03.9"></a><span class="help-tag">03.9</span>  	Simple search patterns</span></h2></div>
<div class="old-help-para">The Vim editor uses regular expressions to specify what to search for.
Regular expressions are an extremely powerful and compact way to specify a
search pattern.  Unfortunately, this power comes at a price, because regular
expressions are a bit tricky to specify.
   In this section we mention only a few essential ones.  More about search
patterns and commands can be found in chapter 27 <a href="/neovim-docs-web/en/usr_27#usr_27.txt">usr_27.txt</a>.  You can find
the full explanation here: <a href="/neovim-docs-web/en/pattern#pattern">pattern</a>.</div>
<div class="old-help-para">BEGINNING AND END OF A LINE</div>
<div class="old-help-para">The ^ character matches the beginning of a line.  On an English-US keyboard
you find it above the 6.  The pattern "include" matches the word include
anywhere on the line.  But the pattern "^include" matches the word include
only if it is at the beginning of a line.
   The $ character matches the end of a line.  Therefore, "was$" matches the
word was only if it is at the end of a line.</div>
<div class="old-help-para">Let's mark the places where "/the" matches in this example line with "x"s:</div>
<div class="old-help-para"><div class="help-column_heading">	the solder holding one of the chips melted and the</div>	xxx			  xxx		       xxx</div>
<div class="old-help-para">Using "/the$" we find this match:</div>
<div class="old-help-para"><div class="help-column_heading">	the solder holding one of the chips melted and the</div>						       xxx</div>
<div class="old-help-para">And with "/^the" we find this one:
<div class="help-column_heading">	the solder holding one of the chips melted and the</div>	xxx</div>
<div class="old-help-para">You can try searching with "/^the$"; it will only match a single line
consisting entirely of "the".  White space does matter here, thus if a line
contains a space after the word, like "the ", the pattern will not match.</div>
<div class="old-help-para"><a name="_matching-any-single-character"></a><h3 class="help-heading">MATCHING ANY SINGLE CHARACTER</h3></div>
<div class="old-help-para">The . (dot) character matches any existing character.  For example, the
pattern "c.m" matches a string whose first character is a c, whose second
character is anything, and whose third character is m.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	We use a computer that became the cummin winter.</div>		 xxx		 xxx	  xxx</div>
<div class="old-help-para"><a name="_matching-special-characters"></a><h3 class="help-heading">MATCHING SPECIAL CHARACTERS</h3></div>
<div class="old-help-para">If you really want to match a dot, you must avoid its special meaning by
putting a backslash before it.
   If you search for "ter.", you will find these matches:</div>
<div class="old-help-para"><div class="help-column_heading">	We use a computer that became the cummin winter.</div>		      xxxx			    xxxx</div>
<div class="old-help-para">Searching for "ter\." only finds the second match.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="03.10"></a><span class="help-tag">03.10</span>  	Using marks</span></h2></div>
<div class="old-help-para">When you make a jump to a position with the "G" command, Vim remembers the
position from before this jump.  This position is called a mark.  To go back
where you came from, use this command:<pre>``</pre>
This is a backtick or open single-quote character.
   If you use the same command a second time you will jump back again.  That's
because the "`" command is a jump itself, and the position from before this
jump is remembered.</div>
<div class="old-help-para">Generally, every time you do a command that can move the cursor further than
within the same line, this is called a jump.  This includes the search
commands "/" and "n" (it doesn't matter how far away the match is).  But not
the character searches with "fx" and "tx" or the word movements "w" and "e".
   Also, "j" and "k" are not considered to be a jump, even when you use a
count to make them move the cursor quite a long way away.</div>
<div class="old-help-para">The "``" command jumps back and forth, between two points.  The <code>CTRL-O</code> command
jumps to older positions (Hint: O for older).  <code>CTRL-I</code> then jumps back to newer
positions (Hint: for many common keyboard layouts, I is just next to O).
Consider this sequence of commands:<pre>33G
/^The
CTRL-O</pre>
You first jump to line 33, then search for a line that starts with "The".
Then with <code>CTRL-O</code> you jump back to line 33.  Another <code>CTRL-O</code> takes you back to
where you started.  If you now use <code>CTRL-I</code> you jump to line 33 again.  And
to the match for "The" with another <code>CTRL-I</code>.</div>
<div class="old-help-para">	     |	example text   ^	     |
	33G  |	example text   |  <code>CTRL-O</code>     | <code>CTRL-I</code>
	     |	example text   |	     |
	     V	line 33 text   ^	     V
	     |	example text   |	     |
       /^The |	example text   |  <code>CTRL-O</code>     | <code>CTRL-I</code>
	     V	There you are  |	     V
		example text</div>
<div class="old-help-para">	Note:
	<code>CTRL-I</code> is the same as <code>&lt;Tab&gt;</code>.</div>
<div class="old-help-para">The ":jumps" command gives a list of positions you jumped to.  The entry which
you used last is marked with a "&gt;".</div>
<div class="old-help-para"><h3 class="help-heading">NAMED MARKS<span class="help-heading-tags">							<a name="bookmark"></a><span class="help-tag">bookmark</span></span></h3></div>
<div class="old-help-para">Vim enables you to place your own marks in the text.  The command "ma" marks
the place under the cursor as mark a.  You can place 26 marks (a through z) in
your text.  You can't see them, it's just a position that Vim remembers.
   To go to a mark, use the command{mark}, where {mark} is the mark letter.
Thus to move to the a mark:
<pre>`a</pre>
The command "'mark" (single quotation mark, or apostrophe) moves you to the
beginning of the line containing the mark.  This differs from the "`mark"
command, which also moves you to the marked column.</div>
<div class="old-help-para">The marks can be very useful when working on two related parts in a file.
Suppose you have some text near the start of the file you need to look at,
while working on some text near the end of the file.
   Move to the text at the start and place the s (start) mark there:<pre>ms</pre>
Then move to the text you want to work on and put the e (end) mark there:<pre>me</pre>
Now you can move around, and when you want to look at the start of the file,
you use this to jump there:<pre>'s</pre>
Then you can use '' to jump back to where you were, or 'e to jump to the text
you were working on at the end.
   There is nothing special about using s for start and e for end, they are
just easy to remember.</div>
<div class="old-help-para">You can use this command to get a list of marks:<pre>:marks</pre>
You will notice a few special marks.  These include:</div>
<div class="old-help-para">	'	The cursor position before doing a jump
	"	The cursor position when last editing the file
	[	Start of the last change
	]	End of the last change</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_04#usr_04.txt">usr_04.txt</a>  Making small changes</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  