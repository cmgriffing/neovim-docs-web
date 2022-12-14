---
title:  Usr_41
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_41.txt"></a><a name="41.1"></a><h1> Usr_41</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_41.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			      Write a Vim script</div>
<div class="old-help-para">The Vim script language is used for the startup vimrc file, syntax files, and
many other things.  This chapter explains the items that can be used in a Vim
script.  There are a lot of them, thus this is a long chapter.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_41#41.1">41.1</a>  	Introduction
<a href="/neovim-docs-web/en/usr_41#41.2">41.2</a>  	Variables
<a href="/neovim-docs-web/en/usr_41#41.3">41.3</a>  	Expressions
<a href="/neovim-docs-web/en/usr_41#41.4">41.4</a>  	Conditionals
<a href="/neovim-docs-web/en/usr_41#41.5">41.5</a>  	Executing an expression
<a href="/neovim-docs-web/en/usr_41#41.6">41.6</a>  	Using functions
<a href="/neovim-docs-web/en/usr_41#41.7">41.7</a>  	Defining a function
<a href="/neovim-docs-web/en/usr_41#41.8">41.8</a>  	Lists and Dictionaries
<a href="/neovim-docs-web/en/usr_41#41.9">41.9</a>  	Exceptions
<a href="/neovim-docs-web/en/usr_41#41.10">41.10</a>  	Various remarks
<a href="/neovim-docs-web/en/usr_41#41.11">41.11</a>  	Writing a plugin
<a href="/neovim-docs-web/en/usr_41#41.12">41.12</a>  	Writing a filetype plugin
<a href="/neovim-docs-web/en/usr_41#41.13">41.13</a>  	Writing a compiler plugin
<a href="/neovim-docs-web/en/usr_41#41.14">41.14</a>  	Writing a plugin that loads quickly
<a href="/neovim-docs-web/en/usr_41#41.15">41.15</a>  	Writing library scripts
<a href="/neovim-docs-web/en/usr_41#41.16">41.16</a>  	Distributing Vim scripts</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_42#usr_42.txt">usr_42.txt</a>  Add new menus
 Previous chapter: <a href="/neovim-docs-web/en/usr_40#usr_40.txt">usr_40.txt</a>  Make new commands
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Introduction<span class="help-heading-tags">				<a name="vim-script-intro"></a><span class="help-tag">vim-script-intro</span> <a name="script"></a><span class="help-tag">script</span></span></h2></div>
<div class="old-help-para">Your first experience with Vim scripts is the vimrc file.  Vim reads it when
it starts up and executes the commands.  You can set options to values you
prefer.  And you can use any colon command in it (commands that start with a
":"; these are sometimes referred to as Ex commands or command-line commands).
   Syntax files are also Vim scripts.  As are files that set options for a
specific file type.  A complicated macro can be defined by a separate Vim
script file.  You can think of other uses yourself.</div>
<div class="old-help-para">	If you are familiar with Python, you can find a comparison between
	Python and Vim script here, with pointers to other documents:
	   <a href="https://gist.github.com/yegappan/16d964a37ead0979b05e655aa036cad0">https://gist.github.com/yegappan/16d964a37ead0979b05e655aa036cad0</a>
	And if you are familiar with JavaScript:
	   <a href="https://w0rp.com/blog/post/vim-script-for-the-javascripter/">https://w0rp.com/blog/post/vim-script-for-the-javascripter/</a></div>
<div class="old-help-para">Let's start with a simple example:<pre>:let i = 1
:while i &lt; 5
:  echo "count is" i
:  let i += 1
:endwhile</pre></div>
<div class="old-help-para">	Note:
	The ":" characters are not really needed here.  You only need to use
	them when you type a command.  In a Vim script file they can be left
	out.  We will use them here anyway to make clear these are colon
	commands and make them stand out from Normal mode commands.
	Note:
	You can try out the examples by yanking the lines from the text here
	and executing them with :@"</div>
<div class="old-help-para">The output of the example code is:</div>
<div class="old-help-para"><div class="help-column_heading">	count is 1</div><div class="help-column_heading">	count is 2</div><div class="help-column_heading">	count is 3</div><div class="help-column_heading">	count is 4</div></div>
<div class="old-help-para">In the first line the ":let" command assigns a value to a variable.  The
generic form is:<pre>:let {variable} = {expression}</pre>
In this case the variable name is "i" and the expression is a simple value,
the number one.
   The ":while" command starts a loop.  The generic form is:<pre>:while {condition}
:  {statements}
:endwhile</pre>
The statements until the matching ":endwhile" are executed for as long as the
condition is true.  The condition used here is the expression "i &lt; 5".  This
is true when the variable i is smaller than five.
	Note:
	If you happen to write a while loop that keeps on running, you can
	interrupt it by pressing <code>CTRL-C</code> (<code>CTRL-Break</code> on MS-Windows).</div>
<div class="old-help-para">The ":echo" command prints its arguments.  In this case the string "count is"
and the value of the variable i.  Since i is one, this will print:</div>
<div class="old-help-para"><div class="help-column_heading">	count is 1</div></div>
<div class="old-help-para">Then there is the ":let i += 1" command.  This does the same thing as
":let i = i + 1".  This adds one to the variable i and assigns the new value
to the same variable.</div>
<div class="old-help-para">The example was given to explain the commands, but would you really want to
make such a loop, it can be written much more compact:<pre>:for i in range(1, 4)
:  echo "count is" i
:endfor</pre>
We won't explain how <a href="/neovim-docs-web/en/eval#%3Afor">:for</a> and <a href="/neovim-docs-web/en/builtin#range()">range()</a> work until later.  Follow the links
if you are impatient.</div>
<div class="old-help-para"><a name="_four-kinds-of-numbers"></a><h3 class="help-heading">FOUR KINDS OF NUMBERS</h3></div>
<div class="old-help-para">Numbers can be decimal, hexadecimal, octal or binary.</div>
<div class="old-help-para">A hexadecimal number starts with "0x" or "0X".  For example "0x1f" is decimal
<a name="_31."></a><h3 class="help-heading">31.</h3></div>
<div class="old-help-para">An octal number starts with "0o", "0O" or a zero and another digit.  "0o17" is
decimal 15.</div>
<div class="old-help-para">A binary number starts with "0b" or "0B".  For example "0b101" is decimal 5.</div>
<div class="old-help-para">A decimal number is just digits.  Careful: don't put a zero before a decimal
number, it will be interpreted as an octal number!</div>
<div class="old-help-para">The ":echo" command always prints decimal numbers.  Example:<pre>:echo 0x7f 0o36</pre></div>
<div class="old-help-para"><div class="help-column_heading">	127 30</div></div>
<div class="old-help-para">A number is made negative with a minus sign.  This also works for hexadecimal,
octal and binary numbers.  A minus sign is also used for subtraction.  Compare
this with the previous example:<pre>:echo 0x7f -0o36</pre></div>
<div class="old-help-para"><div class="help-column_heading">	97</div></div>
<div class="old-help-para">White space in an expression is ignored.  However, it's recommended to use it
for separating items, to make the expression easier to read.  For example, to
avoid the confusion with a negative number above, put a space between the
minus sign and the following number:<pre>:echo 0x7f - 0o36</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="41.2"></a><span class="help-tag">41.2</span>  	Variables</span></h2></div>
<div class="old-help-para">A variable name consists of ASCII letters, digits and the underscore.  It
cannot start with a digit.  Valid variable names are:</div>
<div class="old-help-para">	counter
	_aap3
	very_long_variable_name_with_underscores
	FuncLength
	LENGTH</div>
<div class="old-help-para">Invalid names are "foo.bar" and "6var".
   These variables are global.  To see a list of currently defined variables
use this command:<pre>:let</pre>
You can use global variables everywhere.  This also means that when the
variable "count" is used in one script file, it might also be used in another
file.  This leads to confusion at least, and real problems at worst.  To avoid
this, you can use a variable local to a script file by prepending "s:".  For
example, one script contains this code:<pre>:let s:count = 1
:while s:count &lt; 5
:  source other.vim
:  let s:count += 1
:endwhile</pre>
Since "s:count" is local to this script, you can be sure that sourcing the
"other.vim" script will not change this variable.  If "other.vim" also uses an
"s:count" variable, it will be a different copy, local to that script.  More
about script-local variables here: <a href="/neovim-docs-web/en/eval#script-variable">script-variable</a>.</div>
<div class="old-help-para">There are more kinds of variables, see <a href="/neovim-docs-web/en/eval#internal-variables">internal-variables</a>.  The most often
used ones are:</div>
<div class="old-help-para">	b:name		variable local to a buffer
	w:name		variable local to a window
	g:name		global variable (also in a function)
	v:name		variable predefined by Vim</div>
<div class="old-help-para"><a name="_deleting-variables"></a><h3 class="help-heading">DELETING VARIABLES</h3></div>
<div class="old-help-para">Variables take up memory and show up in the output of the ":let" command.  To
delete a variable use the ":unlet" command.  Example:<pre>:unlet s:count</pre>
This deletes the script-local variable "s:count" to free up the memory it
uses.  If you are not sure if the variable exists, and don't want an error
message when it doesn't, append !:<pre>:unlet! s:count</pre>
When a script has been processed to the end, the local variables declared
there will not be deleted.  Functions defined in the script can use them.
Example:</div>
<div class="old-help-para">	:if !exists("s:call_count")
	:  let s:call_count = 0
	:endif
	:let s:call_count = s:call_count + 1
	:echo "called" s:call_count "times"</div>
<div class="old-help-para">The "exists()" function checks if a variable has already been defined.  Its
argument is the name of the variable you want to check.  Not the variable
itself!  If you would do this:<pre>:if !exists(s:call_count)</pre>
Then the value of s:call_count will be used as the name of the variable that
exists() checks.  That's not what you want.
   The exclamation mark ! negates a value.  When the value was true, it
becomes false.  When it was false, it becomes true.  You can read it as "not".
Thus "if !exists()" can be read as "if not exists()".
   What Vim calls true is anything that is not zero.  Zero is false.
	Note:
	Vim automatically converts a string to a number when it is looking for
	a number.  When using a string that doesn't start with a digit the
	resulting number is zero.  Thus look out for this:<pre>:if "true"</pre></div>
<div class="old-help-para">	The "true" will be interpreted as a zero, thus as false!</div>
<div class="old-help-para"><a name="_string-variables-and-constants"></a><h3 class="help-heading">STRING VARIABLES AND CONSTANTS</h3></div>
<div class="old-help-para">So far only numbers were used for the variable value.  Strings can be used as
well.  Numbers and strings are the basic types of variables that Vim supports.
The type is dynamic, it is set each time when assigning a value to the
variable with ":let".  More about types in <a href="/neovim-docs-web/en/usr_41#41.8">41.8</a>.
   To assign a string value to a variable, you need to use a string constant.
There are two types of these.  First the string in double quotes:<pre>:let name = "peter"
:echo name</pre></div>
<div class="old-help-para"><div class="help-column_heading">	peter</div></div>
<div class="old-help-para">If you want to include a double quote inside the string, put a backslash in
front of it:<pre>:let name = "\"peter\""
:echo name</pre></div>
<div class="old-help-para"><div class="help-column_heading">	"peter"</div></div>
<div class="old-help-para">To avoid the need for a backslash, you can use a string in single quotes:<pre>:let name = '"peter"'
:echo name</pre></div>
<div class="old-help-para"><div class="help-column_heading">	"peter"</div></div>
<div class="old-help-para">Inside a single-quote string all the characters are as they are.  Only the
single quote itself is special: you need to use two to get one.  A backslash
is taken literally, thus you can't use it to change the meaning of the
character after it.
   In double-quote strings it is possible to use special characters.  Here are
a few useful ones:</div>
<div class="old-help-para">	\t		<code>&lt;Tab&gt;</code>
	\n		<code>&lt;NL&gt;</code>, line break
	\r		<code>&lt;CR&gt;</code>, <code>&lt;Enter&gt;</code>
	\e		<code>&lt;Esc&gt;</code>
	\b		<code>&lt;BS&gt;</code>, backspace
	\"		"
	\\		\, backslash
	\&lt;Esc&gt;		<code>&lt;Esc&gt;</code>
	\&lt;C-W&gt;		<code>CTRL-W</code></div>
<div class="old-help-para">The last two are just examples.  The  "\&lt;name&gt;" form can be used to include
the special key "name".
   See <a href="/neovim-docs-web/en/eval#expr-quote">expr-quote</a> for the full list of special items in a string.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="41.3"></a><span class="help-tag">41.3</span>  	Expressions</span></h2></div>
<div class="old-help-para">Vim has a rich, yet simple way to handle expressions.  You can read the
definition here: <a href="/neovim-docs-web/en/eval#expression-syntax">expression-syntax</a>.  Here we will show the most common
items.
   The numbers, strings and variables mentioned above are expressions by
themselves.  Thus everywhere an expression is expected, you can use a number,
string or variable.  Other basic items in an expression are:</div>
<div class="old-help-para">	$NAME		environment variable
	&amp;name		option
	@r		register</div>
<div class="old-help-para">Examples:<pre>:echo "The value of 'tabstop' is" &amp;ts
:echo "Your home directory is" $HOME
:if @a &gt; 5</pre>
The &amp;name form can be used to save an option value, set it to a new value,
do something and restore the old value.  Example:<pre>:let save_ic = &amp;ic
:set noic
:/The Start/,$delete
:let &amp;ic = save_ic</pre>
This makes sure the "The Start" pattern is used with the <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option
off.  Still, it keeps the value that the user had set.  (Another way to do
this would be to add "\C" to the pattern, see <a href="/neovim-docs-web/en/pattern#%2F%5CC">/\C</a>.)</div>
<div class="old-help-para"><a name="_mathematics"></a><h3 class="help-heading">MATHEMATICS</h3></div>
<div class="old-help-para">It becomes more interesting if we combine these basic items.  Let's start with
mathematics on numbers:</div>
<div class="old-help-para">	a + b		add
	a - b		subtract
	a * b		multiply
	a / b		divide
	a % b		modulo</div>
<div class="old-help-para">The usual precedence is used.  Example:<pre>:echo 10 + 5 * 2</pre></div>
<div class="old-help-para"><div class="help-column_heading">	20</div></div>
<div class="old-help-para">Grouping is done with parentheses.  No surprises here.  Example:<pre>:echo (10 + 5) * 2</pre></div>
<div class="old-help-para"><div class="help-column_heading">	30</div></div>
<div class="old-help-para">Strings can be concatenated with ".." (see <a href="/neovim-docs-web/en/eval#expr6">expr6</a>).  Example:<pre>:echo "foo" .. "bar"</pre></div>
<div class="old-help-para"><div class="help-column_heading">	foobar</div></div>
<div class="old-help-para">When the ":echo" command gets multiple arguments, it separates them with a
space.  In the example the argument is a single expression, thus no space is
inserted.</div>
<div class="old-help-para">Borrowed from the C language is the conditional expression:</div>
<div class="old-help-para">	a ? b : c</div>
<div class="old-help-para">If "a" evaluates to true "b" is used, otherwise "c" is used.  Example:<pre>:let i = 4
:echo i &gt; 5 ? "i is big" : "i is small"</pre></div>
<div class="old-help-para"><div class="help-column_heading">	i is small</div></div>
<div class="old-help-para">The three parts of the constructs are always evaluated first, thus you could
see it work as:</div>
<div class="old-help-para">	(a) ? (b) : (c)</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="41.4"></a><span class="help-tag">41.4</span>  	Conditionals</span></h2></div>
<div class="old-help-para">The ":if" commands executes the following statements, until the matching
":endif", only when a condition is met.  The generic form is:</div>
<div class="old-help-para">	:if <code>{condition}</code>
	   <code>{statements}</code>
	:endif</div>
<div class="old-help-para">Only when the expression <code>{condition}</code> evaluates to true (non-zero) will the
<code>{statements}</code> be executed.  These must still be valid commands.  If they
contain garbage, Vim won't be able to find the ":endif".
   You can also use ":else".  The generic form for this is:</div>
<div class="old-help-para">	:if <code>{condition}</code>
	   <code>{statements}</code>
	:else
	   <code>{statements}</code>
	:endif</div>
<div class="old-help-para">The second <code>{statements}</code> is only executed if the first one isn't.
   Finally, there is ":elseif":</div>
<div class="old-help-para">	:if <code>{condition}</code>
	   <code>{statements}</code>
	:elseif <code>{condition}</code>
	   <code>{statements}</code>
	:endif</div>
<div class="old-help-para">This works just like using ":else" and then "if", but without the need for an
extra ":endif".
   A useful example for your vimrc file is checking the <a href="/neovim-docs-web/en/vim_diff#'term'">'term'</a> option and
doing something depending upon its value:<pre>:if &amp;term == "xterm"
:  " Do stuff for xterm
:elseif &amp;term == "vt100"
:  " Do stuff for a vt100 terminal
:else
:  " Do something for other terminals
:endif</pre>
<a name="_logic-operations"></a><h3 class="help-heading">LOGIC OPERATIONS</h3></div>
<div class="old-help-para">We already used some of them in the examples.  These are the most often used
ones:</div>
<div class="old-help-para">	a == b		equal to
	a != b		not equal to
	a &gt;  b		greater than
	a &gt;= b		greater than or equal to
	a &lt;  b		less than
	a &lt;= b		less than or equal to</div>
<div class="old-help-para">The result is one if the condition is met and zero otherwise.  An example:<pre>:if v:version &gt;= 700
:  echo "congratulations"
:else
:  echo "you are using an old version, upgrade!"
:endif</pre>
Here "v:version" is a variable defined by Vim, which has the value of the Vim
version.  600 is for version 6.0.  Version 6.1 has the value 601.  This is
very useful to write a script that works with multiple versions of Vim.
<a href="/neovim-docs-web/en/eval#v%3Aversion">v:version</a></div>
<div class="old-help-para">The logic operators work both for numbers and strings.  When comparing two
strings, the mathematical difference is used.  This compares byte values,
which may not be right for some languages.
   When comparing a string with a number, the string is first converted to a
number.  This is a bit tricky, because when a string doesn't look like a
number, the number zero is used.  Example:<pre>:if 0 == "one"
:  echo "yes"
:endif</pre>
This will echo "yes", because "one" doesn't look like a number, thus it is
converted to the number zero.</div>
<div class="old-help-para">For strings there are two more items:</div>
<div class="old-help-para">	a =~ b		matches with
	a !~ b		does not match with</div>
<div class="old-help-para">The left item "a" is used as a string.  The right item "b" is used as a
pattern, like what's used for searching.  Example:<pre>:if str =~ " "
:  echo "str contains a space"
:endif
:if str !~ '\.$'
:  echo "str does not end in a full stop"
:endif</pre>
Notice the use of a single-quote string for the pattern.  This is useful,
because backslashes would need to be doubled in a double-quote string and
patterns tend to contain many backslashes.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option is used when comparing strings.  When you don't want
that, append "#" to match case and "?" to ignore case.  Thus "==?" compares
two strings to be equal while ignoring case.  And "!~#" checks if a pattern
doesn't match, also checking the case of letters.  For the full table see
<a href="/neovim-docs-web/en/eval#expr-%3D%3D">expr-==</a>.</div>
<div class="old-help-para"><a name="_more-looping"></a><h3 class="help-heading">MORE LOOPING</h3></div>
<div class="old-help-para">The ":while" command was already mentioned.  Two more statements can be used
in between the ":while" and the ":endwhile":</div>
<div class="old-help-para">	:continue		Jump back to the start of the while loop; the
				loop continues.
	:break			Jump forward to the ":endwhile"; the loop is
				discontinued.</div>
<div class="old-help-para">Example:<pre>:while counter &lt; 40
:  call do_something()
:  if skip_flag
:    continue
:  endif
:  if finished_flag
:    break
:  endif
:  sleep 50m
:endwhile</pre>
The ":sleep" command makes Vim take a nap.  The "50m" specifies fifty
milliseconds.  Another example is ":sleep 4", which sleeps for four seconds.</div>
<div class="old-help-para">Even more looping can be done with the ":for" command, see below in <a href="/neovim-docs-web/en/usr_41#41.8">41.8</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="41.5"></a><span class="help-tag">41.5</span>  	Executing an expression</span></h2></div>
<div class="old-help-para">So far the commands in the script were executed by Vim directly.  The
":execute" command allows executing the result of an expression.  This is a
very powerful way to build commands and execute them.
   An example is to jump to a tag, which is contained in a variable:<pre>:execute "tag " .. tag_name</pre>
The ".." is used to concatenate the string "tag " with the value of variable
"tag_name".  Suppose "tag_name" has the value "get_cmd", then the command that
will be executed is:<pre>:tag get_cmd</pre>
The ":execute" command can only execute colon commands.  The ":normal" command
executes Normal mode commands.  However, its argument is not an expression but
the literal command characters.  Example:<pre>:normal gg=G</pre>
This jumps to the first line and formats all lines with the "=" operator.
   To make ":normal" work with an expression, combine ":execute" with it.
Example:<pre>:execute "normal " .. normal_commands</pre>
The variable "normal_commands" must contain the Normal mode commands.
   Make sure that the argument for ":normal" is a complete command.  Otherwise
Vim will run into the end of the argument and abort the command.  For example,
if you start Insert mode, you must leave Insert mode as well.  This works:<pre>:execute "normal Inew text \&lt;Esc&gt;"</pre>
This inserts "new text " in the current line.  Notice the use of the special
key "\&lt;Esc&gt;".  This avoids having to enter a real <code>&lt;Esc&gt;</code> character in your
script.</div>
<div class="old-help-para">If you don't want to execute a string but evaluate it to get its expression
value, you can use the eval() function:<pre>:let optname = "path"
:let optval = eval('&amp;' .. optname)</pre>
A "&amp;" character is prepended to "path", thus the argument to eval() is
"&amp;path".  The result will then be the value of the <a href="/neovim-docs-web/en/options#'path'">'path'</a> option.
   The same thing can be done with:<pre>:exe 'let optval = &amp;' .. optname</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="41.6"></a><span class="help-tag">41.6</span>  	Using functions</span></h2></div>
<div class="old-help-para">Vim defines many functions and provides a large amount of functionality that
way.  A few examples will be given in this section.  You can find the whole
list below: <a href="/neovim-docs-web/en/usr_41#function-list">function-list</a>.</div>
<div class="old-help-para">A function is called with the ":call" command.  The parameters are passed in
between parentheses separated by commas.  Example:<pre>:call search("Date: ", "W")</pre>
This calls the search() function, with arguments "Date: " and "W".  The
search() function uses its first argument as a search pattern and the second
one as flags.  The "W" flag means the search doesn't wrap around the end of
the file.</div>
<div class="old-help-para">A function can be called in an expression.  Example:<pre>:let line = getline(".")
:let repl = substitute(line, '\a', "*", "g")
:call setline(".", repl)</pre>
The getline() function obtains a line from the current buffer.  Its argument
is a specification of the line number.  In this case "." is used, which means
the line where the cursor is.
   The substitute() function does something similar to the ":substitute"
command.  The first argument is the string on which to perform the
substitution.  The second argument is the pattern, the third the replacement
string.  Finally, the last arguments are the flags.
   The setline() function sets the line, specified by the first argument, to a
new string, the second argument.  In this example the line under the cursor is
replaced with the result of the substitute().  Thus the effect of the three
statements is equal to:<pre>:substitute/\a/*/g</pre>
Using the functions becomes interesting when you do more work before and
after the substitute() call.</div>
<div class="old-help-para"><h3 class="help-heading">FUNCTIONS<span class="help-heading-tags">						<a name="function-list"></a><span class="help-tag">function-list</span></span></h3></div>
<div class="old-help-para">There are many functions.  We will mention them here, grouped by what they are
used for.  You can find an alphabetical list here: <a href="/neovim-docs-web/en/builtin#builtin-function-list">builtin-function-list</a>.
Use <code>CTRL-]</code> on the function name to jump to detailed help on it.</div>
<div class="old-help-para">String manipulation:					<a name="string-functions"></a><code class="help-tag-right">string-functions</code>
	nr2char()		get a character by its number value
	list2str()		get a character string from a list of numbers
	char2nr()		get number value of a character
	str2list()		get list of numbers from a string
	str2nr()		convert a string to a Number
	str2float()		convert a string to a Float
	printf()		format a string according to % items
	escape()		escape characters in a string with a '\'
	shellescape()		escape a string for use with a shell command
	fnameescape()		escape a file name for use with a Vim command
	tr()			translate characters from one set to another
	strtrans()		translate a string to make it printable
	keytrans()		translate internal keycodes to a form that
				can be used by <a href="/neovim-docs-web/en/map#%3Amap">:map</a>
	tolower()		turn a string to lowercase
	toupper()		turn a string to uppercase
	charclass()		class of a character
	match()			position where a pattern matches in a string
	matchend()		position where a pattern match ends in a string
	matchfuzzy()		fuzzy matches a string in a list of strings
	matchfuzzypos()		fuzzy matches a string in a list of strings
	matchstr()		match of a pattern in a string
	matchstrpos()		match and positions of a pattern in a string
	matchlist()		like matchstr() and also return submatches
	stridx()		first index of a short string in a long string
	strridx()		last index of a short string in a long string
	strlen()		length of a string in bytes
	strcharlen()		length of a string in characters
	strchars()		number of characters in a string
	strwidth()		size of string when displayed
	strdisplaywidth()	size of string when displayed, deals with tabs
	setcellwidths()		set character cell width overrides
	substitute()		substitute a pattern match with a string
	submatch()		get a specific match in ":s" and substitute()
	strpart()		get part of a string using byte index
	strcharpart()		get part of a string using char index
	strgetchar()		get character from a string using char index
	expand()		expand special keywords
	expandcmd()		expand a command like done for <code>:edit</code>
	iconv()			convert text from one encoding to another
	byteidx()		byte index of a character in a string
	byteidxcomp()		like byteidx() but count composing characters
	charidx()		character index of a byte in a string
	repeat()		repeat a string multiple times
	eval()			evaluate a string expression
	execute()		execute an Ex command and get the output
	win_execute()		like execute() but in a specified window
	trim()			trim characters from a string
	gettext()		lookup message translation</div>
<div class="old-help-para">List manipulation:					<a name="list-functions"></a><code class="help-tag-right">list-functions</code>
	get()			get an item without error for wrong index
	len()			number of items in a List
	empty()			check if List is empty
	insert()		insert an item somewhere in a List
	add()			append an item to a List
	extend()		append a List to a List
	remove()		remove one or more items from a List
	copy()			make a shallow copy of a List
	deepcopy()		make a full copy of a List
	filter()		remove selected items from a List
	map()			change each List item
	reduce()		reduce a List to a value
	sort()			sort a List
	reverse()		reverse the order of a List
	uniq()			remove copies of repeated adjacent items
	split()			split a String into a List
	join()			join List items into a String
	range()			return a List with a sequence of numbers
	string()		String representation of a List
	call()			call a function with List as arguments
	index()			index of a value in a List
	max()			maximum value in a List
	min()			minimum value in a List
	count()			count number of times a value appears in a List
	repeat()		repeat a List multiple times
	flatten()		flatten a List</div>
<div class="old-help-para">Dictionary manipulation:				<a name="dict-functions"></a><code class="help-tag-right">dict-functions</code>
	get()			get an entry without an error for a wrong key
	len()			number of entries in a Dictionary
	has_key()		check whether a key appears in a Dictionary
	empty()			check if Dictionary is empty
	remove()		remove an entry from a Dictionary
	extend()		add entries from one Dictionary to another
	filter()		remove selected entries from a Dictionary
	map()			change each Dictionary entry
	keys()			get List of Dictionary keys
	values()		get List of Dictionary values
	items()			get List of Dictionary key-value pairs
	copy()			make a shallow copy of a Dictionary
	deepcopy()		make a full copy of a Dictionary
	string()		String representation of a Dictionary
	max()			maximum value in a Dictionary
	min()			minimum value in a Dictionary
	count()			count number of times a value appears</div>
<div class="old-help-para">Floating point computation:				<a name="float-functions"></a><code class="help-tag-right">float-functions</code>
	float2nr()		convert Float to Number
	abs()			absolute value (also works for Number)
	round()			round off
	ceil()			round up
	floor()			round down
	trunc()			remove value after decimal point
	fmod()			remainder of division
	exp()			exponential
	log()			natural logarithm (logarithm to base e)
	log10()			logarithm to base 10
	pow()			value of x to the exponent y
	sqrt()			square root
	sin()			sine
	cos()			cosine
	tan()			tangent
	asin()			arc sine
	acos()			arc cosine
	atan()			arc tangent
	atan2()			arc tangent
	sinh()			hyperbolic sine
	cosh()			hyperbolic cosine
	tanh()			hyperbolic tangent
	isinf()			check for infinity
	isnan()			check for not a number</div>
<div class="old-help-para">Other computation:					<a name="bitwise-function"></a><code class="help-tag-right">bitwise-function</code>
	and()			bitwise AND
	invert()		bitwise invert
	or()			bitwise OR
	xor()			bitwise XOR
	sha256()		SHA-256 hash
	rand()			get a pseudo-random number
	srand()			initialize seed used by rand()</div>
<div class="old-help-para">Variables:						<a name="var-functions"></a><code class="help-tag-right">var-functions</code>
	type()			type of a variable
	islocked()		check if a variable is locked
	funcref()		get a Funcref for a function reference
	function()		get a Funcref for a function name
	getbufvar()		get a variable value from a specific buffer
	setbufvar()		set a variable in a specific buffer
	getwinvar()		get a variable from specific window
	gettabvar()		get a variable from specific tab page
	gettabwinvar()		get a variable from specific window &amp; tab page
	setwinvar()		set a variable in a specific window
	settabvar()		set a variable in a specific tab page
	settabwinvar()		set a variable in a specific window &amp; tab page
	garbagecollect()	possibly free memory</div>
<div class="old-help-para">Cursor and mark position:		<a name="cursor-functions"></a><code class="help-tag-right">cursor-functions</code> <a name="mark-functions"></a><code class="help-tag">mark-functions</code>
	col()			column number of the cursor or a mark
	virtcol()		screen column of the cursor or a mark
	line()			line number of the cursor or mark
	wincol()		window column number of the cursor
	winline()		window line number of the cursor
	cursor()		position the cursor at a line/column
	screencol()		get screen column of the cursor
	screenrow()		get screen row of the cursor
	screenpos()		screen row and col of a text character
	virtcol2col()		byte index of a text character on screen
	getcurpos()		get position of the cursor
	getpos()		get position of cursor, mark, etc.
	setpos()		set position of cursor, mark, etc.
	getmarklist()		list of global/local marks
	byte2line()		get line number at a specific byte count
	line2byte()		byte count at a specific line
	diff_filler()		get the number of filler lines above a line
	screenattr()		get attribute at a screen line/row
	screenchar()		get character code at a screen line/row
	screenchars()		get character codes at a screen line/row
	screenstring()		get string of characters at a screen line/row
	charcol()		character number of the cursor or a mark
	getcharpos()		get character position of cursor, mark, etc.
	setcharpos()		set character position of cursor, mark, etc.
	getcursorcharpos()	get character position of the cursor
	setcursorcharpos()	set character position of the cursor</div>
<div class="old-help-para">Working with text in the current buffer:		<a name="text-functions"></a><code class="help-tag-right">text-functions</code>
	getline()		get a line or list of lines from the buffer
	setline()		replace a line in the buffer
	append()		append line or list of lines in the buffer
	indent()		indent of a specific line
	cindent()		indent according to C indenting
	lispindent()		indent according to Lisp indenting
	nextnonblank()		find next non-blank line
	prevnonblank()		find previous non-blank line
	search()		find a match for a pattern
	searchpos()		find a match for a pattern
	searchcount()		get number of matches before/after the cursor
	searchpair()		find the other end of a start/skip/end
	searchpairpos()		find the other end of a start/skip/end
	searchdecl()		search for the declaration of a name
	getcharsearch()		return character search information
	setcharsearch()		set character search information</div>
<div class="old-help-para">					<a name="system-functions"></a><code class="help-tag-right">system-functions</code> <a name="file-functions"></a><code class="help-tag">file-functions</code>
System functions and manipulation of files:
	glob()			expand wildcards
	globpath()		expand wildcards in a number of directories
	glob2regpat()		convert a glob pattern into a search pattern
	findfile()		find a file in a list of directories
	finddir()		find a directory in a list of directories
	resolve()		find out where a shortcut points to
	fnamemodify()		modify a file name
	pathshorten()		shorten directory names in a path
	simplify()		simplify a path without changing its meaning
	executable()		check if an executable program exists
	exepath()		full path of an executable program
	filereadable()		check if a file can be read
	filewritable()		check if a file can be written to
	getfperm()		get the permissions of a file
	setfperm()		set the permissions of a file
	getftype()		get the kind of a file
	isdirectory()		check if a directory exists
	getfsize()		get the size of a file
	getcwd()		get the current working directory
	haslocaldir()		check if current window used <a href="/neovim-docs-web/en/editing#%3Alcd">:lcd</a> or <a href="/neovim-docs-web/en/editing#%3Atcd">:tcd</a>
	tempname()		get the name of a temporary file
	mkdir()			create a new directory
	chdir()			change current working directory
	delete()		delete a file
	rename()		rename a file
	system()		get the result of a shell command as a string
	systemlist()		get the result of a shell command as a list
	environ()		get all environment variables
	getenv()		get one environment variable
	setenv()		set an environment variable
	hostname()		name of the system
	readfile()		read a file into a List of lines
	readblob()		read a file into a Blob
	readdir()		get a List of file names in a directory
	writefile()		write a List of lines or Blob into a file</div>
<div class="old-help-para">Date and Time:				<a name="date-functions"></a><code class="help-tag-right">date-functions</code> <a name="time-functions"></a><code class="help-tag">time-functions</code>
	getftime()		get last modification time of a file
	localtime()		get current time in seconds
	strftime()		convert time to a string
	strptime()		convert a date/time string to time
	reltime()		get the current or elapsed time accurately
	reltimestr()		convert reltime() result to a string
	reltimefloat()		convert reltime() result to a Float</div>
<div class="old-help-para">			<a name="buffer-functions"></a><code class="help-tag-right">buffer-functions</code> <a name="window-functions"></a><code class="help-tag">window-functions</code> <a name="arg-functions"></a><code class="help-tag">arg-functions</code>
Buffers, windows and the argument list:
	argc()			number of entries in the argument list
	argidx()		current position in the argument list
	arglistid()		get id of the argument list
	argv()			get one entry from the argument list
	bufexists()		check if a buffer exists
	buflisted()		check if a buffer exists and is listed
	bufloaded()		check if a buffer exists and is loaded
	bufname()		get the name of a specific buffer
	bufnr()			get the buffer number of a specific buffer
	tabpagebuflist()	return List of buffers in a tab page
	tabpagenr()		get the number of a tab page
	tabpagewinnr()		like winnr() for a specified tab page
	winnr()			get the window number for the current window
	bufwinid()		get the window ID of a specific buffer
	bufwinnr()		get the window number of a specific buffer
	winbufnr()		get the buffer number of a specific window
	getbufline()		get a list of lines from the specified buffer
	setbufline()		replace a line in the specified buffer
	appendbufline()		append a list of lines in the specified buffer
	deletebufline()		delete lines from a specified buffer
	win_findbuf()		find windows containing a buffer
	win_getid()		get window ID of a window
	win_gettype()		get type of window
	win_gotoid()		go to window with ID
	win_id2tabwin()		get tab and window nr from window ID
	win_id2win()		get window nr from window ID
	win_move_separator()	move window vertical separator
	win_move_statusline()	move window status line
	win_splitmove()		move window to a split of another window
	getbufinfo()		get a list with buffer information
	gettabinfo()		get a list with tab page information
	getwininfo()		get a list with window information
	getchangelist()		get a list of change list entries
	getjumplist()		get a list of jump list entries
	swapinfo()		information about a swap file
	swapname()		get the swap file path of a buffer</div>
<div class="old-help-para">Command line:					<a name="command-line-functions"></a><code class="help-tag-right">command-line-functions</code>
	getcmdcompltype()	get the type of the current command line
				completion
	getcmdline()		get the current command line
	getcmdpos()		get position of the cursor in the command line
	getcmdscreenpos()	get screen position of the cursor in the
				command line
	setcmdline()		set the current command line
	setcmdpos()		set position of the cursor in the command line
	getcmdtype()		return the current command-line type
	getcmdwintype()		return the current command-line window type
	getcompletion()		list of command-line completion matches
	fullcommand()		get full command name</div>
<div class="old-help-para">Quickfix and location lists:			<a name="quickfix-functions"></a><code class="help-tag-right">quickfix-functions</code>
	getqflist()		list of quickfix errors
	setqflist()		modify a quickfix list
	getloclist()		list of location list items
	setloclist()		modify a location list</div>
<div class="old-help-para">Insert mode completion:				<a name="completion-functions"></a><code class="help-tag-right">completion-functions</code>
	complete()		set found matches
	complete_add()		add to found matches
	complete_check()	check if completion should be aborted
	complete_info()		get current completion information
	pumvisible()		check if the popup menu is displayed
	pum_getpos()		position and size of popup menu if visible</div>
<div class="old-help-para">Folding:					<a name="folding-functions"></a><code class="help-tag-right">folding-functions</code>
	foldclosed()		check for a closed fold at a specific line
	foldclosedend()		like foldclosed() but return the last line
	foldlevel()		check for the fold level at a specific line
	foldtext()		generate the line displayed for a closed fold
	foldtextresult()	get the text displayed for a closed fold</div>
<div class="old-help-para">Syntax and highlighting:	  <a name="syntax-functions"></a><code class="help-tag-right">syntax-functions</code> <a name="highlighting-functions"></a><code class="help-tag">highlighting-functions</code>
	clearmatches()		clear all matches defined by <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a> and
				the <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> commands
	getmatches()		get all matches defined by <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a> and
				the <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> commands
	hlexists()		check if a highlight group exists
	hlID()			get ID of a highlight group
	synID()			get syntax ID at a specific position
	synIDattr()		get a specific attribute of a syntax ID
	synIDtrans()		get translated syntax ID
	synstack()		get list of syntax IDs at a specific position
	synconcealed()		get info about concealing
	diff_hlID()		get highlight ID for diff mode at a position
	matchadd()		define a pattern to highlight (a "match")
	matchaddpos()		define a list of positions to highlight
	matcharg()		get info about <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> arguments
	matchdelete()		delete a match defined by <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a> or a
				<a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> command
	setmatches()		restore a list of matches saved by
				<a href="/neovim-docs-web/en/builtin#getmatches()">getmatches()</a></div>
<div class="old-help-para">Spelling:					<a name="spell-functions"></a><code class="help-tag-right">spell-functions</code>
	spellbadword()		locate badly spelled word at or after cursor
	spellsuggest()		return suggested spelling corrections
	soundfold()		return the sound-a-like equivalent of a word</div>
<div class="old-help-para">History:					<a name="history-functions"></a><code class="help-tag-right">history-functions</code>
	histadd()		add an item to a history
	histdel()		delete an item from a history
	histget()		get an item from a history
	histnr()		get highest index of a history list</div>
<div class="old-help-para">Interactive:					<a name="interactive-functions"></a><code class="help-tag-right">interactive-functions</code>
	browse()		put up a file requester
	browsedir()		put up a directory requester
	confirm()		let the user make a choice
	getchar()		get a character from the user
	getcharmod()		get modifiers for the last typed character
	getmousepos()		get last known mouse position
	feedkeys()		put characters in the typeahead queue
	input()			get a line from the user
	inputlist()		let the user pick an entry from a list
	inputsecret()		get a line from the user without showing it
	inputdialog()		get a line from the user in a dialog
	inputsave()		save and clear typeahead
	inputrestore()		restore typeahead</div>
<div class="old-help-para">GUI:						<a name="gui-functions"></a><code class="help-tag-right">gui-functions</code>
	getfontname()		get name of current font being used
	getwinpos()		position of the Vim window
	getwinposx()		X position of the Vim window
	getwinposy()		Y position of the Vim window
	balloon_show()		set the balloon content
	balloon_split()		split a message for a balloon
	balloon_gettext()	get the text in the balloon</div>
<div class="old-help-para">Vim server:					<a name="server-functions"></a><code class="help-tag-right">server-functions</code>
	serverlist()		return the list of server names
	remote_startserver()	run a server
	remote_send()		send command characters to a Vim server
	remote_expr()		evaluate an expression in a Vim server
	server2client()		send a reply to a client of a Vim server
	remote_peek()		check if there is a reply from a Vim server
	remote_read()		read a reply from a Vim server
	foreground()		move the Vim window to the foreground
	remote_foreground()	move the Vim server window to the foreground</div>
<div class="old-help-para">Window size and position:			<a name="window-size-functions"></a><code class="help-tag-right">window-size-functions</code>
	winheight()		get height of a specific window
	winwidth()		get width of a specific window
	win_screenpos()		get screen position of a window
	winlayout()		get layout of windows in a tab page
	winrestcmd()		return command to restore window sizes
	winsaveview()		get view of current window
	winrestview()		restore saved view of current window</div>
<div class="old-help-para">Mappings and Menus:			    <a name="mapping-functions"></a><code class="help-tag-right">mapping-functions</code>
	digraph_get()		get <a href="/neovim-docs-web/en/digraph#digraph">digraph</a>
	digraph_getlist()	get all <a href="/neovim-docs-web/en/digraph#digraph">digraph</a>s
	digraph_set()		register <a href="/neovim-docs-web/en/digraph#digraph">digraph</a>
	digraph_setlist()	register multiple <a href="/neovim-docs-web/en/digraph#digraph">digraph</a>s
	hasmapto()		check if a mapping exists
	mapcheck()		check if a matching mapping exists
	maparg()		get rhs of a mapping
	mapset()		restore a mapping
	menu_info()		get information about a menu item
	wildmenumode()		check if the wildmode is active</div>
<div class="old-help-para">Signs:						<a name="sign-functions"></a><code class="help-tag-right">sign-functions</code>
	sign_define()		define or update a sign
	sign_getdefined()	get a list of defined signs
	sign_getplaced()	get a list of placed signs
	sign_jump()		jump to a sign
	sign_place()		place a sign
	sign_placelist()	place a list of signs
	sign_undefine()		undefine a sign
	sign_unplace()		unplace a sign
	sign_unplacelist()	unplace a list of signs</div>
<div class="old-help-para">Testing:				    <a name="test-functions"></a><code class="help-tag-right">test-functions</code>
	assert_equal()		assert that two expressions values are equal
	assert_equalfile()	assert that two file contents are equal
	assert_notequal()	assert that two expressions values are not equal
	assert_inrange()	assert that an expression is inside a range
	assert_match()		assert that a pattern matches the value
	assert_notmatch()	assert that a pattern does not match the value
	assert_false()		assert that an expression is false
	assert_true()		assert that an expression is true
	assert_exception()	assert that a command throws an exception
	assert_beeps()		assert that a command beeps
	assert_nobeep()		assert that a command does not cause a beep
	assert_fails()		assert that a command fails
	assert_report()		report a test failure</div>
<div class="old-help-para">Timers:						<a name="timer-functions"></a><code class="help-tag-right">timer-functions</code>
	timer_start()		create a timer
	timer_pause()		pause or unpause a timer
	timer_stop()		stop a timer
	timer_stopall()		stop all timers
	timer_info()		get information about timers
	wait()			wait for a condition</div>
<div class="old-help-para">Tags:						<a name="tag-functions"></a><code class="help-tag-right">tag-functions</code>
	taglist()		get list of matching tags
	tagfiles()		get a list of tags files
	gettagstack()		get the tag stack of a window
	settagstack()		modify the tag stack of a window</div>
<div class="old-help-para">Prompt Buffer:					<a name="promptbuffer-functions"></a><code class="help-tag-right">promptbuffer-functions</code>
	prompt_getprompt()	get the effective prompt text for a buffer
	prompt_setcallback()	set prompt callback for a buffer
	prompt_setinterrupt()	set interrupt callback for a buffer
	prompt_setprompt()	set the prompt text for a buffer</div>
<div class="old-help-para">Context Stack:					<a name="ctx-functions"></a><code class="help-tag-right">ctx-functions</code>
	ctxget()		return context at given index from top
	ctxpop()		pop and restore top context
	ctxpush()		push given context
	ctxset()		set context at given index from top
	ctxsize()		return context stack size</div>
<div class="old-help-para">Various:					<a name="various-functions"></a><code class="help-tag-right">various-functions</code>
	mode()			get current editing mode
	visualmode()		last visual mode used
	exists()		check if a variable, function, etc. exists
	has()			check if a feature is supported in Vim
	changenr()		return number of most recent change
	did_filetype()		check if a FileType autocommand was used
	eventhandler()		check if invoked by an event handler
	getpid()		get process ID of Vim</div>
<div class="old-help-para">	libcall()		call a function in an external library
	libcallnr()		idem, returning a number</div>
<div class="old-help-para">	undofile()		get the name of the undo file
	undotree()		return the state of the undo tree</div>
<div class="old-help-para">	getreg()		get contents of a register
	getreginfo()		get information about a register
	getregtype()		get type of a register
	setreg()		set contents and type of a register
	reg_executing()		return the name of the register being executed
	reg_recording()		return the name of the register being recorded</div>
<div class="old-help-para">	shiftwidth()		effective value of <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a></div>
<div class="old-help-para">	wordcount()		get byte/word/char count of buffer</div>
<div class="old-help-para">	luaeval()		evaluate <a href="/neovim-docs-web/en/lua#Lua">Lua</a> expression
	py3eval()		evaluate <a href="/neovim-docs-web/en/if_pyth#Python">Python</a> expression
	pyeval()		evaluate <a href="/neovim-docs-web/en/if_pyth#Python">Python</a> expression
	pyxeval()		evaluate <a href="/neovim-docs-web/en/if_pyth#python_x">python_x</a> expression
	rubyeval()		evaluate <a href="/neovim-docs-web/en/if_ruby#Ruby">Ruby</a> expression</div>
<div class="old-help-para">	debugbreak()		interrupt a program being debugged</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="41.7"></a><span class="help-tag">41.7</span>  	Defining a function</span></h2></div>
<div class="old-help-para">Vim enables you to define your own functions.  The basic function declaration
begins as follows:<pre>:function {name}({var1}, {var2}, ...)
:  {body}
:endfunction</pre></div>
<div class="old-help-para">	Note:
	Function names must begin with a capital letter.</div>
<div class="old-help-para">Let's define a short function to return the smaller of two numbers.  It starts
with this line:<pre>:function Min(num1, num2)</pre>
This tells Vim that the function is named "Min" and it takes two arguments:
"num1" and "num2".
   The first thing you need to do is to check to see which number is smaller:
<pre>:  if a:num1 &lt; a:num2</pre>
The special prefix "a:" tells Vim that the variable is a function argument.
Let's assign the variable "smaller" the value of the smallest number:<pre>:  if a:num1 &lt; a:num2
:    let smaller = a:num1
:  else
:    let smaller = a:num2
:  endif</pre>
The variable "smaller" is a local variable.  Variables used inside a function
are local unless prefixed by something like "g:", "a:", or "s:".</div>
<div class="old-help-para">	Note:
	To access a global variable from inside a function you must prepend
	"g:" to it.  Thus "g:today" inside a function is used for the global
	variable "today", and "today" is another variable, local to the
	function.</div>
<div class="old-help-para">You now use the ":return" statement to return the smallest number to the user.
Finally, you end the function:<pre>:  return smaller
:endfunction</pre>
The complete function definition is as follows:<pre>:function Min(num1, num2)
:  if a:num1 &lt; a:num2
:    let smaller = a:num1
:  else
:    let smaller = a:num2
:  endif
:  return smaller
:endfunction</pre>
For people who like short functions, this does the same thing:<pre>:function Min(num1, num2)
:  if a:num1 &lt; a:num2
:    return a:num1
:  endif
:  return a:num2
:endfunction</pre>
A user defined function is called in exactly the same way as a built-in
function.  Only the name is different.  The Min function can be used like
this:<pre>:echo Min(5, 8)</pre>
Only now will the function be executed and the lines be interpreted by Vim.
If there are mistakes, like using an undefined variable or function, you will
now get an error message.  When defining the function these errors are not
detected.</div>
<div class="old-help-para">When a function reaches ":endfunction" or ":return" is used without an
argument, the function returns zero.</div>
<div class="old-help-para">To redefine a function that already exists, use the ! for the ":function"
command:<pre>:function!  Min(num1, num2, num3)</pre>
USING A RANGE</div>
<div class="old-help-para">The ":call" command can be given a line range.  This can have one of two
meanings.  When a function has been defined with the "range" keyword, it will
take care of the line range itself.
  The function will be passed the variables "a:firstline" and "a:lastline".
These will have the line numbers from the range the function was called with.
Example:<pre>:function Count_words() range
:  let lnum = a:firstline
:  let n = 0
:  while lnum &lt;= a:lastline
:    let n = n + len(split(getline(lnum)))
:    let lnum = lnum + 1
:  endwhile
:  echo "found " .. n .. " words"
:endfunction</pre>
You can call this function with:<pre>:10,30call Count_words()</pre>
It will be executed once and echo the number of words.
   The other way to use a line range is by defining a function without the
"range" keyword.  The function will be called once for every line in the
range, with the cursor in that line.  Example:<pre>:function  Number()
:  echo "line " .. line(".") .. " contains: " .. getline(".")
:endfunction</pre>
If you call this function with:<pre>:10,15call Number()</pre>
The function will be called six times.</div>
<div class="old-help-para"><a name="_variable-number-of-arguments"></a><h3 class="help-heading">VARIABLE NUMBER OF ARGUMENTS</h3></div>
<div class="old-help-para">Vim enables you to define functions that have a variable number of arguments.
The following command, for instance, defines a function that must have 1
argument (start) and can have up to 20 additional arguments:<pre>:function Show(start, ...)</pre>
The variable "a:1" contains the first optional argument, "a:2" the second, and
so on.  The variable "a:0" contains the number of extra arguments.
   For example:<pre>:function Show(start, ...)
:  echohl Title
:  echo "start is " .. a:start
:  echohl None
:  let index = 1
:  while index &lt;= a:0
:    echo "  Arg " .. index .. " is " .. a:{index}
:    let index = index + 1
:  endwhile
:  echo ""
:endfunction</pre>
This uses the ":echohl" command to specify the highlighting used for the
following ":echo" command.  ":echohl None" stops it again.  The ":echon"
command works like ":echo", but doesn't output a line break.</div>
<div class="old-help-para">You can also use the a:000 variable, it is a List of all the "..." arguments.
See <a href="/neovim-docs-web/en/userfunc#a%3A000">a:000</a>.</div>
<div class="old-help-para"><a name="_listing-functions"></a><h3 class="help-heading">LISTING FUNCTIONS</h3></div>
<div class="old-help-para">The ":function" command lists the names and arguments of all user-defined
functions:<pre>:function</pre></div>
<div class="old-help-para"><div class="help-column_heading">	function Show(start, ...)</div><div class="help-column_heading">	function GetVimIndent()</div><div class="help-column_heading">	function SetSyn(name)</div></div>
<div class="old-help-para">To see what a function does, use its name as an argument for ":function":<pre>:function SetSyn</pre></div>
<div class="old-help-para"><div class="help-column_heading">	1     if &amp;syntax == ''</div><div class="help-column_heading">	2       let &amp;syntax = a:name</div><div class="help-column_heading">	3     endif</div><div class="help-column_heading">	   endfunction</div></div>
<div class="old-help-para"><a name="_debugging"></a><h3 class="help-heading">DEBUGGING</h3></div>
<div class="old-help-para">The line number is useful for when you get an error message or when debugging.
See <a href="/neovim-docs-web/en/repeat#debug-scripts">debug-scripts</a> about debugging mode.
   You can also set the <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> option to 12 or higher to see all function
calls.  Set it to 15 or higher to see every executed line.</div>
<div class="old-help-para">DELETING A FUNCTION</div>
<div class="old-help-para">To delete the Show() function:<pre>:delfunction Show</pre>
You get an error when the function doesn't exist.</div>
<div class="old-help-para"><a name="_function-references"></a><h3 class="help-heading">FUNCTION REFERENCES</h3></div>
<div class="old-help-para">Sometimes it can be useful to have a variable point to one function or
another.  You can do it with the function() function.  It turns the name of a
function into a reference:<pre>:let result = 0                " or 1
:function! Right()
:  return 'Right!'
:endfunc
:function! Wrong()
:  return 'Wrong!'
:endfunc
:
:if result == 1
:  let Afunc = function('Right')
:else
:  let Afunc = function('Wrong')
:endif
:echo call(Afunc, [])</pre></div>
<div class="old-help-para"><div class="help-column_heading">	Wrong!</div></div>
<div class="old-help-para">Note that the name of a variable that holds a function reference must start
with a capital.  Otherwise it could be confused with the name of a builtin
function.
   The way to invoke a function that a variable refers to is with the call()
function.  Its first argument is the function reference, the second argument
is a List with arguments.</div>
<div class="old-help-para">Function references are most useful in combination with a Dictionary, as is
explained in the next section.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="41.8"></a><span class="help-tag">41.8</span>  	Lists and Dictionaries</span></h2></div>
<div class="old-help-para">So far we have used the basic types String and Number.  Vim also supports two
composite types: List and Dictionary.</div>
<div class="old-help-para">A List is an ordered sequence of things.  The things can be any kind of value,
thus you can make a List of numbers, a List of Lists and even a List of mixed
items.  To create a List with three strings:<pre>:let alist = ['aap', 'mies', 'noot']</pre>
The List items are enclosed in square brackets and separated by commas.  To
create an empty List:<pre>:let alist = []</pre>
You can add items to a List with the add() function:<pre>:let alist = []
:call add(alist, 'foo')
:call add(alist, 'bar')
:echo alist</pre></div>
<div class="old-help-para"><div class="help-column_heading">	['foo',bar]</div></div>
<div class="old-help-para">List concatenation is done with +:<pre>:echo alist + ['foo', 'bar']</pre></div>
<div class="old-help-para"><div class="help-column_heading">	['foo',bar,foo,bar]</div></div>
<div class="old-help-para">Or, if you want to extend a List directly:<pre>:let alist = ['one']
:call extend(alist, ['two', 'three'])
:echo alist</pre></div>
<div class="old-help-para"><div class="help-column_heading">	['one',two,three]</div></div>
<div class="old-help-para">Notice that using add() will have a different effect:<pre>:let alist = ['one']
:call add(alist, ['two', 'three'])
:echo alist</pre></div>
<div class="old-help-para"><div class="help-column_heading">	['one', ['two',three]]</div></div>
<div class="old-help-para">The second argument of add() is added as a single item.</div>
<div class="old-help-para"><a name="_for-loop"></a><h3 class="help-heading">FOR LOOP</h3></div>
<div class="old-help-para">One of the nice things you can do with a List is iterate over it:<pre>:let alist = ['one', 'two', 'three']
:for n in alist
:  echo n
:endfor</pre></div>
<div class="old-help-para"><div class="help-column_heading">	one</div><div class="help-column_heading">	two</div><div class="help-column_heading">	three</div></div>
<div class="old-help-para">This will loop over each element in List "alist", assigning the value to
variable "n".  The generic form of a for loop is:<pre>:for {varname} in {listexpression}
:  {commands}
:endfor</pre>
To loop a certain number of times you need a List of a specific length.  The
range() function creates one for you:<pre>:for a in range(3)
:  echo a
:endfor</pre></div>
<div class="old-help-para"><div class="help-column_heading">	0</div><div class="help-column_heading">	1</div><div class="help-column_heading">	2</div></div>
<div class="old-help-para">Notice that the first item of the List that range() produces is zero, thus the
last item is one less than the length of the list.
   You can also specify the maximum value, the stride and even go backwards:<pre>:for a in range(8, 4, -2)
:  echo a
:endfor</pre></div>
<div class="old-help-para"><div class="help-column_heading">	8</div><div class="help-column_heading">	6</div><div class="help-column_heading">	4</div></div>
<div class="old-help-para">A more useful example, looping over lines in the buffer:<pre>:for line in getline(1, 20)
:  if line =~ "Date: "
:    echo matchstr(line, 'Date: \zs.*')
:  endif
:endfor</pre>
This looks into lines 1 to 20 (inclusive) and echoes any date found in there.</div>
<div class="old-help-para"><a name="_dictionaries"></a><h3 class="help-heading">DICTIONARIES</h3></div>
<div class="old-help-para">A Dictionary stores key-value pairs.  You can quickly lookup a value if you
know the key.  A Dictionary is created with curly braces:<pre>:let uk2nl = {'one': 'een', 'two': 'twee', 'three': 'drie'}</pre>
Now you can lookup words by putting the key in square brackets:<pre>:echo uk2nl['two']</pre></div>
<div class="old-help-para"><div class="help-column_heading">	twee</div></div>
<div class="old-help-para">The generic form for defining a Dictionary is:<pre>{&lt;key&gt; : &lt;value&gt;, ...}</pre>
An empty Dictionary is one without any keys:<pre>{}</pre>
The possibilities with Dictionaries are numerous.  There are various functions
for them as well.  For example, you can obtain a list of the keys and loop
over them:<pre>:for key in keys(uk2nl)
:  echo key
:endfor</pre></div>
<div class="old-help-para"><div class="help-column_heading">	three</div><div class="help-column_heading">	one</div><div class="help-column_heading">	two</div></div>
<div class="old-help-para">You will notice the keys are not ordered.  You can sort the list to get a
specific order:<pre>:for key in sort(keys(uk2nl))
:  echo key
:endfor</pre></div>
<div class="old-help-para"><div class="help-column_heading">	one</div><div class="help-column_heading">	three</div><div class="help-column_heading">	two</div></div>
<div class="old-help-para">But you can never get back the order in which items are defined.  For that you
need to use a List, it stores items in an ordered sequence.</div>
<div class="old-help-para"><a name="_dictionary-functions"></a><h3 class="help-heading">DICTIONARY FUNCTIONS</h3></div>
<div class="old-help-para">The items in a Dictionary can normally be obtained with an index in square
brackets:<pre>:echo uk2nl['one']</pre></div>
<div class="old-help-para"><div class="help-column_heading">	een</div></div>
<div class="old-help-para">A method that does the same, but without so many punctuation characters:<pre>:echo uk2nl.one</pre></div>
<div class="old-help-para"><div class="help-column_heading">	een</div></div>
<div class="old-help-para">This only works for a key that is made of ASCII letters, digits and the
underscore.  You can also assign a new value this way:<pre>:let uk2nl.four = 'vier'
:echo uk2nl</pre></div>
<div class="old-help-para"><div class="help-column_heading">	<code>{'three': 'drie', 'four': 'vier', 'one': 'een', 'two': 'twee'}</code></div></div>
<div class="old-help-para">And now for something special: you can directly define a function and store a
reference to it in the dictionary:<pre>:function uk2nl.translate(line) dict
:  return join(map(split(a:line), 'get(self, v:val, "???")'))
:endfunction</pre>
Let's first try it out:<pre>:echo uk2nl.translate('three two five one')</pre></div>
<div class="old-help-para"><div class="help-column_heading">	drie twee ??? een</div></div>
<div class="old-help-para">The first special thing you notice is the "dict" at the end of the ":function"
line.  This marks the function as being used from a Dictionary.  The "self"
local variable will then refer to that Dictionary.
   Now let's break up the complicated return command:<pre>split(a:line)</pre>
The split() function takes a string, chops it into whitespace separated words
and returns a list with these words.  Thus in the example it returns:<pre>:echo split('three two five one')</pre></div>
<div class="old-help-para"><div class="help-column_heading">	['three',two,five,one]</div></div>
<div class="old-help-para">This list is the first argument to the map() function.  This will go through
the list, evaluating its second argument with "v:val" set to the value of each
item.  This is a shortcut to using a for loop.  This command:<pre>:let alist = map(split(a:line), 'get(self, v:val, "???")')</pre>
Is equivalent to:<pre>:let alist = split(a:line)
:for idx in range(len(alist))
:  let alist[idx] = get(self, alist[idx], "???")
:endfor</pre>
The get() function checks if a key is present in a Dictionary.  If it is, then
the value is retrieved.  If it isn't, then the default value is returned, in
the example it's '???'.  This is a convenient way to handle situations where a
key may not be present and you don't want an error message.</div>
<div class="old-help-para">The join() function does the opposite of split(): it joins together a list of
words, putting a space in between.
  This combination of split(), map() and join() is a nice way to filter a line
of words in a very compact way.</div>
<div class="old-help-para"><a name="_object-oriented-programming"></a><h3 class="help-heading">OBJECT ORIENTED PROGRAMMING</h3></div>
<div class="old-help-para">Now that you can put both values and functions in a Dictionary, you can
actually use a Dictionary like an object.
   Above we used a Dictionary for translating Dutch to English.  We might want
to do the same for other languages.  Let's first make an object (aka
Dictionary) that has the translate function, but no words to translate:<pre>:let transdict = {}
:function transdict.translate(line) dict
:  return join(map(split(a:line), 'get(self.words, v:val, "???")'))
:endfunction</pre>
It's slightly different from the function above, using 'self.words' to lookup
word translations.  But we don't have a self.words.  Thus you could call this
an abstract class.</div>
<div class="old-help-para">Now we can instantiate a Dutch translation object:<pre>:let uk2nl = copy(transdict)
:let uk2nl.words = {'one': 'een', 'two': 'twee', 'three': 'drie'}
:echo uk2nl.translate('three one')</pre></div>
<div class="old-help-para"><div class="help-column_heading">	drie een</div></div>
<div class="old-help-para">And a German translator:<pre>:let uk2de = copy(transdict)
:let uk2de.words = {'one': 'eins', 'two': 'zwei', 'three': 'drei'}
:echo uk2de.translate('three one')</pre></div>
<div class="old-help-para"><div class="help-column_heading">	drei eins</div></div>
<div class="old-help-para">You see that the copy() function is used to make a copy of the "transdict"
Dictionary and then the copy is changed to add the words.  The original
remains the same, of course.</div>
<div class="old-help-para">Now you can go one step further, and use your preferred translator:<pre>:if $LANG =~ "de"
:  let trans = uk2de
:else
:  let trans = uk2nl
:endif
:echo trans.translate('one two three')</pre></div>
<div class="old-help-para"><div class="help-column_heading">	een twee drie</div></div>
<div class="old-help-para">Here "trans" refers to one of the two objects (Dictionaries).  No copy is
made.  More about List and Dictionary identity can be found at <a href="/neovim-docs-web/en/eval#list-identity">list-identity</a>
and <a href="/neovim-docs-web/en/eval#dict-identity">dict-identity</a>.</div>
<div class="old-help-para">Now you might use a language that isn't supported.  You can overrule the
translate() function to do nothing:<pre>:let uk2uk = copy(transdict)
:function! uk2uk.translate(line)
:  return a:line
:endfunction
:echo uk2uk.translate('three one wladiwostok')</pre></div>
<div class="old-help-para"><div class="help-column_heading">	three one wladiwostok</div></div>
<div class="old-help-para">Notice that a ! was used to overwrite the existing function reference.  Now
use "uk2uk" when no recognized language is found:<pre>:if $LANG =~ "de"
:  let trans = uk2de
:elseif $LANG =~ "nl"
:  let trans = uk2nl
:else
:  let trans = uk2uk
:endif
:echo trans.translate('one two three')</pre></div>
<div class="old-help-para"><div class="help-column_heading">	one two three</div></div>
<div class="old-help-para">For further reading see <a href="/neovim-docs-web/en/eval#Lists">Lists</a> and <a href="/neovim-docs-web/en/eval#Dictionaries">Dictionaries</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="41.9"></a><span class="help-tag">41.9</span>  	Exceptions</span></h2></div>
<div class="old-help-para">Let's start with an example:<pre>:try
:   read ~/templates/pascal.tmpl
:catch /E484:/
:   echo "Sorry, the Pascal template file cannot be found."
:endtry</pre>
The ":read" command will fail if the file does not exist.  Instead of
generating an error message, this code catches the error and gives the user a
nice message.</div>
<div class="old-help-para">For the commands in between ":try" and ":endtry" errors are turned into
exceptions.  An exception is a string.  In the case of an error the string
contains the error message.  And every error message has a number.  In this
case, the error we catch contains "E484:".  This number is guaranteed to stay
the same (the text may change, e.g., it may be translated).</div>
<div class="old-help-para">When the ":read" command causes another error, the pattern "E484:" will not
match in it.  Thus this exception will not be caught and result in the usual
error message and execution is aborted.</div>
<div class="old-help-para">You might be tempted to do this:<pre>:try
:   read ~/templates/pascal.tmpl
:catch
:   echo "Sorry, the Pascal template file cannot be found."
:endtry</pre>
This means all errors are caught.  But then you will not see errors that are
useful, such as "E21: Cannot make changes, <a href="/neovim-docs-web/en/options#'modifiable'">'modifiable'</a> is off".</div>
<div class="old-help-para">Another useful mechanism is the ":finally" command:<pre>:let tmp = tempname()
:try
:   exe ".,$write " .. tmp
:   exe "!filter " .. tmp
:   .,$delete
:   exe "$read " .. tmp
:finally
:   call delete(tmp)
:endtry</pre>
This filters the lines from the cursor until the end of the file through the
"filter" command, which takes a file name argument.  No matter if the
filtering works, something goes wrong in between ":try" and ":finally" or the
user cancels the filtering by pressing <code>CTRL-C</code>, the "call delete(tmp)" is
always executed.  This makes sure you don't leave the temporary file behind.</div>
<div class="old-help-para">More information about exception handling can be found in the reference
manual: <a href="/neovim-docs-web/en/eval#exception-handling">exception-handling</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="41.10"></a><span class="help-tag">41.10</span>  	Various remarks</span></h2></div>
<div class="old-help-para">Here is a summary of items that apply to Vim scripts.  They are also mentioned
elsewhere, but form a nice checklist.</div>
<div class="old-help-para">The end-of-line character depends on the system.  For Vim scripts it is
recommended to always use the Unix fileformat.  Lines are then separated with
the Newline character.  This also works on any other system.  That way you can
copy your Vim scripts from MS-Windows to Unix and they still work.  See
<a href="/neovim-docs-web/en/repeat#%3Asource_crnl">:source_crnl</a>.  To be sure it is set right, do this before writing the file:
<pre>:setlocal fileformat=unix</pre>
When using "dos" fileformat, lines are separated with CR-NL, two characters.
The CR character causes various problems, better avoid this.</div>
<div class="old-help-para"><a name="_white-space"></a><h3 class="help-heading">WHITE SPACE</h3></div>
<div class="old-help-para">Blank lines are allowed in a script and ignored.</div>
<div class="old-help-para">Leading whitespace characters (blanks and TABs) are ignored, except when using
<a href="/neovim-docs-web/en/eval#%3Alet-heredoc">:let-heredoc</a> without "trim".</div>
<div class="old-help-para">Trailing whitespace is often ignored, but not always.  One command that
includes it is <code>map</code>.  You have to watch out for that, it can cause hard to
understand mistakes.  A generic solution is to never use trailing white space,
unless you really need it.</div>
<div class="old-help-para">To include a whitespace character in the value of an option, it must be
escaped by a "\" (backslash)  as in the following example:<pre>:set tags=my\ nice\ file</pre>
The same example written as:<pre>:set tags=my nice file</pre>
will issue an error, because it is interpreted as:<pre>:set tags=my
:set nice
:set file</pre>
<a name="_comments"></a><h3 class="help-heading">COMMENTS</h3></div>
<div class="old-help-para">The character " (the double quote mark) starts a comment.  Everything after
and including this character until the end-of-line is considered a comment and
is ignored, except for commands that don't consider comments, as shown in
examples below.  A comment can start on any character position on the line.</div>
<div class="old-help-para">There is a little "catch" with comments for some commands.  Examples:<pre>:abbrev dev development                " shorthand
:map &lt;F3&gt; o#include                " insert include
:execute cmd                        " do it
:!ls *.c                        " list C files</pre>
The abbreviation "dev" will be expanded todevelopment     " shorthand'.  The
mapping of <code>&lt;F3&gt;</code> will actually be the whole line after the 'o# ....' including
the '" insert include'.  The "execute" command will give an error.  The "!"
command will send everything after it to the shell, causing an error for an
unmatched '"' character.
   There can be no comment after ":map", ":abbreviate", ":execute" and "!"
commands (there are a few more commands with this restriction).  For the
":map", ":abbreviate" and ":execute" commands there is a trick:<pre>:abbrev dev development|" shorthand
:map &lt;F3&gt; o#include|" insert include
:execute cmd                        |" do it</pre>
With the '|' character the command is separated from the next one.  And that
next command is only a comment.  For the last command you need to do two
things: <a href="/neovim-docs-web/en/eval#%3Aexecute">:execute</a> and use '|':<pre>:exe '!ls *.c'                        |" list C files</pre>
Notice that there is no white space before the '|' in the abbreviation and
mapping.  For these commands, any character until the end-of-line or '|' is
included.  As a consequence of this behavior, you don't always see that
trailing whitespace is included:<pre>:map &lt;F4&gt; o#include</pre>
To spot these problems, you can set the <a href="/neovim-docs-web/en/options#'list'">'list'</a> option when editing vimrc
files.</div>
<div class="old-help-para">For Unix there is one special way to comment a line, that allows making a Vim
script executable:<pre>#!/usr/bin/env vim -S
echo "this is a Vim script"
quit</pre>
The "#" command by itself lists a line with the line number.  Adding an
exclamation mark changes it into doing nothing, so that you can add the shell
command to execute the rest of the file. <a href="/neovim-docs-web/en/various#%3A%23%21">:#!</a> <a href="/neovim-docs-web/en/starting#-S">-S</a></div>
<div class="old-help-para"><a name="_pitfalls"></a><h3 class="help-heading">PITFALLS</h3></div>
<div class="old-help-para">Even bigger problem arises in the following example:<pre>:map ,ab o#include
:unmap ,ab</pre>
Here the unmap command will not work, because it tries to unmap ",ab ".  This
does not exist as a mapped sequence.  An error will be issued, which is very
hard to identify, because the ending whitespace character in ":unmap ,ab " is
not visible.</div>
<div class="old-help-para">And this is the same as what happens when one uses a comment after an "unmap"
command:<pre>:unmap ,ab     " comment</pre>
Here the comment part will be ignored.  However, Vim will try to unmap
',ab     ', which does not exist.  Rewrite it as:<pre>:unmap ,ab|    " comment</pre>
<a name="_restoring-the-view"></a><h3 class="help-heading">RESTORING THE VIEW</h3></div>
<div class="old-help-para">Sometimes you want to make a change and go back to where the cursor was.
Restoring the relative position would also be nice, so that the same line
appears at the top of the window.
   This example yanks the current line, puts it above the first line in the
file and then restores the view:<pre>map ,p ma"aYHmbgg"aP`bzt`a</pre>
What this does:<pre>ma"aYHmbgg"aP`bzt`a</pre></div>
<div class="old-help-para">	ma			set mark a at cursor position
	  "aY			yank current line into register a
	     Hmb		go to top line in window and set mark b there
		gg		go to first line in file
		  "aP		put the yanked line above it
b		go back to top line in display
		       zt	position the text in the window as before
a	go back to saved cursor position</div>
<div class="old-help-para"><a name="_packaging"></a><h3 class="help-heading">PACKAGING</h3></div>
<div class="old-help-para">To avoid your function names to interfere with functions that you get from
others, use this scheme:
<div class="help-li" style=""> Prepend a unique string before each function name.  I often use an
  abbreviation.  For example, "OW_" is used for the option window functions.
</div><div class="help-li" style=""> Put the definition of your functions together in a file.  Set a global
  variable to indicate that the functions have been loaded.  When sourcing the
  file again, first unload the functions.
Example:<pre>" This is the XXX package

if exists("XXX_loaded")
  delfun XXX_one
  delfun XXX_two
endif

function XXX_one(a)
        ... body of function ...
endfun

function XXX_two(b)
        ... body of function ...
endfun

let XXX_loaded = 1</pre>
==============================================================================
<a name="41.11"></a><code class="help-tag">41.11</code>  	Writing a plugin				<a name="write-plugin"></a><code class="help-tag-right">write-plugin</code>
</div></div>
<div class="old-help-para">You can write a Vim script in such a way that many people can use it.  This is
called a plugin.  Vim users can drop your script in their plugin directory and
use its features right away <a href="/neovim-docs-web/en/usr_05#add-plugin">add-plugin</a>.</div>
<div class="old-help-para">There are actually two types of plugins:</div>
<div class="old-help-para">  global plugins: For all types of files.
filetype plugins: Only for files of a specific type.</div>
<div class="old-help-para">In this section the first type is explained.  Most items are also relevant for
writing filetype plugins.  The specifics for filetype plugins are in the next
section <a href="/neovim-docs-web/en/usr_41#write-filetype-plugin">write-filetype-plugin</a>.</div>
<div class="old-help-para"><a name="_name"></a><h3 class="help-heading">NAME</h3></div>
<div class="old-help-para">First of all you must choose a name for your plugin.  The features provided
by the plugin should be clear from its name.  And it should be unlikely that
someone else writes a plugin with the same name but which does something
different.  And please limit the name to 8 characters, to avoid problems on
old MS-Windows systems.</div>
<div class="old-help-para">A script that corrects typing mistakes could be called "typecorr.vim".  We
will use it here as an example.</div>
<div class="old-help-para">For the plugin to work for everybody, it should follow a few guidelines.  This
will be explained step-by-step.  The complete example plugin is at the end.</div>
<div class="old-help-para"><a name="_body"></a><h3 class="help-heading">BODY</h3></div>
<div class="old-help-para">Let's start with the body of the plugin, the lines that do the actual work:<pre>14        iabbrev teh the
15        iabbrev otehr other
16        iabbrev wnat want
17        iabbrev synchronisation
18                \ synchronization
19        let s:count = 4</pre>
The actual list should be much longer, of course.</div>
<div class="old-help-para">The line numbers have only been added to explain a few things, don't put them
in your plugin file!</div>
<div class="old-help-para"><a name="_header"></a><h3 class="help-heading">HEADER</h3></div>
<div class="old-help-para">You will probably add new corrections to the plugin and soon have several
versions lying around.  And when distributing this file, people will want to
know who wrote this wonderful plugin and where they can send remarks.
Therefore, put a header at the top of your plugin:<pre>1        " Vim global plugin for correcting typing mistakes
2        " Last Change:        2000 Oct 15
3        " Maintainer:        Bram Moolenaar &lt;Bram@vim.org&gt;</pre>
About copyright and licensing: Since plugins are very useful and it's hardly
worth restricting their distribution, please consider making your plugin
either public domain or use the Vim <a href="/neovim-docs-web/en/uganda#license">license</a>.  A short note about this near
the top of the plugin should be sufficient.  Example:<pre>4        " License:        This file is placed in the public domain.</pre>
LINE CONTINUATION, AVOIDING SIDE EFFECTS		<a name="use-cpo-save"></a><code class="help-tag-right">use-cpo-save</code></div>
<div class="old-help-para">In line 18 above, the line-continuation mechanism is used <a href="/neovim-docs-web/en/repeat#line-continuation">line-continuation</a>.
Users with <a href="/neovim-docs-web/en/vim_diff#'compatible'">'compatible'</a> set will run into trouble here, they will get an error
message.  We can't just reset <a href="/neovim-docs-web/en/vim_diff#'compatible'">'compatible'</a>, because that has a lot of side
effects.  To avoid this, we will set the <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> option to its Vim default
value and restore it later.  That will allow the use of line-continuation and
make the script work for most people.  It is done like this:<pre>11        let s:save_cpo = &amp;cpo
12        set cpo&amp;vim
..
42        let &amp;cpo = s:save_cpo
43        unlet s:save_cpo</pre>
We first store the old value of <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> in the s:save_cpo variable.  At
the end of the plugin this value is restored.</div>
<div class="old-help-para">Notice that a script-local variable is used <a href="/neovim-docs-web/en/eval#s%3Avar">s:var</a>.  A global variable could
already be in use for something else.  Always use script-local variables for
things that are only used in the script.</div>
<div class="old-help-para"><a name="_not-loading"></a><h3 class="help-heading">NOT LOADING</h3></div>
<div class="old-help-para">It's possible that a user doesn't always want to load this plugin.  Or the
system administrator has dropped it in the system-wide plugin directory, but a
user has their own plugin they want to use.  Then the user must have a chance to
disable loading this specific plugin.  This will make it possible:<pre>6        if exists("g:loaded_typecorr")
7          finish
8        endif
9        let g:loaded_typecorr = 1</pre>
This also avoids that when the script is loaded twice it would cause error
messages for redefining functions and cause trouble for autocommands that are
added twice.</div>
<div class="old-help-para">The name is recommended to start with "loaded_" and then the file name of the
plugin, literally.  The "g:" is prepended just to avoid mistakes when using
the variable in a function (without "g:" it would be a variable local to the
function).</div>
<div class="old-help-para">Using "finish" stops Vim from reading the rest of the file, it's much quicker
than using if-endif around the whole file.</div>
<div class="old-help-para"><a name="_mapping"></a><h3 class="help-heading">MAPPING</h3></div>
<div class="old-help-para">Now let's make the plugin more interesting: We will add a mapping that adds a
correction for the word under the cursor.  We could just pick a key sequence
for this mapping, but the user might already use it for something else.  To
allow the user to define which keys a mapping in a plugin uses, the <code>&lt;Leader&gt;</code>
item can be used:<pre>22          map &lt;unique&gt; &lt;Leader&gt;a  &lt;Plug&gt;TypecorrAdd;</pre>
The "&lt;Plug&gt;TypecorrAdd;" thing will do the work, more about that further on.</div>
<div class="old-help-para">The user can set the "mapleader" variable to the key sequence that they want
this mapping to start with.  Thus if the user has done:<pre>let mapleader = "_"</pre>
the mapping will define "_a".  If the user didn't do this, the default value
will be used, which is a backslash.  Then a map for "\a" will be defined.</div>
<div class="old-help-para">Note that <code>&lt;unique&gt;</code> is used, this will cause an error message if the mapping
already happened to exist. <a href="/neovim-docs-web/en/map#%3Amap-%3Cunique%3E">:map-&lt;unique&gt;</a></div>
<div class="old-help-para">But what if the user wants to define their own key sequence?  We can allow that
with this mechanism:<pre>21        if !hasmapto('&lt;Plug&gt;TypecorrAdd;')
22          map &lt;unique&gt; &lt;Leader&gt;a  &lt;Plug&gt;TypecorrAdd;
23        endif</pre>
This checks if a mapping to "&lt;Plug&gt;TypecorrAdd;" already exists, and only
defines the mapping from "&lt;Leader&gt;a" if it doesn't.  The user then has a
chance of putting this in their vimrc file:<pre>map ,c  &lt;Plug&gt;TypecorrAdd;</pre>
Then the mapped key sequence will be ",c" instead of "_a" or "\a".</div>
<div class="old-help-para"><a name="_pieces"></a><h3 class="help-heading">PIECES</h3></div>
<div class="old-help-para">If a script gets longer, you often want to break up the work in pieces.  You
can use functions or mappings for this.  But you don't want these functions
and mappings to interfere with the ones from other scripts.  For example, you
could define a function Add(), but another script could try to define the same
function.  To avoid this, we define the function local to the script by
prepending it with "s:".</div>
<div class="old-help-para">We will define a function that adds a new typing correction:<pre>30        function s:Add(from, correct)
31          let to = input("type the correction for " .. a:from .. ": ")
32          exe ":iabbrev " .. a:from .. " " .. to
..
36        endfunction</pre>
Now we can call the function s:Add() from within this script.  If another
script also defines s:Add(), it will be local to that script and can only
be called from the script it was defined in.  There can also be a global Add()
function (without the "s:"), which is again another function.</div>
<div class="old-help-para"><code>&lt;SID&gt;</code> can be used with mappings.  It generates a script ID, which identifies
the current script.  In our typing correction plugin we use it like this:<pre>24        noremap &lt;unique&gt; &lt;script&gt; &lt;Plug&gt;TypecorrAdd;  &lt;SID&gt;Add
..
28        noremap &lt;SID&gt;Add  :call &lt;SID&gt;Add(expand("&lt;cword&gt;"), 1)&lt;CR&gt;</pre>
Thus when a user types "\a", this sequence is invoked:<pre>\a  -&gt;  &lt;Plug&gt;TypecorrAdd;  -&gt;  &lt;SID&gt;Add  -&gt;  :call &lt;SID&gt;Add()</pre>
If another script also maps <code>&lt;SID&gt;</code>Add, it will get another script ID and
thus define another mapping.</div>
<div class="old-help-para">Note that instead of s:Add() we use <code>&lt;SID&gt;</code>Add() here.  That is because the
mapping is typed by the user, thus outside of the script.  The <code>&lt;SID&gt;</code> is
translated to the script ID, so that Vim knows in which script to look for
the Add() function.</div>
<div class="old-help-para">This is a bit complicated, but it's required for the plugin to work together
with other plugins.  The basic rule is that you use <code>&lt;SID&gt;</code>Add() in mappings and
s:Add() in other places (the script itself, autocommands, user commands).</div>
<div class="old-help-para">We can also add a menu entry to do the same as the mapping:<pre>26        noremenu &lt;script&gt; Plugin.Add\ Correction      &lt;SID&gt;Add</pre>
The "Plugin" menu is recommended for adding menu items for plugins.  In this
case only one item is used.  When adding more items, creating a submenu is
recommended.  For example, "Plugin.CVS" could be used for a plugin that offers
CVS operations "Plugin.CVS.checkin", "Plugin.CVS.checkout", etc.</div>
<div class="old-help-para">Note that in line 28 ":noremap" is used to avoid that any other mappings cause
trouble.  Someone may have remapped ":call", for example.  In line 24 we also
use ":noremap", but we do want "&lt;SID&gt;Add" to be remapped.  This is why
"&lt;script&gt;" is used here.  This only allows mappings which are local to the
script. <a href="/neovim-docs-web/en/map#%3Amap-%3Cscript%3E">:map-&lt;script&gt;</a>  The same is done in line 26 for ":noremenu".
<a href="/neovim-docs-web/en/gui#%3Amenu-%3Cscript%3E">:menu-&lt;script&gt;</a></div>
<div class="old-help-para"><code>&lt;SID&gt;</code> AND <code>&lt;Plug&gt;</code>					<a name="using-%3CPlug%3E"></a><code class="help-tag-right">using-&lt;Plug&gt;</code></div>
<div class="old-help-para">Both <code>&lt;SID&gt;</code> and <code>&lt;Plug&gt;</code> are used to avoid that mappings of typed keys interfere
with mappings that are only to be used from other mappings.  Note the
difference between using <code>&lt;SID&gt;</code> and <code>&lt;Plug&gt;</code>:</div>
<div class="old-help-para"><code>&lt;Plug&gt;</code>	is visible outside of the script.  It is used for mappings which the
	user might want to map a key sequence to.  <code>&lt;Plug&gt;</code> is a special code
	that a typed key will never produce.
	To make it very unlikely that other plugins use the same sequence of
	characters, use this structure: <code>&lt;Plug&gt;</code> scriptname mapname
	In our example the scriptname is "Typecorr" and the mapname is "Add".
	We add a semicolon as the terminator.  This results in
	"&lt;Plug&gt;TypecorrAdd;".  Only the first character of scriptname and
	mapname is uppercase, so that we can see where mapname starts.</div>
<div class="old-help-para"><code>&lt;SID&gt;</code>	is the script ID, a unique identifier for a script.
	Internally Vim translates <code>&lt;SID&gt;</code> to "&lt;SNR&gt;123_", where "123" can be any
	number.  Thus a function "&lt;SID&gt;Add()" will have a name "&lt;SNR&gt;11_Add()"
	in one script, and "&lt;SNR&gt;22_Add()" in another.  You can see this if
	you use the ":function" command to get a list of functions.  The
	translation of <code>&lt;SID&gt;</code> in mappings is exactly the same, that's how you
	can call a script-local function from a mapping.</div>
<div class="old-help-para"><a name="_user-command"></a><h3 class="help-heading">USER COMMAND</h3></div>
<div class="old-help-para">Now let's add a user command to add a correction:<pre>38        if !exists(":Correct")
39          command -nargs=1  Correct  :call s:Add(&lt;q-args&gt;, 0)
40        endif</pre>
The user command is defined only if no command with the same name already
exists.  Otherwise we would get an error here.  Overriding the existing user
command with ":command!" is not a good idea, this would probably make the user
wonder why the command they defined themself doesn't work.  <a href="/neovim-docs-web/en/map#%3Acommand">:command</a></div>
<div class="old-help-para"><a name="_script-variables"></a><h3 class="help-heading">SCRIPT VARIABLES</h3></div>
<div class="old-help-para">When a variable starts with "s:" it is a script variable.  It can only be used
inside a script.  Outside the script it's not visible.  This avoids trouble
with using the same variable name in different scripts.  The variables will be
kept as long as Vim is running.  And the same variables are used when sourcing
the same script again. <a href="/neovim-docs-web/en/eval#s%3Avar">s:var</a></div>
<div class="old-help-para">The fun is that these variables can also be used in functions, autocommands
and user commands that are defined in the script.  In our example we can add
a few lines to count the number of corrections:<pre>19        let s:count = 4
..
30        function s:Add(from, correct)
..
34          let s:count = s:count + 1
35          echo s:count .. " corrections now"
36        endfunction</pre>
First s:count is initialized to 4 in the script itself.  When later the
s:Add() function is called, it increments s:count.  It doesn't matter from
where the function was called, since it has been defined in the script, it
will use the local variables from this script.</div>
<div class="old-help-para"><a name="_the-result"></a><h3 class="help-heading">THE RESULT</h3></div>
<div class="old-help-para">Here is the resulting complete example:<pre> 1        " Vim global plugin for correcting typing mistakes
 2        " Last Change:        2000 Oct 15
 3        " Maintainer:        Bram Moolenaar &lt;Bram@vim.org&gt;
 4        " License:        This file is placed in the public domain.
 5
 6        if exists("g:loaded_typecorr")
 7          finish
 8        endif
 9        let g:loaded_typecorr = 1
10
11        let s:save_cpo = &amp;cpo
12        set cpo&amp;vim
13
14        iabbrev teh the
15        iabbrev otehr other
16        iabbrev wnat want
17        iabbrev synchronisation
18                \ synchronization
19        let s:count = 4
20
21        if !hasmapto('&lt;Plug&gt;TypecorrAdd;')
22          map &lt;unique&gt; &lt;Leader&gt;a  &lt;Plug&gt;TypecorrAdd;
23        endif
24        noremap &lt;unique&gt; &lt;script&gt; &lt;Plug&gt;TypecorrAdd;  &lt;SID&gt;Add
25
26        noremenu &lt;script&gt; Plugin.Add\ Correction      &lt;SID&gt;Add
27
28        noremap &lt;SID&gt;Add  :call &lt;SID&gt;Add(expand("&lt;cword&gt;"), 1)&lt;CR&gt;
29
30        function s:Add(from, correct)
31          let to = input("type the correction for " .. a:from .. ": ")
32          exe ":iabbrev " .. a:from .. " " .. to
33          if a:correct | exe "normal viws\&lt;C-R&gt;\" \b\e" | endif
34          let s:count = s:count + 1
35          echo s:count .. " corrections now"
36        endfunction
37
38        if !exists(":Correct")
39          command -nargs=1  Correct  :call s:Add(&lt;q-args&gt;, 0)
40        endif
41
42        let &amp;cpo = s:save_cpo
43        unlet s:save_cpo</pre>
Line 33 wasn't explained yet.  It applies the new correction to the word under
the cursor.  The <a href="/neovim-docs-web/en/various#%3Anormal">:normal</a> command is used to use the new abbreviation.  Note
that mappings and abbreviations are expanded here, even though the function
was called from a mapping defined with ":noremap".</div>
<div class="old-help-para">Using "unix" for the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> option is recommended.  The Vim scripts will
then work everywhere.  Scripts with <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> set to "dos" do not work on
Unix.  Also see <a href="/neovim-docs-web/en/repeat#%3Asource_crnl">:source_crnl</a>.  To be sure it is set right, do this before
writing the file:<pre>:set fileformat=unix</pre>
<h3 class="help-heading">DOCUMENTATION<span class="help-heading-tags">						<a name="write-local-help"></a><span class="help-tag">write-local-help</span></span></h3></div>
<div class="old-help-para">It's a good idea to also write some documentation for your plugin.  Especially
when its behavior can be changed by the user.  See <a href="/neovim-docs-web/en/usr_05#add-local-help">add-local-help</a> for how
they are installed.</div>
<div class="old-help-para">Here is a simple example for a plugin help file, called "typecorr.txt":<pre> 1        *typecorr.txt*        Plugin for correcting typing mistakes
 2
 3        If you make typing mistakes, this plugin will have them corrected
 4        automatically.
 5
 6        There are currently only a few corrections.  Add your own if you like.
 7
 8        Mappings:
 9        &lt;Leader&gt;a   or   &lt;Plug&gt;TypecorrAdd;
10                Add a correction for the word under the cursor.
11
12        Commands:
13        :Correct {word}
14                Add a correction for {word}.
15
16                                                        *typecorr-settings*
17        This plugin doesn't have any settings.</pre>
The first line is actually the only one for which the format matters.  It will
be extracted from the help file to be put in the "LOCAL ADDITIONS:" section of
first line.  After adding your help file do ":help" and check that the entries
line up nicely.</div>
<div class="old-help-para">You can add more tags inside ** in your help file.  But be careful not to use
existing help tags.  You would probably use the name of your plugin in most of
them, like "typecorr-settings" in the example.</div>
<div class="old-help-para">Using references to other parts of the help in || is recommended.  This makes
it easy for the user to find associated help.</div>
<div class="old-help-para"><h3 class="help-heading">FILETYPE DETECTION<span class="help-heading-tags">					<a name="plugin-filetype"></a><span class="help-tag">plugin-filetype</span></span></h3></div>
<div class="old-help-para">If your filetype is not already detected by Vim, you should create a filetype
detection snippet in a separate file.  It is usually in the form of an
autocommand that sets the filetype when the file name matches a pattern.
Example:<pre>au BufNewFile,BufRead *.foo                        set filetype=foofoo</pre>
Write this single-line file as "ftdetect/foofoo.vim" in the first directory
that appears in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  For Unix that would be
"~/.config/nvim/ftdetect/foofoo.vim".  The convention is to use the name of
the filetype for the script name.</div>
<div class="old-help-para">You can make more complicated checks if you like, for example to inspect the
contents of the file to recognize the language.  Also see <a href="/neovim-docs-web/en/filetype#new-filetype">new-filetype</a>.</div>
<div class="old-help-para"><h3 class="help-heading">SUMMARY<span class="help-heading-tags">							<a name="plugin-special"></a><span class="help-tag">plugin-special</span></span></h3></div>
<div class="old-help-para">Summary of special things to use in a plugin:</div>
<div class="old-help-para">s:name			Variables local to the script.</div>
<div class="old-help-para"><code>&lt;SID&gt;</code>			Script-ID, used for mappings and functions local to
			the script.</div>
<div class="old-help-para">hasmapto()		Function to test if the user already defined a mapping
			for functionality the script offers.</div>
<div class="old-help-para"><code>&lt;Leader&gt;</code>		Value of "mapleader", which the user defines as the
			keys that plugin mappings start with.</div>
<div class="old-help-para">:map <code>&lt;unique&gt;</code>		Give a warning if a mapping already exists.</div>
<div class="old-help-para">:noremap <code>&lt;script&gt;</code>	Use only mappings local to the script, not global
			mappings.</div>
<div class="old-help-para">exists(":Cmd")		Check if a user command already exists.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="41.12"></a><span class="help-tag">41.12</span>  	Writing a filetype plugin<span class="help-heading-tags">	<a name="write-filetype-plugin"></a><span class="help-tag">write-filetype-plugin</span> <a name="ftplugin"></a><span class="help-tag">ftplugin</span></span></span></h2></div>
<div class="old-help-para">A filetype plugin is like a global plugin, except that it sets options and
defines mappings for the current buffer only.  See <a href="/neovim-docs-web/en/usr_05#add-filetype-plugin">add-filetype-plugin</a> for
how this type of plugin is used.</div>
<div class="old-help-para">First read the section on global plugins above <a href="/neovim-docs-web/en/usr_41#41.11">41.11</a>.  All that is said there
also applies to filetype plugins.  There are a few extras, which are explained
here.  The essential thing is that a filetype plugin should only have an
effect on the current buffer.</div>
<div class="old-help-para"><a name="_disabling"></a><h3 class="help-heading">DISABLING</h3></div>
<div class="old-help-para">If you are writing a filetype plugin to be used by many people, they need a
chance to disable loading it.  Put this at the top of the plugin:<pre>" Only do this when not done yet for this buffer
if exists("b:did_ftplugin")
  finish
endif
let b:did_ftplugin = 1</pre>
This also needs to be used to avoid that the same plugin is executed twice for
the same buffer (happens when using an ":edit" command without arguments).</div>
<div class="old-help-para">Now users can disable loading the default plugin completely by making a
filetype plugin with only this line:<pre>let b:did_ftplugin = 1</pre>
This does require that the filetype plugin directory comes before $VIMRUNTIME
in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>!</div>
<div class="old-help-para">If you do want to use the default plugin, but overrule one of the settings,
you can write the different setting in a script:<pre>setlocal textwidth=70</pre>
Now write this in the "after" directory, so that it gets sourced after the
distributed "vim.vim" ftplugin <a href="/neovim-docs-web/en/options#after-directory">after-directory</a>.  For Unix this would be
"~/.config/nvim/after/ftplugin/vim.vim".  Note that the default plugin will
have set "b:did_ftplugin", but it is ignored here.</div>
<div class="old-help-para"><a name="_options"></a><h3 class="help-heading">OPTIONS</h3></div>
<div class="old-help-para">To make sure the filetype plugin only affects the current buffer use the<pre>:setlocal</pre>
command to set options.  And only set options which are local to a buffer (see
the help for the option to check that).  When using <a href="/neovim-docs-web/en/options#%3Asetlocal">:setlocal</a> for global
options or options local to a window, the value will change for many buffers,
and that is not what a filetype plugin should do.</div>
<div class="old-help-para">When an option has a value that is a list of flags or items, consider using
"+=" and "-=" to keep the existing value.  Be aware that the user may have
changed an option value already.  First resetting to the default value and
then changing it is often a good idea.  Example:<pre>:setlocal formatoptions&amp; formatoptions+=ro</pre>
<a name="_mappings"></a><h3 class="help-heading">MAPPINGS</h3></div>
<div class="old-help-para">To make sure mappings will only work in the current buffer use the<pre>:map &lt;buffer&gt;</pre>
command.  This needs to be combined with the two-step mapping explained above.
An example of how to define functionality in a filetype plugin:<pre>if !hasmapto('&lt;Plug&gt;JavaImport;')
  map &lt;buffer&gt; &lt;unique&gt; &lt;LocalLeader&gt;i &lt;Plug&gt;JavaImport;
endif
noremap &lt;buffer&gt; &lt;unique&gt; &lt;Plug&gt;JavaImport; oimport ""&lt;Left&gt;&lt;Esc&gt;</pre>
<a href="/neovim-docs-web/en/builtin#hasmapto()">hasmapto()</a> is used to check if the user has already defined a map to
<code>&lt;Plug&gt;</code>JavaImport;.  If not, then the filetype plugin defines the default
mapping.  This starts with <a href="/neovim-docs-web/en/map#%3CLocalLeader%3E">&lt;LocalLeader&gt;</a>, which allows the user to select
the key(s) they want filetype plugin mappings to start with.  The default is a
backslash.
"&lt;unique&gt;" is used to give an error message if the mapping already exists or
overlaps with an existing mapping.
<a href="/neovim-docs-web/en/map#%3Anoremap">:noremap</a> is used to avoid that any other mappings that the user has defined
interferes.  You might want to use ":noremap <code>&lt;script&gt;</code>" to allow remapping
mappings defined in this script that start with <code>&lt;SID&gt;</code>.</div>
<div class="old-help-para">The user must have a chance to disable the mappings in a filetype plugin,
without disabling everything.  Here is an example of how this is done for a
plugin for the mail filetype:<pre>" Add mappings, unless the user didn't want this.
if !exists("no_plugin_maps") &amp;&amp; !exists("no_mail_maps")
  " Quote text by inserting "&gt; "
  if !hasmapto('&lt;Plug&gt;MailQuote;')
    vmap &lt;buffer&gt; &lt;LocalLeader&gt;q &lt;Plug&gt;MailQuote;
    nmap &lt;buffer&gt; &lt;LocalLeader&gt;q &lt;Plug&gt;MailQuote;
  endif
  vnoremap &lt;buffer&gt; &lt;Plug&gt;MailQuote; :s/^/&gt; /&lt;CR&gt;
  nnoremap &lt;buffer&gt; &lt;Plug&gt;MailQuote; :.,$s/^/&gt; /&lt;CR&gt;
endif</pre>
Two global variables are used:
<a href="/neovim-docs-web/en/filetype#no_plugin_maps">no_plugin_maps</a>  	disables mappings for all filetype plugins
<a href="/neovim-docs-web/en/filetype#no_mail_maps">no_mail_maps</a>  		disables mappings for the "mail" filetype</div>
<div class="old-help-para"><a name="_user-commands"></a><h3 class="help-heading">USER COMMANDS</h3></div>
<div class="old-help-para">To add a user command for a specific file type, so that it can only be used in
one buffer, use the "-buffer" argument to <a href="/neovim-docs-web/en/map#%3Acommand">:command</a>.  Example:<pre>:command -buffer  Make  make %:r.s</pre>
<a name="_variables"></a><h3 class="help-heading">VARIABLES</h3></div>
<div class="old-help-para">A filetype plugin will be sourced for each buffer of the type it's for.  Local
script variables <a href="/neovim-docs-web/en/eval#s%3Avar">s:var</a> will be shared between all invocations.  Use local
buffer variables <a href="/neovim-docs-web/en/eval#b%3Avar">b:var</a> if you want a variable specifically for one buffer.</div>
<div class="old-help-para"><a name="_functions"></a><h3 class="help-heading">FUNCTIONS</h3></div>
<div class="old-help-para">When defining a function, this only needs to be done once.  But the filetype
plugin will be sourced every time a file with this filetype will be opened.
This construct makes sure the function is only defined once:<pre>:if !exists("*s:Func")
:  function s:Func(arg)
:    ...
:  endfunction
:endif</pre></div>
<div class="old-help-para"><h3 class="help-heading">UNDO<span class="help-heading-tags">						<a name="undo_indent"></a><span class="help-tag">undo_indent</span> <a name="undo_ftplugin"></a><span class="help-tag">undo_ftplugin</span></span></h3></div>
<div class="old-help-para">When the user does ":setfiletype xyz" the effect of the previous filetype
should be undone.  Set the b:undo_ftplugin variable to the commands that will
undo the settings in your filetype plugin.  Example:<pre>let b:undo_ftplugin = "setlocal fo&lt; com&lt; tw&lt; commentstring&lt;"
        \ .. "| unlet b:match_ignorecase b:match_words b:match_skip"</pre>
Using ":setlocal" with "&lt;" after the option name resets the option to its
global value.  That is mostly the best way to reset the option value.</div>
<div class="old-help-para">This does require removing the "C" flag from <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> to allow line
continuation, as mentioned above <a href="/neovim-docs-web/en/usr_41#use-cpo-save">use-cpo-save</a>.</div>
<div class="old-help-para">For undoing the effect of an indent script, the b:undo_indent variable should
be set accordingly.</div>
<div class="old-help-para"><a name="_file-name"></a><h3 class="help-heading">FILE NAME</h3></div>
<div class="old-help-para">The filetype must be included in the file name <a href="/neovim-docs-web/en/usr_05#ftplugin-name">ftplugin-name</a>.  Use one of
these three forms:</div>
<div class="old-help-para">	.../ftplugin/stuff.vim
	.../ftplugin/stuff_foo.vim
	.../ftplugin/stuff/bar.vim</div>
<div class="old-help-para">"stuff" is the filetype, "foo" and "bar" are arbitrary names.</div>
<div class="old-help-para"><h3 class="help-heading">SUMMARY<span class="help-heading-tags">							<a name="ftplugin-special"></a><span class="help-tag">ftplugin-special</span></span></h3></div>
<div class="old-help-para">Summary of special things to use in a filetype plugin:</div>
<div class="old-help-para"><code>&lt;LocalLeader&gt;</code>		Value of "maplocalleader", which the user defines as
			the keys that filetype plugin mappings start with.</div>
<div class="old-help-para">:map <code>&lt;buffer&gt;</code>		Define a mapping local to the buffer.</div>
<div class="old-help-para">:noremap <code>&lt;script&gt;</code>	Only remap mappings defined in this script that start
			with <code>&lt;SID&gt;</code>.</div>
<div class="old-help-para">:setlocal		Set an option for the current buffer only.</div>
<div class="old-help-para">:command -buffer	Define a user command local to the buffer.</div>
<div class="old-help-para">exists("*s:Func")	Check if a function was already defined.</div>
<div class="old-help-para">Also see <a href="/neovim-docs-web/en/usr_41#plugin-special">plugin-special</a>, the special things used for all plugins.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="41.13"></a><span class="help-tag">41.13</span>  	Writing a compiler plugin<span class="help-heading-tags">		<a name="write-compiler-plugin"></a><span class="help-tag">write-compiler-plugin</span></span></span></h2></div>
<div class="old-help-para">A compiler plugin sets options for use with a specific compiler.  The user can
load it with the <a href="/neovim-docs-web/en/quickfix#%3Acompiler">:compiler</a> command.  The main use is to set the
<a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> and <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> options.</div>
<div class="old-help-para">Easiest is to have a look at examples.  This command will edit all the default
compiler plugins:<pre>:next $VIMRUNTIME/compiler/*.vim</pre>
Use <a href="/neovim-docs-web/en/editing#%3Anext">:next</a> to go to the next plugin file.</div>
<div class="old-help-para">There are two special items about these files.  First is a mechanism to allow
a user to overrule or add to the default file.  The default files start with:<pre>:if exists("current_compiler")
:  finish
:endif
:let current_compiler = "mine"</pre>
When you write a compiler file and put it in your personal runtime directory
(e.g., ~/.config/nvim/compiler for Unix), you set the "current_compiler"
variable to make the default file skip the settings.
							<a name="%3ACompilerSet"></a><code class="help-tag-right">:CompilerSet</code>
The second mechanism is to use ":set" for ":compiler!" and ":setlocal" for
":compiler".  Vim defines the ":CompilerSet" user command for this.  However,
older Vim versions don't, thus your plugin should define it then.  This is an
example:<pre>if exists(":CompilerSet") != 2
  command -nargs=* CompilerSet setlocal &lt;args&gt;
endif
CompilerSet errorformat&amp;                " use the default 'errorformat'
CompilerSet makeprg=nmake</pre>
When you write a compiler plugin for the Vim distribution or for a system-wide
runtime directory, use the mechanism mentioned above.  When
"current_compiler" was already set by a user plugin nothing will be done.</div>
<div class="old-help-para">When you write a compiler plugin to overrule settings from a default plugin,
don't check "current_compiler".  This plugin is supposed to be loaded
last, thus it should be in a directory at the end of <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  For Unix
that could be ~/.config/nvim/after/compiler.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="41.14"></a><span class="help-tag">41.14</span>  	Writing a plugin that loads quickly<span class="help-heading-tags">	<a name="write-plugin-quickload"></a><span class="help-tag">write-plugin-quickload</span></span></span></h2></div>
<div class="old-help-para">A plugin may grow and become quite long.  The startup delay may become
noticeable, while you hardly ever use the plugin.  Then it's time for a
quickload plugin.</div>
<div class="old-help-para">The basic idea is that the plugin is loaded twice.  The first time user
commands and mappings are defined that offer the functionality.  The second
time the functions that implement the functionality are defined.</div>
<div class="old-help-para">It may sound surprising that quickload means loading a script twice.  What we
mean is that it loads quickly the first time, postponing the bulk of the
script to the second time, which only happens when you actually use it.  When
you always use the functionality it actually gets slower!</div>
<div class="old-help-para">Note that since Vim 7 there is an alternative: use the <a href="/neovim-docs-web/en/userfunc#autoload">autoload</a>
functionality <a href="/neovim-docs-web/en/usr_41#41.15">41.15</a>.</div>
<div class="old-help-para">The following example shows how it's done:<pre>" Vim global plugin for demonstrating quick loading
" Last Change:        2005 Feb 25
" Maintainer:        Bram Moolenaar &lt;Bram@vim.org&gt;
" License:        This file is placed in the public domain.

if !exists("s:did_load")
        command -nargs=* BNRead  call BufNetRead(&lt;f-args&gt;)
        map &lt;F19&gt; :call BufNetWrite('something')&lt;CR&gt;

        let s:did_load = 1
        exe 'au FuncUndefined BufNet* source ' .. expand('&lt;sfile&gt;')
        finish
endif

function BufNetRead(...)
        echo 'BufNetRead(' .. string(a:000) .. ')'
        " read functionality here
endfunction

function BufNetWrite(...)
        echo 'BufNetWrite(' .. string(a:000) .. ')'
        " write functionality here
endfunction</pre>
When the script is first loaded "s:did_load" is not set.  The commands between
the "if" and "endif" will be executed.  This ends in a <a href="/neovim-docs-web/en/repeat#%3Afinish">:finish</a> command, thus
the rest of the script is not executed.</div>
<div class="old-help-para">The second time the script is loaded "s:did_load" exists and the commands
after the "endif" are executed.  This defines the (possible long)
BufNetRead() and BufNetWrite() functions.</div>
<div class="old-help-para">If you drop this script in your plugin directory Vim will execute it on
startup.  This is the sequence of events that happens:</div>
<div class="old-help-para">1. The "BNRead" command is defined and the <code>&lt;F19&gt;</code> key is mapped when the script
   is sourced at startup.  A <a href="/neovim-docs-web/en/autocmd#FuncUndefined">FuncUndefined</a> autocommand is defined.  The
   ":finish" command causes the script to terminate early.</div>
<div class="old-help-para">2. The user types the BNRead command or presses the <code>&lt;F19&gt;</code> key.  The
   BufNetRead() or BufNetWrite() function will be called.</div>
<div class="old-help-para">3. Vim can't find the function and triggers the <a href="/neovim-docs-web/en/autocmd#FuncUndefined">FuncUndefined</a> autocommand
   event.  Since the pattern "BufNet*" matches the invoked function, the
   command "source fname" will be executed.  "fname" will be equal to the name
   of the script, no matter where it is located, because it comes from
   expanding "&lt;sfile&gt;" (see <a href="/neovim-docs-web/en/builtin#expand()">expand()</a>).</div>
<div class="old-help-para">4. The script is sourced again, the "s:did_load" variable exists and the
   functions are defined.</div>
<div class="old-help-para">Notice that the functions that are loaded afterwards match the pattern in the
<a href="/neovim-docs-web/en/autocmd#FuncUndefined">FuncUndefined</a> autocommand.  You must make sure that no other plugin defines
functions that match this pattern.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="41.15"></a><span class="help-tag">41.15</span>  	Writing library scripts<span class="help-heading-tags">			<a name="write-library-script"></a><span class="help-tag">write-library-script</span></span></span></h2></div>
<div class="old-help-para">Some functionality will be required in several places.  When this becomes more
than a few lines you will want to put it in one script and use it from many
scripts.  We will call that one script a library script.</div>
<div class="old-help-para">Manually loading a library script is possible, so long as you avoid loading it
when it's already done.  You can do this with the <a href="/neovim-docs-web/en/builtin#exists()">exists()</a> function.
Example:<pre>if !exists('*MyLibFunction')
   runtime library/mylibscript.vim
endif
call MyLibFunction(arg)</pre>
Here you need to know that MyLibFunction() is defined in a script
"library/mylibscript.vim" in one of the directories in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.</div>
<div class="old-help-para">To make this a bit simpler Vim offers the autoload mechanism.  Then the
example looks like this:<pre>call mylib#myfunction(arg)</pre>
That's a lot simpler, isn't it?  Vim will recognize the function name and when
it's not defined search for the script "autoload/mylib.vim" in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.
That script must define the "mylib#myfunction()" function.</div>
<div class="old-help-para">You can put many other functions in the mylib.vim script, you are free to
organize your functions in library scripts.  But you must use function names
where the part before the '#' matches the script name.  Otherwise Vim would
not know what script to load.</div>
<div class="old-help-para">If you get really enthusiastic and write lots of library scripts, you may
want to use subdirectories.  Example:<pre>call netlib#ftp#read('somefile')</pre>
For Unix the library script used for this could be:</div>
<div class="old-help-para">	~/.config/nvim/autoload/netlib/ftp.vim</div>
<div class="old-help-para">Where the function is defined like this:<pre>function netlib#ftp#read(fname)
        "  Read the file fname through ftp
endfunction</pre>
Notice that the name the function is defined with is exactly the same as the
name used for calling the function.  And the part before the last '#'
exactly matches the subdirectory and script name.</div>
<div class="old-help-para">You can use the same mechanism for variables:<pre>let weekdays = dutch#weekdays</pre>
This will load the script "autoload/dutch.vim", which should contain something
like:<pre>let dutch#weekdays = ['zondag', 'maandag', 'dinsdag', 'woensdag',
        \ 'donderdag', 'vrijdag', 'zaterdag']</pre>
Further reading: <a href="/neovim-docs-web/en/userfunc#autoload">autoload</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="41.16"></a><span class="help-tag">41.16</span>  	Distributing Vim scripts<span class="help-heading-tags">			<a name="distribute-script"></a><span class="help-tag">distribute-script</span></span></span></h2></div>
<div class="old-help-para">Vim users will look for scripts on the Vim website: <a href="https://www.vim.org">https://www.vim.org</a>.
If you made something that is useful for others, share it!</div>
<div class="old-help-para">Vim scripts can be used on any system.  There might not be a tar or gzip
command.  If you want to pack files together and/or compress them the "zip"
utility is recommended.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_42#usr_42.txt">usr_42.txt</a>  Add new menus</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  