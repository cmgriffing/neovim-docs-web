---
title:  Scroll
layout: ../../layouts/MainLayout.astro
---

  <a name="scroll.txt"></a><a name="scrolling"></a><h1> Scroll</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/scroll.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Scrolling</div>
<div class="old-help-para">These commands move the contents of the window.  If the cursor position is
moved off of the window, the cursor is moved onto the window (with
<a href="/neovim-docs-web/en/options#'scrolloff'">'scrolloff'</a> screen lines around it).  A page is the number of lines in the
window minus two.  The mnemonics for these commands may be a bit confusing.
Remember that the commands refer to moving the window (the part of the buffer
that you see) upwards or downwards in the buffer.  When the window moves
upwards in the buffer, the text in the window moves downwards on your screen.</div>
<div class="old-help-para">See section <a href="/neovim-docs-web/en/usr_03#03.7">03.7</a> of the user manual for an introduction.</div>
<div class="old-help-para"><h2 class="help-heading">1. Scrolling downwards<span class="help-heading-tags">					<a name="scroll-down"></a><span class="help-tag">scroll-down</span></span></h2></div>
<div class="old-help-para">The following commands move the edit window (the part of the buffer that you
see) downwards (this means that more lines downwards in the text buffer can be
seen):</div>
<div class="old-help-para">							<a name="CTRL-E"></a><code class="help-tag-right">CTRL-E</code>
CTRL-E			Scroll window [count] lines downwards in the buffer.
			The text moves upwards on the screen.
			Mnemonic: Extra lines.</div>
<div class="old-help-para">							<a name="CTRL-D"></a><code class="help-tag-right">CTRL-D</code>
CTRL-D			Scroll window Downwards in the buffer.  The number of
			lines comes from the <a href="/neovim-docs-web/en/options#'scroll'">'scroll'</a> option (default: half a
			screen).  If [count] given, first set <a href="/neovim-docs-web/en/options#'scroll'">'scroll'</a> option
			to [count].  The cursor is moved the same number of
			lines down in the file (if possible; when lines wrap
			and when hitting the end of the file there may be a
			difference).  When the cursor is on the last line of
			the buffer nothing happens and a beep is produced.
			See also <a href="/neovim-docs-web/en/options#'startofline'">'startofline'</a> option.
			<code>{difference from vi: Vim scrolls 'scroll' screen}</code>
			lines, instead of file lines; makes a difference when
			lines wrap}</div>
<div class="old-help-para"><code>&lt;S-Down&gt;</code>	or				<a name="%3CS-Down%3E"></a><code class="help-tag-right">&lt;S-Down&gt;</code> <a name="%3CkPageDown%3E"></a><code class="help-tag">&lt;kPageDown&gt;</code>
<code>&lt;PageDown&gt;</code>	or				<a name="%3CPageDown%3E"></a><code class="help-tag-right">&lt;PageDown&gt;</code> <a name="CTRL-F"></a><code class="help-tag">CTRL-F</code>
CTRL-F			Scroll window [count] pages Forwards (downwards) in
			the buffer.  See also <a href="/neovim-docs-web/en/options#'startofline'">'startofline'</a> option.
			When there is only one window the <a href="/neovim-docs-web/en/options#'window'">'window'</a> option
			might be used.</div>
<div class="old-help-para">							<a name="z%2B"></a><code class="help-tag-right">z+</code>
z+			Without [count]: Redraw with the line just below the
			window at the top of the window.  Put the cursor in
			that line, at the first non-blank in the line.
			With [count]: just like "z&lt;CR&gt;".</div>
<div class="old-help-para"><h2 class="help-heading">2. Scrolling upwards<span class="help-heading-tags">					<a name="scroll-up"></a><span class="help-tag">scroll-up</span></span></h2></div>
<div class="old-help-para">The following commands move the edit window (the part of the buffer that you
see) upwards (this means that more lines upwards in the text buffer can be
seen):</div>
<div class="old-help-para">							<a name="CTRL-Y"></a><code class="help-tag-right">CTRL-Y</code>
CTRL-Y			Scroll window [count] lines upwards in the buffer.
			The text moves downwards on the screen.
			Note: When using the MS-Windows key bindings <code>CTRL-Y</code> is
			remapped to redo.</div>
<div class="old-help-para">							<a name="CTRL-U"></a><code class="help-tag-right">CTRL-U</code>
CTRL-U			Scroll window Upwards in the buffer.  The number of
			lines comes from the <a href="/neovim-docs-web/en/options#'scroll'">'scroll'</a> option (default: half a
			screen).  If [count] given, first set the <a href="/neovim-docs-web/en/options#'scroll'">'scroll'</a>
			option to [count].  The cursor is moved the same
			number of lines up in the file (if possible; when
			lines wrap and when hitting the end of the file there
			may be a difference).  When the cursor is on the first
			line of the buffer nothing happens and a beep is
			produced.  See also <a href="/neovim-docs-web/en/options#'startofline'">'startofline'</a> option.</div>
