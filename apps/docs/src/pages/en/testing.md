---
title:  Testing
layout: ../../layouts/MainLayout.astro
---

  <a name="testing.txt"></a><a name="testing-support"></a><h1> Testing</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/testing.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Testing Vim and Vim script</div>
<div class="old-help-para">Expression evaluation is explained in <a href="eval.html#eval.txt">eval.txt</a>.  This file goes into details
about writing tests in Vim script.  This can be used for testing Vim itself
and for testing plugins.</div>
<div class="old-help-para">1. Testing Vim				<a href="testing.html#testing">testing</a>
2. Test functions			<a href="testing.html#test-functions-details">test-functions-details</a>
3. Assert functions			<a href="testing.html#assert-functions-details">assert-functions-details</a></div>
<div class="old-help-para"><h2 class="help-heading">1. Testing Vim<span class="help-heading-tags">						<a name="testing"></a><span class="help-tag">testing</span></span></h2></div>
<div class="old-help-para">Vim can be tested after building it, usually with "make test".
The tests are located in the directory "src/testdir".</div>
<div class="old-help-para">There are several types of tests added over time:
	test33.in		oldest, don't add any of these
	test_something.in	old style tests
	test_something.vim	new style tests</div>
<div class="old-help-para">						<a name="new-style-testing"></a><code class="help-tag-right">new-style-testing</code>
New tests should be added as new style tests.  These use functions such as
<a href="testing.html#assert_equal()">assert_equal()</a> to keep the test commands and the expected result in one
place.
						<a name="old-style-testing"></a><code class="help-tag-right">old-style-testing</code>
In some cases an old style test needs to be used.</div>
<div class="old-help-para">Find more information in the file src/testdir/README.txt.</div>
<div class="old-help-para"><h2 class="help-heading">2. Test functions<span class="help-heading-tags">				<a name="test-functions-details"></a><span class="help-tag">test-functions-details</span></span></h2></div>
<div class="old-help-para">test_garbagecollect_now()			 <a name="test_garbagecollect_now()"></a><code class="help-tag-right">test_garbagecollect_now()</code>
		Like garbagecollect(), but executed right away.  This must
		only be called directly to avoid any structure to exist
		internally, and <a href="eval.html#v%3Atesting">v:testing</a> must have been set before calling
		any function.</div>
<div class="old-help-para"><h2 class="help-heading">3. Assert functions<span class="help-heading-tags">				<a name="assert-functions-details"></a><span class="help-tag">assert-functions-details</span></span></h2></div>
<div class="old-help-para">assert_beeps(<code>{cmd}</code>)					<a name="assert_beeps()"></a><code class="help-tag-right">assert_beeps()</code>
		Run <code>{cmd}</code> and add an error message to <a href="eval.html#v%3Aerrors">v:errors</a> if it does
		NOT produce a beep or visual bell.
		Also see <a href="testing.html#assert_fails()">assert_fails()</a>, <a href="testing.html#assert_nobeep()">assert_nobeep()</a> and
		<a href="eval.html#assert-return">assert-return</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetCmd()-&gt;assert_beeps()</pre></div>
<div class="old-help-para">							<a name="assert_equal()"></a><code class="help-tag-right">assert_equal()</code>
assert_equal(<code>{expected}</code>, <code>{actual}</code> [, <code>{msg}</code>])
		When <code>{expected}</code> and <code>{actual}</code> are not equal an error message is
		added to <a href="eval.html#v%3Aerrors">v:errors</a> and 1 is returned.  Otherwise zero is
		returned <a href="eval.html#assert-return">assert-return</a>.
		There is no automatic conversion, the String "4" is different
		from the Number 4.  And the number 4 is different from the
		Float 4.0.  The value of <a href="options.html#'ignorecase'">'ignorecase'</a> is not used here, case
		always matters.
		When <code>{msg}</code> is omitted an error in the form "Expected
		<code>{expected}</code> but got <code>{actual}</code>" is produced.
		Example:<pre>assert_equal('foo', 'bar')</pre></div>
<div class="old-help-para">		Will result in a string to be added to <a href="eval.html#v%3Aerrors">v:errors</a>:
<div class="help-column_heading">	test.vim line 12: Expectedfoo but gotbar</div></div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>mylist-&gt;assert_equal([1, 2, 3])</pre></div>
<div class="old-help-para">							<a name="assert_equalfile()"></a><code class="help-tag-right">assert_equalfile()</code>
assert_equalfile(<code>{fname-one}</code>, <code>{fname-two}</code>)
		When the files <code>{fname-one}</code> and <code>{fname-two}</code> do not contain
		exactly the same text an error message is added to <a href="eval.html#v%3Aerrors">v:errors</a>.
		Also see <a href="eval.html#assert-return">assert-return</a>.
		When <code>{fname-one}</code> or <code>{fname-two}</code> does not exist the error will
		mention that.</div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetLog()-&gt;assert_equalfile('expected.log')</pre>
assert_exception(<code>{error}</code> [, <code>{msg}</code>])			<a name="assert_exception()"></a><code class="help-tag-right">assert_exception()</code>
		When v:exception does not contain the string <code>{error}</code> an error
		message is added to <a href="eval.html#v%3Aerrors">v:errors</a>.  Also see <a href="eval.html#assert-return">assert-return</a>.
		This can be used to assert that a command throws an exception.
		Using the error number, followed by a colon, avoids problems
		with translations:<pre>try
  commandthatfails
  call assert_false(1, 'command should have failed')
catch
  call assert_exception('E492:')
endtry</pre></div>
<div class="old-help-para">							<a name="assert_fails()"></a><code class="help-tag-right">assert_fails()</code>
assert_fails(<code>{cmd}</code> [, <code>{error}</code> [, <code>{msg}</code> [, <code>{lnum}</code> [, <code>{context}</code>]]]])
		Run <code>{cmd}</code> and add an error message to <a href="eval.html#v%3Aerrors">v:errors</a> if it does
		NOT produce an error or when <code>{error}</code> is not found in the
		error message.  Also see <a href="eval.html#assert-return">assert-return</a>.</div>
<div class="old-help-para">		When <code>{error}</code> is a string it must be found literally in the
		first reported error. Most often this will be the error code,
		including the colon, e.g. "E123:".<pre>assert_fails('bad cmd', 'E987:')</pre></div>
<div class="old-help-para">		When <code>{error}</code> is a <a href="eval.html#List">List</a> with one or two strings, these are
		used as patterns.  The first pattern is matched against the
		first reported error:<pre>assert_fails('cmd', ['E987:.*expected bool'])</pre></div>
<div class="old-help-para">		The second pattern, if present, is matched against the last
		reported error.  To only match the last error use an empty
		string for the first error:<pre>assert_fails('cmd', ['', 'E987:'])</pre></div>
<div class="old-help-para">		If <code>{msg}</code> is empty then it is not used.  Do this to get the
		default message when passing the <code>{lnum}</code> argument.</div>
<div class="old-help-para">		When <code>{lnum}</code> is present and not negative, and the <code>{error}</code>
		argument is present and matches, then this is compared with
		the line number at which the error was reported. That can be
		the line number in a function or in a script.</div>
<div class="old-help-para">		When <code>{context}</code> is present it is used as a pattern and matched
		against the context (script name or function name) where
		<code>{lnum}</code> is located in.</div>
<div class="old-help-para">		Note that beeping is not considered an error, and some failing
		commands only beep.  Use <a href="testing.html#assert_beeps()">assert_beeps()</a> for those.</div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetCmd()-&gt;assert_fails('E99:')</pre>
assert_false(<code>{actual}</code> [, <code>{msg}</code>])			<a name="assert_false()"></a><code class="help-tag-right">assert_false()</code>
		When <code>{actual}</code> is not false an error message is added to
		<a href="eval.html#v%3Aerrors">v:errors</a>, like with <a href="testing.html#assert_equal()">assert_equal()</a>.
		Also see <a href="eval.html#assert-return">assert-return</a>.
		A value is false when it is zero. When <code>{actual}</code> is not a
		number the assert fails.
		When <code>{msg}</code> is omitted an error in the form
		"Expected False but got <code>{actual}</code>" is produced.</div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetResult()-&gt;assert_false()</pre>
assert_inrange(<code>{lower}</code>, <code>{upper}</code>, <code>{actual}</code> [, <code>{msg}</code>])	 <a name="assert_inrange()"></a><code class="help-tag-right">assert_inrange()</code>
		This asserts number and <a href="eval.html#Float">Float</a> values.  When <code>{actual}</code>  is lower
		than <code>{lower}</code> or higher than <code>{upper}</code> an error message is added
		to <a href="eval.html#v%3Aerrors">v:errors</a>.  Also see <a href="eval.html#assert-return">assert-return</a>.
		When <code>{msg}</code> is omitted an error in the form
		"Expected range <code>{lower}</code> - <code>{upper}</code>, but got <code>{actual}</code>" is
		produced.</div>
<div class="old-help-para">								<a name="assert_match()"></a><code class="help-tag-right">assert_match()</code>
assert_match(<code>{pattern}</code>, <code>{actual}</code> [, <code>{msg}</code>])
		When <code>{pattern}</code> does not match <code>{actual}</code> an error message is
		added to <a href="eval.html#v%3Aerrors">v:errors</a>.  Also see <a href="eval.html#assert-return">assert-return</a>.</div>
<div class="old-help-para">		<code>{pattern}</code> is used as with <a href="eval.html#expr-%3D~">expr-=~</a>: The matching is always done
		like <a href="options.html#'magic'">'magic'</a> was set and <a href="options.html#'cpoptions'">'cpoptions'</a> is empty, no matter what
		the actual value of <a href="options.html#'magic'">'magic'</a> or <a href="options.html#'cpoptions'">'cpoptions'</a> is.</div>
<div class="old-help-para">		<code>{actual}</code> is used as a string, automatic conversion applies.
		Use "^" and "$" to match with the start and end of the text.
		Use both to match the whole text.</div>
<div class="old-help-para">		When <code>{msg}</code> is omitted an error in the form
		"Pattern <code>{pattern}</code> does not match <code>{actual}</code>" is produced.
		Example:<pre>assert_match('^f.*o$', 'foobar')</pre></div>
<div class="old-help-para">		Will result in a string to be added to <a href="eval.html#v%3Aerrors">v:errors</a>:
<div class="help-column_heading">	test.vim line 12: Pattern '^f.*o$' does not matchfoobar</div></div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>getFile()-&gt;assert_match('foo.*')</pre></div>
<div class="old-help-para">assert_nobeep(<code>{cmd}</code>)					<a name="assert_nobeep()"></a><code class="help-tag-right">assert_nobeep()</code>
		Run <code>{cmd}</code> and add an error message to <a href="eval.html#v%3Aerrors">v:errors</a> if it
		produces a beep or visual bell.
		Also see <a href="testing.html#assert_beeps()">assert_beeps()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetCmd()-&gt;assert_nobeep()</pre></div>
<div class="old-help-para">							<a name="assert_notequal()"></a><code class="help-tag-right">assert_notequal()</code>
assert_notequal(<code>{expected}</code>, <code>{actual}</code> [, <code>{msg}</code>])
		The opposite of <code>assert_equal()</code>: add an error message to
		<a href="eval.html#v%3Aerrors">v:errors</a> when <code>{expected}</code> and <code>{actual}</code> are equal.
		Also see <a href="eval.html#assert-return">assert-return</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>mylist-&gt;assert_notequal([1, 2, 3])</pre></div>
<div class="old-help-para">							<a name="assert_notmatch()"></a><code class="help-tag-right">assert_notmatch()</code>
assert_notmatch(<code>{pattern}</code>, <code>{actual}</code> [, <code>{msg}</code>])
		The opposite of <code>assert_match()</code>: add an error message to
		<a href="eval.html#v%3Aerrors">v:errors</a> when <code>{pattern}</code> matches <code>{actual}</code>.
		Also see <a href="eval.html#assert-return">assert-return</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>getFile()-&gt;assert_notmatch('bar.*')</pre>
assert_report(<code>{msg}</code>)					<a name="assert_report()"></a><code class="help-tag-right">assert_report()</code>
		Report a test failure directly, using String <code>{msg}</code>.
		Always returns one.</div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetMessage()-&gt;assert_report()</pre>
assert_true(<code>{actual}</code> [, <code>{msg}</code>])				<a name="assert_true()"></a><code class="help-tag-right">assert_true()</code>
		When <code>{actual}</code> is not true an error message is added to
		<a href="eval.html#v%3Aerrors">v:errors</a>, like with <a href="testing.html#assert_equal()">assert_equal()</a>.
		Also see <a href="eval.html#assert-return">assert-return</a>.
		A value is <a href="eval.html#TRUE">TRUE</a> when it is a non-zero number or <a href="eval.html#v%3Atrue">v:true</a>.
		When <code>{actual}</code> is not a number or <a href="eval.html#v%3Atrue">v:true</a> the assert fails.
		When <code>{msg}</code> is omitted an error in the form "Expected True but
		got <code>{actual}</code>" is produced.</div>
<div class="old-help-para">		Can also be used as a <a href="eval.html#method">method</a>:<pre>GetResult()-&gt;assert_true()</pre></div>

  
  