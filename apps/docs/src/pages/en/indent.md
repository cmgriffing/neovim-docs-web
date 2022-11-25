---
title:  Indent
layout: ../../layouts/MainLayout.astro
---

  <a name="indent.txt"></a><a name="C-indenting"></a><h1> Indent</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/indent.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">This file is about indenting C programs and other files.</div>
<div class="old-help-para"><h2 class="help-heading">1. Indenting C style programs</h2></div>
<div class="old-help-para">The basics for C style indenting are explained in section <a href="usr_30.html#30.2">30.2</a> of the user
manual.</div>
<div class="old-help-para">Vim has options for automatically indenting C style program files. Many
programming languages including Java and C++ follow very closely the
formatting conventions established with C.  These options affect only the
indent and do not perform other formatting.  There are additional options that
affect other kinds of formatting as well as indenting, see <a href="change.html#format-comments">format-comments</a>,
<a href="change.html#fo-table">fo-table</a>, <a href="change.html#gq">gq</a> and <a href="change.html#formatting">formatting</a> for the main ones.</div>
<div class="old-help-para">There are in fact four main methods available for indentation, each one
overrides the previous if it is enabled, or non-empty for <a href="options.html#'indentexpr'">'indentexpr'</a>:
<a href="options.html#'autoindent'">'autoindent'</a>	uses the indent from the previous line.
<a href="options.html#'smartindent'">'smartindent'</a>	is like <a href="options.html#'autoindent'">'autoindent'</a> but also recognizes some C syntax to
		increase/reduce the indent where appropriate.
<a href="options.html#'cindent'">'cindent'</a>	Works more cleverly than the other two and is configurable to
		different indenting styles.
<a href="options.html#'indentexpr'">'indentexpr'</a>	The most flexible of all: Evaluates an expression to compute
		the indent of a line.  When non-empty this method overrides
		the other ones.  See <a href="indent.html#indent-expression">indent-expression</a>.
The rest of this section describes the <a href="options.html#'cindent'">'cindent'</a> option.</div>
<div class="old-help-para">Note that <a href="options.html#'cindent'">'cindent'</a> indenting does not work for every code scenario.  Vim
is not a C compiler: it does not recognize all syntax.  One requirement is
that toplevel functions have a '<code>{' in the first column.  Otherwise they are}</code>
easily confused with declarations.</div>
<div class="old-help-para">These five options control C program indenting:
<a href="options.html#'cindent'">'cindent'</a>	Enables Vim to perform C program indenting automatically.
<a href="options.html#'cinkeys'">'cinkeys'</a>	Specifies which keys trigger reindenting in insert mode.
<a href="options.html#'cinoptions'">'cinoptions'</a>	Sets your preferred indent style.
<a href="options.html#'cinwords'">'cinwords'</a>	Defines keywords that start an extra indent in the next line.
<a href="options.html#'cinscopedecls'">'cinscopedecls'</a>	Defines strings that are recognized as a C++ scope declaration.</div>
<div class="old-help-para">If <a href="options.html#'lisp'">'lisp'</a> is not on and <a href="options.html#'equalprg'">'equalprg'</a> is empty, the "=" operator indents using
Vim's built-in algorithm rather than calling an external program.</div>
<div class="old-help-para">See <a href="autocmd.html#autocommand">autocommand</a> for how to set the <a href="options.html#'cindent'">'cindent'</a> option automatically for C code
files and reset it for others.</div>
<div class="old-help-para">					<a name="cinkeys-format"></a><code class="help-tag-right">cinkeys-format</code> <a name="indentkeys-format"></a><code class="help-tag">indentkeys-format</code>
The <a href="options.html#'cinkeys'">'cinkeys'</a> option is a string that controls Vim's indenting in response to
typing certain characters or commands in certain contexts.  Note that this not
only triggers C-indenting.  When <a href="options.html#'indentexpr'">'indentexpr'</a> is not empty <a href="options.html#'indentkeys'">'indentkeys'</a> is
used instead.  The format of <a href="options.html#'cinkeys'">'cinkeys'</a> and <a href="options.html#'indentkeys'">'indentkeys'</a> is equal.</div>
<div class="old-help-para">The default is "0{,0},0),0],:,0#,!^F,o,O,e" which specifies that indenting
occurs as follows:</div>
<div class="old-help-para">	"0{"	if you type '<code>{' as the first character in a line}</code>
	"0}"	if you type '}' as the first character in a line
	"0)"	if you type ')' as the first character in a line
	"0]"	if you type ']' as the first character in a line
	":"	if you type ':' after a label or case statement
	"0#"	if you type '#' as the first character in a line
	"!^F"	if you type <code>CTRL-F</code> (which is not inserted)
	"o"	if you type a <code>&lt;CR&gt;</code> anywhere or use the "o" command (not in
		insert mode!)
	"O"	if you use the "O" command (not in insert mode!)
	"e"	if you type the second 'e' for an "else" at the start of a
		line</div>
<div class="old-help-para">Characters that can precede each key:				<a name="i_CTRL-F"></a><code class="help-tag-right">i_CTRL-F</code>
!	When a '!' precedes the key, Vim will not insert the key but will
	instead reindent the current line.  This allows you to define a
	command key for reindenting the current line.  <code>CTRL-F</code> is the default
	key for this.  Be careful if you define <code>CTRL-I</code> for this because <code>CTRL-I</code>
	is the ASCII code for <code>&lt;Tab&gt;</code>.
*	When a '' precedes the key, Vim will reindent the line before
	inserting the key.  If <a href="options.html#'cinkeys'">'cinkeys'</a> contains "*&lt;Return&gt;", Vim reindents
	the current line before opening a new line.
0	When a zero precedes the key (but appears after '!' or '') Vim will
	reindent the line only if the key is the first character you type in
	the line.  When used before "=" Vim will only reindent the line if
	there is only white space before the word.</div>
<div class="old-help-para">When neither '!' nor '' precedes the key, Vim reindents the line after you
type the key.  So ';' sets the indentation of a line which includes the ';'.</div>
<div class="old-help-para">Special key names:</div>
<div class="old-help-para">&gt;	Angle brackets mean spelled-out names of keys.  For example: "&lt;Up&gt;",
	"&lt;Ins&gt;" (see <a href="intro.html#key-notation">key-notation</a>).
^	Letters preceded by a caret (^) are control characters.  For example:
	"^F" is <code>CTRL-F</code>.
o	Reindent a line when you use the "o" command or when Vim opens a new
	line below the current one (e.g., when you type <code>&lt;Enter&gt;</code> in insert
	mode).
O	Reindent a line when you use the "O" command.
e	Reindent a line that starts with "else" when you type the second 'e'.
:	Reindent a line when a ':' is typed which is after a label or case
	statement.  Don't reindent for a ":" in "class::method" for C++.  To
	Reindent for any ":", use "&lt;:&gt;".
=word	Reindent when typing the last character of "word".  "word" may
	actually be part of another word.  Thus "=end" would cause reindenting
	when typing the "d" in "endif" or "endwhile".  But not when typing
	"bend".  Also reindent when completion produces a word that starts
	with "word".  "0=word" reindents when there is only white space before
	the word.
=~word	Like =word, but ignore case.</div>
<div class="old-help-para">If you really want to reindent when you type 'o', 'O', 'e', '0', '&lt;', '&gt;',
'', ':' or '!', use "&lt;o&gt;", "&lt;O&gt;", "&lt;e&gt;", "&lt;0&gt;", "&lt;&lt;&gt;", "&lt;&gt;&gt;", "&lt;*&gt;", "&lt;:&gt;" or
"&lt;!&gt;", respectively, for those keys.</div>
<div class="old-help-para">For an emacs-style indent mode where lines aren't indented every time you
press <code>&lt;Enter&gt;</code> but only if you press <code>&lt;Tab&gt;</code>, I suggest:
	:set cinkeys=0{,0},:,0#,!&lt;Tab&gt;,!^F
You might also want to switch off <a href="options.html#'autoindent'">'autoindent'</a> then.</div>
<div class="old-help-para">Note: If you change the current line's indentation manually, Vim ignores the
cindent settings for that line.  This prevents vim from reindenting after you
have changed the indent by typing <code>&lt;BS&gt;</code>, <code>&lt;Tab&gt;</code>, or <code>&lt;Space&gt;</code> in the indent or
used <code>CTRL-T</code> or <code>CTRL-D</code>.</div>
<div class="old-help-para">						<a name="cinoptions-values"></a><code class="help-tag-right">cinoptions-values</code>
The <a href="options.html#'cinoptions'">'cinoptions'</a> option sets how Vim performs indentation.  The value after
the option character can be one of these (N is any number):
	N	indent N spaces
	-N	indent N spaces to the left
	Ns	N times <a href="options.html#'shiftwidth'">'shiftwidth'</a> spaces
	-Ns	N times <a href="options.html#'shiftwidth'">'shiftwidth'</a> spaces to the left</div>
<div class="old-help-para">In the list below,
"N" represents a number of your choice (the number can be negative).  When
there is an 's' after the number, Vim multiplies the number by <a href="options.html#'shiftwidth'">'shiftwidth'</a>:
"1s" is <a href="options.html#'shiftwidth'">'shiftwidth'</a>, "2s" is two times <a href="options.html#'shiftwidth'">'shiftwidth'</a>, etc.  You can use a
decimal point, too: "-0.5s" is minus half a <a href="options.html#'shiftwidth'">'shiftwidth'</a>.
The examples below assume a <a href="options.html#'shiftwidth'">'shiftwidth'</a> of 4.
							<a name="cino-%3E"></a><code class="help-tag-right">cino-&gt;</code>
	&gt;N    Amount added for "normal" indent.  Used after a line that should
	      increase the indent (lines starting with "if", an opening brace,
	      etc.).  (default <a href="options.html#'shiftwidth'">'shiftwidth'</a>).</div>
<div class="old-help-para">		cino=		    cino=&gt;2		cino=&gt;2s<pre>if (cond)              if (cond)                  if (cond)
{                      {                          {
    foo;                foo;                          foo;
}                      }                          }</pre></div>
<div class="old-help-para">							<a name="cino-e"></a><code class="help-tag-right">cino-e</code>
	eN    Add N to the prevailing indent inside a set of braces if the
	      opening brace at the End of the line (more precise: is not the
	      first character in a line).  This is useful if you want a
	      different indent when the '<code>{' is at the start of the line from}</code>
	      when '<code>{' is at the end of the line.  (default 0).}</code></div>
<div class="old-help-para">		cino=		    cino=e2		cino=e-2<pre>if (cond) {              if (cond) {          if (cond) {
    foo;                    foo;            foo;
}                      }                          }
else                      else                  else
{                      {                          {
    bar;                  bar;                      bar;
}                      }                          }</pre></div>
<div class="old-help-para">							<a name="cino-n"></a><code class="help-tag-right">cino-n</code>
	nN    Add N to the prevailing indent for a statement after an "if",
	      "while", etc., if it is NOT inside a set of braces.  This is
	      useful if you want a different indent when there is no '{'
	      before the statement from when there is a '<code>{' before it.}</code>
	      (default 0).</div>
<div class="old-help-para">		cino=		    cino=n2		cino=n-2<pre>if (cond)              if (cond)                  if (cond)
    foo;                    foo;            foo;
else                      else                  else
{                      {                          {
    bar;                  bar;                      bar;
}                      }                          }</pre></div>
<div class="old-help-para">							<a name="cino-f"></a><code class="help-tag-right">cino-f</code>
	fN    Place the first opening brace of a function or other block in
	      column N.  This applies only for an opening brace that is not
	      inside other braces and is at the start of the line.  What comes
	      after the brace is put relative to this brace.  (default 0).</div>
<div class="old-help-para">		cino=		    cino=f.5s		cino=f1s<pre>func()              func()                  func()
{                        {                      {
    int foo;                    int foo;                  int foo;</pre></div>
<div class="old-help-para">							<a name="cino-%7B"></a><code class="help-tag-right">cino-{</code>
	<code>{N    Place opening braces N characters from the prevailing indent.}</code>
	      This applies only for opening braces that are inside other
	      braces.  (default 0).</div>
<div class="old-help-para">		cino=		    cino={.5s		cino={1s<pre>if (cond)              if (cond)                  if (cond)
{                        {                      {
    foo;                  foo;                      foo;</pre></div>
<div class="old-help-para">							<a name="cino-%7D"></a><code class="help-tag-right">cino-}</code>
	}N    Place closing braces N characters from the matching opening
	      brace.  (default 0).</div>
<div class="old-help-para">		cino=		    cino={2,}-0.5s	cino=}2<pre>if (cond)              if (cond)                  if (cond)
{                        {                  {
    foo;                  foo;                      foo;
}                      }                            }</pre></div>
<div class="old-help-para">							<a name="cino-%5E"></a><code class="help-tag-right">cino-^</code>
	^N    Add N to the prevailing indent inside a set of braces if the
	      opening brace is in column 0.  This can specify a different
	      indent for whole of a function (some may like to set it to a
	      negative number).  (default 0).</div>
<div class="old-help-para">		cino=		    cino=^-2		cino=^-s<pre>func()              func()                  func()
{                      {                          {
    if (cond)                if (cond)          if (cond)
    {                        {                  {
        a = b;            a = b;              a = b;
    }                        }                  }
}                      }                          }</pre></div>
<div class="old-help-para">							<a name="cino-L"></a><code class="help-tag-right">cino-L</code>
	LN    Controls placement of jump labels. If N is negative, the label
	      will be placed at column 1. If N is non-negative, the indent of
	      the label will be the prevailing indent minus N.  (default -1).</div>
<div class="old-help-para">		cino=               cino=L2             cino=Ls<pre>func()              func()              func()
{                   {                   {
    {                   {                   {
        stmt;               stmt;               stmt;
LABEL:                    LABEL:            LABEL:
    }                   }                   }
}                   }                   }</pre></div>
<div class="old-help-para">							<a name="cino-%3A"></a><code class="help-tag-right">cino-:</code>
	:N    Place case labels N characters from the indent of the switch().
	      (default <a href="options.html#'shiftwidth'">'shiftwidth'</a>).</div>
<div class="old-help-para">		cino=		    cino=:0<pre>switch (x)              switch(x)
{                      {
    case 1:              case 1:
        a = b;          a = b;
    default:              default:
}                      }</pre></div>
<div class="old-help-para">							<a name="cino-%3D"></a><code class="help-tag-right">cino-=</code>
	=N    Place statements occurring after a case label N characters from
	      the indent of the label.  (default <a href="options.html#'shiftwidth'">'shiftwidth'</a>).</div>
<div class="old-help-para">		cino=		    cino==10<pre>case 11:                case 11:  a = a + 1;
    a = a + 1;                  b = b + 1;</pre></div>
<div class="old-help-para">							<a name="cino-l"></a><code class="help-tag-right">cino-l</code>
	lN    If N != 0 Vim will align with a case label instead of the
	      statement after it in the same line.</div>
<div class="old-help-para">		cino=			    cino=l1<pre>switch (a) {              switch (a) {
    case 1: {                  case 1: {
                break;              break;
            }                  }</pre></div>
<div class="old-help-para">							<a name="cino-b"></a><code class="help-tag-right">cino-b</code>
	bN    If N != 0 Vim will align a final "break" with the case label,
	      so that case..break looks like a sort of block.  (default: 0).
	      When using 1, consider adding "0=break" to <a href="options.html#'cinkeys'">'cinkeys'</a>.</div>
<div class="old-help-para">		cino=		    cino=b1<pre>switch (x)              switch(x)
{                      {
    case 1:                  case 1:
        a = b;              a = b;
        break;          break;

    default:                  default:
        a = 0;              a = 0;
        break;          break;
}                      }</pre></div>
<div class="old-help-para">							<a name="cino-g"></a><code class="help-tag-right">cino-g</code>
	gN    Place C++ scope declarations N characters from the indent of the
	      block they are in.  (default <a href="options.html#'shiftwidth'">'shiftwidth'</a>). By default, a scope
	      declaration is "public:", "protected:" or "private:". This can
	      be adjusted with the <a href="options.html#'cinscopedecls'">'cinscopedecls'</a> option.</div>
<div class="old-help-para">		cino=		    cino=g0<pre>{                      {
    public:              public:
        a = b;          a = b;
    private:              private:
}                      }</pre></div>
<div class="old-help-para">							<a name="cino-h"></a><code class="help-tag-right">cino-h</code>
	hN    Place statements occurring after a C++ scope declaration N
	      characters from the indent of the label.  (default
	      <a href="options.html#'shiftwidth'">'shiftwidth'</a>).</div>
<div class="old-help-para">		cino=		    cino=h10<pre>public:                public:   a = a + 1;
    a = a + 1;                  b = b + 1;</pre></div>
<div class="old-help-para">							<a name="cino-N"></a><code class="help-tag-right">cino-N</code>
	NN    Indent inside C++ namespace N characters extra compared to a
	      normal block.  (default 0).</div>
<div class="old-help-para">		cino=			   cino=N-s<pre>namespace {                namespace {
    void function();       void function();
}                          }

namespace my               namespace my
{                          {
    void function();       void function();
}                          }</pre></div>
<div class="old-help-para">							<a name="cino-E"></a><code class="help-tag-right">cino-E</code>
	EN    Indent inside C++ linkage specifications (extern "C" or
	      extern "C++") N characters extra compared to a normal block.
	      (default 0).</div>
<div class="old-help-para">		cino=			   cino=E-s<pre>extern "C" {               extern "C" {
    void function();       void function();
}                          }

extern "C"                 extern "C"
{                          {
    void function();       void function();
}                          }</pre></div>
<div class="old-help-para">							<a name="cino-p"></a><code class="help-tag-right">cino-p</code>
	pN    Parameter declarations for K&amp;R-style function declarations will
	      be indented N characters from the margin.  (default
	      <a href="options.html#'shiftwidth'">'shiftwidth'</a>).</div>
<div class="old-help-para">		cino=		    cino=p0		cino=p2s<pre>func(a, b)              func(a, b)          func(a, b)
    int a;              int a;                          int a;
    char b;              char b;                          char b;</pre></div>
<div class="old-help-para">							<a name="cino-t"></a><code class="help-tag-right">cino-t</code>
	tN    Indent a function return type declaration N characters from the
	      margin.  (default <a href="options.html#'shiftwidth'">'shiftwidth'</a>).</div>
<div class="old-help-para">		cino=		    cino=t0		cino=t7<pre>    int              int                         int
func()              func()                  func()</pre></div>
<div class="old-help-para">							<a name="cino-i"></a><code class="help-tag-right">cino-i</code>
	iN    Indent C++ base class declarations and constructor
	      initializations, if they start in a new line (otherwise they
	      are aligned at the right side of the ':').
	      (default <a href="options.html#'shiftwidth'">'shiftwidth'</a>).</div>
<div class="old-help-para">		cino=			  cino=i0<pre>class MyClass :            class MyClass :
    public BaseClass      public BaseClass
{}                            {}
MyClass::MyClass() :            MyClass::MyClass() :
    BaseClass(3)            BaseClass(3)
{}                            {}</pre></div>
<div class="old-help-para">							<a name="cino-%2B"></a><code class="help-tag-right">cino-+</code>
	+N    Indent a continuation line (a line that spills onto the next)
              inside a function N additional characters.  (default
              <a href="options.html#'shiftwidth'">'shiftwidth'</a>).
              Outside of a function, when the previous line ended in a
              backslash, the 2 * N is used.</div>
<div class="old-help-para">		cino=			  cino=+10<pre>a = b + 9 *                    a = b + 9 *
    c;                              c;</pre></div>
<div class="old-help-para">							<a name="cino-c"></a><code class="help-tag-right">cino-c</code>
	cN    Indent comment lines after the comment opener, when there is no
	      other text with which to align, N characters from the comment
	      opener.  (default 3).  See also <a href="change.html#format-comments">format-comments</a>.</div>
<div class="old-help-para">		cino=			  cino=c5<pre>/*                            /*
   text.                         text.
 */                             */</pre></div>
<div class="old-help-para">							<a name="cino-C"></a><code class="help-tag-right">cino-C</code>
	CN    When N is non-zero, indent comment lines by the amount specified
	      with the c flag above even if there is other text behind the
	      comment opener.  (default 0).</div>
<div class="old-help-para">		cino=c0			  cino=c0,C1<pre>/********                    /********
  text.                    text.
********/                    ********/</pre></div>
<div class="old-help-para">	      (Example uses ":set comments&amp; comments-=s1:/* comments^=s0:/*")</div>
<div class="old-help-para">							<a name="cino-%2F"></a><code class="help-tag-right">cino-/</code>
	/N    Indent comment lines N characters extra.  (default 0).
		cino=			  cino=/4<pre>a = b;                    a = b;
/* comment */                        /* comment */
c = d;                    c = d;</pre></div>
<div class="old-help-para">							<a name="cino-("></a><code class="help-tag-right">cino-(</code>
	(N    When in unclosed parentheses, indent N characters from the line
	      with the unclosed parenthesis.  Add a <a href="options.html#'shiftwidth'">'shiftwidth'</a> for every
	      extra unclosed parentheses.  When N is 0 or the unclosed
	      parenthesis is the first non-white character in its line, line
	      up with the next non-white character after the unclosed
	      parenthesis.  (default <a href="options.html#'shiftwidth'">'shiftwidth'</a> * 2).</div>
<div class="old-help-para">		cino=			  cino=(0<pre>if (c1 &amp;&amp; (c2 ||            if (c1 &amp;&amp; (c2 ||
            c3))                       c3))
    foo;                        foo;
if (c1 &amp;&amp;                    if (c1 &amp;&amp;
        (c2 || c3))                (c2 || c3))
   {                               {</pre></div>
<div class="old-help-para">							<a name="cino-u"></a><code class="help-tag-right">cino-u</code>
	uN    Same as (N, but for one nesting level deeper.
	      (default <a href="options.html#'shiftwidth'">'shiftwidth'</a>).</div>
<div class="old-help-para">		cino=			  cino=u2<pre>if (c123456789            if (c123456789
        &amp;&amp; (c22345                    &amp;&amp; (c22345
            || c3))                      || c3))</pre></div>
<div class="old-help-para">							<a name="cino-U"></a><code class="help-tag-right">cino-U</code>
	UN    When N is non-zero, do not ignore the indenting specified by
	      ( or u in case that the unclosed parenthesis is the first
	      non-white character in its line.  (default 0).</div>
<div class="old-help-para">		cino= or cino=(s	  cino=(s,U1<pre>c = c1 &amp;&amp;                    c = c1 &amp;&amp;
    (                                (
     c2 ||                            c2 ||
     c3                            c3
    ) &amp;&amp; c4;                        ) &amp;&amp; c4;</pre></div>
<div class="old-help-para">							<a name="cino-w"></a><code class="help-tag-right">cino-w</code>
	wN    When in unclosed parentheses and N is non-zero and either
	      using "(0" or "u0", respectively, or using "U0" and the unclosed
	      parenthesis is the first non-white character in its line, line
	      up with the character immediately after the unclosed parenthesis
	      rather than the first non-white character.  (default 0).</div>
<div class="old-help-para">		cino=(0			  cino=(0,w1<pre>if (   c1                    if (   c1
       &amp;&amp; (   c2                &amp;&amp; (   c2
              || c3))                    || c3))
    foo;                        foo;</pre></div>
<div class="old-help-para">							<a name="cino-W"></a><code class="help-tag-right">cino-W</code>
	WN    When in unclosed parentheses and N is non-zero and either
	      using "(0" or "u0", respectively and the unclosed parenthesis is
	      the last non-white character in its line and it is not the
	      closing parenthesis, indent the following line N characters
	      relative to the outer context (i.e. start of the line or the
	      next unclosed parenthesis).  (default: 0).</div>
<div class="old-help-para">		cino=(0			   cino=(0,W4<pre>a_long_line(                    a_long_line(
            argument,                argument,
            argument);        argument);
a_short_line(argument,    a_short_line(argument,
             argument);                 argument);</pre></div>
<div class="old-help-para">							<a name="cino-k"></a><code class="help-tag-right">cino-k</code>
	kN    When in unclosed parentheses which follow "if", "for" or
	      "while" and N is non-zero, overrides the behaviour defined by
	      "(N": causes the indent to be N characters relative to the outer
	      context (i.e. the line where "if", "for" or "while" is).  Has
	      no effect on deeper levels of nesting.  Affects flags like "wN"
	      only for the "if", "for" and "while" conditions.  If 0, defaults
	      to behaviour defined by the "(N" flag.  (default: 0).</div>
<div class="old-help-para">		cino=(0			   cino=(0,ks<pre>if (condition1            if (condition1
    &amp;&amp; condition2)                    &amp;&amp; condition2)
    action();                        action();
function(argument1            function(argument1
         &amp;&amp; argument2);             &amp;&amp; argument2);</pre></div>
<div class="old-help-para">							<a name="cino-m"></a><code class="help-tag-right">cino-m</code>
	mN    When N is non-zero, line up a line starting with a closing
	      parenthesis with the first character of the line with the
	      matching opening parenthesis.  (default 0).</div>
<div class="old-help-para">		cino=(s			  cino=(s,m1<pre>c = c1 &amp;&amp; (                    c = c1 &amp;&amp; (
    c2 ||                        c2 ||
    c3                        c3
    ) &amp;&amp; c4;                    ) &amp;&amp; c4;
if (                            if (
    c1 &amp;&amp; c2                        c1 &amp;&amp; c2
   )                            )
    foo;                        foo;</pre></div>
<div class="old-help-para">							<a name="cino-M"></a><code class="help-tag-right">cino-M</code>
	MN    When N is non-zero, line up a line starting with a closing
	      parenthesis with the first character of the previous line.
	      (default 0).</div>
<div class="old-help-para">		cino=			  cino=M1<pre>if (cond1 &amp;&amp;                    if (cond1 &amp;&amp;
       cond2                           cond2
   )                                   )</pre></div>
<div class="old-help-para">				<a name="java-cinoptions"></a><code class="help-tag-right">java-cinoptions</code> <a name="java-indenting"></a><code class="help-tag">java-indenting</code> <a name="cino-j"></a><code class="help-tag">cino-j</code>
	jN    Indent Java anonymous classes correctly.  Also works well for
	      Javascript.  The value 'N' is currently unused but must be
	      non-zero (e.g. 'j1').  'j1' will indent for example the
	      following code snippet correctly:<pre>object.add(new ChangeListener() {
    public void stateChanged(ChangeEvent e) {
        do_something();
    }
});</pre></div>
<div class="old-help-para">			<a name="javascript-cinoptions"></a><code class="help-tag-right">javascript-cinoptions</code> <a name="javascript-indenting"></a><code class="help-tag">javascript-indenting</code> <a name="cino-J"></a><code class="help-tag">cino-J</code>
	JN    Indent JavaScript object declarations correctly by not confusing
	      them with labels.  The value 'N' is currently unused but must be
	      non-zero (e.g. 'J1').  If you enable this you probably also want
	      to set <a href="indent.html#cino-j">cino-j</a>.<pre>var bar = {
    foo: {
        that: this,
        some: ok,
    },
    "bar":{
        a : 2,
        b: "123abc",
        x: 4,
        "y": 5
    }
}</pre></div>
<div class="old-help-para">								<a name="cino-)"></a><code class="help-tag-right">cino-)</code>
	)N    Vim searches for unclosed parentheses at most N lines away.
	      This limits the time needed to search for parentheses.  (default
	      20 lines).</div>
<div class="old-help-para">								<a name="cino-star"></a><code class="help-tag-right">cino-star</code>
N    Vim searches for unclosed comments at most N lines away.  This
	      limits the time needed to search for the start of a comment.
	      If your /*/ comments stop indenting after N lines this is the
	      value you will want to change.
	      (default 70 lines).</div>
<div class="old-help-para">								<a name="cino-%23"></a><code class="help-tag-right">cino-#</code>
	#N    When N is non-zero recognize shell/Perl comments starting with
	      '#', do not recognize preprocessor lines; allow right-shifting
	      lines that start with "#".
	      When N is zero (default): don't recognize '#' comments, do
	      recognize preprocessor lines; right-shifting lines that start
	      with "#" does not work.</div>
<div class="old-help-para">								<a name="cino-P"></a><code class="help-tag-right">cino-P</code>
	PN    When N is non-zero recognize C pragmas, and indent them like any
	      other code; does not concern other preprocessor directives.
	      When N is zero (default): don't recognize C pragmas, treating
	      them like every other preprocessor directive.</div>
<div class="old-help-para">The defaults, spelled out in full, are:
	cinoptions=&gt;s,e0,n0,f0,{0,}0,^0,L-1,:s,=s,l0,b0,gs,hs,N0,E0,ps,ts,is,+s,
			c3,C0,/0,(2s,us,U0,w0,W0,k0,m0,j0,J0,)20,*70,#0,P0</div>
<div class="old-help-para">Vim puts a line in column 1 if:
<div class="help-li" style=""> It starts with '#' (preprocessor directives), if <a href="options.html#'cinkeys'">'cinkeys'</a> contains '#0'.
</div><div class="help-li" style=""> It starts with a label (a keyword followed by ':', other than "case" and
  "default") and <a href="options.html#'cinoptions'">'cinoptions'</a> does not contain an 'L' entry with a positive
  value.
</div><div class="help-li" style=""> Any combination of indentations causes the line to have less than 0
  indentation.
</div></div>
<div class="old-help-para"><h2 class="help-heading">2. Indenting by expression<span class="help-heading-tags">				<a name="indent-expression"></a><span class="help-tag">indent-expression</span></span></h2></div>
<div class="old-help-para">The basics for using flexible indenting are explained in section <a href="usr_30.html#30.3">30.3</a> of the
user manual.</div>
<div class="old-help-para">If you want to write your own indent file, it must set the <a href="options.html#'indentexpr'">'indentexpr'</a>
option.  Setting the <a href="options.html#'indentkeys'">'indentkeys'</a> option is often useful.
See the $VIMRUNTIME/indent/README.txt file for hints.
See the $VIMRUNTIME/indent directory for examples.</div>
<div class="old-help-para"><div class="help-column_heading">REMARKS ABOUT SPECIFIC INDENT FILES</div></div>
<div class="old-help-para"><h3 class="help-heading">CLOJURE<span class="help-heading-tags">					<a name="ft-clojure-indent"></a><span class="help-tag">ft-clojure-indent</span> <a name="clojure-indent"></a><span class="help-tag">clojure-indent</span></span></h3></div>
<div class="old-help-para">Clojure indentation differs somewhat from traditional Lisps, due in part to
the use of square and curly brackets, and otherwise by community convention.
These conventions are not universally followed, so the Clojure indent script
offers a few configuration options.</div>
<div class="old-help-para">							<a name="g%3Aclojure_maxlines"></a><code class="help-tag-right">g:clojure_maxlines</code></div>
<div class="old-help-para">Sets maximum scan distance of <code>searchpairpos()</code>.  Larger values trade
performance for correctness when dealing with very long forms.  A value of
0 will scan without limits.  The default is 300.</div>
<div class="old-help-para">						<a name="g%3Aclojure_fuzzy_indent"></a><code class="help-tag-right">g:clojure_fuzzy_indent</code>
					<a name="g%3Aclojure_fuzzy_indent_patterns"></a><code class="help-tag-right">g:clojure_fuzzy_indent_patterns</code>
					<a name="g%3Aclojure_fuzzy_indent_blacklist"></a><code class="help-tag-right">g:clojure_fuzzy_indent_blacklist</code></div>
<div class="old-help-para">The <a href="options.html#'lispwords'">'lispwords'</a> option is a list of comma-separated words that mark special
forms whose subforms should be indented with two spaces.</div>
<div class="old-help-para">For example:
<pre>(defn bad []
      "Incorrect indentation")

(defn good []
  "Correct indentation")</pre></div>
<div class="old-help-para">If you would like to specify <a href="options.html#'lispwords'">'lispwords'</a> with a <a href="pattern.html#pattern">pattern</a> instead, you can use
the fuzzy indent feature:
<pre>" Default
let g:clojure_fuzzy_indent = 1
let g:clojure_fuzzy_indent_patterns = ['^with', '^def', '^let']
let g:clojure_fuzzy_indent_blacklist =
        \ ['-fn$', '\v^with-%(meta|out-str|loading-context)$']</pre></div>
<div class="old-help-para"><a href="indent.html#g%3Aclojure_fuzzy_indent_patterns">g:clojure_fuzzy_indent_patterns</a> and <a href="indent.html#g%3Aclojure_fuzzy_indent_blacklist">g:clojure_fuzzy_indent_blacklist</a> are
lists of patterns that will be matched against the unqualified symbol at the
head of a list.  This means that a pattern like <code>"^foo"</code> will match all these
candidates: <code>foobar</code>, <code>my.ns/foobar</code>, and <code>#'foobar</code>.</div>
<div class="old-help-para">Each candidate word is tested for special treatment in this order:</div>
<div class="old-help-para">	1. Return true if word is literally in <a href="options.html#'lispwords'">'lispwords'</a>
	2. Return false if word matches a pattern in
	   <a href="indent.html#g%3Aclojure_fuzzy_indent_blacklist">g:clojure_fuzzy_indent_blacklist</a>
	3. Return true if word matches a pattern in
	   <a href="indent.html#g%3Aclojure_fuzzy_indent_patterns">g:clojure_fuzzy_indent_patterns</a>
	4. Return false and indent normally otherwise</div>
<div class="old-help-para">					<a name="g%3Aclojure_special_indent_words"></a><code class="help-tag-right">g:clojure_special_indent_words</code></div>
<div class="old-help-para">Some forms in Clojure are indented such that every subform is indented by only
two spaces, regardless of <a href="options.html#'lispwords'">'lispwords'</a>.  If you have a custom construct that
should be indented in this idiosyncratic fashion, you can add your symbols to
the default list below.
<pre>" Default
let g:clojure_special_indent_words =
   \ 'deftype,defrecord,reify,proxy,extend-type,extend-protocol,letfn'</pre></div>
<div class="old-help-para">					<a name="g%3Aclojure_align_multiline_strings"></a><code class="help-tag-right">g:clojure_align_multiline_strings</code></div>
<div class="old-help-para">Align subsequent lines in multi-line strings to the column after the opening
quote, instead of the same column.</div>
<div class="old-help-para">For example:
<pre>(def default
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.")

(def aligned
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
   enim ad minim veniam, quis nostrud exercitation ullamco laboris
   nisi ut aliquip ex ea commodo consequat.")</pre></div>
<div class="old-help-para">						<a name="g%3Aclojure_align_subforms"></a><code class="help-tag-right">g:clojure_align_subforms</code></div>
<div class="old-help-para">By default, parenthesized compound forms that look like function calls and
whose head subform is on its own line have subsequent subforms indented by
two spaces relative to the opening paren:
<pre>(foo
  bar
  baz)</pre></div>
<div class="old-help-para">Setting this option to <code>1</code> changes this behaviour so that all subforms are
aligned to the same column, emulating the default behaviour of
clojure-mode.el:
<pre>(foo
 bar
 baz)</pre></div>
<div class="old-help-para"><h3 class="help-heading">FORTRAN<span class="help-heading-tags">							<a name="ft-fortran-indent"></a><span class="help-tag">ft-fortran-indent</span></span></h3></div>
<div class="old-help-para">Block if, select case, where, and forall constructs are indented.  So are
type, interface, associate, block, and enum constructs.  The indenting of
subroutines, functions, modules, and program blocks is optional.  Comments,
labelled statements and continuation lines are indented if the Fortran is in
free source form, whereas they are not indented if the Fortran is in fixed
source form because of the left margin requirements.  Hence manual indent
corrections will be necessary for labelled statements and continuation lines
when fixed source form is being used.  For further discussion of the method
used for the detection of source format see <a href="syntax.html#ft-fortran-syntax">ft-fortran-syntax</a>.</div>
<div class="old-help-para"><div class="help-column_heading">Do loops</div>All do loops are left unindented by default.  Do loops can be unstructured in
Fortran with (possibly multiple) loops ending on a labelled executable
statement of almost arbitrary type.  Correct indentation requires
compiler-quality parsing.  Old code with do loops ending on labelled statements
of arbitrary type can be indented with elaborate programs such as Tidy
(<a href="https://www.unb.ca/chem/ajit/f_tidy.htm">https://www.unb.ca/chem/ajit/f_tidy.htm</a>).  Structured do/continue loops are
also left unindented because continue statements are also used for purposes
other than ending a do loop.  Programs such as Tidy can convert structured
do/continue loops to the do/enddo form.  Do loops of the do/enddo variety can
be indented.  If you use only structured loops of the do/enddo form, you should
declare this by setting the fortran_do_enddo variable in your vimrc as
follows<pre>let fortran_do_enddo=1</pre>
in which case do loops will be indented.  If all your loops are of do/enddo
type only in, say, .f90 files, then you should set a buffer flag with an
autocommand such as<pre>au! BufRead,BufNewFile *.f90 let b:fortran_do_enddo=1</pre>
to get do loops indented in .f90 files and left alone in Fortran files with
other extensions such as .for.</div>
<div class="old-help-para"><div class="help-column_heading">Program units</div>The indenting of program units (subroutines, functions, modules, and program
blocks) is enabled by default but can be suppressed if a lighter, screen-width
preserving indent style is desired.  To suppress the indenting of program
units for all fortran files set the global fortran_indent_less variable in
your vimrc as follows<pre>let fortran_indent_less=1</pre>
A finer level of suppression can be achieved by setting the corresponding
buffer-local variable as follows<pre>let b:fortran_indent_less=1</pre>
<h3 class="help-heading">HTML<span class="help-heading-tags">				<a name="ft-html-indent"></a><span class="help-tag">ft-html-indent</span> <a name="html-indent"></a><span class="help-tag">html-indent</span> <a name="html-indenting"></a><span class="help-tag">html-indenting</span></span></h3></div>
<div class="old-help-para">This is about variables you can set in your vimrc to customize HTML indenting.</div>
<div class="old-help-para">You can set the indent for the first line after <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code>
"blocktags" (default "zero"):<pre>:let g:html_indent_script1 = "inc"
:let g:html_indent_style1 = "inc"</pre></div>
<div class="old-help-para"><div class="help-column_heading">      VALUE	MEANING</div>      "zero"	zero indent
      "auto"	auto indent (same indent as the blocktag)
      "inc"	auto indent + one indent step</div>
<div class="old-help-para">You can set the indent for attributes after an open &lt;tag line:<pre>:let g:html_indent_attribute = 1</pre></div>
<div class="old-help-para"><div class="help-column_heading">      VALUE	MEANING</div>      1		auto indent, one indent step more than &lt;tag
      2		auto indent, two indent steps (default)
      &gt; 2	auto indent, more indent steps</div>
<div class="old-help-para">Many tags increase the indent for what follows per default (see "Add Indent
Tags" in the script).  You can add further tags with:<pre>:let g:html_indent_inctags = "html,body,head,tbody"</pre>
You can also remove such tags with:<pre>:let g:html_indent_autotags = "th,td,tr,tfoot,thead"</pre>
Default value is empty for both variables.  Note: the initial "inctags" are
only defined once per Vim session.</div>
<div class="old-help-para">User variables are only read when the script is sourced.  To enable your
changes during a session, without reloading the HTML file, you can manually
do:<pre>:call HtmlIndent_CheckUserSettings()</pre>
Detail:
  Calculation of indent inside "blocktags" with "alien" content:
<div class="help-column_heading">      BLOCKTAG   INDENT EXPR	    WHEN APPLICABLE</div>      <code>&lt;script&gt;</code> : <code>{customizable}</code>	    if first line of block
	       : cindent(v:lnum)    if attributes empty or contain "java"
	       : -1		    else (vbscript, tcl, ...)
      <code>&lt;style&gt;</code>  : <code>{customizable}</code>	    if first line of block
	       : GetCSSIndent()	    else
      &lt;!-- --&gt; : -1</div>
<div class="old-help-para"><h3 class="help-heading">MATLAB<span class="help-heading-tags">			<a name="ft-matlab-indent"></a><span class="help-tag">ft-matlab-indent</span> <a name="matlab-indent"></a><span class="help-tag">matlab-indent</span> <a name="matlab-indenting"></a><span class="help-tag">matlab-indenting</span></span></h3></div>
<div class="old-help-para">The setting Function indenting format in MATLAB Editor/Debugger Language
Preferences corresponds to:<pre>:let g:MATLAB_function_indent = {0, 1 or 2 (default)}</pre>
Where 0 is for Classic, 1 for Indent nested functions and 2 for Indent all
functions.</div>
<div class="old-help-para"><h3 class="help-heading">PHP<span class="help-heading-tags">				<a name="ft-php-indent"></a><span class="help-tag">ft-php-indent</span> <a name="php-indent"></a><span class="help-tag">php-indent</span> <a name="php-indenting"></a><span class="help-tag">php-indenting</span></span></h3></div>
<div class="old-help-para">NOTE:	PHP files will be indented correctly only if PHP <a href="syntax.html#syntax">syntax</a> is active.</div>
<div class="old-help-para">If you are editing a file in Unix <a href="options.html#'fileformat'">'fileformat'</a> and '\r' characters are present
before new lines, indentation won't proceed correctly ; you have to remove
those useless characters first with a command like:<pre>:%s /\r$//g</pre>
Or, you can simply <a href="eval.html#%3Alet">:let</a> the variable PHP_removeCRwhenUnix to 1 and the
script will silently remove them when Vim loads a PHP file (at each <a href="autocmd.html#BufRead">BufRead</a>).</div>
<div class="old-help-para"><div class="help-column_heading">OPTIONS:</div></div>
<div class="old-help-para">PHP indenting can be altered in several ways by modifying the values of some
global variables:</div>
<div class="old-help-para">					<a name="php-comment"></a><code class="help-tag-right">php-comment</code> <a name="PHP_autoformatcomment"></a><code class="help-tag">PHP_autoformatcomment</code>
To not enable auto-formatting of comments by default (if you want to use your
own <a href="options.html#'formatoptions'">'formatoptions'</a>):<pre>:let g:PHP_autoformatcomment = 0</pre>
Else, 't' will be removed from the <a href="options.html#'formatoptions'">'formatoptions'</a> string and "qrowcb" will be
added, see <a href="change.html#fo-table">fo-table</a> for more information.
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+indent.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/indent.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0AElse%2C%20't'%20will%20be%20removed%20from%20the%20'formatoptions'%20string%20and%20%22qrowcb%22%20will%20be%0Aadded%2C%20see%20%7Cfo-table%7C%20for%20more%20information.%0A-------------%0A%0A%09%09%09%09%09%09%09%2APHP_outdentSLComments%2A%0ATo%20add%20extra%20indentation%20to%20single-line%20comments%3A%20%3E%0A%20%20%20%20%3Alet%20g%3APHP_outdentSLComments%20%3D%20N%0D%60%60%60">-------------</a></div>
<div class="old-help-para">							<a name="PHP_outdentSLComments"></a><code class="help-tag-right">PHP_outdentSLComments</code>
To add extra indentation to single-line comments:<pre>:let g:PHP_outdentSLComments = N</pre>
With N being the number of <a href="options.html#'shiftwidth'">'shiftwidth'</a> to add.</div>
<div class="old-help-para">Only single-line comments will be affected such as:<pre># Comment
// Comment
/* Comment */</pre>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+indent.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/indent.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%20%23%20Comment%0A%20%20%20%20%2F%2F%20Comment%0A%20%20%20%20%2F%2A%20Comment%20%2A%2F%0A-------------%0A%0A%09%09%09%09%09%09%09%2APHP_default_indenting%2A%0ATo%20add%20extra%20indentation%20to%20every%20PHP%20lines%20with%20N%20being%20the%20number%20of%0A'shiftwidth'%20to%20add%3A%20%3E%0D%60%60%60">-------------</a></div>
<div class="old-help-para">							<a name="PHP_default_indenting"></a><code class="help-tag-right">PHP_default_indenting</code>
To add extra indentation to every PHP lines with N being the number of
<a href="options.html#'shiftwidth'">'shiftwidth'</a> to add:<pre>:let g:PHP_default_indenting = N</pre>
For example, with N = 1, this will give:
<pre>&lt;?php
    if (!isset($History_lst_sel))
        if (!isset($History_lst_sel))
            if (!isset($History_lst_sel)) {
                $History_lst_sel=0;
            } else
                $foo="bar";

    $command_hist = TRUE;
?&gt;</pre>
(Notice the extra indentation between the PHP container markers and the code)
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+indent.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/indent.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%24command_hist%20%3D%20TRUE%3B%0A%20%20%20%20%3F%3E%0A(Notice%20the%20extra%20indentation%20between%20the%20PHP%20container%20markers%20and%20the%20code)%0A-------------%0A%0A%09%09%09%09%09%09%09%2APHP_outdentphpescape%2A%0ATo%20indent%20PHP%20escape%20tags%20as%20the%20surrounding%20non-PHP%20code%20(only%20affects%20the%0APHP%20escape%20tags)%3A%20%3E%0D%60%60%60">-------------</a></div>
<div class="old-help-para">							<a name="PHP_outdentphpescape"></a><code class="help-tag-right">PHP_outdentphpescape</code>
To indent PHP escape tags as the surrounding non-PHP code (only affects the
PHP escape tags):<pre>:let g:PHP_outdentphpescape = 0</pre>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+indent.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/indent.html%0D%0DContext%3A%0D%0D%60%60%60%0DTo%20indent%20PHP%20escape%20tags%20as%20the%20surrounding%20non-PHP%20code%20(only%20affects%20the%0APHP%20escape%20tags)%3A%20%3E%0A%20%20%20%20%3Alet%20g%3APHP_outdentphpescape%20%3D%200%0A-------------%0A%0A%09%09%09%09%09%09%09%2APHP_removeCRwhenUnix%2A%0ATo%20automatically%20remove%20'%5Cr'%20characters%20when%20the%20'fileformat'%20is%20set%20to%20Unix%3A%20%3E%0A%20%20%20%20%3Alet%20g%3APHP_removeCRwhenUnix%20%3D%201%0D%60%60%60">-------------</a></div>
<div class="old-help-para">							<a name="PHP_removeCRwhenUnix"></a><code class="help-tag-right">PHP_removeCRwhenUnix</code>
To automatically remove '\r' characters when the <a href="options.html#'fileformat'">'fileformat'</a> is set to Unix:<pre>:let g:PHP_removeCRwhenUnix = 1</pre>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+indent.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/indent.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%09%09%09%09%09%2APHP_removeCRwhenUnix%2A%0ATo%20automatically%20remove%20'%5Cr'%20characters%20when%20the%20'fileformat'%20is%20set%20to%20Unix%3A%20%3E%0A%20%20%20%20%3Alet%20g%3APHP_removeCRwhenUnix%20%3D%201%0A-------------%0A%0A%09%09%09%09%09%09%09%2APHP_BracesAtCodeLevel%2A%0ATo%20indent%20braces%20at%20the%20same%20level%20than%20the%20code%20they%20contain%3A%20%3E%0A%20%20%20%20%3Alet%20g%3APHP_BracesAtCodeLevel%20%3D%201%0D%60%60%60">-------------</a></div>
<div class="old-help-para">							<a name="PHP_BracesAtCodeLevel"></a><code class="help-tag-right">PHP_BracesAtCodeLevel</code>
To indent braces at the same level than the code they contain:<pre>:let g:PHP_BracesAtCodeLevel = 1</pre>
This will give the following result:<pre>if ($foo)
    {
    foo();
    }</pre>
Instead of:<pre>if ($foo)
{
    foo();
}</pre>
NOTE:	Indenting will be a bit slower if this option is used because some
	optimizations won't be available.
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+indent.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/indent.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0ANOTE%3A%09Indenting%20will%20be%20a%20bit%20slower%20if%20this%20option%20is%20used%20because%20some%0A%09optimizations%20won't%20be%20available.%0A-------------%0A%0A%09%09%09%09%09%2APHP_vintage_case_default_indent%2A%0ATo%20indent%20'case%3A'%20and%20'default%3A'%20statements%20in%20switch()%20blocks%3A%20%3E%0A%20%20%20%20%3Alet%20g%3APHP_vintage_case_default_indent%20%3D%201%0D%60%60%60">-------------</a></div>
<div class="old-help-para">					<a name="PHP_vintage_case_default_indent"></a><code class="help-tag-right">PHP_vintage_case_default_indent</code>
To indent 'case:' and 'default:' statements in switch() blocks:<pre>:let g:PHP_vintage_case_default_indent = 1</pre>
In PHP braces are not required inside 'case/default' blocks therefore 'case:'
and 'default:' are indented at the same level than the 'switch()' to avoid
meaningless indentation. You can use the above option to return to the
traditional way.
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+indent.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/indent.html%0D%0DContext%3A%0D%0D%60%60%60%0Dand%20'default%3A'%20are%20indented%20at%20the%20same%20level%20than%20the%20'switch()'%20to%20avoid%0Ameaningless%20indentation.%20You%20can%20use%20the%20above%20option%20to%20return%20to%20the%0Atraditional%20way.%0A-------------%0A%0A%09%09%09%09%09%09%09%2APHP_noArrowMatching%2A%0ABy%20default%20the%20indent%20script%20will%20indent%20multi-line%20chained%20calls%20by%20matching%0Athe%20position%20of%20the%20'-%3E'%3A%20%3E%0D%60%60%60">-------------</a></div>
<div class="old-help-para">							<a name="PHP_noArrowMatching"></a><code class="help-tag-right">PHP_noArrowMatching</code>
By default the indent script will indent multi-line chained calls by matching
the position of the '-&gt;':<pre>$user_name_very_long-&gt;name()
                    -&gt;age()
                    -&gt;info();</pre>
You can revert to the classic way of indenting by setting this option to 1:<pre>:let g:PHP_noArrowMatching = 1</pre>
You will obtain the following result:<pre>$user_name_very_long-&gt;name()
    -&gt;age()
    -&gt;info();</pre>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+indent.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/indent.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%20%20%20%20%20-%3Eage()%0A%20%20%20%20%20%20%20%20-%3Einfo()%3B%0A%0A-------------%0A%0A%09%09%09%09%09%2APHP_IndentFunctionCallParameters%2A%0AExtra%20indentation%20levels%20to%20add%20to%20parameters%20in%20multi-line%20function%20calls.%20%3E%0A%20%20%20%20let%20g%3APHP_IndentFunctionCallParameters%20%3D%201%0D%60%60%60">-------------</a></div>
<div class="old-help-para">					<a name="PHP_IndentFunctionCallParameters"></a><code class="help-tag-right">PHP_IndentFunctionCallParameters</code>
Extra indentation levels to add to parameters in multi-line function calls.<pre>let g:PHP_IndentFunctionCallParameters = 1</pre>
Function call arguments will indent 1 extra level. For two-space indentation:<pre>function call_the_thing(
  $with_this,
  $and_that
) {
  $this-&gt;do_the_thing(
      $with_this,
      $and_that
  );
}</pre>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+indent.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/indent.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%0A%0A-------------%0A%0A%09%09%09%09%2APHP_IndentFunctionDeclarationParameters%2A%0AExtra%20indentation%20levels%20to%20add%20to%20arguments%20in%20multi-line%20function%0Adefinitions.%20%3E%0D%60%60%60">-------------</a></div>
<div class="old-help-para">				<a name="PHP_IndentFunctionDeclarationParameters"></a><code class="help-tag-right">PHP_IndentFunctionDeclarationParameters</code>
Extra indentation levels to add to arguments in multi-line function
definitions.<pre>let g:PHP_IndentFunctionDeclarationParameters = 1</pre>
Function arguments in declarations will indent 1 extra level. For two-space
indentation:<pre>function call_the_thing(
    $with_this,
    $and_that
) {
  $this-&gt;do_the_thing(
    $with_this,
    $and_that
  );
}</pre>
<h3 class="help-heading">PYTHON<span class="help-heading-tags">							<a name="ft-python-indent"></a><span class="help-tag">ft-python-indent</span></span></h3></div>
<div class="old-help-para">The amount of indent can be set with the <code>g:python_indent</code> <a href="eval.html#Dictionary">Dictionary</a>, which
needs to be created before adding the items:<pre>let g:python_indent = {}</pre>
The examples given are the defaults.  Note that the dictionary values are set
to an expression, so that you can change the value of <a href="options.html#'shiftwidth'">'shiftwidth'</a> later
without having to update these values.</div>
<div class="old-help-para">Indent after an open paren:<pre>let g:python_indent.open_paren = 'shiftwidth() * 2'</pre>
Indent after a nested paren:<pre>let g:python_indent.nested_paren = 'shiftwidth()'</pre>
Indent for a continuation line:<pre>let g:python_indent.continue = 'shiftwidth() * 2'</pre>
By default, the closing paren on a multiline construct lines up under the first
non-whitespace character of the previous line.
If you prefer that it's lined up under the first character of the line that
starts the multiline construct, reset this key:<pre>let g:python_indent.closed_paren_align_last_line = v:false</pre>
The method uses <a href="builtin.html#searchpair()">searchpair()</a> to look back for unclosed parentheses.  This
can sometimes be slow, thus it timeouts after 150 msec.  If you notice the
indenting isn't correct, you can set a larger timeout in msec:<pre>let g:python_indent.searchpair_timeout = 500</pre>
If looking back for unclosed parenthesis is still too slow, especially during
a copy-paste operation, or if you don't need indenting inside multi-line
parentheses, you can completely disable this feature:<pre>let g:python_indent.disable_parentheses_indenting = 1</pre>
For backward compatibility, these variables are also supported:<pre>g:pyindent_open_paren
g:pyindent_nested_paren
g:pyindent_continue
g:pyindent_searchpair_timeout
g:pyindent_disable_parentheses_indenting</pre>
R								<a name="ft-r-indent"></a><code class="help-tag-right">ft-r-indent</code></div>
<div class="old-help-para">Function arguments are aligned if they span for multiple lines. If you prefer
do not have the arguments of functions aligned, put in your <a href="starting.html#vimrc">vimrc</a>:
<pre>let r_indent_align_args = 0</pre></div>
<div class="old-help-para">All lines beginning with a comment character, #, get the same indentation
level of the normal R code. Users of Emacs/ESS may be used to have lines
beginning with a single # indented in the 40th column, ## indented as R code,
and ### not indented. If you prefer that lines beginning with comment
characters are aligned as they are by Emacs/ESS, put in your <a href="starting.html#vimrc">vimrc</a>:
<pre>let r_indent_ess_comments = 1</pre></div>
<div class="old-help-para">If you prefer that lines beginning with a single # are aligned at a column
different from the 40th one, you should set a new value to the variable
r_indent_comment_column, as in the example below:
<pre>let r_indent_comment_column = 30</pre></div>
<div class="old-help-para">Any code after a line that ends with "&lt;-" is indented. Emacs/ESS does not
indent the code if it is a top level function. If you prefer that the
Vim-R-plugin behaves like Emacs/ESS in this regard, put in your <a href="starting.html#vimrc">vimrc</a>:
<pre>let r_indent_ess_compatible = 1</pre></div>
<div class="old-help-para">Below is an example of indentation with and without this option enabled:
<pre>### r_indent_ess_compatible = 1           ### r_indent_ess_compatible = 0
foo &lt;-                                    foo &lt;-
    function(x)                               function(x)
{                                             {
    paste(x)                                      paste(x)
}                                             }</pre></div>
<div class="old-help-para">The code will be indented after lines that match the pattern
<code>'\(&amp;\||\|+\|-\|\*\|/\|=\|\~\|%\|-&gt;\)\s*$'</code>. If you want indentation after
lines that match a different pattern, you should set the appropriate value of
<code>r_indent_op_pattern</code> in your <a href="starting.html#vimrc">vimrc</a>.</div>
<div class="old-help-para"><h3 class="help-heading">SHELL<span class="help-heading-tags">							<a name="ft-sh-indent"></a><span class="help-tag">ft-sh-indent</span></span></h3></div>
<div class="old-help-para">The amount of indent applied under various circumstances in a shell file can
be configured by setting the following keys in the <a href="eval.html#Dictionary">Dictionary</a>
b:sh_indent_defaults to a specific amount or to a <a href="eval.html#Funcref">Funcref</a> that references a
function that will return the amount desired:</div>
<div class="old-help-para">b:sh_indent_options['default']	Default amount of indent.</div>
<div class="old-help-para">b:sh_indent_options['continuation-line']
				Amount of indent to add to a continued line.</div>
<div class="old-help-para">b:sh_indent_options['case-labels']
				Amount of indent to add for case labels.
				(not actually implemented)</div>
<div class="old-help-para">b:sh_indent_options['case-statements']
				Amount of indent to add for case statements.</div>
<div class="old-help-para">b:sh_indent_options['case-breaks']
				Amount of indent to add (or more likely
				remove) for case breaks.</div>
<div class="old-help-para"><h3 class="help-heading">VERILOG<span class="help-heading-tags">							<a name="ft-verilog-indent"></a><span class="help-tag">ft-verilog-indent</span></span></h3></div>
<div class="old-help-para">General block statements such as if, for, case, always, initial, function,
specify and begin, etc., are indented.  The module block statements (first
level blocks) are not indented by default.  you can turn on the indent with
setting a variable in the vimrc as follows:<pre>let b:verilog_indent_modules = 1</pre>
then the module blocks will be indented.  To stop this, remove the variable:<pre>:unlet b:verilog_indent_modules</pre>
To set the variable only for Verilog file.  The following statements can be
used:<pre>au BufReadPost * if exists("b:current_syntax")
au BufReadPost *   if b:current_syntax == "verilog"
au BufReadPost *     let b:verilog_indent_modules = 1
au BufReadPost *   endif
au BufReadPost * endif</pre>
Furthermore, setting the variable b:verilog_indent_width to change the
indenting width (default is <a href="options.html#'shiftwidth'">'shiftwidth'</a>):<pre>let b:verilog_indent_width = 4
let b:verilog_indent_width = shiftwidth() * 2</pre>
In addition, you can turn the verbose mode for debug issue:<pre>let b:verilog_indent_verbose = 1</pre>
Make sure to do ":set cmdheight=2" first to allow the display of the message.</div>
<div class="old-help-para"><h3 class="help-heading">VHDL<span class="help-heading-tags">							<a name="ft-vhdl-indent"></a><span class="help-tag">ft-vhdl-indent</span></span></h3></div>
<div class="old-help-para">Alignment of generic/port mapping statements are performed by default. This
causes the following alignment example:<pre>ENTITY sync IS
PORT (
       clk        : IN  STD_LOGIC;
       reset_n    : IN  STD_LOGIC;
       data_input : IN  STD_LOGIC;
       data_out   : OUT STD_LOGIC
     );
END ENTITY sync;</pre>
To turn this off, add<pre>let g:vhdl_indent_genportmap = 0</pre>
to the vimrc file, which causes the previous alignment example to change:<pre>ENTITY sync IS
PORT (
  clk        : IN  STD_LOGIC;
  reset_n    : IN  STD_LOGIC;
  data_input : IN  STD_LOGIC;
  data_out   : OUT STD_LOGIC
);
END ENTITY sync;</pre>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+indent.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/indent.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20)%3B%0A%20%20END%20ENTITY%20sync%3B%0A%0A----------------------------------------%0A%0AAlignment%20of%20right-hand%20side%20assignment%20%22%3C%3D%22%20statements%20are%20performed%20by%0Adefault.%20This%20causes%20the%20following%20alignment%20example%3A%20%3E%0A%0D%60%60%60">----------------------------------------</a></div>
<div class="old-help-para">Alignment of right-hand side assignment "&lt;=" statements are performed by
default. This causes the following alignment example:<pre>sig_out &lt;= (bus_a(1) AND
           (sig_b OR sig_c)) OR
           (bus_a(0) AND sig_d);</pre>
To turn this off, add<pre>let g:vhdl_indent_rhsassign = 0</pre>
to the vimrc file, which causes the previous alignment example to change:<pre>sig_out &lt;= (bus_a(1) AND
  (sig_b OR sig_c)) OR
  (bus_a(0) AND sig_d);</pre>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+indent.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/indent.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%20(sig_b%20OR%20sig_c))%20OR%0A%20%20%20%20(bus_a(0)%20AND%20sig_d)%3B%0A%0A----------------------------------------%0A%0AFull-line%20comments%20(lines%20that%20begin%20with%20%22--%22)%20are%20indented%20to%20be%20aligned%20with%0Athe%20very%20previous%20line's%20comment%2C%20PROVIDED%20that%20a%20whitespace%20follows%20after%0A%22--%22.%0D%60%60%60">----------------------------------------</a></div>
<div class="old-help-para">Full-line comments (lines that begin with "--") are indented to be aligned with
the very previous line's comment, PROVIDED that a whitespace follows after
"--".</div>
<div class="old-help-para">For example:<pre>sig_a &lt;= sig_b; -- start of a comment
                -- continuation of the comment
                -- more of the same comment</pre>
While in Insert mode, after typing "-- " (note the space " "), hitting <code>CTRL-F</code>
will align the current "-- " with the previous line's "--".</div>
<div class="old-help-para">If the very previous line does not contain "--", THEN the full-line comment
will be aligned with the start of the next non-blank line that is NOT a
full-line comment.</div>
<div class="old-help-para">Indenting the following code:<pre>sig_c &lt;= sig_d; -- comment 0
       -- comment 1
             -- comment 2
  --debug_code:
  --PROCESS(debug_in)
       --BEGIN
          --  FOR i IN 15 DOWNTO 0 LOOP
           --    debug_out(8*i+7 DOWNTO 8*i) &lt;= debug_in(15-i);
          --  END LOOP;
   --END PROCESS debug_code;

    -- comment 3
sig_e &lt;= sig_f; -- comment 4
         -- comment 5</pre>
results in:<pre>sig_c &lt;= sig_d; -- comment 0
                -- comment 1
                -- comment 2
--debug_code:
--PROCESS(debug_in)
--BEGIN
--  FOR i IN 15 DOWNTO 0 LOOP
--    debug_out(8*i+7 DOWNTO 8*i) &lt;= debug_in(15-i);
--  END LOOP;
--END PROCESS debug_code;

-- comment 3
sig_e &lt;= sig_f; -- comment 4
                -- comment 5</pre>
Notice that "--debug_code:" does not align with "-- comment 2"
because there is no whitespace that follows after "--" in "--debug_code:".</div>
<div class="old-help-para">Given the dynamic nature of indenting comments, indenting should be done TWICE.
On the first pass, code will be indented. On the second pass, full-line
comments will be indented according to the correctly indented code.</div>
<div class="old-help-para"><h3 class="help-heading">VIM<span class="help-heading-tags">							<a name="ft-vim-indent"></a><span class="help-tag">ft-vim-indent</span></span></h3>							<a name="g%3Avim_indent_cont"></a><code class="help-tag-right">g:vim_indent_cont</code>
For indenting Vim scripts there is one variable that specifies the amount of
indent for a continuation line, a line that starts with a backslash:<pre>:let g:vim_indent_cont = shiftwidth() * 3</pre>
Three times shiftwidth is the default value.</div>

  
  