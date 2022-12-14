---
title:  Syntax
layout: ../../layouts/MainLayout.astro
---

  <a name="syntax.txt"></a><a name="syntax"></a><h1> Syntax</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/syntax.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Syntax highlighting <a name="syntax-highlighting"></a><code class="help-tag">syntax-highlighting</code> <a name="coloring"></a><code class="help-tag">coloring</code></div>
<div class="old-help-para">Syntax highlighting enables Vim to show parts of the text in another font or
color.	Those parts can be specific keywords or text matching a pattern.  Vim
doesn't parse the whole file (to keep it fast), so the highlighting has its
limitations.  Lexical highlighting might be a better name, but since everybody
calls it syntax highlighting we'll stick with that.</div>
<div class="old-help-para">Vim supports syntax highlighting on all terminals.  But since most ordinary
terminals have very limited highlighting possibilities, it works best in the
GUI version, gvim.</div>
<div class="old-help-para">In the User Manual:
<a href="/neovim-docs-web/en/usr_06#usr_06.txt">usr_06.txt</a> introduces syntax highlighting.
<a href="/neovim-docs-web/en/usr_44#usr_44.txt">usr_44.txt</a> introduces writing a syntax file.</div>
<div class="old-help-para"><h2 class="help-heading">1. Quick start<span class="help-heading-tags">						<a name="%3Asyn-qstart"></a><span class="help-tag">:syn-qstart</span></span></h2></div>
<div class="old-help-para">				<a name="%3Asyn-enable"></a><code class="help-tag-right">:syn-enable</code> <a name="%3Asyntax-enable"></a><code class="help-tag">:syntax-enable</code> <a name="%3Asyn-on"></a><code class="help-tag">:syn-on</code> <a name="%3Asyntax-on"></a><code class="help-tag">:syntax-on</code>
Syntax highlighting is enabled by default. If you need to enable it again
after it was disabled (see below), use:<pre>:syntax enable</pre>
Alternatively:<pre>:syntax on</pre>
What this command actually does is to execute the command<pre>:source $VIMRUNTIME/syntax/syntax.vim</pre>
If the VIM environment variable is not set, Vim will try to find
the path in another way (see <a href="/neovim-docs-web/en/starting#%24VIMRUNTIME">$VIMRUNTIME</a>).  Usually this works just
fine.  If it doesn't, try setting the VIM environment variable to the
directory where the Vim stuff is located.  For example, if your syntax files
are in the "/usr/vim/vim82/syntax" directory, set $VIMRUNTIME to
"/usr/vim/vim82".  You must do this in the shell, before starting Vim.
This command also sources the <a href="/neovim-docs-web/en/gui#menu.vim">menu.vim</a> script when the GUI is running or
will start soon.  See <a href="/neovim-docs-web/en/options#'go-M'">'go-M'</a> about avoiding that.</div>
<div class="old-help-para">					<a name="%3Ahi-normal"></a><code class="help-tag-right">:hi-normal</code> <a name="%3Ahighlight-normal"></a><code class="help-tag">:highlight-normal</code>
If you are running in the GUI, you can get white text on a black background
with:<pre>:highlight Normal guibg=Black guifg=White</pre>
For a color terminal see <a href="/neovim-docs-web/en/syntax#%3Ahi-normal-cterm">:hi-normal-cterm</a>.</div>
<div class="old-help-para">NOTE: The syntax files on MS-Windows have lines that end in <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code>.
The files for Unix end in <code>&lt;NL&gt;</code>.  This means you should use the right type of
file for your system.  Although on MS-Windows the right format is
automatically selected if the <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> option is not empty.</div>
<div class="old-help-para">NOTE: When using reverse video ("gvim -fg white -bg black"), the default value
of <a href="/neovim-docs-web/en/options#'background'">'background'</a> will not be set until the GUI window is opened, which is after
reading the <a href="/neovim-docs-web/en/gui#gvimrc">gvimrc</a>.  This will cause the wrong default highlighting to be
used.  To set the default value of <a href="/neovim-docs-web/en/options#'background'">'background'</a> before switching on
highlighting, include the ":gui" command in the <a href="/neovim-docs-web/en/gui#gvimrc">gvimrc</a>:<pre>:gui                " open window and set default for 'background'
:syntax on        " start highlighting, use 'background' to set colors</pre>
NOTE: Using ":gui" in the <a href="/neovim-docs-web/en/gui#gvimrc">gvimrc</a> means that "gvim -f" won't start in the
foreground!  Use ":gui -f" then.</div>
<div class="old-help-para">							<a name="g%3Asyntax_on"></a><code class="help-tag-right">g:syntax_on</code>
You can toggle the syntax on/off with this command:<pre>:if exists("g:syntax_on") | syntax off | else | syntax enable | endif</pre>
To put this into a mapping, you can use:<pre>:map &lt;F7&gt; :if exists("g:syntax_on") &lt;Bar&gt;
     \   syntax off &lt;Bar&gt;
     \ else &lt;Bar&gt;
     \   syntax enable &lt;Bar&gt;
     \ endif &lt;CR&gt;</pre>
[using the <a href="/neovim-docs-web/en/intro#%3C%3E">&lt;&gt;</a> notation, type this literally]</div>
<div class="old-help-para">Details:
The ":syntax" commands are implemented by sourcing a file.  To see exactly how
this works, look in the file:
<div class="help-column_heading">    command		file</div>    :syntax enable	$VIMRUNTIME/syntax/syntax.vim
    :syntax on		$VIMRUNTIME/syntax/syntax.vim
    :syntax manual	$VIMRUNTIME/syntax/manual.vim
    :syntax off		$VIMRUNTIME/syntax/nosyntax.vim
Also see <a href="/neovim-docs-web/en/syntax#syntax-loading">syntax-loading</a>.</div>
<div class="old-help-para">NOTE: If displaying long lines is slow and switching off syntax highlighting
makes it fast, consider setting the <a href="/neovim-docs-web/en/options#'synmaxcol'">'synmaxcol'</a> option to a lower value.</div>
<div class="old-help-para"><h2 class="help-heading">2. Syntax files<span class="help-heading-tags">						<a name="%3Asyn-files"></a><span class="help-tag">:syn-files</span></span></h2></div>
<div class="old-help-para">The syntax and highlighting commands for one language are normally stored in
a syntax file.	The name convention is: "{name}.vim".  Where <code>{name}</code> is the
name of the language, or an abbreviation (to fit the name in 8.3 characters,
a requirement in case the file is used on a DOS filesystem).
Examples:
	c.vim		perl.vim	java.vim	html.vim
	cpp.vim		sh.vim		csh.vim</div>
<div class="old-help-para">The syntax file can contain any Ex commands, just like a vimrc file.  But
the idea is that only commands for a specific language are included.  When a
language is a superset of another language, it may include the other one,
for example, the cpp.vim file could include the c.vim file:<pre>:so $VIMRUNTIME/syntax/c.vim</pre>
The .vim files are normally loaded with an autocommand.  For example:<pre>:au Syntax c            runtime! syntax/c.vim
:au Syntax cpp   runtime! syntax/cpp.vim</pre>
These commands are normally in the file $VIMRUNTIME/syntax/synload.vim.</div>
<div class="old-help-para"><h3 class="help-heading">MAKING YOUR OWN SYNTAX FILES<span class="help-heading-tags">				<a name="mysyntaxfile"></a><span class="help-tag">mysyntaxfile</span></span></h3></div>
<div class="old-help-para">When you create your own syntax files, and you want to have Vim use these
automatically with ":syntax enable", do this:</div>
<div class="old-help-para">1. Create your user runtime directory.	You would normally use the first item
   of the <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> option.  Example for Unix:<pre>mkdir ~/.config/nvim</pre>
2. Create a directory in there called "syntax".  For Unix:<pre>mkdir ~/.config/nvim/syntax</pre>
3. Write the Vim syntax file.  Or download one from the internet.  Then write
   it in your syntax directory.  For example, for the "mine" syntax:<pre>:w ~/.config/nvim/syntax/mine.vim</pre>
Now you can start using your syntax file manually:<pre>:set syntax=mine</pre>
You don't have to exit Vim to use this.</div>
<div class="old-help-para">If you also want Vim to detect the type of file, see <a href="/neovim-docs-web/en/filetype#new-filetype">new-filetype</a>.</div>
<div class="old-help-para">If you are setting up a system with many users and you don't want each user
to add the same syntax file, you can use another directory from <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.</div>
<div class="old-help-para"><h3 class="help-heading">ADDING TO AN EXISTING SYNTAX FILE<span class="help-heading-tags">		<a name="mysyntaxfile-add"></a><span class="help-tag">mysyntaxfile-add</span></span></h3></div>
<div class="old-help-para">If you are mostly satisfied with an existing syntax file, but would like to
add a few items or change the highlighting, follow these steps:</div>
<div class="old-help-para">1. Create your user directory from <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>, see above.</div>
<div class="old-help-para">2. Create a directory in there called "after/syntax".  For Unix:<pre>mkdir ~/.config/nvim/after
mkdir ~/.config/nvim/after/syntax</pre>
3. Write a Vim script that contains the commands you want to use.  For
   example, to change the colors for the C syntax:<pre>highlight cComment ctermfg=Green guifg=Green</pre>
4. Write that file in the "after/syntax" directory.  Use the name of the
   syntax, with ".vim" added.  For our C syntax:<pre>:w ~/.config/nvim/after/syntax/c.vim</pre>
That's it.  The next time you edit a C file the Comment color will be
different.  You don't even have to restart Vim.</div>
<div class="old-help-para">If you have multiple files, you can use the filetype as the directory name.
All the "*.vim" files in this directory will be used, for example:
	~/.config/nvim/after/syntax/c/one.vim
	~/.config/nvim/after/syntax/c/two.vim</div>
<div class="old-help-para"><h3 class="help-heading">REPLACING AN EXISTING SYNTAX FILE<span class="help-heading-tags">			<a name="mysyntaxfile-replace"></a><span class="help-tag">mysyntaxfile-replace</span></span></h3></div>
<div class="old-help-para">If you don't like a distributed syntax file, or you have downloaded a new
version, follow the same steps as for <a href="/neovim-docs-web/en/syntax#mysyntaxfile">mysyntaxfile</a> above.  Just make sure
that you write the syntax file in a directory that is early in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.
Vim will only load the first syntax file found, assuming that it sets
b:current_syntax.</div>
<div class="old-help-para"><h3 class="help-heading">NAMING CONVENTIONS<span class="help-heading-tags">		    <a name="group-name"></a><span class="help-tag">group-name</span> <a name="%7Bgroup-name%7D"></a><span class="help-tag">{group-name}</span> <a name="E669"></a><span class="help-tag">E669</span> <a name="E5248"></a><span class="help-tag">E5248</span></span></h3></div>
<div class="old-help-para">A syntax group name is to be used for syntax items that match the same kind of
thing.  These are then linked to a highlight group that specifies the color.
A syntax group name doesn't specify any color or attributes itself.</div>
<div class="old-help-para">The name for a highlight or syntax group must consist of ASCII letters,
digits, underscores, periods and <code>@</code> characters.  As a regexp it is
<code>[a-zA-Z0-9_.@]*</code>. The maximum length of a group name is about 200 bytes.
<a name="E1249"></a><code class="help-tag">E1249</code></div>
<div class="old-help-para">To be able to allow each user to pick their favorite set of colors, there must
be preferred names for highlight groups that are common for many languages.
These are the suggested group names (if syntax highlighting works properly
you can see the actual color, except for "Ignore"):</div>
<div class="old-help-para">Comment	any comment</div>
<div class="old-help-para">Constant	any constant
	 String		a string constant: "this is a string"
	 Character	a character constant: 'c', '\n'
	 Number		a number constant: 234, 0xff
	 Boolean	a boolean constant: TRUE, false
	 Float		a floating point constant: 2.3e10</div>
<div class="old-help-para">Identifier	any variable name
	 Function	function name (also: methods for classes)</div>
<div class="old-help-para">Statement	any statement
	 Conditional	if, then, else, endif, switch, etc.
	 Repeat		for, do, while, etc.
	 Label		case, default, etc.
	 Operator	"sizeof", "+", "*", etc.
	 Keyword	any other keyword
	 Exception	try, catch, throw</div>
<div class="old-help-para">PreProc	generic Preprocessor
	 Include	preprocessor #include
	 Define		preprocessor #define
	 Macro		same as Define
	 PreCondit	preprocessor #if, #else, #endif, etc.</div>
<div class="old-help-para">Type		int, long, char, etc.
	 StorageClass	static, register, volatile, etc.
	 Structure	struct, union, enum, etc.
	 Typedef	A typedef</div>
<div class="old-help-para">Special	any special symbol
	 SpecialChar	special character in a constant
	 Tag		you can use <code>CTRL-]</code> on this
	 Delimiter	character that needs attention
	 SpecialComment	special things inside a comment
	 Debug		debugging statements</div>
<div class="old-help-para">Underlined	text that stands out, HTML links</div>
<div class="old-help-para">Ignore		left blank, hidden  <a href="/neovim-docs-web/en/syntax#hl-Ignore">hl-Ignore</a></div>
<div class="old-help-para">Error		any erroneous construct</div>
<div class="old-help-para">Todo		anything that needs extra attention; mostly the
			keywords TODO FIXME and XXX</div>
<div class="old-help-para">The names marked with * are the preferred groups; the others are minor groups.
For the preferred groups, the "syntax.vim" file contains default highlighting.
The minor groups are linked to the preferred groups, so they get the same
highlighting.  You can override these defaults by using ":highlight" commands
after sourcing the "syntax.vim" file.</div>
<div class="old-help-para">Note that highlight group names are not case sensitive.  "String" and "string"
can be used for the same group.</div>
<div class="old-help-para">The following names are reserved and cannot be used as a group name:
	NONE   ALL   ALLBUT   contains	 contained</div>
<div class="old-help-para">							<a name="hl-Ignore"></a><code class="help-tag-right">hl-Ignore</code>
When using the Ignore group, you may also consider using the conceal
mechanism.  See <a href="/neovim-docs-web/en/syntax#conceal">conceal</a>.</div>
<div class="old-help-para"><h2 class="help-heading">3. Syntax loading procedure<span class="help-heading-tags">				<a name="syntax-loading"></a><span class="help-tag">syntax-loading</span></span></h2></div>
<div class="old-help-para">This explains the details that happen when the command ":syntax enable" is
issued.  When Vim initializes itself, it finds out where the runtime files are
located.  This is used here as the variable <a href="/neovim-docs-web/en/starting#%24VIMRUNTIME">$VIMRUNTIME</a>.</div>
<div class="old-help-para">":syntax enable" and ":syntax on" do the following:</div>
<div class="old-help-para">    Source $VIMRUNTIME/syntax/syntax.vim
    |
    +-	Clear out any old syntax by sourcing $VIMRUNTIME/syntax/nosyntax.vim
    |
    +-	Source first syntax/synload.vim in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>
    |	|
    |	+-  Set up syntax autocmds to load the appropriate syntax file when
    |	|   the <a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a> option is set. <a name="synload-1"></a><code class="help-tag">synload-1</code>
    |	|
    |	+-  Source the user's optional file, from the <a href="/neovim-docs-web/en/syntax#mysyntaxfile">mysyntaxfile</a> variable.
    |	    This is for backwards compatibility with Vim 5.x only. <a name="synload-2"></a><code class="help-tag">synload-2</code>
    |
    +-	Do ":filetype on", which does ":runtime! filetype.vim".  It loads any
    |	filetype.vim files found.  It should always Source
    |	$VIMRUNTIME/filetype.vim, which does the following.
    |	|
    |	+-  Install autocmds based on suffix to set the <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> option
    |	|   This is where the connection between file name and file type is
    |	|   made for known file types. <a name="synload-3"></a><code class="help-tag">synload-3</code>
    |	|
    |	+-  Source the user's optional file, from the <a name="myfiletypefile"></a><code class="help-tag">myfiletypefile</code>
    |	|   variable.  This is for backwards compatibility with Vim 5.x only.
    |	|   <a name="synload-4"></a><code class="help-tag">synload-4</code>
    |	|
    |	+-  Install one autocommand which sources scripts.vim when no file
    |	|   type was detected yet. <a name="synload-5"></a><code class="help-tag">synload-5</code>
    |	|
    |	+-  Source $VIMRUNTIME/menu.vim, to setup the Syntax menu. <a href="/neovim-docs-web/en/gui#menu.vim">menu.vim</a>
    |
    +-	Install a FileType autocommand to set the <a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a> option when a file
    |	type has been detected. <a name="synload-6"></a><code class="help-tag">synload-6</code>
    |
    +-	Execute syntax autocommands to start syntax highlighting for each
	already loaded buffer.</div>
<div class="old-help-para">Upon loading a file, Vim finds the relevant syntax file as follows:</div>
<div class="old-help-para">    Loading the file triggers the BufReadPost autocommands.
    |
    +-	If there is a match with one of the autocommands from <a href="/neovim-docs-web/en/syntax#synload-3">synload-3</a>
    |	(known file types) or <a href="/neovim-docs-web/en/syntax#synload-4">synload-4</a> (user's file types), the <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a>
    |	option is set to the file type.
    |
    +-	The autocommand at <a href="/neovim-docs-web/en/syntax#synload-5">synload-5</a> is triggered.  If the file type was not
    |	found yet, then scripts.vim is searched for in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  This
    |	should always load $VIMRUNTIME/scripts.vim, which does the following.
    |	|
    |	+-  Source the user's optional file, from the <a name="myscriptsfile"></a><code class="help-tag">myscriptsfile</code>
    |	|   variable.  This is for backwards compatibility with Vim 5.x only.
    |	|
    |	+-  If the file type is still unknown, check the contents of the file,
    |	    again with checks like "getline(1) =~ pattern" as to whether the
    |	    file type can be recognized, and set <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a>.
    |
    +-	When the file type was determined and <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> was set, this
    |	triggers the FileType autocommand <a href="/neovim-docs-web/en/syntax#synload-6">synload-6</a> above.  It sets
    |	<a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a> to the determined file type.
    |
    +-	When the <a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a> option was set above, this triggers an autocommand
    |	from <a href="/neovim-docs-web/en/syntax#synload-1">synload-1</a> (and <a href="/neovim-docs-web/en/syntax#synload-2">synload-2</a>).  This find the main syntax file in
    |	<a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>, with this command:
    |		runtime! syntax/&lt;name&gt;.vim
    |
    +-	Any other user installed FileType or Syntax autocommands are
	triggered.  This can be used to change the highlighting for a specific
	syntax.</div>
<div class="old-help-para"><h2 class="help-heading">4. Conversion to HTML<span class="help-heading-tags">				<a name="2html.vim"></a><span class="help-tag">2html.vim</span> <a name="convert-to-HTML"></a><span class="help-tag">convert-to-HTML</span></span></h2></div>
<div class="old-help-para">2html is not a syntax file itself, but a script that converts the current
window into HTML. Vim opens a new window in which it builds the HTML file.</div>
<div class="old-help-para">After you save the resulting file, you can view it with any browser. The
colors should be exactly the same as you see them in Vim.  With
<a href="/neovim-docs-web/en/syntax#g%3Ahtml_line_ids">g:html_line_ids</a> you can jump to specific lines by adding (for example) #L123
or #123 to the end of the URL in your browser's address bar. And with
<a href="/neovim-docs-web/en/syntax#g%3Ahtml_dynamic_folds">g:html_dynamic_folds</a> enabled, you can show or hide the text that is folded
in Vim.</div>
<div class="old-help-para">You are not supposed to set the <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> or <a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a> option to "2html"!
Source the script to convert the current file:<pre>:runtime! syntax/2html.vim</pre></div>
<div class="old-help-para">Many variables affect the output of 2html.vim; see below. Any of the on/off
options listed below can be enabled or disabled by setting them explicitly to
the desired value, or restored to their default by removing the variable using
<a href="/neovim-docs-web/en/eval#%3Aunlet">:unlet</a>.</div>
<div class="old-help-para">Remarks:
<div class="help-li" style=""> Some truly ancient browsers may not show the background colors.
</div><div class="help-li" style=""> From most browsers you can also print the file (in color)!
</div></div>
<div class="old-help-para">Here is an example how to run the script over all .c and .h files from a
Unix shell:<pre>for f in *.[ch]; do gvim -f +"syn on" +"run! syntax/2html.vim" +"wq" +"q" $f; done</pre></div>
<div class="old-help-para">					<a name="g%3Ahtml_start_line"></a><code class="help-tag-right">g:html_start_line</code> <a name="g%3Ahtml_end_line"></a><code class="help-tag">g:html_end_line</code>
To restrict the conversion to a range of lines, use a range with the <a href="/neovim-docs-web/en/syntax#%3ATOhtml">:TOhtml</a>
command below, or set "g:html_start_line" and "g:html_end_line" to the first
and last line to be converted.  Example, using the last set Visual area:<pre>:let g:html_start_line = line("'&lt;")
:let g:html_end_line = line("'&gt;")
:runtime! syntax/2html.vim</pre></div>
<div class="old-help-para">							<a name="%3ATOhtml"></a><code class="help-tag-right">:TOhtml</code>
:[range]TOhtml		The ":TOhtml" command is defined in a standard plugin.
			This command will source <a href="/neovim-docs-web/en/syntax#2html.vim">2html.vim</a> for you. When a
			range is given, this command sets <a href="/neovim-docs-web/en/syntax#g%3Ahtml_start_line">g:html_start_line</a>
			and <a href="/neovim-docs-web/en/syntax#g%3Ahtml_end_line">g:html_end_line</a> to the start and end of the
			range, respectively. Default range is the entire
			buffer.</div>
<div class="old-help-para">			If the current window is part of a <a href="/neovim-docs-web/en/diff#diff">diff</a>, unless
			<a href="/neovim-docs-web/en/syntax#g%3Ahtml_diff_one_file">g:html_diff_one_file</a> is set, :TOhtml will convert
			all windows which are part of the diff in the current
			tab and place them side-by-side in a <code>&lt;table&gt;</code> element
			in the generated HTML. With <a href="/neovim-docs-web/en/syntax#g%3Ahtml_line_ids">g:html_line_ids</a> you can
			jump to lines in specific windows with (for example)
			#W1L42 for line 42 in the first diffed window, or
			#W3L87 for line 87 in the third.</div>
<div class="old-help-para">			Examples:<pre>:10,40TOhtml " convert lines 10-40 to html
:'&lt;,'&gt;TOhtml " convert current/last visual selection
:TOhtml      " convert entire buffer</pre></div>
<div class="old-help-para">							<a name="g%3Ahtml_diff_one_file"></a><code class="help-tag-right">g:html_diff_one_file</code>
Default: 0.
When 0, and using <a href="/neovim-docs-web/en/syntax#%3ATOhtml">:TOhtml</a> all windows involved in a <a href="/neovim-docs-web/en/diff#diff">diff</a> in the current tab
page are converted to HTML and placed side-by-side in a <code>&lt;table&gt;</code> element. When
1, only the current buffer is converted.
Example:<pre>let g:html_diff_one_file = 1</pre></div>
<div class="old-help-para">							 <a name="g%3Ahtml_whole_filler"></a><code class="help-tag-right">g:html_whole_filler</code>
Default: 0.
When 0, if <a href="/neovim-docs-web/en/syntax#g%3Ahtml_diff_one_file">g:html_diff_one_file</a> is 1, a sequence of more than 3 filler lines
is displayed as three lines with the middle line mentioning the total number
of inserted lines.
When 1, always display all inserted lines as if <a href="/neovim-docs-web/en/syntax#g%3Ahtml_diff_one_file">g:html_diff_one_file</a> were
not set.
<pre>:let g:html_whole_filler = 1</pre></div>
<div class="old-help-para">				     <a name="TOhtml-performance"></a><code class="help-tag-right">TOhtml-performance</code> <a name="g%3Ahtml_no_progress"></a><code class="help-tag">g:html_no_progress</code>
Default: 0.
When 0, display a progress bar in the statusline for each major step in the
2html.vim conversion process.
When 1, do not display the progress bar. This offers a minor speed improvement
but you won't have any idea how much longer the conversion might take; for big
files it can take a long time!
Example:<pre>let g:html_no_progress = 1</pre></div>
<div class="old-help-para">You can obtain better performance improvements by also instructing Vim to not
run interactively, so that too much time is not taken to redraw as the script
moves through the buffer, switches windows, and the like:<pre>vim -E -s -c "let g:html_no_progress=1" -c "syntax on" -c "set ft=c" -c "runtime syntax/2html.vim" -cwqa myfile.c</pre></div>
<div class="old-help-para">Note that the -s flag prevents loading your vimrc and any plugins, so you
need to explicitly source/enable anything that will affect the HTML
conversion. See <a href="/neovim-docs-web/en/starting#-E">-E</a> and <a href="/neovim-docs-web/en/starting#-s-ex">-s-ex</a> for details. It is probably best to create a
script to replace all the -c commands and use it with the -u flag instead of
specifying each command separately.</div>
<div class="old-help-para">				    <a name="hl-TOhtmlProgress"></a><code class="help-tag-right">hl-TOhtmlProgress</code> <a name="TOhtml-progress-color"></a><code class="help-tag">TOhtml-progress-color</code>
When displayed, the progress bar will show colored boxes along the statusline
as the HTML conversion proceeds. By default, the background color as the
current "DiffDelete" highlight group is used. If "DiffDelete" and "StatusLine"
have the same background color, TOhtml will automatically adjust the color to
differ. If you do not like the automatically selected colors, you can define
your own highlight colors for the progress bar. Example:<pre>hi TOhtmlProgress guifg=#c0ffee ctermbg=7</pre></div>
<div class="old-help-para">							 <a name="g%3Ahtml_number_lines"></a><code class="help-tag-right">g:html_number_lines</code>
Default: Current <a href="/neovim-docs-web/en/options#'number'">'number'</a> setting.
When 0, buffer text is displayed in the generated HTML without line numbering.
When 1, a column of line numbers is added to the generated HTML with the same
highlighting as the line number column in Vim (<a href="/neovim-docs-web/en/syntax#hl-LineNr">hl-LineNr</a>).
Force line numbers even if <a href="/neovim-docs-web/en/options#'number'">'number'</a> is not set:<pre>:let g:html_number_lines = 1</pre>
Force to omit the line numbers:<pre>:let g:html_number_lines = 0</pre>
Go back to the default to use <a href="/neovim-docs-web/en/options#'number'">'number'</a> by deleting the variable:<pre>:unlet g:html_number_lines</pre></div>
<div class="old-help-para">							<a name="g%3Ahtml_line_ids"></a><code class="help-tag-right">g:html_line_ids</code>
Default: 1 if <a href="/neovim-docs-web/en/syntax#g%3Ahtml_number_lines">g:html_number_lines</a> is set, 0 otherwise.
When 1, adds an HTML id attribute to each line number, or to an empty <code>&lt;span&gt;</code>
inserted for that purpose if no line numbers are shown. This ID attribute
takes the form of L123 for single-buffer HTML pages, or W2L123 for diff-view
pages, and is used to jump to a specific line (in a specific window of a diff
view). Javascript is inserted to open any closed dynamic folds
(<a href="/neovim-docs-web/en/syntax#g%3Ahtml_dynamic_folds">g:html_dynamic_folds</a>) containing the specified line before jumping. The
javascript also allows omitting the window ID in the url, and the leading L.
For example:<pre>page.html#L123        jumps to line 123 in a single-buffer file
page.html#123        does the same

diff.html#W1L42        jumps to line 42 in the first window in a diff
diff.html#42        does the same</pre></div>
<div class="old-help-para">							      <a name="g%3Ahtml_use_css"></a><code class="help-tag-right">g:html_use_css</code>
Default: 1.
When 1, generate valid HTML 5 markup with CSS styling, supported in all modern
browsers and many old browsers.
When 0, generate <code>&lt;font&gt;</code> tags and similar outdated markup. This is not
recommended but it may work better in really old browsers, email clients,
forum posts, and similar situations where basic CSS support is unavailable.
Example:<pre>:let g:html_use_css = 0</pre></div>
<div class="old-help-para">						       <a name="g%3Ahtml_ignore_conceal"></a><code class="help-tag-right">g:html_ignore_conceal</code>
Default: 0.
When 0, concealed text is removed from the HTML and replaced with a character
from <a href="/neovim-docs-web/en/syntax#%3Asyn-cchar">:syn-cchar</a> or <a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a> as appropriate, depending on the current
value of <a href="/neovim-docs-web/en/options#'conceallevel'">'conceallevel'</a>.
When 1, include all text from the buffer in the generated HTML, even if it is
<a href="/neovim-docs-web/en/syntax#conceal">conceal</a>ed.</div>
<div class="old-help-para">Either of the following commands will ensure that all text in the buffer is
included in the generated HTML (unless it is folded):<pre>:let g:html_ignore_conceal = 1
:setl conceallevel=0</pre></div>
<div class="old-help-para">						       <a name="g%3Ahtml_ignore_folding"></a><code class="help-tag-right">g:html_ignore_folding</code>
Default: 0.
When 0, text in a closed fold is replaced by the text shown for the fold in
Vim (<a href="/neovim-docs-web/en/fold#fold-foldtext">fold-foldtext</a>). See <a href="/neovim-docs-web/en/syntax#g%3Ahtml_dynamic_folds">g:html_dynamic_folds</a> if you also want to allow
the user to expand the fold as in Vim to see the text inside.
When 1, include all text from the buffer in the generated HTML; whether the
text is in a fold has no impact at all. <a href="/neovim-docs-web/en/syntax#g%3Ahtml_dynamic_folds">g:html_dynamic_folds</a> has no effect.</div>
<div class="old-help-para">Either of these commands will ensure that all text in the buffer is included
in the generated HTML (unless it is concealed):<pre>zR
:let g:html_ignore_folding = 1</pre></div>
<div class="old-help-para">							<a name="g%3Ahtml_dynamic_folds"></a><code class="help-tag-right">g:html_dynamic_folds</code>
Default: 0.
When 0, text in a closed fold is not included at all in the generated HTML.
When 1, generate javascript to open a fold and show the text within, just like
in Vim.</div>
<div class="old-help-para">Setting this variable to 1 causes 2html.vim to always use CSS for styling,
regardless of what <a href="/neovim-docs-web/en/syntax#g%3Ahtml_use_css">g:html_use_css</a> is set to.</div>
<div class="old-help-para">This variable is ignored when <a href="/neovim-docs-web/en/syntax#g%3Ahtml_ignore_folding">g:html_ignore_folding</a> is set.
<pre>:let g:html_dynamic_folds = 1</pre></div>
<div class="old-help-para">							<a name="g%3Ahtml_no_foldcolumn"></a><code class="help-tag-right">g:html_no_foldcolumn</code>
Default: 0.
When 0, if <a href="/neovim-docs-web/en/syntax#g%3Ahtml_dynamic_folds">g:html_dynamic_folds</a> is 1, generate a column of text similar to
Vim's foldcolumn (<a href="/neovim-docs-web/en/fold#fold-foldcolumn">fold-foldcolumn</a>) the user can click on to toggle folds
open or closed. The minimum width of the generated text column is the current
<a href="/neovim-docs-web/en/options#'foldcolumn'">'foldcolumn'</a> setting.
When 1, do not generate this column; instead, hovering the mouse cursor over
folded text will open the fold as if <a href="/neovim-docs-web/en/syntax#g%3Ahtml_hover_unfold">g:html_hover_unfold</a> were set.
<pre>:let g:html_no_foldcolumn = 1</pre></div>
<div class="old-help-para">				<a name="TOhtml-uncopyable-text"></a><code class="help-tag-right">TOhtml-uncopyable-text</code> <a name="g%3Ahtml_prevent_copy"></a><code class="help-tag">g:html_prevent_copy</code>
Default: Empty string.
This option prevents certain regions of the generated HTML from being copied,
when you select all text in document rendered in a browser and copy it. Useful
for allowing users to copy-paste only the source text even if a fold column or
line numbers are shown in the generated content. Specify regions to be
affected in this way as follows:
	f:	fold column
	n:	line numbers (also within fold text)
	t:	fold text
	d:	diff filler</div>
<div class="old-help-para">Example, to make the fold column and line numbers uncopyable:<pre>:let g:html_prevent_copy = "fn"</pre></div>
<div class="old-help-para">The method used to prevent copying in the generated page depends on the value
of <a href="/neovim-docs-web/en/syntax#g%3Ahtml_use_input_for_pc">g:html_use_input_for_pc</a>.</div>
<div class="old-help-para">						    <a name="g%3Ahtml_use_input_for_pc"></a><code class="help-tag-right">g:html_use_input_for_pc</code>
Default: "fallback"
If <a href="/neovim-docs-web/en/syntax#g%3Ahtml_prevent_copy">g:html_prevent_copy</a> is non-empty, then:</div>
<div class="old-help-para">When "all", read-only <code>&lt;input&gt;</code> elements are used in place of normal text for
uncopyable regions. In some browsers, especially older browsers, after
selecting an entire page and copying the selection, the <code>&lt;input&gt;</code> tags are not
pasted with the page text. If <a href="/neovim-docs-web/en/syntax#g%3Ahtml_no_invalid">g:html_no_invalid</a> is 0, the <code>&lt;input&gt;</code> tags have
invalid type; this works in more browsers, but the page will not validate.
Note: This method does NOT work in recent versions of Chrome and equivalent
browsers; the <code>&lt;input&gt;</code> tags get pasted with the text.</div>
<div class="old-help-para">When "fallback" (default value), the same <code>&lt;input&gt;</code> elements are generated for
older browsers, but newer browsers (detected by CSS feature query) hide the
<code>&lt;input&gt;</code> elements and instead use generated content in an ::before pseudoelement
to display the uncopyable text. This method should work with the largest
number of browsers, both old and new.</div>
<div class="old-help-para">When "none", the <code>&lt;input&gt;</code> elements are not generated at all. Only the
generated-content method is used. This means that old browsers, notably
Internet Explorer, will either copy the text intended not to be copyable, or
the non-copyable text may not appear at all. However, this is the most
standards-based method, and there will be much less markup.</div>
<div class="old-help-para">							   <a name="g%3Ahtml_no_invalid"></a><code class="help-tag-right">g:html_no_invalid</code>
Default: 0.
When 0, if <a href="/neovim-docs-web/en/syntax#g%3Ahtml_prevent_copy">g:html_prevent_copy</a> is non-empty and <a href="/neovim-docs-web/en/syntax#g%3Ahtml_use_input_for_pc">g:html_use_input_for_pc</a> is
not "none", an invalid attribute is intentionally inserted into the <code>&lt;input&gt;</code>
element for the uncopyable areas. This prevents pasting the <code>&lt;input&gt;</code> elements
in some applications. Specifically, some versions of Microsoft Word will not
paste the <code>&lt;input&gt;</code> elements if they contain this invalid attribute. When 1, no
invalid markup is inserted, and the generated page should validate. However,
<code>&lt;input&gt;</code> elements may be pasted into some applications and can be difficult to
remove afterward.</div>
<div class="old-help-para">							 <a name="g%3Ahtml_hover_unfold"></a><code class="help-tag-right">g:html_hover_unfold</code>
Default: 0.
When 0, the only way to open a fold generated by 2html.vim with
<a href="/neovim-docs-web/en/syntax#g%3Ahtml_dynamic_folds">g:html_dynamic_folds</a> set, is to click on the generated fold column.
When 1, use CSS 2.0 to allow the user to open a fold by moving the mouse
cursor over the displayed fold text. This is useful to allow users with
disabled javascript to view the folded text.</div>
<div class="old-help-para">Note that old browsers (notably Internet Explorer 6) will not support this
feature.  Browser-specific markup for IE6 is included to fall back to the
normal CSS1 styling so that the folds show up correctly for this browser, but
they will not be openable without a foldcolumn.
<pre>:let g:html_hover_unfold = 1</pre></div>
<div class="old-help-para">							      <a name="g%3Ahtml_id_expr"></a><code class="help-tag-right">g:html_id_expr</code>
Default: ""
Dynamic folding and jumping to line IDs rely on unique IDs within the document
to work. If generated HTML is copied into a larger document, these IDs are no
longer guaranteed to be unique. Set g:html_id_expr to an expression Vim can
evaluate to get a unique string to append to each ID used in a given document,
so that the full IDs will be unique even when combined with other content in a
larger HTML document. Example, to append _ and the buffer number to each ID:<pre>:let g:html_id_expr = '"_" .. bufnr("%")'</pre></div>
<div class="old-help-para">To append a string "_mystring" to the end of each ID:<pre>:let g:html_id_expr = '"_mystring"'</pre></div>
<div class="old-help-para">Note: When converting a diff view to HTML, the expression will only be
evaluated for the first window in the diff, and the result used for all the
windows.</div>
<div class="old-help-para">					  <a name="TOhtml-wrap-text"></a><code class="help-tag-right">TOhtml-wrap-text</code> <a name="g%3Ahtml_pre_wrap"></a><code class="help-tag">g:html_pre_wrap</code>
Default: Current <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> setting.
When 0, if <a href="/neovim-docs-web/en/syntax#g%3Ahtml_no_pre">g:html_no_pre</a> is 0 or unset, the text in the generated HTML does
not wrap at the edge of the browser window.
When 1, if <a href="/neovim-docs-web/en/syntax#g%3Ahtml_use_css">g:html_use_css</a> is 1, the CSS 2.0 "white-space:pre-wrap" value is
used, causing the text to wrap at whitespace at the edge of the browser
window.
Explicitly enable text wrapping:<pre>:let g:html_pre_wrap = 1</pre>
Explicitly disable wrapping:<pre>:let g:html_pre_wrap = 0</pre>
Go back to default, determine wrapping from <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> setting:<pre>:unlet g:html_pre_wrap</pre></div>
<div class="old-help-para">							       <a name="g%3Ahtml_no_pre"></a><code class="help-tag-right">g:html_no_pre</code>
Default: 0.
When 0, buffer text in the generated HTML is surrounded by <code>&lt;pre&gt;</code>...&lt;/pre&gt;
tags. Series of whitespace is shown as in Vim without special markup, and tab
characters can be included literally (see <a href="/neovim-docs-web/en/syntax#g%3Ahtml_expand_tabs">g:html_expand_tabs</a>).
When 1 (not recommended), the <code>&lt;pre&gt;</code> tags are omitted, and a plain <code>&lt;div&gt;</code> is
used instead. Whitespace is replaced by a series of &amp;nbsp; character
references, and <code>&lt;br&gt;</code> is used to end each line. This is another way to allow
text in the generated HTML is wrap (see <a href="/neovim-docs-web/en/syntax#g%3Ahtml_pre_wrap">g:html_pre_wrap</a>) which also works in
old browsers, but may cause noticeable differences between Vim's display and
the rendered page generated by 2html.vim.
<pre>:let g:html_no_pre = 1</pre></div>
<div class="old-help-para">							       <a name="g%3Ahtml_no_doc"></a><code class="help-tag-right">g:html_no_doc</code>
Default: 0.
When 1 it doesn't generate a full HTML document with a DOCTYPE, <code>&lt;head&gt;</code>,
<code>&lt;body&gt;</code>, etc. If <a href="/neovim-docs-web/en/syntax#g%3Ahtml_use_css">g:html_use_css</a> is enabled (the default) you'll have to
define the CSS manually. The <a href="/neovim-docs-web/en/syntax#g%3Ahtml_dynamic_folds">g:html_dynamic_folds</a> and <a href="/neovim-docs-web/en/syntax#g%3Ahtml_line_ids">g:html_line_ids</a>
settings (off by default) also insert some JavaScript.</div>
<div class="old-help-para">							     <a name="g%3Ahtml_no_links"></a><code class="help-tag-right">g:html_no_links</code>
Default: 0.
Don't generate <code>&lt;a&gt;</code> tags for text that looks like an URL.</div>
<div class="old-help-para">							  <a name="g%3Ahtml_no_modeline"></a><code class="help-tag-right">g:html_no_modeline</code>
Default: 0.
Don't generate a modeline disabling folding.</div>
<div class="old-help-para">							  <a name="g%3Ahtml_expand_tabs"></a><code class="help-tag-right">g:html_expand_tabs</code>
Default: 0 if <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> is 8, <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> is 0, <a href="/neovim-docs-web/en/options#'vartabstop'">'vartabstop'</a> is not in use,
	       and no fold column or line numbers occur in the generated HTML;
	 1 otherwise.
When 1, <code>&lt;Tab&gt;</code> characters in the buffer text are replaced with an appropriate
number of space characters, or &amp;nbsp; references if <a href="/neovim-docs-web/en/syntax#g%3Ahtml_no_pre">g:html_no_pre</a> is 1.
When 0, if <a href="/neovim-docs-web/en/syntax#g%3Ahtml_no_pre">g:html_no_pre</a> is 0 or unset, <code>&lt;Tab&gt;</code> characters in the buffer text
are included as-is in the generated HTML. This is useful for when you want to
allow copy and paste from a browser without losing the actual whitespace in
the source document. Note that this can easily break text alignment and
indentation in the HTML, unless set by default.</div>
<div class="old-help-para">Force <a href="/neovim-docs-web/en/syntax#2html.vim">2html.vim</a> to keep <code>&lt;Tab&gt;</code> characters:<pre>:let g:html_expand_tabs = 0</pre></div>
<div class="old-help-para">Force tabs to be expanded:<pre>:let g:html_expand_tabs = 1</pre></div>
<div class="old-help-para">				    <a name="TOhtml-encoding-detect"></a><code class="help-tag-right">TOhtml-encoding-detect</code> <a name="TOhtml-encoding"></a><code class="help-tag">TOhtml-encoding</code>
It is highly recommended to set your desired encoding with
<a href="/neovim-docs-web/en/syntax#g%3Ahtml_use_encoding">g:html_use_encoding</a> for any content which will be placed on a web server.</div>
<div class="old-help-para">If you do not specify an encoding, <a href="/neovim-docs-web/en/syntax#2html.vim">2html.vim</a> uses the preferred IANA name
for the current value of <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> if set, or <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> if not.
<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is always used for certain <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> values. <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> will be
set to match the chosen document encoding.</div>
<div class="old-help-para">Automatic detection works for the encodings mentioned specifically by name in
<a href="/neovim-docs-web/en/mbyte#encoding-names">encoding-names</a>, but TOhtml will only automatically use those encodings with
wide browser support. However, you can override this to support specific
encodings that may not be automatically detected by default (see options
below). See <a href="https://www.iana.org/assignments/character-sets">https://www.iana.org/assignments/character-sets</a> for the IANA names.</div>
<div class="old-help-para">Note: By default all Unicode encodings are converted to UTF-8 with no BOM in
the generated HTML, as recommended by W3C:</div>
<div class="old-help-para">	<a href="https://www.w3.org/International/questions/qa-choosing-encodings">https://www.w3.org/International/questions/qa-choosing-encodings</a>
	<a href="https://www.w3.org/International/questions/qa-byte-order-mark">https://www.w3.org/International/questions/qa-byte-order-mark</a></div>
<div class="old-help-para">							 <a name="g%3Ahtml_use_encoding"></a><code class="help-tag-right">g:html_use_encoding</code>
Default: none, uses IANA name for current <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> as above.
To overrule all automatic charset detection, set g:html_use_encoding to the
name of the charset to be used. It is recommended to set this variable to
something widely supported, like UTF-8, for anything you will be hosting on a
webserver:<pre>:let g:html_use_encoding = "UTF-8"</pre>
You can also use this option to omit the line that specifies the charset
entirely, by setting g:html_use_encoding to an empty string (NOT recommended):<pre>:let g:html_use_encoding = ""</pre>
To go back to the automatic mechanism, delete the <a href="/neovim-docs-web/en/syntax#g%3Ahtml_use_encoding">g:html_use_encoding</a>
variable:<pre>:unlet g:html_use_encoding</pre></div>
<div class="old-help-para">						    <a name="g%3Ahtml_encoding_override"></a><code class="help-tag-right">g:html_encoding_override</code>
Default: none, autoload/tohtml.vim contains default conversions for encodings
		mentioned by name at <a href="/neovim-docs-web/en/mbyte#encoding-names">encoding-names</a>.
This option allows <a href="/neovim-docs-web/en/syntax#2html.vim">2html.vim</a> to detect the correct <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> when you
specify an encoding with <a href="/neovim-docs-web/en/syntax#g%3Ahtml_use_encoding">g:html_use_encoding</a> which is not in the default
list of conversions.</div>
<div class="old-help-para">This is a dictionary of charset-encoding pairs that will replace existing
pairs automatically detected by TOhtml, or supplement with new pairs.</div>
<div class="old-help-para">Detect the HTML charset "windows-1252" as the encoding "8bit-cp1252":<pre>:let g:html_encoding_override = {'windows-1252': '8bit-cp1252'}</pre></div>
<div class="old-help-para">						     <a name="g%3Ahtml_charset_override"></a><code class="help-tag-right">g:html_charset_override</code>
Default: none, autoload/tohtml.vim contains default conversions for encodings
		mentioned by name at <a href="/neovim-docs-web/en/mbyte#encoding-names">encoding-names</a> and which have wide
		browser support.
This option allows <a href="/neovim-docs-web/en/syntax#2html.vim">2html.vim</a> to detect the HTML charset for any
<a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> or <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> which is not detected automatically. You can also
use it to override specific existing encoding-charset pairs. For example,
TOhtml will by default use UTF-8 for all Unicode/UCS encodings. To use UTF-16
and UTF-32 instead, use:<pre>:let g:html_charset_override = {'ucs-4': 'UTF-32', 'utf-16': 'UTF-16'}</pre>
Note that documents encoded in either UTF-32 or UTF-16 have known
compatibility problems with some major browsers.</div>
<div class="old-help-para">								 <a name="g%3Ahtml_font"></a><code class="help-tag-right">g:html_font</code>
Default: "monospace"
You can specify the font or fonts used in the converted document using
g:html_font. If this option is set to a string, then the value will be
surrounded with single quotes. If this option is set to a list then each list
item is surrounded by single quotes and the list is joined with commas. Either
way, "monospace" is added as the fallback generic family name and the entire
result used as the font family (using CSS) or font face (if not using CSS).
Examples:<pre>" font-family: 'Consolas', monospace;
:let g:html_font = "Consolas"

" font-family: 'DejaVu Sans Mono', 'Consolas', monospace;
:let g:html_font = ["DejaVu Sans Mono", "Consolas"]</pre></div>
<div class="old-help-para">			<a name="convert-to-XML"></a><code class="help-tag-right">convert-to-XML</code> <a name="convert-to-XHTML"></a><code class="help-tag">convert-to-XHTML</code> <a name="g%3Ahtml_use_xhtml"></a><code class="help-tag">g:html_use_xhtml</code>
Default: 0.
When 0, generate standard HTML 4.01 (strict when possible).
When 1, generate XHTML 1.0 instead (XML compliant HTML).
<pre>:let g:html_use_xhtml = 1</pre></div>
<div class="old-help-para"><h2 class="help-heading">5. Syntax file remarks<span class="help-heading-tags">					<a name="%3Asyn-file-remarks"></a><span class="help-tag">:syn-file-remarks</span></span></h2></div>
<div class="old-help-para">						<a name="b%3Acurrent_syntax-variable"></a><code class="help-tag-right">b:current_syntax-variable</code>
Vim stores the name of the syntax that has been loaded in the
"b:current_syntax" variable.  You can use this if you want to load other
settings, depending on which syntax is active.	Example:<pre>:au BufReadPost * if b:current_syntax == "csh"
:au BufReadPost *   do-some-things
:au BufReadPost * endif</pre>
<h3 class="help-heading">ABEL<span class="help-heading-tags">						<a name="abel.vim"></a><span class="help-tag">abel.vim</span> <a name="ft-abel-syntax"></a><span class="help-tag">ft-abel-syntax</span></span></h3></div>
<div class="old-help-para">ABEL highlighting provides some user-defined options.  To enable them, assign
any value to the respective variable.  Example:<pre>:let abel_obsolete_ok=1</pre>
To disable them use ":unlet".  Example:<pre>:unlet abel_obsolete_ok</pre>
<div class="help-column_heading">Variable			Highlight</div>abel_obsolete_ok		obsolete keywords are statements, not errors
abel_cpp_comments_illegal	do not interpret '//' as inline comment leader</div>
<div class="old-help-para"><a name="_ada"></a><h3 class="help-heading">ADA</h3></div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/ft_ada#ft-ada-syntax">ft-ada-syntax</a></div>
<div class="old-help-para"><h3 class="help-heading">ANT<span class="help-heading-tags">						<a name="ant.vim"></a><span class="help-tag">ant.vim</span> <a name="ft-ant-syntax"></a><span class="help-tag">ft-ant-syntax</span></span></h3></div>
<div class="old-help-para">The ant syntax file provides syntax highlighting for javascript and python
by default.  Syntax highlighting for other script languages can be installed
by the function AntSyntaxScript(), which takes the tag name as first argument
and the script syntax file name as second argument.  Example:<pre>:call AntSyntaxScript('perl', 'perl.vim')</pre>
will install syntax perl highlighting for the following ant code<pre>&lt;script language = 'perl'&gt;&lt;![CDATA[
    # everything inside is highlighted as perl
]]&gt;&lt;/script&gt;</pre>
See <a href="/neovim-docs-web/en/syntax#mysyntaxfile-add">mysyntaxfile-add</a> for installing script languages permanently.</div>
<div class="old-help-para"><h3 class="help-heading">APACHE<span class="help-heading-tags">						<a name="apache.vim"></a><span class="help-tag">apache.vim</span> <a name="ft-apache-syntax"></a><span class="help-tag">ft-apache-syntax</span></span></h3></div>
<div class="old-help-para">The apache syntax file provides syntax highlighting for Apache HTTP server
version 2.2.3.</div>
<div class="old-help-para">		<a name="asm.vim"></a><code class="help-tag-right">asm.vim</code> <a name="asmh8300.vim"></a><code class="help-tag">asmh8300.vim</code> <a name="nasm.vim"></a><code class="help-tag">nasm.vim</code> <a name="masm.vim"></a><code class="help-tag">masm.vim</code> <a name="asm68k"></a><code class="help-tag">asm68k</code>
<h3 class="help-heading">ASSEMBLY<span class="help-heading-tags">	<a name="ft-asm-syntax"></a><span class="help-tag">ft-asm-syntax</span> <a name="ft-asmh8300-syntax"></a><span class="help-tag">ft-asmh8300-syntax</span> <a name="ft-nasm-syntax"></a><span class="help-tag">ft-nasm-syntax</span></span></h3>		<a name="ft-masm-syntax"></a><code class="help-tag-right">ft-masm-syntax</code> <a name="ft-asm68k-syntax"></a><code class="help-tag">ft-asm68k-syntax</code> <a name="fasm.vim"></a><code class="help-tag">fasm.vim</code></div>
<div class="old-help-para">Files matching "*.i" could be Progress or Assembly.  If the automatic detection
doesn't work for you, or you don't edit Progress at all, use this in your
startup vimrc:<pre>:let filetype_i = "asm"</pre>
Replace "asm" with the type of assembly you use.</div>
<div class="old-help-para">There are many types of assembly languages that all use the same file name
extensions.  Therefore you will have to select the type yourself, or add a
line in the assembly file that Vim will recognize.  Currently these syntax
files are included:
	asm		GNU assembly (the default)
	asm68k		Motorola 680x0 assembly
	asmh8300	Hitachi H-8300 version of GNU assembly
	ia64		Intel Itanium 64
	fasm		Flat assembly (<a href="https://flatassembler.net">https://flatassembler.net</a>)
	masm		Microsoft assembly (probably works for any 80x86)
	nasm		Netwide assembly
	tasm		Turbo Assembly (with opcodes 80x86 up to Pentium, and
			MMX)
	pic		PIC assembly (currently for PIC16F84)</div>
<div class="old-help-para">The most flexible is to add a line in your assembly file containing:<pre>asmsyntax=nasm</pre>
Replace "nasm" with the name of the real assembly syntax.  This line must be
one of the first five lines in the file.  No non-white text must be
immediately before or after this text.  Note that specifying asmsyntax=foo is
equivalent to setting ft=foo in a <a href="/neovim-docs-web/en/options#modeline">modeline</a>, and that in case of a conflict
between the two settings the one from the modeline will take precedence (in
particular, if you have ft=asm in the modeline, you will get the GNU syntax
highlighting regardless of what is specified as asmsyntax).</div>
<div class="old-help-para">The syntax type can always be overruled for a specific buffer by setting the
b:asmsyntax variable:<pre>:let b:asmsyntax = "nasm"</pre>
If b:asmsyntax is not set, either automatically or by hand, then the value of
the global variable asmsyntax is used.	This can be seen as a default assembly
language:<pre>:let asmsyntax = "nasm"</pre>
As a last resort, if nothing is defined, the "asm" syntax is used.</div>
<div class="old-help-para"><div class="help-column_heading">Netwide assembler (nasm.vim) optional highlighting</div></div>
<div class="old-help-para">To enable a feature:<pre>:let   {variable}=1|set syntax=nasm</pre>
To disable a feature:<pre>:unlet {variable}  |set syntax=nasm</pre>
<div class="help-column_heading">Variable		Highlight</div>nasm_loose_syntax	unofficial parser allowed syntax not as Error
			  (parser dependent; not recommended)
nasm_ctx_outside_macro	contexts outside macro not as Error
nasm_no_warn		potentially risky syntax not as ToDo</div>
<div class="old-help-para">ASPPERL and ASPVBS			<a name="ft-aspperl-syntax"></a><code class="help-tag-right">ft-aspperl-syntax</code> <a name="ft-aspvbs-syntax"></a><code class="help-tag">ft-aspvbs-syntax</code></div>
<div class="old-help-para">.asp and.asa files could be either Perl or Visual Basic script.  Since it's
hard to detect this you can set two global variables to tell Vim what you are
using.	For Perl script use:<pre>:let g:filetype_asa = "aspperl"
:let g:filetype_asp = "aspperl"</pre>
For Visual Basic use:<pre>:let g:filetype_asa = "aspvbs"
:let g:filetype_asp = "aspvbs"</pre>
<h3 class="help-heading">BAAN<span class="help-heading-tags">						    <a name="baan.vim"></a><span class="help-tag">baan.vim</span> <a name="baan-syntax"></a><span class="help-tag">baan-syntax</span></span></h3></div>
<div class="old-help-para">The baan.vim gives syntax support for BaanC of release BaanIV up to SSA ERP LN
for both 3 GL and 4 GL programming. Large number of standard defines/constants
are supported.</div>
<div class="old-help-para">Some special violation of coding standards will be signalled when one specify
in ones <a href="/neovim-docs-web/en/starting#init.vim">init.vim</a>:<pre>let baan_code_stds=1</pre>
<a name="baan-folding"></a><code class="help-tag">baan-folding</code></div>
<div class="old-help-para">Syntax folding can be enabled at various levels through the variables
mentioned below (Set those in your <a href="/neovim-docs-web/en/starting#init.vim">init.vim</a>). The more complex folding on
source blocks and SQL can be CPU intensive.</div>
<div class="old-help-para">To allow any folding and enable folding at function level use:<pre>let baan_fold=1</pre>
Folding can be enabled at source block level as if, while, for ,... The
indentation preceding the begin/end keywords has to match (spaces are not
considered equal to a tab).<pre>let baan_fold_block=1</pre>
Folding can be enabled for embedded SQL blocks as SELECT, SELECTDO,
SELECTEMPTY, ... The indentation preceding the begin/end keywords has to
match (spaces are not considered equal to a tab).<pre>let baan_fold_sql=1</pre>
Note: Block folding can result in many small folds. It is suggested to <a href="/neovim-docs-web/en/options#%3Aset">:set</a>
the options <a href="/neovim-docs-web/en/options#'foldminlines'">'foldminlines'</a> and <a href="/neovim-docs-web/en/options#'foldnestmax'">'foldnestmax'</a> in <a href="/neovim-docs-web/en/starting#init.vim">init.vim</a> or use <a href="/neovim-docs-web/en/options#%3Asetlocal">:setlocal</a>
in .../after/syntax/baan.vim (see <a href="/neovim-docs-web/en/options#after-directory">after-directory</a>). Eg:<pre>set foldminlines=5
set foldnestmax=6</pre>
<h3 class="help-heading">BASIC<span class="help-heading-tags">			<a name="basic.vim"></a><span class="help-tag">basic.vim</span> <a name="vb.vim"></a><span class="help-tag">vb.vim</span> <a name="ft-basic-syntax"></a><span class="help-tag">ft-basic-syntax</span> <a name="ft-vb-syntax"></a><span class="help-tag">ft-vb-syntax</span></span></h3></div>
<div class="old-help-para">Both Visual Basic and "normal" BASIC use the extension ".bas".	To detect
which one should be used, Vim checks for the string "VB_Name" in the first
five lines of the file.  If it is not found, filetype will be "basic",
otherwise "vb".  Files with the ".frm" extension will always be seen as Visual
Basic.</div>
<div class="old-help-para">If the automatic detection doesn't work for you or you only edit, for
example, FreeBASIC files, use this in your startup vimrc:<pre>:let filetype_bas = "freebasic"</pre>
C							<a name="c.vim"></a><code class="help-tag-right">c.vim</code> <a name="ft-c-syntax"></a><code class="help-tag">ft-c-syntax</code></div>
<div class="old-help-para">A few things in C highlighting are optional.  To enable them assign any value
(including zero) to the respective variable.  Example:<pre>:let c_comment_strings = 1
:let c_no_bracket_error = 0</pre>
To disable them use <code>:unlet</code>.  Example:<pre>:unlet c_comment_strings</pre>
Setting the value to zero doesn't work!</div>
<div class="old-help-para">An alternative is to switch to the C++ highlighting:<pre>:set filetype=cpp</pre>
<div class="help-column_heading">Variable		Highlight</div><a name="c_gnu"></a><code class="help-tag">c_gnu</code>  			GNU gcc specific items
<a name="c_comment_strings"></a><code class="help-tag">c_comment_strings</code>  	strings and numbers inside a comment
<a name="c_space_errors"></a><code class="help-tag">c_space_errors</code>  		trailing white space and spaces before a <code>&lt;Tab&gt;</code>
<a name="c_no_trail_space_error"></a><code class="help-tag">c_no_trail_space_error</code>  	 ... but no trailing spaces
<a name="c_no_tab_space_error"></a><code class="help-tag">c_no_tab_space_error</code>  	 ... but no spaces before a <code>&lt;Tab&gt;</code>
<a name="c_no_bracket_error"></a><code class="help-tag">c_no_bracket_error</code>  	don't highlight {}; inside [] as errors
<a name="c_no_curly_error"></a><code class="help-tag">c_no_curly_error</code>  	don't highlight {}; inside [] and () as errors;
				except { and } in first column
				Default is to highlight them, otherwise you
				can't spot a missing ")".
<a name="c_curly_error"></a><code class="help-tag">c_curly_error</code>  		highlight a missing } by finding all pairs; this
			forces syncing from the start of the file, can be slow
<a name="c_no_ansi"></a><code class="help-tag">c_no_ansi</code>  		don't do standard ANSI types and constants
<a name="c_ansi_typedefs"></a><code class="help-tag">c_ansi_typedefs</code>  		 ... but do standard ANSI types
<a name="c_ansi_constants"></a><code class="help-tag">c_ansi_constants</code>  	 ... but do standard ANSI constants
<a name="c_no_utf"></a><code class="help-tag">c_no_utf</code>  		don't highlight \u and \U in strings
<a name="c_syntax_for_h"></a><code class="help-tag">c_syntax_for_h</code>  		for.h files use C syntax instead of C++ and use objc
			syntax instead of objcpp
<a name="c_no_if0"></a><code class="help-tag">c_no_if0</code>  		don't highlight "#if 0" blocks as comments
<a name="c_no_cformat"></a><code class="help-tag">c_no_cformat</code>  		don't highlight %-formats in strings
<a name="c_no_c99"></a><code class="help-tag">c_no_c99</code>  		don't highlight C99 standard items
<a name="c_no_c11"></a><code class="help-tag">c_no_c11</code>  		don't highlight C11 standard items
<a name="c_no_bsd"></a><code class="help-tag">c_no_bsd</code>  		don't highlight BSD specific types</div>
<div class="old-help-para">When <a href="/neovim-docs-web/en/options#'foldmethod'">'foldmethod'</a> is set to "syntax" then /*/ comments and { } blocks will
become a fold.  If you don't want comments to become a fold use:<pre>:let c_no_comment_fold = 1</pre>
"#if 0" blocks are also folded, unless:<pre>:let c_no_if0_fold = 1</pre>
If you notice highlighting errors while scrolling backwards, which are fixed
when redrawing with <code>CTRL-L</code>, try setting the "c_minlines" internal variable
to a larger number:<pre>:let c_minlines = 100</pre>
This will make the syntax synchronization start 100 lines before the first
displayed line.  The default value is 50 (15 when c_no_if0 is set).  The
disadvantage of using a larger number is that redrawing can become slow.</div>
<div class="old-help-para">When using the "#if 0" / "#endif" comment highlighting, notice that this only
works when the "#if 0" is within "c_minlines" from the top of the window.  If
you have a long "#if 0" construct it will not be highlighted correctly.</div>
<div class="old-help-para">To match extra items in comments, use the cCommentGroup cluster.
Example:<pre>:au Syntax c call MyCadd()
:function MyCadd()
:  syn keyword cMyItem contained Ni
:  syn cluster cCommentGroup add=cMyItem
:  hi link cMyItem Title
:endfun</pre>
ANSI constants will be highlighted with the "cConstant" group.	This includes
"NULL", "SIG_IGN" and others.  But not "TRUE", for example, because this is
not in the ANSI standard.  If you find this confusing, remove the cConstant
highlighting:<pre>:hi link cConstant NONE</pre>
If you see '<code>{' and '}</code>' highlighted as an error where they are OK, reset the
highlighting for cErrInParen and cErrInBracket.</div>
<div class="old-help-para">If you want to use folding in your C files, you can add these lines in a file
in the "after" directory in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  For Unix this would be
~/.config/nvim/after/syntax/c.vim.<pre>syn sync fromstart
set foldmethod=syntax</pre>
<h3 class="help-heading">CH<span class="help-heading-tags">						<a name="ch.vim"></a><span class="help-tag">ch.vim</span> <a name="ft-ch-syntax"></a><span class="help-tag">ft-ch-syntax</span></span></h3></div>
<div class="old-help-para">C/C++ interpreter.  Ch has similar syntax highlighting to C and builds upon
the C syntax file.  See <a href="/neovim-docs-web/en/syntax#c.vim">c.vim</a> for all the settings that are available for C.</div>
<div class="old-help-para">By setting a variable you can tell Vim to use Ch syntax for.h files, instead
of C or C++:<pre>:let ch_syntax_for_h = 1</pre>
<h3 class="help-heading">CHILL<span class="help-heading-tags">						<a name="chill.vim"></a><span class="help-tag">chill.vim</span> <a name="ft-chill-syntax"></a><span class="help-tag">ft-chill-syntax</span></span></h3></div>
<div class="old-help-para">Chill syntax highlighting is similar to C.  See <a href="/neovim-docs-web/en/syntax#c.vim">c.vim</a> for all the settings
that are available.  Additionally there is:</div>
<div class="old-help-para">chill_space_errors	like c_space_errors
chill_comment_string	like c_comment_strings
chill_minlines		like c_minlines</div>
<div class="old-help-para"><h3 class="help-heading">CHANGELOG<span class="help-heading-tags">				<a name="changelog.vim"></a><span class="help-tag">changelog.vim</span> <a name="ft-changelog-syntax"></a><span class="help-tag">ft-changelog-syntax</span></span></h3></div>
<div class="old-help-para">ChangeLog supports highlighting spaces at the start of a line.
If you do not like this, add following line to your vimrc:<pre>let g:changelog_spacing_errors = 0</pre>
This works the next time you edit a changelog file.  You can also use
"b:changelog_spacing_errors" to set this per buffer (before loading the syntax
file).</div>
<div class="old-help-para">You can change the highlighting used, e.g., to flag the spaces as an error:<pre>:hi link ChangelogError Error</pre>
Or to avoid the highlighting:<pre>:hi link ChangelogError NONE</pre>
This works immediately.</div>
<div class="old-help-para"><h3 class="help-heading">CLOJURE<span class="help-heading-tags">							<a name="ft-clojure-syntax"></a><span class="help-tag">ft-clojure-syntax</span></span></h3></div>
<div class="old-help-para">						<a name="g%3Aclojure_syntax_keywords"></a><code class="help-tag-right">g:clojure_syntax_keywords</code></div>
<div class="old-help-para">Syntax highlighting of public vars in "clojure.core" is provided by default,
but additional symbols can be highlighted by adding them to the
<a href="/neovim-docs-web/en/syntax#g%3Aclojure_syntax_keywords">g:clojure_syntax_keywords</a> variable.  The value should be a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> of
syntax group names, each containing a <a href="/neovim-docs-web/en/eval#List">List</a> of identifiers.
<pre>let g:clojure_syntax_keywords = {
    \   'clojureMacro': ["defproject", "defcustom"],
    \   'clojureFunc': ["string/join", "string/replace"]
    \ }</pre></div>
<div class="old-help-para">Refer to the Clojure syntax script for valid syntax group names.</div>
<div class="old-help-para">There is also <a name="b%3Aclojure_syntax_keywords"></a><code class="help-tag">b:clojure_syntax_keywords</code> which is a buffer-local variant of
this variable intended for use by plugin authors to highlight symbols
dynamically.</div>
<div class="old-help-para">By setting the <a name="b%3Aclojure_syntax_without_core_keywords"></a><code class="help-tag">b:clojure_syntax_without_core_keywords</code> variable, vars from
"clojure.core" will not be highlighted by default.  This is useful for
namespaces that have set <code>(:refer-clojure :only [])</code></div>
<div class="old-help-para">							<a name="g%3Aclojure_fold"></a><code class="help-tag-right">g:clojure_fold</code></div>
<div class="old-help-para">Setting <a href="/neovim-docs-web/en/syntax#g%3Aclojure_fold">g:clojure_fold</a> to <code>1</code> will enable the folding of Clojure code.  Any
list, vector or map that extends over more than one line can be folded using
the standard Vim <a href="/neovim-docs-web/en/fold#fold-commands">fold-commands</a>.</div>
<div class="old-help-para">						<a name="g%3Aclojure_discard_macro"></a><code class="help-tag-right">g:clojure_discard_macro</code></div>
<div class="old-help-para">Set this variable to <code>1</code> to enable basic highlighting of Clojure's "discard
reader macro".
<pre>#_(defn foo [x]
    (println x))</pre></div>
<div class="old-help-para">Note that this option will not correctly highlight stacked discard macros
(e.g. <code>#_#_</code>).</div>
<div class="old-help-para"><h3 class="help-heading">COBOL<span class="help-heading-tags">						<a name="cobol.vim"></a><span class="help-tag">cobol.vim</span> <a name="ft-cobol-syntax"></a><span class="help-tag">ft-cobol-syntax</span></span></h3></div>
<div class="old-help-para">COBOL highlighting has different needs for legacy code than it does for fresh
development.  This is due to differences in what is being done (maintenance
versus development) and other factors.	To enable legacy code highlighting,
add this line to your vimrc:<pre>:let cobol_legacy_code = 1</pre>
To disable it again, use this:<pre>:unlet cobol_legacy_code</pre>
<h3 class="help-heading">COLD FUSION<span class="help-heading-tags">			<a name="coldfusion.vim"></a><span class="help-tag">coldfusion.vim</span> <a name="ft-coldfusion-syntax"></a><span class="help-tag">ft-coldfusion-syntax</span></span></h3></div>
<div class="old-help-para">The ColdFusion has its own version of HTML comments.  To turn on ColdFusion
comment highlighting, add the following line to your startup file:<pre>:let html_wrong_comments = 1</pre>
The ColdFusion syntax file is based on the HTML syntax file.</div>
<div class="old-help-para"><h3 class="help-heading">CPP<span class="help-heading-tags">						<a name="cpp.vim"></a><span class="help-tag">cpp.vim</span> <a name="ft-cpp-syntax"></a><span class="help-tag">ft-cpp-syntax</span></span></h3></div>
<div class="old-help-para">Most things are the same as <a href="/neovim-docs-web/en/syntax#ft-c-syntax">ft-c-syntax</a>.</div>
<div class="old-help-para"><div class="help-column_heading">Variable		Highlight</div>cpp_no_cpp11		don't highlight C++11 standard items
cpp_no_cpp14		don't highlight C++14 standard items
cpp_no_cpp17		don't highlight C++17 standard items
cpp_no_cpp20		don't highlight C++20 standard items</div>
<div class="old-help-para"><h3 class="help-heading">CSH<span class="help-heading-tags">						<a name="csh.vim"></a><span class="help-tag">csh.vim</span> <a name="ft-csh-syntax"></a><span class="help-tag">ft-csh-syntax</span></span></h3></div>
<div class="old-help-para">This covers the shell named "csh".  Note that on some systems tcsh is actually
used.</div>
<div class="old-help-para">Detecting whether a file is csh or tcsh is notoriously hard.  Some systems
symlink /bin/csh to /bin/tcsh, making it almost impossible to distinguish
between csh and tcsh.  In case VIM guesses wrong you can set the
"filetype_csh" variable.  For using csh:  <a name="g%3Afiletype_csh"></a><code class="help-tag">g:filetype_csh</code>
<pre>:let g:filetype_csh = "csh"</pre>
For using tcsh:<pre>:let g:filetype_csh = "tcsh"</pre>
Any script with a tcsh extension or a standard tcsh filename (.tcshrc,
tcsh.tcshrc, tcsh.login) will have filetype tcsh.  All other tcsh/csh scripts
will be classified as tcsh, UNLESS the "filetype_csh" variable exists.  If the
"filetype_csh" variable exists, the filetype will be set to the value of the
variable.</div>
<div class="old-help-para"><h3 class="help-heading">CYNLIB<span class="help-heading-tags">						<a name="cynlib.vim"></a><span class="help-tag">cynlib.vim</span> <a name="ft-cynlib-syntax"></a><span class="help-tag">ft-cynlib-syntax</span></span></h3></div>
<div class="old-help-para">Cynlib files are C++ files that use the Cynlib class library to enable
hardware modelling and simulation using C++.  Typically Cynlib files have a .cc
or a .cpp extension, which makes it very difficult to distinguish them from a
normal C++ file.  Thus, to enable Cynlib highlighting for .cc files, add this
line to your vimrc file:<pre>:let cynlib_cyntax_for_cc=1</pre>
Similarly for cpp files (this extension is only usually used in Windows)<pre>:let cynlib_cyntax_for_cpp=1</pre>
To disable these again, use this:<pre>:unlet cynlib_cyntax_for_cc
:unlet cynlib_cyntax_for_cpp</pre></div>
<div class="old-help-para"><h3 class="help-heading">CWEB<span class="help-heading-tags">						<a name="cweb.vim"></a><span class="help-tag">cweb.vim</span> <a name="ft-cweb-syntax"></a><span class="help-tag">ft-cweb-syntax</span></span></h3></div>
<div class="old-help-para">Files matching "*.w" could be Progress or cweb.  If the automatic detection
doesn't work for you, or you don't edit Progress at all, use this in your
startup vimrc:<pre>:let filetype_w = "cweb"</pre>
<h3 class="help-heading">DART<span class="help-heading-tags">						<a name="dart.vim"></a><span class="help-tag">dart.vim</span> <a name="ft-dart-syntax"></a><span class="help-tag">ft-dart-syntax</span></span></h3></div>
<div class="old-help-para">Dart is an object-oriented, typed, class defined, garbage collected language
used for developing mobile, desktop, web, and back-end applications.  Dart uses
a C-like syntax derived from C, Java, and JavaScript, with features adopted
from Smalltalk, Python, Ruby, and others.</div>
<div class="old-help-para">More information about the language and its development environment at the
official Dart language website at <a href="https://dart.dev">https://dart.dev</a></div>
<div class="old-help-para">dart.vim syntax detects and highlights Dart statements, reserved words,
type declarations, storage classes, conditionals, loops, interpolated values,
and comments.  There is no support idioms from Flutter or any other Dart
framework.</div>
<div class="old-help-para">Changes, fixes?  Submit an issue or pull request via:</div>
<div class="old-help-para"><a href="https://github.com/pr3d4t0r/dart-vim-syntax/">https://github.com/pr3d4t0r/dart-vim-syntax/</a></div>
<div class="old-help-para"><h3 class="help-heading">DESKTOP<span class="help-heading-tags">					   <a name="desktop.vim"></a><span class="help-tag">desktop.vim</span> <a name="ft-desktop-syntax"></a><span class="help-tag">ft-desktop-syntax</span></span></h3></div>
<div class="old-help-para">Primary goal of this syntax file is to highlight .desktop and .directory files
according to freedesktop.org standard:
<a href="https://specifications.freedesktop.org/desktop-entry-spec/latest/">https://specifications.freedesktop.org/desktop-entry-spec/latest/</a>
To highlight nonstandard extensions that does not begin with X-, set<pre>let g:desktop_enable_nonstd = 1</pre>
Note that this may cause wrong highlight.
To highlight KDE-reserved features, set<pre>let g:desktop_enable_kde = 1</pre>
g:desktop_enable_kde follows g:desktop_enable_nonstd if not supplied</div>
<div class="old-help-para"><h3 class="help-heading">DIFF<span class="help-heading-tags">							<a name="diff.vim"></a><span class="help-tag">diff.vim</span></span></h3></div>
<div class="old-help-para">The diff highlighting normally finds translated headers.  This can be slow if
there are very long lines in the file.  To disable translations:<pre>:let diff_translations = 0</pre>
Also see <a href="/neovim-docs-web/en/diff#diff-slow">diff-slow</a>.</div>
<div class="old-help-para"><h3 class="help-heading">DIRCOLORS<span class="help-heading-tags">			       <a name="dircolors.vim"></a><span class="help-tag">dircolors.vim</span> <a name="ft-dircolors-syntax"></a><span class="help-tag">ft-dircolors-syntax</span></span></h3></div>
<div class="old-help-para">The dircolors utility highlighting definition has one option.  It exists to
provide compatibility with the Slackware GNU/Linux distributions version of
the command.  It adds a few keywords that are generally ignored by most
versions.  On Slackware systems, however, the utility accepts the keywords and
uses them for processing.  To enable the Slackware keywords add the following
line to your startup file:<pre>let dircolors_is_slackware = 1</pre>
<h3 class="help-heading">DOCBOOK<span class="help-heading-tags">					<a name="docbk.vim"></a><span class="help-tag">docbk.vim</span> <a name="ft-docbk-syntax"></a><span class="help-tag">ft-docbk-syntax</span> <a name="docbook"></a><span class="help-tag">docbook</span></span></h3><h3 class="help-heading">DOCBOOK XML<span class="help-heading-tags">				<a name="docbkxml.vim"></a><span class="help-tag">docbkxml.vim</span> <a name="ft-docbkxml-syntax"></a><span class="help-tag">ft-docbkxml-syntax</span></span></h3><h3 class="help-heading">DOCBOOK SGML<span class="help-heading-tags">				<a name="docbksgml.vim"></a><span class="help-tag">docbksgml.vim</span> <a name="ft-docbksgml-syntax"></a><span class="help-tag">ft-docbksgml-syntax</span></span></h3></div>
<div class="old-help-para">There are two types of DocBook files: SGML and XML.  To specify what type you
are using the "b:docbk_type" variable should be set.  Vim does this for you
automatically if it can recognize the type.  When Vim can't guess it the type
defaults to XML.
You can set the type manually:<pre>:let docbk_type = "sgml"</pre>
or:<pre>:let docbk_type = "xml"</pre>
You need to do this before loading the syntax file, which is complicated.
Simpler is setting the filetype to "docbkxml" or "docbksgml":<pre>:set filetype=docbksgml</pre>
or:<pre>:set filetype=docbkxml</pre>
You can specify the DocBook version:<pre>:let docbk_ver = 3</pre>
When not set 4 is used.</div>
<div class="old-help-para"><h3 class="help-heading">DOSBATCH<span class="help-heading-tags">				<a name="dosbatch.vim"></a><span class="help-tag">dosbatch.vim</span> <a name="ft-dosbatch-syntax"></a><span class="help-tag">ft-dosbatch-syntax</span></span></h3></div>
<div class="old-help-para">There is one option with highlighting DOS batch files.	This covers new
extensions to the Command Interpreter introduced with Windows 2000 and
is controlled by the variable dosbatch_cmdextversion.  For Windows NT
this should have the value 1, and for Windows 2000 it should be 2.
Select the version you want with the following line:<pre>:let dosbatch_cmdextversion = 1</pre>
If this variable is not defined it defaults to a value of 2 to support
Windows 2000.</div>
<div class="old-help-para">A second option covers whether.btm files should be detected as type
"dosbatch" (MS-DOS batch files) or type "btm" (4DOS batch files).  The latter
is used by default.  You may select the former with the following line:<pre>:let g:dosbatch_syntax_for_btm = 1</pre>
If this variable is undefined or zero, btm syntax is selected.</div>
<div class="old-help-para"><h3 class="help-heading">DOXYGEN<span class="help-heading-tags">						<a name="doxygen.vim"></a><span class="help-tag">doxygen.vim</span> <a name="doxygen-syntax"></a><span class="help-tag">doxygen-syntax</span></span></h3></div>
<div class="old-help-para">Doxygen generates code documentation using a special documentation format
(similar to Javadoc).  This syntax script adds doxygen highlighting to c, cpp,
idl and php files, and should also work with java.</div>
<div class="old-help-para">There are a few of ways to turn on doxygen formatting. It can be done
explicitly or in a modeline by appending '.doxygen' to the syntax of the file.
Example:<pre>:set syntax=c.doxygen</pre>
or<pre>// vim:syntax=c.doxygen</pre>
It can also be done automatically for C, C++, C#, IDL and PHP files by setting
the global or buffer-local variable load_doxygen_syntax.  This is done by
adding the following to your vimrc.<pre>:let g:load_doxygen_syntax=1</pre>
There are a couple of variables that have an effect on syntax highlighting,
and are to do with non-standard highlighting options.</div>
<div class="old-help-para"><div class="help-column_heading">Variable			Default	Effect</div>g:doxygen_enhanced_color
g:doxygen_enhanced_colour	0	Use non-standard highlighting for
					doxygen comments.</div>
<div class="old-help-para">doxygen_my_rendering		0	Disable rendering of HTML bold, italic
					and html_my_rendering underline.</div>
<div class="old-help-para">doxygen_javadoc_autobrief	1	Set to 0 to disable javadoc autobrief
					colour highlighting.</div>
<div class="old-help-para">doxygen_end_punctuation		'[.]'	Set to regexp match for the ending
					punctuation of brief</div>
<div class="old-help-para">There are also some highlight groups worth mentioning as they can be useful in
configuration.</div>
<div class="old-help-para"><div class="help-column_heading">Highlight			Effect</div>doxygenErrorComment		The colour of an end-comment when missing
				punctuation in a code, verbatim or dot section
doxygenLinkError		The colour of an end-comment when missing the
				\endlink from a \link section.</div>
<div class="old-help-para"><h3 class="help-heading">DTD<span class="help-heading-tags">						<a name="dtd.vim"></a><span class="help-tag">dtd.vim</span> <a name="ft-dtd-syntax"></a><span class="help-tag">ft-dtd-syntax</span></span></h3></div>
<div class="old-help-para">The DTD syntax highlighting is case sensitive by default.  To disable
case-sensitive highlighting, add the following line to your startup file:<pre>:let dtd_ignore_case=1</pre>
The DTD syntax file will highlight unknown tags as errors.  If
this is annoying, it can be turned off by setting:<pre>:let dtd_no_tag_errors=1</pre>
before sourcing the dtd.vim syntax file.
Parameter entity names are highlighted in the definition using the
'Type' highlighting group and 'Comment' for punctuation and '%'.
Parameter entity instances are highlighted using the 'Constant'
highlighting group and the 'Type' highlighting group for the
delimiters % and ;.  This can be turned off by setting:<pre>:let dtd_no_param_entities=1</pre>
The DTD syntax file is also included by xml.vim to highlight included dtd's.</div>
<div class="old-help-para"><h3 class="help-heading">EIFFEL<span class="help-heading-tags">					<a name="eiffel.vim"></a><span class="help-tag">eiffel.vim</span> <a name="ft-eiffel-syntax"></a><span class="help-tag">ft-eiffel-syntax</span></span></h3></div>
<div class="old-help-para">While Eiffel is not case-sensitive, its style guidelines are, and the
syntax highlighting file encourages their use.  This also allows to
highlight class names differently.  If you want to disable case-sensitive
highlighting, add the following line to your startup file:<pre>:let eiffel_ignore_case=1</pre>
Case still matters for class names and TODO marks in comments.</div>
<div class="old-help-para">Conversely, for even stricter checks, add one of the following lines:<pre>:let eiffel_strict=1
:let eiffel_pedantic=1</pre>
Setting eiffel_strict will only catch improper capitalization for the
five predefined words "Current", "Void", "Result", "Precursor", and
"NONE", to warn against their accidental use as feature or class names.</div>
<div class="old-help-para">Setting eiffel_pedantic will enforce adherence to the Eiffel style
guidelines fairly rigorously (like arbitrary mixes of upper- and
lowercase letters as well as outdated ways to capitalize keywords).</div>
<div class="old-help-para">If you want to use the lower-case version of "Current", "Void",
"Result", and "Precursor", you can use<pre>:let eiffel_lower_case_predef=1</pre>
instead of completely turning case-sensitive highlighting off.</div>
<div class="old-help-para">Support for ISE's proposed new creation syntax that is already
experimentally handled by some compilers can be enabled by:<pre>:let eiffel_ise=1</pre>
Finally, some vendors support hexadecimal constants.  To handle them, add<pre>:let eiffel_hex_constants=1</pre>
to your startup file.</div>
<div class="old-help-para"><h3 class="help-heading">EUPHORIA<span class="help-heading-tags">	    <a name="euphoria3.vim"></a><span class="help-tag">euphoria3.vim</span> <a name="euphoria4.vim"></a><span class="help-tag">euphoria4.vim</span> <a name="ft-euphoria-syntax"></a><span class="help-tag">ft-euphoria-syntax</span></span></h3></div>
<div class="old-help-para">Two syntax highlighting files exist for Euphoria. One for Euphoria
version 3.1.1, which is the default syntax highlighting file, and one for
Euphoria version 4.0.5 or later.</div>
<div class="old-help-para">Euphoria version 3.1.1 (<a href="https://www.rapideuphoria.com/">https://www.rapideuphoria.com/</a>) is still necessary
for developing applications for the DOS platform, which Euphoria version 4
(<a href="https://www.openeuphoria.org/">https://www.openeuphoria.org/</a>) does not support.</div>
<div class="old-help-para">The following file extensions are auto-detected as Euphoria file type:</div>
	*.e, *.eu, *.ew, *.ex, *.exu, *.exw
	*.E, *.EU, *.EW, *.EX, *.EXU, *.EXW

To select syntax highlighting file for Euphoria, as well as for
auto-detecting the *.e and<div class="old-help-para">.E file extensions as Euphoria file type,
add the following line to your startup file:<pre>:let g:filetype_euphoria = "euphoria3"</pre></div>
<div class="old-help-para">	or<pre>:let g:filetype_euphoria = "euphoria4"</pre>
Elixir and Euphoria share the.ex file extension.  If the filetype is
specifically set as Euphoria with the g:filetype_euphoria variable, or the
file is determined to be Euphoria based on keywords in the file, then the
filetype will be set as Euphoria. Otherwise, the filetype will default to
Elixir.</div>
<div class="old-help-para"><h3 class="help-heading">ERLANG<span class="help-heading-tags">						<a name="erlang.vim"></a><span class="help-tag">erlang.vim</span> <a name="ft-erlang-syntax"></a><span class="help-tag">ft-erlang-syntax</span></span></h3></div>
<div class="old-help-para">Erlang is a functional programming language developed by Ericsson.  Files with
the following extensions are recognized as Erlang files: erl, hrl, yaws.</div>
<div class="old-help-para">The BIFs (built-in functions) are highlighted by default. To disable this,
put the following line in your vimrc:<pre>:let g:erlang_highlight_bifs = 0</pre>
To enable highlighting some special atoms, put this in your vimrc:<pre>:let g:erlang_highlight_special_atoms = 1</pre>
<h3 class="help-heading">ELIXIR<span class="help-heading-tags">						<a name="elixir.vim"></a><span class="help-tag">elixir.vim</span> <a name="ft-elixir-syntax"></a><span class="help-tag">ft-elixir-syntax</span></span></h3></div>
<div class="old-help-para">Elixir is a dynamic, functional language for building scalable and
maintainable applications.</div>
<div class="old-help-para">The following file extensions are auto-detected as Elixir file types:</div>
	*.ex, *.exs, *.eex, *.leex, *.lock

Elixir and Euphoria share the<div class="old-help-para">.ex file extension. If the filetype is
specifically set as Euphoria with the g:filetype_euphoria variable, or the
file is determined to be Euphoria based on keywords in the file, then the
filetype will be set as Euphoria. Otherwise, the filetype will default to
Elixir.</div>
<div class="old-help-para"><h3 class="help-heading">FLEXWIKI<span class="help-heading-tags">				<a name="flexwiki.vim"></a><span class="help-tag">flexwiki.vim</span> <a name="ft-flexwiki-syntax"></a><span class="help-tag">ft-flexwiki-syntax</span></span></h3></div>
<div class="old-help-para">FlexWiki is an ASP.NET-based wiki package available at <a href="https://www.flexwiki.com">https://www.flexwiki.com</a>
NOTE: This site currently doesn't work, on Wikipedia is mentioned that
development stopped in 2009.</div>
<div class="old-help-para">Syntax highlighting is available for the most common elements of FlexWiki
syntax. The associated ftplugin script sets some buffer-local options to make
editing FlexWiki pages more convenient. FlexWiki considers a newline as the
start of a new paragraph, so the ftplugin sets <a href="/neovim-docs-web/en/options#'tw'">'tw'</a>=0 (unlimited line length),
<a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> (wrap long lines instead of using horizontal scrolling), <a href="/neovim-docs-web/en/options#'linebreak'">'linebreak'</a>
(to wrap at a character in <a href="/neovim-docs-web/en/options#'breakat'">'breakat'</a> instead of at the last char on screen),
and so on. It also includes some keymaps that are disabled by default.</div>
<div class="old-help-para">If you want to enable the keymaps that make "j" and "k" and the cursor keys
move up and down by display lines, add this to your vimrc:<pre>:let flexwiki_maps = 1</pre>
<h3 class="help-heading">FORM<span class="help-heading-tags">						<a name="form.vim"></a><span class="help-tag">form.vim</span> <a name="ft-form-syntax"></a><span class="help-tag">ft-form-syntax</span></span></h3></div>
<div class="old-help-para">The coloring scheme for syntax elements in the FORM file uses the default
modes Conditional, Number, Statement, Comment, PreProc, Type, and String,
following the language specifications in 'Symbolic Manipulation with FORM' by
J.A.M. Vermaseren, CAN, Netherlands, 1991.</div>
<div class="old-help-para">If you want to include your own changes to the default colors, you have to
redefine the following syntax groups:</div>
<div class="old-help-para"><div class="help-li" style=""> formConditional
</div><div class="help-li" style=""> formNumber
</div><div class="help-li" style=""> formStatement
</div><div class="help-li" style=""> formHeaderStatement
</div><div class="help-li" style=""> formComment
</div><div class="help-li" style=""> formPreProc
</div><div class="help-li" style=""> formDirective
</div><div class="help-li" style=""> formType
</div><div class="help-li" style=""> formString
</div></div>
<div class="old-help-para">Note that the form.vim syntax file implements FORM preprocessor commands and
directives per default in the same syntax group.</div>
<div class="old-help-para">A predefined enhanced color mode for FORM is available to distinguish between
header statements and statements in the body of a FORM program.  To activate
this mode define the following variable in your vimrc file<pre>:let form_enhanced_color=1</pre>
The enhanced mode also takes advantage of additional color features for a dark
gvim display.  Here, statements are colored LightYellow instead of Yellow, and
conditionals are LightBlue for better distinction.</div>
<div class="old-help-para">Both Visual Basic and FORM use the extension ".frm".  To detect which one
should be used, Vim checks for the string "VB_Name" in the first five lines of
the file.  If it is found, filetype will be "vb", otherwise "form".</div>
<div class="old-help-para">If the automatic detection doesn't work for you or you only edit, for
example, FORM files, use this in your startup vimrc:<pre>:let filetype_frm = "form"</pre>
<h3 class="help-heading">FORTH<span class="help-heading-tags">						<a name="forth.vim"></a><span class="help-tag">forth.vim</span> <a name="ft-forth-syntax"></a><span class="help-tag">ft-forth-syntax</span></span></h3></div>
<div class="old-help-para">Files matching "*.fs" could be F# or Forth.  If the automatic detection
doesn't work for you, or you don't edit F# at all, use this in your
startup vimrc:<pre>:let filetype_fs = "forth"</pre>
<h3 class="help-heading">FORTRAN<span class="help-heading-tags">					<a name="fortran.vim"></a><span class="help-tag">fortran.vim</span> <a name="ft-fortran-syntax"></a><span class="help-tag">ft-fortran-syntax</span></span></h3></div>
<div class="old-help-para"><div class="help-column_heading">Default highlighting and dialect</div>Highlighting appropriate for Fortran 2008 is used by default.  This choice
should be appropriate for most users most of the time because Fortran 2008 is
almost a superset of previous versions (Fortran 2003, 95, 90, and 77).</div>
<div class="old-help-para"><div class="help-column_heading">Fortran source code form</div>Fortran code can be in either fixed or free source form.  Note that the
syntax highlighting will not be correct if the form is incorrectly set.</div>
<div class="old-help-para">When you create a new fortran file, the syntax script assumes fixed source
form.  If you always use free source form, then<pre>:let fortran_free_source=1</pre>
in your vimrc prior to the :syntax on command.  If you always use fixed
source form, then<pre>:let fortran_fixed_source=1</pre>
in your vimrc prior to the :syntax on command.</div>
<div class="old-help-para">If the form of the source code depends, in a non-standard way, upon the file
extension, then it is most convenient to set fortran_free_source in a ftplugin
file.  For more information on ftplugin files, see <a href="/neovim-docs-web/en/usr_41#ftplugin">ftplugin</a>. Note that this
will work only if the "filetype plugin indent on" command precedes the "syntax
on" command in your .vimrc file.</div>
<div class="old-help-para">When you edit an existing fortran file, the syntax script will assume free
source form if the fortran_free_source variable has been set, and assumes
fixed source form if the fortran_fixed_source variable has been set.  If
neither of these variables have been set, the syntax script attempts to
determine which source form has been used by examining the file extension
using conventions common to the ifort, gfortran, Cray, NAG, and PathScale
compilers (.f, .for, .f77 for fixed-source, .f90, .f95, .f03, .f08 for
free-source). If none of this works, then the script examines the first five
columns of the first 500 lines of your file.  If no signs of free source form
are detected, then the file is assumed to be in fixed source form.  The
algorithm should work in the vast majority of cases.  In some cases, such as a
file that begins with 500 or more full-line comments, the script may
incorrectly decide that the fortran code is in fixed form.  If that happens,
just add a non-comment statement beginning anywhere in the first five columns
of the first twenty-five lines, save (:w) and then reload (:e!) the file.</div>
<div class="old-help-para"><div class="help-column_heading">Tabs in fortran files</div>Tabs are not recognized by the Fortran standards.  Tabs are not a good idea in
fixed format fortran source code which requires fixed column boundaries.
Therefore, tabs are marked as errors.  Nevertheless, some programmers like
using tabs.  If your fortran files contain tabs, then you should set the
variable fortran_have_tabs in your vimrc with a command such as<pre>:let fortran_have_tabs=1</pre>
placed prior to the :syntax on command.  Unfortunately, the use of tabs will
mean that the syntax file will not be able to detect incorrect margins.</div>
<div class="old-help-para"><div class="help-column_heading">Syntax folding of fortran files</div>If you wish to use foldmethod=syntax, then you must first set the variable
fortran_fold with a command such as<pre>:let fortran_fold=1</pre>
to instruct the syntax script to define fold regions for program units, that
is main programs starting with a program statement, subroutines, function
subprograms, block data subprograms, interface blocks, and modules.  If you
also set the variable fortran_fold_conditionals with a command such as<pre>:let fortran_fold_conditionals=1</pre>
then fold regions will also be defined for do loops, if blocks, and select
case constructs.  If you also set the variable
fortran_fold_multilinecomments with a command such as<pre>:let fortran_fold_multilinecomments=1</pre>
then fold regions will also be defined for three or more consecutive comment
lines.  Note that defining fold regions can be slow for large files.</div>
<div class="old-help-para">If fortran_fold, and possibly fortran_fold_conditionals and/or
fortran_fold_multilinecomments, have been set, then vim will fold your file if
you set foldmethod=syntax.  Comments or blank lines placed between two program
units are not folded because they are seen as not belonging to any program
unit.</div>
<div class="old-help-para"><div class="help-column_heading">More precise fortran syntax</div>If you set the variable fortran_more_precise with a command such as<pre>:let fortran_more_precise=1</pre>
then the syntax coloring will be more precise but slower.  In particular,
statement labels used in do, goto and arithmetic if statements will be
recognized, as will construct names at the end of a do, if, select or forall
construct.</div>
<div class="old-help-para"><div class="help-column_heading">Non-default fortran dialects</div>The syntax script supports two Fortran dialects: f08 and F. You will probably
find the default highlighting (f08) satisfactory.  A few legacy constructs
deleted or declared obsolescent in the 2008 standard are highlighted as todo
items.</div>
<div class="old-help-para">If you use F, the advantage of setting the dialect appropriately is that
other legacy features excluded from F will be highlighted as todo items and
that free source form will be assumed.</div>
<div class="old-help-para">The dialect can be selected in various ways.  If all your fortran files use
the same dialect, set the global variable fortran_dialect in your vimrc prior
to your syntax on statement.  The case-sensitive, permissible values of
fortran_dialect are "f08" or "F".  Invalid values of fortran_dialect are
ignored.</div>
<div class="old-help-para">If the dialect depends upon the file extension, then it is most convenient to
set a buffer-local variable in a ftplugin file.  For more information on
ftplugin files, see <a href="/neovim-docs-web/en/usr_41#ftplugin">ftplugin</a>.  For example, if all your fortran files with
an .f90 extension are written in the F subset, your ftplugin file should
contain the code<pre>let s:extfname = expand("%:e")
if s:extfname ==? "f90"
    let b:fortran_dialect="F"
else
    unlet! b:fortran_dialect
endif</pre>
Note that this will work only if the "filetype plugin indent on" command
precedes the "syntax on" command in your vimrc file.</div>
<div class="old-help-para">Finer control is necessary if the file extension does not uniquely identify
the dialect.  You can override the default dialect, on a file-by-file basis,
by including a comment with the directive "fortran_dialect=xx" (where xx=F or
f08) in one of the first three lines in your file.  For example, your older .f
files may be legacy code but your newer ones may be F codes, and you would
identify the latter by including in the first three lines of those files a
Fortran comment of the form<pre>! fortran_dialect=F</pre>
For previous versions of the syntax, you may have set fortran_dialect to the
now-obsolete values "f77", "f90", "f95", or "elf". Such settings will be
silently handled as "f08". Users of "elf" may wish to experiment with "F"
instead.</div>
<div class="old-help-para">The syntax/fortran.vim script contains embedded comments that tell you how to
comment and/or uncomment some lines to (a) activate recognition of some
non-standard, vendor-supplied intrinsics and (b) to prevent features deleted
or declared obsolescent in the 2008 standard from being highlighted as todo
items.</div>
<div class="old-help-para"><div class="help-column_heading">Limitations</div>Parenthesis checking does not catch too few closing parentheses.  Hollerith
strings are not recognized.  Some keywords may be highlighted incorrectly
because Fortran90 has no reserved words.</div>
<div class="old-help-para">For further information related to fortran, see <a href="/neovim-docs-web/en/indent#ft-fortran-indent">ft-fortran-indent</a> and
<a href="/neovim-docs-web/en/filetype#ft-fortran-plugin">ft-fortran-plugin</a>.</div>
<div class="old-help-para"><h3 class="help-heading">FREEBASIC<span class="help-heading-tags">				<a name="freebasic.vim"></a><span class="help-tag">freebasic.vim</span> <a name="ft-freebasic-syntax"></a><span class="help-tag">ft-freebasic-syntax</span></span></h3></div>
<div class="old-help-para">FreeBASIC files will be highlighted differently for each of the four available
dialects, "fb", "qb", "fblite" and "deprecated".  See <a href="/neovim-docs-web/en/filetype#ft-freebasic-plugin">ft-freebasic-plugin</a>
for how to select the correct dialect.</div>
<div class="old-help-para">Highlighting is further configurable via the following variables.</div>
<div class="old-help-para"><div class="help-column_heading">Variable			Highlight</div><a name="freebasic_no_comment_fold"></a><code class="help-tag">freebasic_no_comment_fold</code>  	disable multiline comment folding
<a name="freebasic_operators"></a><code class="help-tag">freebasic_operators</code>  		non-alpha operators
<a name="freebasic_space_errors"></a><code class="help-tag">freebasic_space_errors</code>  	trailing white space and spaces before a <code>&lt;Tab&gt;</code>
<a name="freebasic_type_suffixes"></a><code class="help-tag">freebasic_type_suffixes</code>  	QuickBASIC style type suffixes</div>
<div class="old-help-para"><h3 class="help-heading">FVWM CONFIGURATION FILES<span class="help-heading-tags">			<a name="fvwm.vim"></a><span class="help-tag">fvwm.vim</span> <a name="ft-fvwm-syntax"></a><span class="help-tag">ft-fvwm-syntax</span></span></h3></div>
<div class="old-help-para">In order for Vim to recognize Fvwm configuration files that do not match
the patterns <a name="fvwmrc"></a><code class="help-tag">fvwmrc</code> or <a name="fvwm2rc"></a><code class="help-tag">fvwm2rc</code> , you must put additional patterns
appropriate to your system in your myfiletypes.vim file.  For these
patterns, you must set the variable "b:fvwm_version" to the major version
number of Fvwm, and the <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> option to fvwm.</div>
<div class="old-help-para">For example, to make Vim identify all files in /etc/X11/fvwm2/
as Fvwm2 configuration files, add the following:<pre>:au! BufNewFile,BufRead /etc/X11/fvwm2/*  let b:fvwm_version = 2 |
                                       \ set filetype=fvwm</pre>
<h3 class="help-heading">GSP<span class="help-heading-tags">						<a name="gsp.vim"></a><span class="help-tag">gsp.vim</span> <a name="ft-gsp-syntax"></a><span class="help-tag">ft-gsp-syntax</span></span></h3></div>
<div class="old-help-para">The default coloring style for GSP pages is defined by <a href="/neovim-docs-web/en/syntax#html.vim">html.vim</a>, and
the coloring for java code (within java tags or inline between backticks)
is defined by <a href="/neovim-docs-web/en/syntax#java.vim">java.vim</a>.  The following HTML groups defined in <a href="/neovim-docs-web/en/syntax#html.vim">html.vim</a>
are redefined to incorporate and highlight inline java code:</div>
<div class="old-help-para">    htmlString
    htmlValue
    htmlEndTag
    htmlTag
    htmlTagN</div>
<div class="old-help-para">Highlighting should look fine most of the places where you'd see inline
java code, but in some special cases it may not.  To add another HTML
group where you will have inline java code where it does not highlight
correctly, just copy the line you want from <a href="/neovim-docs-web/en/syntax#html.vim">html.vim</a> and add gspJava
to the contains clause.</div>
<div class="old-help-para">The backticks for inline java are highlighted according to the htmlError
group to make them easier to see.</div>
<div class="old-help-para"><h3 class="help-heading">GROFF<span class="help-heading-tags">						<a name="groff.vim"></a><span class="help-tag">groff.vim</span> <a name="ft-groff-syntax"></a><span class="help-tag">ft-groff-syntax</span></span></h3></div>
<div class="old-help-para">The groff syntax file is a wrapper for <a href="/neovim-docs-web/en/syntax#nroff.vim">nroff.vim</a>, see the notes
under that heading for examples of use and configuration.  The purpose
of this wrapper is to set up groff syntax extensions by setting the
filetype from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in a personal filetype definitions file
(see <a href="/neovim-docs-web/en/filetype#filetype.txt">filetype.txt</a>).</div>
<div class="old-help-para"><h3 class="help-heading">HASKELL<span class="help-heading-tags">			     <a name="haskell.vim"></a><span class="help-tag">haskell.vim</span> <a name="lhaskell.vim"></a><span class="help-tag">lhaskell.vim</span> <a name="ft-haskell-syntax"></a><span class="help-tag">ft-haskell-syntax</span></span></h3></div>
<div class="old-help-para">The Haskell syntax files support plain Haskell code as well as literate
Haskell code, the latter in both Bird style and TeX style.  The Haskell
syntax highlighting will also highlight C preprocessor directives.</div>
<div class="old-help-para">If you want to highlight delimiter characters (useful if you have a
light-coloured background), add to your vimrc:<pre>:let hs_highlight_delimiters = 1</pre>
To treat True and False as keywords as opposed to ordinary identifiers,
add:<pre>:let hs_highlight_boolean = 1</pre>
To also treat the names of primitive types as keywords:<pre>:let hs_highlight_types = 1</pre>
And to treat the names of even more relatively common types as keywords:<pre>:let hs_highlight_more_types = 1</pre>
If you want to highlight the names of debugging functions, put in
your vimrc:<pre>:let hs_highlight_debug = 1</pre>
The Haskell syntax highlighting also highlights C preprocessor
directives, and flags lines that start with # but are not valid
directives as erroneous.  This interferes with Haskell's syntax for
operators, as they may start with #.  If you want to highlight those
as operators as opposed to errors, put in your vimrc:<pre>:let hs_allow_hash_operator = 1</pre>
The syntax highlighting for literate Haskell code will try to
automatically guess whether your literate Haskell code contains
TeX markup or not, and correspondingly highlight TeX constructs
or nothing at all.  You can override this globally by putting
in your vimrc<pre>:let lhs_markup = none</pre>
for no highlighting at all, or<pre>:let lhs_markup = tex</pre>
to force the highlighting to always try to highlight TeX markup.
For more flexibility, you may also use buffer local versions of
this variable, so e.g.<pre>:let b:lhs_markup = tex</pre>
will force TeX highlighting for a particular buffer.  It has to be
set before turning syntax highlighting on for the buffer or
loading a file.</div>
<div class="old-help-para"><h3 class="help-heading">HTML<span class="help-heading-tags">						<a name="html.vim"></a><span class="help-tag">html.vim</span> <a name="ft-html-syntax"></a><span class="help-tag">ft-html-syntax</span></span></h3></div>
<div class="old-help-para">The coloring scheme for tags in the HTML file works as follows.</div>
<div class="old-help-para">The  &lt;&gt; of opening tags are colored differently than the &lt;/&gt; of a closing tag.
This is on purpose! For opening tags the 'Function' color is used, while for
closing tags the 'Identifier' color is used (See syntax.vim to check how those
are defined for you)</div>
<div class="old-help-para">Known tag names are colored the same way as statements in C.  Unknown tag
names are colored with the same color as the &lt;&gt; or &lt;/&gt; respectively which
makes it easy to spot errors</div>
<div class="old-help-para">Note that the same is true for argument (or attribute) names.  Known attribute
names are colored differently than unknown ones.</div>
<div class="old-help-para">Some HTML tags are used to change the rendering of text.  The following tags
are recognized by the html.vim syntax coloring file and change the way normal
text is shown: <code>&lt;B&gt;</code> <code>&lt;I&gt;</code> <code>&lt;U&gt;</code> <code>&lt;EM&gt;</code> <code>&lt;STRONG&gt;</code> (<code>&lt;EM&gt;</code> is used as an alias for <code>&lt;I&gt;</code>,
while <code>&lt;STRONG&gt;</code> as an alias for <code>&lt;B&gt;</code>), <code>&lt;H1&gt;</code> - <code>&lt;H6&gt;</code>, <code>&lt;HEAD&gt;</code>, <code>&lt;TITLE&gt;</code> and <code>&lt;A&gt;</code>, but
only if used as a link (that is, it must include a href as in
&lt;A href="/neovim-docs-web/en/somefile"&gt;).</div>
<div class="old-help-para">If you want to change how such text is rendered, you must redefine the
following syntax groups:</div>
<div class="old-help-para"><div class="help-li" style=""> htmlBold
</div><div class="help-li" style=""> htmlBoldUnderline
</div><div class="help-li" style=""> htmlBoldUnderlineItalic
</div><div class="help-li" style=""> htmlUnderline
</div><div class="help-li" style=""> htmlUnderlineItalic
</div><div class="help-li" style=""> htmlItalic
</div><div class="help-li" style=""> htmlTitle for titles
</div><div class="help-li" style=""> htmlH1 - htmlH6 for headings
</div></div>
<div class="old-help-para">To make this redefinition work you must redefine them all with the exception
of the last two (htmlTitle and htmlH[1-6], which are optional) and define the
following variable in your vimrc (this is due to the order in which the files
are read during initialization)<pre>:let html_my_rendering=1</pre>
If you'd like to see an example download mysyntax.vim at
<a href="https://www.fleiner.com/vim/download.html">https://www.fleiner.com/vim/download.html</a></div>
<div class="old-help-para">You can also disable this rendering by adding the following line to your
vimrc file:<pre>:let html_no_rendering=1</pre>
HTML comments are rather special (see an HTML reference document for the
details), and the syntax coloring scheme will highlight all errors.
However, if you prefer to use the wrong style (starts with &lt;!-- and
ends with --&gt;) you can define<pre>:let html_wrong_comments=1</pre>
JavaScript and Visual Basic embedded inside HTML documents are highlighted as
'Special' with statements, comments, strings and so on colored as in standard
programming languages.  Note that only JavaScript and Visual Basic are
currently supported, no other scripting language has been added yet.</div>
<div class="old-help-para">Embedded and inlined cascading style sheets (CSS) are highlighted too.</div>
<div class="old-help-para">There are several html preprocessor languages out there.  html.vim has been
written such that it should be trivial to include it.  To do so add the
following two lines to the syntax coloring file for that language
(the example comes from the asp.vim file):
<pre>runtime! syntax/html.vim
syn cluster htmlPreproc add=asp</pre>
Now you just need to make sure that you add all regions that contain
the preprocessor language to the cluster htmlPreproc.</div>
<div class="old-help-para">							<a name="html-folding"></a><code class="help-tag-right">html-folding</code>
The HTML syntax file provides syntax <a href="/neovim-docs-web/en/fold#folding">folding</a> (see <a href="/neovim-docs-web/en/syntax#%3Asyn-fold">:syn-fold</a>) between start
and end tags.  This can be turned on by<pre>:let g:html_syntax_folding = 1
:set foldmethod=syntax</pre>
Note: Syntax folding might slow down syntax highlighting significantly,
especially for large files.</div>
<div class="old-help-para">HTML/OS (by Aestiva)				<a name="htmlos.vim"></a><code class="help-tag-right">htmlos.vim</code> <a name="ft-htmlos-syntax"></a><code class="help-tag">ft-htmlos-syntax</code></div>
<div class="old-help-para">The coloring scheme for HTML/OS works as follows:</div>
<div class="old-help-para">Functions and variable names are the same color by default, because VIM
doesn't specify different colors for Functions and Identifiers.  To change
this (which is recommended if you want function names to be recognizable in a
different color) you need to add the following line to your vimrc:<pre>:hi Function cterm=bold ctermfg=LightGray</pre>
Of course, the ctermfg can be a different color if you choose.</div>
<div class="old-help-para">Another issues that HTML/OS runs into is that there is no special filetype to
signify that it is a file with HTML/OS coding.	You can change this by opening
a file and turning on HTML/OS syntax by doing the following:<pre>:set syntax=htmlos</pre>
Lastly, it should be noted that the opening and closing characters to begin a
block of HTML/OS code can either be &lt;&lt; or [[ and &gt;&gt; or ]], respectively.</div>
<div class="old-help-para"><h3 class="help-heading">IA64<span class="help-heading-tags">				<a name="ia64.vim"></a><span class="help-tag">ia64.vim</span> <a name="intel-itanium"></a><span class="help-tag">intel-itanium</span> <a name="ft-ia64-syntax"></a><span class="help-tag">ft-ia64-syntax</span></span></h3></div>
<div class="old-help-para">Highlighting for the Intel Itanium 64 assembly language.  See <a href="/neovim-docs-web/en/syntax#asm.vim">asm.vim</a> for
how to recognize this filetype.</div>
<div class="old-help-para">To have.inc files be recognized as IA64, add this to your vimrc file:<pre>:let g:filetype_inc = "ia64"</pre>
<h3 class="help-heading">INFORM<span class="help-heading-tags">						<a name="inform.vim"></a><span class="help-tag">inform.vim</span> <a name="ft-inform-syntax"></a><span class="help-tag">ft-inform-syntax</span></span></h3></div>
<div class="old-help-para">Inform highlighting includes symbols provided by the Inform Library, as
most programs make extensive use of it.  If do not wish Library symbols
to be highlighted add this to your vim startup:<pre>:let inform_highlight_simple=1</pre>
By default it is assumed that Inform programs are Z-machine targeted,
and highlights Z-machine assembly language symbols appropriately.  If
you intend your program to be targeted to a Glulx/Glk environment you
need to add this to your startup sequence:<pre>:let inform_highlight_glulx=1</pre>
This will highlight Glulx opcodes instead, and also adds glk() to the
set of highlighted system functions.</div>
<div class="old-help-para">The Inform compiler will flag certain obsolete keywords as errors when
it encounters them.  These keywords are normally highlighted as errors
by Vim.  To prevent such error highlighting, you must add this to your
startup sequence:<pre>:let inform_suppress_obsolete=1</pre>
By default, the language features highlighted conform to Compiler
version 6.30 and Library version 6.11.  If you are using an older
Inform development environment, you may with to add this to your
startup sequence:<pre>:let inform_highlight_old=1</pre>
<h3 class="help-heading">IDL<span class="help-heading-tags">							<a name="idl.vim"></a><span class="help-tag">idl.vim</span> <a name="idl-syntax"></a><span class="help-tag">idl-syntax</span></span></h3></div>
<div class="old-help-para">IDL (Interface Definition Language) files are used to define RPC calls.  In
Microsoft land, this is also used for defining COM interfaces and calls.</div>
<div class="old-help-para">IDL's structure is simple enough to permit a full grammar based approach to
rather than using a few heuristics.  The result is large and somewhat
repetitive but seems to work.</div>
<div class="old-help-para">There are some Microsoft extensions to idl files that are here.  Some of them
are disabled by defining idl_no_ms_extensions.</div>
<div class="old-help-para">The more complex of the extensions are disabled by defining idl_no_extensions.</div>
<div class="old-help-para"><div class="help-column_heading">Variable			Effect</div></div>
<div class="old-help-para">idl_no_ms_extensions		Disable some of the Microsoft specific
				extensions
idl_no_extensions		Disable complex extensions
idlsyntax_showerror		Show IDL errors (can be rather intrusive, but
				quite helpful)
idlsyntax_showerror_soft	Use softer colours by default for errors</div>
<div class="old-help-para"><h3 class="help-heading">JAVA<span class="help-heading-tags">						<a name="java.vim"></a><span class="help-tag">java.vim</span> <a name="ft-java-syntax"></a><span class="help-tag">ft-java-syntax</span></span></h3></div>
<div class="old-help-para">The java.vim syntax highlighting file offers several options:</div>
<div class="old-help-para">In Java 1.0.2 it was never possible to have braces inside parens, so this was
flagged as an error.  Since Java 1.1 this is possible (with anonymous
classes), and therefore is no longer marked as an error.  If you prefer the
old way, put the following line into your vim startup file:<pre>:let java_mark_braces_in_parens_as_errors=1</pre>
All identifiers in java.lang.* are always visible in all classes.  To
highlight them use:<pre>:let java_highlight_java_lang_ids=1</pre>
You can also highlight identifiers of most standard Java packages if you
download the javaid.vim script at <a href="https://www.fleiner.com/vim/download.html">https://www.fleiner.com/vim/download.html</a>.
If you prefer to only highlight identifiers of a certain package, say java.io
use the following:<pre>:let java_highlight_java_io=1</pre>
Check the javaid.vim file for a list of all the packages that are supported.</div>
<div class="old-help-para">Function names are not highlighted, as the way to find functions depends on
how you write Java code.  The syntax file knows two possible ways to highlight
functions:</div>
<div class="old-help-para">If you write function declarations that are always indented by either
a tab, 8 spaces or 2 spaces you may want to set<pre>:let java_highlight_functions="indent"</pre>
However, if you follow the Java guidelines about how functions and classes are
supposed to be named (with respect to upper and lowercase), use<pre>:let java_highlight_functions="style"</pre>
If both options do not work for you, but you would still want function
declarations to be highlighted create your own definitions by changing the
definitions in java.vim or by creating your own java.vim which includes the
original one and then adds the code to highlight functions.</div>
<div class="old-help-para">In Java 1.1 the functions System.out.println() and System.err.println() should
only be used for debugging.  Therefore it is possible to highlight debugging
statements differently.  To do this you must add the following definition in
your startup file:<pre>:let java_highlight_debug=1</pre>
The result will be that those statements are highlighted as 'Special'
characters.  If you prefer to have them highlighted differently you must define
new highlightings for the following groups.:
    Debug, DebugSpecial, DebugString, DebugBoolean, DebugType
which are used for the statement itself, special characters used in debug
strings, strings, boolean constants and types (this, super) respectively.  I
have opted to choose another background for those statements.</div>
<div class="old-help-para">Javadoc is a program that takes special comments out of Java program files and
creates HTML pages.  The standard configuration will highlight this HTML code
similarly to HTML files (see <a href="/neovim-docs-web/en/syntax#html.vim">html.vim</a>).  You can even add Javascript
and CSS inside this code (see below).  There are four differences however:
  1. The title (all characters up to the first '.' which is followed by
     some white space or up to the first '@') is colored differently (to change
     the color change the group CommentTitle).
  2. The text is colored as 'Comment'.
  3. HTML comments are colored as 'Special'
  4. The special Javadoc tags (@see, @param, ...) are highlighted as specials
     and the argument (for @see, @param, @exception) as Function.
To turn this feature off add the following line to your startup file:<pre>:let java_ignore_javadoc=1</pre>
If you use the special Javadoc comment highlighting described above you
can also turn on special highlighting for Javascript, visual basic
scripts and embedded CSS (stylesheets).  This makes only sense if you
actually have Javadoc comments that include either Javascript or embedded
CSS.  The options to use are<pre>:let java_javascript=1
:let java_css=1
:let java_vb=1</pre>
In order to highlight nested parens with different colors define colors
for javaParen, javaParen1 and javaParen2, for example with<pre>:hi link javaParen Comment</pre>
or<pre>:hi javaParen ctermfg=blue guifg=#0000ff</pre>
If you notice highlighting errors while scrolling backwards, which are fixed
when redrawing with <code>CTRL-L</code>, try setting the "java_minlines" internal variable
to a larger number:<pre>:let java_minlines = 50</pre>
This will make the syntax synchronization start 50 lines before the first
displayed line.  The default value is 10.  The disadvantage of using a larger
number is that redrawing can become slow.</div>
<div class="old-help-para"><h3 class="help-heading">JSON<span class="help-heading-tags">						<a name="json.vim"></a><span class="help-tag">json.vim</span> <a name="ft-json-syntax"></a><span class="help-tag">ft-json-syntax</span></span></h3></div>
<div class="old-help-para">The json syntax file provides syntax highlighting with conceal support by
default. To disable concealment:<pre>let g:vim_json_conceal = 0</pre>
To disable syntax highlighting of errors:<pre>let g:vim_json_warnings = 0</pre>
<h3 class="help-heading">LACE<span class="help-heading-tags">						<a name="lace.vim"></a><span class="help-tag">lace.vim</span> <a name="ft-lace-syntax"></a><span class="help-tag">ft-lace-syntax</span></span></h3></div>
<div class="old-help-para">Lace (Language for Assembly of Classes in Eiffel) is case insensitive, but the
style guide lines are not.  If you prefer case insensitive highlighting, just
define the vim variable 'lace_case_insensitive' in your startup file:<pre>:let lace_case_insensitive=1</pre>
<h3 class="help-heading">LEX<span class="help-heading-tags">						<a name="lex.vim"></a><span class="help-tag">lex.vim</span> <a name="ft-lex-syntax"></a><span class="help-tag">ft-lex-syntax</span></span></h3></div>
<div class="old-help-para">Lex uses brute-force synchronizing as the "^%%$" section delimiter
gives no clue as to what section follows.  Consequently, the value for<pre>:syn sync minlines=300</pre>
may be changed by the user if they are experiencing synchronization
difficulties (such as may happen with large lex files).</div>
<div class="old-help-para"><h3 class="help-heading">LIFELINES<span class="help-heading-tags">				<a name="lifelines.vim"></a><span class="help-tag">lifelines.vim</span> <a name="ft-lifelines-syntax"></a><span class="help-tag">ft-lifelines-syntax</span></span></h3></div>
<div class="old-help-para">To highlight deprecated functions as errors, add in your vimrc:<pre>:let g:lifelines_deprecated = 1</pre></div>
<div class="old-help-para"><h3 class="help-heading">LISP<span class="help-heading-tags">						<a name="lisp.vim"></a><span class="help-tag">lisp.vim</span> <a name="ft-lisp-syntax"></a><span class="help-tag">ft-lisp-syntax</span></span></h3></div>
<div class="old-help-para">The lisp syntax highlighting provides two options:<pre>g:lisp_instring : If it exists, then "(...)" strings are highlighted
                  as if the contents of the string were lisp.
                  Useful for AutoLisp.
g:lisp_rainbow  : If it exists and is nonzero, then differing levels
                  of parenthesization will receive different
                  highlighting.</pre></div>
<div class="old-help-para">The g:lisp_rainbow option provides 10 levels of individual colorization for
the parentheses and backquoted parentheses.  Because of the quantity of
colorization levels, unlike non-rainbow highlighting, the rainbow mode
specifies its highlighting using ctermfg and guifg, thereby bypassing the
usual color scheme control using standard highlighting groups.  The actual
highlighting used depends on the dark/bright setting  (see <a href="/neovim-docs-web/en/options#'bg'">'bg'</a>).</div>
<div class="old-help-para"><h3 class="help-heading">LITE<span class="help-heading-tags">						<a name="lite.vim"></a><span class="help-tag">lite.vim</span> <a name="ft-lite-syntax"></a><span class="help-tag">ft-lite-syntax</span></span></h3></div>
<div class="old-help-para">There are two options for the lite syntax highlighting.</div>
<div class="old-help-para">If you like SQL syntax highlighting inside Strings, use this:<pre>:let lite_sql_query = 1</pre>
For syncing, minlines defaults to 100.	If you prefer another value, you can
set "lite_minlines" to the value you desire.  Example:<pre>:let lite_minlines = 200</pre>
<h3 class="help-heading">LPC<span class="help-heading-tags">						<a name="lpc.vim"></a><span class="help-tag">lpc.vim</span> <a name="ft-lpc-syntax"></a><span class="help-tag">ft-lpc-syntax</span></span></h3></div>
<div class="old-help-para">LPC stands for a simple, memory-efficient language: Lars Pensj?? C.  The
file name of LPC is usually.c.  Recognizing these files as LPC would bother
users writing only C programs.	If you want to use LPC syntax in Vim, you
should set a variable in your vimrc file:<pre>:let lpc_syntax_for_c = 1</pre>
If it doesn't work properly for some particular C or LPC files, use a
modeline.  For a LPC file:</div>
<div class="old-help-para">	// vim:set ft=lpc:</div>
<div class="old-help-para">For a C file that is recognized as LPC:</div>
<div class="old-help-para">	// vim:set ft=c:</div>
<div class="old-help-para">If you don't want to set the variable, use the modeline in EVERY LPC file.</div>
<div class="old-help-para">There are several implementations for LPC, we intend to support most widely
used ones.  Here the default LPC syntax is for MudOS series, for MudOS v22
and before, you should turn off the sensible modifiers, and this will also
assert the new efuns after v22 to be invalid, don't set this variable when
you are using the latest version of MudOS:<pre>:let lpc_pre_v22 = 1</pre>
For LpMud 3.2 series of LPC:<pre>:let lpc_compat_32 = 1</pre>
For LPC4 series of LPC:<pre>:let lpc_use_lpc4_syntax = 1</pre>
For uLPC series of LPC:
uLPC has been developed to Pike, so you should use Pike syntax
instead, and the name of your source file should be *.pike

LUA						<a name="lua.vim"></a><code class="help-tag-right">lua.vim</code> <a name="ft-lua-syntax"></a><code class="help-tag">ft-lua-syntax</code></div>
<div class="old-help-para">The Lua syntax file can be used for versions 4.0, 5.0, 5.1 and 5.2 (5.2 is
the default). You can select one of these versions using the global variables
lua_version and lua_subversion. For example, to activate Lua
5.1 syntax highlighting, set the variables like this:</div>
<div class="old-help-para">	:let lua_version = 5
	:let lua_subversion = 1</div>
<div class="old-help-para"><h3 class="help-heading">MAIL<span class="help-heading-tags">						<a name="mail.vim"></a><span class="help-tag">mail.vim</span> <a name="ft-mail.vim"></a><span class="help-tag">ft-mail.vim</span></span></h3></div>
<div class="old-help-para">Vim highlights all the standard elements of an email (headers, signatures,
quoted text and URLs / email addresses).  In keeping with standard conventions,
signatures begin in a line containing only "--" followed optionally by
whitespaces and end with a newline.</div>
<div class="old-help-para">Vim treats lines beginning with ']', '}', '|', '&gt;' or a word followed by '&gt;'
as quoted text.  However Vim highlights headers and signatures in quoted text
only if the text is quoted with '&gt;' (optionally followed by one space).</div>
<div class="old-help-para">By default mail.vim synchronises syntax to 100 lines before the first
displayed line.  If you have a slow machine, and generally deal with emails
with short headers, you can change this to a smaller value:<pre>:let mail_minlines = 30</pre>
<h3 class="help-heading">MAKE<span class="help-heading-tags">						<a name="make.vim"></a><span class="help-tag">make.vim</span> <a name="ft-make-syntax"></a><span class="help-tag">ft-make-syntax</span></span></h3></div>
<div class="old-help-para">In makefiles, commands are usually highlighted to make it easy for you to spot
errors.  However, this may be too much coloring for you.  You can turn this
feature off by using:<pre>:let make_no_commands = 1</pre>
<h3 class="help-heading">MAPLE<span class="help-heading-tags">						<a name="maple.vim"></a><span class="help-tag">maple.vim</span> <a name="ft-maple-syntax"></a><span class="help-tag">ft-maple-syntax</span></span></h3></div>
<div class="old-help-para">Maple V, by Waterloo Maple Inc, supports symbolic algebra.  The language
supports many packages of functions which are selectively loaded by the user.
The standard set of packages' functions as supplied in Maple V release 4 may be
highlighted at the user's discretion.  Users may place in their vimrc file:<pre>:let mvpkg_all= 1</pre>
to get all package functions highlighted, or users may select any subset by
choosing a variable/package from the table below and setting that variable to
1, also in their vimrc file (prior to sourcing
$VIMRUNTIME/syntax/syntax.vim).</div>
<div class="old-help-para">	Table of Maple V Package Function Selectors<pre>mv_DEtools         mv_genfunc        mv_networks        mv_process
mv_Galois         mv_geometry        mv_numapprox        mv_simplex
mv_GaussInt         mv_grobner        mv_numtheory        mv_stats
mv_LREtools         mv_group        mv_orthopoly        mv_student
mv_combinat         mv_inttrans        mv_padic        mv_sumtools
mv_combstruct mv_liesymm        mv_plots        mv_tensor
mv_difforms         mv_linalg        mv_plottools        mv_totorder
mv_finance         mv_logic        mv_powseries</pre>
<h3 class="help-heading">MARKDOWN<span class="help-heading-tags">						<a name="ft-markdown-syntax"></a><span class="help-tag">ft-markdown-syntax</span></span></h3></div>
<div class="old-help-para">If you have long regions there might be wrong highlighting.  At the cost of
slowing down displaying, you can have the engine look further back to sync on
the start of a region, for example 500 lines:<pre>:let g:markdown_minlines = 500</pre>
<h3 class="help-heading">MATHEMATICA<span class="help-heading-tags">		<a name="mma.vim"></a><span class="help-tag">mma.vim</span> <a name="ft-mma-syntax"></a><span class="help-tag">ft-mma-syntax</span> <a name="ft-mathematica-syntax"></a><span class="help-tag">ft-mathematica-syntax</span></span></h3></div>
<div class="old-help-para">Empty.m files will automatically be presumed to be Matlab files unless you
have the following in your vimrc:<pre>let filetype_m = "mma"</pre>
<h3 class="help-heading">MOO<span class="help-heading-tags">						<a name="moo.vim"></a><span class="help-tag">moo.vim</span> <a name="ft-moo-syntax"></a><span class="help-tag">ft-moo-syntax</span></span></h3></div>
<div class="old-help-para">If you use C-style comments inside expressions and find it mangles your
highlighting, you may want to use extended (slow!) matches for C-style
comments:<pre>:let moo_extended_cstyle_comments = 1</pre>
To disable highlighting of pronoun substitution patterns inside strings:<pre>:let moo_no_pronoun_sub = 1</pre>
To disable highlighting of the regular expression operator '%|', and matching
'%(' and '%)' inside strings:<pre>:let moo_no_regexp = 1</pre>
Unmatched double quotes can be recognized and highlighted as errors:<pre>:let moo_unmatched_quotes = 1</pre>
To highlight builtin properties (.name, .location, .programmer etc.):<pre>:let moo_builtin_properties = 1</pre>
Unknown builtin functions can be recognized and highlighted as errors.  If you
use this option, add your own extensions to the mooKnownBuiltinFunction group.
To enable this option:<pre>:let moo_unknown_builtin_functions = 1</pre>
An example of adding sprintf() to the list of known builtin functions:<pre>:syn keyword mooKnownBuiltinFunction sprintf contained</pre>
<h3 class="help-heading">MSQL<span class="help-heading-tags">						<a name="msql.vim"></a><span class="help-tag">msql.vim</span> <a name="ft-msql-syntax"></a><span class="help-tag">ft-msql-syntax</span></span></h3></div>
<div class="old-help-para">There are two options for the msql syntax highlighting.</div>
<div class="old-help-para">If you like SQL syntax highlighting inside Strings, use this:<pre>:let msql_sql_query = 1</pre>
For syncing, minlines defaults to 100.	If you prefer another value, you can
set "msql_minlines" to the value you desire.  Example:<pre>:let msql_minlines = 200</pre>
<h3 class="help-heading">N1QL<span class="help-heading-tags">						<a name="n1ql.vim"></a><span class="help-tag">n1ql.vim</span> <a name="ft-n1ql-syntax"></a><span class="help-tag">ft-n1ql-syntax</span></span></h3></div>
<div class="old-help-para">N1QL is a SQL-like declarative language for manipulating JSON documents in
Couchbase Server databases.</div>
<div class="old-help-para">Vim syntax highlights N1QL statements, keywords, operators, types, comments,
and special values.  Vim ignores syntactical elements specific to SQL or its
many dialects, like COLUMN or CHAR, that don't exist in N1QL.</div>
<div class="old-help-para"><h3 class="help-heading">NCF<span class="help-heading-tags">						<a name="ncf.vim"></a><span class="help-tag">ncf.vim</span> <a name="ft-ncf-syntax"></a><span class="help-tag">ft-ncf-syntax</span></span></h3></div>
<div class="old-help-para">There is one option for NCF syntax highlighting.</div>
<div class="old-help-para">If you want to have unrecognized (by ncf.vim) statements highlighted as
errors, use this:<pre>:let ncf_highlight_unknowns = 1</pre>
If you don't want to highlight these errors, leave it unset.</div>
<div class="old-help-para"><h3 class="help-heading">NROFF<span class="help-heading-tags">						<a name="nroff.vim"></a><span class="help-tag">nroff.vim</span> <a name="ft-nroff-syntax"></a><span class="help-tag">ft-nroff-syntax</span></span></h3></div>
<div class="old-help-para">The nroff syntax file works with AT&amp;T n/troff out of the box.  You need to
activate the GNU groff extra features included in the syntax file before you
can use them.</div>
<div class="old-help-para">For example, Linux and BSD distributions use groff as their default text
processing package.  In order to activate the extra syntax highlighting
features for groff, arrange for files to be recognized as groff (see
<a href="/neovim-docs-web/en/syntax#ft-groff-syntax">ft-groff-syntax</a>) or add the following option to your start-up files:<pre>:let nroff_is_groff = 1</pre>
Groff is different from the old AT&amp;T n/troff that you may still find in
Solaris.  Groff macro and request names can be longer than 2 characters and
there are extensions to the language primitives.  For example, in AT&amp;T troff
you access the year as a 2-digit number with the request \(yr.  In groff you
can use the same request, recognized for compatibility, or you can use groff's
native syntax, \[yr].  Furthermore, you can use a 4-digit year directly:
\[year].  Macro requests can be longer than 2 characters, for example, GNU mm
accepts the requests ".VERBON" and ".VERBOFF" for creating verbatim
environments.</div>
<div class="old-help-para">In order to obtain the best formatted output g/troff can give you, you should
follow a few simple rules about spacing and punctuation.</div>
<div class="old-help-para">1. Do not leave empty spaces at the end of lines.</div>
<div class="old-help-para">2. Leave one space and one space only after an end-of-sentence period,
   exclamation mark, etc.</div>
<div class="old-help-para">3. For reasons stated below, it is best to follow all period marks with a
   carriage return.</div>
<div class="old-help-para">The reason behind these unusual tips is that g/n/troff have a line breaking
algorithm that can be easily upset if you don't follow the rules given above.</div>
<div class="old-help-para">Unlike TeX, troff fills text line-by-line, not paragraph-by-paragraph and,
furthermore, it does not have a concept of glue or stretch, all horizontal and
vertical space input will be output as is.</div>
<div class="old-help-para">Therefore, you should be careful about not using more space between sentences
than you intend to have in your final document.  For this reason, the common
practice is to insert a carriage return immediately after all punctuation
marks.  If you want to have "even" text in your final processed output, you
need to maintain regular spacing in the input text.  To mark both trailing
spaces and two or more spaces after a punctuation as an error, use:<pre>:let nroff_space_errors = 1</pre>
Another technique to detect extra spacing and other errors that will interfere
with the correct typesetting of your file, is to define an eye-catching
highlighting definition for the syntax groups "nroffDefinition" and
"nroffDefSpecial" in your configuration files.  For example:<pre>hi def nroffDefinition cterm=italic gui=reverse
hi def nroffDefSpecial cterm=italic,bold gui=reverse,bold</pre>
If you want to navigate preprocessor entries in your source file as easily as
with section markers, you can activate the following option in your vimrc
file:<pre>let b:preprocs_as_sections = 1</pre>
As well, the syntax file adds an extra paragraph marker for the extended
paragraph macro (.XP) in the ms package.</div>
<div class="old-help-para">Finally, there is a <a href="/neovim-docs-web/en/syntax#groff.vim">groff.vim</a> syntax file that can be used for enabling
groff syntax highlighting either on a file basis or globally by default.</div>
<div class="old-help-para"><h3 class="help-heading">OCAML<span class="help-heading-tags">						<a name="ocaml.vim"></a><span class="help-tag">ocaml.vim</span> <a name="ft-ocaml-syntax"></a><span class="help-tag">ft-ocaml-syntax</span></span></h3></div>
<div class="old-help-para">The OCaml syntax file handles files having the following prefixes: .ml,
.mli, .mll and .mly.  By setting the following variable<pre>:let ocaml_revised = 1</pre>
you can switch from standard OCaml-syntax to revised syntax as supported
by the camlp4 preprocessor.  Setting the variable<pre>:let ocaml_noend_error = 1</pre>
prevents highlighting of "end" as error, which is useful when sources
contain very long structures that Vim does not synchronize anymore.</div>
<div class="old-help-para"><h3 class="help-heading">PAPP<span class="help-heading-tags">						<a name="papp.vim"></a><span class="help-tag">papp.vim</span> <a name="ft-papp-syntax"></a><span class="help-tag">ft-papp-syntax</span></span></h3></div>
<div class="old-help-para">The PApp syntax file handles .papp files and, to a lesser extent, .pxml
and .pxsl files which are all a mixture of perl/xml/html/other using xml
as the top-level file format.  By default everything inside phtml or pxml
sections is treated as a string with embedded preprocessor commands.  If
you set the variable:<pre>:let papp_include_html=1</pre>
in your startup file it will try to syntax-highlight html code inside phtml
sections, but this is relatively slow and much too colourful to be able to
edit sensibly. ;)</div>
<div class="old-help-para">The newest version of the papp.vim syntax file can usually be found at
<a href="http://papp.plan9.de">http://papp.plan9.de</a>.</div>
<div class="old-help-para"><h3 class="help-heading">PASCAL<span class="help-heading-tags">						<a name="pascal.vim"></a><span class="help-tag">pascal.vim</span> <a name="ft-pascal-syntax"></a><span class="help-tag">ft-pascal-syntax</span></span></h3></div>
<div class="old-help-para">Files matching "*.p" could be Progress or Pascal and those matching "*.pp"
could be Puppet or Pascal.  If the automatic detection doesn't work for you,
or you only edit Pascal files, use this in your startup vimrc:<pre>:let filetype_p  = "pascal"
:let filetype_pp = "pascal"</pre>
The Pascal syntax file has been extended to take into account some extensions
provided by Turbo Pascal, Free Pascal Compiler and GNU Pascal Compiler.
Delphi keywords are also supported.  By default, Turbo Pascal 7.0 features are
enabled.  If you prefer to stick with the standard Pascal keywords, add the
following line to your startup file:<pre>:let pascal_traditional=1</pre>
To switch on Delphi specific constructions (such as one-line comments,
keywords, etc):<pre>:let pascal_delphi=1</pre>
The option pascal_symbol_operator controls whether symbol operators such as +,
, .., etc. are displayed using the Operator color or not.  To colorize symbol
operators, add the following line to your startup file:<pre>:let pascal_symbol_operator=1</pre>
Some functions are highlighted by default.  To switch it off:<pre>:let pascal_no_functions=1</pre>
Furthermore, there are specific variables for some compilers.  Besides
pascal_delphi, there are pascal_gpc and pascal_fpc.  Default extensions try to
match Turbo Pascal.<pre>:let pascal_gpc=1</pre>
or<pre>:let pascal_fpc=1</pre>
To ensure that strings are defined on a single line, you can define the
pascal_one_line_string variable.<pre>:let pascal_one_line_string=1</pre>
If you dislike <code>&lt;Tab&gt;</code> chars, you can set the pascal_no_tabs variable.  Tabs
will be highlighted as Error.<pre>:let pascal_no_tabs=1</pre>
<h3 class="help-heading">PERL<span class="help-heading-tags">						<a name="perl.vim"></a><span class="help-tag">perl.vim</span> <a name="ft-perl-syntax"></a><span class="help-tag">ft-perl-syntax</span></span></h3></div>
<div class="old-help-para">There are a number of possible options to the perl syntax highlighting.</div>
<div class="old-help-para">Inline POD highlighting is now turned on by default.  If you don't wish
to have the added complexity of highlighting POD embedded within Perl
files, you may set the 'perl_include_pod' option to 0:<pre>:let perl_include_pod = 0</pre>
To reduce the complexity of parsing (and increase performance) you can switch
off two elements in the parsing of variable names and contents.<pre></pre>
To handle package references in variable and function names not differently
from the rest of the name (like 'PkgName::' in '$PkgName::VarName'):<pre>:let perl_no_scope_in_variables = 1</pre>
(In Vim 6.x it was the other way around: "perl_want_scope_in_variables"
enabled it.)</div>
<div class="old-help-para">If you do not want complex things like '@<code>{$<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+syntax.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/syntax.html%0D%0DContext%3A%0D%0D%60%60%60%0D(In%20Vim%206.x%20it%20was%20the%20other%20way%20around%3A%20%22perl_want_scope_in_variables%22%0Aenabled%20it.)%0A%0AIf%20you%20do%20not%20want%20complex%20things%20like%20'%40%7B%24%7B%22foo%22%7D%7D'%20to%20be%20parsed%3A%20%3E%0A%0A%09%3Alet%20perl_no_extended_vars%20%3D%201%0A%0D%60%60%60">{"foo"</a>}</code>}' to be parsed:<pre>:let perl_no_extended_vars = 1</pre>
(In Vim 6.x it was the other way around: "perl_extended_vars" enabled it.)</div>
<div class="old-help-para">The coloring strings can be changed.  By default strings and qq friends will
be highlighted like the first line.  If you set the variable
perl_string_as_statement, it will be highlighted as in the second line.</div>
<div class="old-help-para">   "hello world!"; qq|hello world|;
   ^^^^^^^^^^^^^^NN^^^^^^^^^^^^^^^N	  (unlet perl_string_as_statement)
   S^^^^^^^^^^^^SNNSSS^^^^^^^^^^^SN	  (let perl_string_as_statement)</div>
<div class="old-help-para">(^ = perlString, S = perlStatement, N = None at all)</div>
<div class="old-help-para">The syncing has 3 options.  The first two switch off some triggering of
synchronization and should only be needed in case it fails to work properly.
If while scrolling all of a sudden the whole screen changes color completely
then you should try and switch off one of those.  Let me know if you can
figure out the line that causes the mistake.</div>
<div class="old-help-para">One triggers on "^\s*sub\s*" and the other on "^[$@%]" more or less.<pre>:let perl_no_sync_on_sub
:let perl_no_sync_on_global_var</pre>
Below you can set the maximum distance VIM should look for starting points for
its attempts in syntax highlighting.<pre>:let perl_sync_dist = 100</pre>
If you want to use folding with perl, set perl_fold:<pre>:let perl_fold = 1</pre>
If you want to fold blocks in if statements, etc. as well set the following:<pre>:let perl_fold_blocks = 1</pre>
Subroutines are folded by default if 'perl_fold' is set.  If you do not want
this, you can set 'perl_nofold_subs':<pre>:let perl_nofold_subs = 1</pre>
Anonymous subroutines are not folded by default; you may enable their folding
via 'perl_fold_anonymous_subs':<pre>:let perl_fold_anonymous_subs = 1</pre>
Packages are also folded by default if 'perl_fold' is set.  To disable this
behavior, set 'perl_nofold_packages':<pre>:let perl_nofold_packages = 1</pre>
PHP3 and PHP4		<a name="php.vim"></a><code class="help-tag-right">php.vim</code> <a name="php3.vim"></a><code class="help-tag">php3.vim</code> <a name="ft-php-syntax"></a><code class="help-tag">ft-php-syntax</code> <a name="ft-php3-syntax"></a><code class="help-tag">ft-php3-syntax</code></div>
<div class="old-help-para">[Note: Previously this was called "php3", but since it now also supports php4
it has been renamed to "php"]</div>
<div class="old-help-para">There are the following options for the php syntax highlighting.</div>
<div class="old-help-para">If you like SQL syntax highlighting inside Strings:<pre>let php_sql_query = 1</pre>
For highlighting the Baselib methods:<pre>let php_baselib = 1</pre>
Enable HTML syntax highlighting inside strings:<pre>let php_htmlInStrings = 1</pre>
Using the old colorstyle:<pre>let php_oldStyle = 1</pre>
Enable highlighting ASP-style short tags:<pre>let php_asp_tags = 1</pre>
Disable short tags:<pre>let php_noShortTags = 1</pre>
For highlighting parent error ] or ):<pre>let php_parent_error_close = 1</pre>
For skipping a php end tag, if there exists an open ( or [ without a closing
one:<pre>let php_parent_error_open = 1</pre>
Enable folding for classes and functions:<pre>let php_folding = 1</pre>
Selecting syncing method:<pre>let php_sync_method = x</pre>
x = -1 to sync by search (default),
x &gt; 0 to sync at least x lines backwards,
x = 0 to sync from start.</div>
<div class="old-help-para"><h3 class="help-heading">PLAINTEX<span class="help-heading-tags">				<a name="plaintex.vim"></a><span class="help-tag">plaintex.vim</span> <a name="ft-plaintex-syntax"></a><span class="help-tag">ft-plaintex-syntax</span></span></h3></div>
<div class="old-help-para">TeX is a typesetting language, and plaintex is the file type for the "plain"
variant of TeX.  If you never want your.tex files recognized as plain TeX,
see <a href="/neovim-docs-web/en/filetype#ft-tex-plugin">ft-tex-plugin</a>.</div>
<div class="old-help-para">This syntax file has the option<pre>let g:plaintex_delimiters = 1</pre>
if you want to highlight brackets "[]" and braces "{}".</div>
<div class="old-help-para"><h3 class="help-heading">PPWIZARD<span class="help-heading-tags">					<a name="ppwiz.vim"></a><span class="help-tag">ppwiz.vim</span> <a name="ft-ppwiz-syntax"></a><span class="help-tag">ft-ppwiz-syntax</span></span></h3></div>
<div class="old-help-para">PPWizard is a preprocessor for HTML and OS/2 INF files</div>
<div class="old-help-para">This syntax file has the options:</div>
<div class="old-help-para"><div class="help-li" style=""> ppwiz_highlight_defs : Determines highlighting mode for PPWizard's
  definitions.  Possible values are
</div></div>
<div class="old-help-para">  ppwiz_highlight_defs = 1 : PPWizard #define statements retain the
    colors of their contents (e.g. PPWizard macros and variables).</div>
<div class="old-help-para">  ppwiz_highlight_defs = 2 : Preprocessor #define and #evaluate
    statements are shown in a single color with the exception of line
    continuation symbols.</div>
<div class="old-help-para">  The default setting for ppwiz_highlight_defs is 1.</div>
<div class="old-help-para"><div class="help-li" style=""> ppwiz_with_html : If the value is 1 (the default), highlight literal
  HTML code; if 0, treat HTML code like ordinary text.
</div></div>
<div class="old-help-para"><h3 class="help-heading">PHTML<span class="help-heading-tags">						<a name="phtml.vim"></a><span class="help-tag">phtml.vim</span> <a name="ft-phtml-syntax"></a><span class="help-tag">ft-phtml-syntax</span></span></h3></div>
<div class="old-help-para">There are two options for the phtml syntax highlighting.</div>
<div class="old-help-para">If you like SQL syntax highlighting inside Strings, use this:<pre>:let phtml_sql_query = 1</pre>
For syncing, minlines defaults to 100.	If you prefer another value, you can
set "phtml_minlines" to the value you desire.  Example:<pre>:let phtml_minlines = 200</pre>
<h3 class="help-heading">POSTSCRIPT<span class="help-heading-tags">				<a name="postscr.vim"></a><span class="help-tag">postscr.vim</span> <a name="ft-postscr-syntax"></a><span class="help-tag">ft-postscr-syntax</span></span></h3></div>
<div class="old-help-para">There are several options when it comes to highlighting PostScript.</div>
<div class="old-help-para">First which version of the PostScript language to highlight.  There are
currently three defined language versions, or levels.  Level 1 is the original
and base version, and includes all extensions prior to the release of level 2.
Level 2 is the most common version around, and includes its own set of
extensions prior to the release of level 3.  Level 3 is currently the highest
level supported.  You select which level of the PostScript language you want
highlighted by defining the postscr_level variable as follows:<pre>:let postscr_level=2</pre>
If this variable is not defined it defaults to 2 (level 2) since this is
the most prevalent version currently.</div>
<div class="old-help-para">Note: Not all PS interpreters will support all language features for a
particular language level.  In particular the %!PS-Adobe-3.0 at the start of
PS files does NOT mean the PostScript present is level 3 PostScript!</div>
<div class="old-help-para">If you are working with Display PostScript, you can include highlighting of
Display PS language features by defining the postscr_display variable as
follows:<pre>:let postscr_display=1</pre>
If you are working with Ghostscript, you can include highlighting of
Ghostscript specific language features by defining the variable
postscr_ghostscript as follows:<pre>:let postscr_ghostscript=1</pre>
PostScript is a large language, with many predefined elements.	While it
useful to have all these elements highlighted, on slower machines this can
cause Vim to slow down.  In an attempt to be machine friendly font names and
character encodings are not highlighted by default.  Unless you are working
explicitly with either of these this should be ok.  If you want them to be
highlighted you should set one or both of the following variables:<pre>:let postscr_fonts=1
:let postscr_encodings=1</pre>
There is a stylistic option to the highlighting of and, or, and not.  In
PostScript the function of these operators depends on the types of their
operands - if the operands are booleans then they are the logical operators,
if they are integers then they are binary operators.  As binary and logical
operators can be highlighted differently they have to be highlighted one way
or the other.  By default they are treated as logical operators.  They can be
highlighted as binary operators by defining the variable
postscr_andornot_binary as follows:<pre>:let postscr_andornot_binary=1</pre></div>
<div class="old-help-para">			<a name="ptcap.vim"></a><code class="help-tag-right">ptcap.vim</code> <a name="ft-printcap-syntax"></a><code class="help-tag">ft-printcap-syntax</code>
PRINTCAP + TERMCAP	<a name="ft-ptcap-syntax"></a><code class="help-tag">ft-ptcap-syntax</code> <a name="ft-termcap-syntax"></a><code class="help-tag">ft-termcap-syntax</code></div>
<div class="old-help-para">This syntax file applies to the printcap and termcap databases.</div>
<div class="old-help-para">In order for Vim to recognize printcap/termcap files that do not match
the patterns <a name="printcap"></a><code class="help-tag">printcap</code>, or <a name="termcap"></a><code class="help-tag">termcap</code>, you must put additional patterns
appropriate to your system in your <a href="/neovim-docs-web/en/syntax#myfiletypefile">myfiletypefile</a> file.  For these
patterns, you must set the variable "b:ptcap_type" to either "print" or
"term", and then the <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> option to ptcap.</div>
<div class="old-help-para">For example, to make Vim identify all files in /etc/termcaps/ as termcap
files, add the following:<pre>:au BufNewFile,BufRead /etc/termcaps/* let b:ptcap_type = "term" |
                                    \ set filetype=ptcap</pre>
If you notice highlighting errors while scrolling backwards, which
are fixed when redrawing with <code>CTRL-L</code>, try setting the "ptcap_minlines"
internal variable to a larger number:<pre>:let ptcap_minlines = 50</pre>
(The default is 20 lines.)</div>
<div class="old-help-para"><h3 class="help-heading">PROGRESS<span class="help-heading-tags">				<a name="progress.vim"></a><span class="help-tag">progress.vim</span> <a name="ft-progress-syntax"></a><span class="help-tag">ft-progress-syntax</span></span></h3></div>
<div class="old-help-para">Files matching "*.w" could be Progress or cweb.  If the automatic detection
doesn't work for you, or you don't edit cweb at all, use this in your
startup vimrc:<pre>:let filetype_w = "progress"</pre>
The same happens for "*.i", which could be assembly, and "*.p", which could be
Pascal.  Use this if you don't use assembly and Pascal:<pre>:let filetype_i = "progress"
:let filetype_p = "progress"</pre>
<h3 class="help-heading">PYTHON<span class="help-heading-tags">						<a name="python.vim"></a><span class="help-tag">python.vim</span> <a name="ft-python-syntax"></a><span class="help-tag">ft-python-syntax</span></span></h3></div>
<div class="old-help-para">There are six options to control Python syntax highlighting.</div>
<div class="old-help-para">For highlighted numbers:<pre>:let python_no_number_highlight = 1</pre>
For highlighted builtin functions:<pre>:let python_no_builtin_highlight = 1</pre>
For highlighted standard exceptions:<pre>:let python_no_exception_highlight = 1</pre>
For highlighted doctests and code inside:<pre>:let python_no_doctest_highlight = 1</pre>
or<pre>:let python_no_doctest_code_highlight = 1</pre>
(first option implies second one).</div>
<div class="old-help-para">For highlighted trailing whitespace and mix of spaces and tabs:<pre>:let python_space_error_highlight = 1</pre>
If you want all possible Python highlighting (the same as setting the
preceding last option and unsetting all other ones):<pre>:let python_highlight_all = 1</pre>
Note: Only existence of these options matter, not their value. You can replace
      1 above with anything.</div>
<div class="old-help-para"><h3 class="help-heading">QUAKE<span class="help-heading-tags">						<a name="quake.vim"></a><span class="help-tag">quake.vim</span> <a name="ft-quake-syntax"></a><span class="help-tag">ft-quake-syntax</span></span></h3></div>
<div class="old-help-para">The Quake syntax definition should work for most FPS (First Person Shooter)
based on one of the Quake engines.  However, the command names vary a bit
between the three games (Quake, Quake 2, and Quake 3 Arena) so the syntax
definition checks for the existence of three global variables to allow users
to specify what commands are legal in their files.  The three variables can
be set for the following effects:</div>
<div class="old-help-para">set to highlight commands only available in Quake:<pre>:let quake_is_quake1 = 1</pre>
set to highlight commands only available in Quake 2:<pre>:let quake_is_quake2 = 1</pre>
set to highlight commands only available in Quake 3 Arena:<pre>:let quake_is_quake3 = 1</pre>
Any combination of these three variables is legal, but might highlight more
commands than are actually available to you by the game.</div>
<div class="old-help-para">R							<a name="r.vim"></a><code class="help-tag-right">r.vim</code> <a name="ft-r-syntax"></a><code class="help-tag">ft-r-syntax</code></div>
<div class="old-help-para">The parsing of R code for syntax highlight starts 40 lines backwards, but you
can set a different value in your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>. Example:<pre>let r_syntax_minlines = 60</pre>
You can also turn off syntax highlighting of ROxygen:<pre>let r_syntax_hl_roxygen = 0</pre>
enable folding of code delimited by parentheses, square brackets and curly
braces:<pre>let r_syntax_folding = 1</pre>
and highlight as functions all keywords followed by an opening parenthesis:<pre>let r_syntax_fun_pattern = 1</pre>
R MARKDOWN					<a name="rmd.vim"></a><code class="help-tag-right">rmd.vim</code> <a name="ft-rmd-syntax"></a><code class="help-tag">ft-rmd-syntax</code></div>
<div class="old-help-para">To disable syntax highlight of YAML header, add to your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>:<pre>let rmd_syn_hl_yaml = 0</pre>
To disable syntax highlighting of citation keys:<pre>let rmd_syn_hl_citations = 0</pre>
To highlight R code in knitr chunk headers:<pre>let rmd_syn_hl_chunk = 1</pre>
By default, chunks of R code will be highlighted following the rules of R
language. If you want proper syntax highlighting of chunks of other languages,
you should add them to either <code>markdown_fenced_languages</code> or
<code>rmd_fenced_languages</code>. For example to properly highlight both R and Python,
you may add this to your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>:<pre>let rmd_fenced_languages = ['r', 'python']</pre>
R RESTRUCTURED TEXT				<a name="rrst.vim"></a><code class="help-tag-right">rrst.vim</code> <a name="ft-rrst-syntax"></a><code class="help-tag">ft-rrst-syntax</code></div>
<div class="old-help-para">To highlight R code in knitr chunk headers, add to your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>:<pre>let rrst_syn_hl_chunk = 1</pre>
<h3 class="help-heading">READLINE<span class="help-heading-tags">				<a name="readline.vim"></a><span class="help-tag">readline.vim</span> <a name="ft-readline-syntax"></a><span class="help-tag">ft-readline-syntax</span></span></h3></div>
<div class="old-help-para">The readline library is primarily used by the BASH shell, which adds quite a
few commands and options to the ones already available.  To highlight these
items as well you can add the following to your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a> or just type it in the
command line before loading a file with the readline syntax:<pre>let readline_has_bash = 1</pre>
This will add highlighting for the commands that BASH (version 2.05a and
later, and part earlier) adds.</div>
<div class="old-help-para"><h3 class="help-heading">REGO<span class="help-heading-tags">						<a name="rego.vim"></a><span class="help-tag">rego.vim</span> <a name="ft-rego-syntax"></a><span class="help-tag">ft-rego-syntax</span></span></h3></div>
<div class="old-help-para">Rego is a query language developed by Styra.  It is mostly used as a policy
language for kubernetes, but can be applied to almost anything.  Files with
the following extensions are recognized as rego files: .rego.</div>
<div class="old-help-para"><h3 class="help-heading">RESTRUCTURED TEXT<span class="help-heading-tags">			<a name="rst.vim"></a><span class="help-tag">rst.vim</span> <a name="ft-rst-syntax"></a><span class="help-tag">ft-rst-syntax</span></span></h3></div>
<div class="old-help-para">Syntax highlighting is enabled for code blocks within the document for a
select number of file types.  See $VIMRUNTIME/syntax/rst.vim for the default
syntax list.</div>
<div class="old-help-para">To set a user-defined list of code block syntax highlighting:<pre>let rst_syntax_code_list = ['vim', 'lisp', ...]</pre>
To assign multiple code block types to a single syntax, define
<code>rst_syntax_code_list</code> as a mapping:<pre>let rst_syntax_code_list = {
        \ 'cpp': ['cpp', 'c++'],
        \ 'bash': ['bash', 'sh'],
        ...
\ }</pre>
To use color highlighting for emphasis text:<pre>let rst_use_emphasis_colors = 1</pre>
To enable folding of sections:<pre>let rst_fold_enabled = 1</pre>
Note that folding can cause performance issues on some platforms.</div>
<div class="old-help-para"><h3 class="help-heading">REXX<span class="help-heading-tags">						<a name="rexx.vim"></a><span class="help-tag">rexx.vim</span> <a name="ft-rexx-syntax"></a><span class="help-tag">ft-rexx-syntax</span></span></h3></div>
<div class="old-help-para">If you notice highlighting errors while scrolling backwards, which are fixed
when redrawing with <code>CTRL-L</code>, try setting the "rexx_minlines" internal variable
to a larger number:<pre>:let rexx_minlines = 50</pre>
This will make the syntax synchronization start 50 lines before the first
displayed line.  The default value is 10.  The disadvantage of using a larger
number is that redrawing can become slow.</div>
<div class="old-help-para">Vim tries to guess what type a ".r" file is.  If it can't be detected (from
comment lines), the default is "r".  To make the default rexx add this line to
your vimrc:							<a name="g%3Afiletype_r"></a><code class="help-tag-right">g:filetype_r</code>
<pre>:let g:filetype_r = "r"</pre>
<h3 class="help-heading">RUBY<span class="help-heading-tags">						<a name="ruby.vim"></a><span class="help-tag">ruby.vim</span> <a name="ft-ruby-syntax"></a><span class="help-tag">ft-ruby-syntax</span></span></h3></div>
<div class="old-help-para">    Ruby: Operator highlighting		<a href="/neovim-docs-web/en/syntax#ruby_operators">ruby_operators</a>
    Ruby: Whitespace errors		<a href="/neovim-docs-web/en/syntax#ruby_space_errors">ruby_space_errors</a>
    Ruby: Folding			<a href="/neovim-docs-web/en/syntax#ruby_fold">ruby_fold</a> <a href="/neovim-docs-web/en/syntax#ruby_foldable_groups">ruby_foldable_groups</a>
    Ruby: Reducing expensive operations	<a href="/neovim-docs-web/en/syntax#ruby_no_expensive">ruby_no_expensive</a> <a href="/neovim-docs-web/en/syntax#ruby_minlines">ruby_minlines</a>
    Ruby: Spellchecking strings		<a href="/neovim-docs-web/en/syntax#ruby_spellcheck_strings">ruby_spellcheck_strings</a></div>
<div class="old-help-para">						<a name="ruby_operators"></a><code class="help-tag-right">ruby_operators</code>
<div class="help-column_heading"> Ruby: Operator highlighting</div></div>
<div class="old-help-para">Operators can be highlighted by defining "ruby_operators":<pre>:let ruby_operators = 1</pre></div>
<div class="old-help-para">						<a name="ruby_space_errors"></a><code class="help-tag-right">ruby_space_errors</code>
<div class="help-column_heading"> Ruby: Whitespace errors</div></div>
<div class="old-help-para">Whitespace errors can be highlighted by defining "ruby_space_errors":<pre>:let ruby_space_errors = 1</pre></div>
<div class="old-help-para">This will highlight trailing whitespace and tabs preceded by a space character
as errors.  This can be refined by defining "ruby_no_trail_space_error" and
"ruby_no_tab_space_error" which will ignore trailing whitespace and tabs after
spaces respectively.</div>
<div class="old-help-para">					<a name="ruby_fold"></a><code class="help-tag-right">ruby_fold</code> <a name="ruby_foldable_groups"></a><code class="help-tag">ruby_foldable_groups</code>
<div class="help-column_heading"> Ruby: Folding</div></div>
<div class="old-help-para">Folding can be enabled by defining "ruby_fold":<pre>:let ruby_fold = 1</pre></div>
<div class="old-help-para">This will set the value of <a href="/neovim-docs-web/en/options#'foldmethod'">'foldmethod'</a> to "syntax" locally to the current
buffer or window, which will enable syntax-based folding when editing Ruby
filetypes.</div>
<div class="old-help-para">Default folding is rather detailed, i.e., small syntax units like "if", "do",
"%w[]" may create corresponding fold levels.</div>
<div class="old-help-para">You can set "ruby_foldable_groups" to restrict which groups are foldable:<pre>:let ruby_foldable_groups = 'if case %'</pre></div>
<div class="old-help-para">The value is a space-separated list of keywords:</div>
<div class="old-help-para"><div class="help-column_heading">    keyword       meaning</div><div class="help-column_heading">    --------  -------------------------------------</div>    ALL        Most block syntax (default)
    NONE       Nothing
    if	       "if" or "unless" block
    def        "def" block
    class      "class" block
    module     "module" block
    do	       "do" block
    begin      "begin" block
    case       "case" block
    for        "for", "while", "until" loops
    {	       Curly bracket block or hash literal
    [	       Array literal
    %	       Literal with "%" notation, e.g.: %w(STRING), %!STRING!
    /	       Regexp
    string     String and shell command output (surrounded by ', ",)
    :	       Symbol
    #	       Multiline comment
    &lt;&lt;	       Here documents
    __END__    Source code after "__END__" directive</div>
<div class="old-help-para">						<a name="ruby_no_expensive"></a><code class="help-tag-right">ruby_no_expensive</code>
<div class="help-column_heading"> Ruby: Reducing expensive operations</div></div>
<div class="old-help-para">By default, the "end" keyword is colorized according to the opening statement
of the block it closes.  While useful, this feature can be expensive; if you
experience slow redrawing (or you are on a terminal with poor color support)
you may want to turn it off by defining the "ruby_no_expensive" variable:<pre>:let ruby_no_expensive = 1</pre></div>
<div class="old-help-para">In this case the same color will be used for all control keywords.</div>
<div class="old-help-para">						<a name="ruby_minlines"></a><code class="help-tag-right">ruby_minlines</code></div>
<div class="old-help-para">If you do want this feature enabled, but notice highlighting errors while
scrolling backwards, which are fixed when redrawing with <code>CTRL-L</code>, try setting
the "ruby_minlines" variable to a value larger than 50:<pre>:let ruby_minlines = 100</pre></div>
<div class="old-help-para">Ideally, this value should be a number of lines large enough to embrace your
largest class or module.</div>
<div class="old-help-para">						<a name="ruby_spellcheck_strings"></a><code class="help-tag-right">ruby_spellcheck_strings</code>
<div class="help-column_heading"> Ruby: Spellchecking strings</div></div>
<div class="old-help-para">Ruby syntax will perform spellchecking of strings if you define
"ruby_spellcheck_strings":<pre>:let ruby_spellcheck_strings = 1</pre></div>
<div class="old-help-para"><h3 class="help-heading">SCHEME<span class="help-heading-tags">						<a name="scheme.vim"></a><span class="help-tag">scheme.vim</span> <a name="ft-scheme-syntax"></a><span class="help-tag">ft-scheme-syntax</span></span></h3></div>
<div class="old-help-para">By default only R7RS keywords are highlighted and properly indented.</div>
<div class="old-help-para">scheme.vim also supports extensions of the CHICKEN Scheme-&gt;C compiler.
Define b:is_chicken or g:is_chicken, if you need them.</div>
<div class="old-help-para"><h3 class="help-heading">SDL<span class="help-heading-tags">						<a name="sdl.vim"></a><span class="help-tag">sdl.vim</span> <a name="ft-sdl-syntax"></a><span class="help-tag">ft-sdl-syntax</span></span></h3></div>
<div class="old-help-para">The SDL highlighting probably misses a few keywords, but SDL has so many
of them it's almost impossibly to cope.</div>
<div class="old-help-para">The new standard, SDL-2000, specifies that all identifiers are
case-sensitive (which was not so before), and that all keywords can be
used either completely lowercase or completely uppercase.  To have the
highlighting reflect this, you can set the following variable:<pre>:let sdl_2000=1</pre>
This also sets many new keywords.  If you want to disable the old
keywords, which is probably a good idea, use:<pre>:let SDL_no_96=1</pre>
The indentation is probably also incomplete, but right now I am very
satisfied with it for my own projects.</div>
<div class="old-help-para"><h3 class="help-heading">SED<span class="help-heading-tags">						<a name="sed.vim"></a><span class="help-tag">sed.vim</span> <a name="ft-sed-syntax"></a><span class="help-tag">ft-sed-syntax</span></span></h3></div>
<div class="old-help-para">To make tabs stand out from regular blanks (accomplished by using Todo
highlighting on the tabs), define "g:sed_highlight_tabs" by putting<pre>:let g:sed_highlight_tabs = 1</pre></div>
<div class="old-help-para">in the vimrc file.  (This special highlighting only applies for tabs
inside search patterns, replacement texts, addresses or text included
by an Append/Change/Insert command.)  If you enable this option, it is
also a good idea to set the tab width to one character; by doing that,
you can easily count the number of tabs in a string.</div>
<div class="old-help-para">GNU sed allows comments after text on the same line.  BSD sed only allows
comments where "#" is the first character of the line.  To enforce BSD-style
comments, i.e. mark end-of-line comments as errors, use:<pre>:let g:sed_dialect = "bsd"</pre></div>
<div class="old-help-para">Note that there are other differences between GNU sed and BSD sed which are
not (yet) affected by this setting.</div>
<div class="old-help-para">Bugs:</div>
<div class="old-help-para">  The transform command (y) is treated exactly like the substitute
  command.  This means that, as far as this syntax file is concerned,
  transform accepts the same flags as substitute, which is wrong.
  (Transform accepts no flags.)  I tolerate this bug because the
  involved commands need very complex treatment (95 patterns, one for
  each plausible pattern delimiter).</div>
<div class="old-help-para"><h3 class="help-heading">SGML<span class="help-heading-tags">						<a name="sgml.vim"></a><span class="help-tag">sgml.vim</span> <a name="ft-sgml-syntax"></a><span class="help-tag">ft-sgml-syntax</span></span></h3></div>
<div class="old-help-para">The coloring scheme for tags in the SGML file works as follows.</div>
<div class="old-help-para">The &lt;&gt; of opening tags are colored differently than the &lt;/&gt; of a closing tag.
This is on purpose! For opening tags the 'Function' color is used, while for
closing tags the 'Type' color is used (See syntax.vim to check how those are
defined for you)</div>
<div class="old-help-para">Known tag names are colored the same way as statements in C.  Unknown tag
names are not colored which makes it easy to spot errors.</div>
<div class="old-help-para">Note that the same is true for argument (or attribute) names.  Known attribute
names are colored differently than unknown ones.</div>
<div class="old-help-para">Some SGML tags are used to change the rendering of text.  The following tags
are recognized by the sgml.vim syntax coloring file and change the way normal
text is shown: <code>&lt;varname&gt;</code> <code>&lt;emphasis&gt;</code> <code>&lt;command&gt;</code> <code>&lt;function&gt;</code> <code>&lt;literal&gt;</code>
<code>&lt;replaceable&gt;</code> <code>&lt;ulink&gt;</code> and <code>&lt;link&gt;</code>.</div>
<div class="old-help-para">If you want to change how such text is rendered, you must redefine the
following syntax groups:</div>
<div class="old-help-para"><div class="help-li" style=""> sgmlBold
</div><div class="help-li" style=""> sgmlBoldItalic
</div><div class="help-li" style=""> sgmlUnderline
</div><div class="help-li" style=""> sgmlItalic
</div><div class="help-li" style=""> sgmlLink for links
</div></div>
<div class="old-help-para">To make this redefinition work you must redefine them all and define the
following variable in your vimrc (this is due to the order in which the files
are read during initialization)<pre>let sgml_my_rendering=1</pre>
You can also disable this rendering by adding the following line to your
vimrc file:<pre>let sgml_no_rendering=1</pre>
(Adapted from the html.vim help text by Claudio Fleiner &lt;claudio@fleiner.com&gt;)</div>
<div class="old-help-para">		<a name="ft-posix-syntax"></a><code class="help-tag-right">ft-posix-syntax</code> <a name="ft-dash-syntax"></a><code class="help-tag">ft-dash-syntax</code>
<h3 class="help-heading">SH<span class="help-heading-tags">		<a name="sh.vim"></a><span class="help-tag">sh.vim</span>  <a name="ft-sh-syntax"></a><span class="help-tag">ft-sh-syntax</span>  <a name="ft-bash-syntax"></a><span class="help-tag">ft-bash-syntax</span>  <a name="ft-ksh-syntax"></a><span class="help-tag">ft-ksh-syntax</span></span></h3></div>
<div class="old-help-para">This covers syntax highlighting for the older Unix (Bourne) sh, and newer
shells such as bash, dash, posix, and the Korn shells.</div>
<div class="old-help-para">Vim attempts to determine which shell type is in use by specifying that
various filenames are of specific types, e.g.:<pre>ksh : .kshrc* *.ksh
bash: .bashrc* bashrc bash.bashrc .bash_profile* *.bash</pre></div>
<div class="old-help-para">See $VIMRUNTIME/filetype.vim for the full list of patterns.  If none of these
cases pertain, then the first line of the file is examined (ex. looking for
/bin/sh  /bin/ksh  /bin/bash).  If the first line specifies a shelltype, then
that shelltype is used.  However some files (ex. .profile) are known to be
shell files but the type is not apparent.  Furthermore, on many systems sh is
symbolically linked to "bash" (Linux, Windows+cygwin) or "ksh" (Posix).</div>
<div class="old-help-para">One may specify a global default by instantiating one of the following
variables in your vimrc:</div>
<div class="old-help-para">   ksh:<pre>let g:is_kornshell = 1</pre></div>
<div class="old-help-para">   posix:  (using this is nearly the same as setting g:is_kornshell to 1)<pre>let g:is_posix     = 1</pre></div>
<div class="old-help-para">   bash:<pre>let g:is_bash           = 1</pre></div>
<div class="old-help-para">   sh: (default) Bourne shell<pre>let g:is_sh           = 1</pre></div>
<div class="old-help-para">   (dash users should use posix)</div>
<div class="old-help-para">If there's no "#! ..." line, and the user hasn't availed themself of a default
sh.vim syntax setting as just shown, then syntax/sh.vim will assume the Bourne
shell syntax.  No need to quote RFCs or market penetration statistics in error
reports, please -- just select the default version of the sh your system uses
and install the associated "let..." in your &lt;.vimrc&gt;.</div>
<div class="old-help-para">The syntax/sh.vim file provides several levels of syntax-based folding:<pre>let g:sh_fold_enabled= 0     (default, no syntax folding)
let g:sh_fold_enabled= 1     (enable function folding)
let g:sh_fold_enabled= 2     (enable heredoc folding)
let g:sh_fold_enabled= 4     (enable if/do/for folding)</pre>
then various syntax items (ie. HereDocuments and function bodies) become
syntax-foldable (see <a href="/neovim-docs-web/en/syntax#%3Asyn-fold">:syn-fold</a>).  You also may add these together
to get multiple types of folding:<pre>let g:sh_fold_enabled= 3     (enables function and heredoc folding)</pre>
If you notice highlighting errors while scrolling backwards which are fixed
when one redraws with <code>CTRL-L</code>, try setting the "sh_minlines" internal variable
to a larger number.  Example:<pre>let sh_minlines = 500</pre>
This will make syntax synchronization start 500 lines before the first
displayed line.  The default value is 200.  The disadvantage of using a larger
number is that redrawing can become slow.</div>
<div class="old-help-para">If you don't have much to synchronize on, displaying can be very slow.	To
reduce this, the "sh_maxlines" internal variable can be set.  Example:<pre>let sh_maxlines = 100</pre></div>
<div class="old-help-para">The default is to use the twice sh_minlines.  Set it to a smaller number to
speed up displaying.  The disadvantage is that highlight errors may appear.</div>
<div class="old-help-para">syntax/sh.vim tries to flag certain problems as errors; usually things like
unmatched "]", "done", "fi", etc.  If you find the error handling problematic
for your purposes, you may suppress such error highlighting by putting
the following line in your .vimrc:<pre>let g:sh_no_error= 1</pre></div>
<div class="old-help-para">						<a name="sh-embed"></a><code class="help-tag-right">sh-embed</code>  <a name="sh-awk"></a><code class="help-tag">sh-awk</code>
 Sh: EMBEDDING LANGUAGES~</div>
<div class="old-help-para">You may wish to embed languages into sh.  I'll give an example courtesy of
Lorance Stinson on how to do this with awk as an example. Put the following
file into $HOME/.config/nvim/after/syntax/sh/awkembed.vim:<pre>" AWK Embedding:
" ==============
" Shamelessly ripped from aspperl.vim by Aaron Hope.
if exists("b:current_syntax")
  unlet b:current_syntax
endif
syn include @AWKScript syntax/awk.vim
syn region AWKScriptCode matchgroup=AWKCommand start=+[=\\]\@&lt;!'+ skip=+\\'+ end=+'+ contains=@AWKScript contained
syn region AWKScriptEmbedded matchgroup=AWKCommand start=+\&lt;awk\&gt;+ skip=+\\$+ end=+[=\\]\@&lt;!'+me=e-1 contains=@shIdList,@shExprList2 nextgroup=AWKScriptCode
syn cluster shCommandSubList add=AWKScriptEmbedded
hi def link AWKCommand Type</pre></div>
<div class="old-help-para">This code will then let the awk code in the single quotes:<pre>awk '...awk code here...'</pre>
be highlighted using the awk highlighting syntax.  Clearly this may be
extended to other languages.</div>
<div class="old-help-para"><h3 class="help-heading">SPEEDUP<span class="help-heading-tags">						<a name="spup.vim"></a><span class="help-tag">spup.vim</span> <a name="ft-spup-syntax"></a><span class="help-tag">ft-spup-syntax</span></span></h3>(AspenTech plant simulator)</div>
<div class="old-help-para">The Speedup syntax file has some options:</div>
<div class="old-help-para"><div class="help-li" style=""> strict_subsections : If this variable is defined, only keywords for
  sections and subsections will be highlighted as statements but not
  other keywords (like WITHIN in the OPERATION section).
</div></div>
<div class="old-help-para"><div class="help-li" style=""> highlight_types : Definition of this variable causes stream types
  like temperature or pressure to be highlighted as Type, not as a
  plain Identifier.  Included are the types that are usually found in
  the DECLARE section; if you defined own types, you have to include
  them in the syntax file.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> oneline_comments : This value ranges from 1 to 3 and determines the
  highlighting of # style comments.
</div></div>
<div class="old-help-para">  oneline_comments = 1 : Allow normal Speedup code after an even
  number of #s.</div>
<div class="old-help-para">  oneline_comments = 2 : Show code starting with the second # as
  error.  This is the default setting.</div>
<div class="old-help-para">  oneline_comments = 3 : Show the whole line as error if it contains
  more than one #.</div>
<div class="old-help-para">Since especially OPERATION sections tend to become very large due to
PRESETting variables, syncing may be critical.  If your computer is
fast enough, you can increase minlines and/or maxlines near the end of
the syntax file.</div>
<div class="old-help-para"><h3 class="help-heading">SQL<span class="help-heading-tags">						<a name="sql.vim"></a><span class="help-tag">sql.vim</span> <a name="ft-sql-syntax"></a><span class="help-tag">ft-sql-syntax</span></span></h3>				<a name="sqlinformix.vim"></a><code class="help-tag-right">sqlinformix.vim</code> <a name="ft-sqlinformix-syntax"></a><code class="help-tag">ft-sqlinformix-syntax</code>
				<a name="sqlanywhere.vim"></a><code class="help-tag-right">sqlanywhere.vim</code> <a name="ft-sqlanywhere-syntax"></a><code class="help-tag">ft-sqlanywhere-syntax</code></div>
<div class="old-help-para">While there is an ANSI standard for SQL, most database engines add their own
custom extensions.  Vim currently supports the Oracle and Informix dialects of
SQL.  Vim assumes "*.sql" files are Oracle SQL by default.</div>
<div class="old-help-para">Vim currently has SQL support for a variety of different vendors via syntax
scripts.  You can change Vim's default from Oracle to any of the current SQL
supported types.  You can also easily alter the SQL dialect being used on a
buffer by buffer basis.</div>
<div class="old-help-para">For more detailed instructions see <a href="/neovim-docs-web/en/ft_sql#ft_sql.txt">ft_sql.txt</a>.</div>
<div class="old-help-para"><h3 class="help-heading">SQUIRREL<span class="help-heading-tags">				<a name="squirrel.vim"></a><span class="help-tag">squirrel.vim</span> <a name="ft-squirrel-syntax"></a><span class="help-tag">ft-squirrel-syntax</span></span></h3></div>
<div class="old-help-para">Squirrel is a high level imperative, object-oriented programming language,
designed to be a light-weight scripting language that fits in the size, memory
bandwidth, and real-time requirements of applications like video games.  Files
with the following extensions are recognized as squirrel files: .nut.</div>
<div class="old-help-para"><h3 class="help-heading">TCSH<span class="help-heading-tags">						<a name="tcsh.vim"></a><span class="help-tag">tcsh.vim</span> <a name="ft-tcsh-syntax"></a><span class="help-tag">ft-tcsh-syntax</span></span></h3></div>
<div class="old-help-para">This covers the shell named "tcsh".  It is a superset of csh.  See <a href="/neovim-docs-web/en/syntax#csh.vim">csh.vim</a>
for how the filetype is detected.</div>
<div class="old-help-para">Tcsh does not allow \" in strings unless the "backslash_quote" shell variable
is set.  If you want VIM to assume that no backslash quote constructs exist
add this line to your vimrc:<pre>:let tcsh_backslash_quote = 0</pre>
If you notice highlighting errors while scrolling backwards, which are fixed
when redrawing with <code>CTRL-L</code>, try setting the "tcsh_minlines" internal variable
to a larger number:<pre>:let tcsh_minlines = 1000</pre>
This will make the syntax synchronization start 1000 lines before the first
displayed line.  If you set "tcsh_minlines" to "fromstart", then
synchronization is done from the start of the file. The default value for
tcsh_minlines is 100.  The disadvantage of using a larger number is that
redrawing can become slow.</div>
<div class="old-help-para"><h3 class="help-heading">TEX<span class="help-heading-tags">				<a name="tex.vim"></a><span class="help-tag">tex.vim</span> <a name="ft-tex-syntax"></a><span class="help-tag">ft-tex-syntax</span> <a name="latex-syntax"></a><span class="help-tag">latex-syntax</span></span></h3>				<a name="syntax-tex"></a><code class="help-tag-right">syntax-tex</code> <a name="syntax-latex"></a><code class="help-tag">syntax-latex</code></div>
<div class="old-help-para">			Tex Contents~
	Tex: Want Syntax Folding?			<a href="/neovim-docs-web/en/syntax#tex-folding">tex-folding</a>
	Tex: No Spell Checking Wanted			<a href="/neovim-docs-web/en/syntax#g%3Atex_nospell">g:tex_nospell</a>
	Tex: Don't Want Spell Checking In Comments?	<a href="/neovim-docs-web/en/syntax#tex-nospell">tex-nospell</a>
	Tex: Want Spell Checking in Verbatim Zones?	<a href="/neovim-docs-web/en/syntax#tex-verb">tex-verb</a>
	Tex: Run-on Comments or MathZones		<a href="/neovim-docs-web/en/syntax#tex-runon">tex-runon</a>
	Tex: Slow Syntax Highlighting?			<a href="/neovim-docs-web/en/syntax#tex-slow">tex-slow</a>
	Tex: Want To Highlight More Commands?		<a href="/neovim-docs-web/en/syntax#tex-morecommands">tex-morecommands</a>
	Tex: Excessive Error Highlighting?		<a href="/neovim-docs-web/en/syntax#tex-error">tex-error</a>
	Tex: Need a new Math Group?			<a href="/neovim-docs-web/en/syntax#tex-math">tex-math</a>
	Tex: Starting a New Style?			<a href="/neovim-docs-web/en/syntax#tex-style">tex-style</a>
	Tex: Taking Advantage of Conceal Mode		<a href="/neovim-docs-web/en/syntax#tex-conceal">tex-conceal</a>
	Tex: Selective Conceal Mode			<a href="/neovim-docs-web/en/syntax#g%3Atex_conceal">g:tex_conceal</a>
	Tex: Controlling iskeyword			<a href="/neovim-docs-web/en/syntax#g%3Atex_isk">g:tex_isk</a>
	Tex: Fine Subscript and Superscript Control	<a href="/neovim-docs-web/en/syntax#tex-supersub">tex-supersub</a>
	Tex: Match Check Control			<a href="/neovim-docs-web/en/syntax#tex-matchcheck">tex-matchcheck</a></div>
<div class="old-help-para">				<a name="tex-folding"></a><code class="help-tag-right">tex-folding</code> <a name="g%3Atex_fold_enabled"></a><code class="help-tag">g:tex_fold_enabled</code>
<div class="help-column_heading"> Tex: Want Syntax Folding?</div></div>
<div class="old-help-para">As of version 28 of &lt;syntax/tex.vim&gt;, syntax-based folding of parts, chapters,
sections, subsections, etc are supported.  Put<pre>let g:tex_fold_enabled=1</pre>
in your vimrc, and :set fdm=syntax.  I suggest doing the latter via a
modeline at the end of your LaTeX file:<pre>% vim: fdm=syntax</pre>
If your system becomes too slow, then you might wish to look into<pre>https://vimhelp.org/vim_faq.txt.html#faq-29.7</pre></div>
<div class="old-help-para">						<a name="g%3Atex_nospell"></a><code class="help-tag-right">g:tex_nospell</code>
 Tex: No Spell Checking Wanted~</div>
<div class="old-help-para">If you don't want spell checking anywhere in your LaTeX document, put<pre>let g:tex_nospell=1</pre>
into your vimrc.  If you merely wish to suppress spell checking inside
comments only, see <a href="/neovim-docs-web/en/syntax#g%3Atex_comment_nospell">g:tex_comment_nospell</a>.</div>
<div class="old-help-para">				<a name="tex-nospell"></a><code class="help-tag-right">tex-nospell</code> <a name="g%3Atex_comment_nospell"></a><code class="help-tag">g:tex_comment_nospell</code>
<div class="help-column_heading"> Tex: Don't Want Spell Checking In Comments?</div></div>
<div class="old-help-para">Some folks like to include things like source code in comments and so would
prefer that spell checking be disabled in comments in LaTeX files.  To do
this, put the following in your vimrc:<pre>let g:tex_comment_nospell= 1</pre>
If you want to suppress spell checking everywhere inside your LaTeX document,
see <a href="/neovim-docs-web/en/syntax#g%3Atex_nospell">g:tex_nospell</a>.</div>
<div class="old-help-para">				<a name="tex-verb"></a><code class="help-tag-right">tex-verb</code> <a name="g%3Atex_verbspell"></a><code class="help-tag">g:tex_verbspell</code>
 Tex: Want Spell Checking in Verbatim Zones?~</div>
<div class="old-help-para">Often verbatim regions are used for things like source code; seldom does
one want source code spell-checked.  However, for those of you who do
want your verbatim zones spell-checked, put the following in your vimrc:<pre>let g:tex_verbspell= 1</pre></div>
<div class="old-help-para">					<a name="tex-runon"></a><code class="help-tag-right">tex-runon</code> <a name="tex-stopzone"></a><code class="help-tag">tex-stopzone</code>
<div class="help-column_heading"> Tex: Run-on Comments or MathZones</div></div>
<div class="old-help-para">The &lt;syntax/tex.vim&gt; highlighting supports TeX, LaTeX, and some AmsTeX.  The
highlighting supports three primary zones/regions: normal, texZone, and
texMathZone.  Although considerable effort has been made to have these zones
terminate properly, zones delineated by $..$ and $$..$$ cannot be synchronized
as there's no difference between start and end patterns.  Consequently, a
special "TeX comment" has been provided<pre>%stopzone</pre>
which will forcibly terminate the highlighting of either a texZone or a
texMathZone.</div>
<div class="old-help-para">					<a name="tex-slow"></a><code class="help-tag-right">tex-slow</code> <a name="tex-sync"></a><code class="help-tag">tex-sync</code>
<div class="help-column_heading"> Tex: Slow Syntax Highlighting?</div></div>
<div class="old-help-para">If you have a slow computer, you may wish to reduce the values for<pre>:syn sync maxlines=200
:syn sync minlines=50</pre>
(especially the latter).  If your computer is fast, you may wish to
increase them.	This primarily affects synchronizing (i.e. just what group,
if any, is the text at the top of the screen supposed to be in?).</div>
<div class="old-help-para">Another cause of slow highlighting is due to syntax-driven folding; see
<a href="/neovim-docs-web/en/syntax#tex-folding">tex-folding</a> for a way around this.</div>
<div class="old-help-para">					<a name="g%3Atex_fast"></a><code class="help-tag-right">g:tex_fast</code></div>
<div class="old-help-para">Finally, if syntax highlighting is still too slow, you may set<pre>:let g:tex_fast= ""</pre>
in your vimrc.  Used this way, the g:tex_fast variable causes the syntax
highlighting script to avoid defining any regions and associated
synchronization.  The result will be much faster syntax highlighting; the
price: you will no longer have as much highlighting or any syntax-based
folding, and you will be missing syntax-based error checking.</div>
<div class="old-help-para">You may decide that some syntax is acceptable; you may use the following table
selectively to enable just some syntax highlighting:<pre>b : allow bold and italic syntax
c : allow texComment syntax
m : allow texMatcher syntax (ie. {...} and [...])
M : allow texMath syntax
p : allow parts, chapter, section, etc syntax
r : allow texRefZone syntax (nocite, bibliography, label, pageref, eqref)
s : allow superscript/subscript regions
S : allow texStyle syntax
v : allow verbatim syntax
V : allow texNewEnv and texNewCmd syntax</pre></div>
<div class="old-help-para">As an example, let g:tex_fast= "M" will allow math-associated highlighting
but suppress all the other region-based syntax highlighting.
(also see: <a href="/neovim-docs-web/en/syntax#g%3Atex_conceal">g:tex_conceal</a> and <a href="/neovim-docs-web/en/syntax#tex-supersub">tex-supersub</a>)</div>
<div class="old-help-para">					<a name="tex-morecommands"></a><code class="help-tag-right">tex-morecommands</code> <a name="tex-package"></a><code class="help-tag">tex-package</code>
<div class="help-column_heading"> Tex: Want To Highlight More Commands?</div></div>
<div class="old-help-para">LaTeX is a programmable language, and so there are thousands of packages full
of specialized LaTeX commands, syntax, and fonts.  If you're using such a
package you'll often wish that the distributed syntax/tex.vim would support
it.  However, clearly this is impractical.  So please consider using the
techniques in <a href="/neovim-docs-web/en/syntax#mysyntaxfile-add">mysyntaxfile-add</a> to extend or modify the highlighting provided
by syntax/tex.vim.</div>
<div class="old-help-para">I've included some support for various popular packages on my website:<pre>https://www.drchip.org/astronaut/vim/index.html#LATEXPKGS</pre></div>
<div class="old-help-para">The syntax files there go into your .../after/syntax/tex/ directory.</div>
<div class="old-help-para">					<a name="tex-error"></a><code class="help-tag-right">tex-error</code> <a name="g%3Atex_no_error"></a><code class="help-tag">g:tex_no_error</code>
<div class="help-column_heading"> Tex: Excessive Error Highlighting?</div></div>
<div class="old-help-para">The &lt;tex.vim&gt; supports lexical error checking of various sorts.  Thus,
although the error checking is ofttimes very useful, it can indicate
errors where none actually are.  If this proves to be a problem for you,
you may put in your vimrc the following statement:<pre>let g:tex_no_error=1</pre>
and all error checking by &lt;syntax/tex.vim&gt; will be suppressed.</div>
<div class="old-help-para">								<a name="tex-math"></a><code class="help-tag-right">tex-math</code>
<div class="help-column_heading"> Tex: Need a new Math Group?</div></div>
<div class="old-help-para">If you want to include a new math group in your LaTeX, the following
code shows you an example as to how you might do so:<pre>call TexNewMathZone(sfx,mathzone,starform)</pre>
You'll want to provide the new math group with a unique suffix
(currently, A-L and V-Z are taken by &lt;syntax/tex.vim&gt; itself).
As an example, consider how eqnarray is set up by &lt;syntax/tex.vim&gt;:<pre>call TexNewMathZone("D","eqnarray",1)</pre>
You'll need to change "mathzone" to the name of your new math group,
and then to the call to it in .vim/after/syntax/tex.vim.
The "starform" variable, if true, implies that your new math group
has a starred form (ie. eqnarray*).</div>
<div class="old-help-para">					<a name="tex-style"></a><code class="help-tag-right">tex-style</code> <a name="b%3Atex_stylish"></a><code class="help-tag">b:tex_stylish</code>
<div class="help-column_heading"> Tex: Starting a New Style?</div></div>
<div class="old-help-para">One may use "\makeatletter" in.tex files, thereby making the use of "@" in
commands available.  However, since the.tex file doesn't have one of the
following suffices: sty cls clo dtx ltx, the syntax highlighting will flag
such use of @ as an error.  To solve this:<pre>:let b:tex_stylish = 1
:set ft=tex</pre>
Putting "let g:tex_stylish=1" into your vimrc will make &lt;syntax/tex.vim&gt;
always accept such use of @.</div>
<div class="old-help-para">					<a name="tex-cchar"></a><code class="help-tag-right">tex-cchar</code> <a name="tex-cole"></a><code class="help-tag">tex-cole</code> <a name="tex-conceal"></a><code class="help-tag">tex-conceal</code>
 Tex: Taking Advantage of Conceal Mode~</div>
<div class="old-help-para">If you have <a href="/neovim-docs-web/en/options#'conceallevel'">'conceallevel'</a> set to 2 and if your encoding is utf-8, then a
number of character sequences can be translated into appropriate utf-8 glyphs,
including various accented characters, Greek characters in MathZones, and
superscripts and subscripts in MathZones.  Not all characters can be made into
superscripts or subscripts; the constraint is due to what utf-8 supports.
In fact, only a few characters are supported as subscripts.</div>
<div class="old-help-para">One way to use this is to have vertically split windows (see <a href="/neovim-docs-web/en/windows#CTRL-W_v">CTRL-W_v</a>); one
with <a href="/neovim-docs-web/en/options#'conceallevel'">'conceallevel'</a> at 0 and the other at 2; and both using <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a>.</div>
<div class="old-help-para">					<a name="g%3Atex_conceal"></a><code class="help-tag-right">g:tex_conceal</code>
 Tex: Selective Conceal Mode~</div>
<div class="old-help-para">You may selectively use conceal mode by setting g:tex_conceal in your
vimrc.  By default, g:tex_conceal is set to "admgs" to enable concealment
for the following sets of characters:<pre>a = accents/ligatures
b = bold and italic
d = delimiters
m = math symbols
g = Greek
s = superscripts/subscripts</pre></div>
<div class="old-help-para">By leaving one or more of these out, the associated conceal-character
substitution will not be made.</div>
<div class="old-help-para">						<a name="g%3Atex_isk"></a><code class="help-tag-right">g:tex_isk</code> <a name="g%3Atex_stylish"></a><code class="help-tag">g:tex_stylish</code>
 Tex: Controlling iskeyword~</div>
<div class="old-help-para">Normally, LaTeX keywords support 0-9, a-z, A-z, and 192-255 only. Latex
keywords don't support the underscore - except when in.sty files.  The
syntax highlighting script handles this with the following logic:</div>
<div class="old-help-para"><div class="help-li" style=""> If g:tex_stylish exists and is 1
		then the file will be treated as a "sty" file, so the "_"
		will be allowed as part of keywords
		(regardless of g:tex_isk)
</div><div class="help-li" style=""> Else if the file's suffix is sty, cls, clo, dtx, or ltx,
		then the file will be treated as a "sty" file, so the "_"
		will be allowed as part of keywords
		(regardless of g:tex_isk)
</div></div>
<div class="old-help-para"><div class="help-li" style=""> If g:tex_isk exists, then it will be used for the local <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a>
</div><div class="help-li" style=""> Else the local <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> will be set to 48-57,a-z,A-Z,192-255
</div></div>
<div class="old-help-para">			<a name="tex-supersub"></a><code class="help-tag-right">tex-supersub</code> <a name="g%3Atex_superscripts"></a><code class="help-tag">g:tex_superscripts</code> <a name="g%3Atex_subscripts"></a><code class="help-tag">g:tex_subscripts</code>
 Tex: Fine Subscript and Superscript Control~</div>
<div class="old-help-para">	See <a href="/neovim-docs-web/en/syntax#tex-conceal">tex-conceal</a> for how to enable concealed character replacement.</div>
<div class="old-help-para">	See <a href="/neovim-docs-web/en/syntax#g%3Atex_conceal">g:tex_conceal</a> for selectively concealing accents, bold/italic,
	math, Greek, and superscripts/subscripts.</div>
<div class="old-help-para">	One may exert fine control over which superscripts and subscripts one
	wants syntax-based concealment for (see <a href="/neovim-docs-web/en/syntax#%3Asyn-cchar">:syn-cchar</a>).  Since not all
	fonts support all characters, one may override the
	concealed-replacement lists; by default these lists are given by:<pre>let g:tex_superscripts= "[0-9a-zA-W.,:;+-&lt;&gt;/()=]"
let g:tex_subscripts= "[0-9aehijklmnoprstuvx,+-/().]"</pre></div>
<div class="old-help-para">	For example, I use Luxi Mono Bold; it doesn't support subscript
	characters for "hklmnpst", so I put<pre>let g:tex_subscripts= "[0-9aeijoruvx,+-/().]"</pre></div>
<div class="old-help-para">	in ~/.config/nvim/ftplugin/tex/tex.vim in order to avoid having
	inscrutable utf-8 glyphs appear.</div>
<div class="old-help-para">					<a name="tex-matchcheck"></a><code class="help-tag-right">tex-matchcheck</code> <a name="g%3Atex_matchcheck"></a><code class="help-tag">g:tex_matchcheck</code>
 Tex: Match Check Control~</div>
<div class="old-help-para">	Sometimes one actually wants mismatched parentheses, square braces,
	and or curly braces; for example, \text{(1,10]} is a range from but
	not including 1 to and including 10.  This wish, of course, conflicts
	with the desire to provide delimiter mismatch detection.  To
	accommodate these conflicting goals, syntax/tex.vim provides<pre>g:tex_matchcheck = '[({[]'</pre></div>
<div class="old-help-para">	which is shown along with its default setting.  So, if one doesn't
	want [] and () to be checked for mismatches, try using<pre>let g:tex_matchcheck= '[{}]'</pre></div>
<div class="old-help-para">	If you don't want matching to occur inside bold and italicized
	regions,<pre>let g:tex_excludematcher= 1</pre></div>
<div class="old-help-para">	will prevent the texMatcher group from being included in those regions.</div>
<div class="old-help-para"><h3 class="help-heading">TF<span class="help-heading-tags">						<a name="tf.vim"></a><span class="help-tag">tf.vim</span> <a name="ft-tf-syntax"></a><span class="help-tag">ft-tf-syntax</span></span></h3></div>
<div class="old-help-para">There is one option for the tf syntax highlighting.</div>
<div class="old-help-para">For syncing, minlines defaults to 100.	If you prefer another value, you can
set "tf_minlines" to the value you desire.  Example:<pre>:let tf_minlines = your choice</pre></div>
<div class="old-help-para"><h3 class="help-heading">VIM<span class="help-heading-tags">			<a name="vim.vim"></a><span class="help-tag">vim.vim</span>  		<a name="ft-vim-syntax"></a><span class="help-tag">ft-vim-syntax</span></span></h3>			<a name="g%3Avimsyn_minlines"></a><code class="help-tag-right">g:vimsyn_minlines</code>  	<a name="g%3Avimsyn_maxlines"></a><code class="help-tag">g:vimsyn_maxlines</code>
There is a trade-off between more accurate syntax highlighting versus screen
updating speed.  To improve accuracy, you may wish to increase the
g:vimsyn_minlines variable.  The g:vimsyn_maxlines variable may be used to
improve screen updating rates (see <a href="/neovim-docs-web/en/syntax#%3Asyn-sync">:syn-sync</a> for more on this).<pre>g:vimsyn_minlines : used to set synchronization minlines
g:vimsyn_maxlines : used to set synchronization maxlines</pre></div>
<div class="old-help-para">	(g:vim_minlines and g:vim_maxlines are deprecated variants of
	these two options)</div>
<div class="old-help-para">						<a name="g%3Avimsyn_embed"></a><code class="help-tag-right">g:vimsyn_embed</code>
The g:vimsyn_embed option allows users to select what, if any, types of
embedded script highlighting they wish to have.<pre>g:vimsyn_embed == 0      : disable (don't embed any scripts)
g:vimsyn_embed == 'lPr'  : support embedded lua, python and ruby</pre></div>
<div class="old-help-para">This option is disabled by default.
						<a name="g%3Avimsyn_folding"></a><code class="help-tag-right">g:vimsyn_folding</code></div>
<div class="old-help-para">Some folding is now supported with syntax/vim.vim:<pre>g:vimsyn_folding == 0 or doesn't exist: no syntax-based folding
g:vimsyn_folding =~ 'a' : augroups
g:vimsyn_folding =~ 'f' : fold functions
g:vimsyn_folding =~ 'P' : fold python   script</pre></div>
<div class="old-help-para">							<a name="g%3Avimsyn_noerror"></a><code class="help-tag-right">g:vimsyn_noerror</code>
Not all error highlighting that syntax/vim.vim does may be correct; Vim script
is a difficult language to highlight correctly.  A way to suppress error
highlighting is to put the following line in your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>:<pre>let g:vimsyn_noerror = 1</pre></div>
<div class="old-help-para"><h3 class="help-heading">XF86CONFIG<span class="help-heading-tags">				<a name="xf86conf.vim"></a><span class="help-tag">xf86conf.vim</span> <a name="ft-xf86conf-syntax"></a><span class="help-tag">ft-xf86conf-syntax</span></span></h3></div>
<div class="old-help-para">The syntax of XF86Config file differs in XFree86 v3.x and v4.x.  Both
variants are supported.  Automatic detection is used, but is far from perfect.
You may need to specify the version manually.  Set the variable
xf86conf_xfree86_version to 3 or 4 according to your XFree86 version in
your vimrc.  Example:<pre>:let xf86conf_xfree86_version=3</pre>
When using a mix of versions, set the b:xf86conf_xfree86_version variable.</div>
<div class="old-help-para">Note that spaces and underscores in option names are not supported.  Use
"SyncOnGreen" instead of "__s yn con gr_e_e_n" if you want the option name
highlighted.</div>
<div class="old-help-para"><h3 class="help-heading">XML<span class="help-heading-tags">						<a name="xml.vim"></a><span class="help-tag">xml.vim</span> <a name="ft-xml-syntax"></a><span class="help-tag">ft-xml-syntax</span></span></h3></div>
<div class="old-help-para">Xml namespaces are highlighted by default.  This can be inhibited by
setting a global variable:<pre>:let g:xml_namespace_transparent=1</pre></div>
<div class="old-help-para">							<a name="xml-folding"></a><code class="help-tag-right">xml-folding</code>
The xml syntax file provides syntax <a href="/neovim-docs-web/en/fold#folding">folding</a> (see <a href="/neovim-docs-web/en/syntax#%3Asyn-fold">:syn-fold</a>) between
start and end tags.  This can be turned on by<pre>:let g:xml_syntax_folding = 1
:set foldmethod=syntax</pre>
Note: Syntax folding might slow down syntax highlighting significantly,
especially for large files.</div>
<div class="old-help-para">X Pixmaps (XPM)					<a name="xpm.vim"></a><code class="help-tag-right">xpm.vim</code> <a name="ft-xpm-syntax"></a><code class="help-tag">ft-xpm-syntax</code></div>
<div class="old-help-para">xpm.vim creates its syntax items dynamically based upon the contents of the
XPM file.  Thus if you make changes e.g. in the color specification strings,
you have to source it again e.g. with ":set syn=xpm".</div>
<div class="old-help-para">To copy a pixel with one of the colors, yank a "pixel" with "yl" and insert it
somewhere else with "P".</div>
<div class="old-help-para">Do you want to draw with the mouse?  Try the following:<pre>:function! GetPixel()
:   let c = getline(".")[col(".") - 1]
:   echo c
:   exe "noremap &lt;LeftMouse&gt; &lt;LeftMouse&gt;r" .. c
:   exe "noremap &lt;LeftDrag&gt;        &lt;LeftMouse&gt;r" .. c
:endfunction
:noremap &lt;RightMouse&gt; &lt;LeftMouse&gt;:call GetPixel()&lt;CR&gt;
:set guicursor=n:hor20           " to see the color beneath the cursor</pre>
This turns the right button into a pipette and the left button into a pen.
It will work with XPM files that have one character per pixel only and you
must not click outside of the pixel strings, but feel free to improve it.</div>
<div class="old-help-para">It will look much better with a font in a quadratic cell size, e.g. for X:<pre>:set guifont=-*-clean-medium-r-*-*-8-*-*-*-*-80-*</pre>
<h3 class="help-heading">YAML<span class="help-heading-tags">						<a name="yaml.vim"></a><span class="help-tag">yaml.vim</span> <a name="ft-yaml-syntax"></a><span class="help-tag">ft-yaml-syntax</span></span></h3></div>
<div class="old-help-para">					<a name="g%3Ayaml_schema"></a><code class="help-tag-right">g:yaml_schema</code> <a name="b%3Ayaml_schema"></a><code class="help-tag">b:yaml_schema</code>
A YAML schema is a combination of a set of tags and a mechanism for resolving
non-specific tags. For user this means that YAML parser may, depending on
plain scalar contents, treat plain scalar (which can actually be only string
and nothing else) as a value of the other type: null, boolean, floating-point,
integer. <code>g:yaml_schema</code> option determines according to which schema values
will be highlighted specially. Supported schemas are</div>
<div class="old-help-para"><div class="help-column_heading">Schema		Description</div>failsafe	No additional highlighting.
json		Supports JSON-style numbers, booleans and null.
core		Supports more number, boolean and null styles.
pyyaml		In addition to core schema supports highlighting timestamps,
		but there are some differences in what is recognized as
		numbers and many additional boolean values not present in core
		schema.</div>
<div class="old-help-para">Default schema is <code>core</code>.</div>
<div class="old-help-para">Note that schemas are not actually limited to plain scalars, but this is the
only difference between schemas defined in YAML specification and the only
difference defined in the syntax file.</div>
<div class="old-help-para"><h3 class="help-heading">ZSH<span class="help-heading-tags">						    <a name="zsh.vim"></a><span class="help-tag">zsh.vim</span> <a name="ft-zsh-syntax"></a><span class="help-tag">ft-zsh-syntax</span></span></h3></div>
<div class="old-help-para">The syntax script for zsh allows for syntax-based folding:<pre>:let g:zsh_fold_enable = 1</pre>
<h2 class="help-heading">6. Defining a syntax<span class="help-heading-tags">					<a name="%3Asyn-define"></a><span class="help-tag">:syn-define</span> <a name="E410"></a><span class="help-tag">E410</span></span></h2></div>
<div class="old-help-para">Vim understands three types of syntax items:</div>
<div class="old-help-para">1. Keyword
   It can only contain keyword characters, according to the <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a>
   option.  It cannot contain other syntax items.  It will only match with a
   complete word (there are no keyword characters before or after the match).
   The keyword "if" would match in "if(a=b)", but not in "ifdef x", because
   "(" is not a keyword character and "d" is.</div>
<div class="old-help-para">2. Match
   This is a match with a single regexp pattern.</div>
<div class="old-help-para">3. Region
   This starts at a match of the "start" regexp pattern and ends with a match
   with the "end" regexp pattern.  Any other text can appear in between.  A
   "skip" regexp pattern can be used to avoid matching the "end" pattern.</div>
<div class="old-help-para">Several syntax ITEMs can be put into one syntax GROUP.	For a syntax group
you can give highlighting attributes.  For example, you could have an item
to define a "/* ../" comment and another one that defines a "// .." comment,
and put them both in the "Comment" group.  You can then specify that a
"Comment" will be in bold font and have a blue color.  You are free to make
one highlight group for one syntax item, or put all items into one group.
This depends on how you want to specify your highlighting attributes.  Putting
each item in its own group results in having to specify the highlighting
for a lot of groups.</div>
<div class="old-help-para">Note that a syntax group and a highlight group are similar.  For a highlight
group you will have given highlight attributes.  These attributes will be used
for the syntax group with the same name.</div>
<div class="old-help-para">In case more than one item matches at the same position, the one that was
defined LAST wins.  Thus you can override previously defined syntax items by
using an item that matches the same text.  But a keyword always goes before a
match or region.  And a keyword with matching case always goes before a
keyword with ignoring case.</div>
<div class="old-help-para"><h3 class="help-heading">PRIORITY<span class="help-heading-tags">						<a name="%3Asyn-priority"></a><span class="help-tag">:syn-priority</span></span></h3></div>
<div class="old-help-para">When several syntax items may match, these rules are used:</div>
<div class="old-help-para">1. When multiple Match or Region items start in the same position, the item
   defined last has priority.
2. A Keyword has priority over Match and Region items.
3. An item that starts in an earlier position has priority over items that
   start in later positions.</div>
<div class="old-help-para"><h3 class="help-heading">DEFINING CASE<span class="help-heading-tags">						<a name="%3Asyn-case"></a><span class="help-tag">:syn-case</span> <a name="E390"></a><span class="help-tag">E390</span></span></h3></div>
<div class="old-help-para">:sy[ntax] case [match | ignore]
	This defines if the following ":syntax" commands will work with
	matching case, when using "match", or with ignoring case, when using
	"ignore".  Note that any items before this are not affected, and all
	items until the next ":syntax case" command are affected.</div>
<div class="old-help-para">:sy[ntax] case
	Show either "syntax case match" or "syntax case ignore".</div>
<div class="old-help-para"><h3 class="help-heading">DEFINING FOLDLEVEL<span class="help-heading-tags">					<a name="%3Asyn-foldlevel"></a><span class="help-tag">:syn-foldlevel</span></span></h3></div>
<div class="old-help-para">:sy[ntax] foldlevel start
:sy[ntax] foldlevel minimum
	This defines how the foldlevel of a line is computed when using
	foldmethod=syntax (see <a href="/neovim-docs-web/en/fold#fold-syntax">fold-syntax</a> and <a href="/neovim-docs-web/en/syntax#%3Asyn-fold">:syn-fold</a>):</div>
<div class="old-help-para">	start:		Use level of item containing start of line.
	minimum:	Use lowest local-minimum level of items on line.</div>
<div class="old-help-para">	The default is "start".  Use "minimum" to search a line horizontally
	for the lowest level contained on the line that is followed by a
	higher level.  This produces more natural folds when syntax items
	may close and open horizontally within a line.</div>
<div class="old-help-para">:sy[ntax] foldlevel
	Show the current foldlevel method, either "syntax foldlevel start" or
	"syntax foldlevel minimum".</div>
<div class="old-help-para"><h3 class="help-heading">SPELL CHECKING<span class="help-heading-tags">						<a name="%3Asyn-spell"></a><span class="help-tag">:syn-spell</span></span></h3></div>
<div class="old-help-para">:sy[ntax] spell toplevel
:sy[ntax] spell notoplevel
:sy[ntax] spell default
	This defines where spell checking is to be done for text that is not
	in a syntax item:</div>
<div class="old-help-para">	toplevel:	Text is spell checked.
	notoplevel:	Text is not spell checked.
	default:	When there is a @Spell cluster no spell checking.</div>
<div class="old-help-para">	For text in syntax items use the @Spell and @NoSpell clusters
	<a href="/neovim-docs-web/en/spell#spell-syntax">spell-syntax</a>.  When there is no @Spell and no @NoSpell cluster then
	spell checking is done for "default" and "toplevel".</div>
<div class="old-help-para">	To activate spell checking the <a href="/neovim-docs-web/en/options#'spell'">'spell'</a> option must be set.</div>
<div class="old-help-para">:sy[ntax] spell
	Show the current syntax spell checking method, either "syntax spell
	toplevel", "syntax spell notoplevel" or "syntax spell default".</div>
<div class="old-help-para"><h3 class="help-heading">SYNTAX ISKEYWORD SETTING<span class="help-heading-tags">				<a name="%3Asyn-iskeyword"></a><span class="help-tag">:syn-iskeyword</span></span></h3></div>
<div class="old-help-para">:sy[ntax] iskeyword [clear | <code>{option}</code>]
	This defines the keyword characters.  It's like the <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> option
	for but only applies to syntax highlighting.</div>
<div class="old-help-para">	clear:		Syntax specific iskeyword setting is disabled and the
			buffer-local <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> setting is used.
	<code>{option}</code>       	Set the syntax <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> option to a new value.</div>
<div class="old-help-para">	Example:<pre>:syntax iskeyword @,48-57,192-255,$,_</pre></div>
<div class="old-help-para">	This would set the syntax specific iskeyword option to include all
	alphabetic characters, plus the numeric characters, all accented
	characters and also includes the "_" and the "$".</div>
<div class="old-help-para">	If no argument is given, the current value will be output.</div>
<div class="old-help-para">	Setting this option influences what <a href="/neovim-docs-web/en/pattern#%2F%5Ck">/\k</a> matches in syntax patterns
	and also determines where <a href="/neovim-docs-web/en/syntax#%3Asyn-keyword">:syn-keyword</a> will be checked for a new
	match.</div>
<div class="old-help-para">	It is recommended when writing syntax files, to use this command to
	set the correct value for the specific syntax language and not change
	the <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> option.</div>
<div class="old-help-para"><h3 class="help-heading">DEFINING KEYWORDS<span class="help-heading-tags">					<a name="%3Asyn-keyword"></a><span class="help-tag">:syn-keyword</span></span></h3></div>
<div class="old-help-para">:sy[ntax] keyword <code>{group-name}</code> [{options}] <code>{keyword}</code> .. [{options}]</div>
<div class="old-help-para">	This defines a number of keywords.</div>
<div class="old-help-para">	<code>{group-name}</code>	Is a syntax group name such as "Comment".
	[{options}]	See <a href="/neovim-docs-web/en/syntax#%3Asyn-arguments">:syn-arguments</a> below.
	<code>{keyword}</code> ..	Is a list of keywords which are part of this group.</div>
<div class="old-help-para">	Example:<pre>:syntax keyword   Type   int long char</pre></div>
<div class="old-help-para">	The <code>{options}</code> can be given anywhere in the line.  They will apply to
	all keywords given, also for options that come after a keyword.
	These examples do exactly the same:<pre>:syntax keyword   Type   contained int long char
:syntax keyword   Type   int long contained char
:syntax keyword   Type   int long char contained</pre></div>
<div class="old-help-para">								<a name="E789"></a><code class="help-tag-right">E789</code> <a name="E890"></a><code class="help-tag">E890</code>
	When you have a keyword with an optional tail, like Ex commands in
	Vim, you can put the optional characters inside [], to define all the
	variations at once:<pre>:syntax keyword   vimCommand         ab[breviate] n[ext]</pre></div>
<div class="old-help-para">	Don't forget that a keyword can only be recognized if all the
	characters are included in the <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> option.  If one character
	isn't, the keyword will never be recognized.
	Multi-byte characters can also be used.  These do not have to be in
	<a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a>.
	See <a href="/neovim-docs-web/en/syntax#%3Asyn-iskeyword">:syn-iskeyword</a> for defining syntax specific iskeyword settings.</div>
<div class="old-help-para">	A keyword always has higher priority than a match or region, the
	keyword is used if more than one item matches.	Keywords do not nest
	and a keyword can't contain anything else.</div>
<div class="old-help-para">	Note that when you have a keyword that is the same as an option (even
	one that isn't allowed here), you can not use it.  Use a match
	instead.</div>
<div class="old-help-para">	The maximum length of a keyword is 80 characters.</div>
<div class="old-help-para">	The same keyword can be defined multiple times, when its containment
	differs.  For example, you can define the keyword once not contained
	and use one highlight group, and once contained, and use a different
	highlight group.  Example:<pre>:syn keyword vimCommand tag
:syn keyword vimSetting contained tag</pre></div>
<div class="old-help-para">	When finding "tag" outside of any syntax item, the "vimCommand"
	highlight group is used.  When finding "tag" in a syntax item that
	contains "vimSetting", the "vimSetting" group is used.</div>
<div class="old-help-para"><h3 class="help-heading">DEFINING MATCHES<span class="help-heading-tags">					<a name="%3Asyn-match"></a><span class="help-tag">:syn-match</span></span></h3></div>
<div class="old-help-para">:sy[ntax] match <code>{group-name}</code> [{options}]
		[excludenl]
		[keepend]
		<code>{pattern}</code>
		[{options}]</div>
<div class="old-help-para">	This defines one match.</div>
<div class="old-help-para">	<code>{group-name}</code>		A syntax group name such as "Comment".
	[{options}]		See <a href="/neovim-docs-web/en/syntax#%3Asyn-arguments">:syn-arguments</a> below.
	[excludenl]		Don't make a pattern with the end-of-line "$"
				extend a containing match or region.  Must be
				given before the pattern. <a href="/neovim-docs-web/en/syntax#%3Asyn-excludenl">:syn-excludenl</a>
	keepend			Don't allow contained matches to go past a
				match with the end pattern.  See
				<a href="/neovim-docs-web/en/syntax#%3Asyn-keepend">:syn-keepend</a>.
	<code>{pattern}</code>		The search pattern that defines the match.
				See <a href="/neovim-docs-web/en/syntax#%3Asyn-pattern">:syn-pattern</a> below.
				Note that the pattern may match more than one
				line, which makes the match depend on where
				Vim starts searching for the pattern.  You
				need to make sure syncing takes care of this.</div>
<div class="old-help-para">	Example (match a character constant):<pre>:syntax match Character /'.'/hs=s+1,he=e-1</pre></div>
<div class="old-help-para"><h3 class="help-heading">DEFINING REGIONS<span class="help-heading-tags">	<a name="%3Asyn-region"></a><span class="help-tag">:syn-region</span> <a name="%3Asyn-start"></a><span class="help-tag">:syn-start</span> <a name="%3Asyn-skip"></a><span class="help-tag">:syn-skip</span> <a name="%3Asyn-end"></a><span class="help-tag">:syn-end</span></span></h3>							<a name="E398"></a><code class="help-tag-right">E398</code> <a name="E399"></a><code class="help-tag">E399</code>
:sy[ntax] region <code>{group-name}</code> [{options}]
		[matchgroup={group-name}]
		[keepend]
		[extend]
		[excludenl]
		start={start-pattern} ..
		[skip={skip-pattern}]
		end={end-pattern} ..
		[{options}]</div>
<div class="old-help-para">	This defines one region.  It may span several lines.</div>
<div class="old-help-para">	<code>{group-name}</code>		A syntax group name such as "Comment".
	[{options}]		See <a href="/neovim-docs-web/en/syntax#%3Asyn-arguments">:syn-arguments</a> below.
	[matchgroup={group-name}]  The syntax group to use for the following
				start or end pattern matches only.  Not used
				for the text in between the matched start and
				end patterns.  Use NONE to reset to not using
				a different group for the start or end match.
				See <a href="/neovim-docs-web/en/syntax#%3Asyn-matchgroup">:syn-matchgroup</a>.
	keepend			Don't allow contained matches to go past a
				match with the end pattern.  See
				<a href="/neovim-docs-web/en/syntax#%3Asyn-keepend">:syn-keepend</a>.
	extend			Override a "keepend" for an item this region
				is contained in.  See <a href="/neovim-docs-web/en/syntax#%3Asyn-extend">:syn-extend</a>.
	excludenl		Don't make a pattern with the end-of-line "$"
				extend a containing match or item.  Only
				useful for end patterns.  Must be given before
				the patterns it applies to. <a href="/neovim-docs-web/en/syntax#%3Asyn-excludenl">:syn-excludenl</a>
	start={start-pattern}	The search pattern that defines the start of
				the region.  See <a href="/neovim-docs-web/en/syntax#%3Asyn-pattern">:syn-pattern</a> below.
	skip={skip-pattern}	The search pattern that defines text inside
				the region where not to look for the end
				pattern.  See <a href="/neovim-docs-web/en/syntax#%3Asyn-pattern">:syn-pattern</a> below.
	end={end-pattern}	The search pattern that defines the end of
				the region.  See <a href="/neovim-docs-web/en/syntax#%3Asyn-pattern">:syn-pattern</a> below.</div>
<div class="old-help-para">	Example:<pre>:syntax region String   start=+"+  skip=+\\"+  end=+"+</pre></div>
<div class="old-help-para">	The start/skip/end patterns and the options can be given in any order.
	There can be zero or one skip pattern.	There must be one or more
	start and end patterns.  This means that you can omit the skip
	pattern, but you must give at least one start and one end pattern.  It
	is allowed to have white space before and after the equal sign
	(although it mostly looks better without white space).</div>
<div class="old-help-para">	When more than one start pattern is given, a match with one of these
	is sufficient.	This means there is an OR relation between the start
	patterns.  The last one that matches is used.  The same is true for
	the end patterns.</div>
<div class="old-help-para">	The search for the end pattern starts right after the start pattern.
	Offsets are not used for this.	This implies that the match for the
	end pattern will never overlap with the start pattern.</div>
<div class="old-help-para">	The skip and end pattern can match across line breaks, but since the
	search for the pattern can start in any line it often does not do what
	you want.  The skip pattern doesn't avoid a match of an end pattern in
	the next line.	Use single-line patterns to avoid trouble.</div>
<div class="old-help-para">	Note: The decision to start a region is only based on a matching start
	pattern.  There is no check for a matching end pattern.  This does NOT
	work:<pre>:syn region First  start="("  end=":"
:syn region Second start="("  end=";"</pre></div>
<div class="old-help-para">	The Second always matches before the First (last defined pattern has
	higher priority).  The Second region then continues until the next
	';', no matter if there is a ':' before it.  Using a match does work:<pre>:syn match First  "(\_.\{-}:"
:syn match Second "(\_.\{-};"</pre></div>
<div class="old-help-para">	This pattern matches any character or line break with "\_." and
	repeats that with "\{-}" (repeat as few as possible).</div>
<div class="old-help-para">							<a name="%3Asyn-keepend"></a><code class="help-tag-right">:syn-keepend</code>
	By default, a contained match can obscure a match for the end pattern.
	This is useful for nesting.  For example, a region that starts with
	"{" and ends with "}", can contain another region.  An encountered "}"
	will then end the contained region, but not the outer region:
	    {		starts outer "{}" region
		{	starts contained "{}" region
		}	ends contained "{}" region
	    }		ends outer "{} region
	If you don't want this, the "keepend" argument will make the matching
	of an end pattern of the outer region also end any contained item.
	This makes it impossible to nest the same region, but allows for
	contained items to highlight parts of the end pattern, without causing
	that to skip the match with the end pattern.  Example:<pre>:syn match  vimComment +"[^"]\+$+
:syn region vimCommand start="set" end="$" contains=vimComment keepend</pre></div>
<div class="old-help-para">	The "keepend" makes the vimCommand always end at the end of the line,
	even though the contained vimComment includes a match with the <code>&lt;EOL&gt;</code>.</div>
<div class="old-help-para">	When "keepend" is not used, a match with an end pattern is retried
	after each contained match.  When "keepend" is included, the first
	encountered match with an end pattern is used, truncating any
	contained matches.
							<a name="%3Asyn-extend"></a><code class="help-tag-right">:syn-extend</code>
	The "keepend" behavior can be changed by using the "extend" argument.
	When an item with "extend" is contained in an item that uses
	"keepend", the "keepend" is ignored and the containing region will be
	extended.
	This can be used to have some contained items extend a region while
	others don't.  Example:<pre>:syn region htmlRef start=+&lt;a&gt;+ end=+&lt;/a&gt;+ keepend contains=htmlItem,htmlScript
:syn match htmlItem +&lt;[^&gt;]*&gt;+ contained
:syn region htmlScript start=+&lt;script+ end=+&lt;/script[^&gt;]*&gt;+ contained extend</pre></div>
<div class="old-help-para">	Here the htmlItem item does not make the htmlRef item continue
	further, it is only used to highlight the &lt;&gt; items.  The htmlScript
	item does extend the htmlRef item.</div>
<div class="old-help-para">	Another example:<pre>:syn region xmlFold start="&lt;a&gt;" end="&lt;/a&gt;" fold transparent keepend extend</pre></div>
<div class="old-help-para">	This defines a region with "keepend", so that its end cannot be
	changed by contained items, like when the "&lt;/a&gt;" is matched to
	highlight it differently.  But when the xmlFold region is nested (it
	includes itself), the "extend" applies, so that the "&lt;/a&gt;" of a nested
	region only ends that region, and not the one it is contained in.</div>
<div class="old-help-para">							<a name="%3Asyn-excludenl"></a><code class="help-tag-right">:syn-excludenl</code>
	When a pattern for a match or end pattern of a region includes a '$'
	to match the end-of-line, it will make a region item that it is
	contained in continue on the next line.  For example, a match with
	"\\$" (backslash at the end of the line) can make a region continue
	that would normally stop at the end of the line.  This is the default
	behavior.  If this is not wanted, there are two ways to avoid it:
	1. Use "keepend" for the containing item.  This will keep all
	   contained matches from extending the match or region.  It can be
	   used when all contained items must not extend the containing item.
	2. Use "excludenl" in the contained item.  This will keep that match
	   from extending the containing match or region.  It can be used if
	   only some contained items must not extend the containing item.
	   "excludenl" must be given before the pattern it applies to.</div>
<div class="old-help-para">							<a name="%3Asyn-matchgroup"></a><code class="help-tag-right">:syn-matchgroup</code>
	"matchgroup" can be used to highlight the start and/or end pattern
	differently than the body of the region.  Example:<pre>:syntax region String matchgroup=Quote start=+"+  skip=+\\"+        end=+"+</pre></div>
<div class="old-help-para">	This will highlight the quotes with the "Quote" group, and the text in
	between with the "String" group.
	The "matchgroup" is used for all start and end patterns that follow,
	until the next "matchgroup".  Use "matchgroup=NONE" to go back to not
	using a matchgroup.</div>
<div class="old-help-para">	In a start or end pattern that is highlighted with "matchgroup" the
	contained items of the region are not used.  This can be used to avoid
	that a contained item matches in the start or end pattern match.  When
	using "transparent", this does not apply to a start or end pattern
	match that is highlighted with "matchgroup".</div>
<div class="old-help-para">	Here is an example, which highlights three levels of parentheses in
	different colors:<pre>:sy region par1 matchgroup=par1 start=/(/ end=/)/ contains=par2
:sy region par2 matchgroup=par2 start=/(/ end=/)/ contains=par3 contained
:sy region par3 matchgroup=par3 start=/(/ end=/)/ contains=par1 contained
:hi par1 ctermfg=red guifg=red
:hi par2 ctermfg=blue guifg=blue
:hi par3 ctermfg=darkgreen guifg=darkgreen</pre></div>
<div class="old-help-para">						<a name="E849"></a><code class="help-tag-right">E849</code>
The maximum number of syntax groups is 19999.</div>
<div class="old-help-para"><h2 class="help-heading">7. :syntax arguments<span class="help-heading-tags">					<a name="%3Asyn-arguments"></a><span class="help-tag">:syn-arguments</span></span></h2></div>
<div class="old-help-para">The :syntax commands that define syntax items take a number of arguments.
The common ones are explained here.  The arguments may be given in any order
and may be mixed with patterns.</div>
<div class="old-help-para">Not all commands accept all arguments.	This table shows which arguments
can not be used for all commands:
							<a name="E395"></a><code class="help-tag-right">E395</code>
		    contains  oneline	fold  display  extend concealends~
:syntax keyword		 -		 -		 -		 -		 -      -
:syntax match		yes	 -		yes	yes	yes     -
:syntax region		yes	yes	yes	yes	yes    yes</div>
<div class="old-help-para">These arguments can be used for all three commands:
	conceal
	cchar
	contained
	containedin
	nextgroup
	transparent
	skipwhite
	skipnl
	skipempty</div>
<div class="old-help-para">conceal						<a name="conceal"></a><code class="help-tag-right">conceal</code> <a name="%3Asyn-conceal"></a><code class="help-tag">:syn-conceal</code></div>
<div class="old-help-para">When the "conceal" argument is given, the item is marked as concealable.
Whether or not it is actually concealed depends on the value of the
<a href="/neovim-docs-web/en/options#'conceallevel'">'conceallevel'</a> option.  The <a href="/neovim-docs-web/en/options#'concealcursor'">'concealcursor'</a> option is used to decide whether
concealable items in the current line are displayed unconcealed to be able to
edit the line.
Another way to conceal text is with <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a>.</div>
<div class="old-help-para">concealends						<a name="%3Asyn-concealends"></a><code class="help-tag-right">:syn-concealends</code></div>
<div class="old-help-para">When the "concealends" argument is given, the start and end matches of
the region, but not the contents of the region, are marked as concealable.
Whether or not they are actually concealed depends on the setting on the
<a href="/neovim-docs-web/en/options#'conceallevel'">'conceallevel'</a> option. The ends of a region can only be concealed separately
in this way when they have their own highlighting via "matchgroup"</div>
<div class="old-help-para">cchar							<a name="%3Asyn-cchar"></a><code class="help-tag-right">:syn-cchar</code>
							<a name="E844"></a><code class="help-tag-right">E844</code>
The "cchar" argument defines the character shown in place of the item
when it is concealed (setting "cchar" only makes sense when the conceal
argument is given.) If "cchar" is not set then the default conceal
character defined in the <a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a> option is used.  The character cannot be
a control character such as Tab.  Example:<pre>:syntax match Entity "&amp;amp;" conceal cchar=&amp;</pre>
See <a href="/neovim-docs-web/en/syntax#hl-Conceal">hl-Conceal</a> for highlighting.</div>
<div class="old-help-para">contained						<a name="%3Asyn-contained"></a><code class="help-tag-right">:syn-contained</code></div>
<div class="old-help-para">When the "contained" argument is given, this item will not be recognized at
the top level, but only when it is mentioned in the "contains" field of
another match.	Example:<pre>:syntax keyword Todo    TODO    contained
:syntax match   Comment "//.*"  contains=Todo</pre>
display							<a name="%3Asyn-display"></a><code class="help-tag-right">:syn-display</code></div>
<div class="old-help-para">If the "display" argument is given, this item will be skipped when the
detected highlighting will not be displayed.  This will speed up highlighting,
by skipping this item when only finding the syntax state for the text that is
to be displayed.</div>
<div class="old-help-para">Generally, you can use "display" for match and region items that meet these
conditions:
<div class="help-li" style=""> The item does not continue past the end of a line.  Example for C: A region
  for a "/*" comment can't contain "display", because it continues on the next
  line.
</div><div class="help-li" style=""> The item does not contain items that continue past the end of the line or
  make it continue on the next line.
</div><div class="help-li" style=""> The item does not change the size of any item it is contained in.  Example
  for C: A match with "\\$" in a preprocessor match can't have "display",
  because it may make that preprocessor match shorter.
</div><div class="help-li" style=""> The item does not allow other items to match that didn't match otherwise,
  and that item may extend the match too far.  Example for C: A match for a
  "//" comment can't use "display", because a "/*" inside that comment would
  match then and start a comment which extends past the end of the line.
</div></div>
<div class="old-help-para">Examples, for the C language, where "display" can be used:
<div class="help-li" style=""> match with a number
</div><div class="help-li" style=""> match with a label
</div></div>
<div class="old-help-para">transparent						<a name="%3Asyn-transparent"></a><code class="help-tag-right">:syn-transparent</code></div>
<div class="old-help-para">If the "transparent" argument is given, this item will not be highlighted
itself, but will take the highlighting of the item it is contained in.	This
is useful for syntax items that don't need any highlighting but are used
only to skip over a part of the text.</div>
<div class="old-help-para">The "contains=" argument is also inherited from the item it is contained in,
unless a "contains" argument is given for the transparent item itself.	To
avoid that unwanted items are contained, use "contains=NONE".  Example, which
highlights words in strings, but makes an exception for "vim":<pre>:syn match myString /'[^']*'/ contains=myWord,myVim
:syn match myWord   /\&lt;[a-z]*\&gt;/ contained
:syn match myVim    /\&lt;vim\&gt;/ transparent contained contains=NONE
:hi link myString String
:hi link myWord   Comment</pre>
Since the "myVim" match comes after "myWord" it is the preferred match (last
match in the same position overrules an earlier one).  The "transparent"
argument makes the "myVim" match use the same highlighting as "myString".  But
it does not contain anything.  If the "contains=NONE" argument would be left
out, then "myVim" would use the contains argument from myString and allow
"myWord" to be contained, which will be highlighted as a Comment.  This
happens because a contained match doesn't match inside itself in the same
position, thus the "myVim" match doesn't overrule the "myWord" match here.</div>
<div class="old-help-para">When you look at the colored text, it is like looking at layers of contained
items.	The contained item is on top of the item it is contained in, thus you
see the contained item.  When a contained item is transparent, you can look
through, thus you see the item it is contained in.  In a picture:</div>
<div class="old-help-para">		look from here</div>
<div class="old-help-para">	    |	|   |	|   |	|
	    V	V   V	V   V	V</div>
<div class="old-help-para">	       xxxx	  yyy		more contained items
	    ....................	contained item (transparent)
	=============================	first item</div>
<div class="old-help-para">The 'x', 'y' and '=' represent a highlighted syntax item.  The '.' represent a
transparent group.</div>
<div class="old-help-para">What you see is:</div>
<div class="old-help-para">	=======xxxx=======yyy========</div>
<div class="old-help-para">Thus you look through the transparent "....".</div>
<div class="old-help-para">oneline							<a name="%3Asyn-oneline"></a><code class="help-tag-right">:syn-oneline</code></div>
<div class="old-help-para">The "oneline" argument indicates that the region does not cross a line
boundary.  It must match completely in the current line.  However, when the
region has a contained item that does cross a line boundary, it continues on
the next line anyway.  A contained item can be used to recognize a line
continuation pattern.  But the "end" pattern must still match in the first
line, otherwise the region doesn't even start.</div>
<div class="old-help-para">When the start pattern includes a "\n" to match an end-of-line, the end
pattern must be found in the same line as where the start pattern ends.  The
end pattern may also include an end-of-line.  Thus the "oneline" argument
means that the end of the start pattern and the start of the end pattern must
be within one line.  This can't be changed by a skip pattern that matches a
line break.</div>
<div class="old-help-para">fold							<a name="%3Asyn-fold"></a><code class="help-tag-right">:syn-fold</code></div>
<div class="old-help-para">The "fold" argument makes the fold level increase by one for this item.
Example:<pre>:syn region myFold start="{" end="}" transparent fold
:syn sync fromstart
:set foldmethod=syntax</pre>
This will make each {} block form one fold.</div>
<div class="old-help-para">The fold will start on the line where the item starts, and end where the item
ends.  If the start and end are within the same line, there is no fold.
The <a href="/neovim-docs-web/en/options#'foldnestmax'">'foldnestmax'</a> option limits the nesting of syntax folds.
See <a href="/neovim-docs-web/en/syntax#%3Asyn-foldlevel">:syn-foldlevel</a> to control how the foldlevel of a line is computed
from its syntax items.</div>
<div class="old-help-para">			<a name="%3Asyn-contains"></a><code class="help-tag-right">:syn-contains</code> <a name="E405"></a><code class="help-tag">E405</code> <a name="E406"></a><code class="help-tag">E406</code> <a name="E407"></a><code class="help-tag">E407</code> <a name="E408"></a><code class="help-tag">E408</code> <a name="E409"></a><code class="help-tag">E409</code>
contains={group-name},..</div>
<div class="old-help-para">The "contains" argument is followed by a list of syntax group names.  These
groups will be allowed to begin inside the item (they may extend past the
containing group's end).  This allows for recursive nesting of matches and
regions.  If there is no "contains" argument, no groups will be contained in
this item.  The group names do not need to be defined before they can be used
here.</div>
<div class="old-help-para">contains=ALL
		If the only item in the contains list is "ALL", then all
		groups will be accepted inside the item.</div>
<div class="old-help-para">contains=ALLBUT,{group-name},..
		If the first item in the contains list is "ALLBUT", then all
		groups will be accepted inside the item, except the ones that
		are listed.  Example:<pre>:syntax region Block start="{" end="}" ... contains=ALLBUT,Function</pre>
contains=TOP
		If the first item in the contains list is "TOP", then all
		groups will be accepted that don't have the "contained"
		argument.
contains=TOP,{group-name},..
		Like "TOP", but excluding the groups that are listed.</div>
<div class="old-help-para">contains=CONTAINED
		If the first item in the contains list is "CONTAINED", then
		all groups will be accepted that have the "contained"
		argument.
contains=CONTAINED,{group-name},..
		Like "CONTAINED", but excluding the groups that are
		listed.</div>
<div class="old-help-para">The <code>{group-name}</code> in the "contains" list can be a pattern.  All group names
that match the pattern will be included (or excluded, if "ALLBUT" is used).
The pattern cannot contain white space or a ','.  Example:<pre>... contains=Comment.*,Keyw[0-3]</pre>
The matching will be done at moment the syntax command is executed.  Groups
that are defined later will not be matched.  Also, if the current syntax
command defines a new group, it is not matched.  Be careful: When putting
syntax commands in a file you can't rely on groups NOT being defined, because
the file may have been sourced before, and ":syn clear" doesn't remove the
group names.</div>
<div class="old-help-para">The contained groups will also match in the start and end patterns of a
region.  If this is not wanted, the "matchgroup" argument can be used
<a href="/neovim-docs-web/en/syntax#%3Asyn-matchgroup">:syn-matchgroup</a>.  The "ms=" and "me=" offsets can be used to change the
region where contained items do match.	Note that this may also limit the
area that is highlighted</div>
<div class="old-help-para">containedin={group-name}...				<a name="%3Asyn-containedin"></a><code class="help-tag-right">:syn-containedin</code></div>
<div class="old-help-para">The "containedin" argument is followed by a list of syntax group names.  The
item will be allowed to begin inside these groups.  This works as if the
containing item has a "contains=" argument that includes this item.</div>
<div class="old-help-para">The <code>{group-name}</code>... can be used just like for "contains", as explained above.</div>
<div class="old-help-para">This is useful when adding a syntax item afterwards.  An item can be told to
be included inside an already existing item, without changing the definition
of that item.  For example, to highlight a word in a C comment after loading
the C syntax:<pre>:syn keyword myword HELP containedin=cComment contained</pre>
Note that "contained" is also used, to avoid that the item matches at the top
level.</div>
<div class="old-help-para">Matches for "containedin" are added to the other places where the item can
appear.  A "contains" argument may also be added as usual.  Don't forget that
keywords never contain another item, thus adding them to "containedin" won't
work.</div>
<div class="old-help-para">nextgroup={group-name},..				<a name="%3Asyn-nextgroup"></a><code class="help-tag-right">:syn-nextgroup</code></div>
<div class="old-help-para">The "nextgroup" argument is followed by a list of syntax group names,
separated by commas (just like with "contains", so you can also use patterns).</div>
<div class="old-help-para">If the "nextgroup" argument is given, the mentioned syntax groups will be
tried for a match, after the match or region ends.  If none of the groups have
a match, highlighting continues normally.  If there is a match, this group
will be used, even when it is not mentioned in the "contains" field of the
current group.	This is like giving the mentioned group priority over all
other groups.  Example:<pre>:syntax match  ccFoobar  "Foo.\{-}Bar"  contains=ccFoo
:syntax match  ccFoo     "Foo"            contained nextgroup=ccFiller
:syntax region ccFiller  start="."  matchgroup=ccBar  end="Bar"  contained</pre>
This will highlight "Foo" and "Bar" differently, and only when there is a
"Bar" after "Foo".  In the text line below, "f" shows where ccFoo is used for
highlighting, and "bbb" where ccBar is used.<pre>Foo asdfasd Bar asdf Foo asdf Bar asdf
fff               bbb        fff         bbb</pre>
Note the use of ".\{-}" to skip as little as possible until the next Bar.
when ".*" would be used, the "asdf" in between "Bar" and "Foo" would be
highlighted according to the "ccFoobar" group, because the ccFooBar match
would include the first "Foo" and the last "Bar" in the line (see <a href="/neovim-docs-web/en/pattern#pattern">pattern</a>).</div>
<div class="old-help-para">skipwhite						<a name="%3Asyn-skipwhite"></a><code class="help-tag-right">:syn-skipwhite</code>
skipnl							<a name="%3Asyn-skipnl"></a><code class="help-tag-right">:syn-skipnl</code>
skipempty						<a name="%3Asyn-skipempty"></a><code class="help-tag-right">:syn-skipempty</code></div>
<div class="old-help-para">These arguments are only used in combination with "nextgroup".	They can be
used to allow the next group to match after skipping some text:
	skipwhite	skip over space and tab characters
	skipnl		skip over the end of a line
	skipempty	skip over empty lines (implies a "skipnl")</div>
<div class="old-help-para">When "skipwhite" is present, the white space is only skipped if there is no
next group that matches the white space.</div>
<div class="old-help-para">When "skipnl" is present, the match with nextgroup may be found in the next
line.  This only happens when the current item ends at the end of the current
line!  When "skipnl" is not present, the nextgroup will only be found after
the current item in the same line.</div>
<div class="old-help-para">When skipping text while looking for a next group, the matches for other
groups are ignored.  Only when no next group matches, other items are tried
for a match again.  This means that matching a next group and skipping white
space and <code>&lt;EOL&gt;</code>s has a higher priority than other items.</div>
<div class="old-help-para">Example:<pre>:syn match ifstart "\&lt;if.*"          nextgroup=ifline skipwhite skipempty
:syn match ifline  "[^ \t].*" nextgroup=ifline skipwhite skipempty contained
:syn match ifline  "endif"        contained</pre>
Note that the "[^ \t].*" match matches all non-white text.  Thus it would also
match "endif".	Therefore the "endif" match is put last, so that it takes
precedence.
Note that this example doesn't work for nested "if"s.  You need to add
"contains" arguments to make that work (omitted for simplicity of the
example).</div>
<div class="old-help-para"><h3 class="help-heading">IMPLICIT CONCEAL<span class="help-heading-tags">					<a name="%3Asyn-conceal-implicit"></a><span class="help-tag">:syn-conceal-implicit</span></span></h3></div>
<div class="old-help-para">:sy[ntax] conceal [on|off]
	This defines if the following ":syntax" commands will define keywords,
	matches or regions with the "conceal" flag set. After ":syn conceal
	on", all subsequent ":syn keyword", ":syn match" or ":syn region"
	defined will have the "conceal" flag set implicitly. ":syn conceal
	off" returns to the normal state where the "conceal" flag must be
	given explicitly.</div>
<div class="old-help-para">:sy[ntax] conceal
	Show either "syntax conceal on" or "syntax conceal off".</div>
<div class="old-help-para"><h2 class="help-heading">8. Syntax patterns<span class="help-heading-tags">				<a name="%3Asyn-pattern"></a><span class="help-tag">:syn-pattern</span> <a name="E401"></a><span class="help-tag">E401</span> <a name="E402"></a><span class="help-tag">E402</span></span></h2></div>
<div class="old-help-para">In the syntax commands, a pattern must be surrounded by two identical
characters.  This is like it works for the ":s" command.  The most common to
use is the double quote.  But if the pattern contains a double quote, you can
use another character that is not used in the pattern.	Examples:<pre>:syntax region Comment  start="/\*"  end="\*/"
:syntax region String   start=+"+    end=+"+         skip=+\\"+</pre>
See <a href="/neovim-docs-web/en/pattern#pattern">pattern</a> for the explanation of what a pattern is.  Syntax patterns are
always interpreted like the <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> option is set, no matter what the actual
value of <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> is.  And the patterns are interpreted like the 'l' flag is
not included in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.  This was done to make syntax files portable and
independent of the <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> setting.</div>
<div class="old-help-para">Try to avoid patterns that can match an empty string, such as "[a-z]*".
This slows down the highlighting a lot, because it matches everywhere.</div>
<div class="old-help-para">						<a name="%3Asyn-pattern-offset"></a><code class="help-tag-right">:syn-pattern-offset</code>
The pattern can be followed by a character offset.  This can be used to
change the highlighted part, and to change the text area included in the
match or region (which only matters when trying to match other items).	Both
are relative to the matched pattern.  The character offset for a skip
pattern can be used to tell where to continue looking for an end pattern.</div>
<div class="old-help-para">The offset takes the form of "{what}={offset}"
The <code>{what}</code> can be one of seven strings:</div>
<div class="old-help-para">ms	Match Start	offset for the start of the matched text
me	Match End	offset for the end of the matched text
hs	Highlight Start	offset for where the highlighting starts
he	Highlight End	offset for where the highlighting ends
rs	Region Start	offset for where the body of a region starts
re	Region End	offset for where the body of a region ends
lc	Leading Context	offset past "leading context" of pattern</div>
<div class="old-help-para">The <code>{offset}</code> can be:</div>
<div class="old-help-para">s	start of the matched pattern
s+{nr}	start of the matched pattern plus <code>{nr}</code> chars to the right
s-{nr}	start of the matched pattern plus <code>{nr}</code> chars to the left
e	end of the matched pattern
e+{nr}	end of the matched pattern plus <code>{nr}</code> chars to the right
e-{nr}	end of the matched pattern plus <code>{nr}</code> chars to the left
<code>{nr}</code>	(for "lc" only): start matching <code>{nr}</code> chars right of the start</div>
<div class="old-help-para">Examples: "ms=s+1", "hs=e-2", "lc=3".</div>
<div class="old-help-para">Although all offsets are accepted after any pattern, they are not always
meaningful.  This table shows which offsets are actually used:</div>
<div class="old-help-para"><div class="help-column_heading">		    ms	 me   hs   he	rs   re	  lc</div>match item	    yes  yes  yes  yes	-    -		  yes
region item start   yes  -    yes  -		yes  -		  yes
region item skip    -		 yes  -    -		-    -		  yes
region item end     -		 yes  -    yes	-    yes  yes</div>
<div class="old-help-para">Offsets can be concatenated, with a ',' in between.  Example:<pre>:syn match String  /"[^"]*"/hs=s+1,he=e-1</pre></div>
<div class="old-help-para">    some "string" text
	  ^^^^^^		highlighted</div>
<div class="old-help-para">Notes:
<div class="help-li" style=""> There must be no white space between the pattern and the character
  offset(s).
</div><div class="help-li" style=""> The highlighted area will never be outside of the matched text.
</div><div class="help-li" style=""> A negative offset for an end pattern may not always work, because the end
  pattern may be detected when the highlighting should already have stopped.
</div><div class="help-li" style=""> Before Vim 7.2 the offsets were counted in bytes instead of characters.
  This didn't work well for multibyte characters, so it was changed with the
  Vim 7.2 release.
</div><div class="help-li" style=""> The start of a match cannot be in a line other than where the pattern
  matched.  This doesn't work: "a\nb"ms=e.  You can make the highlighting
  start in another line, this does work: "a\nb"hs=e.
</div></div>
<div class="old-help-para">Example (match a comment but don't highlight the /* and/):<pre>:syntax region Comment start="/\*"hs=e+1 end="\*/"he=s-1</pre></div>
<div class="old-help-para">	/* this is a comment */	  ^^^^^^^^^^^^^^^^^^^	  highlighted</div>
<div class="old-help-para">A more complicated Example:<pre>:syn region Exa matchgroup=Foo start="foo"hs=s+2,rs=e+2 matchgroup=Bar end="bar"me=e-1,he=e-1,re=s-1</pre></div>
<div class="old-help-para">	 abcfoostringbarabc
	    mmmmmmmmmmm	    match
	      sssrrreee	    highlight start/region/end ("Foo", "Exa" and "Bar")</div>
<div class="old-help-para">Leading context			<a name="%3Asyn-lc"></a><code class="help-tag-right">:syn-lc</code> <a name="%3Asyn-leading"></a><code class="help-tag">:syn-leading</code> <a name="%3Asyn-context"></a><code class="help-tag">:syn-context</code></div>
<div class="old-help-para">Note: This is an obsolete feature, only included for backwards compatibility
with previous Vim versions.  It's now recommended to use the <a href="/neovim-docs-web/en/pattern#%2F%5C%40%3C%3D">/\@&lt;=</a> construct
in the pattern.  You can also often use <a href="/neovim-docs-web/en/pattern#%2F%5Czs">/\zs</a>.</div>
<div class="old-help-para">The "lc" offset specifies leading context -- a part of the pattern that must
be present, but is not considered part of the match.  An offset of "lc=n" will
cause Vim to step back n columns before attempting the pattern match, allowing
characters which have already been matched in previous patterns to also be
used as leading context for this match.  This can be used, for instance, to
specify that an "escaping" character must not precede the match:<pre>:syn match ZNoBackslash "[^\\]z"ms=s+1
:syn match WNoBackslash "[^\\]w"lc=1
:syn match Underline "_\+"</pre></div>
<div class="old-help-para">	  ___zzzz ___wwww
	  ^^^	  ^^^	  matches Underline
	      ^ ^	  matches ZNoBackslash
		     ^^^^ matches WNoBackslash</div>
<div class="old-help-para">The "ms" offset is automatically set to the same value as the "lc" offset,
unless you set "ms" explicitly.</div>
<div class="old-help-para">Multi-line patterns					<a name="%3Asyn-multi-line"></a><code class="help-tag-right">:syn-multi-line</code></div>
<div class="old-help-para">The patterns can include "\n" to match an end-of-line.	Mostly this works as
expected, but there are a few exceptions.</div>
<div class="old-help-para">When using a start pattern with an offset, the start of the match is not
allowed to start in a following line.  The highlighting can start in a
following line though.  Using the "\zs" item also requires that the start of
the match doesn't move to another line.</div>
<div class="old-help-para">The skip pattern can include the "\n", but the search for an end pattern will
continue in the first character of the next line, also when that character is
matched by the skip pattern.  This is because redrawing may start in any line
halfway in a region and there is no check if the skip pattern started in a
previous line. For example, if the skip pattern is "a\nb" and an end pattern
is "b", the end pattern does match in the second line of this:<pre>x x a
b x x</pre>
Generally this means that the skip pattern should not match any characters
after the "\n".</div>
<div class="old-help-para">External matches					<a name="%3Asyn-ext-match"></a><code class="help-tag-right">:syn-ext-match</code></div>
<div class="old-help-para">These extra regular expression items are available in region patterns:</div>
<div class="old-help-para">					<a name="%2F%5Cz("></a><code class="help-tag-right">/\z(</code> <a name="%2F%5Cz(%5C)"></a><code class="help-tag">/\z(\)</code> <a name="E50"></a><code class="help-tag">E50</code> <a name="E52"></a><code class="help-tag">E52</code> <a name="E879"></a><code class="help-tag">E879</code>
    \z(\)	Marks the sub-expression as "external", meaning that it can be
		accessed from another pattern match.  Currently only usable in
		defining a syntax region start pattern.</div>
<div class="old-help-para">					<a name="%2F%5Cz1"></a><code class="help-tag-right">/\z1</code> <a name="%2F%5Cz2"></a><code class="help-tag">/\z2</code> <a name="%2F%5Cz3"></a><code class="help-tag">/\z3</code> <a name="%2F%5Cz4"></a><code class="help-tag">/\z4</code> <a name="%2F%5Cz5"></a><code class="help-tag">/\z5</code>
    \z1  ...  \z9			<a name="%2F%5Cz6"></a><code class="help-tag-right">/\z6</code> <a name="%2F%5Cz7"></a><code class="help-tag">/\z7</code> <a name="%2F%5Cz8"></a><code class="help-tag">/\z8</code> <a name="%2F%5Cz9"></a><code class="help-tag">/\z9</code> <a name="E66"></a><code class="help-tag">E66</code> <a name="E67"></a><code class="help-tag">E67</code>
		Matches the same string that was matched by the corresponding
		sub-expression in a previous start pattern match.</div>
<div class="old-help-para">Sometimes the start and end patterns of a region need to share a common
sub-expression.  A common example is the "here" document in Perl and many Unix
shells.  This effect can be achieved with the "\z" special regular expression
items, which marks a sub-expression as "external", in the sense that it can be
referenced from outside the pattern in which it is defined.  The here-document
example, for instance, can be done like this:<pre>:syn region hereDoc start="&lt;&lt;\z(\I\i*\)" end="^\z1$"</pre>
As can be seen here, the \z actually does double duty.	In the start pattern,
it marks the "\(\I\i*\)" sub-expression as external; in the end pattern, it
changes the \z1 back-reference into an external reference referring to the
first external sub-expression in the start pattern.  External references can
also be used in skip patterns:<pre>:syn region foo start="start \z(\I\i*\)" skip="not end \z1" end="end \z1"</pre>
Note that normal and external sub-expressions are completely orthogonal and
indexed separately; for instance, if the pattern "\z(..\)\(..\)" is applied
to the string "aabb", then \1 will refer to "bb" and \z1 will refer to "aa".
Note also that external sub-expressions cannot be accessed as back-references
within the same pattern like normal sub-expressions.  If you want to use one
sub-expression as both a normal and an external sub-expression, you can nest
the two, as in "\(\z(...\)\)".</div>
<div class="old-help-para">Note that only matches within a single line can be used.  Multi-line matches
cannot be referred to.</div>
<div class="old-help-para"><h2 class="help-heading">9. Syntax clusters<span class="help-heading-tags">					<a name="%3Asyn-cluster"></a><span class="help-tag">:syn-cluster</span> <a name="E400"></a><span class="help-tag">E400</span></span></h2></div>
<div class="old-help-para">:sy[ntax] cluster <code>{cluster-name}</code> [contains={group-name}..]
				 [add={group-name}..]
				 [remove={group-name}..]</div>
<div class="old-help-para">This command allows you to cluster a list of syntax groups together under a
single name.</div>
<div class="old-help-para">	contains={group-name}..
		The cluster is set to the specified list of groups.
	add={group-name}..
		The specified groups are added to the cluster.
	remove={group-name}..
		The specified groups are removed from the cluster.</div>
<div class="old-help-para">A cluster so defined may be referred to in a contains=.., containedin=..,
nextgroup=.., add=..  or remove=.. list with a "@" prefix.  You can also use
this notation to implicitly declare a cluster before specifying its contents.</div>
<div class="old-help-para">Example:<pre>:syntax match Thing "# [^#]\+ #" contains=@ThingMembers
:syntax cluster ThingMembers contains=ThingMember1,ThingMember2</pre>
As the previous example suggests, modifications to a cluster are effectively
retroactive; the membership of the cluster is checked at the last minute, so
to speak:<pre>:syntax keyword A aaa
:syntax keyword B bbb
:syntax cluster AandB contains=A
:syntax match Stuff "( aaa bbb )" contains=@AandB
:syntax cluster AandB add=B          " now both keywords are matched in Stuff</pre>
This also has implications for nested clusters:<pre>:syntax keyword A aaa
:syntax keyword B bbb
:syntax cluster SmallGroup contains=B
:syntax cluster BigGroup contains=A,@SmallGroup
:syntax match Stuff "( aaa bbb )" contains=@BigGroup
:syntax cluster BigGroup remove=B        " no effect, since B isn't in BigGroup
:syntax cluster SmallGroup remove=B        " now bbb isn't matched within Stuff</pre></div>
<div class="old-help-para">						<a name="E848"></a><code class="help-tag-right">E848</code>
The maximum number of clusters is 9767.</div>
<div class="old-help-para"><h2 class="help-heading">10. Including syntax files<span class="help-heading-tags">				<a name="%3Asyn-include"></a><span class="help-tag">:syn-include</span> <a name="E397"></a><span class="help-tag">E397</span></span></h2></div>
<div class="old-help-para">It is often useful for one language's syntax file to include a syntax file for
a related language.  Depending on the exact relationship, this can be done in
two different ways:</div>
<div class="old-help-para"><div class="help-li" style=""> If top-level syntax items in the included syntax file are to be
	  allowed at the top level in the including syntax, you can simply use
	  the <a href="/neovim-docs-web/en/repeat#%3Aruntime">:runtime</a> command:<pre>" In cpp.vim:
:runtime! syntax/c.vim
:unlet b:current_syntax</pre>
</div><div class="help-li" style=""> If top-level syntax items in the included syntax file are to be
	  contained within a region in the including syntax, you can use the
	  ":syntax include" command:
</div></div>
<div class="old-help-para">:sy[ntax] include [@{grouplist-name}] <code>{file-name}</code></div>
<div class="old-help-para">	  All syntax items declared in the included file will have the
	  "contained" flag added.  In addition, if a group list is specified,
	  all top-level syntax items in the included file will be added to
	  that list.<pre>" In perl.vim:
:syntax include @Pod &lt;sfile&gt;:p:h/pod.vim
:syntax region perlPOD start="^=head" end="^=cut" contains=@Pod</pre></div>
<div class="old-help-para">	  When <code>{file-name}</code> is an absolute path (starts with "/", "c:", "$VAR"
	  or "&lt;sfile&gt;") that file is sourced.  When it is a relative path
	  (e.g., "syntax/pod.vim") the file is searched for in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.
	  All matching files are loaded.  Using a relative path is
	  recommended, because it allows a user to replace the included file
	  with their own version, without replacing the file that does the
	  ":syn include".</div>
<div class="old-help-para">						<a name="E847"></a><code class="help-tag-right">E847</code>
The maximum number of includes is 999.</div>
<div class="old-help-para"><h2 class="help-heading">11. Synchronizing<span class="help-heading-tags">				<a name="%3Asyn-sync"></a><span class="help-tag">:syn-sync</span> <a name="E403"></a><span class="help-tag">E403</span> <a name="E404"></a><span class="help-tag">E404</span></span></h2></div>
<div class="old-help-para">Vim wants to be able to start redrawing in any position in the document.  To
make this possible it needs to know the syntax state at the position where
redrawing starts.</div>
<div class="old-help-para">:sy[ntax] sync [ccomment [group-name] | minlines={N} | ...]</div>
<div class="old-help-para">There are four ways to synchronize:
1. Always parse from the start of the file.
   <a href="/neovim-docs-web/en/syntax#%3Asyn-sync-first">:syn-sync-first</a>
2. Based on C-style comments.  Vim understands how C-comments work and can
   figure out if the current line starts inside or outside a comment.
   <a href="/neovim-docs-web/en/syntax#%3Asyn-sync-second">:syn-sync-second</a>
3. Jumping back a certain number of lines and start parsing there.
   <a href="/neovim-docs-web/en/syntax#%3Asyn-sync-third">:syn-sync-third</a>
4. Searching backwards in the text for a pattern to sync on.
   <a href="/neovim-docs-web/en/syntax#%3Asyn-sync-fourth">:syn-sync-fourth</a></div>
<div class="old-help-para">				<a name="%3Asyn-sync-maxlines"></a><code class="help-tag-right">:syn-sync-maxlines</code> <a name="%3Asyn-sync-minlines"></a><code class="help-tag">:syn-sync-minlines</code>
For the last three methods, the line range where the parsing can start is
limited by "minlines" and "maxlines".</div>
<div class="old-help-para">If the "minlines={N}" argument is given, the parsing always starts at least
that many lines backwards.  This can be used if the parsing may take a few
lines before it's correct, or when it's not possible to use syncing.</div>
<div class="old-help-para">If the "maxlines={N}" argument is given, the number of lines that are searched
for a comment or syncing pattern is restricted to N lines backwards (after
adding "minlines").  This is useful if you have few things to sync on and a
slow machine.  Example:<pre>:syntax sync maxlines=500 ccomment</pre></div>
<div class="old-help-para">						<a name="%3Asyn-sync-linebreaks"></a><code class="help-tag-right">:syn-sync-linebreaks</code>
When using a pattern that matches multiple lines, a change in one line may
cause a pattern to no longer match in a previous line.	This means has to
start above where the change was made.	How many lines can be specified with
the "linebreaks" argument.  For example, when a pattern may include one line
break use this:<pre>:syntax sync linebreaks=1</pre>
The result is that redrawing always starts at least one line before where a
change was made.  The default value for "linebreaks" is zero.  Usually the
value for "minlines" is bigger than "linebreaks".</div>
<div class="old-help-para">First syncing method:			<a name="%3Asyn-sync-first"></a><code class="help-tag-right">:syn-sync-first</code>
<pre>:syntax sync fromstart</pre>
The file will be parsed from the start.  This makes syntax highlighting
accurate, but can be slow for long files.  Vim caches previously parsed text,
so that it's only slow when parsing the text for the first time.  However,
when making changes some part of the text needs to be parsed again (worst
case: to the end of the file).</div>
<div class="old-help-para">Using "fromstart" is equivalent to using "minlines" with a very large number.</div>
<div class="old-help-para">Second syncing method:			<a name="%3Asyn-sync-second"></a><code class="help-tag-right">:syn-sync-second</code> <a name="%3Asyn-sync-ccomment"></a><code class="help-tag">:syn-sync-ccomment</code></div>
<div class="old-help-para">For the second method, only the "ccomment" argument needs to be given.
Example:<pre>:syntax sync ccomment</pre>
When Vim finds that the line where displaying starts is inside a C-style
comment, the last region syntax item with the group-name "Comment" will be
used.  This requires that there is a region with the group-name "Comment"!
An alternate group name can be specified, for example:<pre>:syntax sync ccomment javaComment</pre>
This means that the last item specified with "syn region javaComment" will be
used for the detected C comment region.  This only works properly if that
region does have a start pattern "\/*" and an end pattern "*\/".</div>
<div class="old-help-para">The "maxlines" argument can be used to restrict the search to a number of
lines.	The "minlines" argument can be used to at least start a number of
lines back (e.g., for when there is some construct that only takes a few
lines, but it hard to sync on).</div>
<div class="old-help-para">Note: Syncing on a C comment doesn't work properly when strings are used
that cross a line and contain a "*/".  Since letting strings cross a line
is a bad programming habit (many compilers give a warning message), and the
chance of a "*/" appearing inside a comment is very small, this restriction
is hardly ever noticed.</div>
<div class="old-help-para">Third syncing method:				<a name="%3Asyn-sync-third"></a><code class="help-tag-right">:syn-sync-third</code></div>
<div class="old-help-para">For the third method, only the "minlines={N}" argument needs to be given.
Vim will subtract <code>{N}</code> from the line number and start parsing there.  This
means <code>{N}</code> extra lines need to be parsed, which makes this method a bit slower.
Example:<pre>:syntax sync minlines=50</pre>
"lines" is equivalent to "minlines" (used by older versions).</div>
<div class="old-help-para">Fourth syncing method:				<a name="%3Asyn-sync-fourth"></a><code class="help-tag-right">:syn-sync-fourth</code></div>
<div class="old-help-para">The idea is to synchronize on the end of a few specific regions, called a
sync pattern.  Only regions can cross lines, so when we find the end of some
region, we might be able to know in which syntax item we are.  The search
starts in the line just above the one where redrawing starts.  From there
the search continues backwards in the file.</div>
<div class="old-help-para">This works just like the non-syncing syntax items.  You can use contained
matches, nextgroup, etc.  But there are a few differences:
<div class="help-li" style=""> Keywords cannot be used.
</div><div class="help-li" style=""> The syntax items with the "sync" keyword form a completely separated group
  of syntax items.  You can't mix syncing groups and non-syncing groups.
</div><div class="help-li" style=""> The matching works backwards in the buffer (line by line), instead of
  forwards.
</div><div class="help-li" style=""> A line continuation pattern can be given.  It is used to decide which group
  of lines need to be searched like they were one line.  This means that the
  search for a match with the specified items starts in the first of the
  consecutive lines that contain the continuation pattern.
</div><div class="help-li" style=""> When using "nextgroup" or "contains", this only works within one line (or
  group of continued lines).
</div><div class="help-li" style=""> When using a region, it must start and end in the same line (or group of
  continued lines).  Otherwise the end is assumed to be at the end of the
  line (or group of continued lines).
</div><div class="help-li" style=""> When a match with a sync pattern is found, the rest of the line (or group of
  continued lines) is searched for another match.  The last match is used.
  This is used when a line can contain both the start end the end of a region
  (e.g., in a C-comment like /* this/, the last "*/" is used).
</div></div>
<div class="old-help-para">There are two ways how a match with a sync pattern can be used:
1. Parsing for highlighting starts where redrawing starts (and where the
   search for the sync pattern started).  The syntax group that is expected
   to be valid there must be specified.  This works well when the regions
   that cross lines cannot contain other regions.
2. Parsing for highlighting continues just after the match.  The syntax group
   that is expected to be present just after the match must be specified.
   This can be used when the previous method doesn't work well.  It's much
   slower, because more text needs to be parsed.
Both types of sync patterns can be used at the same time.</div>
<div class="old-help-para">Besides the sync patterns, other matches and regions can be specified, to
avoid finding unwanted matches.</div>
<div class="old-help-para">[The reason that the sync patterns are given separately, is that mostly the
search for the sync point can be much simpler than figuring out the
highlighting.  The reduced number of patterns means it will go (much)
faster.]</div>
<div class="old-help-para">					    <a name="syn-sync-grouphere"></a><code class="help-tag-right">syn-sync-grouphere</code> <a name="E393"></a><code class="help-tag">E393</code> <a name="E394"></a><code class="help-tag">E394</code>
    :syntax sync match <code>{sync-group-name}</code> grouphere <code>{group-name}</code> "pattern" ..</div>
<div class="old-help-para">	Define a match that is used for syncing.  <code>{group-name}</code> is the
	name of a syntax group that follows just after the match.  Parsing
	of the text for highlighting starts just after the match.  A region
	must exist for this <code>{group-name}</code>.  The first one defined will be used.
	"NONE" can be used for when there is no syntax group after the match.</div>
<div class="old-help-para">						<a name="syn-sync-groupthere"></a><code class="help-tag-right">syn-sync-groupthere</code>
    :syntax sync match <code>{sync-group-name}</code> groupthere <code>{group-name}</code> "pattern" ..</div>
<div class="old-help-para">	Like "grouphere", but <code>{group-name}</code> is the name of a syntax group that
	is to be used at the start of the line where searching for the sync
	point started.	The text between the match and the start of the sync
	pattern searching is assumed not to change the syntax highlighting.
	For example, in C you could search backwards for "/*" and "*/".  If
	"/*" is found first, you know that you are inside a comment, so the
	"groupthere" is "cComment".  If "*/" is found first, you know that you
	are not in a comment, so the "groupthere" is "NONE".  (in practice
	it's a bit more complicated, because the "/*" and "*/" could appear
	inside a string.  That's left as an exercise to the reader...).</div>
<div class="old-help-para">    :syntax sync match ..
    :syntax sync region ..</div>
<div class="old-help-para">	Without a "groupthere" argument.  Define a region or match that is
	skipped while searching for a sync point.</div>
<div class="old-help-para">						<a name="syn-sync-linecont"></a><code class="help-tag-right">syn-sync-linecont</code>
    :syntax sync linecont <code>{pattern}</code></div>
<div class="old-help-para">	When <code>{pattern}</code> matches in a line, it is considered to continue in
	the next line.	This means that the search for a sync point will
	consider the lines to be concatenated.</div>
<div class="old-help-para">If the "maxlines={N}" argument is given too, the number of lines that are
searched for a match is restricted to N.  This is useful if you have very
few things to sync on and a slow machine.  Example:<pre>:syntax sync maxlines=100</pre>
You can clear all sync settings with:<pre>:syntax sync clear</pre>
You can clear specific sync patterns with:<pre>:syntax sync clear {sync-group-name} ..</pre>
<h2 class="help-heading">12. Listing syntax items<span class="help-heading-tags">		<a name="%3Asyntax"></a><span class="help-tag">:syntax</span> <a name="%3Asy"></a><span class="help-tag">:sy</span> <a name="%3Asyn"></a><span class="help-tag">:syn</span> <a name="%3Asyn-list"></a><span class="help-tag">:syn-list</span></span></h2></div>
<div class="old-help-para">This command lists all the syntax items:<pre>:sy[ntax] [list]</pre>
To show the syntax items for one syntax group:<pre>:sy[ntax] list {group-name}</pre>
To list the syntax groups in one cluster:			<a name="E392"></a><code class="help-tag-right">E392</code>  <pre>:sy[ntax] list @{cluster-name}</pre>
See above for other arguments for the ":syntax" command.</div>
<div class="old-help-para">Note that the ":syntax" command can be abbreviated to ":sy", although ":syn"
is mostly used, because it looks better.</div>
<div class="old-help-para"><h2 class="help-heading">12. Highlight command<span class="help-heading-tags">			<a name="%3Ahighlight"></a><span class="help-tag">:highlight</span> <a name="%3Ahi"></a><span class="help-tag">:hi</span> <a name="E28"></a><span class="help-tag">E28</span> <a name="E411"></a><span class="help-tag">E411</span> <a name="E415"></a><span class="help-tag">E415</span></span></h2></div>
<div class="old-help-para">There are two types of highlight groups:
<div class="help-li" style=""> The built-in <a href="/neovim-docs-web/en/syntax#highlight-groups">highlight-groups</a>.
</div><div class="help-li" style=""> The ones used for specific languages.  For these the name starts with the
  name of the language.  Many of these don't have any attributes, but are
  linked to a group of the second type.
							<a name="hitest.vim"></a><code class="help-tag-right">hitest.vim</code>
You can see all the groups currently active with this command:<pre>:so $VIMRUNTIME/syntax/hitest.vim</pre>
This will open a new window containing all highlight group names, displayed
in their own color.
</div></div>
<div class="old-help-para">						<a name="%3Acolo"></a><code class="help-tag-right">:colo</code> <a name="%3Acolorscheme"></a><code class="help-tag">:colorscheme</code> <a name="E185"></a><code class="help-tag">E185</code>
:colo[rscheme]		Output the name of the currently active color scheme.
			This is basically the same as<pre>:echo g:colors_name</pre></div>
<div class="old-help-para">			In case g:colors_name has not been defined :colo will
			output "default".</div>
<div class="old-help-para">:colo[rscheme] <code>{name}</code>	Load color scheme <code>{name}</code>.  This searches <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>
			for the file "colors/{name}.(vim|lua)".  The first one that
			is found is loaded.
			Note: "colors/{name}.vim" is tried first.
			Also searches all plugins in <a href="/neovim-docs-web/en/options#'packpath'">'packpath'</a>, first below
			"start" and then under "opt".</div>
<div class="old-help-para">			Doesn't work recursively, thus you can't use
			":colorscheme" in a color scheme script.</div>
<div class="old-help-para">			To customize a color scheme use another name, e.g.
			"~/.config/nvim/colors/mine.vim", and use <code>:runtime</code> to
			load the original color scheme:<pre>runtime colors/evening.vim
hi Statement ctermfg=Blue guifg=Blue</pre></div>
<div class="old-help-para">			Before the color scheme will be loaded the
			<a href="/neovim-docs-web/en/autocmd#ColorSchemePre">ColorSchemePre</a> autocommand event is triggered.
			After the color scheme has been loaded the
			<a href="/neovim-docs-web/en/autocmd#ColorScheme">ColorScheme</a> autocommand event is triggered.
			For info about writing a color scheme file:<pre>:edit $VIMRUNTIME/colors/README.txt</pre>
:hi[ghlight]		List all the current highlight groups that have
			attributes set.</div>
<div class="old-help-para">:hi[ghlight] <code>{group-name}</code>
			List one highlight group.</div>
<div class="old-help-para">						<a name="highlight-clear"></a><code class="help-tag-right">highlight-clear</code> <a name="%3Ahi-clear"></a><code class="help-tag">:hi-clear</code>
:hi[ghlight] clear	Reset all highlighting to the defaults.  Removes all
			highlighting for groups added by the user!
			Uses the current value of <a href="/neovim-docs-web/en/options#'background'">'background'</a> to decide which
			default colors to use.
			If there was a default link, restore it. <a href="/neovim-docs-web/en/syntax#%3Ahi-link">:hi-link</a></div>
<div class="old-help-para">:hi[ghlight] clear <code>{group-name}</code>
:hi[ghlight] <code>{group-name}</code> NONE
			Disable the highlighting for one highlight group.  It
			is _not_ set back to the default colors.</div>
<div class="old-help-para">:hi[ghlight] [default] <code>{group-name}</code> <code>{key}</code>={arg} ..
			Add a highlight group, or change the highlighting for
			an existing group.
			See <a href="/neovim-docs-web/en/syntax#highlight-args">highlight-args</a> for the <code>{key}</code>={arg} arguments.
			See <a href="/neovim-docs-web/en/syntax#%3Ahighlight-default">:highlight-default</a> for the optional [default]
			argument.</div>
<div class="old-help-para">Normally a highlight group is added once when starting up.  This sets the
default values for the highlighting.  After that, you can use additional
highlight commands to change the arguments that you want to set to non-default
values.  The value "NONE" can be used to switch the value off or go back to
the default value.</div>
<div class="old-help-para">A simple way to change colors is with the <a href="/neovim-docs-web/en/syntax#%3Acolorscheme">:colorscheme</a> command.  This loads
a file with ":highlight" commands such as this:<pre>:hi Comment        gui=bold</pre>
Note that all settings that are not included remain the same, only the
specified field is used, and settings are merged with previous ones.  So, the
result is like this single command has been used:<pre>:hi Comment        ctermfg=Cyan guifg=#80a0ff gui=bold</pre></div>
<div class="old-help-para">							<a name="%3Ahighlight-verbose"></a><code class="help-tag-right">:highlight-verbose</code>
When listing a highlight group and <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> is non-zero, the listing will
also tell where it was last set.  Example:<pre>:verbose hi Comment</pre></div>
<div class="old-help-para"><div class="help-column_heading">	Comment        xxx ctermfg=4 guifg=Blue</div><div class="help-column_heading">	   Last set from /home/mool/vim/vim7/runtime/syntax/syncolor.vim</div></div>
<div class="old-help-para">When ":hi clear" is used then the script where this command is used will be
mentioned for the default values. See <a href="/neovim-docs-web/en/various#%3Averbose-cmd">:verbose-cmd</a> for more information.</div>
<div class="old-help-para">					<a name="highlight-args"></a><code class="help-tag-right">highlight-args</code> <a name="E416"></a><code class="help-tag">E416</code> <a name="E417"></a><code class="help-tag">E417</code> <a name="E423"></a><code class="help-tag">E423</code>
There are two types of UIs for highlighting:
cterm	terminal UI (<a href="/neovim-docs-web/en/term#TUI">TUI</a>)
gui	GUI or RGB-capable TUI (<a href="/neovim-docs-web/en/options#'termguicolors'">'termguicolors'</a>)</div>
<div class="old-help-para">For each type the highlighting can be given.  This makes it possible to use
the same syntax file on all UIs.</div>
<div class="old-help-para">1. TUI highlight arguments</div>
<div class="old-help-para">					<a name="bold"></a><code class="help-tag-right">bold</code> <a name="underline"></a><code class="help-tag">underline</code> <a name="undercurl"></a><code class="help-tag">undercurl</code>
					<a name="underdouble"></a><code class="help-tag-right">underdouble</code> <a name="underdotted"></a><code class="help-tag">underdotted</code>
					<a name="underdashed"></a><code class="help-tag-right">underdashed</code> <a name="inverse"></a><code class="help-tag">inverse</code> <a name="italic"></a><code class="help-tag">italic</code>
					<a name="standout"></a><code class="help-tag-right">standout</code> <a name="nocombine"></a><code class="help-tag">nocombine</code> <a name="strikethrough"></a><code class="help-tag">strikethrough</code>
cterm={attr-list}			<a name="attr-list"></a><code class="help-tag-right">attr-list</code> <a name="highlight-cterm"></a><code class="help-tag">highlight-cterm</code> <a name="E418"></a><code class="help-tag">E418</code>
	attr-list is a comma-separated list (without spaces) of the
	following items (in any order):
		bold
		underline
		undercurl	curly underline
		underdouble	double underline
		underdotted	dotted underline
		underdashed	dashed underline
		strikethrough
		reverse
		inverse		same as reverse
		italic
		standout
		nocombine	override attributes instead of combining them
		NONE		no attributes used (used to reset it)</div>
<div class="old-help-para">	Note that "bold" can be used here and by using a bold font.  They
	have the same effect.
	"undercurl", "underdouble", "underdotted", and "underdashed" fall back
	to "underline" in a terminal that does not support them. The color is
	set using <a href="/neovim-docs-web/en/syntax#guisp">guisp</a>.</div>
<div class="old-help-para">start={term-list}				<a name="highlight-start"></a><code class="help-tag-right">highlight-start</code> <a name="E422"></a><code class="help-tag">E422</code>
stop={term-list}				<a name="term-list"></a><code class="help-tag-right">term-list</code> <a name="highlight-stop"></a><code class="help-tag">highlight-stop</code>
	These lists of terminal codes can be used to get
	non-standard attributes on a terminal.</div>
<div class="old-help-para">	The escape sequence specified with the "start" argument
	is written before the characters in the highlighted
	area.  It can be anything that you want to send to the
	terminal to highlight this area.  The escape sequence
	specified with the "stop" argument is written after the
	highlighted area.  This should undo the "start" argument.
	Otherwise the screen will look messed up.</div>
<div class="old-help-para">        <code>{term-list}</code> is a a string with escape sequences. This is any string of
        characters, except that it can't start with "t_" and blanks are not
        allowed.  The &lt;&gt; notation is recognized here, so you can use things
        like "&lt;Esc&gt;" and "&lt;Space&gt;".  Example:
		start=&lt;Esc&gt;[27h;&lt;Esc&gt;[&lt;Space&gt;r;</div>
<div class="old-help-para">ctermfg={color-nr}				<a name="ctermfg"></a><code class="help-tag-right">ctermfg</code> <a name="E421"></a><code class="help-tag">E421</code>
ctermbg={color-nr}				<a name="ctermbg"></a><code class="help-tag-right">ctermbg</code>
	The <code>{color-nr}</code> argument is a color number.  Its range is zero to
	(not including) the number of <a href="/neovim-docs-web/en/term#tui-colors">tui-colors</a> available.
	The actual color with this number depends on the type of terminal
	and its settings.  Sometimes the color also depends on the settings of
	"cterm".  For example, on some systems "cterm=bold ctermfg=3" gives
	another color, on others you just get color 3.</div>
<div class="old-help-para">	The following (case-insensitive) names are recognized:</div>
<div class="old-help-para">							<a name="cterm-colors"></a><code class="help-tag-right">cterm-colors</code>
<div class="help-column_heading">	    NR-16   NR-8    COLOR NAME</div>	    0	    0	    Black
	    1	    4	    DarkBlue
	    2	    2	    DarkGreen
	    3	    6	    DarkCyan
	    4	    1	    DarkRed
	    5	    5	    DarkMagenta
	    6	    3	    Brown, DarkYellow
	    7	    7	    LightGray, LightGrey, Gray, Grey
	    8	    0*	    DarkGray, DarkGrey
	    9	    4*	    Blue, LightBlue
	    10	    2*	    Green, LightGreen
	    11	    6*	    Cyan, LightCyan
	    12	    1*	    Red, LightRed
	    13	    5*	    Magenta, LightMagenta
	    14	    3*	    Yellow, LightYellow
	    15	    7*	    White</div>
<div class="old-help-para">	The number under "NR-16" is used for 16-color terminals ('t_Co'
	greater than or equal to 16).  The number under "NR-8" is used for
	8-color terminals ('t_Co' less than 16).  The '' indicates that the
	bold attribute is set for ctermfg.  In many 8-color terminals (e.g.,
	"linux"), this causes the bright colors to appear.  This doesn't work
	for background colors!	Without the '' the bold attribute is removed.
	If you want to set the bold attribute in a different way, put a
	"cterm=" argument AFTER the "ctermfg=" or "ctermbg=" argument.	Or use
	a number instead of a color name.</div>
<div class="old-help-para">	Note that for 16 color ansi style terminals (including xterms), the
	numbers in the NR-8 column is used.  Here '' means '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+syntax.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/syntax.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09a%20number%20instead%20of%20a%20color%20name.%0A%0A%09Note%20that%20for%2016%20color%20ansi%20style%20terminals%20(including%20xterms)%2C%20the%0A%09numbers%20in%20the%20NR-8%20column%20is%20used.%20%20Here%20'%2A'%20means%20'add%208'%20so%20that%20%0A%09Blue%20is%2012%2C%20DarkGray%20is%208%20etc.%0A%0A%09Note%20that%20for%20some%20color%20terminals%20these%20names%20may%20result%20in%20the%20wrong%0D%60%60%60">add</a> 8' so that
	Blue is 12, DarkGray is 8 etc.</div>
<div class="old-help-para">	Note that for some color terminals these names may result in the wrong
	colors!</div>
<div class="old-help-para">	You can also use "NONE" to remove the color.</div>
<div class="old-help-para">							<a name="%3Ahi-normal-cterm"></a><code class="help-tag-right">:hi-normal-cterm</code>
	When setting the "ctermfg" or "ctermbg" colors for the Normal group,
	these will become the colors used for the non-highlighted text.
	Example:<pre>:highlight Normal ctermfg=grey ctermbg=darkblue</pre></div>
<div class="old-help-para">	When setting the "ctermbg" color for the Normal group, the
	<a href="/neovim-docs-web/en/options#'background'">'background'</a> option will be adjusted automatically, under the
	condition that the color is recognized and <a href="/neovim-docs-web/en/options#'background'">'background'</a> was not set
	explicitly.  This causes the highlight groups that depend on
	<a href="/neovim-docs-web/en/options#'background'">'background'</a> to change!  This means you should set the colors for
	Normal first, before setting other colors.
	When a color scheme is being used, changing <a href="/neovim-docs-web/en/options#'background'">'background'</a> causes it to
	be reloaded, which may reset all colors (including Normal).  First
	delete the "g:colors_name" variable when you don't want this.</div>
<div class="old-help-para">	When you have set "ctermfg" or "ctermbg" for the Normal group, Vim
	needs to reset the color when exiting.	This is done with the
	"orig_pair" <a href="/neovim-docs-web/en/term#terminfo">terminfo</a> entry.
							<a name="E419"></a><code class="help-tag-right">E419</code> <a name="E420"></a><code class="help-tag">E420</code>
	When Vim knows the normal foreground and background colors, "fg" and
	"bg" can be used as color names.  This only works after setting the
	colors for the Normal group and for the MS-Windows console.  Example,
	for reverse video:<pre>:highlight Visual ctermfg=bg ctermbg=fg</pre></div>
<div class="old-help-para">	Note that the colors are used that are valid at the moment this
	command are given.  If the Normal group colors are changed later, the
	"fg" and "bg" colors will not be adjusted.</div>
<div class="old-help-para">2. GUI highlight arguments</div>
<div class="old-help-para">gui={attr-list}						<a name="highlight-gui"></a><code class="help-tag-right">highlight-gui</code>
	These give the attributes to use in the GUI mode.
	See <a href="/neovim-docs-web/en/syntax#attr-list">attr-list</a> for a description.
	Note that "bold" can be used here and by using a bold font.  They
	have the same effect.
	Note that the attributes are ignored for the "Normal" group.</div>
<div class="old-help-para">font={font-name}					<a name="highlight-font"></a><code class="help-tag-right">highlight-font</code>
	font-name is the name of a font, as it is used on the system Vim
	runs on.  For X11 this is a complicated name, for example:<pre>font=-misc-fixed-bold-r-normal--14-130-75-75-c-70-iso8859-1</pre></div>
<div class="old-help-para">	The font-name "NONE" can be used to revert to the default font.
	When setting the font for the "Normal" group, this becomes the default
	font (until the <a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a> option is changed; the last one set is
	used).
	The following only works with Motif not with other GUIs:
	When setting the font for the "Menu" group, the menus will be changed.
	When setting the font for the "Tooltip" group, the tooltips will be
	changed.
	All fonts used, except for Menu and Tooltip, should be of the same
	character size as the default font!  Otherwise redrawing problems will
	occur.
	To use a font name with an embedded space or other special character,
	put it in single quotes.  The single quote cannot be used then.
	Example:<pre>:hi comment font='Monospace 10'</pre>
guifg={color-name}					<a name="guifg"></a><code class="help-tag-right">guifg</code>
guibg={color-name}					<a name="guibg"></a><code class="help-tag-right">guibg</code>
guisp={color-name}					<a name="guisp"></a><code class="help-tag-right">guisp</code>
	These give the foreground (guifg), background (guibg) and special
	(guisp) color to use in the GUI.  "guisp" is used for various
	underlines.
	There are a few special names:
		NONE		no color (transparent)
		bg		use normal background color
		background	use normal background color
		fg		use normal foreground color
		foreground	use normal foreground color
	To use a color name with an embedded space or other special character,
	put it in single quotes.  The single quote cannot be used then.
	Example:<pre>:hi comment guifg='salmon pink'</pre></div>
<div class="old-help-para">							<a name="gui-colors"></a><code class="help-tag-right">gui-colors</code>
	Suggested color names (these are available on most systems):
	    Red		LightRed	DarkRed
	    Green	LightGreen	DarkGreen	SeaGreen
	    Blue	LightBlue	DarkBlue	SlateBlue
	    Cyan	LightCyan	DarkCyan
	    Magenta	LightMagenta	DarkMagenta
	    Yellow	LightYellow	Brown		DarkYellow
	    Gray	LightGray	DarkGray
	    Black	White
	    Orange	Purple		Violet</div>
<div class="old-help-para">	You can also specify a color by its RGB (red, green, blue) values.
	The format is "#rrggbb", where
		"rr"	is the Red value
		"gg"	is the Green value
		"bb"	is the Blue value
	All values are hexadecimal, range from "00" to "ff".  Examples:<pre>:highlight Comment guifg=#11f0c3 guibg=#ff00ff</pre></div>
<div class="old-help-para">blend={integer}					<a name="highlight-blend"></a><code class="help-tag-right">highlight-blend</code>
	Override the blend level for a highlight group within the popupmenu
	or floating windows. Only takes effect if <a href="/neovim-docs-web/en/options#'pumblend'">'pumblend'</a> or <a href="/neovim-docs-web/en/options#'winblend'">'winblend'</a>
	is set for the menu or window. See the help at the respective option.</div>
<div class="old-help-para">					<a name="highlight-groups"></a><code class="help-tag-right">highlight-groups</code> <a name="highlight-default"></a><code class="help-tag">highlight-default</code>
These are the builtin highlighting groups.  Note that the highlighting depends
on the value of <a href="/neovim-docs-web/en/options#'background'">'background'</a>.  You can see the current settings with the
":highlight" command.
							<a name="hl-ColorColumn"></a><code class="help-tag-right">hl-ColorColumn</code>
ColorColumn	Used for the columns set with <a href="/neovim-docs-web/en/options#'colorcolumn'">'colorcolumn'</a>.
							<a name="hl-Conceal"></a><code class="help-tag-right">hl-Conceal</code>
Conceal		Placeholder characters substituted for concealed
		text (see <a href="/neovim-docs-web/en/options#'conceallevel'">'conceallevel'</a>).
							<a name="hl-CurSearch"></a><code class="help-tag-right">hl-CurSearch</code>
CurSearch	Used for highlighting a search pattern under the cursor
		(see <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a>).
							<a name="hl-Cursor"></a><code class="help-tag-right">hl-Cursor</code>
Cursor		Character under the cursor.
lCursor		Character under the cursor when <a href="/neovim-docs-web/en/map#language-mapping">language-mapping</a>
		is used (see <a href="/neovim-docs-web/en/options#'guicursor'">'guicursor'</a>).
							<a name="hl-CursorIM"></a><code class="help-tag-right">hl-CursorIM</code>
CursorIM	Like Cursor, but used when in IME mode. <a name="CursorIM"></a><code class="help-tag">CursorIM</code>
							<a name="hl-CursorColumn"></a><code class="help-tag-right">hl-CursorColumn</code>
CursorColumn	Screen-column at the cursor, when <a href="/neovim-docs-web/en/options#'cursorcolumn'">'cursorcolumn'</a> is set.
							<a name="hl-CursorLine"></a><code class="help-tag-right">hl-CursorLine</code>
CursorLine	Screen-line at the cursor, when <a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a> is set.
		Low-priority if foreground (ctermfg OR guifg) is not set.
							<a name="hl-Directory"></a><code class="help-tag-right">hl-Directory</code>
Directory	Directory names (and other special names in listings).
							<a name="hl-DiffAdd"></a><code class="help-tag-right">hl-DiffAdd</code>
DiffAdd		Diff mode: Added line. <a href="/neovim-docs-web/en/diff#diff.txt">diff.txt</a>
							<a name="hl-DiffChange"></a><code class="help-tag-right">hl-DiffChange</code>
DiffChange	Diff mode: Changed line. <a href="/neovim-docs-web/en/diff#diff.txt">diff.txt</a>
							<a name="hl-DiffDelete"></a><code class="help-tag-right">hl-DiffDelete</code>
DiffDelete	Diff mode: Deleted line. <a href="/neovim-docs-web/en/diff#diff.txt">diff.txt</a>
							<a name="hl-DiffText"></a><code class="help-tag-right">hl-DiffText</code>
DiffText	Diff mode: Changed text within a changed line. <a href="/neovim-docs-web/en/diff#diff.txt">diff.txt</a>
							<a name="hl-EndOfBuffer"></a><code class="help-tag-right">hl-EndOfBuffer</code>
EndOfBuffer	Filler lines (~) after the end of the buffer.
		By default, this is highlighted like <a href="/neovim-docs-web/en/syntax#hl-NonText">hl-NonText</a>.
							<a name="hl-TermCursor"></a><code class="help-tag-right">hl-TermCursor</code>
TermCursor	Cursor in a focused terminal.
							<a name="hl-TermCursorNC"></a><code class="help-tag-right">hl-TermCursorNC</code>
TermCursorNC	Cursor in an unfocused terminal.
							<a name="hl-ErrorMsg"></a><code class="help-tag-right">hl-ErrorMsg</code>
ErrorMsg	Error messages on the command line.
							<a name="hl-WinSeparator"></a><code class="help-tag-right">hl-WinSeparator</code>
WinSeparator	Separators between window splits.
							<a name="hl-Folded"></a><code class="help-tag-right">hl-Folded</code>
Folded		Line used for closed folds.
							<a name="hl-FoldColumn"></a><code class="help-tag-right">hl-FoldColumn</code>
FoldColumn	<a href="/neovim-docs-web/en/options#'foldcolumn'">'foldcolumn'</a>
							<a name="hl-SignColumn"></a><code class="help-tag-right">hl-SignColumn</code>
SignColumn	Column where <a href="/neovim-docs-web/en/sign#signs">signs</a> are displayed.
							<a name="hl-IncSearch"></a><code class="help-tag-right">hl-IncSearch</code>
IncSearch	<a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a> highlighting; also used for the text replaced with
		":s///c".
							<a name="hl-Substitute"></a><code class="help-tag-right">hl-Substitute</code>
Substitute	<a href="/neovim-docs-web/en/change#%3Asubstitute">:substitute</a> replacement text highlighting.</div>
<div class="old-help-para">							<a name="hl-LineNr"></a><code class="help-tag-right">hl-LineNr</code>
LineNr		Line number for ":number" and ":#" commands, and when <a href="/neovim-docs-web/en/options#'number'">'number'</a>
		or <a href="/neovim-docs-web/en/options#'relativenumber'">'relativenumber'</a> option is set.
							<a name="hl-LineNrAbove"></a><code class="help-tag-right">hl-LineNrAbove</code>
LineNrAbove	Line number for when the <a href="/neovim-docs-web/en/options#'relativenumber'">'relativenumber'</a>
		option is set, above the cursor line.
							<a name="hl-LineNrBelow"></a><code class="help-tag-right">hl-LineNrBelow</code>
LineNrBelow	Line number for when the <a href="/neovim-docs-web/en/options#'relativenumber'">'relativenumber'</a>
		option is set, below the cursor line.
							<a name="hl-CursorLineNr"></a><code class="help-tag-right">hl-CursorLineNr</code>
CursorLineNr	Like LineNr when <a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a> is set and <a href="/neovim-docs-web/en/options#'cursorlineopt'">'cursorlineopt'</a>
		contains "number" or is "both", for the cursor line.
							<a name="hl-CursorLineFold"></a><code class="help-tag-right">hl-CursorLineFold</code>
CursorLineFold	Like FoldColumn when <a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a> is set for the cursor line.
							<a name="hl-CursorLineSign"></a><code class="help-tag-right">hl-CursorLineSign</code>
CursorLineSign	Like SignColumn when <a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a> is set for the cursor line.
							<a name="hl-MatchParen"></a><code class="help-tag-right">hl-MatchParen</code>
MatchParen	Character under the cursor or just before it, if it
		is a paired bracket, and its match. <a href="/neovim-docs-web/en/pi_paren#pi_paren.txt">pi_paren.txt</a></div>
<div class="old-help-para">							<a name="hl-ModeMsg"></a><code class="help-tag-right">hl-ModeMsg</code>
ModeMsg		<a href="/neovim-docs-web/en/options#'showmode'">'showmode'</a> message (e.g., "-- INSERT --").
							<a name="hl-MsgArea"></a><code class="help-tag-right">hl-MsgArea</code>
MsgArea		Area for messages and cmdline.
							<a name="hl-MsgSeparator"></a><code class="help-tag-right">hl-MsgSeparator</code>
MsgSeparator	Separator for scrolled messages <a href="/neovim-docs-web/en/vim_diff#msgsep">msgsep</a>.
							<a name="hl-MoreMsg"></a><code class="help-tag-right">hl-MoreMsg</code>
MoreMsg		<a href="/neovim-docs-web/en/message#more-prompt">more-prompt</a>
							<a name="hl-NonText"></a><code class="help-tag-right">hl-NonText</code>
NonText		'@' at the end of the window, characters from <a href="/neovim-docs-web/en/options#'showbreak'">'showbreak'</a>
		and other characters that do not really exist in the text
		(e.g., "&gt;" displayed when a double-wide character doesn't
		fit at the end of the line). See also <a href="/neovim-docs-web/en/syntax#hl-EndOfBuffer">hl-EndOfBuffer</a>.
							<a name="hl-Normal"></a><code class="help-tag-right">hl-Normal</code>
Normal		Normal text.
							<a name="hl-NormalFloat"></a><code class="help-tag-right">hl-NormalFloat</code>
NormalFloat	Normal text in floating windows.
							<a name="hl-NormalNC"></a><code class="help-tag-right">hl-NormalNC</code>
NormalNC	Normal text in non-current windows.
							<a name="hl-Pmenu"></a><code class="help-tag-right">hl-Pmenu</code>
Pmenu		Popup menu: Normal item.
							<a name="hl-PmenuSel"></a><code class="help-tag-right">hl-PmenuSel</code>
PmenuSel	Popup menu: Selected item.
							<a name="hl-PmenuSbar"></a><code class="help-tag-right">hl-PmenuSbar</code>
PmenuSbar	Popup menu: Scrollbar.
							<a name="hl-PmenuThumb"></a><code class="help-tag-right">hl-PmenuThumb</code>
PmenuThumb	Popup menu: Thumb of the scrollbar.
							<a name="hl-Question"></a><code class="help-tag-right">hl-Question</code>
Question	<a href="/neovim-docs-web/en/message#hit-enter">hit-enter</a> prompt and yes/no questions.
							<a name="hl-QuickFixLine"></a><code class="help-tag-right">hl-QuickFixLine</code>
QuickFixLine	Current <a href="/neovim-docs-web/en/quickfix#quickfix">quickfix</a> item in the quickfix window. Combined with
                <a href="/neovim-docs-web/en/syntax#hl-CursorLine">hl-CursorLine</a> when the cursor is there.
							<a name="hl-Search"></a><code class="help-tag-right">hl-Search</code>
Search		Last search pattern highlighting (see <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a>).
		Also used for similar items that need to stand out.
							<a name="hl-SpecialKey"></a><code class="help-tag-right">hl-SpecialKey</code>
SpecialKey	Unprintable characters: Text displayed differently from what
		it really is. But not <a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a> whitespace. <a href="/neovim-docs-web/en/syntax#hl-Whitespace">hl-Whitespace</a>
							<a name="hl-SpellBad"></a><code class="help-tag-right">hl-SpellBad</code>
SpellBad	Word that is not recognized by the spellchecker. <a href="/neovim-docs-web/en/spell#spell">spell</a>
		Combined with the highlighting used otherwise.
							<a name="hl-SpellCap"></a><code class="help-tag-right">hl-SpellCap</code>
SpellCap	Word that should start with a capital. <a href="/neovim-docs-web/en/spell#spell">spell</a>
		Combined with the highlighting used otherwise.
							<a name="hl-SpellLocal"></a><code class="help-tag-right">hl-SpellLocal</code>
SpellLocal	Word that is recognized by the spellchecker as one that is
		used in another region. <a href="/neovim-docs-web/en/spell#spell">spell</a>
		Combined with the highlighting used otherwise.
							<a name="hl-SpellRare"></a><code class="help-tag-right">hl-SpellRare</code>
SpellRare	Word that is recognized by the spellchecker as one that is
		hardly ever used. <a href="/neovim-docs-web/en/spell#spell">spell</a>
		Combined with the highlighting used otherwise.
							<a name="hl-StatusLine"></a><code class="help-tag-right">hl-StatusLine</code>
StatusLine	Status line of current window.
							<a name="hl-StatusLineNC"></a><code class="help-tag-right">hl-StatusLineNC</code>
StatusLineNC	Status lines of not-current windows.
		Note: If this is equal to "StatusLine", Vim will use "^^^" in
		the status line of the current window.
							<a name="hl-TabLine"></a><code class="help-tag-right">hl-TabLine</code>
TabLine		Tab pages line, not active tab page label.
							<a name="hl-TabLineFill"></a><code class="help-tag-right">hl-TabLineFill</code>
TabLineFill	Tab pages line, where there are no labels.
							<a name="hl-TabLineSel"></a><code class="help-tag-right">hl-TabLineSel</code>
TabLineSel	Tab pages line, active tab page label.
							<a name="hl-Title"></a><code class="help-tag-right">hl-Title</code>
Title		Titles for output from ":set all", ":autocmd" etc.
							<a name="hl-Visual"></a><code class="help-tag-right">hl-Visual</code>
Visual		Visual mode selection.
							<a name="hl-VisualNOS"></a><code class="help-tag-right">hl-VisualNOS</code>
VisualNOS	Visual mode selection when vim is "Not Owning the Selection".
							<a name="hl-WarningMsg"></a><code class="help-tag-right">hl-WarningMsg</code>
WarningMsg	Warning messages.
							<a name="hl-Whitespace"></a><code class="help-tag-right">hl-Whitespace</code>
Whitespace	"nbsp", "space", "tab", "multispace", "lead" and "trail"
		in <a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a>.
							<a name="hl-WildMenu"></a><code class="help-tag-right">hl-WildMenu</code>
WildMenu	Current match in <a href="/neovim-docs-web/en/options#'wildmenu'">'wildmenu'</a> completion.
							<a name="hl-WinBar"></a><code class="help-tag-right">hl-WinBar</code>
WinBar		Window bar of current window.
							<a name="hl-WinBarNC"></a><code class="help-tag-right">hl-WinBarNC</code>
WinBarNC	Window bar of not-current windows.</div>
<div class="old-help-para">					<a name="hl-User1"></a><code class="help-tag-right">hl-User1</code> <a name="hl-User1..9"></a><code class="help-tag">hl-User1..9</code> <a name="hl-User9"></a><code class="help-tag">hl-User9</code>
The <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a> syntax allows the use of 9 different highlights in the
statusline and ruler (via <a href="/neovim-docs-web/en/options#'rulerformat'">'rulerformat'</a>).  The names are User1 to User9.</div>
<div class="old-help-para">For the GUI you can use the following groups to set the colors for the menu,
scrollbars and tooltips.  They don't have defaults.  This doesn't work for the
Win32 GUI.  Only three highlight arguments have any effect here: font, guibg,
and guifg.</div>
<div class="old-help-para">							<a name="hl-Menu"></a><code class="help-tag-right">hl-Menu</code>
Menu		Current font, background and foreground colors of the menus.
		Also used for the toolbar.
		Applicable highlight arguments: font, guibg, guifg.</div>
<div class="old-help-para">							<a name="hl-Scrollbar"></a><code class="help-tag-right">hl-Scrollbar</code>
Scrollbar	Current background and foreground of the main window's
		scrollbars.
		Applicable highlight arguments: guibg, guifg.</div>
<div class="old-help-para">							<a name="hl-Tooltip"></a><code class="help-tag-right">hl-Tooltip</code>
Tooltip		Current font, background and foreground of the tooltips.
		Applicable highlight arguments: font, guibg, guifg.</div>
<div class="old-help-para"><h2 class="help-heading">13. Linking groups<span class="help-heading-tags">		<a name="%3Ahi-link"></a><span class="help-tag">:hi-link</span> <a name="%3Ahighlight-link"></a><span class="help-tag">:highlight-link</span> <a name="E412"></a><span class="help-tag">E412</span> <a name="E413"></a><span class="help-tag">E413</span></span></h2></div>
<div class="old-help-para">When you want to use the same highlighting for several syntax groups, you
can do this more easily by linking the groups into one common highlight
group, and give the color attributes only for that group.</div>
<div class="old-help-para">To set a link:</div>
<div class="old-help-para">    :hi[ghlight][!] [default] link <code>{from-group}</code> <code>{to-group}</code></div>
<div class="old-help-para">To remove a link:</div>
<div class="old-help-para">    :hi[ghlight][!] [default] link <code>{from-group}</code> NONE</div>
<div class="old-help-para">Notes:							<a name="E414"></a><code class="help-tag-right">E414</code>
<div class="help-li" style=""> If the <code>{from-group}</code> and/or <code>{to-group}</code> doesn't exist, it is created.  You
  don't get an error message for a non-existing group.
</div><div class="help-li" style=""> As soon as you use a ":highlight" command for a linked group, the link is
  removed.
</div><div class="help-li" style=""> If there are already highlight settings for the <code>{from-group}</code>, the link is
  not made, unless the '!' is given.  For a ":highlight link" command in a
  sourced file, you don't get an error message.  This can be used to skip
  links for groups that already have settings.
</div></div>
<div class="old-help-para">					<a name="%3Ahi-default"></a><code class="help-tag-right">:hi-default</code> <a name="%3Ahighlight-default"></a><code class="help-tag">:highlight-default</code>
The [default] argument is used for setting the default highlighting for a
group.	If highlighting has already been specified for the group the command
will be ignored.  Also when there is an existing link.</div>
<div class="old-help-para">Using [default] is especially useful to overrule the highlighting of a
specific syntax file.  For example, the C syntax file contains:<pre>:highlight default link cComment Comment</pre>
If you like Question highlighting for C comments, put this in your vimrc file:<pre>:highlight link cComment Question</pre>
Without the "default" in the C syntax file, the highlighting would be
overruled when the syntax file is loaded.</div>
<div class="old-help-para">To have a link survive <code>:highlight clear</code>, which is useful if you have
highlighting for a specific filetype and you want to keep it when selecting
another color scheme, put a command like this in the
"after/syntax/{filetype}.vim" file:<pre>highlight! default link cComment Question</pre>
<h2 class="help-heading">15. Cleaning up<span class="help-heading-tags">						<a name="%3Asyn-clear"></a><span class="help-tag">:syn-clear</span> <a name="E391"></a><span class="help-tag">E391</span></span></h2></div>
<div class="old-help-para">If you want to clear the syntax stuff for the current buffer, you can use this
command:<pre>:syntax clear</pre>
This command should be used when you want to switch off syntax highlighting,
or when you want to switch to using another syntax.  It's normally not needed
in a syntax file itself, because syntax is cleared by the autocommands that
load the syntax file.
The command also deletes the "b:current_syntax" variable, since no syntax is
loaded after this command.</div>
<div class="old-help-para">To clean up specific syntax groups for the current buffer:<pre>:syntax clear {group-name} ..</pre>
This removes all patterns and keywords for <code>{group-name}</code>.</div>
<div class="old-help-para">To clean up specific syntax group lists for the current buffer:<pre>:syntax clear @{grouplist-name} ..</pre>
This sets <code>{grouplist-name}</code>'s contents to an empty list.</div>
<div class="old-help-para">						<a name="%3Asyntax-off"></a><code class="help-tag-right">:syntax-off</code> <a name="%3Asyn-off"></a><code class="help-tag">:syn-off</code>
If you want to disable syntax highlighting for all buffers, you need to remove
the autocommands that load the syntax files:<pre>:syntax off</pre>
What this command actually does, is executing the command<pre>:source $VIMRUNTIME/syntax/nosyntax.vim</pre>
See the "nosyntax.vim" file for details.  Note that for this to work
$VIMRUNTIME must be valid.  See <a href="/neovim-docs-web/en/starting#%24VIMRUNTIME">$VIMRUNTIME</a>.</div>
<div class="old-help-para">						<a name="%3Asyntax-reset"></a><code class="help-tag-right">:syntax-reset</code> <a name="%3Asyn-reset"></a><code class="help-tag">:syn-reset</code>
If you have changed the colors and messed them up, use this command to get the
defaults back:<pre>:syntax reset</pre>
It is a bit of a wrong name, since it does not reset any syntax items, it only
affects the highlighting.</div>
<div class="old-help-para">Note that the syntax colors that you set in your vimrc file will also be reset
back to their Vim default.
Note that if you are using a color scheme, the colors defined by the color
scheme for syntax highlighting will be lost.</div>
<div class="old-help-para">Note that when a color scheme is used, there might be some confusion whether
your defined colors are to be used or the colors from the scheme.  This
depends on the color scheme file.  See <a href="/neovim-docs-web/en/syntax#%3Acolorscheme">:colorscheme</a>.</div>
<div class="old-help-para"><h2 class="help-heading">16. Highlighting tags<span class="help-heading-tags">					<a name="tag-highlight"></a><span class="help-tag">tag-highlight</span></span></h2></div>
<div class="old-help-para">If you want to highlight all the tags in your file, you can use the following
mappings.</div>
<div class="old-help-para">	<code>&lt;F11&gt;</code>	-- Generate tags.vim file, and highlight tags.
	<code>&lt;F12&gt;</code>	-- Just highlight tags based on existing tags.vim file.
<pre>:map &lt;F11&gt;  :sp tags&lt;CR&gt;:%s/^\([^        :]*:\)\=\([^        ]*\).*/syntax keyword Tag \2/&lt;CR&gt;:wq! tags.vim&lt;CR&gt;/^&lt;CR&gt;&lt;F12&gt;
:map &lt;F12&gt;  :so tags.vim&lt;CR&gt;</pre>
WARNING: The longer the tags file, the slower this will be, and the more
memory Vim will consume.</div>
<div class="old-help-para">Only highlighting typedefs, unions and structs can be done too.  For this you
must use Universal Ctags (<a href="https://ctags.io">https://ctags.io</a>) or Exuberant ctags.</div>
<div class="old-help-para">Put these lines in your Makefile:</div>
<div class="old-help-para"># Make a highlight file for types.  Requires Universal/Exuberant ctags and awk
types: types.vim
types.vim: *.[ch]	ctags --c-kinds=gstu -o- *.[ch] |\		awk 'BEGIN{printf("syntax keyword Type\t")}\
			<code>{printf("%s ", $$1)}</code>END{print ""}' &gt; $@</div>
<div class="old-help-para">And put these lines in your vimrc:<pre>" load the types.vim highlighting file, if it exists
autocmd BufRead,BufNewFile *.[ch] let fname = expand('&lt;afile&gt;:p:h') .. '/types.vim'
autocmd BufRead,BufNewFile *.[ch] if filereadable(fname)
autocmd BufRead,BufNewFile *.[ch]   exe 'so ' .. fname
autocmd BufRead,BufNewFile *.[ch] endif</pre>
<h2 class="help-heading">17. Window-local syntax<span class="help-heading-tags">				<a name="%3Aownsyntax"></a><span class="help-tag">:ownsyntax</span></span></h2></div>
<div class="old-help-para">Normally all windows on a buffer share the same syntax settings. It is
possible, however, to set a particular window on a file to have its own
private syntax setting. A possible example would be to edit LaTeX source
with conventional highlighting in one window, while seeing the same source
highlighted differently (so as to hide control sequences and indicate bold,
italic etc regions) in another. The <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> option is useful here.</div>
<div class="old-help-para">To set the current window to have the syntax "foo", separately from all other
windows on the buffer:<pre>:ownsyntax foo</pre></div>
<div class="old-help-para">						<a name="w%3Acurrent_syntax"></a><code class="help-tag-right">w:current_syntax</code>
This will set the "w:current_syntax" variable to "foo".  The value of
"b:current_syntax" does not change.  This is implemented by saving and
restoring "b:current_syntax", since the syntax files do set
"b:current_syntax".  The value set by the syntax file is assigned to
"w:current_syntax".
Note: This resets the <a href="/neovim-docs-web/en/options#'spell'">'spell'</a>, <a href="/neovim-docs-web/en/options#'spellcapcheck'">'spellcapcheck'</a> and <a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a> options.</div>
<div class="old-help-para">Once a window has its own syntax, syntax commands executed from other windows
on the same buffer (including :syntax clear) have no effect. Conversely,
syntax commands executed from that window do not affect other windows on the
same buffer.</div>
<div class="old-help-para">A window with its own syntax reverts to normal behavior when another buffer
is loaded into that window or the file is reloaded.
When splitting the window, the new window will use the original syntax.</div>
<div class="old-help-para"><h2 class="help-heading">17. Color xterms<span class="help-heading-tags">				<a name="xterm-color"></a><span class="help-tag">xterm-color</span> <a name="color-xterm"></a><span class="help-tag">color-xterm</span></span></h2></div>
<div class="old-help-para">							<a name="colortest.vim"></a><code class="help-tag-right">colortest.vim</code>
To test your color setup, a file has been included in the Vim distribution.
To use it, execute this command:<pre>:runtime syntax/colortest.vim</pre>
Nvim uses 256-color and <a href="/neovim-docs-web/en/term#true-color">true-color</a> terminal capabilities wherever possible.</div>
<div class="old-help-para"><h2 class="help-heading">18. When syntax is slow<span class="help-heading-tags">						<a name="%3Asyntime"></a><span class="help-tag">:syntime</span></span></h2></div>
<div class="old-help-para">This is aimed at authors of a syntax file.</div>
<div class="old-help-para">If your syntax causes redrawing to be slow, here are a few hints on making it
faster.  To see slowness switch on some features that usually interfere, such
as <a href="/neovim-docs-web/en/options#'relativenumber'">'relativenumber'</a> and <a href="/neovim-docs-web/en/fold#folding">folding</a>.</div>
<div class="old-help-para">To find out what patterns are consuming most time, get an overview with this
sequence:<pre>:syntime on
[ redraw the text at least once with CTRL-L ]
:syntime report</pre>
This will display a list of syntax patterns that were used, sorted by the time
it took to match them against the text.</div>
<div class="old-help-para">:syntime on		Start measuring syntax times.  This will add some
			overhead to compute the time spent on syntax pattern
			matching.</div>
<div class="old-help-para">:syntime off		Stop measuring syntax times.</div>
<div class="old-help-para">:syntime clear		Set all the counters to zero, restart measuring.</div>
<div class="old-help-para">:syntime report		Show the syntax items used since ":syntime on" in the
			current window.  Use a wider display to see more of
			the output.</div>
<div class="old-help-para">			The list is sorted by total time. The columns are:
			TOTAL		Total time in seconds spent on
					matching this pattern.
			COUNT		Number of times the pattern was used.
			MATCH		Number of times the pattern actually
					matched
			SLOWEST		The longest time for one try.
			AVERAGE		The average time for one try.
			NAME		Name of the syntax item.  Note that
					this is not unique.
			PATTERN		The pattern being used.</div>
<div class="old-help-para">Pattern matching gets slow when it has to try many alternatives.  Try to
include as much literal text as possible to reduce the number of ways a
pattern does NOT match.</div>
<div class="old-help-para">When using the "\@&lt;=" and "\@&lt;!" items, add a maximum size to avoid trying at
all positions in the current and previous line.  For example, if the item is
literal text specify the size of that text (in bytes):</div>
<div class="old-help-para">"&lt;\@&lt;=span"	Matches "span" in "&lt;span".  This tries matching with "&lt;" in
		many places.
"&lt;\@1&lt;=span"	Matches the same, but only tries one byte before "span".</div>

  
  