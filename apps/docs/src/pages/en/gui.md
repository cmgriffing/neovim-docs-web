---
title:  Gui
layout: ../../layouts/MainLayout.astro
---

  <a name="gui.txt"></a><a name="gui"></a><h1> Gui</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/gui.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Nvim Graphical User Interface <a name="GUI"></a><code class="help-tag">GUI</code></div>
<div class="old-help-para"><h2 class="help-heading">Starting the GUI<span class="help-heading-tags">				<a name="gui-start"></a><span class="help-tag">gui-start</span> <a name="E229"></a><span class="help-tag">E229</span> <a name="E233"></a><span class="help-tag">E233</span></span></h2></div>
<div class="old-help-para">				<a name="ginit.vim"></a><code class="help-tag-right">ginit.vim</code> <a name="gui-init"></a><code class="help-tag">gui-init</code> <a name="gvimrc"></a><code class="help-tag">gvimrc</code> <a name="%24MYGVIMRC"></a><code class="help-tag">$MYGVIMRC</code>
For GUI-specific configuration Nvim provides the <a href="/neovim-docs-web/en/autocmd#UIEnter">UIEnter</a> event.  This
happens after other <a href="/neovim-docs-web/en/starting#initialization">initialization</a>s, like reading your vimrc file.</div>
<div class="old-help-para">Example: this sets "g:gui" to the value of the UI's "rgb" field:<pre>:autocmd UIEnter * let g:gui = filter(nvim_list_uis(),{k,v-&gt; v.chan==v:event.chan})[0].rgb</pre></div>
<div class="old-help-para">						<a name="%3Awinp"></a><code class="help-tag-right">:winp</code> <a name="%3Awinpos"></a><code class="help-tag">:winpos</code> <a name="E188"></a><code class="help-tag">E188</code>
:winp[os]
		Display current position of the top left corner of the GUI vim
		window in pixels.  Does not work in all versions.
		Also see <a href="/neovim-docs-web/en/builtin#getwinpos()">getwinpos()</a>, <a href="/neovim-docs-web/en/builtin#getwinposx()">getwinposx()</a> and <a href="/neovim-docs-web/en/builtin#getwinposy()">getwinposy()</a>.</div>
<div class="old-help-para">:winp[os] <code>{X}</code> <code>{Y}</code>							<a name="E466"></a><code class="help-tag-right">E466</code>
		Put the GUI vim window at the given <code>{X}</code> and <code>{Y}</code> coordinates.
		The coordinates should specify the position in pixels of the
		top left corner of the window.
		When the GUI window has not been opened yet, the values are
		remembered until the window is opened.  The position is
		adjusted to make the window fit on the screen (if possible).</div>
<div class="old-help-para">						    <a name="%3Awin"></a><code class="help-tag-right">:win</code> <a name="%3Awinsize"></a><code class="help-tag">:winsize</code> <a name="E465"></a><code class="help-tag">E465</code>
:win[size] <code>{width}</code> <code>{height}</code>
		Set the window height to <code>{width}</code> by <code>{height}</code> characters.
		Obsolete, use ":set lines=11 columns=22".</div>
