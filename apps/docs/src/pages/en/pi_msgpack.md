---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="msgpack utilities" class="section-title" href="#msgpack utilities"> Pi Msgpack Txt</a> 

Author:  Nikolay Pavlov <kp-pav@yandex.ru>
Copyright: (c) 2015 by Nikolay Pavlov

The Apache license applies to the files in this package, including 
runtime/autoload/msgpack.vim, runtime/doc/pi_msgpack.txt and 
test/functional/plugin/msgpack_spec.lua.  Like anything else that's free, 
msgpack.vim and its associated files are provided *as is* and comes with no 
warranty of any kind, either expressed or implied.  No guarantees of 
merchantability.  No guarantees of suitability for any purpose.  By using this 
plugin, you agree that in no event will the copyright holder be liable for any 
damages resulting from the use of this software. Use at your own risk!


## <a id="msgpack.vim-contents" class="section-title" href="#msgpack.vim-contents">1. Contents</a> 

1. Contents..............................: [msgpack.vim-contents](#msgpack.vim-contents)
2. Msgpack.vim introduction..............: [msgpack.vim-intro](#msgpack.vim-intro)
3. Msgpack.vim manual....................: [msgpack.vim-manual](#msgpack.vim-manual)
Function arguments....................: [msgpack.vim-arguments](#msgpack.vim-arguments)
msgpack#is_int function...............: [msgpack#is_int()](#msgpack#is_int())
msgpack#is_uint function..............: [msgpack#is_uint()](#msgpack#is_uint())
msgpack#strftime function.............: [msgpack#strftime()](#msgpack#strftime())
msgpack#strptime function.............: [msgpack#strptime()](#msgpack#strptime())
msgpack#int_dict_to_str function......: [msgpack#int_dict_to_str()](#msgpack#int_dict_to_str())
msgpack#special_type function.........: [msgpack#special_type()](#msgpack#special_type())
msgpack#type function.................: [msgpack#type()](#msgpack#type())
msgpack#deepcopy function.............: [msgpack#deepcopy()](#msgpack#deepcopy())
msgpack#string function...............: [msgpack#string()](#msgpack#string())
msgpack#eval function.................: [msgpack#eval()](#msgpack#eval())
msgpack#equal function................: [msgpack#equal()](#msgpack#equal())


## <a id="msgpack.vim-intro" class="section-title" href="#msgpack.vim-intro">2. Msgpack.Vim Introduction</a> 

This plugin contains utility functions to be used in conjunction with 
[msgpackdump()| and |msgpackparse()](#msgpackdump()| and |msgpackparse()) functions.


## <a id="msgpack.vim-manual" class="section-title" href="#msgpack.vim-manual">3. Msgpack.Vim Manual</a> 

### <a id="msgpack.vim-arguments" class="section-title" href="#msgpack.vim-arguments">Function Arguments</a>

Disambiguation of arguments described below.  Note: if e.g. function is listed 
as accepting [{msgpack-integer}](#{msgpack-integer}) (or anything else) it means that function 
does not check whether argument matches its description.

*{msgpack-value}*	Either [msgpack-special-dict](#msgpack-special-dict) or a regular value, but 
not function reference.
*{msgpack-integer}*	Any value for which [msgpack#type()](#msgpack#type()) will return 
"integer".
*{msgpack-special-int}*	[msgpack-special-dict](#msgpack-special-dict) representing integer.

### <a id="msgpack#is_int()" class="section-title" href="#msgpack#is_int()">msgpack#is_int({msgpack-value})</a>
Returns 1 if given {msgpack-value} is integer value, 0 otherwise.

### <a id="msgpack#is_uint()" class="section-title" href="#msgpack#is_uint()">msgpack#is_uint({msgpack-value})</a>
Returns 1 if given {msgpack-value} is integer value greater or equal 
to zero, 0 otherwise.

### <a id="msgpack#strftime" class="section-title" href="#msgpack#strftime">Note:</a>
### <a id="msgpack#strftime()" class="section-title" href="#msgpack#strftime()">msgpack#strftime({format}, {msgpack-integer})</a>
Same as [strftime()](#strftime()), but second argument may be 
[msgpack-special-dict|.  Requires |Python](#msgpack-special-dict|.  Requires |Python) to really work with
[msgpack-special-dict](#msgpack-special-dict)s.

### <a id="msgpack#strptime" class="section-title" href="#msgpack#strptime">Note:</a>
### <a id="msgpack#strptime()" class="section-title" href="#msgpack#strptime()">msgpack#strptime({format}, {time})</a>
Reverse of [msgpack#strftime()](#msgpack#strftime()): for any time and format 
[msgpack#equal|( |msgpack#strptime|(format, |msgpack#strftime](#msgpack#equal|( |msgpack#strptime|(format, |msgpack#strftime)(format, 
time)), time) be true.  Requires [|Python](#|Python), without it only supports
non-[msgpack-special-dict](#msgpack-special-dict) nonnegative times and format equal to
`%Y-%m-%dT%H:%M:%S`.

msgpack#int_dict_to_str({msgpack-special-int})	*msgpack#int_dict_to_str()*
Function which converts [msgpack-special-dict](#msgpack-special-dict) integer value to 
a hexadecimal value like 0x1234567890ABCDEF (always returns exactly 16 
hexadecimal digits).

### <a id="msgpack#special_type()" class="section-title" href="#msgpack#special_type()">msgpack#special_type({msgpack-value})</a>
Returns zero if {msgpack-value} is not [msgpack-special-dict](#msgpack-special-dict).  If it 
is it returns name of the key in [v:msgpack_types](#v:msgpack_types) which represents 
{msgpack-value} type.

### <a id="msgpack#type()" class="section-title" href="#msgpack#type()">msgpack#type({msgpack-value})</a>
Returns name of the key in [v:msgpack_types](#v:msgpack_types) that represents 
{msgpack-value} type.  Never returns zero: this function returns 
msgpack type which will be dumped by [msgpackdump()](#msgpackdump()) should it receive 
a list with single {msgpack-value} as input.

### <a id="msgpack#deepcopy()" class="section-title" href="#msgpack#deepcopy()">msgpack#deepcopy({msgpack-value})</a>
Like [deepcopy()|, but works correctly with |msgpack-special-dict](#deepcopy()|, but works correctly with |msgpack-special-dict) 
values.  Plain [deepcopy()](#deepcopy()) will destroy all types in 
[msgpack-special-dict](#msgpack-special-dict) values because it will copy _TYPE key values, 
while they should be preserved.

### <a id="msgpack#string()" class="section-title" href="#msgpack#string()">msgpack#string({msgpack-value})</a>
Like [string()](#string()), but saves information about msgpack types.  Values 
dumped by msgpack#string may be read back by [msgpack#eval()](#msgpack#eval()).  
Returns is the following:

- Dictionaries are dumped as "{key1: value1, key2: value2}". Note: 
msgpack allows any values in keys, so with some 
[msgpack-special-dict| values |msgpack#string()](#msgpack-special-dict| values |msgpack#string()) may produce even 
"{{1: 2}: 3, [4]: 5}".
- Lists are dumped as "[value1, value2]".
- Strings are dumped as
1. `"abc"`: binary string.
2. `="abc"`: string.
3. `+(10)"ext"`: extension strings (10 may be replaced with any 
8-bit signed integer).
Inside strings the following escape sequences may be present: "\0" 
(represents NUL byte), "\n" (represents line feed) and "\"" 
(represents double quote).
- Floating-point and integer values are dumped using [string()](#string()) or 
[msgpack#int_dict_to_str()](#msgpack#int_dict_to_str()).
- Booleans are dumped as "TRUE" or "FALSE".
- Nil values are dumped as "NIL".

### <a id="msgpack#eval()" class="section-title" href="#msgpack#eval()">msgpack#eval({string}, {dict})</a>
Transforms string created by [msgpack#string()](#msgpack#string()) into a value suitable 
for [msgpackdump()](#msgpackdump()).  Second argument allows adding special values 
that start with head characters ([/\h](#/\h)) and contain only word 
characters ([/\w](#/\w)).  Built-in special values are "TRUE", "FALSE", 
"NIL", "nan" and "inf" and they cannot be overridden.  Map values are 
always evaluated to [msgpack-special-dict](#msgpack-special-dict) values, as well as 
hexadecimal digits.  When evaluating maps order of keys is preserved.

Note that in addition to regular integer representations that may be 
obtained using [msgpack#string()](#msgpack#string()) msgpack#eval() also supports C-style 
“character” integer constants like `'/'` (equivalent to 
`char2nr('/')`: `47`). This also allows `'\0'` (number is decimal).

### <a id="msgpack#equal" class="section-title" href="#msgpack#equal">Note:</a>
### <a id="msgpack#equal()" class="section-title" href="#msgpack#equal()">msgpack#equal({msgpack-value}, {msgpack-value})</a>
Returns 1 if given values are equal, 0 otherwise.  When comparing 
msgpack map values order of keys is ignored.  Comparing 
[msgpack-special-dict](#msgpack-special-dict) with equivalent non-special-dict value 
evaluates to 1.


## <a id="" class="section-title" href="#">Vim Tw 78 Ts 8 Ft Help Fdm Marker</a> 



