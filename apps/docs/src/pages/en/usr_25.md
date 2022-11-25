---
title:  Usr_25
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_25.txt"></a><a name="25.1"></a><h1> Usr_25</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_25.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			     Editing formatted text</div>
<div class="old-help-para">Text hardly ever comes in one sentence per line.  This chapter is about
breaking sentences to make them fit on a page and other formatting.
Vim also has useful features for editing single-line paragraphs and tables.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_25#25.1">25.1</a>  	Breaking lines
<a href="/neovim-docs-web/en/usr_25#25.2">25.2</a>  	Aligning text
<a href="/neovim-docs-web/en/usr_25#25.3">25.3</a>  	Indents and tabs
<a href="/neovim-docs-web/en/usr_25#25.4">25.4</a>  	Dealing with long lines
<a href="/neovim-docs-web/en/usr_25#25.5">25.5</a>  	Editing tables</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_26#usr_26.txt">usr_26.txt</a>  Repeating
 Previous chapter: <a href="/neovim-docs-web/en/usr_24#usr_24.txt">usr_24.txt</a>  Inserting quickly
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Breaking lines</h2></div>
<div class="old-help-para">Vim has a number of functions that make dealing with text easier.  By default,
the editor does not perform automatic line breaks.  In other words, you have
to press <code>&lt;Enter&gt;</code> yourself.  This is useful when you are writing programs where
you want to decide where the line ends.  It is not so good when you are
creating documentation and want the text to be at most 70 character wide.
   If you set the <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> option, Vim automatically inserts line breaks.
Suppose, for example, that you want a very narrow column of only 30
characters.  You need to execute the following command:<pre>:set textwidth=30</pre>
Now you start typing (ruler added):</div>
<div class="old-help-para">		 1	   2	     3
	12345678901234567890123456789012345
<div class="help-column_heading">	I taught programming for a whi</div></div>
<div class="old-help-para">If you type "l" next, this makes the line longer than the 30-character limit.
When Vim sees this, it inserts a line break and you get the following:</div>
<div class="old-help-para">		 1	   2	     3
	12345678901234567890123456789012345
<div class="help-column_heading">	I taught programming for a</div><div class="help-column_heading">	whil</div></div>
<div class="old-help-para">Continuing on, you can type in the rest of the paragraph:</div>
<div class="old-help-para">		 1	   2	     3
	12345678901234567890123456789012345
<div class="help-column_heading">	I taught programming for a</div><div class="help-column_heading">	while. One time, I was stopped</div><div class="help-column_heading">	by the Fort Worth police,</div><div class="help-column_heading">	because my homework was too</div><div class="help-column_heading">	hard. True story.</div></div>
<div class="old-help-para">You do not have to type newlines; Vim puts them in automatically.</div>
<div class="old-help-para">	Note:
	The <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> option makes Vim display lines with a line break, but this
	doesn't insert a line break in the file.</div>
<div class="old-help-para"><a name="_reformatting"></a><h3 class="help-heading">REFORMATTING</h3></div>
<div class="old-help-para">The Vim editor is not a word processor.  In a word processor, if you delete
something at the beginning of the paragraph, the line breaks are reworked.  In
Vim they are not; so if you delete the word "programming" from the first line,
all you get is a short line:</div>
<div class="old-help-para">		 1	   2	     3
	12345678901234567890123456789012345
<div class="help-column_heading">	I taught for a</div><div class="help-column_heading">	while. One time, I was stopped</div><div class="help-column_heading">	by the Fort Worth police,</div><div class="help-column_heading">	because my homework was too</div><div class="help-column_heading">	hard. True story.</div></div>
<div class="old-help-para">This does not look good.  To get the paragraph into shape you use the "gq"
operator.
   Let's first use this with a Visual selection.  Starting from the first
line, type:<pre>v4jgq</pre>
"v" to start Visual mode, "4j" to move to the end of the paragraph and then
the "gq" operator.  The result is:</div>
<div class="old-help-para">		 1	   2	     3
	12345678901234567890123456789012345
<div class="help-column_heading">	I taught for a while. One</div><div class="help-column_heading">	time, I was stopped by the</div><div class="help-column_heading">	Fort Worth police, because my</div><div class="help-column_heading">	homework was too hard. True</div><div class="help-column_heading">	story.</div></div>
<div class="old-help-para">Note: there is a way to do automatic formatting for specific types of text
layouts, see <a href="/neovim-docs-web/en/change#auto-format">auto-format</a>.</div>
<div class="old-help-para">Since "gq" is an operator, you can use one of the three ways to select the
text it works on: With Visual mode, with a movement and with a text object.
   The example above could also be done with "gq4j".  That's less typing, but
you have to know the line count.  A more useful motion command is "}".  This
moves to the end of a paragraph.  Thus "gq}" formats from the cursor to the
end of the current paragraph.
   A very useful text object to use with "gq" is the paragraph.  Try this:<pre>gqap</pre>
"ap" stands for "a-paragraph".  This formats the text of one paragraph
(separated by empty lines).  Also the part before the cursor.
   If you have your paragraphs separated by empty lines, you can format the
whole file by typing this:<pre>gggqG</pre>
"gg" to move to the first line, "gqG" to format until the last line.
   Warning: If your paragraphs are not properly separated, they will be joined
together.  A common mistake is to have a line with a space or tab.  That's a
blank line, but not an empty line.</div>
<div class="old-help-para">Vim is able to format more than just plain text.  See <a href="/neovim-docs-web/en/change#fo-table">fo-table</a> for how to
change this.  See the <a href="/neovim-docs-web/en/options#'joinspaces'">'joinspaces'</a> option to change the number of spaces used
after a full stop.
   It is possible to use an external program for formatting.  This is useful
if your text can't be properly formatted with Vim's builtin command.  See the
<a href="/neovim-docs-web/en/options#'formatprg'">'formatprg'</a> option.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="25.2"></a><span class="help-tag">25.2</span>  	Aligning text</span></h2></div>
<div class="old-help-para">To center a range of lines, use the following command:<pre>:{range}center [width]</pre>
<code>{range}</code> is the usual command-line range.  [width] is an optional line width to
use for centering.  If [width] is not specified, it defaults to the value of
<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>.  (If <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is 0, the default is 80.)
   For example:<pre>:1,5center 40</pre>
results in the following:</div>
<div class="old-help-para"><div class="help-column_heading">       I taught for a while. One</div><div class="help-column_heading">       time, I was stopped by the</div><div class="help-column_heading">     Fort Worth police, because my</div><div class="help-column_heading">      homework was too hard. True</div><div class="help-column_heading">		 story.</div></div>
<div class="old-help-para"><a name="_right-alignment"></a><h3 class="help-heading">RIGHT ALIGNMENT</h3></div>
<div class="old-help-para">Similarly, the ":right" command right-justifies the text:<pre>:1,5right 37</pre>
gives this result:</div>
<div class="old-help-para"><div class="help-column_heading">	    I taught for a while. One</div><div class="help-column_heading">	   time, I was stopped by the</div><div class="help-column_heading">	Fort Worth police, because my</div><div class="help-column_heading">	  homework was too hard. True</div><div class="help-column_heading">			       story.</div></div>
<div class="old-help-para"><a name="_left-alignment"></a><h3 class="help-heading">LEFT ALIGNMENT</h3></div>
<div class="old-help-para">Finally there is this command:<pre>:{range}left [margin]</pre>
Unlike ":center" and ":right", however, the argument to ":left" is not the
length of the line.  Instead it is the left margin.  If it is omitted, the
text will be put against the left side of the screen (using a zero margin
would do the same).  If it is 5, the text will be indented 5 spaces.  For
example, use these commands:<pre>:1left 5
:2,5left</pre>
This results in the following:</div>
<div class="old-help-para"><div class="help-column_heading">	     I taught for a while. One</div><div class="help-column_heading">	time, I was stopped by the</div><div class="help-column_heading">	Fort Worth police, because my</div><div class="help-column_heading">	homework was too hard. True</div><div class="help-column_heading">	story.</div></div>
<div class="old-help-para"><a name="_justifying-text"></a><h3 class="help-heading">JUSTIFYING TEXT</h3></div>
<div class="old-help-para">Vim has no built-in way of justifying text.  However, there is a neat macro
package that does the job.  To use this package, execute the following
command:<pre>:packadd justify</pre>
Or put this line in your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>:<pre>packadd! justify</pre>
This Vim script file defines a new visual command "_j".  To justify a block of
text, highlight the text in Visual mode and then execute "_j".
   Look in the file for more explanations.  To go there, do "gf" on this name:
$VIMRUNTIME/pack/dist/opt/justify/plugin/justify.vim.</div>
<div class="old-help-para">An alternative is to filter the text through an external program.  Example:<pre>:%!fmt</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="25.3"></a><span class="help-tag">25.3</span>  	Indents and tabs</span></h2></div>
<div class="old-help-para">Indents can be used to make text stand out from the rest.  The example texts
in this manual, for example, are indented by eight spaces or a tab.  You would
normally enter this by typing a tab at the start of each line.  Take this
text:
<div class="help-column_heading">	the first line</div><div class="help-column_heading">	the second line</div></div>
<div class="old-help-para">This is entered by typing a tab, some text, <code>&lt;Enter&gt;</code>, tab and more text.
   The <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> option inserts indents automatically:<pre>:set autoindent</pre>
When a new line is started it gets the same indent as the previous line.  In
the above example, the tab after the <code>&lt;Enter&gt;</code> is not needed anymore.</div>
<div class="old-help-para"><a name="_increasing-indent"></a><h3 class="help-heading">INCREASING INDENT</h3></div>
<div class="old-help-para">To increase the amount of indent in a line, use the "&gt;" operator.  Often this
is used as "&gt;&gt;", which adds indent to the current line.
   The amount of indent added is specified with the <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> option.  The
