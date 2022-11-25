---
title:  Usr_45
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_45.txt"></a><a name="45.1"></a><h1> Usr_45</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_45.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			Select your language (locale)</div>
<div class="old-help-para">The messages in Vim can be given in several languages.  This chapter explains
how to change which one is used.  Also, the different ways to work with files
in various languages is explained.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_45#45.1">45.1</a>  	Language for Messages
<a href="/neovim-docs-web/en/usr_45#45.2">45.2</a>  	Language for Menus
<a href="/neovim-docs-web/en/usr_45#45.3">45.3</a>  	Using another encoding
<a href="/neovim-docs-web/en/usr_45#45.4">45.4</a>  	Editing files with a different encoding
<a href="/neovim-docs-web/en/usr_45#45.5">45.5</a>  	Entering language text</div>
<div class="old-help-para">Previous chapter: <a href="/neovim-docs-web/en/usr_44#usr_44.txt">usr_44.txt</a>  Your own syntax highlighted
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Language for Messages</h2></div>
<div class="old-help-para">When you start Vim, it checks the environment to find out what language you
are using.  Mostly this should work fine, and you get the messages in your
language (if they are available).  To see what the current language is, use
this command:<pre>:language</pre>
If it replies with "C", this means the default is being used, which is
English.</div>
<div class="old-help-para">What if you would like your messages in a different language?  There are
several ways.  Which one you should use depends on the capabilities of your
system.
   The first way is to set the environment to the desired language before
starting Vim.  Example for Unix:<pre>env LANG=de_DE.ISO_8859-1  vim</pre>
This only works if the language is available on your system.  The advantage is
that all the GUI messages and things in libraries will use the right language
as well.  A disadvantage is that you must do this before starting Vim.  If you
want to change language while Vim is running, you can use the second method:<pre>:language fr_FR.ISO_8859-1</pre>
This way you can try out several names for your language.  You will get an
error message when it's not supported on your system.  You don't get an error
when translated messages are not available.  Vim will silently fall back to
using English.
   To find out which languages are supported on your system, find the
directory where they are listed.  On my system it is "/usr/share/locale".  On
some systems it's in "/usr/lib/locale".  The manual page for "setlocale"
should give you a hint where it is found on your system.
   Be careful to type the name exactly as it should be.  Upper and lowercase
matter, and the '-' and '_' characters are easily confused.</div>
<div class="old-help-para">You can also set the language separately for messages, edited text and the
time format.  See <a href="/neovim-docs-web/en/mlang#%3Alanguage">:language</a>.</div>
<div class="old-help-para"><a name="_do-it-yourself-message-translation"></a><h3 class="help-heading">DO-IT-YOURSELF MESSAGE TRANSLATION</h3></div>
<div class="old-help-para">If translated messages are not available for your language, you could write
them yourself.  To do this, get the source code for Vim and the GNU gettext
package.  After unpacking the sources, instructions can be found in the
directory src/po/README.txt.
   It's not too difficult to do the translation.  You don't need to be a
programmer.  You must know both English and the language you are translating
to, of course.
   When you are satisfied with the translation, consider making it available
to others.  Upload it to <a href="https://github.com/vim/vim">https://github.com/vim/vim</a> or e-mail it to the Vim
maintainer &lt;maintainer@vim.org&gt;.  Or both.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="45.2"></a><span class="help-tag">45.2</span>  	Language for Menus</span></h2></div>
<div class="old-help-para">The default menus are in English.  To be able to use your local language, they
must be translated.  Normally this is automatically done for you if the
environment is set for your language, just like with messages.  You don't need
to do anything extra for this.  But it only works if translations for the
language are available.
   Suppose you are in Germany, with the language set to German, but prefer to
use "File" instead of "Datei".  You can switch back to using the English menus
this way:<pre>:set langmenu=none</pre>
It is also possible to specify a language:<pre>:set langmenu=nl_NL.ISO_8859-1</pre>
Like above, differences between "-" and "_" matter.  However, upper/lowercase
differences are ignored here.
   The <a href="/neovim-docs-web/en/options#'langmenu'">'langmenu'</a> option must be set before the menus are loaded.  Once the
menus have been defined changing <a href="/neovim-docs-web/en/options#'langmenu'">'langmenu'</a> has no direct effect.  Therefore,
put the command to set <a href="/neovim-docs-web/en/options#'langmenu'">'langmenu'</a> in your vimrc file.
   If you really want to switch menu language while running Vim, you can do it
this way:<pre>:source $VIMRUNTIME/delmenu.vim
:set langmenu=de_DE.ISO_8859-1
:source $VIMRUNTIME/menu.vim</pre>
There is one drawback: All menus that you defined yourself will be gone.  You
will need to redefine them as well.</div>
<div class="old-help-para"><a name="_do-it-yourself-menu-translation"></a><h3 class="help-heading">DO-IT-YOURSELF MENU TRANSLATION</h3></div>
<div class="old-help-para">To see which menu translations are available, look in this directory:</div>
<div class="old-help-para"><div class="help-column_heading">	$VIMRUNTIME/lang</div></div>
<div class="old-help-para">The files are called menu_{language}.vim.  If you don't see the language you
want to use, you can do your own translations.  The simplest way to do this is
by copying one of the existing language files, and change it.
   First find out the name of your language with the ":language" command.  Use
this name, but with all letters made lowercase.  Then copy the file to your
own runtime directory, as found early in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  For example, for Unix
you would do:<pre>:!cp $VIMRUNTIME/lang/menu_ko_kr.euckr.vim ~/.config/nvim/lang/menu_nl_be.iso_8859-1.vim</pre>
You will find hints for the translation in "$VIMRUNTIME/lang/README.txt".</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="45.3"></a><span class="help-tag">45.3</span>  	Using another encoding</span></h2></div>
<div class="old-help-para">Vim guesses that the files you are going to edit are encoded for your
language.  For many European languages this is "latin1".  Then each byte is
one character.  That means there are 256 different characters possible.  For
Asian languages this is not sufficient.  These mostly use a double-byte
encoding, providing for over ten thousand possible characters.  This still
isn't enough when a text is to contain several different languages.  This is
where Unicode comes in.  It was designed to include all characters used in
commonly used languages.  This is the "Super encoding that replaces all
others".  But it isn't used that much yet.
   Fortunately, Vim supports these three kinds of encodings.  And, with some
restrictions, you can use them even when your environment uses another
language than the text.
   Nevertheless, when you only edit files that are in the encoding of your
language, the default should work fine and you don't need to do anything.  The
following is only relevant when you want to edit different languages.</div>
<div class="old-help-para"><a name="_using-unicode-in-the-gui"></a><h3 class="help-heading">USING UNICODE IN THE GUI</h3></div>
<div class="old-help-para">The nice thing about Unicode is that other encodings can be converted to it
and back without losing information.  When you make Vim use Unicode
internally, you will be able to edit files in any encoding.
   Unfortunately, the number of systems supporting Unicode is still limited.
Thus it's unlikely that your language uses it.  You need to tell Vim you want
to use Unicode, and how to handle interfacing with the rest of the system.
   Let's start with the GUI version of Vim, which is able to display Unicode
characters.  This should work:<pre>:set encoding=utf-8
:set guifont=-misc-fixed-medium-r-normal--18-120-100-100-c-90-iso10646-1</pre>
The <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> option tells Vim the encoding of the characters that you use.
This applies to the text in buffers (files you are editing), registers, Vim
script files, etc.  You can regard <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> as the setting for the internals
of Vim.
   This example assumes you have this font on your system.  The name in the
example is for the X Window System.  This font is in a package that is used to
enhance xterm with Unicode support.</div>
<div class="old-help-para">For MS-Windows, some fonts have a limited number of Unicode characters.  Try
using the "Courier New" font.  You can use the Edit/Select Font... menu to
select and try out the fonts available.  Only fixed-width fonts can be used
though.  Example:<pre>:set guifont=courier_new:h12</pre>
If it doesn't work well, try getting a fontpack.</div>
<div class="old-help-para">Now you have told Vim to use Unicode internally and display text with a
Unicode font.</div>
<div class="old-help-para">USING UNICODE IN A UNICODE TERMINAL</div>
<div class="old-help-para">There are terminals that support Unicode directly.  The standard xterm that
comes with XFree86 is one of them.  Let's use that as an example.
   First of all, the xterm must have been compiled with Unicode support.
   Start the xterm with the "-u8" argument.  You might also need so specify a
font.  Example:<pre>xterm -u8 -fn -misc-fixed-medium-r-normal--18-120-100-100-c-90-iso10646-1</pre>
Now you can run Vim inside this terminal.  Set <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> to "utf-8" as
before.  That's all.</div>
<div class="old-help-para"><a name="_using-unicode-in-an-ordinary-terminal"></a><h3 class="help-heading">USING UNICODE IN AN ORDINARY TERMINAL</h3></div>
<div class="old-help-para">Suppose you want to work with Unicode files, but don't have a terminal with
Unicode support.  You can do this with Vim, although characters that are not
supported by the terminal will not be displayed.  The layout of the text
will be preserved.</div>
<div class="old-help-para">Try editing a file with Unicode characters in it.  You will notice that Vim
will put a question mark (or underscore or some other character) in places
where a character should be that the terminal can't display.  Move the cursor
to a question mark and use this command:<pre>ga</pre>
Vim will display a line with the code of the character.  This gives you a hint
about what character it is.  You can look it up in a Unicode table.  You could
actually view a file that way, if you have lots of time at hand.</div>
<div class="old-help-para">	Note:
	Since <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is used for all text inside Vim, changing it makes
	all non-ASCII text invalid.  You will notice this when using registers
	and the <a href="/neovim-docs-web/en/starting#shada-file">shada-file</a> (e.g., a remembered search pattern).  It's
	recommended to set <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> in your vimrc file, and leave it alone.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="45.4"></a><span class="help-tag">45.4</span>  	Editing files with a different encoding</span></h2></div>
<div class="old-help-para">Suppose you have setup Vim to use Unicode, and you want to edit a file that is
in 16-bit Unicode.  Sounds simple, right?  Well, Vim actually uses utf-8
encoding internally, thus the 16-bit encoding must be converted, since there
is a difference between the character set (Unicode) and the encoding (utf-8 or
16-bit).
   Vim will try to detect what kind of file you are editing.  It uses the
encoding names in the <a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a> option.  When using Unicode, the default
value is: "ucs-bom,utf-8,latin1".  This means that Vim checks the file to see
if it's one of these encodings:</div>
<div class="old-help-para">	ucs-bom		File must start with a Byte Order Mark (BOM).  This
			allows detection of 16-bit, 32-bit and utf-8 Unicode
			encodings.
	utf-8		utf-8 Unicode.  This is rejected when a sequence of
			bytes is illegal in utf-8.
	latin1		The good old 8-bit encoding.  Always works.</div>
<div class="old-help-para">When you start editing that 16-bit Unicode file, and it has a BOM, Vim will
detect this and convert the file to utf-8 when reading it.  The <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a>
option (without s at the end) is set to the detected value.  In this case it
is "utf-16le".  That means it's Unicode, 16-bit and little-endian.  This
file format is common on MS-Windows (e.g., for registry files).
   When writing the file, Vim will compare <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> with <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>.  If
they are different, the text will be converted.
   An empty value for <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> means that no conversion is to be done.
Thus the text is assumed to be encoded with <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>.</div>
<div class="old-help-para">If the default <a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a> value is not good for you, set it to the
encodings you want Vim to try.  Only when a value is found to be invalid will
the next one be used.  Putting "latin1" first doesn't work, because it is
never illegal.  An example, to fall back to Japanese when the file doesn't
have a BOM and isn't utf-8:<pre>:set fileencodings=ucs-bom,utf-8,sjis</pre>
See <a href="/neovim-docs-web/en/mbyte#encoding-values">encoding-values</a> for suggested values.  Other values may work as well.
This depends on the conversion available.</div>
<div class="old-help-para"><a name="_forcing-an-encoding"></a><h3 class="help-heading">FORCING AN ENCODING</h3></div>
<div class="old-help-para">If the automatic detection doesn't work you must tell Vim what encoding the
file is.  Example:<pre>:edit ++enc=koi8-r russian.txt</pre>
The "++enc" part specifies the name of the encoding to be used for this file
only.  Vim will convert the file from the specified encoding, Russian in this
example, to <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>.  <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> will also be set to the specified
encoding, so that the reverse conversion can be done when writing the file.
   The same argument can be used when writing the file.  This way you can
actually use Vim to convert a file.  Example:<pre>:write ++enc=utf-8 russian.txt</pre></div>
<div class="old-help-para">	Note:
	Conversion may result in lost characters.  Conversion from an encoding
	to Unicode and back is mostly free of this problem, unless there are
	illegal characters.  Conversion from Unicode to other encodings often
	loses information when there was more than one language in the file.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="45.5"></a><span class="help-tag">45.5</span>  	Entering language text</span></h2></div>
<div class="old-help-para">Computer keyboards don't have much more than a hundred keys.  Some languages
have thousands of characters, Unicode has over hundred thousand.  So how do
you type these characters?
   First of all, when you don't use too many of the special characters, you
can use digraphs.  This was already explained in <a href="/neovim-docs-web/en/usr_24#24.9">24.9</a>.
   When you use a language that uses many more characters than keys on your
keyboard, you will want to use an Input Method (IM).  This requires learning
the translation from typed keys to resulting character.  When you need an IM
you probably already have one on your system.  It should work with Vim like
with other programs.</div>
<div class="old-help-para"><a name="_keymaps"></a><h3 class="help-heading">KEYMAPS</h3></div>
<div class="old-help-para">For some languages the character set is different from latin, but uses a
similar number of characters.  It's possible to map keys to characters.  Vim
uses keymaps for this.
   Suppose you want to type Hebrew.  You can load the keymap like this:<pre>:set keymap=hebrew</pre>
Vim will try to find a keymap file for you.  This depends on the value of
<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>.  If no matching file was found, you will get an error message.</div>
<div class="old-help-para">Now you can type Hebrew in Insert mode.  In Normal mode, and when typing a ":"
command, Vim automatically switches to English.  You can use this command to
switch between Hebrew and English:<pre>CTRL-^</pre>
This only works in Insert mode and Command-line mode.  In Normal mode it does
something completely different (jumps to alternate file).
   The usage of the keymap is indicated in the mode message, if you have the
<a href="/neovim-docs-web/en/options#'showmode'">'showmode'</a> option set.  In the GUI Vim will indicate the usage of keymaps with
a different cursor color.
   You can also change the usage of the keymap with the <a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a> and
<a href="/neovim-docs-web/en/options#'imsearch'">'imsearch'</a> options.</div>
<div class="old-help-para">To see the list of mappings, use this command:<pre>:lmap</pre>
To find out which keymap files are available, in the GUI you can use the
Edit/Keymap menu.  Otherwise you can use this command:<pre>:echo globpath(&amp;rtp, "keymap/*.vim")</pre>
<a name="_do-it-yourself-keymaps"></a><h3 class="help-heading">DO-IT-YOURSELF KEYMAPS</h3></div>
<div class="old-help-para">You can create your own keymap file.  It's not very difficult.  Start with
a keymap file that is similar to the language you want to use.  Copy it to the
"keymap" directory in your runtime directory.  For example, for Unix, you
would use the directory "~/.config/nvim/keymap".
   The name of the keymap file must look like this:</div>
<div class="old-help-para"><div class="help-column_heading">	keymap/{name}.vim</div>or
<div class="help-column_heading">	keymap/{name}_{encoding}.vim</div></div>
<div class="old-help-para"><code>{name}</code> is the name of the keymap.  Chose a name that is obvious, but different
from existing keymaps (unless you want to replace an existing keymap file).
<code>{name}</code> cannot contain an underscore.  Optionally, add the encoding used after
an underscore.  Examples:</div>
<div class="old-help-para"><div class="help-column_heading">	keymap/hebrew.vim</div><div class="help-column_heading">	keymap/hebrew_utf-8.vim</div></div>
<div class="old-help-para">The contents of the file should be self-explanatory.  Look at a few of the
keymaps that are distributed with Vim.  For the details, see <a href="/neovim-docs-web/en/mbyte#mbyte-keymap">mbyte-keymap</a>.</div>
<div class="old-help-para"><a name="_last-resort"></a><h3 class="help-heading">LAST RESORT</h3></div>
<div class="old-help-para">If all other methods fail, you can enter any character with <code>CTRL-V</code>:</div>
<div class="old-help-para"><div class="help-column_heading">	encoding   type			range</div>	8-bit	   <code>CTRL-V</code> 123		decimal 0-255
	8-bit	   <code>CTRL-V</code> x a1		hexadecimal 00-ff
	16-bit     <code>CTRL-V</code> u 013b	hexadecimal 0000-ffff
	31-bit	   <code>CTRL-V</code> U 001303a4	hexadecimal 00000000-7fffffff</div>
<div class="old-help-para">Don't type the spaces.  See <a href="/neovim-docs-web/en/insert#i_CTRL-V_digit">i_CTRL-V_digit</a> for the details.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  