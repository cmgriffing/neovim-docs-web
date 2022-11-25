---
title:  Usr_42
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_42.txt"></a><a name="42.1"></a><h1> Usr_42</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_42.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			      Add new menus</div>
<div class="old-help-para">By now you know that Vim is very flexible.  This includes the menus used in
the GUI.  You can define your own menu entries to make certain commands easily
accessible.  This is for mouse-happy users only.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_42#42.1">42.1</a>  	Introduction
<a href="/neovim-docs-web/en/usr_42#42.2">42.2</a>  	Menu commands
<a href="/neovim-docs-web/en/usr_42#42.3">42.3</a>  	Various
<a href="/neovim-docs-web/en/usr_42#42.4">42.4</a>  	Toolbar and popup menus</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_43#usr_43.txt">usr_43.txt</a>  Using filetypes
 Previous chapter: <a href="/neovim-docs-web/en/usr_41#usr_41.txt">usr_41.txt</a>  Write a Vim script
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Introduction</h2></div>
<div class="old-help-para">The menus that Vim uses are defined in the file "$VIMRUNTIME/menu.vim".  If
you want to write your own menus, you might first want to look through that
file.
   To define a menu item, use the ":menu" command.  The basic form of this
command is as follows:<pre>:menu {menu-item} {keys}</pre>
The <code>{menu-item}</code> describes where on the menu to put the item.  A typical
<code>{menu-item}</code> is "File.Save", which represents the item "Save" under the
"File" menu.  A dot is used to separate the names.  Example:<pre>:menu File.Save  :update&lt;CR&gt;</pre>
The ":update" command writes the file when it was modified.
   You can add another level: "Edit.Settings.Shiftwidth" defines a submenu
"Settings" under the "Edit" menu, with an item "Shiftwidth".  You could use
even deeper levels.  Don't use this too much, you need to move the mouse quite
a bit to use such an item.
   The ":menu" command is very similar to the ":map" command: the left side
specifies how the item is triggered and the right hand side defines the
characters that are executed.  <code>{keys}</code> are characters, they are used just like
you would have typed them.  Thus in Insert mode, when <code>{keys}</code> is plain text,
that text is inserted.</div>
<div class="old-help-para"><a name="_accelerators"></a><h3 class="help-heading">ACCELERATORS</h3></div>
<div class="old-help-para">The ampersand character (&amp;) is used to indicate an accelerator.  For instance,
you can use Alt-F to select "File" and S to select "Save".  (The <a href="/neovim-docs-web/en/options#'winaltkeys'">'winaltkeys'</a>
option may disable this though!).  Therefore, the <code>{menu-item}</code> looks like
"&amp;File.&amp;Save".  The accelerator characters will be underlined in the menu.
   You must take care that each key is used only once in each menu.  Otherwise
you will not know which of the two will actually be used.  Vim doesn't warn
you for this.</div>
<div class="old-help-para"><a name="_priorities"></a><h3 class="help-heading">PRIORITIES</h3></div>
<div class="old-help-para">The actual definition of the File.Save menu item is as follows:<pre>:menu 10.340 &amp;File.&amp;Save&lt;Tab&gt;:w  :confirm w&lt;CR&gt;</pre>
The number 10.340 is called the priority number.  It is used by the editor to
decide where it places the menu item.  The first number (10) indicates the
position on the menu bar.  Lower numbered menus are positioned to the left,
higher numbers to the right.
   These are the priorities used for the standard menus:</div>
<div class="old-help-para">	  10	20     40     50      60       70		9999</div>
<div class="old-help-para">	+------------------------------------------------------------+
	| File	Edit  Tools  Syntax  Buffers  Window		Help |
	+------------------------------------------------------------+</div>
<div class="old-help-para">Notice that the Help menu is given a very high number, to make it appear on
the far right.
   The second number (340) determines the location of the item within the
pull-down menu.  Lower numbers go on top, higher number on the bottom.  These
are the priorities in the File menu:</div>
<div class="old-help-para">			+-----------------+
	    10.310	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_42.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_42.html%0D%0DContext%3A%0D%0D%60%60%60%0Dare%20the%20priorities%20in%20the%20File%20menu%3A%0A%0A%09%09%09%2B-----------------%2B%0A%09%20%20%20%2010.310%09%7COpen...%09%20%20%7C%0A%09%20%20%20%2010.320%09%7CSplit-Open...%09%20%20%7C%0A%09%20%20%20%2010.325%09%7CNew%09%09%20%20%7C%0A%09%20%20%20%2010.330%09%7CClose%09%09%20%20%7C%0D%60%60%60">Open...</a>	  |
	    10.320Split-Open...	  |
	    10.325	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_42.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_42.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%09%2B-----------------%2B%0A%09%20%20%20%2010.310%09%7COpen...%09%20%20%7C%0A%09%20%20%20%2010.320%09%7CSplit-Open...%09%20%20%7C%0A%09%20%20%20%2010.325%09%7CNew%09%09%20%20%7C%0A%09%20%20%20%2010.330%09%7CClose%09%09%20%20%7C%0A%09%20%20%20%2010.335%09%7C----------------%20%7C%0A%09%20%20%20%2010.340%09%7CSave%09%09%20%20%7C%0D%60%60%60">New</a>		  |
	    10.330	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_42.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_42.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%20%20%20%2010.310%09%7COpen...%09%20%20%7C%0A%09%20%20%20%2010.320%09%7CSplit-Open...%09%20%20%7C%0A%09%20%20%20%2010.325%09%7CNew%09%09%20%20%7C%0A%09%20%20%20%2010.330%09%7CClose%09%09%20%20%7C%0A%09%20%20%20%2010.335%09%7C----------------%20%7C%0A%09%20%20%20%2010.340%09%7CSave%09%09%20%20%7C%0A%09%20%20%20%2010.350%09%7CSave%20As...%09%20%20%7C%0D%60%60%60">Close</a>		  |
	    10.335---------------- |
	    10.340	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_42.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_42.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%20%20%20%2010.325%09%7CNew%09%09%20%20%7C%0A%09%20%20%20%2010.330%09%7CClose%09%09%20%20%7C%0A%09%20%20%20%2010.335%09%7C----------------%20%7C%0A%09%20%20%20%2010.340%09%7CSave%09%09%20%20%7C%0A%09%20%20%20%2010.350%09%7CSave%20As...%09%20%20%7C%0A%09%20%20%20%2010.400%09%7C----------------%20%7C%0A%09%20%20%20%2010.410%09%7CSplit%20Diff%20with%20%20%7C%0D%60%60%60">Save</a>		  |
	    10.350	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_42.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_42.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%20%20%20%2010.330%09%7CClose%09%09%20%20%7C%0A%09%20%20%20%2010.335%09%7C----------------%20%7C%0A%09%20%20%20%2010.340%09%7CSave%09%09%20%20%7C%0A%09%20%20%20%2010.350%09%7CSave%20As...%09%20%20%7C%0A%09%20%20%20%2010.400%09%7C----------------%20%7C%0A%09%20%20%20%2010.410%09%7CSplit%20Diff%20with%20%20%7C%0A%09%20%20%20%2010.420%09%7CSplit%20Patched%20By%20%7C%0D%60%60%60">Save</a> As...	  |
	    10.400---------------- |
	    10.410	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_42.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_42.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%20%20%20%2010.340%09%7CSave%09%09%20%20%7C%0A%09%20%20%20%2010.350%09%7CSave%20As...%09%20%20%7C%0A%09%20%20%20%2010.400%09%7C----------------%20%7C%0A%09%20%20%20%2010.410%09%7CSplit%20Diff%20with%20%20%7C%0A%09%20%20%20%2010.420%09%7CSplit%20Patched%20By%20%7C%0A%09%20%20%20%2010.500%09%7C----------------%20%7C%0A%09%20%20%20%2010.510%09%7CPrint%09%09%20%20%7C%0D%60%60%60">Split</a> Diff with  |
	    10.420	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_42.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_42.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%20%20%20%2010.350%09%7CSave%20As...%09%20%20%7C%0A%09%20%20%20%2010.400%09%7C----------------%20%7C%0A%09%20%20%20%2010.410%09%7CSplit%20Diff%20with%20%20%7C%0A%09%20%20%20%2010.420%09%7CSplit%20Patched%20By%20%7C%0A%09%20%20%20%2010.500%09%7C----------------%20%7C%0A%09%20%20%20%2010.510%09%7CPrint%09%09%20%20%7C%0A%09%20%20%20%2010.600%09%7C----------------%20%7C%0D%60%60%60">Split</a> Patched By |
	    10.500---------------- |
	    10.510	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_42.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_42.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%20%20%20%2010.410%09%7CSplit%20Diff%20with%20%20%7C%0A%09%20%20%20%2010.420%09%7CSplit%20Patched%20By%20%7C%0A%09%20%20%20%2010.500%09%7C----------------%20%7C%0A%09%20%20%20%2010.510%09%7CPrint%09%09%20%20%7C%0A%09%20%20%20%2010.600%09%7C----------------%20%7C%0A%09%20%20%20%2010.610%09%7CSave-Exit%09%20%20%7C%0A%09%20%20%20%2010.620%09%7CExit%09%09%20%20%7C%0D%60%60%60">Print</a>		  |
	    10.600---------------- |
	    10.610	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_42.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_42.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%20%20%20%2010.500%09%7C----------------%20%7C%0A%09%20%20%20%2010.510%09%7CPrint%09%09%20%20%7C%0A%09%20%20%20%2010.600%09%7C----------------%20%7C%0A%09%20%20%20%2010.610%09%7CSave-Exit%09%20%20%7C%0A%09%20%20%20%2010.620%09%7CExit%09%09%20%20%7C%0A%09%09%09%2B-----------------%2B%0A%0D%60%60%60">Save-Exit</a>	  |
	    10.620	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_42.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_42.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%20%20%20%2010.510%09%7CPrint%09%09%20%20%7C%0A%09%20%20%20%2010.600%09%7C----------------%20%7C%0A%09%20%20%20%2010.610%09%7CSave-Exit%09%20%20%7C%0A%09%20%20%20%2010.620%09%7CExit%09%09%20%20%7C%0A%09%09%09%2B-----------------%2B%0A%0ANotice%20that%20there%20is%20room%20in%20between%20the%20numbers.%20%20This%20is%20where%20you%20can%0D%60%60%60">Exit</a>		  |
			+-----------------+</div>
<div class="old-help-para">Notice that there is room in between the numbers.  This is where you can
insert your own items, if you really want to (it's often better to leave the
standard menus alone and add a new menu for your own items).
   When you create a submenu, you can add another ".number" to the priority.
Thus each name in <code>{menu-item}</code> has its priority number.</div>
<div class="old-help-para"><a name="_special-characters"></a><h3 class="help-heading">SPECIAL CHARACTERS</h3></div>
<div class="old-help-para">The <code>{menu-item}</code> in this example is "&amp;File.&amp;Save&lt;Tab&gt;:w".  This brings up an
important point: <code>{menu-item}</code> must be one word.  If you want to put a dot,
space or tabs in the name, you either use the &lt;&gt; notation (<code>&lt;Space&gt;</code> and <code>&lt;Tab&gt;</code>,
for instance) or use the backslash (\) escape.<pre>:menu 10.305 &amp;File.&amp;Do\ It\.\.\. :exit&lt;CR&gt;</pre>
In this example, the name of the menu item "Do It..." contains a space and the
command is ":exit&lt;CR&gt;".</div>
<div class="old-help-para">The <code>&lt;Tab&gt;</code> character in a menu name is used to separate the part that defines
the menu name from the part that gives a hint to the user.  The part after the
<code>&lt;Tab&gt;</code> is displayed right aligned in the menu.  In the File.Save menu the name
used is "&amp;File.&amp;Save&lt;Tab&gt;:w".  Thus the menu name is "File.Save" and the hint
is ":w".</div>
<div class="old-help-para"><a name="_separators"></a><h3 class="help-heading">SEPARATORS</h3></div>
<div class="old-help-para">The separator lines, used to group related menu items together, can be defined
by using a name that starts and ends in a '-'.  For example "-sep-".  When
using several separators the names must be different.  Otherwise the names
don't matter.
   The command from a separator will never be executed, but you have to define
one anyway.  A single colon will do.  Example:<pre>:amenu 20.510 Edit.-sep3- :</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="42.2"></a><span class="help-tag">42.2</span>  	Menu commands</span></h2></div>
<div class="old-help-para">You can define menu items that exist for only certain modes.  This works just
like the variations on the ":map" command:</div>
<div class="old-help-para">	:menu		Normal, Visual and Operator-pending mode
	:nmenu		Normal mode
	:vmenu		Visual mode
	:omenu		Operator-pending mode
	:menu!		Insert and Command-line mode
	:imenu		Insert mode
	:cmenu		Command-line mode
	:tlmenu		Terminal mode
	:amenu		All modes (except for Terminal mode)</div>
<div class="old-help-para">To avoid that the commands of a menu item are being mapped, use the command
":noremenu", ":nnoremenu", ":anoremenu", etc.</div>
<div class="old-help-para">USING :AMENU</div>
<div class="old-help-para">The ":amenu" command is a bit different.  It assumes that the <code>{keys}</code> you
give are to be executed in Normal mode.  When Vim is in Visual or Insert mode
when the menu is used, Vim first has to go back to Normal mode.  ":amenu"
inserts a <code>CTRL-C</code> or <code>CTRL-O</code> for you.  For example, if you use this command:
<pre>:amenu  90.100 Mine.Find\ Word  *</pre>
Then the resulting menu commands will be:</div>
<div class="old-help-para">	Normal mode:		*	Visual mode:		<code>CTRL-C</code> *	Operator-pending mode:	<code>CTRL-C</code> *	Insert mode:		<code>CTRL-O</code> *	Command-line mode:	<code>CTRL-C</code> *
When in Command-line mode the <code>CTRL-C</code> will abandon the command typed so far.
In Visual and Operator-pending mode <code>CTRL-C</code> will stop the mode.  The <code>CTRL-O</code> in
Insert mode will execute the command and then return to Insert mode.
   <code>CTRL-O</code> only works for one command.  If you need to use two or more
commands, put them in a function and call that function.  Example:<pre>:amenu  Mine.Next\ File  :call &lt;SID&gt;NextFile()&lt;CR&gt;
:function &lt;SID&gt;NextFile()
:  next
:  1/^Code
:endfunction</pre>
This menu entry goes to the next file in the argument list with ":next".  Then
it searches for the line that starts with "Code".
   The <code>&lt;SID&gt;</code> before the function name is the script ID.  This makes the
function local to the current Vim script file.  This avoids problems when a
function with the same name is defined in another script file.  See <a href="/neovim-docs-web/en/map#%3CSID%3E">&lt;SID&gt;</a>.</div>
<div class="old-help-para"><a name="_silent-menus"></a><h3 class="help-heading">SILENT MENUS</h3></div>
<div class="old-help-para">The menu executes the <code>{keys}</code> as if you typed them.  For a ":" command this
means you will see the command being echoed on the command line.  If it's a
long command, the hit-Enter prompt will appear.  That can be very annoying!
   To avoid this, make the menu silent.  This is done with the <code>&lt;silent&gt;</code>
argument.  For example, take the call to NextFile() in the previous example.
When you use this menu, you will see this on the command line:</div>
<div class="old-help-para"><div class="help-column_heading">	:call <code>&lt;SNR&gt;</code>34_NextFile()</div></div>
<div class="old-help-para">To avoid this text on the command line, insert "&lt;silent&gt;" as the first
argument:<pre>:amenu &lt;silent&gt; Mine.Next\ File :call &lt;SID&gt;NextFile()&lt;CR&gt;</pre>
Don't use "&lt;silent&gt;" too often.  It is not needed for short commands.  If you
make a menu for someone else, being able to see the executed command will
give them a hint about what they could have typed, instead of using the mouse.</div>
<div class="old-help-para"><a name="_listing-menus"></a><h3 class="help-heading">LISTING MENUS</h3></div>
<div class="old-help-para">When a menu command is used without a <code>{keys}</code> part, it lists the already
defined menus.  You can specify a <code>{menu-item}</code>, or part of it, to list specific
menus.  Example:<pre>:amenu</pre>
This lists all menus.  That's a long list!  Better specify the name of a menu
to get a shorter list:<pre>:amenu Edit</pre>
This lists only the "Edit" menu items for all modes.  To list only one
specific menu item for Insert mode:<pre>:imenu Edit.Undo</pre>
Take care that you type exactly the right name.  Case matters here.  But the
'&amp;' for accelerators can be omitted.  The <code>&lt;Tab&gt;</code> and what comes after it can be
left out as well.</div>
<div class="old-help-para"><a name="_deleting-menus"></a><h3 class="help-heading">DELETING MENUS</h3></div>
<div class="old-help-para">To delete a menu, the same command is used as for listing, but with "menu"
changed to "unmenu".  Thus ":menu" becomes, ":unmenu", ":nmenu" becomes
":nunmenu", etc.  To delete the "Tools.Make" item for Insert mode:<pre>:iunmenu Tools.Make</pre>
You can delete a whole menu, with all its items, by using the menu name.
Example:<pre>:aunmenu Syntax</pre>
This deletes the Syntax menu and all the items in it.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="42.3"></a><span class="help-tag">42.3</span>  	Various</span></h2></div>
<div class="old-help-para">You can change the appearance of the menus with flags in <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a>.  In the
default value they are all included, except "M".  You can remove a flag with a
command like:<pre>:set guioptions-=m</pre></div>
<div class="old-help-para">	m		When removed the menubar is not displayed.</div>
<div class="old-help-para">	M		When added the default menus are not loaded.</div>
<div class="old-help-para">	g		When removed the inactive menu items are not made grey
			but are completely removed.  (Does not work on all
			systems.)</div>
<div class="old-help-para">For translating menu items, see <a href="/neovim-docs-web/en/mlang#%3Amenutrans">:menutrans</a>.</div>
<div class="old-help-para">Since the mouse has to be used to select a menu item, it is a good idea to use
the ":browse" command for selecting a file.  And ":confirm" to get a dialog
instead of an error message, e.g., when the current buffer contains changes.
These two can be combined:<pre>:amenu File.Open  :browse confirm edit&lt;CR&gt;</pre>
The ":browse" makes a file browser appear to select the file to edit.  The
":confirm" will pop up a dialog when the current buffer has changes.  You can
then select to save the changes, throw them away or cancel the command.
   For more complicated items, the confirm() and inputdialog() functions can
be used.  The default menus contain a few examples.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="42.4"></a><span class="help-tag">42.4</span>  	Toolbar and popup menus</span></h2></div>
<div class="old-help-para">There are two special menus: ToolBar and PopUp.  Items that start with these
names do not appear in the normal menu bar.</div>
<div class="old-help-para"><a name="_toolbar"></a><h3 class="help-heading">TOOLBAR</h3></div>
<div class="old-help-para">The toolbar appears only when the "T" flag is included in the <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a>
option.
   The toolbar uses icons rather than text to represent the command.  For
example, the <code>{menu-item}</code> named "ToolBar.New" causes the "New" icon to appear
on the toolbar.
   The Vim editor has 28 built-in icons.  You can find a table here:
<a href="/neovim-docs-web/en/gui#builtin-tools">builtin-tools</a>.  Most of them are used in the default toolbar.  You can
redefine what these items do (after the default menus are setup).
   You can add another bitmap for a toolbar item.  Or define a new toolbar
item with a bitmap.  For example, define a new toolbar item with:<pre>:tmenu ToolBar.Compile  Compile the current file
:amenu ToolBar.Compile  :!cc %:S -o %:r:S&lt;CR&gt;</pre>
Now you need to create the icon.  For MS-Windows it must be in bitmap format,
with the name "Compile.bmp".  For Unix XPM format is used, the file name is
"Compile.xpm".  The size must be 18 by 18 pixels.  On MS-Windows other sizes
can be used as well, but it will look ugly.
   Put the bitmap in the directory "bitmaps" in one of the directories from
<a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  E.g., for Unix "~/.config/nvim/bitmaps/Compile.xpm".</div>
<div class="old-help-para">You can define tooltips for the items in the toolbar.  A tooltip is a short
text that explains what a toolbar item will do.  For example "Open file".  It
appears when the mouse pointer is on the item, without moving for a moment.
This is very useful if the meaning of the picture isn't that obvious.
Example:<pre>:tmenu ToolBar.Make  Run make in the current directory</pre></div>
<div class="old-help-para">	Note:
	Pay attention to the case used.  "Toolbar" and "toolbar" are different
	from "ToolBar"!</div>
<div class="old-help-para">To remove a tooltip, use the <a href="/neovim-docs-web/en/gui#%3Atunmenu">:tunmenu</a> command.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/vim_diff#'toolbar'">'toolbar'</a> option can be used to display text instead of a bitmap, or both
text and a bitmap.  Most people use just the bitmap, since the text takes
quite a bit of space.</div>
<div class="old-help-para"><a name="_popup-menu"></a><h3 class="help-heading">POPUP MENU</h3></div>
<div class="old-help-para">The popup menu pops up where the mouse pointer is.  On MS-Windows you activate
it by clicking the right mouse button.  Then you can select an item with the
left mouse button.  On Unix the popup menu is used by pressing and holding the
right mouse button.
   The popup menu only appears when the <a href="/neovim-docs-web/en/options#'mousemodel'">'mousemodel'</a> has been set to "popup"
or "popup_setpos".  The difference between the two is that "popup_setpos"
moves the cursor to the mouse pointer position.  When clicking inside a
selection, the selection will be used unmodified.  When there is a selection
but you click outside of it, the selection is removed.
   There is a separate popup menu for each mode.  Thus there are never grey
items like in the normal menus.</div>
<div class="old-help-para">What is the meaning of life, the universe and everything?  <a name="42"></a><code class="help-tag">42</code>
Douglas Adams, the only person who knew what this question really was about is
now dead, unfortunately.  So now you might wonder what the meaning of death
is...</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_43#usr_43.txt">usr_43.txt</a>  Using filetypes</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  