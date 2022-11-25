---
title:  Usr_02
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_02.txt"></a><a name="02.1"></a><h1> Usr_02</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_02.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			    The first steps in Vim</div>
<div class="old-help-para">This chapter provides just enough information to edit a file with Vim.  Not
well or fast, but you can edit.  Take some time to practice with these
commands, they form the base for what follows.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_02#02.1">02.1</a>  	Running Vim for the First Time
<a href="/neovim-docs-web/en/usr_02#02.2">02.2</a>  	Inserting text
<a href="/neovim-docs-web/en/usr_02#02.3">02.3</a>  	Moving around
<a href="/neovim-docs-web/en/usr_02#02.4">02.4</a>  	Deleting characters
<a href="/neovim-docs-web/en/usr_02#02.5">02.5</a>  	Undo and Redo
<a href="/neovim-docs-web/en/usr_02#02.6">02.6</a>  	Other editing commands
<a href="/neovim-docs-web/en/usr_02#02.7">02.7</a>  	Getting out
<a href="/neovim-docs-web/en/usr_02#02.8">02.8</a>  	Finding help</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_03#usr_03.txt">usr_03.txt</a>  Moving around
 Previous chapter: <a href="/neovim-docs-web/en/usr_01#usr_01.txt">usr_01.txt</a>  About the manuals
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Running Vim for the First Time</h2></div>
<div class="old-help-para">To start Vim, enter this command:<pre>gvim file.txt</pre>
On Unix you can type this at any command prompt.  If you are running Microsoft
Windows, open a Command Prompt and enter the command.  In either case, Vim
starts editing a file called file.txt.  Because this is a new file, you get a
blank window. This is what your screen will look like:</div>
<div class="old-help-para">	+---------------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_02.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_02.html%0D%0DContext%3A%0D%0D%60%60%60%0Dblank%20window.%20This%20is%20what%20your%20screen%20will%20look%20like%3A%0A%0A%09%2B---------------------------------------%2B%0A%09%7C%23%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0D%60%60%60">#</a>					|
	|~					|
	|~					|
	|~					|
	|~					|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_02.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_02.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C%22file.txt%22%20%5BNew%20file%5D%09%09%09%7C%0A%09%2B---------------------------------------%2B%0A%09%09('%23'%20is%20the%20cursor%20position.)%0A%0D%60%60%60">"file.txt"</a> [New file]			|
	+---------------------------------------+
		('#' is the cursor position.)</div>
<div class="old-help-para">The tilde (~) lines indicate lines not in the file.  In other words, when Vim
runs out of file to display, it displays tilde lines.  At the bottom of the
screen, a message line indicates the file is named file.txt and shows that you
are creating a new file.  The message information is temporary and other
information overwrites it.</div>
<div class="old-help-para"><a name="_the-vim-command"></a><h3 class="help-heading">THE VIM COMMAND</h3></div>
<div class="old-help-para">The gvim command causes the editor to create a new window for editing.  If you
use this command:<pre>vim file.txt</pre>
the editing occurs inside your command window.  In other words, if you are
running inside an xterm, the editor uses your xterm window.  If you are using
the command prompt under Microsoft Windows, the editing occurs inside this
window.  The text in the window will look the same for both versions, but with
gvim you have extra features, like a menu bar.  More about that later.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="02.2"></a><span class="help-tag">02.2</span>  	Inserting text</span></h2></div>
<div class="old-help-para">The Vim editor is a modal editor.  That means that the editor behaves
differently, depending on which mode you are in.  The two basic modes are
called Normal mode and Insert mode.  In Normal mode the characters you type
are commands.  In Insert mode the characters are inserted as text.
   Since you have just started Vim it will be in Normal mode.  To start Insert
mode you type the "i" command (i for Insert).  Then you can enter
the text.  It will be inserted into the file.  Do not worry if you make
mistakes; you can correct them later.  To enter the following programmer's
limerick, this is what you type:<pre>iA very intelligent turtle
Found programming Unix a hurdle</pre>
After typing "turtle" you press the <code>&lt;Enter&gt;</code> key to start a new line.  Finally
you press the <code>&lt;Esc&gt;</code> key to stop Insert mode and go back to Normal mode.  You
now have two lines of text in your Vim window:</div>
<div class="old-help-para">	+---------------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_02.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_02.html%0D%0DContext%3A%0D%0D%60%60%60%0Dnow%20have%20two%20lines%20of%20text%20in%20your%20Vim%20window%3A%0A%0A%09%2B---------------------------------------%2B%0A%09%7CA%20very%20intelligent%20turtle%09%09%7C%0A%09%7CFound%20programming%20Unix%20a%20hurdle%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0D%60%60%60">A</a> very intelligent turtle		|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_02.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_02.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B---------------------------------------%2B%0A%09%7CA%20very%20intelligent%20turtle%09%09%7C%0A%09%7CFound%20programming%20Unix%20a%20hurdle%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C%09%09%09%09%09%7C%0D%60%60%60">Found</a> programming Unix a hurdle	|
	|~					|
	|~					|
	|					|
	+---------------------------------------+</div>
<div class="old-help-para">WHAT IS THE MODE?</div>
<div class="old-help-para">To be able to see what mode you are in, type this command:<pre>:set showmode</pre>
You will notice that when typing the colon Vim moves the cursor to the last
line of the window.  That's where you type colon commands (commands that start
with a colon).  Finish this command by pressing the <code>&lt;Enter&gt;</code> key (all commands
that start with a colon are finished this way).
   Now, if you type the "i" command Vim will display --INSERT-- at the bottom
of the window.  This indicates you are in Insert mode.</div>
<div class="old-help-para">	+---------------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_02.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_02.html%0D%0DContext%3A%0D%0D%60%60%60%0Dof%20the%20window.%20%20This%20indicates%20you%20are%20in%20Insert%20mode.%0A%0A%09%2B---------------------------------------%2B%0A%09%7CA%20very%20intelligent%20turtle%09%09%7C%0A%09%7CFound%20programming%20Unix%20a%20hurdle%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0D%60%60%60">A</a> very intelligent turtle		|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_02.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_02.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B---------------------------------------%2B%0A%09%7CA%20very%20intelligent%20turtle%09%09%7C%0A%09%7CFound%20programming%20Unix%20a%20hurdle%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C--%20INSERT%20--%09%09%09%09%7C%0D%60%60%60">Found</a> programming Unix a hurdle	|
	|~					|
	|~					|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_02.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_02.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7CFound%20programming%20Unix%20a%20hurdle%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C--%20INSERT%20--%09%09%09%09%7C%0A%09%2B---------------------------------------%2B%0A%0AIf%20you%20press%20%3CEsc%3E%20to%20go%20back%20to%20Normal%20mode%20the%20last%20line%20will%20be%20made%20blank.%0D%60%60%60">--</a> INSERT --				|
	+---------------------------------------+</div>
<div class="old-help-para">If you press <code>&lt;Esc&gt;</code> to go back to Normal mode the last line will be made blank.</div>
<div class="old-help-para"><a name="_getting-out-of-trouble"></a><h3 class="help-heading">GETTING OUT OF TROUBLE</h3></div>
<div class="old-help-para">One of the problems for Vim novices is mode confusion, which is caused by
forgetting which mode you are in or by accidentally typing a command that
switches modes.  To get back to Normal mode, no matter what mode you are in,
press the <code>&lt;Esc&gt;</code> key.  Sometimes you have to press it twice.  If Vim beeps back
at you, you already are in Normal mode.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="02.3"></a><span class="help-tag">02.3</span>  	Moving around</span></h2></div>
<div class="old-help-para">After you return to Normal mode, you can move around by using these keys:</div>
<div class="old-help-para">	h   left						<a name="hjkl"></a><code class="help-tag-right">hjkl</code>
	j   down
	k   up
	l   right</div>
<div class="old-help-para">At first, it may appear that these commands were chosen at random.  After all,
who ever heard of using l for right?  But actually, there is a very good
reason for these choices: Moving the cursor is the most common thing you do in
an editor, and these keys are on the home row of your right hand.  In other
words, these commands are placed where you can type them the fastest
(especially when you type with ten fingers).</div>
<div class="old-help-para">	Note:
	You can also move the cursor by using the arrow keys.  If you do,
	however, you greatly slow down your editing because to press the arrow
	keys, you must move your hand from the text keys to the arrow keys.
	Considering that you might be doing it hundreds of times an hour, this
	can take a significant amount of time.
	   Also, there are keyboards which do not have arrow keys, or which
	locate them in unusual places; therefore, knowing the use of the hjkl
	keys helps in those situations.</div>
<div class="old-help-para">One way to remember these commands is that h is on the left, l is on the
right and j points down.  In a picture:<pre>    k
h     l
  j</pre>
The best way to learn these commands is by using them.  Use the "i" command to
insert some more lines of text.  Then use the hjkl keys to move around and
insert a word somewhere.  Don't forget to press <code>&lt;Esc&gt;</code> to go back to Normal
mode.  <a href="/neovim-docs-web/en/pi_tutor#%3ATutor">:Tutor</a> is also a nice way to learn by doing.</div>
<div class="old-help-para">For Japanese users, Hiroshi Iwatani suggested using this:</div>
<div class="old-help-para">			Komsomolsk
			    ^
			    |
	   Huan Ho	&lt;--- ---&gt;  Los Angeles
	(Yellow river)	    |
			    v
			  Java (the island, not the programming language)</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="02.4"></a><span class="help-tag">02.4</span>  	Deleting characters</span></h2></div>
<div class="old-help-para">To delete a character, move the cursor over it and type "x".  (This is a
throwback to the old days of the typewriter, when you deleted things by typing
xxxx over them.)  Move the cursor to the beginning of the first line, for
example, and type xxxxxxx (seven x's) to delete "A very ".  The result should
look like this:</div>
<div class="old-help-para">	+---------------------------------------+
intelligent turtle			|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_02.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_02.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B---------------------------------------%2B%0A%09%7Cintelligent%20turtle%09%09%09%7C%0A%09%7CFound%20programming%20Unix%20a%20hurdle%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C%09%09%09%09%09%7C%0D%60%60%60">Found</a> programming Unix a hurdle	|
	|~					|
	|~					|
	|					|
	+---------------------------------------+</div>
<div class="old-help-para">Now you can insert new text, for example by typing:<pre>iA young &lt;Esc&gt;</pre>
This begins an insert (the i), inserts the words "A young", and then exits
insert mode (the final <code>&lt;Esc&gt;</code>).	The result:</div>
<div class="old-help-para">	+---------------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_02.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_02.html%0D%0DContext%3A%0D%0D%60%60%60%0Dinsert%20mode%20(the%20final%20%3CEsc%3E).%09The%20result%3A%0A%0A%09%2B---------------------------------------%2B%0A%09%7CA%20young%20intelligent%20turtle%09%09%7C%0A%09%7CFound%20programming%20Unix%20a%20hurdle%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0D%60%60%60">A</a> young intelligent turtle		|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_02.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_02.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B---------------------------------------%2B%0A%09%7CA%20young%20intelligent%20turtle%09%09%7C%0A%09%7CFound%20programming%20Unix%20a%20hurdle%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C%09%09%09%09%09%7C%0D%60%60%60">Found</a> programming Unix a hurdle	|
	|~					|
	|~					|
	|					|
	+---------------------------------------+</div>
<div class="old-help-para">DELETING A LINE</div>
<div class="old-help-para">To delete a whole line use the "dd" command.  The following line will
then move up to fill the gap:</div>
<div class="old-help-para">	+---------------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_02.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_02.html%0D%0DContext%3A%0D%0D%60%60%60%0Dthen%20move%20up%20to%20fill%20the%20gap%3A%0A%0A%09%2B---------------------------------------%2B%0A%09%7CFound%20programming%20Unix%20a%20hurdle%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0A%09%7C~%09%09%09%09%09%7C%0D%60%60%60">Found</a> programming Unix a hurdle	|
	|~					|
	|~					|
	|~					|
	|					|
	+---------------------------------------+</div>
<div class="old-help-para">DELETING A LINE BREAK</div>
<div class="old-help-para">In Vim you can join two lines together, which means that the line break
between them is deleted.  The "J" command does this.
   Take these two lines:</div>
<div class="old-help-para"><div class="help-column_heading">	A young intelligent</div><div class="help-column_heading">	turtle</div></div>
<div class="old-help-para">Move the cursor to the first line and press "J":</div>
<div class="old-help-para"><div class="help-column_heading">	A young intelligent turtle</div></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="02.5"></a><span class="help-tag">02.5</span>  	Undo and Redo</span></h2></div>
<div class="old-help-para">Suppose you delete too much.  Well, you can type it in again, but an easier
way exists.  The "u" command undoes the last edit.  Take a look at this in
action: After using "dd" to delete the first line, "u" brings it back.
   Another one: Move the cursor to the A in the first line:</div>
<div class="old-help-para"><div class="help-column_heading">	A young intelligent turtle</div></div>
<div class="old-help-para">Now type xxxxxxx to delete "A young".  The result is as follows:</div>
<div class="old-help-para"><div class="help-column_heading">	 intelligent turtle</div></div>
<div class="old-help-para">Type "u" to undo the last delete.  That delete removed the g, so the undo
restores the character.</div>
<div class="old-help-para"><div class="help-column_heading">	g intelligent turtle</div></div>
<div class="old-help-para">The next "u" command restores the next-to-last character deleted:</div>
<div class="old-help-para"><div class="help-column_heading">	ng intelligent turtle</div></div>
<div class="old-help-para">The next "u" command gives you the u, and so on:</div>
<div class="old-help-para"><div class="help-column_heading">	ung intelligent turtle</div><div class="help-column_heading">	oung intelligent turtle</div><div class="help-column_heading">	young intelligent turtle</div><div class="help-column_heading">	 young intelligent turtle</div><div class="help-column_heading">	A young intelligent turtle</div></div>
<div class="old-help-para"><a name="_redo"></a><h3 class="help-heading">REDO</h3></div>
<div class="old-help-para">If you undo too many times, you can press <code>CTRL-R</code> (redo) to reverse the
preceding command.  In other words, it undoes the undo.  To see this in
action, press <code>CTRL-R</code> twice.  The character A and the space after it disappear:</div>
<div class="old-help-para"><div class="help-column_heading">	young intelligent turtle</div></div>
<div class="old-help-para">There's a special version of the undo command, the "U" (undo line) command.
The undo line command undoes all the changes made on the last line that was
edited.  Typing this command twice cancels the preceding "U".</div>
<div class="old-help-para"><div class="help-column_heading">	A very intelligent turtle</div>	  xxxx				Delete very</div>
<div class="old-help-para"><div class="help-column_heading">	A intelligent turtle</div>		      xxxxxx		Delete turtle</div>
<div class="old-help-para"><div class="help-column_heading">	A intelligent</div>					Restore line with "U"
<div class="help-column_heading">	A very intelligent turtle</div>					Undo "U" with "u"
<div class="help-column_heading">	A intelligent</div></div>
<div class="old-help-para">The "U" command is a change by itself, which the "u" command undoes and <code>CTRL-R</code>
redoes.  This might be a bit confusing.  Don't worry, with "u" and <code>CTRL-R</code> you
can go to any of the situations you had.  More about that in section <a href="/neovim-docs-web/en/usr_32#32.2">32.2</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="02.6"></a><span class="help-tag">02.6</span>  	Other editing commands</span></h2></div>
<div class="old-help-para">Vim has a large number of commands to change the text.  See <a href="/neovim-docs-web/en/quickref#Q_in">Q_in</a> and below.
Here are a few often used ones.</div>
<div class="old-help-para"><a name="_appending"></a><h3 class="help-heading">APPENDING</h3></div>
<div class="old-help-para">The "i" command inserts a character before the character under the cursor.
That works fine; but what happens if you want to add stuff to the end of the
line?  For that you need to insert text after the cursor.  This is done with
the "a" (append) command.
   For example, to change the line</div>
<div class="old-help-para"><div class="help-column_heading">	and that's not saying much for the turtle.</div>to
<div class="help-column_heading">	and that's not saying much for the turtle!!!</div></div>
<div class="old-help-para">move the cursor over to the dot at the end of the line. Then type "x" to
delete the period.  The cursor is now positioned at the end of the line on the
e in turtle.  Now type<pre>a!!!&lt;Esc&gt;</pre>
to append three exclamation points after the e in turtle:</div>
<div class="old-help-para"><div class="help-column_heading">	and that's not saying much for the turtle!!!</div></div>
<div class="old-help-para">OPENING UP A NEW LINE</div>
<div class="old-help-para">The "o" command creates a new, empty line below the cursor and puts Vim in
Insert mode.  Then you can type the text for the new line.
   Suppose the cursor is somewhere in the first of these two lines:</div>
<div class="old-help-para"><div class="help-column_heading">	A very intelligent turtle</div><div class="help-column_heading">	Found programming Unix a hurdle</div></div>
<div class="old-help-para">If you now use the "o" command and type new text:<pre>oThat liked using Vim&lt;Esc&gt;</pre>
The result is:</div>
<div class="old-help-para"><div class="help-column_heading">	A very intelligent turtle</div><div class="help-column_heading">	That liked using Vim</div><div class="help-column_heading">	Found programming Unix a hurdle</div></div>
<div class="old-help-para">The "O" command (uppercase) opens a line above the cursor.</div>
<div class="old-help-para">USING A COUNT</div>
<div class="old-help-para">Suppose you want to move up nine lines.  You can type "kkkkkkkkk" or you can
enter the command "9k".  In fact, you can precede many commands with a number.
Earlier in this chapter, for instance, you added three exclamation points to
the end of a line by typing "a!!!&lt;Esc&gt;".  Another way to do this is to use the
command "3a!&lt;Esc&gt;".  The count of 3 tells the command that follows to triple
its effect.  Similarly, to delete three characters, use the command "3x".  The
count always comes before the command it applies to.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="02.7"></a><span class="help-tag">02.7</span>  	Getting out</span></h2></div>
<div class="old-help-para">To exit, use the "ZZ" command.  This command writes the file and exits.</div>
<div class="old-help-para">	Note:
	Unlike many other editors, Vim does not automatically make a backup
	file.  If you type "ZZ", your changes are committed and there's no
	turning back.  You can configure the Vim editor to produce backup
	files; see <a href="/neovim-docs-web/en/usr_07#07.4">07.4</a>.</div>
<div class="old-help-para"><a name="_discarding-changes"></a><h3 class="help-heading">DISCARDING CHANGES</h3></div>
<div class="old-help-para">Sometimes you will make a sequence of changes and suddenly realize you were
better off before you started.  Not to worry; Vim has a
quit-and-throw-things-away command.  It is:<pre>:q!</pre>
Don't forget to press <code>&lt;Enter&gt;</code> to finish the command.</div>
<div class="old-help-para">For those of you interested in the details, the three parts of this command
are the colon (:), which enters Command-line mode; the q command, which tells
the editor to quit; and the override command modifier (!).
   The override command modifier is needed because Vim is reluctant to throw
away changes.  If you were to just type ":q", Vim would display an error
message and refuse to exit:</div>
<div class="old-help-para"><div class="help-column_heading">	E37: No write since last change (use ! to override)</div></div>
<div class="old-help-para">By specifying the override, you are in effect telling Vim, "I know that what
I'm doing looks stupid, but I really want to do this."</div>
<div class="old-help-para">If you want to continue editing with Vim: The ":e!" command reloads the
original version of the file.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="02.8"></a><span class="help-tag">02.8</span>  	Finding help</span></h2></div>
<div class="old-help-para">Everything you always wanted to know can be found in the Vim help files.
Don't be afraid to ask!</div>
<div class="old-help-para">If you know what you are looking for, it is usually easier to search for it
using the help system, instead of using Google.  Because the subjects follow
a certain style guide.</div>
<div class="old-help-para">Also the help has the advantage of belonging to your particular Vim version.
You won't see help for commands added later.  These would not work for you.</div>
<div class="old-help-para">To get generic help use this command:<pre>:help</pre>
You could also use the first function key <code>&lt;F1&gt;</code>.  If your keyboard has a <code>&lt;Help&gt;</code>
key it might work as well.
   If you don't supply a subject, ":help" displays the general help window.
The creators of Vim did something very clever (or very lazy) with the help
system: They made the help window a normal editing window.  You can use all
the normal Vim commands to move through the help information.  Therefore h, j,
k, and l move left, down, up and right.
   To get out of the help window, use the same command you use to get out of
the editor: "ZZ".  This will only close the help window, not exit Vim.</div>
<div class="old-help-para">As you read the help text, you will notice some text enclosed in vertical bars
(for example, <a href="/neovim-docs-web/en/helphelp#help">help</a>).  This indicates a hyperlink.  If you position the
cursor anywhere between the bars and press <code>CTRL-]</code> (jump to tag), the help
system takes you to the indicated subject.  (For reasons not discussed here,
the Vim terminology for a hyperlink is tag.  So <code>CTRL-]</code> jumps to the location
of the tag given by the word under the cursor.)
   After a few jumps, you might want to go back.  <code>CTRL-T</code> (pop tag) takes you
