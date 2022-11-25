---
title:  Usr_20
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_20.txt"></a><a name="20.1"></a><h1> Usr_20</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_20.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">		     Typing command-line commands quickly</div>
<div class="old-help-para">Vim has a few generic features that makes it easier to enter commands.  Colon
commands can be abbreviated, edited and repeated.  Completion is available for
nearly everything.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_20#20.1">20.1</a>  	Command line editing
<a href="/neovim-docs-web/en/usr_20#20.2">20.2</a>  	Command line abbreviations
<a href="/neovim-docs-web/en/usr_20#20.3">20.3</a>  	Command line completion
<a href="/neovim-docs-web/en/usr_20#20.4">20.4</a>  	Command line history
<a href="/neovim-docs-web/en/usr_20#20.5">20.5</a>  	Command line window</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_21#usr_21.txt">usr_21.txt</a>  Go away and come back
 Previous chapter: <a href="/neovim-docs-web/en/usr_12#usr_12.txt">usr_12.txt</a>  Clever tricks
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Command line editing</h2></div>
<div class="old-help-para">When you use a colon (:) command or search for a string with / or ?, Vim puts
the cursor on the bottom of the screen.  There you type the command or search
pattern.  This is called the Command line.  Also when it's used for entering a
search command.</div>
<div class="old-help-para">The most obvious way to edit the command you type is by pressing the <code>&lt;BS&gt;</code> key.
This erases the character before the cursor.  To erase another character,
typed earlier, first move the cursor with the cursor keys.
   For example, you have typed this:<pre>:s/col/pig/</pre>
Before you hit <code>&lt;Enter&gt;</code>, you notice that "col" should be "cow".  To correct
this, you type <code>&lt;Left&gt;</code> five times.  The cursor is now just after "col".  Type
<code>&lt;BS&gt;</code> and "w" to correct:<pre>:s/cow/pig/</pre>
Now you can press <code>&lt;Enter&gt;</code> directly.  You don't have to move the cursor to the
end of the line before executing the command.</div>
<div class="old-help-para">The most often used keys to move around in the command line:</div>
<div class="old-help-para">	<code>&lt;Left&gt;</code>			one character left
	<code>&lt;Right&gt;</code>			one character right
	<code>&lt;S-Left&gt;</code> or <code>&lt;C-Left&gt;</code>	one word left
	<code>&lt;S-Right&gt;</code> or <code>&lt;C-Right&gt;</code>	one word right
	<code>CTRL-B</code> or <code>&lt;Home&gt;</code>	to begin of command line
	<code>CTRL-E</code> or <code>&lt;End&gt;</code>		to end of command line</div>
<div class="old-help-para">	Note:
	<code>&lt;S-Left&gt;</code> (cursor left key with Shift key pressed) and <code>&lt;C-Left&gt;</code> (cursor
	left key with Control pressed) will not work on all keyboards.  Same
	for the other Shift and Control combinations.</div>
<div class="old-help-para">You can also use the mouse to move the cursor.</div>
<div class="old-help-para"><a name="_deleting"></a><h3 class="help-heading">DELETING</h3></div>
<div class="old-help-para">As mentioned, <code>&lt;BS&gt;</code> deletes the character before the cursor.  To delete a whole
word use <code>CTRL-W</code>.</div>
<div class="old-help-para"><div class="help-column_heading">	/the fine pig</div></div>
<div class="old-help-para">		     <code>CTRL-W</code></div>
<div class="old-help-para"><div class="help-column_heading">	/the fine</div></div>
<div class="old-help-para">CTRL-U removes all text, thus allows you to start all over again.</div>
<div class="old-help-para"><a name="_overstrike"></a><h3 class="help-heading">OVERSTRIKE</h3></div>
<div class="old-help-para">The <code>&lt;Insert&gt;</code> key toggles between inserting characters and replacing the
existing ones.  Start with this text:</div>
<div class="old-help-para"><div class="help-column_heading">	/the fine pig</div></div>
<div class="old-help-para">Move the cursor to the start of "fine" with <code>&lt;S-Left&gt;</code> twice (or <code>&lt;Left&gt;</code> eight
times, if <code>&lt;S-Left&gt;</code> doesn't work).  Now press <code>&lt;Insert&gt;</code> to switch to overstrike
and type "great":</div>
<div class="old-help-para"><div class="help-column_heading">	/the greatpig</div></div>
<div class="old-help-para">Oops, we lost the space.  Now, don't use <code>&lt;BS&gt;</code>, because it would delete the
"t" (this is different from Replace mode).  Instead, press <code>&lt;Insert&gt;</code> to switch
from overstrike to inserting, and type the space:</div>
<div class="old-help-para"><div class="help-column_heading">	/the great pig</div></div>
<div class="old-help-para"><a name="_cancelling"></a><h3 class="help-heading">CANCELLING</h3></div>
<div class="old-help-para">You thought of executing a : or / command, but changed your mind.  To get rid
of what you already typed, without executing it, press <code>CTRL-C</code> or <code>&lt;Esc&gt;</code>.</div>
<div class="old-help-para">	Note:
	<code>&lt;Esc&gt;</code> is the universal "get out" key.  Unfortunately, in the good old
	Vi pressing <code>&lt;Esc&gt;</code> in a command line executed the command!  Since that
	might be considered to be a bug, Vim uses <code>&lt;Esc&gt;</code> to cancel the command.
	But with the <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> option it can be made Vi compatible.  And
	when using a mapping (which might be written for Vi) <code>&lt;Esc&gt;</code> also works
	Vi compatible.  Therefore, using <code>CTRL-C</code> is a method that always works.</div>
<div class="old-help-para">If you are at the start of the command line, pressing <code>&lt;BS&gt;</code> will cancel the
command.  It's like deleting the ":" or "/" that the line starts with.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="20.2"></a><span class="help-tag">20.2</span>  	Command line abbreviations</span></h2></div>
<div class="old-help-para">Some of the ":" commands are really long.  We already mentioned that
":substitute" can be abbreviated to ":s".  This is a generic mechanism, all
":" commands can be abbreviated.</div>
<div class="old-help-para">How short can a command get?  There are 26 letters, and many more commands.
For example, ":set" also starts with ":s", but ":s" doesn't start a ":set"
command.  Instead ":set" can be abbreviated to ":se".
   When the shorter form of a command could be used for two commands, it
stands for only one of them.  There is no logic behind which one, you have to
learn them.  In the help files the shortest form that works is mentioned.  For
example:<pre>:s[ubstitute]</pre>
This means that the shortest form of ":substitute" is ":s".  The following
characters are optional.  Thus ":su" and ":sub" also work.</div>
<div class="old-help-para">In the user manual we will either use the full name of command, or a short
version that is still readable.  For example, ":function" can be abbreviated
to ":fu".  But since most people don't understand what that stands for, we
will use ":fun".  (Vim doesn't have a ":funny" command, otherwise ":fun" would
be confusing too.)</div>
<div class="old-help-para">It is recommended that in Vim scripts you write the full command name.  That
makes it easier to read back when you make later changes.  Except for some
often used commands like ":w" (":write") and ":r" (":read").
   A particularly confusing one is ":end", which could stand for ":endif",
":endwhile" or ":endfunction".  Therefore, always use the full name.</div>
<div class="old-help-para"><a name="_short-option-names"></a><h3 class="help-heading">SHORT OPTION NAMES</h3></div>
<div class="old-help-para">In the user manual the long version of the option names is used.  Many options
also have a short name.  Unlike ":" commands, there is only one short name
that works.  For example, the short name of <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> is <a href="/neovim-docs-web/en/options#'ai'">'ai'</a>.  Thus these
two commands do the same thing:<pre>:set autoindent
:set ai</pre>
You can find the full list of long and short names here: <a href="/neovim-docs-web/en/quickref#option-list">option-list</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="20.3"></a><span class="help-tag">20.3</span>  	Command line completion</span></h2></div>
<div class="old-help-para">This is one of those Vim features that, by itself, is a reason to switch from
Vi to Vim.  Once you have used this, you can't do without.</div>
<div class="old-help-para">Suppose you have a directory that contains these files:</div>
<div class="old-help-para">	info.txt
	intro.txt
	bodyofthepaper.txt</div>
<div class="old-help-para">To edit the last one, you use the command:<pre>:edit bodyofthepaper.txt</pre>
It's easy to type this wrong.  A much quicker way is:<pre>:edit b&lt;Tab&gt;</pre>
Which will result in the same command.  What happened?  The <code>&lt;Tab&gt;</code> key does
completion of the word before the cursor.  In this case "b".  Vim looks in the
directory and finds only one file that starts with a "b".  That must be the
one you are looking for, thus Vim completes the file name for you.</div>
<div class="old-help-para">Now type:<pre>:edit i&lt;Tab&gt;</pre>
Vim will beep, and give you:<pre>:edit info.txt</pre>
The beep means that Vim has found more than one match.  It then uses the first
match it found (alphabetically).  If you press <code>&lt;Tab&gt;</code> again, you get:<pre>:edit intro.txt</pre>
Thus, if the first <code>&lt;Tab&gt;</code> doesn't give you the file you were looking for, press
it again.  If there are more matches, you will see them all, one at a time.
   If you press <code>&lt;Tab&gt;</code> on the last matching entry, you will go back to what you
first typed:<pre>:edit i</pre>
Then it starts all over again.  Thus Vim cycles through the list of matches.
Use <code>CTRL-P</code> to go through the list in the other direction:</div>
<div class="old-help-para">	      &lt;------------------- <code>&lt;Tab&gt;</code> -------------------------+
								  |
		  <code>&lt;Tab&gt;</code> --&gt;		       <code>&lt;Tab&gt;</code> --&gt;
	:edit i		      :edit info.txt		   :edit intro.txt
		  &lt;-- <code>CTRL-P</code>		       &lt;-- <code>CTRL-P</code>
	   |
	   +---------------------- <code>CTRL-P</code> ------------------------&gt;</div>
<div class="old-help-para"><a name="_context"></a><h3 class="help-heading">CONTEXT</h3></div>
<div class="old-help-para">When you type ":set i" instead of ":edit i" and press <code>&lt;Tab&gt;</code> you get:<pre>:set icon</pre>
Hey, why didn't you get ":set info.txt"?  That's because Vim has context
sensitive completion.  The kind of words Vim will look for depends on the
command before it.  Vim knows that you cannot use a file name just after a
":set" command, but you can use an option name.
   Again, if you repeat typing the <code>&lt;Tab&gt;</code>, Vim will cycle through all matches.
There are quite a few, it's better to type more characters first:<pre>:set isk&lt;Tab&gt;</pre>
Gives:<pre>:set iskeyword</pre>
Now type "=" and press <code>&lt;Tab&gt;</code>:<pre>:set iskeyword=@,48-57,_,192-255</pre>
What happens here is that Vim inserts the old value of the option.  Now you
can edit it.
   What is completed with <code>&lt;Tab&gt;</code> is what Vim expects in that place.  Just try
it out to see how it works.  In some situations you will not get what you
want.  That's either because Vim doesn't know what you want, or because
completion was not implemented for that situation.  In that case you will get
a <code>&lt;Tab&gt;</code> inserted (displayed as ^I).</div>
<div class="old-help-para"><a name="_list-matches"></a><h3 class="help-heading">LIST MATCHES</h3></div>
<div class="old-help-para">When there are many matches, you would like to see an overview.  Do this by
pressing <code>CTRL-D</code>.  For example, pressing <code>CTRL-D</code> after:<pre>:set is</pre>
results in:<pre>:set is
incsearch  isfname    isident    iskeyword  isprint
:set is</pre>
Vim lists the matches and then comes back with the text you typed.  You can
now check the list for the item you wanted.  If it isn't there, you can use
<code>&lt;BS&gt;</code> to correct the word.  If there are many matches, type a few more
characters before pressing <code>&lt;Tab&gt;</code> to complete the rest.
   If you have watched carefully, you will have noticed that "incsearch"
doesn't start with "is".  In this case "is" stands for the short name of
"incsearch".  (Many options have a short and a long name.)  Vim is clever
enough to know that you might have wanted to expand the short name of the
option into the long name.</div>
<div class="old-help-para"><a name="_there-is-more"></a><h3 class="help-heading">THERE IS MORE</h3></div>
<div class="old-help-para">The <code>CTRL-L</code> command completes the word to the longest unambiguous string.  If
you type ":edit i" and there are files "info.txt" and "info_backup.txt" you
will get ":edit info".</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'wildmode'">'wildmode'</a> option can be used to change the way completion works.
The <a href="/neovim-docs-web/en/options#'wildmenu'">'wildmenu'</a> option can be used to get a menu-like list of matches.
Use the <a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> option to specify files that are less important and appear
at the end of the list of files.
The <a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a> option specifies files that are not listed at all.</div>
<div class="old-help-para">More about all of this here: <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="20.4"></a><span class="help-tag">20.4</span>  	Command line history</span></h2></div>
<div class="old-help-para">In chapter 3 we briefly mentioned the history.  The basics are that you can
use the <code>&lt;Up&gt;</code> key to recall an older command line.  <code>&lt;Down&gt;</code> then takes you back
to newer commands.</div>
<div class="old-help-para">There are actually five histories.  The ones we will mention here are for ":"
commands and for "/" and "?" search commands.  The "/" and "?" commands share
the same history, because they are both search commands.  The three other
histories are for expressions, debug mode commands and input lines for the
input() function.  <a href="/neovim-docs-web/en/cmdline#cmdline-history">cmdline-history</a></div>
<div class="old-help-para">Suppose you have done a ":set" command, typed ten more colon commands and then
want to repeat that ":set" command again.  You could press ":" and then ten
times <code>&lt;Up&gt;</code>.  There is a quicker way:<pre>:se&lt;Up&gt;</pre>
Vim will now go back to the previous command that started with "se".  You have
a good chance that this is the ":set" command you were looking for.  At least
you should not have to press <code>&lt;Up&gt;</code> very often (unless ":set" commands is all
you have done).</div>
<div class="old-help-para">The <code>&lt;Up&gt;</code> key will use the text typed so far and compare it with the lines in
the history.  Only matching lines will be used.
   If you do not find the line you were looking for, use <code>&lt;Down&gt;</code> to go back to
what you typed and correct that.  Or use <code>CTRL-U</code> to start all over again.</div>
<div class="old-help-para">To see all the lines in the history:<pre>:history</pre>
That's the history of ":" commands.  The search history is displayed with this
command:<pre>:history /</pre>
CTRL-P will work like <code>&lt;Up&gt;</code>, except that it doesn't matter what you already
typed.  Similarly for <code>CTRL-N</code> and <code>&lt;Down&gt;</code>.  <code>CTRL-P</code> stands for previous, <code>CTRL-N</code>
for next.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="20.5"></a><span class="help-tag">20.5</span>  	Command line window</span></h2></div>
<div class="old-help-para">Typing the text in the command line works differently from typing text in
Insert mode.  It doesn't allow many commands to change the text.  For most
commands that's OK, but sometimes you have to type a complicated command.
That's where the command line window is useful.</div>
<div class="old-help-para">Open the command line window with this command:<pre>q:</pre>
Vim now opens a (small) window at the bottom.  It contains the command line
history, and an empty line at the end:</div>
<div class="old-help-para">	+-------------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_20.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_20.html%0D%0DContext%3A%0D%0D%60%60%60%0Dhistory%2C%20and%20an%20empty%20line%20at%20the%20end%3A%0A%0A%09%2B-------------------------------------%2B%0A%09%7Cother%20window%09%09%09%20%20%20%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7Cfile.txt%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%3Ae%20c%09%09%09%09%20%20%20%20%20%20%7C%0D%60%60%60">other</a> window			      |
	|~				      |
file.txt=============================
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_20.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_20.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cother%20window%09%09%09%20%20%20%20%20%20%7C%0A%09%7C~%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7Cfile.txt%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%3Ae%20c%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Ae%20config.h.in%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Aset%20path%3D.%2C%2Fusr%2Finclude%2C%2C%09%20%20%20%20%20%20%7C%0A%09%7C%3Aset%20iskeyword%3D%40%2C48-57%2C_%2C192-255%20%20%20%20%20%7C%0D%60%60%60">:e</a> c				      |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_20.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_20.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C~%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7Cfile.txt%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%3Ae%20c%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Ae%20config.h.in%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Aset%20path%3D.%2C%2Fusr%2Finclude%2C%2C%09%20%20%20%20%20%20%7C%0A%09%7C%3Aset%20iskeyword%3D%40%2C48-57%2C_%2C192-255%20%20%20%20%20%7C%0A%09%7C%3Aset%20is%09%09%09%20%20%20%20%20%20%7C%0D%60%60%60">:e</a> config.h.in			      |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_20.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_20.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cfile.txt%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%3Ae%20c%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Ae%20config.h.in%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Aset%20path%3D.%2C%2Fusr%2Finclude%2C%2C%09%20%20%20%20%20%20%7C%0A%09%7C%3Aset%20iskeyword%3D%40%2C48-57%2C_%2C192-255%20%20%20%20%20%7C%0A%09%7C%3Aset%20is%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Aq%09%09%09%09%20%20%20%20%20%20%7C%0D%60%60%60">:set</a> path=.,/usr/include,,	      |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_20.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_20.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C%3Ae%20c%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Ae%20config.h.in%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Aset%20path%3D.%2C%2Fusr%2Finclude%2C%2C%09%20%20%20%20%20%20%7C%0A%09%7C%3Aset%20iskeyword%3D%40%2C48-57%2C_%2C192-255%20%20%20%20%20%7C%0A%09%7C%3Aset%20is%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Aq%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3A%09%09%09%09%20%20%20%20%20%20%7C%0D%60%60%60">:set</a> iskeyword=@,48-57,_,192-255     |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_20.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_20.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C%3Ae%20config.h.in%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Aset%20path%3D.%2C%2Fusr%2Finclude%2C%2C%09%20%20%20%20%20%20%7C%0A%09%7C%3Aset%20iskeyword%3D%40%2C48-57%2C_%2C192-255%20%20%20%20%20%7C%0A%09%7C%3Aset%20is%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Aq%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3A%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7Ccommand-line%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0D%60%60%60">:set</a> is			      |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_20.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_20.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C%3Aset%20path%3D.%2C%2Fusr%2Finclude%2C%2C%09%20%20%20%20%20%20%7C%0A%09%7C%3Aset%20iskeyword%3D%40%2C48-57%2C_%2C192-255%20%20%20%20%20%7C%0A%09%7C%3Aset%20is%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Aq%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3A%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7Ccommand-line%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%09%09%09%09%20%20%20%20%20%20%7C%0D%60%60%60">:q</a>				      |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_20.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_20.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C%3Aset%20iskeyword%3D%40%2C48-57%2C_%2C192-255%20%20%20%20%20%7C%0A%09%7C%3Aset%20is%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3Aq%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%3A%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7Ccommand-line%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7C%09%09%09%09%20%20%20%20%20%20%7C%0A%09%2B-------------------------------------%2B%0D%60%60%60">:</a>				      |
command-line=========================
	|				      |
	+-------------------------------------+</div>
<div class="old-help-para">You are now in Normal mode.  You can use the "hjkl" keys to move around.  For
example, move up with "5k" to the ":e config.h.in" line.  Type "$h" to go to
the "i" of "in" and type "cwout".  Now you have changed the line to:</div>
<div class="old-help-para"><div class="help-column_heading">	:e config.h.out</div></div>
<div class="old-help-para">Now press <code>&lt;Enter&gt;</code> and this command will be executed.  The command line window
will close.
   The <code>&lt;Enter&gt;</code> command will execute the line under the cursor.  It doesn't
matter whether Vim is in Insert mode or in Normal mode.
   Changes in the command line window are lost.  They do not result in the
history to be changed.  Except that the command you execute will be added to
the end of the history, like with all executed commands.</div>
<div class="old-help-para">The command line window is very useful when you want to have overview of the
history, lookup a similar command, change it a bit and execute it.  A search
command can be used to find something.
   In the previous example the "?config" search command could have been used
to find the previous command that contains "config".  It's a bit strange,
because you are using a command line to search in the command line window.
While typing that search command you can't open another command line window,
there can be only one.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_21#usr_21.txt">usr_21.txt</a>  Go away and come back</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  