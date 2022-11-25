---
title:  Eval
layout: ../../layouts/MainLayout.astro
---

  <a name="eval.txt"></a><a name="vimscript"></a><h1> Eval</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/eval.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Expression evaluation <a name="expression"></a><code class="help-tag">expression</code> <a name="expr"></a><code class="help-tag">expr</code> <a name="E15"></a><code class="help-tag">E15</code> <a name="eval"></a><code class="help-tag">eval</code></div>
<div class="old-help-para">Using expressions is introduced in chapter 41 of the user manual <a href="/neovim-docs-web/en/usr_41#usr_41.txt">usr_41.txt</a>.</div>
<div class="old-help-para"><h2 class="help-heading">1. Variables<span class="help-heading-tags">						<a name="variables"></a><span class="help-tag">variables</span></span></h2></div>
<div class="old-help-para"><div class="help-column_heading">1.1 Variable types</div>						<a name="E712"></a><code class="help-tag-right">E712</code> <a name="E896"></a><code class="help-tag">E896</code> <a name="E897"></a><code class="help-tag">E897</code> <a name="E899"></a><code class="help-tag">E899</code>
There are seven types of variables:</div>
<div class="old-help-para">							<a name="Number"></a><code class="help-tag-right">Number</code> <a name="Integer"></a><code class="help-tag">Integer</code>
Number		A 32 or 64 bit signed number.  <a href="/neovim-docs-web/en/eval#expr-number">expr-number</a>
		The number of bits is available in <a href="/neovim-docs-web/en/eval#v%3Anumbersize">v:numbersize</a>.
		Examples:  -123  0x10  0177  0o177  0b1011</div>
<div class="old-help-para">Float		A floating point number. <a href="/neovim-docs-web/en/eval#floating-point-format">floating-point-format</a> <a name="Float"></a><code class="help-tag">Float</code>
		Examples: 123.456  1.15e-6  -1.1e3</div>
<div class="old-help-para">String		A NUL terminated string of 8-bit unsigned characters (bytes).
		<a href="/neovim-docs-web/en/eval#expr-string">expr-string</a> Examples: "ab\txx\"--"  'x-z''a,c'</div>
<div class="old-help-para">Funcref		A reference to a function <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>.
		Example: function("strlen")
		It can be bound to a dictionary and arguments, it then works
		like a Partial.
		Example: function("Callback", [arg], myDict)</div>
<div class="old-help-para">List		An ordered sequence of items, see <a href="/neovim-docs-web/en/eval#List">List</a> for details.
		Example: [1, 2, ['a', 'b']]</div>
<div class="old-help-para">Dictionary	An associative, unordered array: Each entry has a key and a
		value. <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>
		Examples:
			<code>{"blue": "#0000ff", "red": "#ff0000"}</code>
			#{blue: "#0000ff", red: "#ff0000"}</div>
<div class="old-help-para">Blob		Binary Large Object. Stores any sequence of bytes.  See <a href="/neovim-docs-web/en/eval#Blob">Blob</a>
		for details.
		Example: 0zFF00ED015DAF
		0z is an empty Blob.</div>
<div class="old-help-para">The Number and String types are converted automatically, depending on how they
are used.</div>
<div class="old-help-para">Conversion from a Number to a String is by making the ASCII representation of
the Number.  Examples:
<div class="help-column_heading">	Number 123	--&gt;	String "123"</div><div class="help-column_heading">	Number 0	--&gt;	String "0"</div><div class="help-column_heading">	Number -1	--&gt;	String "-1"</div>							<a name="octal"></a><code class="help-tag-right">octal</code>
Conversion from a String to a Number is done by converting the first digits to
a number.  Hexadecimal "0xf9", Octal "017" or "0o17", and Binary "0b10"
numbers are recognized.  If the String doesn't start with digits, the result
is zero. Examples:
<div class="help-column_heading">	String "456"	--&gt;	Number 456</div><div class="help-column_heading">	String "6bar"	--&gt;	Number 6</div><div class="help-column_heading">	String "foo"	--&gt;	Number 0</div><div class="help-column_heading">	String "0xf1"	--&gt;	Number 241</div><div class="help-column_heading">	String "0100"	--&gt;	Number 64</div><div class="help-column_heading">	String "0o100"	--&gt;	Number 64</div><div class="help-column_heading">	String "0b101"	--&gt;	Number 5</div><div class="help-column_heading">	String "-8"	--&gt;	Number -8</div><div class="help-column_heading">	String "+8"	--&gt;	Number 0</div></div>
<div class="old-help-para">To force conversion from String to Number, add zero to it:<pre>:echo "0100" + 0</pre></div>
<div class="old-help-para"><div class="help-column_heading">	64</div></div>
<div class="old-help-para">To avoid a leading zero to cause octal conversion, or for using a different
base, use <a href="/neovim-docs-web/en/builtin#str2nr()">str2nr()</a>.</div>
<div class="old-help-para">						<a name="TRUE"></a><code class="help-tag-right">TRUE</code> <a name="FALSE"></a><code class="help-tag">FALSE</code> <a name="Boolean"></a><code class="help-tag">Boolean</code>
For boolean operators Numbers are used.  Zero is FALSE, non-zero is TRUE.
You can also use <a href="/neovim-docs-web/en/eval#v%3Afalse">v:false</a> and <a href="/neovim-docs-web/en/eval#v%3Atrue">v:true</a>.
When TRUE is returned from a function it is the Number one, FALSE is the
number zero.</div>
<div class="old-help-para">Note that in the command:<pre>:if "foo"
:" NOT executed</pre>
"foo" is converted to 0, which means FALSE.  If the string starts with a
non-zero number it means TRUE:<pre>:if "8foo"
:" executed</pre>
To test for a non-empty string, use empty():<pre>:if !empty("foo")</pre></div>
<div class="old-help-para">							<a name="non-zero-arg"></a><code class="help-tag-right">non-zero-arg</code>
Function arguments often behave slightly different from <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>: If the
argument is present and it evaluates to a non-zero Number, <a href="/neovim-docs-web/en/eval#v%3Atrue">v:true</a> or a
non-empty String, then the value is considered to be TRUE.
Note that " " and "0" are also non-empty strings, thus considered to be TRUE.
A List, Dictionary or Float is not a Number or String, thus evaluate to FALSE.</div>
<div class="old-help-para">				<a name="E745"></a><code class="help-tag-right">E745</code> <a name="E728"></a><code class="help-tag">E728</code> <a name="E703"></a><code class="help-tag">E703</code> <a name="E729"></a><code class="help-tag">E729</code> <a name="E730"></a><code class="help-tag">E730</code> <a name="E731"></a><code class="help-tag">E731</code>
				<a name="E974"></a><code class="help-tag-right">E974</code> <a name="E975"></a><code class="help-tag">E975</code> <a name="E976"></a><code class="help-tag">E976</code>
<a href="/neovim-docs-web/en/eval#List">List</a>, <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>, <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>, and <a href="/neovim-docs-web/en/eval#Blob">Blob</a> types are not automatically
converted.</div>
<div class="old-help-para">							<a name="E805"></a><code class="help-tag-right">E805</code> <a name="E806"></a><code class="help-tag">E806</code> <a name="E808"></a><code class="help-tag">E808</code>
When mixing Number and Float the Number is converted to Float.  Otherwise
there is no automatic conversion of Float.  You can use str2float() for String
to Float, printf() for Float to String and float2nr() for Float to Number.</div>
<div class="old-help-para">					<a name="E362"></a><code class="help-tag-right">E362</code> <a name="E891"></a><code class="help-tag">E891</code> <a name="E892"></a><code class="help-tag">E892</code> <a name="E893"></a><code class="help-tag">E893</code> <a name="E894"></a><code class="help-tag">E894</code> <a name="E907"></a><code class="help-tag">E907</code>
When expecting a Float a Number can also be used, but nothing else.</div>
<div class="old-help-para">					<a name="no-type-checking"></a><code class="help-tag-right">no-type-checking</code>
You will not get an error if you try to change the type of a variable.</div>
<div class="old-help-para"><div class="help-column_heading">1.2 Function references</div>							<a name="Funcref"></a><code class="help-tag-right">Funcref</code> <a name="E695"></a><code class="help-tag">E695</code> <a name="E718"></a><code class="help-tag">E718</code>
A Funcref variable is obtained with the <a href="/neovim-docs-web/en/builtin#function()">function()</a> function, the <a href="/neovim-docs-web/en/builtin#funcref()">funcref()</a>
function or created with the lambda expression <a href="/neovim-docs-web/en/eval#expr-lambda">expr-lambda</a>.  It can be used
in an expression in the place of a function name, before the parenthesis
around the arguments, to invoke the function it refers to.  Example:<pre>:let Fn = function("MyFunc")
:echo Fn()</pre></div>
<div class="old-help-para">							<a name="E704"></a><code class="help-tag-right">E704</code> <a name="E705"></a><code class="help-tag">E705</code> <a name="E707"></a><code class="help-tag">E707</code>
A Funcref variable must start with a capital, "s:", "w:", "t:" or "b:".  You
can use "g:" but the following name must still start with a capital.  You
cannot have both a Funcref variable and a function with the same name.</div>
<div class="old-help-para">A special case is defining a function and directly assigning its Funcref to a
Dictionary entry.  Example:<pre>:function dict.init() dict
:   let self.val = 0
:endfunction</pre>
The key of the Dictionary can start with a lower case letter.  The actual
function name is not used here.  Also see <a href="/neovim-docs-web/en/eval#numbered-function">numbered-function</a>.</div>
<div class="old-help-para">A Funcref can also be used with the <a href="/neovim-docs-web/en/userfunc#%3Acall">:call</a> command:<pre>:call Fn()
:call dict.init()</pre>
The name of the referenced function can be obtained with <a href="/neovim-docs-web/en/builtin#string()">string()</a>.<pre>:let func = string(Fn)</pre>
You can use <a href="/neovim-docs-web/en/builtin#call()">call()</a> to invoke a Funcref and use a list variable for the
arguments:<pre>:let r = call(Fn, mylist)</pre></div>
<div class="old-help-para">								<a name="Partial"></a><code class="help-tag-right">Partial</code>
A Funcref optionally binds a Dictionary and/or arguments.  This is also called
a Partial.  This is created by passing the Dictionary and/or arguments to
function() or funcref().  When calling the function the Dictionary and/or
arguments will be passed to the function.  Example:<pre>let Cb = function('Callback', ['foo'], myDict)
call Cb('bar')</pre>
This will invoke the function as if using:<pre>call myDict.Callback('foo', 'bar')</pre>
Note that binding a function to a Dictionary also happens when the function is
a member of the Dictionary:<pre>let myDict.myFunction = MyFunction
call myDict.myFunction()</pre>
Here MyFunction() will get myDict passed as "self".  This happens when the
"myFunction" member is accessed.  When assigning "myFunction" to otherDict
and calling it, it will be bound to otherDict:<pre>let otherDict.myFunction = myDict.myFunction
call otherDict.myFunction()</pre>
Now "self" will be "otherDict".  But when the dictionary was bound explicitly
this won't happen:<pre>let myDict.myFunction = function(MyFunction, myDict)
let otherDict.myFunction = myDict.myFunction
call otherDict.myFunction()</pre>
Here "self" will be "myDict", because it was bound explicitly.</div>
<div class="old-help-para"><div class="help-column_heading">1.3 Lists</div>						<a name="list"></a><code class="help-tag-right">list</code> <a name="List"></a><code class="help-tag">List</code> <a name="Lists"></a><code class="help-tag">Lists</code> <a name="E686"></a><code class="help-tag">E686</code>
A List is an ordered sequence of items.  An item can be of any type.  Items
can be accessed by their index number.  Items can be added and removed at any
position in the sequence.</div>
<div class="old-help-para"><div class="help-column_heading">List creation</div>							<a name="E696"></a><code class="help-tag-right">E696</code> <a name="E697"></a><code class="help-tag">E697</code>
A List is created with a comma-separated list of items in square brackets.
Examples:<pre>:let mylist = [1, two, 3, "four"]
:let emptylist = []</pre>
An item can be any expression.  Using a List for an item creates a
List of Lists:<pre>:let nestlist = [[11, 12], [21, 22], [31, 32]]</pre>
An extra comma after the last item is ignored.</div>
<div class="old-help-para"><div class="help-column_heading">List index</div>							<a name="list-index"></a><code class="help-tag-right">list-index</code> <a name="E684"></a><code class="help-tag">E684</code>
An item in the List can be accessed by putting the index in square brackets
after the List.  Indexes are zero-based, thus the first item has index zero.<pre>:let item = mylist[0]                " get the first item: 1
:let item = mylist[2]                " get the third item: 3</pre>
When the resulting item is a list this can be repeated:<pre>:let item = nestlist[0][1]        " get the first list, second item: 12</pre></div>
<div class="old-help-para">A negative index is counted from the end.  Index -1 refers to the last item in
the List, -2 to the last but one item, etc.<pre>:let last = mylist[-1]                " get the last item: "four"</pre>
To avoid an error for an invalid index use the <a href="/neovim-docs-web/en/builtin#get()">get()</a> function.  When an item
is not available it returns zero or the default value you specify:<pre>:echo get(mylist, idx)
:echo get(mylist, idx, "NONE")</pre>
<div class="help-column_heading">List concatenation</div></div>
<div class="old-help-para">Two lists can be concatenated with the "+" operator:<pre>:let longlist = mylist + [5, 6]
:let mylist += [7, 8]</pre>
To prepend or append an item turn the item into a list by putting [] around
it.  To change a list in-place see <a href="/neovim-docs-web/en/eval#list-modification">list-modification</a> below.</div>
<div class="old-help-para"><div class="help-column_heading">Sublist</div>							<a name="sublist"></a><code class="help-tag-right">sublist</code>
A part of the List can be obtained by specifying the first and last index,
separated by a colon in square brackets:<pre>:let shortlist = mylist[2:-1]        " get List [3, "four"]</pre>
Omitting the first index is similar to zero.  Omitting the last index is
similar to -1.<pre>:let endlist = mylist[2:]        " from item 2 to the end: [3, "four"]
:let shortlist = mylist[2:2]        " List with one item: [3]
:let otherlist = mylist[:]        " make a copy of the List</pre>
If the first index is beyond the last item of the List or the second item is
before the first item, the result is an empty list.  There is no error
message.</div>
<div class="old-help-para">If the second index is equal to or greater than the length of the list the
length minus one is used:<pre>:let mylist = [0, 1, 2, 3]
:echo mylist[2:8]                " result: [2, 3]</pre>
NOTE: mylist[s:e] means using the variable "s:e" as index.  Watch out for
using a single letter variable before the ":".  Insert a space when needed:
mylist[s : e].</div>
<div class="old-help-para"><div class="help-column_heading">List identity</div>							<a name="list-identity"></a><code class="help-tag-right">list-identity</code>
When variable "aa" is a list and you assign it to another variable "bb", both
variables refer to the same list.  Thus changing the list "aa" will also
change "bb":<pre>:let aa = [1, 2, 3]
:let bb = aa
:call add(aa, 4)
:echo bb</pre></div>
<div class="old-help-para">	[1, 2, 3, 4]</div>
<div class="old-help-para">Making a copy of a list is done with the <a href="/neovim-docs-web/en/builtin#copy()">copy()</a> function.  Using [:] also
works, as explained above.  This creates a shallow copy of the list: Changing
a list item in the list will also change the item in the copied list:<pre>:let aa = [[1, 'a'], 2, 3]
:let bb = copy(aa)
:call add(aa, 4)
:let aa[0][1] = 'aaa'
:echo aa</pre></div>
<div class="old-help-para">	[[1, aaa], 2, 3, 4]<pre>:echo bb</pre></div>
<div class="old-help-para">	[[1, aaa], 2, 3]</div>
<div class="old-help-para">To make a completely independent list use <a href="/neovim-docs-web/en/builtin#deepcopy()">deepcopy()</a>.  This also makes a
copy of the values in the list, recursively.  Up to a hundred levels deep.</div>
<div class="old-help-para">The operator "is" can be used to check if two variables refer to the same
List.  "isnot" does the opposite.  In contrast "==" compares if two lists have
the same value.<pre>:let alist = [1, 2, 3]
:let blist = [1, 2, 3]
:echo alist is blist</pre></div>
<div class="old-help-para">	0<pre>:echo alist == blist</pre></div>
<div class="old-help-para">	1</div>
<div class="old-help-para">Note about comparing lists: Two lists are considered equal if they have the
same length and all items compare equal, as with using "==".  There is one
exception: When comparing a number with a string they are considered
different.  There is no automatic type conversion, as with using "==" on
variables.  Example:<pre>echo 4 == "4"</pre></div>
<div class="old-help-para">	1<pre>echo [4] == ["4"]</pre></div>
<div class="old-help-para">	0</div>
<div class="old-help-para">Thus comparing Lists is more strict than comparing numbers and strings.  You
can compare simple values this way too by putting them in a list:<pre>:let a = 5
:let b = "5"
:echo a == b</pre></div>
<div class="old-help-para">	1<pre>:echo [a] == [b]</pre></div>
<div class="old-help-para">	0</div>
<div class="old-help-para"><div class="help-column_heading">List unpack</div></div>
<div class="old-help-para">To unpack the items in a list to individual variables, put the variables in
square brackets, like list items:<pre>:let [var1, var2] = mylist</pre>
When the number of variables does not match the number of items in the list
this produces an error.  To handle any extra items from the list append ";"
and a variable name:<pre>:let [var1, var2; rest] = mylist</pre>
This works like:<pre>:let var1 = mylist[0]
:let var2 = mylist[1]
:let rest = mylist[2:]</pre>
Except that there is no error if there are only two items.  "rest" will be an
empty list then.</div>
<div class="old-help-para"><div class="help-column_heading">List modification</div>							<a name="list-modification"></a><code class="help-tag-right">list-modification</code>
To change a specific item of a list use <a href="/neovim-docs-web/en/eval#%3Alet">:let</a> this way:<pre>:let list[4] = "four"
:let listlist[0][3] = item</pre>
To change part of a list you can specify the first and last item to be
modified.  The value must at least have the number of items in the range:<pre>:let list[3:5] = [3, 4, 5]</pre>
Adding and removing items from a list is done with functions.  Here are a few
examples:<pre>:call insert(list, 'a')                " prepend item 'a'
:call insert(list, 'a', 3)        " insert item 'a' before list[3]
:call add(list, "new")                " append String item
:call add(list, [1, 2])                " append a List as one new item
:call extend(list, [1, 2])        " extend the list with two more items
:let i = remove(list, 3)        " remove item 3
:unlet list[3]                        " idem
:let l = remove(list, 3, -1)        " remove items 3 to last item
:unlet list[3 : ]                " idem
:call filter(list, 'v:val !~ "x"')  " remove items with an 'x'</pre>
Changing the order of items in a list:<pre>:call sort(list)                " sort a list alphabetically
:call reverse(list)                " reverse the order of items
:call uniq(sort(list))                " sort and remove duplicates</pre>
<div class="help-column_heading">For loop</div></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/eval#%3Afor">:for</a> loop executes commands for each item in a <a href="/neovim-docs-web/en/eval#List">List</a>, <a href="/neovim-docs-web/en/eval#String">String</a> or <a href="/neovim-docs-web/en/eval#Blob">Blob</a>.
A variable is set to each item in sequence.  Example with a List:<pre>:for item in mylist
:   call Doit(item)
:endfor</pre>
This works like:<pre>:let index = 0
:while index &lt; len(mylist)
:   let item = mylist[index]
:   :call Doit(item)
:   let index = index + 1
:endwhile</pre>
If all you want to do is modify each item in the list then the <a href="/neovim-docs-web/en/builtin#map()">map()</a>
function will be a simpler method than a for loop.</div>
<div class="old-help-para">Just like the <a href="/neovim-docs-web/en/eval#%3Alet">:let</a> command, <a href="/neovim-docs-web/en/eval#%3Afor">:for</a> also accepts a list of variables.  This
requires the argument to be a List of Lists.<pre>:for [lnum, col] in [[1, 3], [2, 8], [3, 0]]
:   call Doit(lnum, col)
:endfor</pre>
This works like a <a href="/neovim-docs-web/en/eval#%3Alet">:let</a> command is done for each list item.  Again, the types
must remain the same to avoid an error.</div>
<div class="old-help-para">It is also possible to put remaining items in a List variable:<pre>:for [i, j; rest] in listlist
:   call Doit(i, j)
:   if !empty(rest)
:      echo "remainder: " .. string(rest)
:   endif
:endfor</pre>
For a Blob one byte at a time is used.</div>
<div class="old-help-para">For a String one character, including any composing characters, is used as a
String.  Example:<pre>for c in text
  echo 'This character is ' .. c
endfor</pre>
<div class="help-column_heading">List functions</div>						<a name="E714"></a><code class="help-tag-right">E714</code>
Functions that are useful with a List:<pre>:let r = call(funcname, list)        " call a function with an argument list
:if empty(list)                        " check if list is empty
:let l = len(list)                " number of items in list
:let big = max(list)                " maximum value in list
:let small = min(list)                " minimum value in list
:let xs = count(list, 'x')        " count nr of times 'x' appears in list
:let i = index(list, 'x')        " index of first 'x' in list
:let lines = getline(1, 10)        " get ten text lines from buffer
:call append('$', lines)        " append text lines in buffer
:let list = split("a b c")        " create list from items in a string
:let string = join(list, ', ')        " create string from list items
:let s = string(list)                " String representation of list
:call map(list, '"&gt;&gt; " .. v:val')  " prepend "&gt;&gt; " to each item</pre>
Don't forget that a combination of features can make things simple.  For
example, to add up all the numbers in a list:<pre>:exe 'let sum = ' .. join(nrlist, '+')</pre>
<div class="help-column_heading">1.4 Dictionaries</div>				 <a name="Dict"></a><code class="help-tag-right">Dict</code> <a name="dict"></a><code class="help-tag">dict</code> <a name="Dictionaries"></a><code class="help-tag">Dictionaries</code> <a name="Dictionary"></a><code class="help-tag">Dictionary</code>
A Dictionary is an associative array: Each entry has a key and a value.  The
entry can be located with the key.  The entries are stored without a specific
ordering.</div>
<div class="old-help-para"><div class="help-column_heading">Dictionary creation</div>						<a name="E720"></a><code class="help-tag-right">E720</code> <a name="E721"></a><code class="help-tag">E721</code> <a name="E722"></a><code class="help-tag">E722</code> <a name="E723"></a><code class="help-tag">E723</code>
A Dictionary is created with a comma-separated list of entries in curly
braces.  Each entry has a key and a value, separated by a colon.  Each key can
only appear once.  Examples:<pre>:let mydict = {1: 'one', 2: 'two', 3: 'three'}
:let emptydict = {}</pre></div>
<div class="old-help-para">							<a name="E713"></a><code class="help-tag-right">E713</code> <a name="E716"></a><code class="help-tag">E716</code> <a name="E717"></a><code class="help-tag">E717</code>
A key is always a String.  You can use a Number, it will be converted to a
String automatically.  Thus the String '4' and the number 4 will find the same
entry.  Note that the String '04' and the Number 04 are different, since the
Number will be converted to the String '4', leading zeros are dropped.  The
empty string can also be used as a key.
						<a name="literal-Dict"></a><code class="help-tag-right">literal-Dict</code> <a name="%23%7B%7D"></a><code class="help-tag">#{}</code>