back to the preceding position.  <code>CTRL-O</code> (jump to older position) also works
nicely here.
   At the top of the help screen, there is the notation <a name="help.txt"></a><code class="help-tag">help.txt</code>.  This name
between "*" characters is used by the help system to define a tag (hyperlink
destination).
   See <a href="/neovim-docs-web/en/usr_29#29.1">29.1</a> for details about using tags.</div>
<div class="old-help-para">To get help on a given subject, use the following command:<pre>:help {subject}</pre>
To get help on the "x" command, for example, enter the following:<pre>:help x</pre>
To find out how to delete text, use this command:<pre>:help deleting</pre>
To get a complete index of all Vim commands, use the following command:<pre>:help index</pre>
When you need to get help for a control character command (for example,
CTRL-A), you need to spell it with the prefix "CTRL-".<pre>:help CTRL-A</pre>
The Vim editor has many different modes.  By default, the help system displays
the normal-mode commands.  For example, the following command displays help
for the normal-mode <code>CTRL-H</code> command:<pre>:help CTRL-H</pre>
To identify other modes, use a mode prefix.  If you want the help for the
insert-mode version of a command, use "i_".  For <code>CTRL-H</code> this gives you the
following command:<pre>:help i_CTRL-H</pre>
When you start the Vim editor, you can use several command-line arguments.
These all begin with a dash (-).  To find what the -t argument does, for
example, use the command:<pre>:help -t</pre>
The Vim editor has a number of options that enable you to configure and
customize the editor.  If you want help for an option, you need to enclose it
in single quotation marks.  To find out what the <a href="/neovim-docs-web/en/options#'number'">'number'</a> option does, for
example, use the following command:<pre>:help 'number'</pre>
The table with all mode prefixes can be found below: <a href="/neovim-docs-web/en/usr_02#help-summary">help-summary</a>.</div>
<div class="old-help-para">Special keys are enclosed in angle brackets.  To find help on the up-arrow key
in Insert mode, for instance, use this command:<pre>:help i_&lt;Up&gt;</pre>
If you see an error message that you don't understand, for example:</div>
<div class="old-help-para"><div class="help-column_heading">	E37: No write since last change (use ! to override)</div></div>
<div class="old-help-para">You can use the error ID at the start to find help about it:<pre>:help E37</pre>
Summary: 					<a name="help-summary"></a><code class="help-tag-right">help-summary</code><pre></pre>
1) Use Ctrl-D after typing a topic and let Vim show all available topics.
   Or press Tab to complete:<pre>:help some&lt;Tab&gt;</pre></div>
<div class="old-help-para">   More information on how to use the help:<pre>:help helphelp</pre>
2) Follow the links in bars to related help.  You can go from the detailed
   help to the user documentation, which describes certain commands more from
   a user perspective and less detailed.  E.g. after:<pre>:help pattern.txt</pre></div>
<div class="old-help-para">   You can see the user guide topics <a href="/neovim-docs-web/en/usr_03#03.9">03.9</a> and <a href="/neovim-docs-web/en/usr_27#usr_27.txt">usr_27.txt</a> in the
   introduction.</div>
<div class="old-help-para">3) Options are enclosed in single apostrophes.  To go to the help topic for the
   list option:<pre>:help 'list'</pre></div>
<div class="old-help-para">   If you only know you are looking for a certain option, you can also do:<pre>:help options.txt</pre></div>
<div class="old-help-para">   to open the help page which describes all option handling and then search
   using regular expressions, e.g. textwidth.
   Certain options have their own namespace, e.g.:<pre>:help cpo-&lt;letter&gt;</pre></div>
<div class="old-help-para">   for the corresponding flag of the <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> settings, substitute <code>&lt;letter&gt;</code>
   by a specific flag, e.g.:<pre>:help cpo-;</pre></div>
<div class="old-help-para">   And for the <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a> flags:<pre>:help go-&lt;letter&gt;</pre>
4) Normal mode commands do not have a prefix. To go to the help page for the
   "gt" command:<pre>:help gt</pre>
5) Insert mode commands start with i_.  Help for deleting a word:<pre>:help i_CTRL-W</pre>
6) Visual mode commands start with v_.  Help for jumping to the other side of
   the Visual area:<pre>:help v_o</pre>
7) Command line editing and arguments start with c_.  Help for using the
   command argument %:<pre>:help c_%</pre>
8) Ex-commands always start with ":", so to go to the ":s" command help:<pre>:help :s</pre>
9) Commands specifically for debugging start with "&gt;".  To go to the help
   for the "cont" debug command:<pre>:help &gt;cont</pre>
10) Key combinations.  They usually start with a single letter indicating
    the mode for which they can be used.  E.g.:<pre>:help i_CTRL-X</pre></div>
<div class="old-help-para">    takes you to the family of <code>CTRL-X</code> commands for insert mode which can be
    used to auto-complete different things.  Note, that certain keys will
    always be written the same, e.g. Control will always be CTRL.
    For normal mode commands there is no prefix and the topic is available at
    :h <code>CTRL-&lt;</code>Letter&gt;. E.g.<pre>:help CTRL-W</pre></div>
<div class="old-help-para">    In contrast<pre>:help c_CTRL-R</pre></div>
<div class="old-help-para">    will describe what the <code>CTRL-R</code> does when entering commands in the Command
    line and<pre>:help v_CTRL-A</pre></div>
<div class="old-help-para">    talks about incrementing numbers in visual mode and<pre>:help g_CTRL-A</pre></div>
<div class="old-help-para">    talks about the "g&lt;C-A&gt;" command (e.g. you have to press "g" then
    <code>&lt;CTRL-A&gt;</code>).  Here the "g" stands for the normal command "g" which always
    expects a second key before doing something similar to the commands
    starting with "z".</div>
<div class="old-help-para">11) Regexp items always start with /.  So to get help for the "\+" quantifier
    in Vim regexes:<pre>:help /\+</pre></div>
<div class="old-help-para">    If you need to know everything about regular expressions, start reading
    at:<pre>:help pattern.txt</pre>
12) Registers always start with "quote". To find out about the special ":"
    register:<pre>:help quote:</pre>
13) Vim Script is available at<pre>:help eval.txt</pre></div>
<div class="old-help-para">   Certain aspects of the language are available at :h expr-X where "X" is a
   single letter. E.g.<pre>:help expr-!</pre></div>
<div class="old-help-para">   will take you to the topic describing the "!" (Not) operator for Vim
   Script.
   Also important is<pre>:help function-list</pre></div>
<div class="old-help-para">   to find a short description of all functions available.  Help topics for
   Vim script functions always include the "()", so:<pre>:help append()</pre></div>
<div class="old-help-para">   talks about the append Vim script function rather than how to append text
   in the current buffer.</div>
<div class="old-help-para">14) Mappings are talked about in the help page :h <a href="/neovim-docs-web/en/map#map.txt">map.txt</a>. Use<pre>:help mapmode-i</pre></div>
<div class="old-help-para">    to find out about the <a href="/neovim-docs-web/en/map#%3Aimap">:imap</a> command.  Also use :map-topic
    to find out about certain subtopics particular for mappings.  e.g:<pre>:help :map-local</pre></div>
<div class="old-help-para">    for buffer-local mappings or<pre>:help map-bar</pre></div>
<div class="old-help-para">    for how the '|' is handled in mappings.</div>
<div class="old-help-para">15) Command definitions are talked about :h command-topic, so use<pre>:help command-bar</pre></div>
<div class="old-help-para">    to find out about the '!' argument for custom commands.</div>
<div class="old-help-para">16) Window management commands always start with <code>CTRL-W</code>, so you find the
    corresponding help at :h <code>CTRL-W</code>_letter.  E.g.<pre>:help CTRL-W_p</pre></div>
<div class="old-help-para">    for moving the previous accessed window.  You can also access<pre>:help windows.txt</pre></div>
<div class="old-help-para">    and read your way through if you are looking for window handling
    commands.</div>
<div class="old-help-para">17) Use <a href="/neovim-docs-web/en/helphelp#%3Ahelpgrep">:helpgrep</a> to search in all help pages (and also of any installed
    plugins).  See <a href="/neovim-docs-web/en/helphelp#%3Ahelpgrep">:helpgrep</a> for how to use it.
    To search for a topic:<pre>:helpgrep topic</pre></div>
<div class="old-help-para">    This takes you to the first match.  To go to the next one:<pre>:cnext</pre></div>
<div class="old-help-para">    All matches are available in the quickfix window which can be opened
    with:<pre>:copen</pre></div>
<div class="old-help-para">    Move around to the match you like and press Enter to jump to that help.</div>
<div class="old-help-para">18) The user manual.  This describes help topics for beginners in a rather
    friendly way.  Start at <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a> to find the table of content (as you
    might have guessed):<pre>:help usr_toc.txt</pre></div>
<div class="old-help-para">    Skim over the contents to find interesting topics. The "Digraphs" and
    "Entering special characters" items are in chapter 24, so to go to that
    particular help page:<pre>:help usr_24.txt</pre></div>
<div class="old-help-para">    Also if you want to access a certain chapter in the help, the chapter
    number can be accessed directly like this:<pre>:help 10.1</pre></div>
<div class="old-help-para">    which goes to chapter 10.1 in <a href="/neovim-docs-web/en/usr_10#usr_10.txt">usr_10.txt</a> and talks about recording
    macros.</div>
<div class="old-help-para">19) Highlighting groups.  Always start with hl-groupname.  E.g.<pre>:help hl-WarningMsg</pre></div>
<div class="old-help-para">    talks about the WarningMsg highlighting group.</div>
<div class="old-help-para">20) Syntax highlighting is namespaced to :syn-topic.  E.g.<pre>:help :syn-conceal</pre></div>
<div class="old-help-para">    talks about the conceal argument for the ":syn" command.</div>
<div class="old-help-para">21) Quickfix commands usually start with :c while location list commands
    usually start with :l</div>
<div class="old-help-para">22) Autocommand events can be found by their name:<pre>:help BufWinLeave</pre></div>
<div class="old-help-para">    To see all possible events:<pre>:help events</pre>
23) Command-line switches always start with "-".  So for the help of the -f
    command switch of Vim use:<pre>:help -f</pre>
24) Optional features always start with "+".  To find out about the
    conceal feature use:<pre>:help +conceal</pre>
25) Documentation for included filetype specific functionality is usually
    available  in the form ft-&lt;filetype&gt;-&lt;functionality&gt;.  So<pre>:help ft-c-syntax</pre></div>
<div class="old-help-para">    talks about the C syntax file and the option it provides.  Sometimes,
    additional sections for omni completion<pre>:help ft-php-omni</pre></div>
<div class="old-help-para">    or filetype plugins<pre>:help ft-tex-plugin</pre></div>
<div class="old-help-para">    are available.</div>
<div class="old-help-para">26) Error and Warning codes can be looked up directly in the help.  So<pre>:help E297</pre></div>
<div class="old-help-para">    takes you exactly to the description of the swap error message and<pre>:help W10</pre></div>
<div class="old-help-para">    talks about the warning "Changing a readonly file".
    Sometimes, however, those error codes are not described, but rather are
    listed at the Vim command that usually causes this.  So:<pre>:help E128</pre></div>
<div class="old-help-para">    takes you to the <a href="/neovim-docs-web/en/userfunc#%3Afunction">:function</a> command</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_03#usr_03.txt">usr_03.txt</a>  Moving around</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  