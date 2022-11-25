---
title:  Helphelp
layout: ../../layouts/MainLayout.astro
---

  <a name="helphelp.txt"></a><a name="helphelp"></a><h1> Helphelp</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/helphelp.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Help on help files</div>
<div class="old-help-para"><h2 class="help-heading">1. Help commands<span class="help-heading-tags">					<a name="online-help"></a><span class="help-tag">online-help</span></span></h2></div>
<div class="old-help-para">			<a name="help"></a><code class="help-tag-right">help</code> <a name="%3CHelp%3E"></a><code class="help-tag">&lt;Help&gt;</code> <a name="%3Ah"></a><code class="help-tag">:h</code> <a name="%3Ahelp"></a><code class="help-tag">:help</code> <a name="%3CF1%3E"></a><code class="help-tag">&lt;F1&gt;</code> <a name="i_%3CF1%3E"></a><code class="help-tag">i_&lt;F1&gt;</code> <a name="i_%3CHelp%3E"></a><code class="help-tag">i_&lt;Help&gt;</code>
<code>&lt;Help&gt;</code>		or
:h[elp]			Open a window and display the help file in read-only
			mode.  If there is a help window open already, use
			that one.  Otherwise, if the current window uses the
			full width of the screen or is at least 80 characters
			wide, the help window will appear just above the
			current window.  Otherwise the new window is put at
			the very top.
			The <a href="options.html#'helplang'">'helplang'</a> option is used to select a language, if
			the main help file is available in several languages.</div>
<div class="old-help-para">						<a name="%7Bsubject%7D"></a><code class="help-tag-right">{subject}</code> <a name="E149"></a><code class="help-tag">E149</code> <a name="E661"></a><code class="help-tag">E661</code>
:h[elp] <code>{subject}</code>	Like ":help", additionally jump to the tag <code>{subject}</code>.
			For example:<pre>:help options</pre></div>
<div class="old-help-para">			<code>{subject}</code> can include wildcards such as "*", "?" and
			"[a-z]":
			   :help z?	jump to help for any "z" command
			   :help z.	jump to the help for "z."
			But when a tag exists it is taken literally:
			   :help :?	jump to help for ":?"</div>
<div class="old-help-para">			If there is no full match for the pattern, or there
			are several matches, the "best" match will be used.
			A sophisticated algorithm is used to decide which
			match is better than another one.  These items are
			considered in the computation:
<div class="help-li" style=""> A match with same case is much better than a match
			  with different case.
</div><div class="help-li" style=""> A match that starts after a non-alphanumeric
			  character is better than a match in the middle of a
			  word.
</div><div class="help-li" style=""> A match at or near the beginning of the tag is
			  better than a match further on.
</div><div class="help-li" style=""> The more alphanumeric characters match, the better.
</div><div class="help-li" style=""> The shorter the length of the match, the better.
</div></div>
<div class="old-help-para">			The <a href="options.html#'helplang'">'helplang'</a> option is used to select a language, if
			the <code>{subject}</code> is available in several languages.
			To find a tag in a specific language, append "@ab",
			where "ab" is the two-letter language code.  See
			<a href="helphelp.html#help-translated">help-translated</a>.</div>
<div class="old-help-para">			Note that the longer the <code>{subject}</code> you give, the less
			matches will be found.  You can get an idea how this
			all works by using commandline completion (type <code>CTRL-D</code>
			after ":help subject" <a href="cmdline.html#c_CTRL-D">c_CTRL-D</a>).
			If there are several matches, you can have them listed
			by hitting <code>CTRL-D</code>.  Example:<pre>:help cont&lt;Ctrl-D&gt;</pre></div>
<div class="old-help-para">			Instead of typing ":help <code>CTRL-V</code>" to search for help
			for <code>CTRL-V</code> you can type:<pre>:help ^V</pre></div>
<div class="old-help-para">			This also works together with other characters, for
			example to find help for <code>CTRL-V</code> in Insert mode:<pre>:help i^V</pre></div>
<div class="old-help-para">			It is also possible to first do ":help" and then
			use ":tag <code>{pattern}</code>" in the help window.  The
			":tnext" command can then be used to jump to other
			matches, "tselect" to list matches and choose one.<pre>:help index
:tselect /.*mode</pre></div>
<div class="old-help-para">			When there is no argument you will see matches for
			"help", to avoid listing all possible matches (that
			would be very slow).
			The number of matches displayed is limited to 300.</div>