To avoid having to put quotes around every key the #{} form can be used.  This
does require the key to consist only of ASCII letters, digits, '-' and '_'.
Example:<pre>:let mydict = #{zero: 0, one_key: 1, two-key: 2, 333: 3}</pre>
Note that 333 here is the string "333".  Empty keys are not possible with #{}.</div>
<div class="old-help-para">A value can be any expression.  Using a Dictionary for a value creates a
nested Dictionary:<pre>:let nestdict = {1: {11: 'a', 12: 'b'}, 2: {21: 'c'}}</pre>
An extra comma after the last entry is ignored.</div>
<div class="old-help-para"><div class="help-column_heading">Accessing entries</div></div>
<div class="old-help-para">The normal way to access an entry is by putting the key in square brackets:<pre>:let val = mydict["one"]
:let mydict["four"] = 4</pre>
You can add new entries to an existing Dictionary this way, unlike Lists.</div>
<div class="old-help-para">For keys that consist entirely of letters, digits and underscore the following
form can be used <a href="/neovim-docs-web/en/eval#expr-entry">expr-entry</a>:<pre>:let val = mydict.one
:let mydict.four = 4</pre>
Since an entry can be any type, also a List and a Dictionary, the indexing and
key lookup can be repeated:<pre>:echo dict.key[idx].key</pre>
<div class="help-column_heading">Dictionary to List conversion</div></div>
<div class="old-help-para">You may want to loop over the entries in a dictionary.  For this you need to
turn the Dictionary into a List and pass it to <a href="/neovim-docs-web/en/eval#%3Afor">:for</a>.</div>
<div class="old-help-para">Most often you want to loop over the keys, using the <a href="/neovim-docs-web/en/builtin#keys()">keys()</a> function:<pre>:for key in keys(mydict)
:   echo key .. ': ' .. mydict[key]
:endfor</pre>
The List of keys is unsorted.  You may want to sort them first:<pre>:for key in sort(keys(mydict))</pre>
To loop over the values use the <a href="/neovim-docs-web/en/builtin#values()">values()</a> function:<pre>:for v in values(mydict)
:   echo "value: " .. v
:endfor</pre>
If you want both the key and the value use the <a href="/neovim-docs-web/en/builtin#items()">items()</a> function.  It returns
a List in which each item is a List with two items, the key and the value:<pre>:for [key, value] in items(mydict)
:   echo key .. ': ' .. value
:endfor</pre>
<div class="help-column_heading">Dictionary identity</div>							<a name="dict-identity"></a><code class="help-tag-right">dict-identity</code>
Just like Lists you need to use <a href="/neovim-docs-web/en/builtin#copy()">copy()</a> and <a href="/neovim-docs-web/en/builtin#deepcopy()">deepcopy()</a> to make a copy of a
Dictionary.  Otherwise, assignment results in referring to the same
Dictionary:<pre>:let onedict = {'a': 1, 'b': 2}
:let adict = onedict
:let adict['a'] = 11
:echo onedict['a']
11</pre>
Two Dictionaries compare equal if all the key-value pairs compare equal.  For
more info see <a href="/neovim-docs-web/en/eval#list-identity">list-identity</a>.</div>
<div class="old-help-para"><div class="help-column_heading">Dictionary modification</div>							<a name="dict-modification"></a><code class="help-tag-right">dict-modification</code>
To change an already existing entry of a Dictionary, or to add a new entry,
use <a href="/neovim-docs-web/en/eval#%3Alet">:let</a> this way:<pre>:let dict[4] = "four"
:let dict['one'] = item</pre>
Removing an entry from a Dictionary is done with <a href="/neovim-docs-web/en/builtin#remove()">remove()</a> or <a href="/neovim-docs-web/en/eval#%3Aunlet">:unlet</a>.
Three ways to remove the entry with key "aaa" from dict:<pre>:let i = remove(dict, 'aaa')
:unlet dict.aaa
:unlet dict['aaa']</pre>
Merging a Dictionary with another is done with <a href="/neovim-docs-web/en/builtin#extend()">extend()</a>:<pre>:call extend(adict, bdict)</pre>
This extends adict with all entries from bdict.  Duplicate keys cause entries
in adict to be overwritten.  An optional third argument can change this.
Note that the order of entries in a Dictionary is irrelevant, thus don't
expect ":echo adict" to show the items from bdict after the older entries in
adict.</div>
<div class="old-help-para">Weeding out entries from a Dictionary can be done with <a href="/neovim-docs-web/en/builtin#filter()">filter()</a>:<pre>:call filter(dict, 'v:val =~ "x"')</pre>
This removes all entries from "dict" with a value not matching 'x'.
This can also be used to remove all entries:<pre>call filter(dict, 0)</pre>
<div class="help-column_heading">Dictionary function</div>				<a name="Dictionary-function"></a><code class="help-tag-right">Dictionary-function</code> <a name="self"></a><code class="help-tag">self</code> <a name="E725"></a><code class="help-tag">E725</code> <a name="E862"></a><code class="help-tag">E862</code>
When a function is defined with the "dict" attribute it can be used in a
special way with a dictionary.  Example:<pre>:function Mylen() dict
:   return len(self.data)
:endfunction
:let mydict = {'data': [0, 1, 2, 3], 'len': function("Mylen")}
:echo mydict.len()</pre>
This is like a method in object oriented programming.  The entry in the
Dictionary is a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>.  The local variable "self" refers to the dictionary
the function was invoked from.</div>
<div class="old-help-para">It is also possible to add a function without the "dict" attribute as a
Funcref to a Dictionary, but the "self" variable is not available then.</div>
<div class="old-help-para">				<a name="numbered-function"></a><code class="help-tag-right">numbered-function</code> <a name="anonymous-function"></a><code class="help-tag">anonymous-function</code>
To avoid the extra name for the function it can be defined and directly
assigned to a Dictionary in this way:<pre>:let mydict = {'data': [0, 1, 2, 3]}
:function mydict.len()
:   return len(self.data)
:endfunction
:echo mydict.len()</pre>
The function will then get a number and the value of dict.len is a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>
that references this function.  The function can only be used through a
<a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>.  It will automatically be deleted when there is no <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>
remaining that refers to it.</div>
<div class="old-help-para">It is not necessary to use the "dict" attribute for a numbered function.</div>
<div class="old-help-para">If you get an error for a numbered function, you can find out what it is with
a trick.  Assuming the function is 42, the command is:<pre>:function g:42</pre>
<div class="help-column_heading">Functions for Dictionaries</div>							<a name="E715"></a><code class="help-tag-right">E715</code>
Functions that can be used with a Dictionary:<pre>:if has_key(dict, 'foo')        " TRUE if dict has entry with key "foo"
:if empty(dict)                        " TRUE if dict is empty
:let l = len(dict)                " number of items in dict
:let big = max(dict)                " maximum value in dict
:let small = min(dict)                " minimum value in dict
:let xs = count(dict, 'x')        " count nr of times 'x' appears in dict
:let s = string(dict)                " String representation of dict
:call map(dict, '"&gt;&gt; " .. v:val')  " prepend "&gt;&gt; " to each item</pre>
<div class="help-column_heading">1.5 Blobs</div>						<a name="blob"></a><code class="help-tag-right">blob</code> <a name="Blob"></a><code class="help-tag">Blob</code> <a name="Blobs"></a><code class="help-tag">Blobs</code> <a name="E978"></a><code class="help-tag">E978</code>
A Blob is a binary object.  It can be used to read an image from a file and
send it over a channel, for example.</div>
<div class="old-help-para">A Blob mostly behaves like a <a href="/neovim-docs-web/en/eval#List">List</a> of numbers, where each number has the
value of an 8-bit byte, from 0 to 255.</div>
<div class="old-help-para"><div class="help-column_heading">Blob creation</div></div>
<div class="old-help-para">A Blob can be created with a <a href="/neovim-docs-web/en/eval#blob-literal">blob-literal</a>:<pre>:let b = 0zFF00ED015DAF</pre>
Dots can be inserted between bytes (pair of hex characters) for readability,
they don't change the value:<pre>:let b = 0zFF00.ED01.5DAF</pre>
A blob can be read from a file with <a href="/neovim-docs-web/en/builtin#readfile()">readfile()</a> passing the <code>{type}</code> argument
set to "B", for example:<pre>:let b = readfile('image.png', 'B')</pre>
<div class="help-column_heading">Blob index</div>							<a name="blob-index"></a><code class="help-tag-right">blob-index</code> <a name="E979"></a><code class="help-tag">E979</code>
A byte in the Blob can be accessed by putting the index in square brackets
after the Blob.  Indexes are zero-based, thus the first byte has index zero.<pre>:let myblob = 0z00112233
:let byte = myblob[0]                " get the first byte: 0x00
:let byte = myblob[2]                " get the third byte: 0x22</pre>
A negative index is counted from the end.  Index -1 refers to the last byte in
the Blob, -2 to the last but one byte, etc.<pre>:let last = myblob[-1]                " get the last byte: 0x33</pre>
To avoid an error for an invalid index use the <a href="/neovim-docs-web/en/builtin#get()">get()</a> function.  When an item
is not available it returns -1 or the default value you specify:<pre>:echo get(myblob, idx)
:echo get(myblob, idx, 999)</pre>
<div class="help-column_heading">Blob iteration</div></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/eval#%3Afor">:for</a> loop executes commands for each byte of a Blob.  The loop variable is
set to each byte in the Blob.  Example:<pre>:for byte in 0z112233
:   call Doit(byte)
:endfor</pre>
This calls Doit() with 0x11, 0x22 and 0x33.</div>
<div class="old-help-para"><div class="help-column_heading">Blob concatenation</div></div>
<div class="old-help-para">Two blobs can be concatenated with the "+" operator:<pre>:let longblob = myblob + 0z4455
:let myblob += 0z6677</pre>
To change a blob in-place see <a href="/neovim-docs-web/en/eval#blob-modification">blob-modification</a> below.</div>
<div class="old-help-para"><div class="help-column_heading">Part of a blob</div></div>
<div class="old-help-para">A part of the Blob can be obtained by specifying the first and last index,
separated by a colon in square brackets:<pre>:let myblob = 0z00112233
:let shortblob = myblob[1:2]        " get 0z1122
:let shortblob = myblob[2:-1]        " get 0z2233</pre>
Omitting the first index is similar to zero.  Omitting the last index is
similar to -1.<pre>:let endblob = myblob[2:]        " from item 2 to the end: 0z2233
:let shortblob = myblob[2:2]        " Blob with one byte: 0z22
:let otherblob = myblob[:]        " make a copy of the Blob</pre>
If the first index is beyond the last byte of the Blob or the second index is
before the first index, the result is an empty Blob.  There is no error
message.</div>
<div class="old-help-para">If the second index is equal to or greater than the length of the Blob the
length minus one is used:<pre>:echo myblob[2:8]                " result: 0z2233</pre>
<div class="help-column_heading">Blob modification</div>							<a name="blob-modification"></a><code class="help-tag-right">blob-modification</code>
To change a specific byte of a blob use <a href="/neovim-docs-web/en/eval#%3Alet">:let</a> this way:<pre>:let blob[4] = 0x44</pre>
When the index is just one beyond the end of the Blob, it is appended. Any
higher index is an error.</div>
<div class="old-help-para">To change a sequence of bytes the [:] notation can be used:<pre>let blob[1:3] = 0z445566</pre>
The length of the replaced bytes must be exactly the same as the value
provided. <a name="E972"></a><code class="help-tag">E972</code></div>
<div class="old-help-para">To change part of a blob you can specify the first and last byte to be
modified.  The value must have the same number of bytes in the range:<pre>:let blob[3:5] = 0z334455</pre>
You can also use the functions <a href="/neovim-docs-web/en/builtin#add()">add()</a>, <a href="/neovim-docs-web/en/builtin#remove()">remove()</a> and <a href="/neovim-docs-web/en/builtin#insert()">insert()</a>.</div>
<div class="old-help-para"><div class="help-column_heading">Blob identity</div></div>
<div class="old-help-para">Blobs can be compared for equality:<pre>if blob == 0z001122</pre>
And for equal identity:<pre>if blob is otherblob</pre></div>
<div class="old-help-para">							<a name="blob-identity"></a><code class="help-tag-right">blob-identity</code> <a name="E977"></a><code class="help-tag">E977</code>
When variable "aa" is a Blob and you assign it to another variable "bb", both
variables refer to the same Blob.  Then the "is" operator returns true.</div>
<div class="old-help-para">When making a copy using [:] or <a href="/neovim-docs-web/en/builtin#copy()">copy()</a> the values are the same, but the
identity is different:<pre>:let blob = 0z112233
:let blob2 = blob
:echo blob == blob2</pre></div>
<div class="old-help-para">	1<pre>:echo blob is blob2</pre></div>
<div class="old-help-para">	1<pre>:let blob3 = blob[:]
:echo blob == blob3</pre></div>
<div class="old-help-para">	1<pre>:echo blob is blob3</pre></div>
<div class="old-help-para">	0</div>
<div class="old-help-para">Making a copy of a Blob is done with the <a href="/neovim-docs-web/en/builtin#copy()">copy()</a> function.  Using [:] also
works, as explained above.</div>
<div class="old-help-para"><div class="help-column_heading">1.6 More about variables</div>							<a name="more-variables"></a><code class="help-tag-right">more-variables</code>
If you need to know the type of a variable or expression, use the <a href="/neovim-docs-web/en/builtin#type()">type()</a>
function.</div>
<div class="old-help-para">When the '!' flag is included in the <a href="/neovim-docs-web/en/options#'shada'">'shada'</a> option, global variables that
start with an uppercase letter, and don't contain a lowercase letter, are
stored in the shada file <a href="/neovim-docs-web/en/starting#shada-file">shada-file</a>.</div>
<div class="old-help-para">When the <a href="/neovim-docs-web/en/options#'sessionoptions'">'sessionoptions'</a> option contains "global", global variables that
start with an uppercase letter and contain at least one lowercase letter are
stored in the session file <a href="/neovim-docs-web/en/starting#session-file">session-file</a>.</div>
<div class="old-help-para"><div class="help-column_heading">variable name		can be stored where</div>my_var_6		not
My_Var_6		session file
MY_VAR_6		shada file</div>
<div class="old-help-para">It's possible to form a variable name with curly braces, see
<a href="/neovim-docs-web/en/eval#curly-braces-names">curly-braces-names</a>.</div>
<div class="old-help-para"><h2 class="help-heading">2. Expression syntax<span class="help-heading-tags">					<a name="expression-syntax"></a><span class="help-tag">expression-syntax</span></span></h2></div>
<div class="old-help-para">Expression syntax summary, from least to most significant:</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/eval#expr1">expr1</a>  	expr2
	expr2 ? expr1 : expr1	if-then-else</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/eval#expr2">expr2</a>  	expr3
	expr3 || expr3 ...	logical OR</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/eval#expr3">expr3</a>  	expr4
	expr4 &amp;&amp; expr4 ...	logical AND</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/eval#expr4">expr4</a>  	expr5
	expr5 == expr5		equal
	expr5 != expr5		not equal
	expr5 &gt;	 expr5		greater than
	expr5 &gt;= expr5		greater than or equal
	expr5 &lt;	 expr5		smaller than
	expr5 &lt;= expr5		smaller than or equal
	expr5 =~ expr5		regexp matches
	expr5 !~ expr5		regexp doesn't match</div>
<div class="old-help-para">	expr5 ==? expr5		equal, ignoring case
	expr5 ==# expr5		equal, match case
	etc.			As above, append ? for ignoring case, # for
				matching case</div>
<div class="old-help-para">	expr5 is expr5		same <a href="/neovim-docs-web/en/eval#List">List</a>, <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> or <a href="/neovim-docs-web/en/eval#Blob">Blob</a> instance
	expr5 isnot expr5	different <a href="/neovim-docs-web/en/eval#List">List</a>, <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> or <a href="/neovim-docs-web/en/eval#Blob">Blob</a>
				instance</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/eval#expr5">expr5</a>  	expr6
	expr6 +	 expr6 ...	number addition, list or blob concatenation
	expr6 -		 expr6 ...	number subtraction
	expr6 .	 expr6 ...	string concatenation
	expr6 .. expr6 ...	string concatenation</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/eval#expr6">expr6</a>  	expr7
	expr7 *	 expr7 ...	number multiplication
	expr7 /	 expr7 ...	number division
	expr7 %	 expr7 ...	number modulo</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/eval#expr7">expr7</a>  	expr8
	! expr7			logical NOT
<div class="help-li" style=""> expr7			unary minus
</div><div class="help-li" style=""> expr7			unary plus
</div></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/eval#expr8">expr8</a>  	expr9
	expr8[expr1]		byte of a String or item of a <a href="/neovim-docs-web/en/eval#List">List</a>
	expr8[expr1 : expr1]	substring of a String or sublist of a <a href="/neovim-docs-web/en/eval#List">List</a>
	expr8.name		entry in a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>
	expr8(expr1, ...)	function call with <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> variable
	expr8-&gt;name(expr1, ...)	<a href="/neovim-docs-web/en/eval#method">method</a> call</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/eval#expr9">expr9</a>  	number			number constant
	"string"		string constant, backslash is special
string		string constant, ' is doubled
	[expr1, ...]		<a href="/neovim-docs-web/en/eval#List">List</a>
	<code>{expr1: expr1, ...}</code>	<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>
	#{key: expr1, ...}	<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>
	&amp;option			option value
	(expr1)			nested expression
	variable		internal variable
	va{ria}ble		internal variable with curly braces
	$VAR			environment variable
	@r			contents of register 'r'
	function(expr1, ...)	function call
	func{ti}on(expr1, ...)	function call with curly braces
	<code>{args -&gt; expr1}</code>		lambda expression</div>
<div class="old-help-para">"..." indicates that the operations in this level can be concatenated.
Example:<pre>&amp;nu || &amp;list &amp;&amp; &amp;shell == "csh"</pre>
All expressions within one level are parsed from left to right.</div>
<div class="old-help-para">expr1							<a name="expr1"></a><code class="help-tag-right">expr1</code> <a name="ternary"></a><code class="help-tag">ternary</code> <a name="E109"></a><code class="help-tag">E109</code>
-----</div>
<div class="old-help-para">expr2 ? expr1 : expr1</div>
<div class="old-help-para">The expression before the '?' is evaluated to a number.  If it evaluates to
<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>, the result is the value of the expression between the '?' and ':',
otherwise the result is the value of the expression after the ':'.
Example:<pre>:echo lnum == 1 ? "top" : lnum</pre>
Since the first expression is an "expr2", it cannot contain another ?:.  The
other two expressions can, thus allow for recursive use of ?:.
Example:<pre>:echo lnum == 1 ? "top" : lnum == 1000 ? "last" : lnum</pre>
To keep this readable, using <a href="/neovim-docs-web/en/repeat#line-continuation">line-continuation</a> is suggested:<pre>:echo lnum == 1
:\        ? "top"
:\        : lnum == 1000
:\                ? "last"
:\                : lnum</pre>
You should always put a space before the ':', otherwise it can be mistaken for
use in a variable such as "a:1".</div>
<div class="old-help-para">expr2 and expr3						<a name="expr2"></a><code class="help-tag-right">expr2</code> <a name="expr3"></a><code class="help-tag">expr3</code>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+eval.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/eval.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%0Aexpr2%20and%20expr3%09%09%09%09%09%09%2Aexpr2%2A%20%2Aexpr3%2A%0A---------------%0A%0Aexpr3%20%7C%7C%20expr3%20..%09logical%20OR%09%09%2Aexpr-barbar%2A%0Aexpr4%20%26%26%20expr4%20..%09logical%20AND%09%09%2Aexpr-%26%26%2A%0A%0D%60%60%60">---------------</a></div>
<div class="old-help-para">expr3 || expr3 ..	logical OR		<a name="expr-barbar"></a><code class="help-tag-right">expr-barbar</code>
expr4 &amp;&amp; expr4 ..	logical AND		<a name="expr-%26%26"></a><code class="help-tag-right">expr-&amp;&amp;</code></div>
<div class="old-help-para">The "||" and "&amp;&amp;" operators take one argument on each side.  The arguments
are (converted to) Numbers.  The result is:</div>
<div class="old-help-para"><div class="help-column_heading">    input			 output</div><div class="help-column_heading">n1	n2		n1 || n2	n1 &amp;&amp; n2</div><a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>  	<a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>  		<a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>  		<a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>
<a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>  	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>  		<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>  		<a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>
<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>  	<a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>  		<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>  		<a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>
<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>  	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>  		<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>  		<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a></div>
<div class="old-help-para">The operators can be concatenated, for example:<pre>&amp;nu || &amp;list &amp;&amp; &amp;shell == "csh"</pre>
Note that "&amp;&amp;" takes precedence over "||", so this has the meaning of:<pre>&amp;nu || (&amp;list &amp;&amp; &amp;shell == "csh")</pre>
Once the result is known, the expression "short-circuits", that is, further
arguments are not evaluated.  This is like what happens in C.  For example:<pre>let a = 1
echo a || b</pre>
This is valid even if there is no variable called "b" because "a" is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>,
so the result must be <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>.  Similarly below:<pre>echo exists("b") &amp;&amp; b == "yes"</pre>
This is valid whether "b" has been defined or not.  The second clause will
only be evaluated if "b" has been defined.</div>
<div class="old-help-para">expr4							<a name="expr4"></a><code class="help-tag-right">expr4</code>
-----</div>
<div class="old-help-para">expr5 <code>{cmp}</code> expr5</div>
<div class="old-help-para">Compare two expr5 expressions, resulting in a 0 if it evaluates to false, or 1
if it evaluates to true.</div>
<div class="old-help-para">			<a name="expr-%3D%3D"></a><code class="help-tag-right">expr-==</code>  <a name="expr-%21%3D"></a><code class="help-tag">expr-!=</code>  <a name="expr-%3E"></a><code class="help-tag">expr-&gt;</code>  	 <a name="expr-%3E%3D"></a><code class="help-tag-right">expr-&gt;=</code>
			<a name="expr-%3C"></a><code class="help-tag-right">expr-&lt;</code>   <a name="expr-%3C%3D"></a><code class="help-tag">expr-&lt;=</code>  <a name="expr-%3D~"></a><code class="help-tag">expr-=~</code>  <a name="expr-%21~"></a><code class="help-tag">expr-!~</code>
			<a name="expr-%3D%3D%23"></a><code class="help-tag-right">expr-==#</code> <a name="expr-%21%3D%23"></a><code class="help-tag">expr-!=#</code> <a name="expr-%3E%23"></a><code class="help-tag">expr-&gt;#</code>  <a name="expr-%3E%3D%23"></a><code class="help-tag">expr-&gt;=#</code>
			<a name="expr-%3C%23"></a><code class="help-tag-right">expr-&lt;#</code>  <a name="expr-%3C%3D%23"></a><code class="help-tag">expr-&lt;=#</code> <a name="expr-%3D~%23"></a><code class="help-tag">expr-=~#</code> <a name="expr-%21~%23"></a><code class="help-tag">expr-!~#</code>
			<a name="expr-%3D%3D%3F"></a><code class="help-tag-right">expr-==?</code> <a name="expr-%21%3D%3F"></a><code class="help-tag">expr-!=?</code> <a name="expr-%3E%3F"></a><code class="help-tag">expr-&gt;?</code>  <a name="expr-%3E%3D%3F"></a><code class="help-tag">expr-&gt;=?</code>
			<a name="expr-%3C%3F"></a><code class="help-tag-right">expr-&lt;?</code>  <a name="expr-%3C%3D%3F"></a><code class="help-tag">expr-&lt;=?</code> <a name="expr-%3D~%3F"></a><code class="help-tag">expr-=~?</code> <a name="expr-%21~%3F"></a><code class="help-tag">expr-!~?</code>
			<a name="expr-is"></a><code class="help-tag-right">expr-is</code> <a name="expr-isnot"></a><code class="help-tag">expr-isnot</code> <a name="expr-is%23"></a><code class="help-tag">expr-is#</code> <a name="expr-isnot%23"></a><code class="help-tag">expr-isnot#</code>
			<a name="expr-is%3F"></a><code class="help-tag-right">expr-is?</code> <a name="expr-isnot%3F"></a><code class="help-tag">expr-isnot?</code>
<div class="help-column_heading">		use <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a>    match case	   ignore case</div>equal			==		==#		==?
not equal		!=		!=#		!=?
greater than		&gt;		&gt;#		&gt;?
greater than or equal	&gt;=		&gt;=#		&gt;=?
smaller than		&lt;		&lt;#		&lt;?
smaller than or equal	&lt;=		&lt;=#		&lt;=?
regexp matches		=~		=~#		=~?
regexp doesn't match	!~		!~#		!~?
same instance		is		is#		is?
different instance	isnot		isnot#		isnot?</div>
<div class="old-help-para">Examples:
"abc" ==# "Abc"	  evaluates to 0
"abc" ==? "Abc"	  evaluates to 1
"abc" == "Abc"	  evaluates to 1 if <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is set, 0 otherwise</div>
<div class="old-help-para">							<a name="E691"></a><code class="help-tag-right">E691</code> <a name="E692"></a><code class="help-tag">E692</code>
A <a href="/neovim-docs-web/en/eval#List">List</a> can only be compared with a <a href="/neovim-docs-web/en/eval#List">List</a> and only "equal", "not equal",
"is" and "isnot" can be used.  This compares the values of the list,
recursively.  Ignoring case means case is ignored when comparing item values.</div>
<div class="old-help-para">							<a name="E735"></a><code class="help-tag-right">E735</code> <a name="E736"></a><code class="help-tag">E736</code>
A <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> can only be compared with a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> and only "equal", "not
equal", "is" and "isnot" can be used.  This compares the key/values of the
<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> recursively.  Ignoring case means case is ignored when comparing
item values.</div>
<div class="old-help-para">							<a name="E694"></a><code class="help-tag-right">E694</code>
A <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> can only be compared with a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> and only "equal", "not
equal", "is" and "isnot" can be used.  Case is never ignored.  Whether
arguments or a Dictionary are bound (with a partial) matters.  The
Dictionaries must also be equal (or the same, in case of "is") and the
arguments must be equal (or the same).</div>
<div class="old-help-para">To compare Funcrefs to see if they refer to the same function, ignoring bound
Dictionary and arguments, use <a href="/neovim-docs-web/en/builtin#get()">get()</a> to get the function name:<pre>if get(Part1, 'name') == get(Part2, 'name')
   " Part1 and Part2 refer to the same function</pre>
Using "is" or "isnot" with a <a href="/neovim-docs-web/en/eval#List">List</a>, <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> or <a href="/neovim-docs-web/en/eval#Blob">Blob</a> checks whether
the expressions are referring to the same <a href="/neovim-docs-web/en/eval#List">List</a>, <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> or <a href="/neovim-docs-web/en/eval#Blob">Blob</a>
instance.  A copy of a <a href="/neovim-docs-web/en/eval#List">List</a> is different from the original <a href="/neovim-docs-web/en/eval#List">List</a>.  When
using "is" without a <a href="/neovim-docs-web/en/eval#List">List</a>, <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> or <a href="/neovim-docs-web/en/eval#Blob">Blob</a>, it is equivalent to
using "equal", using "isnot" is equivalent to using "not equal".  Except that
a different type means the values are different:<pre>echo 4 == '4'
1
echo 4 is '4'
0
echo 0 is []
0</pre>
"is#"/"isnot#" and "is?"/"isnot?" can be used to match and ignore case.</div>
<div class="old-help-para">When comparing a String with a Number, the String is converted to a Number,
and the comparison is done on Numbers.  This means that:<pre>echo 0 == 'x'
1</pre>
because 'x' converted to a Number is zero.  However:<pre>echo [0] == ['x']
0</pre>
Inside a List or Dictionary this conversion is not used.</div>
<div class="old-help-para">When comparing two Strings, this is done with strcmp() or stricmp().  This
results in the mathematical difference (comparing byte values), not
necessarily the alphabetical difference in the local language.</div>
<div class="old-help-para">When using the operators with a trailing '#', or the short version and
<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is off, the comparing is done with strcmp(): case matters.</div>
<div class="old-help-para">When using the operators with a trailing '?', or the short version and
<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is set, the comparing is done with stricmp(): case is ignored.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> is not used.</div>
<div class="old-help-para">The "=~" and "!~" operators match the lefthand argument with the righthand
argument, which is used as a pattern.  See <a href="/neovim-docs-web/en/pattern#pattern">pattern</a> for what a pattern is.
This matching is always done like <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> was set and <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> is empty, no
matter what the actual value of <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> or <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> is.  This makes scripts
portable.  To avoid backslashes in the regexp pattern to be doubled, use a
single-quote string, see <a href="/neovim-docs-web/en/eval#literal-string">literal-string</a>.
Since a string is considered to be a single line, a multi-line pattern
(containing \n, backslash-n) will not match.  However, a literal NL character
can be matched like an ordinary character.  Examples:
	"foo\nbar" =~ "\n"	evaluates to 1
	"foo\nbar" =~ "\\n"	evaluates to 0</div>
<div class="old-help-para">expr5 and expr6						<a name="expr5"></a><code class="help-tag-right">expr5</code> <a name="expr6"></a><code class="help-tag">expr6</code>
<h3 class="help-heading">expr6 + expr6   Number addition, <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Blob">Blob</a> concatenation<span class="help-heading-tags">	<a name="expr-%2B"></a><span class="help-tag">expr-+</span></span></h3>expr6 - expr6   Number subtraction				<a name="expr--"></a><code class="help-tag-right">expr--</code>
expr6 . expr6   String concatenation				<a name="expr-."></a><code class="help-tag-right">expr-.</code>
expr6 .. expr6  String concatenation				<a name="expr-.."></a><code class="help-tag-right">expr-..</code></div>
<div class="old-help-para">For <a href="/neovim-docs-web/en/eval#Lists">Lists</a> only "+" is possible and then both expr6 must be a list.  The
result is a new list with the two lists Concatenated.</div>
<div class="old-help-para">For String concatenation ".." is preferred, since "." is ambiguous, it is also
used for <a href="/neovim-docs-web/en/eval#Dict">Dict</a> member access and floating point numbers.</div>
<div class="old-help-para">expr7 * expr7  Number multiplication				<a name="expr-star"></a><code class="help-tag-right">expr-star</code>
expr7 / expr7  Number division					<a name="expr-%2F"></a><code class="help-tag-right">expr-/</code>
expr7 % expr7  Number modulo					<a name="expr-%25"></a><code class="help-tag-right">expr-%</code></div>
<div class="old-help-para">For all, except "." and "..", Strings are converted to Numbers.
For bitwise operators see <a href="/neovim-docs-web/en/builtin#and()">and()</a>, <a href="/neovim-docs-web/en/builtin#or()">or()</a> and <a href="/neovim-docs-web/en/builtin#xor()">xor()</a>.</div>
<div class="old-help-para">Note the difference between "+" and ".":
	"123" + "456" = 579
	"123" . "456" = "123456"</div>
<div class="old-help-para">Since '.' has the same precedence as '+' and '-', you need to read:<pre>1 . 90 + 90.0</pre>
As:<pre>(1 . 90) + 90.0</pre>
That works, since the String "190" is automatically converted to the Number
190, which can be added to the Float 90.0.  However:<pre>1 . 90 * 90.0</pre>
Should be read as:<pre>1 . (90 * 90.0)</pre>
Since '.' has lower precedence than ''.  This does NOT work, since this
attempts to concatenate a Float and a String.</div>
<div class="old-help-para">When dividing a Number by zero the result depends on the value:
	  0 / 0  = -0x80000000	(like NaN for Float)
	 &gt;0 / 0  =  0x7fffffff	(like positive infinity)
	 &lt;0 / 0  = -0x7fffffff	(like negative infinity)
	(before Vim 7.2 it was always 0x7fffffff)</div>
<div class="old-help-para">When 64-bit Number support is enabled:
	  0 / 0  = -0x8000000000000000	(like NaN for Float)
	 &gt;0 / 0  =  0x7fffffffffffffff	(like positive infinity)
	 &lt;0 / 0  = -0x7fffffffffffffff	(like negative infinity)</div>
<div class="old-help-para">When the righthand side of '%' is zero, the result is 0.</div>
<div class="old-help-para">None of these work for <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>s.</div>
<div class="old-help-para">. and % do not work for Float. <a name="E804"></a><code class="help-tag">E804</code></div>
<div class="old-help-para">expr7							<a name="expr7"></a><code class="help-tag-right">expr7</code>
-----
! expr7			logical NOT		<a name="expr-%21"></a><code class="help-tag-right">expr-!</code>
<div class="help-li" style=""> expr7			unary minus		<a name="expr-unary--"></a><code class="help-tag-right">expr-unary--</code>  
</div><div class="help-li" style=""> expr7			unary plus		<a name="expr-unary-%2B"></a><code class="help-tag-right">expr-unary-+</code>  
</div></div>
<div class="old-help-para">For '!' <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> becomes <a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>, <a href="/neovim-docs-web/en/eval#FALSE">FALSE</a> becomes <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> (one).
For '-' the sign of the number is changed.
For '+' the number is unchanged.  Note: "++" has no effect.</div>
<div class="old-help-para">A String will be converted to a Number first.</div>
<div class="old-help-para">These three can be repeated and mixed.  Examples:
	!-1	    == 0
	!!8	    == 1
	--9	    == 9</div>
<div class="old-help-para">expr8							<a name="expr8"></a><code class="help-tag-right">expr8</code>
-----
This expression is either <a href="/neovim-docs-web/en/eval#expr9">expr9</a> or a sequence of the alternatives below,
in any order.  E.g., these are all possible:
	expr8[expr1].name
	expr8.name[expr1]
	expr8(expr1, ...)[expr1].name
	expr8-&gt;(expr1, ...)[expr1]
Evaluation is always from left to right.</div>
<div class="old-help-para">expr8[expr1]		item of String or <a href="/neovim-docs-web/en/eval#List">List</a>  	<a name="expr-%5B%5D"></a><code class="help-tag">expr-[]</code> <a name="E111"></a><code class="help-tag">E111</code>
							<a name="subscript"></a><code class="help-tag-right">subscript</code>
In legacy Vim script:
If expr8 is a Number or String this results in a String that contains the
expr1'th single byte from expr8.  expr8 is used as a String (a number is
automatically converted to a String), expr1 as a Number.  This doesn't
recognize multibyte encodings, see <code>byteidx()</code> for an alternative, or use
<code>split()</code> to turn the string into a list of characters.  Example, to get the
byte under the cursor:<pre>:let c = getline(".")[col(".") - 1]</pre>
Index zero gives the first byte.  This is like it works in C.  Careful:
text column numbers start with one!  Example, to get the byte under the
cursor:<pre>:let c = getline(".")[col(".") - 1]</pre>
If the length of the String is less than the index, the result is an empty
String.  A negative index always results in an empty string (reason: backward
compatibility).  Use [-1:] to get the last byte.</div>
<div class="old-help-para">If expr8 is a <a href="/neovim-docs-web/en/eval#List">List</a> then it results the item at index expr1.  See <a href="/neovim-docs-web/en/eval#list-index">list-index</a>
for possible index values.  If the index is out of range this results in an
error.  Example:<pre>:let item = mylist[-1]                " get last item</pre>
Generally, if a <a href="/neovim-docs-web/en/eval#List">List</a> index is equal to or higher than the length of the
<a href="/neovim-docs-web/en/eval#List">List</a>, or more negative than the length of the <a href="/neovim-docs-web/en/eval#List">List</a>, this results in an
error.</div>
<div class="old-help-para">expr8[expr1a : expr1b]	substring or <a href="/neovim-docs-web/en/eval#sublist">sublist</a>  		<a name="expr-%5B%3A%5D"></a><code class="help-tag-right">expr-[:]</code> <a name="substring"></a><code class="help-tag">substring</code></div>
<div class="old-help-para">If expr8 is a String this results in the substring with the bytes or
characters from expr1a to and including expr1b.  expr8 is used as a String,
expr1a and expr1b are used as a Number.</div>
<div class="old-help-para">In legacy Vim script the indexes are byte indexes.  This doesn't recognize
multibyte encodings, see <a href="/neovim-docs-web/en/builtin#byteidx()">byteidx()</a> for computing the indexes.  If expr8 is
a Number it is first converted to a String.</div>
<div class="old-help-para">If expr1a is omitted zero is used.  If expr1b is omitted the length of the
string minus one is used.</div>
<div class="old-help-para">A negative number can be used to measure from the end of the string.  -1 is
the last character, -2 the last but one, etc.</div>
<div class="old-help-para">If an index goes out of range for the string characters are omitted.  If
expr1b is smaller than expr1a the result is an empty string.</div>
<div class="old-help-para">Examples:<pre>:let c = name[-1:]                " last byte of a string
:let c = name[0:-1]                " the whole string
:let c = name[-2:-2]                " last but one byte of a string
:let s = line(".")[4:]                " from the fifth byte to the end
:let s = s[:-3]                        " remove last two bytes</pre></div>
<div class="old-help-para">							<a name="slice"></a><code class="help-tag-right">slice</code>
If expr8 is a <a href="/neovim-docs-web/en/eval#List">List</a> this results in a new <a href="/neovim-docs-web/en/eval#List">List</a> with the items indicated by
the indexes expr1a and expr1b.  This works like with a String, as explained
just above. Also see <a href="/neovim-docs-web/en/eval#sublist">sublist</a> below.  Examples:<pre>:let l = mylist[:3]                " first four items
:let l = mylist[4:4]                " List with one item
:let l = mylist[:]                " shallow copy of a List</pre>
If expr8 is a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> this results in a new <a href="/neovim-docs-web/en/eval#Blob">Blob</a> with the bytes in the
indexes expr1a and expr1b, inclusive.  Examples:<pre>:let b = 0zDEADBEEF
:let bs = b[1:2]                " 0zADBE
:let bs = b[]                        " copy of 0zDEADBEEF</pre>
Using expr8[expr1] or expr8[expr1a : expr1b] on a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> results in an
error.</div>
<div class="old-help-para">Watch out for confusion between a namespace and a variable followed by a colon
for a sublist:<pre>mylist[n:]     " uses variable n
mylist[s:]     " uses namespace s:, error!</pre>
expr8.name		entry in a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>  		<a name="expr-entry"></a><code class="help-tag-right">expr-entry</code></div>
<div class="old-help-para">If expr8 is a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> and it is followed by a dot, then the following
name will be used as a key in the <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.  This is just like:
expr8[name].</div>
<div class="old-help-para">The name must consist of alphanumeric characters, just like a variable name,
but it may start with a number.  Curly braces cannot be used.</div>
<div class="old-help-para">There must not be white space before or after the dot.</div>
<div class="old-help-para">Examples:<pre>:let dict = {"one": 1, 2: "two"}
:echo dict.one                " shows "1"
:echo dict.2                " shows "two"
:echo dict .2                " error because of space before the dot</pre>
Note that the dot is also used for String concatenation.  To avoid confusion
always put spaces around the dot for String concatenation.</div>
<div class="old-help-para">expr8(expr1, ...)	<a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> function call</div>
<div class="old-help-para">When expr8 is a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> type variable, invoke the function it refers to.</div>
<div class="old-help-para">expr8-&gt;name([args])	method call			<a name="method"></a><code class="help-tag-right">method</code> <a name="-%3E"></a><code class="help-tag">-&gt;</code>
expr8-&gt;{lambda}([args])</div>
<div class="old-help-para">							<a name="E260"></a><code class="help-tag-right">E260</code> <a name="E276"></a><code class="help-tag">E276</code>
For methods that are also available as global functions this is the same as:<pre>name(expr8 [, args])</pre>
There can also be methods specifically for the type of "expr8".</div>
<div class="old-help-para">This allows for chaining, passing the value that one method returns to the
next method:<pre>mylist-&gt;filter(filterexpr)-&gt;map(mapexpr)-&gt;sort()-&gt;join()</pre></div>
<div class="old-help-para">Example of using a lambda:<pre>GetPercentage()-&gt;{x -&gt; x * 100}()-&gt;printf('%d%%')</pre></div>
<div class="old-help-para">When using -&gt; the <a href="/neovim-docs-web/en/eval#expr7">expr7</a> operators will be applied first, thus:<pre>-1.234-&gt;string()</pre>
Is equivalent to:<pre>(-1.234)-&gt;string()</pre>
And NOT:<pre>-(1.234-&gt;string())</pre></div>
<div class="old-help-para">							<a name="E274"></a><code class="help-tag-right">E274</code>
"-&gt;name(" must not contain white space.  There can be white space before the
"-&gt;" and after the "(", thus you can split the lines like this:<pre>mylist
\ -&gt;filter(filterexpr)
\ -&gt;map(mapexpr)
\ -&gt;sort()
\ -&gt;join()</pre>
When using the lambda form there must be no white space between the } and the
<a name="_(."></a><h3 class="help-heading">(.</h3></div>
<div class="old-help-para">							<a name="expr9"></a><code class="help-tag-right">expr9</code>
number
------
number			number constant			<a name="expr-number"></a><code class="help-tag-right">expr-number</code></div>
<div class="old-help-para">			<a name="0x"></a><code class="help-tag-right">0x</code> <a name="hex-number"></a><code class="help-tag">hex-number</code> <a name="0o"></a><code class="help-tag">0o</code> <a name="octal-number"></a><code class="help-tag">octal-number</code> <a name="binary-number"></a><code class="help-tag">binary-number</code>
Decimal, Hexadecimal (starting with 0x or 0X), Binary (starting with 0b or 0B)
and Octal (starting with 0, 0o or 0O).</div>
<div class="old-help-para">						<a name="floating-point-format"></a><code class="help-tag-right">floating-point-format</code>
Floating point numbers can be written in two forms:</div>
<div class="old-help-para">	[-+]{N}.{M}
	[-+]{N}.{M}[eE][-+]{exp}</div>
<div class="old-help-para"><code>{N}</code> and <code>{M}</code> are numbers.  Both <code>{N}</code> and <code>{M}</code> must be present and can only
contain digits.
[-+] means there is an optional plus or minus sign.
<code>{exp}</code> is the exponent, power of 10.
Only a decimal point is accepted, not a comma.  No matter what the current
locale is.</div>
<div class="old-help-para">Examples:
	123.456
	+0.0001
	55.0
	-0.123
	1.234e03
	1.0E-6
	-3.1416e+88</div>
<div class="old-help-para">These are INVALID:
	3.		empty <code>{M}</code>
	1e40		missing .{M}</div>
<div class="old-help-para">Rationale:
Before floating point was introduced, the text "123.456" was interpreted as
the two numbers "123" and "456", both converted to a string and concatenated,
resulting in the string "123456".  Since this was considered pointless, and we
could not find it intentionally being used in Vim scripts, this backwards
incompatibility was accepted in favor of being able to use the normal notation
for floating point numbers.</div>
<div class="old-help-para">							<a name="float-pi"></a><code class="help-tag-right">float-pi</code> <a name="float-e"></a><code class="help-tag">float-e</code>
A few useful values to copy&amp;paste:<pre>:let pi = 3.14159265359
:let e  = 2.71828182846</pre>
Or, if you don't want to write them in as floating-point literals, you can
also use functions, like the following:<pre>:let pi = acos(-1.0)
:let e  = exp(1.0)</pre></div>
<div class="old-help-para">						<a name="floating-point-precision"></a><code class="help-tag-right">floating-point-precision</code>
The precision and range of floating points numbers depends on what "double"
means in the library Vim was compiled with.  There is no way to change this at
runtime.</div>
<div class="old-help-para">The default for displaying a <a href="/neovim-docs-web/en/eval#Float">Float</a> is to use 6 decimal places, like using
printf("%g", f).  You can select something else when using the <a href="/neovim-docs-web/en/builtin#printf()">printf()</a>
function.  Example:<pre>:echo printf('%.15e', atan(1))</pre></div>
<div class="old-help-para">	7.853981633974483e-01</div>
<div class="old-help-para">string					<a name="string"></a><code class="help-tag-right">string</code> <a name="String"></a><code class="help-tag">String</code> <a name="expr-string"></a><code class="help-tag">expr-string</code> <a name="E114"></a><code class="help-tag">E114</code>
------
"string"		string constant		<a name="expr-quote"></a><code class="help-tag-right">expr-quote</code></div>
<div class="old-help-para">Note that double quotes are used.</div>
<div class="old-help-para">A string constant accepts these special characters:
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
\b	backspace <code>&lt;BS&gt;</code>
\e	escape <code>&lt;Esc&gt;</code>
\f	formfeed 0x0C
\n	newline <code>&lt;NL&gt;</code>
\r	return <code>&lt;CR&gt;</code>
\t	tab <code>&lt;Tab&gt;</code>
\\	backslash
\"	double quote
\&lt;xxx&gt;	Special key named "xxx".  e.g. "\&lt;C-W&gt;" for <code>CTRL-W</code>.  This is for use
	in mappings, the 0x80 byte is escaped.
	To use the double quote character it must be escaped: "&lt;M-\"&gt;".
	Don't use <code>&lt;Char-xxxx&gt;</code> to get a UTF-8 character, use \uxxxx as
	mentioned above.
\&lt;*xxx&gt;	Like \&lt;xxx&gt; but prepends a modifier instead of including it in the
	character.  E.g. "\&lt;C-w&gt;" is one character 0x17 while "\&lt;*C-w&gt;" is four
	bytes: 3 for the CTRL modifier and then character "W".</div>
<div class="old-help-para">Note that "\xff" is stored as the byte 255, which may be invalid in some
encodings.  Use "\u00ff" to store character 255 correctly as UTF-8.</div>
<div class="old-help-para">Note that "\000" and "\x00" force the end of the string.</div>
<div class="old-help-para">blob-literal				<a name="blob-literal"></a><code class="help-tag-right">blob-literal</code> <a name="E973"></a><code class="help-tag">E973</code>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+eval.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/eval.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%0Ablob-literal%09%09%09%09%2Ablob-literal%2A%20%2AE973%2A%0A------------%0A%0AHexadecimal%20starting%20with%200z%20or%200Z%2C%20with%20an%20arbitrary%20number%20of%20bytes.%0AThe%20sequence%20must%20be%20an%20even%20number%20of%20hex%20characters.%20%20Example%3A%20%3E%0A%09%3Alet%20b%20%3D%200zFF00ED015DAF%0D%60%60%60">------------</a></div>
<div class="old-help-para">Hexadecimal starting with 0z or 0Z, with an arbitrary number of bytes.
The sequence must be an even number of hex characters.  Example:<pre>:let b = 0zFF00ED015DAF</pre>
literal-string						<a name="literal-string"></a><code class="help-tag-right">literal-string</code> <a name="E115"></a><code class="help-tag">E115</code>
<h3 class="help-heading">string		string constant<span class="help-heading-tags">			<a name="expr-'"></a><span class="help-tag">expr-'</span></span></h3></div>
<div class="old-help-para">Note that single quotes are used.</div>
<div class="old-help-para">This string is taken as it is.  No backslashes are removed or have a special
meaning.  The only exception is that two quotes stand for one quote.</div>
<div class="old-help-para">Single quoted strings are useful for patterns, so that backslashes do not need
to be doubled.  These two commands are equivalent:<pre>if a =~ "\\s*"
if a =~ '\s*'</pre>
option						<a name="expr-option"></a><code class="help-tag-right">expr-option</code> <a name="E112"></a><code class="help-tag">E112</code> <a name="E113"></a><code class="help-tag">E113</code>
------
&amp;option			option value, local value if possible
&amp;g:option		global option value
&amp;l:option		local option value</div>
<div class="old-help-para">Examples:<pre>echo "tabstop is " .. &amp;tabstop
if &amp;expandtab</pre>
Any option name can be used here.  See <a href="/neovim-docs-web/en/options#options">options</a>.  When using the local value
and there is no buffer-local or window-local value, the global value is used
anyway.</div>
<div class="old-help-para">register						<a name="expr-register"></a><code class="help-tag-right">expr-register</code> <a name="%40r"></a><code class="help-tag">@r</code>
--------
@r			contents of register 'r'</div>
<div class="old-help-para">The result is the contents of the named register, as a single string.
Newlines are inserted where required.  To get the contents of the unnamed
register use @" or @@.  See <a href="/neovim-docs-web/en/change#registers">registers</a> for an explanation of the available
registers.</div>
<div class="old-help-para">When using the '=' register you get the expression itself, not what it
evaluates to.  Use <a href="/neovim-docs-web/en/builtin#eval()">eval()</a> to evaluate it.</div>
<div class="old-help-para">nesting							<a name="expr-nesting"></a><code class="help-tag-right">expr-nesting</code> <a name="E110"></a><code class="help-tag">E110</code>
-------
(expr1)			nested expression</div>
<div class="old-help-para">environment variable					<a name="expr-env"></a><code class="help-tag-right">expr-env</code>
<a name="_-$var-environment-variable"></a><h3 class="help-heading">$VAR			environment variable</h3></div>
<div class="old-help-para">The String value of any environment variable.  When it is not defined, the
result is an empty string.</div>
<div class="old-help-para">The functions <code>getenv()</code> and <code>setenv()</code> can also be used and work for
environment variables with non-alphanumeric names.
The function <code>environ()</code> can be used to get a Dict with all environment
variables.</div>
<div class="old-help-para">						<a name="expr-env-expand"></a><code class="help-tag-right">expr-env-expand</code>
Note that there is a difference between using $VAR directly and using
expand("$VAR").  Using it directly will only expand environment variables that
are known inside the current Vim session.  Using expand() will first try using
the environment variables known inside the current Vim session.  If that
fails, a shell will be used to expand the variable.  This can be slow, but it
does expand all variables that the shell knows about.  Example:<pre>:echo $shell
:echo expand("$shell")</pre>
The first one probably doesn't echo anything, the second echoes the $shell
variable (if your shell supports it).</div>
<div class="old-help-para">internal variable					<a name="expr-variable"></a><code class="help-tag-right">expr-variable</code>
<a name="_-variable-internal-variable"></a><h3 class="help-heading">variable		internal variable</h3>See below <a href="/neovim-docs-web/en/eval#internal-variables">internal-variables</a>.</div>
<div class="old-help-para">function call		<a name="expr-function"></a><code class="help-tag-right">expr-function</code> <a name="E116"></a><code class="help-tag">E116</code> <a name="E118"></a><code class="help-tag">E118</code> <a name="E119"></a><code class="help-tag">E119</code> <a name="E120"></a><code class="help-tag">E120</code>
<a name="_-function(expr1,-...)-function-call"></a><h3 class="help-heading">function(expr1, ...)	function call</h3>See below <a href="/neovim-docs-web/en/eval#functions">functions</a>.</div>
<div class="old-help-para">lambda expression				<a name="expr-lambda"></a><code class="help-tag-right">expr-lambda</code> <a name="lambda"></a><code class="help-tag">lambda</code>
<a name="_-{args-->-expr1}-lambda-expression"></a><h3 class="help-heading"><code>{args -&gt; expr1}</code>		lambda expression</h3></div>
<div class="old-help-para">A lambda expression creates a new unnamed function which returns the result of
evaluating <a href="/neovim-docs-web/en/eval#expr1">expr1</a>.  Lambda expressions differ from <a href="/neovim-docs-web/en/eval#user-function">user-function</a>s in
the following ways:</div>
<div class="old-help-para">1. The body of the lambda expression is an <a href="/neovim-docs-web/en/eval#expr1">expr1</a> and not a sequence of <a href="/neovim-docs-web/en/intro#Ex">Ex</a>
   commands.
2. The prefix "a:" should not be used for arguments.  E.g.:<pre>:let F = {arg1, arg2 -&gt; arg1 - arg2}
:echo F(5, 2)</pre></div>
<div class="old-help-para">	3</div>
<div class="old-help-para">The arguments are optional.  Example:<pre>:let F = {-&gt; 'error function'}
:echo F('ignored')</pre></div>
<div class="old-help-para">	error function
							<a name="closure"></a><code class="help-tag-right">closure</code>
Lambda expressions can access outer scope variables and arguments.  This is
often called a closure.  Example where "i" and "a:arg" are used in a lambda
while they already exist in the function scope.  They remain valid even after
the function returns:<pre>:function Foo(arg)
:  let i = 3
:  return {x -&gt; x + i - a:arg}
:endfunction
:let Bar = Foo(4)
:echo Bar(6)</pre></div>
<div class="old-help-para">	5
Note that the variables must exist in the outer scope before the lambda is
defined for this to work.  See also <a href="/neovim-docs-web/en/userfunc#%3Afunc-closure">:func-closure</a>.</div>
<div class="old-help-para">Lambda and closure support can be checked with:<pre>if has('lambda')</pre>
Examples for using a lambda expression with <a href="/neovim-docs-web/en/builtin#sort()">sort()</a>, <a href="/neovim-docs-web/en/builtin#map()">map()</a> and <a href="/neovim-docs-web/en/builtin#filter()">filter()</a>:<pre>:echo map([1, 2, 3], {idx, val -&gt; val + 1})</pre></div>
<div class="old-help-para">	[2, 3, 4]<pre>:echo sort([3,7,2,1,4], {a, b -&gt; a - b})</pre></div>
<div class="old-help-para">	[1, 2, 3, 4, 7]</div>
<div class="old-help-para">The lambda expression is also useful for jobs and timers:<pre>:let timer = timer_start(500,
                \ {-&gt; execute("echo 'Handler called'", "")},
                \ {'repeat': 3})</pre></div>
<div class="old-help-para">	Handler called
	Handler called
	Handler called</div>
<div class="old-help-para">Note that it is possible to cause memory to be used and not freed if the
closure is referenced by the context it depends on:<pre>function Function()
   let x = 0
   let F = {-&gt; x}
 endfunction</pre>
The closure uses "x" from the function scope, and "F" in that same scope
refers to the closure.  This cycle results in the memory not being freed.
Recommendation: don't do this.</div>
<div class="old-help-para">Notice how execute() is used to execute an Ex command.  That's ugly though.</div>
<div class="old-help-para">Lambda expressions have internal names like '<code>&lt;lambda&gt;</code>42'.  If you get an error
for a lambda expression, you can find what it is with the following command:<pre>:function &lt;lambda&gt;42</pre>
See also: <a href="/neovim-docs-web/en/eval#numbered-function">numbered-function</a></div>
<div class="old-help-para"><h2 class="help-heading">3. Internal variable<span class="help-heading-tags">				<a name="internal-variables"></a><span class="help-tag">internal-variables</span> <a name="E461"></a><span class="help-tag">E461</span></span></h2></div>
<div class="old-help-para">An internal variable name can be made up of letters, digits and '_'.  But it
cannot start with a digit.  It's also possible to use curly braces, see
<a href="/neovim-docs-web/en/eval#curly-braces-names">curly-braces-names</a>.</div>
<div class="old-help-para">An internal variable is created with the ":let" command <a href="/neovim-docs-web/en/eval#%3Alet">:let</a>.
An internal variable is explicitly destroyed with the ":unlet" command
<a href="/neovim-docs-web/en/eval#%3Aunlet">:unlet</a>.
Using a name that is not an internal variable or refers to a variable that has
been destroyed results in an error.</div>
<div class="old-help-para">						<a name="variable-scope"></a><code class="help-tag-right">variable-scope</code>
There are several name spaces for variables.  Which one is to be used is
specified by what is prepended:</div>
<div class="old-help-para">		(nothing) In a function: local to a function; otherwise: global
<a href="/neovim-docs-web/en/eval#buffer-variable">buffer-variable</a>    b:	  Local to the current buffer.
<a href="/neovim-docs-web/en/eval#window-variable">window-variable</a>    w:	  Local to the current window.
<a href="/neovim-docs-web/en/eval#tabpage-variable">tabpage-variable</a>   t:	  Local to the current tab page.
<a href="/neovim-docs-web/en/eval#global-variable">global-variable</a>    g:	  Global.
<a href="/neovim-docs-web/en/eval#local-variable">local-variable</a>     l:	  Local to a function.
<a href="/neovim-docs-web/en/eval#script-variable">script-variable</a>    s:	  Local to a <a href="/neovim-docs-web/en/repeat#%3Asource">:source</a>'<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+eval.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/eval.html%0D%0DContext%3A%0D%0D%60%60%60%0D%7Ctabpage-variable%7C%20%20%20t%3A%09%20%20Local%20to%20the%20current%20tab%20page.%0A%7Cglobal-variable%7C%20%20%20%20g%3A%09%20%20Global.%0A%7Clocal-variable%7C%20%20%20%20%20l%3A%09%20%20Local%20to%20a%20function.%0A%7Cscript-variable%7C%20%20%20%20s%3A%09%20%20Local%20to%20a%20%7C%3Asource%7C'ed%20Vim%20script.%0A%7Cfunction-argument%7C%20%20a%3A%09%20%20Function%20argument%20(only%20inside%20a%20function).%0A%7Cvim-variable%7C%20%20%20%20%20%20%20v%3A%09%20%20Global%2C%20predefined%20by%20Vim.%0A%0D%60%60%60">ed</a> Vim script.
<a href="/neovim-docs-web/en/userfunc#function-argument">function-argument</a>  a:	  Function argument (only inside a function).
<a href="/neovim-docs-web/en/eval#vim-variable">vim-variable</a>       v:	  Global, predefined by Vim.</div>
<div class="old-help-para">The scope name by itself can be used as a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.  For example, to
delete all script-local variables:<pre>:for k in keys(s:)
:    unlet s:[k]
:endfor</pre></div>
<div class="old-help-para">						<a name="buffer-variable"></a><code class="help-tag-right">buffer-variable</code> <a name="b%3Avar"></a><code class="help-tag">b:var</code> <a name="b%3A"></a><code class="help-tag">b:</code>
A variable name that is preceded with "b:" is local to the current buffer.
Thus you can have several "b:foo" variables, one for each buffer.
This kind of variable is deleted when the buffer is wiped out or deleted with
<a href="/neovim-docs-web/en/windows#%3Abdelete">:bdelete</a>.</div>
<div class="old-help-para">One local buffer variable is predefined:
					<a name="b%3Achangedtick"></a><code class="help-tag-right">b:changedtick</code> <a name="changetick"></a><code class="help-tag">changetick</code>
b:changedtick	The total number of changes to the current buffer.  It is
		incremented for each change.  An undo command is also a change
		in this case.  Resetting <a href="/neovim-docs-web/en/options#'modified'">'modified'</a> when writing the buffer is
		also counted.
		This can be used to perform an action only when the buffer has
		changed.  Example:<pre>:if my_changedtick != b:changedtick
:        let my_changedtick = b:changedtick
:        call My_Update()
:endif</pre></div>
<div class="old-help-para">		You cannot change or delete the b:changedtick variable.</div>
<div class="old-help-para">						<a name="window-variable"></a><code class="help-tag-right">window-variable</code> <a name="w%3Avar"></a><code class="help-tag">w:var</code> <a name="w%3A"></a><code class="help-tag">w:</code>
A variable name that is preceded with "w:" is local to the current window.  It
is deleted when the window is closed.</div>
<div class="old-help-para">						<a name="tabpage-variable"></a><code class="help-tag-right">tabpage-variable</code> <a name="t%3Avar"></a><code class="help-tag">t:var</code> <a name="t%3A"></a><code class="help-tag">t:</code>
A variable name that is preceded with "t:" is local to the current tab page,
It is deleted when the tab page is closed.</div>
<div class="old-help-para">						<a name="global-variable"></a><code class="help-tag-right">global-variable</code> <a name="g%3Avar"></a><code class="help-tag">g:var</code> <a name="g%3A"></a><code class="help-tag">g:</code>
Inside functions global variables are accessed with "g:".  Omitting this will
access a variable local to a function.  But "g:" can also be used in any other
place if you like.</div>
<div class="old-help-para">						<a name="local-variable"></a><code class="help-tag-right">local-variable</code> <a name="l%3Avar"></a><code class="help-tag">l:var</code> <a name="l%3A"></a><code class="help-tag">l:</code>
Inside functions local variables are accessed without prepending anything.
But you can also prepend "l:" if you like.  However, without prepending "l:"
you may run into reserved variable names.  For example "count".  By itself it
refers to "v:count".  Using "l:count" you can have a local variable with the
same name.</div>
<div class="old-help-para">						<a name="script-variable"></a><code class="help-tag-right">script-variable</code> <a name="s%3Avar"></a><code class="help-tag">s:var</code>
In a Vim script variables starting with "s:" can be used.  They cannot be
accessed from outside of the scripts, thus are local to the script.</div>
<div class="old-help-para">They can be used in:
<div class="help-li" style=""> commands executed while the script is sourced
</div><div class="help-li" style=""> functions defined in the script
</div><div class="help-li" style=""> autocommands defined in the script
</div><div class="help-li" style=""> functions and autocommands defined in functions and autocommands which were
  defined in the script (recursively)
</div><div class="help-li" style=""> user defined commands defined in the script
Thus not in:
</div><div class="help-li" style=""> other scripts sourced from this one
</div><div class="help-li" style=""> mappings
</div><div class="help-li" style=""> menus
</div><div class="help-li" style=""> etc.
</div></div>
<div class="old-help-para">Script variables can be used to avoid conflicts with global variable names.
Take this example:<pre>let s:counter = 0
function MyCounter()
  let s:counter = s:counter + 1
  echo s:counter
endfunction
command Tick call MyCounter()</pre>
You can now invoke "Tick" from any script, and the "s:counter" variable in
that script will not be changed, only the "s:counter" in the script where
"Tick" was defined is used.</div>
<div class="old-help-para">Another example that does the same:<pre>let s:counter = 0
command Tick let s:counter = s:counter + 1 | echo s:counter</pre>
When calling a function and invoking a user-defined command, the context for
script variables is set to the script where the function or command was
defined.</div>
<div class="old-help-para">The script variables are also available when a function is defined inside a
function that is defined in a script.  Example:<pre>let s:counter = 0
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
endfunction</pre>
This defines the MyCounter() function either for counting up or counting down
when calling StartCounting().  It doesn't matter from where StartCounting() is
called, the s:counter variable will be accessible in MyCounter().</div>
<div class="old-help-para">When the same script is sourced again it will use the same script variables.
They will remain valid as long as Vim is running.  This can be used to
maintain a counter:<pre>if !exists("s:counter")
  let s:counter = 1
  echo "script executed for the first time"
else
  let s:counter = s:counter + 1
  echo "script executed " .. s:counter .. " times now"
endif</pre>
Note that this means that filetype plugins don't get a different set of script
variables for each buffer.  Use local buffer variables instead <a href="/neovim-docs-web/en/eval#b%3Avar">b:var</a>.</div>
<div class="old-help-para"><h3 class="help-heading">PREDEFINED VIM VARIABLES<span class="help-heading-tags">			<a name="vim-variable"></a><span class="help-tag">vim-variable</span> <a name="v%3Avar"></a><span class="help-tag">v:var</span> <a name="v%3A"></a><span class="help-tag">v:</span></span></h3>								<a name="E963"></a><code class="help-tag-right">E963</code>
Some variables can be set by the user, but the type cannot be changed.</div>
<div class="old-help-para">					<a name="v%3Aargv"></a><code class="help-tag-right">v:argv</code> <a name="argv-variable"></a><code class="help-tag">argv-variable</code>
v:argv		The command line arguments Vim was invoked with.  This is a
		list of strings.  The first item is the Vim command.
		See <a href="/neovim-docs-web/en/eval#v%3Aprogpath">v:progpath</a> for the command with full path.</div>
<div class="old-help-para">					<a name="v%3Abeval_col"></a><code class="help-tag-right">v:beval_col</code> <a name="beval_col-variable"></a><code class="help-tag">beval_col-variable</code>
v:beval_col	The number of the column, over which the mouse pointer is.
		This is the byte index in the <a href="/neovim-docs-web/en/eval#v%3Abeval_lnum">v:beval_lnum</a> line.
		Only valid while evaluating the <a href="/neovim-docs-web/en/vim_diff#'balloonexpr'">'balloonexpr'</a> option.</div>
<div class="old-help-para">					<a name="v%3Abeval_bufnr"></a><code class="help-tag-right">v:beval_bufnr</code> <a name="beval_bufnr-variable"></a><code class="help-tag">beval_bufnr-variable</code>
v:beval_bufnr	The number of the buffer, over which the mouse pointer is. Only
		valid while evaluating the <a href="/neovim-docs-web/en/vim_diff#'balloonexpr'">'balloonexpr'</a> option.</div>
<div class="old-help-para">					<a name="v%3Abeval_lnum"></a><code class="help-tag-right">v:beval_lnum</code> <a name="beval_lnum-variable"></a><code class="help-tag">beval_lnum-variable</code>
v:beval_lnum	The number of the line, over which the mouse pointer is. Only
		valid while evaluating the <a href="/neovim-docs-web/en/vim_diff#'balloonexpr'">'balloonexpr'</a> option.</div>
<div class="old-help-para">					<a name="v%3Abeval_text"></a><code class="help-tag-right">v:beval_text</code> <a name="beval_text-variable"></a><code class="help-tag">beval_text-variable</code>
v:beval_text	The text under or after the mouse pointer.  Usually a word as
		it is useful for debugging a C program.  <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> applies,
		but a dot and "-&gt;" before the position is included.  When on a
		']' the text before it is used, including the matching '[' and
		word before it.  When on a Visual area within one line the
		highlighted text is used.  Also see <a href="/neovim-docs-web/en/cmdline#%3Ccexpr%3E">&lt;cexpr&gt;</a>.
		Only valid while evaluating the <a href="/neovim-docs-web/en/vim_diff#'balloonexpr'">'balloonexpr'</a> option.</div>
<div class="old-help-para">					<a name="v%3Abeval_winnr"></a><code class="help-tag-right">v:beval_winnr</code> <a name="beval_winnr-variable"></a><code class="help-tag">beval_winnr-variable</code>
v:beval_winnr	The number of the window, over which the mouse pointer is. Only
		valid while evaluating the <a href="/neovim-docs-web/en/vim_diff#'balloonexpr'">'balloonexpr'</a> option.  The first
		window has number zero (unlike most other places where a
		window gets a number).</div>
<div class="old-help-para">					<a name="v%3Abeval_winid"></a><code class="help-tag-right">v:beval_winid</code> <a name="beval_winid-variable"></a><code class="help-tag">beval_winid-variable</code>
v:beval_winid	The <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a> of the window, over which the mouse pointer
		is.  Otherwise like v:beval_winnr.</div>
<div class="old-help-para">					<a name="v%3Achar"></a><code class="help-tag-right">v:char</code> <a name="char-variable"></a><code class="help-tag">char-variable</code>
v:char		Argument for evaluating <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> and used for the typed
		character when using <code>&lt;expr&gt;</code> in an abbreviation <a href="/neovim-docs-web/en/map#%3Amap-%3Cexpr%3E">:map-&lt;expr&gt;</a>.
		It is also used by the <a href="/neovim-docs-web/en/autocmd#InsertCharPre">InsertCharPre</a> and <a href="/neovim-docs-web/en/autocmd#InsertEnter">InsertEnter</a> events.</div>
<div class="old-help-para">			<a name="v%3Acharconvert_from"></a><code class="help-tag-right">v:charconvert_from</code> <a name="charconvert_from-variable"></a><code class="help-tag">charconvert_from-variable</code>
v:charconvert_from
		The name of the character encoding of a file to be converted.
		Only valid while evaluating the <a href="/neovim-docs-web/en/options#'charconvert'">'charconvert'</a> option.</div>
<div class="old-help-para">			<a name="v%3Acharconvert_to"></a><code class="help-tag-right">v:charconvert_to</code> <a name="charconvert_to-variable"></a><code class="help-tag">charconvert_to-variable</code>
v:charconvert_to
		The name of the character encoding of a file after conversion.
		Only valid while evaluating the <a href="/neovim-docs-web/en/options#'charconvert'">'charconvert'</a> option.</div>
<div class="old-help-para">					<a name="v%3Acmdarg"></a><code class="help-tag-right">v:cmdarg</code> <a name="cmdarg-variable"></a><code class="help-tag">cmdarg-variable</code>
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
		   in <a href="/neovim-docs-web/en/options#'printexpr'">'printexpr'</a>.</div>
<div class="old-help-para">						<a name="v%3Acollate"></a><code class="help-tag-right">v:collate</code> <a name="collate-variable"></a><code class="help-tag">collate-variable</code>
v:collate	The current locale setting for collation order of the runtime
		environment.  This allows Vim scripts to be aware of the
		current locale encoding.  Technical: it's the value of
		LC_COLLATE.  When not using a locale the value is "C".
		This variable can not be set directly, use the <a href="/neovim-docs-web/en/mlang#%3Alanguage">:language</a>
		command.
		See <a href="/neovim-docs-web/en/mlang#multi-lang">multi-lang</a>.</div>
<div class="old-help-para">					<a name="v%3Acmdbang"></a><code class="help-tag-right">v:cmdbang</code> <a name="cmdbang-variable"></a><code class="help-tag">cmdbang-variable</code>
v:cmdbang	Set like v:cmdarg for a file read/write command.  When a "!"
		was used the value is 1, otherwise it is 0.  Note that this
		can only be used in autocommands.  For user commands <a href="/neovim-docs-web/en/map#%3Cbang%3E">&lt;bang&gt;</a>
		can be used.</div>
<div class="old-help-para">				<a name="v%3Acompleted_item"></a><code class="help-tag-right">v:completed_item</code> <a name="completed_item-variable"></a><code class="help-tag">completed_item-variable</code>
v:completed_item
		Dictionary containing the most recent <a href="/neovim-docs-web/en/insert#complete-items">complete-items</a> after
		<a href="/neovim-docs-web/en/autocmd#CompleteDone">CompleteDone</a>.  Empty if the completion failed, or after
		leaving and re-entering insert mode.
		Note: Plugins can modify the value to emulate the builtin
		<a href="/neovim-docs-web/en/autocmd#CompleteDone">CompleteDone</a> event behavior.</div>
<div class="old-help-para">					<a name="v%3Acount"></a><code class="help-tag-right">v:count</code> <a name="count-variable"></a><code class="help-tag">count-variable</code>
v:count		The count given for the last Normal mode command.  Can be used
		to get the count before a mapping.  Read-only.  Example:<pre>:map _x :&lt;C-U&gt;echo "the count is " .. v:count&lt;CR&gt;</pre></div>
<div class="old-help-para">		Note: The <code>&lt;C-U&gt;</code> is required to remove the line range that you
		get when typing ':' after a count.
		When there are two counts, as in "3d2w", they are multiplied,
		just like what happens in the command, "d6w" for the example.
		Also used for evaluating the <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> option.</div>
<div class="old-help-para">					<a name="v%3Acount1"></a><code class="help-tag-right">v:count1</code> <a name="count1-variable"></a><code class="help-tag">count1-variable</code>
v:count1	Just like "v:count", but defaults to one when no count is
		used.</div>
<div class="old-help-para">						<a name="v%3Actype"></a><code class="help-tag-right">v:ctype</code> <a name="ctype-variable"></a><code class="help-tag">ctype-variable</code>
v:ctype		The current locale setting for characters of the runtime
		environment.  This allows Vim scripts to be aware of the
		current locale encoding.  Technical: it's the value of
		LC_CTYPE.  When not using a locale the value is "C".
		This variable can not be set directly, use the <a href="/neovim-docs-web/en/mlang#%3Alanguage">:language</a>
		command.
		See <a href="/neovim-docs-web/en/mlang#multi-lang">multi-lang</a>.</div>
<div class="old-help-para">					<a name="v%3Adying"></a><code class="help-tag-right">v:dying</code> <a name="dying-variable"></a><code class="help-tag">dying-variable</code>
v:dying		Normally zero.  When a deadly signal is caught it's set to
		one.  When multiple signals are caught the number increases.
		Can be used in an autocommand to check if Vim didn't
		terminate normally. <code>{only works on Unix}</code>
		Example:<pre>:au VimLeave * if v:dying | echo "\nAAAAaaaarrrggghhhh!!!\n" | endif</pre></div>
<div class="old-help-para">		Note: if another deadly signal is caught when v:dying is one,
		VimLeave autocommands will not be executed.</div>
<div class="old-help-para">					<a name="v%3Aexiting"></a><code class="help-tag-right">v:exiting</code> <a name="exiting-variable"></a><code class="help-tag">exiting-variable</code>
v:exiting	Exit code, or <a href="/neovim-docs-web/en/eval#v%3Anull">v:null</a> before invoking the <a href="/neovim-docs-web/en/autocmd#VimLeavePre">VimLeavePre</a>
		and <a href="/neovim-docs-web/en/autocmd#VimLeave">VimLeave</a> autocmds.  See <a href="/neovim-docs-web/en/editing#%3Aq">:q</a>, <a href="/neovim-docs-web/en/editing#%3Ax">:x</a> and <a href="/neovim-docs-web/en/quickfix#%3Acquit">:cquit</a>.
		Example:<pre>:au VimLeave * echo "Exit value is " .. v:exiting

                *v:echospace* *echospace-variable*</pre>
v:echospace	Number of screen cells that can be used for an <code>:echo</code> message
		in the last screen line before causing the <a href="/neovim-docs-web/en/message#hit-enter-prompt">hit-enter-prompt</a>.
		Depends on <a href="/neovim-docs-web/en/options#'showcmd'">'showcmd'</a>, <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a> and <a href="/neovim-docs-web/en/options#'columns'">'columns'</a>.  You need to
		check <a href="/neovim-docs-web/en/options#'cmdheight'">'cmdheight'</a> for whether there are full-width lines
		available above the last line.</div>
<div class="old-help-para">					<a name="v%3Aerrmsg"></a><code class="help-tag-right">v:errmsg</code> <a name="errmsg-variable"></a><code class="help-tag">errmsg-variable</code>
v:errmsg	Last given error message.
		Modifiable (can be set).
		Example:<pre>:let v:errmsg = ""
:silent! next
:if v:errmsg != ""
:  ... handle error</pre></div>
<div class="old-help-para">				<a name="v%3Aerrors"></a><code class="help-tag-right">v:errors</code> <a name="errors-variable"></a><code class="help-tag">errors-variable</code> <a name="assert-return"></a><code class="help-tag">assert-return</code>
v:errors	Errors found by assert functions, such as <a href="/neovim-docs-web/en/testing#assert_true()">assert_true()</a>.
		This is a list of strings.
		The assert functions append an item when an assert fails.
		The return value indicates this: a one is returned if an item
		was added to v:errors, otherwise zero is returned.
		To remove old results make it empty:<pre>:let v:errors = []</pre></div>
<div class="old-help-para">		If v:errors is set to anything but a list it is made an empty
		list by the assert function.</div>
<div class="old-help-para">					<a name="v%3Aevent"></a><code class="help-tag-right">v:event</code> <a name="event-variable"></a><code class="help-tag">event-variable</code>
v:event		Dictionary of event data for the current <a href="/neovim-docs-web/en/autocmd#autocommand">autocommand</a>.  Valid
		only during the event lifetime; storing or passing v:event is
		invalid!  Copy it instead:<pre>au TextYankPost * let g:foo = deepcopy(v:event)</pre></div>
<div class="old-help-para">		Keys vary by event; see the documentation for the specific
		event, e.g. <a href="/neovim-docs-web/en/autocmd#DirChanged">DirChanged</a> or <a href="/neovim-docs-web/en/autocmd#TextYankPost">TextYankPost</a>.
<div class="help-column_heading">			KEY		DESCRIPTION</div>			abort		Whether the event triggered during
					an aborting condition (e.g. <a href="/neovim-docs-web/en/cmdline#c_Esc">c_Esc</a> or
					<a href="/neovim-docs-web/en/cmdline#c_CTRL-C">c_CTRL-C</a> for <a href="/neovim-docs-web/en/autocmd#CmdlineLeave">CmdlineLeave</a>).
			chan		<a href="/neovim-docs-web/en/channel#channel-id">channel-id</a> or 0 for "internal".
			cmdlevel	Level of cmdline.
			cmdtype		Type of cmdline, <a href="/neovim-docs-web/en/cmdline#cmdline-char">cmdline-char</a>.
			cwd		Current working directory.
			inclusive	Motion is <a href="/neovim-docs-web/en/motion#inclusive">inclusive</a>, else exclusive.
			scope		Event-specific scope name.
			operator	Current <a href="/neovim-docs-web/en/motion#operator">operator</a>.  Also set for Ex
					commands (unlike <a href="/neovim-docs-web/en/eval#v%3Aoperator">v:operator</a>). For
					example if <a href="/neovim-docs-web/en/autocmd#TextYankPost">TextYankPost</a> is triggered
					by the <a href="/neovim-docs-web/en/change#%3Ayank">:yank</a> Ex command then
					<code>v:event.operator</code> is "y".
			regcontents	Text stored in the register as a
					<a href="/neovim-docs-web/en/builtin#readfile()">readfile()</a>-style list of lines.
			regname		Requested register (e.g "x" for "xyy)
					or the empty string for an unnamed
					operation.
			regtype		Type of register as returned by
					<a href="/neovim-docs-web/en/builtin#getregtype()">getregtype()</a>.
			visual		Selection is visual (as opposed to,
					e.g., via motion).
			completed_item    Current selected complete item on
					<a href="/neovim-docs-web/en/autocmd#CompleteChanged">CompleteChanged</a>, Is <code>{}</code> when no complete
					item selected.
			height 		Height of popup menu on <a href="/neovim-docs-web/en/autocmd#CompleteChanged">CompleteChanged</a>
			width   	width of popup menu on <a href="/neovim-docs-web/en/autocmd#CompleteChanged">CompleteChanged</a>
			row  	 	Row count of popup menu on <a href="/neovim-docs-web/en/autocmd#CompleteChanged">CompleteChanged</a>,
					relative to screen.
			col  	 	Col count of popup menu on <a href="/neovim-docs-web/en/autocmd#CompleteChanged">CompleteChanged</a>,
					relative to screen.
			size 		Total number of completion items on
					<a href="/neovim-docs-web/en/autocmd#CompleteChanged">CompleteChanged</a>.
			scrollbar 	Is <a href="/neovim-docs-web/en/eval#v%3Atrue">v:true</a> if popup menu have scrollbar, or
					<a href="/neovim-docs-web/en/eval#v%3Afalse">v:false</a> if not.
			changed_window 	Is <a href="/neovim-docs-web/en/eval#v%3Atrue">v:true</a> if the the event fired
					while changing window (or tab) on <a href="/neovim-docs-web/en/autocmd#DirChanged">DirChanged</a>.
			status		Job status or exit code, -1 means "unknown". <a href="/neovim-docs-web/en/autocmd#TermClose">TermClose</a></div>
<div class="old-help-para">					<a name="v%3Aexception"></a><code class="help-tag-right">v:exception</code> <a name="exception-variable"></a><code class="help-tag">exception-variable</code>
v:exception	The value of the exception most recently caught and not
		finished.  See also <a href="/neovim-docs-web/en/eval#v%3Athrowpoint">v:throwpoint</a> and <a href="/neovim-docs-web/en/eval#throw-variables">throw-variables</a>.
		Example:<pre>:try
:  throw "oops"
:catch /.*/
:  echo "caught " .. v:exception
:endtry</pre></div>
<div class="old-help-para">		Output: "caught oops".</div>
<div class="old-help-para">					<a name="v%3Afalse"></a><code class="help-tag-right">v:false</code> <a name="false-variable"></a><code class="help-tag">false-variable</code>
v:false		Special value used to put "false" in JSON and msgpack.  See
		<a href="/neovim-docs-web/en/builtin#json_encode()">json_encode()</a>.  This value is converted to "v:false" when used
		as a String (e.g. in <a href="/neovim-docs-web/en/eval#expr5">expr5</a> with string concatenation
		operator) and to zero when used as a Number (e.g. in <a href="/neovim-docs-web/en/eval#expr5">expr5</a>
		or <a href="/neovim-docs-web/en/eval#expr7">expr7</a> when used with numeric operators). Read-only.</div>
<div class="old-help-para">					<a name="v%3Afcs_reason"></a><code class="help-tag-right">v:fcs_reason</code> <a name="fcs_reason-variable"></a><code class="help-tag">fcs_reason-variable</code>
v:fcs_reason	The reason why the <a href="/neovim-docs-web/en/autocmd#FileChangedShell">FileChangedShell</a> event was triggered.
		Can be used in an autocommand to decide what to do and/or what
		to set v:fcs_choice to.  Possible values:
			deleted		file no longer exists
			conflict	file contents, mode or timestamp was
					changed and buffer is modified
			changed		file contents has changed
			mode		mode of file changed
			time		only file timestamp changed</div>
<div class="old-help-para">					<a name="v%3Afcs_choice"></a><code class="help-tag-right">v:fcs_choice</code> <a name="fcs_choice-variable"></a><code class="help-tag">fcs_choice-variable</code>
v:fcs_choice	What should happen after a <a href="/neovim-docs-web/en/autocmd#FileChangedShell">FileChangedShell</a> event was
		triggered.  Can be used in an autocommand to tell Vim what to
		do with the affected buffer:
			reload		Reload the buffer (does not work if
					the file was deleted).
			edit		Reload the buffer and detect the
					values for options such as
					<a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>, <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a>, <a href="/neovim-docs-web/en/options#'binary'">'binary'</a>
					(does not work if the file was
					deleted).
			ask		Ask the user what to do, as if there
					was no autocommand.  Except that when
					only the timestamp changed nothing
					will happen.
			<code>&lt;empty&gt;</code>		Nothing, the autocommand should do
					everything that needs to be done.
		The default is empty.  If another (invalid) value is used then
		Vim behaves like it is empty, there is no warning message.</div>
<div class="old-help-para">					<a name="v%3Afname"></a><code class="help-tag-right">v:fname</code> <a name="fname-variable"></a><code class="help-tag">fname-variable</code>
v:fname		When evaluating <a href="/neovim-docs-web/en/options#'includeexpr'">'includeexpr'</a>: the file name that was
		detected.  Empty otherwise.</div>
<div class="old-help-para">					<a name="v%3Afname_in"></a><code class="help-tag-right">v:fname_in</code> <a name="fname_in-variable"></a><code class="help-tag">fname_in-variable</code>
v:fname_in	The name of the input file.  Valid while evaluating:
<div class="help-column_heading">			option		used for</div>			<a href="/neovim-docs-web/en/options#'charconvert'">'charconvert'</a>	file to be converted
			<a href="/neovim-docs-web/en/options#'diffexpr'">'diffexpr'</a>	original file
			<a href="/neovim-docs-web/en/options#'patchexpr'">'patchexpr'</a>	original file
			<a href="/neovim-docs-web/en/options#'printexpr'">'printexpr'</a>	file to be printed
		And set to the swap file name for <a href="/neovim-docs-web/en/autocmd#SwapExists">SwapExists</a>.</div>
<div class="old-help-para">					<a name="v%3Afname_out"></a><code class="help-tag-right">v:fname_out</code> <a name="fname_out-variable"></a><code class="help-tag">fname_out-variable</code>
v:fname_out	The name of the output file.  Only valid while
		evaluating:
<div class="help-column_heading">			option		used for</div>			<a href="/neovim-docs-web/en/options#'charconvert'">'charconvert'</a>	resulting converted file (*)			<a href="/neovim-docs-web/en/options#'diffexpr'">'diffexpr'</a>	output of diff
			<a href="/neovim-docs-web/en/options#'patchexpr'">'patchexpr'</a>	resulting patched file
		() When doing conversion for a write command (e.g., ":w
		file") it will be equal to v:fname_in.  When doing conversion
		for a read command (e.g., ":e file") it will be a temporary
		file and different from v:fname_in.</div>
<div class="old-help-para">					<a name="v%3Afname_new"></a><code class="help-tag-right">v:fname_new</code> <a name="fname_new-variable"></a><code class="help-tag">fname_new-variable</code>
v:fname_new	The name of the new version of the file.  Only valid while
		evaluating <a href="/neovim-docs-web/en/options#'diffexpr'">'diffexpr'</a>.</div>
<div class="old-help-para">					<a name="v%3Afname_diff"></a><code class="help-tag-right">v:fname_diff</code> <a name="fname_diff-variable"></a><code class="help-tag">fname_diff-variable</code>
v:fname_diff	The name of the diff (patch) file.  Only valid while
		evaluating <a href="/neovim-docs-web/en/options#'patchexpr'">'patchexpr'</a>.</div>
<div class="old-help-para">					<a name="v%3Afolddashes"></a><code class="help-tag-right">v:folddashes</code> <a name="folddashes-variable"></a><code class="help-tag">folddashes-variable</code>
v:folddashes	Used for <a href="/neovim-docs-web/en/options#'foldtext'">'foldtext'</a>: dashes representing foldlevel of a closed
		fold.
		Read-only in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>. <a href="/neovim-docs-web/en/fold#fold-foldtext">fold-foldtext</a></div>
<div class="old-help-para">					<a name="v%3Afoldlevel"></a><code class="help-tag-right">v:foldlevel</code> <a name="foldlevel-variable"></a><code class="help-tag">foldlevel-variable</code>
v:foldlevel	Used for <a href="/neovim-docs-web/en/options#'foldtext'">'foldtext'</a>: foldlevel of closed fold.
		Read-only in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>. <a href="/neovim-docs-web/en/fold#fold-foldtext">fold-foldtext</a></div>
<div class="old-help-para">					<a name="v%3Afoldend"></a><code class="help-tag-right">v:foldend</code> <a name="foldend-variable"></a><code class="help-tag">foldend-variable</code>
v:foldend	Used for <a href="/neovim-docs-web/en/options#'foldtext'">'foldtext'</a>: last line of closed fold.
		Read-only in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>. <a href="/neovim-docs-web/en/fold#fold-foldtext">fold-foldtext</a></div>
<div class="old-help-para">					<a name="v%3Afoldstart"></a><code class="help-tag-right">v:foldstart</code> <a name="foldstart-variable"></a><code class="help-tag">foldstart-variable</code>
v:foldstart	Used for <a href="/neovim-docs-web/en/options#'foldtext'">'foldtext'</a>: first line of closed fold.
		Read-only in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>. <a href="/neovim-docs-web/en/fold#fold-foldtext">fold-foldtext</a></div>
<div class="old-help-para">					<a name="v%3Ahlsearch"></a><code class="help-tag-right">v:hlsearch</code> <a name="hlsearch-variable"></a><code class="help-tag">hlsearch-variable</code>
v:hlsearch	Variable that indicates whether search highlighting is on.
		Setting it makes sense only if <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> is enabled. Setting
		this variable to zero acts like the <a href="/neovim-docs-web/en/pattern#%3Anohlsearch">:nohlsearch</a> command,
		setting it to one acts like<pre>let &amp;hlsearch = &amp;hlsearch</pre></div>
<div class="old-help-para">		Note that the value is restored when returning from a
		function. <a href="/neovim-docs-web/en/userfunc#function-search-undo">function-search-undo</a>.</div>
<div class="old-help-para">					<a name="v%3Ainsertmode"></a><code class="help-tag-right">v:insertmode</code> <a name="insertmode-variable"></a><code class="help-tag">insertmode-variable</code>
v:insertmode	Used for the <a href="/neovim-docs-web/en/autocmd#InsertEnter">InsertEnter</a> and <a href="/neovim-docs-web/en/autocmd#InsertChange">InsertChange</a> autocommand
		events.  Values:
			i	Insert mode
			r	Replace mode
			v	Virtual Replace mode</div>
<div class="old-help-para">						<a name="v%3Akey"></a><code class="help-tag-right">v:key</code> <a name="key-variable"></a><code class="help-tag">key-variable</code>
v:key		Key of the current item of a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.  Only valid while
		evaluating the expression used with <a href="/neovim-docs-web/en/builtin#map()">map()</a> and <a href="/neovim-docs-web/en/builtin#filter()">filter()</a>.
		Read-only.</div>
<div class="old-help-para">						<a name="v%3Alang"></a><code class="help-tag-right">v:lang</code> <a name="lang-variable"></a><code class="help-tag">lang-variable</code>
v:lang		The current locale setting for messages of the runtime
		environment.  This allows Vim scripts to be aware of the
		current language.  Technical: it's the value of LC_MESSAGES.
		The value is system dependent.
		This variable can not be set directly, use the <a href="/neovim-docs-web/en/mlang#%3Alanguage">:language</a>
		command.
		It can be different from <a href="/neovim-docs-web/en/eval#v%3Actype">v:ctype</a> when messages are desired
		in a different language than what is used for character
		encoding.  See <a href="/neovim-docs-web/en/mlang#multi-lang">multi-lang</a>.</div>
<div class="old-help-para">						<a name="v%3Alc_time"></a><code class="help-tag-right">v:lc_time</code> <a name="lc_time-variable"></a><code class="help-tag">lc_time-variable</code>
v:lc_time	The current locale setting for time messages of the runtime
		environment.  This allows Vim scripts to be aware of the
		current language.  Technical: it's the value of LC_TIME.
		This variable can not be set directly, use the <a href="/neovim-docs-web/en/mlang#%3Alanguage">:language</a>
		command.  See <a href="/neovim-docs-web/en/mlang#multi-lang">multi-lang</a>.</div>
<div class="old-help-para">						<a name="v%3Alnum"></a><code class="help-tag-right">v:lnum</code> <a name="lnum-variable"></a><code class="help-tag">lnum-variable</code>
v:lnum		Line number for the <a href="/neovim-docs-web/en/options#'foldexpr'">'foldexpr'</a> <a href="/neovim-docs-web/en/fold#fold-expr">fold-expr</a>, <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> and
		<a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> expressions, tab page number for <a href="/neovim-docs-web/en/options#'guitablabel'">'guitablabel'</a>
		and <a href="/neovim-docs-web/en/options#'guitabtooltip'">'guitabtooltip'</a>.  Only valid while one of these
		expressions is being evaluated.  Read-only when in the
		<a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>.</div>
<div class="old-help-para">						<a name="v%3Alua"></a><code class="help-tag-right">v:lua</code> <a name="lua-variable"></a><code class="help-tag">lua-variable</code>
v:lua		Prefix for calling Lua functions from expressions.
		See <a href="/neovim-docs-web/en/lua#v%3Alua-call">v:lua-call</a> for more information.</div>
<div class="old-help-para">					<a name="v%3Amouse_win"></a><code class="help-tag-right">v:mouse_win</code> <a name="mouse_win-variable"></a><code class="help-tag">mouse_win-variable</code>
v:mouse_win	Window number for a mouse click obtained with <a href="/neovim-docs-web/en/builtin#getchar()">getchar()</a>.
		First window has number 1, like with <a href="/neovim-docs-web/en/builtin#winnr()">winnr()</a>.  The value is
		zero when there was no mouse button click.</div>
<div class="old-help-para">					<a name="v%3Amouse_winid"></a><code class="help-tag-right">v:mouse_winid</code> <a name="mouse_winid-variable"></a><code class="help-tag">mouse_winid-variable</code>
v:mouse_winid	<a href="/neovim-docs-web/en/windows#window-ID">window-ID</a> for a mouse click obtained with <a href="/neovim-docs-web/en/builtin#getchar()">getchar()</a>.
		The value is zero when there was no mouse button click.</div>
<div class="old-help-para">					<a name="v%3Amouse_lnum"></a><code class="help-tag-right">v:mouse_lnum</code> <a name="mouse_lnum-variable"></a><code class="help-tag">mouse_lnum-variable</code>
v:mouse_lnum	Line number for a mouse click obtained with <a href="/neovim-docs-web/en/builtin#getchar()">getchar()</a>.
		This is the text line number, not the screen line number.  The
		value is zero when there was no mouse button click.</div>
<div class="old-help-para">					<a name="v%3Amouse_col"></a><code class="help-tag-right">v:mouse_col</code> <a name="mouse_col-variable"></a><code class="help-tag">mouse_col-variable</code>
v:mouse_col	Column number for a mouse click obtained with <a href="/neovim-docs-web/en/builtin#getchar()">getchar()</a>.
		This is the screen column number, like with <a href="/neovim-docs-web/en/builtin#virtcol()">virtcol()</a>.  The
		value is zero when there was no mouse button click.</div>
<div class="old-help-para">				<a name="v%3Amsgpack_types"></a><code class="help-tag-right">v:msgpack_types</code> <a name="msgpack_types-variable"></a><code class="help-tag">msgpack_types-variable</code>
v:msgpack_types	Dictionary containing msgpack types used by <a href="/neovim-docs-web/en/builtin#msgpackparse()">msgpackparse()</a>
		and <a href="/neovim-docs-web/en/builtin#msgpackdump()">msgpackdump()</a>. All types inside dictionary are fixed
		(not editable) empty lists. To check whether some list is one
		of msgpack types, use <a href="/neovim-docs-web/en/motion#is">is</a> operator.</div>
<div class="old-help-para">					<a name="v%3Anull"></a><code class="help-tag-right">v:null</code> <a name="null-variable"></a><code class="help-tag">null-variable</code>
v:null		Special value used to put "null" in JSON and NIL in msgpack.
		See <a href="/neovim-docs-web/en/builtin#json_encode()">json_encode()</a>.  This value is converted to "v:null" when
		used as a String (e.g. in <a href="/neovim-docs-web/en/eval#expr5">expr5</a> with string concatenation
		operator) and to zero when used as a Number (e.g. in <a href="/neovim-docs-web/en/eval#expr5">expr5</a>
		or <a href="/neovim-docs-web/en/eval#expr7">expr7</a> when used with numeric operators). Read-only.
		In some places <code>v:null</code> can be used for a List, Dict, etc.
		that is not set.  That is slightly different than an empty
		List, Dict, etc.</div>
<div class="old-help-para">					<a name="v%3Anumbermax"></a><code class="help-tag-right">v:numbermax</code> <a name="numbermax-variable"></a><code class="help-tag">numbermax-variable</code>
v:numbermax	Maximum value of a number.</div>
<div class="old-help-para">					<a name="v%3Anumbermin"></a><code class="help-tag-right">v:numbermin</code> <a name="numbermin-variable"></a><code class="help-tag">numbermin-variable</code>
v:numbermin	Minimum value of a number (negative).</div>
<div class="old-help-para">					<a name="v%3Anumbersize"></a><code class="help-tag-right">v:numbersize</code> <a name="numbersize-variable"></a><code class="help-tag">numbersize-variable</code>
v:numbersize	Number of bits in a Number.  This is normally 64, but on some
		systems it may be 32.</div>
<div class="old-help-para">					<a name="v%3Aoldfiles"></a><code class="help-tag-right">v:oldfiles</code> <a name="oldfiles-variable"></a><code class="help-tag">oldfiles-variable</code>
v:oldfiles	List of file names that is loaded from the <a href="/neovim-docs-web/en/starting#shada">shada</a> file on
		startup.  These are the files that Vim remembers marks for.
		The length of the List is limited by the ' argument of the
		<a href="/neovim-docs-web/en/options#'shada'">'shada'</a> option (default is 100).
		When the <a href="/neovim-docs-web/en/starting#shada">shada</a> file is not used the List is empty.
		Also see <a href="/neovim-docs-web/en/starting#%3Aoldfiles">:oldfiles</a> and <a href="/neovim-docs-web/en/cmdline#c_%23%3C">c_#&lt;</a>.
		The List can be modified, but this has no effect on what is
		stored in the <a href="/neovim-docs-web/en/starting#shada">shada</a> file later.  If you use values other
		than String this will cause trouble.</div>
<div class="old-help-para">						    <a name="v%3Aoption_new"></a><code class="help-tag-right">v:option_new</code>
v:option_new    New value of the option. Valid while executing an <a href="/neovim-docs-web/en/autocmd#OptionSet">OptionSet</a>
		autocommand.
						    <a name="v%3Aoption_old"></a><code class="help-tag-right">v:option_old</code>
v:option_old    Old value of the option. Valid while executing an <a href="/neovim-docs-web/en/autocmd#OptionSet">OptionSet</a>
		autocommand. Depending on the command used for setting and the
		kind of option this is either the local old value or the
		global old value.
						    <a name="v%3Aoption_oldlocal"></a><code class="help-tag-right">v:option_oldlocal</code>
v:option_oldlocal
		Old local value of the option. Valid while executing an
		<a href="/neovim-docs-web/en/autocmd#OptionSet">OptionSet</a> autocommand.
						    <a name="v%3Aoption_oldglobal"></a><code class="help-tag-right">v:option_oldglobal</code>
v:option_oldglobal
		Old global value of the option. Valid while executing an
		<a href="/neovim-docs-web/en/autocmd#OptionSet">OptionSet</a> autocommand.
						    <a name="v%3Aoption_type"></a><code class="help-tag-right">v:option_type</code>
v:option_type   Scope of the set command. Valid while executing an
		<a href="/neovim-docs-web/en/autocmd#OptionSet">OptionSet</a> autocommand. Can be either "global" or "local"
						    <a name="v%3Aoption_command"></a><code class="help-tag-right">v:option_command</code>
v:option_command
		Command used to set the option. Valid while executing an
		<a href="/neovim-docs-web/en/autocmd#OptionSet">OptionSet</a> autocommand.
<div class="help-column_heading">			value		option was set via</div>			"setlocal"	<a href="/neovim-docs-web/en/options#%3Asetlocal">:setlocal</a> or ":let l:xxx"
			"setglobal"	<a href="/neovim-docs-web/en/options#%3Asetglobal">:setglobal</a> or ":let g:xxx"
			"set"		<a href="/neovim-docs-web/en/options#%3Aset">:set</a> or <a href="/neovim-docs-web/en/eval#%3Alet">:let</a>
			"modeline"	<a href="/neovim-docs-web/en/options#modeline">modeline</a>
					<a name="v%3Aoperator"></a><code class="help-tag-right">v:operator</code> <a name="operator-variable"></a><code class="help-tag">operator-variable</code>
v:operator	The last operator given in Normal mode.  This is a single
		character except for commands starting with <code>&lt;g&gt;</code> or <code>&lt;z&gt;</code>,
		in which case it is two characters.  Best used alongside
		<a href="/neovim-docs-web/en/eval#v%3Aprevcount">v:prevcount</a> and <a href="/neovim-docs-web/en/eval#v%3Aregister">v:register</a>.  Useful if you want to cancel
		Operator-pending mode and then use the operator, e.g.:<pre>:omap O &lt;Esc&gt;:call MyMotion(v:operator)&lt;CR&gt;</pre></div>
<div class="old-help-para">		The value remains set until another operator is entered, thus
		don't expect it to be empty.
		v:operator is not set for <a href="/neovim-docs-web/en/change#%3Adelete">:delete</a>, <a href="/neovim-docs-web/en/change#%3Ayank">:yank</a> or other Ex
		commands.
		Read-only.</div>
<div class="old-help-para">					<a name="v%3Aprevcount"></a><code class="help-tag-right">v:prevcount</code> <a name="prevcount-variable"></a><code class="help-tag">prevcount-variable</code>
v:prevcount	The count given for the last but one Normal mode command.
		This is the v:count value of the previous command.  Useful if
		you want to cancel Visual or Operator-pending mode and then
		use the count, e.g.:<pre>:vmap % &lt;Esc&gt;:call MyFilter(v:prevcount)&lt;CR&gt;</pre></div>
<div class="old-help-para">		Read-only.</div>
<div class="old-help-para">					<a name="v%3Aprofiling"></a><code class="help-tag-right">v:profiling</code> <a name="profiling-variable"></a><code class="help-tag">profiling-variable</code>
v:profiling	Normally zero.  Set to one after using ":profile start".
		See <a href="/neovim-docs-web/en/repeat#profiling">profiling</a>.</div>
<div class="old-help-para">					<a name="v%3Aprogname"></a><code class="help-tag-right">v:progname</code> <a name="progname-variable"></a><code class="help-tag">progname-variable</code>
v:progname	The name by which Nvim was invoked (with path removed).
		Read-only.</div>
<div class="old-help-para">					<a name="v%3Aprogpath"></a><code class="help-tag-right">v:progpath</code> <a name="progpath-variable"></a><code class="help-tag">progpath-variable</code>
v:progpath	Absolute path to the current running Nvim.
		Read-only.</div>
<div class="old-help-para">					<a name="v%3Aregister"></a><code class="help-tag-right">v:register</code> <a name="register-variable"></a><code class="help-tag">register-variable</code>
v:register	The name of the register in effect for the current normal mode
		command (regardless of whether that command actually used a
		register).  Or for the currently executing normal mode mapping
		(use this in custom commands that take a register).
		If none is supplied it is the default register '"', unless
		<a href="/neovim-docs-web/en/options#'clipboard'">'clipboard'</a> contains "unnamed" or "unnamedplus", then it is
		'' or '+'.
		Also see <a href="/neovim-docs-web/en/builtin#getreg()">getreg()</a> and <a href="/neovim-docs-web/en/builtin#setreg()">setreg()</a></div>
<div class="old-help-para">					<a name="v%3Ascrollstart"></a><code class="help-tag-right">v:scrollstart</code> <a name="scrollstart-variable"></a><code class="help-tag">scrollstart-variable</code>
v:scrollstart	String describing the script or function that caused the
		screen to scroll up.  It's only set when it is empty, thus the
		first reason is remembered.  It is set to "Unknown" for a
		typed command.
		This can be used to find out why your script causes the
		hit-enter prompt.</div>
<div class="old-help-para">					<a name="v%3Aservername"></a><code class="help-tag-right">v:servername</code> <a name="servername-variable"></a><code class="help-tag">servername-variable</code>
v:servername	Primary listen-address of Nvim, the first item returned by
		<a href="/neovim-docs-web/en/builtin#serverlist()">serverlist()</a>. Usually this is the named pipe created by Nvim
		at <a href="/neovim-docs-web/en/starting#startup">startup</a> or given by <a href="/neovim-docs-web/en/starting#--listen">--listen</a> (or the deprecated
		<a href="/neovim-docs-web/en/deprecated#%24NVIM_LISTEN_ADDRESS">$NVIM_LISTEN_ADDRESS</a> env var).</div>
<div class="old-help-para">		See also <a href="/neovim-docs-web/en/builtin#serverstart()">serverstart()</a> <a href="/neovim-docs-web/en/builtin#serverstop()">serverstop()</a>.
		Read-only.</div>
<div class="old-help-para">								       <a name="%24NVIM"></a><code class="help-tag-right">$NVIM</code>
		$NVIM is set by <a href="/neovim-docs-web/en/nvim_terminal_emulator#terminal">terminal</a> and <a href="/neovim-docs-web/en/builtin#jobstart()">jobstart()</a>, and is thus
		a hint that the current environment is a subprocess of Nvim.
		Example:<pre>if $NVIM
  echo nvim_get_chan_info(v:parent)
endif</pre></div>
<div class="old-help-para">		Note the contents of $NVIM may change in the future.</div>
<div class="old-help-para">v:searchforward			<a name="v%3Asearchforward"></a><code class="help-tag-right">v:searchforward</code> <a name="searchforward-variable"></a><code class="help-tag">searchforward-variable</code>
		Search direction:  1 after a forward search, 0 after a
		backward search.  It is reset to forward when directly setting
		the last search pattern, see <a href="/neovim-docs-web/en/change#quote%2F">quote/</a>.
		Note that the value is restored when returning from a
		function. <a href="/neovim-docs-web/en/userfunc#function-search-undo">function-search-undo</a>.
		Read-write.</div>
<div class="old-help-para">					<a name="v%3Ashell_error"></a><code class="help-tag-right">v:shell_error</code> <a name="shell_error-variable"></a><code class="help-tag">shell_error-variable</code>
v:shell_error	Result of the last shell command.  When non-zero, the last
		shell command had an error.  When zero, there was no problem.
		This only works when the shell returns the error code to Vim.
		The value -1 is often used when the command could not be
		executed.  Read-only.
		Example:<pre>:!mv foo bar
:if v:shell_error
:  echo 'could not rename "foo" to "bar"!'
:endif</pre></div>
<div class="old-help-para">					<a name="v%3Astatusmsg"></a><code class="help-tag-right">v:statusmsg</code> <a name="statusmsg-variable"></a><code class="help-tag">statusmsg-variable</code>
v:statusmsg	Last given status message.
		Modifiable (can be set).</div>
<div class="old-help-para">					<a name="v%3Astderr"></a><code class="help-tag-right">v:stderr</code> <a name="stderr-variable"></a><code class="help-tag">stderr-variable</code>
v:stderr	<a href="/neovim-docs-web/en/channel#channel-id">channel-id</a> corresponding to stderr. The value is always 2;
		use this variable to make your code more descriptive.
		Unlike stdin and stdout (see <a href="/neovim-docs-web/en/builtin#stdioopen()">stdioopen()</a>), stderr is always
		open for writing. Example:<pre>:call chansend(v:stderr, "error: toaster empty\n")</pre></div>
<div class="old-help-para">					<a name="v%3Aswapname"></a><code class="help-tag-right">v:swapname</code> <a name="swapname-variable"></a><code class="help-tag">swapname-variable</code>
v:swapname	Only valid when executing <a href="/neovim-docs-web/en/autocmd#SwapExists">SwapExists</a> autocommands: Name of
		the swap file found.  Read-only.</div>
<div class="old-help-para">					<a name="v%3Aswapchoice"></a><code class="help-tag-right">v:swapchoice</code> <a name="swapchoice-variable"></a><code class="help-tag">swapchoice-variable</code>
v:swapchoice	<a href="/neovim-docs-web/en/autocmd#SwapExists">SwapExists</a> autocommands can set this to the selected choice
		for handling an existing swap file:
			'o'	Open read-only
			'e'	Edit anyway
			'r'	Recover
			'd'	Delete swapfile
			'q'	Quit
			'a'	Abort
		The value should be a single-character string.  An empty value
		results in the user being asked, as would happen when there is
		no SwapExists autocommand.  The default is empty.</div>
<div class="old-help-para">					<a name="v%3Aswapcommand"></a><code class="help-tag-right">v:swapcommand</code> <a name="swapcommand-variable"></a><code class="help-tag">swapcommand-variable</code>
v:swapcommand	Normal mode command to be executed after a file has been
		opened.  Can be used for a <a href="/neovim-docs-web/en/autocmd#SwapExists">SwapExists</a> autocommand to have
		another Vim open the file and jump to the right place.  For
		example, when jumping to a tag the value is ":tag tagname\r".
		For ":edit +cmd file" the value is ":cmd\r".</div>
<div class="old-help-para">				<a name="v%3At_TYPE"></a><code class="help-tag-right">v:t_TYPE</code> <a name="v%3At_bool"></a><code class="help-tag">v:t_bool</code> <a name="t_bool-variable"></a><code class="help-tag">t_bool-variable</code>
v:t_bool	Value of <a href="/neovim-docs-web/en/eval#Boolean">Boolean</a> type.  Read-only.  See: <a href="/neovim-docs-web/en/builtin#type()">type()</a>
					<a name="v%3At_dict"></a><code class="help-tag-right">v:t_dict</code> <a name="t_dict-variable"></a><code class="help-tag">t_dict-variable</code>
v:t_dict	Value of <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> type.  Read-only.  See: <a href="/neovim-docs-web/en/builtin#type()">type()</a>
					<a name="v%3At_float"></a><code class="help-tag-right">v:t_float</code> <a name="t_float-variable"></a><code class="help-tag">t_float-variable</code>
v:t_float	Value of <a href="/neovim-docs-web/en/eval#Float">Float</a> type.  Read-only.  See: <a href="/neovim-docs-web/en/builtin#type()">type()</a>
					<a name="v%3At_func"></a><code class="help-tag-right">v:t_func</code> <a name="t_func-variable"></a><code class="help-tag">t_func-variable</code>
v:t_func	Value of <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> type.  Read-only.  See: <a href="/neovim-docs-web/en/builtin#type()">type()</a>
					<a name="v%3At_list"></a><code class="help-tag-right">v:t_list</code> <a name="t_list-variable"></a><code class="help-tag">t_list-variable</code>
v:t_list	Value of <a href="/neovim-docs-web/en/eval#List">List</a> type.  Read-only.  See: <a href="/neovim-docs-web/en/builtin#type()">type()</a>
					<a name="v%3At_number"></a><code class="help-tag-right">v:t_number</code> <a name="t_number-variable"></a><code class="help-tag">t_number-variable</code>
v:t_number	Value of <a href="/neovim-docs-web/en/eval#Number">Number</a> type.  Read-only.  See: <a href="/neovim-docs-web/en/builtin#type()">type()</a>
					<a name="v%3At_string"></a><code class="help-tag-right">v:t_string</code> <a name="t_string-variable"></a><code class="help-tag">t_string-variable</code>
v:t_string	Value of <a href="/neovim-docs-web/en/eval#String">String</a> type.  Read-only.  See: <a href="/neovim-docs-web/en/builtin#type()">type()</a>
					<a name="v%3At_blob"></a><code class="help-tag-right">v:t_blob</code> <a name="t_blob-variable"></a><code class="help-tag">t_blob-variable</code>
v:t_blob	Value of <a href="/neovim-docs-web/en/eval#Blob">Blob</a> type.  Read-only.  See: <a href="/neovim-docs-web/en/builtin#type()">type()</a></div>
<div class="old-help-para">				<a name="v%3Atermresponse"></a><code class="help-tag-right">v:termresponse</code> <a name="termresponse-variable"></a><code class="help-tag">termresponse-variable</code>
v:termresponse	The escape sequence returned by the terminal for the DA
		(request primary device attributes) control sequence.  It is
		set when Vim receives an escape sequence that starts with ESC
		[ or CSI and ends in a 'c', with only digits, ';' and '.' in
		between.
		When this option is set, the TermResponse autocommand event is
		fired, so that you can react to the response from the
		terminal.
		The response from a new xterm is: "&lt;Esc&gt;[ Pp ; Pv ; Pc c".  Pp
		is the terminal type: 0 for vt100 and 1 for vt220.  Pv is the
		patch level (since this was introduced in patch 95, it's
		always 95 or bigger).  Pc is always zero.</div>
<div class="old-help-para">					<a name="v%3Atesting"></a><code class="help-tag-right">v:testing</code> <a name="testing-variable"></a><code class="help-tag">testing-variable</code>
v:testing	Must be set before using <code>test_garbagecollect_now()</code>.</div>
<div class="old-help-para">				<a name="v%3Athis_session"></a><code class="help-tag-right">v:this_session</code> <a name="this_session-variable"></a><code class="help-tag">this_session-variable</code>
v:this_session	Full filename of the last loaded or saved session file.
		Empty when no session file has been saved.  See <a href="/neovim-docs-web/en/starting#%3Amksession">:mksession</a>.
		Modifiable (can be set).</div>
<div class="old-help-para">					<a name="v%3Athrowpoint"></a><code class="help-tag-right">v:throwpoint</code> <a name="throwpoint-variable"></a><code class="help-tag">throwpoint-variable</code>
v:throwpoint	The point where the exception most recently caught and not
		finished was thrown.  Not set when commands are typed.  See
		also <a href="/neovim-docs-web/en/eval#v%3Aexception">v:exception</a> and <a href="/neovim-docs-web/en/eval#throw-variables">throw-variables</a>.
		Example:<pre>:try
:  throw "oops"
:catch /.*/
:  echo "Exception from" v:throwpoint
:endtry</pre></div>
<div class="old-help-para">		Output: "Exception from test.vim, line 2"</div>
<div class="old-help-para">					<a name="v%3Atrue"></a><code class="help-tag-right">v:true</code> <a name="true-variable"></a><code class="help-tag">true-variable</code>
v:true		Special value used to put "true" in JSON and msgpack.  See
		<a href="/neovim-docs-web/en/builtin#json_encode()">json_encode()</a>.  This value is converted to "v:true" when used
		as a String (e.g. in <a href="/neovim-docs-web/en/eval#expr5">expr5</a> with string concatenation
		operator) and to one when used as a Number (e.g. in <a href="/neovim-docs-web/en/eval#expr5">expr5</a> or
		<a href="/neovim-docs-web/en/eval#expr7">expr7</a> when used with numeric operators). Read-only.</div>
<div class="old-help-para">						<a name="v%3Aval"></a><code class="help-tag-right">v:val</code> <a name="val-variable"></a><code class="help-tag">val-variable</code>
v:val		Value of the current item of a <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.  Only
		valid while evaluating the expression used with <a href="/neovim-docs-web/en/builtin#map()">map()</a> and
		<a href="/neovim-docs-web/en/builtin#filter()">filter()</a>.  Read-only.</div>
<div class="old-help-para">					<a name="v%3Aversion"></a><code class="help-tag-right">v:version</code> <a name="version-variable"></a><code class="help-tag">version-variable</code>
v:version	Vim version number: major version times 100 plus minor
		version.  Vim 5.0 is 500, Vim 5.1 is 501.
		Read-only.
		Use <a href="/neovim-docs-web/en/builtin#has()">has()</a> to check the Nvim (not Vim) version:<pre>:if has("nvim-0.2.1")</pre></div>
<div class="old-help-para">				<a name="v%3Avim_did_enter"></a><code class="help-tag-right">v:vim_did_enter</code> <a name="vim_did_enter-variable"></a><code class="help-tag">vim_did_enter-variable</code>
v:vim_did_enter	0 during startup, 1 just before <a href="/neovim-docs-web/en/autocmd#VimEnter">VimEnter</a>.
		Read-only.</div>
<div class="old-help-para">					<a name="v%3Awarningmsg"></a><code class="help-tag-right">v:warningmsg</code> <a name="warningmsg-variable"></a><code class="help-tag">warningmsg-variable</code>
v:warningmsg	Last given warning message.
		Modifiable (can be set).</div>
<div class="old-help-para">					<a name="v%3Awindowid"></a><code class="help-tag-right">v:windowid</code> <a name="windowid-variable"></a><code class="help-tag">windowid-variable</code>
v:windowid	Application-specific window "handle" which may be set by any
		attached UI. Defaults to zero.
		Note: For Nvim <a href="/neovim-docs-web/en/windows#windows">windows</a> use <a href="/neovim-docs-web/en/builtin#winnr()">winnr()</a> or <a href="/neovim-docs-web/en/builtin#win_getid()">win_getid()</a>, see
		<a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.</div>
<div class="old-help-para"><h2 class="help-heading">4. Builtin Functions<span class="help-heading-tags">				<a name="vim-function"></a><span class="help-tag">vim-function</span> <a name="functions"></a><span class="help-tag">functions</span></span></h2></div>
<div class="old-help-para">The Vimscript subsystem (referred to as "eval" internally) provides builtin
functions.  Scripts can also define <a href="/neovim-docs-web/en/eval#user-function">user-function</a>s.</div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/usr_41#function-list">function-list</a> to browse functions by topic.</div>
<div class="old-help-para">The alphabetic list of all builtin functions and details are in a separate
help file: <a href="/neovim-docs-web/en/builtin#builtin-functions">builtin-functions</a>.</div>
<div class="old-help-para"><h2 class="help-heading">5. Defining functions<span class="help-heading-tags">					<a name="user-function"></a><span class="help-tag">user-function</span></span></h2></div>
<div class="old-help-para">New functions can be defined.  These can be called just like builtin
functions.  The function takes arguments, executes a sequence of Ex commands
and can return a value.</div>
<div class="old-help-para">You can find most information about defining functions in <a href="/neovim-docs-web/en/userfunc#userfunc.txt">userfunc.txt</a>.</div>
<div class="old-help-para"><h2 class="help-heading">6. Curly braces names<span class="help-heading-tags">					<a name="curly-braces-names"></a><span class="help-tag">curly-braces-names</span></span></h2></div>
<div class="old-help-para">In most places where you can use a variable, you can use a "curly braces name"
variable.  This is a regular variable name with one or more expressions
wrapped in braces {} like this:<pre>my_{adjective}_variable</pre>
When Vim encounters this, it evaluates the expression inside the braces, puts
that in place of the expression, and re-interprets the whole as a variable
name.  So in the above example, if the variable "adjective" was set to
"noisy", then the reference would be to "my_noisy_variable", whereas if
"adjective" was set to "quiet", then it would be to "my_quiet_variable".</div>
<div class="old-help-para">One application for this is to create a set of variables governed by an option
value.  For example, the statement<pre>echo my_{&amp;background}_message</pre>
would output the contents of "my_dark_message" or "my_light_message" depending
on the current value of <a href="/neovim-docs-web/en/options#'background'">'background'</a>.</div>
<div class="old-help-para">You can use multiple brace pairs:<pre>echo my_{adverb}_{adjective}_message</pre>
..or even nest them:<pre>echo my_{ad{end_of_word}}_message</pre>
where "end_of_word" is either "verb" or "jective".</div>
<div class="old-help-para">However, the expression inside the braces must evaluate to a valid single
variable name, e.g. this is invalid:<pre>:let foo='a + b'
:echo c{foo}d</pre>
.. since the result of expansion is "ca + bd", which is not a variable name.</div>
<div class="old-help-para">						<a name="curly-braces-function-names"></a><code class="help-tag-right">curly-braces-function-names</code>
You can call and define functions by an evaluated name in a similar way.
Example:<pre>:let func_end='whizz'
:call my_func_{func_end}(parameter)</pre>
This would call the function "my_func_whizz(parameter)".</div>
<div class="old-help-para">This does NOT work:<pre>:let i = 3
:let @{i} = ''  " error
:echo @{i}      " error</pre>
<h2 class="help-heading">7. Commands<span class="help-heading-tags">						<a name="expression-commands"></a><span class="help-tag">expression-commands</span></span></h2></div>
<div class="old-help-para">:let <code>{var-name}</code> = <code>{expr1}</code>				<a name="%3Alet"></a><code class="help-tag-right">:let</code> <a name="E18"></a><code class="help-tag">E18</code>
			Set internal variable <code>{var-name}</code> to the result of the
			expression <code>{expr1}</code>.  The variable will get the type
			from the <code>{expr}</code>.  If <code>{var-name}</code> didn't exist yet, it
			is created.</div>
<div class="old-help-para">:let <code>{var-name}</code>[{idx}] = <code>{expr1}</code>			<a name="E689"></a><code class="help-tag-right">E689</code>
			Set a list item to the result of the expression
			<code>{expr1}</code>.  <code>{var-name}</code> must refer to a list and <code>{idx}</code>
			must be a valid index in that list.  For nested list
			the index can be repeated.
			This cannot be used to add an item to a <a href="/neovim-docs-web/en/eval#List">List</a>.
			This cannot be used to set a byte in a String.  You
			can do that like this:<pre>:let var = var[0:2] .. 'X' .. var[4:]</pre></div>
<div class="old-help-para">			When <code>{var-name}</code> is a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> then <code>{idx}</code> can be the
			length of the blob, in which case one byte is
			appended.</div>
<div class="old-help-para">							<a name="E711"></a><code class="help-tag-right">E711</code> <a name="E719"></a><code class="help-tag">E719</code>
:let <code>{var-name}</code>[{idx1}:{idx2}] = <code>{expr1}</code>		<a name="E708"></a><code class="help-tag-right">E708</code> <a name="E709"></a><code class="help-tag">E709</code> <a name="E710"></a><code class="help-tag">E710</code>
			Set a sequence of items in a <a href="/neovim-docs-web/en/eval#List">List</a> to the result of
			the expression <code>{expr1}</code>, which must be a list with the
			correct number of items.
			<code>{idx1}</code> can be omitted, zero is used instead.
			<code>{idx2}</code> can be omitted, meaning the end of the list.
			When the selected range of items is partly past the
			end of the list, items will be added.</div>
<div class="old-help-para">			<a name="%3Alet%2B%3D"></a><code class="help-tag-right">:let+=</code> <a name="%3Alet-%3D"></a><code class="help-tag">:let-=</code> <a name="%3Aletstar%3D"></a><code class="help-tag">:letstar=</code>
			<a name="%3Alet%2F%3D"></a><code class="help-tag-right">:let/=</code> <a name="%3Alet%25%3D"></a><code class="help-tag">:let%=</code> <a name="%3Alet.%3D"></a><code class="help-tag">:let.=</code> <a name="%3Alet..%3D"></a><code class="help-tag">:let..=</code> <a name="E734"></a><code class="help-tag">E734</code>
:let <code>{var}</code> += <code>{expr1}</code>	Like ":let <code>{var}</code> = <code>{var}</code> + <code>{expr1}</code>".
:let <code>{var}</code> -= <code>{expr1}</code>	Like ":let <code>{var}</code> = <code>{var}</code> - <code>{expr1}</code>".
:let <code>{var}</code>= <code>{expr1}</code>	Like ":let <code>{var}</code> = <code>{var}</code> * <code>{expr1}</code>".
:let <code>{var}</code> /= <code>{expr1}</code>	Like ":let <code>{var}</code> = <code>{var}</code> / <code>{expr1}</code>".
:let <code>{var}</code> %= <code>{expr1}</code>	Like ":let <code>{var}</code> = <code>{var}</code> % <code>{expr1}</code>".
:let <code>{var}</code> .= <code>{expr1}</code>	Like ":let <code>{var}</code> = <code>{var}</code> . <code>{expr1}</code>".
:let <code>{var}</code> ..= <code>{expr1}</code>	Like ":let <code>{var}</code> = <code>{var}</code> .. <code>{expr1}</code>".
			These fail if <code>{var}</code> was not set yet and when the type
			of <code>{var}</code> and <code>{expr1}</code> don't fit the operator.</div>
<div class="old-help-para">:let ${env-name} = <code>{expr1}</code>			<a name="%3Alet-environment"></a><code class="help-tag-right">:let-environment</code> <a name="%3Alet-%24"></a><code class="help-tag">:let-$</code>
			Set environment variable <code>{env-name}</code> to the result of
			the expression <code>{expr1}</code>.  The type is always String.
:let ${env-name} .= <code>{expr1}</code>
			Append <code>{expr1}</code> to the environment variable <code>{env-name}</code>.
			If the environment variable didn't exist yet this
			works like "=".</div>
<div class="old-help-para">:let @{reg-name} = <code>{expr1}</code>			<a name="%3Alet-register"></a><code class="help-tag-right">:let-register</code> <a name="%3Alet-%40"></a><code class="help-tag">:let-@</code>
			Write the result of the expression <code>{expr1}</code> in register
			<code>{reg-name}</code>.  <code>{reg-name}</code> must be a single letter, and
			must be the name of a writable register (see
			<a href="/neovim-docs-web/en/change#registers">registers</a>).  "@@" can be used for the unnamed
			register, "@/" for the search pattern.
			If the result of <code>{expr1}</code> ends in a <code>&lt;CR&gt;</code> or <code>&lt;NL&gt;</code>, the
			register will be linewise, otherwise it will be set to
			charwise.
			This can be used to clear the last search pattern:<pre>:let @/ = ""</pre></div>
<div class="old-help-para">			This is different from searching for an empty string,
			that would match everywhere.</div>
<div class="old-help-para">:let @{reg-name} .= <code>{expr1}</code>
			Append <code>{expr1}</code> to register <code>{reg-name}</code>.  If the
			register was empty it's like setting it to <code>{expr1}</code>.</div>
<div class="old-help-para">:let &amp;{option-name} = <code>{expr1}</code>			<a name="%3Alet-option"></a><code class="help-tag-right">:let-option</code> <a name="%3Alet-%26"></a><code class="help-tag">:let-&amp;</code>
			Set option <code>{option-name}</code> to the result of the
			expression <code>{expr1}</code>.  A String or Number value is
			always converted to the type of the option.
			For an option local to a window or buffer the effect
			is just like using the <a href="/neovim-docs-web/en/options#%3Aset">:set</a> command: both the local
			value and the global value are changed.
			Example:<pre>:let &amp;path = &amp;path .. ',/usr/local/include'</pre>
:let &amp;{option-name} .= <code>{expr1}</code>
			For a string option: Append <code>{expr1}</code> to the value.
			Does not insert a comma like <a href="/neovim-docs-web/en/options#%3Aset%2B%3D">:set+=</a>.</div>
<div class="old-help-para">:let &amp;{option-name} += <code>{expr1}</code>
:let &amp;{option-name} -= <code>{expr1}</code>
			For a number or boolean option: Add or subtract
			<code>{expr1}</code>.</div>
<div class="old-help-para">:let &amp;l:{option-name} = <code>{expr1}</code>
:let &amp;l:{option-name} .= <code>{expr1}</code>
:let &amp;l:{option-name} += <code>{expr1}</code>
:let &amp;l:{option-name} -= <code>{expr1}</code>
			Like above, but only set the local value of an option
			(if there is one).  Works like <a href="/neovim-docs-web/en/options#%3Asetlocal">:setlocal</a>.</div>
<div class="old-help-para">:let &amp;g:{option-name} = <code>{expr1}</code>
:let &amp;g:{option-name} .= <code>{expr1}</code>
:let &amp;g:{option-name} += <code>{expr1}</code>
:let &amp;g:{option-name} -= <code>{expr1}</code>
			Like above, but only set the global value of an option
			(if there is one).  Works like <a href="/neovim-docs-web/en/options#%3Asetglobal">:setglobal</a>.</div>
<div class="old-help-para">:let [{name1}, <code>{name2}</code>, ...] = <code>{expr1}</code>		<a name="%3Alet-unpack"></a><code class="help-tag-right">:let-unpack</code> <a name="E687"></a><code class="help-tag">E687</code> <a name="E688"></a><code class="help-tag">E688</code>
			<code>{expr1}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#List">List</a>.  The first item in
			the list is assigned to <code>{name1}</code>, the second item to
			<code>{name2}</code>, etc.
			The number of names must match the number of items in
			the <a href="/neovim-docs-web/en/eval#List">List</a>.
			Each name can be one of the items of the ":let"
			command as mentioned above.
			Example:<pre>:let [s, item] = GetItem(s)</pre></div>
<div class="old-help-para">			Detail: <code>{expr1}</code> is evaluated first, then the
			assignments are done in sequence.  This matters if
			<code>{name2}</code> depends on <code>{name1}</code>.  Example:<pre>:let x = [0, 1]
:let i = 0
:let [i, x[i]] = [1, 2]
:echo x</pre></div>
<div class="old-help-para">			The result is [0, 2].</div>
<div class="old-help-para">:let [{name1}, <code>{name2}</code>, ...] .= <code>{expr1}</code>
:let [{name1}, <code>{name2}</code>, ...] += <code>{expr1}</code>
:let [{name1}, <code>{name2}</code>, ...] -= <code>{expr1}</code>
			Like above, but append/add/subtract the value for each
			<a href="/neovim-docs-web/en/eval#List">List</a> item.</div>
<div class="old-help-para">:let [{name}, ..., ; <code>{lastname}</code>] = <code>{expr1}</code>				<a name="E452"></a><code class="help-tag-right">E452</code>
			Like <a href="/neovim-docs-web/en/eval#%3Alet-unpack">:let-unpack</a> above, but the <a href="/neovim-docs-web/en/eval#List">List</a> may have more
			items than there are names.  A list of the remaining
			items is assigned to <code>{lastname}</code>.  If there are no
			remaining items <code>{lastname}</code> is set to an empty list.
			Example:<pre>:let [a, b; rest] = ["aval", "bval", 3, 4]</pre></div>
<div class="old-help-para">:let [{name}, ..., ; <code>{lastname}</code>] .= <code>{expr1}</code>
:let [{name}, ..., ; <code>{lastname}</code>] += <code>{expr1}</code>
:let [{name}, ..., ; <code>{lastname}</code>] -= <code>{expr1}</code>
			Like above, but append/add/subtract the value for each
			<a href="/neovim-docs-web/en/eval#List">List</a> item.</div>
<div class="old-help-para">						<a name="%3Alet%3D%3C%3C"></a><code class="help-tag-right">:let=&lt;&lt;</code> <a name="%3Alet-heredoc"></a><code class="help-tag">:let-heredoc</code>
						<a name="E990"></a><code class="help-tag-right">E990</code> <a name="E991"></a><code class="help-tag">E991</code> <a name="E172"></a><code class="help-tag">E172</code> <a name="E221"></a><code class="help-tag">E221</code>
:let <code>{var-name}</code> =&lt;&lt; [trim] <code>{endmarker}</code>
text...
text...
<code>{endmarker}</code>
			Set internal variable <code>{var-name}</code> to a <a href="/neovim-docs-web/en/eval#List">List</a>
			containing the lines of text bounded by the string
			<code>{endmarker}</code>. The lines of text is used as a
			<a href="/neovim-docs-web/en/eval#literal-string">literal-string</a>.
			<code>{endmarker}</code> must not contain white space.
			<code>{endmarker}</code> cannot start with a lower case character.
			The last line should end only with the <code>{endmarker}</code>
			string without any other character.  Watch out for
			white space after <code>{endmarker}</code>!</div>
<div class="old-help-para">			Without "trim" any white space characters in the lines
			of text are preserved.  If "trim" is specified before
			<code>{endmarker}</code>, then indentation is stripped so you can
			do:<pre>let text =&lt;&lt; trim END
   if ok
     echo 'done'
   endif
END</pre></div>
<div class="old-help-para">			Results in: <code>["if ok", "  echo 'done'", "endif"]</code>
			The marker must line up with "let" and the indentation
			of the first line is removed from all the text lines.
			Specifically: all the leading indentation exactly
			matching the leading indentation of the first
			non-empty text line is stripped from the input lines.
			All leading indentation exactly matching the leading
			indentation before <code>let</code> is stripped from the line
			containing <code>{endmarker}</code>.  Note that the difference
			between space and tab matters here.</div>
<div class="old-help-para">			If <code>{var-name}</code> didn't exist yet, it is created.
			Cannot be followed by another command, but can be
			followed by a comment.</div>
<div class="old-help-para">			To avoid line continuation to be applied, consider
			adding 'C' to <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>:<pre>set cpo+=C
let var =&lt;&lt; END
   \ leading backslash
END
set cpo-=C</pre></div>
<div class="old-help-para">			Examples:<pre>let var1 =&lt;&lt; END
Sample text 1
    Sample text 2
Sample text 3
END

let data =&lt;&lt; trim DATA
        1 2 3 4
        5 6 7 8
DATA</pre></div>
<div class="old-help-para">								<a name="E121"></a><code class="help-tag-right">E121</code>
:let <code>{var-name}</code>	..	List the value of variable <code>{var-name}</code>.  Multiple
			variable names may be given.  Special names recognized
			here:				<a name="E738"></a><code class="help-tag-right">E738</code>
			  g:	global variables
			  b:	local buffer variables
			  w:	local window variables
			  t:	local tab page variables
			  s:	script-local variables
			  l:	local function variables
			  v:	Vim variables.</div>
<div class="old-help-para">:let			List the values of all variables.  The type of the
			variable is indicated before the value:
			    <code>&lt;nothing&gt;</code>	String
				#	Number
				*	Funcref


:unl[et][!] <code>{name}</code> ...				<a name="%3Aunlet"></a><code class="help-tag-right">:unlet</code> <a name="%3Aunl"></a><code class="help-tag">:unl</code> <a name="E108"></a><code class="help-tag">E108</code> <a name="E795"></a><code class="help-tag">E795</code>
			Remove the internal variable <code>{name}</code>.  Several variable
			names can be given, they are all removed.  The name
			may also be a <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> item.
			With [!] no error message is given for non-existing
			variables.
			One or more items from a <a href="/neovim-docs-web/en/eval#List">List</a> can be removed:<pre>:unlet list[3]          " remove fourth item
:unlet list[3:]   " remove fourth item to last</pre></div>
<div class="old-help-para">			One item from a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> can be removed at a time:<pre>:unlet dict['two']
:unlet dict.two</pre></div>
<div class="old-help-para">			This is especially useful to clean up used global
			variables and script-local variables (these are not
			deleted when the script ends).  Function-local
			variables are automatically deleted when the function
			ends.</div>
<div class="old-help-para">:unl[et] ${env-name} ...			<a name="%3Aunlet-environment"></a><code class="help-tag-right">:unlet-environment</code> <a name="%3Aunlet-%24"></a><code class="help-tag">:unlet-$</code>
			Remove environment variable <code>{env-name}</code>.
			Can mix <code>{name}</code> and ${env-name} in one :unlet command.
			No error message is given for a non-existing
			variable, also without !.
			If the system does not support deleting an environment
			variable, it is made empty.</div>
<div class="old-help-para">						<a name="%3Acons"></a><code class="help-tag-right">:cons</code> <a name="%3Aconst"></a><code class="help-tag">:const</code>
:cons[t] <code>{var-name}</code> = <code>{expr1}</code>
:cons[t] [{name1}, <code>{name2}</code>, ...] = <code>{expr1}</code>
:cons[t] [{name}, ..., ; <code>{lastname}</code>] = <code>{expr1}</code>
			Similar to <a href="/neovim-docs-web/en/eval#%3Alet">:let</a>, but additionally lock the variable
			after setting the value.  This is the same as locking
			the variable with <a href="/neovim-docs-web/en/eval#%3Alockvar">:lockvar</a> just after <a href="/neovim-docs-web/en/eval#%3Alet">:let</a>, thus:<pre>:const x = 1</pre></div>
<div class="old-help-para">			is equivalent to:<pre>:let x = 1
:lockvar! x</pre></div>
<div class="old-help-para">			This is useful if you want to make sure the variable
			is not modified.  If the value is a List or Dictionary
			literal then the items also cannot be changed:<pre>const ll = [1, 2, 3]
let ll[1] = 5  " Error!</pre></div>
<div class="old-help-para">			Nested references are not locked:<pre>let lvar = ['a']
const lconst = [0, lvar]
let lconst[0] = 2  " Error!
let lconst[1][0] = 'b'  " OK</pre></div>
<div class="old-help-para">							<a name="E995"></a><code class="help-tag-right">E995</code>
			<a href="/neovim-docs-web/en/eval#%3Aconst">:const</a> does not allow to for changing a variable.<pre>:let x = 1
:const x = 2  " Error!</pre></div>
<div class="old-help-para">							<a name="E996"></a><code class="help-tag-right">E996</code>
			Note that environment variables, option values and
			register values cannot be used here, since they cannot
			be locked.</div>
<div class="old-help-para">:cons[t]
:cons[t] <code>{var-name}</code>
			If no argument is given or only <code>{var-name}</code> is given,
			the behavior is the same as <a href="/neovim-docs-web/en/eval#%3Alet">:let</a>.</div>
<div class="old-help-para">:lockv[ar][!] [depth] <code>{name}</code> ...			<a name="%3Alockvar"></a><code class="help-tag-right">:lockvar</code> <a name="%3Alockv"></a><code class="help-tag">:lockv</code>
			Lock the internal variable <code>{name}</code>.  Locking means that
			it can no longer be changed (until it is unlocked).
			A locked variable can be deleted:<pre>:lockvar v
:let v = 'asdf'          " fails!
:unlet v          " works</pre></div>
<div class="old-help-para">							<a name="E741"></a><code class="help-tag-right">E741</code> <a name="E940"></a><code class="help-tag">E940</code>
			If you try to change a locked variable you get an
			error message: "E741: Value is locked: <code>{name}</code>".
			If you try to lock or unlock a built-in variable you
			will get an error message "E940: Cannot lock or unlock
			variable <code>{name}</code>".</div>
<div class="old-help-para">			[depth] is relevant when locking a <a href="/neovim-docs-web/en/eval#List">List</a> or
			<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.  It specifies how deep the locking goes:
				1	Lock the <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> itself,
					cannot add or remove items, but can
					still change their values.
				2	Also lock the values, cannot change
					the items.  If an item is a <a href="/neovim-docs-web/en/eval#List">List</a> or
					<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>, cannot add or remove
					items, but can still change the
					values.
				3	Like 2 but for the <a href="/neovim-docs-web/en/eval#List">List</a> /
					<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> in the <a href="/neovim-docs-web/en/eval#List">List</a> /
					<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>, one level deeper.
			The default [depth] is 2, thus when <code>{name}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a>
			or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> the values cannot be changed.
								<a name="E743"></a><code class="help-tag-right">E743</code>
			For unlimited depth use [!] and omit [depth].
			However, there is a maximum depth of 100 to catch
			loops.</div>
<div class="old-help-para">			Note that when two variables refer to the same <a href="/neovim-docs-web/en/eval#List">List</a>
			and you lock one of them, the <a href="/neovim-docs-web/en/eval#List">List</a> will also be
			locked when used through the other variable.
			Example:<pre>:let l = [0, 1, 2, 3]
:let cl = l
:lockvar l
:let cl[1] = 99                " won't work!</pre></div>
<div class="old-help-para">			You may want to make a copy of a list to avoid this.
			See <a href="/neovim-docs-web/en/builtin#deepcopy()">deepcopy()</a>.</div>
<div class="old-help-para">:unlo[ckvar][!] [depth] <code>{name}</code> ...			<a name="%3Aunlockvar"></a><code class="help-tag-right">:unlockvar</code> <a name="%3Aunlo"></a><code class="help-tag">:unlo</code>
			Unlock the internal variable <code>{name}</code>.  Does the
			opposite of <a href="/neovim-docs-web/en/eval#%3Alockvar">:lockvar</a>.</div>
<div class="old-help-para">			No error is given if <code>{name}</code> does not exist.</div>
<div class="old-help-para">:if <code>{expr1}</code>			<a name="%3Aif"></a><code class="help-tag-right">:if</code> <a name="%3Aend"></a><code class="help-tag">:end</code> <a name="%3Aendif"></a><code class="help-tag">:endif</code> <a name="%3Aen"></a><code class="help-tag">:en</code> <a name="E171"></a><code class="help-tag">E171</code> <a name="E579"></a><code class="help-tag">E579</code> <a name="E580"></a><code class="help-tag">E580</code>
:en[dif]		Execute the commands until the next matching <code>:else</code>
			or <code>:endif</code> if <code>{expr1}</code> evaluates to non-zero.
			Although the short forms work, it is recommended to
			always use <code>:endif</code> to avoid confusion and to make
			auto-indenting work properly.</div>
<div class="old-help-para">			From Vim version 4.5 until 5.0, every Ex command in
			between the <code>:if</code> and <code>:endif</code> is ignored.  These two
			commands were just to allow for future expansions in a
			backward compatible way.  Nesting was allowed.  Note
			that any <code>:else</code> or <code>:elseif</code> was ignored, the <code>else</code>
			part was not executed either.</div>
<div class="old-help-para">			You can use this to remain compatible with older
			versions:<pre>:if version &gt;= 500
:  version-5-specific-commands
:endif</pre></div>
<div class="old-help-para">			The commands still need to be parsed to find the
			<code>endif</code>.  Sometimes an older Vim has a problem with a
			new command.  For example, <code>:silent</code> is recognized as
			a <code>:substitute</code> command.  In that case <code>:execute</code> can
			avoid problems:<pre>:if version &gt;= 600
:  execute "silent 1,$delete"
:endif</pre></div>
<div class="old-help-para">			NOTE: The <code>:append</code> and <code>:insert</code> commands don't work
			properly in between <code>:if</code> and <code>:endif</code>.</div>
<div class="old-help-para">						<a name="%3Aelse"></a><code class="help-tag-right">:else</code> <a name="%3Ael"></a><code class="help-tag">:el</code> <a name="E581"></a><code class="help-tag">E581</code> <a name="E583"></a><code class="help-tag">E583</code>
:el[se]			Execute the commands until the next matching <code>:else</code>
			or <code>:endif</code> if they previously were not being
			executed.</div>
<div class="old-help-para">					<a name="%3Aelseif"></a><code class="help-tag-right">:elseif</code> <a name="%3Aelsei"></a><code class="help-tag">:elsei</code> <a name="E582"></a><code class="help-tag">E582</code> <a name="E584"></a><code class="help-tag">E584</code>
:elsei[f] <code>{expr1}</code>	Short for <code>:else</code> <code>:if</code>, with the addition that there
			is no extra <code>:endif</code>.</div>
<div class="old-help-para">:wh[ile] <code>{expr1}</code>			<a name="%3Awhile"></a><code class="help-tag-right">:while</code> <a name="%3Aendwhile"></a><code class="help-tag">:endwhile</code> <a name="%3Awh"></a><code class="help-tag">:wh</code> <a name="%3Aendw"></a><code class="help-tag">:endw</code>
						<a name="E170"></a><code class="help-tag-right">E170</code> <a name="E585"></a><code class="help-tag">E585</code> <a name="E588"></a><code class="help-tag">E588</code> <a name="E733"></a><code class="help-tag">E733</code>
:endw[hile]		Repeat the commands between <code>:while</code> and <code>:endwhile</code>,
			as long as <code>{expr1}</code> evaluates to non-zero.
			When an error is detected from a command inside the
			loop, execution continues after the <code>endwhile</code>.
			Example:<pre>:let lnum = 1
:while lnum &lt;= line("$")
   :call FixLine(lnum)
   :let lnum = lnum + 1
:endwhile</pre></div>
<div class="old-help-para">			NOTE: The <code>:append</code> and <code>:insert</code> commands don't work
			properly inside a <code>:while</code> and <code>:for</code> loop.</div>
<div class="old-help-para">:for <code>{var}</code> in <code>{object}</code>					<a name="%3Afor"></a><code class="help-tag-right">:for</code> <a name="E690"></a><code class="help-tag">E690</code> <a name="E732"></a><code class="help-tag">E732</code>
:endfo[r]						<a name="%3Aendfo"></a><code class="help-tag-right">:endfo</code> <a name="%3Aendfor"></a><code class="help-tag">:endfor</code>
			Repeat the commands between <code>:for</code> and <code>:endfor</code> for
			each item in <code>{object}</code>.  <code>{object}</code> can be a <a href="/neovim-docs-web/en/eval#List">List</a>,
			a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> or a <a href="/neovim-docs-web/en/eval#String">String</a>.</div>
<div class="old-help-para">			Variable <code>{var}</code> is set to the value of each item.</div>
<div class="old-help-para">			When an error is detected for a command inside the
			loop, execution continues after the <code>endfor</code>.
			Changing <code>{object}</code> inside the loop affects what items
			are used.  Make a copy if this is unwanted:<pre>:for item in copy(mylist)</pre></div>
<div class="old-help-para">			When <code>{object}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> and not making a copy, Vim
			stores a reference to the next item in the <a href="/neovim-docs-web/en/eval#List">List</a>
			before executing the commands with the current item.
			Thus the current item can be removed without effect.
			Removing any later item means it will not be found.
			Thus the following example works (an inefficient way
			to make a <a href="/neovim-docs-web/en/eval#List">List</a> empty):<pre>for item in mylist
   call remove(mylist, 0)
endfor</pre></div>
<div class="old-help-para">			Note that reordering the <a href="/neovim-docs-web/en/eval#List">List</a> (e.g., with sort() or
			reverse()) may have unexpected effects.</div>
<div class="old-help-para">			When <code>{object}</code> is a <a href="/neovim-docs-web/en/eval#Blob">Blob</a>, Vim always makes a copy to
			iterate over.  Unlike with <a href="/neovim-docs-web/en/eval#List">List</a>, modifying the
			<a href="/neovim-docs-web/en/eval#Blob">Blob</a> does not affect the iteration.</div>
<div class="old-help-para">			When <code>{object}</code> is a <a href="/neovim-docs-web/en/eval#String">String</a> each item is a string with
			one character, plus any combining characters.</div>
<div class="old-help-para">:for [{var1}, <code>{var2}</code>, ...] in <code>{listlist}</code>
:endfo[r]
			Like <code>:for</code> above, but each item in <code>{listlist}</code> must be
			a list, of which each item is assigned to <code>{var1}</code>,
			<code>{var2}</code>, etc.  Example:<pre>:for [lnum, col] in [[1, 3], [2, 5], [3, 8]]
   :echo getline(lnum)[col]
:endfor</pre></div>
<div class="old-help-para">						<a name="%3Acontinue"></a><code class="help-tag-right">:continue</code> <a name="%3Acon"></a><code class="help-tag">:con</code> <a name="E586"></a><code class="help-tag">E586</code>
:con[tinue]		When used inside a <code>:while</code> or <code>:for</code> loop, jumps back
			to the start of the loop.</div>
<div class="old-help-para">			If it is used after a <code>:try</code> inside the loop but
			before the matching <code>:finally</code> (if present), the
			commands following the <code>:finally</code> up to the matching
			<code>:endtry</code> are executed first.  This process applies to
			all nested <code>:try</code>s inside the loop.  The outermost
			<code>:endtry</code> then jumps back to the start of the loop.</div>
<div class="old-help-para">						<a name="%3Abreak"></a><code class="help-tag-right">:break</code> <a name="%3Abrea"></a><code class="help-tag">:brea</code> <a name="E587"></a><code class="help-tag">E587</code>
:brea[k]		When used inside a <code>:while</code> or <code>:for</code> loop, skips to
			the command after the matching <code>:endwhile</code> or
			<code>:endfor</code>.
			If it is used after a <code>:try</code> inside the loop but
			before the matching <code>:finally</code> (if present), the
			commands following the <code>:finally</code> up to the matching
			<code>:endtry</code> are executed first.  This process applies to
			all nested <code>:try</code>s inside the loop.  The outermost
			<code>:endtry</code> then jumps to the command after the loop.</div>
<div class="old-help-para">:try				<a name="%3Atry"></a><code class="help-tag-right">:try</code> <a name="%3Aendt"></a><code class="help-tag">:endt</code> <a name="%3Aendtry"></a><code class="help-tag">:endtry</code> <a name="E600"></a><code class="help-tag">E600</code> <a name="E601"></a><code class="help-tag">E601</code> <a name="E602"></a><code class="help-tag">E602</code>
:endt[ry]		Change the error handling for the commands between
			<code>:try</code> and <code>:endtry</code> including everything being
			executed across <code>:source</code> commands, function calls,
			or autocommand invocations.</div>
<div class="old-help-para">			When an error or interrupt is detected and there is
			a <code>:finally</code> command following, execution continues
			after the <code>:finally</code>.  Otherwise, or when the
			<code>:endtry</code> is reached thereafter, the next
			(dynamically) surrounding <code>:try</code> is checked for
			a corresponding <code>:finally</code> etc.  Then the script
			processing is terminated.  Whether a function
			definition has an "abort" argument does not matter.
			Example:<pre>try | call Unknown() | finally | echomsg "cleanup" | endtry
echomsg "not reached"</pre></div>
<div class="old-help-para">			Moreover, an error or interrupt (dynamically) inside
			<code>:try</code> and <code>:endtry</code> is converted to an exception.  It
			can be caught as if it were thrown by a <code>:throw</code>
			command (see <code>:catch</code>).  In this case, the script
			processing is not terminated.</div>
<div class="old-help-para">			The value "Vim:Interrupt" is used for an interrupt
			exception.  An error in a Vim command is converted
			to a value of the form "Vim({command}):{errmsg}",
			other errors are converted to a value of the form
			"Vim:{errmsg}".  <code>{command}</code> is the full command name,
			and <code>{errmsg}</code> is the message that is displayed if the
			error exception is not caught, always beginning with
			the error number.
			Examples:<pre>try | sleep 100 | catch /^Vim:Interrupt$/ | endtry
try | edit | catch /^Vim(edit):E\d\+/ | echo "error" | endtry</pre></div>
<div class="old-help-para">					<a name="%3Acat"></a><code class="help-tag-right">:cat</code> <a name="%3Acatch"></a><code class="help-tag">:catch</code> <a name="E603"></a><code class="help-tag">E603</code> <a name="E604"></a><code class="help-tag">E604</code> <a name="E605"></a><code class="help-tag">E605</code>
:cat[ch] /{pattern}/	The following commands until the next <code>:catch</code>,
			<code>:finally</code>, or <code>:endtry</code> that belongs to the same
			<code>:try</code> as the <code>:catch</code> are executed when an exception
			matching <code>{pattern}</code> is being thrown and has not yet
			been caught by a previous <code>:catch</code>.  Otherwise, these
			commands are skipped.
			When <code>{pattern}</code> is omitted all errors are caught.
			Examples:<pre>:catch /^Vim:Interrupt$/         " catch interrupts (CTRL-C)
:catch /^Vim\%((\a\+)\)\=:E/         " catch all Vim errors
:catch /^Vim\%((\a\+)\)\=:/         " catch errors and interrupts
:catch /^Vim(write):/                 " catch all errors in :write
:catch /^Vim\%((\a\+)\)\=:E123:/ " catch error E123
:catch /my-exception/                 " catch user exception
:catch /.*/                         " catch everything
:catch                                 " same as /.*/</pre></div>
<div class="old-help-para">			Another character can be used instead of / around the
			<code>{pattern}</code>, so long as it does not have a special
			meaning (e.g., '|' or '"') and doesn't occur inside
			<code>{pattern}</code>.
			Information about the exception is available in
			<a href="/neovim-docs-web/en/eval#v%3Aexception">v:exception</a>.  Also see <a href="/neovim-docs-web/en/eval#throw-variables">throw-variables</a>.
			NOTE: It is not reliable to ":catch" the TEXT of
			an error message because it may vary in different
			locales.</div>
<div class="old-help-para">					<a name="%3Afina"></a><code class="help-tag-right">:fina</code> <a name="%3Afinally"></a><code class="help-tag">:finally</code> <a name="E606"></a><code class="help-tag">E606</code> <a name="E607"></a><code class="help-tag">E607</code>
:fina[lly]		The following commands until the matching <code>:endtry</code>
			are executed whenever the part between the matching
			<code>:try</code> and the <code>:finally</code> is left:  either by falling
			through to the <code>:finally</code> or by a <code>:continue</code>,
			<code>:break</code>, <code>:finish</code>, or <code>:return</code>, or by an error or
			interrupt or exception (see <code>:throw</code>).</div>
<div class="old-help-para">							<a name="%3Ath"></a><code class="help-tag-right">:th</code> <a name="%3Athrow"></a><code class="help-tag">:throw</code> <a name="E608"></a><code class="help-tag">E608</code>
:th[row] <code>{expr1}</code>	The <code>{expr1}</code> is evaluated and thrown as an exception.
			If the <code>:throw</code> is used after a <code>:try</code> but before the
			first corresponding <code>:catch</code>, commands are skipped
			until the first <code>:catch</code> matching <code>{expr1}</code> is reached.
			If there is no such <code>:catch</code> or if the <code>:throw</code> is
			used after a <code>:catch</code> but before the <code>:finally</code>, the
			commands following the <code>:finally</code> (if present) up to
			the matching <code>:endtry</code> are executed.  If the <code>:throw</code>
			is after the <code>:finally</code>, commands up to the <code>:endtry</code>
			are skipped.  At the <code>:endtry</code>, this process applies
			again for the next dynamically surrounding <code>:try</code>
			(which may be found in a calling function or sourcing
			script), until a matching <code>:catch</code> has been found.
			If the exception is not caught, the command processing
			is terminated.
			Example:<pre>:try | throw "oops" | catch /^oo/ | echo "caught" | endtry</pre></div>
<div class="old-help-para">			Note that "catch" may need to be on a separate line
			for when an error causes the parsing to skip the whole
			line and not see the "|" that separates the commands.</div>
<div class="old-help-para">							<a name="%3Aec"></a><code class="help-tag-right">:ec</code> <a name="%3Aecho"></a><code class="help-tag">:echo</code>
:ec[ho] <code>{expr1}</code> ..	Echoes each <code>{expr1}</code>, with a space in between.  The
			first <code>{expr1}</code> starts on a new line.
			Also see <a href="/neovim-docs-web/en/cmdline#%3Acomment">:comment</a>.
			Use "\n" to start a new line.  Use "\r" to move the
			cursor to the first column.
			Uses the highlighting set by the <code>:echohl</code> command.
			Cannot be followed by a comment.
			Example:<pre>:echo "the value of 'shell' is" &amp;shell</pre></div>
<div class="old-help-para">							<a name="%3Aecho-redraw"></a><code class="help-tag-right">:echo-redraw</code>
			A later redraw may make the message disappear again.
			And since Vim mostly postpones redrawing until it's
			finished with a sequence of commands this happens
			quite often.  To avoid that a command from before the
			<code>:echo</code> causes a redraw afterwards (redraws are often
			postponed until you type something), force a redraw
			with the <code>:redraw</code> command.  Example:<pre>:new | redraw | echo "there is a new window"</pre></div>
<div class="old-help-para">							<a name="%3Aecho-self-refer"></a><code class="help-tag-right">:echo-self-refer</code>
			When printing nested containers echo prints second
			occurrence of the self-referencing container using
			"[...@level]" (self-referencing <a href="/neovim-docs-web/en/eval#List">List</a>) or
			"{...@level}" (self-referencing <a href="/neovim-docs-web/en/eval#Dict">Dict</a>):<pre>:let l = []
:call add(l, l)
:let l2 = []
:call add(l2, [l2])
:echo l l2</pre></div>
<div class="old-help-para">			echoes "[[...@0]] [[[...@0]]]". Echoing "[l]" will
			echo "[[[...@1]]]" because l first occurs at second
			level.</div>
<div class="old-help-para">							<a name="%3Aechon"></a><code class="help-tag-right">:echon</code>
:echon <code>{expr1}</code> ..	Echoes each <code>{expr1}</code>, without anything added.  Also see
			<a href="/neovim-docs-web/en/cmdline#%3Acomment">:comment</a>.
			Uses the highlighting set by the <code>:echohl</code> command.
			Cannot be followed by a comment.
			Example:<pre>:echon "the value of 'shell' is " &amp;shell</pre></div>
<div class="old-help-para">			Note the difference between using <code>:echo</code>, which is a
			Vim command, and <code>:!echo</code>, which is an external shell
			command:<pre>:!echo %                --&gt; filename</pre></div>
<div class="old-help-para">			The arguments of ":!" are expanded, see <a href="/neovim-docs-web/en/cmdline#%3A_%25">:_%</a>.<pre>:!echo "%"                --&gt; filename or "filename"</pre></div>
<div class="old-help-para">			Like the previous example.  Whether you see the double
			quotes or not depends on your <a href="/neovim-docs-web/en/options#'shell'">'shell'</a>.<pre>:echo %                        --&gt; nothing</pre></div>
<div class="old-help-para">			The '%' is an illegal character in an expression.<pre>:echo "%"                --&gt; %</pre></div>
<div class="old-help-para">			This just echoes the '%' character.<pre>:echo expand("%")        --&gt; filename</pre></div>
<div class="old-help-para">			This calls the expand() function to expand the '%'.</div>
<div class="old-help-para">							<a name="%3Aechoh"></a><code class="help-tag-right">:echoh</code> <a name="%3Aechohl"></a><code class="help-tag">:echohl</code>
:echoh[l] <code>{name}</code>	Use the highlight group <code>{name}</code> for the following
			<code>:echo</code>, <code>:echon</code> and <code>:echomsg</code> commands.  Also used
			for the <code>input()</code> prompt.  Example:<pre>:echohl WarningMsg | echo "Don't panic!" | echohl None</pre></div>
<div class="old-help-para">			Don't forget to set the group back to "None",
			otherwise all following echo's will be highlighted.</div>
<div class="old-help-para">							<a name="%3Aechom"></a><code class="help-tag-right">:echom</code> <a name="%3Aechomsg"></a><code class="help-tag">:echomsg</code>
:echom[sg] <code>{expr1}</code> ..	Echo the expression(s) as a true message, saving the
			message in the <a href="/neovim-docs-web/en/message#message-history">message-history</a>.
			Spaces are placed between the arguments as with the
			<code>:echo</code> command.  But unprintable characters are
			displayed, not interpreted.
			The parsing works slightly different from <code>:echo</code>,
			more like <code>:execute</code>.  All the expressions are first
			evaluated and concatenated before echoing anything.
			If expressions does not evaluate to a Number or
			String, string() is used to turn it into a string.
			Uses the highlighting set by the <code>:echohl</code> command.
			Example:<pre>:echomsg "It's a Zizzer Zazzer Zuzz, as you can plainly see."</pre></div>
<div class="old-help-para">			See <a href="/neovim-docs-web/en/eval#%3Aecho-redraw">:echo-redraw</a> to avoid the message disappearing
			when the screen is redrawn.
							<a name="%3Aechoe"></a><code class="help-tag-right">:echoe</code> <a name="%3Aechoerr"></a><code class="help-tag">:echoerr</code>
:echoe[rr] <code>{expr1}</code> ..	Echo the expression(s) as an error message, saving the
			message in the <a href="/neovim-docs-web/en/message#message-history">message-history</a>.  When used in a
			script or function the line number will be added.
			Spaces are placed between the arguments as with the
			<code>:echomsg</code> command.  When used inside a try conditional,
			the message is raised as an error exception instead
			(see <a href="/neovim-docs-web/en/eval#try-echoerr">try-echoerr</a>).
			Example:<pre>:echoerr "This script just failed!"</pre></div>
<div class="old-help-para">			If you just want a highlighted message use <code>:echohl</code>.
			And to get a beep:<pre>:exe "normal \&lt;Esc&gt;"</pre></div>
<div class="old-help-para">							<a name="%3Aeval"></a><code class="help-tag-right">:eval</code>
:eval <code>{expr}</code>		Evaluate <code>{expr}</code> and discard the result.  Example:<pre>:eval Getlist()-&gt;Filter()-&gt;append('$')</pre></div>
<div class="old-help-para">			The expression is supposed to have a side effect,
			since the resulting value is not used.  In the example
			the <code>append()</code> call appends the List with text to the
			buffer.  This is similar to <code>:call</code> but works with any
			expression.</div>
<div class="old-help-para">			The command can be shortened to <code>:ev</code> or <code>:eva</code>, but
			these are hard to recognize and therefore not to be
			used.</div>
<div class="old-help-para">			The command cannot be followed by "|" and another
			command, since "|" is seen as part of the expression.</div>
<div class="old-help-para">							<a name="%3Aexe"></a><code class="help-tag-right">:exe</code> <a name="%3Aexecute"></a><code class="help-tag">:execute</code>
:exe[cute] <code>{expr1}</code> ..	Executes the string that results from the evaluation
			of <code>{expr1}</code> as an Ex command.
			Multiple arguments are concatenated, with a space in
			between.  To avoid the extra space use the ".."
			operator to concatenate strings into one argument.
			<code>{expr1}</code> is used as the processed command, command line
			editing keys are not recognized.
			Cannot be followed by a comment.
			Examples:<pre>:execute "buffer" nextbuf
:execute "normal" count .. "w"</pre></div>
<div class="old-help-para">			":execute" can be used to append a command to commands
			that don't accept a '|'.  Example:<pre>:execute '!ls' | echo "theend"</pre></div>
<div class="old-help-para">			":execute" is also a nice way to avoid having to type
			control characters in a Vim script for a ":normal"
			command:<pre>:execute "normal ixxx\&lt;Esc&gt;"</pre></div>
<div class="old-help-para">			This has an <code>&lt;Esc&gt;</code> character, see <a href="/neovim-docs-web/en/eval#expr-string">expr-string</a>.</div>
<div class="old-help-para">			Be careful to correctly escape special characters in
			file names.  The <a href="/neovim-docs-web/en/builtin#fnameescape()">fnameescape()</a> function can be used
			for Vim commands, <a href="/neovim-docs-web/en/builtin#shellescape()">shellescape()</a> for <a href="/neovim-docs-web/en/various#%3A%21">:!</a> commands.
			Examples:<pre>:execute "e " .. fnameescape(filename)
:execute "!ls " .. shellescape(filename, 1)</pre></div>
<div class="old-help-para">			Note: The executed string may be any command-line, but
			starting or ending "if", "while" and "for" does not
			always work, because when commands are skipped the
			":execute" is not evaluated and Vim loses track of
			where blocks start and end.  Also "break" and
			"continue" should not be inside ":execute".
			This example does not work, because the ":execute" is
			not evaluated and Vim does not see the "while", and
			gives an error for finding an ":endwhile":<pre>:if 0
: execute 'while i &gt; 5'
:  echo "test"
: endwhile
:endif</pre></div>
<div class="old-help-para">			It is allowed to have a "while" or "if" command
			completely in the executed string:<pre>:execute 'while i &lt; 5 | echo i | let i = i + 1 | endwhile'</pre></div>
<div class="old-help-para">							<a name="%3Aexe-comment"></a><code class="help-tag-right">:exe-comment</code>
			":execute", ":echo" and ":echon" cannot be followed by
			a comment directly, because they see the '"' as the
			start of a string.  But, you can use '|' followed by a
			comment.  Example:<pre>:echo "foo" | "this is a comment</pre>
<h2 class="help-heading">8. Exception handling<span class="help-heading-tags">					<a name="exception-handling"></a><span class="help-tag">exception-handling</span></span></h2></div>
<div class="old-help-para">The Vim script language comprises an exception handling feature.  This section
explains how it can be used in a Vim script.</div>
<div class="old-help-para">Exceptions may be raised by Vim on an error or on interrupt, see
<a href="/neovim-docs-web/en/eval#catch-errors">catch-errors</a> and <a href="/neovim-docs-web/en/eval#catch-interrupt">catch-interrupt</a>.  You can also explicitly throw an
exception by using the ":throw" command, see <a href="/neovim-docs-web/en/eval#throw-catch">throw-catch</a>.</div>
<div class="old-help-para"><h3 class="help-heading">TRY CONDITIONALS<span class="help-heading-tags">					<a name="try-conditionals"></a><span class="help-tag">try-conditionals</span></span></h3></div>
<div class="old-help-para">Exceptions can be caught or can cause cleanup code to be executed.  You can
use a try conditional to specify catch clauses (that catch exceptions) and/or
a finally clause (to be executed for cleanup).
   A try conditional begins with a <a href="/neovim-docs-web/en/eval#%3Atry">:try</a> command and ends at the matching
<a href="/neovim-docs-web/en/eval#%3Aendtry">:endtry</a> command.  In between, you can use a <a href="/neovim-docs-web/en/eval#%3Acatch">:catch</a> command to start
a catch clause, or a <a href="/neovim-docs-web/en/eval#%3Afinally">:finally</a> command to start a finally clause.  There may
be none or multiple catch clauses, but there is at most one finally clause,
which must not be followed by any catch clauses.  The lines before the catch
clauses and the finally clause is called a try block.<pre>:try
:        ...
:        ...                                TRY BLOCK
:        ...
:catch /{pattern}/
:        ...
:        ...                                CATCH CLAUSE
:        ...
:catch /{pattern}/
:        ...
:        ...                                CATCH CLAUSE
:        ...
:finally
:        ...
:        ...                                FINALLY CLAUSE
:        ...
:endtry</pre>
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
see <a href="/neovim-docs-web/en/eval#try-nesting">try-nesting</a>.
   When during execution of a catch clause another exception is thrown, the
remaining lines in that catch clause are not executed.  The new exception is
not matched against the patterns in any of the ":catch" commands of the same
try conditional and none of its catch clauses is taken.  If there is, however,
a finally clause, it is executed, and the exception pends during its
execution.  The commands following the ":endtry" are not executed.  The new
exception might, however, be caught elsewhere, see <a href="/neovim-docs-web/en/eval#try-nesting">try-nesting</a>.
   When during execution of the finally clause (if present) an exception is
thrown, the remaining lines in the finally clause are skipped.  If the finally
clause has been taken because of an exception from the try block or one of the
catch clauses, the original (pending) exception is discarded.  The commands
following the ":endtry" are not executed, and the exception from the finally
clause is propagated and can be caught elsewhere, see <a href="/neovim-docs-web/en/eval#try-nesting">try-nesting</a>.</div>
<div class="old-help-para">The finally clause is also executed, when a ":break" or ":continue" for
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
this pending exception or command is discarded.</div>
<div class="old-help-para">For examples see <a href="/neovim-docs-web/en/eval#throw-catch">throw-catch</a> and <a href="/neovim-docs-web/en/eval#try-finally">try-finally</a>.</div>
<div class="old-help-para"><h3 class="help-heading">NESTING OF TRY CONDITIONALS<span class="help-heading-tags">				<a name="try-nesting"></a><span class="help-tag">try-nesting</span></span></h3></div>
<div class="old-help-para">Try conditionals can be nested arbitrarily.  That is, a complete try
conditional can be put into the try block, a catch clause, or the finally
clause of another try conditional.  If the inner try conditional does not
catch an exception thrown in its try block or throws a new exception from one
of its catch clauses or its finally clause, the outer try conditional is
checked according to the rules above.  If the inner try conditional is in the
try block of the outer try conditional, its catch clauses are checked, but
otherwise only the finally clause is executed.  It does not matter for
nesting, whether the inner try conditional is directly contained in the outer
one, or whether the outer one sources a script or calls a function containing
the inner try conditional.</div>
<div class="old-help-para">When none of the active try conditionals catches an exception, just their
finally clauses are executed.  Thereafter, the script processing terminates.
An error message is displayed in case of an uncaught exception explicitly
thrown by a ":throw" command.  For uncaught error and interrupt exceptions
implicitly raised by Vim, the error message(s) or interrupt message are shown
as usual.</div>
<div class="old-help-para">For examples see <a href="/neovim-docs-web/en/eval#throw-catch">throw-catch</a>.</div>
<div class="old-help-para"><h3 class="help-heading">EXAMINING EXCEPTION HANDLING CODE<span class="help-heading-tags">			<a name="except-examine"></a><span class="help-tag">except-examine</span></span></h3></div>
<div class="old-help-para">Exception handling code can get tricky.  If you are in doubt what happens, set
<a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> to 13 or use the ":13verbose" command modifier when sourcing your
script file.  Then you see when an exception is thrown, discarded, caught, or
finished.  When using a verbosity level of at least 14, things pending in
a finally clause are also shown.  This information is also given in debug mode
(see <a href="/neovim-docs-web/en/repeat#debug-scripts">debug-scripts</a>).</div>
<div class="old-help-para"><h3 class="help-heading">THROWING AND CATCHING EXCEPTIONS<span class="help-heading-tags">			<a name="throw-catch"></a><span class="help-tag">throw-catch</span></span></h3></div>
<div class="old-help-para">You can throw any number or string as an exception.  Use the <a href="/neovim-docs-web/en/eval#%3Athrow">:throw</a> command
and pass the value to be thrown as argument:<pre>:throw 4711
:throw "string"</pre></div>
<div class="old-help-para">							<a name="throw-expression"></a><code class="help-tag-right">throw-expression</code>
You can also specify an expression argument.  The expression is then evaluated
first, and the result is thrown:<pre>:throw 4705 + strlen("string")
:throw strpart("strings", 0, 6)</pre>
An exception might be thrown during evaluation of the argument of the ":throw"
command.  Unless it is caught there, the expression evaluation is abandoned.
The ":throw" command then does not throw a new exception.
   Example:<pre>:function! Foo(arg)
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
:throw Foo("arrgh") + Bar()</pre>
This throws "arrgh", and "in Bar" is not displayed since Bar() is not
executed.<pre>:throw Foo("foo") + Bar()</pre>
however displays "in Bar" and throws 4711.</div>
<div class="old-help-para">Any other command that takes an expression as argument might also be
abandoned by an (uncaught) exception during the expression evaluation.  The
exception is then propagated to the caller of the command.
   Example:<pre>:if Foo("arrgh")
:  echo "then"
:else
:  echo "else"
:endif</pre>
Here neither of "then" or "else" is displayed.</div>
<div class="old-help-para">							<a name="catch-order"></a><code class="help-tag-right">catch-order</code>
Exceptions can be caught by a try conditional with one or more <a href="/neovim-docs-web/en/eval#%3Acatch">:catch</a>
commands, see <a href="/neovim-docs-web/en/eval#try-conditionals">try-conditionals</a>.   The values to be caught by each ":catch"
command can be specified as a pattern argument.  The subsequent catch clause
gets executed when a matching exception is caught.
   Example:<pre>:function! Foo(value)
:  try
:    throw a:value
:  catch /^\d\+$/
:    echo "Number thrown"
:  catch /.*/
:    echo "String thrown"
:  endtry
:endfunction
:
:call Foo(0x1267)
:call Foo('string')</pre>
The first call to Foo() displays "Number thrown", the second "String thrown".
An exception is matched against the ":catch" commands in the order they are
specified.  Only the first match counts.  So you should place the more
specific ":catch" first.  The following order does not make sense:<pre>:  catch /.*/
:    echo "String thrown"
:  catch /^\d\+$/
:    echo "Number thrown"</pre>
The first ":catch" here matches always, so that the second catch clause is
never taken.</div>
<div class="old-help-para">							<a name="throw-variables"></a><code class="help-tag-right">throw-variables</code>
If you catch an exception by a general pattern, you may access the exact value
in the variable <a href="/neovim-docs-web/en/eval#v%3Aexception">v:exception</a>:<pre>:  catch /^\d\+$/
:    echo "Number thrown.  Value is" v:exception</pre>
You may also be interested where an exception was thrown.  This is stored in
<a href="/neovim-docs-web/en/eval#v%3Athrowpoint">v:throwpoint</a>.  Note that "v:exception" and "v:throwpoint" are valid for the
exception most recently caught as long it is not finished.
   Example:<pre>:function! Caught()
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
:         throw 4711
:      finally
:         call Caught()
:      endtry
:    catch /.*/
:      call Caught()
:      throw "oops"
:    endtry
:  catch /.*/
:    call Caught()
:  finally
:    call Caught()
:  endtry
:endfunction
:
:call Foo()</pre>
This displays<pre>Nothing caught
Caught "4711" in function Foo, line 4
Caught "oops" in function Foo, line 10
Nothing caught</pre>
A practical example:  The following command ":LineNumber" displays the line
number in the script or function where it has been used:<pre>:function! LineNumber()
:    return substitute(v:throwpoint, '.*\D\(\d\+\).*', '\1', "")
:endfunction
:command! LineNumber try | throw "" | catch | echo LineNumber() | endtry</pre></div>
<div class="old-help-para">							<a name="try-nested"></a><code class="help-tag-right">try-nested</code>
An exception that is not caught by a try conditional can be caught by
a surrounding try conditional:<pre>:try
:  try
:    throw "foo"
:  catch /foobar/
:    echo "foobar"
:  finally
:    echo "inner finally"
:  endtry
:catch /foo/
:  echo "foo"
:endtry</pre>
The inner try conditional does not catch the exception, just its finally
clause is executed.  The exception is then caught by the outer try
conditional.  The example displays "inner finally" and then "foo".</div>
<div class="old-help-para">							<a name="throw-from-catch"></a><code class="help-tag-right">throw-from-catch</code>
You can catch an exception and throw a new one to be caught elsewhere from the
catch clause:<pre>:function! Foo()
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
:endtry</pre>
This displays "Caught foo, throw bar" and then "Caught bar".</div>
<div class="old-help-para">							<a name="rethrow"></a><code class="help-tag-right">rethrow</code>
There is no real rethrow in the Vim script language, but you may throw
"v:exception" instead:<pre>:function! Bar()
:  try
:    call Foo()
:  catch /.*/
:    echo "Rethrow" v:exception
:    throw v:exception
:  endtry
:endfunction</pre></div>
<div class="old-help-para">							<a name="try-echoerr"></a><code class="help-tag-right">try-echoerr</code>
Note that this method cannot be used to "rethrow" Vim error or interrupt
exceptions, because it is not possible to fake Vim internal exceptions.
Trying so causes an error exception.  You should throw your own exception
denoting the situation.  If you want to cause a Vim error exception containing
the original error exception value, you can use the <a href="/neovim-docs-web/en/eval#%3Aechoerr">:echoerr</a> command:<pre>:try
:  try
:    asdf
:  catch /.*/
:    echoerr v:exception
:  endtry
:catch /.*/
:  echo v:exception
:endtry</pre>
This code displays</div>
<div class="old-help-para"><div class="help-column_heading">	Vim(echoerr):Vim:E492: Not an editor command:	asdf</div></div>
<div class="old-help-para"><h3 class="help-heading">CLEANUP CODE<span class="help-heading-tags">						<a name="try-finally"></a><span class="help-tag">try-finally</span></span></h3></div>
<div class="old-help-para">Scripts often change global settings and restore them at their end.  If the
user however interrupts the script by pressing <code>CTRL-C</code>, the settings remain in
an inconsistent state.  The same may happen to you in the development phase of
a script when an error occurs or you explicitly throw an exception without
catching it.  You can solve these problems by using a try conditional with
a finally clause for restoring the settings.  Its execution is guaranteed on
normal control flow, on error, on an explicit ":throw", and on interrupt.
(Note that errors and interrupts from inside the try conditional are converted
to exceptions.  When not caught, they terminate the script after the finally
clause has been executed.)
Example:<pre>:try
:  let s:saved_ts = &amp;ts
:  set ts=17
:
:  " Do the hard work here.
:
:finally
:  let &amp;ts = s:saved_ts
:  unlet s:saved_ts
:endtry</pre>
This method should be used locally whenever a function or part of a script
changes global settings which need to be restored on failure or normal exit of
that function or script part.</div>
<div class="old-help-para">							<a name="break-finally"></a><code class="help-tag-right">break-finally</code>
Cleanup code works also when the try block or a catch clause is left by
a ":continue", ":break", ":return", or ":finish".
   Example:<pre>:let first = 1
:while 1
:  try
:    if first
:      echo "first"
:      let first = 0
:      continue
:    else
:      throw "second"
:    endif
:  catch /.*/
:    echo v:exception
:    break
:  finally
:    echo "cleanup"
:  endtry
:  echo "still in while"
:endwhile
:echo "end"</pre>
This displays "first", "cleanup", "second", "cleanup", and "end".<pre>:function! Foo()
:  try
:    return 4711
:  finally
:    echo "cleanup\n"
:  endtry
:  echo "Foo still active"
:endfunction
:
:echo Foo() "returned by Foo"</pre>
This displays "cleanup" and "4711 returned by Foo".  You don't need to add an
extra ":return" in the finally clause.  (Above all, this would override the
return value.)</div>
<div class="old-help-para">							<a name="except-from-finally"></a><code class="help-tag-right">except-from-finally</code>
Using either of ":continue", ":break", ":return", ":finish", or ":throw" in
a finally clause is possible, but not recommended since it abandons the
cleanup actions for the try conditional.  But, of course, interrupt and error
exceptions might get raised from a finally clause.
   Example where an error in the finally clause stops an interrupt from
working correctly:<pre>:try
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
:sleep 1</pre>
If you need to put commands that could fail into a finally clause, you should
think about catching or ignoring the errors in these commands, see
<a href="/neovim-docs-web/en/eval#catch-errors">catch-errors</a> and <a href="/neovim-docs-web/en/eval#ignore-errors">ignore-errors</a>.</div>
<div class="old-help-para"><h3 class="help-heading">CATCHING ERRORS<span class="help-heading-tags">						<a name="catch-errors"></a><span class="help-tag">catch-errors</span></span></h3></div>
<div class="old-help-para">If you want to catch specific errors, you just have to put the code to be
watched in a try block and add a catch clause for the error message.  The
presence of the try conditional causes all errors to be converted to an
exception.  No message is displayed and <a href="/neovim-docs-web/en/eval#v%3Aerrmsg">v:errmsg</a> is not set then.  To find
the right pattern for the ":catch" command, you have to know how the format of
the error exception is.
   Error exceptions have the following format:<pre>Vim({cmdname}):{errmsg}</pre>
or<pre>Vim:{errmsg}</pre>
<code>{cmdname}</code> is the name of the command that failed; the second form is used when
the command name is not known.  <code>{errmsg}</code> is the error message usually produced
when the error occurs outside try conditionals.  It always begins with
a capital "E", followed by a two or three-digit error number, a colon, and
a space.</div>
<div class="old-help-para">Examples:</div>
<div class="old-help-para">The command<pre>:unlet novar</pre>
normally produces the error message<pre>E108: No such variable: "novar"</pre>
which is converted inside try conditionals to an exception<pre>Vim(unlet):E108: No such variable: "novar"</pre>
The command<pre>:dwim</pre>
normally produces the error message<pre>E492: Not an editor command: dwim</pre>
which is converted inside try conditionals to an exception<pre>Vim:E492: Not an editor command: dwim</pre>
You can catch all ":unlet" errors by a<pre>:catch /^Vim(unlet):/</pre>
or all errors for misspelled command names by a<pre>:catch /^Vim:E492:/</pre>
Some error messages may be produced by different commands:<pre>:function nofunc</pre>
and<pre>:delfunction nofunc</pre>
both produce the error message<pre>E128: Function name must start with a capital: nofunc</pre>
which is converted inside try conditionals to an exception<pre>Vim(function):E128: Function name must start with a capital: nofunc</pre>
or<pre>Vim(delfunction):E128: Function name must start with a capital: nofunc</pre>
respectively.  You can catch the error by its number independently on the
command that caused it if you use the following pattern:<pre>:catch /^Vim(\a\+):E128:/</pre>
Some commands like<pre>:let x = novar</pre>
produce multiple error messages, here:<pre>E121: Undefined variable: novar
E15: Invalid expression:  novar</pre>
Only the first is used for the exception value, since it is the most specific
one (see <a href="/neovim-docs-web/en/eval#except-several-errors">except-several-errors</a>).  So you can catch it by<pre>:catch /^Vim(\a\+):E121:/</pre>
You can catch all errors related to the name "nofunc" by<pre>:catch /\&lt;nofunc\&gt;/</pre>
You can catch all Vim errors in the ":write" and ":read" commands by<pre>:catch /^Vim(\(write\|read\)):E\d\+:/</pre>
You can catch all Vim errors by the pattern<pre>:catch /^Vim\((\a\+)\)\=:E\d\+:/</pre></div>
<div class="old-help-para">							<a name="catch-text"></a><code class="help-tag-right">catch-text</code>
NOTE: You should never catch the error message text itself:<pre>:catch /No such variable/</pre>
only works in the English locale, but not when the user has selected
a different language by the <a href="/neovim-docs-web/en/mlang#%3Alanguage">:language</a> command.  It is however helpful to
cite the message text in a comment:<pre>:catch /^Vim(\a\+):E108:/   " No such variable</pre>
<h3 class="help-heading">IGNORING ERRORS<span class="help-heading-tags">						<a name="ignore-errors"></a><span class="help-tag">ignore-errors</span></span></h3></div>
<div class="old-help-para">You can ignore errors in a specific Vim command by catching them locally:<pre>:try
:  write
:catch
:endtry</pre>
But you are strongly recommended NOT to use this simple form, since it could
catch more than you want.  With the ":write" command, some autocommands could
be executed and cause errors not related to writing, for instance:<pre>:au BufWritePre * unlet novar</pre>
There could even be such errors you are not responsible for as a script
writer: a user of your script might have defined such autocommands.  You would
then hide the error from the user.
   It is much better to use<pre>:try
:  write
:catch /^Vim(write):/
:endtry</pre>
which only catches real write errors.  So catch only what you'd like to ignore
intentionally.</div>
<div class="old-help-para">For a single command that does not cause execution of autocommands, you could
even suppress the conversion of errors to exceptions by the ":silent!"
command:<pre>:silent! nunmap k</pre>
This works also when a try conditional is active.</div>
<div class="old-help-para"><h3 class="help-heading">CATCHING INTERRUPTS<span class="help-heading-tags">					<a name="catch-interrupt"></a><span class="help-tag">catch-interrupt</span></span></h3></div>
<div class="old-help-para">When there are active try conditionals, an interrupt (<code>CTRL-C</code>) is converted to
the exception "Vim:Interrupt".  You can catch it like every exception.  The
script is not terminated, then.
   Example:<pre>:function! TASK1()
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
:endwhile</pre>
You can interrupt a task here by pressing <code>CTRL-C</code>; the script then asks for
a new command.  If you press <code>CTRL-C</code> at the prompt, the script is terminated.</div>
<div class="old-help-para">For testing what happens when <code>CTRL-C</code> would be pressed on a specific line in
your script, use the debug mode and execute the <a href="/neovim-docs-web/en/repeat#%3Equit">&gt;quit</a> or <a href="/neovim-docs-web/en/repeat#%3Einterrupt">&gt;interrupt</a>
command on that line.  See <a href="/neovim-docs-web/en/repeat#debug-scripts">debug-scripts</a>.</div>
<div class="old-help-para"><h3 class="help-heading">CATCHING ALL<span class="help-heading-tags">						<a name="catch-all"></a><span class="help-tag">catch-all</span></span></h3></div>
<div class="old-help-para">The commands<pre>:catch /.*/
:catch //
:catch</pre>
catch everything, error exceptions, interrupt exceptions and exceptions
explicitly thrown by the <a href="/neovim-docs-web/en/eval#%3Athrow">:throw</a> command.  This is useful at the top level of
a script in order to catch unexpected things.
   Example:<pre>:try
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
:" end of script</pre>
Note: Catching all might catch more things than you want.  Thus, you are
strongly encouraged to catch only for problems that you can really handle by
specifying a pattern argument to the ":catch".
   Example: Catching all could make it nearly impossible to interrupt a script
by pressing <code>CTRL-C</code>:<pre>:while 1
:  try
:    sleep 1
:  catch
:  endtry
:endwhile</pre>
<h3 class="help-heading">EXCEPTIONS AND AUTOCOMMANDS<span class="help-heading-tags">				<a name="except-autocmd"></a><span class="help-tag">except-autocmd</span></span></h3></div>
<div class="old-help-para">Exceptions may be used during execution of autocommands.  Example:<pre>:autocmd User x try
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
:endtry</pre>
This displays "Oops!" and "Arrgh!".</div>
<div class="old-help-para">							<a name="except-autocmd-Pre"></a><code class="help-tag-right">except-autocmd-Pre</code>
For some commands, autocommands get executed before the main action of the
command takes place.  If an exception is thrown and not caught in the sequence
of autocommands, the sequence and the command that caused its execution are
abandoned and the exception is propagated to the caller of the command.
   Example:<pre>:autocmd BufWritePre * throw "FAIL"
:autocmd BufWritePre * echo "Should not be displayed"
:
:try
:  write
:catch
:  echo "Caught:" v:exception "from" v:throwpoint
:endtry</pre>
Here, the ":write" command does not write the file currently being edited (as
you can see by checking <a href="/neovim-docs-web/en/options#'modified'">'modified'</a>), since the exception from the BufWritePre
autocommand abandons the ":write".  The exception is then caught and the
script displays:<pre>Caught: FAIL from BufWrite Auto commands for "*"</pre></div>
<div class="old-help-para">							<a name="except-autocmd-Post"></a><code class="help-tag-right">except-autocmd-Post</code>
For some commands, autocommands get executed after the main action of the
command has taken place.  If this main action fails and the command is inside
an active try conditional, the autocommands are skipped and an error exception
is thrown that can be caught by the caller of the command.
   Example:<pre>:autocmd BufWritePost * echo "File successfully written!"
:
:try
:  write /i/m/p/o/s/s/i/b/l/e
:catch
:  echo v:exception
:endtry</pre>
This just displays:<pre>Vim(write):E212: Can't open file for writing (/i/m/p/o/s/s/i/b/l/e)</pre>
If you really need to execute the autocommands even when the main action
fails, trigger the event from the catch clause.
   Example:<pre>:autocmd BufWritePre  * set noreadonly
:autocmd BufWritePost * set readonly
:
:try
:  write /i/m/p/o/s/s/i/b/l/e
:catch
:  doautocmd BufWritePost /i/m/p/o/s/s/i/b/l/e
:endtry</pre></div>
<div class="old-help-para">You can also use ":silent!":<pre>:let x = "ok"
:let v:errmsg = ""
:autocmd BufWritePost * if v:errmsg != ""
:autocmd BufWritePost *   let x = "after fail"
:autocmd BufWritePost * endif
:try
:  silent! write /i/m/p/o/s/s/i/b/l/e
:catch
:endtry
:echo x</pre>
This displays "after fail".</div>
<div class="old-help-para">If the main action of the command does not fail, exceptions from the
autocommands will be catchable by the caller of the command:<pre>:autocmd BufWritePost * throw ":-("
:autocmd BufWritePost * echo "Should not be displayed"
:
:try
:  write
:catch
:  echo v:exception
:endtry</pre></div>
<div class="old-help-para">							<a name="except-autocmd-Cmd"></a><code class="help-tag-right">except-autocmd-Cmd</code>
For some commands, the normal action can be replaced by a sequence of
autocommands.  Exceptions from that sequence will be catchable by the caller
of the command.
   Example:  For the ":write" command, the caller cannot know whether the file
had actually been written when the exception occurred.  You need to tell it in
some way.<pre>:if !exists("cnt")
:  let cnt = 0
:
:  autocmd BufWriteCmd * if &amp;modified
:  autocmd BufWriteCmd *   let cnt = cnt + 1
:  autocmd BufWriteCmd *   if cnt % 3 == 2
:  autocmd BufWriteCmd *     throw "BufWriteCmdError"
:  autocmd BufWriteCmd *   endif
:  autocmd BufWriteCmd *   write | set nomodified
:  autocmd BufWriteCmd *   if cnt % 3 == 0
:  autocmd BufWriteCmd *     throw "BufWriteCmdError"
:  autocmd BufWriteCmd *   endif
:  autocmd BufWriteCmd *   echo "File successfully written!"
:  autocmd BufWriteCmd * endif
:endif
:
:try
:        write
:catch /^BufWriteCmdError$/
:  if &amp;modified
:    echo "Error on writing (file contents not changed)"
:  else
:    echo "Error after writing"
:  endif
:catch /^Vim(write):/
:    echo "Error on writing"
:endtry</pre>
When this script is sourced several times after making changes, it displays
first<pre>File successfully written!</pre>
then<pre>Error on writing (file contents not changed)</pre>
then<pre>Error after writing</pre>
etc.</div>
<div class="old-help-para">							<a name="except-autocmd-ill"></a><code class="help-tag-right">except-autocmd-ill</code>
You cannot spread a try conditional over autocommands for different events.
The following code is ill-formed:<pre>:autocmd BufWritePre  * try
:
:autocmd BufWritePost * catch
:autocmd BufWritePost *   echo v:exception
:autocmd BufWritePost * endtry
:
:write</pre>
<h3 class="help-heading">EXCEPTION HIERARCHIES AND PARAMETERIZED EXCEPTIONS<span class="help-heading-tags">	<a name="except-hier-param"></a><span class="help-tag">except-hier-param</span></span></h3></div>
<div class="old-help-para">Some programming languages allow to use hierarchies of exception classes or to
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
parentheses can be cut out from <a href="/neovim-docs-web/en/eval#v%3Aexception">v:exception</a> with the ":substitute" command.
   Example:<pre>:function! CheckRange(a, func)
:  if a:a &lt; 0
:    throw "EXCEPT:MATHERR:RANGE(" .. a:func .. ")"
:  endif
:endfunction
:
:function! Add(a, b)
:  call CheckRange(a:a, "Add")
:  call CheckRange(a:b, "Add")
:  let c = a:a + a:b
:  if c &lt; 0
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
:  let function = substitute(v:exception, '.*(\(\a\+\)).*', '\1', "")
:  echo "Range error in" function
:
:catch /^EXCEPT:MATHERR/        " catches OVERFLOW and ZERODIV
:  echo "Math error"
:
:catch /^EXCEPT:IO/
:  let dir = substitute(v:exception, '.*(\(.\+\),\s*.\+).*', '\1', "")
:  let file = substitute(v:exception, '.*(.\+,\s*\(.\+\)).*', '\1', "")
:  if file !~ '^/'
:    let file = dir .. "/" .. file
:  endif
:  echo 'I/O error for "' .. file .. '"'
:
:catch /^EXCEPT/
:  echo "Unspecified error"
:
:endtry</pre>
The exceptions raised by Vim itself (on error or when pressing <code>CTRL-C</code>) use
a flat hierarchy:  they are all in the "Vim" class.  You cannot throw yourself
exceptions with the "Vim" prefix; they are reserved for Vim.
   Vim error exceptions are parameterized with the name of the command that
failed, if known.  See <a href="/neovim-docs-web/en/eval#catch-errors">catch-errors</a>.</div>
<div class="old-help-para"><a name="_peculiarities"></a><h3 class="help-heading">PECULIARITIES</h3>							<a name="except-compat"></a><code class="help-tag-right">except-compat</code>
The exception handling concept requires that the command sequence causing the
exception is aborted immediately and control is transferred to finally clauses
and/or a catch clause.</div>
<div class="old-help-para">In the Vim script language there are cases where scripts and functions
continue after an error: in functions without the "abort" flag or in a command
after ":silent!", control flow goes to the following line, and outside
functions, control flow goes to the line following the outermost ":endwhile"
or ":endif".  On the other hand, errors should be catchable as exceptions
(thus, requiring the immediate abortion).</div>
<div class="old-help-para">This problem has been solved by converting errors to exceptions and using
immediate abortion (if not suppressed by ":silent!") only when a try
conditional is active.  This is no restriction since an (error) exception can
be caught only from an active try conditional.  If you want an immediate
termination without catching the error, just use a try conditional without
catch clause.  (You can cause cleanup code being executed before termination
by specifying a finally clause.)</div>
<div class="old-help-para">When no try conditional is active, the usual abortion and continuation
behavior is used instead of immediate abortion.  This ensures compatibility of
scripts written for Vim 6.1 and earlier.</div>
<div class="old-help-para">However, when sourcing an existing script that does not use exception handling
commands (or when calling one of its functions) from inside an active try
conditional of a new script, you might change the control flow of the existing
script on error.  You get the immediate abortion on error and can catch the
error in the new script.  If however the sourced script suppresses error
messages by using the ":silent!" command (checking for errors by testing
<a href="/neovim-docs-web/en/eval#v%3Aerrmsg">v:errmsg</a> if appropriate), its execution path is not changed.  The error is
not converted to an exception.  (See <a href="/neovim-docs-web/en/various#%3Asilent">:silent</a>.)  So the only remaining cause
where this happens is for scripts that don't care about errors and produce
error messages.  You probably won't want to use such code from your new
scripts.</div>
<div class="old-help-para">							<a name="except-syntax-err"></a><code class="help-tag-right">except-syntax-err</code>
Syntax errors in the exception handling commands are never caught by any of
the ":catch" commands of the try conditional they belong to.  Its finally
clauses, however, is executed.
   Example:<pre>:try
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
:endtry</pre>
This displays:<pre>inner finally
outer catch-all caught "Vim(catch):E54: Unmatched \("
outer finally</pre>
The original exception is discarded and an error exception is raised, instead.</div>
<div class="old-help-para">							<a name="except-single-line"></a><code class="help-tag-right">except-single-line</code>
The ":try", ":catch", ":finally", and ":endtry" commands can be put on
a single line, but then syntax errors may make it difficult to recognize the
"catch" line, thus you better avoid this.
   Example:<pre>:try | unlet! foo # | catch | endtry</pre>
raises an error exception for the trailing characters after the ":unlet!"
argument, but does not see the ":catch" and ":endtry" commands, so that the
error exception is discarded and the "E488: Trailing characters" message gets
displayed.</div>
<div class="old-help-para">							<a name="except-several-errors"></a><code class="help-tag-right">except-several-errors</code>
When several errors appear in a single command, the first error message is
usually the most specific one and therefore converted to the error exception.
   Example:<pre>echo novar</pre>
causes<pre>E121: Undefined variable: novar
E15: Invalid expression: novar</pre>
The value of the error exception inside try conditionals is:<pre>Vim(echo):E121: Undefined variable: novar</pre></div>
<div class="old-help-para">							<a name="except-syntax-error"></a><code class="help-tag-right">except-syntax-error</code>
But when a syntax error is detected after a normal error in the same command,
the syntax error is used for the exception being thrown.
   Example:<pre>unlet novar #</pre>
causes<pre>E108: No such variable: "novar"
E488: Trailing characters</pre>
The value of the error exception inside try conditionals is:<pre>Vim(unlet):E488: Trailing characters</pre>
This is done because the syntax error might change the execution path in a way
not intended by the user.  Example:<pre>try
    try | unlet novar # | catch | echo v:exception | endtry
catch /.*/
    echo "outer catch:" v:exception
endtry</pre>
This displays "outer catch: Vim(unlet):E488: Trailing characters", and then
a "E600: Missing :endtry" error message is given, see <a href="/neovim-docs-web/en/eval#except-single-line">except-single-line</a>.</div>
<div class="old-help-para"><h2 class="help-heading">9. Examples<span class="help-heading-tags">						<a name="eval-examples"></a><span class="help-tag">eval-examples</span></span></h2></div>
<div class="old-help-para"><div class="help-column_heading">Printing in Binary</div><pre>:" The function Nr2Bin() returns the binary string representation of a number.
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
:endfunc</pre>
Example of its use:<pre>:echo Nr2Bin(32)</pre>
result: "100000"<pre>:echo String2Bin("32")</pre>
result: "110011-110010"</div>
<div class="old-help-para"><div class="help-column_heading">Sorting lines</div></div>
<div class="old-help-para">This example sorts lines with a specific compare function.<pre>:func SortBuffer()
:  let lines = getline(1, '$')
:  call sort(lines, function("Strcmp"))
:  call setline(1, lines)
:endfunction</pre>
As a one-liner:<pre>:call setline(1, sort(getline(1, '$'), function("Strcmp")))</pre></div>
<div class="old-help-para"><div class="help-column_heading">scanf() replacement</div>							<a name="sscanf"></a><code class="help-tag-right">sscanf</code>
There is no sscanf() function in Vim.  If you need to extract parts from a
line, you can use matchstr() and substitute() to do it.  This example shows
how to get the file name, line number and column number out of a line like
"foobar.txt, 123, 45".<pre>:" Set up the match bit
:let mx='\(\f\+\),\s*\(\d\+\),\s*\(\d\+\)'
:"get the part matching the whole expression
:let l = matchstr(line, mx)
:"get each item out of the match
:let file = substitute(l, mx, '\1', '')
:let lnum = substitute(l, mx, '\2', '')
:let col = substitute(l, mx, '\3', '')</pre>
The input is in the variable "line", the results in the variables "file",
"lnum" and "col". (idea from Michael Geddes)</div>
<div class="old-help-para"><div class="help-column_heading">getting the scriptnames in a Dictionary</div>						<a name="scriptnames-dictionary"></a><code class="help-tag-right">scriptnames-dictionary</code>
The <a href="/neovim-docs-web/en/repeat#%3Ascriptnames">:scriptnames</a> command can be used to get a list of all script files that
have been sourced.  There is no equivalent function or variable for this
(because it's rarely needed).  In case you need to manipulate the list this
code can be used:<pre>" Get the output of ":scriptnames" in the scriptnames_output variable.
let scriptnames_output = ''
redir =&gt; scriptnames_output
silent scriptnames
redir END

" Split the output into lines and parse each line.        Add an entry to the
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
unlet scriptnames_output</pre>
<h2 class="help-heading">The sandbox<span class="help-heading-tags">					<a name="eval-sandbox"></a><span class="help-tag">eval-sandbox</span> <a name="sandbox"></a><span class="help-tag">sandbox</span></span></h2></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'foldexpr'">'foldexpr'</a>, <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a>, <a href="/neovim-docs-web/en/options#'includeexpr'">'includeexpr'</a>, <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a>, <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a> and
<a href="/neovim-docs-web/en/options#'foldtext'">'foldtext'</a> options may be evaluated in a sandbox.  This means that you are
protected from these expressions having nasty side effects.  This gives some
safety for when these options are set from a modeline.  It is also used when
the command from a tags file is executed and for <code>CTRL-R</code> = in the command line.
The sandbox is also used for the <a href="/neovim-docs-web/en/eval#%3Asandbox">:sandbox</a> command.</div>
<div class="old-help-para">								<a name="E48"></a><code class="help-tag-right">E48</code>
These items are not allowed in the sandbox:
<div class="help-li" style=""> changing the buffer text
</div><div class="help-li" style=""> defining or changing mapping, autocommands, user commands
</div><div class="help-li" style=""> setting certain options (see <a href="/neovim-docs-web/en/options#option-summary">option-summary</a>)
</div><div class="help-li" style=""> setting certain v: variables (see <a href="/neovim-docs-web/en/eval#v%3Avar">v:var</a>)  <a name="E794"></a><code class="help-tag">E794</code>
</div><div class="help-li" style=""> executing a shell command
</div><div class="help-li" style=""> reading or writing a file
</div><div class="help-li" style=""> jumping to another buffer or editing a file
</div><div class="help-li" style=""> executing Python, Perl, etc. commands
This is not guaranteed 100% secure, but it should block most attacks.
</div></div>
<div class="old-help-para">							<a name="%3Asan"></a><code class="help-tag-right">:san</code> <a name="%3Asandbox"></a><code class="help-tag">:sandbox</code>
:san[dbox] <code>{cmd}</code>	Execute <code>{cmd}</code> in the sandbox.  Useful to evaluate an
			option that may have been set from a modeline, e.g.
			<a href="/neovim-docs-web/en/options#'foldexpr'">'foldexpr'</a>.</div>
<div class="old-help-para">							<a name="sandbox-option"></a><code class="help-tag-right">sandbox-option</code>
A few options contain an expression.  When this expression is evaluated it may
have to be done in the sandbox to avoid a security risk.  But the sandbox is
restrictive, thus this only happens when the option was set from an insecure
location.  Insecure in this context are:
<div class="help-li" style=""> sourcing a .nvimrc or .exrc in the current directory
</div><div class="help-li" style=""> while executing in the sandbox
</div><div class="help-li" style=""> value coming from a modeline
</div><div class="help-li" style=""> executing a function that was defined in the sandbox
</div></div>
<div class="old-help-para">Note that when in the sandbox and saving an option value and restoring it, the
option will still be marked as it was set in the sandbox.</div>
<div class="old-help-para"><h2 class="help-heading">Textlock<span class="help-heading-tags">							<a name="textlock"></a><span class="help-tag">textlock</span></span></h2></div>
<div class="old-help-para">In a few situations it is not allowed to change the text in the buffer, jump
to another window and some other things that might confuse or break what Vim
is currently doing.  This mostly applies to things that happen when Vim is
actually doing something else.  For example, evaluating the <a href="/neovim-docs-web/en/vim_diff#'balloonexpr'">'balloonexpr'</a> may
happen any moment the mouse cursor is resting at some position.</div>
<div class="old-help-para">This is not allowed when the textlock is active:
<div class="help-li" style=""> changing the buffer text
</div><div class="help-li" style=""> jumping to another buffer or window
</div><div class="help-li" style=""> editing another file
</div><div class="help-li" style=""> closing a window or quitting Vim
</div><div class="help-li" style=""> etc.
</div></div>
<div class="old-help-para"><h2 class="help-heading">Command-line expressions highlighting<span class="help-heading-tags">		<a name="expr-highlight"></a><span class="help-tag">expr-highlight</span></span></h2></div>
<div class="old-help-para">Expressions entered by the user in <a href="/neovim-docs-web/en/insert#i_CTRL-R_%3D">i_CTRL-R_=</a>, <a href="/neovim-docs-web/en/cmdline#c_CTRL-%5C_e">c_CTRL-\_e</a>, <a href="/neovim-docs-web/en/change#quote%3D">quote=</a> are
highlighted by the built-in expressions parser.  It uses highlight groups
described in the table below, which may be overridden by colorschemes.
							<a name="hl-NvimInvalid"></a><code class="help-tag-right">hl-NvimInvalid</code>
Besides the "Nvim"-prefixed highlight groups described below, there are
"NvimInvalid"-prefixed highlight groups which have the same meaning but
indicate that the token contains an error or that an error occurred just
before it.  They have mostly the same hierarchy, except that (by default) in
place of any non-Nvim-prefixed group NvimInvalid linking to <code>Error</code> is used
and some other intermediate groups are present.</div>
<div class="old-help-para"><div class="help-column_heading">Group                              Default link            Colored expression</div><a name="hl-NvimInternalError"></a><code class="help-tag">hl-NvimInternalError</code>               None, red/red           Parser bug</div>
<div class="old-help-para"><a name="hl-NvimAssignment"></a><code class="help-tag">hl-NvimAssignment</code>                  Operator                Generic assignment
<a name="hl-NvimPlainAssignment"></a><code class="help-tag">hl-NvimPlainAssignment</code>             NvimAssignment          <code>=</code> in <a href="/neovim-docs-web/en/eval#%3Alet">:let</a>
<a name="hl-NvimAugmentedAssignment"></a><code class="help-tag">hl-NvimAugmentedAssignment</code>         NvimAssignment          Generic, <code>+=</code>/`-=`/`.=`
<a name="hl-NvimAssignmentWithAddition"></a><code class="help-tag">hl-NvimAssignmentWithAddition</code>      NvimAugmentedAssignment <code>+=</code> in <a href="/neovim-docs-web/en/eval#%3Alet%2B%3D">:let+=</a>
<a name="hl-NvimAssignmentWithSubtraction"></a><code class="help-tag">hl-NvimAssignmentWithSubtraction</code>   NvimAugmentedAssignment <code>-=</code> in <a href="/neovim-docs-web/en/eval#%3Alet-%3D">:let-=</a>
<a name="hl-NvimAssignmentWithConcatenation"></a><code class="help-tag">hl-NvimAssignmentWithConcatenation</code> NvimAugmentedAssignment <code>.=</code> in <a href="/neovim-docs-web/en/eval#%3Alet.%3D">:let.=</a></div>
<div class="old-help-para"><a name="hl-NvimOperator"></a><code class="help-tag">hl-NvimOperator</code>                    Operator                Generic operator</div>
<div class="old-help-para"><a name="hl-NvimUnaryOperator"></a><code class="help-tag">hl-NvimUnaryOperator</code>               NvimOperator            Generic unary op
<a name="hl-NvimUnaryPlus"></a><code class="help-tag">hl-NvimUnaryPlus</code>                   NvimUnaryOperator       <a href="/neovim-docs-web/en/eval#expr-unary-%2B">expr-unary-+</a>
<a name="hl-NvimUnaryMinus"></a><code class="help-tag">hl-NvimUnaryMinus</code>                  NvimUnaryOperator       <a href="/neovim-docs-web/en/eval#expr-unary--">expr-unary--</a>
<a name="hl-NvimNot"></a><code class="help-tag">hl-NvimNot</code>                         NvimUnaryOperator       <a href="/neovim-docs-web/en/eval#expr-%21">expr-!</a></div>
<div class="old-help-para"><a name="hl-NvimBinaryOperator"></a><code class="help-tag">hl-NvimBinaryOperator</code>              NvimOperator            Generic binary op
<a name="hl-NvimComparison"></a><code class="help-tag">hl-NvimComparison</code>                  NvimBinaryOperator      Any <a href="/neovim-docs-web/en/eval#expr4">expr4</a> operator
<a name="hl-NvimComparisonModifier"></a><code class="help-tag">hl-NvimComparisonModifier</code>          NvimComparison          <code>#</code>/`?` near <a href="/neovim-docs-web/en/eval#expr4">expr4</a> op
<a name="hl-NvimBinaryPlus"></a><code class="help-tag">hl-NvimBinaryPlus</code>                  NvimBinaryOperator      <a href="/neovim-docs-web/en/eval#expr-%2B">expr-+</a>
<a name="hl-NvimBinaryMinus"></a><code class="help-tag">hl-NvimBinaryMinus</code>                 NvimBinaryOperator      <a href="/neovim-docs-web/en/eval#expr--">expr--</a>
<a name="hl-NvimConcat"></a><code class="help-tag">hl-NvimConcat</code>                      NvimBinaryOperator      <a href="/neovim-docs-web/en/eval#expr-.">expr-.</a>
<a name="hl-NvimConcatOrSubscript"></a><code class="help-tag">hl-NvimConcatOrSubscript</code>           NvimConcat              <a href="/neovim-docs-web/en/eval#expr-.">expr-.</a> or <a href="/neovim-docs-web/en/eval#expr-entry">expr-entry</a>
<a name="hl-NvimOr"></a><code class="help-tag">hl-NvimOr</code>                          NvimBinaryOperator      <a href="/neovim-docs-web/en/eval#expr-barbar">expr-barbar</a>
<a name="hl-NvimAnd"></a><code class="help-tag">hl-NvimAnd</code>                         NvimBinaryOperator      <a href="/neovim-docs-web/en/eval#expr-%26%26">expr-&amp;&amp;</a>
<a name="hl-NvimMultiplication"></a><code class="help-tag">hl-NvimMultiplication</code>              NvimBinaryOperator      <a href="/neovim-docs-web/en/eval#expr-star">expr-star</a>
<a name="hl-NvimDivision"></a><code class="help-tag">hl-NvimDivision</code>                    NvimBinaryOperator      <a href="/neovim-docs-web/en/eval#expr-%2F">expr-/</a>
<a name="hl-NvimMod"></a><code class="help-tag">hl-NvimMod</code>                         NvimBinaryOperator      <a href="/neovim-docs-web/en/eval#expr-%25">expr-%</a></div>
<div class="old-help-para"><a name="hl-NvimTernary"></a><code class="help-tag">hl-NvimTernary</code>                     NvimOperator            <code>?</code> in <a href="/neovim-docs-web/en/eval#expr1">expr1</a>
<a name="hl-NvimTernaryColon"></a><code class="help-tag">hl-NvimTernaryColon</code>                NvimTernary             <code>:</code> in <a href="/neovim-docs-web/en/eval#expr1">expr1</a></div>
<div class="old-help-para"><a name="hl-NvimParenthesis"></a><code class="help-tag">hl-NvimParenthesis</code>                 Delimiter               Generic bracket
<a name="hl-NvimLambda"></a><code class="help-tag">hl-NvimLambda</code>                      NvimParenthesis         <code>{</code>/`}` in <a href="/neovim-docs-web/en/eval#lambda">lambda</a>
<a name="hl-NvimNestingParenthesis"></a><code class="help-tag">hl-NvimNestingParenthesis</code>          NvimParenthesis         <code>(</code>/`)` in <a href="/neovim-docs-web/en/eval#expr-nesting">expr-nesting</a>
<a name="hl-NvimCallingParenthesis"></a><code class="help-tag">hl-NvimCallingParenthesis</code>          NvimParenthesis         <code>(</code>/`)` in <a href="/neovim-docs-web/en/eval#expr-function">expr-function</a></div>
<div class="old-help-para"><a name="hl-NvimSubscript"></a><code class="help-tag">hl-NvimSubscript</code>                   NvimParenthesis         Generic subscript
<a name="hl-NvimSubscriptBracket"></a><code class="help-tag">hl-NvimSubscriptBracket</code>            NvimSubscript           <code>[</code>/`]` in <a href="/neovim-docs-web/en/eval#expr-%5B%5D">expr-[]</a>
<a name="hl-NvimSubscriptColon"></a><code class="help-tag">hl-NvimSubscriptColon</code>              NvimSubscript           <code>:</code> in <a href="/neovim-docs-web/en/eval#expr-%5B%3A%5D">expr-[:]</a>
<a name="hl-NvimCurly"></a><code class="help-tag">hl-NvimCurly</code>                       NvimSubscript           <code>{</code>/`}` in
                                                           <a href="/neovim-docs-web/en/eval#curly-braces-names">curly-braces-names</a></div>
<div class="old-help-para"><a name="hl-NvimContainer"></a><code class="help-tag">hl-NvimContainer</code>                   NvimParenthesis         Generic container
<a name="hl-NvimDict"></a><code class="help-tag">hl-NvimDict</code>                        NvimContainer           <code>{</code>/`}` in <a href="/neovim-docs-web/en/eval#dict">dict</a> literal
<a name="hl-NvimList"></a><code class="help-tag">hl-NvimList</code>                        NvimContainer           <code>[</code>/`]` in <a href="/neovim-docs-web/en/eval#list">list</a> literal</div>
<div class="old-help-para"><a name="hl-NvimIdentifier"></a><code class="help-tag">hl-NvimIdentifier</code>                  Identifier              Generic identifier
<a name="hl-NvimIdentifierScope"></a><code class="help-tag">hl-NvimIdentifierScope</code>             NvimIdentifier          Namespace: letter
                                                           before <code>:</code> in
                                                           <a href="/neovim-docs-web/en/eval#internal-variables">internal-variables</a>
<a name="hl-NvimIdentifierScopeDelimiter"></a><code class="help-tag">hl-NvimIdentifierScopeDelimiter</code>    NvimIdentifier          <code>:</code> after namespace
                                                           letter
<a name="hl-NvimIdentifierName"></a><code class="help-tag">hl-NvimIdentifierName</code>              NvimIdentifier          Rest of the ident
<a name="hl-NvimIdentifierKey"></a><code class="help-tag">hl-NvimIdentifierKey</code>               NvimIdentifier          Identifier after
                                                           <a href="/neovim-docs-web/en/eval#expr-entry">expr-entry</a></div>
<div class="old-help-para"><a name="hl-NvimColon"></a><code class="help-tag">hl-NvimColon</code>                       Delimiter               <code>:</code> in <a href="/neovim-docs-web/en/eval#dict">dict</a> literal
<a name="hl-NvimComma"></a><code class="help-tag">hl-NvimComma</code>                       Delimiter               <code>,</code> in <a href="/neovim-docs-web/en/eval#dict">dict</a> or <a href="/neovim-docs-web/en/eval#list">list</a>
                                                           literal or
                                                           <a href="/neovim-docs-web/en/eval#expr-function">expr-function</a>
<a name="hl-NvimArrow"></a><code class="help-tag">hl-NvimArrow</code>                       Delimiter               <code>-&gt;</code> in <a href="/neovim-docs-web/en/eval#lambda">lambda</a></div>
<div class="old-help-para"><a name="hl-NvimRegister"></a><code class="help-tag">hl-NvimRegister</code>                    SpecialChar             <a href="/neovim-docs-web/en/eval#expr-register">expr-register</a>
<a name="hl-NvimNumber"></a><code class="help-tag">hl-NvimNumber</code>                      Number                  Non-prefix digits
                                                           in integer
                                                           <a href="/neovim-docs-web/en/eval#expr-number">expr-number</a>
<a name="hl-NvimNumberPrefix"></a><code class="help-tag">hl-NvimNumberPrefix</code>                Type                    <code>0</code> for <a href="/neovim-docs-web/en/eval#octal-number">octal-number</a>
                                                           <code>0x</code> for <a href="/neovim-docs-web/en/eval#hex-number">hex-number</a>
                                                           <code>0b</code> for <a href="/neovim-docs-web/en/eval#binary-number">binary-number</a>
<a name="hl-NvimFloat"></a><code class="help-tag">hl-NvimFloat</code>                       NvimNumber              Floating-point
                                                           number</div>
<div class="old-help-para"><a name="hl-NvimOptionSigil"></a><code class="help-tag">hl-NvimOptionSigil</code>                 Type                    <code>&amp;</code> in <a href="/neovim-docs-web/en/eval#expr-option">expr-option</a>
<a name="hl-NvimOptionScope"></a><code class="help-tag">hl-NvimOptionScope</code>                 NvimIdentifierScope     Option scope if any
<a name="hl-NvimOptionScopeDelimiter"></a><code class="help-tag">hl-NvimOptionScopeDelimiter</code>        NvimIdentifierScopeDelimiter
                                                           <code>:</code> after option scope
<a name="hl-NvimOptionName"></a><code class="help-tag">hl-NvimOptionName</code>                  NvimIdentifier          Option name</div>
<div class="old-help-para"><a name="hl-NvimEnvironmentSigil"></a><code class="help-tag">hl-NvimEnvironmentSigil</code>            NvimOptionSigil         <code>$</code> in <a href="/neovim-docs-web/en/eval#expr-env">expr-env</a>
<a name="hl-NvimEnvironmentName"></a><code class="help-tag">hl-NvimEnvironmentName</code>             NvimIdentifier          Env variable name</div>
<div class="old-help-para"><a name="hl-NvimString"></a><code class="help-tag">hl-NvimString</code>                      String                  Generic string
<a name="hl-NvimStringBody"></a><code class="help-tag">hl-NvimStringBody</code>                  NvimString              Generic string
                                                           literal body
<a name="hl-NvimStringQuote"></a><code class="help-tag">hl-NvimStringQuote</code>                 NvimString              Generic string quote
<a name="hl-NvimStringSpecial"></a><code class="help-tag">hl-NvimStringSpecial</code>               SpecialChar             Generic string
                                                           non-literal body</div>
<div class="old-help-para"><a name="hl-NvimSingleQuote"></a><code class="help-tag">hl-NvimSingleQuote</code>                 NvimStringQuote         <code>'</code> in <a href="/neovim-docs-web/en/eval#expr-'">expr-'</a>
<a name="hl-NvimSingleQuotedBody"></a><code class="help-tag">hl-NvimSingleQuotedBody</code>            NvimStringBody          Literal part of
                                                           <a href="/neovim-docs-web/en/eval#expr-'">expr-'</a> string body
<a name="hl-NvimSingleQuotedQuote"></a><code class="help-tag">hl-NvimSingleQuotedQuote</code>           NvimStringSpecial       <code>''</code> inside <a href="/neovim-docs-web/en/eval#expr-'">expr-'</a>
                                                           string body</div>
<div class="old-help-para"><a name="hl-NvimDoubleQuote"></a><code class="help-tag">hl-NvimDoubleQuote</code>                 NvimStringQuote         <code>"</code> in <a href="/neovim-docs-web/en/eval#expr-quote">expr-quote</a>
<a name="hl-NvimDoubleQuotedBody"></a><code class="help-tag">hl-NvimDoubleQuotedBody</code>            NvimStringBody          Literal part of
                                                           <a href="/neovim-docs-web/en/eval#expr-quote">expr-quote</a> body
<a name="hl-NvimDoubleQuotedEscape"></a><code class="help-tag">hl-NvimDoubleQuotedEscape</code>          NvimStringSpecial       Valid <a href="/neovim-docs-web/en/eval#expr-quote">expr-quote</a>
                                                           escape sequence
<a name="hl-NvimDoubleQuotedUnknownEscape"></a><code class="help-tag">hl-NvimDoubleQuotedUnknownEscape</code>   NvimInvalidValue        Unrecognized
                                                           <a href="/neovim-docs-web/en/eval#expr-quote">expr-quote</a> escape
                                                           sequence</div>

  
  