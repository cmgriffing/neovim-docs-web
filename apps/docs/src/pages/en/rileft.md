---
title:  Rileft
layout: ../../layouts/MainLayout.astro
---

  <a name="rileft.txt"></a><a name="rileft"></a><h1> Rileft</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/rileft.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">					  updated by Nadim Shaikli</div>
<div class="old-help-para">Right to Left display mode for Vim</div>
<div class="old-help-para">These functions were originally created by Avner Lottem:
   E-mail: alottem@iil.intel.com
   Phone:  +972-4-8307322</div>
<div class="old-help-para">Introduction
<a name="_-some-languages-such-as-arabic,-farsi,-hebrew-(among-others)-require-the"></a><h3 class="help-heading">Some languages such as Arabic, Farsi, Hebrew (among others) require the</h3>ability to display their text from right-to-left.  Files in those languages
are stored conventionally and the right-to-left requirement is only a
function of the display engine (per the Unicode specification).  In
right-to-left oriented files the characters appear on the screen from
right to left.</div>
<div class="old-help-para">Bidirectionality (or bidi for short) is what Unicode offers as a full
solution to these languages.  Bidi offers the user the ability to view
both right-to-left as well as left-to-right text properly at the same time
within the same window.  Vim currently, due to simplicity, does not offer
bidi and is merely opting to present a functional means to display/enter/use
right-to-left languages.  An older hybrid solution in which direction is
encoded for every character (or group of characters) are not supported either
as this kind of support is out of the scope of a simple addition to an
existing editor (and it's not sanctioned by Unicode either).</div>
<div class="old-help-para">Highlights
----------
o  Editing left-to-right files as in the original Vim, no change.</div>
<div class="old-help-para">o  Viewing and editing files in right-to-left windows.  File orientation
   is per window, so it is possible to view the same file in right-to-left
   and left-to-right modes, simultaneously.  (Useful for editing mixed files
   in which both right-to-left and left-to-right text exist).</div>
<div class="old-help-para">o  Compatibility to the original Vim.  Almost all features work in
   right-to-left mode (see Bugs below).</div>
<div class="old-help-para">o  Backing from reverse insert mode to the correct place in the file
   (if possible).</div>
<div class="old-help-para">o  No special terminal with right-to-left capabilities is required.  The
   right-to-left changes are completely hardware independent.</div>
<div class="old-help-para">o  Many languages use and require right-to-left support.  These languages
   can quite easily be supported given the inclusion of their required
   keyboard mappings and some possible minor code change.  Some of the
   current supported languages include - <a href="/neovim-docs-web/en/arabic#arabic.txt">arabic.txt</a> and <a href="/neovim-docs-web/en/hebrew#hebrew.txt">hebrew.txt</a>.</div>
<div class="old-help-para">Of Interest...
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+rileft.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/rileft.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%0AOf%20Interest...%0A--------------%0A%0Ao%20%20Invocations%0A%20%20%20-----------%0A%20%20%20%2B%20'rightleft'%20('rl')%20sets%20window%20orientation%20to%20right-to-left.%0D%60%60%60">--------------</a></div>
<div class="old-help-para">o  Invocations
   -----------
<div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'rightleft'">'rightleft'</a> (<a href="/neovim-docs-web/en/options#'rl'">'rl'</a>) sets window orientation to right-to-left.
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'delcombine'">'delcombine'</a> (<a href="/neovim-docs-web/en/options#'deco'">'deco'</a>), boolean, if editing UTF-8 encoded languages,
     allows one to remove a composing character which gets superimposed
     on those that preceded them (some languages require this).
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'rightleftcmd'">'rightleftcmd'</a> (<a href="/neovim-docs-web/en/options#'rlc'">'rlc'</a>) sets the command-line within certain modes
     (such as search) to be utilized in right-to-left orientation as well.
</div></div>
<div class="old-help-para">o  Typing backwards					<a name="ins-reverse"></a><code class="help-tag-right">ins-reverse</code>
   ----------------
   In lieu of using the full-fledged <a href="/neovim-docs-web/en/options#'rightleft'">'rightleft'</a> option, one can opt for
   reverse insertion.  When the <a href="/neovim-docs-web/en/options#'revins'">'revins'</a> (reverse insert) option is set,
   inserting happens backwards.  This can be used to type right-to-left
   text.  When inserting characters the cursor is not moved and the text
   moves rightwards.  A <code>&lt;BS&gt;</code> deletes the character under the cursor.
   <code>CTRL-W</code> and <code>CTRL-U</code> also work in the opposite direction.  <code>&lt;BS&gt;</code>, <code>CTRL-W</code>
   and <code>CTRL-U</code> do not stop at the start of insert or end of line, no matter
   how the <a href="/neovim-docs-web/en/options#'backspace'">'backspace'</a> option is set.</div>
<div class="old-help-para">   There is no reverse replace mode (yet).</div>
<div class="old-help-para">   If the <a href="/neovim-docs-web/en/options#'showmode'">'showmode'</a> option is set, "-- REVERSE INSERT --" will be shown
   in the status line when reverse Insert mode is active.</div>
<div class="old-help-para">o  Pasting when in a rightleft window
   ----------------------------------
   When cutting text with the mouse and pasting it in a rightleft window
   the text will be reversed, because the characters come from the cut buffer
   from the left to the right, while inserted in the file from the right to
   the left.   In order to avoid it, toggle <a href="/neovim-docs-web/en/options#'revins'">'revins'</a> before pasting.</div>
<div class="old-help-para">Bugs
----
o  Does not handle <code>CTRL-A</code> and <code>CTRL-X</code> commands (add and subtract) correctly
   when in rightleft window.</div>
<div class="old-help-para">o  Does not support reverse insert and rightleft modes on the command-line.
   However, functionality of the editor is not reduced, because it is
   possible to enter mappings, abbreviations and searches typed from the
   left to the right on the command-line.</div>
<div class="old-help-para">o  Somewhat slower in right-to-left mode, because right-to-left motion is
   emulated inside Vim, not by the controlling terminal.</div>
<div class="old-help-para">o  When both <a href="/neovim-docs-web/en/options#'rightleft'">'rightleft'</a> and <a href="/neovim-docs-web/en/options#'revins'">'revins'</a> are on: <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> does not work.
   Lines do not wrap at all; you just get a single, long line.</div>
<div class="old-help-para">o  There is no full bidirectionality (bidi) support.</div>

  
  