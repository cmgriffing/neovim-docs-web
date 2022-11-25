---
title:  Usr_06
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_06.txt"></a><a name="06.1"></a><h1> Usr_06</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_06.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			  Using syntax highlighting</div>
<div class="old-help-para">Black and white text is boring.  With colors your file comes to life.  This
not only looks nice, it also speeds up your work.  Change the colors used for
the different sorts of text.  Print your text, with the colors you see on the
screen.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_06#06.1">06.1</a>  	Switching it on
<a href="/neovim-docs-web/en/usr_06#06.2">06.2</a>  	No or wrong colors?
<a href="/neovim-docs-web/en/usr_06#06.3">06.3</a>  	Different colors
<a href="/neovim-docs-web/en/usr_06#06.4">06.4</a>  	With colors or without colors
<a href="/neovim-docs-web/en/usr_06#06.5">06.5</a>  	Printing with colors
<a href="/neovim-docs-web/en/usr_06#06.6">06.6</a>  	Further reading</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_07#usr_07.txt">usr_07.txt</a>  Editing more than one file
 Previous chapter: <a href="/neovim-docs-web/en/usr_05#usr_05.txt">usr_05.txt</a>  Set your settings
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Switching it on</h2></div>
<div class="old-help-para">Syntax highlighting is enabled by default.  Nvim will automagically detect the
type of file and load the right syntax highlighting.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="06.2"></a><span class="help-tag">06.2</span>  	No or wrong colors?</span></h2></div>
<div class="old-help-para">There can be a number of reasons why you don't see colors:</div>
<div class="old-help-para"><div class="help-li" style=""> Your terminal does not support colors.
	Vim will use bold, italic and underlined text, but this doesn't look
	very nice.  You probably will want to try to get a terminal with
	colors.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Your terminal does support colors, but Vim doesn't know this.
	Make sure your $TERM setting is correct.  For example, when using an
	xterm that supports colors:<pre>setenv TERM xterm-color</pre>
</div></div>
<div class="old-help-para">	or (depending on your shell):<pre>TERM=xterm-color; export TERM</pre></div>
<div class="old-help-para">	The terminal name must match the terminal you are using.</div>
<div class="old-help-para"><div class="help-li" style=""> The file type is not recognized.
	Vim doesn't know all file types, and sometimes it's near to impossible
	to tell what language a file uses.  Try this command:<pre>:set filetype</pre>
</div></div>
<div class="old-help-para">	If the result is "filetype=" then the problem is indeed that Vim
	doesn't know what type of file this is.  You can set the type
	manually:<pre>:set filetype=fortran</pre></div>
<div class="old-help-para">	To see which types are available, look in the directory
	$VIMRUNTIME/syntax.  For the GUI you can use the Syntax menu.
	Setting the filetype can also be done with a <a href="/neovim-docs-web/en/options#modeline">modeline</a>, so that the
	file will be highlighted each time you edit it.  For example, this
	line can be used in a Makefile (put it near the start or end of the
	file):<pre># vim: syntax=make</pre></div>
<div class="old-help-para">	You might know how to detect the file type yourself.  Often the file
	name extension (after the dot) can be used.
	See <a href="/neovim-docs-web/en/filetype#new-filetype">new-filetype</a> for how to tell Vim to detect that file type.</div>
<div class="old-help-para"><div class="help-li" style=""> There is no highlighting for your file type.
	You could try using a similar file type by manually setting it as
	mentioned above.  If that isn't good enough, you can write your own
	syntax file, see <a href="/neovim-docs-web/en/syntax#mysyntaxfile">mysyntaxfile</a>.
</div></div>
<div class="old-help-para">Or the colors could be wrong:</div>
<div class="old-help-para"><div class="help-li" style=""> The colored text is very hard to read.
	Vim guesses the background color that you are using.  If it is black
	(or another dark color) it will use light colors for text.  If it is
	white (or another light color) it will use dark colors for text.  If
	Vim guessed wrong the text will be hard to read.  To solve this, set
	the <a href="/neovim-docs-web/en/options#'background'">'background'</a> option.  For a dark background:<pre>:set background=dark</pre>
</div></div>
<div class="old-help-para">	And for a light background:<pre>:set background=light</pre></div>
<div class="old-help-para">	Make sure you put this _before_ the ":syntax enable" command,
	otherwise the colors will already have been set.  You could do
	":syntax reset" after setting <a href="/neovim-docs-web/en/options#'background'">'background'</a> to make Vim set the default
	colors again.</div>
<div class="old-help-para"><div class="help-li" style=""> The colors are wrong when scrolling bottom to top.
	Vim doesn't read the whole file to parse the text.  It starts parsing
	wherever you are viewing the file.  That saves a lot of time, but
	sometimes the colors are wrong.  A simple fix is hitting <code>CTRL-L</code>.  Or
	scroll back a bit and then forward again.
	For a real fix, see <a href="/neovim-docs-web/en/syntax#%3Asyn-sync">:syn-sync</a>.  Some syntax files have a way to make
	it look further back, see the help for the specific syntax file.  For
	example, <a href="/neovim-docs-web/en/syntax#tex.vim">tex.vim</a> for the TeX syntax.
