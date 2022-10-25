---
title: Tips
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Tips Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="tips" class="section-title" href="#tips">Tips and ideas for using Vim</a>

These are just a few that we thought would be helpful for many users.
You can find many more tips on the wiki.  The URL can be found on
https://www.vim.org

Don't forget to browse the user manual, it also contains lots of useful tips
[usr_toc.txt](#usr_toc.txt).

                                      Type [gO](#gO) to see the table of contents.


## <a id="C-editing" class="section-title" href="#C-editing">Editing C Programs</a> 

There are quite a few features in Vim to help you edit C program files.  Here
is an overview with tags to jump to:

[usr_29.txt](#usr_29.txt)		Moving through programs chapter in the user manual.
[usr_30.txt](#usr_30.txt)		Editing programs chapter in the user manual.
[C-indenting](#C-indenting)		Automatically set the indent of a line while typing
			text.
[=](#=)			Re-indent a few lines.
[format-comments](#format-comments)	Format comments.

[:checkpath](#:checkpath)		Show all recursively included files.
[[i](#[i)			Search for identifier under cursor in current and
			included files.
[[_CTRL-I](#[_CTRL-I)		Jump to match for "[i"
[[I](#[I)			List all lines in current and included files where
			identifier under the cursor matches.
[[d](#[d)			Search for define under cursor in current and included
			files.

[CTRL-]](#CTRL-])		Jump to tag under cursor (e.g., definition of a
			function).
[CTRL-T](#CTRL-T)		Jump back to before a CTRL-] command.
[:tselect](#:tselect)		Select one tag out of a list of matching tags.

[gd](#gd)			Go to Declaration of local variable under cursor.
[gD](#gD)			Go to Declaration of global variable under cursor.

[gf](#gf)			Go to file name under the cursor.

### <a id="Go to matching (), {}, [], / /, #if, #else, #endif." class="section-title" href="#Go to matching (), {}, [], / /, #if, #else, #endif.">[%](#%)</a>
[[/](#[/)			Go to previous start of comment.
[]/](#]/)			Go to next end of comment.
[[#](#[#)			Go back to unclosed #if, #ifdef, or #else.
[]#](#]#)			Go forward to unclosed #else or #endif.
[[(](#[()			Go back to unclosed '('
[])](#]))			Go forward to unclosed ')'
[[{](#[{)			Go back to unclosed '{'
[]}](#]})			Go forward to unclosed '}'

[v_ab](#v_ab)			Select "a block" from "[(" to "])", including braces
[v_ib](#v_ib)			Select "inner block" from "[(" to "])"
[v_aB](#v_aB)			Select "a block" from "[{" to "]}", including brackets
[v_iB](#v_iB)			Select "inner block" from "[{" to "]}"


## <a id="ident-search" class="section-title" href="#ident-search">Finding Where Identifiers Are Used</a> 

You probably already know that [tags](#tags) can be used to jump to the place where a
function or variable is defined.  But sometimes you wish you could jump to all
the places where a function or variable is being used.  This is possible in
two ways:
1. Using the [:grep](#:grep) command.  This should work on most Unix systems,
   but can be slow (it reads all files) and only searches in one directory.
2. Using ID utils.  This is fast and works in multiple directories.  It uses a
   database to store locations.  You will need some additional programs for
   this to work.  And you need to keep the database up to date.

Using the GNU id-tools:

What you need:
- The GNU id-tools installed (mkid is needed to create ID and lid is needed to
  use the macros).
- An identifier database file called "ID" in the current directory.  You can
  create it with the shell command "mkid file1 file2 ..".

Put this in your [init.vim](#init.vim): 
```	map _u :call ID_search()<Bar>execute "/\\<" .. g:word .. "\\>"<CR>
	map _n :n<Bar>execute "/\\<" .. g:word .. "\\>"<CR>

	function! ID_search()
	  let g:word = expand("<cword>")
	  let x = system("lid --key=none " .. g:word)
	  let x = substitute(x, "\n", " ", "g")
	  execute "next " .. x
	endfun

To use it, place the cursor on a word, type "_u" and vim will load the file
that contains the word.  Search for the next occurrence of the word in the
same file with "n".  Go to the next file with "_n".

This has been tested with id-utils-3.2 (which is the name of the id-tools
archive file on your closest gnu-ftp-mirror).

[the idea for this comes from Andreas Kutschera]


## <a id="scroll-insert" class="section-title" href="#scroll-insert">Scrolling in Insert Mode</a> 

If you are in insert mode and you want to see something that is just off the
screen, you can use CTRL-X CTRL-E and CTRL-X CTRL-Y to scroll the screen.
						[i_CTRL-X_CTRL-E](#i_CTRL-X_CTRL-E)

To make this easier, you could use these mappings:
	:inoremap <C-E> <C-X><C-E>
	:inoremap <C-Y> <C-X><C-Y>
You then lose the ability to copy text from the line above/below the cursor
[i_CTRL-E](#i_CTRL-E).

Also consider setting 'scrolloff' to a larger value, so that you can always see
some context around the cursor.  If 'scrolloff' is bigger than half the window
height, the cursor will always be in the middle and the text is scrolled when
the cursor is moved up/down.


## <a id="scroll-smooth" class="section-title" href="#scroll-smooth">Smooth Scrolling</a> 

If you like the scrolling to go a bit smoother, you can use these mappings:
	:map <C-U> <C-Y><C-Y><C-Y><C-Y><C-Y><C-Y><C-Y><C-Y><C-Y><C-Y><C-Y><C-Y><C-Y><C-Y><C-Y><C-Y>
	:map <C-D> <C-E><C-E><C-E><C-E><C-E><C-E><C-E><C-E><C-E><C-E><C-E><C-E><C-E><C-E><C-E><C-E>


## <a id="type-mistakes" class="section-title" href="#type-mistakes">Correcting Common Typing Mistakes</a> 

When there are a few words that you keep on typing in the wrong way, make
abbreviations that correct them.  For example:
	:ab teh the
	:ab fro for


## <a id="count-items" class="section-title" href="#count-items">Counting Words, Lines, Etc.</a> 

To count how often any pattern occurs in the current buffer use the substitute
command and add the 'n' flag to avoid the substitution.  The reported number
of substitutions is the number of items.  Examples:

	:%s/./&/gn		characters
	:%s/\i\+/&/gn		words
	:%s/^//n		lines
	:%s/the/&/gn		"the" anywhere
	:%s/\<the\>/&/gn	"the" as a word

You might want to reset 'hlsearch' or do ":nohlsearch".
Add the 'e' flag if you don't want an error when there are no matches.

An alternative is using [v_g_CTRL-G](#v_g_CTRL-G) in Visual mode.

If you want to find matches in multiple files use [:vimgrep](#:vimgrep).

### <a id="count-bytes" class="section-title" href="#count-bytes">Note:</a>
If you want to count bytes, you can use this:

	Visually select the characters (block is also possible)
	Use "y" to yank the characters
	Use the strlen() function:
		:echo strlen(@")
A line break is counted for one byte.


## <a id="restore-position" class="section-title" href="#restore-position">Restoring the Cursor Position</a> 

Sometimes you want to write a mapping that makes a change somewhere in the
file and restores the cursor position, without scrolling the text.  For
example, to change the date mark in a file:
### <a id=":map <F2> msHmtgg/Last [cC]hange:\s/e+1<CR>"_D"=strftime("%Y %b %d")<CR>p'tzt`s" class="section-title" href="#:map <F2> msHmtgg/Last [cC]hange:\s/e+1<CR>"_D"=strftime("%Y %b %d")<CR>p'tzt`s">Note:</a>

Breaking up saving the position:
	ms	store cursor position in the 's' mark
	H	go to the first line in the window
	mt	store this position in the 't' mark

Breaking up restoring the position:
	't	go to the line previously at the top of the window
	zt	scroll to move this line to the top of the window
	`s	jump to the original position of the cursor

For something more advanced see [winsaveview()| and |winrestview()](#winsaveview()| and |winrestview()).


## <a id="rename-files" class="section-title" href="#rename-files">Renaming Files</a> 

Say I have a directory with the following files in them (directory picked at
random :-):

buffer.c
charset.c
digraph.c
...

and I want to rename *.c *.bla.  I'd do it like this:

	$ vim
	:r !ls *.c
	:%s/\(.*\).c/mv & \1.bla
	:w !sh
	:q!


## <a id="change-name" class="section-title" href="#change-name">Change a Name in Multiple Files</a> 

Example for using a script file to change a name in several files:

	Create a file "subs.vim" containing substitute commands and a :update
	command:
		:%s/Jones/Smith/g
		:%s/Allen/Peter/g
		:update
```

	Execute Vim on all files you want to change, and source the script for
	each argument: 
```
### <a id="vim .let" class="section-title" href="#vim .let">Note:</a>
		argdo source subs.vim

See [:argdo](#:argdo).


## <a id="speed-up" class="section-title" href="#speed-up">Speeding Up External Commands</a> 

In some situations, execution of an external command can be very slow.  This
can also slow down wildcard expansion on Unix.  Here are a few suggestions to
increase the speed.

If your .cshrc (or other file, depending on the shell used) is very long, you
should separate it into a section for interactive use and a section for
non-interactive use (often called secondary shells).  When you execute a
command from Vim like ":!ls", you do not need the interactive things (for
example, setting the prompt).  Put the stuff that is not needed after these
lines:

	if ($?prompt == 0) then
		exit 0
	endif

Another way is to include the "-f" flag in the 'shell' option, e.g.:

	:set shell=csh\ -f

(the backslash is needed to include the space in the option).
This will make csh completely skip the use of the .cshrc file.  This may cause
some things to stop working though.


## <a id="useful-mappings" class="section-title" href="#useful-mappings">Useful Mappings</a> 

Here are a few mappings that some people like to use.

### <a id="map-backtick" class="section-title" href="#map-backtick">Note:</a>
	:map ' `
Make the single quote work like a backtick.  Puts the cursor on the column of
a mark, instead of going to the first non-blank character in the line.

### <a id="emacs-keys" class="section-title" href="#emacs-keys">Note:</a>
For Emacs-style editing on the command-line:
	" start of line
	:cnoremap <C-A>		<Home>
	" back one character
	:cnoremap <C-B>		<Left>
	" delete character under cursor
	:cnoremap <C-D>		<Del>
	" end of line
	:cnoremap <C-E>		<End>
	" forward one character
	:cnoremap <C-F>		<Right>
	" recall newer command-line
	:cnoremap <C-N>		<Down>
	" recall previous (older) command-line
	:cnoremap <C-P>		<Up>
	" back one word
	:cnoremap <Esc><C-B>	<S-Left>
	" forward one word
	:cnoremap <Esc><C-F>	<S-Right>
```

### <a id="format-bullet-list" class="section-title" href="#format-bullet-list">Note:</a>
This mapping will format any bullet list.  It requires that there is an empty
line above and below each list entry.  The expression commands are used to
be able to give comments to the parts of the mapping. 
```
	:let m =     ":map _f  :set ai<CR>"   " need 'autoindent' set
	:let m ..= "{O<Esc>"		      " add empty line above item
	:let m ..= "}{)^W"		      " move to text after bullet
	:let m ..= "i     <CR>     <Esc>"     " add space for indent
	:let m ..= "gq}"		      " format text after the bullet
	:let m ..= "{dd"		      " remove the empty line
	:let m ..= "5lDJ"		      " put text after bullet
	:execute m			      |" define the mapping

(<> notation [<>](#<>).  Note that this is all typed literally.  ^W is "^" "W", not
CTRL-W.)

Note that the last comment starts with |", because the ":execute" command
doesn't accept a comment directly.

You also need to set 'textwidth' to a non-zero value, e.g.,
	:set tw=70

A mapping that does about the same, but takes the indent for the list from the
first line (Note: this mapping is a single long line with a lot of spaces):
	:map _f :set ai<CR>}{a                                                          <Esc>WWmmkD`mi<CR><Esc>kkddpJgq}'mJO<Esc>j
```

### <a id="collapse" class="section-title" href="#collapse">Note:</a>
These two mappings reduce a sequence of empty (;b) or blank (;n) lines into a
single line 
```    :map ;b   GoZ<Esc>:g/^$/.,/./-j<CR>Gdd
    :map ;n   GoZ<Esc>:g/^[ <Tab>]*$/.,/[^ <Tab>]/-j<CR>Gdd


## <a id="gzip-helpfile" class="section-title" href="#gzip-helpfile">Compressing the Help Files</a> 

For those of you who are really short on disk space, you can compress the help
files and still be able to view them with Vim.  This makes accessing the help
files a bit slower and requires the "gzip" program.

(1) Compress all the help files: "gzip doc/*.txt".

(2) Edit "doc/tags" and change the ".txt" to ".txt.gz":
	:%s=\(\t.*\.txt\)\t=\1.gz\t=

(3) Add this line to your vimrc:
	set helpfile={dirname}/help.txt.gz

Where {dirname} is the directory where the help files are.  The [gzip](#gzip) plugin
will take care of decompressing the files.
You must make sure that $VIMRUNTIME is set to where the other Vim files are,
when they are not in the same location as the compressed "doc" directory.  See
[$VIMRUNTIME](#$VIMRUNTIME).


## <a id="hex-editing using-xxd" class="section-title" href="#hex-editing using-xxd">Hex Editing</a> 

See section [23.3](#23.3) of the user manual.

If one has a particular extension that one uses for binary files (such as exe,
bin, etc), you may find it helpful to automate the process with the following
### <a id="Change that ".bin" to whatever" class="section-title" href="#Change that ".bin" to whatever">bit of autocmds for your [init.vim](#init.vim).</a>
comma-separated list of extension(s) you find yourself wanting to edit:

	" vim -b : edit binary using xxd-format!
	augroup Binary
	  au!
	  au BufReadPre  *.bin let &bin=1
### <a id="au BufReadPost .bin if &bin | %!xxd" class="section-title" href="#au BufReadPost .bin if &bin | %!xxd">Note:</a>
### <a id="au BufReadPost .bin set ft=xxd | endif" class="section-title" href="#au BufReadPost .bin set ft=xxd | endif">Note:</a>
### <a id="au BufWritePre .bin if &bin | %!xxd -r" class="section-title" href="#au BufWritePre .bin if &bin | %!xxd -r">Note:</a>
### <a id="au BufWritePre .bin endif" class="section-title" href="#au BufWritePre .bin endif">Note:</a>
### <a id="au BufWritePost .bin if &bin | %!xxd" class="section-title" href="#au BufWritePost .bin if &bin | %!xxd">Note:</a>
### <a id="au BufWritePost .bin set nomod | endif" class="section-title" href="#au BufWritePost .bin set nomod | endif">Note:</a>
	augroup END


## <a id="autocmd-&lt;&gt;" class="section-title" href="#autocmd-&lt;&gt;">Using <> Notation in Autocommands</a> 

The <> notation is not recognized in the argument of an :autocmd.  To avoid
having to use special characters, you could use a self-destroying mapping to
get the <> notation and then call the mapping from the autocmd.  Example:

### <a id="map-self-destroy" class="section-title" href="#map-self-destroy">Note:</a>
 " This is for automatically adding the name of the file to the menu list.
 " It uses a self-destroying mapping!
 " 1. use a line in the buffer to convert the 'dots' in the file name to \.
 " 2. store that in register '"'
 " 3. add that name to the Buffers menu list
 " WARNING: this does have some side effects, like overwriting the
 " current register contents and removing any mapping for the "i" command.
 "
 autocmd BufNewFile,BufReadPre * nmap i :nunmap i<CR>O<C-R>%<Esc>:.g/\./s/\./\\./g<CR>0"9y$u:menu Buffers.<C-R>9 :buffer <C-R>%<C-V><CR><CR>
 autocmd BufNewFile,BufReadPre * normal i

Another method, perhaps better, is to use the ":execute" command.  In the
string you can use the <> notation by preceding it with a backslash.  Don't
forget to double the number of existing backslashes and put a backslash before
'"'.
### <a id="autocmd BufNewFile,BufReadPre  exe "normal O\<C-R>%\<Esc>:.g/\\./s/\\./\\\\./g\<CR>0\"9y$u:menu Buffers.\<C-R>9 :buffer \<C-R>%\<C-V>\<CR>\<CR>"" class="section-title" href="#autocmd BufNewFile,BufReadPre  exe "normal O\<C-R>%\<Esc>:.g/\\./s/\\./\\\\./g\<CR>0\"9y$u:menu Buffers.\<C-R>9 :buffer \<C-R>%\<C-V>\<CR>\<CR>"">Note:</a>

For a real buffer menu, user functions should be used (see [:function](#:function)), but
then the <> notation isn't used, which defeats using it as an example here.


## <a id="match-parens" class="section-title" href="#match-parens">Highlighting Matching Parens</a> 

This example shows the use of a few advanced tricks:
- using the [CursorMoved](#CursorMoved) autocommand event
- using [searchpairpos()](#searchpairpos()) to find a matching paren
- using [synID()](#synID()) to detect whether the cursor is in a string or comment
- using [:match](#:match) to highlight something
- using a [pattern](#pattern) to match a specific position in the file.

This should be put in a Vim script file, since it uses script-local variables.
It skips matches in strings or comments, unless the cursor started in string
or comment.  This requires syntax highlighting.

A slightly more advanced version is used in the [matchparen](#matchparen) plugin.
	let s:paren_hl_on = 0
	function s:Highlight_Matching_Paren()
	  if s:paren_hl_on
	    match none
	    let s:paren_hl_on = 0
	  endif

	  let c_lnum = line('.')
	  let c_col = col('.')

	  let c = getline(c_lnum)[c_col - 1]
	  let plist = split(&matchpairs, ':\|,')
	  let i = index(plist, c)
	  if i < 0
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
		\ '=~?	"string\\|comment"'
	  execute 'if' s_skip '[ let s_skip = 0 ](# let s_skip = 0 ) endif'

	  let [m_lnum, m_col] = searchpairpos(c, '', c2, s_flags, s_skip)

	  if m_lnum > 0 && m_lnum >= line('w0') && m_lnum <= line('w$')
	    exe 'match Search /\(\%' .. c_lnum .. 'l\%' .. c_col ..
		  \ 'c\)\|\(\%' .. m_lnum .. 'l\%' .. m_col .. 'c\)/'
	    let s:paren_hl_on = 1
	  endif
	endfunction

	autocmd CursorMoved,CursorMovedI * call s:Highlight_Matching_Paren()
	autocmd InsertEnter * match none
```


## <a id="help-curwin" class="section-title" href="#help-curwin">Opening Help in the Current Window</a> 

By default, help is displayed in a split window.  If you prefer it opens in
the current window, try this custom `:HelpCurwin` command:

```	command -bar -nargs=? -complete=help HelpCurwin execute s:HelpCurwin(<q-args>)
	let s:did_open_help = v:false
	
	function s:HelpCurwin(subject) abort
	  let mods = 'silent noautocmd keepalt'
	  if !s:did_open_help
	    execute mods .. ' help'
	    execute mods .. ' helpclose'
	    let s:did_open_help = v:true
	  endif
	  if !empty(getcompletion(a:subject, 'help'))
	    execute mods .. ' edit ' .. &helpfile
	    set buftype=help
	  endif
	  return 'help ' .. a:subject
	endfunction
```



 vim:tw=78:ts=8:noet:ft=help:norl:

