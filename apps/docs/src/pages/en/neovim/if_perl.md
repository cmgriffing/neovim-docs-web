---
title: If Perl
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> if Perl Txt</a> 

VIM REFERENCE MANUAL    by Jacques Germishuys

### <a id="if_perl perl" class="section-title" href="#if_perl perl">The perl Interface to Vim</a>

See [provider-perl](#provider-perl) for more information.

                                      Type [gO](#gO) to see the table of contents.


## <a id="perl-commands" class="section-title" href="#perl-commands">1. Commands</a> 

### <a id=":perl" class="section-title" href="#:perl">Note:</a>
:[range]perl {stmt}
			Execute perl statement {stmt}.  The current package is
			"main".  A simple check if the `:perl` command is
			working: 
```				:perl print "Hello"

:[range]perl << [endmarker]
{script}
{endmarker}
			Execute perl script {script}.
			The {endmarker} after {script} must NOT be preceded by
			any white space.

			If [endmarker] is omitted, it defaults to a dot '.'
			like for the [:append| and |:insert](#:append| and |:insert) commands.

			Useful for including perl code in Vim scripts.
			Requires perl, see [script-here](#script-here).

Example:
	function! MyVimMethod()
	perl << EOF
	sub my_vim_method
	{
		print "Hello World!\n";
	}
	EOF
	endfunction

To see what version of perl you have:

	:perl print $^V
```

### <a id=":perldo" class="section-title" href="#:perldo">Note:</a>
:[range]perldo {cmd}	Execute perl command {cmd} for each line in the[range],
			with $_ being set to the test of each line in turn,
			without a trailing <EOL>. In addition to $_, $line and
			$linenr is also set to the line content and line number
			respectively. Setting $_ will change the text, but note
			that it is not possible to add or delete lines using
			this command.
			The default for [range] is the whole file: "1,$".

Examples:

```	:perldo $_ = reverse($_);
	:perldo $_ = "".$linenr." => $line";

One can use `:perldo` in conjunction with `:perl` to filter a range using
perl. For example:

	:perl << EOF
	sub perl_vim_string_replace
	{
	    my $line = shift;
	    my $needle = $vim->eval('@a');
	    my $replacement = $vim->eval('@b');
	    $line =~ s/$needle/$replacement/g;
	    return $line;
	}
	EOF
	:let @a='somevalue'
	:let @b='newvalue'
	:'<,'>perldo $_ = perl_vim_string_replace($_)
```

### <a id=":perlfile" class="section-title" href="#:perlfile">Note:</a>
:[range]perlfile {file}
			Execute the perl script in {file}.  The whole
			argument is used as a single file name.

Both of these commands do essentially the same thing - they execute a piece of
perl code, with the "current range" set to the given line range.

In the case of :perl, the code to execute is in the command-line.
In the case of :perlfile, the code to execute is the contents of the given file.

perl commands cannot be used in the [sandbox](#sandbox).

To pass arguments you need to set @ARGV explicitly.  Example:

	:perl @ARGV = ("foo", "bar");
	:perlfile myscript.pl

### <a id="perl-examples" class="section-title" href="#perl-examples">Here are some examples</a>

	:perl print "Hello"
	:perl $current->line (uc ($current->line))
	:perl my $str = $current->buffer->[42]; print "Set \$str to: $str"

Note that changes (such as the "use" statements) persist from one command
to the next.


## <a id="perl-vim" class="section-title" href="#perl-vim">2. the VIM Module</a> 

Perl code gets all of its access to Neovim via the "VIM" module.

Overview
	print "Hello"				# displays a message
	VIM::Msg("Hello")			# displays a message
	VIM::SetOption("ai")			# sets a vim option
	$nbuf = VIM::Buffers()			# returns the number of buffers
	@buflist = VIM::Buffers()		# returns array of all buffers
	$mybuf = (VIM::Buffers('a.c'))[0] 	# returns buffer object for 'a.c'
	@winlist = VIM::Windows()		# returns array of all windows
	$nwin = VIM::Windows()			# returns the number of windows
	($success, $v) = VIM::Eval('&path')	# $v: option 'path', $success: 1
	($success, $v) = VIM::Eval('&xyz')	# $v: '' and $success: 0
	$v = VIM::Eval('expand("<cfile>")')	# expands <cfile>
	$curwin->SetHeight(10)			# sets the window height
	@pos = $curwin->Cursor()		# returns (row, col) array
	@pos = (10, 10)
	$curwin->Cursor(@pos)			# sets cursor to @pos
	$curwin->Cursor(10,10)			# sets cursor to row 10 col 10
	$mybuf = $curwin->Buffer()		# returns the buffer object for window
	$curbuf->Name()				# returns buffer name
	$curbuf->Number()			# returns buffer number
	$curbuf->Count()			# returns the number of lines
	$l = $curbuf->Get(10)			# returns line 10
	@l = $curbuf->Get(1 .. 5)		# returns lines 1 through 5
	$curbuf->Delete(10)			# deletes line 10
	$curbuf->Delete(10, 20)			# delete lines 10 through 20
	$curbuf->Append(10, "Line")		# appends a line
	$curbuf->Append(10, "L1", "L2", "L3")	# appends 3 lines
	@l = ("L1", "L2", "L3")
	$curbuf->Append(10, @l)			# appends L1, L2 and L3
	$curbuf->Set(10, "Line")		# replaces line 10
	$curbuf->Set(10, "Line1", "Line2")	# replaces lines 10 and 11
	$curbuf->Set(10, @l)			# replaces 3 lines

Module Functions:

### <a id="perl-Msg" class="section-title" href="#perl-Msg">Note:</a>
VIM::Msg({msg})
			Displays the message {msg}.

### <a id="perl-SetOption" class="section-title" href="#perl-SetOption">Note:</a>
VIM::SetOption({arg})	Sets a vim option.  {arg} can be any argument that the
			":set" command accepts.  Note that this means that no
			spaces are allowed in the argument!  See [:set](#:set).

### <a id="perl-Buffers" class="section-title" href="#perl-Buffers">Note:</a>
VIM::Buffers([{bn}...])	With no arguments, returns a list of all the buffers
			in an array context or returns the number of buffers
			in a scalar context.  For a list of buffer names or
			numbers {bn}, returns a list of the buffers matching
			{bn}, using the same rules as Vim's internal
			[bufname()](#bufname()) function.
			WARNING: the list becomes invalid when [:bwipe](#:bwipe) is
			used.

### <a id="perl-Windows" class="section-title" href="#perl-Windows">Note:</a>
VIM::Windows([{wn}...])	With no arguments, returns a list of all the windows
			in an array context or returns the number of windows
			in a scalar context.  For a list of window numbers
			{wn}, returns a list of the windows with those
			numbers.
			WARNING: the list becomes invalid when a window is
			closed.

### <a id="perl-DoCommand" class="section-title" href="#perl-DoCommand">Note:</a>
VIM::DoCommand({cmd})	Executes Ex command {cmd}.

### <a id="perl-Eval" class="section-title" href="#perl-Eval">Note:</a>
VIM::Eval({expr})	Evaluates {expr} and returns (success, value) in list
			context or just value in scalar context.
			success=1 indicates that val contains the value of
			{expr}; success=0 indicates a failure to evaluate
			the expression.  '@x' returns the contents of register
			x, '&x' returns the value of option x, 'x' returns the
			value of internal [variables](#variables) x, and '$x' is equivalent
			to perl's $ENV{x}.  All [functions](#functions) accessible from
			the command-line are valid for {expr}.
			A [List](#List) is turned into a string by joining the items
			and inserting line breaks.

### <a id="perl-Blob" class="section-title" href="#perl-Blob">Note:</a>
VIM::Blob({expr})	Return Blob literal string 0zXXXX from scalar value.


## <a id="perl-buffer" class="section-title" href="#perl-buffer">3. VIM::Buffer Objects</a> 

Methods:

### <a id="perl-Buffer-Name" class="section-title" href="#perl-Buffer-Name">Note:</a>
Name()		Returns the filename for the Buffer.

### <a id="perl-Buffer-Number" class="section-title" href="#perl-Buffer-Number">Note:</a>
Number()	Returns the number of the Buffer.

### <a id="perl-Buffer-Count" class="section-title" href="#perl-Buffer-Count">Note:</a>
Count()		Returns the number of lines in the Buffer.

### <a id="perl-Buffer-Get" class="section-title" href="#perl-Buffer-Get">Note:</a>
Get({lnum}, {lnum}?, ...)
			Returns a text string of line {lnum} in the Buffer
			for each {lnum} specified.  An array can be passed
			with a list of {lnum}'s specified.

### <a id="perl-Buffer-Delete" class="section-title" href="#perl-Buffer-Delete">Note:</a>
Delete({lnum}, {lnum}?)
			Deletes line {lnum} in the Buffer.  With the second
			{lnum}, deletes the range of lines from the first
			{lnum} to the second {lnum}.

### <a id="perl-Buffer-Append" class="section-title" href="#perl-Buffer-Append">Note:</a>
Append({lnum}, {line}, {line}?, ...)
			Appends each {line} string after Buffer line {lnum}.
			The list of {line}s can be an array.

### <a id="perl-Buffer-Set" class="section-title" href="#perl-Buffer-Set">Note:</a>
Set({lnum}, {line}, {line}?, ...)
			Replaces one or more Buffer lines with specified
			{lines}s, starting at Buffer line {lnum}.  The list of
			{line}s can be an array.  If the arguments are
			invalid, replacement does not occur.


## <a id="perl-window" class="section-title" href="#perl-window">4. VIM::Window Objects</a> 

Methods:
### <a id="perl-Window-SetHeight" class="section-title" href="#perl-Window-SetHeight">Note:</a>
SetHeight({height})
			Sets the Window height to {height}, within screen
			limits.

### <a id="perl-Window-GetCursor" class="section-title" href="#perl-Window-GetCursor">Note:</a>
Cursor({row}?, {col}?)
			With no arguments, returns a (row, col) array for the
			current cursor position in the Window.  With {row} and
			{col} arguments, sets the Window's cursor position to
			{row} and {col}.  Note that {col} is numbered from 0,
			Perl-fashion, and thus is one less than the value in
			Vim's ruler.

### <a id="perl-Window-Buffer" class="section-title" href="#perl-Window-Buffer">Buffer()</a>
			Returns the Buffer object corresponding to the given
			Window.


## <a id="perl-globals" class="section-title" href="#perl-globals">5. Lexical Variables</a> 

There are multiple lexical variables.

$curwin			The current Window object.
$curbuf			The current Buffer object.
$vim			A Neovim::Ext object.
$nvim			The same as $nvim.
$current		A Neovim::Ext::Current object.

These are also available via the "main" package:

$main::curwin		The current Window object.
$main::curbuf		The current Buffer object.


## <a id="" class="section-title" href="#">Vim Tw 78 Ts 8 Noet Ft Help Norl</a> 



