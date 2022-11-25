---
title:  Change
layout: ../../layouts/MainLayout.astro
---

  <a name="change.txt"></a><a name="deleting"></a><h1> Change</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/change.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">This file describes commands that delete or change text.  In this context,
changing text means deleting the text and replacing it with other text using
one command.  You can undo all of these commands.  You can repeat the non-Ex
commands with the "." command.</div>
<div class="old-help-para">For inserting text see <a href="/neovim-docs-web/en/insert#insert.txt">insert.txt</a>.</div>
<div class="old-help-para"><h2 class="help-heading">1. Deleting text <a name="E470"></a><span class="help-tag">E470</span></h2></div>
<div class="old-help-para">["x]&lt;Del&gt;	or					<a name="%3CDel%3E"></a><code class="help-tag-right">&lt;Del&gt;</code> <a name="x"></a><code class="help-tag">x</code> <a name="dl"></a><code class="help-tag">dl</code>
["x]x			Delete [count] characters under and after the cursor
			[into register x] (not <a href="/neovim-docs-web/en/motion#linewise">linewise</a>).  Does the same as
			"dl".
			The <code>&lt;Del&gt;</code> key does not take a [count].  Instead, it
			deletes the last character of the count.
			See <a href="/neovim-docs-web/en/options#'whichwrap'">'whichwrap'</a> for deleting a line break (join
			lines).</div>
<div class="old-help-para">							<a name="X"></a><code class="help-tag-right">X</code> <a name="dh"></a><code class="help-tag">dh</code>
["x]X			Delete [count] characters before the cursor [into
			register x] (not <a href="/neovim-docs-web/en/motion#linewise">linewise</a>).  Does the same as "dh".
			Also see <a href="/neovim-docs-web/en/options#'whichwrap'">'whichwrap'</a>.</div>
<div class="old-help-para">							<a name="d"></a><code class="help-tag-right">d</code>
["x]d{motion}		Delete text that <code>{motion}</code> moves over [into register
			x].  See below for exceptions.</div>
<div class="old-help-para">							<a name="dd"></a><code class="help-tag-right">dd</code>
["x]dd			Delete [count] lines [into register x] <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.</div>
<div class="old-help-para">							<a name="D"></a><code class="help-tag-right">D</code>
["x]D			Delete the characters under the cursor until the end
			of the line and [count]-1 more lines [into register
			x]; synonym for "d$".
			(not <a href="/neovim-docs-web/en/motion#linewise">linewise</a>)</div>
<div class="old-help-para"><code>{Visual}</code>["x]x	or					<a name="v_x"></a><code class="help-tag-right">v_x</code> <a name="v_d"></a><code class="help-tag">v_d</code> <a name="v_%3CDel%3E"></a><code class="help-tag">v_&lt;Del&gt;</code>
<code>{Visual}</code>["x]d   or
<code>{Visual}</code>["x]&lt;Del&gt;	Delete the highlighted text [into register x] (for
			<code>{Visual}</code> see <a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para"><code>{Visual}</code>["x]CTRL-H   or					<a name="v_CTRL-H"></a><code class="help-tag-right">v_CTRL-H</code> <a name="v_%3CBS%3E"></a><code class="help-tag">v_&lt;BS&gt;</code>
<code>{Visual}</code>["x]&lt;BS&gt;	When in Select mode: Delete the highlighted text [into
			register x].</div>
<div class="old-help-para"><code>{Visual}</code>["x]X	or					<a name="v_X"></a><code class="help-tag-right">v_X</code> <a name="v_D"></a><code class="help-tag">v_D</code> <a name="v_b_D"></a><code class="help-tag">v_b_D</code>
<code>{Visual}</code>["x]D		Delete the highlighted lines [into register x] (for
			<code>{Visual}</code> see <a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).  In Visual block mode,
			"D" deletes the highlighted text plus all text until
			the end of the line.</div>
<div class="old-help-para">					<a name="%3Ad"></a><code class="help-tag-right">:d</code> <a name="%3Ade"></a><code class="help-tag">:de</code> <a name="%3Adel"></a><code class="help-tag">:del</code> <a name="%3Adelete"></a><code class="help-tag">:delete</code> <a name="%3Adl"></a><code class="help-tag">:dl</code> <a name="%3Adp"></a><code class="help-tag">:dp</code>
:[range]d[elete] [x]	Delete [range] lines (default: current line) [into
			register x].
			Note these weird abbreviations:
			   :dl		delete and list
			   :dell	idem
			   :delel	idem
			   :deletl	idem
			   :deletel	idem
			   :dp		delete and print
			   :dep		idem
			   :delp	idem
			   :delep	idem
			   :deletp	idem
			   :deletep	idem</div>
<div class="old-help-para">:[range]d[elete] [x] <code>{count}</code>
			Delete <code>{count}</code> lines, starting with [range]
			(default: current line <a href="/neovim-docs-web/en/cmdline#cmdline-ranges">cmdline-ranges</a>) [into
			register x].</div>
<div class="old-help-para">These commands delete text.  You can repeat them with the <code>.</code> command
(except <code>:d</code>) and undo them.  Use Visual mode to delete blocks of text.  See
<a href="/neovim-docs-web/en/change#registers">registers</a> for an explanation of registers.</div>
<div class="old-help-para">An exception for the d{motion} command: If the motion is not linewise, the
start and end of the motion are not in the same line, and there are only
blanks before the start and there are no non-blanks after the end of the
motion, the delete becomes linewise.  This means that the delete also removes
the line of blanks that you might expect to remain. Use the <a href="/neovim-docs-web/en/motion#o_v">o_v</a> operator to
force the motion to be charwise.</div>
<div class="old-help-para">Trying to delete an empty region of text (e.g., "d0" in the first column)
is an error when <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> includes the 'E' flag.</div>
<div class="old-help-para">							<a name="J"></a><code class="help-tag-right">J</code>
J			Join [count] lines, with a minimum of two lines.
			Remove the indent and insert up to two spaces (see
			below).  Fails when on the last line of the buffer.
			If [count] is too big it is reduced to the number of
			lines available.</div>
<div class="old-help-para">							<a name="v_J"></a><code class="help-tag-right">v_J</code>
<code>{Visual}</code>J		Join the highlighted lines, with a minimum of two
			lines.  Remove the indent and insert up to two spaces
			(see below).</div>
<div class="old-help-para">							<a name="gJ"></a><code class="help-tag-right">gJ</code>
gJ			Join [count] lines, with a minimum of two lines.
			Don't insert or remove any spaces.</div>
<div class="old-help-para">							<a name="v_gJ"></a><code class="help-tag-right">v_gJ</code>
<code>{Visual}</code>gJ		Join the highlighted lines, with a minimum of two
			lines.  Don't insert or remove any spaces.</div>
<div class="old-help-para">							<a name="%3Aj"></a><code class="help-tag-right">:j</code> <a name="%3Ajoin"></a><code class="help-tag">:join</code>
:[range]j[oin][!] [flags]
			Join [range] lines.  Same as "J", except with [!]
			the join does not insert or delete any spaces.
			If a [range] has equal start and end values, this
			command does nothing.  The default behavior is to
			join the current line with the line below it.
			See <a href="/neovim-docs-web/en/cmdline#ex-flags">ex-flags</a> for [flags].</div>
<div class="old-help-para">:[range]j[oin][!] <code>{count}</code> [flags]
			Join <code>{count}</code> lines, starting with [range] (default:
			current line <a href="/neovim-docs-web/en/cmdline#cmdline-ranges">cmdline-ranges</a>).  Same as "J", except
			with [!] the join does not insert or delete any
			spaces.
			See <a href="/neovim-docs-web/en/cmdline#ex-flags">ex-flags</a> for [flags].</div>
<div class="old-help-para">These commands delete the <code>&lt;EOL&gt;</code> between lines.  This has the effect of joining
multiple lines into one line.  You can repeat these commands (except <code>:j</code>) and
undo them.</div>
<div class="old-help-para">These commands, except "gJ", insert one space in place of the <code>&lt;EOL&gt;</code> unless
there is trailing white space or the next line starts with a ')'.  These
commands, except "gJ", delete any leading white space on the next line.  If
the <a href="/neovim-docs-web/en/options#'joinspaces'">'joinspaces'</a> option is on, these commands insert two spaces after a '.',
'!' or '?'.
The 'B' and 'M' flags in <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> change the behavior for inserting
spaces before and after a multibyte character <a href="/neovim-docs-web/en/change#fo-table">fo-table</a>.</div>
<div class="old-help-para">The '[ mark is set at the end of the first line that was joined, '] at the end
of the resulting line.</div>
<div class="old-help-para"><h2 class="help-heading">2. Delete and insert<span class="help-heading-tags">				<a name="delete-insert"></a><span class="help-tag">delete-insert</span> <a name="replacing"></a><span class="help-tag">replacing</span></span></h2></div>
<div class="old-help-para">							<a name="R"></a><code class="help-tag-right">R</code>
R			Enter Replace mode: Each character you type replaces
			an existing character, starting with the character
			under the cursor.  Repeat the entered text [count]-1
			times.  See <a href="/neovim-docs-web/en/insert#Replace-mode">Replace-mode</a> for more details.</div>
<div class="old-help-para">							<a name="gR"></a><code class="help-tag-right">gR</code>
gR			Enter Virtual Replace mode: Each character you type
			replaces existing characters in screen space.  So a
			<code>&lt;Tab&gt;</code> may replace several characters at once.
			Repeat the entered text [count]-1 times.  See
			<a href="/neovim-docs-web/en/insert#Virtual-Replace-mode">Virtual-Replace-mode</a> for more details.</div>
<div class="old-help-para">							<a name="c"></a><code class="help-tag-right">c</code>
["x]c{motion}		Delete <code>{motion}</code> text [into register x] and start
			insert.  When  <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> includes the 'E' flag and
			there is no text to delete (e.g., with "cTx" when the
			cursor is just after an 'x'), an error occurs and
			insert mode does not start (this is Vi compatible).
			When  <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> does not include the 'E' flag, the
			"c" command always starts insert mode, even if there
			is no text to delete.</div>
<div class="old-help-para">							<a name="cc"></a><code class="help-tag-right">cc</code>
["x]cc			Delete [count] lines [into register x] and start
			insert <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.  If <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> is on, preserve
			the indent of the first line.</div>
<div class="old-help-para">							<a name="C"></a><code class="help-tag-right">C</code>
["x]C			Delete from the cursor position to the end of the
			line and [count]-1 more lines [into register x], and
			start insert.  Synonym for c$ (not <a href="/neovim-docs-web/en/motion#linewise">linewise</a>).</div>
<div class="old-help-para">							<a name="s"></a><code class="help-tag-right">s</code>
["x]s			Delete [count] characters [into register x] and start
			insert (s stands for Substitute).  Synonym for "cl"
			(not <a href="/neovim-docs-web/en/motion#linewise">linewise</a>).</div>
<div class="old-help-para">							<a name="S"></a><code class="help-tag-right">S</code>
["x]S			Delete [count] lines [into register x] and start
			insert.  Synonym for "cc" <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.</div>
<div class="old-help-para"><code>{Visual}</code>["x]c	or					<a name="v_c"></a><code class="help-tag-right">v_c</code> <a name="v_s"></a><code class="help-tag">v_s</code>
<code>{Visual}</code>["x]s		Delete the highlighted text [into register x] and
			start insert (for <code>{Visual}</code> see <a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para">							<a name="v_r"></a><code class="help-tag-right">v_r</code>
<code>{Visual}</code>r{char}		Replace all selected characters by <code>{char}</code>.</div>
<div class="old-help-para">							<a name="v_C"></a><code class="help-tag-right">v_C</code>
<code>{Visual}</code>["x]C		Delete the highlighted lines [into register x] and
			start insert.  In Visual block mode it works
			differently <a href="/neovim-docs-web/en/visual#v_b_C">v_b_C</a>.
							<a name="v_S"></a><code class="help-tag-right">v_S</code>
<code>{Visual}</code>["x]S		Delete the highlighted lines [into register x] and
			start insert (for <code>{Visual}</code> see <a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para">							<a name="v_R"></a><code class="help-tag-right">v_R</code>
<code>{Visual}</code>["x]R		Currently just like <code>{Visual}</code>["x]S.  In a next version
			it might work differently.</div>
<div class="old-help-para">Notes:
<div class="help-li" style=""> You can end Insert and Replace mode with <code>&lt;Esc&gt;</code>.
</div><div class="help-li" style=""> See the section "Insert and Replace mode" <a href="/neovim-docs-web/en/insert#mode-ins-repl">mode-ins-repl</a> for the other
  special characters in these modes.
</div><div class="help-li" style=""> The effect of [count] takes place after Vim exits Insert or Replace mode.
</div><div class="help-li" style=""> When the <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> option contains '$' and the change is within one line,
  Vim continues to show the text to be deleted and puts a '$' at the last
  deleted character.
</div></div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/change#registers">registers</a> for an explanation of registers.</div>
<div class="old-help-para">Replace mode is just like Insert mode, except that every character you enter
deletes one character.  If you reach the end of a line, Vim appends any
further characters (just like Insert mode).  In Replace mode, the backspace
key restores the original text (if there was any).  (See section "Insert and
Replace mode" <a href="/neovim-docs-web/en/insert#mode-ins-repl">mode-ins-repl</a>).</div>
<div class="old-help-para">						<a name="cw"></a><code class="help-tag-right">cw</code> <a name="cW"></a><code class="help-tag">cW</code>
Special case: When the cursor is in a word, "cw" and "cW" do not include the
white space after a word, they only change up to the end of the word.  This is
because Vim interprets "cw" as change-word, and a word does not include the
following white space.</div>
<div class="old-help-para">If you prefer "cw" to include the space after a word, use this mapping:<pre>:map cw dwi</pre>
Or use "caw" (see <a href="/neovim-docs-web/en/motion#aw">aw</a>).</div>
<div class="old-help-para">							<a name="%3Ac"></a><code class="help-tag-right">:c</code> <a name="%3Ach"></a><code class="help-tag">:ch</code> <a name="%3Achange"></a><code class="help-tag">:change</code>
:{range}c[hange][!]	Replace lines of text with some different text.
			Type a line containing only "." to stop replacing.
			Without <code>{range}</code>, this command changes only the current
			line.
			Adding [!] toggles <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> for the time this
			command is executed.</div>
<div class="old-help-para"><h2 class="help-heading">3. Simple changes<span class="help-heading-tags">				<a name="simple-change"></a><span class="help-tag">simple-change</span> <a name="changing"></a><span class="help-tag">changing</span></span></h2></div>
<div class="old-help-para">							<a name="r"></a><code class="help-tag-right">r</code>
r{char}			Replace the character under the cursor with <code>{char}</code>.
			If <code>{char}</code> is a <code>&lt;CR&gt;</code> or <code>&lt;NL&gt;</code>, a line break replaces the
			character.  To replace with a real <code>&lt;CR&gt;</code>, use <code>CTRL-V</code>
			<code>&lt;CR&gt;</code>.  <code>CTRL-V</code> <code>&lt;NL&gt;</code> replaces with a <code>&lt;Nul&gt;</code>.</div>
<div class="old-help-para">			If <code>{char}</code> is <code>CTRL-E</code> or <code>CTRL-Y</code> the character from the
			line below or above is used, just like with <a href="/neovim-docs-web/en/insert#i_CTRL-E">i_CTRL-E</a>
			and <a href="/neovim-docs-web/en/insert#i_CTRL-Y">i_CTRL-Y</a>.  This also works with a count, thus
			<code>10r&lt;C-E&gt;</code> copies 10 characters from the line below.</div>
<div class="old-help-para">			If you give a [count], Vim replaces [count] characters
			with [count] <code>{char}</code>s.  When <code>{char}</code> is a <code>&lt;CR&gt;</code> or <code>&lt;NL&gt;</code>,
			however, Vim inserts only one <code>&lt;CR&gt;</code>: "5r&lt;CR&gt;" replaces
			five characters with a single line break.
			When <code>{char}</code> is a <code>&lt;CR&gt;</code> or <code>&lt;NL&gt;</code>, Vim performs
			autoindenting.  This works just like deleting the
			characters that are replaced and then doing
			"i&lt;CR&gt;&lt;Esc&gt;".
			<code>{char}</code> can be entered as a digraph <a href="/neovim-docs-web/en/change#digraph-arg">digraph-arg</a>.
			<a href="/neovim-docs-web/en/map#%3Almap">:lmap</a> mappings apply to <code>{char}</code>.  The <code>CTRL-^</code> command
			in Insert mode can be used to switch this on/off
			<a href="/neovim-docs-web/en/insert#i_CTRL-%5E">i_CTRL-^</a>.  See <a href="/neovim-docs-web/en/mbyte#utf-8-char-arg">utf-8-char-arg</a> about using
			composing characters when <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is Unicode.</div>
<div class="old-help-para">							<a name="gr"></a><code class="help-tag-right">gr</code>
gr{char}		Replace the virtual characters under the cursor with
			<code>{char}</code>.  This replaces in screen space, not file
			space.  See <a href="/neovim-docs-web/en/change#gR">gR</a> and <a href="/neovim-docs-web/en/insert#Virtual-Replace-mode">Virtual-Replace-mode</a> for more
			details.  As with <a href="/neovim-docs-web/en/change#r">r</a> a count may be given.
			<code>{char}</code> can be entered like with <a href="/neovim-docs-web/en/change#r">r</a>.</div>
<div class="old-help-para">						<a name="digraph-arg"></a><code class="help-tag-right">digraph-arg</code>
The argument for Normal mode commands like <a href="/neovim-docs-web/en/change#r">r</a> and <a href="/neovim-docs-web/en/motion#t">t</a> is a single character.
When <a href="/neovim-docs-web/en/options#'cpo'">'cpo'</a> doesn't contain the 'D' flag, this character can also be entered
like <a href="/neovim-docs-web/en/digraph#digraphs">digraphs</a>.  First type <code>CTRL-K</code> and then the two digraph characters.</div>
<div class="old-help-para">						<a name="case"></a><code class="help-tag-right">case</code>
The following commands change the case of letters.  The currently active
<a href="/neovim-docs-web/en/mbyte#locale">locale</a> is used.  See <a href="/neovim-docs-web/en/mlang#%3Alanguage">:language</a>.  The LC_CTYPE value matters here.</div>
<div class="old-help-para">							<a name="~"></a><code class="help-tag-right">~</code>
~			<a href="/neovim-docs-web/en/options#'notildeop'">'notildeop'</a> option: Switch case of the character
			under the cursor and move the cursor to the right.
			If a [count] is given, do that many characters.</div>
<div class="old-help-para">~<code>{motion}</code>		<a href="/neovim-docs-web/en/options#'tildeop'">'tildeop'</a> option: switch case of <code>{motion}</code> text.</div>
<div class="old-help-para">							<a name="g~"></a><code class="help-tag-right">g~</code>
g~{motion}		Switch case of <code>{motion}</code> text.</div>
<div class="old-help-para">g~g~							<a name="g~g~"></a><code class="help-tag-right">g~g~</code> <a name="g~~"></a><code class="help-tag">g~~</code>
g~~			Switch case of current line.</div>
<div class="old-help-para">							<a name="v_~"></a><code class="help-tag-right">v_~</code>
<code>{Visual}</code>~		Switch case of highlighted text (for <code>{Visual}</code> see
			<a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para">							<a name="v_U"></a><code class="help-tag-right">v_U</code>
<code>{Visual}</code>U		Make highlighted text uppercase (for <code>{Visual}</code> see
			<a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para">							<a name="gU"></a><code class="help-tag-right">gU</code> <a name="uppercase"></a><code class="help-tag">uppercase</code>
gU{motion}		Make <code>{motion}</code> text uppercase.
			Example:<pre>:map! &lt;C-F&gt; &lt;Esc&gt;gUiw`]a</pre></div>
<div class="old-help-para">			This works in Insert mode: press <code>CTRL-F</code> to make the
			word before the cursor uppercase.  Handy to type
			words in lowercase and then make them uppercase.</div>
<div class="old-help-para">gUgU							<a name="gUgU"></a><code class="help-tag-right">gUgU</code> <a name="gUU"></a><code class="help-tag">gUU</code>
gUU			Make current line uppercase.</div>
<div class="old-help-para">							<a name="v_u"></a><code class="help-tag-right">v_u</code>
<code>{Visual}</code>u		Make highlighted text lowercase (for <code>{Visual}</code> see
			<a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para">							<a name="gu"></a><code class="help-tag-right">gu</code> <a name="lowercase"></a><code class="help-tag">lowercase</code>
gu{motion}		Make <code>{motion}</code> text lowercase.</div>
<div class="old-help-para">gugu							<a name="gugu"></a><code class="help-tag-right">gugu</code> <a name="guu"></a><code class="help-tag">guu</code>
guu			Make current line lowercase.</div>
<div class="old-help-para">							<a name="g%3F"></a><code class="help-tag-right">g?</code> <a name="rot13"></a><code class="help-tag">rot13</code>
g?{motion}		Rot13 encode <code>{motion}</code> text.</div>
<div class="old-help-para">							<a name="v_g%3F"></a><code class="help-tag-right">v_g?</code>
<code>{Visual}</code>g?		Rot13 encode the highlighted text (for <code>{Visual}</code> see
			<a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para">g?g?							<a name="g%3Fg%3F"></a><code class="help-tag-right">g?g?</code> <a name="g%3F%3F"></a><code class="help-tag">g??</code>
g??			Rot13 encode current line.</div>
<div class="old-help-para">To turn one line into title caps, make every first letter of a word
uppercase:<pre>:s/\v&lt;(.)(\w*)/\u\1\L\2/g</pre>
<div class="help-column_heading">Adding and subtracting</div>							<a name="CTRL-A"></a><code class="help-tag-right">CTRL-A</code>
CTRL-A			Add [count] to the number or alphabetic character at
			or after the cursor.</div>
<div class="old-help-para">                                                       <a name="v_CTRL-A"></a><code class="help-tag-right">v_CTRL-A</code>
<code>{Visual}</code><code>CTRL-A</code>		Add [count] to the number or alphabetic character in
			the highlighted text.</div>
<div class="old-help-para">							<a name="v_g_CTRL-A"></a><code class="help-tag-right">v_g_CTRL-A</code>
<code>{Visual}</code>g <code>CTRL-A</code>	Add [count] to the number or alphabetic character in
			the highlighted text. If several lines are
		        highlighted, each one will be incremented by an
			additional [count] (so effectively creating a
			[count] incrementing sequence).
			For Example, if you have this list of numbers:
<div class="help-column_heading">				1.</div><div class="help-column_heading">				1.</div><div class="help-column_heading">				1.</div><div class="help-column_heading">				1.</div>			Move to the second "1." and Visually select three
			lines, pressing g <code>CTRL-A</code> results in:
<div class="help-column_heading">				1.</div><div class="help-column_heading">				2.</div><div class="help-column_heading">				3.</div><div class="help-column_heading">				4.</div></div>
<div class="old-help-para">							<a name="CTRL-X"></a><code class="help-tag-right">CTRL-X</code>
CTRL-X			Subtract [count] from the number or alphabetic
			character at or after the cursor.</div>
<div class="old-help-para">							<a name="v_CTRL-X"></a><code class="help-tag-right">v_CTRL-X</code>
<code>{Visual}</code><code>CTRL-X</code>		Subtract [count] from the number or alphabetic
			character in the highlighted text.</div>
<div class="old-help-para">							<a name="v_g_CTRL-X"></a><code class="help-tag-right">v_g_CTRL-X</code>
<code>{Visual}</code>g <code>CTRL-X</code>	Subtract [count] from the number or alphabetic
			character in the highlighted text. If several lines
			are highlighted, each value will be decremented by an
			additional [count] (so effectively creating a [count]
			decrementing sequence).</div>
<div class="old-help-para">The <code>CTRL-A</code> and <code>CTRL-X</code> commands work for (signed) decimal numbers, unsigned
binary/octal/hexadecimal numbers and alphabetic characters.</div>
<div class="old-help-para">This depends on the <a href="/neovim-docs-web/en/options#'nrformats'">'nrformats'</a> option:
<div class="help-li" style=""> When <a href="/neovim-docs-web/en/options#'nrformats'">'nrformats'</a> includes "bin", Vim assumes numbers starting with '0b' or
  '0B' are binary.
</div><div class="help-li" style=""> When <a href="/neovim-docs-web/en/options#'nrformats'">'nrformats'</a> includes "octal", Vim considers numbers starting with a '0'
  to be octal, unless the number includes a '8' or '9'.  Other numbers are
  decimal and may have a preceding minus sign.
  If the cursor is on a number, the commands apply to that number; otherwise
  Vim uses the number to the right of the cursor.
</div><div class="help-li" style=""> When <a href="/neovim-docs-web/en/options#'nrformats'">'nrformats'</a> includes "hex", Vim assumes numbers starting with '0x' or
  '0X' are hexadecimal.  The case of the rightmost letter in the number
  determines the case of the resulting hexadecimal number.  If there is no
  letter in the current number, Vim uses the previously detected case.
</div><div class="help-li" style=""> When <a href="/neovim-docs-web/en/options#'nrformats'">'nrformats'</a> includes "alpha", Vim will change the alphabetic character
  under or after the cursor.  This is useful to make lists with an alphabetic
  index.
</div></div>
<div class="old-help-para">For decimals a leading negative sign is considered for incrementing or
decrementing, for binary, octal and hex values, it won't be considered.  To
ignore the sign Visually select the number before using <code>CTRL-A</code> or <code>CTRL-X</code>.</div>
<div class="old-help-para">For numbers with leading zeros (including all octal and hexadecimal numbers),
Vim preserves the number of characters in the number when possible.  <code>CTRL-A</code> on
"0077" results in "0100", <code>CTRL-X</code> on "0x100" results in "0x0ff".
There is one exception: When a number that starts with a zero is found not to
be octal (it contains a '8' or '9'), but <a href="/neovim-docs-web/en/options#'nrformats'">'nrformats'</a> does include "octal",
leading zeros are removed to avoid that the result may be recognized as an
octal number.</div>
<div class="old-help-para">Note that when <a href="/neovim-docs-web/en/options#'nrformats'">'nrformats'</a> includes "octal", decimal numbers with leading
zeros cause mistakes, because they can be confused with octal numbers.</div>
<div class="old-help-para">Note similarly, when <a href="/neovim-docs-web/en/options#'nrformats'">'nrformats'</a> includes "bin", binary numbers with a leading
'0x' or '0X' can be interpreted as hexadecimal rather than binary since '0b'
are valid hexadecimal digits.</div>
<div class="old-help-para">The <code>CTRL-A</code> command is very useful in a macro.  Example: Use the following
steps to make a numbered list.</div>
<div class="old-help-para">1. Create the first list entry, make sure it starts with a number.
2. qa	     - start recording into register 'a'
3. Y	     - yank the entry
4. p	     - put a copy of the entry below the first one
5. <code>CTRL-A</code>    - increment the number
6. q	     - stop recording
7. <code>&lt;count&gt;</code>@a - repeat the yank, put and increment <code>&lt;count&gt;</code> times</div>
<div class="old-help-para"><h3 class="help-heading">SHIFTING LINES LEFT OR RIGHT<span class="help-heading-tags">				<a name="shift-left-right"></a><span class="help-tag">shift-left-right</span></span></h3></div>
<div class="old-help-para">							<a name="%3C"></a><code class="help-tag-right">&lt;</code>
 &lt;{motion}		Shift <code>{motion}</code> lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> leftwards.</div>
<div class="old-help-para">			If the <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> option is set to zero, the amount
			of indent is calculated at the first non-blank
			character in the line.
							<a name="%3C%3C"></a><code class="help-tag-right">&lt;&lt;</code>
 &lt;&lt;			Shift [count] lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> leftwards.</div>
<div class="old-help-para">							<a name="v_%3C"></a><code class="help-tag-right">v_&lt;</code>
<code>{Visual}</code>[count]&lt;	Shift the highlighted lines [count] <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>
			leftwards (for <code>{Visual}</code> see <a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para">							<a name="%3E"></a><code class="help-tag-right">&gt;</code>
 &gt;<code>{motion}</code>		Shift <code>{motion}</code> lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> rightwards.</div>
<div class="old-help-para">			If the <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> option is set to zero, the amount
			of indent is calculated at the first non-blank
			character in the line.
							<a name="%3E%3E"></a><code class="help-tag-right">&gt;&gt;</code>
 &gt;&gt;			Shift [count] lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> rightwards.</div>
<div class="old-help-para">							<a name="v_%3E"></a><code class="help-tag-right">v_&gt;</code>
<code>{Visual}</code>[count]&gt;	Shift the highlighted lines [count] <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>
			rightwards (for <code>{Visual}</code> see <a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para">							<a name="%3A%3C"></a><code class="help-tag-right">:&lt;</code>
:[range]&lt;		Shift [range] lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> left.  Repeat '&lt;'
			for shifting multiple <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>s.</div>
<div class="old-help-para">:[range]&lt; <code>{count}</code>	Shift <code>{count}</code> lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> left, starting
			with [range] (default current line <a href="/neovim-docs-web/en/cmdline#cmdline-ranges">cmdline-ranges</a>).
			Repeat '&lt;' for shifting multiple <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>s.</div>
<div class="old-help-para">:[range]le[ft] [indent]	left align lines in [range].  Sets the indent in the
			lines to [indent] (default 0).</div>
<div class="old-help-para">							<a name="%3A%3E"></a><code class="help-tag-right">:&gt;</code>
:[range]&gt; [flags]	Shift <code>{count}</code> [range] lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> right.
			Repeat '&gt;' for shifting multiple <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>s.
			See <a href="/neovim-docs-web/en/cmdline#ex-flags">ex-flags</a> for [flags].</div>
<div class="old-help-para">:[range]&gt; <code>{count}</code> [flags]
			Shift <code>{count}</code> lines one <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> right, starting
			with [range] (default current line <a href="/neovim-docs-web/en/cmdline#cmdline-ranges">cmdline-ranges</a>).
			Repeat '&gt;' for shifting multiple <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>s.
			See <a href="/neovim-docs-web/en/cmdline#ex-flags">ex-flags</a> for [flags].</div>
<div class="old-help-para">The "&gt;" and "&lt;" commands are handy for changing the indentation within
programs.  Use the <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> option to set the size of the white space
which these commands insert or delete.  Normally the <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> option is 8,
but you can set it to, say, 3 to make smaller indents.  The shift leftwards
stops when there is no indent.  The shift right does not affect empty lines.</div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'shiftround'">'shiftround'</a> option is on, the indent is rounded to a multiple of
<a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>.</div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a> option is on, or <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> is on and <a href="/neovim-docs-web/en/options#'cinkeys'">'cinkeys'</a> contains
'#' with a zero value, shift right does not affect lines starting with '#'
(these are supposed to be C preprocessor lines that must stay in column 1).
This can be changed with the <a href="/neovim-docs-web/en/options#'cino'">'cino'</a> option, see <a href="/neovim-docs-web/en/indent#cino-%23">cino-#</a>.</div>
<div class="old-help-para">When the <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> option is off (this is the default) Vim uses <code>&lt;Tab&gt;</code>s as
much as possible to make the indent.  You can use "&gt;&gt;&lt;&lt;" to replace an indent
made out of spaces with the same indent made out of <code>&lt;Tab&gt;</code>s (and a few spaces
if necessary).  If the <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> option is on, Vim uses only spaces.  Then
you can use "&gt;&gt;&lt;&lt;" to replace <code>&lt;Tab&gt;</code>s in the indent by spaces (or use
<code>:retab!</code>).</div>
<div class="old-help-para">To move a line several <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>s, use Visual mode or the <code>:</code> commands.
For example:<pre>Vjj4&gt;                move three lines 4 indents to the right
:&lt;&lt;&lt;                move current line 3 indents to the left
:&gt;&gt; 5                move 5 lines 2 indents to the right
:5&gt;&gt;                move line 5 2 indents to the right</pre>
<h2 class="help-heading">4. Complex changes<span class="help-heading-tags">					<a name="complex-change"></a><span class="help-tag">complex-change</span></span></h2></div>
<div class="old-help-para">4.1 Filter commands					<a name="filter"></a><code class="help-tag-right">filter</code></div>
<div class="old-help-para">A filter is a program that accepts text at standard input, changes it in some
way, and sends it to standard output.  You can use the commands below to send
some text through a filter, so that it is replaced by the filter output.
Examples of filters are "sort", which sorts lines alphabetically, and
"indent", which formats C program files (you need a version of indent that
works like a filter; not all versions do).  The <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> option specifies the
shell Vim uses to execute the filter command.  You can repeat filter commands
with ".".  Vim does not recognize a comment (starting with '"') after the
<code>:!</code> command.</div>
<div class="old-help-para">							<a name="%21"></a><code class="help-tag-right">!</code>
!{motion}{filter}	Filter <code>{motion}</code> text lines through the external
			program <code>{filter}</code>.</div>
<div class="old-help-para">							<a name="%21%21"></a><code class="help-tag-right">!!</code>
!!{filter}		Filter [count] lines through the external program
			<code>{filter}</code>.</div>
<div class="old-help-para">							<a name="v_%21"></a><code class="help-tag-right">v_!</code>
<code>{Visual}</code>!{filter}	Filter the highlighted lines through the external
			program <code>{filter}</code> (for <code>{Visual}</code> see <a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para">:{range}![!]{filter} [!][arg]				<a name="%3Arange%21"></a><code class="help-tag-right">:range!</code>
			Filter <code>{range}</code> lines through the external program
			<code>{filter}</code>.  Vim replaces the optional bangs with the
			latest given command and appends the optional [arg].
			Vim saves the output of the filter command in a
			temporary file and then reads the file into the buffer
			<a href="/neovim-docs-web/en/change#tempfile">tempfile</a>.  Vim uses the <a href="/neovim-docs-web/en/options#'shellredir'">'shellredir'</a> option to
			redirect the filter output to the temporary file.
			However, if the <a href="/neovim-docs-web/en/options#'shelltemp'">'shelltemp'</a> option is off then pipes
			are used when possible (on Unix).
			When the 'R' flag is included in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> marks in
			the filtered lines are deleted, unless the
			<a href="/neovim-docs-web/en/motion#%3Akeepmarks">:keepmarks</a> command is used.  Example:<pre>:keepmarks '&lt;,'&gt;!sort</pre></div>
<div class="old-help-para">			When the number of lines after filtering is less than
			before, marks in the missing lines are deleted anyway.</div>
<div class="old-help-para">							<a name="%3D"></a><code class="help-tag-right">=</code>
={motion}		Filter <code>{motion}</code> lines through the external program
			given with the <a href="/neovim-docs-web/en/options#'equalprg'">'equalprg'</a> option.  When the <a href="/neovim-docs-web/en/options#'equalprg'">'equalprg'</a>
			option is empty (this is the default), use the
			internal formatting function <a href="/neovim-docs-web/en/indent#C-indenting">C-indenting</a> and
			<a href="/neovim-docs-web/en/options#'lisp'">'lisp'</a>.  But when <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> is not empty, it will
			be used instead <a href="/neovim-docs-web/en/indent#indent-expression">indent-expression</a>.</div>
<div class="old-help-para">							<a name="%3D%3D"></a><code class="help-tag-right">==</code>
==			Filter [count] lines like with ={motion}.</div>
<div class="old-help-para">							<a name="v_%3D"></a><code class="help-tag-right">v_=</code>
<code>{Visual}</code>=		Filter the highlighted lines like with ={motion}.</div>
<div class="old-help-para">						<a name="tempfile"></a><code class="help-tag-right">tempfile</code> <a name="setuid"></a><code class="help-tag">setuid</code>
Vim uses temporary files for filtering, generating diffs and also for
tempname().  For Unix, the file will be in a private directory (only
accessible by the current user) to avoid security problems (e.g., a symlink
attack or other people reading your file).  When Vim exits the directory and
all files in it are deleted.  When Vim has the setuid bit set this may cause
problems, the temp file is owned by the setuid user but the filter command
probably runs as the original user.
Directory for temporary files is created in the first possible directory of:
	Unix:    $TMPDIR, /tmp, current-dir, $HOME.
	Windows: $TMPDIR, $TMP, $TEMP, $USERPROFILE, current-dir.</div>
<div class="old-help-para">4.2 Substitute						<a name="%3Asubstitute"></a><code class="help-tag-right">:substitute</code>
							<a name="%3As"></a><code class="help-tag-right">:s</code> <a name="%3Asu"></a><code class="help-tag">:su</code>
:[range]s[ubstitute]/{pattern}/{string}/[flags] [count]
			For each line in [range] replace a match of <code>{pattern}</code>
			with <code>{string}</code>.
			For the <code>{pattern}</code> see <a href="/neovim-docs-web/en/pattern#pattern">pattern</a>.
			<code>{string}</code> can be a literal string, or something
			special; see <a href="/neovim-docs-web/en/change#sub-replace-special">sub-replace-special</a>.
			When [range] and [count] are omitted, replace in the
			current line only.  When [count] is given, replace in
			[count] lines, starting with the last line in [range].
			When [range] is omitted start in the current line.
							<a name="E939"></a><code class="help-tag-right">E939</code>
			[count] must be a positive number.  Also see
			<a href="/neovim-docs-web/en/cmdline#cmdline-ranges">cmdline-ranges</a>.</div>
<div class="old-help-para">			See <a href="/neovim-docs-web/en/change#%3As_flags">:s_flags</a> for [flags].
			The delimiter doesn't need to be /, see
			<a href="/neovim-docs-web/en/change#pattern-delimiter">pattern-delimiter</a>.</div>
<div class="old-help-para">:[range]s[ubstitute] [flags] [count]
:[range]&amp;[&amp;][flags] [count]					<a name="%3A%26"></a><code class="help-tag-right">:&amp;</code>
			Repeat last :substitute with same search pattern and
			substitute string, but without the same flags.  You
			may add [flags], see <a href="/neovim-docs-web/en/change#%3As_flags">:s_flags</a>.
			Note that after <code>:substitute</code> the '&amp;' flag can't be
			used, it's recognized as a pattern separator.
			The space between <code>:substitute</code> and the 'c', 'g',
			'i', 'I' and 'r' flags isn't required, but in scripts
			it's a good idea to keep it to avoid confusion.
			Also see the two and three letter commands to repeat
			:substitute below <a href="/neovim-docs-web/en/change#%3Asubstitute-repeat">:substitute-repeat</a>.</div>
<div class="old-help-para">:[range]~[&amp;][flags] [count]					<a name="%3A~"></a><code class="help-tag-right">:~</code>
			Repeat last substitute with same substitute string
			but with last used search pattern.  This is like
			<code>:&amp;r</code>.  See <a href="/neovim-docs-web/en/change#%3As_flags">:s_flags</a> for [flags].</div>
<div class="old-help-para">								<a name="%26"></a><code class="help-tag-right">&amp;</code>
&amp;			Synonym for <code>:s</code> (repeat last substitute).  Note
			that the flags are not remembered, thus it might
			actually work differently.  You can use <code>:&amp;&amp;</code> to keep
			the flags.</div>
<div class="old-help-para">								<a name="%26-default"></a><code class="help-tag-right">&amp;-default</code>
			Mapped to ":&amp;&amp;&lt;CR&gt;" by default. <a href="/neovim-docs-web/en/vim_diff#default-mappings">default-mappings</a></div>
<div class="old-help-para">								<a name="g%26"></a><code class="help-tag-right">g&amp;</code>
g&amp;			Synonym for <code>:%s//~/&amp;</code> (repeat last substitute with
			last search pattern on all lines with the same flags).
			For example, when you first do a substitution with
			<code>:s/pattern/repl/flags</code> and then <code>/search</code> for
			something else, <code>g&amp;</code> will do <code>:%s/search/repl/flags</code>.
			Mnemonic: global substitute.</div>
<div class="old-help-para">						<a name="%3Asnomagic"></a><code class="help-tag-right">:snomagic</code> <a name="%3Asno"></a><code class="help-tag">:sno</code>
:[range]sno[magic] ...	Same as <code>:substitute</code>, but always use <a href="/neovim-docs-web/en/options#'nomagic'">'nomagic'</a>.</div>
<div class="old-help-para">						<a name="%3Asmagic"></a><code class="help-tag-right">:smagic</code> <a name="%3Asm"></a><code class="help-tag">:sm</code>
:[range]sm[agic] ...	Same as <code>:substitute</code>, but always use <a href="/neovim-docs-web/en/options#'magic'">'magic'</a>.</div>
<div class="old-help-para">							<a name="%3As_flags"></a><code class="help-tag-right">:s_flags</code>
The flags that you can use for the substitute commands:</div>
<div class="old-help-para">							<a name="%3A%26%26"></a><code class="help-tag-right">:&amp;&amp;</code>
[&amp;]	Must be the first one: Keep the flags from the previous substitute
	command.  Examples:<pre>:&amp;&amp;
:s/this/that/&amp;</pre></div>
<div class="old-help-para">	Note that <code>:s</code> and <code>:&amp;</code> don't keep the flags.</div>
<div class="old-help-para">[c]	Confirm each substitution.  Vim highlights the matching string (with
	<a href="/neovim-docs-web/en/syntax#hl-IncSearch">hl-IncSearch</a>).  You can type:				<a name="%3As_c"></a><code class="help-tag-right">:s_c</code>
	    'y'	    to substitute this match
	    'l'	    to substitute this match and then quit ("last")
	    'n'	    to skip this match
	    <code>&lt;Esc&gt;</code>   to quit substituting
	    'a'	    to substitute this and all remaining matches
	    'q'	    to quit substituting
	    <code>CTRL-E</code>  to scroll the screen up
	    <code>CTRL-Y</code>  to scroll the screen down</div>
<div class="old-help-para">							<a name="%3As_e"></a><code class="help-tag-right">:s_e</code>
[e]     When the search pattern fails, do not issue an error message and, in
	particular, continue in maps as if no error occurred.  This is most
	useful to prevent the "No match" error from breaking a mapping.  Vim
	does not suppress the following error messages, however:
		Regular expressions can't be delimited by letters
		\ should be followed by /, ? or &amp;
		No previous substitute regular expression
		Trailing characters
		Interrupted</div>
<div class="old-help-para">							<a name="%3As_g"></a><code class="help-tag-right">:s_g</code>
[g]	Replace all occurrences in the line.  Without this argument,
	replacement occurs only for the first occurrence in each line.  If the
	<a href="/neovim-docs-web/en/options#'gdefault'">'gdefault'</a> option is on, this flag is on by default and the [g]
	argument switches it off.</div>
<div class="old-help-para">							<a name="%3As_i"></a><code class="help-tag-right">:s_i</code>
[i]	Ignore case for the pattern.  The <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> and <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> options
	are not used.</div>
<div class="old-help-para">							<a name="%3As_I"></a><code class="help-tag-right">:s_I</code>
[I]	Don't ignore case for the pattern.  The <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> and <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a>
	options are not used.</div>
<div class="old-help-para">							<a name="%3As_n"></a><code class="help-tag-right">:s_n</code>
[n]	Report the number of matches, do not actually substitute.  The [c]
	flag is ignored.  The matches are reported as if <a href="/neovim-docs-web/en/options#'report'">'report'</a> is zero.
	Useful to <a href="/neovim-docs-web/en/tips#count-items">count-items</a>.
	If \= <a href="/neovim-docs-web/en/change#sub-replace-expression">sub-replace-expression</a> is used, the expression will be
	evaluated in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a> at every match.</div>
<div class="old-help-para">[p]	Print the line containing the last substitute.  <a name="%3As_p"></a><code class="help-tag">:s_p</code></div>
<div class="old-help-para">[#]	Like [p] and prepend the line number.  <a name="%3As_%23"></a><code class="help-tag">:s_#</code></div>
<div class="old-help-para">[l]	Like [p] but print the text like <a href="/neovim-docs-web/en/various#%3Alist">:list</a>.  <a name="%3As_l"></a><code class="help-tag">:s_l</code></div>
<div class="old-help-para">							<a name="%3As_r"></a><code class="help-tag-right">:s_r</code>
[r]	Only useful in combination with <code>:&amp;</code> or <code>:s</code> without arguments.  <code>:&amp;r</code>
	works the same way as <code>:~</code>:  When the search pattern is empty, use the
	previously used search pattern instead of the search pattern from the
	last substitute or <code>:global</code>.  If the last command that did a search
	was a substitute or <code>:global</code>, there is no effect.  If the last
	command was a search command such as "/", use the pattern from that
	command.
	For <code>:s</code> with an argument this already happens:<pre>:s/blue/red/
/green
:s//red/   or  :~   or  :&amp;r</pre></div>
<div class="old-help-para">	The last commands will replace "green" with "red".<pre>:s/blue/red/
/green
:&amp;</pre></div>
<div class="old-help-para">	The last command will replace "blue" with "red".</div>
<div class="old-help-para">Note that there is no flag to change the "magicness" of the pattern.  A
different command is used instead, or you can use <a href="/neovim-docs-web/en/pattern#%2F%5Cv">/\v</a> and friends.  The
reason is that the flags can only be found by skipping the pattern, and in
order to skip the pattern the "magicness" must be known.  Catch 22!</div>
<div class="old-help-para">If the <code>{pattern}</code> for the substitute command is empty, the command uses the
pattern from the last substitute or <code>:global</code> command.  If there is none, but
there is a previous search pattern, that one is used.  With the [r] flag, the
command uses the pattern from the last substitute, <code>:global</code>, or search
command.</div>
<div class="old-help-para">If the <code>{string}</code> is omitted the substitute is done as if it's empty.  Thus the
matched pattern is deleted.  The separator after <code>{pattern}</code> can also be left
out then.  Example:<pre>:%s/TESTING</pre>
This deletes "TESTING" from all lines, but only one per line.</div>
<div class="old-help-para">For compatibility with Vi these two exceptions are allowed:
"\/{string}/" and "\?{string}?" do the same as "//{string}/r".
"\&amp;{string}&amp;" does the same as "//{string}/".
						<a name="pattern-delimiter"></a><code class="help-tag-right">pattern-delimiter</code> <a name="E146"></a><code class="help-tag">E146</code>
Instead of the '/' which surrounds the pattern and replacement string, you can
use another single-byte character.  This is useful if you want to include a
'/' in the search pattern or replacement string.  Example:<pre>:s+/+//+</pre>
You can use most characters, but not an alphanumeric character, '\', '"' or
'|'.</div>
<div class="old-help-para">For the definition of a pattern, see <a href="/neovim-docs-web/en/pattern#pattern">pattern</a>.  In Visual block mode, use
<a href="/neovim-docs-web/en/pattern#%2F%5C%25V">/\%V</a> in the pattern to have the substitute work in the block only.
Otherwise it works on whole lines anyway.</div>
<div class="old-help-para">					<a name="sub-replace-special"></a><code class="help-tag-right">sub-replace-special</code> <a name="%3As%5C%3D"></a><code class="help-tag">:s\=</code>
When the <code>{string}</code> starts with "\=" it is evaluated as an expression, see
<a href="/neovim-docs-web/en/change#sub-replace-expression">sub-replace-expression</a>.  You can use that for complex replacement or special
characters.</div>
<div class="old-help-para">The substitution is limited in recursion to 4 levels. <a name="E1290"></a><code class="help-tag">E1290</code></div>
<div class="old-help-para">Otherwise these characters in <code>{string}</code> have a special meaning:</div>
<div class="old-help-para"><div class="help-column_heading">magic	nomagic	  action</div>  &amp;	  \&amp;	  replaced with the whole matched pattern	     <a name="s%2F%5C%26"></a><code class="help-tag-right">s/\&amp;</code>
 \&amp;	   &amp;	  replaced with &amp;
      \0	  replaced with the whole matched pattern	   <a name="%5C0"></a><code class="help-tag-right">\0</code> <a name="s%2F%5C0"></a><code class="help-tag">s/\0</code>
      \1	  replaced with the matched pattern in the first
		  pair of ()					     <a name="s%2F%5C1"></a><code class="help-tag-right">s/\1</code>
      \2	  replaced with the matched pattern in the second
		  pair of ()					     <a name="s%2F%5C2"></a><code class="help-tag-right">s/\2</code>
      ..	  ..						     <a name="s%2F%5C3"></a><code class="help-tag-right">s/\3</code>
      \9	  replaced with the matched pattern in the ninth
		  pair of ()					     <a name="s%2F%5C9"></a><code class="help-tag-right">s/\9</code>
  ~	  \~	  replaced with the <code>{string}</code> of the previous
		  substitute					     <a name="s~"></a><code class="help-tag-right">s~</code>
 \~	   ~	  replaced with ~				     <a name="s%2F%5C~"></a><code class="help-tag-right">s/\~</code>
      \u	  next character made uppercase			     <a name="s%2F%5Cu"></a><code class="help-tag-right">s/\u</code>
      \U	  following characters made uppercase, until \E      <a name="s%2F%5CU"></a><code class="help-tag">s/\U</code>
      \l	  next character made lowercase			     <a name="s%2F%5Cl"></a><code class="help-tag-right">s/\l</code>
      \L	  following characters made lowercase, until \E      <a name="s%2F%5CL"></a><code class="help-tag">s/\L</code>
      \e	  end of \u, \U, \l and \L (NOTE: not <code>&lt;Esc&gt;</code>!)	     <a name="s%2F%5Ce"></a><code class="help-tag-right">s/\e</code>
      \E	  end of \u, \U, \l and \L			     <a name="s%2F%5CE"></a><code class="help-tag-right">s/\E</code>
      <code>&lt;CR&gt;</code>	  split line in two at this point
		  (Type the <code>&lt;CR&gt;</code> as <code>CTRL-V</code> <code>&lt;Enter&gt;</code>)		     <a name="s%3CCR%3E"></a><code class="help-tag-right">s&lt;CR&gt;</code>
      \r	  idem						     <a name="s%2F%5Cr"></a><code class="help-tag-right">s/\r</code>
      \&lt;CR&gt;	  insert a carriage-return (<code>CTRL-M</code>)
		  (Type the <code>&lt;CR&gt;</code> as <code>CTRL-V</code> <code>&lt;Enter&gt;</code>)		     <a name="s%2F%5C%3CCR%3E"></a><code class="help-tag-right">s/\&lt;CR&gt;</code>
      \n	  insert a <code>&lt;NL&gt;</code> (<code>&lt;NUL&gt;</code> in the file)
		  (does NOT break the line)			     <a name="s%2F%5Cn"></a><code class="help-tag-right">s/\n</code>
      \b	  insert a <code>&lt;BS&gt;</code>					     <a name="s%2F%5Cb"></a><code class="help-tag-right">s/\b</code>
      \t	  insert a <code>&lt;Tab&gt;</code>				     <a name="s%2F%5Ct"></a><code class="help-tag-right">s/\t</code>
      \\	  insert a single backslash			     <a name="s%2F%5C%5C"></a><code class="help-tag-right">s/\\</code>
      \x	  where x is any character not mentioned above:
		  Reserved for future expansion</div>
<div class="old-help-para">The special meaning is also used inside the third argument <code>{sub}</code> of
the <a href="/neovim-docs-web/en/builtin#substitute()">substitute()</a> function with the following exceptions:
<div class="help-li" style=""> A % inserts a percent literally without regard to <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.
</div><div class="help-li" style=""> magic is always set without regard to <a href="/neovim-docs-web/en/options#'magic'">'magic'</a>.
</div><div class="help-li" style=""> A ~ inserts a tilde literally.
</div><div class="help-li" style=""> <code>&lt;CR&gt;</code> and \r inserts a carriage-return (<code>CTRL-M</code>).
</div><div class="help-li" style=""> \&lt;CR&gt; does not have a special meaning. It's just one of \x.
</div></div>
<div class="old-help-para">Examples:<pre>:s/a\|b/xxx\0xxx/g                 modifies "a b"             to "xxxaxxx xxxbxxx"
:s/\([abc]\)\([efg]\)/\2\1/g         modifies "af fa bg" to "fa fa gb"
:s/abcde/abc^Mde/                 modifies "abcde"    to "abc", "de" (two lines)
:s/$/\^M/                         modifies "abcde"    to "abcde^M"
:s/\w\+/\u\0/g                 modifies "bla bla"  to "Bla Bla"
:s/\w\+/\L\u\0/g                 modifies "BLA bla"  to "Bla Bla"</pre>
Note: "\L\u" can be used to capitalize the first letter of a word.  This is
not compatible with Vi and older versions of Vim, where the "\u" would cancel
out the "\L". Same for "\U\l".</div>
<div class="old-help-para">Note: In previous versions <code>CTRL-V</code> was handled in a special way.  Since this is
not Vi compatible, this was removed.  Use a backslash instead.</div>
<div class="old-help-para"><div class="help-column_heading">command		text	result</div>:s/aa/a^Ma/	aa	a&lt;line-break&gt;a
:s/aa/a\^Ma/	aa	a^Ma
:s/aa/a\\^Ma/	aa	a\&lt;line-break&gt;a</div>
<div class="old-help-para">(you need to type <code>CTRL-V</code> <code>&lt;CR&gt;</code> to get a ^M here)</div>
<div class="old-help-para">The numbering of "\1", "\2" etc. is done based on which "\(" comes first in
the pattern (going left to right).  When a parentheses group matches several
times, the last one will be used for "\1", "\2", etc.  Example:<pre>:s/\(\(a[a-d] \)*\)/\2/      modifies "aa ab x" to "ab x"</pre>
The "\2" is for "\(a[a-d] \)".  At first it matches "aa ", secondly "ab ".</div>
<div class="old-help-para">When using parentheses in combination with '|', like in \([ab]\)\|\([cd]\),
either the first or second pattern in parentheses did not match, so either
\1 or \2 is empty.  Example:<pre>:s/\([ab]\)\|\([cd]\)/\1x/g   modifies "a b c d"  to "ax bx x x"</pre></div>
<div class="old-help-para">		<a name="%3Asc"></a><code class="help-tag-right">:sc</code> <a name="%3Asce"></a><code class="help-tag">:sce</code> <a name="%3Ascg"></a><code class="help-tag">:scg</code> <a name="%3Asci"></a><code class="help-tag">:sci</code> <a name="%3AscI"></a><code class="help-tag">:scI</code> <a name="%3Ascl"></a><code class="help-tag">:scl</code> <a name="%3Ascp"></a><code class="help-tag">:scp</code> <a name="%3Asg"></a><code class="help-tag">:sg</code> <a name="%3Asgc"></a><code class="help-tag">:sgc</code>
		<a name="%3Asge"></a><code class="help-tag-right">:sge</code> <a name="%3Asgi"></a><code class="help-tag">:sgi</code> <a name="%3AsgI"></a><code class="help-tag">:sgI</code> <a name="%3Asgl"></a><code class="help-tag">:sgl</code> <a name="%3Asgn"></a><code class="help-tag">:sgn</code> <a name="%3Asgp"></a><code class="help-tag">:sgp</code> <a name="%3Asgr"></a><code class="help-tag">:sgr</code> <a name="%3AsI"></a><code class="help-tag">:sI</code> <a name="%3Asi"></a><code class="help-tag">:si</code>
		<a name="%3Asic"></a><code class="help-tag-right">:sic</code> <a name="%3AsIc"></a><code class="help-tag">:sIc</code> <a name="%3Asie"></a><code class="help-tag">:sie</code> <a name="%3AsIe"></a><code class="help-tag">:sIe</code> <a name="%3AsIg"></a><code class="help-tag">:sIg</code> <a name="%3AsIl"></a><code class="help-tag">:sIl</code> <a name="%3Asin"></a><code class="help-tag">:sin</code> <a name="%3AsIn"></a><code class="help-tag">:sIn</code> <a name="%3AsIp"></a><code class="help-tag">:sIp</code>
		<a name="%3Asip"></a><code class="help-tag-right">:sip</code> <a name="%3AsIr"></a><code class="help-tag">:sIr</code> <a name="%3Asir"></a><code class="help-tag">:sir</code> <a name="%3Asr"></a><code class="help-tag">:sr</code> <a name="%3Asrc"></a><code class="help-tag">:src</code> <a name="%3Asrg"></a><code class="help-tag">:srg</code> <a name="%3Asri"></a><code class="help-tag">:sri</code> <a name="%3AsrI"></a><code class="help-tag">:srI</code> <a name="%3Asrl"></a><code class="help-tag">:srl</code>
		<a name="%3Asrn"></a><code class="help-tag-right">:srn</code> <a name="%3Asrp"></a><code class="help-tag">:srp</code> <a name="%3Asubstitute-repeat"></a><code class="help-tag">:substitute-repeat</code>
<div class="help-column_heading">2-letter and 3-letter :substitute commands</div></div>
<div class="old-help-para">These commands repeat the previous <code>:substitute</code> command with the given flags.
The first letter is always "s", followed by one or two of the possible flag
characters.  For example <code>:sce</code> works like <code>:s///ce</code>.  The table lists the
possible combinations, not all flags are possible, because the command is
short for another command.</div>
<div class="old-help-para">     List of :substitute commands
     |      c    e    g    i    I    n    p    l    r
     | c  :sc  :sce :scg :sci :scI :scn :scp :scl
     | e
     | g  :sgc :sge :sg  :sgi :sgI :sgn :sgp :sgl :sgr
     | i  :sic :sie      :si  :siI :sin :sip      :sir
     | I  :sIc :sIe :sIg :sIi :sI  :sIn :sIp :sIl :sIr
     | n
     | p
     | l
     | r  :src      :srg :sri :srI :srn :srp :srl :sr</div>
<div class="old-help-para">Exceptions:
     :scr  is  <code>:scriptnames</code>
     :se   is  <code>:set</code>
     :sig  is  <code>:sign</code>
     :sil  is  <code>:silent</code>
     :sn   is  <code>:snext</code>
     :sp   is  <code>:split</code>
     :sl   is  <code>:sleep</code>
     :sre  is  <code>:srewind</code></div>
<div class="old-help-para">Substitute with an expression			<a name="sub-replace-expression"></a><code class="help-tag-right">sub-replace-expression</code>
						<a name="sub-replace-%5C%3D"></a><code class="help-tag-right">sub-replace-\=</code> <a name="s%2F%5C%3D"></a><code class="help-tag">s/\=</code>
When the substitute string starts with "\=" the remainder is interpreted as an
expression.</div>
<div class="old-help-para">The special meaning for characters as mentioned at <a href="/neovim-docs-web/en/change#sub-replace-special">sub-replace-special</a> does
not apply except for "&lt;CR&gt;".  A <code>&lt;NL&gt;</code> character is used as a line break, you
can get one with a double-quote string: "\n".  Prepend a backslash to get a
real <code>&lt;NL&gt;</code> character (which will be a NUL in the file).</div>
<div class="old-help-para">The "\=" notation can also be used inside the third argument <code>{sub}</code> of
<a href="/neovim-docs-web/en/builtin#substitute()">substitute()</a> function.  In this case, the special meaning for characters as
mentioned at <a href="/neovim-docs-web/en/change#sub-replace-special">sub-replace-special</a> does not apply at all. Especially, <code>&lt;CR&gt;</code> and
<code>&lt;NL&gt;</code> are interpreted not as a line break but as a carriage-return and a
new-line respectively.</div>
<div class="old-help-para">When the result is a <a href="/neovim-docs-web/en/eval#List">List</a> then the items are joined with separating line
breaks.  Thus each item becomes a line, except that they can contain line
breaks themselves.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/builtin#submatch()">submatch()</a> function can be used to obtain matched text.  The whole
matched text can be accessed with "submatch(0)".  The text matched with the
first pair of () with "submatch(1)".  Likewise for further sub-matches in ().</div>
<div class="old-help-para">Be careful: The separation character must not appear in the expression!
Consider using a character like "@" or ":".  There is no problem if the result
of the expression contains the separation character.</div>
<div class="old-help-para">Examples:<pre>:s@\n@\="\r" .. expand("$HOME") .. "\r"@</pre>
This replaces an end-of-line with a new line containing the value of $HOME.<pre>s/E/\="\&lt;Char-0x20ac&gt;"/g</pre>
This replaces each 'E' character with a euro sign.  Read more in <a href="/neovim-docs-web/en/map#%3CChar-%3E">&lt;Char-&gt;</a>.</div>
<div class="old-help-para">4.3 Changing tabs					<a name="change-tabs"></a><code class="help-tag-right">change-tabs</code>
							<a name="%3Aret"></a><code class="help-tag-right">:ret</code> <a name="%3Aretab"></a><code class="help-tag">:retab</code> <a name="%3Aretab%21"></a><code class="help-tag">:retab!</code>
:[range]ret[ab][!] [new_tabstop]
			Replace all sequences of white-space containing a
			<code>&lt;Tab&gt;</code> with new strings of white-space using the new
			tabstop value given.  If you do not specify a new
			tabstop size or it is zero, Vim uses the current value
			of <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a>.
			The current value of <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> is always used to
			compute the width of existing tabs.
			With !, Vim also replaces strings of only normal
			spaces with tabs where appropriate.
			With <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> on, Vim replaces all tabs with the
			appropriate number of spaces.
			This command sets <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> to the new value given,
			and if performed on the whole file, which is default,
			should not make any visible change.
			Careful: This command modifies any <code>&lt;Tab&gt;</code> characters
			inside of strings in a C program.  Use "\t" to avoid
			this (that's a good habit anyway).
			<code>:retab!</code> may also change a sequence of spaces by
			<code>&lt;Tab&gt;</code> characters, which can mess up a printf().
			A list of tab widths separated by commas may be used
			in place of a single tabstop.  Each value in the list
			represents the width of one tabstop, except the final
			value which applies to all following tabstops.</div>
<div class="old-help-para">							<a name="retab-example"></a><code class="help-tag-right">retab-example</code>
Example for using autocommands and ":retab" to edit a file which is stored
with tabstops at 8 but edited with tabstops set at 4.  Warning: white space
inside of strings can change!  Also see <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> option.<pre>:auto BufReadPost        *.xx        retab! 4
:auto BufWritePre        *.xx        retab! 8
:auto BufWritePost        *.xx        retab! 4
:auto BufNewFile        *.xx        set ts=4</pre>
<h2 class="help-heading">5. Copying and moving text<span class="help-heading-tags">				<a name="copy-move"></a><span class="help-tag">copy-move</span></span></h2></div>
<div class="old-help-para">							<a name="quote"></a><code class="help-tag-right">quote</code>
"{register}		Use <code>{register}</code> for next delete, yank or put.  Use
			an uppercase character to append with delete and yank.
			Registers ".", "%", "#" and ":" only work with put.</div>
<div class="old-help-para">							<a name="%3Areg"></a><code class="help-tag-right">:reg</code> <a name="%3Aregisters"></a><code class="help-tag">:registers</code>
:reg[isters]		Display the type and contents of all numbered and
			named registers.  If a register is written to for
			<a href="/neovim-docs-web/en/various#%3Aredir">:redir</a> it will not be listed.
			Type can be one of:
			"c"	for <a href="/neovim-docs-web/en/motion#characterwise">characterwise</a> text
			"l"	for <a href="/neovim-docs-web/en/motion#linewise">linewise</a> text
			"b"	for <a href="/neovim-docs-web/en/visual#blockwise-visual">blockwise-visual</a> text</div>
<div class="old-help-para">:reg[isters] <code>{arg}</code>	Display the contents of the numbered and named
			registers that are mentioned in <code>{arg}</code>.  For example:<pre>:reg 1a</pre></div>
<div class="old-help-para">			to display registers '1' and 'a'.  Spaces are allowed
			in <code>{arg}</code>.</div>
<div class="old-help-para">							<a name="%3Adi"></a><code class="help-tag-right">:di</code> <a name="%3Adisplay"></a><code class="help-tag">:display</code>
:di[splay] [arg]	Same as :registers.</div>
<div class="old-help-para">							<a name="y"></a><code class="help-tag-right">y</code> <a name="yank"></a><code class="help-tag">yank</code>
["x]y{motion}		Yank <code>{motion}</code> text [into register x].  When no
			characters are to be yanked (e.g., "y0" in column 1),
			this is an error when <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> includes the 'E'
			flag.</div>
<div class="old-help-para">							<a name="yy"></a><code class="help-tag-right">yy</code>
["x]yy			Yank [count] lines [into register x] <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.</div>
<div class="old-help-para">							<a name="Y"></a><code class="help-tag-right">Y</code>
["x]Y			yank [count] lines [into register x] (synonym for
			yy, <a href="/neovim-docs-web/en/motion#linewise">linewise</a>).
							<a name="Y-default"></a><code class="help-tag-right">Y-default</code>
			Mapped to "y$" by default. <a href="/neovim-docs-web/en/vim_diff#default-mappings">default-mappings</a></div>
<div class="old-help-para">							<a name="zy"></a><code class="help-tag-right">zy</code>
["x]zy{motion}		Yank <code>{motion}</code> text [into register x].  Only differs
			from <code>y</code> when selecting a block of text, see <a href="/neovim-docs-web/en/change#v_zy">v_zy</a>.</div>
<div class="old-help-para">							<a name="v_y"></a><code class="help-tag-right">v_y</code>
<code>{Visual}</code>["x]y		Yank the highlighted text [into register x] (for
			<code>{Visual}</code> see <a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para">							<a name="v_Y"></a><code class="help-tag-right">v_Y</code>
<code>{Visual}</code>["x]Y		Yank the highlighted lines [into register x] (for
			<code>{Visual}</code> see <a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para">							<a name="v_zy"></a><code class="help-tag-right">v_zy</code>
<code>{Visual}</code>["x]zy		Yank the highlighted text [into register x].  Trailing
			whitespace at the end of each line of a selected block
			won't be yanked.  Especially useful in combination
			with <code>zp</code>.  (for <code>{Visual}</code> see <a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>)</div>
<div class="old-help-para">							<a name="%3Ay"></a><code class="help-tag-right">:y</code> <a name="%3Ayank"></a><code class="help-tag">:yank</code> <a name="E850"></a><code class="help-tag">E850</code>
:[range]y[ank] [x]	Yank [range] lines [into register x].</div>
<div class="old-help-para">:[range]y[ank] [x] <code>{count}</code>
			Yank <code>{count}</code> lines, starting with last line number
			in [range] (default: current line <a href="/neovim-docs-web/en/cmdline#cmdline-ranges">cmdline-ranges</a>),
			[into register x].</div>
<div class="old-help-para">						<a name="p"></a><code class="help-tag-right">p</code> <a name="put"></a><code class="help-tag">put</code> <a name="E353"></a><code class="help-tag">E353</code> <a name="E1240"></a><code class="help-tag">E1240</code>
["x]p			Put the text [from register x] after the cursor
			[count] times.</div>
<div class="old-help-para">							<a name="P"></a><code class="help-tag-right">P</code>
["x]P			Put the text [from register x] before the cursor
			[count] times.</div>
<div class="old-help-para">							<a name="%3CMiddleMouse%3E"></a><code class="help-tag-right">&lt;MiddleMouse&gt;</code>
["x]&lt;MiddleMouse&gt;	Put the text from a register before the cursor [count]
			times.  Uses the "* register, unless another is
			specified.
			Leaves the cursor at the end of the new text.
			Using the mouse only works when <a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a> contains 'n'
			or 'a'.
			If you have a scrollwheel and often accidentally paste
			text, you can use these mappings to disable the
			pasting with the middle mouse button:<pre>:map &lt;MiddleMouse&gt; &lt;Nop&gt;
:imap &lt;MiddleMouse&gt; &lt;Nop&gt;</pre></div>
<div class="old-help-para">			You might want to disable the multi-click versions
			too, see <a href="/neovim-docs-web/en/term#double-click">double-click</a>.</div>
<div class="old-help-para">							<a name="gp"></a><code class="help-tag-right">gp</code>
["x]gp			Just like "p", but leave the cursor just after the new
			text.</div>
<div class="old-help-para">							<a name="gP"></a><code class="help-tag-right">gP</code>
["x]gP			Just like "P", but leave the cursor just after the new
			text.</div>
<div class="old-help-para">							<a name="%3Apu"></a><code class="help-tag-right">:pu</code> <a name="%3Aput"></a><code class="help-tag">:put</code>
:[line]pu[t] [x]	Put the text [from register x] after [line] (default
			current line).  This always works <a href="/neovim-docs-web/en/motion#linewise">linewise</a>, thus
			this command can be used to put a yanked block as new
			lines.
			If no register is specified, it depends on the <a href="/neovim-docs-web/en/options#'cb'">'cb'</a>
			option: If <a href="/neovim-docs-web/en/options#'cb'">'cb'</a> contains "unnamedplus", paste from the
<div class="help-li" style=""> register <a href="/neovim-docs-web/en/provider#quoteplus">quoteplus</a>.  Otherwise, if <a href="/neovim-docs-web/en/options#'cb'">'cb'</a> contains
			"unnamed", paste from the * register <a href="/neovim-docs-web/en/provider#quotestar">quotestar</a>.
			Otherwise, paste from the unnamed register
			<a href="/neovim-docs-web/en/change#quote_quote">quote_quote</a>.
			The register can also be '=' followed by an optional
			expression.  The expression continues until the end of
			the command.  You need to escape the '|' and '"'
			characters to prevent them from terminating the
			command.  Example:<pre>:put ='path' .. \",/test\"</pre>
</div></div>
<div class="old-help-para">			If there is no expression after '=', Vim uses the
			previous expression.  You can see it with ":dis =".</div>
<div class="old-help-para">:[line]pu[t]! [x]	Put the text [from register x] before [line] (default
			current line).</div>
<div class="old-help-para">["x]]p		    or					<a name="%5Dp"></a><code class="help-tag-right">]p</code> <a name="%5D%3CMiddleMouse%3E"></a><code class="help-tag">]&lt;MiddleMouse&gt;</code>
["x]]&lt;MiddleMouse&gt;	Like "p", but adjust the indent to the current line.
			Using the mouse only works when <a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a> contains 'n'
			or 'a'.</div>
<div class="old-help-para">["x][P		    or					<a name="%5BP"></a><code class="help-tag-right">[P</code>
["x]]P		    or					<a name="%5DP"></a><code class="help-tag-right">]P</code>
["x][p		    or					<a name="%5Bp"></a><code class="help-tag-right">[p</code> <a name="%5B%3CMiddleMouse%3E"></a><code class="help-tag">[&lt;MiddleMouse&gt;</code>
["x][&lt;MiddleMouse&gt;	Like "P", but adjust the indent to the current line.
			Using the mouse only works when <a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a> contains 'n'
			or 'a'.</div>
<div class="old-help-para">["x]zp		    or					<a name="zp"></a><code class="help-tag-right">zp</code> <a name="zP"></a><code class="help-tag">zP</code>
["x]zP			Like "p" and "P", except without adding trailing spaces
			when pasting a block.  Thus the inserted text will not
			always be a rectangle.  Especially useful in
			combination with <a href="/neovim-docs-web/en/change#v_zy">v_zy</a>.</div>
<div class="old-help-para">You can use these commands to copy text from one place to another.  Do this
by first getting the text into a register with a yank, delete or change
command, then inserting the register contents with a put command.  You can
also use these commands to move text from one file to another, because Vim
preserves all registers when changing buffers (the <code>CTRL-^</code> command is a quick
way to toggle between two files).</div>
<div class="old-help-para">				<a name="linewise-register"></a><code class="help-tag-right">linewise-register</code> <a name="charwise-register"></a><code class="help-tag">charwise-register</code>
You can repeat the put commands with "." (except for :put) and undo them.  If
the command that was used to get the text into the register was <a href="/neovim-docs-web/en/motion#linewise">linewise</a>,
Vim inserts the text below ("p") or above ("P") the line where the cursor is.
Otherwise Vim inserts the text after ("p") or before ("P") the cursor.  With
the ":put" command, Vim always inserts the text in the next line.  You can
exchange two characters with the command sequence "xp".  You can exchange two
lines with the command sequence "ddp".  You can exchange two words with the
command sequence "deep" (start with the cursor in the blank space before the
first word).  You can use the "']" or "`]" command after the put command to
move the cursor to the end of the inserted text, or use "'[" or "`[" to move
the cursor to the start.</div>
<div class="old-help-para">						<a name="put-Visual-mode"></a><code class="help-tag-right">put-Visual-mode</code> <a name="v_p"></a><code class="help-tag">v_p</code> <a name="v_P"></a><code class="help-tag">v_P</code>
When using a put command like <a href="/neovim-docs-web/en/change#p">p</a> or <a href="/neovim-docs-web/en/change#P">P</a> in Visual mode, Vim will try to
replace the selected text with the contents of the register.  Whether this
works well depends on the type of selection and the type of the text in the
register.  With blockwise selection it also depends on the size of the block
and whether the corners are on an existing character.  (Implementation detail:
it actually works by first putting the register after the selection and then
deleting the selection.)
With <a href="/neovim-docs-web/en/change#p">p</a> the previously selected text is put in the unnamed register (and
possibly the selection and/or clipboard).  This is useful if you want to put
that text somewhere else.  But you cannot repeat the same change.
With <a href="/neovim-docs-web/en/change#P">P</a> the unnamed register is not changed (and neither the selection or
clipboard), you can repeat the same change. But the deleted text cannot be
used.  If you do need it you can use <a href="/neovim-docs-web/en/change#p">p</a> with another register.  E.g., yank
the text to copy, Visually select the text to replace and use "0p .  You can
repeat this as many times as you like, and the unnamed register will be
changed each time.
							<a name="blockwise-put"></a><code class="help-tag-right">blockwise-put</code>
When a register contains text from one line (characterwise), using a
blockwise Visual selection, putting that register will paste that text
repeatedly in each of the selected lines, thus replacing the blockwise
selected region by multiple copies of the register text.  For example:
<div class="help-li" style=""> yank the word "TEXT" into a register with <code>yw</code>
</div><div class="help-li" style=""> select a visual block, marked with "v" in this text:
	    aaavvaaa
	    bbbvvbbb
	    cccvvccc
</div><div class="help-li" style=""> press <code>p</code>, results in:
	    aaaTEXTaaa
	    bbbTEXTbbb
	    cccTEXTccc
</div></div>
<div class="old-help-para">							<a name="blockwise-register"></a><code class="help-tag-right">blockwise-register</code>
If you use a blockwise Visual mode command to get the text into the register,
the block of text will be inserted before ("P") or after ("p") the cursor
column in the current and next lines.  Vim makes the whole block of text start
in the same column.  Thus the inserted text looks the same as when it was
yanked or deleted.  Vim may replace some <code>&lt;Tab&gt;</code> characters with spaces to make
this happen.  However, if the width of the block is not a multiple of a <code>&lt;Tab&gt;</code>
width and the text after the inserted block contains <code>&lt;Tab&gt;</code>s, that text may be
misaligned.</div>
<div class="old-help-para">Use <a href="/neovim-docs-web/en/change#zP">zP</a>/|zp| to paste a blockwise yanked register without appending trailing
spaces.</div>
<div class="old-help-para">Note that after a charwise yank command, Vim leaves the cursor on the first
yanked character that is closest to the start of the buffer.  This means that
"yl" doesn't move the cursor, but "yh" moves the cursor one character left.
Rationale:	In Vi the "y" command followed by a backwards motion would
		sometimes not move the cursor to the first yanked character,
		because redisplaying was skipped.  In Vim it always moves to
		the first character, as specified by Posix.
With a linewise yank command the cursor is put in the first line, but the
column is unmodified, thus it may not be on the first yanked character.</div>
<div class="old-help-para">There are ten types of registers:		<a name="registers"></a><code class="help-tag-right">registers</code> <a name="%7Bregister%7D"></a><code class="help-tag">{register}</code> <a name="E354"></a><code class="help-tag">E354</code>
1. The unnamed register ""
2. 10 numbered registers "0 to "9
3. The small delete register "-
4. 26 named registers "a to "z or "A to "Z
5. Three read-only registers ":, "., "%
6. Alternate buffer register "#
7. The expression register "=
8. The selection registers "* and "+
9. The black hole register "_
10. Last search pattern register "/</div>
<div class="old-help-para">1. Unnamed register ""				<a name="quote_quote"></a><code class="help-tag-right">quote_quote</code> <a name="quotequote"></a><code class="help-tag">quotequote</code>
Vim fills this register with text deleted with the "d", "c", "s", "x" commands
or copied with the yank "y" command, regardless of whether or not a specific
register was used (e.g.  "xdd).  This is like the unnamed register is pointing
to the last used register.  Thus when appending using an uppercase register
name, the unnamed register contains the same text as the named register.
An exception is the '_' register: "_dd does not store the deleted text in any
register.
Vim uses the contents of the unnamed register for any put command (p or P)
which does not specify a register.  Additionally you can access it with the
name '"'.  This means you have to type two double quotes.  Writing to the ""
register writes to register "0.</div>
<div class="old-help-para">2. Numbered registers "0 to "9		<a name="quote_number"></a><code class="help-tag-right">quote_number</code> <a name="quote0"></a><code class="help-tag">quote0</code> <a name="quote1"></a><code class="help-tag">quote1</code>
					<a name="quote2"></a><code class="help-tag-right">quote2</code> <a name="quote3"></a><code class="help-tag">quote3</code> <a name="quote4"></a><code class="help-tag">quote4</code> <a name="quote9"></a><code class="help-tag">quote9</code>
Vim fills these registers with text from yank and delete commands.
   Numbered register 0 contains the text from the most recent yank command,
unless the command specified another register with ["x].
   Numbered register 1 contains the text deleted by the most recent delete or
change command, unless the command specified another register or the text is
less than one line (the small delete register is used then).  An exception is
made for the delete operator with these movement commands: <a href="/neovim-docs-web/en/motion#%25">%</a>, <a href="/neovim-docs-web/en/motion#(">(</a>, <a href="/neovim-docs-web/en/motion#)">)</a>, <a href="/neovim-docs-web/en/motion#%60">`</a>,
<a href="/neovim-docs-web/en/pattern#%2F">/</a>, <a href="/neovim-docs-web/en/pattern#%3F">?</a>, <a href="/neovim-docs-web/en/pattern#n">n</a>, <a href="/neovim-docs-web/en/pattern#N">N</a>, <a href="/neovim-docs-web/en/motion#%7B">{</a> and <a href="/neovim-docs-web/en/motion#%7D">}</a>.  Register "1 is always used then (this is Vi
compatible).  The "- register is used as well if the delete is within a line.
Note that these characters may be mapped.  E.g. <a href="/neovim-docs-web/en/motion#%25">%</a> is mapped by the matchit
plugin.
   With each successive deletion or change, Vim shifts the previous contents
of register 1 into register 2, 2 into 3, and so forth, losing the previous
contents of register 9.</div>
<div class="old-help-para">3. Small delete register "-				<a name="quote_-"></a><code class="help-tag-right">quote_-</code> <a name="quote-"></a><code class="help-tag">quote-</code>
This register contains text from commands that delete less than one line,
except when the command specifies a register with ["x].</div>
<div class="old-help-para">4. Named registers "a to "z or "A to "Z			<a name="quote_alpha"></a><code class="help-tag-right">quote_alpha</code> <a name="quotea"></a><code class="help-tag">quotea</code>
Vim fills these registers only when you say so.  Specify them as lowercase
letters to replace their previous contents or as uppercase letters to append
to their previous contents.  When the '&gt;' flag is present in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> then
a line break is inserted before the appended text.</div>
<div class="old-help-para">5. Read-only registers ":, ". and "%
These are '%', ':' and '.'.  You can use them only with the "p", "P",
and ":put" commands and with <code>CTRL-R</code>.
						<a name="quote_."></a><code class="help-tag-right">quote_.</code> <a name="quote."></a><code class="help-tag">quote.</code> <a name="E29"></a><code class="help-tag">E29</code>
	".	Contains the last inserted text (the same as what is inserted
		with the insert mode commands <code>CTRL-A</code> and <code>CTRL-@</code>).  Note: this
		doesn't work with <code>CTRL-R</code> on the command-line.  It works a bit
		differently, like inserting the text instead of putting it
		(<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> and other options affect what is inserted).
							<a name="quote_%25"></a><code class="help-tag-right">quote_%</code> <a name="quote%25"></a><code class="help-tag">quote%</code>
	"%	Contains the name of the current file.
						<a name="quote_%3A"></a><code class="help-tag-right">quote_:</code> <a name="quote%3A"></a><code class="help-tag">quote:</code> <a name="E30"></a><code class="help-tag">E30</code>
	":	Contains the most recent executed command-line.  Example: Use
		"@:" to repeat the previous command-line command.
		The command-line is only stored in this register when at least
		one character of it was typed.  Thus it remains unchanged if
		the command was completely from a mapping.</div>
<div class="old-help-para">							<a name="quote_%23"></a><code class="help-tag-right">quote_#</code> <a name="quote%23"></a><code class="help-tag">quote#</code>
6. Alternate file register "#
Contains the name of the alternate file for the current window.  It will
change how the <a href="/neovim-docs-web/en/editing#CTRL-%5E">CTRL-^</a> command works.
This register is writable, mainly to allow for restoring it after a plugin has
changed it.  It accepts buffer number:<pre>let altbuf = bufnr(@#)
...
let @# = altbuf</pre>
It will give error <a href="/neovim-docs-web/en/windows#E86">E86</a> if you pass buffer number and this buffer does not
exist.
It can also accept a match with an existing buffer name:<pre>let @# = 'buffer_name'</pre>
Error <a href="/neovim-docs-web/en/windows#E93">E93</a> if there is more than one buffer matching the given name or <a href="/neovim-docs-web/en/windows#E94">E94</a>
if none of buffers matches the given name.</div>
<div class="old-help-para">7. Expression register "=			<a name="quote_%3D"></a><code class="help-tag-right">quote_=</code> <a name="quote%3D"></a><code class="help-tag">quote=</code> <a name="%40%3D"></a><code class="help-tag">@=</code>
This is not really a register that stores text, but is a way to use an
expression in commands which use a register.  The expression register is
read-write.</div>
<div class="old-help-para">When typing the '=' after " or <code>CTRL-R</code> the cursor moves to the command-line,
where you can enter any expression (see <a href="/neovim-docs-web/en/eval#expression">expression</a>).  All normal
command-line editing commands are available, including a special history for
expressions.  When you end the command-line by typing <code>&lt;CR&gt;</code>, Vim computes the
result of the expression.  If you end it with <code>&lt;Esc&gt;</code>, Vim abandons the
expression.  If you do not enter an expression, Vim uses the previous
expression (like with the "/" command).</div>
<div class="old-help-para">The expression must evaluate to a String.  A Number is always automatically
converted to a String.  For the "p" and ":put" command, if the result is a
Float it's converted into a String.  If the result is a List each element is
turned into a String and used as a line.  A Dictionary or FuncRef results in
an error message (use string() to convert).</div>
<div class="old-help-para">If the "= register is used for the "p" command, the String is split up at <code>&lt;NL&gt;</code>
characters.  If the String ends in a <code>&lt;NL&gt;</code>, it is regarded as a linewise
register.</div>
<div class="old-help-para">8. Selection registers "* and "+
Use these registers for storing and retrieving the selected text for the GUI.
See <a href="/neovim-docs-web/en/provider#quotestar">quotestar</a> and <a href="/neovim-docs-web/en/provider#quoteplus">quoteplus</a>.  When the clipboard is not available or not
working, the unnamed register is used instead.  For Unix systems and Mac OS X,
see <a href="/neovim-docs-web/en/provider#primary-selection">primary-selection</a>.</div>
<div class="old-help-para">9. Black hole register "_				<a name="quote_"></a><code class="help-tag-right">quote_</code>
When writing to this register, nothing happens.  This can be used to delete
text without affecting the normal registers.  When reading from this register,
nothing is returned.</div>
<div class="old-help-para">10. Last search pattern register	"/		<a name="quote_%2F"></a><code class="help-tag-right">quote_/</code> <a name="quote%2F"></a><code class="help-tag">quote/</code>
Contains the most recent search-pattern.  This is used for "n" and <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a>.
It is writable with <code>:let</code>, you can change it to have <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> highlight
other matches without actually searching.  You can't yank or delete into this
register.  The search direction is available in <a href="/neovim-docs-web/en/eval#v%3Asearchforward">v:searchforward</a>.
Note that the value is restored when returning from a function
<a href="/neovim-docs-web/en/userfunc#function-search-undo">function-search-undo</a>.</div>
<div class="old-help-para">							<a name="%40%2F"></a><code class="help-tag-right">@/</code>
You can write to a register with a <code>:let</code> command <a href="/neovim-docs-web/en/eval#%3Alet-%40">:let-@</a>.  Example:<pre>:let @/ = "the"</pre>
If you use a put command without specifying a register, Vim uses the register
that was last filled (this is also the contents of the unnamed register).  If
you are confused, use the <code>:dis</code> command to find out what Vim will put (this
command displays all named and numbered registers; the unnamed register is
labelled '"').</div>
<div class="old-help-para">The next three commands always work on whole lines.</div>
<div class="old-help-para">:[range]co[py] <code>{address}</code>				<a name="%3Aco"></a><code class="help-tag-right">:co</code> <a name="%3Acopy"></a><code class="help-tag">:copy</code>
			Copy the lines given by [range] to below the line
			given by <code>{address}</code>.</div>
<div class="old-help-para">							<a name="%3At"></a><code class="help-tag-right">:t</code>
:t			Synonym for copy.</div>
<div class="old-help-para">:[range]m[ove] <code>{address}</code>			<a name="%3Am"></a><code class="help-tag-right">:m</code> <a name="%3Amo"></a><code class="help-tag">:mo</code> <a name="%3Amove"></a><code class="help-tag">:move</code> <a name="E134"></a><code class="help-tag">E134</code>
			Move the lines given by [range] to below the line
			given by <code>{address}</code>.</div>
<div class="old-help-para"><h2 class="help-heading">6. Formatting text<span class="help-heading-tags">					<a name="formatting"></a><span class="help-tag">formatting</span></span></h2></div>
<div class="old-help-para">:[range]ce[nter] [width]				<a name="%3Ace"></a><code class="help-tag-right">:ce</code> <a name="%3Acenter"></a><code class="help-tag">:center</code>
			Center lines in [range] between [width] columns
			(default <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> or 80 when <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is 0).</div>
<div class="old-help-para">:[range]ri[ght] [width]					<a name="%3Ari"></a><code class="help-tag-right">:ri</code> <a name="%3Aright"></a><code class="help-tag">:right</code>
			Right-align lines in [range] at [width] columns
			(default <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> or 80 when <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is 0).</div>
<div class="old-help-para">							<a name="%3Ale"></a><code class="help-tag-right">:le</code> <a name="%3Aleft"></a><code class="help-tag">:left</code>
:[range]le[ft] [indent]
			Left-align lines in [range].  Sets the indent in the
			lines to [indent] (default 0).</div>
<div class="old-help-para">							<a name="gq"></a><code class="help-tag-right">gq</code>
gq{motion}		Format the lines that <code>{motion}</code> moves over.
			Formatting is done with one of three methods:
			1. If <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> is not empty the expression is
			   evaluated.  This can differ for each buffer.
			2. If <a href="/neovim-docs-web/en/options#'formatprg'">'formatprg'</a> is not empty an external program
			   is used.
			3. Otherwise formatting is done internally.</div>
<div class="old-help-para">			In the third case the <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> option controls the
			length of each formatted line (see below).
			If the <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> option is 0, the formatted line
			length is the screen width (with a maximum width of
			79).
			The <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> option controls the type of
			formatting <a href="/neovim-docs-web/en/change#fo-table">fo-table</a>.
			The cursor is left on the first non-blank of the last
			formatted line.
			NOTE: The "Q" command formerly performed this
			function.  If you still want to use "Q" for
			formatting, use this mapping:<pre>:nnoremap Q gq</pre>
gqgq							<a name="gqgq"></a><code class="help-tag-right">gqgq</code> <a name="gqq"></a><code class="help-tag">gqq</code>
gqq			Format the current line.  With a count format that
			many lines.</div>
<div class="old-help-para">							<a name="v_gq"></a><code class="help-tag-right">v_gq</code>
<code>{Visual}</code>gq		Format the highlighted text.  (for <code>{Visual}</code> see
			<a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para">							<a name="gw"></a><code class="help-tag-right">gw</code>
gw{motion}		Format the lines that <code>{motion}</code> moves over.  Similar to
			<a href="/neovim-docs-web/en/change#gq">gq</a> but puts the cursor back at the same position in
			the text.  However, <a href="/neovim-docs-web/en/options#'formatprg'">'formatprg'</a> and <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> are
			not used.</div>
<div class="old-help-para">gwgw							<a name="gwgw"></a><code class="help-tag-right">gwgw</code> <a name="gww"></a><code class="help-tag">gww</code>
gww			Format the current line as with "gw".</div>
<div class="old-help-para">							<a name="v_gw"></a><code class="help-tag-right">v_gw</code>
<code>{Visual}</code>gw		Format the highlighted text as with "gw".  (for
			<code>{Visual}</code> see <a href="/neovim-docs-web/en/visual#Visual-mode">Visual-mode</a>).</div>
<div class="old-help-para">Example: To format the current paragraph use:			<a name="gqap"></a><code class="help-tag-right">gqap</code><pre>gqap</pre>
The "gq" command leaves the cursor in the line where the motion command takes
the cursor.  This allows you to repeat formatting repeated with ".".  This
works well with "gqj" (format current and next line) and "gq}" (format until
end of paragraph).  Note: When <a href="/neovim-docs-web/en/options#'formatprg'">'formatprg'</a> is set, "gq" leaves the cursor on
the first formatted line (as with using a filter command).</div>
<div class="old-help-para">If you want to format the current paragraph and continue where you were, use:<pre>gwap</pre>
If you always want to keep paragraphs formatted you may want to add the 'a'
flag to <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a>.  See <a href="/neovim-docs-web/en/change#auto-format">auto-format</a>.</div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> option is on, Vim uses the indent of the first line for
the following lines.</div>
<div class="old-help-para">Formatting does not change empty lines (but it does change lines with only
white space!).</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'joinspaces'">'joinspaces'</a> option is used when lines are joined together.</div>
<div class="old-help-para">You can set the <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> option to an expression or the <a href="/neovim-docs-web/en/options#'formatprg'">'formatprg'</a> option
to the name of an external program for Vim to use for text formatting.  The
<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> and other options have no effect on formatting by an external
program.</div>
<div class="old-help-para">                                                        <a name="format-formatexpr"></a><code class="help-tag-right">format-formatexpr</code>
The <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> option can be set to a Vim script function that performs
reformatting of the buffer.  This should usually happen in an <a href="/neovim-docs-web/en/usr_41#ftplugin">ftplugin</a>,
since formatting is highly dependent on the type of file.  It makes
sense to use an <a href="/neovim-docs-web/en/userfunc#autoload">autoload</a> script, so the corresponding script is only loaded
when actually needed and the script should be called <code>&lt;filetype&gt;</code>format.vim.</div>
<div class="old-help-para">For example, the XML filetype plugin distributed with Vim in the $VIMRUNTIME
directory, sets the <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> option to:<pre>setlocal formatexpr=xmlformat#Format()</pre>
That means, you will find the corresponding script, defining the
xmlformat#Format() function, in the directory:
<code>$VIMRUNTIME/autoload/xmlformat.vim</code></div>
<div class="old-help-para">Here is an example script that removes trailing whitespace from the selected
text.  Put it in your autoload directory, e.g. ~/.vim/autoload/format.vim:<pre>func! format#Format()
  " only reformat on explicit gq command
  if mode() != 'n'
    " fall back to Vim's internal reformatting
    return 1
  endif
  let lines = getline(v:lnum, v:lnum + v:count - 1)
  call map(lines, {key, val -&gt; substitute(val, '\s\+$', '', 'g')})
  call setline('.', lines)

  " do not run internal formatter!
  return 0
endfunc</pre>
You can then enable the formatting by executing:<pre>setlocal formatexpr=format#Format()</pre>
Note: this function explicitly returns non-zero when called from insert mode
(which basically means, text is inserted beyond the <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> limit).  This
causes Vim to fall back to reformat the text by using the internal formatter.</div>
<div class="old-help-para">However, if the <a href="/neovim-docs-web/en/change#gq">gq</a> command is used to reformat the text, the function
will receive the selected lines, trim trailing whitespace from those lines and
put them back in place.  If you are going to split single lines into multiple
lines, be careful not to overwrite anything.</div>
<div class="old-help-para">If you want to allow reformatting of text from insert or replace mode, one has
to be very careful, because the function might be called recursively.  For
debugging it helps to set the <a href="/neovim-docs-web/en/options#'debug'">'debug'</a> option.</div>
<div class="old-help-para">							<a name="right-justify"></a><code class="help-tag-right">right-justify</code>
There is no command in Vim to right justify text.  You can do it with
an external command, like "par" (e.g.: "!}par" to format until the end of the
paragraph) or set <a href="/neovim-docs-web/en/options#'formatprg'">'formatprg'</a> to "par".</div>
<div class="old-help-para">							<a name="format-comments"></a><code class="help-tag-right">format-comments</code>
An overview of comment formatting is in section <a href="/neovim-docs-web/en/usr_30#30.6">30.6</a> of the user manual.</div>
<div class="old-help-para">Vim can automatically insert and format comments in a special way.  Vim
recognizes a comment by a specific string at the start of the line (ignoring
white space).  Three types of comments can be used:</div>
<div class="old-help-para"><div class="help-li" style=""> A comment string that repeats at the start of each line.  An example is the
  type of comment used in shell scripts, starting with "#".
</div><div class="help-li" style=""> A comment string that occurs only in the first line, not in the following
  lines.  An example is this list with dashes.
</div><div class="help-li" style=""> Three-piece comments that have a start string, an end string, and optional
  lines in between.  The strings for the start, middle and end are different.
  An example is the C style comment:
	/*
</div><div class="help-li" style=""> this is a C comment
	 */

The <a href="/neovim-docs-web/en/options#'comments'">'comments'</a> option is a comma-separated list of parts.  Each part defines a
type of comment string.  A part consists of:
	<code>{flags}</code>:{string}
</div></div>
<div class="old-help-para"><code>{string}</code> is the literal text that must appear.</div>
<div class="old-help-para"><code>{flags}</code>:
  n	Nested comment.  Nesting with mixed parts is allowed.  If <a href="/neovim-docs-web/en/options#'comments'">'comments'</a>
	is "n:),n:&gt;" a line starting with "&gt; ) &gt;" is a comment.</div>
<div class="old-help-para">  b	Blank (<code>&lt;Space&gt;</code>, <code>&lt;Tab&gt;</code> or <code>&lt;EOL&gt;</code>) required after <code>{string}</code>.</div>
<div class="old-help-para">  f	Only the first line has the comment string.  Do not repeat comment on
	the next line, but preserve indentation (e.g., a bullet-list).</div>
<div class="old-help-para">  s	Start of three-piece comment</div>
<div class="old-help-para">  m	Middle of a three-piece comment</div>
<div class="old-help-para">  e	End of a three-piece comment</div>
<div class="old-help-para">  l	Left align. Used together with 's' or 'e', the leftmost character of
	start or end will line up with the leftmost character from the middle.
	This is the default and can be omitted. See below for more details.</div>
<div class="old-help-para">  r	Right align. Same as above but rightmost instead of leftmost. See
	below for more details.</div>
<div class="old-help-para">  O	Don't consider this comment for the "O" command.</div>
<div class="old-help-para">  x	Allows three-piece comments to be ended by just typing the last
	character of the end-comment string as the first action on a new
	line when the middle-comment string has been inserted automatically.
	See below for more details.</div>
<div class="old-help-para">  <code>{digits}</code>
	When together with 's' or 'e': add <code>{digit}</code> amount of offset to an
	automatically inserted middle or end comment leader. The offset begins
	from a left alignment. See below for more details.</div>
<div class="old-help-para">  -{digits}
	Like <code>{digits}</code> but reduce the indent.  This only works when there is
	some indent for the start or end part that can be removed.</div>
<div class="old-help-para">When a string has none of the 'f', 's', 'm' or 'e' flags, Vim assumes the
comment string repeats at the start of each line.  The flags field may be
empty.</div>
<div class="old-help-para">Any blank space in the text before and after the <code>{string}</code> is part of the
<code>{string}</code>, so do not include leading or trailing blanks unless the blanks are a
required part of the comment string.</div>
<div class="old-help-para">When one comment leader is part of another, specify the part after the whole.
For example, to include both "-" and "-&gt;", use<pre>:set comments=f:-&gt;,f:-</pre>
A three-piece comment must always be given as start,middle,end, with no other
parts in between.  An example of a three-piece comment is<pre>sr:/*,mb:*,ex:*/</pre>
for C-comments.  To avoid recognizing "*ptr" as a comment, the middle string
includes the 'b' flag.  For three-piece comments, Vim checks the text after
the start and middle strings for the end string.  If Vim finds the end string,
the comment does not continue on the next line.  Three-piece comments must
have a middle string because otherwise Vim can't recognize the middle lines.</div>
<div class="old-help-para">Notice the use of the "x" flag in the above three-piece comment definition.
When you hit Return in a C-comment, Vim will insert the middle comment leader
for the new line: " * ".  To close this comment you just have to type "/"
before typing anything else on the new line.  This will replace the
middle-comment leader with the end-comment leader and apply any specified
alignment, leaving just "/".  There is no need to hit Backspace first.</div>
<div class="old-help-para">When there is a match with a middle part, but there also is a matching end
part which is longer, the end part is used.  This makes a C style comment work
without requiring the middle part to end with a space.</div>
<div class="old-help-para">Here is an example of alignment flags at work to make a comment stand out
(kind of looks like a 1 too). Consider comment string:<pre>:set comments=sr:/***,m:**,ex-2:******/</pre></div>
<div class="old-help-para"><div class="help-column_heading">                                   /***</div>                                     **&lt;--right aligned from "r" flag ~
                                     ** ~
<div class="help-column_heading">offset 2 spaces for the "-2" flag---&gt;**</div>                                   ******/ ~
In this case, the first comment was typed, then return was pressed 4 times,
then "/" was pressed to end the comment.</div>
<div class="old-help-para">Here are some finer points of three part comments. There are three times when
alignment and offset flags are taken into consideration: opening a new line
after a start-comment, opening a new line before an end-comment, and
automatically ending a three-piece comment.  The end alignment flag has a
backwards perspective; the result is that the same alignment flag used with
"s" and "e" will result in the same indent for the starting and ending pieces.
Only one alignment per comment part is meant to be used, but an offset number
will override the "r" and "l" flag.</div>
<div class="old-help-para">Enabling <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> will override the alignment flags in many cases.
Reindenting using a different method like <a href="/neovim-docs-web/en/change#gq">gq</a> or <a href="/neovim-docs-web/en/change#%3D">=</a> will not consult
alignment flags either. The same behaviour can be defined in those other
formatting options. One consideration is that <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> has additional options
for context based indenting of comments but cannot replicate many three piece
indent alignments.  However, <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> has the ability to work better with
three piece comments.</div>
<div class="old-help-para">Other examples:<pre>"b:*"        Includes lines starting with "*", but not if the "*" is
             followed by a non-blank.  This avoids a pointer dereference
             like "*str" to be recognized as a comment.
"n:&gt;"        Includes a line starting with "&gt;", "&gt;&gt;", "&gt;&gt;&gt;", etc.
"fb:-"        Format a list that starts with "- ".</pre>
By default, "b:#" is included.  This means that a line that starts with
"#include" is not recognized as a comment line.  But a line that starts with
"# define" is recognized.  This is a compromise.</div>
<div class="old-help-para">							<a name="fo-table"></a><code class="help-tag-right">fo-table</code>
You can use the <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> option  to influence how Vim formats text.
<a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> is a string that can contain any of the letters below.  You
can separate the option letters with commas for readability.</div>
<div class="old-help-para"><div class="help-column_heading">letter	 meaning when present in <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a></div>							<a name="fo-t"></a><code class="help-tag-right">fo-t</code>
t	Auto-wrap text using <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>
							<a name="fo-c"></a><code class="help-tag-right">fo-c</code>
c	Auto-wrap comments using <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>, inserting the current comment
	leader automatically.
							<a name="fo-r"></a><code class="help-tag-right">fo-r</code>
r	Automatically insert the current comment leader after hitting
	<code>&lt;Enter&gt;</code> in Insert mode.
							<a name="fo-o"></a><code class="help-tag-right">fo-o</code>
o	Automatically insert the current comment leader after hitting 'o' or
	'O' in Normal mode.  In case comment is unwanted in a specific place
	use <code>CTRL-U</code> to quickly delete it. <a href="/neovim-docs-web/en/insert#i_CTRL-U">i_CTRL-U</a>
							<a name="fo-%2F"></a><code class="help-tag-right">fo-/</code>
/	When 'o' is included: do not insert the comment leader for a //
	comment after a statement, only when // is at the start of the line.
							<a name="fo-q"></a><code class="help-tag-right">fo-q</code>
q	Allow formatting of comments with "gq".
	Note that formatting will not change blank lines or lines containing
	only the comment leader.  A new paragraph starts after such a line,
	or when the comment leader changes.
							<a name="fo-w"></a><code class="help-tag-right">fo-w</code>
w	Trailing white space indicates a paragraph continues in the next line.
	A line that ends in a non-white character ends a paragraph.
							<a name="fo-a"></a><code class="help-tag-right">fo-a</code>
a	Automatic formatting of paragraphs.  Every time text is inserted or
	deleted the paragraph will be reformatted.  See <a href="/neovim-docs-web/en/change#auto-format">auto-format</a>.
	When the 'c' flag is present this only happens for recognized
	comments.
							<a name="fo-n"></a><code class="help-tag-right">fo-n</code>
n	When formatting text, recognize numbered lists.  This actually uses
	the <a href="/neovim-docs-web/en/options#'formatlistpat'">'formatlistpat'</a> option, thus any kind of list can be used.  The
	indent of the text after the number is used for the next line.  The
	default is to find a number, optionally followed by '.', ':', ')',
	']' or '}'.  Note that <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> must be set too.  Doesn't work
	well together with "2".
	Example:<pre>1. the first item
   wraps
2. the second item</pre></div>
<div class="old-help-para">							<a name="fo-2"></a><code class="help-tag-right">fo-2</code>
2	When formatting text, use the indent of the second line of a paragraph
	for the rest of the paragraph, instead of the indent of the first
	line.  This supports paragraphs in which the first line has a
	different indent than the rest.  Note that <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> must be set
	too.  Example:<pre>        first line of a paragraph
second line of the same paragraph
third line.</pre></div>
<div class="old-help-para">	This also works inside comments, ignoring the comment leader.
							<a name="fo-v"></a><code class="help-tag-right">fo-v</code>
v	Vi-compatible auto-wrapping in insert mode: Only break a line at a
	blank that you have entered during the current insert command.  (Note:
	this is not 100% Vi compatible.  Vi has some "unexpected features" or
	bugs in this area.  It uses the screen column instead of the line
	column.)
							<a name="fo-b"></a><code class="help-tag-right">fo-b</code>
b	Like 'v', but only auto-wrap if you enter a blank at or before
	the wrap margin.  If the line was longer than <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> when you
	started the insert, or you do not enter a blank in the insert before
	reaching <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>, Vim does not perform auto-wrapping.
							<a name="fo-l"></a><code class="help-tag-right">fo-l</code>
l	Long lines are not broken in insert mode: When a line was longer than
	<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> when the insert command started, Vim does not
	automatically format it.
							<a name="fo-m"></a><code class="help-tag-right">fo-m</code>
m	Also break at a multibyte character above 255.  This is useful for
	Asian text where every character is a word on its own.
							<a name="fo-M"></a><code class="help-tag-right">fo-M</code>
M	When joining lines, don't insert a space before or after a multibyte
	character.  Overrules the 'B' flag.
							<a name="fo-B"></a><code class="help-tag-right">fo-B</code>
B	When joining lines, don't insert a space between two multibyte
	characters.  Overruled by the 'M' flag.
							<a name="fo-1"></a><code class="help-tag-right">fo-1</code>
1	Don't break a line after a one-letter word.  It's broken before it
	instead (if possible).
							<a name="fo-%5D"></a><code class="help-tag-right">fo-]</code>
]	Respect <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> rigorously. With this flag set, no line can be
	longer than <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>, unless line-break-prohibition rules make this
	impossible.  Mainly for CJK scripts and works only if <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is
	"utf-8".
							<a name="fo-j"></a><code class="help-tag-right">fo-j</code>
j	Where it makes sense, remove a comment leader when joining lines.  For
	example, joining:
<div class="help-column_heading">		int i;   // the index</div><div class="help-column_heading">		         // in the list</div>	Becomes:
<div class="help-column_heading">		int i;   // the index in the list</div>							<a name="fo-p"></a><code class="help-tag-right">fo-p</code>
p	Don't break lines at single spaces that follow periods.  This is
	intended to complement <a href="/neovim-docs-web/en/options#'joinspaces'">'joinspaces'</a> and <a href="/neovim-docs-web/en/options#cpo-J">cpo-J</a>, for prose with
	sentences separated by two spaces.  For example, with <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> set
	to 28:<pre>Surely you're joking, Mr. Feynman!</pre></div>
<div class="old-help-para">	Becomes:<pre>Surely you're joking,
Mr. Feynman!</pre></div>
<div class="old-help-para">	Instead of:<pre>Surely you're joking, Mr.
Feynman!</pre>
With 't' and 'c' you can specify when Vim performs auto-wrapping:
<div class="help-column_heading">value	action</div>""	no automatic formatting (you can use "gq" for manual formatting)
"t"	automatic formatting of text, but not comments
"c"	automatic formatting for comments, but not text (good for C code)
"tc"	automatic formatting for text and comments</div>
<div class="old-help-para">Note that when <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is 0, Vim does no automatic formatting anyway (but
does insert comment leaders according to the <a href="/neovim-docs-web/en/options#'comments'">'comments'</a> option).  An exception
is when the 'a' flag is present. <a href="/neovim-docs-web/en/change#auto-format">auto-format</a></div>
<div class="old-help-para">Note that when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is on, Vim does no formatting at all.</div>
<div class="old-help-para">Note that <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> can be non-zero even if Vim never performs auto-wrapping;
<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is still useful for formatting with "gq".</div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'comments'">'comments'</a> option includes "/*", "*" and/or "*/", then Vim has some
built in stuff to treat these types of comments a bit more cleverly.
Opening a new line before or after "/*" or "*/" (with 'r' or 'o' present in
<a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a>) gives the correct start of the line automatically.  The same
happens with formatting and auto-wrapping.  Opening a line after a line
starting with "/*" or "*" and containing "*/", will cause no comment leader to
be inserted, and the indent of the new line is taken from the line containing
the start of the comment.
E.g.:
<div class="help-column_heading">    /*</div><div class="help-li" style=""> Your typical comment. ~
/ ~
    The indent on this line is the same as the start of the above
    comment.
</div></div>
<div class="old-help-para">All of this should be really cool, especially in conjunction with the new
:autocmd command to prepare different settings for different types of file.</div>
<div class="old-help-para">Some examples:
  for C code (only format comments):<pre>:set fo=croq</pre></div>
<div class="old-help-para"> for Mail/news	(format all, don't start comment with "o" command):<pre>:set fo=tcrq</pre></div>
<div class="old-help-para">Automatic formatting				<a name="auto-format"></a><code class="help-tag-right">auto-format</code> <a name="autoformat"></a><code class="help-tag">autoformat</code></div>
<div class="old-help-para">When the 'a' flag is present in <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> text is formatted
automatically when inserting text or deleting text.  This works nicely for
editing text paragraphs.  A few hints on how to use this:</div>
<div class="old-help-para"><div class="help-li" style=""> You need to properly define paragraphs.  The simplest is paragraphs that are
  separated by a blank line.  When there is no separating blank line, consider
  using the 'w' flag and adding a space at the end of each line in the
  paragraphs except the last one.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> You can set the <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> based on the type of file <a href="/neovim-docs-web/en/filetype#filetype">filetype</a> or
  specifically for one file with a <a href="/neovim-docs-web/en/options#modeline">modeline</a>.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Set <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> to "aw2tq" to make text with indents like this:
</div></div>
<div class="old-help-para">	    bla bla foobar bla
	bla foobar bla foobar bla
	    bla bla foobar bla
	bla foobar bla bla foobar</div>
<div class="old-help-para"><div class="help-li" style=""> Add the 'c' flag to only auto-format comments.  Useful in source code.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Set <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> to the desired width.  If it is zero then 79 is used, or the
  width of the screen if this is smaller.
</div></div>
<div class="old-help-para">And a few warnings:</div>
<div class="old-help-para"><div class="help-li" style=""> When part of the text is not properly separated in paragraphs, making
  changes in this text will cause it to be formatted anyway.  Consider doing<pre>:set fo-=a</pre>
</div><div class="help-li" style=""> When using the 'w' flag (trailing space means paragraph continues) and
  deleting the last line of a paragraph with <a href="/neovim-docs-web/en/change#dd">dd</a>, the paragraph will be
  joined with the next one.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Changed text is saved for undo.  Formatting is also a change.  Thus each
  format action saves text for undo.  This may consume quite a lot of memory.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Formatting a long paragraph and/or with complicated indenting may be slow.
</div></div>
<div class="old-help-para"><h2 class="help-heading">7. Sorting text<span class="help-heading-tags">						<a name="sorting"></a><span class="help-tag">sorting</span></span></h2></div>
<div class="old-help-para">Vim has a sorting function and a sorting command.  The sorting function can be
found here: <a href="/neovim-docs-web/en/builtin#sort()">sort()</a>, <a href="/neovim-docs-web/en/builtin#uniq()">uniq()</a>.</div>
<div class="old-help-para">							<a name="%3Asor"></a><code class="help-tag-right">:sor</code> <a name="%3Asort"></a><code class="help-tag">:sort</code>
:[range]sor[t][!] [b][f][i][l][n][o][r][u][x] [/{pattern}/]
			Sort lines in [range].  When no range is given all
			lines are sorted.</div>
<div class="old-help-para">			With [!] the order is reversed.</div>
<div class="old-help-para">			With [i] case is ignored.</div>
<div class="old-help-para">			With [l] sort uses the current collation locale.
			Implementation details: strcoll() is used to compare
			strings. See <a href="/neovim-docs-web/en/mlang#%3Alanguage">:language</a> to check or set the collation
			locale. Example:<pre>:language collate en_US.UTF-8
:%sort l</pre></div>
<div class="old-help-para">			<a href="/neovim-docs-web/en/eval#v%3Acollate">v:collate</a> can also used to check the current locale.
			Sorting using the locale typically ignores case.
			This does not work properly on Mac.</div>
<div class="old-help-para">			Options [n][f][x][o][b] are mutually exclusive.</div>
<div class="old-help-para">			With [n] sorting is done on the first decimal number
			in the line (after or inside a <code>{pattern}</code> match).
			One leading '-' is included in the number.</div>
<div class="old-help-para">			With [f] sorting is done on the Float in the line.
			The value of Float is determined similar to passing
			the text (after or inside a <code>{pattern}</code> match) to
			str2float() function.</div>
<div class="old-help-para">			With [x] sorting is done on the first hexadecimal
			number in the line (after or inside a <code>{pattern}</code>
			match).  A leading "0x" or "0X" is ignored.
			One leading '-' is included in the number.</div>
<div class="old-help-para">			With [o] sorting is done on the first octal number in
			the line (after or inside a <code>{pattern}</code> match).</div>
<div class="old-help-para">			With [b] sorting is done on the first binary number in
			the line (after or inside a <code>{pattern}</code> match).</div>
<div class="old-help-para">			With [u] (u stands for unique) only keep the first of
			a sequence of identical lines (ignoring case when [i]
			is used).  Without this flag, a sequence of identical
			lines will be kept in their original order.
			Note that leading and trailing white space may cause
			lines to be different.</div>
<div class="old-help-para">			When /{pattern}/ is specified and there is no [r] flag
			the text matched with <code>{pattern}</code> is skipped, so that
			you sort on what comes after the match.
			<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> applies to the pattern, but <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a>
			is not used.
			Instead of the slash any non-letter can be used.
			For example, to sort on the second comma-separated
			field:<pre>:sort /[^,]*,/</pre></div>
<div class="old-help-para">			To sort on the text at virtual column 10 (thus
			ignoring the difference between tabs and spaces):<pre>:sort /.*\%10v/</pre></div>
<div class="old-help-para">			To sort on the first number in the line, no matter
			what is in front of it:<pre>:sort /.\{-}\ze\d/</pre></div>
<div class="old-help-para">			(Explanation: ".\{-}" matches any text, "\ze" sets the
			end of the match and \d matches a digit.)
			With [r] sorting is done on the matching <code>{pattern}</code>
			instead of skipping past it as described above.
			For example, to sort on only the first three letters
			of each line:<pre>:sort /\a\a\a/ r</pre></div>
<div class="old-help-para">			If a <code>{pattern}</code> is used, any lines which don't have a
			match for <code>{pattern}</code> are kept in their current order,
			but separate from the lines which do match <code>{pattern}</code>.
			If you sorted in reverse, they will be in reverse
			order after the sorted lines, otherwise they will be
			in their original order, right before the sorted
			lines.</div>
<div class="old-help-para">			If <code>{pattern}</code> is empty (e.g. // is specified), the
			last search pattern is used.  This allows trying out
			a pattern first.</div>
<div class="old-help-para">Note that using <code>:sort</code> with <code>:global</code> doesn't sort the matching lines, it's
quite useless.</div>
<div class="old-help-para"><code>:sort</code> does not use the current locale unless the l flag is used.
Vim does do a "stable" sort.</div>
<div class="old-help-para">The sorting can be interrupted, but if you interrupt it too late in the
process you may end up with duplicated lines.  This also depends on the system
library function used.</div>

  
  