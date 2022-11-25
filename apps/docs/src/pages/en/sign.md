---
title:  Sign
layout: ../../layouts/MainLayout.astro
---

  <a name="sign.txt"></a><a name="sign-support"></a><h1> Sign</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/sign.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">					  and Bram Moolenaar</div>
<div class="old-help-para">Sign Support Features</div>
<div class="old-help-para"><h2 class="help-heading">1. Introduction<span class="help-heading-tags">					<a name="sign-intro"></a><span class="help-tag">sign-intro</span> <a name="signs"></a><span class="help-tag">signs</span></span></h2></div>
<div class="old-help-para">When a debugger or other IDE tool is driving an editor it needs to be able
to give specific highlights which quickly tell the user useful information
about the file.  One example of this would be a debugger which had an icon
in the left-hand column denoting a breakpoint.  Another example might be an
arrow representing the Program Counter (PC).  The sign features allow both
placement of a sign, or icon, in the left-hand side of the window and
definition of a highlight which will be applied to that line.  Displaying the
sign as an image is most likely only feasible in gvim (although Sun
Microsystem's dtterm does support this it's the only terminal emulator I know
of which does).  A text sign and the highlight should be feasible in any color
terminal emulator.</div>
<div class="old-help-para">Signs and highlights are not useful just for debuggers.  There are plugins
that use signs to mark build errors or display version control status.</div>
<div class="old-help-para">There are two steps in using signs:</div>
<div class="old-help-para">1. Define the sign.  This specifies the image, text and highlighting.  For
   example, you can define a "break" sign with an image of a stop roadsign and
   text "!!".</div>
<div class="old-help-para">2. Place the sign.  This specifies the file and line number where the sign is
   displayed.  A defined sign can be placed several times in different lines
   and files.</div>
<div class="old-help-para">							<a name="sign-column"></a><code class="help-tag-right">sign-column</code>
When signs are defined for a file, Vim will automatically add a column of two
characters to display them in.  When the last sign is unplaced the column
disappears again.  This behavior can be changed with the <a href="options.html#'signcolumn'">'signcolumn'</a> option.</div>
<div class="old-help-para">The color of the column is set with the SignColumn highlight group
<a href="syntax.html#hl-SignColumn">hl-SignColumn</a>.  Example to set the color:<pre>:highlight SignColumn guibg=darkgrey</pre></div>
<div class="old-help-para">If <a href="options.html#'cursorline'">'cursorline'</a> is enabled, then the CursorLineSign highlight group is used
<a href="syntax.html#hl-CursorLineSign">hl-CursorLineSign</a>.
							<a name="sign-identifier"></a><code class="help-tag-right">sign-identifier</code>
Each placed sign is identified by a number called the sign identifier. This
identifier is used to jump to the sign or to remove the sign. The identifier
is assigned when placing the sign using the <a href="sign.html#%3Asign-place">:sign-place</a> command or the
<a href="sign.html#sign_place()">sign_place()</a> function. Each sign identifier should be a unique number. If
multiple placed signs use the same identifier, then jumping to or removing a
sign becomes unpredictable. To avoid overlapping identifiers, sign groups can
be used. The <a href="sign.html#sign_place()">sign_place()</a> function can be called with a zero sign identifier
to allocate the next available identifier.</div>
<div class="old-help-para">							<a name="sign-group"></a><code class="help-tag-right">sign-group</code>
Each placed sign can be assigned to either the global group or a named group.
When placing a sign, if a group name is not supplied, or an empty string is
used, then the sign is placed in the global group. Otherwise the sign is
placed in the named group. The sign identifier is unique within a group. The
sign group allows Vim plugins to use unique signs without interfering with
other plugins using signs.</div>
<div class="old-help-para">							<a name="sign-priority"></a><code class="help-tag-right">sign-priority</code>
Each placed sign is assigned a priority value. When multiple signs are placed
on the same line, the attributes of the sign with the highest priority is used
independently of the sign group. The default priority for a sign is 10. The
priority is assigned at the time of placing a sign.</div>
<div class="old-help-para">When two signs with the same priority are present, and one has an icon or text
in the signcolumn while the other has line highlighting, then both are
displayed.</div>
<div class="old-help-para">When the line on which the sign is placed is deleted, the sign is moved to the
next line (or the last line of the buffer, if there is no next line).  When
the delete is undone the sign does not move back.</div>
<div class="old-help-para"><h2 class="help-heading">2. Commands<span class="help-heading-tags">					<a name="sign-commands"></a><span class="help-tag">sign-commands</span> <a name="%3Asig"></a><span class="help-tag">:sig</span> <a name="%3Asign"></a><span class="help-tag">:sign</span></span></h2></div>
<div class="old-help-para">Here is an example that places a sign "piet", displayed with the text "&gt;&gt;", in
line 23 of the current file:<pre>:sign define piet text=&gt;&gt; texthl=Search
:exe ":sign place 2 line=23 name=piet file=" .. expand("%:p")</pre>
And here is the command to delete it again:<pre>:sign unplace 2</pre>
Note that the ":sign" command cannot be followed by another command or a
comment.  If you do need that, use the <a href="eval.html#%3Aexecute">:execute</a> command.</div>
<div class="old-help-para">DEFINING A SIGN.			<a name="%3Asign-define"></a><code class="help-tag-right">:sign-define</code> <a name="E255"></a><code class="help-tag">E255</code> <a name="E160"></a><code class="help-tag">E160</code> <a name="E612"></a><code class="help-tag">E612</code></div>
<div class="old-help-para">See <a href="sign.html#sign_define()">sign_define()</a> for the equivalent Vim script function.</div>
<div class="old-help-para">:sign define <code>{name}</code> <code>{argument}</code>...
		Define a new sign or set attributes for an existing sign.
		The <code>{name}</code> can either be a number (all digits) or a name
		starting with a non-digit.  Leading zeros are ignored, thus
		"0012", "012" and "12" are considered the same name.
		About 120 different signs can be defined.</div>
<div class="old-help-para">		Accepted arguments:</div>
<div class="old-help-para">	icon={bitmap}
		Define the file name where the bitmap can be found.  Should be
		a full path.  The bitmap should fit in the place of two
		characters.  This is not checked.  If the bitmap is too big it
		will cause redraw problems.
<div class="help-column_heading">			toolkit		supports</div>			Win32		.bmp, .ico, .cur</div>
<div class="old-help-para">	linehl={group}
		Highlighting group used for the whole line the sign is placed
		in.  Most useful is defining a background color.</div>
<div class="old-help-para">	numhl={group}
		Highlighting group used for the line number on the line where
		the sign is placed.  Overrides <a href="syntax.html#hl-LineNr">hl-LineNr</a>, <a href="syntax.html#hl-LineNrAbove">hl-LineNrAbove</a>,
		<a href="syntax.html#hl-LineNrBelow">hl-LineNrBelow</a>, and <a href="syntax.html#hl-CursorLineNr">hl-CursorLineNr</a>.</div>
<div class="old-help-para">	text={text}						<a name="E239"></a><code class="help-tag-right">E239</code>
		Define the text that is displayed when there is no icon or the
		GUI is not being used.  Only printable characters are allowed
		and they must occupy one or two display cells.</div>
<div class="old-help-para">	texthl={group}
		Highlighting group used for the text item.</div>
<div class="old-help-para">	culhl={group}
		Highlighting group used for the text item when the cursor is
		on the same line as the sign and <a href="options.html#'cursorline'">'cursorline'</a> is enabled.</div>
<div class="old-help-para">	Example:<pre>:sign define MySign text=&gt;&gt; texthl=Search linehl=DiffText</pre></div>
<div class="old-help-para">DELETING A SIGN						<a name="%3Asign-undefine"></a><code class="help-tag-right">:sign-undefine</code> <a name="E155"></a><code class="help-tag">E155</code></div>
<div class="old-help-para">See <a href="sign.html#sign_undefine()">sign_undefine()</a> for the equivalent Vim script function.</div>
<div class="old-help-para">:sign undefine <code>{name}</code>
		Deletes a previously defined sign.  If signs with this <code>{name}</code>
		are still placed this will cause trouble.</div>
<div class="old-help-para">		Example:<pre>:sign undefine MySign</pre></div>
<div class="old-help-para"><h3 class="help-heading">LISTING SIGNS<span class="help-heading-tags">						<a name="%3Asign-list"></a><span class="help-tag">:sign-list</span> <a name="E156"></a><span class="help-tag">E156</span></span></h3></div>
<div class="old-help-para">See <a href="sign.html#sign_getdefined()">sign_getdefined()</a> for the equivalent Vim script function.</div>
<div class="old-help-para">:sign list	Lists all defined signs and their attributes.</div>
<div class="old-help-para">:sign list <code>{name}</code>
		Lists one defined sign and its attributes.</div>
