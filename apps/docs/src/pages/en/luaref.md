---
title:  Luaref
layout: ../../layouts/MainLayout.astro
---

  <a name="luaref.txt"></a><a name="luaref"></a><h1> Luaref</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/luaref.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="help-para">
 <a name="Lua-Reference"></a><code class="help-tag">Lua-Reference</code>

</div>
<div class="help-para">
                             LUA REFERENCE MANUAL

</div>
<div class="help-para">
                                 Version 0.3.0
                                August 7th, 2022

</div>
<div class="help-para">
                    Vimdoc version (c) 2006 by Luis Carvalho
                         &lt;lexcarvalho at gmail dot com&gt;

</div>
<div class="help-para">
                    Adapted from "Lua: 5.1 reference manual"
                 R. Ierusalimschy, L. H. de Figueiredo, W. Celes
                      Copyright (c) 2006 Lua.org, PUC-Rio.

</div>
<div class="help-para">
                 See <a href="/neovim-docs-web/en/luaref#luaref-doc">luaref-doc</a> for information on this manual.
                 See <a href="/neovim-docs-web/en/luaref#luaref-copyright">luaref-copyright</a> for copyright and licenses.

</div>
<div class="help-para">
<h2 class="help-heading">1  INTRODUCTION<span class="help-heading-tags">                                                   <a name="luaref-intro"></a><span class="help-tag">luaref-intro</span></span></h2>


</div>
<div class="help-para">
Lua is an extension programming language designed to support general
procedural programming with data description facilities.  It also offers good
support for object-oriented programming, functional programming, and
data-driven programming.  Lua is intended to be used as a powerful,
light-weight scripting language for any program that needs one.  Lua is
implemented as a library, written in clean C (that is, in the common subset of
ANSI C and C++).

</div>
<div class="help-para">
Being an extension language, Lua has no notion of a "main" program: it only
works embedded in a host client, called the embedding program or simply the
host. This host program can invoke functions to execute a piece of Lua code,
can write and read Lua variables, and can register C functions to be called by
Lua code.  Through the use of C functions, Lua can be augmented to cope with a
wide range of different domains, thus creating customized programming
languages sharing a syntactical framework.

</div>
<div class="help-para">
Lua is free software, and is provided as usual with no guarantees, as stated
in its license. The implementation described in this manual is available at
Lua's official web site, www.lua.org.

</div>
<div class="help-para">
Like any other reference manual, this document is dry in places. For a
discussion of the decisions behind the design of Lua, see references at
<a href="/neovim-docs-web/en/luaref#luaref-bibliography">luaref-bibliography</a>. For a detailed introduction to programming in Lua, see
Roberto's book, Programming in Lua.

</div>
<div class="help-para">
Lua means "moon" in Portuguese and is pronounced LOO-ah.

</div>
<div class="help-para">
<h2 class="help-heading">2  THE LANGUAGE<span class="help-heading-tags">                                                <a name="luaref-language"></a><span class="help-tag">luaref-language</span></span></h2>


</div>
<div class="help-para">
This section describes the lexis, the syntax, and the semantics of Lua. In
other words, this section describes which tokens are valid, how they can be
combined, and what their combinations mean.

</div>
<div class="help-para">
The language constructs will be explained using the usual extended BNF
notation, in which <code>{ a }</code> means 0 or more <code>a</code>'s, and <code>[ a ]</code> means an optional <code>a</code>.

</div>
<div class="help-para">
<h2 class="help-heading">2.1  Lexical Conventions<span class="help-heading-tags">                                    <a name="luaref-langLexConv"></a><span class="help-tag">luaref-langLexConv</span></span></h2>


</div>
<div class="help-para">
                                               <a name="luaref-names"></a><code class="help-tag-right">luaref-names</code> <a name="luaref-identifiers"></a><code class="help-tag">luaref-identifiers</code>
Names (also called identifiers) in Lua can be any string of letters, digits,
and underscores, not beginning with a digit. This coincides with the
definition of identifiers in most languages. (The definition of letter depends
on the current locale: any character considered alphabetic by the current
locale can be used in an identifier.) Identifiers are used to name variables
and table fields.

</div>
<div class="help-para">
The following keywords are reserved and cannot be used as names:
<pre>and       break     do        else      elseif
end       false     for       function  if
in        local     nil       not       or
repeat    return    then      true      until     while</pre>

</div>
<div class="help-para">
Lua is a case-sensitive language: <code>and</code> is a reserved word, but <code>And</code> and <code>AND</code> are
two different, valid names. As a convention, names starting with an underscore
followed by uppercase letters (such as <code>_VERSION</code>) are reserved for internal
global variables used by Lua.

</div>
<div class="help-para">
The following strings denote other tokens:
<pre>+     -     *     /     %     ^     #
==    ~=    &lt;=    &gt;=    &lt;     &gt;     =
(     )     {     }     [     ]
;     :     ,     .     ..    ...</pre>

</div>
<div class="help-para">
                                                                <a name="luaref-literal"></a><code class="help-tag-right">luaref-literal</code>
Literal strings can be delimited by matching single or double quotes, and can
contain the following C-like escape sequences:

</div>
<div class="help-para">
<div class="help-li" style=""> <code>\a</code>  bell
</div><div class="help-li" style=""> <code>\b</code>  backspace
</div><div class="help-li" style=""> <code>\f</code>  form feed
</div><div class="help-li" style=""> <code>\n</code>  newline
</div><div class="help-li" style=""> <code>\r</code>  carriage return
</div><div class="help-li" style=""> <code>\t</code>  horizontal tab
</div><div class="help-li" style=""> <code>\v</code>  vertical tab
</div><div class="help-li" style=""> <code>\\</code>  backslash
</div><div class="help-li" style=""> <code>\"</code>  quotation mark (double quote)
</div><div class="help-li" style=""> <code>\'</code>  apostrophe (single quote)
</div>
</div>
<div class="help-para">
Moreover, a backslash followed by a real newline results in a newline in the
string. A character in a string may also be specified by its numerical value
using the escape sequence <code>\ddd</code>, where <code>ddd</code> is a sequence of up to three
decimal digits. (Note that if a numerical escape is to be followed by a digit,
it must be expressed using exactly three digits.) Strings in Lua may contain
any 8-bit value, including embedded zeros, which can be specified as <code>\0</code>.

</div>
<div class="help-para">
To put a double (single) quote, a newline, a backslash, or an embedded zero
inside a literal string enclosed by double (single) quotes you must use an
escape sequence. Any other character may be directly inserted into the
literal. (Some control characters may cause problems for the file system, but
Lua has no problem with them.)

</div>
<div class="help-para">
Literal strings can also be defined using a long format enclosed by long
brackets. We define an opening long bracket of level n as an opening square
bracket followed by n equal signs followed by another opening square bracket.
So, an opening long bracket of level 0 is written as <code>[[</code>, an opening long
bracket of level 1 is written as <code>[=[</code>, and so on.
A closing long bracket is defined similarly; for instance, a closing long
bracket of level 4 is written as <code>]====]</code>. A long string starts with an
opening long bracket of any level and ends at the first closing long bracket
of the same level. Literals in this bracketed form may run for several lines,
do not interpret any escape sequences, and ignore long brackets of any other
level. They may contain anything except a closing bracket of the proper level.

</div>
<div class="help-para">
For convenience, when the opening long bracket is immediately followed by a
newline, the newline is not included in the string. As an example, in a system
using ASCII (in which <code>a</code> is coded as 97, newline is coded as 10, and <code>1</code> is
coded as 49), the five literals below denote the same string:
<pre>a = 'alo\n123"'
a = "alo\n123\""
a = '\97lo\10\04923"'
a = [[alo
123"]]
a = [==[
alo
123"]==]</pre>

</div>
<div class="help-para">
                                                            <a name="luaref-numconstant"></a><code class="help-tag-right">luaref-numconstant</code>
A numerical constant may be written with an optional decimal part and an
optional decimal exponent. Lua also accepts integer hexadecimal constants, by
prefixing them with <code>0x</code>. Examples of valid numerical constants are
<pre>3     3.0     3.1416  314.16e-2   0.31416E1   0xff   0x56</pre>

</div>
<div class="help-para">
                                                                <a name="luaref-comment"></a><code class="help-tag-right">luaref-comment</code>
A comment starts with a double hyphen (<code>--</code>) anywhere outside a string. If the
text immediately after <code>--</code> is not an opening long bracket, the comment is a
short comment, which runs until the end of the line. Otherwise, it is a long
comment, which runs until the corresponding closing long bracket. Long
comments are frequently used to disable code temporarily.

</div>
<div class="help-para">
<h2 class="help-heading">2.2  Values and Types<span class="help-heading-tags">                                      <a name="luaref-langValTypes"></a><span class="help-tag">luaref-langValTypes</span></span></h2>


</div>
<div class="help-para">
Lua is a dynamically typed language. This means that variables do not have
types; only values do. There are no type definitions in the language. All
values carry their own type.

</div>
<div class="help-para">
All values in Lua are first-class values. This means that all values can be
stored in variables, passed as arguments to other functions, and returned as
results.

</div>
<div class="help-para">
                                                       <a name="luaref-types"></a><code class="help-tag-right">luaref-types</code> <a name="luaref-nil"></a><code class="help-tag">luaref-nil</code>
                                                      <a name="luaref-true"></a><code class="help-tag-right">luaref-true</code> <a name="luaref-false"></a><code class="help-tag">luaref-false</code>
                                                   <a name="luaref-number"></a><code class="help-tag-right">luaref-number</code> <a name="luaref-string"></a><code class="help-tag">luaref-string</code>
There are eight basic types in Lua: <code>nil</code>, <code>boolean</code>, <code>number</code>, <code>string</code>,
<code>function</code>, <code>userdata</code>, <code>thread</code>, and <code>table</code>. Nil is the type of the value
<code>nil</code>, whose main property is to be different from any other value; it usually
represents the absence of a useful value. Boolean is the type of the values
<code>false</code> and <code>true</code>. Both <code>nil</code> and <code>false</code> make a condition false; any other
value makes it true. Number represents real (double-precision floating-point)
numbers. (It is easy to build Lua interpreters that use other internal
representations for numbers, such as single-precision float or long integers;
see file <code>luaconf.h</code>.) String represents arrays of characters. Lua is 8-bit
clean: strings may contain any 8-bit character, including embedded zeros
(<code>\0</code>) (see <a href="/neovim-docs-web/en/luaref#luaref-literal">luaref-literal</a>).

</div>
<div class="help-para">
Lua can call (and manipulate) functions written in Lua and functions written
in C (see <a href="/neovim-docs-web/en/luaref#luaref-langFuncCalls">luaref-langFuncCalls</a>).

</div>
<div class="help-para">
                                                           <a name="luaref-userdatatype"></a><code class="help-tag-right">luaref-userdatatype</code>
The type userdata is provided to allow arbitrary C data to be stored in Lua
variables. This type corresponds to a block of raw memory and has no
pre-defined operations in Lua, except assignment and identity test. However,
by using metatables, the programmer can define operations for userdata values
(see <a href="/neovim-docs-web/en/luaref#luaref-langMetatables">luaref-langMetatables</a>). Userdata values cannot be created or modified
in Lua, only through the C API. This guarantees the integrity of data owned by
the host program.

</div>
<div class="help-para">
                                                                 <a name="luaref-thread"></a><code class="help-tag-right">luaref-thread</code>
The type <code>thread</code> represents independent threads of execution and it is used to
implement coroutines (see <a href="/neovim-docs-web/en/luaref#luaref-langCoro">luaref-langCoro</a>). Do not confuse Lua threads with
operating-system threads. Lua supports coroutines on all systems, even those
that do not support threads.

</div>
<div class="help-para">
                                                                  <a name="luaref-table"></a><code class="help-tag-right">luaref-table</code>
The type <code>table</code> implements associative arrays, that is, arrays that can be
indexed not only with numbers, but with any value (except <code>nil</code>). Tables can
be heterogeneous; that is, they can contain values of all types (except
<code>nil</code>). Tables are the sole data structuring mechanism in Lua; they may be
used to represent ordinary arrays, symbol tables, sets, records, graphs,
trees, etc. To represent records, Lua uses the field name as an index. The
language supports this representation by providing <code>a.name</code> as syntactic sugar
for <code>a["name"]</code>. There are several convenient ways to create tables in Lua
(see <a href="/neovim-docs-web/en/luaref#luaref-langTableConst">luaref-langTableConst</a>).

</div>
<div class="help-para">
Like indices, the value of a table field can be of any type (except <code>nil</code>). In
particular, because functions are first-class values, table fields may contain
functions. Thus tables may also carry methods (see <a href="/neovim-docs-web/en/luaref#luaref-langFuncDefs">luaref-langFuncDefs</a>).

</div>
<div class="help-para">
Tables, functions, threads and (full) userdata values are objects: variables
do not actually contain these values, only references to them. Assignment,
parameter passing, and function returns always manipulate references to such
values; these operations do not imply any kind of copy.

</div>
<div class="help-para">
The library function <code>type</code> returns a string describing the type of a given
value (see <a href="/neovim-docs-web/en/luaref#luaref-type()">luaref-type()</a>).

</div>
<div class="help-para">
<h3 class="help-heading">2.2.1  Coercion<span class="help-heading-tags">                                            <a name="luaref-langCoercion"></a><span class="help-tag">luaref-langCoercion</span></span></h3>


</div>
<div class="help-para">
Lua provides automatic conversion between string and number values at run
time. Any arithmetic operation applied to a string tries to convert that
string to a number, following the usual conversion rules. Conversely, whenever
a number is used where a string is expected, the number is converted to a
string, in a reasonable format. For complete control of how numbers are
converted to strings, use the <code>format</code> function from the string library (see
<a href="/neovim-docs-web/en/luaref#string.format()">string.format()</a>).

</div>
<div class="help-para">
<h2 class="help-heading">2.3  Variables<span class="help-heading-tags">                                            <a name="luaref-langVariables"></a><span class="help-tag">luaref-langVariables</span></span></h2>


</div>
<div class="help-para">
Variables are places that store values. There are three kinds of variables in
Lua: global variables, local variables, and table fields.

</div>
<div class="help-para">
A single name can denote a global variable or a local variable (or a
function's formal parameter, which is a particular form of local variable):
<pre>var ::= Name</pre>

</div>
<div class="help-para">
Name denotes identifiers, as defined in <a href="/neovim-docs-web/en/luaref#luaref-langLexConv">luaref-langLexConv</a>.

</div>
<div class="help-para">
Any variable is assumed to be global unless explicitly declared as a local
(see <a href="/neovim-docs-web/en/luaref#luaref-langLocalDec">luaref-langLocalDec</a>). Local variables are lexically scoped: local
variables can be freely accessed by functions defined inside their scope (see
<a href="/neovim-docs-web/en/luaref#luaref-langVisibRules">luaref-langVisibRules</a>).

</div>
<div class="help-para">
Before the first assignment to a variable, its value is <code>nil</code>.

</div>
<div class="help-para">
Square brackets are used to index a table:
<pre>var ::= prefixexp [ exp ]</pre>

</div>
<div class="help-para">
The first expression (<code>prefixexp</code>) should result in a table value; the second
expression (<code>exp</code>) identifies a specific entry inside that table. The
expression denoting the table to be indexed has a restricted syntax; see
<a href="/neovim-docs-web/en/luaref#luaref-langExpressions">luaref-langExpressions</a> for details.

</div>
<div class="help-para">
The syntax <code>var.NAME</code> is just syntactic sugar for <code>var["NAME"]</code> :
<pre>var ::= prefixexp . Name</pre>

</div>
<div class="help-para">
All global variables live as fields in ordinary Lua tables, called environment
tables or simply environments (see <a href="/neovim-docs-web/en/luaref#luaref-langEnvironments">luaref-langEnvironments</a>). Each function
has its own reference to an environment, so that all global variables in this
function will refer to this environment table. When a function is created, it
inherits the environment from the function that created it. To get the
environment table of a Lua function, you call <code>getfenv</code> (see
<a href="/neovim-docs-web/en/luaref#lua_getfenv()">lua_getfenv()</a>). To replace it, you call <code>setfenv</code> (see <a href="/neovim-docs-web/en/luaref#luaref-setfenv()">luaref-setfenv()</a>).
(You can only manipulate the environment of C functions through the debug
library; see <a href="/neovim-docs-web/en/luaref#luaref-libDebug">luaref-libDebug</a>.)

</div>
<div class="help-para">
An access to a global variable <code>x</code> is equivalent to <code>_env.x</code>, which in turn is
equivalent to
<pre>gettable_event(_env, "x")</pre>

</div>
<div class="help-para">
where <code>_env</code> is the environment of the running function. (The <code>_env</code> variable is
not defined in Lua. We use it here only for explanatory purposes.)

</div>
<div class="help-para">
The meaning of accesses to global variables and table fields can be changed
via metatables. An access to an indexed variable <code>t[i]</code> is equivalent to a
call <code>gettable_event(t,i)</code>. (See <a href="/neovim-docs-web/en/luaref#luaref-langMetatables">luaref-langMetatables</a> for a complete
description of the <code>gettable_event</code> function. This function is not defined or
callable in Lua. We use it here only for explanatory purposes.)

</div>
<div class="help-para">
<h2 class="help-heading">2.4  Statements<span class="help-heading-tags">                                               <a name="luaref-langStats"></a><span class="help-tag">luaref-langStats</span></span></h2>


</div>
<div class="help-para">
Lua supports an almost conventional set of statements, similar to those in
Pascal or C. This set includes assignment, control structures, function
calls, and variable declarations.

</div>
<div class="help-para">
<h3 class="help-heading">2.4.1  Chunks<span class="help-heading-tags">                                   <a name="luaref-chunk"></a><span class="help-tag">luaref-chunk</span> <a name="luaref-langChunks"></a><span class="help-tag">luaref-langChunks</span></span></h3>


</div>
<div class="help-para">
The unit of execution of Lua is called a chunk. A chunk is simply a sequence
of statements, which are executed sequentially. Each statement can be
optionally followed by a semicolon:
<pre>chunk ::= {stat [ ; ]}</pre>

</div>
<div class="help-para">
There are no empty statements and thus <code>;;</code> is not legal.

</div>
<div class="help-para">
Lua handles a chunk as the body of an anonymous function with a variable
number of arguments (see <a href="/neovim-docs-web/en/luaref#luaref-langFuncDefs">luaref-langFuncDefs</a>). As such, chunks can define
local variables, receive arguments, and return values.

</div>
<div class="help-para">
A chunk may be stored in a file or in a string inside the host program. When a
chunk is executed, first it is pre-compiled into instructions for a virtual
machine, and then the compiled code is executed by an interpreter for the
virtual machine.

</div>
<div class="help-para">
Chunks may also be pre-compiled into binary form; see program <code>luac</code> for
details. Programs in source and compiled forms are interchangeable; Lua
automatically detects the file type and acts accordingly.

</div>
<div class="help-para">
<h3 class="help-heading">2.4.2  Blocks<span class="help-heading-tags">                                   <a name="luaref-block"></a><span class="help-tag">luaref-block</span> <a name="luaref-langBlocks"></a><span class="help-tag">luaref-langBlocks</span></span></h3>


</div>
<div class="help-para">
A block is a list of statements; syntactically, a block is the same as a
chunk:
<pre>block ::= chunk</pre>

</div>
<div class="help-para">
                                                          <a name="luaref-do"></a><code class="help-tag-right">luaref-do</code> <a name="luaref-end"></a><code class="help-tag">luaref-end</code>
A block may be explicitly delimited to produce a single statement:
<pre>stat ::= do block end</pre>

</div>
<div class="help-para">
Explicit blocks are useful to control the scope of variable declarations.
Explicit blocks are also sometimes used to add a <code>return</code> or <code>break</code> statement
in the middle of another block (see <a href="/neovim-docs-web/en/luaref#luaref-langContStructs">luaref-langContStructs</a>).

</div>
<div class="help-para">
<h3 class="help-heading">2.4.3  Assignment<span class="help-heading-tags">                                            <a name="luaref-langAssign"></a><span class="help-tag">luaref-langAssign</span></span></h3>


</div>
<div class="help-para">
Lua allows multiple assignment. Therefore, the syntax for assignment defines a
list of variables on the left side and a list of expressions on the right
side. The elements in both lists are separated by commas:
<pre>stat ::= varlist1 = explist1
varlist1 ::= var { , var }
explist1 ::= exp { , exp }</pre>

</div>
<div class="help-para">
Expressions are discussed in <a href="/neovim-docs-web/en/luaref#luaref-langExpressions">luaref-langExpressions</a>.

</div>
<div class="help-para">
Before the assignment, the list of values is adjusted to the length of the
list of variables. If there are more values than needed, the excess values are
thrown away. If there are fewer values than needed, the list is extended with
as many <code>nil</code>s as needed. If the list of expressions ends with a function
call, then all values returned by this call enter in the list of values,
before the adjustment (except when the call is enclosed in parentheses; see
<a href="/neovim-docs-web/en/luaref#luaref-langExpressions">luaref-langExpressions</a>).

</div>
<div class="help-para">
The assignment statement first evaluates all its expressions and only then are
the assignments performed. Thus the code
<pre>i = 3
i, a[i] = i+1, 20</pre>

</div>
<div class="help-para">
sets <code>a[3]</code> to 20, without affecting <code>a[4]</code> because the <code>i</code> in <code>a[i]</code> is evaluated (to
3) before it is assigned 4. Similarly, the line
<pre>x, y = y, x</pre>

</div>
<div class="help-para">
exchanges the values of <code>x</code> and <code>y</code>.

</div>
<div class="help-para">
The meaning of assignments to global variables and table fields can be changed
via metatables. An assignment to an indexed variable <code>t[i] = val</code> is
equivalent to <code>settable_event(t,i,val)</code>. (See <a href="/neovim-docs-web/en/luaref#luaref-langMetatables">luaref-langMetatables</a> for a
complete description of the <code>settable_event</code> function. This function is not
defined or callable in Lua. We use it here only for explanatory purposes.)

</div>
<div class="help-para">
An assignment to a global variable <code>x = val</code> is equivalent to the
assignment <code>_env.x = val</code>, which in turn is equivalent to
<pre>settable_event(_env, "x", val)</pre>

</div>
<div class="help-para">
where <code>_env</code> is the environment of the running function. (The <code>_env</code> variable is
not defined in Lua. We use it here only for explanatory purposes.)

</div>
<div class="help-para">
<h3 class="help-heading">2.4.4  Control Structures<span class="help-heading-tags">                               <a name="luaref-langContStructs"></a><span class="help-tag">luaref-langContStructs</span></span></h3>


</div>
<div class="help-para">
                               <a name="luaref-if"></a><code class="help-tag-right">luaref-if</code> <a name="luaref-then"></a><code class="help-tag">luaref-then</code> <a name="luaref-else"></a><code class="help-tag">luaref-else</code> <a name="luaref-elseif"></a><code class="help-tag">luaref-elseif</code>
                                       <a name="luaref-while"></a><code class="help-tag-right">luaref-while</code> <a name="luaref-repeat"></a><code class="help-tag">luaref-repeat</code> <a name="luaref-until"></a><code class="help-tag">luaref-until</code>
The control structures <code>if</code>, <code>while</code>, and <code>repeat</code> have the usual meaning and
familiar syntax:
<pre>stat ::=  while  exp do block end
stat ::=  repeat  block until exp
stat ::=  if  exp then block { elseif exp then block }
          [ else block ] end</pre>

</div>
<div class="help-para">
Lua also has a <code>for</code> statement, in two flavors (see <a href="/neovim-docs-web/en/luaref#luaref-langForStat">luaref-langForStat</a>).

</div>
<div class="help-para">
The condition expression of a control structure may return any value.
Both <code>false</code> and <code>nil</code> are considered false. All values different
from <code>nil</code> and <code>false</code> are considered true (in particular, the number 0 and the
empty string are also true).

</div>
<div class="help-para">
In the <code>repeat-until</code> loop, the inner block does not end at the <code>until</code> keyword,
but only after the condition. So, the condition can refer to local variables
declared inside the loop block.

</div>
<div class="help-para">
                                                                 <a name="luaref-return"></a><code class="help-tag-right">luaref-return</code>
The <code>return</code> statement is used to return values from a function or a chunk
(which is just a function). Functions and chunks may return more than one
value, so the syntax for the <code>return</code> statement is

</div>
<div class="help-para">
       <code>stat ::=</code>  <code>return</code>  <code>[explist1]</code>

</div>
<div class="help-para">
                                                                  <a name="luaref-break"></a><code class="help-tag-right">luaref-break</code>
The <code>break</code> statement is used to terminate the execution of a <code>while</code>, <code>repeat</code>,
or <code>for</code> loop, skipping to the next statement after the loop:

</div>
<div class="help-para">
       <code>stat ::=</code>  <code>break</code>

</div>
<div class="help-para">
A <code>break</code> ends the innermost enclosing loop.

</div>
<div class="help-para">
The <code>return</code> and <code>break</code> statements can only be written as the <code>last</code>
statement of a block. If it is really necessary to <code>return</code> or <code>break</code> in the
middle of a block, then an explicit inner block can be used, as in the idioms
<code>do return end</code> and <code>do break end</code>, because now <code>return</code> and <code>break</code> are
the last statements in their (inner) blocks.

</div>
<div class="help-para">
<h3 class="help-heading">2.4.5  For Statement<span class="help-heading-tags">                             <a name="luaref-for"></a><span class="help-tag">luaref-for</span> <a name="luaref-langForStat"></a><span class="help-tag">luaref-langForStat</span></span></h3>


</div>
<div class="help-para">
The <code>for</code> statement has two forms: one numeric and one generic.

</div>
<div class="help-para">
The numeric <code>for</code> loop repeats a block of code while a control variable runs
through an arithmetic progression. It has the following syntax:
<pre>stat ::=  for  Name = exp , exp [ , exp ] do block end</pre>

</div>
<div class="help-para">
The <code>block</code> is repeated for <code>name</code> starting at the value of the first <code>exp</code>, until
it passes the second <code>exp</code> by steps of the third <code>exp</code>. More precisely,
a <code>for</code> statement like<pre>for var =  e1, e2, e3  do  block  end</pre>

</div>
<div class="help-para">
 is equivalent to the code:<pre>do
  local  var, limit, step  = tonumber(e1), tonumber(e2), tonumber(e3)
  if not (  var  and  limit  and  step  ) then error() end
  while (  step  &gt;0 and  var  &lt;=  limit  )
          or (  step  &lt;=0 and  var  &gt;=  limit  ) do
     block
     var  =  var  +  step
  end
end</pre>

</div>
<div class="help-para">
Note the following:

</div>
<div class="help-para">
<div class="help-li" style=""> All three control expressions are evaluated only once, before the loop
   starts. They must all result in numbers.
</div><div class="help-li" style=""> <code>var</code>, <code>limit</code> and <code>step</code> are invisible variables. The names are here for
   explanatory purposes only.
</div><div class="help-li" style=""> If the third expression (the step) is absent, then a step of 1 is used.
</div><div class="help-li" style=""> You can use <code>break</code> to exit a <code>for</code> loop.
</div><div class="help-li" style=""> The loop variable <code>var</code> is local to the loop; you cannot use its value
   after the <code>for</code> ends or is broken. If you need this value, assign it to
   another variable before breaking or exiting the loop.
</div>
</div>
<div class="help-para">
                                                                     <a name="luaref-in"></a><code class="help-tag-right">luaref-in</code>
The generic <code>for</code> statement works over functions, called iterators. On each
iteration, the iterator function is called to produce a new value, stopping
when this new value is <code>nil</code>. The generic <code>for</code> loop has the following syntax:
<pre>stat ::=  for  namelist in explist1 do block end
namelist ::= Name { , Name }</pre>

</div>
<div class="help-para">
A <code>for</code> statement like

</div>
<div class="help-para">
       <code>for</code>  <code>var1, ..., varn</code>  <code>in</code>  <code>explist</code>  <code>do</code>  <code>block</code>  <code>end</code>

</div>
<div class="help-para">
is equivalent to the code:<pre>do
  local  f, s, var  =  explist
  while true do
      local  var1, ..., varn  =  f(s, var)
      var  =  var1
      if  var  == nil then break end
      block
  end
end</pre>

</div>
<div class="help-para">
Note the following:

</div>
<div class="help-para">
<div class="help-li" style=""> <code>explist</code> is evaluated only once. Its results are an iterator function,
   a <code>state</code>, and an initial value for the first iterator variable.
</div><div class="help-li" style=""> <code>f</code>, <code>s</code>, and <code>var</code> are invisible variables. The names are here for
   explanatory purposes only.
</div><div class="help-li" style=""> You can use <code>break</code> to exit a <code>for</code> loop.
</div><div class="help-li" style=""> The loop variables <code>var1, ..., varn</code> are local to the loop; you cannot use
   their values after the <code>for</code> ends. If you need these values, then assign
   them to other variables before breaking or exiting the loop.
</div>
</div>
<div class="help-para">
<h3 class="help-heading">2.4.6  Function Calls as Statements<span class="help-heading-tags">                        <a name="luaref-langFuncStat"></a><span class="help-tag">luaref-langFuncStat</span></span></h3>


</div>
<div class="help-para">
To allow possible side-effects, function calls can be executed as statements:
<pre>stat ::= functioncall</pre>

</div>
<div class="help-para">
In this case, all returned values are thrown away. Function calls are
explained in <a href="/neovim-docs-web/en/luaref#luaref-langFuncCalls">luaref-langFuncCalls</a>.

</div>
<div class="help-para">
<h3 class="help-heading">2.4.7  Local Declarations<span class="help-heading-tags">                     <a name="luaref-local"></a><span class="help-tag">luaref-local</span> <a name="luaref-langLocalDec"></a><span class="help-tag">luaref-langLocalDec</span></span></h3>


</div>
<div class="help-para">
Local variables may be declared anywhere inside a block. The declaration may
include an initial assignment:
<pre>stat ::=  local  namelist [ = explist1 ]
namelist ::= Name { , Name }</pre>

</div>
<div class="help-para">
If present, an initial assignment has the same semantics of a multiple
assignment (see <a href="/neovim-docs-web/en/luaref#luaref-langAssign">luaref-langAssign</a>). Otherwise, all variables are initialized
with <code>nil</code>.

</div>
<div class="help-para">
A chunk is also a block (see <a href="/neovim-docs-web/en/luaref#luaref-langChunks">luaref-langChunks</a>), and so local variables can be
declared in a chunk outside any explicit block. The scope of such local
variables extends until the end of the chunk.

</div>
<div class="help-para">
The visibility rules for local variables are explained in
<a href="/neovim-docs-web/en/luaref#luaref-langVisibRules">luaref-langVisibRules</a>.

</div>
<div class="help-para">
<h2 class="help-heading">2.5  Expressions<span class="help-heading-tags">                                        <a name="luaref-langExpressions"></a><span class="help-tag">luaref-langExpressions</span></span></h2>


</div>
<div class="help-para">
The basic expressions in Lua are the following:
<pre>exp ::= prefixexp
exp ::=  nil  |  false  |  true
exp ::= Number
exp ::= String
exp ::= function
exp ::= tableconstructor
exp ::= ...
exp ::= exp binop exp
exp ::= unop exp
prefixexp ::= var | functioncall | ( exp )</pre>

</div>
<div class="help-para">
Numbers and literal strings are explained in <a href="/neovim-docs-web/en/luaref#luaref-langLexConv">luaref-langLexConv</a>; variables are
explained in <a href="/neovim-docs-web/en/luaref#luaref-langVariables">luaref-langVariables</a>; function definitions are explained in
<a href="/neovim-docs-web/en/luaref#luaref-langFuncDefs">luaref-langFuncDefs</a>; function calls are explained in <a href="/neovim-docs-web/en/luaref#luaref-langFuncCalls">luaref-langFuncCalls</a>;
table constructors are explained in <a href="/neovim-docs-web/en/luaref#luaref-langTableConst">luaref-langTableConst</a>. Vararg expressions,
denoted by three dots (<code>...</code>), can only be used inside vararg functions;
they are explained in <a href="/neovim-docs-web/en/luaref#luaref-langFuncDefs">luaref-langFuncDefs</a>.

</div>
<div class="help-para">
Binary operators comprise arithmetic operators (see <a href="/neovim-docs-web/en/luaref#luaref-langArithOp">luaref-langArithOp</a>),
relational operators (see <a href="/neovim-docs-web/en/luaref#luaref-langRelOp">luaref-langRelOp</a>), logical operators (see
<a href="/neovim-docs-web/en/luaref#luaref-langLogOp">luaref-langLogOp</a>), and the concatenation operator (see <a href="/neovim-docs-web/en/luaref#luaref-langConcat">luaref-langConcat</a>).
Unary operators comprise the unary minus (see <a href="/neovim-docs-web/en/luaref#luaref-langArithOp">luaref-langArithOp</a>), the unary
<code>not</code> (see <a href="/neovim-docs-web/en/luaref#luaref-langLogOp">luaref-langLogOp</a>), and the unary length operator (see
<a href="/neovim-docs-web/en/luaref#luaref-langLength">luaref-langLength</a>).

</div>
<div class="help-para">
Both function calls and vararg expressions may result in multiple values. If
the expression is used as a statement (see <a href="/neovim-docs-web/en/luaref#luaref-langFuncStat">luaref-langFuncStat</a>)
(only possible for function calls), then its return list is adjusted to zero
elements, thus discarding all returned values. If the expression is used as
the last (or the only) element of a list of expressions, then no adjustment is
made (unless the call is enclosed in parentheses). In all other contexts, Lua
adjusts the result list to one element, discarding all values except the first
one.

</div>
<div class="help-para">
Here are some examples:
<pre>f()                -- adjusted to 0 results
g(f(), x)          -- f() is adjusted to 1 result
g(x, f())          -- g gets x plus all results from f()
a,b,c = f(), x     -- f() is adjusted to 1 result (c gets nil)
a,b = ...          -- a gets the first vararg parameter, b gets
                   -- the second (both a and b may get nil if there
                   -- is no corresponding vararg parameter)

a,b,c = x, f()     -- f() is adjusted to 2 results
a,b,c = f()        -- f() is adjusted to 3 results
return f()         -- returns all results from f()
return ...         -- returns all received vararg parameters
return x,y,f()     -- returns x, y, and all results from f()
{f()}              -- creates a list with all results from f()
{...}              -- creates a list with all vararg parameters
{f(), nil}         -- f() is adjusted to 1 result</pre>

</div>
<div class="help-para">
An expression enclosed in parentheses always results in only one value. Thus,
<code>(f(x,y,z))</code> is always a single value, even if <code>f</code> returns several values.
(The value of <code>(f(x,y,z))</code> is the first value returned by <code>f</code> or <code>nil</code> if <code>f</code> does not
return any values.)

</div>
<div class="help-para">
<h3 class="help-heading">2.5.1  Arithmetic Operators<span class="help-heading-tags">                                 <a name="luaref-langArithOp"></a><span class="help-tag">luaref-langArithOp</span></span></h3>


</div>
<div class="help-para">
Lua supports the usual arithmetic operators: the binary <code>+</code> (addition),
<code>-</code> (subtraction), <code>*</code> (multiplication), <code>/</code> (division), <code>%</code> (modulo)
and <code>^</code> (exponentiation); and unary <code>-</code> (negation). If the operands are numbers,
or strings that can be converted to numbers (see <a href="/neovim-docs-web/en/luaref#luaref-langCoercion">luaref-langCoercion</a>), then all
operations have the usual meaning. Exponentiation works for any exponent. For
instance, <code>x^(-0.5)</code> computes the inverse of the square root of <code>x</code>. Modulo is
defined as
<pre>a % b == a - math.floor(a/b)*b</pre>

</div>
<div class="help-para">
That is, it is the remainder of a division that rounds the quotient towards
minus infinity.

</div>
<div class="help-para">
<h3 class="help-heading">2.5.2  Relational Operators<span class="help-heading-tags">                                   <a name="luaref-langRelOp"></a><span class="help-tag">luaref-langRelOp</span></span></h3>


</div>
<div class="help-para">
The relational operators in Lua are
<pre>==    ~=    &lt;     &gt;     &lt;=    &gt;=</pre>

</div>
<div class="help-para">
These operators always result in <code>false</code> or <code>true</code>.

</div>
<div class="help-para">
Equality (<code>==</code>) first compares the type of its operands. If the types are
different, then the result is <code>false</code>. Otherwise, the values of the operands
are compared. Numbers and strings are compared in the usual way. Objects
(tables, userdata, threads, and functions) are compared by reference: two
objects are considered equal only if they are the same object. Every time you
create a new object (a table, userdata, or function), this new object is
different from any previously existing object.

</div>
<div class="help-para">
You can change the way that Lua compares tables and userdata using the "eq"
metamethod (see <a href="/neovim-docs-web/en/luaref#luaref-langMetatables">luaref-langMetatables</a>).

</div>
<div class="help-para">
The conversion rules of coercion <a href="/neovim-docs-web/en/luaref#luaref-langCoercion">luaref-langCoercion</a> do not apply to
equality comparisons. Thus, <code>"0"==0</code> evaluates to <code>false</code>, and <code>t[0]</code> and
<code>t["0"]</code> denote different entries in a table.

</div>
<div class="help-para">
The operator <code>~=</code> is exactly the negation of equality (<code>==</code>).

</div>
<div class="help-para">
The order operators work as follows. If both arguments are numbers, then they
are compared as such. Otherwise, if both arguments are strings, then their
values are compared according to the current locale. Otherwise, Lua tries to
call the "lt" or the "le" metamethod (see <a href="/neovim-docs-web/en/luaref#luaref-langMetatables">luaref-langMetatables</a>).

</div>
<div class="help-para">
<h3 class="help-heading">2.5.3  Logical Operators<span class="help-heading-tags">                                      <a name="luaref-langLogOp"></a><span class="help-tag">luaref-langLogOp</span></span></h3>


</div>
<div class="help-para">
The logical operators in Lua are
<pre>and    or    not</pre>

</div>
<div class="help-para">
Like the control structures (see <a href="/neovim-docs-web/en/luaref#luaref-langContStructs">luaref-langContStructs</a>), all logical operators
consider both <code>false</code> and <code>nil</code> as false and anything else as true.

</div>
<div class="help-para">
                                               <a name="luaref-not"></a><code class="help-tag-right">luaref-not</code> <a name="luaref-and"></a><code class="help-tag">luaref-and</code> <a name="luaref-or"></a><code class="help-tag">luaref-or</code>
The negation operator <code>not</code> always returns <code>false</code> or <code>true</code>. The conjunction
operator <code>and</code> returns its first argument if this value is <code>false</code> or <code>nil</code>;
otherwise, <code>and</code> returns its second argument. The disjunction
operator <code>or</code> returns its first argument if this value is different
from <code>nil</code> and <code>false</code>; otherwise, <code>or</code> returns its second argument.
Both <code>and</code> and <code>or</code> use short-cut evaluation, that is, the second operand is
evaluated only if necessary. Here are some examples:
<pre>10 or 20            --&gt; 10
10 or error()       --&gt; 10
nil or "a"          --&gt; "a"
nil and 10          --&gt; nil
false and error()   --&gt; false
false and nil       --&gt; false
false or nil        --&gt; nil
10 and 20           --&gt; 20</pre>

</div>
<div class="help-para">
(In this manual, <code>--&gt;</code> indicates the result of the preceding expression.)

</div>
<div class="help-para">
<h3 class="help-heading">2.5.4  Concatenation<span class="help-heading-tags">                                         <a name="luaref-langConcat"></a><span class="help-tag">luaref-langConcat</span></span></h3>


</div>
<div class="help-para">
The string concatenation operator in Lua is denoted by two dots (<code>..</code>).
If both operands are strings or numbers, then they are converted to strings
according to the rules mentioned in <a href="/neovim-docs-web/en/luaref#luaref-langCoercion">luaref-langCoercion</a>. Otherwise, the
"concat" metamethod is called (see <a href="/neovim-docs-web/en/luaref#luaref-langMetatables">luaref-langMetatables</a>).

</div>
<div class="help-para">
<h3 class="help-heading">2.5.5  The Length Operator<span class="help-heading-tags">                                   <a name="luaref-langLength"></a><span class="help-tag">luaref-langLength</span></span></h3>


</div>
<div class="help-para">
The length operator is denoted by the unary operator <code>#</code>. The length of a
string is its number of bytes (that is, the usual meaning of string length
when each character is one byte).

</div>
<div class="help-para">
The length of a table <code>t</code> is defined to be any integer index <code>n</code> such that <code>t[n]</code> is
not <code>nil</code> and <code>t[n+1]</code> is <code>nil</code>; moreover, if <code>t[1]</code> is <code>nil</code>, <code>n</code> may be zero. For a
regular array, with non-nil values from 1 to a given <code>n</code>, its length is exactly
that <code>n</code>, the index of its last value. If the array has "holes" (that
is, <code>nil</code> values between other non-nil values), then <code>#t</code> may be any of the
indices that directly precedes a <code>nil</code> value (that is, it may consider any
such <code>nil</code> value as the end of the array).

</div>
<div class="help-para">
<h3 class="help-heading">2.5.6  Precedence<span class="help-heading-tags">                                              <a name="luaref-langPrec"></a><span class="help-tag">luaref-langPrec</span></span></h3>


</div>
<div class="help-para">
Operator precedence in Lua follows the table below, from lower to higher
priority:
<pre>or
and
&lt;     &gt;     &lt;=    &gt;=    ~=    ==
..
+     -
*     /
not   #     - (unary)
^</pre>

</div>
<div class="help-para">
As usual, you can use parentheses to change the precedences in an expression.
The concatenation (<code>..</code>) and exponentiation (<code>^</code>) operators are right
associative. All other binary operators are left associative.

</div>
<div class="help-para">
<h3 class="help-heading">2.5.7  Table Constructors<span class="help-heading-tags">                                <a name="luaref-langTableConst"></a><span class="help-tag">luaref-langTableConst</span></span></h3>


</div>
<div class="help-para">
Table constructors are expressions that create tables. Every time a
constructor is evaluated, a new table is created. Constructors can be used to
create empty tables, or to create a table and initialize some of its fields.
The general syntax for constructors is
<pre>tableconstructor ::= { [ fieldlist ] }
fieldlist ::= field { fieldsep field } [ fieldsep ]
field ::= [ exp ]  = exp | Name = exp | exp
fieldsep ::=  , |  ;</pre>

</div>
<div class="help-para">
Each field of the form <code>[exp1] = exp2</code> adds to the new table an entry with
key <code>exp1</code> and value <code>exp2</code>. A field of the form <code>name = exp</code> is equivalent to
<code>["name"] = exp</code>. Finally, fields of the form <code>exp</code> are equivalent to
<code>[i] = exp</code>, where <code>i</code> are consecutive numerical integers, starting with 1.
Fields in the other formats do not affect this counting. For example,
<pre>a = { [f(1)] = g; "x", "y"; x = 1, f(x), [30] = 23; 45 }</pre>

</div>
<div class="help-para">
is equivalent to
<pre>do
  local t = {}
  t[f(1)] = g
  t[1] = "x"         -- 1st exp
  t[2] = "y"         -- 2nd exp
  t.x = 1            -- temp["x"] = 1
  t[3] = f(x)        -- 3rd exp
  t[30] = 23
  t[4] = 45          -- 4th exp
  a = t
end</pre>

</div>
<div class="help-para">
If the last field in the list has the form <code>exp</code> and the expression is a
function call, then all values returned by the call enter the list
consecutively (see <a href="/neovim-docs-web/en/luaref#luaref-langFuncCalls">luaref-langFuncCalls</a>). To avoid this, enclose the function
call in parentheses (see <a href="/neovim-docs-web/en/luaref#luaref-langExpressions">luaref-langExpressions</a>).

</div>
<div class="help-para">
The field list may have an optional trailing separator, as a convenience for
machine-generated code.

</div>
<div class="help-para">
<h3 class="help-heading">2.5.8  Function Calls<span class="help-heading-tags">                     <a name="luaref-function"></a><span class="help-tag">luaref-function</span> <a name="luaref-langFuncCalls"></a><span class="help-tag">luaref-langFuncCalls</span></span></h3>


</div>
<div class="help-para">
A function call in Lua has the following syntax:
<pre>functioncall ::= prefixexp args</pre>

</div>
<div class="help-para">
In a function call, first <code>prefixexp</code> and <code>args</code> are evaluated. If the value
of <code>prefixexp</code> has type <code>function</code>, then this function is called with the given
arguments. Otherwise, the <code>prefixexp</code> "call" metamethod is called, having as
first parameter the value of <code>prefixexp</code>, followed by the original call
arguments (see <a href="/neovim-docs-web/en/luaref#luaref-langMetatables">luaref-langMetatables</a>).

</div>
<div class="help-para">
The form
<pre>functioncall ::= prefixexp : Name args</pre>

</div>
<div class="help-para">
can be used to call "methods". A call <code>v:name(</code> <code>args</code> <code>)</code> is syntactic sugar
for <code>v.name(v,</code> <code>args</code> <code>)</code>, except that <code>v</code> is evaluated only once.

</div>
<div class="help-para">
Arguments have the following syntax:
<pre>args ::=  ( [ explist1 ] )
args ::= tableconstructor
args ::= String</pre>

</div>
<div class="help-para">
All argument expressions are evaluated before the call.  A call of the
form <code>f{</code> <code>fields</code> <code>}</code> is syntactic sugar for <code>f({</code> <code>fields</code> <code>})</code>, that is, the
argument list is a single new table. A call of the form <code>f'</code> <code>string</code> <code>'</code>
(or <code>f"</code> <code>string</code> <code>"</code> or <code>f[[</code> <code>string</code> <code>]]</code>) is syntactic sugar for
<code>f('</code> <code>string</code> <code>')</code>, that is, the argument list is a single literal string.

</div>
<div class="help-para">
As an exception to the free-format syntax of Lua, you cannot put a line break
before the <code>(</code> in a function call. This restriction avoids some ambiguities
in the language. If you write
<pre>a = f
(g).x(a)</pre>

</div>
<div class="help-para">
Lua would see that as a single statement, <code>a = f(g).x(a)</code>. So, if you want two
statements, you must add a semi-colon between them. If you actually want to
call <code>f</code>, you must remove the line break before <code>(g)</code>.

</div>
<div class="help-para">
                                                               <a name="luaref-tailcall"></a><code class="help-tag-right">luaref-tailcall</code>
A call of the form <code>return</code> <code>functioncall</code> is called a tail call. Lua
implements proper tail calls (or proper tail recursion): in a tail call, the
called function reuses the stack entry of the calling function. Therefore,
there is no limit on the number of nested tail calls that a program can
execute. However, a tail call erases any debug information about the calling
function. Note that a tail call only happens with a particular syntax, where
the <code>return</code> has one single function call as argument; this syntax makes the
calling function return exactly the returns of the called function. So, none
of the following examples are tail calls:
<pre>return (f(x))        -- results adjusted to 1
return 2 * f(x)
return x, f(x)       -- additional results
f(x); return         -- results discarded
return x or f(x)     -- results adjusted to 1</pre>

</div>
<div class="help-para">
<h3 class="help-heading">2.5.9  Function Definitions<span class="help-heading-tags">                                <a name="luaref-langFuncDefs"></a><span class="help-tag">luaref-langFuncDefs</span></span></h3>


</div>
<div class="help-para">
The syntax for function definition is
<pre>function ::= function funcbody
funcbody ::= ( [ parlist1 ] ) block end</pre>

</div>
<div class="help-para">
The following syntactic sugar simplifies function definitions:
<pre>stat ::= function funcname funcbody
stat ::= local function Name funcbody
funcname ::= Name { . Name } [ : Name ]</pre>

</div>
<div class="help-para">
The statement

</div>
<div class="help-para">
       <code>function f ()</code>  <code>body</code>  <code>end</code>

</div>
<div class="help-para">
translates to

</div>
<div class="help-para">
       <code>f = function ()</code>  <code>body</code>  <code>end</code>

</div>
<div class="help-para">
The statement

</div>
<div class="help-para">
       <code>function t.a.b.c.f ()</code>  <code>body</code>  <code>end</code>

</div>
<div class="help-para">
translates to

</div>
<div class="help-para">
       <code>t.a.b.c.f = function ()</code>  <code>body</code>  <code>end</code>

</div>
<div class="help-para">
The statement

</div>
<div class="help-para">
       <code>local function f ()</code>  <code>body</code>  <code>end</code>

</div>
<div class="help-para">
translates to

</div>
<div class="help-para">
       <code>local f; f = function f ()</code>  <code>body</code>  <code>end</code>

</div>
<div class="help-para">
not to

</div>
<div class="help-para">
       <code>local f = function f ()</code>  <code>body</code>  <code>end</code>

</div>
<div class="help-para">
(This only makes a difference when the body of the function contains
references to <code>f</code>.)

</div>
<div class="help-para">
                                                                <a name="luaref-closure"></a><code class="help-tag-right">luaref-closure</code>
A function definition is an executable expression, whose value has type
<code>function</code>. When Lua pre-compiles a chunk, all its function bodies are
pre-compiled too. Then, whenever Lua executes the function definition, the
function is instantiated (or closed). This function instance (or closure) is
the final value of the expression. Different instances of the same function
may refer to different external local variables and may have different
environment tables.

</div>
<div class="help-para">
Parameters act as local variables that are initialized with the argument
values:
<pre>parlist1 ::= namelist [ , ... ] | ...</pre>

</div>
<div class="help-para">
                                                                 <a name="luaref-vararg"></a><code class="help-tag-right">luaref-vararg</code>
When a function is called, the list of arguments is adjusted to the length of
the list of parameters, unless the function is a variadic or vararg function,
which is indicated by three dots (<code>...</code>) at the end of its parameter list. A
vararg function does not adjust its argument list; instead, it collects all
extra arguments and supplies them to the function through a vararg expression,
which is also written as three dots. The value of this expression is a list of
all actual extra arguments, similar to a function with multiple results. If a
vararg expression is used inside another expression or in the middle of a list
of expressions, then its return list is adjusted to one element. If the
expression is used as the last element of a list of expressions, then no
adjustment is made (unless the call is enclosed in parentheses).

</div>
<div class="help-para">
As an example, consider the following definitions:
<pre>function f(a, b) end
function g(a, b, ...) end
function r() return 1,2,3 end</pre>

</div>
<div class="help-para">
Then, we have the following mapping from arguments to parameters and to the
vararg expression:
<pre>CALL            PARAMETERS

f(3)             a=3, b=nil
f(3, 4)          a=3, b=4
f(3, 4, 5)       a=3, b=4
f(r(), 10)       a=1, b=10
f(r())           a=1, b=2

g(3)             a=3, b=nil, ... --&gt;  (nothing)
g(3, 4)          a=3, b=4,   ... --&gt;  (nothing)
g(3, 4, 5, 8)    a=3, b=4,   ... --&gt;  5  8
g(5, r())        a=5, b=1,   ... --&gt;  2  3</pre>

</div>
<div class="help-para">
Results are returned using the <code>return</code> statement (see <a href="/neovim-docs-web/en/luaref#luaref-langContStructs">luaref-langContStructs</a>).
If control reaches the end of a function without encountering
a <code>return</code> statement, then the function returns with no results.

</div>
<div class="help-para">
                                                            <a name="luaref-colonsyntax"></a><code class="help-tag-right">luaref-colonsyntax</code>
The colon syntax is used for defining methods, that is, functions that have an
implicit extra parameter <code>self</code>. Thus, the statement

</div>
<div class="help-para">
       <code>function t.a.b.c:f (</code>  <code>params</code>  <code>)</code>  <code>body</code>  <code>end</code>

</div>
<div class="help-para">
is syntactic sugar for

</div>
<div class="help-para">
       <code>t.a.b.c:f = function (self, (</code>  <code>params</code>  <code>)</code>  <code>body</code>  <code>end</code>

</div>
<div class="help-para">
<h2 class="help-heading">2.6  Visibility Rules<span class="help-heading-tags">                                    <a name="luaref-langVisibRules"></a><span class="help-tag">luaref-langVisibRules</span></span></h2>


</div>
<div class="help-para">
Lua is a lexically scoped language. The scope of variables begins at the first
statement after their declaration and lasts until the end of the innermost
block that includes the declaration. Consider the following example:
<pre>x = 10                -- global variable
do                    -- new block
  local x = x         -- new `x`, with value 10
  print(x)            --&gt; 10
  x = x+1
  do                  -- another block
    local x = x+1     -- another `x`
    print(x)          --&gt; 12
  end
  print(x)            --&gt; 11
end
print(x)              --&gt; 10  (the global one)</pre>

</div>
<div class="help-para">
Notice that, in a declaration like <code>local x = x</code>, the new <code>x</code> being declared is
not in scope yet, and so the second <code>x</code> refers to the outside variable.

</div>
<div class="help-para">
                                                                <a name="luaref-upvalue"></a><code class="help-tag-right">luaref-upvalue</code>
Because of the lexical scoping rules, local variables can be freely accessed
by functions defined inside their scope. A local variable used by an inner
function is called an upvalue, or external local variable, inside the inner
function.

</div>
<div class="help-para">
Notice that each execution of a local statement defines new local variables.
Consider the following example:
<pre>a = {}
local x = 20
for i=1,10 do
  local y = 0
  a[i] = function () y=y+1; return x+y end
end</pre>

</div>
<div class="help-para">
The loop creates ten closures (that is, ten instances of the anonymous
function). Each of these closures uses a different <code>y</code> variable, while all of
them share the same <code>x</code>.

</div>
<div class="help-para">
<h2 class="help-heading">2.7  Error Handling<span class="help-heading-tags">                                           <a name="luaref-langError"></a><span class="help-tag">luaref-langError</span></span></h2>


</div>
<div class="help-para">
Because Lua is an embedded extension language, all Lua actions start from
C code in the host program calling a function from the Lua library (see
<a href="/neovim-docs-web/en/luaref#lua_pcall()">lua_pcall()</a>). Whenever an error occurs during Lua compilation or
execution, control returns to C, which can take appropriate measures (such as
print an error message).

</div>
<div class="help-para">
Lua code can explicitly generate an error by calling the <code>error</code> function (see
<a href="/neovim-docs-web/en/luaref#luaref-error()">luaref-error()</a>). If you need to catch errors in Lua, you can use
the <code>pcall</code> function (see <a href="/neovim-docs-web/en/luaref#luaref-pcall()">luaref-pcall()</a>).

</div>
<div class="help-para">
<h2 class="help-heading">2.8  Metatables<span class="help-heading-tags">                         <a name="luaref-metatable"></a><span class="help-tag">luaref-metatable</span> <a name="luaref-langMetatables"></a><span class="help-tag">luaref-langMetatables</span></span></h2>


</div>
<div class="help-para">
Every value in Lua may have a metatable. This metatable is an ordinary Lua
table that defines the behavior of the original table and userdata under
certain special operations. You can change several aspects of the behavior of
an object by setting specific fields in its metatable. For instance, when a
non-numeric value is the operand of an addition, Lua checks for a function in
the field <code>"__add"</code> in its metatable. If it finds one, Lua calls that function
to perform the addition.

</div>
<div class="help-para">
We call the keys in a metatable events and the values metamethods. In the
previous example, the event is "add" and the metamethod is the function that
performs the addition.

</div>
<div class="help-para">
You can query the metatable of any value through the <code>getmetatable</code> function
(see <a href="/neovim-docs-web/en/luaref#luaref-getmetatable()">luaref-getmetatable()</a>).

</div>
<div class="help-para">
You can replace the metatable of tables through the <code>setmetatable</code> function (see
<a href="/neovim-docs-web/en/luaref#luaref-setmetatable()">luaref-setmetatable()</a>). You cannot change the metatable of other types from Lua
(except using the debug library); you must use the C API for that.

</div>
<div class="help-para">
Tables and userdata have individual metatables (although multiple tables and
userdata can share a same table as their metatable); values of all other types
share one single metatable per type. So, there is one single metatable for all
numbers, and for all strings, etc.

</div>
<div class="help-para">
A metatable may control how an object behaves in arithmetic operations, order
comparisons, concatenation, length operation, and indexing. A metatable can
also define a function to be called when a userdata is garbage collected. For
each of those operations Lua associates a specific key called an event. When
Lua performs one of those operations over a value, it checks whether this
value has a metatable with the corresponding event. If so, the value
associated with that key (the metamethod) controls how Lua will perform the
operation.

</div>
<div class="help-para">
Metatables control the operations listed next. Each operation is identified by
its corresponding name. The key for each operation is a string with its name
prefixed by two underscores, <code>__</code>; for instance, the key for operation "add"
is the string "__add". The semantics of these operations is better explained
by a Lua function describing how the interpreter executes that operation.

</div>
<div class="help-para">
The code shown here in Lua is only illustrative; the real behavior is hard
coded in the interpreter and it is much more efficient than this simulation.
All functions used in these descriptions (<code>rawget</code>, <code>tonumber</code>, etc.) are
described in <a href="/neovim-docs-web/en/luaref#luaref-libBasic">luaref-libBasic</a>. In particular, to retrieve the metamethod of a
given object, we use the expression
<pre>metatable(obj)[event]</pre>

</div>
<div class="help-para">
This should be read as
<pre>rawget(metatable(obj) or {}, event)</pre>

</div>
<div class="help-para">
That is, the access to a metamethod does not invoke other metamethods, and the
access to objects with no metatables does not fail (it simply results
in <code>nil</code>).

</div>
<div class="help-para">
"add":                                                                 <a name="__add()"></a><code class="help-tag-right">__add()</code>
------
the <code>+</code> operation.

</div>
<div class="help-para">
The function <code>getbinhandler</code> below defines how Lua chooses a handler for a
binary operation. First, Lua tries the first operand. If its type does not
define a handler for the operation, then Lua tries the second operand.
<pre>function getbinhandler (op1, op2, event)
  return metatable(op1)[event] or metatable(op2)[event]
end</pre>

</div>
<div class="help-para">
By using this function, the behavior of the <code>op1 + op2</code> is
<pre>function add_event (op1, op2)
  local o1, o2 = tonumber(op1), tonumber(op2)
  if o1 and o2 then  -- both operands are numeric?
    return o1 + o2   -- `+` here is the primitive `add`
  else  -- at least one of the operands is not numeric
    local h = getbinhandler(op1, op2, "__add")
    if h then
      -- call the handler with both operands
      return h(op1, op2)
    else  -- no handler available: default behavior
      error(...)
    end
  end
end</pre>

</div>
<div class="help-para">
"sub":                                                                 <a name="__sub()"></a><code class="help-tag-right">__sub()</code>
------
the <code>-</code> operation. Behavior similar to the "add" operation.

</div>
<div class="help-para">
"mul":                                                                 <a name="__mul()"></a><code class="help-tag-right">__mul()</code>
------
the <code>*</code> operation. Behavior similar to the "add" operation.

</div>
<div class="help-para">
"div":                                                                 <a name="__div()"></a><code class="help-tag-right">__div()</code>
------
the <code>/</code> operation. Behavior similar to the "add" operation.

</div>
<div class="help-para">
"mod":                                                                 <a name="__mod()"></a><code class="help-tag-right">__mod()</code>
------
the <code>%</code> operation. Behavior similar to the "add" operation, with the
operation <code>o1 - floor(o1/o2)*o2</code> as the primitive operation.

</div>
<div class="help-para">
"pow":                                                                 <a name="__pow()"></a><code class="help-tag-right">__pow()</code>
------
the <code>^</code> (exponentiation) operation. Behavior similar to the "add" operation,
with the function <code>pow</code> (from the C math library) as the primitive operation.

</div>
<div class="help-para">
"unm":                                                                 <a name="__unm()"></a><code class="help-tag-right">__unm()</code>
------
the unary <code>-</code> operation.
<pre>function unm_event (op)
  local o = tonumber(op)
  if o then  -- operand is numeric?
    return -o  -- `-` here is the primitive `unm`
  else  -- the operand is not numeric.
    -- Try to get a handler from the operand
    local h = metatable(op).__unm
    if h then
      -- call the handler with the operand
      return h(op)
    else  -- no handler available: default behavior
      error(...)
    end
  end
end</pre>

</div>
<div class="help-para">
"concat":                                                           <a name="__concat()"></a><code class="help-tag-right">__concat()</code>
---------
the <code>..</code> (concatenation) operation.
<pre>function concat_event (op1, op2)
  if (type(op1) == "string" or type(op1) == "number") and
     (type(op2) == "string" or type(op2) == "number") then
    return op1 .. op2  -- primitive string concatenation
  else
    local h = getbinhandler(op1, op2, "__concat")
    if h then
      return h(op1, op2)
    else
      error(...)
    end
  end
end</pre>

</div>
<div class="help-para">
"len":                                                                 <a name="__len()"></a><code class="help-tag-right">__len()</code>
------
the <code>#</code> operation.
<pre>function len_event (op)
  if type(op) == "string" then
    return strlen(op)         -- primitive string length
  elseif type(op) == "table" then
    return #op                -- primitive table length
  else
    local h = metatable(op).__len
    if h then
      -- call the handler with the operand
      return h(op)
    else  -- no handler available: default behavior
      error(...)
    end
  end
end</pre>

</div>
<div class="help-para">
"eq":                                                                   <a name="__eq()"></a><code class="help-tag-right">__eq()</code>
-----
the <code>==</code> operation.

</div>
<div class="help-para">
The function <code>getcomphandler</code> defines how Lua chooses a metamethod for
comparison operators. A metamethod only is selected when both objects being
compared have the same type and the same metamethod for the selected
operation.
<pre>function getcomphandler (op1, op2, event)
  if type(op1) ~= type(op2) then return nil end
  local mm1 = metatable(op1)[event]
  local mm2 = metatable(op2)[event]
  if mm1 == mm2 then return mm1 else return nil end
end</pre>

</div>
<div class="help-para">
The "eq" event is defined as follows:
<pre>function eq_event (op1, op2)
  if type(op1) ~= type(op2) then  -- different types?
    return false   -- different objects
  end
  if op1 == op2 then   -- primitive equal?
    return true   -- objects are equal
  end
  -- try metamethod
  local h = getcomphandler(op1, op2, "__eq")
  if h then
    return h(op1, op2)
  else
    return false
  end
end</pre>

</div>
<div class="help-para">
<code>a ~= b</code> is equivalent to <code>not (a == b)</code>.

</div>
<div class="help-para">
"lt":                                                                   <a name="__lt()"></a><code class="help-tag-right">__lt()</code>
-----
the <code>&lt;</code> operation.
<pre>function lt_event (op1, op2)
  if type(op1) == "number" and type(op2) == "number" then
    return op1 &lt; op2   -- numeric comparison
  elseif type(op1) == "string" and type(op2) == "string" then
    return op1 &lt; op2   -- lexicographic comparison
  else
    local h = getcomphandler(op1, op2, "__lt")
    if h then
      return h(op1, op2)
    else
      error(...);
    end
  end
end</pre>

</div>
<div class="help-para">
<code>a &gt; b</code> is equivalent to <code>b &lt; a</code>.

</div>
<div class="help-para">
"le":                                                                   <a name="__le()"></a><code class="help-tag-right">__le()</code>
-----
the <code>&lt;=</code> operation.
<pre>function le_event (op1, op2)
  if type(op1) == "number" and type(op2) == "number" then
    return op1 &lt;= op2   -- numeric comparison
  elseif type(op1) == "string" and type(op2) == "string" then
    return op1 &lt;= op2   -- lexicographic comparison
  else
    local h = getcomphandler(op1, op2, "__le")
    if h then
      return h(op1, op2)
    else
      h = getcomphandler(op1, op2, "__lt")
      if h then
        return not h(op2, op1)
      else
        error(...);
      end
    end
  end
end</pre>

</div>
<div class="help-para">
<code>a &gt;= b</code> is equivalent to <code>b &lt;= a</code>. Note that, in the absence of a "le"
metamethod, Lua tries the "lt", assuming that <code>a &lt;= b</code> is equivalent
to <code>not (b &lt; a)</code>.

</div>
<div class="help-para">
"index":                                                             <a name="__index()"></a><code class="help-tag-right">__index()</code>
--------
The indexing access <code>table[key]</code>.
<pre>function gettable_event (table, key)
  local h
  if type(table) == "table" then
    local v = rawget(table, key)
    if v ~= nil then return v end
    h = metatable(table).__index
    if h == nil then return nil end
  else
    h = metatable(table).__index
    if h == nil then
      error(...);
    end
  end
  if type(h) == "function" then
    return h(table, key)      -- call the handler
  else return h[key]          -- or repeat operation on it
end</pre>

</div>
<div class="help-para">
"newindex":                                                       <a name="__newindex()"></a><code class="help-tag-right">__newindex()</code>
-----------
The indexing assignment <code>table[key] = value</code>.
<pre>function settable_event (table, key, value)
  local h
  if type(table) == "table" then
    local v = rawget(table, key)
    if v ~= nil then rawset(table, key, value); return end
    h = metatable(table).__newindex
    if h == nil then rawset(table, key, value); return end
  else
    h = metatable(table).__newindex
    if h == nil then
      error(...);
    end
  end
  if type(h) == "function" then
    return h(table, key,value)    -- call the handler
  else h[key] = value             -- or repeat operation on it
end</pre>

</div>
<div class="help-para">
"call":                                                               <a name="__call()"></a><code class="help-tag-right">__call()</code>
-------
called when Lua calls a value.
<pre>function function_event (func, ...)
  if type(func) == "function" then
    return func(...)   -- primitive call
  else
    local h = metatable(func).__call
    if h then
      return h(func, ...)
    else
      error(...)
    end
  end
end</pre>

</div>
<div class="help-para">
<h2 class="help-heading">2.9  Environments<span class="help-heading-tags">                   <a name="luaref-environment"></a><span class="help-tag">luaref-environment</span> <a name="luaref-langEnvironments"></a><span class="help-tag">luaref-langEnvironments</span></span></h2>


</div>
<div class="help-para">
Besides metatables, objects of types thread, function, and userdata have
another table associated with them, called their environment. Like metatables,
environments are regular tables and multiple objects can share the same
environment.

</div>
<div class="help-para">
Environments associated with userdata have no meaning for Lua. It is only a
convenience feature for programmers to associate a table to a userdata.

</div>
<div class="help-para">
Environments associated with threads are called global environments. They are
used as the default environment for their threads and non-nested functions
created by the thread (through <code>loadfile</code> <a href="/neovim-docs-web/en/luaref#luaref-loadfile()">luaref-loadfile()</a>, <code>loadstring</code>
<a href="/neovim-docs-web/en/luaref#luaref-loadstring()">luaref-loadstring()</a> or <code>load</code> <a href="/neovim-docs-web/en/luaref#luaref-load()">luaref-load()</a>) and can be directly accessed by C
code (see <a href="/neovim-docs-web/en/luaref#luaref-apiPseudoIndices">luaref-apiPseudoIndices</a>).

</div>
<div class="help-para">
Environments associated with C functions can be directly accessed by C code
(see <a href="/neovim-docs-web/en/luaref#luaref-apiPseudoIndices">luaref-apiPseudoIndices</a>). They are used as the default environment for
other C functions created by the function.

</div>
<div class="help-para">
Environments associated with Lua functions are used to resolve all accesses to
global variables within the function (see <a href="/neovim-docs-web/en/luaref#luaref-langVariables">luaref-langVariables</a>). They are
used as the default environment for other Lua functions created by the
function.

</div>
<div class="help-para">
You can change the environment of a Lua function or the running thread by
calling <code>setfenv</code>. You can get the environment of a Lua function or the
running thread by calling <code>getfenv</code> (see <a href="/neovim-docs-web/en/luaref#lua_getfenv()">lua_getfenv()</a>). To manipulate the
environment of other objects (userdata, C functions, other threads) you must
use the C API.

</div>
<div class="help-para">
<h2 class="help-heading">2.10  Garbage Collection<span class="help-heading-tags">                                         <a name="luaref-langGC"></a><span class="help-tag">luaref-langGC</span></span></h2>


</div>
<div class="help-para">
Lua performs automatic memory management. This means that you do not have to
worry neither about allocating memory for new objects nor about freeing it
when the objects are no longer needed. Lua manages memory automatically by
running a garbage collector from time to time to collect all dead objects
(that is, these objects that are no longer accessible from Lua). All objects
in Lua are subject to automatic management: tables, userdata, functions,
threads, and strings.

</div>
<div class="help-para">
Lua implements an incremental mark-and-sweep collector. It uses two numbers to
control its garbage-collection cycles: the garbage-collector pause and the
garbage-collector step multiplier.

</div>
<div class="help-para">
The garbage-collector pause controls how long the collector waits before
starting a new cycle. Larger values make the collector less aggressive. Values
smaller than 1 mean the collector will not wait to start a new cycle. A value
of 2 means that the collector waits for the total memory in use to double
before starting a new cycle.

</div>
<div class="help-para">
The step multiplier controls the relative speed of the collector relative to
memory allocation. Larger values make the collector more aggressive but also
increase the size of each incremental step. Values smaller than 1 make the
collector too slow and may result in the collector never finishing a cycle.
The default, 2, means that the collector runs at "twice" the speed of memory
allocation.

</div>
<div class="help-para">
You can change these numbers by calling <code>lua_gc</code> (see <a href="/neovim-docs-web/en/luaref#lua_gc()">lua_gc()</a>) in C or
<code>collectgarbage</code> (see <a href="/neovim-docs-web/en/luaref#luaref-collectgarbage()">luaref-collectgarbage()</a>) in Lua. Both get percentage
points as arguments (so an argument of 100 means a real value of 1). With
these functions you can also control the collector directly (e.g., stop and
restart it).

</div>
<div class="help-para">
<h3 class="help-heading">2.10.1  Garbage-Collection Metamethods<span class="help-heading-tags">                       <a name="luaref-langGCMeta"></a><span class="help-tag">luaref-langGCMeta</span></span></h3>


</div>
<div class="help-para">
Using the C API, you can set garbage-collector metamethods for userdata (see
<a href="/neovim-docs-web/en/luaref#luaref-langMetatables">luaref-langMetatables</a>). These metamethods are also called finalizers.
Finalizers allow you to coordinate Lua's garbage collection with external
resource management (such as closing files, network or database connections,
or freeing your own memory).

</div>
<div class="help-para">
                                                                          <a name="__gc"></a><code class="help-tag-right">__gc</code>
Garbage userdata with a field <code>__gc</code> in their metatables are not collected
immediately by the garbage collector. Instead, Lua puts them in a list. After
the collection, Lua does the equivalent of the following function for each
userdata in that list:
<pre>function gc_event (udata)
  local h = metatable(udata).__gc
  if h then
    h(udata)
  end
end</pre>

</div>
<div class="help-para">
At the end of each garbage-collection cycle, the finalizers for userdata are
called in reverse order of their creation, among these collected in that
cycle. That is, the first finalizer to be called is the one associated with
the userdata created last in the program.

</div>
<div class="help-para">
<h3 class="help-heading">2.10.2 - Weak Tables<span class="help-heading-tags">                    <a name="luaref-weaktable"></a><span class="help-tag">luaref-weaktable</span> <a name="luaref-langWeaktables"></a><span class="help-tag">luaref-langWeaktables</span></span></h3>


</div>
<div class="help-para">
A weak table is a table whose elements are weak references. A weak reference
is ignored by the garbage collector. In other words, if the only references to
an object are weak references, then the garbage collector will collect this
object.

</div>
<div class="help-para">
                                                                        <a name="__mode"></a><code class="help-tag-right">__mode</code>
A weak table can have weak keys, weak values, or both. A table with weak keys
allows the collection of its keys, but prevents the collection of its values.
A table with both weak keys and weak values allows the collection of both keys
and values. In any case, if either the key or the value is collected, the
whole pair is removed from the table. The weakness of a table is controlled by
the value of the <code>__mode</code> field of its metatable. If the <code>__mode</code> field is a
string containing the character <code>k</code>, the keys in the table are weak.
If <code>__mode</code> contains <code>v</code>, the values in the table are weak.

</div>
<div class="help-para">
After you use a table as a metatable, you should not change the value of its
field <code>__mode</code>. Otherwise, the weak behavior of the tables controlled by this
metatable is undefined.

</div>
<div class="help-para">
<h2 class="help-heading">2.11  Coroutines<span class="help-heading-tags">                              <a name="luaref-coroutine"></a><span class="help-tag">luaref-coroutine</span> <a name="luaref-langCoro"></a><span class="help-tag">luaref-langCoro</span></span></h2>


</div>
<div class="help-para">
Lua supports coroutines, also called collaborative multithreading. A coroutine
in Lua represents an independent thread of execution. Unlike threads in
multithread systems, however, a coroutine only suspends its execution by
explicitly calling a yield function.

</div>
<div class="help-para">
You create a coroutine with a call to <code>coroutine.create</code> (see
<a href="/neovim-docs-web/en/luaref#coroutine.create()">coroutine.create()</a>). Its sole argument is a function that is the main
function of the coroutine. The <code>create</code> function only creates a new coroutine
and returns a handle to it (an object of type <code>thread</code>); it does not start the
coroutine execution.

</div>
<div class="help-para">
When you first call <code>coroutine.resume</code> (see <a href="/neovim-docs-web/en/luaref#coroutine.resume()">coroutine.resume()</a>),
passing as its first argument the thread returned by <code>coroutine.create</code>, the
coroutine starts its execution, at the first line of its main function. Extra
arguments passed to <code>coroutine.resume</code> are passed on to the coroutine main
function. After the coroutine starts running, it runs until it terminates or
<code>yields</code>.

</div>
<div class="help-para">
A coroutine can terminate its execution in two ways: normally, when its main
function returns (explicitly or implicitly, after the last instruction); and
abnormally, if there is an unprotected error. In the first case,
<code>coroutine.resume</code> returns <code>true</code>, plus any values returned by the coroutine
main function. In case of errors, <code>coroutine.resume</code> returns <code>false</code> plus an
error message.

</div>
<div class="help-para">
A coroutine yields by calling <code>coroutine.yield</code> (see
<a href="/neovim-docs-web/en/luaref#coroutine.yield()">coroutine.yield()</a>). When a coroutine yields, the corresponding
<code>coroutine.resume</code> returns immediately, even if the yield happens inside
nested function calls (that is, not in the main function, but in a function
directly or indirectly called by the main function). In the case of a yield,
<code>coroutine.resume</code> also returns <code>true</code>, plus any values passed to
<code>coroutine.yield</code>. The next time you resume the same coroutine, it continues
its execution from the point where it yielded, with the call to
<code>coroutine.yield</code> returning any extra arguments passed to <code>coroutine.resume</code>.

</div>
<div class="help-para">
Like <code>coroutine.create</code>, the <code>coroutine.wrap</code> function (see
<a href="/neovim-docs-web/en/luaref#coroutine.wrap()">coroutine.wrap()</a>) also creates a coroutine, but instead of returning
the coroutine itself, it returns a function that, when called, resumes the
coroutine. Any arguments passed to this function go as extra arguments to
<code>coroutine.resume</code>. <code>coroutine.wrap</code> returns all the values returned by
<code>coroutine.resume</code>, except the first one (the boolean error code). Unlike
<code>coroutine.resume</code>, <code>coroutine.wrap</code> does not catch errors; any error is
propagated to the caller.

</div>
<div class="help-para">
As an example, consider the next code:
<pre>function foo1 (a)
  print("foo", a)
  return coroutine.yield(2*a)
end

co = coroutine.create(function (a,b)
      print("co-body", a, b)
      local r = foo1(a+1)
      print("co-body", r)
      local r, s = coroutine.yield(a+b, a-b)
      print("co-body", r, s)
      return b, "end"
end)

print("main", coroutine.resume(co, 1, 10))
print("main", coroutine.resume(co, "r"))
print("main", coroutine.resume(co, "x", "y"))
print("main", coroutine.resume(co, "x", "y"))</pre>

</div>
<div class="help-para">
When you run it, it produces the following output:
<pre>co-body 1       10
foo     2
main    true    4
co-body r
main    true    11      -9
co-body x       y
main    true    10      end
main    false   cannot resume dead coroutine</pre>

</div>
<div class="help-para">
<h2 class="help-heading">3  THE APPLICATION PROGRAM INTERFACE<span class="help-heading-tags">                                <a name="luaref-API"></a><span class="help-tag">luaref-API</span></span></h2>


</div>
<div class="help-para">
This section describes the C API for Lua, that is, the set of C functions
available to the host program to communicate with Lua. All API functions and
related types and constants are declared in the header file <code>lua.h</code>.

</div>
<div class="help-para">
Even when we use the term "function", any facility in the API may be provided
as a <code>macro</code> instead. All such macros use each of its arguments exactly once
(except for the first argument, which is always a Lua state), and so do not
generate hidden side-effects.

</div>
<div class="help-para">
As in most C libraries, the Lua API functions do not check their arguments for
validity or consistency. However, you can change this behavior by compiling
Lua with a proper definition for the macro <code>luai_apicheck</code>,in file
<code>luaconf.h</code>.

</div>
<div class="help-para">
<h2 class="help-heading">3.1  The Stack<span class="help-heading-tags">                                    <a name="luaref-stack"></a><span class="help-tag">luaref-stack</span> <a name="luaref-apiStack"></a><span class="help-tag">luaref-apiStack</span></span></h2>


</div>
<div class="help-para">
Lua uses a virtual stack to pass values to and from C. Each element in this
stack represents a Lua value (<code>nil</code>, number, string, etc.).

</div>
<div class="help-para">
Whenever Lua calls C, the called function gets a new stack, which is
independent of previous stacks and of stacks of C functions that are still
active. This stack initially contains any arguments to the C function and it
is where the C function pushes its results to be returned to the caller (see
<a href="/neovim-docs-web/en/luaref#lua_CFunction()">lua_CFunction()</a>).

</div>
<div class="help-para">
                                                             <a name="luaref-stackindex"></a><code class="help-tag-right">luaref-stackindex</code>
For convenience, most query operations in the API do not follow a strict stack
discipline. Instead, they can refer to any element in the stack by using an
index: a positive index represents an absolute stack position (starting at 1);
a negative index represents an offset from the top of the stack. More
specifically, if the stack has <code>n</code> elements, then index 1 represents the first
element (that is, the element that was pushed onto the stack first) and index
<code>n</code> represents the last element; index <code>-1</code> also represents the last element
(that is, the element at the top) and index <code>-n</code> represents the first element.
We say that an index is valid if it lies between 1 and the stack top (that is,
if <code>1 &lt;= abs(index) &lt;= top</code>).

</div>
<div class="help-para">
<h2 class="help-heading">3.2  Stack Size<span class="help-heading-tags">                                            <a name="luaref-apiStackSize"></a><span class="help-tag">luaref-apiStackSize</span></span></h2>


</div>
<div class="help-para">
When you interact with Lua API, you are responsible for ensuring consistency.
In particular, you are responsible for controlling stack overflow. You can
use the function <code>lua_checkstack</code> to grow the stack size (see
<a href="/neovim-docs-web/en/luaref#lua_checkstack()">lua_checkstack()</a>).

</div>
<div class="help-para">
Whenever Lua calls C, it ensures that at least <code>LUA_MINSTACK</code> stack positions
are available. <code>LUA_MINSTACK</code> is defined as 20, so that usually you do not
have to worry about stack space unless your code has loops pushing elements
onto the stack.

</div>
<div class="help-para">
Most query functions accept as indices any value inside the available stack
space, that is, indices up to the maximum stack size you have set through
<code>lua_checkstack</code>. Such indices are called acceptable indices. More formally,
we define an acceptable index as follows:
<pre>(index &lt; 0 &amp;&amp; abs(index) &lt;= top) || (index &gt; 0 &amp;&amp; index &lt;= stackspace)</pre>

</div>
<div class="help-para">
Note that 0 is never an acceptable index.

</div>
<div class="help-para">
<h2 class="help-heading">3.3  Pseudo-Indices<span class="help-heading-tags">                 <a name="luaref-pseudoindex"></a><span class="help-tag">luaref-pseudoindex</span> <a name="luaref-apiPseudoIndices"></a><span class="help-tag">luaref-apiPseudoIndices</span></span></h2>


</div>
<div class="help-para">
Unless otherwise noted, any function that accepts valid indices can also be
called with pseudo-indices, which represent some Lua values that are
accessible to the C code but which are not in the stack. Pseudo-indices are
used to access the thread environment, the function environment, the registry,
and the upvalues of a C function (see <a href="/neovim-docs-web/en/luaref#luaref-apiCClosures">luaref-apiCClosures</a>).

</div>
<div class="help-para">
The thread environment (where global variables live) is always at pseudo-index
<code>LUA_GLOBALSINDEX</code>. The environment of the running C function is always at
pseudo-index <code>LUA_ENVIRONINDEX</code>.

</div>
<div class="help-para">
To access and change the value of global variables, you can use regular table
operations over an environment table. For instance, to access the value of a
global variable, do
<pre>lua_getfield(L, LUA_GLOBALSINDEX, varname);</pre>

</div>
<div class="help-para">
<h2 class="help-heading">3.4  C Closures<span class="help-heading-tags">                            <a name="luaref-cclosure"></a><span class="help-tag">luaref-cclosure</span> <a name="luaref-apiCClosures"></a><span class="help-tag">luaref-apiCClosures</span></span></h2>


</div>
<div class="help-para">
When a C function is created, it is possible to associate some values with it,
thus creating a C closure; these values are called upvalues and are accessible
to the function whenever it is called (see <a href="/neovim-docs-web/en/luaref#lua_pushcclosure()">lua_pushcclosure()</a>).

</div>
<div class="help-para">
Whenever a C function is called, its upvalues are located at specific
pseudo-indices. These pseudo-indices are produced by the macro
<code>lua_upvalueindex</code>. The first value associated with a function is at position
<code>lua_upvalueindex(1)</code>, and so on. Any access to <code>lua_upvalueindex(</code> <code>n</code> <code>)</code>,
where <code>n</code> is greater than the number of upvalues of the current function,
produces an acceptable (but invalid) index.

</div>
<div class="help-para">
<h2 class="help-heading">3.5  Registry<span class="help-heading-tags">                               <a name="luaref-registry"></a><span class="help-tag">luaref-registry</span> <a name="luaref-apiRegistry"></a><span class="help-tag">luaref-apiRegistry</span></span></h2>


</div>
<div class="help-para">
Lua provides a registry, a pre-defined table that can be used by any C code to
store whatever Lua value it needs to store. This table is always located at
pseudo-index <code>LUA_REGISTRYINDEX</code>. Any C library can store data into this
table, but it should take care to choose keys different from those used by
other libraries, to avoid collisions. Typically, you should use as key a
string containing your library name or a light userdata with the address of a
C object in your code.

</div>
<div class="help-para">
The integer keys in the registry are used by the reference mechanism,
implemented by the auxiliary library, and therefore should not be used for
other purposes.

</div>
<div class="help-para">
<h2 class="help-heading">3.6  Error Handling in C<span class="help-heading-tags">                                       <a name="luaref-apiError"></a><span class="help-tag">luaref-apiError</span></span></h2>


</div>
<div class="help-para">
Internally, Lua uses the C <code>longjmp</code> facility to handle errors. (You can also
choose to use exceptions if you use C++; see file <code>luaconf.h</code>.) When Lua faces
any error (such as memory allocation errors, type errors, syntax errors, and
runtime errors) it raises an error; that is, it does a long jump. A protected
environment uses <code>setjmp</code> to set a recover point; any error jumps to the most
recent active recover point.

</div>
<div class="help-para">
Almost any function in the API may raise an error, for instance due to a
memory allocation error. The following functions run in protected mode (that
is, they create a protected environment to run), so they never raise an error:
<code>lua_newstate</code>, <code>lua_close</code>, <code>lua_load</code>, <code>lua_pcall</code>, and <code>lua_cpcall</code> (see
<a href="/neovim-docs-web/en/luaref#lua_newstate()">lua_newstate()</a>, <a href="/neovim-docs-web/en/luaref#lua_close()">lua_close()</a>, <a href="/neovim-docs-web/en/luaref#lua_load()">lua_load()</a>,
<a href="/neovim-docs-web/en/luaref#lua_pcall()">lua_pcall()</a>, and <a href="/neovim-docs-web/en/luaref#lua_cpcall()">lua_cpcall()</a>).

</div>
<div class="help-para">
Inside a C function you can raise an error by calling <code>lua_error</code>  (see
<a href="/neovim-docs-web/en/luaref#lua_error()">lua_error()</a>).

</div>
<div class="help-para">
<h2 class="help-heading">3.7  Functions and Types<span class="help-heading-tags">                                   <a name="luaref-apiFunctions"></a><span class="help-tag">luaref-apiFunctions</span></span></h2>


</div>
<div class="help-para">
Here we list all functions and types from the C API in alphabetical order.

</div>
<div class="help-para">
lua_Alloc                                                          <a name="lua_Alloc()"></a><code class="help-tag-right">lua_Alloc()</code>
<pre>typedef void * (*lua_Alloc) (void *ud,
                             void *ptr,
                             size_t osize,
                             size_t nsize);</pre>

</div>
<div class="help-para">
        The type of the memory-allocation function used by Lua states. The
        allocator function must provide a functionality similar to <code>realloc</code>,
        but not exactly the same. Its arguments are <code>ud</code>, an opaque pointer
        passed to <code>lua_newstate</code> (see <a href="/neovim-docs-web/en/luaref#lua_newstate()">lua_newstate()</a>); <code>ptr</code>, a pointer
        to the block being allocated/reallocated/freed; <code>osize</code>, the original
        size of the block; <code>nsize</code>, the new size of the block. <code>ptr</code> is <code>NULL</code>
        if and only if <code>osize</code> is zero. When <code>nsize</code> is zero, the allocator
        must return <code>NULL</code>; if <code>osize</code> is not zero, it should free the block
        pointed to by <code>ptr</code>. When <code>nsize</code> is not zero, the allocator returns
        <code>NULL</code> if and only if it cannot fill the request. When <code>nsize</code> is not
        zero and <code>osize</code> is zero, the allocator should behave like <code>malloc</code>.
        When <code>nsize</code> and <code>osize</code> are not zero, the allocator behaves like
        <code>realloc</code>. Lua assumes that the allocator never fails whenosize &gt;=
        nsize`.

</div>
<div class="help-para">
        Here is a simple implementation for the allocator function. It is used
        in the auxiliary library by <code>luaL_newstate</code> (see
        <a href="/neovim-docs-web/en/luaref#luaL_newstate()">luaL_newstate()</a>).
<pre>static void *l_alloc (void *ud, void *ptr, size_t osize,
                                           size_t nsize) {
  (void)ud;  (void)osize;  /* not used */
  if (nsize == 0) {
    free(ptr);
    return NULL;
  }
  else
    return realloc(ptr, nsize);
}</pre>

</div>
<div class="help-para">
        This code assumes that <code>free(NULL)</code> has no effect and that
        <code>realloc(NULL, size)</code> is equivalent to <code>malloc(size)</code>. ANSI C ensures both
        behaviors.

</div>
<div class="help-para">
lua_atpanic                                                      <a name="lua_atpanic()"></a><code class="help-tag-right">lua_atpanic()</code>
<pre>lua_CFunction lua_atpanic (lua_State *L, lua_CFunction panicf);</pre>

</div>
<div class="help-para">
        Sets a new panic function and returns the old one.

</div>
<div class="help-para">
        If an error happens outside any protected environment, Lua calls a
        <code>panic</code> <code>function</code> and then calls <code>exit(EXIT_FAILURE)</code>, thus exiting
        the host application. Your panic function may avoid this exit by never
        returning (e.g., doing a long jump).

</div>
<div class="help-para">
        The panic function can access the error message at the top of the
        stack.

</div>
<div class="help-para">
lua_call                                                            <a name="lua_call()"></a><code class="help-tag-right">lua_call()</code>
<pre>void lua_call (lua_State *L, int nargs, int nresults);</pre>

</div>
<div class="help-para">
        Calls a function.

</div>
<div class="help-para">
        To call a function you must use the following protocol: first, the
        function to be called is pushed onto the stack; then, the arguments to
        the function are pushed in direct order; that is, the first argument
        is pushed first. Finally you call <code>lua_call</code>; <code>nargs</code> is the number of
        arguments that you pushed onto the stack. All arguments and the
        function value are popped from the stack when the function is called.
        The function results are pushed onto the stack when the function
        returns. The number of results is adjusted to <code>nresults</code>, unless
        <code>nresults</code> is <code>LUA_MULTRET</code>. In this case, <code>all</code> results from the
        function are pushed. Lua takes care that the returned values fit into
        the stack space. The function results are pushed onto the stack in
        direct order (the first result is pushed first), so that after the
        call the last result is on the top of the stack.

</div>
<div class="help-para">
        Any error inside the called function is propagated upwards (with a
        <code>longjmp</code>).

</div>
<div class="help-para">
        The following example shows how the host program may do the equivalent
        to this Lua code:
<pre>a = f("how", t.x, 14)</pre>

</div>
<div class="help-para">
        Here it is in C:
<pre>lua_getfield(L, LUA_GLOBALSINDEX, "f"); // function to be called
lua_pushstring(L, "how");                        // 1st argument
lua_getfield(L, LUA_GLOBALSINDEX, "t");   // table to be indexed
lua_getfield(L, -1, "x");        // push result of t.x (2nd arg)
lua_remove(L, -2);                  // remove 't' from the stack
lua_pushinteger(L, 14);                          // 3rd argument
lua_call(L, 3, 1);     // call 'f' with 3 arguments and 1 result
lua_setfield(L, LUA_GLOBALSINDEX, "a");        // set global 'a'</pre>

</div>
<div class="help-para">
        Note that the code above is "balanced": at its end, the stack is back
        to its original configuration. This is considered good programming
        practice.

</div>
<div class="help-para">
lua_CFunction                             <a name="luaref-cfunction"></a><code class="help-tag-right">luaref-cfunction</code> <a name="lua_CFunction()"></a><code class="help-tag">lua_CFunction()</code>
<pre>typedef int (*lua_CFunction) (lua_State *L);</pre>

</div>
<div class="help-para">
        Type for C functions.

</div>
<div class="help-para">
        In order to communicate properly with Lua, a C function must use the
        following protocol, which defines the way parameters and results are
        passed: a C function receives its arguments from Lua in its stack in
        direct order (the first argument is pushed first). So, when the
        function starts, <code>lua_gettop(L)</code> (see <a href="/neovim-docs-web/en/luaref#lua_gettop()">lua_gettop()</a>) returns the
        number of arguments received by the function. The first argument (if
        any) is at index 1 and its last argument is at index <code>lua_gettop(L)</code>.
        To return values to Lua, a C function just pushes them onto the stack,
        in direct order (the first result is pushed first), and returns the
        number of results. Any other value in the stack below the results will
        be properly discarded by Lua. Like a Lua function, a C function called
        by Lua can also return many results.

</div>
<div class="help-para">
                                                       <a name="luaref-cfunctionexample"></a><code class="help-tag-right">luaref-cfunctionexample</code>
        As an example, the following function receives a variable number of
        numerical arguments and returns their average and sum:
<pre>static int foo (lua_State *L) {
  int n = lua_gettop(L);    /* number of arguments */
  lua_Number sum = 0;
  int i;
  for (i = 1; i &amp;lt;= n; i++) {
    if (!lua_isnumber(L, i)) {
      lua_pushstring(L, "incorrect argument");
      lua_error(L);
    }
    sum += lua_tonumber(L, i);
  }
  lua_pushnumber(L, sum/n); /* first result */
  lua_pushnumber(L, sum);   /* second result */
  return 2;                 /* number of results */
}</pre>

</div>
<div class="help-para">
lua_checkstack                                                <a name="lua_checkstack()"></a><code class="help-tag-right">lua_checkstack()</code>
<pre>int lua_checkstack (lua_State *L, int extra);</pre>

</div>
<div class="help-para">
        Ensures that there are at least <code>extra</code> free stack slots in the stack.
        It returns false if it cannot grow the stack to that size. This
        function never shrinks the stack; if the stack is already larger than
        the new size, it is left unchanged.

</div>
<div class="help-para">
lua_close                                                          <a name="lua_close()"></a><code class="help-tag-right">lua_close()</code>
<pre>void lua_close (lua_State *L);</pre>

</div>
<div class="help-para">
        Destroys all objects in the given Lua state (calling the corresponding
        garbage-collection metamethods, if any) and frees all dynamic memory
        used by this state. On several platforms, you may not need to call
        this function, because all resources are naturally released when the
        host program ends. On the other hand, long-running programs, such as a
        daemon or a web server, might need to release states as soon as they
        are not needed, to avoid growing too large.

</div>
<div class="help-para">
lua_concat                                                        <a name="lua_concat()"></a><code class="help-tag-right">lua_concat()</code>
<pre>void lua_concat (lua_State *L, int n);</pre>

</div>
<div class="help-para">
        Concatenates the <code>n</code> values at the top of the stack, pops them, and
        leaves the result at the top. If <code>n</code> is 1, the result is the single
        string on the stack (that is, the function does nothing); if <code>n</code> is 0,
        the result is the empty string. Concatenation is done following the
        usual semantics of Lua (see <a href="/neovim-docs-web/en/luaref#luaref-langConcat">luaref-langConcat</a>).

</div>
<div class="help-para">
lua_cpcall                                                        <a name="lua_cpcall()"></a><code class="help-tag-right">lua_cpcall()</code>
<pre>int lua_cpcall (lua_State *L, lua_CFunction func, void *ud);</pre>

</div>
<div class="help-para">
        Calls the C function <code>func</code> in protected mode. <code>func</code> starts with only
        one element in its stack, a light userdata containing <code>ud</code>. In case of
        errors, <code>lua_cpcall</code> returns the same error codes as <code>lua_pcall</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_pcall()">lua_pcall()</a>), plus the error object on the top of the stack;
        otherwise, it returns zero, and does not change the stack. All values
        returned by <code>func</code> are discarded.

</div>
<div class="help-para">
lua_createtable                                              <a name="lua_createtable()"></a><code class="help-tag-right">lua_createtable()</code>
<pre>void lua_createtable (lua_State *L, int narr, int nrec);</pre>

</div>
<div class="help-para">
        Creates a new empty table and pushes it onto the stack. The new table
        has space pre-allocated for <code>narr</code> array elements and <code>nrec</code> non-array
        elements. This pre-allocation is useful when you know exactly how many
        elements the table will have. Otherwise you can use the function
        <code>lua_newtable</code>  (see <a href="/neovim-docs-web/en/luaref#lua_newtable()">lua_newtable()</a>).

</div>
<div class="help-para">
lua_dump                                                            <a name="lua_dump()"></a><code class="help-tag-right">lua_dump()</code>
<pre>int lua_dump (lua_State *L, lua_Writer writer, void *data);</pre>

</div>
<div class="help-para">
        Dumps a function as a binary chunk. Receives a Lua function on the top
        of the stack and produces a binary chunk that, if loaded again,
        results in a function equivalent to the one dumped. As it produces
        parts of the chunk, <code>lua_dump</code> calls function <code>writer</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_Writer()">lua_Writer()</a>) with the given <code>data</code> to write them.

</div>
<div class="help-para">
        The value returned is the error code returned by the last call to the
        writer; 0 means no errors.

</div>
<div class="help-para">
        This function does not pop the Lua function from the stack.

</div>
<div class="help-para">
lua_equal                                                          <a name="lua_equal()"></a><code class="help-tag-right">lua_equal()</code>
<pre>int lua_equal (lua_State *L, int index1, int index2);</pre>

</div>
<div class="help-para">
        Returns 1 if the two values in acceptable indices <code>index1</code> and
        <code>index2</code> are equal, following the semantics of the Lua <code>==</code> operator
        (that is, may call metamethods). Otherwise returns 0. Also returns 0
        if any of the indices is non valid.

</div>
<div class="help-para">
lua_error                                                          <a name="lua_error()"></a><code class="help-tag-right">lua_error()</code>
<pre>int lua_error (lua_State *L);</pre>

</div>
<div class="help-para">
        Generates a Lua error. The error message (which can actually be a Lua
        value of any type) must be on the stack top. This function does a long
        jump, and therefore never returns (see <a href="/neovim-docs-web/en/luaref#luaL_error()">luaL_error()</a>).

</div>
<div class="help-para">
lua_gc                                                                <a name="lua_gc()"></a><code class="help-tag-right">lua_gc()</code>
<pre>int lua_gc (lua_State *L, int what, int data);</pre>

</div>
<div class="help-para">
        Controls the garbage collector.

</div>
<div class="help-para">
        This function performs several tasks, according to the value of the
        parameter <code>what</code>:

</div>
<div class="help-para">
<div class="help-li" style=""> <code>LUA_GCSTOP</code>      stops the garbage collector.
</div><div class="help-li" style=""> <code>LUA_GCRESTART</code>   restarts the garbage collector.
</div><div class="help-li" style=""> <code>LUA_GCCOLLECT</code>   performs a full garbage-collection cycle.
</div><div class="help-li" style=""> <code>LUA_GCCOUNT</code>     returns the current amount of memory (in Kbytes) in
                          use by Lua.
</div><div class="help-li" style=""> <code>LUA_GCCOUNTB</code>    returns the remainder of dividing the current
                          amount of bytes of memory in use by Lua by 1024.
</div><div class="help-li" style=""> <code>LUA_GCSTEP</code>      performs an incremental step of garbage collection.
                          The step "size" is controlled by <code>data</code> (larger
                          values mean more steps) in a non-specified way. If
                          you want to control the step size you must
                          experimentally tune the value of <code>data</code>. The
                          function returns 1 if the step finished a
                          garbage-collection cycle.
</div><div class="help-li" style=""> <code>LUA_GCSETPAUSE</code>  sets <code>data</code> /100 as the new value for the
                          <code>pause</code> of the collector (see <a href="/neovim-docs-web/en/luaref#luaref-langGC">luaref-langGC</a>).
                          The function returns the previous value of the
                          pause.
</div><div class="help-li" style=""> <code>LUA_GCSETSTEPMUL</code>sets <code>data</code> /100 as the new value for the
                          <code>step</code> <code>multiplier</code>  of the collector (see
                          <a href="/neovim-docs-web/en/luaref#luaref-langGC">luaref-langGC</a>). The function returns the
                          previous value of the step multiplier.
</div>
</div>
<div class="help-para">
lua_getallocf                                                  <a name="lua_getallocf()"></a><code class="help-tag-right">lua_getallocf()</code>
<pre>lua_Alloc lua_getallocf (lua_State *L, void **ud);</pre>

</div>
<div class="help-para">
        Returns the memory-allocation function of a given state. If <code>ud</code> is
        not <code>NULL</code>, Lua stores in <code>*ud</code> the opaque pointer passed to
        <code>lua_newstate</code> (see <a href="/neovim-docs-web/en/luaref#lua_newstate()">lua_newstate()</a>).

</div>
<div class="help-para">
lua_getfenv                                                      <a name="lua_getfenv()"></a><code class="help-tag-right">lua_getfenv()</code>
<pre>void lua_getfenv (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Pushes onto the stack the environment table of the value at the given
        index.

</div>
<div class="help-para">
lua_getfield                                                    <a name="lua_getfield()"></a><code class="help-tag-right">lua_getfield()</code>
<pre>void lua_getfield (lua_State *L, int index, const char *k);</pre>

</div>
<div class="help-para">
        Pushes onto the stack the value <code>t[k]</code>, where <code>t</code> is the value at the
        given valid index <code>index</code>. As in Lua, this function may trigger a
        metamethod for the "index" event (see <a href="/neovim-docs-web/en/luaref#luaref-langMetatables">luaref-langMetatables</a>).

</div>
<div class="help-para">
lua_getglobal                                                  <a name="lua_getglobal()"></a><code class="help-tag-right">lua_getglobal()</code>
<pre>void lua_getglobal (lua_State *L, const char *name);</pre>

</div>
<div class="help-para">
        Pushes onto the stack the value of the global <code>name</code>. It is defined as
        a macro:
<pre>#define lua_getglobal(L,s)  lua_getfield(L, LUA_GLOBALSINDEX, s)</pre>

</div>
<div class="help-para">
lua_getmetatable                                            <a name="lua_getmetatable()"></a><code class="help-tag-right">lua_getmetatable()</code>
<pre>int lua_getmetatable (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Pushes onto the stack the metatable of the value at the given
        acceptable index. If the index is not valid, or if the value does not
        have a metatable, the function returns 0 and pushes nothing on the
        stack.

</div>
<div class="help-para">
lua_gettable                                                    <a name="lua_gettable()"></a><code class="help-tag-right">lua_gettable()</code>
<pre>void lua_gettable (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Pushes onto the stack the value <code>t[k]</code>, where <code>t</code> is the value at the
        given valid index <code>index</code> and <code>k</code> is the value at the top of the
        stack.

</div>
<div class="help-para">
        This function pops the key from the stack (putting the resulting value
        in its place). As in Lua, this function may trigger a metamethod for
        the "index" event (see <a href="/neovim-docs-web/en/luaref#luaref-langMetatables">luaref-langMetatables</a>).

</div>
<div class="help-para">
lua_gettop                                                        <a name="lua_gettop()"></a><code class="help-tag-right">lua_gettop()</code>
<pre>int lua_gettop (lua_State *L);</pre>

</div>
<div class="help-para">
        Returns the index of the top element in the stack. Because indices
        start at 1, this result is equal to the number of elements in the
        stack (and so
        0 means an empty stack).

</div>
<div class="help-para">
lua_insert                                                        <a name="lua_insert()"></a><code class="help-tag-right">lua_insert()</code>
<pre>void lua_insert (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Moves the top element into the given valid index, shifting up the
        elements above this index to open space. Cannot be called with a
        pseudo-index, because a pseudo-index is not an actual stack position.

</div>
<div class="help-para">
lua_Integer                                                      <a name="lua_Integer()"></a><code class="help-tag-right">lua_Integer()</code>
<pre>typedef ptrdiff_t lua_Integer;</pre>

</div>
<div class="help-para">
        The type used by the Lua API to represent integral values.

</div>
<div class="help-para">
        By default it is a <code>ptrdiff_t</code>, which is usually the largest integral
        type the machine handles "comfortably".

</div>
<div class="help-para">
lua_isboolean                                                  <a name="lua_isboolean()"></a><code class="help-tag-right">lua_isboolean()</code>
<pre>int lua_isboolean (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Returns 1 if the value at the given acceptable index has type boolean,
        and 0 otherwise.

</div>
<div class="help-para">
lua_iscfunction                                              <a name="lua_iscfunction()"></a><code class="help-tag-right">lua_iscfunction()</code>
<pre>int lua_iscfunction (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Returns 1 if the value at the given acceptable index is a C function,
        and 0 otherwise.

</div>
<div class="help-para">
lua_isfunction                                                <a name="lua_isfunction()"></a><code class="help-tag-right">lua_isfunction()</code>
<pre>int lua_isfunction (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Returns 1 if the value at the given acceptable index is a function
        (either C or Lua), and 0 otherwise.

</div>
<div class="help-para">
lua_islightuserdata                                      <a name="lua_islightuserdata()"></a><code class="help-tag-right">lua_islightuserdata()</code>
<pre>int lua_islightuserdata (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Returns 1 if the value at the given acceptable index is a light
        userdata, and 0 otherwise.

</div>
<div class="help-para">
lua_isnil                                                          <a name="lua_isnil()"></a><code class="help-tag-right">lua_isnil()</code>
<pre>int lua_isnil (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Returns 1 if the value at the given acceptable index is <code>nil</code>, and 0
        otherwise.

</div>
<div class="help-para">
lua_isnumber                                                    <a name="lua_isnumber()"></a><code class="help-tag-right">lua_isnumber()</code>
<pre>int lua_isnumber (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Returns 1 if the value at the given acceptable index is a number or a
        string convertible to a number, and 0 otherwise.

</div>
<div class="help-para">
lua_isstring                                                    <a name="lua_isstring()"></a><code class="help-tag-right">lua_isstring()</code>
<pre>int lua_isstring (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Returns 1 if the value at the given acceptable index is a string or a
        number (which is always convertible to a string), and 0 otherwise.

</div>
<div class="help-para">
lua_istable                                                      <a name="lua_istable()"></a><code class="help-tag-right">lua_istable()</code>
<pre>int lua_istable (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Returns 1 if the value at the given acceptable index is a table, and
        0 otherwise.

</div>
<div class="help-para">
lua_isthread                                                    <a name="lua_isthread()"></a><code class="help-tag-right">lua_isthread()</code>
<pre>int lua_isthread (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Returns 1 if the value at the given acceptable index is a thread, and
        0 otherwise.

</div>
<div class="help-para">
lua_isuserdata                                                <a name="lua_isuserdata()"></a><code class="help-tag-right">lua_isuserdata()</code>
<pre>int lua_isuserdata (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Returns 1 if the value at the given acceptable index is a userdata
        (either full or light), and 0 otherwise.

</div>
<div class="help-para">
lua_lessthan                                                    <a name="lua_lessthan()"></a><code class="help-tag-right">lua_lessthan()</code>
<pre>int lua_lessthan (lua_State *L, int index1, int index2);</pre>

</div>
<div class="help-para">
        Returns 1 if the value at acceptable index <code>index1</code> is smaller than
        the value at acceptable index <code>index2</code>, following the semantics of the
        Lua <code>&lt;</code> operator (that is, may call metamethods). Otherwise returns 0.
        Also returns 0 if any of the indices is non valid.

</div>
<div class="help-para">
lua_load                                                            <a name="lua_load()"></a><code class="help-tag-right">lua_load()</code>
<pre>int lua_load (lua_State *L,
              lua_Reader reader,
              void *data,
              const char *chunkname);</pre>

</div>
<div class="help-para">
        Loads a Lua chunk. If there are no errors, <code>lua_load</code> pushes the
        compiled chunk as a Lua function on top of the stack. Otherwise, it
        pushes an error message. The return values of <code>lua_load</code> are:

</div>
<div class="help-para">
<div class="help-li" style=""> <code>0</code>: no errors;
</div><div class="help-li" style=""> <code>LUA_ERRSYNTAX</code> : syntax error during pre-compilation;
</div><div class="help-li" style=""> <code>LUA_ERRMEM</code> : memory allocation error.
</div>
</div>
<div class="help-para">
        This function only loads a chunk; it does not run it.

</div>
<div class="help-para">
        <code>lua_load</code> automatically detects whether the chunk is text or binary,
        and loads it accordingly (see program <code>luac</code>).

</div>
<div class="help-para">
        The <code>lua_load</code> function uses a user-supplied <code>reader</code> function to read
        the chunk (see <a href="/neovim-docs-web/en/luaref#lua_Reader()">lua_Reader()</a>). The <code>data</code> argument is an opaque
        value passed to the reader function.

</div>
<div class="help-para">
        The <code>chunkname</code> argument gives a name to the chunk, which is used for
        error messages and in debug information (see <a href="/neovim-docs-web/en/luaref#luaref-apiDebug">luaref-apiDebug</a>).

</div>
<div class="help-para">
lua_newstate                                                    <a name="lua_newstate()"></a><code class="help-tag-right">lua_newstate()</code>
<pre>lua_State *lua_newstate (lua_Alloc f, void *ud);</pre>

</div>
<div class="help-para">
        Creates a new, independent state. Returns <code>NULL</code> if cannot create the
        state (due to lack of memory). The argument <code>f</code> is the allocator
        function; Lua does all memory allocation for this state through this
        function. The second argument, <code>ud</code>, is an opaque pointer that Lua
        simply passes to the allocator in every call.

</div>
<div class="help-para">
lua_newtable                                                    <a name="lua_newtable()"></a><code class="help-tag-right">lua_newtable()</code>
<pre>void lua_newtable (lua_State *L);</pre>

</div>
<div class="help-para">
        Creates a new empty table and pushes it onto the stack. It is
        equivalent to <code>lua_createtable(L, 0, 0)</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_createtable()">lua_createtable()</a>).

</div>
<div class="help-para">
lua_newthread                                                  <a name="lua_newthread()"></a><code class="help-tag-right">lua_newthread()</code>
<pre>lua_State *lua_newthread (lua_State *L);</pre>

</div>
<div class="help-para">
        Creates a new thread, pushes it on the stack, and returns a pointer to
        a <code>lua_State</code>  (see <a href="/neovim-docs-web/en/luaref#lua_State()">lua_State()</a>) that represents this new
        thread. The new state returned by this function shares with the
        original state all global objects (such as tables), but has an
        independent execution stack.

</div>
<div class="help-para">
        There is no explicit function to close or to destroy a thread. Threads
        are subject to garbage collection, like any Lua object.

</div>
<div class="help-para">
lua_newuserdata                                              <a name="lua_newuserdata()"></a><code class="help-tag-right">lua_newuserdata()</code>
<pre>void *lua_newuserdata (lua_State *L, size_t size);</pre>

</div>
<div class="help-para">
        This function allocates a new block of memory with the given size,
        pushes onto the stack a new full userdata with the block address, and
        returns this address.
                                                               <a name="luaref-userdata"></a><code class="help-tag-right">luaref-userdata</code>
        Userdata represents C values in Lua. A full userdata represents a
        block of memory. It is an object (like a table): you must create it,
        it can have its own metatable, and you can detect when it is being
        collected. A full userdata is only equal to itself (under raw
        equality).

</div>
<div class="help-para">
        When Lua collects a full userdata with a <code>gc</code> metamethod, Lua calls
        the metamethod and marks the userdata as finalized. When this userdata
        is collected again then Lua frees its corresponding memory.

</div>
<div class="help-para">
lua_next                                                            <a name="lua_next()"></a><code class="help-tag-right">lua_next()</code>
<pre>int lua_next (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Pops a key from the stack, and pushes a key-value pair from the table
        at the given index (the "next" pair after the given key). If there are
        no more elements in the table, then <code>lua_next</code> returns 0 (and pushes
        nothing).

</div>
<div class="help-para">
                                                         <a name="luaref-tabletraversal"></a><code class="help-tag-right">luaref-tabletraversal</code>
        A typical traversal looks like this:
<pre>/* table is in the stack at index 't' */
lua_pushnil(L);  /* first key */
while (lua_next(L, t) != 0) {
  /* uses 'key' (at index -2) and 'value' (at index -1) */
  printf("%s - %s\n",
         lua_typename(L, lua_type(L, -2)),
         lua_typename(L, lua_type(L, -1)));
  /* removes 'value'; keeps 'key' for next iteration */
  lua_pop(L, 1);
}</pre>

</div>
<div class="help-para">
        While traversing a table, do not call <code>lua_tolstring</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_tolstring()">lua_tolstring()</a>) directly on a key, unless you know that the
        key is actually a string. Recall that <code>lua_tolstring</code> <code>changes</code> the
        value at the given index; this confuses the next call to <code>lua_next</code>.

</div>
<div class="help-para">
lua_Number                                                        <a name="lua_Number()"></a><code class="help-tag-right">lua_Number()</code>
<pre>typedef double lua_Number;</pre>

</div>
<div class="help-para">
        The type of numbers in Lua. By default, it is double, but that can be
        changed in <code>luaconf.h</code>.

</div>
<div class="help-para">
        Through the configuration file you can change Lua to operate with
        another type for numbers (e.g., float or long).

</div>
<div class="help-para">
lua_objlen                                                        <a name="lua_objlen()"></a><code class="help-tag-right">lua_objlen()</code>
<pre>size_t lua_objlen (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Returns the "length" of the value at the given acceptable index: for
        strings, this is the string length; for tables, this is the result of
        the length operator (<code>#</code>); for userdata, this is the size of the
        block of memory allocated for the userdata; for other values, it is 0.

</div>
<div class="help-para">
lua_pcall                                                          <a name="lua_pcall()"></a><code class="help-tag-right">lua_pcall()</code>
<pre>lua_pcall (lua_State *L, int nargs, int nresults, int errfunc);</pre>

</div>
<div class="help-para">
        Calls a function in protected mode.

</div>
<div class="help-para">
        Both <code>nargs</code> and <code>nresults</code> have the same meaning as in <code>lua_call</code>
        (see <a href="/neovim-docs-web/en/luaref#lua_call()">lua_call()</a>). If there are no errors during the call,
        <code>lua_pcall</code> behaves exactly like <code>lua_call</code>. However, if there is any
        error, <code>lua_pcall</code> catches it, pushes a single value on the stack (the
        error message), and returns an error code. Like <code>lua_call</code>,
        <code>lua_pcall</code> always removes the function and its arguments from the
        stack.

</div>
<div class="help-para">
        If <code>errfunc</code> is 0, then the error message returned on the stack is
        exactly the original error message. Otherwise, <code>errfunc</code> is the stack
        index of an <code>error</code> <code>handler function</code>. (In the current
        implementation, this index cannot be a pseudo-index.) In case of
        runtime errors, this function will be called with the error message
        and its return value will be the message returned on the stack by
        <code>lua_pcall</code>.

</div>
<div class="help-para">
        Typically, the error handler function is used to add more debug
        information to the error message, such as a stack traceback. Such
        information cannot be gathered after the return of <code>lua_pcall</code>, since
        by then the stack has unwound.

</div>
<div class="help-para">
        The <code>lua_pcall</code> function returns 0 in case of success or one of the
        following error codes (defined in <code>lua.h</code>):

</div>
<div class="help-para">
<div class="help-li" style=""> <code>LUA_ERRRUN</code>  a runtime error.
</div><div class="help-li" style=""> <code>LUA_ERRMEM</code>  memory allocation error. For such errors, Lua does
                      not call the error handler function.
</div><div class="help-li" style=""> <code>LUA_ERRERR</code>  error while running the error handler function.
</div>
</div>
<div class="help-para">
lua_pop                                                              <a name="lua_pop()"></a><code class="help-tag-right">lua_pop()</code>
<pre>void lua_pop (lua_State *L, int n);</pre>

</div>
<div class="help-para">
        Pops <code>n</code> elements from the stack.

</div>
<div class="help-para">
lua_pushboolean                                              <a name="lua_pushboolean()"></a><code class="help-tag-right">lua_pushboolean()</code>
<pre>void lua_pushboolean (lua_State *L, int b);</pre>

</div>
<div class="help-para">
        Pushes a boolean value with value <code>b</code> onto the stack.

</div>
<div class="help-para">
lua_pushcclosure                                            <a name="lua_pushcclosure()"></a><code class="help-tag-right">lua_pushcclosure()</code>
<pre>void lua_pushcclosure (lua_State *L, lua_CFunction fn, int n);</pre>

</div>
<div class="help-para">
        Pushes a new C closure onto the stack.

</div>
<div class="help-para">
        When a C function is created, it is possible to associate some values
        with it, thus creating a C closure (see <a href="/neovim-docs-web/en/luaref#luaref-apiCClosures">luaref-apiCClosures</a>); these
        values are then accessible to the function whenever it is called. To
        associate values with a C function, first these values should be
        pushed onto the stack (when there are multiple values, the first value
        is pushed first). Then <code>lua_pushcclosure</code> is called to create and push
        the C function onto the stack, with the argument <code>n</code> telling how many
        values should be associated with the function. <code>lua_pushcclosure</code> also
        pops these values from the stack.

</div>
<div class="help-para">
lua_pushcfunction                                          <a name="lua_pushcfunction()"></a><code class="help-tag-right">lua_pushcfunction()</code>
<pre>void lua_pushcfunction (lua_State *L, lua_CFunction f);</pre>

</div>
<div class="help-para">
        Pushes a C function onto the stack. This function receives a pointer
        to a C function and pushes onto the stack a Lua value of type
        <code>function</code> that, when called, invokes the corresponding C function.

</div>
<div class="help-para">
        Any function to be registered in Lua must follow the correct protocol
        to receive its parameters and return its results (see
        <a href="/neovim-docs-web/en/luaref#lua_CFunction()">lua_CFunction()</a>).

</div>
<div class="help-para">
        <code>lua_pushcfunction</code> is defined as a macro:
<pre>#define lua_pushcfunction(L,f)  lua_pushcclosure(L,f,0)</pre>

</div>
<div class="help-para">
lua_pushfstring                                              <a name="lua_pushfstring()"></a><code class="help-tag-right">lua_pushfstring()</code>
<pre>const char *lua_pushfstring (lua_State *L, const char *fmt, ...);</pre>

</div>
<div class="help-para">
        Pushes onto the stack a formatted string and returns a pointer to this
        string. It is similar to the C function <code>sprintf</code>, but has some
        important differences:

</div>
<div class="help-para">
<div class="help-li" style=""> You do not have to allocate space for the result: the result is a
           Lua string and Lua takes care of memory allocation (and
           deallocation, through garbage collection).
</div><div class="help-li" style=""> The conversion specifiers are quite restricted. There are no flags,
           widths, or precisions. The conversion specifiers can only be <code>%%</code>
           (inserts a <code>%</code> in the string), <code>%s</code> (inserts a zero-terminated
           string, with no size restrictions), <code>%f</code> (inserts a
           <code>lua_Number</code>), <code>%p</code> (inserts a pointer as a hexadecimal numeral),
           <code>%d</code> (inserts an <code>int</code>), and <code>%c</code> (inserts an <code>int</code> as a
           character).
</div>
</div>
<div class="help-para">
lua_pushinteger                                              <a name="lua_pushinteger()"></a><code class="help-tag-right">lua_pushinteger()</code>
<pre>void lua_pushinteger (lua_State *L, lua_Integer n);</pre>

</div>
<div class="help-para">
        Pushes a number with value <code>n</code> onto the stack.

</div>
<div class="help-para">
lua_pushlightuserdata                                  <a name="lua_pushlightuserdata()"></a><code class="help-tag-right">lua_pushlightuserdata()</code>
<pre>void lua_pushlightuserdata (lua_State *L, void *p);</pre>

</div>
<div class="help-para">
        Pushes a light userdata onto the stack.
                                                          <a name="luaref-lightuserdata"></a><code class="help-tag-right">luaref-lightuserdata</code>
        Userdata represents C values in Lua. A light userdata represents a
        pointer. It is a value (like a number): you do not create it, it has
        no individual metatable, and it is not collected (as it was never
        created). A light userdata is equal to "any" light userdata with the
        same C address.

</div>
<div class="help-para">
lua_pushlstring                                              <a name="lua_pushlstring()"></a><code class="help-tag-right">lua_pushlstring()</code>
<pre>void lua_pushlstring (lua_State *L, const char *s, size_t len);</pre>

</div>
<div class="help-para">
        Pushes the string pointed to by <code>s</code> with size <code>len</code> onto the stack.
        Lua makes (or reuses) an internal copy of the given string, so the
        memory at <code>s</code> can be freed or reused immediately after the function
        returns. The string can contain embedded zeros.

</div>
<div class="help-para">
lua_pushnil                                                      <a name="lua_pushnil()"></a><code class="help-tag-right">lua_pushnil()</code>
<pre>void lua_pushnil (lua_State *L);</pre>

</div>
<div class="help-para">
        Pushes a nil value onto the stack.

</div>
<div class="help-para">
lua_pushnumber                                                <a name="lua_pushnumber()"></a><code class="help-tag-right">lua_pushnumber()</code>
<pre>void lua_pushnumber (lua_State *L, lua_Number n);</pre>

</div>
<div class="help-para">
        Pushes a number with value <code>n</code> onto the stack.

</div>
<div class="help-para">
lua_pushstring                                                <a name="lua_pushstring()"></a><code class="help-tag-right">lua_pushstring()</code>
<pre>void lua_pushstring (lua_State *L, const char *s);</pre>

</div>
<div class="help-para">
        Pushes the zero-terminated string pointed to by <code>s</code> onto the stack.
        Lua makes (or reuses) an internal copy of the given string, so the
        memory at <code>s</code> can be freed or reused immediately after the function
        returns. The string cannot contain embedded zeros; it is assumed to
        end at the first zero.

</div>
<div class="help-para">
lua_pushthread                                                <a name="lua_pushthread()"></a><code class="help-tag-right">lua_pushthread()</code>
<pre>int lua_pushthread (lua_State *L);</pre>

</div>
<div class="help-para">
        Pushes the thread represented by <code>L</code> onto the stack. Returns 1 if this
        thread is the main thread of its state.

</div>
<div class="help-para">
lua_pushvalue                                                  <a name="lua_pushvalue()"></a><code class="help-tag-right">lua_pushvalue()</code>
<pre>void lua_pushvalue (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Pushes a copy of the element at the given valid index onto the stack.

</div>
<div class="help-para">
lua_pushvfstring                                            <a name="lua_pushvfstring()"></a><code class="help-tag-right">lua_pushvfstring()</code>
<pre>const char *lua_pushvfstring (lua_State *L,
                              const char *fmt,
                              va_list argp);</pre>

</div>
<div class="help-para">
        Equivalent to <code>lua_pushfstring</code> (see <a href="/neovim-docs-web/en/luaref#lua_pushfstring()">lua_pushfstring()</a>), except
        that it receives a <code>va_list</code> instead of a variable number of
        arguments.

</div>
<div class="help-para">
lua_rawequal                                                    <a name="lua_rawequal()"></a><code class="help-tag-right">lua_rawequal()</code>
<pre>int lua_rawequal (lua_State *L, int index1, int index2);</pre>

</div>
<div class="help-para">
        Returns 1 if the two values in acceptable indices <code>index1</code> and
        <code>index2</code> are primitively equal (that is, without calling metamethods).
        Otherwise returns 0. Also returns 0 if any of the indices are non
        valid.

</div>
<div class="help-para">
lua_rawget                                                        <a name="lua_rawget()"></a><code class="help-tag-right">lua_rawget()</code>
<pre>void lua_rawget (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Similar to <code>lua_gettable</code> (see <a href="/neovim-docs-web/en/luaref#lua_gettable()">lua_gettable()</a>), but does a raw
        access (i.e., without metamethods).

</div>
<div class="help-para">
lua_rawgeti                                                      <a name="lua_rawgeti()"></a><code class="help-tag-right">lua_rawgeti()</code>
<pre>void lua_rawgeti (lua_State *L, int index, int n);</pre>

</div>
<div class="help-para">
        Pushes onto the stack the value <code>t[n]</code>, where <code>t</code> is the value at the
        given valid index <code>index</code>. The access is raw; that is, it does not
        invoke metamethods.

</div>
<div class="help-para">
lua_rawset                                                        <a name="lua_rawset()"></a><code class="help-tag-right">lua_rawset()</code>
<pre>void lua_rawset (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Similar to <code>lua_settable</code> (see <a href="/neovim-docs-web/en/luaref#lua_settable()">lua_settable()</a>), but does a raw
        assignment (i.e., without metamethods).

</div>
<div class="help-para">
lua_rawseti                                                      <a name="lua_rawseti()"></a><code class="help-tag-right">lua_rawseti()</code>
<pre>void lua_rawseti (lua_State *L, int index, int n);</pre>

</div>
<div class="help-para">
        Does the equivalent of <code>t[n] = v</code>, where <code>t</code> is the value at the given
        valid index <code>index</code> and <code>v</code> is the value at the top of the stack.

</div>
<div class="help-para">
        This function pops the value from the stack. The assignment is raw;
        that is, it does not invoke metamethods.

</div>
<div class="help-para">
lua_Reader                                                        <a name="lua_Reader()"></a><code class="help-tag-right">lua_Reader()</code>
<pre>typedef const char * (*lua_Reader) (lua_State *L,
                                    void *data,
                                    size_t *size);</pre>

</div>
<div class="help-para">
        The reader function used by <code>lua_load</code> (see <a href="/neovim-docs-web/en/luaref#lua_load()">lua_load()</a>). Every
        time it needs another piece of the chunk, <code>lua_load</code> calls the reader,
        passing along its <code>data</code> parameter. The reader must return a pointer
        to a block of memory with a new piece of the chunk and set <code>size</code> to
        the block size. The block must exist until the reader function is
        called again. To signal the end of the chunk, the reader must return
        <code>NULL</code>. The reader function may return pieces of any size greater than
        zero.

</div>
<div class="help-para">
lua_register                                                    <a name="lua_register()"></a><code class="help-tag-right">lua_register()</code>
<pre>void lua_register (lua_State *L,
                   const char *name,
                   lua_CFunction f);</pre>

</div>
<div class="help-para">
        Sets the C function <code>f</code> as the new value of global <code>name</code>. It is
        defined as a macro:
<pre>#define lua_register(L,n,f) \
       (lua_pushcfunction(L, f), lua_setglobal(L, n))</pre>

</div>
<div class="help-para">
lua_remove                                                        <a name="lua_remove()"></a><code class="help-tag-right">lua_remove()</code>
<pre>void lua_remove (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Removes the element at the given valid index, shifting down the
        elements above this index to fill the gap. Cannot be called with a
        pseudo-index, because a pseudo-index is not an actual stack position.

</div>
<div class="help-para">
lua_replace                                                      <a name="lua_replace()"></a><code class="help-tag-right">lua_replace()</code>
<pre>void lua_replace (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Moves the top element into the given position (and pops it), without
        shifting any element (therefore replacing the value at the given
        position).

</div>
<div class="help-para">
lua_resume                                                        <a name="lua_resume()"></a><code class="help-tag-right">lua_resume()</code>
<pre>int lua_resume (lua_State *L, int narg);</pre>

</div>
<div class="help-para">
        Starts and resumes a coroutine in a given thread.

</div>
<div class="help-para">
        To start a coroutine, you first create a new thread (see
        <a href="/neovim-docs-web/en/luaref#lua_newthread()">lua_newthread()</a>); then you push onto its stack the main
        function plus any arguments; then you call <code>lua_resume</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_resume()">lua_resume()</a>) with <code>narg</code> being the number of arguments. This
        call returns when the coroutine suspends or finishes its execution.
        When it returns, the stack contains all values passed to <code>lua_yield</code>
        (see <a href="/neovim-docs-web/en/luaref#lua_yield()">lua_yield()</a>), or all values returned by the body function.
        <code>lua_resume</code> returns <code>LUA_YIELD</code> if the coroutine yields, 0 if the
        coroutine finishes its execution without errors, or an error code in
        case of errors (see <a href="/neovim-docs-web/en/luaref#lua_pcall()">lua_pcall()</a>). In case of errors, the stack
        is not unwound, so you can use the debug API over it. The error
        message is on the top of the stack. To restart a coroutine, you put on
        its stack only the values to be passed as results from <code>lua_yield</code>,
        and then call <code>lua_resume</code>.

</div>
<div class="help-para">
lua_setallocf                                                  <a name="lua_setallocf()"></a><code class="help-tag-right">lua_setallocf()</code>
<pre>void lua_setallocf (lua_State *L, lua_Alloc f, void *ud);</pre>

</div>
<div class="help-para">
        Changes the allocator function of a given state to <code>f</code> with user data
        <code>ud</code>.

</div>
<div class="help-para">
lua_setfenv                                                      <a name="lua_setfenv()"></a><code class="help-tag-right">lua_setfenv()</code>
<pre>int lua_setfenv (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Pops a table from the stack and sets it as the new environment for the
        value at the given index. If the value at the given index is neither a
        function nor a thread nor a userdata, <code>lua_setfenv</code> returns 0.
        Otherwise it returns 1.

</div>
<div class="help-para">
lua_setfield                                                    <a name="lua_setfield()"></a><code class="help-tag-right">lua_setfield()</code>
<pre>void lua_setfield (lua_State *L, int index, const char *k);</pre>

</div>
<div class="help-para">
        Does the equivalent to <code>t[k] = v</code>, where <code>t</code> is the value at the given
        valid index <code>index</code> and <code>v</code> is the value at the top of the stack.

</div>
<div class="help-para">
        This function pops the value from the stack. As in Lua, this function
        may trigger a metamethod for the "newindex" event (see
        <a href="/neovim-docs-web/en/luaref#luaref-langMetatables">luaref-langMetatables</a>).

</div>
<div class="help-para">
lua_setglobal                                                  <a name="lua_setglobal()"></a><code class="help-tag-right">lua_setglobal()</code>
<pre>void lua_setglobal (lua_State *L, const char *name);</pre>

</div>
<div class="help-para">
        Pops a value from the stack and sets it as the new value of global
        <code>name</code>. It is defined as a macro:
<pre>#define lua_setglobal(L,s)   lua_setfield(L, LUA_GLOBALSINDEX, s)</pre>

</div>
<div class="help-para">
lua_setmetatable                                            <a name="lua_setmetatable()"></a><code class="help-tag-right">lua_setmetatable()</code>
<pre>int lua_setmetatable (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Pops a table from the stack and sets it as the new metatable for the
        value at the given acceptable index.

</div>
<div class="help-para">
lua_settable                                                    <a name="lua_settable()"></a><code class="help-tag-right">lua_settable()</code>
<pre>void lua_settable (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Does the equivalent to <code>t[k] = v</code>, where <code>t</code> is the value at the given
        valid index <code>index</code>, <code>v</code> is the value at the top of the stack, and <code>k</code>
        is the value just below the top.

</div>
<div class="help-para">
        This function pops both the key and the value from the stack. As in
        Lua, this function may trigger a metamethod for the "newindex" event
        (see <a href="/neovim-docs-web/en/luaref#luaref-langMetatables">luaref-langMetatables</a>).

</div>
<div class="help-para">
lua_settop                                                        <a name="lua_settop()"></a><code class="help-tag-right">lua_settop()</code>
<pre>void lua_settop (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Accepts any acceptable index, or 0, and sets the stack top to this
        index. If the new top is larger than the old one, then the new
        elements are filled with <code>nil</code>. If <code>index</code> is 0, then all stack
        elements are removed.

</div>
<div class="help-para">
lua_State                                                          <a name="lua_State()"></a><code class="help-tag-right">lua_State()</code>
<pre>typedef struct lua_State lua_State;</pre>

</div>
<div class="help-para">
        Opaque structure that keeps the whole state of a Lua interpreter. The
        Lua library is fully reentrant: it has no global variables. All
        information about a state is kept in this structure.

</div>
<div class="help-para">
        A pointer to this state must be passed as the first argument to every
        function in the library, except to <code>lua_newstate</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_newstate()">lua_newstate()</a>), which creates a Lua state from scratch.

</div>
<div class="help-para">
lua_status                                                        <a name="lua_status()"></a><code class="help-tag-right">lua_status()</code>
<pre>int lua_status (lua_State *L);</pre>

</div>
<div class="help-para">
        Returns the status of the thread <code>L</code>.

</div>
<div class="help-para">
        The status can be 0 for a normal thread, an error code if the thread
        finished its execution with an error, or <code>LUA_YIELD</code> if the thread is
        suspended.

</div>
<div class="help-para">
lua_toboolean                                                  <a name="lua_toboolean()"></a><code class="help-tag-right">lua_toboolean()</code>
<pre>int lua_toboolean (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Converts the Lua value at the given acceptable index to a C boolean
        value (0 or 1). Like all tests in Lua, <code>lua_toboolean</code> returns 1 for
        any Lua value different from <code>false</code> and <code>nil</code>; otherwise it returns
        0. It also returns 0 when called with a non-valid index. (If you want
           to accept only actual boolean values, use <code>lua_isboolean</code>
           <a href="/neovim-docs-web/en/luaref#lua_isboolean()">lua_isboolean()</a> to test the value's type.)

</div>
<div class="help-para">
lua_tocfunction                                              <a name="lua_tocfunction()"></a><code class="help-tag-right">lua_tocfunction()</code>
<pre>lua_CFunction lua_tocfunction (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Converts a value at the given acceptable index to a C function. That
        value must be a C function; otherwise it returns <code>NULL</code>.

</div>
<div class="help-para">
lua_tointeger                                                  <a name="lua_tointeger()"></a><code class="help-tag-right">lua_tointeger()</code>
<pre>lua_Integer lua_tointeger (lua_State *L, int idx);</pre>

</div>
<div class="help-para">
        Converts the Lua value at the given acceptable index to the signed
        integral type <code>lua_Integer</code> (see <a href="/neovim-docs-web/en/luaref#lua_Integer()">lua_Integer()</a>). The Lua value
        must be a number or a string convertible to a number (see
        <a href="/neovim-docs-web/en/luaref#luaref-langCoercion">luaref-langCoercion</a>); otherwise, <code>lua_tointeger</code> returns 0.

</div>
<div class="help-para">
        If the number is not an integer, it is truncated in some non-specified
        way.

</div>
<div class="help-para">
lua_tolstring                                                  <a name="lua_tolstring()"></a><code class="help-tag-right">lua_tolstring()</code>
<pre>const char *lua_tolstring (lua_State *L, int index, size_t *len);</pre>

</div>
<div class="help-para">
        Converts the Lua value at the given acceptable index to a C string. If
        <code>len</code> is not <code>NULL</code>, it also sets <code>*len</code> with the string length. The
        Lua value must be a string or a number; otherwise, the function
        returns <code>NULL</code>. If the value is a number, then <code>lua_tolstring</code>  also
        <code>changes the actual value in the stack to a</code> <code>string</code>. (This change
        confuses <code>lua_next</code> <a href="/neovim-docs-web/en/luaref#lua_next()">lua_next()</a> when <code>lua_tolstring</code> is applied
        to keys during a table traversal.)

</div>
<div class="help-para">
        <code>lua_tolstring</code> returns a fully aligned pointer to a string inside the
        Lua state. This string always has a zero (<code>\0</code>) after its last
        character (as in C), but may contain other zeros in its body. Because
        Lua has garbage collection, there is no guarantee that the pointer
        returned by <code>lua_tolstring</code> will be valid after the corresponding
        value is removed from the stack.

</div>
<div class="help-para">
lua_tonumber                                                    <a name="lua_tonumber()"></a><code class="help-tag-right">lua_tonumber()</code>
<pre>lua_Number lua_tonumber (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Converts the Lua value at the given acceptable index to the C type
        <code>lua_Number</code> (see <a href="/neovim-docs-web/en/luaref#lua_Number()">lua_Number()</a>). The Lua value must be a number
        or a string convertible to a number (see <a href="/neovim-docs-web/en/luaref#luaref-langCoercion">luaref-langCoercion</a>);
        otherwise, <code>lua_tonumber</code> returns 0.

</div>
<div class="help-para">
lua_topointer                                                  <a name="lua_topointer()"></a><code class="help-tag-right">lua_topointer()</code>
<pre>const void *lua_topointer (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Converts the value at the given acceptable index to a generic C
        pointer (<code>void*</code>). The value may be a userdata, a table, a thread, or
        a function; otherwise, <code>lua_topointer</code> returns <code>NULL</code>. Different
        objects will give different pointers. There is no way to convert the
        pointer back to its original value.

</div>
<div class="help-para">
        Typically this function is used only for debug information.

</div>
<div class="help-para">
lua_tostring                                                    <a name="lua_tostring()"></a><code class="help-tag-right">lua_tostring()</code>
<pre>const char *lua_tostring (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Equivalent to <code>lua_tolstring</code> (see <a href="/neovim-docs-web/en/luaref#lua_tolstring()">lua_tolstring()</a>) with <code>len</code>
        equal to <code>NULL</code>.

</div>
<div class="help-para">
lua_tothread                                                    <a name="lua_tothread()"></a><code class="help-tag-right">lua_tothread()</code>
<pre>lua_State *lua_tothread (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Converts the value at the given acceptable index to a Lua thread
        (represented as <code>lua_State*</code> <a href="/neovim-docs-web/en/luaref#lua_State()">lua_State()</a>). This value must be a
        thread; otherwise, the function returns <code>NULL</code>.

</div>
<div class="help-para">
lua_touserdata                                                <a name="lua_touserdata()"></a><code class="help-tag-right">lua_touserdata()</code>
<pre>void *lua_touserdata (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        If the value at the given acceptable index is a full userdata, returns
        its block address. If the value is a light userdata, returns its
        pointer. Otherwise, it returns <code>NULL</code>.

</div>
<div class="help-para">
lua_type                                                            <a name="lua_type()"></a><code class="help-tag-right">lua_type()</code>
<pre>int lua_type (lua_State *L, int index);</pre>

</div>
<div class="help-para">
        Returns the type of the value in the given acceptable index, or
        <code>LUA_TNONE</code> for a non-valid index (that is, an index to an "empty"
        stack position). The types returned by <code>lua_type</code> are coded by the
        following constants defined in <code>lua.h</code> : <code>LUA_TNIL</code>, <code>LUA_TNUMBER</code>,
        <code>LUA_TBOOLEAN</code>, <code>LUA_TSTRING</code>, <code>LUA_TTABLE</code>, <code>LUA_TFUNCTION</code>,
        <code>LUA_TUSERDATA</code>, <code>LUA_TTHREAD</code>, and <code>LUA_TLIGHTUSERDATA</code>.

</div>
<div class="help-para">
lua_typename                                                    <a name="lua_typename()"></a><code class="help-tag-right">lua_typename()</code>
<pre>const char *lua_typename  (lua_State *L, int tp);</pre>

</div>
<div class="help-para">
        Returns the name of the type encoded by the value <code>tp</code>, which must be
        one the values returned by <code>lua_type</code>.

</div>
<div class="help-para">
lua_Writer                                                        <a name="lua_Writer()"></a><code class="help-tag-right">lua_Writer()</code>
<pre>typedef int (*lua_Writer) (lua_State *L,
                           const void* p,
                           size_t sz,
                           void* ud);</pre>

</div>
<div class="help-para">
        The writer function used by <code>lua_dump</code> (see <a href="/neovim-docs-web/en/luaref#lua_dump()">lua_dump()</a>). Every
        time it produces another piece of chunk, <code>lua_dump</code> calls the writer,
        passing along the buffer to be written (<code>p</code>), its size (<code>sz</code>), and the
        <code>data</code> parameter supplied to <code>lua_dump</code>.

</div>
<div class="help-para">
        The writer returns an error code: 0 means no errors; any other value
        means an error and stops <code>lua_dump</code> from calling the writer again.

</div>
<div class="help-para">
lua_xmove                                                          <a name="lua_xmove()"></a><code class="help-tag-right">lua_xmove()</code>
<pre>void lua_xmove (lua_State *from, lua_State *to, int n);</pre>

</div>
<div class="help-para">
        Exchange values between different threads of the <code>same</code> global state.

</div>
<div class="help-para">
        This function pops <code>n</code> values from the stack <code>from</code>, and pushes them
        onto the stack <code>to</code>.

</div>
<div class="help-para">
lua_yield                                                          <a name="lua_yield()"></a><code class="help-tag-right">lua_yield()</code>
<pre>int lua_yield (lua_State *L, int nresults);</pre>

</div>
<div class="help-para">
        Yields a coroutine.

</div>
<div class="help-para">
        This function should only be called as the return expression of a C
        function, as follows:
<pre>return lua_yield (L, nresults);</pre>

</div>
<div class="help-para">
        When a C function calls <code>lua_yield</code> in that way, the running coroutine
        suspends its execution, and the call to <code>lua_resume</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_resume()">lua_resume()</a>) that started this coroutine returns. The
        parameter <code>nresults</code> is the number of values from the stack that are
        passed as results to <code>lua_resume</code>.

</div>
<div class="help-para">
                                                           <a name="luaref-stackexample"></a><code class="help-tag-right">luaref-stackexample</code>
        As an example of stack manipulation, if the stack starts as
        <code>10 20 30 40 50*</code> (from bottom to top; the <code>*</code> marks the top), then
<pre>lua_pushvalue(L, 3)    --&gt; 10 20 30 40 50 30*
lua_pushvalue(L, -1)   --&gt; 10 20 30 40 50 30 30*
lua_remove(L, -3)      --&gt; 10 20 30 40 30 30*
lua_remove(L,  6)      --&gt; 10 20 30 40 30*
lua_insert(L,  1)      --&gt; 30 10 20 30 40*
lua_insert(L, -1)      --&gt; 30 10 20 30 40*  (no effect)
lua_replace(L, 2)      --&gt; 30 40 20 30*
lua_settop(L, -3)      --&gt; 30 40*
lua_settop(L,  6)      --&gt; 30 40 nil nil nil nil*</pre>

</div>
<div class="help-para">
<h2 class="help-heading">3.8  The Debug Interface<span class="help-heading-tags">                                       <a name="luaref-apiDebug"></a><span class="help-tag">luaref-apiDebug</span></span></h2>


</div>
<div class="help-para">
Lua has no built-in debugging facilities. Instead, it offers a special
interface by means of functions and hooks. This interface allows the
construction of different kinds of debuggers, profilers, and other tools that
need "inside information" from the interpreter.

</div>
<div class="help-para">
lua_Debug                                                          <a name="lua_Debug()"></a><code class="help-tag-right">lua_Debug()</code>

</div>
<div class="help-para">
<pre>typedef struct lua_Debug {
    int event;
    const char *name;           /* (n) */
    const char *namewhat;       /* (n) */
    const char *what;           /* (S) */
    const char *source;         /* (S) */
    int currentline;            /* (l) */
    int nups;                   /* (u) number of upvalues */
    int linedefined;            /* (S) */
    int lastlinedefined;        /* (S) */
    char short_src[LUA_IDSIZE]; /* (S) */
    /* private part */
    other fields
} lua_Debug;</pre>

</div>
<div class="help-para">
A structure used to carry different pieces of information about an active
function. <code>lua_getstack</code> (see <a href="/neovim-docs-web/en/luaref#lua_getstack()">lua_getstack()</a>) fills only the private part
of this structure, for later use. To fill the other fields of <code>lua_Debug</code> with
useful information, call <code>lua_getinfo</code> (see <a href="/neovim-docs-web/en/luaref#lua_getinfo()">lua_getinfo()</a>).

</div>
<div class="help-para">
The fields of <code>lua_Debug</code>  have the following meaning:

</div>
<div class="help-para">
<div class="help-li" style=""> <code>source</code>             If the function was defined in a string, then <code>source</code> is
                     that string. If the function was defined in a file, then
                     <code>source</code> starts with a <code>@</code> followed by the file name.
</div><div class="help-li" style=""> <code>short_src</code>          a "printable" version of <code>source</code>, to be used in error messages.
</div><div class="help-li" style=""> <code>linedefined</code>        the line number where the definition of the function starts.
</div><div class="help-li" style=""> <code>lastlinedefined</code>    the line number where the definition of the function ends.
</div><div class="help-li" style=""> <code>what</code>               the string <code>"Lua"</code> if the function is a Lua function,
                     <code>"C"</code> if it is a C function, <code>"main"</code> if it is the main
                     part of a chunk, and <code>"tail"</code> if it was a function that
                     did a tail call. In the latter case, Lua has no other
                     information about the function.
</div><div class="help-li" style=""> <code>currentline</code>        the current line where the given function is executing.
                     When no line information is available, <code>currentline</code> is
                     set to -1.
</div><div class="help-li" style=""> <code>name</code>               a reasonable name for the given function. Because
                     functions in Lua are first-class values, they do not have
                     a fixed name: some functions may be the value of multiple
                     global variables, while others may be stored only in a
                     table field. The <code>lua_getinfo</code> function checks how the
                     function was called to find a suitable name. If it cannot
                     find a name, then <code>name</code> is set to <code>NULL</code>.
</div><div class="help-li" style=""> <code>namewhat</code>           explains the <code>name</code> field. The value of <code>namewhat</code> can be
                     <code>"global"</code>, <code>"local"</code>, <code>"method"</code>, <code>"field"</code>,
                     <code>"upvalue"</code>, or <code>""</code> (the empty string), according to how
                     the function was called. (Lua uses the empty string when
                     no other option seems to apply.) <code>nups</code>  the number of
                     upvalues of the function.
</div>
</div>
<div class="help-para">
lua_gethook                                                      <a name="lua_gethook()"></a><code class="help-tag-right">lua_gethook()</code>
<pre>lua_Hook lua_gethook (lua_State *L);</pre>

</div>
<div class="help-para">
        Returns the current hook function.

</div>
<div class="help-para">
lua_gethookcount                                            <a name="lua_gethookcount()"></a><code class="help-tag-right">lua_gethookcount()</code>
<pre>int lua_gethookcount (lua_State *L);</pre>

</div>
<div class="help-para">
        Returns the current hook count.

</div>
<div class="help-para">
lua_gethookmask                                              <a name="lua_gethookmask()"></a><code class="help-tag-right">lua_gethookmask()</code>
<pre>int lua_gethookmask (lua_State *L);</pre>

</div>
<div class="help-para">
        Returns the current hook mask.

</div>
<div class="help-para">
lua_getinfo                                                      <a name="lua_getinfo()"></a><code class="help-tag-right">lua_getinfo()</code>
<pre>int lua_getinfo (lua_State *L, const char *what, lua_Debug *ar);</pre>

</div>
<div class="help-para">
        Returns information about a specific function or function invocation.

</div>
<div class="help-para">
        To get information about a function invocation, the parameter <code>ar</code>
        must be a valid activation record that was filled by a previous call
        to <code>lua_getstack</code> (see <a href="/neovim-docs-web/en/luaref#lua_getstack()">lua_getstack()</a>) or given as argument to
        a hook (see <a href="/neovim-docs-web/en/luaref#lua_Hook()">lua_Hook()</a>).

</div>
<div class="help-para">
        To get information about a function you push it onto the stack and
        start the <code>what</code> string with the character <code>&gt;</code>. (In that case,
        <code>lua_getinfo</code> pops the function in the top of the stack.) For
        instance, to know in which line a function <code>f</code> was defined, you can
        write the following code:
<pre>lua_Debug ar;
lua_getfield(L, LUA_GLOBALSINDEX, "f");  /* get global 'f' */
lua_getinfo(L, "&gt;S", &amp;ar);
printf("%d\n", ar.linedefined);</pre>

</div>
<div class="help-para">
        Each character in the string <code>what</code> selects some fields of the
        structure <code>ar</code> to be filled or a value to be pushed on the stack:

</div>
<div class="help-para">
        <code>'n'</code>  fills in the field <code>name</code> and <code>namewhat</code>
        <code>'S'</code>  fills in the fields <code>source</code>, <code>short_src</code>, <code>linedefined</code>,
             <code>lastlinedefined</code>, and <code>what</code>
        <code>'l'</code>  fills in the field <code>currentline</code>
        <code>'u'</code>  fills in the field <code>nups</code>
        <code>'f'</code>  pushes onto the stack the function that is running at the
             given level
        <code>'L'</code>  pushes onto the stack a table whose indices are the numbers
             of the lines that are valid on the function. (A <code>valid line</code> is a
             line with some associated code, that is, a line where you can put
             a break point. Non-valid lines include empty lines and comments.)

</div>
<div class="help-para">
        This function returns 0 on error (for instance, an invalid option in
        <code>what</code>).

</div>
<div class="help-para">
lua_getlocal                                                    <a name="lua_getlocal()"></a><code class="help-tag-right">lua_getlocal()</code>
<pre>const char *lua_getlocal (lua_State *L, lua_Debug *ar, int n);</pre>

</div>
<div class="help-para">
        Gets information about a local variable of a given activation record.
        The parameter <code>ar</code> must be a valid activation record that was filled
        by a previous call to <code>lua_getstack</code> (see <a href="/neovim-docs-web/en/luaref#lua_getstack()">lua_getstack()</a>) or
        given as argument to a hook (see <a href="/neovim-docs-web/en/luaref#lua_Hook()">lua_Hook()</a>). The index <code>n</code>
        selects which local variable to inspect (1 is the first parameter or
        active local variable, and so on, until the last active local
        variable). <code>lua_getlocal</code> pushes the variable's value onto the stack
        and returns its name.

</div>
<div class="help-para">
        Variable names starting with <code>(</code> (open parentheses) represent
        internal variables (loop control variables, temporaries, and C
        function locals).

</div>
<div class="help-para">
        Returns <code>NULL</code> (and pushes nothing) when the index is greater than the
        number of active local variables.

</div>
<div class="help-para">
lua_getstack                                                    <a name="lua_getstack()"></a><code class="help-tag-right">lua_getstack()</code>
<pre>int lua_getstack (lua_State *L, int level, lua_Debug *ar);</pre>

</div>
<div class="help-para">
        Gets information about the interpreter runtime stack.

</div>
<div class="help-para">
        This function fills parts of a <code>lua_Debug</code> (see <a href="/neovim-docs-web/en/luaref#lua_Debug()">lua_Debug()</a>)
        structure with an identification of the <code>activation record</code> of the
        function executing at a given level. Level 0 is the current running
        function, whereas level <code>n+1</code> is the function that has called level
        <code>n</code>. When there are no errors, <code>lua_getstack</code> returns 1; when called
        with a level greater than the stack depth, it returns 0.

</div>
<div class="help-para">
lua_getupvalue                                                <a name="lua_getupvalue()"></a><code class="help-tag-right">lua_getupvalue()</code>
<pre>const char *lua_getupvalue (lua_State *L, int funcindex, int n);</pre>

</div>
<div class="help-para">
        Gets information about a closure's upvalue. (For Lua functions,
        upvalues are the external local variables that the function uses, and
        that are consequently included in its closure.) <code>lua_getupvalue</code> gets
        the index <code>n</code> of an upvalue, pushes the upvalue's value onto the
        stack, and returns its name. <code>funcindex</code> points to the closure in the
        stack. (Upvalues have no particular order, as they are active through
        the whole function. So, they are numbered in an arbitrary order.)

</div>
<div class="help-para">
        Returns <code>NULL</code> (and pushes nothing) when the index is greater than the
        number of upvalues. For C functions, this function uses the empty
        string <code>""</code> as a name for all upvalues.

</div>
<div class="help-para">
lua_Hook                                                            <a name="lua_Hook()"></a><code class="help-tag-right">lua_Hook()</code>
<pre>typedef void (*lua_Hook) (lua_State *L, lua_Debug *ar);</pre>

</div>
<div class="help-para">
        Type for debugging hook functions.

</div>
<div class="help-para">
        Whenever a hook is called, its <code>ar</code> argument has its field <code>event</code> set
        to the specific event that triggered the hook. Lua identifies these
        events with the following constants: <code>LUA_HOOKCALL</code>, <code>LUA_HOOKRET</code>,
        <code>LUA_HOOKTAILRET</code>, <code>LUA_HOOKLINE</code>, and <code>LUA_HOOKCOUNT</code>. Moreover, for
        line events, the field <code>currentline</code> is also set. To get the value of
        any other field in <code>ar</code>, the hook must call <code>lua_getinfo</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_getinfo()">lua_getinfo()</a>). For return events, <code>event</code> may be
        <code>LUA_HOOKRET</code>, the normal value, or <code>LUA_HOOKTAILRET</code>. In the latter
        case, Lua is simulating a return from a function that did a tail call;
        in this case, it is useless to call <code>lua_getinfo</code>.

</div>
<div class="help-para">
        While Lua is running a hook, it disables other calls to hooks.
        Therefore, if a hook calls back Lua to execute a function or a chunk,
        this execution occurs without any calls to hooks.

</div>
<div class="help-para">
lua_sethook                                                      <a name="lua_sethook()"></a><code class="help-tag-right">lua_sethook()</code>
<pre>int lua_sethook (lua_State *L, lua_Hook f, int mask, int count);</pre>

</div>
<div class="help-para">
        Sets the debugging hook function.

</div>
<div class="help-para">
        Argument <code>f</code> is the hook function. <code>mask</code> specifies on which events
        the hook will be called: it is formed by a bitwise <code>or</code> of the
        constants <code>LUA_MASKCALL</code>, <code>LUA_MASKRET</code>, <code>LUA_MASKLINE</code>, and
        <code>LUA_MASKCOUNT</code>. The <code>count</code> argument is only meaningful when the mask
        includes <code>LUA_MASKCOUNT</code>. For each event, the hook is called as
        explained below:

</div>
<div class="help-para">
<div class="help-li" style=""> <code>The call hook</code>: is called when the interpreter calls a function.
           The hook is called just after Lua enters the new function, before
           the function gets its arguments.
</div><div class="help-li" style=""> <code>The return hook</code>: is called when the interpreter returns from a
           function. The hook is called just before Lua leaves the function.
           You have no access to the values to be returned by the function.
</div><div class="help-li" style=""> <code>The line hook</code>: is called when the interpreter is about to start
           the execution of a new line of code, or when it jumps back in the
           code (even to the same line). (This event only happens while Lua is
           executing a Lua function.)
</div><div class="help-li" style=""> <code>The count hook</code>: is called after the interpreter executes every
           <code>count</code> instructions. (This event only happens while Lua is
           executing a Lua function.)
</div>
</div>
<div class="help-para">
        A hook is disabled by setting <code>mask</code> to zero.

</div>
<div class="help-para">
lua_setlocal                                                    <a name="lua_setlocal()"></a><code class="help-tag-right">lua_setlocal()</code>
<pre>const char *lua_setlocal (lua_State *L, lua_Debug *ar, int n);</pre>

</div>
<div class="help-para">
        Sets the value of a local variable of a given activation record.
        Parameters <code>ar</code> and <code>n</code> are as in <code>lua_getlocal</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_getlocal()">lua_getlocal()</a>). <code>lua_setlocal</code> assigns the value at the top of
        the stack to the variable and returns its name. It also pops the value
        from the stack.

</div>
<div class="help-para">
        Returns <code>NULL</code> (and pops nothing) when the index is greater than the
        number of active local variables.

</div>
<div class="help-para">
lua_setupvalue                                                <a name="lua_setupvalue()"></a><code class="help-tag-right">lua_setupvalue()</code>
<pre>const char *lua_setupvalue (lua_State *L, int funcindex, int n);</pre>

</div>
<div class="help-para">
        Sets the value of a closure's upvalue. It assigns the value at the top
        of the stack to the upvalue and returns its name. It also pops the
        value from the stack. Parameters <code>funcindex</code> and <code>n</code> are as in the
        <code>lua_getupvalue</code> (see <a href="/neovim-docs-web/en/luaref#lua_getupvalue()">lua_getupvalue()</a>).

</div>
<div class="help-para">
        Returns <code>NULL</code> (and pops nothing) when the index is greater than the
        number of upvalues.

</div>
<div class="help-para">
                                                           <a name="luaref-debugexample"></a><code class="help-tag-right">luaref-debugexample</code>
        As an example, the following function lists the names of all local
        variables and upvalues for a function at a given level of the stack:
<pre>int listvars (lua_State *L, int level) {
  lua_Debug ar;
  int i;
  const char *name;
  if (lua_getstack(L, level, &amp;ar) == 0)
    return 0;  /* failure: no such level in the stack */
  i = 1;
  while ((name = lua_getlocal(L, &amp;ar, i++)) != NULL) {
    printf("local %d %s\n", i-1, name);
    lua_pop(L, 1);  /* remove variable value */
  }
  lua_getinfo(L, "f", &amp;ar);  /* retrieves function */
  i = 1;
  while ((name = lua_getupvalue(L, -1, i++)) != NULL) {
    printf("upvalue %d %s\n", i-1, name);
    lua_pop(L, 1);  /* remove upvalue value */
  }
  return 1;
}</pre>

</div>
<div class="help-para">
<h2 class="help-heading">4  THE AUXILIARY LIBRARY<span class="help-heading-tags">                                            <a name="luaref-aux"></a><span class="help-tag">luaref-aux</span></span></h2>


</div>
<div class="help-para">
The auxiliary library provides several convenient functions to interface C
with Lua. While the basic API provides the primitive functions for all
interactions between C and Lua, the auxiliary library provides higher-level
functions for some common tasks.

</div>
<div class="help-para">
All functions from the auxiliary library are defined in header file <code>lauxlib.h</code>
and have a prefix <code>luaL_</code>.

</div>
<div class="help-para">
All functions in the auxiliary library are built on top of the basic API, and
so they provide nothing that cannot be done with this API.

</div>
<div class="help-para">
Several functions in the auxiliary library are used to check C function
arguments. Their names are always <code>luaL_check*</code> or <code>luaL_opt*</code>. All of these
functions raise an error if the check is not satisfied. Because the error
message is formatted for arguments (e.g., "bad argument #1"), you should not
use these functions for other stack values.

</div>
<div class="help-para">
<h2 class="help-heading">4.1  Functions and Types<span class="help-heading-tags">                                   <a name="luaref-auxFunctions"></a><span class="help-tag">luaref-auxFunctions</span></span></h2>


</div>
<div class="help-para">
Here we list all functions and types from the auxiliary library in
alphabetical order.

</div>
<div class="help-para">
luaL_addchar                                                    <a name="luaL_addchar()"></a><code class="help-tag-right">luaL_addchar()</code>
<pre>void luaL_addchar (luaL_Buffer *B, char c);</pre>

</div>
<div class="help-para">
        Adds the character <code>c</code> to the buffer <code>B</code> (see <a href="/neovim-docs-web/en/luaref#luaL_Buffer()">luaL_Buffer()</a>).

</div>
<div class="help-para">
luaL_addlstring                                              <a name="luaL_addlstring()"></a><code class="help-tag-right">luaL_addlstring()</code>
<pre>void luaL_addlstring (luaL_Buffer *B, const char *s, size_t l);</pre>

</div>
<div class="help-para">
        Adds the string pointed to by <code>s</code> with length <code>l</code> to the buffer <code>B</code>
        (see <a href="/neovim-docs-web/en/luaref#luaL_Buffer()">luaL_Buffer()</a>). The string may contain embedded zeros.

</div>
<div class="help-para">
luaL_addsize                                                    <a name="luaL_addsize()"></a><code class="help-tag-right">luaL_addsize()</code>
<pre>void luaL_addsize (luaL_Buffer *B, size_t n);</pre>

</div>
<div class="help-para">
        Adds to the buffer <code>B</code> (see <a href="/neovim-docs-web/en/luaref#luaL_Buffer()">luaL_Buffer()</a>) a string of length
        <code>n</code> previously copied to the buffer area (see
        <a href="/neovim-docs-web/en/luaref#luaL_prepbuffer()">luaL_prepbuffer()</a>).

</div>
<div class="help-para">
luaL_addstring                                                <a name="luaL_addstring()"></a><code class="help-tag-right">luaL_addstring()</code>
<pre>void luaL_addstring (luaL_Buffer *B, const char *s);</pre>

</div>
<div class="help-para">
        Adds the zero-terminated string pointed to by <code>s</code> to the buffer <code>B</code>
        (see <a href="/neovim-docs-web/en/luaref#luaL_Buffer()">luaL_Buffer()</a>). The string may not contain embedded zeros.

</div>
<div class="help-para">
luaL_addvalue                                                  <a name="luaL_addvalue()"></a><code class="help-tag-right">luaL_addvalue()</code>
<pre>void luaL_addvalue (luaL_Buffer *B);</pre>

</div>
<div class="help-para">
        Adds the value at the top of the stack to the buffer <code>B</code> (see
        <a href="/neovim-docs-web/en/luaref#luaL_Buffer()">luaL_Buffer()</a>). Pops the value.

</div>
<div class="help-para">
        This is the only function on string buffers that can (and must) be
        called with an extra element on the stack, which is the value to be
        added to the buffer.

</div>
<div class="help-para">
luaL_argcheck                                                  <a name="luaL_argcheck()"></a><code class="help-tag-right">luaL_argcheck()</code>
<pre>void luaL_argcheck (lua_State *L,
                    int cond,
                    int narg,
                    const char *extramsg);</pre>

</div>
<div class="help-para">
        Checks whether <code>cond</code> is true. If not, raises an error with the
        following message, where <code>func</code> is retrieved from the call stack:
<pre>bad argument #&lt;narg&gt; to &lt;func&gt; (&lt;extramsg&gt;)</pre>

</div>
<div class="help-para">
luaL_argerror                                                  <a name="luaL_argerror()"></a><code class="help-tag-right">luaL_argerror()</code>
<pre>int luaL_argerror (lua_State *L, int narg, const char *extramsg);</pre>

</div>
<div class="help-para">
        Raises an error with the following message, where <code>func</code> is retrieved
        from the call stack:
<pre>bad argument #&lt;narg&gt; to &lt;func&gt; (&lt;extramsg&gt;)</pre>

</div>
<div class="help-para">
        This function never returns, but it is an idiom to use it in C
        functions as <code>return luaL_argerror(</code> <code>args</code> <code>)</code>.

</div>
<div class="help-para">
luaL_Buffer                                                      <a name="luaL_Buffer()"></a><code class="help-tag-right">luaL_Buffer()</code>
<pre>typedef struct luaL_Buffer luaL_Buffer;</pre>

</div>
<div class="help-para">
        Type for a <code>string buffer</code>.

</div>
<div class="help-para">
        A string buffer allows C code to build Lua strings piecemeal. Its
        pattern of use is as follows:

</div>
<div class="help-para">
<div class="help-li" style=""> First you declare a variable <code>b</code> of type <code>luaL_Buffer</code>.
</div><div class="help-li" style=""> Then you initialize it with a call <code>luaL_buffinit(L, &amp;b)</code> (see
           <a href="/neovim-docs-web/en/luaref#luaL_buffinit()">luaL_buffinit()</a>).
</div><div class="help-li" style=""> Then you add string pieces to the buffer calling any of the
           <code>luaL_add*</code> functions.
</div><div class="help-li" style=""> You finish by calling <code>luaL_pushresult(&amp;b)</code> (see
           <a href="/neovim-docs-web/en/luaref#luaL_pushresult()">luaL_pushresult()</a>). This call leaves the final string on the
           top of the stack.
</div>
</div>
<div class="help-para">
        During its normal operation, a string buffer uses a variable number of
        stack slots. So, while using a buffer, you cannot assume that you know
        where the top of the stack is. You can use the stack between
        successive calls to buffer operations as long as that use is balanced;
        that is, when you call a buffer operation, the stack is at the same
        level it was immediately after the previous buffer operation. (The
        only exception to this rule is <code>luaL_addvalue</code>
        <a href="/neovim-docs-web/en/luaref#luaL_addvalue()">luaL_addvalue()</a>.) After calling <code>luaL_pushresult</code> the stack is
        back to its level when the buffer was initialized, plus the final
        string on its top.

</div>
<div class="help-para">
luaL_buffinit                                                  <a name="luaL_buffinit()"></a><code class="help-tag-right">luaL_buffinit()</code>
<pre>void luaL_buffinit (lua_State *L, luaL_Buffer *B);</pre>

</div>
<div class="help-para">
        Initializes a buffer <code>B</code>. This function does not allocate any space;
        the buffer must be declared as a variable (see <a href="/neovim-docs-web/en/luaref#luaL_Buffer()">luaL_Buffer()</a>).

</div>
<div class="help-para">
luaL_callmeta                                                  <a name="luaL_callmeta()"></a><code class="help-tag-right">luaL_callmeta()</code>
<pre>int luaL_callmeta (lua_State *L, int obj, const char *e);</pre>

</div>
<div class="help-para">
        Calls a metamethod.

</div>
<div class="help-para">
        If the object at index <code>obj</code> has a metatable and this metatable has a
        field <code>e</code>, this function calls this field and passes the object as its
        only argument. In this case this function returns 1 and pushes onto
        the stack the value returned by the call. If there is no metatable or
        no metamethod, this function returns
        0 (without pushing any value on the stack).

</div>
<div class="help-para">
luaL_checkany                                                  <a name="luaL_checkany()"></a><code class="help-tag-right">luaL_checkany()</code>
<pre>void luaL_checkany (lua_State *L, int narg);</pre>

</div>
<div class="help-para">
        Checks whether the function has an argument of any type (including
        <code>nil</code>) at position <code>narg</code>.

</div>
<div class="help-para">
luaL_checkint                                                  <a name="luaL_checkint()"></a><code class="help-tag-right">luaL_checkint()</code>
<pre>int luaL_checkint (lua_State *L, int narg);</pre>

</div>
<div class="help-para">
        Checks whether the function argument <code>narg</code> is a number and returns
        this number cast to an <code>int</code>.

</div>
<div class="help-para">
luaL_checkinteger                                          <a name="luaL_checkinteger()"></a><code class="help-tag-right">luaL_checkinteger()</code>
<pre>lua_Integer luaL_checkinteger (lua_State *L, int narg);</pre>

</div>
<div class="help-para">
        Checks whether the function argument <code>narg</code> is a number and returns
        this number cast to a <code>lua_Integer</code> (see <a href="/neovim-docs-web/en/luaref#lua_Integer()">lua_Integer()</a>).

</div>
<div class="help-para">
luaL_checklong                                                <a name="luaL_checklong()"></a><code class="help-tag-right">luaL_checklong()</code>
<pre>long luaL_checklong (lua_State *L, int narg);</pre>

</div>
<div class="help-para">
        Checks whether the function argument <code>narg</code> is a number and returns
        this number cast to a <code>long</code>.

</div>
<div class="help-para">
luaL_checklstring                                          <a name="luaL_checklstring()"></a><code class="help-tag-right">luaL_checklstring()</code>
<pre>const char *luaL_checklstring (lua_State *L, int narg, size_t *l);</pre>

</div>
<div class="help-para">
        Checks whether the function argument <code>narg</code> is a string and returns
        this string; if <code>l</code> is not <code>NULL</code> fills <code>*l</code> with the string's length.

</div>
<div class="help-para">
luaL_checknumber                                            <a name="luaL_checknumber()"></a><code class="help-tag-right">luaL_checknumber()</code>
<pre>lua_Number luaL_checknumber (lua_State *L, int narg);</pre>

</div>
<div class="help-para">
        Checks whether the function argument <code>narg</code> is a number and returns
        this number (see <a href="/neovim-docs-web/en/luaref#lua_Number()">lua_Number()</a>).

</div>
<div class="help-para">
luaL_checkoption                                            <a name="luaL_checkoption()"></a><code class="help-tag-right">luaL_checkoption()</code>
<pre>int luaL_checkoption (lua_State *L,
                      int narg,
                      const char *def,
                      const char *const lst[]);</pre>

</div>
<div class="help-para">
        Checks whether the function argument <code>narg</code> is a string and searches
        for this string in the array <code>lst</code> (which must be NULL-terminated).
        Returns the index in the array where the string was found. Raises an
        error if the argument is not a string or if the string cannot be
        found.

</div>
<div class="help-para">
        If <code>def</code> is not <code>NULL</code>, the function uses <code>def</code> as a default value
        when there is no argument <code>narg</code> or if this argument is <code>nil</code>.

</div>
<div class="help-para">
        This is a useful function for mapping strings to C enums. (The usual
        convention in Lua libraries is to use strings instead of numbers to
        select options.)

</div>
<div class="help-para">
luaL_checkstack                                              <a name="luaL_checkstack()"></a><code class="help-tag-right">luaL_checkstack()</code>
<pre>void luaL_checkstack (lua_State *L, int sz, const char *msg);</pre>

</div>
<div class="help-para">
        Grows the stack size to <code>top + sz</code> elements, raising an error if the
        stack cannot grow to that size. <code>msg</code> is an additional text to go into
        the error message.

</div>
<div class="help-para">
luaL_checkstring                                            <a name="luaL_checkstring()"></a><code class="help-tag-right">luaL_checkstring()</code>
<pre>const char *luaL_checkstring (lua_State *L, int narg);</pre>

</div>
<div class="help-para">
        Checks whether the function argument <code>narg</code> is a string and returns
        this string.

</div>
<div class="help-para">
luaL_checktype                                                <a name="luaL_checktype()"></a><code class="help-tag-right">luaL_checktype()</code>
<pre>void luaL_checktype (lua_State *L, int narg, int t);</pre>

</div>
<div class="help-para">
        Checks whether the function argument <code>narg</code> has type <code>t</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_type()">lua_type()</a>).

</div>
<div class="help-para">
luaL_checkudata                                              <a name="luaL_checkudata()"></a><code class="help-tag-right">luaL_checkudata()</code>
<pre>void *luaL_checkudata (lua_State *L, int narg, const char *tname);</pre>

</div>
<div class="help-para">
        Checks whether the function argument <code>narg</code> is a userdata of the type
        <code>tname</code> (see <a href="/neovim-docs-web/en/luaref#luaL_newmetatable()">luaL_newmetatable()</a>).

</div>
<div class="help-para">
luaL_dofile                                                      <a name="luaL_dofile()"></a><code class="help-tag-right">luaL_dofile()</code>
<pre>int luaL_dofile (lua_State *L, const char *filename);</pre>

</div>
<div class="help-para">
        Loads and runs the given file. It is defined as the following macro:
<pre>(luaL_loadfile(L, filename) || lua_pcall(L, 0, LUA_MULTRET, 0))</pre>

</div>
<div class="help-para">
        It returns 0 if there are no errors or 1 in case of errors.

</div>
<div class="help-para">
luaL_dostring                                                  <a name="luaL_dostring()"></a><code class="help-tag-right">luaL_dostring()</code>
<pre>int luaL_dostring (lua_State *L, const char *str);</pre>

</div>
<div class="help-para">
        Loads and runs the given string. It is defined as the following macro:
<pre>(luaL_loadstring(L, str) || lua_pcall(L, 0, LUA_MULTRET, 0))</pre>

</div>
<div class="help-para">
        It returns 0 if there are no errors or 1 in case of errors.

</div>
<div class="help-para">
luaL_error                                                        <a name="luaL_error()"></a><code class="help-tag-right">luaL_error()</code>
<pre>int luaL_error (lua_State *L, const char *fmt, ...);</pre>

</div>
<div class="help-para">
        Raises an error. The error message format is given by <code>fmt</code> plus any
        extra arguments, following the same rules of <code>lua_pushfstring</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_pushfstring()">lua_pushfstring()</a>). It also adds at the beginning of the
        message the file name and the line number where the error occurred, if
        this information is available.

</div>
<div class="help-para">
        This function never returns, but it is an idiom to use it in C
        functions as <code>return luaL_error(</code> <code>args</code> <code>)</code>.

</div>
<div class="help-para">
luaL_getmetafield                                          <a name="luaL_getmetafield()"></a><code class="help-tag-right">luaL_getmetafield()</code>
<pre>int luaL_getmetafield (lua_State *L, int obj, const char *e);</pre>

</div>
<div class="help-para">
        Pushes onto the stack the field <code>e</code> from the metatable of the object
        at index <code>obj</code>. If the object does not have a metatable, or if the
        metatable does not have this field, returns 0 and pushes nothing.

</div>
<div class="help-para">
luaL_getmetatable                                          <a name="luaL_getmetatable()"></a><code class="help-tag-right">luaL_getmetatable()</code>
<pre>void luaL_getmetatable (lua_State *L, const char *tname);</pre>

</div>
<div class="help-para">
        Pushes onto the stack the metatable associated with name <code>tname</code> in
        the registry (see <a href="/neovim-docs-web/en/luaref#luaL_newmetatable()">luaL_newmetatable()</a>).

</div>
<div class="help-para">
luaL_gsub                                                          <a name="luaL_gsub()"></a><code class="help-tag-right">luaL_gsub()</code>
<pre>const char *luaL_gsub (lua_State *L,
                       const char *s,
                       const char *p,
                       const char *r);</pre>

</div>
<div class="help-para">
        Creates a copy of string <code>s</code> by replacing any occurrence of the string
        <code>p</code> with the string <code>r</code>. Pushes the resulting string on the stack and
        returns it.

</div>
<div class="help-para">
luaL_loadbuffer                                              <a name="luaL_loadbuffer()"></a><code class="help-tag-right">luaL_loadbuffer()</code>
<pre>int luaL_loadbuffer (lua_State *L,
                     const char *buff,
                     size_t sz,
                     const char *name);</pre>

</div>
<div class="help-para">
        Loads a buffer as a Lua chunk. This function uses <code>lua_load</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_load()">lua_load()</a>) to load the chunk in the buffer pointed to by
        <code>buff</code> with size <code>sz</code>.

</div>
<div class="help-para">
        This function returns the same results as <code>lua_load</code>. <code>name</code> is the
        chunk name, used for debug information and error messages.

</div>
<div class="help-para">
luaL_loadfile                                                  <a name="luaL_loadfile()"></a><code class="help-tag-right">luaL_loadfile()</code>
<pre>int luaL_loadfile (lua_State *L, const char *filename);</pre>

</div>
<div class="help-para">
        Loads a file as a Lua chunk. This function uses <code>lua_load</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_load()">lua_load()</a>) to load the chunk in the file named <code>filename</code>. If
        <code>filename</code> is <code>NULL</code>, then it loads from the standard input. The first
        line in the file is ignored if it starts with a <code>#</code>.

</div>
<div class="help-para">
        This function returns the same results as <code>lua_load</code>, but it has an
        extra error code <code>LUA_ERRFILE</code> if it cannot open/read the file.

</div>
<div class="help-para">
        As <code>lua_load</code>, this function only loads the chunk; it does not run it.

</div>
<div class="help-para">
luaL_loadstring                                              <a name="luaL_loadstring()"></a><code class="help-tag-right">luaL_loadstring()</code>
<pre>int luaL_loadstring (lua_State *L, const char *s);</pre>

</div>
<div class="help-para">
        Loads a string as a Lua chunk. This function uses <code>lua_load</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_load()">lua_load()</a>) to load the chunk in the zero-terminated string
        <code>s</code>.

</div>
<div class="help-para">
        This function returns the same results as <code>lua_load</code>.

</div>
<div class="help-para">
        Also as <code>lua_load</code>, this function only loads the chunk; it does not
        run it.

</div>
<div class="help-para">
luaL_newmetatable                                          <a name="luaL_newmetatable()"></a><code class="help-tag-right">luaL_newmetatable()</code>
<pre>int luaL_newmetatable (lua_State *L, const char *tname);</pre>

</div>
<div class="help-para">
        If the registry already has the key <code>tname</code>, returns 0. Otherwise,
        creates a new table to be used as a metatable for userdata, adds it to
        the registry with key <code>tname</code>, and returns 1.

</div>
<div class="help-para">
        In both cases pushes onto the stack the final value associated with
        <code>tname</code> in the registry.

</div>
<div class="help-para">
luaL_newstate                                                  <a name="luaL_newstate()"></a><code class="help-tag-right">luaL_newstate()</code>
<pre>lua_State *luaL_newstate (void);</pre>

</div>
<div class="help-para">
        Creates a new Lua state. It calls <code>lua_newstate</code> (see
        <a href="/neovim-docs-web/en/luaref#lua_newstate()">lua_newstate()</a>) with an allocator based on the standard C
        <code>realloc</code> function and then sets a panic function (see
        <a href="/neovim-docs-web/en/luaref#lua_atpanic()">lua_atpanic()</a>) that prints an error message to the standard
        error output in case of fatal errors.

</div>
<div class="help-para">
        Returns the new state, or <code>NULL</code> if there is a memory allocation
        error.

</div>
<div class="help-para">
luaL_openlibs                                                  <a name="luaL_openlibs()"></a><code class="help-tag-right">luaL_openlibs()</code>
<pre>void luaL_openlibs (lua_State *L);</pre>

</div>
<div class="help-para">
        Opens all standard Lua libraries into the given state. See also
        <a href="/neovim-docs-web/en/luaref#luaref-openlibs">luaref-openlibs</a> for details on how to open individual libraries.

</div>
<div class="help-para">
luaL_optint                                                      <a name="luaL_optint()"></a><code class="help-tag-right">luaL_optint()</code>
<pre>int luaL_optint (lua_State *L, int narg, int d);</pre>

</div>
<div class="help-para">
        If the function argument <code>narg</code> is a number, returns this number cast
        to an <code>int</code>. If this argument is absent or is <code>nil</code>, returns <code>d</code>.
        Otherwise, raises an error.

</div>
<div class="help-para">
luaL_optinteger                                              <a name="luaL_optinteger()"></a><code class="help-tag-right">luaL_optinteger()</code>
<pre>lua_Integer luaL_optinteger (lua_State *L,
                             int narg,
                             lua_Integer d);</pre>

</div>
<div class="help-para">
        If the function argument <code>narg</code> is a number, returns this number cast
        to a <code>lua_Integer</code> (see <a href="/neovim-docs-web/en/luaref#lua_Integer()">lua_Integer()</a>). If this argument is
        absent or is <code>nil</code>, returns <code>d</code>. Otherwise, raises an error.

</div>
<div class="help-para">
luaL_optlong                                                    <a name="luaL_optlong()"></a><code class="help-tag-right">luaL_optlong()</code>
<pre>long luaL_optlong (lua_State *L, int narg, long d);</pre>

</div>
<div class="help-para">
        If the function argument <code>narg</code> is a number, returns this number cast
        to a <code>long</code>. If this argument is absent or is <code>nil</code>, returns <code>d</code>.
        Otherwise, raises an error.

</div>
<div class="help-para">
luaL_optlstring                                              <a name="luaL_optlstring()"></a><code class="help-tag-right">luaL_optlstring()</code>
<pre>const char *luaL_optlstring (lua_State *L,
                             int narg,
                             const char *d,
                             size_t *l);</pre>

</div>
<div class="help-para">
        If the function argument <code>narg</code> is a string, returns this string. If
        this argument is absent or is <code>nil</code>, returns <code>d</code>. Otherwise, raises an
        error.

</div>
<div class="help-para">
        If <code>l</code> is not <code>NULL</code>, fills the position <code>*l</code> with the results' length.

</div>
<div class="help-para">
luaL_optnumber                                                <a name="luaL_optnumber()"></a><code class="help-tag-right">luaL_optnumber()</code>
<pre>lua_Number luaL_optnumber (lua_State *L, int narg, lua_Number d);</pre>

</div>
<div class="help-para">
        If the function argument <code>narg</code> is a number, returns this number. If
        this argument is absent or is <code>nil</code>, returns <code>d</code>. Otherwise, raises an
        error.

</div>
<div class="help-para">
luaL_optstring                                                <a name="luaL_optstring()"></a><code class="help-tag-right">luaL_optstring()</code>
<pre>const char *luaL_optstring (lua_State *L,
                            int narg,
                            const char *d);</pre>

</div>
<div class="help-para">
        If the function argument <code>narg</code> is a string, returns this string. If
        this argument is absent or is <code>nil</code>, returns <code>d</code>. Otherwise, raises an
        error.

</div>
<div class="help-para">
luaL_prepbuffer                                              <a name="luaL_prepbuffer()"></a><code class="help-tag-right">luaL_prepbuffer()</code>
<pre>char *luaL_prepbuffer (luaL_Buffer *B);</pre>

</div>
<div class="help-para">
        Returns an address to a space of size <code>LUAL_BUFFERSIZE</code> where you can
        copy a string to be added to buffer <code>B</code> (see <a href="/neovim-docs-web/en/luaref#luaL_Buffer()">luaL_Buffer()</a>).
        After copying the string into this space you must call <code>luaL_addsize</code>
        (see <a href="/neovim-docs-web/en/luaref#luaL_addsize()">luaL_addsize()</a>) with the size of the string to actually
        add it to the buffer.

</div>
<div class="help-para">
luaL_pushresult                                              <a name="luaL_pushresult()"></a><code class="help-tag-right">luaL_pushresult()</code>
<pre>void luaL_pushresult (luaL_Buffer *B);</pre>

</div>
<div class="help-para">
        Finishes the use of buffer <code>B</code> leaving the final string on the top of
        the stack.

</div>
<div class="help-para">
luaL_ref                                                            <a name="luaL_ref()"></a><code class="help-tag-right">luaL_ref()</code>
<pre>int luaL_ref (lua_State *L, int t);</pre>

</div>
<div class="help-para">
        Creates and returns a <code>reference</code>, in the table at index <code>t</code>, for the
        object at the top of the stack (and pops the object).

</div>
<div class="help-para">
        A reference is a unique integer key. As long as you do not manually
        add integer keys into table <code>t</code>, <code>luaL_ref</code> ensures the uniqueness of
        the key it returns. You can retrieve an object referred by reference
        <code>r</code> by calling <code>lua_rawgeti(L, t, r)</code> (see <a href="/neovim-docs-web/en/luaref#lua_rawgeti()">lua_rawgeti()</a>).
        Function <code>luaL_unref</code> (see <a href="/neovim-docs-web/en/luaref#luaL_unref()">luaL_unref()</a>) frees a reference and
        its associated object.

</div>
<div class="help-para">
        If the object at the top of the stack is <code>nil</code>, <code>luaL_ref</code> returns the
        constant <code>LUA_REFNIL</code>. The constant <code>LUA_NOREF</code> is guaranteed to be
        different from any reference returned by <code>luaL_ref</code>.

</div>
<div class="help-para">
luaL_Reg                                                            <a name="luaL_Reg()"></a><code class="help-tag-right">luaL_Reg()</code>
<pre>typedef struct luaL_Reg {
    const char *name;
    lua_CFunction func;
} luaL_Reg;</pre>

</div>
<div class="help-para">
        Type for arrays of functions to be registered by <code>luaL_register</code>  (see
        <a href="/neovim-docs-web/en/luaref#luaL_register()">luaL_register()</a>). <code>name</code> is the function name and <code>func</code> is a
        pointer to the function. Any array of <code>luaL_Reg</code> must end with a
        sentinel entry in which both <code>name</code> and <code>func</code> are <code>NULL</code>.

</div>
<div class="help-para">
luaL_register                                                  <a name="luaL_register()"></a><code class="help-tag-right">luaL_register()</code>
<pre>void luaL_register (lua_State *L,
                    const char *libname,
                    const luaL_Reg *l);</pre>

</div>
<div class="help-para">
        Opens a library.

</div>
<div class="help-para">
        When called with <code>libname</code> equal to <code>NULL</code>, it simply registers all
        functions in the list <code>l</code> (see <a href="/neovim-docs-web/en/luaref#luaL_Reg()">luaL_Reg()</a>) into the table on
        the top of the stack.

</div>
<div class="help-para">
        When called with a non-null <code>libname</code>, <code>luaL_register</code> creates a new
        table <code>t</code>, sets it as the value of the global variable <code>libname</code>, sets
        it as the value of <code>package.loaded[libname]</code>, and registers on it all
        functions in the list <code>l</code>. If there is a table in
        <code>package.loaded[libname]</code> or in variable <code>libname</code>, reuses this table
        instead of creating a new one.

</div>
<div class="help-para">
        In any case the function leaves the table on the top of the stack.

</div>
<div class="help-para">
luaL_typename                                                  <a name="luaL_typename()"></a><code class="help-tag-right">luaL_typename()</code>
<pre>const char *luaL_typename (lua_State *L, int idx);</pre>

</div>
<div class="help-para">
        Returns the name of the type of the value at index <code>idx</code>.

</div>
<div class="help-para">
luaL_typerror                                                  <a name="luaL_typerror()"></a><code class="help-tag-right">luaL_typerror()</code>
<pre>int luaL_typerror (lua_State *L, int narg, const char *tname);</pre>

</div>
<div class="help-para">
        Generates an error with a message like the following:

</div>
<div class="help-para">
          <code>location</code>  <code>: bad argument</code>  <code>narg</code>  <code>to</code>  <code>'func'</code>  <code>(</code>  <code>tname</code>
          <code>expected, got</code>  <code>rt</code>  <code>)</code>

</div>
<div class="help-para">
        where <code>location</code> is produced by <code>luaL_where</code>  (see
        <a href="/neovim-docs-web/en/luaref#luaL_where()">luaL_where()</a>), <code>func</code> is the name of the current function, and
        <code>rt</code> is the type name of the actual argument.

</div>
<div class="help-para">
luaL_unref                                                        <a name="luaL_unref()"></a><code class="help-tag-right">luaL_unref()</code>
<pre>void luaL_unref (lua_State *L, int t, int ref);</pre>

</div>
<div class="help-para">
        Releases reference <code>ref</code> from the table at index <code>t</code> (see
        <a href="/neovim-docs-web/en/luaref#luaL_ref()">luaL_ref()</a>). The entry is removed from the table, so that the
        referred object can be collected. The reference <code>ref</code> is also freed to
        be used again.

</div>
<div class="help-para">
        If <code>ref</code> is <code>LUA_NOREF</code> or <code>LUA_REFNIL</code>, <code>luaL_unref</code> does nothing.

</div>
<div class="help-para">
luaL_where                                                        <a name="luaL_where()"></a><code class="help-tag-right">luaL_where()</code>
<pre>void luaL_where (lua_State *L, int lvl);</pre>

</div>
<div class="help-para">
        Pushes onto the stack a string identifying the current position of the
        control at level <code>lvl</code> in the call stack. Typically this string has
        the following format:

</div>
<div class="help-para">
            <code>chunkname:currentline:</code>

</div>
<div class="help-para">
        Level 0 is the running function, level 1 is the function that called
        the running function, etc.

</div>
<div class="help-para">
        This function is used to build a prefix for error messages.

</div>
<div class="help-para">
<h2 class="help-heading">5  STANDARD LIBRARIES<span class="help-heading-tags">                                               <a name="luaref-Lib"></a><span class="help-tag">luaref-Lib</span></span></h2>


</div>
<div class="help-para">
The standard libraries provide useful functions that are implemented directly
through the C API. Some of these functions provide essential services to the
language (e.g., <code>type</code> and <code>getmetatable</code>); others provide access to "outside"
services (e.g., I/O); and others could be implemented in Lua itself, but are
quite useful or have critical performance requirements that deserve an
implementation in C (e.g., <code>sort</code>).

</div>
<div class="help-para">
All libraries are implemented through the official C API and are provided as
separate C modules. Currently, Lua has the following standard libraries:

</div>
<div class="help-para">
<div class="help-li" style=""> basic library;
</div><div class="help-li" style=""> package library;
</div><div class="help-li" style=""> string manipulation;
</div><div class="help-li" style=""> table manipulation;
</div><div class="help-li" style=""> mathematical functions (sin, log, etc.);
</div><div class="help-li" style=""> input and output;
</div><div class="help-li" style=""> operating system facilities;
</div><div class="help-li" style=""> debug facilities.
</div>
</div>
<div class="help-para">
Except for the basic and package libraries, each library provides all its
functions as fields of a global table or as methods of its objects.

</div>
<div class="help-para">
                                                               <a name="luaref-openlibs"></a><code class="help-tag-right">luaref-openlibs</code>
To have access to these libraries, the C host program should call the
<code>luaL_openlibs</code> function, which opens all standard libraries (see
<a href="/neovim-docs-web/en/luaref#luaL_openlibs()">luaL_openlibs()</a>). Alternatively, the host program can open the libraries
individually by calling <code>luaopen_base</code> (for the basic library),
<code>luaopen_package</code> (for the package library), <code>luaopen_string</code> (for the string
library), <code>luaopen_table</code> (for the table library), <code>luaopen_math</code> (for the
mathematical library), <code>luaopen_io</code> (for the I/O and the Operating System
libraries), and <code>luaopen_debug</code> (for the debug library). These functions are
declared in <code>lualib.h</code> and should not be called directly: you must call them
like any other Lua C function, e.g., by using <code>lua_call</code> (see <a href="/neovim-docs-web/en/luaref#lua_call()">lua_call()</a>).

</div>
<div class="help-para">
<h2 class="help-heading">5.1  Basic Functions<span class="help-heading-tags">                                           <a name="luaref-libBasic"></a><span class="help-tag">luaref-libBasic</span></span></h2>


</div>
<div class="help-para">
The basic library provides some core functions to Lua. If you do not include
this library in your application, you should check carefully whether you need
to provide implementations for some of its facilities.

</div>
<div class="help-para">
assert(<code>{v}</code> [, <code>{message}</code>])                                      <a name="luaref-assert()"></a><code class="help-tag-right">luaref-assert()</code>
    Issues an error when the value of its argument <code>v</code> is false (i.e., <code>nil</code> or
    <code>false</code>); otherwise, returns all its arguments. <code>message</code> is an error message;
    when absent, it defaults to "assertion failed!"

</div>
<div class="help-para">
collectgarbage(<code>{opt}</code> [, <code>{arg}</code>])                        <a name="luaref-collectgarbage()"></a><code class="help-tag-right">luaref-collectgarbage()</code>
        This function is a generic interface to the garbage collector. It
        performs different functions according to its first argument, <code>{opt}</code>:

</div>
<div class="help-para">
        <code>"stop"</code>       stops the garbage collector.
        <code>"restart"</code>    restarts the garbage collector.
        <code>"collect"</code>    performs a full garbage-collection cycle.
        <code>"count"</code>      returns the total memory in use by Lua (in Kbytes).
        <code>"step"</code>       performs a garbage-collection step. The step "size" is
                     controlled by <code>{arg}</code> (larger values mean more steps) in a
                     non-specified way. If you want to control the step size
                     you must experimentally tune the value of <code>{arg}</code>. Returns
                     <code>true</code> if the step finished a collection cycle.
        <code>"setpause"</code>   sets <code>{arg}</code> /100 as the new value for the <code>pause</code> of
                     the collector (see <a href="/neovim-docs-web/en/luaref#luaref-langGC">luaref-langGC</a>).
        <code>"setstepmul"</code> sets <code>{arg}</code> /100 as the new value for thestep
                     multiplier` of the collector (see <a href="/neovim-docs-web/en/luaref#luaref-langGC">luaref-langGC</a>).

</div>
<div class="help-para">
dofile(<code>{filename}</code>)                                             <a name="luaref-dofile()"></a><code class="help-tag-right">luaref-dofile()</code>
        Opens the named file and executes its contents as a Lua chunk. When
        called without arguments, <code>dofile</code> executes the contents of the
        standard input (<code>stdin</code>). Returns all values returned by the chunk. In
        case of errors, <code>dofile</code> propagates the error to its caller (that is,
        <code>dofile</code> does not run in protected mode).

</div>
<div class="help-para">
error(<code>{message}</code> [, <code>{level}</code>])                                    <a name="luaref-error()"></a><code class="help-tag-right">luaref-error()</code>
        Terminates the last protected function called and returns <code>message</code> as
        the error message. Function <code>{error}</code> never returns.

</div>
<div class="help-para">
        Usually, <code>{error}</code> adds some information about the error position at the
        beginning of the message. The <code>{level}</code> argument specifies how to get
        the error position. With level 1 (the default), the error position is
        where the <code>{error}</code> function was called. Level 2 points the error to
        where the function that called <code>{error}</code> was called; and so on. Passing
        a level 0 avoids the addition of error position information to the
        message.

</div>
<div class="help-para">
_G                                                                 <a name="luaref-_G()"></a><code class="help-tag-right">luaref-_G()</code>
        A global variable (not a function) that holds the global environment
        (that is, <code>_G._G = _G</code>). Lua itself does not use this variable;
        changing its value does not affect any environment, nor vice-versa.
        (Use <code>setfenv</code> to change environments.)

</div>
<div class="help-para">
getfenv(<code>{f}</code>)                                                  <a name="luaref-getfenv()"></a><code class="help-tag-right">luaref-getfenv()</code>
        Returns the current environment in use by the function. <code>{f}</code> can be a
        Lua function or a number that specifies the function at that stack
        level: Level 1 is the function calling <code>getfenv</code>. If the given
        function is not a Lua function, or if <code>{f}</code> is 0, <code>getfenv</code> returns the
        global environment. The default for <code>{f}</code> is 1.

</div>
<div class="help-para">
getmetatable(<code>{object}</code>)                                   <a name="luaref-getmetatable()"></a><code class="help-tag-right">luaref-getmetatable()</code>
        If <code>{object}</code> does not have a metatable, returns <code>nil</code>. Otherwise, if
        the object's metatable has a <code>"__metatable"</code> field, returns the
        associated value. Otherwise, returns the metatable of the given
        object.

</div>
<div class="help-para">
ipairs(<code>{t}</code>)                                                    <a name="luaref-ipairs()"></a><code class="help-tag-right">luaref-ipairs()</code>
        Returns three values: an iterator function, the table <code>{t}</code>, and 0, so
        that the construction

</div>
<div class="help-para">
               <code>for i,v in ipairs(t) do</code>  <code>body</code>  <code>end</code>

</div>
<div class="help-para">
        will iterate over the pairs (<code>1,t[1]</code>), (<code>2,t[2]</code>), ..., up to the
        first integer key absent from the table.

</div>
<div class="help-para">
load(<code>{func}</code> [, <code>{chunkname}</code>])                                     <a name="luaref-load()"></a><code class="help-tag-right">luaref-load()</code>
        Loads a chunk using function <code>{func}</code> to get its pieces. Each call to
        <code>{func}</code> must return a string that concatenates with previous results. A
        return of <code>nil</code> (or no value) signals the end of the chunk.

</div>
<div class="help-para">
        If there are no errors, returns the compiled chunk as a function;
        otherwise, returns <code>nil</code> plus the error message. The environment of
        the returned function is the global environment.

</div>
<div class="help-para">
        <code>{chunkname}</code> is used as the chunk name for error messages and debug
        information.

</div>
<div class="help-para">
loadfile([{filename}])                                       <a name="luaref-loadfile()"></a><code class="help-tag-right">luaref-loadfile()</code>
        Similar to <code>load</code> (see <a href="/neovim-docs-web/en/luaref#luaref-load()">luaref-load()</a>), but gets the chunk from file
        <code>{filename}</code> or from the standard input, if no file name is given.

</div>
<div class="help-para">
loadstring(<code>{string}</code> [, <code>{chunkname}</code>])                       <a name="luaref-loadstring()"></a><code class="help-tag-right">luaref-loadstring()</code>
        Similar to <code>load</code> (see <a href="/neovim-docs-web/en/luaref#luaref-load()">luaref-load()</a>), but gets the chunk from the
        given <code>{string}</code>.

</div>
<div class="help-para">
        To load and run a given string, use the idiom
<pre>assert(loadstring(s))()</pre>

</div>
<div class="help-para">
next(<code>{table}</code> [, <code>{index}</code>])                                        <a name="luaref-next()"></a><code class="help-tag-right">luaref-next()</code>
        Allows a program to traverse all fields of a table. Its first argument
        is a table and its second argument is an index in this table. <code>next</code>
        returns the next index of the table and its associated value. When
        called with <code>nil</code> as its second argument, <code>next</code> returns an initial
        index and its associated value. When called with the last index, or
        with <code>nil</code> in an empty table, <code>next</code> returns <code>nil</code>. If the second
        argument is absent, then it is interpreted as <code>nil</code>. In particular,
        you can use <code>next(t)</code> to check whether a table is empty.

</div>
<div class="help-para">
        The order in which the indices are enumerated is not specified,even
        for` <code>numeric indices</code>. (To traverse a table in numeric order, use a
        numerical <code>for</code> or the <code>ipairs</code> <a href="/neovim-docs-web/en/luaref#luaref-ipairs()">luaref-ipairs()</a> function.)

</div>
<div class="help-para">
        The behavior of <code>next</code> is <code>undefined</code> if, during the traversal, you
        assign any value to a non-existent field in the table. You may however
        modify existing fields. In particular, you may clear existing fields.

</div>
<div class="help-para">
pairs(<code>{t}</code>)                                                      <a name="luaref-pairs()"></a><code class="help-tag-right">luaref-pairs()</code>
        Returns three values: the <code>next</code> <a href="/neovim-docs-web/en/luaref#luaref-next()">luaref-next()</a> function, the table
        <code>{t}</code>, and <code>nil</code>, so that the construction

</div>
<div class="help-para">
               <code>for k,v in pairs(t) do</code>  <code>body</code>  <code>end</code>

</div>
<div class="help-para">
        will iterate over all key-value pairs of table <code>{t}</code>.

</div>
<div class="help-para">
pcall(<code>{f}</code>, <code>{arg1}</code>, <code>{...}</code>)                                       <a name="luaref-pcall()"></a><code class="help-tag-right">luaref-pcall()</code>
        Calls function <code>{f}</code> with the given arguments in <code>protected mode</code>. This
        means that any error inside <code>{f}</code> is not propagated; instead, <code>pcall</code>
        catches the error and returns a status code. Its first result is the
        status code (a boolean), which is <code>true</code> if the call succeeds without
        errors. In such case, <code>pcall</code> also returns all results from the call,
        after this first result. In case of any error, <code>pcall</code> returns <code>false</code>
        plus the error message.

</div>
<div class="help-para">
print(<code>{...}</code>)                                                    <a name="luaref-print()"></a><code class="help-tag-right">luaref-print()</code>
        Receives any number of arguments, and prints their values to <code>stdout</code>,
        using the <code>tostring</code> <a href="/neovim-docs-web/en/luaref#luaref-tostring()">luaref-tostring()</a> function to convert them to
        strings. <code>print</code> is not intended for formatted output, but only as a
        quick way to show a value, typically for debugging. For formatted
        output, use <code>string.format</code> (see <a href="/neovim-docs-web/en/luaref#string.format()">string.format()</a>).

</div>
<div class="help-para">
rawequal(<code>{v1}</code>, <code>{v2}</code>)                                         <a name="luaref-rawequal()"></a><code class="help-tag-right">luaref-rawequal()</code>
        Checks whether <code>{v1}</code> is equal to <code>{v2}</code>, without invoking any metamethod.
        Returns a boolean.

</div>
<div class="help-para">
rawget(<code>{table}</code>, <code>{index}</code>)                                       <a name="luaref-rawget()"></a><code class="help-tag-right">luaref-rawget()</code>
        Gets the real value of <code>table[index]</code>, without invoking any
        metamethod. <code>{table}</code> must be a table; <code>{index}</code> may be any value.

</div>
<div class="help-para">
rawset(<code>{table}</code>, <code>{index}</code>, <code>{value}</code>)                              <a name="luaref-rawset()"></a><code class="help-tag-right">luaref-rawset()</code>
        Sets the real value of <code>table[index]</code> to <code>{value}</code>, without invoking any
        metamethod. <code>{table}</code> must be a table, <code>{index}</code> any value different from
        <code>nil</code>, and <code>{value}</code> any Lua value.

</div>
<div class="help-para">
        This function returns <code>{table}</code>.

</div>
<div class="help-para">
select(<code>{index}</code>, <code>{...}</code>)                                         <a name="luaref-select()"></a><code class="help-tag-right">luaref-select()</code>
        If <code>{index}</code> is a number, returns all arguments after argument number
        <code>{index}</code>. Otherwise, <code>{index}</code> must be the string <code>"#"</code>, and <code>select</code>
        returns the total number of extra arguments it received.

</div>
<div class="help-para">
setfenv(<code>{f}</code>, <code>{table}</code>)                                         <a name="luaref-setfenv()"></a><code class="help-tag-right">luaref-setfenv()</code>
        Sets the environment to be used by the given function. <code>{f}</code> can be a
        Lua function or a number that specifies the function at that stack
        level: Level 1 is the function calling <code>setfenv</code>. <code>setfenv</code> returns
        the given function.

</div>
<div class="help-para">
        As a special case, when <code>{f}</code> is 0 <code>setfenv</code> changes the environment of
        the running thread. In this case, <code>setfenv</code> returns no values.

</div>
<div class="help-para">
setmetatable(<code>{table}</code>, <code>{metatable}</code>)                       <a name="luaref-setmetatable()"></a><code class="help-tag-right">luaref-setmetatable()</code>
        Sets the metatable for the given table. (You cannot change the
        metatable of other types from Lua, only from C.) If <code>{metatable}</code> is
        <code>nil</code>, removes the metatable of the given table. If the original
        metatable has a <code>"__metatable"</code> field, raises an error.

</div>
<div class="help-para">
        This function returns <code>{table}</code>.

</div>
<div class="help-para">
tonumber(<code>{e}</code> [, <code>{base}</code>])                                     <a name="luaref-tonumber()"></a><code class="help-tag-right">luaref-tonumber()</code>
        Tries to convert its argument to a number. If the argument is already
        a number or a string convertible to a number, then <code>tonumber</code> returns
        this number; otherwise, it returns <code>nil</code>.

</div>
<div class="help-para">
        An optional argument specifies the base to interpret the numeral. The
        base may be any integer between 2 and 36, inclusive. In bases above
        10, the letter <code>A</code> (in either upper or lower case) represents 10, <code>B</code>
        represents 11, and so forth, with <code>Z'</code> representing 35. In base 10
        (the default), the number may have a decimal part, as well as an
        optional exponent part (see <a href="/neovim-docs-web/en/luaref#luaref-langLexConv">luaref-langLexConv</a>). In other bases,
        only unsigned integers are accepted.

</div>
<div class="help-para">
tostring(<code>{e}</code>)                                                <a name="luaref-tostring()"></a><code class="help-tag-right">luaref-tostring()</code>
        Receives an argument of any type and converts it to a string in a
        reasonable format. For complete control of how numbers are converted,
        use <code>string.format</code> (see <a href="/neovim-docs-web/en/luaref#string.format()">string.format()</a>).

</div>
<div class="help-para">
                                                                    <a name="__tostring"></a><code class="help-tag-right">__tostring</code>
        If the metatable of <code>{e}</code> has a <code>"__tostring"</code> field, <code>tostring</code> calls
        the corresponding value with <code>{e}</code> as argument, and uses the result of
        the call as its result.

</div>
<div class="help-para">
type(<code>{v}</code>)                                                        <a name="luaref-type()"></a><code class="help-tag-right">luaref-type()</code>
        Returns the type of its only argument, coded as a string. The possible
        results of this function are <code>"nil"</code> (a string, not the value <code>nil</code>),
        <code>"number"</code>, <code>"string"</code>, <code>"boolean</code>, <code>"table"</code>, <code>"function"</code>,
        <code>"thread"</code>, and <code>"userdata"</code>.

</div>
<div class="help-para">
unpack(<code>{list}</code> [, <code>{i}</code> [, <code>{j}</code>]])                                 <a name="luaref-unpack()"></a><code class="help-tag-right">luaref-unpack()</code>
        Returns the elements from the given table. This function is equivalent
        to
<pre>return list[i], list[i+1], ..., list[j]</pre>

</div>
<div class="help-para">
        except that the above code can be written only for a fixed number of
        elements. By default, <code>{i}</code> is 1 and <code>{j}</code> is the length of the list, as
        defined by the length operator(see <a href="/neovim-docs-web/en/luaref#luaref-langLength">luaref-langLength</a>).

</div>
<div class="help-para">
_VERSION                                                     <a name="luaref-_VERSION()"></a><code class="help-tag-right">luaref-_VERSION()</code>
        A global variable (not a function) that holds a string containing the
        current interpreter version. The current contents of this string is
        <code>"Lua 5.1"</code> .

</div>
<div class="help-para">
xpcall(<code>{f}</code>, <code>{err}</code>)                                             <a name="luaref-xpcall()"></a><code class="help-tag-right">luaref-xpcall()</code>
        This function is similar to <code>pcall</code> (see <a href="/neovim-docs-web/en/luaref#luaref-pcall()">luaref-pcall()</a>), except that
        you can set a new error handler.

</div>
<div class="help-para">
        <code>xpcall</code> calls function <code>{f}</code> in protected mode, using <code>{err}</code> as the
        error handler. Any error inside <code>{f}</code> is not propagated; instead,
        <code>xpcall</code> catches the error, calls the <code>{err}</code> function with the original
        error object, and returns a status code. Its first result is the
        status code (a boolean), which is true if the call succeeds without
        errors. In this case, <code>xpcall</code> also returns all results from the call,
        after this first result. In case of any error, <code>xpcall</code> returns
        <code>false</code> plus the result from <code>{err}</code>.

</div>
<div class="help-para">
<h2 class="help-heading">5.2  Coroutine Manipulation<span class="help-heading-tags">                                     <a name="luaref-libCoro"></a><span class="help-tag">luaref-libCoro</span></span></h2>


</div>
<div class="help-para">
The operations related to coroutines comprise a sub-library of the basic
library and come inside the table <code>coroutine</code>. See <a href="/neovim-docs-web/en/luaref#luaref-langCoro">luaref-langCoro</a> for a
general description of coroutines.

</div>
<div class="help-para">
coroutine.create({f})                                       <a name="coroutine.create()"></a><code class="help-tag-right">coroutine.create()</code>
        Creates a new coroutine, with body <code>{f}</code>. <code>{f}</code> must be a Lua function.
        Returns this new coroutine, an object with type <code>"thread"</code>.

</div>
<div class="help-para">
coroutine.resume({co} [, <code>{val1}</code>, <code>{...}</code>])                    <a name="coroutine.resume()"></a><code class="help-tag-right">coroutine.resume()</code>
        Starts or continues the execution of coroutine <code>{co}</code>. The first time
        you resume a coroutine, it starts running its body. The values <code>{val1}</code>,
        <code>{...}</code> are passed as arguments to the body function. If the coroutine has
        yielded, <code>resume</code> restarts it; the values <code>{val1}</code>, <code>{...}</code> are passed as
        the results from the yield.

</div>
<div class="help-para">
        If the coroutine runs without any errors, <code>resume</code> returns <code>true</code> plus
        any values passed to <code>yield</code> (if the coroutine yields) or any values
        returned by the body function(if the coroutine terminates). If there
        is any error, <code>resume</code> returns <code>false</code> plus the error message.

</div>
<div class="help-para">
coroutine.running()                                        <a name="coroutine.running()"></a><code class="help-tag-right">coroutine.running()</code>
        Returns the running coroutine, or <code>nil</code> when called by the main
        thread.

</div>
<div class="help-para">
coroutine.status({co})                                      <a name="coroutine.status()"></a><code class="help-tag-right">coroutine.status()</code>
        Returns the status of coroutine <code>{co}</code>, as a string: <code>"running"</code>, if the
        coroutine is running (that is, it called <code>status</code>); <code>"suspended"</code>, if
        the coroutine is suspended in a call to <code>yield</code>, or if it has not
        started running yet; <code>"normal"</code> if the coroutine is active but not
        running (that is, it has resumed another coroutine); and <code>"dead"</code> if
        the coroutine has finished its body function, or if it has stopped
        with an error.

</div>
<div class="help-para">
coroutine.wrap({f})                                           <a name="coroutine.wrap()"></a><code class="help-tag-right">coroutine.wrap()</code>
        Creates a new coroutine, with body <code>{f}</code>. <code>{f}</code> must be a Lua function.
        Returns a function that resumes the coroutine each time it is called.
        Any arguments passed to the function behave as the extra arguments to
        <code>resume</code>. Returns the same values returned by <code>resume</code>, except the
        first boolean. In case of error, propagates the error.

</div>
<div class="help-para">
coroutine.yield({...})                                       <a name="coroutine.yield()"></a><code class="help-tag-right">coroutine.yield()</code>
        Suspends the execution of the calling coroutine. The coroutine cannot
        be running a C function, a metamethod, or an iterator. Any arguments
        to <code>yield</code> are passed as extra results to <code>resume</code>.

</div>
<div class="help-para">
<h2 class="help-heading">5.3 - Modules<span class="help-heading-tags">                                                 <a name="luaref-libModule"></a><span class="help-tag">luaref-libModule</span></span></h2>


</div>
<div class="help-para">
The package library provides basic facilities for loading and building modules
in Lua. It exports two of its functions directly in the global environment:
<code>require</code> and <code>module</code> (see <a href="/neovim-docs-web/en/luaref#luaref-require()">luaref-require()</a> and <a href="/neovim-docs-web/en/luaref#luaref-module()">luaref-module()</a>). Everything else is
exported in a table <code>package</code>.

</div>
<div class="help-para">
module(<code>{name}</code> [, <code>{...}</code>])                                      <a name="luaref-module()"></a><code class="help-tag-right">luaref-module()</code>
        Creates a module. If there is a table in <code>package.loaded[name]</code>, this
        table is the module. Otherwise, if there is a global table <code>t</code> with
        the given name, this table is the module. Otherwise creates a new
        table <code>t</code> and sets it as the value of the global <code>{name}</code> and the value
        of <code>package.loaded[name]</code>. This function also initializes <code>t._NAME</code>
        with the given name, <code>t._M</code> with the module (<code>t</code> itself), and
        <code>t._PACKAGE</code> with the package name (the full module name minus last
        component; see below). Finally, <code>module</code> sets <code>t</code> as the new
        environment of the current function and the new value of
        <code>package.loaded[name]</code>, so that <code>require</code> (see <a href="/neovim-docs-web/en/luaref#luaref-require()">luaref-require()</a>)
        returns <code>t</code>.

</div>
<div class="help-para">
        If <code>{name}</code> is a compound name (that is, one with components separated
        by dots), <code>module</code> creates (or reuses, if they already exist) tables
        for each component. For instance, if <code>{name}</code> is <code>a.b.c</code>, then <code>module</code>
        stores the module table in field <code>c</code> of field <code>b</code> of global <code>a</code>.

</div>
<div class="help-para">
        This function may receive optional <code>options</code> after the module name,
        where each option is a function to be applied over the module.

</div>
<div class="help-para">
require(<code>{modname}</code>)                                            <a name="luaref-require()"></a><code class="help-tag-right">luaref-require()</code>
        Loads the given module. The function starts by looking into the
        <code>package.loaded</code> table to determine whether <code>{modname}</code> is already
        loaded. If it is, then <code>require</code> returns the value stored at
        <code>package.loaded[modname]</code>. Otherwise, it tries to find a <code>loader</code> for
        the module.

</div>
<div class="help-para">
        To find a loader, first <code>require</code> queries <code>package.preload[modname]</code>.
        If it has a value, this value (which should be a function) is the
        loader. Otherwise <code>require</code> searches for a Lua loader using the path
        stored in <code>package.path</code>. If that also fails, it searches for a C
        loader using the path stored in <code>package.cpath</code>. If that also fails,
        it tries an <code>all-in-one</code> loader (see below).

</div>
<div class="help-para">
        When loading a C library, <code>require</code> first uses a dynamic link facility
        to link the application with the library. Then it tries to find a C
        function inside this library to be used as the loader. The name of
        this C function is the string <code>"luaopen_"</code> concatenated with a copy of
        the module name where each dot is replaced by an underscore. Moreover,
        if the module name has a hyphen, its prefix up to (and including) the
        first hyphen is removed. For instance, if the module name is
        <code>a.v1-b.c</code>, the function name will be <code>luaopen_b_c</code>.

</div>
<div class="help-para">
        If <code>require</code> finds neither a Lua library nor a C library for a module,
        it calls the <code>all-in-one loader</code>. This loader searches the C path for
        a library for the root name of the given module. For instance, when
        requiring <code>a.b.c</code>, it will search for a C library for <code>a</code>. If found,
        it looks into it for an open function for the submodule; in our
        example, that would be <code>luaopen_a_b_c</code>. With this facility, a package
        can pack several C submodules into one single library, with each
        submodule keeping its original open function.

</div>
<div class="help-para">
        Once a loader is found, <code>require</code> calls the loader with a single
        argument, <code>{modname}</code>. If the loader returns any value, <code>require</code>
        assigns the returned value to <code>package.loaded[modname]</code>. If the loader
        returns no value and has not assigned any value to
        <code>package.loaded[modname]</code>, then <code>require</code> assigns <code>true</code> to this
        entry. In any case, <code>require</code> returns the final value of
        <code>package.loaded[modname]</code>.

</div>
<div class="help-para">
        If there is any error loading or running the module, or if it cannot
        find any loader for the module, then <code>require</code> signals an error.

</div>
<div class="help-para">
package.cpath                                                  <a name="package.cpath"></a><code class="help-tag-right">package.cpath</code>
        The path used by <code>require</code> to search for a C loader.

</div>
<div class="help-para">
        Lua initializes the C path <code>package.cpath</code> in the same way it
        initializes the Lua path <code>package.path</code>, using the environment
        variable <code>LUA_CPATH</code> (plus another default path defined in
        <code>luaconf.h</code>).

</div>
<div class="help-para">
package.loaded                                                <a name="package.loaded()"></a><code class="help-tag-right">package.loaded()</code>
        A table used by <code>require</code> to control which modules are already loaded.
        When you require a module <code>modname</code> and <code>package.loaded[modname]</code> is
        not false, <code>require</code> simply returns the value stored there.

</div>
<div class="help-para">
package.loadlib({libname}, <code>{funcname}</code>)                     <a name="package.loadlib()"></a><code class="help-tag-right">package.loadlib()</code>
        Dynamically links the host program with the C library <code>{libname}</code>.
        Inside this library, looks for a function <code>{funcname}</code> and returns this
        function as a C function. (So, <code>{funcname}</code> must follow the protocol
        (see <a href="/neovim-docs-web/en/luaref#lua_CFunction()">lua_CFunction()</a>)).

</div>
<div class="help-para">
        This is a low-level function. It completely bypasses the package and
        module system. Unlike <code>require</code>, it does not perform any path
        searching and does not automatically adds extensions. <code>{libname}</code> must
        be the complete file name of the C library, including if necessary a
        path and extension. <code>{funcname}</code> must be the exact name exported by the
        C library (which may depend on the C compiler and linker used).

</div>
<div class="help-para">
        This function is not supported by ANSI C. As such, it is only
        available on some platforms (Windows, Linux, Mac OS X, Solaris, BSD,
        plus other Unix systems that support the <code>dlfcn</code> standard).

</div>
<div class="help-para">
package.path                                                    <a name="package.path"></a><code class="help-tag-right">package.path</code>
        The path used by <code>require</code> to search for a Lua loader.

</div>
<div class="help-para">
        At start-up, Lua initializes this variable with the value of the
        environment variable <code>LUA_PATH</code> or with a default path defined in
        <code>luaconf.h</code>, if the environment variable is not defined. Any <code>";;"</code> in
        the value of the environment variable is replaced by the default path.

</div>
<div class="help-para">
        A path is a sequence of <code>templates</code> separated by semicolons. For each
        template, <code>require</code> will change each interrogation mark in the
        template by <code>filename</code>, which is <code>modname</code> with each dot replaced by a
        "directory separator" (such as <code>"/"</code>  in Unix); then it will try to
        load the resulting file name. So, for instance, if the Lua path is
<pre>"./?.lua;./?.lc;/usr/local/?/init.lua"</pre>

</div>
<div class="help-para">
        the search for a Lua loader for module <code>foo</code> will try to load the
        files <code>./foo.lua</code>, <code>./foo.lc</code>, and <code>/usr/local/foo/init.lua</code>, in that
        order.

</div>
<div class="help-para">
package.preload                                              <a name="package.preload()"></a><code class="help-tag-right">package.preload()</code>
        A table to store loaders for specific modules (see <a href="/neovim-docs-web/en/luaref#luaref-require()">luaref-require()</a>).

</div>
<div class="help-para">
package.seeall({module})                                      <a name="package.seeall()"></a><code class="help-tag-right">package.seeall()</code>
        Sets a metatable for <code>{module}</code> with its <code>__index</code> field referring to
        the global environment, so that this module inherits values from the
        global environment. To be used as an option to function <code>{module}</code>.

</div>
<div class="help-para">
<h2 class="help-heading">5.4 - String Manipulation<span class="help-heading-tags">                                     <a name="luaref-libString"></a><span class="help-tag">luaref-libString</span></span></h2>


</div>
<div class="help-para">
This library provides generic functions for string manipulation, such as
finding and extracting substrings, and pattern matching. When indexing a
string in Lua, the first character is at position 1 (not at 0, as in C).
Indices are allowed to be negative and are interpreted as indexing backwards,
from the end of the string. Thus, the last character is at position -1, and
so on.

</div>
<div class="help-para">
The string library provides all its functions inside the table <code>string</code>.
It also sets a metatable for strings where the <code>__index</code> field points to the
<code>string</code> table. Therefore, you can use the string functions in object-oriented
style. For instance, <code>string.byte(s, i)</code> can be written as <code>s:byte(i)</code>.

</div>
<div class="help-para">
string.byte({s} [, <code>{i}</code> [, <code>{j}</code>]])                                 <a name="string.byte()"></a><code class="help-tag-right">string.byte()</code>
        Returns the internal numerical codes of the characters <code>s[i]</code>,
        <code>s[i+1]</code>,..., <code>s[j]</code>. The default value for <code>{i}</code> is 1; the default
        value for <code>{j}</code> is <code>{i}</code>.

</div>
<div class="help-para">
        Note that numerical codes are not necessarily portable across
        platforms.

</div>
<div class="help-para">
string.char({...})                                               <a name="string.char()"></a><code class="help-tag-right">string.char()</code>
        Receives zero or more integers. Returns a string with length equal to
        the number of arguments, in which each character has the internal
        numerical code equal to its correspondent argument.

</div>
<div class="help-para">
        Note that numerical codes are not necessarily portable across
        platforms.

</div>
<div class="help-para">
string.dump({function})                                          <a name="string.dump()"></a><code class="help-tag-right">string.dump()</code>
        Returns a string containing a binary representation of the given
        function, so that a later <a href="/neovim-docs-web/en/luaref#luaref-loadstring()">luaref-loadstring()</a> on this string returns a
        copy of the function. <code>{function}</code> must be a Lua function without
        upvalues.

</div>
<div class="help-para">
string.find({s}, <code>{pattern}</code> [, <code>{init}</code> [, <code>{plain}</code>]])               <a name="string.find()"></a><code class="help-tag-right">string.find()</code>
        Looks for the first match of <code>{pattern}</code> in the string <code>{s}</code>. If it finds
        a match, then <code>{find}</code> returns the indices of <code>{s}</code> where this occurrence
        starts and ends; otherwise, it returns <code>nil</code>. A third, optional
        numerical argument <code>{init}</code> specifies where to start the search; its
        default value is 1 and may be negative. A value of <code>{true}</code> as a fourth,
        optional argument <code>{plain}</code> turns off the pattern matching facilities,
        so the function does a plain "find substring" operation, with no
        characters in <code>{pattern}</code> being considered "magic". Note that if <code>{plain}</code>
        is given, then <code>{init}</code> must be given as well.

</div>
<div class="help-para">
        If the pattern has captures, then in a successful match the captured
        values are also returned, after the two indices.

</div>
<div class="help-para">
string.format({formatstring}, <code>{...}</code>)                           <a name="string.format()"></a><code class="help-tag-right">string.format()</code>
        Returns a formatted version of its variable number of arguments
        following the description given in its first argument (which must be a
        string). The format string follows the same rules as the <code>printf</code>
        family of standard C functions. The only differences are that the
        options/modifiers <code>*</code>, <code>l</code>, <code>L</code>, <code>n</code>, <code>p</code>, and <code>h</code> are not supported
        and that there is an extra option, <code>q</code>. The <code>q</code> option formats a
        string in a form suitable to be safely read back by the Lua
        interpreter: the string is written between double quotes, and all
        double quotes, newlines, embedded zeros, and backslashes in the string
        are correctly escaped when written. For instance, the call
<pre>string.format('%q', 'a string with "quotes" and \n new line')</pre>

</div>
<div class="help-para">
        will produce the string:
<pre>"a string with \"quotes\" and \
 new line"</pre>

</div>
<div class="help-para">
        The options <code>c</code>, <code>d</code>, <code>E</code>, <code>e</code>, <code>f</code>, <code>g</code>, <code>G</code>, <code>i</code>, <code>o</code>, <code>u</code>, <code>X</code>, and
        <code>x</code> all expect a number as argument, whereas <code>q</code> and <code>s</code> expect a
        string.

</div>
<div class="help-para">
        This function does not accept string values containing embedded zeros.

</div>
<div class="help-para">
string.gmatch({s}, <code>{pattern}</code>)                                  <a name="string.gmatch()"></a><code class="help-tag-right">string.gmatch()</code>
        Returns an iterator function that, each time it is called, returns the
        next captures from <code>{pattern}</code> over string <code>{s}</code>.

</div>
<div class="help-para">
        If <code>{pattern}</code> specifies no captures, then the whole match is produced
        in each call.

</div>
<div class="help-para">
        As an example, the following loop
<pre>s = "hello world from Lua"
for w in string.gmatch(s, "%a+") do
  print(w)
end</pre>

</div>
<div class="help-para">
        will iterate over all the words from string <code>{s}</code>, printing one per
        line. The next example collects all pairs <code>key=value</code> from the given
        string into a table:
<pre>t = {}
s = "from=world, to=Lua"
for k, v in string.gmatch(s, "(%w+)=(%w+)") do
  t[k] = v
end</pre>

</div>
<div class="help-para">
string.gsub({s}, <code>{pattern}</code>, <code>{repl}</code> [, <code>{n}</code>])                    <a name="string.gsub()"></a><code class="help-tag-right">string.gsub()</code>
        Returns a copy of <code>{s}</code> in which all occurrences of the <code>{pattern}</code> have
        been replaced by a replacement string specified by <code>{repl}</code>, which may
        be a string, a table, or a function. <code>gsub</code> also returns, as its
        second value, the total number of substitutions made.

</div>
<div class="help-para">
        If <code>{repl}</code> is a string, then its value is used for replacement. The
        character <code>%</code> works as an escape character: any sequence in <code>{repl}</code> of
        the form <code>%n</code>, with <code>{n}</code> between 1 and 9, stands for the value of the
        <code>{n}</code> -th captured substring (see below). The sequence <code>%0</code> stands for
        the whole match. The sequence <code>%%</code> stands for a single <code>%</code>.

</div>
<div class="help-para">
        If <code>{repl}</code> is a table, then the table is queried for every match, using
        the first capture as the key; if the pattern specifies no captures,
        then the whole match is used as the key.

</div>
<div class="help-para">
        If <code>{repl}</code> is a function, then this function is called every time a
        match occurs, with all captured substrings passed as arguments, in
        order; if the pattern specifies no captures, then the whole match is
        passed as a sole argument.

</div>
<div class="help-para">
        If the value returned by the table query or by the function call is a
        string or a number, then it is used as the replacement string;
        otherwise, if it is <code>false</code> or <code>nil</code>, then there is no replacement
        (that is, the original match is kept in the string).

</div>
<div class="help-para">
        The optional last parameter <code>{n}</code> limits the maximum number of
        substitutions to occur. For instance, when <code>{n}</code> is 1 only the first
        occurrence of <code>pattern</code> is replaced.

</div>
<div class="help-para">
        Here are some examples:
<pre>x = string.gsub("hello world", "(%w+)", "%1 %1")
--&gt; x="hello hello world world"

x = string.gsub("hello world", "%w+", "%0 %0", 1)
--&gt; x="hello hello world"

x = string.gsub("hello world from Lua", "(%w+)%s*(%w+)", "%2 %1")
--&gt; x="world hello Lua from"

x = string.gsub("home =  `HOME, user = ` USER", "%$(%w+)", os.getenv)
--&gt; x="home = /home/roberto, user = roberto"

x = string.gsub("4+5 =  `return 4+5` ", "% `(.-)%` ", function (s)
      return loadstring(s)()
    end)
--&gt; x="4+5 = 9"

local t = {name="lua", version="5.1"}
x = string.gsub(" `name%-` version.tar.gz", "%$(%w+)", t)
--&gt; x="lua-5.1.tar.gz"</pre>

</div>
<div class="help-para">
string.len({s})                                                   <a name="string.len()"></a><code class="help-tag-right">string.len()</code>
        Receives a string and returns its length. The empty string <code>""</code> has
        length 0. Embedded zeros are counted, so <code>"a\000b\000c"</code> has length 5.

</div>
<div class="help-para">
string.lower({s})                                               <a name="string.lower()"></a><code class="help-tag-right">string.lower()</code>
        Receives a string and returns a copy of this string with all uppercase
        letters changed to lowercase. All other characters are left unchanged.
        The definition of what an uppercase letter is depends on the current
        locale.

</div>
<div class="help-para">
string.match({s}, <code>{pattern}</code> [, <code>{init}</code>])                         <a name="string.match()"></a><code class="help-tag-right">string.match()</code>
        Looks for the first <code>match</code> of <code>{pattern}</code> in the string <code>{s}</code>. If it
        finds one, then <code>match</code> returns the captures from the pattern;
        otherwise it returns <code>nil</code>. If <code>{pattern}</code> specifies no captures, then
        the whole match is returned. A third, optional numerical argument
        <code>{init}</code> specifies where to start the search; its default value is 1 and
        may be negative.

</div>
<div class="help-para">
string.rep({s}, <code>{n}</code>)                                              <a name="string.rep()"></a><code class="help-tag-right">string.rep()</code>
        Returns a string that is the concatenation of <code>{n}</code> copies of the string
        <code>{s}</code>.

</div>
<div class="help-para">
string.reverse({s})                                           <a name="string.reverse()"></a><code class="help-tag-right">string.reverse()</code>
        Returns a string that is the string <code>{s}</code> reversed.

</div>
<div class="help-para">
string.sub({s}, <code>{i}</code> [, <code>{j}</code>])                                      <a name="string.sub()"></a><code class="help-tag-right">string.sub()</code>
        Returns the substring of <code>{s}</code> that starts at <code>{i}</code> and continues until
        <code>{j}</code>; <code>{i}</code> and <code>{j}</code> may be negative. If <code>{j}</code> is absent, then it is assumed
        to be equal to <code>-1</code> (which is the same as the string length). In
        particular, the call <code>string.sub(s,1,j)</code> returns a prefix of <code>{s}</code> with
        length <code>{j}</code>, and <code>string.sub(s,-i)</code> returns a suffix of <code>{s}</code> with length
        <code>{i}</code>.

</div>
<div class="help-para">
string.upper({s})                                               <a name="string.upper()"></a><code class="help-tag-right">string.upper()</code>
        Receives a string and returns a copy of that string with all lowercase
        letters changed to uppercase. All other characters are left unchanged.
        The definition of what a lowercase letter is depends on the current
        locale.

</div>
<div class="help-para">
<h3 class="help-heading">5.4.1  Patterns<span class="help-heading-tags">                            <a name="luaref-patterns"></a><span class="help-tag">luaref-patterns</span> <a name="luaref-libStringPat"></a><span class="help-tag">luaref-libStringPat</span></span></h3>


</div>
<div class="help-para">
A character class is used to represent a set of characters. The following
combinations are allowed in describing a character class:

</div>
<div class="help-para">
<div class="help-li" style=""> <code>x</code>   (where <code>x</code> is not one of the magic characters <code>^$()%.[]*+-?</code>)
          represents the character <code>x</code> itself.
</div><div class="help-li" style=""> <code>.</code>   (a dot) represents all characters.
</div><div class="help-li" style=""> <code>%a</code>  represents all letters.
</div><div class="help-li" style=""> <code>%c</code>  represents all control characters.
</div><div class="help-li" style=""> <code>%d</code>  represents all digits.
</div><div class="help-li" style=""> <code>%l</code>  represents all lowercase letters.
</div><div class="help-li" style=""> <code>%p</code>  represents all punctuation characters.
</div><div class="help-li" style=""> <code>%s</code>  represents all space characters.
</div><div class="help-li" style=""> <code>%u</code>  represents all uppercase letters.
</div><div class="help-li" style=""> <code>%w</code>  represents all alphanumeric characters.
</div><div class="help-li" style=""> <code>%x</code>  represents all hexadecimal digits.
</div><div class="help-li" style=""> <code>%z</code>  represents the character with representation <code>0</code>.
</div><div class="help-li" style=""> <code>%x</code>  (where <code>x</code> is any non-alphanumeric character) represents the
          character <code>x</code>. This is the standard way to escape the magic
          characters. Any punctuation character (even the non-magic) can be
          preceded by a <code>%</code> when used to represent itself in a pattern.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> <code>[set]</code>  represents the class which is the union of all characters in
         <code>set</code>. A range of characters may be specified by separating the end
         characters of the range with a <code>-</code>. All classes <code>%x</code> described
         above may also be used as components in <code>set</code>. All other characters
         in <code>set</code> represent themselves. For example, <code>[%w_]</code> (or <code>[_%w]</code>)
         represents all alphanumeric characters plus the underscore, <code>[0-7]</code>
         represents the octal digits, and <code>[0-7%l%-]</code> represents the octal
         digits plus the lowercase letters plus the <code>-</code> character.
</div>
</div>
<div class="help-para">
         The interaction between ranges and classes is not defined. Therefore,
         patterns like <code>[%a-z]</code> or <code>[a-%%]</code> have no meaning.

</div>
<div class="help-para">
<div class="help-li" style=""> <code>[^set]</code>  represents the complement of <code>set</code>, where <code>set</code> is interpreted
         as above.
</div>
</div>
<div class="help-para">
For all classes represented by single letters (<code>%a</code>, <code>%c</code>, etc.), the
corresponding uppercase letter represents the complement of the class. For
instance, <code>%S</code> represents all non-space characters.

</div>
<div class="help-para">
The definitions of letter, space, and other character groups depend on the
current locale. In particular, the class <code>[a-z]</code> may not be equivalent to <code>%l</code>.

</div>
<div class="help-para">
                                                            <a name="luaref-patternitem"></a><code class="help-tag-right">luaref-patternitem</code>
Pattern Item:~
<a name="_-a-pattern-item-may-be"></a><h3 class="help-heading">A pattern item may be</h3>


</div>
<div class="help-para">
<div class="help-li" style=""> a single character class, which matches any single character in the
      class;
</div><div class="help-li" style=""> a single character class followed by <code>*</code>, which matches 0 or more
      repetitions of characters in the class. These repetition items will
      always match the longest possible sequence;
</div><div class="help-li" style=""> a single character class followed by <code>+</code>, which matches 1 or more
      repetitions of characters in the class. These repetition items will
      always match the longest possible sequence;
</div><div class="help-li" style=""> a single character class followed by <code>-</code>, which also matches 0 or
      more repetitions of characters in the class. Unlike <code>*</code>, these
      repetition items will always match the shortest possible sequence;
</div><div class="help-li" style=""> a single character class followed by <code>?</code>, which matches 0 or 1
      occurrences of a character in the class;
</div><div class="help-li" style=""> <code>%n</code>, for <code>n</code> between 1 and 9; such item matches a substring equal to the
      <code>n</code> -th captured string (see below);
</div><div class="help-li" style=""> <code>%bxy</code>, where <code>x</code> and <code>y</code> are two distinct characters; such item matches
      strings that start with <code>x</code>, end with <code>y</code>, and where the <code>x</code> and <code>y</code>
      are balanced. This means that, if one reads the string from left to
      right, counting <code>+1</code> for an <code>x</code> and <code>-1</code> for a <code>y</code>, the ending <code>y</code> is the first
      <code>y</code> where the count reaches 0. For instance, the item <code>%b()</code> matches
      expressions with balanced parentheses.
</div>
</div>
<div class="help-para">
                                                                <a name="luaref-pattern"></a><code class="help-tag-right">luaref-pattern</code>
Pattern:~
--------
A pattern is a sequence of pattern items. A <code>^</code> at the beginning of a pattern
anchors the match at the beginning of the subject string. A <code>$</code> at the end of
a pattern anchors the match at the end of the subject string. At other
positions, <code>^</code> and <code>$</code> have no special meaning and represent themselves.

</div>
<div class="help-para">
                                                                <a name="luaref-capture"></a><code class="help-tag-right">luaref-capture</code>
Captures:~
---------
A pattern may contain sub-patterns enclosed in parentheses; they describe
captures. When a match succeeds, the substrings of the subject string that
match captures are stored (captured) for future use. Captures are numbered
according to their left parentheses. For instance, in the pattern
<code>"(a*(.)%w(%s*))"</code>, the part of the string matching <code>"a*(.)%w(%s*)"</code> is stored
as the first capture (and therefore has number 1); the character matching <code>.</code>
is captured with number 2, and the part matching <code>%s*</code> has number 3.

</div>
<div class="help-para">
As a special case, the empty capture <code>()</code> captures the current string position
(a number). For instance, if we apply the pattern <code>"()aa()"</code> on the
string <code>"flaaap"</code>, there will be two captures: 3 and 5.

</div>
<div class="help-para">
A pattern cannot contain embedded zeros.  Use <code>%z</code> instead.

</div>
<div class="help-para">
<h2 class="help-heading">5.5  Table Manipulation<span class="help-heading-tags">                                        <a name="luaref-libTable"></a><span class="help-tag">luaref-libTable</span></span></h2>


</div>
<div class="help-para">
This library provides generic functions for table manipulation. It provides
all its functions inside the table <code>table</code>.

</div>
<div class="help-para">
Most functions in the table library assume that the table represents an array
or a list. For those functions, when we talk about the "length" of a table we
mean the result of the length operator.

</div>
<div class="help-para">
table.concat({table} [, <code>{sep}</code> [, <code>{i}</code> [, <code>{j}</code>]]])                 <a name="table.concat()"></a><code class="help-tag-right">table.concat()</code>
        Given an array where all elements are strings or numbers, returns
        <code>table[i]..sep..table[i+1] ... sep..table[j]</code>. The default value for
        <code>{sep}</code> is the empty string, the default for <code>{i}</code> is 1, and the default
        for <code>{j}</code> is the length of the table. If <code>{i}</code> is greater than <code>{j}</code>,
        returns the empty string.

</div>
<div class="help-para">
table.foreach({table}, <code>{f}</code>)                                  <a name="table.foreach()"></a><code class="help-tag-right">table.foreach()</code>
        Executes the given <code>{f}</code> over all elements of <code>{table}</code>. For each element,
        <code>{f}</code> is called with the index and respective value as arguments. If <code>{f}</code>
        returns a non-`nil` value, then the loop is broken, and this value is
        returned as the final value of <code>table.foreach</code>.

</div>
<div class="help-para">
        See <a href="/neovim-docs-web/en/luaref#luaref-next()">luaref-next()</a> for extra information about table traversals.

</div>
<div class="help-para">
table.foreachi({table}, <code>{f}</code>)                                <a name="table.foreachi()"></a><code class="help-tag-right">table.foreachi()</code>
        Executes the given <code>{f}</code> over the numerical indices of <code>{table}</code>. For each
        index, <code>{f}</code> is called with the index and respective value as arguments.
        Indices are visited in sequential order, from 1 to <code>n</code>, where <code>n</code> is
        the length of the table. If <code>{f}</code> returns a non-`nil` value, then the
        loop is broken and this value is returned as the result of
        <code>table.foreachi</code>.

</div>
<div class="help-para">
table.insert({table}, [{pos},] <code>{value}</code>)                         <a name="table.insert()"></a><code class="help-tag-right">table.insert()</code>
        Inserts element <code>{value}</code> at position <code>{pos}</code> in <code>{table}</code>, shifting up
        other elements to open space, if necessary. The default value for
        <code>{pos}</code> is <code>n+1</code>, where <code>n</code> is the length of the table (see
        <a href="/neovim-docs-web/en/luaref#luaref-langLength">luaref-langLength</a>), so that a call <code>table.insert(t,x)</code> inserts <code>x</code>
        at the end of table <code>t</code>.

</div>
<div class="help-para">
table.maxn({table})                                               <a name="table.maxn()"></a><code class="help-tag-right">table.maxn()</code>
        Returns the largest positive numerical index of the given table, or
        zero if the table has no positive numerical indices. (To do its job
        this function does a linear traversal of the whole table.)

</div>
<div class="help-para">
table.remove({table} [, <code>{pos}</code>])                               <a name="table.remove()"></a><code class="help-tag-right">table.remove()</code>
        Removes from <code>{table}</code> the element at position <code>{pos}</code>, shifting down
        other elements to close the space, if necessary. Returns the value of
        the removed element. The default value for <code>{pos}</code> is <code>n</code>, where <code>n</code> is
        the length of the table (see <a href="/neovim-docs-web/en/luaref#luaref-langLength">luaref-langLength</a>), so that a call
        <code>table.remove(t)</code> removes the last element of table <code>t</code>.

</div>
<div class="help-para">
table.sort({table} [, <code>{comp}</code>])                                  <a name="table.sort()"></a><code class="help-tag-right">table.sort()</code>
        Sorts table elements in a given order, <code>in-place</code>, from <code>table[1]</code> to
        <code>table[n]</code>, where <code>n</code> is the length of the table (see
        <a href="/neovim-docs-web/en/luaref#luaref-langLength">luaref-langLength</a>). If <code>{comp}</code> is given, then it must be a function
        that receives two table elements, and returns true when the first is
        less than the second (so that <code>not comp(a[i+1],a[i])</code> will be true
        after the sort). If <code>{comp}</code> is not given, then the standard Lua
        operator <code>&lt;</code> is used instead.

</div>
<div class="help-para">
The sort algorithm is <code>not</code> stable, that is, elements considered equal by the
given order may have their relative positions changed by the sort.

</div>
<div class="help-para">
<h2 class="help-heading">5.6  Mathematical Functions<span class="help-heading-tags">                                     <a name="luaref-libMath"></a><span class="help-tag">luaref-libMath</span></span></h2>


</div>
<div class="help-para">
This library is an interface to most of the functions of the standard C math
library. It provides all its functions inside the table <code>math</code>.

</div>
<div class="help-para">
math.abs({x})                                                       <a name="math.abs()"></a><code class="help-tag-right">math.abs()</code>
        Returns the absolute value of <code>{x}</code>.

</div>
<div class="help-para">
math.acos({x})                                                     <a name="math.acos()"></a><code class="help-tag-right">math.acos()</code>
        Returns the arc cosine of <code>{x}</code> (in radians).

</div>
<div class="help-para">
math.asin({x})                                                     <a name="math.asin()"></a><code class="help-tag-right">math.asin()</code>
        Returns the arc sine of <code>{x}</code> (in radians).

</div>
<div class="help-para">
math.atan({x})                                                     <a name="math.atan()"></a><code class="help-tag-right">math.atan()</code>
        Returns the arc tangent of <code>{x}</code> (in radians).

</div>
<div class="help-para">
math.atan2({x}, <code>{y}</code>)                                              <a name="math.atan2()"></a><code class="help-tag-right">math.atan2()</code>
        Returns the arc tangent of <code>x/y</code> (in radians), but uses the signs of
        both parameters to find the quadrant of the result. (It also handles
        correctly the case of <code>{y}</code> being zero.)

</div>
<div class="help-para">
math.ceil({x})                                                     <a name="math.ceil()"></a><code class="help-tag-right">math.ceil()</code>
        Returns the smallest integer larger than or equal to <code>{x}</code>.

</div>
<div class="help-para">
math.cos({x})                                                       <a name="math.cos()"></a><code class="help-tag-right">math.cos()</code>
        Returns the cosine of <code>{x}</code> (assumed to be in radians).

</div>
<div class="help-para">
math.cosh({x})                                                     <a name="math.cosh()"></a><code class="help-tag-right">math.cosh()</code>
        Returns the hyperbolic cosine of <code>{x}</code>.

</div>
<div class="help-para">
math.deg({x})                                                       <a name="math.deg()"></a><code class="help-tag-right">math.deg()</code>
        Returns the angle <code>{x}</code> (given in radians) in degrees.

</div>
<div class="help-para">
math.exp({x})                                                       <a name="math.exp()"></a><code class="help-tag-right">math.exp()</code>
        Returns the value <code>e^x</code>.

</div>
<div class="help-para">
math.floor({x})                                                   <a name="math.floor()"></a><code class="help-tag-right">math.floor()</code>
        Returns the largest integer smaller than or equal to <code>{x}</code>.

</div>
<div class="help-para">
math.fmod({x}, <code>{y}</code>)                                                <a name="math.fmod()"></a><code class="help-tag-right">math.fmod()</code>
        Returns the remainder of the division of <code>{x}</code> by <code>{y}</code>.

</div>
<div class="help-para">
math.frexp({x})                                                   <a name="math.frexp()"></a><code class="help-tag-right">math.frexp()</code>
        Returns <code>m</code> and <code>e</code> such that <code>x = m * 2^e</code>, <code>e</code> is an integer and the
        absolute value of <code>m</code> is in the range <code>[0.5, 1)</code> (or zero when <code>{x}</code> is
        zero).

</div>
<div class="help-para">
math.huge                                                          <a name="math.huge()"></a><code class="help-tag-right">math.huge()</code>
        The value <code>HUGE_VAL</code>, a value larger than or equal to any other
        numerical value.

</div>
<div class="help-para">
math.ldexp({m}, <code>{e}</code>)                                              <a name="math.ldexp()"></a><code class="help-tag-right">math.ldexp()</code>
        Returns <code>m * 2^e</code> (<code>e</code> should be an integer).

</div>
<div class="help-para">
math.log({x})                                                       <a name="math.log()"></a><code class="help-tag-right">math.log()</code>
        Returns the natural logarithm of <code>{x}</code>.

</div>
<div class="help-para">
math.log10({x})                                                   <a name="math.log10()"></a><code class="help-tag-right">math.log10()</code>
        Returns the base-10 logarithm of <code>{x}</code>.

</div>
<div class="help-para">
math.max({x}, <code>{...}</code>)                                                <a name="math.max()"></a><code class="help-tag-right">math.max()</code>
        Returns the maximum value among its arguments.

</div>
<div class="help-para">
math.min({x}, <code>{...}</code>)                                                <a name="math.min()"></a><code class="help-tag-right">math.min()</code>
        Returns the minimum value among its arguments.

</div>
<div class="help-para">
math.modf({x})                                                     <a name="math.modf()"></a><code class="help-tag-right">math.modf()</code>
        Returns two numbers, the integral part of <code>{x}</code> and the fractional part
        of <code>{x}</code>.

</div>
<div class="help-para">
math.pi                                                              <a name="math.pi()"></a><code class="help-tag-right">math.pi()</code>
        The value of <code>pi</code>.

</div>
<div class="help-para">
math.pow({x}, <code>{y}</code>)                                                  <a name="math.pow()"></a><code class="help-tag-right">math.pow()</code>
        Returns <code>x^y</code>. (You can also use the expression <code>x^y</code> to compute this
        value.)

</div>
<div class="help-para">
math.rad({x})                                                       <a name="math.rad()"></a><code class="help-tag-right">math.rad()</code>
        Returns the angle <code>{x}</code> (given in degrees) in radians.

</div>
<div class="help-para">
math.random([{m} [, <code>{n}</code>]])                                       <a name="math.random()"></a><code class="help-tag-right">math.random()</code>
        This function is an interface to the simple pseudo-random generator
        function <code>rand</code> provided by ANSI C. (No guarantees can be given for
        its statistical properties.)

</div>
<div class="help-para">
        When called without arguments, returns a pseudo-random real number in
        the range <code>[0,1)</code>. When called with a number <code>{m}</code>, <code>math.random</code>
        returns a pseudo-random integer in the range <code>[1, m]</code>. When called
        with two numbers <code>{m}</code> and <code>{n}</code>, <code>math.random</code> returns a pseudo-random
        integer in the range <code>[m, n]</code>.

</div>
<div class="help-para">
math.randomseed({x})                                         <a name="math.randomseed()"></a><code class="help-tag-right">math.randomseed()</code>
        Sets <code>{x}</code> as the "seed" for the pseudo-random generator: equal seeds
        produce equal sequences of numbers.

</div>
<div class="help-para">
math.sin({x})                                                       <a name="math.sin()"></a><code class="help-tag-right">math.sin()</code>
        Returns the sine of <code>{x}</code> (assumed to be in radians).

</div>
<div class="help-para">
math.sinh({x})                                                     <a name="math.sinh()"></a><code class="help-tag-right">math.sinh()</code>
        Returns the hyperbolic sine of <code>{x}</code>.

</div>
<div class="help-para">
math.sqrt({x})                                                     <a name="math.sqrt()"></a><code class="help-tag-right">math.sqrt()</code>
        Returns the square root of <code>{x}</code>. (You can also use the expression
        <code>x^0.5</code> to compute this value.)

</div>
<div class="help-para">
math.tan({x})                                                       <a name="math.tan()"></a><code class="help-tag-right">math.tan()</code>
        Returns the tangent of <code>{x}</code> (assumed to be in radians).

</div>
<div class="help-para">
math.tanh({x})                                                     <a name="math.tanh()"></a><code class="help-tag-right">math.tanh()</code>
        Returns the hyperbolic tangent of <code>{x}</code>.

</div>
<div class="help-para">
<h2 class="help-heading">5.6  Input and Output Facilities<span class="help-heading-tags">                                  <a name="luaref-libIO"></a><span class="help-tag">luaref-libIO</span></span></h2>


</div>
<div class="help-para">
The I/O library provides two different styles for file manipulation. The first
one uses implicit file descriptors; that is, there are operations to set a
default input file and a default output file, and all input/output operations
are over these default files. The second style uses explicit file
descriptors.

</div>
<div class="help-para">
When using implicit file descriptors, all operations are supplied by
table <code>io</code>. When using explicit file descriptors, the operation <code>io.open</code> returns
a file descriptor and then all operations are supplied as methods of the file
descriptor.

</div>
<div class="help-para">
The table <code>io</code> also provides three predefined file descriptors with their usual
meanings from C: <code>io.stdin</code>, <code>io.stdout</code>, and <code>io.stderr</code>.

</div>
<div class="help-para">
Unless otherwise stated, all I/O functions return <code>nil</code> on failure (plus an
error message as a second result) and some value different from <code>nil</code> on
success.

</div>
<div class="help-para">
io.close([{file}])                                                  <a name="io.close()"></a><code class="help-tag-right">io.close()</code>
        Equivalent to <code>file:close</code>. Without a <code>{file}</code>, closes the default
        output file.

</div>
<div class="help-para">
io.flush()                                                          <a name="io.flush()"></a><code class="help-tag-right">io.flush()</code>
        Equivalent to <code>file:flush</code> over the default output file.

</div>
<div class="help-para">
io.input([{file}])                                                  <a name="io.input()"></a><code class="help-tag-right">io.input()</code>
        When called with a file name, it opens the named file (in text mode),
        and sets its handle as the default input file. When called with a file
        handle, it simply sets this file handle as the default input file.
        When called without parameters, it returns the current default input
        file.

</div>
<div class="help-para">
        In case of errors this function raises the error, instead of returning
        an error code.

</div>
<div class="help-para">
io.lines([{filename}])                                              <a name="io.lines()"></a><code class="help-tag-right">io.lines()</code>
        Opens the given file name in read mode and returns an iterator
        function that, each time it is called, returns a new line from the
        file. Therefore, the construction

</div>
<div class="help-para">
        <code>for line in io.lines(filename) do</code>  <code>body</code>  <code>end</code>

</div>
<div class="help-para">
        will iterate over all lines of the file. When the iterator function
        detects the end of file, it returns <code>nil</code> (to finish the loop) and
        automatically closes the file.

</div>
<div class="help-para">
        The call <code>io.lines()</code> (without a file name) is equivalent to
        <code>io.input():lines()</code>; that is, it iterates over the lines of the
        default input file. In this case it does not close the file when the
        loop ends.

</div>
<div class="help-para">
io.open({filename} [, <code>{mode}</code>])                                       <a name="io.open()"></a><code class="help-tag-right">io.open()</code>
        This function opens a file, in the mode specified in the string
        <code>{mode}</code>. It returns a new file handle, or, in case of errors, <code>nil</code>
        plus an error message.

</div>
<div class="help-para">
        The <code>{mode}</code> string can be any of the following:

</div>
<div class="help-para">
<div class="help-li" style=""> <code>"r"</code>   read mode (the default);
</div><div class="help-li" style=""> <code>"w"</code>   write mode;
</div><div class="help-li" style=""> <code>"a"</code>   append mode;
</div><div class="help-li" style=""> <code>"r+"</code>  update mode, all previous data is preserved;
</div><div class="help-li" style=""> <code>"w+"</code>  update mode, all previous data is erased;
</div><div class="help-li" style=""> <code>"a+"</code>  append update mode, previous data is preserved, writing is
                 only allowed at the end of file.
</div>
</div>
<div class="help-para">
        The <code>{mode}</code> string may also have a <code>b</code> at the end, which is needed in
        some systems to open the file in binary mode. This string is exactly
        what is used in the standard C function <code>fopen</code>.

</div>
<div class="help-para">
io.output([{file}])                                                <a name="io.output()"></a><code class="help-tag-right">io.output()</code>
        Similar to <code>io.input</code>, but operates over the default output file.

</div>
<div class="help-para">
io.popen({prog} [, <code>{mode}</code>])                                         <a name="io.popen()"></a><code class="help-tag-right">io.popen()</code>
        Starts program <code>{prog}</code> in a separated process and returns a file handle
        that you can use to read data from this program (if <code>{mode}</code> is <code>"r"</code>,
        the default) or to write data to this program (if <code>{mode}</code> is <code>"w"</code>).

</div>
<div class="help-para">
        This function is system dependent and is not available on all
        platforms.

</div>
<div class="help-para">
io.read({...})                                                       <a name="io.read()"></a><code class="help-tag-right">io.read()</code>
        Equivalent to <code>io.input():read</code>.

</div>
<div class="help-para">
io.tmpfile()                                                      <a name="io.tmpfile()"></a><code class="help-tag-right">io.tmpfile()</code>
        Returns a handle for a temporary file. This file is opened in update
        mode and it is automatically removed when the program ends.

</div>
<div class="help-para">
io.type({obj})                                                       <a name="io.type()"></a><code class="help-tag-right">io.type()</code>
        Checks whether <code>{obj}</code> is a valid file handle. Returns the string
        <code>"file"</code> if <code>{obj}</code> is an open file handle, <code>"closed file"</code> if <code>{obj}</code> is
        a closed file handle, or <code>nil</code> if <code>{obj}</code> is not a file handle.

</div>
<div class="help-para">
io.write({...})                                                     <a name="io.write()"></a><code class="help-tag-right">io.write()</code>
        Equivalent to <code>io.output():write</code>.

</div>
<div class="help-para">
file:close()                                               <a name="luaref-file%3Aclose()"></a><code class="help-tag-right">luaref-file:close()</code>
        Closes <code>file</code>. Note that files are automatically closed when their
        handles are garbage collected, but that takes an unpredictable amount
        of time to happen.

</div>
<div class="help-para">
file:flush()                                               <a name="luaref-file%3Aflush()"></a><code class="help-tag-right">luaref-file:flush()</code>
        Saves any written data to <code>file</code>.

</div>
<div class="help-para">
file:lines()                                               <a name="luaref-file%3Alines()"></a><code class="help-tag-right">luaref-file:lines()</code>
        Returns an iterator function that, each time it is called, returns a
        new line from the file. Therefore, the construction

</div>
<div class="help-para">
               <code>for line in file:lines() do</code>  <code>body</code>  <code>end</code>

</div>
<div class="help-para">
        will iterate over all lines of the file. (Unlike <code>io.lines</code>, this
        function does not close the file when the loop ends.)

</div>
<div class="help-para">
file:read({...})                                            <a name="luaref-file%3Aread()"></a><code class="help-tag-right">luaref-file:read()</code>
        Reads the file <code>file</code>, according to the given formats, which specify
        what to read. For each format, the function returns a string (or a
        number) with the characters read, or <code>nil</code> if it cannot read data with
        the specified format. When called without formats, it uses a default
        format that reads the entire next line (see below).

</div>
<div class="help-para">
        The available formats are

</div>
<div class="help-para">
         <code>"*n"</code>    reads a number; this is the only format that returns a
                 number instead of a string.
         <code>"*a"</code>    reads the whole file, starting at the current position. On
                 end of file, it returns the empty string.
         <code>"*l"</code>    reads the next line (skipping the end of line), returning
                 <code>nil</code> on end of file. This is the default format.
         <code>number</code>  reads a string with up to that number of characters,
                 returning <code>nil</code> on end of file. If number is zero, it reads
                 nothing and returns an empty string, or <code>nil</code> on end of file.

</div>
<div class="help-para">
file:seek([{whence}] [, <code>{offset}</code>])                          <a name="luaref-file%3Aseek()"></a><code class="help-tag-right">luaref-file:seek()</code>
        Sets and gets the file position, measured from the beginning of the
        file, to the position given by <code>{offset}</code> plus a base specified by the
        string <code>{whence}</code>, as follows:

</div>
<div class="help-para">
<div class="help-li" style=""> <code>"set"</code>: base is position 0 (beginning of the file);
</div><div class="help-li" style=""> <code>"cur"</code>: base is current position;
</div><div class="help-li" style=""> <code>"end"</code>: base is end of file;
</div>
</div>
<div class="help-para">
        In case of success, function <code>seek</code> returns the final file position,
        measured in bytes from the beginning of the file. If this function
        fails, it returns <code>nil</code>, plus a string describing the error.

</div>
<div class="help-para">
        The default value for <code>{whence}</code> is <code>"cur"</code>, and for <code>{offset}</code> is 0.
        Therefore, the call <code>file:seek()</code> returns the current file position,
        without changing it; the call <code>file:seek("set")</code> sets the position to
        the beginning of the file (and returns 0); and the call
        <code>file:seek("end")</code> sets the position to the end of the file, and
        returns its size.

</div>
<div class="help-para">
file:setvbuf({mode} [, <code>{size}</code>])                          <a name="luaref-file%3Asetvbuf()"></a><code class="help-tag-right">luaref-file:setvbuf()</code>
        Sets the buffering mode for an output file. There are three available
        modes:

</div>
<div class="help-para">
         <code>"no"</code>    no buffering; the result of any output operation appears
                 immediately.
         <code>"full"</code>  full buffering; output operation is performed only when
                 the buffer is full (or when you explicitly <code>flush</code> the file
                 (see <a href="/neovim-docs-web/en/luaref#io.flush()">io.flush()</a>).
         <code>"line"</code>  line buffering; output is buffered until a newline is
                 output or there is any input from some special files (such as
                 a terminal device).

</div>
<div class="help-para">
        For the last two cases, <code>{size}</code> specifies the size of the buffer, in
        bytes. The default is an appropriate size.

</div>
<div class="help-para">
file:write({...})                                          <a name="luaref-file%3Awrite()"></a><code class="help-tag-right">luaref-file:write()</code>
        Writes the value of each of its arguments to <code>file</code>. The arguments
        must be strings or numbers. To write other values, use <code>tostring</code>
        <a href="/neovim-docs-web/en/luaref#luaref-tostring()">luaref-tostring()</a> or <code>string.format</code> <a href="/neovim-docs-web/en/luaref#string.format()">string.format()</a> before
        <code>write</code>.

</div>
<div class="help-para">
<h2 class="help-heading">5.8  Operating System Facilities<span class="help-heading-tags">                                  <a name="luaref-libOS"></a><span class="help-tag">luaref-libOS</span></span></h2>


</div>
<div class="help-para">
This library is implemented through table <code>os</code>.

</div>
<div class="help-para">
os.clock()                                                          <a name="os.clock()"></a><code class="help-tag-right">os.clock()</code>
        Returns an approximation of the amount in seconds of CPU time used by
        the program.

</div>
<div class="help-para">
os.date([{format} [, <code>{time}</code>]])                                       <a name="os.date()"></a><code class="help-tag-right">os.date()</code>
        Returns a string or a table containing date and time, formatted
        according to the given string <code>{format}</code>.

</div>
<div class="help-para">
        If the <code>{time}</code> argument is present, this is the time to be formatted
        (see the <code>os.time</code> function <a href="/neovim-docs-web/en/luaref#os.time()">os.time()</a> for a description of this
        value). Otherwise, <code>date</code> formats the current time.

</div>
<div class="help-para">
        If <code>{format}</code> starts with <code>!</code>, then the date is formatted in
        Coordinated Universal Time. After this optional character, if <code>{format}</code>
        is the string <code>"*t"</code>, then <code>date</code> returns a table with the following
        fields: <code>year</code> (four digits), <code>month</code> (1-12), <code>day</code> (1-31), <code>hour</code>
        (0-23), <code>min</code> (0-59), <code>sec</code> (0-61), <code>wday</code> (weekday, Sunday is 1),
        <code>yday</code> (day of the year), and <code>isdst</code> (daylight saving flag, a
        boolean).

</div>
<div class="help-para">
        If <code>{format}</code> is not <code>"*t"</code>, then <code>date</code> returns the date as a string,
        formatted according to the same rules as the C function <code>strftime</code>.

</div>
<div class="help-para">
        When called without arguments, <code>date</code> returns a reasonable date and
        time representation that depends on the host system and on the current
        locale (that is, <code>os.date()</code> is equivalent to <code>os.date("%c")</code>).

</div>
<div class="help-para">
os.difftime({t2}, <code>{t1}</code>)                                          <a name="os.difftime()"></a><code class="help-tag-right">os.difftime()</code>
        Returns the number of seconds from time <code>{t1}</code> to time <code>{t2}</code>. In POSIX,
        Windows, and some other systems, this value is exactly <code>t2 - t1</code> .

</div>
<div class="help-para">
os.execute([{command}])                                           <a name="os.execute()"></a><code class="help-tag-right">os.execute()</code>
        This function is equivalent to the C function <code>system</code>. It passes
        <code>{command}</code> to be executed by an operating system shell. It returns a
        status code, which is system-dependent. If <code>{command}</code> is absent, then
        it returns nonzero if a shell is available and zero otherwise.

</div>
<div class="help-para">
os.exit([{code}])                                                    <a name="os.exit()"></a><code class="help-tag-right">os.exit()</code>
        Calls the C function <code>exit</code>, with an optional <code>{code}</code>, to terminate the
        host program. The default value for <code>{code}</code> is the success code.

</div>
<div class="help-para">
os.getenv({varname})                                               <a name="os.getenv()"></a><code class="help-tag-right">os.getenv()</code>
        Returns the value of the process environment variable <code>{varname}</code>, or
        <code>nil</code> if the variable is not defined.

</div>
<div class="help-para">
os.remove({filename})                                              <a name="os.remove()"></a><code class="help-tag-right">os.remove()</code>
        Deletes the file with the given name. Directories must be empty to be
        removed. If this function fails, it returns <code>nil</code>, plus a string
        describing the error.

</div>
<div class="help-para">
os.rename({oldname}, <code>{newname}</code>)                                    <a name="os.rename()"></a><code class="help-tag-right">os.rename()</code>
        Renames file named <code>{oldname}</code> to <code>{newname}</code>. If this function fails, it
        returns <code>nil</code>, plus a string describing the error.

</div>
<div class="help-para">
os.setlocale({locale} [, <code>{category}</code>])                           <a name="os.setlocale()"></a><code class="help-tag-right">os.setlocale()</code>
        Sets the current locale of the program. <code>{locale}</code> is a string
        specifying a locale; <code>{category}</code> is an optional string describing which
        category to change: <code>"all"</code>, <code>"collate"</code>, <code>"ctype"</code>, <code>"monetary"</code>,
        <code>"numeric"</code>, or <code>"time"</code>; the default category is <code>"all"</code>. The
        function returns the name of the new locale, or <code>nil</code> if the request
        cannot be honored.

</div>
<div class="help-para">
os.time([{table}])                                                   <a name="os.time()"></a><code class="help-tag-right">os.time()</code>
        Returns the current time when called without arguments, or a time
        representing the date and time specified by the given table. This
        table must have fields <code>year</code>, <code>month</code>, and <code>day</code>, and may have fields
        <code>hour</code>, <code>min</code>, <code>sec</code>, and <code>isdst</code> (for a description of these fields,
        see the <code>os.date</code> function <a href="/neovim-docs-web/en/luaref#os.date()">os.date()</a>).

</div>
<div class="help-para">
        The returned value is a number, whose meaning depends on your system.
        In POSIX, Windows, and some other systems, this number counts the
        number of seconds since some given start time (the "epoch"). In other
        systems, the meaning is not specified, and the number returned by
        <code>time</code> can be used only as an argument to <code>date</code> and <code>difftime</code>.

</div>
<div class="help-para">
os.tmpname()                                                      <a name="os.tmpname()"></a><code class="help-tag-right">os.tmpname()</code>
        Returns a string with a file name that can be used for a temporary
        file. The file must be explicitly opened before its use and explicitly
        removed when no longer needed.

</div>
<div class="help-para">
<h2 class="help-heading">5.9  The Debug Library<span class="help-heading-tags">                                         <a name="luaref-libDebug"></a><span class="help-tag">luaref-libDebug</span></span></h2>


</div>
<div class="help-para">
This library provides the functionality of the debug interface to Lua
programs. You should exert care when using this library. The functions
provided here should be used exclusively for debugging and similar tasks, such
as profiling. Please resist the temptation to use them as a usual programming
tool: they can be very slow. Moreover, several of its functions violate some
assumptions about Lua code (e.g., that variables local to a function cannot be
accessed from outside or that userdata metatables cannot be changed by Lua
code) and therefore can compromise otherwise secure code.

</div>
<div class="help-para">
All functions in this library are provided inside the <code>debug</code> table. All
functions that operate over a thread have an optional first argument which is
the thread to operate over. The default is always the current thread.

</div>
<div class="help-para">
debug.debug()                                                    <a name="debug.debug()"></a><code class="help-tag-right">debug.debug()</code>
        Enters an interactive mode with the user, running each string that the
        user enters. Using simple commands and other debug facilities, the
        user can inspect global and local variables, change their values,
        evaluate expressions, and so on. A line containing only the word
        <code>cont</code> finishes this function, so that the caller continues its
        execution.

</div>
<div class="help-para">
        Note that commands for <code>debug.debug</code> are not lexically nested within
        any function, and so have no direct access to local variables.

</div>
<div class="help-para">
debug.getfenv(o)                                               <a name="debug.getfenv()"></a><code class="help-tag-right">debug.getfenv()</code>
        Returns the environment of object <code>{o}</code>.

</div>
<div class="help-para">
debug.gethook([{thread}])                                      <a name="debug.gethook()"></a><code class="help-tag-right">debug.gethook()</code>
        Returns the current hook settings of the thread, as three values: the
        current hook function, the current hook mask, and the current hook
        count (as set by the <code>debug.sethook</code> function).

</div>
<div class="help-para">
debug.getinfo([{thread},] <code>{function}</code> [, <code>{what}</code>])               <a name="debug.getinfo()"></a><code class="help-tag-right">debug.getinfo()</code>
        Returns a table with information about a function. You can give the
        function directly, or you can give a number as the value of
        <code>{function}</code>, which means the function running at level <code>{function}</code> of
        the call stack of the given thread: level 0 is the current function
        (<code>getinfo</code> itself); level 1 is the function that called <code>getinfo</code>; and
        so on. If <code>{function}</code> is a number larger than the number of active
        functions, then <code>getinfo</code> returns <code>nil</code>.

</div>
<div class="help-para">
        The returned table may contain all the fields returned by
        <code>lua_getinfo</code> (see <a href="/neovim-docs-web/en/luaref#lua_getinfo()">lua_getinfo()</a>), with the string <code>{what}</code>
        describing which fields to fill in. The default for <code>{what}</code> is to get
        all information available, except the table of valid lines. If
        present, the option <code>f</code> adds a field named <code>func</code> with the function
        itself. If present, the option <code>L</code> adds a field named <code>activelines</code>
        with the table of valid lines.

</div>
<div class="help-para">
        For instance, the expression <code>debug.getinfo(1,"n").name</code> returns the
        name of the current function, if a reasonable name can be found, and
        <code>debug.getinfo(print)</code> returns a table with all available information
        about the <code>print</code> function.

</div>
<div class="help-para">
debug.getlocal([{thread},] <code>{level}</code>, <code>{local}</code>)                  <a name="debug.getlocal()"></a><code class="help-tag-right">debug.getlocal()</code>
        This function returns the name and the value of the local variable
        with index <code>{local}</code> of the function at level <code>{level}</code> of the stack. (The
        first parameter or local variable has index 1, and so on, until the
        last active local variable.) The function returns <code>nil</code> if there is no
        local variable with the given index, and raises an error when called
        with a <code>{level}</code> out of range. (You can call <code>debug.getinfo</code>
        <a href="/neovim-docs-web/en/luaref#debug.getinfo()">debug.getinfo()</a> to check whether the level is valid.)

</div>
<div class="help-para">
        Variable names starting with <code>(</code> (open parentheses) represent
        internal variables (loop control variables, temporaries, and C
        function locals).

</div>
<div class="help-para">
debug.getmetatable({object})                              <a name="debug.getmetatable()"></a><code class="help-tag-right">debug.getmetatable()</code>
        Returns the metatable of the given <code>{object}</code> or <code>nil</code> if it does not
        have a metatable.

</div>
<div class="help-para">
debug.getregistry()                                        <a name="debug.getregistry()"></a><code class="help-tag-right">debug.getregistry()</code>
        Returns the registry table (see <a href="/neovim-docs-web/en/luaref#luaref-apiRegistry">luaref-apiRegistry</a>).

</div>
<div class="help-para">
debug.getupvalue({func}, <code>{up}</code>)                              <a name="debug.getupvalue()"></a><code class="help-tag-right">debug.getupvalue()</code>
        This function returns the name and the value of the upvalue with index
        <code>{up}</code> of the function <code>{func}</code>. The function returns <code>nil</code> if there is no
        upvalue with the given index.

</div>
<div class="help-para">
debug.setfenv({object}, <code>{table}</code>)                               <a name="debug.setfenv()"></a><code class="help-tag-right">debug.setfenv()</code>
        Sets the environment of the given <code>{object}</code> to the given <code>{table}</code>.
        Returns <code>{object}</code>.

</div>
<div class="help-para">
debug.sethook([{thread},] <code>{hook}</code>, <code>{mask}</code> [, <code>{count}</code>])          <a name="debug.sethook()"></a><code class="help-tag-right">debug.sethook()</code>
        Sets the given function as a hook. The string <code>{mask}</code> and the number
        <code>{count}</code> describe when the hook will be called. The string mask may
        have the following characters, with the given meaning:

</div>
<div class="help-para">
<div class="help-li" style=""> <code>"c"</code> : The hook is called every time Lua calls a function;
</div><div class="help-li" style=""> <code>"r"</code> : The hook is called every time Lua returns from a function;
</div><div class="help-li" style=""> <code>"l"</code> : The hook is called every time Lua enters a new line of
           code.
</div>
</div>
<div class="help-para">
        With a <code>{count}</code> different from zero, the hook is called after every
        <code>{count}</code> instructions.

</div>
<div class="help-para">
        When called without arguments, the <code>debug.sethook</code> turns off the hook.

</div>
<div class="help-para">
        When the hook is called, its first parameter is a string describing
        the event that triggered its call: <code>"call"</code>, <code>"return"</code> (or"tail
        return"`), <code>"line"</code>, and <code>"count"</code>. For line events, the hook also
        gets the new line number as its second parameter. Inside a hook, you
        can call <code>getinfo</code> with level 2 to get more information about the
        running function (level 0 is the <code>getinfo</code> function, and level 1 is
        the hook function), unless the event is <code>"tail return"</code>. In this case,
        Lua is only simulating the return, and a call to <code>getinfo</code> will return
        invalid data.

</div>
<div class="help-para">
debug.setlocal([{thread},] <code>{level}</code>, <code>{local}</code>, <code>{value}</code>)         <a name="debug.setlocal()"></a><code class="help-tag-right">debug.setlocal()</code>
        This function assigns the value <code>{value}</code> to the local variable with
        index <code>{local}</code> of the function at level <code>{level}</code> of the stack. The
        function returns <code>nil</code> if there is no local variable with the given
        index, and raises an error when called with a <code>{level}</code> out of range.
        (You can call <code>getinfo</code> to check whether the level is valid.)
        Otherwise, it returns the name of the local variable.

</div>
<div class="help-para">
debug.setmetatable({object}, <code>{table}</code>)                     <a name="debug.setmetatable()"></a><code class="help-tag-right">debug.setmetatable()</code>
        Sets the metatable for the given <code>{object}</code> to the given <code>{table}</code> (which
        can be <code>nil</code>).

</div>
<div class="help-para">
debug.setupvalue({func}, <code>{up}</code>, <code>{value}</code>)                     <a name="debug.setupvalue()"></a><code class="help-tag-right">debug.setupvalue()</code>
        This function assigns the value <code>{value}</code> to the upvalue with index <code>{up}</code>
        of the function <code>{func}</code>. The function returns <code>nil</code> if there is no
        upvalue with the given index. Otherwise, it returns the name of the
        upvalue.

</div>
<div class="help-para">
debug.traceback([{thread},] [{message}] [,{level}])          <a name="debug.traceback()"></a><code class="help-tag-right">debug.traceback()</code>
        Returns a string with a traceback of the call stack. An optional
        <code>{message}</code> string is appended at the beginning of the traceback. An
        optional <code>{level}</code> number tells at which level to start the traceback
        (default is 1, the function calling <code>traceback</code>).

</div>
<div class="help-para">
<h2 class="help-heading">A  BIBLIOGRAPHY<span class="help-heading-tags">                                            <a name="luaref-bibliography"></a><span class="help-tag">luaref-bibliography</span></span></h2>


</div>
<div class="help-para">
This help file is a minor adaptation from this main reference:

</div>
<div class="help-para">
<div class="help-li" style=""> R. Ierusalimschy, L. H. de Figueiredo, and W. Celes.,
   "Lua: 5.1 reference manual", <a href="https://www.lua.org/manual/5.1/manual.html">https://www.lua.org/manual/5.1/manual.html</a>
</div>
</div>
<div class="help-para">
Lua is discussed in these references:

</div>
<div class="help-para">
<div class="help-li" style=""> R. Ierusalimschy, L. H. de Figueiredo, and W. Celes.,
   "Lua --- an extensible extension language".
   "Software: Practice &amp; Experience" 26, 6 (1996) 635-652.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> L. H. de Figueiredo, R. Ierusalimschy, and W. Celes.,
   "The design and implementation of a language for extending applications".
   "Proc. of XXI Brazilian Seminar on Software and Hardware" (1994) 273-283.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> L. H. de Figueiredo, R. Ierusalimschy, and W. Celes.,
   "Lua: an extensible embedded language".
   "Dr. Dobb's Journal" 21, 12 (Dec 1996) 26-33.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> R. Ierusalimschy, L. H. de Figueiredo, and W. Celes.,
   "The evolution of an extension language: a history of Lua".
   "Proc. of V Brazilian Symposium on Programming Languages" (2001) B-14-B-28.
</div>
</div>
<div class="help-para">
<h2 class="help-heading">B  COPYRIGHT AND LICENSES<span class="help-heading-tags">                                     <a name="luaref-copyright"></a><span class="help-tag">luaref-copyright</span></span></h2>


</div>
<div class="help-para">
This help file has the same copyright and license as Lua 5.1 and the Lua 5.1
 manual:

</div>
<div class="help-para">
Copyright (c) 1994-2006 Lua.org, PUC-Rio.

</div>
<div class="help-para">
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

</div>
<div class="help-para">
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

</div>
<div class="help-para">
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

</div>
<div class="help-para">
<h2 class="help-heading">C  LUAREF DOC<span class="help-heading-tags">                 <a name="luarefvim"></a><span class="help-tag">luarefvim</span> <a name="luarefvimdoc"></a><span class="help-tag">luarefvimdoc</span> <a name="luaref-help"></a><span class="help-tag">luaref-help</span> <a name="luaref-doc"></a><span class="help-tag">luaref-doc</span></span></h2>


</div>
<div class="help-para">
This is a Vim help file containing a reference for Lua 5.1, and it is -- with
a few exceptions and adaptations -- a copy of the Lua 5.1 Reference Manual
(see <a href="/neovim-docs-web/en/luaref#luaref-bibliography">luaref-bibliography</a>). For usage information, refer to
<a href="/neovim-docs-web/en/luaref#luaref-doc">luaref-doc</a>. For copyright information, see <a href="/neovim-docs-web/en/luaref#luaref-copyright">luaref-copyright</a>.

</div>
<div class="help-para">
The main ideas and concepts on how to implement this reference were taken from
Christian Habermann's CRefVim project
(<a href="https://www.vim.org/scripts/script.php?script_id=614">https://www.vim.org/scripts/script.php?script_id=614</a>).

</div>
<div class="help-para">
Adapted for bundled Nvim documentation; the original plugin can be found at
<a href="https://www.vim.org/scripts/script.php?script_id=1291">https://www.vim.org/scripts/script.php?script_id=1291</a>

</div>

  
  