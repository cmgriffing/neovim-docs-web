---
title:  Usr_12
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_12.txt"></a><a name="12.1"></a><h1> Usr_12</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_12.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">				Clever tricks</div>
<div class="old-help-para">By combining several commands you can make Vim do nearly everything.  In this
chapter a number of useful combinations will be presented.  This uses the
commands introduced in the previous chapters and a few more.</div>
<div class="old-help-para"><a href="usr_12.html#12.1">12.1</a>  	Replace a word
<a href="usr_12.html#12.2">12.2</a>  	Change "Last, First" to "First Last"
<a href="usr_12.html#12.3">12.3</a>  	Sort a list
<a href="usr_12.html#12.4">12.4</a>  	Reverse line order
<a href="usr_12.html#12.5">12.5</a>  	Count words
<a href="usr_12.html#12.6">12.6</a>  	Find a man page
<a href="usr_12.html#12.7">12.7</a>  	Trim blanks
<a href="usr_12.html#12.8">12.8</a>  	Find where a word is used</div>
<div class="old-help-para">     Next chapter: <a href="usr_20.html#usr_20.txt">usr_20.txt</a>  Typing command-line commands quickly
 Previous chapter: <a href="usr_11.html#usr_11.txt">usr_11.txt</a>  Recovering from a crash
Table of contents: <a href="usr_toc.html#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Replace a word</h2></div>
<div class="old-help-para">The substitute command can be used to replace all occurrences of a word with
another word:<pre>:%s/four/4/g</pre>
The "%" range means to replace in all lines.  The "g" flag at the end causes
all words in a line to be replaced.
   This will not do the right thing if your file also contains "thirtyfour".
It would be replaced with "thirty4".  To avoid this, use the "\&lt;" item to
match the start of a word:<pre>:%s/\&lt;four/4/g</pre>
Obviously, this still goes wrong on "fourteen".  Use "\&gt;" to match the end of
a word:<pre>:%s/\&lt;four\&gt;/4/g</pre>
If you are programming, you might want to replace "four" in comments, but not
in the code.  Since this is difficult to specify, add the "c" flag to have the
substitute command prompt you for each replacement:<pre>
:%s/\&lt;four\&gt;/4/gc</pre>
<a name="_replacing-in-several-files"></a><h3 class="help-heading">REPLACING IN SEVERAL FILES</h3></div>
<div class="old-help-para">Suppose you want to replace a word in more than one file.  You could edit each
file and type the command manually.  It's a lot faster to use record and
playback.
   Let's assume you have a directory with C++ files, all ending in ".cpp".
There is a function called "GetResp" that you want to rename to "GetAnswer".</div>
<div class="old-help-para">	vim.cpp		Start Vim, defining the argument list to
				contain all the C++ files.  You are now in the
				first file.
	qq			Start recording into the q register
	:%s/\&lt;GetResp\&gt;/GetAnswer/g
				Do the replacements in the first file.
	:wnext			Write this file and move to the next one.
	q			Stop recording.
	@q			Execute the q register.  This will replay the
				substitution and ":wnext".  You can verify
				that this doesn't produce an error message.
	999@q			Execute the q register on the remaining files.</div>
<div class="old-help-para">At the last file you will get an error message, because ":wnext" cannot move
to the next file.  This stops the execution, and everything is done.</div>
<div class="old-help-para">	Note:
	When playing back a recorded sequence, an error stops the execution.
	Therefore, make sure you don't get an error message when recording.</div>
<div class="old-help-para">There is one catch: If one of the .cpp files does not contain the word
"GetResp", you will get an error and replacing will stop.  To avoid this, add
the "e" flag to the substitute command:<pre>:%s/\&lt;GetResp\&gt;/GetAnswer/ge</pre>
The "e" flag tells ":substitute" that not finding a match is not an error.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="12.2"></a><span class="help-tag">12.2</span>  	Change "Last, First" to "First Last"</span></h2></div>
<div class="old-help-para">You have a list of names in this form:</div>
<div class="old-help-para"><div class="help-column_heading">	Doe, John</div><div class="help-column_heading">	Smith, Peter</div></div>
<div class="old-help-para">You want to change that to:</div>
<div class="old-help-para"><div class="help-column_heading">	John Doe</div><div class="help-column_heading">	Peter Smith</div></div>
<div class="old-help-para">This can be done with just one command:<pre>:%s/\([^,]*\), \(.*\)/\2 \1/</pre>
Let's break this down in parts.  Obviously it starts with a substitute
command.  The "%" is the line range, which stands for the whole file.  Thus
the substitution is done in every line in the file.
   The arguments for the substitute command are "/from/to/".  The slashes
separate the "from" pattern and the "to" string.  This is what the "from"
pattern contains:
<div class="help-column_heading">							\([^,]*\), \(.*\)</div></div>
<div class="old-help-para">	The first part between \( \) matches "Last"	\(     \)
	    match anything but a comma			  [^,]
	    any number of times				      *	matches ", " literally					 ,
	The second part between \( \) matches "First"		   \(  \)
	    any character					     .
	    any number of times					      *
In the "to" part we have "\2" and "\1".  These are called backreferences.
They refer to the text matched by the "\( \)" parts in the pattern.  "\2"
refers to the text matched by the second "\( \)", which is the "First" name.
"\1" refers to the first "\( \)", which is the "Last" name.
   You can use up to nine backreferences in the "to" part of a substitute
command.  "\0" stands for the whole matched pattern.  There are a few more
special items in a substitute command, see <a href="change.html#sub-replace-special">sub-replace-special</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="12.3"></a><span class="help-tag">12.3</span>  	Sort a list</span></h2></div>
<div class="old-help-para">In a Makefile you often have a list of files.  For example:</div>
<div class="old-help-para"><div class="help-column_heading">	OBJS = \</div><div class="help-column_heading">		version.o \</div><div class="help-column_heading">		pch.o \</div><div class="help-column_heading">		getopt.o \</div><div class="help-column_heading">		util.o \</div><div class="help-column_heading">		getopt1.o \</div><div class="help-column_heading">		inp.o \</div><div class="help-column_heading">		patch.o \</div><div class="help-column_heading">		backup.o</div></div>
<div class="old-help-para">To sort this list, filter the text through the external sort command:<pre>/^OBJS
j
:.,/^$/-1!sort</pre>
This goes to the first line, where "OBJS" is the first thing in the line.
Then it goes one line down and filters the lines until the next empty line.
You could also select the lines in Visual mode and then use "!sort".  That's
easier to type, but more work when there are many lines.
   The result is this:</div>
<div class="old-help-para"><div class="help-column_heading">	OBJS = \</div><div class="help-column_heading">		backup.o</div><div class="help-column_heading">		getopt.o \</div><div class="help-column_heading">		getopt1.o \</div><div class="help-column_heading">		inp.o \</div><div class="help-column_heading">		patch.o \</div><div class="help-column_heading">		pch.o \</div><div class="help-column_heading">		util.o \</div><div class="help-column_heading">		version.o \</div></div>
<div class="old-help-para">Notice that a backslash at the end of each line is used to indicate the line
continues.  After sorting, this is wrong!  The "backup.o" line that was at
the end didn't have a backslash.  Now that it sorts to another place, it
must have a backslash.
   The simplest solution is to add the backslash with "A \&lt;Esc&gt;".  You can
keep the backslash in the last line, if you make sure an empty line comes
after it.  That way you don't have this problem again.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="12.4"></a><span class="help-tag">12.4</span>  	Reverse line order</span></h2></div>
<div class="old-help-para">The <a href="repeat.html#%3Aglobal">:global</a> command can be combined with the <a href="change.html#%3Amove">:move</a> command to move all the
lines before the first line, resulting in a reversed file.  The command is:<pre>:global/^/move 0</pre>
Abbreviated:<pre>:g/^/m 0</pre>
The "^" regular expression matches the beginning of the line (even if the line
is blank).  The <a href="change.html#%3Amove">:move</a> command moves the matching line to after the imaginary
zeroth line, so the current matching line becomes the first line of the file.
As the <a href="repeat.html#%3Aglobal">:global</a> command is not confused by the changing line numbering,
<a href="repeat.html#%3Aglobal">:global</a> proceeds to match all remaining lines of the file and puts each as
the first.</div>
<div class="old-help-para">This also works on a range of lines.  First move to above the first line and
mark it with "mt".  Then move the cursor to the last line in the range and
type:<pre>:'t+1,.g/^/m 't</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="12.5"></a><span class="help-tag">12.5</span>  	Count words</span></h2></div>
<div class="old-help-para">Sometimes you have to write a text with a maximum number of words.  Vim can
count the words for you.
   When the whole file is what you want to count the words in, use this
command:<pre>g CTRL-G</pre>
Do not type a space after the g, this is just used here to make the command
easy to read.
   The output looks like this:</div>
<div class="old-help-para"><div class="help-column_heading">	Col 1 of 0; Line 141 of 157; Word 748 of 774; Byte 4489 of 4976</div></div>
<div class="old-help-para">You can see on which word you are (748), and the total number of words in the
file (774).</div>
<div class="old-help-para">When the text is only part of a file, you could move to the start of the text,
type "g <code>CTRL-G</code>", move to the end of the text, type "g <code>CTRL-G</code>" again, and then
use your brain to compute the difference in the word position.  That's a good
exercise, but there is an easier way.  With Visual mode, select the text you
want to count words in.  Then type g <code>CTRL-G</code>.  The result:</div>
<div class="old-help-para"><div class="help-column_heading">	Selected 5 of 293 Lines; 70 of 1884 Words; 359 of 10928 Bytes</div></div>
<div class="old-help-para">For other ways to count words, lines and other items, see <a href="tips.html#count-items">count-items</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="12.6"></a><span class="help-tag">12.6</span>  	Find a man page<span class="help-heading-tags">					<a name="find-manpage"></a><span class="help-tag">find-manpage</span></span></span></h2></div>
<div class="old-help-para">While editing a shell script or C program, you are using a command or function
that you want to find the man page for (this is on Unix).  Let's first use a
simple way: Move the cursor to the word you want to find help on and press<pre>K</pre>
Nvim will run <a href="filetype.html#%3AMan">:Man</a> on the word.  If the man page is found, it is displayed.
You can also use the <a href="filetype.html#%3AMan">:Man</a> command to open a window on a man page:<pre>:Man csh</pre>
You can scroll around and the text is highlighted.  This allows you to find
the help you were looking for.  Use <code>CTRL-W</code> w to jump to the window with the
text you were working on.
   To find a man page in a specific section, put the section number first.