<div class="old-help-para"><h3 class="help-heading">PLACING SIGNS<span class="help-heading-tags">						<a name="%3Asign-place"></a><span class="help-tag">:sign-place</span> <a name="E158"></a><span class="help-tag">E158</span></span></h3></div>
<div class="old-help-para">See <a href="sign.html#sign_place()">sign_place()</a> for the equivalent Vim script function.</div>
<div class="old-help-para">:sign place <code>{id}</code> line={lnum} name={name} file={fname}
		Place sign defined as <code>{name}</code> at line <code>{lnum}</code> in file <code>{fname}</code>.
							<a name="%3Asign-fname"></a><code class="help-tag-right">:sign-fname</code>
		The file <code>{fname}</code> must already be loaded in a buffer.  The
		exact file name must be used, wildcards, $ENV and ~ are not
		expanded, white space must not be escaped.  Trailing white
		space is ignored.</div>
<div class="old-help-para">		The sign is remembered under <code>{id}</code>, this can be used for
		further manipulation.  <code>{id}</code> must be a number.
		It's up to the user to make sure the <code>{id}</code> is used only once in
		each file (if it's used several times unplacing will also have
		to be done several times and making changes may not work as
		expected).</div>
<div class="old-help-para">		The following optional sign attributes can be specified before
		"file=":
			group={group}	Place sign in sign group <code>{group}</code>
			priority={prio}	Assign priority <code>{prio}</code> to sign</div>
<div class="old-help-para">		By default, the sign is placed in the global sign group.</div>
<div class="old-help-para">		By default, the sign is assigned a default priority of 10. To
		assign a different priority value, use "priority={prio}" to
		specify a value.  The priority is used to determine the sign
		that is displayed when multiple signs are placed on the same
		line.</div>
<div class="old-help-para">		Examples:<pre>:sign place 5 line=3 name=sign1 file=a.py
:sign place 6 group=g2 line=2 name=sign2 file=x.py
:sign place 9 group=g2 priority=50 line=5
                                \ name=sign1 file=a.py</pre></div>
<div class="old-help-para">:sign place <code>{id}</code> line={lnum} name={name} [buffer={nr}]
		Same, but use buffer <code>{nr}</code>.  If the buffer argument is not
		given, place the sign in the current buffer.</div>
<div class="old-help-para">		Example:<pre>:sign place 10 line=99 name=sign3
:sign place 10 line=99 name=sign3 buffer=3</pre></div>
<div class="old-help-para">							<a name="E885"></a><code class="help-tag-right">E885</code>
:sign place <code>{id}</code> name={name} file={fname}
		Change the placed sign <code>{id}</code> in file <code>{fname}</code> to use the defined
		sign <code>{name}</code>.  See remark above about <code>{fname}</code> <a href="sign.html#%3Asign-fname">:sign-fname</a>.
		This can be used to change the displayed sign without moving
		it (e.g., when the debugger has stopped at a breakpoint).</div>
<div class="old-help-para">		The optional "group={group}" attribute can be used before
		"file=" to select a sign in a particular group.  The optional
		"priority={prio}" attribute can be used to change the priority
		of an existing sign.</div>
<div class="old-help-para">		Example:<pre>:sign place 23 name=sign1 file=/path/to/edit.py</pre></div>
<div class="old-help-para">:sign place <code>{id}</code> name={name} [buffer={nr}]
		Same, but use buffer <code>{nr}</code>.  If the buffer argument is not
		given, use the current buffer.</div>
<div class="old-help-para">		Example:<pre>:sign place 23 name=sign1
:sign place 23 name=sign1 buffer=7</pre></div>
<div class="old-help-para"><h3 class="help-heading">REMOVING SIGNS<span class="help-heading-tags">						<a name="%3Asign-unplace"></a><span class="help-tag">:sign-unplace</span> <a name="E159"></a><span class="help-tag">E159</span></span></h3></div>
<div class="old-help-para">See <a href="sign.html#sign_unplace()">sign_unplace()</a> for the equivalent Vim script function.</div>
<div class="old-help-para">:sign unplace <code>{id}</code> file={fname}
		Remove the previously placed sign <code>{id}</code> from file <code>{fname}</code>.
		See remark above about <code>{fname}</code> <a href="sign.html#%3Asign-fname">:sign-fname</a>.</div>
<div class="old-help-para">:sign unplace <code>{id}</code> group={group} file={fname}
		Same but remove the sign <code>{id}</code> in sign group <code>{group}</code>.</div>
<div class="old-help-para">:sign unplace <code>{id}</code> group=* file={fname}
		Same but remove the sign <code>{id}</code> from all the sign groups.</div>
<div class="old-help-para">:sign unplace * file={fname}
		Remove all placed signs in file <code>{fname}</code>.</div>
<div class="old-help-para">:sign unplace * group={group} file={fname}
		Remove all placed signs in group <code>{group}</code> from file <code>{fname}</code>.</div>
<div class="old-help-para">:sign unplace * group=* file={fname}
		Remove all placed signs in all the groups from file <code>{fname}</code>.</div>
<div class="old-help-para">:sign unplace <code>{id}</code> buffer={nr}
		Remove the previously placed sign <code>{id}</code> from buffer <code>{nr}</code>.</div>
<div class="old-help-para">:sign unplace <code>{id}</code> group={group} buffer={nr}
		Remove the previously placed sign <code>{id}</code> in group <code>{group}</code> from
		buffer <code>{nr}</code>.</div>
<div class="old-help-para">:sign unplace <code>{id}</code> group=* buffer={nr}
		Remove the previously placed sign <code>{id}</code> in all the groups from
		buffer <code>{nr}</code>.</div>
<div class="old-help-para">:sign unplace * buffer={nr}
		Remove all placed signs in buffer <code>{nr}</code>.</div>
<div class="old-help-para">:sign unplace * group={group} buffer={nr}
		Remove all placed signs in group <code>{group}</code> from buffer <code>{nr}</code>.</div>
<div class="old-help-para">:sign unplace * group=* buffer={nr}
		Remove all placed signs in all the groups from buffer <code>{nr}</code>.</div>
<div class="old-help-para">:sign unplace <code>{id}</code>
		Remove the previously placed sign <code>{id}</code> from all files it
		appears in.</div>
<div class="old-help-para">:sign unplace <code>{id}</code> group={group}
		Remove the previously placed sign <code>{id}</code> in group <code>{group}</code> from
		all files it appears in.</div>
<div class="old-help-para">:sign unplace <code>{id}</code> group=*
		Remove the previously placed sign <code>{id}</code> in all the groups from
		all the files it appears in.</div>
<div class="old-help-para">:sign unplace *		Remove all placed signs in the global group from all the files.</div>
<div class="old-help-para">:sign unplace * group={group}
		Remove all placed signs in group <code>{group}</code> from all the files.</div>
<div class="old-help-para">:sign unplace * group=*
		Remove all placed signs in all the groups from all the files.</div>
<div class="old-help-para">:sign unplace
		Remove a placed sign at the cursor position. If multiple signs
		are placed in the line, then only one is removed.</div>
<div class="old-help-para">:sign unplace group={group}
		Remove a placed sign in group <code>{group}</code> at the cursor
		position.</div>
<div class="old-help-para">:sign unplace group=*
		Remove a placed sign in any group at the cursor position.</div>
<div class="old-help-para"><h3 class="help-heading">LISTING PLACED SIGNS<span class="help-heading-tags">					<a name="%3Asign-place-list"></a><span class="help-tag">:sign-place-list</span></span></h3></div>
<div class="old-help-para">See <a href="sign.html#sign_getplaced()">sign_getplaced()</a> for the equivalent Vim script function.</div>
<div class="old-help-para">:sign place file={fname}
		List signs placed in file <code>{fname}</code>.
		See remark above about <code>{fname}</code> <a href="sign.html#%3Asign-fname">:sign-fname</a>.</div>
<div class="old-help-para">:sign place group={group} file={fname}
		List signs in group <code>{group}</code> placed in file <code>{fname}</code>.</div>
<div class="old-help-para">:sign place group=* file={fname}
		List signs in all the groups placed in file <code>{fname}</code>.</div>
<div class="old-help-para">:sign place buffer={nr}
		List signs placed in buffer <code>{nr}</code>.</div>
<div class="old-help-para">:sign place group={group} buffer={nr}
		List signs in group <code>{group}</code> placed in buffer <code>{nr}</code>.</div>
<div class="old-help-para">:sign place group=* buffer={nr}
		List signs in all the groups placed in buffer <code>{nr}</code>.</div>
<div class="old-help-para">:sign place group={group}
		List placed signs in all sign groups in all the files.</div>
<div class="old-help-para">:sign place group=*
		List placed signs in all sign groups in all files.</div>
<div class="old-help-para">JUMPING TO A SIGN					<a name="%3Asign-jump"></a><code class="help-tag-right">:sign-jump</code> <a name="E157"></a><code class="help-tag">E157</code></div>
<div class="old-help-para">See <a href="sign.html#sign_jump()">sign_jump()</a> for the equivalent Vim script function.</div>
<div class="old-help-para">:sign jump <code>{id}</code> file={fname}
		Open the file <code>{fname}</code> or jump to the window that contains
		<code>{fname}</code> and position the cursor at sign <code>{id}</code>.
		See remark above about <code>{fname}</code> <a href="sign.html#%3Asign-fname">:sign-fname</a>.
		If the file isn't displayed in window and the current file can
		not be <a href="editing.html#abandon">abandon</a>ed this fails.</div>
