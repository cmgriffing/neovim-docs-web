---
title:  Usr_21
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_21.txt"></a><a name="21.1"></a><h1> Usr_21</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_21.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			   Go away and come back</div>
<div class="old-help-para">This chapter goes into mixing the use of other programs with Vim.  Either by
executing program from inside Vim or by leaving Vim and coming back later.
Furthermore, this is about the ways to remember the state of Vim and restore
it later.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_21#21.1">21.1</a>  	Suspend and resume
<a href="/neovim-docs-web/en/usr_21#21.2">21.2</a>  	Executing shell commands
<a href="/neovim-docs-web/en/usr_21#21.3">21.3</a>  	Remembering information; ShaDa
<a href="/neovim-docs-web/en/usr_21#21.4">21.4</a>  	Sessions
<a href="/neovim-docs-web/en/usr_21#21.5">21.5</a>  	Views
<a href="/neovim-docs-web/en/usr_21#21.6">21.6</a>  	Modelines</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_22#usr_22.txt">usr_22.txt</a>  Finding the file to edit
 Previous chapter: <a href="/neovim-docs-web/en/usr_20#usr_20.txt">usr_20.txt</a>  Typing command-line commands quickly
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Suspend and resume</h2></div>
<div class="old-help-para">Like most Unix programs Vim can be suspended by pressing <code>CTRL-Z</code>.  This stops
Vim and takes you back to the shell it was started in.  You can then do any
other commands until you are bored with them.  Then bring back Vim with the
"fg" command.<pre>CTRL-Z
{any sequence of shell commands}
fg</pre>
You are right back where you left Vim, nothing has changed.
   In case pressing <code>CTRL-Z</code> doesn't work, you can also use ":suspend".
Don't forget to bring Vim back to the foreground, you would lose any changes
that you made!</div>
<div class="old-help-para">Only Unix has support for this.  On other systems Vim will start a shell for
you.  This also has the functionality of being able to execute shell commands.
But it's a new shell, not the one that you started Vim from.
   When you are running the GUI you can't go back to the shell where Vim was
started.  <code>CTRL-Z</code> will minimize the Vim window instead.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="21.2"></a><span class="help-tag">21.2</span>  	Executing shell commands</span></h2></div>
<div class="old-help-para">To execute a single shell command from Vim use ":!{command}".  For example, to
see a directory listing:<pre>:!ls
:!dir</pre>
The first one is for Unix, the second one for MS-Windows.
   Vim will execute the program.  When it ends you will get a prompt to hit
<code>&lt;Enter&gt;</code>.  This allows you to have a look at the output from the command before
returning to the text you were editing.
   The "!" is also used in other places where a program is run.  Let's take
a look at an overview:</div>
<div class="old-help-para">	:!{program}		execute <code>{program}</code>
	:r !{program}		execute <code>{program}</code> and read its output
	:w !{program}		execute <code>{program}</code> and send text to its input
	:[range]!{program}	filter text through <code>{program}</code></div>
<div class="old-help-para">Notice that the presence of a range before "!{program}" makes a big
difference.  Without it executes the program normally, with the range a number
of text lines is filtered through the program.</div>
<div class="old-help-para">Executing a whole row of programs this way is possible.  But a shell is much
better at it.  You can start a new shell with <a href="/neovim-docs-web/en/various#%3Aterminal">:terminal</a>.</div>
<div class="old-help-para">This is similar to using <code>CTRL-Z</code> to suspend Vim.  The difference is that a new
shell is started.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="21.3"></a><span class="help-tag">21.3</span>  	Remembering information; ShaDa</span></h2></div>
<div class="old-help-para">After editing for a while you will have text in registers, marks in various
files, a command line history filled with carefully crafted commands.  When
you exit Vim all of this is lost.  But you can get it back!</div>
<div class="old-help-para">The ShaDa (abbreviation of SHAred DAta) file is designed to store status
information:</div>
<div class="old-help-para">	Command-line and Search pattern history
	Text in registers
	Marks for various files
	The buffer list
	Global variables</div>
<div class="old-help-para">Each time you exit Vim it will store this information in a file, the ShaDa
file.  When Vim starts again, the ShaDa file is read and the information
restored.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'shada'">'shada'</a> option is set by default to restore a limited number of items.
You might want to set it to remember more information.  This is done through
the following command:<pre>:set shada=string</pre>
The string specifies what to save.  The syntax of this string is an option
character followed by an argument.  The option/argument pairs are separated by
commas.
   Take a look at how you can build up your own shada string.  First, the '
option is used to specify how many files for which you save marks (a-z).  Pick
a nice even number for this option (1000, for instance).  Your command now
looks like this:<pre>:set shada='1000</pre>
The f option controls whether global marks (A-Z and 0-9) are stored.  If this
option is 0, none are stored.  If it is 1 or you do not specify an f option,
the marks are stored.  You want this feature, so now you have this:<pre>:set shada='1000,f1</pre>
The &lt; option controls how many lines are saved for each of the registers.  By
default, all the lines are saved.  If 0, nothing is saved.  To avoid adding
thousands of lines to your ShaDa file (which might never get used and makes
starting Vim slower) you use a maximum of 500 lines:<pre>:set shada='1000,f1,&lt;500</pre></div>
<div class="old-help-para">Other options you might want to use:
	:	number of lines to save from the command line history
	@	number of lines to save from the input line history
	/	number of lines to save from the search history
	r	removable media, for which no marks will be stored (can be
		used several times)
	!	global variables that start with an uppercase letter and
		don't contain lowercase letters
	h	disable <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> highlighting when starting
	%	the buffer list (only restored when starting Vim without file
		arguments)
	c	convert the text using <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>
	n	name used for the ShaDa file (must be the last option)</div>
<div class="old-help-para">See the <a href="/neovim-docs-web/en/options#'shada'">'shada'</a> option and <a href="/neovim-docs-web/en/starting#shada-file">shada-file</a> for more information.</div>
<div class="old-help-para">When you run Vim multiple times, the last one exiting will store its
information.  This may cause information that previously exiting Vims stored
to be lost.  Each item can be remembered only once.</div>
<div class="old-help-para"><a name="_getting-back-to-where-you-stopped-vim"></a><h3 class="help-heading">GETTING BACK TO WHERE YOU STOPPED VIM</h3></div>
<div class="old-help-para">You are halfway through editing a file and it's time to leave for holidays.
You exit Vim and go enjoy yourselves, forgetting all about your work.  After a
couple of weeks you start Vim, and type:
<pre>'0</pre>
And you are right back where you left Vim.  So you can get on with your work.
   Vim creates a mark each time you exit Vim.  The last one is '0.  The
position that '0 pointed to is made '1.  And '1 is made to '2, and so forth.
Mark '9 is lost.
   The <a href="/neovim-docs-web/en/motion#%3Amarks">:marks</a> command is useful to find out where '0 to '9 will take you.</div>
<div class="old-help-para"><a name="_getting-back-to-some-file"></a><h3 class="help-heading">GETTING BACK TO SOME FILE</h3></div>
<div class="old-help-para">If you want to go back to a file that you edited recently, but not when
exiting Vim, there is a slightly more complicated way.  You can see a list of
files by typing the command:<pre>:oldfiles</pre></div>
<div class="old-help-para"><div class="help-column_heading">	1: ~/.config/nvim/init.vim</div><div class="help-column_heading">	2: ~/text/resume.txt</div><div class="help-column_heading">	3: /tmp/draft</div></div>
<div class="old-help-para">Now you would like to edit the second file, which is in the list preceded by
"2:".  You type:<pre>:e #&lt;2</pre>
Instead of ":e" you can use any command that has a file name argument, the
"#&lt;2" item works in the same place as "%" (current file name) and "#"
(alternate file name).  So you can also split the window to edit the third
file:<pre>:split #&lt;3</pre>
That #&lt;123 thing is a bit complicated when you just want to edit a file.
Fortunately there is a simpler way:<pre>:browse oldfiles</pre></div>
<div class="old-help-para"><div class="help-column_heading">	1: ~/.config/nvim/init.vim</div><div class="help-column_heading">	2: ~/text/resume.txt</div><div class="help-column_heading">	3: /tmp/draft</div>	-- More --</div>
<div class="old-help-para">You get the same list of files as with <a href="/neovim-docs-web/en/starting#%3Aoldfiles">:oldfiles</a>.  If you want to edit
"resume.txt" first press "q" to stop the listing.  You will get a prompt:</div>
<div class="old-help-para"><div class="help-column_heading">	Type number and <code>&lt;Enter&gt;</code> (empty cancels):</div></div>
<div class="old-help-para">Type "2" and press <code>&lt;Enter&gt;</code> to edit the second file.</div>
<div class="old-help-para">More info at <a href="/neovim-docs-web/en/starting#%3Aoldfiles">:oldfiles</a>, <a href="/neovim-docs-web/en/eval#v%3Aoldfiles">v:oldfiles</a> and <a href="/neovim-docs-web/en/cmdline#c_%23%3C">c_#&lt;</a>.</div>
<div class="old-help-para"><a name="_move-info-from-one-vim-to-another"></a><h3 class="help-heading">MOVE INFO FROM ONE VIM TO ANOTHER</h3></div>
<div class="old-help-para">You can use the ":wshada" and ":rshada" commands to save and restore the
information while still running Vim.  This is useful for exchanging register
contents between two instances of Vim, for example.  In the first Vim do:<pre>:wshada! ~/tmp/shada</pre>
And in the second Vim do:<pre>:rshada! ~/tmp/shada</pre>
Obviously, the "w" stands for "write" and the "r" for "read".
   The ! character is used by ":wshada" to forcefully overwrite an existing
file.  When it is omitted, and the file exists, the information is merged into
the file.
   The ! character used for ":rshada" means that all the information in ShaDa
file has priority over existing information, this may overwrite it.  Without
the ! only information that wasn't set is used.
   These commands can also be used to store info and use it again later.  You
could make a directory full of ShaDa files, each containing info for a
different purpose.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="21.4"></a><span class="help-tag">21.4</span>  	Sessions</span></h2></div>
<div class="old-help-para">Suppose you are editing along, and it is the end of the day.  You want to quit
work and pick up where you left off the next day.  You can do this by saving
your editing session and restoring it the next day.
   A Vim session contains all the information about what you are editing.
This includes things such as the file list, window layout, global variables,
options and other information.  (Exactly what is remembered is controlled by
the <a href="/neovim-docs-web/en/options#'sessionoptions'">'sessionoptions'</a> option, described below.)
   The following command creates a session file:<pre>:mksession vimbook.vim</pre>
Later if you want to restore this session, you can use this command:<pre>:source vimbook.vim</pre>
If you want to start Vim and restore a specific session, you can use the
following command:<pre>vim -S vimbook.vim</pre>
This tells Vim to read a specific file on startup.  The 'S' stands for
session (actually, you can source any Vim script with -S, thus it might as
well stand for "source").</div>
<div class="old-help-para">The windows that were open are restored, with the same position and size as
before.  Mappings and option values are like before.
   What exactly is restored depends on the <a href="/neovim-docs-web/en/options#'sessionoptions'">'sessionoptions'</a> option.  The
default value is "blank,buffers,curdir,folds,help,options,winsize".</div>
<div class="old-help-para">	blank		keep empty windows
	buffers		all buffers, not only the ones in a window
	curdir		the current directory
	folds		folds, also manually created ones
	help		the help window
	options		all options and mappings
	winsize		window sizes</div>
<div class="old-help-para">Change this to your liking.  To also restore the size of the Vim window, for
example, use:<pre>:set sessionoptions+=resize</pre>
SESSION HERE, SESSION THERE</div>
<div class="old-help-para">The obvious way to use sessions is when working on different projects.
Suppose you store your session files in the directory "~/.config/nvim".  You
are currently working on the "secret" project and have to switch to the
"boring" project:<pre>:wall
:mksession! ~/.config/nvim/secret.vim
:source ~/.config/nvim/boring.vim</pre>
This first uses ":wall" to write all modified files.  Then the current session
is saved, using ":mksession!".  This overwrites the previous session.  The
next time you load the secret session you can continue where you were at this
point.  And finally you load the new "boring" session.</div>
<div class="old-help-para">If you open help windows, split and close various windows, and generally mess
up the window layout, you can go back to the last saved session:<pre>:source ~/.config/nvim/boring.vim</pre>
Thus you have complete control over whether you want to continue next time
where you are now, by saving the current setup in a session, or keep the
session file as a starting point.
   Another way of using sessions is to create a window layout that you like to
use, and save this in a session.  Then you can go back to this layout whenever
you want.
   For example, this is a nice layout to use:</div>