For example, to look in section 3 for "echo":<pre>:Man 3 echo</pre>
To jump to another man page, which is in the text with the typical form
"word(1)", press <code>CTRL-]</code> on it.  Further ":Man" commands will use the same
window.</div>
<div class="old-help-para">To display a man page for the word under the cursor, use this:<pre>K</pre>
For example, you want to know the return value of "strstr()" while editing
this line:</div>
<div class="old-help-para"><div class="help-column_heading">	if ( strstr (input, "aap") == )</div></div>
<div class="old-help-para">Move the cursor to somewhere on "strstr" and type "K".  A window will open
to display the man page for strstr().</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="12.7"></a><span class="help-tag">12.7</span>  	Trim blanks</span></h2></div>
<div class="old-help-para">Some people find spaces and tabs at the end of a line useless, wasteful, and
ugly.  To remove whitespace at the end of every line, execute the following
command:<pre>:%s/\s\+$//</pre>
The line range "%" is used, thus this works on the whole file.  The pattern
that the ":substitute" command matches with is "\s\+$".  This finds white
space characters (\s), 1 or more of them (\+), before the end-of-line ($).
Later will be explained how you write patterns like this, see <a href="usr_27.html#usr_27.txt">usr_27.txt</a>.
   The "to" part of the substitute command is empty: "//".  Thus it replaces
with nothing, effectively deleting the matched white space.</div>
<div class="old-help-para">Another wasteful use of spaces is placing them before a tab.  Often these can
be deleted without changing the amount of white space.  But not always!
Therefore, you can best do this manually.  Use this search command:<pre>/</pre>
You cannot see it, but there is a space before a tab in this command.  Thus
it's "/&lt;Space&gt;&lt;Tab&gt;".   Now use "x" to delete the space and check that the
amount of white space doesn't change.  You might have to insert a tab if it
does change.  Type "n" to find the next match.  Repeat this until no more
matches can be found.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="12.8"></a><span class="help-tag">12.8</span>  	Find where a word is used</span></h2></div>
<div class="old-help-para">If you are a Unix user, you can use a combination of Vim and the grep command
to edit all the files that contain a given word.  This is extremely useful if
you are working on a program and want to view or edit all the files that
contain a specific variable.
   For example, suppose you want to edit all the C program files that contain
the word "frame_counter".  To do this you use the command:<pre>vim `grep -l frame_counter *.c`</pre>
Let's look at this command in detail.  The grep command searches through a set
of files for a given word.  Because the -l argument is specified, the command
will only list the files containing the word and not print the matching lines.
The word it is searching for is "frame_counter".  Actually, this can be any
regular expression.  (Note: What grep uses for regular expressions is not
exactly the same as what Vim uses.)
   The entire command is enclosed in backticks ().  This tells the Unix shell
to run this command and pretend that the results were typed on the command
line.  So what happens is that the grep command is run and produces a list of
files, these files are put on the Vim command line.  This results in Vim
editing the file list that is the output of grep.  You can then use commands
like ":next" and ":first" to browse through the files.</div>
<div class="old-help-para"><a name="_finding-each-line"></a><h3 class="help-heading">FINDING EACH LINE</h3></div>
<div class="old-help-para">The above command only finds the files in which the word is found.  You still
have to find the word within the files.
   Vim has a built-in command that you can use to search a set of files for a
given string.  If you want to find all occurrences of "error_string" in all C
program files, for example, enter the following command:<pre>:grep error_string *.c</pre>
This causes Vim to search for the string "error_string" in all the specified
files (.c).  The editor will now open the first file where a match is found
and position the cursor on the first matching line.  To go to the next
matching line (no matter in what file it is), use the ":cnext" command.  To go
to the previous match, use the ":cprev" command.  Use ":clist" to see all the
matches and where they are.
   The ":grep" command uses the external commands grep (on Unix) or findstr
(on Windows).  You can change this by setting the option <a href="options.html#'grepprg'">'grepprg'</a>.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="usr_20.html#usr_20.txt">usr_20.txt</a>  Typing command-line commands quickly</div>
<div class="old-help-para">Copyright: see <a href="usr_01.html#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  