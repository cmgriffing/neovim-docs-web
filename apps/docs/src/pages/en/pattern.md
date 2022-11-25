---
title:  Pattern
layout: ../../layouts/MainLayout.astro
---

  <a name="pattern.txt"></a><a name="pattern-searches"></a><h1> Pattern</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/pattern.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Patterns and search commands</div>
<div class="old-help-para">The very basics can be found in section <a href="/neovim-docs-web/en/usr_03#03.9">03.9</a> of the user manual.  A few more
explanations are in chapter 27 <a href="/neovim-docs-web/en/usr_27#usr_27.txt">usr_27.txt</a>.</div>
<div class="old-help-para"><h2 class="help-heading">1. Search commands<span class="help-heading-tags">				<a name="search-commands"></a><span class="help-tag">search-commands</span></span></h2></div>
<div class="old-help-para">							<a name="%2F"></a><code class="help-tag-right">/</code>
/{pattern}[/]&lt;CR&gt;	Search forward for the [count]'th occurrence of
			<code>{pattern}</code> <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>.</div>
<div class="old-help-para">/{pattern}/{offset}&lt;CR&gt;	Search forward for the [count]'th occurrence of
			<code>{pattern}</code> and go <a href="/neovim-docs-web/en/pattern#%7Boffset%7D">{offset}</a> lines up or down.
			<a href="/neovim-docs-web/en/motion#linewise">linewise</a>.</div>
<div class="old-help-para">							<a name="%2F%3CCR%3E"></a><code class="help-tag-right">/&lt;CR&gt;</code>
/&lt;CR&gt;			Search forward for the [count]'th occurrence of the
			latest used pattern <a href="/neovim-docs-web/en/pattern#last-pattern">last-pattern</a> with latest used
			<a href="/neovim-docs-web/en/pattern#%7Boffset%7D">{offset}</a>.</div>
<div class="old-help-para">//{offset}&lt;CR&gt;		Search forward for the [count]'th occurrence of the
			latest used pattern <a href="/neovim-docs-web/en/pattern#last-pattern">last-pattern</a> with new
			<a href="/neovim-docs-web/en/pattern#%7Boffset%7D">{offset}</a>.  If <code>{offset}</code> is empty no offset is used.</div>
<div class="old-help-para">							<a name="%3F"></a><code class="help-tag-right">?</code>
?{pattern}[?]&lt;CR&gt;	Search backward for the [count]'th previous
			occurrence of <code>{pattern}</code> <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>.</div>
<div class="old-help-para">?{pattern}?{offset}&lt;CR&gt;	Search backward for the [count]'th previous
			occurrence of <code>{pattern}</code> and go <a href="/neovim-docs-web/en/pattern#%7Boffset%7D">{offset}</a> lines up or
			down <a href="/neovim-docs-web/en/motion#linewise">linewise</a>.</div>
<div class="old-help-para">							<a name="%3F%3CCR%3E"></a><code class="help-tag-right">?&lt;CR&gt;</code>
?&lt;CR&gt;			Search backward for the [count]'th occurrence of the
			latest used pattern <a href="/neovim-docs-web/en/pattern#last-pattern">last-pattern</a> with latest used
			<a href="/neovim-docs-web/en/pattern#%7Boffset%7D">{offset}</a>.</div>
<div class="old-help-para">??{offset}&lt;CR&gt;		Search backward for the [count]'th occurrence of the
			latest used pattern <a href="/neovim-docs-web/en/pattern#last-pattern">last-pattern</a> with new
			<a href="/neovim-docs-web/en/pattern#%7Boffset%7D">{offset}</a>.  If <code>{offset}</code> is empty no offset is used.</div>
<div class="old-help-para">							<a name="n"></a><code class="help-tag-right">n</code>
n			Repeat the latest "/" or "?" [count] times.
			If the cursor doesn't move the search is repeated with
			count + 1.
			<a href="/neovim-docs-web/en/pattern#last-pattern">last-pattern</a></div>
<div class="old-help-para">							<a name="N"></a><code class="help-tag-right">N</code>
N			Repeat the latest "/" or "?" [count] times in
			opposite direction. <a href="/neovim-docs-web/en/pattern#last-pattern">last-pattern</a></div>
<div class="old-help-para">							<a name="star"></a><code class="help-tag-right">star</code> <a name="E348"></a><code class="help-tag">E348</code> <a name="E349"></a><code class="help-tag">E349</code>
*			Search forward for the [count]'th occurrence of the
			word nearest to the cursor.  The word used for the
			search is the first of:
				1. the keyword under the cursor <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a>
				2. the first keyword after the cursor, in the
				   current line
				3. the non-blank word under the cursor
				4. the first non-blank word after the cursor,
				   in the current line
			Only whole keywords are searched for, like with the
			command "/\&lt;keyword\&gt;".  <a href="/neovim-docs-web/en/motion#exclusive">exclusive</a>
			<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is used, <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> is not.
							<a name="v_star-default"></a><code class="help-tag-right">v_star-default</code>
			In Visual mode, search forward for the current selection.
			<a href="/neovim-docs-web/en/vim_diff#default-mappings">default-mappings</a></div>
<div class="old-help-para">							<a name="%23"></a><code class="help-tag-right">#</code>
#			Same as "*", but search backward.  The pound sign
			(character 163) also works.  If the "#" key works as
			backspace, try using "stty erase <code>&lt;BS&gt;</code>" before starting
			Vim (<code>&lt;BS&gt;</code> is <code>CTRL-H</code> or a real backspace).
							<a name="v_%23-default"></a><code class="help-tag-right">v_#-default</code>
			In Visual mode, search backward for the current selection.
			<a href="/neovim-docs-web/en/vim_diff#default-mappings">default-mappings</a></div>
<div class="old-help-para">							<a name="gstar"></a><code class="help-tag-right">gstar</code>
g*			Like "*", but don't put "\&lt;" and "\&gt;" around the word.
			This makes the search also find matches that are not a
			whole word.</div>
<div class="old-help-para">							<a name="g%23"></a><code class="help-tag-right">g#</code>
g#			Like "#", but don't put "\&lt;" and "\&gt;" around the word.
			This makes the search also find matches that are not a
			whole word.</div>
<div class="old-help-para">							<a name="gd"></a><code class="help-tag-right">gd</code>
gd			Goto local Declaration.  When the cursor is on a local
			variable, this command will jump to its declaration.
			First Vim searches for the start of the current
			function, just like "[[".  If it is not found the
			search stops in line 1.  If it is found, Vim goes back
			until a blank line is found.  From this position Vim
			searches for the keyword under the cursor, like with
			"*", but lines that look like a comment are ignored
			(see <a href="/neovim-docs-web/en/options#'comments'">'comments'</a> option).
			Note that this is not guaranteed to work, Vim does not
			really check the syntax, it only searches for a match
			with the keyword.  If included files also need to be
			searched use the commands listed in <a href="/neovim-docs-web/en/tagsrch#include-search">include-search</a>.
			After this command <a href="/neovim-docs-web/en/pattern#n">n</a> searches forward for the next
			match (not backward).</div>
<div class="old-help-para">							<a name="gD"></a><code class="help-tag-right">gD</code>
gD			Goto global Declaration.  When the cursor is on a
			global variable that is defined in the file, this
			command will jump to its declaration.  This works just
			like "gd", except that the search for the keyword
			always starts in line 1.</div>
<div class="old-help-para">							<a name="1gd"></a><code class="help-tag-right">1gd</code>
1gd			Like "gd", but ignore matches inside a {} block that
			ends before the cursor position.</div>
<div class="old-help-para">							<a name="1gD"></a><code class="help-tag-right">1gD</code>
1gD			Like "gD", but ignore matches inside a {} block that
			ends before the cursor position.</div>
<div class="old-help-para">							<a name="CTRL-C"></a><code class="help-tag-right">CTRL-C</code>
CTRL-C			Interrupt current (search) command.
			In Normal mode, any pending command is aborted.</div>
<div class="old-help-para">							<a name="%3Anoh"></a><code class="help-tag-right">:noh</code> <a name="%3Anohlsearch"></a><code class="help-tag">:nohlsearch</code>
:noh[lsearch]		Stop the highlighting for the <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> option.  It
			is automatically turned back on when using a search
			command, or setting the <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> option.
			This command doesn't work in an autocommand, because
			the highlighting state is saved and restored when
			executing autocommands <a href="/neovim-docs-web/en/autocmd#autocmd-searchpat">autocmd-searchpat</a>.
			Same thing for when invoking a user function.</div>
<div class="old-help-para">While typing the search pattern the current match will be shown if the
<a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a> option is on.  Remember that you still have to finish the search
command with <code>&lt;CR&gt;</code> to actually position the cursor at the displayed match.  Or
use <code>&lt;Esc&gt;</code> to abandon the search.</div>
<div class="old-help-para">All matches for the last used search pattern will be highlighted if you set
the <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> option.  This can be suspended with the <a href="/neovim-docs-web/en/pattern#%3Anohlsearch">:nohlsearch</a> command.</div>
<div class="old-help-para">When <a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a> does not include the "S" flag, Vim will automatically show an
index, on which the cursor is. This can look like this:<pre>[1/5]                Cursor is on first of 5 matches.
[1/&gt;99]        Cursor is on first of more than 99 matches.
[&gt;99/&gt;99]        Cursor is after 99 match of more than 99 matches.
[?/??]        Unknown how many matches exists, generating the
              statistics was aborted because of search timeout.</pre>
Note: the count does not take offset into account.</div>
<div class="old-help-para">When no match is found you get the error: <a name="E486"></a><code class="help-tag">E486</code> Pattern not found
Note that for the <code>:global</code> command, you get a normal message "Pattern not
found", for Vi compatibility.
For the <a href="/neovim-docs-web/en/change#%3As">:s</a> command the "e" flag can be used to avoid the error message
<a href="/neovim-docs-web/en/change#%3As_flags">:s_flags</a>.</div>
<div class="old-help-para">					<a name="search-offset"></a><code class="help-tag-right">search-offset</code> <a name="%7Boffset%7D"></a><code class="help-tag">{offset}</code>
These commands search for the specified pattern.  With "/" and "?" an
additional offset may be given.  There are two types of offsets: line offsets
and character offsets.</div>
<div class="old-help-para">The offset gives the cursor position relative to the found match:
    [num]	[num] lines downwards, in column 1
    +[num]	[num] lines downwards, in column 1
    -[num]	[num] lines upwards, in column 1
    e[+num]	[num] characters to the right of the end of the match
    e[-num]	[num] characters to the left of the end of the match
    s[+num]	[num] characters to the right of the start of the match
    s[-num]	[num] characters to the left of the start of the match
    b[+num]	[num] identical to s[+num] above (mnemonic: begin)
    b[-num]	[num] identical to s[-num] above (mnemonic: begin)
    ;{pattern}  perform another search, see <a href="/neovim-docs-web/en/pattern#%2F%2F%3B">//;</a></div>
<div class="old-help-para">If a '-' or '+' is given but [num] is omitted, a count of one will be used.
When including an offset with 'e', the search becomes inclusive (the
character the cursor lands on is included in operations).</div>
<div class="old-help-para">Examples:</div>
<div class="old-help-para"><div class="help-column_heading">pattern			cursor position</div>/test/+1		one line below "test", in column 1
/test/e			on the last t of "test"
/test/s+2		on the 's' of "test"
/test/b-3		three characters before "test"</div>
<div class="old-help-para">If one of these commands is used after an operator, the characters between
the cursor position before and after the search is affected.  However, if a
line offset is given, the whole lines between the two cursor positions are
affected.</div>
<div class="old-help-para">An example of how to search for matches with a pattern and change the match
with another word:<pre>/foo&lt;CR&gt;        find "foo"
c//e&lt;CR&gt;        change until end of match
bar&lt;Esc&gt;        type replacement
//&lt;CR&gt;                go to start of next match
c//e&lt;CR&gt;        change until end of match
beep&lt;Esc&gt;        type another replacement
                etc.</pre></div>
<div class="old-help-para">							<a name="%2F%2F%3B"></a><code class="help-tag-right">//;</code> <a name="E386"></a><code class="help-tag">E386</code>
A very special offset is ';' followed by another search command.  For example:<pre>/test 1/;/test
/test.*/+1;?ing?</pre>
The first one first finds the next occurrence of "test 1", and then the first
occurrence of "test" after that.</div>
<div class="old-help-para">This is like executing two search commands after each other, except that:
<div class="help-li" style=""> It can be used as a single motion command after an operator.
</div><div class="help-li" style=""> The direction for a following "n" or "N" command comes from the first
  search command.
</div><div class="help-li" style=""> When an error occurs the cursor is not moved at all.
</div></div>
<div class="old-help-para">							<a name="last-pattern"></a><code class="help-tag-right">last-pattern</code>
The last used pattern and offset are remembered.  They can be used to repeat
the search, possibly in another direction or with another count.  Note that
two patterns are remembered: One for "normal" search commands and one for the
substitute command ":s".  Each time an empty pattern is given, the previously
used pattern is used.  However, if there is no previous search command, a
previous substitute pattern is used, if possible.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> option sticks with the last used pattern.  If you change <a href="/neovim-docs-web/en/options#'magic'">'magic'</a>,
this will not change how the last used pattern will be interpreted.
The <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option does not do this.  When <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is changed, it
will result in the pattern to match other text.</div>
<div class="old-help-para">All matches for the last used search pattern will be highlighted if you set
the <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> option.</div>
<div class="old-help-para">To clear the last used search pattern:<pre>:let @/ = ""</pre>
This will not set the pattern to an empty string, because that would match
everywhere.  The pattern is really cleared, like when starting Vim.</div>
<div class="old-help-para">The search usually skips matches that don't move the cursor.  Whether the next
match is found at the next character or after the skipped match depends on the
'c' flag in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.  See <a href="/neovim-docs-web/en/options#cpo-c">cpo-c</a>.
	   with 'c' flag:   "/..." advances 1 to 3 characters
	without 'c' flag:   "/..." advances 1 character
The unpredictability with the 'c' flag is caused by starting the search in the
first column, skipping matches until one is found past the cursor position.</div>
<div class="old-help-para">When searching backwards, searching starts at the start of the line, using the
'c' flag in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> as described above.  Then the last match before the
cursor position is used.</div>
<div class="old-help-para">In Vi the ":tag" command sets the last search pattern when the tag is searched
for.  In Vim this is not done, the previous search pattern is still remembered,
unless the 't' flag is present in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.  The search pattern is always
put in the search history.</div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'wrapscan'">'wrapscan'</a> option is on (which is the default), searches wrap around
the end of the buffer.  If <a href="/neovim-docs-web/en/options#'wrapscan'">'wrapscan'</a> is not set, the backward search stops
at the beginning and the forward search stops at the end of the buffer.  If
<a href="/neovim-docs-web/en/options#'wrapscan'">'wrapscan'</a> is set and the pattern was not found the error message "pattern
not found" is given, and the cursor will not be moved.  If <a href="/neovim-docs-web/en/options#'wrapscan'">'wrapscan'</a> is not
set the message becomes "search hit BOTTOM without match" when searching
forward, or "search hit TOP without match" when searching backward.  If
wrapscan is set and the search wraps around the end of the file the message
"search hit TOP, continuing at BOTTOM" or "search hit BOTTOM, continuing at
TOP" is given when searching backwards or forwards respectively.  This can be
switched off by setting the 's' flag in the <a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a> option.  The highlight
method 'w' is used for this message (default: standout).</div>
<div class="old-help-para">							<a name="search-range"></a><code class="help-tag-right">search-range</code>
You can limit the search command "/" to a certain range of lines by including
\%&gt;l items.  For example, to match the word "limit" below line 199 and above
line 300:<pre>/\%&gt;199l\%&lt;300llimit</pre>
Also see <a href="/neovim-docs-web/en/pattern#%2F%5C%25%3El">/\%&gt;l</a>.</div>
<div class="old-help-para">Another way is to use the ":substitute" command with the 'c' flag.  Example:<pre>:.,300s/Pattern//gc</pre>
This command will search from the cursor position until line 300 for
"Pattern".  At the match, you will be asked to type a character.  Type 'q' to
stop at this match, type 'n' to find the next match.</div>
<div class="old-help-para">The "*", "#", "g*" and "g#" commands look for a word near the cursor in this
order, the first one that is found is used:
<div class="help-li" style=""> The keyword currently under the cursor.
</div><div class="help-li" style=""> The first keyword to the right of the cursor, in the same line.
</div><div class="help-li" style=""> The WORD currently under the cursor.
</div><div class="help-li" style=""> The first WORD to the right of the cursor, in the same line.
The keyword may only contain letters and characters in <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a>.
The WORD may contain any non-blanks (<code>&lt;Tab&gt;</code>s and/or <code>&lt;Space&gt;</code>s).
Note that if you type with ten fingers, the characters are easy to remember:
the "#" is under your left hand middle finger (search to the left and up) and
the "*" is under your right hand middle finger (search to the right and down).
(this depends on your keyboard layout though).
</div></div>
<div class="old-help-para">								<a name="E956"></a><code class="help-tag-right">E956</code>
In very rare cases a regular expression is used recursively.  This can happen
when executing a pattern takes a long time and when checking for messages on
channels a callback is invoked that also uses a pattern or an autocommand is
triggered.  In most cases this should be fine, but if a pattern is in use when
it's used again it fails.  Usually this means there is something wrong with
the pattern.</div>
<div class="old-help-para"><h2 class="help-heading">2. The definition of a pattern<span class="help-heading-tags">		<a name="search-pattern"></a><span class="help-tag">search-pattern</span> <a name="pattern"></a><span class="help-tag">pattern</span> <a name="%5Bpattern%5D"></a><span class="help-tag">[pattern]</span></span></h2>					<a name="regular-expression"></a><code class="help-tag-right">regular-expression</code> <a name="regexp"></a><code class="help-tag">regexp</code> <a name="Pattern"></a><code class="help-tag">Pattern</code>
					<a name="E383"></a><code class="help-tag-right">E383</code> <a name="E476"></a><code class="help-tag">E476</code></div>
<div class="old-help-para">For starters, read chapter 27 of the user manual <a href="/neovim-docs-web/en/usr_27#usr_27.txt">usr_27.txt</a>.</div>
<div class="old-help-para">						<a name="%2Fbar"></a><code class="help-tag-right">/bar</code> <a name="%2F%5Cbar"></a><code class="help-tag">/\bar</code> <a name="%2Fpattern"></a><code class="help-tag">/pattern</code>
1. A pattern is one or more branches, separated by "\|".  It matches anything
   that matches one of the branches.  Example: "foo\|beep" matches "foo" and
   matches "beep".  If more than one branch matches, the first one is used.</div>
<div class="old-help-para">   pattern ::=	    branch
		or  branch \| branch
		or  branch \| branch \| branch
		etc.</div>
<div class="old-help-para">						<a name="%2Fbranch"></a><code class="help-tag-right">/branch</code> <a name="%2F%5C%26"></a><code class="help-tag">/\&amp;</code>
2. A branch is one or more concats, separated by "\&amp;".  It matches the last
   concat, but only if all the preceding concats also match at the same
   position.  Examples:
	"foobeep\&amp;..." matches "foo" in "foobeep".
	".*Peter\&amp;.*Bob" matches in a line containing both "Peter" and "Bob"</div>
<div class="old-help-para">   branch ::=	    concat
		or  concat \&amp; concat
		or  concat \&amp; concat \&amp; concat
		etc.</div>
<div class="old-help-para">						<a name="%2Fconcat"></a><code class="help-tag-right">/concat</code>
3. A concat is one or more pieces, concatenated.  It matches a match for the
   first piece, followed by a match for the second piece, etc.  Example:
   "f[0-9]b", first matches "f", then a digit and then "b".</div>
<div class="old-help-para">   concat  ::=	    piece
		or  piece piece
		or  piece piece piece
		etc.</div>
<div class="old-help-para">						<a name="%2Fpiece"></a><code class="help-tag-right">/piece</code>
4. A piece is an atom, possibly followed by a multi, an indication of how many
   times the atom can be matched.  Example: "a*" matches any sequence of "a"
   characters: "", "a", "aa", etc.  See <a href="/neovim-docs-web/en/pattern#%2Fmulti">/multi</a>.</div>
<div class="old-help-para">   piece   ::=	    atom
		or  atom  multi</div>
<div class="old-help-para">						<a name="%2Fatom"></a><code class="help-tag-right">/atom</code>
5. An atom can be one of a long list of items.  Many atoms match one character
   in the text.  It is often an ordinary character or a character class.
   Parentheses can be used to make a pattern into an atom.  The "\z(\)"
   construct is only for syntax highlighting.</div>
<div class="old-help-para">   atom    ::=	    ordinary-atom		<a href="/neovim-docs-web/en/pattern#%2Fordinary-atom">/ordinary-atom</a>
		or  \( pattern \)		<a href="/neovim-docs-web/en/pattern#%2F%5C(">/\(</a>
		or  \%( pattern \)		<a href="/neovim-docs-web/en/pattern#%2F%5C%25(">/\%(</a>
		or  \z( pattern \)		<a href="/neovim-docs-web/en/syntax#%2F%5Cz(">/\z(</a></div>
<div class="old-help-para">				<a name="%2F%5C%25%23%3D"></a><code class="help-tag-right">/\%#=</code> <a name="two-engines"></a><code class="help-tag">two-engines</code> <a name="NFA"></a><code class="help-tag">NFA</code>
Vim includes two regexp engines:
1. An old, backtracking engine that supports everything.
2. A new, NFA engine that works much faster on some patterns, possibly slower
   on some patterns.
								 <a name="E1281"></a><code class="help-tag-right">E1281</code>
Vim will automatically select the right engine for you.  However, if you run
into a problem or want to specifically select one engine or the other, you can
prepend one of the following to the pattern:</div>
<div class="old-help-para">	\%#=0	Force automatic selection.  Only has an effect when
		<a href="/neovim-docs-web/en/options#'regexpengine'">'regexpengine'</a> has been set to a non-zero value.
	\%#=1	Force using the old engine.
	\%#=2	Force using the NFA engine.</div>
<div class="old-help-para">You can also use the <a href="/neovim-docs-web/en/options#'regexpengine'">'regexpengine'</a> option to change the default.</div>
<div class="old-help-para">			 <a name="E864"></a><code class="help-tag-right">E864</code> <a name="E868"></a><code class="help-tag">E868</code> <a name="E874"></a><code class="help-tag">E874</code> <a name="E875"></a><code class="help-tag">E875</code> <a name="E876"></a><code class="help-tag">E876</code> <a name="E877"></a><code class="help-tag">E877</code> <a name="E878"></a><code class="help-tag">E878</code>
If selecting the NFA engine and it runs into something that is not implemented
the pattern will not match.  This is only useful when debugging Vim.</div>
<div class="old-help-para"><h2 class="help-heading">3. Magic<span class="help-heading-tags">							<a name="%2Fmagic"></a><span class="help-tag">/magic</span></span></h2></div>
<div class="old-help-para">Some characters in the pattern, such as letters, are taken literally.  They
match exactly the same character in the text.  When preceded with a backslash
however, these characters may get a special meaning.  For example, "a" matches
the letter "a", while "\a" matches any alphabetic character.</div>
<div class="old-help-para">Other characters have a special meaning without a backslash.  They need to be
preceded with a backslash to match literally.  For example "." matches any
character while "\." matches a dot.</div>
<div class="old-help-para">If a character is taken literally or not depends on the <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> option and the
items in the pattern mentioned next.  The <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> option should always be set,
but it can be switched off for Vi compatibility.  We mention the effect of
<a href="/neovim-docs-web/en/options#'nomagic'">'nomagic'</a> here for completeness, but we recommend against using that.
							<a name="%2F%5Cm"></a><code class="help-tag-right">/\m</code> <a name="%2F%5CM"></a><code class="help-tag">/\M</code>
Use of "\m" makes the pattern after it be interpreted as if <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> is set,
ignoring the actual value of the <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> option.
Use of "\M" makes the pattern after it be interpreted as if <a href="/neovim-docs-web/en/options#'nomagic'">'nomagic'</a> is used.
							<a name="%2F%5Cv"></a><code class="help-tag-right">/\v</code> <a name="%2F%5CV"></a><code class="help-tag">/\V</code>
Use of "\v" means that after it, all ASCII characters except '0'-'9', 'a'-'z',
'A'-'Z' and '_' have special meaning: "very magic"</div>
<div class="old-help-para">Use of "\V" means that after it, only a backslash and the terminating
character (usually / or ?) have special meaning: "very nomagic"</div>
<div class="old-help-para">Examples:
<div class="help-column_heading">after:	  \v	   \m	    \M	     \V		matches</div>		<a href="/neovim-docs-web/en/options#'magic'">'magic'</a> <a href="/neovim-docs-web/en/options#'nomagic'">'nomagic'</a>
	  a	   a	    a	     a		literal 'a'
	  \a	   \a	    \a	     \a		any alphabetic character
	  .	   .	    \.	     \.		any character
	  \.	   \.	    .	     .		literal dot
	  $	   $	    $	     \$		end-of-line
	  *	   *	    \*	     \*		any number of the previous atom	  ~	   ~	    \~	     \~		latest substitute string
	  ()	   \(\)     \(\)     \(\)	group as an atom
	  |	   \|	    \|	     \|		nothing: separates alternatives
	  \\	   \\	    \\	     \\		literal backslash
	  \{	   {	    {	     {		literal curly brace</div>
<div class="old-help-para"><code>{only Vim supports \m, \M, \v and \V}</code></div>
<div class="old-help-para">If you want to you can make a pattern immune to the <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> option being set
or not by putting "\m" or "\M" at the start of the pattern.</div>
<div class="old-help-para"><h2 class="help-heading">4. Overview of pattern items<span class="help-heading-tags">				<a name="pattern-overview"></a><span class="help-tag">pattern-overview</span></span></h2>						<a name="E865"></a><code class="help-tag-right">E865</code> <a name="E866"></a><code class="help-tag">E866</code> <a name="E867"></a><code class="help-tag">E867</code> <a name="E869"></a><code class="help-tag">E869</code></div>
<div class="old-help-para">Overview of multi items.				<a name="%2Fmulti"></a><code class="help-tag-right">/multi</code> <a name="E61"></a><code class="help-tag">E61</code> <a name="E62"></a><code class="help-tag">E62</code>
More explanation and examples below, follow the links.		<a name="E64"></a><code class="help-tag-right">E64</code> <a name="E871"></a><code class="help-tag">E871</code></div>
<div class="old-help-para"><div class="help-column_heading">	  multi</div><div class="help-column_heading">     <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> <a href="/neovim-docs-web/en/options#'nomagic'">'nomagic'</a>	matches of the preceding atom</div><a href="/neovim-docs-web/en/pattern#%2Fstar">/star</a>  	*	\*	0 or more	as many as possible
<a href="/neovim-docs-web/en/pattern#%2F%5C%2B">/\+</a>  	\+	\+	1 or more	as many as possible
<a href="/neovim-docs-web/en/pattern#%2F%5C%3D">/\=</a>  	\=	\=	0 or 1		as many as possible
<a href="/neovim-docs-web/en/pattern#%2F%5C%3F">/\?</a>  	\?	\?	0 or 1		as many as possible</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/pattern#%2F%5C%7B">/\{</a>  	\{n,m}	\{n,m}	n to m		as many as possible
	\{n}	\{n}	n		exactly
	\{n,}	\{n,}	at least n	as many as possible
	\{,m}	\{,m}	0 to m		as many as possible
	\{}	\{}	0 or more	as many as possible (same as *)

|/\{-|	\{-n,m}	\{-n,m}	n to m		as few as possible
	\{-n}	\{-n}	n		exactly
	\{-n,}	\{-n,}	at least n	as few as possible
	\{-,m}	\{-,m}	0 to m		as few as possible
	\{-}	\{-}	0 or more	as few as possible</div>
<div class="old-help-para">							<a name="E59"></a><code class="help-tag-right">E59</code>
<a href="/neovim-docs-web/en/pattern#%2F%5C%40%3E">/\@&gt;</a>  	\@&gt;	\@&gt;	1, like matching a whole pattern
<a href="/neovim-docs-web/en/pattern#%2F%5C%40%3D">/\@=</a>  	\@=	\@=	nothing, requires a match <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%5C%40%21">/\@!</a>  	\@!	\@!	nothing, requires NO match <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%5C%40%3C%3D">/\@&lt;=</a>  	\@&lt;=	\@&lt;=	nothing, requires a match behind <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%5C%40%3C%21">/\@&lt;!</a>  	\@&lt;!	\@&lt;!	nothing, requires NO match behind <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a></div>
<div class="old-help-para">Overview of ordinary atoms.				<a name="%2Fordinary-atom"></a><code class="help-tag-right">/ordinary-atom</code>
More explanation and examples below, follow the links.</div>
<div class="old-help-para"><div class="help-column_heading">      ordinary atom</div><div class="help-column_heading">      magic   nomagic	matches</div><a href="/neovim-docs-web/en/pattern#%2F%5E">/^</a>  	^	^	start-of-line (at start of pattern) <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%5C%5E">/\^</a>  	\^	\^	literal '^'
<a href="/neovim-docs-web/en/pattern#%2F%5C_%5E">/\_^</a>  	\_^	\_^	start-of-line (used anywhere) <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%24">/$</a>  	$	$	end-of-line (at end of pattern) <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%5C%24">/\$</a>  	\$	\$	literal '$'
<a href="/neovim-docs-web/en/pattern#%2F%5C_%24">/\_$</a>  	\_$	\_$	end-of-line (used anywhere) <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F.">/.</a>  	.	\.	any single character (not an end-of-line)
<a href="/neovim-docs-web/en/pattern#%2F%5C_.">/\_.</a>  	\_.	\_.	any single character or end-of-line
<a href="/neovim-docs-web/en/pattern#%2F%5C%3C">/\&lt;</a>  	\&lt;	\&lt;	beginning of a word <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%5C%3E">/\&gt;</a>  	\&gt;	\&gt;	end of a word <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%5Czs">/\zs</a>  	\zs	\zs	anything, sets start of match
<a href="/neovim-docs-web/en/pattern#%2F%5Cze">/\ze</a>  	\ze	\ze	anything, sets end of match
<a href="/neovim-docs-web/en/pattern#%2F%5C%25%5E">/\%^</a>  	\%^	\%^	beginning of file <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>  		<a name="E71"></a><code class="help-tag-right">E71</code>
<a href="/neovim-docs-web/en/pattern#%2F%5C%25%24">/\%$</a>  	\%$	\%$	end of file <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%5C%25V">/\%V</a>  	\%V	\%V	inside Visual area <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%5C%25%23">/\%#</a>  	\%#	\%#	cursor position <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%5C%25'm">/\%'m</a>  	\%'m	\%'m	mark m position <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%5C%25l">/\%l</a>  	\%23l	\%23l	in line 23 <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%5C%25c">/\%c</a>  	\%23c	\%23c	in column 23 <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<a href="/neovim-docs-web/en/pattern#%2F%5C%25v">/\%v</a>  	\%23v	\%23v	in virtual column 23 <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a></div>
<div class="old-help-para">Character classes:					<a name="%2Fcharacter-classes"></a><code class="help-tag-right">/character-classes</code>
<div class="help-column_heading">      magic   nomagic	matches</div><a href="/neovim-docs-web/en/pattern#%2F%5Ci">/\i</a>  	\i	\i	identifier character (see <a href="/neovim-docs-web/en/options#'isident'">'isident'</a> option)
<a href="/neovim-docs-web/en/pattern#%2F%5CI">/\I</a>  	\I	\I	like "\i", but excluding digits
<a href="/neovim-docs-web/en/pattern#%2F%5Ck">/\k</a>  	\k	\k	keyword character (see <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> option)
<a href="/neovim-docs-web/en/pattern#%2F%5CK">/\K</a>  	\K	\K	like "\k", but excluding digits
<a href="/neovim-docs-web/en/pattern#%2F%5Cf">/\f</a>  	\f	\f	file name character (see <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> option)
<a href="/neovim-docs-web/en/pattern#%2F%5CF">/\F</a>  	\F	\F	like "\f", but excluding digits
<a href="/neovim-docs-web/en/pattern#%2F%5Cp">/\p</a>  	\p	\p	printable character (see <a href="/neovim-docs-web/en/options#'isprint'">'isprint'</a> option)
<a href="/neovim-docs-web/en/pattern#%2F%5CP">/\P</a>  	\P	\P	like "\p", but excluding digits
<a href="/neovim-docs-web/en/pattern#%2F%5Cs">/\s</a>  	\s	\s	whitespace character: <code>&lt;Space&gt;</code> and <code>&lt;Tab&gt;</code>
<a href="/neovim-docs-web/en/pattern#%2F%5CS">/\S</a>  	\S	\S	non-whitespace character; opposite of \s
<a href="/neovim-docs-web/en/pattern#%2F%5Cd">/\d</a>  	\d	\d	digit:				[0-9]
<a href="/neovim-docs-web/en/pattern#%2F%5CD">/\D</a>  	\D	\D	non-digit:			[^0-9]
<a href="/neovim-docs-web/en/pattern#%2F%5Cx">/\x</a>  	\x	\x	hex digit:			[0-9A-Fa-f]
<a href="/neovim-docs-web/en/pattern#%2F%5CX">/\X</a>  	\X	\X	non-hex digit:			[^0-9A-Fa-f]
<a href="/neovim-docs-web/en/pattern#%2F%5Co">/\o</a>  	\o	\o	octal digit:			[0-7]
<a href="/neovim-docs-web/en/pattern#%2F%5CO">/\O</a>  	\O	\O	non-octal digit:		[^0-7]
<a href="/neovim-docs-web/en/pattern#%2F%5Cw">/\w</a>  	\w	\w	word character:			[0-9A-Za-z_]
<a href="/neovim-docs-web/en/pattern#%2F%5CW">/\W</a>  	\W	\W	non-word character:		[^0-9A-Za-z_]
<a href="/neovim-docs-web/en/pattern#%2F%5Ch">/\h</a>  	\h	\h	head of word character:		[A-Za-z_]
<a href="/neovim-docs-web/en/pattern#%2F%5CH">/\H</a>  	\H	\H	non-head of word character:	[^A-Za-z_]
<a href="/neovim-docs-web/en/pattern#%2F%5Ca">/\a</a>  	\a	\a	alphabetic character:		[A-Za-z]
<a href="/neovim-docs-web/en/pattern#%2F%5CA">/\A</a>  	\A	\A	non-alphabetic character:	[^A-Za-z]
<a href="/neovim-docs-web/en/pattern#%2F%5Cl">/\l</a>  	\l	\l	lowercase character:		[a-z]
<a href="/neovim-docs-web/en/pattern#%2F%5CL">/\L</a>  	\L	\L	non-lowercase character:	[^a-z]
<a href="/neovim-docs-web/en/pattern#%2F%5Cu">/\u</a>  	\u	\u	uppercase character:		[A-Z]
<a href="/neovim-docs-web/en/pattern#%2F%5CU">/\U</a>  	\U	\U	non-uppercase character		[^A-Z]
<a href="/neovim-docs-web/en/pattern#%2F%5C_">/\_</a>  	\_x	\_x	where x is any of the characters above: character
			class with end-of-line included
(end of character classes)</div>
<div class="old-help-para"><div class="help-column_heading">      magic   nomagic	matches</div><a href="/neovim-docs-web/en/pattern#%2F%5Ce">/\e</a>  	\e	\e	<code>&lt;Esc&gt;</code>
<a href="/neovim-docs-web/en/pattern#%2F%5Ct">/\t</a>  	\t	\t	<code>&lt;Tab&gt;</code>
<a href="/neovim-docs-web/en/pattern#%2F%5Cr">/\r</a>  	\r	\r	<code>&lt;CR&gt;</code>
<a href="/neovim-docs-web/en/pattern#%2F%5Cb">/\b</a>  	\b	\b	<code>&lt;BS&gt;</code>
<a href="/neovim-docs-web/en/pattern#%2F%5Cn">/\n</a>  	\n	\n	end-of-line
<a href="/neovim-docs-web/en/pattern#%2F~">/~</a>  	~	\~	last given substitute string
<a href="/neovim-docs-web/en/pattern#%2F%5C1">/\1</a>  	\1	\1	same string as matched by first \(\)
<a href="/neovim-docs-web/en/pattern#%2F%5C2">/\2</a>  	\2	\2	Like "\1", but uses second \(\)
	   ...
<a href="/neovim-docs-web/en/pattern#%2F%5C9">/\9</a>  	\9	\9	Like "\1", but uses ninth \(\)
								<a name="E68"></a><code class="help-tag-right">E68</code>
<a href="/neovim-docs-web/en/syntax#%2F%5Cz1">/\z1</a>  	\z1	\z1	only for syntax highlighting, see <a href="/neovim-docs-web/en/syntax#%3Asyn-ext-match">:syn-ext-match</a>
	   ...
<a href="/neovim-docs-web/en/syntax#%2F%5Cz1">/\z1</a>  	\z9	\z9	only for syntax highlighting, see <a href="/neovim-docs-web/en/syntax#%3Asyn-ext-match">:syn-ext-match</a></div>
<div class="old-help-para">	x	x	a character with no special meaning matches itself</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/pattern#%2F%5B%5D">/[]</a>  	[]	\[]	any character specified inside the []
<a href="/neovim-docs-web/en/pattern#%2F%5C%25%5B%5D">/\%[]</a>  	\%[]	\%[]	a sequence of optionally matched atoms</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/pattern#%2F%5Cc">/\c</a>  	\c	\c	ignore case, do not use the <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option
<a href="/neovim-docs-web/en/pattern#%2F%5CC">/\C</a>  	\C	\C	match case, do not use the <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option
<a href="/neovim-docs-web/en/pattern#%2F%5CZ">/\Z</a>  	\Z	\Z	ignore differences in Unicode "combining characters".
			Useful when searching voweled Hebrew or Arabic text.</div>
<div class="old-help-para"><div class="help-column_heading">      magic   nomagic	matches</div><a href="/neovim-docs-web/en/pattern#%2F%5Cm">/\m</a>  	\m	\m	<a href="/neovim-docs-web/en/options#'magic'">'magic'</a> on for the following chars in the pattern
<a href="/neovim-docs-web/en/pattern#%2F%5CM">/\M</a>  	\M	\M	<a href="/neovim-docs-web/en/options#'magic'">'magic'</a> off for the following chars in the pattern
<a href="/neovim-docs-web/en/pattern#%2F%5Cv">/\v</a>  	\v	\v	the following chars in the pattern are "very magic"
<a href="/neovim-docs-web/en/pattern#%2F%5CV">/\V</a>  	\V	\V	the following chars in the pattern are "very nomagic"
<a href="/neovim-docs-web/en/pattern#%2F%5C%25%23%3D">/\%#=</a>   \%#=1   \%#=1   select regexp engine <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/pattern#%2F%5C%25d">/\%d</a>  	\%d	\%d	match specified decimal character (eg \%d123)
<a href="/neovim-docs-web/en/pattern#%2F%5C%25x">/\%x</a>  	\%x	\%x	match specified hex character (eg \%x2a)
<a href="/neovim-docs-web/en/pattern#%2F%5C%25o">/\%o</a>  	\%o	\%o	match specified octal character (eg \%o040)
<a href="/neovim-docs-web/en/pattern#%2F%5C%25u">/\%u</a>  	\%u	\%u	match specified multibyte character (eg \%u20ac)
<a href="/neovim-docs-web/en/pattern#%2F%5C%25U">/\%U</a>  	\%U	\%U	match specified large multibyte character (eg
			\%U12345678)
<a href="/neovim-docs-web/en/pattern#%2F%5C%25C">/\%C</a>  	\%C	\%C	match any composing characters</div>
<div class="old-help-para"><div class="help-column_heading">Example			matches</div>\&lt;\I\i*		or
\&lt;\h\w*
\&lt;[a-zA-Z_][a-zA-Z0-9_]*
			An identifier (e.g., in a C program).</div>
<div class="old-help-para">\(\.$\|\. \)		A period followed by <code>&lt;EOL&gt;</code> or a space.</div>
<div class="old-help-para">[.!?][])"']*\($\|[ ]\)	A search pattern that finds the end of a sentence,
			with almost the same definition as the ")" command.</div>
<div class="old-help-para">cat\Z			Both "cat" and "càt" ("a" followed by 0x0300)
			Does not match "càt" (character 0x00e0), even
			though it may look the same.</div>
<div class="old-help-para"><h2 class="help-heading">5. Multi items<span class="help-heading-tags">						<a name="pattern-multi-items"></a><span class="help-tag">pattern-multi-items</span></span></h2></div>
<div class="old-help-para">An atom can be followed by an indication of how many times the atom can be
matched and in what way.  This is called a multi.  See <a href="/neovim-docs-web/en/pattern#%2Fmulti">/multi</a> for an
overview.</div>
<div class="old-help-para">							<a name="%2Fstar"></a><code class="help-tag-right">/star</code> <a name="%2F%5Cstar"></a><code class="help-tag">/\star</code>
*	(use \* when <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> is not set)
	Matches 0 or more of the preceding atom, as many as possible.
<div class="help-column_heading">	Example  <a href="/neovim-docs-web/en/options#'nomagic'">'nomagic'</a>	matches</div>	a*	   a\*		"", "a", "aa", "aaa", etc.
	.*	   \.\*		anything, also an empty string, no end-of-line
	\_.*	   \_.\*	everything up to the end of the buffer
	\_.*END	   \_.\*END	everything up to and including the last "END"
				in the buffer</div>
<div class="old-help-para">	Exception: When "*" is used at the start of the pattern or just after
	"^" it matches the star character.</div>
<div class="old-help-para">	Be aware that repeating "\_." can match a lot of text and take a long
	time.  For example, "\_.*END" matches all text from the current
	position to the last occurrence of "END" in the file.  Since the "*"
	will match as many as possible, this first skips over all lines until
	the end of the file and then tries matching "END", backing up one
	character at a time.</div>
<div class="old-help-para">							<a name="%2F%5C%2B"></a><code class="help-tag-right">/\+</code>
\+	Matches 1 or more of the preceding atom, as many as possible.
<div class="help-column_heading">	Example		matches</div>	^.\+$		any non-empty line
	\s\+		white space of at least one character</div>
<div class="old-help-para">							<a name="%2F%5C%3D"></a><code class="help-tag-right">/\=</code>
\=	Matches 0 or 1 of the preceding atom, as many as possible.
<div class="help-column_heading">	Example		matches</div>	foo\=		"fo" and "foo"</div>
<div class="old-help-para">							<a name="%2F%5C%3F"></a><code class="help-tag-right">/\?</code>
\?	Just like \=.  Cannot be used when searching backwards with the "?"
	command.</div>
<div class="old-help-para">					<a name="%2F%5C%7B"></a><code class="help-tag-right">/\{</code> <a name="E60"></a><code class="help-tag">E60</code> <a name="E554"></a><code class="help-tag">E554</code> <a name="E870"></a><code class="help-tag">E870</code>
\{n,m}	Matches n to m of the preceding atom, as many as possible
\{n}	Matches n of the preceding atom
\{n,}	Matches at least n of the preceding atom, as many as possible
\{,m}	Matches 0 to m of the preceding atom, as many as possible
\{}	Matches 0 or more of the preceding atom, as many as possible (like *)							<a name="%2F%5C%7B-"></a><code class="help-tag-right">/\{-</code>
\{-n,m}	matches n to m of the preceding atom, as few as possible
\{-n}	matches n of the preceding atom
\{-n,}	matches at least n of the preceding atom, as few as possible
\{-,m}	matches 0 to m of the preceding atom, as few as possible
\{-}	matches 0 or more of the preceding atom, as few as possible</div>
<div class="old-help-para">	n and m are positive decimal numbers or zero
								<a name="non-greedy"></a><code class="help-tag-right">non-greedy</code>
	If a "-" appears immediately after the "{", then a shortest match
	first algorithm is used (see example below).  In particular, "\{-}" is
	the same as "*" but uses the shortest match first algorithm.  BUT: A
	match that starts earlier is preferred over a shorter match: "a\{-}b"
	matches "aaab" in "xaaab".</div>
<div class="old-help-para"><div class="help-column_heading">	Example			matches</div>	ab\{2,3}c		"abbc" or "abbbc"
	a\{5}			"aaaaa"
	ab\{2,}c		"abbc", "abbbc", "abbbbc", etc.
	ab\{,3}c		"ac", "abc", "abbc" or "abbbc"
	a[bc]\{3}d		"abbbd", "abbcd", "acbcd", "acccd", etc.
	a\(bc\)\{1,2}d		"abcd" or "abcbcd"
	a[bc]\{-}[cd]		"abc" in "abcd"
	a[bc]*[cd]		"abcd" in "abcd"</div>
<div class="old-help-para">	The } may optionally be preceded with a backslash: \{n,m\}.</div>
<div class="old-help-para">							<a name="%2F%5C%40%3D"></a><code class="help-tag-right">/\@=</code>
\@=	Matches the preceding atom with zero width.
	Like "(?=pattern)" in Perl.
<div class="help-column_heading">	Example			matches</div>	foo\(bar\)\@=		"foo" in "foobar"
	foo\(bar\)\@=foo	nothing
							<a name="%2Fzero-width"></a><code class="help-tag-right">/zero-width</code>
	When using "\@=" (or "^", "$", "\&lt;", "\&gt;") no characters are included
	in the match.  These items are only used to check if a match can be
	made.  This can be tricky, because a match with following items will
	be done in the same position.  The last example above will not match
	"foobarfoo", because it tries match "foo" in the same position where
	"bar" matched.</div>
<div class="old-help-para">	Note that using "\&amp;" works the same as using "\@=": "foo\&amp;.." is the
	same as "\(foo\)\@=..".  But using "\&amp;" is easier, you don't need the
	parentheses.</div>
<div class="old-help-para">							<a name="%2F%5C%40%21"></a><code class="help-tag-right">/\@!</code>
\@!	Matches with zero width if the preceding atom does NOT match at the
	current position. <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
	Like "(?!pattern)" in Perl.
<div class="help-column_heading">	Example			matches</div>	foo\(bar\)\@!		any "foo" not followed by "bar"
	a.\{-}p\@!		"a", "ap", "app", "appp", etc. not immediately
				followed by a "p"
	if \(\(then\)\@!.\)*$	"if " not followed by "then"</div>
<div class="old-help-para">	Using "\@!" is tricky, because there are many places where a pattern
	does not match.  "a.*p\@!" will match from an "a" to the end of the
	line, because ".*" can match all characters in the line and the "p"
	doesn't match at the end of the line.  "a.\{-}p\@!" will match any
	"a", "ap", "app", etc. that isn't followed by a "p", because the "."
	can match a "p" and "p\@!" doesn't match after that.</div>
<div class="old-help-para">	You can't use "\@!" to look for a non-match before the matching
	position: "\(foo\)\@!bar" will match "bar" in "foobar", because at the
	position where "bar" matches, "foo" does not match.  To avoid matching
	"foobar" you could use "\(foo\)\@!...bar", but that doesn't match a
	bar at the start of a line.  Use "\(foo\)\@&lt;!bar".</div>
<div class="old-help-para">	Useful example: to find "foo" in a line that does not contain "bar":<pre>/^\%(.*bar\)\@!.*\zsfoo</pre></div>
<div class="old-help-para">	This pattern first checks that there is not a single position in the
	line where "bar" matches.  If ".*bar" matches somewhere the \@! will
	reject the pattern.  When there is no match any "foo" will be found.
	The "\zs" is to have the match start just before "foo".</div>
<div class="old-help-para">							<a name="%2F%5C%40%3C%3D"></a><code class="help-tag-right">/\@&lt;=</code>
\@&lt;=	Matches with zero width if the preceding atom matches just before what
	follows. <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
	Like "(?&lt;=pattern)" in Perl, but Vim allows non-fixed-width patterns.
<div class="help-column_heading">	Example			matches</div>	\(an\_s\+\)\@&lt;=file	"file" after "an" and white space or an
				end-of-line
	For speed it's often much better to avoid this multi.  Try using "\zs"
	instead <a href="/neovim-docs-web/en/pattern#%2F%5Czs">/\zs</a>.  To match the same as the above example:
		an\_s\+\zsfile
	At least set a limit for the look-behind, see below.</div>
<div class="old-help-para">	"\@&lt;=" and "\@&lt;!" check for matches just before what follows.
	Theoretically these matches could start anywhere before this position.
	But to limit the time needed, only the line where what follows matches
	is searched, and one line before that (if there is one).  This should
	be sufficient to match most things and not be too slow.</div>
<div class="old-help-para">	In the old regexp engine the part of the pattern after "\@&lt;=" and
	"\@&lt;!" are checked for a match first, thus things like "\1" don't work
	to reference \(\) inside the preceding atom.  It does work the other
	way around:
<div class="help-column_heading">	Bad example			matches</div>	\%#=1\1\@&lt;=,\([a-z]\+\)		",abc" in "abc,abc"</div>
<div class="old-help-para">	However, the new regexp engine works differently, it is better to not
	rely on this behavior, do not use \@&lt;= if it can be avoided:
<div class="help-column_heading">	Example				matches</div>	\([a-z]\+\)\zs,\1		",abc" in "abc,abc"</div>
<div class="old-help-para">\@123&lt;=
	Like "\@&lt;=" but only look back 123 bytes. This avoids trying lots
	of matches that are known to fail and make executing the pattern very
	slow.  Example, check if there is a "&lt;" just before "span":
		/&lt;\@1&lt;=span
	This will try matching "&lt;" only one byte before "span", which is the
	only place that works anyway.
	After crossing a line boundary, the limit is relative to the end of
	the line.  Thus the characters at the start of the line with the match
	are not counted (this is just to keep it simple).
	The number zero is the same as no limit.</div>
<div class="old-help-para">							<a name="%2F%5C%40%3C%21"></a><code class="help-tag-right">/\@&lt;!</code>
\@&lt;!	Matches with zero width if the preceding atom does NOT match just
	before what follows.  Thus this matches if there is no position in the
	current or previous line where the atom matches such that it ends just
	before what follows.  <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
	Like "(?&lt;!pattern)" in Perl, but Vim allows non-fixed-width patterns.
	The match with the preceding atom is made to end just before the match
	with what follows, thus an atom that ends in ".*" will work.
	Warning: This can be slow (because many positions need to be checked
	for a match).  Use a limit if you can, see below.
<div class="help-column_heading">	Example			matches</div>	\(foo\)\@&lt;!bar		any "bar" that's not in "foobar"
	\(\/\/.*\)\@&lt;!in	"in" which is not after "//"</div>
<div class="old-help-para">\@123&lt;!
	Like "\@&lt;!" but only look back 123 bytes. This avoids trying lots of
	matches that are known to fail and make executing the pattern very
	slow.</div>
<div class="old-help-para">							<a name="%2F%5C%40%3E"></a><code class="help-tag-right">/\@&gt;</code>
\@&gt;	Matches the preceding atom like matching a whole pattern.
	Like "(?&gt;pattern)" in Perl.
<div class="help-column_heading">	Example		matches</div>	\(a*\)\@&gt;a	nothing (the "a*" takes all the "a"'s, there can't be
			another one following)</div>
<div class="old-help-para">	This matches the preceding atom as if it was a pattern by itself.  If
	it doesn't match, there is no retry with shorter sub-matches or
	anything.  Observe this difference: "a*b" and "a*ab" both match
	"aaab", but in the second case the "a*" matches only the first two
	"a"s.  "\(a*\)\@&gt;ab" will not match "aaab", because the "a*" matches
	the "aaa" (as many "a"s as possible), thus the "ab" can't match.</div>
<div class="old-help-para"><h2 class="help-heading">6.  Ordinary atoms<span class="help-heading-tags">					<a name="pattern-atoms"></a><span class="help-tag">pattern-atoms</span></span></h2></div>
<div class="old-help-para">An ordinary atom can be:</div>
<div class="old-help-para">							<a name="%2F%5E"></a><code class="help-tag-right">/^</code>
^	At beginning of pattern or after "\|", "\(", "\%(" or "\n": matches
	start-of-line; at other positions, matches literal '^'. <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
<div class="help-column_heading">	Example		matches</div>	^beep(		the start of the C function "beep" (probably).</div>
<div class="old-help-para">							<a name="%2F%5C%5E"></a><code class="help-tag-right">/\^</code>
\^	Matches literal '^'.  Can be used at any position in the pattern, but
	not inside [].</div>
<div class="old-help-para">							<a name="%2F%5C_%5E"></a><code class="help-tag-right">/\_^</code>
\_^	Matches start-of-line. <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>  Can be used at any position in
	the pattern, but not inside [].
<div class="help-column_heading">	Example		matches</div>	\_s*\_^foo	white space and blank lines and then "foo" at
			start-of-line</div>
<div class="old-help-para">							<a name="%2F%24"></a><code class="help-tag-right">/$</code>
$	At end of pattern or in front of "\|", "\)" or "\n" (<a href="/neovim-docs-web/en/options#'magic'">'magic'</a> on):
	matches end-of-line <code>&lt;EOL&gt;</code>; at other positions, matches literal '$'.
	<a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a></div>
<div class="old-help-para">							<a name="%2F%5C%24"></a><code class="help-tag-right">/\$</code>
\$	Matches literal '$'.  Can be used at any position in the pattern, but
	not inside [].</div>
<div class="old-help-para">							<a name="%2F%5C_%24"></a><code class="help-tag-right">/\_$</code>
\_$	Matches end-of-line. <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>  Can be used at any position in the
	pattern, but not inside [].  Note that "a\_$b" never matches, since
	"b" cannot match an end-of-line.  Use "a\nb" instead <a href="/neovim-docs-web/en/pattern#%2F%5Cn">/\n</a>.
<div class="help-column_heading">	Example		matches</div>	foo\_$\_s*	"foo" at end-of-line and following white space and
			blank lines</div>
<div class="old-help-para">.	(with <a href="/neovim-docs-web/en/options#'nomagic'">'nomagic'</a>: \.)				<a name="%2F."></a><code class="help-tag-right">/.</code> <a name="%2F%5C."></a><code class="help-tag">/\.</code>
	Matches any single character, but not an end-of-line.</div>
<div class="old-help-para">							<a name="%2F%5C_."></a><code class="help-tag-right">/\_.</code>
\_.	Matches any single character or end-of-line.
	Careful: "\_.*" matches all text to the end of the buffer!</div>
<div class="old-help-para">							<a name="%2F%5C%3C"></a><code class="help-tag-right">/\&lt;</code>
\&lt;	Matches the beginning of a word: The next char is the first char of a
	word.  The <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> option specifies what is a word character.
	<a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a></div>
<div class="old-help-para">							<a name="%2F%5C%3E"></a><code class="help-tag-right">/\&gt;</code>
\&gt;	Matches the end of a word: The previous char is the last char of a
	word.  The <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> option specifies what is a word character.
	<a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a></div>
<div class="old-help-para">							<a name="%2F%5Czs"></a><code class="help-tag-right">/\zs</code>
\zs	Matches at any position, but not inside [], and sets the start of the
	match there: The next char is the first char of the whole match.
	<a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
	Example:<pre>/^\s*\zsif</pre></div>
<div class="old-help-para">	matches an "if" at the start of a line, ignoring white space.
	Can be used multiple times, the last one encountered in a matching
	branch is used.  Example:<pre>/\(.\{-}\zsFab\)\{3}</pre></div>
<div class="old-help-para">	Finds the third occurrence of "Fab".
	This cannot be followed by a multi. <a name="E888"></a><code class="help-tag">E888</code></div>
<div class="old-help-para">							<a name="%2F%5Cze"></a><code class="help-tag-right">/\ze</code>
\ze	Matches at any position, but not inside [], and sets the end of the
	match there: The previous char is the last char of the whole match.
	<a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a>
	Can be used multiple times, the last one encountered in a matching
	branch is used.
	Example: "end\ze\(if\|for\)" matches the "end" in "endif" and
	"endfor".
	This cannot be followed by a multi. <a href="/neovim-docs-web/en/pattern#E888">E888</a></div>
<div class="old-help-para">						<a name="%2F%5C%25%5E"></a><code class="help-tag-right">/\%^</code> <a name="start-of-file"></a><code class="help-tag">start-of-file</code>
\%^	Matches start of the file.  When matching with a string, matches the
	start of the string.
	For example, to find the first "VIM" in a file:<pre>/\%^\_.\{-}\zsVIM</pre></div>
<div class="old-help-para">						<a name="%2F%5C%25%24"></a><code class="help-tag-right">/\%$</code> <a name="end-of-file"></a><code class="help-tag">end-of-file</code>
\%$	Matches end of the file.  When matching with a string, matches the
	end of the string.
	Note that this does NOT find the last "VIM" in a file:<pre>/VIM\_.\{-}\%$</pre></div>
<div class="old-help-para">	It will find the next VIM, because the part after it will always
	match.  This one will find the last "VIM" in the file:<pre>/VIM\ze\(\(VIM\)\@!\_.\)*\%$</pre></div>
<div class="old-help-para">	This uses <a href="/neovim-docs-web/en/pattern#%2F%5C%40%21">/\@!</a> to ascertain that "VIM" does NOT match in any
	position after the first "VIM".
	Searching from the end of the file backwards is easier!</div>
<div class="old-help-para">						<a name="%2F%5C%25V"></a><code class="help-tag-right">/\%V</code>
\%V	Match inside the Visual area.  When Visual mode has already been
	stopped match in the area that <a href="/neovim-docs-web/en/visual#gv">gv</a> would reselect.
	This is a <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a> match.  To make sure the whole pattern is
	inside the Visual area put it at the start and just before the end of
	the pattern, e.g.:<pre>/\%Vfoo.*ba\%Vr</pre></div>
<div class="old-help-para">	This also works if only "foo bar" was Visually selected. This:<pre>/\%Vfoo.*bar\%V</pre></div>
<div class="old-help-para">	would match "foo bar" if the Visual selection continues after the "r".
	Only works for the current buffer.</div>
<div class="old-help-para">						<a name="%2F%5C%25%23"></a><code class="help-tag-right">/\%#</code> <a name="cursor-position"></a><code class="help-tag">cursor-position</code>
\%#	Matches with the cursor position.  Only works when matching in a
	buffer displayed in a window.
	WARNING: When the cursor is moved after the pattern was used, the
	result becomes invalid.  Vim doesn't automatically update the matches.
	This is especially relevant for syntax highlighting and <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a>.
	In other words: When the cursor moves the display isn't updated for
	this change.  An update is done for lines which are changed (the whole
	line is updated) or when using the <a href="/neovim-docs-web/en/various#CTRL-L">CTRL-L</a> command (the whole screen
	is updated).  Example, to highlight the word under the cursor:<pre>/\k*\%#\k*</pre></div>
<div class="old-help-para">	When <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> is set and you move the cursor around and make changes
	this will clearly show when the match is updated or not.</div>
<div class="old-help-para">						<a name="%2F%5C%25'm"></a><code class="help-tag-right">/\%'m</code> <a name="%2F%5C%25%3C'm"></a><code class="help-tag">/\%&lt;'m</code> <a name="%2F%5C%25%3E'm"></a><code class="help-tag">/\%&gt;'m</code>
\%'m	Matches with the position of mark m.
\%&lt;'m	Matches before the position of mark m.
\%&gt;'m	Matches after the position of mark m.
	Example, to highlight the text from mark 's to 'e:<pre>/.\%&gt;'s.*\%&lt;'e..</pre></div>
<div class="old-help-para">	Note that two dots are required to include mark 'e in the match.  That
	is because "\%&lt;'e" matches at the character before the 'e mark, and
	since it's a <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a> match it doesn't include that character.
	WARNING: When the mark is moved after the pattern was used, the result
	becomes invalid.  Vim doesn't automatically update the matches.
	Similar to moving the cursor for "\%#" <a href="/neovim-docs-web/en/pattern#%2F%5C%25%23">/\%#</a>.</div>
<div class="old-help-para">					<a name="%2F%5C%25l"></a><code class="help-tag-right">/\%l</code> <a name="%2F%5C%25%3El"></a><code class="help-tag">/\%&gt;l</code> <a name="%2F%5C%25%3Cl"></a><code class="help-tag">/\%&lt;l</code> <a name="E951"></a><code class="help-tag">E951</code> <a name="E1204"></a><code class="help-tag">E1204</code>
\%23l	Matches in a specific line.
\%&lt;23l	Matches above a specific line (lower line number).
\%&gt;23l	Matches below a specific line (higher line number).
\%.l	Matches at the cursor line.
\%&lt;.l	Matches above the cursor line.
\%&gt;.l	Matches below the cursor line.
	These six can be used to match specific lines in a buffer.  The "23"
	can be any line number.  The first line is 1.
	WARNING: When inserting or deleting lines Vim does not automatically
	update the matches.  This means Syntax highlighting quickly becomes
	wrong.  Also when referring to the cursor position (".") and
	the cursor moves the display isn't updated for this change.  An update
	is done when using the <a href="/neovim-docs-web/en/various#CTRL-L">CTRL-L</a> command (the whole screen is updated).
	Example, to highlight the line where the cursor currently is:<pre>:exe '/\%' .. line(".") .. 'l'</pre></div>
<div class="old-help-para">	Alternatively use:<pre>/\%.l</pre></div>
<div class="old-help-para">	When <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> is set and you move the cursor around and make changes
	this will clearly show when the match is updated or not.</div>
<div class="old-help-para">						<a name="%2F%5C%25c"></a><code class="help-tag-right">/\%c</code> <a name="%2F%5C%25%3Ec"></a><code class="help-tag">/\%&gt;c</code> <a name="%2F%5C%25%3Cc"></a><code class="help-tag">/\%&lt;c</code>
\%23c	Matches in a specific column.
\%&lt;23c	Matches before a specific column.
\%&gt;23c	Matches after a specific column.
\%.c	Matches at the cursor column.
\%&lt;.c	Matches before the cursor column.
\%&gt;.c	Matches after the cursor column.
	These six can be used to match specific columns in a buffer or string.
	The "23" can be any column number.  The first column is 1.  Actually,
	the column is the byte number (thus it's not exactly right for
	multibyte characters).
	WARNING: When inserting or deleting text Vim does not automatically
	update the matches.  This means Syntax highlighting quickly becomes
	wrong.  Also when referring to the cursor position (".") and
	the cursor moves the display isn't updated for this change.  An update
	is done when using the <a href="/neovim-docs-web/en/various#CTRL-L">CTRL-L</a> command (the whole screen is updated).
	Example, to highlight the column where the cursor currently is:<pre>:exe '/\%' .. col(".") .. 'c'</pre></div>
<div class="old-help-para">	Alternatively use:<pre>/\%.c</pre></div>
<div class="old-help-para">	When <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> is set and you move the cursor around and make changes
	this will clearly show when the match is updated or not.
	Example for matching a single byte in column 44:<pre>/\%&gt;43c.\%&lt;46c</pre></div>
<div class="old-help-para">	Note that "\%&lt;46c" matches in column 45 when the "." matches a byte in
	column 44.
						<a name="%2F%5C%25v"></a><code class="help-tag-right">/\%v</code> <a name="%2F%5C%25%3Ev"></a><code class="help-tag">/\%&gt;v</code> <a name="%2F%5C%25%3Cv"></a><code class="help-tag">/\%&lt;v</code>
\%23v	Matches in a specific virtual column.
\%&lt;23v	Matches before a specific virtual column.
\%&gt;23v	Matches after a specific virtual column.
\%.v	Matches at the current virtual column.
\%&lt;.v	Matches before the current virtual column.
\%&gt;.v	Matches after the current virtual column.
	These six can be used to match specific virtual columns in a buffer or
	string.  When not matching with a buffer in a window, the option
	values of the current window are used (e.g., <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a>).
	The "23" can be any column number.  The first column is 1.
	Note that some virtual column positions will never match, because they
	are halfway through a tab or other character that occupies more than
	one screen character.
	WARNING: When inserting or deleting text Vim does not automatically
	update highlighted matches.  This means Syntax highlighting quickly
	becomes wrong.  Also when referring to the cursor position (".") and
	the cursor moves the display isn't updated for this change.  An update
	is done when using the <a href="/neovim-docs-web/en/various#CTRL-L">CTRL-L</a> command (the whole screen is updated).
	Example, to highlight all the characters after virtual column 72:<pre>/\%&gt;72v.*</pre></div>
<div class="old-help-para">	When <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> is set and you move the cursor around and make changes
	this will clearly show when the match is updated or not.
	To match the text up to column 17:<pre>/^.*\%17v</pre></div>
<div class="old-help-para">	To match all characters after the current virtual column (where the
	cursor is):<pre>/\%&gt;.v.*</pre></div>
<div class="old-help-para">	Column 17 is not included, because this is a <a href="/neovim-docs-web/en/pattern#%2Fzero-width">/zero-width</a> match. To
	include the column use:<pre>/^.*\%17v.</pre></div>
<div class="old-help-para">	This command does the same thing, but also matches when there is no
	character in column 17:<pre>/^.*\%&lt;18v.</pre></div>
<div class="old-help-para">	Note that without the "^" to anchor the match in the first column,
	this will also highlight column 17:<pre>/.*\%17v</pre></div>
<div class="old-help-para">	Column 17 is highlighted by <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> because there is another match
	where ".*" matches zero characters.</div>
<div class="old-help-para">Character classes:
\i	identifier character (see <a href="/neovim-docs-web/en/options#'isident'">'isident'</a> option)	<a name="%2F%5Ci"></a><code class="help-tag">/\i</code>
\I	like "\i", but excluding digits			<a name="%2F%5CI"></a><code class="help-tag-right">/\I</code>
\k	keyword character (see <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> option)	<a name="%2F%5Ck"></a><code class="help-tag">/\k</code>
\K	like "\k", but excluding digits			<a name="%2F%5CK"></a><code class="help-tag-right">/\K</code>
\f	file name character (see <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> option)	<a name="%2F%5Cf"></a><code class="help-tag">/\f</code>
\F	like "\f", but excluding digits			<a name="%2F%5CF"></a><code class="help-tag-right">/\F</code>
\p	printable character (see <a href="/neovim-docs-web/en/options#'isprint'">'isprint'</a> option)	<a name="%2F%5Cp"></a><code class="help-tag">/\p</code>
\P	like "\p", but excluding digits			<a name="%2F%5CP"></a><code class="help-tag-right">/\P</code></div>
<div class="old-help-para">NOTE: the above also work for multibyte characters.  The ones below only
match ASCII characters, as indicated by the range.</div>
<div class="old-help-para">						<a name="whitespace"></a><code class="help-tag-right">whitespace</code> <a name="white-space"></a><code class="help-tag">white-space</code>
\s	whitespace character: <code>&lt;Space&gt;</code> and <code>&lt;Tab&gt;</code>		<a name="%2F%5Cs"></a><code class="help-tag-right">/\s</code>
\S	non-whitespace character; opposite of \s	<a name="%2F%5CS"></a><code class="help-tag">/\S</code>
\d	digit:				[0-9]		<a name="%2F%5Cd"></a><code class="help-tag-right">/\d</code>
\D	non-digit:			[^0-9]		<a name="%2F%5CD"></a><code class="help-tag-right">/\D</code>
\x	hex digit:			[0-9A-Fa-f]	<a name="%2F%5Cx"></a><code class="help-tag">/\x</code>
\X	non-hex digit:			[^0-9A-Fa-f]	<a name="%2F%5CX"></a><code class="help-tag">/\X</code>
\o	octal digit:			[0-7]		<a name="%2F%5Co"></a><code class="help-tag-right">/\o</code>
\O	non-octal digit:		[^0-7]		<a name="%2F%5CO"></a><code class="help-tag-right">/\O</code>
\w	word character:			[0-9A-Za-z_]	<a name="%2F%5Cw"></a><code class="help-tag">/\w</code>
\W	non-word character:		[^0-9A-Za-z_]	<a name="%2F%5CW"></a><code class="help-tag">/\W</code>
\h	head of word character:		[A-Za-z_]	<a name="%2F%5Ch"></a><code class="help-tag">/\h</code>
\H	non-head of word character:	[^A-Za-z_]	<a name="%2F%5CH"></a><code class="help-tag">/\H</code>
\a	alphabetic character:		[A-Za-z]	<a name="%2F%5Ca"></a><code class="help-tag">/\a</code>
\A	non-alphabetic character:	[^A-Za-z]	<a name="%2F%5CA"></a><code class="help-tag">/\A</code>
\l	lowercase character:		[a-z]		<a name="%2F%5Cl"></a><code class="help-tag-right">/\l</code>
\L	non-lowercase character:	[^a-z]		<a name="%2F%5CL"></a><code class="help-tag-right">/\L</code>
\u	uppercase character:		[A-Z]		<a name="%2F%5Cu"></a><code class="help-tag-right">/\u</code>
\U	non-uppercase character:	[^A-Z]		<a name="%2F%5CU"></a><code class="help-tag-right">/\U</code></div>
<div class="old-help-para">	NOTE: Using the atom is faster than the [] form.</div>
<div class="old-help-para">	NOTE: <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a>, "\c" and "\C" are not used by character classes.</div>
<div class="old-help-para">			<a name="%2F%5C_"></a><code class="help-tag-right">/\_</code> <a name="E63"></a><code class="help-tag">E63</code> <a name="%2F%5C_i"></a><code class="help-tag">/\_i</code> <a name="%2F%5C_I"></a><code class="help-tag">/\_I</code> <a name="%2F%5C_k"></a><code class="help-tag">/\_k</code> <a name="%2F%5C_K"></a><code class="help-tag">/\_K</code> <a name="%2F%5C_f"></a><code class="help-tag">/\_f</code> <a name="%2F%5C_F"></a><code class="help-tag">/\_F</code>
			<a name="%2F%5C_p"></a><code class="help-tag-right">/\_p</code> <a name="%2F%5C_P"></a><code class="help-tag">/\_P</code> <a name="%2F%5C_s"></a><code class="help-tag">/\_s</code> <a name="%2F%5C_S"></a><code class="help-tag">/\_S</code> <a name="%2F%5C_d"></a><code class="help-tag">/\_d</code> <a name="%2F%5C_D"></a><code class="help-tag">/\_D</code> <a name="%2F%5C_x"></a><code class="help-tag">/\_x</code> <a name="%2F%5C_X"></a><code class="help-tag">/\_X</code>
			<a name="%2F%5C_o"></a><code class="help-tag-right">/\_o</code> <a name="%2F%5C_O"></a><code class="help-tag">/\_O</code> <a name="%2F%5C_w"></a><code class="help-tag">/\_w</code> <a name="%2F%5C_W"></a><code class="help-tag">/\_W</code> <a name="%2F%5C_h"></a><code class="help-tag">/\_h</code> <a name="%2F%5C_H"></a><code class="help-tag">/\_H</code> <a name="%2F%5C_a"></a><code class="help-tag">/\_a</code> <a name="%2F%5C_A"></a><code class="help-tag">/\_A</code>
			<a name="%2F%5C_l"></a><code class="help-tag-right">/\_l</code> <a name="%2F%5C_L"></a><code class="help-tag">/\_L</code> <a name="%2F%5C_u"></a><code class="help-tag">/\_u</code> <a name="%2F%5C_U"></a><code class="help-tag">/\_U</code>
\_x	Where "x" is any of the characters above: The character class with
	end-of-line added
(end of character classes)</div>
<div class="old-help-para">\e	matches <code>&lt;Esc&gt;</code>					<a name="%2F%5Ce"></a><code class="help-tag-right">/\e</code>
\t	matches <code>&lt;Tab&gt;</code>					<a name="%2F%5Ct"></a><code class="help-tag-right">/\t</code>
\r	matches <code>&lt;CR&gt;</code>					<a name="%2F%5Cr"></a><code class="help-tag-right">/\r</code>
\b	matches <code>&lt;BS&gt;</code>					<a name="%2F%5Cb"></a><code class="help-tag-right">/\b</code>
\n	matches an end-of-line				<a name="%2F%5Cn"></a><code class="help-tag-right">/\n</code>
	When matching in a string instead of buffer text a literal newline
	character is matched.</div>
<div class="old-help-para">~	matches the last given substitute string	<a name="%2F~"></a><code class="help-tag">/~</code> <a name="%2F%5C~"></a><code class="help-tag">/\~</code></div>
<div class="old-help-para">\(\)	A pattern enclosed by escaped parentheses.	<a name="%2F%5C("></a><code class="help-tag">/\(</code> <a name="%2F%5C(%5C)"></a><code class="help-tag">/\(\)</code> <a name="%2F%5C)"></a><code class="help-tag">/\)</code>
	E.g., "\(^a\)" matches 'a' at the start of a line.
	There can only be ten of these.  You can use "\%(" to add more, but
	not counting it as a sub-expression.
	<a name="E51"></a><code class="help-tag">E51</code> <a name="E54"></a><code class="help-tag">E54</code> <a name="E55"></a><code class="help-tag">E55</code> <a name="E872"></a><code class="help-tag">E872</code> <a name="E873"></a><code class="help-tag">E873</code></div>
<div class="old-help-para">\1      Matches the same string that was matched by	<a name="%2F%5C1"></a><code class="help-tag">/\1</code> <a name="E65"></a><code class="help-tag">E65</code>
	the first sub-expression in \( and \).
	Example: "\([a-z]\).\1" matches "ata", "ehe", "tot", etc.
\2      Like "\1", but uses second sub-expression,	<a name="%2F%5C2"></a><code class="help-tag">/\2</code>
   ...							<a name="%2F%5C3"></a><code class="help-tag-right">/\3</code>
\9      Like "\1", but uses ninth sub-expression.	<a name="%2F%5C9"></a><code class="help-tag">/\9</code>
	Note: The numbering of groups is done based on which "\(" comes first
	in the pattern (going left to right), NOT based on what is matched
	first.</div>
<div class="old-help-para">\%(\)	A pattern enclosed by escaped parentheses.	<a name="%2F%5C%25(%5C)"></a><code class="help-tag">/\%(\)</code> <a name="%2F%5C%25("></a><code class="help-tag">/\%(</code> <a name="E53"></a><code class="help-tag">E53</code>
	Just like \(\), but without counting it as a sub-expression.  This
	allows using more groups and it's a little bit faster.</div>
<div class="old-help-para">x	A single character, with no special meaning, matches itself</div>
<div class="old-help-para">							<a name="%2F%5C"></a><code class="help-tag-right">/\</code> <a name="%2F%5C%5C"></a><code class="help-tag">/\\</code>
\x	A backslash followed by a single character, with no special meaning,
	is reserved for future expansions</div>
<div class="old-help-para">[]	(with <a href="/neovim-docs-web/en/options#'nomagic'">'nomagic'</a>: \[])		<a name="%2F%5B%5D"></a><code class="help-tag-right">/[]</code> <a name="%2F%5C%5B%5D"></a><code class="help-tag">/\[]</code> <a name="%2F%5C_%5B%5D"></a><code class="help-tag">/\_[]</code> <a name="%2Fcollection"></a><code class="help-tag">/collection</code> <a name="E76"></a><code class="help-tag">E76</code>
\_[]
	A collection.  This is a sequence of characters enclosed in square
	brackets.  It matches any single character in the collection.
<div class="help-column_heading">	Example		matches</div>	[xyz]		any 'x', 'y' or 'z'
	[a-zA-Z]$	any alphabetic character at the end of a line
	\c[a-z]$	same
	[А-яЁё]		Russian alphabet (with utf-8 and cp1251)</div>
<div class="old-help-para">								<a name="%2F%5B%5Cn%5D"></a><code class="help-tag-right">/[\n]</code>
	With "\_" prepended the collection also includes the end-of-line.
	The same can be done by including "\n" in the collection.  The
	end-of-line is also matched when the collection starts with "^"!  Thus
	"\_[^ab]" matches the end-of-line and any character but "a" and "b".
	This makes it Vi compatible: Without the "\_" or "\n" the collection
	does not match an end-of-line.
								<a name="E769"></a><code class="help-tag-right">E769</code>
	When the ']' is not there Vim will not give an error message but
	assume no collection is used.  Useful to search for '['.  However, you
	do get E769 for internal searching.  And be aware that in a
	<code>:substitute</code> command the whole command becomes the pattern.  E.g.
	":s/[/x/" searches for "[/x" and replaces it with nothing.  It does
	not search for "[" and replaces it with "x"!</div>
<div class="old-help-para">								<a name="E944"></a><code class="help-tag-right">E944</code> <a name="E945"></a><code class="help-tag">E945</code>
	If the sequence begins with "^", it matches any single character NOT
	in the collection: "[^xyz]" matches anything but 'x', 'y' and 'z'.
<div class="help-li" style=""> If two characters in the sequence are separated by '-', this is
	  shorthand for the full list of ASCII characters between them.  E.g.,
	  "[0-9]" matches any decimal digit. If the starting character exceeds
	  the ending character, e.g. [c-a], E944 occurs. Non-ASCII characters
	  can be used, but the character values must not be more than 256 apart
	  in the old regexp engine. For example, searching by [\u3000-\u4000]
	  after setting re=1 emits a E945 error. Prepending \%#=2 will fix it.
</div><div class="help-li" style=""> A character class expression is evaluated to the set of characters
	  belonging to that character class.  The following character classes
	  are supported:
		  Name	      Func	Contents ~
<a name="%5B%3Aalnum%3A%5D"></a><code class="help-tag">[:alnum:]</code>  	  [:alnum:]   isalnum	ASCII letters and digits
<a name="%5B%3Aalpha%3A%5D"></a><code class="help-tag">[:alpha:]</code>  	  [:alpha:]   isalpha  	ASCII letters
<a name="%5B%3Ablank%3A%5D"></a><code class="help-tag">[:blank:]</code>  	  [:blank:]     	space and tab
<a name="%5B%3Acntrl%3A%5D"></a><code class="help-tag">[:cntrl:]</code>  	  [:cntrl:]   iscntrl 	ASCII control characters
<a name="%5B%3Adigit%3A%5D"></a><code class="help-tag">[:digit:]</code>  	  [:digit:]     	decimal digits '0' to '9'
<a name="%5B%3Agraph%3A%5D"></a><code class="help-tag">[:graph:]</code>  	  [:graph:]   isgraph	ASCII printable characters excluding
					space
<a name="%5B%3Alower%3A%5D"></a><code class="help-tag">[:lower:]</code>  	  [:lower:]   (1)	lowercase letters (all letters when
					<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is used)
<a name="%5B%3Aprint%3A%5D"></a><code class="help-tag">[:print:]</code>  	  [:print:]   (2) 	printable characters including space
<a name="%5B%3Apunct%3A%5D"></a><code class="help-tag">[:punct:]</code>  	  [:punct:]   ispunct	ASCII punctuation characters
<a name="%5B%3Aspace%3A%5D"></a><code class="help-tag">[:space:]</code>  	  [:space:]     	whitespace characters: space, tab, CR,
					NL, vertical tab, form feed
<a name="%5B%3Aupper%3A%5D"></a><code class="help-tag">[:upper:]</code>  	  [:upper:]   (3)	uppercase letters (all letters when
					<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is used)
<a name="%5B%3Axdigit%3A%5D"></a><code class="help-tag">[:xdigit:]</code>  	  [:xdigit:]    	hexadecimal digits: 0-9, a-f, A-F
<a name="%5B%3Areturn%3A%5D"></a><code class="help-tag">[:return:]</code>  	  [:return:]		the <code>&lt;CR&gt;</code> character
<a name="%5B%3Atab%3A%5D"></a><code class="help-tag">[:tab:]</code>  	  [:tab:]		the <code>&lt;Tab&gt;</code> character
<a name="%5B%3Aescape%3A%5D"></a><code class="help-tag">[:escape:]</code>  	  [:escape:]		the <code>&lt;Esc&gt;</code> character
<a name="%5B%3Abackspace%3A%5D"></a><code class="help-tag">[:backspace:]</code>  	  [:backspace:]		the <code>&lt;BS&gt;</code> character
<a name="%5B%3Aident%3A%5D"></a><code class="help-tag">[:ident:]</code>  	  [:ident:]		identifier character (same as "\i")
<a name="%5B%3Akeyword%3A%5D"></a><code class="help-tag">[:keyword:]</code>  	  [:keyword:]		keyword character (same as "\k")
<a name="%5B%3Afname%3A%5D"></a><code class="help-tag">[:fname:]</code>  	  [:fname:]		file name character (same as "\f")
	  The square brackets in character class expressions are additional to
	  the square brackets delimiting a collection.  For example, the
	  following is a plausible pattern for a UNIX filename:
	  "[-./[:alnum:]_~]\+".  That is, a list of at least one character,
	  each of which is either '-', '.', '/', alphabetic, numeric, '_' or
	  '~'.
	  These items only work for 8-bit characters, except [:lower:] and
	  [:upper:] also work for multibyte characters when using the new
	  regexp engine.  See <a href="/neovim-docs-web/en/pattern#two-engines">two-engines</a>.  In the future these items may
	  work for multibyte characters.  For now, to get all "alpha"
	  characters you can use: [[:lower:][:upper:]].
</div></div>
<div class="old-help-para">	  The "Func" column shows what library function is used.  The
	  implementation depends on the system.  Otherwise:
	  (1) Uses islower() for ASCII and Vim builtin rules for other
	  characters.
	  (2) Uses Vim builtin rules
	  (3) As with (1) but using isupper()
							<a name="%2F%5B%5B%3D"></a><code class="help-tag-right">/[[=</code> <a name="%5B%3D%3D%5D"></a><code class="help-tag">[==]</code>
<div class="help-li" style=""> An equivalence class.  This means that characters are matched that
	  have almost the same meaning, e.g., when ignoring accents.  This
	  only works for Unicode, latin1 and latin9.  The form is:
		[=a=]
							<a name="%2F%5B%5B."></a><code class="help-tag-right">/[[.</code> <a name="%5B..%5D"></a><code class="help-tag">[..]</code>
</div><div class="help-li" style=""> A collation element.  This currently simply accepts a single
	  character in the form:
		[.a.]
							  <a name="%2F%5C%5D"></a><code class="help-tag-right">/\]</code>
</div><div class="help-li" style=""> To include a literal ']', '^', '-' or '\' in the collection, put a
	  backslash before it: "[xyz\]]", "[\^xyz]", "[xy\-z]" and "[xyz\\]".
	  (Note: POSIX does not support the use of a backslash this way).  For
	  ']' you can also make it the first character (following a possible
	  "^"):  "[]xyz]" or "[^]xyz]".
	  For '-' you can also make it the first or last character: "[-xyz]",
	  "[^-xyz]" or "[xyz-]".  For '\' you can also let it be followed by
	  any character that's not in "^]-\bdertnoUux".  "[\xyz]" matches '\',
	  'x', 'y' and 'z'.  It's better to use "\\" though, future expansions
	  may use other characters after '\'.
</div><div class="help-li" style=""> Omitting the trailing ] is not considered an error. "[]" works like
	  "[]]", it matches the ']' character.
</div><div class="help-li" style=""> The following translations are accepted when the 'l' flag is not
	  included in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>:
		\e	<code>&lt;Esc&gt;</code>
		\t	<code>&lt;Tab&gt;</code>
		\r	<code>&lt;CR&gt;</code>	(NOT end-of-line!)
		\b	<code>&lt;BS&gt;</code>
		\n	line break, see above <a href="/neovim-docs-web/en/pattern#%2F%5B%5Cn%5D">/[\n]</a>
		\d123	decimal number of character
		\o40	octal number of character up to 0o377
		\x20	hexadecimal number of character up to 0xff
		\u20AC	hex. number of multibyte character up to 0xffff
		\U1234	hex. number of multibyte character up to 0xffffffff
	  NOTE: The other backslash codes mentioned above do not work inside
	  []!
</div><div class="help-li" style=""> Matching with a collection can be slow, because each character in
	  the text has to be compared with each character in the collection.
	  Use one of the other atoms above when possible.  Example: "\d" is
	  much faster than "[0-9]" and matches the same characters.  However,
	  the new <a href="/neovim-docs-web/en/pattern#NFA">NFA</a> regexp engine deals with this better than the old one.
</div></div>
<div class="old-help-para">						<a name="%2F%5C%25%5B%5D"></a><code class="help-tag-right">/\%[]</code> <a name="E69"></a><code class="help-tag">E69</code> <a name="E70"></a><code class="help-tag">E70</code> <a name="E369"></a><code class="help-tag">E369</code>
\%[]	A sequence of optionally matched atoms.  This always matches.
	It matches as much of the list of atoms it contains as possible.  Thus
	it stops at the first atom that doesn't match.  For example:<pre>/r\%[ead]</pre></div>
<div class="old-help-para">	matches "r", "re", "rea" or "read".  The longest that matches is used.
	To match the Ex command "function", where "fu" is required and
	"nction" is optional, this would work:<pre>/\&lt;fu\%[nction]\&gt;</pre></div>
<div class="old-help-para">	The end-of-word atom "\&gt;" is used to avoid matching "fu" in "full".
	It gets more complicated when the atoms are not ordinary characters.
	You don't often have to use it, but it is possible.  Example:<pre>/\&lt;r\%[[eo]ad]\&gt;</pre></div>
<div class="old-help-para">	Matches the words "r", "re", "ro", "rea", "roa", "read" and "road".
	There can be no \(\), \%(\) or \z(\) items inside the [] and \%[] does
	not nest.
	To include a "[" use "[[]" and for "]" use []]", e.g.,:<pre>/index\%[[[]0[]]]</pre></div>
<div class="old-help-para">	matches "index" "index[", "index[0" and "index[0]".</div>
<div class="old-help-para">				<a name="%2F%5C%25d"></a><code class="help-tag-right">/\%d</code> <a name="%2F%5C%25x"></a><code class="help-tag">/\%x</code> <a name="%2F%5C%25o"></a><code class="help-tag">/\%o</code> <a name="%2F%5C%25u"></a><code class="help-tag">/\%u</code> <a name="%2F%5C%25U"></a><code class="help-tag">/\%U</code> <a name="E678"></a><code class="help-tag">E678</code></div>
<div class="old-help-para">\%d123	Matches the character specified with a decimal number.  Must be
	followed by a non-digit.
\%o40	Matches the character specified with an octal number up to 0o377.
	Numbers below 0o40 must be followed by a non-octal digit or a
	non-digit.
\%x2a	Matches the character specified with up to two hexadecimal characters.
\%u20AC	Matches the character specified with up to four hexadecimal
	characters.
\%U1234abcd	Matches the character specified with up to eight hexadecimal
	characters, up to 0x7fffffff</div>
<div class="old-help-para"><h2 class="help-heading">7. Ignoring case in a pattern<span class="help-heading-tags">					<a name="%2Fignorecase"></a><span class="help-tag">/ignorecase</span></span></h2></div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option is on, the case of normal letters is ignored.
<a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> can be set to ignore case when the pattern contains lowercase
letters only.
							<a name="%2F%5Cc"></a><code class="help-tag-right">/\c</code> <a name="%2F%5CC"></a><code class="help-tag">/\C</code>
When "\c" appears anywhere in the pattern, the whole pattern is handled like
<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is on.  The actual value of <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> and <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> is
ignored.  "\C" does the opposite: Force matching case for the whole pattern.
<code>{only Vim supports \c and \C}</code>
Note that <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a>, "\c" and "\C" are not used for the character classes.</div>
<div class="old-help-para">Examples:
<div class="help-column_heading">      pattern	<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a>  <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a>	matches</div>	foo	  off		-			foo
	foo	  on		-			foo Foo FOO
	Foo	  on		off		foo Foo FOO
	Foo	  on		on		    Foo
	\cfoo	  -			-			foo Foo FOO
	foo\C	  -			-			foo</div>
<div class="old-help-para">Technical detail:				<a name="NL-used-for-Nul"></a><code class="help-tag-right">NL-used-for-Nul</code>
<code>&lt;Nul&gt;</code> characters in the file are stored as <code>&lt;NL&gt;</code> in memory.  In the display
they are shown as "^@".  The translation is done when reading and writing
files.  To match a <code>&lt;Nul&gt;</code> with a search pattern you can just enter <code>CTRL-@</code> or
"CTRL-V 000".  This is probably just what you expect.  Internally the
character is replaced with a <code>&lt;NL&gt;</code> in the search pattern.  What is unusual is
that typing <code>CTRL-V</code> <code>CTRL-J</code> also inserts a <code>&lt;NL&gt;</code>, thus also searches for a <code>&lt;Nul&gt;</code>
in the file.</div>
<div class="old-help-para">						<a name="CR-used-for-NL"></a><code class="help-tag-right">CR-used-for-NL</code>
When <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is "mac", <code>&lt;NL&gt;</code> characters in the file are stored as <code>&lt;CR&gt;</code>
characters internally.  In the text they are shown as "^J".  Otherwise this
works similar to the usage of <code>&lt;NL&gt;</code> for a <code>&lt;Nul&gt;</code>.</div>
<div class="old-help-para">When working with expression evaluation, a <code>&lt;NL&gt;</code> character in the pattern
matches a <code>&lt;NL&gt;</code> in the string.  The use of "\n" (backslash n) to match a <code>&lt;NL&gt;</code>
doesn't work there, it only works to match text in the buffer.</div>
<div class="old-help-para">				<a name="pattern-multi-byte"></a><code class="help-tag-right">pattern-multi-byte</code> <a name="pattern-multibyte"></a><code class="help-tag">pattern-multibyte</code>
Patterns will also work with multibyte characters, mostly as you would
expect.  But invalid bytes may cause trouble, a pattern with an invalid byte
will probably never match.</div>
<div class="old-help-para"><h2 class="help-heading">8. Composing characters<span class="help-heading-tags">					<a name="patterns-composing"></a><span class="help-tag">patterns-composing</span></span></h2></div>
<div class="old-help-para">							<a name="%2F%5CZ"></a><code class="help-tag-right">/\Z</code>
When "\Z" appears anywhere in the pattern, all composing characters are
ignored.  Thus only the base characters need to match, the composing
characters may be different and the number of composing characters may differ.
Only relevant when <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is "utf-8".
Exception: If the pattern starts with one or more composing characters, these
must match.
							<a name="%2F%5C%25C"></a><code class="help-tag-right">/\%C</code>
Use "\%C" to skip any composing characters.  For example, the pattern "a" does
not match in "càt" (where the a has the composing character 0x0300), but
"a\%C" does.  Note that this does not match "cát" (where the á is character
0xe1, it does not have a compositing character).  It does match "cat" (where
the a is just an a).</div>
<div class="old-help-para">When a composing character appears at the start of the pattern or after an
item that doesn't include the composing character, a match is found at any
character that includes this composing character.</div>
<div class="old-help-para">When using a dot and a composing character, this works the same as the
composing character by itself, except that it doesn't matter what comes before
this.</div>
<div class="old-help-para">The order of composing characters does not matter.  Also, the text may have
more composing characters than the pattern, it still matches.  But all
composing characters in the pattern must be found in the text.</div>
<div class="old-help-para">Suppose B is a base character and x and y are composing characters:
<div class="help-column_heading">	pattern		text		match</div>	Bxy		Bxy		yes (perfect match)
	Bxy		Byx		yes (order ignored)
	Bxy		By		no (x missing)
	Bxy		Bx		no (y missing)
	Bx		Bx		yes (perfect match)
	Bx		By		no (x missing)
	Bx		Bxy		yes (extra y ignored)
	Bx		Byx		yes (extra y ignored)</div>
<div class="old-help-para"><h2 class="help-heading">9. Compare with Perl patterns<span class="help-heading-tags">				<a name="perl-patterns"></a><span class="help-tag">perl-patterns</span></span></h2></div>
<div class="old-help-para">Vim's regexes are most similar to Perl's, in terms of what you can do.  The
difference between them is mostly just notation;  here's a summary of where
they differ:</div>
<div class="old-help-para"><div class="help-column_heading">Capability			in Vimspeak	in Perlspeak</div><a name="_-force-case-insensitivity-\c-(?i)"></a><h3 class="help-heading">force case insensitivity	\c		(?i)</h3>force case sensitivity		\C		(?-i)
backref-less grouping		\%(atom\)	(?:atom)
conservative quantifiers	\{-n,m}?, +?, ??, {}?
0-width match			atom\@=		(?=atom)
0-width non-match		atom\@!		(?!atom)
0-width preceding match		atom\@&lt;=	(?&lt;=atom)
0-width preceding non-match	atom\@&lt;!	(?&lt;!atom)
match without retry		atom\@&gt;		(?&gt;atom)</div>
<div class="old-help-para">Vim and Perl handle newline characters inside a string a bit differently:</div>
<div class="old-help-para">In Perl, ^ and $ only match at the very beginning and end of the text,
by default, but you can set the 'm' flag, which lets them match at
embedded newlines as well.  You can also set the 's' flag, which causes
a . to match newlines as well.  (Both these flags can be changed inside
a pattern using the same syntax used for the i flag above, BTW.)</div>
<div class="old-help-para">On the other hand, Vim's ^ and $ always match at embedded newlines, and
you get two separate atoms, \%^ and \%$, which only match at the very
start and end of the text, respectively.  Vim solves the second problem
by giving you the \_ "modifier":  put it in front of a . or a character
class, and they will match newlines as well.</div>
<div class="old-help-para">Finally, these constructs are unique to Perl:
<div class="help-li" style=""> execution of arbitrary code in the regex:  (?{perl code})
</div><div class="help-li" style=""> conditional expressions:  (?(condition)true-expr|false-expr)
</div></div>
<div class="old-help-para">...and these are unique to Vim:
<div class="help-li" style=""> changing the magic-ness of a pattern:  \v \V \m \M
   (very useful for avoiding backslashitis)
</div><div class="help-li" style=""> sequence of optionally matching atoms:  \%[atoms]
</div><div class="help-li" style=""> \&amp; (which is to \| what "and" is to "or";  it forces several branches
   to match at one spot)
</div><div class="help-li" style=""> matching lines/columns by number:  \%5l \%5c \%5v
</div><div class="help-li" style=""> setting the start and end of the match:  \zs \ze
</div></div>
<div class="old-help-para"><h2 class="help-heading">10. Highlighting matches<span class="help-heading-tags">				<a name="match-highlight"></a><span class="help-tag">match-highlight</span></span></h2></div>
<div class="old-help-para">							<a name="%3Amat"></a><code class="help-tag-right">:mat</code> <a name="%3Amatch"></a><code class="help-tag">:match</code>
:mat[ch] <code>{group}</code> /{pattern}/
		Define a pattern to highlight in the current window.  It will
		be highlighted with <code>{group}</code>.  Example:<pre>:highlight MyGroup ctermbg=green guibg=green
:match MyGroup /TODO/</pre></div>
<div class="old-help-para">		Instead of // any character can be used to mark the start and
		end of the <code>{pattern}</code>.  Watch out for using special characters,
		such as '"' and '|'.</div>
<div class="old-help-para">		<code>{group}</code> must exist at the moment this command is executed.</div>
<div class="old-help-para">		The <code>{group}</code> highlighting still applies when a character is
		to be highlighted for <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a>, as the highlighting for
		matches is given higher priority than that of <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a>.
		Syntax highlighting (see <a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a>) is also overruled by
		matches.</div>
<div class="old-help-para">		Note that highlighting the last used search pattern with
		<a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> is used in all windows, while the pattern defined
		with ":match" only exists in the current window.  It is kept
		when switching to another buffer.</div>
<div class="old-help-para">		<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> does not apply, use <a href="/neovim-docs-web/en/pattern#%2F%5Cc">/\c</a> in the pattern to
		ignore case.  Otherwise case is not ignored.</div>
<div class="old-help-para">		<a href="/neovim-docs-web/en/options#'redrawtime'">'redrawtime'</a> defines the maximum time searched for pattern
		matches.</div>
<div class="old-help-para">		When matching end-of-line and Vim redraws only part of the
		display you may get unexpected results.  That is because Vim
		looks for a match in the line where redrawing starts.</div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/builtin#matcharg()">matcharg()</a> and <a href="/neovim-docs-web/en/builtin#getmatches()">getmatches()</a>. The former returns
		the highlight group and pattern of a previous <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a>
		command.  The latter returns a list with highlight groups and
		patterns defined by both <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a> and <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a>.</div>
<div class="old-help-para">		Highlighting matches using <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> are limited to three
		matches (aside from <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a>, <a href="/neovim-docs-web/en/pattern#%3A2match">:2match</a> and <a href="/neovim-docs-web/en/pattern#%3A3match">:3match</a> are
		available). <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a> does not have this limitation and in
		addition makes it possible to prioritize matches.</div>
<div class="old-help-para">		Another example, which highlights all characters in virtual
		column 72 and more:<pre>:highlight rightMargin term=bold ctermfg=blue guifg=blue
:match rightMargin /.\%&gt;72v/</pre></div>
<div class="old-help-para">		To highlight all character that are in virtual column 7:<pre>:highlight col8 ctermbg=grey guibg=grey
:match col8 /\%&lt;8v.\%&gt;7v/</pre></div>
<div class="old-help-para">		Note the use of two items to also match a character that
		occupies more than one virtual column, such as a TAB.</div>
<div class="old-help-para">:mat[ch]
:mat[ch] none
		Clear a previously defined match pattern.</div>
<div class="old-help-para">:2mat[ch] <code>{group}</code> /{pattern}/					<a name="%3A2match"></a><code class="help-tag-right">:2match</code>
:2mat[ch]
:2mat[ch] none
:3mat[ch] <code>{group}</code> /{pattern}/					<a name="%3A3match"></a><code class="help-tag-right">:3match</code>
:3mat[ch]
:3mat[ch] none
		Just like <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> above, but set a separate match.  Thus
		there can be three matches active at the same time.  The match
		with the lowest number has priority if several match at the
		same position.
		The ":3match" command is used by the <a href="/neovim-docs-web/en/pi_paren#matchparen">matchparen</a> plugin.  You
		are suggested to use ":match" for manual matching and
		":2match" for another plugin.</div>
<div class="old-help-para"><h2 class="help-heading">11. Fuzzy matching<span class="help-heading-tags">					<a name="fuzzy-matching"></a><span class="help-tag">fuzzy-matching</span></span></h2></div>
<div class="old-help-para">Fuzzy matching refers to matching strings using a non-exact search string.
Fuzzy matching will match a string, if all the characters in the search string
are present anywhere in the string in the same order. Case is ignored.  In a
matched string, other characters can be present between two consecutive
characters in the search string. If the search string has multiple words, then
each word is matched separately. So the words in the search string can be
present in any order in a string.</div>
<div class="old-help-para">Fuzzy matching assigns a score for each matched string based on the following
criteria:
<div class="help-li" style=""> The number of sequentially matching characters.
</div><div class="help-li" style=""> The number of characters (distance) between two consecutive matching
      characters.
</div><div class="help-li" style=""> Matches at the beginning of a word
</div><div class="help-li" style=""> Matches at a camel case character (e.g. Case in CamelCase)
</div><div class="help-li" style=""> Matches after a path separator or a hyphen.
</div><div class="help-li" style=""> The number of unmatched characters in a string.
The matching string with the highest score is returned first.
</div></div>
<div class="old-help-para">For example, when you search for the "get pat" string using fuzzy matching, it
will match the strings "GetPattern", "PatternGet", "getPattern", "patGetter",
"getSomePattern", "MatchpatternGet" etc.</div>
<div class="old-help-para">The functions <a href="/neovim-docs-web/en/builtin#matchfuzzy()">matchfuzzy()</a> and <a href="/neovim-docs-web/en/builtin#matchfuzzypos()">matchfuzzypos()</a> can be used to fuzzy search
a string in a List of strings. The matchfuzzy() function returns a List of
matching strings. The matchfuzzypos() functions returns the List of matches,
the matching positions and the fuzzy match scores.</div>
<div class="old-help-para">The "f" flag of <code>:vimgrep</code> enables fuzzy matching.</div>

  
  