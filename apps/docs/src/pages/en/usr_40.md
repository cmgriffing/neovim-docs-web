---
title:  Usr_40
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_40.txt"></a><a name="40.1"></a><h1> Usr_40</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_40.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			      Make new commands</div>
<div class="old-help-para">Vim is an extensible editor.  You can take a sequence of commands you use
often and turn it into a new command.  Or redefine an existing command.
Autocommands make it possible to execute commands automatically.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_40#40.1">40.1</a>  	Key mapping
<a href="/neovim-docs-web/en/usr_40#40.2">40.2</a>  	Defining command-line commands
<a href="/neovim-docs-web/en/usr_40#40.3">40.3</a>  	Autocommands</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_41#usr_41.txt">usr_41.txt</a>  Write a Vim script
 Previous chapter: <a href="/neovim-docs-web/en/usr_32#usr_32.txt">usr_32.txt</a>  The undo tree
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Key mapping</h2></div>
<div class="old-help-para">A simple mapping was explained in section <a href="/neovim-docs-web/en/usr_05#05.3">05.3</a>.  The principle is that one
sequence of key strokes is translated into another sequence of key strokes.
This is a simple, yet powerful mechanism.
   The simplest form is that one key is mapped to a sequence of keys.  Since
the function keys, except <code>&lt;F1&gt;</code>, have no predefined meaning in Vim, these are
good choices to map.  Example:<pre>:map &lt;F2&gt; GoDate: &lt;Esc&gt;:read !date&lt;CR&gt;kJ</pre>
This shows how three modes are used.  After going to the last line with "G",
the "o" command opens a new line and starts Insert mode.  The text "Date: " is
inserted and <code>&lt;Esc&gt;</code> takes you out of insert mode.
   Notice the use of special keys inside &lt;&gt;.  This is called angle bracket
notation.  You type these as separate characters, not by pressing the key
itself.  This makes the mappings better readable and you can copy and paste
the text without problems.
   The ":" character takes Vim to the command line.  The ":read !date" command
reads the output from the "date" command and appends it below the current
line.  The <code>&lt;CR&gt;</code> is required to execute the ":read" command.
   At this point of execution the text looks like this:</div>
<div class="old-help-para"><div class="help-column_heading">	Date:</div><div class="help-column_heading">	Fri Jun 15 12:54:34 CEST 2001</div></div>
<div class="old-help-para">Now "kJ" moves the cursor up and joins the lines together.
   To decide which key or keys you use for mapping, see <a href="/neovim-docs-web/en/map#map-which-keys">map-which-keys</a>.</div>
<div class="old-help-para"><a name="_mapping-and-modes"></a><h3 class="help-heading">MAPPING AND MODES</h3></div>
<div class="old-help-para">The ":map" command defines remapping for keys in Normal mode.  You can also
define mappings for other modes.  For example, ":imap" applies to Insert mode.
You can use it to insert a date below the cursor:<pre>:imap &lt;F2&gt; &lt;CR&gt;Date: &lt;Esc&gt;:read !date&lt;CR&gt;kJ</pre>
It looks a lot like the mapping for <code>&lt;F2&gt;</code> in Normal mode, only the start is
different.  The <code>&lt;F2&gt;</code> mapping for Normal mode is still there.  Thus you can map
the same key differently for each mode.
   Notice that, although this mapping starts in Insert mode, it ends in Normal
mode.  If you want it to continue in Insert mode, append an "a" to the
mapping.</div>
<div class="old-help-para">Here is an overview of map commands and in which mode they work:</div>
<div class="old-help-para">	:map		Normal, Visual and Operator-pending
	:vmap		Visual
	:nmap		Normal
	:omap		Operator-pending
	:map!		Insert and Command-line
	:imap		Insert
	:cmap		Command-line</div>
<div class="old-help-para">Operator-pending mode is when you typed an operator character, such as "d" or
"y", and you are expected to type the motion command or a text object.  Thus
when you type "dw", the "w" is entered in operator-pending mode.</div>
<div class="old-help-para">Suppose that you want to define <code>&lt;F7&gt;</code> so that the command d&lt;F7&gt; deletes a C
program block (text enclosed in curly braces, {}).  Similarly y&lt;F7&gt; would yank
the program block into the unnamed register.  Therefore, what you need to do
is to define <code>&lt;F7&gt;</code> to select the current program block.  You can do this with
the following command:<pre>:omap &lt;F7&gt; a{</pre>
This causes <code>&lt;F7&gt;</code> to perform a select block "a{" in operator-pending mode, just
like you typed it.  This mapping is useful if typing a { on your keyboard is a
bit difficult.</div>
<div class="old-help-para"><a name="_listing-mappings"></a><h3 class="help-heading">LISTING MAPPINGS</h3></div>
<div class="old-help-para">To see the currently defined mappings, use ":map" without arguments.  Or one
of the variants that include the mode in which they work.  The output could
look like this:</div>
<div class="old-help-para"><div class="help-column_heading">	   _g		 :call MyGrep(1)&lt;CR&gt;</div><div class="help-column_heading">	v  <code>&lt;F2&gt;</code>		 :s/^/&gt; /&lt;CR&gt;:noh&lt;CR&gt;``</div><div class="help-column_heading">	n  <code>&lt;F2&gt;</code>		 :.,$s/^/&gt; /&lt;CR&gt;:noh&lt;CR&gt;``</div>	   <code>&lt;xHome&gt;</code>	 <code>&lt;Home&gt;</code>
	   <code>&lt;xEnd&gt;</code>	 <code>&lt;End&gt;</code></div>
<div class="old-help-para">The first column of the list shows in which mode the mapping is effective.
This is "n" for Normal mode, "i" for Insert mode, etc.  A blank is used for a
mapping defined with ":map", thus effective in both Normal and Visual mode.
   One useful purpose of listing the mapping is to check if special keys in &lt;&gt;
form have been recognized (this only works when color is supported).  For
example, when <code>&lt;Esc&gt;</code> is displayed in color, it stands for the escape character.
When it has the same color as the other text, it is five characters.</div>
<div class="old-help-para"><a name="_remapping"></a><h3 class="help-heading">REMAPPING</h3></div>
<div class="old-help-para">The result of a mapping is inspected for other mappings in it.  For example,
the mappings for <code>&lt;F2&gt;</code> above could be shortened to:<pre>:map &lt;F2&gt; G&lt;F3&gt;
:imap &lt;F2&gt; &lt;Esc&gt;&lt;F3&gt;
:map &lt;F3&gt;  oDate: &lt;Esc&gt;:read !date&lt;CR&gt;kJ</pre>
For Normal mode <code>&lt;F2&gt;</code> is mapped to go to the last line, and then behave like
<code>&lt;F3&gt;</code> was pressed.  In Insert mode <code>&lt;F2&gt;</code> stops Insert mode with <code>&lt;Esc&gt;</code> and then
also uses <code>&lt;F3&gt;</code>.  Then <code>&lt;F3&gt;</code> is mapped to do the actual work.</div>
<div class="old-help-para">Suppose you hardly ever use Ex mode, and want to use the "Q" command to format
text (this was so in old versions of Vim).  This mapping will do it:<pre>:map Q gq</pre>
But, in rare cases you need to use Ex mode anyway.  Let's map "gQ" to Q, so
that you can still go to Ex mode:<pre>:map gQ Q</pre>
What happens now is that when you type "gQ" it is mapped to "Q".  So far so
good.  But then "Q" is mapped to "gq", thus typing "gQ" results in "gq", and
you don't get to Ex mode at all.
   To avoid keys to be mapped again, use the ":noremap" command:<pre>:noremap gQ Q</pre>
Now Vim knows that the "Q" is not to be inspected for mappings that apply to
it.  There is a similar command for every mode:</div>
<div class="old-help-para">	:noremap	Normal, Visual and Operator-pending
	:vnoremap	Visual
	:nnoremap	Normal
	:onoremap	Operator-pending
	:noremap!	Insert and Command-line
	:inoremap	Insert
	:cnoremap	Command-line</div>
<div class="old-help-para"><a name="_recursive-mapping"></a><h3 class="help-heading">RECURSIVE MAPPING</h3></div>
<div class="old-help-para">When a mapping triggers itself, it will run forever.  This can be used to
repeat an action an unlimited number of times.
   For example, you have a list of files that contain a version number in the
first line.  You edit these files with "vim.txt".  You are now editing the
first file.  Define this mapping:<pre>:map ,, :s/5.1/5.2/&lt;CR&gt;:wnext&lt;CR&gt;,,</pre>
Now you type ",,".  This triggers the mapping.  It replaces "5.1" with "5.2"
in the first line.  Then it does a ":wnext" to write the file and edit the
next one.  The mapping ends in ",,".  This triggers the same mapping again,
thus doing the substitution, etc.
   This continues until there is an error.  In this case it could be a file
where the substitute command doesn't find a match for "5.1".  You can then
make a change to insert "5.1" and continue by typing ",," again.  Or the
":wnext" fails, because you are in the last file in the list.
   When a mapping runs into an error halfway, the rest of the mapping is
discarded.  <code>CTRL-C</code> interrupts the mapping (<code>CTRL-Break</code> on MS-Windows).</div>
<div class="old-help-para">DELETE A MAPPING</div>
<div class="old-help-para">To remove a mapping use the ":unmap" command.  Again, the mode the unmapping
applies to depends on the command used:</div>
<div class="old-help-para">	:unmap		Normal, Visual and Operator-pending
	:vunmap		Visual
	:nunmap		Normal
	:ounmap		Operator-pending
	:unmap!		Insert and Command-line
	:iunmap		Insert
	:cunmap		Command-line</div>
<div class="old-help-para">There is a trick to define a mapping that works in Normal and Operator-pending
mode, but not in Visual mode.  First define it for all three modes, then
delete it for Visual mode:<pre>:map &lt;C-A&gt; /---&gt;&lt;CR&gt;
:vunmap &lt;C-A&gt;</pre>
Notice that the five characters "&lt;C-A&gt;" stand for the single key <code>CTRL-A</code>.</div>
<div class="old-help-para">To remove all mappings use the <a href="/neovim-docs-web/en/map#%3Amapclear">:mapclear</a> command.  You can guess the
variations for different modes by now.  Be careful with this command, it can't
be undone.</div>
<div class="old-help-para"><a name="_special-characters"></a><h3 class="help-heading">SPECIAL CHARACTERS</h3></div>
<div class="old-help-para">The ":map" command can be followed by another command.  A | character
separates the two commands.  This also means that a | character can't be used
inside a map command.  To include one, use <code>&lt;Bar&gt;</code> (five characters).  Example:
<pre>:map &lt;F8&gt; :write &lt;Bar&gt; !checkin %:S&lt;CR&gt;</pre>
The same problem applies to the ":unmap" command, with the addition that you
have to watch out for trailing white space.  These two commands are different:
<pre>:unmap a | unmap b
:unmap a| unmap b</pre>
The first command tries to unmap "a ", with a trailing space.</div>
<div class="old-help-para">When using a space inside a mapping, use <code>&lt;Space&gt;</code> (seven characters):<pre>:map &lt;Space&gt; W</pre>
This makes the spacebar move a blank-separated word forward.</div>
<div class="old-help-para">It is not possible to put a comment directly after a mapping, because the "
character is considered to be part of the mapping.  You can use |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_40.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_40.html%0D%0DContext%3A%0D%0D%60%60%60%0DThis%20makes%20the%20spacebar%20move%20a%20blank-separated%20word%20forward.%0A%0AIt%20is%20not%20possible%20to%20put%20a%20comment%20directly%20after%20a%20mapping%2C%20because%20the%20%22%0Acharacter%20is%20considered%20to%20be%20part%20of%20the%20mapping.%20%20You%20can%20use%20%7C%22%2C%20this%0Astarts%20a%20new%2C%20empty%20command%20with%20a%20comment.%20%20Example%3A%20%3E%0A%0A%09%3Amap%20%3CSpace%3E%20W%7C%20%20%20%20%20%22%20Use%20spacebar%20to%20move%20forward%20a%20word%0D%60%60%60">",</a> this
starts a new, empty command with a comment.  Example:<pre>:map &lt;Space&gt; W|     " Use spacebar to move forward a word</pre>
<a name="_mappings-and-abbreviations"></a><h3 class="help-heading">MAPPINGS AND ABBREVIATIONS</h3></div>
<div class="old-help-para">Abbreviations are a lot like Insert mode mappings.  The arguments are handled
in the same way.  The main difference is the way they are triggered.  An
abbreviation is triggered by typing a non-word character after the word.  A
mapping is triggered when typing the last character.
   Another difference is that the characters you type for an abbreviation are
inserted in the text while you type them.  When the abbreviation is triggered
these characters are deleted and replaced by what the abbreviation produces.
When typing the characters for a mapping, nothing is inserted until you type
the last character that triggers it.  If the <a href="/neovim-docs-web/en/options#'showcmd'">'showcmd'</a> option is set, the
typed characters are displayed in the last line of the Vim window.
   An exception is when a mapping is ambiguous.  Suppose you have done two
mappings:<pre>:imap aa foo
:imap aaa bar</pre>
Now, when you type "aa", Vim doesn't know if it should apply the first or the
second mapping.  It waits for another character to be typed.  If it is an "a",
the second mapping is applied and results in "bar".  If it is a space, for
example, the first mapping is applied, resulting in "foo", and then the space
is inserted.</div>
<div class="old-help-para"><a name="_additionally..."></a><h3 class="help-heading">ADDITIONALLY...</h3></div>
<div class="old-help-para">The <code>&lt;script&gt;</code> keyword can be used to make a mapping local to a script.  See
<a href="/neovim-docs-web/en/map#%3Amap-%3Cscript%3E">:map-&lt;script&gt;</a>.</div>
<div class="old-help-para">The <code>&lt;buffer&gt;</code> keyword can be used to make a mapping local to a specific buffer.
See <a href="/neovim-docs-web/en/map#%3Amap-%3Cbuffer%3E">:map-&lt;buffer&gt;</a></div>
<div class="old-help-para">The <code>&lt;unique&gt;</code> keyword can be used to make defining a new mapping fail when it
already exists.  Otherwise a new mapping simply overwrites the old one.  See
<a href="/neovim-docs-web/en/map#%3Amap-%3Cunique%3E">:map-&lt;unique&gt;</a>.</div>
<div class="old-help-para">To make a key do nothing, map it to <code>&lt;Nop&gt;</code> (five characters).  This will make
the <code>&lt;F7&gt;</code> key do nothing at all:<pre>:map &lt;F7&gt; &lt;Nop&gt;| map! &lt;F7&gt; &lt;Nop&gt;</pre>
There must be no space after <code>&lt;Nop&gt;</code>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="40.2"></a><span class="help-tag">40.2</span>  	Defining command-line commands</span></h2></div>
<div class="old-help-para">The Vim editor enables you to define your own commands.  You execute these
commands just like any other Command-line mode command.
   To define a command, use the ":command" command, as follows:<pre>:command DeleteFirst 1delete</pre>
Now when you execute the command ":DeleteFirst" Vim executes ":1delete", which
deletes the first line.</div>
<div class="old-help-para">	Note:
	User-defined commands must start with a capital letter.  You cannot
	use ":Next".  The underscore cannot be used!  You can use digits, but
	this is discouraged.</div>
<div class="old-help-para">To list the user-defined commands, execute the following command:<pre>:command</pre>
Just like with the builtin commands, the user defined commands can be
abbreviated.  You need to type just enough to distinguish the command from
another.  Command line completion can be used to get the full name.</div>
<div class="old-help-para"><a name="_number-of-arguments"></a><h3 class="help-heading">NUMBER OF ARGUMENTS</h3></div>
<div class="old-help-para">User-defined commands can take a series of arguments.  The number of arguments
must be specified by the -nargs option.  For instance, the example
:DeleteFirst command takes no arguments, so you could have defined it as
follows:<pre>:command -nargs=0 DeleteFirst 1delete</pre>
However, because zero arguments is the default, you do not need to add
"-nargs=0".  The other values of -nargs are as follows:</div>
<div class="old-help-para">	-nargs=0	No arguments
	-nargs=1	One argument
	-nargs=*	Any number of arguments
	-nargs=?	Zero or one argument
	-nargs=+	One or more arguments</div>
<div class="old-help-para"><a name="_using-the-arguments"></a><h3 class="help-heading">USING THE ARGUMENTS</h3></div>
<div class="old-help-para">Inside the command definition, the arguments are represented by the
<code>&lt;args&gt;</code> keyword.  For example:<pre>:command -nargs=+ Say :echo "&lt;args&gt;"</pre>
Now when you type<pre>:Say Hello World</pre>
Vim echoes "Hello World".  However, if you add a double quote, it won't work.
For example:<pre>:Say he said "hello"</pre>
To get special characters turned into a string, properly escaped to use as an
expression, use "&lt;q-args&gt;":<pre>:command -nargs=+ Say :echo &lt;q-args&gt;</pre>
Now the above ":Say" command will result in this to be executed:<pre>:echo "he said \"hello\""</pre>
The <code>&lt;f-args&gt;</code> keyword contains the same information as the <code>&lt;args&gt;</code> keyword,
except in a format suitable for use as function call arguments.  For example:
<pre>:command -nargs=* DoIt :call AFunction(&lt;f-args&gt;)
:DoIt a b c</pre>
Executes the following command:<pre>:call AFunction("a", "b", "c")</pre>
<a name="_line-range"></a><h3 class="help-heading">LINE RANGE</h3></div>
<div class="old-help-para">Some commands take a range as their argument.  To tell Vim that you are
defining such a command, you need to specify a -range option.  The values for
this option are as follows:</div>
<div class="old-help-para">	-range		Range is allowed; default is the current line.
	-range=%	Range is allowed; default is the whole file.
	-range={count}	Range is allowed; the last number in it is used as a
			single number whose default is <code>{count}</code>.</div>
<div class="old-help-para">When a range is specified, the keywords <code>&lt;line1&gt;</code> and <code>&lt;line2&gt;</code> get the values of
the first and last line in the range.  For example, the following command
defines the SaveIt command, which writes out the specified range to the file
"save_file":<pre>:command -range=% SaveIt :&lt;line1&gt;,&lt;line2&gt;write! save_file</pre>
<a name="_other-options"></a><h3 class="help-heading">OTHER OPTIONS</h3></div>
<div class="old-help-para">Some of the other options and keywords are as follows:</div>
<div class="old-help-para">	-count={number}		The command can take a count whose default is
				<code>{number}</code>.  The resulting count can be used
				through the <code>&lt;count&gt;</code> keyword.
	-bang			You can use a !.  If present, using <code>&lt;bang&gt;</code> will
				result in a !.
	-register		You can specify a register.  (The default is
				the unnamed register.)
				The register specification is available as
				<code>&lt;reg&gt;</code> (a.k.a. <code>&lt;register&gt;</code>).
	-complete={type}	Type of command-line completion used.  See
				<a href="/neovim-docs-web/en/map#%3Acommand-completion">:command-completion</a> for the list of possible
				values.
	-bar			The command can be followed by | and another
				command, or " and a comment.
	-buffer			The command is only available for the current
				buffer.</div>
<div class="old-help-para">Finally, you have the <code>&lt;lt&gt;</code> keyword.  It stands for the character &lt;.  Use this
to escape the special meaning of the &lt;&gt; items mentioned.</div>
<div class="old-help-para"><a name="_redefining-and-deleting"></a><h3 class="help-heading">REDEFINING AND DELETING</h3></div>
<div class="old-help-para">To redefine the same command use the ! argument:<pre>:command -nargs=+ Say :echo "&lt;args&gt;"
:command! -nargs=+ Say :echo &lt;q-args&gt;</pre>
To delete a user command use ":delcommand".  It takes a single argument, which
is the name of the command.  Example:<pre>:delcommand SaveIt</pre>
To delete all the user commands:<pre>:comclear</pre>
Careful, this can't be undone!</div>
<div class="old-help-para">More details about all this in the reference manual: <a href="/neovim-docs-web/en/map#user-commands">user-commands</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="40.3"></a><span class="help-tag">40.3</span>  	Autocommands</span></h2></div>
<div class="old-help-para">An autocommand is a command that is executed automatically in response to some
event, such as a file being read or written or a buffer change.  Through the
use of autocommands you can train Vim to edit compressed files, for example.
That is used in the <a href="/neovim-docs-web/en/pi_gzip#gzip">gzip</a> plugin.
   Autocommands are very powerful.  Use them with care and they will help you
avoid typing many commands.  Use them carelessly and they will cause a lot of
trouble.</div>
<div class="old-help-para">Suppose you want to replace a datestamp on the end of a file every time it is
written.  First you define a function:<pre>:function DateInsert()
:  $delete
:  read !date
:endfunction</pre>
You want this function to be called each time, just before a buffer is written
to a file.  This will make that happen:<pre>:autocmd BufWritePre *  call DateInsert()</pre>
"BufWritePre" is the event for which this autocommand is triggered: Just
before (pre) writing a buffer to a file.  The "*" is a pattern to match with
the file name.  In this case it matches all files.
   With this command enabled, when you do a ":write", Vim checks for any
matching BufWritePre autocommands and executes them, and then it
performs the ":write".
   The general form of the :autocmd command is as follows:<pre>:autocmd [group] {events} {file-pattern} [++nested] {command}</pre>
The [group] name is optional.  It is used in managing and calling the commands
(more on this later).  The <code>{events}</code> parameter is a list of events (comma
separated) that trigger the command.
   <code>{file-pattern}</code> is a filename, usually with wildcards.  For example, using
"*.txt" makes the autocommand be used for all files whose name end in ".txt".
The optional [++nested] flag allows for nesting of autocommands (see below),
and finally, <code>{command}</code> is the command to be executed.</div>
<div class="old-help-para">When adding an autocommand the already existing ones remain.  To avoid adding
the autocommand several times you should use this form:<pre>:augroup updateDate
:  autocmd!
:  autocmd BufWritePre *  call DateInsert()
:augroup END</pre>
This will delete any previously defined autocommand with <code>:autocmd!</code> before
defining the new one.  Groups are explained later.</div>
<div class="old-help-para"><a name="_events"></a><h3 class="help-heading">EVENTS</h3></div>
<div class="old-help-para">One of the most useful events is BufReadPost.  It is triggered after a new
file is being edited.  It is commonly used to set option values.  For example,
you know that "*.gsm" files are GNU assembly language.  To get the syntax file
right, define this autocommand:<pre>:autocmd BufReadPost *.gsm  set filetype=asm</pre>
If Vim is able to detect the type of file, it will set the <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> option
for you.  This triggers the Filetype event.  Use this to do something when a
certain type of file is edited.  For example, to load a list of abbreviations
for text files:<pre>:autocmd Filetype text  source ~/.config/nvim/abbrevs.vim</pre>
When starting to edit a new file, you could make Vim insert a skeleton:<pre>:autocmd BufNewFile *.[ch]  0read ~/skeletons/skel.c</pre>
See <a href="/neovim-docs-web/en/autocmd#autocmd-events">autocmd-events</a> for a complete list of events.</div>
<div class="old-help-para"><a name="_patterns"></a><h3 class="help-heading">PATTERNS</h3></div>
<div class="old-help-para">The <code>{file-pattern}</code> argument can actually be a comma-separated list of file
patterns.  For example: "*.c,*.h" matches files ending in ".c" and ".h".
   The usual file wildcards can be used.  Here is a summary of the most often
used ones:</div>
	*		Match any character any number of times
	?		Match any character once
	[abc]		Match the character a, b or c
	.		Matches a dot
	a{b,c}		Matches "ab" and "ac"

When the pattern includes a slash<div class="old-help-para"> (/) Vim will compare directory names.
Without the slash only the last part of a file name is used.  For example,
"*.txt" matches "/home/biep/readme.txt".  The pattern "/home/biep/*" would
also match it.  But "home/foo/*.txt" wouldn't.
   When including a slash, Vim matches the pattern against both the full path
of the file ("/home/biep/readme.txt") and the relative path (e.g.,
"biep/readme.txt").</div>
<div class="old-help-para">	Note:
	When working on a system that uses a backslash as file separator, such
	as MS-Windows, you still use forward slashes in autocommands.  This
	makes it easier to write the pattern, since a backslash has a special
	meaning.  It also makes the autocommands portable.</div>
<div class="old-help-para"><a name="_deleting"></a><h3 class="help-heading">DELETING</h3></div>
<div class="old-help-para">To delete an autocommand, use the same command as what it was defined with,
but leave out the <code>{command}</code> at the end and use a !.  Example:<pre>:autocmd! FileWritePre *</pre>
This will delete all autocommands for the "FileWritePre" event that use the
"*" pattern.</div>
<div class="old-help-para"><a name="_listing"></a><h3 class="help-heading">LISTING</h3></div>
<div class="old-help-para">To list all the currently defined autocommands, use this:<pre>:autocmd</pre>
The list can be very long, especially when filetype detection is used.  To
list only part of the commands, specify the group, event and/or pattern.  For
example, to list all BufNewFile autocommands:<pre>:autocmd BufNewFile</pre>
To list all autocommands for the pattern "*.c":<pre>:autocmd * *.c</pre>
Using "*" for the event will list all the events.  To list all autocommands
for the cprograms group:<pre>:autocmd cprograms</pre>
<a name="_groups"></a><h3 class="help-heading">GROUPS</h3></div>
<div class="old-help-para">The <code>{group}</code> item, used when defining an autocommand, groups related autocommands
together.  This can be used to delete all the autocommands in a certain group,
for example.
   When defining several autocommands for a certain group, use the ":augroup"
command.  For example, let's define autocommands for C programs:<pre>:augroup cprograms
:  autocmd BufReadPost *.c,*.h :set sw=4 sts=4
:  autocmd BufReadPost *.cpp   :set sw=3 sts=3
:augroup END</pre>
This will do the same as:<pre>:autocmd cprograms BufReadPost *.c,*.h :set sw=4 sts=4
:autocmd cprograms BufReadPost *.cpp   :set sw=3 sts=3</pre>
To delete all autocommands in the "cprograms" group:<pre>:autocmd! cprograms</pre>
<a name="_nesting"></a><h3 class="help-heading">NESTING</h3></div>
<div class="old-help-para">Generally, commands executed as the result of an autocommand event will not
trigger any new events.  If you read a file in response to a FileChangedShell
event, it will not trigger the autocommands that would set the syntax, for
example.  To make the events triggered, add the "++nested" flag:<pre>:autocmd FileChangedShell * ++nested  edit</pre>
<a name="_executing-autocommands"></a><h3 class="help-heading">EXECUTING AUTOCOMMANDS</h3></div>
<div class="old-help-para">It is possible to trigger an autocommand by pretending an event has occurred.
This is useful to have one autocommand trigger another one.  Example:<pre>:autocmd BufReadPost *.new  execute "doautocmd BufReadPost " . expand("&lt;afile&gt;:r")</pre>
This defines an autocommand that is triggered when a new file has been edited.
The file name must end in ".new".  The ":execute" command uses expression
evaluation to form a new command and execute it.  When editing the file
"tryout.c.new" the executed command will be:<pre>:doautocmd BufReadPost tryout.c</pre>
The expand() function takes the "&lt;afile&gt;" argument, which stands for the file
name the autocommand was executed for, and takes the root of the file name
with ":r".</div>
<div class="old-help-para">":doautocmd" executes on the current buffer.  The ":doautoall" command works
like "doautocmd" except it executes on all the buffers.</div>
<div class="old-help-para"><a name="_using-normal-mode-commands"></a><h3 class="help-heading">USING NORMAL MODE COMMANDS</h3></div>
<div class="old-help-para">The commands executed by an autocommand are Command-line commands.  If you
want to use a Normal mode command, the ":normal" command can be used.
Example:<pre>:autocmd BufReadPost *.log normal G</pre>
This will make the cursor jump to the last line of.log files when you start
to edit it.
   Using the ":normal" command is a bit tricky.  First of all, make sure its
argument is a complete command, including all the arguments.  When you use "i"
to go to Insert mode, there must also be a <code>&lt;Esc&gt;</code> to leave Insert mode again.
If you use a "/" to start a search pattern, there must be a <code>&lt;CR&gt;</code> to execute
it.
   The ":normal" command uses all the text after it as commands.  Thus there
can be no | and another command following.  To work around this, put the
":normal" command inside an ":execute" command.  This also makes it possible
to pass unprintable characters in a convenient way.  Example:<pre>:autocmd BufReadPost *.chg execute "normal ONew entry:\&lt;Esc&gt;" |
        \ 1read !date</pre>
This also shows the use of a backslash to break a long command into more
lines.  This can be used in Vim scripts (not at the command line).</div>
<div class="old-help-para">When you want the autocommand do something complicated, which involves jumping
around in the file and then returning to the original position, you may want
to restore the view on the file.  See <a href="/neovim-docs-web/en/tips#restore-position">restore-position</a> for an example.</div>
<div class="old-help-para"><a name="_ignoring-events"></a><h3 class="help-heading">IGNORING EVENTS</h3></div>
<div class="old-help-para">At times, you will not want to trigger an autocommand.  The <a href="/neovim-docs-web/en/options#'eventignore'">'eventignore'</a>
option contains a list of events that will be totally ignored.  For example,
the following causes events for entering and leaving a window to be ignored:<pre>:set eventignore=WinEnter,WinLeave</pre>
To ignore all events, use the following command:<pre>:set eventignore=all</pre>
To set it back to the normal behavior, make <a href="/neovim-docs-web/en/options#'eventignore'">'eventignore'</a> empty:<pre>:set eventignore=</pre>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_40.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_40.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%3Aset%20eventignore%3D%0A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%0ANext%20chapter%3A%20%7Cusr_41.txt%7C%20%20Write%20a%20Vim%20script%0A%0ACopyright%3A%20see%20%7Cmanual-copyright%7C%20%20vim%3Atw%3D78%3Ats%3D8%3Anoet%3Aft%3Dhelp%3Anorl%3A%0D%60%60%60">==============================================================================</a></div>
<div class="old-help-para">Next chapter: <a href="/neovim-docs-web/en/usr_41#usr_41.txt">usr_41.txt</a>  Write a Vim script</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  