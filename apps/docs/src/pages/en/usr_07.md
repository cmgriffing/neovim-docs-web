---
title:  Usr_07
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_07.txt"></a><a name="07.1"></a><h1> Usr_07</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_07.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			  Editing more than one file</div>
<div class="old-help-para">No matter how many files you have, you can edit them without leaving Vim.
Define a list of files to work on and jump from one to the other.  Copy text
from one file and put it in another one.</div>
<div class="old-help-para"><a href="usr_07.html#07.1">07.1</a>  	Edit another file
<a href="usr_07.html#07.2">07.2</a>  	A list of files
<a href="usr_07.html#07.3">07.3</a>  	Jumping from file to file
<a href="usr_07.html#07.4">07.4</a>  	Backup files
<a href="usr_07.html#07.5">07.5</a>  	Copy text between files
<a href="usr_07.html#07.6">07.6</a>  	Viewing a file
<a href="usr_07.html#07.7">07.7</a>  	Changing the file name</div>
<div class="old-help-para">     Next chapter: <a href="usr_08.html#usr_08.txt">usr_08.txt</a>  Splitting windows
 Previous chapter: <a href="usr_06.html#usr_06.txt">usr_06.txt</a>  Using syntax highlighting
Table of contents: <a href="usr_toc.html#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Edit another file</h2></div>
<div class="old-help-para">So far you had to start Vim for every file you wanted to edit.  There is a
simpler way.  To start editing another file, use this command:<pre>:edit foo.txt</pre>
You can use any file name instead of "foo.txt".  Vim will close the current
file and open the new one.  If the current file has unsaved changes, however,
Vim displays an error message and does not open the new file:</div>
<div class="old-help-para"><div class="help-column_heading">	E37: No write since last change (use ! to override)</div></div>
<div class="old-help-para">	Note:
	Vim puts an error ID at the start of each error message.  If you do
	not understand the message or what caused it, look in the help system
	for this ID.  In this case:<pre>:help E37</pre>
At this point, you have a number of alternatives.  You can write the file
using this command:<pre>:write</pre>
Or you can force Vim to discard your changes and edit the new file, using the
force (!) character:<pre>:edit! foo.txt</pre>
If you want to edit another file, but not write the changes in the current
file yet, you can make it hidden:<pre>:hide edit foo.txt</pre>
The text with changes is still there, but you can't see it.  This is further
explained in section <a href="usr_22.html#22.4">22.4</a>: The buffer list.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="07.2"></a><span class="help-tag">07.2</span>  	A list of files</span></h2></div>
<div class="old-help-para">You can start Vim to edit a sequence of files.  For example:<pre>vim one.c two.c three.c</pre>
This command starts Vim and tells it that you will be editing three files.
Vim displays just the first file.  After you have done your thing in this
file, to edit the next file you use this command:<pre>:next</pre>
If you have unsaved changes in the current file, you will get an error
message and the ":next" will not work.  This is the same problem as with
":edit" mentioned in the previous section.  To abandon the changes:<pre>:next!</pre>
But mostly you want to save the changes and move on to the next file.  There
is a special command for this:<pre>:wnext</pre>
This does the same as using two separate commands:<pre>:write
:next</pre>
WHERE AM I?</div>
<div class="old-help-para">To see which file in the argument list you are editing, look in the window
title.  It should show something like "(2 of 3)".  This means you are editing
the second file out of three files.
   If you want to see the list of files, use this command:<pre>:args</pre>