<div class="old-help-para">	+----------------------------------------+
	|		   VIM - main help file  |
	|					 |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_21.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_21.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%2B----------------------------------------%2B%0A%09%7C%09%09%20%20%20VIM%20-%20main%20help%20file%20%20%7C%0A%09%7C%09%09%09%09%09%20%7C%0A%09%7CMove%20around%3A%20%20Use%20the%20cursor%20keys%2C%20or%20%22h%7C%0A%09%7Chelp.txt%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7Cexplorer%20%20%20%7C%09%09%09%09%20%7C%0A%09%7Cdir%09%20%20%20%20%7C~%09%09%09%09%20%7C%0D%60%60%60">Move</a> around:  Use the cursor keys, or "h|
help.txt================================
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_21.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_21.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C%09%09%09%09%09%20%7C%0A%09%7CMove%20around%3A%20%20Use%20the%20cursor%20keys%2C%20or%20%22h%7C%0A%09%7Chelp.txt%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7Cexplorer%20%20%20%7C%09%09%09%09%20%7C%0A%09%7Cdir%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cdir%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0D%60%60%60">explorer</a>   |				 |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_21.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_21.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7CMove%20around%3A%20%20Use%20the%20cursor%20keys%2C%20or%20%22h%7C%0A%09%7Chelp.txt%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7Cexplorer%20%20%20%7C%09%09%09%09%20%7C%0A%09%7Cdir%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cdir%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0D%60%60%60">dir</a>	    |~				 |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_21.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_21.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Chelp.txt%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7Cexplorer%20%20%20%7C%09%09%09%09%20%7C%0A%09%7Cdir%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cdir%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0D%60%60%60">dir</a>	    |~				 |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_21.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_21.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cexplorer%20%20%20%7C%09%09%09%09%20%7C%0A%09%7Cdir%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cdir%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0D%60%60%60">file</a>	    |~				 |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_21.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_21.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cdir%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cdir%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7C~%2F%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%5BNo%20File%5D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0D%60%60%60">file</a>	    |~				 |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_21.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_21.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cdir%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7C~%2F%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%5BNo%20File%5D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%09%09%09%09%09%20%7C%0D%60%60%60">file</a>	    |~				 |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_21.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_21.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7Cfile%09%20%20%20%20%7C~%09%09%09%09%20%7C%0A%09%7C~%2F%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%5BNo%20File%5D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%09%09%09%09%09%20%7C%0A%09%2B----------------------------------------%2B%0D%60%60%60">file</a>	    |~				 |
~/=========[No File]===================|
	|					 |
	+----------------------------------------+</div>
<div class="old-help-para">This has a help window at the top, so that you can read this text.  The narrow
vertical window on the left contains a file explorer.  This is a Vim plugin
that lists the contents of a directory.  You can select files to edit there.
More about this in the next chapter.
   Create this from a just started Vim with:<pre>:help
CTRL-W w
:vertical split ~/</pre>
You can resize the windows a bit to your liking.  Then save the session with:
<pre>:mksession ~/.config/nvim/mine.vim</pre>
Now you can start Vim with this layout:<pre>vim -S ~/.config/nvim/mine.vim</pre>
Hint: To open a file you see listed in the explorer window in the empty
window, move the cursor to the filename and press "O".  Double clicking with
the mouse will also do this.</div>
<div class="old-help-para"><a name="_sessions-and-shada"></a><h3 class="help-heading">SESSIONS AND SHADA</h3></div>
<div class="old-help-para">Sessions store many things, but not the position of marks, contents of
registers and the command line history.  You need to use the shada feature
for these things.
   In most situations you will want to use sessions separately from shada.
This can be used to switch to another session, but keep the command line
history.  And yank text into registers in one session, and paste it back in
another session.
   You might prefer to keep the info with the session.  You will have to do
this yourself then.  Example:<pre>:mksession! ~/.config/nvim/secret.vim
:wshada! ~/.local/state/nvim/shada/secret.shada</pre>
And to restore this again:<pre>:source ~/.config/nvim/secret.vim
:rshada! ~/.local/state/nvim/shada/secret.shada</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="21.5"></a><span class="help-tag">21.5</span>  	Views</span></h2></div>
<div class="old-help-para">A session stores the looks of the whole of Vim.  When you want to store the
properties for one window only, use a view.
   The use of a view is for when you want to edit a file in a specific way.
For example, you have line numbers enabled with the <a href="/neovim-docs-web/en/options#'number'">'number'</a> option and
defined a few folds.  Just like with sessions, you can remember this view on
the file and restore it later.  Actually, when you store a session, it stores
the view of each window.
   There are two basic ways to use views.  The first is to let Vim pick a name
for the view file.  You can restore the view when you later edit the same
file.  To store the view for the current window:<pre>:mkview</pre>
Vim will decide where to store the view.  When you later edit the same file
you get the view back with this command:<pre>:loadview</pre>
That's easy, isn't it?
   Now you want to view the file without the <a href="/neovim-docs-web/en/options#'number'">'number'</a> option on, or with all
folds open, you can set the options to make the window look that way.  Then
store this view with:<pre>:mkview 1</pre>
Obviously, you can get this back with:<pre>:loadview 1</pre>
Now you can switch between the two views on the file by using ":loadview" with
and without the "1" argument.
   You can store up to ten views for the same file this way, one unnumbered
and nine numbered 1 to 9.</div>
<div class="old-help-para">A VIEW WITH A NAME</div>
<div class="old-help-para">The second basic way to use views is by storing the view in a file with a name
you choose.  This view can be loaded while editing another file.  Vim will
then switch to editing the file specified in the view.  Thus you can use this
to quickly switch to editing another file, with all its options set as you
saved them.
   For example, to save the view of the current file:<pre>:mkview ~/.config/nvim/main.vim</pre>
You can restore it with:<pre>:source ~/.config/nvim/main.vim</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="21.6"></a><span class="help-tag">21.6</span>  	Modelines</span></h2></div>
<div class="old-help-para">When editing a specific file, you might set options specifically for that
file.  Typing these commands each time is boring.  Using a session or view for
editing a file doesn't work when sharing the file between several people.
   The solution for this situation is adding a modeline to the file.  This is
a line of text that tells Vim the values of options, to be used in this file
only.
   A typical example is a C program where you make indents by a multiple of 4
spaces.  This requires setting the <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> option to 4.  This modeline
will do that:</div>
<div class="old-help-para">/* vim:set shiftwidth=4:/</div>
<div class="old-help-para">Put this line as one of the first or last five lines in the file.  When
editing the file, you will notice that <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> will have been set to
four.  When editing another file, it's set back to the default value of eight.
   For some files the modeline fits well in the header, thus it can be put at
the top of the file.  For text files and other files where the modeline gets
in the way of the normal contents, put it at the end of the file.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'modelines'">'modelines'</a> option specifies how many lines at the start and end of the
file are inspected for containing a modeline.  To inspect ten lines:<pre>:set modelines=10</pre>
The <a href="/neovim-docs-web/en/options#'modeline'">'modeline'</a> option can be used to switch this off.  Do this when you are
working as root on Unix or Administrator on MS-Windows, or when you don't
trust the files you are editing:<pre>:set nomodeline</pre>
Use this format for the modeline:</div>
<div class="old-help-para"><div class="help-column_heading">	any-text vim:set <code>{option}</code>={value} ... : any-text</div></div>
<div class="old-help-para">The "any-text" indicates that you can put any text before and after the part
that Vim will use.  This allows making it look like a comment, like what was
done above with /* and */.   The " vim:" part is what makes Vim recognize this line.  There must be
white space before "vim", or "vim" must be at the start of the line.  Thus
using something like "gvim:" will not work.
   The part between the colons is a ":set" command.  It works the same way as
typing the ":set" command, except that you need to insert a backslash before a
colon (otherwise it would be seen as the end of the modeline).</div>
<div class="old-help-para">Another example:</div>
<div class="old-help-para"><div class="help-column_heading">	// vim:set textwidth=72 dir=c\:\tmp:  use c:\tmp here</div></div>
<div class="old-help-para">There is an extra backslash before the first colon, so that it's included in
the ":set" command.  The text after the second colon is ignored, thus a remark
can be placed there.</div>
<div class="old-help-para">For more details see <a href="/neovim-docs-web/en/options#modeline">modeline</a>.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_22#usr_22.txt">usr_22.txt</a>  Finding the file to edit</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  