<div class="old-help-para">			The <code>:help</code> command can be followed by '|' and another
			command, but you don't need to escape the '|' inside a
			help command.  So these both work:<pre>:help |
:help k| only</pre></div>
<div class="old-help-para">			Note that a space before the '|' is seen as part of
			the ":help" argument.
			You can also use <code>&lt;NL&gt;</code> or <code>&lt;CR&gt;</code> to separate the help
			command from a following command.  You need to type
			<code>CTRL-V</code> first to insert the <code>&lt;NL&gt;</code> or <code>&lt;CR&gt;</code>.  Example:<pre>:help so&lt;C-V&gt;&lt;CR&gt;only</pre></div>
<div class="old-help-para">:h[elp]! [subject]	Like ":help", but in non-English help files prefer to
			find a tag in a file with the same language as the
			current file.  See <a href="helphelp.html#help-translated">help-translated</a>.</div>
<div class="old-help-para">							<a name="%3Ahelpc"></a><code class="help-tag-right">:helpc</code> <a name="%3Ahelpclose"></a><code class="help-tag">:helpclose</code>
:helpc[lose]		Close one help window, if there is one.
			Vim will try to restore the window layout (including
			cursor position) to the same layout it was before
			opening the help window initially.  This might cause
			triggering several autocommands.</div>
<div class="old-help-para">							<a name="%3Ahelpg"></a><code class="help-tag-right">:helpg</code> <a name="%3Ahelpgrep"></a><code class="help-tag">:helpgrep</code>
:helpg[rep] <code>{pattern}</code>[@xx]
			Search all help text files and make a list of lines
			in which <code>{pattern}</code> matches.  Jumps to the first match.
			The optional [@xx] specifies that only matches in the
			"xx" language are to be found.
			You can navigate through the matches with the
			<a href="quickfix.html#quickfix">quickfix</a> commands, e.g., <a href="quickfix.html#%3Acnext">:cnext</a> to jump to the
			next one.  Or use <a href="quickfix.html#%3Acwindow">:cwindow</a> to get the list of
			matches in the quickfix window.
			<code>{pattern}</code> is used as a Vim regexp <a href="pattern.html#pattern">pattern</a>.
			<a href="options.html#'ignorecase'">'ignorecase'</a> is not used, add "\c" to ignore case.
			Example for case sensitive search:<pre>:helpgrep Uganda</pre></div>
<div class="old-help-para">			Example for case ignoring search:<pre>:helpgrep uganda\c</pre></div>
<div class="old-help-para">			Example for searching in French help:<pre>:helpgrep backspace@fr</pre></div>
<div class="old-help-para">			The pattern does not support line breaks, it must
			match within one line.  You can use <a href="quickfix.html#%3Agrep">:grep</a> instead,
			but then you need to get the list of help files in a
			complicated way.
			Cannot be followed by another command, everything is
			used as part of the pattern.  But you can use
			<a href="eval.html#%3Aexecute">:execute</a> when needed.
			Compressed help files will not be searched (Fedora
			compresses the help files).</div>
<div class="old-help-para">							<a name="%3Alh"></a><code class="help-tag-right">:lh</code> <a name="%3Alhelpgrep"></a><code class="help-tag">:lhelpgrep</code>
:lh[elpgrep] <code>{pattern}</code>[@xx]
			Same as ":helpgrep", except the location list is used
			instead of the quickfix list.  If the help window is
			already opened, then the location list for that window
			is used.  Otherwise, a new help window is opened and
			the location list for that window is set.  The
			location list for the current window is not changed
			then.</div>
<div class="old-help-para">							<a name="%3Aexu"></a><code class="help-tag-right">:exu</code> <a name="%3Aexusage"></a><code class="help-tag">:exusage</code>
:exu[sage]		Show help on Ex commands.  Added to simulate the Nvi
			command.</div>
<div class="old-help-para">							<a name="%3Aviu"></a><code class="help-tag-right">:viu</code> <a name="%3Aviusage"></a><code class="help-tag">:viusage</code>
:viu[sage]		Show help on Normal mode commands.  Added to simulate
			the Nvi command.</div>
<div class="old-help-para">When no argument is given to <a href="helphelp.html#%3Ahelp">:help</a> the file given with the <a href="options.html#'helpfile'">'helpfile'</a> option
will be opened.  Otherwise the specified tag is searched for in all "doc/tags"
files in the directories specified in the <a href="options.html#'runtimepath'">'runtimepath'</a> option.</div>
<div class="old-help-para">If you would like to open the help in the current window, see this tip:
<a href="tips.html#help-curwin">help-curwin</a>.</div>
<div class="old-help-para">The initial height of the help window can be set with the <a href="options.html#'helpheight'">'helpheight'</a> option
(default 20).
						<a name="help-buffer-options"></a><code class="help-tag-right">help-buffer-options</code>
When the help buffer is created, several local options are set to make sure
the help text is displayed as it was intended:
    <a href="options.html#'iskeyword'">'iskeyword'</a>		nearly all ASCII chars except ' ', '', '"' and '|'
    <a href="options.html#'foldmethod'">'foldmethod'</a>	"manual"
    <a href="options.html#'tabstop'">'tabstop'</a>		8
    <a href="options.html#'arabic'">'arabic'</a>		off
    <a href="options.html#'binary'">'binary'</a>		off
    <a href="options.html#'buflisted'">'buflisted'</a>		off
    <a href="options.html#'cursorbind'">'cursorbind'</a>	off
    <a href="options.html#'diff'">'diff'</a>		off
    <a href="options.html#'foldenable'">'foldenable'</a>	off
    <a href="options.html#'list'">'list'</a>		off
    <a href="options.html#'modifiable'">'modifiable'</a>	off
    <a href="options.html#'number'">'number'</a>		off
    <a href="options.html#'relativenumber'">'relativenumber'</a>	off
    <a href="options.html#'rightleft'">'rightleft'</a>		off
    <a href="options.html#'scrollbind'">'scrollbind'</a>	off
    <a href="options.html#'spell'">'spell'</a>		off</div>
<div class="old-help-para">Jump to specific subjects by using tags.  This can be done in two ways:
<div class="help-li" style=""> Use the "CTRL-]" command while standing on the name of a command or option.
  This only works when the tag is a keyword.  "&lt;C-Leftmouse&gt;" and
  "g&lt;LeftMouse&gt;" work just like "CTRL-]".
</div><div class="help-li" style=""> use the ":ta <code>{subject}</code>" command.  This also works with non-keyword
  characters.
</div></div>
<div class="old-help-para">Use <code>CTRL-T</code> or <code>CTRL-O</code> to jump back.
Use ":q" to close the help window.</div>
<div class="old-help-para">If there are several matches for an item you are looking for, this is how you
can jump to each one of them:
1. Open a help window
2. Use the ":tag" command with a slash prepended to the tag.  E.g.:<pre>:tag /min</pre>
3. Use ":tnext" to jump to the next matching tag.</div>
<div class="old-help-para">It is possible to add help files for plugins and other items.  You don't need
to change the distributed help files for that.  See <a href="usr_05.html#add-local-help">add-local-help</a>.</div>
<div class="old-help-para">To write a local help file, see <a href="usr_41.html#write-local-help">write-local-help</a>.</div>
<div class="old-help-para">Note that the title lines from the local help files are automagically added to
This is done when viewing the file in Vim, the file itself is not changed.  It
is done by going through all help files and obtaining the first line of each
file.  The files in $VIMRUNTIME/doc are skipped.</div>
<div class="old-help-para">					<a name="%3Ahelpt"></a><code class="help-tag-right">:helpt</code> <a name="%3Ahelptags"></a><code class="help-tag">:helptags</code>
			<a name="E150"></a><code class="help-tag-right">E150</code> <a name="E151"></a><code class="help-tag">E151</code> <a name="E152"></a><code class="help-tag">E152</code> <a name="E153"></a><code class="help-tag">E153</code> <a name="E154"></a><code class="help-tag">E154</code> <a name="E670"></a><code class="help-tag">E670</code> <a name="E856"></a><code class="help-tag">E856</code>
:helpt[ags] [++t] <code>{dir}</code>
			Generate the help tags file(s) for directory <code>{dir}</code>.
			When <code>{dir}</code> is ALL then all "doc" directories in
			<a href="options.html#'runtimepath'">'runtimepath'</a> will be used.</div>
<div class="old-help-para">			All "*.txt" and "*.??x" files in the directory and
			sub-directories are scanned for a help tag definition
			in between stars.  The "*.??x" files are for
			translated docs, they generate the "tags-??" file, see
			<a href="helphelp.html#help-translated">help-translated</a>.  The generated tags files are
			sorted.
			When there are duplicates an error message is given.
			An existing tags file is silently overwritten.</div>