This is short for "arguments".  The output might look like this:</div>
<div class="old-help-para"><div class="help-column_heading">	one.c [two.c] three.c</div></div>
<div class="old-help-para">These are the files you started Vim with.  The one you are currently editing,
"two.c", is in square brackets.</div>
<div class="old-help-para"><a name="_moving-to-other-arguments"></a><h3 class="help-heading">MOVING TO OTHER ARGUMENTS</h3></div>
<div class="old-help-para">To go back one file:<pre>:previous</pre>
This is just like the ":next" command, except that it moves in the other
direction.  Again, there is a shortcut command for when you want to write the
file first:<pre>:wprevious</pre>
To move to the very last file in the list:<pre>:last</pre>
And to move back to the first one again:<pre>:first</pre>
There is no ":wlast" or ":wfirst" command though!</div>
<div class="old-help-para">You can use a count for ":next" and ":previous".  To skip two files forward:<pre>:2next</pre>
<a name="_automatic-writing"></a><h3 class="help-heading">AUTOMATIC WRITING</h3></div>
<div class="old-help-para">When moving around the files and making changes, you have to remember to use
":write".  Otherwise you will get an error message.  If you are sure you
always want to write modified files, you can tell Vim to automatically write
them:<pre>:set autowrite</pre>
When you are editing a file which you may not want to write, switch it off
again:<pre>:set noautowrite</pre>
<a name="_editing-another-list-of-files"></a><h3 class="help-heading">EDITING ANOTHER LIST OF FILES</h3></div>
<div class="old-help-para">You can redefine the list of files without the need to exit Vim and start it
again.  Use this command to edit three other files:<pre>:args five.c six.c seven.h</pre>
Or use a wildcard, like it's used in the shell:<pre>:args *.txt</pre>
Vim will take you to the first file in the list.  Again, if the current file
has changes, you can either write the file first, or use ":args!" (with !
added) to abandon the changes.</div>
<div class="old-help-para">DID YOU EDIT THE LAST FILE?
							<a name="arglist-quit"></a><code class="help-tag-right">arglist-quit</code>
When you use a list of files, Vim assumes you want to edit them all.  To
protect you from exiting too early, you will get this error when you didn't
edit the last file in the list yet:</div>
<div class="old-help-para"><div class="help-column_heading">	E173: 46 more files to edit</div></div>
<div class="old-help-para">If you really want to exit, just do it again.  Then it will work (but not when
you did other commands in between).</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="07.3"></a><span class="help-tag">07.3</span>  	Jumping from file to file</span></h2></div>
<div class="old-help-para">To quickly jump between two files, press <code>CTRL-^</code> (on English-US keyboards the ^
is above the 6 key).  Example:<pre>:args one.c two.c three.c</pre>
You are now in one.c.<pre>:next</pre>
Now you are in two.c.  Now use <code>CTRL-^</code> to go back to one.c.  Another <code>CTRL-^</code> and
you are back in two.c.  Another <code>CTRL-^</code> and you are in one.c again.  If you now
do:<pre>:next</pre>
You are in three.c.  Notice that the <code>CTRL-^</code> command does not change the idea
of where you are in the list of files.  Only commands like ":next" and
":previous" do that.</div>
<div class="old-help-para">The file you were previously editing is called the "alternate" file.  When you
just started Vim <code>CTRL-^</code> will not work, since there isn't a previous file.</div>
<div class="old-help-para"><a name="_predefined-marks"></a><h3 class="help-heading">PREDEFINED MARKS</h3></div>
<div class="old-help-para">After jumping to another file, you can use two predefined marks which are very
useful:<pre>`"</pre>
This takes you to the position where the cursor was when you left the file.
Another mark that is remembered is the position where you made the last
change:<pre>`.</pre>
Suppose you are editing the file "one.txt".  Somewhere halfway through the
file you use "x" to delete a character.  Then you go to the last line with "G"
and write the file with ":w".  You edit several other files, and then use
":edit one.txt" to come back to "one.txt".  If you now use" Vim jumps to the
last line of the file.  Using. takes you to the position where you deleted
the character.  Even when you move around in the file <code>" and</code>. will take you
to the remembered position.  At least until you make another change or leave
the file.</div>
<div class="old-help-para"><a name="_file-marks"></a><h3 class="help-heading">FILE MARKS</h3></div>
<div class="old-help-para">In section <a href="usr_03.html#03.10">03.10</a> was explained how you can place a mark in a file with "mx"
and jump to that position with "`x".  That works within one file.  If you edit
another file and place marks there, these are specific for that file.  Thus
each file has its own set of marks, they are local to the file.
   So far we were using marks with a lowercase letter.  There are also marks
with an uppercase letter.  These are global, they can be used from any file.
For example suppose that we are editing the file "foo.txt".  Go to halfway
down the file ("50%") and place the F mark there (F for foo):<pre>50%mF</pre>
Now edit the file "bar.txt" and place the B mark (B for bar) at its last line:
<pre>GmB</pre>
Now you can use the "'F" command to jump back to halfway of foo.txt.  Or edit
yet another file, type "'B" and you jump to the end of bar.txt.</div>
<div class="old-help-para">The file marks are remembered until they are placed somewhere else.  Thus you
can place the mark, do hours of editing and still be able to jump back to that
mark.
   It's often useful to think of a simple connection between the mark letter
and where it is placed.  For example, use the H mark in a header file, M in
a Makefile and C in a C code file.</div>
<div class="old-help-para">To see where a specific mark is, give an argument to the ":marks" command:<pre>:marks M</pre>
You can also give several arguments:<pre>:marks MCP</pre>
Don't forget that you can use <code>CTRL-O</code> and <code>CTRL-I</code> to jump to older and newer
positions without placing marks there.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="07.4"></a><span class="help-tag">07.4</span>  	Backup files</span></h2></div>
<div class="old-help-para">Usually Vim does not produce a backup file.  If you want to have one, all you
need to do is execute the following command:<pre>:set backup</pre>
The name of the backup file is the original file with a  ~  added to the end.
If your file is named data.txt, for example, the backup file name is
data.txt~.
   If you do not like the fact that the backup files end with ~, you can
change the extension:<pre>:set backupext=.bak</pre>
This will use data.txt.bak instead of data.txt~.
   Another option that matters here is <a href="options.html#'backupdir'">'backupdir'</a>.  It specifies where the
backup file is written.  The default, to write the backup in the same
directory as the original file, will mostly be the right thing.</div>
<div class="old-help-para">	Note:
	When the <a href="options.html#'backup'">'backup'</a> option isn't set but the <a href="options.html#'writebackup'">'writebackup'</a> is, Vim will
	still create a backup file.  However, it is deleted as soon as writing
	the file was completed successfully.  This functions as a safety
	against losing your original file when writing fails in some way (disk
	full is the most common cause; being hit by lightning might be
	another, although less common).</div>
<div class="old-help-para"><a name="_keeping-the-original-file"></a><h3 class="help-heading">KEEPING THE ORIGINAL FILE</h3></div>
<div class="old-help-para">If you are editing source files, you might want to keep the file before you
make any changes.  But the backup file will be overwritten each time you write
the file.  Thus it only contains the previous version, not the first one.
   To make Vim keep the original file, set the <a href="options.html#'patchmode'">'patchmode'</a> option.  This
specifies the extension used for the first backup of a changed file.  Usually
you would do this:<pre>:set patchmode=.orig</pre>
When you now edit the file data.txt for the first time, make changes and write
the file, Vim will keep a copy of the unchanged file under the name
"data.txt.orig".
   If you make further changes to the file, Vim will notice that
"data.txt.orig" already exists and leave it alone.  Further backup files will
then be called "data.txt~" (or whatever you specified with <a href="options.html#'backupext'">'backupext'</a>).
   If you leave <a href="options.html#'patchmode'">'patchmode'</a> empty (that is the default), the original file
will not be kept.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="07.5"></a><span class="help-tag">07.5</span>  	Copy text between files</span></h2></div>
<div class="old-help-para">This explains how to copy text from one file to another.  Let's start with a
simple example.  Edit the file that contains the text you want to copy.  Move
the cursor to the start of the text and press "v".  This starts Visual mode.
Now move the cursor to the end of the text and press "y".  This yanks (copies)
the selected text.
   To copy the above paragraph, you would do:<pre>:edit thisfile
/This
vjjjj$y</pre>
Now edit the file you want to put the text in.  Move the cursor to the
character where you want the text to appear after.  Use "p" to put the text
there.<pre>:edit otherfile
/There
p</pre>
Of course you can use many other commands to yank the text.  For example, to
select whole lines start Visual mode with "V".  Or use <code>CTRL-V</code> to select a
rectangular block.  Or use "yy" to yank a single line, "yaw" to yank-a-word,
etc.
   The "p" command puts the text after the cursor.  Use "P" to put the text
before the cursor.  Notice that Vim remembers if you yanked a whole line or a
block, and puts it back that way.</div>
<div class="old-help-para"><a name="_using-registers"></a><h3 class="help-heading">USING REGISTERS</h3></div>
<div class="old-help-para">When you want to copy several pieces of text from one file to another, having
to switch between the files and writing the target file takes a lot of time.
To avoid this, copy each piece of text to its own register.
   A register is a place where Vim stores text.  Here we will use the
