---
title: Pi Gzip
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Pi Gzip Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="gzip bzip2 compress" class="section-title" href="#gzip bzip2 compress">Editing compressed files with Vim</a>

1. Autocommands			[gzip-autocmd](/neovim-docs-web/en/pi/pi_gzip#gzip-autocmd)

The functionality mentioned here is a [standard-plugin](undefined#standard-plugin).
This plugin is only available if 'compatible' is not set.
You can avoid loading this plugin by setting the "loaded_gzip" variable:
	:let loaded_gzip = 1


## <a id="gzip-autocmd" class="section-title" href="#gzip-autocmd">1. Autocommands</a> 

The plugin installs autocommands to intercept reading and writing of files
with these extensions:

	extension	compression ~
	*.Z		compress (Lempel-Ziv)
	*.gz		gzip
	*.bz2		bzip2
	*.lzma		lzma
	*.xz		xz
	*.lz		lzip
	*.zst		zstd

That's actually the only thing you need to know.  There are no options.

After decompressing a file, the filetype will be detected again.  This will
make a file like "foo.c.gz" get the "c" filetype.

If you have 'patchmode' set, it will be appended after the extension for
compression.  Thus editing the patchmode file will not give you the automatic
decompression.  You have to rename the file if you want this.


## <a id="" class="section-title" href="#">Vim Tw 78 Ts 8 Noet Ft Help Norl</a> 



