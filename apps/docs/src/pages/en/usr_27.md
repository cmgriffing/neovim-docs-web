---
title:  Usr_27
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_27.txt"></a><a name="27.1"></a><h1> Usr_27</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_27.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			 Search commands and patterns</div>
<div class="old-help-para">In chapter 3 a few simple search patterns were mentioned <a href="/neovim-docs-web/en/usr_03#03.9">03.9</a>.  Vim can do
much more complex searches.  This chapter explains the most often used ones.
A detailed specification can be found here: <a href="/neovim-docs-web/en/pattern#pattern">pattern</a></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_27#27.1">27.1</a>  	Ignoring case
<a href="/neovim-docs-web/en/usr_27#27.2">27.2</a>  	Wrapping around the file end
<a href="/neovim-docs-web/en/usr_27#27.3">27.3</a>  	Offsets
<a href="/neovim-docs-web/en/usr_27#27.4">27.4</a>  	Matching multiple times
<a href="/neovim-docs-web/en/usr_27#27.5">27.5</a>  	Alternatives
<a href="/neovim-docs-web/en/usr_27#27.6">27.6</a>  	Character ranges
<a href="/neovim-docs-web/en/usr_27#27.7">27.7</a>  	Character classes
<a href="/neovim-docs-web/en/usr_27#27.8">27.8</a>  	Matching a line break
<a href="/neovim-docs-web/en/usr_27#27.9">27.9</a>  	Examples</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_28#usr_28.txt">usr_28.txt</a>  Folding
 Previous chapter: <a href="/neovim-docs-web/en/usr_26#usr_26.txt">usr_26.txt</a>  Repeating
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Ignoring case</h2></div>
<div class="old-help-para">By default, Vim's searches are case sensitive.  Therefore, "include",
"INCLUDE", and "Include" are three different words and a search will match
only one of them.
   Now switch on the <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option:<pre>:set ignorecase</pre>
Search for "include" again, and now it will match "Include", "INCLUDE" and
"InClUDe".  (Set the <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> option to quickly see where a pattern
matches.)
   You can switch this off again with:<pre>:set noignorecase</pre>
But let's keep it set, and search for "INCLUDE".  It will match exactly the
same text as "include" did.  Now set the <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> option:<pre>:set ignorecase smartcase</pre>
If you have a pattern with at least one uppercase character, the search
becomes case sensitive.  The idea is that you didn't have to type that
uppercase character, so you must have done it because you wanted case to
match.  That's smart!
    With these two options set you find the following matches:</div>
<div class="old-help-para"><div class="help-column_heading">	pattern			matches</div>	word			word, Word, WORD, WoRd, etc.
	Word			Word
	WORD			WORD
	WoRd			WoRd</div>
<div class="old-help-para"><a name="_case-in-one-pattern"></a><h3 class="help-heading">CASE IN ONE PATTERN</h3></div>
<div class="old-help-para">If you want to ignore case for one specific pattern, you can do this by
prepending the "\c" string.  Using "\C" will make the pattern to match case.
This overrules the <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> and <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> options, when "\c" or "\C" is
used their value doesn't matter.</div>
<div class="old-help-para"><div class="help-column_heading">	pattern			matches</div>	\Cword			word
	\CWord			Word
	\cword			word, Word, WORD, WoRd, etc.
	\cWord			word, Word, WORD, WoRd, etc.</div>
<div class="old-help-para">A big advantage of using "\c" and "\C" is that it sticks with the pattern.
Thus if you repeat a pattern from the search history, the same will happen, no
matter if <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> or <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> was changed.</div>
<div class="old-help-para">	Note:
	The use of "\" items in search patterns depends on the <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> option.
	In this chapter we will assume <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> is on, because that is the
	standard and recommended setting.  If you would change <a href="/neovim-docs-web/en/options#'magic'">'magic'</a>, many
	search patterns would suddenly become invalid.</div>
<div class="old-help-para">	Note:
	If your search takes much longer than you expected, you can interrupt
	it with <code>CTRL-C</code> on Unix and <code>CTRL-Break</code> on MS-Windows.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="27.2"></a><span class="help-tag">27.2</span>  	Wrapping around the file end</span></h2></div>
<div class="old-help-para">By default, a forward search starts searching for the given string at the
current cursor location.  It then proceeds to the end of the file.  If it has
not found the string by that time, it starts from the beginning and searches
from the start of the file to the cursor location.
   Keep in mind that when repeating the "n" command to search for the next
match, you eventually get back to the first match.  If you don't notice this
you keep searching forever!  To give you a hint, Vim displays this message:</div>
<div class="old-help-para"><div class="help-column_heading">	search hit BOTTOM, continuing at TOP</div></div>
<div class="old-help-para">If you use the "?" command, to search in the other direction, you get this
message:</div>
<div class="old-help-para"><div class="help-column_heading">	search hit TOP, continuing at BOTTOM</div></div>
<div class="old-help-para">Still, you don't know when you are back at the first match.  One way to see
this is by switching on the <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a> option:<pre>:set ruler</pre>
Vim will display the cursor position in the lower righthand corner of the
window (in the status line if there is one).  It looks like this:</div>
<div class="old-help-para"><div class="help-column_heading">	101,29       84%</div></div>
<div class="old-help-para">The first number is the line number of the cursor.  Remember the line number
where you started, so that you can check if you passed this position again.</div>
<div class="old-help-para"><a name="_not-wrapping"></a><h3 class="help-heading">NOT WRAPPING</h3></div>
<div class="old-help-para">To turn off search wrapping, use the following command:<pre>:set nowrapscan</pre>
Now when the search hits the end of the file, an error message displays:</div>
<div class="old-help-para"><div class="help-column_heading">	E385: search hit BOTTOM without match for: forever</div></div>
<div class="old-help-para">Thus you can find all matches by going to the start of the file with "gg" and
keep searching until you see this message.
   If you search in the other direction, using "?", you get:</div>
<div class="old-help-para"><div class="help-column_heading">	E384: search hit TOP without match for: forever</div></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="27.3"></a><span class="help-tag">27.3</span>  	Offsets</span></h2></div>
<div class="old-help-para">By default, the search command leaves the cursor positioned on the beginning
of the pattern.  You can tell Vim to leave it some other place by specifying
an offset.  For the forward search command "/", the offset is specified by
appending a slash (/) and the offset:<pre>/default/2</pre>
This command searches for the pattern "default" and then moves to the
beginning of the second line past the pattern.  Using this command on the
paragraph above, Vim finds the word "default" in the first line.  Then the
cursor is moved two lines down and lands on "an offset".</div>
<div class="old-help-para">If the offset is a simple number, the cursor will be placed at the beginning
of the line that many lines from the match.  The offset number can be positive
or negative.  If it is positive, the cursor moves down that many lines; if
negative, it moves up.</div>
<div class="old-help-para"><a name="_character-offsets"></a><h3 class="help-heading">CHARACTER OFFSETS</h3></div>
<div class="old-help-para">The "e" offset indicates an offset from the end of the match.  It moves the
cursor onto the last character of the match.  The command:<pre>/const/e</pre>
puts the cursor on the "t" of "const".
   From that position, adding a number moves forward that many characters.
This command moves to the character just after the match:<pre>/const/e+1</pre>
A positive number moves the cursor to the right, a negative number moves it to
the left.  For example:<pre>/const/e-1</pre>
moves the cursor to the "s" of "const".</div>
<div class="old-help-para">If the offset begins with "b", the cursor moves to the beginning of the
pattern.  That's not very useful, since leaving out the "b" does the same
thing.  It does get useful when a number is added or subtracted.  The cursor
then goes forward or backward that many characters.  For example:<pre>/const/b+2</pre>
Moves the cursor to the beginning of the match and then two characters to the
right.  Thus it lands on the "n".</div>
<div class="old-help-para"><a name="_repeating"></a><h3 class="help-heading">REPEATING</h3></div>
<div class="old-help-para">To repeat searching for the previously used search pattern, but with a
different offset, leave out the pattern:<pre>/that
//e</pre>
Is equal to:<pre>/that/e</pre>
To repeat with the same offset:<pre>/</pre>
"n" does the same thing.  To repeat while removing a previously used offset:<pre>//</pre>
<a name="_searching-backwards"></a><h3 class="help-heading">SEARCHING BACKWARDS</h3></div>
<div class="old-help-para">The "?" command uses offsets in the same way, but you must use "?" to separate
the offset from the pattern, instead of "/":<pre>?const?e-2</pre>
The "b" and "e" keep their meaning, they don't change direction with the use
of "?".</div>
<div class="old-help-para"><a name="_start-position"></a><h3 class="help-heading">START POSITION</h3></div>
<div class="old-help-para">When starting a search, it normally starts at the cursor position.  When you
specify a line offset, this can cause trouble.  For example:<pre>/const/-2</pre>
This finds the next word "const" and then moves two lines up.  If you
use "n" to search again, Vim could start at the current position and find the
same "const" match.  Then using the offset again, you would be back where you
started.  You would be stuck!
   It could be worse: Suppose there is another match with "const" in the next
line.  Then repeating the forward search would find this match and move two
lines up.  Thus you would actually move the cursor back!</div>
<div class="old-help-para">When you specify a character offset, Vim will compensate for this.  Thus the
search starts a few characters forward or backward, so that the same match
isn't found again.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="27.4"></a><span class="help-tag">27.4</span>  	Matching multiple times</span></h2></div>
<div class="old-help-para">The "*" item specifies that the item before it can match any number of times.
Thus:<pre>/a*</pre>
matches "a", "aa", "aaa", etc.  But also "" (the empty string), because zero
times is included.
   The "*" only applies to the item directly before it.  Thus "ab*" matches
"a", "ab", "abb", "abbb", etc.  To match a whole string multiple times, it
must be grouped into one item.  This is done by putting "\(" before it and
"\)" after it.  Thus this command:<pre>/\(ab\)*</pre>
Matches: "ab", "abab", "ababab", etc.  And also "".</div>
<div class="old-help-para">To avoid matching the empty string, use "\+".  This makes the previous item
match one or more times.<pre>/ab\+</pre>
Matches "ab", "abb", "abbb", etc.  It does not match "a" when no "b" follows.</div>
<div class="old-help-para">To match an optional item, use "\=".  Example:<pre>/folders\=</pre>
Matches "folder" and "folders".</div>
<div class="old-help-para"><a name="_specific-counts"></a><h3 class="help-heading">SPECIFIC COUNTS</h3></div>
<div class="old-help-para">To match a specific number of items use the form "\{n,m}".  "n" and "m" are
numbers.  The item before it will be matched "n" to "m" times <a href="/neovim-docs-web/en/motion#inclusive">inclusive</a>.
Example:<pre>/ab\{3,5}</pre>
matches "abbb", "abbbb" and "abbbbb".
  When "n" is omitted, it defaults to zero.  When "m" is omitted it defaults
to infinity.  When ",m" is omitted, it matches exactly "n" times.
Examples:</div>
<div class="old-help-para"><div class="help-column_heading">	pattern		match count</div>	\{,4}		0, 1, 2, 3 or 4
	\{3,}		3, 4, 5, etc.
	\{0,1}		0 or 1, same as \=
	\{0,}		0 or more, same as *	\{1,}		1 or more, same as \+
	\{3}		3</div>
<div class="old-help-para"><a name="_matching-as-little-as-possible"></a><h3 class="help-heading">MATCHING AS LITTLE AS POSSIBLE</h3></div>
<div class="old-help-para">The items so far match as many characters as they can find.  To match as few
as possible, use "\{-n,m}".  It works the same as "\{n,m}", except that the
minimal amount possible is used.
   For example, use:<pre>/ab\{-1,3}</pre>
Will match "ab" in "abbb".  Actually, it will never match more than one b,
because there is no reason to match more.  It requires something else to force
it to match more than the lower limit.
   The same rules apply to removing "n" and "m".  It's even possible to remove
both of the numbers, resulting in "\{-}".  This matches the item before it
zero or more times, as few as possible.  The item by itself always matches
zero times.  It is useful when combined with something else.  Example:<pre>/a.\{-}b</pre>
This matches "axb" in "axbxb".  If this pattern would be used:<pre>/a.*b</pre>
It would try to match as many characters as possible with ".*", thus it
matches "axbxb" as a whole.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="27.5"></a><span class="help-tag">27.5</span>  	Alternatives</span></h2></div>
<div class="old-help-para">The "or" operator in a pattern is "\|".  Example:<pre>/foo\|bar</pre>
This matches "foo" or "bar".  More alternatives can be concatenated:<pre>/one\|two\|three</pre>
Matches "one", "two" and "three".
   To match multiple times, the whole thing must be placed in "\(" and "\)":<pre>/\(foo\|bar\)\+</pre>
This matches "foo", "foobar", "foofoo", "barfoobar", etc.
   Another example:<pre>/end\(if\|while\|for\)</pre>
This matches "endif", "endwhile" and "endfor".</div>
<div class="old-help-para">A related item is "\&amp;".  This requires that both alternatives match in the
same place.  The resulting match uses the last alternative.  Example:<pre>/forever\&amp;...</pre>
This matches "for" in "forever".  It will not match "fortuin", for example.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="27.6"></a><span class="help-tag">27.6</span>  	Character ranges</span></h2></div>
<div class="old-help-para">To match "a", "b" or "c" you could use "/a\|b\|c".  When you want to match all
letters from "a" to "z" this gets very long.  There is a shorter method:<pre>/[a-z]</pre>
The [] construct matches a single character.  Inside you specify which
characters to match.  You can include a list of characters, like this:<pre>/[0123456789abcdef]</pre>
This will match any of the characters included.  For consecutive characters
you can specify the range.  "0-3" stands for "0123".  "w-z" stands for "wxyz".
Thus the same command as above can be shortened to:<pre>/[0-9a-f]</pre>
To match the "-" character itself make it the first or last one in the range.
These special characters are accepted to make it easier to use them inside a
[] range (they can actually be used anywhere in the search pattern):</div>
<div class="old-help-para">	\e	<code>&lt;Esc&gt;</code>
	\t	<code>&lt;Tab&gt;</code>
	\r	<code>&lt;CR&gt;</code>
	\b	<code>&lt;BS&gt;</code></div>
<div class="old-help-para">There are a few more special cases for [] ranges, see <a href="/neovim-docs-web/en/pattern#%2F%5B%5D">/[]</a> for the whole
story.</div>
<div class="old-help-para"><a name="_complemented-range"></a><h3 class="help-heading">COMPLEMENTED RANGE</h3></div>
<div class="old-help-para">To avoid matching a specific character, use "^" at the start of the range.
The [] item then matches everything but the characters included.  Example:<pre>/"[^"]*"</pre></div>
<div class="old-help-para">	 "	  a double quote
	  [^"]	  any character that is not a double quote
	      *	  as many as possible
	       "  a double quote again

This matches "foo" and "3!x", including the double quotes.


PREDEFINED RANGES

A number of ranges are used very often.  Vim provides a shortcut for these.
For example:<pre>/\a</pre>
Finds alphabetic characters.  This is equal to using "/[a-zA-Z]".  Here are a
few more of these:</div>
<div class="old-help-para"><div class="help-column_heading">	item	matches			equivalent</div>	\d	digit			[0-9]
	\D	non-digit		[^0-9]
	\x	hex digit		[0-9a-fA-F]
	\X	non-hex digit		[^0-9a-fA-F]
	\s	white space		[ 	]     (<code>&lt;Tab&gt;</code> and <code>&lt;Space&gt;</code>)
	\S	non-white characters	[^ 	]     (not <code>&lt;Tab&gt;</code> and <code>&lt;Space&gt;</code>)
	\l	lowercase alpha		[a-z]
	\L	non-lowercase alpha	[^a-z]
	\u	uppercase alpha		[A-Z]
	\U	non-uppercase alpha	[^A-Z]</div>
<div class="old-help-para">	Note:
	Using these predefined ranges works a lot faster than the character
	range it stands for.
	These items can not be used inside [].  Thus "[\d\l]" does NOT work to
	match a digit or lowercase alpha.  Use "\(\d\|\l\)" instead.</div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/pattern#%2F%5Cs">/\s</a> for the whole list of these ranges.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="27.7"></a><span class="help-tag">27.7</span>  	Character classes</span></h2></div>
<div class="old-help-para">The character range matches a fixed set of characters.  A character class is
similar, but with an essential difference: The set of characters can be
redefined without changing the search pattern.
   For example, search for this pattern:<pre>/\f\+</pre>
The "\f" item stands for file name characters.  Thus this matches a sequence
of characters that can be a file name.
   Which characters can be part of a file name depends on the system you are
using.  On MS-Windows, the backslash is included, on Unix it is not.  This is
specified with the <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> option.  The default value for Unix is:<pre>:set isfname
isfname=@,48-57,/,.,-,_,+,,,#,$,%,~,=</pre>
For other systems the default value is different.  Thus you can make a search
pattern with "\f" to match a file name, and it will automatically adjust to
the system you are using it on.</div>
<div class="old-help-para">	Note:
	Actually, Unix allows using just about any character in a file name,
	including white space.  Including these characters in <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> would
	be theoretically correct.  But it would make it impossible to find the
	end of a file name in text.  Thus the default value of <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> is a
	compromise.</div>
<div class="old-help-para">The character classes are:</div>
<div class="old-help-para"><div class="help-column_heading">	item	matches				option</div>	\i	identifier characters		<a href="/neovim-docs-web/en/options#'isident'">'isident'</a>
	\I	like \i, excluding digits
	\k	keyword characters		<a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a>
	\K	like \k, excluding digits
	\p	printable characters		<a href="/neovim-docs-web/en/options#'isprint'">'isprint'</a>
	\P	like \p, excluding digits
	\f	file name characters		<a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a>
	\F	like \f, excluding digits</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="27.8"></a><span class="help-tag">27.8</span>  	Matching a line break</span></h2></div>
<div class="old-help-para">Vim can find a pattern that includes a line break.  You need to specify where
the line break happens, because all items mentioned so far don't match a line
break.
   To check for a line break in a specific place, use the "\n" item:<pre>/one\ntwo</pre>
This will match at a line that ends in "one" and the next line starts with
"two".  To match "one two" as well, you need to match a space or a line
break.  The item to use for it is "\_s":<pre>/one\_stwo</pre>
To allow any amount of white space:<pre>/one\_s\+two</pre>
This also matches when "one  " is at the end of a line and "   two" at the
start of the next one.</div>
<div class="old-help-para">"\s" matches white space, "\_s" matches white space or a line break.
Similarly, "\a" matches an alphabetic character, and "\_a" matches an
alphabetic character or a line break.  The other character classes and ranges
can be modified in the same way by inserting a "_".</div>
<div class="old-help-para">Many other items can be made to match a line break by prepending "\_".  For
example: "\_." matches any character or a line break.</div>
<div class="old-help-para">	Note:
	"\_.*" matches everything until the end of the file.  Be careful with
	this, it can make a search command very slow.</div>
<div class="old-help-para">Another example is "\_[]", a character range that includes a line break:<pre>/"\_[^"]*"</pre>
This finds a text in double quotes that may be split up in several lines.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="27.9"></a><span class="help-tag">27.9</span>  	Examples</span></h2></div>
<div class="old-help-para">Here are a few search patterns you might find useful.  This shows how the
items mentioned above can be combined.</div>
<div class="old-help-para">FINDING A CALIFORNIA LICENSE PLATE</div>
<div class="old-help-para">A sample license plate number is "1MGU103".  It has one digit, three uppercase
letters and three digits.  Directly putting this into a search pattern:<pre>/\d\u\u\u\d\d\d</pre>
Another way is to specify that there are three digits and letters with a
count:<pre>/\d\u\{3}\d\{3}</pre>
Using [] ranges instead:<pre>/[0-9][A-Z]\{3}[0-9]\{3}</pre>
Which one of these you should use?  Whichever one you can remember.  The
simple way you can remember is much faster than the fancy way that you can't.
If you can remember them all, then avoid the last one, because it's both more
typing and slower to execute.</div>
<div class="old-help-para"><a name="_finding-an-identifier"></a><h3 class="help-heading">FINDING AN IDENTIFIER</h3></div>
<div class="old-help-para">In C programs (and many other computer languages) an identifier starts with a
letter and further consists of letters and digits.  Underscores can be used
too.  This can be found with:<pre>/\&lt;\h\w*\&gt;</pre>
"\&lt;" and "\&gt;" are used to find only whole words.  "\h" stands for "[A-Za-z_]"
and "\w" for "[0-9A-Za-z_]".</div>
<div class="old-help-para">	Note:
	"\&lt;" and "\&gt;" depend on the <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> option.  If it includes "-",
	for example, then "ident-" is not matched.  In this situation use:<pre>/\w\@&lt;!\h\w*\w\@!</pre></div>
<div class="old-help-para">	This checks if "\w" does not match before or after the identifier.
	See <a href="/neovim-docs-web/en/pattern#%2F%5C%40%3C%21">/\@&lt;!</a> and <a href="/neovim-docs-web/en/pattern#%2F%5C%40%21">/\@!</a>.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_28#usr_28.txt">usr_28.txt</a>  Folding</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  