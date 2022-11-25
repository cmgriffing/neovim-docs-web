---
title:  Support
layout: ../../layouts/MainLayout.astro
---

  <a name="support.txt"></a><a name="support"></a><h1> Support</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/support.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Support</div>
<div class="old-help-para"><h2 class="help-heading">Supported platforms<span class="help-heading-tags">					 <a name="supported-platforms"></a><span class="help-tag">supported-platforms</span></span></h2></div>
<div class="old-help-para"><code>System</code>          <code>Tier</code>      <code>Versions</code>                  <code>Tested versions</code>
Linux            1      &gt;= 2.6.32, glibc &gt;= 2.12     Ubuntu 22.04
macOS (Intel)    1      &gt;= 10.15                     macOS 12
Windows 64-bit   1      &gt;= 8                         Windows Server 2019
FreeBSD          1      &gt;= 10                        FreeBSD 13
macOS (M1)       2      &gt;= 10.15
OpenBSD          2      &gt;= 7
MinGW            2      MinGW-w64</div>
<div class="old-help-para"><div class="help-column_heading">Support types</div></div>
<div class="old-help-para"><div class="help-li" style=""> Tier 1: Officially supported and tested with CI. Any contributed patch
  MUST NOT break such systems.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Tier 2: Officially supported, but not necessarily tested with CI. These
  systems are maintained to the best of our ability, without being a top
  priority.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Tier 3: Not tested and no guarantees, but may work.
</div></div>
<div class="old-help-para"><div class="help-column_heading">Adding support for a new platform</div></div>
<div class="old-help-para">IMPORTANT: Before attempting to add support for a new platform please open
an issue about it for discussion.</div>
<div class="old-help-para"><a name="_-common"></a><h2 class="help-heading">Common</h2></div>
<div class="old-help-para">Some common notes when adding support for new platforms:</div>
<div class="old-help-para">Cmake is the only supported build system. The platform must be buildable with cmake.</div>
<div class="old-help-para">All functionality related to the new platform must be implemented in its own
file inside <code>src/nvim/os</code> unless it's already done in a common file, in which
case adding an <code>#ifdef</code> is fine.</div>

  
  