default value is 8.  To make "&gt;&gt;" insert four spaces worth of indent, for
example, type this:<pre>:set shiftwidth=4</pre>
When used on the second line of the example text, this is what you get:</div>
<div class="old-help-para"><div class="help-column_heading">	the first line</div><div class="help-column_heading">	    the second line</div></div>
<div class="old-help-para">"4&gt;&gt;" will increase the indent of four lines.</div>
<div class="old-help-para"><a name="_tabstop"></a><h3 class="help-heading">TABSTOP</h3></div>
<div class="old-help-para">If you want to make indents a multiple of 4, you set <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> to 4.  But
when pressing a <code>&lt;Tab&gt;</code> you still get 8 spaces worth of indent.  To change this,
set the <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> option:<pre>:set softtabstop=4</pre>
This will make the <code>&lt;Tab&gt;</code> key insert 4 spaces worth of indent.  If there are
already four spaces, a <code>&lt;Tab&gt;</code> character is used (saving seven characters in the
file).  (If you always want spaces and no tab characters, set the <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a>
option.)</div>
<div class="old-help-para">	Note:
	You could set the <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> option to 4.  However, if you edit the
	file another time, with <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> set to the default value of 8, it
	will look wrong.  In other programs and when printing the indent will
	also be wrong.  Therefore it is recommended to keep <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> at eight
	all the time.  That's the standard value everywhere.</div>
<div class="old-help-para"><a name="_changing-tabs"></a><h3 class="help-heading">CHANGING TABS</h3></div>
<div class="old-help-para">You edit a file which was written with a tabstop of 3.  In Vim it looks ugly,
because it uses the normal tabstop value of 8.  You can fix this by setting
<a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> to 3.  But you have to do this every time you edit this file.
   Vim can change the use of tabstops in your file.  First, set <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> to
make the indents look good, then use the ":retab" command:<pre>:set tabstop=3
:retab 8</pre>
The ":retab" command will change <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> to 8, while changing the text such
that it looks the same.  It changes spans of white space into tabs and spaces
for this.  You can now write the file.  Next time you edit it the indents will
be right without setting an option.
   Warning: When using ":retab" on a program, it may change white space inside
a string constant.  Therefore it's a good habit to use "\t" instead of a
real tab.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="25.4"></a><span class="help-tag">25.4</span>  	Dealing with long lines</span></h2></div>
<div class="old-help-para">Sometimes you will be editing a file that is wider than the number of columns
in the window.  When that occurs, Vim wraps the lines so that everything fits
on the screen.
   If you switch the <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> option off, each line in the file shows up as one
line on the screen.  Then the ends of the long lines disappear off the screen
to the right.
   When you move the cursor to a character that can't be seen, Vim will scroll
the text to show it.  This is like moving a viewport over the text in the
horizontal direction.
   By default, Vim does not display a horizontal scrollbar in the GUI.  If you
want to enable one, use the following command:<pre>:set guioptions+=b</pre>
One horizontal scrollbar will appear at the bottom of the Vim window.</div>
<div class="old-help-para">If you don't have a scrollbar or don't want to use it, use these commands to
scroll the text.  The cursor will stay in the same place, but it's moved back
into the visible text if necessary.</div>
<div class="old-help-para">	zh		scroll right
	4zh		scroll four characters right
	zH		scroll half a window width right
	ze		scroll right to put the cursor at the end
	zl		scroll left
	4zl		scroll four characters left
	zL		scroll half a window width left
	zs		scroll left to put the cursor at the start</div>
<div class="old-help-para">Let's attempt to show this with one line of text.  The cursor is on the "w" of
"which".  The "current window" above the line indicates the text that is
currently visible.  The "window"s below the text indicate the text that is
visible after the command left of it.</div>
<div class="old-help-para">			      |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0Dcurrently%20visible.%20%20The%20%22window%22s%20below%20the%20text%20indicate%20the%20text%20that%20is%0Avisible%20after%20the%20command%20left%20of%20it.%0A%0A%09%09%09%20%20%20%20%20%20%7C%3C--%20current%20window%20--%3E%7C%0A%09%09some%20long%20text%2C%20part%20of%20which%20is%20visible%20in%20the%20window%20~%0A%09ze%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zH%09%20%20%20%7C%3C--%20%20%20%20%20window%20%20%20%20%20--%3E%7C%0D%60%60%60">&lt;--</a> current window --&gt;|
<div class="help-column_heading">		some long text, part of which is visible in the window</div>	ze	  |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%09%09%20%20%20%20%20%20%7C%3C--%20current%20window%20--%3E%7C%0A%09%09some%20long%20text%2C%20part%20of%20which%20is%20visible%20in%20the%20window%20~%0A%09ze%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zH%09%20%20%20%7C%3C--%20%20%20%20%20window%20%20%20%20%20--%3E%7C%0A%094zh%09%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zh%09%09%20%20%20%20%20%7C%3C--%20%20%20%20%20window%09%20--%3E%7C%0D%60%60%60">&lt;--</a>	   window     --&gt;|
	zH	   |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%09%20%20%20%20%20%20%7C%3C--%20current%20window%20--%3E%7C%0A%09%09some%20long%20text%2C%20part%20of%20which%20is%20visible%20in%20the%20window%20~%0A%09ze%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zH%09%20%20%20%7C%3C--%20%20%20%20%20window%20%20%20%20%20--%3E%7C%0A%094zh%09%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zh%09%09%20%20%20%20%20%7C%3C--%20%20%20%20%20window%09%20--%3E%7C%0A%09zl%09%09%20%20%20%20%20%20%20%7C%3C--%09window%09%20%20%20--%3E%7C%0D%60%60%60">&lt;--</a>     window     --&gt;|
	4zh		  |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09some%20long%20text%2C%20part%20of%20which%20is%20visible%20in%20the%20window%20~%0A%09ze%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zH%09%20%20%20%7C%3C--%20%20%20%20%20window%20%20%20%20%20--%3E%7C%0A%094zh%09%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zh%09%09%20%20%20%20%20%7C%3C--%20%20%20%20%20window%09%20--%3E%7C%0A%09zl%09%09%20%20%20%20%20%20%20%7C%3C--%09window%09%20%20%20--%3E%7C%0A%094zl%09%09%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0D%60%60%60">&lt;--</a>	   window     --&gt;|
	zh		     |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09ze%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zH%09%20%20%20%7C%3C--%20%20%20%20%20window%20%20%20%20%20--%3E%7C%0A%094zh%09%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zh%09%09%20%20%20%20%20%7C%3C--%20%20%20%20%20window%09%20--%3E%7C%0A%09zl%09%09%20%20%20%20%20%20%20%7C%3C--%09window%09%20%20%20--%3E%7C%0A%094zl%09%09%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zL%09%09%09%09%7C%3C--%09%20window%20%20%20%20%20--%3E%7C%0D%60%60%60">&lt;--</a>     window	 --&gt;|
	zl		       |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09zH%09%20%20%20%7C%3C--%20%20%20%20%20window%20%20%20%20%20--%3E%7C%0A%094zh%09%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zh%09%09%20%20%20%20%20%7C%3C--%20%20%20%20%20window%09%20--%3E%7C%0A%09zl%09%09%20%20%20%20%20%20%20%7C%3C--%09window%09%20%20%20--%3E%7C%0A%094zl%09%09%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zL%09%09%09%09%7C%3C--%09%20window%20%20%20%20%20--%3E%7C%0A%09zs%09%09%09%20%20%20%20%20%20%20%7C%3C--%09window%09%20%20%20--%3E%7C%0D%60%60%60">&lt;--</a>	window	   --&gt;|
	4zl			  |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%094zh%09%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zh%09%09%20%20%20%20%20%7C%3C--%20%20%20%20%20window%09%20--%3E%7C%0A%09zl%09%09%20%20%20%20%20%20%20%7C%3C--%09window%09%20%20%20--%3E%7C%0A%094zl%09%09%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zL%09%09%09%09%7C%3C--%09%20window%20%20%20%20%20--%3E%7C%0A%09zs%09%09%09%20%20%20%20%20%20%20%7C%3C--%09window%09%20%20%20--%3E%7C%0A%0D%60%60%60">&lt;--</a>	   window     --&gt;|
	zL				|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09zh%09%09%20%20%20%20%20%7C%3C--%20%20%20%20%20window%09%20--%3E%7C%0A%09zl%09%09%20%20%20%20%20%20%20%7C%3C--%09window%09%20%20%20--%3E%7C%0A%094zl%09%09%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zL%09%09%09%09%7C%3C--%09%20window%20%20%20%20%20--%3E%7C%0A%09zs%09%09%09%20%20%20%20%20%20%20%7C%3C--%09window%09%20%20%20--%3E%7C%0A%0A%0D%60%60%60">&lt;--</a>	 window     --&gt;|
	zs			       |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09zl%09%09%20%20%20%20%20%20%20%7C%3C--%09window%09%20%20%20--%3E%7C%0A%094zl%09%09%09%20%20%7C%3C--%09%20%20%20window%20%20%20%20%20--%3E%7C%0A%09zL%09%09%09%09%7C%3C--%09%20window%20%20%20%20%20--%3E%7C%0A%09zs%09%09%09%20%20%20%20%20%20%20%7C%3C--%09window%09%20%20%20--%3E%7C%0A%0A%0AMOVING%20WITH%20WRAP%20OFF%0D%60%60%60">&lt;--</a>	window	   --&gt;|</div>
<div class="old-help-para"><a name="_moving-with-wrap-off"></a><h3 class="help-heading">MOVING WITH WRAP OFF</h3></div>
<div class="old-help-para">When <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is off and the text has scrolled horizontally, you can use the
following commands to move the cursor to a character you can see.  Thus text
left and right of the window is ignored.  These never cause the text to
scroll:</div>
<div class="old-help-para">	g0		to first visible character in this line
	g^		to first non-blank visible character in this line
	gm		to middle of screen line
	gM		to middle of the text in this line
	g$		to last visible character in this line</div>
<div class="old-help-para">		|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09gM%09%09to%20middle%20of%20the%20text%20in%20this%20line%0A%09g%24%09%09to%20last%20visible%20character%20in%20this%20line%0A%0A%09%09%7C%3C--%09%20%20window%20%20%20%20%20--%3E%7C%0A%09some%20long%20%20%20%20text%2C%20part%20of%20which%20is%20visible%20in%20one%20line%20~%0A%09%09%20g0%20%20g%5E%20%20%20%20gm%09%20%20%20gM%20g%24%0A%0D%60%60%60">&lt;--</a>	  window     --&gt;|
<div class="help-column_heading">	some long    text, part of which is visible in one line</div>		 g0  g^    gm	   gM g$</div>
<div class="old-help-para"><h3 class="help-heading">BREAKING AT WORDS<span class="help-heading-tags">				<a name="edit-no-break"></a><span class="help-tag">edit-no-break</span></span></h3></div>
<div class="old-help-para">When preparing text for use by another program, you might have to make
paragraphs without a line break.  A disadvantage of using <a href="/neovim-docs-web/en/options#'nowrap'">'nowrap'</a> is that you
can't see the whole sentence you are working on.  When <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is on, words are
broken halfway, which makes them hard to read.
   A good solution for editing this kind of paragraph is setting the
<a href="/neovim-docs-web/en/options#'linebreak'">'linebreak'</a> option.  Vim then breaks lines at an appropriate place when
displaying the line.  The text in the file remains unchanged.
   Without <a href="/neovim-docs-web/en/options#'linebreak'">'linebreak'</a> text might look like this:</div>
<div class="old-help-para">	+---------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20Without%20'linebreak'%20text%20might%20look%20like%20this%3A%0A%0A%09%2B---------------------------------%2B%0A%09%7Cletter%20generation%20program%20for%20a%20b%7C%0A%09%7Cank.%20%20They%20wanted%20to%20send%20out%20a%20s%7C%0A%09%7Cpecial%2C%20personalized%20letter%20to%20th%7C%0A%09%7Ceir%20richest%201000%20customers.%20%20Unfo%7C%0D%60%60%60">letter</a> generation program for a b|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B---------------------------------%2B%0A%09%7Cletter%20generation%20program%20for%20a%20b%7C%0A%09%7Cank.%20%20They%20wanted%20to%20send%20out%20a%20s%7C%0A%09%7Cpecial%2C%20personalized%20letter%20to%20th%7C%0A%09%7Ceir%20richest%201000%20customers.%20%20Unfo%7C%0A%09%7Crtunately%20for%20the%20programmer%2C%20he%20%7C%0D%60%60%60">ank.</a>  They wanted to send out a s|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%2B---------------------------------%2B%0A%09%7Cletter%20generation%20program%20for%20a%20b%7C%0A%09%7Cank.%20%20They%20wanted%20to%20send%20out%20a%20s%7C%0A%09%7Cpecial%2C%20personalized%20letter%20to%20th%7C%0A%09%7Ceir%20richest%201000%20customers.%20%20Unfo%7C%0A%09%7Crtunately%20for%20the%20programmer%2C%20he%20%7C%0A%09%2B---------------------------------%2B%0D%60%60%60">pecial,</a> personalized letter to th|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cletter%20generation%20program%20for%20a%20b%7C%0A%09%7Cank.%20%20They%20wanted%20to%20send%20out%20a%20s%7C%0A%09%7Cpecial%2C%20personalized%20letter%20to%20th%7C%0A%09%7Ceir%20richest%201000%20customers.%20%20Unfo%7C%0A%09%7Crtunately%20for%20the%20programmer%2C%20he%20%7C%0A%09%2B---------------------------------%2B%0AAfter%3A%20%3E%0D%60%60%60">eir</a> richest 1000 customers.  Unfo|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cank.%20%20They%20wanted%20to%20send%20out%20a%20s%7C%0A%09%7Cpecial%2C%20personalized%20letter%20to%20th%7C%0A%09%7Ceir%20richest%201000%20customers.%20%20Unfo%7C%0A%09%7Crtunately%20for%20the%20programmer%2C%20he%20%7C%0A%09%2B---------------------------------%2B%0AAfter%3A%20%3E%0A%0D%60%60%60">rtunately</a> for the programmer, he |
	+---------------------------------+
