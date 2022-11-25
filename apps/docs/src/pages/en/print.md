---
title:  Print
layout: ../../layouts/MainLayout.astro
---

  <a name="print.txt"></a><a name="printing"></a><h1> Print</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/print.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Printing</div>
<div class="old-help-para"><h2 class="help-heading">1. Introduction<span class="help-heading-tags">						<a name="print-intro"></a><span class="help-tag">print-intro</span></span></h2></div>
<div class="old-help-para">On MS-Windows Vim can print your text on any installed printer.  On other
systems a PostScript file is produced.  This can be directly sent to a
PostScript printer.  For other printers a program like ghostscript needs to be
used.</div>
<div class="old-help-para">Note: If you have problems printing with <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a>, an alternative is to use
<a href="/neovim-docs-web/en/syntax#%3ATOhtml">:TOhtml</a> and print the resulting html file from a browser.</div>
<div class="old-help-para">					<a name="%3Aha"></a><code class="help-tag-right">:ha</code> <a name="%3Ahardcopy"></a><code class="help-tag">:hardcopy</code> <a name="E237"></a><code class="help-tag">E237</code> <a name="E238"></a><code class="help-tag">E238</code> <a name="E324"></a><code class="help-tag">E324</code>
:[range]ha[rdcopy][!] [arguments]
			Send [range] lines (default whole file) to the
			printer.</div>
<div class="old-help-para">			On MS-Windows a dialog is displayed to allow selection
			of printer, paper size etc.  To skip the dialog, use
			the [!].  In this case the printer defined by
			<a href="/neovim-docs-web/en/options#'printdevice'">'printdevice'</a> is used, or, if <a href="/neovim-docs-web/en/options#'printdevice'">'printdevice'</a> is empty,
			the system default printer.</div>
<div class="old-help-para">			For systems other than MS-Windows, PostScript is
			written in a temp file and <a href="/neovim-docs-web/en/options#'printexpr'">'printexpr'</a> is used to
			actually print it.  Then [arguments] can be used by
			<a href="/neovim-docs-web/en/options#'printexpr'">'printexpr'</a> through <a href="/neovim-docs-web/en/eval#v%3Acmdarg">v:cmdarg</a>.  Otherwise [arguments]
			is ignored.  <a href="/neovim-docs-web/en/options#'printoptions'">'printoptions'</a> can be used to specify
			paper size, duplex, etc.
			Note: If you want PDF, there are tools such as
			"ps2pdf" that can convert the PostScript to PDF.</div>
<div class="old-help-para">:[range]ha[rdcopy][!] &gt;<code>{filename}</code>
			As above, but write the resulting PostScript in file
			<code>{filename}</code>.
			Things like "%" are expanded <a href="/neovim-docs-web/en/cmdline#cmdline-special">cmdline-special</a>
			Careful: An existing file is silently overwritten.
			On MS-Windows use the "print to file" feature of the
			printer driver.</div>
<div class="old-help-para">Progress is displayed during printing as a page number and a percentage.  To
abort printing use the interrupt key (<code>CTRL-C</code> or, on MS-systems, <code>CTRL-Break</code>).</div>
<div class="old-help-para">Printer output is controlled by the <a href="/neovim-docs-web/en/options#'printfont'">'printfont'</a> and <a href="/neovim-docs-web/en/options#'printoptions'">'printoptions'</a> options.
<a href="/neovim-docs-web/en/options#'printheader'">'printheader'</a> specifies the format of a page header.</div>
<div class="old-help-para">The printed file is always limited to the selected margins, irrespective of
the current window's <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> or <a href="/neovim-docs-web/en/options#'linebreak'">'linebreak'</a> settings.  The "wrap" item in
<a href="/neovim-docs-web/en/options#'printoptions'">'printoptions'</a> can be used to switch wrapping off.
The current highlighting colors are used in the printout, with the following
considerations:
1) The normal background is always rendered as white (i.e. blank paper).
2) White text or the default foreground is rendered as black, so that it shows
   up!
3) If <a href="/neovim-docs-web/en/options#'background'">'background'</a> is "dark", then the colours are darkened to compensate for
   the fact that otherwise they would be too bright to show up clearly on
   white paper.</div>
<div class="old-help-para"><h2 class="help-heading">2. Print options<span class="help-heading-tags">					<a name="print-options"></a><span class="help-tag">print-options</span></span></h2></div>
<div class="old-help-para">Here are the details for the options that change the way printing is done.
For generic info about setting options see <a href="/neovim-docs-web/en/options#options.txt">options.txt</a>.</div>
<div class="old-help-para">							<a name="pdev-option"></a><code class="help-tag-right">pdev-option</code>
<a href="/neovim-docs-web/en/options#'printdevice'">'printdevice'</a> <a href="/neovim-docs-web/en/options#'pdev'">'pdev'</a>	string	(default empty)
			global
This defines the name of the printer to be used when the <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a> command
is issued with a bang (!) to skip the printer selection dialog.  On Win32, it
should be the printer name exactly as it appears in the standard printer
dialog.
If the option is empty, then vim will use the system default printer for
":hardcopy!"</div>
<div class="old-help-para">							<a name="penc-option"></a><code class="help-tag-right">penc-option</code> <a name="E620"></a><code class="help-tag">E620</code>
<a href="/neovim-docs-web/en/options#'printencoding'">'printencoding'</a> <a href="/neovim-docs-web/en/options#'penc'">'penc'</a>	String	(default empty, except for:
					Windows: cp1252,
					Macintosh: mac-roman,
					HPUX: hp-roman8)
			global
Sets the character encoding used when printing.  This option tells Vim which
print character encoding file from the "print" directory in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> to
use.</div>
<div class="old-help-para">This option will accept any value from <a href="/neovim-docs-web/en/mbyte#encoding-names">encoding-names</a>.  Any recognized names
are converted to Vim standard names - see <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> for more details.  Names
not recognized by Vim will just be converted to lower case and underscores
replaced with '-' signs.</div>
<div class="old-help-para">If <a href="/neovim-docs-web/en/options#'printencoding'">'printencoding'</a> is empty or Vim cannot find the file then it will use
<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> (if it is set an 8-bit encoding) to find the print character
encoding file.  If Vim is unable to find a character encoding file then it
will use the "latin1" print character encoding file.</div>
<div class="old-help-para">When <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is set to a multibyte encoding, Vim will try to convert
characters to the printing encoding for printing (if <a href="/neovim-docs-web/en/options#'printencoding'">'printencoding'</a> is empty
then the conversion will be to latin1). If no conversion is possible then
printing will fail.  Any characters that cannot be converted will be replaced
with upside down question marks.</div>
<div class="old-help-para">Two print character encoding files are provided to support default Mac and
HPUX character encodings and are used by default on these platforms. Code page
1252 print character encoding is used by default on the Windows platform.</div>
<div class="old-help-para">							<a name="pexpr-option"></a><code class="help-tag-right">pexpr-option</code>
<a href="/neovim-docs-web/en/options#'printexpr'">'printexpr'</a> <a href="/neovim-docs-web/en/options#'pexpr'">'pexpr'</a>	String	(default: see below)
			global
Expression that is evaluated to print the PostScript produced with
<a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a>.
The file name to be printed is in <a href="/neovim-docs-web/en/eval#v%3Afname_in">v:fname_in</a>.
The arguments to the ":hardcopy" command are in <a href="/neovim-docs-web/en/eval#v%3Acmdarg">v:cmdarg</a>.
The expression must take care of deleting the file after printing it.
When there is an error, the expression must return a non-zero number.
If there is no error, return zero or an empty string.
The default for non MS-Windows systems is to simply use "lpr" to print the
file:<pre>system(['lpr']
       + (empty(&amp;printdevice)?[]:['-P', &amp;printdevice])
       + [v:fname_in])
.. delete(v:fname_in)
+ v:shell_error</pre>
On MS-Dos and MS-Windows machines the default is to copy the file to the
currently specified printdevice:<pre>system(['copy', v:fname_in, empty(&amp;printdevice)?'LPT1':&amp;printdevice])
.. delete(v:fname_in)</pre>
If you change this option, using a function is an easy way to avoid having to
escape all the spaces.  Example:<pre>:set printexpr=PrintFile(v:fname_in)
:function PrintFile(fname)
:  call system("ghostview " .. a:fname)
:  call delete(a:fname)
:  return v:shell_error
:endfunc</pre>
Be aware that some print programs return control before they have read the
file.  If you delete the file too soon it will not be printed.  These programs
usually offer an option to have them remove the file when printing is done.
							<a name="E365"></a><code class="help-tag-right">E365</code>
If evaluating the expression fails or it results in a non-zero number, you get
an error message.  In that case Vim will delete the file.  In the default
value for non-MS-Windows a trick is used: Adding "v:shell_error" will result
in a non-zero number when the system() call fails.</div>
<div class="old-help-para">This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for security
reasons.</div>
<div class="old-help-para">							<a name="pfn-option"></a><code class="help-tag-right">pfn-option</code> <a name="E613"></a><code class="help-tag">E613</code>
<a href="/neovim-docs-web/en/options#'printfont'">'printfont'</a> <a href="/neovim-docs-web/en/options#'pfn'">'pfn'</a>	string	(default "courier")
			global
This is the name of the font that will be used for the <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a> command's
output.  It has the same format as the <a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a> option, except that only one
font may be named, and the special "guifont=*" syntax is not available.</div>
<div class="old-help-para">In the Win32 GUI version this specifies a font name with its extra attributes,
as with the <a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a> option.</div>
<div class="old-help-para">For other systems, only ":h11" is recognized, where "11" is the point size of
the font.  When omitted, the point size is 10.</div>
<div class="old-help-para">							<a name="pheader-option"></a><code class="help-tag-right">pheader-option</code>
<a href="/neovim-docs-web/en/options#'printheader'">'printheader'</a> <a href="/neovim-docs-web/en/options#'pheader'">'pheader'</a>  string  (default "%&lt;%f%h%m%=Page %N")
			 global
This defines the format of the header produced in <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a> output.  The
option is defined in the same way as the <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a> option.  The same simple
header is used when this option is empty.</div>
<div class="old-help-para">							<a name="pmbcs-option"></a><code class="help-tag-right">pmbcs-option</code>
<a href="/neovim-docs-web/en/options#'printmbcharset'">'printmbcharset'</a> <a href="/neovim-docs-web/en/options#'pmbcs'">'pmbcs'</a>  string (default "")
			  global
Sets the CJK character set to be used when generating CJK output from
<a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a>.  The following predefined values are currently recognised by Vim:</div>
<div class="old-help-para"><div class="help-column_heading">		Value		Description</div>  Chinese	GB_2312-80
  (Simplified)	GBT_12345-90
		MAC		Apple Mac Simplified Chinese
		GBT-90_MAC	GB/T 12345-90 Apple Mac Simplified
				  Chinese
		GBK		GBK (GB 13000.1-93)
		ISO10646	ISO 10646-1:1993</div>
<div class="old-help-para">  Chinese	CNS_1993	CNS 11643-1993, Planes 1 &amp; 2
  (Traditional)	BIG5
		ETEN		Big5 with ETen extensions
		ISO10646	ISO 10646-1:1993</div>
<div class="old-help-para">  Japanese	JIS_C_1978
		JIS_X_1983
		JIS_X_1990
		MSWINDOWS	Win3.1/95J (JIS X 1997 + NEC +
				  IBM extensions)
		KANJITALK6	Apple Mac KanjiTalk V6.x
		KANJITALK7	Apple Mac KanjiTalk V7.x</div>
<div class="old-help-para">  Korean	KS_X_1992
		MAC		Apple Macintosh Korean
		MSWINDOWS	KS X 1992 with MS extensions
		ISO10646	ISO 10646-1:1993</div>
<div class="old-help-para">Only certain combinations of the above values and <a href="/neovim-docs-web/en/options#'printencoding'">'printencoding'</a> are
possible.  The following tables show the valid combinations:</div>
<div class="old-help-para"><div class="help-column_heading">				euc-cn	 gbk	ucs-2	utf-8</div>  Chinese	GB_2312-80	   x
  (Simplified)	GBT_12345-90	   x
		MAC		   x
		GBT-90_MAC	   x
		GBK			   x
		ISO10646			  x	  x</div>
<div class="old-help-para"><div class="help-column_heading">				euc-tw	 big5	ucs-2	utf-8</div>  Chinese	CNS_1993	   x
  (Traditional)	BIG5			   x
		ETEN			   x
		ISO10646			  x	  x</div>
<div class="old-help-para"><div class="help-column_heading">				euc-jp	 sjis	ucs-2	utf-8</div>  Japanese	JIS_C_1978	   x	   x
		JIS_X_1983	   x	   x
		JIS_X_1990	   x		  x	  x
		MSWINDOWS		   x
		KANJITALK6		   x
		KANJITALK7		   x</div>
<div class="old-help-para"><div class="help-column_heading">				euc-kr	 cp949	ucs-2	utf-8</div>  Korean	KS_X_1992	   x
		MAC		   x
		MSWINDOWS		   x
		ISO10646			  x	  x</div>
<div class="old-help-para">To set up the correct encoding and character set for printing some
Japanese text you would do the following;<pre>:set printencoding=euc-jp
:set printmbcharset=JIS_X_1983</pre>
If <a href="/neovim-docs-web/en/options#'printmbcharset'">'printmbcharset'</a> is not one of the above values then it is assumed to
specify a custom multibyte character set and no check will be made that it is
compatible with the value for <a href="/neovim-docs-web/en/options#'printencoding'">'printencoding'</a>.  Vim will look for a file
defining the character set in the "print" directory in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.</div>
<div class="old-help-para">							<a name="pmbfn-option"></a><code class="help-tag-right">pmbfn-option</code>
<a href="/neovim-docs-web/en/options#'printmbfont'">'printmbfont'</a> <a href="/neovim-docs-web/en/options#'pmbfn'">'pmbfn'</a>	string (default "")
			global
This is a comma-separated list of fields for font names to be used when
generating CJK output from <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a>.  Each font name has to be preceded
with a letter indicating the style the font is to be used for as follows:</div>
<div class="old-help-para">  r:{font-name}		font to use for normal characters
  b:{font-name}		font to use for bold characters
  i:{font-name}		font to use for italic characters
  o:{font-name}		font to use for bold-italic characters</div>
<div class="old-help-para">A field with the r: prefix must be specified when doing CJK printing.  The
other fontname specifiers are optional.  If a specifier is missing then
another font will be used as follows:</div>
<div class="old-help-para">  if b: is missing, then use r:
  if i: is missing, then use r:
  if o: is missing, then use b:</div>
<div class="old-help-para">Some CJK fonts do not contain characters for codes in the ASCII code range.
Also, some characters in the CJK ASCII code ranges differ in a few code points
from traditional ASCII characters.  There are two additional fields to control
printing of characters in the ASCII code range.</div>
<div class="old-help-para">  c:yes			Use Courier font for characters in the ASCII
  c:no (default)	code range.</div>
<div class="old-help-para">  a:yes			Use ASCII character set for codes in the ASCII
  a:no (default)	code range.</div>
<div class="old-help-para">The following is an example of specifying two multibyte fonts, one for normal
and italic printing and one for bold and bold-italic printing, and using
Courier to print codes in the ASCII code range but using the national
character set:<pre>:set printmbfont=r:WadaMin-Regular,b:WadaMin-Bold,c:yes</pre></div>
<div class="old-help-para">							<a name="popt-option"></a><code class="help-tag-right">popt-option</code>
<a href="/neovim-docs-web/en/options#'printoptions'">'printoptions'</a> <a href="/neovim-docs-web/en/options#'popt'">'popt'</a>	string (default "")
			global
This is a comma-separated list of items that control the format of the output
of <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a>:</div>
<div class="old-help-para">  left:{spec}		left margin (default: 10pc)
  right:{spec}		right margin (default: 5pc)
  top:{spec}		top margin (default: 5pc)
  bottom:{spec}		bottom margin (default: 5pc)
			<code>{spec}</code> is a number followed by "in" for inches, "pt"
			for points (1 point is 1/72 of an inch), "mm" for
			millimeters or "pc" for a percentage of the media
			size.
			Weird example:
			    left:2in,top:30pt,right:16mm,bottom:3pc
			If the unit is not recognized there is no error and
			the default value is used.</div>
<div class="old-help-para">  header:{nr}		Number of lines to reserve for the header.
			Only the first line is actually filled, thus when <code>{nr}</code>
			is 2 there is one empty line.  The header is formatted
			according to <a href="/neovim-docs-web/en/options#'printheader'">'printheader'</a>.
  header:0		Do not print a header.
  header:2  (default)	Use two lines for the header</div>
<div class="old-help-para">  syntax:n		Do not use syntax highlighting.  This is faster and
			thus useful when printing large files.
  syntax:y		Do syntax highlighting.
  syntax:a  (default)	Use syntax highlighting if the printer appears to be
			able to print color or grey.</div>
<div class="old-help-para">  number:y		Include line numbers in the printed output.
  number:n  (default)	No line numbers.</div>
<div class="old-help-para">  wrap:y    (default)	Wrap long lines.
  wrap:n		Truncate long lines.</div>
<div class="old-help-para">  duplex:off		Print on one side.
  duplex:long (default)	Print on both sides (when possible), bind on long
			side.
  duplex:short		Print on both sides (when possible), bind on short
			side.</div>
<div class="old-help-para">  collate:y  (default)	Collating: 1 2 3, 1 2 3, 1 2 3
  collate:n		No collating: 1 1 1, 2 2 2, 3 3 3</div>
<div class="old-help-para">  jobsplit:n (default)	Do all copies in one print job
  jobsplit:y		Do each copy as a separate print job.  Useful when
			doing N-up postprocessing.</div>
<div class="old-help-para">  portrait:y (default)	Orientation is portrait.
  portrait:n		Orientation is landscape.
						<a name="a4"></a><code class="help-tag-right">a4</code> <a name="letter"></a><code class="help-tag">letter</code>
  paper:A4   (default)	Paper size: A4
  paper:{name}		Paper size from this table:
<div class="help-column_heading">			<code>{name}</code>	    size in cm	     size in inch</div>			10x14	    25.4  x 35.57    10    x 14
			A3	    29.7  x 42	     11.69 x 16.54
			A4	    21	  x 29.7      8.27 x 11.69
			A5	    14.8  x 21	      5.83 x  8.27
			B4	    25	  x 35.3     10.12 x 14.33
			B5	    17.6  x 25	      7.17 x 10.12
			executive   18.42 x 26.67     7.25 x 10.5
			folio	    21	  x 33	      8.27 x 13
			ledger	    43.13 x 27.96    17    x 11
			legal	    21.59 x 35.57     8.5  x 14
			letter	    21.59 x 27.96     8.5  x 11
			quarto	    21.59 x 27.5      8.5  x 10.83
			statement   13.97 x 21.59     5.5  x  8.5
			tabloid     27.96 x 43.13    11    x 17</div>
<div class="old-help-para">  formfeed:n (default)	Treat form feed characters (0x0c) as a normal print
			character.
  formfeed:y		When a form feed character is encountered, continue
			printing of the current line at the beginning of the
			first line on a new page.</div>
<div class="old-help-para">The item indicated with (default) is used when the item is not present.  The
values are not always used, especially when using a dialog to select the
printer and options.
Example:<pre>:set printoptions=paper:letter,duplex:off</pre>
<h2 class="help-heading">3. PostScript Printing<span class="help-heading-tags">					<a name="postscript-printing"></a><span class="help-tag">postscript-printing</span></span></h2>						<a name="E455"></a><code class="help-tag-right">E455</code> <a name="E456"></a><code class="help-tag">E456</code> <a name="E457"></a><code class="help-tag">E457</code> <a name="E624"></a><code class="help-tag">E624</code>
Provided you have enough disk space there should be no problems generating a
PostScript file.  You need to have the runtime files correctly installed (if
you can find the help files, they probably are).</div>
<div class="old-help-para">There are currently a number of limitations with PostScript printing:</div>
<div class="old-help-para"><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'printfont'">'printfont'</a> - The font name is ignored (the Courier family is always used -
  it should be available on all PostScript printers) but the font size is
  used.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'printoptions'">'printoptions'</a> - The duplex setting is used when generating PostScript
  output, but it is up to the printer to take notice of the setting.  If the
  printer does not support duplex printing then it should be silently ignored.
  Some printers, however, don't print at all.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> 8-bit support - While a number of 8-bit print character encodings are
  supported it is possible that some characters will not print.  Whether a
  character will print depends on the font in the printer knowing the
  character.  Missing characters will be replaced with an upside down question
  mark, or a space if that character is also not known by the font.  It may be
  possible to get all the characters in an encoding to print by installing a
  new version of the Courier font family.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Multi-byte support - Currently Vim will try to convert multibyte characters
  to the 8-bit encoding specified by <a href="/neovim-docs-web/en/options#'printencoding'">'printencoding'</a> (or latin1 if it is
  empty).  Any characters that are not successfully converted are shown as
  unknown characters.  Printing will fail if Vim cannot convert the multibyte
  to the 8-bit encoding.
</div></div>
<div class="old-help-para"><h2 class="help-heading">4. Custom 8-bit Print Character Encodings<span class="help-heading-tags">	<a name="postscript-print-encoding"></a><span class="help-tag">postscript-print-encoding</span></span></h2>								<a name="E618"></a><code class="help-tag-right">E618</code> <a name="E619"></a><code class="help-tag">E619</code>
To use your own print character encoding when printing 8-bit character data
you need to define your own PostScript font encoding vector.  Details on how
to define a font encoding vector is beyond the scope of this help file, but
you can find details in the PostScript Language Reference Manual, 3rd Edition,
published by Addison-Wesley and available in PDF form at
<a href="https://www.adobe.com/">https://www.adobe.com/</a>.  The following describes what you need to do for Vim to
locate and use your print character encoding.</div>
<div class="old-help-para">i.   Decide on a unique name for your encoding vector, one that does not clash
     with any of the recognized or standard encoding names that Vim uses (see
     <a href="/neovim-docs-web/en/mbyte#encoding-names">encoding-names</a> for a list), and that no one else is likely to use.
ii.  Copy $VIMRUNTIME/print/latin1.ps to the print subdirectory in your
     <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> and rename it with your unique name.
iii. Edit your renamed copy of latin1.ps, replacing all occurrences of latin1
     with your unique name (don't forget the line starting %%Title:), and
     modify the array of glyph names to define your new encoding vector.  The
     array must have exactly 256 entries or you will not be able to print!
iv.  Within Vim, set <a href="/neovim-docs-web/en/options#'printencoding'">'printencoding'</a> to your unique encoding name and then
     print your file.  Vim will now use your custom print character encoding.</div>
<div class="old-help-para">Vim will report an error with the resource file if you change the order or
content of the first 3 lines, other than the name of the encoding on the line
starting %%Title: or the version number on the line starting %%Version:.</div>
<div class="old-help-para">[Technical explanation for those that know PostScript - Vim looks for a file
with the same name as the encoding it will use when printing.  The file
defines a new PostScript Encoding resource called /VIM-name, where name is the
print character encoding Vim will use.]</div>
<div class="old-help-para"><h2 class="help-heading">5. PostScript CJK Printing<span class="help-heading-tags">			<a name="postscript-cjk-printing"></a><span class="help-tag">postscript-cjk-printing</span></span></h2>							<a name="E673"></a><code class="help-tag-right">E673</code> <a name="E674"></a><code class="help-tag">E674</code> <a name="E675"></a><code class="help-tag">E675</code></div>
<div class="old-help-para">Vim supports printing of Chinese, Japanese, and Korean files.  Setting up Vim
to correctly print CJK files requires setting up a few more options.</div>
<div class="old-help-para">Each of these countries has many standard character sets and encodings which
require that both be specified when printing.  In addition, CJK fonts normally
do not have the concept of italic glyphs and use different weight or stroke
style to achieve emphasis when printing.  This in turn requires a different
approach to specifying fonts to use when printing.</div>
<div class="old-help-para">The encoding and character set are specified with the <a href="/neovim-docs-web/en/options#'printencoding'">'printencoding'</a> and
<a href="/neovim-docs-web/en/options#'printmbcharset'">'printmbcharset'</a> options.  If <a href="/neovim-docs-web/en/options#'printencoding'">'printencoding'</a> is not specified then <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>
is used as normal.  If <a href="/neovim-docs-web/en/options#'printencoding'">'printencoding'</a> is specified then characters will be
translated to this encoding for printing.  You should ensure that the encoding
is compatible with the character set needed for the file contents or some
characters may not appear when printed.</div>
<div class="old-help-para">The fonts to use for CJK printing are specified with <a href="/neovim-docs-web/en/options#'printmbfont'">'printmbfont'</a>.  This
option allows you to specify different fonts to use when printing characters
which are syntax highlighted with the font styles normal, italic, bold and
bold-italic.</div>
<div class="old-help-para">Please read your printer documentation on how to install new fonts.</div>
<div class="old-help-para">CJK fonts can be large containing several thousand glyphs, and it is not
uncommon to find that they only contain a subset of a national standard.  It
is not unusual to find the fonts to not include characters for codes in the
ASCII code range.  If you find half-width Roman characters are not appearing
in your printout then you should configure Vim to use the Courier font the
half-width ASCII characters with <a href="/neovim-docs-web/en/options#'printmbfont'">'printmbfont'</a>.  If your font does not include
other characters then you will need to find another font that does.</div>
<div class="old-help-para">Another issue with ASCII characters, is that the various national character
sets specify a couple of different glyphs in the ASCII code range.  If you
print ASCII text using the national character set you may see some unexpected
characters.  If you want true ASCII code printing then you need to configure
Vim to output ASCII characters for the ASCII code range with <a href="/neovim-docs-web/en/options#'printmbfont'">'printmbfont'</a>.</div>
<div class="old-help-para">It is possible to define your own multibyte character set although this
should not be attempted lightly.  A discussion on the process if beyond the
scope of these help files.  You can find details on CMap (character map) files
in the document 'Adobe CMap and CIDFont Files Specification, Version 1.0',
available from <a href="https://www.adobe.com">https://www.adobe.com</a> as a PDF file.</div>
<div class="old-help-para"><h2 class="help-heading">6. PostScript Printing Troubleshooting<span class="help-heading-tags">		<a name="postscript-print-trouble"></a><span class="help-tag">postscript-print-trouble</span></span></h2>									<a name="E621"></a><code class="help-tag-right">E621</code>
Usually the only sign of a problem when printing with PostScript is that your
printout does not appear.  If you are lucky you may get a printed page that
tells you the PostScript operator that generated the error that prevented the
print job completing.</div>
<div class="old-help-para">There are a number of possible causes as to why the printing may have failed:</div>
<div class="old-help-para"><div class="help-li" style=""> Wrong version of the prolog resource file.  The prolog resource file
  contains some PostScript that Vim needs to be able to print.  Each version
  of Vim needs one particular version.  Make sure you have correctly installed
  the runtime files, and don't have any old versions of a file called prolog
  in the print directory in your <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> directory.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Paper size.  Some PostScript printers will abort printing a file if they do
  not support the requested paper size.  By default Vim uses A4 paper.  Find
  out what size paper your printer normally uses and set the appropriate paper
  size with <a href="/neovim-docs-web/en/options#'printoptions'">'printoptions'</a>.  If you cannot find the name of the paper used,
  measure a sheet and compare it with the table of supported paper sizes listed
  for <a href="/neovim-docs-web/en/options#'printoptions'">'printoptions'</a>, using the paper that is closest in both width AND height.
  Note: The dimensions of actual paper may vary slightly from the ones listed.
  If there is no paper listed close enough, then you may want to try psresize
  from PSUtils, discussed below.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Two-sided printing (duplex).  Normally a PostScript printer that does not
  support two-sided printing will ignore any request to do it.  However, some
  printers may abort the job altogether.  Try printing with duplex turned off.
  Note: Duplex prints can be achieved manually using PS utils - see below.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Collated printing.  As with Duplex printing, most PostScript printers that
  do not support collating printouts will ignore a request to do so.  Some may
  not.  Try printing with collation turned off.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Syntax highlighting.  Some print management code may prevent the generated
  PostScript file from being printed on a black and white printer when syntax
  highlighting is turned on, even if solid black is the only color used.  Try
  printing with syntax highlighting turned off.
</div></div>
<div class="old-help-para">A safe printoptions setting to try is:<pre>:set printoptions=paper:A4,duplex:off,collate:n,syntax:n</pre>
Replace "A4" with the paper size that best matches your printer paper.</div>
<div class="old-help-para"><h2 class="help-heading">7. PostScript Utilities<span class="help-heading-tags">				<a name="postscript-print-util"></a><span class="help-tag">postscript-print-util</span></span></h2></div>
<div class="old-help-para">7.1 Ghostscript</div>
<div class="old-help-para">Ghostscript is a PostScript and PDF interpreter that can be used to display
and print on non-PostScript printers PostScript and PDF files.  It can also
generate PDF files from PostScript.</div>
<div class="old-help-para">Ghostscript will run on a wide variety of platforms. Information on
Ghostscript can be found at:</div>
<div class="old-help-para">  <a href="http://www.ghostscript.com/">http://www.ghostscript.com/</a></div>
<div class="old-help-para">Support for a number of non PostScript printers is provided in the
distribution as standard, but if you cannot find support for your printer
check the Ghostscript site for other printers not included by default.</div>
<div class="old-help-para">7.2 Ghostscript Previewers.</div>
<div class="old-help-para">The interface to Ghostscript is very primitive so a number of graphical front
ends have been created.  These allow easier PostScript file selection,
previewing at different zoom levels, and printing.  Check supplied
documentation for full details.</div>
<div class="old-help-para"><a name="_alternate-duplex-printing"></a><h3 class="help-heading">ALTERNATE DUPLEX PRINTING</h3></div>
<div class="old-help-para">It is possible to achieve a poor man's version of duplex printing using the PS
utility psselect.  This utility has options -e and -o for printing just the
even or odd pages of a PS file respectively.</div>
<div class="old-help-para">First generate a PS file with the ":hardcopy" command, then generate new
files with all the odd and even numbered pages with:<pre>psselect -o test.ps odd.ps
psselect -e test.ps even.ps</pre>
Next print odd.ps with your platform's normal print command.  Then take the
print output, turn it over and place it back in the paper feeder.  Now print
even.ps with your platform's print command.  All the even pages should now
appear on the back of the odd pages.</div>
<div class="old-help-para">There are a couple of points to bear in mind:</div>
<div class="old-help-para">1. Position of the first page.  If the first page is on top of the printout
   when printing the odd pages then you need to reverse the order that the odd
   pages are printed.  This can be done with the -r option to psselect.  This
   will ensure page 2 is printed on the back of page 1.
   Note: it is better to reverse the odd numbered pages rather than the even
   numbered in case there are an odd number of pages in the original PS file.</div>
<div class="old-help-para">2. Paper flipping.  When turning over the paper with the odd pages printed on
   them you may have to either flip them horizontally (along the long edge) or
   vertically (along the short edge), as well as possibly rotating them 180
   degrees.  All this depends on the printer - it will be more obvious for
   desktop ink jets than for small office laser printers where the paper path
   is hidden from view.</div>
<div class="old-help-para"><h2 class="help-heading">8. Formfeed Characters<span class="help-heading-tags">					<a name="printing-formfeed"></a><span class="help-tag">printing-formfeed</span></span></h2></div>
<div class="old-help-para">By default Vim does not do any special processing of formfeed control
characters.  Setting the <a href="/neovim-docs-web/en/options#'printoptions'">'printoptions'</a> formfeed item will make Vim recognize
formfeed characters and continue printing the current line at the beginning
of the first line on a new page.  The use of formfeed characters provides
rudimentary print control but there are certain things to be aware of.</div>
<div class="old-help-para">Vim will always start printing a line (including a line number if enabled)
containing a formfeed character, even if it is the first character on the
line.  This means if a line starting with a formfeed character is the first
line of a page then Vim will print a blank page.</div>
<div class="old-help-para">Since the line number is printed at the start of printing the line containing
the formfeed character, the remainder of the line printed on the new page
will not have a line number printed for it (in the same way as the wrapped
lines of a long line when wrap in <a href="/neovim-docs-web/en/options#'printoptions'">'printoptions'</a> is enabled).</div>
<div class="old-help-para">If the formfeed character is the last character on a line, then printing will
continue on the second line of the new page, not the first.  This is due to
Vim processing the end of the line after the formfeed character and moving
down a line to continue printing.</div>
<div class="old-help-para">Due to the points made above it is recommended that when formfeed character
processing is enabled, printing of line numbers is disabled, and that form
feed characters are not the last character on a line.  Even then you may need
to adjust the number of lines before a formfeed character to prevent
accidental blank pages.</div>

  
  