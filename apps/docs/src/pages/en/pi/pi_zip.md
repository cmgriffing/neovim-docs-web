---
title: Tree Sitter
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="" class="section-title" href="#">*Pi_Zip.Txt*	Nvim</a> 

+====================+
[ Zip File Interface ](# Zip File Interface )
+====================+

Author:  Charles E. Campbell  <NcampObell@SdrPchip.AorgM-NOSPAM>
(remove NOSPAM from Campbell's email first)
### <a id="zip-copyright" class="section-title" href="#zip-copyright">Copyright: Copyright (C) 2005-2015 Charles E Campbell</a>
The VIM LICENSE (see [copyright](#copyright)) applies to the files in this
package, including zipPlugin.vim, zip.vim, and pi_zip.vim.  except use
"zip.vim" instead of "VIM".  Like anything else that's free, zip.vim
and its associated files are provided *as is* and comes with no
warranty of any kind, either expressed or implied.  No guarantees of
merchantability.  No guarantees of suitability for any purpose.  By
using this plugin, you agree that in no event will the copyright
holder be liable for any damages resulting from the use of this
software. Use at your own risk!


## <a id="zip zip-contents" class="section-title" href="#zip zip-contents">1. Contents</a> 

1. Contents................................................[zip-contents](#zip-contents)
2. Usage...................................................[zip-usage](#zip-usage)
3. Additional Extensions...................................[zip-extension](#zip-extension)
4. History.................................................[zip-history](#zip-history)


## <a id="zip-usage zip-manual" class="section-title" href="#zip-usage zip-manual">2. Usage</a> 

### <a id="When one edits a .zip file, this plugin will handle displaying a" class="section-title" href="#When one edits a .zip file, this plugin will handle displaying a">Note:</a>
contents page.  Select a file to edit by moving the cursor atop
the desired file, then hit the <return> key.  After editing, one may
also write to the file.  Currently, one may not make a new file in
zip archives via the plugin.

COMMANDS~
### <a id="zip-x" class="section-title" href="#zip-x">Note:</a>
x : extract a listed file when the cursor is atop it

OPTIONS~

### <a id="g:zip_nomax" class="section-title" href="#g:zip_nomax">Note:</a>

If this variable exists and is true, the file window will not be
automatically maximized when opened.

### <a id="g:zip_shq" class="section-title" href="#g:zip_shq">Note:</a>
Different operating systems may use one or more shells to execute
commands.  Zip will try to guess the correct quoting mechanism to
allow spaces and whatnot in filenames; however, if it is incorrectly
guessing the quote to use for your setup, you may use
```
g:zip_shq

```
  which by default is a single quote under Unix (') and a double quote
under Windows (").  If you'd rather have no quotes, simply set
g:zip_shq to the empty string (let g:zip_shq= "") in your <.vimrc>.

### <a id="g:zip_unzipcmd" class="section-title" href="#g:zip_unzipcmd">Note:</a>
Use this option to specify the program which does the duty of "unzip".
It's used during browsing. By default:
```
let g:zip_unzipcmd= "unzip"

```

### <a id="g:zip_zipcmd" class="section-title" href="#g:zip_zipcmd">Note:</a>
Use this option to specify the program which does the duty of "zip".
It's used during the writing (updating) of a file already in a zip
file; by default:
```
let g:zip_zipcmd= "zip"

```

### <a id="g:zip_extractcmd" class="section-title" href="#g:zip_extractcmd">Note:</a>
This option specifies the program (and any options needed) used to
extract a file from a zip archive.  By default,
```
let g:zip_extractcmd= g:zip_unzipcmd

```

PREVENTING LOADING~

If for some reason you do not wish to use vim to examine zipped files,
you may put the following two variables into your <.vimrc> to prevent
the zip plugin from loading:
```

let g:loaded_zipPlugin= 1
let g:loaded_zip      = 1

```



## <a id="zip-extension" class="section-title" href="#zip-extension">3. Additional Extensions</a> 

Apparently there are a number of archivers which generate zip files that
don't use the .zip extension (.jar, .xpi, etc).  To handle such files,
place a line in your <.vimrc> file:
```

au BufReadCmd *.jar,*.xpi call zip#Browse(expand("<amatch>"))

```

One can simply extend this line to accommodate additional extensions that
should be treated as zip files.

### <a id="Alternatively, one may change g:zipPlugin_ext in one's .vimrc." class="section-title" href="#Alternatively, one may change g:zipPlugin_ext in one's .vimrc.">Note:</a>
Currently (11/30/15) it holds:
```

let g:zipPlugin_ext= '*.zip,*.jar,*.xpi,*.ja,*.war,*.ear,*.celzip,
### <a id="\ .oxt,.kmz,.wsz,.xap,.docx,.docm,.dotx,.dotm,.potx,.potm," class="section-title" href="#\ .oxt,.kmz,.wsz,.xap,.docx,.docm,.dotx,.dotm,.potx,.potm,">Note:</a>
### <a id="\ .ppsx,.ppsm,.pptx,.pptm,.ppam,.sldx,.thmx,.xlam,.xlsx,.xlsm," class="section-title" href="#\ .ppsx,.ppsm,.pptx,.pptm,.ppam,.sldx,.thmx,.xlam,.xlsx,.xlsm,">Note:</a>
### <a id="\ .xlsb,.xltx,.xltm,.xlam,.crtx,.vdw,.glox,.gcsx,.gqsx,.epub'" class="section-title" href="#\ .xlsb,.xltx,.xltm,.xlam,.crtx,.vdw,.glox,.gcsx,.gqsx,.epub'">Note:</a>


## <a id="zip-history {{{1" class="section-title" href="#zip-history {{{1">4. History</a> 

### <a id="v32 Oct 22, 2021  to avoid an issue with a vim 8.2 patch, zipfile: has" class="section-title" href="#v32 Oct 22, 2021  to avoid an issue with a vim 8.2 patch, zipfile: has">Note:</a>
been changed to zipfile:// . This often shows up
as zipfile:/// with zipped files that are root-based.
### <a id="v29 Apr 02, 2017  (Klartext) reported that an encrypted zip file could" class="section-title" href="#v29 Apr 02, 2017  (Klartext) reported that an encrypted zip file could">Note:</a>
opened but the swapfile held unencrypted contents.
The solution is to edit the contents of a zip file
using the [:noswapfile](#:noswapfile) modifier.
### <a id="v28 Oct 08, 2014  changed the sanity checks for executables to reflect" class="section-title" href="#v28 Oct 08, 2014  changed the sanity checks for executables to reflect">Note:</a>
the command actually to be attempted in zip#Read()
and zip#Write()
### <a id=" added the extraction of a file capability" class="section-title" href="# added the extraction of a file capability">Note:</a>
### <a id="Nov 30, 2015  added .epub to the [g:zipPlugin_ext| list" class="section-title" href="#Nov 30, 2015  added .epub to the |g:zipPlugin_ext](#g:zipPlugin_ext| list" class="section-title" href="#Nov 30, 2015  added .epub to the |g:zipPlugin_ext) list">Note:</a>
### <a id="Sep 13, 2016  added .apk to the [g:zipPlugin_ext| list and" class="section-title" href="#Sep 13, 2016  added .apk to the |g:zipPlugin_ext](#g:zipPlugin_ext| list and" class="section-title" href="#Sep 13, 2016  added .apk to the |g:zipPlugin_ext) list and">Note:</a>
sorted the suffices.
### <a id="v27 Jul 02, 2013  sanity check: zipfile must have "PK" as its first" class="section-title" href="#v27 Jul 02, 2013  sanity check: zipfile must have "PK" as its first">Note:</a>
two bytes.
### <a id=" modified to allow zipfile: entries in quickfix lists" class="section-title" href="# modified to allow zipfile: entries in quickfix lists">Note:</a>
### <a id="v26 Nov 15, 2012  (Jason Spiro) provided a lot of new extensions that" class="section-title" href="#v26 Nov 15, 2012  (Jason Spiro) provided a lot of new extensions that">Note:</a>
are synonyms for .zip
### <a id="v25 Jun 27, 2011  using keepj with unzip -Z" class="section-title" href="#v25 Jun 27, 2011  using keepj with unzip -Z">Note:</a>
(consistent with the -p variant)
### <a id=" (Ben Staniford) now uses" class="section-title" href="# (Ben Staniford) now uses">Note:</a>
has("win32unix") && executable("cygpath")
before converting to cygwin-style paths
### <a id="v24 Jun 21, 2010  (Cédric Bosdonnat) unzip seems to need its filenames" class="section-title" href="#v24 Jun 21, 2010  (Cédric Bosdonnat) unzip seems to need its filenames">Note:</a>
fnameescape'd as well as shellquote'd
### <a id=" (Motoya Kurotsu) inserted keepj before 0d to protect" class="section-title" href="# (Motoya Kurotsu) inserted keepj before 0d to protect">Note:</a>
jump list
### <a id="v17 May 09, 2008  arno caught a security bug" class="section-title" href="#v17 May 09, 2008  arno caught a security bug">Note:</a>
### <a id="v15 Sep 07, 2007  &shq now used if not the empty string for g:zip_shq" class="section-title" href="#v15 Sep 07, 2007  &shq now used if not the empty string for g:zip_shq">Note:</a>
### <a id="v14 May 07, 2007  using b:zipfile instead of w:zipfile to avoid problem" class="section-title" href="#v14 May 07, 2007  using b:zipfile instead of w:zipfile to avoid problem">Note:</a>
when editing alternate file to bring up a zipfile
### <a id="v10 May 02, 2006  now using "redraw then echo" to show messages, instead" class="section-title" href="#v10 May 02, 2006  now using "redraw then echo" to show messages, instead">Note:</a>
of "echo and prompt user"
### <a id=" g:zip_shq provided to allow for quoting control for the" class="section-title" href="# g:zip_shq provided to allow for quoting control for the">Note:</a>
command being passed via :r! ... commands.
### <a id="v8 Apr 10, 2006  Bram Moolenaar reported that he received an error message" class="section-title" href="#v8 Apr 10, 2006  Bram Moolenaar reported that he received an error message">Note:</a>
### <a id="due to "Pattern not found: ^.\%0c"; this was caused by" class="section-title" href="#due to "Pattern not found: ^.\%0c"; this was caused by">Note:</a>
stridx finding a Name... at the beginning of the line;
### <a id="zip.vim tried 4,$s/^.\%0c//, but that doesn't work." class="section-title" href="#zip.vim tried 4,$s/^.\%0c//, but that doesn't work.">Note:</a>
Fixed.
### <a id="v7 Mar 22, 2006  escaped some characters that can cause filename handling" class="section-title" href="#v7 Mar 22, 2006  escaped some characters that can cause filename handling">Note:</a>
problems.
### <a id="v6 Dec 21, 2005  writing to files not in directories caused problems -" class="section-title" href="#v6 Dec 21, 2005  writing to files not in directories caused problems -">Note:</a>
fixed (pointed out by Christian Robinson)
### <a id="v5 Nov 22, 2005  report option workaround installed" class="section-title" href="#v5 Nov 22, 2005  report option workaround installed">Note:</a>
### <a id="v3 Oct 18, 2005  <amatch> used instead of <afile> in autocmds" class="section-title" href="#v3 Oct 18, 2005  <amatch> used instead of <afile> in autocmds">Note:</a>
### <a id="v2 Sep 16, 2005  silenced some commands (avoiding hit-enter prompt)" class="section-title" href="#v2 Sep 16, 2005  silenced some commands (avoiding hit-enter prompt)">Note:</a>
### <a id=" began testing under Windows; works thus far" class="section-title" href="# began testing under Windows; works thus far">Note:</a>
### <a id=" filetype detection fixed" class="section-title" href="# filetype detection fixed">Note:</a>
### <a id="Nov 03, 2005  handles writing zipfiles across a network using" class="section-title" href="#Nov 03, 2005  handles writing zipfiles across a network using">Note:</a>
netrw#NetWrite()
### <a id="v1 Sep 15, 2005  Initial release, had browsing, reading, and writing" class="section-title" href="#v1 Sep 15, 2005  Initial release, had browsing, reading, and writing">Note:</a>


## <a id="" class="section-title" href="#">Vim Tw 78 Ts 8 Ft Help Noet Norl Fdm Marker</a> 



