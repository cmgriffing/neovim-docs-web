---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="" class="section-title" href="#">*Eval.Txt*	Nvim</a> 

VIM REFERENCE MANUAL	  by Bram Moolenaar


### <a id="expression expr E15 eval" class="section-title" href="#expression expr E15 eval">Expression evaluation</a>

Using expressions is introduced in chapter 41 of the user manual [usr_41.txt](#usr_41.txt).

Type [gO](#gO) to see the table of contents.


## <a id="variables" class="section-title" href="#variables">1. Variables</a> 

1.1 Variable types ~
### <a id="E712 E896 E897 E899" class="section-title" href="#E712 E896 E897 E899">Note:</a>
There are seven types of variables:

### <a id="Number Integer" class="section-title" href="#Number Integer">Note:</a>
Number		A 32 or 64 bit signed number.  [expr-number](#expr-number)
The number of bits is available in [v:numbersize](#v:numbersize).
Examples:  -123  0x10  0177  0o177  0b1011

### <a id="A floating point number. [floating-point-format| Float" class="section-title" href="#A floating point number. |floating-point-format](#floating-point-format| Float" class="section-title" href="#A floating point number. |floating-point-format) Float">Float</a>
Examples: 123.456  1.15e-6  -1.1e3

String		A NUL terminated string of 8-bit unsigned characters (bytes).
[expr-string](#expr-string) Examples: "ab\txx\"--"  'x-z''a,c'

Funcref		A reference to a function [Funcref](#Funcref).
Example: function("strlen")
It can be bound to a dictionary and arguments, it then works
like a Partial.
Example: function("Callback", [arg], myDict)

List		An ordered sequence of items, see [List](#List) for details.
Example: [1, 2, ['a', 'b']]

Dictionary	An associative, unordered array: Each entry has a key and a
value. [Dictionary](#Dictionary)
Examples:
{"blue": "#0000ff", "red": "#ff0000"}
#{blue: "#0000ff", red: "#ff0000"}

Blob		Binary Large Object. Stores any sequence of bytes.  See [Blob](#Blob)
for details.
Example: 0zFF00ED015DAF
0z is an empty Blob.

The Number and String types are converted automatically, depending on how they
are used.

Conversion from a Number to a String is by making the ASCII representation of
the Number.  Examples:
Number 123	-->	String "123" ~
Number 0	-->	String "0" ~
Number -1	-->	String "-1" ~
### <a id="octal" class="section-title" href="#octal">Note:</a>
Conversion from a String to a Number is done by converting the first digits to
a number.  Hexadecimal "0xf9", Octal "017" or "0o17", and Binary "0b10"
numbers are recognized.  If the String doesn't start with digits, the result
is zero. Examples:
String "456"	-->	Number 456 ~
String "6bar"	-->	Number 6 ~
String "foo"	-->	Number 0 ~
String "0xf1"	-->	Number 241 ~
String "0100"	-->	Number 64 ~
String "0o100"	-->	Number 64 ~
String "0b101"	-->	Number 5 ~
String "-8"	-->	Number -8 ~
String "+8"	-->	Number 0 ~

To force conversion from String to Number, add zero to it:
```
:echo "0100" + 0

```
	64 ~

To avoid a leading zero to cause octal conversion, or for using a different
base, use [str2nr()](#str2nr()).

### <a id="TRUE FALSE Boolean" class="section-title" href="#TRUE FALSE Boolean">Note:</a>
For boolean operators Numbers are used.  Zero is FALSE, non-zero is TRUE.
You can also use [v:false| and |v:true](#v:false| and |v:true).
When TRUE is returned from a function it is the Number one, FALSE is the
number zero.

Note that in the command:
```
:if "foo"
:" NOT executed
"foo" is converted to 0, which means FALSE.  If the string starts with a
non-zero number it means TRUE:
```
:if "8foo"
:" executed
To test for a non-empty string, use empty():
```
:if !empty("foo")

```

### <a id="non-zero-arg" class="section-title" href="#non-zero-arg">Note:</a>
Function arguments often behave slightly different from [TRUE](#TRUE): If the
argument is present and it evaluates to a non-zero Number, [v:true](#v:true) or a
non-empty String, then the value is considered to be TRUE.
Note that " " and "0" are also non-empty strings, thus considered to be TRUE.
A List, Dictionary or Float is not a Number or String, thus evaluate to FALSE.

### <a id="E745 E728 E703 E729 E730 E731" class="section-title" href="#E745 E728 E703 E729 E730 E731">Note:</a>
### <a id="E974 E975 E976" class="section-title" href="#E974 E975 E976">Note:</a>
[List|, |Dictionary|, |Funcref|, and |Blob](#List|, |Dictionary|, |Funcref|, and |Blob) types are not automatically
converted.

### <a id="E805 E806 E808" class="section-title" href="#E805 E806 E808">Note:</a>
When mixing Number and Float the Number is converted to Float.  Otherwise
there is no automatic conversion of Float.  You can use str2float() for String
to Float, printf() for Float to String and float2nr() for Float to Number.

### <a id="E362 E891 E892 E893 E894 E907" class="section-title" href="#E362 E891 E892 E893 E894 E907">Note:</a>
When expecting a Float a Number can also be used, but nothing else.

### <a id="no-type-checking" class="section-title" href="#no-type-checking">Note:</a>
You will not get an error if you try to change the type of a variable.


1.2 Function references ~
### <a id="Funcref E695 E718" class="section-title" href="#Funcref E695 E718">Note:</a>
A Funcref variable is obtained with the [function()| function, the |funcref()](#function()| function, the |funcref())
function or created with the lambda expression [expr-lambda](#expr-lambda).  It can be used
in an expression in the place of a function name, before the parenthesis
around the arguments, to invoke the function it refers to.  Example:
```

:let Fn = function("MyFunc")
:echo Fn()
### <a id="E704 E705 E707" class="section-title" href="#E704 E705 E707"><</a>
A Funcref variable must start with a capital, "s:", "w:", "t:" or "b:".  You
can use "g:" but the following name must still start with a capital.  You
cannot have both a Funcref variable and a function with the same name.

A special case is defining a function and directly assigning its Funcref to a
Dictionary entry.  Example:
```
:function dict.init() dict
:   let self.val = 0
:endfunction

The key of the Dictionary can start with a lower case letter.  The actual
function name is not used here.  Also see [numbered-function](#numbered-function).

A Funcref can also be used with the [:call](#:call) command:
```
:call Fn()
:call dict.init()

The name of the referenced function can be obtained with [string()](#string()).
```
:let func = string(Fn)

You can use [call()](#call()) to invoke a Funcref and use a list variable for the
arguments:
```
:let r = call(Fn, mylist)

```

### <a id="Partial" class="section-title" href="#Partial">Note:</a>
A Funcref optionally binds a Dictionary and/or arguments.  This is also called
a Partial.  This is created by passing the Dictionary and/or arguments to
function() or funcref().  When calling the function the Dictionary and/or
arguments will be passed to the function.  Example:
```

let Cb = function('Callback', ['foo'], myDict)
call Cb('bar')

This will invoke the function as if using:
```
call myDict.Callback('foo', 'bar')

Note that binding a function to a Dictionary also happens when the function is
a member of the Dictionary:
```

let myDict.myFunction = MyFunction
call myDict.myFunction()

Here MyFunction() will get myDict passed as "self".  This happens when the
"myFunction" member is accessed.  When assigning "myFunction" to otherDict
and calling it, it will be bound to otherDict:
```

let otherDict.myFunction = myDict.myFunction
call otherDict.myFunction()

Now "self" will be "otherDict".  But when the dictionary was bound explicitly
this won't happen:
```

let myDict.myFunction = function(MyFunction, myDict)
let otherDict.myFunction = myDict.myFunction
call otherDict.myFunction()

Here "self" will be "myDict", because it was bound explicitly.


1.3 Lists ~
### <a id="list List Lists E686" class="section-title" href="#list List Lists E686">Note:</a>
A List is an ordered sequence of items.  An item can be of any type.  Items
can be accessed by their index number.  Items can be added and removed at any
position in the sequence.


List creation ~
### <a id="E696 E697" class="section-title" href="#E696 E697">Note:</a>
A List is created with a comma-separated list of items in square brackets.
Examples:
```
:let mylist = [1, two, 3, "four"]
:let emptylist = []

An item can be any expression.  Using a List for an item creates a
List of Lists:
```
:let nestlist = [[11, 12], [21, 22], [31, 32]]

An extra comma after the last item is ignored.


List index ~
### <a id="list-index E684" class="section-title" href="#list-index E684">Note:</a>
An item in the List can be accessed by putting the index in square brackets
after the List.  Indexes are zero-based, thus the first item has index zero.
```
:let item = mylist[0]		" get the first item: 1
:let item = mylist[2]		" get the third item: 3

When the resulting item is a list this can be repeated:
```
:let item = nestlist[0][1]	" get the first list, second item: 12

```

A negative index is counted from the end.  Index -1 refers to the last item in
the List, -2 to the last but one item, etc.
```
:let last = mylist[-1]		" get the last item: "four"

To avoid an error for an invalid index use the [get()](#get()) function.  When an item
is not available it returns zero or the default value you specify:
```
:echo get(mylist, idx)
:echo get(mylist, idx, "NONE")


List concatenation ~

Two lists can be concatenated with the "+" operator:
```
:let longlist = mylist + [5, 6]
:let mylist += [7, 8]

To prepend or append an item turn the item into a list by putting [] around
it.  To change a list in-place see [list-modification](#list-modification) below.


Sublist ~
### <a id="sublist" class="section-title" href="#sublist">Note:</a>
A part of the List can be obtained by specifying the first and last index,
separated by a colon in square brackets:
```
:let shortlist = mylist[2:-1]	" get List [3, "four"]

Omitting the first index is similar to zero.  Omitting the last index is
similar to -1.
```
:let endlist = mylist[2:]	" from item 2 to the end: [3, "four"]
:let shortlist = mylist[2:2]	" List with one item: [3]
:let otherlist = mylist[:]	" make a copy of the List

If the first index is beyond the last item of the List or the second item is
before the first item, the result is an empty list.  There is no error
message.

If the second index is equal to or greater than the length of the list the
length minus one is used:
```
:let mylist = [0, 1, 2, 3]
:echo mylist[2:8]		" result: [2, 3]

NOTE: mylist[s:e] means using the variable "s:e" as index.  Watch out for
using a single letter variable before the ":".  Insert a space when needed:
mylist[s : e].


List identity ~
### <a id="list-identity" class="section-title" href="#list-identity">Note:</a>
When variable "aa" is a list and you assign it to another variable "bb", both
variables refer to the same list.  Thus changing the list "aa" will also
change "bb":
```
:let aa = [1, 2, 3]
:let bb = aa
:call add(aa, 4)
:echo bb

```
	[1, 2, 3, 4]

Making a copy of a list is done with the [copy()](#copy()) function.  Using [:] also
works, as explained above.  This creates a shallow copy of the list: Changing
a list item in the list will also change the item in the copied list:
```
:let aa = [[1, 'a'], 2, 3]
:let bb = copy(aa)
:call add(aa, 4)
:let aa[0][1] = 'aaa'
:echo aa

```
	[[1, aaa], 2, 3, 4]
```
:echo bb

```
	[[1, aaa], 2, 3]

To make a completely independent list use [deepcopy()](#deepcopy()).  This also makes a
copy of the values in the list, recursively.  Up to a hundred levels deep.

The operator "is" can be used to check if two variables refer to the same
List.  "isnot" does the opposite.  In contrast "==" compares if two lists have
the same value.
```
:let alist = [1, 2, 3]
:let blist = [1, 2, 3]
:echo alist is blist

```
	0
```
:echo alist == blist

```
	1

Note about comparing lists: Two lists are considered equal if they have the
same length and all items compare equal, as with using "==".  There is one
exception: When comparing a number with a string they are considered
different.  There is no automatic type conversion, as with using "==" on
variables.  Example:
```
echo 4 == "4"

```
	1
```
echo [4] == ["4"]

```
	0

Thus comparing Lists is more strict than comparing numbers and strings.  You
can compare simple values this way too by putting them in a list:
```

:let a = 5
:let b = "5"
:echo a == b

```
	1
```
:echo [a] == [b]

```
	0


List unpack ~

To unpack the items in a list to individual variables, put the variables in
square brackets, like list items:
```
:let [var1, var2] = mylist

When the number of variables does not match the number of items in the list
this produces an error.  To handle any extra items from the list append ";"
and a variable name:
```
:let [var1, var2; rest] = mylist

This works like:
```
:let var1 = mylist[0]
:let var2 = mylist[1]
:let rest = mylist[2:]

Except that there is no error if there are only two items.  "rest" will be an
empty list then.


List modification ~
### <a id="list-modification" class="section-title" href="#list-modification">Note:</a>
To change a specific item of a list use [:let](#:let) this way:
```
:let list[4] = "four"
:let listlist[0][3] = item

To change part of a list you can specify the first and last item to be
modified.  The value must at least have the number of items in the range:
```
:let list[3:5] = [3, 4, 5]

Adding and removing items from a list is done with functions.  Here are a few
examples:
```
:call insert(list, 'a')		" prepend item 'a'
:call insert(list, 'a', 3)	" insert item 'a' before list[3]
:call add(list, "new")		" append String item
:call add(list, [1, 2])		" append a List as one new item
:call extend(list, [1, 2])	" extend the list with two more items
:let i = remove(list, 3)	" remove item 3
:unlet list[3]			" idem
:let l = remove(list, 3, -1)	" remove items 3 to last item
:unlet list[3 : ]		" idem
:call filter(list, 'v:val !~ "x"')  " remove items with an 'x'

Changing the order of items in a list:
```
:call sort(list)		" sort a list alphabetically
:call reverse(list)		" reverse the order of items
:call uniq(sort(list))		" sort and remove duplicates


For loop ~

The [:for| loop executes commands for each item in a |List|, |String| or |Blob](#:for| loop executes commands for each item in a |List|, |String| or |Blob).
A variable is set to each item in sequence.  Example with a List:
```
:for item in mylist
:   call Doit(item)
:endfor

This works like:
```
:let index = 0
:while index < len(mylist)
:   let item = mylist[index]
:   :call Doit(item)
:   let index = index + 1
:endwhile

If all you want to do is modify each item in the list then the [map()](#map())
function will be a simpler method than a for loop.

Just like the [:let| command, |:for](#:let| command, |:for) also accepts a list of variables.  This
requires the argument to be a List of Lists.
```
:for [lnum, col] in [[1, 3], [2, 8], [3, 0]]
:   call Doit(lnum, col)
:endfor

This works like a [:let](#:let) command is done for each list item.  Again, the types
must remain the same to avoid an error.

It is also possible to put remaining items in a List variable:
```
:for [i, j; rest] in listlist
:   call Doit(i, j)
:   if !empty(rest)
:      echo "remainder: " .. string(rest)
:   endif
:endfor

For a Blob one byte at a time is used.

For a String one character, including any composing characters, is used as a
String.  Example:
```
for c in text
echo 'This character is ' .. c
endfor


List functions ~
### <a id="E714" class="section-title" href="#E714">Note:</a>
Functions that are useful with a List:
```
:let r = call(funcname, list)	" call a function with an argument list
:if empty(list)			" check if list is empty
:let l = len(list)		" number of items in list
:let big = max(list)		" maximum value in list
:let small = min(list)		" minimum value in list
:let xs = count(list, 'x')	" count nr of times 'x' appears in list
:let i = index(list, 'x')	" index of first 'x' in list
:let lines = getline(1, 10)	" get ten text lines from buffer
:call append('$', lines)	" append text lines in buffer
:let list = split("a b c")	" create list from items in a string
:let string = join(list, ', ')	" create string from list items
:let s = string(list)		" String representation of list
:call map(list, '">> " .. v:val')  " prepend ">> " to each item

Don't forget that a combination of features can make things simple.  For
example, to add up all the numbers in a list:
```
:exe 'let sum = ' .. join(nrlist, '+')


1.4 Dictionaries ~
### <a id="Dict dict Dictionaries Dictionary" class="section-title" href="#Dict dict Dictionaries Dictionary">Note:</a>
A Dictionary is an associative array: Each entry has a key and a value.  The
entry can be located with the key.  The entries are stored without a specific
ordering.


Dictionary creation ~
### <a id="E720 E721 E722 E723" class="section-title" href="#E720 E721 E722 E723">Note:</a>
A Dictionary is created with a comma-separated list of entries in curly
braces.  Each entry has a key and a value, separated by a colon.  Each key can
only appear once.  Examples:
```
:let mydict = {1: 'one', 2: 'two', 3: 'three'}
:let emptydict = {}
### <a id="E713 E716 E717" class="section-title" href="#E713 E716 E717"><</a>
A key is always a String.  You can use a Number, it will be converted to a
String automatically.  Thus the String '4' and the number 4 will find the same
entry.  Note that the String '04' and the Number 04 are different, since the
Number will be converted to the String '4', leading zeros are dropped.  The
empty string can also be used as a key.
### <a id="literal-Dict #{}" class="section-title" href="#literal-Dict #{}">Note:</a>
To avoid having to put quotes around every key the #{} form can be used.  This
does require the key to consist only of ASCII letters, digits, '-' and '_'.
Example:
```
:let mydict = #{zero: 0, one_key: 1, two-key: 2, 333: 3}
Note that 333 here is the string "333".  Empty keys are not possible with #{}.

A value can be any expression.  Using a Dictionary for a value creates a
nested Dictionary:
```
:let nestdict = {1: {11: 'a', 12: 'b'}, 2: {21: 'c'}}

An extra comma after the last entry is ignored.


Accessing entries ~

The normal way to access an entry is by putting the key in square brackets:
```
:let val = mydict["one"]
:let mydict["four"] = 4

You can add new entries to an existing Dictionary this way, unlike Lists.

For keys that consist entirely of letters, digits and underscore the following
form can be used [expr-entry](#expr-entry):
```
:let val = mydict.one
:let mydict.four = 4

Since an entry can be any type, also a List and a Dictionary, the indexing and
key lookup can be repeated:
```
:echo dict.key[idx].key


Dictionary to List conversion ~

You may want to loop over the entries in a dictionary.  For this you need to
turn the Dictionary into a List and pass it to [:for](#:for).

Most often you want to loop over the keys, using the [keys()](#keys()) function:
```
:for key in keys(mydict)
:   echo key .. ': ' .. mydict[key]
:endfor

The List of keys is unsorted.  You may want to sort them first:
```
:for key in sort(keys(mydict))

To loop over the values use the [values()](#values()) function:
```
:for v in values(mydict)
:   echo "value: " .. v
:endfor

If you want both the key and the value use the [items()](#items()) function.  It returns
a List in which each item is a List with two items, the key and the value:
```
:for [key, value] in items(mydict)
:   echo key .. ': ' .. value
:endfor


Dictionary identity ~
### <a id="dict-identity" class="section-title" href="#dict-identity">Note:</a>
Just like Lists you need to use [copy()| and |deepcopy()](#copy()| and |deepcopy()) to make a copy of a
Dictionary.  Otherwise, assignment results in referring to the same
Dictionary:
```
:let onedict = {'a': 1, 'b': 2}
:let adict = onedict
:let adict['a'] = 11
:echo onedict['a']
11

Two Dictionaries compare equal if all the key-value pairs compare equal.  For
more info see [list-identity](#list-identity).


Dictionary modification ~
### <a id="dict-modification" class="section-title" href="#dict-modification">Note:</a>
To change an already existing entry of a Dictionary, or to add a new entry,
use [:let](#:let) this way:
```
:let dict[4] = "four"
:let dict['one'] = item

Removing an entry from a Dictionary is done with [remove()| or |:unlet](#remove()| or |:unlet).
Three ways to remove the entry with key "aaa" from dict:
```
:let i = remove(dict, 'aaa')
:unlet dict.aaa
:unlet dict['aaa']

Merging a Dictionary with another is done with [extend()](#extend()):
```
:call extend(adict, bdict)
This extends adict with all entries from bdict.  Duplicate keys cause entries
in adict to be overwritten.  An optional third argument can change this.
Note that the order of entries in a Dictionary is irrelevant, thus don't
expect ":echo adict" to show the items from bdict after the older entries in
adict.

Weeding out entries from a Dictionary can be done with [filter()](#filter()):
```
:call filter(dict, 'v:val =~ "x"')
This removes all entries from "dict" with a value not matching 'x'.
This can also be used to remove all entries:
```
call filter(dict, 0)


Dictionary function ~
### <a id="Dictionary-function self E725 E862" class="section-title" href="#Dictionary-function self E725 E862">Note:</a>
When a function is defined with the "dict" attribute it can be used in a
special way with a dictionary.  Example:
```
:function Mylen() dict
:   return len(self.data)
:endfunction
:let mydict = {'data': [0, 1, 2, 3], 'len': function("Mylen")}
:echo mydict.len()

This is like a method in object oriented programming.  The entry in the
Dictionary is a [Funcref](#Funcref).  The local variable "self" refers to the dictionary
the function was invoked from.

It is also possible to add a function without the "dict" attribute as a
Funcref to a Dictionary, but the "self" variable is not available then.

### <a id="numbered-function anonymous-function" class="section-title" href="#numbered-function anonymous-function">Note:</a>
To avoid the extra name for the function it can be defined and directly
assigned to a Dictionary in this way:
```
:let mydict = {'data': [0, 1, 2, 3]}
:function mydict.len()
:   return len(self.data)
:endfunction
:echo mydict.len()

The function will then get a number and the value of dict.len is a [Funcref](#Funcref)
that references this function.  The function can only be used through a
[Funcref|.  It will automatically be deleted when there is no |Funcref](#Funcref|.  It will automatically be deleted when there is no |Funcref)
remaining that refers to it.

It is not necessary to use the "dict" attribute for a numbered function.

If you get an error for a numbered function, you can find out what it is with
a trick.  Assuming the function is 42, the command is:
```
:function g:42


Functions for Dictionaries ~
### <a id="E715" class="section-title" href="#E715">Note:</a>
Functions that can be used with a Dictionary:
```
:if has_key(dict, 'foo')	" TRUE if dict has entry with key "foo"
:if empty(dict)			" TRUE if dict is empty
:let l = len(dict)		" number of items in dict
:let big = max(dict)		" maximum value in dict
:let small = min(dict)		" minimum value in dict
:let xs = count(dict, 'x')	" count nr of times 'x' appears in dict
:let s = string(dict)		" String representation of dict
:call map(dict, '">> " .. v:val')  " prepend ">> " to each item


1.5 Blobs ~
### <a id="blob Blob Blobs E978" class="section-title" href="#blob Blob Blobs E978">Note:</a>
A Blob is a binary object.  It can be used to read an image from a file and
send it over a channel, for example.

A Blob mostly behaves like a [List](#List) of numbers, where each number has the
value of an 8-bit byte, from 0 to 255.


Blob creation ~

A Blob can be created with a [blob-literal](#blob-literal):
```
:let b = 0zFF00ED015DAF
Dots can be inserted between bytes (pair of hex characters) for readability,
they don't change the value:
```
:let b = 0zFF00.ED01.5DAF

A blob can be read from a file with [readfile()](#readfile()) passing the {type} argument
set to "B", for example:
```
:let b = readfile('image.png', 'B')


Blob index ~
### <a id="blob-index E979" class="section-title" href="#blob-index E979">Note:</a>
A byte in the Blob can be accessed by putting the index in square brackets
after the Blob.  Indexes are zero-based, thus the first byte has index zero.
```
:let myblob = 0z00112233
:let byte = myblob[0]		" get the first byte: 0x00
:let byte = myblob[2]		" get the third byte: 0x22

A negative index is counted from the end.  Index -1 refers to the last byte in
the Blob, -2 to the last but one byte, etc.
```
:let last = myblob[-1]		" get the last byte: 0x33

To avoid an error for an invalid index use the [get()](#get()) function.  When an item
is not available it returns -1 or the default value you specify:
```
:echo get(myblob, idx)
:echo get(myblob, idx, 999)


Blob iteration ~

The [:for](#:for) loop executes commands for each byte of a Blob.  The loop variable is
set to each byte in the Blob.  Example:
```
:for byte in 0z112233
:   call Doit(byte)
:endfor
This calls Doit() with 0x11, 0x22 and 0x33.


Blob concatenation ~

Two blobs can be concatenated with the "+" operator:
```
:let longblob = myblob + 0z4455
:let myblob += 0z6677

To change a blob in-place see [blob-modification](#blob-modification) below.


Part of a blob ~

A part of the Blob can be obtained by specifying the first and last index,
separated by a colon in square brackets:
```
:let myblob = 0z00112233
:let shortblob = myblob[1:2]	" get 0z1122
:let shortblob = myblob[2:-1]	" get 0z2233

Omitting the first index is similar to zero.  Omitting the last index is
similar to -1.
```
:let endblob = myblob[2:]	" from item 2 to the end: 0z2233
:let shortblob = myblob[2:2]	" Blob with one byte: 0z22
:let otherblob = myblob[:]	" make a copy of the Blob

If the first index is beyond the last byte of the Blob or the second index is
before the first index, the result is an empty Blob.  There is no error
message.

If the second index is equal to or greater than the length of the Blob the
length minus one is used:
```
:echo myblob[2:8]		" result: 0z2233


Blob modification ~
### <a id="blob-modification" class="section-title" href="#blob-modification">Note:</a>
To change a specific byte of a blob use [:let](#:let) this way:
```
:let blob[4] = 0x44

When the index is just one beyond the end of the Blob, it is appended. Any
higher index is an error.

To change a sequence of bytes the [:] notation can be used:
```
let blob[1:3] = 0z445566
The length of the replaced bytes must be exactly the same as the value
provided. *E972*

To change part of a blob you can specify the first and last byte to be
modified.  The value must have the same number of bytes in the range:
```
:let blob[3:5] = 0z334455

You can also use the functions [add()|, |remove()| and |insert()](#add()|, |remove()| and |insert()).


Blob identity ~

Blobs can be compared for equality:
```
if blob == 0z001122
And for equal identity:
```
if blob is otherblob
### <a id="blob-identity E977" class="section-title" href="#blob-identity E977"><</a>
When variable "aa" is a Blob and you assign it to another variable "bb", both
variables refer to the same Blob.  Then the "is" operator returns true.

When making a copy using [:] or [copy()](#copy()) the values are the same, but the
identity is different:
```
:let blob = 0z112233
:let blob2 = blob
:echo blob == blob2

```
	1
```
:echo blob is blob2

```
	1
```
:let blob3 = blob[:]
:echo blob == blob3

```
	1
```
:echo blob is blob3

```
	0

Making a copy of a Blob is done with the [copy()](#copy()) function.  Using [:] also
works, as explained above.


1.6 More about variables ~
### <a id="more-variables" class="section-title" href="#more-variables">Note:</a>
If you need to know the type of a variable or expression, use the [type()](#type())
function.

When the '!' flag is included in the 'shada' option, global variables that
start with an uppercase letter, and don't contain a lowercase letter, are
stored in the shada file [shada-file](#shada-file).

When the 'sessionoptions' option contains "global", global variables that
start with an uppercase letter and contain at least one lowercase letter are
stored in the session file [session-file](#session-file).

variable name		can be stored where ~
my_var_6		not
My_Var_6		session file
MY_VAR_6		shada file


It's possible to form a variable name with curly braces, see
[curly-braces-names](#curly-braces-names).


## <a id="expression-syntax" class="section-title" href="#expression-syntax">2. Expression Syntax</a> 

Expression syntax summary, from least to most significant:

[expr1](#expr1)	expr2
expr2 ? expr1 : expr1	if-then-else

[expr2](#expr2)	expr3
expr3 || expr3 ...	logical OR

[expr3](#expr3)	expr4
expr4 && expr4 ...	logical AND

[expr4](#expr4)	expr5
expr5 == expr5		equal
expr5 != expr5		not equal
expr5 >	 expr5		greater than
expr5 >= expr5		greater than or equal
expr5 <	 expr5		smaller than
expr5 <= expr5		smaller than or equal
expr5 =~ expr5		regexp matches
expr5 !~ expr5		regexp doesn't match

expr5 ==? expr5		equal, ignoring case
expr5 ==# expr5		equal, match case
etc.			As above, append ? for ignoring case, # for
matching case

expr5 is expr5		same [List|, |Dictionary| or |Blob](#List|, |Dictionary| or |Blob) instance
expr5 isnot expr5	different [List|, |Dictionary| or |Blob](#List|, |Dictionary| or |Blob)
instance

[expr5](#expr5)	expr6
expr6 +	 expr6 ...	number addition, list or blob concatenation
expr6 -	 expr6 ...	number subtraction
expr6 .	 expr6 ...	string concatenation
expr6 .. expr6 ...	string concatenation

[expr6](#expr6)	expr7
expr7 *	 expr7 ...	number multiplication
expr7 /	 expr7 ...	number division
expr7 %	 expr7 ...	number modulo

[expr7](#expr7)	expr8
! expr7			logical NOT
- expr7			unary minus
+ expr7			unary plus

[expr8](#expr8)	expr9
expr8[expr1]		byte of a String or item of a [List](#List)
expr8[expr1 : expr1]	substring of a String or sublist of a [List](#List)
expr8.name		entry in a [Dictionary](#Dictionary)
expr8(expr1, ...)	function call with [Funcref](#Funcref) variable
expr8->name(expr1, ...)	[method](#method) call

[expr9](#expr9)	number			number constant
"string"		string constant, backslash is special
'string'		string constant, ' is doubled
[expr1, ...]		[List](#List)
{expr1: expr1, ...}	[Dictionary](#Dictionary)
#{key: expr1, ...}	[Dictionary](#Dictionary)
&option			option value
(expr1)			nested expression
variable		internal variable
va{ria}ble		internal variable with curly braces
$VAR			environment variable
@r			contents of register 'r'
function(expr1, ...)	function call
func{ti}on(expr1, ...)	function call with curly braces
{args -> expr1}		lambda expression


"..." indicates that the operations in this level can be concatenated.
Example:
```
&nu || &list && &shell == "csh"

All expressions within one level are parsed from left to right.


### <a id="expr1 ternary E109" class="section-title" href="#expr1 ternary E109">expr1</a>
-----

expr2 ? expr1 : expr1

The expression before the '?' is evaluated to a number.  If it evaluates to
[TRUE](#TRUE), the result is the value of the expression between the '?' and ':',
otherwise the result is the value of the expression after the ':'.
Example:
```
:echo lnum == 1 ? "top" : lnum

Since the first expression is an "expr2", it cannot contain another ?:.  The
other two expressions can, thus allow for recursive use of ?:.
Example:
```
:echo lnum == 1 ? "top" : lnum == 1000 ? "last" : lnum

To keep this readable, using [line-continuation](#line-continuation) is suggested:
```
:echo lnum == 1
:\	? "top"
:\	: lnum == 1000
:\		? "last"
:\		: lnum

You should always put a space before the ':', otherwise it can be mistaken for
use in a variable such as "a:1".


### <a id="expr2 expr3" class="section-title" href="#expr2 expr3">expr2 and expr3</a>
---------------

### <a id="expr-barbar" class="section-title" href="#expr-barbar">expr3 || expr3 ..	logical OR</a>
### <a id="expr-&&" class="section-title" href="#expr-&&">expr4 && expr4 ..	logical AND</a>

The "||" and "&&" operators take one argument on each side.  The arguments
are (converted to) Numbers.  The result is:

input			 output ~
n1	n2		n1 || n2	n1 && n2 ~
[FALSE|	|FALSE|		|FALSE|		|FALSE](#FALSE|	|FALSE|		|FALSE|		|FALSE)
[FALSE|	|TRUE|		|TRUE|		|FALSE](#FALSE|	|TRUE|		|TRUE|		|FALSE)
[TRUE|	|FALSE|		|TRUE|		|FALSE](#TRUE|	|FALSE|		|TRUE|		|FALSE)
[TRUE|	|TRUE|		|TRUE|		|TRUE](#TRUE|	|TRUE|		|TRUE|		|TRUE)

The operators can be concatenated, for example:
```

&nu || &list && &shell == "csh"

Note that "&&" takes precedence over "||", so this has the meaning of:
```

&nu || (&list && &shell == "csh")

Once the result is known, the expression "short-circuits", that is, further
arguments are not evaluated.  This is like what happens in C.  For example:
```

let a = 1
echo a || b

This is valid even if there is no variable called "b" because "a" is [TRUE](#TRUE),
so the result must be [TRUE](#TRUE).  Similarly below:
```

echo exists("b") && b == "yes"

This is valid whether "b" has been defined or not.  The second clause will
only be evaluated if "b" has been defined.


### <a id="expr4" class="section-title" href="#expr4">expr4</a>
-----

expr5 {cmp} expr5

Compare two expr5 expressions, resulting in a 0 if it evaluates to false, or 1
if it evaluates to true.

### <a id="expr-==" class="section-title" href="#expr-==">Note:</a>
### <a id="expr-<" class="section-title" href="#expr-<">Note:</a>
### <a id="expr-==# expr-!=# expr->#" class="section-title" href="#expr-==# expr-!=# expr->#">Note:</a>
### <a id="expr-<#" class="section-title" href="#expr-<#">Note:</a>
### <a id="expr-==? expr-!=? expr->?" class="section-title" href="#expr-==? expr-!=? expr->?">Note:</a>
### <a id="expr-<?" class="section-title" href="#expr-<?">Note:</a>
### <a id="expr-is expr-isnot expr-is# expr-isnot#" class="section-title" href="#expr-is expr-isnot expr-is# expr-isnot#">Note:</a>
### <a id="expr-is? expr-isnot?" class="section-title" href="#expr-is? expr-isnot?">Note:</a>
use 'ignorecase'    match case	   ignore case ~
equal			==		==#		==?
not equal		!=		!=#		!=?
greater than		>		>#		>?
greater than or equal	>=		>=#		>=?
smaller than		<		<#		<?
smaller than or equal	<=		<=#		<=?
regexp matches		=~		=~#		=~?
regexp doesn't match	!~		!~#		!~?
same instance		is		is#		is?
different instance	isnot		isnot#		isnot?

Examples:
"abc" ==# "Abc"	  evaluates to 0
"abc" ==? "Abc"	  evaluates to 1
"abc" == "Abc"	  evaluates to 1 if 'ignorecase' is set, 0 otherwise

### <a id="E691 E692" class="section-title" href="#E691 E692">Note:</a>
A [List| can only be compared with a |List](#List| can only be compared with a |List) and only "equal", "not equal",
"is" and "isnot" can be used.  This compares the values of the list,
recursively.  Ignoring case means case is ignored when comparing item values.

### <a id="E735 E736" class="section-title" href="#E735 E736">Note:</a>
A [Dictionary| can only be compared with a |Dictionary](#Dictionary| can only be compared with a |Dictionary) and only "equal", "not
equal", "is" and "isnot" can be used.  This compares the key/values of the
[Dictionary](#Dictionary) recursively.  Ignoring case means case is ignored when comparing
item values.

### <a id="E694" class="section-title" href="#E694">Note:</a>
A [Funcref| can only be compared with a |Funcref](#Funcref| can only be compared with a |Funcref) and only "equal", "not
equal", "is" and "isnot" can be used.  Case is never ignored.  Whether
arguments or a Dictionary are bound (with a partial) matters.  The
Dictionaries must also be equal (or the same, in case of "is") and the
arguments must be equal (or the same).

To compare Funcrefs to see if they refer to the same function, ignoring bound
Dictionary and arguments, use [get()](#get()) to get the function name:
```
if get(Part1, 'name') == get(Part2, 'name')
" Part1 and Part2 refer to the same function

Using "is" or "isnot" with a [List|, |Dictionary| or |Blob](#List|, |Dictionary| or |Blob) checks whether
the expressions are referring to the same [List|, |Dictionary| or |Blob](#List|, |Dictionary| or |Blob)
instance.  A copy of a [List| is different from the original |List](#List| is different from the original |List).  When
using "is" without a [List|, |Dictionary| or |Blob](#List|, |Dictionary| or |Blob), it is equivalent to
using "equal", using "isnot" is equivalent to using "not equal".  Except that
a different type means the values are different:
```
echo 4 == '4'
1
echo 4 is '4'
0
echo 0 is []
0
"is#"/"isnot#" and "is?"/"isnot?" can be used to match and ignore case.

When comparing a String with a Number, the String is converted to a Number,
and the comparison is done on Numbers.  This means that:
```
echo 0 == 'x'
1
because 'x' converted to a Number is zero.  However:
```
echo [0] == ['x']
0
Inside a List or Dictionary this conversion is not used.

When comparing two Strings, this is done with strcmp() or stricmp().  This
results in the mathematical difference (comparing byte values), not
necessarily the alphabetical difference in the local language.

When using the operators with a trailing '#', or the short version and
'ignorecase' is off, the comparing is done with strcmp(): case matters.

When using the operators with a trailing '?', or the short version and
'ignorecase' is set, the comparing is done with stricmp(): case is ignored.

'smartcase' is not used.

The "=~" and "!~" operators match the lefthand argument with the righthand
argument, which is used as a pattern.  See [pattern](#pattern) for what a pattern is.
This matching is always done like 'magic' was set and 'cpoptions' is empty, no
matter what the actual value of 'magic' or 'cpoptions' is.  This makes scripts
portable.  To avoid backslashes in the regexp pattern to be doubled, use a
single-quote string, see [literal-string](#literal-string).
Since a string is considered to be a single line, a multi-line pattern
(containing \n, backslash-n) will not match.  However, a literal NL character
can be matched like an ordinary character.  Examples:
"foo\nbar" =~ "\n"	evaluates to 1
"foo\nbar" =~ "\\n"	evaluates to 0


### <a id="expr5 expr6" class="section-title" href="#expr5 expr6">expr5 and expr6</a>
---------------
### <a id="Number addition, [List| or |Blob| concatenation	expr-+" class="section-title" href="#Number addition, |List| or |Blob](#List| or |Blob| concatenation	expr-+" class="section-title" href="#Number addition, |List| or |Blob) concatenation	expr-+">expr6 + expr6</a>
expr6 - expr6   Number subtraction				*expr--*
expr6 . expr6   String concatenation				*expr-.*
expr6 .. expr6  String concatenation				*expr-..*

For [Lists](#Lists) only "+" is possible and then both expr6 must be a list.  The
result is a new list with the two lists Concatenated.

For String concatenation ".." is preferred, since "." is ambiguous, it is also
used for [Dict](#Dict) member access and floating point numbers.

expr7 * expr7  Number multiplication				*expr-star*
expr7 / expr7  Number division					*expr-/*
expr7 % expr7  Number modulo					*expr-%*

For all, except "." and "..", Strings are converted to Numbers.
For bitwise operators see [and()|, |or()| and |xor()](#and()|, |or()| and |xor()).

Note the difference between "+" and ".":
"123" + "456" = 579
"123" . "456" = "123456"

Since '.' has the same precedence as '+' and '-', you need to read:
```
1 . 90 + 90.0
As:
```
(1 . 90) + 90.0
That works, since the String "190" is automatically converted to the Number
190, which can be added to the Float 90.0.  However:
```
1 . 90 * 90.0
Should be read as:
```
1 . (90 * 90.0)
Since '.' has lower precedence than '*'.  This does NOT work, since this
attempts to concatenate a Float and a String.

When dividing a Number by zero the result depends on the value:
0 / 0  = -0x80000000	(like NaN for Float)
>0 / 0  =  0x7fffffff	(like positive infinity)

```
0 / 0  = -0x7fffffff	(like negative infinity)
(before Vim 7.2 it was always 0x7fffffff)

When 64-bit Number support is enabled:
0 / 0  = -0x8000000000000000	(like NaN for Float)
>0 / 0  =  0x7fffffffffffffff	(like positive infinity)

```
0 / 0  = -0x7fffffffffffffff	(like negative infinity)

When the righthand side of '%' is zero, the result is 0.

None of these work for [Funcref](#Funcref)s.

. and % do not work for Float. *E804*


### <a id="expr7" class="section-title" href="#expr7">expr7</a>
-----
! expr7			logical NOT		*expr-!*
- expr7			unary minus		*expr-unary--*
+ expr7			unary plus		*expr-unary-+*

For '!' [TRUE| becomes |FALSE|, |FALSE| becomes |TRUE](#TRUE| becomes |FALSE|, |FALSE| becomes |TRUE) (one).
For '-' the sign of the number is changed.
For '+' the number is unchanged.  Note: "++" has no effect.

A String will be converted to a Number first.

These three can be repeated and mixed.  Examples:
!-1	    == 0
!!8	    == 1
--9	    == 9


### <a id="expr8" class="section-title" href="#expr8">expr8</a>
-----
This expression is either [expr9](#expr9) or a sequence of the alternatives below,
in any order.  E.g., these are all possible:
expr8[expr1].name
expr8.name[expr1]
expr8(expr1, ...)[expr1].name
expr8->(expr1, ...)[expr1]
Evaluation is always from left to right.


### <a id="item of String or [List|	expr-[] E111" class="section-title" href="#item of String or |List](#List|	expr-[] E111" class="section-title" href="#item of String or |List)	expr-[] E111">expr8[expr1]</a>
### <a id="subscript" class="section-title" href="#subscript">Note:</a>
In legacy Vim script:
If expr8 is a Number or String this results in a String that contains the
expr1'th single byte from expr8.  expr8 is used as a String (a number is
automatically converted to a String), expr1 as a Number.  This doesn't
recognize multibyte encodings, see `byteidx()` for an alternative, or use
`split()` to turn the string into a list of characters.  Example, to get the
byte under the cursor:
```
:let c = getline(".")[col(".") - 1]

Index zero gives the first byte.  This is like it works in C.  Careful:
text column numbers start with one!  Example, to get the byte under the
cursor:
```
:let c = getline(".")[col(".") - 1]

If the length of the String is less than the index, the result is an empty
String.  A negative index always results in an empty string (reason: backward
compatibility).  Use [-1:] to get the last byte.

If expr8 is a [List| then it results the item at index expr1.  See |list-index](#List| then it results the item at index expr1.  See |list-index)
for possible index values.  If the index is out of range this results in an
error.  Example:
```
:let item = mylist[-1]		" get last item

Generally, if a [List](#List) index is equal to or higher than the length of the
[List|, or more negative than the length of the |List](#List|, or more negative than the length of the |List), this results in an
error.


### <a id="expr-[:] substring" class="section-title" href="#expr-[:] substring">expr8[expr1a : expr1b]	substring or [sublist](#sublist)</a>

If expr8 is a String this results in the substring with the bytes or
characters from expr1a to and including expr1b.  expr8 is used as a String,
expr1a and expr1b are used as a Number.

In legacy Vim script the indexes are byte indexes.  This doesn't recognize
multibyte encodings, see [byteidx()](#byteidx()) for computing the indexes.  If expr8 is
a Number it is first converted to a String.

If expr1a is omitted zero is used.  If expr1b is omitted the length of the
string minus one is used.

A negative number can be used to measure from the end of the string.  -1 is
the last character, -2 the last but one, etc.

If an index goes out of range for the string characters are omitted.  If
expr1b is smaller than expr1a the result is an empty string.

Examples:
```
:let c = name[-1:]		" last byte of a string
:let c = name[0:-1]		" the whole string
:let c = name[-2:-2]		" last but one byte of a string
:let s = line(".")[4:]		" from the fifth byte to the end
:let s = s[:-3]			" remove last two bytes

```

### <a id="slice" class="section-title" href="#slice">Note:</a>
If expr8 is a [List| this results in a new |List](#List| this results in a new |List) with the items indicated by
the indexes expr1a and expr1b.  This works like with a String, as explained
just above. Also see [sublist](#sublist) below.  Examples:
```
:let l = mylist[:3]		" first four items
:let l = mylist[4:4]		" List with one item
:let l = mylist[:]		" shallow copy of a List

If expr8 is a [Blob| this results in a new |Blob](#Blob| this results in a new |Blob) with the bytes in the
indexes expr1a and expr1b, inclusive.  Examples:
```
:let b = 0zDEADBEEF
:let bs = b[1:2]		" 0zADBE
:let bs = b[]			" copy of 0zDEADBEEF

Using expr8[expr1] or expr8[expr1a : expr1b] on a [Funcref](#Funcref) results in an
error.

Watch out for confusion between a namespace and a variable followed by a colon
for a sublist:
```
mylist[n:]     " uses variable n
mylist[s:]     " uses namespace s:, error!


expr8.name		entry in a [Dictionary](#Dictionary)		*expr-entry*

If expr8 is a [Dictionary](#Dictionary) and it is followed by a dot, then the following
name will be used as a key in the [Dictionary](#Dictionary).  This is just like:
expr8[name].

The name must consist of alphanumeric characters, just like a variable name,
but it may start with a number.  Curly braces cannot be used.

There must not be white space before or after the dot.

Examples:
```
:let dict = {"one": 1, 2: "two"}
:echo dict.one		" shows "1"
:echo dict.2		" shows "two"
:echo dict .2		" error because of space before the dot

Note that the dot is also used for String concatenation.  To avoid confusion
always put spaces around the dot for String concatenation.


expr8(expr1, ...)	[Funcref](#Funcref) function call

When expr8 is a [Funcref](#Funcref) type variable, invoke the function it refers to.


### <a id="method ->" class="section-title" href="#method ->">expr8->name([args])	method call</a>
expr8->{lambda}([args])

### <a id="E260 E276" class="section-title" href="#E260 E276">Note:</a>
For methods that are also available as global functions this is the same as:
```
name(expr8 [, args])
There can also be methods specifically for the type of "expr8".

This allows for chaining, passing the value that one method returns to the
next method:
```
mylist->filter(filterexpr)->map(mapexpr)->sort()->join()

```

Example of using a lambda:
```
GetPercentage()->{x -> x * 100}()->printf('%d%%')

```

When using -> the [expr7](#expr7) operators will be applied first, thus:
```
-1.234->string()
Is equivalent to:
```
(-1.234)->string()
And NOT:
```
-(1.234->string())

```

### <a id="E274" class="section-title" href="#E274">Note:</a>
"->name(" must not contain white space.  There can be white space before the
"->" and after the "(", thus you can split the lines like this:
```
mylist
\ ->filter(filterexpr)
\ ->map(mapexpr)
\ ->sort()
\ ->join()

When using the lambda form there must be no white space between the } and the
(.


### <a id="expr9" class="section-title" href="#expr9">Note:</a>
number
------
number			number constant			*expr-number*

### <a id="0x hex-number 0o octal-number binary-number" class="section-title" href="#0x hex-number 0o octal-number binary-number">Note:</a>
Decimal, Hexadecimal (starting with 0x or 0X), Binary (starting with 0b or 0B)
and Octal (starting with 0, 0o or 0O).

### <a id="floating-point-format" class="section-title" href="#floating-point-format">Note:</a>
Floating point numbers can be written in two forms:

[-+]{N}.{M}
[-+]{N}.{M}[eE][-+]{exp}

{N} and {M} are numbers.  Both {N} and {M} must be present and can only
contain digits.
[-+] means there is an optional plus or minus sign.
{exp} is the exponent, power of 10.
Only a decimal point is accepted, not a comma.  No matter what the current
locale is.

Examples:
123.456
+0.0001
55.0
-0.123
1.234e03
1.0E-6
-3.1416e+88

These are INVALID:
3.		empty {M}
1e40		missing .{M}

Rationale:
Before floating point was introduced, the text "123.456" was interpreted as
the two numbers "123" and "456", both converted to a string and concatenated,
resulting in the string "123456".  Since this was considered pointless, and we
could not find it intentionally being used in Vim scripts, this backwards
incompatibility was accepted in favor of being able to use the normal notation
for floating point numbers.

### <a id="float-pi float-e" class="section-title" href="#float-pi float-e">Note:</a>
A few useful values to copy&paste:
```
:let pi = 3.14159265359
:let e  = 2.71828182846
Or, if you don't want to write them in as floating-point literals, you can
also use functions, like the following:
```
:let pi = acos(-1.0)
:let e  = exp(1.0)

```

### <a id="floating-point-precision" class="section-title" href="#floating-point-precision">Note:</a>
The precision and range of floating points numbers depends on what "double"
means in the library Vim was compiled with.  There is no way to change this at
runtime.

The default for displaying a [Float](#Float) is to use 6 decimal places, like using
printf("%g", f).  You can select something else when using the [printf()](#printf())
function.  Example:
```
:echo printf('%.15e', atan(1))

```
	7.853981633974483e-01



### <a id="string String expr-string E114" class="section-title" href="#string String expr-string E114">string</a>
------
"string"		string constant		*expr-quote*

Note that double quotes are used.

A string constant accepts these special characters:
\...	three-digit octal number (e.g., "\316")
\..	two-digit octal number (must be followed by non-digit)
\.	one-digit octal number (must be followed by non-digit)
\x..	byte specified with two hex numbers (e.g., "\x1f")
\x.	byte specified with one hex number (must be followed by non-hex char)
\X..	same as \x..
\X.	same as \x.
\u....	character specified with up to 4 hex numbers, stored as UTF-8
(e.g., "\u02a4")
\U....	same as \u but allows up to 8 hex numbers.
\b	backspace <BS>
\e	escape <Esc>
\f	formfeed 0x0C
\n	newline <NL>
\r	return <CR>
\t	tab <Tab>
\\	backslash
\"	double quote
\<xxx>	Special key named "xxx".  e.g. "\<C-W>" for CTRL-W.  This is for use
in mappings, the 0x80 byte is escaped.
To use the double quote character it must be escaped: "<M-\">".
Don't use <Char-xxxx> to get a UTF-8 character, use \uxxxx as
mentioned above.
\<*xxx>	Like \<xxx> but prepends a modifier instead of including it in the
### <a id="E.g. "\<C-w>" is one character 0x17 while "\<C-w>" is four" class="section-title" href="#E.g. "\<C-w>" is one character 0x17 while "\<C-w>" is four">	character.</a>
bytes: 3 for the CTRL modifier and then character "W".

Note that "\xff" is stored as the byte 255, which may be invalid in some
encodings.  Use "\u00ff" to store character 255 correctly as UTF-8.

Note that "\000" and "\x00" force the end of the string.


### <a id="blob-literal E973" class="section-title" href="#blob-literal E973">blob-literal</a>
------------

Hexadecimal starting with 0z or 0Z, with an arbitrary number of bytes.
The sequence must be an even number of hex characters.  Example:
```
:let b = 0zFF00ED015DAF


### <a id="literal-string E115" class="section-title" href="#literal-string E115">literal-string</a>
---------------
'string'		string constant			*expr-'*

Note that single quotes are used.

This string is taken as it is.  No backslashes are removed or have a special
meaning.  The only exception is that two quotes stand for one quote.

Single quoted strings are useful for patterns, so that backslashes do not need
to be doubled.  These two commands are equivalent:
```
if a =~ "\\s*"
if a =~ '\s*'


### <a id="expr-option E112 E113" class="section-title" href="#expr-option E112 E113">option</a>
------
&option			option value, local value if possible
&g:option		global option value
&l:option		local option value

Examples:
```
echo "tabstop is " .. &tabstop
if &expandtab

Any option name can be used here.  See [options](#options).  When using the local value
and there is no buffer-local or window-local value, the global value is used
anyway.


### <a id="expr-register @r" class="section-title" href="#expr-register @r">register</a>
--------
@r			contents of register 'r'

The result is the contents of the named register, as a single string.
Newlines are inserted where required.  To get the contents of the unnamed
register use @" or @@.  See [registers](#registers) for an explanation of the available
registers.

When using the '=' register you get the expression itself, not what it
evaluates to.  Use [eval()](#eval()) to evaluate it.


### <a id="expr-nesting E110" class="section-title" href="#expr-nesting E110">nesting</a>
-------
(expr1)			nested expression


### <a id="expr-env" class="section-title" href="#expr-env">environment variable</a>
--------------------
$VAR			environment variable

The String value of any environment variable.  When it is not defined, the
result is an empty string.

The functions `getenv()` and `setenv()` can also be used and work for
environment variables with non-alphanumeric names.
The function `environ()` can be used to get a Dict with all environment
variables.


### <a id="expr-env-expand" class="section-title" href="#expr-env-expand">Note:</a>
Note that there is a difference between using $VAR directly and using
expand("$VAR").  Using it directly will only expand environment variables that
are known inside the current Vim session.  Using expand() will first try using
the environment variables known inside the current Vim session.  If that
fails, a shell will be used to expand the variable.  This can be slow, but it
does expand all variables that the shell knows about.  Example:
```
:echo $shell
:echo expand("$shell")
The first one probably doesn't echo anything, the second echoes the $shell
variable (if your shell supports it).


### <a id="expr-variable" class="section-title" href="#expr-variable">internal variable</a>
-----------------
variable		internal variable
See below [internal-variables](#internal-variables).


### <a id="expr-function E116 E118 E119 E120" class="section-title" href="#expr-function E116 E118 E119 E120">function call</a>
-------------
function(expr1, ...)	function call
See below [functions](#functions).


### <a id="expr-lambda lambda" class="section-title" href="#expr-lambda lambda">lambda expression</a>
-----------------
{args -> expr1}		lambda expression

A lambda expression creates a new unnamed function which returns the result of
evaluating [expr1|.  Lambda expressions differ from |user-function](#expr1|.  Lambda expressions differ from |user-function)s in
the following ways:

1. The body of the lambda expression is an [expr1| and not a sequence of |Ex](#expr1| and not a sequence of |Ex)
commands.
2. The prefix "a:" should not be used for arguments.  E.g.:
```
:let F = {arg1, arg2 -> arg1 - arg2}
:echo F(5, 2)

```
	3

The arguments are optional.  Example:
```
:let F = {-> 'error function'}
:echo F('ignored')

```
	error function
### <a id="closure" class="section-title" href="#closure">Note:</a>
Lambda expressions can access outer scope variables and arguments.  This is
often called a closure.  Example where "i" and "a:arg" are used in a lambda
while they already exist in the function scope.  They remain valid even after
the function returns:
```
:function Foo(arg)
:  let i = 3
:  return {x -> x + i - a:arg}
:endfunction
:let Bar = Foo(4)
:echo Bar(6)

```
	5
Note that the variables must exist in the outer scope before the lambda is
defined for this to work.  See also [:func-closure](#:func-closure).

Lambda and closure support can be checked with:
```
if has('lambda')

Examples for using a lambda expression with [sort()|, |map()| and |filter()](#sort()|, |map()| and |filter()):
```
:echo map([1, 2, 3], {idx, val -> val + 1})

```
	[2, 3, 4]
```
:echo sort([3,7,2,1,4], {a, b -> a - b})

```
	[1, 2, 3, 4, 7]

The lambda expression is also useful for jobs and timers:
```
:let timer = timer_start(500,
\ {-> execute("echo 'Handler called'", "")},
\ {'repeat': 3})

```
	Handler called
Handler called
Handler called

Note that it is possible to cause memory to be used and not freed if the
closure is referenced by the context it depends on:
```
function Function()
let x = 0
let F = {-> x}
endfunction
The closure uses "x" from the function scope, and "F" in that same scope
refers to the closure.  This cycle results in the memory not being freed.
Recommendation: don't do this.

Notice how execute() is used to execute an Ex command.  That's ugly though.


Lambda expressions have internal names like '<lambda>42'.  If you get an error
for a lambda expression, you can find what it is with the following command:
```
:function <lambda>42
See also: [numbered-function](#numbered-function)


## <a id="internal-variables E461" class="section-title" href="#internal-variables E461">3. Internal Variable</a> 

An internal variable name can be made up of letters, digits and '_'.  But it
cannot start with a digit.  It's also possible to use curly braces, see
[curly-braces-names](#curly-braces-names).

An internal variable is created with the ":let" command [:let](#:let).
An internal variable is explicitly destroyed with the ":unlet" command
[:unlet](#:unlet).
Using a name that is not an internal variable or refers to a variable that has
been destroyed results in an error.

### <a id="variable-scope" class="section-title" href="#variable-scope">Note:</a>
There are several name spaces for variables.  Which one is to be used is
specified by what is prepended:

(nothing) In a function: local to a function; otherwise: global
[buffer-variable](#buffer-variable)    b:	  Local to the current buffer.
[window-variable](#window-variable)    w:	  Local to the current window.
[tabpage-variable](#tabpage-variable)   t:	  Local to the current tab page.
[global-variable](#global-variable)    g:	  Global.
[local-variable](#local-variable)     l:	  Local to a function.
[script-variable|    s:	  Local to a |:source](#script-variable|    s:	  Local to a |:source)'ed Vim script.
[function-argument](#function-argument)  a:	  Function argument (only inside a function).
[vim-variable](#vim-variable)       v:	  Global, predefined by Vim.

The scope name by itself can be used as a [Dictionary](#Dictionary).  For example, to
delete all script-local variables:
```
:for k in keys(s:)
:    unlet s:[k]
:endfor

```

### <a id="buffer-variable b:var b:" class="section-title" href="#buffer-variable b:var b:">Note:</a>
A variable name that is preceded with "b:" is local to the current buffer.
Thus you can have several "b:foo" variables, one for each buffer.
This kind of variable is deleted when the buffer is wiped out or deleted with
[:bdelete](#:bdelete).

One local buffer variable is predefined:
### <a id="b:changedtick changetick" class="section-title" href="#b:changedtick changetick">Note:</a>
b:changedtick	The total number of changes to the current buffer.  It is
incremented for each change.  An undo command is also a change
in this case.  Resetting 'modified' when writing the buffer is
also counted.
This can be used to perform an action only when the buffer has
changed.  Example:
```
:if my_changedtick != b:changedtick
:	let my_changedtick = b:changedtick
:	call My_Update()
:endif

```
		You cannot change or delete the b:changedtick variable.

### <a id="window-variable w:var w:" class="section-title" href="#window-variable w:var w:">Note:</a>
A variable name that is preceded with "w:" is local to the current window.  It
is deleted when the window is closed.

### <a id="tabpage-variable t:var t:" class="section-title" href="#tabpage-variable t:var t:">Note:</a>
A variable name that is preceded with "t:" is local to the current tab page,
It is deleted when the tab page is closed.

### <a id="global-variable g:var g:" class="section-title" href="#global-variable g:var g:">Note:</a>
Inside functions global variables are accessed with "g:".  Omitting this will
access a variable local to a function.  But "g:" can also be used in any other
place if you like.

### <a id="local-variable l:var l:" class="section-title" href="#local-variable l:var l:">Note:</a>
Inside functions local variables are accessed without prepending anything.
But you can also prepend "l:" if you like.  However, without prepending "l:"
you may run into reserved variable names.  For example "count".  By itself it
refers to "v:count".  Using "l:count" you can have a local variable with the
same name.

### <a id="script-variable s:var" class="section-title" href="#script-variable s:var">Note:</a>
In a Vim script variables starting with "s:" can be used.  They cannot be
accessed from outside of the scripts, thus are local to the script.

They can be used in:
- commands executed while the script is sourced
- functions defined in the script
- autocommands defined in the script
- functions and autocommands defined in functions and autocommands which were
defined in the script (recursively)
- user defined commands defined in the script
Thus not in:
- other scripts sourced from this one
- mappings
- menus
- etc.

Script variables can be used to avoid conflicts with global variable names.
Take this example:
```

let s:counter = 0
function MyCounter()
let s:counter = s:counter + 1
echo s:counter
endfunction
command Tick call MyCounter()

You can now invoke "Tick" from any script, and the "s:counter" variable in
that script will not be changed, only the "s:counter" in the script where
"Tick" was defined is used.

Another example that does the same:
```

let s:counter = 0
command Tick let s:counter = s:counter + 1 | echo s:counter

When calling a function and invoking a user-defined command, the context for
script variables is set to the script where the function or command was
defined.

The script variables are also available when a function is defined inside a
function that is defined in a script.  Example:
```

let s:counter = 0
function StartCounting(incr)
if a:incr
function MyCounter()
let s:counter = s:counter + 1
endfunction
else
function MyCounter()
let s:counter = s:counter - 1
endfunction
endif
endfunction

This defines the MyCounter() function either for counting up or counting down
when calling StartCounting().  It doesn't matter from where StartCounting() is
called, the s:counter variable will be accessible in MyCounter().

When the same script is sourced again it will use the same script variables.
They will remain valid as long as Vim is running.  This can be used to
maintain a counter:
```

if !exists("s:counter")
let s:counter = 1
echo "script executed for the first time"
else
let s:counter = s:counter + 1
echo "script executed " .. s:counter .. " times now"
endif

Note that this means that filetype plugins don't get a different set of script
variables for each buffer.  Use local buffer variables instead [b:var](#b:var).


### <a id="vim-variable v:var v:" class="section-title" href="#vim-variable v:var v:">Predefined Vim Variables</a>
### <a id="E963" class="section-title" href="#E963">Note:</a>
Some variables can be set by the user, but the type cannot be changed.

### <a id="v:argv argv-variable" class="section-title" href="#v:argv argv-variable">Note:</a>
v:argv		The command line arguments Vim was invoked with.  This is a
list of strings.  The first item is the Vim command.
See [v:progpath](#v:progpath) for the command with full path.

### <a id="v:beval_col beval_col-variable" class="section-title" href="#v:beval_col beval_col-variable">Note:</a>
v:beval_col	The number of the column, over which the mouse pointer is.
This is the byte index in the [v:beval_lnum](#v:beval_lnum) line.
Only valid while evaluating the 'balloonexpr' option.

### <a id="v:beval_bufnr beval_bufnr-variable" class="section-title" href="#v:beval_bufnr beval_bufnr-variable">Note:</a>
v:beval_bufnr	The number of the buffer, over which the mouse pointer is. Only
valid while evaluating the 'balloonexpr' option.

### <a id="v:beval_lnum beval_lnum-variable" class="section-title" href="#v:beval_lnum beval_lnum-variable">Note:</a>
v:beval_lnum	The number of the line, over which the mouse pointer is. Only
valid while evaluating the 'balloonexpr' option.

### <a id="v:beval_text beval_text-variable" class="section-title" href="#v:beval_text beval_text-variable">Note:</a>
v:beval_text	The text under or after the mouse pointer.  Usually a word as
it is useful for debugging a C program.  'iskeyword' applies,
but a dot and "->" before the position is included.  When on a
']' the text before it is used, including the matching '[' and
word before it.  When on a Visual area within one line the
highlighted text is used.  Also see [<cexpr>](#<cexpr>).
Only valid while evaluating the 'balloonexpr' option.

### <a id="v:beval_winnr beval_winnr-variable" class="section-title" href="#v:beval_winnr beval_winnr-variable">Note:</a>
v:beval_winnr	The number of the window, over which the mouse pointer is. Only
valid while evaluating the 'balloonexpr' option.  The first
window has number zero (unlike most other places where a
window gets a number).

### <a id="v:beval_winid beval_winid-variable" class="section-title" href="#v:beval_winid beval_winid-variable">Note:</a>
v:beval_winid	The [window-ID](#window-ID) of the window, over which the mouse pointer
is.  Otherwise like v:beval_winnr.

### <a id="v:char char-variable" class="section-title" href="#v:char char-variable">Note:</a>
v:char		Argument for evaluating 'formatexpr' and used for the typed
character when using <expr> in an abbreviation [:map-<expr>](#:map-<expr>).
It is also used by the [InsertCharPre| and |InsertEnter](#InsertCharPre| and |InsertEnter) events.

### <a id="v:charconvert_from charconvert_from-variable" class="section-title" href="#v:charconvert_from charconvert_from-variable">Note:</a>
v:charconvert_from
The name of the character encoding of a file to be converted.
Only valid while evaluating the 'charconvert' option.

### <a id="v:charconvert_to charconvert_to-variable" class="section-title" href="#v:charconvert_to charconvert_to-variable">Note:</a>
v:charconvert_to
The name of the character encoding of a file after conversion.
Only valid while evaluating the 'charconvert' option.

### <a id="v:cmdarg cmdarg-variable" class="section-title" href="#v:cmdarg cmdarg-variable">Note:</a>
v:cmdarg	This variable is used for two purposes:
1. The extra arguments given to a file read/write command.
Currently these are "++enc=" and "++ff=".  This variable is
set before an autocommand event for a file read/write
command is triggered.  There is a leading space to make it
possible to append this variable directly after the
read/write command.  Note: The "+cmd" argument isn't
included here, because it will be executed anyway.
2. When printing a PostScript file with ":hardcopy" this is
the argument for the ":hardcopy" command.  This can be used
in 'printexpr'.

### <a id="v:collate collate-variable" class="section-title" href="#v:collate collate-variable">Note:</a>
v:collate	The current locale setting for collation order of the runtime
environment.  This allows Vim scripts to be aware of the
current locale encoding.  Technical: it's the value of
LC_COLLATE.  When not using a locale the value is "C".
This variable can not be set directly, use the [:language](#:language)
command.
See [multi-lang](#multi-lang).

### <a id="v:cmdbang cmdbang-variable" class="section-title" href="#v:cmdbang cmdbang-variable">Note:</a>
v:cmdbang	Set like v:cmdarg for a file read/write command.  When a "!"
was used the value is 1, otherwise it is 0.  Note that this
can only be used in autocommands.  For user commands [<bang>](#<bang>)
can be used.

### <a id="v:completed_item completed_item-variable" class="section-title" href="#v:completed_item completed_item-variable">Note:</a>
v:completed_item
Dictionary containing the most recent [complete-items](#complete-items) after
[CompleteDone](#CompleteDone).  Empty if the completion failed, or after
leaving and re-entering insert mode.
Note: Plugins can modify the value to emulate the builtin
[CompleteDone](#CompleteDone) event behavior.

### <a id="v:count count-variable" class="section-title" href="#v:count count-variable">Note:</a>
v:count		The count given for the last Normal mode command.  Can be used
to get the count before a mapping.  Read-only.  Example:
```
:map _x :<C-U>echo "the count is " .. v:count<CR>

```
		Note: The <C-U> is required to remove the line range that you
get when typing ':' after a count.
When there are two counts, as in "3d2w", they are multiplied,
just like what happens in the command, "d6w" for the example.
Also used for evaluating the 'formatexpr' option.

### <a id="v:count1 count1-variable" class="section-title" href="#v:count1 count1-variable">Note:</a>
v:count1	Just like "v:count", but defaults to one when no count is
used.

### <a id="v:ctype ctype-variable" class="section-title" href="#v:ctype ctype-variable">Note:</a>
v:ctype		The current locale setting for characters of the runtime
environment.  This allows Vim scripts to be aware of the
current locale encoding.  Technical: it's the value of
LC_CTYPE.  When not using a locale the value is "C".
This variable can not be set directly, use the [:language](#:language)
command.
See [multi-lang](#multi-lang).

### <a id="v:dying dying-variable" class="section-title" href="#v:dying dying-variable">Note:</a>
v:dying		Normally zero.  When a deadly signal is caught it's set to
one.  When multiple signals are caught the number increases.
Can be used in an autocommand to check if Vim didn't
terminate normally. {only works on Unix}
Example:
```
:au VimLeave * if v:dying [ echo "\nAAAAaaaarrrggghhhh!!!\n" ](# echo "\nAAAAaaaarrrggghhhh!!!\n" ) endif

```
		Note: if another deadly signal is caught when v:dying is one,
VimLeave autocommands will not be executed.

### <a id="v:exiting exiting-variable" class="section-title" href="#v:exiting exiting-variable">Note:</a>
v:exiting	Exit code, or [v:null| before invoking the |VimLeavePre](#v:null| before invoking the |VimLeavePre)
and [VimLeave| autocmds.  See |:q|, |:x| and |:cquit](#VimLeave| autocmds.  See |:q|, |:x| and |:cquit).
Example:
```
### <a id=":au VimLeave  echo "Exit value is " .. v:exiting" class="section-title" href="#:au VimLeave  echo "Exit value is " .. v:exiting">Note:</a>

### <a id="v:echospace echospace-variable" class="section-title" href="#v:echospace echospace-variable">Note:</a>
v:echospace	Number of screen cells that can be used for an `:echo` message
in the last screen line before causing the [hit-enter-prompt](#hit-enter-prompt).
Depends on 'showcmd', 'ruler' and 'columns'.  You need to
check 'cmdheight' for whether there are full-width lines
available above the last line.

### <a id="v:errmsg errmsg-variable" class="section-title" href="#v:errmsg errmsg-variable">Note:</a>
v:errmsg	Last given error message.
Modifiable (can be set).
Example:
```
:let v:errmsg = ""
:silent! next
:if v:errmsg != ""
:  ... handle error

```

### <a id="v:errors errors-variable assert-return" class="section-title" href="#v:errors errors-variable assert-return">Note:</a>
v:errors	Errors found by assert functions, such as [assert_true()](#assert_true()).
This is a list of strings.
The assert functions append an item when an assert fails.
The return value indicates this: a one is returned if an item
was added to v:errors, otherwise zero is returned.
To remove old results make it empty:
```
:let v:errors = []

```
		If v:errors is set to anything but a list it is made an empty
list by the assert function.

### <a id="v:event event-variable" class="section-title" href="#v:event event-variable">Note:</a>
v:event		Dictionary of event data for the current [autocommand](#autocommand).  Valid
only during the event lifetime; storing or passing v:event is
invalid!  Copy it instead:
```
### <a id="au TextYankPost  let g:foo = deepcopy(v:event)" class="section-title" href="#au TextYankPost  let g:foo = deepcopy(v:event)">Note:</a>

```
		Keys vary by event; see the documentation for the specific
event, e.g. [DirChanged| or |TextYankPost](#DirChanged| or |TextYankPost).
KEY		DESCRIPTION ~
abort		Whether the event triggered during
an aborting condition (e.g. [c_Esc](#c_Esc) or
[c_CTRL-C| for |CmdlineLeave](#c_CTRL-C| for |CmdlineLeave)).
chan		[channel-id](#channel-id) or 0 for "internal".
cmdlevel	Level of cmdline.
cmdtype		Type of cmdline, [cmdline-char](#cmdline-char).
cwd		Current working directory.
inclusive	Motion is [inclusive](#inclusive), else exclusive.
scope		Event-specific scope name.
operator	Current [operator](#operator).  Also set for Ex
commands (unlike [v:operator](#v:operator)). For
example if [TextYankPost](#TextYankPost) is triggered
by the [:yank](#:yank) Ex command then
`v:event.operator` is "y".
regcontents	Text stored in the register as a
[readfile()](#readfile())-style list of lines.
regname		Requested register (e.g "x" for "xyy)
or the empty string for an unnamed
operation.
regtype		Type of register as returned by
[getregtype()](#getregtype()).
visual		Selection is visual (as opposed to,
e.g., via motion).
completed_item    Current selected complete item on
[CompleteChanged](#CompleteChanged), Is `{}` when no complete
item selected.
height 		Height of popup menu on [CompleteChanged](#CompleteChanged)
width   	width of popup menu on [CompleteChanged](#CompleteChanged)
row  	 	Row count of popup menu on [CompleteChanged](#CompleteChanged),
relative to screen.
col  	 	Col count of popup menu on [CompleteChanged](#CompleteChanged),
relative to screen.
size 		Total number of completion items on
[CompleteChanged](#CompleteChanged).
scrollbar 	Is [v:true](#v:true) if popup menu have scrollbar, or
[v:false](#v:false) if not.
changed_window 	Is [v:true](#v:true) if the the event fired
while changing window (or tab) on [DirChanged](#DirChanged).
status		Job status or exit code, -1 means "unknown". [TermClose](#TermClose)

### <a id="v:exception exception-variable" class="section-title" href="#v:exception exception-variable">Note:</a>
v:exception	The value of the exception most recently caught and not
finished.  See also [v:throwpoint| and |throw-variables](#v:throwpoint| and |throw-variables).
Example:
```
:try
:  throw "oops"
:catch /.*/
:  echo "caught " .. v:exception
:endtry

```
		Output: "caught oops".

### <a id="v:false false-variable" class="section-title" href="#v:false false-variable">Note:</a>
v:false		Special value used to put "false" in JSON and msgpack.  See
[json_encode()](#json_encode()).  This value is converted to "v:false" when used
as a String (e.g. in [expr5](#expr5) with string concatenation
operator) and to zero when used as a Number (e.g. in [expr5](#expr5)
or [expr7](#expr7) when used with numeric operators). Read-only.

### <a id="v:fcs_reason fcs_reason-variable" class="section-title" href="#v:fcs_reason fcs_reason-variable">Note:</a>
v:fcs_reason	The reason why the [FileChangedShell](#FileChangedShell) event was triggered.
Can be used in an autocommand to decide what to do and/or what
to set v:fcs_choice to.  Possible values:
deleted		file no longer exists
conflict	file contents, mode or timestamp was
changed and buffer is modified
changed		file contents has changed
mode		mode of file changed
time		only file timestamp changed

### <a id="v:fcs_choice fcs_choice-variable" class="section-title" href="#v:fcs_choice fcs_choice-variable">Note:</a>
v:fcs_choice	What should happen after a [FileChangedShell](#FileChangedShell) event was
triggered.  Can be used in an autocommand to tell Vim what to
do with the affected buffer:
reload		Reload the buffer (does not work if
the file was deleted).
edit		Reload the buffer and detect the
values for options such as
'fileformat', 'fileencoding', 'binary'
(does not work if the file was
deleted).
ask		Ask the user what to do, as if there
was no autocommand.  Except that when
only the timestamp changed nothing
will happen.

```
empty>		Nothing, the autocommand should do
everything that needs to be done.
The default is empty.  If another (invalid) value is used then
Vim behaves like it is empty, there is no warning message.

### <a id="v:fname fname-variable" class="section-title" href="#v:fname fname-variable">Note:</a>
v:fname		When evaluating 'includeexpr': the file name that was
detected.  Empty otherwise.

### <a id="v:fname_in fname_in-variable" class="section-title" href="#v:fname_in fname_in-variable">Note:</a>
v:fname_in	The name of the input file.  Valid while evaluating:
option		used for ~
'charconvert'	file to be converted
'diffexpr'	original file
'patchexpr'	original file
'printexpr'	file to be printed
And set to the swap file name for [SwapExists](#SwapExists).

### <a id="v:fname_out fname_out-variable" class="section-title" href="#v:fname_out fname_out-variable">Note:</a>
v:fname_out	The name of the output file.  Only valid while
evaluating:
option		used for ~
### <a id="'charconvert'	resulting converted file ()" class="section-title" href="#'charconvert'	resulting converted file ()">Note:</a>
'diffexpr'	output of diff
'patchexpr'	resulting patched file
### <a id="() When doing conversion for a write command (e.g., ":w" class="section-title" href="#() When doing conversion for a write command (e.g., ":w">Note:</a>
file") it will be equal to v:fname_in.  When doing conversion
for a read command (e.g., ":e file") it will be a temporary
file and different from v:fname_in.

### <a id="v:fname_new fname_new-variable" class="section-title" href="#v:fname_new fname_new-variable">Note:</a>
v:fname_new	The name of the new version of the file.  Only valid while
evaluating 'diffexpr'.

### <a id="v:fname_diff fname_diff-variable" class="section-title" href="#v:fname_diff fname_diff-variable">Note:</a>
v:fname_diff	The name of the diff (patch) file.  Only valid while
evaluating 'patchexpr'.

### <a id="v:folddashes folddashes-variable" class="section-title" href="#v:folddashes folddashes-variable">Note:</a>
v:folddashes	Used for 'foldtext': dashes representing foldlevel of a closed
fold.
Read-only in the [sandbox|. |fold-foldtext](#sandbox|. |fold-foldtext)

### <a id="v:foldlevel foldlevel-variable" class="section-title" href="#v:foldlevel foldlevel-variable">Note:</a>
v:foldlevel	Used for 'foldtext': foldlevel of closed fold.
Read-only in the [sandbox|. |fold-foldtext](#sandbox|. |fold-foldtext)

### <a id="v:foldend foldend-variable" class="section-title" href="#v:foldend foldend-variable">Note:</a>
v:foldend	Used for 'foldtext': last line of closed fold.
Read-only in the [sandbox|. |fold-foldtext](#sandbox|. |fold-foldtext)

### <a id="v:foldstart foldstart-variable" class="section-title" href="#v:foldstart foldstart-variable">Note:</a>
v:foldstart	Used for 'foldtext': first line of closed fold.
Read-only in the [sandbox|. |fold-foldtext](#sandbox|. |fold-foldtext)

### <a id="v:hlsearch hlsearch-variable" class="section-title" href="#v:hlsearch hlsearch-variable">Note:</a>
v:hlsearch	Variable that indicates whether search highlighting is on.
Setting it makes sense only if 'hlsearch' is enabled. Setting
this variable to zero acts like the [:nohlsearch](#:nohlsearch) command,
setting it to one acts like
```
let &hlsearch = &hlsearch

```
		Note that the value is restored when returning from a
function. [function-search-undo](#function-search-undo).

### <a id="v:insertmode insertmode-variable" class="section-title" href="#v:insertmode insertmode-variable">Note:</a>
v:insertmode	Used for the [InsertEnter| and |InsertChange](#InsertEnter| and |InsertChange) autocommand
events.  Values:
i	Insert mode
r	Replace mode
v	Virtual Replace mode

### <a id="v:key key-variable" class="section-title" href="#v:key key-variable">Note:</a>
v:key		Key of the current item of a [Dictionary](#Dictionary).  Only valid while
evaluating the expression used with [map()| and |filter()](#map()| and |filter()).
Read-only.

### <a id="v:lang lang-variable" class="section-title" href="#v:lang lang-variable">Note:</a>
v:lang		The current locale setting for messages of the runtime
environment.  This allows Vim scripts to be aware of the
current language.  Technical: it's the value of LC_MESSAGES.
The value is system dependent.
This variable can not be set directly, use the [:language](#:language)
command.
It can be different from [v:ctype](#v:ctype) when messages are desired
in a different language than what is used for character
encoding.  See [multi-lang](#multi-lang).

### <a id="v:lc_time lc_time-variable" class="section-title" href="#v:lc_time lc_time-variable">Note:</a>
v:lc_time	The current locale setting for time messages of the runtime
environment.  This allows Vim scripts to be aware of the
current language.  Technical: it's the value of LC_TIME.
This variable can not be set directly, use the [:language](#:language)
command.  See [multi-lang](#multi-lang).

### <a id="v:lnum lnum-variable" class="section-title" href="#v:lnum lnum-variable">Note:</a>
v:lnum		Line number for the 'foldexpr' [fold-expr](#fold-expr), 'formatexpr' and
'indentexpr' expressions, tab page number for 'guitablabel'
and 'guitabtooltip'.  Only valid while one of these
expressions is being evaluated.  Read-only when in the
[sandbox](#sandbox).

### <a id="v:lua lua-variable" class="section-title" href="#v:lua lua-variable">Note:</a>
v:lua		Prefix for calling Lua functions from expressions.
See [v:lua-call](#v:lua-call) for more information.

### <a id="v:mouse_win mouse_win-variable" class="section-title" href="#v:mouse_win mouse_win-variable">Note:</a>
v:mouse_win	Window number for a mouse click obtained with [getchar()](#getchar()).
First window has number 1, like with [winnr()](#winnr()).  The value is
zero when there was no mouse button click.

### <a id="v:mouse_winid mouse_winid-variable" class="section-title" href="#v:mouse_winid mouse_winid-variable">Note:</a>
v:mouse_winid	[window-ID| for a mouse click obtained with |getchar()](#window-ID| for a mouse click obtained with |getchar()).
The value is zero when there was no mouse button click.

### <a id="v:mouse_lnum mouse_lnum-variable" class="section-title" href="#v:mouse_lnum mouse_lnum-variable">Note:</a>
v:mouse_lnum	Line number for a mouse click obtained with [getchar()](#getchar()).
This is the text line number, not the screen line number.  The
value is zero when there was no mouse button click.

### <a id="v:mouse_col mouse_col-variable" class="section-title" href="#v:mouse_col mouse_col-variable">Note:</a>
v:mouse_col	Column number for a mouse click obtained with [getchar()](#getchar()).
This is the screen column number, like with [virtcol()](#virtcol()).  The
value is zero when there was no mouse button click.

### <a id="v:msgpack_types msgpack_types-variable" class="section-title" href="#v:msgpack_types msgpack_types-variable">Note:</a>
v:msgpack_types	Dictionary containing msgpack types used by [msgpackparse()](#msgpackparse())
and [msgpackdump()](#msgpackdump()). All types inside dictionary are fixed
(not editable) empty lists. To check whether some list is one
of msgpack types, use [is](#is) operator.

### <a id="v:null null-variable" class="section-title" href="#v:null null-variable">Note:</a>
v:null		Special value used to put "null" in JSON and NIL in msgpack.
See [json_encode()](#json_encode()).  This value is converted to "v:null" when
used as a String (e.g. in [expr5](#expr5) with string concatenation
operator) and to zero when used as a Number (e.g. in [expr5](#expr5)
or [expr7](#expr7) when used with numeric operators). Read-only.
In some places `v:null` can be used for a List, Dict, etc.
that is not set.  That is slightly different than an empty
List, Dict, etc.

### <a id="v:numbermax numbermax-variable" class="section-title" href="#v:numbermax numbermax-variable">Note:</a>
v:numbermax	Maximum value of a number.

### <a id="v:numbermin numbermin-variable" class="section-title" href="#v:numbermin numbermin-variable">Note:</a>
v:numbermin	Minimum value of a number (negative).

### <a id="v:numbersize numbersize-variable" class="section-title" href="#v:numbersize numbersize-variable">Note:</a>
v:numbersize	Number of bits in a Number.  This is normally 64, but on some
systems it may be 32.

### <a id="v:oldfiles oldfiles-variable" class="section-title" href="#v:oldfiles oldfiles-variable">Note:</a>
v:oldfiles	List of file names that is loaded from the [shada](#shada) file on
startup.  These are the files that Vim remembers marks for.
The length of the List is limited by the ' argument of the
'shada' option (default is 100).
When the [shada](#shada) file is not used the List is empty.
Also see [:oldfiles| and |c_#<](#:oldfiles| and |c_#<).
The List can be modified, but this has no effect on what is
stored in the [shada](#shada) file later.  If you use values other
than String this will cause trouble.

### <a id="v:option_new" class="section-title" href="#v:option_new">Note:</a>
v:option_new    New value of the option. Valid while executing an [OptionSet](#OptionSet)
autocommand.
### <a id="v:option_old" class="section-title" href="#v:option_old">Note:</a>
v:option_old    Old value of the option. Valid while executing an [OptionSet](#OptionSet)
autocommand. Depending on the command used for setting and the
kind of option this is either the local old value or the
global old value.
### <a id="v:option_oldlocal" class="section-title" href="#v:option_oldlocal">Note:</a>
v:option_oldlocal
Old local value of the option. Valid while executing an
[OptionSet](#OptionSet) autocommand.
### <a id="v:option_oldglobal" class="section-title" href="#v:option_oldglobal">Note:</a>
v:option_oldglobal
Old global value of the option. Valid while executing an
[OptionSet](#OptionSet) autocommand.
### <a id="v:option_type" class="section-title" href="#v:option_type">Note:</a>
v:option_type   Scope of the set command. Valid while executing an
[OptionSet](#OptionSet) autocommand. Can be either "global" or "local"
### <a id="v:option_command" class="section-title" href="#v:option_command">Note:</a>
v:option_command
Command used to set the option. Valid while executing an
[OptionSet](#OptionSet) autocommand.
value		option was set via   ~
"setlocal"	[:setlocal](#:setlocal) or ":let l:xxx"
"setglobal"	[:setglobal](#:setglobal) or ":let g:xxx"
"set"		[:set| or |:let](#:set| or |:let)
"modeline"	[modeline](#modeline)
### <a id="v:operator operator-variable" class="section-title" href="#v:operator operator-variable">Note:</a>
v:operator	The last operator given in Normal mode.  This is a single
character except for commands starting with <g> or <z>,
in which case it is two characters.  Best used alongside
[v:prevcount| and |v:register](#v:prevcount| and |v:register).  Useful if you want to cancel
Operator-pending mode and then use the operator, e.g.:
```
:omap O <Esc>:call MyMotion(v:operator)<CR>

```
		The value remains set until another operator is entered, thus
don't expect it to be empty.
v:operator is not set for [:delete|, |:yank](#:delete|, |:yank) or other Ex
commands.
Read-only.

### <a id="v:prevcount prevcount-variable" class="section-title" href="#v:prevcount prevcount-variable">Note:</a>
v:prevcount	The count given for the last but one Normal mode command.
This is the v:count value of the previous command.  Useful if
you want to cancel Visual or Operator-pending mode and then
use the count, e.g.:
```
:vmap % <Esc>:call MyFilter(v:prevcount)<CR>

```
		Read-only.

### <a id="v:profiling profiling-variable" class="section-title" href="#v:profiling profiling-variable">Note:</a>
v:profiling	Normally zero.  Set to one after using ":profile start".
See [profiling](#profiling).

### <a id="v:progname progname-variable" class="section-title" href="#v:progname progname-variable">Note:</a>
v:progname	The name by which Nvim was invoked (with path removed).
Read-only.

### <a id="v:progpath progpath-variable" class="section-title" href="#v:progpath progpath-variable">Note:</a>
v:progpath	Absolute path to the current running Nvim.
Read-only.

### <a id="v:register register-variable" class="section-title" href="#v:register register-variable">Note:</a>
v:register	The name of the register in effect for the current normal mode
command (regardless of whether that command actually used a
register).  Or for the currently executing normal mode mapping
(use this in custom commands that take a register).
If none is supplied it is the default register '"', unless
'clipboard' contains "unnamed" or "unnamedplus", then it is
### <a id="'' or '+'." class="section-title" href="#'' or '+'.">Note:</a>
Also see [getreg()| and |setreg()](#getreg()| and |setreg())

### <a id="v:scrollstart scrollstart-variable" class="section-title" href="#v:scrollstart scrollstart-variable">Note:</a>
v:scrollstart	String describing the script or function that caused the
screen to scroll up.  It's only set when it is empty, thus the
first reason is remembered.  It is set to "Unknown" for a
typed command.
This can be used to find out why your script causes the
hit-enter prompt.

### <a id="v:servername servername-variable" class="section-title" href="#v:servername servername-variable">Note:</a>
v:servername	Primary listen-address of Nvim, the first item returned by
[serverlist()](#serverlist()). Usually this is the named pipe created by Nvim
at [startup| or given by |--listen](#startup| or given by |--listen) (or the deprecated
[$NVIM_LISTEN_ADDRESS](#$NVIM_LISTEN_ADDRESS) env var).

See also [serverstart()| |serverstop()](#serverstart()| |serverstop()).
Read-only.

### <a id="$NVIM" class="section-title" href="#$NVIM">Note:</a>
$NVIM is set by [terminal| and |jobstart()](#terminal| and |jobstart()), and is thus
a hint that the current environment is a subprocess of Nvim.
Example:
```
if $NVIM
echo nvim_get_chan_info(v:parent)
endif


```
		Note the contents of $NVIM may change in the future.

### <a id="v:searchforward searchforward-variable" class="section-title" href="#v:searchforward searchforward-variable">v:searchforward</a>
Search direction:  1 after a forward search, 0 after a
backward search.  It is reset to forward when directly setting
the last search pattern, see [quote/](#quote/).
Note that the value is restored when returning from a
function. [function-search-undo](#function-search-undo).
Read-write.

### <a id="v:shell_error shell_error-variable" class="section-title" href="#v:shell_error shell_error-variable">Note:</a>
v:shell_error	Result of the last shell command.  When non-zero, the last
shell command had an error.  When zero, there was no problem.
This only works when the shell returns the error code to Vim.
The value -1 is often used when the command could not be
executed.  Read-only.
Example:
```
:!mv foo bar
:if v:shell_error
:  echo 'could not rename "foo" to "bar"!'
:endif

```

### <a id="v:statusmsg statusmsg-variable" class="section-title" href="#v:statusmsg statusmsg-variable">Note:</a>
v:statusmsg	Last given status message.
Modifiable (can be set).

### <a id="v:stderr stderr-variable" class="section-title" href="#v:stderr stderr-variable">Note:</a>
v:stderr	[channel-id](#channel-id) corresponding to stderr. The value is always 2;
use this variable to make your code more descriptive.
Unlike stdin and stdout (see [stdioopen()](#stdioopen())), stderr is always
open for writing. Example:
```
:call chansend(v:stderr, "error: toaster empty\n")

```

### <a id="v:swapname swapname-variable" class="section-title" href="#v:swapname swapname-variable">Note:</a>
v:swapname	Only valid when executing [SwapExists](#SwapExists) autocommands: Name of
the swap file found.  Read-only.

### <a id="v:swapchoice swapchoice-variable" class="section-title" href="#v:swapchoice swapchoice-variable">Note:</a>
v:swapchoice	[SwapExists](#SwapExists) autocommands can set this to the selected choice
for handling an existing swap file:
'o'	Open read-only
'e'	Edit anyway
'r'	Recover
'd'	Delete swapfile
'q'	Quit
'a'	Abort
The value should be a single-character string.  An empty value
results in the user being asked, as would happen when there is
no SwapExists autocommand.  The default is empty.

### <a id="v:swapcommand swapcommand-variable" class="section-title" href="#v:swapcommand swapcommand-variable">Note:</a>
v:swapcommand	Normal mode command to be executed after a file has been
opened.  Can be used for a [SwapExists](#SwapExists) autocommand to have
another Vim open the file and jump to the right place.  For
example, when jumping to a tag the value is ":tag tagname\r".
For ":edit +cmd file" the value is ":cmd\r".

### <a id="v:t_TYPE v:t_bool t_bool-variable" class="section-title" href="#v:t_TYPE v:t_bool t_bool-variable">Note:</a>
v:t_bool	Value of [Boolean| type.  Read-only.  See: |type()](#Boolean| type.  Read-only.  See: |type())
### <a id="v:t_dict t_dict-variable" class="section-title" href="#v:t_dict t_dict-variable">Note:</a>
v:t_dict	Value of [Dictionary| type.  Read-only.  See: |type()](#Dictionary| type.  Read-only.  See: |type())
### <a id="v:t_float t_float-variable" class="section-title" href="#v:t_float t_float-variable">Note:</a>
v:t_float	Value of [Float| type.  Read-only.  See: |type()](#Float| type.  Read-only.  See: |type())
### <a id="v:t_func t_func-variable" class="section-title" href="#v:t_func t_func-variable">Note:</a>
v:t_func	Value of [Funcref| type.  Read-only.  See: |type()](#Funcref| type.  Read-only.  See: |type())
### <a id="v:t_list t_list-variable" class="section-title" href="#v:t_list t_list-variable">Note:</a>
v:t_list	Value of [List| type.  Read-only.  See: |type()](#List| type.  Read-only.  See: |type())
### <a id="v:t_number t_number-variable" class="section-title" href="#v:t_number t_number-variable">Note:</a>
v:t_number	Value of [Number| type.  Read-only.  See: |type()](#Number| type.  Read-only.  See: |type())
### <a id="v:t_string t_string-variable" class="section-title" href="#v:t_string t_string-variable">Note:</a>
v:t_string	Value of [String| type.  Read-only.  See: |type()](#String| type.  Read-only.  See: |type())
### <a id="v:t_blob t_blob-variable" class="section-title" href="#v:t_blob t_blob-variable">Note:</a>
v:t_blob	Value of [Blob| type.  Read-only.  See: |type()](#Blob| type.  Read-only.  See: |type())

### <a id="v:termresponse termresponse-variable" class="section-title" href="#v:termresponse termresponse-variable">Note:</a>
v:termresponse	The escape sequence returned by the terminal for the DA
(request primary device attributes) control sequence.  It is
set when Vim receives an escape sequence that starts with ESC
[ or CSI and ends in a 'c', with only digits, ';' and '.' in
between.
When this option is set, the TermResponse autocommand event is
fired, so that you can react to the response from the
terminal.
The response from a new xterm is: "<Esc>[ Pp ; Pv ; Pc c".  Pp
is the terminal type: 0 for vt100 and 1 for vt220.  Pv is the
patch level (since this was introduced in patch 95, it's
always 95 or bigger).  Pc is always zero.

### <a id="v:testing testing-variable" class="section-title" href="#v:testing testing-variable">Note:</a>
v:testing	Must be set before using `test_garbagecollect_now()`.

### <a id="v:this_session this_session-variable" class="section-title" href="#v:this_session this_session-variable">Note:</a>
v:this_session	Full filename of the last loaded or saved session file.
Empty when no session file has been saved.  See [:mksession](#:mksession).
Modifiable (can be set).

### <a id="v:throwpoint throwpoint-variable" class="section-title" href="#v:throwpoint throwpoint-variable">Note:</a>
v:throwpoint	The point where the exception most recently caught and not
finished was thrown.  Not set when commands are typed.  See
also [v:exception| and |throw-variables](#v:exception| and |throw-variables).
Example:
```
:try
:  throw "oops"
:catch /.*/
:  echo "Exception from" v:throwpoint
:endtry

```
		Output: "Exception from test.vim, line 2"

### <a id="v:true true-variable" class="section-title" href="#v:true true-variable">Note:</a>
v:true		Special value used to put "true" in JSON and msgpack.  See
[json_encode()](#json_encode()).  This value is converted to "v:true" when used
as a String (e.g. in [expr5](#expr5) with string concatenation
operator) and to one when used as a Number (e.g. in [expr5](#expr5) or
[expr7](#expr7) when used with numeric operators). Read-only.

### <a id="v:val val-variable" class="section-title" href="#v:val val-variable">Note:</a>
v:val		Value of the current item of a [List| or |Dictionary](#List| or |Dictionary).  Only
valid while evaluating the expression used with [map()](#map()) and
[filter()](#filter()).  Read-only.

### <a id="v:version version-variable" class="section-title" href="#v:version version-variable">Note:</a>
v:version	Vim version number: major version times 100 plus minor
version.  Vim 5.0 is 500, Vim 5.1 is 501.
Read-only.
Use [has()](#has()) to check the Nvim (not Vim) version:
```
:if has("nvim-0.2.1")

```


### <a id="v:vim_did_enter vim_did_enter-variable" class="section-title" href="#v:vim_did_enter vim_did_enter-variable">Note:</a>
v:vim_did_enter	0 during startup, 1 just before [VimEnter](#VimEnter).
Read-only.

### <a id="v:warningmsg warningmsg-variable" class="section-title" href="#v:warningmsg warningmsg-variable">Note:</a>
v:warningmsg	Last given warning message.
Modifiable (can be set).

### <a id="v:windowid windowid-variable" class="section-title" href="#v:windowid windowid-variable">Note:</a>
v:windowid	Application-specific window "handle" which may be set by any
attached UI. Defaults to zero.
Note: For Nvim [windows| use |winnr()| or |win_getid()](#windows| use |winnr()| or |win_getid()), see
[window-ID](#window-ID).


## <a id="vim-function functions" class="section-title" href="#vim-function functions">4. Builtin Functions</a> 

The Vimscript subsystem (referred to as "eval" internally) provides builtin
functions.  Scripts can also define [user-function](#user-function)s.

See [function-list](#function-list) to browse functions by topic.

The alphabetic list of all builtin functions and details are in a separate
help file: [builtin-functions](#builtin-functions).


## <a id="user-function" class="section-title" href="#user-function">5. Defining Functions</a> 

New functions can be defined.  These can be called just like builtin
functions.  The function takes arguments, executes a sequence of Ex commands
and can return a value.

You can find most information about defining functions in [userfunc.txt](#userfunc.txt).


## <a id="curly-braces-names" class="section-title" href="#curly-braces-names">6. Curly Braces Names</a> 

In most places where you can use a variable, you can use a "curly braces name"
variable.  This is a regular variable name with one or more expressions
wrapped in braces {} like this:
```
my_{adjective}_variable

When Vim encounters this, it evaluates the expression inside the braces, puts
that in place of the expression, and re-interprets the whole as a variable
name.  So in the above example, if the variable "adjective" was set to
"noisy", then the reference would be to "my_noisy_variable", whereas if
"adjective" was set to "quiet", then it would be to "my_quiet_variable".

One application for this is to create a set of variables governed by an option
value.  For example, the statement
```
echo my_{&background}_message

would output the contents of "my_dark_message" or "my_light_message" depending
on the current value of 'background'.

You can use multiple brace pairs:
```
echo my_{adverb}_{adjective}_message
..or even nest them:
```
echo my_{ad{end_of_word}}_message
where "end_of_word" is either "verb" or "jective".

However, the expression inside the braces must evaluate to a valid single
variable name, e.g. this is invalid:
```
:let foo='a + b'
:echo c{foo}d
.. since the result of expansion is "ca + bd", which is not a variable name.

### <a id="curly-braces-function-names" class="section-title" href="#curly-braces-function-names">Note:</a>
You can call and define functions by an evaluated name in a similar way.
Example:
```
:let func_end='whizz'
:call my_func_{func_end}(parameter)

This would call the function "my_func_whizz(parameter)".

This does NOT work:
```
:let i = 3
:let @{i} = ''  " error
:echo @{i}      " error


## <a id="expression-commands" class="section-title" href="#expression-commands">7. Commands</a> 

### <a id=":let E18" class="section-title" href="#:let E18">:let {var-name} = {expr1}</a>
Set internal variable {var-name} to the result of the
expression {expr1}.  The variable will get the type
from the {expr}.  If {var-name} didn't exist yet, it
is created.

### <a id="E689" class="section-title" href="#E689">:let {var-name}[{idx}] = {expr1}</a>
Set a list item to the result of the expression
{expr1}.  {var-name} must refer to a list and {idx}
must be a valid index in that list.  For nested list
the index can be repeated.
This cannot be used to add an item to a [List](#List).
This cannot be used to set a byte in a String.  You
can do that like this:
```
:let var = var[0:2] .. 'X' .. var[4:]

```
			When {var-name} is a [Blob](#Blob) then {idx} can be the
length of the blob, in which case one byte is
appended.

### <a id="E711 E719" class="section-title" href="#E711 E719">Note:</a>
### <a id="E708 E709 E710" class="section-title" href="#E708 E709 E710">:let {var-name}[{idx1}:{idx2}] = {expr1}</a>
Set a sequence of items in a [List](#List) to the result of
the expression {expr1}, which must be a list with the
correct number of items.
{idx1} can be omitted, zero is used instead.
{idx2} can be omitted, meaning the end of the list.
When the selected range of items is partly past the
end of the list, items will be added.

### <a id=":let+= :let-= :letstar=" class="section-title" href="#:let+= :let-= :letstar=">Note:</a>
### <a id=":let/= :let%= :let.= :let..= E734" class="section-title" href="#:let/= :let%= :let.= :let..= E734">Note:</a>
:let {var} += {expr1}	Like ":let {var} = {var} + {expr1}".
:let {var} -= {expr1}	Like ":let {var} = {var} - {expr1}".
:let {var} *= {expr1}	Like ":let {var} = {var} * {expr1}".
:let {var} /= {expr1}	Like ":let {var} = {var} / {expr1}".
:let {var} %= {expr1}	Like ":let {var} = {var} % {expr1}".
:let {var} .= {expr1}	Like ":let {var} = {var} . {expr1}".
:let {var} ..= {expr1}	Like ":let {var} = {var} .. {expr1}".
These fail if {var} was not set yet and when the type
of {var} and {expr1} don't fit the operator.


### <a id=":let-environment :let-$" class="section-title" href="#:let-environment :let-$">:let ${env-name} = {expr1}</a>
Set environment variable {env-name} to the result of
the expression {expr1}.  The type is always String.
:let ${env-name} .= {expr1}
Append {expr1} to the environment variable {env-name}.
If the environment variable didn't exist yet this
works like "=".

### <a id=":let-register :let-@" class="section-title" href="#:let-register :let-@">:let @{reg-name} = {expr1}</a>
Write the result of the expression {expr1} in register
{reg-name}.  {reg-name} must be a single letter, and
must be the name of a writable register (see
[registers](#registers)).  "@@" can be used for the unnamed
register, "@/" for the search pattern.
If the result of {expr1} ends in a <CR> or <NL>, the
register will be linewise, otherwise it will be set to
charwise.
This can be used to clear the last search pattern:
```
:let @/ = ""

```
			This is different from searching for an empty string,
that would match everywhere.

:let @{reg-name} .= {expr1}
Append {expr1} to register {reg-name}.  If the
register was empty it's like setting it to {expr1}.

### <a id=":let-option :let-&" class="section-title" href="#:let-option :let-&">:let &{option-name} = {expr1}</a>
Set option {option-name} to the result of the
expression {expr1}.  A String or Number value is
always converted to the type of the option.
For an option local to a window or buffer the effect
is just like using the [:set](#:set) command: both the local
value and the global value are changed.
Example:
```
:let &path = &path .. ',/usr/local/include'

:let &{option-name} .= {expr1}
For a string option: Append {expr1} to the value.
Does not insert a comma like [:set+=](#:set+=).

:let &{option-name} += {expr1}
:let &{option-name} -= {expr1}
For a number or boolean option: Add or subtract
{expr1}.

:let &l:{option-name} = {expr1}
:let &l:{option-name} .= {expr1}
:let &l:{option-name} += {expr1}
:let &l:{option-name} -= {expr1}
Like above, but only set the local value of an option
(if there is one).  Works like [:setlocal](#:setlocal).

:let &g:{option-name} = {expr1}
:let &g:{option-name} .= {expr1}
:let &g:{option-name} += {expr1}
:let &g:{option-name} -= {expr1}
Like above, but only set the global value of an option
(if there is one).  Works like [:setglobal](#:setglobal).

### <a id=":let-unpack E687 E688" class="section-title" href="#:let-unpack E687 E688">:let [{name1}, {name2}, ...] = {expr1}</a>
{expr1} must evaluate to a [List](#List).  The first item in
the list is assigned to {name1}, the second item to
{name2}, etc.
The number of names must match the number of items in
the [List](#List).
Each name can be one of the items of the ":let"
command as mentioned above.
Example:
```
:let [s, item] = GetItem(s)

```
			Detail: {expr1} is evaluated first, then the
assignments are done in sequence.  This matters if
{name2} depends on {name1}.  Example:
```
:let x = [0, 1]
:let i = 0
:let [i, x[i]] = [1, 2]
:echo x

```
			The result is [0, 2].

:let [{name1}, {name2}, ...] .= {expr1}
:let [{name1}, {name2}, ...] += {expr1}
:let [{name1}, {name2}, ...] -= {expr1}
Like above, but append/add/subtract the value for each
[List](#List) item.

### <a id="E452" class="section-title" href="#E452">:let [{name}, ..., ; {lastname}] = {expr1}</a>
Like [:let-unpack| above, but the |List](#:let-unpack| above, but the |List) may have more
items than there are names.  A list of the remaining
items is assigned to {lastname}.  If there are no
remaining items {lastname} is set to an empty list.
Example:
```
:let [a, b; rest] = ["aval", "bval", 3, 4]

```

:let [{name}, ..., ; {lastname}] .= {expr1}
:let [{name}, ..., ; {lastname}] += {expr1}
:let [{name}, ..., ; {lastname}] -= {expr1}
Like above, but append/add/subtract the value for each
[List](#List) item.

### <a id=":let=<< :let-heredoc" class="section-title" href="#:let=<< :let-heredoc">Note:</a>
### <a id="E990 E991 E172 E221" class="section-title" href="#E990 E991 E172 E221">Note:</a>
:let {var-name} =<< [trim] {endmarker}
text...
text...
{endmarker}
Set internal variable {var-name} to a [List](#List)
containing the lines of text bounded by the string
{endmarker}. The lines of text is used as a
[literal-string](#literal-string).
{endmarker} must not contain white space.
{endmarker} cannot start with a lower case character.
The last line should end only with the {endmarker}
string without any other character.  Watch out for
white space after {endmarker}!

Without "trim" any white space characters in the lines
of text are preserved.  If "trim" is specified before
{endmarker}, then indentation is stripped so you can
do:
```
let text =<< trim END
if ok
echo 'done'
endif
END

```
			Results in: `["if ok", "  echo 'done'", "endif"]`
The marker must line up with "let" and the indentation
of the first line is removed from all the text lines.
Specifically: all the leading indentation exactly
matching the leading indentation of the first
non-empty text line is stripped from the input lines.
All leading indentation exactly matching the leading
indentation before `let` is stripped from the line
containing {endmarker}.  Note that the difference
between space and tab matters here.

If {var-name} didn't exist yet, it is created.
Cannot be followed by another command, but can be
followed by a comment.

To avoid line continuation to be applied, consider
adding 'C' to 'cpoptions':
```
set cpo+=C
let var =<< END
\ leading backslash
END
set cpo-=C

```

Examples:
```
let var1 =<< END
Sample text 1
Sample text 2
Sample text 3
END

let data =<< trim DATA
1 2 3 4
5 6 7 8
DATA

```

### <a id="E121" class="section-title" href="#E121">Note:</a>
:let {var-name}	..	List the value of variable {var-name}.  Multiple
variable names may be given.  Special names recognized
here:				*E738*
g:	global variables
b:	local buffer variables
w:	local window variables
t:	local tab page variables
s:	script-local variables
l:	local function variables
v:	Vim variables.

:let			List the values of all variables.  The type of the
variable is indicated before the value:

```
nothing>	String
#	Number
### <a id="	Funcref" class="section-title" href="#	Funcref">Note:</a>


### <a id=":unlet :unl E108 E795" class="section-title" href="#:unlet :unl E108 E795">:unl[et][!] {name} ...</a>
Remove the internal variable {name}.  Several variable
names can be given, they are all removed.  The name
may also be a [List| or |Dictionary](#List| or |Dictionary) item.
With [!] no error message is given for non-existing
variables.
One or more items from a [List](#List) can be removed:
```
:unlet list[3]	  " remove fourth item
:unlet list[3:]   " remove fourth item to last

```
			One item from a [Dictionary](#Dictionary) can be removed at a time:
```
:unlet dict['two']
:unlet dict.two

```
			This is especially useful to clean up used global
variables and script-local variables (these are not
deleted when the script ends).  Function-local
variables are automatically deleted when the function
ends.

### <a id=":unlet-environment :unlet-$" class="section-title" href="#:unlet-environment :unlet-$">:unl[et] ${env-name} ...</a>
Remove environment variable {env-name}.
Can mix {name} and ${env-name} in one :unlet command.
No error message is given for a non-existing
variable, also without !.
If the system does not support deleting an environment
variable, it is made empty.

### <a id=":cons :const" class="section-title" href="#:cons :const">Note:</a>
:cons[t] {var-name} = {expr1}
:cons[t] [{name1}, {name2}, ...] = {expr1}
:cons[t] [{name}, ..., ; {lastname}] = {expr1}
Similar to [:let](#:let), but additionally lock the variable
after setting the value.  This is the same as locking
the variable with [:lockvar| just after |:let](#:lockvar| just after |:let), thus:
```
:const x = 1

```
			is equivalent to:
```
:let x = 1
:lockvar! x

```
			This is useful if you want to make sure the variable
is not modified.  If the value is a List or Dictionary
literal then the items also cannot be changed:
```
const ll = [1, 2, 3]
let ll[1] = 5  " Error!

```
			Nested references are not locked:
```
let lvar = ['a']
const lconst = [0, lvar]
let lconst[0] = 2  " Error!
let lconst[1][0] = 'b'  " OK
### <a id="E995" class="section-title" href="#E995"><</a>
[:const](#:const) does not allow to for changing a variable.
```
:let x = 1
:const x = 2  " Error!
### <a id="E996" class="section-title" href="#E996"><</a>
Note that environment variables, option values and
register values cannot be used here, since they cannot
be locked.

:cons[t]
:cons[t] {var-name}
If no argument is given or only {var-name} is given,
the behavior is the same as [:let](#:let).

### <a id=":lockvar :lockv" class="section-title" href="#:lockvar :lockv">:lockv[ar][!] [depth] {name} ...</a>
Lock the internal variable {name}.  Locking means that
it can no longer be changed (until it is unlocked).
A locked variable can be deleted:
```
:lockvar v
:let v = 'asdf'	  " fails!
:unlet v	  " works
### <a id="E741 E940" class="section-title" href="#E741 E940"><</a>
If you try to change a locked variable you get an
error message: "E741: Value is locked: {name}".
If you try to lock or unlock a built-in variable you
will get an error message "E940: Cannot lock or unlock
variable {name}".

[depth] is relevant when locking a [List](#List) or
[Dictionary](#Dictionary).  It specifies how deep the locking goes:
1	Lock the [List| or |Dictionary](#List| or |Dictionary) itself,
cannot add or remove items, but can
still change their values.
2	Also lock the values, cannot change
the items.  If an item is a [List](#List) or
[Dictionary](#Dictionary), cannot add or remove
items, but can still change the
values.
3	Like 2 but for the [List](#List) /
[Dictionary| in the |List](#Dictionary| in the |List) /
[Dictionary](#Dictionary), one level deeper.
The default [depth] is 2, thus when {name} is a [List](#List)
or [Dictionary](#Dictionary) the values cannot be changed.
### <a id="E743" class="section-title" href="#E743">Note:</a>
For unlimited depth use [!] and omit [depth].
However, there is a maximum depth of 100 to catch
loops.

Note that when two variables refer to the same [List](#List)
and you lock one of them, the [List](#List) will also be
locked when used through the other variable.
Example:
```
:let l = [0, 1, 2, 3]
:let cl = l
:lockvar l
:let cl[1] = 99		" won't work!

```
			You may want to make a copy of a list to avoid this.
See [deepcopy()](#deepcopy()).


### <a id=":unlockvar :unlo" class="section-title" href="#:unlockvar :unlo">:unlo[ckvar][!] [depth] {name} ...</a>
Unlock the internal variable {name}.  Does the
opposite of [:lockvar](#:lockvar).

### <a id=":if :end :endif :en E171 E579 E580" class="section-title" href="#:if :end :endif :en E171 E579 E580">:if {expr1}</a>
:en[dif]		Execute the commands until the next matching `:else`
or `:endif` if {expr1} evaluates to non-zero.
Although the short forms work, it is recommended to
always use `:endif` to avoid confusion and to make
auto-indenting work properly.

From Vim version 4.5 until 5.0, every Ex command in
between the `:if` and `:endif` is ignored.  These two
commands were just to allow for future expansions in a
backward compatible way.  Nesting was allowed.  Note
that any `:else` or `:elseif` was ignored, the `else`
part was not executed either.

You can use this to remain compatible with older
versions:
```
:if version >= 500
:  version-5-specific-commands
:endif

```
			The commands still need to be parsed to find the
`endif`.  Sometimes an older Vim has a problem with a
new command.  For example, `:silent` is recognized as
a `:substitute` command.  In that case `:execute` can
avoid problems:
```
:if version >= 600
:  execute "silent 1,$delete"
:endif

```

NOTE: The `:append` and `:insert` commands don't work
properly in between `:if` and `:endif`.

### <a id=":else :el E581 E583" class="section-title" href="#:else :el E581 E583">Note:</a>
:el[se]			Execute the commands until the next matching `:else`
or `:endif` if they previously were not being
executed.

### <a id=":elseif :elsei E582 E584" class="section-title" href="#:elseif :elsei E582 E584">Note:</a>
:elsei[f] {expr1}	Short for `:else` `:if`, with the addition that there
is no extra `:endif`.

### <a id=":while :endwhile :wh :endw" class="section-title" href="#:while :endwhile :wh :endw">:wh[ile] {expr1}</a>
### <a id="E170 E585 E588 E733" class="section-title" href="#E170 E585 E588 E733">Note:</a>
:endw[hile]		Repeat the commands between `:while` and `:endwhile`,
as long as {expr1} evaluates to non-zero.
When an error is detected from a command inside the
loop, execution continues after the `endwhile`.
Example:
```
:let lnum = 1
:while lnum <= line("$")
:call FixLine(lnum)
:let lnum = lnum + 1
:endwhile

```

NOTE: The `:append` and `:insert` commands don't work
properly inside a `:while` and `:for` loop.

### <a id=":for E690 E732" class="section-title" href="#:for E690 E732">:for {var} in {object}</a>
### <a id=":endfo :endfor" class="section-title" href="#:endfo :endfor">:endfo[r]</a>
Repeat the commands between `:for` and `:endfor` for
each item in {object}.  {object} can be a [List](#List),
a [Blob| or a |String](#Blob| or a |String).

Variable {var} is set to the value of each item.

When an error is detected for a command inside the
loop, execution continues after the `endfor`.
Changing {object} inside the loop affects what items
are used.  Make a copy if this is unwanted:
```
:for item in copy(mylist)

```

When {object} is a [List](#List) and not making a copy, Vim
stores a reference to the next item in the [List](#List)
before executing the commands with the current item.
Thus the current item can be removed without effect.
Removing any later item means it will not be found.
Thus the following example works (an inefficient way
to make a [List](#List) empty):
```
for item in mylist
call remove(mylist, 0)
endfor

```
			Note that reordering the [List](#List) (e.g., with sort() or
reverse()) may have unexpected effects.

When {object} is a [Blob](#Blob), Vim always makes a copy to
iterate over.  Unlike with [List](#List), modifying the
[Blob](#Blob) does not affect the iteration.

When {object} is a [String](#String) each item is a string with
one character, plus any combining characters.

:for [{var1}, {var2}, ...] in {listlist}
:endfo[r]
Like `:for` above, but each item in {listlist} must be
a list, of which each item is assigned to {var1},
{var2}, etc.  Example:
```
:for [lnum, col] in [[1, 3], [2, 5], [3, 8]]
:echo getline(lnum)[col]
:endfor

```

### <a id=":continue :con E586" class="section-title" href="#:continue :con E586">Note:</a>
:con[tinue]		When used inside a `:while` or `:for` loop, jumps back
to the start of the loop.

If it is used after a `:try` inside the loop but
before the matching `:finally` (if present), the
commands following the `:finally` up to the matching
`:endtry` are executed first.  This process applies to
all nested `:try`s inside the loop.  The outermost
`:endtry` then jumps back to the start of the loop.

### <a id=":break :brea E587" class="section-title" href="#:break :brea E587">Note:</a>
:brea[k]		When used inside a `:while` or `:for` loop, skips to
the command after the matching `:endwhile` or
`:endfor`.
If it is used after a `:try` inside the loop but
before the matching `:finally` (if present), the
commands following the `:finally` up to the matching
`:endtry` are executed first.  This process applies to
all nested `:try`s inside the loop.  The outermost
`:endtry` then jumps to the command after the loop.

### <a id=":try :endt :endtry E600 E601 E602" class="section-title" href="#:try :endt :endtry E600 E601 E602">:try</a>
:endt[ry]		Change the error handling for the commands between
`:try` and `:endtry` including everything being
executed across `:source` commands, function calls,
or autocommand invocations.

When an error or interrupt is detected and there is
a `:finally` command following, execution continues
after the `:finally`.  Otherwise, or when the
`:endtry` is reached thereafter, the next
(dynamically) surrounding `:try` is checked for
a corresponding `:finally` etc.  Then the script
processing is terminated.  Whether a function
definition has an "abort" argument does not matter.
Example:
```
try [ call Unknown() | finally | echomsg "cleanup" ](# call Unknown() | finally | echomsg "cleanup" ) endtry
echomsg "not reached"

```

Moreover, an error or interrupt (dynamically) inside
`:try` and `:endtry` is converted to an exception.  It
can be caught as if it were thrown by a `:throw`
command (see `:catch`).  In this case, the script
processing is not terminated.

The value "Vim:Interrupt" is used for an interrupt
exception.  An error in a Vim command is converted
to a value of the form "Vim({command}):{errmsg}",
other errors are converted to a value of the form
"Vim:{errmsg}".  {command} is the full command name,
and {errmsg} is the message that is displayed if the
error exception is not caught, always beginning with
the error number.
Examples:
```
try [ sleep 100 | catch /^Vim:Interrupt$/ ](# sleep 100 | catch /^Vim:Interrupt$/ ) endtry
try [ edit | catch /^Vim(edit):E\d\+/ | echo "error" ](# edit | catch /^Vim(edit):E\d\+/ | echo "error" ) endtry

```

### <a id=":cat :catch E603 E604 E605" class="section-title" href="#:cat :catch E603 E604 E605">Note:</a>
:cat[ch] /{pattern}/	The following commands until the next `:catch`,
`:finally`, or `:endtry` that belongs to the same
`:try` as the `:catch` are executed when an exception
matching {pattern} is being thrown and has not yet
been caught by a previous `:catch`.  Otherwise, these
commands are skipped.
When {pattern} is omitted all errors are caught.
Examples:
```
:catch /^Vim:Interrupt$/	 " catch interrupts (CTRL-C)
:catch /^Vim\%((\a\+)\)\=:E/	 " catch all Vim errors
:catch /^Vim\%((\a\+)\)\=:/	 " catch errors and interrupts
:catch /^Vim(write):/		 " catch all errors in :write
:catch /^Vim\%((\a\+)\)\=:E123:/ " catch error E123
:catch /my-exception/		 " catch user exception
### <a id=":catch /./" class="section-title" href="#:catch /./">Note:</a>
:catch				 " same as /.*/

```

Another character can be used instead of / around the
{pattern}, so long as it does not have a special
meaning (e.g., '|' or '"') and doesn't occur inside
{pattern}.
Information about the exception is available in
[v:exception|.  Also see |throw-variables](#v:exception|.  Also see |throw-variables).
NOTE: It is not reliable to ":catch" the TEXT of
an error message because it may vary in different
locales.

### <a id=":fina :finally E606 E607" class="section-title" href="#:fina :finally E606 E607">Note:</a>
:fina[lly]		The following commands until the matching `:endtry`
are executed whenever the part between the matching
`:try` and the `:finally` is left:  either by falling
through to the `:finally` or by a `:continue`,
`:break`, `:finish`, or `:return`, or by an error or
interrupt or exception (see `:throw`).

### <a id=":th :throw E608" class="section-title" href="#:th :throw E608">Note:</a>
:th[row] {expr1}	The {expr1} is evaluated and thrown as an exception.
If the `:throw` is used after a `:try` but before the
first corresponding `:catch`, commands are skipped
until the first `:catch` matching {expr1} is reached.
If there is no such `:catch` or if the `:throw` is
used after a `:catch` but before the `:finally`, the
commands following the `:finally` (if present) up to
the matching `:endtry` are executed.  If the `:throw`
is after the `:finally`, commands up to the `:endtry`
are skipped.  At the `:endtry`, this process applies
again for the next dynamically surrounding `:try`
(which may be found in a calling function or sourcing
script), until a matching `:catch` has been found.
If the exception is not caught, the command processing
is terminated.
Example:
```
:try [ throw "oops" | catch /^oo/ | echo "caught" ](# throw "oops" | catch /^oo/ | echo "caught" ) endtry

```
			Note that "catch" may need to be on a separate line
for when an error causes the parsing to skip the whole
line and not see the "|" that separates the commands.

### <a id=":ec :echo" class="section-title" href="#:ec :echo">Note:</a>
:ec[ho] {expr1} ..	Echoes each {expr1}, with a space in between.  The
first {expr1} starts on a new line.
Also see [:comment](#:comment).
Use "\n" to start a new line.  Use "\r" to move the
cursor to the first column.
Uses the highlighting set by the `:echohl` command.
Cannot be followed by a comment.
Example:
```
:echo "the value of 'shell' is" &shell
### <a id=":echo-redraw" class="section-title" href="#:echo-redraw"><</a>
A later redraw may make the message disappear again.
And since Vim mostly postpones redrawing until it's
finished with a sequence of commands this happens
quite often.  To avoid that a command from before the
`:echo` causes a redraw afterwards (redraws are often
postponed until you type something), force a redraw
with the `:redraw` command.  Example:
```
:new [ redraw ](# redraw ) echo "there is a new window"
### <a id=":echo-self-refer" class="section-title" href="#:echo-self-refer"><</a>
When printing nested containers echo prints second
occurrence of the self-referencing container using
"[...@level]" (self-referencing [List](#List)) or
"{...@level}" (self-referencing [Dict](#Dict)):
```
:let l = []
:call add(l, l)
:let l2 = []
:call add(l2, [l2])
:echo l l2

```
			echoes "[[...@0]] [[[...@0]]]". Echoing "[l]" will
echo "[[[...@1]]]" because l first occurs at second
level.

### <a id=":echon" class="section-title" href="#:echon">Note:</a>
:echon {expr1} ..	Echoes each {expr1}, without anything added.  Also see
[:comment](#:comment).
Uses the highlighting set by the `:echohl` command.
Cannot be followed by a comment.
Example:
```
:echon "the value of 'shell' is " &shell

```

Note the difference between using `:echo`, which is a
Vim command, and `:!echo`, which is an external shell
command:
```
:!echo %		--> filename

```
			The arguments of ":!" are expanded, see [:_%](#:_%).
```
:!echo "%"		--> filename or "filename"

```
			Like the previous example.  Whether you see the double
quotes or not depends on your 'shell'.
```
:echo %			--> nothing

```
			The '%' is an illegal character in an expression.
```
:echo "%"		--> %

```
			This just echoes the '%' character.
```
:echo expand("%")	--> filename

```
			This calls the expand() function to expand the '%'.

### <a id=":echoh :echohl" class="section-title" href="#:echoh :echohl">Note:</a>
:echoh[l] {name}	Use the highlight group {name} for the following
`:echo`, `:echon` and `:echomsg` commands.  Also used
for the `input()` prompt.  Example:
```
:echohl WarningMsg [ echo "Don't panic!" ](# echo "Don't panic!" ) echohl None

```
			Don't forget to set the group back to "None",
otherwise all following echo's will be highlighted.

### <a id=":echom :echomsg" class="section-title" href="#:echom :echomsg">Note:</a>
:echom[sg] {expr1} ..	Echo the expression(s) as a true message, saving the
message in the [message-history](#message-history).
Spaces are placed between the arguments as with the
`:echo` command.  But unprintable characters are
displayed, not interpreted.
The parsing works slightly different from `:echo`,
more like `:execute`.  All the expressions are first
evaluated and concatenated before echoing anything.
If expressions does not evaluate to a Number or
String, string() is used to turn it into a string.
Uses the highlighting set by the `:echohl` command.
Example:
```
:echomsg "It's a Zizzer Zazzer Zuzz, as you can plainly see."

```
			See [:echo-redraw](#:echo-redraw) to avoid the message disappearing
when the screen is redrawn.
### <a id=":echoe :echoerr" class="section-title" href="#:echoe :echoerr">Note:</a>
:echoe[rr] {expr1} ..	Echo the expression(s) as an error message, saving the
message in the [message-history](#message-history).  When used in a
script or function the line number will be added.
Spaces are placed between the arguments as with the
`:echomsg` command.  When used inside a try conditional,
the message is raised as an error exception instead
(see [try-echoerr](#try-echoerr)).
Example:
```
:echoerr "This script just failed!"

```
			If you just want a highlighted message use `:echohl`.
And to get a beep:
```
:exe "normal \<Esc>"

```

### <a id=":eval" class="section-title" href="#:eval">Note:</a>
:eval {expr}		Evaluate {expr} and discard the result.  Example:
```
:eval Getlist()->Filter()->append('$')


```
			The expression is supposed to have a side effect,
since the resulting value is not used.  In the example
the `append()` call appends the List with text to the
buffer.  This is similar to `:call` but works with any
expression.

The command can be shortened to `:ev` or `:eva`, but
these are hard to recognize and therefore not to be
used.

The command cannot be followed by "|" and another
command, since "|" is seen as part of the expression.


### <a id=":exe :execute" class="section-title" href="#:exe :execute">Note:</a>
:exe[cute] {expr1} ..	Executes the string that results from the evaluation
of {expr1} as an Ex command.
Multiple arguments are concatenated, with a space in
between.  To avoid the extra space use the ".."
operator to concatenate strings into one argument.
{expr1} is used as the processed command, command line
editing keys are not recognized.
Cannot be followed by a comment.
Examples:
```
:execute "buffer" nextbuf
:execute "normal" count .. "w"

```

":execute" can be used to append a command to commands
that don't accept a '|'.  Example:
```
:execute '!ls' | echo "theend"


```
			":execute" is also a nice way to avoid having to type
control characters in a Vim script for a ":normal"
command:
```
:execute "normal ixxx\<Esc>"

```
			This has an <Esc> character, see [expr-string](#expr-string).

Be careful to correctly escape special characters in
file names.  The [fnameescape()](#fnameescape()) function can be used
for Vim commands, [shellescape()| for |:!](#shellescape()| for |:!) commands.
Examples:
```
:execute "e " .. fnameescape(filename)
:execute "!ls " .. shellescape(filename, 1)

```

Note: The executed string may be any command-line, but
starting or ending "if", "while" and "for" does not
always work, because when commands are skipped the
":execute" is not evaluated and Vim loses track of
where blocks start and end.  Also "break" and
"continue" should not be inside ":execute".
This example does not work, because the ":execute" is
not evaluated and Vim does not see the "while", and
gives an error for finding an ":endwhile":
```
:if 0
: execute 'while i > 5'
:  echo "test"
: endwhile
:endif

```

It is allowed to have a "while" or "if" command
completely in the executed string:
```
:execute 'while i < 5 [ echo i | let i = i + 1 ](# echo i | let i = i + 1 ) endwhile'

```


### <a id=":exe-comment" class="section-title" href="#:exe-comment">Note:</a>
":execute", ":echo" and ":echon" cannot be followed by
a comment directly, because they see the '"' as the
start of a string.  But, you can use '|' followed by a
comment.  Example:
```
:echo "foo" | "this is a comment


## <a id="exception-handling" class="section-title" href="#exception-handling">8. Exception Handling</a> 

The Vim script language comprises an exception handling feature.  This section
explains how it can be used in a Vim script.

Exceptions may be raised by Vim on an error or on interrupt, see
[catch-errors| and |catch-interrupt](#catch-errors| and |catch-interrupt).  You can also explicitly throw an
exception by using the ":throw" command, see [throw-catch](#throw-catch).


### <a id="try-conditionals" class="section-title" href="#try-conditionals">Try Conditionals</a>

Exceptions can be caught or can cause cleanup code to be executed.  You can
use a try conditional to specify catch clauses (that catch exceptions) and/or
a finally clause (to be executed for cleanup).
A try conditional begins with a [:try](#:try) command and ends at the matching
[:endtry| command.  In between, you can use a |:catch](#:endtry| command.  In between, you can use a |:catch) command to start
a catch clause, or a [:finally](#:finally) command to start a finally clause.  There may
be none or multiple catch clauses, but there is at most one finally clause,
which must not be followed by any catch clauses.  The lines before the catch
clauses and the finally clause is called a try block.
```

:try
:	...
:	...				TRY BLOCK
:	...
:catch /{pattern}/
:	...
:	...				CATCH CLAUSE
:	...
:catch /{pattern}/
:	...
:	...				CATCH CLAUSE
:	...
:finally
:	...
:	...				FINALLY CLAUSE
:	...
:endtry

The try conditional allows to watch code for exceptions and to take the
appropriate actions.  Exceptions from the try block may be caught.  Exceptions
from the try block and also the catch clauses may cause cleanup actions.
When no exception is thrown during execution of the try block, the control
is transferred to the finally clause, if present.  After its execution, the
script continues with the line following the ":endtry".
When an exception occurs during execution of the try block, the remaining
lines in the try block are skipped.  The exception is matched against the
patterns specified as arguments to the ":catch" commands.  The catch clause
after the first matching ":catch" is taken, other catch clauses are not
executed.  The catch clause ends when the next ":catch", ":finally", or
":endtry" command is reached - whatever is first.  Then, the finally clause
(if present) is executed.  When the ":endtry" is reached, the script execution
continues in the following line as usual.
When an exception that does not match any of the patterns specified by the
":catch" commands is thrown in the try block, the exception is not caught by
that try conditional and none of the catch clauses is executed.  Only the
finally clause, if present, is taken.  The exception pends during execution of
the finally clause.  It is resumed at the ":endtry", so that commands after
the ":endtry" are not executed and the exception might be caught elsewhere,
see [try-nesting](#try-nesting).
When during execution of a catch clause another exception is thrown, the
remaining lines in that catch clause are not executed.  The new exception is
not matched against the patterns in any of the ":catch" commands of the same
try conditional and none of its catch clauses is taken.  If there is, however,
a finally clause, it is executed, and the exception pends during its
execution.  The commands following the ":endtry" are not executed.  The new
exception might, however, be caught elsewhere, see [try-nesting](#try-nesting).
When during execution of the finally clause (if present) an exception is
thrown, the remaining lines in the finally clause are skipped.  If the finally
clause has been taken because of an exception from the try block or one of the
catch clauses, the original (pending) exception is discarded.  The commands
following the ":endtry" are not executed, and the exception from the finally
clause is propagated and can be caught elsewhere, see [try-nesting](#try-nesting).

The finally clause is also executed, when a ":break" or ":continue" for
a ":while" loop enclosing the complete try conditional is executed from the
try block or a catch clause.  Or when a ":return" or ":finish" is executed
from the try block or a catch clause of a try conditional in a function or
sourced script, respectively.  The ":break", ":continue", ":return", or
":finish" pends during execution of the finally clause and is resumed when the
":endtry" is reached.  It is, however, discarded when an exception is thrown
from the finally clause.
When a ":break" or ":continue" for a ":while" loop enclosing the complete
try conditional or when a ":return" or ":finish" is encountered in the finally
clause, the rest of the finally clause is skipped, and the ":break",
":continue", ":return" or ":finish" is executed as usual.  If the finally
clause has been taken because of an exception or an earlier ":break",
":continue", ":return", or ":finish" from the try block or a catch clause,
this pending exception or command is discarded.

For examples see [throw-catch| and |try-finally](#throw-catch| and |try-finally).


### <a id="try-nesting" class="section-title" href="#try-nesting">Nesting	of Try Conditionals</a>

Try conditionals can be nested arbitrarily.  That is, a complete try
conditional can be put into the try block, a catch clause, or the finally
clause of another try conditional.  If the inner try conditional does not
catch an exception thrown in its try block or throws a new exception from one
of its catch clauses or its finally clause, the outer try conditional is
checked according to the rules above.  If the inner try conditional is in the
try block of the outer try conditional, its catch clauses are checked, but
otherwise only the finally clause is executed.  It does not matter for
nesting, whether the inner try conditional is directly contained in the outer
one, or whether the outer one sources a script or calls a function containing
the inner try conditional.

When none of the active try conditionals catches an exception, just their
finally clauses are executed.  Thereafter, the script processing terminates.
An error message is displayed in case of an uncaught exception explicitly
thrown by a ":throw" command.  For uncaught error and interrupt exceptions
implicitly raised by Vim, the error message(s) or interrupt message are shown
as usual.

For examples see [throw-catch](#throw-catch).


### <a id="except-examine" class="section-title" href="#except-examine">Examining Exception Handling Code</a>

Exception handling code can get tricky.  If you are in doubt what happens, set
'verbose' to 13 or use the ":13verbose" command modifier when sourcing your
script file.  Then you see when an exception is thrown, discarded, caught, or
finished.  When using a verbosity level of at least 14, things pending in
a finally clause are also shown.  This information is also given in debug mode
(see [debug-scripts](#debug-scripts)).


### <a id="throw-catch" class="section-title" href="#throw-catch">Throwing and Catching Exceptions</a>

You can throw any number or string as an exception.  Use the [:throw](#:throw) command
and pass the value to be thrown as argument:
```
:throw 4711
:throw "string"
### <a id="throw-expression" class="section-title" href="#throw-expression"><</a>
You can also specify an expression argument.  The expression is then evaluated
first, and the result is thrown:
```
:throw 4705 + strlen("string")
:throw strpart("strings", 0, 6)

An exception might be thrown during evaluation of the argument of the ":throw"
command.  Unless it is caught there, the expression evaluation is abandoned.
The ":throw" command then does not throw a new exception.
Example:
```

:function! Foo(arg)
:  try
:    throw a:arg
:  catch /foo/
:  endtry
:  return 1
:endfunction
:
:function! Bar()
:  echo "in Bar"
:  return 4710
:endfunction
:
:throw Foo("arrgh") + Bar()

This throws "arrgh", and "in Bar" is not displayed since Bar() is not
executed.
```
:throw Foo("foo") + Bar()
however displays "in Bar" and throws 4711.

Any other command that takes an expression as argument might also be
abandoned by an (uncaught) exception during the expression evaluation.  The
exception is then propagated to the caller of the command.
Example:
```

:if Foo("arrgh")
:  echo "then"
:else
:  echo "else"
:endif

Here neither of "then" or "else" is displayed.

### <a id="catch-order" class="section-title" href="#catch-order">Note:</a>
Exceptions can be caught by a try conditional with one or more [:catch](#:catch)
commands, see [try-conditionals](#try-conditionals).   The values to be caught by each ":catch"
command can be specified as a pattern argument.  The subsequent catch clause
gets executed when a matching exception is caught.
Example:
```

:function! Foo(value)
:  try
:    throw a:value
:  catch /^\d\+$/
:    echo "Number thrown"
### <a id="catch /./" class="section-title" href="#catch /./">	:</a>
:    echo "String thrown"
:  endtry
:endfunction
:
:call Foo(0x1267)
:call Foo('string')

The first call to Foo() displays "Number thrown", the second "String thrown".
An exception is matched against the ":catch" commands in the order they are
specified.  Only the first match counts.  So you should place the more
specific ":catch" first.  The following order does not make sense:
```

### <a id="catch /./" class="section-title" href="#catch /./">	:</a>
:    echo "String thrown"
:  catch /^\d\+$/
:    echo "Number thrown"

The first ":catch" here matches always, so that the second catch clause is
never taken.

### <a id="throw-variables" class="section-title" href="#throw-variables">Note:</a>
If you catch an exception by a general pattern, you may access the exact value
in the variable [v:exception](#v:exception):
```

:  catch /^\d\+$/
:    echo "Number thrown.  Value is" v:exception

You may also be interested where an exception was thrown.  This is stored in
[v:throwpoint](#v:throwpoint).  Note that "v:exception" and "v:throwpoint" are valid for the
exception most recently caught as long it is not finished.
Example:
```

:function! Caught()
:  if v:exception != ""
:    echo 'Caught "' .. v:exception .. '" in ' .. v:throwpoint
:  else
:    echo 'Nothing caught'
:  endif
:endfunction
:
:function! Foo()
:  try
:    try
:      try
:	 throw 4711
:      finally
:	 call Caught()
:      endtry
### <a id="catch /./" class="section-title" href="#catch /./">	:</a>
:      call Caught()
:      throw "oops"
:    endtry
### <a id="catch /./" class="section-title" href="#catch /./">	:</a>
:    call Caught()
:  finally
:    call Caught()
:  endtry
:endfunction
:
:call Foo()

This displays
```

Nothing caught
Caught "4711" in function Foo, line 4
Caught "oops" in function Foo, line 10
Nothing caught

A practical example:  The following command ":LineNumber" displays the line
number in the script or function where it has been used:
```

:function! LineNumber()
### <a id="return substitute(v:throwpoint, '.\D\(\d\+\).', '\1', "")" class="section-title" href="#return substitute(v:throwpoint, '.\D\(\d\+\).', '\1', "")">	:</a>
:endfunction
:command! LineNumber try [ throw "" | catch | echo LineNumber() ](# throw "" | catch | echo LineNumber() ) endtry

```

### <a id="try-nested" class="section-title" href="#try-nested">Note:</a>
An exception that is not caught by a try conditional can be caught by
a surrounding try conditional:
```

:try
:  try
:    throw "foo"
:  catch /foobar/
:    echo "foobar"
:  finally
:    echo "inner finally"
:  endtry
:catch /foo/
:  echo "foo"
:endtry

The inner try conditional does not catch the exception, just its finally
clause is executed.  The exception is then caught by the outer try
conditional.  The example displays "inner finally" and then "foo".

### <a id="throw-from-catch" class="section-title" href="#throw-from-catch">Note:</a>
You can catch an exception and throw a new one to be caught elsewhere from the
catch clause:
```

:function! Foo()
:  throw "foo"
:endfunction
:
:function! Bar()
:  try
:    call Foo()
:  catch /foo/
:    echo "Caught foo, throw bar"
:    throw "bar"
:  endtry
:endfunction
:
:try
:  call Bar()
:catch /.*/
:  echo "Caught" v:exception
:endtry

This displays "Caught foo, throw bar" and then "Caught bar".

### <a id="rethrow" class="section-title" href="#rethrow">Note:</a>
There is no real rethrow in the Vim script language, but you may throw
"v:exception" instead:
```

:function! Bar()
:  try
:    call Foo()
### <a id="catch /./" class="section-title" href="#catch /./">	:</a>
:    echo "Rethrow" v:exception
:    throw v:exception
:  endtry
:endfunction
### <a id="try-echoerr" class="section-title" href="#try-echoerr"><</a>
Note that this method cannot be used to "rethrow" Vim error or interrupt
exceptions, because it is not possible to fake Vim internal exceptions.
Trying so causes an error exception.  You should throw your own exception
denoting the situation.  If you want to cause a Vim error exception containing
the original error exception value, you can use the [:echoerr](#:echoerr) command:
```

:try
:  try
:    asdf
### <a id="catch /./" class="section-title" href="#catch /./">	:</a>
:    echoerr v:exception
:  endtry
:catch /.*/
:  echo v:exception
:endtry

This code displays

Vim(echoerr):Vim:E492: Not an editor command:	asdf ~


### <a id="try-finally" class="section-title" href="#try-finally">Cleanup Code</a>

Scripts often change global settings and restore them at their end.  If the
user however interrupts the script by pressing CTRL-C, the settings remain in
an inconsistent state.  The same may happen to you in the development phase of
a script when an error occurs or you explicitly throw an exception without
catching it.  You can solve these problems by using a try conditional with
a finally clause for restoring the settings.  Its execution is guaranteed on
normal control flow, on error, on an explicit ":throw", and on interrupt.
(Note that errors and interrupts from inside the try conditional are converted
to exceptions.  When not caught, they terminate the script after the finally
clause has been executed.)
Example:
```

:try
:  let s:saved_ts = &ts
:  set ts=17
:
:  " Do the hard work here.
:
:finally
:  let &ts = s:saved_ts
:  unlet s:saved_ts
:endtry

This method should be used locally whenever a function or part of a script
changes global settings which need to be restored on failure or normal exit of
that function or script part.

### <a id="break-finally" class="section-title" href="#break-finally">Note:</a>
Cleanup code works also when the try block or a catch clause is left by
a ":continue", ":break", ":return", or ":finish".
Example:
```

:let first = 1
:while 1
:  try
:    if first
:      echo "first"
:      let first = 0
:      continue
:    else
:      throw "second"
:    endif
### <a id="catch /./" class="section-title" href="#catch /./">	:</a>
:    echo v:exception
:    break
:  finally
:    echo "cleanup"
:  endtry
:  echo "still in while"
:endwhile
:echo "end"

This displays "first", "cleanup", "second", "cleanup", and "end".
```

:function! Foo()
:  try
:    return 4711
:  finally
:    echo "cleanup\n"
:  endtry
:  echo "Foo still active"
:endfunction
:
:echo Foo() "returned by Foo"

This displays "cleanup" and "4711 returned by Foo".  You don't need to add an
extra ":return" in the finally clause.  (Above all, this would override the
return value.)

### <a id="except-from-finally" class="section-title" href="#except-from-finally">Note:</a>
Using either of ":continue", ":break", ":return", ":finish", or ":throw" in
a finally clause is possible, but not recommended since it abandons the
cleanup actions for the try conditional.  But, of course, interrupt and error
exceptions might get raised from a finally clause.
Example where an error in the finally clause stops an interrupt from
working correctly:
```

:try
:  try
:    echo "Press CTRL-C for interrupt"
:    while 1
:    endwhile
:  finally
:    unlet novar
:  endtry
:catch /novar/
:endtry
:echo "Script still running"
:sleep 1

If you need to put commands that could fail into a finally clause, you should
think about catching or ignoring the errors in these commands, see
[catch-errors| and |ignore-errors](#catch-errors| and |ignore-errors).


### <a id="catch-errors" class="section-title" href="#catch-errors">Catching Errors</a>

If you want to catch specific errors, you just have to put the code to be
watched in a try block and add a catch clause for the error message.  The
presence of the try conditional causes all errors to be converted to an
exception.  No message is displayed and [v:errmsg](#v:errmsg) is not set then.  To find
the right pattern for the ":catch" command, you have to know how the format of
the error exception is.
Error exceptions have the following format:
```

Vim({cmdname}):{errmsg}
or
```
Vim:{errmsg}

{cmdname} is the name of the command that failed; the second form is used when
the command name is not known.  {errmsg} is the error message usually produced
when the error occurs outside try conditionals.  It always begins with
a capital "E", followed by a two or three-digit error number, a colon, and
a space.

Examples:

The command
```
:unlet novar
normally produces the error message
```
E108: No such variable: "novar"
which is converted inside try conditionals to an exception
```
Vim(unlet):E108: No such variable: "novar"

The command
```
:dwim
normally produces the error message
```
E492: Not an editor command: dwim
which is converted inside try conditionals to an exception
```
Vim:E492: Not an editor command: dwim

You can catch all ":unlet" errors by a
```
:catch /^Vim(unlet):/
or all errors for misspelled command names by a
```
:catch /^Vim:E492:/

Some error messages may be produced by different commands:
```
:function nofunc
and
```
:delfunction nofunc
both produce the error message
```
E128: Function name must start with a capital: nofunc
which is converted inside try conditionals to an exception
```
Vim(function):E128: Function name must start with a capital: nofunc
or
```
Vim(delfunction):E128: Function name must start with a capital: nofunc
respectively.  You can catch the error by its number independently on the
command that caused it if you use the following pattern:
```
:catch /^Vim(\a\+):E128:/

Some commands like
```
:let x = novar
produce multiple error messages, here:
```
E121: Undefined variable: novar
E15: Invalid expression:  novar
Only the first is used for the exception value, since it is the most specific
one (see [except-several-errors](#except-several-errors)).  So you can catch it by
```
:catch /^Vim(\a\+):E121:/

You can catch all errors related to the name "nofunc" by
```
:catch /\<nofunc\>/

You can catch all Vim errors in the ":write" and ":read" commands by
```
:catch /^Vim(\(write\|read\)):E\d\+:/

You can catch all Vim errors by the pattern
```
:catch /^Vim\((\a\+)\)\=:E\d\+:/

```

### <a id="catch-text" class="section-title" href="#catch-text">Note:</a>
NOTE: You should never catch the error message text itself:
```
:catch /No such variable/
only works in the English locale, but not when the user has selected
a different language by the [:language](#:language) command.  It is however helpful to
cite the message text in a comment:
```
:catch /^Vim(\a\+):E108:/   " No such variable


### <a id="ignore-errors" class="section-title" href="#ignore-errors">Ignoring Errors</a>

You can ignore errors in a specific Vim command by catching them locally:
```

:try
:  write
:catch
:endtry

But you are strongly recommended NOT to use this simple form, since it could
catch more than you want.  With the ":write" command, some autocommands could
be executed and cause errors not related to writing, for instance:
```

:au BufWritePre * unlet novar

There could even be such errors you are not responsible for as a script
writer: a user of your script might have defined such autocommands.  You would
then hide the error from the user.
It is much better to use
```

:try
:  write
:catch /^Vim(write):/
:endtry

which only catches real write errors.  So catch only what you'd like to ignore
intentionally.

For a single command that does not cause execution of autocommands, you could
even suppress the conversion of errors to exceptions by the ":silent!"
command:
```
:silent! nunmap k
This works also when a try conditional is active.


### <a id="catch-interrupt" class="section-title" href="#catch-interrupt">Catching Interrupts</a>

When there are active try conditionals, an interrupt (CTRL-C) is converted to
the exception "Vim:Interrupt".  You can catch it like every exception.  The
script is not terminated, then.
Example:
```

:function! TASK1()
:  sleep 10
:endfunction

:function! TASK2()
:  sleep 20
:endfunction

:while 1
:  let command = input("Type a command: ")
:  try
:    if command == ""
:      continue
:    elseif command == "END"
:      break
:    elseif command == "TASK1"
:      call TASK1()
:    elseif command == "TASK2"
:      call TASK2()
:    else
:      echo "\nIllegal command:" command
:      continue
:    endif
:  catch /^Vim:Interrupt$/
:    echo "\nCommand interrupted"
:    " Caught the interrupt.  Continue with next prompt.
:  endtry
:endwhile

You can interrupt a task here by pressing CTRL-C; the script then asks for
a new command.  If you press CTRL-C at the prompt, the script is terminated.

For testing what happens when CTRL-C would be pressed on a specific line in
your script, use the debug mode and execute the [>quit| or |>interrupt](#>quit| or |>interrupt)
command on that line.  See [debug-scripts](#debug-scripts).


### <a id="catch-all" class="section-title" href="#catch-all">Catching All</a>

The commands
```

:catch /.*/
:catch //
:catch

catch everything, error exceptions, interrupt exceptions and exceptions
explicitly thrown by the [:throw](#:throw) command.  This is useful at the top level of
a script in order to catch unexpected things.
Example:
```

:try
:
:  " do the hard work here
:
:catch /MyException/
:
:  " handle known problem
:
:catch /^Vim:Interrupt$/
:    echo "Script interrupted"
:catch /.*/
:  echo "Internal error (" .. v:exception .. ")"
:  echo " - occurred at " .. v:throwpoint
:endtry
:" end of script

Note: Catching all might catch more things than you want.  Thus, you are
strongly encouraged to catch only for problems that you can really handle by
specifying a pattern argument to the ":catch".
Example: Catching all could make it nearly impossible to interrupt a script
by pressing CTRL-C:
```

:while 1
:  try
:    sleep 1
:  catch
:  endtry
:endwhile


### <a id="except-autocmd" class="section-title" href="#except-autocmd">Exceptions and Autocommands</a>

Exceptions may be used during execution of autocommands.  Example:
```

:autocmd User x try
:autocmd User x   throw "Oops!"
:autocmd User x catch
:autocmd User x   echo v:exception
:autocmd User x endtry
:autocmd User x throw "Arrgh!"
:autocmd User x echo "Should not be displayed"
:
:try
:  doautocmd User x
:catch
:  echo v:exception
:endtry

This displays "Oops!" and "Arrgh!".

### <a id="except-autocmd-Pre" class="section-title" href="#except-autocmd-Pre">Note:</a>
For some commands, autocommands get executed before the main action of the
command takes place.  If an exception is thrown and not caught in the sequence
of autocommands, the sequence and the command that caused its execution are
abandoned and the exception is propagated to the caller of the command.
Example:
```

:autocmd BufWritePre * throw "FAIL"
:autocmd BufWritePre * echo "Should not be displayed"
:
:try
:  write
:catch
:  echo "Caught:" v:exception "from" v:throwpoint
:endtry

Here, the ":write" command does not write the file currently being edited (as
you can see by checking 'modified'), since the exception from the BufWritePre
autocommand abandons the ":write".  The exception is then caught and the
script displays:
```

Caught: FAIL from BufWrite Auto commands for "*"

```

### <a id="except-autocmd-Post" class="section-title" href="#except-autocmd-Post">Note:</a>
For some commands, autocommands get executed after the main action of the
command has taken place.  If this main action fails and the command is inside
an active try conditional, the autocommands are skipped and an error exception
is thrown that can be caught by the caller of the command.
Example:
```

:autocmd BufWritePost * echo "File successfully written!"
:
:try
:  write /i/m/p/o/s/s/i/b/l/e
:catch
:  echo v:exception
:endtry

This just displays:
```

Vim(write):E212: Can't open file for writing (/i/m/p/o/s/s/i/b/l/e)

If you really need to execute the autocommands even when the main action
fails, trigger the event from the catch clause.
Example:
```

### <a id=" set noreadonly" class="section-title" href="# set noreadonly">	:autocmd BufWritePre</a>
:autocmd BufWritePost * set readonly
:
:try
:  write /i/m/p/o/s/s/i/b/l/e
:catch
:  doautocmd BufWritePost /i/m/p/o/s/s/i/b/l/e
:endtry

```

You can also use ":silent!":
```

:let x = "ok"
:let v:errmsg = ""
:autocmd BufWritePost * if v:errmsg != ""
:autocmd BufWritePost *   let x = "after fail"
:autocmd BufWritePost * endif
:try
:  silent! write /i/m/p/o/s/s/i/b/l/e
:catch
:endtry
:echo x

This displays "after fail".

If the main action of the command does not fail, exceptions from the
autocommands will be catchable by the caller of the command:
```

:autocmd BufWritePost * throw ":-("
:autocmd BufWritePost * echo "Should not be displayed"
:
:try
:  write
:catch
:  echo v:exception
:endtry

```

### <a id="except-autocmd-Cmd" class="section-title" href="#except-autocmd-Cmd">Note:</a>
For some commands, the normal action can be replaced by a sequence of
autocommands.  Exceptions from that sequence will be catchable by the caller
of the command.
Example:  For the ":write" command, the caller cannot know whether the file
had actually been written when the exception occurred.  You need to tell it in
some way.
```

:if !exists("cnt")
:  let cnt = 0
:
### <a id="autocmd BufWriteCmd  if &modified" class="section-title" href="#autocmd BufWriteCmd  if &modified">	:</a>
### <a id="autocmd BufWriteCmd " class="section-title" href="#autocmd BufWriteCmd ">	:</a>
### <a id="autocmd BufWriteCmd " class="section-title" href="#autocmd BufWriteCmd ">	:</a>
### <a id="autocmd BufWriteCmd " class="section-title" href="#autocmd BufWriteCmd ">	:</a>
### <a id="autocmd BufWriteCmd " class="section-title" href="#autocmd BufWriteCmd ">	:</a>
### <a id="autocmd BufWriteCmd " class="section-title" href="#autocmd BufWriteCmd ">	:</a>
### <a id="autocmd BufWriteCmd " class="section-title" href="#autocmd BufWriteCmd ">	:</a>
### <a id="autocmd BufWriteCmd " class="section-title" href="#autocmd BufWriteCmd ">	:</a>
### <a id="autocmd BufWriteCmd " class="section-title" href="#autocmd BufWriteCmd ">	:</a>
### <a id="autocmd BufWriteCmd " class="section-title" href="#autocmd BufWriteCmd ">	:</a>
### <a id="autocmd BufWriteCmd  endif" class="section-title" href="#autocmd BufWriteCmd  endif">	:</a>
:endif
:
:try
:	write
:catch /^BufWriteCmdError$/
:  if &modified
:    echo "Error on writing (file contents not changed)"
:  else
:    echo "Error after writing"
:  endif
:catch /^Vim(write):/
:    echo "Error on writing"
:endtry

When this script is sourced several times after making changes, it displays
first
```
File successfully written!
then
```
Error on writing (file contents not changed)
then
```
Error after writing
etc.

### <a id="except-autocmd-ill" class="section-title" href="#except-autocmd-ill">Note:</a>
You cannot spread a try conditional over autocommands for different events.
The following code is ill-formed:
```

### <a id=" try" class="section-title" href="# try">	:autocmd BufWritePre</a>
:
:autocmd BufWritePost * catch
:autocmd BufWritePost *   echo v:exception
:autocmd BufWritePost * endtry
:
:write


EXCEPTION HIERARCHIES AND PARAMETERIZED EXCEPTIONS	*except-hier-param*

Some programming languages allow to use hierarchies of exception classes or to
pass additional information with the object of an exception class.  You can do
similar things in Vim.
In order to throw an exception from a hierarchy, just throw the complete
class name with the components separated by a colon, for instance throw the
string "EXCEPT:MATHERR:OVERFLOW" for an overflow in a mathematical library.
When you want to pass additional information with your exception class, add
it in parentheses, for instance throw the string "EXCEPT:IO:WRITEERR(myfile)"
for an error when writing "myfile".
With the appropriate patterns in the ":catch" command, you can catch for
base classes or derived classes of your hierarchy.  Additional information in
parentheses can be cut out from [v:exception](#v:exception) with the ":substitute" command.
Example:
```

:function! CheckRange(a, func)
:  if a:a < 0
:    throw "EXCEPT:MATHERR:RANGE(" .. a:func .. ")"
:  endif
:endfunction
:
:function! Add(a, b)
:  call CheckRange(a:a, "Add")
:  call CheckRange(a:b, "Add")
:  let c = a:a + a:b
:  if c < 0
:    throw "EXCEPT:MATHERR:OVERFLOW"
:  endif
:  return c
:endfunction
:
:function! Div(a, b)
:  call CheckRange(a:a, "Div")
:  call CheckRange(a:b, "Div")
:  if (a:b == 0)
:    throw "EXCEPT:MATHERR:ZERODIV"
:  endif
:  return a:a / a:b
:endfunction
:
:function! Write(file)
:  try
:    execute "write" fnameescape(a:file)
:  catch /^Vim(write):/
:    throw "EXCEPT:IO(" .. getcwd() .. ", " .. a:file .. "):WRITEERR"
:  endtry
:endfunction
:
:try
:
:  " something with arithmetic and I/O
:
:catch /^EXCEPT:MATHERR:RANGE/
### <a id="let function = substitute(v:exception, '.(\(\a\+\)).', '\1', "")" class="section-title" href="#let function = substitute(v:exception, '.(\(\a\+\)).', '\1', "")">	:</a>
:  echo "Range error in" function
:
:catch /^EXCEPT:MATHERR/	" catches OVERFLOW and ZERODIV
:  echo "Math error"
:
:catch /^EXCEPT:IO/
### <a id="let dir = substitute(v:exception, '.(\(.\+\),\s.\+).', '\1', "")" class="section-title" href="#let dir = substitute(v:exception, '.(\(.\+\),\s.\+).', '\1', "")">	:</a>
### <a id="let file = substitute(v:exception, '.(.\+,\s\(.\+\)).', '\1', "")" class="section-title" href="#let file = substitute(v:exception, '.(.\+,\s\(.\+\)).', '\1', "")">	:</a>
:  if file !~ '^/'
:    let file = dir .. "/" .. file
:  endif
:  echo 'I/O error for "' .. file .. '"'
:
:catch /^EXCEPT/
:  echo "Unspecified error"
:
:endtry

The exceptions raised by Vim itself (on error or when pressing CTRL-C) use
a flat hierarchy:  they are all in the "Vim" class.  You cannot throw yourself
exceptions with the "Vim" prefix; they are reserved for Vim.
Vim error exceptions are parameterized with the name of the command that
failed, if known.  See [catch-errors](#catch-errors).


PECULIARITIES
### <a id="except-compat" class="section-title" href="#except-compat">Note:</a>
The exception handling concept requires that the command sequence causing the
exception is aborted immediately and control is transferred to finally clauses
and/or a catch clause.

In the Vim script language there are cases where scripts and functions
continue after an error: in functions without the "abort" flag or in a command
after ":silent!", control flow goes to the following line, and outside
functions, control flow goes to the line following the outermost ":endwhile"
or ":endif".  On the other hand, errors should be catchable as exceptions
(thus, requiring the immediate abortion).

This problem has been solved by converting errors to exceptions and using
immediate abortion (if not suppressed by ":silent!") only when a try
conditional is active.  This is no restriction since an (error) exception can
be caught only from an active try conditional.  If you want an immediate
termination without catching the error, just use a try conditional without
catch clause.  (You can cause cleanup code being executed before termination
by specifying a finally clause.)

When no try conditional is active, the usual abortion and continuation
behavior is used instead of immediate abortion.  This ensures compatibility of
scripts written for Vim 6.1 and earlier.

However, when sourcing an existing script that does not use exception handling
commands (or when calling one of its functions) from inside an active try
conditional of a new script, you might change the control flow of the existing
script on error.  You get the immediate abortion on error and can catch the
error in the new script.  If however the sourced script suppresses error
messages by using the ":silent!" command (checking for errors by testing
[v:errmsg](#v:errmsg) if appropriate), its execution path is not changed.  The error is
not converted to an exception.  (See [:silent](#:silent).)  So the only remaining cause
where this happens is for scripts that don't care about errors and produce
error messages.  You probably won't want to use such code from your new
scripts.

### <a id="except-syntax-err" class="section-title" href="#except-syntax-err">Note:</a>
Syntax errors in the exception handling commands are never caught by any of
the ":catch" commands of the try conditional they belong to.  Its finally
clauses, however, is executed.
Example:
```

:try
:  try
:    throw 4711
:  catch /\(/
:    echo "in catch with syntax error"
:  catch
:    echo "inner catch-all"
:  finally
:    echo "inner finally"
:  endtry
:catch
:  echo 'outer catch-all caught "' .. v:exception .. '"'
:  finally
:    echo "outer finally"
:endtry

This displays:
```
inner finally
outer catch-all caught "Vim(catch):E54: Unmatched \("
outer finally
The original exception is discarded and an error exception is raised, instead.

### <a id="except-single-line" class="section-title" href="#except-single-line">Note:</a>
The ":try", ":catch", ":finally", and ":endtry" commands can be put on
a single line, but then syntax errors may make it difficult to recognize the
"catch" line, thus you better avoid this.
Example:
```
:try [ unlet! foo # | catch ](# unlet! foo # | catch ) endtry
raises an error exception for the trailing characters after the ":unlet!"
argument, but does not see the ":catch" and ":endtry" commands, so that the
error exception is discarded and the "E488: Trailing characters" message gets
displayed.

### <a id="except-several-errors" class="section-title" href="#except-several-errors">Note:</a>
When several errors appear in a single command, the first error message is
usually the most specific one and therefore converted to the error exception.
Example:
```
echo novar
causes
```
E121: Undefined variable: novar
E15: Invalid expression: novar
The value of the error exception inside try conditionals is:
```
Vim(echo):E121: Undefined variable: novar
### <a id="except-syntax-error" class="section-title" href="#except-syntax-error"><</a>
But when a syntax error is detected after a normal error in the same command,
the syntax error is used for the exception being thrown.
Example:
```
unlet novar #
causes
```
E108: No such variable: "novar"
E488: Trailing characters
The value of the error exception inside try conditionals is:
```
Vim(unlet):E488: Trailing characters
This is done because the syntax error might change the execution path in a way
not intended by the user.  Example:
```
try
try [ unlet novar # | catch | echo v:exception ](# unlet novar # | catch | echo v:exception ) endtry
catch /.*/
echo "outer catch:" v:exception
endtry
This displays "outer catch: Vim(unlet):E488: Trailing characters", and then
a "E600: Missing :endtry" error message is given, see [except-single-line](#except-single-line).


## <a id="eval-examples" class="section-title" href="#eval-examples">9. Examples</a> 

Printing in Binary ~
```
:" The function Nr2Bin() returns the binary string representation of a number.
:func Nr2Bin(nr)
:  let n = a:nr
:  let r = ""
:  while n
:    let r = '01'[n % 2] .. r
:    let n = n / 2
:  endwhile
:  return r
:endfunc

:" The function String2Bin() converts each character in a string to a
:" binary string, separated with dashes.
:func String2Bin(str)
:  let out = ''
:  for ix in range(strlen(a:str))
:    let out = out .. '-' .. Nr2Bin(char2nr(a:str[ix]))
:  endfor
:  return out[1:]
:endfunc

Example of its use:
```
:echo Nr2Bin(32)
result: "100000"
```
:echo String2Bin("32")
result: "110011-110010"


Sorting lines ~

This example sorts lines with a specific compare function.
```

:func SortBuffer()
:  let lines = getline(1, '$')
:  call sort(lines, function("Strcmp"))
:  call setline(1, lines)
:endfunction

As a one-liner:
```
:call setline(1, sort(getline(1, '$'), function("Strcmp")))

```


scanf() replacement ~
### <a id="sscanf" class="section-title" href="#sscanf">Note:</a>
There is no sscanf() function in Vim.  If you need to extract parts from a
line, you can use matchstr() and substitute() to do it.  This example shows
how to get the file name, line number and column number out of a line like
"foobar.txt, 123, 45".
```
:" Set up the match bit
### <a id=":let mx='\(\f\+\),\s\(\d\+\),\s\(\d\+\)'" class="section-title" href="#:let mx='\(\f\+\),\s\(\d\+\),\s\(\d\+\)'">Note:</a>
:"get the part matching the whole expression
:let l = matchstr(line, mx)
:"get each item out of the match
:let file = substitute(l, mx, '\1', '')
:let lnum = substitute(l, mx, '\2', '')
:let col = substitute(l, mx, '\3', '')

The input is in the variable "line", the results in the variables "file",
"lnum" and "col". (idea from Michael Geddes)


getting the scriptnames in a Dictionary ~
### <a id="scriptnames-dictionary" class="section-title" href="#scriptnames-dictionary">Note:</a>
The [:scriptnames](#:scriptnames) command can be used to get a list of all script files that
have been sourced.  There is no equivalent function or variable for this
(because it's rarely needed).  In case you need to manipulate the list this
code can be used:
```
" Get the output of ":scriptnames" in the scriptnames_output variable.
let scriptnames_output = ''
redir => scriptnames_output
silent scriptnames
redir END

" Split the output into lines and parse each line.	Add an entry to the
" "scripts" dictionary.
let scripts = {}
for line in split(scriptnames_output, "\n")
" Only do non-blank lines.
if line =~ '\S'
" Get the first number in the line.
let nr = matchstr(line, '\d\+')
" Get the file name, remove the script number " 123: ".
let name = substitute(line, '.\+:\s*', '', '')
" Add an item to the Dictionary
let scripts[nr] = name
endif
endfor
unlet scriptnames_output


## <a id="eval-sandbox sandbox" class="section-title" href="#eval-sandbox sandbox">The Sandbox</a> 

The 'foldexpr', 'formatexpr', 'includeexpr', 'indentexpr', 'statusline' and
'foldtext' options may be evaluated in a sandbox.  This means that you are
protected from these expressions having nasty side effects.  This gives some
safety for when these options are set from a modeline.  It is also used when
the command from a tags file is executed and for CTRL-R = in the command line.
The sandbox is also used for the [:sandbox](#:sandbox) command.

### <a id="E48" class="section-title" href="#E48">Note:</a>
These items are not allowed in the sandbox:
- changing the buffer text
- defining or changing mapping, autocommands, user commands
- setting certain options (see [option-summary](#option-summary))
### <a id="E794" class="section-title" href="#E794">	- setting certain v: variables (see [v:var](#v:var))</a>
- executing a shell command
- reading or writing a file
- jumping to another buffer or editing a file
- executing Python, Perl, etc. commands
This is not guaranteed 100% secure, but it should block most attacks.

### <a id=":san :sandbox" class="section-title" href="#:san :sandbox">Note:</a>
:san[dbox] {cmd}	Execute {cmd} in the sandbox.  Useful to evaluate an
option that may have been set from a modeline, e.g.
'foldexpr'.

### <a id="sandbox-option" class="section-title" href="#sandbox-option">Note:</a>
A few options contain an expression.  When this expression is evaluated it may
have to be done in the sandbox to avoid a security risk.  But the sandbox is
restrictive, thus this only happens when the option was set from an insecure
location.  Insecure in this context are:
- sourcing a .nvimrc or .exrc in the current directory
- while executing in the sandbox
- value coming from a modeline
- executing a function that was defined in the sandbox

Note that when in the sandbox and saving an option value and restoring it, the
option will still be marked as it was set in the sandbox.


## <a id="textlock" class="section-title" href="#textlock">Textlock</a> 

In a few situations it is not allowed to change the text in the buffer, jump
to another window and some other things that might confuse or break what Vim
is currently doing.  This mostly applies to things that happen when Vim is
actually doing something else.  For example, evaluating the 'balloonexpr' may
happen any moment the mouse cursor is resting at some position.

This is not allowed when the textlock is active:
- changing the buffer text
- jumping to another buffer or window
- editing another file
- closing a window or quitting Vim
- etc.


## <a id="expr-highlight" class="section-title" href="#expr-highlight">Command-Line Expressions Highlighting</a> 

Expressions entered by the user in [i_CTRL-R_=|, |c_CTRL-\_e|, |quote=](#i_CTRL-R_=|, |c_CTRL-\_e|, |quote=) are
highlighted by the built-in expressions parser.  It uses highlight groups
described in the table below, which may be overridden by colorschemes.
### <a id="hl-NvimInvalid" class="section-title" href="#hl-NvimInvalid">Note:</a>
Besides the "Nvim"-prefixed highlight groups described below, there are
"NvimInvalid"-prefixed highlight groups which have the same meaning but
indicate that the token contains an error or that an error occurred just
before it.  They have mostly the same hierarchy, except that (by default) in
place of any non-Nvim-prefixed group NvimInvalid linking to `Error` is used
and some other intermediate groups are present.

Group                              Default link            Colored expression ~
*hl-NvimInternalError*               None, red/red           Parser bug

*hl-NvimAssignment*                  Operator                Generic assignment
*hl-NvimPlainAssignment*             NvimAssignment          `=` in [:let](#:let)
*hl-NvimAugmentedAssignment*         NvimAssignment          Generic, `+=`/`-=`/`.=`
*hl-NvimAssignmentWithAddition*      NvimAugmentedAssignment `+=` in [:let+=](#:let+=)
*hl-NvimAssignmentWithSubtraction*   NvimAugmentedAssignment `-=` in [:let-=](#:let-=)
*hl-NvimAssignmentWithConcatenation* NvimAugmentedAssignment `.=` in [:let.=](#:let.=)

*hl-NvimOperator*                    Operator                Generic operator

*hl-NvimUnaryOperator*               NvimOperator            Generic unary op
*hl-NvimUnaryPlus*                   NvimUnaryOperator       [expr-unary-+](#expr-unary-+)
*hl-NvimUnaryMinus*                  NvimUnaryOperator       [expr-unary--](#expr-unary--)
*hl-NvimNot*                         NvimUnaryOperator       [expr-!](#expr-!)

*hl-NvimBinaryOperator*              NvimOperator            Generic binary op
*hl-NvimComparison*                  NvimBinaryOperator      Any [expr4](#expr4) operator
*hl-NvimComparisonModifier*          NvimComparison          `#`/`?` near [expr4](#expr4) op
*hl-NvimBinaryPlus*                  NvimBinaryOperator      [expr-+](#expr-+)
*hl-NvimBinaryMinus*                 NvimBinaryOperator      [expr--](#expr--)
*hl-NvimConcat*                      NvimBinaryOperator      [expr-.](#expr-.)
*hl-NvimConcatOrSubscript*           NvimConcat              [expr-.| or |expr-entry](#expr-.| or |expr-entry)
*hl-NvimOr*                          NvimBinaryOperator      [expr-barbar](#expr-barbar)
*hl-NvimAnd*                         NvimBinaryOperator      [expr-&&](#expr-&&)
*hl-NvimMultiplication*              NvimBinaryOperator      [expr-star](#expr-star)
*hl-NvimDivision*                    NvimBinaryOperator      [expr-/](#expr-/)
*hl-NvimMod*                         NvimBinaryOperator      [expr-%](#expr-%)

*hl-NvimTernary*                     NvimOperator            `?` in [expr1](#expr1)
*hl-NvimTernaryColon*                NvimTernary             `:` in [expr1](#expr1)

*hl-NvimParenthesis*                 Delimiter               Generic bracket
*hl-NvimLambda*                      NvimParenthesis         `{`/`}` in [lambda](#lambda)
*hl-NvimNestingParenthesis*          NvimParenthesis         `(`/`)` in [expr-nesting](#expr-nesting)
*hl-NvimCallingParenthesis*          NvimParenthesis         `(`/`)` in [expr-function](#expr-function)

*hl-NvimSubscript*                   NvimParenthesis         Generic subscript
*hl-NvimSubscriptBracket*            NvimSubscript           `[`/`]` in [expr-[]](#expr-[])
*hl-NvimSubscriptColon*              NvimSubscript           `:` in [expr-[:]](#expr-[:])
*hl-NvimCurly*                       NvimSubscript           `{`/`}` in
[curly-braces-names](#curly-braces-names)

*hl-NvimContainer*                   NvimParenthesis         Generic container
*hl-NvimDict*                        NvimContainer           `{`/`}` in [dict](#dict) literal
*hl-NvimList*                        NvimContainer           `[`/`]` in [list](#list) literal

*hl-NvimIdentifier*                  Identifier              Generic identifier
*hl-NvimIdentifierScope*             NvimIdentifier          Namespace: letter
before `:` in
[internal-variables](#internal-variables)
*hl-NvimIdentifierScopeDelimiter*    NvimIdentifier          `:` after namespace
letter
*hl-NvimIdentifierName*              NvimIdentifier          Rest of the ident
*hl-NvimIdentifierKey*               NvimIdentifier          Identifier after
[expr-entry](#expr-entry)

*hl-NvimColon*                       Delimiter               `:` in [dict](#dict) literal
*hl-NvimComma*                       Delimiter               `,` in [dict| or |list](#dict| or |list)
literal or
[expr-function](#expr-function)
*hl-NvimArrow*                       Delimiter               `->` in [lambda](#lambda)

*hl-NvimRegister*                    SpecialChar             [expr-register](#expr-register)
*hl-NvimNumber*                      Number                  Non-prefix digits
in integer
[expr-number](#expr-number)
*hl-NvimNumberPrefix*                Type                    `0` for [octal-number](#octal-number)
`0x` for [hex-number](#hex-number)
`0b` for [binary-number](#binary-number)
*hl-NvimFloat*                       NvimNumber              Floating-point
number

*hl-NvimOptionSigil*                 Type                    `&` in [expr-option](#expr-option)
*hl-NvimOptionScope*                 NvimIdentifierScope     Option scope if any
*hl-NvimOptionScopeDelimiter*        NvimIdentifierScopeDelimiter
`:` after option scope
*hl-NvimOptionName*                  NvimIdentifier          Option name

*hl-NvimEnvironmentSigil*            NvimOptionSigil         `$` in [expr-env](#expr-env)
*hl-NvimEnvironmentName*             NvimIdentifier          Env variable name

*hl-NvimString*                      String                  Generic string
*hl-NvimStringBody*                  NvimString              Generic string
literal body
*hl-NvimStringQuote*                 NvimString              Generic string quote
*hl-NvimStringSpecial*               SpecialChar             Generic string
non-literal body

*hl-NvimSingleQuote*                 NvimStringQuote         `'` in [expr-'](#expr-')
*hl-NvimSingleQuotedBody*            NvimStringBody          Literal part of
[expr-'](#expr-') string body
*hl-NvimSingleQuotedQuote*           NvimStringSpecial       `''` inside [expr-'](#expr-')
string body

*hl-NvimDoubleQuote*                 NvimStringQuote         `"` in [expr-quote](#expr-quote)
*hl-NvimDoubleQuotedBody*            NvimStringBody          Literal part of
[expr-quote](#expr-quote) body
*hl-NvimDoubleQuotedEscape*          NvimStringSpecial       Valid [expr-quote](#expr-quote)
escape sequence
*hl-NvimDoubleQuotedUnknownEscape*   NvimInvalidValue        Unrecognized
[expr-quote](#expr-quote) escape
sequence

vim:tw=78:ts=8:noet:ft=help:norl:
