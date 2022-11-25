---
title:  Pi_zip
layout: ../../layouts/MainLayout.astro
---

  <a name="pi_zip.txt"></a><a name="zip-copyright"></a><h1> Pi_zip</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/pi_zip.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">				+====================+
				| Zip File Interface |
				+====================+</div>
<div class="old-help-para">Author:  Charles E. Campbell  &lt;NcampObell@SdrPchip.AorgM-NOSPAM&gt;
	  (remove NOSPAM from Campbell's email first)
Copyright: Copyright (C) 2005-2015 Charles E Campbell
	The VIM LICENSE (see <a href="uganda.html#copyright">copyright</a>) applies to the files in this
	package, including zipPlugin.vim, zip.vim, and pi_zip.vim.  except use
	"zip.vim" instead of "VIM".  Like anything else that's free, zip.vim
	and its associated files are providedas is* and comes with no
	warranty of any kind, either expressed or implied.  No guarantees of
	merchantability.  No guarantees of suitability for any purpose.  By
	using this plugin, you agree that in no event will the copyright
	holder be liable for any damages resulting from the use of this
	software. Use at your own risk!</div>
<div class="old-help-para"><h2 class="help-heading">1. Contents<span class="help-heading-tags">						<a name="zip"></a><span class="help-tag">zip</span> <a name="zip-contents"></a><span class="help-tag">zip-contents</span></span></h2>   1. Contents................................................|zip-contents|
   2. Usage...................................................|zip-usage|
   3. Additional Extensions...................................|zip-extension|
   4. History.................................................|zip-history|</div>
<div class="old-help-para"><h2 class="help-heading">2. Usage<span class="help-heading-tags">						<a name="zip-usage"></a><span class="help-tag">zip-usage</span> <a name="zip-manual"></a><span class="help-tag">zip-manual</span></span></h2></div>
<div class="old-help-para">   When one edits a.zip file, this plugin will handle displaying a
   contents page.  Select a file to edit by moving the cursor atop
   the desired file, then hit the <code>&lt;return&gt;</code> key.  After editing, one may
   also write to the file.  Currently, one may not make a new file in
   zip archives via the plugin.</div>
<div class="old-help-para">   COMMANDS~
								<a name="zip-x"></a><code class="help-tag-right">zip-x</code>
   x : extract a listed file when the cursor is atop it</div>
<div class="old-help-para">   OPTIONS~</div>
<div class="old-help-para">							<a name="g%3Azip_nomax"></a><code class="help-tag-right">g:zip_nomax</code></div>
<div class="old-help-para">   If this variable exists and is true, the file window will not be
   automatically maximized when opened.</div>
<div class="old-help-para">							<a name="g%3Azip_shq"></a><code class="help-tag-right">g:zip_shq</code>
   Different operating systems may use one or more shells to execute
   commands.  Zip will try to guess the correct quoting mechanism to
   allow spaces and whatnot in filenames; however, if it is incorrectly
   guessing the quote to use for your setup, you may use<pre>g:zip_shq</pre></div>
<div class="old-help-para">  which by default is a single quote under Unix (') and a double quote
   under Windows (").  If you'd rather have no quotes, simply set
   g:zip_shq to the empty string (let g:zip_shq= "") in your &lt;.vimrc&gt;.</div>
<div class="old-help-para">							<a name="g%3Azip_unzipcmd"></a><code class="help-tag-right">g:zip_unzipcmd</code>
   Use this option to specify the program which does the duty of "unzip".
   It's used during browsing. By default:<pre>let g:zip_unzipcmd= "unzip"</pre></div>
<div class="old-help-para">							<a name="g%3Azip_zipcmd"></a><code class="help-tag-right">g:zip_zipcmd</code>
   Use this option to specify the program which does the duty of "zip".
   It's used during the writing (updating) of a file already in a zip
   file; by default:<pre>let g:zip_zipcmd= "zip"</pre></div>
<div class="old-help-para">							<a name="g%3Azip_extractcmd"></a><code class="help-tag-right">g:zip_extractcmd</code>
   This option specifies the program (and any options needed) used to
   extract a file from a zip archive.  By default,<pre>let g:zip_extractcmd= g:zip_unzipcmd</pre></div>
<div class="old-help-para">   PREVENTING LOADING~</div>
<div class="old-help-para">   If for some reason you do not wish to use vim to examine zipped files,
   you may put the following two variables into your &lt;.vimrc&gt; to prevent
   the zip plugin from loading:<pre>let g:loaded_zipPlugin= 1
let g:loaded_zip      = 1</pre></div>
<div class="old-help-para"><h2 class="help-heading">3. Additional Extensions<span class="help-heading-tags">					<a name="zip-extension"></a><span class="help-tag">zip-extension</span></span></h2></div>
<div class="old-help-para">   Apparently there are a number of archivers which generate zip files that
   don't use the .zip extension (.jar, .xpi, etc).  To handle such files,
   place a line in your &lt;.vimrc&gt; file:<pre>au BufReadCmd *.jar,*.xpi call zip#Browse(expand("&lt;amatch&gt;"))</pre></div>
<div class="old-help-para">   One can simply extend this line to accommodate additional extensions that
   should be treated as zip files.</div>
<div class="old-help-para">   Alternatively, one may change <a name="g%3AzipPlugin_ext"></a><code class="help-tag">g:zipPlugin_ext</code> in one's .vimrc.
   Currently (11/30/15) it holds:<pre> let g:zipPlugin_ext= '*.zip,*.jar,*.xpi,*.ja,*.war,*.ear,*.celzip,
\ *.oxt,*.kmz,*.wsz,*.xap,*.docx,*.docm,*.dotx,*.dotm,*.potx,*.potm,
\ *.ppsx,*.ppsm,*.pptx,*.pptm,*.ppam,*.sldx,*.thmx,*.xlam,*.xlsx,*.xlsm,
\ *.xlsb,*.xltx,*.xltm,*.xlam,*.crtx,*.vdw,*.glox,*.gcsx,*.gqsx,*.epub'</pre>
<h2 class="help-heading">4. History<span class="help-heading-tags">							<a name="zip-history"></a><span class="help-tag">zip-history</span> {{{1</span></h2>   v32 Oct 22, 2021 * to avoid an issue with a vim 8.2 patch, zipfile: has
		      been changed to zipfile:// . This often shows up
		      as zipfile:/// with zipped files that are root-based.
   v29 Apr 02, 2017 * (Klartext) reported that an encrypted zip file could
		      opened but the swapfile held unencrypted contents.
		      The solution is to edit the contents of a zip file
		      using the <a href="recover.html#%3Anoswapfile">:noswapfile</a> modifier.
   v28 Oct 08, 2014 * changed the sanity checks for executables to reflect
		      the command actually to be attempted in zip#Read()
		      and zip#Write()
<div class="help-li" style=""> added the extraction of a file capability
       Nov 30, 2015 * added.epub to the <a href="pi_zip.html#g%3AzipPlugin_ext">g:zipPlugin_ext</a> list
       Sep 13, 2016 * added.apk to the <a href="pi_zip.html#g%3AzipPlugin_ext">g:zipPlugin_ext</a> list and
		      sorted the suffices.
   v27 Jul 02, 2013 * sanity check: zipfile must have "PK" as its first
		      two bytes.
</div><div class="help-li" style=""> modified to allow zipfile: entries in quickfix lists
   v26 Nov 15, 2012 * (Jason Spiro) provided a lot of new extensions that
		      are synonyms for .zip
   v25 Jun 27, 2011 * using keepj with unzip -Z
		      (consistent with the -p variant)
</div><div class="help-li" style=""> (Ben Staniford) now uses
			has("win32unix") &amp;&amp; executable("cygpath")
		      before converting to cygwin-style paths
   v24 Jun 21, 2010 * (Cédric Bosdonnat) unzip seems to need its filenames
		      fnameescape'd as well as shellquote'd
</div><div class="help-li" style=""> (Motoya Kurotsu) inserted keepj before 0d to protect
		      jump list
   v17 May 09, 2008 * arno caught a security bug
   v15 Sep 07, 2007 * &amp;shq now used if not the empty string for g:zip_shq
   v14 May 07, 2007 * using b:zipfile instead of w:zipfile to avoid problem
                      when editing alternate file to bring up a zipfile
   v10 May 02, 2006 * now using "redraw then echo" to show messages, instead
                      of "echo and prompt user"
</div><div class="help-li" style=""> g:zip_shq provided to allow for quoting control for the
		      command being passed via :r! ... commands.
   v8 Apr 10, 2006 * Bram Moolenaar reported that he received an error message
                     due to "Pattern not found: ^.*\%0c"; this was caused by
		     stridx finding a Name... at the beginning of the line;
		     zip.vim tried 4,$s/^.*\%0c//, but that doesn't work.
		     Fixed.
   v7 Mar 22, 2006 * escaped some characters that can cause filename handling
                     problems.
   v6 Dec 21, 2005 * writing to files not in directories caused problems -
                     fixed (pointed out by Christian Robinson)
   v5 Nov 22, 2005 * report option workaround installed
   v3 Oct 18, 2005 * <code>&lt;amatch&gt;</code> used instead of <code>&lt;afile&gt;</code> in autocmds
   v2 Sep 16, 2005 * silenced some commands (avoiding hit-enter prompt)
</div><div class="help-li" style="margin-left: 3rem;"> began testing under Windows; works thus far
</div><div class="help-li" style=""> filetype detection fixed
      Nov 03, 2005 * handles writing zipfiles across a network using
                     netrw#NetWrite()
   v1 Sep 15, 2005 * Initial release, had browsing, reading, and writing
</div></div>

  
  