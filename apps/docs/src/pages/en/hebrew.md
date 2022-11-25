---
title:  Hebrew
layout: ../../layouts/MainLayout.astro
---

  <a name="hebrew.txt"></a><a name="hebrew"></a><h1> Hebrew</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/hebrew.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Hebrew Language support (options &amp; mapping) for Vim</div>
<div class="old-help-para">The supporting <a href="options.html#'rightleft'">'rightleft'</a> functionality was originally created by Avner
Lottem. &lt;alottem at gmail dot com&gt;  Ron Aaron &lt;ron at ronware dot org&gt; is
currently helping support these features.</div>
<div class="old-help-para">Introduction
<a name="_-hebrew-specific-options-are-'hkmap',-'hkmapp'-'keymap'=hebrew-and-'aleph'."></a><h3 class="help-heading">Hebrew-specific options are <a href="options.html#'hkmap'">'hkmap'</a>, <a href="options.html#'hkmapp'">'hkmapp'</a> <a href="options.html#'keymap'">'keymap'</a>=hebrew and <a href="options.html#'aleph'">'aleph'</a>.</h3>Hebrew-useful options are <a href="options.html#'delcombine'">'delcombine'</a>, <a href="options.html#'allowrevins'">'allowrevins'</a>, <a href="options.html#'revins'">'revins'</a>, <a href="options.html#'rightleft'">'rightleft'</a>
and <a href="options.html#'rightleftcmd'">'rightleftcmd'</a>.</div>
<div class="old-help-para">The <a href="options.html#'rightleft'">'rightleft'</a> mode reverses the display order, so characters are displayed
from right to left instead of the usual left to right.  This is useful
primarily when editing Hebrew or other Middle-Eastern languages.
See <a href="rileft.html#rileft.txt">rileft.txt</a> for further details.</div>
<div class="old-help-para">Details
<a name="_-+-options:"></a><h3 class="help-heading">+  Options:</h3><div class="help-li" style="">  <a href="options.html#'rightleft'">'rightleft'</a> (<a href="options.html#'rl'">'rl'</a>) sets window orientation to right-to-left.  This means
      that the logical text 'ABC' will be displayed as 'CBA', and will start
      drawing at the right edge of the window, not the left edge.
</div><div class="help-li" style="">  <a href="options.html#'hkmap'">'hkmap'</a> (<a href="options.html#'hk'">'hk'</a>) sets keyboard mapping to Hebrew, in insert/replace modes.
</div><div class="help-li" style="">  <a href="options.html#'aleph'">'aleph'</a> (<a href="options.html#'al'">'al'</a>), numeric, holds the decimal code of Aleph, for keyboard
      mapping.
</div><div class="help-li" style="">  <a href="options.html#'hkmapp'">'hkmapp'</a> (<a href="options.html#'hkp'">'hkp'</a>) sets keyboard mapping to '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+hebrew.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/hebrew.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%2B%20%20'hkmap'%20('hk')%20sets%20keyboard%20mapping%20to%20Hebrew%2C%20in%20insert%2Freplace%20modes.%0A%20%20%20%2B%20%20'aleph'%20('al')%2C%20numeric%2C%20holds%20the%20decimal%20code%20of%20Aleph%2C%20for%20keyboard%0A%20%20%20%20%20%20mapping.%0A%20%20%20%2B%20%20'hkmapp'%20('hkp')%20sets%20keyboard%20mapping%20to%20'phonetic%20hebrew'%0A%0A%20%20%20NOTE%3A%20these%20three%20('hkmap'%2C%20'hkmapp'%20and%20'aleph')%20are%20obsolete.%20%20You%20should%0A%09%20use%20%22%3Aset%20keymap%3Dhebrewp%22%20instead.%0D%60%60%60">phonetic</a> hebrew'
</div></div>
<div class="old-help-para">   NOTE: these three (<a href="options.html#'hkmap'">'hkmap'</a>, <a href="options.html#'hkmapp'">'hkmapp'</a> and <a href="options.html#'aleph'">'aleph'</a>) are obsolete.  You should
	 use ":set keymap=hebrewp" instead.</div>
<div class="old-help-para"><div class="help-li" style="">  <a href="options.html#'delcombine'">'delcombine'</a> (<a href="options.html#'deco'">'deco'</a>), boolean, if editing UTF-8 encoded Hebrew, allows
      one to remove the niqud or te`amim by pressing 'x' on a character (with
      associated niqud).
</div></div>
<div class="old-help-para"><div class="help-li" style="">  <a href="options.html#'rightleftcmd'">'rightleftcmd'</a> (<a href="options.html#'rlc'">'rlc'</a>) makes the command-prompt for searches show up on
      the right side.  It only takes effect if the window is <a href="options.html#'rightleft'">'rightleft'</a>.
</div></div>
<div class="old-help-para"><div class="help-li" style="">  Encoding:
</div><div class="help-li" style="margin-left: 3rem;">  Under Unix, ISO 8859-8 encoding (Hebrew letters codes: 224-250).
</div><div class="help-li" style="margin-left: 3rem;">  Under MS DOS, PC encoding (Hebrew letters codes: 128-154).
      These are defaults, that can be overridden using the <a href="options.html#'aleph'">'aleph'</a> option.
</div><div class="help-li" style="margin-left: 3rem;">  You should prefer using UTF8, as it supports the combining-characters
      (<a href="options.html#'deco'">'deco'</a> does nothing if UTF8 encoding is not active).
</div></div>
<div class="old-help-para"><div class="help-li" style="">  Vim arguments:
</div><div class="help-li" style="margin-left: 3rem;">  '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+hebrew.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/hebrew.html%0D%0DContext%3A%0D%0D%60%60%60%0D%20%20%20%20%20%20('deco'%20does%20nothing%20if%20UTF8%20encoding%20is%20not%20active).%0A%0A%2B%20%20Vim%20arguments%3A%0A%20%20%20%2B%20%20'vim%20-H%20file'%20starts%20editing%20a%20Hebrew%20file%2C%20i.e.%20'rightleft'%20and%20'hkmap'%0A%20%20%20%20%20%20are%20set.%0A%0A%2B%20%20Keyboard%3A%0D%60%60%60">vim</a> -H file' starts editing a Hebrew file, i.e. <a href="options.html#'rightleft'">'rightleft'</a> and <a href="options.html#'hkmap'">'hkmap'</a>
      are set.
</div></div>
<div class="old-help-para"><div class="help-li" style="">  Keyboard:
</div><div class="help-li" style="margin-left: 3rem;">  The <a href="options.html#'allowrevins'">'allowrevins'</a> option enables the <code>CTRL-_</code> command in Insert mode and
      in Command-line mode.
</div></div>
<div class="old-help-para"><div class="help-li" style="">  <code>CTRL-_</code> in insert/replace modes toggles <a href="options.html#'revins'">'revins'</a> and <a href="options.html#'hkmap'">'hkmap'</a> as follows:
</div></div>
<div class="old-help-para">      When in rightleft window, <a href="options.html#'revins'">'revins'</a> and <a href="options.html#'nohkmap'">'nohkmap'</a> are toggled, since
      English will likely be inserted in this case.</div>
<div class="old-help-para">      When in norightleft window, <a href="options.html#'revins'">'revins'</a> <a href="options.html#'hkmap'">'hkmap'</a> are toggled, since Hebrew
      will likely be inserted in this case.</div>
<div class="old-help-para">      <code>CTRL-_</code> moves the cursor to the end of the typed text.</div>
<div class="old-help-para"><div class="help-li" style="">  <code>CTRL-_</code> in command mode only toggles keyboard mapping (see Bugs below).
      This setting is independent of <a href="options.html#'hkmap'">'hkmap'</a> option, which only applies to
      insert/replace mode.
</div></div>
<div class="old-help-para">      Note: On some keyboards, <code>CTRL-_</code> is mapped to <code>CTRL-?</code>.</div>
<div class="old-help-para"><div class="help-li" style="">  Keyboard mapping while <a href="options.html#'hkmap'">'hkmap'</a> is set (standard Israeli keyboard):
</div></div>
<div class="old-help-para">	q w e r t y u i o p
	/ ' ק ר א ט ו ן ם פ</div>
<div class="old-help-para">	 a s d f g h j k l ; '
	 ש ד ג כ ע י ח ל ך ף ,</div>
<div class="old-help-para">	  z x c v b n m , . /
	  ז ס ב ה נ מ צ ת ץ .</div>
<div class="old-help-para">      This is also the keymap when 'keymap=hebrew' is set.  The advantage of
      <a href="options.html#'keymap'">'keymap'</a> is that it works properly when using UTF8, e.g. it inserts the
      correct characters; <a href="options.html#'hkmap'">'hkmap'</a> does not.  The <a href="options.html#'keymap'">'keymap'</a> keyboard can also
      insert niqud and te`amim.  To see what those mappings are, look at the
      keymap file 'hebrew.vim' etc.</div>
<div class="old-help-para">Typing backwards</div>
<div class="old-help-para">If the <a href="options.html#'revins'">'revins'</a> (reverse insert) option is set, inserting happens backwards.
This can be used to type Hebrew.  When inserting characters the cursor is not
moved and the text moves rightwards.  A <code>&lt;BS&gt;</code> deletes the character under the
cursor.  <code>CTRL-W</code> and <code>CTRL-U</code> also work in the opposite direction.  <code>&lt;BS&gt;</code>, <code>CTRL-W</code>
and <code>CTRL-U</code> do not stop at the start of insert or end of line, no matter how
the <a href="options.html#'backspace'">'backspace'</a> option is set.</div>
<div class="old-help-para">There is no reverse replace mode (yet).</div>
<div class="old-help-para">If the <a href="options.html#'showmode'">'showmode'</a> option is set, "-- REVERSE INSERT --" will be shown in the
status line when reverse Insert mode is active.</div>
<div class="old-help-para">When the <a href="options.html#'allowrevins'">'allowrevins'</a> option is set, reverse Insert mode can be also entered
via <code>CTRL-_</code>, which has some extra functionality: First, keyboard mapping is
changed according to the window orientation -- if in a left-to-right window,
<a href="options.html#'revins'">'revins'</a> is used to enter Hebrew text, so the keyboard changes to Hebrew
(<a href="options.html#'hkmap'">'hkmap'</a> is set); if in a right-to-left window, <a href="options.html#'revins'">'revins'</a> is used to enter
English text, so the keyboard changes to English (<a href="options.html#'hkmap'">'hkmap'</a> is reset).  Second,
when exiting <a href="options.html#'revins'">'revins'</a> via <code>CTRL-_</code>, the cursor moves to the end of the typed
text (if possible).</div>
<div class="old-help-para">Pasting when in a rightleft window
<a name="_-when-cutting-text-with-the-mouse-and-pasting-it-in-a-rightleft-window"></a><h3 class="help-heading">When cutting text with the mouse and pasting it in a rightleft window</h3>the text will be reversed, because the characters come from the cut buffer
from the left to the right, while inserted in the file from the right to
the left.   In order to avoid it, toggle <a href="options.html#'revins'">'revins'</a> (by typing <code>CTRL-?</code> or <code>CTRL-_</code>)
before pasting.</div>
<div class="old-help-para">Hebrew characters and the <a href="options.html#'isprint'">'isprint'</a> variable
<a name="_-sometimes-hebrew-character-codes-are-in-the-non-printable-range-defined-by"></a><h3 class="help-heading">Sometimes Hebrew character codes are in the non-printable range defined by</h3>the <a href="options.html#'isprint'">'isprint'</a> variable.  For example in the Linux console, the Hebrew font
encoding starts from 128, while the default <a href="options.html#'isprint'">'isprint'</a> variable is @,161-255.
The result is that all Hebrew characters are displayed as ~x.  To solve this
problem, set isprint=@,128-255.</div>

  
  