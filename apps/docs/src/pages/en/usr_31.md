---
title:  Usr_31
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_31.txt"></a><a name="31.1"></a><h1> Usr_31</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_31.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			      Exploiting the GUI</div>
<div class="old-help-para">Vim works well in a terminal, but the GUI has a few extra items.  A file
browser can be used for commands that use a file.  A dialog to make a choice
between alternatives.  Use keyboard shortcuts to access menu items quickly.</div>
<div class="old-help-para"><a href="usr_31.html#31.1">31.1</a>  	The file browser
<a href="usr_31.html#31.2">31.2</a>  	Confirmation
<a href="usr_31.html#31.3">31.3</a>  	Menu shortcuts
<a href="usr_31.html#31.4">31.4</a>  	Vim window position and size
<a href="usr_31.html#31.5">31.5</a>  	Various</div>
<div class="old-help-para">     Next chapter: <a href="usr_32.html#usr_32.txt">usr_32.txt</a>  The undo tree
 Previous chapter: <a href="usr_30.html#usr_30.txt">usr_30.txt</a>  Editing programs
Table of contents: <a href="usr_toc.html#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	The file browser</h2></div>
<div class="old-help-para">When using the File/Open... menu you get a file browser.  This makes it easier
to find the file you want to edit.  But what if you want to split a window to
edit another file?  There is no menu entry for this.  You could first use
Window/Split and then File/Open..., but that's more work.
   Since you are typing most commands in Vim, opening the file browser with a
typed command is possible as well.  To make the split command use the file
browser, prepend "browse":<pre>:browse split</pre>
Select a file and then the ":split" command will be executed with it.  If you
cancel the file dialog nothing happens, the window isn't split.
   You can also specify a file name argument.  This is used to tell the file
browser where to start.  Example:<pre>:browse split /etc</pre>
The file browser will pop up, starting in the directory "/etc".</div>
<div class="old-help-para">The ":browse" command can be prepended to just about any command that opens a
file.
   If no directory is specified, Vim will decide where to start the file
browser.  By default it uses the same directory as the last time.  Thus when
you used ":browse split" and selected a file in "/usr/local/share", the next
time you use a ":browse" it will start in "/usr/local/share" again.
   This can be changed with the <a href="options.html#'browsedir'">'browsedir'</a> option.  It can have one of three
values:</div>
<div class="old-help-para">	last		Use the last directory browsed (default)
	buffer		Use the same directory as the current buffer
	current		use the current directory</div>
<div class="old-help-para">For example, when you are in the directory "/usr", editing the file
"/usr/local/share/readme", then the command:<pre>:set browsedir=buffer
:browse edit</pre>
Will start the browser in "/usr/local/share".  Alternatively:<pre>:set browsedir=current
:browse edit</pre>
Will start the browser in "/usr".</div>
<div class="old-help-para">	Note:
	To avoid using the mouse, most file browsers offer using key presses
	to navigate.  Since this is different for every system, it is not
	explained here.  Vim uses a standard browser when possible, your
	system documentation should contain an explanation on the keyboard
	shortcuts somewhere.</div>
<div class="old-help-para">When you are not using the GUI version, you could use the file explorer window
to select files like in a file browser.  However, this doesn't work for the
":browse" command.  See <a href="pi_netrw.html#netrw-browse">netrw-browse</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="31.2"></a><span class="help-tag">31.2</span>  	Confirmation</span></h2></div>
<div class="old-help-para">Vim protects you from accidentally overwriting a file and other ways to lose
changes.  If you do something that might be a bad thing to do, Vim produces an
error message and suggests appending ! if you really want to do it.
   To avoid retyping the command with the !, you can make Vim give you a
dialog.  You can then press "OK" or "Cancel" to tell Vim what you want.
   For example, you are editing a file and made changes to it.  You start
editing another file with:<pre>:confirm edit foo.txt</pre>
Vim will pop up a dialog that looks something like this:</div>
<div class="old-help-para">	+-----------------------------------+
	|				    |
	|   ?	Save changes to "bar.txt"?  |
	|				    |
	|   YES   NO		 CANCEL     |
	+-----------------------------------+</div>
<div class="old-help-para">Now make your choice.  If you do want to save the changes, select "YES".  If
you want to lose the changes for ever: "NO".  If you forgot what you were
doing and want to check what really changed use "CANCEL".  You will be back in
the same file, with the changes still there.</div>
<div class="old-help-para">Just like ":browse", the ":confirm" command can be prepended to most commands
that edit another file.  They can also be combined:<pre>:confirm browse edit</pre>
This will produce a dialog when the current buffer was changed.  Then it will
pop up a file browser to select the file to edit.</div>
<div class="old-help-para">	Note:
	In the dialog you can use the keyboard to select the choice.
	Typically the <code>&lt;Tab&gt;</code> key and the cursor keys change the choice.
	Pressing <code>&lt;Enter&gt;</code> selects the choice.  This depends on the system
	though.</div>
<div class="old-help-para">When you are not using the GUI, the ":confirm" command works as well.  Instead
of popping up a dialog, Vim will print the message at the bottom of the Vim
window and ask you to press a key to make a choice.<pre>:confirm edit main.c</pre></div>
<div class="old-help-para"><div class="help-column_heading">	Save changes to "Untitled"?</div><div class="help-column_heading">	[Y]es, (N)o, (C)ancel:</div></div>
<div class="old-help-para">You can now press the single key for the choice.  You don't have to press
<code>&lt;Enter&gt;</code>, unlike other typing on the command line.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="31.3"></a><span class="help-tag">31.3</span>  	Menu shortcuts</span></h2></div>
<div class="old-help-para">The keyboard is used for all Vim commands.  The menus provide a simple way to
select commands, without knowing what they are called.  But you have to move
your hand from the keyboard and grab the mouse.
   Menus can often be selected with keys as well.  This depends on your
system, but most often it works this way.  Use the <code>&lt;Alt&gt;</code> key in combination
with the underlined letter of a menu.  For example, <code>&lt;A-w&gt;</code> (<code>&lt;Alt&gt;</code> and w) pops
up the Window menu.
   In the Window menu, the "split" item has the p underlined.  To select it,
let go of the <code>&lt;Alt&gt;</code> key and press p.</div>
<div class="old-help-para">After the first selection of a menu with the <code>&lt;Alt&gt;</code> key, you can use the cursor
keys to move through the menus.  <code>&lt;Right&gt;</code> selects a submenu and <code>&lt;left&gt;</code> closes
it.  <code>&lt;Esc&gt;</code> also closes a menu.  <code>&lt;Enter&gt;</code> selects a menu item.</div>
<div class="old-help-para">There is a conflict between using the <code>&lt;Alt&gt;</code> key to select menu items, and
using <code>&lt;Alt&gt;</code> key combinations for mappings.  The <a href="options.html#'winaltkeys'">'winaltkeys'</a> option tells Vim
what it should do with the <code>&lt;Alt&gt;</code> key.
   The default value "menu" is the smart choice: If the key combination is a
menu shortcut it can't be mapped.  All other keys are available for mapping.
   The value "no" doesn't use any <code>&lt;Alt&gt;</code> keys for the menus.  Thus you must use
the mouse for the menus, and all <code>&lt;Alt&gt;</code> keys can be mapped.
   The value "yes" means that Vim will use any <code>&lt;Alt&gt;</code> keys for the menus.  Some
<code>&lt;Alt&gt;</code> key combinations may also do other things than selecting a menu.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="31.4"></a><span class="help-tag">31.4</span>  	Vim window position and size</span></h2></div>
<div class="old-help-para">To see the current Vim window position on the screen use:<pre>:winpos</pre>
This will only work in the GUI.  The output may look like this:</div>
<div class="old-help-para"><div class="help-column_heading">	Window position: X 272, Y 103</div></div>
<div class="old-help-para">The position is given in screen pixels.  Now you can use the numbers to move
Vim somewhere else.  For example, to move it to the left a hundred pixels:<pre>:winpos 172 103</pre></div>
<div class="old-help-para">	Note:
	There may be a small offset between the reported position and where
	the window moves.  This is because of the border around the window.
	This is added by the window manager.</div>
<div class="old-help-para">You can use this command in your startup script to position the window at a
specific position.</div>
<div class="old-help-para">The size of the Vim window is computed in characters.  Thus this depends on
the size of the font being used.  You can see the current size with this
command:<pre>:set lines columns</pre>
To change the size set the <a href="options.html#'lines'">'lines'</a> and/or <a href="options.html#'columns'">'columns'</a> options to a new value:<pre>:set lines=50
:set columns=80</pre>
Obtaining the size works in a terminal just like in the GUI.  Setting the size
is not possible in most terminals.</div>
<div class="old-help-para">You can start the X-Windows version of gvim with an argument to specify the
size and position of the window:<pre>gvim -geometry {width}x{height}+{x-offset}+{y-offset}</pre>
<code>{width}</code> and <code>{height}</code> are in characters, <code>{x-offset}</code> and <code>{y-offset}</code> are in
pixels.  Example:<pre>gvim -geometry 80x25+100+300</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="31.5"></a><span class="help-tag">31.5</span>  	Various</span></h2></div>
<div class="old-help-para">You can use gvim to edit an e-mail message.  In your e-mail program you must
select gvim to be the editor for messages.  When you try that, you will
see that it doesn't work: The mail program thinks that editing is finished,
while gvim is still running!
   What happens is that gvim disconnects from the shell it was started in.
That is fine when you start gvim in a terminal, so that you can do other work
in that terminal.  But when you really want to wait for gvim to finish, you
must prevent it from disconnecting.  The "-f" argument does this:<pre>gvim -f file.txt</pre>
The "-f" stands for foreground.  Now Vim will block the shell it was started
in until you finish editing and exit.</div>
<div class="old-help-para"><a name="_delayed-start-of-the-gui"></a><h3 class="help-heading">DELAYED START OF THE GUI</h3></div>
<div class="old-help-para">On Unix it's possible to first start Vim in a terminal.  That's useful if you
do various tasks in the same shell.  If you are editing a file and decide you
want to use the GUI after all, you can start it with:<pre>:gui</pre>
Vim will open the GUI window and no longer use the terminal.  You can continue
using the terminal for something else.  The "-f" argument is used here to run
the GUI in the foreground.  You can also use ":gui -f".</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="usr_32.html#usr_32.txt">usr_32.txt</a>  The undo tree</div>
<div class="old-help-para">Copyright: see <a href="usr_01.html#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  