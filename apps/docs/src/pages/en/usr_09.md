---
title:  Usr_09
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_09.txt"></a><a name="09.1"></a><h1> Usr_09</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_09.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">				Using the GUI</div>
<div class="old-help-para">Vim works in an ordinary terminal, while gVim has a Graphical User Interface
(GUI).  It can do the same things and a few more.  The GUI offers menus, a
toolbar, scrollbars and other items.  This chapter is about these extra things
that the GUI offers.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_09#09.1">09.1</a>  	Parts of the GUI
<a href="/neovim-docs-web/en/usr_09#09.2">09.2</a>  	Using the mouse
<a href="/neovim-docs-web/en/usr_09#09.3">09.3</a>  	The clipboard
<a href="/neovim-docs-web/en/usr_09#09.4">09.4</a>  	Select mode</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_10#usr_10.txt">usr_10.txt</a>  Making big changes
 Previous chapter: <a href="/neovim-docs-web/en/usr_08#usr_08.txt">usr_08.txt</a>  Splitting windows
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Parts of the GUI</h2></div>
<div class="old-help-para">You might have an icon on your desktop that starts gvim.  Otherwise, one of
these commands should do it:<pre>gvim file.txt
vim -g file.txt</pre>
If this doesn't work you don't have a version of Vim with GUI support.  You
will have to install one first.
   Vim will open a window and display "file.txt" in it.  What the window looks
like depends on the version of Vim.  It should resemble the following picture
(for as far as this can be shown in ASCII!).</div>
<div class="old-help-para">	+----------------------------------------------------+
	| file.txt + (~/dir) - VIM			   X |	&lt;- window title
	+----------------------------------------------------+
	| File	Edit  Tools  Syntax  Buffers  Window  Help   |	&lt;- menubar
	+----------------------------------------------------+
	| aaa  bbb  ccc  ddd  eee  fff	ggg  hhh  iii  jjj   |	&lt;- toolbar
	| aaa  bbb  ccc  ddd  eee  fff	ggg  hhh  iii  jjj   |
	+----------------------------------------------------+
	| file text					 | ^ |
	| ~						 | # |
	| ~						 | # |	&lt;- scrollbar
	| ~						 | # |
	| ~						 | # |
	| ~						 | # |
	|						 | V |
	+----------------------------------------------------+</div>
<div class="old-help-para">The largest space is occupied by the file text.  This shows the file in the
same way as in a terminal.  With some different colors and another font
perhaps.</div>
<div class="old-help-para"><a name="_the-window-title"></a><h3 class="help-heading">THE WINDOW TITLE</h3></div>
<div class="old-help-para">At the very top is the window title.  This is drawn by your window system.
Vim will set the title to show the name of the current file.  First comes the
name of the file.  Then some special characters and the directory of the file
in parens.  These special characters can be present:</div>
<div class="old-help-para">	-		The file cannot be modified (e.g., a help file)
	+	The file contains changes
	=	The file is read-only
	=+	The file is read-only, contains changes anyway</div>
<div class="old-help-para">If nothing is shown you have an ordinary, unchanged file.</div>
<div class="old-help-para"><a name="_the-menubar"></a><h3 class="help-heading">THE MENUBAR</h3></div>
<div class="old-help-para">You know how menus work, right?  Vim has the usual items, plus a few more.
Browse them to get an idea of what you can use them for.  A relevant submenu
is Edit/Global Settings.  You will find these entries:</div>
<div class="old-help-para">	Toggle Toolbar		make the toolbar appear/disappear
	Toggle Bottom Scrollbar	make a scrollbar appear/disappear at the bottom
	Toggle Left Scrollbar	make a scrollbar appear/disappear at the left
	Toggle Right Scrollbar	make a scrollbar appear/disappear at the right</div>
<div class="old-help-para"><a name="_the-toolbar"></a><h3 class="help-heading">THE TOOLBAR</h3></div>
<div class="old-help-para">This contains icons for the most often used actions.  Hopefully the icons are
self-explanatory.  There are tooltips to get an extra hint (move the mouse
pointer to the icon without clicking and don't move it for a second).</div>
<div class="old-help-para">The "Edit/Global Settings/Toggle Toolbar" menu item can be used to make the
toolbar disappear.  If you never want a toolbar, use this command in your
vimrc file:<pre>:set guioptions-=T</pre>
This removes the 'T' flag from the <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a> option.  Other parts of the
GUI can also be enabled or disabled with this option.  See the help for it.</div>
<div class="old-help-para"><a name="_the-scrollbars"></a><h3 class="help-heading">THE SCROLLBARS</h3></div>
<div class="old-help-para">By default there is one scrollbar on the right.  It does the obvious thing.
When you split the window, each window will get its own scrollbar.
   You can make a horizontal scrollbar appear with the menu item
Edit/Global Settings/Toggle Bottom Scrollbar.  This is useful in diff mode, or
when the <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> option has been reset (more about that later).</div>
<div class="old-help-para">When there are vertically split windows, only the windows on the right side
will have a scrollbar.  However, when you move the cursor to a window on the
left, it will be this one that the scrollbar controls.  This takes a bit of
time to get used to.
   When you work with vertically split windows, consider adding a scrollbar on
the left.  This can be done with a menu item, or with the <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a> option:
<pre>:set guioptions+=l</pre>
This adds the 'l' flag to <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="09.2"></a><span class="help-tag">09.2</span>  	Using the mouse</span></h2></div>
<div class="old-help-para">Standards are wonderful.  In Microsoft Windows, you can use the mouse to
select text in a standard manner.  The X Window system also has a standard
system for using the mouse.  Unfortunately, these two standards are not the
same.
   Fortunately, you can customize Vim.  You can make the behavior of the mouse
work like an X Window system mouse or a Microsoft Windows mouse.  The following
command makes the mouse behave like an X Window mouse:<pre>:behave xterm</pre>
The following command makes the mouse work like a Microsoft Windows mouse:<pre>:behave mswin</pre>
The default behavior of the mouse on Unix systems is xterm.  The default
behavior on Windows systems is selected during the installation process.  For
details about what the two behaviors are, see <a href="/neovim-docs-web/en/options#%3Abehave">:behave</a>.  Here follows a
summary.</div>
<div class="old-help-para"><a name="_xterm-mouse-behavior"></a><h3 class="help-heading">XTERM MOUSE BEHAVIOR</h3></div>
<div class="old-help-para">Left mouse click		position the cursor
Left mouse drag			select text in Visual mode
Middle mouse click		paste text from the clipboard
Right mouse click		extend the selected text until the mouse
				pointer</div>
<div class="old-help-para"><a name="_mswin-mouse-behavior"></a><h3 class="help-heading">MSWIN MOUSE BEHAVIOR</h3></div>
<div class="old-help-para">Left mouse click		position the cursor
Left mouse drag			select text in Select mode (see <a href="/neovim-docs-web/en/usr_09#09.4">09.4</a>)
Left mouse click, with Shift	extend the selected text until the mouse
				pointer
Middle mouse click		paste text from the clipboard
Right mouse click		display a pop-up menu</div>
<div class="old-help-para">The mouse can be further tuned.  Check out these options if you want to change
the way how the mouse works:</div>
<div class="old-help-para">	<a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a>			in which mode the mouse is used by Vim
	<a href="/neovim-docs-web/en/options#'mousemodel'">'mousemodel'</a>		what effect a mouse click has
	<a href="/neovim-docs-web/en/options#'mousetime'">'mousetime'</a>		time between clicks for a double-click
	<a href="/neovim-docs-web/en/options#'mousehide'">'mousehide'</a>		hide the mouse while typing
	<a href="/neovim-docs-web/en/options#'selectmode'">'selectmode'</a>		whether the mouse starts Visual or Select mode</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="09.3"></a><span class="help-tag">09.3</span>  	The clipboard</span></h2></div>
<div class="old-help-para">In section <a href="/neovim-docs-web/en/usr_04#04.7">04.7</a> the basic use of the clipboard was explained.  There is one
essential thing to explain about X-windows: There are actually two places to
exchange text between programs.  MS-Windows doesn't have this.</div>
<div class="old-help-para">In X-Windows there is the "current selection".  This is the text that is
currently highlighted.  In Vim this is the Visual area (this assumes you are
using the default option settings).  You can paste this selection in another
application without any further action.
   For example, in this text select a few words with the mouse.  Vim will
switch to Visual mode and highlight the text.  Now start another gvim, without
a file name argument, so that it displays an empty window.  Click the middle
mouse button.  The selected text will be inserted.</div>
<div class="old-help-para">The "current selection" will only remain valid until some other text is
selected.  After doing the paste in the other gvim, now select some characters
in that window.  You will notice that the words that were previously selected
in the other gvim window are displayed differently.  This means that it no
longer is the current selection.</div>
<div class="old-help-para">You don't need to select text with the mouse, using the keyboard commands for
Visual mode works just as well.</div>
<div class="old-help-para"><a name="_the-real-clipboard"></a><h3 class="help-heading">THE REAL CLIPBOARD</h3></div>
<div class="old-help-para">Now for the other place with which text can be exchanged.  We call this the
"real clipboard", to avoid confusion.  Often both the "current selection" and
the "real clipboard" are called clipboard, you'll have to get used to that.
   To put text on the real clipboard, select a few different words in one of
the gvims you have running.  Then use the Edit/Copy menu entry.  Now the text
has been copied to the real clipboard.  You can't see this, unless you have
some application that shows the clipboard contents (e.g., KDE's Klipper).
   Now select the other gvim, position the cursor somewhere and use the
Edit/Paste menu.  You will see the text from the real clipboard is inserted.</div>
<div class="old-help-para"><a name="_using-both"></a><h3 class="help-heading">USING BOTH</h3></div>
<div class="old-help-para">This use of both the "current selection" and the "real clipboard" might sound
a bit confusing.  But it is very useful.  Let's show this with an example.
Use one gvim with a text file and perform these actions:</div>
<div class="old-help-para"><div class="help-li" style="">  Select two words in Visual mode.
</div><div class="help-li" style="">  Use the Edit/Copy menu to get these words onto the clipboard.
</div><div class="help-li" style="">  Select one other word in Visual mode.
</div><div class="help-li" style="">  Use the Edit/Paste menu item.  What will happen is that the single selected
   word is replaced with the two words from the clipboard.
</div><div class="help-li" style="">  Move the mouse pointer somewhere else and click the middle button.  You
   will see that the word you just overwrote with the clipboard is inserted
   here.
</div></div>
<div class="old-help-para">If you use the "current selection" and the "real clipboard" with care, you can
do a lot of useful editing with them.</div>
<div class="old-help-para"><a name="_using-the-keyboard"></a><h3 class="help-heading">USING THE KEYBOARD</h3></div>
<div class="old-help-para">If you don't like using the mouse, you can access the current selection and
the real clipboard with two registers.  The "* register is for the current
selection.
   To make text become the current selection, use Visual mode.  For example,
to select a whole line just press "V".
   To insert the current selection before the cursor:<pre>"*P</pre>
Notice the uppercase "P".  The lowercase "p" puts the text after the cursor.</div>
<div class="old-help-para">The "+ register is used for the real clipboard.  For example, to copy the text
from the cursor position until the end of the line to the clipboard:<pre>"+y$</pre>
Remember, "y" is yank, which is Vim's copy command.
   To insert the contents of the real clipboard before the cursor:<pre>"+P</pre>
It's the same as for the current selection, but uses the plus (+) register
instead of the star () register.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="09.4"></a><span class="help-tag">09.4</span>  	Select mode</span></h2></div>
<div class="old-help-para">And now something that is used more often on MS-Windows than on X-Windows.
But both can do it.  You already know about Visual mode.  Select mode is like
Visual mode, because it is also used to select text.  But there is an obvious
difference: When typing text, the selected text is deleted and the typed text
replaces it.</div>
<div class="old-help-para">To start working with Select mode, you must first enable it (for MS-Windows
it is probably already enabled, but you can do this anyway):<pre>:set selectmode+=mouse</pre>
Now use the mouse to select some text.  It is highlighted like in Visual mode.
Now press a letter.  The selected text is deleted, and the single letter
replaces it.  You are in Insert mode now, thus you can continue typing.</div>
<div class="old-help-para">Since typing normal text causes the selected text to be deleted, you can not
use the normal movement commands "hjkl", "w", etc.  Instead, use the shifted
function keys.  <code>&lt;S-Left&gt;</code> (shifted cursor left key) moves the cursor left.  The
selected text is changed like in Visual mode.  The other shifted cursor keys
do what you expect.  <code>&lt;S-End&gt;</code> and <code>&lt;S-Home&gt;</code> also work.</div>
<div class="old-help-para">You can tune the way Select mode works with the <a href="/neovim-docs-web/en/options#'selectmode'">'selectmode'</a> option.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_10#usr_10.txt">usr_10.txt</a>  Making big changes</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  