After:<pre>:set linebreak</pre>
it looks like this:</div>
<div class="old-help-para">	+---------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0Dit%20looks%20like%20this%3A%0A%0A%09%2B---------------------------------%2B%0A%09%7Cletter%20generation%20program%20for%20a%20%20%7C%0A%09%7Cbank.%20%20They%20wanted%20to%20send%20out%20a%20%7C%0A%09%7Cspecial%2C%20personalized%20letter%20to%20%20%7C%0A%09%7Ctheir%20richest%201000%20customers.%20%20%20%20%7C%0D%60%60%60">letter</a> generation program for a  |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B---------------------------------%2B%0A%09%7Cletter%20generation%20program%20for%20a%20%20%7C%0A%09%7Cbank.%20%20They%20wanted%20to%20send%20out%20a%20%7C%0A%09%7Cspecial%2C%20personalized%20letter%20to%20%20%7C%0A%09%7Ctheir%20richest%201000%20customers.%20%20%20%20%7C%0A%09%7CUnfortunately%20for%20the%20programmer%2C%7C%0D%60%60%60">bank.</a>  They wanted to send out a |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%2B---------------------------------%2B%0A%09%7Cletter%20generation%20program%20for%20a%20%20%7C%0A%09%7Cbank.%20%20They%20wanted%20to%20send%20out%20a%20%7C%0A%09%7Cspecial%2C%20personalized%20letter%20to%20%20%7C%0A%09%7Ctheir%20richest%201000%20customers.%20%20%20%20%7C%0A%09%7CUnfortunately%20for%20the%20programmer%2C%7C%0A%09%2B---------------------------------%2B%0D%60%60%60">special,</a> personalized letter to  |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cletter%20generation%20program%20for%20a%20%20%7C%0A%09%7Cbank.%20%20They%20wanted%20to%20send%20out%20a%20%7C%0A%09%7Cspecial%2C%20personalized%20letter%20to%20%20%7C%0A%09%7Ctheir%20richest%201000%20customers.%20%20%20%20%7C%0A%09%7CUnfortunately%20for%20the%20programmer%2C%7C%0A%09%2B---------------------------------%2B%0A%0D%60%60%60">their</a> richest 1000 customers.    |
Unfortunately for the programmer,|
	+---------------------------------+</div>
<div class="old-help-para">Related options:
<a href="/neovim-docs-web/en/options#'breakat'">'breakat'</a> specifies the characters where a break can be inserted.
<a href="/neovim-docs-web/en/options#'showbreak'">'showbreak'</a> specifies a string to show at the start of broken line.
Set <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> to zero to avoid a paragraph to be split.</div>
<div class="old-help-para"><a name="_moving-by-visible-lines"></a><h3 class="help-heading">MOVING BY VISIBLE LINES</h3></div>
<div class="old-help-para">The "j" and "k" commands move to the next and previous lines.  When used on
a long line, this means moving a lot of screen lines at once.
   To move only one screen line, use the "gj" and "gk" commands.  When a line
doesn't wrap they do the same as "j" and "k".  When the line does wrap, they
move to a character displayed one line below or above.
   You might like to use these mappings, which bind these movement commands to
the cursor keys:<pre>:map &lt;Up&gt; gk
:map &lt;Down&gt; gj</pre>
TURNING A PARAGRAPH INTO ONE LINE			<a name="edit-paragraph-join"></a><code class="help-tag-right">edit-paragraph-join</code></div>
<div class="old-help-para">If you want to import text into a program like MS-Word, each paragraph should
be a single line.  If your paragraphs are currently separated with empty
lines, this is how you turn each paragraph into a single line:<pre>:g/./,/^$/join</pre>
That looks complicated.  Let's break it up in pieces:</div>
<div class="old-help-para">	:g/./		A ":global" command that finds all lines that contain
			at least one character.
	     ,/^$/	A range, starting from the current line (the non-empty
			line) until an empty line.
		  join	The ":join" command joins the range of lines together
			into one line.</div>
