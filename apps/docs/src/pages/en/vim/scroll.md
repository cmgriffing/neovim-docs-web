---
title: Scroll
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Scroll Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="scrolling" class="section-title" href="#scrolling">Scrolling</a>

These commands move the contents of the window.  If the cursor position is
moved off of the window, the cursor is moved onto the window (with
'scrolloff' screen lines around it).  A page is the number of lines in the
window minus two.  The mnemonics for these commands may be a bit confusing.
Remember that the commands refer to moving the window (the part of the buffer
that you see) upwards or downwards in the buffer.  When the window moves
upwards in the buffer, the text in the window moves downwards on your screen.

See section |03.7| of the user manual for an introduction.

                                      Type [gO](undefined#gO) to see the table of contents.


## <a id="scroll-down" class="section-title" href="#scroll-down">1. Scrolling Downwards</a> 

The following commands move the edit window (the part of the buffer that you
see) downwards (this means that more lines downwards in the text buffer can be
seen):

### <a id="CTRL-E" class="section-title" href="#CTRL-E">Note:</a>
CTRL-E			Scroll window [count] lines downwards in the buffer.
			The text moves upwards on the screen.
			Mnemonic: Extra lines.

### <a id="CTRL-D" class="section-title" href="#CTRL-D">Note:</a>
CTRL-D			Scroll window Downwards in the buffer.  The number of
			lines comes from the 'scroll' option (default: half a
			screen).  If [count] given, first set 'scroll' option
			to [count].  The cursor is moved the same number of
			lines down in the file (if possible; when lines wrap
			and when hitting the end of the file there may be a
			difference).  When the cursor is on the last line of
			the buffer nothing happens and a beep is produced.
			See also 'startofline' option.
			{difference from vi: Vim scrolls 'scroll' screen
			lines, instead of file lines; makes a difference when
			lines wrap}

### <a id="<S-Down> <kPageDown>" class="section-title" href="#<S-Down> <kPageDown>">S-Down>	or</a>
### <a id="<PageDown> CTRL-F" class="section-title" href="#<PageDown> CTRL-F">PageDown>	or</a>
CTRL-F			Scroll window [count] pages Forwards (downwards) in
			the buffer.  See also 'startofline' option.
			When there is only one window the 'window' option
			might be used.

### <a id="z+" class="section-title" href="#z+">Note:</a>
z+			Without [count]: Redraw with the line just below the
			window at the top of the window.  Put the cursor in
			that line, at the first non-blank in the line.
			With [count]: just like "z<CR>".


## <a id="scroll-up" class="section-title" href="#scroll-up">2. Scrolling Upwards</a> 

The following commands move the edit window (the part of the buffer that you
see) upwards (this means that more lines upwards in the text buffer can be
seen):

### <a id="CTRL-Y" class="section-title" href="#CTRL-Y">Note:</a>
CTRL-Y			Scroll window [count] lines upwards in the buffer.
			The text moves downwards on the screen.
			Note: When using the MS-Windows key bindings CTRL-Y is
			remapped to redo.

### <a id="CTRL-U" class="section-title" href="#CTRL-U">Note:</a>
CTRL-U			Scroll window Upwards in the buffer.  The number of
			lines comes from the 'scroll' option (default: half a
			screen).  If [count] given, first set the 'scroll'
			option to [count].  The cursor is moved the same
			number of lines up in the file (if possible; when
			lines wrap and when hitting the end of the file there
			may be a difference).  When the cursor is on the first
			line of the buffer nothing happens and a beep is
			produced.  See also 'startofline' option.

S-Up>		or					*<S-Up>* *<kPageUp>*
### <a id="<PageUp> CTRL-B" class="section-title" href="#<PageUp> CTRL-B">PageUp>	or</a>
CTRL-B			Scroll window [count] pages Backwards (upwards) in the
			buffer.  See also 'startofline' option.
			When there is only one window the 'window' option
			might be used.

### <a id="z^" class="section-title" href="#z^">Note:</a>
z^			Without [count]: Redraw with the line just above the
			window at the bottom of the window.  Put the cursor in
			that line, at the first non-blank in the line.
			With [count]: First scroll the text to put the [count]
			line at the bottom of the window, then redraw with the
			line which is now at the top of the window at the
			bottom of the window.  Put the cursor in that line, at
			the first non-blank in the line.


## <a id="scroll-cursor" class="section-title" href="#scroll-cursor">3. Scrolling Relative to Cursor</a> 

The following commands reposition the edit window (the part of the buffer that
you see) while keeping the cursor on the same line.  Note that the 'scrolloff'
option may cause context lines to show above and below the cursor.

### <a id="z<CR>" class="section-title" href="#z<CR>">Note:</a>
z<CR>			Redraw, line [count] at top of window (default
			cursor line).  Put cursor at first non-blank in the
			line.

### <a id="zt" class="section-title" href="#zt">Note:</a>
zt			Like "z<CR>", but leave the cursor in the same
			column.

### <a id="zN<CR>" class="section-title" href="#zN<CR>">Note:</a>
z{height}<CR>		Redraw, make window {height} lines tall.  This is
			useful to make the number of lines small when screen
			updating is very slow.  Cannot make the height more
			than the physical screen height.

### <a id="z." class="section-title" href="#z.">Note:</a>
z.			Redraw, line [count] at center of window (default
			cursor line).  Put cursor at first non-blank in the
			line.

### <a id="zz" class="section-title" href="#zz">Note:</a>
zz			Like "z.", but leave the cursor in the same column.
			Careful: If caps-lock is on, this command becomes
			"ZZ": write buffer and exit!

### <a id="z-" class="section-title" href="#z-">Note:</a>
z-			Redraw, line [count] at bottom of window (default
			cursor line).  Put cursor at first non-blank in the
			line.

### <a id="zb" class="section-title" href="#zb">Note:</a>
zb			Like "z-", but leave the cursor in the same column.


## <a id="scroll-horizontal" class="section-title" href="#scroll-horizontal">4. Scrolling Horizontally</a> 

For the following four commands the cursor follows the screen.  If the
character that the cursor is on is moved off the screen, the cursor is moved
to the closest character that is on the screen.  The value of 'sidescroll' is
not used.

z<Right>    or						*zl* *z<Right>*
zl			Move the view on the text [count] characters to the
			right, thus scroll the text [count] characters to the
			left.  This only works when 'wrap' is off.

z<Left>      or						*zh* *z<Left>*
zh			Move the view on the text [count] characters to the
			left, thus scroll the text [count] characters to the
			right.  This only works when 'wrap' is off.

### <a id="zL" class="section-title" href="#zL">Note:</a>
zL			Move the view on the text half a screenwidth to the
			right, thus scroll the text half a screenwidth to the
			left.  This only works when 'wrap' is off.

### <a id="zH" class="section-title" href="#zH">Note:</a>
zH			Move the view on the text half a screenwidth to the
			left, thus scroll the text half a screenwidth to the
			right.  This only works when 'wrap' is off.

For the following two commands the cursor is not moved in the text, only the
text scrolls on the screen.

### <a id="zs" class="section-title" href="#zs">Note:</a>
zs			Scroll the text horizontally to position the cursor
			at the start (left side) of the screen.  This only
			works when 'wrap' is off.

### <a id="ze" class="section-title" href="#ze">Note:</a>
ze			Scroll the text horizontally to position the cursor
			at the end (right side) of the screen.  This only
			works when 'wrap' is off.


## <a id="scroll-binding" class="section-title" href="#scroll-binding">5. Scrolling Synchronously</a> 

Occasionally, it is desirable to bind two or more windows together such that
when one window is scrolled, the other windows are also scrolled.  In Vim,
windows can be given this behavior by setting the (window-specific)
'scrollbind' option.  When a window that has 'scrollbind' set is scrolled, all
other 'scrollbind' windows are scrolled the same amount, if possible.  The
behavior of 'scrollbind' can be modified by the 'scrollopt' option.

When using the scrollbars, the binding only happens when scrolling the window
with focus (where the cursor is).  You can use this to avoid scroll-binding
for a moment without resetting options.

When a window also has the 'diff' option set, the scroll-binding uses the
differences between the two buffers to synchronize the position precisely.
Otherwise the following method is used.

### <a id="scrollbind-relative" class="section-title" href="#scrollbind-relative">Note:</a>
Each 'scrollbind' window keeps track of its "relative offset," which can be
thought of as the difference between the current window's vertical scroll
position and the other window's vertical scroll position.  When one of the
'scrollbind' windows is asked to vertically scroll past the beginning or end
limit of its text, the window no longer scrolls, but remembers how far past
the limit it wishes to be.  The window keeps this information so that it can
maintain the same relative offset, regardless of its being asked to scroll
past its buffer's limits.

However, if a 'scrollbind' window that has a relative offset that is past its
buffer's limits is given the cursor focus, the other 'scrollbind' windows must
jump to a location where the current window's relative offset is valid.  This
behavior can be changed by clearing the "jump" flag from the 'scrollopt'
option.

### <a id="syncbind :syncbind :sync" class="section-title" href="#syncbind :syncbind :sync">Note:</a>
:syncbind		Force all 'scrollbind' windows to have the same
			relative offset.  I.e., when any of the 'scrollbind'
			windows is scrolled to the top of its buffer, all of
			the 'scrollbind' windows will also be at the top of
			their buffers.

### <a id="scrollbind-quickadj" class="section-title" href="#scrollbind-quickadj">Note:</a>
The 'scrollbind' flag is meaningful when using keyboard commands to vertically
scroll a window, and also meaningful when using the vertical scrollbar of the
window which has the cursor focus.  However, when using the vertical scrollbar
of a window which doesn't have the cursor focus, 'scrollbind' is ignored.
This allows quick adjustment of the relative offset of 'scrollbind' windows.


## <a id="scroll-mouse-wheel" class="section-title" href="#scroll-mouse-wheel">6. Scrolling With a Mouse Wheel</a> 

When your mouse has a scroll wheel, it should work with Nvim in the GUI and
any terminal that has mouse support.  By default only vertical scroll wheels
are supported, but some GUIs also support horizontal scroll wheels.

Note that horizontal scrolling only works if 'nowrap' is set.  Also, unless
the "h" flag in 'guioptions' is set, the cursor moves to the longest visible
line if the cursor line is about to be scrolled off the screen (similarly to
how the horizontal scrollbar works).

You can control the number of lines / columns to scroll by using the
'mousescroll' option. You can also modify the default behavior by mapping
the keys. For example, to scroll a page at a time in normal mode:
   :map <ScrollWheelUp> <C-B>
   :map <ScrollWheelDown> <C-F>
Scroll keys can also be combined with modifiers such as Shift, Ctrl, and Alt.

When scrolling with a mouse, the window currently under the cursor is
scrolled. This allows you to scroll inactive windows. Note that when scroll
keys are remapped to keyboard keys, the active window is affected regardless
of the current cursor position.

 vim:tw=78:ts=8:noet:ft=help:norl:

