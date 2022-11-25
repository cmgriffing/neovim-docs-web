---
title:  Usr_24
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_24.txt"></a><a name="24.1"></a><h1> Usr_24</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_24.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			     Inserting quickly</div>
<div class="old-help-para">When entering text, Vim offers various ways to reduce the number of keystrokes
and avoid typing mistakes.  Use Insert mode completion to repeat previously
typed words.  Abbreviate long words to short ones.  Type characters that
aren't on your keyboard.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_24#24.1">24.1</a>  	Making corrections
<a href="/neovim-docs-web/en/usr_24#24.2">24.2</a>  	Showing matches
<a href="/neovim-docs-web/en/usr_24#24.3">24.3</a>  	Completion
<a href="/neovim-docs-web/en/usr_24#24.4">24.4</a>  	Repeating an insert
<a href="/neovim-docs-web/en/usr_24#24.5">24.5</a>  	Copying from another line
<a href="/neovim-docs-web/en/usr_24#24.6">24.6</a>  	Inserting a register
<a href="/neovim-docs-web/en/usr_24#24.7">24.7</a>  	Abbreviations
<a href="/neovim-docs-web/en/usr_24#24.8">24.8</a>  	Entering special characters
<a href="/neovim-docs-web/en/usr_24#24.9">24.9</a>  	Digraphs
<a href="/neovim-docs-web/en/usr_24#24.10">24.10</a>  	Normal mode commands</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_25#usr_25.txt">usr_25.txt</a>  Editing formatted text
 Previous chapter: <a href="/neovim-docs-web/en/usr_23#usr_23.txt">usr_23.txt</a>  Editing other files
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Making corrections</h2></div>
<div class="old-help-para">The <code>&lt;BS&gt;</code> key was already mentioned.  It deletes the character just before the
cursor.  The <code>&lt;Del&gt;</code> key does the same for the character under (after) the
cursor.
   When you typed a whole word wrong, use <code>CTRL-W</code>:</div>
<div class="old-help-para"><div class="help-column_heading">	The horse had fallen to the sky</div>				       <code>CTRL-W</code>
<div class="help-column_heading">	The horse had fallen to the</div></div>
<div class="old-help-para">If you really messed up a line and want to start over, use <code>CTRL-U</code> to delete
it.  This keeps the text after the cursor and the indent.  Only the text from
the first non-blank to the cursor is deleted.  With the cursor on the "f" of
"fallen" in the next line pressing <code>CTRL-U</code> does this:</div>
<div class="old-help-para"><div class="help-column_heading">	The horse had fallen to the</div>		      <code>CTRL-U</code>
<div class="help-column_heading">	fallen to the</div></div>
<div class="old-help-para">When you spot a mistake a few words back, you need to move the cursor there to
correct it.  For example, you typed this:</div>
<div class="old-help-para"><div class="help-column_heading">	The horse had follen to the ground</div></div>
<div class="old-help-para">You need to change "follen" to "fallen".  With the cursor at the end, you
would type this to correct it:<pre>&lt;Esc&gt;4blraA</pre></div>
<div class="old-help-para">	get out of Insert mode		<code>&lt;Esc&gt;</code>
	four words back			     4b
	move on top of the "o"		       l
	replace with "a"			ra
	restart Insert mode			  A</div>
<div class="old-help-para">Another way to do this:<pre>&lt;C-Left&gt;&lt;C-Left&gt;&lt;C-Left&gt;&lt;C-Left&gt;&lt;Right&gt;&lt;Del&gt;a&lt;End&gt;</pre></div>
<div class="old-help-para">	four words back		     <code>&lt;C-Left&gt;</code><code>&lt;C-Left&gt;</code><code>&lt;C-Left&gt;</code><code>&lt;C-Left&gt;</code>
	move on top of the "o"			<code>&lt;Right&gt;</code>
	delete the "o"				       <code>&lt;Del&gt;</code>
	insert an "a"					    a
	go to end of the line				     <code>&lt;End&gt;</code></div>
<div class="old-help-para">This uses special keys to move around, while remaining in Insert mode.  This
resembles what you would do in a modeless editor.  It's easier to remember,
but takes more time (you have to move your hand from the letters to the cursor
keys, and the <code>&lt;End&gt;</code> key is hard to press without looking at the keyboard).
   These special keys are most useful when writing a mapping that doesn't
leave Insert mode.  The extra typing doesn't matter then.
   An overview of the keys you can use in Insert mode:</div>
<div class="old-help-para">	<code>&lt;C-Home&gt;</code>	to start of the file
	<code>&lt;PageUp&gt;</code>	a whole screenful up
	<code>&lt;Home&gt;</code>		to start of line
	<code>&lt;S-Left&gt;</code>	one word left
	<code>&lt;C-Left&gt;</code>	one word left
	<code>&lt;S-Right&gt;</code>	one word right
	<code>&lt;C-Right&gt;</code>	one word right
	<code>&lt;End&gt;</code>		to end of the line
	<code>&lt;PageDown&gt;</code>	a whole screenful down
	<code>&lt;C-End&gt;</code>		to end of the file</div>
<div class="old-help-para">There are a few more, see <a href="/neovim-docs-web/en/insert#ins-special-special">ins-special-special</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="24.2"></a><span class="help-tag">24.2</span>  	Showing matches</span></h2></div>
<div class="old-help-para">When you type a ) it would be nice to see with which ( it matches.  To make
Vim do that use this command:<pre>:set showmatch</pre>
When you now type a text like "(example)", as soon as you type the ) Vim will
briefly move the cursor to the matching (, keep it there for half a second,
and move back to where you were typing.
   In case there is no matching (, Vim will beep.  Then you know that you
might have forgotten the ( somewhere, or typed a ) too many.
   The match will also be shown for [] and {} pairs.  You don't have to wait
with typing the next character, as soon as Vim sees it the cursor will move
back and inserting continues as before.
   You can change the time Vim waits with the <a href="/neovim-docs-web/en/options#'matchtime'">'matchtime'</a> option.  For
example, to make Vim wait one and a half second:<pre>:set matchtime=15</pre>
The time is specified in tenths of a second.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="24.3"></a><span class="help-tag">24.3</span>  	Completion</span></h2></div>
<div class="old-help-para">Vim can automatically complete words on insertion.  You type the first part of
a word, press <code>CTRL-P</code>, and Vim guesses the rest.
   Suppose, for example, that you are creating a C program and want to type in
the following:</div>
<div class="old-help-para"><div class="help-column_heading">	total = ch_array[0] + ch_array[1] + ch_array[2];</div></div>
<div class="old-help-para">You start by entering the following:</div>
<div class="old-help-para"><div class="help-column_heading">	total = ch_array[0] + ch_</div></div>
<div class="old-help-para">At this point, you tell Vim to complete the word using the command <code>CTRL-P</code>.
Vim searches for a word that starts with what's in front of the cursor.  In
this case, it is "ch_", which matches with the word ch_array.  So typing
CTRL-P gives you the following:</div>
<div class="old-help-para"><div class="help-column_heading">	total = ch_array[0] + ch_array</div></div>
<div class="old-help-para">After a little more typing, you get this (ending in a space):</div>
<div class="old-help-para"><div class="help-column_heading">	total = ch_array[0] + ch_array[1] +</div></div>
<div class="old-help-para">If you now type <code>CTRL-P</code> Vim will search again for a word that completes the
word before the cursor.  Since there is nothing in front of the cursor, it
finds the first word backwards, which is "ch_array".  Typing <code>CTRL-P</code> again
gives you the next word that matches, in this case "total".  A third <code>CTRL-P</code>
searches further back.  If there is nothing else, it causes the editor to run
out of words, so it returns to the original text, which is nothing.  A fourth
CTRL-P causes the editor to start over again with "ch_array".</div>
<div class="old-help-para">To search forward, use <code>CTRL-N</code>.  Since the search wraps around the end of the
file, <code>CTRL-N</code> and <code>CTRL-P</code> will find the same matches, but in a different
sequence.  Hint: <code>CTRL-N</code> is Next-match and <code>CTRL-P</code> is Previous-match.</div>
<div class="old-help-para">The Vim editor goes through a lot of effort to find words to complete.  By
default, it searches the following places:</div>
<div class="old-help-para">	1. Current file
	2. Files in other windows
	3. Other loaded files (hidden buffers)
	4. Files which are not loaded (inactive buffers)
	5. Tag files
	6. All files #included by the current file</div>
<div class="old-help-para"><a name="_options"></a><h3 class="help-heading">OPTIONS</h3></div>
<div class="old-help-para">You can customize the search order with the <a href="/neovim-docs-web/en/options#'complete'">'complete'</a> option.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option is used.  When it is set, case differences are ignored
when searching for matches.</div>
<div class="old-help-para">A special option for completion is <a href="/neovim-docs-web/en/options#'infercase'">'infercase'</a>.  This is useful to find
matches while ignoring case (<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> must be set) but still using the
case of the word typed so far.  Thus if you type "For" and Vim finds a match
"fortunately", it will result in "Fortunately".</div>
<div class="old-help-para"><a name="_completing-specific-items"></a><h3 class="help-heading">COMPLETING SPECIFIC ITEMS</h3></div>
<div class="old-help-para">If you know what you are looking for, you can use these commands to complete
with a certain type of item:</div>
<div class="old-help-para">	<code>CTRL-X</code> <code>CTRL-F</code>		file names
	<code>CTRL-X</code> <code>CTRL-L</code>		whole lines
	<code>CTRL-X</code> <code>CTRL-D</code>		macro definitions (also in included files)
	<code>CTRL-X</code> <code>CTRL-I</code>		current and included files
	<code>CTRL-X</code> <code>CTRL-K</code>		words from a dictionary
	<code>CTRL-X</code> <code>CTRL-T</code>		words from a thesaurus
	<code>CTRL-X</code> <code>CTRL-]</code>		tags
	<code>CTRL-X</code> <code>CTRL-V</code>		Vim command line</div>
<div class="old-help-para">After each of them <code>CTRL-N</code> can be used to find the next match, <code>CTRL-P</code> to find
the previous match.
   More information for each of these commands here: <a href="/neovim-docs-web/en/insert#ins-completion">ins-completion</a>.</div>
<div class="old-help-para"><a name="_completing-file-names"></a><h3 class="help-heading">COMPLETING FILE NAMES</h3></div>
<div class="old-help-para">Let's take <code>CTRL-X</code> <code>CTRL-F</code> as an example.  This will find file names.  It scans
the current directory for files and displays each one that matches the word in
front of the cursor.
   Suppose, for example, that you have the following files in the current
directory:</div>
<div class="old-help-para">	main.c  sub_count.c  sub_done.c  sub_exit.c</div>
<div class="old-help-para">Now enter Insert mode and start typing:</div>
<div class="old-help-para"><div class="help-column_heading">	The exit code is in the file sub</div></div>
<div class="old-help-para">At this point, you enter the command <code>CTRL-X</code> <code>CTRL-F</code>.  Vim now completes the
current word "sub" by looking at the files in the current directory.  The
first match is sub_count.c.  This is not the one you want, so you match the
next file by typing <code>CTRL-N</code>.  This match is sub_done.c.  Typing <code>CTRL-N</code> again
takes you to sub_exit.c.  The results:</div>
<div class="old-help-para"><div class="help-column_heading">	The exit code is in the file sub_exit.c</div></div>
<div class="old-help-para">If the file name starts with / (Unix) or C:\ (MS-Windows) you can find all
files in the file system.  For example, type "/u" and <code>CTRL-X</code> <code>CTRL-F</code>.  This
will match "/usr" (this is on Unix):</div>
<div class="old-help-para"><div class="help-column_heading">	the file is found in /usr/</div></div>
<div class="old-help-para">If you now press <code>CTRL-N</code> you go back to "/u".  Instead, to accept the "/usr/"
and go one directory level deeper, use <code>CTRL-X</code> <code>CTRL-F</code> again:</div>
<div class="old-help-para"><div class="help-column_heading">	the file is found in /usr/X11R6/</div></div>
<div class="old-help-para">The results depend on what is found in your file system, of course.  The
matches are sorted alphabetically.</div>
<div class="old-help-para"><a name="_completing-in-source-code"></a><h3 class="help-heading">COMPLETING IN SOURCE CODE</h3></div>
<div class="old-help-para">Source code files are well structured.  That makes it possible to do
completion in an intelligent way.  In Vim this is called Omni completion.  In
some other editors it's called intellisense, but that is a trademark.</div>
<div class="old-help-para">The key to Omni completion is <code>CTRL-X</code> <code>CTRL-O</code>.  Obviously the O stands for Omni
here, so that you can remember it easier.  Let's use an example for editing C
source:</div>
<div class="old-help-para"><div class="help-column_heading">	{</div>struct foop;<div class="help-column_heading">	    p-&gt;</div></div>
<div class="old-help-para">The cursor is after "p-&gt;".  Now type <code>CTRL-X</code> <code>CTRL-O</code>.  Vim will offer you a list
of alternatives, which are the items that "struct foo" contains.  That is
quite different from using <code>CTRL-P</code>, which would complete any word, while only
members of "struct foo" are valid here.</div>
<div class="old-help-para">For Omni completion to work you may need to do some setup.  At least make sure
filetype plugins are enabled.  Your vimrc file should contain a line like
this:<pre>filetype plugin on</pre>
Or:<pre>filetype plugin indent on</pre>
For C code you need to create a tags file and set the <a href="/neovim-docs-web/en/options#'tags'">'tags'</a> option.  That is
explained <a href="/neovim-docs-web/en/insert#ft-c-omni">ft-c-omni</a>.  For other filetypes you may need to do something
similar, look below <a href="/neovim-docs-web/en/insert#compl-omni-filetypes">compl-omni-filetypes</a>.  It only works for specific
filetypes.  Check the value of the <a href="/neovim-docs-web/en/options#'omnifunc'">'omnifunc'</a> option to find out if it would
work.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="24.4"></a><span class="help-tag">24.4</span>  	Repeating an insert</span></h2></div>
<div class="old-help-para">If you press <code>CTRL-A</code>, the editor inserts the text you typed the last time you
were in Insert mode.
   Assume, for example, that you have a file that begins with the following:</div>
<div class="old-help-para"><div class="help-column_heading">	"file.h"</div>/* Main program begins/</div>
<div class="old-help-para">You edit this file by inserting "#include " at the beginning of the first
line:</div>
<div class="old-help-para"><div class="help-column_heading">	#include "file.h"</div>/* Main program begins/</div>
<div class="old-help-para">You go down to the beginning of the next line using the commands "j^".  You
now start to insert a new "#include" line.  So you type:<pre>i CTRL-A</pre>
The result is as follows:</div>
<div class="old-help-para"><div class="help-column_heading">	#include "file.h"</div>#include /* Main program begins/</div>
<div class="old-help-para">The "#include " was inserted because <code>CTRL-A</code> inserts the text of the previous
insert.  Now you type  "main.h"&lt;Enter&gt;  to finish the line:</div>
<div class="old-help-para"><div class="help-column_heading">	#include "file.h"</div><div class="help-column_heading">	#include "main.h"</div>/* Main program begins/</div>
<div class="old-help-para">The <code>CTRL-@</code> command does a <code>CTRL-A</code> and then exits Insert mode.  That's a quick
way of doing exactly the same insertion again.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="24.5"></a><span class="help-tag">24.5</span>  	Copying from another line</span></h2></div>
<div class="old-help-para">The <code>CTRL-Y</code> command inserts the character above the cursor.  This is useful
when you are duplicating a previous line.  For example, you have this line of
C code:</div>
<div class="old-help-para"><div class="help-column_heading">	b_array[i]-&gt;s_next = a_array[i]-&gt;s_next;</div></div>
<div class="old-help-para">Now you need to type the same line, but with "s_prev" instead of "s_next".
Start the new line, and press <code>CTRL-Y</code> 14 times, until you are at the "n" of
"next":</div>
<div class="old-help-para"><div class="help-column_heading">	b_array[i]-&gt;s_next = a_array[i]-&gt;s_next;</div><div class="help-column_heading">	b_array[i]-&gt;s_</div></div>
<div class="old-help-para">Now you type "prev":</div>
<div class="old-help-para"><div class="help-column_heading">	b_array[i]-&gt;s_next = a_array[i]-&gt;s_next;</div><div class="help-column_heading">	b_array[i]-&gt;s_prev</div></div>
<div class="old-help-para">Continue pressing <code>CTRL-Y</code> until the following "next":</div>
<div class="old-help-para"><div class="help-column_heading">	b_array[i]-&gt;s_next = a_array[i]-&gt;s_next;</div><div class="help-column_heading">	b_array[i]-&gt;s_prev = a_array[i]-&gt;s_</div></div>
<div class="old-help-para">Now type "prev;" to finish it off.</div>
<div class="old-help-para">The <code>CTRL-E</code> command acts like <code>CTRL-Y</code> except it inserts the character below the
cursor.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="24.6"></a><span class="help-tag">24.6</span>  	Inserting a register</span></h2></div>
<div class="old-help-para">The command <code>CTRL-R</code> <code>{register}</code> inserts the contents of the register.  This is
useful to avoid having to type a long word.  For example, you need to type
this:</div>
<div class="old-help-para"><div class="help-column_heading">	r = VeryLongFunction(a) + VeryLongFunction(b) + VeryLongFunction(c)</div></div>
<div class="old-help-para">The function name is defined in a different file.  Edit that file and move the
cursor on top of the function name there, and yank it into register v:<pre>"vyiw</pre>
"v is the register specification, "yiw" is yank-inner-word.  Now edit the file
where the new line is to be inserted, and type the first letters:</div>
<div class="old-help-para"><div class="help-column_heading">	r =</div></div>
<div class="old-help-para">Now use <code>CTRL-R</code> v to insert the function name:</div>
<div class="old-help-para"><div class="help-column_heading">	r = VeryLongFunction</div></div>
<div class="old-help-para">You continue to type the characters in between the function name, and use
CTRL-R v two times more.
   You could have done the same with completion.  Using a register is useful
when there are many words that start with the same characters.</div>
<div class="old-help-para">If the register contains characters such as <code>&lt;BS&gt;</code> or other special characters,
they are interpreted as if they had been typed from the keyboard.  If you do
not want this to happen (you really want the <code>&lt;BS&gt;</code> to be inserted in the text),
use the command <code>CTRL-R</code> <code>CTRL-R</code> <code>{register}</code>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="24.7"></a><span class="help-tag">24.7</span>  	Abbreviations</span></h2></div>
<div class="old-help-para">An abbreviation is a short word that takes the place of a long one.  For
example, "ad" stands for "advertisement".  Vim enables you to type an
abbreviation and then will automatically expand it for you.
   To tell Vim to expand "ad" into "advertisement" every time you insert it,
use the following command:<pre>:iabbrev ad advertisement</pre>
Now, when you type "ad", the whole word "advertisement" will be inserted into
the text.  This is triggered by typing a character that can't be part of a
word, for example a space:</div>
<div class="old-help-para">	What Is Entered		What You See
<div class="help-column_heading">	I saw the a		I saw the a</div><div class="help-column_heading">	I saw the ad		I saw the ad</div><div class="help-column_heading">	I saw the ad&lt;Space&gt;	I saw the advertisement&lt;Space&gt;</div></div>
<div class="old-help-para">The expansion doesn't happen when typing just "ad".  That allows you to type a
word like "add", which will not get expanded.  Only whole words are checked
for abbreviations.</div>
<div class="old-help-para"><a name="_abbreviating-several-words"></a><h3 class="help-heading">ABBREVIATING SEVERAL WORDS</h3></div>
<div class="old-help-para">It is possible to define an abbreviation that results in multiple words.  For
example, to define "JB" as "Jack Benny", use the following command:<pre>:iabbrev JB Jack Benny</pre>
As a programmer, I use two rather unusual abbreviations:<pre>:iabbrev #b /****************************************
:iabbrev #e &lt;Space&gt;****************************************/</pre>
These are used for creating boxed comments.  The comment starts with #b, which
draws the top line.  I then type the comment text and use #e to draw the
bottom line.
   Notice that the #e abbreviation begins with a space.  In other words, the
first two characters are space-star.  Usually Vim ignores spaces between the
abbreviation and the expansion.  To avoid that problem, I spell space as seven
characters: &lt;, S, p, a, c, e, &gt;.</div>
<div class="old-help-para">	Note:
	":iabbrev" is a long word to type.  ":iab" works just as well.
	That's abbreviating the abbreviate command!</div>
<div class="old-help-para"><a name="_fixing-typing-mistakes"></a><h3 class="help-heading">FIXING TYPING MISTAKES</h3></div>
<div class="old-help-para">It's very common to make the same typing mistake every time.  For example,
typing "teh" instead of "the".  You can fix this with an abbreviation:<pre>:abbreviate teh the</pre>
You can add a whole list of these.  Add one each time you discover a common
mistake.</div>
<div class="old-help-para"><a name="_listing-abbreviations"></a><h3 class="help-heading">LISTING ABBREVIATIONS</h3></div>
<div class="old-help-para">The ":abbreviate" command lists the abbreviations:</div>
<div class="old-help-para">	:abbreviate
	i  #e		  ****************************************/	i  #b		 /****************************************
	i  JB		 Jack Benny
	i  ad		 advertisement
	!  teh		 the</div>
<div class="old-help-para">The "i" in the first column indicates Insert mode.  These abbreviations are
only active in Insert mode.  Other possible characters are:</div>
<div class="old-help-para">	c	Command-line mode			:cabbrev
	!	both Insert and Command-line mode	:abbreviate</div>
<div class="old-help-para">Since abbreviations are not often useful in Command-line mode, you will mostly
use the ":iabbrev" command.  That avoids, for example, that "ad" gets expanded
when typing a command like:<pre>:edit ad</pre>
<a name="_deleting-abbreviations"></a><h3 class="help-heading">DELETING ABBREVIATIONS</h3></div>
<div class="old-help-para">To get rid of an abbreviation, use the ":unabbreviate" command.  Suppose you
have the following abbreviation:<pre>:abbreviate @f fresh</pre>
You can remove it with this command:<pre>:unabbreviate @f</pre>
While you type this, you will notice that @f is expanded to "fresh".  Don't
worry about this, Vim understands it anyway (except when you have an
abbreviation for "fresh", but that's very unlikely).
   To remove all the abbreviations:<pre>:abclear</pre>
":unabbreviate" and ":abclear" also come in the variants for Insert mode
(":iunabbreviate and ":iabclear") and Command-line mode (":cunabbreviate" and
":cabclear").</div>
<div class="old-help-para"><a name="_remapping-abbreviations"></a><h3 class="help-heading">REMAPPING ABBREVIATIONS</h3></div>
<div class="old-help-para">There is one thing to watch out for when defining an abbreviation: The
resulting string should not be mapped.  For example:<pre>:abbreviate @a adder
:imap dd disk-door</pre>
When you now type @a, you will get "adisk-doorer".  That's not what you want.
To avoid this, use the ":noreabbrev" command.  It does the same as
":abbreviate", but avoids that the resulting string is used for mappings:<pre>:noreabbrev @a adder</pre>
Fortunately, it's unlikely that the result of an abbreviation is mapped.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="24.8"></a><span class="help-tag">24.8</span>  	Entering special characters</span></h2></div>
<div class="old-help-para">The <code>CTRL-V</code> command is used to insert the next character literally.  In other
words, any special meaning the character has, it will be ignored.  For
example:<pre>CTRL-V &lt;Esc&gt;</pre>
Inserts an escape character.  Thus you don't leave Insert mode.  (Don't type
the space after <code>CTRL-V</code>, it's only to make this easier to read).</div>
<div class="old-help-para">	Note:
	On MS-Windows <code>CTRL-V</code> is used to paste text.  Use <code>CTRL-Q</code> instead of
	<code>CTRL-V</code>.  On Unix, on the other hand, <code>CTRL-Q</code> does not work on some
	terminals, because it has a special meaning.</div>
<div class="old-help-para">You can also use the command <code>CTRL-V</code> <code>{digits}</code> to insert a character with the
decimal number <code>{digits}</code>.  For example, the character number 127 is the <code>&lt;Del&gt;</code>
character (but not necessarily the <code>&lt;Del&gt;</code> key!).  To insert <code>&lt;Del&gt;</code> type:<pre>CTRL-V 127</pre>
You can enter characters up to 255 this way.  When you type fewer than two
digits, a non-digit will terminate the command.  To avoid the need of typing a
non-digit, prepend one or two zeros to make three digits.
   All the next commands insert a <code>&lt;Tab&gt;</code> and then a dot:</div>
<div class="old-help-para">	<code>CTRL-V</code> 9.
	<code>CTRL-V</code> 09.
	<code>CTRL-V</code> 009.</div>
<div class="old-help-para">To enter a character in hexadecimal, use an "x" after the <code>CTRL-V</code>:<pre>CTRL-V x7f</pre>
This also goes up to character 255 (<code>CTRL-V</code> xff).  You can use "o" to type a
character as an octal number and two more methods allow you to type up to
a 16 bit and a 32 bit number (e.g., for a Unicode character):<pre>CTRL-V o123
CTRL-V u1234
CTRL-V U12345678</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="24.9"></a><span class="help-tag">24.9</span>  	Digraphs</span></h2></div>
<div class="old-help-para">Some characters are not on the keyboard.  For example, the copyright character
(©).  To type these characters in Vim, you use digraphs, where two characters
represent one.  To enter a ©, for example, you press three keys:<pre>CTRL-K Co</pre>
To find out what digraphs are available, use the following command:<pre>:digraphs</pre>
Vim will display the digraph table.  Here are three lines of it:</div>
<div class="old-help-para"><div class="help-column_heading">  AC ~_ 159  NS |  160  !I ¡  161  Ct ¢  162  Pd £  163  Cu ¤  164  Ye ¥  165</div><div class="help-column_heading">  BB ¦  166  SE §  167  ': ¨  168  Co ©  169  -a ª  170  &lt;&lt; «  171  NO ¬  172</div><div class="help-column_heading">  -- ­  173  Rg ®  174  'm ¯  175  DG °  176  +- ±  177  2S ²  178  3S ³  179</div></div>
<div class="old-help-para">This shows, for example, that the digraph you get by typing <code>CTRL-K</code> Pd is the
character (£).  This is character number 163 (decimal).
   Pd is short for Pound.  Most digraphs are selected to give you a hint about
the character they will produce.  If you look through the list you will
understand the logic.
   You can exchange the first and second character, if there is no digraph for
that combination.  Thus <code>CTRL-K</code> dP also works.  Since there is no digraph for
"dP" Vim will also search for a "Pd" digraph.</div>
<div class="old-help-para">	Note:
	The digraphs depend on the character set that Vim assumes you are
	using.  Always use ":digraphs" to find out which digraphs are currently
	available.</div>
<div class="old-help-para">You can define your own digraphs.  Example:<pre>:digraph a" ä</pre>
This defines that <code>CTRL-K</code> a" inserts an ä character.  You can also specify the
character with a decimal number.  This defines the same digraph:<pre>:digraph a" 228</pre>
More information about digraphs here: <a href="/neovim-docs-web/en/digraph#digraphs">digraphs</a>
   Another way to insert special characters is with a keymap.  More about that
here: <a href="/neovim-docs-web/en/usr_45#45.5">45.5</a></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="24.10"></a><span class="help-tag">24.10</span>  	Normal mode commands</span></h2></div>
<div class="old-help-para">Insert mode offers a limited number of commands.  In Normal mode you have many
more.  When you want to use one, you usually leave Insert mode with <code>&lt;Esc&gt;</code>,
execute the Normal mode command, and re-enter Insert mode with "i" or "a".
   There is a quicker way.  With <code>CTRL-O</code> <code>{command}</code> you can execute any Normal
mode command from Insert mode.  For example, to delete from the cursor to the
end of the line:<pre>CTRL-O D</pre>
You can execute only one Normal mode command this way.  But you can specify a
register or a count.  A more complicated example:<pre>CTRL-O "g3dw</pre>
This deletes up to the third word into register g.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_25#usr_25.txt">usr_25.txt</a>  Editing formatted text</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  