<div class="old-help-para">Starting with this text, containing eight lines broken at column 30:</div>
<div class="old-help-para">	+----------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0DStarting%20with%20this%20text%2C%20containing%20eight%20lines%20broken%20at%20column%2030%3A%0A%0A%09%2B----------------------------------%2B%0A%09%7CA%20letter%20generation%20program%09%20%20%20%7C%0A%09%7Cfor%20a%20bank.%20%20They%20wanted%20to%09%20%20%20%7C%0A%09%7Csend%20out%20a%20special%2C%09%09%20%20%20%7C%0A%09%7Cpersonalized%20letter.%09%09%20%20%20%7C%0D%60%60%60">A</a> letter generation program	   |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B----------------------------------%2B%0A%09%7CA%20letter%20generation%20program%09%20%20%20%7C%0A%09%7Cfor%20a%20bank.%20%20They%20wanted%20to%09%20%20%20%7C%0A%09%7Csend%20out%20a%20special%2C%09%09%20%20%20%7C%0A%09%7Cpersonalized%20letter.%09%09%20%20%20%7C%0A%09%7C%09%09%09%09%20%20%20%7C%0D%60%60%60">for</a> a bank.  They wanted to	   |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%2B----------------------------------%2B%0A%09%7CA%20letter%20generation%20program%09%20%20%20%7C%0A%09%7Cfor%20a%20bank.%20%20They%20wanted%20to%09%20%20%20%7C%0A%09%7Csend%20out%20a%20special%2C%09%09%20%20%20%7C%0A%09%7Cpersonalized%20letter.%09%09%20%20%20%7C%0A%09%7C%09%09%09%09%20%20%20%7C%0A%09%7CTo%20their%20richest%201000%09%09%20%20%20%7C%0D%60%60%60">send</a> out a special,		   |
personalized letter.		   |
	|				   |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Csend%20out%20a%20special%2C%09%09%20%20%20%7C%0A%09%7Cpersonalized%20letter.%09%09%20%20%20%7C%0A%09%7C%09%09%09%09%20%20%20%7C%0A%09%7CTo%20their%20richest%201000%09%09%20%20%20%7C%0A%09%7Ccustomers.%20%20Unfortunately%20for%09%20%20%20%7C%0A%09%7Cthe%20programmer%2C%09%09%20%20%20%7C%0A%09%2B----------------------------------%2B%0D%60%60%60">To</a> their richest 1000		   |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cpersonalized%20letter.%09%09%20%20%20%7C%0A%09%7C%09%09%09%09%20%20%20%7C%0A%09%7CTo%20their%20richest%201000%09%09%20%20%20%7C%0A%09%7Ccustomers.%20%20Unfortunately%20for%09%20%20%20%7C%0A%09%7Cthe%20programmer%2C%09%09%20%20%20%7C%0A%09%2B----------------------------------%2B%0A%0D%60%60%60">customers.</a>  Unfortunately for	   |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C%09%09%09%09%20%20%20%7C%0A%09%7CTo%20their%20richest%201000%09%09%20%20%20%7C%0A%09%7Ccustomers.%20%20Unfortunately%20for%09%20%20%20%7C%0A%09%7Cthe%20programmer%2C%09%09%20%20%20%7C%0A%09%2B----------------------------------%2B%0A%0AYou%20end%20up%20with%20two%20lines%3A%0D%60%60%60">the</a> programmer,		   |
	+----------------------------------+</div>
<div class="old-help-para">You end up with two lines:</div>
<div class="old-help-para">	+----------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0DYou%20end%20up%20with%20two%20lines%3A%0A%0A%09%2B----------------------------------%2B%0A%09%7CA%20letter%20generation%20program%20for%20a%20%7C%0A%09%7Cbank.%09They%20wanted%20to%20send%20out%20a%20s%7C%0A%09%7Cpecial%2C%20personalized%20letter.%09%20%20%20%7C%0A%09%7CTo%20their%20richest%201000%20customers.%20%20%7C%0D%60%60%60">A</a> letter generation program for a |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B----------------------------------%2B%0A%09%7CA%20letter%20generation%20program%20for%20a%20%7C%0A%09%7Cbank.%09They%20wanted%20to%20send%20out%20a%20s%7C%0A%09%7Cpecial%2C%20personalized%20letter.%09%20%20%20%7C%0A%09%7CTo%20their%20richest%201000%20customers.%20%20%7C%0A%09%7CUnfortunately%20for%20the%20programmer%2C%20%7C%0D%60%60%60">bank.</a>	They wanted to send out a s|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%2B----------------------------------%2B%0A%09%7CA%20letter%20generation%20program%20for%20a%20%7C%0A%09%7Cbank.%09They%20wanted%20to%20send%20out%20a%20s%7C%0A%09%7Cpecial%2C%20personalized%20letter.%09%20%20%20%7C%0A%09%7CTo%20their%20richest%201000%20customers.%20%20%7C%0A%09%7CUnfortunately%20for%20the%20programmer%2C%20%7C%0A%09%2B----------------------------------%2B%0D%60%60%60">pecial,</a> personalized letter.	   |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_25.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_25.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7CA%20letter%20generation%20program%20for%20a%20%7C%0A%09%7Cbank.%09They%20wanted%20to%20send%20out%20a%20s%7C%0A%09%7Cpecial%2C%20personalized%20letter.%09%20%20%20%7C%0A%09%7CTo%20their%20richest%201000%20customers.%20%20%7C%0A%09%7CUnfortunately%20for%20the%20programmer%2C%20%7C%0A%09%2B----------------------------------%2B%0A%0D%60%60%60">To</a> their richest 1000 customers.  |
Unfortunately for the programmer, |
	+----------------------------------+</div>
<div class="old-help-para">Note that this doesn't work when the separating line is blank but not empty;
when it contains spaces and/or tabs.  This command does work with blank lines:
<pre>:g/\S/,/^\s*$/join</pre>
This still requires a blank or empty line at the end of the file for the last
paragraph to be joined.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="25.5"></a><span class="help-tag">25.5</span>  	Editing tables</span></h2></div>
<div class="old-help-para">Suppose you are editing a table with four columns:</div>
<div class="old-help-para"><div class="help-column_heading">	nice table	  test 1	test 2	    test 3</div><div class="help-column_heading">	input A		  0.534</div><div class="help-column_heading">	input B		  0.913</div></div>
<div class="old-help-para">You need to enter numbers in the third column.  You could move to the second
line, use "A", enter a lot of spaces and type the text.
   For this kind of editing there is a special option:<pre>set virtualedit=all</pre>
