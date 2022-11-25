---
title:  Usr_44
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_44.txt"></a><a name="44.1"></a><h1> Usr_44</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_44.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			 Your own syntax highlighted</div>
<div class="old-help-para">Vim comes with highlighting for a couple of hundred different file types.  If
the file you are editing isn't included, read this chapter to find out how to
get this type of file highlighted.  Also see <a href="/neovim-docs-web/en/syntax#%3Asyn-define">:syn-define</a> in the reference
manual.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_44#44.1">44.1</a>  	Basic syntax commands
<a href="/neovim-docs-web/en/usr_44#44.2">44.2</a>  	Keywords
<a href="/neovim-docs-web/en/usr_44#44.3">44.3</a>  	Matches
<a href="/neovim-docs-web/en/usr_44#44.4">44.4</a>  	Regions
<a href="/neovim-docs-web/en/usr_44#44.5">44.5</a>  	Nested items
<a href="/neovim-docs-web/en/usr_44#44.6">44.6</a>  	Following groups
<a href="/neovim-docs-web/en/usr_44#44.7">44.7</a>  	Other arguments
<a href="/neovim-docs-web/en/usr_44#44.8">44.8</a>  	Clusters
<a href="/neovim-docs-web/en/usr_44#44.9">44.9</a>  	Including another syntax file
<a href="/neovim-docs-web/en/usr_44#44.10">44.10</a>  	Synchronizing
<a href="/neovim-docs-web/en/usr_44#44.11">44.11</a>  	Installing a syntax file
<a href="/neovim-docs-web/en/usr_44#44.12">44.12</a>  	Portable syntax file layout</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_45#usr_45.txt">usr_45.txt</a>  Select your language
 Previous chapter: <a href="/neovim-docs-web/en/usr_43#usr_43.txt">usr_43.txt</a>  Using filetypes
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Basic syntax commands</h2></div>
<div class="old-help-para">Using an existing syntax file to start with will save you a lot of time.  Try
finding a syntax file in $VIMRUNTIME/syntax for a language that is similar.
These files will also show you the normal layout of a syntax file.  To
understand it, you need to read the following.</div>
<div class="old-help-para">Let's start with the basic arguments.  Before we start defining any new
syntax, we need to clear out any old definitions:<pre>:syntax clear</pre>
This isn't required in the final syntax file, but very useful when
experimenting.</div>
<div class="old-help-para">There are more simplifications in this chapter.  If you are writing a syntax
file to be used by others, read all the way through the end to find out the
details.</div>
<div class="old-help-para"><a name="_listing-defined-items"></a><h3 class="help-heading">LISTING DEFINED ITEMS</h3></div>
<div class="old-help-para">To check which syntax items are currently defined, use this command:<pre>:syntax</pre>
You can use this to check which items have actually been defined.  Quite
useful when you are experimenting with a new syntax file.  It also shows the
colors used for each item, which helps to find out what is what.
   To list the items in a specific syntax group use:<pre>:syntax list {group-name}</pre>
This also can be used to list clusters (explained in <a href="/neovim-docs-web/en/usr_44#44.8">44.8</a>).  Just include
the @ in the name.</div>
<div class="old-help-para"><a name="_matching-case"></a><h3 class="help-heading">MATCHING CASE</h3></div>
<div class="old-help-para">Some languages are not case sensitive, such as Pascal.  Others, such as C, are
case sensitive.  You need to tell which type you have with the following
commands:<pre>:syntax case match
:syntax case ignore</pre>
The "match" argument means that Vim will match the case of syntax elements.
Therefore, "int" differs from "Int" and "INT".  If the "ignore" argument is
used, the following are equivalent: "Procedure", "PROCEDURE" and "procedure".
   The ":syntax case" commands can appear anywhere in a syntax file and affect
