---
title: Tree Sitter
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Pattern Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="pattern-searches" class="section-title" href="#pattern-searches">Patterns and search commands</a>

The very basics can be found in section [03.9](#03.9) of the user manual.  A few more
explanations are in chapter 27 [usr_27.txt](#usr_27.txt).

Type [gO](#gO) to see the table of contents.


## <a id="search-commands" class="section-title" href="#search-commands">1. Search Commands</a> 

### <a id="/" class="section-title" href="#/">Note:</a>
/{pattern}[/]<CR>	Search forward for the [count]'th occurrence of
{pattern} [exclusive](#exclusive).

/{pattern}/{offset}<CR>	Search forward for the [count]'th occurrence of
{pattern} and go [{offset}](#{offset}) lines up or down.
[linewise](#linewise).

### <a id="/<CR>" class="section-title" href="#/<CR>">Note:</a>
/<CR>			Search forward for the [count]'th occurrence of the
latest used pattern [last-pattern](#last-pattern) with latest used
[{offset}](#{offset}).

//{offset}<CR>		Search forward for the [count]'th occurrence of the
latest used pattern [last-pattern](#last-pattern) with new
[{offset}](#{offset}).  If {offset} is empty no offset is used.

### <a id="?" class="section-title" href="#?">Note:</a>
?{pattern}[?]<CR>	Search backward for the [count]'th previous
occurrence of {pattern} [exclusive](#exclusive).

?{pattern}?{offset}<CR>	Search backward for the [count]'th previous
occurrence of {pattern} and go [{offset}](#{offset}) lines up or
down [linewise](#linewise).

### <a id="?<CR>" class="section-title" href="#?<CR>">Note:</a>
?<CR>			Search backward for the [count]'th occurrence of the
latest used pattern [last-pattern](#last-pattern) with latest used
[{offset}](#{offset}).

??{offset}<CR>		Search backward for the [count]'th occurrence of the
latest used pattern [last-pattern](#last-pattern) with new
[{offset}](#{offset}).  If {offset} is empty no offset is used.

### <a id="n" class="section-title" href="#n">Note:</a>
n			Repeat the latest "/" or "?" [count] times.
If the cursor doesn't move the search is repeated with
count + 1.
[last-pattern](#last-pattern)

### <a id="N" class="section-title" href="#N">Note:</a>
N			Repeat the latest "/" or "?" [count] times in
opposite direction. [last-pattern](#last-pattern)

### <a id="star E348 E349" class="section-title" href="#star E348 E349">Note:</a>
*			Search forward for the [count]'th occurrence of the
word nearest to the cursor.  The word used for the
search is the first of:
1. the keyword under the cursor ['iskeyword'](#'iskeyword')
2. the first keyword after the cursor, in the
current line
3. the non-blank word under the cursor
4. the first non-blank word after the cursor,
in the current line
Only whole keywords are searched for, like with the
command "/\<keyword\>".  [exclusive](#exclusive)
'ignorecase' is used, 'smartcase' is not.
### <a id="v_star-default" class="section-title" href="#v_star-default">Note:</a>
In Visual mode, search forward for the current selection.
[default-mappings](#default-mappings)

### <a id="#" class="section-title" href="##">Note:</a>
### <a id="Same as "", but search backward." class="section-title" href="#Same as "", but search backward.">#</a>
(character 163) also works.  If the "#" key works as
backspace, try using "stty erase <BS>" before starting
Vim (<BS> is CTRL-H or a real backspace).
### <a id="v_#-default" class="section-title" href="#v_#-default">Note:</a>
In Visual mode, search backward for the current selection.
[default-mappings](#default-mappings)

### <a id="gstar" class="section-title" href="#gstar">Note:</a>
### <a id="Like "", but don't put "\<" and "\>" around the word." class="section-title" href="#Like "", but don't put "\<" and "\>" around the word.">g*</a>
This makes the search also find matches that are not a
whole word.

### <a id="g#" class="section-title" href="#g#">Note:</a>
g#			Like "#", but don't put "\<" and "\>" around the word.
This makes the search also find matches that are not a
whole word.

### <a id="gd" class="section-title" href="#gd">Note:</a>
gd			Goto local Declaration.  When the cursor is on a local
variable, this command will jump to its declaration.
First Vim searches for the start of the current
function, just like "[[".  If it is not found the
search stops in line 1.  If it is found, Vim goes back
until a blank line is found.  From this position Vim
searches for the keyword under the cursor, like with
### <a id=""", but lines that look like a comment are ignored" class="section-title" href="#"", but lines that look like a comment are ignored">Note:</a>
(see 'comments' option).
Note that this is not guaranteed to work, Vim does not
really check the syntax, it only searches for a match
with the keyword.  If included files also need to be
searched use the commands listed in [include-search](#include-search).
After this command [n](#n) searches forward for the next
match (not backward).

### <a id="gD" class="section-title" href="#gD">Note:</a>
gD			Goto global Declaration.  When the cursor is on a
global variable that is defined in the file, this
command will jump to its declaration.  This works just
like "gd", except that the search for the keyword
always starts in line 1.

### <a id="1gd" class="section-title" href="#1gd">Note:</a>
1gd			Like "gd", but ignore matches inside a {} block that
ends before the cursor position.

### <a id="1gD" class="section-title" href="#1gD">Note:</a>
1gD			Like "gD", but ignore matches inside a {} block that
ends before the cursor position.

### <a id="CTRL-C" class="section-title" href="#CTRL-C">Note:</a>
CTRL-C			Interrupt current (search) command.
In Normal mode, any pending command is aborted.

### <a id=":noh :nohlsearch" class="section-title" href="#:noh :nohlsearch">Note:</a>
:noh[lsearch]		Stop the highlighting for the 'hlsearch' option.  It
is automatically turned back on when using a search
command, or setting the 'hlsearch' option.
This command doesn't work in an autocommand, because
the highlighting state is saved and restored when
executing autocommands [autocmd-searchpat](#autocmd-searchpat).
Same thing for when invoking a user function.

While typing the search pattern the current match will be shown if the
'incsearch' option is on.  Remember that you still have to finish the search
command with <CR> to actually position the cursor at the displayed match.  Or
use <Esc> to abandon the search.

All matches for the last used search pattern will be highlighted if you set
the 'hlsearch' option.  This can be suspended with the [:nohlsearch](#:nohlsearch) command.

When 'shortmess' does not include the "S" flag, Vim will automatically show an
index, on which the cursor is. This can look like this:
```

[1/5]		Cursor is on first of 5 matches.
[1/>99]	Cursor is on first of more than 99 matches.
[>99/>99]	Cursor is after 99 match of more than 99 matches.
[?/??]	Unknown how many matches exists, generating the
statistics was aborted because of search timeout.

Note: the count does not take offset into account.

When no match is found you get the error: *E486* Pattern not found
Note that for the `:global` command, you get a normal message "Pattern not
found", for Vi compatibility.
For the [:s](#:s) command the "e" flag can be used to avoid the error message
[:s_flags](#:s_flags).

### <a id="search-offset {offset}" class="section-title" href="#search-offset {offset}">Note:</a>
These commands search for the specified pattern.  With "/" and "?" an
additional offset may be given.  There are two types of offsets: line offsets
and character offsets.

The offset gives the cursor position relative to the found match:
[num]	[num] lines downwards, in column 1
+[num]	[num] lines downwards, in column 1
-[num]	[num] lines upwards, in column 1
e[+num]	[num] characters to the right of the end of the match
e[-num]	[num] characters to the left of the end of the match
s[+num]	[num] characters to the right of the start of the match
s[-num]	[num] characters to the left of the start of the match
b[+num]	[num] identical to s[+num] above (mnemonic: begin)
b[-num]	[num] identical to s[-num] above (mnemonic: begin)
;{pattern}  perform another search, see [//;](#//;)

If a '-' or '+' is given but [num] is omitted, a count of one will be used.
When including an offset with 'e', the search becomes inclusive (the
character the cursor lands on is included in operations).

Examples:

pattern			cursor position	~
/test/+1		one line below "test", in column 1
/test/e			on the last t of "test"
/test/s+2		on the 's' of "test"
/test/b-3		three characters before "test"

If one of these commands is used after an operator, the characters between
the cursor position before and after the search is affected.  However, if a
line offset is given, the whole lines between the two cursor positions are
affected.

An example of how to search for matches with a pattern and change the match
with another word:
```
/foo<CR>	find "foo"
c//e<CR>	change until end of match
bar<Esc>	type replacement
//<CR>		go to start of next match
c//e<CR>	change until end of match
beep<Esc>	type another replacement
etc.

```

### <a id="//; E386" class="section-title" href="#//; E386">Note:</a>
A very special offset is ';' followed by another search command.  For example:
```

/test 1/;/test
### <a id="/test./+1;?ing?" class="section-title" href="#/test./+1;?ing?">Note:</a>

The first one first finds the next occurrence of "test 1", and then the first
occurrence of "test" after that.

This is like executing two search commands after each other, except that:
- It can be used as a single motion command after an operator.
- The direction for a following "n" or "N" command comes from the first
search command.
- When an error occurs the cursor is not moved at all.

### <a id="last-pattern" class="section-title" href="#last-pattern">Note:</a>
The last used pattern and offset are remembered.  They can be used to repeat
the search, possibly in another direction or with another count.  Note that
two patterns are remembered: One for "normal" search commands and one for the
substitute command ":s".  Each time an empty pattern is given, the previously
used pattern is used.  However, if there is no previous search command, a
previous substitute pattern is used, if possible.

The 'magic' option sticks with the last used pattern.  If you change 'magic',
this will not change how the last used pattern will be interpreted.
The 'ignorecase' option does not do this.  When 'ignorecase' is changed, it
will result in the pattern to match other text.

All matches for the last used search pattern will be highlighted if you set
the 'hlsearch' option.

To clear the last used search pattern:
```
:let @/ = ""
This will not set the pattern to an empty string, because that would match
everywhere.  The pattern is really cleared, like when starting Vim.

The search usually skips matches that don't move the cursor.  Whether the next
match is found at the next character or after the skipped match depends on the
'c' flag in 'cpoptions'.  See [cpo-c](#cpo-c).
with 'c' flag:   "/..." advances 1 to 3 characters
without 'c' flag:   "/..." advances 1 character
The unpredictability with the 'c' flag is caused by starting the search in the
first column, skipping matches until one is found past the cursor position.

When searching backwards, searching starts at the start of the line, using the
'c' flag in 'cpoptions' as described above.  Then the last match before the
cursor position is used.

In Vi the ":tag" command sets the last search pattern when the tag is searched
for.  In Vim this is not done, the previous search pattern is still remembered,
unless the 't' flag is present in 'cpoptions'.  The search pattern is always
put in the search history.

If the 'wrapscan' option is on (which is the default), searches wrap around
the end of the buffer.  If 'wrapscan' is not set, the backward search stops
at the beginning and the forward search stops at the end of the buffer.  If
'wrapscan' is set and the pattern was not found the error message "pattern
not found" is given, and the cursor will not be moved.  If 'wrapscan' is not
set the message becomes "search hit BOTTOM without match" when searching
forward, or "search hit TOP without match" when searching backward.  If
wrapscan is set and the search wraps around the end of the file the message
"search hit TOP, continuing at BOTTOM" or "search hit BOTTOM, continuing at
TOP" is given when searching backwards or forwards respectively.  This can be
switched off by setting the 's' flag in the 'shortmess' option.  The highlight
method 'w' is used for this message (default: standout).

### <a id="search-range" class="section-title" href="#search-range">Note:</a>
You can limit the search command "/" to a certain range of lines by including
\%>l items.  For example, to match the word "limit" below line 199 and above
line 300:
```
/\%>199l\%<300llimit
Also see [/\%>l](#/\%>l).

Another way is to use the ":substitute" command with the 'c' flag.  Example:
```
:.,300s/Pattern//gc
This command will search from the cursor position until line 300 for
"Pattern".  At the match, you will be asked to type a character.  Type 'q' to
stop at this match, type 'n' to find the next match.

The "*", "#", "g*" and "g#" commands look for a word near the cursor in this
order, the first one that is found is used:
- The keyword currently under the cursor.
- The first keyword to the right of the cursor, in the same line.
- The WORD currently under the cursor.
- The first WORD to the right of the cursor, in the same line.
The keyword may only contain letters and characters in 'iskeyword'.
The WORD may contain any non-blanks (<Tab>s and/or <Space>s).
Note that if you type with ten fingers, the characters are easy to remember:
the "#" is under your left hand middle finger (search to the left and up) and
the "*" is under your right hand middle finger (search to the right and down).
(this depends on your keyboard layout though).

### <a id="E956" class="section-title" href="#E956">Note:</a>
In very rare cases a regular expression is used recursively.  This can happen
when executing a pattern takes a long time and when checking for messages on
channels a callback is invoked that also uses a pattern or an autocommand is
triggered.  In most cases this should be fine, but if a pattern is in use when
it's used again it fails.  Usually this means there is something wrong with
the pattern.


## <a id="search-pattern pattern [pattern]" class="section-title" href="#search-pattern pattern [pattern]">2. the Definition of a Pattern</a> <span id="regular-expression"></span>

### <a id="E383 E476" class="section-title" href="#E383 E476">Note:</a>

For starters, read chapter 27 of the user manual [usr_27.txt](#usr_27.txt).

### <a id="/bar /\bar /pattern" class="section-title" href="#/bar /\bar /pattern">Note:</a>
1. A pattern is one or more branches, separated by "\|".  It matches anything
that matches one of the branches.  Example: "foo\|beep" matches "foo" and
matches "beep".  If more than one branch matches, the first one is used.

pattern ::=	    branch
or  branch \| branch
or  branch \[ branch \](# branch \) branch
etc.

### <a id="/branch /\&" class="section-title" href="#/branch /\&">Note:</a>
2. A branch is one or more concats, separated by "\&".  It matches the last
concat, but only if all the preceding concats also match at the same
position.  Examples:
"foobeep\&..." matches "foo" in "foobeep".
".*Peter\&.*Bob" matches in a line containing both "Peter" and "Bob"

branch ::=	    concat
or  concat \& concat
or  concat \& concat \& concat
etc.

### <a id="/concat" class="section-title" href="#/concat">Note:</a>
3. A concat is one or more pieces, concatenated.  It matches a match for the
first piece, followed by a match for the second piece, etc.  Example:
"f[0-9]b", first matches "f", then a digit and then "b".

concat  ::=	    piece
or  piece piece
or  piece piece piece
etc.

### <a id="/piece" class="section-title" href="#/piece">Note:</a>
4. A piece is an atom, possibly followed by a multi, an indication of how many
times the atom can be matched.  Example: "a*" matches any sequence of "a"
characters: "", "a", "aa", etc.  See [/multi](#/multi).

piece   ::=	    atom
or  atom  multi

### <a id="/atom" class="section-title" href="#/atom">Note:</a>
5. An atom can be one of a long list of items.  Many atoms match one character
in the text.  It is often an ordinary character or a character class.
Parentheses can be used to make a pattern into an atom.  The "\z(\)"
construct is only for syntax highlighting.

atom    ::=	    ordinary-atom		[/ordinary-atom](#/ordinary-atom)
or  \( pattern \)		[/\(](#/\()
or  \%( pattern \)		[/\%(](#/\%()
or  \z( pattern \)		[/\z(](#/\z()


### <a id="/\%#= two-engines NFA" class="section-title" href="#/\%#= two-engines NFA">Note:</a>
Vim includes two regexp engines:
1. An old, backtracking engine that supports everything.
2. A new, NFA engine that works much faster on some patterns, possibly slower
on some patterns.

Vim will automatically select the right engine for you.  However, if you run
into a problem or want to specifically select one engine or the other, you can
prepend one of the following to the pattern:

\%#=0	Force automatic selection.  Only has an effect when
'regexpengine' has been set to a non-zero value.
\%#=1	Force using the old engine.
\%#=2	Force using the NFA engine.

You can also use the 'regexpengine' option to change the default.

### <a id="E864 E868 E874 E875 E876 E877 E878" class="section-title" href="#E864 E868 E874 E875 E876 E877 E878">Note:</a>
If selecting the NFA engine and it runs into something that is not implemented
the pattern will not match.  This is only useful when debugging Vim.


## <a id="&#x2F;magic" class="section-title" href="#&#x2F;magic">3. Magic</a> 

Some characters in the pattern, such as letters, are taken literally.  They
match exactly the same character in the text.  When preceded with a backslash
however, these characters may get a special meaning.  For example, "a" matches
the letter "a", while "\a" matches any alphabetic character.

Other characters have a special meaning without a backslash.  They need to be
preceded with a backslash to match literally.  For example "." matches any
character while "\." matches a dot.

If a character is taken literally or not depends on the 'magic' option and the
items in the pattern mentioned next.  The 'magic' option should always be set,
but it can be switched off for Vi compatibility.  We mention the effect of
'nomagic' here for completeness, but we recommend against using that.
### <a id="/\m /\M" class="section-title" href="#/\m /\M">Note:</a>
Use of "\m" makes the pattern after it be interpreted as if 'magic' is set,
ignoring the actual value of the 'magic' option.
Use of "\M" makes the pattern after it be interpreted as if 'nomagic' is used.
### <a id="/\v /\V" class="section-title" href="#/\v /\V">Note:</a>
Use of "\v" means that after it, all ASCII characters except '0'-'9', 'a'-'z',
'A'-'Z' and '_' have special meaning: "very magic"

Use of "\V" means that after it, only a backslash and the terminating
character (usually / or ?) have special meaning: "very nomagic"

Examples:
after:	  \v	   \m	    \M	     \V		matches ~
'magic' 'nomagic'
a	   a	    a	     a		literal 'a'
\a	   \a	    \a	     \a		any alphabetic character
.	   .	    \.	     \.		any character
\.	   \.	    .	     .		literal dot
$	   $	    $	     \$		end-of-line
### <a id="" class="section-title" href="#">Note:</a>
~	   ~	    \~	     \~		latest substitute string
()	   \(\)     \(\)     \(\)	group as an atom
[	   \|	    \|	     \](#	   \|	    \|	     \)		nothing: separates alternatives
\\	   \\	    \\	     \\		literal backslash
\{	   {	    {	     {		literal curly brace

{only Vim supports \m, \M, \v and \V}

If you want to you can make a pattern immune to the 'magic' option being set
or not by putting "\m" or "\M" at the start of the pattern.


## <a id="pattern-overview" class="section-title" href="#pattern-overview">4. Overview of Pattern Items</a> <span id="E865"></span>

### <a id="/multi E61 E62" class="section-title" href="#/multi E61 E62">Overview of multi items.</a>
### <a id="E64 E871" class="section-title" href="#E64 E871">More explanation and examples below, follow the links.</a>

multi ~
'magic' 'nomagic'	matches of the preceding atom ~
[/star](#/star)	*	\*	0 or more	as many as possible
[/\+](#/\+)	\+	\+	1 or more	as many as possible
[/\=](#/\=)	\=	\=	0 or 1		as many as possible
[/\?](#/\?)	\?	\?	0 or 1		as many as possible

[/\{](#/\{)	\{n,m}	\{n,m}	n to m		as many as possible
\{n}	\{n}	n		exactly
\{n,}	\{n,}	at least n	as many as possible
\{,m}	\{,m}	0 to m		as many as possible
\{}	\{}	0 or more	as many as possible (same as *)

[/\{-](#/\{-)	\{-n,m}	\{-n,m}	n to m		as few as possible
\{-n}	\{-n}	n		exactly
\{-n,}	\{-n,}	at least n	as few as possible
\{-,m}	\{-,m}	0 to m		as few as possible
\{-}	\{-}	0 or more	as few as possible

### <a id="E59" class="section-title" href="#E59">Note:</a>
[/\@>](#/\@>)	\@>	\@>	1, like matching a whole pattern
[/\@=|	\@=	\@=	nothing, requires a match |/zero-width](#/\@=|	\@=	\@=	nothing, requires a match |/zero-width)
[/\@!|	\@!	\@!	nothing, requires NO match |/zero-width](#/\@!|	\@!	\@!	nothing, requires NO match |/zero-width)
[/\@<=|	\@<=	\@<=	nothing, requires a match behind |/zero-width](#/\@<=|	\@<=	\@<=	nothing, requires a match behind |/zero-width)
[/\@<!|	\@<!	\@<!	nothing, requires NO match behind |/zero-width](#/\@<!|	\@<!	\@<!	nothing, requires NO match behind |/zero-width)


### <a id="/ordinary-atom" class="section-title" href="#/ordinary-atom">Overview of ordinary atoms.</a>
More explanation and examples below, follow the links.

ordinary atom ~
magic   nomagic	matches ~
[/^|	^	^	start-of-line (at start of pattern) |/zero-width](#/^|	^	^	start-of-line (at start of pattern) |/zero-width)
[/\^](#/\^)	\^	\^	literal '^'
[/\_^|	\_^	\_^	start-of-line (used anywhere) |/zero-width](#/\_^|	\_^	\_^	start-of-line (used anywhere) |/zero-width)
[/$|	$	$	end-of-line (at end of pattern) |/zero-width](#/$|	$	$	end-of-line (at end of pattern) |/zero-width)
[/\$](#/\$)	\$	\$	literal '$'
[/\_$|	\_$	\_$	end-of-line (used anywhere) |/zero-width](#/\_$|	\_$	\_$	end-of-line (used anywhere) |/zero-width)
[/.](#/.)	.	\.	any single character (not an end-of-line)
[/\_.](#/\_.)	\_.	\_.	any single character or end-of-line
[/\<|	\<	\<	beginning of a word |/zero-width](#/\<|	\<	\<	beginning of a word |/zero-width)
[/\>|	\>	\>	end of a word |/zero-width](#/\>|	\>	\>	end of a word |/zero-width)
[/\zs](#/\zs)	\zs	\zs	anything, sets start of match
[/\ze](#/\ze)	\ze	\ze	anything, sets end of match
### <a id="E71" class="section-title" href="#E71">[/\%^|	\%^	\%^	beginning of file |/zero-width](#/\%^|	\%^	\%^	beginning of file |/zero-width)</a>
[/\%$|	\%$	\%$	end of file |/zero-width](#/\%$|	\%$	\%$	end of file |/zero-width)
[/\%V|	\%V	\%V	inside Visual area |/zero-width](#/\%V|	\%V	\%V	inside Visual area |/zero-width)
[/\%#|	\%#	\%#	cursor position |/zero-width](#/\%#|	\%#	\%#	cursor position |/zero-width)
[/\%'m|	\%'m	\%'m	mark m position |/zero-width](#/\%'m|	\%'m	\%'m	mark m position |/zero-width)
[/\%l|	\%23l	\%23l	in line 23 |/zero-width](#/\%l|	\%23l	\%23l	in line 23 |/zero-width)
[/\%c|	\%23c	\%23c	in column 23 |/zero-width](#/\%c|	\%23c	\%23c	in column 23 |/zero-width)
[/\%v|	\%23v	\%23v	in virtual column 23 |/zero-width](#/\%v|	\%23v	\%23v	in virtual column 23 |/zero-width)

### <a id="/character-classes" class="section-title" href="#/character-classes">Character classes:</a>
magic   nomagic	matches ~
[/\i](#/\i)	\i	\i	identifier character (see 'isident' option)
[/\I](#/\I)	\I	\I	like "\i", but excluding digits
[/\k](#/\k)	\k	\k	keyword character (see 'iskeyword' option)
[/\K](#/\K)	\K	\K	like "\k", but excluding digits
[/\f](#/\f)	\f	\f	file name character (see 'isfname' option)
[/\F](#/\F)	\F	\F	like "\f", but excluding digits
[/\p](#/\p)	\p	\p	printable character (see 'isprint' option)
[/\P](#/\P)	\P	\P	like "\p", but excluding digits
[/\s](#/\s)	\s	\s	whitespace character: <Space> and <Tab>
[/\S](#/\S)	\S	\S	non-whitespace character; opposite of \s
[/\d](#/\d)	\d	\d	digit:				[0-9]
[/\D](#/\D)	\D	\D	non-digit:			[^0-9]
[/\x](#/\x)	\x	\x	hex digit:			[0-9A-Fa-f]
[/\X](#/\X)	\X	\X	non-hex digit:			[^0-9A-Fa-f]
[/\o](#/\o)	\o	\o	octal digit:			[0-7]
[/\O](#/\O)	\O	\O	non-octal digit:		[^0-7]
[/\w](#/\w)	\w	\w	word character:			[0-9A-Za-z_]
[/\W](#/\W)	\W	\W	non-word character:		[^0-9A-Za-z_]
[/\h](#/\h)	\h	\h	head of word character:		[A-Za-z_]
[/\H](#/\H)	\H	\H	non-head of word character:	[^A-Za-z_]
[/\a](#/\a)	\a	\a	alphabetic character:		[A-Za-z]
[/\A](#/\A)	\A	\A	non-alphabetic character:	[^A-Za-z]
[/\l](#/\l)	\l	\l	lowercase character:		[a-z]
[/\L](#/\L)	\L	\L	non-lowercase character:	[^a-z]
[/\u](#/\u)	\u	\u	uppercase character:		[A-Z]
[/\U](#/\U)	\U	\U	non-uppercase character		[^A-Z]
[/\_](#/\_)	\_x	\_x	where x is any of the characters above: character
class with end-of-line included
(end of character classes)

magic   nomagic	matches ~
[/\e](#/\e)	\e	\e	<Esc>
[/\t](#/\t)	\t	\t	<Tab>
[/\r](#/\r)	\r	\r	<CR>
[/\b](#/\b)	\b	\b	<BS>
[/\n](#/\n)	\n	\n	end-of-line
[/~](#/~)	~	\~	last given substitute string
[/\1](#/\1)	\1	\1	same string as matched by first \(\)
[/\2](#/\2)	\2	\2	Like "\1", but uses second \(\)
...
[/\9](#/\9)	\9	\9	Like "\1", but uses ninth \(\)
### <a id="E68" class="section-title" href="#E68">Note:</a>
[/\z1|	\z1	\z1	only for syntax highlighting, see |:syn-ext-match](#/\z1|	\z1	\z1	only for syntax highlighting, see |:syn-ext-match)
...
[/\z1|	\z9	\z9	only for syntax highlighting, see |:syn-ext-match](#/\z1|	\z9	\z9	only for syntax highlighting, see |:syn-ext-match)

x	x	a character with no special meaning matches itself

[/[]](#/[])	[]	\[]	any character specified inside the []
[/\%[]](#/\%[])	\%[]	\%[]	a sequence of optionally matched atoms

[/\c](#/\c)	\c	\c	ignore case, do not use the 'ignorecase' option
[/\C](#/\C)	\C	\C	match case, do not use the 'ignorecase' option
[/\Z](#/\Z)	\Z	\Z	ignore differences in Unicode "combining characters".
Useful when searching voweled Hebrew or Arabic text.

magic   nomagic	matches ~
[/\m](#/\m)	\m	\m	'magic' on for the following chars in the pattern
[/\M](#/\M)	\M	\M	'magic' off for the following chars in the pattern
[/\v](#/\v)	\v	\v	the following chars in the pattern are "very magic"
[/\V](#/\V)	\V	\V	the following chars in the pattern are "very nomagic"
[/\%#=|   \%#=1   \%#=1   select regexp engine |/zero-width](#/\%#=|   \%#=1   \%#=1   select regexp engine |/zero-width)

[/\%d](#/\%d)	\%d	\%d	match specified decimal character (eg \%d123)
[/\%x](#/\%x)	\%x	\%x	match specified hex character (eg \%x2a)
[/\%o](#/\%o)	\%o	\%o	match specified octal character (eg \%o040)
[/\%u](#/\%u)	\%u	\%u	match specified multibyte character (eg \%u20ac)
[/\%U](#/\%U)	\%U	\%U	match specified large multibyte character (eg
\%U12345678)
[/\%C](#/\%C)	\%C	\%C	match any composing characters

Example			matches ~
\<\I\i*		or
\<\h\w*
\<[a-zA-Z_][a-zA-Z0-9_]*
An identifier (e.g., in a C program).

\(\.$\|\. \)		A period followed by <EOL> or a space.

[.!?][])"']*\($\|[ ]\)	A search pattern that finds the end of a sentence,
with almost the same definition as the ")" command.

cat\Z			Both "cat" and "càt" ("a" followed by 0x0300)
Does not match "càt" (character 0x00e0), even
though it may look the same.


## <a id="pattern-multi-items" class="section-title" href="#pattern-multi-items">5. Multi Items</a> 

An atom can be followed by an indication of how many times the atom can be
matched and in what way.  This is called a multi.  See [/multi](#/multi) for an
overview.

### <a id="/star /\star" class="section-title" href="#/star /\star">Note:</a>
*	(use \* when 'magic' is not set)
Matches 0 or more of the preceding atom, as many as possible.
Example  'nomagic'	matches ~
### <a id="a\" class="section-title" href="#a\">	a*</a>
### <a id="\.\" class="section-title" href="#\.\">	.*</a>
### <a id="\_.\	everything up to the end of the buffer" class="section-title" href="#\_.\	everything up to the end of the buffer">	\_.*</a>
### <a id="\_.\END	everything up to and including the last "END"" class="section-title" href="#\_.\END	everything up to and including the last "END"">	\_.*End</a>
in the buffer

Exception: When "*" is used at the start of the pattern or just after
"^" it matches the star character.

Be aware that repeating "\_." can match a lot of text and take a long
### <a id="For example, "\_.END" matches all text from the current" class="section-title" href="#For example, "\_.END" matches all text from the current">	time.</a>
### <a id="Since the """ class="section-title" href="#Since the """>	position to the last occurrence of "END" in the file.</a>
will match as many as possible, this first skips over all lines until
the end of the file and then tries matching "END", backing up one
character at a time.

### <a id="/\+" class="section-title" href="#/\+">Note:</a>
\+	Matches 1 or more of the preceding atom, as many as possible.
Example		matches ~
^.\+$		any non-empty line
\s\+		white space of at least one character

### <a id="/\=" class="section-title" href="#/\=">Note:</a>
\=	Matches 0 or 1 of the preceding atom, as many as possible.
Example		matches ~
foo\=		"fo" and "foo"

### <a id="/\?" class="section-title" href="#/\?">Note:</a>
\?	Just like \=.  Cannot be used when searching backwards with the "?"
command.

### <a id="/\{ E60 E554 E870" class="section-title" href="#/\{ E60 E554 E870">Note:</a>
\{n,m}	Matches n to m of the preceding atom, as many as possible
\{n}	Matches n of the preceding atom
\{n,}	Matches at least n of the preceding atom, as many as possible
\{,m}	Matches 0 to m of the preceding atom, as many as possible
\{}	Matches 0 or more of the preceding atom, as many as possible (like *)
### <a id="/\{-" class="section-title" href="#/\{-">Note:</a>
\{-n,m}	matches n to m of the preceding atom, as few as possible
\{-n}	matches n of the preceding atom
\{-n,}	matches at least n of the preceding atom, as few as possible
\{-,m}	matches 0 to m of the preceding atom, as few as possible
\{-}	matches 0 or more of the preceding atom, as few as possible

n and m are positive decimal numbers or zero
### <a id="non-greedy" class="section-title" href="#non-greedy">Note:</a>
If a "-" appears immediately after the "{", then a shortest match
first algorithm is used (see example below).  In particular, "\{-}" is
the same as "*" but uses the shortest match first algorithm.  BUT: A
match that starts earlier is preferred over a shorter match: "a\{-}b"
matches "aaab" in "xaaab".

Example			matches ~
ab\{2,3}c		"abbc" or "abbbc"
a\{5}			"aaaaa"
ab\{2,}c		"abbc", "abbbc", "abbbbc", etc.
ab\{,3}c		"ac", "abc", "abbc" or "abbbc"
a[bc]\{3}d		"abbbd", "abbcd", "acbcd", "acccd", etc.
a\(bc\)\{1,2}d		"abcd" or "abcbcd"
a[bc]\{-}[cd]		"abc" in "abcd"
a[bc]*[cd]		"abcd" in "abcd"

The } may optionally be preceded with a backslash: \{n,m\}.

### <a id="/\@=" class="section-title" href="#/\@=">Note:</a>
\@=	Matches the preceding atom with zero width.
Like "(?=pattern)" in Perl.
Example			matches ~
foo\(bar\)\@=		"foo" in "foobar"
foo\(bar\)\@=foo	nothing
### <a id="/zero-width" class="section-title" href="#/zero-width">Note:</a>
When using "\@=" (or "^", "$", "\<", "\>") no characters are included
in the match.  These items are only used to check if a match can be
made.  This can be tricky, because a match with following items will
be done in the same position.  The last example above will not match
"foobarfoo", because it tries match "foo" in the same position where
"bar" matched.

Note that using "\&" works the same as using "\@=": "foo\&.." is the
same as "\(foo\)\@=..".  But using "\&" is easier, you don't need the
parentheses.


### <a id="/\@!" class="section-title" href="#/\@!">Note:</a>
\@!	Matches with zero width if the preceding atom does NOT match at the
current position. [/zero-width](#/zero-width)
Like "(?!pattern)" in Perl.
Example			matches ~
foo\(bar\)\@!		any "foo" not followed by "bar"
a.\{-}p\@!		"a", "ap", "app", "appp", etc. not immediately
followed by a "p"
if \(\(then\)\@!.\)*$	"if " not followed by "then"

Using "\@!" is tricky, because there are many places where a pattern
### <a id=""a.p\@!" will match from an "a" to the end of the" class="section-title" href="#"a.p\@!" will match from an "a" to the end of the">	does not match.</a>
line, because ".*" can match all characters in the line and the "p"
doesn't match at the end of the line.  "a.\{-}p\@!" will match any
"a", "ap", "app", etc. that isn't followed by a "p", because the "."
can match a "p" and "p\@!" doesn't match after that.

You can't use "\@!" to look for a non-match before the matching
position: "\(foo\)\@!bar" will match "bar" in "foobar", because at the
position where "bar" matches, "foo" does not match.  To avoid matching
"foobar" you could use "\(foo\)\@!...bar", but that doesn't match a
bar at the start of a line.  Use "\(foo\)\@<!bar".

Useful example: to find "foo" in a line that does not contain "bar":
```
### <a id="/^\%(.bar\)\@!.\zsfoo" class="section-title" href="#/^\%(.bar\)\@!.\zsfoo">Note:</a>

```
	This pattern first checks that there is not a single position in the
### <a id="If ".bar" matches somewhere the \@! will" class="section-title" href="#If ".bar" matches somewhere the \@! will">	line where "bar" matches.</a>
reject the pattern.  When there is no match any "foo" will be found.
The "\zs" is to have the match start just before "foo".

### <a id="/\@<=" class="section-title" href="#/\@<=">Note:</a>
\@<=	Matches with zero width if the preceding atom matches just before what
follows. [/zero-width](#/zero-width)
Like "(?<=pattern)" in Perl, but Vim allows non-fixed-width patterns.
Example			matches ~
\(an\_s\+\)\@<=file	"file" after "an" and white space or an
end-of-line
For speed it's often much better to avoid this multi.  Try using "\zs"
instead [/\zs](#/\zs).  To match the same as the above example:
an\_s\+\zsfile
At least set a limit for the look-behind, see below.

"\@<=" and "\@<!" check for matches just before what follows.
Theoretically these matches could start anywhere before this position.
But to limit the time needed, only the line where what follows matches
is searched, and one line before that (if there is one).  This should
be sufficient to match most things and not be too slow.

In the old regexp engine the part of the pattern after "\@<=" and
"\@<!" are checked for a match first, thus things like "\1" don't work
to reference \(\) inside the preceding atom.  It does work the other
way around:
Bad example			matches ~
\%#=1\1\@<=,\([a-z]\+\)		",abc" in "abc,abc"

However, the new regexp engine works differently, it is better to not
rely on this behavior, do not use \@<= if it can be avoided:
Example				matches ~
\([a-z]\+\)\zs,\1		",abc" in "abc,abc"

\@123<=
Like "\@<=" but only look back 123 bytes. This avoids trying lots
of matches that are known to fail and make executing the pattern very
slow.  Example, check if there is a "<" just before "span":
/<\@1<=span
This will try matching "<" only one byte before "span", which is the
only place that works anyway.
After crossing a line boundary, the limit is relative to the end of
the line.  Thus the characters at the start of the line with the match
are not counted (this is just to keep it simple).
The number zero is the same as no limit.

### <a id="/\@<!" class="section-title" href="#/\@<!">Note:</a>
\@<!	Matches with zero width if the preceding atom does NOT match just
before what follows.  Thus this matches if there is no position in the
current or previous line where the atom matches such that it ends just
before what follows.  [/zero-width](#/zero-width)
Like "(?<!pattern)" in Perl, but Vim allows non-fixed-width patterns.
The match with the preceding atom is made to end just before the match
with what follows, thus an atom that ends in ".*" will work.
Warning: This can be slow (because many positions need to be checked
for a match).  Use a limit if you can, see below.
Example			matches ~
\(foo\)\@<!bar		any "bar" that's not in "foobar"
\(\/\/.*\)\@<!in	"in" which is not after "//"

\@123<!
Like "\@<!" but only look back 123 bytes. This avoids trying lots of
matches that are known to fail and make executing the pattern very
slow.

### <a id="/\@>" class="section-title" href="#/\@>">Note:</a>
\@>	Matches the preceding atom like matching a whole pattern.
Like "(?>pattern)" in Perl.
Example		matches ~
\(a*\)\@>a	nothing (the "a*" takes all the "a"'s, there can't be
another one following)

This matches the preceding atom as if it was a pattern by itself.  If
it doesn't match, there is no retry with shorter sub-matches or
### <a id="Observe this difference: "ab" and "aab" both match" class="section-title" href="#Observe this difference: "ab" and "aab" both match">	anything.</a>
"aaab", but in the second case the "a*" matches only the first two
### <a id=""\(a\)\@>ab" will not match "aaab", because the "a" matches" class="section-title" href="#"\(a\)\@>ab" will not match "aaab", because the "a" matches">	"a"s.</a>
the "aaa" (as many "a"s as possible), thus the "ab" can't match.


## <a id="Ordinary atoms" class="section-title" href="#Ordinary atoms">6.</a> 

An ordinary atom can be:

### <a id="/^" class="section-title" href="#/^">Note:</a>
^	At beginning of pattern or after "\|", "\(", "\%(" or "\n": matches
start-of-line; at other positions, matches literal '^'. [/zero-width](#/zero-width)
Example		matches ~
^beep(		the start of the C function "beep" (probably).

### <a id="/\^" class="section-title" href="#/\^">Note:</a>
\^	Matches literal '^'.  Can be used at any position in the pattern, but
not inside [].

### <a id="/\_^" class="section-title" href="#/\_^">Note:</a>
\_^	Matches start-of-line. [/zero-width](#/zero-width)  Can be used at any position in
the pattern, but not inside [].
Example		matches ~
\_s*\_^foo	white space and blank lines and then "foo" at
start-of-line

### <a id="/$" class="section-title" href="#/$">Note:</a>
$	At end of pattern or in front of "\|", "\)" or "\n" ('magic' on):
matches end-of-line <EOL>; at other positions, matches literal '$'.
[/zero-width](#/zero-width)

### <a id="/\$" class="section-title" href="#/\$">Note:</a>
\$	Matches literal '$'.  Can be used at any position in the pattern, but
not inside [].

### <a id="/\_$" class="section-title" href="#/\_$">Note:</a>
\_$	Matches end-of-line. [/zero-width](#/zero-width)  Can be used at any position in the
pattern, but not inside [].  Note that "a\_$b" never matches, since
"b" cannot match an end-of-line.  Use "a\nb" instead [/\n](#/\n).
Example		matches ~
foo\_$\_s*	"foo" at end-of-line and following white space and
blank lines

### <a id="/. /\." class="section-title" href="#/. /\.">.	(with 'nomagic': \.)</a>
Matches any single character, but not an end-of-line.

### <a id="/\_." class="section-title" href="#/\_.">Note:</a>
\_.	Matches any single character or end-of-line.
Careful: "\_.*" matches all text to the end of the buffer!

### <a id="/\<" class="section-title" href="#/\<">Note:</a>
\<	Matches the beginning of a word: The next char is the first char of a
word.  The 'iskeyword' option specifies what is a word character.
[/zero-width](#/zero-width)

### <a id="/\>" class="section-title" href="#/\>">Note:</a>
\>	Matches the end of a word: The previous char is the last char of a
word.  The 'iskeyword' option specifies what is a word character.
[/zero-width](#/zero-width)

### <a id="/\zs" class="section-title" href="#/\zs">Note:</a>
\zs	Matches at any position, but not inside [], and sets the start of the
match there: The next char is the first char of the whole match.
[/zero-width](#/zero-width)
Example:
```
### <a id="/^\s\zsif" class="section-title" href="#/^\s\zsif">Note:</a>

```
	matches an "if" at the start of a line, ignoring white space.
Can be used multiple times, the last one encountered in a matching
branch is used.  Example:
```
/\(.\{-}\zsFab\)\{3}

```
	Finds the third occurrence of "Fab".
This cannot be followed by a multi. *E888*

### <a id="/\ze" class="section-title" href="#/\ze">Note:</a>
\ze	Matches at any position, but not inside [], and sets the end of the
match there: The previous char is the last char of the whole match.
[/zero-width](#/zero-width)
Can be used multiple times, the last one encountered in a matching
branch is used.
Example: "end\ze\(if\|for\)" matches the "end" in "endif" and
"endfor".
This cannot be followed by a multi. [E888](#E888)

### <a id="/\%^ start-of-file" class="section-title" href="#/\%^ start-of-file">Note:</a>
\%^	Matches start of the file.  When matching with a string, matches the
start of the string.
For example, to find the first "VIM" in a file:
```
/\%^\_.\{-}\zsVIM

```

### <a id="/\%$ end-of-file" class="section-title" href="#/\%$ end-of-file">Note:</a>
\%$	Matches end of the file.  When matching with a string, matches the
end of the string.
Note that this does NOT find the last "VIM" in a file:
```
/VIM\_.\{-}\%$

```
	It will find the next VIM, because the part after it will always
match.  This one will find the last "VIM" in the file:
```
### <a id="/VIM\ze\(\(VIM\)\@!\_.\)\%$" class="section-title" href="#/VIM\ze\(\(VIM\)\@!\_.\)\%$">Note:</a>

```
	This uses [/\@!](#/\@!) to ascertain that "VIM" does NOT match in any
position after the first "VIM".
Searching from the end of the file backwards is easier!

### <a id="/\%V" class="section-title" href="#/\%V">Note:</a>
\%V	Match inside the Visual area.  When Visual mode has already been
stopped match in the area that [gv](#gv) would reselect.
This is a [/zero-width](#/zero-width) match.  To make sure the whole pattern is
inside the Visual area put it at the start and just before the end of
the pattern, e.g.:
```
### <a id="/\%Vfoo.ba\%Vr" class="section-title" href="#/\%Vfoo.ba\%Vr">Note:</a>

```
	This also works if only "foo bar" was Visually selected. This:
```
### <a id="/\%Vfoo.bar\%V" class="section-title" href="#/\%Vfoo.bar\%V">Note:</a>

```
	would match "foo bar" if the Visual selection continues after the "r".
Only works for the current buffer.

### <a id="/\%# cursor-position" class="section-title" href="#/\%# cursor-position">Note:</a>
\%#	Matches with the cursor position.  Only works when matching in a
buffer displayed in a window.
WARNING: When the cursor is moved after the pattern was used, the
result becomes invalid.  Vim doesn't automatically update the matches.
This is especially relevant for syntax highlighting and 'hlsearch'.
In other words: When the cursor moves the display isn't updated for
this change.  An update is done for lines which are changed (the whole
line is updated) or when using the [CTRL-L](#CTRL-L) command (the whole screen
is updated).  Example, to highlight the word under the cursor:
```
### <a id="/\k\%#\k" class="section-title" href="#/\k\%#\k">Note:</a>

```
	When 'hlsearch' is set and you move the cursor around and make changes
this will clearly show when the match is updated or not.

### <a id="/\%'m /\%<'m /\%>'m" class="section-title" href="#/\%'m /\%<'m /\%>'m">Note:</a>
\%'m	Matches with the position of mark m.
\%<'m	Matches before the position of mark m.
\%>'m	Matches after the position of mark m.
Example, to highlight the text from mark 's to 'e:
```
### <a id="/.\%>'s.\%<'e.." class="section-title" href="#/.\%>'s.\%<'e..">Note:</a>

```
	Note that two dots are required to include mark 'e in the match.  That
is because "\%<'e" matches at the character before the 'e mark, and
since it's a [/zero-width](#/zero-width) match it doesn't include that character.
WARNING: When the mark is moved after the pattern was used, the result
becomes invalid.  Vim doesn't automatically update the matches.
Similar to moving the cursor for "\%#" [/\%#](#/\%#).

### <a id="/\%l /\%>l /\%<l E951 E1204" class="section-title" href="#/\%l /\%>l /\%<l E951 E1204">Note:</a>
\%23l	Matches in a specific line.
\%<23l	Matches above a specific line (lower line number).
\%>23l	Matches below a specific line (higher line number).
\%.l	Matches at the cursor line.
\%<.l	Matches above the cursor line.
\%>.l	Matches below the cursor line.
These six can be used to match specific lines in a buffer.  The "23"
can be any line number.  The first line is 1.
WARNING: When inserting or deleting lines Vim does not automatically
update the matches.  This means Syntax highlighting quickly becomes
wrong.  Also when referring to the cursor position (".") and
the cursor moves the display isn't updated for this change.  An update
is done when using the [CTRL-L](#CTRL-L) command (the whole screen is updated).
Example, to highlight the line where the cursor currently is:
```
:exe '/\%' .. line(".") .. 'l'

```
	Alternatively use:
```
/\%.l

```
	When 'hlsearch' is set and you move the cursor around and make changes
this will clearly show when the match is updated or not.

### <a id="/\%c /\%>c /\%<c" class="section-title" href="#/\%c /\%>c /\%<c">Note:</a>
\%23c	Matches in a specific column.
\%<23c	Matches before a specific column.
\%>23c	Matches after a specific column.
\%.c	Matches at the cursor column.
\%<.c	Matches before the cursor column.
\%>.c	Matches after the cursor column.
These six can be used to match specific columns in a buffer or string.
The "23" can be any column number.  The first column is 1.  Actually,
the column is the byte number (thus it's not exactly right for
multibyte characters).
WARNING: When inserting or deleting text Vim does not automatically
update the matches.  This means Syntax highlighting quickly becomes
wrong.  Also when referring to the cursor position (".") and
the cursor moves the display isn't updated for this change.  An update
is done when using the [CTRL-L](#CTRL-L) command (the whole screen is updated).
Example, to highlight the column where the cursor currently is:
```
:exe '/\%' .. col(".") .. 'c'

```
	Alternatively use:
```
/\%.c

```
	When 'hlsearch' is set and you move the cursor around and make changes
this will clearly show when the match is updated or not.
Example for matching a single byte in column 44:
```
/\%>43c.\%<46c

```
	Note that "\%<46c" matches in column 45 when the "." matches a byte in
column 44.
### <a id="/\%v /\%>v /\%<v" class="section-title" href="#/\%v /\%>v /\%<v">Note:</a>
\%23v	Matches in a specific virtual column.
\%<23v	Matches before a specific virtual column.
\%>23v	Matches after a specific virtual column.
\%.v	Matches at the current virtual column.
\%<.v	Matches before the current virtual column.
\%>.v	Matches after the current virtual column.
These six can be used to match specific virtual columns in a buffer or
string.  When not matching with a buffer in a window, the option
values of the current window are used (e.g., 'tabstop').
The "23" can be any column number.  The first column is 1.
Note that some virtual column positions will never match, because they
are halfway through a tab or other character that occupies more than
one screen character.
WARNING: When inserting or deleting text Vim does not automatically
update highlighted matches.  This means Syntax highlighting quickly
becomes wrong.  Also when referring to the cursor position (".") and
the cursor moves the display isn't updated for this change.  An update
is done when using the [CTRL-L](#CTRL-L) command (the whole screen is updated).
Example, to highlight all the characters after virtual column 72:
```
### <a id="/\%>72v." class="section-title" href="#/\%>72v.">Note:</a>

```
	When 'hlsearch' is set and you move the cursor around and make changes
this will clearly show when the match is updated or not.
To match the text up to column 17:
```
### <a id="/^.\%17v" class="section-title" href="#/^.\%17v">Note:</a>

```
	To match all characters after the current virtual column (where the
cursor is):
```
### <a id="/\%>.v." class="section-title" href="#/\%>.v.">Note:</a>

```
	Column 17 is not included, because this is a [/zero-width](#/zero-width) match. To
include the column use:
```
### <a id="/^.\%17v." class="section-title" href="#/^.\%17v.">Note:</a>

```
	This command does the same thing, but also matches when there is no
character in column 17:
```
### <a id="/^.\%<18v." class="section-title" href="#/^.\%<18v.">Note:</a>

```
	Note that without the "^" to anchor the match in the first column,
this will also highlight column 17:
```
### <a id="/.\%17v" class="section-title" href="#/.\%17v">Note:</a>

```
	Column 17 is highlighted by 'hlsearch' because there is another match
where ".*" matches zero characters.


Character classes:
\i	identifier character (see 'isident' option)	*/\i*
### <a id="/\I" class="section-title" href="#/\I">\I	like "\i", but excluding digits</a>
\k	keyword character (see 'iskeyword' option)	*/\k*
### <a id="/\K" class="section-title" href="#/\K">\K	like "\k", but excluding digits</a>
\f	file name character (see 'isfname' option)	*/\f*
### <a id="/\F" class="section-title" href="#/\F">\F	like "\f", but excluding digits</a>
\p	printable character (see 'isprint' option)	*/\p*
### <a id="/\P" class="section-title" href="#/\P">\P	like "\p", but excluding digits</a>

NOTE: the above also work for multibyte characters.  The ones below only
match ASCII characters, as indicated by the range.

### <a id="whitespace white-space" class="section-title" href="#whitespace white-space">Note:</a>
### <a id="/\s" class="section-title" href="#/\s">\s	whitespace character: <Space> and <Tab></a>
\S	non-whitespace character; opposite of \s	*/\S*
\d	digit:				[0-9]		*/\d*
\D	non-digit:			[^0-9]		*/\D*
### <a id="[0-9A-Fa-f]	/\x" class="section-title" href="#[0-9A-Fa-f]	/\x">\x	hex digit:</a>
### <a id="[^0-9A-Fa-f]	/\X" class="section-title" href="#[^0-9A-Fa-f]	/\X">\X	non-hex digit:</a>
\o	octal digit:			[0-7]		*/\o*
\O	non-octal digit:		[^0-7]		*/\O*
### <a id="[0-9A-Za-z_]	/\w" class="section-title" href="#[0-9A-Za-z_]	/\w">\w	word character:</a>
### <a id="[^0-9A-Za-z_]	/\W" class="section-title" href="#[^0-9A-Za-z_]	/\W">\W	non-word character:</a>
### <a id="[A-Za-z_]	/\h" class="section-title" href="#[A-Za-z_]	/\h">\h	head of word character:</a>
\H	non-head of word character:	[^A-Za-z_]	*/\H*
### <a id="[A-Za-z]	/\a" class="section-title" href="#[A-Za-z]	/\a">\a	alphabetic character:</a>
\A	non-alphabetic character:	[^A-Za-z]	*/\A*
\l	lowercase character:		[a-z]		*/\l*
### <a id="/\L" class="section-title" href="#/\L">\L	non-lowercase character:	[^a-z]</a>
\u	uppercase character:		[A-Z]		*/\u*
### <a id="/\U" class="section-title" href="#/\U">\U	non-uppercase character:	[^A-Z]</a>

NOTE: Using the atom is faster than the [] form.

NOTE: 'ignorecase', "\c" and "\C" are not used by character classes.

### <a id="/\_ E63 /\_i /\_I /\_k /\_K /\_f /\_F" class="section-title" href="#/\_ E63 /\_i /\_I /\_k /\_K /\_f /\_F">Note:</a>
### <a id="/\_p /\_P /\_s /\_S /\_d /\_D /\_x /\_X" class="section-title" href="#/\_p /\_P /\_s /\_S /\_d /\_D /\_x /\_X">Note:</a>
### <a id="/\_o /\_O /\_w /\_W /\_h /\_H /\_a /\_A" class="section-title" href="#/\_o /\_O /\_w /\_W /\_h /\_H /\_a /\_A">Note:</a>
### <a id="/\_l /\_L /\_u /\_U" class="section-title" href="#/\_l /\_L /\_u /\_U">Note:</a>
\_x	Where "x" is any of the characters above: The character class with
end-of-line added
(end of character classes)

### <a id="/\e" class="section-title" href="#/\e">\e	matches <Esc></a>
### <a id="/\t" class="section-title" href="#/\t">\t	matches <Tab></a>
### <a id="/\r" class="section-title" href="#/\r">\r	matches <CR></a>
### <a id="/\b" class="section-title" href="#/\b">\b	matches <BS></a>
### <a id="/\n" class="section-title" href="#/\n">\n	matches an end-of-line</a>
When matching in a string instead of buffer text a literal newline
character is matched.

~	matches the last given substitute string	*/~* */\~*

\(\)	A pattern enclosed by escaped parentheses.	*/\(* */\(\)* */\)*
E.g., "\(^a\)" matches 'a' at the start of a line.
There can only be ten of these.  You can use "\%(" to add more, but
not counting it as a sub-expression.
*E51* *E54* *E55* *E872* *E873*

### <a id="Matches the same string that was matched by	/\1 E65" class="section-title" href="#Matches the same string that was matched by	/\1 E65">\1</a>
the first sub-expression in \( and \).
Example: "\([a-z]\).\1" matches "ata", "ehe", "tot", etc.
### <a id="Like "\1", but uses second sub-expression,	/\2" class="section-title" href="#Like "\1", but uses second sub-expression,	/\2">\2</a>
...							*/\3*
### <a id="Like "\1", but uses ninth sub-expression.	/\9" class="section-title" href="#Like "\1", but uses ninth sub-expression.	/\9">\9</a>
Note: The numbering of groups is done based on which "\(" comes first
in the pattern (going left to right), NOT based on what is matched
first.

\%(\)	A pattern enclosed by escaped parentheses.	*/\%(\)* */\%(* *E53*
Just like \(\), but without counting it as a sub-expression.  This
allows using more groups and it's a little bit faster.

x	A single character, with no special meaning, matches itself

### <a id="/\ /\\" class="section-title" href="#/\ /\\">Note:</a>
\x	A backslash followed by a single character, with no special meaning,
is reserved for future expansions

### <a id="/[] /\[] /\_[] /collection E76" class="section-title" href="#/[] /\[] /\_[] /collection E76">[]	(with 'nomagic': \[])</a>
\_[]
A collection.  This is a sequence of characters enclosed in square
brackets.  It matches any single character in the collection.
Example		matches ~
[xyz]		any 'x', 'y' or 'z'
[a-zA-Z]$	any alphabetic character at the end of a line
\c[a-z]$	same
[А-яЁё]		Russian alphabet (with utf-8 and cp1251)

### <a id="/[\n]" class="section-title" href="#/[\n]">Note:</a>
With "\_" prepended the collection also includes the end-of-line.
The same can be done by including "\n" in the collection.  The
end-of-line is also matched when the collection starts with "^"!  Thus
"\_[^ab]" matches the end-of-line and any character but "a" and "b".
This makes it Vi compatible: Without the "\_" or "\n" the collection
does not match an end-of-line.
### <a id="E769" class="section-title" href="#E769">Note:</a>
When the ']' is not there Vim will not give an error message but
assume no collection is used.  Useful to search for '['.  However, you
do get E769 for internal searching.  And be aware that in a
`:substitute` command the whole command becomes the pattern.  E.g.
":s/[/x/" searches for "[/x" and replaces it with nothing.  It does
not search for "[" and replaces it with "x"!

### <a id="E944 E945" class="section-title" href="#E944 E945">Note:</a>
If the sequence begins with "^", it matches any single character NOT
in the collection: "[^xyz]" matches anything but 'x', 'y' and 'z'.
- If two characters in the sequence are separated by '-', this is
shorthand for the full list of ASCII characters between them.  E.g.,
"[0-9]" matches any decimal digit. If the starting character exceeds
the ending character, e.g. [c-a], E944 occurs. Non-ASCII characters
can be used, but the character values must not be more than 256 apart
in the old regexp engine. For example, searching by [\u3000-\u4000]
after setting re=1 emits a E945 error. Prepending \%#=2 will fix it.
- A character class expression is evaluated to the set of characters
belonging to that character class.  The following character classes
are supported:
Name	      Func	Contents ~
*[:alnum:]*	  [:alnum:]   isalnum	ASCII letters and digits
*[:alpha:]*	  [:alpha:]   isalpha  	ASCII letters
*[:blank:]*	  [:blank:]     	space and tab
*[:cntrl:]*	  [:cntrl:]   iscntrl 	ASCII control characters
*[:digit:]*	  [:digit:]     	decimal digits '0' to '9'
*[:graph:]*	  [:graph:]   isgraph	ASCII printable characters excluding
space
*[:lower:]*	  [:lower:]   (1)	lowercase letters (all letters when
'ignorecase' is used)
*[:print:]*	  [:print:]   (2) 	printable characters including space
*[:punct:]*	  [:punct:]   ispunct	ASCII punctuation characters
*[:space:]*	  [:space:]     	whitespace characters: space, tab, CR,
NL, vertical tab, form feed
*[:upper:]*	  [:upper:]   (3)	uppercase letters (all letters when
'ignorecase' is used)
*[:xdigit:]*	  [:xdigit:]    	hexadecimal digits: 0-9, a-f, A-F
*[:return:]*	  [:return:]		the <CR> character
*[:tab:]*	  [:tab:]		the <Tab> character
*[:escape:]*	  [:escape:]		the <Esc> character
*[:backspace:]*	  [:backspace:]		the <BS> character
*[:ident:]*	  [:ident:]		identifier character (same as "\i")
*[:keyword:]*	  [:keyword:]		keyword character (same as "\k")
*[:fname:]*	  [:fname:]		file name character (same as "\f")
The square brackets in character class expressions are additional to
the square brackets delimiting a collection.  For example, the
following is a plausible pattern for a UNIX filename:
"[-./[:alnum:]_~]\+".  That is, a list of at least one character,
each of which is either '-', '.', '/', alphabetic, numeric, '_' or
'~'.
These items only work for 8-bit characters, except [:lower:] and
[:upper:] also work for multibyte characters when using the new
regexp engine.  See [two-engines](#two-engines).  In the future these items may
work for multibyte characters.  For now, to get all "alpha"
characters you can use: [[:lower:][:upper:]].

The "Func" column shows what library function is used.  The
implementation depends on the system.  Otherwise:
(1) Uses islower() for ASCII and Vim builtin rules for other
characters.
(2) Uses Vim builtin rules
(3) As with (1) but using isupper()
### <a id="/[[= [==]" class="section-title" href="#/[[= [==]">Note:</a>
- An equivalence class.  This means that characters are matched that
have almost the same meaning, e.g., when ignoring accents.  This
only works for Unicode, latin1 and latin9.  The form is:
[=a=]
### <a id="/[[. [..]" class="section-title" href="#/[[. [..]">Note:</a>
- A collation element.  This currently simply accepts a single
character in the form:
[.a.]
### <a id="/\]" class="section-title" href="#/\]">Note:</a>
- To include a literal ']', '^', '-' or '\' in the collection, put a
backslash before it: "[xyz\]]", "[\^xyz]", "[xy\-z]" and "[xyz\\]".
(Note: POSIX does not support the use of a backslash this way).  For
']' you can also make it the first character (following a possible
"^"):  "[]xyz]" or "[^]xyz]".
For '-' you can also make it the first or last character: "[-xyz]",
"[^-xyz]" or "[xyz-]".  For '\' you can also let it be followed by
any character that's not in "^]-\bdertnoUux".  "[\xyz]" matches '\',
'x', 'y' and 'z'.  It's better to use "\\" though, future expansions
may use other characters after '\'.
- Omitting the trailing ] is not considered an error. "[]" works like
"[]]", it matches the ']' character.
- The following translations are accepted when the 'l' flag is not
included in 'cpoptions':
\e	<Esc>
\t	<Tab>
\r	<CR>	(NOT end-of-line!)
\b	<BS>
\n	line break, see above [/[\n]](#/[\n])
\d123	decimal number of character
\o40	octal number of character up to 0o377
\x20	hexadecimal number of character up to 0xff
\u20AC	hex. number of multibyte character up to 0xffff
\U1234	hex. number of multibyte character up to 0xffffffff
NOTE: The other backslash codes mentioned above do not work inside
[]!
- Matching with a collection can be slow, because each character in
the text has to be compared with each character in the collection.
Use one of the other atoms above when possible.  Example: "\d" is
much faster than "[0-9]" and matches the same characters.  However,
the new [NFA](#NFA) regexp engine deals with this better than the old one.

### <a id="/\%[] E69 E70 E369" class="section-title" href="#/\%[] E69 E70 E369">Note:</a>
\%[]	A sequence of optionally matched atoms.  This always matches.
It matches as much of the list of atoms it contains as possible.  Thus
it stops at the first atom that doesn't match.  For example:
```
/r\%[ead]

```
	matches "r", "re", "rea" or "read".  The longest that matches is used.
To match the Ex command "function", where "fu" is required and
"nction" is optional, this would work:
```
/\<fu\%[nction]\>

```
	The end-of-word atom "\>" is used to avoid matching "fu" in "full".
It gets more complicated when the atoms are not ordinary characters.
You don't often have to use it, but it is possible.  Example:
```
/\<r\%[[eo]ad]\>

```
	Matches the words "r", "re", "ro", "rea", "roa", "read" and "road".
There can be no \(\), \%(\) or \z(\) items inside the [] and \%[] does
not nest.
To include a "[" use "[[]" and for "]" use []]", e.g.,:
```
/index\%[[[]0[]]]

```
	matches "index" "index[", "index[0" and "index[0]".

### <a id="/\%d /\%x /\%o /\%u /\%U E678" class="section-title" href="#/\%d /\%x /\%o /\%u /\%U E678">Note:</a>

\%d123	Matches the character specified with a decimal number.  Must be
followed by a non-digit.
\%o40	Matches the character specified with an octal number up to 0o377.
Numbers below 0o40 must be followed by a non-octal digit or a
non-digit.
\%x2a	Matches the character specified with up to two hexadecimal characters.
\%u20AC	Matches the character specified with up to four hexadecimal
characters.
\%U1234abcd	Matches the character specified with up to eight hexadecimal
characters, up to 0x7fffffff


## <a id="&#x2F;ignorecase" class="section-title" href="#&#x2F;ignorecase">7. Ignoring Case in a Pattern</a> 

If the 'ignorecase' option is on, the case of normal letters is ignored.
'smartcase' can be set to ignore case when the pattern contains lowercase
letters only.
### <a id="/\c /\C" class="section-title" href="#/\c /\C">Note:</a>
When "\c" appears anywhere in the pattern, the whole pattern is handled like
'ignorecase' is on.  The actual value of 'ignorecase' and 'smartcase' is
ignored.  "\C" does the opposite: Force matching case for the whole pattern.
{only Vim supports \c and \C}
Note that 'ignorecase', "\c" and "\C" are not used for the character classes.

Examples:
pattern	'ignorecase'  'smartcase'	matches ~
foo	  off		-		foo
foo	  on		-		foo Foo FOO
Foo	  on		off		foo Foo FOO
Foo	  on		on		    Foo
\cfoo	  -		-		foo Foo FOO
foo\C	  -		-		foo

### <a id="NL-used-for-Nul" class="section-title" href="#NL-used-for-Nul">Technical detail:</a>

```
Nul> characters in the file are stored as <NL> in memory.  In the display
they are shown as "^@".  The translation is done when reading and writing
files.  To match a <Nul> with a search pattern you can just enter CTRL-@ or
"CTRL-V 000".  This is probably just what you expect.  Internally the
character is replaced with a <NL> in the search pattern.  What is unusual is
that typing CTRL-V CTRL-J also inserts a <NL>, thus also searches for a <Nul>
in the file.

### <a id="CR-used-for-NL" class="section-title" href="#CR-used-for-NL">Note:</a>
When 'fileformat' is "mac", <NL> characters in the file are stored as <CR>
characters internally.  In the text they are shown as "^J".  Otherwise this
works similar to the usage of <NL> for a <Nul>.

When working with expression evaluation, a <NL> character in the pattern
matches a <NL> in the string.  The use of "\n" (backslash n) to match a <NL>
doesn't work there, it only works to match text in the buffer.

### <a id="pattern-multi-byte pattern-multibyte" class="section-title" href="#pattern-multi-byte pattern-multibyte">Note:</a>
Patterns will also work with multibyte characters, mostly as you would
expect.  But invalid bytes may cause trouble, a pattern with an invalid byte
will probably never match.


## <a id="patterns-composing" class="section-title" href="#patterns-composing">8. Composing Characters</a> 

### <a id="/\Z" class="section-title" href="#/\Z">Note:</a>
When "\Z" appears anywhere in the pattern, all composing characters are
ignored.  Thus only the base characters need to match, the composing
characters may be different and the number of composing characters may differ.
Only relevant when 'encoding' is "utf-8".
Exception: If the pattern starts with one or more composing characters, these
must match.
### <a id="/\%C" class="section-title" href="#/\%C">Note:</a>
Use "\%C" to skip any composing characters.  For example, the pattern "a" does
not match in "càt" (where the a has the composing character 0x0300), but
"a\%C" does.  Note that this does not match "cát" (where the á is character
0xe1, it does not have a compositing character).  It does match "cat" (where
the a is just an a).

When a composing character appears at the start of the pattern or after an
item that doesn't include the composing character, a match is found at any
character that includes this composing character.

When using a dot and a composing character, this works the same as the
composing character by itself, except that it doesn't matter what comes before
this.

The order of composing characters does not matter.  Also, the text may have
more composing characters than the pattern, it still matches.  But all
composing characters in the pattern must be found in the text.

Suppose B is a base character and x and y are composing characters:
pattern		text		match ~
Bxy		Bxy		yes (perfect match)
Bxy		Byx		yes (order ignored)
Bxy		By		no (x missing)
Bxy		Bx		no (y missing)
Bx		Bx		yes (perfect match)
Bx		By		no (x missing)
Bx		Bxy		yes (extra y ignored)
Bx		Byx		yes (extra y ignored)


## <a id="perl-patterns" class="section-title" href="#perl-patterns">9. Compare With Perl Patterns</a> 

Vim's regexes are most similar to Perl's, in terms of what you can do.  The
difference between them is mostly just notation;  here's a summary of where
they differ:

Capability			in Vimspeak	in Perlspeak ~
----------------------------------------------------------------
force case insensitivity	\c		(?i)
force case sensitivity		\C		(?-i)
backref-less grouping		\%(atom\)	(?:atom)
### <a id="?, +?, ??, {}?" class="section-title" href="#?, +?, ??, {}?">conservative quantifiers	\{-n,m}</a>
0-width match			atom\@=		(?=atom)
0-width non-match		atom\@!		(?!atom)
0-width preceding match		atom\@<=	(?<=atom)
0-width preceding non-match	atom\@<!	(?<!atom)
match without retry		atom\@>		(?>atom)

Vim and Perl handle newline characters inside a string a bit differently:

In Perl, ^ and $ only match at the very beginning and end of the text,
by default, but you can set the 'm' flag, which lets them match at
embedded newlines as well.  You can also set the 's' flag, which causes
a . to match newlines as well.  (Both these flags can be changed inside
a pattern using the same syntax used for the i flag above, BTW.)

On the other hand, Vim's ^ and $ always match at embedded newlines, and
you get two separate atoms, \%^ and \%$, which only match at the very
start and end of the text, respectively.  Vim solves the second problem
by giving you the \_ "modifier":  put it in front of a . or a character
class, and they will match newlines as well.

Finally, these constructs are unique to Perl:
- execution of arbitrary code in the regex:  (?{perl code})
- conditional expressions:  (?(condition)true-expr|false-expr)

...and these are unique to Vim:
- changing the magic-ness of a pattern:  \v \V \m \M
(very useful for avoiding backslashitis)
- sequence of optionally matching atoms:  \%[atoms]
- \& (which is to \| what "and" is to "or";  it forces several branches
to match at one spot)
- matching lines/columns by number:  \%5l \%5c \%5v
- setting the start and end of the match:  \zs \ze


## <a id="match-highlight" class="section-title" href="#match-highlight">10. Highlighting Matches</a> 

### <a id=":mat :match" class="section-title" href="#:mat :match">Note:</a>
:mat[ch] {group} /{pattern}/
Define a pattern to highlight in the current window.  It will
be highlighted with {group}.  Example:
```
:highlight MyGroup ctermbg=green guibg=green
:match MyGroup /TODO/

```
		Instead of // any character can be used to mark the start and
end of the {pattern}.  Watch out for using special characters,
such as '"' and '|'.

{group} must exist at the moment this command is executed.

The {group} highlighting still applies when a character is
to be highlighted for 'hlsearch', as the highlighting for
matches is given higher priority than that of 'hlsearch'.
Syntax highlighting (see 'syntax') is also overruled by
matches.

Note that highlighting the last used search pattern with
'hlsearch' is used in all windows, while the pattern defined
with ":match" only exists in the current window.  It is kept
when switching to another buffer.

'ignorecase' does not apply, use [/\c](#/\c) in the pattern to
ignore case.  Otherwise case is not ignored.

'redrawtime' defines the maximum time searched for pattern
matches.

When matching end-of-line and Vim redraws only part of the
display you may get unexpected results.  That is because Vim
looks for a match in the line where redrawing starts.

Also see [matcharg()| and |getmatches()](#matcharg()| and |getmatches()). The former returns
the highlight group and pattern of a previous [:match](#:match)
command.  The latter returns a list with highlight groups and
patterns defined by both [matchadd()| and |:match](#matchadd()| and |:match).

Highlighting matches using [:match](#:match) are limited to three
matches (aside from [:match|, |:2match| and |:3match](#:match|, |:2match| and |:3match) are
available). [matchadd()](#matchadd()) does not have this limitation and in
addition makes it possible to prioritize matches.

Another example, which highlights all characters in virtual
column 72 and more:
```
:highlight rightMargin term=bold ctermfg=blue guifg=blue
:match rightMargin /.\%>72v/

```
		To highlight all character that are in virtual column 7:
```
:highlight col8 ctermbg=grey guibg=grey
:match col8 /\%<8v.\%>7v/

```
		Note the use of two items to also match a character that
occupies more than one virtual column, such as a TAB.

:mat[ch]
:mat[ch] none
Clear a previously defined match pattern.


### <a id=":2match" class="section-title" href="#:2match">:2mat[ch] {group} /{pattern}/</a>
:2mat[ch]
:2mat[ch] none
### <a id=":3match" class="section-title" href="#:3match">:3mat[ch] {group} /{pattern}/</a>
:3mat[ch]
:3mat[ch] none
Just like [:match](#:match) above, but set a separate match.  Thus
there can be three matches active at the same time.  The match
with the lowest number has priority if several match at the
same position.
The ":3match" command is used by the [matchparen](#matchparen) plugin.  You
are suggested to use ":match" for manual matching and
":2match" for another plugin.


## <a id="fuzzy-matching" class="section-title" href="#fuzzy-matching">11. Fuzzy Matching</a> 

Fuzzy matching refers to matching strings using a non-exact search string.
Fuzzy matching will match a string, if all the characters in the search string
are present anywhere in the string in the same order. Case is ignored.  In a
matched string, other characters can be present between two consecutive
characters in the search string. If the search string has multiple words, then
each word is matched separately. So the words in the search string can be
present in any order in a string.

Fuzzy matching assigns a score for each matched string based on the following
criteria:
- The number of sequentially matching characters.
- The number of characters (distance) between two consecutive matching
characters.
- Matches at the beginning of a word
- Matches at a camel case character (e.g. Case in CamelCase)
- Matches after a path separator or a hyphen.
- The number of unmatched characters in a string.
The matching string with the highest score is returned first.

For example, when you search for the "get pat" string using fuzzy matching, it
will match the strings "GetPattern", "PatternGet", "getPattern", "patGetter",
"getSomePattern", "MatchpatternGet" etc.

The functions [matchfuzzy()| and |matchfuzzypos()](#matchfuzzy()| and |matchfuzzypos()) can be used to fuzzy search
a string in a List of strings. The matchfuzzy() function returns a List of
matching strings. The matchfuzzypos() functions returns the List of matches,
the matching positions and the fuzzy match scores.

The "f" flag of `:vimgrep` enables fuzzy matching.


vim:tw=78:ts=8:noet:ft=help:norl:
