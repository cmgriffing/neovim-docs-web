---
title:  Usr_10
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_10.txt"></a><a name="10.1"></a><h1> Usr_10</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_10.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			     Making big changes</div>
<div class="old-help-para">In chapter 4 several ways to make small changes were explained.  This chapter
goes into making changes that are repeated or can affect a large amount of
text.  The Visual mode allows doing various things with blocks of text.  Use
an external program to do really complicated things.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_10#10.1">10.1</a>  	Record and playback commands
<a href="/neovim-docs-web/en/usr_10#10.2">10.2</a>  	Substitution
<a href="/neovim-docs-web/en/usr_10#10.3">10.3</a>  	Command ranges
<a href="/neovim-docs-web/en/usr_10#10.4">10.4</a>  	The global command
<a href="/neovim-docs-web/en/usr_10#10.5">10.5</a>  	Visual block mode
<a href="/neovim-docs-web/en/usr_10#10.6">10.6</a>  	Reading and writing part of a file
<a href="/neovim-docs-web/en/usr_10#10.7">10.7</a>  	Formatting text
<a href="/neovim-docs-web/en/usr_10#10.8">10.8</a>  	Changing case
<a href="/neovim-docs-web/en/usr_10#10.9">10.9</a>  	Using an external program</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_11#usr_11.txt">usr_11.txt</a>  Recovering from a crash
 Previous chapter: <a href="/neovim-docs-web/en/usr_09#usr_09.txt">usr_09.txt</a>  Using the GUI
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Record and playback commands</h2></div>
<div class="old-help-para">The "." command repeats the preceding change.  But what if you want to do
something more complex than a single change?  That's where command recording
comes in.  There are three steps:</div>
<div class="old-help-para">1. The "q{register}" command starts recording keystrokes into the register
   named <code>{register}</code>.  The register name must be between a and z.
2. Type your commands.
3. To finish recording, press q (without any extra character).</div>
<div class="old-help-para">You can now execute the macro by typing the command "@{register}".</div>
<div class="old-help-para">Take a look at how to use these commands in practice.  You have a list of
filenames that look like this:</div>
<div class="old-help-para"><div class="help-column_heading">	stdio.h</div><div class="help-column_heading">	fcntl.h</div><div class="help-column_heading">	unistd.h</div><div class="help-column_heading">	stdlib.h</div></div>
<div class="old-help-para">And what you want is the following:</div>
<div class="old-help-para"><div class="help-column_heading">	#include "stdio.h"</div><div class="help-column_heading">	#include "fcntl.h"</div><div class="help-column_heading">	#include "unistd.h"</div><div class="help-column_heading">	#include "stdlib.h"</div></div>
<div class="old-help-para">You start by moving to the first character of the first line.  Next you
execute the following commands:</div>
<div class="old-help-para">	qa			Start recording a macro in register a.
	^			Move to the beginning of the line.
	i#include "&lt;Esc&gt;	Insert the string #include " at the beginning
				of the line.
	$			Move to the end of the line.
	a"&lt;Esc&gt;			Append the character double quotation mark (")
				to the end of the line.
	j			Go to the next line.
	q			Stop recording the macro.</div>
<div class="old-help-para">Now that you have done the work once, you can repeat the change by typing the
command "@a" three times.
   The "@a" command can be preceded by a count, which will cause the macro to
be executed that number of times.  In this case you would type:<pre>3@a</pre>
<a name="_move-and-execute"></a><h3 class="help-heading">MOVE AND EXECUTE</h3></div>
<div class="old-help-para">You might have the lines you want to change in various places.  Just move the
cursor to each location and use the "@a" command.  If you have done that once,
you can do it again with "@@".  That's a bit easier to type.  If you now
execute register b with "@b", the next "@@" will use register b.
   If you compare the playback method with using ".", there are several
differences.  First of all, "." can only repeat one change.  As seen in the
example above, "@a" can do several changes, and move around as well.
Secondly, "." can only remember the last change.  Executing a register allows
you to make any changes and then still use "@a" to replay the recorded
commands.  Finally, you can use 26 different registers.  Thus you can remember
26 different command sequences to execute.</div>
<div class="old-help-para"><a name="_using-registers"></a><h3 class="help-heading">USING REGISTERS</h3></div>
<div class="old-help-para">The registers used for recording are the same ones you used for yank and
delete commands.  This allows you to mix recording with other commands to
manipulate the registers.
   Suppose you have recorded a few commands in register n.  When you execute
this with "@n" you notice you did something wrong.  You could try recording
again, but perhaps you will make another mistake.  Instead, use this trick:</div>
<div class="old-help-para">	G			Go to the end of the file.
	o&lt;Esc&gt;			Create an empty line.
	"np			Put the text from the n register.  You now see
				the commands you typed as text in the file.
	<code>{edits}</code>			Change the commands that were wrong.  This is
				just like editing text.
	0			Go to the start of the line.
	"ny$			Yank the corrected commands into the n
				register.
	dd			Delete the scratch line.</div>
<div class="old-help-para">Now you can execute the corrected commands with "@n".  (If your recorded
commands include line breaks, adjust the last two items in the example to
include all the lines.)</div>
<div class="old-help-para">APPENDING TO A REGISTER</div>
<div class="old-help-para">So far we have used a lowercase letter for the register name.  To append to a
register, use an uppercase letter.
   Suppose you have recorded a command to change a word to register c.  It
works properly, but you would like to add a search for the next word to
change.  This can be done with:<pre>qC/word&lt;Enter&gt;q</pre>
You start with "qC", which records to the c register and appends.  Thus
writing to an uppercase register name means to append to the register with
the same letter, but lowercase.</div>
<div class="old-help-para">This works both with recording and with yank and delete commands.  For
example, you want to collect a sequence of lines into the a register.  Yank
the first line with:<pre>"ayy</pre>
Now move to the second line, and type:<pre>"Ayy</pre>
Repeat this command for all lines.  The a register now contains all those
lines, in the order you yanked them.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="10.2"></a><span class="help-tag">10.2</span>  	Substitution<span class="help-heading-tags">						<a name="find-replace"></a><span class="help-tag">find-replace</span></span></span></h2></div>
<div class="old-help-para">The ":substitute" command enables you to perform string replacements on a
whole range of lines.  The general form of this command is as follows:<pre>:[range]substitute/from/to/[flags]</pre>
This command changes the "from" string to the "to" string in the lines
specified with [range].  For example, you can change "Professor" to "Teacher"
in all lines with the following command:<pre>:%substitute/Professor/Teacher/</pre></div>
<div class="old-help-para">	Note:
	The ":substitute" command is almost never spelled out completely.
	Most of the time, people use the abbreviated version ":s".  From here
	on the abbreviation will be used.</div>
<div class="old-help-para">The "%" before the command specifies the command works on all lines.  Without
a range, ":s" only works on the current line.  More about ranges in the next
section <a href="/neovim-docs-web/en/usr_10#10.3">10.3</a>.</div>
<div class="old-help-para">By default, the ":substitute" command changes only the first occurrence on
each line.  For example, the preceding command changes the line:</div>
<div class="old-help-para"><div class="help-column_heading">	Professor Smith criticized Professor Johnson today.</div></div>
<div class="old-help-para">to:</div>
<div class="old-help-para"><div class="help-column_heading">	Teacher Smith criticized Professor Johnson today.</div></div>
<div class="old-help-para">To change every occurrence on the line, you need to add the g (global) flag.
The command:<pre>:%s/Professor/Teacher/g</pre>
results in (starting with the original line):</div>
<div class="old-help-para"><div class="help-column_heading">	Teacher Smith criticized Teacher Johnson today.</div></div>
<div class="old-help-para">Other flags include p (print), which causes the ":substitute" command to print
out the last line it changes.  The c (confirm) flag tells ":substitute" to ask
you for confirmation before it performs each substitution.  Enter the
following:<pre>:%s/Professor/Teacher/c</pre>
Vim finds the first occurrence of "Professor" and displays the text it is
about to change.  You get the following prompt:<pre>replace with Teacher (y/n/a/q/l/^E/^Y)?</pre>
At this point, you must enter one of the following answers:</div>
<div class="old-help-para">	y		Yes; make this change.
	n		No; skip this match.
	a		All; make this change and all remaining ones without
			further confirmation.
	q		Quit; don't make any more changes.
	l		Last; make this change and then quit.
	<code>CTRL-E</code>		Scroll the text one line up.
	<code>CTRL-Y</code>		Scroll the text one line down.</div>
<div class="old-help-para">The "from" part of the substitute command is actually a pattern.  The same
kind as used for the search command.  For example, this command only
substitutes "the" when it appears at the start of a line:<pre>:s/^the/these/</pre>
If you are substituting with a "from" or "to" part that includes a slash, you
need to put a backslash before it.  A simpler way is to use another character
instead of the slash.  A plus, for example:<pre>:s+one/two+one or two+</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="10.3"></a><span class="help-tag">10.3</span>  	Command ranges</span></h2></div>
<div class="old-help-para">The ":substitute" command, and many other : commands, can be applied to a
selection of lines.  This is called a range.
   The simple form of a range is <code>{number}</code>,{number}.  For example:<pre>:1,5s/this/that/g</pre>
Executes the substitute command on the lines 1 to 5.  Line 5 is included.
The range is always placed before the command.</div>
<div class="old-help-para">A single number can be used to address one specific line:<pre>:54s/President/Fool/</pre>
Some commands work on the whole file when you do not specify a range.  To make
them work on the current line the "." address is used.  The ":write" command
works like that.  Without a range, it writes the whole file.  To make it write
only the current line into a file:<pre>:.write otherfile</pre>
The first line always has number one.  How about the last line?  The "$"
character is used for this.  For example, to substitute in the lines from the
cursor to the end:<pre>:.,$s/yes/no/</pre>
The "%" range that we used before, is actually a short way to say "1,$", from
the first to the last line.</div>
<div class="old-help-para">USING A PATTERN IN A RANGE</div>
<div class="old-help-para">Suppose you are editing a chapter in a book, and want to replace all
occurrences of "grey" with "gray".  But only in this chapter, not in the next
one.  You know that only chapter boundaries have the word "Chapter" in the
first column.  This command will work then:<pre>:?^Chapter?,/^Chapter/s=grey=gray=g</pre>
You can see a search pattern is used twice.  The first "?^Chapter?" finds the
line above the current position that matches this pattern.  Thus the ?pattern?
range is used to search backwards.  Similarly, "/^Chapter/" is used to search
forward for the start of the next chapter.
   To avoid confusion with the slashes, the "=" character was used in the
substitute command here.  A slash or another character would have worked as
well.</div>
<div class="old-help-para"><a name="_add-and-subtract"></a><h3 class="help-heading">ADD AND SUBTRACT</h3></div>
<div class="old-help-para">There is a slight error in the above command: If the title of the next chapter
had included "grey" it would be replaced as well.  Maybe that's what you
wanted, but what if you didn't?  Then you can specify an offset.
   To search for a pattern and then use the line above it:<pre>/Chapter/-1</pre>
You can use any number instead of the 1.  To address the second line below the
match:<pre>/Chapter/+2</pre>
The offsets can also be used with the other items in a range.  Look at this
one:<pre>:.+3,$-5</pre>
This specifies the range that starts three lines below the cursor and ends
five lines before the last line in the file.</div>
<div class="old-help-para"><a name="_using-marks"></a><h3 class="help-heading">USING MARKS</h3></div>
<div class="old-help-para">Instead of figuring out the line numbers of certain positions, remembering them
and typing them in a range, you can use marks.
   Place the marks as mentioned in chapter 3.  For example, use "mt" to mark
the top of an area and "mb" to mark the bottom.  Then you can use this range
to specify the lines between the marks (including the lines with the marks):<pre>:'t,'b</pre>
<a name="_visual-mode-and-ranges"></a><h3 class="help-heading">VISUAL MODE AND RANGES</h3></div>
<div class="old-help-para">You can select text with Visual mode.  If you then press ":" to start a colon
command, you will see this:<pre>:'&lt;,'&gt;</pre>
Now you can type the command and it will be applied to the range of lines that
was visually selected.</div>
<div class="old-help-para">	Note:
	When using Visual mode to select part of a line, or using <code>CTRL-V</code> to
	select a block of text, the colon commands will still apply to whole
	lines.  This might change in a future version of Vim.</div>
<div class="old-help-para">The '&lt; and '&gt; are actually marks, placed at the start and end of the Visual
selection.  The marks remain at their position until another Visual selection
is made.  Thus you can use the "'&lt;" command to jump to position where the
Visual area started.  And you can mix the marks with other items:<pre>:'&gt;,$</pre>
This addresses the lines from the end of the Visual area to the end of the
file.</div>
<div class="old-help-para">A NUMBER OF LINES</div>
<div class="old-help-para">When you know how many lines you want to change, you can type the number and
then ":".  For example, when you type "5:", you will get:<pre>:.,.+4</pre>
Now you can type the command you want to use.  It will use the range "."
(current line) until ".+4" (four lines down).  Thus it spans five lines.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="10.4"></a><span class="help-tag">10.4</span>  	The global command</span></h2></div>
<div class="old-help-para">The ":global" command is one of the more powerful features of Vim.  It allows
you to find a match for a pattern and execute a command there.  The general
form is:<pre>:[range]global/{pattern}/{command}</pre>
This is similar to the ":substitute" command.  But, instead of replacing the
matched text with other text, the command <code>{command}</code> is executed.</div>
<div class="old-help-para">	Note:
	The command executed for ":global" must be one that starts with a
	colon.  Normal mode commands can not be used directly.  The <a href="/neovim-docs-web/en/various#%3Anormal">:normal</a>
	command can do this for you.</div>
<div class="old-help-para">Suppose you want to change "foobar" to "barfoo", but only in C++ style
comments.  These comments start with "//".  Use this command:<pre>:g+//+s/foobar/barfoo/g</pre>
This starts with ":g".  That is short for ":global", just like ":s" is short
for ":substitute".  Then the pattern, enclosed in plus characters.  Since the
pattern we are looking for contains a slash, this uses the plus character to
separate the pattern.  Next comes the substitute command that changes "foobar"
into "barfoo".
   The default range for the global command is the whole file.  Thus no range
was specified in this example.  This is different from ":substitute", which
works on one line without a range.
   The command isn't perfect, since it also matches lines where "//" appears
halfway through a line, and the substitution will also take place before the
"//".</div>
<div class="old-help-para">Just like with ":substitute", any pattern can be used.  When you learn more
complicated patterns later, you can use them here.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="10.5"></a><span class="help-tag">10.5</span>  	Visual block mode</span></h2></div>
<div class="old-help-para">With <code>CTRL-V</code> you can start selection of a rectangular area of text.  There are
a few commands that do something special with the text block.</div>
<div class="old-help-para">There is something special about using the "$" command in Visual block mode.
When the last motion command used was "$", all lines in the Visual selection
will extend until the end of the line, also when the line with the cursor is
shorter.  This remains effective until you use a motion command that moves the
cursor horizontally.  Thus using "j" keeps it, "h" stops it.</div>
<div class="old-help-para"><a name="_inserting-text"></a><h3 class="help-heading">INSERTING TEXT</h3></div>
<div class="old-help-para">The command  "I{string}&lt;Esc&gt;" inserts the text <code>{string}</code> in each line, just
left of the visual block.  You start by pressing <code>CTRL-V</code> to enter visual block
mode.  Now you move the cursor to define your block.  Next you type I to enter
Insert mode, followed by the text to insert.  As you type, the text appears on
the first line only.
   After you press <code>&lt;Esc&gt;</code> to end the insert, the text will magically be
inserted in the rest of the lines contained in the visual selection.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	include one</div><div class="help-column_heading">	include two</div><div class="help-column_heading">	include three</div><div class="help-column_heading">	include four</div></div>
<div class="old-help-para">Move the cursor to the "o" of "one" and press <code>CTRL-V</code>.  Move it down with "3j"
to "four".  You now have a block selection that spans four lines.  Now type:<pre>Imain.&lt;Esc&gt;</pre>
The result:</div>
<div class="old-help-para"><div class="help-column_heading">	include main.one</div><div class="help-column_heading">	include main.two</div><div class="help-column_heading">	include main.three</div><div class="help-column_heading">	include main.four</div></div>
<div class="old-help-para">If the block spans short lines that do not extend into the block, the text is
not inserted in that line.  For example, make a Visual block selection that
includes the word "long" in the first and last line of this text, and thus has
no text selected in the second line:</div>
<div class="old-help-para"><div class="help-column_heading">	This is a long line</div><div class="help-column_heading">	short</div><div class="help-column_heading">	Any other long line</div></div>
<div class="old-help-para">		  ^^^^ selected block</div>
<div class="old-help-para">Now use the command "Ivery <code>&lt;Esc&gt;</code>".  The result is:</div>
<div class="old-help-para"><div class="help-column_heading">	This is a very long line</div><div class="help-column_heading">	short</div><div class="help-column_heading">	Any other very long line</div></div>
<div class="old-help-para">In the short line no text was inserted.</div>
<div class="old-help-para">If the string you insert contains a newline, the "I" acts just like a Normal
insert command and affects only the first line of the block.</div>
<div class="old-help-para">The "A" command works the same way, except that it appends after the right
side of the block.  And it does insert text in a short line.  Thus you can
make a choice whether you do or don't want to append text to a short line.
   There is one special case for "A": Select a Visual block and then use "$"
