---
title:  Pi_msgpack
layout: ../../layouts/MainLayout.astro
---

  <a name="pi_msgpack.txt"></a><a name="msgpack.vim-contents"></a><h1> Pi_msgpack</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/pi_msgpack.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Author:  Nikolay Pavlov &lt;kp-pav@yandex.ru&gt;
Copyright: (c) 2015 by Nikolay Pavlov</div>
<div class="old-help-para">The Apache license applies to the files in this package, including
runtime/autoload/msgpack.vim, runtime/doc/pi_msgpack.txt and
test/functional/plugin/msgpack_spec.lua.  Like anything else that's free,
msgpack.vim and its associated files are providedas is* and comes with no
warranty of any kind, either expressed or implied.  No guarantees of
merchantability.  No guarantees of suitability for any purpose.  By using this
plugin, you agree that in no event will the copyright holder be liable for any
damages resulting from the use of this software. Use at your own risk!</div>
<div class="old-help-para"><h2 class="help-heading">1. Contents</h2></div>
<div class="old-help-para">	1. Contents..............................: <a href="pi_msgpack.html#msgpack.vim-contents">msgpack.vim-contents</a>
	2. Msgpack.vim introduction..............: <a href="pi_msgpack.html#msgpack.vim-intro">msgpack.vim-intro</a>
	3. Msgpack.vim manual....................: <a href="pi_msgpack.html#msgpack.vim-manual">msgpack.vim-manual</a>
	   Function arguments....................: <a href="pi_msgpack.html#msgpack.vim-arguments">msgpack.vim-arguments</a>
	   msgpack#is_int function...............: <a href="pi_msgpack.html#msgpack%23is_int()">msgpack#is_int()</a>
	   msgpack#is_uint function..............: <a href="pi_msgpack.html#msgpack%23is_uint()">msgpack#is_uint()</a>
	   msgpack#strftime function.............: <a href="pi_msgpack.html#msgpack%23strftime()">msgpack#strftime()</a>
	   msgpack#strptime function.............: <a href="pi_msgpack.html#msgpack%23strptime()">msgpack#strptime()</a>
	   msgpack#int_dict_to_str function......: <a href="pi_msgpack.html#msgpack%23int_dict_to_str()">msgpack#int_dict_to_str()</a>
	   msgpack#special_type function.........: <a href="pi_msgpack.html#msgpack%23special_type()">msgpack#special_type()</a>
	   msgpack#type function.................: <a href="pi_msgpack.html#msgpack%23type()">msgpack#type()</a>
	   msgpack#deepcopy function.............: <a href="pi_msgpack.html#msgpack%23deepcopy()">msgpack#deepcopy()</a>
	   msgpack#string function...............: <a href="pi_msgpack.html#msgpack%23string()">msgpack#string()</a>
	   msgpack#eval function.................: <a href="pi_msgpack.html#msgpack%23eval()">msgpack#eval()</a>
	   msgpack#equal function................: <a href="pi_msgpack.html#msgpack%23equal()">msgpack#equal()</a></div>
<div class="old-help-para"><h2 class="help-heading">2. Msgpack.vim introduction<span class="help-heading-tags">			<a name="msgpack.vim-intro"></a><span class="help-tag">msgpack.vim-intro</span></span></h2></div>
<div class="old-help-para">This plugin contains utility functions to be used in conjunction with
<a href="builtin.html#msgpackdump()">msgpackdump()</a> and <a href="builtin.html#msgpackparse()">msgpackparse()</a> functions.</div>
<div class="old-help-para"><h2 class="help-heading">3. Msgpack.vim manual<span class="help-heading-tags">				<a name="msgpack.vim-manual"></a><span class="help-tag">msgpack.vim-manual</span></span></h2></div>
<div class="old-help-para"><h3 class="help-heading">FUNCTION ARGUMENTS<span class="help-heading-tags">				<a name="msgpack.vim-arguments"></a><span class="help-tag">msgpack.vim-arguments</span></span></h3></div>
<div class="old-help-para">Disambiguation of arguments described below.  Note: if e.g. function is listed
as accepting <a href="pi_msgpack.html#%7Bmsgpack-integer%7D">{msgpack-integer}</a> (or anything else) it means that function
does not check whether argument matches its description.</div>
<div class="old-help-para"><a name="%7Bmsgpack-value%7D"></a><code class="help-tag">{msgpack-value}</code>  	Either <a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a> or a regular value, but
			not function reference.
<a name="%7Bmsgpack-integer%7D"></a><code class="help-tag">{msgpack-integer}</code>  	Any value for which <a href="pi_msgpack.html#msgpack%23type()">msgpack#type()</a> will return
			"integer".
<a name="%7Bmsgpack-special-int%7D"></a><code class="help-tag">{msgpack-special-int}</code>  	<a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a> representing integer.</div>
<div class="old-help-para">msgpack#is_int({msgpack-value})				<a name="msgpack%23is_int()"></a><code class="help-tag-right">msgpack#is_int()</code>
	Returns 1 if given <code>{msgpack-value}</code> is integer value, 0 otherwise.</div>
<div class="old-help-para">msgpack#is_uint({msgpack-value})			<a name="msgpack%23is_uint()"></a><code class="help-tag-right">msgpack#is_uint()</code>
	Returns 1 if given <code>{msgpack-value}</code> is integer value greater or equal
	to zero, 0 otherwise.</div>
<div class="old-help-para">							<a name="msgpack%23strftime"></a><code class="help-tag-right">msgpack#strftime</code>
msgpack#strftime({format}, <code>{msgpack-integer}</code>)		<a name="msgpack%23strftime()"></a><code class="help-tag-right">msgpack#strftime()</code>
	Same as <a href="builtin.html#strftime()">strftime()</a>, but second argument may be
	<a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a>.  Requires <a href="if_pyth.html#Python">Python</a> to really work with
	<a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a>s.</div>
<div class="old-help-para">							<a name="msgpack%23strptime"></a><code class="help-tag-right">msgpack#strptime</code>
msgpack#strptime({format}, <code>{time}</code>)			<a name="msgpack%23strptime()"></a><code class="help-tag-right">msgpack#strptime()</code>
	Reverse of <a href="pi_msgpack.html#msgpack%23strftime()">msgpack#strftime()</a>: for any time and format
	<a href="pi_msgpack.html#msgpack%23equal">msgpack#equal</a>( <a href="pi_msgpack.html#msgpack%23strptime">msgpack#strptime</a>(format, <a href="pi_msgpack.html#msgpack%23strftime">msgpack#strftime</a>(format,
	time)), time) be true.  Requires ||Python|, without it only supports
	non-|msgpack-special-dict| nonnegative times and format equal to
	<code>%Y-%m-%dT%H:%M:%S</code>.</div>
<div class="old-help-para">msgpack#int_dict_to_str({msgpack-special-int})	<a name="msgpack%23int_dict_to_str()"></a><code class="help-tag">msgpack#int_dict_to_str()</code>
	Function which converts <a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a> integer value to
	a hexadecimal value like 0x1234567890ABCDEF (always returns exactly 16
	hexadecimal digits).</div>
<div class="old-help-para">msgpack#special_type({msgpack-value})		<a name="msgpack%23special_type()"></a><code class="help-tag-right">msgpack#special_type()</code>
	Returns zero if <code>{msgpack-value}</code> is not <a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a>.  If it
	is it returns name of the key in <a href="eval.html#v%3Amsgpack_types">v:msgpack_types</a> which represents
	<code>{msgpack-value}</code> type.</div>
<div class="old-help-para">msgpack#type({msgpack-value})				<a name="msgpack%23type()"></a><code class="help-tag-right">msgpack#type()</code>
	Returns name of the key in <a href="eval.html#v%3Amsgpack_types">v:msgpack_types</a> that represents
	<code>{msgpack-value}</code> type.  Never returns zero: this function returns
	msgpack type which will be dumped by <a href="builtin.html#msgpackdump()">msgpackdump()</a> should it receive
	a list with single <code>{msgpack-value}</code> as input.</div>
<div class="old-help-para">msgpack#deepcopy({msgpack-value})			<a name="msgpack%23deepcopy()"></a><code class="help-tag-right">msgpack#deepcopy()</code>
	Like <a href="builtin.html#deepcopy()">deepcopy()</a>, but works correctly with <a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a>
	values.  Plain <a href="builtin.html#deepcopy()">deepcopy()</a> will destroy all types in
	<a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a> values because it will copy _TYPE key values,
	while they should be preserved.</div>
<div class="old-help-para">msgpack#string({msgpack-value})				<a name="msgpack%23string()"></a><code class="help-tag-right">msgpack#string()</code>
	Like <a href="builtin.html#string()">string()</a>, but saves information about msgpack types.  Values
	dumped by msgpack#string may be read back by <a href="pi_msgpack.html#msgpack%23eval()">msgpack#eval()</a>.
	Returns is the following:</div>
<div class="old-help-para"><div class="help-li" style=""> Dictionaries are dumped as "{key1: value1, key2: value2}". Note:
	  msgpack allows any values in keys, so with some
	  <a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a> values <a href="pi_msgpack.html#msgpack%23string()">msgpack#string()</a> may produce even
	  "{{1: 2}: 3, [4]: 5}".
</div><div class="help-li" style=""> Lists are dumped as "[value1, value2]".
</div><div class="help-li" style=""> Strings are dumped as
	  1. <code>"abc"</code>: binary string.
	  2. <code>="abc"</code>: string.
	  3. <code>+(10)"ext"</code>: extension strings (10 may be replaced with any
	     8-bit signed integer).
	  Inside strings the following escape sequences may be present: "\0"
	  (represents NUL byte), "\n" (represents line feed) and "\""
	  (represents double quote).
</div><div class="help-li" style=""> Floating-point and integer values are dumped using <a href="builtin.html#string()">string()</a> or
	  <a href="pi_msgpack.html#msgpack%23int_dict_to_str()">msgpack#int_dict_to_str()</a>.
</div><div class="help-li" style=""> Booleans are dumped as "TRUE" or "FALSE".
</div><div class="help-li" style=""> Nil values are dumped as "NIL".
</div></div>
<div class="old-help-para">msgpack#eval({string}, <code>{dict}</code>)				<a name="msgpack%23eval()"></a><code class="help-tag-right">msgpack#eval()</code>
	Transforms string created by <a href="pi_msgpack.html#msgpack%23string()">msgpack#string()</a> into a value suitable
	for <a href="builtin.html#msgpackdump()">msgpackdump()</a>.  Second argument allows adding special values
	that start with head characters (<a href="pattern.html#%2F%5Ch">/\h</a>) and contain only word
	characters (<a href="pattern.html#%2F%5Cw">/\w</a>).  Built-in special values are "TRUE", "FALSE",
	"NIL", "nan" and "inf" and they cannot be overridden.  Map values are
	always evaluated to <a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a> values, as well as
	hexadecimal digits.  When evaluating maps order of keys is preserved.</div>
<div class="old-help-para">	Note that in addition to regular integer representations that may be
	obtained using <a href="pi_msgpack.html#msgpack%23string()">msgpack#string()</a> msgpack#eval() also supports C-style
	“character” integer constants like <code>'/'</code> (equivalent to
	<code>char2nr('/')</code>: <code>47</code>). This also allows <code>'\0'</code> (number is decimal).</div>
<div class="old-help-para">							<a name="msgpack%23equal"></a><code class="help-tag-right">msgpack#equal</code>
msgpack#equal({msgpack-value}, <code>{msgpack-value}</code>)		<a name="msgpack%23equal()"></a><code class="help-tag-right">msgpack#equal()</code>
	Returns 1 if given values are equal, 0 otherwise.  When comparing
	msgpack map values order of keys is ignored.  Comparing
	<a href="builtin.html#msgpack-special-dict">msgpack-special-dict</a> with equivalent non-special-dict value
	evaluates to 1.</div>

  
  