---
title:  If_perl
layout: ../../layouts/MainLayout.astro
---

  <a name="if_perl.txt"></a><a name="if_perl"></a><h1> If_perl</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/if_perl.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">The perl Interface to Vim <a name="perl"></a><code class="help-tag">perl</code></div>
<div class="old-help-para">See <a href="provider.html#provider-perl">provider-perl</a> for more information.</div>
<div class="old-help-para"><h2 class="help-heading">1. Commands<span class="help-heading-tags">						<a name="perl-commands"></a><span class="help-tag">perl-commands</span></span></h2></div>
<div class="old-help-para">							<a name="%3Aperl"></a><code class="help-tag-right">:perl</code>
:[range]perl <code>{stmt}</code>
			Execute perl statement <code>{stmt}</code>.  The current package is
			"main".  A simple check if the <code>:perl</code> command is
			working:<pre>:perl print "Hello"</pre>
:[range]perl &lt;&lt; [endmarker]
<code>{script}</code>
<code>{endmarker}</code>
			Execute perl script <code>{script}</code>.
			The <code>{endmarker}</code> after <code>{script}</code> must NOT be preceded by
			any white space.</div>
<div class="old-help-para">			If [endmarker] is omitted, it defaults to a dot '.'
			like for the <a href="insert.html#%3Aappend">:append</a> and <a href="insert.html#%3Ainsert">:insert</a> commands.</div>
<div class="old-help-para">			Useful for including perl code in Vim scripts.
			Requires perl, see <a href="if_pyth.html#script-here">script-here</a>.</div>
<div class="old-help-para">Example:<pre>function! MyVimMethod()
perl &lt;&lt; EOF
sub my_vim_method
{
        print "Hello World!\n";
}
EOF
endfunction</pre>
To see what version of perl you have:<pre>:perl print $^V</pre></div>
<div class="old-help-para">							<a name="%3Aperldo"></a><code class="help-tag-right">:perldo</code>
:[range]perldo <code>{cmd}</code>	Execute perl command <code>{cmd}</code> for each line in the[range],
			with $_ being set to the test of each line in turn,
			without a trailing <code>&lt;EOL&gt;</code>. In addition to $_, $line and
			$linenr is also set to the line content and line number
			respectively. Setting $_ will change the text, but note
			that it is not possible to add or delete lines using
			this command.
			The default for [range] is the whole file: "1,$".</div>
<div class="old-help-para">Examples:
<pre>:perldo $_ = reverse($_);
:perldo $_ = "".$linenr." =&gt; $line";</pre>
One can use <code>:perldo</code> in conjunction with <code>:perl</code> to filter a range using
perl. For example:<pre>:perl &lt;&lt; EOF
sub perl_vim_string_replace
{
    my $line = shift;
    my $needle = $vim-&gt;eval('@a');
    my $replacement = $vim-&gt;eval('@b');
    $line =~ s/$needle/$replacement/g;
    return $line;
}
EOF
:let @a='somevalue'
:let @b='newvalue'
:'&lt;,'&gt;perldo $_ = perl_vim_string_replace($_)</pre></div>
<div class="old-help-para">							<a name="%3Aperlfile"></a><code class="help-tag-right">:perlfile</code>
:[range]perlfile <code>{file}</code>
			Execute the perl script in <code>{file}</code>.  The whole
			argument is used as a single file name.</div>