registers named a to z (later you will find out there are others).  Let's copy
a sentence to the f register (f for First):<pre>"fyas</pre>
The "yas" command yanks a sentence like before.  It's the "f that tells Vim
the text should be placed in the f register.  This must come just before the
yank command.
   Now yank three whole lines to the l register (l for line):<pre>"l3yy</pre>
The count could be before the "l just as well.  To yank a block of text to the
b (for block) register:<pre>CTRL-Vjjww"by</pre>
Notice that the register specification "b is just before the "y" command.
This is required.  If you would have put it before the "w" command, it would
not have worked.
   Now you have three pieces of text in the f, l and b registers.  Edit
another file, move around and place the text where you want it:<pre>"fp</pre>
Again, the register specification "f comes before the "p" command.
   You can put the registers in any order.  And the text stays in the register
until you yank something else into it.  Thus you can put it as many times as
you like.</div>
<div class="old-help-para">When you delete text, you can also specify a register.  Use this to move
several pieces of text around.  For example, to delete-a-word and write it in
the w register:<pre>"wdaw</pre>
Again, the register specification comes before the delete command "d".</div>
<div class="old-help-para">APPENDING TO A FILE</div>
<div class="old-help-para">When collecting lines of text into one file, you can use this command:<pre>:write &gt;&gt; logfile</pre>
This will write the text of the current file to the end of "logfile".  Thus it
is appended.  This avoids that you have to copy the lines, edit the log file
and put them there.  Thus you save two steps.  But you can only append to the
end of a file.
   To append only a few lines, select them in Visual mode before typing
":write".  In chapter 10 you will learn other ways to select a range of lines.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="07.6"></a><span class="help-tag">07.6</span>  	Viewing a file</span></h2></div>
<div class="old-help-para">Sometimes you only want to see what a file contains, without the intention to
ever write it back.  There is the risk that you type ":w" without thinking and
overwrite the original file anyway.  To avoid this, edit the file read-only.
   To start Vim in readonly mode, use this command:<pre>vim -R file</pre>
On Unix this command should do the same thing:<pre>view file</pre>
You are now editing "file" in read-only mode.  When you try using ":w" you
will get an error message and the file won't be written.
   When you try to make a change to the file Vim will give you a warning:</div>
<div class="old-help-para"><div class="help-column_heading">	W10: Warning: Changing a readonly file</div></div>
<div class="old-help-para">The change will be done though.  This allows for formatting the file, for
example, to be able to read it easily.
   If you make changes to a file and forgot that it was read-only, you can
still write it.  Add the ! to the write command to force writing.</div>
<div class="old-help-para">If you really want to forbid making changes in a file, do this:<pre>vim -M file</pre>
Now every attempt to change the text will fail.  The help files are like this,
for example.  If you try to make a change you get this error message:</div>
<div class="old-help-para"><div class="help-column_heading">	E21: Cannot make changes, <a href="options.html#'modifiable'">'modifiable'</a> is off</div></div>
<div class="old-help-para">You could use the -M argument to setup Vim to work in a viewer mode.  This is
only voluntary though, since these commands will remove the protection:<pre>:set modifiable
:set write</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="07.7"></a><span class="help-tag">07.7</span>  	Changing the file name</span></h2></div>
<div class="old-help-para">A clever way to start editing a new file is by using an existing file that
contains most of what you need.  For example, you start writing a new program
to move a file.  You know that you already have a program that copies a file,
thus you start with:<pre>:edit copy.c</pre>
You can delete the stuff you don't need.  Now you need to save the file under
a new name.  The ":saveas" command can be used for this:<pre>:saveas move.c</pre>
Vim will write the file under the given name, and edit that file.  Thus the
next time you do ":write", it will write "move.c".  "copy.c" remains
unmodified.
   When you want to change the name of the file you are editing, but don't
want to write the file, you can use this command:<pre>:file move.c</pre>
Vim will mark the file as "not edited".  This means that Vim knows this is not
the file you started editing.  When you try to write the file, you might get
this message:</div>
<div class="old-help-para"><div class="help-column_heading">	E13: File exists (use ! to override)</div></div>
<div class="old-help-para">This protects you from accidentally overwriting another file.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="usr_08.html#usr_08.txt">usr_08.txt</a>  Splitting windows</div>
<div class="old-help-para">Copyright: see <a href="usr_01.html#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  