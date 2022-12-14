---
title:  Mbyte
layout: ../../layouts/MainLayout.astro
---

  <a name="mbyte.txt"></a><a name="multibyte"></a><h1> Mbyte</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/mbyte.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Multi-byte support <a name="multi-byte"></a><code class="help-tag">multi-byte</code>
						<a name="Chinese"></a><code class="help-tag-right">Chinese</code> <a name="Japanese"></a><code class="help-tag">Japanese</code> <a name="Korean"></a><code class="help-tag">Korean</code>
This is about editing text in languages which have many characters that can
not be represented using one byte (one octet).  Examples are Chinese, Japanese
and Korean.  Unicode is also covered here.</div>
<div class="old-help-para">For an introduction to the most common features, see <a href="/neovim-docs-web/en/usr_45#usr_45.txt">usr_45.txt</a> in the user
manual.
For changing the language of messages and menus see <a href="/neovim-docs-web/en/mlang#mlang.txt">mlang.txt</a>.</div>
<div class="old-help-para"><h2 class="help-heading">Getting started<span class="help-heading-tags">						<a name="mbyte-first"></a><span class="help-tag">mbyte-first</span></span></h2></div>
<div class="old-help-para">This is a summary of the multibyte features in Vim.  If you are lucky it works
as described and you can start using Vim without much trouble.  If something
doesn't work you will have to read the rest.  Don't be surprised if it takes
quite a bit of work and experimenting to make Vim use all the multibyte
features.  Unfortunately, every system has its own way to deal with multibyte
languages and it is quite complicated.</div>
<div class="old-help-para"><a name="_locale"></a><h3 class="help-heading">LOCALE</h3></div>
<div class="old-help-para">First of all, you must make sure your current locale is set correctly.  If
your system has been installed to use the language, it probably works right
away.  If not, you can often make it work by setting the $LANG environment
variable in your shell:<pre>setenv LANG ja_JP.EUC</pre>
Unfortunately, the name of the locale depends on your system.  Japanese might
also be called "ja_JP.EUCjp" or just "ja".  To see what is currently used:<pre>:language</pre>
To change the locale inside Vim use:<pre>:language ja_JP.EUC</pre>
Vim will give an error message if this doesn't work.  This is a good way to
experiment and find the locale name you want to use.  But it's always better
to set the locale in the shell, so that it is used right from the start.</div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/mbyte#mbyte-locale">mbyte-locale</a> for details.</div>
<div class="old-help-para"><a name="_encoding"></a><h3 class="help-heading">ENCODING</h3></div>
<div class="old-help-para">Nvim always uses UTF-8 internally. Thus <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> option is always set
to "utf-8" and cannot be changed.</div>
<div class="old-help-para">All the text that is used inside Vim will be in UTF-8. Not only the text in
the buffers, but also in registers, variables, etc.</div>
<div class="old-help-para">You can edit files in different encodings than UTF-8.  Nvim
will convert the file when you read it and convert it back when you write it.
See <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a>, <a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a> and <a href="/neovim-docs-web/en/editing#%2B%2Benc">++enc</a>.</div>
<div class="old-help-para"><a name="_display-and-fonts"></a><h3 class="help-heading">DISPLAY AND FONTS</h3></div>
<div class="old-help-para">If you are working in a terminal (emulator) you must make sure it accepts
UTF-8, the encoding which Vim is working with. Otherwise only ASCII can
be displayed and edited correctly.</div>
<div class="old-help-para">For the GUI you must select fonts that work with UTF-8.  You can set <a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a>
and <a href="/neovim-docs-web/en/options#'guifontwide'">'guifontwide'</a>.  <a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a> is used for the single-width characters,
<a href="/neovim-docs-web/en/options#'guifontwide'">'guifontwide'</a> for the double-width characters. Thus the <a href="/neovim-docs-web/en/options#'guifontwide'">'guifontwide'</a> font
must be exactly twice as wide as <a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a>. Example for UTF-8:<pre>:set guifont=-misc-fixed-medium-r-normal-*-18-120-100-100-c-90-iso10646-1
:set guifontwide=-misc-fixed-medium-r-normal-*-18-120-100-100-c-180-iso10646-1</pre>
You can also set <a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a> alone, the Nvim GUI will try to find a matching
<a href="/neovim-docs-web/en/options#'guifontwide'">'guifontwide'</a> for you.</div>
<div class="old-help-para"><a name="_input"></a><h3 class="help-heading">INPUT</h3></div>
<div class="old-help-para">There are several ways to enter multibyte characters:
<div class="help-li" style=""> Your system IME can be used.
</div><div class="help-li" style=""> Keymaps can be used.  See <a href="/neovim-docs-web/en/mbyte#mbyte-keymap">mbyte-keymap</a>.
</div></div>
<div class="old-help-para">The options <a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a>, <a href="/neovim-docs-web/en/options#'imsearch'">'imsearch'</a> and <a href="/neovim-docs-web/en/options#'imcmdline'">'imcmdline'</a> can be used to choose
the different input methods or disable them temporarily.</div>
<div class="old-help-para"><h2 class="help-heading">Locale<span class="help-heading-tags">							<a name="mbyte-locale"></a><span class="help-tag">mbyte-locale</span></span></h2></div>
<div class="old-help-para">The easiest setup is when your whole system uses the locale you want to work
in.  But it's also possible to set the locale for one shell you are working
in, or just use a certain locale inside Vim.</div>
<div class="old-help-para">WHAT IS A LOCALE?					<a name="locale"></a><code class="help-tag-right">locale</code></div>
<div class="old-help-para">There are many languages in the world.  And there are different cultures and
environments at least as many as the number of languages.  A linguistic
environment corresponding to an area is called "locale".  This includes
information about the used language, the charset, collating order for sorting,
date format, currency format and so on.  For Vim only the language and charset
really matter.</div>
<div class="old-help-para">You can only use a locale if your system has support for it.  Some systems
have only a few locales, especially in the USA.  The language which you want
to use may not be on your system.  In that case you might be able to install
it as an extra package.  Check your system documentation for how to do that.</div>
<div class="old-help-para">The location in which the locales are installed varies from system to system.
For example, "/usr/share/locale" or "/usr/lib/locale".  See your system's
setlocale() man page.</div>
<div class="old-help-para">Looking in these directories will show you the exact name of each locale.
Mostly upper/lowercase matters, thus "ja_JP.EUC" and "ja_jp.euc" are
different.  Some systems have a locale.alias file, which allows translation
from a short name like "nl" to the full name "nl_NL.ISO_8859-1".</div>
<div class="old-help-para">Note that X-windows has its own locale stuff.  And unfortunately uses locale
names different from what is used elsewhere.  This is confusing!  For Vim it
matters what the setlocale() function uses, which is generally NOT the
X-windows stuff.  You might have to do some experiments to find out what
really works.</div>
<div class="old-help-para">							<a name="locale-name"></a><code class="help-tag-right">locale-name</code>
The (simplified) format of <a href="/neovim-docs-web/en/mbyte#locale">locale</a> name is:</div>
<div class="old-help-para">	language
or	language_territory
or	language_territory.codeset</div>
<div class="old-help-para">Territory means the country (or part of it), codeset means the <a href="/neovim-docs-web/en/mbyte#charset">charset</a>.  For
example, the locale name "ja_JP.eucJP" means:
	ja	the language is Japanese
	JP	the country is Japan
	eucJP	the codeset is EUC-JP
But it also could be "ja", "ja_JP.EUC", "ja_JP.ujis", etc.  And unfortunately,
the locale name for a specific language, territory and codeset is not unified
and depends on your system.</div>
<div class="old-help-para">Examples of locale name:
<div class="help-column_heading">    charset	    language		  locale name</div>    GB2312	    Chinese (simplified)  zh_CN.EUC, zh_CN.GB2312
    Big5	    Chinese (traditional) zh_TW.BIG5, zh_TW.Big5
    CNS-11643	    Chinese (traditional) zh_TW
    EUC-JP	    Japanese		  ja, ja_JP.EUC, ja_JP.ujis, ja_JP.eucJP
    Shift_JIS	    Japanese		  ja_JP.SJIS, ja_JP.Shift_JIS
    EUC-KR	    Korean		  ko, ko_KR.EUC</div>
<div class="old-help-para">USING A LOCALE</div>
<div class="old-help-para">To start using a locale for the whole system, see the documentation of your
system.  Mostly you need to set it in a configuration file in "/etc".</div>
<div class="old-help-para">To use a locale in a shell, set the $LANG environment value.  When you want to
use Korean and the <a href="/neovim-docs-web/en/mbyte#locale">locale</a> name is "ko", do this:</div>
<div class="old-help-para">    sh:    export LANG=ko
    csh:   setenv LANG ko</div>
<div class="old-help-para">You can put this in your ~/.profile or ~/.cshrc file to always use it.</div>
<div class="old-help-para">To use a locale in Vim only, use the <a href="/neovim-docs-web/en/mlang#%3Alanguage">:language</a> command:<pre>:language ko</pre>
Put this in your <a href="/neovim-docs-web/en/starting#init.vim">init.vim</a> file to use it always.</div>
<div class="old-help-para">Or specify $LANG when starting Vim:</div>
<div class="old-help-para">   sh:    LANG=ko vim <code>{vim-arguments}</code>
   csh:	  env LANG=ko vim <code>{vim-arguments}</code></div>
<div class="old-help-para">You could make a small shell script for this.</div>
<div class="old-help-para"><h2 class="help-heading">Encoding<span class="help-heading-tags">				<a name="mbyte-encoding"></a><span class="help-tag">mbyte-encoding</span></span></h2></div>
<div class="old-help-para">In Nvim UTF-8 is always used internally to encode characters.
 This applies to all the places where text is used, including buffers (files
 loaded into memory), registers and variables.</div>
<div class="old-help-para">							<a name="charset"></a><code class="help-tag-right">charset</code> <a name="codeset"></a><code class="help-tag">codeset</code>
Charset is another name for encoding.  There are subtle differences, but these
don't matter when using Vim.  "codeset" is another similar name.</div>
<div class="old-help-para">Each character is encoded as one or more bytes.  When all characters are
encoded with one byte, we call this a single-byte encoding.  The most often
used one is called "latin1".  This limits the number of characters to 256.
Some of these are control characters, thus even fewer can be used for text.</div>
<div class="old-help-para">When some characters use two or more bytes, we call this a multibyte
encoding.  This allows using much more than 256 characters, which is required
for most East Asian languages.</div>
<div class="old-help-para">Most multibyte encodings use one byte for the first 127 characters.  These
are equal to ASCII, which makes it easy to exchange plain-ASCII text, no
matter what language is used.  Thus you might see the right text even when the
encoding was set wrong.</div>
<div class="old-help-para">							<a name="encoding-names"></a><code class="help-tag-right">encoding-names</code>
Vim can edit files in different character encodings.  There are three major groups:</div>
<div class="old-help-para">1   8bit	Single-byte encodings, 256 different characters.  Mostly used
		in USA and Europe.  Example: ISO-8859-1 (Latin1).  All
		characters occupy one screen cell only.</div>
<div class="old-help-para">2   2byte	Double-byte encodings, over 10000 different characters.
		Mostly used in Asian countries.  Example: euc-kr (Korean)
		The number of screen cells is equal to the number of bytes
		(except for euc-jp when the first byte is 0x8e).</div>
<div class="old-help-para">u   Unicode	Universal encoding, can replace all others.  ISO 10646.
		Millions of different characters.  Example: UTF-8.  The
		relation between bytes and screen cells is complex.</div>
<div class="old-help-para">Only UTF-8 is used by Vim internally.  But files in other
encodings can be edited by using conversion, see <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a>.</div>
<div class="old-help-para">Recognized <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> values include:		<a name="encoding-values"></a><code class="help-tag-right">encoding-values</code>
1   latin1	8-bit characters (ISO 8859-1, also used for cp1252)
1   iso-8859-n	ISO_8859 variant (n = 2 to 15)
1   koi8-r	Russian
1   koi8-u	Ukrainian
1   macroman    MacRoman (Macintosh encoding)
1   8bit-{name} any 8-bit encoding (Vim specific name)
1   cp437	similar to iso-8859-1
1   cp737	similar to iso-8859-7
1   cp775	Baltic
1   cp850	similar to iso-8859-4
1   cp852	similar to iso-8859-1
1   cp855	similar to iso-8859-2
1   cp857	similar to iso-8859-5
1   cp860	similar to iso-8859-9
1   cp861	similar to iso-8859-1
1   cp862	similar to iso-8859-1
1   cp863	similar to iso-8859-8
1   cp865	similar to iso-8859-1
1   cp866	similar to iso-8859-5
1   cp869	similar to iso-8859-7
1   cp874	Thai
1   cp1250	Czech, Polish, etc.
1   cp1251	Cyrillic
1   cp1253	Greek
1   cp1254	Turkish
1   cp1255	Hebrew
1   cp1256	Arabic
1   cp1257	Baltic
1   cp1258	Vietnamese
1   cp{number}	MS-Windows: any installed single-byte codepage
2   cp932	Japanese (Windows only)
2   euc-jp	Japanese
2   sjis	Japanese
2   cp949	Korean
2   euc-kr	Korean
2   cp936	simplified Chinese (Windows only)
2   euc-cn	simplified Chinese
2   cp950	traditional Chinese (alias for big5)
2   big5	traditional Chinese (alias for cp950)
2   euc-tw	traditional Chinese
2   2byte-{name} any double-byte encoding (Vim-specific name)
2   cp{number}	MS-Windows: any installed double-byte codepage
u   utf-8	32 bit UTF-8 encoded Unicode (ISO/IEC 10646-1)
u   ucs-2	16 bit UCS-2 encoded Unicode (ISO/IEC 10646-1)
u   ucs-2le	like ucs-2, little endian
u   utf-16	ucs-2 extended with double-words for more characters
u   utf-16le	like utf-16, little endian
u   ucs-4	32 bit UCS-4 encoded Unicode (ISO/IEC 10646-1)
u   ucs-4le	like ucs-4, little endian</div>
<div class="old-help-para">The <code>{name}</code> can be any encoding name that your system supports.  It is passed
to iconv() to convert between UTF-8 and the encoding of the file.
For MS-Windows "cp{number}" means using codepage <code>{number}</code>.
Examples:<pre>:set fileencoding=8bit-cp1252
:set fileencoding=2byte-cp932</pre>
The MS-Windows codepage 1252 is very similar to latin1.  For practical reasons
the same encoding is used and it's called latin1.  <a href="/neovim-docs-web/en/options#'isprint'">'isprint'</a> can be used to
display the characters 0x80 - 0xA0 or not.</div>
<div class="old-help-para">Several aliases can be used, they are translated to one of the names above.
Incomplete list:</div>
<div class="old-help-para">1   ansi	same as latin1 (obsolete, for backward compatibility)
2   japan	Japanese: "euc-jp"
2   korea	Korean: "euc-kr"
2   prc		simplified Chinese: "euc-cn"
2   chinese     same as "prc"
2   taiwan	traditional Chinese: "euc-tw"
u   utf8	same as utf-8
u   unicode	same as ucs-2
u   ucs2be	same as ucs-2 (big endian)
u   ucs-2be	same as ucs-2 (big endian)
u   ucs-4be	same as ucs-4 (big endian)
u   utf-32	same as ucs-4
u   utf-32le	same as ucs-4le
    default     the encoding of the current locale.</div>
<div class="old-help-para">For the UCS codes the byte order matters.  This is tricky, use UTF-8 whenever
you can.  The default is to use big-endian (most significant byte comes
first):
<div class="help-column_heading">	    name	bytes		char</div>	    ucs-2	      11 22	    1122
	    ucs-2le	      22 11	    1122
	    ucs-4	11 22 33 44	11223344
	    ucs-4le	44 33 22 11	11223344</div>
<div class="old-help-para">On MS-Windows systems you often want to use "ucs-2le", because it uses little
endian UCS-2.</div>
<div class="old-help-para">There are a few encodings which are similar, but not exactly the same.  Vim
treats them as if they were different encodings, so that conversion will be
done when needed.  You might want to use the similar name to avoid conversion
or when conversion is not possible:</div>
<div class="old-help-para">	cp932, shift-jis, sjis
	cp936, euc-cn</div>
<div class="old-help-para"><h3 class="help-heading">CONVERSION<span class="help-heading-tags">						<a name="charset-conversion"></a><span class="help-tag">charset-conversion</span></span></h3></div>
<div class="old-help-para">Vim will automatically convert from one to another encoding in several places:
<div class="help-li" style=""> When reading a file and <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is different from "utf-8"
</div><div class="help-li" style=""> When writing a file and <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is different from "utf-8"
</div><div class="help-li" style=""> When displaying messages and the encoding used for LC_MESSAGES differs from
  "utf-8" (requires a gettext version that supports this).
</div><div class="help-li" style=""> When reading a Vim script where <a href="/neovim-docs-web/en/repeat#%3Ascriptencoding">:scriptencoding</a> is different from
  "utf-8".
Most of these require iconv.  Conversion for reading and writing files may
also be specified with the <a href="/neovim-docs-web/en/options#'charconvert'">'charconvert'</a> option.
</div></div>
<div class="old-help-para">Useful utilities for converting the charset:
    All:	    iconv
	GNU iconv can convert most encodings.  Unicode is used as the
	intermediate encoding, which allows conversion from and to all other
	encodings.  See <a href="https://directory.fsf.org/wiki/Libiconv">https://directory.fsf.org/wiki/Libiconv</a>.</div>
<div class="old-help-para">							<a name="mbyte-conversion"></a><code class="help-tag-right">mbyte-conversion</code>
When reading and writing files in an encoding different from "utf-8",
conversion needs to be done.  These conversions are supported:
<div class="help-li" style=""> All conversions between Latin-1 (ISO-8859-1), UTF-8, UCS-2 and UCS-4 are
  handled internally.
</div><div class="help-li" style=""> For MS-Windows, conversion from and
  to any codepage should work.
</div><div class="help-li" style=""> Conversion specified with <a href="/neovim-docs-web/en/options#'charconvert'">'charconvert'</a>
</div><div class="help-li" style=""> Conversion with the iconv library, if it is available.
	Old versions of GNU iconv() may cause the conversion to fail (they
	request a very large buffer, more than Vim is willing to provide).
	Try getting another iconv() implementation.
</div></div>
<div class="old-help-para"><h2 class="help-heading">Input on X11<span class="help-heading-tags">					<a name="mbyte-XIM"></a><span class="help-tag">mbyte-XIM</span></span></h2></div>
<div class="old-help-para">X INPUT METHOD (XIM) BACKGROUND			<a name="XIM"></a><code class="help-tag-right">XIM</code> <a name="xim"></a><code class="help-tag">xim</code> <a name="x-input-method"></a><code class="help-tag">x-input-method</code></div>
<div class="old-help-para">XIM is an international input module for X.  There are two kinds of structures,
Xlib unit type and <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a> (Input-Method server) type.  <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a> type
is suitable for complex input, such as CJK.</div>
<div class="old-help-para"><div class="help-li" style=""> IM-server
							<a name="IM-server"></a><code class="help-tag-right">IM-server</code>
  In <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a> type input structures, the input event is handled by either
  of the two ways: FrontEnd system and BackEnd system.  In the FrontEnd
  system, input events are snatched by the <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a> first, then <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a>
  give the application the result of input.  On the other hand, the BackEnd
  system works reverse order.  MS-Windows adopt BackEnd system.  In X, most of
  <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a>s adopt FrontEnd system.  The demerit of BackEnd system is the
  large overhead in communication, but it provides safe synchronization with
  no restrictions on applications.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Conversion Server
							<a name="conversion-server"></a><code class="help-tag-right">conversion-server</code>
  Some system needs additional server: conversion server.  Most of Japanese
  <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a>s need it, Kana-Kanji conversion server.  For Chinese inputting,
  it depends on the method of inputting, in some methods, PinYin or ZhuYin to
  HanZi conversion server is needed.  For Korean inputting, if you want to
  input Hanja, Hangul-Hanja conversion server is needed.
</div></div>
<div class="old-help-para">  For example, the Japanese inputting process is divided into 2 steps.  First
  we pre-input Hira-gana, second Kana-Kanji conversion.  There are so many
  Kanji characters (6349 Kanji characters are defined in JIS X 0208) and the
  number of Hira-gana characters are 76.  So, first, we pre-input text as
  pronounced in Hira-gana, second, we convert Hira-gana to Kanji or Kata-Kana,
  if needed.  There are some Kana-Kanji conversion server: jserver
  (distributed with Wnn, see below) and canna.  Canna can be found at:
  <a href="http://canna.sourceforge.jp/">http://canna.sourceforge.jp/</a></div>
<div class="old-help-para">There is a good input system: Wnn4.2.  Wnn 4.2 contains,
    xwnmo (<a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a>)
    jserver (Japanese Kana-Kanji conversion server)
    cserver (Chinese PinYin or ZhuYin to simplified HanZi conversion server)
    tserver (Chinese PinYin or ZhuYin to traditional HanZi conversion server)
    kserver (Hangul-Hanja conversion server)
Wnn 4.2 for several systems can be found at various places on the internet.
Use the RPM or port for your system.</div>
<div class="old-help-para"><div class="help-li" style=""> Input Style
							<a name="xim-input-style"></a><code class="help-tag-right">xim-input-style</code>
  When inputting CJK, there are four areas:
      1. The area to display of the input while it is being composed
      2. The area to display the currently active input mode.
      3. The area to display the next candidate for the selection.
      4. The area to display other tools.
</div></div>
<div class="old-help-para">  The third area is needed when converting.  For example, in Japanese
  inputting, multiple Kanji characters could have the same pronunciation, so
  a sequence of Hira-gana characters could map to a distinct sequence of Kanji
  characters.</div>
<div class="old-help-para">  The first and second areas are defined in international input of X with the
  names of "Preedit Area", "Status Area" respectively.  The third and fourth
  areas are not defined and are left to be managed by the <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a>.  In the
  international input, four input styles have been defined using combinations
  of Preedit Area and Status Area: <a href="/neovim-docs-web/en/mbyte#OnTheSpot">OnTheSpot</a>, <a href="/neovim-docs-web/en/mbyte#OffTheSpot">OffTheSpot</a>, <a href="/neovim-docs-web/en/mbyte#OverTheSpot">OverTheSpot</a>
  and <a href="/neovim-docs-web/en/mbyte#Root">Root</a>.</div>
<div class="old-help-para">  Currently, GUI Vim supports three styles, <a href="/neovim-docs-web/en/mbyte#OverTheSpot">OverTheSpot</a>, <a href="/neovim-docs-web/en/mbyte#OffTheSpot">OffTheSpot</a> and
  <a href="/neovim-docs-web/en/mbyte#Root">Root</a>.</div>
<div class="old-help-para">.  on-the-spot						<a name="OnTheSpot"></a><code class="help-tag-right">OnTheSpot</code>
    Preedit Area and Status Area are performed by the client application in
    the area of application.  The client application is directed by the
    <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a> to display all pre-edit data at the location of text
    insertion.  The client registers callbacks invoked by the input method
    during pre-editing.
.  over-the-spot					<a name="OverTheSpot"></a><code class="help-tag-right">OverTheSpot</code>
    Status Area is created in a fixed position within the area of application,
    in case of Vim, the position is the additional status line.  Preedit Area
    is made at present input position of application.  The input method
    displays pre-edit data in a window which it brings up directly over the
    text insertion position.
.  off-the-spot					<a name="OffTheSpot"></a><code class="help-tag-right">OffTheSpot</code>
    Preedit Area and Status Area are performed in the area of application, in
    case of Vim, the area is additional status line.  The client application
    provides display windows for the pre-edit data to the input method which
    displays into them directly.
.  root-window						<a name="Root"></a><code class="help-tag-right">Root</code>
    Preedit Area and Status Area are outside of the application.  The input
    method displays all pre-edit data in a separate area of the screen in a
    window specific to the input method.</div>
<div class="old-help-para"><h3 class="help-heading">USING XIM<span class="help-heading-tags">			<a name="multibyte-input"></a><span class="help-tag">multibyte-input</span> <a name="E284"></a><span class="help-tag">E284</span> <a name="E285"></a><span class="help-tag">E285</span> <a name="E286"></a><span class="help-tag">E286</span> <a name="E287"></a><span class="help-tag">E287</span></span></h3>					<a name="E288"></a><code class="help-tag-right">E288</code> <a name="E289"></a><code class="help-tag">E289</code></div>
<div class="old-help-para">Note that Display and Input are independent.  It is possible to see your
language even though you have no input method for it.  But when your Display
method doesn't match your Input method, the text will be displayed wrong.</div>
<div class="old-help-para">To input your language you should run the <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a> which supports your
language and <a href="/neovim-docs-web/en/mbyte#conversion-server">conversion-server</a> if needed.</div>
<div class="old-help-para">The next 3 lines should be put in your ~/.Xdefaults file.  They are common for
all X applications which uses <a href="/neovim-docs-web/en/mbyte#XIM">XIM</a>.  If you already use <a href="/neovim-docs-web/en/mbyte#XIM">XIM</a>, you can skip
this.<pre>*international: True
*.inputMethod: your_input_server_name
*.preeditType: your_input_style</pre></div>
<div class="old-help-para">input_server_name	is your <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a> name (check your <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a>
			manual).
your_input_style	is one of <a href="/neovim-docs-web/en/mbyte#OverTheSpot">OverTheSpot</a>, <a href="/neovim-docs-web/en/mbyte#OffTheSpot">OffTheSpot</a>, <a href="/neovim-docs-web/en/mbyte#Root">Root</a>.  See
			also <a href="/neovim-docs-web/en/mbyte#xim-input-style">xim-input-style</a>.</div>
<div class="old-help-para">international may not be necessary if you use X11R6.
.inputMethod and.preeditType are optional if you use X11R6.</div>
<div class="old-help-para">For example, when you are using kinput2 as <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a>,<pre>*international: True
*.inputMethod: kinput2
*.preeditType: OverTheSpot</pre></div>
<div class="old-help-para">When using <a href="/neovim-docs-web/en/mbyte#OverTheSpot">OverTheSpot</a>, GUI Vim always connects to the IM Server even in
Normal mode, so you can input your language with commands like "f" and "r".
But when using one of the other two methods, GUI Vim connects to the IM Server
only if it is not in Normal mode.</div>
<div class="old-help-para">If your IM Server does not support <a href="/neovim-docs-web/en/mbyte#OverTheSpot">OverTheSpot</a>, and if you want to use your
language with some Normal mode command like "f" or "r", then you should use a
localized xterm  or an xterm which supports <a href="/neovim-docs-web/en/mbyte#XIM">XIM</a></div>
<div class="old-help-para">If needed, you can set the XMODIFIERS environment variable:</div>
<div class="old-help-para">	sh:  export XMODIFIERS="@im=input_server_name"
	csh: setenv XMODIFIERS "@im=input_server_name"</div>
<div class="old-help-para">For example, when you are using kinput2 as <a href="/neovim-docs-web/en/mbyte#IM-server">IM-server</a> and sh,<pre>export XMODIFIERS="@im=kinput2"</pre></div>
<div class="old-help-para"><h2 class="help-heading">Input with a keymap<span class="help-heading-tags">					<a name="mbyte-keymap"></a><span class="help-tag">mbyte-keymap</span></span></h2></div>
<div class="old-help-para">When the keyboard doesn't produce the characters you want to enter in your
text, you can use the <a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> option.  This will translate one or more
(English) characters to another (non-English) character.  This only happens
when typing text, not when typing Vim commands.  This avoids having to switch
between two keyboard settings.</div>
<div class="old-help-para">The value of the <a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> option specifies a keymap file to use.  The name of
this file is one of these two:</div>
<div class="old-help-para">	keymap/{keymap}_utf-8.vim
	keymap/{keymap}.vim</div>
<div class="old-help-para">Here <code>{keymap}</code> is the value of the <a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> option.
The file name with "utf-8" included is tried first.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> is used to find these files.  To see an overview of all
available keymap files, use this:<pre>:echo globpath(&amp;rtp, "keymap/*.vim")</pre>
In Insert and Command-line mode you can use <code>CTRL-^</code> to toggle between using the
keyboard map or not. <a href="/neovim-docs-web/en/insert#i_CTRL-%5E">i_CTRL-^</a> <a href="/neovim-docs-web/en/cmdline#c_CTRL-%5E">c_CTRL-^</a>
This flag is remembered for Insert mode with the <a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a> option.  When
leaving and entering Insert mode the previous value is used.  The same value
is also used for commands that take a single character argument, like <a href="/neovim-docs-web/en/motion#f">f</a> and
<a href="/neovim-docs-web/en/change#r">r</a>.
For Command-line mode the flag is NOT remembered.  You are expected to type an
Ex command first, which is ASCII.
For typing search patterns the <a href="/neovim-docs-web/en/options#'imsearch'">'imsearch'</a> option is used.  It can be set to
use the same value as for <a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a>.
								<a name="lCursor"></a><code class="help-tag-right">lCursor</code>
It is possible to give the GUI cursor another color when the language mappings
are being used.  This is disabled by default, to avoid that the cursor becomes
invisible when you use a non-standard background color.  Here is an example to
use a brightly colored cursor:<pre>:highlight Cursor guifg=NONE guibg=Green
:highlight lCursor guifg=NONE guibg=Cyan</pre></div>
<div class="old-help-para">		<a name="keymap-file-format"></a><code class="help-tag-right">keymap-file-format</code> <a name="%3Aloadk"></a><code class="help-tag">:loadk</code> <a name="%3Aloadkeymap"></a><code class="help-tag">:loadkeymap</code> <a name="E105"></a><code class="help-tag">E105</code> <a name="E791"></a><code class="help-tag">E791</code>
The keymap file looks something like this:<pre>" Maintainer:        name &lt;email@address&gt;
" Last Changed:        2001 Jan 1

let b:keymap_name = "short"

loadkeymap
a        A
b        B        comment</pre>
The lines starting with a " are comments and will be ignored.  Blank lines are
also ignored.  The lines with the mappings may have a comment after the useful
text.</div>
<div class="old-help-para">The "b:keymap_name" can be set to a short name, which will be shown in the
status line.  The idea is that this takes less room than the value of
<a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a>, which might be long to distinguish between different languages,
keyboards and encodings.</div>
<div class="old-help-para">The actual mappings are in the lines below "loadkeymap".  In the example "a"
is mapped to "A" and "b" to "B".  Thus the first item is mapped to the second
item.  This is done for each line, until the end of the file.
These items are exactly the same as what can be used in a <a href="/neovim-docs-web/en/map#%3Almap">:lmap</a> command,
using "&lt;buffer&gt;" to make the mappings local to the buffer.
You can check the result with this command:<pre>:lmap</pre>
The two items must be separated by white space.  You cannot include white
space inside an item, use the special names "&lt;Tab&gt;" and "&lt;Space&gt;" instead.
The length of the two items together must not exceed 200 bytes.</div>
<div class="old-help-para">It's possible to have more than one character in the first column.  This works
like a dead key.  Example:<pre>'a        ??</pre>
Since Vim doesn't know if the next character after a quote is really an "a",
it will wait for the next character.  To be able to insert a single quote,
also add this line:<pre>''        '</pre>
Since the mapping is defined with <a href="/neovim-docs-web/en/map#%3Almap">:lmap</a> the resulting quote will not be
used for the start of another character defined in the <a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a>.
It can be used in a standard <a href="/neovim-docs-web/en/map#%3Aimap">:imap</a> mapping.
The "accents" keymap uses this.				<a name="keymap-accents"></a><code class="help-tag-right">keymap-accents</code></div>
<div class="old-help-para">The first column can also be in <a href="/neovim-docs-web/en/intro#%3C%3E">&lt;&gt;</a> form:
	<code>&lt;C-c&gt;</code>		Ctrl-C
	<code>&lt;A-c&gt;</code>		Alt-c
	<code>&lt;A-C&gt;</code>		Alt-C
Note that the Alt mappings may not work, depending on your keyboard and
terminal.</div>
<div class="old-help-para">Although it's possible to have more than one character in the second column,
this is unusual.  But you can use various ways to specify the character:<pre>A        a                literal character
A        &lt;char-97&gt;        decimal value
A        &lt;char-0x61&gt;        hexadecimal value
A        &lt;char-0141&gt;        octal value
x        &lt;Space&gt;                special key name</pre>
The characters are assumed to be encoded in UTF-8.
It's possible to use ":scriptencoding" when all characters are given
literally.  That doesn't work when using the <code>&lt;char-&gt;</code> construct, because the
conversion is done on the keymap file, not on the resulting character.</div>
<div class="old-help-para">The lines after "loadkeymap" are interpreted with <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> set to "C".
This means that continuation lines are not used and a backslash has a special
meaning in the mappings.  Examples:<pre>" a comment line
\"        x        maps " to x
\\        y        maps \ to y</pre>
If you write a keymap file that will be useful for others, consider submitting
it to the Vim maintainer for inclusion in the distribution:
&lt;maintainer@vim.org&gt;</div>
<div class="old-help-para"><h3 class="help-heading">HEBREW KEYMAP<span class="help-heading-tags">						<a name="keymap-hebrew"></a><span class="help-tag">keymap-hebrew</span></span></h3></div>
<div class="old-help-para">This file explains what characters are available in UTF-8 and CP1255 encodings,
and what the keymaps are to get those characters:</div>
<div class="old-help-para"><div class="help-column_heading">glyph   encoding	   keymap</div><div class="help-column_heading">Char UTF-8 cp1255  hebrew  hebrewp  name</div>??    0x5d0  0xe0     t	      a     '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+mbyte.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/mbyte.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0Aglyph%20%20%20encoding%09%20%20%20keymap%20~%0AChar%20UTF-8%20cp1255%20%20hebrew%20%20hebrewp%20%20name%20~%0A%D7%90%20%20%20%200x5d0%20%200xe0%20%20%20%20%20t%09%20%20%20%20%20%20a%20%20%20%20%20'alef%0A%D7%91%20%20%20%200x5d1%20%200xe1%20%20%20%20%20c%09%20%20%20%20%20%20b%20%20%20%20%20bet%0A%D7%92%20%20%20%200x5d2%20%200xe2%20%20%20%20%20d%09%20%20%20%20%20%20g%20%20%20%20%20gimel%0A%D7%93%20%20%20%200x5d3%20%200xe3%20%20%20%20%20s%09%20%20%20%20%20%20d%20%20%20%20%20dalet%0D%60%60%60">alef</a>
??    0x5d1  0xe1     c	      b     bet
??    0x5d2  0xe2     d	      g     gimel
??    0x5d3  0xe3     s	      d     dalet
??    0x5d4  0xe4     v	      h     he
??    0x5d5  0xe5     u	      v     vav
??    0x5d6  0xe6     z	      z     zayin
??    0x5d7  0xe7     j	      j     het
??    0x5d8  0xe8     y	      T     tet
??    0x5d9  0xe9     h	      y     yod
??    0x5da  0xea     l	      K     kaf sofit
??    0x5db  0xeb     f	      k     kaf
??    0x5dc  0xec     k	      l     lamed
??    0x5dd  0xed     o	      M     mem sofit
??    0x5de  0xee     n	      m     mem
??    0x5df  0xef     i	      N     nun sofit
??    0x5e0  0xf0     b	      n     nun
??    0x5e1  0xf1     x	      s     samech
??    0x5e2  0xf2     g	      uayin
??    0x5e3  0xf3     ;	      P     pe sofit
??    0x5e4  0xf4     p	      p     pe
??    0x5e5  0xf5     .	      X     tsadi sofit
??    0x5e6  0xf6     m	      x     tsadi
??    0x5e7  0xf7     e	      q     qof
??    0x5e8  0xf8     r	      r     resh
??    0x5e9  0xf9     a	      w     shin
??    0x5ea  0xfa     ,	      t     tav</div>
<div class="old-help-para">Vowel marks and special punctuation:
????    0x5b0  0xc0     A:      A:   sheva
????    0x5b1  0xc1     HE      HE   hataf segol
????    0x5b2  0xc2     HA      HA   hataf patah
????    0x5b3  0xc3     HO      HO   hataf qamats
????    0x5b4  0xc4     I       I    hiriq
????    0x5b5  0xc5     AY      AY   tsere
????    0x5b6  0xc6     E       E    segol
????    0x5b7  0xc7     AA      AA   patah
????    0x5b8  0xc8     AO      AO   qamats
????    0x5b9  0xc9     O       O    holam
????    0x5bb  0xcb     U       U    qubuts
????    0x5bc  0xcc     D       D    dagesh
????    0x5bd  0xcd     ]T      ]T   meteg
????   0x5be  0xce     ]Q      ]Q   maqaf
????    0x5bf  0xcf     ]R      ]R   rafe
????   0x5c0  0xd0     ]p      ]p   paseq
????    0x5c1  0xd1     SR      SR   shin-dot
????    0x5c2  0xd2     SL      SL   sin-dot
??    0x5c3  0xd3     ]P      ]P   sof-pasuq
??    0x5f0  0xd4     VV      VV   double-vav
??    0x5f1  0xd5     VY      VY   vav-yod
??    0x5f2  0xd6     YY      YY   yod-yod</div>
<div class="old-help-para">The following are only available in UTF-8</div>
<div class="old-help-para">Cantillation marks:
glyph
Char UTF-8 hebrew name
????    0x591   C:   etnahta
????    0x592   Cs   segol
????    0x593   CS   shalshelet
????    0x594   Cz   zaqef qatan
????    0x595   CZ   zaqef gadol
????    0x596   Ct   tipeha
????    0x597   Cr   revia
????    0x598   Cq   zarqa
????    0x599   Cp   pashta
????    0x59a   C!   yetiv
????    0x59b   Cv   tevir
????    0x59c   Cg   geresh
????    0x59d   C*   geresh qadim
????    0x59e   CG   gershayim
????    0x59f   CP   qarnei-parah
????    0x5aa   Cy   yerach-ben-yomo
????    0x5ab   Co   ole
????    0x5ac   Ci   iluy
????    0x5ad   Cd   dehi
????    0x5ae   Cn   zinor
????    0x5af   CC   masora circle</div>
<div class="old-help-para">Combining forms:
???    0xfb20  X`   Alternativeayin
???    0xfb21  X'   Alternative '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+mbyte.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/mbyte.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0ACombining%20forms%3A%0A%EF%AC%A0%20%20%20%200xfb20%20%20X%60%20%20%20Alternative%20%60ayin%0A%EF%AC%A1%20%20%20%200xfb21%20%20X'%20%20%20Alternative%20'alef%0A%EF%AC%A2%20%20%20%200xfb22%20%20X-d%20%20Alternative%20dalet%0A%EF%AC%A3%20%20%20%200xfb23%20%20X-h%20%20Alternative%20he%0A%EF%AC%A4%20%20%20%200xfb24%20%20X-k%20%20Alternative%20kaf%0D%60%60%60">alef</a>
???    0xfb22  X-d  Alternative dalet
???    0xfb23  X-h  Alternative he
???    0xfb24  X-k  Alternative kaf
???    0xfb25  X-l  Alternative lamed
???    0xfb26  X-m  Alternative mem-sofit
???    0xfb27  X-r  Alternative resh
???    0xfb28  X-t  Alternative tav
???    0xfb29  X-+  Alternative plus
???    0xfb2a  XW   shin+shin-dot
???    0xfb2b  Xw   shin+sin-dot
???    0xfb2c  X..W  shin+shin-dot+dagesh
???    0xfb2d  X..w  shin+sin-dot+dagesh
???    0xfb2e  XA   alef+patah
???    0xfb2f  XO   alef+qamats
???    0xfb30  XI   alef+hiriq (mapiq)
???    0xfb31  X.b  bet+dagesh
???    0xfb32  X.g  gimel+dagesh
???    0xfb33  X.d  dalet+dagesh
???    0xfb34  X.h  he+dagesh
???    0xfb35  Xu  vav+dagesh
???    0xfb36  X.z  zayin+dagesh
???    0xfb38  X.T  tet+dagesh
???    0xfb39  X.y  yud+dagesh
???    0xfb3a  X.K  kaf sofit+dagesh
???    0xfb3b  X.k  kaf+dagesh
???    0xfb3c  X.l  lamed+dagesh
???    0xfb3e  X.m  mem+dagesh
???    0xfb40  X.n  nun+dagesh
???    0xfb41  X.s  samech+dagesh
???    0xfb43  X.P  pe sofit+dagesh
???    0xfb44  X.p  pe+dagesh
???    0xfb46  X.x  tsadi+dagesh
???    0xfb47  X.q  qof+dagesh
???    0xfb48  X.r  resh+dagesh
???    0xfb49  X.w  shin+dagesh
???    0xfb4a  X.t  tav+dagesh
???    0xfb4b  Xo   vav+holam
???    0xfb4c  XRb  bet+rafe
???    0xfb4d  XRk  kaf+rafe
???    0xfb4e  XRp  pe+rafe
???    0xfb4f  Xal  alef-lamed</div>
<div class="old-help-para"><h2 class="help-heading">Using UTF-8<span class="help-heading-tags">				<a name="mbyte-utf8"></a><span class="help-tag">mbyte-utf8</span> <a name="UTF-8"></a><span class="help-tag">UTF-8</span> <a name="utf-8"></a><span class="help-tag">utf-8</span> <a name="utf8"></a><span class="help-tag">utf8</span></span></h2>							<a name="Unicode"></a><code class="help-tag-right">Unicode</code> <a name="unicode"></a><code class="help-tag">unicode</code>
The Unicode character set was designed to include all characters from other
character sets.  Therefore it is possible to write text in any language using
Unicode (with a few rarely used languages excluded).  And it's mostly possible
to mix these languages in one file, which is impossible with other encodings.</div>
<div class="old-help-para">Unicode can be encoded in several ways.  The most popular one is UTF-8, which
uses one or more bytes for each character and is backwards compatible with
ASCII.   On MS-Windows UTF-16 is also used (previously UCS-2), which uses
16-bit words.  Vim can support all of these encodings, but always uses UTF-8
internally.</div>
<div class="old-help-para">Vim has comprehensive UTF-8 support.  It works well in:
<div class="help-li" style=""> xterm with UTF-8 support enabled
</div><div class="help-li" style=""> MS-Windows GUI
</div><div class="help-li" style=""> several other platforms
</div></div>
<div class="old-help-para">Double-width characters are supported.  Works best with <a href="/neovim-docs-web/en/options#'guifontwide'">'guifontwide'</a>.  When
using only <a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a> the wide characters are drawn in the normal width and
a space to fill the gap.</div>
<div class="old-help-para">							<a name="bom-bytes"></a><code class="help-tag-right">bom-bytes</code>
When reading a file a BOM (Byte Order Mark) can be used to recognize the
Unicode encoding:
	EF BB BF     UTF-8
	FE FF        UTF-16 big endian
	FF FE        UTF-16 little endian
	00 00 FE FF  UTF-32 big endian
	FF FE 00 00  UTF-32 little endian</div>
<div class="old-help-para">UTF-8 is the recommended encoding.  Note that it's difficult to tell UTF-16
and UTF-32 apart.  UTF-16 is often used on MS-Windows, UTF-32 is not
widespread as file format.</div>
<div class="old-help-para">					<a name="mbyte-combining"></a><code class="help-tag-right">mbyte-combining</code> <a name="mbyte-composing"></a><code class="help-tag">mbyte-composing</code>
A composing or combining character is used to change the meaning of the
character before it.  The combining characters are drawn on top of the
preceding character.
Up to six combining characters can be displayed.
When editing text a composing character is mostly considered part of the
preceding character.  For example "x" will delete a character and its
following composing characters by default.
If the <a href="/neovim-docs-web/en/options#'delcombine'">'delcombine'</a> option is on, then pressing 'x' will delete the combining
characters, one at a time, then the base character.  But when inserting, you
type the first character and the following composing characters separately,
after which they will be joined.  The "r" command will not allow you to type a
combining character, because it doesn't know one is coming.  Use "R" instead.</div>
<div class="old-help-para">Bytes which are not part of a valid UTF-8 byte sequence are handled like a
single character and displayed as <code>&lt;xx&gt;</code>, where "xx" is the hex value of the
byte.</div>
<div class="old-help-para">Overlong sequences are not handled specially and displayed like a valid
character.  However, search patterns may not match on an overlong sequence.
(an overlong sequence is where more bytes are used than required for the
character.)  An exception is NUL (zero) which is displayed as "&lt;00&gt;".</div>
<div class="old-help-para">In the file and buffer the full range of Unicode characters can be used (31
bits).  However, displaying only works for the characters present in the
selected font.</div>
<div class="old-help-para">Useful commands:
<div class="help-li" style=""> "ga" shows the decimal, hexadecimal and octal value of the character under
  the cursor.  If there are composing characters these are shown too.  (If the
  message is truncated, use ":messages").
</div><div class="help-li" style=""> "g8" shows the bytes used in a UTF-8 character, also the composing
  characters, as hex numbers.
</div><div class="help-li" style=""> ":set fileencodings=" forces using UTF-8 for all files.  The
  default is to automatically detect the encoding of a file.
</div></div>
<div class="old-help-para"><a name="_starting-vim"></a><h3 class="help-heading">STARTING VIM</h3></div>
<div class="old-help-para">You might want to select the font used for the menus.  Unfortunately this
doesn't always work.  See the system specific remarks below, and <a href="/neovim-docs-web/en/options#'langmenu'">'langmenu'</a>.</div>
<div class="old-help-para">USING UTF-8 IN X-Windows				<a name="utf-8-in-xwindows"></a><code class="help-tag-right">utf-8-in-xwindows</code></div>
<div class="old-help-para">You need to specify a font to be used.  For double-wide characters another
font is required, which is exactly twice as wide.  There are three ways to do
this:</div>
<div class="old-help-para">1. Set <a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a> and let Vim find a matching <a href="/neovim-docs-web/en/options#'guifontwide'">'guifontwide'</a>
2. Set <a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a> and <a href="/neovim-docs-web/en/options#'guifontwide'">'guifontwide'</a></div>
<div class="old-help-para">See the documentation for each option for details.  Example:<pre>:set guifont=-misc-fixed-medium-r-normal--15-140-75-75-c-90-iso10646-1</pre>
You might also want to set the font used for the menus.  This only works for
Motif.  Use the ":hi Menu font={fontname}" command for this. <a href="/neovim-docs-web/en/syntax#%3Ahighlight">:highlight</a></div>
<div class="old-help-para"><h3 class="help-heading">TYPING UTF-8<span class="help-heading-tags">						<a name="utf-8-typing"></a><span class="help-tag">utf-8-typing</span></span></h3></div>
<div class="old-help-para">If you are using X-Windows, you should find an input method that supports
<a name="_utf-8."></a><h3 class="help-heading">UTF-8.</h3></div>
<div class="old-help-para">If your system does not provide support for typing UTF-8, you can use the
<a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> feature.  This allows writing a keymap file, which defines a UTF-8
character as a sequence of ASCII characters.  See <a href="/neovim-docs-web/en/mbyte#mbyte-keymap">mbyte-keymap</a>.</div>
<div class="old-help-para">If everything else fails, you can type any character as four hex bytes:<pre>CTRL-V u 1234</pre>
"1234" is interpreted as a hex number.  You must type four characters, prepend
a zero if necessary.</div>
<div class="old-help-para"><h3 class="help-heading">COMMAND ARGUMENTS<span class="help-heading-tags">					<a name="utf-8-char-arg"></a><span class="help-tag">utf-8-char-arg</span></span></h3></div>
<div class="old-help-para">Commands like <a href="/neovim-docs-web/en/motion#f">f</a>, <a href="/neovim-docs-web/en/motion#F">F</a>, <a href="/neovim-docs-web/en/motion#t">t</a> and <a href="/neovim-docs-web/en/change#r">r</a> take an argument of one character.  For
UTF-8 this argument may include one or two composing characters.  These need
to be produced together with the base character, Vim doesn't wait for the next
character to be typed to find out if it is a composing character or not.
Using <a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> or <a href="/neovim-docs-web/en/map#%3Almap">:lmap</a> is a nice way to type these characters.</div>
<div class="old-help-para">The commands that search for a character in a line handle composing characters
as follows.  When searching for a character without a composing character,
this will find matches in the text with or without composing characters.  When
searching for a character with a composing character, this will only find
matches with that composing character.  It was implemented this way, because
not everybody is able to type a composing character.</div>
<div class="old-help-para"><h2 class="help-heading">Overview of options<span class="help-heading-tags">					<a name="mbyte-options"></a><span class="help-tag">mbyte-options</span></span></h2></div>
<div class="old-help-para">These options are relevant for editing multibyte files.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a>	Encoding of a file.  When it's different from "utf-8"
		conversion is done when reading or writing the file.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a>	List of possible encodings of a file.  When opening a file
		these will be tried and the first one that doesn't cause an
		error is used for <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a>.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#'charconvert'">'charconvert'</a>	Expression used to convert files from one encoding to another.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> The 'm' flag can be included to have formatting break a line
		at a multibyte character of 256 or higher.  Thus is useful for
		languages where a sequence of characters can be broken
		anywhere.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a>	Specify the name of a keyboard mapping.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Contributions specifically for the multibyte features by:
	Chi-Deok Hwang &lt;hwang@mizi.co.kr&gt;
	SungHyun Nam &lt;goweol@gmail.com&gt;
	K.Nagano &lt;nagano@atese.advantest.co.jp&gt;
	Taro Muraoka  &lt;koron@tka.att.ne.jp&gt;
	Yasuhiro Matsumoto &lt;mattn@mail.goo.ne.jp&gt;</div>

  
  