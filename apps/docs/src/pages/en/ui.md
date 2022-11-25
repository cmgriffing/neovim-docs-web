---
title:  Ui
layout: ../../layouts/MainLayout.astro
---

  <a name="ui.txt"></a><a name="UI"></a><h1> Ui</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/ui.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="help-para">
Nvim UI protocol <a name="ui"></a><code class="help-tag">ui</code>

</div>
<div class="help-para">
<h2 class="help-heading">UI Events<span class="help-heading-tags">						<a name="ui-events"></a><span class="help-tag">ui-events</span></span></h2>


</div>
<div class="help-para">
UIs can be implemented as external client processes communicating with Nvim
over the RPC API. The default UI model is a terminal-like grid with a single,
monospace font. The UI can opt-in to have windows drawn on separate grids, and
have some elements ("widgets") presented by the UI itself rather than by Nvim
("externalized").

</div>
<div class="help-para">
							<a name="ui-option"></a><code class="help-tag-right">ui-option</code>
Call <a href="api.html#nvim_ui_attach()">nvim_ui_attach()</a> to tell Nvim that your program wants to draw the Nvim
screen grid with a size of width × height cells. This is typically done by an
embedder at startup (see <a href="ui.html#ui-startup">ui-startup</a>), but UIs can also connect to a running
Nvim instance and invoke nvim_ui_attach(). The <code>options</code> parameter is a map
with these (optional) keys:

</div>
<div class="help-para">
							<a name="ui-rgb"></a><code class="help-tag-right">ui-rgb</code>
<div class="help-li" style=""> <code>rgb</code>			Decides the color format.
</div><div class="help-li" style="margin-left: 3rem;"> true:	(default) 24-bit RGB colors
</div><div class="help-li" style="margin-left: 3rem;"> false:	Terminal colors (8-bit, max 256)
</div>
</div>
<div class="help-para">
							<a name="ui-override"></a><code class="help-tag-right">ui-override</code>
<div class="help-li" style=""> <code>override</code>		Decides how UI capabilities are resolved.
</div><div class="help-li" style="margin-left: 3rem;"> true:	Enable requested UI capabilities, even if not
			  supported by all connected UIs (including <a href="term.html#TUI">TUI</a>).
</div><div class="help-li" style="margin-left: 3rem;"> false: (default) Disable UI capabilities not
			  supported by all connected UIs (including TUI).
</div>
</div>
<div class="help-para">
							<a name="ui-ext-options"></a><code class="help-tag-right">ui-ext-options</code>
<div class="help-li" style=""> <code>ext_cmdline</code>		Externalize the cmdline. <a href="ui.html#ui-cmdline">ui-cmdline</a>
</div><div class="help-li" style=""> <code>ext_hlstate</code>		Detailed highlight state. <a href="ui.html#ui-hlstate">ui-hlstate</a>
			Sets <code>ext_linegrid</code> implicitly.
</div><div class="help-li" style=""> <code>ext_linegrid</code>	Line-based grid events. <a href="ui.html#ui-linegrid">ui-linegrid</a>
			Deactivates <a href="ui.html#ui-grid-old">ui-grid-old</a> implicitly.
</div><div class="help-li" style=""> <code>ext_messages</code>	Externalize messages. <a href="ui.html#ui-messages">ui-messages</a>
			Sets <code>ext_linegrid</code> and <code>ext_cmdline</code> implicitly.
</div><div class="help-li" style=""> <code>ext_multigrid</code>	Per-window grid events. <a href="ui.html#ui-multigrid">ui-multigrid</a>
			Sets <code>ext_linegrid</code> implicitly.
</div><div class="help-li" style=""> <code>ext_popupmenu</code>	Externalize <a href="insert.html#popupmenu-completion">popupmenu-completion</a> and
			<a href="options.html#'wildmenu'">'wildmenu'</a>. <a href="ui.html#ui-popupmenu">ui-popupmenu</a>
</div><div class="help-li" style=""> <code>ext_tabline</code>		Externalize the tabline. <a href="ui.html#ui-tabline">ui-tabline</a>
</div><div class="help-li" style=""> <code>ext_termcolors</code>	Use external default colors.
</div><div class="help-li" style=""> <code>term_name</code>		Sets the name of the terminal <a href="vim_diff.html#'term'">'term'</a>.
</div><div class="help-li" style=""> <code>term_colors</code>		Sets the number of supported colors 't_Co'.
</div><div class="help-li" style=""> <code>term_background</code>	Sets the default value of <a href="options.html#'background'">'background'</a>.
</div><div class="help-li" style=""> <code>stdin_fd</code>		Read buffer from <code>fd</code> as if it was a stdin pipe
			This option can only used by <a href="starting.html#--embed">--embed</a> ui,
			see <a href="ui.html#ui-startup-stdin">ui-startup-stdin</a>.
</div>
</div>
<div class="help-para">
Specifying an unknown option is an error; UIs can check the <a href="api.html#api-metadata">api-metadata</a>
<code>ui_options</code> key for supported options.

</div>
<div class="help-para">
By default Nvim requires all connected UIs to support the same capabilities,
thus the active capabilities are the intersection of those requested. UIs may
specify <a href="ui.html#ui-override">ui-override</a> to invert this behavior (useful for debugging). The
"option_set" event announces which capabilities are active.

</div>
<div class="help-para">
Nvim sends RPC notifications to all attached UIs, with method name "redraw"
and a single argument: an array (batch) of screen "update events". Each update
event is itself an array whose first element is the event name and remaining
elements are event-parameter tuples. Thus multiple events of the same kind can
be sent contiguously without repeating the event name.

</div>
<div class="help-para">
Example of a typical "redraw" batch in a single RPC notification:<pre>['notification', 'redraw',
  [
    ['grid_resize', [2, 77, 36]],
    ['grid_line',
      [2, 0, 0, [[' ' , 0, 77]]],
      [2, 1, 0, [['~', 7], [' ', 7, 76]]],
      [2, 9, 0, [['~', 7], [' ', 7, 76]]], 
      ...
      [2, 35, 0, [['~', 7], [' ', 7, 76]]],
      [1, 36, 0, [['[', 9], ['N'], ['o'], [' '], ['N'], ['a'], ['m'], ['e'], [']']]],
      [1, 36, 9, [[' ', 9, 50]]],
      [1, 36, 59, [['0', 9], [','], ['0'], ['-' ], ['1'], [' ', 9, 10], ['A'], ['l', 9, 2]]]
    ],
    ['msg_showmode', [[]]],
    ['win_pos', [2, 1000, 0, 0, 77, 36]],
    ['grid_cursor_goto', [2, 0, 0]],
    ['flush', []]
  ]
]</pre>
Events must be handled in-order. Nvim sends a "flush" event when it has
completed a redraw of the entire screen (so all windows have a consistent view
of buffer state, options, etc.). Multiple "redraw" batches may be sent before
the entire screen has been redrawn, with "flush" following only the last
batch. The user should only see the final state (when "flush" is sent), not
any intermediate state while processing part of the batch array, nor after
a batch not ending with "flush".

</div>
<div class="help-para">
By default, Nvim sends <a href="ui.html#ui-global">ui-global</a> and <a href="ui.html#ui-grid-old">ui-grid-old</a> events (for backwards
compatibility); these suffice to implement a terminal-like interface. However
the new <a href="ui.html#ui-linegrid">ui-linegrid</a> represents text more efficiently (especially highlighted
text), and allows UI capabilities requiring multiple grids. New UIs should
implement <a href="ui.html#ui-linegrid">ui-linegrid</a> instead of <a href="ui.html#ui-grid-old">ui-grid-old</a>.

</div>
<div class="help-para">
Nvim optionally sends various screen elements "semantically" as structured
events instead of raw grid-lines, as specified by <a href="ui.html#ui-ext-options">ui-ext-options</a>. The UI
must present such elements itself, Nvim will not draw them on the grid.

</div>
<div class="help-para">
Future versions of Nvim may add new update kinds and may append new parameters
to existing update kinds. Clients must be prepared to ignore such extensions,
for forward-compatibility. <a href="api.html#api-contract">api-contract</a>

</div>
<div class="help-para">
<h2 class="help-heading">UI startup<span class="help-heading-tags">							   <a name="ui-startup"></a><span class="help-tag">ui-startup</span></span></h2>


</div>
<div class="help-para">
UI embedders (clients that start Nvim with <a href="starting.html#--embed">--embed</a> and later call
<a href="api.html#nvim_ui_attach()">nvim_ui_attach()</a>) must start Nvim without <a href="starting.html#--headless">--headless</a>:<pre>nvim --embed</pre>
Nvim will pause before loading startup files and reading buffers, so the UI
has a chance to invoke requests and do early initialization. Startup will
continue as soon as the UI invokes <a href="api.html#nvim_ui_attach()">nvim_ui_attach()</a>.

</div>
<div class="help-para">
A simple UI only needs to do a single <a href="api.html#nvim_ui_attach()">nvim_ui_attach()</a> request and then
prepare to handle any UI event. A more featureful UI, which might need
additional configuration of the Nvim process, should use the following startup
procedure:

</div>
<div class="help-para">
1. Invoke <a href="api.html#nvim_get_api_info()">nvim_get_api_info()</a>, if needed to setup the client library and/or
   to get the list of supported UI extensions.

</div>
<div class="help-para">
2. Do any configuration that should be happen before user config is loaded.
   Buffers and windows are not available at this point, but this could be used
   to set <a href="eval.html#g%3A">g:</a> variables visible to init.vim

</div>
<div class="help-para">
3. If the UI wants to do additional setup after user config is loaded,
   register a VimEnter autocmd:<pre>nvim_command("autocmd VimEnter * call rpcrequest(1, 'vimenter')")</pre>
4. Now invoke <a href="api.html#nvim_ui_attach()">nvim_ui_attach()</a>. The UI must handle user input by now:
   sourcing init.vim and loading buffers might lead to blocking prompts.

</div>
<div class="help-para">
5. If step 3 was used, Nvim will send a blocking "vimenter" request to the UI.
   Inside this request handler, the UI can safely do any initialization before
   entering normal mode, for example reading variables set by init.vim.

</div>
<div class="help-para">
							   <a name="ui-startup-stdin"></a><code class="help-tag-right">ui-startup-stdin</code>
An UI can support the native read from stdin feature as invoked with
<code>command | nvim -</code> for the builtin TUI. <a href="starting.html#--">--</a>
The embedding process can detect that its stdin is open to a file which
not is a terminal, just like nvim does. It then needs to forward this fd
to Nvim. As fd=0 is already is used to send rpc data from the embedder to
Nvim, it needs to use some other file descriptor, like fd=3 or higher.

</div>
<div class="help-para">
Then, <code>stdin_fd</code> option should be passed to <code>nvim_ui_attach</code> and nvim will
implicitly read it as a buffer. This option can only be used when Nvim is
launched with <code>--embed</code> option, as described above.

</div>
<div class="help-para">
<h2 class="help-heading">Global Events<span class="help-heading-tags">							    <a name="ui-global"></a><span class="help-tag">ui-global</span></span></h2>


</div>
<div class="help-para">
The following UI events are always emitted, and describe global state of
the editor.

</div>
<div class="help-para">
<div class="help-column_heading">["set_title", title]</div>
<div class="help-column_heading">["set_icon", icon]</div>
	Set the window title, and icon (minimized) window title, respectively.
	In windowing systems not distinguishing between the two, "set_icon"
	can be ignored.

</div>
<div class="help-para">
<div class="help-column_heading">["mode_info_set", cursor_style_enabled, mode_info]</div>
	<code>cursor_style_enabled</code> is a boolean indicating if the UI should set
	the cursor style. <code>mode_info</code> is a list of mode property maps. The
	current mode is given by the <code>mode_idx</code> field of the <code>mode_change</code>
	event.

</div>
<div class="help-para">
	Each mode property map may contain these keys:

</div>
<div class="help-para">
<div class="help-column_heading">	KEY		DESCRIPTION</div>
	<code>cursor_shape</code>:	"block", "horizontal", "vertical"
	<code>cell_percentage</code>: Cell % occupied by the cursor.
	<code>blinkwait</code>, <code>blinkon</code>, <code>blinkoff</code>: See <a href="options.html#cursor-blinking">cursor-blinking</a>.
	<code>attr_id</code>:	Cursor attribute id (defined by <code>hl_attr_define</code>).
			When attr_id is 0, the background and foreground
			colors should be swapped.
	<code>attr_id_lm</code>:	Cursor attribute id for when <a href="options.html#'langmap'">'langmap'</a> is active.
	<code>short_name</code>:	Mode code name, see <a href="options.html#'guicursor'">'guicursor'</a>.
	<code>name</code>:		Mode descriptive name.
	<code>mouse_shape</code>:	(To be implemented.)

</div>
<div class="help-para">
	Some keys are missing in some modes.

</div>
<div class="help-para">
	The following keys are deprecated:

</div>
<div class="help-para">
	<code>hl_id</code>:	Use <code>attr_id</code> instead.
	<code>hl_lm</code>:	Use <code>attr_id_lm</code> instead.

</div>
<div class="help-para">
<div class="help-column_heading">["option_set", name, value]</div>
	UI-related option changed, where <code>name</code> is one of:

</div>
<div class="help-para">
<div class="help-li" style=""> <a href="options.html#'arabicshape'">'arabicshape'</a>
</div><div class="help-li" style=""> <a href="options.html#'ambiwidth'">'ambiwidth'</a>
</div><div class="help-li" style=""> <a href="options.html#'emoji'">'emoji'</a>
</div><div class="help-li" style=""> <a href="options.html#'guifont'">'guifont'</a>
</div><div class="help-li" style=""> <a href="options.html#'guifontwide'">'guifontwide'</a>
</div><div class="help-li" style=""> <a href="options.html#'linespace'">'linespace'</a>
</div><div class="help-li" style=""> <a href="options.html#'mousefocus'">'mousefocus'</a>
</div><div class="help-li" style=""> <a href="options.html#'mousemoveevent'">'mousemoveevent'</a>
</div><div class="help-li" style=""> <a href="options.html#'pumblend'">'pumblend'</a>
</div><div class="help-li" style=""> <a href="options.html#'showtabline'">'showtabline'</a>
</div><div class="help-li" style=""> <a href="options.html#'termguicolors'">'termguicolors'</a>
</div><div class="help-li" style=""> "ext_*" (all <a href="ui.html#ui-ext-options">ui-ext-options</a>)
</div>
</div>
<div class="help-para">
	Triggered when the UI first connects to Nvim, and whenever an option
	is changed by the user or a plugin.

</div>
<div class="help-para">
	Options are not represented here if their effects are communicated in
	other UI events. For example, instead of forwarding the <a href="options.html#'mouse'">'mouse'</a> option
	value, the "mouse_on" and "mouse_off" UI events directly indicate if
	mouse support is active. Some options like <a href="options.html#'ambiwidth'">'ambiwidth'</a> have already
	taken effect on the grid, where appropriate empty cells are added,
	however a UI might still use such options when rendering raw text
	sent from Nvim, like for <a href="ui.html#ui-cmdline">ui-cmdline</a>.

</div>
<div class="help-para">
<div class="help-column_heading">["mode_change", mode, mode_idx]</div>
	Editor mode changed.  The <code>mode</code> parameter is a string representing
	the current mode. <code>mode_idx</code> is an index into the array emitted in
	the <code>mode_info_set</code> event. UIs should change the cursor style
	according to the properties specified in the corresponding item. The
	set of modes reported will change in new versions of Nvim, for
	instance more submodes and temporary states might be represented as
	separate modes.

</div>
<div class="help-para">
<div class="help-column_heading">["mouse_on"]</div>
<div class="help-column_heading">["mouse_off"]</div>
	<a href="options.html#'mouse'">'mouse'</a> was enabled/disabled in the current editor mode. Useful for
	a terminal UI, or embedding into an application where Nvim mouse would
	conflict with other usages of the mouse. Other UI:s may ignore this event.

</div>
<div class="help-para">
<div class="help-column_heading">["busy_start"]</div>
<div class="help-column_heading">["busy_stop"]</div>
	Indicates to the UI that it must stop rendering the cursor. This event
	is misnamed and does not actually have anything to do with busyness.

</div>
<div class="help-para">
<div class="help-column_heading">["suspend"]</div>
	<a href="starting.html#%3Asuspend">:suspend</a> command or <a href="starting.html#CTRL-Z">CTRL-Z</a> mapping is used. A terminal client (or
	another client where it makes sense) could suspend itself.  Other
	clients can safely ignore it.

</div>
<div class="help-para">
<div class="help-column_heading">["update_menu"]</div>
	The menu mappings changed.

</div>
<div class="help-para">
<div class="help-column_heading">["bell"]</div>
<div class="help-column_heading">["visual_bell"]</div>
	Notify the user with an audible or visual bell, respectively.

</div>
<div class="help-para">
<div class="help-column_heading">["flush"]</div>
	Nvim is done redrawing the screen. For an implementation that renders
	to an internal buffer, this is the time to display the redrawn parts
	to the user.

</div>
<div class="help-para">
<h2 class="help-heading">Grid Events (line-based)<span class="help-heading-tags">					  <a name="ui-linegrid"></a><span class="help-tag">ui-linegrid</span></span></h2>


</div>
<div class="help-para">
Activated by the <code>ext_linegrid</code> <a href="ui.html#ui-option">ui-option</a>. Recommended for all new UIs.
Deactivates <a href="ui.html#ui-grid-old">ui-grid-old</a> implicitly.

</div>
<div class="help-para">
The biggest change compared to <a href="ui.html#ui-grid-old">ui-grid-old</a> is to use a single <code>grid_line</code>
event to update the contents of a screen line (whereas the old protocol used
a combination of cursor, highlight and text events)

</div>
<div class="help-para">
Most of these events take a <code>grid</code> index as first parameter.  Grid 1 is the
global grid used by default for the entire editor screen state. The
<code>ext_linegrid</code> capability by itself will never cause any additional grids to
be created; to enable per-window grids, activate <a href="ui.html#ui-multigrid">ui-multigrid</a>.

</div>
<div class="help-para">
Highlight attribute groups are predefined. UIs should maintain a table to map
numerical highlight ids to the actual attributes.

</div>
<div class="help-para">
<div class="help-column_heading">["grid_resize", grid, width, height]</div>
	Resize a <code>grid</code>. If <code>grid</code> wasn't seen by the client before, a new grid is
	being created with this size.

</div>
<div class="help-para">
<div class="help-column_heading">["default_colors_set", rgb_fg, rgb_bg, rgb_sp, cterm_fg, cterm_bg]</div>
	The first three arguments set the default foreground, background and
	special colors respectively. <code>cterm_fg</code> and <code>cterm_bg</code> specifies the
	default color codes to use in a 256-color terminal.

</div>
<div class="help-para">
	The RGB values will always be valid colors, by default. If no
	colors have been set, they will default to black and white, depending
	on <a href="options.html#'background'">'background'</a>. By setting the <code>ext_termcolors</code> option, instead
	-1 will be used for unset colors. This is mostly useful for a TUI
	implementation, where using the terminal builtin ("ANSI") defaults
	are expected.

</div>
<div class="help-para">
	Note: Unlike the corresponding <a href="ui.html#ui-grid-old">ui-grid-old</a> events, the screen is not
	always cleared after sending this event. The UI must repaint the
	screen with changed background color itself.

</div>
<div class="help-para">
							<a name="ui-event-hl_attr_define"></a><code class="help-tag-right">ui-event-hl_attr_define</code>
<div class="help-column_heading">["hl_attr_define", id, rgb_attr, cterm_attr, info]</div>
	Add a highlight with <code>id</code>  to the highlight table, with the
	attributes specified by the <code>rgb_attr</code> and <code>cterm_attr</code> dicts, with the
	following (all optional) keys.

</div>
<div class="help-para">
	<code>foreground</code>:		foreground color.
	<code>background</code>:		background color.
	<code>special</code>:		color to use for various underlines, when
				present.
	<code>reverse</code>:		reverse video. Foreground and background colors
				are switched.
	<code>italic</code>:		italic text.
	<code>bold</code>:			bold text.
	<code>strikethrough</code>:	struckthrough text.
	<code>underline</code>:		underlined text. The line has <code>special</code> color.
	<code>undercurl</code>:		undercurled text. The curl has <code>special</code> color.
	<code>underdouble</code>:		double underlined text. The lines have <code>special</code> color.
	<code>underdotted</code>:		underdotted text. The dots have <code>special</code> color.
	<code>underdashed</code>:		underdashed text. The dashes have <code>special</code> color.
	<code>blend</code>:		Blend level (0-100). Could be used by UIs to
				support blending floating windows to the
				background or to signal a transparent cursor.

</div>
<div class="help-para">
	For absent color keys the default color should be used. Don't store
	the default value in the table, rather a sentinel value, so that
	a changed default color will take effect.
	All boolean keys default to false, and will only be sent when they
	are true.

</div>
<div class="help-para">
	Highlights are always transmitted both for both the RGB format and as
	terminal 256-color codes, as the <code>rgb_attr</code> and <code>cterm_attr</code> parameters
	respectively. The <a href="ui.html#ui-rgb">ui-rgb</a> option has no effect effect anymore.
	Most external UIs will only need to store and use the <code>rgb_attr</code>
	attributes.

</div>
<div class="help-para">
	<code>id</code> 0 will always be used for the default highlight with colors defined
	by <code>default_colors_set</code> and no styles applied.

</div>
<div class="help-para">
	Note: Nvim may reuse <code>id</code> values if its internal highlight table is full.
	In that case Nvim will always issue redraws of screen cells that are
	affected by redefined ids, so UIs do not need to keep track of this
	themselves.

</div>
<div class="help-para">
	<code>info</code> is an empty array by default, and will be used by the
	<a href="ui.html#ui-hlstate">ui-hlstate</a> extension explained below.

</div>
<div class="help-para">
<div class="help-column_heading">["hl_group_set", name, hl_id]</div>
	The bulitin highlight group <code>name</code> was set to use the attributes <code>hl_id</code>
	defined by a previous <code>hl_attr_define</code> call. This event is not needed
	to render the grids which use attribute ids directly, but is useful
	for an UI who want to render its own elements with consistent
	highlighting. For instance an UI using <a href="ui.html#ui-popupmenu">ui-popupmenu</a> events, might
	use the <a href="syntax.html#hl-Pmenu">hl-Pmenu</a> family of builtin highlights.

</div>
<div class="help-para">
							    <a name="ui-event-grid_line"></a><code class="help-tag-right">ui-event-grid_line</code>
<div class="help-column_heading">["grid_line", grid, row, col_start, cells]</div>
	Redraw a continuous part of a <code>row</code> on a <code>grid</code>, starting at the column
	<code>col_start</code>. <code>cells</code> is an array of arrays each with 1 to 3 items:
	<code>[text(, hl_id, repeat)]</code> . <code>text</code> is the UTF-8 text that should be put in
	a cell, with the highlight <code>hl_id</code> defined by a previous <code>hl_attr_define</code>
	call.  If <code>hl_id</code> is not present the most recently seen <code>hl_id</code> in
	the same call should be used (it is always sent for the first
	cell in the event). If <code>repeat</code> is present, the cell should be
	repeated <code>repeat</code> times (including the first time), otherwise just
	once.

</div>
<div class="help-para">
	The right cell of a double-width char will be represented as the empty
	string. Double-width chars never use <code>repeat</code>.

</div>
<div class="help-para">
	If the array of cell changes doesn't reach to the end of the line, the
	rest should remain unchanged. A whitespace char, repeated
	enough to cover the remaining line, will be sent when the rest of the
	line should be cleared.

</div>
<div class="help-para">
<div class="help-column_heading">["grid_clear", grid]</div>
	Clear a <code>grid</code>.

</div>
<div class="help-para">
<div class="help-column_heading">["grid_destroy", grid]</div>
	<code>grid</code> will not be used anymore and the UI can free any data associated
	with it.

</div>
<div class="help-para">
<div class="help-column_heading">["grid_cursor_goto", grid, row, column]</div>
	Makes <code>grid</code> the current grid and <code>row, column</code> the cursor position on this
	grid.  This event will be sent at most once in a <code>redraw</code> batch and
	indicates the visible cursor position.

</div>
<div class="help-para">
<div class="help-column_heading">["grid_scroll", grid, top, bot, left, right, rows, cols]</div>
	Scroll a region of <code>grid</code>. This is semantically unrelated to editor
	<a href="scroll.html#scrolling">scrolling</a>, rather this is an optimized way to say "copy these screen
	cells".

</div>
<div class="help-para">
	The following diagrams show what happens per scroll direction.
	"===" represents the SR (scroll region) boundaries.
	"---" represents the moved rectangles.
	Note that dst and src share a common region.

</div>
<div class="help-para">
	If <code>rows</code> is bigger than 0, move a rectangle in the SR up, this can
	happen while scrolling down.
<pre>+-------------------------+
| (clipped above SR)      |            ^
|=========================| dst_top    |
| dst (still in SR)       |            |
+-------------------------+ src_top    |
| src (moved up) and dst  |            |
|-------------------------| dst_bot    |
| src (invalid)           |            |
+=========================+ src_bot</pre>

</div>
<div class="help-para">
	If <code>rows</code> is less than zero, move a rectangle in the SR down, this can
	happen while scrolling up.
<pre>+=========================+ src_top
| src (invalid)           |            |
|------------------------ | dst_top    |
| src (moved down) and dst|            |
+-------------------------+ src_bot    |
| dst (still in SR)       |            |
|=========================| dst_bot    |
| (clipped below SR)      |            v
+-------------------------+</pre>

</div>
<div class="help-para">
	<code>cols</code> is always zero in this version of Nvim, and reserved for future
	use.

</div>
<div class="help-para">
	Note when updating code from <a href="ui.html#ui-grid-old">ui-grid-old</a> events: ranges are
	end-exclusive, which is consistent with API conventions, but different
	from <code>set_scroll_region</code> which was end-inclusive.

</div>
<div class="help-para">
	The scrolled-in area will be filled using <a href="ui.html#ui-event-grid_line">ui-event-grid_line</a> directly
	after the scroll event. The UI thus doesn't need to clear this area as
	part of handling the scroll event.

</div>
<div class="help-para">
<h2 class="help-heading">Grid Events (cell-based)<span class="help-heading-tags">					   <a name="ui-grid-old"></a><span class="help-tag">ui-grid-old</span></span></h2>


</div>
<div class="help-para">
This is the legacy representation of the screen grid, emitted if <a href="ui.html#ui-linegrid">ui-linegrid</a>
is not active. New UIs should implement <a href="ui.html#ui-linegrid">ui-linegrid</a> instead.

</div>
<div class="help-para">
<div class="help-column_heading">["resize", width, height]</div>
	The grid is resized to <code>width</code> and <code>height</code> cells.

</div>
<div class="help-para">
<div class="help-column_heading">["clear"]</div>
	Clear the grid.

</div>
<div class="help-para">
<div class="help-column_heading">["eol_clear"]</div>
	Clear from the cursor position to the end of the current line.

</div>
<div class="help-para">
<div class="help-column_heading">["cursor_goto", row, col]</div>
	Move the cursor to position (row, col). Currently, the same cursor is
	used to define the position for text insertion and the visible cursor.
	However, only the last cursor position, after processing the entire
	array in the "redraw" event, is intended to be a visible cursor
	position.

</div>
<div class="help-para">
<div class="help-column_heading">["update_fg", color]</div>
<div class="help-column_heading">["update_bg", color]</div>
<div class="help-column_heading">["update_sp", color]</div>
	Set the default foreground, background and special colors
	respectively.

</div>
<div class="help-para">
							<a name="ui-event-highlight_set"></a><code class="help-tag-right">ui-event-highlight_set</code>
<div class="help-column_heading">["highlight_set", attrs]</div>
	Set the attributes that the next text put on the grid will have.
	<code>attrs</code> is a dict with the keys below. Any absent key is reset
	to its default value. Color defaults are set by the <code>update_fg</code> etc
	updates. All boolean keys default to false.

</div>
<div class="help-para">
	<code>foreground</code>:	foreground color.
	<code>background</code>:	background color.
	<code>special</code>:	color to use for various underlines, when present.
	<code>reverse</code>:	reverse video. Foreground and background colors are
			switched.
	<code>italic</code>:	italic text.
	<code>bold</code>:		bold text.
	<code>strikethrough</code>:  struckthrough text.
	<code>underline</code>:	underlined text. The line has <code>special</code> color.
	<code>undercurl</code>:	undercurled text. The curl has <code>special</code> color.
	<code>underdouble</code>:	double underlined text. The lines have <code>special</code> color.
	<code>underdotted</code>:	underdotted text. The dots have <code>special</code> color.
	<code>underdashed</code>:	underdashed text. The dashes have <code>special</code> color.

</div>
<div class="help-para">
<div class="help-column_heading">["put", text]</div>
	The (utf-8 encoded) string <code>text</code> is put at the cursor position
	(and the cursor is advanced), with the highlights as set by the
	last <code>highlight_set</code> update.

</div>
<div class="help-para">
<div class="help-column_heading">["set_scroll_region", top, bot, left, right]</div>
	Define the scroll region used by <code>scroll</code> below.

</div>
<div class="help-para">
	Note: ranges are end-inclusive, which is inconsistent with API
	conventions.

</div>
<div class="help-para">
<div class="help-column_heading">["scroll", count]</div>
	Scroll the text in the scroll region. The diagrams below illustrate
	what will happen, depending on the scroll direction. "=" is used to
	represent the SR(scroll region) boundaries and "-" the moved rectangles.
	Note that dst and src share a common region.

</div>
<div class="help-para">
	If count is bigger than 0, move a rectangle in the SR up, this can
	happen while scrolling down.
<pre>+-------------------------+
| (clipped above SR)      |            ^
|=========================| dst_top    |
| dst (still in SR)       |            |
+-------------------------+ src_top    |
| src (moved up) and dst  |            |
|-------------------------| dst_bot    |
| src (cleared)           |            |
+=========================+ src_bot</pre>

</div>
<div class="help-para">
	If count is less than zero, move a rectangle in the SR down, this can
	happen while scrolling up.
<pre>+=========================+ src_top
| src (cleared)           |            |
|------------------------ | dst_top    |
| src (moved down) and dst|            |
+-------------------------+ src_bot    |
| dst (still in SR)       |            |
|=========================| dst_bot    |
| (clipped below SR)      |            v
+-------------------------+</pre>

</div>
<div class="help-para">
<h2 class="help-heading">Detailed highlight state Extension<span class="help-heading-tags"> 				  <a name="ui-hlstate"></a><span class="help-tag">ui-hlstate</span></span></h2>


</div>
<div class="help-para">
Activated by the <code>ext_hlstate</code> <a href="ui.html#ui-option">ui-option</a>.
Activates <a href="ui.html#ui-linegrid">ui-linegrid</a> implicitly.

</div>
<div class="help-para">
By default Nvim will only describe grid cells using the final calculated
highlight attributes, as described by the dict keys in <a href="ui.html#ui-event-highlight_set">ui-event-highlight_set</a>.
The <code>ext_hlstate</code> extension allows to the UI to also receive a semantic
description of the highlights active in a cell. In this mode highlights will be
predefined in a table, see <a href="ui.html#ui-event-hl_attr_define">ui-event-hl_attr_define</a> and <a href="ui.html#ui-event-grid_line">ui-event-grid_line</a>.
The <code>info</code> parameter in <code>hl_attr_define</code> will contain a semantic description
of the highlights. As highlight groups can be combined, this will be an array
of items, with the item with highest priority last. Each item is a dictionary
with the following possible keys:

</div>
<div class="help-para">
    <code>kind</code>:	always present. One of the following values:
	"ui":       Builtin UI highlight. <a href="syntax.html#highlight-groups">highlight-groups</a>
	"syntax":   Highlight applied to a buffer by a syntax declaration or
	            other runtime/plugin functionality such as
		    <a href="api.html#nvim_buf_add_highlight()">nvim_buf_add_highlight()</a>
	"terminal": highlight from a process running in a <a href="nvim_terminal_emulator.html#terminal-emulator">terminal-emulator</a>.
		    Contains no further semantic information.
    <code>ui_name</code>:	Highlight name from <a href="syntax.html#highlight-groups">highlight-groups</a>. Only for "ui" kind.
    <code>hi_name</code>:	Name of the final <a href="syntax.html#%3Ahighlight">:highlight</a> group where the used
		attributes are defined.
    <code>id</code>:	Unique numeric id representing this item.

</div>
<div class="help-para">
Note: "ui" items will have both <code>ui_name</code> and <code>hi_name</code> present. These can
differ, because the builtin group was linked to another group <a href="syntax.html#%3Ahi-link">:hi-link</a> , or
because <a href="options.html#'winhighlight'">'winhighlight'</a> was used. UI items will be transmitted, even if the
highlight group is cleared, so <code>ui_name</code> can always be used to reliably identify
screen elements, even if no attributes have been applied.

</div>
<div class="help-para">
<h2 class="help-heading">Multigrid Events<span class="help-heading-tags"> 	  					 <a name="ui-multigrid"></a><span class="help-tag">ui-multigrid</span></span></h2>


</div>
<div class="help-para">
Activated by the <code>ext_multigrid</code> <a href="ui.html#ui-option">ui-option</a>.
Activates <a href="ui.html#ui-linegrid">ui-linegrid</a> implicitly.

</div>
<div class="help-para">
See <a href="ui.html#ui-linegrid">ui-linegrid</a> for grid events.
See <a href="api.html#nvim_ui_try_resize_grid()">nvim_ui_try_resize_grid()</a> to request changing the grid size.
See <a href="api.html#nvim_input_mouse()">nvim_input_mouse()</a> for sending mouse events to Nvim.

</div>
<div class="help-para">
The multigrid extension gives UIs more control over how windows are displayed:
<div class="help-li" style=""> UIs receive updates on a separate grid for each window.
</div><div class="help-li" style=""> UIs can set the grid size independently of how much space the window
  occupies on the global layout. So the UI could use a different font size
  per-window. Or reserve space around the border of the window for its own
  elements, such as scrollbars from the UI toolkit.
</div><div class="help-li" style=""> A dedicated grid is used for messages, which may scroll over the window
  area. (Alternatively <a href="ui.html#ui-messages">ui-messages</a> can be used).
</div>
</div>
<div class="help-para">
By default, the grid size is handled by Nvim and set to the outer grid size
(i.e. the size of the window frame in Nvim) whenever the split is created.
Once a UI sets a grid size, Nvim does not handle the size for that grid and
the UI must change the grid size whenever the outer size is changed. To
delegate grid-size handling back to Nvim, request the size (0, 0).

</div>
<div class="help-para">
A window can be hidden and redisplayed without its grid being deallocated.
This can happen multiple times for the same window, for instance when switching
tabs.

</div>
<div class="help-para">
<div class="help-column_heading">["win_pos", grid, win, start_row, start_col, width, height]</div>
	Set the position and size of the grid in Nvim (i.e. the outer grid
	size). If the window was previously hidden, it should now be shown
	again.

</div>
<div class="help-para">
<div class="help-column_heading">["win_float_pos", grid, win, anchor, anchor_grid, anchor_row, anchor_col, focusable]</div>
	Display or reconfigure floating window <code>win</code>. The window should be
	displayed above another grid <code>anchor_grid</code> at the specified position
	<code>anchor_row</code> and <code>anchor_col</code>. For the meaning of <code>anchor</code> and more
	details of positioning, see <a href="api.html#nvim_open_win()">nvim_open_win()</a>.

</div>
<div class="help-para">
<div class="help-column_heading">["win_external_pos", grid, win]</div>
	Display or reconfigure external window <code>win</code>. The window should be
	displayed as a separate top-level window in the desktop environment,
	or something similar.

</div>
<div class="help-para">
<div class="help-column_heading">["win_hide", grid]</div>
	Stop displaying the window. The window can be shown again later.

</div>
<div class="help-para">
<div class="help-column_heading">["win_close", grid]</div>
	Close the window.

</div>
<div class="help-para">
<div class="help-column_heading">["msg_set_pos", grid, row, scrolled, sep_char]</div>
	Display messages on <code>grid</code>.  The grid will be displayed at <code>row</code> on
	the default grid (grid=1), covering the full column width. <code>scrolled</code>
	indicates whether the message area has been scrolled to cover other
	grids. It can be useful to draw a separator then <a href="vim_diff.html#msgsep">msgsep</a>. The Builtin
	TUI draws a full line filled with <code>sep_char</code> (<a href="options.html#'fillchars'">'fillchars'</a> msgsep
	field) and <a href="syntax.html#hl-MsgSeparator">hl-MsgSeparator</a> highlight.

</div>
<div class="help-para">
	When <a href="ui.html#ui-messages">ui-messages</a> is active, no message grid is used, and this event
	will not be sent.

</div>
<div class="help-para">
<div class="help-column_heading">["win_viewport", grid, win, topline, botline, curline, curcol]</div>
	Indicates the range of buffer text displayed in the window, as well
	as the cursor position in the buffer. All positions are zero-based.
	<code>botline</code> is set to one more than the line count of the buffer, if
	there are filler lines past the end.

</div>
<div class="help-para">
<div class="help-column_heading">["win_extmark", grid, win, ns_id, mark_id, row, col]</div>
	Updates the position of an extmark which is currently visible in a
	window. Only emitted if the mark has the <code>ui_watched</code> attribute.

</div>
<div class="help-para">
<h2 class="help-heading">Popupmenu Events<span class="help-heading-tags">						 <a name="ui-popupmenu"></a><span class="help-tag">ui-popupmenu</span></span></h2>


</div>
<div class="help-para">
Activated by the <code>ext_popupmenu</code> <a href="ui.html#ui-option">ui-option</a>.

</div>
<div class="help-para">
This UI extension delegates presentation of the <a href="insert.html#popupmenu-completion">popupmenu-completion</a> and
command-line <a href="options.html#'wildmenu'">'wildmenu'</a>.

</div>
<div class="help-para">
<div class="help-column_heading">["popupmenu_show", items, selected, row, col, grid]</div>
	Show <a href="insert.html#popupmenu-completion">popupmenu-completion</a>. <code>items</code> is an array of completion items
	to show; each item is an array of the form [word, kind, menu, info] as
	defined at <a href="insert.html#complete-items">complete-items</a>, except that <code>word</code> is replaced by <code>abbr</code>
	if present.  <code>selected</code> is the initially-selected item, a zero-based
	index into the array of items (-1 if no item is selected). <code>row</code> and
	<code>col</code> give the anchor position, where the first character of the
	completed word will be. When <a href="ui.html#ui-multigrid">ui-multigrid</a> is used, <code>grid</code> is the
	grid for the anchor position. When <code>ext_cmdline</code> is active, <code>grid</code> is
	set to -1 to indicate the popupmenu should be anchored to the external
	cmdline. Then <code>col</code> will be a byte position in the cmdline text.

</div>
<div class="help-para">
<div class="help-column_heading">["popupmenu_select", selected]</div>
	Select an item in the current popupmenu. <code>selected</code> is a zero-based
	index into the array of items from the last popupmenu_show event, or
	-1 if no item is selected.

</div>
<div class="help-para">
<div class="help-column_heading">["popupmenu_hide"]</div>
	Hide the popupmenu.

</div>
<div class="help-para">
<h2 class="help-heading">Tabline Events<span class="help-heading-tags">							   <a name="ui-tabline"></a><span class="help-tag">ui-tabline</span></span></h2>


</div>
<div class="help-para">
Activated by the <code>ext_tabline</code> <a href="ui.html#ui-option">ui-option</a>.

</div>
<div class="help-para">
<div class="help-column_heading">["tabline_update", curtab, tabs, curbuf, buffers]</div>
	Tabline was updated. UIs should present this data in a custom tabline
	widget. Note: options <code>curbuf</code> + <code>buffers</code> were added in API7.
	curtab:   Current Tabpage
	tabs:     List of Dicts [{ "tab": Tabpage, "name": String }, ...]
	curbuf:   Current buffer handle.
	buffers:  List of Dicts [{ "buffer": buffer handle, "name": String}, ...]

</div>
<div class="help-para">
<h2 class="help-heading">Cmdline Events<span class="help-heading-tags">							   <a name="ui-cmdline"></a><span class="help-tag">ui-cmdline</span></span></h2>


</div>
<div class="help-para">
Activated by the <code>ext_cmdline</code> <a href="ui.html#ui-option">ui-option</a>.

</div>
<div class="help-para">
This UI extension delegates presentation of the <a href="cmdline.html#cmdline">cmdline</a> (except <a href="options.html#'wildmenu'">'wildmenu'</a>).
For command-line <a href="options.html#'wildmenu'">'wildmenu'</a> UI events, activate <a href="ui.html#ui-popupmenu">ui-popupmenu</a>.

</div>
<div class="help-para">
<div class="help-column_heading">["cmdline_show", content, pos, firstc, prompt, indent, level]</div>
        content: List of [attrs, string]
	         [[{}, "t"], [attrs, "est"], ...]

</div>
<div class="help-para">
	Triggered when the cmdline is displayed or changed.
	The <code>content</code> is the full content that should be displayed in the
	cmdline, and the <code>pos</code> is the position of the cursor that in the
	cmdline. The content is divided into chunks with different highlight
	attributes represented as a dict (see <a href="ui.html#ui-event-highlight_set">ui-event-highlight_set</a>).

</div>
<div class="help-para">
	<code>firstc</code> and <code>prompt</code> are text, that if non-empty should be
	displayed in front of the command line. <code>firstc</code> always indicates
	built-in command lines such as <code>:</code> (ex command) and <code>/</code> <code>?</code> (search),
	while <code>prompt</code> is an <a href="builtin.html#input()">input()</a> prompt. <code>indent</code> tells how many spaces
	the content should be indented.

</div>
<div class="help-para">
	The Nvim command line can be invoked recursively, for instance by
	typing <code>&lt;c-r&gt;=</code> at the command line prompt. The <code>level</code> field is used
	to distinguish different command lines active at the same time. The
	first invoked command line has level 1, the next recursively-invoked
	prompt has level 2. A command line invoked from the <a href="cmdline.html#cmdline-window">cmdline-window</a>
	has a higher level than than the edited command line.

</div>
<div class="help-para">
<div class="help-column_heading">["cmdline_pos", pos, level]</div>
	Change the cursor position in the cmdline.

</div>
<div class="help-para">
<div class="help-column_heading">["cmdline_special_char", c, shift, level]</div>
	Display a special char in the cmdline at the cursor position. This is
	typically used to indicate a pending state, e.g. after <a href="cmdline.html#c_CTRL-V">c_CTRL-V</a>. If
	<code>shift</code> is true the text after the cursor should be shifted, otherwise
	it should overwrite the char at the cursor.

</div>
<div class="help-para">
	Should be hidden at next cmdline_show.

</div>
<div class="help-para">
<div class="help-column_heading">["cmdline_hide"]</div>
	Hide the cmdline.

</div>
<div class="help-para">
<div class="help-column_heading">["cmdline_block_show", lines]</div>
	Show a block of context to the current command line. For example if
	the user defines a <a href="userfunc.html#%3Afunction">:function</a> interactively:<pre>:function Foo()
:  echo "foo"
:</pre>

</div>
<div class="help-para">
	<code>lines</code> is a list of lines of highlighted chunks, in the same form as
	the "cmdline_show" <code>contents</code> parameter.

</div>
<div class="help-para">
<div class="help-column_heading">["cmdline_block_append", line]</div>
	Append a line at the end of the currently shown block.

</div>
<div class="help-para">
<div class="help-column_heading">["cmdline_block_hide"]</div>
	Hide the block.

</div>
<div class="help-para">
<h2 class="help-heading">Message/Dialog Events<span class="help-heading-tags">					   <a name="ui-messages"></a><span class="help-tag">ui-messages</span></span></h2>


</div>
<div class="help-para">
Activated by the <code>ext_messages</code> <a href="ui.html#ui-option">ui-option</a>.
Activates <a href="ui.html#ui-linegrid">ui-linegrid</a> and <a href="ui.html#ui-cmdline">ui-cmdline</a> implicitly.

</div>
<div class="help-para">
This UI extension delegates presentation of messages and dialogs. Messages
that would otherwise render in the message/cmdline screen space, are emitted
as UI events.

</div>
<div class="help-para">
Nvim will not allocate screen space for the cmdline or messages, and
<a href="options.html#'cmdheight'">'cmdheight'</a> will be forced zero. Cmdline state is emitted as <a href="ui.html#ui-cmdline">ui-cmdline</a>
events, which the UI must handle.

</div>
<div class="help-para">
<div class="help-column_heading">["msg_show", kind, content, replace_last]</div>
	Display a message to the user.

</div>
<div class="help-para">
	kind
	    Name indicating the message kind:
		"" (empty)	Unknown (consider a feature-request: <a href="intro.html#bugs">bugs</a>)
		"confirm"	<a href="builtin.html#confirm()">confirm()</a> or <a href="editing.html#%3Aconfirm">:confirm</a> dialog
		"confirm_sub"	<a href="change.html#%3Asubstitute">:substitute</a> confirm dialog <a href="change.html#%3As_c">:s_c</a>
		"emsg"		Error (<a href="message.html#errors">errors</a>, internal error, <a href="eval.html#%3Athrow">:throw</a>, …)
		"echo"		<a href="eval.html#%3Aecho">:echo</a> message
		"echomsg"	<a href="eval.html#%3Aechomsg">:echomsg</a> message
		"echoerr"	<a href="eval.html#%3Aechoerr">:echoerr</a> message
		"lua_error"	Error in <a href="lua.html#%3Alua">:lua</a> code
		"rpc_error"	Error response from <a href="builtin.html#rpcrequest()">rpcrequest()</a>
		"return_prompt"	<a href="message.html#press-enter">press-enter</a> prompt after a multiple messages
		"quickfix"	Quickfix navigation message
		"search_count"	Search count message ("S" flag of <a href="options.html#'shortmess'">'shortmess'</a>)
		"wmsg"		Warning ("search hit BOTTOM", <a href="message.html#W10">W10</a>, …)
	    New kinds may be added in the future; clients should treat unknown
	    kinds as the empty kind.

</div>
<div class="help-para">
	content
	    Array of <code>[attr_id, text_chunk]</code> tuples, building up the message
	    text of chunks of different highlights. No extra spacing should be
	    added between chunks, the <code>text_chunk</code> by itself contains any
	    necessary whitespace. Messages can contain line breaks "\n".

</div>
<div class="help-para">
	replace_last
	    Decides how multiple messages should be displayed:
	    false: Display the message together with all previous messages
		   that are still visible.
	    true:  Replace the message in the most-recent <code>msg_show</code> call,
		   but any other visible message should still remain.

</div>
<div class="help-para">
<div class="help-column_heading">["msg_clear"]</div>
	Clear all messages currently displayed by "msg_show". (Messages sent
	by other "msg_" events below will not be affected).

</div>
<div class="help-para">
<div class="help-column_heading">["msg_showmode", content]</div>
	Shows <a href="options.html#'showmode'">'showmode'</a> and <a href="repeat.html#recording">recording</a> messages. <code>content</code> has the same
	format as in "msg_show". This event is sent with empty <code>content</code> to
	hide the last message.

</div>
<div class="help-para">
<div class="help-column_heading">["msg_showcmd", content]</div>
	Shows <a href="options.html#'showcmd'">'showcmd'</a> messages. <code>content</code> has the same format as in "msg_show".
	This event is sent with empty <code>content</code> to hide the last message.

</div>
<div class="help-para">
<div class="help-column_heading">["msg_ruler", content]</div>
	Used to display <a href="options.html#'ruler'">'ruler'</a> when there is no space for the ruler in a
	statusline. <code>content</code> has the same format as in "msg_show". This event is
	sent with empty <code>content</code> to hide the last message.

</div>
<div class="help-para">
<div class="help-column_heading">["msg_history_show", entries]</div>
	Sent when <a href="message.html#%3Amessages">:messages</a> command is invoked. History is sent as a list of
	entries, where each entry is a <code>[kind, content]</code> tuple.

</div>

  
  