</div></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="06.3"></a><span class="help-tag">06.3</span>  	Different colors<span class="help-heading-tags">				<a name="%3Asyn-default-override"></a><span class="help-tag">:syn-default-override</span></span></span></h2></div>
<div class="old-help-para">If you don't like the default colors, you can select another color scheme.  In
the GUI use the Edit/Color Scheme menu.  You can also type the command:<pre>:colorscheme evening</pre>
"evening" is the name of the color scheme.  There are several others you might
want to try out.  Look in the directory $VIMRUNTIME/colors.</div>
<div class="old-help-para">When you found the color scheme that you like, add the ":colorscheme" command
to your <a href="/neovim-docs-web/en/starting#init.vim">init.vim</a> file.</div>
<div class="old-help-para">You could also write your own color scheme.  This is how you do it:</div>
<div class="old-help-para">1. Select a color scheme that comes close.  Copy this file to your own Vim
   directory.  For Unix, this should work:<pre>!mkdir -p ~/.config/nvim/colors
!cp $VIMRUNTIME/colors/morning.vim ~/.config/nvim/colors/mine.vim</pre></div>
<div class="old-help-para">   This is done from Vim, because it knows the value of $VIMRUNTIME.</div>
<div class="old-help-para">2. Edit the color scheme file.  These entries are useful:</div>
<div class="old-help-para">	cterm		attributes in a color terminal
	ctermfg		foreground color in a color terminal
	ctermbg		background color in a color terminal
	gui		attributes in the GUI
	guifg		foreground color in the GUI
	guibg		background color in the GUI</div>
<div class="old-help-para">   For example, to make comments green:<pre>:highlight Comment ctermfg=green guifg=green</pre></div>
<div class="old-help-para">   Attributes you can use for "cterm" and "gui" are "bold" and "underline".
   If you want both, use "bold,underline".  For details see the <a href="/neovim-docs-web/en/syntax#%3Ahighlight">:highlight</a>
   command.</div>
<div class="old-help-para">3. Tell Vim to always use your color scheme.  Put this line in your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>:<pre>colorscheme mine</pre>
If you want to see what the most often used color combinations look like, use
this command:<pre>:runtime syntax/colortest.vim</pre>
You will see text in various color combinations.  You can check which ones are
readable and look nice.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="06.4"></a><span class="help-tag">06.4</span>  	With colors or without colors</span></h2></div>
<div class="old-help-para">Displaying text in color takes a lot of effort.  If you find the displaying
too slow, you might want to disable syntax highlighting for a moment:<pre>:syntax clear</pre>
When editing another file (or the same one) the colors will come back.</div>
<div class="old-help-para">If you want to stop highlighting completely use:<pre>:syntax off</pre>
This will completely disable syntax highlighting and remove it immediately for
all buffers.  See <a href="/neovim-docs-web/en/syntax#%3Asyntax-off">:syntax-off</a> for more details.</div>
<div class="old-help-para">							<a name="%3Asyn-manual"></a><code class="help-tag-right">:syn-manual</code>
If you want syntax highlighting only for specific files, use this:<pre>:syntax manual</pre>
This will enable the syntax highlighting, but not switch it on automatically
when starting to edit a buffer.  To switch highlighting on for the current
buffer, set the <a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a> option:<pre>:set syntax=ON</pre></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="06.5"></a><span class="help-tag">06.5</span>  	Printing with colors<span class="help-heading-tags">				<a name="syntax-printing"></a><span class="help-tag">syntax-printing</span></span></span></h2></div>
<div class="old-help-para">In the MS-Windows version you can print the current file with this command:<pre>:hardcopy</pre>
You will get the usual printer dialog, where you can select the printer and a
few settings.  If you have a color printer, the paper output should look the
same as what you see inside Vim.  But when you use a dark background the
colors will be adjusted to look good on white paper.</div>
<div class="old-help-para">There are several options that change the way Vim prints:
	<a href="/neovim-docs-web/en/options#'printdevice'">'printdevice'</a>
	<a href="/neovim-docs-web/en/options#'printheader'">'printheader'</a>
	<a href="/neovim-docs-web/en/options#'printfont'">'printfont'</a>
	<a href="/neovim-docs-web/en/options#'printoptions'">'printoptions'</a></div>
<div class="old-help-para">To print only a range of lines,  use Visual mode to select the lines and then
type the command:<pre>v100j:hardcopy</pre>
"v" starts Visual mode.  "100j" moves a hundred lines down, they will be
highlighted.  Then ":hardcopy" will print those lines.  You can use other
commands to move in Visual mode, of course.</div>
<div class="old-help-para">This also works on Unix, if you have a PostScript printer.  Otherwise, you
will have to do a bit more work.  You need to convert the text to HTML first,
and then print it from a web browser.</div>
<div class="old-help-para">Convert the current file to HTML with this command:<pre>:TOhtml</pre>
In case that doesn't work:<pre>:source $VIMRUNTIME/syntax/2html.vim</pre>
You will see it crunching away, this can take quite a while for a large file.
Some time later another window shows the HTML code.  Now write this somewhere
(doesn't matter where, you throw it away later):
<pre>:write main.c.html</pre>
Open this file in your favorite browser and print it from there.  If all goes
well, the output should look exactly as it does in Vim.  See <a href="/neovim-docs-web/en/syntax#2html.vim">2html.vim</a> for
details.  Don't forget to delete the HTML file when you are done with it.</div>
<div class="old-help-para">Instead of printing, you could also put the HTML file on a web server, and let
others look at the colored text.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="06.6"></a><span class="help-tag">06.6</span>  	Further reading</span></h2></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_44#usr_44.txt">usr_44.txt</a>  Your own syntax highlighted.
<a href="/neovim-docs-web/en/syntax#syntax">syntax</a>      All the details.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_07#usr_07.txt">usr_07.txt</a>  Editing more than one file</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  