the syntax definitions that follow.  In most cases, you have only one ":syntax
case" command in your syntax file; if you work with an unusual language that
contains both case-sensitive and non-case-sensitive elements, however, you can
scatter the ":syntax case" command throughout the file.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="44.2"></a><span class="help-tag">44.2</span>  	Keywords</span></h2></div>
<div class="old-help-para">The most basic syntax elements are keywords.  To define a keyword, use the
following form:<pre>:syntax keyword {group} {keyword} ...</pre>
The <code>{group}</code> is the name of a syntax group.  With the ":highlight" command you
can assign colors to a <code>{group}</code>.  The <code>{keyword}</code> argument is an actual keyword.
Here are a few examples:<pre>:syntax keyword xType int long char
:syntax keyword xStatement if then else endif</pre>
This example uses the group names "xType" and "xStatement".  By convention,
each group name is prefixed by the filetype for the language being defined.
This example defines syntax for the x language (eXample language without an
interesting name).  In a syntax file for "csh" scripts the name "cshType"
would be used.  Thus the prefix is equal to the value of <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a>.
   These commands cause the words "int", "long" and "char" to be highlighted
one way and the words "if", "then", "else" and "endif" to be highlighted
another way.  Now you need to connect the x group names to standard Vim
names.  You do this with the following commands:<pre>:highlight link xType Type
:highlight link xStatement Statement</pre>
This tells Vim to highlight "xType" like "Type" and "xStatement" like
"Statement".  See <a href="/neovim-docs-web/en/syntax#group-name">group-name</a> for the standard names.</div>
<div class="old-help-para"><a name="_unusual-keywords"></a><h3 class="help-heading">UNUSUAL KEYWORDS</h3></div>
<div class="old-help-para">The characters used in a keyword must be in the <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> option.  If you
use another character, the word will never match.  Vim doesn't give a warning
message for this.
   The x language uses the '-' character in keywords.  This is how it's done:
<pre>:setlocal iskeyword+=-
:syntax keyword xStatement when-not</pre>
The ":setlocal" command is used to change <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> only for the current
buffer.  Still it does change the behavior of commands like "w" and "*".  If
that is not wanted, don't define a keyword but use a match (explained in the
next section).</div>
<div class="old-help-para">The x language allows for abbreviations.  For example, "next" can be
abbreviated to "n", "ne" or "nex".  You can define them by using this command:
<pre>:syntax keyword xStatement n[ext]</pre>
This doesn't match "nextone", keywords always match whole words only.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="44.3"></a><span class="help-tag">44.3</span>  	Matches</span></h2></div>
<div class="old-help-para">Consider defining something a bit more complex.  You want to match ordinary
identifiers.  To do this, you define a match syntax item.  This one matches
any word consisting of only lowercase letters:<pre>:syntax match xIdentifier /\&lt;\l\+\&gt;/</pre></div>
<div class="old-help-para">	Note:
	Keywords overrule any other syntax item.  Thus the keywords "if",
	"then", etc., will be keywords, as defined with the ":syntax keyword"
	commands above, even though they also match the pattern for
	xIdentifier.</div>
<div class="old-help-para">The part at the end is a pattern, like it's used for searching.  The // is
used to surround the pattern (like how it's done in a ":substitute" command).
You can use any other character, like a plus or a quote.</div>
<div class="old-help-para">Now define a match for a comment.  In the x language it is anything from # to
the end of a line:<pre>:syntax match xComment /#.*/</pre>
Since you can use any search pattern, you can highlight very complex things
with a match item.  See <a href="/neovim-docs-web/en/pattern#pattern">pattern</a> for help on search patterns.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="44.4"></a><span class="help-tag">44.4</span>  	Regions</span></h2></div>
<div class="old-help-para">In the example x language, strings are enclosed in double quotation marks (").
To highlight strings you define a region.  You need a region start (double
quote) and a region end (double quote).  The definition is as follows:<pre>:syntax region xString start=/"/ end=/"/</pre>
The "start" and "end" directives define the patterns used to find the start
and end of the region.  But what about strings that look like this?</div>
<div class="old-help-para"><div class="help-column_heading">	"A string with a double quote (\") in it"</div></div>
<div class="old-help-para">This creates a problem: The double quotation marks in the middle of the string
will end the region.  You need to tell Vim to skip over any escaped double
quotes in the string.  Do this with the skip keyword:<pre>:syntax region xString start=/"/ skip=/\\"/ end=/"/</pre>
The double backslash matches a single backslash, since the backslash is a
special character in search patterns.</div>
<div class="old-help-para">When to use a region instead of a match?  The main difference is that a match
item is a single pattern, which must match as a whole.  A region starts as
soon as the "start" pattern matches.  Whether the "end" pattern is found or
not doesn't matter.  Thus when the item depends on the "end" pattern to match,
you cannot use a region.  Otherwise, regions are often simpler to define.  And
it is easier to use nested items, as is explained in the next section.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="44.5"></a><span class="help-tag">44.5</span>  	Nested items</span></h2></div>
<div class="old-help-para">Take a look at this comment:</div>
<div class="old-help-para"><div class="help-column_heading">	%Get input  TODO: Skip white space</div></div>
<div class="old-help-para">You want to highlight TODO in big yellow letters, even though it is in a
comment that is highlighted blue.  To let Vim know about this, you define the
following syntax groups:<pre>:syntax keyword xTodo TODO contained
:syntax match xComment /%.*/ contains=xTodo</pre>
In the first line, the "contained" argument tells Vim that this keyword can
exist only inside another syntax item.  The next line has "contains=xTodo".
This indicates that the xTodo syntax element is inside it.  The result is that
the comment line as a whole is matched with "xComment" and made blue.  The
word TODO inside it is matched by xTodo and highlighted yellow (highlighting
for xTodo was setup for this).</div>
<div class="old-help-para"><a name="_recursive-nesting"></a><h3 class="help-heading">RECURSIVE NESTING</h3></div>
<div class="old-help-para">The x language defines code blocks in curly braces.  And a code block may
contain other code blocks.  This can be defined this way:<pre>:syntax region xBlock start=/{/ end=/}/ contains=xBlock</pre>
Suppose you have this text:</div>
<div class="old-help-para"><div class="help-column_heading">	while i &lt; b {</div><div class="help-column_heading">		if a {</div><div class="help-column_heading">			b = c;</div><div class="help-column_heading">		}</div><div class="help-column_heading">	}</div></div>
<div class="old-help-para">First a xBlock starts at the { in the first line.  In the second line another
{ is found.  Since we are inside a xBlock item, and it contains itself, a
nested xBlock item will start here.  Thus the "b = c" line is inside the
second level xBlock region.  Then a } is found in the next line, which matches
with the end pattern of the region.  This ends the nested xBlock.  Because the
} is included in the nested region, it is hidden from the first xBlock region.
Then at the last } the first xBlock region ends.</div>
<div class="old-help-para"><a name="_keeping-the-end"></a><h3 class="help-heading">KEEPING THE END</h3></div>
<div class="old-help-para">Consider the following two syntax items:<pre>:syntax region xComment start=/%/ end=/$/ contained
:syntax region xPreProc start=/#/ end=/$/ contains=xComment</pre>
You define a comment as anything from % to the end of the line.  A
preprocessor directive is anything from # to the end of the line.  Because you
can have a comment on a preprocessor line, the preprocessor definition
includes a "contains=xComment" argument.  Now look what happens with this
text:</div>
<div class="old-help-para"><div class="help-column_heading">	#define X = Y  % Comment text</div><div class="help-column_heading">	int foo = 1;</div></div>
<div class="old-help-para">What you see is that the second line is also highlighted as xPreProc.  The
preprocessor directive should end at the end of the line.  That is why
you have used "end=/$/".  So what is going wrong?
   The problem is the contained comment.  The comment starts with % and ends
at the end of the line.  After the comment ends, the preprocessor syntax
continues.  This is after the end of the line has been seen, so the next
line is included as well.
   To avoid this problem and to avoid a contained syntax item eating a needed
end of line, use the "keepend" argument.  This takes care of
the double end-of-line matching:<pre>:syntax region xComment start=/%/ end=/$/ contained
:syntax region xPreProc start=/#/ end=/$/ contains=xComment keepend</pre>
<a name="_containing-many-items"></a><h3 class="help-heading">CONTAINING MANY ITEMS</h3></div>
<div class="old-help-para">You can use the contains argument to specify that everything can be contained.
For example:<pre>:syntax region xList start=/\[/ end=/\]/ contains=ALL</pre>
All syntax items will be contained in this one.  It also contains itself, but
not at the same position (that would cause an endless loop).
   You can specify that some groups are not contained.  Thus contain all
groups but the ones that are listed:
<pre>:syntax region xList start=/\[/ end=/\]/ contains=ALLBUT,xString</pre>
With the "TOP" item you can include all items that don't have a "contained"
argument.  "CONTAINED" is used to only include items with a "contained"
argument.  See <a href="/neovim-docs-web/en/syntax#%3Asyn-contains">:syn-contains</a> for the details.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="44.6"></a><span class="help-tag">44.6</span>  	Following groups</span></h2></div>
<div class="old-help-para">The x language has statements in this form:</div>
<div class="old-help-para"><div class="help-column_heading">	if (condition) then</div></div>
<div class="old-help-para">You want to highlight the three items differently.  But "(condition)" and
"then" might also appear in other places, where they get different
highlighting.  This is how you can do this:<pre>:syntax match xIf /if/ nextgroup=xIfCondition skipwhite
:syntax match xIfCondition /([^)]*)/ contained nextgroup=xThen skipwhite
:syntax match xThen /then/ contained</pre>
The "nextgroup" argument specifies which item can come next.  This is not
required.  If none of the items that are specified are found, nothing happens.
For example, in this text:</div>
<div class="old-help-para"><div class="help-column_heading">	if not (condition) then</div></div>
<div class="old-help-para">The "if" is matched by xIf.  "not" doesn't match the specified nextgroup
xIfCondition, thus only the "if" is highlighted.</div>
<div class="old-help-para">The "skipwhite" argument tells Vim that white space (spaces and tabs) may
appear in between the items.  Similar arguments are "skipnl", which allows a
line break in between the items, and "skipempty", which allows empty lines.
Notice that "skipnl" doesn't skip an empty line, something must match after
the line break.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="44.7"></a><span class="help-tag">44.7</span>  	Other arguments</span></h2></div>
<div class="old-help-para"><a name="_matchgroup"></a><h3 class="help-heading">MATCHGROUP</h3></div>
<div class="old-help-para">When you define a region, the entire region is highlighted according to the
group name specified.  To highlight the text enclosed in parentheses () with
the group xInside, for example, use the following command:<pre>:syntax region xInside start=/(/ end=/)/</pre>
Suppose, that you want to highlight the parentheses differently.  You can do
this with a lot of convoluted region statements, or you can use the
"matchgroup" argument.  This tells Vim to highlight the start and end of a
region with a different highlight group (in this case, the xParen group):<pre>:syntax region xInside matchgroup=xParen start=/(/ end=/)/</pre>
The "matchgroup" argument applies to the start or end match that comes after
it.  In the previous example both start and end are highlighted with xParen.
To highlight the end with xParenEnd:<pre>:syntax region xInside matchgroup=xParen start=/(/
        \ matchgroup=xParenEnd end=/)/</pre>
A side effect of using "matchgroup" is that contained items will not match in
the start or end of the region.  The example for "transparent" uses this.</div>
<div class="old-help-para"><a name="_transparent"></a><h3 class="help-heading">TRANSPARENT</h3></div>
<div class="old-help-para">In a C language file you would like to highlight the () text after a "while"
differently from the () text after a "for".  In both of these there can be
nested () items, which should be highlighted in the same way.  You must make
sure the () highlighting stops at the matching ).  This is one way to do this:
<pre>:syntax region cWhile matchgroup=cWhile start=/while\s*(/ end=/)/
        \ contains=cCondNest
:syntax region cFor matchgroup=cFor start=/for\s*(/ end=/)/
        \ contains=cCondNest
:syntax region cCondNest start=/(/ end=/)/ contained transparent</pre>
Now you can give cWhile and cFor different highlighting.  The cCondNest item
can appear in either of them, but take over the highlighting of the item it is
contained in.  The "transparent" argument causes this.
   Notice that the "matchgroup" argument has the same group as the item
itself.  Why define it then?  Well, the side effect of using a matchgroup is
that contained items are not found in the match with the start item then.
This avoids that the cCondNest group matches the ( just after the "while" or
"for".  If this would happen, it would span the whole text until the matching
) and the region would continue after it.  Now cCondNest only matches after
the match with the start pattern, thus after the first (.</div>
<div class="old-help-para"><a name="_offsets"></a><h3 class="help-heading">OFFSETS</h3></div>
<div class="old-help-para">Suppose you want to define a region for the text between ( and ) after an
"if".  But you don't want to include the "if" or the ( and ).  You can do this
by specifying offsets for the patterns.  Example:<pre>:syntax region xCond start=/if\s*(/ms=e+1 end=/)/me=s-1</pre>
The offset for the start pattern is "ms=e+1".  "ms" stands for Match Start.
This defines an offset for the start of the match.  Normally the match starts
where the pattern matches.  "e+1" means that the match now starts at the end
of the pattern match, and then one character further.
   The offset for the end pattern is "me=s-1".  "me" stands for Match End.
"s-1" means the start of the pattern match and then one character back.  The
result is that in this text:</div>
<div class="old-help-para"><div class="help-column_heading">	if (foo == bar)</div></div>
<div class="old-help-para">Only the text "foo == bar" will be highlighted as xCond.</div>
<div class="old-help-para">More about offsets here: <a href="/neovim-docs-web/en/syntax#%3Asyn-pattern-offset">:syn-pattern-offset</a>.</div>
<div class="old-help-para"><a name="_oneline"></a><h3 class="help-heading">ONELINE</h3></div>
<div class="old-help-para">The "oneline" argument indicates that the region does not cross a line
boundary.  For example:<pre>:syntax region xIfThen start=/if/ end=/then/ oneline</pre>
This defines a region that starts at "if" and ends at "then".  But if there is
no "then" after the "if", the region doesn't match.</div>
<div class="old-help-para">	Note:
	When using "oneline" the region doesn't start if the end pattern
	doesn't match in the same line.  Without "oneline" Vim does _not_
	check if there is a match for the end pattern.  The region starts even
	when the end pattern doesn't match in the rest of the file.</div>
<div class="old-help-para"><a name="_continuation-lines-and-avoiding-them"></a><h3 class="help-heading">CONTINUATION LINES AND AVOIDING THEM</h3></div>
<div class="old-help-para">Things now become a little more complex.  Let's define a preprocessor line.
This starts with a # in the first column and continues until the end of the
line.  A line that ends with \ makes the next line a continuation line.  The
way you handle this is to allow the syntax item to contain a continuation
pattern:<pre>:syntax region xPreProc start=/^#/ end=/$/ contains=xLineContinue
:syntax match xLineContinue "\\$" contained</pre>
In this case, although xPreProc normally matches a single line, the group
contained in it (namely xLineContinue) lets it go on for more than one line.
For example, it would match both of these lines:</div>
<div class="old-help-para"><div class="help-column_heading">	#define SPAM  spam spam spam \</div><div class="help-column_heading">			bacon and spam</div></div>
<div class="old-help-para">In this case, this is what you want.  If it is not what you want, you can call
for the region to be on a single line by adding "excludenl" to the contained
pattern.  For example, you want to highlight "end" in xPreProc, but only at
the end of the line.  To avoid making the xPreProc continue on the next line,
like xLineContinue does, use "excludenl" like this:<pre>:syntax region xPreProc start=/^#/ end=/$/
        \ contains=xLineContinue,xPreProcEnd
:syntax match xPreProcEnd excludenl /end$/ contained
:syntax match xLineContinue "\\$" contained</pre>
"excludenl" must be placed before the pattern.  Since "xLineContinue" doesn't
have "excludenl", a match with it will extend xPreProc to the next line as
before.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="44.8"></a><span class="help-tag">44.8</span>  	Clusters</span></h2></div>
<div class="old-help-para">One of the things you will notice as you start to write a syntax file is that
you wind up generating a lot of syntax groups.  Vim enables you to define a
collection of syntax groups called a cluster.
   Suppose you have a language that contains for loops, if statements, while
loops, and functions.  Each of them contains the same syntax elements: numbers
and identifiers.  You define them like this:<pre>:syntax match xFor /^for.*/ contains=xNumber,xIdent
:syntax match xIf /^if.*/ contains=xNumber,xIdent
:syntax match xWhile /^while.*/ contains=xNumber,xIdent</pre>
You have to repeat the same "contains=" every time.  If you want to add
another contained item, you have to add it three times.  Syntax clusters
simplify these definitions by enabling you to have one cluster stand for
several syntax groups.
   To define a cluster for the two items that the three groups contain, use
the following command:<pre>:syntax cluster xState contains=xNumber,xIdent</pre>
Clusters are used inside other syntax items just like any syntax group.
Their names start with @.  Thus, you can define the three groups like this:<pre>:syntax match xFor /^for.*/ contains=@xState
:syntax match xIf /^if.*/ contains=@xState
:syntax match xWhile /^while.*/ contains=@xState</pre>
You can add new group names to this cluster with the "add" argument:<pre>:syntax cluster xState add=xString</pre>
You can remove syntax groups from this list as well:<pre>:syntax cluster xState remove=xNumber</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="44.9"></a><span class="help-tag">44.9</span>  	Including another syntax file</span></h2></div>
<div class="old-help-para">The C++ language syntax is a superset of the C language.  Because you do not
want to write two syntax files, you can have the C++ syntax file read in the
one for C by using the following command:<pre>:runtime! syntax/c.vim</pre>
The ":runtime!" command searches <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> for all "syntax/c.vim" files.
This makes the C parts of the C++ syntax be defined like for C files.  If you
have replaced the c.vim syntax file, or added items with an extra file, these
will be loaded as well.
   After loading the C syntax items the specific C++ items can be defined.
For example, add keywords that are not used in C:<pre>:syntax keyword cppStatement        new delete this friend using</pre>
This works just like in any other syntax file.</div>
<div class="old-help-para">Now consider the Perl language.  A Perl script consists of two distinct parts:
a documentation section in POD format, and a program written in Perl itself.
The POD section starts with "=head" and ends with "=cut".
   You want to define the POD syntax in one file, and use it from the Perl
syntax file.  The ":syntax include" command reads in a syntax file and stores
the elements it defined in a syntax cluster.  For Perl, the statements are as
follows:<pre>:syntax include @Pod &lt;sfile&gt;:p:h/pod.vim
:syntax region perlPOD start=/^=head/ end=/^=cut/ contains=@Pod</pre>
When "=head" is found in a Perl file, the perlPOD region starts.  In this
region the @Pod cluster is contained.  All the items defined as top-level
items in the pod.vim syntax files will match here.  When "=cut" is found, the
region ends and we go back to the items defined in the Perl file.
   The ":syntax include" command is clever enough to ignore a ":syntax clear"
command in the included file.  And an argument such as "contains=ALL" will
only contain items defined in the included file, not in the file that includes
it.
   The "&lt;sfile&gt;:p:h/" part uses the name of the current file (<code>&lt;sfile&gt;</code>),
expands it to a full path (:p) and then takes the head (:h).  This results in
the directory name of the file.  This causes the pod.vim file in the same
directory to be included.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="44.10"></a><span class="help-tag">44.10</span>  	Synchronizing</span></h2></div>
<div class="old-help-para">Compilers have it easy.  They start at the beginning of a file and parse it
straight through.  Vim does not have it so easy.  It must start in the middle,
where the editing is being done.  So how does it tell where it is?
   The secret is the ":syntax sync" command.  This tells Vim how to figure out
where it is.  For example, the following command tells Vim to scan backward
for the beginning or end of a C-style comment and begin syntax coloring from
there:<pre>:syntax sync ccomment</pre>
You can tune this processing with some arguments.  The "minlines" argument
tells Vim the minimum number of lines to look backward, and "maxlines" tells
the editor the maximum number of lines to scan.
   For example, the following command tells Vim to look at least 10 lines
before the top of the screen:<pre>:syntax sync ccomment minlines=10 maxlines=500</pre>
If it cannot figure out where it is in that space, it starts looking farther
and farther back until it figures out what to do.  But it looks no farther
back than 500 lines.  (A large "maxlines" slows down processing.  A small one
might cause synchronization to fail.)
   To make synchronizing go a bit faster, tell Vim which syntax items can be
skipped.  Every match and region that only needs to be used when actually
displaying text can be given the "display" argument.
   By default, the comment to be found will be colored as part of the Comment
syntax group.  If you want to color things another way, you can specify a
different syntax group:<pre>:syntax sync ccomment xAltComment</pre>
If your programming language does not have C-style comments in it, you can try
another method of synchronization.  The simplest way is to tell Vim to space
back a number of lines and try to figure out things from there.  The following
command tells Vim to go back 150 lines and start parsing from there:<pre>:syntax sync minlines=150</pre>
A large "minlines" value can make Vim slower, especially when scrolling
backwards in the file.
   Finally, you can specify a syntax group to look for by using this command:
<pre>:syntax sync match {sync-group-name}
        \ grouphere {group-name} {pattern}</pre>
This tells Vim that when it sees <code>{pattern}</code> the syntax group named <code>{group-name}</code>
begins just after the pattern given.  The <code>{sync-group-name}</code> is used to give a
name to this synchronization specification.  For example, the sh scripting
language begins an if statement with "if" and ends it with "fi":</div>
<div class="old-help-para"><div class="help-column_heading">	if [ --f file.txt ] ; then</div><div class="help-column_heading">		echo "File exists"</div><div class="help-column_heading">	fi</div></div>
<div class="old-help-para">To define a "grouphere" directive for this syntax, you use the following
command:<pre>:syntax sync match shIfSync grouphere shIf "\&lt;if\&gt;"</pre>
The "groupthere" argument tells Vim that the pattern ends a group.  For
example, the end of the if/fi group is as follows:<pre>:syntax sync match shIfSync groupthere NONE "\&lt;fi\&gt;"</pre>
In this example, the NONE tells Vim that you are not in any special syntax
region.  In particular, you are not inside an if block.</div>
<div class="old-help-para">You also can define matches and regions that are with no "grouphere" or
"groupthere" arguments.  These groups are for syntax groups skipped during
synchronization.  For example, the following skips over anything inside {},
even if it would normally match another synchronization method:<pre>:syntax sync match xSpecial /{.*}/</pre>
More about synchronizing in the reference manual: <a href="/neovim-docs-web/en/syntax#%3Asyn-sync">:syn-sync</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="44.11"></a><span class="help-tag">44.11</span>  	Installing a syntax file</span></h2></div>
<div class="old-help-para">When your new syntax file is ready to be used, drop it in a "syntax" directory
in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  For Unix that would be "~/.config/nvim/syntax".
  The name of the syntax file must be equal to the file type, with ".vim"
added.  Thus for the x language, the full path of the file would be:</div>
<div class="old-help-para"><div class="help-column_heading">	~/.config/nvim/syntax/x.vim</div></div>
<div class="old-help-para">You must also make the file type be recognized.  See <a href="/neovim-docs-web/en/usr_43#43.2">43.2</a>.</div>
<div class="old-help-para">If your file works well, you might want to make it available to other Vim
users.  First read the next section to make sure your file works well for
others.  Then e-mail it to the Vim maintainer: &lt;maintainer@vim.org&gt;.  Also
explain how the filetype can be detected.  With a bit of luck your file will
be included in the next Vim version!</div>
<div class="old-help-para"><a name="_adding-to-an-existing-syntax-file"></a><h3 class="help-heading">ADDING TO AN EXISTING SYNTAX FILE</h3></div>
<div class="old-help-para">We were assuming you were adding a completely new syntax file.  When an existing
syntax file works, but is missing some items, you can add items in a separate
file.  That avoids changing the distributed syntax file, which will be lost
when installing a new version of Vim.
   Write syntax commands in your file, possibly using group names from the
existing syntax.  For example, to add new variable types to the C syntax file:
<pre>:syntax keyword cType off_t uint</pre>
Write the file with the same name as the original syntax file.  In this case
"c.vim".  Place it in a directory near the end of <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  This makes
it loaded after the original syntax file.  For Unix this would be:</div>
<div class="old-help-para"><div class="help-column_heading">	~/.config/nvim/after/syntax/c.vim</div></div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="44.12"></a><span class="help-tag">44.12</span>  	Portable syntax file layout</span></h2></div>
<div class="old-help-para">Wouldn't it be nice if all Vim users exchange syntax files?  To make this
possible, the syntax file must follow a few guidelines.</div>
<div class="old-help-para">Start with a header that explains what the syntax file is for, who maintains
it and when it was last updated.  Don't include too much information about
changes history, not many people will read it.  Example:<pre>" Vim syntax file
" Language:        C
" Maintainer:        Bram Moolenaar &lt;Bram@vim.org&gt;
" Last Change:        2001 Jun 18
" Remark:        Included by the C++ syntax.</pre>
Use the same layout as the other syntax files.  Using an existing syntax file
as an example will save you a lot of time.</div>
<div class="old-help-para">Choose a good, descriptive name for your syntax file.  Use lowercase letters
and digits.  Don't make it too long, it is used in many places: The name of
the syntax file "name.vim", <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a>, b:current_syntax and the start of each
syntax group (nameType, nameStatement, nameString, etc).</div>
<div class="old-help-para">Start with a check for "b:current_syntax".  If it is defined, some other
syntax file, earlier in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> was already loaded:<pre>if exists("b:current_syntax")
  finish
endif</pre>
Set "b:current_syntax" to the name of the syntax at the end.  Don't forget
that included files do this too, you might have to reset "b:current_syntax" if
you include two files.</div>
<div class="old-help-para">Do not include anything that is a user preference.  Don't set <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a>,
<a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a>, etc.  These belong in a filetype plugin.</div>
<div class="old-help-para">Do not include mappings or abbreviations.  Only include setting <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> if
it is really necessary for recognizing keywords.</div>
<div class="old-help-para">To allow users select their own preferred colors, make a different group name
for every kind of highlighted item.  Then link each of them to one of the
standard highlight groups.  That will make it work with every color scheme.
If you select specific colors it will look bad with some color schemes.  And
don't forget that some people use a different background color, or have only
eight colors available.</div>
<div class="old-help-para">For the linking use "hi def link", so that the user can select different
highlighting before your syntax file is loaded.  Example:<pre>hi def link nameString        String
hi def link nameNumber        Number
hi def link nameCommand        Statement
... etc ...</pre>
Add the "display" argument to items that are not used when syncing, to speed
up scrolling backwards and <code>CTRL-L</code>.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_45#usr_45.txt">usr_45.txt</a>  Select your language</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  