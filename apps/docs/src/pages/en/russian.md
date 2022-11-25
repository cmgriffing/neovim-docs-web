---
title:  Russian
layout: ../../layouts/MainLayout.astro
---

  <a name="russian.txt"></a><a name="russian"></a><h1> Russian</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/russian.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Russian language localization and support in Vim <a name="Russian"></a><code class="help-tag">Russian</code></div>
<div class="old-help-para"><h2 class="help-heading">1. Introduction<span class="help-heading-tags">							<a name="russian-intro"></a><span class="help-tag">russian-intro</span></span></h2></div>
<div class="old-help-para">Russian language is supported perfectly well in Vim.  You can type and view
Russian text just as any other, without the need to tweak the settings.</div>
<div class="old-help-para"><h2 class="help-heading">2. Russian keymaps<span class="help-heading-tags">					       <a name="russian-keymap"></a><span class="help-tag">russian-keymap</span></span></h2></div>
<div class="old-help-para">To switch between languages you can use your system native keyboard switcher,
or use one of the Russian keymaps, included in the Vim distribution.  For
example,
<pre>:set keymap=russian-jcukenwin</pre></div>
<div class="old-help-para">In the latter case, you can switch between languages even if you do not have
system Russian keyboard or independently from a system-wide keyboard settings.
See <a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a>.  You can also map a key to switch between keyboards, if you
choose the latter option.  See <a href="/neovim-docs-web/en/map#%3Amap">:map</a>.</div>
<div class="old-help-para">For your convenience, to avoid switching between keyboards, when you need to
enter Normal mode command, you can also set <a href="/neovim-docs-web/en/options#'langmap'">'langmap'</a> option:
<pre>:set langmap=ФИСВУАПРШОЛДЬТЩЗЙКЫЕГМЦЧНЯ;ABCDEFGHIJKLMNOPQRSTUVWXYZ,
фисвуапршолдьтщзйкыегмцчня;abcdefghijklmnopqrstuvwxyz</pre>
This is in utf-8, you cannot read this if your <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is not utf-8.
You have to type this command in one line, it is wrapped for the sake of
readability.</div>
<div class="old-help-para"><h2 class="help-heading">3. Localization<span class="help-heading-tags">							 <a name="russian-l18n"></a><span class="help-tag">russian-l18n</span></span></h2></div>
<div class="old-help-para">If you wish to use messages, help files, menus and other items translated to
Russian, you will need to install the RuVim Language Pack, available in
different codepages from</div>
<div class="old-help-para">    <a href="https://www.sourceforge.net/projects/ruvim/">https://www.sourceforge.net/projects/ruvim/</a></div>
<div class="old-help-para">After downloading an archive from RuVim project, unpack it into your
$VIMRUNTIME directory.  We recommend using UTF-8 archive.</div>
<div class="old-help-para">In order to use the Russian documentation, make sure you have set the
<a href="/neovim-docs-web/en/options#'helplang'">'helplang'</a> option to "ru".</div>
<div class="old-help-para"><h2 class="help-heading">4. Known issues<span class="help-heading-tags">						       <a name="russian-issues"></a><span class="help-tag">russian-issues</span></span></h2></div>
<div class="old-help-para">-- If you are using Russian message translations in Win32 console, then
   you may see the output produced by "vim --help", "vim --version" commands
   and Win32 console window title appearing in a wrong codepage.  This problem
   is related to a bug in GNU gettext library and may be fixed in the future
   releases of gettext.</div>

  
  