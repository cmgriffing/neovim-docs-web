---
title: News
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> News Txt</a> 

NVIM REFERENCE MANUAL


### <a id="news" class="section-title" href="#news">Notable changes in Nvim 0.9 from 0.8</a>

                                       Type [gO](undefined#gO) to see the table of contents.


## <a id="news-breaking" class="section-title" href="#news-breaking">Breaking Changes</a> 

The following changes may require adaptations in user config or plugins.

• Cscope support is now removed (see [cscope](undefined#cscope) and [nvim-features-removed](/neovim-docs-web/en/neovim/vim_diff#nvim-features-removed)):
  - Commands removed:
    - `:cscope`
    - `:lcscope`
    - `:scscope`
    - `:cstag`
  - Options removed:
    - `cscopepathcomp`
    - `cscopeprg`
    - `cscopequickfix`
    - `cscoperelative`
    - `cscopetag`
    - `cscopetagorder`
    - `cscopeverbose`
  - Eval functions removed:
    - `cscope_connection()`

  Note: support for [ctags](undefined#ctags) remains with no plans to remove.

  See https://github.com/neovim/neovim/pull/20545 for more information.


## <a id="news-features" class="section-title" href="#news-features">New Features</a> 

The following new APIs or features were added.

• 'splitkeep' option to control the scroll behavior of horizontal splits.
• |nvim_select_popupmenu_item()| now supports [cmdline-completion](/neovim-docs-web/en/vim/cmdline#cmdline-completion) popup menu.


## <a id="news-changes" class="section-title" href="#news-changes">Changed Features</a> 

The following changes to existing APIs or features add new behavior.


## <a id="news-removed" class="section-title" href="#news-removed">Removed Features</a> 

The following deprecated functions or APIs were removed.

• `filetype.vim` is removed in favor of [lua-filetype](/neovim-docs-web/en/neovim/lua#lua-filetype)
  (Note that filetype logic and tests still align with Vim, so additions or
  changes need to be contributed there first.)
  See https://github.com/neovim/neovim/pull/20674.


## <a id="news-deprecations" class="section-title" href="#news-deprecations">Deprecations</a> 

The following functions are now deprecated and will be removed in the next
release.



 vim:tw=78:ts=8:sw=2:et:ft=help:norl:

