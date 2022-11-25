---
title:  Dev_style
layout: ../../layouts/MainLayout.astro
---

  <a name="dev_style.txt"></a><a name="dev-style"></a><h1> Dev_style</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/dev_style.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Nvim style guide</div>
<div class="old-help-para">This is style guide for developers working on Nvim's source code.</div>
<div class="old-help-para">License: CC-By 3.0 <a href="https://creativecommons.org/licenses/by/3.0/">https://creativecommons.org/licenses/by/3.0/</a></div>
<div class="old-help-para"><a name="_-background"></a><h2 class="help-heading">Background</h2></div>
<div class="old-help-para">One way in which we keep the code base manageable is by enforcing consistency.
It is very important that any programmer be able to look at another's code and
quickly understand it.</div>
<div class="old-help-para">Maintaining a uniform style and following conventions means that we can more
easily use "pattern-matching" to infer what various symbols are and what
invariants are true about them. Creating common, required idioms and patterns
makes code much easier to understand.</div>
<div class="old-help-para">In some cases there might be good arguments for changing certain style rules,
but we nonetheless keep things as they are in order to preserve consistency.</div>
<div class="old-help-para"><h2 class="help-heading">Header Files<span class="help-heading-tags">                                            <a name="dev-style-header"></a><span class="help-tag">dev-style-header</span></span></h2></div>
<div class="old-help-para"><div class="help-column_heading">The #define Guard</div></div>
<div class="old-help-para">All header files should have <code>#define</code> guards to prevent multiple inclusion.
The format of the symbol name should be <code>NVIM_&lt;DIRECTORY&gt;_&lt;FILE&gt;_H</code>.</div>
<div class="old-help-para">    In foo/bar.h:
<pre>#ifndef NVIM_FOO_BAR_H
#define NVIM_FOO_BAR_H

...

#endif  // NVIM_FOO_BAR_H</pre></div>
<div class="old-help-para"><div class="help-column_heading">Constants</div></div>
<div class="old-help-para">Do not use macros to define constants in headers.</div>
<div class="old-help-para">Macro constants in header files cannot be used by unit tests.</div>
<div class="old-help-para">However, you are allowed to define a macro that holds the same value as a
non-enum constant (defined in the same header) if the value of the constant
represents the size of an array.</div>
<div class="old-help-para"><h2 class="help-heading">Scoping<span class="help-heading-tags">                                                 <a name="dev-style-scope"></a><span class="help-tag">dev-style-scope</span></span></h2></div>
<div class="old-help-para"><div class="help-column_heading">Local Variables</div></div>
<div class="old-help-para">Place a function's variables in the narrowest scope possible, and initialize
variables in the declaration.</div>
<div class="old-help-para">C99 allows you to declare variables anywhere in a function. Declare them in as
local a scope as possible, and as close to the first use as possible. This
makes it easier for the reader to find the declaration and see what type the
variable is and what it was initialized to. In particular, initialization
should be used instead of declaration and assignment, e.g.<pre>int i;
i = f();      // BAD: initialization separate from declaration.

int j = g();  // GOOD: declaration has initialization.</pre>
<a name="_-nvim-specific-magic"></a><h2 class="help-heading">Nvim-Specific Magic</h2></div>
<div class="old-help-para"><div class="help-column_heading">clint</div></div>
<div class="old-help-para">Use <code>clint.py</code> to detect style errors.</div>
<div class="old-help-para"><code>src/clint.py</code> is a Python script that reads a source file and identifies
style errors. It is not perfect, and has both false positives and false
negatives, but it is still a valuable tool. False positives can be ignored by
putting <code>// NOLINT</code> at the end of the line.</div>
<div class="old-help-para"><div class="help-column_heading">uncrustify</div></div>
<div class="old-help-para">src/uncrustify.cfg is the authority for expected code formatting, for cases
not covered by clint.py.  We remove checks in clint.py if they are covered by
uncrustify rules.</div>
<div class="old-help-para"><h2 class="help-heading">Other C Features<span class="help-heading-tags">                                        <a name="dev-style-features"></a><span class="help-tag">dev-style-features</span></span></h2></div>
<div class="old-help-para"><div class="help-column_heading">Variable-Length Arrays and alloca()</div></div>
<div class="old-help-para">We do not allow variable-length arrays or <code>alloca()</code>.</div>
<div class="old-help-para">Variable-length arrays can cause hard to detect stack overflows.</div>
<div class="old-help-para"><div class="help-column_heading">Postincrement and Postdecrement</div></div>
<div class="old-help-para">Use postfix form (<code>i++</code>) in statements.<pre>for (int i = 0; i &lt; 3; i++) { }
int j = ++i;  // OK: ++i is used as an expression.

for (int i = 0; i &lt; 3; ++i) { }
++i;  // BAD: ++i is used as a statement.</pre>
<div class="help-column_heading">Use of const</div></div>
<div class="old-help-para">Use <code>const</code> pointers whenever possible. Avoid <code>const</code> on non-pointer parameter definitions.</div>
<div class="old-help-para"><div class="help-column_heading">    Where to put the const</div></div>
<div class="old-help-para">    Some people favor the form <code>int const *foo</code> to <code>const int *foo</code> . They
    argue that this is more readable because it's more consistent: it keeps
    the rule that <code>const</code> always follows the object it's describing. However,
    this consistency argument doesn't apply in codebases with few
    deeply-nested pointer expressions since most <code>const</code> expressions have only
    one <code>const</code>, and it applies to the underlying value. In such cases, there's
    no consistency to maintain. Putting the <code>const</code> first is arguably more
    readable, since it follows English in putting the "adjective" (<code>const</code>)
    before the "noun" (<code>int</code>).</div>
<div class="old-help-para">    That said, while we encourage putting <code>const</code> first, we do not require it.
    But be consistent with the code around you!<pre>void foo(const char *p, int i);
}

int foo(const int a, const bool b) {
}

int foo(int *const p) {
}</pre>
<div class="help-column_heading">Integer Types</div></div>
<div class="old-help-para">Of the built-in integer types only use <code>char</code>, <code>int</code>, <code>uint8_t</code>, <code>int8_t</code>,
<code>uint16_t</code>, <code>int16_t</code>, <code>uint32_t</code>, <code>int32_t</code>, <code>uint64_t</code>, <code>int64_t</code>,
<code>uintmax_t</code>, <code>intmax_t</code>, <code>size_t</code>, <code>ssize_t</code>, <code>uintptr_t</code>, <code>intptr_t</code>, and
<code>ptrdiff_t</code>.</div>
<div class="old-help-para">Use <code>int</code> for error codes and local, trivial variables only.</div>
<div class="old-help-para">Use care when converting integer types. Integer conversions and promotions can
cause non-intuitive behavior. Note that the signedness of <code>char</code> is
implementation defined.</div>
<div class="old-help-para">Public facing types must have fixed width (<code>uint8_t</code>, etc.)</div>
<div class="old-help-para">There are no convenient <code>printf</code> format placeholders for fixed width types.
Cast to <code>uintmax_t</code> or <code>intmax_t</code> if you have to format fixed width integers.</div>
<div class="old-help-para">Type		unsigned    signed
<code>char</code>  		<code>%hhu</code>  	    <code>%hhd</code>
<code>int</code>  		n/a	    <code>%d</code>
<code>(u)intmax_t</code>  	<code>%ju</code>  	    <code>%jd</code>
<code>(s)size_t</code>  	<code>%zu</code>  	    <code>%zd</code>
<code>ptrdiff_t</code>  	<code>%tu</code>  	    <code>%td</code></div>
<div class="old-help-para"><div class="help-column_heading">Booleans</div></div>
<div class="old-help-para">Use <code>bool</code> to represent boolean values.<pre>int loaded = 1;  // BAD: loaded should have type bool.</pre>
<div class="help-column_heading">Conditions</div></div>
<div class="old-help-para">Don't use "yoda-conditions". Use at most one assignment per condition.<pre>if (1 == x) {

if (x == 1) {  //use this order

if ((x = f()) &amp;&amp; (y = g())) {</pre>
<div class="help-column_heading">Function declarations</div></div>
<div class="old-help-para">Every function must not have a separate declaration.</div>
<div class="old-help-para">Function declarations are created by the gendeclarations.lua script.<pre>static void f(void);

static void f(void)
{
  ...
}</pre>
<div class="help-column_heading">General translation unit layout</div></div>
<div class="old-help-para">The definitions of public functions precede the definitions of static
functions.<pre>&lt;HEADER&gt;

&lt;PUBLIC FUNCTION DEFINITIONS&gt;

&lt;STATIC FUNCTION DEFINITIONS&gt;</pre>
<div class="help-column_heading">Integration with declarations generator</div></div>
<div class="old-help-para">Every C file must contain #include of the generated header file, guarded by
#ifdef INCLUDE_GENERATED_DECLARATIONS.</div>
<div class="old-help-para">Include must go after other #includes and typedefs in .c files and after
everything else in header files. It is allowed to omit #include in a .c file
if .c file does not contain any static functions.</div>
<div class="old-help-para">Included file name consists of the .c file name without extension, preceded by
the directory name relative to src/nvim. Name of the file containing static
functions declarations ends with <code>.c.generated.h</code>, <code>*.h.generated.h</code> files
contain only non-static function declarations.<pre>// src/nvim/foo.c file
#include &lt;stddef.h&gt;

typedef int FooType;

#ifdef INCLUDE_GENERATED_DECLARATIONS
# include "foo.c.generated.h"
#endif

…


// src/nvim/foo.h file
#ifndef NVIM_FOO_H
#define NVIM_FOO_H

…

#ifdef INCLUDE_GENERATED_DECLARATIONS
# include "foo.h.generated.h"
#endif
#endif  // NVIM_FOO_H</pre>
<div class="help-column_heading">64-bit Portability</div></div>
<div class="old-help-para">Code should be 64-bit and 32-bit friendly. Bear in mind problems of printing,
comparisons, and structure alignment.</div>
<div class="old-help-para"><div class="help-li" style=""> Remember that <code>sizeof(void *)</code> != <code>sizeof(int)</code>. Use <code>intptr_t</code> if you want
  a pointer-sized integer.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> You may need to be careful with structure alignments, particularly for
  structures being stored on disk. Any class/structure with a
  <code>int64_t</code>/`uint64_t` member will by default end up being 8-byte aligned on a
  64-bit system. If you have such structures being shared on disk between
  32-bit and 64-bit code, you will need to ensure that they are packed the
  same on both architectures. Most compilers offer a way to alter structure
  alignment. For gcc, you can use <code>__attribute__((packed))</code>. MSVC offers
  <code>#pragma pack()</code> and <code>__declspec(align())</code>.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Use the <code>LL</code> or <code>ULL</code> suffixes as needed to create 64-bit constants. For
  example:<pre>int64_t my_value = 0x123456789LL;
uint64_t my_mask = 3ULL &lt;&lt; 48;</pre>
sizeof ~
</div></div>
<div class="old-help-para">Prefer <code>sizeof(varname)</code> to <code>sizeof(type)</code>.</div>
<div class="old-help-para">Use <code>sizeof(varname)</code> when you take the size of a particular variable.
<code>sizeof(varname)</code> will update appropriately if someone changes the variable
type either now or later. You may use <code>sizeof(type)</code> for code unrelated to any
particular variable, such as code that manages an external or internal data
format where a variable of an appropriate C type is not convenient.<pre>Struct data;
memset(&amp;data, 0, sizeof(data));

memset(&amp;data, 0, sizeof(Struct));

if (raw_size &lt; sizeof(int)) {
  fprintf(stderr, "compressed record not big enough for count: %ju", raw_size);
  return false;
}</pre>
<h2 class="help-heading">Naming<span class="help-heading-tags">                                                  <a name="dev-style-naming"></a><span class="help-tag">dev-style-naming</span></span></h2></div>
<div class="old-help-para">The most important consistency rules are those that govern naming. The style
of a name immediately informs us what sort of thing the named entity is: a
type, a variable, a function, a constant, a macro, etc., without requiring us
to search for the declaration of that entity. The pattern-matching engine in
our brains relies a great deal on these naming rules.</div>
<div class="old-help-para">Naming rules are pretty arbitrary, but we feel that consistency is more
important than individual preferences in this area, so regardless of whether
you find them sensible or not, the rules are the rules.</div>
<div class="old-help-para"><div class="help-column_heading">General Naming Rules</div></div>
<div class="old-help-para">Function names, variable names, and filenames should be descriptive; eschew
abbreviation.</div>
<div class="old-help-para">Give as descriptive a name as possible, within reason. Do not worry about
saving horizontal space as it is far more important to make your code
immediately understandable by a new reader. Do not use abbreviations that are
ambiguous or unfamiliar to readers outside your project, and do not abbreviate
by deleting letters within a word.<pre>int price_count_reader;    // No abbreviation.
int num_errors;            // "num" is a widespread convention.
int num_dns_connections;   // Most people know what "DNS" stands for.

int n;                     // Meaningless.
int nerr;                  // Ambiguous abbreviation.
int n_comp_conns;          // Ambiguous abbreviation.
int wgc_connections;       // Only your group knows what this stands for.
int pc_reader;             // Lots of things can be abbreviated "pc".
int cstmr_id;              // Deletes internal letters.</pre>
<div class="help-column_heading">File Names</div></div>
<div class="old-help-para">Filenames should be all lowercase and can include underscores (<code>_</code>).</div>
<div class="old-help-para">Use underscores to separate words. Examples of acceptable file names:<pre>my_useful_file.c
getline_fix.c  // OK: getline refers to the glibc function.</pre>
C files should end in <code>.c</code> and header files should end in <code>.h</code>.</div>
<div class="old-help-para">Do not use filenames that already exist in <code>/usr/include</code>, such as <code>db.h</code>.</div>
<div class="old-help-para">In general, make your filenames very specific. For example, use
<code>http_server_logs.h</code> rather than <code>logs.h</code>.</div>
<div class="old-help-para"><div class="help-column_heading">Type Names</div></div>
<div class="old-help-para">Typedef-ed structs and enums start with a capital letter and have a capital
letter for each new word, with no underscores: <code>MyExcitingStruct</code>.</div>
<div class="old-help-para">Non-Typedef-ed structs and enums are all lowercase with underscores between
words: <code>struct my_exciting_struct</code> .<pre>struct my_struct {
  ...
};
typedef struct my_struct MyAwesomeStruct;</pre>
<div class="help-column_heading">Variable Names</div></div>
<div class="old-help-para">Variable names are all lowercase, with underscores between words. For
instance: <code>my_exciting_local_variable</code>.</div>
<div class="old-help-para"><div class="help-column_heading">    Common Variable names</div></div>
<div class="old-help-para">    For example:<pre>string table_name;  // OK: uses underscore.
string tablename;   // OK: all lowercase.

string tableName;   // BAD: mixed case.</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Struct Variables</div></div>
<div class="old-help-para">    Data members in structs should be named like regular variables.<pre>struct url_table_properties {
  string name;
  int num_entries;
}</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Global Variables</div></div>
<div class="old-help-para">    Don't use global variables unless absolutely necessary. Prefix global
    variables with <code>g_</code>.</div>
<div class="old-help-para"><div class="help-column_heading">Constant Names</div></div>
<div class="old-help-para">Use a <code>k</code> followed by mixed case: <code>kDaysInAWeek</code>.</div>
<div class="old-help-para">All compile-time constants, whether they are declared locally or globally,
follow a slightly different naming convention from other variables. Use a <code>k</code>
followed by words with uppercase first letters:<pre>const int kDaysInAWeek = 7;</pre>
<div class="help-column_heading">Function Names</div></div>
<div class="old-help-para">Function names are all lowercase, with underscores between words. For
instance: <code>my_exceptional_function()</code>. All functions in the same header file
should have a common prefix.</div>
<div class="old-help-para">In <code>os_unix.h</code>:<pre>void unix_open(const char *path);
void unix_user_id(void);</pre>
If your function crashes upon an error, you should append <code>or_die</code> to the
function name. This only applies to functions which could be used by
production code and to errors that are reasonably likely to occur during
normal operation.</div>
<div class="old-help-para"><div class="help-column_heading">Enumerator Names</div></div>
<div class="old-help-para">Enumerators should be named like constants: <code>kEnumName</code>.<pre>enum url_table_errors {
  kOK = 0,
  kErrorOutOfMemory,
  kErrorMalformedInput,
};</pre>
<div class="help-column_heading">Macro Names</div></div>
<div class="old-help-para">They're like this: <code>MY_MACRO_THAT_SCARES_CPP_DEVELOPERS</code>.<pre>#define ROUND(x) ...
#define PI_ROUNDED 5.0</pre>
<h2 class="help-heading">Comments<span class="help-heading-tags">                                                <a name="dev-style-comments"></a><span class="help-tag">dev-style-comments</span></span></h2></div>
<div class="old-help-para">Comments are vital to keeping our code readable. The following rules describe
what you should comment and where. But remember: while comments are very
important, the best code is self-documenting.</div>
<div class="old-help-para">When writing your comments, write for your audience: the next contributor who
will need to understand your code. Be generous — the next one may be you!</div>
<div class="old-help-para">Nvim uses Doxygen comments.</div>
<div class="old-help-para"><div class="help-column_heading">Comment Style</div></div>
<div class="old-help-para">Use the <code>//</code>-style syntax only.<pre>// This is a comment spanning
// multiple lines
f();</pre>
<div class="help-column_heading">File Comments</div></div>
<div class="old-help-para">Start each file with a description of its contents.</div>
<div class="old-help-para"><div class="help-column_heading">    Legal Notice</div></div>
<div class="old-help-para">    We have no such thing. These things are in LICENSE and only there.</div>
<div class="old-help-para"><div class="help-column_heading">    File Contents</div></div>
<div class="old-help-para">    Every file should have a comment at the top describing its contents.</div>
<div class="old-help-para">    Generally a <code>.h</code> file will describe the variables and functions that are
    declared in the file with an overview of what they are for and how they
    are used. A <code>.c</code> file should contain more information about implementation
    details or discussions of tricky algorithms. If you feel the
    implementation details or a discussion of the algorithms would be useful
    for someone reading the <code>.h</code>, feel free to put it there instead, but
    mention in the <code>.c</code> that the documentation is in the <code>.h</code> file.</div>
<div class="old-help-para">    Do not duplicate comments in both the <code>.h</code> and the <code>.c</code>. Duplicated
    comments diverge.<pre>/// A brief description of this file.
///
/// A longer description of this file.
/// Be very generous here.</pre>
<div class="help-column_heading">Struct Comments</div></div>
<div class="old-help-para">Every struct definition should have accompanying comments that describes what
it is for and how it should be used.<pre>/// Window info stored with a buffer.
///
/// Two types of info are kept for a buffer which are associated with a
/// specific window:
/// 1. Each window can have a different line number associated with a
/// buffer.
/// 2. The window-local options for a buffer work in a similar way.
/// The window-info is kept in a list at g_wininfo.  It is kept in
/// most-recently-used order.
struct win_info {
  /// Next entry or NULL for last entry.
  WinInfo *wi_next;
  /// Previous entry or NULL for first entry.
  WinInfo *wi_prev;
  /// Pointer to window that did the wi_fpos.
  Win *wi_win;
  ...
};</pre>
If the field comments are short, you can also put them next to the field. But
be consistent within one struct, and follow the necessary doxygen style.<pre>struct wininfo_S {
  WinInfo *wi_next;  ///&lt; Next entry or NULL for last entry.
  WinInfo *wi_prev;  ///&lt; Previous entry or NULL for first entry.
  Win *wi_win;       ///&lt; Pointer to window that did the wi_fpos.
  ...
};</pre>
If you have already described a struct in detail in the comments at the top of
your file feel free to simply state "See comment at top of file for a complete
description", but be sure to have some sort of comment.</div>
<div class="old-help-para">Document the synchronization assumptions the struct makes, if any. If an
instance of the struct can be accessed by multiple threads, take extra care to
document the rules and invariants surrounding multithreaded use.</div>
<div class="old-help-para"><div class="help-column_heading">Function Comments</div></div>
<div class="old-help-para">Declaration comments describe use of the function; comments at the definition
of a function describe operation.</div>
<div class="old-help-para"><div class="help-column_heading">    Function Declarations</div></div>
<div class="old-help-para">    Every function declaration should have comments immediately preceding it
    that describe what the function does and how to use it. These comments
    should be descriptive ("Opens the file") rather than imperative ("Open the
    file"); the comment describes the function, it does not tell the function
    what to do. In general, these comments do not describe how the function
    performs its task. Instead, that should be left to comments in the
    function definition.</div>
<div class="old-help-para">    Types of things to mention in comments at the function declaration:</div>
<div class="old-help-para"><div class="help-li" style=""> If the function allocates memory that the caller must free.
</div><div class="help-li" style=""> Whether any of the arguments can be a null pointer.
</div><div class="help-li" style=""> If there are any performance implications of how a function is used.
</div><div class="help-li" style=""> If the function is re-entrant. What are its synchronization assumptions?
      &gt;
    /// Brief description of the function.
    ///
    /// Detailed description.
    /// May span multiple paragraphs.
    ///
    /// @param arg1 Description of arg1
    /// @param arg2 Description of arg2. May span
    ///        multiple lines.
    ///
    /// @return Description of the return value.
</div><a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+dev_style.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/dev_style.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%20%2F%2F%2F%20%20%20%20%20%20%20%20multiple%20lines.%0A%20%20%20%20%2F%2F%2F%0A%20%20%20%20%2F%2F%2F%20%40return%20Description%20of%20the%20return%20value.%0A%20%20%20%20Iterator%20%2Aget_iterator(void%20%2Aarg1%2C%20void%20%2Aarg2)%3B%0A%3C%0A%0A%20%20%20%20Function%20Definitions%20~%0A%0D%60%60%60">Iterator *get_iterator(void *arg1, void *arg2);</a></div>
<div class="old-help-para"><div class="help-column_heading">    Function Definitions</div></div>
<div class="old-help-para">    If there is anything tricky about how a function does its job, the
    function definition should have an explanatory comment. For example, in
    the definition comment you might describe any coding tricks you use, give
    an overview of the steps you go through, or explain why you chose to
    implement the function in the way you did rather than using a viable
    alternative. For instance, you might mention why it must acquire a lock
    for the first half of the function but why it is not needed for the second
    half.</div>
<div class="old-help-para">    Note you should not just repeat the comments given with the function
    declaration, in the <code>.h</code> file or wherever. It's okay to recapitulate
    briefly what the function does, but the focus of the comments should be on
    how it does it.<pre>// Note that we don't use Doxygen comments here.
Iterator *get_iterator(void *arg1, void *arg2)
{
  ...
}</pre>
<div class="help-column_heading">Variable Comments</div></div>
<div class="old-help-para">In general the actual name of the variable should be descriptive enough to
give a good idea of what the variable is used for. In certain cases, more
comments are required.</div>
<div class="old-help-para"><div class="help-column_heading">    Global Variables</div></div>
<div class="old-help-para">    All global variables should have a comment describing what they are and
    what they are used for. For example:<pre>/// The total number of tests cases that we run
/// through in this regression test.
const int kNumTestCases = 6;</pre>
<div class="help-column_heading">Implementation Comments</div></div>
<div class="old-help-para">In your implementation you should have comments in tricky, non-obvious,
interesting, or important parts of your code.</div>
<div class="old-help-para"><div class="help-column_heading">    Line Comments</div></div>
<div class="old-help-para">    Also, lines that are non-obvious should get a comment at the end of the
    line. These end-of-line comments should be separated from the code by 2
    spaces. Example:<pre>// If we have enough memory, mmap the data portion too.
mmap_budget = max&lt;int64&gt;(0, mmap_budget - index_-&gt;length());
if (mmap_budget &gt;= data_size_ &amp;&amp; !MmapData(mmap_chunk_bytes, mlock)) {
  return;  // Error already logged.
}</pre></div>
<div class="old-help-para">    Note that there are both comments that describe what the code is doing,
    and comments that mention that an error has already been logged when the
    function returns.</div>
<div class="old-help-para">    If you have several comments on subsequent lines, it can often be more
    readable to line them up:<pre>do_something();                      // Comment here so the comments line up.
do_something_else_that_is_longer();  // Comment here so there are two spaces between
                                     // the code and the comment.
{ // One space before comment when opening a new scope is allowed,
  // thus the comment lines up with the following comments and code.
  do_something_else();  // Two spaces before line comments normally.
}</pre></div>
<div class="old-help-para"><div class="help-column_heading">    NULL, true/false, 1, 2, 3...</div></div>
<div class="old-help-para">    When you pass in a null pointer, boolean, or literal integer values to
    functions, you should consider adding a comment about what they are, or
    make your code self-documenting by using constants. For example, compare:
<pre>bool success = calculate_something(interesting_value,
                                   10,
                                   false,
                                   NULL);  // What are these arguments??</pre></div>
<div class="old-help-para">    versus:<pre>bool success = calculate_something(interesting_value,
                                   10,     // Default base value.
                                   false,  // Not the first time we're calling this.
                                   NULL);  // No callback.</pre></div>
<div class="old-help-para">    Or alternatively, constants or self-describing variables:<pre>const int kDefaultBaseValue = 10;
const bool kFirstTimeCalling = false;
Callback *null_callback = NULL;
bool success = calculate_something(interesting_value,
                                   kDefaultBaseValue,
                                   kFirstTimeCalling,
                                   null_callback);</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Don'ts</div></div>
<div class="old-help-para">    Note that you should never describe the code itself. Assume that the
    person reading the code knows C better than you do, even though he or she
    does not know what you are trying to do:<pre>// Now go through the b array and make sure that if i occurs,
// the next element is i+1.
...        // Geez.  What a useless comment.</pre>
<div class="help-column_heading">Punctuation, Spelling and Grammar</div></div>
<div class="old-help-para">Pay attention to punctuation, spelling, and grammar; it is easier to read
well-written comments than badly written ones.</div>
<div class="old-help-para">Comments should be as readable as narrative text, with proper capitalization
and punctuation. In many cases, complete sentences are more readable than
sentence fragments. Shorter comments, such as comments at the end of a line of
code, can sometimes be less formal, but you should be consistent with your
style.</div>
<div class="old-help-para">Although it can be frustrating to have a code reviewer point out that you are
using a comma when you should be using a semicolon, it is very important that
source code maintain a high level of clarity and readability. Proper
punctuation, spelling, and grammar help with that goal.</div>
<div class="old-help-para"><div class="help-column_heading">TODO Comments</div></div>
<div class="old-help-para">Use <code>TODO</code> comments for code that is temporary, a short-term solution, or
good-enough but not perfect.</div>
<div class="old-help-para"><code>TODO</code>s should include the string <code>TODO</code> in all caps, followed by the name,
email address, or other identifier of the person who can best provide context
about the problem referenced by the <code>TODO</code>. The main purpose is to have a
consistent <code>TODO</code> format that can be searched to find the person who can
provide more details upon request. A <code>TODO</code> is not a commitment that the
person referenced will fix the problem. Thus when you create a <code>TODO</code>, it is
almost always your name that is given.<pre>// TODO(kl@gmail.com): Use a "*" here for concatenation operator.
// TODO(Zeke): change this to use relations.</pre>
If your <code>TODO</code> is of the form "At a future date do something" make sure that
you either include a very specific date ("Fix by November 2005") or a very
specific event ("Remove this code when all clients can handle XML
responses.").</div>
<div class="old-help-para"><div class="help-column_heading">Deprecation Comments</div></div>
<div class="old-help-para">Mark deprecated interface points with <code>@deprecated</code> docstring token.</div>
<div class="old-help-para">You can mark an interface as deprecated by writing a comment containing the
word <code>@deprecated</code> in all caps. The comment goes either before the declaration
of the interface or on the same line as the declaration.</div>
<div class="old-help-para">After <code>@deprecated</code>, write your name, email, or other identifier in
parentheses.</div>
<div class="old-help-para">A deprecation comment must include simple, clear directions for people to fix
their callsites. In C, you can implement a deprecated function as an inline
function that calls the new interface point.</div>
<div class="old-help-para">Marking an interface point <code>DEPRECATED</code> will not magically cause any callsites
to change. If you want people to actually stop using the deprecated facility,
you will have to fix the callsites yourself or recruit a crew to help you.</div>
<div class="old-help-para">New code should not contain calls to deprecated interface points. Use the new
interface point instead. If you cannot understand the directions, find the
person who created the deprecation and ask them for help using the new
interface point.</div>
<div class="old-help-para"><h2 class="help-heading">Formatting<span class="help-heading-tags">                                              <a name="dev-style-format"></a><span class="help-tag">dev-style-format</span></span></h2></div>
<div class="old-help-para">Coding style and formatting are pretty arbitrary, but a project is much easier
to follow if everyone uses the same style. Individuals may not agree with
every aspect of the formatting rules, and some of the rules may take some
getting used to, but it is important that all project contributors follow the
style rules so that they can all read and understand everyone's code easily.</div>
<div class="old-help-para"><div class="help-column_heading">Non-ASCII Characters</div></div>
<div class="old-help-para">Non-ASCII characters should be rare, and must use UTF-8 formatting.</div>
<div class="old-help-para">You shouldn't hard-code user-facing text in source (OR SHOULD YOU?), even
English, so use of non-ASCII characters should be rare. However, in certain
cases it is appropriate to include such words in your code. For example, if
your code parses data files from foreign sources, it may be appropriate to
hard-code the non-ASCII string(s) used in those data files as delimiters. More
commonly, unittest code (which does not need to be localized) might contain
non-ASCII strings. In such cases, you should use UTF-8, since that is an
encoding understood by most tools able to handle more than just ASCII.</div>
<div class="old-help-para">Hex encoding is also OK, and encouraged where it enhances readability — for
example, <code>"\uFEFF"</code>, is the Unicode zero-width no-break space character, which
would be invisible if included in the source as straight UTF-8.</div>
<div class="old-help-para"><div class="help-column_heading">Function Calls</div></div>
<div class="old-help-para">On one line if it fits; otherwise, wrap arguments at the parenthesis.</div>
<div class="old-help-para">Function calls have the following format:<pre>bool retval = do_something(argument1, argument2, argument3);</pre>
If the arguments do not all fit on one line, they should be broken up onto
multiple lines, with each subsequent line aligned with the first argument. Do
not add spaces after the open paren or before the close paren:<pre>bool retval = do_something(averyveryveryverylongargument1,
                           argument2, argument3);</pre>
If the function has many arguments, consider having one per line if this makes
the code more readable:<pre>bool retval = do_something(argument1,
                           argument2,
                           argument3,
                           argument4);</pre>
Arguments may optionally all be placed on subsequent lines, with one line per
argument:<pre>if (...) {
  ...
  ...
  if (...) {
    do_something(
        argument1,  // 4 space indent
        argument2,
        argument3,
        argument4);
  }</pre>
In particular, this should be done if the function signature is so long that
it cannot fit within the maximum line length.</div>
<div class="old-help-para"><div class="help-column_heading">Braced Initializer Lists</div></div>
<div class="old-help-para">Format a braced list exactly like you would format a function call in its
place but with one space after the <code>{</code> and one space before the <code>}</code></div>
<div class="old-help-para">If the braced list follows a name (e.g. a type or variable name), format as if
the <code>{}</code> were the parentheses of a function call with that name. If there is
no name, assume a zero-length name.<pre>struct my_struct m = {  // Here, you could also break before {.
    superlongvariablename1,
    superlongvariablename2,
    { short, interior, list },
    { interiorwrappinglist,
      interiorwrappinglist2 } };</pre>
<div class="help-column_heading">Loops and Switch Statements</div></div>
<div class="old-help-para">Annotate non-trivial fall-through between cases.</div>
<div class="old-help-para">If not conditional on an enumerated value, switch statements should always
have a <code>default</code> case (in the case of an enumerated value, the compiler will
warn you if any values are not handled). If the default case should never
execute, simply <code>assert</code>:<pre>switch (var) {
  case 0:
    ...
    break;
  case 1:
    ...
    break;
  default:
    assert(false);
}</pre>
<div class="help-column_heading">Return Values</div></div>
<div class="old-help-para">Do not needlessly surround the <code>return</code> expression with parentheses.</div>
<div class="old-help-para">Use parentheses in <code>return expr</code>; only where you would use them inx =
expr;`.<pre>return result;
return (some_long_condition &amp;&amp; another_condition);

return (value);  // You wouldn't write var = (value);
return(result);  // return is not a function!</pre>
<div class="help-column_heading">Horizontal Whitespace</div></div>
<div class="old-help-para">Use of horizontal whitespace depends on location.</div>
<div class="old-help-para"><div class="help-column_heading">    General</div><pre>int x[] = { 0 };  // Spaces inside braces for braced-init-list.</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Variables</div><pre>int long_variable = 0;  // Don't align assignments.
int i             = 1;

struct my_struct {  // Exception: struct arrays.
  const char *boy;
  const char *girl;
  int pos;
} my_variable[] = {
  { "Mia",       "Michael", 8  },
  { "Elizabeth", "Aiden",   10 },
  { "Emma",      "Mason",   2  },
};</pre></div>
<div class="old-help-para"><div class="help-column_heading">    Operators</div><pre>x = 0;            // Assignment operators always have spaces around
                  // them.
x = -5;           // No spaces separating unary operators and their
x++;              // arguments.
if (x &amp;&amp; !y)</pre></div>
<div class="old-help-para"><div class="help-column_heading">Vertical Whitespace</div></div>
<div class="old-help-para">Minimize use of vertical whitespace.</div>
<div class="old-help-para">The basic principle is: The more code that fits on one screen, the easier it
is to follow and understand the control flow of the program. Of course,
readability can suffer from code being too dense as well as too spread out, so
use your judgment. But in general, minimize use of vertical whitespace.</div>
<div class="old-help-para"><a name="_-parting-words"></a><h2 class="help-heading">Parting Words</h2></div>
<div class="old-help-para">The style guide is intended to make the code more readable. If you think you
must violate its rules for the sake of clarity, do it! But please add a note
to your pull request explaining your reasoning.</div>

  
  