to make the block extend to the end of each line.  Using "A" now will append
the text to the end of each line.
   Using the same example from above, and then typing "$A XXX&lt;Esc&gt;, you get
this result:</div>
<div class="old-help-para"><div class="help-column_heading">	This is a long line XXX</div><div class="help-column_heading">	short XXX</div><div class="help-column_heading">	Any other long line XXX</div></div>
<div class="old-help-para">This really requires using the "$" command.  Vim remembers that it was used.
Making the same selection by moving the cursor to the end of the longest line
with other movement commands will not have the same result.</div>
<div class="old-help-para"><a name="_changing-text"></a><h3 class="help-heading">CHANGING TEXT</h3></div>
<div class="old-help-para">The Visual block "c" command deletes the block and then throws you into Insert
mode to enable you to type in a string.  The string will be inserted in each
line in the block.
   Starting with the same selection of the "long" words as above, then typing
"c_LONG_&lt;Esc&gt;", you get this:</div>
<div class="old-help-para"><div class="help-column_heading">	This is a _LONG_ line</div><div class="help-column_heading">	short</div><div class="help-column_heading">	Any other _LONG_ line</div></div>
<div class="old-help-para">Just like with "I" the short line is not changed.  Also, you can't enter a
newline in the new text.</div>
<div class="old-help-para">The "C" command deletes text from the left edge of the block to the end of
line.  It then puts you in Insert mode so that you can type in a string,
which is added to the end of each line.
   Starting with the same text again, and typing "Cnew text&lt;Esc&gt;" you get:</div>
<div class="old-help-para"><div class="help-column_heading">	This is a new text</div><div class="help-column_heading">	short</div><div class="help-column_heading">	Any other new text</div></div>
<div class="old-help-para">Notice that, even though only the "long" word was selected, the text after it
is deleted as well.  Thus only the location of the left edge of the visual
block really matters.
   Again, short lines that do not reach into the block are excluded.</div>
<div class="old-help-para">Other commands that change the characters in the block:</div>
<div class="old-help-para">	~	swap case	(a -&gt; A and A -&gt; a)
	U	make uppercase  (a -&gt; A and A -&gt; A)
	u	make lowercase  (a -&gt; a and A -&gt; a)</div>
<div class="old-help-para">FILLING WITH A CHARACTER</div>
<div class="old-help-para">To fill the whole block with one character, use the "r" command.  Again,
starting with the same example text from above, and then typing "rx":</div>
<div class="old-help-para"><div class="help-column_heading">	This is a xxxx line</div><div class="help-column_heading">	short</div><div class="help-column_heading">	Any other xxxx line</div></div>
<div class="old-help-para">	Note:
	If you want to include characters beyond the end of the line in the
	block, check out the <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> feature in chapter 25.</div>
<div class="old-help-para"><a name="_shifting"></a><h3 class="help-heading">SHIFTING</h3></div>
<div class="old-help-para">The command "&gt;" shifts the selected text to the right one shift amount,
inserting whitespace.  The starting point for this shift is the left edge of
the visual block.
   With the same example again, "&gt;" gives this result:</div>
<div class="old-help-para"><div class="help-column_heading">	This is a	  long line</div><div class="help-column_heading">	short</div><div class="help-column_heading">	Any other	  long line</div></div>
<div class="old-help-para">The shift amount is specified with the <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> option.  To change it to
use 4 spaces:<pre>:set shiftwidth=4</pre>
The "&lt;" command removes one shift amount of whitespace at the left
edge of the block.  This command is limited by the amount of text that is
there; so if there is less than a shift amount of whitespace available, it
removes what it can.</div>
<div class="old-help-para"><a name="_joining-lines"></a><h3 class="help-heading">JOINING LINES</h3></div>
<div class="old-help-para">The "J" command joins all selected lines together into one line.  Thus it
removes the line breaks.  Actually, the line break, leading white space and
trailing white space is replaced by one space.  Two spaces are used after a
line ending (that can be changed with the <a href="/neovim-docs-web/en/options#'joinspaces'">'joinspaces'</a> option).
   Let's use the example that we got so familiar with now.  The result of
using the "J" command:</div>
<div class="old-help-para"><div class="help-column_heading">	This is a long line short Any other long line</div></div>
<div class="old-help-para">The "J" command doesn't require a blockwise selection.  It works with "v" and
"V" selection in exactly the same way.</div>
<div class="old-help-para">If you don't want the white space to be changed, use the "gJ" command.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="10.6"></a><span class="help-tag">10.6</span>  	Reading and writing part of a file</span></h2></div>
<div class="old-help-para">When you are writing an e-mail message, you may want to include another file.
This can be done with the ":read <code>{filename}</code>" command.  The text of the file is
put below the cursor line.
   Starting with this text:</div>
<div class="old-help-para"><div class="help-column_heading">	Hi John,</div><div class="help-column_heading">	Here is the diff that fixes the bug:</div><div class="help-column_heading">	Bye, Pierre.</div></div>
<div class="old-help-para">Move the cursor to the second line and type:<pre>:read patch</pre>
The file named "patch" will be inserted, with this result:</div>
<div class="old-help-para"><div class="help-column_heading">	Hi John,</div><div class="help-column_heading">	Here is the diff that fixes the bug:</div><div class="help-column_heading">	2c2</div><div class="help-column_heading">	&lt;	for (i = 0; i &lt;= length; ++i)</div><div class="help-column_heading">	---</div><div class="help-column_heading">	&gt;	for (i = 0; i &lt; length; ++i)</div><div class="help-column_heading">	Bye, Pierre.</div></div>
<div class="old-help-para">The ":read" command accepts a range.  The file will be put below the last line
number of this range.  Thus ":$r patch" appends the file "patch" at the end of
the file.
   What if you want to read the file above the first line?  This can be done
with the line number zero.  This line doesn't really exist, you will get an
error message when using it with most commands.  But this command is allowed:
<pre>:0read patch</pre>
The file "patch" will be put above the first line of the file.</div>
<div class="old-help-para">WRITING A RANGE OF LINES</div>
<div class="old-help-para">To write a range of lines to a file, the ":write" command can be used.
Without a range it writes the whole file.  With a range only the specified
lines are written:<pre>:.,$write tempo</pre>
This writes the lines from the cursor until the end of the file into the file
"tempo".  If this file already exists you will get an error message.  Vim
protects you from accidentally overwriting an existing file.  If you know what
you are doing and want to overwrite the file, append !:<pre>:.,$write! tempo</pre>
CAREFUL: The ! must follow the ":write" command immediately, without white
space.  Otherwise it becomes a filter command, which is explained later in
this chapter.</div>
<div class="old-help-para">APPENDING TO A FILE</div>
<div class="old-help-para">In the first section of this chapter was explained how to collect a number of
lines into a register.  The same can be done to collect lines in a file.
Write the first line with this command:<pre>:.write collection</pre>
Now move the cursor to the second line you want to collect, and type this:<pre>:.write &gt;&gt;collection</pre>
The "&gt;&gt;" tells Vim the "collection" file is not to be written as a new file,
but the line must be appended at the end.   You can repeat this as many times
as you like.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="10.7"></a><span class="help-tag">10.7</span>  	Formatting text</span></h2></div>
<div class="old-help-para">When you are typing plain text, it's nice if the length of each line is
automatically trimmed to fit in the window.  To make this happen while
inserting text, set the <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> option:<pre>:set textwidth=78</pre>
You might remember that in the example vimrc file this command was used for
every text file.  Thus if you are using that vimrc file, you were already
using it.  To check the current value of <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>:<pre>:set textwidth</pre>
Now lines will be broken to take only up to 78 characters.  However, when you
insert text halfway through a line, or when you delete a few words, the lines
will get too long or too short.  Vim doesn't automatically reformat the text.
To tell Vim to format the current paragraph:<pre>gqap</pre>
This starts with the "gq" command, which is an operator.  Following is "ap",
the text object that stands for "a paragraph".  A paragraph is separated from
the next paragraph by an empty line.</div>
<div class="old-help-para">	Note:
	A blank line, which contains white space, does NOT separate
	paragraphs.  This is hard to notice!</div>
<div class="old-help-para">Instead of "ap" you could use any motion or text object.  If your paragraphs
are properly separated, you can use this command to format the whole file:<pre>gggqG</pre>
"gg" takes you to the first line, "gq" is the format operator and "G" the
motion that jumps to the last line.</div>
<div class="old-help-para">In case your paragraphs aren't clearly defined, you can format just the lines
you manually select.  Move the cursor to the first line you want to format.
Start with the command "gqj".  This formats the current line and the one below
it.  If the first line was short, words from the next line will be appended.
If it was too long, words will be moved to the next line.  The cursor moves to
the second line.  Now you can use "." to repeat the command.  Keep doing this
until you are at the end of the text you want to format.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="10.8"></a><span class="help-tag">10.8</span>  	Changing case</span></h2></div>
<div class="old-help-para">You have text with section headers in lowercase.  You want to make the word
"section" all uppercase.  Do this with the "gU" operator.  Start with the
cursor in the first column:<pre>gUw</pre></div>
<div class="old-help-para">	section header	    ----&gt;      SECTION header</div>
<div class="old-help-para">The "gu" operator does exactly the opposite:<pre>guw</pre></div>
<div class="old-help-para">	SECTION header	    ----&gt;      section header</div>
<div class="old-help-para">You can also use "g~" to swap case.  All these are operators, thus they work
with any motion command, with text objects and in Visual mode.
   To make an operator work on lines you double it.  The delete operator is
"d", thus to delete a line you use "dd".  Similarly, "gugu" makes a whole line
lowercase.  This can be shortened to "guu".  "gUgU" is shortened to "gUU" and
"g~g~" to "g~~".  Example:<pre>g~~</pre></div>
<div class="old-help-para"><div class="help-column_heading">	Some GIRLS have Fun    ----&gt;   sOME girls HAVE fUN</div></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="10.9"></a><span class="help-tag">10.9</span>  	Using an external program</span></h2></div>
<div class="old-help-para">Vim has a very powerful set of commands, it can do anything.  But there may
still be something that an external command can do better or faster.
   The command "!{motion}{program}" takes a block of text and filters it
through an external program.  In other words, it runs the system command
represented by <code>{program}</code>, giving it the block of text represented by <code>{motion}</code>
as input.  The output of this command then replaces the selected block.
   Because this summarizes badly if you are unfamiliar with Unix filters, take
a look at an example.  The sort command sorts a file.  If you execute the
following command, the unsorted file input.txt will be sorted and written to
output.txt.  This works on both Unix and Windows.<pre>sort &lt;input.txt &gt;output.txt</pre>
Now do the same thing in Vim.  You want to sort lines 1 through 5 of a file.
You start by putting the cursor on line 1.  Next you execute the following
command:<pre>!5G</pre>
The "!" tells Vim that you are performing a filter operation.  The Vim editor
expects a motion command to follow, indicating which part of the file to
filter.  The "5G" command tells Vim to go to line 5, so it now knows that it
is to filter lines 1 (the current line) through 5.
   In anticipation of the filtering, the cursor drops to the bottom of the
screen and a ! prompt displays.  You can now type in the name of the filter
program, in this case "sort".  Therefore, your full command is as follows:<pre>!5Gsort&lt;Enter&gt;</pre>
The result is that the sort program is run on the first 5 lines.  The output
of the program replaces these lines.</div>
<div class="old-help-para">	line 55			      line 11
	line 33			      line 22
	line 11		--&gt;	      line 33
	line 22			      line 44
	line 44			      line 55
	last line		      last line</div>
<div class="old-help-para">The "!!" command filters the current line through a filter.  In Unix the "date"
command prints the current time and date.  "!!date&lt;Enter&gt;" replaces the current
line with the output of "date".  This is useful to add a timestamp to a file.</div>
<div class="old-help-para">WHEN IT DOESN'T WORK</div>
<div class="old-help-para">Starting a shell, sending it text and capturing the output requires that Vim
knows how the shell works exactly.  When you have problems with filtering,
check the values of these options:</div>
<div class="old-help-para">	<a href="/neovim-docs-web/en/options#'shell'">'shell'</a>		specifies the program that Vim uses to execute
			external programs.
	<a href="/neovim-docs-web/en/options#'shellcmdflag'">'shellcmdflag'</a>	argument to pass a command to the shell
	<a href="/neovim-docs-web/en/options#'shellquote'">'shellquote'</a>	quote to be used around the command
	<a href="/neovim-docs-web/en/options#'shellxquote'">'shellxquote'</a>	quote to be used around the command and redirection
	<a href="/neovim-docs-web/en/options#'shellslash'">'shellslash'</a>	use forward slashes in the command (only for
			MS-Windows and alikes)
	<a href="/neovim-docs-web/en/options#'shellredir'">'shellredir'</a>	string used to write the command output into a file</div>
<div class="old-help-para">On Unix this is hardly ever a problem, because there are two kinds of shells:
"sh" like and "csh" like.  Vim checks the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> option and sets related
options automatically, depending on whether it sees "csh" somewhere in
<a href="/neovim-docs-web/en/options#'shell'">'shell'</a>.
   On MS-Windows, however, there are many different shells and you might have
to tune the options to make filtering work.  Check the help for the options
for more information.</div>
<div class="old-help-para"><a name="_reading-command-output"></a><h3 class="help-heading">READING COMMAND OUTPUT</h3></div>
<div class="old-help-para">To read the contents of the current directory into the file, use this:</div>
<div class="old-help-para">on Unix:<pre>:read !ls</pre>
on MS-Windows:<pre>:read !dir</pre>
The output of the "ls" or "dir" command is captured and inserted in the text,
below the cursor.  This is similar to reading a file, except that the "!" is
used to tell Vim that a command follows.
   The command may have arguments.  And a range can be used to tell where Vim
should put the lines:<pre>:0read !date -u</pre>
This inserts the current time and date in UTC format at the top of the file.
(Well, if you have a date command that accepts the "-u" argument.)  Note the
difference with using "!!date": that replaced a line, while ":read !date" will
insert a line.</div>
<div class="old-help-para">WRITING TEXT TO A COMMAND</div>
<div class="old-help-para">The Unix command "wc" counts words.  To count the words in the current file:<pre>:write !wc</pre>
This is the same write command as before, but instead of a file name the "!"
character is used and the name of an external command.  The written text will
be passed to the specified command as its standard input.  The output could
look like this:</div>
<div class="old-help-para"><div class="help-column_heading">       4      47     249</div></div>
<div class="old-help-para">The "wc" command isn't verbose.  This means you have 4 lines, 47 words and 249
characters.</div>
<div class="old-help-para">Watch out for this mistake:<pre>:write! wc</pre>
This will write the file "wc" in the current directory, with force.  White
space is important here!</div>
<div class="old-help-para"><a name="_redrawing-the-screen"></a><h3 class="help-heading">REDRAWING THE SCREEN</h3></div>
<div class="old-help-para">If the external command produced an error message, the display may have been
messed up.  Vim is very efficient and only redraws those parts of the screen
that it knows need redrawing.  But it can't know about what another program
has written.  To tell Vim to redraw the screen:<pre>CTRL-L</pre>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_10.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_10.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09CTRL-L%0A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%0ANext%20chapter%3A%20%7Cusr_11.txt%7C%20%20Recovering%20from%20a%20crash%0A%0ACopyright%3A%20see%20%7Cmanual-copyright%7C%20%20vim%3Atw%3D78%3Ats%3D8%3Anoet%3Aft%3Dhelp%3Anorl%3A%0D%60%60%60">==============================================================================</a></div>
<div class="old-help-para">Next chapter: <a href="/neovim-docs-web/en/usr_11#usr_11.txt">usr_11.txt</a>  Recovering from a crash</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  