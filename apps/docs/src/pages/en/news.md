---
title:  News
layout: ../../layouts/MainLayout.astro
---

  <a name="news.txt"></a><a name="news"></a><h1> News</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/news.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="help-para">
Notable changes in Nvim 0.9 from 0.8

</div>
<div class="help-para">
<h2 class="help-heading">BREAKING CHANGES<span class="help-heading-tags">                                                <a name="news-breaking"></a><span class="help-tag">news-breaking</span></span></h2>


</div>
<div class="help-para">
The following changes may require adaptations in user config or plugins.

</div>
<div class="help-para">
<div class="help-li" style=""> Cscope support is now removed (see <a href="/neovim-docs-web/en/vim_diff#cscope">cscope</a> and <a href="/neovim-docs-web/en/vim_diff#nvim-features-removed">nvim-features-removed</a>):
</div><div class="help-li" style="margin-left: 3rem;"> Commands removed:
</div><div class="help-li" style="margin-left: 4rem;"> <code>:cscope</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>:lcscope</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>:scscope</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>:cstag</code>
</div><div class="help-li" style="margin-left: 3rem;"> Options removed:
</div><div class="help-li" style="margin-left: 4rem;"> <code>cscopepathcomp</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>cscopeprg</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>cscopequickfix</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>cscoperelative</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>cscopetag</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>cscopetagorder</code>
</div><div class="help-li" style="margin-left: 4rem;"> <code>cscopeverbose</code>
</div><div class="help-li" style="margin-left: 3rem;"> Eval functions removed:
</div><div class="help-li" style="margin-left: 4rem;"> <code>cscope_connection()</code>
</div>
</div>
<div class="help-para">
  Note: support for <a href="/neovim-docs-web/en/tagsrch#ctags">ctags</a> remains with no plans to remove.

</div>
<div class="help-para">
  See <a href="https://github.com/neovim/neovim/pull/20545">https://github.com/neovim/neovim/pull/20545</a> for more information.

</div>
<div class="help-para">
<h2 class="help-heading">NEW FEATURES<span class="help-heading-tags">                                                    <a name="news-features"></a><span class="help-tag">news-features</span></span></h2>


</div>
<div class="help-para">
The following new APIs or features were added.

</div>
<div class="help-para">
<div class="help-li" style=""> <a href="/neovim-docs-web/en/lua#vim.secure.read()">vim.secure.read()</a> reads a file and prompts the user if it should be
  trusted and, if so, returns the file's contents.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> When using Nvim inside tmux 3.2 or later, the default clipboard provider
  will now copy to the system clipboard. <a href="/neovim-docs-web/en/provider#provider-clipboard">provider-clipboard</a>
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'splitkeep'">'splitkeep'</a> option to control the scroll behavior of horizontal splits.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> <a href="/neovim-docs-web/en/api#nvim_select_popupmenu_item()">nvim_select_popupmenu_item()</a> now supports <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a> popup menu.
</div>
</div>
<div class="help-para">
<div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'diffopt'">'diffopt'</a> now includes a <code>linematch</code> option to enable a second-stage diff
  on individual hunks to provide much more accurate diffs. This option is also
  available to <a href="/neovim-docs-web/en/lua#vim.diff()">vim.diff()</a>
</div>
</div>
<div class="help-para">
  See <a href="https://github.com/neovim/neovim/pull/14537">https://github.com/neovim/neovim/pull/14537</a>.

</div>
<div class="help-para">
<h2 class="help-heading">CHANGED FEATURES<span class="help-heading-tags">                                                 <a name="news-changes"></a><span class="help-tag">news-changes</span></span></h2>


</div>
<div class="help-para">
The following changes to existing APIs or features add new behavior.

</div>
<div class="help-para">
<div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'exrc'">'exrc'</a> is no longer marked deprecated.
</div>
</div>
<div class="help-para">
<h2 class="help-heading">REMOVED FEATURES<span class="help-heading-tags">                                                 <a name="news-removed"></a><span class="help-tag">news-removed</span></span></h2>


</div>
<div class="help-para">
The following deprecated functions or APIs were removed.

</div>
<div class="help-para">
<div class="help-li" style=""> <code>filetype.vim</code> is removed in favor of <a href="/neovim-docs-web/en/lua#lua-filetype">lua-filetype</a>
  (Note that filetype logic and tests still align with Vim, so additions or
  changes need to be contributed there first.)
  See <a href="https://github.com/neovim/neovim/pull/20674">https://github.com/neovim/neovim/pull/20674</a>.
</div>
</div>
<div class="help-para">
<h2 class="help-heading">DEPRECATIONS<span class="help-heading-tags">                                                <a name="news-deprecations"></a><span class="help-tag">news-deprecations</span></span></h2>


</div>
<div class="help-para">
The following functions are now deprecated and will be removed in the next
release.

</div>

  
  