<div class="old-help-para"><code>&lt;S-Up&gt;</code>		or					<a name="%3CS-Up%3E"></a><code class="help-tag-right">&lt;S-Up&gt;</code> <a name="%3CkPageUp%3E"></a><code class="help-tag">&lt;kPageUp&gt;</code>
<code>&lt;PageUp&gt;</code>	or					<a name="%3CPageUp%3E"></a><code class="help-tag-right">&lt;PageUp&gt;</code> <a name="CTRL-B"></a><code class="help-tag">CTRL-B</code>
CTRL-B			Scroll window [count] pages Backwards (upwards) in the
			buffer.  See also <a href="/neovim-docs-web/en/options#'startofline'">'startofline'</a> option.
			When there is only one window the <a href="/neovim-docs-web/en/options#'window'">'window'</a> option
			might be used.</div>
<div class="old-help-para">							<a name="z%5E"></a><code class="help-tag-right">z^</code>
z^			Without [count]: Redraw with the line just above the
			window at the bottom of the window.  Put the cursor in
			that line, at the first non-blank in the line.
			With [count]: First scroll the text to put the [count]
			line at the bottom of the window, then redraw with the
			line which is now at the top of the window at the
			bottom of the window.  Put the cursor in that line, at
			the first non-blank in the line.</div>
<div class="old-help-para"><h2 class="help-heading">3. Scrolling relative to cursor<span class="help-heading-tags">				<a name="scroll-cursor"></a><span class="help-tag">scroll-cursor</span></span></h2></div>
<div class="old-help-para">The following commands reposition the edit window (the part of the buffer that
you see) while keeping the cursor on the same line.  Note that the <a href="/neovim-docs-web/en/options#'scrolloff'">'scrolloff'</a>
option may cause context lines to show above and below the cursor.</div>
<div class="old-help-para">							<a name="z%3CCR%3E"></a><code class="help-tag-right">z&lt;CR&gt;</code>
z&lt;CR&gt;			Redraw, line [count] at top of window (default
			cursor line).  Put cursor at first non-blank in the
			line.</div>
<div class="old-help-para">							<a name="zt"></a><code class="help-tag-right">zt</code>
zt			Like "z&lt;CR&gt;", but leave the cursor in the same
			column.</div>
<div class="old-help-para">							<a name="zN%3CCR%3E"></a><code class="help-tag-right">zN&lt;CR&gt;</code>
z{height}&lt;CR&gt;		Redraw, make window <code>{height}</code> lines tall.  This is
			useful to make the number of lines small when screen
			updating is very slow.  Cannot make the height more
			than the physical screen height.</div>
<div class="old-help-para">							<a name="z."></a><code class="help-tag-right">z.</code>
z.			Redraw, line [count] at center of window (default
			cursor line).  Put cursor at first non-blank in the
			line.</div>
<div class="old-help-para">							<a name="zz"></a><code class="help-tag-right">zz</code>
zz			Like "z.", but leave the cursor in the same column.
			Careful: If caps-lock is on, this command becomes
			"ZZ": write buffer and exit!</div>
<div class="old-help-para">							<a name="z-"></a><code class="help-tag-right">z-</code>
z-			Redraw, line [count] at bottom of window (default
			cursor line).  Put cursor at first non-blank in the
			line.</div>
<div class="old-help-para">							<a name="zb"></a><code class="help-tag-right">zb</code>
zb			Like "z-", but leave the cursor in the same column.</div>
<div class="old-help-para"><h2 class="help-heading">4. Scrolling horizontally<span class="help-heading-tags">				<a name="scroll-horizontal"></a><span class="help-tag">scroll-horizontal</span></span></h2></div>
<div class="old-help-para">For the following four commands the cursor follows the screen.  If the
character that the cursor is on is moved off the screen, the cursor is moved
to the closest character that is on the screen.  The value of <a href="/neovim-docs-web/en/options#'sidescroll'">'sidescroll'</a> is
not used.</div>
<div class="old-help-para">z&lt;Right&gt;    or						<a name="zl"></a><code class="help-tag-right">zl</code> <a name="z%3CRight%3E"></a><code class="help-tag">z&lt;Right&gt;</code>
zl			Move the view on the text [count] characters to the
			right, thus scroll the text [count] characters to the
			left.  This only works when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is off.</div>
<div class="old-help-para">z&lt;Left&gt;      or						<a name="zh"></a><code class="help-tag-right">zh</code> <a name="z%3CLeft%3E"></a><code class="help-tag">z&lt;Left&gt;</code>
zh			Move the view on the text [count] characters to the
			left, thus scroll the text [count] characters to the
			right.  This only works when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is off.</div>
<div class="old-help-para">							<a name="zL"></a><code class="help-tag-right">zL</code>
zL			Move the view on the text half a screenwidth to the
			right, thus scroll the text half a screenwidth to the
			left.  This only works when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is off.</div>
<div class="old-help-para">							<a name="zH"></a><code class="help-tag-right">zH</code>
zH			Move the view on the text half a screenwidth to the
			left, thus scroll the text half a screenwidth to the
			right.  This only works when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is off.</div>
<div class="old-help-para">For the following two commands the cursor is not moved in the text, only the
text scrolls on the screen.</div>
<div class="old-help-para">							<a name="zs"></a><code class="help-tag-right">zs</code>
zs			Scroll the text horizontally to position the cursor
			at the start (left side) of the screen.  This only
			works when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is off.</div>
<div class="old-help-para">							<a name="ze"></a><code class="help-tag-right">ze</code>
ze			Scroll the text horizontally to position the cursor
			at the end (right side) of the screen.  This only
			works when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is off.</div>
<div class="old-help-para"><h2 class="help-heading">5. Scrolling synchronously<span class="help-heading-tags">				<a name="scroll-binding"></a><span class="help-tag">scroll-binding</span></span></h2></div>
<div class="old-help-para">Occasionally, it is desirable to bind two or more windows together such that
when one window is scrolled, the other windows are also scrolled.  In Vim,
windows can be given this behavior by setting the (window-specific)
<a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> option.  When a window that has <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> set is scrolled, all
other <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> windows are scrolled the same amount, if possible.  The
behavior of <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> can be modified by the <a href="/neovim-docs-web/en/options#'scrollopt'">'scrollopt'</a> option.</div>
<div class="old-help-para">When using the scrollbars, the binding only happens when scrolling the window
with focus (where the cursor is).  You can use this to avoid scroll-binding
for a moment without resetting options.</div>
<div class="old-help-para">When a window also has the <a href="/neovim-docs-web/en/options#'diff'">'diff'</a> option set, the scroll-binding uses the
differences between the two buffers to synchronize the position precisely.
Otherwise the following method is used.</div>
<div class="old-help-para">							<a name="scrollbind-relative"></a><code class="help-tag-right">scrollbind-relative</code>
Each <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> window keeps track of its "relative offset," which can be
thought of as the difference between the current window's vertical scroll
position and the other window's vertical scroll position.  When one of the
<a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> windows is asked to vertically scroll past the beginning or end
limit of its text, the window no longer scrolls, but remembers how far past
the limit it wishes to be.  The window keeps this information so that it can
maintain the same relative offset, regardless of its being asked to scroll
past its buffer's limits.</div>
<div class="old-help-para">However, if a <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> window that has a relative offset that is past its
buffer's limits is given the cursor focus, the other <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> windows must
jump to a location where the current window's relative offset is valid.  This
behavior can be changed by clearing the "jump" flag from the <a href="/neovim-docs-web/en/options#'scrollopt'">'scrollopt'</a>
option.</div>
<div class="old-help-para">						<a name="syncbind"></a><code class="help-tag-right">syncbind</code> <a name="%3Asyncbind"></a><code class="help-tag">:syncbind</code> <a name="%3Async"></a><code class="help-tag">:sync</code>
:syncbind		Force all <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> windows to have the same
			relative offset.  I.e., when any of the <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a>
			windows is scrolled to the top of its buffer, all of
			the <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> windows will also be at the top of
			their buffers.</div>
<div class="old-help-para">							<a name="scrollbind-quickadj"></a><code class="help-tag-right">scrollbind-quickadj</code>
The <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> flag is meaningful when using keyboard commands to vertically
scroll a window, and also meaningful when using the vertical scrollbar of the
window which has the cursor focus.  However, when using the vertical scrollbar
of a window which doesn't have the cursor focus, <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> is ignored.
This allows quick adjustment of the relative offset of <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> windows.</div>
<div class="old-help-para"><h2 class="help-heading">6. Scrolling with a mouse wheel<span class="help-heading-tags">				<a name="scroll-mouse-wheel"></a><span class="help-tag">scroll-mouse-wheel</span></span></h2></div>
<div class="old-help-para">When your mouse has a scroll wheel, it should work with Nvim in the GUI and
any terminal that has mouse support.  By default only vertical scroll wheels
are supported, but some GUIs also support horizontal scroll wheels.</div>
<div class="old-help-para">Note that horizontal scrolling only works if <a href="/neovim-docs-web/en/options#'nowrap'">'nowrap'</a> is set.  Also, unless
the "h" flag in <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a> is set, the cursor moves to the longest visible
line if the cursor line is about to be scrolled off the screen (similarly to
how the horizontal scrollbar works).</div>
<div class="old-help-para">You can control the number of lines / columns to scroll by using the
<a href="/neovim-docs-web/en/options#'mousescroll'">'mousescroll'</a> option. You can also modify the default behavior by mapping
the keys. For example, to scroll a page at a time in normal mode:<pre>:map &lt;ScrollWheelUp&gt; &lt;C-B&gt;
:map &lt;ScrollWheelDown&gt; &lt;C-F&gt;</pre>
Scroll keys can also be combined with modifiers such as Shift, Ctrl, and Alt.</div>
<div class="old-help-para">When scrolling with a mouse, the window currently under the cursor is
scrolled. This allows you to scroll inactive windows. Note that when scroll
keys are remapped to keyboard keys, the active window is affected regardless
of the current cursor position.</div>

  
  