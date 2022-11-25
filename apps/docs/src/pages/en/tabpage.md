---
title:  Tabpage
layout: ../../layouts/MainLayout.astro
---

  <a name="tabpage.txt"></a><a name="tab-page"></a><h1> Tabpage</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/tabpage.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Editing with windows in multiple tab pages. <a name="tabpage"></a><code class="help-tag">tabpage</code></div>
<div class="old-help-para">The commands which have been added to use multiple tab pages are explained
here.  Additionally, there are explanations for commands that work differently
when used in combination with more than one tab page.</div>
<div class="old-help-para"><h2 class="help-heading">1. Introduction<span class="help-heading-tags">						<a name="tab-page-intro"></a><span class="help-tag">tab-page-intro</span></span></h2></div>
<div class="old-help-para">A tab page holds one or more windows.  You can easily switch between tab
pages, so that you have several collections of windows to work on different
things.</div>
<div class="old-help-para">Usually you will see a list of labels at the top of the Vim window, one for
each tab page.  With the mouse you can click on the label to jump to that tab
page.  There are other ways to move between tab pages, see below.</div>
<div class="old-help-para">Most commands work only in the current tab page.  That includes the <a href="vimindex.html#CTRL-W">CTRL-W</a>
commands, <a href="windows.html#%3Awindo">:windo</a>, <a href="windows.html#%3Aall">:all</a> and <a href="windows.html#%3Aball">:ball</a> (when not using the <a href="tabpage.html#%3Atab">:tab</a> modifier).
The commands that are aware of other tab pages than the current one are
mentioned below.</div>
<div class="old-help-para">Tabs are also a nice way to edit a buffer temporarily without changing the
current window layout.  Open a new tab page, do whatever you want to do and
close the tab page.</div>
<div class="old-help-para"><h2 class="help-heading">2. Commands<span class="help-heading-tags">						<a name="tab-page-commands"></a><span class="help-tag">tab-page-commands</span></span></h2></div>
<div class="old-help-para">OPENING A NEW TAB PAGE:</div>
<div class="old-help-para">When starting Vim "vim -p filename ..." opens each file argument in a separate
tab page (up to <a href="options.html#'tabpagemax'">'tabpagemax'</a>).  See <a href="starting.html#-p">-p</a></div>
<div class="old-help-para">A double click with the mouse in the non-GUI tab pages line opens a new, empty
tab page.  It is placed left of the position of the click.  The first click
may select another tab page first, causing an extra screen update.</div>
<div class="old-help-para">This also works in a few GUI versions, esp. Win32.  But only when clicking
right of the labels.</div>
<div class="old-help-para">In the GUI tab pages line you can use the right mouse button to open menu.
<a href="tabpage.html#tabline-menu">tabline-menu</a>.</div>
<div class="old-help-para">For the related autocommands see <a href="tabpage.html#tabnew-autocmd">tabnew-autocmd</a>.</div>
<div class="old-help-para">:[count]tabe[dit]				<a name="%3Atabe"></a><code class="help-tag-right">:tabe</code> <a name="%3Atabedit"></a><code class="help-tag">:tabedit</code> <a name="%3Atabnew"></a><code class="help-tag">:tabnew</code>
:[count]tabnew
		Open a new tab page with an empty window, after the current
		tab page. If [count] is given the new tab page appears after
		the tabpage [count] otherwise the new tab page will appear
		after the current one.<pre>:tabnew     " opens tabpage after the current one
:.tabnew    " as above
:+tabnew    " opens tabpage after the next tab page
            " note: it is one further than :tabnew
:-tabnew    " opens tabpage before the current
:0tabnew    " opens tabpage before the first one
:$tabnew    " opens tabpage after the last one</pre>
:[count]tabe[dit] [++opt] [+cmd] <code>{file}</code>
:[count]tabnew [++opt] [+cmd] <code>{file}</code>
		Open a new tab page and edit <code>{file}</code>, like with <a href="editing.html#%3Aedit">:edit</a>.
		For [count] see <a href="tabpage.html#%3Atabnew">:tabnew</a> above.</div>
<div class="old-help-para">:[count]tabf[ind] [++opt] [+cmd] <code>{file}</code>			<a name="%3Atabf"></a><code class="help-tag-right">:tabf</code> <a name="%3Atabfind"></a><code class="help-tag">:tabfind</code>
		Open a new tab page and edit <code>{file}</code> in <a href="options.html#'path'">'path'</a>, like with
		<a href="editing.html#%3Afind">:find</a>.  For [count] see <a href="tabpage.html#%3Atabnew">:tabnew</a> above.</div>
<div class="old-help-para">:[count]tab <code>{cmd}</code>					<a name="%3Atab"></a><code class="help-tag-right">:tab</code>
		Execute <code>{cmd}</code> and when it opens a new window open a new tab
		page instead.  Doesn't work for <a href="diff.html#%3Adiffsplit">:diffsplit</a>, <a href="diff.html#%3Adiffpatch">:diffpatch</a>,
		<a href="eval.html#%3Aexecute">:execute</a> and <a href="various.html#%3Anormal">:normal</a>.
		If [count] is given the new tab page appears after the tab
		page [count] otherwise the new tab page will appear after the
		current one.
		Examples:<pre>:tab split            " opens current buffer in new tab page
:tab help gt    " opens tab page with help for "gt"
:.tab help gt   " as above
:+tab help            " opens tab page with help after the next
                " tab page
:-tab help            " opens tab page with help before the
                " current one
:0tab help            " opens tab page with help before the
                " first one
:$tab help            " opens tab page with help after the last
                " one</pre>
CTRL-W gf	Open a new tab page and edit the file name under the cursor.
		See <a href="windows.html#CTRL-W_gf">CTRL-W_gf</a>.</div>
<div class="old-help-para">CTRL-W gF	Open a new tab page and edit the file name under the cursor
		and jump to the line number following the file name.
		See <a href="windows.html#CTRL-W_gF">CTRL-W_gF</a>.</div>
<div class="old-help-para">CLOSING A TAB PAGE:</div>
<div class="old-help-para">Closing the last window of a tab page closes the tab page too, unless there is
only one tab page.</div>
<div class="old-help-para">Using the mouse: If the tab page line is displayed you can click in the "X" at
the top right to close the current tab page.  A custom <a href="options.html#'tabline'">'tabline'</a> may show
something else.</div>
<div class="old-help-para">							<a name="%3Atabc"></a><code class="help-tag-right">:tabc</code> <a name="%3Atabclose"></a><code class="help-tag">:tabclose</code>
:tabc[lose][!]	Close current tab page.
		This command fails when:
<div class="help-li" style=""> There is only one tab page on the screen.		<a name="E784"></a><code class="help-tag-right">E784</code>  
</div><div class="help-li" style=""> When <a href="options.html#'hidden'">'hidden'</a> is not set, [!] is not used, a buffer has
		  changes, and there is no other window on this buffer.
		Changes to the buffer are not written and won't get lost, so
		this is a "safe" command.<pre>:tabclose   " close the current tab page</pre>
:{count}tabc[lose][!]
:tabc[lose][!] <code>{count}</code>
		Close tab page <code>{count}</code>.  Fails in the same way as <code>:tabclose</code>
		above.<pre>:-tabclose            " close the previous tab page
:+tabclose            " close the next tab page
:1tabclose            " close the first tab page
:$tabclose            " close the last tab page
:tabclose -2    " close the 2nd previous tab page
:tabclose +            " close the next tab page
:tabclose 3            " close the third tab page
:tabclose $            " close the last tab page
:tabclose #     " close the last accessed tab page</pre>
When a tab is closed the next tab page will become the current one.
</div></div>
<div class="old-help-para">							<a name="%3Atabo"></a><code class="help-tag-right">:tabo</code> <a name="%3Atabonly"></a><code class="help-tag">:tabonly</code>
:tabo[nly][!]	Close all other tab pages.
		When the <a href="options.html#'hidden'">'hidden'</a> option is set, all buffers in closed windows
		become hidden.
		When <a href="options.html#'hidden'">'hidden'</a> is not set, and the <a href="options.html#'autowrite'">'autowrite'</a> option is set,
		modified buffers are written.  Otherwise, windows that have
		buffers that are modified are not removed, unless the [!] is
		given, then they become hidden.  But modified buffers are
		never abandoned, so changes cannot get lost.<pre>:tabonly " close all tab pages except the current one</pre>
:tabo[nly][!] <code>{count}</code>
		Close all tab pages except <code>{count}</code> one.<pre>:.tabonly            " as above
:-tabonly            " close all tab pages except the previous
                " one
:+tabonly            " close all tab pages except the next one
:1tabonly            " close all tab pages except the first one
:$tabonly            " close all tab pages except the last one
:tabonly -            " close all tab pages except the previous
                " one
:tabonly +2     " close all tab pages except the two next
                " one
:tabonly 1            " close all tab pages except the first one
:tabonly $            " close all tab pages except the last one
:tabonly #            " close all tab pages except the last
                " accessed one</pre>
SWITCHING TO ANOTHER TAB PAGE:</div>
<div class="old-help-para">Using the mouse: If the tab page line is displayed you can click in a tab page
label to switch to that tab page.  Click where there is no label to go to the
next tab page.  <a href="options.html#'tabline'">'tabline'</a></div>
<div class="old-help-para">:tabn[ext]				<a name="%3Atabn"></a><code class="help-tag-right">:tabn</code> <a name="%3Atabnext"></a><code class="help-tag">:tabnext</code> <a name="gt"></a><code class="help-tag">gt</code>
<code>&lt;C-PageDown&gt;</code>				<a name="CTRL-%3CPageDown%3E"></a><code class="help-tag-right">CTRL-&lt;PageDown&gt;</code> <a name="%3CC-PageDown%3E"></a><code class="help-tag">&lt;C-PageDown&gt;</code>
gt					<a name="i_CTRL-%3CPageDown%3E"></a><code class="help-tag-right">i_CTRL-&lt;PageDown&gt;</code> <a name="i_%3CC-PageDown%3E"></a><code class="help-tag">i_&lt;C-PageDown&gt;</code>
		Go to the next tab page.  Wraps around from the last to the
		first one.</div>
<div class="old-help-para">:{count}tabn[ext]
:tabn[ext] <code>{count}</code>
		Go to tab page <code>{count}</code>.  The first tab page has number one.<pre>:-tabnext        " go to the previous tab page
:+tabnext        " go to the next tab page
:+2tabnext        " go to the two next tab page
:1tabnext        " go to the first tab page
:$tabnext        " go to the last tab page
:tabnext $        " as above
:tabnext #  " go to the last accessed tab page
:tabnext -        " go to the previous tab page
:tabnext -1        " as above
:tabnext +        " go to the next tab page
:tabnext +1        " as above</pre>
<code>{count}</code><code>&lt;C-PageDown&gt;</code>
<code>{count}</code>gt	Go to tab page <code>{count}</code>.  The first tab page has number one.</div>
<div class="old-help-para">:tabp[revious]				<a name="%3Atabp"></a><code class="help-tag-right">:tabp</code> <a name="%3Atabprevious"></a><code class="help-tag">:tabprevious</code> <a name="gT"></a><code class="help-tag">gT</code> <a name="%3AtabN"></a><code class="help-tag">:tabN</code>
:tabN[ext]				<a name="%3AtabNext"></a><code class="help-tag-right">:tabNext</code> <a name="CTRL-%3CPageUp%3E"></a><code class="help-tag">CTRL-&lt;PageUp&gt;</code>
<code>&lt;C-PageUp&gt;</code>			 <a name="%3CC-PageUp%3E"></a><code class="help-tag-right">&lt;C-PageUp&gt;</code> <a name="i_CTRL-%3CPageUp%3E"></a><code class="help-tag">i_CTRL-&lt;PageUp&gt;</code> <a name="i_%3CC-PageUp%3E"></a><code class="help-tag">i_&lt;C-PageUp&gt;</code>
gT		Go to the previous tab page.  Wraps around from the first one
		to the last one.</div>
<div class="old-help-para">:tabp[revious] <code>{count}</code>
:tabN[ext] <code>{count}</code>
<code>{count}</code><code>&lt;C-PageUp&gt;</code>
<code>{count}</code>gT	Go <code>{count}</code> tab pages back.  Wraps around from the first one
		to the last one.  Note that the use of <code>{count}</code> is different
		from <a href="tabpage.html#%3Atabnext">:tabnext</a>, where it is used as the tab page number.</div>