<div class="old-help-para"><h2 class="help-heading">Scrollbars<span class="help-heading-tags">						<a name="gui-scrollbars"></a><span class="help-tag">gui-scrollbars</span></span></h2></div>
<div class="old-help-para">There are vertical scrollbars and a horizontal scrollbar.  You may
configure which ones appear with the <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a> option.</div>
<div class="old-help-para">The interface looks like this (with ":set guioptions=mlrb"):</div>
<div class="old-help-para">		       +------------------------------+ `		       | File  Edit		 Help | &lt;- Menu bar (m) `		       +-+--------------------------+-+ `		       <a href="/neovim-docs-web/en/motion#%5E">^</a>  			    <a href="/neovim-docs-web/en/motion#%5E">^</a> `		       <a href="/neovim-docs-web/en/pattern#%23">#</a> Text area.		    <a href="/neovim-docs-web/en/pattern#%23">#</a> `		       | |			    | | `		       <a href="/neovim-docs-web/en/visual#v">v</a>__________________________|v| ` Normal status line -&gt; |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+gui.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/gui.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%20%20%20%20%20%20%20%7C%23%7C%20Text%20area.%09%09%20%20%20%20%7C%23%7C%20%60%0A%09%09%20%20%20%20%20%20%20%7C%20%7C%09%09%09%20%20%20%20%7C%20%7C%20%60%0A%09%09%20%20%20%20%20%20%20%7Cv%7C__________________________%7Cv%7C%20%60%0A%20Normal%20status%20line%20-%3E%20%7C-%2B%20File.c%09%20%20%20%20%20%20%205%2C2%20%20%2B-%7C%20%60%0A%20between%20Vim%20windows%20%20%20%7C%5E%7C%22%22%22%22%22%22%22%22%22%22%22%22%22%22%22%22%22%22%22%22%22%22%22%22%22%22%7C%5E%7C%20%60%0A%09%09%20%20%20%20%20%20%20%7C%20%7C%09%09%09%20%20%20%20%7C%20%7C%20%60%0A%09%09%20%20%20%20%20%20%20%7C%20%7C%20Another%20file%20buffer.%20%20%20%20%20%7C%20%7C%20%60%0D%60%60%60">-+</a> File.c	       5,2  +-| ` between Vim windows   <a href="/neovim-docs-web/en/motion#%5E">^</a>""""""""""""""""""""""""""|^| `		       | |			    | | `		       | | Another file buffer.     | | `		       | |			    | | `		       <a href="/neovim-docs-web/en/pattern#%23">#</a>  			    <a href="/neovim-docs-web/en/pattern#%23">#</a> ` Left scrollbar (l) -&gt; <a href="/neovim-docs-web/en/pattern#%23">#</a>  			    <a href="/neovim-docs-web/en/pattern#%23">#</a> &lt;- Right `		       <a href="/neovim-docs-web/en/pattern#%23">#</a>  			    <a href="/neovim-docs-web/en/pattern#%23">#</a>    scrollbar (r) `		       | |			    | | `		       <a href="/neovim-docs-web/en/visual#v">v</a>  			    <a href="/neovim-docs-web/en/visual#v">v</a> `		       +-+--------------------------+-+ `		       | |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+gui.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/gui.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%20%20%20%20%20%20%20%7C%20%7C%09%09%09%20%20%20%20%7C%20%7C%20%60%0A%09%09%20%20%20%20%20%20%20%7Cv%7C%09%09%09%20%20%20%20%7Cv%7C%20%60%0A%09%09%20%20%20%20%20%20%20%2B-%2B--------------------------%2B-%2B%20%60%0A%09%09%20%20%20%20%20%20%20%7C%20%7C%3C%20%23%23%23%23%09%09%20%20%20%3E%7C%20%7C%20%3C-%20Bottom%20%60%0A%09%09%20%20%20%20%20%20%20%2B-%2B--------------------------%2B-%2B%20%20%20%20scrollbar%20(b)%20%60%0A%0AAny%20of%20the%20scrollbar%20or%20menu%20components%20may%20be%20turned%20off%20by%20not%20putting%20the%0D%60%60%60">&lt;</a> ####		   &gt;| | &lt;- Bottom `		       +-+--------------------------+-+    scrollbar (b) `
Any of the scrollbar or menu components may be turned off by not putting the
appropriate letter in the <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a> string.  The bottom scrollbar is
only useful when <a href="/neovim-docs-web/en/options#'nowrap'">'nowrap'</a> is set.</div>
<div class="old-help-para"><h3 class="help-heading">VERTICAL SCROLLBARS<span class="help-heading-tags">					<a name="gui-vert-scroll"></a><span class="help-tag">gui-vert-scroll</span></span></h3></div>
<div class="old-help-para">Each Vim window has a scrollbar next to it which may be scrolled up and down
to move through the text in that buffer.  The size of the scrollbar-thumb
indicates the fraction of the buffer which can be seen in the window.
When the scrollbar is dragged all the way down, the last line of the file
will appear in the top of the window.</div>
<div class="old-help-para">If a window is shrunk to zero height (by the growth of another window) its
scrollbar disappears.  It reappears when the window is restored.</div>
<div class="old-help-para">If a window is vertically split, it will get a scrollbar when it is the
current window and when, taking the middle of the current window and drawing a
vertical line, this line goes through the window.
When there are scrollbars on both sides, and the middle of the current window
is on the left half, the right scrollbar column will contain scrollbars for
the rightmost windows.  The same happens on the other side.</div>
<div class="old-help-para"><h3 class="help-heading">HORIZONTAL SCROLLBARS<span class="help-heading-tags">					<a name="gui-horiz-scroll"></a><span class="help-tag">gui-horiz-scroll</span></span></h3></div>
<div class="old-help-para">The horizontal scrollbar (at the bottom of the Vim GUI) may be used to
scroll text sideways when the <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> option is turned off.  The
scrollbar-thumb size is such that the text of the longest visible line may be
scrolled as far as possible left and right.  The cursor is moved when
necessary, it must remain on a visible character (unless <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> is
set).</div>
<div class="old-help-para">Computing the length of the longest visible line takes quite a bit of
computation, and it has to be done every time something changes.  If this
takes too much time or you don't like the cursor jumping to another line,
include the 'h' flag in <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a>.  Then the scrolling is limited by the
text of the current cursor line.</div>
<div class="old-help-para"><h2 class="help-heading">Drag and drop<span class="help-heading-tags">						<a name="drag-n-drop"></a><span class="help-tag">drag-n-drop</span></span></h2></div>
<div class="old-help-para">You can drag and drop one or more files into the Vim window, where they will
be opened as if a <a href="/neovim-docs-web/en/windows#%3Adrop">:drop</a> command was used.</div>
<div class="old-help-para">If you hold down Shift while doing this, Vim changes to the first dropped
file's directory.  If you hold Ctrl Vim will always split a new window for the
file.  Otherwise it's only done if the current buffer has been changed.</div>
<div class="old-help-para">You can also drop a directory on Vim.  This starts the explorer plugin for
that directory (assuming it was enabled, otherwise you'll get an error
message).  Keep Shift pressed to change to the directory instead.</div>
<div class="old-help-para">If Vim happens to be editing a command line, the names of the dropped files
and directories will be inserted at the cursor.  This allows you to use these
names with any Ex command.  Special characters (space, tab, double quote and
'|'; backslash on non-MS-Windows systems) will be escaped.</div>
<div class="old-help-para"><h2 class="help-heading">Menus<span class="help-heading-tags">							<a name="menus"></a><span class="help-tag">menus</span></span></h2></div>
<div class="old-help-para">For an introduction see <a href="/neovim-docs-web/en/usr_42#usr_42.txt">usr_42.txt</a> in the user manual.</div>
<div class="old-help-para">Using Menus						<a name="using-menus"></a><code class="help-tag-right">using-menus</code></div>
<div class="old-help-para">Basically, menus can be used just like mappings.  You can define your own
menus, as many as you like.
Long-time Vim users won't use menus much.  But the power is in adding your own
menus and menu items.  They are most useful for things that you can't remember
what the key sequence was.</div>
<div class="old-help-para">For creating menus in a different language, see <a href="/neovim-docs-web/en/mlang#%3Amenutrans">:menutrans</a>.
If you don't want to use menus at all, see <a href="/neovim-docs-web/en/options#'go-M'">'go-M'</a>.</div>
<div class="old-help-para">							<a name="menu.vim"></a><code class="help-tag-right">menu.vim</code>
The default menus are read from the file "$VIMRUNTIME/menu.vim".  See
<a href="/neovim-docs-web/en/starting#%24VIMRUNTIME">$VIMRUNTIME</a> for where the path comes from.  You can set up your own menus.
Starting off with the default set is a good idea.  You can add more items, or,
if you don't like the defaults at all, start with removing all menus
<a href="/neovim-docs-web/en/gui#%3Aunmenu-all">:unmenu-all</a>.  You can also avoid the default menus being loaded by adding
this line to your vimrc file (NOT your gvimrc file!):<pre>:let did_install_default_menus = 1</pre>
If you also want to avoid the Syntax menu:<pre>:let did_install_syntax_menu = 1</pre>
The first item in the Syntax menu can be used to show all available filetypes
in the menu (which can take a bit of time to load).  If you want to have all
filetypes already present at startup, add:<pre>:let do_syntax_sel_menu = 1</pre>
Note that the menu.vim is sourced when <code>:syntax on</code> or <code>:filetype on</code> is
executed or after your .vimrc file is sourced.  This means that the <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>
option and the language of messages (<code>:language messages</code>) must be set before
that (if you want to change them).</div>
<div class="old-help-para">							<a name="console-menus"></a><code class="help-tag-right">console-menus</code>
Although this documentation is in the GUI section, you can actually use menus
in console mode too.  You will have to load <a href="/neovim-docs-web/en/gui#menu.vim">menu.vim</a> explicitly then, it is
not done by default.  You can use the <a href="/neovim-docs-web/en/gui#%3Aemenu">:emenu</a> command and command-line
completion with <a href="/neovim-docs-web/en/options#'wildmenu'">'wildmenu'</a> to access the menu entries almost like a real menu
system.  To do this, put these commands in your vimrc file:<pre>:source $VIMRUNTIME/menu.vim
:set wildmenu
:set cpo-=&lt;
:set wcm=&lt;C-Z&gt;
:map &lt;F4&gt; :emenu &lt;C-Z&gt;</pre>
Pressing <code>&lt;F4&gt;</code> will start the menu.  You can now use the cursor keys to select
a menu entry.  Hit <code>&lt;Enter&gt;</code> to execute it.  Hit <code>&lt;Esc&gt;</code> if you want to cancel.</div>
<div class="old-help-para">Creating New Menus					<a name="creating-menus"></a><code class="help-tag-right">creating-menus</code></div>
<div class="old-help-para">				<a name="%3Ame"></a><code class="help-tag-right">:me</code>  <a name="%3Amenu"></a><code class="help-tag">:menu</code>  <a name="%3Anoreme"></a><code class="help-tag">:noreme</code>  <a name="%3Anoremenu"></a><code class="help-tag">:noremenu</code>
				<a name="E330"></a><code class="help-tag-right">E330</code> <a name="E327"></a><code class="help-tag">E327</code> <a name="E331"></a><code class="help-tag">E331</code> <a name="E336"></a><code class="help-tag">E336</code> <a name="E333"></a><code class="help-tag">E333</code>
				<a name="E328"></a><code class="help-tag-right">E328</code> <a name="E329"></a><code class="help-tag">E329</code> <a name="E337"></a><code class="help-tag">E337</code> <a name="E792"></a><code class="help-tag">E792</code>
