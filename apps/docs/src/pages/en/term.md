---
title:  Term
layout: ../../layouts/MainLayout.astro
---

  <a name="term.txt"></a><a name="TUI"></a><h1> Term</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/term.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Terminal UI <a name="tui"></a><code class="help-tag">tui</code></div>
<div class="old-help-para">Nvim uses a list of terminal capabilities to display its user interface
(except in <a href="starting.html#--embed">--embed</a> and <a href="starting.html#--headless">--headless</a> modes). If that information is wrong,
the screen may be messed up or keys may not be recognized.</div>
<div class="old-help-para"><h2 class="help-heading">Startup<span class="help-heading-tags">						<a name="startup-terminal"></a><span class="help-tag">startup-terminal</span></span></h2></div>
<div class="old-help-para">Nvim guesses the terminal type when it starts (except in <a href="starting.html#--embed">--embed</a> and
<a href="starting.html#--headless">--headless</a> modes). The <a href="term.html#%24TERM">$TERM</a> environment variable is the primary hint that
determines the terminal type.</div>
<div class="old-help-para">					<a name="terminfo"></a><code class="help-tag-right">terminfo</code> <a name="E557"></a><code class="help-tag">E557</code> <a name="E558"></a><code class="help-tag">E558</code> <a name="E559"></a><code class="help-tag">E559</code>
The terminfo database is used if available.</div>
<div class="old-help-para">The Unibilium library (used by Nvim to read terminfo) allows you to override
the system terminfo with one in $HOME/.terminfo/ directory, in part or in
whole.</div>
<div class="old-help-para">Building your own terminfo is usually as simple as running this as
a non-superuser:
<pre>curl -LO https://invisible-island.net/datafiles/current/terminfo.src.gz
gunzip terminfo.src.gz
tic terminfo.src</pre></div>
<div class="old-help-para">								<a name="%24TERM"></a><code class="help-tag-right">$TERM</code>
The $TERM environment variable must match the terminal you are using!
Otherwise Nvim cannot know what sequences your terminal expects, and weird
or sub-optimal behavior will result (scrolling quirks, wrong colors, etc.).</div>
<div class="old-help-para">$TERM is also important because it is forwarded by SSH to the remote session,
unlike most other environment variables.</div>
<div class="old-help-para">  For this terminal           Set $TERM to                  <a href="term.html#builtin-terms">builtin-terms</a>
  -------------------------------------------------------------------------
  anything libvte-based       vte, vte-256color                   Y
   (e.g. GNOME Terminal)      (aliases: gnome, gnome-256color)
  iTerm (original)            iterm, iTerm.app                    N
  iTerm2 (new capabilities)   iterm2, iTerm2.app                  Y
  Konsole                     konsole-256color                    N
  Linux virtual terminal      linux, linux-256color               Y
  PuTTY                       putty, putty-256color               Y
  rxvt                        rxvt, rxvt-256color                 Y
  screen                      screen, screen-256color             Y
  simple terminal (st)        st, st-256color                     Y
  Terminal.app                nsterm                              N
  tmux                        tmux, tmux-256color                 Y
  Windows/ConEmu              conemu                              Y
  Windows/Cygwin-built Nvim   cygwin                              Y
  Windows/Interix             interix                             Y
  Windows/VTP console         vtpcon                              Y
  Windows/legacy console      win32con                            Y
  xterm or compatible         xterm, xterm-256color               Y</div>
<div class="old-help-para">					<a name="builtin-terms"></a><code class="help-tag-right">builtin-terms</code> <a name="builtin_terms"></a><code class="help-tag">builtin_terms</code>
If a <a href="term.html#terminfo">terminfo</a> database is not available or there is no entry for the current
terminal, Nvim will map <a href="term.html#%24TERM">$TERM</a> to a builtin entry according to the above
table, or "ansi" if there is no match. For example "TERM=putty-256color" will
be mapped to the builtin "putty" entry. See also <a href="term.html#tui-colors">tui-colors</a>.</div>
<div class="old-help-para">The builtin terminfo is not combined with any external terminfo database, nor
can it be used in preference to one.  You can thus entirely override any
omissions or out-of-date information in the builtin terminfo database by
supplying an external one with entries for the terminal type.</div>
<div class="old-help-para">Settings depending on terminal			<a name="term-dependent-settings"></a><code class="help-tag-right">term-dependent-settings</code></div>
<div class="old-help-para">If you want to set terminal-dependent options or mappings, you can do this in
your init.vim.  Example:<pre>if $TERM =~ '^\(rxvt\|screen\|interix\|putty\)\(-.*\)\?$'
    set notermguicolors
elseif $TERM =~ '^\(tmux\|iterm\|vte\|gnome\)\(-.*\)\?$'
    set termguicolors
elseif $TERM =~ '^\(xterm\)\(-.*\)\?$'
    if $XTERM_VERSION != ''
        set termguicolors
    elseif $KONSOLE_PROFILE_NAME != ''
        set termguicolors
    elseif $VTE_VERSION != ''
        set termguicolors
    else
        set notermguicolors
    endif
elseif $TERM =~ ...
    ... and so forth ...
endif</pre></div>
<div class="old-help-para">					<a name="scroll-region"></a><code class="help-tag-right">scroll-region</code> <a name="xterm-scroll-region"></a><code class="help-tag">xterm-scroll-region</code>
Where possible, Nvim will use the terminal's ability to set a scroll region in
order to redraw faster when a window is scrolled.  If the terminal's terminfo
description describes an ability to set top and bottom scroll margins, that is
used.</div>
<div class="old-help-para">This will not speed up scrolling in a window that is not the full width of the
terminal.  Xterm has an extra ability, not described by terminfo, to set left
and right scroll margins as well.  If Nvim detects that the terminal is Xterm,
it will make use of this ability to speed up scrolling that is not the full
width of the terminal.</div>
<div class="old-help-para">							<a name="tui-input"></a><code class="help-tag-right">tui-input</code>
Nvim uses libtermkey to convert terminal escape sequences to key codes.
<a href="term.html#terminfo">terminfo</a> is used first, and CSI sequences not in <a href="term.html#terminfo">terminfo</a> (including
extended keys a.k.a. modifyOtherKeys or "CSI u") can also be parsed.
For example, when running Nvim in tmux, this makes Nvim leave Insert mode and
go to the window below:<pre>tmux send-keys 'Escape' [ 2 7 u 'C-W' j</pre>
Where <code>'Escape' [ 2 7 u</code> is an unambiguous "CSI u" sequence for the <code>&lt;Esc&gt;</code> key.</div>
<div class="old-help-para">The kitty keyboard protocol <a href="https://sw.kovidgoyal.net/kitty/keyboard-protocol/">https://sw.kovidgoyal.net/kitty/keyboard-protocol/</a>
is partially supported, including keypad keys in Unicode Private Use Area.
For example, this sequence is recognized by Nvim as <code>&lt;C-kEnter&gt;</code>:<pre>CSI 57414 ; 5 u</pre>
and can be used differently from <code>&lt;C-CR&gt;</code> in mappings.</div>
<div class="old-help-para">						<a name="tui-modifyOtherKeys"></a><code class="help-tag-right">tui-modifyOtherKeys</code> <a name="tui-csiu"></a><code class="help-tag">tui-csiu</code>
Historically, terminal emulators could not distinguish between certain control
key modifiers and other keys. For example, <code>&lt;C-I&gt;</code> and <code>&lt;Tab&gt;</code> are represented the
same way, as are <code>&lt;Esc&gt;</code> and <code>&lt;C-[&gt;</code>, <code>&lt;CR&gt;</code> and <code>&lt;C-M&gt;</code>, and <code>&lt;NL&gt;</code> and <code>&lt;C-J&gt;</code>. This
meant that Nvim also could not map these keys separately.</div>
<div class="old-help-para">Modern terminal emulators are able to distinguish between these pairs of keys
by encoding control modifiers differently. There are two common but distinct
ways of doing this, known as "modifyOtherKeys" and "CSI u". Nvim supports both
encoding methods and at startup will tell the terminal emulator that it
understands these key encodings. If your terminal emulator supports it then
this will allow you to map the key pairs listed above separately.</div>
<div class="old-help-para">At startup Nvim will query your terminal to see if it supports the CSI u
encoding by writing the sequence<pre>CSI ? u CSI c</pre>
If your terminal emulator responds with<pre>CSI ? &lt;flags&gt; u</pre>
this means your terminal supports the CSI u encoding and Nvim will tell your
terminal to enable it by writing the sequence<pre>CSI &gt; 1 u</pre>
If your terminal does not support CSI u then Nvim will instead enable the
"modifyOtherKeys" encoding by writing the sequence<pre>CSI &gt; 4 ; 2 m</pre>
When Nvim exits cleanly it will send the corresponding sequence to disable the
special key encoding. If Nvim does not exit cleanly then your terminal
emulator could be in a bad state. If this happens, simply run "reset".</div>
<div class="old-help-para">							<a name="tui-colors"></a><code class="help-tag-right">tui-colors</code>
Nvim uses 256 colours by default, ignoring <a href="term.html#terminfo">terminfo</a> for most terminal types,
including "linux" (whose virtual terminals have had 256-colour support since
4.8) and anything claiming to be "xterm".  Also when $COLORTERM or $TERM
contain the string "256".</div>
<div class="old-help-para">Nvim similarly assumes that any terminal emulator that sets $COLORTERM to any
value, is capable of at least 16-colour operation.</div>
<div class="old-help-para">						<a name="true-color"></a><code class="help-tag-right">true-color</code> <a name="xterm-true-color"></a><code class="help-tag">xterm-true-color</code>
Nvim emits true (24-bit) colours in the terminal, if <a href="options.html#'termguicolors'">'termguicolors'</a> is set.</div>
<div class="old-help-para">It uses the "setrgbf" and "setrgbb" <a href="term.html#terminfo">terminfo</a> extensions (proposed by Rüdiger
Sonderfeld in 2013). If your terminfo definition is missing them, then Nvim
will decide whether to add them to your terminfo definition, using the ISO
8613-6:1994/ITU T.416:1993 control sequences for setting RGB colours (but
modified to use semicolons instead of colons unless the terminal is known to
follow the standard).</div>
<div class="old-help-para">Another convention, pioneered in 2016 by tmux, is the "Tc" terminfo extension.
If terminfo has this flag, Nvim will add constructed "setrgbf" and "setrgbb"
capabilities as if they had been in the terminfo definition.</div>
<div class="old-help-para">If terminfo does not (yet) have this flag, Nvim will fall back to $TERM and
other environment variables.  It will add constructed "setrgbf" and "setrgbb"
capabilities in the case of the "rxvt", "linux", "st", "tmux", and "iterm"
terminal types, or when Konsole, genuine Xterm, a libvte terminal emulator
version 0.36 or later, or a terminal emulator that sets the COLORTERM
environment variable to "truecolor" is detected.</div>
<div class="old-help-para">							<a name="xterm-resize"></a><code class="help-tag-right">xterm-resize</code>
Nvim can resize the terminal display on some terminals that implement an
extension pioneered by dtterm.  <a href="term.html#terminfo">terminfo</a> does not have a flag for this
extension.  So Nvim simply assumes that (all) "dtterm", "xterm", "teraterm",
"rxvt" terminal types, and Konsole, are capable of this.</div>
<div class="old-help-para">							<a name="tui-cursor-shape"></a><code class="help-tag-right">tui-cursor-shape</code>
Nvim will adjust the shape of the cursor from a block to a line when in insert
mode (or as specified by the <a href="options.html#'guicursor'">'guicursor'</a> option), on terminals that support
it.  It uses the same <a href="term.html#terminfo">terminfo</a> extensions that were pioneered by tmux for
this: "Ss" and "Se".
Similarly, if you set the cursor highlight group with blend=100, Nvim hides
the cursor through the "cvvis" and "civis" extensions.</div>
<div class="old-help-para">If your terminfo definition is missing them, then Nvim will decide whether to
add them to your terminfo definition, by looking at $TERM and other
environment variables.  For the "rxvt", "putty", "linux", "screen",
"teraterm", and "iterm" terminal types, or when Konsole, a libvte-based
terminal emulator, or genuine Xterm are detected, it will add constructed
"Ss" and "Se" capabilities.</div>
<div class="old-help-para">							<a name="tui-cursor-tmux"></a><code class="help-tag-right">tui-cursor-tmux</code>
Within tmux it may appear that Nvim is not changing the cursor, but in fact it
is tmux receiving instructions from Nvim to change the cursor and not knowing
what to do in turn.  tmux must translate what it receives from Nvim into
whatever control sequence is appropriate for the host terminal.  It shares
a common mechanism with Nvim, of using the "Ss" and "Se" capabilities from
terminfo (for the output terminal) if they are present. Unlike Nvim, if they
are not in terminfo you must add them by setting "terminal-overrides" in
~/.tmux.conf .</div>
<div class="old-help-para">See the tmux(1) manual page for the details of how and what to do in the tmux
configuration file.  It will look something like:<pre>set -ga terminal-overrides '*:Ss=\E[%p1%d q:Se=\E[ q'</pre>
&lt;or (alas!) for Konsole 18.07.70 or older, something more complex like:<pre>set -ga terminal-overrides 'xterm*:\E]50;CursorShape=%?%p1%{3}%&lt;%t%{0}%e%{1}%;%d\007'</pre></div>
<div class="old-help-para"><h2 class="help-heading">Window size<span class="help-heading-tags">						<a name="window-size"></a><span class="help-tag">window-size</span></span></h2></div>
<div class="old-help-para">[This is about the size of the whole window Vim is using, not a window that is
created with the ":split" command.]</div>
<div class="old-help-para">On Unix systems, three methods are tried to get the window size:</div>
<div class="old-help-para"><div class="help-li" style=""> an ioctl call (TIOCGSIZE or TIOCGWINSZ, depends on your system)
</div><div class="help-li" style=""> the environment variables "LINES" and "COLUMNS"
</div><div class="help-li" style=""> from the <a href="term.html#terminfo">terminfo</a> entries "lines" and "columns"
</div></div>
<div class="old-help-para">If everything fails a default size of 24 lines and 80 columns is assumed.  If
a window-resize signal is received the size will be set again.  If the window
size is wrong you can use the <a href="options.html#'lines'">'lines'</a> and <a href="options.html#'columns'">'columns'</a> options to set the
correct values. See <a href="various.html#%3Amode">:mode</a>.</div>
<div class="old-help-para"><h2 class="help-heading">Slow and fast terminals<span class="help-heading-tags">				<a name="slow-fast-terminal"></a><span class="help-tag">slow-fast-terminal</span></span></h2>						<a name="slow-terminal"></a><code class="help-tag-right">slow-terminal</code></div>
<div class="old-help-para">If you have a slow terminal you may want to reset the <a href="options.html#'showcmd'">'showcmd'</a> and <a href="options.html#'ruler'">'ruler'</a>
options.  The command characters and cursor positions will not be shown in the
status line (which involves a lot of cursor motions and attribute changes for
every keypress or movement).  If the terminal scrolls very slowly, set the
<a href="options.html#'scrolljump'">'scrolljump'</a> to 5 or so.  If the cursor is moved off the screen (e.g., with
"j") Vim will scroll 5 lines at a time.  Another possibility is to reduce the
number of lines that Vim uses with the command "z{height}&lt;CR&gt;".</div>
<div class="old-help-para">If the characters from the terminal are arriving with more than 1 second
between them you might want to set the <a href="options.html#'timeout'">'timeout'</a> and/or <a href="options.html#'ttimeout'">'ttimeout'</a> option.
See the "Options" chapter <a href="options.html#options">options</a>.</div>
<div class="old-help-para">If you are using a color terminal that is slow when displaying lines beyond
the end of a buffer, this is because Nvim is drawing the whitespace twice, in
two sets of colours and attributes.  To prevent this, use this command:<pre>hi NonText cterm=NONE ctermfg=NONE</pre>
This draws the spaces with the default colours and attributes, which allows the
second pass of drawing to be optimized away.  Note: Although in theory the
colours of whitespace are immaterial, in practice they change the colours of
cursors and selections that cross them.  This may have a visible, but minor,
effect on some UIs.</div>
<div class="old-help-para"><h2 class="help-heading">Using the mouse<span class="help-heading-tags">						<a name="mouse-using"></a><span class="help-tag">mouse-using</span></span></h2></div>
<div class="old-help-para">					<a name="mouse-mode-table"></a><code class="help-tag-right">mouse-mode-table</code> <a name="mouse-overview"></a><code class="help-tag">mouse-overview</code>
Overview of what the mouse buttons do, when <a href="options.html#'mousemodel'">'mousemodel'</a> is "extend":</div>
<div class="old-help-para">Normal Mode:
<div class="help-column_heading">event	      position	   selection	  change  action</div><div class="help-column_heading">	       cursor			  window</div><code>&lt;LeftMouse&gt;</code>     yes	     end	    yes
<code>&lt;C-LeftMouse&gt;</code>   yes	     end	    yes	   "CTRL-]" (2)
<code>&lt;S-LeftMouse&gt;</code>   yes	  no change	    yes	   "*" (2)    <a name="%3CS-LeftMouse%3E"></a><code class="help-tag">&lt;S-LeftMouse&gt;</code>
<code>&lt;LeftDrag&gt;</code>      yes	start or extend (1) no		      <a name="%3CLeftDrag%3E"></a><code class="help-tag-right">&lt;LeftDrag&gt;</code>
<code>&lt;LeftRelease&gt;</code>   yes	start or extend (1) no
<code>&lt;MiddleMouse&gt;</code>   yes	  if not active     no	   put
<code>&lt;MiddleMouse&gt;</code>   yes	  if active	    no	   yank and put
<code>&lt;RightMouse&gt;</code>    yes	start or extend     yes
<code>&lt;A-RightMouse&gt;</code>  yes start or extend blockw. yes		      <a name="%3CA-RightMouse%3E"></a><code class="help-tag-right">&lt;A-RightMouse&gt;</code>
<code>&lt;S-RightMouse&gt;</code>  yes	   no change	    yes	   "#" (2)    <a name="%3CS-RightMouse%3E"></a><code class="help-tag">&lt;S-RightMouse&gt;</code>
<code>&lt;C-RightMouse&gt;</code>  no	   no change	    no	   "CTRL-T"
<code>&lt;RightDrag&gt;</code>     yes	    extend	    no		      <a name="%3CRightDrag%3E"></a><code class="help-tag-right">&lt;RightDrag&gt;</code>
<code>&lt;RightRelease&gt;</code>  yes	    extend	    no		      <a name="%3CRightRelease%3E"></a><code class="help-tag-right">&lt;RightRelease&gt;</code></div>
<div class="old-help-para">Insert or Replace Mode:
<div class="help-column_heading">event	      position	   selection	  change  action</div><div class="help-column_heading">	       cursor			  window</div><code>&lt;LeftMouse&gt;</code>     yes     (cannot be active)  yes
<code>&lt;C-LeftMouse&gt;</code>   yes     (cannot be active)  yes	   "CTRL-O^]" (2)
<code>&lt;S-LeftMouse&gt;</code>   yes     (cannot be active)  yes	   "CTRL-O*" (2)
<code>&lt;LeftDrag&gt;</code>      yes     start or extend (1) no	   like <code>CTRL-O</code> (1)
<code>&lt;LeftRelease&gt;</code>   yes     start or extend (1) no	   like <code>CTRL-O</code> (1)
<code>&lt;MiddleMouse&gt;</code>   no      (cannot be active)  no	   put register
<code>&lt;RightMouse&gt;</code>    yes     start or extend	    yes	   like <code>CTRL-O</code>
<code>&lt;A-RightMouse&gt;</code>  yes start or extend blockw. yes
<code>&lt;S-RightMouse&gt;</code>  yes     (cannot be active)  yes	   "CTRL-O#" (2)
<code>&lt;C-RightMouse&gt;</code>  no	(cannot be active)  no	   "CTRL-O <code>CTRL-T</code>"</div>
<div class="old-help-para">In a help window:
<div class="help-column_heading">event	      position	   selection	  change  action</div><div class="help-column_heading">	       cursor			  window</div><code>&lt;2-LeftMouse&gt;</code>   yes     (cannot be active)  no	   "^]" (jump to help tag)</div>
<div class="old-help-para">When <a href="options.html#'mousemodel'">'mousemodel'</a> is "popup", these are different:</div>
<div class="old-help-para">Normal Mode:
<div class="help-column_heading">event	      position	   selection	  change  action</div><div class="help-column_heading">	       cursor			  window</div><code>&lt;S-LeftMouse&gt;</code>	yes	start or extend (1) no
<code>&lt;A-LeftMouse&gt;</code>   yes start or extend blockw. no		      <a name="%3CA-LeftMouse%3E"></a><code class="help-tag-right">&lt;A-LeftMouse&gt;</code>
<code>&lt;RightMouse&gt;</code>	no	popup menu	    no</div>
<div class="old-help-para">Insert or Replace Mode:
<div class="help-column_heading">event	      position	   selection	  change  action</div><div class="help-column_heading">	       cursor			  window</div><code>&lt;S-LeftMouse&gt;</code>   yes     start or extend (1) no	   like <code>CTRL-O</code> (1)
<code>&lt;A-LeftMouse&gt;</code>   yes start or extend blockw. no
<code>&lt;RightMouse&gt;</code>    no	popup menu	    no</div>
<div class="old-help-para">(1) only if mouse pointer moved since press
(2) only if click is in same buffer</div>
<div class="old-help-para">Clicking the left mouse button causes the cursor to be positioned.  If the
click is in another window that window is made the active window.  When
editing the command-line the cursor can only be positioned on the
command-line.  When in Insert mode Vim remains in Insert mode.  If <a href="options.html#'scrolloff'">'scrolloff'</a>
is set, and the cursor is positioned within <a href="options.html#'scrolloff'">'scrolloff'</a> lines from the window
border, the text is scrolled.</div>
<div class="old-help-para">A selection can be started by pressing the left mouse button on the first
character, moving the mouse to the last character, then releasing the mouse
button.  You will not always see the selection until you release the button,
only in some versions (GUI, Win32) will the dragging be shown immediately.
Note that you can make the text scroll by moving the mouse at least one
character in the first/last line in the window when <a href="options.html#'scrolloff'">'scrolloff'</a> is non-zero.</div>
<div class="old-help-para">In Normal, Visual and Select mode clicking the right mouse button causes the
Visual area to be extended.  When <a href="options.html#'mousemodel'">'mousemodel'</a> is "popup", the left button has
to be used while keeping the shift key pressed.  When clicking in a window
which is editing another buffer, the Visual or Select mode is stopped.</div>
<div class="old-help-para">In Normal, Visual and Select mode clicking the right mouse button with the alt
key pressed causes the Visual area to become blockwise.  When <a href="options.html#'mousemodel'">'mousemodel'</a> is
"popup" the left button has to be used with the alt key.  Note that this won't
work on systems where the window manager consumes the mouse events when the
alt key is pressed (it may move the window).</div>
<div class="old-help-para">							<a name="double-click"></a><code class="help-tag-right">double-click</code>
Double, triple and quadruple clicks are supported when the GUI is active, for
Win32 and for an xterm.  For selecting text, extra clicks extend the
selection:
<div class="help-column_heading">	click		select</div>	double		word or % match		<a name="%3C2-LeftMouse%3E"></a><code class="help-tag-right">&lt;2-LeftMouse&gt;</code>
	triple		line			<a name="%3C3-LeftMouse%3E"></a><code class="help-tag-right">&lt;3-LeftMouse&gt;</code>
	quadruple	rectangular block	<a name="%3C4-LeftMouse%3E"></a><code class="help-tag">&lt;4-LeftMouse&gt;</code>
Exception: In a Help window a double click jumps to help for the word that is
clicked on.
A double click on a word selects that word.  <a href="options.html#'iskeyword'">'iskeyword'</a> is used to specify
which characters are included in a word.  A double click on a character
that has a match selects until that match (like using "v%").  If the match is
an #if/#else/#endif block, the selection becomes linewise.
For MS-Windows and xterm the time for double clicking can be set with the
<a href="options.html#'mousetime'">'mousetime'</a> option. For the other systems this time is defined outside of Vim.
An example, for using a double click to jump to the tag under the cursor:<pre>:map &lt;2-LeftMouse&gt; :exe "tag " .. expand("&lt;cword&gt;")&lt;CR&gt;</pre>
Dragging the mouse with a double click (button-down, button-up, button-down
and then drag) will result in whole words to be selected.  This continues
until the button is released, at which point the selection is per character
again.</div>
<div class="old-help-para">For scrolling with the mouse see <a href="scroll.html#scroll-mouse-wheel">scroll-mouse-wheel</a>.</div>
<div class="old-help-para">In Insert mode, when a selection is started, Vim goes into Normal mode
temporarily.  When Visual or Select mode ends, it returns to Insert mode.
This is like using <code>CTRL-O</code> in Insert mode.  Select mode is used when the
<a href="options.html#'selectmode'">'selectmode'</a> option contains "mouse".</div>
<div class="old-help-para">					<a name="%3CMiddleRelease%3E"></a><code class="help-tag-right">&lt;MiddleRelease&gt;</code> <a name="%3CMiddleDrag%3E"></a><code class="help-tag">&lt;MiddleDrag&gt;</code>
Mouse clicks can be mapped.  The codes for mouse clicks are:
<div class="help-column_heading">     code	    mouse button	      normal action</div> <code>&lt;LeftMouse&gt;</code>	 left pressed		    set cursor position
 <code>&lt;LeftDrag&gt;</code>	 left moved while pressed   extend selection
 <code>&lt;LeftRelease&gt;</code>	 left released		    set selection end
 <code>&lt;MiddleMouse&gt;</code>	 middle pressed		    paste text at cursor position
 <code>&lt;MiddleDrag&gt;</code>	 middle moved while pressed -
 <code>&lt;MiddleRelease&gt;</code> middle released	    -
 <code>&lt;RightMouse&gt;</code>	 right pressed		    extend selection
 <code>&lt;RightDrag&gt;</code>	 right moved while pressed  extend selection
 <code>&lt;RightRelease&gt;</code>  right released		    set selection end
 <code>&lt;X1Mouse&gt;</code>	 X1 button pressed	    -				<a name="X1Mouse"></a><code class="help-tag-right">X1Mouse</code>
 <code>&lt;X1Drag&gt;</code>	 X1 moved while pressed	    -				<a name="X1Drag"></a><code class="help-tag-right">X1Drag</code>
 <code>&lt;X1Release&gt;</code>	 X1 button release	    -				<a name="X1Release"></a><code class="help-tag-right">X1Release</code>
 <code>&lt;X2Mouse&gt;</code>	 X2 button pressed	    -				<a name="X2Mouse"></a><code class="help-tag-right">X2Mouse</code>
 <code>&lt;X2Drag&gt;</code>	 X2 moved while pressed     -				<a name="X2Drag"></a><code class="help-tag-right">X2Drag</code>
 <code>&lt;X2Release&gt;</code>	 X2 button release	    -				<a name="X2Release"></a><code class="help-tag-right">X2Release</code></div>
<div class="old-help-para">The X1 and X2 buttons refer to the extra buttons found on some mice.  The
'Microsoft Explorer' mouse has these buttons available to the right thumb.
Currently X1 and X2 only work on Win32 and X11 environments.</div>
<div class="old-help-para">Examples:<pre>:noremap &lt;MiddleMouse&gt; &lt;LeftMouse&gt;&lt;MiddleMouse&gt;</pre>
Paste at the position of the middle mouse button click (otherwise the paste
would be done at the cursor position).<pre>:noremap &lt;LeftRelease&gt; &lt;LeftRelease&gt;y</pre>
Immediately yank the selection, when using Visual mode.</div>
<div class="old-help-para">Note the use of ":noremap" instead of "map" to avoid a recursive mapping.
<pre>:map &lt;X1Mouse&gt; &lt;C-O&gt;
:map &lt;X2Mouse&gt; &lt;C-I&gt;</pre>
Map the X1 and X2 buttons to go forwards and backwards in the jump list, see
<a href="motion.html#CTRL-O">CTRL-O</a> and <a href="motion.html#CTRL-I">CTRL-I</a>.</div>
<div class="old-help-para">						<a name="mouse-swap-buttons"></a><code class="help-tag-right">mouse-swap-buttons</code>
To swap the meaning of the left and right mouse buttons:<pre>:noremap        &lt;LeftMouse&gt;        &lt;RightMouse&gt;
:noremap        &lt;LeftDrag&gt;        &lt;RightDrag&gt;
:noremap        &lt;LeftRelease&gt;        &lt;RightRelease&gt;
:noremap        &lt;RightMouse&gt;        &lt;LeftMouse&gt;
:noremap        &lt;RightDrag&gt;        &lt;LeftDrag&gt;
:noremap        &lt;RightRelease&gt;        &lt;LeftRelease&gt;
:noremap        g&lt;LeftMouse&gt;        &lt;C-RightMouse&gt;
:noremap        g&lt;RightMouse&gt;        &lt;C-LeftMouse&gt;
:noremap!        &lt;LeftMouse&gt;        &lt;RightMouse&gt;
:noremap!        &lt;LeftDrag&gt;        &lt;RightDrag&gt;
:noremap!        &lt;LeftRelease&gt;        &lt;RightRelease&gt;
:noremap!        &lt;RightMouse&gt;        &lt;LeftMouse&gt;
:noremap!        &lt;RightDrag&gt;        &lt;LeftDrag&gt;
:noremap!        &lt;RightRelease&gt;        &lt;LeftRelease&gt;</pre></div>

  
  