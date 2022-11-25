---
title:  Usr_23
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_23.txt"></a><a name="23.1"></a><h1> Usr_23</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_23.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			     Editing other files</div>
<div class="old-help-para">This chapter is about editing files that are not ordinary files.  With Vim you
can edit files that are compressed.  Some files need to be accessed over the
internet.  With some restrictions, binary files can be edited as well.</div>
<div class="old-help-para"><a href="usr_23.html#23.1">23.1</a>  	DOS, Mac and Unix files
<a href="usr_23.html#23.2">23.2</a>  	Files on the internet
<a href="usr_23.html#23.3">23.3</a>  	Binary files
<a href="usr_23.html#23.4">23.4</a>  	Compressed files</div>
<div class="old-help-para">     Next chapter: <a href="usr_24.html#usr_24.txt">usr_24.txt</a>  Inserting quickly
 Previous chapter: <a href="usr_22.html#usr_22.txt">usr_22.txt</a>  Finding the file to edit
Table of contents: <a href="usr_toc.html#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	DOS, Mac and Unix files</h2></div>
<div class="old-help-para">Back in the early days, the old Teletype machines used two characters to
start a new line.  One to move the carriage back to the first position
(carriage return, <code>&lt;CR&gt;</code>), another to move the paper up (line feed, <code>&lt;LF&gt;</code>).
   When computers came out, storage was expensive.  Some people decided that
they did not need two characters for end-of-line.  The Unix people decided
they could use &lt;New Line&gt; or <code>&lt;NL&gt;</code> only for end-of-line.  The Apple people
standardized on <code>&lt;CR&gt;</code>.  The Microsoft Windows folks decided to keep the old
<code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> (we use <code>&lt;NL&gt;</code> for line feed in the help text).
   This means that if you try to move a file from one system to another, you
have line-break problems.  The Vim editor automatically recognizes the
different file formats and handles things properly behind your back.
   The option <a href="options.html#'fileformats'">'fileformats'</a> contains the various formats that will be tried
when a new file is edited.  The following command, for example, tells Vim to
try Unix format first and MS-DOS format second:<pre>:set fileformats=unix,dos</pre>
You will notice the format in the message you get when editing a file.  You
don't see anything if you edit a native file format.  Thus editing a Unix file
on Unix won't result in a remark.  But when you edit a dos file, Vim will
notify you of this:</div>
<div class="old-help-para"><div class="help-column_heading">	"/tmp/test" [dos] 3L, 71C</div></div>
<div class="old-help-para">For a Mac file you would see "[mac]".
   The detected file format is stored in the <a href="options.html#'fileformat'">'fileformat'</a> option.  To see
which format you have, execute the following command:<pre>:set fileformat?</pre>
The three names that Vim uses are:</div>
<div class="old-help-para">	unix		<code>&lt;NL&gt;</code>
	dos		<code>&lt;CR&gt;</code><code>&lt;NL&gt;</code>
	mac		<code>&lt;CR&gt;</code></div>
<div class="old-help-para"><a name="_using-the-mac-format"></a><h3 class="help-heading">USING THE MAC FORMAT</h3></div>
<div class="old-help-para">On Unix, <code>&lt;NL&gt;</code> is used to break a line.  It's not unusual to have a <code>&lt;CR&gt;</code>
character halfway in a line.  Incidentally, this happens quite often in Vi
(and Vim) scripts.
   On the Macintosh, where <code>&lt;CR&gt;</code> is the line break character, it's possible to
have a <code>&lt;NL&gt;</code> character halfway in a line.
   The result is that it's not possible to be 100% sure whether a file
containing both <code>&lt;CR&gt;</code> and <code>&lt;NL&gt;</code> characters is a Mac or a Unix file.  Therefore,
Vim assumes that on Unix you probably won't edit a Mac file, and doesn't check
for this type of file.  To check for this format anyway, add "mac" to
<a href="options.html#'fileformats'">'fileformats'</a>:<pre>:set fileformats+=mac</pre>
Then Vim will take a guess at the file format.  Watch out for situations where
Vim guesses wrong.</div>
<div class="old-help-para"><a name="_overruling-the-format"></a><h3 class="help-heading">OVERRULING THE FORMAT</h3></div>
<div class="old-help-para">If you use the good old Vi and try to edit an MS-DOS format file, you will
find that each line ends with a ^M character.  (^M is <code>&lt;CR&gt;</code>).  The automatic
detection avoids this.  Suppose you do want to edit the file that way?  Then
you need to overrule the format:<pre>:edit ++ff=unix file.txt</pre>
The "++" string is an item that tells Vim that an option name follows, which
overrules the default for this single command.  "++ff" is used for
<a href="options.html#'fileformat'">'fileformat'</a>.  You could also use "++ff=mac" or "++ff=dos".
   This doesn't work for any option, only "++ff" and "++enc" are currently
implemented.  The full names "++fileformat" and "++encoding" also work.</div>
<div class="old-help-para"><a name="_conversion"></a><h3 class="help-heading">CONVERSION</h3></div>
<div class="old-help-para">You can use the <a href="options.html#'fileformat'">'fileformat'</a> option to convert from one file format to
another.  Suppose, for example, that you have an MS-DOS file named README.TXT
that you want to convert to Unix format.  Start by editing the MS-DOS format
file:<pre>vim README.TXT</pre>
Vim will recognize this as a dos format file.  Now change the file format to
Unix:<pre>:set fileformat=unix
:write</pre>
The file is written in Unix format.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="23.2"></a><span class="help-tag">23.2</span>  	Files on the internet</span></h2></div>
<div class="old-help-para">Someone sends you an e-mail message, which refers to a file by its URL.  For
example:</div>
<div class="old-help-para"><div class="help-column_heading">	You can find the information here:</div><div class="help-column_heading">		ftp://ftp.vim.org/pub/vim/README</div></div>
<div class="old-help-para">You could start a program to download the file, save it on your local disk and
then start Vim to edit it.
   There is a much simpler way.  Move the cursor to any character of the URL.
Then use this command:<pre>gf</pre>
With a bit of luck, Vim will figure out which program to use for downloading
the file, download it and edit the copy.  To open the file in a new window use
CTRL-W f.
   If something goes wrong you will get an error message.  It's possible that
the URL is wrong, you don't have permission to read it, the network connection
is down, etc.  Unfortunately, it's hard to tell the cause of the error.  You
might want to try the manual way of downloading the file.</div>
<div class="old-help-para">Accessing files over the internet works with the netrw plugin.  Currently URLs
with these formats are recognized:</div>
<div class="old-help-para">	ftp://		uses ftp
	rcp://		uses rcp
	scp://		uses scp
	<a href="http://">http://</a>		uses wget (reading only)</div>
<div class="old-help-para">Vim doesn't do the communication itself, it relies on the mentioned programs
to be available on your computer.  On most Unix systems "ftp" and "rcp" will
be present.  "scp" and "wget" might need to be installed.</div>
<div class="old-help-para">Vim detects these URLs for each command that starts editing a new file, also
with ":edit" and ":split", for example.  Write commands also work, except for
<a href="http://">http://</a>.</div>
<div class="old-help-para">For more information, also about passwords, see <a href="pi_netrw.html#netrw">netrw</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="23.3"></a><span class="help-tag">23.3</span>  	Binary files</span></h2></div>
<div class="old-help-para">You can edit binary files with Vim.  Vim wasn't really made for this, thus
there are a few restrictions.  But you can read a file, change a character and
write it back, with the result that only that one character was changed and
the file is identical otherwise.
   To make sure that Vim does not use its clever tricks in the wrong way, add
the "-b" argument when starting Vim:<pre>vim -b datafile</pre>
This sets the <a href="options.html#'binary'">'binary'</a> option.  The effect of this is that unexpected side
effects are turned off.  For example, <a href="options.html#'textwidth'">'textwidth'</a> is set to zero, to avoid
automatic formatting of lines.  And files are always read in Unix file format.</div>
<div class="old-help-para">Binary mode can be used to change a message in a program.  Be careful not to
insert or delete any characters, it would stop the program from working.  Use
"R" to enter replace mode.</div>
<div class="old-help-para">Many characters in the file will be unprintable.  To see them in Hex format:<pre>:set display=uhex</pre>
Otherwise, the "ga" command can be used to see the value of the character
under the cursor.  The output, when the cursor is on an <code>&lt;Esc&gt;</code>, looks like
this:</div>
<div class="old-help-para"><div class="help-column_heading">	&lt;^[&gt;  27,  Hex 1b,  Octal 033</div></div>
<div class="old-help-para">There might not be many line breaks in the file.  To get some overview switch
the <a href="options.html#'wrap'">'wrap'</a> option off:<pre>:set nowrap</pre>
<a name="_byte-position"></a><h3 class="help-heading">BYTE POSITION</h3></div>
<div class="old-help-para">To see on which byte you are in the file use this command:<pre>g CTRL-G</pre>
The output is verbose:</div>
<div class="old-help-para"><div class="help-column_heading">    Col 9-16 of 9-16; Line 277 of 330; Word 1806 of 2058; Byte 10580 of 12206</div></div>
<div class="old-help-para">The last two numbers are the byte position in the file and the total number of
bytes.  This takes into account how <a href="options.html#'fileformat'">'fileformat'</a> changes the number of bytes
that a line break uses.
    To move to a specific byte in the file, use the "go" command.  For
example, to move to byte 2345:<pre>2345go</pre>
<a name="_using-xxd"></a><h3 class="help-heading">USING XXD</h3></div>
<div class="old-help-para">A real binary editor shows the text in two ways: as it is and in hex format.
You can do this in Vim by first converting the file with the "xxd" program.
This comes with Vim.
   First edit the file in binary mode:<pre>vim -b datafile</pre>
Now convert the file to a hex dump with xxd:<pre>:%!xxd</pre>
The text will look like this:</div>
<div class="old-help-para"><div class="help-column_heading">	0000000: 1f8b 0808 39d7 173b 0203 7474 002b 4e49  ....9..;..tt.+NI</div><div class="help-column_heading">	0000010: 4b2c 8660 eb9c ecac c462 eb94 345e 2e30  K,.`.....b..4^.0</div><div class="help-column_heading">	0000020: 373b 2731 0b22 0ca6 c1a2 d669 1035 39d9  7;'1.".....i.59.</div></div>
<div class="old-help-para">You can now view and edit the text as you like.  Vim treats the information as
ordinary text.  Changing the hex does not cause the printable character to be
changed, or the other way around.
   Finally convert it back with:
<pre>:%!xxd -r</pre>
Only changes in the hex part are used.  Changes in the printable text part on
the right are ignored.</div>
<div class="old-help-para">See the manual page of xxd for more information.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="23.4"></a><span class="help-tag">23.4</span>  	Compressed files</span></h2></div>
<div class="old-help-para">This is easy: You can edit a compressed file just like any other file.  The
"gzip" plugin takes care of decompressing the file when you edit it.  And
compressing it again when you write it.
   These compression methods are currently supported:</div>
<div class="old-help-para">	.Z	compress
	.gz	gzip
	.bz2	bzip2</div>
<div class="old-help-para">Vim uses the mentioned programs to do the actual compression and
decompression.  You might need to install the programs first.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="usr_24.html#usr_24.txt">usr_24.txt</a>  Inserting quickly</div>
<div class="old-help-para">Copyright: see <a href="usr_01.html#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  