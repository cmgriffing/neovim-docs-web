---
title: Pi Tar
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Last change: 2020 Jan 07" class="section-title" href="#Last change: 2020 Jan 07">*Pi_Tar.Txt*	for Vim Version 8.2.</a> 

+====================+
		       [ Tar File Interface ](# Tar File Interface )
		       +====================+

Author:  Charles E. Campbell  <NcampObell@SdrPchip.AorgM-NOSPAM
```	  (remove NOSPAM from Campbell's email first)
### <a id="tar-copyright" class="section-title" href="#tar-copyright">Copyright 2005-2017:</a>
	The VIM LICENSE (see [copyright](#copyright)) applies to the files in this
	package, including tarPlugin.vim, tar.vim, and pi_tar.txt.  Like
	anything else that's except use "tar.vim" instead of "VIM".  Like
	anything else that's free, tar.vim and its associated files are
	provided *as is* and comes with no warranty of any kind, either
	expressed or implied.  No guarantees of merchantability.  No
	guarantees of suitability for any purpose.  By using this plugin, you
	agree that in no event will the copyright holder be liable for any
	damages resulting from the use of this software. Use at your own risk!


## <a id="tar tar-contents" class="section-title" href="#tar tar-contents">1. Contents</a> 

1. Contents..................................................[tar-contents](#tar-contents)
   2. Usage.....................................................[tar-usage](#tar-usage)
   3. Options...................................................[tar-options](#tar-options)
   4. History...................................................[tar-history](#tar-history)


## <a id="tar-usage tar-manual" class="section-title" href="#tar-usage tar-manual">2. Usage</a> 

### <a id="When one edits a .tar file, this plugin will handle displaying a" class="section-title" href="#When one edits a .tar file, this plugin will handle displaying a">Note:</a>
   contents page.  Select a file to edit by moving the cursor atop
   the desired file, then hit the <return> key.  After editing, one may
   also write to the file.  Currently, one may not make a new file in
   tar archives via the plugin.

### <a id=":Vimuntar" class="section-title" href="#:Vimuntar">Note:</a>
   VIMUNTAR~

   :Vimuntar [vimhome]

	This command copies, if necessary, the tarball to the .vim or vimfiles
	directory using the first writable directory in the ['runtimepath'](#'runtimepath')
	when no [vimhome] is specified.  Otherwise, the [vimhome] argument
	allows the user to specify that directory, instead.

	The copy is done using the command in *g:tar_copycmd* , which is
		cp   for cygwin, unix, macunix
		copy for windows (32, 95, 64, 16)
	The extraction is done with the command specified with
	*g:tar_extractcmd* , which by default is
		"tar -xf"
```

### <a id=":TarDiff" class="section-title" href="#:TarDiff">Note:</a>
   DIFFERENCING SUPPORT~

   :TarDiff [filename]

	This command will attempt to show the differences between the tarball
	version of a file and the associated file on the system.  In order to
	find that file on the system, the script uses the path associated with
	the file mentioned in the tarball.  If the current directory is not
	correct for that path, :TarDiff will fail to find the associated file.

	If the [filename] is given, that that filename (and path) will be used
	to specify the associated file.


   PREVENTING LOADING~

   If for some reason you do not wish to use vim to examine tar'd files,
   you may put the following two variables into your <.vimrc> to prevent
   the tar plugin from loading: 
```
	let g:loaded_tarPlugin= 1
	let g:loaded_tar      = 1
```


## <a id="tar-options" class="section-title" href="#tar-options">3. Options</a> 

These options are variables that one may change, typically in one's
   <.vimrc> file.
                         Default
   Variable               Value   Explanation
### <a id="g:tar_browseoptions" class="section-title" href="#g:tar_browseoptions">Note:</a>
### <a id="g:tar_readoptions" class="section-title" href="#g:tar_readoptions">Note:</a>
### <a id="g:tar_cmd" class="section-title" href="#g:tar_cmd">Note:</a>
### <a id="g:tar_nomax" class="section-title" href="#g:tar_nomax">Note:</a>
### <a id="g:tar_secure" class="section-title" href="#g:tar_secure">Note:</a>
					"--"s will be used to prevent unwanted
					option expansion in tar commands.
					Please be sure that your tar command
					accepts "--"; Posix compliant tar
					utilities do accept them.
				  if not exists:
				  	The tar plugin will reject any tar
					files or member files that begin with
					"-"
				  Not all tar's support the "--" which is why
				  it isn't default.
### <a id="g:tar_writeoptions" class="section-title" href="#g:tar_writeoptions">Note:</a>


## <a id="tar-history" class="section-title" href="#tar-history">4. History</a> 

v31	Apr 02, 2017	* (klartext) reported that browsing encrypted
				  files in a zip archive created unencrypted
				  swap files.  I am applying a similar fix
				  used on zip.vim to tar.vim: new buffers
				  are opened with [:noswapfile](#:noswapfile).
### <a id="May 16, 2017	 When the mouse option isn't empty, the" class="section-title" href="#May 16, 2017	 When the mouse option isn't empty, the">Note:</a>
				  leftmouse can be used to select a file
				  in the tar-file listing.
	v30	Apr 22, 2014	* .tgz files are ambiguous: they may have been
				  compressed with either gzip or bzip2.  Tar.vim
				  disambiguates by using unix's "file" command.
### <a id="Feb 18, 2016	 Changed =~ to =~# where appropriate" class="section-title" href="#Feb 18, 2016	 Changed =~ to =~# where appropriate">Note:</a>
### <a id="Feb 18, 2017	 Now also permits xz decompression" class="section-title" href="#Feb 18, 2017	 Now also permits xz decompression">Note:</a>
	v28	Jun 23, 2011	* a few more decompression options (tbz tb2 txz)
	v27	May 31, 2011	* moved cygwin detection before g:tar_copycmd
				  handling
### <a id=" inserted additional [:keepj](#:keepj) modifiers" class="section-title" href="# inserted additional [:keepj](#:keepj) modifiers">Note:</a>
### <a id=" changed silent" class="section-title" href="# changed silent">Note:</a>
	v26	Aug 09, 2010	* uses buffer-local instead of window variables
				  to hold tarfile name
### <a id=" inserted keepj before 0d to protect jump list" class="section-title" href="# inserted keepj before 0d to protect jump list">Note:</a>
	v25	Jun 19, 2010	* (Jan Steffens) added support for xz
				  compression
	v24	Apr 07, 2009	* :Untarvim command implemented
### <a id="Sep 28, 2009	 Added lzma support" class="section-title" href="#Sep 28, 2009	 Added lzma support">Note:</a>
	v22	Aug 08, 2008	* security fixes
	v16	Jun 06, 2008	* tarfile:: used instead of tarfile: when
				  editing files inside tarballs.  Fixes a
				  problem with tarballs called things like
				  c:\abc.tar. (tnx to Bill McCarthy)
	v14	May 09, 2008	* arno caught a security bug
### <a id="May 28, 2008	 various security improvements." class="section-title" href="#May 28, 2008	 various security improvements.">Note:</a>
				  patch 299 which provides the fnameescape()
				  function
### <a id="May 30, 2008	 allows one to view .gz and .bz2 files that" class="section-title" href="#May 30, 2008	 allows one to view .gz and .bz2 files that">Note:</a>
### <a id="are in .tar files." class="section-title" href="#are in .tar files.">Note:</a>
	v12	Sep 07, 2007	* &shq now used if not the empty string for
				  g:tar_shq
	v10	May 02, 2006	* now using "redraw then echo" to show messages,
				  instead of "echo and prompt user"
	v9	May 02, 2006	* improved detection of masquerading as tar file
	v8	May 02, 2006	* allows editing of files that merely masquerade
				  as tar files
	v7	Mar 22, 2006	* work on making tar plugin work across network
### <a id="Mar 27, 2006	 g:tar_cmd now available for users to change" class="section-title" href="#Mar 27, 2006	 g:tar_cmd now available for users to change">Note:</a>
				  the name of the tar program to be used.  By
				  default, of course, it's "tar".
	v6	Dec 21, 2005	* writing to files not in directories caused
				  problems - fixed (pointed out by
				  Christian Robinson)
	v5	Nov 22, 2005	* report option workaround installed
	v3	Sep 16, 2005	* handles writing files in an archive back to
				  the archive
### <a id="Oct 18, 2005	 <amatch> used instead of <afile> in autocmds" class="section-title" href="#Oct 18, 2005	 <amatch> used instead of <afile> in autocmds">Note:</a>
### <a id="Oct 18, 2005	 handles writing to compressed archives" class="section-title" href="#Oct 18, 2005	 handles writing to compressed archives">Note:</a>
### <a id="Nov 03, 2005	 handles writing tarfiles across a network" class="section-title" href="#Nov 03, 2005	 handles writing tarfiles across a network">Note:</a>
				  using netrw#NetWrite()
### <a id=" converted to use Vim7's new autoload feature" class="section-title" href="# converted to use Vim7's new autoload feature">	v2</a>
				  by Bram Moolenaar
	v1	(original)	* Michael Toren
				  (see http://michael.toren.net/code/)


## <a id="" class="section-title" href="#">Vim Tw 78 Ts 8 Noet Ft Help</a> 