Now you can move the cursor to positions where there isn't any text.  This is
called "virtual space".  Editing a table is a lot easier this way.
   Move the cursor by searching for the header of the last column:<pre>/test 3</pre>
Now press "j" and you are right where you can enter the value for "input A".
Typing "0.693" results in:</div>
<div class="old-help-para"><div class="help-column_heading">	nice table	  test 1     test 2	 test 3</div><div class="help-column_heading">	input A		  0.534			 0.693</div><div class="help-column_heading">	input B		  0.913</div></div>
<div class="old-help-para">Vim has automatically filled the gap in front of the new text for you.  Now,
to enter the next field in this column use "Bj".  "B" moves back to the start
of a white space separated word.  Then "j" moves to the place where the next
field can be entered.</div>
<div class="old-help-para">	Note:
	You can move the cursor anywhere in the display, also beyond the end
	of a line.  But Vim will not insert spaces there, until you insert a
	character in that position.</div>
<div class="old-help-para">COPYING A COLUMN</div>
<div class="old-help-para">You want to add a column, which should be a copy of the third column and
placed before the "test 1" column.  Do this in seven steps:
1.  Move the cursor to the left upper corner of this column, e.g., with
    "/test 3".
2.  Press <code>CTRL-V</code> to start blockwise Visual mode.
3.  Move the cursor down two lines with "2j".  You are now in "virtual space":
    the "input B" line of the "test 3" column.
4.  Move the cursor right, to include the whole column in the selection, plus
    the space that you want between the columns.  "9l" should do it.
5.  Yank the selected rectangle with "y".
6.  Move the cursor to "test 1", where the new column must be placed.
7.  Press "P".</div>
<div class="old-help-para">The result should be:</div>
<div class="old-help-para"><div class="help-column_heading">	nice table	  test 3    test 1     test 2	   test 3</div><div class="help-column_heading">	input A		  0.693     0.534		   0.693</div><div class="help-column_heading">	input B			    0.913</div></div>
<div class="old-help-para">Notice that the whole "test 1" column was shifted right, also the line where
the "test 3" column didn't have text.</div>
<div class="old-help-para">Go back to non-virtual cursor movements with:<pre>:set virtualedit=</pre>
<a name="_virtual-replace-mode"></a><h3 class="help-heading">VIRTUAL REPLACE MODE</h3></div>
<div class="old-help-para">The disadvantage of using <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> is that it "feels" different.  You
can't recognize tabs or spaces beyond the end of line when moving the cursor
around.  Another method can be used: Virtual Replace mode.
   Suppose you have a line in a table that contains both tabs and other
characters.  Use "rx" on the first tab:</div>
<div class="old-help-para"><div class="help-column_heading">	inp	0.693   0.534	0.693</div></div>
<div class="old-help-para">	       |
	   rx  |
	       V</div>
<div class="old-help-para"><div class="help-column_heading">	inpx0.693   0.534	0.693</div></div>
<div class="old-help-para">The layout is messed up.  To avoid that, use the "gr" command:</div>
<div class="old-help-para"><div class="help-column_heading">	inp	0.693   0.534	0.693</div></div>
<div class="old-help-para">	       |
	  grx  |
	       V</div>
<div class="old-help-para"><div class="help-column_heading">	inpx	0.693   0.534	0.693</div></div>
<div class="old-help-para">What happens is that the "gr" command makes sure the new character takes the
right amount of screen space.  Extra spaces or tabs are inserted to fill the
gap.  Thus what actually happens is that a tab is replaced by "x" and then
blanks added to make the text after it keep its place.  In this case a
tab is inserted.
   When you need to replace more than one character, you use the "R" command
to go to Replace mode (see <a href="/neovim-docs-web/en/usr_04#04.9">04.9</a>).  This messes up the layout and replaces
the wrong characters:</div>
<div class="old-help-para"><div class="help-column_heading">	inp	0	0.534	0.693</div></div>
<div class="old-help-para">		|
	 R0.786 |
		V</div>
<div class="old-help-para"><div class="help-column_heading">	inp	0.78634	0.693</div></div>
<div class="old-help-para">The "gR" command uses Virtual Replace mode.  This preserves the layout:</div>
<div class="old-help-para"><div class="help-column_heading">	inp	0	0.534	0.693</div></div>
<div class="old-help-para">		|
	gR0.786 |
		V</div>
<div class="old-help-para"><div class="help-column_heading">	inp	0.786	0.534	0.693</div></div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_26#usr_26.txt">usr_26.txt</a>  Repeating</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  