To create a new menu item, use the ":menu" commands.  They are mostly like
the ":map" set of commands (see <a href="/neovim-docs-web/en/map#map-modes">map-modes</a>), but the first argument is a menu
item name, given as a path of menus and submenus with a '.' between them,
e.g.:<pre>:menu File.Save  :w&lt;CR&gt;
:inoremenu File.Save  &lt;C-O&gt;:w&lt;CR&gt;
:menu Edit.Big\ Changes.Delete\ All\ Spaces  :%s/[ ^I]//g&lt;CR&gt;</pre>
This last one will create a new item in the menu bar called "Edit", holding
the mouse button down on this will pop up a menu containing the item
"Big Changes", which is a sub-menu containing the item "Delete All Spaces",
which when selected, performs the operation.</div>
<div class="old-help-para">To create a menu for terminal mode, use <a href="/neovim-docs-web/en/gui#%3Atlmenu">:tlmenu</a> instead of <a href="/neovim-docs-web/en/gui#%3Atmenu">:tmenu</a> unlike
key mapping (<a href="/neovim-docs-web/en/map#%3Atmap">:tmap</a>). This is because <a href="/neovim-docs-web/en/gui#%3Atmenu">:tmenu</a> is already used for defining
tooltips for menus. See <a href="/neovim-docs-web/en/nvim_terminal_emulator#terminal-input">terminal-input</a>.</div>
<div class="old-help-para">Special characters in a menu name:</div>
<div class="old-help-para">							<a name="menu-shortcut"></a><code class="help-tag-right">menu-shortcut</code>
	&amp;	The next character is the shortcut key.  Make sure each
		shortcut key is only used once in a (sub)menu.  If you want to
		insert a literal "&amp;" in the menu name use "&amp;&amp;".
							<a name="menu-text"></a><code class="help-tag-right">menu-text</code>
	<code>&lt;Tab&gt;</code>	Separates the menu name from right-aligned text.  This can be
		used to show the equivalent typed command.  The text "&lt;Tab&gt;"
		can be used here for convenience.  If you are using a real
		tab, don't forget to put a backslash before it!
Example:<pre>:amenu &amp;File.&amp;Open&lt;Tab&gt;:e  :browse e&lt;CR&gt;</pre>
[typed literally]
With the shortcut "F" (while keeping the <code>&lt;Alt&gt;</code> key pressed), and then "O",
this menu can be used.  The second part is shown as "Open     :e".  The ":e"
is right aligned, and the "O" is underlined, to indicate it is the shortcut.</div>
<div class="old-help-para">					<a name="%3Aam"></a><code class="help-tag-right">:am</code>  <a name="%3Aamenu"></a><code class="help-tag">:amenu</code>  <a name="%3Aan"></a><code class="help-tag">:an</code>      <a name="%3Aanoremenu"></a><code class="help-tag">:anoremenu</code>
The ":amenu" command can be used to define menu entries for all modes at once,
expect for Terminal mode.  To make the command work correctly, a character is
automatically inserted for some modes:
<div class="help-column_heading">	mode		inserted	appended</div>	Normal		nothing		nothing
	Visual		<code>&lt;C-C&gt;</code>		<code>&lt;C-\&gt;</code><code>&lt;C-G&gt;</code>
	Insert		<code>&lt;C-\&gt;</code><code>&lt;C-O&gt;</code>
	Cmdline		<code>&lt;C-C&gt;</code>		<code>&lt;C-\&gt;</code><code>&lt;C-G&gt;</code>
	Op-pending	<code>&lt;C-C&gt;</code>		<code>&lt;C-\&gt;</code><code>&lt;C-G&gt;</code></div>
<div class="old-help-para">Example:<pre>:amenu File.Next        :next^M</pre>
is equal to:<pre>:nmenu File.Next        :next^M
:vmenu File.Next        ^C:next^M^\^G
:imenu File.Next        ^\^O:next^M
:cmenu File.Next        ^C:next^M^\^G
:omenu File.Next        ^C:next^M^\^G</pre>
Careful: In Insert mode this only works for a SINGLE Normal mode command,
because of the <code>CTRL-O</code>.  If you have two or more commands, you will need to use
the ":imenu" command.  For inserting text in any mode, you can use the
expression register:<pre>:amenu Insert.foobar   "='foobar'&lt;CR&gt;P</pre>
The special text <code>&lt;Cmd&gt;</code> begins a "command menu", it executes the command
directly without changing modes.  Where you might use ":...&lt;CR&gt;" you can
instead use "&lt;Cmd&gt;...&lt;CR&gt;".  See <a href="/neovim-docs-web/en/map#%3CCmd%3E">&lt;Cmd&gt;</a> for more info.  Example:<pre>anoremenu File.Next &lt;Cmd&gt;next&lt;CR&gt;</pre>
Note that <code>&lt;Esc&gt;</code> in Cmdline mode executes the command, like in a mapping.  This
is Vi compatible.  Use <code>CTRL-C</code> to quit Cmdline mode.</div>
<div class="old-help-para">		<a name="%3Anme"></a><code class="help-tag-right">:nme</code> <a name="%3Anmenu"></a><code class="help-tag">:nmenu</code>  <a name="%3Annoreme"></a><code class="help-tag">:nnoreme</code> <a name="%3Annoremenu"></a><code class="help-tag">:nnoremenu</code> <a name="%3Anunme"></a><code class="help-tag">:nunme</code> <a name="%3Anunmenu"></a><code class="help-tag">:nunmenu</code>
Menu commands starting with "n" work in Normal mode. <a href="/neovim-docs-web/en/map#mapmode-n">mapmode-n</a></div>
<div class="old-help-para">		<a name="%3Aome"></a><code class="help-tag-right">:ome</code> <a name="%3Aomenu"></a><code class="help-tag">:omenu</code>  <a name="%3Aonoreme"></a><code class="help-tag">:onoreme</code> <a name="%3Aonoremenu"></a><code class="help-tag">:onoremenu</code> <a name="%3Aounme"></a><code class="help-tag">:ounme</code> <a name="%3Aounmenu"></a><code class="help-tag">:ounmenu</code>
Menu commands starting with "o" work in Operator-pending mode. <a href="/neovim-docs-web/en/map#mapmode-o">mapmode-o</a></div>
<div class="old-help-para">		<a name="%3Avme"></a><code class="help-tag-right">:vme</code> <a name="%3Avmenu"></a><code class="help-tag">:vmenu</code>  <a name="%3Avnoreme"></a><code class="help-tag">:vnoreme</code> <a name="%3Avnoremenu"></a><code class="help-tag">:vnoremenu</code> <a name="%3Avunme"></a><code class="help-tag">:vunme</code> <a name="%3Avunmenu"></a><code class="help-tag">:vunmenu</code>
Menu commands starting with "v" work in Visual mode. <a href="/neovim-docs-web/en/map#mapmode-v">mapmode-v</a></div>
<div class="old-help-para">		<a name="%3Axme"></a><code class="help-tag-right">:xme</code> <a name="%3Axmenu"></a><code class="help-tag">:xmenu</code>  <a name="%3Axnoreme"></a><code class="help-tag">:xnoreme</code> <a name="%3Axnoremenu"></a><code class="help-tag">:xnoremenu</code> <a name="%3Axunme"></a><code class="help-tag">:xunme</code> <a name="%3Axunmenu"></a><code class="help-tag">:xunmenu</code>
Menu commands starting with "x" work in Visual and Select mode. <a href="/neovim-docs-web/en/map#mapmode-x">mapmode-x</a></div>
<div class="old-help-para">		<a name="%3Asme"></a><code class="help-tag-right">:sme</code> <a name="%3Asmenu"></a><code class="help-tag">:smenu</code>  <a name="%3Asnoreme"></a><code class="help-tag">:snoreme</code> <a name="%3Asnoremenu"></a><code class="help-tag">:snoremenu</code> <a name="%3Asunme"></a><code class="help-tag">:sunme</code> <a name="%3Asunmenu"></a><code class="help-tag">:sunmenu</code>
Menu commands starting with "s" work in Select mode. <a href="/neovim-docs-web/en/map#mapmode-s">mapmode-s</a></div>
<div class="old-help-para">		<a name="%3Aime"></a><code class="help-tag-right">:ime</code> <a name="%3Aimenu"></a><code class="help-tag">:imenu</code>  <a name="%3Ainoreme"></a><code class="help-tag">:inoreme</code> <a name="%3Ainoremenu"></a><code class="help-tag">:inoremenu</code> <a name="%3Aiunme"></a><code class="help-tag">:iunme</code> <a name="%3Aiunmenu"></a><code class="help-tag">:iunmenu</code>
Menu commands starting with "i" work in Insert mode. <a href="/neovim-docs-web/en/map#mapmode-i">mapmode-i</a></div>
<div class="old-help-para">		<a name="%3Acme"></a><code class="help-tag-right">:cme</code> <a name="%3Acmenu"></a><code class="help-tag">:cmenu</code>  <a name="%3Acnoreme"></a><code class="help-tag">:cnoreme</code> <a name="%3Acnoremenu"></a><code class="help-tag">:cnoremenu</code> <a name="%3Acunme"></a><code class="help-tag">:cunme</code> <a name="%3Acunmenu"></a><code class="help-tag">:cunmenu</code>
Menu commands starting with "c" work in Cmdline mode. <a href="/neovim-docs-web/en/map#mapmode-c">mapmode-c</a></div>
<div class="old-help-para">		<a name="%3Atlm"></a><code class="help-tag-right">:tlm</code> <a name="%3Atlmenu"></a><code class="help-tag">:tlmenu</code> <a name="%3Atln"></a><code class="help-tag">:tln</code>     <a name="%3Atlnoremenu"></a><code class="help-tag">:tlnoremenu</code> <a name="%3Atlu"></a><code class="help-tag">:tlu</code>   <a name="%3Atlunmenu"></a><code class="help-tag">:tlunmenu</code>
Menu commands starting with "tl" work in Terminal mode. <a href="/neovim-docs-web/en/map#mapmode-t">mapmode-t</a></div>
<div class="old-help-para">						<a name="%3Amenu-%3Csilent%3E"></a><code class="help-tag-right">:menu-&lt;silent&gt;</code> <a name="%3Amenu-silent"></a><code class="help-tag">:menu-silent</code>
To define a menu which will not be echoed on the command line, add
"&lt;silent&gt;" as the first argument.  Example:<pre>:menu &lt;silent&gt; Settings.Ignore\ case  :set ic&lt;CR&gt;</pre>
The ":set ic" will not be echoed when using this menu.  Messages from the
executed command are still given though.  To shut them up too, add a ":silent"
in the executed command:<pre>:menu &lt;silent&gt; Search.Header :exe ":silent normal /Header\r"&lt;CR&gt;</pre>
"&lt;silent&gt;" may also appear just after "&lt;script&gt;".</div>
<div class="old-help-para">						<a name="%3Amenu-%3Cscript%3E"></a><code class="help-tag-right">:menu-&lt;script&gt;</code> <a name="%3Amenu-script"></a><code class="help-tag">:menu-script</code>
The "to" part of the menu will be inspected for mappings.  If you don't want
this, use the ":noremenu" command (or the similar one for a specific mode).
If you do want to use script-local mappings, add "&lt;script&gt;" as the very first
argument to the ":menu" command or just after "&lt;silent&gt;".</div>
<div class="old-help-para">							<a name="menu-priority"></a><code class="help-tag-right">menu-priority</code>
You can give a priority to a menu.  Menus with a higher priority go more to
the right.  The priority is given as a number before the ":menu" command.
Example:<pre>:80menu Buffer.next :bn&lt;CR&gt;</pre>
The default menus have these priorities:
	File		10
	Edit		20
	Tools		40
	Syntax		50
	Buffers		60
	Window		70
	Help		9999</div>