<div class="old-help-para">Both of these commands do essentially the same thing - they execute a piece of
perl code, with the "current range" set to the given line range.</div>
<div class="old-help-para">In the case of :perl, the code to execute is in the command-line.
In the case of :perlfile, the code to execute is the contents of the given file.</div>
<div class="old-help-para">perl commands cannot be used in the <a href="eval.html#sandbox">sandbox</a>.</div>
<div class="old-help-para">To pass arguments you need to set @ARGV explicitly.  Example:<pre>:perl @ARGV = ("foo", "bar");
:perlfile myscript.pl</pre>
Here are some examples					<a name="perl-examples"></a><code class="help-tag-right">perl-examples</code><pre>:perl print "Hello"
:perl $current-&gt;line (uc ($current-&gt;line))
:perl my $str = $current-&gt;buffer-&gt;[42]; print "Set \$str to: $str"</pre>
Note that changes (such as the "use" statements) persist from one command
to the next.</div>
<div class="old-help-para"><h2 class="help-heading">2. The VIM module<span class="help-heading-tags">					<a name="perl-vim"></a><span class="help-tag">perl-vim</span></span></h2></div>
<div class="old-help-para">Perl code gets all of its access to Neovim via the "VIM" module.</div>
<div class="old-help-para">Overview<pre>print "Hello"                                # displays a message
VIM::Msg("Hello")                        # displays a message
VIM::SetOption("ai")                        # sets a vim option
$nbuf = VIM::Buffers()                        # returns the number of buffers
@buflist = VIM::Buffers()                # returns array of all buffers
$mybuf = (VIM::Buffers('a.c'))[0]         # returns buffer object for 'a.c'
@winlist = VIM::Windows()                # returns array of all windows
$nwin = VIM::Windows()                        # returns the number of windows
($success, $v) = VIM::Eval('&amp;path')        # $v: option 'path', $success: 1
($success, $v) = VIM::Eval('&amp;xyz')        # $v: '' and $success: 0
$v = VIM::Eval('expand("&lt;cfile&gt;")')        # expands &lt;cfile&gt;
$curwin-&gt;SetHeight(10)                        # sets the window height
@pos = $curwin-&gt;Cursor()                # returns (row, col) array
@pos = (10, 10)
$curwin-&gt;Cursor(@pos)                        # sets cursor to @pos
$curwin-&gt;Cursor(10,10)                        # sets cursor to row 10 col 10
$mybuf = $curwin-&gt;Buffer()                # returns the buffer object for window
$curbuf-&gt;Name()                                # returns buffer name
$curbuf-&gt;Number()                        # returns buffer number
$curbuf-&gt;Count()                        # returns the number of lines
$l = $curbuf-&gt;Get(10)                        # returns line 10
@l = $curbuf-&gt;Get(1 .. 5)                # returns lines 1 through 5
$curbuf-&gt;Delete(10)                        # deletes line 10
$curbuf-&gt;Delete(10, 20)                        # delete lines 10 through 20
$curbuf-&gt;Append(10, "Line")                # appends a line
$curbuf-&gt;Append(10, "L1", "L2", "L3")        # appends 3 lines
@l = ("L1", "L2", "L3")
$curbuf-&gt;Append(10, @l)                        # appends L1, L2 and L3
$curbuf-&gt;Set(10, "Line")                # replaces line 10
$curbuf-&gt;Set(10, "Line1", "Line2")        # replaces lines 10 and 11
$curbuf-&gt;Set(10, @l)                        # replaces 3 lines</pre>
Module Functions:</div>
<div class="old-help-para">							<a name="perl-Msg"></a><code class="help-tag-right">perl-Msg</code>
VIM::Msg({msg})
			Displays the message <code>{msg}</code>.</div>
<div class="old-help-para">							<a name="perl-SetOption"></a><code class="help-tag-right">perl-SetOption</code>
VIM::SetOption({arg})	Sets a vim option.  <code>{arg}</code> can be any argument that the
			":set" command accepts.  Note that this means that no
			spaces are allowed in the argument!  See <a href="options.html#%3Aset">:set</a>.</div>
<div class="old-help-para">							<a name="perl-Buffers"></a><code class="help-tag-right">perl-Buffers</code>
VIM::Buffers([{bn}...])	With no arguments, returns a list of all the buffers
			in an array context or returns the number of buffers
			in a scalar context.  For a list of buffer names or
			numbers <code>{bn}</code>, returns a list of the buffers matching
			<code>{bn}</code>, using the same rules as Vim's internal
			<a href="builtin.html#bufname()">bufname()</a> function.
			WARNING: the list becomes invalid when <a href="windows.html#%3Abwipe">:bwipe</a> is
			used.</div>
<div class="old-help-para">							<a name="perl-Windows"></a><code class="help-tag-right">perl-Windows</code>
VIM::Windows([{wn}...])	With no arguments, returns a list of all the windows
			in an array context or returns the number of windows
			in a scalar context.  For a list of window numbers
			<code>{wn}</code>, returns a list of the windows with those
			numbers.
			WARNING: the list becomes invalid when a window is
			closed.</div>
<div class="old-help-para">							<a name="perl-DoCommand"></a><code class="help-tag-right">perl-DoCommand</code>
VIM::DoCommand({cmd})	Executes Ex command <code>{cmd}</code>.</div>
<div class="old-help-para">							<a name="perl-Eval"></a><code class="help-tag-right">perl-Eval</code>
VIM::Eval({expr})	Evaluates <code>{expr}</code> and returns (success, value) in list
			context or just value in scalar context.
			success=1 indicates that val contains the value of
			<code>{expr}</code>; success=0 indicates a failure to evaluate
			the expression.  '@x' returns the contents of register
			x, '&amp;x' returns the value of option x, 'x' returns the
			value of internal <a href="eval.html#variables">variables</a> x, and '$x' is equivalent
			to perl's $ENV{x}.  All <a href="eval.html#functions">functions</a> accessible from
			the command-line are valid for <code>{expr}</code>.
			A <a href="eval.html#List">List</a> is turned into a string by joining the items
			and inserting line breaks.</div>
<div class="old-help-para">							<a name="perl-Blob"></a><code class="help-tag-right">perl-Blob</code>
VIM::Blob({expr})	Return Blob literal string 0zXXXX from scalar value.</div>
<div class="old-help-para"><h2 class="help-heading">3. VIM::Buffer objects<span class="help-heading-tags">					<a name="perl-buffer"></a><span class="help-tag">perl-buffer</span></span></h2></div>
<div class="old-help-para">Methods:</div>
<div class="old-help-para">							<a name="perl-Buffer-Name"></a><code class="help-tag-right">perl-Buffer-Name</code>
Name()		Returns the filename for the Buffer.</div>
<div class="old-help-para">							<a name="perl-Buffer-Number"></a><code class="help-tag-right">perl-Buffer-Number</code>
Number()	Returns the number of the Buffer.</div>
<div class="old-help-para">							<a name="perl-Buffer-Count"></a><code class="help-tag-right">perl-Buffer-Count</code>
Count()		Returns the number of lines in the Buffer.</div>
<div class="old-help-para">							<a name="perl-Buffer-Get"></a><code class="help-tag-right">perl-Buffer-Get</code>
Get(<code>{lnum}</code>, <code>{lnum}</code>?, ...)
			Returns a text string of line <code>{lnum}</code> in the Buffer
			for each <code>{lnum}</code> specified.  An array can be passed
			with a list of <code>{lnum}</code>'s specified.</div>
<div class="old-help-para">							<a name="perl-Buffer-Delete"></a><code class="help-tag-right">perl-Buffer-Delete</code>
Delete(<code>{lnum}</code>, <code>{lnum}</code>?)
			Deletes line <code>{lnum}</code> in the Buffer.  With the second
			<code>{lnum}</code>, deletes the range of lines from the first
			<code>{lnum}</code> to the second <code>{lnum}</code>.</div>
<div class="old-help-para">							<a name="perl-Buffer-Append"></a><code class="help-tag-right">perl-Buffer-Append</code>
Append(<code>{lnum}</code>, <code>{line}</code>, <code>{line}</code>?, ...)
			Appends each <code>{line}</code> string after Buffer line <code>{lnum}</code>.
			The list of <code>{line}</code>s can be an array.</div>
<div class="old-help-para">							<a name="perl-Buffer-Set"></a><code class="help-tag-right">perl-Buffer-Set</code>
Set(<code>{lnum}</code>, <code>{line}</code>, <code>{line}</code>?, ...)
			Replaces one or more Buffer lines with specified
			<code>{lines}</code>s, starting at Buffer line <code>{lnum}</code>.  The list of
			<code>{line}</code>s can be an array.  If the arguments are
			invalid, replacement does not occur.</div>
<div class="old-help-para"><h2 class="help-heading">4. VIM::Window objects<span class="help-heading-tags">					<a name="perl-window"></a><span class="help-tag">perl-window</span></span></h2></div>
<div class="old-help-para">Methods:
							<a name="perl-Window-SetHeight"></a><code class="help-tag-right">perl-Window-SetHeight</code>
SetHeight(<code>{height}</code>)
			Sets the Window height to <code>{height}</code>, within screen
			limits.</div>
<div class="old-help-para">							<a name="perl-Window-GetCursor"></a><code class="help-tag-right">perl-Window-GetCursor</code>
Cursor(<code>{row}</code>?, <code>{col}</code>?)
			With no arguments, returns a (row, col) array for the
			current cursor position in the Window.  With <code>{row}</code> and
			<code>{col}</code> arguments, sets the Window's cursor position to
			<code>{row}</code> and <code>{col}</code>.  Note that <code>{col}</code> is numbered from 0,
			Perl-fashion, and thus is one less than the value in
			Vim's ruler.</div>
<div class="old-help-para">Buffer()						<a name="perl-Window-Buffer"></a><code class="help-tag-right">perl-Window-Buffer</code>
			Returns the Buffer object corresponding to the given
			Window.</div>
<div class="old-help-para"><h2 class="help-heading">5. Lexical variables<span class="help-heading-tags">					<a name="perl-globals"></a><span class="help-tag">perl-globals</span></span></h2></div>
<div class="old-help-para">There are multiple lexical variables.</div>
<div class="old-help-para">$curwin			The current Window object.
$curbuf			The current Buffer object.
$vim			A Neovim::Ext object.
$nvim			The same as $nvim.
$current		A Neovim::Ext::Current object.</div>
<div class="old-help-para">These are also available via the "main" package:</div>
<div class="old-help-para">$main::curwin		The current Window object.
$main::curbuf		The current Buffer object.</div>

  
  