---
title:  Ft_ps1
layout: ../../layouts/MainLayout.astro
---

  <a name="ft_ps1.txt"></a><a name="ps1-syntax"></a><h1> Ft_ps1</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/ft_ps1.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Author:  Peter Provost &lt;https://www.github.com/PProvost&gt;
License: Apache 2.0
URL:     <a href="https://github.com/PProvost/vim-ps1">https://github.com/PProvost/vim-ps1</a></div>
<div class="old-help-para"><h3 class="help-heading">INTRODUCTION</h3></div>
<div class="old-help-para">This plugin provides Vim syntax, indent and filetype detection for Windows
PowerShell scripts, modules, and XML configuration files.</div>
<div class="old-help-para"><h3 class="help-heading">ABOUT<span class="help-heading-tags">                                                           <a name="ps1-about"></a><span class="help-tag">ps1-about</span></span></h3></div>
<div class="old-help-para">Grab the latest version or report a bug on GitHub:</div>
<div class="old-help-para"><a href="https://github.com/PProvost/vim-ps1">https://github.com/PProvost/vim-ps1</a></div>
<div class="old-help-para"><h3 class="help-heading">FOLDING<span class="help-heading-tags">                                                         <a name="ps1-folding"></a><span class="help-tag">ps1-folding</span></span></h3></div>
<div class="old-help-para">The ps1 syntax file provides syntax folding (see <a href="syntax.html#%3Asyn-fold">:syn-fold</a>) for script blocks
and digital signatures in scripts.</div>
<div class="old-help-para">When <a href="options.html#'foldmethod'">'foldmethod'</a> is set to "syntax" then function script blocks will be
folded unless you use the following in your .vimrc or before opening a script:<pre>:let g:ps1_nofold_blocks = 1</pre></div>
<div class="old-help-para">Digital signatures in scripts will also be folded unless you use:<pre>:let g:ps1_nofold_sig = 1</pre></div>
<div class="old-help-para">Note: syntax folding might slow down syntax highlighting significantly,
especially for large files.</div>
<div class="old-help-para"><h3 class="help-heading">COMPILER<span class="help-heading-tags">                                                        <a name="ps1-compiler"></a><span class="help-tag">ps1-compiler</span></span></h3></div>
<div class="old-help-para">The powershell <code>:compiler</code> script configures <a href="quickfix.html#%3Amake">:make</a> to execute the script in
PowerShell.</div>
<div class="old-help-para">It tries to pick a smart default PowerShell command: <code>pwsh</code> if available and
<code>powershell</code> otherwise, but you can customize the command:<pre>:let g:ps1_makeprg_cmd = '/path/to/pwsh'</pre></div>
<div class="old-help-para">To configure whether to show the exception type information:<pre>:let g:ps1_efm_show_error_categories = 1</pre></div>
<div class="old-help-para"><h3 class="help-heading">KEYWORD LOOKUP<span class="help-heading-tags">                                                 <a name="ps1-keyword"></a><span class="help-tag">ps1-keyword</span></span></h3></div>
<div class="old-help-para">To look up keywords using PowerShell's Get-Help, press the <a href="various.html#K">K</a> key. For more
convenient paging, the pager <code>less</code> should be installed, which is included in
many Linux distributions and in macOS.</div>
<div class="old-help-para">Many other distributions are available for Windows like
<a href="https://chocolatey.org/packages/less/">https://chocolatey.org/packages/less/</a>. Make sure <code>less</code> is in a directory
listed in the <code>PATH</code> environment variable, which chocolatey above does.</div>

  
  