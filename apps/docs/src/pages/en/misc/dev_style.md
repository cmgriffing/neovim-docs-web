---
title: Tree Sitter
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Dev Style Txt</a> 

NVIM REFERENCE MANUAL


### <a id="dev-style" class="section-title" href="#dev-style">Nvim style guide</a>

This is style guide for developers working on Nvim's source code.

License: CC-By 3.0 https://creativecommons.org/licenses/by/3.0/

Type [gO](#gO) to see the table of contents.


## <a id="" class="section-title" href="#">Background</a> 

One way in which we keep the code base manageable is by enforcing consistency.
It is very important that any programmer be able to look at another's code and
quickly understand it.

Maintaining a uniform style and following conventions means that we can more
easily use "pattern-matching" to infer what various symbols are and what
invariants are true about them. Creating common, required idioms and patterns
makes code much easier to understand.

In some cases there might be good arguments for changing certain style rules,
but we nonetheless keep things as they are in order to preserve consistency.


## <a id="dev-style-header" class="section-title" href="#dev-style-header">Header Files</a> 

The #define Guard ~

All header files should have `#define` guards to prevent multiple inclusion.
The format of the symbol name should be `NVIM_<DIRECTORY>_<FILE>_H`.

In foo/bar.h:
```
#ifndef NVIM_FOO_BAR_H
#define NVIM_FOO_BAR_H

...

#endif  // NVIM_FOO_BAR_H

```



Constants ~

Do not use macros to define constants in headers.

Macro constants in header files cannot be used by unit tests.

However, you are allowed to define a macro that holds the same value as a
non-enum constant (defined in the same header) if the value of the constant
represents the size of an array.


## <a id="dev-style-scope" class="section-title" href="#dev-style-scope">Scoping</a> 

Local Variables ~

Place a function's variables in the narrowest scope possible, and initialize
variables in the declaration.

C99 allows you to declare variables anywhere in a function. Declare them in as
local a scope as possible, and as close to the first use as possible. This
makes it easier for the reader to find the declaration and see what type the
variable is and what it was initialized to. In particular, initialization
should be used instead of declaration and assignment, e.g.
```

int i;
i = f();      // BAD: initialization separate from declaration.

int j = g();  // GOOD: declaration has initialization.


## <a id="" class="section-title" href="#">Nvim-Specific Magic</a> 

clint ~

Use `clint.py` to detect style errors.

`src/clint.py` is a Python script that reads a source file and identifies
style errors. It is not perfect, and has both false positives and false
negatives, but it is still a valuable tool. False positives can be ignored by
putting `// NOLINT` at the end of the line.

uncrustify ~

src/uncrustify.cfg is the authority for expected code formatting, for cases
not covered by clint.py.  We remove checks in clint.py if they are covered by
uncrustify rules.


## <a id="dev-style-features" class="section-title" href="#dev-style-features">Other C Features</a> 

Variable-Length Arrays and alloca() ~

We do not allow variable-length arrays or `alloca()`.

Variable-length arrays can cause hard to detect stack overflows.


Postincrement and Postdecrement ~

Use postfix form (`i++`) in statements.
```

for (int i = 0; i < 3; i++) { }
int j = ++i;  // OK: ++i is used as an expression.

for (int i = 0; i < 3; ++i) { }
++i;  // BAD: ++i is used as a statement.


Use of const ~

Use `const` pointers whenever possible. Avoid `const` on non-pointer parameter definitions.

Where to put the const ~

### <a id="Some people favor the form `int const foo` to `const int foo` . They" class="section-title" href="#Some people favor the form `int const foo` to `const int foo` . They">Note:</a>
argue that this is more readable because it's more consistent: it keeps
the rule that `const` always follows the object it's describing. However,
this consistency argument doesn't apply in codebases with few
deeply-nested pointer expressions since most `const` expressions have only
one `const`, and it applies to the underlying value. In such cases, there's
no consistency to maintain. Putting the `const` first is arguably more
readable, since it follows English in putting the "adjective" (`const`)
before the "noun" (`int`).

That said, while we encourage putting `const` first, we do not require it.
But be consistent with the code around you!
```

### <a id="void foo(const char p, int i);" class="section-title" href="#void foo(const char p, int i);">Note:</a>
}

int foo(const int a, const bool b) {
}

### <a id="int foo(int const p) {" class="section-title" href="#int foo(int const p) {">Note:</a>
}


Integer Types ~

Of the built-in integer types only use `char`, `int`, `uint8_t`, `int8_t`,
`uint16_t`, `int16_t`, `uint32_t`, `int32_t`, `uint64_t`, `int64_t`,
`uintmax_t`, `intmax_t`, `size_t`, `ssize_t`, `uintptr_t`, `intptr_t`, and
`ptrdiff_t`.

Use `int` for error codes and local, trivial variables only.

Use care when converting integer types. Integer conversions and promotions can
cause non-intuitive behavior. Note that the signedness of `char` is
implementation defined.

Public facing types must have fixed width (`uint8_t`, etc.)

There are no convenient `printf` format placeholders for fixed width types.
Cast to `uintmax_t` or `intmax_t` if you have to format fixed width integers.

Type		unsigned    signed
`char`		`%hhu`	    `%hhd`
`int`		n/a	    `%d`
`(u)intmax_t`	`%ju`	    `%jd`
`(s)size_t`	`%zu`	    `%zd`
`ptrdiff_t`	`%tu`	    `%td`


Booleans ~

Use `bool` to represent boolean values.
```

int loaded = 1;  // BAD: loaded should have type bool.


Conditions ~

Don't use "yoda-conditions". Use at most one assignment per condition.
```

if (1 == x) {

if (x == 1) {  //use this order

if ((x = f()) && (y = g())) {


Function declarations ~

Every function must not have a separate declaration.

Function declarations are created by the gendeclarations.lua script.
```

static void f(void);

static void f(void)
{
...
}


General translation unit layout ~

The definitions of public functions precede the definitions of static
functions.
```


```
HEADER>


```
PUBLIC FUNCTION DEFINITIONS>


```
STATIC FUNCTION DEFINITIONS>


Integration with declarations generator ~

Every C file must contain #include of the generated header file, guarded by
#ifdef INCLUDE_GENERATED_DECLARATIONS.

Include must go after other #includes and typedefs in .c files and after
everything else in header files. It is allowed to omit #include in a .c file
if .c file does not contain any static functions.

Included file name consists of the .c file name without extension, preceded by
the directory name relative to src/nvim. Name of the file containing static
functions declarations ends with `.c.generated.h`, `*.h.generated.h` files
contain only non-static function declarations.
```

// src/nvim/foo.c file
#include <stddef.h>

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
#endif  // NVIM_FOO_H


64-bit Portability ~

Code should be 64-bit and 32-bit friendly. Bear in mind problems of printing,
comparisons, and structure alignment.

- Remember that `sizeof(void *)` != `sizeof(int)`. Use `intptr_t` if you want
a pointer-sized integer.

- You may need to be careful with structure alignments, particularly for
structures being stored on disk. Any class/structure with a
`int64_t`/`uint64_t` member will by default end up being 8-byte aligned on a
64-bit system. If you have such structures being shared on disk between
32-bit and 64-bit code, you will need to ensure that they are packed the
same on both architectures. Most compilers offer a way to alter structure
alignment. For gcc, you can use `__attribute__((packed))`. MSVC offers
`#pragma pack()` and `__declspec(align())`.

- Use the `LL` or `ULL` suffixes as needed to create 64-bit constants. For
example:
```

int64_t my_value = 0x123456789LL;
uint64_t my_mask = 3ULL << 48;


sizeof ~

Prefer `sizeof(varname)` to `sizeof(type)`.

Use `sizeof(varname)` when you take the size of a particular variable.
`sizeof(varname)` will update appropriately if someone changes the variable
type either now or later. You may use `sizeof(type)` for code unrelated to any
particular variable, such as code that manages an external or internal data
format where a variable of an appropriate C type is not convenient.
```

Struct data;
memset(&data, 0, sizeof(data));

memset(&data, 0, sizeof(Struct));

if (raw_size < sizeof(int)) {
fprintf(stderr, "compressed record not big enough for count: %ju", raw_size);
return false;
}


## <a id="dev-style-naming" class="section-title" href="#dev-style-naming">Naming</a> 

The most important consistency rules are those that govern naming. The style
of a name immediately informs us what sort of thing the named entity is: a
type, a variable, a function, a constant, a macro, etc., without requiring us
to search for the declaration of that entity. The pattern-matching engine in
our brains relies a great deal on these naming rules.

Naming rules are pretty arbitrary, but we feel that consistency is more
important than individual preferences in this area, so regardless of whether
you find them sensible or not, the rules are the rules.


General Naming Rules ~

Function names, variable names, and filenames should be descriptive; eschew
abbreviation.

Give as descriptive a name as possible, within reason. Do not worry about
saving horizontal space as it is far more important to make your code
immediately understandable by a new reader. Do not use abbreviations that are
ambiguous or unfamiliar to readers outside your project, and do not abbreviate
by deleting letters within a word.
```

int price_count_reader;    // No abbreviation.
int num_errors;            // "num" is a widespread convention.
int num_dns_connections;   // Most people know what "DNS" stands for.

int n;                     // Meaningless.
int nerr;                  // Ambiguous abbreviation.
int n_comp_conns;          // Ambiguous abbreviation.
int wgc_connections;       // Only your group knows what this stands for.
int pc_reader;             // Lots of things can be abbreviated "pc".
int cstmr_id;              // Deletes internal letters.


File Names ~

Filenames should be all lowercase and can include underscores (`_`).

Use underscores to separate words. Examples of acceptable file names:
```

my_useful_file.c
getline_fix.c  // OK: getline refers to the glibc function.

C files should end in `.c` and header files should end in `.h`.

Do not use filenames that already exist in `/usr/include`, such as `db.h`.

In general, make your filenames very specific. For example, use
`http_server_logs.h` rather than `logs.h`.


Type Names ~

Typedef-ed structs and enums start with a capital letter and have a capital
letter for each new word, with no underscores: `MyExcitingStruct`.

Non-Typedef-ed structs and enums are all lowercase with underscores between
words: `struct my_exciting_struct` .
```

struct my_struct {
...
};
typedef struct my_struct MyAwesomeStruct;


Variable Names ~

Variable names are all lowercase, with underscores between words. For
instance: `my_exciting_local_variable`.

Common Variable names ~

For example:
```

string table_name;  // OK: uses underscore.
string tablename;   // OK: all lowercase.

string tableName;   // BAD: mixed case.

```


Struct Variables ~

Data members in structs should be named like regular variables.
```

struct url_table_properties {
string name;
int num_entries;
}

```


Global Variables ~

Don't use global variables unless absolutely necessary. Prefix global
variables with `g_`.


Constant Names ~

Use a `k` followed by mixed case: `kDaysInAWeek`.

All compile-time constants, whether they are declared locally or globally,
follow a slightly different naming convention from other variables. Use a `k`
followed by words with uppercase first letters:
```

const int kDaysInAWeek = 7;

Function Names ~

Function names are all lowercase, with underscores between words. For
instance: `my_exceptional_function()`. All functions in the same header file
should have a common prefix.

In `os_unix.h`:
```

### <a id="void unix_open(const char path);" class="section-title" href="#void unix_open(const char path);">Note:</a>
void unix_user_id(void);

If your function crashes upon an error, you should append `or_die` to the
function name. This only applies to functions which could be used by
production code and to errors that are reasonably likely to occur during
normal operation.


Enumerator Names ~

Enumerators should be named like constants: `kEnumName`.
```

enum url_table_errors {
kOK = 0,
kErrorOutOfMemory,
kErrorMalformedInput,
};


Macro Names ~

They're like this: `MY_MACRO_THAT_SCARES_CPP_DEVELOPERS`.
```

#define ROUND(x) ...
#define PI_ROUNDED 5.0


## <a id="dev-style-comments" class="section-title" href="#dev-style-comments">Comments</a> 

Comments are vital to keeping our code readable. The following rules describe
what you should comment and where. But remember: while comments are very
important, the best code is self-documenting.

When writing your comments, write for your audience: the next contributor who
will need to understand your code. Be generous — the next one may be you!

Nvim uses Doxygen comments.


Comment Style ~

Use the `//`-style syntax only.
```

// This is a comment spanning
// multiple lines
f();


File Comments ~

Start each file with a description of its contents.

Legal Notice ~

We have no such thing. These things are in LICENSE and only there.

File Contents ~

Every file should have a comment at the top describing its contents.

Generally a `.h` file will describe the variables and functions that are
declared in the file with an overview of what they are for and how they
are used. A `.c` file should contain more information about implementation
details or discussions of tricky algorithms. If you feel the
implementation details or a discussion of the algorithms would be useful
for someone reading the `.h`, feel free to put it there instead, but
mention in the `.c` that the documentation is in the `.h` file.

Do not duplicate comments in both the `.h` and the `.c`. Duplicated
comments diverge.
```

/// A brief description of this file.
///
/// A longer description of this file.
/// Be very generous here.


Struct Comments ~

Every struct definition should have accompanying comments that describes what
it is for and how it should be used.
```

/// Window info stored with a buffer.
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
### <a id="WinInfo wi_next;" class="section-title" href="#WinInfo wi_next;">Note:</a>
/// Previous entry or NULL for first entry.
### <a id="WinInfo wi_prev;" class="section-title" href="#WinInfo wi_prev;">Note:</a>
/// Pointer to window that did the wi_fpos.
### <a id="Win wi_win;" class="section-title" href="#Win wi_win;">Note:</a>
...
};

If the field comments are short, you can also put them next to the field. But
be consistent within one struct, and follow the necessary doxygen style.
```

struct wininfo_S {
### <a id="WinInfo wi_next;" class="section-title" href="#WinInfo wi_next;">Note:</a>
### <a id="WinInfo wi_prev;" class="section-title" href="#WinInfo wi_prev;">Note:</a>
### <a id="Win wi_win;" class="section-title" href="#Win wi_win;">Note:</a>
...
};

If you have already described a struct in detail in the comments at the top of
your file feel free to simply state "See comment at top of file for a complete
description", but be sure to have some sort of comment.

Document the synchronization assumptions the struct makes, if any. If an
instance of the struct can be accessed by multiple threads, take extra care to
document the rules and invariants surrounding multithreaded use.


Function Comments ~

Declaration comments describe use of the function; comments at the definition
of a function describe operation.

Function Declarations ~

Every function declaration should have comments immediately preceding it
that describe what the function does and how to use it. These comments
should be descriptive ("Opens the file") rather than imperative ("Open the
file"); the comment describes the function, it does not tell the function
what to do. In general, these comments do not describe how the function
performs its task. Instead, that should be left to comments in the
function definition.

Types of things to mention in comments at the function declaration:

- If the function allocates memory that the caller must free.
- Whether any of the arguments can be a null pointer.
- If there are any performance implications of how a function is used.
- If the function is re-entrant. What are its synchronization assumptions?
```
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
### <a id="Iterator get_iterator(void arg1, void arg2);" class="section-title" href="#Iterator get_iterator(void arg1, void arg2);">Note:</a>

```


Function Definitions ~

If there is anything tricky about how a function does its job, the
function definition should have an explanatory comment. For example, in
the definition comment you might describe any coding tricks you use, give
an overview of the steps you go through, or explain why you chose to
implement the function in the way you did rather than using a viable
alternative. For instance, you might mention why it must acquire a lock
for the first half of the function but why it is not needed for the second
half.

Note you should not just repeat the comments given with the function
declaration, in the `.h` file or wherever. It's okay to recapitulate
briefly what the function does, but the focus of the comments should be on
how it does it.
```

// Note that we don't use Doxygen comments here.
### <a id="Iterator get_iterator(void arg1, void arg2)" class="section-title" href="#Iterator get_iterator(void arg1, void arg2)">Note:</a>
{
...
}


Variable Comments ~

In general the actual name of the variable should be descriptive enough to
give a good idea of what the variable is used for. In certain cases, more
comments are required.

Global Variables ~

All global variables should have a comment describing what they are and
what they are used for. For example:
```

/// The total number of tests cases that we run
/// through in this regression test.
const int kNumTestCases = 6;


Implementation Comments ~

In your implementation you should have comments in tricky, non-obvious,
interesting, or important parts of your code.

Line Comments ~

Also, lines that are non-obvious should get a comment at the end of the
line. These end-of-line comments should be separated from the code by 2
spaces. Example:
```

// If we have enough memory, mmap the data portion too.
mmap_budget = max<int64>(0, mmap_budget - index_->length());
if (mmap_budget >= data_size_ && !MmapData(mmap_chunk_bytes, mlock)) {
return;  // Error already logged.
}

```

Note that there are both comments that describe what the code is doing,
and comments that mention that an error has already been logged when the
function returns.

If you have several comments on subsequent lines, it can often be more
readable to line them up:
```

do_something();                      // Comment here so the comments line up.
do_something_else_that_is_longer();  // Comment here so there are two spaces between
// the code and the comment.
{ // One space before comment when opening a new scope is allowed,
// thus the comment lines up with the following comments and code.
do_something_else();  // Two spaces before line comments normally.
}

```


NULL, true/false, 1, 2, 3... ~

When you pass in a null pointer, boolean, or literal integer values to
functions, you should consider adding a comment about what they are, or
make your code self-documenting by using constants. For example, compare:
```

bool success = calculate_something(interesting_value,
10,
false,
NULL);  // What are these arguments??

```


versus:
```

bool success = calculate_something(interesting_value,
10,     // Default base value.
false,  // Not the first time we're calling this.
NULL);  // No callback.

```


Or alternatively, constants or self-describing variables:
```

const int kDefaultBaseValue = 10;
const bool kFirstTimeCalling = false;
### <a id="Callback null_callback = NULL;" class="section-title" href="#Callback null_callback = NULL;">Note:</a>
bool success = calculate_something(interesting_value,
kDefaultBaseValue,
kFirstTimeCalling,
null_callback);

```


Don'ts ~

Note that you should never describe the code itself. Assume that the
person reading the code knows C better than you do, even though he or she
does not know what you are trying to do:
```

// Now go through the b array and make sure that if i occurs,
// the next element is i+1.
...        // Geez.  What a useless comment.


Punctuation, Spelling and Grammar ~

Pay attention to punctuation, spelling, and grammar; it is easier to read
well-written comments than badly written ones.

Comments should be as readable as narrative text, with proper capitalization
and punctuation. In many cases, complete sentences are more readable than
sentence fragments. Shorter comments, such as comments at the end of a line of
code, can sometimes be less formal, but you should be consistent with your
style.

Although it can be frustrating to have a code reviewer point out that you are
using a comma when you should be using a semicolon, it is very important that
source code maintain a high level of clarity and readability. Proper
punctuation, spelling, and grammar help with that goal.


TODO Comments ~

Use `TODO` comments for code that is temporary, a short-term solution, or
good-enough but not perfect.

`TODO`s should include the string `TODO` in all caps, followed by the name,
email address, or other identifier of the person who can best provide context
about the problem referenced by the `TODO`. The main purpose is to have a
consistent `TODO` format that can be searched to find the person who can
provide more details upon request. A `TODO` is not a commitment that the
person referenced will fix the problem. Thus when you create a `TODO`, it is
almost always your name that is given.
```

### <a id="// TODO(kl@gmail.com): Use a "" here for concatenation operator." class="section-title" href="#// TODO(kl@gmail.com): Use a "" here for concatenation operator.">Note:</a>
// TODO(Zeke): change this to use relations.

If your `TODO` is of the form "At a future date do something" make sure that
you either include a very specific date ("Fix by November 2005") or a very
specific event ("Remove this code when all clients can handle XML
responses.").


Deprecation Comments ~

Mark deprecated interface points with `@deprecated` docstring token.

You can mark an interface as deprecated by writing a comment containing the
word `@deprecated` in all caps. The comment goes either before the declaration
of the interface or on the same line as the declaration.

After `@deprecated`, write your name, email, or other identifier in
parentheses.

A deprecation comment must include simple, clear directions for people to fix
their callsites. In C, you can implement a deprecated function as an inline
function that calls the new interface point.

Marking an interface point `DEPRECATED` will not magically cause any callsites
to change. If you want people to actually stop using the deprecated facility,
you will have to fix the callsites yourself or recruit a crew to help you.

New code should not contain calls to deprecated interface points. Use the new
interface point instead. If you cannot understand the directions, find the
person who created the deprecation and ask them for help using the new
interface point.


## <a id="dev-style-format" class="section-title" href="#dev-style-format">Formatting</a> 

Coding style and formatting are pretty arbitrary, but a project is much easier
to follow if everyone uses the same style. Individuals may not agree with
every aspect of the formatting rules, and some of the rules may take some
getting used to, but it is important that all project contributors follow the
style rules so that they can all read and understand everyone's code easily.


Non-ASCII Characters ~

Non-ASCII characters should be rare, and must use UTF-8 formatting.

You shouldn't hard-code user-facing text in source (OR SHOULD YOU?), even
English, so use of non-ASCII characters should be rare. However, in certain
cases it is appropriate to include such words in your code. For example, if
your code parses data files from foreign sources, it may be appropriate to
hard-code the non-ASCII string(s) used in those data files as delimiters. More
commonly, unittest code (which does not need to be localized) might contain
non-ASCII strings. In such cases, you should use UTF-8, since that is an
encoding understood by most tools able to handle more than just ASCII.

Hex encoding is also OK, and encouraged where it enhances readability — for
example, `"\uFEFF"`, is the Unicode zero-width no-break space character, which
would be invisible if included in the source as straight UTF-8.


Function Declarations and Definitions ~

Return type on the same line as function name, parameters on the same line if
they fit.

Functions look like this:
```

ReturnType function_name(Type par_name1, Type par_name2)
{
do_something();
...
}

If you have too much text to fit on one line:
```

ReturnType really_long_function_name(Type par_name1, Type par_name2,
Type par_name3)
{
do_something();
...
}

or if you cannot fit even the first parameter (but only then):
```

ReturnType really_really_really_long_function_name(
Type par_name1,  // 4 space indent
Type par_name2,
Type par_name3)
{
do_something();  // 2 space indent
...
}

Some points to note:

- The open parenthesis is always on the same line as the function name.
- There is never a space between the function name and the open parenthesis.
- There is never a space between the parentheses and the parameters.
- The open curly brace is always on the next line.
- The close curly brace is always on the last line by itself.
- There should be a space between the close parenthesis and the open curly
brace.
- All parameters should be named, with identical names in the declaration and
implementation.
- All parameters should be aligned if possible.
- Default indentation is 2 spaces.
- Wrapped parameters have a 4 space indent.


Function Calls ~

On one line if it fits; otherwise, wrap arguments at the parenthesis.

Function calls have the following format:
```

bool retval = do_something(argument1, argument2, argument3);

If the arguments do not all fit on one line, they should be broken up onto
multiple lines, with each subsequent line aligned with the first argument. Do
not add spaces after the open paren or before the close paren:
```

bool retval = do_something(averyveryveryverylongargument1,
argument2, argument3);

If the function has many arguments, consider having one per line if this makes
the code more readable:
```

bool retval = do_something(argument1,
argument2,
argument3,
argument4);

Arguments may optionally all be placed on subsequent lines, with one line per
argument:
```

if (...) {
...
...
if (...) {
do_something(
argument1,  // 4 space indent
argument2,
argument3,
argument4);
}

In particular, this should be done if the function signature is so long that
it cannot fit within the maximum line length.


Braced Initializer Lists ~

Format a braced list exactly like you would format a function call in its
place but with one space after the `{` and one space before the `}`

If the braced list follows a name (e.g. a type or variable name), format as if
the `{}` were the parentheses of a function call with that name. If there is
no name, assume a zero-length name.
```

struct my_struct m = {  // Here, you could also break before {.
superlongvariablename1,
superlongvariablename2,
{ short, interior, list },
{ interiorwrappinglist,
interiorwrappinglist2 } };


Conditionals ~

Don't use spaces inside parentheses.
```

if (condition) {  // no spaces inside parentheses
...  // 2 space indent.
} else if (...) {  // The else goes on the same line as the closing brace.
...
} else {
...
}

Loops and Switch Statements ~

Annotate non-trivial fall-through between cases.

If not conditional on an enumerated value, switch statements should always
have a `default` case (in the case of an enumerated value, the compiler will
warn you if any values are not handled). If the default case should never
execute, simply `assert`:
```

switch (var) {
case 0:
...
break;
case 1:
...
break;
default:
assert(false);
}

Pointer Expressions ~

No spaces around period or arrow. Pointer operators do not have trailing
spaces.

The following are examples of correctly-formatted pointer and reference
expressions:
```

### <a id="x = p;" class="section-title" href="#x = p;">Note:</a>
p = &x;
x = r.y;
x = r->y;

Note that:

- There are no spaces around the period or arrow when accessing a member.
### <a id="- Pointer operators have no space after the  or &." class="section-title" href="#- Pointer operators have no space after the  or &.">Note:</a>

Boolean Expressions ~

When you have a boolean expression that is longer than the standard line
length, keep operators at the start of the line.
```

if (this_one_thing > this_other_thing
&& a_third_thing == a_fourth_thing
&& yet_another && last_one) {
...
}

Also note that you should always use the punctuation operators, such as `&&`
and `~`, rather than the word operators, such as `and` and `compl`.


Return Values ~

Do not needlessly surround the `return` expression with parentheses.

Use parentheses in `return expr`; only where you would use them in `x =
expr;`.
```

return result;
return (some_long_condition && another_condition);

return (value);  // You wouldn't write var = (value);
return(result);  // return is not a function!


Horizontal Whitespace ~

Use of horizontal whitespace depends on location.

General ~
```
int x[] = { 0 };  // Spaces inside braces for braced-init-list.

```


Variables ~
```
int long_variable = 0;  // Don't align assignments.
int i             = 1;

struct my_struct {  // Exception: struct arrays.
### <a id="const char boy;" class="section-title" href="#const char boy;">Note:</a>
### <a id="const char girl;" class="section-title" href="#const char girl;">Note:</a>
int pos;
} my_variable[] = {
{ "Mia",       "Michael", 8  },
{ "Elizabeth", "Aiden",   10 },
{ "Emma",      "Mason",   2  },
};

```



Operators ~
```
x = 0;            // Assignment operators always have spaces around
// them.
x = -5;           // No spaces separating unary operators and their
x++;              // arguments.
if (x && !y)
...
i = (int)d;       // No spaces after a cast operator.

```


Vertical Whitespace ~

Minimize use of vertical whitespace.

The basic principle is: The more code that fits on one screen, the easier it
is to follow and understand the control flow of the program. Of course,
readability can suffer from code being too dense as well as too spread out, so
use your judgment. But in general, minimize use of vertical whitespace.


## <a id="" class="section-title" href="#">Parting Words</a> 

The style guide is intended to make the code more readable. If you think you
must violate its rules for the sake of clarity, do it! But please add a note
to your pull request explaining your reasoning.


vim:tw=78:ts=8:et:ft=help:norl:
