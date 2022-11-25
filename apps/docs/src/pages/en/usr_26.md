---
title:  Usr_26
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_26.txt"></a><a name="26.1"></a><h1> Usr_26</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_26.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">				  Repeating</div>
<div class="old-help-para">An editing task is hardly ever unstructured.  A change often needs to be made
several times.  In this chapter a number of useful ways to repeat a change
will be explained.</div>
<div class="old-help-para"><a href="usr_26.html#26.1">26.1</a>  	Repeating with Visual mode
<a href="usr_26.html#26.2">26.2</a>  	Add and subtract
<a href="usr_26.html#26.3">26.3</a>  	Making a change in many files
<a href="usr_26.html#26.4">26.4</a>  	Using Vim from a shell script</div>
<div class="old-help-para">     Next chapter: <a href="usr_27.html#usr_27.txt">usr_27.txt</a>  Search commands and patterns
 Previous chapter: <a href="usr_25.html#usr_25.txt">usr_25.txt</a>  Editing formatted text
Table of contents: <a href="usr_toc.html#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Repeating with Visual mode</h2></div>
<div class="old-help-para">Visual mode is very handy for making a change in any sequence of lines.  You
can see the highlighted text, thus you can check if the correct lines are
changed.  But making the selection takes some typing.  The "gv" command
selects the same area again.  This allows you to do another operation on the
same text.
   Suppose you have some lines where you want to change "2001" to "2002" and
"2000" to "2001":</div>
<div class="old-help-para"><div class="help-column_heading">	The financial results for 2001 are better</div><div class="help-column_heading">	than for 2000.  The income increased by 50%,</div><div class="help-column_heading">	even though 2001 had more rain than 2000.</div><div class="help-column_heading">			2000		2001</div><div class="help-column_heading">	income		45,403		66,234</div></div>
<div class="old-help-para">First change "2001" to "2002".  Select the lines in Visual mode, and use:<pre>:s/2001/2002/g</pre>
Now use "gv" to reselect the same text.  It doesn't matter where the cursor
is.  Then use ":s/2000/2001/g" to make the second change.
   Obviously, you can repeat these changes several times.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="26.2"></a><span class="help-tag">26.2</span>  	Add and subtract</span></h2></div>
<div class="old-help-para">When repeating the change of one number into another, you often have a fixed
offset.  In the example above, one was added to each year.  Instead of typing
a substitute command for each year that appears, the <code>CTRL-A</code> command can be
used.
   Using the same text as above, search for a year:<pre>/19[0-9][0-9]\|20[0-9][0-9]</pre>
Now press <code>CTRL-A</code>.  The year will be increased by one:</div>
<div class="old-help-para"><div class="help-column_heading">	The financial results for 2002 are better</div><div class="help-column_heading">	than for 2000.  The income increased by 50%,</div><div class="help-column_heading">	even though 2001 had more rain than 2000.</div><div class="help-column_heading">			2000		2001</div><div class="help-column_heading">	income		45,403		66,234</div></div>
<div class="old-help-para">Use "n" to find the next year, and press "." to repeat the <code>CTRL-A</code> ("." is a
bit quicker to type).  Repeat "n" and "." for all years that appear.</div>
<div class="old-help-para">Adding more than one can be done by prepending the number to <code>CTRL-A</code>.  Suppose
you have this list:</div>
<div class="old-help-para"><div class="help-column_heading">	1.  item four</div><div class="help-column_heading">	2.  item five</div><div class="help-column_heading">	3.  item six</div></div>
<div class="old-help-para">Move the cursor to "1." and type:<pre>3 CTRL-A</pre>
The "1." will change to "4.".  Again, you can use "." to repeat this on the
other numbers.</div>
<div class="old-help-para">The <code>CTRL-X</code> command does subtraction in a similar way.</div>
<div class="old-help-para">The behavior of <code>CTRL-A</code> and <code>CTRL-X</code> depends on the value of <a href="options.html#'nrformats'">'nrformats'</a>. For
example, if you use:<pre>:set nrformats+=octal</pre>
pressing <code>CTRL-A</code> over "007" will increment to "010", because "007" will be
identified as an octal number.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="26.3"></a><span class="help-tag">26.3</span>  	Making a change in many files</span></h2></div>
<div class="old-help-para">Suppose you have a variable called "x_cnt" and you want to change it to
"x_counter".  This variable is used in several of your C files.  You need to
change it in all files.  This is how you do it.
   Put all the relevant files in the argument list:<pre>:args *.c</pre></div>
<div class="old-help-para">This finds all C files and edits the first one.  Now you can perform a
substitution command on all these files:<pre>:argdo %s/\&lt;x_cnt\&gt;/x_counter/ge | update</pre>
The ":argdo" command takes an argument that is another command.  That command
will be executed on all files in the argument list.
   The "%s" substitute command that follows works on all lines.  It finds the
word "x_cnt" with "\&lt;x_cnt\&gt;".  The "\&lt;" and "\&gt;" are used to match the whole
word only, and not "px_cnt" or "x_cnt2".
   The flags for the substitute command include "g" to replace all occurrences
of "x_cnt" in the same line.  The "e" flag is used to avoid an error message
when "x_cnt" does not appear in the file.  Otherwise ":argdo" would abort on
the first file where "x_cnt" was not found.
   The "|" separates two commands.  The following "update" command writes the
file only if it was changed.  If no "x_cnt" was changed to "x_counter" nothing
happens.</div>
<div class="old-help-para">There is also the ":windo" command, which executes its argument in all
windows.  And ":bufdo" executes its argument on all buffers.  Be careful with
this, because you might have more files in the buffer list than you think.
Check this with the ":buffers" command (or ":ls").</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="26.4"></a><span class="help-tag">26.4</span>  	Using Vim from a shell script</span></h2></div>
<div class="old-help-para">Suppose you have a lot of files in which you need to change the string
"-person-" to "Jones" and then print it.  How do you do that?  One way is to
do a lot of typing.  The other is to write a shell script to do the work.
   The Vim editor does a superb job as a screen-oriented editor when using
Normal mode commands.  For batch processing, however, Normal mode commands do
not result in clear, commented command files; so here you will use Ex mode
instead.  This mode gives you a nice command-line interface that makes it easy
to put into a batch file.  ("Ex command" is just another name for a
command-line (:) command.)
   The Ex mode commands you need are as follows:<pre>%s/-person-/Jones/g
write tempfile
quit</pre>
You put these commands in the file "change.vim".  Now to run the editor in
batch mode, use this shell script:<pre>for file in *.txt; do
  vim -e -s $file &lt; change.vim
  lpr -r tempfile
done</pre>
The for-done loop is a shell construct to repeat the two lines in between,
while the $file variable is set to a different file name each time.
   The second line runs the Vim editor in Ex mode (-e argument) on the file
$file and reads commands from the file "change.vim".  The -s argument tells
Vim to operate in silent mode.  In other words, do not keep outputting the
:prompt, or any other prompt for that matter.
   The "lpr -r tempfile" command prints the resulting "tempfile" and deletes
it (that's what the -r argument does).</div>
<div class="old-help-para"><a name="_reading-from-stdin"></a><h3 class="help-heading">READING FROM STDIN</h3></div>
<div class="old-help-para">Vim can read text on standard input.  Since the normal way is to read commands
there, you must tell Vim to read text instead.  This is done by passing the
"-" argument in place of a file.  Example:<pre>ls | vim -</pre>
This allows you to edit the output of the "ls" command, without first saving
the text in a file.
   If you use the standard input to read text from, you can use the "-S"
argument to read a script:<pre>producer | vim -S change.vim -</pre>
<a name="_normal-mode-scripts"></a><h3 class="help-heading">NORMAL MODE SCRIPTS</h3></div>
<div class="old-help-para">If you really want to use Normal mode commands in a script, you can use it
like this:<pre>vim -s script file.txt ...</pre></div>
<div class="old-help-para">	Note:
	"-s" has a different meaning when it is used without "-e".  Here it
	means to source the "script" as Normal mode commands.  When used with
	"-e" it means to be silent, and doesn't use the next argument as a
	file name.</div>
<div class="old-help-para">The commands in "script" are executed like you typed them.  Don't forget that
a line break is interpreted as pressing <code>&lt;Enter&gt;</code>.  In Normal mode that moves
the cursor to the next line.
   To create the script you can edit the script file and type the commands.
You need to imagine what the result would be, which can be a bit difficult.
Another way is to record the commands while you perform them manually.  This
is how you do that:<pre>vim -w script file.txt ...</pre>
All typed keys will be written to "script".  If you make a small mistake you
can just continue and remember to edit the script later.
   The "-w" argument appends to an existing script.  That is good when you
want to record the script bit by bit.  If you want to start from scratch and
start all over, use the "-W" argument.  It overwrites any existing file.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="usr_27.html#usr_27.txt">usr_27.txt</a>  Search commands and patterns</div>
<div class="old-help-para">Copyright: see <a href="usr_01.html#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  