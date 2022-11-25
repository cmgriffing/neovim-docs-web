---
title:  Nvim
layout: ../../layouts/MainLayout.astro
---

  <a name="nvim.txt"></a><a name="nvim"></a><h1> Nvim</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/nvim.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="help-para">
Nvim <a name="nvim-intro"></a><code class="help-tag">nvim-intro</code>

</div>
<div class="help-para">
Nvim is based on Vim by Bram Moolenaar.

</div>
<div class="help-para">
If you already use Vim see <a href="/neovim-docs-web/en/nvim#nvim-from-vim">nvim-from-vim</a> for a quickstart.
If you are new to Vim, try the 30-minute tutorial:<pre>:Tutor&lt;Enter&gt;</pre>
Nvim is emphatically a fork of Vim, not a clone: compatibility with Vim
(especially editor and Vimscript features) is maintained where possible. See
<a href="/neovim-docs-web/en/vim_diff#vim-differences">vim-differences</a> for the complete reference of differences from Vim.

</div>
<div class="help-para">
<h2 class="help-heading">Transitioning from Vim<span class="help-heading-tags">                          <a name="nvim-from-vim"></a><span class="help-tag">nvim-from-vim</span></span></h2>


</div>
<div class="help-para">
1. To start the transition, create your <a href="/neovim-docs-web/en/starting#init.vim">init.vim</a> (user config) file:<pre>:call mkdir(stdpath('config'), 'p')
:exe 'edit '.stdpath('config').'/init.vim'</pre>
2. Add these contents to the file:<pre>set runtimepath^=~/.vim runtimepath+=~/.vim/after
let &amp;packpath = &amp;runtimepath
source ~/.vimrc</pre>
3. Restart Nvim, your existing Vim config will be loaded.

</div>
<div class="help-para">
See <a href="/neovim-docs-web/en/provider#provider-python">provider-python</a> and <a href="/neovim-docs-web/en/provider#provider-clipboard">provider-clipboard</a> for additional software you
might need to use some features.

</div>
<div class="help-para">
Your Vim configuration might not be entirely Nvim-compatible (see
<a href="/neovim-docs-web/en/vim_diff#vim-differences">vim-differences</a>). For example the <a href="/neovim-docs-web/en/vim_diff#'ttymouse'">'ttymouse'</a> option was removed from Nvim,
because mouse support is always enabled if possible. If you use the same
<a href="/neovim-docs-web/en/starting#vimrc">vimrc</a> for Vim and Nvim you could guard <a href="/neovim-docs-web/en/vim_diff#'ttymouse'">'ttymouse'</a> in your configuration
like so:
<pre>if !has('nvim')
    set ttymouse=xterm2
endif</pre>
And for Nvim-specific configuration, you can do this:
<pre>if has('nvim')
    tnoremap &lt;Esc&gt; &lt;C-\&gt;&lt;C-n&gt;
endif</pre>
For a more granular approach use <a href="/neovim-docs-web/en/builtin#exists()">exists()</a>:
<pre>if exists(':tnoremap')
    tnoremap &lt;Esc&gt; &lt;C-\&gt;&lt;C-n&gt;
endif</pre>
Now you should be able to explore Nvim more comfortably. Check <a href="/neovim-docs-web/en/vim_diff#nvim-features">nvim-features</a>
for more information.

</div>
<div class="help-para">
                                                        <a name="portable-config"></a><code class="help-tag-right">portable-config</code>
Because Nvim follows the XDG <a href="/neovim-docs-web/en/starting#base-directories">base-directories</a> standard, configuration on
Windows is stored in ~/AppData instead of ~/.config. But you can still share
the same Nvim configuration on all of your machines, by creating
~/AppData/Local/nvim/init.vim containing just this line:<pre>source ~/.config/nvim/init.vim</pre>

</div>

  
  