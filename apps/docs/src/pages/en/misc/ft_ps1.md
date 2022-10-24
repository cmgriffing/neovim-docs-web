---
title: Tree Sitter
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="A Windows PowerShell syntax plugin for Vim" class="section-title" href="#A Windows PowerShell syntax plugin for Vim"> Ft Ps1 Txt</a> 

Author:  Peter Provost <https://www.github.com/PProvost>
License: Apache 2.0
URL:     https://github.com/PProvost/vim-ps1

### <a id="ps1-syntax" class="section-title" href="#ps1-syntax">INTRODUCTION</a>

This plugin provides Vim syntax, indent and filetype detection for Windows
PowerShell scripts, modules, and XML configuration files.


### <a id="ps1-about" class="section-title" href="#ps1-about">ABOUT</a>

Grab the latest version or report a bug on GitHub:

https://github.com/PProvost/vim-ps1


### <a id="ps1-folding" class="section-title" href="#ps1-folding">FOLDING</a>

The ps1 syntax file provides syntax folding (see [:syn-fold](#:syn-fold)) for script blocks
and digital signatures in scripts.

When 'foldmethod' is set to "syntax" then function script blocks will be
folded unless you use the following in your .vimrc or before opening a script:
```

:let g:ps1_nofold_blocks = 1

```

Digital signatures in scripts will also be folded unless you use:
```

:let g:ps1_nofold_sig = 1

```

Note: syntax folding might slow down syntax highlighting significantly,
especially for large files.


### <a id="ps1-compiler" class="section-title" href="#ps1-compiler">COMPILER</a>

The powershell `:compiler` script configures [:make](#:make) to execute the script in
PowerShell.

It tries to pick a smart default PowerShell command: `pwsh` if available and
`powershell` otherwise, but you can customize the command:
```

:let g:ps1_makeprg_cmd = '/path/to/pwsh'

```

To configure whether to show the exception type information:
```

:let g:ps1_efm_show_error_categories = 1

```


### <a id="ps1-keyword" class="section-title" href="#ps1-keyword">Keyword Lookup</a>

To look up keywords using PowerShell's Get-Help, press the [K](#K) key. For more
convenient paging, the pager `less` should be installed, which is included in
many Linux distributions and in macOS.

Many other distributions are available for Windows like
https://chocolatey.org/packages/less/. Make sure `less` is in a directory
listed in the `PATH` environment variable, which chocolatey above does.

------------------------------------------------------------------------------
vim:ft=help:

