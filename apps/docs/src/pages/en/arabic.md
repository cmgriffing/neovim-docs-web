---
title:  Arabic
layout: ../../layouts/MainLayout.astro
---

  <a name="arabic.txt"></a><a name="Arabic"></a><h1> Arabic</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/arabic.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Arabic Language support (options &amp; mappings) for Vim</div>
<div class="old-help-para">These functions have been created by Nadim Shaikli &lt;nadim-at-arabeyes.org&gt;</div>
<div class="old-help-para">It is best to view this file with these settings within VIM's GUI:<pre>:set encoding=utf-8
:set arabicshape</pre>
<a name="_-introduction"></a><h3 class="help-heading">Introduction</h3></div>
<div class="old-help-para">Arabic is a rather demanding language in which a number of special
features are required.	Characters are right-to-left oriented and
ought to appear as such on the screen (i.e. from right to left).
Arabic also requires shaping of its characters, meaning the same
character has a different visual form based on its relative location
within a word (initial, medial, final or stand-alone).	Arabic also
requires two different forms of combining and the ability, in
certain instances, to either superimpose up to two characters on top
of another (composing) or the actual substitution of two characters
into one (combining).  Lastly, to display Arabic properly one will
require not only ISO-8859-6 (U+0600-U+06FF) fonts, but will also
require Presentation Form-B (U+FE70-U+FEFF) fonts both of which are
subsets within a so-called ISO-10646-1 font.</div>
<div class="old-help-para">The commands, prompts and help files are not in Arabic, therefore
the user interface remains the standard Vi interface.</div>
<div class="old-help-para"><a name="_-highlights"></a><h3 class="help-heading">Highlights</h3></div>
<div class="old-help-para">o  Editing left-to-right files as in the original Vim hasn't changed.</div>
<div class="old-help-para">o  Viewing and editing files in right-to-left windows.	 File
   orientation is per window, so it is possible to view the same
   file in right-to-left and left-to-right modes, simultaneously.</div>
<div class="old-help-para">o  No special terminal with right-to-left capabilities is required.
   The right-to-left changes are completely hardware independent.
   Only Arabic fonts are necessary.</div>
<div class="old-help-para">o  Compatible with the original Vim.   Almost all features work in
   right-to-left mode (there are liable to be bugs).</div>
<div class="old-help-para">o  Changing keyboard mapping and reverse insert modes using a single
   command.</div>
<div class="old-help-para">o  Toggling complete Arabic support via a single command.</div>
<div class="old-help-para">o  While in Arabic mode, numbers are entered from left to right.  Upon
   entering a none number character, that character will be inserted
   just into the left of the last number.</div>
<div class="old-help-para">o  Arabic keymapping on the command line in reverse insert mode.</div>
<div class="old-help-para">o  Proper Bidirectional functionality is possible given Vim is
   started within a Bidi capable terminal emulator.</div>
<div class="old-help-para"><h3 class="help-heading">Arabic Fonts<span class="help-heading-tags">						<a name="arabicfonts"></a><span class="help-tag">arabicfonts</span></span></h3></div>
<div class="old-help-para">Vim requires monospaced fonts of which there are many out there.
Arabic requires ISO-8859-6 as well as Presentation Form-B fonts
(without Form-B, Arabic will _NOT_ be usable).	It is highly
recommended that users search for so-called 'ISO-10646-1' fonts.
Do an Internet search or check www.arabeyes.org for further
info on where to obtain the necessary Arabic fonts.</div>
<div class="old-help-para"><a name="_-font-installation"></a><h3 class="help-heading">Font Installation</h3></div>
<div class="old-help-para">o  Installation of fonts for X Window systems (Unix/Linux)</div>
<div class="old-help-para">   Depending on your system, copy your_ARABIC_FONT file into a
   directory of your choice.  Change to the directory containing
   the Arabic fonts and execute the following commands:</div>
<div class="old-help-para">     %	mkfontdir
     %	xset +fp path_name_of_arabic_fonts_directory</div>
<div class="old-help-para"><a name="_-usage"></a><h3 class="help-heading">Usage</h3></div>
<div class="old-help-para">Prior to the actual usage of Arabic within Vim, a number of settings
need to be accounted for and invoked.</div>
<div class="old-help-para">o  Setting the Arabic fonts</div>
<div class="old-help-para"><div class="help-li" style="">  For Vim GUI set the <a href="options.html#'guifont'">'guifont'</a> to your_ARABIC_FONT.  This is done
      by entering the following command in the Vim window.
&gt;
		:set guifont=your_ARABIC_FONT
</div></div>
<div class="old-help-para">      NOTE: the string 'your_ARABIC_FONT' is used to denote a complete
	    font name akin to that used in Linux/Unix systems.
	    (e.g. -misc-fixed-medium-r-normal--20-200-75-75-c-100-iso10646-1)</div>
<div class="old-help-para">      You can append the <a href="options.html#'guifont'">'guifont'</a> set command to your vimrc file
      in order to get the same above noted results.  In other words,
      you can include ':set guifont=your_ARABIC_FONT' to your vimrc
      file.</div>
<div class="old-help-para"><div class="help-li" style="">  Under the X Window environment, you can also start Vim with
      '-fn your_ARABIC_FONT' option.
</div></div>
<div class="old-help-para">o  Setting the appropriate character Encoding
   To enable the correct Arabic encoding the following command needs
   to be appended,
<pre>:set encoding=utf-8</pre></div>
<div class="old-help-para">   to your vimrc file (entering the command manually into your Vim
   window is highly discouraged).  In short, include ':set
   encoding=utf-8' to your vimrc file.</div>
<div class="old-help-para">   Attempts to use Arabic without UTF-8 will result the following
   warning message,</div>
<div class="old-help-para">								<a name="W17"></a><code class="help-tag-right">W17</code><pre>Arabic requires UTF-8, do ':set encoding=utf-8'</pre>
o  Enable Arabic settings [short-cut]</div>
<div class="old-help-para">   In order to simplify and streamline things, you can either invoke
   Vim with the command-line option,</div>
<div class="old-help-para">     % vim -A my_utf8_arabic_file ...</div>
<div class="old-help-para">   or enable <a href="options.html#'arabic'">'arabic'</a> via the following command within Vim
<pre>:set arabic</pre></div>
<div class="old-help-para">   The two above noted possible invocations are the preferred manner
   in which users are instructed to proceed.  Barring an enabled <a href="options.html#'termbidi'">'termbidi'</a>
   setting, both command options:</div>
<div class="old-help-para">     1. set the appropriate keymap
     2. enable the deletion of a single combined pair character
     3. enable rightleft    mode
     4. enable rightleftcmd mode (affecting the command-line)
     5. enable arabicshape  mode (do visual character alterations)</div>
<div class="old-help-para">   You may also append the command to your vimrc file and simply
   include ':set arabic' to it.</div>
<div class="old-help-para">   You are also capable of disabling Arabic support via
<pre>:set noarabic</pre></div>
<div class="old-help-para">   which resets everything that the command had enabled without touching
   the global settings as they could affect other possible open buffers.
   In short the <a href="options.html#'noarabic'">'noarabic'</a> command,</div>
<div class="old-help-para">     1. resets to the alternate keymap
     2. disables the deletion of a single combined pair character
     3. disables rightleft mode</div>
<div class="old-help-para">   NOTE: the <a href="options.html#'arabic'">'arabic'</a> command takes into consideration <a href="options.html#'termbidi'">'termbidi'</a> for
	 possible external bi-directional (bidi) support from the
	 terminal ("mlterm" for instance offers such support).
	 <a href="options.html#'termbidi'">'termbidi'</a>, if available, is superior to rightleft support
	 and its support is preferred due to its level of offerings.
	 <a href="options.html#'arabic'">'arabic'</a> when <a href="options.html#'termbidi'">'termbidi'</a> is enabled only sets the keymap.</div>
<div class="old-help-para">	 For vertical window isolation while setting <a href="options.html#'termbidi'">'termbidi'</a> an LTR
	 vertical separator like "l" or "𝖨" may be used.  It may also be
	 hidden by changing its color to the foreground color:<pre>:set fillchars=vert:l
:hi WinSeparator ctermbg=White</pre></div>
<div class="old-help-para">	Note that this is a workaround, not a proper solution.</div>
<div class="old-help-para">   If, on the other hand, you'd like to be verbose and explicit and
   are opting not to use the <a href="options.html#'arabic'">'arabic'</a> short-cut command, here's what
   is needed (i.e. if you use ':set arabic' you can skip this section) -</div>
<div class="old-help-para"><div class="help-li" style="">  Arabic Keymapping Activation
</div></div>
<div class="old-help-para">      To activate the Arabic keymap (i.e. to remap your English/Latin
      keyboard to look-n-feel like a standard Arabic one), set the
      <a href="options.html#'keymap'">'keymap'</a> command to "arabic".  This is done by entering
<pre>:set keymap=arabic</pre></div>
<div class="old-help-para">      in your VIM window.  You can also append the <a href="options.html#'keymap'">'keymap'</a> set command to
      your vimrc file.  In other words, you can include ':set keymap=arabic'
      to your vimrc file.</div>
<div class="old-help-para">      To turn toggle (or switch) your keymapping between Arabic and the
      default mapping (English), it is advised that users use the '<code>CTRL-^</code>'
      key press while in insert (or add/replace) mode.	The command-line
      will display your current mapping by displaying an "Arabic" string
      next to your insertion mode (e.g. -- INSERT Arabic --) indicating
      your current keymap.</div>
<div class="old-help-para"><div class="help-li" style="">  Arabic deletion of a combined pair character
</div></div>
<div class="old-help-para">      By default Vim has the <a href="options.html#'delcombine'">'delcombine'</a> option disabled.  This option
      allows the deletion of ALEF in a LAM_ALEF (LAA) combined character
      and still retain the LAM (i.e. it reverts to treating the combined
      character as its natural two characters form -- this also pertains
      to harakat and their combined forms).  You can enable this option
      by entering
<pre>:set delcombine</pre></div>
<div class="old-help-para">      in our VIM window.  You can also append the <a href="options.html#'delcombine'">'delcombine'</a> set command
      to your vimrc file.  In other words, you can include ':set delcombine'
      to your vimrc file.</div>
<div class="old-help-para"><div class="help-li" style="">  Arabic right-to-left Mode
</div></div>
<div class="old-help-para">      By default VIM starts in Left-to-right mode.  <a href="options.html#'rightleft'">'rightleft'</a> is the
      command that allows one to alter a window's orientation - that can
      be accomplished via,</div>
<div class="old-help-para"><div class="help-li" style=""> Toggling between left-to-right and right-to-left modes is
	accomplished through ':set rightleft' and ':set norightleft'.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> While in Left-to-right mode, enter ':set rl' in the command line
	(<a href="options.html#'rl'">'rl'</a> is the abbreviation for rightleft).
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Put the ':set rl' line in your vimrc file to start Vim in
        right-to-left mode permanently.
</div></div>
<div class="old-help-para"><div class="help-li" style="">  Arabic right-to-left command-line Mode
</div></div>
<div class="old-help-para">      For certain commands the editing can be done in right-to-left mode.
      Currently this is only applicable to search commands.</div>
<div class="old-help-para">      This is controlled with the <a href="options.html#'rightleftcmd'">'rightleftcmd'</a> option.  The default is
      "search", which means that windows in which <a href="options.html#'rightleft'">'rightleft'</a> is set will
      edit search commands in right-left mode.	To disable this behavior,
<pre>:set rightleftcmd=</pre></div>
<div class="old-help-para">      To enable right-left editing of search commands again,
<pre>:set rightleftcmd&amp;</pre></div>
<div class="old-help-para"><div class="help-li" style="">  Arabic Shaping Mode
</div></div>
<div class="old-help-para">      To activate the required visual characters alterations (shaping,
      composing, combining) which the Arabic language requires, enable
      the <a href="options.html#'arabicshape'">'arabicshape'</a> command.  This is done by entering
<pre>:set arabicshape</pre></div>
<div class="old-help-para">      in our VIM window.  You can also append the <a href="options.html#'arabicshape'">'arabicshape'</a> set
      command to your vimrc file.  In other words, you can include
      ':set arabicshape' to your vimrc file.</div>
<div class="old-help-para"><h3 class="help-heading">Keymap/Keyboard<span class="help-heading-tags">						<a name="arabickeymap"></a><span class="help-tag">arabickeymap</span></span></h3></div>
<div class="old-help-para">The character/letter encoding used in Vim is the standard UTF-8.
It is widely discouraged that any other encoding be used or even
attempted.</div>
<div class="old-help-para">Note: UTF-8 is an all encompassing encoding and as such is
      the only supported (and encouraged) encoding with
      regard to Arabic (all other proprietary encodings
      should be discouraged and frowned upon).</div>
<div class="old-help-para">o  Keyboard</div>
<div class="old-help-para"><div class="help-li" style="">  <code>CTRL-^</code> in insert/replace mode toggles between Arabic/Latin mode
</div></div>
<div class="old-help-para"><div class="help-li" style="">  Keyboard mapping is based on the Microsoft's Arabic keymap (the
      de facto standard in the Arab world):<pre>+---------------------------------------------------------------------+
|!   |@   |#   |$   |%   |^   |&amp;   |*   |(   |)   |_   |+   ||   |~  ّ |
|1 ١ |2 ٢ |3 ٣ |4 ٤ |5 ٥ |6 ٦ |7 ٧ |8 ٨ |9 ٩ |0 ٠ |-   |=   |\   |` ذ |
+---------------------------------------------------------------------+
     |Q  َ |W  ً |E  ُ |R  ٌ |T لإ |Y إ |U ` |I ÷ |O x |P ؛ |{ &lt; |} &gt; |
     |q ض |w ص |e ث |r ق |t ف |y غ |u ع |i ه |o خ |p ح |[ ج |] د |
     +-----------------------------------------------------------+
       |A  ِ |S  ٍ |D [ |F ] |G لأ |H أ |J ـ |K ، |L / |:   |"   |
       |a ش |s س |d ي |f ب |g ل |h ا |j ت |k ن |l م |; ك |' ط |
       +------------------------------------------------------+
         |Z ~ |X  ْ |C { |V } |B لآ |N آ |M ' |&lt; , |&gt; . |? ؟ |
         |z ئ |x ء |c ؤ |v ر |b لا |n ى |m ة |, و |. ز |/ ظ |
         +-------------------------------------------------+</pre>
</div></div>
<div class="old-help-para"><a name="_-restrictions"></a><h3 class="help-heading">Restrictions</h3></div>
<div class="old-help-para">o  Vim in its GUI form does not currently support Bi-directionality
   (i.e. the ability to see both Arabic and Latin intermixed within
   the same line).</div>
<div class="old-help-para"><a name="_-known-bugs"></a><h3 class="help-heading">Known Bugs</h3></div>
<div class="old-help-para">There is one known minor bug,</div>
<div class="old-help-para"> 1. If you insert a haraka (e.g. Fatha (U+064E)) after a LAM (U+0644)
    and then insert an ALEF (U+0627), the appropriate combining will
    not happen due to the sandwiched haraka resulting in something
    that will NOT be displayed correctly.</div>
<div class="old-help-para">    WORK-AROUND: Don't include harakats between LAM and ALEF combos.
		 In general, don't anticipate to see correct visual
		 representation with regard to harakats and LAM+ALEF
		 combined characters (even those entered after both
		 characters).  The problem noted is strictly a visual
		 one, meaning saving such a file will contain all the
		 appropriate info/encodings - nothing is lost.</div>
<div class="old-help-para">No other bugs are known to exist.</div>

  
  