<div class="old-help-para">When no or zero priority is given, 500 is used.
The priority for the PopUp menu is not used.</div>
<div class="old-help-para">You can use a priority higher than 9999, to make it go after the Help menu,
but that is non-standard and is discouraged.  The highest possible priority is
about 32000.  The lowest is 1.</div>
<div class="old-help-para">							<a name="sub-menu-priority"></a><code class="help-tag-right">sub-menu-priority</code>
The same mechanism can be used to position a sub-menu.  The priority is then
given as a dot-separated list of priorities, before the menu name:<pre>:menu 80.500 Buffer.next :bn&lt;CR&gt;</pre>
Giving the sub-menu priority is only needed when the item is not to be put
in a normal position.  For example, to put a sub-menu before the other items:<pre>:menu 80.100 Buffer.first :brew&lt;CR&gt;</pre>
Or to put a sub-menu after the other items, and further items with default
priority will be put before it:<pre>:menu 80.900 Buffer.last :blast&lt;CR&gt;</pre>
When a number is missing, the default value 500 will be used:<pre>:menu .900 myMenu.test :echo "text"&lt;CR&gt;</pre>
The menu priority is only used when creating a new menu.  When it already
existed, e.g., in another mode, the priority will not change.  Thus, the
priority only needs to be given the first time a menu is used.
An exception is the PopUp menu.  There is a separate menu for each mode
(Normal, Op-pending, Visual, Insert, Cmdline).  The order in each of these
menus can be different.  This is different from menu-bar menus, which have
the same order for all modes.
NOTE: sub-menu priorities currently don't work for all versions of the GUI.</div>
<div class="old-help-para">							<a name="menu-separator"></a><code class="help-tag-right">menu-separator</code> <a name="E332"></a><code class="help-tag">E332</code>
Menu items can be separated by a special item that inserts some space between
items.  Depending on the system this is displayed as a line or a dotted line.
These items must start with a '-' and end in a '-'.  The part in between is
used to give it a unique name.  Priorities can be used as with normal items.
Example:<pre>:menu Example.item1        :do something
:menu Example.-Sep-        :
:menu Example.item2        :do something different</pre>
Note that the separator also requires a rhs.  It doesn't matter what it is,
because the item will never be selected.  Use a single colon to keep it
simple.</div>
<div class="old-help-para">							<a name="gui-toolbar"></a><code class="help-tag-right">gui-toolbar</code>
The default toolbar is setup in menu.vim.  The display of the toolbar is
controlled by the <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a> letter 'T'.  You can thus have menu &amp; toolbar
together, or either on its own, or neither.  The appearance is controlled by
the <a href="/neovim-docs-web/en/vim_diff#'toolbar'">'toolbar'</a> option.  You can choose between an image, text or both.</div>
<div class="old-help-para">							<a name="toolbar-icon"></a><code class="help-tag-right">toolbar-icon</code>
The toolbar is defined as a special menu called ToolBar, which only has one
level.  Vim interprets the items in this menu as follows:
1)  If an "icon=" argument was specified, the file with this name is used.
    The file can either be specified with the full path or with the base name.
    In the last case it is searched for in the "bitmaps" directory in
    <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>, like in point 3.  Examples:<pre>:amenu icon=/usr/local/pixmaps/foo_icon.xpm ToolBar.Foo :echo "Foo"&lt;CR&gt;
:amenu icon=FooIcon ToolBar.Foo :echo "Foo"&lt;CR&gt;</pre></div>
<div class="old-help-para">   Note that in the first case the extension is included, while in the second
    case it is omitted.
    If the file cannot be opened the next points are tried.
    A space in the file name must be escaped with a backslash.
    A menu priority must come _after_ the icon argument:<pre>:amenu icon=foo 1.42 ToolBar.Foo :echo "42!"&lt;CR&gt;</pre>
2)  An item called 'BuiltIn##', where ## is a number, is taken as number ## of
    the built-in bitmaps available in Vim.  Currently there are 31 numbered
    from 0 to 30 which cover most common editing operations <a href="/neovim-docs-web/en/gui#builtin-tools">builtin-tools</a>.<pre>:amenu ToolBar.BuiltIn22 :call SearchNext("back")&lt;CR&gt;</pre>
3)  An item with another name is first searched for in the directory
    "bitmaps" in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  If found, the bitmap file is used as the
    toolbar button image.  Note that the exact filename is OS-specific: For
    example, under Win32 the command<pre>:amenu ToolBar.Hello :echo "hello"&lt;CR&gt;</pre></div>
<div class="old-help-para">   would find the file 'hello.bmp'.  Under X11 it is 'Hello.xpm'.
    For MS-Windows and the bitmap is scaled to fit the button.  For
    MS-Windows a size of 18 by 18 pixels works best.
    For MS-Windows the bitmap should have 16 colors with the standard palette.
    The light grey pixels will be changed to the Window frame color and the
    dark grey pixels to the window shadow color.  More colors might also work,
    depending on your system.
4)  If the bitmap is still not found, Vim checks for a match against its list
    of built-in names.  Each built-in button image has a name.
    So the command<pre>:amenu ToolBar.Open :e</pre></div>
<div class="old-help-para">   will show the built-in "open a file" button image if no open.bmp exists.
    All the built-in names can be seen used in menu.vim.
5)  If all else fails, a blank, but functioning, button is displayed.</div>
<div class="old-help-para">							<a name="builtin-tools"></a><code class="help-tag-right">builtin-tools</code>
<div class="help-column_heading">nr  Name		Normal action</div>00  New			open new window
01  Open		browse for file to open in current window
02  Save		write buffer to file
03  Undo		undo last change
04  Redo		redo last undone change
05  Cut			delete selected text to clipboard
06  Copy		copy selected text to clipboard
07  Paste		paste text from clipboard
08  Print		print current buffer
09  Help		open a buffer on Vim's builtin help
10  Find		start a search command
11  SaveAll		write all modified buffers to file
12  SaveSesn		write session file for current situation
13  NewSesn		write new session file
14  LoadSesn		load session file
15  RunScript		browse for file to run as a Vim script
16  Replace		prompt for substitute command
17  WinClose		close current window
18  WinMax		make current window use many lines
19  WinMin		make current window use few lines
20  WinSplit		split current window
21  Shell		start a shell
22  FindPrev		search again, backward
23  FindNext		search again, forward
24  FindHelp		prompt for word to search help for
25  Make		run make and jump to first error
26  TagJump		jump to tag under the cursor
27  RunCtags		build tags for files in current directory
28  WinVSplit		split current window vertically
29  WinMaxWidth		make current window use many columns
30  WinMinWidth		make current window use few columns</div>
<div class="old-help-para">					<a name="hidden-menus"></a><code class="help-tag-right">hidden-menus</code> <a name="win32-hidden-menus"></a><code class="help-tag">win32-hidden-menus</code>
In the Win32 GUI, starting a menu name with ']' excludes that menu from the
main menu bar.  You must then use the <a href="/neovim-docs-web/en/gui#%3Apopup">:popup</a> command to display it.</div>
<div class="old-help-para">When splitting the window the window toolbar is not copied to the new window.</div>
<div class="old-help-para">							<a name="popup-menu"></a><code class="help-tag-right">popup-menu</code>
You can define the special menu "PopUp".  This is the menu that is displayed
when the right mouse button is pressed, if <a href="/neovim-docs-web/en/options#'mousemodel'">'mousemodel'</a> is set to popup or
popup_setpos.</div>
<div class="old-help-para">The default "PopUp" menu is:<pre>aunmenu PopUp
vnoremenu PopUp.Cut                         "+x
vnoremenu PopUp.Copy                        "+y
anoremenu PopUp.Paste                       "+gP
vnoremenu PopUp.Paste                       "+P
vnoremenu PopUp.Delete                      "_x
nnoremenu PopUp.Select\ All&gt;                ggVG
vnoremenu PopUp.Select\ All&gt;                gg0oG$
inoremenu PopUp.Select\ All                 &lt;C-Home&gt;&lt;C-O&gt;VG
anoremenu PopUp.-1-                         &lt;Nop&gt;
anoremenu PopUp.How-to\ disable\ mouse      &lt;Cmd&gt;help disable-mouse&lt;CR&gt;</pre></div>
<div class="old-help-para">Showing What Menus Are Mapped To			<a name="showing-menus"></a><code class="help-tag-right">showing-menus</code></div>
<div class="old-help-para">To see what an existing menu is mapped to, use just one argument after the
menu commands (just like you would with the ":map" commands).  If the menu
specified is a submenu, then all menus under that hierarchy will be shown.
If no argument is given after :menu at all, then ALL menu items are shown
for the appropriate mode (e.g., Command-line mode for :cmenu).</div>
<div class="old-help-para">Special characters in the list, just before the rhs:
*	The menu was defined with "nore" to disallow remapping.
&amp;	The menu was defined with "&lt;script&gt;" to allow remapping script-local
	mappings only.
s	The menu was defined with "&lt;silent&gt;" to avoid showing what it is
	mapped to when triggered.-		The menu was disabled.</div>
<div class="old-help-para">Note that hitting <code>&lt;Tab&gt;</code> while entering a menu name after a menu command may
be used to complete the name of the menu item.</div>
<div class="old-help-para">Executing Menus						<a name="execute-menus"></a><code class="help-tag-right">execute-menus</code></div>
<div class="old-help-para">						<a name="%3Aem"></a><code class="help-tag-right">:em</code>  <a name="%3Aemenu"></a><code class="help-tag">:emenu</code> <a name="E334"></a><code class="help-tag">E334</code> <a name="E335"></a><code class="help-tag">E335</code>
:[range]em[enu] <code>{menu}</code>		Execute <code>{menu}</code> from the command line.
				The default is to execute the Normal mode
				menu.  If a range is specified, it executes
				the Visual mode menu.
				If used from <code>&lt;c-o&gt;</code>, it executes the
				insert-mode menu Eg:<pre>:emenu File.Exit</pre>
:[range]em[enu] <code>{mode}</code> <code>{menu}</code>	Like above, but execute the menu for <code>{mode}</code>:
				    'n': <a href="/neovim-docs-web/en/gui#%3Anmenu">:nmenu</a>  Normal mode
				    'v': <a href="/neovim-docs-web/en/gui#%3Avmenu">:vmenu</a>  Visual mode
				    's': <a href="/neovim-docs-web/en/gui#%3Asmenu">:smenu</a>  Select mode
				    'o': <a href="/neovim-docs-web/en/gui#%3Aomenu">:omenu</a>  Operator-pending mode
				    't': <a href="/neovim-docs-web/en/gui#%3Atlmenu">:tlmenu</a> Terminal mode
				    'i': <a href="/neovim-docs-web/en/gui#%3Aimenu">:imenu</a>  Insert mode
				    'c': <a href="/neovim-docs-web/en/gui#%3Acmenu">:cmenu</a>  Cmdline mode</div>
<div class="old-help-para">You can use :emenu to access useful menu items you may have got used to from
GUI mode.  See <a href="/neovim-docs-web/en/options#'wildmenu'">'wildmenu'</a> for an option that works well with this.  See
<a href="/neovim-docs-web/en/gui#console-menus">console-menus</a> for an example.</div>
<div class="old-help-para">When using a range, if the lines match with '&lt;,'&gt;, then the menu is executed
using the last visual selection.</div>
<div class="old-help-para">Deleting Menus						<a name="delete-menus"></a><code class="help-tag-right">delete-menus</code></div>
<div class="old-help-para">						<a name="%3Aunme"></a><code class="help-tag-right">:unme</code>  <a name="%3Aunmenu"></a><code class="help-tag">:unmenu</code>
						<a name="%3Aaun"></a><code class="help-tag-right">:aun</code>   <a name="%3Aaunmenu"></a><code class="help-tag">:aunmenu</code>
To delete a menu item or a whole submenu, use the unmenu commands, which are
analogous to the unmap commands.  Eg:<pre>:unmenu! Edit.Paste</pre>
This will remove the Paste item from the Edit menu for Insert and
Command-line modes.</div>
<div class="old-help-para">Note that hitting <code>&lt;Tab&gt;</code> while entering a menu name after an umenu command
may be used to complete the name of the menu item for the appropriate mode.</div>
<div class="old-help-para">To remove all menus use:			<a name="%3Aunmenu-all"></a><code class="help-tag-right">:unmenu-all</code><pre>:unmenu *        " remove all menus in Normal and visual mode
:unmenu! *        " remove all menus in Insert and Command-line mode
:aunmenu *        " remove all menus in all modes, except for Terminal
                " mode
:tlunmenu *        " remove all menus in Terminal mode</pre>
If you want to get rid of the menu bar:<pre>:set guioptions-=m</pre>
Disabling Menus						<a name="disable-menus"></a><code class="help-tag-right">disable-menus</code></div>
<div class="old-help-para">						<a name="%3Amenu-disable"></a><code class="help-tag-right">:menu-disable</code> <a name="%3Amenu-enable"></a><code class="help-tag">:menu-enable</code>
If you do not want to remove a menu, but disable it for a moment, this can be
done by adding the "enable" or "disable" keyword to a ":menu" command.
Examples:<pre>:menu disable &amp;File.&amp;Open\.\.\.
:amenu enable *
:amenu disable &amp;Tools.*</pre>
The command applies to the modes as used with all menu commands.  Note that
characters like "&amp;" need to be included for translated names to be found.
When the argument is "*", all menus are affected.  Otherwise the given menu
name and all existing submenus below it are affected.</div>
<div class="old-help-para">Examples for Menus					<a name="menu-examples"></a><code class="help-tag-right">menu-examples</code></div>
<div class="old-help-para">Here is an example on how to add menu items with menu's!  You can add a menu
item for the keyword under the cursor.  The register "z" is used.<pre>:nmenu Words.Add\ Var                wb"zye:menu! Words.&lt;C-R&gt;z &lt;C-R&gt;z&lt;CR&gt;
:nmenu Words.Remove\ Var        wb"zye:unmenu! Words.&lt;C-R&gt;z&lt;CR&gt;
:vmenu Words.Add\ Var                "zy:menu! Words.&lt;C-R&gt;z &lt;C-R&gt;z &lt;CR&gt;
:vmenu Words.Remove\ Var        "zy:unmenu! Words.&lt;C-R&gt;z&lt;CR&gt;
:imenu Words.Add\ Var                &lt;Esc&gt;wb"zye:menu! Words.&lt;C-R&gt;z &lt;C-R&gt;z&lt;CR&gt;a
:imenu Words.Remove\ Var        &lt;Esc&gt;wb"zye:unmenu! Words.&lt;C-R&gt;z&lt;CR&gt;a</pre>
(the rhs is in &lt;&gt; notation, you can copy/paste this text to try out the
mappings, or put these lines in your gvimrc; "&lt;C-R&gt;" is <code>CTRL-R</code>, "&lt;CR&gt;" is
the <code>&lt;CR&gt;</code> key.  <a href="/neovim-docs-web/en/intro#%3C%3E">&lt;&gt;</a>)</div>
<div class="old-help-para">							<a name="tooltips"></a><code class="help-tag-right">tooltips</code> <a name="menu-tips"></a><code class="help-tag">menu-tips</code>
Tooltips &amp; Menu tips</div>
<div class="old-help-para">See section <a href="/neovim-docs-web/en/usr_42#42.4">42.4</a> in the user manual.</div>
<div class="old-help-para">							<a name="%3Atmenu"></a><code class="help-tag-right">:tmenu</code>
:tm[enu] <code>{menupath}</code> <code>{rhs}</code>	Define a tip for a menu or tool.  {<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+gui.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/gui.html%0D%0DContext%3A%0D%0D%60%60%60%0DSee%20section%20%7C42.4%7C%20in%20the%20user%20manual.%0A%0A%09%09%09%09%09%09%09%2A%3Atmenu%2A%0A%3Atm%5Benu%5D%20%7Bmenupath%7D%20%7Brhs%7D%09Define%20a%20tip%20for%20a%20menu%20or%20tool.%20%20%7Bonly%20in%0A%09%09%09%09X11%20and%20Win32%20GUI%7D%0A%0A%3Atm%5Benu%5D%20%5Bmenupath%5D%09%09List%20menu%20tips.%20%7Bonly%20in%20X11%20and%20Win32%20GUI%7D%0D%60%60%60">only in</a>
				X11 and Win32 GUI}</div>
<div class="old-help-para">:tm[enu] [menupath]		List menu tips. <code>{only in X11 and Win32 GUI}</code></div>
<div class="old-help-para">							<a name="%3Atunmenu"></a><code class="help-tag-right">:tunmenu</code>
:tu[nmenu] <code>{menupath}</code>		Remove a tip for a menu or tool.
				<code>{only in X11 and Win32 GUI}</code></div>
<div class="old-help-para">Note: To create menus for terminal mode, use <a href="/neovim-docs-web/en/gui#%3Atlmenu">:tlmenu</a> instead.</div>
<div class="old-help-para">When a tip is defined for a menu item, it appears in the command-line area
when the mouse is over that item, much like a standard Windows menu hint in
the status bar.  (Except when Vim is in Command-line mode, when of course
nothing is displayed.)
When a tip is defined for a ToolBar item, it appears as a tooltip when the
mouse pauses over that button, in the usual fashion.  Use the <a href="/neovim-docs-web/en/syntax#hl-Tooltip">hl-Tooltip</a>
highlight group to change its colors.</div>
<div class="old-help-para">A "tip" can be defined for each menu item.  For example, when defining a menu
item like this:<pre>:amenu MyMenu.Hello :echo "Hello"&lt;CR&gt;</pre>
The tip is defined like this:<pre>:tmenu MyMenu.Hello Displays a greeting.</pre>
And delete it with:<pre>:tunmenu MyMenu.Hello</pre>
Tooltips are currently only supported for the X11 and Win32 GUI.  However, they
should appear for the other gui platforms in the not too distant future.</div>
<div class="old-help-para">The ":tmenu" command works just like other menu commands, it uses the same
arguments.  ":tunmenu" deletes an existing menu tip, in the same way as the
other unmenu commands.</div>
<div class="old-help-para">If a menu item becomes invalid (i.e. its actions in all modes are deleted) Vim
deletes the menu tip (and the item) for you.  This means that :aunmenu deletes
a menu item - you don't need to do a :tunmenu as well.</div>
<div class="old-help-para">5.9 Popup Menus</div>
<div class="old-help-para">You can cause a menu to popup at the cursor.  This behaves similarly to the
PopUp menus except that any menu tree can be popped up.</div>
<div class="old-help-para">This command is for backwards compatibility, using it is discouraged, because
it behaves in a strange way.</div>
<div class="old-help-para">							<a name="%3Apopup"></a><code class="help-tag-right">:popup</code> <a name="%3Apopu"></a><code class="help-tag">:popu</code>
:popu[p] <code>{name}</code>			Popup the menu <code>{name}</code>.  The menu named must
				have at least one subentry, but need not
				appear on the menu-bar (see <a href="/neovim-docs-web/en/gui#hidden-menus">hidden-menus</a>).</div>
<div class="old-help-para">:popu[p]! <code>{name}</code>		Like above, but use the position of the mouse
				pointer instead of the cursor.</div>
<div class="old-help-para">Example:<pre>:popup File</pre>
will make the "File" menu (if there is one) appear at the text cursor (mouse
pointer if ! was used).<pre>:amenu ]Toolbar.Make        :make&lt;CR&gt;
:popup ]Toolbar</pre>
This creates a popup menu that doesn't exist on the main menu-bar.</div>
<div class="old-help-para">Note that a menu that starts with ']' will not be displayed.</div>

  
  