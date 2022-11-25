---
title:  Fold
layout: ../../layouts/MainLayout.astro
---

  <a name="fold.txt"></a><a name="Folding"></a><h1> Fold</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/fold.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Folding <a name="folding"></a><code class="help-tag">folding</code> <a name="folds"></a><code class="help-tag">folds</code></div>
<div class="old-help-para">You can find an introduction on folding in chapter 28 of the user manual.
<a href="usr_28.html#usr_28.txt">usr_28.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">1. Fold methods<span class="help-heading-tags">					<a name="fold-methods"></a><span class="help-tag">fold-methods</span></span></h2></div>
<div class="old-help-para">The folding method can be set with the <a href="options.html#'foldmethod'">'foldmethod'</a> option.</div>
<div class="old-help-para">When setting <a href="options.html#'foldmethod'">'foldmethod'</a> to a value other than "manual", all folds are
deleted and new ones created.  Switching to the "manual" method doesn't remove
the existing folds.  This can be used to first define the folds automatically
and then change them manually.</div>
<div class="old-help-para">There are six methods to select folds:
	manual		manually define folds
	indent		more indent means a higher fold level
	expr		specify an expression to define folds
	syntax		folds defined by syntax highlighting
	diff		folds for unchanged text
	marker		folds defined by markers in the text</div>
<div class="old-help-para"><h3 class="help-heading">MANUAL<span class="help-heading-tags">						<a name="fold-manual"></a><span class="help-tag">fold-manual</span></span></h3></div>
<div class="old-help-para">Use commands to manually define the fold regions.  This can also be used by a
script that parses text to find folds.</div>
<div class="old-help-para">The level of a fold is only defined by its nesting.  To increase the fold
level of a fold for a range of lines, define a fold inside it that has the
same lines.</div>
<div class="old-help-para">The manual folds are lost when you abandon the file.  To save the folds use
the <a href="starting.html#%3Amkview">:mkview</a> command.  The view can be restored later with <a href="starting.html#%3Aloadview">:loadview</a>.</div>
<div class="old-help-para"><h3 class="help-heading">INDENT<span class="help-heading-tags">						<a name="fold-indent"></a><span class="help-tag">fold-indent</span></span></h3></div>
<div class="old-help-para">The folds are automatically defined by the indent of the lines.</div>
<div class="old-help-para">The foldlevel is computed from the indent of the line, divided by the
<a href="options.html#'shiftwidth'">'shiftwidth'</a> (rounded down).  A sequence of lines with the same or higher fold
level form a fold, with the lines with a higher level forming a nested fold.</div>
<div class="old-help-para">The nesting of folds is limited with <a href="options.html#'foldnestmax'">'foldnestmax'</a>.</div>
<div class="old-help-para">Some lines are ignored and get the fold level of the line above or below it,
whichever is lower.  These are empty or white lines and lines starting
with a character in <a href="options.html#'foldignore'">'foldignore'</a>.  White space is skipped before checking for
characters in <a href="options.html#'foldignore'">'foldignore'</a>.  For C use "#" to ignore preprocessor lines.</div>
<div class="old-help-para">When you want to ignore lines in another way, use the "expr" method.  The
<a href="builtin.html#indent()">indent()</a> function can be used in <a href="options.html#'foldexpr'">'foldexpr'</a> to get the indent of a line.</div>
<div class="old-help-para"><h3 class="help-heading">EXPR<span class="help-heading-tags">						<a name="fold-expr"></a><span class="help-tag">fold-expr</span></span></h3></div>
<div class="old-help-para">The folds are automatically defined by their foldlevel, like with the "indent"
method.  The value of the <a href="options.html#'foldexpr'">'foldexpr'</a> option is evaluated to get the foldlevel
of a line.  Examples:
This will create a fold for all consecutive lines that start with a tab:<pre>:set foldexpr=getline(v:lnum)[0]==\"\\t\"</pre>
This will call a function to compute the fold level:<pre>:set foldexpr=MyFoldLevel(v:lnum)</pre>
This will make a fold out of paragraphs separated by blank lines:<pre>:set foldexpr=getline(v:lnum)=~'^\\s*$'&amp;&amp;getline(v:lnum+1)=~'\\S'?'&lt;1':1</pre>
This does the same:<pre>:set foldexpr=getline(v:lnum-1)=~'^\\s*$'&amp;&amp;getline(v:lnum)=~'\\S'?'&gt;1':1</pre>
Note that backslashes must be used to escape characters that ":set" handles
differently (space, backslash, double quote, etc., see <a href="options.html#option-backslash">option-backslash</a>).</div>
<div class="old-help-para">These are the conditions with which the expression is evaluated:
<div class="help-li" style=""> The current buffer and window are set for the line.
</div><div class="help-li" style=""> The variable "v:lnum" is set to the line number.
</div><div class="help-li" style=""> The result is used for the fold level in this way:
  value			meaning ~
  0			the line is not in a fold
  1, 2, ..		the line is in a fold with this level
  -1			the fold level is undefined, use the fold level of a
			line before or after this line, whichever is the
			lowest.
  "="			use fold level from the previous line
  "a1", "a2", ..	add one, two, .. to the fold level of the previous
			line, use the result for the current line
  "s1", "s2", ..	subtract one, two, .. from the fold level of the
			previous line, use the result for the next line
  "&lt;1", "&lt;2", ..	a fold with this level ends at this line
  "&gt;1", "&gt;2", ..	a fold with this level starts at this line
</div></div>
<div class="old-help-para">It is not required to mark the start (end) of a fold with "&gt;1" ("&lt;1"), a fold
will also start (end) when the fold level is higher (lower) than the fold
level of the previous line.</div>
<div class="old-help-para">There must be no side effects from the expression.  The text in the buffer,
cursor position, the search patterns, options etc. must not be changed.
You can change and restore them if you are careful.</div>
<div class="old-help-para">If there is some error in the expression, or the resulting value isn't
recognized, there is no error message and the fold level will be zero.
For debugging the <a href="options.html#'debug'">'debug'</a> option can be set to "msg", the error messages will
be visible then.</div>
<div class="old-help-para">Note: Since the expression has to be evaluated for every line, this fold
method can be very slow!</div>
<div class="old-help-para">Try to avoid the "=", "a" and "s" return values, since Vim often has to search
backwards for a line for which the fold level is defined.  This can be slow.</div>
<div class="old-help-para">An example of using "a1" and "s1": For a multi-line C comment, a line
containing "/*" would return "a1" to start a fold, and a line containing "*/"
would return "s1" to end the fold after that line:<pre>if match(thisline, '/\*') &gt;= 0
  return 'a1'
elseif match(thisline, '\*/') &gt;= 0
  return 's1'
else
  return '='
endif</pre>
However, this won't work for single line comments, strings, etc.</div>
<div class="old-help-para"><a href="builtin.html#foldlevel()">foldlevel()</a> can be useful to compute a fold level relative to a previous
fold level.  But note that foldlevel() may return -1 if the level is not known
yet.  And it returns the level at the start of the line, while a fold might
end in that line.</div>
<div class="old-help-para">It may happen that folds are not updated properly.  You can use <a href="fold.html#zx">zx</a> or <a href="fold.html#zX">zX</a>
to force updating folds.</div>
<div class="old-help-para"><h3 class="help-heading">SYNTAX<span class="help-heading-tags">						<a name="fold-syntax"></a><span class="help-tag">fold-syntax</span></span></h3></div>
<div class="old-help-para">A fold is defined by syntax items that have the "fold" argument. <a href="syntax.html#%3Asyn-fold">:syn-fold</a></div>
<div class="old-help-para">The fold level is defined by nesting folds.  The nesting of folds is limited
with <a href="options.html#'foldnestmax'">'foldnestmax'</a>.</div>
<div class="old-help-para">Be careful to specify proper syntax syncing.  If this is not done right, folds
may differ from the displayed highlighting.  This is especially relevant when
using patterns that match more than one line.  In case of doubt, try using
brute-force syncing:<pre>:syn sync fromstart</pre>
<h3 class="help-heading">DIFF<span class="help-heading-tags">						<a name="fold-diff"></a><span class="help-tag">fold-diff</span></span></h3></div>
<div class="old-help-para">The folds are automatically defined for text that is not part of a change or
close to a change.</div>
<div class="old-help-para">This method only works properly when the <a href="options.html#'diff'">'diff'</a> option is set for the current
window and changes are being displayed.  Otherwise the whole buffer will be
one big fold.</div>
<div class="old-help-para">The <a href="options.html#'diffopt'">'diffopt'</a> option can be used to specify the context.  That is, the number
of lines between the fold and a change that are not included in the fold.  For
example, to use a context of 8 lines:<pre>:set diffopt=filler,context:8</pre>
The default context is six lines.</div>
<div class="old-help-para">When <a href="options.html#'scrollbind'">'scrollbind'</a> is also set, Vim will attempt to keep the same folds open in
other diff windows, so that the same text is visible.</div>
<div class="old-help-para"><h3 class="help-heading">MARKER<span class="help-heading-tags">						<a name="fold-marker"></a><span class="help-tag">fold-marker</span></span></h3></div>
<div class="old-help-para">Markers in the text tell where folds start and end.  This allows you to
precisely specify the folds.  This will allow deleting and putting a fold,
without the risk of including the wrong lines.  The <a href="options.html#'foldtext'">'foldtext'</a> option is
normally set such that the text before the marker shows up in the folded line.
This makes it possible to give a name to the fold.</div>
<div class="old-help-para">Markers can have a level included, or can use matching pairs.  Including a
level is easier, you don't have to add end markers and avoid problems with
non-matching marker pairs.  Example:<pre>/* global variables {{{1 */
int varA, varB;

/* functions {{{1 */
/* funcA() {{{2 */
void funcA() {}

/* funcB() {{{2 */
void funcB() {}</pre>
A fold starts at a "{{{" marker.  The following number specifies the fold
level.  What happens depends on the difference between the current fold level
and the level given by the marker:
1. If a marker with the same fold level is encountered, the previous fold
   ends and another fold with the same level starts.
2. If a marker with a higher fold level is found, a nested fold is started.
3. If a marker with a lower fold level is found, all folds up to and including
   this level end and a fold with the specified level starts.</div>
<div class="old-help-para">The number indicates the fold level.  A zero cannot be used (a marker with
level zero is ignored).  You can use "}}}" with a digit to indicate the level
of the fold that ends.  The fold level of the following line will be one less
than the indicated level.  Note that Vim doesn't look back to the level of the
matching marker (that would take too much time).  Example:<pre>{{{1
fold level here is 1
{{{3
fold level here is 3
}}}3
fold level here is 2</pre>
You can also use matching pairs of "{{{" and "}}}" markers to define folds.
Each "{{{" increases the fold level by one, each "}}}" decreases the fold
level by one.  Be careful to keep the markers matching!  Example:<pre>{{{
fold level here is 1
{{{
fold level here is 2
}}}
fold level here is 1</pre>
You can mix using markers with a number and without a number.  A useful way of
doing this is to use numbered markers for large folds, and unnumbered markers
locally in a function.  For example use level one folds for the sections of
your file like "structure definitions", "local variables" and "functions".
Use level 2 markers for each definition and function,  Use unnumbered markers
inside functions.  When you make changes in a function to split up folds, you
don't have to renumber the markers.</div>
<div class="old-help-para">The markers can be set with the <a href="options.html#'foldmarker'">'foldmarker'</a> option.  It is recommended to
keep this at the default value of "{{{,}}}", so that files can be exchanged
between Vim users.  Only change it when it is required for the file (e.g., it
contains markers from another folding editor, or the default markers cause
trouble for the language of the file).</div>
<div class="old-help-para">							<a name="fold-create-marker"></a><code class="help-tag-right">fold-create-marker</code>
"zf" can be used to create a fold defined by markers.  Vim will insert the
markers for you.  Vim will append the start and end marker, as specified with
<a href="options.html#'foldmarker'">'foldmarker'</a>.  The markers are appended to the end of the line.
<a href="options.html#'commentstring'">'commentstring'</a> is used if it isn't empty.
This does not work properly when:
<div class="help-li" style=""> The line already contains a marker with a level number.  Vim then doesn't
  know what to do.
</div><div class="help-li" style=""> Folds nearby use a level number in their marker which gets in the way.
</div><div class="help-li" style=""> The line is inside a comment, <a href="options.html#'commentstring'">'commentstring'</a> isn't empty and nested
  comments don't work.  For example with C: adding /* {{{/ inside a comment
  will truncate the existing comment.  Either put the marker before or after
  the comment, or add the marker manually.
Generally it's not a good idea to let Vim create markers when you already have
markers with a level number.
</div></div>
<div class="old-help-para">							<a name="fold-delete-marker"></a><code class="help-tag-right">fold-delete-marker</code>
"zd" can be used to delete a fold defined by markers.  Vim will delete the
markers for you.  Vim will search for the start and end markers, as specified
with <a href="options.html#'foldmarker'">'foldmarker'</a>, at the start and end of the fold.  When the text around the
marker matches with <a href="options.html#'commentstring'">'commentstring'</a>, that text is deleted as well.
This does not work properly when:
<div class="help-li" style=""> A line contains more than one marker and one of them specifies a level.
  Only the first one is removed, without checking if this will have the
  desired effect of deleting the fold.
</div><div class="help-li" style=""> The marker contains a level number and is used to start or end several folds
  at the same time.
</div></div>
<div class="old-help-para"><h2 class="help-heading">2. Fold commands<span class="help-heading-tags">				<a name="fold-commands"></a><span class="help-tag">fold-commands</span> <a name="E490"></a><span class="help-tag">E490</span></span></h2></div>
<div class="old-help-para">All folding commands start with "z".  Hint: the "z" looks like a folded piece
of paper, if you look at it from the side.</div>
<div class="old-help-para"><div class="help-column_heading">CREATING AND DELETING FOLDS</div>							<a name="zf"></a><code class="help-tag-right">zf</code> <a name="E350"></a><code class="help-tag">E350</code>
zf{motion}  or
<code>{Visual}</code>zf	Operator to create a fold.
		This only works when <a href="options.html#'foldmethod'">'foldmethod'</a> is "manual" or "marker".
		The new fold will be closed for the "manual" method.
		<a href="options.html#'foldenable'">'foldenable'</a> will be set.
		Also see <a href="fold.html#fold-create-marker">fold-create-marker</a>.</div>
<div class="old-help-para">							<a name="zF"></a><code class="help-tag-right">zF</code>
zF		Create a fold for [count] lines.  Works like "zf".</div>
<div class="old-help-para">:{range}fo[ld]						<a name="%3Afold"></a><code class="help-tag-right">:fold</code> <a name="%3Afo"></a><code class="help-tag">:fo</code>
		Create a fold for the lines in <code>{range}</code>.  Works like "zf".</div>
<div class="old-help-para">							<a name="zd"></a><code class="help-tag-right">zd</code> <a name="E351"></a><code class="help-tag">E351</code>
zd		Delete one fold at the cursor.  When the cursor is on a folded
		line, that fold is deleted.  Nested folds are moved one level
		up.  In Visual mode one level of all folds (partially) in the
		selected area are deleted.
		Careful: This easily deletes more folds than you expect and
		there is no undo for manual folding.
		This only works when <a href="options.html#'foldmethod'">'foldmethod'</a> is "manual" or "marker".
		Also see <a href="fold.html#fold-delete-marker">fold-delete-marker</a>.</div>
<div class="old-help-para">							<a name="zD"></a><code class="help-tag-right">zD</code>
zD		Delete folds recursively at the cursor.  In Visual mode all
		folds (partially) in the selected area and all nested folds in
		them are deleted.
		This only works when <a href="options.html#'foldmethod'">'foldmethod'</a> is "manual" or "marker".
		Also see <a href="fold.html#fold-delete-marker">fold-delete-marker</a>.</div>
<div class="old-help-para">							<a name="zE"></a><code class="help-tag-right">zE</code> <a name="E352"></a><code class="help-tag">E352</code>
zE		Eliminate all folds in the window.
		This only works when <a href="options.html#'foldmethod'">'foldmethod'</a> is "manual" or "marker".
		Also see <a href="fold.html#fold-delete-marker">fold-delete-marker</a>.</div>
<div class="old-help-para"><div class="help-column_heading">OPENING AND CLOSING FOLDS</div></div>
<div class="old-help-para">A fold smaller than <a href="options.html#'foldminlines'">'foldminlines'</a> will always be displayed like it was open.
Therefore the commands below may work differently on small folds.</div>
<div class="old-help-para">							<a name="zo"></a><code class="help-tag-right">zo</code>
zo		Open one fold under the cursor.  When a count is given, that
		many folds deep will be opened.  In Visual mode one level of
		folds is opened for all lines in the selected area.</div>
<div class="old-help-para">							<a name="zO"></a><code class="help-tag-right">zO</code>
zO		Open all folds under the cursor recursively.  Folds that don't
		contain the cursor line are unchanged.
		In Visual mode it opens all folds that are in the selected
		area, also those that are only partly selected.</div>
<div class="old-help-para">							<a name="zc"></a><code class="help-tag-right">zc</code>
zc		Close one fold under the cursor.  When a count is given, that
		many folds deep are closed.  In Visual mode one level of folds
		is closed for all lines in the selected area.
		<a href="options.html#'foldenable'">'foldenable'</a> will be set.</div>
<div class="old-help-para">							<a name="zC"></a><code class="help-tag-right">zC</code>
zC		Close all folds under the cursor recursively.  Folds that
		don't contain the cursor line are unchanged.
		In Visual mode it closes all folds that are in the selected
		area, also those that are only partly selected.
		<a href="options.html#'foldenable'">'foldenable'</a> will be set.</div>
<div class="old-help-para">							<a name="za"></a><code class="help-tag-right">za</code>
za		When on a closed fold: open it.  When folds are nested, you
		may have to use "za" several times.  When a count is given,
		that many closed folds are opened.
		When on an open fold: close it and set <a href="options.html#'foldenable'">'foldenable'</a>.  This
		will only close one level, since using "za" again will open
		the fold.  When a count is given that many folds will be
		closed (that's not the same as repeating "za" that many
		times).</div>
<div class="old-help-para">							<a name="zA"></a><code class="help-tag-right">zA</code>
zA		When on a closed fold: open it recursively.
		When on an open fold: close it recursively and set
		<a href="options.html#'foldenable'">'foldenable'</a>.</div>
<div class="old-help-para">							<a name="zv"></a><code class="help-tag-right">zv</code>
zv		View cursor line: Open just enough folds to make the line in
		which the cursor is located not folded.</div>
<div class="old-help-para">							<a name="zx"></a><code class="help-tag-right">zx</code>
zx		Update folds: Undo manually opened and closed folds: re-apply
		<a href="options.html#'foldlevel'">'foldlevel'</a>, then do "zv": View cursor line.
		Also forces recomputing folds.  This is useful when using
		<a href="options.html#'foldexpr'">'foldexpr'</a> and the buffer is changed in a way that results in
		folds not to be updated properly.</div>
<div class="old-help-para">							<a name="zX"></a><code class="help-tag-right">zX</code>
zX		Undo manually opened and closed folds: re-apply <a href="options.html#'foldlevel'">'foldlevel'</a>.
		Also forces recomputing folds, like <a href="fold.html#zx">zx</a>.</div>
<div class="old-help-para">							<a name="zm"></a><code class="help-tag-right">zm</code>
zm		Fold more: Subtract <a href="eval.html#v%3Acount1">v:count1</a> from <a href="options.html#'foldlevel'">'foldlevel'</a>.  If <a href="options.html#'foldlevel'">'foldlevel'</a> was
		already zero nothing happens.
		<a href="options.html#'foldenable'">'foldenable'</a> will be set.</div>
<div class="old-help-para">							<a name="zM"></a><code class="help-tag-right">zM</code>
zM		Close all folds: set <a href="options.html#'foldlevel'">'foldlevel'</a> to 0.
		<a href="options.html#'foldenable'">'foldenable'</a> will be set.</div>
<div class="old-help-para">							<a name="zr"></a><code class="help-tag-right">zr</code>
zr		Reduce folding: Add <a href="eval.html#v%3Acount1">v:count1</a> to <a href="options.html#'foldlevel'">'foldlevel'</a>.</div>
<div class="old-help-para">							<a name="zR"></a><code class="help-tag-right">zR</code>
zR		Open all folds.  This sets <a href="options.html#'foldlevel'">'foldlevel'</a> to highest fold level.</div>
<div class="old-help-para">							<a name="%3Afoldo"></a><code class="help-tag-right">:foldo</code> <a name="%3Afoldopen"></a><code class="help-tag">:foldopen</code>
:{range}foldo[pen][!]
		Open folds in <code>{range}</code>.  When [!] is added all folds are
		opened.  Useful to see all the text in <code>{range}</code>.  Without [!]
		one level of folds is opened.</div>
<div class="old-help-para">							<a name="%3Afoldc"></a><code class="help-tag-right">:foldc</code> <a name="%3Afoldclose"></a><code class="help-tag">:foldclose</code>
:{range}foldc[lose][!]
		Close folds in <code>{range}</code>.  When [!] is added all folds are
		closed.  Useful to hide all the text in <code>{range}</code>.  Without [!]
		one level of folds is closed.</div>
<div class="old-help-para">							<a name="zn"></a><code class="help-tag-right">zn</code>
zn		Fold none: reset <a href="options.html#'foldenable'">'foldenable'</a>.  All folds will be open.</div>
<div class="old-help-para">							<a name="zN"></a><code class="help-tag-right">zN</code>
zN		Fold normal: set <a href="options.html#'foldenable'">'foldenable'</a>.  All folds will be as they
		were before.</div>
<div class="old-help-para">							<a name="zi"></a><code class="help-tag-right">zi</code>
zi		Invert <a href="options.html#'foldenable'">'foldenable'</a>.</div>
<div class="old-help-para"><div class="help-column_heading">MOVING OVER FOLDS</div>							<a name="%5Bz"></a><code class="help-tag-right">[z</code>
[z		Move to the start of the current open fold.  If already at the
		start, move to the start of the fold that contains it.  If
		there is no containing fold, the command fails.
		When a count is used, repeats the command [count] times.</div>
<div class="old-help-para">							<a name="%5Dz"></a><code class="help-tag-right">]z</code>
]z		Move to the end of the current open fold.  If already at the
		end, move to the end of the fold that contains it.  If there
		is no containing fold, the command fails.
		When a count is used, repeats the command [count] times.</div>
<div class="old-help-para">							<a name="zj"></a><code class="help-tag-right">zj</code>
zj		Move downwards to the start of the next fold.  A closed fold
		is counted as one fold.
		When a count is used, repeats the command [count] times.
		This command can be used after an <a href="motion.html#operator">operator</a>.</div>
<div class="old-help-para">							<a name="zk"></a><code class="help-tag-right">zk</code>
zk		Move upwards to the end of the previous fold.  A closed fold
		is counted as one fold.
		When a count is used, repeats the command [count] times.
		This command can be used after an <a href="motion.html#operator">operator</a>.</div>
<div class="old-help-para"><div class="help-column_heading">EXECUTING COMMANDS ON FOLDS</div></div>
<div class="old-help-para">:[range]foldd[oopen] <code>{cmd}</code>			<a name="%3Afoldd"></a><code class="help-tag-right">:foldd</code> <a name="%3Afolddo"></a><code class="help-tag">:folddo</code> <a name="%3Afolddoopen"></a><code class="help-tag">:folddoopen</code>
		Execute <code>{cmd}</code> on all lines that are not in a closed fold.
		When [range] is given, only these lines are used.
		Each time <code>{cmd}</code> is executed the cursor is positioned on the
		line it is executed for.
		This works like the ":global" command: First all lines that
		are not in a closed fold are marked.  Then the <code>{cmd}</code> is
		executed for all marked lines.  Thus when <code>{cmd}</code> changes the
		folds, this has no influence on where it is executed (except
		when lines are deleted, of course).
		Example:<pre>:folddoopen s/end/loop_end/ge</pre></div>
<div class="old-help-para">		Note the use of the "e" flag to avoid getting an error message
		where "end" doesn't match.</div>
<div class="old-help-para">:[range]folddoc[losed] <code>{cmd}</code>			<a name="%3Afolddoc"></a><code class="help-tag-right">:folddoc</code> <a name="%3Afolddoclosed"></a><code class="help-tag">:folddoclosed</code>
		Execute <code>{cmd}</code> on all lines that are in a closed fold.
		Otherwise like ":folddoopen".</div>
<div class="old-help-para"><h2 class="help-heading">3. Fold options<span class="help-heading-tags">					<a name="fold-options"></a><span class="help-tag">fold-options</span></span></h2></div>
<div class="old-help-para"><h3 class="help-heading">COLORS<span class="help-heading-tags">							<a name="fold-colors"></a><span class="help-tag">fold-colors</span></span></h3></div>
<div class="old-help-para">The colors of a closed fold are set with the Folded group <a href="syntax.html#hl-Folded">hl-Folded</a>.  The
colors of the fold column are set with the FoldColumn group <a href="syntax.html#hl-FoldColumn">hl-FoldColumn</a>.
Example to set the colors:<pre>:highlight Folded guibg=grey guifg=blue
:highlight FoldColumn guibg=darkgrey guifg=white</pre>
<h3 class="help-heading">FOLDLEVEL<span class="help-heading-tags">						<a name="fold-foldlevel"></a><span class="help-tag">fold-foldlevel</span></span></h3></div>
<div class="old-help-para"><a href="options.html#'foldlevel'">'foldlevel'</a> is a number option: The higher the more folded regions are open.
When <a href="options.html#'foldlevel'">'foldlevel'</a> is 0, all folds are closed.
When <a href="options.html#'foldlevel'">'foldlevel'</a> is positive, some folds are closed.
When <a href="options.html#'foldlevel'">'foldlevel'</a> is very high, all folds are open.
<a href="options.html#'foldlevel'">'foldlevel'</a> is applied when it is changed.  After that manually folds can be
opened and closed.
When increased, folds above the new level are opened.  No manually opened
folds will be closed.
When decreased, folds above the new level are closed.  No manually closed
folds will be opened.</div>
<div class="old-help-para"><h3 class="help-heading">FOLDTEXT<span class="help-heading-tags">						<a name="fold-foldtext"></a><span class="help-tag">fold-foldtext</span></span></h3></div>
<div class="old-help-para"><a href="options.html#'foldtext'">'foldtext'</a> is a string option that specifies an expression.  This expression
is evaluated to obtain the text displayed for a closed fold.  Example:<pre>:set foldtext=v:folddashes.substitute(getline(v:foldstart),'/\\*\\\|\\*/\\\|{{{\\d\\=','','g')</pre>
This shows the first line of the fold, with "/*", "*/" and "{{{" removed.
Note the use of backslashes to avoid some characters to be interpreted by the
":set" command.  It is much simpler to define a function and call it:<pre>:set foldtext=MyFoldText()
:function MyFoldText()
:  let line = getline(v:foldstart)
:  let sub = substitute(line, '/\*\|\*/\|{{{\d\=', '', 'g')
:  return v:folddashes .. sub
:endfunction</pre>
Evaluating <a href="options.html#'foldtext'">'foldtext'</a> is done in the <a href="eval.html#sandbox">sandbox</a>.  The current window is set to
the window that displays the line.</div>
<div class="old-help-para">Errors are ignored.  For debugging set the <a href="options.html#'debug'">'debug'</a> option to "throw".</div>
<div class="old-help-para">The default value is <a href="builtin.html#foldtext()">foldtext()</a>.  This returns a reasonable text for most
types of folding.  If you don't like it, you can specify your own <a href="options.html#'foldtext'">'foldtext'</a>
expression.  It can use these special Vim variables:
	v:foldstart	line number of first line in the fold
	v:foldend	line number of last line in the fold
	v:folddashes	a string that contains dashes to represent the
			foldlevel.
	v:foldlevel	the foldlevel of the fold</div>
<div class="old-help-para">In the result a TAB is replaced with a space and unprintable characters are
made into printable characters.</div>
<div class="old-help-para">The resulting line is truncated to fit in the window, it never wraps.
When there is room after the text, it is filled with the character specified
by <a href="options.html#'fillchars'">'fillchars'</a>.</div>
<div class="old-help-para">Note that backslashes need to be used for characters that the ":set" command
handles differently: Space, backslash and double-quote. <a href="options.html#option-backslash">option-backslash</a></div>
<div class="old-help-para"><h3 class="help-heading">FOLDCOLUMN<span class="help-heading-tags">						<a name="fold-foldcolumn"></a><span class="help-tag">fold-foldcolumn</span></span></h3></div>
<div class="old-help-para"><a href="options.html#'foldcolumn'">'foldcolumn'</a> is a number, which sets the width for a column on the side of the
window to indicate folds.  When it is zero, there is no foldcolumn.  A normal
value is auto:9. The maximum is 9.</div>
<div class="old-help-para">An open fold is indicated with a column that has a '-' at the top and '|'
characters below it.  This column stops where the open fold stops.  When folds
nest, the nested fold is one character right of the fold it's contained in.</div>
<div class="old-help-para">A closed fold is indicated with a '+'.</div>
<div class="old-help-para">These characters can be changed with the <a href="options.html#'fillchars'">'fillchars'</a> option.</div>
<div class="old-help-para">Where the fold column is too narrow to display all nested folds, digits are
shown to indicate the nesting level.</div>
<div class="old-help-para">The mouse can also be used to open and close folds by clicking in the
fold column:
<div class="help-li" style=""> Click on a '+' to open the closed fold at this row.
</div><div class="help-li" style=""> Click on any other non-blank character to close the open fold at this row.
</div></div>
<div class="old-help-para"><a name="_other-options"></a><h3 class="help-heading">OTHER OPTIONS</h3></div>
<div class="old-help-para"><a href="options.html#'foldenable'">'foldenable'</a>  <a href="options.html#'fen'">'fen'</a>:	Open all folds while not set.
<a href="options.html#'foldexpr'">'foldexpr'</a>    <a href="options.html#'fde'">'fde'</a>:	Expression used for "expr" folding.
<a href="options.html#'foldignore'">'foldignore'</a>  <a href="options.html#'fdi'">'fdi'</a>:	Characters used for "indent" folding.
<a href="options.html#'foldmarker'">'foldmarker'</a>  <a href="options.html#'fmr'">'fmr'</a>:	Defined markers used for "marker" folding.
<a href="options.html#'foldmethod'">'foldmethod'</a>  <a href="options.html#'fdm'">'fdm'</a>:	Name of the current folding method.
<a href="options.html#'foldminlines'">'foldminlines'</a> <a href="options.html#'fml'">'fml'</a>:	Minimum number of screen lines for a fold to be
			displayed closed.
<a href="options.html#'foldnestmax'">'foldnestmax'</a> <a href="options.html#'fdn'">'fdn'</a>:	Maximum nesting for "indent" and "syntax" folding.
<a href="options.html#'foldopen'">'foldopen'</a>    <a href="options.html#'fdo'">'fdo'</a>:	Which kinds of commands open closed folds.
<a href="options.html#'foldclose'">'foldclose'</a>   <a href="options.html#'fcl'">'fcl'</a>:	When the folds not under the cursor are closed.</div>
<div class="old-help-para"><h2 class="help-heading">4. Behavior of folds<span class="help-heading-tags">					<a name="fold-behavior"></a><span class="help-tag">fold-behavior</span></span></h2></div>
<div class="old-help-para">When moving the cursor upwards or downwards and when scrolling, the cursor
will move to the first line of a sequence of folded lines.  When the cursor is
already on a folded line, it moves to the next unfolded line or the next
closed fold.</div>
<div class="old-help-para">While the cursor is on folded lines, the cursor is always displayed in the
first column.  The ruler does show the actual cursor position, but since the
line is folded, it cannot be displayed there.</div>
<div class="old-help-para">Many movement commands handle a sequence of folded lines like an empty line.
For example, the "w" command stops once in the first column.</div>
<div class="old-help-para">When in Insert mode, the cursor line is never folded.  That allows you to see
what you type!</div>
<div class="old-help-para">When using an operator, a closed fold is included as a whole.  Thus "dl"
deletes the whole closed fold under the cursor.</div>
<div class="old-help-para">For Ex commands that work on buffer lines the range is adjusted to always
start at the first line of a closed fold and end at the last line of a closed
fold.  Thus this command:<pre>:s/foo/bar/g</pre>
when used with the cursor on a closed fold, will replace "foo" with "bar" in
all lines of the fold.
This does not happen for <a href="fold.html#%3Afolddoopen">:folddoopen</a> and <a href="fold.html#%3Afolddoclosed">:folddoclosed</a>.</div>
<div class="old-help-para">When editing a buffer that has been edited before, the last used folding
settings are used again.  For manual folding the defined folds are restored.
For all folding methods the manually opened and closed folds are restored.
If this buffer has been edited in this window, the values from back then are
used.  Otherwise the values from the window where the buffer was edited last
are used.</div>

  
  