<div class="old-help-para">:tabr[ewind]			<a name="%3Atabfir"></a><code class="help-tag-right">:tabfir</code> <a name="%3Atabfirst"></a><code class="help-tag">:tabfirst</code> <a name="%3Atabr"></a><code class="help-tag">:tabr</code> <a name="%3Atabrewind"></a><code class="help-tag">:tabrewind</code>
:tabfir[st]	Go to the first tab page.</div>
<div class="old-help-para">							<a name="%3Atabl"></a><code class="help-tag-right">:tabl</code> <a name="%3Atablast"></a><code class="help-tag">:tablast</code>
:tabl[ast]	Go to the last tab page.</div>
<div class="old-help-para"><code>&lt;C-Tab&gt;</code>						<a name="CTRL-%3CTab%3E"></a><code class="help-tag-right">CTRL-&lt;Tab&gt;</code> <a name="%3CC-Tab%3E"></a><code class="help-tag">&lt;C-Tab&gt;</code>
CTRL-W g&lt;Tab&gt;					<a name="g%3CTab%3E"></a><code class="help-tag-right">g&lt;Tab&gt;</code> <a name="CTRL-W_g%3CTab%3E"></a><code class="help-tag">CTRL-W_g&lt;Tab&gt;</code>
g&lt;Tab&gt;		Go to the last accessed tab page.</div>
<div class="old-help-para">Other commands:
							<a name="%3Atabs"></a><code class="help-tag-right">:tabs</code>
:tabs		List the tab pages and the windows they contain.
		Shows a "&gt;" for the current window.
		Shows a "+" for modified buffers.
		For example:
<div class="help-column_heading">			Tab page 1</div><div class="help-li" style=""> tabpage.txt ~
			    ex_docmd.c ~
			Tab page 2 ~
			&gt;   main.c ~
</div></div>
<div class="old-help-para">REORDERING TAB PAGES:</div>
<div class="old-help-para">:tabm[ove] [N]						<a name="%3Atabm"></a><code class="help-tag-right">:tabm</code> <a name="%3Atabmove"></a><code class="help-tag">:tabmove</code>
:[N]tabm[ove]
		Move the current tab page to after tab page N.  Use zero to
		make the current tab page the first one.  N is counted before
		the move, thus if the second tab is the current one,
		<code>:tabmove 1</code> and <code>:tabmove 2</code>  have no effect.
		Without N the tab page is made the last one.<pre>:.tabmove   " do nothing
:-tabmove   " move the tab page to the left
:+tabmove   " move the tab page to the right
:0tabmove   " move the tab page to the beginning  of the tab
            " list
:tabmove 0        " as above
:tabmove        " move the tab page to the last
:$tabmove        " as above
:tabmove $        " as above
:tabmove #  " move the tab page after the last accessed
            " tab page</pre>
:tabm[ove] +[N]
:tabm[ove] -[N]
		Move the current tab page N places to the right (with +) or to
		the left (with -).<pre>:tabmove -        " move the tab page to the left
:tabmove -1        " as above
:tabmove +        " move the tab page to the right
:tabmove +1        " as above</pre>
Note that although it is possible to move a tab behind the N-th one by using
:Ntabmove. And move it by N places by using :+Ntabmove. For clarification what
+N means in this context see <a href="cmdline.html#%5Brange%5D">[range]</a>.</div>
<div class="old-help-para">LOOPING OVER TAB PAGES:</div>
<div class="old-help-para">							<a name="%3Atabd"></a><code class="help-tag-right">:tabd</code> <a name="%3Atabdo"></a><code class="help-tag">:tabdo</code>
:[range]tabd[o] <code>{cmd}</code>
		Execute <code>{cmd}</code> in each tab page or, if [range] is given, only
		in tabpages which tab page number is in the [range]. It works
		like doing this:<pre>:tabfirst
:{cmd}
:tabnext
:{cmd}
etc.</pre></div>
<div class="old-help-para">		This only operates in the current window of each tab page.
		When an error is detected on one tab page, further tab pages
		will not be visited.
		The last tab page (or where an error occurred) becomes the
		current tab page.
		<code>{cmd}</code> can contain '|' to concatenate several commands.
		<code>{cmd}</code> must not open or close tab pages or reorder them.
		Also see <a href="windows.html#%3Awindo">:windo</a>, <a href="editing.html#%3Aargdo">:argdo</a>, <a href="windows.html#%3Abufdo">:bufdo</a>, <a href="quickfix.html#%3Acdo">:cdo</a>, <a href="quickfix.html#%3Aldo">:ldo</a>, <a href="quickfix.html#%3Acfdo">:cfdo</a>
		and <a href="quickfix.html#%3Alfdo">:lfdo</a>.</div>
<div class="old-help-para"><h2 class="help-heading">3. Other items<span class="help-heading-tags">						<a name="tab-page-other"></a><span class="help-tag">tab-page-other</span></span></h2></div>
<div class="old-help-para">							<a name="tabline-menu"></a><code class="help-tag-right">tabline-menu</code>
The GUI tab pages line has a popup menu.  It is accessed with a right click.
The entries are:
	Close		Close the tab page under the mouse pointer.  The
			current one if there is no label under the mouse
			pointer.
	New Tab		Open a tab page, editing an empty buffer.  It appears
			to the left of the mouse pointer.
	Open Tab...	Like "New Tab" and additionally use a file selector to
			select a file to edit.</div>
<div class="old-help-para">Diff mode works per tab page.  You can see the diffs between several files
within one tab page.  Other tab pages can show differences between other
files.</div>
<div class="old-help-para">Variables local to a tab page start with "t:". <a href="eval.html#tabpage-variable">tabpage-variable</a></div>
<div class="old-help-para">Currently there is only one option local to a tab page: <a href="options.html#'cmdheight'">'cmdheight'</a>.</div>
<div class="old-help-para">						<a name="tabnew-autocmd"></a><code class="help-tag-right">tabnew-autocmd</code>
The TabLeave and TabEnter autocommand events can be used to do something when
switching from one tab page to another.  The exact order depends on what you
are doing.  When creating a new tab page this works as if you create a new
window on the same buffer and then edit another buffer.  Thus ":tabnew"
triggers:
	WinLeave		leave current window
	TabLeave		leave current tab page
	WinEnter		enter window in new tab page
	TabEnter		enter new tab page
	BufLeave		leave current buffer
	BufEnter		enter new empty buffer</div>
<div class="old-help-para">When switching to another tab page the order is:
	BufLeave
	WinLeave
	TabLeave
	WinEnter
	TabEnter
	BufEnter</div>
<div class="old-help-para">When entering a new tab page (<a href="tabpage.html#%3Atabnew">:tabnew</a>), TabNew is triggered before TabEnter
and after WinEnter.</div>
<div class="old-help-para"><h2 class="help-heading">4. Setting <a href="options.html#'tabline'">'tabline'</a><span class="help-heading-tags">					<a name="setting-tabline"></a><span class="help-tag">setting-tabline</span></span></h2></div>
<div class="old-help-para">The <a href="options.html#'tabline'">'tabline'</a> option specifies what the line with tab pages labels looks like.
It is only used when there is no GUI tab line.</div>
<div class="old-help-para">You can use the <a href="options.html#'showtabline'">'showtabline'</a> option to specify when you want the line with
tab page labels to appear: never, when there is more than one tab page or
always.</div>
<div class="old-help-para">The highlighting of the tab pages line is set with the groups TabLine
TabLineSel and TabLineFill.  <a href="syntax.html#hl-TabLine">hl-TabLine</a> <a href="syntax.html#hl-TabLineSel">hl-TabLineSel</a> <a href="syntax.html#hl-TabLineFill">hl-TabLineFill</a></div>
<div class="old-help-para">A "+" will be shown for a tab page that has a modified window.  The number of
windows in a tabpage is also shown.  Thus "3+" means three windows and one of
them has a modified buffer.</div>
<div class="old-help-para">The <a href="options.html#'tabline'">'tabline'</a> option allows you to define your preferred way to tab pages
labels.  This isn't easy, thus an example will be given here.</div>
<div class="old-help-para">For basics see the <a href="options.html#'statusline'">'statusline'</a> option.  The same items can be used in the
<a href="options.html#'tabline'">'tabline'</a> option.  Additionally, the <a href="builtin.html#tabpagebuflist()">tabpagebuflist()</a>, <a href="builtin.html#tabpagenr()">tabpagenr()</a> and
<a href="builtin.html#tabpagewinnr()">tabpagewinnr()</a> functions are useful.</div>
<div class="old-help-para">Since the number of tab labels will vary, you need to use an expression for
the whole option.  Something like:<pre>:set tabline=%!MyTabLine()</pre>
Then define the MyTabLine() function to list all the tab pages labels.  A
convenient method is to split it in two parts:  First go over all the tab
pages and define labels for them.  Then get the label for each tab page.<pre>function MyTabLine()
  let s = ''
  for i in range(tabpagenr('$'))
    " select the highlighting
    if i + 1 == tabpagenr()
      let s ..= '%#TabLineSel#'
    else
      let s ..= '%#TabLine#'
    endif

    " set the tab page number (for mouse clicks)
    let s ..= '%' .. (i + 1) .. 'T'

    " the label is made by MyTabLabel()
    let s ..= ' %{MyTabLabel(' .. (i + 1) .. ')} '
  endfor

  " after the last tab fill with TabLineFill and reset tab page nr
  let s ..= '%#TabLineFill#%T'

  " right-align the label to close the current tab page
  if tabpagenr('$') &gt; 1
    let s ..= '%=%#TabLine#%999Xclose'
  endif

  return s
endfunction</pre>
Now the MyTabLabel() function is called for each tab page to get its label.<pre>function MyTabLabel(n)
  let buflist = tabpagebuflist(a:n)
  let winnr = tabpagewinnr(a:n)
  return bufname(buflist[winnr - 1])
endfunction</pre>
This is just a simplistic example that results in a tab pages line that
resembles the default, but without adding a + for a modified buffer or
truncating the names.  You will want to reduce the width of labels in a
clever way when there is not enough room.  Check the <a href="options.html#'columns'">'columns'</a> option for the
space available.</div>
<div class="old-help-para"><h2 class="help-heading">5. Setting <a href="options.html#'guitablabel'">'guitablabel'</a><span class="help-heading-tags">				<a name="setting-guitablabel"></a><span class="help-tag">setting-guitablabel</span></span></h2></div>
<div class="old-help-para">When the GUI tab pages line is displayed, <a href="options.html#'guitablabel'">'guitablabel'</a> can be used to
specify the label to display for each tab page.  Unlike <a href="options.html#'tabline'">'tabline'</a>, which
specifies the whole tab pages line at once, <a href="options.html#'guitablabel'">'guitablabel'</a> is used for each
label separately.</div>
<div class="old-help-para"><a href="options.html#'guitabtooltip'">'guitabtooltip'</a> is very similar and is used for the tooltip of the same label.
This only appears when the mouse pointer hovers over the label, thus it
usually is longer.  Only supported on some systems though.</div>
<div class="old-help-para">See the <a href="options.html#'statusline'">'statusline'</a> option for the format of the value.</div>
<div class="old-help-para">The "%N" item can be used for the current tab page number.  The <a href="eval.html#v%3Alnum">v:lnum</a>
variable is also set to this number when the option is evaluated.
The items that use a file name refer to the current window of the tab page.</div>
<div class="old-help-para">Note that syntax highlighting is not used for the option.  The %T and %X
items are also ignored.</div>
<div class="old-help-para">A simple example that puts the tab page number and the buffer name in the
label:<pre>:set guitablabel=%N\ %f</pre>
An example that resembles the default <a href="options.html#'guitablabel'">'guitablabel'</a>: Show the number of
windows in the tab page and a '+' if there is a modified buffer:<pre>function GuiTabLabel()
  let label = ''
  let bufnrlist = tabpagebuflist(v:lnum)

  " Add '+' if one of the buffers in the tab page is modified
  for bufnr in bufnrlist
    if getbufvar(bufnr, "&amp;modified")
      let label = '+'
      break
    endif
  endfor

  " Append the number of windows in the tab page if more than one
  let wincount = tabpagewinnr(v:lnum, '$')
  if wincount &gt; 1
    let label ..= wincount
  endif
  if label != ''
    let label ..= ' '
  endif

  " Append the buffer name
  return label .. bufname(bufnrlist[tabpagewinnr(v:lnum) - 1])
endfunction

set guitablabel=%{GuiTabLabel()}</pre>
Note that the function must be defined before setting the option, otherwise
you get an error message for the function not being known.</div>
<div class="old-help-para">If you want to fall back to the default label, return an empty string.</div>
<div class="old-help-para">If you want to show something specific for a tab page, you might want to use a
tab page local variable. <a href="eval.html#t%3Avar">t:var</a></div>

  
  