<div class="old-help-para">			The optional "++t" argument forces adding the
			"help-tags" tag.  This is also done when the <code>{dir}</code> is
			equal to $VIMRUNTIME/doc.</div>
<div class="old-help-para">			To rebuild the help tags in the runtime directory
			(requires write permission there):<pre>:helptags $VIMRUNTIME/doc</pre></div>
<div class="old-help-para"><h2 class="help-heading">2. Translated help files<span class="help-heading-tags">				<a name="help-translated"></a><span class="help-tag">help-translated</span></span></h2></div>
<div class="old-help-para">It is possible to add translated help files, next to the original English help
files.  Vim will search for all help in "doc" directories in <a href="options.html#'runtimepath'">'runtimepath'</a>.</div>
<div class="old-help-para">At this moment translations are available for:
	Chinese  - multiple authors
	French   - translated by David Blanchet
	Italian  - translated by Antonio Colombo
	Japanese - multiple authors
	Polish   - translated by Mikolaj Machowski
	Russian  - translated by Vassily Ragosin
See the Vim website to find them: <a href="https://www.vim.org/translations.php">https://www.vim.org/translations.php</a></div>
<div class="old-help-para">A set of translated help files consists of these files:</div>
<div class="old-help-para">	help.abx
	howto.abx
	...
	tags-ab</div>
<div class="old-help-para">"ab" is the two-letter language code.  Thus for Italian the names are:</div>
<div class="old-help-para">	help.itx
	howto.itx
	...
	tags-it</div>
<div class="old-help-para">The <a href="options.html#'helplang'">'helplang'</a> option can be set to the preferred language(s).  The default is
set according to the environment.  Vim will first try to find a matching tag
in the preferred language(s).  English is used when it cannot be found.</div>
<div class="old-help-para">To find a tag in a specific language, append "@ab" to a tag, where "ab" is the
two-letter language code.  Example:<pre>:he user-manual@it
:he user-manual@en</pre>
The first one finds the Italian user manual, even when <a href="options.html#'helplang'">'helplang'</a> is empty.
The second one finds the English user manual, even when <a href="options.html#'helplang'">'helplang'</a> is set to
"it".</div>
<div class="old-help-para">When using command-line completion for the ":help" command, the "@en"
extension is only shown when a tag exists for multiple languages.  When the
tag only exists for English "@en" is omitted.  When the first candidate has an
"@ab" extension and it matches the first language in <a href="options.html#'helplang'">'helplang'</a> "@ab" is also
omitted.</div>
<div class="old-help-para">When using <a href="tagsrch.html#CTRL-%5D">CTRL-]</a> or ":help!" in a non-English help file Vim will try to
find the tag in the same language.  If not found then <a href="options.html#'helplang'">'helplang'</a> will be used
to select a language.</div>
<div class="old-help-para">Help files must use latin1 or utf-8 encoding.  Vim assumes the encoding is
utf-8 when finding non-ASCII characters in the first line.  Thus you must
translate the header with "For Vim version".</div>
<div class="old-help-para">The same encoding must be used for the help files of one language in one
directory.  You can use a different encoding for different languages and use
a different encoding for help files of the same language but in a different
directory.</div>
<div class="old-help-para">Hints for translators:
<div class="help-li" style=""> Do not translate the tags.  This makes it possible to use <a href="options.html#'helplang'">'helplang'</a> to
  specify the preferred language.  You may add new tags in your language.
</div><div class="help-li" style=""> When you do not translate a part of a file, add tags to the English version,
  using the "tag@en" notation.
</div><div class="help-li" style=""> Make a package with all the files and the tags file available for download.
  Users can drop it in one of the "doc" directories and start use it.
  Report this to Bram, so that he can add a link on www.vim.org.
</div><div class="help-li" style=""> Use the <a href="helphelp.html#%3Ahelptags">:helptags</a> command to generate the tags files.  It will find all
  languages in the specified directory.
</div></div>
<div class="old-help-para"><h2 class="help-heading">3. Writing help files<span class="help-heading-tags">					<a name="help-writing"></a><span class="help-tag">help-writing</span></span></h2></div>
<div class="old-help-para">For ease of use, a Vim help file for a plugin should follow the format of the
standard Vim help files, except for the first line.  If you are writing a new
help file it's best to copy one of the existing files and use it as a
template.</div>
<div class="old-help-para">The first line in a help file should have the following format:</div>
<div class="old-help-para"><a name="plugin_name.txt"></a><code class="help-tag">plugin_name.txt</code>  	<code>{short description of the plugin}</code></div>
<div class="old-help-para">The first field is a help tag where ":help plugin_name" will jump to.  The
remainder of the line, after a Tab, describes the plugin purpose in a short
way.  This will show up in the "LOCAL ADDITIONS" section of the main help</div>
<div class="old-help-para">If you want to add a version number or last modification date, put it in the
second line, right aligned.</div>
<div class="old-help-para">At the bottom of the help file, place a Vim modeline to set the <a href="options.html#'textwidth'">'textwidth'</a>
and <a href="options.html#'tabstop'">'tabstop'</a> options and the <a href="options.html#'filetype'">'filetype'</a> to "help".  Never set a global option
in such a modeline, that can have undesired consequences.</div>
<div class="old-help-para"><a name="_tags"></a><h3 class="help-heading">TAGS</h3></div>
<div class="old-help-para">To define a help tag, place the name between asterisks (<a name="tag-name"></a><code class="help-tag">tag-name</code>).  The
tag-name should be different from all the Vim help tag names and ideally
should begin with the name of the Vim plugin.  The tag name is usually right
aligned on a line.</div>
<div class="old-help-para">When referring to an existing help tag and to create a hot-link, place the
name between two bars (|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+helphelp.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/helphelp.html%0D%0DContext%3A%0D%0D%60%60%60%0Daligned%20on%20a%20line.%0A%0AWhen%20referring%20to%20an%20existing%20help%20tag%20and%20to%20create%20a%20hot-link%2C%20place%20the%0Aname%20between%20two%20bars%20(%7C)%20eg.%20%7Chelp-writing%7C.%0A%0AWhen%20referring%20to%20a%20Vim%20command%20and%20to%20create%20a%20hot-link%2C%20place%20the%0Aname%20between%20two%20backticks%2C%20eg.%20inside%20%60%3Afiletype%60.%20%20You%20will%20see%20this%20is%0D%60%60%60">)</a> eg. <a href="helphelp.html#help-writing">help-writing</a>.</div>
<div class="old-help-para">When referring to a Vim command and to create a hot-link, place the
name between two backticks, eg. inside <code>:filetype</code>.  You will see this is
highlighted as a command, like a code block (see below).</div>
<div class="old-help-para">When referring to a Vim option in the help file, place the option name between
two single quotes, eg. <a href="options.html#'statusline'">'statusline'</a></div>
<div class="old-help-para">When referring to any other technical term, such as a filename or function
parameter, surround it in backticks, eg. <code>~/.path/to/init.vim</code>.</div>
<div class="old-help-para"><a name="_highlighting"></a><h3 class="help-heading">HIGHLIGHTING</h3></div>
<div class="old-help-para">To define a column heading, use a tilde character at the end of the line.
This will highlight the column heading in a different color.  E.g.</div>
<div class="old-help-para">Column heading~</div>
<div class="old-help-para">To separate sections in a help file, place a series of '=' characters in a
line starting from the first column.  The section separator line is highlighted
differently.</div>
<div class="old-help-para">							      <a name="help-codeblock"></a><code class="help-tag-right">help-codeblock</code>
To quote a block of ex-commands verbatim, place a greater than (&gt;) character
at the end of the line before the block and a less than (&lt;) character as the
first non-blank on a line following the block.  Any line starting in column 1
also implicitly stops the block of ex-commands before it.  E.g.<pre>function Example_Func()
    echo "Example"
endfunction</pre></div>
<div class="old-help-para">The following are highlighted differently in a Vim help file:
<div class="help-li" style=""> a special key name expressed either in &lt;&gt; notation as in <code>&lt;PageDown&gt;</code>, or
    as a Ctrl character as in <code>CTRL-X</code>
</div><div class="help-li" style=""> anything between <code>{braces}</code>, e.g. <code>{lhs}</code> and <code>{rhs}</code>
</div></div>
<div class="old-help-para">The word "Note", "Notes" and similar automagically receive distinctive
highlighting.  So do these:
Todo	something to do
Error	something wrong</div>
<div class="old-help-para">You can find the details in $VIMRUNTIME/syntax/help.vim</div>

  
  