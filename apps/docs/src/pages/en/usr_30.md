---
title:  Usr_30
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_30.txt"></a><a name="30.1"></a><h1> Usr_30</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_30.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			      Editing programs</div>
<div class="old-help-para">Vim has various commands that aid in writing computer programs.  Compile a
program and directly jump to reported errors.  Automatically set the indent
for many languages and format comments.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_30#30.1">30.1</a>  	Compiling
<a href="/neovim-docs-web/en/usr_30#30.2">30.2</a>  	Indenting C files
<a href="/neovim-docs-web/en/usr_30#30.3">30.3</a>  	Automatic indenting
<a href="/neovim-docs-web/en/usr_30#30.4">30.4</a>  	Other indenting
<a href="/neovim-docs-web/en/usr_30#30.5">30.5</a>  	Tabs and spaces
<a href="/neovim-docs-web/en/usr_30#30.6">30.6</a>  	Formatting comments</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_31#usr_31.txt">usr_31.txt</a>  Exploiting the GUI
 Previous chapter: <a href="/neovim-docs-web/en/usr_29#usr_29.txt">usr_29.txt</a>  Moving through programs
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Compiling</h2></div>
<div class="old-help-para">Vim has a set of so called "quickfix" commands.  They enable you to compile a
program from within Vim and then go through the errors generated and fix them
(hopefully).  You can then recompile and fix any new errors that are found
until finally your program compiles without any error.</div>
<div class="old-help-para">The following command runs the program "make" (supplying it with any argument
you give) and captures the results:<pre>:make {arguments}</pre>
If errors were generated, they are captured and the editor positions you where
the first error occurred.
   Take a look at an example ":make" session.  (Typical :make sessions generate
far more errors and fewer stupid ones.)  After typing ":make" the screen looks
like this:</div>
<div class="old-help-para"><div class="help-column_heading">	:!make | &amp;tee /tmp/vim215953.err</div><div class="help-column_heading">	gcc -g -Wall -o prog main.c sub.c</div><div class="help-column_heading">	main.c: In functionmain:</div><div class="help-column_heading">	main.c:6: too many arguments to function 'do_sub'</div><div class="help-column_heading">	main.c: At top level:</div><div class="help-column_heading">	main.c:10: parse error before '}'</div>make: *** [prog] Error 1</div>
<div class="old-help-para"><div class="help-column_heading">	2 returned</div><div class="help-column_heading">	"main.c" 11L, 111C</div><div class="help-column_heading">	(3 of 6): too many arguments to function 'do_sub'</div><div class="help-column_heading">	Press ENTER or type command to continue</div></div>
<div class="old-help-para">From this you can see that you have errors in the file "main.c".  When you
press <code>&lt;Enter&gt;</code>, Vim displays the file "main.c", with the cursor positioned on
line 6, the first line with an error.  You did not need to specify the file or
the line number, Vim knew where to go by looking in the error messages.</div>
<div class="old-help-para">		+---------------------------------------------------+
		|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_30.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_30.html%0D%0DContext%3A%0D%0D%60%60%60%0Dthe%20line%20number%2C%20Vim%20knew%20where%20to%20go%20by%20looking%20in%20the%20error%20messages.%0A%0A%09%09%2B---------------------------------------------------%2B%0A%09%09%7Cint%20main()%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%7B%09%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%09int%20i%3D3%3B%09%09%09%09%20%20%20%20%7C%0A%20%20%20%20%20%20cursor%20-%3E%20%7C%09do_sub(%22foo%22)%3B%09%09%09%09%20%20%20%20%7C%0D%60%60%60">int</a> main()					    |
		|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_30.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_30.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%09%2B---------------------------------------------------%2B%0A%09%09%7Cint%20main()%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%7B%09%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%09int%20i%3D3%3B%09%09%09%09%20%20%20%20%7C%0A%20%20%20%20%20%20cursor%20-%3E%20%7C%09do_sub(%22foo%22)%3B%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%09%2B%2Bi%3B%09%09%09%09%09%20%20%20%20%7C%0D%60%60%60">{</a>						    |
		|	int i=3;				    |
      cursor -&gt; |	do_sub("foo");				    |
		|	++i;					    |
		|	return (0);				    |
		|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_30.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_30.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%20%20%20cursor%20-%3E%20%7C%09do_sub(%22foo%22)%3B%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%09%2B%2Bi%3B%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%09return%20(0)%3B%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%7D%09%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%7D%09%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%20~%09%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C(3%20of%2012)%3A%20too%20many%20arguments%20to%20function%20'do_sub'%20%7C%0D%60%60%60">}</a>						    |
		|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_30.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_30.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%7C%09%2B%2Bi%3B%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%09return%20(0)%3B%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%7D%09%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%7D%09%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%20~%09%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C(3%20of%2012)%3A%20too%20many%20arguments%20to%20function%20'do_sub'%20%7C%0A%09%09%2B---------------------------------------------------%2B%0D%60%60%60">}</a>						    |
		| ~						    |
		|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_30.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_30.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%7C%7D%09%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%7D%09%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C%20~%09%09%09%09%09%09%20%20%20%20%7C%0A%09%09%7C(3%20of%2012)%3A%20too%20many%20arguments%20to%20function%20'do_sub'%20%7C%0A%09%09%2B---------------------------------------------------%2B%0A%0AThe%20following%20command%20goes%20to%20where%20the%20next%20error%20occurs%3A%20%3E%0D%60%60%60">(3</a> of 12): too many arguments to function 'do_sub' |
		+---------------------------------------------------+</div>
<div class="old-help-para">The following command goes to where the next error occurs:<pre>:cnext</pre>
Vim jumps to line 10, the last line in the file, where there is an extra '}'.
   When there is not enough room, Vim will shorten the error message.  To see
the whole message use:<pre>:cc</pre>
You can get an overview of all the error messages with the ":clist" command.
The output looks like this:<pre>:clist</pre></div>
<div class="old-help-para"><div class="help-column_heading">	3 main.c: 6:too many arguments to function 'do_sub'</div><div class="help-column_heading">	5 main.c: 10:parse error before '}'</div></div>
<div class="old-help-para">Only the lines where Vim recognized a file name and line number are listed
here.  It assumes those are the interesting lines and the rest is just boring
messages.  However, sometimes unrecognized lines do contain something you want
to see.  Output from the linker, for example, about an undefined function.
To see all the messages add a "!" to the command:<pre>:clist!</pre></div>
<div class="old-help-para"><div class="help-column_heading">	1 gcc -g -Wall -o prog main.c sub.c</div><div class="help-column_heading">	2 main.c: In functionmain:</div><div class="help-column_heading">	3 main.c:6: too many arguments to function 'do_sub'</div><div class="help-column_heading">	4 main.c: At top level:</div><div class="help-column_heading">	5 main.c:10: parse error before '}'</div>6 make: *** [prog] Error 1</div>
<div class="old-help-para">Vim will highlight the current error.  To go back to the previous error, use:
<pre>:cprevious</pre>
Other commands to move around in the error list:</div>
<div class="old-help-para">	:cfirst		to first error
	:clast		to last error
	:cc 3		to error nr 3</div>
<div class="old-help-para"><a name="_using-another-compiler"></a><h3 class="help-heading">USING ANOTHER COMPILER</h3></div>
<div class="old-help-para">The name of the program to run when the ":make" command is executed is defined
by the <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> option.  Usually this is set to "make", but Visual C++ users
should set this to "nmake" by executing the following command:<pre>:set makeprg=nmake</pre>
You can also include arguments in this option.  Special characters need to
be escaped with a backslash.  Example:<pre>:set makeprg=nmake\ -f\ project.mak</pre>
You can include special Vim keywords in the command specification.  The %
character expands to the name of the current file.  So if you execute the
command:<pre>:set makeprg=make\ %:S</pre>
When you are editing main.c, then ":make" executes the following command:<pre>make main.c</pre>
This is not too useful, so you will refine the command a little and use the :r
(root) modifier:<pre>:set makeprg=make\ %:r:S.o</pre>
Now the command executed is as follows:<pre>make main.o</pre>
More about these modifiers here: <a href="/neovim-docs-web/en/cmdline#filename-modifiers">filename-modifiers</a>.</div>
<div class="old-help-para"><a name="_old-error-lists"></a><h3 class="help-heading">OLD ERROR LISTS</h3></div>
<div class="old-help-para">Suppose you ":make" a program.  There is a warning message in one file and an
error message in another.  You fix the error and use ":make" again to check if
it was really fixed.  Now you want to look at the warning message.  It doesn't
show up in the last error list, since the file with the warning wasn't
compiled again.  You can go back to the previous error list with:<pre>:colder</pre>
Then use ":clist" and ":cc <code>{nr}</code>" to jump to the place with the warning.
   To go forward to the next error list:<pre>:cnewer</pre>
Vim remembers ten error lists.</div>
<div class="old-help-para"><a name="_switching-compilers"></a><h3 class="help-heading">SWITCHING COMPILERS</h3></div>
<div class="old-help-para">You have to tell Vim what format the error messages are that your compiler
produces.  This is done with the <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> option.  The syntax of this
option is quite complicated and it can be made to fit almost any compiler.
You can find the explanation here: <a href="/neovim-docs-web/en/quickfix#errorformat">errorformat</a>.</div>
<div class="old-help-para">You might be using various different compilers.  Setting the <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> option,
and especially the <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> each time is not easy.  Vim offers a simple
method for this.  For example, to switch to using the Microsoft Visual C++
compiler:<pre>:compiler msvc</pre>
This will find the Vim script for the "msvc" compiler and set the appropriate
options.
   You can write your own compiler files.  See <a href="/neovim-docs-web/en/usr_41#write-compiler-plugin">write-compiler-plugin</a>.</div>
<div class="old-help-para"><a name="_output-redirection"></a><h3 class="help-heading">OUTPUT REDIRECTION</h3></div>
<div class="old-help-para">The ":make" command redirects the output of the executed program to an error
file.  How this works depends on various things, such as the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a>.  If your
":make" command doesn't capture the output, check the <a href="/neovim-docs-web/en/options#'makeef'">'makeef'</a> and
<a href="/neovim-docs-web/en/options#'shellpipe'">'shellpipe'</a> options.  The <a href="/neovim-docs-web/en/options#'shellquote'">'shellquote'</a> and <a href="/neovim-docs-web/en/options#'shellxquote'">'shellxquote'</a> options might also
matter.</div>
<div class="old-help-para">In case you can't get ":make" to redirect the file for you, an alternative is
to compile the program in another window and redirect the output into a file.
Then have Vim read this file with:<pre>:cfile {filename}</pre>
Jumping to errors will work like with the ":make" command.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="30.2"></a><span class="help-tag">30.2</span>  	Indenting C style text</span></h2></div>
<div class="old-help-para">A program is much easier to understand when the lines have been properly
indented.  Vim offers various ways to make this less work.  For C or C style
programs like Java or C++, set the <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> option.  Vim knows a lot about C
programs and will try very hard to automatically set the indent for you.  Set
the <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> option to the amount of spaces you want for a deeper level.
Four spaces will work fine.  One ":set" command will do it:<pre>:set cindent shiftwidth=4</pre>
With this option enabled, when you type something such as "if (x)", the next
line will automatically be indented an additional level.</div>
<div class="old-help-para">				    if (flag)
	Automatic indent   ---&gt;		do_the_work();
	Automatic unindent &lt;--	    if (other_flag) {
	Automatic indent   ---&gt;		do_file();
	keep indent			do_some_more();
	Automatic unindent &lt;--	    }</div>
<div class="old-help-para">When you type something in curly braces ({}), the text will be indented at the
start and unindented at the end.  The unindenting will happen after typing the
'}', since Vim can't guess what you are going to type.</div>
<div class="old-help-para">One side effect of automatic indentation is that it helps you catch errors in
your code early.  When you type a } to finish a function, only to find that
the automatic indentation gives it more indent than what you expected, there
is probably a } missing.  Use the "%" command to find out which { matches the
} you typed.
   A missing ) and ; also cause extra indent.  Thus if you get more white
space than you would expect, check the preceding lines.</div>
<div class="old-help-para">When you have code that is badly formatted, or you inserted and deleted lines,
you need to re-indent the lines.  The "=" operator does this.  The simplest
form is:<pre>==</pre>
This indents the current line.  Like with all operators, there are three ways
to use it.  In Visual mode "=" indents the selected lines.  A useful text
object is "a{".  This selects the current {} block.  Thus, to re-indent the
code block the cursor is in:<pre>=a{</pre>
I you have really badly indented code, you can re-indent the whole file with:
<pre>gg=G</pre>
However, don't do this in files that have been carefully indented manually.
The automatic indenting does a good job, but in some situations you might want
to overrule it.</div>
<div class="old-help-para"><a name="_setting-indent-style"></a><h3 class="help-heading">SETTING INDENT STYLE</h3></div>
<div class="old-help-para">Different people have different styles of indentation.  By default Vim does a
pretty good job of indenting in a way that 90% of programmers do.  There are
different styles, however; so if you want to, you can customize the
indentation style with the <a href="/neovim-docs-web/en/options#'cinoptions'">'cinoptions'</a> option.
   By default <a href="/neovim-docs-web/en/options#'cinoptions'">'cinoptions'</a> is empty and Vim uses the default style.  You can
add various items where you want something different.  For example, to make
curly braces be placed like this:</div>
<div class="old-help-para"><div class="help-column_heading">	if (flag)</div><div class="help-column_heading">	  {</div><div class="help-column_heading">	    i = 8;</div><div class="help-column_heading">	    j = 0;</div><div class="help-column_heading">	  }</div></div>
<div class="old-help-para">Use this command:<pre>:set cinoptions+={2</pre>
There are many of these items.  See <a href="/neovim-docs-web/en/indent#cinoptions-values">cinoptions-values</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="30.3"></a><span class="help-tag">30.3</span>  	Automatic indenting</span></h2></div>
<div class="old-help-para">You don't want to switch on the <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> option manually every time you edit
a C file.  This is how you make it work automatically:<pre>:filetype indent on</pre>
Actually, this does a lot more than switching on <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> for C files.  First
of all, it enables detecting the type of a file.  That's the same as what is
used for syntax highlighting.
   When the filetype is known, Vim will search for an indent file for this
type of file.  The Vim distribution includes a number of these for various
programming languages.  This indent file will then prepare for automatic
indenting specifically for this file.</div>
<div class="old-help-para">If you don't like the automatic indenting, you can switch it off again:<pre>:filetype indent off</pre>
If you don't like the indenting for one specific type of file, this is how you
avoid it.  Create a file with just this one line:<pre>:let b:did_indent = 1</pre>
Now you need to write this in a file with a specific name:</div>
<div class="old-help-para">	<code>{directory}</code>/indent/{filetype}.vim</div>
<div class="old-help-para">The <code>{filetype}</code> is the name of the file type, such as "cpp" or "java".  You can
see the exact name that Vim detected with this command:<pre>:set filetype</pre>
In this file the output is:</div>
<div class="old-help-para"><div class="help-column_heading">	filetype=help</div></div>
<div class="old-help-para">Thus you would use "help" for <code>{filetype}</code>.
   For the <code>{directory}</code> part you need to use your runtime directory.  Look at
the output of this command:<pre>set runtimepath</pre>
Now use the first item, the name before the first comma.  Thus if the output
looks like this:</div>
<div class="old-help-para"><div class="help-column_heading">	runtimepath=~/.config/nvim,/usr/local/share/vim/vim60/runtime,~/.config/nvim/after</div></div>
<div class="old-help-para">You use "~/.config/nvim" for <code>{directory}</code>.  Then the resulting file name is:</div>
<div class="old-help-para"><div class="help-column_heading">	~/.config/nvim/indent/help.vim</div></div>
<div class="old-help-para">Instead of switching the indenting off, you could write your own indent file.
How to do that is explained here: <a href="/neovim-docs-web/en/indent#indent-expression">indent-expression</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="30.4"></a><span class="help-tag">30.4</span>  	Other indenting</span></h2></div>
<div class="old-help-para">The simplest form of automatic indenting is with the <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> option.
It uses the indent from the previous line.  A bit smarter is the <a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a>
option.  This is useful for languages where no indent file is available.
<a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a> is not as smart as <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a>, but smarter than <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a>.
   With <a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a> set, an extra level of indentation is added for each {
and removed for each }.  An extra level of indentation will also be added for
any of the words in the <a href="/neovim-docs-web/en/options#'cinwords'">'cinwords'</a> option.  Lines that begin with # are
treated specially: all indentation is removed.  This is done so that
preprocessor directives will all start in column 1.  The indentation is
restored for the next line.</div>
<div class="old-help-para"><a name="_correcting-indents"></a><h3 class="help-heading">CORRECTING INDENTS</h3></div>
<div class="old-help-para">When you are using <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> or <a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a> to get the indent of the
previous line, there will be many times when you need to add or remove one
<a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> worth of indent.  A quick way to do this is using the <code>CTRL-D</code> and
CTRL-T commands in Insert mode.
   For example, you are typing a shell script that is supposed to look like
this:</div>
<div class="old-help-para"><div class="help-column_heading">	if test -n a; then</div><div class="help-column_heading">	   echo a</div><div class="help-column_heading">	   echo "-------"</div><div class="help-column_heading">	fi</div></div>
<div class="old-help-para">Start off by setting these options:<pre>:set autoindent shiftwidth=3</pre>
You start by typing the first line, <code>&lt;Enter&gt;</code> and the start of the second line:</div>
<div class="old-help-para"><div class="help-column_heading">	if test -n a; then</div><div class="help-column_heading">	echo</div></div>
<div class="old-help-para">Now you see that you need an extra indent.  Type <code>CTRL-T</code>.  The result:</div>
<div class="old-help-para"><div class="help-column_heading">	if test -n a; then</div><div class="help-column_heading">	   echo</div></div>
<div class="old-help-para">The <code>CTRL-T</code> command, in Insert mode, adds one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> to the indent, no
matter where in the line you are.
   You continue typing the second line, <code>&lt;Enter&gt;</code> and the third line.  This time
the indent is OK.  Then <code>&lt;Enter&gt;</code> and the last line.  Now you have this:</div>
<div class="old-help-para"><div class="help-column_heading">	if test -n a; then</div><div class="help-column_heading">	   echo a</div><div class="help-column_heading">	   echo "-------"</div><div class="help-column_heading">	   fi</div></div>
<div class="old-help-para">To remove the superfluous indent in the last line press <code>CTRL-D</code>.  This deletes
one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> worth of indent, no matter where you are in the line.
   When you are in Normal mode, you can use the "&gt;&gt;" and "&lt;&lt;" commands to
shift lines.  "&gt;" and "&lt;" are operators, thus you have the usual three ways to
specify the lines you want to indent.  A useful combination is:<pre>&gt;i{</pre>
This adds one indent to the current block of lines, inside {}.  The { and }
lines themselves are left unmodified.  "&gt;a{" includes them.  In this example
the cursor is on "printf":</div>
<div class="old-help-para">	original text		after "&gt;i{"		after "&gt;a{"</div>
<div class="old-help-para"><div class="help-column_heading">	if (flag)		if (flag)		if (flag)</div><div class="help-column_heading">	{			{			    {</div><div class="help-column_heading">	printf("yes");		    printf("yes");	    printf("yes");</div><div class="help-column_heading">	flag = 0;		    flag = 0;		    flag = 0;</div><div class="help-column_heading">	}			}			    }</div></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="30.5"></a><span class="help-tag">30.5</span>  	Tabs and spaces</span></h2></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> is set to eight by default.  Although you can change it, you quickly
run into trouble later.  Other programs won't know what tabstop value you
used.  They probably use the default value of eight, and your text suddenly
looks very different.  Also, most printers use a fixed tabstop value of eight.
Thus it's best to keep <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> alone.  (If you edit a file which was written
with a different tabstop setting, see <a href="/neovim-docs-web/en/usr_25#25.3">25.3</a> for how to fix that.)
   For indenting lines in a program, using a multiple of eight spaces makes
you quickly run into the right border of the window.  Using a single space
doesn't provide enough visual difference.  Many people prefer to use four
spaces, a good compromise.
   Since a <code>&lt;Tab&gt;</code> is eight spaces and you want to use an indent of four spaces,
you can't use a <code>&lt;Tab&gt;</code> character to make your indent.  There are two ways to
handle this:</div>
<div class="old-help-para">1.  Use a mix of <code>&lt;Tab&gt;</code> and space characters.  Since a <code>&lt;Tab&gt;</code> takes the place of
    eight spaces, you have fewer characters in your file.  Inserting a <code>&lt;Tab&gt;</code>
    is quicker than eight spaces.  Backspacing works faster as well.</div>
<div class="old-help-para">2.  Use spaces only.  This avoids the trouble with programs that use a
    different tabstop value.</div>
<div class="old-help-para">Fortunately, Vim supports both methods quite well.</div>
<div class="old-help-para"><a name="_spaces-and-tabs"></a><h3 class="help-heading">SPACES AND TABS</h3></div>
<div class="old-help-para">If you are using a combination of tabs and spaces, you just edit normally.
The Vim defaults do a fine job of handling things.
   You can make life a little easier by setting the <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> option.
This option tells Vim to make the <code>&lt;Tab&gt;</code> key look and feel as if tabs were set
at the value of <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a>, but actually use a combination of tabs and
spaces.
   After you execute the following command, every time you press the <code>&lt;Tab&gt;</code> key
the cursor moves to the next 4-column boundary:<pre>:set softtabstop=4</pre>
When you start in the first column and press <code>&lt;Tab&gt;</code>, you get 4 spaces inserted
in your text.  The second time, Vim takes out the 4 spaces and puts in a <code>&lt;Tab&gt;</code>
(thus taking you to column 8).  Thus Vim uses as many <code>&lt;Tab&gt;</code>s as possible, and
then fills up with spaces.
   When backspacing it works the other way around.  A <code>&lt;BS&gt;</code> will always delete
the amount specified with <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a>.  Then <code>&lt;Tab&gt;</code>s are used as many as
possible and spaces to fill the gap.
   The following shows what happens pressing <code>&lt;Tab&gt;</code> a few times, and then using
<code>&lt;BS&gt;</code>.  A "." stands for a space and "-------&gt;" for a <code>&lt;Tab&gt;</code>.</div>
<div class="old-help-para"><div class="help-column_heading">	type			  result</div>	<code>&lt;Tab&gt;</code>			  ....
	<code>&lt;Tab&gt;</code><code>&lt;Tab&gt;</code>		  -------&gt;
	<code>&lt;Tab&gt;</code><code>&lt;Tab&gt;</code><code>&lt;Tab&gt;</code>		  -------&gt;....
	<code>&lt;Tab&gt;</code><code>&lt;Tab&gt;</code><code>&lt;Tab&gt;</code><code>&lt;BS&gt;</code>	  -------&gt;
	<code>&lt;Tab&gt;</code><code>&lt;Tab&gt;</code><code>&lt;Tab&gt;</code><code>&lt;BS&gt;</code><code>&lt;BS&gt;</code>   ....</div>
<div class="old-help-para">An alternative is to use the <a href="/neovim-docs-web/en/options#'smarttab'">'smarttab'</a> option.  When it's set, Vim uses
<a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> for a <code>&lt;Tab&gt;</code> typed in the indent of a line, and a real <code>&lt;Tab&gt;</code> when
typed after the first non-blank character.  However, <code>&lt;BS&gt;</code> doesn't work like
with <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a>.</div>
<div class="old-help-para"><a name="_just-spaces"></a><h3 class="help-heading">JUST SPACES</h3></div>
<div class="old-help-para">If you want absolutely no tabs in your file, you can set the <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a>
option:<pre>:set expandtab</pre>
When this option is set, the <code>&lt;Tab&gt;</code> key inserts a series of spaces.  Thus you
get the same amount of white space as if a <code>&lt;Tab&gt;</code> character was inserted, but
there isn't a real <code>&lt;Tab&gt;</code> character in your file.
   The backspace key will delete each space by itself.  Thus after typing one
<code>&lt;Tab&gt;</code> you have to press the <code>&lt;BS&gt;</code> key up to eight times to undo it.  If you are
in the indent, pressing <code>CTRL-D</code> will be a lot quicker.</div>
<div class="old-help-para"><a name="_changing-tabs-in-spaces-(and-back)"></a><h3 class="help-heading">CHANGING TABS IN SPACES (AND BACK)</h3></div>
<div class="old-help-para">Setting <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> does not affect any existing tabs.  In other words, any
tabs in the document remain tabs.  If you want to convert tabs to spaces, use
the ":retab" command.  Use these commands:<pre>:set expandtab
:%retab</pre>
Now Vim will have changed all indents to use spaces instead of tabs.  However,
all tabs that come after a non-blank character are kept.  If you want these to
be converted as well, add a !:<pre>:%retab!</pre>
This is a little bit dangerous, because it can also change tabs inside a
string.  To check if these exist, you could use this:<pre>/"[^"\t]*\t[^"]*"</pre>
It's recommended not to use hard tabs inside a string.  Replace them with
"\t" to avoid trouble.</div>
<div class="old-help-para">The other way around works just as well:<pre>:set noexpandtab
:%retab!</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="30.6"></a><span class="help-tag">30.6</span>  	Formatting comments</span></h2></div>
<div class="old-help-para">One of the great things about Vim is that it understands comments.  You can
ask Vim to format a comment and it will do the right thing.
   Suppose, for example, that you have the following comment:</div>
<div class="old-help-para"><div class="help-column_heading">	/*</div><div class="help-li" style=""> This is a test ~
</div><div class="help-li" style=""> of the text formatting. ~
/ ~
</div></div>
<div class="old-help-para">You then ask Vim to format it by positioning the cursor at the start of the
comment and type:<pre>gq]/</pre>
"gq" is the operator to format text.  "]/" is the motion that takes you to the
end of a comment.  The result is:</div>
<div class="old-help-para"><div class="help-column_heading">	/*</div><div class="help-li" style=""> This is a test of the text formatting. ~
/ ~
</div></div>
<div class="old-help-para">Notice that Vim properly handled the beginning of each line.
  An alternative is to select the text that is to be formatted in Visual mode
and type "gq".</div>
<div class="old-help-para">To add a new line to the comment, position the cursor on the middle line and
press "o".  The result looks like this:</div>
<div class="old-help-para"><div class="help-column_heading">	/*</div><div class="help-li" style=""> This is a test of the text formatting. ~
</div><div class="help-li" style=""> ~
/ ~
</div></div>
<div class="old-help-para">Vim has automatically inserted a star and a space for you.  Now you can type
the comment text.  When it gets longer than <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>, Vim will break the
line.  Again, the star is inserted automatically:</div>
<div class="old-help-para"><div class="help-column_heading">	/*</div><div class="help-li" style=""> This is a test of the text formatting. ~
</div><div class="help-li" style=""> Typing a lot of text here will make Vim ~
</div><div class="help-li" style=""> break ~
/ ~
</div></div>
<div class="old-help-para">For this to work some flags must be present in <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a>:</div>
<div class="old-help-para">	r	insert the star when typing <code>&lt;Enter&gt;</code> in Insert mode
	o	insert the star when using "o" or "O" in Normal mode
	c	break comment text according to <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a></div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/change#fo-table">fo-table</a> for more flags.</div>
<div class="old-help-para">DEFINING A COMMENT</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'comments'">'comments'</a> option defines what a comment looks like.  Vim distinguishes
between a single-line comment and a comment that has a different start, end
and middle part.
   Many single-line comments start with a specific character.  In C++ // is
used, in Makefiles #, in Vim scripts ".  For example, to make Vim understand
C++ comments:<pre>:set comments=://</pre>
The colon separates the flags of an item from the text by which the comment is
recognized.  The general form of an item in <a href="/neovim-docs-web/en/options#'comments'">'comments'</a> is:</div>
<div class="old-help-para">	<code>{flags}</code>:{text}</div>
<div class="old-help-para">The <code>{flags}</code> part can be empty, as in this case.
   Several of these items can be concatenated, separated by commas.  This
allows recognizing different types of comments at the same time.  For example,
let's edit an e-mail message.  When replying, the text that others wrote is
preceded with "&gt;" and "!" characters.  This command would work:<pre>:set comments=n:&gt;,n:!</pre>
There are two items, one for comments starting with "&gt;" and one for comments
that start with "!".  Both use the flag "n".  This means that these comments
nest.  Thus a line starting with "&gt;" may have another comment after the "&gt;".
This allows formatting a message like this:</div>
<div class="old-help-para"><div class="help-column_heading">	&gt; ! Did you see that site?</div><div class="help-column_heading">	&gt; ! It looks really great.</div><div class="help-column_heading">	&gt; I don't like it.  The</div><div class="help-column_heading">	&gt; colors are terrible.</div><div class="help-column_heading">	What is the URL of that</div><div class="help-column_heading">	site?</div></div>
<div class="old-help-para">Try setting <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> to a different value, e.g., 80, and format the text by
Visually selecting it and typing "gq".  The result is:</div>
<div class="old-help-para"><div class="help-column_heading">	&gt; ! Did you see that site?  It looks really great.</div><div class="help-column_heading">	&gt; I don't like it.  The colors are terrible.</div><div class="help-column_heading">	What is the URL of that site?</div></div>
<div class="old-help-para">You will notice that Vim did not move text from one type of comment to
another.  The "I" in the second line would have fit at the end of the first
line, but since that line starts with "&gt; !" and the second line with "&gt;", Vim
knows that this is a different kind of comment.</div>
<div class="old-help-para">A THREE PART COMMENT</div>
<div class="old-help-para">A C comment starts with "/*", has "*" in the middle and "*/" at the end.  The
entry in <a href="/neovim-docs-web/en/options#'comments'">'comments'</a> for this looks like this:<pre>:set comments=s1:/*,mb:*,ex:*/</pre>
The start is defined with "s1:/*".  The "s" indicates the start of a
three-piece comment.  The colon separates the flags from the text by which the
comment is recognized: "/*".  There is one flag: "1".  This tells Vim that the
middle part has an offset of one space.
   The middle part "mb:*" starts with "m", which indicates it is a middle
part.  The "b" flag means that a blank must follow the text.  Otherwise Vim
would consider text like "*pointer" also to be the middle of a comment.
   The end part "ex:*/" has the "e" for identification.  The "x" flag has a
special meaning.  It means that after Vim automatically inserted a star,
typing / will remove the extra space.</div>
<div class="old-help-para">For more details see <a href="/neovim-docs-web/en/change#format-comments">format-comments</a>.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_31#usr_31.txt">usr_31.txt</a>  Exploiting the GUI</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  