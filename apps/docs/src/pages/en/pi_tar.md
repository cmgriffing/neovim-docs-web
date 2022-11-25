---
title:  Pi_tar
layout: ../../layouts/MainLayout.astro
---

  <a name="pi_tar.txt"></a><a name="tar-copyright"></a><h1> Pi_tar</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/pi_tar.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		       +====================+
		       | Tar File Interface |
		       +====================+</div>
<div class="old-help-para">Author:  Charles E. Campbell  &lt;NcampObell@SdrPchip.AorgM-NOSPAM&gt;
	  (remove NOSPAM from Campbell's email first)
Copyright 2005-2017:
	The VIM LICENSE (see <a href="uganda.html#copyright">copyright</a>) applies to the files in this
	package, including tarPlugin.vim, tar.vim, and pi_tar.txt.  Like
	anything else that's except use "tar.vim" instead of "VIM".  Like
	anything else that's free, tar.vim and its associated files are
	providedas is* and comes with no warranty of any kind, either
	expressed or implied.  No guarantees of merchantability.  No
	guarantees of suitability for any purpose.  By using this plugin, you
	agree that in no event will the copyright holder be liable for any
	damages resulting from the use of this software. Use at your own risk!</div>
<div class="old-help-para"><h2 class="help-heading">1. Contents<span class="help-heading-tags">					<a name="tar"></a><span class="help-tag">tar</span> <a name="tar-contents"></a><span class="help-tag">tar-contents</span></span></h2>   1. Contents..................................................|tar-contents|
   2. Usage.....................................................|tar-usage|
   3. Options...................................................|tar-options|
   4. History...................................................|tar-history|</div>
<div class="old-help-para"><h2 class="help-heading">2. Usage<span class="help-heading-tags">					<a name="tar-usage"></a><span class="help-tag">tar-usage</span> <a name="tar-manual"></a><span class="help-tag">tar-manual</span></span></h2></div>
<div class="old-help-para">   When one edits a.tar file, this plugin will handle displaying a
   contents page.  Select a file to edit by moving the cursor atop
   the desired file, then hit the <code>&lt;return&gt;</code> key.  After editing, one may
   also write to the file.  Currently, one may not make a new file in
   tar archives via the plugin.</div>
<div class="old-help-para">						<a name="%3AVimuntar"></a><code class="help-tag-right">:Vimuntar</code>
   VIMUNTAR~</div>
<div class="old-help-para">   :Vimuntar [vimhome]</div>
<div class="old-help-para">	This command copies, if necessary, the tarball to the .vim or vimfiles
	directory using the first writable directory in the <a href="options.html#'runtimepath'">'runtimepath'</a>
	when no [vimhome] is specified.  Otherwise, the [vimhome] argument
	allows the user to specify that directory, instead.</div>
<div class="old-help-para">	The copy is done using the command in <a name="g%3Atar_copycmd"></a><code class="help-tag">g:tar_copycmd</code> , which is<pre>cp   for cygwin, unix, macunix
copy for windows (32, 95, 64, 16)</pre></div>
<div class="old-help-para">	The extraction is done with the command specified with
	<a name="g%3Atar_extractcmd"></a><code class="help-tag">g:tar_extractcmd</code> , which by default is<pre>"tar -xf"</pre></div>
<div class="old-help-para">						<a name="%3ATarDiff"></a><code class="help-tag-right">:TarDiff</code>
   DIFFERENCING SUPPORT~</div>
<div class="old-help-para">   :TarDiff [filename]</div>
<div class="old-help-para">	This command will attempt to show the differences between the tarball
	version of a file and the associated file on the system.  In order to
	find that file on the system, the script uses the path associated with
	the file mentioned in the tarball.  If the current directory is not
	correct for that path, :TarDiff will fail to find the associated file.</div>
<div class="old-help-para">	If the [filename] is given, that that filename (and path) will be used
	to specify the associated file.</div>
<div class="old-help-para">   PREVENTING LOADING~</div>
<div class="old-help-para">   If for some reason you do not wish to use vim to examine tar'd files,
   you may put the following two variables into your &lt;.vimrc&gt; to prevent
   the tar plugin from loading:<pre>let g:loaded_tarPlugin= 1
let g:loaded_tar      = 1</pre></div>
<div class="old-help-para"><h2 class="help-heading">3. Options<span class="help-heading-tags">						<a name="tar-options"></a><span class="help-tag">tar-options</span></span></h2></div>
<div class="old-help-para">   These options are variables that one may change, typically in one's
   &lt;.vimrc&gt; file.
			 Default
   Variable		  Value   Explanation
   <a name="g%3Atar_browseoptions"></a><code class="help-tag">g:tar_browseoptions</code>    "Ptf"   used to get a list of contents
   <a name="g%3Atar_readoptions"></a><code class="help-tag">g:tar_readoptions</code>  	  "OPxf"  used to extract a file from a tarball
   <a name="g%3Atar_cmd"></a><code class="help-tag">g:tar_cmd</code>  		  "tar"   the name of the tar program
   <a name="g%3Atar_nomax"></a><code class="help-tag">g:tar_nomax</code>  	    0	  if true, file window will not be maximized
   <a name="g%3Atar_secure"></a><code class="help-tag">g:tar_secure</code>  	  undef   if exists:
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
   <a name="g%3Atar_writeoptions"></a><code class="help-tag">g:tar_writeoptions</code>  	  "uf"    used to update/replace a file</div>
<div class="old-help-para"><h2 class="help-heading">4. History<span class="help-heading-tags">						<a name="tar-history"></a><span class="help-tag">tar-history</span></span></h2></div>
<div class="old-help-para">	v31	Apr 02, 2017	* (klartext) reported that browsing encrypted
				  files in a zip archive created unencrypted
				  swap files.  I am applying a similar fix
				  used on zip.vim to tar.vim: new buffers
				  are opened with <a href="recover.html#%3Anoswapfile">:noswapfile</a>.
		May 16, 2017	* When the mouse option isn't empty, the
				  leftmouse can be used to select a file
				  in the tar-file listing.
	v30	Apr 22, 2014	* .tgz files are ambiguous: they may have been
				  compressed with either gzip or bzip2.  Tar.vim
				  disambiguates by using unix's "file" command.
		Feb 18, 2016	* Changed =~ to =~# where appropriate
		Feb 18, 2017	* Now also permits xz decompression
	v28	Jun 23, 2011	* a few more decompression options (tbz tb2 txz)
	v27	May 31, 2011	* moved cygwin detection before g:tar_copycmd
				  handling
<div class="help-li" style=""> inserted additional <a href="motion.html#%3Akeepj">:keepj</a> modifiers
</div><div class="help-li" style=""> changed silent  to  sil!  (<a href="various.html#%3Asilent">:silent</a>)
	v26	Aug 09, 2010	* uses buffer-local instead of window variables
				  to hold tarfile name
</div><div class="help-li" style=""> inserted keepj before 0d to protect jump list
	v25	Jun 19, 2010	* (Jan Steffens) added support for xz
				  compression
	v24	Apr 07, 2009	* :Untarvim command implemented
		Sep 28, 2009	* Added lzma support
	v22	Aug 08, 2008	* security fixes
	v16	Jun 06, 2008	* tarfile:: used instead of tarfile: when
				  editing files inside tarballs.  Fixes a
				  problem with tarballs called things like
				  c:\abc.tar. (tnx to Bill McCarthy)
	v14	May 09, 2008	* arno caught a security bug
		May 28, 2008	* various security improvements.  Now requires
				  patch 299 which provides the fnameescape()
				  function
		May 30, 2008	* allows one to view *.gz and *.bz2 files that
				  are in.tar files.
	v12	Sep 07, 2007	* &amp;shq now used if not the empty string for
				  g:tar_shq
	v10	May 02, 2006	* now using "redraw then echo" to show messages,
				  instead of "echo and prompt user"
	v9	May 02, 2006	* improved detection of masquerading as tar file
	v8	May 02, 2006	* allows editing of files that merely masquerade
				  as tar files
	v7	Mar 22, 2006	* work on making tar plugin work across network
		Mar 27, 2006	* g:tar_cmd now available for users to change
				  the name of the tar program to be used.  By
				  default, of course, it's "tar".
	v6	Dec 21, 2005	* writing to files not in directories caused
				  problems - fixed (pointed out by
				  Christian Robinson)
	v5	Nov 22, 2005	* report option workaround installed
	v3	Sep 16, 2005	* handles writing files in an archive back to
				  the archive
		Oct 18, 2005	* <code>&lt;amatch&gt;</code> used instead of <code>&lt;afile&gt;</code> in autocmds
		Oct 18, 2005	* handles writing to compressed archives
		Nov 03, 2005	* handles writing tarfiles across a network
				  using netrw#NetWrite()
	v2			* converted to use Vim7's new autoload feature
				  by Bram Moolenaar
	v1	(original)	* Michael Toren
				  (see <a href="http://michael.toren.net/code/">http://michael.toren.net/code/</a>)
</div></div>

  
  