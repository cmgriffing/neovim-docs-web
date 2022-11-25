---
title:  Tips
layout: ../../layouts/MainLayout.astro
---

  <a name="tips.txt"></a><a name="tips"></a><h1> Tips</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/tips.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Tips and ideas for using Vim</div>
<div class="old-help-para">These are just a few that we thought would be helpful for many users.
You can find many more tips on the wiki.  The URL can be found on
<a href="https://www.vim.org">https://www.vim.org</a></div>
<div class="old-help-para">Don't forget to browse the user manual, it also contains lots of useful tips
<a href="usr_toc.html#usr_toc.txt">usr_toc.txt</a>.</div>
<div class="old-help-para"><h2 class="help-heading">Editing C programs<span class="help-heading-tags">					<a name="C-editing"></a><span class="help-tag">C-editing</span></span></h2></div>
<div class="old-help-para">There are quite a few features in Vim to help you edit C program files.  Here
is an overview with tags to jump to:</div>
<div class="old-help-para"><a href="usr_29.html#usr_29.txt">usr_29.txt</a>  		Moving through programs chapter in the user manual.
<a href="usr_30.html#usr_30.txt">usr_30.txt</a>  		Editing programs chapter in the user manual.
<a href="indent.html#C-indenting">C-indenting</a>  		Automatically set the indent of a line while typing
			text.
<a href="change.html#%3D">=</a>  			Re-indent a few lines.
<a href="change.html#format-comments">format-comments</a>  	Format comments.</div>
<div class="old-help-para"><a href="tagsrch.html#%3Acheckpath">:checkpath</a>  		Show all recursively included files.
<a href="tagsrch.html#%5Bi">[i</a>  			Search for identifier under cursor in current and
			included files.
<a href="tagsrch.html#%5B_CTRL-I">[_CTRL-I</a>  		Jump to match for "[i"
<a href="tagsrch.html#%5BI">[I</a>  			List all lines in current and included files where
			identifier under the cursor matches.
<a href="tagsrch.html#%5Bd">[d</a>  			Search for define under cursor in current and included
			files.</div>
<div class="old-help-para"><a href="tagsrch.html#CTRL-%5D">CTRL-]</a>  		Jump to tag under cursor (e.g., definition of a
			function).
<a href="tagsrch.html#CTRL-T">CTRL-T</a>  		Jump back to before a <code>CTRL-]</code> command.
<a href="tagsrch.html#%3Atselect">:tselect</a>  		Select one tag out of a list of matching tags.</div>
<div class="old-help-para"><a href="pattern.html#gd">gd</a>  			Go to Declaration of local variable under cursor.
<a href="pattern.html#gD">gD</a>  			Go to Declaration of global variable under cursor.</div>
<div class="old-help-para"><a href="editing.html#gf">gf</a>  			Go to file name under the cursor.</div>
<div class="old-help-para"><a href="motion.html#%25">%</a>  			Go to matching (), {}, [], /*/, #if, #else, #endif.
<a href="motion.html#%5B%2F">[/</a>  			Go to previous start of comment.
<a href="motion.html#%5D%2F">]/</a>  			Go to next end of comment.
<a href="motion.html#%5B%23">[#</a>  			Go back to unclosed #if, #ifdef, or #else.
<a href="motion.html#%5D%23">]#</a>  			Go forward to unclosed #else or #endif.
<a href="motion.html#%5B(">[(</a>  			Go back to unclosed '('
<a href="motion.html#%5D)">])</a>  			Go forward to unclosed ')'
<a href="motion.html#%5B%7B">[{</a>  			Go back to unclosed '{'
<a href="motion.html#%5D%7D">]}</a>  			Go forward to unclosed '}'</div>
<div class="old-help-para"><a href="motion.html#v_ab">v_ab</a>  			Select "a block" from "[(" to "])", including braces
<a href="motion.html#v_ib">v_ib</a>  			Select "inner block" from "[(" to "])"
<a href="motion.html#v_aB">v_aB</a>  			Select "a block" from "[{" to "]}", including brackets
<a href="motion.html#v_iB">v_iB</a>  			Select "inner block" from "[{" to "]}"</div>
<div class="old-help-para"><h2 class="help-heading">Finding where identifiers are used<span class="help-heading-tags">			<a name="ident-search"></a><span class="help-tag">ident-search</span></span></h2></div>
<div class="old-help-para">You probably already know that <a href="tagsrch.html#tags">tags</a> can be used to jump to the place where a
function or variable is defined.  But sometimes you wish you could jump to all
the places where a function or variable is being used.  This is possible in
two ways:
1. Using the <a href="quickfix.html#%3Agrep">:grep</a> command.  This should work on most Unix systems,
   but can be slow (it reads all files) and only searches in one directory.
2. Using ID utils.  This is fast and works in multiple directories.  It uses a
   database to store locations.  You will need some additional programs for
   this to work.  And you need to keep the database up to date.</div>
<div class="old-help-para">Using the GNU id-tools:</div>
<div class="old-help-para">What you need:
<div class="help-li" style=""> The GNU id-tools installed (mkid is needed to create ID and lid is needed to
  use the macros).
</div><div class="help-li" style=""> An identifier database file called "ID" in the current directory.  You can
  create it with the shell command "mkid file1 file2 ..".
</div></div>
<div class="old-help-para">Put this in your <a href="starting.html#init.vim">init.vim</a>:<pre>map _u :call ID_search()&lt;Bar&gt;execute "/\\&lt;" .. g:word .. "\\&gt;"&lt;CR&gt;
map _n :n&lt;Bar&gt;execute "/\\&lt;" .. g:word .. "\\&gt;"&lt;CR&gt;

function! ID_search()
  let g:word = expand("&lt;cword&gt;")
  let x = system("lid --key=none " .. g:word)
  let x = substitute(x, "\n", " ", "g")
  execute "next " .. x
endfun</pre>
To use it, place the cursor on a word, type "_u" and vim will load the file
that contains the word.  Search for the next occurrence of the word in the
same file with "n".  Go to the next file with "_n".</div>
<div class="old-help-para">This has been tested with id-utils-3.2 (which is the name of the id-tools
archive file on your closest gnu-ftp-mirror).</div>
<div class="old-help-para">[the idea for this comes from Andreas Kutschera]</div>
<div class="old-help-para"><h2 class="help-heading">Scrolling in Insert mode<span class="help-heading-tags">				<a name="scroll-insert"></a><span class="help-tag">scroll-insert</span></span></h2></div>
<div class="old-help-para">If you are in insert mode and you want to see something that is just off the
screen, you can use <code>CTRL-X</code> <code>CTRL-E</code> and <code>CTRL-X</code> <code>CTRL-Y</code> to scroll the screen.
						<a href="insert.html#i_CTRL-X_CTRL-E">i_CTRL-X_CTRL-E</a></div>
<div class="old-help-para">To make this easier, you could use these mappings:<pre>:inoremap &lt;C-E&gt; &lt;C-X&gt;&lt;C-E&gt;
:inoremap &lt;C-Y&gt; &lt;C-X&gt;&lt;C-Y&gt;</pre>
You then lose the ability to copy text from the line above/below the cursor
<a href="insert.html#i_CTRL-E">i_CTRL-E</a>.</div>
<div class="old-help-para">Also consider setting <a href="options.html#'scrolloff'">'scrolloff'</a> to a larger value, so that you can always see
some context around the cursor.  If <a href="options.html#'scrolloff'">'scrolloff'</a> is bigger than half the window
height, the cursor will always be in the middle and the text is scrolled when
the cursor is moved up/down.</div>
<div class="old-help-para"><h2 class="help-heading">Smooth scrolling<span class="help-heading-tags">					<a name="scroll-smooth"></a><span class="help-tag">scroll-smooth</span></span></h2></div>
<div class="old-help-para">If you like the scrolling to go a bit smoother, you can use these mappings:<pre>:map &lt;C-U&gt; &lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;&lt;C-Y&gt;
:map &lt;C-D&gt; &lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;&lt;C-E&gt;</pre>
<h2 class="help-heading">Correcting common typing mistakes<span class="help-heading-tags">			<a name="type-mistakes"></a><span class="help-tag">type-mistakes</span></span></h2></div>
<div class="old-help-para">When there are a few words that you keep on typing in the wrong way, make
abbreviations that correct them.  For example:<pre>:ab teh the
:ab fro for</pre>
<h2 class="help-heading">Counting words, lines, etc.<span class="help-heading-tags">				<a name="count-items"></a><span class="help-tag">count-items</span></span></h2></div>
<div class="old-help-para">To count how often any pattern occurs in the current buffer use the substitute
command and add the 'n' flag to avoid the substitution.  The reported number
of substitutions is the number of items.  Examples:<pre>:%s/./&amp;/gn                characters
:%s/\i\+/&amp;/gn                words
:%s/^//n                lines
:%s/the/&amp;/gn                "the" anywhere
:%s/\&lt;the\&gt;/&amp;/gn        "the" as a word</pre>
You might want to reset <a href="options.html#'hlsearch'">'hlsearch'</a> or do ":nohlsearch".
Add the 'e' flag if you don't want an error when there are no matches.</div>
<div class="old-help-para">An alternative is using <a href="editing.html#v_g_CTRL-G">v_g_CTRL-G</a> in Visual mode.</div>
<div class="old-help-para">If you want to find matches in multiple files use <a href="quickfix.html#%3Avimgrep">:vimgrep</a>.</div>
<div class="old-help-para">							<a name="count-bytes"></a><code class="help-tag-right">count-bytes</code>
If you want to count bytes, you can use this:</div>
<div class="old-help-para">	Visually select the characters (block is also possible)
	Use "y" to yank the characters
	Use the strlen() function:<pre>:echo strlen(@")</pre>
A line break is counted for one byte.</div>
<div class="old-help-para"><h2 class="help-heading">Restoring the cursor position<span class="help-heading-tags">				<a name="restore-position"></a><span class="help-tag">restore-position</span></span></h2></div>
<div class="old-help-para">Sometimes you want to write a mapping that makes a change somewhere in the
file and restores the cursor position, without scrolling the text.  For
example, to change the date mark in a file:<pre>:map &lt;F2&gt; msHmtgg/Last [cC]hange:\s*/e+1&lt;CR&gt;"_D"=strftime("%Y %b %d")&lt;CR&gt;p'tzt`s</pre>
Breaking up saving the position:
	ms	store cursor position in the 's' mark
	H	go to the first line in the window
	mt	store this position in the 't' mark</div>
<div class="old-help-para">Breaking up restoring the position:
	't	go to the line previously at the top of the window
	zt	scroll to move this line to the top of the window
s	jump to the original position of the cursor</div>
<div class="old-help-para">For something more advanced see <a href="builtin.html#winsaveview()">winsaveview()</a> and <a href="builtin.html#winrestview()">winrestview()</a>.</div>
<div class="old-help-para"><h2 class="help-heading">Renaming files<span class="help-heading-tags">						<a name="rename-files"></a><span class="help-tag">rename-files</span></span></h2></div>
<div class="old-help-para">Say I have a directory with the following files in them (directory picked at
random :-):</div>
<div class="old-help-para">buffer.c
charset.c
digraph.c
<a name="_..."></a><h3 class="help-heading">...</h3></div>
<div class="old-help-para">and I want to rename *.c *.bla.  I'd do it like this:<pre>$ vim
:r !ls *.c
:%s/\(.*\).c/mv &amp; \1.bla
:w !sh
:q!</pre>
<h2 class="help-heading">Change a name in multiple files<span class="help-heading-tags">				<a name="change-name"></a><span class="help-tag">change-name</span></span></h2></div>
<div class="old-help-para">Example for using a script file to change a name in several files:</div>
<div class="old-help-para">	Create a file "subs.vim" containing substitute commands and a :update
	command:<pre>:%s/Jones/Smith/g
:%s/Allen/Peter/g
:update</pre></div>
<div class="old-help-para">	Execute Vim on all files you want to change, and source the script for
	each argument:<pre>vim *.let
argdo source subs.vim</pre>
See <a href="editing.html#%3Aargdo">:argdo</a>.</div>
<div class="old-help-para"><h2 class="help-heading">Speeding up external commands<span class="help-heading-tags">				<a name="speed-up"></a><span class="help-tag">speed-up</span></span></h2></div>
<div class="old-help-para">In some situations, execution of an external command can be very slow.  This
can also slow down wildcard expansion on Unix.  Here are a few suggestions to
increase the speed.</div>
<div class="old-help-para">If your .cshrc (or other file, depending on the shell used) is very long, you
should separate it into a section for interactive use and a section for
non-interactive use (often called secondary shells).  When you execute a
command from Vim like ":!ls", you do not need the interactive things (for
example, setting the prompt).  Put the stuff that is not needed after these
lines:<pre>if ($?prompt == 0) then
        exit 0
endif</pre>
Another way is to include the "-f" flag in the <a href="options.html#'shell'">'shell'</a> option, e.g.:<pre>:set shell=csh\ -f</pre>
(the backslash is needed to include the space in the option).
This will make csh completely skip the use of the .cshrc file.  This may cause
some things to stop working though.</div>
<div class="old-help-para"><h2 class="help-heading">Useful mappings<span class="help-heading-tags">						<a name="useful-mappings"></a><span class="help-tag">useful-mappings</span></span></h2></div>
<div class="old-help-para">Here are a few mappings that some people like to use.</div>
<div class="old-help-para">							<a name="map-backtick"></a><code class="help-tag-right">map-backtick</code><pre>:map ' `</pre>
Make the single quote work like a backtick.  Puts the cursor on the column of
a mark, instead of going to the first non-blank character in the line.</div>
<div class="old-help-para">							<a name="emacs-keys"></a><code class="help-tag-right">emacs-keys</code>
For Emacs-style editing on the command-line:<pre>" start of line
:cnoremap &lt;C-A&gt;                &lt;Home&gt;
" back one character
:cnoremap &lt;C-B&gt;                &lt;Left&gt;
" delete character under cursor
:cnoremap &lt;C-D&gt;                &lt;Del&gt;
" end of line
:cnoremap &lt;C-E&gt;                &lt;End&gt;
" forward one character
:cnoremap &lt;C-F&gt;                &lt;Right&gt;
" recall newer command-line
:cnoremap &lt;C-N&gt;                &lt;Down&gt;
" recall previous (older) command-line
:cnoremap &lt;C-P&gt;                &lt;Up&gt;
" back one word
:cnoremap &lt;Esc&gt;&lt;C-B&gt;        &lt;S-Left&gt;
" forward one word
:cnoremap &lt;Esc&gt;&lt;C-F&gt;        &lt;S-Right&gt;</pre></div>
<div class="old-help-para">							<a name="format-bullet-list"></a><code class="help-tag-right">format-bullet-list</code>
This mapping will format any bullet list.  It requires that there is an empty
line above and below each list entry.  The expression commands are used to
be able to give comments to the parts of the mapping.<pre>:let m =     ":map _f  :set ai&lt;CR&gt;"   " need 'autoindent' set
:let m ..= "{O&lt;Esc&gt;"                      " add empty line above item
:let m ..= "}{)^W"                      " move to text after bullet
:let m ..= "i     &lt;CR&gt;     &lt;Esc&gt;"     " add space for indent
:let m ..= "gq}"                      " format text after the bullet
:let m ..= "{dd"                      " remove the empty line
:let m ..= "5lDJ"                      " put text after bullet
:execute m                              |" define the mapping</pre>
(&lt;&gt; notation <a href="intro.html#%3C%3E">&lt;&gt;</a>.  Note that this is all typed literally.  ^W is "^" "W", not
<a name="_ctrl-w.)"></a><h3 class="help-heading">CTRL-W.)</h3></div>
<div class="old-help-para">Note that the last comment starts with |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+tips.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/tips.html%0D%0DContext%3A%0D%0D%60%60%60%0D(%3C%3E%20notation%20%7C%3C%3E%7C.%20%20Note%20that%20this%20is%20all%20typed%20literally.%20%20%5EW%20is%20%22%5E%22%20%22W%22%2C%20not%0ACTRL-W.)%0A%0ANote%20that%20the%20last%20comment%20starts%20with%20%7C%22%2C%20because%20the%20%22%3Aexecute%22%20command%0Adoesn't%20accept%20a%20comment%20directly.%0A%0AYou%20also%20need%20to%20set%20'textwidth'%20to%20a%20non-zero%20value%2C%20e.g.%2C%20%3E%0D%60%60%60">",</a> because the ":execute" command
doesn't accept a comment directly.</div>
<div class="old-help-para">You also need to set <a href="options.html#'textwidth'">'textwidth'</a> to a non-zero value, e.g.,<pre>:set tw=70</pre>
A mapping that does about the same, but takes the indent for the list from the
first line (Note: this mapping is a single long line with a lot of spaces):<pre>:map _f :set ai&lt;CR&gt;}{a                                                          &lt;Esc&gt;WWmmkD`mi&lt;CR&gt;&lt;Esc&gt;kkddpJgq}'mJO&lt;Esc&gt;j</pre></div>
<div class="old-help-para">							<a name="collapse"></a><code class="help-tag-right">collapse</code>
These two mappings reduce a sequence of empty (;b) or blank (;n) lines into a
single line<pre>:map ;b   GoZ&lt;Esc&gt;:g/^$/.,/./-j&lt;CR&gt;Gdd
:map ;n   GoZ&lt;Esc&gt;:g/^[ &lt;Tab&gt;]*$/.,/[^ &lt;Tab&gt;]/-j&lt;CR&gt;Gdd</pre>
<h2 class="help-heading">Compressing the help files<span class="help-heading-tags">				<a name="gzip-helpfile"></a><span class="help-tag">gzip-helpfile</span></span></h2></div>
<div class="old-help-para">For those of you who are really short on disk space, you can compress the help
files and still be able to view them with Vim.  This makes accessing the help
files a bit slower and requires the "gzip" program.</div>
<div class="old-help-para">(1) Compress all the help files: "gzip doc/*.txt".</div>
<div class="old-help-para">(2) Edit "doc/tags" and change the ".txt" to ".txt.gz":<pre>:%s=\(\t.*\.txt\)\t=\1.gz\t=</pre>
(3) Add this line to your vimrc:<pre>set helpfile={dirname}/help.txt.gz</pre>
Where <code>{dirname}</code> is the directory where the help files are.  The <a href="pi_gzip.html#gzip">gzip</a> plugin
will take care of decompressing the files.
You must make sure that $VIMRUNTIME is set to where the other Vim files are,
when they are not in the same location as the compressed "doc" directory.  See
<a href="starting.html#%24VIMRUNTIME">$VIMRUNTIME</a>.</div>
<div class="old-help-para"><h2 class="help-heading">Hex editing<span class="help-heading-tags">					<a name="hex-editing"></a><span class="help-tag">hex-editing</span> <a name="using-xxd"></a><span class="help-tag">using-xxd</span></span></h2></div>
<div class="old-help-para">See section <a href="usr_23.html#23.3">23.3</a> of the user manual.</div>
<div class="old-help-para">If one has a particular extension that one uses for binary files (such as exe,
bin, etc), you may find it helpful to automate the process with the following
bit of autocmds for your <a href="starting.html#init.vim">init.vim</a>.  Change that "*.bin" to whatever
comma-separated list of extension(s) you find yourself wanting to edit:<pre>" vim -b : edit binary using xxd-format!
augroup Binary
  au!
  au BufReadPre  *.bin let &amp;bin=1
  au BufReadPost *.bin if &amp;bin | %!xxd
  au BufReadPost *.bin set ft=xxd | endif
  au BufWritePre *.bin if &amp;bin | %!xxd -r
  au BufWritePre *.bin endif
  au BufWritePost *.bin if &amp;bin | %!xxd
  au BufWritePost *.bin set nomod | endif
augroup END</pre>
<h2 class="help-heading">Using &lt;&gt; notation in autocommands<span class="help-heading-tags">			<a name="autocmd-%3C%3E"></a><span class="help-tag">autocmd-&lt;&gt;</span></span></h2></div>
<div class="old-help-para">The &lt;&gt; notation is not recognized in the argument of an :autocmd.  To avoid
having to use special characters, you could use a self-destroying mapping to
get the &lt;&gt; notation and then call the mapping from the autocmd.  Example:</div>
<div class="old-help-para">						<a name="map-self-destroy"></a><code class="help-tag-right">map-self-destroy</code><pre>" This is for automatically adding the name of the file to the menu list.
" It uses a self-destroying mapping!
" 1. use a line in the buffer to convert the 'dots' in the file name to \.
" 2. store that in register '"'
" 3. add that name to the Buffers menu list
" WARNING: this does have some side effects, like overwriting the
" current register contents and removing any mapping for the "i" command.
"
autocmd BufNewFile,BufReadPre * nmap i :nunmap i&lt;CR&gt;O&lt;C-R&gt;%&lt;Esc&gt;:.g/\./s/\./\\./g&lt;CR&gt;0"9y$u:menu Buffers.&lt;C-R&gt;9 :buffer &lt;C-R&gt;%&lt;C-V&gt;&lt;CR&gt;&lt;CR&gt;
autocmd BufNewFile,BufReadPre * normal i</pre>
Another method, perhaps better, is to use the ":execute" command.  In the
string you can use the &lt;&gt; notation by preceding it with a backslash.  Don't
forget to double the number of existing backslashes and put a backslash before
'"'.
<pre>autocmd BufNewFile,BufReadPre * exe "normal O\&lt;C-R&gt;%\&lt;Esc&gt;:.g/\\./s/\\./\\\\./g\&lt;CR&gt;0\"9y$u:menu Buffers.\&lt;C-R&gt;9 :buffer \&lt;C-R&gt;%\&lt;C-V&gt;\&lt;CR&gt;\&lt;CR&gt;"</pre>
For a real buffer menu, user functions should be used (see <a href="userfunc.html#%3Afunction">:function</a>), but
then the &lt;&gt; notation isn't used, which defeats using it as an example here.</div>
<div class="old-help-para"><h2 class="help-heading">Highlighting matching parens<span class="help-heading-tags">					<a name="match-parens"></a><span class="help-tag">match-parens</span></span></h2></div>
<div class="old-help-para">This example shows the use of a few advanced tricks:
<div class="help-li" style=""> using the <a href="autocmd.html#CursorMoved">CursorMoved</a> autocommand event
</div><div class="help-li" style=""> using <a href="builtin.html#searchpairpos()">searchpairpos()</a> to find a matching paren
</div><div class="help-li" style=""> using <a href="builtin.html#synID()">synID()</a> to detect whether the cursor is in a string or comment
</div><div class="help-li" style=""> using <a href="pattern.html#%3Amatch">:match</a> to highlight something
</div><div class="help-li" style=""> using a <a href="pattern.html#pattern">pattern</a> to match a specific position in the file.
</div></div>
<div class="old-help-para">This should be put in a Vim script file, since it uses script-local variables.
It skips matches in strings or comments, unless the cursor started in string
or comment.  This requires syntax highlighting.</div>
<div class="old-help-para">A slightly more advanced version is used in the <a href="pi_paren.html#matchparen">matchparen</a> plugin.
<pre>let s:paren_hl_on = 0
function s:Highlight_Matching_Paren()
  if s:paren_hl_on
    match none
    let s:paren_hl_on = 0
  endif

  let c_lnum = line('.')
  let c_col = col('.')

  let c = getline(c_lnum)[c_col - 1]
  let plist = split(&amp;matchpairs, ':\|,')
  let i = index(plist, c)
  if i &lt; 0
    return
  endif
  if i % 2 == 0
    let s_flags = 'nW'
    let c2 = plist[i + 1]
  else
    let s_flags = 'nbW'
    let c2 = c
    let c = plist[i - 1]
  endif
  if c == '['
    let c = '\['
    let c2 = '\]'
  endif
  let s_skip ='synIDattr(synID(line("."), col("."), 0), "name") ' ..
        \ '=~?        "string\\|comment"'
  execute 'if' s_skip '| let s_skip = 0 | endif'

  let [m_lnum, m_col] = searchpairpos(c, '', c2, s_flags, s_skip)

  if m_lnum &gt; 0 &amp;&amp; m_lnum &gt;= line('w0') &amp;&amp; m_lnum &lt;= line('w$')
    exe 'match Search /\(\%' .. c_lnum .. 'l\%' .. c_col ..
          \ 'c\)\|\(\%' .. m_lnum .. 'l\%' .. m_col .. 'c\)/'
    let s:paren_hl_on = 1
  endif
endfunction

autocmd CursorMoved,CursorMovedI * call s:Highlight_Matching_Paren()
autocmd InsertEnter * match none</pre></div>
<div class="old-help-para"><h2 class="help-heading">Opening help in the current window<span class="help-heading-tags">				<a name="help-curwin"></a><span class="help-tag">help-curwin</span></span></h2></div>
<div class="old-help-para">By default, help is displayed in a split window.  If you prefer it opens in
the current window, try this custom <code>:HelpCurwin</code> command:
<pre>command -bar -nargs=? -complete=help HelpCurwin execute s:HelpCurwin(&lt;q-args&gt;)
let s:did_open_help = v:false

function s:HelpCurwin(subject) abort
  let mods = 'silent noautocmd keepalt'
  if !s:did_open_help
    execute mods .. ' help'
    execute mods .. ' helpclose'
    let s:did_open_help = v:true
  endif
  if !empty(getcompletion(a:subject, 'help'))
    execute mods .. ' edit ' .. &amp;helpfile
    set buftype=help
  endif
  return 'help ' .. a:subject
endfunction</pre></div>

  
  