---
title:  Pi_gzip
layout: ../../layouts/MainLayout.astro
---

  <a name="pi_gzip.txt"></a><a name="gzip"></a><h1> Pi_gzip</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/pi_gzip.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Editing compressed files with Vim <a name="bzip2"></a><code class="help-tag">bzip2</code> <a name="compress"></a><code class="help-tag">compress</code></div>
<div class="old-help-para">1. Autocommands			<a href="pi_gzip.html#gzip-autocmd">gzip-autocmd</a></div>
<div class="old-help-para">The functionality mentioned here is a <a href="usr_05.html#standard-plugin">standard-plugin</a>.
This plugin is only available if <a href="vim_diff.html#'compatible'">'compatible'</a> is not set.
You can avoid loading this plugin by setting the "loaded_gzip" variable:<pre>:let loaded_gzip = 1</pre>
<h2 class="help-heading">1. Autocommands<span class="help-heading-tags">						<a name="gzip-autocmd"></a><span class="help-tag">gzip-autocmd</span></span></h2></div>
<div class="old-help-para">The plugin installs autocommands to intercept reading and writing of files
with these extensions:</div>
<div class="old-help-para"><div class="help-column_heading">	extension	compression</div>.Z		compress (Lempel-Ziv)
.gz		gzip
.bz2		bzip2
.lzma		lzma
.xz		xz
.lz		lzip
.zst		zstd</div>
<div class="old-help-para">That's actually the only thing you need to know.  There are no options.</div>
<div class="old-help-para">After decompressing a file, the filetype will be detected again.  This will
make a file like "foo.c.gz" get the "c" filetype.</div>
<div class="old-help-para">If you have <a href="options.html#'patchmode'">'patchmode'</a> set, it will be appended after the extension for
compression.  Thus editing the patchmode file will not give you the automatic
decompression.  You have to rename the file if you want this.</div>

  
  