<div class="old-help-para">:sign jump <code>{id}</code> group={group} file={fname}
		Same but jump to the sign in group <code>{group}</code></div>
<div class="old-help-para">:sign jump <code>{id}</code> [buffer={nr}]					<a name="E934"></a><code class="help-tag-right">E934</code>
		Same, but use buffer <code>{nr}</code>.  This fails if buffer <code>{nr}</code> does not
		have a name. If the buffer argument is not given, use the
		current buffer.</div>
<div class="old-help-para">:sign jump <code>{id}</code> group={group} [buffer={nr}]
		Same but jump to the sign in group <code>{group}</code></div>
<div class="old-help-para"><h2 class="help-heading">3. Functions<span class="help-heading-tags">					<a name="sign-functions-details"></a><span class="help-tag">sign-functions-details</span></span></h2></div>
<div class="old-help-para">sign_define(<code>{name}</code> [, <code>{dict}</code>])				<a name="sign_define()"></a><code class="help-tag-right">sign_define()</code>
sign_define(<code>{list}</code>)
		Define a new sign named <code>{name}</code> or modify the attributes of an
		existing sign.  This is similar to the <a href="sign.html#%3Asign-define">:sign-define</a> command.</div>
<div class="old-help-para">		Prefix <code>{name}</code> with a unique text to avoid name collisions.
		There is no <code>{group}</code> like with placing signs.</div>
<div class="old-help-para">		The <code>{name}</code> can be a String or a Number.  The optional <code>{dict}</code>
		argument specifies the sign attributes.  The following values
		are supported:
		   icon		full path to the bitmap file for the sign.
		   linehl	highlight group used for the whole line the
				sign is placed in.
		   text		text that is displayed when there is no icon
				or the GUI is not being used.
		   texthl	highlight group used for the text item
		   culhl	highlight group used for the text item when
				the cursor is on the same line as the sign and
				<a href="options.html#'cursorline'">'cursorline'</a> is enabled.
		   numhl	highlight group used for <a href="options.html#'number'">'number'</a> column at the
				associated line. Overrides <a href="syntax.html#hl-LineNr">hl-LineNr</a>,
				<a href="syntax.html#hl-CursorLineNr">hl-CursorLineNr</a>.</div>
<div class="old-help-para">		If the sign named <code>{name}</code> already exists, then the attributes
		of the sign are updated.</div>
<div class="old-help-para">		The one argument <code>{list}</code> can be used to define a list of signs.
		Each list item is a dictionary with the above items in <code>{dict}</code>
		and a "name" item for the sign name.</div>
<div class="old-help-para">		Returns 0 on success and -1 on failure.  When the one argument
		<code>{list}</code> is used, then returns a List of values one for each
		defined sign.</div>
<div class="old-help-para">		Examples:<pre>call sign_define("mySign", {
        \ "text" : "=&gt;",
        \ "texthl" : "Error",
        \ "linehl" : "Search"})
call sign_define([
        \ {'name' : 'sign1',
        \  'text' : '=&gt;'},
        \ {'name' : 'sign2',
        \  'text' : '!!'}
        \ ])</pre></div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetSignList()-&gt;sign_define()</pre>
sign_getdefined([{name}])				<a name="sign_getdefined()"></a><code class="help-tag-right">sign_getdefined()</code>
		Get a list of defined signs and their attributes.
		This is similar to the <a href="sign.html#%3Asign-list">:sign-list</a> command.</div>
<div class="old-help-para">		If the <code>{name}</code> is not supplied, then a list of all the defined
		signs is returned. Otherwise the attribute of the specified
		sign is returned.</div>
<div class="old-help-para">		Each list item in the returned value is a dictionary with the
		following entries:
		   icon		full path to the bitmap file of the sign
		   linehl	highlight group used for the whole line the
				sign is placed in; not present if not set.
		   name		name of the sign
		   text		text that is displayed when there is no icon
				or the GUI is not being used.
		   texthl	highlight group used for the text item; not
				present if not set.
		   culhl	highlight group used for the text item when
				the cursor is on the same line as the sign and
				<a href="options.html#'cursorline'">'cursorline'</a> is enabled; not present if not
				set.
		   numhl	highlight group used for <a href="options.html#'number'">'number'</a> column at the
				associated line. Overrides <a href="syntax.html#hl-LineNr">hl-LineNr</a>,
				<a href="syntax.html#hl-CursorLineNr">hl-CursorLineNr</a>; not present if not set.</div>
<div class="old-help-para">		Returns an empty List if there are no signs and when <code>{name}</code> is
		not found.</div>
<div class="old-help-para">		Examples:<pre>" Get a list of all the defined signs
echo sign_getdefined()

" Get the attribute of the sign named mySign
echo sign_getdefined("mySign")</pre></div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetSignList()-&gt;sign_getdefined()</pre>
sign_getplaced([{buf} [, <code>{dict}</code>]])			<a name="sign_getplaced()"></a><code class="help-tag-right">sign_getplaced()</code>
		Return a list of signs placed in a buffer or all the buffers.
		This is similar to the <a href="sign.html#%3Asign-place-list">:sign-place-list</a> command.</div>
<div class="old-help-para">		If the optional buffer name <code>{buf}</code> is specified, then only the
		list of signs placed in that buffer is returned.  For the use
		of <code>{buf}</code>, see <a href="builtin.html#bufname()">bufname()</a>. The optional <code>{dict}</code> can contain
		the following entries:
		   group	select only signs in this group
		   id		select sign with this identifier
		   lnum		select signs placed in this line. For the use
				of <code>{lnum}</code>, see <a href="builtin.html#line()">line()</a>.
		If <code>{group}</code> is '', then signs in all the groups including the
		global group are returned. If <code>{group}</code> is not supplied or is an
		empty string, then only signs in the global group are
		returned.  If no arguments are supplied, then signs in the
		global group placed in all the buffers are returned.
		See <a href="sign.html#sign-group">sign-group</a>.</div>
<div class="old-help-para">		Each list item in the returned value is a dictionary with the
		following entries:
			bufnr	number of the buffer with the sign
			signs	list of signs placed in <code>{bufnr}</code>. Each list
				item is a dictionary with the below listed
				entries</div>
<div class="old-help-para">		The dictionary for each sign contains the following entries:
			group	 sign group. Set to '' for the global group.
			id	 identifier of the sign
			lnum	 line number where the sign is placed
			name	 name of the defined sign
			priority sign priority</div>
<div class="old-help-para">		The returned signs in a buffer are ordered by their line
		number and priority.</div>
<div class="old-help-para">		Returns an empty list on failure or if there are no placed
		signs.</div>
<div class="old-help-para">		Examples:<pre>" Get a List of signs placed in eval.c in the
" global group
echo sign_getplaced("eval.c")

" Get a List of signs in group 'g1' placed in eval.c
echo sign_getplaced("eval.c", {'group' : 'g1'})

" Get a List of signs placed at line 10 in eval.c
echo sign_getplaced("eval.c", {'lnum' : 10})

" Get sign with identifier 10 placed in a.py
echo sign_getplaced("a.py", {'id' : 10})

" Get sign with id 20 in group 'g1' placed in a.py
echo sign_getplaced("a.py", {'group' : 'g1',
                                \  'id' : 20})

" Get a List of all the placed signs
echo sign_getplaced()</pre></div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetBufname()-&gt;sign_getplaced()</pre></div>
<div class="old-help-para">							<a name="sign_jump()"></a><code class="help-tag-right">sign_jump()</code>
sign_jump(<code>{id}</code>, <code>{group}</code>, <code>{buf}</code>)
		Open the buffer <code>{buf}</code> or jump to the window that contains
		<code>{buf}</code> and position the cursor at sign <code>{id}</code> in group <code>{group}</code>.
		This is similar to the <a href="sign.html#%3Asign-jump">:sign-jump</a> command.</div>
<div class="old-help-para">		For the use of <code>{buf}</code>, see <a href="builtin.html#bufname()">bufname()</a>.</div>
<div class="old-help-para">		Returns the line number of the sign. Returns -1 if the
		arguments are invalid.</div>
<div class="old-help-para">		Example:<pre>" Jump to sign 10 in the current buffer
call sign_jump(10, '', '')</pre></div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetSignid()-&gt;sign_jump()</pre></div>
<div class="old-help-para">							<a name="sign_place()"></a><code class="help-tag-right">sign_place()</code>
sign_place(<code>{id}</code>, <code>{group}</code>, <code>{name}</code>, <code>{buf}</code> [, <code>{dict}</code>])
		Place the sign defined as <code>{name}</code> at line <code>{lnum}</code> in file or
		buffer <code>{buf}</code> and assign <code>{id}</code> and <code>{group}</code> to sign.  This is
		similar to the <a href="sign.html#%3Asign-place">:sign-place</a> command.</div>
<div class="old-help-para">		If the sign identifier <code>{id}</code> is zero, then a new identifier is
		allocated.  Otherwise the specified number is used. <code>{group}</code> is
		the sign group name. To use the global sign group, use an
		empty string.  <code>{group}</code> functions as a namespace for <code>{id}</code>, thus
		two groups can use the same IDs. Refer to <a href="sign.html#sign-identifier">sign-identifier</a>
		and <a href="sign.html#sign-group">sign-group</a> for more information.</div>
<div class="old-help-para">		<code>{name}</code> refers to a defined sign.
		<code>{buf}</code> refers to a buffer name or number. For the accepted
		values, see <a href="builtin.html#bufname()">bufname()</a>.</div>
<div class="old-help-para">		The optional <code>{dict}</code> argument supports the following entries:
			lnum		line number in the file or buffer
					<code>{buf}</code> where the sign is to be placed.
					For the accepted values, see <a href="builtin.html#line()">line()</a>.
			priority	priority of the sign. See
					<a href="sign.html#sign-priority">sign-priority</a> for more information.</div>
<div class="old-help-para">		If the optional <code>{dict}</code> is not specified, then it modifies the
		placed sign <code>{id}</code> in group <code>{group}</code> to use the defined sign
		<code>{name}</code>.</div>
<div class="old-help-para">		Returns the sign identifier on success and -1 on failure.</div>
<div class="old-help-para">		Examples:<pre>" Place a sign named sign1 with id 5 at line 20 in
" buffer json.c
call sign_place(5, '', 'sign1', 'json.c',
                                \ {'lnum' : 20})

" Updates sign 5 in buffer json.c to use sign2
call sign_place(5, '', 'sign2', 'json.c')

" Place a sign named sign3 at line 30 in
" buffer json.c with a new identifier
let id = sign_place(0, '', 'sign3', 'json.c',
                                \ {'lnum' : 30})

" Place a sign named sign4 with id 10 in group 'g3'
" at line 40 in buffer json.c with priority 90
call sign_place(10, 'g3', 'sign4', 'json.c',
                \ {'lnum' : 40, 'priority' : 90})</pre></div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetSignid()-&gt;sign_place(group, name, expr)</pre></div>
<div class="old-help-para">							<a name="sign_placelist()"></a><code class="help-tag-right">sign_placelist()</code>
sign_placelist(<code>{list}</code>)
		Place one or more signs.  This is similar to the
		<a href="sign.html#sign_place()">sign_place()</a> function.  The <code>{list}</code> argument specifies the
		List of signs to place. Each list item is a dict with the
		following sign attributes:
		    buffer	buffer name or number. For the accepted
				values, see <a href="builtin.html#bufname()">bufname()</a>.
		    group	sign group. <code>{group}</code> functions as a namespace
				for <code>{id}</code>, thus two groups can use the same
				IDs. If not specified or set to an empty
				string, then the global group is used.   See
				<a href="sign.html#sign-group">sign-group</a> for more information.
		    id		sign identifier. If not specified or zero,
				then a new unique identifier is allocated.
				Otherwise the specified number is used. See
				<a href="sign.html#sign-identifier">sign-identifier</a> for more information.
		    lnum	line number in the buffer <code>{buf}</code> where the
				sign is to be placed. For the accepted values,
				see <a href="builtin.html#line()">line()</a>.
		    name	name of the sign to place. See <a href="sign.html#sign_define()">sign_define()</a>
		    		for more information.
		    priority	priority of the sign. When multiple signs are
				placed on a line, the sign with the highest
				priority is used. If not specified, the
				default value of 10 is used. See
				<a href="sign.html#sign-priority">sign-priority</a> for more information.</div>
<div class="old-help-para">		If <code>{id}</code> refers to an existing sign, then the existing sign is
		modified to use the specified <code>{name}</code> and/or <code>{priority}</code>.</div>
<div class="old-help-para">		Returns a List of sign identifiers. If failed to place a
		sign, the corresponding list item is set to -1.</div>
<div class="old-help-para">		Examples:<pre>" Place sign s1 with id 5 at line 20 and id 10 at line
" 30 in buffer a.c
let [n1, n2] = sign_placelist([
        \ {'id' : 5,
        \  'name' : 's1',
        \  'buffer' : 'a.c',
        \  'lnum' : 20},
        \ {'id' : 10,
        \  'name' : 's1',
        \  'buffer' : 'a.c',
        \  'lnum' : 30}
        \ ])

" Place sign s1 in buffer a.c at line 40 and 50
" with auto-generated identifiers
let [n1, n2] = sign_placelist([
        \ {'name' : 's1',
        \  'buffer' : 'a.c',
        \  'lnum' : 40},
        \ {'name' : 's1',
        \  'buffer' : 'a.c',
        \  'lnum' : 50}
        \ ])</pre></div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetSignlist()-&gt;sign_placelist()</pre>
sign_undefine([{name}])					<a name="sign_undefine()"></a><code class="help-tag-right">sign_undefine()</code>
sign_undefine(<code>{list}</code>)
		Deletes a previously defined sign <code>{name}</code>. This is similar to
		the <a href="sign.html#%3Asign-undefine">:sign-undefine</a> command. If <code>{name}</code> is not supplied, then
		deletes all the defined signs.</div>
<div class="old-help-para">		The one argument <code>{list}</code> can be used to undefine a list of
		signs. Each list item is the name of a sign.</div>
<div class="old-help-para">		Returns 0 on success and -1 on failure.  For the one argument
		<code>{list}</code> call, returns a list of values one for each undefined
		sign.</div>
<div class="old-help-para">		Examples:<pre>" Delete a sign named mySign
call sign_undefine("mySign")

" Delete signs 'sign1' and 'sign2'
call sign_undefine(["sign1", "sign2"])

" Delete all the signs
call sign_undefine()</pre></div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetSignlist()-&gt;sign_undefine()</pre>
sign_unplace(<code>{group}</code> [, <code>{dict}</code>])			<a name="sign_unplace()"></a><code class="help-tag-right">sign_unplace()</code>
		Remove a previously placed sign in one or more buffers.  This
		is similar to the <a href="sign.html#%3Asign-unplace">:sign-unplace</a> command.</div>
<div class="old-help-para">		<code>{group}</code> is the sign group name. To use the global sign group,
		use an empty string.  If <code>{group}</code> is set to '', then all the
		groups including the global group are used.
		The signs in <code>{group}</code> are selected based on the entries in
		<code>{dict}</code>.  The following optional entries in <code>{dict}</code> are
		supported:
			buffer	buffer name or number. See <a href="builtin.html#bufname()">bufname()</a>.
			id	sign identifier
		If <code>{dict}</code> is not supplied, then all the signs in <code>{group}</code> are
		removed.</div>
<div class="old-help-para">		Returns 0 on success and -1 on failure.</div>
<div class="old-help-para">		Examples:<pre>" Remove sign 10 from buffer a.vim
call sign_unplace('', {'buffer' : "a.vim", 'id' : 10})

" Remove sign 20 in group 'g1' from buffer 3
call sign_unplace('g1', {'buffer' : 3, 'id' : 20})

" Remove all the signs in group 'g2' from buffer 10
call sign_unplace('g2', {'buffer' : 10})

" Remove sign 30 in group 'g3' from all the buffers
call sign_unplace('g3', {'id' : 30})

" Remove all the signs placed in buffer 5
call sign_unplace('*', {'buffer' : 5})

" Remove the signs in group 'g4' from all the buffers
call sign_unplace('g4')

" Remove sign 40 from all the buffers
call sign_unplace('*', {'id' : 40})

" Remove all the placed signs from all the buffers
call sign_unplace('*')</pre></div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetSigngroup()-&gt;sign_unplace()</pre></div>
<div class="old-help-para">sign_unplacelist(<code>{list}</code>)				<a name="sign_unplacelist()"></a><code class="help-tag-right">sign_unplacelist()</code>
		Remove previously placed signs from one or more buffers.  This
		is similar to the <a href="sign.html#sign_unplace()">sign_unplace()</a> function.</div>
<div class="old-help-para">		The <code>{list}</code> argument specifies the List of signs to remove.
		Each list item is a dict with the following sign attributes:
		    buffer	buffer name or number. For the accepted
				values, see <a href="builtin.html#bufname()">bufname()</a>. If not specified,
				then the specified sign is removed from all
				the buffers.
		    group	sign group name. If not specified or set to an
				empty string, then the global sign group is
				used. If set to '', then all the groups
				including the global group are used.
		    id		sign identifier. If not specified, then all
				the signs in the specified group are removed.</div>
<div class="old-help-para">		Returns a List where an entry is set to 0 if the corresponding
		sign was successfully removed or -1 on failure.</div>
<div class="old-help-para">		Example:<pre>" Remove sign with id 10 from buffer a.vim and sign
" with id 20 from buffer b.vim
call sign_unplacelist([
        \ {'id' : 10, 'buffer' : "a.vim"},
        \ {'id' : 20, 'buffer' : 'b.vim'},
        \ ])</pre></div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetSignlist()-&gt;sign_unplacelist()</pre></div>

  
  